# nonce CSP の撤去（service-anatomy / ai-primer / acro-finder）

日付: 2026-09-12
対象リポジトリ: service-anatomy, ai-primer, acro-finder
状態: 設計承認済み・実装前

この設計書は3リポジトリ横断のため service-anatomy に置き、ai-primer と acro-finder の
PR からリンクする。3本の変更内容はほぼ同型で、差分は「リポジトリごとの差異」節に集約した。

## なぜやるか

Vercel の Hobby アカウントが 2026-08-11 から `Account is blocked.` でデプロイ不能になっている。
最後に成功したデプロイは 2026-08-06 02:44 UTC で、9/1 の月次境界を越えても回復していない
（2026-09-12 に6本の PR をマージして再実証済み）。月次リセット待ちでは解消しない。

Vercel に残っている5プロジェクトのうち、この3本は Cloudflare Workers へ移行できない。
Next 16 の `proxy` は Node ランタイム専用で Edge 指定ができず、OpenNext は Node middleware を
サポートしていない（Cloudflare の公式サポート表に明記）。3本は nonce を middleware で
発行しているため、middleware を捨てない限り移行できない。

さらに nonce CSP は逼迫の直接の原因でもある。回避策が連鎖している。

```
nonce CSP
  → per-request レンダリングが必要 → 全ルート force-dynamic
    → CDN キャッシュに一切乗らない
      → robots.ts でクローラーを抑制（service-anatomy / ai-primer）
      → Link prefetch を無効化（acro-finder/app/facilities/page.tsx）
```

nonce を外すと、この連鎖の根拠がすべて消える。

## 決定事項

**`script-src 'self' 'unsafe-inline'` に着地する。** インラインXSS防御と Observatory A+ 115 を
代償として受け入れる。

検討して却下した代替:

- **ビルド時ハッシュ + `'strict-dynamic'`** — 防御水準とスコアは保てるが、Next の
  インライン bootstrap はページごとに内容が変わるためルート別ハッシュ生成の機構が必要で、
  毎ビルド再計算になる。`_headers` は複数マッチがカンマ連結される既知の罠もある。
- **Worker 側で HTMLRewriter による nonce 注入** — nonce CSP を完全に維持できるが、
  毎リクエストで HTML を書き換えるため、逼迫を招いたコスト構造がそのまま残る。

## 必須の技術的制約

**`'strict-dynamic'` は nonce と同時に外さなければならない。** CSP Level 3 の仕様では
`'strict-dynamic'` が指定されると allowlist と `'self'` / `'unsafe-inline'` は無視される
（MDN: "any allowlist or source expressions such as `'self'` or `'unsafe-inline'` will be ignored"）。
nonce だけを削って `'strict-dynamic'` を残すと、信頼の起点が存在せずスクリプトが一切動かない。
この罠に対する回帰ガードをテストで置く（「テスト」節）。

**`headers()` の呼び出し自体が動的レンダリングを強制する。** `force-dynamic` を消すだけでは
静的化しない。`(await headers()).get("x-nonce")` の削除が実質的なトリガーになる。

**`<script type="application/ld+json">` に nonce は不要。** データブロックは実行されないため
script-src の対象外。JsonLd コンポーネントから `nonce` prop は型ごと落とせる。

## 設計

### CSP の置き場所

per-request の `proxy.ts` をやめ、各リポジトリに既にある `next.config` の `securityHeaders` に
静的ヘッダーとして統合する。`next.config` の `headers()` は Vercel と OpenNext/Workers の
両方で効くので単一の正本になる。

`public/_headers` は採用しない。Cloudflare 専用になり、複数マッチのカンマ連結問題を踏む。

### CSP の中身

```
default-src 'self'
script-src 'self' 'unsafe-inline'            # dev のみ 'unsafe-eval' を足す
style-src 'self' 'unsafe-inline'             # 現状のまま
font-src 'self'
img-src <リポジトリごと>
connect-src 'self'
manifest-src 'self'
frame-ancestors 'none'
base-uri 'self'
form-action 'self'
object-src 'none'
upgrade-insecure-requests
```

dev の `'unsafe-eval'` は Next の開発オーバーレイに必要なので `NODE_ENV` 分岐で維持する。

### テスト可能なモジュールへの切り出し

CSP 文字列を `next.config` に直書きせず、単体テストから import できるモジュールに置く。

- service-anatomy: `src/lib/csp.ts`
- ai-primer: `src/lib/csp.ts`
- acro-finder: `lib/csp.ts`（root 直下の `lib/` を使う既存構成に合わせる）

`next.config` はこれを import して `securityHeaders` に組み込む。

### 変更するファイル

| 対象 | 変更 |
| --- | --- |
| `proxy.ts` | 削除（3本） |
| `lib/csp.ts` | 新規（3本） |
| `next.config.*` | `securityHeaders` に CSP を追加（3本） |
| `layout.tsx` | `export const dynamic = "force-dynamic"` とコメントを削除（3本） |
| 各 page | `headers().get("x-nonce")` と `nonce={...}` を削除（計14ページ） |
| `json-ld.tsx` / `JsonLd.tsx` | `nonce` prop を型ごと削除（3本） |
| `JsonLd.test.tsx` | nonce アサーションを更新（acro-finder のみ） |
| nonce 由来のコメント | 現状に合わせて修正。挙動は変えない |

nonce 受け渡しの箇所（`grep -rl 'headers()).get("x-nonce")'` による実測・計14ページ）:

- service-anatomy（8件）: `[locale]/page.tsx`, `[locale]/category/[category]/page.tsx`,
  `[locale]/articles/[slug]/page.tsx`, `[locale]/compare/page.tsx`, `[locale]/tech/page.tsx`,
  `[locale]/tag/[tag]/page.tsx`, `[locale]/compare/[slug]/page.tsx`, `[locale]/tech/[tech]/page.tsx`
- ai-primer（2件）: `[locale]/page.tsx`, `[locale]/learn/[trackId]/[lessonSlug]/page.tsx`
- acro-finder（4件）: `area/[pref]/page.tsx`, `owners/page.tsx`, `facilities/[id]/page.tsx`,
  `facilities/page.tsx`

`next/headers` の import が nonce のためだけに存在する箇所は import も削除する。

### 触らないもの

- `service-anatomy/src/app/[locale]/rss.xml/route.ts` の `force-dynamic`
- `service-anatomy/src/app/api/anatomy.json/route.ts` の `force-dynamic`
  （コメント通りエッジ1時間キャッシュ目的で、nonce 由来ではない）
- `robots.ts` のクローラー抑制ルール本体と `facilities/page.tsx` の prefetch 無効化
  （根拠は消えるがSEOと転送量の判断が混ざるため別PR。コメントのみ現状に合わせる）

## リポジトリごとの差異

| repo | img-src | 追加ディレクティブ | next.config | Permissions-Policy |
| --- | --- | --- | --- | --- |
| service-anatomy | `'self' data:` + `content/og-image-hosts.json` の全オリジン | なし | `.ts` | `geolocation=()` |
| ai-primer | `'self' data:` | なし | `.ts` | `geolocation=()` |
| acro-finder | `'self' data: blob: https:` | `worker-src 'self' blob:` | **`.js` → `.ts` へ変換** | `geolocation=(self)` |

acro-finder は `next.config.js`（CommonJS / `module.exports`）なので、`lib/csp.ts` を import する
ために `next.config.ts` へ変換する。Next 16 は TS 設定を直接サポートしており、他2本と構成が揃う。

service-anatomy の `img-src` は `scripts/fetch-og-cards.mjs` が生成する
`content/og-image-hosts.json` を読み込む。この import は `proxy.ts` から `lib/csp.ts` へ移す。

## 到達点と限界

**到達する**: middleware が消えて OpenNext 互換になる。Cloudflare 移行の障害が外れる。
nonce が強制していた per-request レンダリングが解けるので、プリレンダリングできる
ルートは実際にプリレンダリングされる。

**到達しない**: 全ページがキャッシュに乗るわけではない。`generateStaticParams` が
無いルートは動的のままで、フルルートの CDN キャッシュには乗らない（実測: ビルド後の
`prerender-manifest.json` の `dynamicRoutes` に現れない）。有無を実測した。

| repo | generateStaticParams | 結果 |
| --- | --- | --- |
| ai-primer | 7ルートにあり | 広くプリレンダリングされる |
| service-anatomy | `[locale]/layout.tsx` のみ | 記事/タグ/tech は動的のまま。**CDN キャッシュには乗らない** |
| acro-finder | なし | `area/[pref]` / `facilities/[id]` はオンデマンド動的 |

完全な静的化には `generateStaticParams` の追加が必要。今回の範囲外とし、次の一手として残す。

**失う**: インラインXSS防御。Observatory は `unsafe-inline` を強く減点するため A+ 115 からの
低下は確実。移行後に再計測して実測値を記録する。これは受け入れた代償であり、想定外の劣化ではない。

## テスト

1. **`'strict-dynamic'` 再追加の回帰ガード（今回いちばん効く保険）**
   `lib/csp.ts` に対する単体テストで次を主張する。
   - `nonce-` を含まない
   - `'strict-dynamic'` を含まない（nonce なしで足すとサイト全体が沈むため）
   - `script-src` / `object-src 'none'` / `frame-ancestors 'none'` / `base-uri 'self'` など
     必須ディレクティブが揃っている
   - production ビルドで `'unsafe-eval'` を含まない
2. **既存スイートが green のまま** — service-anatomy 945 / ai-primer 407 / acro-finder 135
3. **`JsonLd.test.tsx` の更新** — nonce アサーションを外し、ld+json の直列化と `<` の
   エスケープ（スクリプト境界脱出の防止）は残す
4. **ビルド出力の前後比較** — `npm run build` のルート表（○ / ƒ）を取得し、動的から
   静的への変化を実測値として記録する
5. **実ブラウザ検証（CDP）** — コンソールに CSP 違反が出ないことを確認する。リポジトリの
   既存の慣例に従う
6. **残骸の確認** — `grep` で `x-nonce` / `nonce-` / `strict-dynamic` がゼロであること

## 実装順序

security の変更なので、1本で通して検証してから残り2本へ横展開する。

1. **ai-primer** を最初にやる。nonce 受け渡しが2箇所で最小、かつ `generateStaticParams` が
   揃っているので静的化の効果がビルド出力にはっきり出る。ここで手順を確定させる。
2. **acro-finder** — `next.config` の TS 変換を含むぶん手順が1つ多い。
3. **service-anatomy** — nonce 受け渡し8ページで最大。`og-image-hosts.json` の移設もある。

各リポジトリで独立した PR を立てる。CSP か OpenNext かの切り分けができなくなるため、
Cloudflare 移行は別 PR とする（環境変数が Worker に自動で移らず機能が黙って死ぬ事故が
lifeplan-simulator で実際に起きているため、移行は独立した検証を要する）。

## 訂正（2026-09-12・最終レビュー後）

当初この設計書は「ページがキャッシュ可能になる」「記事/タグ/tech はオンデマンド動的
（CDNキャッシュは効く）」と書いていた。ビルド後の `prerender-manifest.json` で実測すると
`generateStaticParams` が無いルートは `dynamicRoutes` に現れず、フルルートの CDN キャッシュ
には乗らない。上の記述は訂正済み。

この誤りは実害を持ちうる。`robots.ts` のクローラー抑制と `facilities/page.tsx` の prefetch
抑制は「キャッシュに乗らないので 1 リクエストがそのまま転送量になる」ことを根拠にしている。
キャッシュが効くと誤解した読者がそれらを不要と判断して外すと、2026-08-05 に無料枠 10GB へ
到達したのと同じ転送量の事故が再発する。
