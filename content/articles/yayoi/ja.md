---
service: "やよいの青色申告 オンライン（弥生）"
title: "1年目は0円、2年目からも年11,800円（税抜） — 弥生は機能ではなく電話サポートで値段を分け、クラウド申告の半分を握り続ける"
description: "個人事業主向けクラウド会計ソフトで11年連続シェア首位の弥生。消費税申告までできる最安プランの年額は11,800円（税抜）で、freeeや12月以降のマネーフォワードの約半分、しかも初年度は0円だ。3つのプランを機能ではなくサポートの厚さだけで分ける値段の組み立て、2026年1月の料金改定、インストール型から続く顧客基盤とKKR傘下での投資を、MM総研の調査、公式サイト、プレスリリース、公式開発者ブログから解剖する。ASP.NETとAzureで動くとみられる申告アプリと、Next.jsとGraphQLで作る新しいサービス、AWSのコンテナで動く姉妹製品Misocaという世代の違いも読む。"
lead: "クラウドで確定申告をする個人事業主の半分以上が、弥生を使っている。MM総研の2026年3月末の調査で54.0%、調査開始から11年続けて首位だ。消費税申告までできる一番安いプランは年11,800円（税抜）で、しかも1年目は0円。freeeで消費税申告ができるプランは年2万円台で、マネーフォワードも2026年12月以降の更新から2万円台に上がる。弥生はなぜ、その半分の値段で首位にいられるのか。料金表の分け方と、申告アプリの中身から解剖する。"
category: saas
tags: [accounting, small-business, fintech, azure, mcp]
publishedAt: "2026-09-29"
updatedAt: "2026-09-29"
lastVerified: "2026-09-29"
serviceUrl: "https://www.yayoi-kk.co.jp/shinkoku/aoiroshinkoku/"
affiliate:
  url: "https://af.moshimo.com/af/c/click?a_id=5825559&p_id=914&pc_id=1138&pl_id=38628"
  program: "Yayoi Affiliate Program (Moshimo Affiliate)"
  impressionUrl: "https://i.moshimo.com/af/i/impression?a_id=5825559&p_id=914&pc_id=1138&pl_id=38628"
vendor: "Yayoi Co., Ltd."
origin: "JP"
heroTheme: "yayoi"
scores: { product: 4.0, ux: 3.5, tech: 3.0, business: 4.0 }
techStack:
  - layer: "申告アプリ（Webフレームワーク）"
    name: "ASP.NET (.NET Framework 4.x)"
    confidence: likely
    evidence: "当サイトの実観測（2026-09-29）で、やよいの青色申告 オンラインのログイン先に指定されている shinkoku.yayoi-kk.co.jp が x-aspnet-version: 4.0.30319 を返す。このヘッダーは.NET Framework 4.x上のASP.NETが付けるもので、会計のオンライン版が使う kaikei.yayoi-kk.co.jp も同じ値を返す"
  - layer: "申告アプリ（ホスティング）"
    name: "Microsoft Azure (Application Gateway / App Service)"
    confidence: confirmed
    evidence: "公式の料金ページのFAQに「弥生では『Microsoft Azure』を採用し」と明記。当サイトの実観測（2026-09-29）では、shinkoku.yayoi-kk.co.jp がAzure Application Gatewayのセッション固定Cookie（ApplicationGatewayAffinity）とAzure App ServiceのCookie（ARRAffinity）を、kaikei.yayoi-kk.co.jp がARRAffinityを返す。いずれもDNSではAkamai（edgekey.net）へのCNAMEになっている。Application GatewayとApp Serviceという構成要素は、この観測からの推定"
    evidenceUrl: "https://www.yayoi-kk.co.jp/shinkoku/aoiroshinkoku/price/"
  - layer: "新しいサービスのWeb構成"
    name: "Next.js (BFF) + GraphQL (Apollo Federation) + NestJS"
    confidence: confirmed
    evidence: "公式開発者ブログ（2021-12）に、弥生で開発中の新しいサービスはフロントエンドにNext.jsを使い、API RoutesにGraphQLサーバーを立ててBFFとしていたこと、バックエンドはC#（ASP.NET Core）のREST APIだったが、GraphQLへの段階移行でNestJSを採り、Apollo Federationで複数のGraphQL APIをまとめたことが書かれている。どの製品かは記事に書かれていない"
    evidenceUrl: "https://tech-blog.yayoi-kk.co.jp/entry/entry/2021/12/23/000000"
  - layer: "姉妹製品のインフラ"
    name: "AWS ECS + Terraform + CodeDeploy (Misoca)"
    confidence: confirmed
    evidence: "公式開発者ブログ（2021-12）に、請求書サービスMisocaの本番環境をEC2からECSへ、Route53の加重ルーティングで無停止・段階的に移したこと、インフラをTerraformで管理し、CodeDeployでBlue/Greenデプロイをしていることが書かれている"
    evidenceUrl: "https://tech-blog.yayoi-kk.co.jp/entry/2021/12/06/000000"
  - layer: "運用自動化"
    name: "Azure Automation / Data Factory / Logic Apps"
    confidence: confirmed
    evidence: "公式開発者ブログ（2024-12）に、サービスプラットフォーム部がオンプレミスのWindows Serverのタスクスケジューラで動かしていた定期処理を、Azure Automationのランブック、Azure Data Factory、Azure Logic Appsへ移したことが書かれている"
    evidenceUrl: "https://tech-blog.yayoi-kk.co.jp/entry/2024/12/12/000000"
  - layer: "AIエージェント連携"
    name: "Misoca MCP (remote MCP / OAuth)"
    confidence: confirmed
    evidence: "Misoca公式ブログ（2026-09-15）に、有償プランの契約者を対象に、Claude.ai・Claude Desktop・CursorからMisocaを操作できるMisoca MCPの提供を始めたと明記。請求書の作成・検索、ステータスの変更、取引先・送り先の作成・検索、請求書PDFの取得ができ、請求書の更新・削除・メール送信や見積書・納品書・領収書には対応しない。認証はOAuth"
    evidenceUrl: "https://www.misoca.jp/blog/update_20260915"
  - layer: "開発プロセス"
    name: "Cursor / Devin + Databricks"
    confidence: confirmed
    evidence: "公式開発者ブログ（2026-08）に、2025年前期から組織としてAI駆動開発（AIDD）を立ち上げ、CursorとDevinを組織の標準ツールにしたこと（Claude CodeやCodexなどは選定後に登場したと記載）、CursorとDevinの利用データとPR数をDatabricksに集め、対象人数の目安は412人で、全社の平均PR数が2025年4月の6.9から直近11.41へ（+65.5%）増えたことが書かれている"
    evidenceUrl: "https://tech-blog.yayoi-kk.co.jp/entry/2026/08/12/110000"
  - layer: "コーポレートサイト配信"
    name: "Adobe Experience Manager + Akamai / Fastly"
    confidence: likely
    evidence: "当サイトの実観測（2026-09-29）で、www.yayoi-kk.co.jp はAkamai（edgekey.net）へのCNAMEで、応答にFastlyのキャッシュノードを示す x-served-by: cache-nrt-… と x-timer を含む。画像のパスが /content/dam/yayoi-corp/…、本文の要素が cmp-text クラスで、x-vhost: publish も返しており、Adobe Experience Managerのパブリッシュ環境の特徴と一致する"
sources:
  - label: "弥生株式会社: 会社情報"
    url: "https://www.yayoi-kk.co.jp/company/about/"
    accessedAt: "2026-09-29"
  - label: "弥生株式会社: 個人事業主向けクラウド会計ソフトシェア、弥生が54.0％で11年連続No.1を獲得（2026-04-30）"
    url: "https://www.yayoi-kk.co.jp/company/pressrelease/detail.20260430/"
    accessedAt: "2026-09-29"
  - label: "MM総研: 個人事業主のクラウド会計利用率は38.4％、近く40％へ（2026）"
    url: "https://www.m2ri.jp/release/detail.html?id=711"
    accessedAt: "2026-09-29"
  - label: "弥生株式会社: 弥生、10年連続で個人事業主向けクラウド会計ソフトシェアNo.1を獲得（2025-05-13）"
    url: "https://www.yayoi-kk.co.jp/company/pressrelease/detail.20250513/"
    accessedAt: "2026-09-29"
  - label: "弥生株式会社: やよいの青色申告 オンライン"
    url: "https://www.yayoi-kk.co.jp/shinkoku/aoiroshinkoku/"
    accessedAt: "2026-09-29"
  - label: "弥生株式会社: やよいの青色申告 オンライン 料金プラン"
    url: "https://www.yayoi-kk.co.jp/shinkoku/aoiroshinkoku/price/"
    accessedAt: "2026-09-29"
  - label: "弥生株式会社: 「やよいの青色申告 オンライン」価格改定のお知らせ（2025-09-01）"
    url: "https://www.yayoi-kk.co.jp/yss/info/detail.20250901/"
    accessedAt: "2026-09-29"
  - label: "弥生株式会社: やよいの青色申告 26 価格・料金表"
    url: "https://www.yayoi-kk.co.jp/shinkoku/aoiroshinkoku/yayoiaoiro/price/"
    accessedAt: "2026-09-29"
  - label: "弥生株式会社: 「やよいの青色申告 オンライン」「やよいの白色申告 オンライン」、令和7年分 所得税確定申告の提供を開始（2026-01-30）"
    url: "https://www.yayoi-kk.co.jp/company/pressrelease/detail.2060130_2/"
    accessedAt: "2026-09-29"
  - label: "KKR: KKR、弥生の株式取得完了（2022-03-01）"
    url: "https://www.kkr.com/content/dam/kkr/country-sites/jp/press-release/2022/20220301-kkr-%E7%94%9F%E3%81%AE%E6%A0%AA%E5%BC%8F%E8%AD%B2%E6%B8%A1%E5%AE%8C%E4%BA%86.pdf"
    accessedAt: "2026-09-29"
  - label: "弥生株式会社（オリックスグループ ニュースリリース）: クラウド請求管理サービスのベンチャー「Misoca（ミソカ）」を買収（2016-02-22）"
    url: "https://www.orix.co.jp/grp/company/newsroom/newsrelease/160222_ORIXG.html"
    accessedAt: "2026-09-29"
  - label: "MM総研: 弥生、「弥生会計Next」をリリース、「弥生給与Next」も大幅アップデート"
    url: "https://www.m2ri.jp/topics/detail.html?id=796"
    accessedAt: "2026-09-29"
  - label: "弥生開発者ブログ: マイクロサービスのAPIをRESTからGraphQLへ段階的に移行した話（2021-12）"
    url: "https://tech-blog.yayoi-kk.co.jp/entry/entry/2021/12/23/000000"
    accessedAt: "2026-09-29"
  - label: "弥生開発者ブログ: AWS Route53の加重ルーティング機能で本番インフラを無停止・段階的にECS環境に移行する（2021-12）"
    url: "https://tech-blog.yayoi-kk.co.jp/entry/2021/12/06/000000"
    accessedAt: "2026-09-29"
  - label: "弥生開発者ブログ: タスクスケジューラの実行環境を Azure へ移行したお話（2024-12）"
    url: "https://tech-blog.yayoi-kk.co.jp/entry/2024/12/12/000000"
    accessedAt: "2026-09-29"
  - label: "弥生開発者ブログ: Cursorの組織導入から1年の振り返り（2026-08）"
    url: "https://tech-blog.yayoi-kk.co.jp/entry/2026/08/12/110000"
    accessedAt: "2026-09-29"
  - label: "Misoca: AIツールからMisocaを操作できる「Misoca MCP」の提供開始しました（2026-09-15）"
    url: "https://www.misoca.jp/blog/update_20260915"
    accessedAt: "2026-09-29"
  - label: "freee公式: 個人事業主向け料金プラン（比較用）"
    url: "https://www.freee.co.jp/personal-business/accounting/pricing/"
    accessedAt: "2026-09-29"
  - label: "マネーフォワード クラウド確定申告: 料金プラン（比較用）"
    url: "https://biz.moneyforward.com/tax_return/price/"
    accessedAt: "2026-09-29"
  - label: "マネーフォワード クラウド サポート: 料金体系の一部改定について（2026-09-24・比較用）"
    url: "https://biz.moneyforward.com/support/plan/news/20260924.html"
    accessedAt: "2026-09-29"
---

クラウド会計の三つ巴は、よく「freeeとマネーフォワード」の二社の話として語られる。どちらも上場企業で、決算資料が毎四半期に数字を出すからだ。だが個人事業主の画面の上では、首位はずっと別の会社にいる。1978年創業で、パッケージソフトの「弥生シリーズ」を持つ弥生だ。会社情報によれば株主はKKRグループで、上場はしていない。その会社が、どうやって半分のシェアを保っているのかを、公開されている料金表と調査、そしてアプリが返すHTTPヘッダーから読む。

## サービス解説

やよいの青色申告 オンラインは、弥生が個人事業主向けに提供するクラウドの確定申告ソフトだ。銀行やクレジットカードの明細、レシートを取り込んで仕訳を作り、青色申告決算書と確定申告書を作ってe-Taxで提出するところまでを受け持つ。白色申告向けの「やよいの白色申告 オンライン」と、パソコンにインストールして使う「やよいの青色申告 26」が並ぶ。法人向けには2025年4月に、新しいクラウドブランド「弥生 Next」の会計ソフト「弥生会計 Next」を出している。

:::fact
MM総研が2026年3月23〜26日に、2025年分の確定申告をした個人事業主15,845事業者にWebアンケートで聞いた調査によれば、会計ソフトを使う個人事業主は40.9%で、そのうちクラウド会計ソフトの利用率は38.4%（前年38.3%）。クラウド会計ソフトの事業者別シェアは弥生54.0%（前年比1.4ポイント減）、freee 25.1%、マネーフォワード15.7%で、上位3社で94.8%を占めた。会計ソフト利用者の51.0%はパソコンにインストールする型を使っている。弥生のプレスリリースによれば、弥生は2016年の調査開始から毎年50%以上のシェアで首位を保ち、登録ユーザー数は350万を超える。2016年2月のMisoca買収の発表で弥生は、2014年からクラウド事業を本格的に展開し、弥生会計 オンライン、やよいの青色申告 オンライン、やよいの白色申告 オンラインを提供していると説明している。
:::

:::fact
公式の料金ページによれば、やよいの青色申告 オンラインは3プランで、表示価格はすべて税抜き。セルフプランは年額11,800円、ベーシックプランは年額22,800円で、どちらも初年度は無料。トータルプランは年額39,600円で、初年度は半額の19,800円。料金ページは「どのプランでもすべての製品機能が使えます」とし、消費税申告、所得税の確定申告、インボイス対応、e-Taxによる申告のすべてが初年度0円だと説明している。初年度の優待価格は「初年度無償キャンペーン」で、2027年3月15日までの申し込み分が対象、適用は1事業者につき1回。使うには、自動更新の決済方法として口座振替かクレジットカードの登録が必要。
:::

:::pull
消費税申告までできる最安プランの年額は、弥生が11,800円、マネーフォワードが22,560円（2026年12月以降）、freeeが23,760円。いずれも税抜きで、弥生はほぼ半分だ。
:::

::scorecard

## UX分析

やよいの青色申告 オンラインのUXは、「どれを選んでも機能は同じ。迷うのはサポートだけ」という料金表から始まる。

- **プランの境目がサポートの厚さだけ**。セルフはWebFAQ、ベーシックはそれに電話・メール・チャットでの操作質問（電話はサポート契約期間中10回まで）、トータルはさらに仕訳や経理業務、確定申告の相談が付く。料金ページのFAQは「操作サポートが必要かどうか？」で選ぶよう案内し、後からプランを変えられるとも書いている。[freee](/ja/articles/freee)や[マネーフォワード クラウド](/ja/articles/moneyforward-cloud)が消費税申告の可否でプランを分けるのとは、切り方が違う。
- **1年目0円の入口と、更新前の知らせ**。初年度0円には決済方法の登録が要り、そのまま自動更新になる。料金ページのFAQは、ご案内なしに引き落とすことはなく、契約終了の前月に更新をメールで知らせ、契約終了月の前月末日までWebでキャンセルできると答えている。別に、決算・申告機能を除いて最大2か月試せる無料体験プランもある。
- **マイナポータルからの取り込み**。2026年1月30日のプレスリリースによれば、令和7年分の申告から、マイナポータル経由で寄附金控除に関する証明書、生命保険料控除証明書、医療費通知情報をオンラインで取得し、そのまま取り込めるようになった。
- **控除75万円の制度変更に先回り**。公式サイトは、2027年（令和9年）分から改正される青色申告特別控除75万円の要件のうち「優良な電子帳簿」に対応していると説明している。MM総研の調査は、電子帳簿とe-Taxの両方を満たせば最大額が65万円から75万円に上がり、電子化しない場合は55万円から10万円に縮むとまとめている。
- **パッケージ版と並べて見せる**。料金ページは、機能より費用を抑えたい人にはオンライン版を、伝票や帳簿でしっかり記帳したい人にはインストール型の「やよいの青色申告 26」を勧めている。26はオンラインストアで保守サポート付きの販売になり、初年度14,000円（税抜・セルフまたはベーシック付き）、2年目以降は保守サポートの年額（セルフ12,300円、ベーシック20,700円など）がかかる。

## 技術構成

::techstack

:::fact
公式開発者ブログ（2021-12）によれば、弥生で開発していた「新しいサービス」は、フロントエンドにNext.jsを使い、API RoutesにGraphQLサーバーを立ててBFFとしていた。バックエンドはC#（ASP.NET Core）でREST APIを提供していたが、GraphQLへ段階的に移すなかでNestJSを採り、Apollo Federationで複数のGraphQL APIをまとめる形にした。弥生が2016年2月に全株式の取得を発表した名古屋の請求書サービスMisocaは、同じ月の記事によれば、本番環境をAWSのEC2からECSへ移し、Terraformで管理している。一方、2024年12月の記事によれば、サービスプラットフォーム部はオンプレミスのWindows Serverで動かしていた定期処理をAzure Automationなどへ移しており、弥生はAWSとAzureの両方を使っている。
:::

:::fact
当サイトが2026-09-29に実観測したところ、やよいの青色申告 オンラインのログインリンクと同じ service_id=shinkoku を使う shinkoku.yayoi-kk.co.jp は、未ログインの要求に302で myaccount.yayoi-kk.co.jp のログイン画面へ転送し、x-aspnet-version: 4.0.30319 と、Azure Application Gatewayのセッション固定Cookieを返した。両ホストともAzure App ServiceのCookie（ARRAffinity）を返し、kaikei.yayoi-kk.co.jp も同じ x-aspnet-version を返した。どちらもDNSではAkamaiへのCNAMEだった。料金ページのFAQも、弥生が「Microsoft Azure」を採用していると書いている。Misocaは2026年9月15日にMisoca MCPの提供を始めたが、当サイトが公式サイトとプレスリリースで確かめた範囲では、やよいの青色申告 オンラインのMCPサーバーやAPIの一般提供の告知は見つからなかった。
:::

:::guess
観測したヘッダーからは、個人事業主向けのオンライン版は.NET Framework上のASP.NETで書かれ、AzureのApp Serviceで動いているとみられる。一方で開発者ブログが語る新しいサービスはNext.jsとNestJSのGraphQL、MisocaはAWSのコンテナという、別の世代の作りだ。弥生の中では、Windowsのパッケージソフトに近い技術で作られた既存のクラウド製品と、弥生 Nextのような新しいクラウド製品が並んで動いていると推測される。AIエージェントへの入口が申告アプリではなく、買収で加わりAWSのコンテナで動くMisocaから先に開いたのも、この世代差の表れと読める。対象の目安412人で全社の平均PR数が約1.65倍になったという数字は、既存製品の作り替えに使える手数が増えていることを示すが、それが申告アプリにいつ届くかは公開情報からは分からない。
:::

## ビジネスモデル

収益の柱は、個人事業主と法人が払うソフトとサポートの年額だ。オンライン版は年額のサービス料、インストール型はパッケージと年額の保守サポートで、どちらも「1年目を安く、2年目から通常価格」という形をとる。

:::fact
弥生の告知（2025-09-01）によれば、やよいの青色申告 オンラインは2026年1月1日から料金を改定した。年額（税抜）はセルフプランが10,300円→11,800円（約15%増）、ベーシックプランが17,250円→22,800円（約32%増）、トータルプランが30,000円→39,600円（約32%増）。新規の申し込みは2025年12月1日から、既存の契約は2026年1月1日以降に次年度が始まる分から新価格になり、セルフとベーシックの初年度無償、トータルの初年度半額は続ける。理由には、安定したサービス提供のための基盤とサポートへの投資と、生成AIやクラウド技術などへの対応を挙げている。
:::

:::fact
比較として、freeeの公式料金ページによれば、個人事業主向けで消費税申告ができるスタンダードプランは年払い23,760円（税抜）で、消費税申告ができないスターターは11,760円。マネーフォワード クラウドの告知（2026-09-24）によれば、消費税申告ができるパーソナルプランの年払いは、2026年12月1日以降の更新から15,360円が22,560円（税抜）になる。
:::

:::guess
弥生の最安プランは、他社では消費税申告ができない一番下のプランとほぼ同じ値段で、消費税申告まで入れている。弥生は機能で値段を分けない代わりに、人が電話やチャットで答えるサポートで値段を分けている。セルフとベーシックの差は年11,000円で、改定でいちばん大きく上がったのもベーシックだった。人件費がかかる部分にだけ価格を寄せ、ソフトそのものは安く保つ組み立てとみられる。MM総研の調査は、会計ソフト事業者が期間限定の無料キャンペーンなどで利用のハードルを下げていると書く。弥生はその無料期間を丸1年とり、決済方法の登録を条件にして2年目の自動更新へつなげている。この入口は、調査で51.0%を占めるインストール型の利用者をクラウドへ移す入口の役目も負っていると推測される。
:::

:::fact
KKRの発表（2022-03-01）によれば、KKRは同日、オリックスが持つ弥生の株式の取得を完了した。発表は弥生を1978年創業で、「弥生シリーズ」の登録ユーザーは250万超と紹介し、KKRが海外で培ったソフトウェアやクラウド・SaaS分野の投資実績を生かして新たな成長ステージに貢献したいとしている。MM総研によれば、弥生はその後の2025年4月8日に、AIによる勘定科目の自動仕訳などを備えた法人向けの「弥生会計 Next」を出した。
:::

登録ユーザーは2022年の250万超から350万超へ増え、クラウドの首位は11年続いている。弥生はそれを、機能ではなくサポートの厚さで値段を分け、1年目を0円にする料金表で守ってきた。ASP.NETで動くとみられる申告アプリの横で、新しい世代の製品とAIエージェントへの入口が少しずつ開き始めている。その入口が申告アプリに届いたとき、半分のシェアを持つ顧客基盤がどう動くかが次の見どころになる。
