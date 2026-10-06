---
service: "Jira"
title: "Atlassianは顧客35万社超・年商65億7,200万ドル、自社運用版は2029年3月で終了 — 1テナント1データベースで400万のPostgreSQLを抱え、席の値段にAIクレジットを重ねるJiraを解剖する"
description: "2002年にAtlassianの最初の製品として公開された課題管理ツールJiraは、ソフトウェア開発チームの定番から、全社の業務とAIエージェントの仕事を載せる場所へ広がろうとしている。Atlassianの2026年6月期の売上高は65億7,200万ドル（前年比+26%）、第4四半期のクラウド売上は12億1,300万ドル（前年同期比+31%）。自社運用版のData Centerは2026年3月30日に新規販売を終え、2029年3月28日に読み取り専用になる。料金はFreeが10ユーザーまで、Standardは1〜100ユーザーの部分が1ユーザー月1,240円（月払い）で、有料プランにはユーザーあたり月25〜150のRovoクレジットが付く。公式の料金ページとライセンスのページ、決算発表と株主書簡、Data Center終了の告知、エンジニアリングブログ、GitHub、当サイトの実観測から、1テナント1データベースで約400万のPostgreSQLを抱える基盤、重い読み出しを専用サービスに移す作り直し、席課金にAIの使用量課金を重ねる値付けまでを解剖する。"
lead: "Jiraのデータベースは、顧客のサイトごとに1つずつある。その数は約400万で、13のAWSリージョンに散らばっている。2002年に生まれた課題管理ツールは、24年分の自由度とプラグインの仕組みを抱えたまま、2026年に3つの切り替えを同時に進めている。自社のサーバーで動かす版を2029年に終わらせること、重い読み出しを新しいサービスに移すこと、そしてユーザー1人あたりの値段にAIのクレジットを重ねることだ。その3つが料金表と技術と決算にどう現れているかを、公開情報だけで解剖する。"
category: dev-tool
tags: [project-management, saas, b2b, cloud-migration, aws, postgres, ai, mcp]
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastVerified: "2026-10-07"
serviceUrl: "https://www.atlassian.com/software/jira"
# Affiliate link placeholder: no public affiliate or referral program for Jira was found
# (checked 2026-10-07; atlassian.com/affiliate returns 404, and Atlassian sells through its own
# site and the Solution Partner program at atlassian.com/partners, which is for resellers and
# consultants, not a referral program). Leave this block commented out unless the owner finds one.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<jira-referral-link>"
#   program: "Jira"
vendor: "Atlassian Corporation"
origin: "AU"
heroTheme: "jira"
scores: { product: 4.0, ux: 3.5, tech: 4.5, business: 4.0 }
techStack:
  - layer: "データベース"
    name: "PostgreSQL / Amazon Aurora PostgreSQL (one database per tenant, migrated from Amazon RDS)"
    confidence: confirmed
    evidence: "Atlassianのエンジニアリングブログ（2025-07-01）に「Jiraは保存先にPostgresを使う」「Jiraのテナント1つにつき1つのデータベース」と明記。約400万のデータベースを13のAWSリージョンの約3,000のインスタンス（Amazon RDS for PostgreSQLかAurora PostgreSQL）に分散し、2023年末からRDSをAuroraに載せ替えたと説明している"
    evidenceUrl: "https://www.atlassian.com/blog/how-we-build/migrating-jira-database-platform-to-aws-aurora"
  - layer: "課題データ・検索・権限（新基盤）"
    name: "Amazon DynamoDB (JIS) / OpenSearch (JSIS) / Memcached (JAS)"
    confidence: confirmed
    evidence: "Atlassianのエンジニアリングブログ（2025-12-15）が、課題データを扱うJIS（文書型のストアとキャッシュ。DynamoDBの項目サイズの上限、DynamoDB Streams、GSIに言及）、JQL検索のJSIS（OpenSearchの上に構築）、権限判定のJAS（MemcachedのCASとJVM内のLRUキャッシュ）の3つのサービスを説明している"
    evidenceUrl: "https://www.atlassian.com/blog/how-we-build/how-we-unlocked-performance-at-scale-with-jira-platform"
  - layer: "アプリケーション"
    name: "Java (JVM; plugin-based monolith and new platform services)"
    confidence: confirmed
    evidence: "Atlassianのエンジニアリングブログ（2020-02-04）が、JiraをJVM上の単一テナントのTomcatアプリから、AWS上のマルチテナントのWebサービスの集まりに作り替えたこと、画面がJVMの中でJavaのコンポーネントによって描かれてきたことを説明。2025-12-15の記事は、Jiraがプラグインの仕組みとして作られたことと、新しい権限サービスがJVM内のキャッシュを使うことを書いている"
    evidenceUrl: "https://www.atlassian.com/blog/how-we-build/scaling-react-server-side-rendering-in-jira-cloud"
  - layer: "フロントエンド"
    name: "React (server-side rendering on a Node.js service)"
    confidence: confirmed
    evidence: "同じ2020-02-04の記事が、17年分のJSP・Velocity・Backbone/MarionetteのアプリをReactのコンポーネントに置き換える方針と、既存の仕組みの上にNode.jsのサービスを加えてReactをサーバーサイドレンダリングしたことを説明している"
    evidenceUrl: "https://www.atlassian.com/blog/how-we-build/scaling-react-server-side-rendering-in-jira-cloud"
  - layer: "クラウド基盤"
    name: "AWS (13 regions for the Jira database fleet)"
    confidence: confirmed
    evidence: "2025-07-01の記事に、Jiraのデータベースを13のAWSリージョンに分散していると明記。2020-02-04の記事も、JiraをAtlassianがAWS上で運用するマルチテナントのWebサービスに作り替えたと書く"
    evidenceUrl: "https://www.atlassian.com/blog/how-we-build/migrating-jira-database-platform-to-aws-aurora"
  - layer: "拡張アプリの実行基盤"
    name: "Forge (FaaS on AWS Lambda)"
    confidence: confirmed
    evidence: "Atlassianの開発者向けドキュメント「The Forge platform」に「Forgeの中心にあるのは、AWS Lambdaで動くサーバーレスのFaaSホスティング基盤」「Forgeで作ったアプリは、データの持ち出しを設計段階で制限するセキュリティ層の内側で動く」と明記"
    evidenceUrl: "https://developer.atlassian.com/platform/forge/introduction/the-forge-platform/"
  - layer: "AIクライアント向けの入口"
    name: "Atlassian Rovo MCP Server (remote MCP, OAuth 2.1 or API tokens)"
    confidence: confirmed
    evidence: "GitHubの atlassian/atlassian-mcp-server（2026-10-07時点・API）は、Jira、Confluence、Jira Service Management、Bitbucket、CompassをClaude、ChatGPT、Cursor、VS CodeなどにOAuth 2.1かAPIトークンでつなぐ公式のリモートMCPサーバーと説明され、Apache-2.0・スター1,084・2025年8月作成・2026年9月15日にpush"
    evidenceUrl: "https://github.com/atlassian/atlassian-mcp-server"
  - layer: "配信"
    name: "Amazon CloudFront + AtlassianEdge"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-07）で、www.atlassian.com と jira.atlassian.com はどちらも server: AtlassianEdge と via: CloudFront（x-amz-cf-pop: NRT20）を返し、atl-traceid などのAtlassian独自のヘッダが付いていた"
sources:
  - label: "Atlassian: About Us（会社紹介と沿革）"
    url: "https://www.atlassian.com/company"
    accessedAt: "2026-10-07"
  - label: "Atlassian: Jira pricing"
    url: "https://www.atlassian.com/software/jira/pricing"
    accessedAt: "2026-10-07"
  - label: "Atlassian: Rovo Plans and Trial（Rovoクレジット）"
    url: "https://www.atlassian.com/licensing/rovo"
    accessedAt: "2026-10-07"
  - label: "Atlassian: Data Center End of Life"
    url: "https://www.atlassian.com/licensing/data-center-end-of-life"
    accessedAt: "2026-10-07"
  - label: "Atlassian: Fourth Quarter and Fiscal Year 2026 Results（2026-08-06）"
    url: "https://s206.q4cdn.com/270053503/files/doc_financials/2026/q4/TEAM-Q4-2026-Earnings-Release.pdf"
    accessedAt: "2026-10-07"
  - label: "Atlassian: Q4 FY2026 Shareholder Letter（2026-08-06）"
    url: "https://s206.q4cdn.com/270053503/files/doc_financials/2026/q4/TEAM-Q4-2026-Shareholder-Letter.pdf"
    accessedAt: "2026-10-07"
  - label: "Atlassian: Q1 FY2026 Shareholder Letter（2025-10）"
    url: "https://s206.q4cdn.com/270053503/files/doc_financials/2026/q1/TEAM-Q1-2026-Shareholder-Letter.pdf"
    accessedAt: "2026-10-07"
  - label: "Inside Atlassian: An important update on our team（2026-03-11）"
    url: "https://www.atlassian.com/blog/company-news/atlassian-team-update-march-2026"
    accessedAt: "2026-10-07"
  - label: "Inside Atlassian: Welcoming The Browser Company to Atlassian（2025-09-04）"
    url: "https://www.atlassian.com/blog/company-news/atlassian-acquires-the-browser-company"
    accessedAt: "2026-10-07"
  - label: "Inside Atlassian: Atlassian + DX: Engineering Intelligence for the AI Era（2025-09-18）"
    url: "https://www.atlassian.com/blog/announcements/atlassian-acquires-dx"
    accessedAt: "2026-10-07"
  - label: "Atlassian Engineering: Migrating the Jira Database Platform to AWS Aurora（2025-07-01）"
    url: "https://www.atlassian.com/blog/how-we-build/migrating-jira-database-platform-to-aws-aurora"
    accessedAt: "2026-10-07"
  - label: "Atlassian Engineering: How We Unlocked Performance at Scale with Jira Platform（2025-12-15）"
    url: "https://www.atlassian.com/blog/how-we-build/how-we-unlocked-performance-at-scale-with-jira-platform"
    accessedAt: "2026-10-07"
  - label: "Atlassian Engineering: Scaling React server-side rendering in Jira Cloud（2020-02-04）"
    url: "https://www.atlassian.com/blog/how-we-build/scaling-react-server-side-rendering-in-jira-cloud"
    accessedAt: "2026-10-07"
  - label: "Atlassian Developer: The Forge platform"
    url: "https://developer.atlassian.com/platform/forge/introduction/the-forge-platform/"
    accessedAt: "2026-10-07"
  - label: "GitHub: atlassian/atlassian-mcp-server"
    url: "https://github.com/atlassian/atlassian-mcp-server"
    accessedAt: "2026-10-07"
---

Jiraは、ソフトウェア開発チームが課題（チケット）を起票し、決めたワークフローに沿って進め、ボードやバックログで見渡すための課題管理ツールだ。2002年にAtlassianの最初の製品として公開され、24年かけて開発チームの定番になった。当サイトの[Linear](/ja/articles/linear)の解剖で、速さの比較相手として最初に名前が挙がるのもJiraだ。2026年のJiraは、自社運用版の終了、基盤の作り直し、AIの値付けという3つの切り替えを同時に進めている。

## サービス解説

Jiraは、課題・プロジェクト・ゴールを、バックログ、ボード、タイムライン、カレンダーなどのビューで扱う。2024年にソフトウェア開発向けのJira Softwareと業務チーム向けのJira Work Managementを1つの「Jira」にまとめ、開発チームの外にも広げている。料金はFree・Standard・Premium・Enterpriseの4段階で、AIのRovo、ドキュメントのConfluence、動画のLoomとまとめた「Teamwork Collection」も売られている。

:::fact
Atlassianの会社紹介ページ（2026-10-07時点）によれば、同社はニューサウスウェールズ大学の同じ奨学金コースで出会ったMike Cannon-Brookes氏とScott Farquhar氏が立ち上げ、2002年にJira 1.0を公開した。2011年にJiraとConfluenceの最初のクラウド版を出し、2015年にNASDAQに上場（ティッカーTEAM）、2023年にLoomを買収し、2024年にAIのRovoを発表してJira SoftwareとJira Work Managementを1つのJiraに統合した。同社のエンジニアリングブログ（2020-02-04）は、Jiraを「顧客が自社で動かす単一テナント・単一JVMのTomcatのWebアプリ」から「AtlassianがAWSで運用するマルチテナントのWebサービスの集まり」に作り替えたことを、同社の歴史で最大級の複雑なプロジェクトの一つと書く。2026年8月6日の決算発表によれば、Atlassianの2026年6月期の売上高は65億7,200万ドル（前年比+26%）で、同社のソフトウェアは35万社超の顧客とFortune 500の85%超で使われている。
:::

:::fact
自社のサーバーで動かすData Center版について、Atlassianは2025年9月に終了を発表した。公式の告知ページ（2026-10-07確認）によれば、新規顧客への販売は2026年3月30日に終わり、既存顧客の新規契約・追加購入は2028年3月30日まで、2029年3月28日にData Center製品とそのMarketplaceアプリは読み取り専用になる。BitbucketとBambooのData Centerは対象外で、期限後も使い続けられる。移行が間に合わない一部の顧客には、例外として延長保守を提供するとも書く。同じページは、Atlassianの顧客の99%がすでにクラウドにいるか移行の途上にあり、規制業種と大企業の顧客でも75%がそうだとしている。
:::

:::pull
顧客のサイトごとに1つのPostgreSQL、その数は約400万。それを抱えたまま、Jiraは自社運用版を畳み、席の値段にAIの使用量を重ねている。
:::

::scorecard

## UX分析

Jiraの体験は「どんな組織の手順でも写し取れる」自由度で広まった。その自由度が重さの原因にもなり、2026年は速度とAIの両面で作り直しが進んでいる。

- **型を押しつけない設計**。料金ページ（2026-10-07確認）は、全プラン共通の機能として無制限のゴール・プロジェクト・タスク・フォーム、カスタムワークフローとカスタムフィールド、バックログ・リスト・ボード・タイムライン・カレンダー・サマリーの各ビューを並べる。[Linear](/ja/articles/linear)がサイクルやトリアージの型を押しつけるのとは逆に、Jiraは組織ごとの手順をそのまま載せる道具として育ってきた。
- **自由度の代償だった重さ**。Atlassianのエンジニアリングブログ（2025-12-15）は、Jiraがもともとプラグインの仕組みとして作られ、1つのリクエストに応えるために多くの部品や外部のサービスを呼ぶ必要があったことを、性能を保証しにくかった理由に挙げる。新しい基盤への移行で、課題一覧（Issue Navigator）の初回表示のp99は約4秒から約300ミリ秒に、一部の大口顧客のエンドポイントのp99は約14.4秒から約486ミリ秒になったとしている。
- **AIは席に付いたクレジットで動く**。Rovoのライセンスのページ（2026-10-07確認）によれば、Jiraの有料プランにはユーザー1人あたり月25（Standard）、70（Premium）、150（Enterprise）のRovoクレジットが付き、組織全体で共有される。基本的なAIの操作は1回10クレジットを使い、使い切っても、追加利用を止めている組織ではAIの新しい操作が翌月まで止まるだけで、Rovo Searchや要約などの無料の機能は使い続けられる。上限を超えた分は1クレジット0.01ドルで支払える。
- **外のAIからJiraを触る入口**。GitHubで公開されている公式の atlassian/atlassian-mcp-server（2026-10-07時点）は、Jira、Confluence、Jira Service Management、Bitbucket、CompassをClaude、ChatGPT、CursorなどにつなぐリモートのMCPサーバーだ。株主書簡（2026-08-06）によれば、MCPサーバーとTeamwork Graph CLIの月間アクティブユーザーは四半期で2倍超に増えて100万を超え、MCP経由で作られたJiraの課題とConfluenceのページは前四半期の約4倍になった。同書簡は、MCPの利用者の98%が同じ月にJiraの画面も使っていると書く。
- **弱点は移行の負担**。Data Centerの終了で、自社運用を続けてきた組織は2029年3月までにクラウドへ移るか、例外の延長を交渉することになる。カスタマイズやMarketplaceアプリを長年積み上げた環境ほど、移行の手間は大きくなりやすいとみられる。

## 技術構成

::techstack

:::fact
Atlassianのエンジニアリングブログ（2025-12-15）によれば、Jira Cloudは、サーバー版と同じコードにクラウド用の層をかぶせた構成（Studio、のちのUnicorn）から始まり、中核のロジック、データモデル、プラグインの仕組みはサーバー版と同じだった。全面的な書き直しは費用もリスクも大きすぎたためで、その結果、サーバー時代の前提、とりわけ単一テナントのデータベースがクラウドに持ち込まれたと書く。2005年に採用したApache OFBiz由来のORM（OfBiz Entity Engine）のもとで、正規化されたリレーショナルなスキーマが1つのRDBMSに強く結びつき、読み出しと書き込みが10対1の読み出し中心のアプリケーションになっていった。画面については2020年2月4日の記事が、JVMの中でJavaのコンポーネントが描くJSPやVelocityのテンプレートと、Backbone/Marionetteのアプリで作られた17年分をReactのコンポーネントに置き換えるため、小さなReactの部品を差し込んで少しずつ広げる「インサイドアウト」の方式を取り、既存の仕組みの上にNode.jsのサービスを加えてReactをサーバーサイドレンダリングしたと説明している。
:::

:::fact
2025年7月1日の記事によれば、Jiraは課題・プロジェクト・ワークフロー・カスタムフィールドを含むすべてのデータをPostgreSQLに保存し、テナント（顧客のサイト）ごとに1つのデータベースを持つ。テナント間の分離、水平方向の拡張、規模の違う顧客の負荷の釣り合いを取りやすくするための「珍しい」設計だとし、約400万のデータベースを13のAWSリージョンの約3,000のインスタンス（Amazon RDS for PostgreSQLかAurora PostgreSQL）に分散している。1つのクラスターには最大約4,000のデータベースが載り、負荷をならすために普段から1日平均1,000のデータベースを移している。2023年末からはRDSのインスタンスをAuroraに載せ替え、インスタンスの大きさを半分にしても性能が上がったとする。1つのJiraのデータベースが約5,000のファイルを持つため、ファイルの多さが載せ替えの障害になったとも書いている。
:::

:::fact
2025年12月15日の記事は、Jira Cloudを「書き込みに最適化したモノリス」から「読み出しに最適化したプラットフォーム」へ作り替えていると説明する。課題データはJIS（Jira Issue Service）が文書型のストアとキャッシュで扱い（記事はDynamoDBの項目サイズの上限、DynamoDB Streams、GSIに触れている）、読み出しは15ミリ秒未満、APIの稼働率は99.999%を目標に、1テナント最大10億件、Jira Cloud全体で1,000億〜1兆件の課題を想定する。JQLの検索はOpenSearchの上のJSIS（Jira Scalable Issue Search）、権限の判定はMemcachedとJVM内のキャッシュを使うJAS（Jira Authorization Service）が受け持ち、権限の判定は10ミリ秒以内を目標にする。各サービスが必要なデータを外から押し込まれる形に変え、運用費は数百万ドル単位で減ったとしている。拡張アプリの実行基盤Forgeは、公式ドキュメントによればAWS Lambdaで動くFaaSで、データの持ち出しを制限する層の内側で動く。当サイトの実観測（2026-10-07）では、www.atlassian.com と jira.atlassian.com はどちらも server: AtlassianEdge と CloudFront（x-amz-cf-pop: NRT20）を返した。
:::

:::guess
Jiraの基盤は、1テナント1データベースのPostgreSQLを正本として残したまま、重い読み出しだけを専用のサービスに移していく形とみられる。課題の表示はJISのキャッシュ、検索はOpenSearch、権限はMemcachedと、読み出しの経路ごとに専用の置き場を作り、プラグインが自由に処理を差し込めた時代の「頼まれてから集めに行く」動きを減らしている。2025年12月の記事が変更データキャプチャ（CDC）を標準にしたと書き、その先にデータレイクやRovo Searchを挙げていることからは、この作り直しが速度のためだけでなく、AIに渡す組織の文脈を全テナントから安定して取り出すための下ごしらえでもあると推測される。1テナント1データベースは、Aurora移行の記事では分離と拡張のための選択として、作り直しの記事ではサーバー時代から持ち込んだ前提として語られており、両方の面を持つ設計とみられる。Data Centerの終了は、同じ製品を自社運用とクラウドの2系統で保守する負担から抜け、新しい読み出しの基盤に開発を集中させる判断とも読める。
:::

## ビジネスモデル

収益の大半はユーザー数に応じたサブスクリプションで、Atlassianはクラウド、Data Center、Marketplaceなどの3つに分けて売上を開示している。2026年は、そこにAIの使用量で課金する層が加わった。

:::fact
Jiraの料金ページ（2026-10-07確認・円建て・月払い）によれば、Freeは10ユーザーまで、ストレージ2GB、自動化は月150ステップ（サブスクリプション全体）で、サポートはコミュニティのみ。ページに埋め込まれた価格表では、Standardは1〜100ユーザーの部分が1ユーザー月1,240円（米ドル建てでは9.05ドル）、Premiumは同2,500円（18.30ドル）で、人数が増えるほど段階的に安くなる。ページが初期表示する300ユーザーでは、Standardが1ユーザー月1,085円、Premiumが1,987円と表示される。Standardはストレージ250GB、自動化はユーザーあたり月400ステップ、1サイト10万ユーザーまで。Premiumはストレージ無制限、月750ステップ、重大な問題への24時間対応、稼働率99.9%のSLA。Enterpriseは年払いのみで営業経由、最大150サイト、99.95%のSLAが付く。年払いにすると最大17%安くなる。
:::

:::fact
2026年8月6日の決算発表と株主書簡によれば、2026年6月期第4四半期（4〜6月）の売上高は17億6,600万ドル（前年同期比+28%）で、クラウドが12億1,300万ドル（同+31%）、Data Centerが4億6,200万ドル（同+21%）、Marketplaceなどが9,100万ドルだった。通期の売上高は65億7,200万ドル（前年比+26%）、サブスクリプションARRは66億600万ドル（同+23%）、残存履行義務（RPO）は48億1,700万ドル（同+44%）。通期のGAAPの営業利益は1,000万ドル（営業利益率0.2%）で、株式報酬などを除いた非GAAPでは19億9,600万ドル（同30%）、フリーキャッシュフローは13億1,900万ドル。クラウドARRが1万ドルを超える顧客は57,334社。書簡は、クラウドの伸びをJiraとConfluenceの席の増加によるものとし、Data Centerの増収は、終了の発表後に契約額のうち先に売上に計上される部分が増えたことと価格改定によると説明する。2027年6月期の会社予想は、売上高が前年比+13%前後、クラウドが+25.5%前後、Data Centerが−17%前後で、顧客が購入を2027年6月期から2026年6月期に前倒ししたことを理由の一つに挙げている。
:::

:::fact
同じ書簡によれば、Fortune 500の80%超がRovoを使い、Rovoを使う顧客は使わない顧客よりJiraの課題を20%多く完了している。2026年3月11日、CEOのMike Cannon-Brookes氏は、AIと大企業向け営業への投資を自前でまかなうため、従業員の約10%（約1,600人）を減らすと発表し、同じ投稿でRovoの月間アクティブユーザーが500万を超えたと書いた。2026年6月期の第1四半期には、AIブラウザDiaを作る[The Browser Company](/ja/articles/browser-company)を買収し、開発者の生産性を測るDXの買収に合意した。同期のキャッシュフロー計算書では、事業買収の支出は取得した現金を除いて12億2,900万ドルだった。
:::

:::guess
Jiraの値付けは、ユーザー数で決まる席の課金に、AIの使用量で決まる課金を重ねる形に移りつつあるとみられる。クレジットを席ごとに配って組織で共有させ、超えた分だけを従量で取る設計なら、AIをあまり使わない顧客の値段は変えずに、使う顧客からは推論の費用に見合う額を受け取れる。株主書簡がRovoの利用と完了した課題の数の相関や、MCPの利用者の98%がJiraの画面も使っていることを強調するのは、AIが画面の外から課題を作る時代にも、席の数が減らないことを投資家に示す狙いと推測される。
:::

:::guess
Data Centerの終了は、短期の売上を押し上げ、翌年に反動を残す形になっている。会社自身が2027年6月期のData Centerの売上を−17%前後と予想しているのは、前倒しの購入と、クラウドへの移行が進むことの両方を織り込んだものとみられる。それでも終了を選んだのは、自社運用の顧客をクラウドに集めれば、Rovoの使用量課金やTeamwork Graphのように、クラウドでしか売れないものを全顧客に売れるからだと読める。
:::

2002年に開発チームの課題を管理するために作られたJiraは、24年後、約400万のPostgreSQLの上で、全社の業務とAIエージェントの仕事を受け止める場所になろうとしている。自社運用版を2029年に終わらせ、重い読み出しを新しいサービスに移し、席の値段にAIのクレジットを重ねる。3つの切り替えはどれも、組織の作業の文脈をクラウドの1か所に集め、それをAIに売るための準備として一本につながっている。
