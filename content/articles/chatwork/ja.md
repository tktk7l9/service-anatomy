---
service: "Chatwork"
title: "導入100.4万社・登録823万ID・課金84.9万ID、ARPUは734.5円で前年比+1.8%、伸びているのはチャットの外の+84% — 社名をkubellに変えてチャットを業務代行の入口にしたChatworkを解剖する"
description: "2011年に始まった国産ビジネスチャットChatworkは、2026年6月末で導入社数100.4万社、登録ID823.1万、課金ID84.9万に達し、有料ユーザーの97%が中小企業だ。運営会社は2024年にChatwork株式会社から株式会社kubellへ社名を変え、チャット経由で経理や労務を請け負うBPaaS「タクシタ」に軸足を移した。2026年12月期第2四半期の売上高は26億8,900万円（前年同期比+17.1%）で、Chatworkを含むSaaSドメインは+5.0%、BPaaSドメインは+84.0%。料金はフリーが閲覧40日まで、スタンダードが年間契約で1ユーザー月700円（税抜）、プロフェッショナルが同1,200円で、2026年8月にプラン名を改めた。決算説明資料、会社紹介資料、公式の料金ページと販売パートナーのページ、エンジニアブログkubell Creator's Note、GitHub、当サイトの実観測から、PHPとScalaとGoが並ぶ基盤、課金IDが伸び悩むなかでARPUを上げてきた値付け、チャットを業務の受注窓口に変える事業の組み替えまでを解剖する。"
lead: "Chatworkを含むSaaSドメインの売上は、もうkubellの売上の76%にすぎない。2026年4〜6月、そのSaaSドメインの売上は前年同期比で5.0%しか伸びず、チャット経由で業務を請け負うBPaaSドメインは84.0%伸びた。2024年にChatworkという社名を捨てた会社は、823万IDのチャットを、商品ではなく「業務を受け付ける窓口」として使い始めている。その組み替えが料金表と技術と決算にどう現れているかを、公開情報だけで解剖する。"
category: saas
tags: [business-chat, small-business, b2b, bpaas, scala, php, kubernetes, ai]
publishedAt: "2026-10-06"
updatedAt: "2026-10-06"
lastVerified: "2026-10-06"
serviceUrl: "https://go.chatwork.com/ja/"
# Affiliate link placeholder: the official site shows only a reseller program (distributors and
# sales partners at https://go.chatwork.com/ja/partner/, checked 2026-10-06), not a consumer
# affiliate program. A third-party affiliate directory reports a Chatwork paid-plan program on
# A8.net, which this site could not verify without an ASP account. If the owner joins one,
# copy the ad code as provided (url, impressionUrl and the material's exact text as label).
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://px.a8.net/<chatwork-material>"
#   program: "Chatwork"
vendor: "株式会社kubell（旧Chatwork株式会社）"
origin: "JP"
heroTheme: "chatwork"
scores: { product: 4.0, ux: 4.0, tech: 4.0, business: 4.0 }
techStack:
  - layer: "メッセージ基盤"
    name: "Scala + Akka + Apache Kafka + HBase (Falcon)"
    confidence: confirmed
    evidence: "kubell Creator's Note（2020-12-10）の「ChatworkのScalaプロダクトとそれを支えるチーム その壱」に、メッセージの投稿と読み出しで事前条件をチェックしてから永続化するシステムFalconが、HBase・Kafka・Akka・Akka HTTP・Akka Streams・Kafka Streams・Circeで作られていると明記"
    evidenceUrl: "https://creators-note.chatwork.com/entry/2020/12/10/113000"
  - layer: "周辺のScalaサービス"
    name: "Webhook (Aurora) / OAuth server (Aurora, ElastiCache, SQS) / Reaction (DynamoDB) / Search indexing (Amazon Elasticsearch Service)"
    confidence: confirmed
    evidence: "同記事に、外部へイベントを配るWebhook（Kafka・Amazon Aurora・Alpakka Kafka・ScalikeJDBC）、RFC 6749準拠の認可サーバー（Aurora・ElastiCache・SQS・S3）、リアクションの永続化（DynamoDB）、メッセージ検索のインデックス作成Biryani（Kafka・Amazon Elasticsearch Service）、AWS LambdaでGraalVMのネイティブイメージを動かすリンクプレビューが並ぶ"
    evidenceUrl: "https://creators-note.chatwork.com/entry/2020/12/10/113000"
  - layer: "Webアプリケーション（従来部分）"
    name: "PHP (legacy monolith)"
    confidence: confirmed
    evidence: "kubell Creator's Note（2020-11-18）の「PHPのレジェンドシステムをEC2からKubernetesに移行する話 その3」が、PHPのシステムをEC2からKubernetesに移したこと、当時のクラスターで動くアプリケーションはScalaが6つ、PHPが6つの計12だったことを説明。当サイトの実観測（2026-10-06）でも、www.chatwork.com は /login.php へリダイレクトした"
    evidenceUrl: "https://creators-note.chatwork.com/entry/2020/11/18/140000"
  - layer: "実行基盤"
    name: "Amazon EKS (ap-northeast-1, multi-tenant single cluster, Blue/Green upgrades) + Cluster Autoscaler"
    confidence: confirmed
    evidence: "2020-11-18の記事に、EKSでテスト・ステージング・本番を1つのマルチテナントクラスターに載せ、だいたい3カ月に1度、新しいクラスターを作って移すBlue/Greenで更新する方針と明記。2023-12-09の記事は、eksctlで構築し、ap-northeast-1のAZごとにノードを定義し、Karpenterを試したうえで採用せず、Cluster Autoscalerとバルーン用のPodで余力を確保していると書く"
    evidenceUrl: "https://creators-note.chatwork.com/entry/2023/12/09/090000"
  - layer: "API境界（2026年）"
    name: "Facade API (GraphQL server in Go) + go-arch-lint"
    confidence: confirmed
    evidence: "kubell Creator's Note（2026-06-29）の「モノリスからマイクロサービスへの過渡期をソフトウェアで構造化する」に、長年積み上がったモノリスからドメインごとのマイクロサービスへ段階的に移る途中で、入口となるFacade APIがGoで書かれたGraphQLサーバーであり、将来切り出すドメインのロジックをその中の microservices/ に置き、go-arch-lintで依存の向きを機械的に守っていると明記"
    evidenceUrl: "https://creators-note.chatwork.com/entry/2026/06/29/160816"
  - layer: "AIクライアント向けの入口"
    name: "Chatwork MCP Server (TypeScript, MIT) + Chatwork API (RAML)"
    confidence: confirmed
    evidence: "GitHubの chatwork/chatwork-mcp-server（2026-10-06時点・API）は「ChatworkをAIから操作するためのMCPサーバー」と説明され、主言語TypeScript・MIT・スター48・2025年3月作成・2026年10月2日にpush。chatwork/api は公開APIの定義をRAMLで置く公式リポジトリ（スター84）"
    evidenceUrl: "https://github.com/chatwork/chatwork-mcp-server"
  - layer: "配信"
    name: "Fastly (go.chatwork.com) / Amazon CloudFront + nginx (www.chatwork.com)"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-06）で、go.chatwork.com は server: nginx、via: 1.1 varnish と、Fastlyの応答に特有の x-served-by: cache-nrt-… と x-timer を返した。アプリ側の www.chatwork.com は server: nginx と via: CloudFront（x-amz-cf-pop: NRT57）を返した"
sources:
  - label: "株式会社kubell: 2026年12月期 第2四半期 決算説明資料（2026-08-14）"
    url: "https://contents.xj-storage.jp/xcontents/AS04681/c5c169ad/7c90/4228/b376/4749c88551d5/140120260814520629.pdf"
    accessedAt: "2026-10-06"
  - label: "株式会社kubell: 2026年12月期 第2四半期（中間期）決算短信（2026-08-14）"
    url: "https://contents.xj-storage.jp/xcontents/AS04681/cd3eb060/4277/4202/97c6/c1179a9d3a9c/140120260814520626.pdf"
    accessedAt: "2026-10-06"
  - label: "株式会社kubell: 会社概要・中期経営計画のご紹介"
    url: "https://www.kubell.com/document/ir/kubell_introduction.pdf"
    accessedAt: "2026-10-06"
  - label: "Chatwork公式: 料金プラン"
    url: "https://go.chatwork.com/ja/price/"
    accessedAt: "2026-10-06"
  - label: "Chatwork公式: 販売パートナー"
    url: "https://go.chatwork.com/ja/partner/"
    accessedAt: "2026-10-06"
  - label: "kubell Creator's Note: ChatworkのScalaプロダクトとそれを支えるチーム その壱（2020-12-10）"
    url: "https://creators-note.chatwork.com/entry/2020/12/10/113000"
    accessedAt: "2026-10-06"
  - label: "kubell Creator's Note: PHPのレジェンドシステムをEC2からKubernetesに移行する話 その3（2020-11-18）"
    url: "https://creators-note.chatwork.com/entry/2020/11/18/140000"
    accessedAt: "2026-10-06"
  - label: "kubell Creator's Note: 2023年度版！Chatwork流Kubernetesの運用方法（2023-12-09）"
    url: "https://creators-note.chatwork.com/entry/2023/12/09/090000"
    accessedAt: "2026-10-06"
  - label: "kubell Creator's Note: モノリスからマイクロサービスへの過渡期をソフトウェアで構造化する（2026-06-29）"
    url: "https://creators-note.chatwork.com/entry/2026/06/29/160816"
    accessedAt: "2026-10-06"
  - label: "GitHub: chatwork/chatwork-mcp-server"
    url: "https://github.com/chatwork/chatwork-mcp-server"
    accessedAt: "2026-10-06"
  - label: "GitHub: chatwork/api"
    url: "https://github.com/chatwork/api"
    accessedAt: "2026-10-06"
---

Chatworkは、仕事の連絡をメールからチャットに移すための国産ビジネスチャットだ。グループチャット、タスク、ファイル、ビデオ通話を1つの画面に持ち、社外の人ともつながれる。[サイボウズのkintone](/ja/articles/cybozu-kintone)や[SmartHR](/ja/articles/smarthr)と同じく中小企業の業務の真ん中に入り込んできたが、2024年に運営会社は社名からChatworkを外した。チャットは今、商品であると同時に、業務を請け負う窓口になりつつある。

## サービス解説

Chatworkは2011年に始まり、運営会社は2019年に東証マザーズ（現グロース）に上場した。2024年に株式会社kubellへ社名を変え、チャット経由で経理・労務・総務などを請け負うBPaaS「タクシタ」を新しい柱にしている。

:::fact
kubellの会社紹介資料（2026-10-06時点）によれば、同社は2004年11月11日設立、代表取締役CEOは山本正喜氏、グループ従業員数は824名（2026年6月末）。沿革は、2011年にChatworkをリリース、2015〜2016年に累計18億円を調達、2019年に東証マザーズに上場、2023年にChatwork アシスタント（現タクシタ）をリリース、2024年に株式会社kubellへ社名変更と並ぶ。同資料は、Nielsenの2025年7月の調査（Microsoft Teams、Slack、LINE WORKSを含む44サービスを同社が選定）でChatworkが国内の利用者数1位だとし、有料ユーザーの97%が中小企業だと書く。
:::

:::fact
2026年12月期第2四半期の決算説明資料（2026年8月14日公表）によれば、2026年6月末時点で、kubellグループのサービスの導入社数は100.4万社（前年同期比+7.3%）、Chatworkの登録ID数は823.1万（同+6.2%）、課金ID数は84.9万（同+3.3%）、課金IDあたりの平均単価（ARPU）は734.5円（同+1.8%）だった。課金IDの解約率は、フィッシング詐欺の影響で1.17%に上がったとしている。全社のARR（年間経常収益）は102.3億円（同+17.3%）で、うちSaaSドメインが79.2億円（同+6.4%）、BPaaSドメインが23.1億円（同+80.9%）。
:::

:::pull
登録は823万ID、課金は84.9万ID。チャットの伸びは1桁台で、伸びているのはチャットの向こうで業務を請け負う側だ。
:::

::scorecard

## UX分析

Chatworkの体験は「ITに詳しくない会社でも、社外の人とすぐ話せる」ことに向けられてきた。その同じ入口が、2026年はAIと業務代行の入口にも使われている。

- **無料プランの制限は「過去が読めない」形**。公式の料金ページ（2026-10-06時点）によれば、フリープランは無期限で使えるが、メッセージの閲覧は直近40日以内、ユーザーは1組織100人まで、ストレージは組織で10GB、組織外のコンタクトは1ユーザー20人まで、ビデオ通話は1対1で、広告が表示される。有料プランではメッセージの閲覧、ユーザー数、コンタクト数が無制限になり、通話は14人まで、広告は消える。
- **全員まとめての課金**。同ページは、フリープランから有料プランへのアップグレードは組織内の全ユーザーが対象で、一部のユーザーだけのアップグレードはできないと書く。有料プランは1カ月の無料トライアルがあるが、アップグレード後にフリープランへ戻ることはできない。
- **AIは日常のチャットの中に**。決算説明資料によれば、2026年に未読メッセージのAI要約、AI下書き作成、法改正や制度変更のニュースを集めて届けるAI労働・雇用ニュース、AI解説・分析、AI資料作成をChatworkに入れた。料金ページでは、これらのAI機能はスタンダード以上に含まれる。
- **外のAIからも触れる**。GitHubで公開されている公式のChatwork MCP Server（TypeScript・MIT）を使えば、AIクライアントからChatworkを操作できる。
- **弱点は「チャットの外」への誘導が増えること**。チャットの画面がタクシタや勤怠・人事評価・請求書受取などの入口を兼ねるほど、純粋な連絡ツールとして使う利用者には、案内が増えたと感じられる可能性がある。料金ページの注記は、自社とグループ会社のサービスの案内は広告非表示の対象外だとしている。

## 技術構成

::techstack

:::fact
kubellのエンジニアブログ「kubell Creator's Note」によれば、Chatworkの中核は長くPHPのモノリスで、メッセージまわりはScalaで作り直されてきた。2020年12月10日の記事は、メッセージの投稿と読み出しを担うFalcon（HBase・Kafka・Akka）、外部にイベントを配るWebhook（Kafka・Amazon Aurora）、OAuthの認可サーバー（Aurora・ElastiCache・SQS・S3）、リアクションの永続化（DynamoDB）、メッセージ検索のインデックス作成（Kafka・Amazon Elasticsearch Service）、GraalVMのネイティブイメージをAWS Lambdaで動かすリンクプレビューを並べる。2020年11月18日の記事は、PHPのシステムをEC2からKubernetesに移し、EKSでテスト・ステージング・本番を1つのマルチテナントクラスターに載せ、約3カ月ごとに新しいクラスターを作って移すBlue/Greenで更新すると説明し、当時のアプリケーションはScalaが6つ、PHPが6つだったと書く。2023年12月9日の記事は、Karpenterを試したうえで採用せず、Cluster Autoscalerと低優先度のバルーン用Podでノードの余力を確保する運用を説明している。
:::

:::fact
2026年6月29日の記事によれば、Chatworkは「長年積み上がったモノリスからドメインごとのマイクロサービスへ」段階的に移っている途中で、入口のFacade APIはGoで書かれたGraphQLサーバーだ。マイクロサービスに必要なデプロイの仕組み、認証、監視、SLO、オンコールの体制がまだ揃っていないため、将来切り出すドメインのロジックをFacade APIの中の microservices/ ディレクトリに置き、go-arch-lintで依存の向きを機械的に守っている。当サイトの実観測（2026-10-06）では、紹介サイトの go.chatwork.com は nginx と varnish、Fastlyの応答に付く x-served-by と x-timer を返し、アプリ側の www.chatwork.com は nginx と CloudFront を返して /login.php へリダイレクトした。
:::

:::guess
Chatworkの基盤は、PHPのモノリスを一度に捨てず、メッセージのように量と信頼性が要る部分からScalaとKafkaに移し、2026年は残りをGoのGraphQLの境界の内側で切り分けていく形とみられる。PHP・Scala・Goの3言語が並ぶのは、移行の各段階の地層がそのまま残っているからと読める。マイクロサービスの運用体制が揃うまでFacade APIの中にドメインを「仮置き」する設計は、少人数のSREで多くのアプリケーションを支えるために単一クラスターを選んだ2020年の判断と同じく、運用の手数を増やさないことを優先した選択と推測される。
:::

## ビジネスモデル

収益の柱は2つになった。Chatworkの月額料金を中心とするSaaSドメインと、チャット経由で業務を請け負うBPaaSドメインだ。

:::fact
公式の料金ページ（2026-10-06時点・税抜）によれば、スタンダードは年間契約で1ユーザー月700円、月間契約で月840円、プロフェッショナルは年間契約で月1,200円、月間契約で月1,440円で、最小5ユーザーから。年間契約は「2カ月分お得」と表示される。決算説明資料の「価格・プラン改定の変遷」によれば、2026年8月にビジネスプランをスタンダードプランに、エンタープライズプランをプロフェッショナルプランに改称した。それ以前にも、2022年8月に個人向け有料プランを止め、2022年10月にフリープランのグループチャット数の制限を撤廃して閲覧制限を新設し、2023年7月に既存ユーザーを含む全ユーザーへの新料金を適用し、2024年8月にフリープランの閲覧数制限を撤廃してストレージを増やし、コンタクト数の制限を加えている。
:::

:::fact
同資料によれば、2026年12月期第2四半期（4〜6月）の連結売上高は26億8,900万円（前年同期比+17.1%）で、SaaSドメインが20億4,400万円（同+5.0%）、BPaaSドメインが6億4,500万円（同+84.0%）。EBITDAは4億6,900万円（同+60.6%）、営業利益は2億7,600万円。売上の95%がストック型だ。同社は通期予想を売上高107億6,800万〜109億5,800万円（前年比+13〜15%）、EBITDA15億〜17億円に修正した。2025年12月期の売上高は95億2,900万円、EBITDAは13億7,100万円だった。BPaaSドメインには、タクシタ、勤怠管理、人事評価、請求書受取、郵便受取などのサービスと、2026年4月にグループ入りしたatena社の事業が入る。公式の販売パートナーのページは、ディストリビューターとしてSB C&S、ダイワボウ情報システム、TD SYNNEX、ネットワールドを挙げ、40社超のセールスパートナーを並べる。
:::

:::guess
課金IDが前年同期比+3.3%にとどまるなかで、Chatworkの単価は、全ユーザーへの値上げ（2023年7月）、フリープランの閲覧制限、全員まとめての課金、AI機能の上位プランへの集約によって少しずつ引き上げられてきたとみられる。ただ、ARPUの伸びも+1.8%で、チャット単体で売上を大きく伸ばす余地は小さくなっていると推測される。kubellが「100万社の顧客接点を起点にBPaaSのクロスセルを推進する」と説明しているのは、チャットを「1ID月700円の商品」から「中小企業の業務を受注する窓口」へと位置づけ直す判断と読める。チャットで依頼を受け、裏側をAIとSaaSで処理し、人が仕上げる形なら、1社あたりの単価はチャットの料金とは桁が変わる。
:::

:::guess
その組み替えは、[SmartHR](/ja/articles/smarthr)や[kintone](/ja/articles/cybozu-kintone)のようにソフトウェアを売り続ける道とは違う。業務代行は人手がかかり、ソフトウェアほど利益率が高くなりにくい一方、中小企業にとっては「使い方を覚えなくていい」という分かりやすさがある。社労士向けのAIエージェント事業を独立させた動きは、業務代行で蓄えた手順をAIに置き換え、人手の比率を下げていく方向とみられる。チャットで集めた接点を、AIで利益率を上げた業務代行に流せるかが、社名を変えた会社の次の数年を決めると推測される。
:::

2011年にメールを置き換えるために作られたチャットは、15年で100万社に入り込んだ。会社はその名前を社名から外し、チャットを、業務を受け付ける窓口として使い始めた。PHPの上にScalaを、その上にGoの境界を重ねてきた基盤と同じように、事業もまた、チャットを捨てずにその上に新しい層を重ねている。
