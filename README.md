# Service Anatomy

人気サービスを解剖する分析マガジン。国内外・ジャンルを問わず、1記事で1つのサービスを取り上げ、
**サービス解説 / UX分析 / 技術構成の推定 / ビジネスモデル** の4面から公開情報ベースで分析する。
ja/en 完全バイリンガル。

> 非公式の分析メディアです。掲載サービスの運営各社とは無関係で、内容は公開情報に基づく
> 執筆時点の分析・推測を含みます。商標は各社に帰属します。

## スクリーンショット

<!-- TODO: 公開時にスクショを追加 -->

## 技術構成

- **Next.js 16**（App Router / TypeScript / CSP は Worker が HTML ごとに nonce を付与）
- **コンテンツ**: `content/articles/<slug>/{ja.md, en.md}` — gray-matter frontmatter +
  unified（remark-parse / remark-gfm / remark-directive / remark-rehype / rehype-slug / rehype-stringify）
- **記事内コンポーネント**: `::scorecard` / `::techstack` ディレクティブ → HTML コメントマーカー →
  純関数分割（split.ts）→ React interleave 描画
- **i18n**: `[locale]` セグメント + `Localized<T>` 型（翻訳漏れは型エラー）
- **SEO**: sitemap（hreflang alternates）/ BlogPosting JSON-LD / 記事別動的 OG 画像 / RSS 2.0
- **デザイン**: プレーン CSS + CSS 変数トークン。Web フォントは欧文セリフ（Newsreader・約2KB）のみ。
  日本語セリフはシステム明朝（ヒラギノ明朝/游明朝）、本文はシステムフォント

## 開発コマンド

```bash
npm run dev        # 開発サーバー
npm run build      # 本番ビルド
npm run typecheck  # tsc --noEmit
npm test           # vitest
npm run coverage   # カバレッジ（engine/i18n 100% ゲート）
```

## 品質指標

- `src/engine/**` / `src/i18n/**` カバレッジ 100%（CI ゲート）
- CI: gitleaks / npm audit / typecheck / coverage / build / Lighthouse リグレッションガード
- 目標: Lighthouse mobile 98+ / desktop 100
- Mozilla Observatory: **A+（score 125・12/12）** — 2026-10-06 に serviceanatomy.com で実測
  - 経緯: 2026-09-14 B（75）→ ビーコンを HTML から外して B+（80）→ 2026-10-06 A+（125）
  - `content-security-policy`: Worker の入口（`worker.ts`）が HTML の応答ごとに
    `script-src` の `'unsafe-inline'` を毎リクエストの nonce に置き換え、インライン `<script>` に
    同じ nonce を付ける（`src/lib/csp-nonce.ts`）。`'strict-dynamic'` は付けない
  - `subresource-integrity`: ビーコンはハイドレーション後に追加するので HTML に外部スクリプトが無い。
    **SRI は足さない** — `beacon.min.js` はバージョンの付かない URL を Cloudflare が差し替える運用なので、
    `integrity` を固定すると次の更新でビーコンだけ黙って止まる
