---
service: "STORES"
title: "月額3,300円で8サービス、対面決済は1.98%、ネットショップは5.5%から — 3社が合併して「プランをひとつ」にするまでに8年かかったSTORESを解剖する"
description: "STORES 株式会社は、ネットショップ作成のSTORES.jp、決済のCoiney、予約のCoubicという別々のスタートアップが2018年から合流してできた会社だ。2026年3月24日にサービスごとの契約をやめ、月額0円のフリープランと月額3,300円のスタンダードプランで主要8サービスをまとめて使う体系へ完全移行した。累計25万以上の店舗、2025年度の売上高156億2,500万円。公式の料金ページ、プレスリリース、会社情報、STORES Product Blog、当サイトの実観測から、料金の仕組み、Railsのモノリス2本とMongoDB、Go製のID基盤、Zuoraへの購読移行、「コードの約80%をAIが生成」という開発体制までを解剖する。"
lead: "ネットショップ、キャッシュレス決済、POSレジ、予約システム。STORESの料金ページには、これらを別々に契約していた時代の名残がほとんど残っていない。2026年3月24日、STORESはサービスごとの契約を廃止し、月額0円か月額3,300円のどちらかを選べば主要8サービスを自由に組み合わせられる体系に完全移行した。別々の会社が作った別々のシステムを、ひとつの料金とひとつのアカウントに束ねる。その8年の統合が、料金表にどう現れているかを解剖する。"
category: saas
tags: [e-commerce, payments, pos, small-business, ruby-on-rails, mongodb, ai]
publishedAt: "2026-10-06"
updatedAt: "2026-10-06"
lastVerified: "2026-10-06"
serviceUrl: "https://stores.fun/"
# Affiliate link placeholder: no official STORES page confirms an affiliate program.
# Third-party listings (2026-10-06) report that A8.net carries STORES programs
# (ネットショップ / 予約 / 決済, rewards on new registrations or contracts); this was not
# verified on an official STORES page, and A8.net program pages require a login.
# The owner must search A8.net after joining, pass the review, and paste the tracking
# link plus the material's text (label) here before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://px.a8.net/svt/ejp?a8mat=<stores-a8-material-id>"
#   program: "STORES Affiliate Program (A8.net)"
vendor: "STORES 株式会社"
origin: "JP"
heroTheme: "stores"
scores: { product: 4.0, ux: 3.5, tech: 3.5, business: 3.5 }
techStack:
  - layer: "ネットショップ・POSレジのバックエンド"
    name: "Ruby on Rails (monolith, 1,500+ models) + MongoDB Atlas"
    confidence: confirmed
    evidence: "STORES Product Blogの2024年11月19日の記事に、STORES レジとSTORES ネットショップはバックエンドが同じRuby on Railsのモノリシックなアプリケーションで、DBも同じため商品と在庫が連携される、STORESで最大級のRailsリポジトリで1,500を超えるModelクラスがあると明記。2023年10月26日の記事は、両サービスのバックエンドで使うMongoDBをMongoDB Atlas上で4.4から5.0へ上げたと書く"
    evidenceUrl: "https://product.st.inc/entry/2024/11/19/130231"
  - layer: "ネットショップのフロントエンド"
    name: "Nuxt (web) + iOS app (same API)"
    confidence: confirmed
    evidence: "同じ2024年11月19日の記事に、STORES ネットショップのフロントエンドはNuxtで作られ、同一のバックエンドからiOSアプリ向けとNuxt向けのAPIを提供していると明記"
    evidenceUrl: "https://product.st.inc/entry/2024/11/19/130231"
  - layer: "予約システム"
    name: "Ruby on Rails (monolith, 1,000+ models) + Next.js"
    confidence: confirmed
    evidence: "同じ記事に、STORES 予約はモノリシックなRailsアプリケーションでフロントエンドはNext.js、1,000を超えるModelクラスを持つ巨大なリポジトリだと明記"
    evidenceUrl: "https://product.st.inc/entry/2024/11/19/130231"
  - layer: "ID基盤・サービス間連携"
    name: "Go + Next.js (OpenID Connect, in-house) + API Gateway (in-house) + Pub/Sub (in-house)"
    confidence: confirmed
    evidence: "同じ記事に、ログインアカウントを統合するID基盤はAmazon CognitoやFirebase AuthenticationのようなIDaaSを使わず、GoとNext.jsで開発・運用されていること、ID基盤のアクセストークンで認証・認可してバックエンドへ流すAPI Gatewayと、Webhookで社内システムに通知するPub/Subが社内で作られたことが書かれている"
    evidenceUrl: "https://product.st.inc/entry/2024/11/19/130231"
  - layer: "セッションストア（ネットショップ）"
    name: "Amazon ElastiCache Serverless (Valkey)"
    confidence: confirmed
    evidence: "STORES Product Blogの2025年6月27日の記事に、Railsで動くSTORES ネットショップ本体のセッションストアをMemoryDB (Redis OSS) からValkey Serverlessへ移行し、ElastiCache Serverlessはキャパシティ管理が不要で従量課金になる利点があると明記"
    evidenceUrl: "https://product.st.inc/entry/2025/06/27/112033"
  - layer: "プラン購読・課金"
    name: "Zuora"
    confidence: confirmed
    evidence: "STORES Product Blogの2025年6月27日の記事に、STORES ネットショップとSTORES POSレジのプラン購読を2025年1〜3月にZuoraへ移行し、各プロダクトでバラバラだった購読の仕組みを統一して、3月27日に複数プロダクトを横断する新しいプラン体系をリリースしたと明記"
    evidenceUrl: "https://product.st.inc/entry/2025/06/27/120610"
  - layer: "クラウド"
    name: "AWS (primary) + Google Cloud"
    confidence: confirmed
    evidence: "2024年11月19日の記事に、Rails以外にJavaやGoのサービスもあり、フロントエンドにはReactもVueもあり、AWSもGCPも使っていると明記。2020年12月3日のインフラ構成の記事は、STORES ECをAWSのEC2上で動かし、ALB・CloudFront・S3を使うと書く"
    evidenceUrl: "https://product.st.inc/entry/2024/11/19/130231"
  - layer: "サービスサイト・エッジ"
    name: "Next.js + Cloudflare + VWO"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-06）で、stores.fun と www.st.inc の応答に x-powered-by: Next.js、x-nextjs-prerender、server: cloudflare、cf-ray（NRT）が付き、stores.jp は stores.fun へ301で転送された。stores.fun のHTMLにはVWO（A/Bテスト）のスニペットとGoogle Tag Managerが含まれ、CSPの frame-ancestors に app.vwo.com が許可されていた"
  - layer: "ログイン・管理画面の配信"
    name: "Amazon CloudFront + Amazon S3 (dashboard SPA)"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-06）で、id.stores.jp は x-powered-by: Next.js と via: CloudFront を返し、dashboard.stores.jp は server: AmazonS3 と via: CloudFront を返した"
sources:
  - label: "STORES 株式会社: 会社情報（会社概要・沿革・売上高）"
    url: "https://www.st.inc/company"
    accessedAt: "2026-10-06"
  - label: "STORES 株式会社: STORES、プラン体系の統合、および「フリープラン」「スタンダードプラン」対象拡大のお知らせ（2026-03-26）"
    url: "https://www.st.inc/news/2026-03-26-plan-update"
    accessedAt: "2026-10-06"
  - label: "STORES公式: ご利用料金（フリープラン・スタンダードプラン）"
    url: "https://stores.fun/pricing"
    accessedAt: "2026-10-06"
  - label: "STORES公式: STORES ネットショップ 料金プラン"
    url: "https://stores.fun/ec/pricing"
    accessedAt: "2026-10-06"
  - label: "STORES公式: STORES ネットショップ（機能・よくある質問）"
    url: "https://stores.fun/ec"
    accessedAt: "2026-10-06"
  - label: "STORES 株式会社: STORES 予約、事前決済手数料を3.3%〜に引き下げ（2026-07-22）"
    url: "https://www.st.inc/news/2026-07-22-reserve-news"
    accessedAt: "2026-10-06"
  - label: "STORES 株式会社: 〈2026 夏のアップデート〉「おまかせスタート」の提供開始（2026-08-03）"
    url: "https://www.st.inc/news/2026-08-03-omakase-start"
    accessedAt: "2026-10-06"
  - label: "STORES 株式会社: ストアーズ、食品消費税率1％への引き下げに店舗もネットショップもまとめて対応（2026-07-31）"
    url: "https://www.st.inc/news/2026-07-31-tax-rate-change"
    accessedAt: "2026-10-06"
  - label: "STORES 株式会社: STORES Tech Conf 2026 \"World 2\" 開催のお知らせ（2026-07-17）"
    url: "https://www.st.inc/news/2026-07-17-storestechconf2026"
    accessedAt: "2026-10-06"
  - label: "STORES Product Blog: ストアーズはECの会社、ではなくこんな開発をしています（2024-11-19）"
    url: "https://product.st.inc/entry/2024/11/19/130231"
    accessedAt: "2026-10-06"
  - label: "STORES Product Blog: STORES EC のインフラ構成（2020-12-03）"
    url: "https://product.st.inc/entry/2020/12/03/141713"
    accessedAt: "2026-10-06"
  - label: "STORES Product Blog: STORES ネットショップおよび STORES POSレジで使用している MongoDB を 4.4 から 5.0 にバージョンアップしました（2023-10-26）"
    url: "https://product.st.inc/entry/2023/10/26/171849"
    accessedAt: "2026-10-06"
  - label: "STORES Product Blog: セッションストアをValkey Serverlessへ移行してみたら、パフォーマンスもコストも大きく改善した話（2025-06-27）"
    url: "https://product.st.inc/entry/2025/06/27/112033"
    accessedAt: "2026-10-06"
  - label: "STORES Product Blog: EC・POSレジのプラン購読の仕組みをZuoraに移行した話（2025-06-27）"
    url: "https://product.st.inc/entry/2025/06/27/120610"
    accessedAt: "2026-10-06"
  - label: "STORES Product Blog: Goで作られたシステムをRuby on Railsに移植しています（2025-06-27）"
    url: "https://product.st.inc/entry/2025/06/27/124100"
    accessedAt: "2026-10-06"
---

STORESは、ネットショップ作成、キャッシュレス決済、POSレジ、予約システムを、ひとつのアカウントで売る会社だ。もともとは別々のスタートアップが作った別々のサービスで、2018年に持株会社の下に集まり、2021年に1社に合併し、2026年3月にようやく「プランがひとつ」になった。合併から料金表の統一までにかかった時間は、システムの統合にかかった時間でもある。

## サービス解説

STORES 株式会社は、東京・恵比寿に本社を置く非上場企業で、中堅・中小規模の店舗に向けてネットショップ開設・POSレジ・キャッシュレス決済・オンライン予約・アプリ作成を提供している。会社の設立日は2012年3月23日だが、これは決済サービスCoineyを作ったコイニー株式会社の設立日で、ネットショップのSTORES.jpは同じ年に別の会社（株式会社ブラケット）が始めた。

:::fact
公式の会社情報ページ（2026-10-06時点）の沿革によれば、2012年8月30日に株式会社ブラケットが「STORES.jp」を、2013年4月10日にコイニー株式会社が「Coiney」を、2014年4月10日にクービック株式会社が予約サービス「Coubic」をリリースした。2018年2月1日にコイニーとストアーズ・ドット・ジェーピーがグループ化し、事業持株会社としてヘイ株式会社を設立。2020年1月30日にサービスブランドを「STORES」に統合し、同年8月4日にクービックをグループ化、2021年1月1日に3社を吸収合併して運営会社をheyに一本化した。2021年6月15日に「STORES レジ」をリリース、2022年10月1日にヘイ株式会社からSTORES 株式会社へ商号変更、2025年1月20日にDigitar株式会社をグループ化し、同年5月30日に「マキトリ by STORES」をリリースした。代表取締役社長は佐藤裕介氏で、売上高は15,625百万円（2025年度）と記載されている。
:::

:::fact
公式の料金ページ（2026-10-06時点）によれば、プランは2つ。フリープランは月額0円で対面の決済手数料2.48%〜、決済端末は27,720円（税込）、利用できる機能は基本機能のみ。スタンダードプランは月額3,300円（税込・年間契約。月額契約は3,960円）で対面の決済手数料1.98%〜、決済端末は年間契約で1台無償貸出、すべての機能が使える。適用は事業者単位ではなく店舗ごとで、年間のキャッシュレス決済額が3,000万円以上の事業者は対面クレジットカード決済手数料がフリー3.24%、スタンダード2.98%になる。スタンダードプランは契約期間中の途中解約による返金がない。ページの末尾には「累計 25 万以上のお店が、STORES を導入しています」とある。
:::

:::fact
STORES ネットショップの料金ページ（2026-10-06時点）によれば、ネットショップの決済手数料はフリープランが5.5%〜、スタンダードプランが3.6%〜で、PayPal・あと払い（ペイディ）・atone・楽天Pay・PayPay残高・Amazon Pay・キャリア決済はそれぞれ6.5%と4.6%。月間売上150万円以上の事業者には2.9%〜のプランを個別に提案する。売上金は通常、月末締めの翌月末に振り込まれ、決済手数料と振込手数料275円を差し引いた入金額が10,000円以上の場合が対象。最短翌日に振り込む「スピードキャッシュ」は、振込手数料275円に加えてスタンダード1.5%、フリー3.5%の手数料がかかる。独自ドメインはスタンダードプランのみ、無料テンプレートは48種類、3Dセキュア2.0に標準対応と書かれている。
:::

:::pull
月額3,300円で、ネットショップ、キャッシュレス決済、POSレジ、予約、モバイルオーダー、データ分析、請求書決済までが1つの契約に入る。ただし適用は「店舗ごと」で、決済手数料は売上に応じて別にかかる。
:::

::scorecard

## UX分析

STORESの体験は、「お店のデジタル化を全部まとめて引き受ける」方向に寄せられている。かつて別々のサービスだった名残は、料金ページよりも、個別の手数料表に残っている。

- **プランは2つ、手数料は用途ごと**。月額は0円か3,300円の二択で分かりやすい。一方で決済手数料は、対面のクレジットカードが1.98%〜、ネットショップが3.6%〜、予約の事前決済が3.3%〜、請求書決済が2.98%〜と、同じスタンダードプランでも販売チャネルごとに違う。しかも「〜」の先は、決済手段や事業規模、申請制の「中小特別料率」で変わる。月額の単純さと手数料の複雑さが同居している。
- **安さの条件は申請制**。2026年7月22日のプレスリリースによれば、予約の事前決済手数料3.3%〜は、スタンダードプランへの加入と、中小企業基本法の中小企業者であること・年間キャッシュレス決済額3,000万円未満・対面での提供環境があることを満たす「中小特別料率」の申請が揃ったときの数字だ。8月3日以降の新規申込では審査と同時に自動で申請され、通過後は最短5日で適用される。読まずに契約しても損はしにくいが、表に書かれた一番小さい数字が自分に当てはまるかは、確認が要る。
- **設定を人とAIに丸投げできる**。2026年8月3日のプレスリリースによれば、「おまかせスタート」は1店舗55,000円（税込）でネットショップ・予約・モバイルオーダー・POSレジ・決済の初期設定を代行し、最短10日で納品、納品後14日間は担当者に直接問い合わせられる。対象はスタンダードプランか予約の有料プランの契約者で、会社はこれを「AI BPO」の新サービスと位置づけている。
- **制度変更への備えを先回りする**。2026年7月31日のプレスリリースによれば、政府が2027年4月からの実施を検討している食料品の消費税率1%への引き下げに向けて、POSレジ・ネットショップ・モバイルオーダー・請求書決済で新税率に対応する開発を完了し、複数チャネルの税率を一括設定・予約設定する機能を提供予定で、追加費用はかからない。制度の詳細は法案の審議後に決まるため、同社は正式な内容に合わせて柔軟に対応するとしている。

## 技術構成

::techstack

:::fact
STORES Product Blogの2024年11月19日の記事（エンジニアリングマネージャーによる）によれば、STORESは複数のスタートアップが合併してできた会社で、それぞれのサービスはFirst commitから数えると10年以上開発が続いてきた。STORES レジとSTORES ネットショップのバックエンドは同じRuby on Railsのモノリシックなアプリケーションで、DBも同じため商品情報と在庫情報が連携され、1,500を超えるModelクラスを持つ社内最大級のRailsリポジトリだ。ネットショップのフロントエンドはNuxtで、同じバックエンドからiOSアプリ向けとNuxt向けのAPIを出している。STORES 予約はこれとは別のRailsモノリスで、フロントエンドはNext.js、Modelクラスは1,000を超える。Rails以外にJavaやGoのサービスもあり、フロントエンドにはReactもVueもあり、AWSもGCPも使っている。
:::

:::fact
同じ記事によれば、別々のスタートアップで作られたサービスのログインアカウントを統合するため、Amazon CognitoやFirebase AuthenticationのようなIDaaSを使わず、GoとNext.jsでOpenID Connectに準拠したID基盤を自社で開発・運用している。ID基盤のアクセストークンで認証・認可をして適切なバックエンドへ流すAPI Gatewayと、リクエストを受けると社内でSubscribeしているシステムへWebhookを飛ばすPub/Subも、それぞれほぼひとりのエンジニアが作った。予約システムとPOSレジを連携させる際には、BFFを前段に置く設計も検討したが、早くリリースして顧客の反応を見るため、これまで通りSTORES レジのRailsがリクエストを受け、必要に応じてSTORES 予約のAPIを呼ぶ構成を選んだと書かれている。
:::

:::fact
データ層とミドルウェアの変化は、同じブログで追える。2023年10月26日の記事によれば、ネットショップとPOSレジのバックエンドのMongoDBはMongoDB Atlasで運用され、4.4のEOL（2024年2月）を前に5.0へ上げた。2025年6月27日の記事によれば、Railsで動くネットショップ本体のセッションストアをMemoryDB（Redis OSS）からValkey Serverless（ElastiCache Serverless）へ移し、キャパシティ管理が不要で従量課金になった一方、KEYSやCLIENT LISTのような一部コマンドが使えない制約があった。同じ日の別の記事によれば、ネットショップとPOSレジのプラン購読は2025年1〜3月にZuoraへ移行し、各プロダクトでバラバラだった購読管理を統一して、3月27日に複数プロダクトを横断する新しいプラン体系をリリースした。さらに同じ日のもう1本は、店舗運営の統合のために作られたGo製のシステムをRuby on Railsに移植していると書き、理由として社内でのGoとRubyの習熟度とエコシステムへの投資の差が大きくなったこと、Go側の開発基盤に標準的なWebフレームワークの機能が足りないこと、省メモリでも別サーバーを運用するコストを回収できないこと、システム間のAPI呼び出しによる遅延と開発効率の悪さを挙げている。
:::

:::fact
2026年7月17日のプレスリリースによれば、2026年5月時点でSTORESのコードの約80%がAIによって生成されており、社内AIエージェント「kuro」が開発業務を支援している。8月31日に開いた自社テックカンファレンス「STORES Tech Conf 2026 "World 2"」のテーマは、AIを前提とした新しい開発手法への転換で、セッションには「AIによる大規模な管理画面移植を支えるコード生成」や「World 2で、World 2のDatabaseを作る」が並んだ。
:::

:::guess
技術構成の全体像は「別々の会社が作った複数のモノリスを、自前のID基盤とAPI Gatewayでつなぐ」形とみられる。2026年3月の「プランをひとつ」にする移行は、2025年のZuoraへの購読統一とGo製システムのRails移植の延長線上にあり、課金の仕組みと技術スタックを揃えることが、料金表を揃える前提になっていたと推測される。Go製の基盤をあえてRailsに戻す判断は、言語の優劣ではなく、社内の多数派がRailsであることに合わせて開発速度を取る選択と読める。コードの約80%をAIが生成するという数字と、大規模な管理画面の移植にコード生成を使う発表は、こうした移植作業の量と無関係ではないとみられる。
:::

## ビジネスモデル

収益は、月額利用料と、売上に応じた決済手数料の2本立てだ。月額は0円か3,300円のどちらかに単純化し、決済手数料はチャネルごと・事業規模ごとに細かく分かれている。

:::fact
2026年3月26日のプレスリリースによれば、STORESは2026年3月24日より、サービスごとの個別契約を廃止し、店舗に合ったプランを1つ契約するだけでキャッシュレス決済、POSレジ、ネットショップ、予約システムなど主要8サービスを自由に組み合わせて使える体系へ完全移行した。それまで中小事業者に限定していたフリープランとスタンダードプランの加入対象をすべての企業規模に広げ、スタンダードプランでは対面のクレジットカード決済手数料が中小事業者1.98%〜、中規模以上（年間キャッシュレス決済額3,000万円以上、または中小事業者に該当しない場合）でも2.98%〜になる。単体で利用中の事業者の移行手続きは個別に案内するとしている。
:::

:::fact
料金ページ（2026-10-06時点）によれば、スタンダードプランには決済端末1台の無償貸出（加盟店審査の通過後に送付、解約時は返却、2台目以降は有料購入）、端末の故障交換の無償化、対面クレジットカード決済手数料の割引、請求書カード払いの手数料割引、ネットショップ決済手数料の割引、POSレジのアイテムの自由な並び替えが含まれる。パッケージプランに含まれない高度な機能は予約（スモール・チーム・ビジネス）やモバイルオーダーの単品プランを足す形で、月額はパッケージと単品の合算になる。ポイント・ランクシステムはSTORES連携で22,000円/月〜、Shopify連携で44,000円/月〜、ブランドアプリは個別見積もりだ。
:::

:::guess
月額3,300円は、売上の規模が小さい店舗にとっては「手数料の割引を買う」費用とみられる。ネットショップの場合、フリーの5.5%とスタンダードの3.6%の差は1.9ポイントで、月商が約17万円を超えると月額3,300円の元が取れる計算になる（当サイトの試算）。対面決済なら差は0.5ポイント（2.48%と1.98%）と小さいが、代わりに27,720円の端末が無償貸出になるため、1店舗でも初年度は端末代で月額の大半が相殺される。無料プランを広く配り、売れ始めた店だけが有料に移る設計で、「店舗ごと」の適用は多店舗の事業者から月額を複数回受け取る仕組みとして働くと推測される。
:::

:::guess
会社情報の沿革には、2018年の持株会社化から2026年の料金統一までに8年が並ぶ。公式ブログに書かれた「各プロダクトで管理されていた購読の仕組み」と「別々のログインアカウント」は、その間ずっと、ひとつの会社でありながら複数の料金表を持ち続けた理由とみられる。2025年にZuoraへ購読を集約し、2026年に対象を全規模へ広げたことで、[BASE](/ja/articles/base)のような単一サービスの無料プランや、[Square](/ja/articles/square)のような決済起点のパッケージと、同じ土俵で比較されるようになった。おまかせスタートの55,000円や、食品の消費税率変更への先回り対応は、月額と手数料の外側で、店舗の手間そのものを引き受けて差をつける方向に見える。
:::

別々の会社が作った別々のサービスを、ひとつの料金とひとつのアカウントに束ねるには、8年と、Railsのモノリス2本、Go製のID基盤、Zuoraへの購読移行が要った。その結果が「月額0円か3,300円」という単純な二択と、チャネルごとに違う決済手数料の表だ。単純なほうは1ページで読めるが、自分の店に当てはまる数字は、もう1ページ先にある。
