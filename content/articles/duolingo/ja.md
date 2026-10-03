---
service: "Duolingo"
title: "罪悪感を科学したフクロウ — Duolingoが5,000万人を毎日連れ戻す設計"
description: "語学学習アプリの王者Duolingo。ストリークと損失回避のゲーミフィケーション、無料+サブスク二層のビジネスモデル、Python数百マイクロサービス+DynamoDBのAWS構成、GPT-4搭載のDuolingo Maxまでを公開情報から解剖する。"
lead: "緑のフクロウの通知を無視すると、なぜか罪悪感が湧く。Duolingoは語学学習を「続けさせる」ことに関して、おそらく地球上で最も研究の進んだプロダクトだ。5,000万DAUを毎日連れ戻すゲーミフィケーションの構造と、それを支えるAWS上の数百のマイクロサービスを解剖する。"
category: consumer-app
tags: [language-learning, gamification, aws, python, subscription]
publishedAt: "2026-07-17"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://www.duolingo.com/"
vendor: "Duolingo, Inc."
origin: "US"
heroTheme: "duolingo"
scores: { product: 4.5, ux: 4.5, tech: 4.0, business: 4.5 }
techStack:
  - layer: "バックエンド言語"
    name: "Python 3 (マイクロサービス群)"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2025-03）に、同期Pythonで書かれたサービスコードを大量に抱え、非同期Pythonへの移行を始めたと明記。マイクロサービスが「数百」ある点は同ブログのaislackbot記事（2026-05）で確認"
    evidenceUrl: "https://blog.duolingo.com/async-python-migration/"
  - layer: "性能クリティカル部"
    name: "Scala (Session Generator)"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2017-01）。出題エンジンをPythonから書き換え、平均レイテンシを750ms→14msに短縮と明記。以降の構成変更は非公開"
    evidenceUrl: "https://blog.duolingo.com/rewriting-duolingos-engine-in-scala/"
  - layer: "クラウド基盤"
    name: "AWS"
    confidence: confirmed
    evidence: "AWSパートナー導入事例に、創業時からAWS上に構築し、AWS上で100以上のマイクロサービスを運用と明記（掲載時点）"
    evidenceUrl: "https://d1.awsstatic.com/case-studies/partner-case-studies/Duolingo%20PDF.pdf"
  - layer: "コンテナ"
    name: "Amazon ECS"
    confidence: confirmed
    evidence: "AWSパートナー導入事例に、モノリスからDockerベースのマイクロサービスへ移行し、Amazon ECSへ大規模移行したと明記"
    evidenceUrl: "https://d1.awsstatic.com/case-studies/partner-case-studies/Duolingo%20PDF.pdf"
  - layer: "IaC"
    name: "Terraform"
    confidence: confirmed
    evidence: "AWSパートナー導入事例に、ECSをTerraformで管理していると明記"
    evidenceUrl: "https://d1.awsstatic.com/case-studies/partner-case-studies/Duolingo%20PDF.pdf"
  - layer: "コンピューティング費用の最適化"
    name: "Spotinst (Elastigroup)"
    confidence: confirmed
    evidence: "AWSパートナー導入事例（Spotinst）に、Elastigroupでスポット/リザーブドインスタンスの利用を最適化し、コンピューティングコストを1四半期で60%以上、AWS全体のコストを25%削減と明記（掲載時点）"
    evidenceUrl: "https://d1.awsstatic.com/case-studies/partner-case-studies/Duolingo%20PDF.pdf"
  - layer: "データベース"
    name: "Amazon DynamoDB"
    confidence: confirmed
    evidence: "AWS公式の導入事例動画の題名に「DynamoDBに310億アイテムを保存」とある。読み取り24,000ユニット/秒は、現在は削除されたAWS公式導入事例ページのアーカイブで確認（いずれも掲載時点）"
    evidenceUrl: "https://www.youtube.com/watch?v=fhnAvn2YxZA"
  - layer: "音声合成"
    name: "Amazon Polly"
    confidence: confirmed
    evidence: "AWS公式機械学習ブログにDuolingoのTTS採用事例として掲載"
    evidenceUrl: "https://aws.amazon.com/blogs/machine-learning/powering-language-learning-on-duolingo-with-amazon-polly/"
  - layer: "CDN"
    name: "Amazon CloudFront"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー実観測（x-cache: Miss from cloudfront、via: cloudfront.net、x-amz-cf-pop: NRT、2026-09-28）。公式の導入事例での明言は見当たらない"
  - layer: "サービス間通信"
    name: "Envoy"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー実観測（x-envoy-upstream-service-time、2026-09-28）。公式ドキュメントでの明言は見当たらない"
  - layer: "サービスカタログ"
    name: "OpsLevel"
    confidence: likely
    evidence: "OpsLevel社の公開資料（2023-01）に、Duolingoが315サービスを取り込んだと記載。Duolingo側の一次情報ではないため likely とする"
    evidenceUrl: "https://www.opslevel.com/resources/build-your-catalog-with-service-detection"
  - layer: "会話AI"
    name: "OpenAI GPT-4 (Duolingo Max)"
    confidence: confirmed
    evidence: "公式ブログのDuolingo Max発表（2023-03）に「OpenAIのGPT-4を活用」と明記（2026-09-28確認時点でも同記載）"
    evidenceUrl: "https://blog.duolingo.com/duolingo-max/"
sources:
  - label: "Duolingo IR: DAU5,000万人突破・DAU+36%/売上+41%（2025年Q3決算リリース）"
    url: "https://investors.duolingo.com/news-releases/news-release-details/duolingo-surpasses-50-million-daily-active-users-grows-dau-36"
    accessedAt: "2026-07-17"
  - label: "Duolingo 2026年第2四半期 株主レター（SEC Form 8-K添付・2026-08-05）"
    url: "https://www.sec.gov/Archives/edgar/data/0001562088/000162828026053299/q2fy26duolingo6-30x26share.htm"
    accessedAt: "2026-09-28"
  - label: "Duolingo Blog: Duolingo Max発表（GPT-4採用・2023-03）"
    url: "https://blog.duolingo.com/duolingo-max/"
    accessedAt: "2026-09-28"
  - label: "Duolingo Blog: 出題エンジンのScala書き換え（2017-01）"
    url: "https://blog.duolingo.com/rewriting-duolingos-engine-in-scala/"
    accessedAt: "2026-09-28"
  - label: "AWS公式導入事例: DynamoDBに310億アイテム（ページは削除済み・Internet Archiveの保存版）"
    url: "https://web.archive.org/web/20210119193643/https://aws.amazon.com/solutions/case-studies/duolingo-case-study-dynamodb/"
    accessedAt: "2026-09-28"
  - label: "AWS公式動画: Duolingo Stores 31 Billion Items on Amazon DynamoDB"
    url: "https://www.youtube.com/watch?v=fhnAvn2YxZA"
    accessedAt: "2026-09-28"
  - label: "AWSパートナー導入事例（Spotinst）: コンピューティングコストを1四半期で60%以上削減"
    url: "https://d1.awsstatic.com/case-studies/partner-case-studies/Duolingo%20PDF.pdf"
    accessedAt: "2026-09-28"
  - label: "Duolingo公式ブログ: 数百のマイクロサービスを運用（2026-05・原OpsLevel事例ページ404のため差し替え）"
    url: "https://blog.duolingo.com/aislackbot/"
    accessedAt: "2026-09-28"
  - label: "Duolingo公式ブログ: 非同期Pythonへの移行（2025-03）"
    url: "https://blog.duolingo.com/async-python-migration/"
    accessedAt: "2026-09-28"
  - label: "OpsLevel: Service Detectionでカタログを構築（Duolingoの315サービス取り込み・2023-01）"
    url: "https://www.opslevel.com/resources/build-your-catalog-with-service-detection"
    accessedAt: "2026-09-28"
---

語学アプリは無数にあるが、「アプリを開かないと落ち着かない」状態まで人を持っていけるのはDuolingoだけだ。教材の質ではなく継続の設計で勝つ——このプロダクト哲学は賛否両方の議論を生みながら、5,000万人を毎日連れ戻し続けている。

## サービス解説

Duolingoは無料で始められる語学学習アプリだ。レッスンは数分単位に刻まれ、ゲームのようにXP・連続記録・リーグを積み上げながら進む。

:::fact
公式IRリリース（2025年第3四半期）によれば、DAU（1日あたり利用者）は5,000万人を突破し、前年同期比でDAUは36%、売上は41%成長した。最新の2026年第2四半期の株主レター（2026年8月5日）では、DAUは5,870万人（前年同期比23%増）、MAUは1億4,060万人、有料会員は1,270万人に達している。プランは無料（広告つき）、Super Duolingo（広告なし等）、そして最上位のDuolingo Max（GPT-4を使ったVideo Call・Roleplay機能つき、2023年3月発表・188の国と地域で提供）の三層構成だ。
:::

:::pull
Duolingoの競合は他の語学アプリではない。スマホの中のあらゆる娯楽だ——設計のすべてがそれを物語っている。
:::

::scorecard

## UX分析

Duolingoのゲーミフィケーションは、行動科学の応用例として教科書に載るレベルで作り込まれている。

- **ストリーク（連続記録）は損失回避の装置**。「今日やる理由」ではなく「途切れさせたくない理由」で人を動かす。積み上げた日数が大きいほど中断の心理的コストが上がる、負債型のモチベーション設計だ。
- **リーグは社会的比較を毎週リセットする**。週次のリーダーボードが「あと少しで昇格/降格」という緊張を人工的に作り、学習量ではなく順位が目標に置き換わる。
- **フクロウの通知はキャラクターの人格で送られる**。無機質なリマインダーではなく「Duoが悲しんでいる」。ミーム化した通知文面は、ブランドマーケティングとリテンション施策が一体化した稀有な例だ。
- **批判にも触れておくべきだ**。順位やストリークの最適化が言語習得そのものと乖離しうる点は、ユーザー・研究者の双方から繰り返し指摘されている。「続けさせる天才」であることと「習得させる最適解」であることは、同じではない。

## 技術構成

::techstack

:::fact
Duolingo公式エンジニアリングブログによれば、同社は数百のマイクロサービスを運用しており（2026年5月）、同期Pythonで書かれたサービスコードを大量に抱えて非同期Pythonへの移行を進めている（2025年3月）。AWSパートナー事例によれば、同社は創業時からAWS上に構築している。公式エンジニアリングブログ（2017年）は、出題順序を決める中核モジュールSession GeneratorをPythonからScalaへ書き換え、平均レイテンシを750msから14msへ98%短縮したと記録している。AWS公式事例ではDynamoDBに310億アイテムを保存している。パートナー事例（Spotinst）によれば、モノリスからTerraform管理のAmazon ECS上のマイクロサービスへ移行したところコストが上昇したため、Spotinst（Elastigroup）でスポット/リザーブドインスタンスの利用を最適化し、コンピューティングコストを1四半期で60%以上、AWS全体のコストを25%削減した。音声はAmazon Pollyで合成される。当サイトの2026年9月28日の観測でも、CloudFront（x-cache）とEnvoy（x-envoy-upstream-service-time）のヘッダーが確認できた。
:::

:::guess
Envoyヘッダーの存在から、マイクロサービス間の通信はサービスメッシュないしEnvoyベースのプロキシ層で統制されているとみられる。数百のサービスを少人数で回すために、OpsLevel社の公開資料に登場するサービスカタログ（OpsLevel）やIaC（Terraform）と合わせて「サービスの標準化」に投資している構図で、Session Generatorの件が示すように「まずPythonで速く作り、ボトルネックだけ硬い言語に置き換える」という現実的な使い分けが今も基本方針と推測される。
:::

訂正（2026年9月28日）。初版では、パートナー事例の「コンピューティングコストを1四半期で60%以上削減」を「Terraform管理のECS移行による」成果と書いていたが、誤りだった。同事例によれば、ECSへの移行後にコストはむしろ上昇しており、60%以上の削減はSpotinst（Elastigroup）によるインスタンス最適化の成果として記載されている。あわせて、初版の「バックエンドは大半がPython 3」という記述は出典で「大半」までは確認できなかったため、公式ブログの記述どおりに改めた。

## ビジネスモデル

Duolingoの収益は「無料ユーザーを広告とバイラルの燃料にし、本気層をサブスクに引き上げる」二段構えだ。

:::fact
無料プランは広告つきで、Super Duolingoが広告除去などの快適さを、Duolingo MaxがGPT-4によるVideo Call・Roleplayという学習体験そのものの拡張を売る。2026年第2四半期の株主レターによれば、売上は2億9,850万ドル（前年同期比18%増）で、うちサブスクリプション収入が2億5,800万ドル、広告収入が2,110万ドルだった。同社は上場企業（NASDAQ: DUOL）として四半期ごとに数字を開示している。
:::

:::guess
売上の大半をサブスクリプションが占める構成から見て、広告は無料ユーザーの規模を収益化する補助線とみられる。Maxの位置づけは単価引き上げ以上の意味を持つ——生成AIで「人間の会話相手」の代替を最上位プランに置くことで、従来は教室やオンライン英会話に流れていた支出を取りに行く動きだ。一方でGPT-4の推論コストは従来機能より重いはずで、Maxの粗利構造は価格改定やモデル切り替えで今後も動くと推測される。
:::

「教育アプリなのにゲームより中毒性がある」という批判は、Duolingoにとってはおそらく賛辞だ。学習の最大の敵が挫折である以上、続けさせる技術は教材の質と同じくらい本質的な競争力になる——その割り切りを5,000万DAUという規模まで実証してみせたことが、このプロダクトの発明だ。
