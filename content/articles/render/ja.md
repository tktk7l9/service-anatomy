---
service: "Render"
title: "「止まらない箱」を定額で貸す — Heroku後の無料枠で育ったRenderが、席課金をやめて15億ドルの評価に届くまで"
description: "Gitにpushすればアプリもデータベースも動く開発者向けクラウド、Render。常時動くインスタンスを月額固定で売り、15分で眠る無料枠を入口にし、AWSとGoogle Cloudの上で自前のKubernetesを運用する。2026年に席課金を廃して帯域とドメインの従量へ移し、エージェントの実行基盤へ舵を切った設計と稼ぎ方を、公式の料金ページ・ドキュメント・障害報告・技術ブログから解剖する。"
lead: "2021年11月、Renderは無料のWebサービスを始めた。ほぼ1年後にHerokuが無料枠の終了を告げると、Renderの無料アプリ作成数はすぐ倍になり、1か月で4件の障害を招いた。無料枠を支える仕組みを急いで作り直した会社は、2026年には450万人超の開発者を抱え、15億ドルの評価で1億ドルを調達する。同じ年、チームの人数で取っていた料金をやめ、計算資源と帯域で稼ぐ形に切り替えた。使った分だけ払う競合が伸びるなか、確保した箱に月額を払う古典的なモデルをあえて守る会社の設計を解剖する。"
category: dev-tool
tags: [paas, hosting, kubernetes, indie-dev]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
expires:
  - date: "2026-11-30"
    claim: "料金ページのスタートアップ向けクレジット（最大10万ドル）と移行クレジット（最大1万ドル）の案内。終了日の記載がないので月末に確認する"
  - date: "2026-12-31"
    claim: "Render Sandboxesがパブリックベータであること、ベータ中の料金と上限。2026年2月の発表が「今後数か月」とした残りの機能（オブジェクトストレージ、共有ファイルシステム、AIゲートウェイ）の提供状況"
serviceUrl: "https://render.com/"
vendor: "Render Inc."
origin: "US"
heroTheme: "render"
scores: { product: 4.0, ux: 4.0, tech: 4.0, business: 4.0 }
techStack:
  - layer: "コントロールプレーンの言語"
    name: "Go"
    confidence: confirmed
    evidence: "公式ブログ（2024-04-16）に、権限の適用をコンパイル時に保証するため「Goのコードベース」でジェネリクスを使ったと明記"
    evidenceUrl: "https://render.com/blog/how-render-enforces-access-controls-with-go-generics"
  - layer: "コンテナ基盤"
    name: "Kubernetes (self-managed, not EKS)"
    confidence: confirmed
    evidence: "公式ブログ（2025-12-02）に、AWS上でEKSを使わず自社のKubernetesクラスタを運用し、コントロールプレーンは顧客のワークロードが動くクラスタから独立させていて、us-east-1には置いていないと明記"
    evidenceUrl: "https://render.com/blog/how-render-services-stayed-up-during-the-aws-october-outage"
  - layer: "土台のクラウド（AWS）"
    name: "AWS (EC2 / S3 / ELB)"
    confidence: confirmed
    evidence: "同じ公式ブログに、AWS上の基盤はEC2・S3・ELBのような基礎的なサービスを使い、DynamoDB・RDS・Lambdaのような上位のマネージドサービスは避けていると明記"
    evidenceUrl: "https://render.com/blog/how-render-services-stayed-up-during-the-aws-october-outage"
  - layer: "土台のクラウド（Google Cloud）"
    name: "Google Cloud"
    confidence: confirmed
    evidence: "2024年3月の障害の原因分析に、復旧の節目として「GCP上のすべてのサービス」が挙がっている。どの地域がどちらのクラウドかの一覧は公式に見当たらなかった"
    evidenceUrl: "https://render.com/blog/root-cause-analysis-extended-service-disruption-3-26-24"
  - layer: "クラスタ内ネットワーク"
    name: "Calico / kube-proxy"
    confidence: confirmed
    evidence: "公式ブログ（2023-10-03）に、全クラスタの全ノードでCalicoとkube-proxyが動くと明記。2025年10月の記事でも、ネットワーク設定を担うデーモンセットとしてCalicoを挙げている"
    evidenceUrl: "https://render.com/blog/knative"
  - layer: "無料枠のゼロスケール"
    name: "Knative (patched)"
    confidence: likely
    evidence: "公式ブログ（2023-10-03）に、無料枠のゼロスケールにKnativeを採用して手を入れたと明記。ただし同じ記事は、やがてKnativeを外して自作に置き換える時期が来たとも書いており、現在の構成は確認できなかった"
    evidenceUrl: "https://render.com/blog/knative"
  - layer: "ログ収集"
    name: "Vector"
    confidence: confirmed
    evidence: "公式ブログ（2025-10-30）に、ログ収集を担うデーモンセットがVectorで、Render社員の修正が上流に取り込まれたと明記"
    evidenceUrl: "https://render.com/blog/how-we-found-7-tib-of-memory-just-sitting-around"
  - layer: "リクエストのルーティング"
    name: "PostgreSQL LISTEN/NOTIFY + in-memory routers"
    confidence: confirmed
    evidence: "公式ブログ（2024-05-22）に、ルーターが起動時にサービス情報のデータベースへ接続し、PostgreSQLのLISTEN/NOTIFYで更新を購読して、要求の処理ではメモリ上のキャッシュだけを見ると明記"
    evidenceUrl: "https://render.com/blog/distributing-global-state-to-serve-over-1-billion-daily-requests"
  - layer: "DDoS対策"
    name: "Cloudflare"
    confidence: confirmed
    evidence: "公式ドキュメントに、DDoS防御の裏側でCloudflareの基盤を使っていると明記。当サイトの実観測（2026-11-02）でもrender.comは server: cloudflare と cf-ray を返した"
    evidenceUrl: "https://render.com/docs/ddos-protection"
  - layer: "Key Value"
    name: "Valkey 8"
    confidence: confirmed
    evidence: "公式ドキュメントに、新しく作るRender Key ValueインスタンスはValkey 8で動くと明記"
    evidenceUrl: "https://render.com/docs/key-value"
  - layer: "インフラのコード化"
    name: "Blueprints (render.yaml)"
    confidence: confirmed
    evidence: "公式ドキュメントに、1つのYAMLファイルで複数のリソースを定義・デプロイ・管理する仕組みだと明記"
    evidenceUrl: "https://render.com/docs/infrastructure-as-code"
  - layer: "AIエージェント向け入口"
    name: "Render MCP Server"
    confidence: confirmed
    evidence: "公式ドキュメントに、mcp.render.com/mcp でホストし、AIアプリからサービスの作成や再デプロイ、データベースの照会、メトリクスとログの分析ができると明記"
    evidenceUrl: "https://render.com/docs/mcp-server"
  - layer: "決済"
    name: "Stripe"
    confidence: confirmed
    evidence: "料金ページのFAQに、支払い情報はStripeが保管・処理すると明記"
    evidenceUrl: "https://render.com/pricing"
  - layer: "自社サイト"
    name: "Next.js"
    confidence: likely
    evidence: "当サイトの実観測（2026-11-02）で、render.comが x-nextjs-cache と x-nextjs-prerender、x-render-origin-server: Render を返した。公式の明言は見当たらなかった"
sources:
  - label: "Render公式: 料金ページ"
    url: "https://render.com/pricing"
    accessedAt: "2026-11-02"
  - label: "Render公式ブログ: Better pricing for fast-growing teams（2026-04-23）"
    url: "https://render.com/blog/better-pricing-for-fast-growing-teams.md"
    accessedAt: "2026-11-02"
  - label: "Render Changelog: Updated plans for Render workspaces（2026-04-23）"
    url: "https://render.com/changelog/updated-plans-for-render-workspaces.md"
    accessedAt: "2026-11-02"
  - label: "Render公式ドキュメント: Deploy for Free（無料枠の制限）"
    url: "https://render.com/docs/free.md"
    accessedAt: "2026-11-02"
  - label: "Render公式ドキュメント: Render Compute Plans"
    url: "https://render.com/docs/compute-plans.md"
    accessedAt: "2026-11-02"
  - label: "Render公式ドキュメント: Updates to Render Compute Plans（2026-08-26の名称変更）"
    url: "https://render.com/docs/compute-plans-update.md"
    accessedAt: "2026-11-02"
  - label: "Render公式ドキュメント: Regions"
    url: "https://render.com/docs/regions.md"
    accessedAt: "2026-11-02"
  - label: "Render公式ドキュメント: Deploying on Render（デプロイの流れ）"
    url: "https://render.com/docs/deploys.md"
    accessedAt: "2026-11-02"
  - label: "Render公式ドキュメント: Health Checks"
    url: "https://render.com/docs/health-checks.md"
    accessedAt: "2026-11-02"
  - label: "Render公式ドキュメント: Rollbacks"
    url: "https://render.com/docs/rollbacks.md"
    accessedAt: "2026-11-02"
  - label: "Render公式ドキュメント: Native Runtimes"
    url: "https://render.com/docs/native-runtimes.md"
    accessedAt: "2026-11-02"
  - label: "Render公式ドキュメント: Persistent Disks"
    url: "https://render.com/docs/disks.md"
    accessedAt: "2026-11-02"
  - label: "Render公式ドキュメント: Scaling Render Services"
    url: "https://render.com/docs/scaling.md"
    accessedAt: "2026-11-02"
  - label: "Render公式ドキュメント: Render Blueprints (IaC)"
    url: "https://render.com/docs/infrastructure-as-code"
    accessedAt: "2026-11-02"
  - label: "Render公式ドキュメント: Preview Environments"
    url: "https://render.com/docs/preview-environments.md"
    accessedAt: "2026-11-02"
  - label: "Render公式ドキュメント: High Availability for Render Postgres"
    url: "https://render.com/docs/postgresql-high-availability.md"
    accessedAt: "2026-11-02"
  - label: "Render公式ドキュメント: Render Postgres Recovery and Backups"
    url: "https://render.com/docs/postgresql-backups.md"
    accessedAt: "2026-11-02"
  - label: "Render公式ドキュメント: Key Value"
    url: "https://render.com/docs/key-value"
    accessedAt: "2026-11-02"
  - label: "Render公式ドキュメント: Outbound Bandwidth"
    url: "https://render.com/docs/outbound-bandwidth.md"
    accessedAt: "2026-11-02"
  - label: "Render公式ドキュメント: DDoS Protection"
    url: "https://render.com/docs/ddos-protection"
    accessedAt: "2026-11-02"
  - label: "Render公式ドキュメント: Render MCP Server"
    url: "https://render.com/docs/mcp-server"
    accessedAt: "2026-11-02"
  - label: "Render公式ドキュメント: Intro to Render Sandboxes"
    url: "https://render.com/docs/sandboxes.md"
    accessedAt: "2026-11-02"
  - label: "Render公式ドキュメント: Render Workflows"
    url: "https://render.com/docs/workflows.md"
    accessedAt: "2026-11-02"
  - label: "Render公式ブログ: Durability as code — Introducing Render Workflows（2026-04-07）"
    url: "https://render.com/blog/durability-as-code-introducing-render-workflows"
    accessedAt: "2026-11-02"
  - label: "Render公式ブログ: Render raises $100M at $1.5B valuation（2026-02-17）"
    url: "https://render.com/blog/series-c-extension"
    accessedAt: "2026-11-02"
  - label: "Render公式ブログ: $80M to reimagine the cloud for the AI era（2025-01-21）"
    url: "https://render.com/blog/series-c"
    accessedAt: "2026-11-02"
  - label: "Render公式ブログ: Render's $50 Million Series B（2023-06-20）"
    url: "https://render.com/blog/render-series-b"
    accessedAt: "2026-11-02"
  - label: "Render公式ブログ: Render's $20 Million Series A（2021-11-22）"
    url: "https://render.com/blog/render-series-a"
    accessedAt: "2026-11-02"
  - label: "Render公式: About"
    url: "https://render.com/about"
    accessedAt: "2026-11-02"
  - label: "Render公式ブログ: How Render Scaled Knative to 100k+ Web Apps（2023-10-03）"
    url: "https://render.com/blog/knative"
    accessedAt: "2026-11-02"
  - label: "Render公式ブログ: Distributing Global State to Serve over 1 Billion Daily Requests（2024-05-22）"
    url: "https://render.com/blog/distributing-global-state-to-serve-over-1-billion-daily-requests"
    accessedAt: "2026-11-02"
  - label: "Render公式ブログ: How We Found 7 TiB of Memory Just Sitting Around（2025-10-30）"
    url: "https://render.com/blog/how-we-found-7-tib-of-memory-just-sitting-around"
    accessedAt: "2026-11-02"
  - label: "Render公式ブログ: Root Cause Analysis for Render's Extended Service Disruption on 3/26/24（2024-03-29）"
    url: "https://render.com/blog/root-cause-analysis-extended-service-disruption-3-26-24"
    accessedAt: "2026-11-02"
  - label: "Render公式ブログ: How Render Services Stayed Up During the AWS October Outage（2025-12-02）"
    url: "https://render.com/blog/how-render-services-stayed-up-during-the-aws-october-outage"
    accessedAt: "2026-11-02"
  - label: "Render公式ブログ: How Render Enforces Access Controls with Go Generics（2024-04-16）"
    url: "https://render.com/blog/how-render-enforces-access-controls-with-go-generics"
    accessedAt: "2026-11-02"
  - label: "Render公式: Render for Startups"
    url: "https://render.com/startups"
    accessedAt: "2026-11-02"
  - label: "Render公式: Migration Credits"
    url: "https://render.com/migration-credits"
    accessedAt: "2026-11-02"
  - label: "Render公式ドキュメント: Migrate from Railway to Render"
    url: "https://render.com/docs/migrate-from-railway.md"
    accessedAt: "2026-11-02"
---

クラウドの料金は「使った分だけ」へ流れてきた。Renderはその流れのなかで、少し古風な売り方を続けている。CPUとメモリの大きさが決まった箱を選び、その箱に月額を払う。箱はリクエストが来なくても動き続ける。Renderの面白さは、この「止まらない箱」を、無料枠と定額の入り口、そしてAWSとGoogle Cloudの上に自前で組んだKubernetesでどう成り立たせているかにある。

## サービス解説

Renderは、GitとDockerから、Webサービス・非公開サービス・バックグラウンドワーカー・定期実行ジョブ・静的サイト、それにPostgresとKey Valueのデータベースを立ち上げられる開発者向けクラウドだ。公式の説明では、サンフランシスコに本社を置き、チームは世界に分散している。創業者のAnurag Goelは、2025年1月の公式ブログで、2011年にStripeの5人目のエンジニアとして働き、インフラの構築と運用に時間を取られた経験から、2019年にRenderを始めたと書いている。

:::fact
Renderの資金調達は、公式ブログで次のように公表されている。評価額は2026年の発表にだけ記載がある。公式のAboutページも累計を2.58億ドルとしている。

| 発表日 | ラウンド | 金額 | 主導 | 公表された累計 | 公表された開発者数 |
| --- | --- | --- | --- | --- | --- |
| 2021-11-22 | シリーズA | 2,000万ドル | Addition | 2,700万ドル | 数万人 |
| 2023-06-20 | シリーズB | 5,000万ドル | Bessemer Venture Partners | 記載なし | 50万人を大きく超える |
| 2025-01-21 | シリーズC | 8,000万ドル | Georgian | 1.57億ドル | 200万人超（毎月10万人以上が登録） |
| 2026-02-17 | シリーズCの延長 | 1億ドル（評価額15億ドル） | Georgian | 2.58億ドル | 450万人超（毎月25万人以上が加入） |
:::

:::fact
Renderの公式ブログ（2023-10-03）によれば、無料枠は2021年11月に始まり、採用は一定のペースで伸びていたが、10か月後にHerokuが無料提供の終了を告げると、無料枠の採用ペースはすぐ2倍になった。この急増に関連して1か月に4件の障害が起き、Render上のアプリの総数は実質4倍になったという。記事の執筆時点で、無料アプリは毎週数万件作られていると書いている。
:::

2026年2月の発表で、Renderは目標を「AIアプリとエージェントのためのクラウドランタイム」と言い換えた。発表文の論理はこうだ。従来のWebアプリは短命で状態を持たないリクエストの往復で動く。AIエージェントはその逆で、長時間動き、状態を持ち、分散している。ハイパースケーラーの上で組むのは複雑で高くつき、フロントエンド寄りのサーバーレス基盤には制約が多い。だから、もともと長時間動くプロセスを前提にしたRenderが向いている、という主張だ。

:::pull
無料枠で入ってきた開発者に、止まらないプロセスを月額で売る。Renderの賭けは、AIエージェントの時代にこの古い形がもう一度正しくなることだ。
:::

::scorecard

## UX分析

RenderのUXを一言でいえば、「いくらかかるか、何が起きるかを先に決めておく」ことだ。自動で伸び縮みさせて請求を後から確かめる形ではなく、箱の大きさを人間が選ぶ。

- **箱を選ぶと月額が決まる**。公式の料金ページでは、Webサービスは0.5 CPU・512MBの月7ドルから、12 CPU・96GBの月1,500ドルまでの表で示される。2026年8月26日からはプランIDが `1c-2g` のように仕様そのものの名前になった。旧名の `standard` や `pro` は引き続き使え、料金は変わっていない。
- **デプロイの手順が段階として見える**。公式ドキュメントによれば、ビルド、デプロイ前コマンド、起動の3段階があり、上限はそれぞれ120分、30分、15分。データベースのマイグレーションはデプロイ前コマンドに置く。どこかの段階で失敗すれば、直前に成功した版が動き続ける。
- **無料枠の制限が細かく書かれている**。公式ドキュメントの「無料でデプロイする」ページは、15分で眠ること、起動に約1分かかること、月750時間の上限、失われるファイル、使えない機能まで、1ページにまとめている。冒頭で「本番のアプリに使わないでください」と明言する。
- **リポジトリに構成を書ける**。`render.yaml` というファイル（Blueprint）で、サービスとデータベースをまとめて定義できる。既存のサービスからファイルを生成することもできる。
- **ロールバックには自動デプロイを止める仕掛けがある**。公式ドキュメントによれば、ダッシュボードからロールバックすると、そのサービスの自動デプロイが自動で無効になる。新しいコミットが同じ問題を戻してしまうのを防ぐためだ。一方、APIからのロールバックでは無効にならないとも注意書きがある。

:::fact
公式ドキュメントによれば、無料のWebサービスは、HTTPリクエストと既存接続のWebSocketメッセージを含め、15分間受信がないと停止する。次のリクエストで起動し、これに約1分かかり、その間ブラウザには読み込み画面が出る。無料枠のインスタンス時間はワークスペースごとに月750時間で、使い切ると翌月まで無料サービスがすべて止まる。ファイルシステムの変更は、再デプロイ・再起動・停止で失われる。停止中の `/robots.txt` には、サービスを起こさずに「すべて拒否」の応答を返す。公式の仕様は0.1 CPU・512MB。
:::

:::fact
無料のPostgresは1ワークスペース1つ、容量1GBで、作成から30日で期限が切れる。期限後14日の猶予のうちに有料へ上げなければ、データごと削除される。バックアップはない。無料のKey Valueも1ワークスペース1つで、メモリだけに保持するため再起動でデータが消え、有料へ上げるときにもデータが消える。Changelogによれば、無料Postgresの期限は2024年5月20日に90日から30日へ短くなった。料金ページの表記はPostgresが256MB、Key Valueが25MB。
:::

:::guess
15分の眠りと約1分の起動は、無料枠を「試す場所」にとどめるための設計だとみられる。常時公開には向かないが、学習や試作には十分で、本番にしたくなった時点で月7ドルの箱へ上がる動機が生まれる。データベースの30日の期限も同じ方向に働く。無料枠の説明がここまで率直なのは、後から不満を買うより、制限を先に見せたほうが有料への移行が素直になると判断しているためと読める。
:::

一方で、箱を選ぶUXには弱点もある。公式ドキュメントによれば、既存のサービスやデータベースの地域は変更できず、別の地域に作り直してデータを移すことになる。永続ディスクを付けたサービスは複数インスタンスに広げられず、無停止デプロイもできなくなる。動き出してから変えにくい判断を最初に迫る点は、確保型のモデルに付きまとう手間といえる。

## 技術構成

::techstack

:::fact
公式ドキュメントによれば、地域はオレゴン・オハイオ・バージニア（米国）、フランクフルト（ドイツ）、シンガポールの5つ。静的サイトだけは地域を選ばず、グローバルCDNから配信される。各地域の非公開ネットワークは別々で、地域をまたぐ通信は公開インターネットを通る前提で保護する必要がある。日本の地域は一覧になく、アジアで選べるのはシンガポールだけだ。公式ブログ（2024-05-22）によれば、初期（2020年より前）はオレゴンだけで運用していた。
:::

:::fact
デプロイの流れは次のとおり。ブランチへのpushで動く既定の設定のほか、CIのチェックが通った後にだけ動かす設定、自動デプロイを切る設定がある。無停止デプロイでは、新しいインスタンスが起動に成功するまで元のインスタンスがトラフィックを受け続ける。切り替えの60秒後に元のインスタンスへSIGTERMを送り、既定で30秒の猶予の後にSIGKILLで止める。ヘルスチェックは数秒おきに行われ、動作中のインスタンスが15秒続けて失敗すれば通信を止め、60秒続けば再起動する。ファイルシステムは既定で一時的で、残したいデータは永続ディスクかデータベースに置く。ディスクは24時間ごとに自動でスナップショットを取るが、サービスを複数インスタンスにはできない。

マネージドのPostgresは、有料のインスタンスなら時点復旧（PITR）が既定で動き、Hobbyで過去3日、Pro以上で過去7日まで戻せる。復旧は新しいインスタンスとして立ち上がるので、確かめてから切り替えられる。高可用性を有効にすると、同じ地域の別のゾーンに非同期の待機系を置き、主系が30秒使えなければ自動で切り替える。水平スケールでは、オートスケールがCPUやメモリの目標値に応じて台数を増減する。インスタンス数の上限は、8c-32gまでのプランで100、8c-64g以上で5。
:::

Renderの技術ブログで目を引くのは、規模の問題が「Kubernetesのオブジェクト数」として現れている点だ。

:::fact
2023年10月の公式ブログによれば、Kubernetesは当時ゼロスケールに対応していなかったため、Renderは無料枠にKnativeを採用し、最初は既定の設定で動かした。無料枠の急増で、1つの無料アプリにつきデプロイ回数に比例してKubernetesのServiceが増え（2N+1個）、全ノードで動くCalicoとkube-proxyの負荷が上がって、ネットワーク変更の反映の遅れから接続が断続的に失敗した。Renderは3種類のServiceを順に取り除くようKnativeに手を入れ、無料アプリ1つあたりのServiceをゼロにした。記事は、それでも足りなくなり、Knativeを外して自作へ置き換える時期が近づいたと結んでいる。
:::

:::fact
2025年10月の公式ブログは、Namespaceの数ではおそらく最上位に近いと書く。ログ収集のVectorが全ノードからNamespaceを監視していたことを突き止め、数十万のNamespaceを持つ検証用クラスタで原因を再現し、不要にする設定を上流に提供した。Podあたりのメモリは4GiB近くから数十MiBに下がり、全クラスタの合計で7TiB強を解放したという。2024年5月の公式ブログは、100万を超える稼働サービスを5地域で扱い、1日10億件超のリクエストを処理する経路制御を説明している。ルーターはPostgreSQLのLISTEN/NOTIFYで更新の通知を受けてメモリ上の情報を更新し、要求の処理中にはデータベースを見ない。データベースが止まっても、既存サービスへの通信は続けられる。
:::

:::fact
2024年3月26日16時07分（UTC）、Renderでは欠陥のあるコード変更によって全ワークロードが再起動した。公式の原因分析によれば、機能フラグの処理に潜んだバグのせいで非本番環境では問題のコードが動かず、発見が遅れた。データの消失はなく、静的サイトやディスクを持たないサービスは20分以内に戻ったが、数十万のディスク付きサービスの移動が律速になり、有料サービスの完全復旧は18時45分、無料サービスは20時00分だった。公式は「Renderの歴史で最も深刻で広範な障害」と書き、ディスク操作の上限の引き上げ、一括処理への変更、コントロールプレーンの権限の絞り込み、本番と非本番の差の解消を挙げている。
:::

:::fact
2025年12月の公式ブログは、同年10月20日のAWS us-east-1の障害を振り返っている。バージニア地域ではビルドとデプロイの遅延が出たが、動作中のサービスは止まらなかったという。理由として挙げたのは、EC2・S3・ELBのような基礎的なサービスに絞り、DynamoDB・RDS・Lambdaは使わないこと、EKSを使わず自社でKubernetesを運用し、そのコントロールプレーンを顧客のクラスタから分けてus-east-1に置かないこと、米国の顧客の多くをus-west-2とus-east-2に置いていることの3つだ。同じ記事は、運が味方した面があること、同じ障害がus-west-2で起きていれば影響ははるかに大きかったこと、自社運用には多くの投資が要ることも認めている。
:::

:::guess
Renderの技術上の選択は、「計算資源はクラウドから借りるが、計算資源を束ねる層は手放さない」と要約できるとみられる。Railwayのように自社のラックへ降りることはせず、クラウドの基礎部品だけを使い、その上のスケジューラ・ルーター・ディスク移動の層を自分で持つ。原価の面では他社の請求書を受け入れる代わりに、データセンター運用の負担を背負わない線引きだと考えられる。2024年の障害はこの層が自社の変更で止まり得ることを、2025年の障害はこの層が他社の障害から身を守り得ることを示した。同じ層の両面が公開の記事で読めるのは、この会社の技術ブログの価値でもある。
:::

:::fact
エージェント向けには3つの製品が並ぶ。Render Workflowsは2026年4月7日にパブリックベータとして公開され、TypeScriptかPythonの関数をタスクとして定義すると、再試行や状態管理、並列実行を任せられる。1つのタスクは最大24時間動かせる。Render Sandboxesは信頼できないコードを隔離して動かす環境で、公式ドキュメントでパブリックベータと明記され、料金ページでは隔離されたmicroVMと説明されている。MCPサーバーは、Claude CodeやCodex、CursorなどのAIアプリからサービスの作成や再デプロイ、ログの分析を行えるようにする。2026年2月の発表が挙げた残りの構想には、ネイティブのオブジェクトストレージ、共有ファイルシステム、AIゲートウェイ、統合オブザーバビリティがある。当サイトが2026-11-02に確認した料金ページにオブジェクトストレージの料金は見当たらず、採用ページには担当の募集が出ていた。
:::

## ビジネスモデル

Renderの公式FAQは、請求を3つに分けて説明する。ワークスペースの定額、帯域のような従量、そしてアプリの計算資源だ。

:::fact
2026-11-02の料金ページによるワークスペースのプランは次のとおり。金額は米ドルで、税の扱いの記載は料金ページに見当たらなかった。

| 項目 | Hobby | Pro | Scale | Enterprise |
| --- | --- | --- | --- | --- |
| 月額（計算資源は別） | 0ドル | 25ドル | 499ドル | 個別見積もり |
| チームの席 | 1 | 無制限 | 無制限 | 無制限 |
| サービス数の上限 | 25 | 無制限 | 無制限 | 無制限 |
| 含まれる帯域（超過1GBあたり0.15ドル） | 5GB | 25GB | 1TB | 個別 |
| 標準ビルド時間（超過1,000分あたり5ドル） | 500分 | 1,000分 | 5,000分 | 個別 |
| 独自ドメイン（超過1つ月0.25ドル） | 2 | 15 | 25 | 個別 |
| Postgresの時点復旧 | 3日 | 7日 | 7日 | 7日 |
| ログの保持 | 7日 | 14日 | 30日 | 30日 |

水平オートスケールとプレビュー環境はPro以上、SAML SSOとSCIMはScale以上、HIPAA対応のBAAはScale以上で、有効にしたワークスペースの計算資源に20%の上乗せがある。契約上の稼働率SLAはEnterpriseの項目に挙がっている。
:::

:::fact
Webサービスの主なプランの月額（2026-11-02の料金ページ）は次のとおり。

| CPU | メモリ | プランID | 月額 |
| --- | --- | --- | --- |
| 0.1 | 512MB | free | 0ドル（制限あり） |
| 0.5 | 512MB | 0.5c-512mb | 7ドル |
| 1 | 2GB | 1c-2g | 25ドル |
| 2 | 4GB | 2c-4g | 85ドル |
| 2 | 8GB | 2c-8g | 135ドル |
| 4 | 8GB | 4c-8g | 175ドル |
| 8 | 32GB | 8c-32g | 450ドル |
| 12 | 96GB | 12c-96g | 1,500ドル |

課金は秒単位の日割りで、公式の例では、有料のWebサービスを作って24時間後に止めれば24時間分だけ請求される。インスタンスを増やせば、その数だけ同じ料金がかかる。Postgresは0.1 CPU・256MBの月6ドルから128 CPU・1,024GBの月11,000ドルまで、ストレージは1GBあたり0.30ドル。永続ディスクは1GBあたり月0.25ドル、Key Valueは256MBの月10ドルから50GBの月750ドルまで。定期実行ジョブは分単位で、0.5 CPU・512MBなら1分0.00016ドル。静的サイトのデプロイは無料だ。
:::

:::fact
2026年4月23日、Renderは席課金を廃止した。Changelogによれば、Professional（1人月19ドル）はPro（定額月25ドル）に、Organization（1人月29ドル）はScale（定額月499ドル）に置き換わり、既存のワークスペースも8月1日に自動で移った。同時に、帯域の超過を100GB単位から1GBあたり0.15ドルに変え、HobbyとProに含まれる帯域を減らし、独自ドメインに追加料金を設けた。公式ブログは、従来の帯域は席課金が補っていたと説明し、有料顧客の75%は費用が下がるか変わらないとする一方、席が少なく帯域やドメインを多く使う少数の顧客は値上がりする場合があると書いている。計算資源の料金は変わっていない。
:::

:::guess
席課金の廃止は、値下げというより売上の軸の移し替えと読める。AIのコーディングツールで少人数でも多くのサービスを動かせるようになると、人数は売上の指標として弱くなる。そこで人数ではなく、動かしている箱の数と外へ出す通信量に課金を寄せたとみられる。独自ドメインへの課金について公式が「マルチテナントのプラットフォームを動かすチームが増えた」ことに触れているのも、顧客の1社が多数のサービスやドメインを抱える形を想定している表れだと考えられる。ただし、席が少なく通信の多い顧客には負担が増える形でもあり、このバランスが妥当かどうかは今後の解約や移行の動きで判断されることになる。
:::

:::fact
料金ページによれば、ベンチャーキャピタルの出資を受けたスタートアップには最大10万ドルのクレジットを案内している。公式のスタートアップ向けページは、資金調達額が100万ドル未満なら1万ドル、100万ドル以上なら2.5万ドルといった段階を示し、クレジットの有効期間は承認から1年としている。別に、本番インフラの移行には最大1万ドルの移行クレジットを案内し、移行元の選択肢にHeroku・Railway・Vercel・Fly・AWS・GCPが並ぶ。公式ドキュメントにはRailwayからの移行手順もある。当サイトは2026-11-02の時点で、Renderの公開のアフィリエイト制度を確認できなかった。
:::

:::guess
Renderの稼ぎ方は、無料枠で開発者を集め、本番に上がる時点で箱を売り、チームが育つと定額プランと帯域で伸ばす、という階段になっているとみられる。階段の途中では、競合からの移行を直接取りにいっている。移行クレジットの移行元に競合の名前を並べ、料金ページのナビゲーションにもHerokuとRailwayの移行ガイドを置いているのは、新規の開発者を育てるだけでなく、すでに本番で動いている支出を奪う段階に入ったことの表れと読める。確保型の料金は、顧客から見れば余らせた分も払う形になる。Renderはこの短所を、請求額が読めるという長所として売っていると考えられる。使わなくても動いているプロセスを前提にするAIエージェントが増えれば、この短所は目立たなくなるかもしれない。
:::

Renderは、派手な自前化も、請求の細分化も選ばなかった。借りたクラウドの上に束ねる層を作り、箱に値札を付け、席の料金を外した。無料枠で育った会社が、止まらないプロセスを定額で売るという地味な約束を、エージェントの時代の商品に作り替えられるか。15億ドルの評価は、その約束に付いた値段でもある。
