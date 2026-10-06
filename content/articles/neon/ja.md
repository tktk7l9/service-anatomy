---
service: "Neon"
title: "データベースの80%はAIエージェントが作り、Databricksに買収され、無料枠は100プロジェクト、公開リポジトリのコミットは2025年8月から月1件 — 「人のための無料枠」を「エージェントのための無料枠」に作り替えたNeonを解剖する"
description: "Postgresのストレージとコンピュートを分離し、ブランチと「ゼロへのスケール」を売りにしたサーバーレスPostgresのNeonは、2025年5月14日にDatabricksへの合流を発表し、いまは「Lakebase Postgres」を中核にした「エージェントのためのバックエンド」を名乗る。料金は最低料金のない従量課金で、Launchは1CU時間0.106ドル、ストレージは1GB月0.35ドル。無料枠は100プロジェクト、各100CU時間と1GB。2026年4月にはAzureリージョンを廃止し、9月にはFunctions・Object Storage・AI Gatewayを正式版にした。一方、Apache-2.0で公開されていたGitHubの本体リポジトリは2025年8月以降、月に1件ほどしかコミットがない。公式の料金ページ、ドキュメント、ブログ、Databricksのプレスリリース、GitHubのAPI、当サイトの実観測から解剖する。"
lead: "Neonの会社概要ページには、2つの数字が大きく書いてある。「毎日1,500万のPostgresデータベースが起動する」「データベースの80%は自動化されたエージェントが作る」。人が手で作る前提のデータベースの無料枠は、1つか2つのプロジェクトで十分だった。エージェントが1秒に1つ以上作る世界では、100プロジェクトが要る。Databricksに買収された会社が、無料枠を100に増やし、Azureから撤退し、公開リポジトリを静かにしたまま、何を売ろうとしているのかを解剖する。"
category: dev-tool
tags: [database, postgres, serverless, rust, ai-agent, open-source, baas, databricks]
publishedAt: "2026-10-06"
updatedAt: "2026-10-06"
lastVerified: "2026-10-06"
serviceUrl: "https://neon.com/"
# Affiliate link placeholder: Neon has no public affiliate program (checked 2026-10-06 on
# neon.com/pricing and the docs; only a Startup Program, an Open Source Program and an
# Agent Plan exist). Leave this block commented out unless the owner finds a program.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<neon-referral-link>"
#   program: "Neon"
vendor: "Neon, LLC（Databricks, Inc.の子会社）"
origin: "US"
heroTheme: "neon"
scores: { product: 4.5, ux: 4.5, tech: 4.5, business: 3.5 }
techStack:
  - layer: "ストレージエンジン（Pageserver / Safekeeper）"
    name: "Rust (neondatabase/neon, Apache-2.0)"
    confidence: confirmed
    evidence: "GitHubの neondatabase/neon（2026-10-06時点・APIで取得）は主言語Rust（約11.2MB、Pythonが約2.9MB、Cが約0.8MB）、ライセンスApache-2.0、スター23,173、2021年3月26日作成。READMEは「コンピュートノードはNeonのストレージエンジンに裏打ちされたステートレスなPostgresノード」で、ストレージエンジンは「Pageserver（スケーラブルなストレージバックエンド）」と「Safekeepers（WALを受け取り、Pageserverが処理してクラウドストレージへ上げるまで永続化する冗長なWALサービス）」から成ると書く。2022年7月8日の公式ブログは「Rustで書かれたオープンソースのマルチテナントなストレージエンジン」と題する"
    evidenceUrl: "https://github.com/neondatabase/neon"
  - layer: "コンピュート"
    name: "PostgreSQL (14–18, unmodified query engine)"
    confidence: confirmed
    evidence: "公式ドキュメント「アーキテクチャ概要」に「各Lakebase Postgresのコンピュートノードは標準のPostgresインスタンス。クエリエンジンの観点では、Postgres自体は何も書き換えられていない」と明記。バージョンポリシーのページは「Postgres 14、15、16、17、18をサポートし、公式のサポートポリシーに合わせて最新5つのメジャーバージョンを支える」と書く。2022年7月の公式ブログは「Postgresをフォークして保守することはしない。Postgresの変更は最小限にし、上流に入れることも期待する」と述べている"
    evidenceUrl: "https://neon.com/docs/introduction/architecture-overview"
  - layer: "WALの永続化と合意"
    name: "Safekeepers quorum (Paxos) + S3-compatible object storage"
    confidence: confirmed
    evidence: "公式ドキュメント「アーキテクチャ概要」に、Safekeeperの役割は「WALの永続的な複製」で、「トランザクションはSafekeeperの定足数がPaxosプロトコルでWALレコードを承認した時点でコミットとみなす」と明記し、オブジェクトストレージを「データベースの永続的な履歴を置く場所」と説明。2026年8月24日の公式ブログ「WAL + S3」も同じ構成を解説"
    evidenceUrl: "https://neon.com/docs/introduction/architecture-overview"
  - layer: "オートスケーリング"
    name: "NeonVM + autoscaler-agent on Kubernetes (Go, neondatabase/autoscaling)"
    confidence: confirmed
    evidence: "公式ドキュメント「オートスケーリングのアルゴリズム」に「autoscaler-agentは5秒ごとにデータベースが動くVMの1分間の負荷平均を確認し、vm-monitorは100ミリ秒ごとにPostgresのメモリ使用量を確認する」と明記。GitHubの neondatabase/autoscaling は「Kubernetesクラスターで動くPostgres群の垂直オートスケーリング」で、主言語Go、Apache-2.0、NeonVMがVMをカスタムリソースとして管理すると説明"
    evidenceUrl: "https://neon.com/docs/guides/autoscaling-algorithm"
  - layer: "バックエンド基盤（2026-09 正式版）"
    name: "Functions (Node.js 24) + Object Storage (S3-compatible) + AI Gateway (Databricks Foundation APIs) + Managed Better Auth"
    confidence: confirmed
    evidence: "公式ブログ（2026-09-17「The Neon backend is GA」）に、FunctionsはデータベースとBranchとリージョンを共有するNode.js 24のHTTPハンドラー、Object Storageはプロジェクトとともにブランチする S3互換のバケット、AI GatewayはDatabricks Foundation APIsを通じたフロンティア・オープンウェイトのモデルへの1つのAPIと明記。料金ページはManaged Better Authを無料枠で6万MAUまで含むと書く"
    evidenceUrl: "https://neon.com/blog/neon-backend-is-ga"
  - layer: "クラウド・リージョン"
    name: "AWS (8 regions; Azure regions deprecated 2026-04-07)"
    confidence: confirmed
    evidence: "公式ドキュメント「Regions」（2026-10-06時点）にAWSの8リージョン（us-east-1、us-east-2、us-west-2、eu-central-1、eu-west-2、ap-southeast-1、ap-southeast-2、sa-east-1）を列挙し、Azureの3リージョン（eastus2、westus3、gwc）は「非推奨で、新しいプロジェクトは作れない」と明記。廃止ガイドは2026年4月7日に非推奨、移行期限は2026年10月5日とし、Azureに残す選択肢としてDatabricks Lakebaseを案内する。東京リージョンはない"
    evidenceUrl: "https://neon.com/docs/introduction/regions"
  - layer: "ログイン基盤・公開サイト"
    name: "Keycloak (console.neon.tech) / Next.js on Vercel (neon.com) / Cloudflare (console)"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-06）で、console.neon.tech のアプリ画面は /realms/prod-realm/protocol/openid-connect/auth（Keycloakの認可エンドポイントの形式）へリダイレクトし、応答に server: cloudflare が付いた。neon.com は server: Vercel と x-nextjs-prerender: 1 を返し、HTMLに _next/static の参照が300件以上あった。ブラウザ以外のUser-Agentには text/markdown で本文を返し、link ヘッダに /docs/llms.txt や /.well-known/mcp/server-card.json を宣言していた"
  - layer: "AIクライアント向けの入口"
    name: "Neon MCP Server (remote, mcp.neon.tech) + Neon Local (Docker proxy) + Data API"
    confidence: confirmed
    evidence: "公式ドキュメント「Neon MCP Server」に、リモートの https://mcp.neon.tech/mcp でAIアシスタントがプロジェクトを操作できること、「LLMが要求した操作は必ず確認してから実行する」「MCPエージェントを本番データベースにつながない」と明記。GitHubの neondatabase/mcp-server-neon はTypeScript・MIT・スター648で2026年10月4日にpushされている"
    evidenceUrl: "https://neon.com/docs/ai/neon-mcp-server"
sources:
  - label: "Neon公式: Pricing"
    url: "https://neon.com/pricing"
    accessedAt: "2026-10-06"
  - label: "Neon公式ドキュメント: Plans"
    url: "https://neon.com/docs/introduction/plans"
    accessedAt: "2026-10-06"
  - label: "Neon公式ドキュメント: Agent Plan"
    url: "https://neon.com/docs/introduction/agent-plan"
    accessedAt: "2026-10-06"
  - label: "Neon公式: About us（年表と会社の数字）"
    url: "https://neon.com/about-us"
    accessedAt: "2026-10-06"
  - label: "Neon公式ブログ: Neon and Databricks（2025-05-14）"
    url: "https://neon.com/blog/neon-and-databricks"
    accessedAt: "2026-10-06"
  - label: "Databricksプレスリリース: Databricks Agrees to Acquire Neon（2025-05-14）"
    url: "https://www.databricks.com/company/newsroom/press-releases/databricks-agrees-acquire-neon-help-developers-deliver-ai-systems"
    accessedAt: "2026-10-06"
  - label: "Databricksプレスリリース: Databricks Grows >80% YoY, Surpasses $7B Revenue Run-Rate（2026-08-13）"
    url: "https://www.databricks.com/company/newsroom/press-releases/databricks-grows-80-yoy-surpasses-7b-revenue-run-rate-scales"
    accessedAt: "2026-10-06"
  - label: "Neon公式ドキュメント: Neon and Lakebase"
    url: "https://neon.com/docs/introduction/neon-and-lakebase"
    accessedAt: "2026-10-06"
  - label: "Neon公式ドキュメント: Architecture overview（Lakebase Postgres）"
    url: "https://neon.com/docs/introduction/architecture-overview"
    accessedAt: "2026-10-06"
  - label: "Neon公式ブログ: Architecture decisions in Neon（2022-07-08）"
    url: "https://neon.com/blog/architecture-decisions-in-neon"
    accessedAt: "2026-10-06"
  - label: "Neon公式ドキュメント: Autoscaling algorithm"
    url: "https://neon.com/docs/guides/autoscaling-algorithm"
    accessedAt: "2026-10-06"
  - label: "Neon公式ドキュメント: Postgres version policy"
    url: "https://neon.com/docs/postgresql/postgres-version-policy"
    accessedAt: "2026-10-06"
  - label: "Neon公式ブログ: Neon's New Pricing, Explained: Usage-Based, No Minimum（2025-08-14）"
    url: "https://neon.com/blog/new-usage-based-pricing"
    accessedAt: "2026-10-06"
  - label: "Neon公式ブログ: Reducing cost of compute by 25% as we scale on Databricks（2025-11-03）"
    url: "https://neon.com/blog/major-compute-price-reduction-on-neon"
    accessedAt: "2026-10-06"
  - label: "Neon公式ブログ: Neon gives you 100 projects for free, with 1 GB of Postgres storage each（2026-10-02）"
    url: "https://neon.com/blog/neon-free-plan-1-gb-per-project"
    accessedAt: "2026-10-06"
  - label: "Neon公式ブログ: The Neon backend is GA（2026-09-17）"
    url: "https://neon.com/blog/neon-backend-is-ga"
    accessedAt: "2026-10-06"
  - label: "Neon公式ブログ: Neon for Agent Platforms（2026-05-22）"
    url: "https://neon.com/blog/neon-for-agent-platforms"
    accessedAt: "2026-10-06"
  - label: "Neon公式ブログ: Replit App History powered by Neon branches（2025-05-21）"
    url: "https://neon.com/blog/replit-app-history-powered-by-neon-branches"
    accessedAt: "2026-10-06"
  - label: "Neon公式ドキュメント: Regions"
    url: "https://neon.com/docs/introduction/regions"
    accessedAt: "2026-10-06"
  - label: "Neon公式ドキュメント: Azure regions deprecation"
    url: "https://neon.com/docs/import/azure-regions-deprecation"
    accessedAt: "2026-10-06"
  - label: "Neon公式ドキュメント: SOC 2 compliance"
    url: "https://neon.com/docs/security/soc2-compliance"
    accessedAt: "2026-10-06"
  - label: "Neon公式ドキュメント: Neon MCP Server"
    url: "https://neon.com/docs/ai/neon-mcp-server"
    accessedAt: "2026-10-06"
  - label: "GitHub: neondatabase/neon（README・リリース・コミット履歴）"
    url: "https://github.com/neondatabase/neon"
    accessedAt: "2026-10-06"
  - label: "GitHub Issue #12945: Plans for PostgreSQL 18 support?（公開リポジトリの状態に関する利用者の議論）"
    url: "https://github.com/neondatabase/neon/issues/12945"
    accessedAt: "2026-10-06"
  - label: "GitHub: neondatabase/autoscaling"
    url: "https://github.com/neondatabase/autoscaling"
    accessedAt: "2026-10-06"
---

Neonは、Postgresのストレージとコンピュートを切り離し、使っていないときはゼロまで縮み、Gitのブランチのようにデータベースを複製できるサーバーレスPostgresだ。[Supabase](/ja/articles/supabase)がPostgresの周りに認証やストレージを束ねた「バックエンド一式」なら、Neonは「Postgresそのものを作り替えた」会社だった。2025年5月にDatabricksに買収されてからは、作り替えたPostgresを「Lakebase Postgres」と呼び、その周りに認証・関数・ストレージ・AIゲートウェイを足して、Supabaseと同じ「一式」を名乗るようになった。

## サービス解説

公式の会社概要ページの年表によれば、最初のコミットは2021年3月、技術プレビューは2022年6月15日、オープンアクセスは2022年12月、2023年8月に4,600万ドルを調達、2024年4月15日に正式版、2025年5月14日にDatabricksが買収した。創業者の名前は会社概要ページにはなく、2025年5月14日の公式ブログ「Neon and Databricks」の署名がNikita Shamgunov、Heikki Linnakangas、Stas Kelvichの3名だ。利用規約は契約の相手を「Neon, LLCの親会社であるDatabricks, Inc.」としている。

:::fact
Databricksのプレスリリース（2025年5月14日・サンフランシスコ）によれば、Databricksは「Neonで作られたデータベースの80%以上が、人ではなくAIエージェントによって自動で作られていた」ことを挙げてNeonの買収に合意した。CEOのAli Ghodsi氏は「AIネイティブでエージェント駆動のアプリケーションの時代が、データベースに求められるものを作り替えている」と述べ、Neonは「2021年に経験豊富なデータベースエンジニアとPostgresコントリビューターのチームが創業した」と紹介されている。買収額はプレスリリースにもNeonのブログにも書かれていない（TechCrunchやCNBCは「約10億ドル」と報じたが、当サイトでは一次情報で確認できていない）。同日のNeonのブログは「2024年に何かが変わった。AIネイティブのアプリが離陸し、数カ月のうちにデータベースの80%以上がAIエージェントによって作られるようになった」「Neonはどこにも行かない。チーム全員が残る」と書いた。2026年8月13日のDatabricksのプレスリリースは、全社の売上ランレートが70億ドルを超え、前年比80%超で成長し、「AIエージェント向けのサーバーレスPostgresであるLakebaseの売上ランレートが1億ドルを超えた」と発表している。
:::

:::fact
公式の料金ページ（2026-10-06時点）によれば、プランはFree・Launch・Scaleの3つで、LaunchとScaleは「使った分だけ払う」従量課金で月額の基本料金がない。Freeは100プロジェクト、プロジェクトごとに月100CU時間のコンピュートと1GBのストレージ、最大2CU（8GBメモリ）、10ブランチ、6時間の復元履歴、Managed Better Authが6万MAUまで、Object Storageが5GB、Functionsが月100万回の呼び出し。Launchは1CU時間0.106ドル、ストレージ1GB月0.35ドル、最大16CU（64GBメモリ）、復元履歴7日、追加ブランチは1ブランチ時間0.002ドル、ネットワーク転送は500GBまで無料でその先1GB 0.10ドル。Scaleは1CU時間0.222ドル、最大56CU（224GBメモリ）、1,000以上のプロジェクト、25ブランチ、復元履歴30日、SLA・HIPAA・プライベートネットワーク。料金ページの「典型的な支出」はLaunchで月15ドル（断続的な負荷・1GB）、Scaleで月701ドル（高負荷・100GB）。1CUは「約1vCPUと4GBのメモリ」で、計算を止めている間はCU時間を消費しない。
:::

:::pull
「毎日1,500万のPostgresデータベースが起動する」「80%はエージェントが作る」。会社概要ページの2つの数字が、無料枠を100プロジェクトにした理由を説明している。
:::

::scorecard

## UX分析

NeonのUXは、人の作業ではなく「エージェントの作業」に合わせて作り替えられている。無料枠の形、料金の最低額、ブランチの使い方、いずれも「たくさん作って、ほとんど放置する」使い方を前提にしている。

- **無料枠は「1つを大きく」ではなく「100個を小さく」**。公式ブログ（2026-10-02）は「Neonの無料枠はエージェントのワークフローを前提にしている。たくさんのプロジェクト、たくさんの実験、そのほとんどはほとんどの時間アイドル」と書き、100プロジェクトそれぞれに独立した100CU時間と1GBを与える理由を説明する。「新しいプロジェクトを1秒に1つ以上作っている」という規模の記述もある。料金ページのFAQは、1CUで1日3時間動くデータベースは月およそ90CU時間で無料枠に収まる、と例示する。
- **最低料金がない**。公式ブログ（2025-08-14）は料金を「使った分だけ、最低額なし」に改め、同年12月の追記で「5ドルの最低額はもう適用しない。3ドル使えば3ドルの請求」と書いた。2025年11月3日のブログはDatabricksの基盤に移ったことでLaunchの単価を0.14ドルから0.106ドルへ、Scaleを0.26ドルから0.222ドルへ下げ、「全プランで最大25%安く」と発表している。
- **ブランチが「やり直し」の単位になる**。公式ドキュメントによれば、ブランチは「データのコピーオンライトの複製で、現在または過去の状態から作れる」。公式ブログ（2025-05-21）は、Replitのエージェントがチェックポイントを作るたびにその時刻のNeonのブランチを作り、コードとデータベースをまとめて過去の状態に戻せる「App History」を紹介している。
- **止まることが既定で、止めないのは有料**。公式ドキュメントによれば、5分間アクティビティがないとコンピュートは停止し、再開は「数百ミリ秒」。無料枠ではこの設定を変えられず、有料プランでは「常時稼働」に切り替えられる。復元は「マージではなくタイムラインの完全な上書き」で、復元前の状態はバックアップのブランチに残る。
- **MCPで操作でき、同時に警告もある**。公式ドキュメントのMCPサーバーのページは、AIアシスタントにプロジェクトの作成やクエリをさせる手順と並べて、「LLMが要求した操作は必ず確認してから実行する」「MCPエージェントを本番データベースにつながない」と書く。
- **東京リージョンはなく、Azureは撤退した**。公式ドキュメントのリージョン一覧はAWSの8リージョン（バージニア、オハイオ、オレゴン、フランクフルト、ロンドン、シンガポール、シドニー、サンパウロ）で、日本からはシンガポールが最寄りになる。Azureの3リージョンは2026年4月7日に非推奨となり、既存プロジェクトの移行期限は2026年10月5日。廃止ガイドは理由を「ほとんどのプロジェクトはAWSで動いており、そこに集中するほうが機能と信頼性の改善を速く出せる」とし、Azureにデータを置き続けたい利用者にはDatabricks Lakebaseを案内している。

一方で、「エージェント向け」の設計は、人が触るときの手がかりを減らす方向にも働く。無料枠の100プロジェクトは、どれがどのエージェントの実験かを管理する責任を利用者に残し、Azureからの撤退は「同じ技術はDatabricks側にある」という案内で代替される。使う側が人かエージェントかで、この製品の見え方はかなり違う。

## 技術構成

::techstack

:::fact
公式ドキュメント「アーキテクチャ概要」（2026-10-06時点・ページ名は「The lakebase architecture」）によれば、Lakebase Postgresは「Postgresを一時的なコンピュート層と永続的なストレージ層に分け、WALのストリームでつなぐ」設計で、各コンピュートノードは「標準のPostgresインスタンス」であり「クエリエンジンの観点では何も書き換えられていない」。ストレージ側では、PageserverがWALと過去のページから必要なバージョンのページを組み立て、Safekeeperが「WALの永続的な複製」だけを担い、「トランザクションはSafekeeperの定足数がPaxosプロトコルでWALレコードを承認した時点でコミット」となる。オブジェクトストレージは「データベースの永続的な履歴を置く場所」だ。同ページは「NeonとDatabricksは同じデータベースであるLakebase Postgresを、同じ基盤で動かしている。違うのはその周りにあるもので、Neonではアプリとエージェントのための完全なバックエンド、DatabricksではData Intelligence Platformとの統合」と書く。2022年7月8日の公式ブログ（Heikki Linnakangas氏）は、この設計を「Rustで書かれたオープンソースのマルチテナントなストレージエンジン」と呼び、「Postgresをフォークして保守することはしない」「Postgresの変更は最小限にし、上流に入れることも期待する」と述べていた。
:::

:::fact
公式ドキュメント「オートスケーリングのアルゴリズム」によれば、autoscaler-agentは5秒ごとにデータベースが動くVMの1分間の負荷平均を確認し、vm-monitorは100ミリ秒ごとにPostgresのメモリ使用量を確認し、メモリ使用率を75%以下に保ち、頻繁にアクセスされるワーキングセットをコンピュートのキャッシュ（メモリの最大75%）に収めるようにCUを決める。GitHubの neondatabase/autoscaling（主言語Go・Apache-2.0）は「Kubernetesクラスターで動くPostgres群の垂直オートスケーリング」で、NeonVMがVMをカスタムリソースとして管理し、「Linux x86以外では動作を想定しない」「外部での利用は公式にサポートしない」と書く。公式ブログ（2026-09-17）によれば、Neonのバックエンドは正式版になり、FunctionsはNode.js 24のHTTPハンドラーをデータベースと同じブランチ・同じリージョンで動かし、Object StorageはS3互換でプロジェクトとともにブランチし、AI GatewayはDatabricks Foundation APIsを通じてフロンティアとオープンウェイトのモデルを1つのAPIで呼ぶ。同記事は、PGliteとElectricの同期エンジンを作ったElectricのチームがNeonに加わったとも書いている。
:::

:::fact
GitHubの neondatabase/neon（2026-10-06時点・APIで取得）は、主言語Rust、ライセンスApache-2.0、スター23,173、フォーク1,108、未解決のIssueが570件で、アーカイブはされていない。最新のリリースタグは release-proxy-8853（2025年7月29日）、release-compute-9073（2025年7月28日）、release-9129（2025年7月25日）で、それ以降のリリースはない。コミット数は2025年7月が298件、同年8月が1件、9月が5件、10月が1件、2026年は1月・2月・3月・5月・8月に各1件で、最新のコミットは2026年8月31日の「docs: fix typo」だ。2026年9月16日に立てられたIssue #12945「Plans for PostgreSQL 18 support?」は、mainブランチが2026年8月31日時点でPostgres 14〜17しかビルドしないと指摘し、コメント欄では利用者が「Databricksの買収後、開発は非公開に移ったように見える」と書き、別の利用者がフォークでPostgres 18への移植とCIの復旧を試みている。Neonからの公式の回答はこのIssueには付いていない。一方、同じ組織の neondatabase/mcp-server-neon は2026年10月4日にpushされている。
:::

:::guess
公開リポジトリの状態と、公式ドキュメントの「Postgres 14〜18をサポート」「Postgres 18はNeonで正式提供」というロードマップの記述を並べると、NeonのクラウドはPostgres 18を動かしているが、そのコードは2025年7月以降、Apache-2.0の公開リポジトリには出ていないとみられる。開発が止まったのではなく、公開先が変わったと読むのが自然だと推測される。Databricksのプレスリリースは買収をNeonの「オープンソースのサーバーレスPostgres」として説明し、会社概要ページは「Neonの創業者たちの名前」ではなく「Databricksの求人」へのリンクを置いている。公開リポジトリが静かになり、製品名が「Lakebase Postgres」に寄っていく流れは、技術の正本がNeonからDatabricksへ移ったことの表れとみられる。これはオープンソースを理由にNeonを選んだ利用者にとっての変化であり、クラウドを使う利用者にとっての変化とは別である。
:::

:::guess
当サイトの実観測では、console.neon.tech のログインがKeycloakの認可エンドポイントの形式に転送され、neon.com はブラウザ以外のUser-Agentに text/markdown を返し、link ヘッダで llms.txt やMCPのサーバーカードを宣言していた。[Fly.io](/ja/articles/fly-io)と同じく、公開サイトそのものをAIエージェントに読ませる設計が、製品の「エージェント向け」という主張と揃っている。技術構成の中心はRustのストレージエンジンとKubernetes上のVMのオートスケーリングで変わらず、2026年に足されたFunctions・Object Storage・AI Gatewayは、[Supabase](/ja/articles/supabase)が先に作った「一式」に追いつくための層と推測される。
:::

## ビジネスモデル

収益は従量課金のコンピュート（CU時間）とストレージ（GB月）で、月額の基本料金はない。無料枠は広く、有料への移行は「止めない」「大きくする」「長く戻す」のいずれかで起きる。

:::fact
公式の料金ページとドキュメント（2026-10-06時点）によれば、有料プランでは「使った分だけ払い、最低月額はない」。有料への切り替えで起きるのは、スケール・トゥ・ゼロの無効化（Launch以上）、最大CUの引き上げ（Freeの2CUからLaunchの16CU、Scaleの56CUへ）、復元履歴の延長（6時間から7日、30日へ）、プロジェクト数とブランチ数の上限の引き上げだ。Scaleにだけ、SLA、HIPAA、プライベートネットワーク、IP許可リスト、SOC 2レポートの提供が付く。AI Gatewayはモデル提供者の定価のまま上乗せなしで、前払いのクレジットから引き落とす。「Agent Plan」は「何千ものデータベースをプロビジョニングするAIエージェントのプラットフォーム」向けで、プロジェクト数は無制限、コンピュートはLaunchと同じ1CU時間0.106ドル、初期クレジットは最大25,000ドル。ほかにスタートアップ向けに最大10万ドルのクレジット、オープンソース向けのプログラムがある。2026年5月22日の公式ブログは、ReplitとRetoolを「最大のエージェント顧客」の例に挙げている。
:::

:::fact
公式ドキュメント「SOC 2 compliance」によれば、NeonはSOC 2 Type 1とType 2、SOC 3、ISO 27001、ISO 27701の監査を完了し、GDPRとCCPAに従う。HIPAAはScaleプランの一部として提供される。セキュリティの連絡先は security@neon.tech、プライバシーの連絡先は privacy@databricks.com だ。Databricks側のLakebaseの製品ページは「SOC 2とHIPAAに準拠し、AzureとAWS（限定）でPCI-DSSとHITRUSTをサポート」「本番アプリ向けに99.99%の稼働率SLA」と書く。
:::

:::guess
最低料金をなくし、無料枠を100プロジェクトに広げ、単価を25%下げる動きは、単体の会社なら売上を削る判断だが、Databricksの中では「Lakebaseの入口」としての投資とみられる。2026年8月のDatabricksのプレスリリースがLakebaseの売上ランレート1億ドルを全社の70億ドルと並べて発表したことは、Neonのクラウドが単独の損益ではなく、Databricksの製品群の一部として評価されていることを示す。無料枠で作られた1,500万のデータベースの大半はエージェントの実験で終わるが、そのうちReplitやRetoolのような「プラットフォーム」が顧客になれば、Agent Planの従量課金が何千ものデータベース分まとまって入る。個人開発者に広く無料で配り、エージェントのプラットフォームと企業（Databricks経由）から回収する二層の構造だと推測される。
:::

:::guess
Azureからの撤退と「Azureに残るならDatabricks Lakebaseへ」という案内は、Neonというブランドが担う範囲を「AWS上の、開発者とエージェント向けの入口」に絞り、企業向けと他クラウドはDatabricksが引き受ける分担とみられる。公開リポジトリのコミットが止まったことは、この分担の中で「オープンソースのNeon」の優先度が下がったことを示すと推測されるが、Apache-2.0のコードは残っており、利用者によるフォークも始まっている。オープンソースを理由に選んだ利用者がどれだけ残るかよりも、エージェントのプラットフォームがどれだけ増えるかが、この事業の評価を決めるとみられる。
:::

Postgresを作り替えた会社は、Postgresを作り替えた技術ごとDatabricksの一部になった。無料枠は人のためではなくエージェントのために設計し直され、最低料金は消え、Azureは閉じ、公開リポジトリは静かになった。残っているのは、1秒に1つずつ作られるデータベースと、そのうちの何割が「プラットフォーム」の請求書に育つかという問いだ。
