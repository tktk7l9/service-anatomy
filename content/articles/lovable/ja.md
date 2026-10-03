---
service: "Lovable"
title: "作ったアプリを、自分の店で売らない — LovableがChatGPT/Claudeの中に直接配り始めた理由"
description: "会話だけでアプリを丸ごと生成するLovable。前身GPT Engineerから2024年12月に改名し、8ヶ月でARR1億ドル・評価額18億ドルに達し、2025年12月にはシリーズBで評価額66億ドル、2026年8月にはシリーズCで評価額133億ドルへ到達した。2026年7月にはLovable製アプリをChatGPT・Claudeの中で直接使えるようにする配信を開始——[Cursor](/ja/articles/cursor)と同じく短期間で売上を伸ばした開発者ツールが、なぜ自社アプリ内での消費に固執しないのかを公式情報から解剖する。"
lead: "Lovableで作ったアプリの利用者は、Lovableのサイトを訪れるとは限らない。2026年7月、Lovableは自社で作られたアプリをChatGPTやClaudeの中で直接使えるようにする配信機能を始めた。スウェーデン・ストックホルム発のこの会社は、前身GPT Engineerからの改名からわずか8ヶ月でARR1億ドル、2025年12月には評価額66億ドル、2026年8月には評価額133億ドルに達している。自社アプリを自社の店に囲い込まない、この会社の設計を解剖する。"
category: dev-tool
tags: [ai, app-builder, vibe-coding, supabase, developer-tools]
publishedAt: "2026-07-23"
updatedAt: "2026-10-03"
lastVerified: "2026-10-02"
serviceUrl: "https://lovable.dev/"
vendor: "Lovable Labs Incorporated"
origin: "SE"
heroTheme: "lovable"
scores: { product: 4.5, ux: 4.0, tech: 3.5, business: 4.5 }
techStack:
  - layer: "バックエンド連携"
    name: "Supabase (database / auth integration)"
    confidence: confirmed
    evidence: "Lovable公式ドキュメントに、Supabase連携がデータベース設計・マイグレーション・認証（Supabase Auth）・ストレージ・Edge Functionsを会話から扱え、全プランで使えると明記（2026-10-02確認）"
    evidenceUrl: "https://docs.lovable.dev/integrations/supabase"
  - layer: "自社バックエンド基盤"
    name: "Lovable Cloud & AI (built-in backend)"
    confidence: confirmed
    evidence: "Lovable公式ドキュメントに、組み込みバックエンドはSupabaseのオープンソース基盤を利用していると明記（2026-10-02確認）。公式ブログによればリリースは2025年9月29日"
    evidenceUrl: "https://docs.lovable.dev/features/cloud"
  - layer: "生成AIモデル"
    name: "Anthropic (Claude)"
    confidence: confirmed
    evidence: "Anthropic公式の導入事例が、LovableはClaudeを使ってソフトウェア生成を提供していると紹介（2026-10-02確認）。Lovable公式ブログもOpus 5.5（2026-09-22）とFable 5.1（2026-09-01）の採用を告知している。同社は特定のモデルに依存しない方針を掲げており、公式FAQは提供元を挙げず「現行のフロンティアモデル」とだけ記している"
    evidenceUrl: "https://claude.com/customers/lovable"
  - layer: "生成アプリの標準構成"
    name: "TanStack Start"
    confidence: confirmed
    evidence: "Lovable公式FAQに、2026年5月13日以降に作られた新規アプリはサーバーサイドレンダリング付きのTanStack Startを使い、それ以前のアプリはReact + Viteだと明記（2026-10-02確認）"
    evidenceUrl: "https://docs.lovable.dev/introduction/faq"
  - layer: "アプリの実行基盤"
    name: "workerd (runtime open-sourced by Cloudflare)"
    confidence: confirmed
    evidence: "Lovable公式ブログ（2026-08-18）に、公開された各アプリをCloudflareのworkerdランタイム向けのワーカーとしてビルドし、V8 isolateごとに分離して配信すると明記。同じ記事によれば、lovable.dev自体もVercel上のNext.jsからこの基盤へ移行した"
    evidenceUrl: "https://lovable.dev/blog/how-we-migrated-lovable-dev-away-from-nextjs"
  - layer: "エージェント機能"
    name: "Lovable Agent (autonomous build mode)"
    confidence: confirmed
    evidence: "Lovable公式ブログ（2025-07-23）に、Lovable Agentが標準になり、依頼の解釈からコードベースの調査・修正・要約までを逐次の指示なしで進めると明記"
    evidenceUrl: "https://lovable.dev/blog/agent"
  - layer: "配信統合（2026年新設）"
    name: "ChatGPT / Claude (Lovable apps used inside them)"
    confidence: confirmed
    evidence: "Lovable公式ブログ（2026-07-15）に、公開済みのLovableアプリにMCPサーバーを追加し、ChatGPTやClaudeなどのAIツールの中から直接使えるようにしたと明記"
    evidenceUrl: "https://lovable.dev/blog/agent-integrations"
  - layer: "ビジュアル編集"
    name: "Visual Edits (Figma-style front-end editing)"
    confidence: confirmed
    evidence: "Lovable公式ブログ（2025-02-12）に、Visual Editsがプロンプトなしで文字・サイズ・スタイルをその場で直せる、Figmaに近い操作感の編集機能だと明記"
    evidenceUrl: "https://lovable.dev/blog/introducing-visual-edits"
sources:
  - label: "Lovable公式: Pricing（クレジット制・無料枠・クレジット消費の例）"
    url: "https://lovable.dev/pricing"
    accessedAt: "2026-10-02"
  - label: "Lovable公式ブログ（発表の一覧）"
    url: "https://lovable.dev/blog"
    accessedAt: "2026-10-02"
  - label: "Lovable公式ブログ: Series C（2026-08-12・4億ドル調達・評価額133億ドル）"
    url: "https://lovable.dev/blog/series-c"
    accessedAt: "2026-10-02"
  - label: "Lovable公式ブログ: Series B（2025-12-18・3億3,000万ドル調達・評価額66億ドル）"
    url: "https://lovable.dev/blog/series-b"
    accessedAt: "2026-10-02"
  - label: "Lovable公式ブログ: Series A（2025-07-17・2億ドル調達・評価額18億ドル）"
    url: "https://lovable.dev/blog/200m-series-a-fundraise"
    accessedAt: "2026-10-02"
  - label: "Lovable公式ブログ: 1,500万ドルの追加調達（2025-02-25・Creandumがリード）"
    url: "https://lovable.dev/blog/fundraise-series-a-announcement"
    accessedAt: "2026-10-02"
  - label: "Lovable公式ブログ: $100M ARR & Lovable Agent（2025-07-23）"
    url: "https://lovable.dev/blog/agent"
    accessedAt: "2026-10-02"
  - label: "Lovable公式ブログ: One year of Lovable（2025-11-18・ARR2億ドル）"
    url: "https://lovable.dev/blog/one-year-of-lovable"
    accessedAt: "2026-10-02"
  - label: "Lovable公式ブログ: Introducing Lovable Cloud and AI（2025-09-29）"
    url: "https://lovable.dev/blog/lovable-cloud"
    accessedAt: "2026-10-02"
  - label: "Lovable公式ブログ: Introducing Visual Edits（2025-02-12）"
    url: "https://lovable.dev/blog/introducing-visual-edits"
    accessedAt: "2026-10-02"
  - label: "Lovable公式ブログ: Your Lovable app now works inside ChatGPT and Claude（2026-07-15）"
    url: "https://lovable.dev/blog/agent-integrations"
    accessedAt: "2026-10-02"
  - label: "Lovable公式ブログ: Lovable acquires Sutro（2026-09-18）"
    url: "https://lovable.dev/blog/lovable-acquires-sutro-to-make-software-easier-to-explain-and-easier-to-trust"
    accessedAt: "2026-10-02"
  - label: "Lovable公式ブログ: Lovable acquires Molnett（2025-11-25）"
    url: "https://lovable.dev/blog/lovable-welcomes-molnett"
    accessedAt: "2026-10-02"
  - label: "Lovable公式ブログ: lovable.devをNext.jsから移行した経緯（2026-08-18・TanStack Startとworkerd）"
    url: "https://lovable.dev/blog/how-we-migrated-lovable-dev-away-from-nextjs"
    accessedAt: "2026-10-02"
  - label: "Lovable公式ブログ: The model picker is a dead end（2026-08-11・モデルの使い分けと自社で学習したモデル）"
    url: "https://lovable.dev/blog/the-model-picker-is-a-dead-end"
    accessedAt: "2026-10-02"
  - label: "Lovable公式ブログ: Opus 5.5 now in Lovable（2026-09-22）"
    url: "https://lovable.dev/blog/opus-5-5-now-in-lovable"
    accessedAt: "2026-10-02"
  - label: "Lovable公式ブログ: Our response to the April 2026 incident（2026-04-22）"
    url: "https://lovable.dev/blog/our-response-to-the-april-2026-incident"
    accessedAt: "2026-10-02"
  - label: "Lovable公式ブログ: You can now chat with Lovable for free（2026-09-24）"
    url: "https://lovable.dev/blog/chat-for-free"
    accessedAt: "2026-10-02"
  - label: "Lovable公式ドキュメント: Credits and usage（付与クレジット・追加購入の単価）"
    url: "https://docs.lovable.dev/introduction/credits-and-usage"
    accessedAt: "2026-10-02"
  - label: "Lovable公式ドキュメント: Lovable Cloud（Supabaseのオープンソース基盤を利用）"
    url: "https://docs.lovable.dev/features/cloud"
    accessedAt: "2026-10-02"
  - label: "Lovable公式ドキュメント: Supabase連携"
    url: "https://docs.lovable.dev/integrations/supabase"
    accessedAt: "2026-10-02"
  - label: "Lovable公式ドキュメント: FAQ（エージェントのモデル・生成アプリの技術構成はTanStack Start）"
    url: "https://docs.lovable.dev/introduction/faq"
    accessedAt: "2026-10-02"
  - label: "Anthropic公式: Lovable導入事例（Claudeの利用・公開12か月でARR2億ドル、現在は4億ドルと記載）"
    url: "https://claude.com/customers/lovable"
    accessedAt: "2026-10-02"
  - label: "Wikipedia: Lovable (company)（GPT Engineerからの改名史・Supabase連携・2025年3月のセキュリティ脆弱性報道の集約）"
    url: "https://en.wikipedia.org/wiki/Lovable_(company)"
    accessedAt: "2026-10-02"
---

## サービス解説

Lovableは、会話形式のプロンプトからフルスタックのWebアプリをまるごと生成するサービスだ。Wikipediaの集約情報によれば、2023年にAnton Osika氏がオープンソースプロジェクト「GPT Engineer」として始め、商用版のGPT Engineer Appを経て、2024年12月に「Lovable」へ改名して一般公開された。運営元Lovable Labs Incorporatedはスウェーデン・ストックホルムに拠点を置く。

:::fact
Lovable公式ブログによれば、2025年2月にCreandumがリードする1,500万ドルの追加資金調達を経て、同年7月17日にはシリーズAで2億ドルを調達し評価額18億ドルに達した——公式ブログ自身が「ローンチからわずか8ヶ月」と表現している。6日後の7月23日には、ARR1億ドル到達と自律型ビルド機能「Lovable Agent」の発表が同時に行われた。同年12月18日にはシリーズBで3億3,000万ドルを調達し、評価額は66億ドルになった。2026年8月12日にはシリーズCで4億ドルを調達し、評価額は133億ドルになった（Menlo Venturesがリード、EQTが運用するScaleup Europe Fundが共同リード）。同じ発表によれば、2024年11月の公開以降に作られたプロジェクトは6,000万件を超え、Lovable製アプリへの訪問は月9億回を超える。買収も続いており、公式ブログは2025年11月にMolnett、2026年9月18日にSutroの買収を発表した。Sutroからは創業者と3人のエンジニアが加わる。Wikipediaの集約情報によれば、2025年時点の従業員数は120人程度とされ、シリーズCの発表は年内にチームを約450人へ広げる計画を示している。
:::

:::pull
[Cursor](/ja/articles/cursor)はVS Codeのフォークという回り道を選び、短期間で売上を伸ばした。Lovableは、作ったアプリを自社サイトの外に配るという別の道で、同じように短期間で伸びた。
:::

::scorecard

## UX分析

LovableのUXは、コードを書かせないことよりも、会話とビジュアル編集の往復を短くすることに重点を置いている。

- **会話でアプリがまるごと立ち上がる**。プロンプト入力だけでフロントエンド・バックエンド・データベースまで含むアプリが生成され、ゼロから環境構築する手間を省く設計になっている。
- **ビジュアル編集で微調整の往復を短縮**。2025年2月リリースのVisual Editsにより、コードを直接触らずにFigmaに近い感覚でフロントエンドを調整できる。
- **エージェント化で「作り切る」体験へ**。2025年7月のLovable Agentにより、逐次の指示出しを減らし、より複雑なビルドを自律的に進められるようになった。
- **消費の場を自社サイトの外にも広げた**。2026年7月15日、公開済みのLovableアプリにMCPサーバーを足して、ChatGPTやClaudeの中で直接使えるようにする配信機能が始まった。作る場所と使われる場所を、意図的に切り離した設計だ。
- **モデルを選ばせない**。公式FAQによれば、ビルドに使うモデルを利用者が切り替える設定はなく、モデルの更新は全利用者へ自動で配られる。2026年9月24日には、作る前の相談に使えるチャットが無料で使えるようになった。

## 技術構成

::techstack

:::fact
Lovable公式ブログによれば、2025年2月12日にFigmaに近い操作感の編集機能「Visual Edits」、同年7月23日に自律型ビルド機能「Lovable Agent」、同年9月29日に組み込みバックエンド「Lovable Cloud & AI」（データベース・認証・ファイル保存を含む）を投入した。2026年7月15日には、生成したアプリをChatGPTやClaudeの中から直接使える配信機能を、MCPサーバーの形で追加している。Lovable公式ドキュメントによれば、この組み込みバックエンドはSupabaseのオープンソース基盤を利用しており、それとは別に、利用者が自分のSupabaseへ直接つなぐ連携も全プランで提供されている。Anthropic公式の導入事例はLovableをClaudeの利用企業として紹介しており、Lovable公式ブログも2026年9月にFable 5.1とOpus 5.5の採用を告知した。同じ公式ブログ（2026年8月11日）は、作業に応じてモデルを使い分ける方針と、自社で追加学習したモデルが本番のビルド作業の一部を担っていることを説明している。生成されるアプリは、公式FAQによれば2026年5月13日以降の新規分がTanStack Start、それ以前がReact + Viteで、公開されたアプリはCloudflareのworkerdランタイム向けのワーカーとして配信される。lovable.dev自体も、Vercel上のNext.jsからこの基盤へ移された（公式ブログ・2026年8月18日）。

Wikipediaの集約情報によれば、2025年3月にはSupabase連携アプリの一部でアクセス制御の設定不備によりデータベース内容が公開状態になっていたという脆弱性が報じられた。公式ブログ（2026年4月22日）は、2026年2月3日から4月20日のあいだ、公開プロジェクトのチャット履歴とソースコードがリンクを知るほかの利用者から見える状態だったと報告している。同社は報告から2時間以内に修正したこと、非公開プロジェクトとLovable Cloudは影響を受けなかったことを説明し、脆弱性報告の受付体制を見直すとしている。
:::

:::guess
Supabase連携に加えて自社の組み込みバックエンド「Lovable Cloud & AI」を投入したのは、[Cursor](/ja/articles/cursor)がまずサードパーティモデルのファインチューニングで立ち上げ（2024年時点）、後から自社モデルを加えたのと同様、「まず借り物で立ち上げ、後から重要な層を内製化する」という段階的な戦略の一形態とみられる。ただし組み込みバックエンド自体がSupabaseのオープンソース基盤の上にあるため、土台を作り直したというより、借りた土台を自社の製品として包み直した内製化だと考えられる。自社で追加学習したモデルを使い始め、自社サイトまで自社の配信基盤へ移したことは、内製化の対象がバックエンドからモデルと配信の層へ広がりつつあることを示しているとみられる。2025年3月に報じられたアクセス制御の不備と、2026年4月に同社が報告した公開プロジェクトの閲覧範囲の問題は、会話だけでアプリを生成する体験の速さと、セキュリティ設定という専門知識を要する領域との間に生じるギャップを象徴していると考えられる——生成の速さを追求するほど、初期設定の安全側への倒し込みが製品としての責任として重くなる構造だと推測される。2025年11月に新規プロジェクトを非公開が既定の設定へ変えたという同社の説明は、この方向への対応と読める。ChatGPT・Claude内での配信開始は、自社サイトへの集客に依存せず、既存の巨大なAIアシスタントの利用者基盤にアプリを直接届けるという、配信網を持たない開発者ツールならではの現実的な選択と考えられる。
:::

## ビジネスモデル

Lovableの収益は、クレジット制のサブスクリプション（Free/Pro/Business/Enterprise）が中心だ。

:::fact
Lovable公式のPricingページ（2026年10月2日確認）によれば、Freeプランは1日5ビルドクレジット（月30まで）と月20クラウドクレジット、アプリに組み込むAI機能向けの月4クレジットを付与する。Pro・Businessプランは、プランに含まれるクレジットが毎月残高に加わり、ビルド・クラウド・アプリ内AI機能に共通で使える。Enterpriseはボリュームに応じたクレジット価格とされる。席数による課金はなく、ワークスペースの人数は全プランで無制限だ。クレジット消費量は標準のモードではタスクの複雑さに応じて変動し、ボタンの色を変える指示が0.5クレジット、画像付きのランディングページ生成が1.7クレジットという例が示されている。Plan Modeは1メッセージ1クレジット。公式ドキュメントによれば、追加購入の単価はProが50クレジット15ドル、Businessが50クレジット30ドルである。事業面では、2025年2月の1,500万ドル追加調達を経て、同年7月のシリーズA（2億ドル・評価額18億ドル）とARR1億ドル到達がローンチから8ヶ月というタイミングで重なり、同年12月のシリーズB（3億3,000万ドル・評価額66億ドル）へと5ヶ月で評価額が3倍以上になった。さらに約8ヶ月後の2026年8月のシリーズC（4億ドル・評価額133億ドル）で、評価額は約2倍になった。公式ブログ（2025年11月18日）は公開1年でARRが2億ドルに達したと発表しており、Anthropic公式の導入事例は現在のARRを4億ドルと記している（時点の記載はない。2026年10月2日閲覧）。
:::

:::guess
クレジット制の料金設計は、タスクの複雑さに応じて原価（AIモデルの推論コスト）と課金を連動させる狙いがあると考えられ、Cursorが各プランに一定のモデル利用量を含め、超過分をAPI価格の従量課金にしている（2026年10月時点）のと同じ、生成AIプロダクト特有の原価構造への対応とみられる。評価額がわずか5ヶ月で3倍以上になった背景には、ARR1億ドル到達という実績に加え、「vibe coding」と呼ばれる会話駆動の開発スタイルそのものへの投資家の期待が上乗せされているとみられる。ChatGPT・Claude内での配信開始は、開発ツールとしての売上だけでなく、生成されたアプリの利用そのものからも収益機会を広げようとする布石である可能性があると推測される。
:::

自社サイトへの集客に頼らず、作ったアプリをChatGPTやClaudeという他社の巨大な利用者基盤の中に直接配る。Lovableの解剖から見えるのは、[Cursor](/ja/articles/cursor)がVS Codeのフォークという回り道で伸びたのと同じ系譜——借り物の基盤の上で、自社の配信網を持たないまま短期間で成長するという、AIネイティブな開発者ツールに共通する設計思想だ。
