---
service: "Lovable"
title: "作ったアプリを、自分の店で売らない — LovableがChatGPT/Claudeの中に直接配り始めた理由"
description: "会話だけでアプリを丸ごと生成するLovable。前身GPT Engineerから2024年12月に改名し、8ヶ月でARR1億ドル・評価額18億ドルに達し、2025年12月にはシリーズBで評価額66億ドルへ到達した。2026年7月にはLovable製アプリをChatGPT・Claudeの中で直接使えるようにする配信を開始——[Cursor](/ja/articles/cursor)と並ぶ最速成長の開発者ツールが、なぜ自社アプリ内での消費に固執しないのかを公式情報から解剖する。"
lead: "Lovableで作ったアプリの利用者は、Lovableのサイトを訪れるとは限らない。2026年7月、Lovableは自社で作られたアプリをChatGPTやClaudeの中で直接使えるようにする配信機能を始めた。スウェーデン・ストックホルム発のこの会社は、前身GPT Engineerからの改名からわずか8ヶ月でARR1億ドル、2025年12月には評価額66億ドルに達している。自社アプリを自社の店に囲い込まない、この会社の設計を解剖する。"
category: dev-tool
tags: [ai, app-builder, vibe-coding, supabase, developer-tools]
publishedAt: "2026-07-23"
updatedAt: "2026-07-23"
lastVerified: "2026-07-23"
serviceUrl: "https://lovable.dev/"
vendor: "Lovable Labs Incorporated"
origin: "SE"
heroTheme: "lovable"
scores: { product: 4.5, ux: 4.0, tech: 3.5, business: 4.5 }
techStack:
  - layer: "バックエンド連携"
    name: "Supabase連携（データベース/認証基盤）"
    confidence: likely
    evidence: "Wikipediaの集約情報によれば、生成したアプリをSupabaseのデータベース基盤に接続できる仕組みが提供されているとされる。Lovable公式の連携詳細ページへは今回アクセスできず未確認のためlikely扱い"
  - layer: "自社バックエンド基盤"
    name: "Lovable Cloud & AI（組み込みバックエンド）"
    confidence: confirmed
    evidence: "Lovable公式ブログに、2025年9月リリースのLovable Cloud & AIが、データ永続化・認証を含む組み込みバックエンドを提供すると明記"
    evidenceUrl: "https://lovable.dev/blog"
  - layer: "エージェント機能"
    name: "Lovable Agent（自律型ビルド機能）"
    confidence: confirmed
    evidence: "Lovable公式ブログに、2025年7月リリースのLovable Agentが、ユーザーの逐次指示を減らし自律的に複雑なビルドを行う機能と明記"
    evidenceUrl: "https://lovable.dev/blog"
  - layer: "配信統合（2026年新設）"
    name: "ChatGPT / Claude内でのLovableアプリ利用"
    confidence: confirmed
    evidence: "Lovable公式ブログに、2026年7月、Lovableで作られたアプリをChatGPTおよびClaude内で直接利用できるようになったと明記"
    evidenceUrl: "https://lovable.dev/blog"
  - layer: "ビジュアル編集"
    name: "Visual Edits（Figma風のフロントエンド編集機能）"
    confidence: confirmed
    evidence: "Lovable公式ブログに、2025年2月リリースのVisual Editsが、コード編集なしで即座にフロントエンドを修正できるFigma風のビジュアルエディタと明記"
    evidenceUrl: "https://lovable.dev/blog"
sources:
  - label: "Lovable公式: Pricing（Free/Pro/Business/Enterpriseの料金体系・クレジット制）"
    url: "https://lovable.dev/pricing"
    accessedAt: "2026-07-23"
  - label: "Lovable公式ブログ（資金調達史・ARR推移・Lovable Agent/Cloud/ChatGPT・Claude配信の発表）"
    url: "https://lovable.dev/blog"
    accessedAt: "2026-07-23"
  - label: "Wikipedia: Lovable (company)（GPT Engineerからの改名史・Supabase連携・2025年3月のセキュリティ脆弱性報道の集約）"
    url: "https://en.wikipedia.org/wiki/Lovable_(company)"
    accessedAt: "2026-07-23"
---

## サービス解説

Lovableは、会話形式のプロンプトからフルスタックのWebアプリをまるごと生成するサービスだ。Wikipediaの集約情報によれば、2023年にAnton Osika氏がオープンソースプロジェクト「GPT Engineer」として始め、商用版のGPT Engineer Appを経て、2024年12月に「Lovable」へ改名して一般公開された。運営元Lovable Labs Incorporatedはスウェーデン・ストックホルムに拠点を置く。

:::fact
Lovable公式ブログによれば、2025年2月に1,500万ドルの追加資金調達（欧州人材採用に充当）を経て、同年7月にはシリーズAで2億ドルを調達し評価額18億ドルに達した——公式ブログ自身が「ローンチからわずか8ヶ月」と表現している。同月、ARR1億ドル到達と自律型ビルド機能「Lovable Agent」の発表が同時に行われた。同年12月にはシリーズBで3億3,000万ドルを調達し、評価額は66億ドルに達したとされる。Wikipediaの集約情報によれば、2025年時点の従業員数は120人程度とされる。
:::

:::pull
[Cursor](/ja/articles/cursor)がVS Codeのフォークという回り道でARR最速記録を作った。Lovableは、自社アプリを自社サイトの外に配ることで、また別の最速記録を作った。
:::

::scorecard

## UX分析

LovableのUXは、コードを書かせないことよりも、会話とビジュアル編集の往復を短くすることに重点を置いている。

- **会話でアプリがまるごと立ち上がる**。プロンプト入力だけでフロントエンド・バックエンド・データベースまで含むアプリが生成され、ゼロから環境構築する手間を省く設計になっている。
- **ビジュアル編集で微調整の往復を短縮**。2025年2月リリースのVisual Editsにより、コードを直接触らずにFigmaに近い感覚でフロントエンドを調整できる。
- **エージェント化で「作り切る」体験へ**。2025年7月のLovable Agentにより、逐次の指示出しを減らし、より複雑なビルドを自律的に進められるようになった。
- **消費の場を自社サイトの外にも広げた**。2026年7月、Lovableで作ったアプリをChatGPTやClaudeの中で直接使えるようにする配信機能が始まった。作る場所と使われる場所を、意図的に切り離した設計だ。

## 技術構成

::techstack

:::fact
Lovable公式ブログによれば、2025年9月に組み込みバックエンド「Lovable Cloud & AI」（データ永続化・認証を含む）をリリースし、同年7月には自律型ビルド機能「Lovable Agent」、2025年2月にはFigma風のビジュアルエディタ「Visual Edits」を投入した。2026年7月には、生成したアプリをChatGPTおよびClaude内で直接利用できる配信機能を追加している。Wikipediaの集約情報によれば、生成アプリをSupabaseのデータベース基盤に接続する仕組みも提供されているとされ、2025年3月にはSupabase連携アプリの一部でアクセス制御の設定不備によりデータベース内容が公開状態になっていたという脆弱性が報じられた。
:::

:::guess
Supabase連携に加えて自社の組み込みバックエンド「Lovable Cloud & AI」を投入したのは、[Cursor](/ja/articles/cursor)がサードパーティモデルのファインチューニングと自社フロンティアモデルを併走させているのと同様、「まず借り物で立ち上げ、後から重要な層を内製化する」という段階的な戦略の一形態とみられる。2025年3月に報じられたアクセス制御の不備は、会話だけでアプリを生成する体験の速さと、セキュリティ設定という専門知識を要する領域との間に生じるギャップを象徴していると考えられる——生成の速さを追求するほど、初期設定の安全側への倒し込みが製品としての責任として重くなる構造だと推測される。ChatGPT・Claude内での配信開始は、自社サイトへの集客に依存せず、既存の巨大なAIアシスタントの利用者基盤にアプリを直接届けるという、配信網を持たない開発者ツールならではの現実的な選択と考えられる。
:::

## ビジネスモデル

Lovableの収益は、クレジット制のサブスクリプション（Free/Pro/Business/Enterprise）が中心だ。

:::fact
Lovable公式のPricingページによれば、Freeプランは1日5ビルドクレジット・月20クラウドクレジットを付与、Pro・Businessプランは月間クレジット残高に応じた課金（具体的な付与量は非公開）、Enterpriseはボリュームに応じたカスタム価格とされる。クレジット消費量はタスクの複雑さに応じて変動し、簡易なスタイル変更が0.5クレジット、複雑なランディングページ生成が1.7クレジットという例が示されている。事業面では、2025年2月の1,500万ドル追加調達を経て、同年7月のシリーズA（2億ドル・評価額18億ドル）とARR1億ドル到達がローンチから8ヶ月というタイミングで重なり、同年12月のシリーズB（3億3,000万ドル・評価額66億ドル）へと5ヶ月で評価額が3倍以上になった。
:::

:::guess
クレジット制の料金設計は、タスクの複雑さに応じて原価（AIモデルの推論コスト）と課金を連動させる狙いがあると考えられ、Cursorが個人利用と従量課金APIを分けているのと同じ、生成AIプロダクト特有の原価構造への対応とみられる。評価額がわずか5ヶ月で3倍以上になった背景には、ARR1億ドル到達という実績に加え、「vibe coding」と呼ばれる会話駆動の開発スタイルそのものへの投資家の期待が上乗せされているとみられる。ChatGPT・Claude内での配信開始は、開発ツールとしての売上だけでなく、生成されたアプリの利用そのものからも収益機会を広げようとする布石である可能性があると推測される。
:::

自社サイトへの集客に頼らず、作ったアプリをChatGPTやClaudeという他社の巨大な利用者基盤の中に直接配る。Lovableの解剖から見えるのは、[Cursor](/ja/articles/cursor)がVS Codeのフォークという回り道で最速記録を作ったのと同じ系譜——借り物の基盤の上で、自社の配信網を持たないまま最速成長を実現するという、AIネイティブな開発者ツールに共通する設計思想だ。
