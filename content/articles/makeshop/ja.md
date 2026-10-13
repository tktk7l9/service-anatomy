---
service: "makeshop byGMO"
title: "販売手数料0円で流通額3,804億円 — 小さく始めたい人には無料カートを勧めるmakeshopの稼ぎ方と、旧APIからAIエージェントへの作り替え"
description: "GMOインターネットグループのGMOメイクショップが2004年から提供するECサイト構築SaaS「makeshop byGMO」。売上から販売手数料を取らず、月額13,750円の定額で、2025年の年間流通額は3,804億円（前年比110.9%）に達した。公式の料金・決済ページと比較ページ、プレスリリース、GMOインターネットグループの決算説明資料、公式エンジニアブログ、開発者サイト、当サイトの実観測から、カード決済の料率の条件、BtoBと定期購入が押し上げる流通額、PHPの決済サービスを含む長く運用されてきた基盤とGo・GraphQLの「次世代EC」の並走、Smartyを採用した独自タグ、11月に閉塞予定の従来API、MCPサーバーとOSSのエージェントスキルまでを解剖する。"
lead: "makeshopの料金ページは「販売手数料は0円」と書く。売上がいくら伸びても、プレミアムプランの月額は13,750円のままだ。一方で同じサイトの比較ページは、まず小さく試したい人には無料のカートから始め、売上が伸びてから移ってくるよう勧めている。売れてから選ばれるカートは、どこで稼ぎ、どう作り替えられているのか。2026年11月に閉塞予定の従来APIと、AIエージェントに開いたMCPサーバーを手がかりに解剖する。"
category: saas
tags: [e-commerce, b2b, payments, php, go, graphql, aws, mcp]
publishedAt: "2026-10-13"
updatedAt: "2026-10-13"
lastVerified: "2026-10-13"
expires:
  - date: "2026-10-20"
    claim: "食品ECパッケージの無料先行利用期間（2026年8月24日〜10月20日）、10月20日に本格提供を始めるという記述、10月20日提供予定の「表示条件カスタマイズ」"
  - date: "2026-11-02"
    claim: "従来API（REST）の閉塞予定（2026年11月2日15時以降）と、次世代APIへの移行の途中とする記述"
  - date: "2026-12-31"
    claim: "食品ECパッケージの早期申込価格（2026年12月末までの申し込みで月額5,500円・初期費用0円、申し込みから1年間）"
  - date: "2026-12-31"
    claim: "食品ECパッケージの店舗受け取り（「12月 提供予定」）"
  - date: "2027-01-31"
    claim: "食品ECパッケージの温度帯別配送設定（2027年1月提供予定）"
  - date: "2027-02-28"
    claim: "食品ECパッケージの賞味期限管理と頒布会の設定（2027年2月提供予定）"
  - date: "2027-06-30"
    claim: "食品ECパッケージののし・複数配送先指定の自動化（2027年6月予定）"
serviceUrl: "https://www.makeshop.jp/"
# Affiliate link placeholder: no ASP program (A8.net etc.) for makeshop was found on an official page
# (checked 2026-10-13). The official route is GMO MAKESHOP's in-house "makeshop partner program"
# (https://www.makeshop.jp/main/reseller/reseller.html): free to join for individuals and companies;
# its FAQ (https://www.makeshop.jp/main/reseller/qa.html) says it can be used "like an affiliate" with
# the referral URL issued once registration is complete. Rewards: a share of the Premium plan's monthly
# fee at every renewal, by a rank set from the previous fiscal year's paid referrals (Diamond 20+ 50%,
# Platinum 5+ 40%, Gold 3+ 30%, Silver 2+ 20%, Bronze 1+ 10%), plus designated options on their first
# payment. The partner terms (https://www.makeshop.jp/main/company/partner_license.html, revised
# 2026-02-17) define the covered service as the Enterprise and Premium plans (the reseller page names
# Premium only), pay at the end of the month after next, rule out combining it with an "affiliate
# partner" arrangement and require separate ad guidelines. The FAQ asks partners to refrain from listing
# ads on "makeshop"-related keywords; says two active referrals are needed for a payout (the reseller
# page says one), except that the first one counts while a campaign is running; and still describes an
# older scheme (certified partners 35%, special partners 40% from 20 active shops) that conflicts with
# the rank table. Confirm all of this with msp@makeshop.jp before joining. Nothing found forbids opening
# links in a new window, so no sameWindow.
# The owner must register, confirm a referral link on this site is allowed, and paste it here.
# Never invent the label — ask the owner. Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<makeshop-partner-referral-link>"
#   program: "makeshop Partner Program"
vendor: "GMOメイクショップ株式会社"
origin: "JP"
heroTheme: "makeshop"
scores: { product: 4.0, ux: 3.5, tech: 3.5, business: 3.5 }
techStack:
  - layer: "旧来の基盤（決済サービスの一部）"
    name: "PHP + Apache (EC2 → AWS Fargate)"
    confidence: confirmed
    evidence: "公式エンジニアブログ（2025-01-17）に、最近のサービスはコンテナやLambdaで作ることが多い一方、長く運用されているサービスはEC2で動いているものも多く、決済サービスの一部をEC2からFargateへ乗せ替えたと明記。記事は生成AIに作らせたDockerfile（php:8.1-apacheをランタイムに使い、mysqli・pdo_mysqlを入れる）をhttpd.confやphp.iniを読ませて要件に合わせたと説明し、httpd.confとphp.iniの設定変更も載せている"
    evidenceUrl: "https://tech.makeshop.co.jp/entry/2025/01/17/150153"
  - layer: "ショップデザインのテンプレート"
    name: "Smarty (template tags)"
    confidence: confirmed
    evidence: "プレミアムプランのページ（2026-10-13確認）に、デザイン編集機能について「smartyを採用した新たな独自タグをご用意しており」と明記。Smartyの公式サイトは、ページの表題に「PHP Template Engine」と掲げている"
    evidenceUrl: "https://www.makeshop.jp/main/plan/premium.html"
  - layer: "次世代ECのバックエンド"
    name: "Go + GraphQL + gRPC"
    confidence: confirmed
    evidence: "公式エンジニアブログ（2024-01-23）に、次世代ECで採用した技術として、バックエンドに「Golang / GraphQL / gRPC」と明記"
    evidenceUrl: "https://tech.makeshop.co.jp/entry/2024/01/23/153605"
  - layer: "次世代ECの管理画面"
    name: "Vue.js + Vuetify + TypeScript (SPA)"
    confidence: confirmed
    evidence: "公式エンジニアブログ（2024-03-27）に、管理画面をVue2 / Vuetify2からVue3 / Vuetify3へ、調査も含めて約半年かけて移行したと明記。2024-01-23の記事は、次世代ECのフロントエンドを「Vue.js / SPA / Vuetify / TypeScript」と書く"
    evidenceUrl: "https://tech.makeshop.co.jp/entry/half-year-vue3-migration"
  - layer: "新決済画面（Smart Checkout）"
    name: "Go (BFF, echo) + OpenAPI (oapi-codegen)"
    confidence: confirmed
    evidence: "公式エンジニアブログ（2024-05-31）に、決済画面をリニューアルするプロジェクトの第一弾が4月にリリースされ、そのBFFではOpenAPI（3.0）のスキーマ定義からoapi-codegenでコードを生成し、フレームワークにechoを使うと明記。生成されるのはGoのコード"
    evidenceUrl: "https://tech.makeshop.co.jp/entry/2024/05/31/180019"
  - layer: "インフラ・バッチ処理"
    name: "AWS (ECS on Fargate, AWS Batch, Fluent Bit via FireLens)"
    confidence: confirmed
    evidence: "公式エンジニアブログ（2026-01-09）に、makeshopの管理画面のバッチ処理をAWS Batchのマルチコンテナジョブで実装し、Go言語で書いた主ロジック、Fluent Bit（AWS FireLens）のログ転送、管理画面でも稼働している画像変換APIを別々のコンテナに分けたと明記。ジョブ定義の例は platformCapabilities に FARGATE を指定している"
    evidenceUrl: "https://tech.makeshop.co.jp/entry/2026/01/09/152800"
  - layer: "公開API"
    name: "GraphQL + OAuth (next-gen API replacing the legacy REST API)"
    confidence: confirmed
    evidence: "開発者サイトの新旧API移行ガイド（2026-10-13確認）に、従来APIはREST・固定的なキーによる認証、次世代APIはGraphQL・トークンベースの認証（OAuth2.0）で、従来APIは2026年11月2日15時以降に閉塞する予定と明記。開発者サイトのよくある質問は、情報取得の次世代APIにGraphQLを採用したと書く"
    evidenceUrl: "https://developers.makeshop.jp/news/notice/api_migration_guide/index.html"
  - layer: "AIエージェント連携"
    name: "MCP server (MCP Server for Backoffice) + Agent Skills (MIT License)"
    confidence: confirmed
    evidence: "GMOメイクショップのお知らせ（2026-05-11）に、AIエージェントと自社ECデータを連携できる「MCP Server for Backoffice」をmakeshop appsで公開し、提供開始時点では注文・会員・商品の検索に対応すると明記。2026-08-25のプレスリリースは、公式エージェントスキル4種類をMITライセンスのOSSとしてGitHubで公開したと書く"
    evidenceUrl: "https://www.makeshop.co.jp/news/info/2026-05-11/"
  - layer: "サービスサイト・ストアフロントの配信"
    name: "Amazon CloudFront + Application Load Balancer + Apache"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-13）で、サービスサイト www.makeshop.jp の応答は server: Apache と content-type: text/html; charset=EUC-JP を返し、via（CloudFront）、x-amz-cf-pop（NRT）、AWSALB・AWSALBCORSのCookieが付いていた。テンプレートのサンプルショップ tplbaycross.makeshop.jp とアプリストア apps.makeshop.jp も、server: Apache、CloudFront、AWSALBのCookieの組み合わせを返した（この2つはUTF-8）"
  - layer: "管理画面・開発者サイトの配信"
    name: "Amazon CloudFront + Amazon S3"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-13）で、開発者サイト developers.makeshop.jp は server: AmazonS3、x-amz-server-side-encryption: AES256、via（CloudFront）を返した。管理画面のログインURL console.makeshop.jp/login へのHEADリクエストも server: AmazonS3 と via（CloudFront）を返した（ステータスは403）。公式エンジニアブログ（2024-01-23）は次世代ECのフロントエンドをSPAとしている"
sources:
  - label: "makeshop公式: トップページ"
    url: "https://www.makeshop.jp/"
    accessedAt: "2026-10-13"
  - label: "makeshop公式: 料金プラン（プラン別料金・長期契約割引・よくある質問）"
    url: "https://www.makeshop.jp/main/plan/"
    accessedAt: "2026-10-13"
  - label: "makeshop公式: プレミアムプラン"
    url: "https://www.makeshop.jp/main/plan/premium.html"
    accessedAt: "2026-10-13"
  - label: "makeshop公式: エンタープライズプラン"
    url: "https://www.makeshop.jp/main/plan/enterprise.html"
    accessedAt: "2026-10-13"
  - label: "makeshop公式: 他社サービスとの比較"
    url: "https://www.makeshop.jp/main/comparison/"
    accessedAt: "2026-10-13"
  - label: "makeshop公式: makeshopペイメント"
    url: "https://www.makeshop.jp/main/function/makeshop_payment/"
    accessedAt: "2026-10-13"
  - label: "makeshop公式: 豊富な決済方法"
    url: "https://www.makeshop.jp/main/function/multi_payment.html"
    accessedAt: "2026-10-13"
  - label: "makeshop公式: AI機能（makeshop byGMO MCP・エージェントスキル）"
    url: "https://www.makeshop.jp/main/function/ai/"
    accessedAt: "2026-10-13"
  - label: "makeshop apps: makeshop byGMO MCP（アプリの詳細ページ）"
    url: "https://apps.makeshop.jp/view/item/000000000199"
    accessedAt: "2026-10-13"
  - label: "makeshop公式: 食品ECパッケージ"
    url: "https://www.makeshop.jp/main/food/"
    accessedAt: "2026-10-13"
  - label: "makeshop公式: パートナー制度"
    url: "https://www.makeshop.jp/main/reseller/reseller.html"
    accessedAt: "2026-10-13"
  - label: "makeshop公式: メイクショップ販売パートナー規約（2026-02-17最終改定）"
    url: "https://www.makeshop.jp/main/company/partner_license.html"
    accessedAt: "2026-10-13"
  - label: "makeshop公式: robots.txt"
    url: "https://www.makeshop.jp/robots.txt"
    accessedAt: "2026-10-13"
  - label: "makeshop apps developers: トップページ（次世代API・アプリの提供形態）"
    url: "https://developers.makeshop.jp/"
    accessedAt: "2026-10-13"
  - label: "makeshop apps developers: 新旧API移行ガイド"
    url: "https://developers.makeshop.jp/news/notice/api_migration_guide/index.html"
    accessedAt: "2026-10-13"
  - label: "GMOメイクショップ株式会社: 会社概要"
    url: "https://www.makeshop.co.jp/company/outline/"
    accessedAt: "2026-10-13"
  - label: "GMOメイクショップ株式会社: 沿革"
    url: "https://www.makeshop.co.jp/company/history/"
    accessedAt: "2026-10-13"
  - label: "GMOメイクショップ株式会社: 「makeshop byGMO」、国内のEC構築SaaS業界で、14年連続の年間流通額No.1を達成（2026-04-22）"
    url: "https://www.makeshop.co.jp/news/press/2026-04-22/"
    accessedAt: "2026-10-13"
  - label: "GMOメイクショップ株式会社: 「makeshop byGMO」、AIエージェント連携を可能にする「MCP Server for Backoffice」をリリース（2026-05-11）"
    url: "https://www.makeshop.co.jp/news/info/2026-05-11/"
    accessedAt: "2026-10-13"
  - label: "GMOメイクショップ株式会社: AIエージェント経由の購買を見据えた「Universal Commerce Protocol（UCP）」への対応について（2026-08-06）"
    url: "https://www.makeshop.co.jp/news/info/2026-08-06/"
    accessedAt: "2026-10-13"
  - label: "GMOメイクショップ株式会社: ショップ運営向け公式エージェントスキルをOSS公開（2026-08-25）"
    url: "https://www.makeshop.co.jp/news/press/2026-08-25/"
    accessedAt: "2026-10-13"
  - label: "GMOメイクショップ株式会社: 「makeshop byGMO」、食品事業者向け「食品ECパッケージ」を提供（2026-09-08）"
    url: "https://www.makeshop.co.jp/news/press/2026-09-08/"
    accessedAt: "2026-10-13"
  - label: "GitHub: gmomakeshop/agent-skills"
    url: "https://github.com/gmomakeshop/agent-skills"
    accessedAt: "2026-10-13"
  - label: "GMOインターネットグループ株式会社: 2026年12月期 第2四半期 決算説明資料（2026-08-14）"
    url: "https://ir.group.gmo/pdf/presen/GMO_FY26_Q2_Financial_Results_Presentation_260814.pdf"
    accessedAt: "2026-10-13"
  - label: "GMO MAKESHOP engineer blog: 次世代EC開発の始まりと進め方（2024-01-23）"
    url: "https://tech.makeshop.co.jp/entry/2024/01/23/153605"
    accessedAt: "2026-10-13"
  - label: "GMO MAKESHOP engineer blog: 次世代EC管理画面をVue3/Vuetify3へ移行しました（2024-03-27）"
    url: "https://tech.makeshop.co.jp/entry/half-year-vue3-migration"
    accessedAt: "2026-10-13"
  - label: "GMO MAKESHOP engineer blog: makeshopの新決済画面 SmartCheckoutでのOpenAPI(3.0)活用事例（2024-05-31）"
    url: "https://tech.makeshop.co.jp/entry/2024/05/31/180019"
    accessedAt: "2026-10-13"
  - label: "GMO MAKESHOP engineer blog: EC2からFargateへのサービス移行（2025-01-17）"
    url: "https://tech.makeshop.co.jp/entry/2025/01/17/150153"
    accessedAt: "2026-10-13"
  - label: "GMO MAKESHOP engineer blog: AWS Batch × サイドカーパターン：マルチコンテナジョブで既存資産を有効活用し責務を分離する（2026-01-09）"
    url: "https://tech.makeshop.co.jp/entry/2026/01/09/152800"
    accessedAt: "2026-10-13"
  - label: "GMO MAKESHOP engineer blog: レガシーECの決済DBを、AIエージェントに“実データ照合”で監査させる（2026-06-26）"
    url: "https://tech.makeshop.co.jp/entry/2026/06/26/145915"
    accessedAt: "2026-10-13"
  - label: "Smarty公式サイト（PHP Template Engine）"
    url: "https://www.smarty.net/"
    accessedAt: "2026-10-13"
---

makeshopは、日本のECサイト構築サービスの中でも古参にあたる。2004年11月に月額500円のプランで本格的に始まり、2012年に982億円だった年間流通額は、2025年に3,804億円まで増えた。沿革には2005年に月額無料プランを含むラインナップを始めたとあるが、2026年10月の料金ページに並ぶのは、どれも月額制のプランだ。売上から販売手数料を取らないこのカートは、どこで稼ぎ、どう作り替えられているのか。

## サービス解説

makeshop byGMOは、GMOインターネットグループのGMOメイクショップが提供するECサイト構築SaaSだ。デザインテンプレートを選んで商品を登録すれば、カート・決済・受注管理を備えた自社のECサイトを開ける。トップページは「BtoCも、BtoBも。ECは分けなくていい。」と掲げ、消費者向け（BtoC）と取引先向け（BtoB）を1つのプラットフォームで扱えることを前に出す。別の欄では、従業員向けの社内販売（BtoE）も含めて「どんなビジネスモデルでも構築可能」とする。カスタマイズを伴う大規模なサイトには、上位版の「GMOクラウドEC」もある。

:::fact
会社概要（2026-10-13確認）によれば、GMOメイクショップ株式会社（英文社名 GMO MAKESHOP Co., Ltd.）の設立は2004年9月22日、資本金は5,000万円、本社は東京都渋谷区のセルリアンタワーで、代表取締役社長CEOは向畑憲良氏。派遣・業務委託を除く直接雇用の人数（パートナー数）は199名（2026年1月31日時点）。沿革によれば、2004年11月1日に月額500円プランで「MakeShop」を本格的に始め、2005年5月10日にGMOインターネットグループ株式会社と資本提携してGMOインターネットグループに加わり、2008年8月1日に現在の社名になった。2013年4月2日の項は、2012年の年間総流通額を982億円と記す。2023年3月30日にロゴを刷新して名称表記をmakeshopに変え、同年8月31日にアプリのプラットフォームを公開した。2025年12月1日にGMOメイクアプリ株式会社を吸収合併し、2026年1月1日にGMOグローバルEC株式会社（元ジェイグラブ株式会社）をグループに加えている。
:::

:::fact
料金ページ、各プランのページ、makeshopペイメントのページ（いずれも2026-10-13時点。金額は税込で、カード決済とPayPayの手数料には課税対象分に別途消費税がかかる）によれば、基本のプランはプレミアムとエンタープライズの2つで、食品事業者向けの「食品ECパッケージ」も並ぶ。プレミアムプランは月額13,750円・初期費用11,000円で、商品登録数は10,000。販売手数料は0円だが、料金ページの注記は、アイテムポストを経由して外部サイトで売れた場合を除くとし、Yahoo!ショッピング連携には販売手数料がかかるとしている。15日間の無料体験があり、体験中はクレジットカード情報の入力が要らない。長期契約割引は6か月で5%、12か月で10%、24か月で15%を月額から引き（24か月なら月11,688円）、料金は一括払いで、支払い後の返金はない。エンタープライズプランは月額55,000円から・初期費用11,000円からで、SaaSのプレミアムプランに個別のカスタマイズを加えられる「ハイブリッド型」とされ、商品登録数は50,000。BtoBオプションや定期購入など、プレミアムでは有料のオプションの一部が無料になり、納品までは最短2週間・平均約3か月。カード決済の「makeshopペイメント」は、プレミアムでは月額1,650円がかかり、手数料は決済金額が50万円以上なら3.19%、未満なら3.39%（条件の書き方はページによって違う。UX分析で触れる）。エンタープライズは月額0円で3.14%だ。Amazon Payは3.9%、PayPayは3.45%で、makeshopペイメントではどちらも日本国内の法人であることが条件だ。PayPayは個人事業主でもGMOイプシロン経由で個別に契約でき、その場合は2,200円（税抜2,000円）がかかる。Paidyは3.5%、atone翌月後払いはスタンダードプランを使う場合で3.5%。カード決済の入金は月末締め・翌月末で、最短即日に受け取れる「即日売上入金」は手数料1.5%。
:::

:::pull
販売手数料は0円で、月額は13,750円。そのカートの上を、2025年は3,804億円が流れた。
:::

::scorecard

## UX分析

makeshopの体験は、はじめてネットショップを作る人よりも、すでに売れている事業者を迎え入れる側に寄せて設計されている。比較ページ自身が、向いている人と向いていない人を書き分けている。

- **小さく始めたい人には他社を勧める**。比較ページは主要なカートとして[Shopify](/ja/articles/shopify)、futureshop、[カラーミーショップ](/ja/articles/colorme-shop)、[BASE](/ja/articles/base)、[STORES](/ja/articles/stores)を並べ、よくある質問で導入のデメリットを問われて「月額費用が定額のため、立ち上げ直後の小規模ショップでは固定費として負担に感じられる場合があります」と答える。目安として月商100万円以上を目指す人や商品点数が多い人に勧め、個人でまず小さく試したい人には、無料ASP（BASE / STORESなど）から始めて、売上が伸びたタイミングでmakeshopへ移るよう勧めている。
- **最安の料率には条件がある**。トップページと決済ページは、カード決済手数料を3.14%からとし、業界最安水準とうたう。3.14%はエンタープライズプランの料率で、プレミアムプランはmakeshopペイメントの月額1,650円を払ったうえで3.19%からになる。3.19%になる条件を、料金ページの注記は「決済金額が以下カード区分でそれぞれ月50万円以上の場合」とし、区分としてVISA/MastercardとJCB/American Express/Dinersの2つを挙げる。プレミアムプランのページの注記は区分を分けず、「VISA/Mastercard/JCB/American Express/Dinersの決済金額が50万円以上の場合で、未満の場合は3.39%となります」と書く。料金ページのよくある質問は、プレミアムプランのカード決済手数料を「3.14%?」と書いている（「?」も原文のまま）。決済ページは「価格はすべて税込価格です」としながら、カード決済とPayPayの手数料は課税対象分に別途消費税が加わると注記する。比較ページの月商別シミュレーションは、カード売上を月商の60%、そのうちVISA・MASTERを70%とする前提を示している。当サイトの計算では、makeshopの4つの行（月商50万・100万・500万・1,000万円）はどれも、月額12,500円、カード決済の月額1,500円、その他運用費1,200円（いずれも税抜で、同ページの費用比較表の値）にカード売上の3.19%を足し、合計に10%の消費税を乗せた値と一致する。月商50万円の行（税込27,247円）はカード売上が30万円で、どちらの注記でも50万円に届かない。3.39%なら税込27,907円となり、月660円高くなる（当サイトの計算）。月商100万円の行（税込37,774円）はカード売上が60万円で、プレミアムプランのページの注記なら3.19%の条件を満たすが、料金ページの区分ごとの注記では、VISA/Mastercardの区分が42万円、もう1つの区分は多くても18万円で、どちらも50万円に届かない。3.39%なら税込39,094円となり、月1,320円高くなる（当サイトの計算）。目安の表として、最も条件のよい料率を使ったとも読める。
- **乗り換えてくる人のための入口**。料金ページのよくある質問は、他のサービスからの移行を「一概にかんたんとはいえません」と書き、有料の「らくらく引越しサービス」を案内する。無料体験は業種ごとのテンプレートを設定済みの状態から始められ（1クリックショップ構築）、比較ページは、細かなデザインのカスタマイズにはHTML・CSSなどの知識が要るとしつつ、ノーコードのデザイン機能も無料で使えると書く。エンタープライズプランのよくある質問は、商品・会員・受注・出荷・デザインなどのデータ移行に対応する一方、管理画面のカスタマイズはできないと答えている。
- **AIは管理画面の外から入ってくる**。2026年5月11日に公開された「MCP Server for Backoffice」（アプリストアでの名称は「makeshop byGMO MCP」）は、AIエージェントからショップの注文・会員・商品のデータにつながるMCPサーバーだ。提供開始時は検索だけだったが、AI機能のページ（2026-10-13確認）では、商品名・価格・画像・説明文・SEO設定の更新とU-KOMIのレビュー検索まで対応し、Claude、Codex、GMO天秤AI Bizで動作を確認したとしている。アプリは無料で（接続先のAIサービスの利用料は別）、商品更新などの書き込み系ツールはショップ側で許可かブロックかを選べ、個人を特定できる項目はマスクして送るという。2026年8月6日のお知らせは、GoogleとEC業界の各社が共同開発を進める「Universal Commerce Protocol（UCP）」への対応を検討中とし、商品・在庫・価格のリアルタイム連携は対応可能、GMOペイメントゲートウェイとの決済連携は対応予定、AIエージェント経由の注文生成は対応検討中と整理している。
- **ノウハウを指示書として配る**。2026年8月5日、GMOメイクショップはショップ分析、商品分析・改善、クリエイターモードデザイン、ショップ開店の4つの公式エージェントスキルを、GitHubでMITライセンスのOSSとして公開した。プレスリリースは、国内の主要ECサイト構築SaaSとして初めて（2026年7月時点、同社調べ）としている。READMEはGitHub CLIの `gh skill install` でのインストールを案内し、Pull Requestは受け付けていないと書く。CONTRIBUTING.mdは、不具合の報告や機能に関する意見をIssueで受け付けるとしている。クリエイターモードデザインのスキルは、チャットでの指示から、クリエイターモードにそのまま取り込める.cdarファイルを生成する。
- **食品向けパッケージは、機能が後から届く**。2026年9月8日のプレスリリースによれば、食品事業者向けの「食品ECパッケージ」は8月24日から10月20日まで無料で先行利用でき、10月20日に本格提供を始める。2026年12月末までの申し込みには、初期費用0円・月額5,500円（税込）の早期申込価格を申し込みから1年間適用し、2027年1月1日以降の申し込みと適用期間の終了後は通常価格（初期費用11,000円・月額13,750円）になる。パッケージのページ（2026-10-13確認）では、自然言語の指示をAIが解釈して決済画面の表示条件の設定を補助する「表示条件カスタマイズ」が10月提供開始、店舗受け取りが「12月 提供予定」、温度帯別配送設定が2027年1月、賞味期限管理と頒布会の年間スケジュール設定が2027年2月、のし・複数配送先指定の自動化が2027年6月の予定とされている。

## 技術構成

::techstack

:::fact
公式エンジニアブログ（2024-01-23）によれば、GMOメイクショップのコアグループは「次世代EC」を開発している。目的は開発スピードを上げてショップに機能を早く届けることで、積み重なる開発による機能開発と保守運用の難しさ、メンバーの成長機会の不足、新しい人材の獲得の難しさを課題に挙げ、フロントエンドにVue.js / SPA / Vuetify / TypeScript、バックエンドにGolang / GraphQL / gRPCを採用した。2024-03-27の記事は、管理画面をVue2 / Vuetify2からVue3 / Vuetify3へ、調査も含めて約半年かけて移行したと書く。新しい決済画面「Smart Checkout」は2024年4月に第一弾がリリースされ、そのBFFはOpenAPI（3.0）のスキーマからoapi-codegenでGoのコードを生成し、echoで動かす構成だ（2024-05-31）。2026-01-09の記事によれば、管理画面のバッチ処理をAWS Batchのマルチコンテナジョブで実装し、Goの主ロジック、Fluent Bit（AWS FireLens）のログ転送、管理画面でも使う画像変換APIをコンテナごとに分けた。2026年4月22日のプレスリリースによれば、Smart Checkoutは2025年12月時点で90%以上のショップが導入している。
:::

:::fact
2025-01-17の記事によれば、最近立ち上げたサービスはコンテナやLambdaで作ることが多い一方、長く運用されているサービスはEC2で動いているものも多く、決済サービスの一部をEC2からFargateへ乗せ替えた。記事はphp:8.1-apacheを使うDockerfileと、httpd.confとphp.iniの設定変更を載せ、EC2の決済サーバーに設定されていた100個のターゲットグループは、ECSでは5個までしか設定できないため、NLBを1つ挟んで回避したと書く。2026-06-26の記事は、旧システムから新システムへ決済処理を移す途中で、決済方式ごとにデータベースへの書き込み内容が微妙に違うことに当たり、Claude CodeのスキルとMCPで開発用DBにSELECT限定でつなぎ、18種類前後の決済方式で新旧を実データで突き合わせたと書く。公開APIは、開発者サイトの移行ガイドによれば、固定的なキーで認証するRESTの従来APIから、単一のエンドポイントでGraphQLを使い、OAuth 2.0のトークンで認証する次世代APIへ移っており、従来APIは2026年11月2日15時以降に閉塞する予定だ。プレミアムプランのページは、デザイン編集に「smartyを採用した新たな独自タグ」を用意していると書く。当サイトの実観測（2026-10-13）では、サービスサイト www.makeshop.jp はserver: Apacheとcharset=EUC-JPの応答をCloudFront経由で返し、開発者サイトと、管理画面のログインURL（console.makeshop.jp/login）へのHEADリクエストはserver: AmazonS3を返した（後者のステータスは403）。サービスサイトのrobots.txtは、GPTBot、ClaudeBot、Google-Extended、CCBotなどにサイト全体をDisallowにしている。
:::

:::guess
makeshopはいま、2つの世代を並べて走らせているとみられる。プレミアムプランのページが挙げるSmartyは、公式サイトが「PHP Template Engine」を表題に掲げるテンプレートエンジンで、決済サービスの一部もPHPとApacheのコンテナでFargateへ移されたことから、ストアフロントを含む旧来の基盤はPHPで書かれていると推測される。その周りで、管理画面、決済画面、バッチ、公開APIを、GoやGraphQLを使う新しい構成へ1つずつ移してきたとみられる。従来APIの閉塞、決済処理の新旧照合、MCPサーバーの公開は、外部との接点を次世代側へ寄せる同じ流れの上にあると読める。AIエージェントにショップのデータを書き換えさせるには、固定的なキーよりも、トークンでショップごとに権限を絞れる認証が前提になると考えられ、MCPサーバーも次世代APIの上に作られているとみられる。robots.txtで学習用とみられるクローラーを断りつつ、店主が使うAIエージェントには管理画面の入口を開ける線引きも、データを渡す相手を選ぶ設計として一貫しているように見える。
:::

## 流通額3,804億円の内訳

:::fact
2026年4月22日のプレスリリースによれば、makeshopの2025年の年間流通額は3,804億円（前年比110.9%）で過去最高となり、同社は国内のEC構築SaaS業界で14年連続の年間流通額No.1としている（各社の発表数値からSaaS型の数値を比べた自社調べ、2026年4月時点）。比較ページは流通額を受注金額と定義している。リリースは伸びの要因に、ID決済の拡大と決済画面の改善、BtoBと越境ECの成長を挙げ、2025年12月時点の自社ECの平均購買単価は17,078円（2021年1月比136.6%）で、株式会社NintによるECモール平均3,527円の4倍以上だとする。料金ページは利用ショップを「12,000社を超える」と書き、食品ECパッケージのページは「法人導入実績12,000社以上」の注記で、導入実績はプレミアムプラン以上を利用中の店舗数（無料体験中を除く）だと説明している。主な数字は次のとおり（いずれも同じプレスリリースから）。
:::

| 指標（2025年） | 数値 | 前年比など |
| --- | --- | --- |
| 年間流通額 | 3,804億円 | 110.9% |
| BtoB機能を使うショップの流通額（導入2,000件以上） | 1,270億円 | 117% |
| Smart Checkoutの流通額への貢献（導入ショップのCVR平均65.2%） | 1,273億円 | 記載なし |
| 定期購入の流通額 | 記載なし | 133.6% |
| 海外販売の流通額（導入2,000件） | 記載なし | 120.8% |
| Amazon Payの利用流通額（ID決済の中のシェア18%） | 記載なし | 127% |
| ID決済のシェア（2025年12月） | 24% | 2021年は14%台 |

:::guess
当サイトの計算では、BtoB機能を使うショップの流通額は年間流通額の約33%、Smart Checkoutの貢献額も約33%にあたる。前年比から逆算すると、年間流通額の前年からの増加分は約374億円で、そのうち約185億円がBtoB機能を使うショップの増加分にあたる（当サイトの計算）。年間流通額を「12,000社を超える」の12,000で割ると、1店舗あたり年約3,170万円（月約264万円）になる。店舗数が12,000を上回るぶん、実際はこれより小さい上限の目安だ。プレミアムプランのページが掲げる平均年商2,597万円（2020年にプレミアムプラン以上を1年間使った店舗）とも同じ桁にある。仮に売上の3%を取る料金体系なら、年約3,170万円の店舗で年約95万円（平均年商2,597万円の店舗なら年約78万円）になるのに対し、プレミアムプランの月額は年16万5,000円で済む（当サイトの計算）。販売手数料0円が効くのは、こうした売上規模の店舗だとみられ、比較ページが小さく始める人を無料のカートへ送り出すのも、この計算の裏返しと読める。BtoBと定期購入が伸びを押し上げていることは、トップページの「ECは分けなくていい」というメッセージや、食品向けパッケージの打ち出しと整合するように見える。
:::

## ビジネスモデル

収益の柱は、ショップから受け取る月額利用料だ。売上に比例する販売手数料は、料金ページの注記にある例外（アイテムポスト経由の外部サイトでの販売と、Yahoo!ショッピング連携）を除いて取らない。その上に、オプション、制作や運営の代行、アプリストアのプラットフォーム利用料が重なる。カード決済にmakeshopペイメントを使うショップは、その月額と決済手数料も払うが、利用にはGMOイプシロンとの契約が要る。

:::fact
GMOインターネットグループの2026年12月期第2四半期決算説明資料（2026-08-14）は、「グループ内シナジー事例」として、ネットショップ作成の[カラーミーショップ](/ja/articles/colorme-shop)とmakeshopを「ストック型」（収益は単価×店舗数、計上セグメントはEC支援）、決済のGMOイプシロンとGMOペイメントゲートウェイを「トランザクション型」（GMV×手数料率など、計上セグメントは決済）と並べ、「グループ内商材のクロスセルにより、ストック&トランザクションで収益化が促進」と書く。makeshopの決済方法のページは、makeshopペイメントの利用にはGMOイプシロン株式会社との契約が必要だと注記している。同じ資料のEC支援事業（ネットショップ支援事業KPI）のグラフの数値ラベルでは、ネットショップ店舗数が2021年4〜6月期の63.9千件から2026年4〜6月期の42.8千件へ減っており、資料は「減少傾向つづくも高価格帯プランへの転換が加速」と添える。サービス別の内訳は載っていない。EC支援事業の流通額（ネットショップ支援、minne、SUZURI・Canvathの合計）は、グラフの数値ラベルで2026年4〜6月期に1,447億円で、資料は前年同期比3.6%増としている。
:::

:::fact
集客の側では、公式のパートナー制度が月額利用料の一部を払い続ける。パートナー制度のページ（2026-10-13確認）によれば、登録と月額は無料で、個人も法人も登録できる。取次報酬はプレミアムプランが対象で契約更新のたびに支払われ、料率は前年度の有料化取次件数で決まるランクに応じて、ダイヤモンド（20件以上）50%、プラチナ（5件以上）40%、ゴールド（3件以上）30%、シルバー（2件以上）20%、ブロンズ（1件以上）10%。BtoBオプション（440,000円）などのオプションも、初回支払い分が報酬の対象になる。パートナー規約（2026年2月17日最終改定）は、取次手数料の対象を入金が確認された月額利用料とし、月末締めの翌々月末までに支払うと定める。開発者サイトによれば、makeshop appsで一般公開するアプリは決済金額の10%（税抜）、限定公開のアプリは1インストールあたり月額1,000円（税抜）を、プラットフォーム利用料として払う。
:::

:::guess
販売手数料0円は、makeshop単体ではなくグループ全体で見ると、別の形で補われているとみられる。月額利用料はEC支援のストック収益として、makeshopペイメントを流れるカード決済の手数料は決済セグメントのトランザクション収益として計上される構図が、決算資料の「グループ内シナジー事例」から読める。店舗数が減るなかで高価格帯プランへの転換を掲げる資料の書き方は、料金ページに無料プランを置かず、小さく始める人を他社の無料カートへ送り出す比較ページと同じ向きにあるようにも読める。ただし、この店舗数は、資料がカラーミーショップとmakeshopを並べて示すネットショップ支援事業の全体の数字で、makeshop単体の増減は資料からはわからない。月額の最大半分を契約更新のたびに払い続けるパートナー制度は、制作会社や代理店を通じて法人の乗り換え案件を集める仕組みとして働くと推測される。食品ECパッケージの早期申込価格が申し込みから1年続くことは、パッケージの機能が2027年6月にかけて順にそろう予定とほぼ重なり、機能がそろうまでの期間を値引きで支える設計と読める。
:::

makeshopは、売上から取らない代わりに、売れている店から月額を受け取るカートだ。2025年に3,804億円が流れたその土台では、長く運用されてきた旧来の基盤から、GoとGraphQLの次世代ECへの引っ越しが続いている。11月2日には従来APIが閉塞する予定で、その手前でAIエージェントの入口が開いた。小さく始める人を無料のカートへ送り出すほど割り切った料金表と、AIに管理画面を開く新しいAPIは、どちらも、すでに売れている店を迎えに行くための道具とみられる。
