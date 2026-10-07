---
service: "Squarespace"
title: "約72億ドルで非上場に戻ったサイトビルダーは、ドメインから売り込む — Google Domainsの数百万件を引き継ぎ、自社のデータセンターをGoogle Cloudへ移し、AI検索での見え方まで売るSquarespaceを解剖する"
description: "2003年に大学の寮で生まれたサイトビルダーのSquarespaceは、2024年10月に投資会社Permiraが総額約72億ドルで買収を終え、ニューヨーク証券取引所の上場を外れた。料金はベーシックからアドバンスまでの月額制で、日本から見た料金ページでは年払いの月額換算が1,180円から3,040円。無料プランはなく、14日間の無料トライアルがある。2024年にGoogle Domainsから数百万件のドメインの移管を終え、2026年のスーパーボウルのCMでもドメインを売り込んだ。料金ページ、ヘルプセンター、公式ニュースルーム、エンジニアリングブログ、Google Cloudの導入事例、Permiraの発表、当サイトの実観測から、PostgreSQLからCockroachDBへの無停止の移行とGoogle Cloudへの移転、Stripeに載せた決済と融資、月ごとのAIクレジットで回すAI検索の可視化ツール、紹介1件に100〜200ドルを払うアフィリエイトまでを解剖する。"
lead: "Squarespaceが2026年のスーパーボウルに流したCMは、俳優のエマ・ストーンが自分の名前のドメインを取れずに苦しむ話だった。サイトを作る前に、まずドメインを押さえろというメッセージだ。2003年に大学の寮で生まれたサイトビルダーは、2024年に非上場に戻り、Google Domainsのドメインを引き継いで、世界有数のドメイン登録事業者を名乗るようになった。決済と融資をStripeに、サーバーをGoogle Cloudに載せ、AI検索で自分の店がどう見えるかまで売りはじめたSquarespaceを、公開情報だけで解剖する。"
category: saas
tags: [website-builder, no-code, e-commerce, small-business, ai, google-cloud, payments, domains]
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastVerified: "2026-10-07"
serviceUrl: "https://www.squarespace.com/"
# Affiliate link placeholder: Squarespace runs an official affiliate program on Impact
# (https://www.squarespace.com/affiliates, checked 2026-10-07: open worldwide where Impact supports
# the affiliate's country, commissions paid in USD; the help center lists payouts of $100–200 per
# new website subscription and $45 per new Acuity Scheduling subscription). Sites are reviewed
# before acceptance. If the owner joins it, paste the tracking link here (Impact links carry no
# impression pixel). Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<squarespace-impact-tracking-link>"
#   program: "Squarespace Affiliate Program (Impact)"
vendor: "Squarespace, Inc."
origin: "US"
heroTheme: "squarespace"
scores: { product: 4.0, ux: 4.0, tech: 4.0, business: 4.0 }
techStack:
  - layer: "クラウド基盤"
    name: "Google Cloud (moving off on-premises data centers; BigQuery / Cloud SQL / GKE)"
    confidence: confirmed
    evidence: "Google Cloudの導入事例ページ（2026-10-07確認）に、Squarespaceが拡張性と機動性に限界のあった自社のデータセンターからGoogle Cloudへ重要なワークロードを移しており、QA・本番前の環境から始めてステージングと本番が続き、まもなくデータセンターを閉じると明記。使う製品としてBigQuery、Cloud Storage、Cloud SQL、Google Kubernetes Engineなどを挙げる"
    evidenceUrl: "https://cloud.google.com/customers/squarespace"
  - layer: "データベース"
    name: "PostgreSQL + CockroachDB"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2025-05-13）に、ACIDが必要な業務の土台にPostgreSQLを使ってきたが水平に拡張できず、分散データベースのCockroachDBへ多数のデータベースを移したと明記"
    evidenceUrl: "https://engineering.squarespace.com/blog/2025/leveraging-change-data-capture-for-database-migrations-at-scale"
  - layer: "変更データキャプチャ"
    name: "Debezium + Apache Kafka + Apache Beam (Google Cloud Dataflow)"
    confidence: confirmed
    evidence: "同じ記事に、PostgreSQLの論理デコーディングとDebezium（Kafka Connect）で変更をAvro形式でKafkaのトピックに流し、テーブルごとのApache BeamのパイプラインでCockroachDBに書き込み、Google CloudのDataflow Runner上でTerraform管理のFlexテンプレートとして動かしたと明記"
    evidenceUrl: "https://engineering.squarespace.com/blog/2025/leveraging-change-data-capture-for-database-migrations-at-scale"
  - layer: "メディア資産の保存"
    name: "Google Cloud Storage + Google Cloud Spanner (write-back cache)"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2024-03-21）に、画像や動画を管理するアセットライブラリのサービスAlexandriaがGoogle Cloud Storageのオブジェクトに資産の記録を保存し、書き込みの遅さを補うためCloud Spannerでライトバックキャッシュを作ったと明記"
    evidenceUrl: "https://engineering.squarespace.com/blog/2024/why-we-built-a-write-back-cache-for-our-asset-library-with-google-cloud-spanner"
  - layer: "ドメイン・DNS"
    name: "Google Cloud DNS + Let's Encrypt (DNSSEC)"
    confidence: confirmed
    evidence: "公式ニュースルーム（2024-11-14）に、Google Domainsから移った顧客を含むすべてのSquarespace Domainsに、Google Cloud DNSなどによるプレミアムDNS、DNSSEC、Let's Encryptの無料SSL/TLS証明書、無料のWHOISプライバシーを付けると明記"
    evidenceUrl: "https://newsroom.squarespace.com/blog/squarespace-domains-updates"
  - layer: "決済・融資"
    name: "Stripe (Squarespace Payments / Capital / Balance)"
    confidence: confirmed
    evidence: "公式ニュースルーム（2025-09-30）の注記に、資金移動サービスでStripe Payments Companyと提携し、Squarespace Capitalの融資とSquarespace Balanceの法人カードはStripeが支え、Celtic Bankが発行すると明記。Squarespace Capitalの発表（2025-08-26）も「Squarespace Capital is powered by Stripe」と書く"
    evidenceUrl: "https://newsroom.squarespace.com/blog/squarespace-refresh-2025-built-to-stand-out-ready-to-scale"
  - layer: "画像・静的ファイルの配信"
    name: "Fastly"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-07）で、static1.squarespace.com と images.squarespace-cdn.com は via: 1.1 varnish と、x-served-by: cache-nrt-… のようなFastlyの形式のヘッダを返した（images.squarespace-cdn.com は via に 1.1 google も含む）。公式ドキュメントでのFastly採用の明言は見当たらない"
  - layer: "自社マーケティングサイト"
    name: "Next.js (www.squarespace.com)"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-07）で、www.squarespace.com/pricing のHTMLに、Next.jsのApp Routerが出力するself.__next_f.pushのRSCペイロードが含まれていた。応答ヘッダは server: Squarespace"
sources:
  - label: "Squarespace: About Us"
    url: "https://www.squarespace.com/about/company"
    accessedAt: "2026-10-07"
  - label: "Squarespace: Pricing（日本からの表示は円建て）"
    url: "https://www.squarespace.com/pricing"
    accessedAt: "2026-10-07"
  - label: "Squarespace Help Center: Selling on the Basic, Core, Plus, and Advanced plans"
    url: "https://support.squarespace.com/hc/en-us/articles/29215717722637-Selling-on-the-Basic-Core-Plus-and-Advanced-plans"
    accessedAt: "2026-10-07"
  - label: "Squarespace Help Center: Use AI credits for Squarespace AI tools"
    url: "https://support.squarespace.com/hc/en-us/articles/46668956855053-Use-AI-credits-for-Squarespace-AI-tools"
    accessedAt: "2026-10-07"
  - label: "Squarespace Help Center: Countries, currencies, and payment methods available on Squarespace Payments"
    url: "https://support.squarespace.com/hc/en-us/articles/33482360045069-Countries-currencies-and-payment-methods-available-on-Squarespace-Payments"
    accessedAt: "2026-10-07"
  - label: "Squarespace Help Center: Connect a payment processor"
    url: "https://support.squarespace.com/hc/en-us/articles/235161188-Connect-a-payment-processor"
    accessedAt: "2026-10-07"
  - label: "Squarespace Help Center: Squarespace Affiliate Program vs. Squarespace Circle referral payments"
    url: "https://support.squarespace.com/hc/en-us/articles/4424080134413-Squarespace-Affiliate-Program-vs-Squarespace-Circle-referral-payments"
    accessedAt: "2026-10-07"
  - label: "Squarespace: Affiliate Program"
    url: "https://www.squarespace.com/affiliates"
    accessedAt: "2026-10-07"
  - label: "Permira: Permira Completes Acquisition of Squarespace（2024-10-17）"
    url: "https://www.permira.com/news-and-insights/announcements/permira-completes-acquisition-of-squarespace"
    accessedAt: "2026-10-07"
  - label: "Google Cloud: Squarespace case study（オンプレミスからGoogle Cloudへ）"
    url: "https://cloud.google.com/customers/squarespace"
    accessedAt: "2026-10-07"
  - label: "Squarespace Engineering Blog: Leveraging Change Data Capture For Database Migrations At Scale（2025-05-13）"
    url: "https://engineering.squarespace.com/blog/2025/leveraging-change-data-capture-for-database-migrations-at-scale"
    accessedAt: "2026-10-07"
  - label: "Squarespace Engineering Blog: Why We Built a Write Back Cache for Our Asset Library with Google Cloud Spanner（2024-03-21）"
    url: "https://engineering.squarespace.com/blog/2024/why-we-built-a-write-back-cache-for-our-asset-library-with-google-cloud-spanner"
    accessedAt: "2026-10-07"
  - label: "Squarespace Engineering Blog: How We Helped Bring HTML Video & Audio Lazy Loading to Today's Browsers（2026-03-30）"
    url: "https://engineering.squarespace.com/blog/2026/squarespace-and-web-standards-how-we-helped-bring-html-video-and-audio-lazy-loading-to-todays-browsers"
    accessedAt: "2026-10-07"
  - label: "Squarespace Newsroom: Squarespace Completes Google Domains Migration（2024-11-14）"
    url: "https://newsroom.squarespace.com/blog/squarespace-domains-updates"
    accessedAt: "2026-10-07"
  - label: "Squarespace Newsroom: Squarespace and Emma Stone Confront the Stakes of Domain Ownership in Super Bowl LX Campaign（2026-02-04）"
    url: "https://newsroom.squarespace.com/blog/squarespace-and-emma-stone-confront-the-stakes-of-domain-ownership-in-super-bowl-lx-campaign"
    accessedAt: "2026-10-07"
  - label: "Squarespace Newsroom: Squarespace Refresh 2025（2025-09-30）"
    url: "https://newsroom.squarespace.com/blog/squarespace-refresh-2025-built-to-stand-out-ready-to-scale"
    accessedAt: "2026-10-07"
  - label: "Squarespace Newsroom: Squarespace Capital Introduces a New Way for Entrepreneurs to Grow（2025-08-26）"
    url: "https://newsroom.squarespace.com/blog/squarespace-capital-for-entrepreneurs"
    accessedAt: "2026-10-07"
  - label: "Squarespace Newsroom: Squarespace and Perplexity Partner to Reimagine Business Creation in the AI Era（2025-10-02）"
    url: "https://newsroom.squarespace.com/blog/squarespace-and-perplexity-partner-to-reimagine-business-creation-in-the-ai-era"
    accessedAt: "2026-10-07"
  - label: "Squarespace Newsroom: AI Visibility Helps Businesses Navigate the Shift to AI-Powered Search（2026-07-07）"
    url: "https://newsroom.squarespace.com/blog/ai-visibility-helps-businesses-navigate-the-shift-to-ai-powered-search"
    accessedAt: "2026-10-07"
---

Squarespaceは、テンプレートを選んでドラッグ&ドロップで直すだけで、ポートフォリオや店のサイトを公開できるサイトビルダーだ。予約、ネットショップ、請求書、メールマーケティングまでを同じ管理画面で扱い、写真家やデザイナー、教室や美容室のような小さな事業者を相手にする。当サイトが解剖した[Wix](/ja/articles/wix)と並ぶ定番の一つだが、Wixが創業半年のBase44を買ってアプリ生成に踏み出したのに対し、Squarespaceはデザインとドメイン、そしてその先のお金の流れを固める方向に進んでいる。

## サービス解説

Squarespaceは、Webサイトの作成と公開、ドメインの登録、ネットショップと決済、予約のAcuity Scheduling、メールやSNSのマーケティングをまとめて売る。サイトのプランを契約した人に、ドメイン、Google Workspaceのメール、決済、融資を順に重ねていく作りだ。

:::fact
公式の会社紹介ページ（2026-10-07時点）によれば、Squarespaceは2003年に創業者Anthony Casalena氏のメリーランド大学の寮の部屋で生まれ、社員は1,760人を超え、ニューヨーク、ダブリン、ポルトガルのアヴェイロに拠点を置く。開設以来、数百万のWebサイトが作られたとする。投資会社Permiraの発表（2024-10-17）によれば、同社のファンドによる買収は総額約72億ドルの全額現金で完了し、Squarespaceはニューヨーク証券取引所の上場を外れた。Casalena氏は持ち株の大半を新しい会社に持ち越して最大級の株主の一人であり続け、CEO兼会長を続ける。AccelとGeneral Atlanticも株主に残った。
:::

:::fact
料金ページ（2026-10-07確認・日本からの表示）によれば、プランはベーシックが月払いで月1,480円・年払いで月額換算1,180円、コアが同2,580円・2,080円、アドバンスが同3,800円・3,040円。ページに埋め込まれた構造化データは、価格は請求先の国ごとに決まり、ほかの国では通貨も金額も違うと説明する。無料プランはなく、すべてのサイトはクレジットカードなしの14日間の無料トライアルから始まり、年払いならドメインが1年間無料になる。ヘルプセンターによれば、現行のプランはベーシック・コア・プラス・アドバンスの4つで、パーソナル・ビジネス・コマースベーシック・コマースアドバンスの旧プランを置き換えた。オンラインストアの取引手数料はベーシックだけ2%で、デジタル商品の取引手数料はベーシック7%・コア5%・プラス1%・アドバンス0%と、上のプランほど下がる。
:::

:::pull
サイトを作る前に、ドメインを取れ。2026年のスーパーボウルで、サイトビルダーが売り込んだのはサイトではなく名前だった。
:::

::scorecard

## UX分析

Squarespaceの体験は、デザインの出来で選ばれ、そのあと商売の道具を足していく順番で組み立てられている。2025年からは、そこにAIの使用量という新しい単位が加わった。

- **デザインから入る**。料金ページは、最新の編集体験として7.1版のサイトで使えるドラッグ&ドロップのエディタFluid Engineを挙げる。公式ニュースルーム（2025-09-30）によれば、年次発表のRefresh 2025では、アニメーションや変形をブロック単位で付けられるFinish Layer、業種に合わせて中身まで埋まったテンプレートを作るBlueprint AIの拡張、ChatGPTのストアから使えるSquarespace GPTを出した。
- **AIは月ごとのクレジットで動く**。料金ページとヘルプセンターによれば、AI機能はAIクレジットを使い、ベーシックは最初の10クレジットだけ、コアは毎月20、アドバンスは毎月120が付く。クレジットはChatGPTやGeminiのような大規模言語モデルにプロンプトを送るのに使われ、足りなければ最大400クレジットのパックを買え、買ったクレジットは1年で失効する。2026年7月に出した「AI Visibility」は、自分の店がAI検索でどう答えられているかを競合と比べて追う道具で、1回の実行が1つのAIモデルへの1つの質問にあたり、英語のアカウントでしか使えない。
- **売るほど手数料が下がる**。ヘルプセンターによれば、自社決済のSquarespace Paymentsの手数料は国内カードでベーシックとコアが2.9%＋0.30ドル、プラスが2.7%＋0.30ドル、アドバンスが2.5%＋0.30ドル。2025年12月には、ストアやカートなしに支払い用のURLを送れるPay Linksを全プランに入れ、2026年7月には数量限定の販売向けに、決済中の商品を時間を区切って押さえるReserved Cartや購入数の上限を加えた。
- **日本からは使えない部分がある**。日本向けの円建ての料金ページはあるが、ヘルプセンターが示すSquarespace Paymentsの対象国はオーストラリア、カナダ、欧州の一部、英国、米国などで、日本は入っていない。日本の事業者が商品を売るには、StripeかPayPalなどの外部の決済サービスをつなぐことになる。AI Visibilityも英語のアカウントに限られる。
- **無料のままでは公開できない**。無料プランがないため、試したあとも公開を続けるには有料プランが要る。最初から料金を払う前提の利用者に絞っている作りで、試しに置いておく使い方には向かない。

## 技術構成

::techstack

:::fact
Google Cloudの導入事例ページ（2026-10-07確認）は、Squarespaceが拡張性と機動性に限界のあった自社のデータセンターから、重要なワークロードをGoogle Cloudへ移していると書く。QA・本番前の環境から始め、ステージングと本番が続く段取りで、分析基盤は先にGoogle Cloudへ移しており、まもなくデータセンターを閉じるという。自動化でデータベースの用意にかかる時間は2日から25分になったとし、使う製品にBigQuery、Cloud Storage、Cloud SQL、Google Kubernetes Engineを挙げる。公式エンジニアリングブログ（2025-05-13）によれば、ACIDが必要な業務の土台にしてきたPostgreSQLは水平に拡張できず、垂直の拡張も限界に達していたため、分散データベースのCockroachDBへ多くのデータベースを移した。移行はPostgreSQLの変更を論理デコーディングとDebeziumでKafkaに流し、テーブルごとのApache BeamのパイプラインでCockroachDBに書き込む方式で、Google CloudのDataflow Runner上で動かし、問題が出ればPostgreSQLへ書き戻す逆向きの経路も用意した。多くのシステムでは切り替えの時点でデータの99.99%超が最新の状態にそろい、目立った書き込みの停止なしに移せたとする。
:::

:::fact
同じブログの2024年3月21日の記事によれば、画像や動画を管理するアセットライブラリのサービスAlexandriaは、資産の記録をGoogle Cloud Storageのオブジェクトに保存し、使われているライブラリだけをメモリに載せる。Cloud Storageは同じオブジェクトへの書き込みが毎秒1回に制限され、書き込みの遅延にもばらつきがあったため、Cloud Spannerで書き込みを先に受けて後から書き出すライトバックキャッシュを作った。2026年3月30日の記事は、Squarespaceのエンジニアが提案した`<video>`と`<audio>`の遅延読み込み（loading="lazy"）がHTML Standardに採用され、FirefoxとWebKitの実装を寄贈し、Chromiumの開発者と協力した実装がGoogle Chromeに入ったと書く。ドメインについては公式ニュースルーム（2024-11-14）が、Google Cloud DNSなどによるプレミアムDNS、DNSSEC、Let's Encryptの無料証明書を全ドメインに付けると説明する。当サイトの実観測（2026-10-07）では、www.squarespace.com は server: Squarespace を返し、料金ページのHTMLにはNext.jsのRSCペイロードが含まれていた。画像と静的ファイルの static1.squarespace.com と images.squarespace-cdn.com は、Varnishと、Fastlyの形式のx-served-byヘッダを返した。
:::

:::guess
Squarespaceの基盤は、自社のデータセンターとPostgreSQLの時代から、Google Cloudのマネージドなサービスと分散データベースへ、止めずに乗り換えている途中とみられる。CDCで新旧のデータベースを並べて走らせ、問題があれば戻せる経路を先に作る移行の進め方は、利用者のサイトを止めないことを最優先にする事業の性格と整合的だ。動画の遅延読み込みをHTMLの標準に入れた取り組みも、数百万のサイトに重い動画を置く会社にとっては、自社のJavaScriptで回避するより、ブラウザに任せたほうが全サイトで速く、保守も軽くなるという判断と推測される。
:::

## ドメインとお金の流れで囲う

:::fact
公式ニュースルーム（2024-11-14）によれば、Squarespaceは前年に買い取ったGoogle Domainsの事業について、数百万件のドメインの移管を終え、ドメイン事業の開始から8年で世界有数のドメイン登録事業者になったとする。扱うトップレベルドメインは360を超え、他のSquarespaceのサービスを使わない利用者にも、独立したドメイン登録の体験を提供するとしている。2026年2月4日の発表によれば、12回目となるスーパーボウルのCM「Unavailable」は、エマ・ストーン氏がemmastone.comを取れずに苦しむ話で、ヨルゴス・ランティモス氏が監督し、2026年2月8日のスーパーボウルLXで流れた。呼びかけは「失う前にドメインを取れ」だった。
:::

:::fact
お金の流れでは、Squarespace Capitalの発表（2025-08-26）が、2023年に自社決済のSquarespace Paymentsを始め、その次の段階として、条件を満たした事業者が数日で資金を受け取れる融資のSquarespace Capitalを出したと書く。融資は米国でCeltic Bank、英国でYouLendが提供し、仕組みはStripeが支える。Refresh 2025の発表は、Squarespaceが運営する金融口座のSquarespace Balance、即日の出金、Pay Linksを並べ、資金移動サービスでStripe Payments Companyと提携していると注記する。2025年10月2日には、PerplexityのAIブラウザCometで、Squarespaceがサイト作成とホスティングの提携先になると発表した。
:::

:::guess
Squarespaceは、ドメインを入口に、サイト、メール、決済、融資へと順に深く入ってもらう形を描いているとみられる。ドメインは年ごとに更新され、サイトやメールの住所そのものなので、一度預けた事業者はほかのサービスへ移りにくい。融資や即日出金をStripeの基盤で作るのは、自前で金融の仕組みを抱えるより早く、店の売上の流れの近くで稼げる道具を増やせるからと推測される。AI検索での見え方を測る道具やPerplexityとの提携は、検索エンジンの時代にサイトビルダーが担ってきた「見つけてもらう」役割を、AIの時代にも手放さないための布石と読める。
:::

## ビジネスモデル

収益の柱は、サイトのプランの月額・年額の料金と、販売に伴う取引手数料と決済手数料、ドメインやGoogle Workspaceのような付加サービスだ。2025年からは、そこにAIクレジットのパックと融資が加わった。

:::fact
料金ページとヘルプセンターによれば、Squarespaceはサイトのプランの料金に加え、ベーシックでのオンラインストアの取引手数料、デジタル商品の取引手数料、Squarespace Paymentsの決済手数料、ドメインの登録料（トップレベルドメインごとに異なる）、AIクレジットのパックで稼ぐ。対象のプランではGoogle Workspaceのアカウント1つが初年度無料になり、2年目から標準料金で更新される。Permiraの買収でニューヨーク証券取引所の上場を外れたため、売上高などの数字は公開の決算資料からは追えなくなった。
:::

:::fact
紹介の仕組みは2つある。公式のアフィリエイトプログラムのページ（2026-10-07確認）によれば、Squarespaceは第三者のアフィリエイトの仕組みImpactで提携先を募り、Impactが対応する国なら世界中から参加でき、報酬は米ドルで払う。ヘルプセンターによれば、初めての顧客が紹介リンクからWebサイトのプランを契約すると1件100〜200ドル、Acuity Schedulingの有料プランなら45ドルが払われ、年間の件数に上限はない。参加には申し込みと審査が要る。これとは別に、制作会社やフリーランス向けのパートナープログラム「Circle」の参加者は、リンクを使わずに、顧客を連れてきた分の紹介料を受け取れる。2025年9月に発表した「Squarespace for Pros」では、Circleの階層、特典、紹介の支払いを1つのダッシュボードにまとめた。
:::

:::guess
紹介1件に100〜200ドルを払えるのは、サイトのプランに加えて、ドメイン、メール、決済の手数料と、1人の顧客から長く稼げる見込みがあるからとみられる。月額1,000〜4,000円ほどのプランだけで見れば高い報酬でも、ドメインの更新と売上の数%を何年も受け取る前提なら割に合う。非上場になって四半期ごとの数字に追われなくなったことは、スーパーボウルのような大きな広告や、融資のような時間のかかる事業に投資しやすくしているとも推測される。
:::

大学の寮で生まれたサイトビルダーは、23年後、数百万件のドメインを抱える登録事業者になり、店の売上の流れの近くで融資まで手がけるようになった。自社のデータセンターからGoogle Cloudへ、PostgreSQLから分散データベースへと、利用者のサイトを止めずに乗り換えながらだ。デザインで選ばれ、ドメインでつなぎ止め、お金の流れで深く入る。AIがサイトを作り、AIが店を探す時代に、その順番を守り切れるかが、非上場のSquarespaceの次の課題になる。
