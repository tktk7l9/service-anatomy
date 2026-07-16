<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
# service-anatomy 開発規約（AI/Claude向け）

人気サービス（国内外・ジャンル横断）を解剖する分析ブログ。1記事=1サービスで
①サービス解説 ②UX分析 ③技術構成 ④ビジネスモデル を扱う。ja/en完全バイリンガル・
テック系エディトリアル（雑誌風）デザイン。

## アーキテクチャの背骨

- **CSP は proxy.ts の per-request nonce 方式**（ai-primer 実証済み・Observatory A+ 前提）。
  ページは `force-dynamic`。`output: 'export'` や静的化で nonce を壊さないこと。
  インライン `<script>`（JSON-LD 等）は必ず `(await headers()).get("x-nonce")` の nonce を付ける。
- **i18n は `[locale]` セグメント + `Localized<T> = Record<"ja"|"en", T>`**。
  middleware での locale 判定はしない。翻訳漏れは型エラーで検出される — `Partial` で逃げない。
- **記事は `content/articles/<slug>/{ja.md, en.md}`**。slug はディレクトリ名が正（frontmatter に持たない）。
  frontmatter の検証は `src/engine/articles/schema.ts`（手書きバリデータ）。日付は必ず引用符付き
  文字列で書く（gray-matter の YAML Date 自動変換を schema.ts が不正として弾く）。
- **本文 Markdown は `src/engine/markdown/render.ts`**（unified + remark-directive）でサーバー側 HTML 変換。
  MDX 禁止。生 HTML は remark-rehype が既定で無視する（安全）— この性質を維持する。
  `::scorecard` / `::techstack` は HTML コメントマーカー経由で React コンポーネントに差し替わる
  （`split.ts` が純関数分割）。
- 実行時 fs 読み込みのため next.config.ts の `outputFileTracingIncludes` で content/ を同梱。
  デプロイ後は記事ページの実動作（500 にならないこと）を必ず確認する。
- **全記事の構造化データを `/api/anatomy.json` で公開**（`src/engine/articles/export.ts`・CORS 全許可）。
  frontmatter のスキーマを変えたら export も追随させること。

## テスト方針

- `src/engine/**` と `src/i18n/**` は **カバレッジ 100%**（vitest.config.ts の thresholds がゲート。CI で強制）。
- コンテンツ整合性は `content.test.ts` が横断検証（ja/en 両ファイル存在・言語中立フィールドの等価・
  sources≥1・scores 範囲・confirmed には evidenceUrl 必須・h2 4本以上・`::techstack` 存在）。
  記事追加時はテストが自動で対象に含める設計を保つこと。
- React コンポーネントは presentation 層としてカバレッジ対象外（smoke テストは書く）。

## 記事執筆規約（法務・品質の掟）

- **観測できた事実は `:::fact`** で出典（sources / evidenceUrl）必須。**推測は `:::guess`** で明示し、
  断定語を使わない（「〜とみられる」「〜と推測される」）。
- 技術構成（techStack）の confidence は confirmed（一次情報あり）/ likely（強い状況証拠）/
  speculative（推測）の3段階。confirmed は evidenceUrl 必須（テストで強制）。
- 企業・個人への否定的断定を避ける（名誉毀損リスク）。批評は事実ベース+代替解釈の提示で。
- スクリーンショット・ロゴ画像は使わない（著作権・商標）。ビジュアルは自作 SVG 生成アートのみ。
  **唯一の例外 = 記事末尾の公式リンクカード**: serviceUrl の OGP を「公式サイトへのリンクプレビュー」
  として表示する（SNS のリンクカードと同じ慣行の範囲）。画像は自サーバーへ複製せず各社サーバーから
  直接表示し、`img-src` は `content/og-image-hosts.json` のオリジンだけ許可する。
  取得は `npm run og-cards`（scripts/fetch-og-cards.mjs）→ 生成物をコミット。記事追加時に再実行する。
  サムネイル・ヒーロー等、リンクプレビュー以外の用途に OGP 画像を使わないこと。
- 記述の鮮度: `lastVerified`（ISO日付）必須。執筆時に Web 検索・実観測（curl -sI 等）で必ず検証する
  （LLM の学習知識を信用しない）。`npm run freshness` が lastVerified の 90 日超過を一覧する —
  週次の棚卸しで実行し、超過記事は再検証して lastVerified を更新するか、定点観測（再解剖）の候補にする。
- ja を先に書き、en は同一コミット内で同期する（片言語だけの変更を残さない）。

## 開発コマンド

- `npm run dev` / `npm run build` / `npm start`
- `npm run typecheck` / `npm test` / `npm run coverage`（100%ゲート）
- `npm run og-cards`（リンクカード再取得）/ `npm run freshness`（lastVerified 鮮度一覧）

## コミット粒度

- 1コミット = 1つの完結した変更（記事1本、コンポーネント1つ等）。テスト green の状態でコミット。

## 公開前

- private 開始。公開は publish-check 経由のみ（gitleaks 0 / npm audit 全0 / PII なし / Observatory A+）。
- フッターと about に「非公式・公開情報ベースの分析」ディスクレーマーを常設（外さない）。
