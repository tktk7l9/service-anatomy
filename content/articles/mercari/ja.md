---
service: "メルカリ"
title: "1.1兆円の中古品経済圏がクレジットカードを発行するまで — メルカリの循環と与信"
description: "日本最大のフリマアプリ、メルカリ。GMV1兆1,209億円の二次流通が、取引データを与信に変えてメルカードを500万枚発行するまでのビジネス転回と、PHPモノリスを4年がかりでGoマイクロサービスに置き換えた技術史を、決算短信と公式エンジニアリングブログから解剖する。"
lead: "2022年8月4日、メルカリの社内で「web-2」と呼ばれたPHPモノリスが停止した。2018年に始まった置き換えの完了までに4年かかっている。その裏で、中古品の売買データは与信データへと転化し、フリマアプリはクレジットカードを500万枚発行する金融事業者になった。循環経済と金融が絡み合う構造を解剖する。"
category: consumer-app
tags: [marketplace, c2c, fintech, go, kubernetes]
publishedAt: "2026-07-21"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://jp.mercari.com/"
vendor: "株式会社メルカリ"
origin: "JP"
heroTheme: "mercari"
scores: { product: 4.5, ux: 4.0, tech: 4.0, business: 4.0 }
techStack:
  - layer: "バックエンド"
    name: "Go + Kubernetes"
    confidence: confirmed
    evidence: "公式エンジニアリングブログに、PHP製モノリシックAPIサーバーをKubernetes基盤上のGoマイクロサービスへ置き換えたと明記"
    evidenceUrl: "https://engineering.mercari.com/en/blog/entry/20220830-15d4e8480e/"
  - layer: "コンテナ基盤"
    name: "Google Kubernetes Engine (GKE)"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2023-10-30）に、メルカリのマイクロサービスはすべてGoogle Kubernetes Engine（GKE）のKubernetesクラスタ上で動いていると明記"
    evidenceUrl: "https://engineering.mercari.com/en/blog/entry/20231027-reducing-inter-zone-egress-costs-with-zone-aware-routing-in-mercaris-kubernetes-clusters/"
  - layer: "クラウド基盤"
    name: "Google Cloud / Google Cloud Spanner / Google Cloud Storage"
    confidence: confirmed
    evidence: "公式エンジニアリングブログに、セッション情報を保存するデータベースとしてCloud Spannerを選び、静的HTMLをGoogle Cloud Storage（GCS）から返す設計にしたと明記"
    evidenceUrl: "https://engineering.mercari.com/en/blog/entry/20220830-15d4e8480e/"
  - layer: "移行元モノリス"
    name: "PHP"
    confidence: confirmed
    evidence: "公式エンジニアリングブログに、PHP製Webサーバー（web-2）を2022年8月4日に停止したと明記。2018年5月の再設計開始から4年"
    evidenceUrl: "https://engineering.mercari.com/en/blog/entry/20220830-15d4e8480e/"
  - layer: "公式サイト配信"
    name: "Cloudflare + Google Cloud"
    confidence: confirmed
    evidence: "当サイトのHTTPヘッダー実観測（cf-ray: …-NRT・server: cloudflareとvia: 1.1 googleが併存、2026-07-21に観測し2026-09-28に再観測して変化なし）。Cloudflareの背後にGoogle Cloudのロードバランサ"
    evidenceUrl: "https://jp.mercari.com/"
sources:
  - label: "メルカリ 2025年6月期 決算短信（IFRS・連結・2025-08-05）"
    url: "https://pdf.irpocket.com/C4385/bffO/gPP8/rMjw.pdf"
    accessedAt: "2026-09-28"
  - label: "メルカリ 2026年6月期 決算短信（IFRS・連結・2026-08-05、TDnet開示資料の写し）"
    url: "https://finance-frontend-pc-dist.west.edge.storage-yahoo.jp/disclosure/20260805/20260804508114.pdf"
    accessedAt: "2026-09-28"
  - label: "メルカリ IR資料: FY2025.6 Mercari CEO and Shareholder Dialogue（MAU 2,300万・メルカード発行500万枚超）"
    url: "https://pdf.irpocket.com/C4385/K2Hn/r4i9/eYQn.pdf"
    accessedAt: "2026-09-28"
  - label: "メルペイ公式ニュース: 「メルカード ゴールド」の提供開始（2025-03-17）"
    url: "https://jp.merpay.com/news/2025/03/20250317mercardgold/"
    accessedAt: "2026-09-28"
  - label: "メルペイ公式ニュース: 街のお店やネットショップでも「メルカード」の分割払いを提供開始（2025-06-30）"
    url: "https://jp.merpay.com/news/2025/06/20250630installmentpayment/"
    accessedAt: "2026-09-28"
  - label: "メルカリ公式エンジニアリングブログ: The Four-Year history to migrate Mercari Web to Microservices（2022-08-30）"
    url: "https://engineering.mercari.com/en/blog/entry/20220830-15d4e8480e/"
    accessedAt: "2026-09-28"
  - label: "メルカリ公式エンジニアリングブログ: Microservice Migration at Mercari — The Ideal and the Real（2021-11-11）"
    url: "https://engineering.mercari.com/en/blog/entry/20211111-reality-of-microservices-migration/"
    accessedAt: "2026-09-28"
  - label: "メルカリ公式エンジニアリングブログ: Reducing Inter-Zone Egress Costs with Zone-Aware Routing in Mercari's Kubernetes Clusters（2023-10-30・GKE）"
    url: "https://engineering.mercari.com/en/blog/entry/20231027-reducing-inter-zone-egress-costs-with-zone-aware-routing-in-mercaris-kubernetes-clusters/"
    accessedAt: "2026-09-28"
---

## サービス解説

メルカリは2013年開始のフリマアプリで、個人間（C2C）の中古品売買では日本最大のマーケットプレイスだ。スマホで撮って数十秒で出品できる手軽さと匿名配送の発明で、「家の不用品がお金になる」体験を大衆化した。現在は決済のメルペイ、クレジットカードのメルカード、米国事業を含むグループへ拡大している。

:::fact
2025年6月期の決算短信によれば、通期の売上収益は1,926億円（前年比2.8%増）、コア営業利益は275億円（同46%増）。国内フリマを中心とするMarketplaceのGMV（流通取引総額）は前年比4%増の1兆1,209億円。同期のIR資料（CEOと株主の対話）によれば、MAUは約2,300万人、2022年11月に発行を始めたメルカードは500万枚を超えた。2025年3月にはゴールドカードを追加し、米国事業は通期で黒字化した（セグメント利益約7億円）。続く2026年6月期の決算短信では、売上収益2,292億円（前年比19.0%増）、コア営業利益441億円（同60.2%増）といずれも過去最高を更新し、Marketplace GMVは前年比14.7%増の1兆2,856億円と二桁成長に戻った。
:::

:::pull
フリマアプリの本当の資産は在庫ではなく、誰が何を売り、いくらで買い、期日通りに送ったかという行動の履歴だ。メルカードはその履歴を与信に変換する装置である。
:::

::scorecard

## UX分析

メルカリのUXは「売る側の摩擦」を執拗に削ることに特徴がある。売り手が増えれば商品が増え、買い手が増えるという循環の起点を、出品体験に置いている。

- **出品が数十秒で終わる**。写真を撮ればカテゴリ・相場が提案され、バーコード出品や下書きの仕組みも揃う。「面倒だから捨てる」層を売り手に変えたのは、この初速の設計だ。
- **匿名配送が心理障壁を消した**。住所や本名を相手に知らせずに送れる仕組みは、個人間取引の最大の不安を制度側で吸収した発明で、後続サービスの標準になった。
- **相場の可視化が価格設定を代行する**。類似商品の売却実績が見えるため、素人でも「売れる価格」を数タップで付けられる。価格設定の専門知識を市場データが代替している。
- **値下げ交渉や独自マナーという文化コスト**。コメントでの値下げ交渉・専用出品などの自然発生的な慣習は、体験の温かさであると同時に、新規参加者には暗黙のルールとして学習コストになっている。

## 技術構成

::techstack

:::fact
公式エンジニアリングブログによれば、メルカリは2018年5月にWeb再設計プロジェクトを開始し、PHP製モノリスのAPIサーバーをKubernetes上のGoマイクロサービスへ置き換えた。セッション情報を保存するデータベースにはCloud Spannerを選び、静的HTMLはCloud Storage（GCS）から返す設計にした（外部アカウント認証のコールバックを受けるログイン・登録だけは、Goサーバーのweb-authに分けている）。段階的な移行を経て、旧PHPサーバー「web-2」は2022年8月4日に停止された——開始から4年である。2021年の別記事では、コア業務ロジックの移行が最難関で「十分なドメイン分析がまだできていない」と率直に認め、プロジェクト名も「移行」から「基盤開発（Robust Foundation for Speed）」へ改めている。2023年の同ブログは、メルカリのマイクロサービスがすべてGoogle Kubernetes Engine（GKE）上で動いていると明記している。
:::

:::guess
移行に4年かかった経緯とその困難を包み隠さず公開する姿勢は、採用広報であると同時に、「マイクロサービス移行は一度きりのイベントではなく恒常的な基盤投資である」という学習の共有とみられる。GKE・Spannerという Google Cloud中心の構成は、国内大手ではAWS採用が多数派の中で特徴的であり、KubernetesとSpannerの運用ノウハウ自体を技術ブランドの核に育てる意図があると推測される。当サイトの実観測でCloudflareがGoogle Cloudの前段に置かれている構成も、CDN・セキュリティ層と計算基盤を分離する現代的な二層の実例だ。
:::

訂正（2026年9月28日）。初版では記事の説明文で、PHPモノリスの置き換えを「8年がかり」と書いていたが、誤りだった。公式エンジニアリングブログによれば、再設計の開始は2018年5月、旧PHPサーバーの停止は2022年8月4日で、要した期間は4年である。

## ビジネスモデル

メルカリの収益の中核はフリマの販売手数料で、そこに決済（メルペイ）・与信（メルカード）のFintech収益が積み上がる。

:::fact
2025年6月期は売上収益1,926億円に対しコア営業利益275億円と、前年から46%の増益。GMV 1兆1,209億円の二次流通を基盤に、メルカードは発行500万枚を超え、2025年6月30日からはメルカリ外の支払いにも分割払いを開放した。2026年6月期は売上収益2,292億円・コア営業利益441億円で、Fintechの債権残高は前年比44.4%増の3,581億円、米国事業のセグメント利益は約17億円に増えた。
:::

:::guess
2025年6月期はGMVが4%増、売上収益が2.8%増と伸びが鈍る中で、利益成長46%の主因は手数料事業の効率化とFintechの寄与拡大とみられる。2026年6月期にGMVが14.7%増と二桁成長へ戻ったことは、成熟したとみられていた本業にもまだ伸びしろがあったことを示唆している。フリマの取引履歴は、従来の信用情報では捉えられない「約束を守る個人」を発見できる与信データであり、カード会社としてのメルカリの構造的優位はここにある。売って得た残高で買い、カードで買った物をまた売る——お金と商品の両方が経済圏内を循環する設計は、外に漏れない消費のループを作る。次の天井はGMVの伸びだけでなく、この循環に金融をどこまで浸透させられるかだと推測される。
:::

訂正（2026年9月28日）。初版では推測の前提として「GMV成長が3%増」と書いていたが、誤りだった。2025年6月期の決算短信によれば、MarketplaceのGMVは前年比4%増で、3%（2.8%）は連結の売上収益の伸び率である。

PHPモノリスの停止に4年、フリマから金融への転回に10年。メルカリの解剖から見えるのは、派手なピボットではなく「同じ資産の別の使い方」を積み重ねる経営だ。中古品の山から始まった事業が、行動履歴という無形資産を掘り当て、カードを発行するに至る——二次流通の巨人は、データの一次生産者でもあった。
