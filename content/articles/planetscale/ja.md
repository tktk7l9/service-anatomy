---
service: "PlanetScale"
title: "無料枠は2024年に廃止、いまは月5ドルの単一ノードから3ノードの高可用構成、NVMeのMetal、シャーディングのNekiまで「箱の大きさ」で売る — MySQLのVitessから始まり、Postgresへ踏み出したPlanetScaleを解剖する"
description: "PlanetScaleは、YouTubeでMySQLを拡張するために生まれたVitessの共同作者たちが2018年に創業したマネージドデータベースの会社だ。2024年3月に「利益を優先する」と宣言して無料のHobbyプランを廃止し、2025年にPostgresへ参入した。料金は使った量ではなく選んだクラスターの大きさで決まり、Postgresは単一ノードが月5ドル、3ノードの高可用構成が月15ドル、ローカルNVMeのMetalが月50ドルから（いずれもAWSバージニアの価格）。料金表はMarkdownと読み取り専用のPostgresデータベースでも公開され、AIエージェントが直接読めるようにしてある。東京リージョンがあり、2026年10月にはAzureに対応し、シャーディングしたPostgres「Neki」をプラットフォームプレビューで提供している。公式の料金ページ、ドキュメント、ブログ、GitHubのAPI、当サイトの実観測から解剖する。"
lead: "2024年3月6日、PlanetScaleのCEOは「無料のリソースを際限なく配らなくても成長できる」と書き、無料プランを1カ月後に終えると告げた。2026年11月のいま、競合のNeonは無料で100のプロジェクトを配っている。PlanetScaleが選んだのは、使った分を秒で測る値付けではなく、大きさの決まった「箱」を月額で売る値付けだ。その箱は5ドルから始まり、3ノード、NVMe、シャーディングへと段を刻んで大きくなる。MySQLの会社がPostgresに来て、何をどう売っているのかを解剖する。"
category: dev-tool
tags: [database, postgres, mysql, vitess, sharding, kubernetes, ai-agent, open-source]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
serviceUrl: "https://planetscale.com/"
expires:
  - date: "2026-12-31"
    claim: "Nekiがプラットフォームプレビュー（ベータ機能・SLAなし・本番での利用は非推奨）であること、Postgresの読み取り専用リージョンが「近日提供」であること"
# Affiliate link placeholder: no public affiliate or referral program was found for PlanetScale
# (checked 2026-11-02 on planetscale.com/pricing, /startups, the static sitemap and the docs).
# Leave this block commented out unless the owner finds a program.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<planetscale-referral-link>"
#   program: "PlanetScale"
vendor: "PlanetScale, Inc."
origin: "US"
heroTheme: "planetscale"
scores: { product: 4.5, ux: 4.0, tech: 5.0, business: 4.0 }
techStack:
  - layer: "MySQL互換のシャーディング層"
    name: "Vitess (Go, Apache-2.0, CNCF graduated)"
    confidence: confirmed
    evidence: "GitHubの vitessio/vitess（2026-11-02時点・APIで取得）は「MySQLを水平にスケールさせるためのデータベースクラスタリングシステム」で、主言語Go、ライセンスApache-2.0、スター21,399、2013年6月27日作成、最新リリースは2026年10月13日のv24.0.5。vitess.ioは「Cloud Native Computing Foundationの卒業プロジェクト」と明記。PlanetScaleのトップページは、VitessはPlanetScaleの創業者たちがYouTubeで開発し、20のデータセンターにある7万ノードでMySQLをペタバイト規模に広げたと書く"
    evidenceUrl: "https://github.com/vitessio/vitess"
  - layer: "Postgresの運用基盤"
    name: "Real Postgres (17, 18) on a proprietary operator + PgBouncer"
    confidence: confirmed
    evidence: "公式ブログ（2025-07-01）に「PlanetScale for Postgresは独自のオペレーター上で本物のPostgresを動かす」「自前のプロキシ層で自動フェイルオーバー、クエリのバッファリング、接続プール（PgBouncerを含む）を提供する」と明記。サポートするバージョンのページ（2026-11-02時点）はPostgres 17.11と18.6を挙げ、メジャーバージョンのその場での更新は提供していないと書く"
    evidenceUrl: "https://planetscale.com/blog/planetscale-for-postgres"
  - layer: "シャーディングしたPostgres（プラットフォームプレビュー）"
    name: "Neki (router + sidecars + control plane, real Postgres on every shard)"
    confidence: confirmed
    evidence: "公式ブログ（2026-09-10「Introducing Neki」）に、アプリはPostgresのワイヤープロトコルを話すNekiのルーターにつなぎ、各シャードは1つのプライマリと少なくとも2つのレプリカを3つのアベイラビリティゾーンに置く本物のPostgresクラスターで、「独自のストレージエンジンはない」と明記。ルーター、各インスタンスの横で動くサイドカー、コントロールプレーン、JSONのデータトポロジーの4部品で構成し、「Vitessのフォークではない」と書く"
    evidenceUrl: "https://planetscale.com/blog/introducing-neki"
  - layer: "ストレージ"
    name: "PlanetScale Metal (local NVMe) / Amazon EBS gp3 / Google Persistent Disk"
    confidence: confirmed
    evidence: "公式ドキュメント「PlanetScale plans」に、ネットワーク接続ストレージ（Amazon Elastic Block StorageまたはGoogle Persistent Disk）は自動で伸びる一方、MetalはローカルのNVMeドライブで、作成時にコンピュートとストレージの両方を選ぶ必要があると明記。Metalのページは「Metalのストレージは自動で伸びない」と警告する。料金ドキュメントはAWSのgp3に3,000 IOPSと125 MiB/sが含まれると書く"
    evidenceUrl: "https://planetscale.com/docs/metal"
  - layer: "データベースの実行基盤"
    name: "Kubernetes on AWS, Google Cloud and Azure"
    confidence: confirmed
    evidence: "公式ブログ（2026-10-13「PlanetScale is now available on Azure」）に「PlanetScaleはデータベースをKubernetesで動かしており、各データベースのポッドはネットワーク上に自分のIPアドレスを必要とする」と明記。Azureの仮想ネットワークの上限（6万5,536個のプライベートIP）を、/28の16個単位のブロックで割り当てて回避した経緯を説明している"
    evidenceUrl: "https://planetscale.com/blog/planetscale-is-now-on-azure"
  - layer: "管理APIとダッシュボードのバックエンド"
    name: "Ruby on Rails"
    confidence: confirmed
    evidence: "公式ブログ（2022-01-18）に「PlanetScaleのバックエンドAPIはRuby on Railsで作られている」と明記（テストはminitestとFactoryBot、CIはBuildkite）。当サイトの実観測（2026-11-02）でも、auth.planetscale.com と api.planetscale.com の応答に x-runtime、x-request-id、x-download-options、x-permitted-cross-domain-policies というRailsの既定に多いヘッダーが付いていた"
    evidenceUrl: "https://planetscale.com/blog/how-our-rails-test-suite-runs-in-1-minute-on-buildkite"
  - layer: "公開サイトとドキュメント"
    name: "React Router on Cloudflare (planetscale.com) / Mintlify on Vercel (docs)"
    confidence: likely
    evidence: "当サイトの実観測（2026-11-02）で、planetscale.com の料金ページは server: cloudflare と cf-placement: remote-SJC を返し、HTMLに window.__reactRouterContext と /assets/ 以下のJavaScriptがあった（React Routerのフレームワーク機能で配信されているとみられる）。app.planetscale.com も cf-placement: remote-IAD を返した。/docs は x-mintlify-client-version、x-vercel-id を返し、ページ末尾に「Mintlifyで構築・ホスト」と書かれている"
  - layer: "開発者向けの入口"
    name: "pscale CLI (Go) + database-js (TypeScript) + hosted MCP server"
    confidence: confirmed
    evidence: "GitHub（2026-11-02時点・APIで取得）の planetscale/cli は主言語Go・Apache-2.0・スター671、planetscale/database-js は「Fetch APIと互換のPlanetScaleのデータベースドライバー」でTypeScript・Apache-2.0・スター1,208。公式ブログ（2026-01-29）はOAuthで認証するホスト型のMCPサーバーを発表し、WHERE句のないUPDATEやDELETEを止め、TRUNCATEを許さず、DDLは人の確認を求めると書く"
    evidenceUrl: "https://planetscale.com/blog/introducing-planetscale-mcp-server"
sources:
  - label: "PlanetScale公式: Pricing"
    url: "https://planetscale.com/pricing"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式: pricing.md（エージェント向けの料金カタログ・AWSバージニア）"
    url: "https://planetscale.com/pricing.md"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式: pricing.md?region=ap-northeast（AWS東京の料金）"
    url: "https://planetscale.com/pricing.md?region=ap-northeast"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ドキュメント: PlanetScale plans"
    url: "https://planetscale.com/docs/planetscale-plans"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ドキュメント: PlanetScale Postgres pricing"
    url: "https://planetscale.com/docs/postgres/pricing"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ドキュメント: Billing"
    url: "https://planetscale.com/docs/billing"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ドキュメント: Single node"
    url: "https://planetscale.com/docs/postgres/cluster-configuration/single-node"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ドキュメント: Branching（Postgres）"
    url: "https://planetscale.com/docs/postgres/branching"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ドキュメント: Development Environments（Postgres）"
    url: "https://planetscale.com/docs/postgres/development-environments"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ドキュメント: Vitess, Neki, and Postgres"
    url: "https://planetscale.com/docs/postgres-vs-vitess"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ドキュメント: Deploy requests（Vitess）"
    url: "https://planetscale.com/docs/vitess/schema-changes/deploy-requests"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ドキュメント: Supported versions（Postgres）"
    url: "https://planetscale.com/docs/postgres/cluster-configuration/versions"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ドキュメント: Selecting a region"
    url: "https://planetscale.com/docs/plans/regions"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ドキュメント: PlanetScale Metal"
    url: "https://planetscale.com/docs/metal"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ドキュメント: Neki"
    url: "https://planetscale.com/docs/neki"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ドキュメント: Migrate from Neon to PlanetScale"
    url: "https://planetscale.com/docs/postgres/imports/neon"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ドキュメント: Support"
    url: "https://planetscale.com/docs/support"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ドキュメント: Security and compliance"
    url: "https://planetscale.com/docs/security"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式: About"
    url: "https://planetscale.com/about"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式: トップページ"
    url: "https://planetscale.com/"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式: PlanetScale for Startups"
    url: "https://planetscale.com/startups"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式: Benchmarks"
    url: "https://planetscale.com/benchmarks"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ブログ: Announcing PlanetScale: The database for developers（2021-05-18）"
    url: "https://planetscale.com/blog/announcing-planetscale-the-database-for-developers"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ブログ: Sam Lambert appointed new CEO of PlanetScale（2021-07-19）"
    url: "https://planetscale.com/blog/new-ceo-of-planetscale"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ブログ: How our Rails test suite runs in 1 minute on Buildkite（2022-01-18）"
    url: "https://planetscale.com/blog/how-our-rails-test-suite-runs-in-1-minute-on-buildkite"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ブログ: PlanetScale forever（2024-03-06）"
    url: "https://planetscale.com/blog/planetscale-forever"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ブログ: Announcing PlanetScale Metal（2025-03-11）"
    url: "https://planetscale.com/blog/announcing-metal"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ブログ: Announcing PlanetScale for Postgres（2025-07-01）"
    url: "https://planetscale.com/blog/planetscale-for-postgres"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ブログ: Announcing Neki（2025-08-11）"
    url: "https://planetscale.com/blog/announcing-neki"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ブログ: PlanetScale for Postgres is now GA（2025-09-22）"
    url: "https://planetscale.com/blog/planetscale-for-postgres-is-generally-available"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ブログ: Partnering with Cloudflare to bring you the fastest globally distributed applications（2025-09-24）"
    url: "https://planetscale.com/blog/partnering-with-cloudflare-fastest-applications"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ブログ: $5 PlanetScale（2025-10-30）"
    url: "https://planetscale.com/blog/5-dollar-planetscale"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ブログ: $5 PlanetScale is live（2025-11-14）"
    url: "https://planetscale.com/blog/5-dollar-planetscale-is-here"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ブログ: $50 PlanetScale Metal is GA for Postgres（2025-12-15）"
    url: "https://planetscale.com/blog/50-dollar-planetscale-metal-is-ga-for-postgres"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ブログ: Introducing the PlanetScale MCP server（2026-01-29）"
    url: "https://planetscale.com/blog/introducing-planetscale-mcp-server"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ブログ: Introducing Neki（2026-09-10）"
    url: "https://planetscale.com/blog/introducing-neki"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ブログ: PlanetScale is now available on Azure（2026-10-13）"
    url: "https://planetscale.com/blog/planetscale-is-now-on-azure"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ブログ: Neki update: $50 Metal, read-only replicas, Azure, and more（2026-10-20）"
    url: "https://planetscale.com/blog/neki-updates-and-preparing-for-production"
    accessedAt: "2026-11-02"
  - label: "GitHub: vitessio/vitess"
    url: "https://github.com/vitessio/vitess"
    accessedAt: "2026-11-02"
  - label: "Vitess公式サイト"
    url: "https://vitess.io/"
    accessedAt: "2026-11-02"
  - label: "GitHub: planetscale/cli"
    url: "https://github.com/planetscale/cli"
    accessedAt: "2026-11-02"
  - label: "GitHub: planetscale/database-js"
    url: "https://github.com/planetscale/database-js"
    accessedAt: "2026-11-02"
---

PlanetScaleは、MySQLを水平に分割して巨大なサービスを支えてきたVitessの作者たちが作った、マネージドデータベースの会社だ。[Neon](/ja/articles/neon)がPostgresを「使った分だけ、止まっている間はゼロ」で売るのに対し、PlanetScaleは大きさの決まったクラスターを月額で売る。2024年に無料プランをやめ、2025年にMySQLの会社からPostgresの会社にもなり、2026年には月5ドルの単一ノードから、シャーディングしたPostgres「Neki」までを1つの料金表に並べた。この記事は、その料金表がなぜ「段」の形をしているのかを、公式の一次情報から読み解く。

## サービス解説

公式の会社概要ページによれば、PlanetScaleは2018年に「Vitessの共同作者でありメンテナーである人たち」が創業した。トップページは、VitessはPlanetScaleの創業者たちがYouTubeで、20のデータセンターにある7万ノードでMySQLをペタバイト規模に広げるために開発したと書き、いまはSlack、HubSpot、GitHub、Blockなどのデータベースを支えていると紹介している。製品としてのPlanetScaleは、2021年5月18日の公式ブログ「開発者のためのデータベース」で発表された。同年7月19日には共同創業者のJiten Vaidya氏が、9カ月前に最高製品責任者として加わったSam Lambert氏にCEOを譲ると発表している。

:::fact
公式ブログ「PlanetScale forever」（2024年3月6日・Sam Lambert氏）は、「利益を出すことを優先する」と宣言し、主に営業とマーケティングのメンバーとの別れと、無料のHobbyプランの廃止（2024年4月8日）を発表した。同じ記事は「PlanetScaleは時価総額の合計が500億ドルを超える企業群の主要なデータベースだ」「データベースの分野は不要な誇大宣伝に満ちている。私たちはそこから降りる」「成長を続けるために無料のリソースを際限なく配る必要はない」と書く。公式ドキュメント「PlanetScale plans」（2026-11-02時点）は今も「PlanetScaleは無料プラン（以前の「Developer」や「Hobby」）を提供していない。すべてのデータベースに有料の契約が必要」と明記している。
:::

:::fact
Postgresへの参入は段階を踏んでいる。公式ブログによれば、2025年3月11日にローカルのNVMeを使う「Metal」を正式版にし、その反響で「Postgresに対応してほしいという企業からの連絡が殺到した」ことから、2025年7月1日にPlanetScale for Postgresの非公開プレビューを始めた。この発表は、既存のPostgresホスティングの利用者50社以上に話を聞き、「定期的な障害、遅さ、高いコスト」という同じ話を聞いたと書く。2025年9月22日に正式版となり、「数百社」が本番で使っていると述べた。2025年10月30日には、それまでの最小構成は3ノードで月30ドルだったとして、高可用ではない単一ノードの「PS-5」を月5ドルで出すと予告し、11月14日に提供を始めた。同じ日に開発用ブランチを月10ドルから5ドルに下げている。2025年12月15日にはPostgres向けのMetalの最低価格を月589ドルから50ドルへ下げた。シャーディングしたPostgresの「Neki」は2025年8月11日に予告され、2026年9月10日にプラットフォームプレビューとして公開された。2026年10月13日にはAzureの3リージョンでPostgresとNekiを作れるようになった（Vitessは対象外）。
:::

:::fact
料金ページと、エージェント向けに公開されている pricing.md（2026-11-02生成・AWSバージニアの価格・米ドル・月額）によれば、Postgresの単一ノードはPS-5（1/16 vCPU・512MiB）が5ドル、PS-10（1/8 vCPU・1GiB）がArmで10ドル、x86で13ドル、PS-80（1 vCPU・8GiB）がArmで50ドル。1つのプライマリと2つのレプリカの高可用構成（HA）は、PS-5が15ドル、PS-10がArmで30ドル、PS-160（2 vCPU・16GiB）がArmで286ドル、最大のPS-2560（32 vCPU・256GiB）がx86で5,599ドル。ローカルNVMeのMetal（3ノード）はM-10（1GiBメモリ・10GiBのストレージ）がArmで50ドルから。MySQL互換のVitessは表にx86の構成だけが載り、3ノードのPS-10が39ドルから。Nekiは単一ノードがなく、シャードごとに3ノードで、PS-10のArmが30ドル、ルーターは最小のNKR-0が6ドル。同じ pricing.md の東京（ap-northeast-1）版では、単一ノードのPS-5が5ドル、PS-10がArmで14ドル、x86で16ドル、HAのPS-10がArmで41ドルだった。
:::

:::pull
「成長を続けるために、無料のリソースを際限なく配る必要はない」。2024年3月にこう書いた会社が、1年半後に月5ドルの入口を作った。無料ではなく5ドルであることが、この会社の値付けの考え方を表している。
:::

::scorecard

## UX分析

PlanetScaleのUXは、「最初の一歩」より「大きくなったときに乗り換えなくて済むこと」に寄せて作られている。入口は安くなったが、無料ではない。その代わり、5ドルの箱から同じ画面のまま大きな箱に移れることを繰り返し約束している。

- **無料ではなく、5ドルから**。公式ブログ（2025-11-14）は、単一ノードを「本番にも使える」「スタートアップ、サイドプロジェクト、検証、開発向けの費用対効果の高い選択肢」と書き、成長したら同じ画面でサイズを上げ、「Primary + multi-replica」を選べば2つのレプリカが足されると説明する。公式ドキュメントによれば、支払い方法の登録が必須で、プリペイドカードは使えない。新しいカードではカードの有効性を確かめる一時的な与信がかかる。
- **大きさを選ぶ料金表**。料金は選んだクラスターの大きさで月額が決まり、作成や変更は月の途中ならミリ秒単位で日割りになる。ドキュメントの例では、月の半ばにPS-10からPS-20へ変えると39ドルの半分と59ドルの半分で49ドルになる。HAの本番ブランチをPS-40で1つ、PS-20で2つ持つと月217ドルという計算例もある。料金表に、止まっている間の計算資源をゼロにする仕組みは載っておらず、開発用ブランチも動いている時間で課金される。支出の管理は、月の予算の75%と100%で管理者にメールが届く通知として説明されている。
- **最初は大きな箱を選べない**。公式ドキュメントによれば、100ドル以上の請求を一度支払うまで、選べるサイズはPS-160とM-320までに制限され、それより大きいサイズは問い合わせが要る。
- **Postgresのブランチは空の箱**。公式ドキュメントによれば、Postgresのブランチは「完全に分離されたデータベース」で、ブランチの画面から作るとスキーマもデータも入らない、月5ドルからの単一ノード（PS-DEV）になる。データ込みのブランチはバックアップから復元して作る必要があり、ドキュメントは「本番のデータを開発環境に使うことは推奨しない」と書く。Postgresのブランチ間でスキーマの変更を自動でマージする手段は「現時点ではない」ので、開発ブランチで試した変更は本番ブランチに手で当てる。データベースごとの開発ブランチは既定で100、最大5,000まで増やせる。
- **Vitessには「デプロイリクエスト」がある**。MySQL互換のVitessでは、開発ブランチのスキーマの差分を本番へ送る「デプロイリクエスト」があり、公式ドキュメントは「本番データベースに止めずにスキーマ変更を入れられ」「その間に書かれたデータを失わずに元に戻せる」と書く。ドキュメントの比較表では、デプロイリクエストはVitessだけで、PostgresとNekiにはない。PlanetScaleを有名にした「Gitのようなスキーマ変更」は、現時点ではMySQL側の体験だ。
- **料金表をエージェントが読める**。料金ページは、料金表を読み取り専用のPostgresデータベースとして公開し、接続文字列を載せている。pricing.md はその使い方と「エージェントのためのルール」（記憶にある価格を使わず、検索結果のない構成は「その地域では提供していない」と答える、など）をMarkdownで書く。2026年1月29日に公開したMCPサーバーは、Claude、Cursorなどから組織・データベース・ブランチ・スキーマ・Insightsを読み、許可すればクエリも実行できる。WHERE句のないUPDATEやDELETEを止め、TRUNCATEは許さず、スキーマを変えるDDLは人の確認を求める。
- **東京リージョンがある**。公式ドキュメントのリージョン一覧（2026-11-02時点）は、AWSの12リージョン（東京を含む）、Google Cloudの7リージョン（ソウルを含む）、Azureの3リージョンを挙げる。新しいデータベースの既定はAWSのオハイオ（us-east-2）。いったん選んだリージョンは変えられず、移すにはダンプと復元が必要で、本番ブランチでは停止を伴うと書かれている。
- **サポートの標準は2営業日**。公式ドキュメントによれば、Base（セルフサービス）のプランに付く標準サポートは、米国太平洋時間の平日6時から18時の対応で、最初の返信の目標は2営業日。有料のBusinessサポートでは最優先の問い合わせに24時間365日で1時間以内、Enterpriseでは15分以内となる。

全体として、PlanetScaleの画面と料金表は「すでに本番で動いているデータベースを、止めずに大きくする」ことに最適化されている。入口の5ドルは、その長い道の最初の段として置かれている。試すだけの人にとっての摩擦（カードの登録、空のブランチ、手で当てるスキーマ）は、Neonや[Supabase](/ja/articles/supabase)より大きい。

## 技術構成

::techstack

:::fact
公式ブログ（2025-07-01）によれば、PlanetScale for Postgresは「独自のオペレーター上で本物のPostgresを動かし」、自前のプロキシ層で自動フェイルオーバー、クエリのバッファリング、PgBouncerによる接続プールを提供する。2026年10月13日のAzure対応の記事は「PlanetScaleはデータベースをKubernetesで動かしている」と書き、Azureの仮想ネットワークが6万5,536個までしかプライベートIPを持てない制約を、ノードごとに16個単位（/28）のブロックでIPを受け取り、ノード上の軽いCNIプラグインがその中からポッドに割り当てる方式で回避したと説明する。これでネットワークあたりのポッドのIPは16倍、100万を超える。規模の試験では、1つのクラスターで100を超えるノードプールに6,700以上のポッドを動かしたという。公式ドキュメントによれば、Postgresは17.11と18.6を提供し、17から18へはその場で上げられず、新しいデータベースを作ってオンラインで移行する。
:::

:::fact
公式ドキュメントによれば、ストレージはネットワーク接続型（Amazon EBSまたはGoogle Persistent Disk）とMetal（ローカルのNVMe）の2種類から選ぶ。ネットワーク接続型は自動で伸び、AWSのgp3では3,000 IOPSと125 MiB/sが含まれる。Metalは作成時にCPU・メモリとディスクの大きさを両方選び、ストレージは自動で伸びない。2025年3月11日の公式ブログは、Metalが一部の顧客の本番で3カ月動き、5PBのストレージで5兆件を超えるクエリを処理し、p99の遅延が最大65%下がり、Amazon Auroraと比べて53%のコスト削減になった例があると書く。2025年12月15日の記事は、Metalで「CPUとメモリをストレージ容量から切り離す最初の一歩」として、1GiBのメモリに10GBから1.2TBまでのストレージを組み合わせられるようにしたと述べる。
:::

:::fact
公式ブログ（2026-09-10）によれば、Nekiはアプリの前にPostgresのワイヤープロトコルを話すルーターを置き、ルーターは完全なPostgresのクエリパーサーと分散クエリプランナーを持ち、どのシャードで実行するかを決めて結果を1つのストリームに戻す。各シャードは本物のPostgresで「独自のストレージエンジンはない」。シャードの割り当てはJSONの「データトポロジー」で定義し、スキーマ変更、バージョン更新、フェイルオーバー、インポート、再シャーディングはオンラインのワークフローとして動く。同じ記事は、プラットフォームプレビューの間は「本番のワークロードを動かすべきではない」「破壊的な変更もある」と書く。公式ドキュメントも、NekiはPlanetScaleの利用規約上の「ベータ機能」で、SLAの対象外だと明記している。2026年10月20日の更新記事は、プレビュー開始から650を超える変更を取り込み、分散INSERT ... SELECTが公開時の約76倍、COPYの取り込みが約5倍速くなったと書く。
:::

:::guess
ここまでを並べると、PlanetScaleの技術の芯は「データベースそのものは書き換えず、周りの運用を作り込む」ことにあるとみられる。Vitessは本物のMySQLの前にVTGateを置き、Nekiは本物のPostgresの前にルーターを置き、PostgresのクラスターはKubernetesのオペレーターが本物のPostgresを管理する。ストレージ層からPostgresを作り替えたNeonとは、正反対の場所に工夫を置いている。Metalも同じ考え方で、ネットワーク越しのディスクをやめてサーバーに直接つないだNVMeを使い、その代わりに失われやすいローカルディスクを3ノードの複製で守る設計と推測される。
:::

:::guess
当サイトの実観測（2026-11-02）では、planetscale.com はCloudflareの配信で、cf-placement というヘッダーを返し、HTMLはReact Routerの形をしていた。管理画面の裏はRuby on Railsで、ドキュメントはMintlifyでホストされている。データベースの中核はGo（Vitess、CLI）とKubernetes、周辺はRailsとTypeScriptという、役割ごとに道具を分けた構成とみられる。2025年9月24日にはCloudflareとの提携を発表し、WorkersからHyperdrive経由でPlanetScaleにつなぐ統合を出している。データベースを自社の仕事に絞り、エッジやアプリの実行環境は他社と組む分担だと推測される。
:::

## ビジネスモデル

収益は、選ばれたクラスターの月額（ミリ秒単位の日割り）に、含まれる量を超えたストレージ、バックアップ、通信、追加のレプリカ、アドオンを足したものだ。無料枠はなく、最初の請求から売上になる。

:::fact
公式ドキュメント「PlanetScale Postgres pricing」（2026-11-02時点）によれば、各ブランチには10GBのディスク、ディスクの2倍のバックアップ容量、通信（外向き）が含まれる。通信は本番ブランチで月100GB、単一ノードのPS-5と開発ブランチで月10GBまでで、超えた分は地域ごとの単価がかかる。バックアップが含まれる量を超えると1GBあたり月0.023ドル、プライベート接続の通信は地域によらず1GBあたり0.01ドル。ネットワーク接続型のストレージは「インスタンスごと」に課金され、HAではプライマリと2つのレプリカの3台がそれぞれ同じ大きさのボリュームを持つ。料金ドキュメントが案内する公開APIの値は、2026-11-02時点でストレージが1GBあたり月0.125ドル（バージニア）と0.15ドル（東京）だった。プランのページは、SSOのアドオンを月199ドル、ユーザーが追加で取るバックアップを1GBあたり月0.023ドルとし、BAA（HIPAAの事業提携契約）はBaseプランに含むと書く。セキュリティのページは、SOC 1 Type 2とSOC 2 Type 2+HIPAAの報告書をトラストセンターで提供すると書く。
:::

:::fact
公式ドキュメント「PlanetScale plans」によれば、Enterpriseプランでは、専用の環境（シングルテナント）か、顧客自身のAWS・Google Cloud・Azureのアカウントに置く「PlanetScale Managed」を選べる。料金ページによれば、Managedでは、インフラの費用は顧客がクラウド事業者に直接払い、PlanetScaleにはその費用の一定割合を払う。料金ページは「AWSやGCPと既存の契約がある企業では、自社の割引を使えるので、PlanetScaleのインフラで動かすより安くなることがある」と書く。PCI DSSの認定を受けたサービス事業者が必要な場合もEnterpriseを案内している。AWS MarketplaceとGoogle Cloud Marketplaceからも購入できる。スタートアップ向けのページは「クラスターは月5ドルから」「従量または年間の料金」と書くが、Neonのような無償クレジットの制度は、当サイトが確認した範囲の公式ページには載っていなかった。
:::

:::fact
公式の「Benchmarks」ページ（2026-11-02時点）は、社内の計測ツール「Telescope」による比較として、3ノードHAのM-320（4 vCPU・32GBメモリ）が約1万8,000QPSで月1,349ドル、同じ条件でAmazon Auroraが約1万2,000QPSで月1,754ドル、Neon Lakebaseが約1万2,500QPSで月2,768ドル、Supabaseが約5,000QPSで月2,144ドルと載せている。これはPlanetScale自身による計測で、ページは「方法やコスト計算に誤りがあれば benchmarks@planetscale.com に連絡してほしい」と呼びかけている。
:::

:::guess
2024年の無料プランの廃止と、2025年の5ドルの単一ノードは、矛盾しているようで同じ考え方から出ているとみられる。無料の利用者は原価だけを生むが、5ドルの利用者はカードを登録した顧客で、サイズを上げればそのまま売上が増える。料金表が「単一ノード→HA→Metal→Neki」と段を刻んでいるのは、顧客が成長するたびに同じ会社の中で上の段に移ってもらうための形と推測される。PlanetScaleのブログが繰り返し「痛い移行をしなくて済む」と書くのは、乗り換えの手間を、顧客を引き留める理由として売っているからだと読める。
:::

:::guess
一方で、この形には弱い面もある。無料枠を持たないので、学生や個人の試用から生まれる口コミや、AIエージェントが大量に作る使い捨てのデータベースは、Neonのような無料枠の厚いサービスに流れやすいと考えられる。PlanetScaleはその層を追わず、Cursor、Block、Intercomのような「止まると目立つ」顧客の、大きく高い箱で稼ぐ道を選んでいるとみられる。自社のベンチマークでNeonやSupabaseを名指しし、NeonからのPostgresの移行手順まで公式ドキュメントに載せているのは、他社の無料枠で育ったデータベースが大きくなった瞬間を取りに行く戦略と推測される。料金表をSQLで引けるようにしたのも、比較を求めるエージェントに自社の正確な価格を渡すための投資と読める。
:::

PlanetScaleは、データベースを安く始められる場所ではなく、データベースが大きくなったときに困らない場所として自分を売っている。無料枠をやめた会社が5ドルの入口を作り、MySQLの会社がPostgresを作り、単一のマシンの限界にはNekiを用意した。料金表の段は、その約束を価格の形に書き直したものだ。残る問いは、Nekiがプレビューを抜けたとき、その最上段に何社が上ってくるかだろう。
