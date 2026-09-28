---
service: "Udemy"
title: "講師の取り分は37%と15% — Udemyは「1本ずつ売る講座の市場」から法人と定額制へ重心を移し、Courseraと一つになった"
description: "8,400万人が学ぶオンライン講座のマーケットプレイスUdemy。2025年は売上7億8,980万ドルの3分の2を法人向けのUdemy Businessが占め、個人向け部門は前年から9%縮んだ。講師への支払いは買い切り37%、定額制は2026年から15%。日本ではベネッセが2015年から独占パートナーを務め、2026年5月にはCourseraの完全子会社になった。Djangoのモノリスから切り出したNext.jsのマイクロフロントエンドとCloudflare Workersの振り分け、gpt-4.1-nanoを必要なときだけ呼ぶAIアシスタント、日本語を最初に選んだ生成AIの多言語化までを、年次報告書・公式テックブログ・講師向けのお知らせ・ベネッセの公式ページから解剖する。"
lead: "Udemyのテックブログには、自社の弱点が率直に書いてある。トラフィックの大半は米国の外から、しかもかなりの部分がスマートフォンのブラウザから来るのに、ページは米国のサーバーから配っていた——。誰でも講座を出せて、誰でも1本ずつ買えるマーケットプレイスとして育ったUdemyは、いま法人向けの定額制に重心を移し、2026年5月にはCourseraの子会社になった。その設計と稼ぎ方の変化を解剖する。"
category: consumer-app
tags: [online-learning, marketplace, subscription, b2b, nextjs, django]
publishedAt: "2026-09-28"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://www.udemy.com/"
# Affiliate link placeholder: the owner must join the Udemy affiliate program
# (https://www.udemy.com/affiliate/, run on Impact; Japan applications are reviewed by Benesse)
# before enabling this block. Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<udemy-impact-affiliate-link>"
#   program: "Udemy Affiliate Program (Impact)"
vendor: "Udemy, Inc.（Coursera, Inc.の完全子会社）"
origin: "US"
heroTheme: "udemy"
scores: { product: 4.0, ux: 3.5, tech: 4.0, business: 3.0 }
techStack:
  - layer: "Webアプリケーション本体"
    name: "Django (Python) monolith"
    confidence: confirmed
    evidence: "マイクロフロントエンド連載の第1回（2024-01-02）に、マーケットプレイス・個人向けサブスクリプション・法人向けアプリを1つのコードベースに収めたモノリスだと明記。第3回（2024-01-16）に、そのモノリスがDjangoのテンプレートでデータを暗黙に受け渡し、Djangoモノリス側の仕組みで文言を抽出・翻訳していると明記"
    evidenceUrl: "https://medium.com/udemy-engineering/transforming-frontend-architecture-a-journey-from-monolith-to-micro-frontends-at-udemy-part-3-2dfdd74ff913"
  - layer: "フロントエンド"
    name: "Next.js + TypeScript (micro frontends, SSG/SSR)"
    confidence: confirmed
    evidence: "同じ連載の第2回に、2021年の社内ハッカソンを起点に、Next.jsとTypeScriptでモノリスから画面を切り出すマイクロフロントエンドへ移行し、ビルド時に静的ページを生成してCDNに置き、キャッシュされない動的な部分は米国でホストするNext.jsアプリに戻すと明記"
    evidenceUrl: "https://medium.com/udemy-engineering/transforming-frontend-architecture-a-journey-from-monolith-to-micro-frontends-at-udemy-part-2-c9bd7ede5f1c"
  - layer: "API"
    name: "GraphQL + GraphQL Codegen"
    confidence: confirmed
    evidence: "同じ第2回に、宣言的なデータ取得にGraphQLを使い、GraphQL Codegenで型安全なコードを生成すると明記"
    evidenceUrl: "https://medium.com/udemy-engineering/transforming-frontend-architecture-a-journey-from-monolith-to-micro-frontends-at-udemy-part-2-c9bd7ede5f1c"
  - layer: "エッジ・ルーティング"
    name: "Cloudflare (CDN + Workers)"
    confidence: confirmed
    evidence: "公式テックブログ「Migrating Udemy's Homepage to Micro Frontends」（2024-05-01）に、全フロントエンドアプリのルート設定をCloudflare Workersが読み、アクセストークンのCookieの有無でログイン前・ログイン後のトップページへ振り分けると明記。当サイトの観測（2026-09-28）でも www.udemy.com は server: cloudflare を返し、CloudflareのIPアドレスに解決された"
    evidenceUrl: "https://medium.com/udemy-engineering/migrating-udemys-homepage-to-micro-frontends-78bbd2e64925"
  - layer: "デプロイ"
    name: "Kubernetes + Argo CD"
    confidence: likely
    evidence: "マイクロフロントエンド連載の第2回に、2021年のハッカソンで組んだ構成としてArgo CDで宣言的・自動的にKubernetes環境へデプロイすると明記。その後の本番環境でも同じ構成かどうかは書かれていない"
    evidenceUrl: "https://medium.com/udemy-engineering/transforming-frontend-architecture-a-journey-from-monolith-to-micro-frontends-at-udemy-part-2-c9bd7ede5f1c"
  - layer: "監視"
    name: "Datadog / Sentry"
    confidence: confirmed
    evidence: "マイクロフロントエンド連載の第3回（2024-01-16）に、移行の進み具合と性能を追うダッシュボードをDatadogとSentryで作ったと明記"
    evidenceUrl: "https://medium.com/udemy-engineering/transforming-frontend-architecture-a-journey-from-monolith-to-micro-frontends-at-udemy-part-3-2dfdd74ff913"
  - layer: "AIアシスタント"
    name: "OpenAI gpt-4.1-nano (fallback) + embedding similarity"
    confidence: confirmed
    evidence: "公式テックブログ（2025-05-28）に、当初はNVIDIAのNeMo Guardrailsとall-MiniLM-L6-v2の埋め込みの類似度だけで学習者の発話の意図を判定し、のちにmultilingual-e5-baseに切り替え、最終的には類似度が最適なしきい値0.85を超えないときだけgpt-4.1-nanoに判定させる方式にしたと明記。LLMに回るのは全発話の約32.5%と見積もっている"
    evidenceUrl: "https://medium.com/udemy-engineering/evolution-of-the-udemy-ai-assistant-intent-understanding-system-ec3ee0039364"
  - layer: "データ・機械学習基盤"
    name: "Databricks (Delta Lake / Unity Catalog)"
    confidence: confirmed
    evidence: "公式テックブログ（2025-08-04）に、S3上のデータレイクとEMRのHive・Spark、Redshift、DataHub、SageMaker、OpenAIとBedrockのAIゲートウェイに分かれていた基盤を、DatabricksのData Intelligence Platformに寄せ、Delta Lakeを唯一のデータ形式、Unity Catalogを統一のガバナンスにしたと明記"
    evidenceUrl: "https://medium.com/udemy-engineering/from-siloed-dataops-mlops-and-llmops-to-a-unified-data-intelligence-platform-4400be283641"
  - layer: "クラウド"
    name: "AWS"
    confidence: likely
    evidence: "データ基盤の記事がS3・EMR・Redshift・SageMaker・Bedrockを使ってきたと書き、マイクロフロントエンド連載はページを米国から配っていたと書く。アプリケーション本体を載せているクラウドを明言した公式の文書は見当たらない"
sources:
  - label: "Udemy, Inc. Form 10-K（2025年度・受講者数・講師数・講座数・ベネッセ経由の売上比率）"
    url: "https://www.sec.gov/Archives/edgar/data/1607939/000160793926000034/udmy-20251231.htm"
    accessedAt: "2026-09-28"
  - label: "Udemy, Inc. 2025年第4四半期・通期決算リリース（Form 8-K 添付）"
    url: "https://www.sec.gov/Archives/edgar/data/1607939/000160793926000006/q42025pressrelease.htm"
    accessedAt: "2026-09-28"
  - label: "Coursera IR: Udemyとの統合完了（2026-05-11）"
    url: "https://investor.coursera.com/news/news-details/2026/Coursera-Completes-Combination-with-Udemy-to-Build-the-Worlds-Most-Comprehensive-Skills-Platform/default.aspx"
    accessedAt: "2026-09-28"
  - label: "Coursera, Inc. Form 10-Q（2026年第2四半期・Udemy取得の対価と統合後の業績）"
    url: "https://www.sec.gov/Archives/edgar/data/0001651562/000165156226000063/cour-20260630.htm"
    accessedAt: "2026-09-28"
  - label: "Udemy公式ブログ: UdemyとCourseraの統合合意（2025-12）"
    url: "https://blog.udemy.com/udemy-coursera-combine/"
    accessedAt: "2026-09-28"
  - label: "Wikipedia: Udemy（創業・上場・経営陣・業績の年表）"
    url: "https://en.wikipedia.org/wiki/Udemy"
    accessedAt: "2026-09-28"
  - label: "Udemy講師向けお知らせ: 定額制の講師取り分の変更（2023-11-02）"
    url: "https://teach.udemy.com/enabling-investment-subscription-terms-update/"
    accessedAt: "2026-09-28"
  - label: "Udemy Tech Blog: A Journey from Monolith to Micro frontends — Part 1（2024-01-02）"
    url: "https://medium.com/udemy-engineering/transforming-frontend-architecture-a-journey-from-monolith-to-micro-frontends-at-udemy-part-1-e0a9c19c47bf"
    accessedAt: "2026-09-28"
  - label: "Udemy Tech Blog: A Journey from Monolith to Micro frontends — Part 2（2024-01-08）"
    url: "https://medium.com/udemy-engineering/transforming-frontend-architecture-a-journey-from-monolith-to-micro-frontends-at-udemy-part-2-c9bd7ede5f1c"
    accessedAt: "2026-09-28"
  - label: "Udemy Tech Blog: A Journey from Monolith to Micro frontends — Part 3（2024-01-16）"
    url: "https://medium.com/udemy-engineering/transforming-frontend-architecture-a-journey-from-monolith-to-micro-frontends-at-udemy-part-3-2dfdd74ff913"
    accessedAt: "2026-09-28"
  - label: "Udemy Tech Blog: Migrating Udemy's Homepage to Micro Frontends（2024-05-01）"
    url: "https://medium.com/udemy-engineering/migrating-udemys-homepage-to-micro-frontends-78bbd2e64925"
    accessedAt: "2026-09-28"
  - label: "Udemy Tech Blog: Evolution of the Udemy AI Assistant Intent Understanding System（2025-05-28）"
    url: "https://medium.com/udemy-engineering/evolution-of-the-udemy-ai-assistant-intent-understanding-system-ec3ee0039364"
    accessedAt: "2026-09-28"
  - label: "Udemy Tech Blog: From Zero to Hero: Localization-Led Generative AI at Udemy（2025-09-22）"
    url: "https://medium.com/udemy-engineering/from-zero-to-hero-localization-led-generative-ai-at-udemy-a422e4f968d4"
    accessedAt: "2026-09-28"
  - label: "Udemy Tech Blog: From siloed DataOps, MLOps, and LLMOps to a unified data-intelligence platform（2025-08-04）"
    url: "https://medium.com/udemy-engineering/from-siloed-dataops-mlops-and-llmops-to-a-unified-data-intelligence-platform-4400be283641"
    accessedAt: "2026-09-28"
  - label: "Udemy Tech Blog: The Architecture Behind Digression Control (Role Play)（2026-04-09）"
    url: "https://medium.com/udemy-engineering/from-drift-to-direction-the-architecture-behind-digression-control-role-play-1720d9a3a6a0"
    accessedAt: "2026-09-28"
  - label: "ベネッセ公式: Udemy社とベネッセコーポレーションのパートナーシップについて"
    url: "https://www.benesse.co.jp/udemy/personal/privacy/"
    accessedAt: "2026-09-28"
  - label: "ベネッセ プレスリリース: Udemy社との資本提携（2020-02-18）"
    url: "https://prtimes.jp/main/html/rd/p/000000783.000000120.html"
    accessedAt: "2026-09-28"
  - label: "ベネッセ プレスリリース: Udemy個人向け定額制プランの提供開始（2025-09-01）"
    url: "https://prtimes.jp/main/html/rd/p/000001391.000000120.html"
    accessedAt: "2026-09-28"
  - label: "ベネッセ公式: Udemy個人向け定額プラン"
    url: "https://udemy.benesse.co.jp/pp_general/"
    accessedAt: "2026-09-28"
  - label: "ベネッセ公式: Udemy Business 料金プラン"
    url: "https://www.benesse.co.jp/udemy/business/price/"
    accessedAt: "2026-09-28"
  - label: "Udemy公式: Affiliate program"
    url: "https://www.udemy.com/affiliate/"
    accessedAt: "2026-09-28"
  - label: "Udemyメディア（ベネッセ）: Udemyをアフィリエイトするには？"
    url: "https://udemy.benesse.co.jp/marketing/udemy-affiliate.html"
    accessedAt: "2026-09-28"
---

オンライン講座のUdemyは、「誰でも講座を出せて、誰でも1本ずつ買える」市場として大きくなった。プログラミングの講座を1本だけ買って学んだことのある日本のエンジニアも多いだろう。ところが年次報告書を読むと、稼ぎ頭はとうに入れ替わっている。いまのUdemyを支えるのは、企業が社員の人数分をまとめて払う定額制と、個人向けの定額制だ。

## サービス解説

Udemyは、講師が録画した動画講座を公開し、学習者が買って受講するオンライン学習のマーケットプレイスだ。プログラミング・データ分析・デザイン・ビジネスなど幅広い分野を扱い、1本ずつ買う「買い切り」のほかに、対象講座が見放題になる個人向けの定額制「Personal Plan」と、企業が席数単位で契約する「Udemy Business」を持つ。

:::fact
Wikipediaによれば、Udemyは2010年5月にエレン・バリ、ガガン・ビヤニ、オクタイ・チャーラルの3人が創業した。バリとチャーラルは2007年、トルコに住みながらライブの仮想教室を作っており、その後シリコンバレーに移ってUdemyを立ち上げた。2021年10月29日に上場している。2025年度の年次報告書（Form 10-K）によれば、学習者は約8,400万人、講師は9万人超、講座は29万本超で、マーケットプレイスは78言語に及ぶ。売上の61%は北米の外から来る。
:::

:::fact
2025年12月17日、UdemyはCourseraとの統合に合意した。Courseraの発表によれば、統合は2026年5月11日に完了し、Udemyの株式1株はCourseraの株式0.800株に置き換わった。統合後の持ち分は旧Coursera株主が約59%、旧Udemy株主が約41%で、UdemyはNASDAQの上場を廃止し、Courseraの完全子会社になった。CEOはCourseraのグレッグ・ハートが続け、統合後の会社は学習者2億9,000万人、法人顧客1万8,000社、講師9万5,000人、2025年の合算売上15億ドル超を掲げ、24か月以内に年1億1,500万ドルのコスト削減を見込む。Udemyの公式ブログは、合意の発表の時点で、購入済みの講座とサブスクリプションはそのまま使えると説明している。
:::

:::fact
日本では、ベネッセコーポレーションが2015年からUdemyの独占的な事業パートナーを務める。ベネッセの公式ページによれば、Udemy社がプラットフォームと講座を提供し、ベネッセは大学生や社会人を対象に、学びを通じたスキル向上とキャリア成長を支援する取り組みを担う。ベネッセは2020年2月に5,000万ドルを出資しており、2025年9月のプレスリリースによれば、日本の受講者は2025年6月末に220万人を超えた。Udemyの10-Kは、アジア太平洋地域のUdemy Businessの売上のうち66%がベネッセとの提携から来たと書いている。
:::

:::pull
講座を1本ずつ売る市場は、いまや売上の3割に満たない。Udemyの本業は、企業が社員の人数分をまとめて払う定額制に移っている。
:::

::scorecard

## UX分析

UdemyのUXは、「買い切りの市場」と「定額制の図書館」という2つの体験を、1つのサイトに同居させる方向で設計されている。

- **2つの買い方を並べる**。ベネッセの公式ページによれば、日本の個人向け定額プランは月3,000円、または年27,500円（月あたり約2,292円）で、2万9,000本超の対象講座が見放題になり、いつでも解約できる。25万本を超える全講座のうち、対象外の講座はこれまでどおり1本ずつ買う。買い切りの講座は期限なく見られるが、定額制で見られるのは契約中だけだ。
- **法人向けは人数で階段を切る**。ベネッセのUdemy Businessの料金ページによれば（価格はいずれも税抜）、5〜20人のチームプランは1IDあたり年38,000円からで約1万7,000講座、21人以上のエンタープライズプランは1IDあたり年36,300円からで3万講座超を使える。エンタープライズプランは5,000人以上なら1IDあたり年18,100円からまで下がる。人数が増えるほど1人あたりの単価が下がり、見られる講座が増える。
- **講座の中にAIの相棒を置く**。公式テックブログ（2025年5月）によれば、講座を見ながら質問できる「AIアシスタント」は、疑問の解消、講義の要約、講座内の検索、理解度の確認などを受け持つ。10-Kは、営業・カスタマーサービス・リーダーシップの会話をAI相手に練習する「AI Role Play」も挙げている。
- **ログイン前のトップページを作り直す**。公式テックブログ（2024年5月）によれば、ログイン前のトップページは講座ページに次いで2番目に訪問の多いページで、社会人のスキル開発を前面に出す内容に作り直された。上半分のモジュールを旧ページとA/Bテストで比べたうえで、米国とインドで先に公開している。

:::fact
ベネッセの公式ページによれば、ベネッセは日本のUdemyの利用者について、氏名・メールアドレス・プロフィール・学習履歴・サイト閲覧履歴などの個人情報をUdemy社から受け取り、講座のおすすめやキャンペーン・クーポンの案内、学習完了のリマインド、アンケート、サービスの改善や新規事業の企画、関心や学習状況の分析に基づく案内、グループ会社や提携企業のサービスの案内に使う。日本の利用者から見ると、プラットフォームと講座はUdemy社、学びの案内はベネッセという二人三脚になっている。
:::

## 技術構成

::techstack

:::fact
公式テックブログの連載「A Journey from Monolith to Micro frontends at Udemy」（2024年1月）によれば、Udemyのアプリケーションはマーケットプレイス・個人向けサブスクリプション・法人向けアプリを1つのコードベースに収めたモノリスで、Djangoのテンプレートでデータを受け渡してきた。連載は、新しく開発を始めるとビルドに10〜15分かかり、リリースには審査と承認の順番待ちで数日かかることがあった、と課題を挙げる。さらに、トラフィックの大半は米国外から、しかもかなりの部分がモバイルのブラウザから来るのに、ページは米国から配っており、動的な生成とA/Bテストのせいで CDN を生かし切れていなかったとも書いている。
:::

:::fact
解決策は、2021年の社内ハッカソンから始まったマイクロフロントエンドへの移行だ。Next.jsとTypeScriptで画面をモノリスから切り出し、データはGraphQLで取り、ハッカソンの構成ではデプロイをArgo CDでKubernetesへ流した。静的に作れるページはビルド時に生成してCDNに置き、キャッシュできない部分だけを米国のNext.jsアプリに戻す。連載の第3回は、移行したトピックページで、75パーセンタイルのFirst Contentful Paintが約35%、Time to First Byteが約320%改善した一方、Largest Contentful Paintはモノリスがわずかに勝っていたと、良くならなかった指標まで開示している。2024年5月の記事によれば、どのリクエストをどのアプリに渡すかはCloudflare Workersがルート設定を読んで決め、ログイン前とログイン後のトップページはアクセストークンのCookieの有無で振り分ける。
:::

:::fact
AIアシスタントの意図判定について、公式テックブログ（2025年5月）は、判定の手順を段階的に改良した経緯を書いている。当初はNVIDIAのNeMo Guardrailsと小さな埋め込みモデル（all-MiniLM-L6-v2）で、あらかじめ登録した例文との類似度だけで判定した。機能が増えて誤判定が目立つと、より大きい多言語の埋め込みモデル（multilingual-e5-base）に替えたが、意図の種類を足すうちに効果が薄れた。LLMに任せると精度は上がったが往復の遅延が増えるため、最終的には類似度がしきい値の0.85を超えれば埋め込みで決め、超えないときだけgpt-4.1-nanoに判定させる方式に落ち着いた。gpt-4.1はnanoより精度が3%高いがコストは20倍で、nanoに回るのは全発話の約32.5%、応答全体の平均遅延の増加は約10%と見積もっている。2025年9月の記事によれば、AIアシスタントとスキルの可視化機能（Skills Mapping）は、日本市場向けに多言語の埋め込みと日本語でのプロンプト設計を組み合わせて、構想から3か月足らずで本番に出した。その基盤を検証したあと、スペイン語とポルトガル語はさらに速く続き、今では新しい言語の追加は最初の開発の25%未満の手間で済むという。
:::

:::guess
日本語が生成AIの多言語化の最初の言語に選ばれたのは、10-Kが書く「アジア太平洋のUdemy Businessの売上の66%がベネッセ経由」という数字と無関係ではないとみられる。法人の顧客は、社員が母語でAIに質問できるかを導入の条件にしやすく、最も大きい非英語の法人市場から手を付けたと推測される。また、判定の大半を安い埋め込みで済ませ、迷うときだけLLMを呼ぶ設計は、受講者数に比例して膨らむ推論コストを抑える現実的な選択とみられる。
:::

:::guess
アプリケーション本体を載せているクラウドを明言した公式の文書は見当たらない。ただ、データ基盤の記事がS3・EMR・Redshift・SageMaker・Bedrockの利用を挙げていることから、主な基盤はAWSとみられる。Djangoのモノリスを一気に書き直さず、前段にCloudflare Workersを置いてページ単位でNext.jsのアプリへ移す方式は、決済や講師の管理画面のように重い機能をモノリスに残したまま、集客に効くページから速くしていく段階的な移行と推測される。
:::

## ビジネスモデル

Udemyの収益は、法人向けのUdemy Business、個人向けの買い切り講座、個人向けの定額制の3本でできている。講座を作るのは外部の講師で、売上の一部が講師に支払われる。

:::fact
2025年第4四半期・通期の決算リリースによれば、2025年の売上は7億8,980万ドルで、そのうち法人（Enterprise）部門が5億2,410万ドルと前年比6%増、個人（Consumer）部門が2億6,580万ドルと9%減だった。個人部門のうち定額制の売上は4,450万ドルと44%伸び、有料の定額制会員は34万3,000人と前年の約2倍になった。サブスクリプションの売上は全体の72%を占める。Udemy BusinessのARRは5億4,000万ドル（前年比4%増）、法人顧客は17,029社。通期の純利益は380万ドルで、Wikipediaによれば2024年の純損失は8,500万ドルだった。AIに関する講座の受講登録は2025年に前年比120%増えた。
:::

:::fact
講師への支払いについて、Udemyが2023年11月2日に講師へ出したお知らせによれば、マーケットプレイスで1本ずつ売れた講座の講師の取り分は37%のまま変えない一方、定額制の取り分は2024年1月に20%、2025年1月に17.5%、2026年1月に15%へ段階的に下げる。理由には、プラットフォーム・マーケティング・営業への投資を挙げ、講師への支払総額は毎年いまの水準以上になることを目標にすると書いた。この時点で、直近12か月に講師へ支払った額は2億ドル超だった。2025年度の10-Kによれば、2025年に講師が受け取った額は合計1億6,800万ドル。Udemy Businessの講座集に選ばれた講座の講師は、限られた例外を除き、他のプラットフォームでオンデマンドの講座を出さない独占条件に同意する。
:::

:::fact
Courseraの2026年第2四半期の四半期報告書（Form 10-Q）によれば、Udemyの取得の対価は6億7,360万ドルで、そのほとんどは1億1,660万株のCoursera株式だった。統合後の5月11日から6月30日までに、Udemyは売上1億380万ドル、純損失3,120万ドルを計上した。統合後もCourseraの報告セグメントは法人（Enterprise）と個人（Consumer）の2つのままで、同四半期の統合・再編関連の費用は7,980万ドルだった。Wikipediaによれば、2025年12月の合意時点でUdemyの株式価値は約9億3,000万ドルと見積もられていた。
:::

:::fact
アフィリエイトについて、Udemyの公式ページによれば、アフィリエイトプログラムはImpactのネットワーク上で運営され、講座ごとのリンク、サイト全体へのリンク、独自のリンクを発行できる。申し込みは3〜4営業日で審査される。報酬率は公式ページに明記されていない。ベネッセが運営するUdemyメディアの解説（2026年3月31日）によれば、日本ではImpactで申し込み、ベネッセの基準で審査・承認され、報酬率を上げるキャンペーンを随時実施している。
:::

:::guess
講師の取り分が、買い切りでは37%、定額制では15%と大きく違う点は、Udemyの重心の移動をそのまま映しているとみられる。個人部門の売上が減り、定額制と法人部門が伸びるほど、同じ講座から講師に渡る額は小さくなりやすい。2023年の時点で「直近12か月で2億ドル超」だった支払いが、2025年に1億6,800万ドルになったことは、その影響を示している可能性がある。一方で、個人向けの買い切り市場そのものが縮んでいる局面では、定額制に寄せなければ講師への支払いの原資も細るという見方もできる。講師にとっての条件と、会社としての収益の安定をどう両立させるかは、Courseraとの統合後も続く論点と推測される。
:::

:::guess
アフィリエイトの面では、報酬率を公開していないため、1件あたりの報酬は申し込んで承認されるまで見積もりにくいとみられる。開発者向けのブログなら、「この技術を学ぶならこの講座」という具体的な講座へのリンクのほうが、トップページへのリンクより成約につながりやすいと推測される。日本で申し込むとベネッセが審査するため、サイトの内容と講座の分野が合っているかが見られるとみられる。
:::

Udemyが売ってきたのは、「誰でも教えられて、誰でも1本から学べる」自由さだった。その自由さは8,400万人の学習者と9万人の講師を集めたが、稼ぎの中心は、企業が人数分をまとめて払う定額制へ移った。Djangoのモノリスを前段のCloudflare Workersで少しずつ切り分け、AIアシスタントには安い判定と高い判定を使い分けさせ、日本語から多言語化を始める。いずれも、世界中の法人に同じ品質で学びを届けるための地ならしに見える。Courseraの一部になった今、その地ならしが大学の講座とどうつながるのかが、次の見どころだ。
