---
service: "Railway"
title: "Google Cloudを出て自前のデータセンターへ — 35人のPaaS、Railwayが「原価」を取り戻して300万人を乗せるまで"
description: "リポジトリをつなぐだけでアプリもデータベースも立ち上がる開発者向けクラウド、Railway。2023年にGoogle Cloudとの決別を宣言し、2024年に自前のラック（Railway Metal）へ移り、2026年には自作のCDN「Hikari」まで作った。35人で300万人を支える体制、秒単位の従量課金、12か月15%のアフィリエイトまでを、公式ブログ・料金ページ・障害報告・創業者インタビューから解剖する。"
lead: "「Googleは信頼できる計算資源を置く場所ではない」——2023年12月、PaaSのRailwayは自社ブログにそう書き、自前のサーバーへ移ると宣言した。1年足らずで最初の自社拠点を稼働させてさらに3地域の立ち上げにかかり、2026年1月に1億ドルを調達する。ところが同年5月、残していたGoogle Cloudのアカウントが自動処理で停止され、全体が約8時間止まった。借り物のクラウドを降りて「原価」と「運命」を自分で握ろうとする会社の設計と稼ぎ方を解剖する。"
category: dev-tool
tags: [paas, hosting, bare-metal, rust, indie-dev]
publishedAt: "2026-09-28"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://railway.com/"
# Affiliate link placeholder: the owner must join the Railway affiliate program
# (https://railway.com/affiliate-program — the referral link is issued from the workspace
# "Refer" page in the Railway dashboard; cash payouts via Stripe Connect) before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://railway.com?referralCode=<owner-referral-code>"
#   program: "Railway Affiliate Program"
vendor: "Railway Corporation"
origin: "US"
heroTheme: "railway"
scores: { product: 4.0, ux: 4.5, tech: 4.5, business: 3.5 }
techStack:
  - layer: "ダッシュボード・API"
    name: "TypeScript / GraphQL"
    confidence: confirmed
    evidence: "公式の採用ページ（フルスタックエンジニア）に「TypeScript + GraphQLのAPIを作る」と明記"
    evidenceUrl: "https://railway.com/careers/full-stack"
  - layer: "インフラ層の言語"
    name: "Rust / Go (C for BPF)"
    confidence: confirmed
    evidence: "創業者兼CEOのJake CooperがLatent Spaceのインタビュー（2026-05-20公開）で「社内はTypeScript・Rust・Goで、言語は増やさない。BPFのコードとフック用に少しCがある」と発言"
    evidenceUrl: "https://www.latent.space/p/railway"
  - layer: "ワークフロー制御"
    name: "Temporal"
    confidence: confirmed
    evidence: "公式の採用ページに「ダッシュボードのUIから、Temporalでマイクロサービスとやり取りするワークフローの制御まで」機能を作ると明記"
    evidenceUrl: "https://railway.com/careers/full-stack"
  - layer: "ログ基盤"
    name: "ClickHouse"
    confidence: confirmed
    evidence: "公式の採用ページに、過去にこの職種が手がけた仕事の例として「1日10億件のログを扱えるようにログ基盤を作り直す（ClickHouseの設定から新しい画面まで）」と明記"
    evidenceUrl: "https://railway.com/careers/full-stack"
  - layer: "ビルド（コンテナイメージ生成）"
    name: "Railpack (Go / BuildKit)"
    confidence: confirmed
    evidence: "GitHubの公開リポジトリ（MITライセンス・主言語Go）のREADMEに、Nixpacksの後継でソースコードからイメージを作るツールだと明記し、手順もBuildKitを前提にしている。公式ドキュメントも、設定なしでビルドとデプロイに使うと説明"
    evidenceUrl: "https://github.com/railwayapp/railpack"
  - layer: "計算基盤"
    name: "Railway Metal (owned servers in caged colocation)"
    confidence: confirmed
    evidence: "公式ブログ（2025-01-17）に、2024年1月に着手し、データセンター内の専用区画（ケージ）を借りて自社サーバーを置いたと明記。公式ドキュメントのリージョン一覧は米西（カリフォルニア）・米東（バージニア）・欧州（アムステルダム）・東南アジア（シンガポール）の4つ"
    evidenceUrl: "https://blog.railway.com/p/data-center-build-part-one"
  - layer: "予備・バースト用クラウド"
    name: "AWS / Google Cloud"
    confidence: confirmed
    evidence: "公式の障害報告（2026-05）に、自社のRailway MetalとAWSのバースト環境、Google Cloud上の基盤が並存し、Google Cloudをデータプレーンの主経路から外して副系・フェイルオーバー専用にする計画だと明記"
    evidenceUrl: "https://blog.railway.com/p/incident-report-may-19-2026-gcp-account-outage"
  - layer: "エッジ・CDN"
    name: "Hikari (Rust / WebAssembly on wasmtime)"
    confidence: confirmed
    evidence: "公式ブログ（2026-06-04）に、Rustで30日で作った自社CDNで、リクエストごとの処理をwasmtime上のWebAssemblyで動かし、60拠点・180超のノードを持つと明記。当サイトの実観測（2026-09-28）でもrailway.comの応答は server: railway-hikari、x-railway-edge: hnd1 だった"
    evidenceUrl: "https://blog.railway.com/p/railway-cdn"
  - layer: "AIエージェント向け入口"
    name: "Railway MCP Server"
    confidence: confirmed
    evidence: "公式ドキュメントに、MCPでAIアシスタントがプロジェクト作成・テンプレートのデプロイ・環境変数の取得・再デプロイをできると明記"
    evidenceUrl: "https://docs.railway.com/ai/mcp-server"
  - layer: "公開API前段"
    name: "Cloudflare"
    confidence: likely
    evidence: "当サイトの実観測（2026-09-28）で、公開GraphQL APIの backboard.railway.com が server: cloudflare と cf-ray を返し、IPアドレスもCloudflareの網に属する。一方でマーケティングサイトとドキュメントは自社のHikariが返していた。公式の明言は見当たらない"
sources:
  - label: "Railway公式ブログ: Not Everything Is Google’s Fault (Just Most Things)（2023-12-01）"
    url: "https://blog.railway.com/p/gcp-incidents"
    accessedAt: "2026-09-28"
  - label: "Railway公式ブログ: So You Want to Build Your Own Data Center（2025-01-17）"
    url: "https://blog.railway.com/p/data-center-build-part-one"
    accessedAt: "2026-09-28"
  - label: "Railway公式ブログ: シリーズBで1億ドルを調達（2026-01-22）"
    url: "https://blog.railway.com/p/series-b"
    accessedAt: "2026-09-28"
  - label: "SiliconANGLE: Railwayが1億ドルを調達、TQ Ventures主導（2026-01-22）"
    url: "https://siliconangle.com/2026/01/22/intelligent-cloud-infrastructure-startup-railway-gets-100m-simplify-application-deployment/"
    accessedAt: "2026-09-28"
  - label: "Latent Space: Railway: The Agent-Native Cloud — Jake Cooper（2026-05-20）"
    url: "https://www.latent.space/p/railway"
    accessedAt: "2026-09-28"
  - label: "Railway公式ブログ: Incident Report: May 19, 2026 - GCP Account Suspension"
    url: "https://blog.railway.com/p/incident-report-may-19-2026-gcp-account-outage"
    accessedAt: "2026-09-28"
  - label: "Railway公式ブログ: How to build a 30M RPS CDN in 30 days with Rust and WASM（2026-06-04）"
    url: "https://blog.railway.com/p/railway-cdn"
    accessedAt: "2026-09-28"
  - label: "Railway公式: 料金ページ"
    url: "https://railway.com/pricing"
    accessedAt: "2026-09-28"
  - label: "Railway公式ドキュメント: Regions"
    url: "https://docs.railway.com/deployments/regions.md"
    accessedAt: "2026-09-28"
  - label: "Railway公式ドキュメント: Railpack"
    url: "https://docs.railway.com/builds/railpack"
    accessedAt: "2026-09-28"
  - label: "GitHub: railwayapp/railpack（README）"
    url: "https://github.com/railwayapp/railpack"
    accessedAt: "2026-09-28"
  - label: "Railway公式: 採用ページ（Senior Full-Stack Engineer）"
    url: "https://railway.com/careers/full-stack"
    accessedAt: "2026-09-28"
  - label: "Railway公式ドキュメント: MCP Server"
    url: "https://docs.railway.com/ai/mcp-server"
    accessedAt: "2026-09-28"
  - label: "Railway公式ドキュメント: Projects（プロジェクトキャンバス）"
    url: "https://docs.railway.com/projects"
    accessedAt: "2026-09-28"
  - label: "Railway公式ドキュメント: Services（デプロイ元とサービスの種類）"
    url: "https://docs.railway.com/services"
    accessedAt: "2026-09-28"
  - label: "Railway公式ドキュメント: The Basics（プロジェクト内の非公開ネットワーク）"
    url: "https://docs.railway.com/overview/the-basics"
    accessedAt: "2026-09-28"
  - label: "Railway公式ドキュメント: Template Kickbacks"
    url: "https://docs.railway.com/templates/kickbacks"
    accessedAt: "2026-09-28"
  - label: "Railway公式: Affiliate Program"
    url: "https://railway.com/affiliate-program"
    accessedAt: "2026-09-28"
  - label: "Railway公式ブログ: Launching Railway's Affiliate Program（2025-06-24）"
    url: "https://blog.railway.com/p/launching-affiliate-program"
    accessedAt: "2026-09-28"
---

「コードを置けば動く」開発者向けクラウド（PaaS）は、使う側から見れば土台がどこにあるかを意識させない商売だ。Railwayも最初はGoogle Cloudの上に建っていた。変わっているのは、途中でその土台を自分で作り直すと決め、実際にラックを組み、ケーブルを這わせ、CDNまで自作したことだ。

## サービス解説

Railwayは、GitHubのリポジトリ・手元のディレクトリ・Dockerイメージから、Webアプリ・API・メッセージキュー・データベース・定期実行ジョブを立ち上げられる開発者向けクラウドだ。公式ドキュメントによれば、同じプロジェクト内のサービスは自動で非公開ネットワークにつながり、プロジェクトの既定の画面「キャンバス」からサービスと環境を管理する。

:::fact
公式ブログによれば、Railwayは2026年1月22日にシリーズBで1億ドルを調達した。SiliconANGLEによれば、主導はTQ Venturesで、FPV Ventures・Redpoint・Unusual Venturesが参加し、率いるのは創業者兼CEOのJake Cooper。公式ブログは当時の利用者を「200万人、なお増加中」、顧客を「個人商店からFortune 500まで数万社」と書く。2026年5月20日に公開されたLatent Spaceのインタビューで、Cooperは「いまは35人。とても小さい」と述べ、聞き手の「すでに300万人を支えているのか」という問いに「週10万人ずつ増えている」と答えている。
:::

:::fact
2023年12月1日の公式ブログで、RailwayはGoogle Cloudで起きてきた問題を列挙した。ネットワークの不調が続いたためeBPFとIPv6のWireGuardで独自のネットワークを組んだこと、Artifact Registryの割り当てを一方的に絞られて独自のレジストリを作ったこと、そして当日、us-westの複数のマシンが応答しなくなったこと。記事は「Googleは信頼できる計算資源を置く場所ではない」と書き、自前のベアメタルに移り、2024年中に全インスタンスを移すと宣言した。2025年1月17日の続報によれば、計画は2024年1月に始まり、約5か月で最初のサーバーに電源が入り、カリフォルニアの最初の拠点を稼働させたうえで、さらに3地域を立ち上げている最中だった。
:::

:::pull
借り物の土台の上では、値段も障害も他人に握られる。Railwayの賭けは「PaaSの原価を自分で持つ」ことだ。
:::

::scorecard

## UX分析

RailwayのUXは「設定ファイルを書かせない」ことと「全体を1枚の絵で見せる」ことに振り切っている。

- **言語を見て勝手に組み立てる**。公式ドキュメントによれば、ビルドはRailpackが担い、Node・Python・Go・PHP・Java・Ruby・Deno・Rust・Elixirなどを判別して、依存関係のインストールから起動コマンドまで設定なしで用意する。Dockerfileを書けない人でも、書きたくない人でも、リポジトリを渡せば動く。
- **構成図がそのまま操作画面**。公式ドキュメントによれば、プロジェクトの既定の表示はキャンバスで、そこでサービスと環境を管理し、サービスを選べばその設定を開ける。複数のサービスからなるアプリの全体像を、別の図を描かずに把握できる。
- **地域の切り替えが設定1つ**。公式ドキュメントによれば、サービスの地域は米西・米東・欧州・東南アジアの4つから選べ、ドメインや非公開ネットワークに手を入れずにいつでも移せる（ボリュームを付けたサービスは、その移行中だけ止まる）。
- **人間より先にAIエージェントを客として迎える**。公式のMCPサーバーを使えば、AIアシスタントがプロジェクト作成・テンプレートのデプロイ・環境変数の取得・再デプロイ・失敗したデプロイの調査まで行える。シリーズBの発表文も、主語を「あなた、またはあなたのエージェント」と書いている。

一方で、便利さの裏には依存がある。2026年5月の障害では、ダッシュボードとAPIが503を返してログインもできず、利用者は自分のサービスを確かめる画面そのものに入れなくなった。1つの画面に集約するUXは、その画面が落ちたときの逃げ道の少なさと表裏一体だ。

## 技術構成

::techstack

:::fact
公式の採用ページによれば、ダッシュボードの裏側はTypeScriptとGraphQLのAPIで、マイクロサービスをまたぐ処理はTemporalでワークフローとして制御する。同じページは、この職種が過去に手がけた仕事として、「1日10億件のログ」を扱うためにClickHouseでログ基盤を作り直した例を挙げている。Latent SpaceのインタビューでCooperは、社内の言語はTypeScript・Rust・Goに限り、BPF用に少しCを書くと話している。ビルドを担うRailpackはGoで書かれたMITライセンスの公開ソフトで、READMEによれば、Railwayで数年間本番に使ったNixpacksの後継で、手順はBuildKitを前提にしている。
:::

:::fact
2025年1月の公式ブログによれば、Railwayはデータセンター内の専用区画（ケージ）を借り、Google Cloudで使っていたvCPU・メモリ・NVMeの量に合わせてサーバーを調達した。ラックごとに独立した2系統の電源を引き、資材の到着から設置完了までを6〜14日で回す。電力は使っても使わなくても毎月固定で払う契約で、費用の最大の要素だと書く。移行の理由には、エグレス（外向き通信）料金、年に数百万ドル払っても受けられないサポート、機能開発を妨げる制約、原因の見えない障害を挙げている。
:::

:::fact
2026年6月4日の公式ブログによれば、RailwayはRustで30日かけて自社CDN「Hikari」（日本語の「光」）を作った。リクエストごとの処理はWebAssemblyのゲストとしてwasmtime上で動かし、複数の版を同時に走らせて接続を切らずに入れ替えられる。拠点は60、ノードは180超で、各ノードは16コアのEPYC・256GBメモリ・8TBのNVMe・100Gの回線を持ち、毎秒3,000万リクエストのDDoS攻撃を障害なしで吸収したという。デプロイのたびにHTMLのキャッシュを自動で消す点を、HTMLを既定でキャッシュしないCloudflareとの違いとして挙げている。
:::

:::fact
公式の障害報告によれば、2026年5月19日22時10分（UTC）に監視がAPIの異常を検知し、原因はGoogle Cloudが自動処理でRailwayの本番アカウントを誤って停止したことだった。ダッシュボード・API・コントロールプレーン・データベース・Google Cloud上の計算資源が止まった。Railway MetalとAWSのバースト環境の上のワークロードは動いていたが、エッジのプロキシが経路表をGoogle Cloud上のコントロールプレーンAPIから受け取っていたため、キャッシュが切れると全地域で404を返すようになった。完全な解決は翌20日7時58分（UTC）。再発防止として、ネットワークのコントロールプレーンからGoogle Cloudへの強い依存をすぐに外し、データベースのシャードをAWSとMetalにまたがらせるとし、Google Cloudはデータプレーンの主経路から外して副系・フェイルオーバー専用にする計画だと書いている。
:::

:::guess
この障害は「自前化の途中」が最も脆いことを示しているとみられる。計算資源の大半を自社ラックに移しても、経路表を配る中枢が1社のクラウドに残っていれば、その1社のアカウント停止だけで全体が止まる。Railwayが障害の翌月に自社CDNの記事を出し、コントロールプレーンの切り離しを約束したのは、残った依存を順に潰していく計画の一部と読める。当サイトの観測（2026-09-28）では、railway.comとドキュメントは自社のHikari（拠点名 hnd1。羽田の空港コードから東京とみられる）が応答し、公開APIの backboard.railway.com はCloudflareの後ろにあった。どの部分をどこまで自前に寄せるかは、まだ移行の途中にあると推測される。
:::

## ビジネスモデル

Railwayの収益は、月額の最低料金と、実際に使った計算資源の秒単位の従量課金の二本立てだ。

:::fact
料金ページによれば、30日間5ドル分のクレジットが付く無料トライアルのあと、無料プラン（月1ドル分）、Hobby（月5ドルで5ドル分の利用込み）、Pro（月20ドルで20ドル分込み）、個別見積もりのEnterpriseがある。従量単価はvCPUが1秒あたり0.00000772ドル（30日換算でおよそ20ドル）、メモリが1GBあたり1秒0.00000386ドル（同およそ10ドル）、ボリュームが1GBあたり1秒0.00000006ドル（同およそ0.15ドル）、外向き通信が1GBあたり0.05ドル。
:::

:::fact
Latent SpaceのインタビューでCooperは、無料枠が中心だった時期には月50万ドルの赤字に対して売上は月5万ドルほどだったと振り返り、いまは自社のサーバーに移ったことでMetal上の利益率（マージン）が約70%、クラウドで借りた場合と比べた投資回収期間は約3か月だと話している。
:::

:::fact
公式サイトによれば、Railwayのアフィリエイトプログラムは、紹介リンクから登録した人が払う請求額の15%を、登録から12か月間、上限なしで支払う。受け取りは現金（Stripe Connect経由で100〜10,000ドル単位・月次）かRailwayのクレジット（期限なし）を選べ、紹介された側は20ドル分のクレジット（Proプランのおよそ1か月分）を受け取る。公式ブログによれば、この制度は2025年6月24日に始まった。別に、テンプレートの作者には、そのテンプレートから生まれた利用料の15%（利用者サポートに参加すれば計25%）を還元する制度もある。
:::

:::guess
PaaSは本来、クラウドから借りた資源に手数料を乗せて売る商売で、原価の大半は他社の請求書に書かれている。Railwayはその原価を自社ラックに置き換えることで、秒単位で細かく売っても利幅が残る構造を作ろうとしているとみられる。アフィリエイトとテンプレート還元は、どちらも「利用量に比例して払う」形で、紹介者やテンプレート作者を利用拡大の担い手にする仕組みと読める。35人という少人数で週10万人の登録をさばくには、広告より開発者自身の発信とテンプレートに集客を任せるほうが合理的だと推測される。ただし2026年5月の障害で、原価だけでなく信頼性も自分で背負うことになった。どこまでを自前で持ち、どこを他社に残すかの線引きが、今後の評価を左右するとみられる。
:::

「コードを置けば動く」の裏側で、Railwayはラックの電源の2系統化から、CDNの無停止更新、コントロールプレーンの多重化まで、クラウド事業者の仕事を1つずつ引き受けてきた。借り物の土台を降りた35人のPaaSが、その重さに見合う原価と信頼を手にできるか——開発者向けクラウドの次の形を占う試金石になりそうだ。
