# Service Anatomy

人気サービスを解剖する分析マガジン。国内外・ジャンルを問わず、1記事で1つのサービスを取り上げ、
**サービス解説 / UX分析 / 技術構成の推定 / ビジネスモデル** の4面から公開情報ベースで分析する。
ja/en 完全バイリンガル。

> 非公式の分析メディアです。掲載サービスの運営各社とは無関係で、内容は公開情報に基づく
> 執筆時点の分析・推測を含みます。商標は各社に帰属します。

## スクリーンショット

<!-- TODO: 公開時にスクショを追加 -->

## 技術構成

- **Next.js 16**（App Router / TypeScript / 静的ヘッダーの CSP）
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
- Mozilla Observatory: **B（score 75・10/12）** — 2026-09-14 に Workers の本番URLで実測
  ※ 落ちている2項目はどちらも意図した代償で、目標から外している（AGENTS.md の公開ゲートも同様）
    - `content-security-policy` −20: 2026-09-12 の CSP 移行（nonce → `'unsafe-inline'`）による
    - `subresource-integrity` −5: Cloudflare Web Analytics のビーコン導入による。導入前は
      外部スクリプトが1本も無く素通りで通っていた項目。**SRI は足さない** —
      `beacon.min.js` はバージョンの付かない URL を Cloudflare が差し替える運用なので、
      `integrity` を固定すると次の更新でビーコンだけ黙って止まる
