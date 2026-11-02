---
title: "Railway と Render の比較 — 使った分だけ払うか、確保した箱に払うか。料金・無料枠・地域・データベースを公式ページで並べる"
description: "RailwayとRenderを、両社の公式ページ（2026-11-02閲覧）だけを根拠に比較する。Railwayは月5ドルから利用分込みの従量課金、Renderは月0ドルと25ドルのプランに固定サイズのインスタンス代が乗る。CPU単価の換算、無料枠の違い、地域の変更、無停止デプロイ、データベースの運用範囲、リクエスト時間の上限まで並べ、自社ラックへ降りた会社とクラウドの上に残った会社の差がどこに出るかを読み解く。"
lead: "「GitHubをつなげばアプリが動く」PaaSを選ぶとき、RailwayとRenderはいちばん最後まで残りやすい2つだ。機能の一覧はよく似ているが、請求の組み立ては正反対に近い。Railwayは動いたCPUとメモリを秒単位で測り、Renderは確保した箱の大きさで月額を決める。両社はそれぞれ相手との比較ページを持ち、互いに移行の手順を案内している。2026年11月2日に両社の公式ページを読み直し、自社の比較ページが語らない部分も含めて、どちらがどんな人に合うのかを解剖する。"
slugA: "railway"
slugB: "render"
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
expires:
  - date: "2026-11-30"
    claim: "両社の比較ページの記述（Railwayの最終更新2026-10-30、Renderの2026-05-06）と、Renderの移行クレジットの案内。比較ページは更新が多いので月末に確認する"
  - date: "2026-12-31"
    claim: "Render Sandboxesがパブリックベータであること、両社のサンドボックスの料金"
sources:
  - label: "Railway公式: 料金ページ"
    url: "https://railway.com/pricing"
    accessedAt: "2026-11-02"
  - label: "Railway公式ドキュメント: Pricing Plans"
    url: "https://docs.railway.com/pricing/plans.md"
    accessedAt: "2026-11-02"
  - label: "Railway公式ドキュメント: Free Trial"
    url: "https://docs.railway.com/pricing/free-trial.md"
    accessedAt: "2026-11-02"
  - label: "Railway公式ドキュメント: Cost Control"
    url: "https://docs.railway.com/pricing/cost-control.md"
    accessedAt: "2026-11-02"
  - label: "Railway公式ドキュメント: Serverless"
    url: "https://docs.railway.com/deployments/serverless.md"
    accessedAt: "2026-11-02"
  - label: "Railway公式ドキュメント: Regions"
    url: "https://docs.railway.com/deployments/regions.md"
    accessedAt: "2026-11-02"
  - label: "Railway公式ドキュメント: Scaling"
    url: "https://docs.railway.com/deployments/scaling.md"
    accessedAt: "2026-11-02"
  - label: "Railway公式ドキュメント: Healthchecks"
    url: "https://docs.railway.com/deployments/healthchecks.md"
    accessedAt: "2026-11-02"
  - label: "Railway公式ドキュメント: Deployment Reference（デプロイの一時停止）"
    url: "https://docs.railway.com/deployments/reference.md"
    accessedAt: "2026-11-02"
  - label: "Railway公式ドキュメント: Volumes Reference"
    url: "https://docs.railway.com/volumes/reference.md"
    accessedAt: "2026-11-02"
  - label: "Railway公式ドキュメント: Databases（What Railway manages）"
    url: "https://docs.railway.com/databases.md"
    accessedAt: "2026-11-02"
  - label: "Railway公式ドキュメント: Backups"
    url: "https://docs.railway.com/volumes/backups.md"
    accessedAt: "2026-11-02"
  - label: "Railway公式ドキュメント: Public Networking Specs and Limits"
    url: "https://docs.railway.com/networking/public-networking/specs-and-limits.md"
    accessedAt: "2026-11-02"
  - label: "Railway公式ドキュメント: Domains（プラン別の独自ドメイン数）"
    url: "https://docs.railway.com/networking/domains/working-with-domains.md"
    accessedAt: "2026-11-02"
  - label: "Railway公式ドキュメント: CDN"
    url: "https://docs.railway.com/networking/cdn.md"
    accessedAt: "2026-11-02"
  - label: "Railway公式ドキュメント: Railway Metal"
    url: "https://docs.railway.com/platform/railway-metal.md"
    accessedAt: "2026-11-02"
  - label: "Railway公式ドキュメント: Railway vs Render（最終更新2026-10-30）"
    url: "https://docs.railway.com/platform/compare-to-render.md"
    accessedAt: "2026-11-02"
  - label: "Railway公式ブログ: Incident Report: May 19, 2026 - GCP Account Suspension"
    url: "https://blog.railway.com/p/incident-report-may-19-2026-gcp-account-outage"
    accessedAt: "2026-11-02"
  - label: "Railway公式ブログ: Railway raises $100M Series B（2026-01-22）"
    url: "https://blog.railway.com/p/series-b"
    accessedAt: "2026-11-02"
  - label: "Latent Space: Railway: The Agent-Native Cloud — Jake Cooper（2026-05-20）"
    url: "https://www.latent.space/p/railway"
    accessedAt: "2026-11-02"
  - label: "Render公式: 料金ページ"
    url: "https://render.com/pricing"
    accessedAt: "2026-11-02"
  - label: "Render Changelog: Updated plans for Render workspaces（2026-04-23）"
    url: "https://render.com/changelog/updated-plans-for-render-workspaces.md"
    accessedAt: "2026-11-02"
  - label: "Render公式ドキュメント: Deploy for Free"
    url: "https://render.com/docs/free.md"
    accessedAt: "2026-11-02"
  - label: "Render公式ドキュメント: Regions"
    url: "https://render.com/docs/regions.md"
    accessedAt: "2026-11-02"
  - label: "Render公式ドキュメント: Scaling Render Services"
    url: "https://render.com/docs/scaling.md"
    accessedAt: "2026-11-02"
  - label: "Render公式ドキュメント: Deploying on Render"
    url: "https://render.com/docs/deploys.md"
    accessedAt: "2026-11-02"
  - label: "Render公式ドキュメント: Persistent Disks"
    url: "https://render.com/docs/disks.md"
    accessedAt: "2026-11-02"
  - label: "Render公式ドキュメント: High Availability for Render Postgres"
    url: "https://render.com/docs/postgresql-high-availability.md"
    accessedAt: "2026-11-02"
  - label: "Render公式ドキュメント: Render Postgres Recovery and Backups"
    url: "https://render.com/docs/postgresql-backups.md"
    accessedAt: "2026-11-02"
  - label: "Render公式ドキュメント: Render vs Vercel（リクエスト時間とcronの上限）"
    url: "https://render.com/docs/render-vs-vercel-comparison.md"
    accessedAt: "2026-11-02"
  - label: "Render公式: Render vs Railway（2026-05-06）"
    url: "https://render.com/articles/render-vs-railway.md"
    accessedAt: "2026-11-02"
  - label: "Render公式ドキュメント: Migrate from Railway to Render"
    url: "https://render.com/docs/migrate-from-railway.md"
    accessedAt: "2026-11-02"
  - label: "Render公式ブログ: Root Cause Analysis for Render's Extended Service Disruption on 3/26/24（2024-03-29）"
    url: "https://render.com/blog/root-cause-analysis-extended-service-disruption-3-26-24"
    accessedAt: "2026-11-02"
  - label: "Render公式ブログ: How Render Services Stayed Up During the AWS October Outage（2025-12-02）"
    url: "https://render.com/blog/how-render-services-stayed-up-during-the-aws-october-outage"
    accessedAt: "2026-11-02"
  - label: "Render公式ブログ: Render raises $100M at $1.5B valuation（2026-02-17）"
    url: "https://render.com/blog/series-c-extension"
    accessedAt: "2026-11-02"
---

[Railway](/ja/articles/railway)と[Render](/ja/articles/render)は、どちらもGitHubのリポジトリやDockerイメージからWebアプリとデータベースを立ち上げるPaaSだ。Railwayの公式の比較ページも、デプロイ方法、プレビュー環境、ロールバック、cron、SSH、IaCまで「共通点」として並べている。機能の表だけを見ると差は小さい。違うのは、請求の単位と、土台を誰が持っているかだ。この記事は、両社の公式ページを2026年11月2日に読み、書かれている数字と条件をそのまま並べる。当サイトは両サービスを契約して計測したのではなく、公開情報を突き合わせている。金額は米ドルで、日本円の料金表は両社とも確認できなかった。料金は改定されるので、申し込む前に公式ページを確認してほしい。

## 料金の組み立てを並べる

:::fact
以下は、Railwayの料金ページとドキュメント、Renderの料金ページ（いずれも2026-11-02閲覧）を、当サイトが項目ごとに並べ直したものだ。税の扱いの記載は、どちらの料金表にも見当たらなかった。

| 項目 | Railway | Render |
| --- | --- | --- |
| 請求の基本形 | プラン料金は利用分に充当。超えた分を従量で払う | プラン料金と計算資源は別建て。計算資源はインスタンスごとの固定月額 |
| 個人向け | Hobby 月5ドル（5ドル分の利用込み） | Hobby 月0ドル（計算資源は別） |
| チーム向け | Pro 月20ドル（20ドル分の利用込み） | Pro 月25ドル（計算資源は別）、Scale 月499ドル |
| 席 | Proは無制限 | Pro以上は無制限 |
| CPU | 1 vCPUあたり月20ドル（1秒0.00000772ドル） | プランに含む |
| メモリ | 1GBあたり月10ドル（1秒0.00000386ドル） | プランに含む |
| 外向き通信 | 1GBあたり0.05ドル | Hobby 5GB、Pro 25GB、Scale 1TBまで込み、超過は1GBあたり0.15ドル |
| ビルド | 無料 | Hobby 500分、Pro 1,000分、Scale 5,000分まで込み、超過は1,000分あたり5ドル |
| ディスク | ボリューム 1GBあたり月0.15ドル | 永続ディスク 1GBあたり月0.25ドル、Postgresのストレージ 1GBあたり0.30ドル |
| 独自ドメイン | Hobby 1サービス2つ、Pro 1サービス20まで（Proは申請で増枠） | Hobby 2、Pro 15、Scale 25まで込み、超過は1つ月0.25ドル |

Railwayの料金ページは、独自ドメインをトライアルで1、Freeで0と示している。Renderの課金は秒単位の日割りで、インスタンスを止めれば止めた分は請求されない。Railwayは1秒単位の単価を示す。
:::

:::fact
Renderのプランは2026年4月23日に変わった。それまではProfessionalが1人月19ドル、Organizationが1人月29ドルの席課金で、現在の定額に置き換わり、8月1日に全ワークスペースが移った。この変更で、HobbyとProに含まれる帯域は減り、超過は100GB単位から1GB単位になった。
:::

同じ大きさを1か月ずっと使い切ったときの費用を比べると、両社の関係が見える。下の表は当サイトの計算で、Railwayの月額換算（1 vCPU 20ドル、1GB 10ドル）にRenderのインスタンスの仕様を当てはめたものだ。Renderの512MBは0.5GBとして計算した。

:::fact
| 仕様 | Render（固定月額） | Railway（常に100%使った場合の換算） |
| --- | --- | --- |
| 0.5 CPU・512MB | 7ドル | 15ドル |
| 1 CPU・2GB | 25ドル | 40ドル |
| 2 CPU・4GB | 85ドル | 80ドル |
| 2 CPU・8GB | 135ドル | 120ドル |
| 4 CPU・8GB | 175ドル | 160ドル |
| 4 CPU・16GB | 225ドル | 240ドル |
| 8 CPU・32GB | 450ドル | 480ドル |
:::

:::guess
上の表のRailwayの列は、箱を丸ごと使い切った場合の上限にあたる。多くのWebアプリは待ち時間が長く、実際のCPU使用率はずっと低いので、Railwayの請求は表より下がるとみられる。一方、0.5 CPUと1 CPUの小さな箱を高い負荷で回し続けるなら、Renderの固定月額のほうが安くなる。1 CPU・2GBの場合、平均の使用量が箱の約6割（25÷40）を超え続けるあたりが分かれ目になる。2 CPU・4GB以上では両社の差は小さく、この帯では単価より運用の条件で選ぶことになると考えられる。
:::

もう少し実際に近い形で試算する。チームでWebアプリ1つとPostgres 1つを動かし、月100GBを配信し、データベースに10GBを置く場合だ。使用量の前提は当サイトの仮定で、実際の請求を保証するものではない。

:::guess
- Render（Pro）は、プラン25ドル、Web `1c-2g` 25ドル、Postgres `0.5c-1g` 19ドル、帯域の超過75GB分で11.25ドル、ストレージ10GBで約3ドル。合計は月83ドル前後で、アプリの負荷が変わっても大きくは動かないとみられる。
- Railway（Pro）は、アプリが平均0.2 vCPU・0.5GB、データベースが平均0.1 vCPU・0.5GBなら、CPU 6ドル、メモリ10ドル、通信5ドル、ボリューム1.5ドルで22.5ドル。20ドル分はプランに含まれるので、請求は月22.5ドルになる計算だ。平均がアプリ0.8 vCPU・1.8GB、データベース0.5 vCPU・1GBまで上がると、月60ドル台になる。
- 個人の小さな常時稼働なら、RenderはHobbyでWeb 7ドルとPostgres 6ドルの月13ドルから。RailwayはHobbyの月5ドルに収まる可能性がある。
- 配信量が多いサービスでは、通信単価の3倍の差（0.05ドルと0.15ドル）が効く。Renderのプランに含まれる帯域を超えた分だけの話だが、月1TB（1,000GB）を配信すると、通信費はRender Proで約146ドル、Railwayで50ドルと、約100ドルの差になる計算だ。
:::

:::fact
請求の上限の仕組みも違う。Railwayのドキュメントによれば、利用上限を設定でき、ハード上限を超えるとワークロードを停止する。Renderの公式の説明では、ビルド時間には支出の上限を設定できる。計算資源は箱の数で決まるので、その月額は事前に分かる。ただしRenderでも、帯域の超過とオートスケールで増えたインスタンスの分は請求が増える。
:::

## 無料で試せる範囲

:::fact
両社の「無料」は形がまったく違う。

| 項目 | Railway | Render |
| --- | --- | --- |
| 新規登録 | 30日間使える一度限りの5ドル分のクレジット（クレジットカード不要） | 期限のないHobbyワークスペース |
| 継続の無料枠 | トライアル後はFreeプラン（月1ドル分） | 無料のWebサービス月750時間 |
| 無料の仕様 | 1サービスあたり0.5GB・1 vCPUまで、1プロジェクト、3サービス | 0.1 CPU・512MB |
| 止まる条件 | 使用量がクレジットを超えたとき。任意のServerlessはアウトバウンドが5分ないと休止 | 受信が15分ないと停止、次のリクエストで約1分かけて起動 |
| データベース | 通常のサービスとしてボリューム0.5GBまで | Postgres 1GBは30日で期限切れ、Key Valueは再起動でデータ消失 |
| 独自ドメイン | Freeは0 | 無料のWebサービスでも可 |
| 静的サイト | サービスとして配信 | デプロイ無料（帯域とビルド時間には算入） |

Railwayのドキュメントによれば、需要が高い時期にはPro以上が優先され、FreeとまれにHobbyのビルドやデプロイが待ち行列に入ることがある。動作中のデプロイやデータには影響しない。Renderは無料のWebサービスがいつでも再起動される場合があると書き、本番に使わないよう明言している。
:::

:::guess
学習や試作が目的で、公開するURLがあればよいならRenderの無料枠が分かりやすいとみられる。眠っても起きるので、月750時間の範囲で期限なく置いておける。ただし30日でデータベースが消える前提で設計する必要がある。RailwayのFreeは月1ドル分しかないので、実質的には30日のトライアルの後、Hobbyの月5ドルへ進むかどうかを決める形になると考えられる。常時動かすものを安く置きたい人には、この月5ドルのほうが素直だ。
:::

## デプロイとスケールの違い

:::fact
| 項目 | Railway | Render |
| --- | --- | --- |
| 大きさの決め方 | プランの上限まで自動で伸びる | プランをサービスごとに選ぶ |
| 水平スケール | レプリカ数を手動で設定（Hobby 6、Pro 42まで） | 手動、またはProプラン以上でCPU・メモリの目標によるオートスケール |
| 地域の変更 | いつでも変更可。ボリューム付きは移行中に停止 | 既存のサービスとデータベースは変更不可。作り直して移行 |
| 複数地域 | レプリカを別の地域に配置できる | 地域ごとに別サービスを作る。非公開ネットワークは地域で分かれる |
| 無停止デプロイ | ヘルスチェックを設定して実現 | 既定で動作 |
| ディスク付きの場合 | 短い停止が発生。ボリュームとレプリカは併用不可 | 無停止デプロイ不可。複数インスタンス不可 |
| ビルドの上限 | Hobby 40分、Pro 90分 | 120分 |
| HTTPリクエストの上限 | データが流れ続ければ15分。無通信なら5分 | 最大100分 |
| 定期実行 | cronのスケジュール指定。Freeはトライアル時のみ | cronジョブ（1回12時間まで）を秒割で課金 |
| 長時間の処理 | サービスとして常駐 | バックグラウンドワーカー、Workflows（1タスク最大24時間） |
:::

:::guess
負荷の山が読めないWebアプリには、Railwayの「勝手に上限まで伸びる」設計が楽だとみられる。Renderは閾値を決める手間があるが、CPU使用率に応じて台数を増やす本来のオートスケールを持っている。レプリカを自動で増減させたいならRender、1台が太くなってくれればよいならRailway、という分かれ方になると考えられる。生成AIの応答待ちやレポート作成のように1本のリクエストが長い処理は、Renderの100分が効く。Railwayでは、処理を非同期にする設計に寄せることになると推測される。
:::

## データベースの運用範囲

:::fact
Renderの公式ページによれば、Postgresは有料インスタンスで継続的な時点復旧が動き、Hobbyで3日、Pro以上で7日戻せる。高可用性は同じ地域の別ゾーンの待機系で、主系が30秒使えないと自動で切り替わる。Key Valueは新規ならValkey 8で、有料版はディスクに永続化する。MySQLとMongoDBは自分でサービスとして立てる。

Railwayのドキュメントによれば、PostgreSQL、MySQL、Redis、MongoDBをテンプレートとして保守し、プロビジョニングとセキュリティパッチを担う。バックアップ、時点復旧（PostgreSQL、MySQL）、高可用性、接続プールは「利用者が有効にする」操作で、有効にすれば自動で動く。バックアップの保持は日次6日、週次27日、月次89日。データベースの稼働率SLAは公表しておらず、必要なら営業に問い合わせるよう書いている。Renderの料金ページは契約上のSLAをEnterpriseの項目に挙げている。
:::

:::guess
データベースの選択は、「標準でどこまで面倒を見てくれるか」の差と読める。RenderのPostgresはRDSに近い発想で、インスタンスを選べば復旧の仕組みが付いてくる。Railwayはより多くのデータベースを同じキャンバスに置け、必要な保護を後から有効にしていく形だ。MySQLやMongoDBを使うならRailwayが手軽で、Postgres一本で復旧の手順を早く固めたいならRenderが合いやすいと考えられる。
:::

## 土台の違いと、日本から見た地域

:::fact
Railwayの地域は、カリフォルニア、バージニア、アムステルダム、シンガポールの4つで、公式ドキュメントはいずれもRailway Metalの名で載せている。Railway Metalは自社で所有して運用するハードウェアだと書いている。Renderの地域は、オレゴン、オハイオ、バージニア、フランクフルト、シンガポールの5つ。公式ブログによれば、AWSのEC2・S3・ELBといった基礎的なサービスの上で自社のKubernetesを運用し、Google Cloud上のサービスもある。両社とも日本の地域は一覧になく、アジアはシンガポールだけだ。

当サイトの観測（2026-11-02）では、railway.comは server: railway-hikari と x-railway-edge: hnd1 を返し、render.comは server: cloudflare と cf-ray の末尾 NRT を返した。どちらも東京近くのエッジから応答していたとみられるが、これは配信の入口の話で、アプリ本体はシンガポールなどの地域で動く。
:::

:::fact
両社とも、公開の障害報告を出している。Railwayは2026年5月19日、Google Cloudの自動処理で本番アカウントが誤って停止され、約8時間にわたり全体が止まった。自社のMetalとAWS上のワークロードは動いていたが、経路表を配るコントロールプレーンAPIがGoogle Cloudにあったため、全地域で404を返すようになった。Renderは2024年3月26日、自社のコード変更で全ワークロードが再起動し、有料サービスの完全復旧まで約2時間40分、無料サービスは約3時間50分かかった。原因はそれぞれ異なり、同じ条件で比べられるものではない。2025年10月のAWSの障害では、Renderのビルドとデプロイの一部が遅れた一方、動作中のサービスは止まらなかったと公式に報告している。
:::

:::pull
Railwayは原価を自分で握り、そのぶん運用の重さを背負う。Renderは原価を他社に委ね、そのぶんデータセンターを持たない。
:::

## 互いの比較ページをどう読むか

両社の公式の比較ページは参考になるが、相手側の記述は割り引いて読む必要がある。この記事の閲覧日に、次の食い違いを確認した。どちらも悪意を示すものではなく、競合の情報が更新に追いついていない例とみられる。

:::fact
- Railwayの比較ページ（最終更新2026-10-30）は、Renderの費用としてチームメンバーごとの固定月額を挙げている。Renderの料金ページとChangelogによれば、席課金は2026年4月に廃止され、Pro以上の席は無制限だ。
- Renderの比較記事（2026-05-06）は、Railwayのデータベースを手動またはスケジュールのバックアップに頼る未管理のコンテナと説明している。Railwayの現在のドキュメントは、高可用性、時点復旧、接続プールを有効にできると書いている。
- 同じRenderの記事は、RailwayのCDNが2026年5月時点で無効とする。Railwayの現在のドキュメントは、CDNキャッシュは全プランで追加料金なしで使えると書いている（既定はオフ）。
- 同じRenderの記事は、Railwayの無料枠のデプロイが現地時間の午前8時から午後8時まで拒否されると書く。Railwayのドキュメントには、高負荷時にFreeと、まれにHobbyのデプロイが待ち行列に入るとある。当サイトは時間帯の記述をRailwayの公式ページで確認できなかった。
- Railwayの比較ページは、Serverlessの休止を10分と書き、Serverlessのドキュメントは5分と書く。同じ会社のページどうしでも数字が揃っていないので、本文では機能の専用ページの値を採った。
:::

## どちらを選ぶと合いやすいか

ここからは、上の表と条件を当サイトが読んだうえでの整理だ。優劣を付けるものではなく、用途ごとに、どの条件が効いてくるかを示す。

:::guess
- 個人開発で、常時動かすAPIやボットを月数ドルで置きたいなら、Railwayが合いやすいとみられる。待ち時間の長いアプリなら、月5ドルのHobbyに収まる可能性がある。
- 学習用やポートフォリオで、お金をかけずに公開URLを持ちたいなら、Renderの無料枠が分かりやすい。ただし起動に約1分かかることと、データベースの30日の期限を受け入れる必要がある。
- 少人数のSaaSで、複数のサービスとデータベースを同じ画面で見渡したいなら、Railwayのキャンバスと従量課金は相性がよいと考えられる。予算の上限はハード上限で守れるが、上限に達するとワークロードが止まる点は設計に織り込む必要がある。
- 請求額を毎月ほぼ固定にしたい会社や、請求を事前に承認する組織には、Renderの固定月額が向くとみられる。トラフィックの大きいサービスでは、通信費の差を別に見積もるべきだ。
- 台数の自動増減、Postgresの時点復旧、1時間を超えるリクエスト、SSOやSCIM、HIPAAを早い段階で求めるチームは、Renderの条件表に合う項目が多い。その場合、Scaleの月499ドルが視野に入る。
- MySQLやMongoDBをRedisと並べて手軽に使いたい場合は、Railwayのテンプレートが楽だと推測される。
- 地域を後から変える可能性が高い、あるいは複数地域に同じサービスを配置したい場合は、Railwayの設定のほうが手間が少ない。Renderでは地域を選び直すと作り直しになる。
- 日本の利用者向けで遅延を抑えたい場合、どちらもシンガポールが最寄りになる。動的な応答が多いサービスでは、両社とも東京の地域がないことを前提に、国内の基盤も比較に入れたほうがよい。
:::

## なぜ料金の形が違うのか

:::fact
[Railwayの解剖記事](/ja/articles/railway)でも取り上げたとおり、Railwayは2023年12月にGoogle Cloudから自前のサーバーへ移ると宣言した。創業者のJake CooperはLatent Spaceのインタビューで、Metal上の利益率は約70%だと話している。Renderは2026年2月の発表で、長時間動くプロセス、非公開ネットワーク、WebSocket、Postgres、Redis、IaCを、AIエージェントの土台として説明している。
:::

:::guess
秒単位の従量課金は、原価が自社のラックに固定されている会社にとって、売りやすい値付けだとみられる。空いている時間の計算資源は、どの顧客のものでもないからだ。自社の設備は使っても使わなくても費用が同じで、多くの顧客の負荷を重ねて稼働率を上げるほど利幅が残る。一方、クラウドからノードを借りて顧客の箱を載せるRenderでは、顧客が確保した大きさに合わせて料金を決めるほうが、原価の構造に近いと考えられる。Renderが固定料金の読みやすさを、Railwayが無駄のなさを売り文句にしているのは、それぞれの原価の形を裏返したものと読める。

ただし両社は近づいてもいる。Renderは定期実行とWorkflowsで従量の課金を持ち、Sandboxesでは使ったCPU時間で課金する。Railwayも固定に近い最低料金を持つ。どちらもエージェント向けの実行環境を料金表に載せており、次の競争はWebアプリの箱ではなく、エージェントが動かす短命なコードの置き場で起きるとみられる。
:::

RailwayとRenderは、同じ「pushすれば動く」を別の約束で売っている。Railwayは、使わなかった分は払わなくてよいと約束する。Renderは、来月の請求が今月と同じだと約束する。選ぶ側が見るべきなのは、アプリがどれだけ待っている時間が長いか、そして請求の振れと設定の手間のどちらを避けたいかだ。その答えが決まれば、2社の表のどの行を読めばよいかは自然に決まる。
