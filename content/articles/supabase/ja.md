---
service: "Supabase"
title: "「ゼロから作らない」と宣言した会社 — 既製OSSを束ねて100億ドルに至ったSupabaseの編集力"
description: "Firebaseのオープンソース代替を掲げるSupabase。実体はPostgresを中心にPostgREST（Haskell）・Kong・Denoなど既製OSSを束ね、足りない所だけGo・Elixirで自作する「編集」のプロダクトだ。新規データベースの60%超がAIツール経由という追い風まで、公式ドキュメントと資金調達発表から解剖する。"
lead: "Supabaseの公式アーキテクチャ文書には、異例の宣言が書いてある——「可能な限り、ゼロから開発せず既存のツールを使い、支援する」。Postgresという40年物のOSSを中心に既製部品を束ね、8ヶ月で開発者数を倍にし、評価額100億ドルに至った「作らない」戦略を解剖する。"
category: dev-tool
tags: [database, postgres, open-source, backend, baas]
publishedAt: "2026-07-21"
updatedAt: "2026-07-21"
lastVerified: "2026-07-21"
serviceUrl: "https://supabase.com/"
vendor: "Supabase Inc."
origin: "US"
heroTheme: "supabase"
scores: { product: 4.5, ux: 4.5, tech: 4.0, business: 4.0 }
techStack:
  - layer: "コアDB"
    name: "PostgreSQL"
    confidence: confirmed
    evidence: "公式アーキテクチャ文書に、全プロジェクトが専用のPostgresデータベースを持つと明記。プラットフォーム全体がPostgresを中心に設計されている"
    evidenceUrl: "https://supabase.com/docs/guides/getting-started/architecture"
  - layer: "自動REST API"
    name: "PostgREST (Haskell)"
    confidence: confirmed
    evidence: "公式アーキテクチャ文書に、サードパーティOSSのPostgREST（Haskell製）をそのまま採用し、DBスキーマから自動でREST APIを生成すると明記"
    evidenceUrl: "https://supabase.com/docs/guides/getting-started/architecture"
  - layer: "認証"
    name: "Supabase Auth (Go)"
    confidence: confirmed
    evidence: "公式アーキテクチャ文書に、Go製の自社開発コンポーネントとして明記"
    evidenceUrl: "https://supabase.com/docs/guides/getting-started/architecture"
  - layer: "リアルタイム・接続プール"
    name: "Realtime + Supavisor (Elixir)"
    confidence: confirmed
    evidence: "公式アーキテクチャ文書に、リアルタイム配信のRealtimeと接続プーラーSupavisorをいずれもElixirで自社開発と明記"
    evidenceUrl: "https://supabase.com/docs/guides/getting-started/architecture"
  - layer: "エッジ関数"
    name: "Deno"
    confidence: confirmed
    evidence: "公式アーキテクチャ文書に、Edge FunctionsのランタイムとしてサードパーティOSSのDenoを採用と明記"
    evidenceUrl: "https://supabase.com/docs/guides/getting-started/architecture"
  - layer: "公式サイト配信"
    name: "Vercel"
    confidence: confirmed
    evidence: "当サイトのHTTPヘッダー実観測（server: Vercel・x-nextjs-prerender、2026-07-21）"
    evidenceUrl: "https://supabase.com/"
sources:
  - label: "Supabase公式ドキュメント: Architecture（構成要素と各言語・「既存ツールを使い支援する」宣言）"
    url: "https://supabase.com/docs/guides/getting-started/architecture"
    accessedAt: "2026-07-21"
  - label: "Supabase公式ブログ: Series F（5億ドル・プレ評価額100億ドル・GICリード・2026-06-04）"
    url: "https://supabase.com/blog/supabase-series-f"
    accessedAt: "2026-07-21"
  - label: "Supabase公式ブログ: Series E（1億ドル・評価額50億ドル・Accel/Peak XVリード・2025-10）"
    url: "https://supabase.com/blog/supabase-series-e"
    accessedAt: "2026-07-21"
  - label: "Supabase公式GitHub: supabase/supabase（スター10.6万超を実確認）"
    url: "https://github.com/supabase/supabase"
    accessedAt: "2026-07-21"
---

## サービス解説

Supabaseは「Firebaseのオープンソース代替」を掲げるBaaS（Backend as a Service）だ。データベース・認証・ストレージ・リアルタイム配信・エッジ関数という、アプリのバックエンドに必要な部品一式を、数分でセットアップできる形で提供する。中心にあるのは独自DBではなく、40年の歴史を持つPostgreSQLそのものである。

:::fact
公式発表によれば、2026年6月4日にGICのリードで5億ドルをプレ評価額100億ドルで調達（Series F）。Stripeが2度目の出資で参加した。開発者数は約1,000万人と8ヶ月前から倍増し、データベース作成数は前年比600%増。新規データベースの60%超が「何らかのAIツールによって作成されている」と明記されている。その8ヶ月前の2025年10月にはSeries Eで1億ドル（評価額50億ドル）、さらにその4ヶ月前にはSeries Dで2億ドル（同20億ドル）を調達しており、1年で評価額が5倍になった。
:::

:::pull
公式文書に「可能な限りゼロから開発しない」と書く会社が、その方針のまま100億ドルになった。作る力ではなく、選んで束ねる力が製品になっている。
:::

::scorecard

## UX分析

SupabaseのUXは「バックエンドという工程の消去」に向けられている。対象は開発者で、体験の核心はスピードだ。

- **数分でバックエンドが生える**。プロジェクトを作るとPostgres・認証・API・ストレージが同時に立ち上がり、接続情報が発行される。従来は数日かかった初期構築が、コーヒーが冷める前に終わる。
- **ダッシュボードがDB管理をGUI化する**。テーブルエディタ・SQLエディタ・ログが一画面に収まり、psqlに触れたことのない開発者でもスキーマ設計から運用まで完結できる。
- **AIツールとの相性が新しい主戦場**。スキーマもAPIも標準的なPostgres/RESTである事実は、LLMが学習済みの知識で扱えることを意味する。新規DBの60%超がAIツール経由という数字は、この「標準性」がAI時代の資産に転化した証拠だ。
- **Row Level Securityという正直な代償**。データベース直結の設計は、アクセス制御をRLSポリシーとして書く学習コストを利用者に課す。簡単に始められるが、正しく守るには理解が要る——この段差はSupabaseのUXで最も批判が集まる部分でもある。

## 技術構成

::techstack

:::fact
公式アーキテクチャ文書は構成部品と出自を明記している。コアはPostgres（C・サードパーティOSS）、REST APIはPostgREST（Haskell・サードパーティOSS）、APIゲートウェイはKong（Lua・サードパーティOSS）、エッジ関数はDeno（サードパーティOSS）。一方、認証（Go）・リアルタイム配信（Elixir）・接続プーラーSupavisor（Elixir）・ストレージ（TypeScript)は自社開発だ。同文書には「技術選定の方針として、可能な限りゼロから開発せず、既存ツールを使い、支援する」と明記されている。本体リポジトリのスターは10万6,000超（2026-07-21実確認）。
:::

:::guess
HaskellのPostgRESTやLuaのKongをそのまま使う判断は、一貫した基準——「そのレイヤーで最良のOSSが既にあるなら採用し、無ければ作る」——の帰結とみられる。自作部分（認証・リアルタイム・プーラー）はいずれも「Postgresを複数人・大規模接続で使う」ときの隙間であり、埋める場所の選び方が的確だ。この戦略の弱点はアップストリーム依存だが、採用したOSSに開発支援を行うことでリスクを緩和している。Series Fで発表されたMultigres（Postgresの水平スケール層・Vitess共同開発者を招聘）は、「束ねる会社」が初めて最深部の自作に踏み出す転換点と推測される。
:::

## ビジネスモデル

Supabaseの収益はマネージドホスティングのサブスクリプションだ。OSSとしてセルフホストも可能だが、運用を肩代わりする有償クラウドが事業の本体である。

:::fact
公式のSeries F発表は、調達資金の使途としてOSS・Postgresツールの開発加速、事業成長、従業員株式の流動性提供の3点を挙げる。コミュニティメンバーが機関投資家と並んで出資できる枠をSeries Eで設けたことも公式に発表されている。
:::

:::guess
評価額の急騰（1年で20億→100億ドル）は、収益実績よりも「AIコーディングの標準バックエンド」というポジションへの先払いとみられる。AIツールがコードを書く時代には、人間の学習コストよりも「AIが正確に扱える標準性」が採用理由になる。SupabaseはPostgresとRESTという最も学習データの豊富な技術の上に立っているため、vibe codingの受け皿として構造的に有利だ。ただし60%がAIツール経由という数字は、無料利用の急増と有料転換率の乖離というリスクも同時に含んでおり、AIが作った1,000万のデータベースのうち何割が課金に育つかが、この評価額の答え合わせになると推測される。
:::

FigmaがエンジンをC++で自作し、CanvaがAWSを組み立てたように、バックエンドの構築にも「作る」と「束ねる」の分岐がある。Supabaseはその「束ねる」の極致で、選定眼と統合の丁寧さだけで製品を成立させた。ゼロから作らないと文書に明記する潔さは、OSSの時代の製品開発が「発明」から「編集」へ重心を移したことの、もっとも明快な宣言である。
