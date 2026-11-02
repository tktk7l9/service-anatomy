---
service: "PostHog"
title: "1つの製品で来た客が4つ使う、製品ごとに「いちばん安い競合」に値段を合わせる、10月だけで7,466件コミットされたMITのリポジトリ、そして1件15ドルのプルリクエスト — 分析ツールを束ねて「自動運転するプロダクト」を売り始めたPostHogを解剖する"
description: "プロダクト分析・セッションリプレイ・フィーチャーフラグのPostHogは、基本料金0ドル・席課金なしで、製品ごとに使った分だけ請求する。分析は月100万イベント、リプレイは月5,000録画まで無料で、その先は段階的に安くなる。ハンドブックは「各製品で最も安い競合に合わせ、ほかの製品を売って取り返す」と書き、2024年には自ら分析の売上が約30%減る値下げをした。2025年に評価額約9.2億ドルのシリーズD（Stripe主導）と14億ドルのシリーズEを調達し、いまは本番データからエージェントがプルリクエストを作る「自動運転するプロダクト」を名乗る。公開ハンドブック、料金ページ、アーキテクチャ文書、GitHubのAPI、当サイトの実観測から解剖する。"
lead: "PostHogのハンドブックには、自社の料金の決め方が書いてある。「既存の市場では、最も安い大手の競合に値段をおおむね合わせる」「ほかの製品を売って取り返す」。2024年12月の項には、その結果も書いてある。「1つの製品のために来た人が、4つ使うようになる」。分析ツールを、製品ごとに最安値で、何十個も並べる会社がどう稼ぎ、なぜいま1件15ドルのプルリクエストを売り始めたのかを解剖する。"
category: dev-tool
tags: [product-analytics, session-replay, feature-flags, open-source, clickhouse, usage-based-pricing, ai-agent, y-combinator]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
serviceUrl: "https://posthog.com/"
# Affiliate link placeholder: PostHog has no public affiliate or referral program (checked
# 2026-11-02: posthog.com/partners and posthog.com/referrals return 404, and the pricing page
# lists only startup, Y Combinator, nonprofit and annual discounts). Leave this block commented
# out unless the owner finds a program. Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<posthog-referral-link>"
#   program: "PostHog"
vendor: "PostHog Inc."
origin: "US"
heroTheme: "posthog"
scores: { product: 4.5, ux: 4, tech: 4.5, business: 4.5 }
techStack:
  - layer: "Webアプリ・API"
    name: "Django (Python)"
    confidence: confirmed
    evidence: "公式ドキュメント「PostHog's architecture」に「DjangoがUIとREST APIを提供する」と明記。GitHubの PostHog/posthog（2026-11-02時点・APIで取得）は主言語Python（約257MB）、TypeScriptが約170MB、Rustが約30MB。当サイトの実観測（2026-11-02）で、us.posthog.com の応答の server-timing ヘッダに django・pg・ch の項目があった"
    evidenceUrl: "https://posthog.com/docs/how-posthog-works"
  - layer: "高スループットの受け口"
    name: "Rust services (capture, feature flags, replay capture)"
    confidence: confirmed
    evidence: "公式ドキュメント「PostHog's architecture」に「イベントの受け取り、フィーチャーフラグの評価、セッションリプレイの取り込みのための高スループットなRustのマイクロサービス」と明記。インジェスチョンの文書は、受け口のcaptureサービスを「RustのHTTPサーバー」と説明する"
    evidenceUrl: "https://posthog.com/docs/how-posthog-works"
  - layer: "メッセージバス"
    name: "Kafka / WarpStream"
    confidence: confirmed
    evidence: "公式ドキュメント「PostHog's architecture」に、Kafkaを「インジェスチョンとストレージをつなぐ中央のメッセージバス」とし、インフラ図に「Kafka / WarpStream」と記載。ClickHouseの文書は「データはClickHouseに直接挿入されず、Kafkaから引き込む。これで取り込みが障害に強くなる」と書く"
    evidenceUrl: "https://posthog.com/docs/how-posthog-works"
  - layer: "イベントの保存と集計"
    name: "ClickHouse (sharded, ReplicatedReplacingMergeTree, self-managed on EC2)"
    confidence: confirmed
    evidence: "公式ドキュメント「ClickHouse」に、kafka_events（Kafkaテーブルエンジン）→ events_mv（マテリアライズドビュー）→ writable_events（Distributed、sipHash64(distinct_id)で振り分け）→ sharded_events（ReplicatedReplacingMergeTree）の流れを明記。アーキテクチャ文書のインフラ図は「ClickHouseクラスター（自前管理のEC2）」で、各シャードにレプリカ2つとZooKeeperを描く"
    evidenceUrl: "https://posthog.com/docs/how-posthog-works/clickhouse"
  - layer: "人物・設定・キャッシュ"
    name: "PostgreSQL (Aurora) + PgBouncer + Redis / Valkey"
    confidence: confirmed
    evidence: "公式ドキュメント「PostHog's architecture」のインフラ図に「Aurora PostgreSQL」「PgBouncer」「Redis / Valkey」を記載。ClickHouseの文書は「人物情報と distinct_id の対応の正本はPostgreSQLにあり、クエリを速くするためにClickHouseへ複製する」と書く"
    evidenceUrl: "https://posthog.com/docs/how-posthog-works"
  - layer: "バックグラウンド処理・CDP"
    name: "Celery + Temporal + Dagster / CDP worker (Node.js)"
    confidence: confirmed
    evidence: "公式ドキュメント「PostHog's architecture」に、バックグラウンドワーカーを「Celery（短いタスク）、Temporal（信頼性の要るワークフロー）、Dagster（定期のデータパイプライン）」とし、CDPワーカーをNode.jsと明記。インジェスチョンの文書は、CDPのインジェスチョンワーカーが変換、人物処理、イベント処理、ClickHouseへの書き込み、外部送信の順に処理すると説明する"
    evidenceUrl: "https://posthog.com/docs/how-posthog-works/ingestion-pipeline"
  - layer: "セッションリプレイ"
    name: "rrweb + S3 blob storage + ClickHouse (AggregatingMergeTree)"
    confidence: confirmed
    evidence: "公式ドキュメント「Replay ingestion」に、ブラウザでrrwebが「スナップショットデータ」を集め、専用のRustのHTTPサーバーが受け、録画本体をS3に、集約したセッション情報をClickHouseの session_replay_events（AggregatingMergeTree）に置くと明記。Kafkaのメッセージサイズ上限を超えるため、リプレイは別の受け口と取り込み基盤を持つ"
    evidenceUrl: "https://posthog.com/docs/how-posthog-works/recordings-ingestion"
  - layer: "クラウド・リージョン"
    name: "AWS EKS (us-east-1 Virginia / eu-central-1 Frankfurt)"
    confidence: confirmed
    evidence: "公式ドキュメント「PostHog's architecture」に「PostHog Cloudではアプリのサービスは AWS上のEKS（Kubernetes）クラスターで動き、データストアは別に管理する」と明記。ハンドブック「Security」は、データの置き場所をEU（ドイツのeu-central-1）か米国（バージニアのus-east-1）から選べると書く。日本のリージョンはない"
    evidenceUrl: "https://posthog.com/handbook/company/security"
  - layer: "配信の前段"
    name: "Envoy (app) / Cloudflare (SDK assets)"
    confidence: likely
    evidence: "当サイトの実観測（2026-11-02）で、us.posthog.com と eu.posthog.com は server: envoy を返して /login へ302で転送し、イベント受け口の us.i.posthog.com も server: envoy だった。SDKの配信元 us-assets.i.posthog.com/static/array.js は server: cloudflare と cf-cache-status: HIT を返した"
  - layer: "公開サイト"
    name: "Gatsby (PostHog/posthog.com) on Vercel"
    confidence: likely
    evidence: "GitHubの PostHog/posthog.com（主言語TypeScript）の package.json に gatsby 4.25.9 と react ^18.2.0 がある。当サイトの実観測（2026-11-02）で、posthog.com/pricing は server: Vercel と x-vercel-cache: HIT を返し、HTMLは約1.5MB（content-length 1,538,040）だった。どのリポジトリのビルドがVercelで配信されているかは公式に明記されていない"
    evidenceUrl: "https://github.com/PostHog/posthog.com"
  - layer: "課金"
    name: "Stripe (billing portal)"
    confidence: confirmed
    evidence: "公式ドキュメント「Billing common questions」に、請求設定の「Manage card details and view past invoices」からStripeへ移り、カードや請求先の更新、請求書の履歴を見られると明記"
    evidenceUrl: "https://posthog.com/docs/billing/common-questions"
sources:
  - label: "PostHog公式: Pricing"
    url: "https://posthog.com/pricing"
    accessedAt: "2026-11-02"
  - label: "PostHogハンドブック: How we got here（年表）"
    url: "https://posthog.com/handbook/story"
    accessedAt: "2026-11-02"
  - label: "PostHogハンドブック: How we make money"
    url: "https://posthog.com/handbook/how-we-make-money"
    accessedAt: "2026-11-02"
  - label: "PostHogハンドブック: Pricing principles"
    url: "https://posthog.com/handbook/engineering/feature-pricing"
    accessedAt: "2026-11-02"
  - label: "PostHogハンドブック: Contract rules"
    url: "https://posthog.com/handbook/growth/sales/contract-rules"
    accessedAt: "2026-11-02"
  - label: "PostHogハンドブック: How we get users"
    url: "https://posthog.com/handbook/how-we-get-users"
    accessedAt: "2026-11-02"
  - label: "PostHogハンドブック: Small teams"
    url: "https://posthog.com/handbook/company/small-teams"
    accessedAt: "2026-11-02"
  - label: "PostHogハンドブック: Compensation"
    url: "https://posthog.com/handbook/people/compensation"
    accessedAt: "2026-11-02"
  - label: "PostHogハンドブック: Security"
    url: "https://posthog.com/handbook/company/security"
    accessedAt: "2026-11-02"
  - label: "PostHog公式ブログ: PostHog raises a series D (and a small C)（2025-06-09）"
    url: "https://posthog.com/blog/series-d"
    accessedAt: "2026-11-02"
  - label: "PostHog公式ブログ: \"E\"xciting news（2025-09-29）"
    url: "https://posthog.com/blog/series-e"
    accessedAt: "2026-11-02"
  - label: "PostHog公式ブログ: We've decided to make less money [Part 1]（2024-07-23）"
    url: "https://posthog.com/blog/session-replay-pricing"
    accessedAt: "2026-11-02"
  - label: "PostHog公式ブログ: We've decided to make less money [Part 2]（2024-08-01）"
    url: "https://posthog.com/blog/analytics-pricing"
    accessedAt: "2026-11-02"
  - label: "PostHog公式ブログ: Sunsetting Kubernetes support for PostHog（2023-02-08）"
    url: "https://posthog.com/blog/sunsetting-helm-support-posthog"
    accessedAt: "2026-11-02"
  - label: "PostHog公式ドキュメント: PostHog's architecture"
    url: "https://posthog.com/docs/how-posthog-works"
    accessedAt: "2026-11-02"
  - label: "PostHog公式ドキュメント: Ingestion pipeline"
    url: "https://posthog.com/docs/how-posthog-works/ingestion-pipeline"
    accessedAt: "2026-11-02"
  - label: "PostHog公式ドキュメント: ClickHouse"
    url: "https://posthog.com/docs/how-posthog-works/clickhouse"
    accessedAt: "2026-11-02"
  - label: "PostHog公式ドキュメント: Replay ingestion"
    url: "https://posthog.com/docs/how-posthog-works/recordings-ingestion"
    accessedAt: "2026-11-02"
  - label: "PostHog公式ドキュメント: Self-host PostHog"
    url: "https://posthog.com/docs/self-host"
    accessedAt: "2026-11-02"
  - label: "PostHog公式ドキュメント: Disclaimer for open-source self-hosted PostHog"
    url: "https://posthog.com/docs/self-host/open-source/disclaimer"
    accessedAt: "2026-11-02"
  - label: "PostHog公式ドキュメント: Billing limits and alerts"
    url: "https://posthog.com/docs/billing/limits-alerts"
    accessedAt: "2026-11-02"
  - label: "PostHog公式ドキュメント: Billing common questions"
    url: "https://posthog.com/docs/billing/common-questions"
    accessedAt: "2026-11-02"
  - label: "PostHog公式ドキュメント: Data storage"
    url: "https://posthog.com/docs/privacy/data-storage"
    accessedAt: "2026-11-02"
  - label: "PostHog公式: Terms"
    url: "https://posthog.com/terms"
    accessedAt: "2026-11-02"
  - label: "PostHog公式: llms.txt"
    url: "https://posthog.com/llms.txt"
    accessedAt: "2026-11-02"
  - label: "GitHub: PostHog/posthog（LICENSE・ee/LICENSE・コミット履歴）"
    url: "https://github.com/PostHog/posthog"
    accessedAt: "2026-11-02"
  - label: "GitHub: PostHog/posthog-foss"
    url: "https://github.com/PostHog/posthog-foss"
    accessedAt: "2026-11-02"
  - label: "GitHub: PostHog/posthog.com"
    url: "https://github.com/PostHog/posthog.com"
    accessedAt: "2026-11-02"
---

PostHogは、Webやアプリの利用者の行動を記録して分析するツールとして始まり、いまはセッションリプレイ、フィーチャーフラグ、A/Bテスト、エラー追跡、アンケート、ログ、外部データの取り込み、AIの観測まで、料金ページだけで14の製品と8つの追加機能を1つのアカウントに並べている。どの製品にも月ごとの無料枠があり、その先は製品ごとに使った分だけ、量が増えるほど安い単価で請求する。基本料金はなく、利用者の席数でも課金しない。この料金の形は偶然ではなく、ハンドブックに書かれた「各製品で最も安い競合に合わせ、ほかの製品で取り返す」という方針から出てきたものだ。

## サービス解説

公開ハンドブックの年表「How we got here」によれば、PostHogはJamesとTimの2人が2020年1月23日に創業した（2人の姓は公式ブログの署名でJames Hawkins、Tim Glaserと確認できる。GitHubの PostHog/posthog も同じ2020年1月23日に作られている）。2019年8月から一緒に起業を試し、技術的負債の管理という最初のアイデアは失敗し、6つ目のアイデアがPostHogだった。Y CombinatorのW20バッチに入り、コードを書き始めて4週間でHacker Newsに公開し、数日で300以上のデプロイ、2週間後にGitHubのスターが1,500を超えたという。当初の動機は「利用者のデータを第三者に送りたくない」「元データにすべてアクセスしたい」「料金を選べない」という、SaaSの分析ツールへの開発者の不満だった。

:::fact
ハンドブックの年表（2026-11-02時点）によれば、資金調達は2020年4月のシード302.5万ドル、2020年12月のシリーズA 900万ドル（GV主導、累計1,200万ドル）、2021年6月のシリーズB 1,500万ドル（Y Combinator主導）と続く。2025年6月9日の公式ブログは、[Stripe](/ja/articles/stripe)主導で7,000万ドルのシリーズDを評価額9億2,000万ドルで調達し、YC、GV、Formus Capitalが参加したと発表した。同じ記事は、初期の社員に株を売る機会を作り、創業者の支配を強めるために、新規の資金は約1,000万ドルにとどめたシリーズCも行ったと書き、シリーズDでは全社員が権利確定済みの株の最大20%を売れるようにしたと述べている。2025年9月29日の公式ブログは、Peak XV Partners主導で7,500万ドルのシリーズEを評価額14億ドルで調達したと発表した。年表はこれを2025年10月の項に置き、2020年からの累計調達額を約1億9,400万ドル、人員を約140人としている。2026年初めの項は人員を約200人とし、PostHog Desktopを「おそらく過去最大のローンチ」と書く。
:::

年表には、事業の数字も率直に書かれている。2022年は売上が6倍になり、顧客獲得費用の回収期間は2カ月未満。2023年は人員を純増3人に抑えて売上を4倍にした。2024年4月には「今年最初のY Combinatorのバッチの54%がPostHogを採用した」。2024年10月には有料・無料を合わせた顧客が10万、利用者が25万を超え、人員は約65人、製品は約9つ、売上は「ARRで1,000万ドル台前半」。2024年12月にはキャッシュフローが黒字になり、約80人で約12製品を抱えていた。ハンドブック「How we get users」は、2026-11-02時点で「50万以上のチームがPostHogに登録した」と書いている。

:::fact
公式の料金ページ（2026-11-02時点）によれば、プランは2つだけだ。Freeはクレジットカード不要で、各製品に毎月の無料枠があり、プロジェクトは1つ、データの保持は1年、サポートはコミュニティ。Paidは「従量課金・基本料金0ドル」で、同じ無料枠を毎月使ったうえで超えた分だけを払い、プロジェクトは6つ、保持は7年、メールサポートが付く。「席課金はない。チーム全員が使える」。無料枠は、プロダクト分析が月100万イベント、セッションリプレイが月5,000録画、フィーチャーフラグとExperimentsが月100万リクエスト、アンケートが月1,500回答、エラー追跡が月10万例外、AIの観測が月10万イベント、ログが月10GB、メールが月1万通。超えた分の単価は量に応じて下がり、プロダクト分析は100万〜200万イベントが1イベント0.00005ドル、2億5,000万イベント超は0.000009ドル。セッションリプレイは5,001〜1万5,000録画が1録画0.005ドル、50万超は0.0015ドル。価格はすべて米ドルで、税抜きと明記されている。
:::

:::pull
「1つの製品のために来た人が、4つ使うようになる」。2024年12月の年表のこの一文が、PostHogの料金表がなぜ製品ごとに細かく分かれているのかを説明している。
:::

::scorecard

## UX分析

PostHogのUXは、画面のデザインよりも「料金をどう感じさせるか」に強く表れている。無料で始め、1つの製品だけを使い、上限を自分で決め、営業と話さずに払う。その流れをハンドブックの方針が1つずつ支えている。

- **最初の請求は「1件あたり何分の1セント」から始まる**。ハンドブック「How we make money」は、利用者が気に入った後に「毎月の大きな定額」で拡大の判断を重くしたくないとし、「追加のイベント1件ごとに、ごくわずかな額を請求する」と書く。料金ページの計算どおりなら、月1,000万イベントをすべて匿名イベントで送ると、100万件は無料、100万件が50ドル、800万件が274.4ドルで月324.4ドルになる（当サイトの計算。2024年8月1日の公式ブログも同じ量で「月324ドル」と例示している）。
- **「誰のイベントか」を記録すると単価が上がる**。料金ページは、人物のプロフィールにひも付く「Identified events」を、プロダクト分析の追加料金として別の段階表で載せている（100万〜200万件で1イベント0.000198ドル）。同じ月1,000万イベントをすべて人物にひも付けると、追加料金が755.6ドル増えて合計は月1,080ドルになる（当サイトの計算）。2024年8月1日の公式ブログは、匿名イベントを最大80%安くした理由を「identifyの処理はPostgresで人物のプロフィールを作成・更新・統合する、取り込みで最も複雑で高い工程の1つ」で、匿名イベントは「より安く速いClickHouseのテーブルだけ」で済むからだと説明している。
- **上限を決めると、超えた分は捨てられる**。公式ドキュメント「Billing limits」によれば、製品ごとにドルで請求の上限を設定でき、超えると取り込みと処理を止める。「超えた分のデータは永久に失われる」と明記し、組織のオーナーには上限と無料枠の80%と100%でメールが届く。ただしログの保持延長（1GB月0.05ドル）には上限をかけられない。驚く請求を避ける仕組みと、データを失う危険が、同じ設定の表と裏になっている。
- **値段は自分で計算できる**。料金ページは段階表と年契約の割引率をすべて公開し、年間のクレジット購入額が2万5,000〜5万9,999ドルで20%、50万〜99万9,999ドルで40%引き、2年契約で+3%、3年契約で+5%と書く。ハンドブック「Contract rules」は「月払いの顧客には、約束の有無にかかわらず割引しない」とし、利益を削る値引きは「とても稀（年に1件ほど）」とする。
- **AIエージェント向けの入口が、人向けの入口と並んでいる**。posthog.com/llms.txt は、すべてのドキュメントのURLに .md を付けると生のMarkdownが返ると書き、AIのコーディング支援に向けて「セットアップウィザード `npx @posthog/wizard@latest` を使う」よう指示している。同じファイルは、セッションリプレイが posthog-js では「既定で有効」で追加のコードが要らないとも書く。当サイトの実観測（2026-11-02）では、posthog.com の robots.txt はGooglebot、Bingbot、DuckDuckBot、Yetiに対して末尾が .md のURLだけを禁止していた。Markdown版はエージェントのためのもので、検索結果には出さない設計とみられる。

日本の利用者から見ると、データの置き場所はAWSの米国（バージニア）かEU（フランクフルト）の2択で、日本のリージョンはない。価格は米ドル建て・税抜きで、利用規約は税金を利用者の負担とし、準拠法を米国カリフォルニア州法、管轄をサンフランシスコ郡の裁判所としている。請求情報の管理と請求書の閲覧はStripeの画面で行う。

## 技術構成

::techstack

:::fact
公式ドキュメント「PostHog's architecture」（2026-11-02時点）によれば、PostHogの主な系統は、UIとREST APIを出すDjango、イベントの受け取り・フィーチャーフラグの評価・リプレイの取り込みを担うRustのマイクロサービス、両者をつなぐKafka、Celery・Temporal・Dagsterのバックグラウンドワーカー、取り込み時にイベントを処理して外部に送るCDP（Node.js）だ。PostHog Cloudでは、アプリのサービスはAWSのEKS（Kubernetes）で動き、データストアは別に管理される。インフラ図には、自前管理のEC2で動くClickHouseのクラスター（各シャードにレプリカ2つとZooKeeper）、Aurora PostgreSQLとPgBouncer、Redis / Valkey、録画とエクスポート用のS3、そして「Kafka / WarpStream」が描かれている。
:::

:::fact
公式ドキュメント「ClickHouse」によれば、イベントはClickHouseに直接書き込まれず、Kafkaテーブルエンジンの kafka_events からマテリアライズドビュー events_mv が引き出し、Distributedエンジンの writable_events が distinct_id のハッシュ（sipHash64）でシャードを選び、ReplicatedReplacingMergeTree の sharded_events に格納する。人物情報の正本はPostgreSQLにあり、クエリを速くするためにClickHouseへ複製され、シャード構成でも人物のテーブルは分割せず全ノードに複製して「ネットワーク越しのJOINを避ける」。インジェスチョンの文書によれば、Rustのcaptureサービスは、1つのプロジェクトの1つの distinct_id が「持続的に毎分およそ5,000イベント」を超えると、そのイベントを別の処理系（オーバーフロー）に回し、人物の処理を飛ばす。イベントは捨てず、APIは通常どおり200を返し、取り込みの警告を記録する。イベントに `$process_person_profile: false` を付けると、PostgreSQLの参照を省く「personless」モードになる。
:::

:::fact
公式ドキュメント「Replay ingestion」によれば、セッションリプレイはブラウザでrrwebが集めた「スナップショットデータ」を、専用のRustのHTTPサーバーが受け取る。スナップショットはKafkaのメッセージサイズの上限を超えることが多いため、リプレイは独自の受け口と取り込み基盤を持ち、セッションをディスクにまとめてから定期的にS3へ書き出して、ファイル数を減らし運用費を下げる。UIのためのメタデータはClickHouseの session_replay_events（AggregatingMergeTree）に置き、文書は元の基盤より「1行あたり少なくとも100分の1のデータ」で済むと書く。2024年7月23日の公式ブログは、このパイプラインと基盤の最適化を理由に、月2万5,000録画の料金を430ドルから85ドルに下げたと発表した。現在の料金表で計算しても、2万5,000録画は5,000録画が無料、1万録画が50ドル、1万録画が35ドルで、85ドルのままだ（当サイトの計算）。
:::

:::fact
GitHubの PostHog/posthog（2026-11-02時点・APIで取得）は、主言語Python、スター40,594、フォーク3,577、未解決のIssueとプルリクエストが合わせて5,205件、既定のブランチは master。2026年10月1日から31日までの master へのコミットは7,466件だった（APIのページ数から当サイトが集計）。LICENSEは「ee/ ディレクトリの中身は ee/LICENSE に従い、それ以外はMIT（Expat）」とし、ee/LICENSE は本番での利用に有効なPostHogのエンタープライズライセンスを求める（開発とテストのための複製と変更は認める）。所有者のコードを取り除いた読み取り専用のミラー PostHog/posthog-foss はMITで、自動で同期されている。
:::

:::fact
公式ドキュメント「Self-host PostHog」によれば、セルフホストはDocker ComposeでMITライセンスのまま無料で配られ、目安は4 vCPU・16GBメモリ・30GB超のストレージのVM。「PostHogにはバージョンがない」ためCVEを公開せず、セキュリティ修正を含むすべての変更が master からPostHog Cloudと最新のDockerイメージへ継続的に出る。免責の文書は、セルフホストを「趣味の人や、地下室のような変わった場所でホストする人向け」とし、1台で動くため「数十万イベントを超えると、大きな手間なしにはスケールしにくい」、商用サポートもデータ消失からの復旧支援もないと書く。有料プランの機能はすべてCloud専用だ。2023年2月8日の公式ブログ（共同創業者でCTOのTim Glaser氏）は、Kubernetes版の利用者は約3.5%で、小さなインフラチームがその支援に過大な時間を割いていたとして、有料のセルフホストの販売をやめ、Helmチャートの通常の更新を2023年5月31日で終えると発表した。
:::

:::guess
この構成は、料金表の単位とほぼ一対一で対応しているとみられる。イベントはRustで受けてKafkaに積み、ClickHouseに流すだけなら安い。人物にひも付けるとPostgreSQLの読み書きが加わり、だから「Identified events」は追加料金になる。録画はKafkaに載らないほど大きいので、専用の受け口とS3を使い、だから単位は「録画1件」になる。フラグの評価はRustのサービスが応え、単位は「リクエスト1件」になる。ハンドブックが「製品ごとに自力で採算が取れる道筋を持つ」「コストの下げ方を考える圧力を歓迎する」と書くとおり、技術の構成を変えて原価を下げ、その分を値下げに回すやり方が、少なくとも2024年のリプレイと分析では実際に起きている。
:::

:::guess
GitHubのリポジトリは、2025年夏以降に公開リポジトリのコミットが月1件ほどになった[Neon](/ja/articles/neon)とは逆に、1カ月7,000件を超えるコミットがそのまま公開の master に入っている。ただし、オープンソースの意味は「自分で運用して大規模に使える」ではなく、「同じコードを読めて、小さく試せる」に寄っているとみられる。有料機能はCloud専用で、セルフホストは数十万イベントで頭打ちになり、エンタープライズ向けのコードは ee/ に別のライセンスで置かれている。公開の度合いが高いことと、商用としてはCloud一本であることが、同じ会社の中で両立していると推測される。
:::

## ビジネスモデル

収益の柱は、製品ごとの従量課金と、定額の「プラットフォームパッケージ」と、年契約のクレジット購入だ。どれも、1つの製品の利益を最大にするより、顧客が使う製品の数を増やす方向に設計されている。

:::fact
ハンドブック「How we make money」は冒頭で「お金を持っていて、私たちの製品を気に入った人からお金をもらう。そうでない人からはもらわない」と書き、「各製品で最も安い競合に合わせる。時間をかけてほかの製品を売ることで取り返す」とする。ハンドブック「Pricing principles」はこれを細かく定め、既存の市場では「実際に大きな売上を出している、最も安い大手の競合」におおむね合わせ、新しい製品や無名のスタートアップの価格には合わせないとする。製品は1つずつ別に値付けし、フィーチャーフラグの呼び出しで生まれる `$feature_flag_called` イベントのように、ある製品に付随するイベントには課金しない。チームの利用者の追加は「口コミを増やす」ので無料、PostHog AIは提供のコストが高くても「原価に近く」請求する。値上げをする場合は、毎年の価格評価を経て、60日など十分前に知らせる。旧価格の据え置きは、自分で払っている顧客に3カ月ほどの移行期間を与えるだけで、「誰も旧価格を永遠には持たない」。
:::

:::fact
公式の料金ページ（2026-11-02時点）によれば、定額の追加は3つのプラットフォームパッケージで、Boostが月250ドル（プロジェクト無制限、ホワイトラベル、HIPAAのBAA、SSOの強制など）、Scaleが月750ドル（優先サポート、SAMLなど）、Enterpriseが月2,000ドル（RBAC、専任サポート、トレーニングなど）。ハンドブック「Pricing principles」は、これらを「量に応じてコストが増えない機能」にだけ使う定額と位置づける。割引は、創業2年未満・調達500万ドル未満のスタートアップに12カ月で5万ドルのクレジット、Y Combinatorの企業に年5万ドルのクレジット（調達2,500万ドル未満の間は更新可）、非営利団体に15%、条件を満たす自分で払う顧客の年払いに10%。ハンドブック「Contract rules」によれば、稼働率のSLAはEnterpriseパッケージか、割引後に年10万ドル以上払う契約の特別条件でしか付かず、契約条項の変更交渉は年2万ドル以上の契約に限られる。
:::

:::fact
料金ページには、エージェントに仕事をさせる製品の単価も並んでいる。PostHog AIは月500クレジットまで無料でその先1クレジット0.01ドル、リプレイを指定の観点で見直す「Replay vision」は2,500クレジットまで無料、PostHog Desktopは「AIのトークン使用量を原価で」2,000クレジットまで無料。「Inbox」は、製品のデータから兆候をまとめて報告にし、「対応できる問題にはプルリクエストを開き、チームがレビューしてマージできるようにする」製品で、単位は「PR」、月3件まで無料、その先は1件15ドルだ。2025年9月29日のシリーズEのブログは、調達の目的を「PostHogの第2幕」とし、「分析だけでなく開発ツールに深く入り、プルリクエストの生成に取りかかる」と書いた。llms.txt はいま、PostHogを「自動運転するプロダクトのためのプラットフォーム」と説明している。
:::

:::fact
ハンドブック「How we get users」は、マーケティングとセールスの費用が「有料プランへの登録から3カ月以内に回収できる」と書き、「顧客が私たちから買うのであって、私たちが売るのではない」とする。理由として、売上1億ドルを超えた同業の創業者たちが共通して「口コミという成長の仕組みを手放し、営業に寄ったこと」を後悔していた、と述べる。ハンドブック「How we make money」は大口の顧客について「取引を失うことを気にしない」「納品物を契約しない」「その顧客しか使わないものは作らない」と書く。組織は2〜6人の「小さなチーム」に分かれ、それぞれが「スタートアップのように」1つの領域を持つ。報酬は職種ごとにサンフランシスコの市場水準を基準にし、エンジニアは90パーセンタイルで払うと公開している。
:::

:::guess
製品ごとに最安値へ寄せる戦略は、1製品だけを売る競合には真似しにくいとみられる。単体の分析ツールやリプレイツールは、その製品の利益で会社を支えるしかないが、PostHogは「4つ使うようになる」顧客の合計で支えられる。2024年8月のブログが自ら「プロダクト分析の売上が約30%減る」と見込みながら値下げしたのも、この計算の上に立った判断と推測される。一方で、この形は製品の数が増え続けることを前提にしており、料金ページの段階表は製品と追加機能を合わせて22になった。ハンドブックは「利用者のために料金の複雑さを受け入れる」と書くが、どの製品にいくら払っているかを把握する責任は利用者の側に残る。
:::

:::guess
1件15ドルのプルリクエストは、これまでの「1件あたり何分の1セント」の単価とは桁が違う。イベントや録画のように原価から積み上げた単位ではなく、エンジニアの作業の一部を置き換える成果の単位で値付けした最初の製品とみられる。分析ツールを最安値で並べて集めたデータが、エージェントが働くための「文脈」になり、その文脈から作られる成果物にはより高い単価を付けられる。シリーズD・Eで調達した資金と約200人の人員が、この第2幕に向かっていると推測される。ただし、無料枠と原価に近い価格で口コミを集めてきたこれまでの方針と、成果に応じた高い単価がどう両立するかは、まだ料金表の外にある問いだ。
:::

PostHogは、分析ツールを1つずつ最安値で並べ、席課金をなくし、上限を利用者に握らせ、営業を置かずに買ってもらう仕組みで、2020年の創業から50万以上のチームを集めた。料金表の単位はそのままアーキテクチャの単位で、技術で原価を下げるたびに値段も下がってきた。いまその料金表の末尾に、1件15ドルのプルリクエストが加わっている。集めてきたデータを、エージェントの仕事にどれだけ変えられるかが、次の数年の評価を決めるとみられる。
