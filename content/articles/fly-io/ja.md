---
service: "Fly.io"
title: "無料枠を廃止し、GPUを諦め、リージョンを17に絞り、創業者がCEOを降りて「エージェントのためのコンピュータ」に賭ける — 自社ハードウェアでFirecrackerを動かすFly.ioの9年を解剖する"
description: "2017年から作られてきた開発者向けクラウドFly.ioは、Dockerイメージを受け取ってFirecrackerのmicroVMに変換し、自社のハードウェアで世界17リージョンに置く。2024年10月にプランと無料枠を廃止して秒課金だけにし、2025年2月に「GPUについて間違っていた」と書き、2025年9月にリージョンを半分に減らし、2026年7月には2,500万ドルのシリーズDとともに元DockerのCEOを新CEOに迎え、創業者は顧問に退いた。会社の焦点は「人のためのマシン」から、AIエージェントが使い捨てにも永続にもできるLinuxコンピュータ「Sprites」へ移っている。公式の料金ページ、ドキュメント、ブログ、プレスリリース、GitHub、当サイトの実観測から、秒課金の料金、Rust製プロキシとSQLiteのゴシップ同期、Phoenixで作られた公開サイト、37,000顧客のうち8,000が「エージェントネイティブ」という事業の形を解剖する。"
lead: "Fly.ioの創業者は2026年7月のブログで、ある配信者に「2026年に新しいアプリを置く場所」として挙げられながら「いちばん自信が持てない事業者」と評されたことを、会社史上最高の月を更新している最中に「神経を逆なでされた」と書いた。そして同じ記事で、資金を調達し、Spritesに会社の焦点を絞り、CEOを交代すると告げた。無料枠をなくし、GPUを諦め、リージョンを減らしてきた会社が、何を捨てて何を残したのかを公開情報だけで解剖する。"
category: dev-tool
tags: [paas, hosting, firecracker, rust, elixir, ai-agent, edge, bare-metal]
publishedAt: "2026-10-06"
updatedAt: "2026-10-06"
lastVerified: "2026-10-06"
serviceUrl: "https://fly.io/"
# Affiliate link placeholder: Fly.io has no public affiliate or referral program (checked
# 2026-10-06 on fly.io/pricing, docs.fly.io/about/pricing and the blog; only a Startup
# Program with up to $15,000 in credit exists). Leave this block commented out unless the
# owner finds a program. Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<fly-io-referral-link>"
#   program: "Fly.io"
vendor: "Fly.io, Inc."
origin: "US"
heroTheme: "fly-io"
scores: { product: 4.0, ux: 4.0, tech: 4.5, business: 3.5 }
techStack:
  - layer: "ワークロードの隔離"
    name: "Firecracker microVMs (Intel Cloud Hypervisor for GPU Machines)"
    confidence: confirmed
    evidence: "公式ブログ（2021-04-08「Docker without Docker」）に「ユーザーはDockerコンテナとして届けるが、Dockerで動かしてはいない。高密度のマルチテナントではDockerの隔離は十分でなく、コンテナイメージをFirecrackerのmicro-VMに変換する」と明記。公式のセキュリティ文書も「Fly.ioの計算ジョブはAWSがLambdaとFargateのために開発したFirecrackerで仮想化される」と書く。2025-02-14の公式ブログは、GPU MachinesだけPCIパススルーのためにIntelのCloud Hypervisorを使うと説明"
    evidenceUrl: "https://docs.fly.io/security/security-at-fly-io"
  - layer: "ハードウェア"
    name: "Own servers in colocation (Equinix) with NVMe volumes"
    confidence: confirmed
    evidence: "公式のセキュリティ文書に「Equinixのような安全なデータセンターに置いた自社のハードウェアで動かす」と明記。公式ドキュメント「Volumes」は「Fly Volumeは、Machineがマウントされているのと同じ物理サーバー上のNVMeドライブの一部」と書く"
    evidenceUrl: "https://docs.fly.io/security/security-at-fly-io"
  - layer: "エッジのプロキシとAnycast"
    name: "fly-proxy (Rust, Hyper + Rustls) on an Anycast network"
    confidence: confirmed
    evidence: "公式のセキュリティ文書に「ソフトウェアはメモリ安全な言語で作られ、Anycastの転送経路はRust、デプロイとコントロールプレーンはGolang」と明記。公式ブログ「Taming A Voracious Rust Proxy」（2025-02-26）は、エッジはほぼ「fly-proxyというRustプログラム、Anycastネットワークの中心にあるルーター」を動かすためだけに存在すると書く。当サイトの実観測（2026-10-06）で fly.io の応答は server: Fly/6d530f8f2 (2026-09-29) と via: 1.1 fly.io を返し、fly-request-id の末尾は nrt（東京）だった"
    evidenceUrl: "https://docs.fly.io/security/security-at-fly-io"
  - layer: "状態の同期"
    name: "Corrosion (Rust, SQLite + cr-sqlite CRDT + SWIM gossip)"
    confidence: confirmed
    evidence: "公式ブログ（2025-10-22）に「CorrosionはゴシッププロトコルでSQLiteデータベースを伝播するRustプログラム」「ゴシップはSWIMの上に作られ、ロックも中央サーバーも分散合意もない」「CRDTのSQLite拡張であるcr-sqliteを使う」と明記。GitHubの superfly/corrosion はRust・Apache-2.0・スター1,860で、v1.0.0は2026年5月14日"
    evidenceUrl: "https://fly.io/blog/corrosion/"
  - layer: "オーケストレーター"
    name: "flyd (per-host, bid-based scheduling; replaced HashiCorp Nomad)"
    confidence: confirmed
    evidence: "公式ブログ（2023-02-01）に、それまで使っていたHashiCorp Nomadに代えて自社のオーケストレーター「flyd」を作り、「flydは市場のように動く。ジョブのスケジュール要求は資源への入札で、ワーカーは供給者」「flydは特定のワーカーで動くすべてのVMの正本」と明記"
    evidenceUrl: "https://fly.io/blog/carving-the-scheduler-out-of-our-orchestrator/"
  - layer: "プライベートネットワーク"
    name: "WireGuard mesh (6PN, IPv6) + .internal DNS"
    confidence: confirmed
    evidence: "公式ドキュメント「Private Networking」に「組織内のFly Appsは、6PNと呼ぶIPv6のWireGuardトンネルのメッシュでつながる」「外のアプリもWireGuardで6PNに接続できる」と明記"
    evidenceUrl: "https://docs.fly.io/networking/private-networking"
  - layer: "CLIと公開ツール"
    name: "flyctl (Go, Apache-2.0) / LiteFS (Go) / Litestream (Go)"
    confidence: confirmed
    evidence: "GitHubの superfly/flyctl（2026-10-06時点・APIで取得）は主言語Go、Apache-2.0、スター1,717、最新リリースはv0.4.112（2026-10-05）。superfly/litefs はGo・スター4,885で「SQLiteデータベースをマシンのクラスターに複製するFUSEベースのファイルシステム」。公式ブログ（2025-05-20）はLiteFSとLitestreamを比べ「Litestreamのほうが人気がある」と書く"
    evidenceUrl: "https://github.com/superfly/flyctl"
  - layer: "公開サイト"
    name: "Phoenix (Elixir) / Mintlify (docs) / Discourse (community)"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-06）で、fly.io のHTMLに phx-track-static 属性と _csrf_token が含まれ、画像のパスが /phx/ui/images/ で始まり、セッションCookie _fly の値が Plug.Session の署名形式（SFMyNTY. で始まる）だった。docs.fly.io の資産は mintcdn.com から読み込まれ、community.fly.io は x-discourse-route ヘッダを返した。fly.io はブラウザ以外のクライアントに text/markdown で本文を返し、全ページに .md 版があると llms.txt に書いている"
  - layer: "Managed Postgres"
    name: "Managed Postgres (MPG, PgBouncer; v1 on Fly Kubernetes, v2 beta on Fly Machines)"
    confidence: confirmed
    evidence: "公式ドキュメント「Managed Postgres」に、自動バックアップ、自動フェイルオーバー付きの高可用性、全プランでのPgBouncerによる接続プーリング、暗号化を挙げ、「まだないもの」として「セキュリティパッチとバージョンアップグレード」、ストレージ上限1TBを明記。公式コミュニティ（2026-05-19）は「元のManaged PostgresはFKS上で動き、安定性の問題があった。v2はFly Machinesの上に直接作った」と書く"
    evidenceUrl: "https://docs.fly.io/postgres/index.md"
sources:
  - label: "Fly.io公式: Pricing"
    url: "https://fly.io/pricing/"
    accessedAt: "2026-10-06"
  - label: "Fly.io公式ドキュメント: About Pricing（無料枠の有無・リージョン係数・予約割引）"
    url: "https://docs.fly.io/about/pricing"
    accessedAt: "2026-10-06"
  - label: "Fly.io公式ドキュメント: Free Trial"
    url: "https://docs.fly.io/about/free-trial"
    accessedAt: "2026-10-06"
  - label: "Fly.io公式ドキュメント: Discontinued Plans"
    url: "https://docs.fly.io/about/discontinued-plans"
    accessedAt: "2026-10-06"
  - label: "Fly.ioコミュニティ: We're making pricing simpler（2024-10-07・プラン廃止の告知）"
    url: "https://community.fly.io/t/were-making-pricing-simpler/22168"
    accessedAt: "2026-10-06"
  - label: "Fly.io公式: About（2017年からの開発・チーム一覧）"
    url: "https://fly.io/about/"
    accessedAt: "2026-10-06"
  - label: "Fly.io公式プレスリリース: Fly.io Launches Computers for Agents（2026-07-24・シリーズD・CEO交代）"
    url: "https://fly.io/news/fly-io-launches-computers-for-agents/"
    accessedAt: "2026-10-06"
  - label: "Fly.io公式ブログ: Kurt, Scott, Money, Sprites（2026-07-24）"
    url: "https://fly.io/blog/kurt-scott-money-sprites/"
    accessedAt: "2026-10-06"
  - label: "Fly.io公式ブログ: We Raised A Bunch Of Money（2023-06-27）"
    url: "https://fly.io/blog/we-raised-a-bunch-of-money/"
    accessedAt: "2026-10-06"
  - label: "Fly.io公式ブログ: Docker without Docker（2021-04-08）"
    url: "https://fly.io/blog/docker-without-docker/"
    accessedAt: "2026-10-06"
  - label: "Fly.io公式ブログ: Carving The Scheduler Out Of Our Orchestrator（2023-02-01）"
    url: "https://fly.io/blog/carving-the-scheduler-out-of-our-orchestrator/"
    accessedAt: "2026-10-06"
  - label: "Fly.io公式ブログ: Corrosion（2025-10-22）"
    url: "https://fly.io/blog/corrosion/"
    accessedAt: "2026-10-06"
  - label: "Fly.io公式ブログ: Taming A Voracious Rust Proxy（2025-02-26）"
    url: "https://fly.io/blog/taming-rust-proxy/"
    accessedAt: "2026-10-06"
  - label: "Fly.io公式ブログ: We Were Wrong About GPUs（2025-02-14）"
    url: "https://fly.io/blog/wrong-about-gpu/"
    accessedAt: "2026-10-06"
  - label: "Fly.io公式ブログ: Our Best Customers Are Now Robots（2025-04-08）"
    url: "https://fly.io/blog/fuckin-robots/"
    accessedAt: "2026-10-06"
  - label: "Fly.io公式ブログ: The Region Consolidation Project（2025-09-09）"
    url: "https://fly.io/blog/the-region-consolidation-project/"
    accessedAt: "2026-10-06"
  - label: "Fly.io公式ブログ: The Design & Implementation of Sprites（2026-01-14）"
    url: "https://fly.io/blog/design-and-implementation/"
    accessedAt: "2026-10-06"
  - label: "Fly.io公式: Sprites（製品ページ）"
    url: "https://fly.io/sprites/"
    accessedAt: "2026-10-06"
  - label: "Fly.io公式ドキュメント: Regions"
    url: "https://docs.fly.io/reference/regions"
    accessedAt: "2026-10-06"
  - label: "Fly.io公式ドキュメント: Security at Fly.io"
    url: "https://docs.fly.io/security/security-at-fly-io"
    accessedAt: "2026-10-06"
  - label: "Fly.io公式ドキュメント: Private Networking"
    url: "https://docs.fly.io/networking/private-networking"
    accessedAt: "2026-10-06"
  - label: "Fly.io公式ドキュメント: Managed Postgres"
    url: "https://docs.fly.io/postgres/index.md"
    accessedAt: "2026-10-06"
  - label: "Fly.ioコミュニティ: Managed Postgres v2 is now in beta（2026-05-19）"
    url: "https://community.fly.io/t/managed-postgres-v2-is-now-in-beta/27909"
    accessedAt: "2026-10-06"
  - label: "Fly.io公式: llms.txt（AIエージェント向けの案内と.md版の存在）"
    url: "https://fly.io/llms.txt"
    accessedAt: "2026-10-06"
  - label: "GitHub: superfly/flyctl"
    url: "https://github.com/superfly/flyctl"
    accessedAt: "2026-10-06"
  - label: "GitHub: superfly/corrosion"
    url: "https://github.com/superfly/corrosion"
    accessedAt: "2026-10-06"
---

Fly.ioは、Dockerイメージを渡すと世界のどこかのサーバーで仮想マシンとして動かす開発者向けクラウドだ。[Railway](/ja/articles/railway)がGoogle Cloudを出て自社ラックへ移ったのに対し、Fly.ioは最初から自社のハードウェアの上にあり、Firecrackerのmicro-VM、Rustのプロキシ、SQLiteのゴシップ同期といった部品を自分で作ってきた。2026年、その会社は焦点を「人がデプロイするアプリ」から「AIエージェントが使うコンピュータ」へ移すと宣言した。

## サービス解説

公式のAboutページは「2017年からこれを叩き続けてきた」と書く。同ページのチーム一覧では、Scott Johnston氏がCEO、創業者のKurt Mackey氏は「Advisor」だ。Fly Machinesは「AWS Lambdaを支えるのと同じ高速起動のmicroVMであるFirecracker」で動き、「1秒未満で起動と停止」ができる。利用者はflyctlというCLIかREST APIでMachineを作り、17のリージョンに置く。

:::fact
公式プレスリリース（2026年7月24日・サンフランシスコ）によれば、Fly.ioは「会社史上最高の四半期をエージェントのワークロードにほぼ全面的に牽引されて終えた」とし、「37,000以上の顧客が使い、うち8,000以上がエージェントネイティブ」「過去12カ月で最大のエージェントネイティブ顧客からの売上は12倍近くに伸びた」と書く。同日、Dell Technologies CapitalとIntel Capitalが共同で主導し、Andreessen Horowitz、EQT、Geodesic、YCが参加する2,500万ドルのシリーズDを発表した。Scott Johnston氏がCEOと取締役に就き、同氏は「以前Dockerの CEOを務め、Puppet、Loudcloud、Netscapeで指導的な役割を担った」。創業者のKurt Mackey氏は取締役に残り「顧問の役割に移る」。Mackey氏のブログ（同日）は「数四半期にわたって会社史上最高の財務の月を含む好調が続いている」と書き、「たくさんお金を調達した。Spritesの新しい版を出し、会社をそれに集中させる。CEOはScott Johnstonに代わる」とまとめている。2023年6月27日の公式ブログによれば、同社はその前年7月にA16Zと既存投資家のIntel Capital、Dellから2,500万ドル、2023年にEQT Venturesが主導する7,000万ドルを調達している。
:::

:::fact
公式の料金ページとドキュメント（2026-10-06時点）によれば、Fly.ioには月額のプランがなく「新しい組織はPay As You Goで、月額のプラットフォーム料金はなく、使った資源とサービスの分を払う」。Machineは動いている間だけ秒課金で、最小のshared-cpu-1x・256MBはアッシュバーンで月2.19ドル（時間0.0030ドル）、performance-16x・32GBは月528.02ドル、追加メモリは1GB月6ドル、停止中のMachineはルートファイルシステム1GBあたり月0.15ドル。Machineの価格はリージョンで異なり、ドキュメントの係数表では東京（nrt）が1.3077倍。Volumeは確保した容量に対して1GB月0.15ドル、外向き通信は北米・欧州で1GB 0.02ドル、アジア太平洋で0.04ドル、専用IPv4は月2ドル。無料枠は「ない。新しい組織には無料枠も月間の無料使用量もない」とし、代わりに「Machineの実行時間2時間か7日間のどちらか早いほう」までの無料トライアルがクレジットカードなしで使える。2024年10月以前にプランを契約した組織だけが当時の無料枠（shared-cpu-1x・256MBを3台、ボリューム3GBなど）を保持する。サポートは無料のコミュニティのほか、Standardが月29ドル、Premiumが月199ドル、Enterpriseが月2,500ドルからで、HIPAAパッケージは月99ドル（BAAは署名済み）。年間一括の予約ブロックは「40%引き」で、たとえば年36ドルで毎月5ドル分の共有Machineのクレジットが付く。
:::

:::pull
37,000の顧客のうち8,000が「エージェントネイティブ」。その12カ月で売上12倍の客が、創業者をCEOから降ろし、会社の焦点を変えた。
:::

::scorecard

## UX分析

Fly.ioの体験は、「設定ファイル1つとCLI1本でどこにでも置ける」という開発者向けの簡潔さと、「借りているのは本物のVMだ」という低レベルの手触りの両方でできている。2026年からは、その手触りをAIエージェントに向けて作り直している。

- **プランを選ばない**。公式コミュニティの告知（2024年10月7日）は「プランをなくす。料金は『使った分だけ』になる。LaunchやScaleのような名前でまとめることはもうしない」と書く。選ぶのはMachineのサイズとリージョンとボリュームの容量だけで、請求書にはそれしか載らない。無料枠がないことも同じ告知の結果だ。
- **止めれば安く、止まったままでも少し払う**。公式ドキュメントによれば、Machineはアイドル時に自動停止でき、停止中はルートファイルシステムの分だけ払う。常時稼働の最安は月2.19ドルで、Managed Postgresを付けた小さなWebアプリの例は月43.67ドル。安さは「止める設計」をしたときに出る。
- **フレームワークを見て組み立てる**。公式ドキュメントによれば、fly launchはAstro、Deno、Django、Elixir、FastAPI、Flask、Go、Laravel、Next.js、Nuxt、Rails、Remix、Rust、SvelteKitなどを自動で判別し、「専任の人がいるElixir/Phoenix、Laravel、Rails、Django」で最もよく動く。Dockerfileがあればほぼ何でも置ける。
- **リージョンは減った**。公式ブログ（2025年9月9日）はmad、otp、waw、atl、bos、den、mia、sea、hkgなど17のリージョンを廃止し、北米7、欧州5、アジア太平洋4（シンガポール、東京、シドニー、ムンバイ）、南米1、アフリカ1に統合すると告げた。公式ドキュメントのリージョン表は2026年10月時点で17で、東京（nrt）はその1つだ。
- **エージェントには別の製品がある**。公式の製品ページによれば、Spritesは「人ではなくエージェントのために設計された完全なLinuxコンピュータ」で、ディスクを保持し、1秒でスナップショットを取り、自分のURLで応答し、アイドル時に眠り、起こすと元のまま戻る。料金は「プランも階層もなく、Spriteごとの課金もない」従量制で、CPU時間1時間0.0385ドル、メモリ1GB時間0.021875ドル、起きている間のホットストレージは1GB月0.50ドル、眠っている間のコールドストレージは1GB月0.02ドル。新しい組織には30ドルの試用クレジットが付く。
- **サイトはAIにも読ませる**。公式の llms.txt は「fly.io のすべてのページにURLに .md を付けたMarkdown版がある」と書き、AIエージェントには AI-Agent ヘッダで名乗るよう求める。当サイトの実観測でも、Accept: text/markdown を付けると料金ページが本文のMarkdownで返った。

一方で、無料枠の廃止と7日間のトライアルは、「とりあえず置いてみる」個人開発者には入口を狭くした。公式ドキュメントの「無料枠はない」という一文と、2024年10月以前の契約者だけが旧無料枠を持ち続ける扱いは、同じサービスの中に2つの料金の世代があることを意味する。

## 技術構成

::techstack

:::fact
公式ブログ「Docker without Docker」（2021年4月8日）によれば、利用者はDockerコンテナとしてソフトウェアを届けるが、Fly.ioはDockerで動かさず、「高密度のマルチテナントではDockerの隔離は十分でない」としてコンテナイメージをFirecrackerのmicro-VMに変換する。公式のセキュリティ文書によれば、「Equinixのような安全なデータセンターに置いた自社のハードウェア」で動き、データベースとボリュームの顧客データはLinuxのLUKSで暗号化され、ソフトウェアは「Anycastの転送経路はRust、デプロイとコントロールプレーンはGolang」で書かれ、SOC2 Type 2の監査を受けている。2023年2月1日の公式ブログによれば、同社はHashiCorp Nomadに代えて自社のオーケストレーター「flyd」を作り、「スケジュールの要求は資源への入札で、ワーカーは供給者」という市場のような設計にした。
:::

:::fact
公式ブログ「Corrosion」（2025年10月22日）によれば、2024年9月1日15時30分（米東部時間）、新しい設定項目を含むMachineが立ち上がった数秒後に「艦隊のすべてのプロキシが固まった」。同社は「経験した中で最悪の障害」と呼び、エンドユーザーのリクエストが顧客アプリに届かない時間が生じた。その中心にあるCorrosionは「ゴシッププロトコルでSQLiteデータベースを伝播するRustプログラム」で、SWIMの上に作られ、「ロックも中央サーバーも分散合意もない」。どのノードも最終的に同じ更新の集合を受け取り、CRDTのSQLite拡張cr-sqliteで「最後の書き込みが勝つ」順序を論理時計で決める。記事は、Corrosionのテーブルにnull許容の列を1つ足しただけで全行のバックフィルが走り、「すべてのFly Machineが同時に状態を変えたように」振る舞った事故も挙げている。GitHubの superfly/corrosion はRust・Apache-2.0・スター1,860で、2026年5月14日にv1.0.0が出た。
:::

:::fact
公式ブログ「We Were Wrong About GPUs」（2025年2月14日・Kurt Mackey氏）によれば、GPU MachinesはFirecrackerではなくPCIパススルーに対応するIntelのCloud Hypervisorで動かし、NVIDIAのホストドライバーを仮想GPUに対応させる試みに数カ月を費やして失敗した。記事は「最大の問題は、開発者がGPUを欲しがっていないことだ。AI/MLモデルさえ欲しがっていない。欲しいのはLLMだ」と書き、「GPUの野心を縮小する」が既存のGPU Machinesはなくさないとした。2026年1月14日の「The Design & Implementation of Sprites」によれば、Spritesは「rootが取れるLinux仮想マシン」で、1〜2秒で作れ、全てが「100GBの永続的なルートファイルシステム」を持ち、その実体は「S3互換のオブジェクトストレージ」で、NVMeは「ストレージの根ではなく、オブジェクトストレージ上のblobのリードスルーキャッシュ」だ。
:::

:::fact
当サイトの実観測（2026-10-06）で、fly.io の応答には server: Fly/6d530f8f2 (2026-09-29) と via: 1.1 fly.io が付き、fly-request-id の末尾は nrt だった。HTMLには phx-track-static 属性と _csrf_token が含まれ、画像のパスは /phx/ui/images/ で始まり、セッションCookie _fly の値は SFMyNTY. で始まる署名形式だった。GitHubの superfly/flyctl は主言語Go、Apache-2.0、スター1,717で、最新リリースv0.4.112は2026年10月5日。公式ドキュメント「Managed Postgres」は、自動バックアップ、フェイルオーバー、全プランでのPgBouncer、暗号化を提供する一方で「セキュリティパッチとバージョンアップグレード」は「まだない」と書き、公式コミュニティ（2026年5月19日）は「元のManaged PostgresはFKS（Fly Kubernetes）上で動いて安定性の問題があったため、v2はFly Machinesの上に直接作った」と説明している。
:::

:::guess
Fly.ioの技術構成は、「借りた部品」より「作った部品」が多い。Firecrackerは借り物だが、プロキシ、オーケストレーター、状態同期、ネットワークは自作で、その多くがRustとGoで書かれ、一部はApache-2.0で公開されている。公開サイトがPhoenix（Elixir）で動いているとみられるのは、fly launchの説明で「専任の人がいる」最初に挙がるのがElixir/Phoenixであることと整合する。Corrosionの記事が「最悪の障害」を自ら詳述しているのは、合意アルゴリズムを持たない設計の代償を隠さない姿勢の表れと読める。Managed Postgresをいったん自社のKubernetesの上に作り、安定性を理由にMachinesの上に作り直した経緯は、自作の層を重ねる会社がその層の数だけ再設計の手間も抱えることを示していると推測される。
:::

## ビジネスモデル

収益は、Machine・Volume・通信量の秒単位と容量単位の従量課金に、Managed Postgresの月額プラン、サポートとコンプライアンスの月額を足したものだ。2026年からはSpritesの従量課金が加わる。

:::fact
公式の料金ページ（2026-10-06時点）によれば、Managed PostgresはBasic（shared-2x・1GB）が月38ドル、Starter（shared-2x・2GB）が月72ドル、Launch（performance-2x・8GB）が月282ドル、Scale（performance-4x・32GB）が月962ドル、Performance（performance-8x・64GB）が月1,922ドルで、ストレージは使った分1GBあたり0.28ドル、クラスターあたり最大1,000GB。全プランに高可用性、自動バックアップ、接続プーリングが含まれる。スタートアップ向けには最大15,000ドルのクレジットがある。公式ドキュメントによれば、2026年1月1日からボリュームのスナップショット（月10GBまで無料、以後1GB月0.08ドル）に課金が始まり、Fly Kubernetesはクラスターあたり月75ドルで「クローズドベータで本番の重要な用途には推奨しない」。
:::

:::fact
公式ブログ「Our Best Customers Are Now Robots」（2025年4月8日）は、「ここ6カ月ほどで、プラットフォームの成長を最も牽引しているユーザーは人ではなく、ロボットだ」と書いた。2026年7月24日のプレスリリースは「37,000以上の顧客、うち8,000以上がエージェントネイティブ」「最大のエージェントネイティブ顧客の売上は12カ月で12倍近く」とし、Firecrawl、Kilocode、Plastic Labsを例に挙げる。Kurt Mackey氏の同日のブログは「Spritesはスカンクワークスのプロジェクトで、Fly.ioのメインサイトにも載せていなかった。アイデンティティの危機にあった。だが霧は晴れ、これから先はComputers for Agentsが会社の焦点だ」と書いている。
:::

:::guess
無料枠の廃止、GPUからの撤退、リージョンの半減、そしてSpritesへの集中は、同じ方向を向いているとみられる。個人開発者の無料利用と、GPUという高価な在庫と、使われないリージョンの固定費を削り、1秒で作って眠らせられるVMを「エージェントのプラットフォーム」に大量に売る。Spritesの料金が「起きている間」と「眠っている間」で分かれ、Spriteごとの課金がないのは、1つのプラットフォームが数千のSpritesを作っては眠らせる使い方に合わせた設計と読める。プレスリリースの「8,000のエージェントネイティブ顧客」と「売上12倍」は、この賭けの根拠として示された数字だ。
:::

:::guess
創業者がCEOを降りてDockerの元CEOを迎えたことは、「開発者に愛される製品」から「エージェントのプラットフォームに売れる事業」へ、会社の評価軸を変える判断とみられる。Mackey氏自身が「会社史上最高の月」の最中に「いちばん自信が持てない事業者」と評されたことを記事の冒頭に置いたのは、好調な数字と外からの不安が同時に存在することを認めたうえでの転換だと推測される。自社ハードウェアとRustの部品を積み上げてきた9年の技術は残り、売る相手が人からエージェントへ変わる。その移行の途中で、無料枠を失った個人開発者と、Spritesを大量に使うプラットフォームのどちらが多く残るかが、この事業の次の評価を決めるとみられる。
:::

Dockerイメージを受け取ってFirecrackerで動かし、Rustでプロキシを書き、SQLiteをゴシップで同期し、自社のサーバーに置いてきた会社は、9年目に「人のためのクラウド」から「エージェントのためのコンピュータ」へ看板を掛け替えた。捨てたのは無料枠とGPUと17のリージョンで、残したのは自作の部品と、それを欲しがるロボットの客だ。
