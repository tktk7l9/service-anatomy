---
service: "Sansan"
title: "名刺の会社が、請求書で伸びている — 売上高537億円・過去最高益、AIと人の手で紙をデータに変え、製品ごとにAWS・Azure・Google Cloudを使い分けるSansanを解剖する"
description: "名刺管理から始まったSansan株式会社は、2026年5月期に売上高537億6,100万円（前期比+24.4%）、調整後営業利益84億2,700万円（同+137.0%）で過去最高益を出した。主力の「Sansan」は契約1万2,199件、直近12か月平均の月次解約率0.55%。2020年に始めた経理AXサービス「Bill One」はARR147億8,200万円（同+34.9%）まで伸び、会社は2027年5月期の通期黒字化を見込む。料金は公開せず、従業員規模や請求書の件数で決まるエディション制で売る。公式の技術スタックのページ、技術ブログ、決算短信と決算説明資料、製品サイト、当サイトの実観測から、製品ごとにPostgreSQL・Kotlin・Ruby on Rails・Azureを使い分ける構成、AIと人の手を組み合わせて紙をデータにする仕組み、名刺の会社が経理と契約へ広がる稼ぎ方までを解剖する。"
lead: "Sansanの決算説明資料には、いまも「アナログからデジタル」という言葉が載っている。名刺、請求書、契約書。紙で届く情報をAIが読み、人が確かめ、データベースに変える。2007年に名刺管理から始まった会社は、2026年5月期に売上の4分の1を請求書受領のBill Oneで稼ぐようになり、生成AIの時代に「各社固有のデータ」の価値を売り直そうとしている。その作りと稼ぎ方を、公開情報だけで解剖する。"
category: saas
tags: [saas, b2b, ai, accounting, aws, azure, google-cloud, postgres]
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastVerified: "2026-10-07"
serviceUrl: "https://jp.sansan.com/"
# Affiliate link placeholder: no public affiliate program for Sansan, Bill One or Eight was found
# (checked 2026-10-07). Bill One runs a partner program for companies by inquiry
# (https://bill-one.com/partner-program/: referral partners who introduce customers, and resellers
# who buy at wholesale prices), not a self-serve tracked-link program. Leave this block commented
# out unless the owner joins one. Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<sansan-referral-link>"
#   program: "Sansan"
vendor: "Sansan株式会社"
origin: "JP"
heroTheme: "sansan"
scores: { product: 4.0, ux: 3.5, tech: 4.0, business: 4.5 }
techStack:
  - layer: "データベース（Sansan）"
    name: "PostgreSQL (PostgreSQL 17, multi-tenant)"
    confidence: confirmed
    evidence: "公式技術ブログ（2026-09-09）に「2026年9月現在、SansanはDBにPostgreSQL 17を使用しています」と明記。1万社以上が使い、数億件規模の名刺を扱うマルチテナントのアプリケーションで、部署単位のアクセス権限を展開するビューが人物詳細画面のボトルネックだったと説明している"
    evidenceUrl: "https://buildersbox.corp-sansan.com/entry/2026/09/09/130000"
  - layer: "アプリケーション（Bill One）"
    name: "Kotlin + Ktor + Google Cloud Run"
    confidence: confirmed
    evidence: "公式技術ブログ（2026-02-04、Bill One開発Unitのブログリレー）が、検証環境を「Cloud Runで稼働するKtorのアプリケーション」とし、基本的に本番環境で動作しているコードを例にすると明記。OpenTelemetryで非同期処理を計装した知見を説明している"
    evidenceUrl: "https://buildersbox.corp-sansan.com/entry/2026/02/04/100000"
  - layer: "非同期処理（Bill One）"
    name: "Google Cloud Pub/Sub + Google Cloud Tasks"
    confidence: confirmed
    evidence: "同じ記事が、Ktor + Pub/Sub環境でのコンテキスト伝搬を解説し、過去の登壇として「Ktor + Google Cloud Tasks/PubSub におけるOTel Messaging計装の実践」を挙げている"
    evidenceUrl: "https://buildersbox.corp-sansan.com/entry/2026/02/04/100000"
  - layer: "アプリケーション（Eight）"
    name: "Ruby on Rails + Amazon ECS + Amazon SQS (AWS)"
    confidence: confirmed
    evidence: "公式技術ブログ（2025-12-20）に、Eightは2012年のローンチから長らくAWSを使い、EC2上のDelayedJobやwheneverで動かしていたバッチと非同期ジョブを、ECS + Active Job + SQSとEventBridge Scheduler + ECS Run Taskに移し、スケジュール定義をTerraformで管理するようにしたと明記"
    evidenceUrl: "https://buildersbox.corp-sansan.com/entry/2025/12/20/100000"
  - layer: "データ連携（Sansan Data Hub）"
    name: "Microsoft Azure (Azure SQL Database Hyperscale / Azure Cosmos DB, C#)"
    confidence: confirmed
    evidence: "公式技術ブログ（2024-08-30）のイベントレポートに、データ連携ソリューションのSansan Data Hubが一部サービスでAzure SQL Database Hyperscaleを使い、データ連携の結果をAzure Cosmos DBにログとして保存していると明記。今後もC#やAzureに関連したイベントを開催するとも書いている"
    evidenceUrl: "https://buildersbox.corp-sansan.com/entry/2024/08/30/143000"
  - layer: "データ化の作業基盤"
    name: "BigQuery + Google Cloud Pub/Sub (BigQuery subscription)"
    confidence: confirmed
    evidence: "公式技術ブログ（2026-03-18）に、名刺や請求書をAIの自動処理と人の検証・補正（Human-in-the-loop）でデータ化し、AWSかGoogle Cloud上の10を超えるデータ化システムの作業実績を、データ基盤hydraがBigQueryに集める構成（ニアリアルタイムはPub/SubのBigQuery subscription、日次はCloud StorageとCloud Workflows）と明記"
    evidenceUrl: "https://buildersbox.corp-sansan.com/entry/2026/03/18/100000"
  - layer: "全社の技術スタック"
    name: "AWS / Microsoft Azure / Google Cloud / Cloudflare"
    confidence: confirmed
    evidence: "技術本部の採用サイトの「技術スタックについて」（2026/04時点）に、インフラ・プラットフォームとしてAWS、Azure、Cloudflare、Google Cloud、Kubernetes、Terraformなど、各プロダクトに相応しい技術を選定してチームが自律的に意思決定すると明記"
    evidenceUrl: "https://media.sansan-engineering.com/tech-stack"
  - layer: "製品サイトの配信"
    name: "Cloudflare + Amazon CloudFront + Amazon S3"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-07）で、jp.sansan.com と 8card.net は server: cloudflare に加えて via: CloudFront と x-amz-version-id を返し、bill-one.com は server: AmazonS3 と CloudFront を返した。コーポレートサイトの jp.corp-sansan.com は Cloudflare と x-kinsta-cache を返した"
sources:
  - label: "Sansan株式会社: 会社概要"
    url: "https://jp.corp-sansan.com/company/info"
    accessedAt: "2026-10-07"
  - label: "Sansan株式会社: 2026年5月期 通期 決算説明資料（2026-07-13）"
    url: "https://data.swcms.net/file/corp-sansan-ir/dam/jcr:e3811c8d-1eeb-4dfb-adf5-d5c2dcc45991/140120260713592190.pdf"
    accessedAt: "2026-10-07"
  - label: "Sansan株式会社: 2026年5月期 決算短信〔日本基準〕（連結）（2026-07-13）"
    url: "https://data.swcms.net/file/corp-sansan-ir/dam/jcr:11e809c9-01a3-43d2-91b6-641802080ac9/140120260713592192.pdf"
    accessedAt: "2026-10-07"
  - label: "Sansan 技術本部 採用情報: 技術スタックについて（2026/04時点）"
    url: "https://media.sansan-engineering.com/tech-stack"
    accessedAt: "2026-10-07"
  - label: "Sansan Tech Blog: マルチテナントアプリケーションのクエリチューニング実例（2026-09-09）"
    url: "https://buildersbox.corp-sansan.com/entry/2026/09/09/130000"
    accessedAt: "2026-10-07"
  - label: "Sansan Tech Blog: Google Cloud Pub/Sub利用時における分散トレーシングの断絶を防ぐコンテキスト伝搬手法（2026-02-04）"
    url: "https://buildersbox.corp-sansan.com/entry/2026/02/04/100000"
    accessedAt: "2026-10-07"
  - label: "Sansan Tech Blog: EightからEC2インスタンスを撲滅した話（2025-12-20）"
    url: "https://buildersbox.corp-sansan.com/entry/2025/12/20/100000"
    accessedAt: "2026-10-07"
  - label: "Sansan Tech Blog: Sansanのデータ化オペレーションを支えるデータ基盤hydra（2026-03-18）"
    url: "https://buildersbox.corp-sansan.com/entry/2026/03/18/100000"
    accessedAt: "2026-10-07"
  - label: "Sansan Tech Blog: Azure PaaSを使った大規模BtoBプロダクト開発と運用の舞台裏 -データベースサービス編-（2024-08-30）"
    url: "https://buildersbox.corp-sansan.com/entry/2024/08/30/143000"
    accessedAt: "2026-10-07"
  - label: "Bill One: 価格・料金体系（Bill One請求書受領）"
    url: "https://bill-one.com/ap/plan/"
    accessedAt: "2026-10-07"
  - label: "Bill One: パートナープログラム"
    url: "https://bill-one.com/partner-program/"
    accessedAt: "2026-10-07"
---

Sansanは、名刺をスキャンするだけで、社内の誰が誰と会ったかを全社で共有できるようにした法人向けのサービスだ。いまは名刺だけでなくメールや商談のメモ、企業情報までを載せる「ビジネスデータベース」を名乗る。同じ会社は、請求書をまとめて受け取ってデータにする「Bill One」、契約書を扱う「Contract One」、個人向けの名刺アプリ「Eight」も手がける。当サイトが解剖した[SmartHR](/ja/articles/smarthr)や[freee](/ja/articles/freee)と同じく、紙と手作業が残る国内の業務をクラウドに移すSaaSだが、Sansanの特徴は、紙をデータに変える作業そのものを自社で抱えている点にある。

## サービス解説

Sansan株式会社は、営業向けの「Sansan」、経理向けの「Bill One」、取引管理の「Contract One」、データクオリティマネジメントの「Sansan Data Intelligence」を法人に売り、名刺アプリの「Eight」を個人と法人に提供する。会社はこれらをまとめて「働き方を変えるAXサービス」と呼ぶ。

:::fact
会社概要（2026-10-07時点）によれば、Sansan株式会社は2007年6月11日設立、本社は東京都渋谷区桜丘町の渋谷サクラステージ、代表取締役社長／CEOは寺田親弘氏で、従業員は2026年5月31日時点で単体2,077名・連結2,336名。2026年5月期の決算説明資料によれば、「Sansan」の提供は2007年に始まり、2020年5月期に東証マザーズに上場、同期に「Bill One」の提供を始め、2022年5月期に「Contract One」を始めて東証プライム市場に移った（証券コード4443）。同じ資料は、2026年5月期の売上高に占める比率を「Sansan」58%、「Bill One」25%、「Contract One」2%、「Eight」13%としている。
:::

:::fact
同じ決算説明資料によれば、「Sansan」の契約件数は2026年5月末で1万2,199件（前年同期比+14.0%）、直近12か月平均の月次解約率は0.55%。会社は、法人向け名刺管理サービス市場で売上高シェア13年連続1位（シード・プランニングの2026年1月の調査）とし、240万件を超える企業情報と20万件の役職者情報を名刺のデータに付け加えていると説明する。Bill Oneの製品サイト（2026-10-07確認）は、有料契約件数を5,000件以上、Bill Oneを通じて請求書をやりとりする「インボイスネットワーク」の参画企業数を約26.8万社、そこでやりとりされる請求書の金額を年約71兆円（2026年5月時点で直近12カ月平均の月次金額を年換算）と掲げる。
:::

:::pull
名刺から始まった会社の売上の4分の1は、いま請求書から来ている。どちらも、紙で届く情報をAIと人の手でデータに変える同じ仕事だ。
:::

::scorecard

## UX分析

Sansanの体験の中心は、利用者に入力させないことにある。紙を受け取り、読み取り、確かめる手間を会社の側が引き受け、利用者には検索できるデータだけを渡す。

- **受け取りから会社が肩代わりする**。決算説明資料によれば、Bill Oneはあらゆる形式の請求書を利用企業に代わって受け取り、会社の定める条件を満たした場合で精度99.9%、翌営業日中にデータ化する。紙の請求書をスキャンする担当者を社内に置かずに済む一方、データになるまでの速さは、人が確かめる工程の分だけ翌営業日が基準になる。
- **名刺交換の外の接点も集める**。同じ資料によれば、ZoomやMicrosoft Teamsのオンライン会議に参加した相手の情報を名刺交換なしに「Sansan」へ取り込む機能を2026年4月にベータ版で出し、7月に正式版を予定した。社内外の情報をAIでまとめて要約する「AIサーチ」も9月のリリースを予定していた。名刺を起点にした接点の記録を、名刺のない商談にも広げる方向だ。
- **速さを後から取り戻す**。公式技術ブログ（2026-09-09）によれば、「Sansan」はここ1年でPC版の画面のレスポンスタイムを約40%縮めた。記事は人物の詳細画面を例に、部署ごとに細かく決められる閲覧権限の確認が、その人物の名刺を持つ社員だけでなくテナント内の全ユーザーに走っていたことを突き止め、全テナントで目標の速さを満たすためにSQLを書き直した経緯を説明する。導入企業には利用者が数千〜数万人に上る会社もあるという。
- **値段は見えない**。「Sansan」とBill Oneはどちらも料金を公開していない。決算説明資料によれば、「Sansan」は従業員規模（または契約ID数）に応じた固定費用にLite・Standard・Advancedの3つのエディションを重ね、Bill Oneは年間の取引件数に応じた年額費用で、それぞれ初期導入の費用が別にかかる。Bill Oneの料金ページは、ユーザー数や請求書の保存件数による追加料金はないとする。社内の稟議には営業担当の見積もりが欠かせず、小さな会社ほど比べにくいとみられる。

## 技術構成

::techstack

:::fact
技術本部の採用サイトの「技術スタックについて」（2026/04時点）は、Sansanが各プロダクトに相応しい技術を選び、チームが自律的に意思決定できる体制をとっていると書き、バックエンドの言語としてC#、Go、Java、Kotlin、Ruby on Rails、TypeScriptなど、データベースとしてAmazon Aurora、BigQuery、Cloud Spanner、PostgreSQL、MySQLなど、インフラとしてAWS、Azure、Cloudflare、Google Cloud、Kubernetes、Terraformなどを並べる。AI開発ツールにはChatGPT、Claude、CodeRabbit、Cursor、Devin、GitHub Copilotを挙げる。製品ごとの構成は技術ブログから読める。「Sansan」は2026年9月時点でPostgreSQL 17を使うマルチテナントのアプリケーション（2026-09-09）、Bill OneはGoogle CloudのCloud Runで動くKotlinのKtorのアプリケーションで、Pub/SubとCloud Tasksで非同期処理を回す（2026-02-04）。Eightは2012年のローンチから長らくAWSを使い、Ruby on Railsのバッチと非同期ジョブを、EC2からECSとSQS、EventBridge Schedulerへ移した（2025-12-20）。データ連携のSansan Data HubはAzure SQL Database HyperscaleとAzure Cosmos DBを使う（2024-08-30）。
:::

:::fact
公式技術ブログ（2026-03-18）によれば、Sansanは名刺の画像や請求書・契約書のPDFを、AIによる自動処理と、オペレーターと呼ぶ人の検証・補正を組み合わせる「Human-in-the-loop」でデータにしている。この作業を担うDigitization部は10を超えるシステムを開発・運用し、社内のオペレーターに加えて一部の作業を外部のパートナー企業に委託している。名刺のデータ化は継続的に大量の処理が発生し、請求書は月初に集中して短い納期が求められるため、システムをまたいで人を配置し直す必要があった。そこでAWSかGoogle Cloud上の各システムから作業の開始・完了・正誤判定のイベントを集め、BigQueryに入れる基盤hydraを作った。ニアリアルタイムの経路はPub/SubのBigQuery subscriptionで数秒以内に集計でき、日次の経路はCloud StorageとCloud Workflowsでバックフィルし、外部パートナーへの支払い額の計算にも使う。決算説明資料は、会社のサービスでデータ化したアナログ情報の件数を2025年5月期で2.7億件、2030年5月期の目標を5億件としている。当サイトの実観測（2026-10-07）では、jp.sansan.com と 8card.net はCloudflareの先にCloudFrontとS3を置いた構成、bill-one.com はCloudFrontとS3を返し、コーポレートサイトの jp.corp-sansan.com はCloudflareとKinstaのキャッシュのヘッダを返した。
:::

:::guess
製品ごとにクラウドと言語が違うのは、各製品が生まれた時期の選択がそのまま残っているためとみられる。2012年にローンチしたEightはAWSとRails、2020年に始まったBill OneはGoogle CloudとKotlin、データ連携はAzureとC#という組み合わせは、全社で1つの基盤に揃えるより、製品ごとのチームに選ばせる方針と整合的だ。一方で、紙をデータに変えるオペレーションは製品をまたいで同じ人とシステムで回しており、hydraがAWSとGoogle Cloudの両方から作業実績を集めてBigQueryに揃えるのは、この「人の手の部分」を全社で最適化するためと推測される。Sansanの差は特定の技術より、AIの読み取りと人の確認を組み合わせて精度を保証する運用の規模にあるとみられる。
:::

## 生成AIの時代に売り直す「データ」

:::fact
2026年5月期の決算説明資料は、成長戦略の最初に「ビジネスシーンで生成AIの価値を最大限引き出すには、各社固有のデータが極めて重要」と書き、Sansanのサービスを使えば業務を効率化しながら質の高いビジネスデータを作り、ためられると説明する。「Sansan」はAI機能を含む新機能をStandardエディションに載せる新料金プランに移り、Bill Oneは請求書の明細と納品・検収データを突き合わせる「AI自動照合」（2025年11月から提供）、勘定科目や税率の判断を学ぶ「AI自動起票」（2026年6月から）、条件に沿って定型の承認を自動にする「自動承認」（2026年9月予定）を加え、3エディション制に料金を改めた。Contract Oneは、過去の契約データを基に自社基準で契約書をレビューできるようにする「MCPサーバー」を含む「法務AXソリューション」の提供を始め、つなぐ先としてChatGPT、Microsoft Copilot、Claudeを図示している（対応できる汎用の生成AIサービスは検証中と注記）。
:::

:::guess
名刺や請求書をデータにする仕事は、生成AIが文字を読めるようになるほど、それ自体の値打ちが下がる心配がある。Sansanはその逆を主張し、AIが読み取りを担うほど、人が確かめて誤りのないデータを全社でためていること、そしてそのデータを外のAIにMCPで渡せることを価値として売り直そうとしているとみられる。AIの機能を上位ではなくStandardエディションに入れ、上位版への移行で客単価を上げる設計は、AIを追加料金の対象にするより、データを使う場面を増やして契約を太らせる狙いと読める。
:::

## ビジネスモデル

稼ぎ方は、法人に年単位で契約してもらうストック型の課金だ。成熟した「Sansan」で利益を出し、その利益をBill OneやContract Oneの成長に回す形を、会社自身が説明している。

:::fact
決算短信と決算説明資料（2026-07-13）によれば、2026年5月期の売上高は537億6,100万円（前期比+24.4%）、調整後営業利益は84億2,700万円（同+137.0%、利益率15.7%）、営業利益は81億8,500万円、親会社株主に帰属する当期純利益は67億7,800万円で、過去最高益だった。ARRは499億8,200万円（同+20.2%）。「Sansan」の売上高は310億8,900万円（同+16.2%）で、契約当たりの月次ストック売上高は同1.0%減ったが、中小規模の会社の獲得が進んで契約件数が伸びた。Bill Oneの売上高は136億7,900万円（同+39.7%）、ARRは147億8,200万円（同+34.9%）、有料契約件数は同31.9%増え、赤字は16億2,700万円まで縮んだ（前期から37億2,300万円改善）。Eight事業の売上高は67億2,000万円（同+33.0%）で、そのうち法人向けが62億7,400万円。広告宣伝費は67億7,000万円（同+32.6%）だった。資料が示すサービス別の調整後営業利益率は、「Sansan」38.9%、Eight 3.5%、Bill One −11.9%、Contract One −184.9%。
:::

:::fact
同じ資料によれば、2027年5月期の会社見通しは売上高637億600万〜653億1,900万円（前期比+18.5〜21.5%）、調整後営業利益127億4,100万〜146億9,600万円（利益率20.0〜22.5%）で、Bill Oneの通期黒字化を見込む。2027年5月期から2029年5月期までの3年間の売上高の年平均成長率の方針は16〜20%、2029年5月期の調整後営業利益率の方針は25〜30%で、長期的には40%以上を目指す。2026年5月期に初めて配当（期末2.5円）を出し、2026年5月20日から6月18日にかけて約20億円の自己株式を取得した。Bill Oneの製品サイトは、顧客を紹介するだけの「取次パートナー」と、仕切り価格で仕入れて再販する「再販パートナー」の2つのパートナープログラムを案内する。
:::

:::guess
Sansanの稼ぎ方は、利益率38.9%の「Sansan」が、赤字のBill OneとContract Oneを育てる資金を出す形とみられる。Bill Oneの黒字化が見えた2026年に、会社が初配当と自社株買いを始め、中期で利益率25〜30%を掲げたのは、成長への投資と株主への還元を両立できる段階に入ったと示す狙いと読める。一方で、主力の「Sansan」は契約当たりの単価が少し下がっており、中小企業へ広げるほど1件あたりの売上は小さくなる。AI機能をStandardエディションに入れて上位版への移行を促すのは、この単価の下押しを機能で押し返すための手と推測される。
:::

名刺をスキャンするだけの道具として始まったSansanは、19年かけて、紙で届くあらゆる取引の情報をAIと人の手でデータに変える会社になった。売上の4分の1は請求書から生まれ、その請求書のデータが年約71兆円分の取引を映している。製品ごとにクラウドも言語も違うが、共通しているのは、AIが読み、人が確かめるという地味な工程だ。生成AIが紙を読めるようになった時代に、その工程で作った正確なデータこそが価値だと言い切れるかどうかが、次の3年の数字に表れる。
