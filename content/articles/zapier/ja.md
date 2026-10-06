---
service: "Zapier"
title: "調達は2012年の130万ドルだけで評価額50億ドル、9,000以上のアプリ、AIの1回の呼び出しは1〜5タスク — すべてを「タスク」という通貨で数えるZapierを解剖する"
description: "2012年にY Combinatorから出た自動化サービスZapierは、9,000以上のアプリをつなぎ、340万社が使い、800人超が40カ国から働く。料金はFreeの月100タスクから、Professional月19.99ドル（年払い・750タスク）、Team月69ドル、Enterpriseまで。2026年6月15日からはAIステップがモデルの階層ごとに1・3・5タスク、MCPのツール呼び出しは2タスクと、新しい機能を「タスク」に換算して売る設計になった。公式の料金ページ、ヘルプセンター、プレスページ、エンジニアリングブログ、GitHub、当サイトの実観測から、タスクという通貨の作り方、Python・Django・RabbitMQ・Kafka・Goの基盤、公開アフィリエイトを持たない販売の形、2026年9月のNext Gen Zapsまでを解剖する。"
lead: "Zapierの料金ページには、ステップごとに「何タスクか」が書いてある。アプリのアクションは1タスク、FilterやFormatterは0タスク、AIのステップは標準モデルなら1、高度なモデルなら3、最上位なら5、外のAIからのMCPツール呼び出しは2。2012年に130万ドルを調達しただけで、2021年に50億ドルの評価額をつけた会社は、新しい機能を出すたびに値札を増やすのではなく、同じ通貨で数え直してきた。通貨は「タスク」だ。その通貨がどう作られ、何を支えているかを、公開情報だけで解剖する。"
category: saas
tags: [automation, no-code, ai, mcp, python, django, kafka, remote-work]
publishedAt: "2026-10-06"
updatedAt: "2026-10-06"
lastVerified: "2026-10-06"
serviceUrl: "https://zapier.com/"
# Affiliate link placeholder: Zapier has no public affiliate program as of 2026-10-06.
# Zapier staff wrote in the community on 2025-01-08 that "Zapier does not currently have an
# affiliate program"; referral rewards exist only inside the Solution Partner Program
# (https://zapier.com/l/solution-partner, consultants and agencies) and an invitation-only
# Ambassador/Affiliate program run on PartnerStack (terms posted 2025-01-17 at
# https://zapier.com/legal/ambassador-affiliate-terms, rates stated only inside the portal).
# Leave this block commented out until the owner is accepted into one of those programs.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<zapier-partnerstack-referral-link>"
#   program: "Zapier Ambassador & Affiliate Program"
vendor: "Zapier, Inc."
origin: "US"
heroTheme: "zapier"
scores: { product: 4.5, ux: 4.0, tech: 4.0, business: 4.0 }
techStack:
  - layer: "バックエンドの言語・フレームワーク"
    name: "Python / Django / Celery"
    confidence: confirmed
    evidence: "公式ブログ（2012-01-27・共同創業者Bryan Helmig）に「バックエンドはPython/Django、フロントはJS/Backbone」と明記。2016-03-02の「Automating billions of tasks」は「バックエンドの大半をPythonが動かし、フレームワークはDjango」「Celeryは分散ワークフローエンジンの大きな部分」と書く。2022-02-03のKEDAの記事も「Pythonで書かれたワーカーはブロッキングI/Oが多い」と述べている"
    evidenceUrl: "https://zapier.com/blog/automating-billions-of-tasks/"
  - layer: "ワークフロー実行のキュー"
    name: "RabbitMQ + Kubernetes (KEDA autoscaling)"
    confidence: confirmed
    evidence: "公式ブログ（2022-02-03）に「RabbitMQはZapierのZap処理の心臓部。Zapの各ステップごとにRabbitMQへメッセージを入れ、Kubernetes上のバックエンドワーカーが消費する」と明記し、キューの長さでワーカーをスケールするためにKEDAを採用したと書く"
    evidenceUrl: "https://zapier.com/blog/keda-at-zapier/"
  - layer: "イベント基盤"
    name: "Apache Kafka (managed on AWS) + Go (events API) + SQLite (local outbox)"
    confidence: confirmed
    evidence: "公式ブログ（2026-03-30）に「AWS上でとても大きなマネージドKafkaクラスターを動かしている」「イベントAPIサービスはGoで書かれKubernetesにデプロイ」「Avro形式でスキーマレジストリに対して検証」と明記し、Kafka停止中も受け付けを続けるためにSQLiteのローカルDBをアウトボックスにした設計を説明。2025-10-31の記事はgRPCのサイドカーでKafkaへの接続数を10分の1にしたと書く"
    evidenceUrl: "https://zapier.com/blog/lessons-from-using-outbox-pattern-at-scale/"
  - layer: "データストア・検索"
    name: "PostgreSQL / Elasticsearch / Amazon S3"
    confidence: confirmed
    evidence: "公式ブログ（2021-10-11・Zap Historyページのアーキテクチャ）に、DjangoのWebアプリの裏に「PostgreSQLデータベース、Elasticsearchクラスター」があり、Zapの実行データは「Amazon S3」に置き、社内に「Kafkaクラスター」もあると明記"
    evidenceUrl: "https://zapier.com/blog/the-architecture-behind-zap-history-pages/"
  - layer: "フロントエンド・公開サイト"
    name: "Next.js + Apollo (BFF on Kubernetes) / Vercel + Amazon CloudFront (zapier.com) / Contentful"
    confidence: confirmed
    evidence: "公式ブログ（2021-10-11）に「Zap HistoryのUIを配信するNext.jsのサービスをKubernetesクラスターにデプロイ」「Apollo ServerとNext.jsのAPIルートでBFFを構成」と明記。当サイトの実観測（2026-10-06）で、zapier.com の応答は server: Vercel と x-nextjs-prerender: 1 を返し、via ヘッダにCloudFrontが付き、Content-Security-Policyの frame-ancestors に app.contentful.com が含まれていた。/blog/ は CloudFront、help.zapier.com は Cloudflare の後ろにあった"
    evidenceUrl: "https://zapier.com/blog/the-architecture-behind-zap-history-pages/"
  - layer: "クラウド基盤"
    name: "AWS (US regions, EC2 / VPC / RDS / Lambda)"
    confidence: confirmed
    evidence: "公式のSecurity & Complianceページに「米国のAWSでのエンタープライズ級ホスティング」と明記。2016-03-02の公式ブログは「EC2とVPCが中心」「可能ならRDS」「パートナーやユーザーのコードはAWS Lambdaで実行」と書き、2017年7月の追記でKubernetesによるコンテナのオーケストレーションを展開中と書いている"
    evidenceUrl: "https://zapier.com/security-compliance"
  - layer: "連携の開発キット"
    name: "Zapier Platform CLI / Core / Schema (JavaScript, npm)"
    confidence: confirmed
    evidence: "GitHubの zapier/zapier-platform（2026-10-06時点）は主言語JavaScript（約2.27MB、TypeScript約143KB）、スター556、2019年6月作成、最終pushは2026年10月5日で、「Zapierで連携を作るためのツールキット」と説明。cli・core・schema・legacy-scripting-runner のパッケージをモノレポで持つ"
    evidenceUrl: "https://github.com/zapier/zapier-platform"
  - layer: "AIクライアント向けの入口"
    name: "Zapier MCP (hosted, 2 tasks per tool call) + Zapier SDK (beta) + llms.txt"
    confidence: confirmed
    evidence: "公式のMCPページに「Zapier MCPはすべてのZapierプランに含まれ、ツール呼び出し1回でZapと同じ枠から2タスクを使う」「9,000以上のアプリと66,000以上のトリガーとアクションから選ぶ」と明記。料金ページのFAQはSDKをベータ期間中は無料とする。当サイトの実観測（2026-10-06）で、zapier.com の link ヘッダに actions.zapier.com のOpenAPI定義（rel=service-desc）、docs.zapier.com/sdk/reference、/llms.txt が並んでいた"
    evidenceUrl: "https://zapier.com/mcp"
sources:
  - label: "Zapier公式: Pricing"
    url: "https://zapier.com/pricing"
    accessedAt: "2026-10-06"
  - label: "Zapier公式: Task usage rates（ステップ別のタスク数）"
    url: "https://zapier.com/pricing/rates"
    accessedAt: "2026-10-06"
  - label: "Zapierヘルプセンター: How is task usage measured in Zapier?（2026-08-21更新）"
    url: "https://help.zapier.com/hc/en-us/articles/8496196837261-How-is-task-usage-measured-in-Zapier"
    accessedAt: "2026-10-06"
  - label: "Zapierヘルプセンター: AI by Zapier: new model-based pricing starting June 15, 2026（2026-08-12更新）"
    url: "https://help.zapier.com/hc/en-us/articles/46597632373389-AI-by-Zapier-new-model-based-pricing-starting-June-15-2026"
    accessedAt: "2026-10-06"
  - label: "Zapierヘルプセンター: How pay-per-task billing works in Zapier（2026-08-15更新）"
    url: "https://help.zapier.com/hc/en-us/articles/15279018245901-How-pay-per-task-billing-works-in-Zapier"
    accessedAt: "2026-10-06"
  - label: "Zapier公式: Press（会社の数字）"
    url: "https://zapier.com/press"
    accessedAt: "2026-10-06"
  - label: "Zapier公式: About"
    url: "https://zapier.com/about"
    accessedAt: "2026-10-06"
  - label: "Zapier公式ブログ: Zippity Zappity, Zapier Launches Publicly（2012-06-20）"
    url: "https://zapier.com/blog/zippity-zappity-zapier-launches-publicly/"
    accessedAt: "2026-10-06"
  - label: "Zapier公式ブログ: Zapier's Tech Stack（2012-01-27）"
    url: "https://zapier.com/blog/zapier-tech-stack/"
    accessedAt: "2026-10-06"
  - label: "Zapier公式ブログ: Automating billions of tasks（2016-03-02）"
    url: "https://zapier.com/blog/automating-billions-of-tasks/"
    accessedAt: "2026-10-06"
  - label: "Zapier公式ブログ: The architecture behind Zap History pages（2021-10-11）"
    url: "https://zapier.com/blog/the-architecture-behind-zap-history-pages/"
    accessedAt: "2026-10-06"
  - label: "Zapier公式ブログ: How Zapier uses KEDA to scale its backend workers（2022-02-03）"
    url: "https://zapier.com/blog/keda-at-zapier/"
    accessedAt: "2026-10-06"
  - label: "Zapier公式ブログ: Reducing Kafka connections by 10x with a sidecar pattern（2025-10-31）"
    url: "https://zapier.com/blog/reducing-kafka-connections-sidecar/"
    accessedAt: "2026-10-06"
  - label: "Zapier公式ブログ: Lessons from using the outbox pattern at scale（2026-03-30）"
    url: "https://zapier.com/blog/lessons-from-using-outbox-pattern-at-scale/"
    accessedAt: "2026-10-06"
  - label: "Zapier公式: Zapier MCP"
    url: "https://zapier.com/mcp"
    accessedAt: "2026-10-06"
  - label: "Zapier公式: Zapier Functions（2026-09-01で終了の告知）"
    url: "https://zapier.com/functions"
    accessedAt: "2026-10-06"
  - label: "Zapierコミュニティ: The next generation of Zaps is here（2026-09-23）"
    url: "https://community.zapier.com/product-updates/the-next-generation-of-zaps-is-here-53832"
    accessedAt: "2026-10-06"
  - label: "Zapier公式: Security & Compliance"
    url: "https://zapier.com/security-compliance"
    accessedAt: "2026-10-06"
  - label: "Zapier公式: Ambassador & Affiliate Program Terms（2025-01-17）"
    url: "https://zapier.com/legal/ambassador-affiliate-terms"
    accessedAt: "2026-10-06"
  - label: "Zapier公式: Solution Partner Program"
    url: "https://zapier.com/l/solution-partner"
    accessedAt: "2026-10-06"
  - label: "Zapierコミュニティ: Does Zapier have an affiliate program?（スタッフ回答 2025-01-08）"
    url: "https://community.zapier.com/show-tell-5/does-zapier-have-an-affiliate-program-13950"
    accessedAt: "2026-10-06"
  - label: "GitHub: zapier/zapier-platform"
    url: "https://github.com/zapier/zapier-platform"
    accessedAt: "2026-10-06"
---

Zapierは、アプリとアプリをつないで「これが起きたら、あれをする」を自動化するサービスだ。[Make](/ja/articles/make)や[n8n](/ja/articles/n8n)と同じ市場で、最も古く、最も多くのアプリをつないでいる。2012年の公開から14年、会社は増資せず、評価額は50億ドルになった。その間に料金表は一度も「タスク」という単位を手放していない。

## サービス解説

公式ブログによれば、Zapierは2012年6月20日に一般公開され、同年のY CombinatorのSummer 2012バッチに参加した。公開時の記事を書いたWade Foster氏は共同創業者でCEO、2012年1月に技術構成の記事を書いたBryan Helmig氏は共同創業者でCTOだ。アフィリエイト規約によれば法人はデラウェア州のZapier, Inc.で、プレスページは「初日から完全リモート」「40カ国に分散」と書く。

:::fact
公式のプレスページ（2026-10-06時点）によれば、Zapierは9,000以上のアプリをつなぎ、340万社以上が使い、従業員は800人以上で40カ国にまたがる。ユーザーが作った自動化ワークフロー（Zap）は2,500万以上。同ページは「2012年に130万ドルを調達し、それ以上の資金調達なしに、2021年に50億ドルの評価額がついた」と書いている。Aboutページは「810億タスクを自動化」「Fortune 1000の69%が利用」と並べ、「初日からリモートで働いてきた」と述べる。
:::

:::fact
公式の料金ページ（2026-10-06時点・年払い表示）によれば、Freeは月0ドルで月100タスク、2ステップのZap、Zap・Tables・Formsは無制限。Professionalは月19.99ドルから（750タスクの帯）で、複数ステップのZap、プレミアムアプリ無制限、Webhook、メールとライブチャットのサポート（ライブチャットは2,000タスクの帯から）。Teamは月69ドルからで、25ユーザー、Zapとフォルダの共有、アプリ接続の共有、SAML SSO、優先サポート。Enterpriseは個別見積もりで、ユーザー無制限、管理権限、年間タスク上限、Observability、テクニカルアカウントマネージャーが付く。有料のタスクの帯は750から200万まで17段階あり、年払いは「33%お得」と表示される。ポーリング間隔はFreeが15分、Professionalが2分、TeamとEnterpriseが1分。Code by Zapierの実行時間はFreeが1秒、ProfessionalとTeamが30秒、Enterpriseが2分。新規登録でProfessionalの14日間トライアルが始まり、クレジットカードは要らない。
:::

:::pull
2012年に130万ドル、以後の増資はゼロ、2021年に評価額50億ドル。プレスページに会社自身が書いた数字だ。
:::

::scorecard

## UX分析

Zapierの体験は「数える単位をひとつにする」ことに向けられている。アプリの数が増え、AIやMCPのような新しい入口が増えても、利用者が見る単位はタスクだけだ。

- **タスクは「成功したアクション」だけ数える**。料金ページのFAQによれば、トリガーはタスクに数えず、新しいデータを確認するポーリングにも課金せず、失敗したアクションも数えない。Tables、Forms、Filter、Formatter、Paths、Delay、Looping、Sub-Zap、Digest、Zapier Manager、Storageといった組み込みツールのステップは0タスクだ。[Make](/ja/articles/make)がルーターとエラーハンドラー以外のすべてのモジュールを1クレジットと数えるのに対し、Zapierは「アプリに対して何かをした」ときだけ数える。
- **AIは同じ通貨で、階層で値段が変わる**。公式の「Task usage rates」ページによれば、AI by Zapierのステップは標準モデルが1タスク、高度なモデルが3タスク、最上位のモデルが5タスクで、モデルがツールを呼ぶたびに同じ数が加算される。自分のモデル提供者のアカウントをつなげば1タスク。ヘルプセンターによれば、このモデル別の課金は2026年6月15日に始まり、新しいステップの既定は高度なモデル（3倍）だ。外のAIクライアントからのMCPツール呼び出しは1回2タスク、Lead Routerは1件5タスク、Code by Zapierは1実行1タスクで、プランの持ち時間を超えると30秒ごとに1タスク増える。
- **上限を超えても止まらないが、3倍で止まる**。ヘルプセンター（2026-08-15更新）によれば、プランのタスク上限に達すると自動で従量課金（pay-per-task）に切り替わり、その単価はプランと支払い周期で異なる。ただし「プランのタスク上限の3倍」に達するとZapは止まる。無料プランには従量課金がない。
- **製品が増えても料金表は増えない**。料金ページは「Zap workflows、AIステップ、コード、MCP、SDKは同じタスク枠から使い、製品ごとに別のタスク予算はない」と書く。Interfacesは「Forms」に改名され、Tablesとともに全プランに含まれる。一方で、コードを書いて動かすZapier Functionsは「2026年9月1日に終了し、Code by Zapierに統合する」と告知されている。
- **ワークフローを「自己修復」させる方向へ**。公式コミュニティの投稿（2026-09-23）によれば、ZapConnect 2026でNext Gen Zapsが発表され、500件のループ上限なしにリストを処理でき、監視エージェントが実行を見て失敗を診断し修正を適用または提案する「自己修復ワークフロー」が入る。対象は有料プランのみだ。

一方で、同じ通貨で数えることは、新しい機能の値段が「何タスクか」で決まることでもある。AIステップの既定が3倍の階層であることや、MCPの1呼び出しが2タスクであることは、料金ページの帯だけを見ていると分からない。通貨をひとつにした分、換算表を読む必要が利用者に移っている。

## 技術構成

::techstack

:::fact
公式ブログをたどると、技術構成の中心は14年間Python・Djangoのままだ。2012年1月27日の記事は「バックエンドはPython/Django、フロントはJS/Backbone」「Linode、nginx、Gunicorn、MySQL、Redis、RabbitMQ」と書き、2016年3月2日の「Automating billions of tasks」は「バックエンドの大半をPythonが動かし、フレームワークはDjango」「Celeryは分散ワークフローエンジンの大きな部分」「EC2とVPCが中心」「パートナーやユーザーのコードはAWS Lambdaで実行」と書く（2017年7月の追記は、Kubernetesによるコンテナのオーケストレーションを展開中で、適所ではGoのような非同期言語も検討していると書く）。2021年10月11日の記事は、Zap Historyの画面をNext.jsのサービスとしてKubernetesに置き、Apollo ServerとNext.jsのAPIルートでBFF（backend for frontend）を作り、裏のDjangoアプリの先にPostgreSQL、Elasticsearch、Amazon S3、Kafkaがあると説明する。2022年2月3日の記事は「RabbitMQはZap処理の心臓部で、Zapの各ステップごとにメッセージを入れ、Kubernetes上のワーカーが消費する」と書き、キューの長さでスケールするためにKEDAを採用した。
:::

:::fact
2025年10月31日の公式ブログによれば、ZapierはKafkaのプロデューサー接続をポッドごとのgRPCサイドカーにまとめ、クラスター全体のピーク接続数を約10分の1に、ブローカーのヒープ使用率を約70ポイント下げた。2026年3月30日の記事によれば、イベントAPIサービスはGoで書かれKubernetesにデプロイされ、AWS上の「とても大きなマネージドKafkaクラスター」にAvro形式で送る。Kafkaのアップグレードやセキュリティ更新中にプロデューサーの遅延が跳ねる問題と、Kafkaが単一障害点になる問題に対し、EBSボリューム上のSQLiteをローカルのアウトボックスにして、Kafkaが完全に止まっていてもイベントを受け付け続ける設計にした。
:::

:::fact
当サイトの実観測（2026-10-06）では、zapier.com の応答に server: Vercel と x-nextjs-prerender: 1 が付き、via ヘッダにCloudFrontがあり、Content-Security-Policyの frame-ancestors に app.contentful.com が含まれていた。link ヘッダには actions.zapier.com のOpenAPI定義（rel=service-desc）、docs.zapier.com/sdk/reference（rel=service-doc）、/llms.txt（rel=describedby）が並ぶ。/blog/ は CloudFront から、help.zapier.com は Cloudflare の後ろから配信されていた。GitHubの zapier/zapier-platform は主言語JavaScript、スター556、最終pushは2026年10月5日で、連携を作るCLI・Core・Schemaをモノレポに持つ。公式のSecurity & Complianceページは、SOC 2 Type IIとSOC 3の年次監査、米国のAWSでのホスティング、TLS 1.2以上とAES-256を挙げる。公式ブログ（2025-10-09）は「ZapierはHIPAAに準拠していない。BAAも結ばない」と明記している。
:::

:::guess
Zapierの基盤は、2012年のDjangoのモノリスを捨てずに、周りを分解してきた形とみられる。Zapの実行はRabbitMQとPythonのワーカー、イベントはKafkaとGo、画面はNext.jsのBFF、公開サイトはVercelとContentfulという分担は、言語を増やすよりも「キューと境界を増やす」方向の進化と読める。2025〜2026年のエンジニアリング記事がKafkaの接続数とアウトボックスに集中しているのは、AIステップやMCPの呼び出しのように1タスクの裏で起きるイベントが増え、イベント基盤の信頼性が課金の信頼性に直結しているからだと推測される。zapier.com が link ヘッダでOpenAPI定義とllms.txtを宣言しているのは、人間の訪問者と同じ入口でAIエージェントにも自社のAPIを見つけさせる意図とみられる。
:::

## ビジネスモデル

収益は、タスクの帯で決まる月額と、帯を超えた分の従量課金だ。製品が増えても、請求は「何タスク使ったか」に集約される。

:::fact
公式の料金ページ（2026-10-06時点）によれば、Professionalは750タスクの帯で月19.99ドル（年払い）から始まり、帯を上げるほど1タスクあたりの単価が下がる。料金ページは「どのタスク帯を選んでも、上限に達すると従量課金に切り替わる。切るか、上の帯に移ることもできる」と書く。年払いは33%引き、非営利団体は有料プランが15%引き（従量課金分を除く）。無料プランの100タスクには従量課金がなく、上限で止まる。Zapier MCPは全プランに含まれ1呼び出し2タスク、SDKはベータ期間中は無料。ヘルプセンターによれば、従量課金の上限はプランのタスク上限の3倍で、そこに達するとZapは次の請求期間まで停止する。
:::

:::fact
Zapierには、2026年10月6日時点で一般に申し込める公開アフィリエイトプログラムがない。公式コミュニティでスタッフは2025年1月8日に「Zapierには現在アフィリエイトプログラムはない。Expertsプログラムのパートナーには紹介報酬がある」と回答している。公式のSolution Partner Program（旧Zapier Experts Program）のページは、コンサルタントや代理店向けに「新規顧客の紹介に対する手数料」を含むと書く。別に、2025年1月17日付のAmbassador & Affiliate Program規約があり、18歳以上で「招待されたか承認された」SNSのクリエイターとアフィリエイターが、zapier.partnerstack.com のポータル経由の紹介リンクで、顧客のサブスクリプション代金の「一定の割合を一定期間」受け取る。料率と期間は規約には書かれず「パートナーポータルに定める」とされ、アドオン料金や税は対象外、支払いは月次集計で月末から30日以内の電子送金だ。
:::

:::guess
「タスク」をひとつの通貨にした設計は、新機能の値付けを帯の価格ではなく換算率で行える点に利点があるとみられる。AIステップを3倍の階層に既定で置き、MCPの呼び出しを2タスクにすれば、既存の帯のまま使用量が増え、上の帯か従量課金へ移る。[n8n](/ja/articles/n8n)が「実行1回を1と数え、ステップは数えない」ことを見出しにし、[Make](/ja/articles/make)がすべてのモジュールを1クレジットと数えるのに対し、Zapierはアプリのアクションだけを数え、組み込みツールを無料にして「ステップを足す摩擦」を減らしつつ、AIと外部呼び出しには重みをつけている。増資なしで評価額50億ドルに達したこと、プレスページがそれを誇ることは、売上の積み上がり方が帯の階段と従量課金に支えられてきたことを示すと推測される。公開アフィリエイトを持たず、紹介報酬をコンサルタントと招待制のクリエイターに限っているのは、9,000のアプリ側のパートナーと340万社の顧客基盤が集客の中心で、紹介料を広く払う必要が薄いからとみられる。
:::

:::guess
2026年のZapierは、Functionsを畳んでCode by Zapierに寄せ、Interfacesを「Forms」に戻し、Next Gen Zapsで「自己修復」を打ち出した。製品の名前を減らして入口を絞る動きと、AIエージェントが使う入口（MCP・SDK・llms.txt）を増やす動きが同時に進んでいる。どちらも「人がZapを組む」から「AIがタスクを使う」への移行に備えた整理とみられ、その移行が進むほど、1タスクの中身が重くなり、同じ帯で請求が伸びる構造になると推測される。
:::

2012年にDjangoで書かれ、130万ドルだけで育ち、9,000のアプリをつないだ会社は、AIの時代になっても請求書の単位を変えなかった。変えたのは換算率だ。AIの1回は1でも3でも5でもあり、外からの1回は2。すべてをタスクで数えるという一貫性が、料金表を読み解く手間を利用者に移しながら、会社の通貨を守っている。
