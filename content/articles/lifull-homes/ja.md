---
service: "LIFULL HOME'S"
title: "問い合わせで稼ぐポータルが、問い合わせの来る物件を自分で消す — LIFULL HOME'Sの「物件鮮度」という賭け"
description: "不動産・住宅情報サイト「LIFULL HOME'S」。収益の柱は不動産会社や工務店からの掲載・問い合わせ課金なのに、AIと管理会社のデータ連携で「おとり物件」を自動で非掲載にし続けている。その理由を、決算短信・決算補足資料、公式プレスリリース、公式エンジニアリングブログから解剖する。SymfonyのモノリスからKubernetes基盤KEELへ移ってきた技術の足取りも読む。"
lead: "LIFULL HOME'Sの稼ぎ方は、物件を載せる不動産会社や、カタログを配る工務店から受け取る掲載料と問い合わせ料だ。ところがこのポータルは、問い合わせを呼び込むはずの物件を、自社開発のAIで毎日のように消している。2026年1〜3月にAIが自動で非掲載にした物件の数は、前年同期の163倍。問い合わせが減りかねない施策に、なぜ投資し続けるのか。決算資料と開発者ブログから解剖する。"
category: consumer-app
tags: [real-estate, portal, machine-learning, kubernetes, php]
publishedAt: "2026-09-28"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://www.homes.co.jp/"
# Affiliate link placeholder: the owner must join a LIFULL HOME'S affiliate program via an ASP
# before enabling this block. Third-party listings report that A8.net carries
# "LIFULL HOME'S 住まいの窓口" (reward on an in-store or video consultation within 30 days of
# a web booking); this was not confirmed on an official LIFULL page. Check the program terms
# (e.g. rules on comparison articles) on the ASP after joining.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<lifull-homes-affiliate-tracking-link>"
#   program: "LIFULL HOME'S Sumai no Madoguchi (A8.net)"
vendor: "LIFULL Co., Ltd."
origin: "JP"
heroTheme: "lifull-homes"
scores: { product: 4.0, ux: 3.5, tech: 3.5, business: 4.0 }
techStack:
  - layer: "アプリケーション実行基盤"
    name: "KEEL (in-house Kubernetes PaaS + Istio)"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2020-12）に、KEELは2018年初頭から開発・運用している内製プロジェクトで、マルチテナントなシングルクラスタであり「既にLIFULLのアプリケーションの大部分がこのKEEL上で稼働して」いると明記。2024-08の記事ではKEELを「Kubernetesベースの内製PaaS」と呼び、IstioのAuthorizationPolicyやmTLSで認可していると書いている"
    evidenceUrl: "https://www.lifull.blog/entry/2020/12/02/000000"
  - layer: "クラウド"
    name: "AWS"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2020-12）に、LIFULLは「数年前のオンプレミスからの AWS 移行を契機にマイクロサービス化に踏み切」ったと明記。2026-04の記事でも、行動ログを格納するS3バケットのポリシーやCloudTrailでアクセス元を洗い出したと書かれている"
    evidenceUrl: "https://www.lifull.blog/entry/2020/12/02/000000"
  - layer: "バックエンド（旧来の中核）"
    name: "Symfony (PHP) monolith + Sinatra (Ruby) BFF/API"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2021-03）に、LIFULL HOME'Sのバックエンドは「その大部分がSymfony(PHP)ベースのモノリスと、ともにSinatra(Ruby)ベースのBFFとAPIサーバーの3層構造」で、モノリスは9年以上開発されていると明記。同じ記事は新しいBFFをTypeScript + LoopBack（Clean Architecture）で作ったと書いている。2021年時点の構成で、現在の比率は分からない"
    evidenceUrl: "https://www.lifull.blog/entry/2021/03/15/100000"
  - layer: "賃貸物件詳細ページ"
    name: "Express + TypeScript, Preact SSR, Tailwind CSS, Stimulus"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2023-03）に、10年以上運用されてきた主要リポジトリから賃貸の物件詳細ページを切り出し、Express x TypeScript、Preact x TypeScriptによるサーバーサイドレンダリング、Tailwind CSS、Stimulusで作り直したと明記。実行基盤はKEEL、テストはVitestとPlaywright"
    evidenceUrl: "https://www.lifull.blog/entry/2023/03/02/120000"
  - layer: "行動ログ基盤"
    name: "Tealium + Amazon S3 + BigQuery"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2026-04）に、賃貸の物件詳細ページの行動ログ送信だけが旧システムに残り、表示1回ごとにバックエンドへのリクエストが実質2倍になっていたため、社内のデファクトであるTealiumへ移したと明記。旧ログはS3に置かれ、依存システムは20以上、BigQueryにも連携されていた"
    evidenceUrl: "https://www.lifull.blog/entry/2026/04/10/100211"
  - layer: "物件情報の品質管理"
    name: "Self-developed bait-listing detection models"
    confidence: confirmed
    evidence: "公式プレスリリース（2026-05-13）に、過去に広告掲載された物件情報や独自調査の募集状況を自社開発AIに学習させ、賃貸物件から「おとり物件」を検知して自動で非掲載にしていること、2025年1月の稼働以降は複数のAIモデルを並行運用して比較検証していることを明記"
    evidenceUrl: "https://lifull.com/news/48558/"
  - layer: "対話AI"
    name: "LIFULL AI (built on OpenAI ChatGPT technology)"
    confidence: confirmed
    evidence: "公式プレスリリース（2025-12-17）に、統合型AIエージェント「LIFULL AI」は「ChatGPT（OpenAI社）の技術をベースに」LIFULLの蓄積データを接続したもので、第一弾として不動産・住宅情報領域の「AIホームズくん」をリリースすると明記"
    evidenceUrl: "https://lifull.com/news/45744/"
  - layer: "CDN"
    name: "Amazon CloudFront"
    confidence: likely
    evidence: "当サイトの実観測（2026-09-28）で、www.homes.co.jp のトップ・賃貸・注文住宅の各ページが via: CloudFront と x-amz-cf-pop: NRT12-P2 を返し、DNSはwww2.homes.co.jp経由でAWSのアドレスを指す。公式ドキュメントでの明言は見当たらない"
sources:
  - label: "株式会社LIFULL: 2026年9月期 第3四半期決算短信〔IFRS〕（連結）（2026-08-12）"
    url: "https://lifull.com/doc/2026/08/260812_FY2026Q3_report.pdf"
    accessedAt: "2026-09-28"
  - label: "株式会社LIFULL: 2026年9月期 第3四半期 決算補足資料（2026-08-12）"
    url: "https://lifull.com/doc/2026/08/260812_FY2026Q3_presentation.pdf"
    accessedAt: "2026-09-28"
  - label: "LIFULL公式ニュース: LIFULL HOME'S、自社開発AIの「おとり物件」検知精度を向上！AI検知による自動非掲載物件数は前年同期比163倍に拡大（2026-05-13）"
    url: "https://lifull.com/news/48558/"
    accessedAt: "2026-09-28"
  - label: "LIFULL公式ニュース: LIFULL HOME'S、おとり物件検知システムを売買領域に展開（2026-04-23）"
    url: "https://lifull.com/news/48447/"
    accessedAt: "2026-09-28"
  - label: "LIFULL公式ニュース: LIFULL HOME'Sが「おとり物件」撲滅に向けて、不動産業務支援SaaS「いえらぶCLOUD」と連携（2026-09-17）"
    url: "https://lifull.com/news/50131/"
    accessedAt: "2026-09-28"
  - label: "LIFULL公式ニュース: LIFULL HOME'S、中古マンション・中古一戸建ての洪水・土砂災害リスク判定の精度を向上（2026-09-18）"
    url: "https://lifull.com/news/50253/"
    accessedAt: "2026-09-28"
  - label: "LIFULL公式ニュース: LIFULL HOME'S 注文住宅は見学予約機能の追加でモデルハウス一覧への流入が+53%、詳細ページへの遷移率も+62%と大幅上昇（2026-04-27）"
    url: "https://lifull.com/news/48489/"
    accessedAt: "2026-09-28"
  - label: "LIFULL公式ニュース: 【顧客満足度98.6%】「LIFULL HOME'S 住まいの窓口」が累計3,604組の回答から最新調査結果を発表（2026-09-24）"
    url: "https://lifull.com/news/50285/"
    accessedAt: "2026-09-28"
  - label: "LIFULL公式ニュース: 統合型AIエージェント「LIFULL AI」を発表（2025-12-17）"
    url: "https://lifull.com/news/45744/"
    accessedAt: "2026-09-28"
  - label: "LIFULL HOME'S Business: 工務店集客は反響課金で無駄なく｜LIFULL HOME'S 注文住宅"
    url: "https://iezukuri-business.homes.jp/lists/lifull-service/lifull-service-00004"
    accessedAt: "2026-09-28"
  - label: "LIFULL HOME'S 住まいの窓口: よくある質問"
    url: "https://counter.homes.co.jp/faq/"
    accessedAt: "2026-09-28"
  - label: "LIFULL Creators Blog: LIFULLの全社アプリケーション実行基盤 KEEL について（2020-12）"
    url: "https://www.lifull.blog/entry/2020/12/02/000000"
    accessedAt: "2026-09-28"
  - label: "LIFULL Creators Blog: Clean Architectureを採用したBackend For Frontendの開発とこれまでの所感（2021-03）"
    url: "https://www.lifull.blog/entry/2021/03/15/100000"
    accessedAt: "2026-09-28"
  - label: "LIFULL Creators Blog: LIFULL HOME'S 賃貸物件詳細ページの基盤刷新について（2023-03）"
    url: "https://www.lifull.blog/entry/2023/03/02/120000"
    accessedAt: "2026-09-28"
  - label: "LIFULL Creators Blog: LLMを利用したPlatform Engineering（2024-08）"
    url: "https://www.lifull.blog/entry/2024/08/29/173000"
    accessedAt: "2026-09-28"
  - label: "LIFULL Creators Blog: LIFULL HOME'S 賃貸における行動ログ送信処理の整理と、エンジニアリングのROI（2026-04）"
    url: "https://www.lifull.blog/entry/2026/04/10/100211"
    accessedAt: "2026-09-28"
---

不動産ポータルは、問い合わせの数で食べている。物件を載せる不動産会社も、カタログを配る工務店も、問い合わせが来るからお金を払う。そのポータルが、問い合わせを呼ぶはずの物件を自分の手で消していく。LIFULL HOME'Sは2025年から、募集の終わった「おとり物件」をAIで見つけて自動で非掲載にし、2026年には管理会社の業務システムとも直接つないだ。短期の問い合わせを削ってでも守ろうとしているものは何か。

## サービス解説

LIFULL HOME'Sは、賃貸、新築・中古のマンションと一戸建て、注文住宅、売却査定、不動産投資までを扱う不動産・住宅情報サイトだ。運営は東証プライム上場の株式会社LIFULL。ユーザーは無料で物件を探し、掲載する不動産会社や工務店、査定を受ける不動産会社が料金を払う。窓口はWebとアプリのほか、対面で住まい探しを相談できる「LIFULL HOME'S 住まいの窓口」もある。

:::fact
決算短信（2026-08-12）によれば、LIFULLの2026年9月期第3四半期累計（2025年10月〜2026年6月）の売上収益は219.8億円（前年同期比4.4%増）、営業利益は32.3億円（同7.9%増）。決算補足資料によれば、このうちHOME'S関連事業の売上収益は200.4億円（同4.5%増）、セグメント利益は36.3億円（同5.8%増）で、セグメント売上は11四半期連続で前年同期を上回った。海外事業は2025年9月期に非継続事業へ分類され、報告セグメントはHOME'S関連事業だけになっている。
:::

:::fact
同じ決算補足資料によれば、HOME'S関連事業の顧客数（9ヶ月平均）は34,089で過去最高（前年同期比2.9%増）、ARPA（HOME'S関連事業の売上÷顧客数）は65,325円（同1.5%増）。通期予想は8月に修正され、連結売上収益は期初の297億円から293億円へ下げた一方、営業利益は30億円から39億円へ上げた。HOME'S関連事業の売上予想は265億円。2028年9月期を最終年度とする中期経営計画は、連結売上収益350〜400億円、営業利益55〜60億円を目標に掲げる。
:::

:::pull
2026年1〜3月にAIが自動で非掲載にした物件の数は、前年同期の163倍になった。問い合わせで稼ぐポータルが、問い合わせの来る物件を消している。
:::

::scorecard

## UX分析

LIFULL HOME'SのUXは、検索の便利さそのものよりも、「載っている情報を信じてよいか」に投資が寄っている。大家や管理会社の側から見ても、この変化は無関係ではない。

- **「問い合わせたのにもう借りられない」を減らす**。公式発表（2026-05-13）は、この体験を「ユーザーにとって大きな負担」と書く。LIFULL HOME'Sは管理会社の物件データとの照合で募集終了物件を非掲載にする取り組みに加え、2025年1月から自社開発AIで「おとり物件」を検知して自動で消している。AIは、連携していない管理会社の物件や、1社しか載せていない物件の募集終了にも効くという。
- **売買にも広げた**。2026年2月には中古住宅の売買領域でも同じ仕組みを動かし始め、1日あたりの自動非掲載数は1ヶ月で約5倍に増えた。同社の調査では、中古住宅の購入検討者の3人に1人がおとり物件に遭遇していたという。
- **管理会社の業務システムと直接つなぐ**。2026年9月16日には、全国17,000社以上が導入する賃貸管理システム「いえらぶCLOUD」と連携し、データ提供に承諾した管理会社の物件情報と募集ステータスを日次で取り込み始めた。これまでの個別連携は「一社ずつ広げていく方法だけでは」限界があったと責任者はコメントしている。決算補足資料には、関西を中心に5万戸以上を管理するTAKUTOとのデータ連携（2026年5月）も並ぶ。
- **立地のリスクを物件ごとに出す**。2026年9月8日からは、中古マンションと中古一戸建ての詳細ページで、物件の緯度・経度から洪水・土砂災害の想定区域との重なりを1件ずつ判定している。2026年8月13日の千葉豪雨の後、千葉県内の物件ではハザードマップの閲覧ユーザー数が豪雨前の1週間と比べて134.3%に増えたという。発表は、想定区域に入ることが物件の危険や価値の毀損を意味するわけではないとも書き添えている。
- **注文住宅は「建物のない買い物」を見学予約で補う**。2026年1月のリニューアルで「モデルハウスから探す」を入口に置き、見学予約機能を加えた。1〜3月にモデルハウス・展示場一覧への流入は+53%、詳細ページへの遷移率は+62%伸びたと発表している。

## 技術構成

::techstack

:::fact
公式エンジニアリングブログ（2020-12）によれば、LIFULLは数年前にオンプレミスからAWSへ移ったのを機にマイクロサービス化へ踏み切り、その実行基盤としてKubernetesベースの内製PaaS「KEEL」を2018年初頭から開発・運用している。マルチテナントなシングルクラスタで、同記事の時点で「LIFULLのアプリケーションの大部分」がKEEL上で動いていた。2024年8月の記事では、KEELチームが社内向けの汎用AI（AutoGPT実装）も開発しており、その公開にあたってはKubernetesクラスタ内の通信も含めてIstioのAuthorizationPolicyで認可していると書いている。
:::

:::fact
一方、アプリケーションの中核は長く一つのモノリスだった。2021年3月の記事によれば、LIFULL HOME'Sのバックエンドは大部分がSymfony（PHP）のモノリスと、Sinatra（Ruby）のBFF・APIサーバーの3層構造で、モノリスは9年以上開発されてきた。2023年3月の記事は、10年以上運用されてきた主要リポジトリから賃貸の物件詳細ページを切り出し、Express + TypeScriptとPreactのサーバーサイドレンダリング、Tailwind CSS、Stimulusで作り直したと報告している。技術選定では「挑戦」するのをやめ、「学習コストの低いフレームワーク」を選んだという。2026年4月の記事では、その詳細ページで行動ログの送信だけが旧システムに残り、表示1回ごとにバックエンドへのリクエストが実質2倍になっていた問題を、20以上の依存システムを洗い出したうえでTealiumへ移して片付けている。
:::

:::guess
おとり物件の検知が「データ連携 → AI → 人の確認」の三段になっているのは、ポータルの手元に真実のデータがないからだとみられる。募集中かどうかを知っているのは管理会社の業務システムで、ポータルに届くのは不動産会社が入稿した広告だけだ。LIFULLは管理会社と一社ずつつなぎ、つながらない部分をAIの推定で埋め、最後を人が確かめる。いえらぶCLOUDとの連携は、この一段目を一社ずつではなく業務システムの単位で広げる動きと読める。モノリスから物件詳細ページを切り出し、ログの依存まで地道に剥がしてきた経緯を見ると、外部データを日次で取り込んで掲載に反映する仕組みを足せる土台が、ここ数年でようやく整ったとも推測される。
:::

## ビジネスモデル

収益のほぼすべてはHOME'S関連事業で、払い手は不動産会社・工務店・建築会社だ。料金の取り方は領域ごとに違う。

:::fact
公式の事業者向けページによれば、LIFULL HOME'S 注文住宅は工務店に対して反響課金を採っており、カタログ請求や来場予約といった反響の数に応じて料金が発生する。事業者は管理画面で予算額（反響数）の上限を設定できる。決算補足資料によれば、売却査定では不動産会社から送客手数料を受け取り、地方創生事業の説明では、市場の活性化がLIFULL HOME'Sや健美家の「掲載物件数」と「問合せ・成約」に連動する「掲載・問合せ課金モデル」だと書いている。住まいの窓口は、公式FAQによれば建築会社・不動産会社からの紹介料で運営され、利用者は無料。2026年9月の発表では78店舗を展開し、累計27,000組以上が利用した。
:::

:::fact
決算補足資料の四半期推移によれば、HOME'S関連事業の売上収益は毎年1〜3月（第2四半期）に最も大きくなる。2024年9月期は5,527百万円→6,575百万円、2025年9月期は5,951百万円→7,079百万円、2026年9月期は6,361百万円→7,223百万円（第1四半期→第2四半期）。連結の広告宣伝費・営業費も同じ四半期に膨らみ、2026年9月期は第1四半期の1,877百万円から第2四半期に2,998百万円になった。資料は、賃貸の繁忙期に合わせてテレビCMとSNSキャンペーンを投下したと説明している。不動産投資の健美家は、2026年6月時点で投資物件掲載数9万件以上とされる。
:::

:::guess
掲載・問い合わせで課金するポータルにとって、おとり物件は短期的には問い合わせを生む在庫にもなりうる。それでもLIFULLが消す側に回るのは、課金の相手である不動産会社にとっても「すでに決まった物件への問い合わせ」は無駄な反響だからとみられる。反響課金の工務店が予算の上限を気にするのと同じで、事業者が払いたいのは成約に近い問い合わせだ。顧客数が2.9%伸びる一方でARPAの伸びが1.5%にとどまる今、単価を上げる材料は問い合わせの質しかない、という判断とも読める。1〜3月の繁忙期に広告費を積んで集めたユーザーを、募集の終わった物件で失望させないことが、ARPAの伸びと中計の営業利益55〜60億円をつなぐ前提になっていると推測される。
:::

物件を載せるほど稼げる商売で、載っている物件を減らす。LIFULL HOME'Sの「物件鮮度」は、ユーザーの信頼と事業者の反響の質を同じ一つの数字で買いにいく賭けだ。その賭けを支えているのは、10年以上続いたモノリスを少しずつ剥がしてきたエンジニアリングと、管理会社の業務システムへ伸びるデータの配管である。
