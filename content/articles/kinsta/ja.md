---
service: "Kinsta"
title: "Google Cloudだけを基盤にしてきたWordPressホスティングが、Oracle Cloudへ引っ越している — 23万社に1サイト1コンテナを貸し、Cloudflareで守り、紹介に生涯10%を払うKinstaを解剖する"
description: "2013年創業のKinstaは、WordPressのサイトを1つずつ独立したコンテナで動かすマネージドホスティングで、128か国の23万社超を顧客に持つ。料金は1サイトの月払い35ドル（年払いは年350ドル）からで、課金の基準を帯域幅か訪問数かで選べ、すべてのサイトの通信をCloudflareに通してWAFとDDoS対策をかける。長く「マネージドWordPressホスティングで最初にGoogle Cloudだけを基盤にした」と書いてきたが、ドキュメントによれば新しい基盤はOracle Cloud Infrastructure（OCI）で、東京と大阪を含む30のデータセンターが並ぶ。2026年2月には、アプリケーションやデータベースのホスティングを別ブランドのSevallaに移してWordPressに集中した。料金ページ、ドキュメント、更新情報、アフィリエイトの規約、経営陣の交代の発表、当サイトの実観測から、1サイト1コンテナの設計、クラウドの乗り換え、AIのボットへの対策、一度きりの報酬と生涯10%の継続報酬を組み合わせたアフィリエイトまでを解剖する。"
lead: "Kinstaのドキュメントのデータセンター一覧には、ap-tokyo-1、ap-osaka-1といった名前が並ぶ。Google Cloudではなく、Oracle Cloudの地域名だ。「マネージドWordPressホスティングで最初にGoogle Cloudだけを基盤にした」と書いてきた会社が、基盤ごと引っ越している。同じ年に、アプリケーションやデータベースのホスティングは別ブランドに切り出し、WordPressに絞った。大手クラウドの上でサイトを預かる商売が、どこで稼ぎ、何を守ろうとしているのかを、公開情報だけで解剖する。"
category: dev-tool
tags: [hosting, wordpress, cloudflare, cdn, paas, security, cloud-migration, oracle-cloud]
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastVerified: "2026-10-07"
serviceUrl: "https://kinsta.com/"
# Affiliate link placeholder: Kinsta runs its own affiliate program on a custom-built dashboard
# (https://kinsta.com/affiliates/ and https://kinsta.com/legal/affiliate-terms/, checked 2026-10-07:
# a one-time bonus of up to $500 plus lifetime monthly commissions of 10% on managed WordPress
# hosting referrals, a 60-day last-touch cookie, payouts via PayPal or account credit from $50).
# The terms forbid placing affiliate links directly on third-party social networks or content
# hosting platforms (video platforms and open-source repositories excepted); a link on this site's
# own pages is the intended use. If the owner joins, paste the tracking link here (no impression
# pixel). Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<kinsta-affiliate-tracking-link>"
#   program: "Kinsta Affiliate Program"
vendor: "Kinsta Inc."
origin: "US"
heroTheme: "kinsta"
scores: { product: 4.0, ux: 4.0, tech: 4.0, business: 3.5 }
techStack:
  - layer: "クラウド基盤（新）"
    name: "Oracle Cloud Infrastructure (30 regions incl. ap-tokyo-1 / ap-osaka-1)"
    confidence: confirmed
    evidence: "公式ドキュメント「Infrastructure Upgrades」（2026-10-07確認）に、新しい基盤はOracle Cloud Infrastructure（OCI）で動き、以前のGoogle Cloudの構成とはデータセンターの場所が違うため地域が変わる場合があると明記。「Data Center Locations」はap-tokyo-1、ap-osaka-1、us-ashburn-1などOCIの地域名で30のデータセンターを並べる"
    evidenceUrl: "https://kinsta.com/docs/service-information/infrastructure-upgrades/"
  - layer: "クラウド基盤（移行前）"
    name: "Google Cloud (C2 / C3D VMs)"
    confidence: confirmed
    evidence: "公式の更新情報「Google's C3D VMs Speed up Websites for Kinsta Customers」（2024-08-15更新）に、KinstaはマネージドWordPressホスティングで最初にGoogle Cloud Platformだけを基盤にした会社で、GCPの最も高性能な仮想マシンの上にサービスを作ってきたと明記"
    evidenceUrl: "https://kinsta.com/changelog/google-c3d-machines/"
  - layer: "サイトの実行環境"
    name: "Linux containers + NGINX + PHP + MySQL (one isolated container per site)"
    confidence: confirmed
    evidence: "公式ドキュメント「WordPress Infrastructure」に、各サイトはLinux、NGINX、PHP、MySQLを含む独立したコンテナで動き、自分の別のサイトとも共有しないこと、基盤のコンテナ技術にLinuxコンテナを使うこと、標準のプランでは本番のコンテナが既定で12 CPU・8GBのメモリを使えることを明記"
    evidenceUrl: "https://kinsta.com/docs/wordpress-hosting/wordpress-getting-started/wordpress-infrastructure/"
  - layer: "CDN・WAF・DDoS対策"
    name: "Cloudflare (Kinsta CDN / Edge Caching / WAF)"
    confidence: confirmed
    evidence: "公式ドキュメント「Kinsta CDN」に、Cloudflareとの無料の連携がKinstaのすべてのサイトを守り、エンタープライズ級のファイアウォールとDDoS対策に加えてCloudflareの網によるHTTP/3対応のCDNを使えると明記。Edge Cachingのドキュメントはサイトのキャッシュを Cloudflare の網から返すと説明する"
    evidenceUrl: "https://kinsta.com/docs/wordpress-hosting/wordpress-cdn/kinsta-cdn/"
  - layer: "PaaS（分離したブランド）"
    name: "Sevalla (application, database and static site hosting)"
    confidence: confirmed
    evidence: "公式の更新情報に、2026年2月2日からアプリケーション、データベース、静的サイトのホスティングとオブジェクトストレージをKinstaのPaaSであるSevallaで管理し、KinstaはWordPressのホスティングに集中すると明記"
    evidenceUrl: "https://kinsta.com/changelog/paas-moving-to-sevalla/"
  - layer: "アフィリエイトの管理画面"
    name: "Next.js + TypeScript + Apollo GraphQL (custom-built affiliate dashboard)"
    confidence: confirmed
    evidence: "公式の更新情報「Introducing the New Affiliate Dashboard」（2026-06-12更新）に、アフィリエイトの仕組みを外部のサービスを使わずに自社で作り、新版ではNext.jsへの移行、厳格なTypeScript、NoSQLからSQLへの移行、Apollo GraphQLを採用したと明記"
    evidenceUrl: "https://kinsta.com/changelog/new-affiliate-dashboard/"
  - layer: "自社サイト"
    name: "WordPress + Cloudflare (kinsta.com itself, hosted on Kinsta)"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-07）で、kinsta.com と kinsta.com/jp/ は server: cloudflare と x-kinsta-cache: HIT を返し、画像は /wp-content/uploads/ 以下に置かれていた。別ブランドの sevalla.com は x-powered-by: sevalla を返した"
sources:
  - label: "Kinsta: About Us"
    url: "https://kinsta.com/about-us/"
    accessedAt: "2026-10-07"
  - label: "Kinsta: Pricing"
    url: "https://kinsta.com/pricing/"
    accessedAt: "2026-10-07"
  - label: "Kinsta: 料金プラン（日本語版）"
    url: "https://kinsta.com/jp/pricing/"
    accessedAt: "2026-10-07"
  - label: "Kinsta: Press（顧客数と2025年の新規サイト数）"
    url: "https://kinsta.com/press/"
    accessedAt: "2026-10-07"
  - label: "Kinsta Docs: WordPress Infrastructure"
    url: "https://kinsta.com/docs/wordpress-hosting/wordpress-getting-started/wordpress-infrastructure/"
    accessedAt: "2026-10-07"
  - label: "Kinsta Docs: Data Center Locations"
    url: "https://kinsta.com/docs/service-information/data-center-locations/"
    accessedAt: "2026-10-07"
  - label: "Kinsta Docs: Infrastructure Upgrades（OCIへの移行）"
    url: "https://kinsta.com/docs/service-information/infrastructure-upgrades/"
    accessedAt: "2026-10-07"
  - label: "Kinsta Changelog: Google's C3D VMs Speed up Websites for Kinsta Customers（2024-08-15更新）"
    url: "https://kinsta.com/changelog/google-c3d-machines/"
    accessedAt: "2026-10-07"
  - label: "Kinsta Docs: Kinsta CDN"
    url: "https://kinsta.com/docs/wordpress-hosting/wordpress-cdn/kinsta-cdn/"
    accessedAt: "2026-10-07"
  - label: "Kinsta Changelog: Kinsta CDN Is Now Powered by Cloudflare（2021-07）"
    url: "https://kinsta.com/changelog/kinsta-cdn-cloudflare/"
    accessedAt: "2026-10-07"
  - label: "Kinsta Docs: Edge Caching"
    url: "https://kinsta.com/docs/wordpress-hosting/caching/edge-caching/"
    accessedAt: "2026-10-07"
  - label: "Kinsta Changelog: Application, database, and static site hosting are moving to Sevalla"
    url: "https://kinsta.com/changelog/paas-moving-to-sevalla/"
    accessedAt: "2026-10-07"
  - label: "Kinsta Changelog: When bots go bad, Kinsta has your back（2026-05-28）"
    url: "https://kinsta.com/changelog/bot-protection/"
    accessedAt: "2026-10-07"
  - label: "Kinsta: Affiliate Program"
    url: "https://kinsta.com/affiliates/"
    accessedAt: "2026-10-07"
  - label: "Kinsta: Affiliate Program Terms"
    url: "https://kinsta.com/legal/affiliate-terms/"
    accessedAt: "2026-10-07"
  - label: "Kinsta Changelog: Introducing the New Affiliate Dashboard（2026-06-12更新）"
    url: "https://kinsta.com/changelog/new-affiliate-dashboard/"
    accessedAt: "2026-10-07"
  - label: "Kinsta: Kinsta Names Jon Penland New CEO and Matt Reid as CMO（2025-09-09）"
    url: "https://kinsta.com/blog/kinsta-names-jon-penland-new-ceo-and-matt-reid-as-cmo/"
    accessedAt: "2026-10-07"
---

Kinstaは、WordPressのサイトを預かり、サーバーの保守、キャッシュ、セキュリティ、移行、バックアップまでを引き受けるマネージドホスティングだ。当サイトが解剖した[エックスサーバー](/ja/articles/xserver)や[ConoHa WING](/ja/articles/conoha-wing)のような共用サーバーとは違い、サイトごとに独立したコンテナを割り当て、高い料金と手厚いサポートで、制作会社や売上をサイトに頼る事業者を相手にする。日本語のサイトと料金ページもある。そのKinstaが2026年、長く看板にしてきたGoogle Cloudから、Oracle Cloudへ基盤を移している。

## サービス解説

KinstaはWordPress専用のホスティングを、1サイトのプランから、複数サイト、制作会社向け、大企業向けまで段階的に売る。すべてのプランに無料のサイト移行、24時間365日の有人サポート、Cloudflareによる防御が付く。

:::fact
会社紹介ページ（2026-10-07時点）によれば、Kinstaは2013年に創業し、チームは世界中に分散している。プレスページは、顧客を128か国の23万社超とし、2025年だけで6万5,000を超える新しいサイトを迎えたと書く。2025年9月9日の発表（ロサンゼルス発）によれば、約9年前にサポートエンジニアとして入社し、COOを務めていたJon Penland氏がCEOに就き、創業者で前CEOのMark Gavalda氏は創業者・会長・取締役として残った。BigCommerceの元上級副社長Matt Reid氏がCMOに就いた。
:::

:::fact
料金ページ（2026-10-07確認・米ドル・税別）によれば、1サイトのプランは月払いで月35ドル、年払いで年350ドルからで、初月は0ドルで始められる。課金の基準を帯域幅か訪問数かで選べ、帯域幅で選ぶ最小構成の「Single 20GB」は、月20GBのサーバー帯域、10GBのストレージ、月125GBのCDN転送量、14日分のバックアップを含む。サイトの追加は1つ月30ドル、ストレージの追加は20GBで月20ドル。制作会社向けのAgencyは月340ドル（年払いなら月284ドル相当）から、大企業向けのEnterpriseは月500ドル（同417ドル）からで、Enterpriseには最大99.99%の稼働率のSLAとSOC 2・ISO 27001などが付く。日本語の料金ページも同じ米ドル建ての価格を示す。
:::

:::pull
1サイトに1つのコンテナ、通信はすべてCloudflareを通す。その土台のクラウドだけが、Google CloudからOracle Cloudへ入れ替わっている。
:::

::scorecard

## UX分析

Kinstaの体験は、「サーバーのことを考えなくていい」を、共用サーバーより1段深く引き受けることにある。高い料金の見返りは、隣のサイトの影響を受けない環境と、守りと移行を任せられる安心だ。

- **1サイトに1つのコンテナ**。公式ドキュメント「WordPress Infrastructure」によれば、各サイトはLinux、NGINX、PHP、MySQLを含む独立したコンテナで動き、自分の別のサイトとも資源を共有しない。標準のプランでは本番のサイトのコンテナが既定で12 CPU・8GBのメモリを使え、ステージング環境は1 CPU・8GBを使える。同じサーバーの別の利用者が重くなっても巻き込まれにくい作りだ。
- **守りはCloudflareに任せる**。同じドキュメントによれば、すべての通信がCloudflareを通り、レイヤー3・4・7のDDoS攻撃を網の端で止め、Kinstaが管理するWAFが常に更新されるルールでサイトを守る。/wp-login.php への総当たり攻撃を見つけると、その相手をKinstaの基盤全体から締め出す。2021年からはCDNもCloudflareの網で動かし、HTTP/3に対応する。
- **AIのボットを選んで止める**。公式の更新情報（2026-05-28）によれば、Kinstaは「Bot protection」のベータ版を全員に開き、悪意のある通信だけを止める段階から、身元を名乗らない自動の通信を止める段階、ボットらしい通信に確認をかける段階、全員に確認をかける非常用の段階までの4段階から選べるようにした。記事は、ThalesのBad Bot Report 2026がボットの通信を前年のWebの通信の53%と算出したことを引き、ボットがサーバーの資源を食い、ホスティング料金の超過につながりうることを理由に挙げる。
- **課金の基準を選べるが、上限はある**。料金ページでは、同じ1サイトのプランでも帯域幅と訪問数のどちらで課金するかを選べる。どちらを選んでもプランごとに上限があり、ボットの記事が超過料金に触れるように、想定外の通信は費用に跳ね返る。上限の考え方を理解して選ぶ手間は、定額の共用サーバーより大きい。
- **弱点は値段と通貨**。1サイトの最小構成でも月35ドルからの米ドル建てで、日本の利用者にとっては為替で円の負担が変わる。当サイトが解剖した国内の共用サーバーのように数百円から始める使い方とは、そもそも想定する客が違う。

## 技術構成

::techstack

:::fact
公式ドキュメント「Data Center Locations」（2026-10-07確認）は、新しいサイトを作るときに選べる30のデータセンターを、ヨハネスブルグ（af-johannesburg-1）、大阪（ap-osaka-1）、東京（ap-tokyo-1）、アッシュバーン（us-ashburn-1）のような地域名で並べる。「Infrastructure Upgrades」は、新しい基盤がOracle Cloud Infrastructure（OCI）で動き、以前のGoogle Cloudの構成とはデータセンターの場所が違うため、サイトを最も近いOCIの地域へ移す場合があると書く。移行は各地域の深夜2〜5時の保守時間に行い、多くのサイトの停止は1分未満で、外部のIPアドレスとSFTP/SSHの接続先が変わるが、DNSの変更は要らない。移行を断ることはできず、サイトの一覧をCSVで書き出すと「Infrastructure」の列で移行済みかどうかがわかる。それ以前については、公式の更新情報（2024-08-15更新）が、KinstaはマネージドWordPressホスティングで最初にGoogle Cloud Platformだけを基盤にした会社で、GCPの最も高性能な仮想マシン（C3D）を採用したと書いている。
:::

:::fact
公式の更新情報によれば、Kinstaは2021年の前半にすべてのサイト向けの無料のCloudflare連携を発表し、同年7月にはCDNをCloudflareの網で動かす形に作り直した。CDNのドキュメントは、Cloudflareの網を300を超える都市、100を超える国に広がるものと紹介し、Edge Cachingのドキュメントはサイトのキャッシュをその網から返すと説明する。料金ページは、サイトの作成、キャッシュの削除、PHPの再起動などをREST APIで操作できるとする。アフィリエイトの管理画面は外部のサービスを使わずに自社で作り、新版ではNext.js、厳格なTypeScript、SQLのデータベース、Apollo GraphQLに移した。当サイトの実観測（2026-10-07）では、kinsta.com は server: cloudflare と x-kinsta-cache: HIT を返し、画像は /wp-content/uploads/ 以下にあり、Kinsta自身のサイトもWordPressで動いているとみられる。当サイトが解剖した[Sansan](/ja/articles/sansan)のコーポレートサイトも、x-kinsta-cache のヘッダを返した。
:::

:::guess
OCIへの移行の理由を、Kinstaのドキュメントは書いていない。1サイトに1つのコンテナを割り当て、標準で12 CPUを使わせる設計では、仮想マシンの単価がそのまま利益率を左右するため、クラウドの費用が大きな理由の一つになったと推測される。30の地域の顧客のサイトを、IPアドレスと接続先を変えるだけで1分未満の停止で移せるのは、各サイトがコンテナに閉じていて、DNSと通信の入口をCloudflareに預けているからとみられる。入口を自社のクラウドから切り離しておいたことが、土台のクラウドを入れ替える自由につながったと読める。
:::

## WordPressに絞る

:::fact
公式の更新情報によれば、Kinstaはここ数年でマネージドWordPressホスティングの外へ広がり、アプリケーション、データベース、静的サイトのホスティングを手がけてきたが、2026年2月2日から、それらとオブジェクトストレージをKinstaのPaaSであるSevallaの管理画面で扱うようにした。既存のアプリケーションやデータは止まらずにそのまま動き、同じ会社、料金、請求のまま、MyKinstaの認証情報でSevallaに入れる。記事は、この変更でKinstaはWordPressのホスティングに集中でき、Sevallaはアプリやデータベースなど新しいワークロードの専用の場として進化を続けると説明する。2026年の更新情報には、WordPressのサイト向けに、ボット対策の分析（7月）、専用サーバー環境の災害復旧の申し込み（9月）、サイトを表と管理画面の両方から一時的に止める機能（10月）が並ぶ。
:::

:::guess
WordPressとそれ以外を別のブランドに分けたのは、制作会社や事業者に「WordPressならKinsta」という分かりやすさを保ちつつ、開発者向けのPaaSでは、[Railway](/ja/articles/railway)や[Fly.io](/ja/articles/fly-io)のような相手と別の名前で戦うためとみられる。同じ会社と請求のまま管理画面だけを分けたことからは、顧客を失わずに、製品の作り方と売り方を切り分ける狙いが読める。
:::

## ビジネスモデル

稼ぎ方は、サイトの数と帯域幅または訪問数で決まる月額・年額の料金と、サイトやストレージの追加料金だ。制作会社と紹介者を、値引きと継続的な報酬で販売網に組み込んでいる。

:::fact
料金ページによれば、Agencyのプランには、条件を満たす制作会社への最大1万ドルのホスティングのクレジット、制作会社の一覧への掲載、Kinstaの名前を出さないWordPressの管理画面などが付く。アフィリエイトのページ（2026-10-07確認）によれば、Kinstaは紹介1件あたり最大500ドルの一度きりの報酬と、紹介した顧客のマネージドWordPressホスティングの料金に対する生涯毎月10%の継続報酬を払い、追跡のクッキーは60日で最後のクリックに成果を付ける。同じページは解約率を2%と書く。規約によれば、報酬は顧客が実際に払った税抜きの料金から計算し、一度きりの料金、超過料金、追加のサブスクリプションは含めない。支払いはPayPalかアカウントのクレジットで、未払いの報酬が50ドル以上になると払われる。アフィリエイトのリンクを第三者のSNSやコンテンツの投稿サービスに直接置くことは禁じられ、動画の配信サービスとオープンソースのリポジトリは例外とされる。
:::

:::guess
生涯10%の継続報酬は、解約が少ないと見込めるから払える仕組みとみられる。一度サイトを移した事業者は、移行の手間とサイトを止める怖さから乗り換えにくく、紹介者にとっても、顧客が残るほど報酬が積み上がる。制作会社にクレジットや無ブランドの管理画面を渡し、紹介者に生涯の報酬を払うのは、広告より、顧客のサイトを実際に作る人の推薦で客を集める形と整合的だ。料金を据え置いたままクラウドを乗り換えるのは、こうした長い付き合いを前提にした利益を守るための判断とも推測される。
:::

2013年に始まったKinstaは、WordPressのサイトを1つずつコンテナに閉じ込め、入口をCloudflareに預け、23万社を超える顧客を集めた。2026年、看板にしてきたGoogle Cloudを離れてOracle Cloudへ移り、アプリやデータベースは別のブランドに切り出した。土台のクラウドを入れ替えても、顧客から見える入口と料金は変えない。サイトを預かる商売の価値が、どのクラウドの上にあるかではなく、止めずに守り続けることにあると示す引っ越しだ。
