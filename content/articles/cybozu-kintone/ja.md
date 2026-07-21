---
service: "サイボウズ kintone"
title: "クラウドの時代に、自社ラックでKubernetesを組む — サイボウズの自前主義を解剖する"
description: "ノーコード業務アプリ基盤kintoneを擁するサイボウズ。AWSでもGCPでもなく、国内東西のデータセンターに数千台のサーバーを並べ、Kubernetes基盤「Neco」を自社開発で運用する異色のSaaS企業を、公式エンジニアリングブログとIR資料から解剖する。営業利益は前年比2倍になった。"
lead: "当サイトが解剖してきたSaaSは、ほぼ例外なくAWSかGoogle Cloudの上にいた。サイボウズは違う。国内東西のデータセンターにラックを借り、数千台のサーバーで自社開発のKubernetes基盤「Neco」を回し、その上でkintoneを動かす。クラウド全盛の時代にオンプレミスを選び続ける合理と、営業利益が2倍になった決算を解剖する。"
category: saas
tags: [no-code, groupware, kubernetes, on-premises, b2b]
publishedAt: "2026-07-21"
updatedAt: "2026-07-21"
lastVerified: "2026-07-21"
serviceUrl: "https://kintone.cybozu.co.jp/"
vendor: "サイボウズ株式会社"
origin: "JP"
heroTheme: "cybozu-kintone"
scores: { product: 4.0, ux: 3.5, tech: 4.5, business: 4.5 }
techStack:
  - layer: "インフラ基盤"
    name: "Neco (自社Kubernetes基盤)"
    confidence: confirmed
    evidence: "公式エンジニアリングブログに、数千台規模の自社Kubernetesクラスタとしてkintone・Garoon・サイボウズOfficeを支えると明記。サーバー管理のSabakan・クラスタ管理のCKEを自社開発し、BMC診断による故障検知と自動復旧まで自動化"
    evidenceUrl: "https://blog.cybozu.io/entry/2025/04/11/112000"
  - layer: "データセンター"
    name: "オンプレミス (国内東西データセンター)"
    confidence: confirmed
    evidence: "公式エンジニアリングブログに、国内複数のデータセンターにラックを借りて自社運用し、東西分散で耐災害性を確保していると明記"
    evidenceUrl: "https://blog.cybozu.io/entry/2025/06/16/080000"
  - layer: "分散ストレージ"
    name: "Rook + Ceph"
    confidence: confirmed
    evidence: "公式エンジニアリングブログに、Rook/Cephによる分散ストレージでラック間のデータ移動を安全に行う運用を明記（2026-07）"
    evidenceUrl: "https://blog.cybozu.io/entry/2026/07/08/090000"
  - layer: "全文検索"
    name: "Elasticsearch"
    confidence: confirmed
    evidence: "Elastic公式導入事例に、クラウドサービス基盤の全文検索機能をElasticsearchで刷新と明記"
    evidenceUrl: "https://www.elastic.co/jp/customers/cybozu"
  - layer: "製品サイト配信"
    name: "Apache + Amazon CloudFront"
    confidence: confirmed
    evidence: "当サイトのHTTPヘッダー実観測（server: Apache・x-cache: RefreshHit from cloudfront、2026-07-21）。製品本体は自社基盤だがマーケティングサイトはCloudFront経由"
    evidenceUrl: "https://kintone.cybozu.co.jp/"
sources:
  - label: "サイボウズ公式IR: 2025年12月期 事業ダイジェスト（売上高374.3億円・前年比26.1%増・営業利益101億円）"
    url: "https://cybozu.co.jp/company/ir/meeting/pdf/2512_02.pdf"
    accessedAt: "2026-07-21"
  - label: "Cybozu Inside Out: サイボウズのKubernetes基盤「Neco」の紹介（2025-04-11）"
    url: "https://blog.cybozu.io/entry/2025/04/11/112000"
    accessedAt: "2026-07-21"
  - label: "Cybozu Inside Out: Cybozu.comが稼働するデータセンター（2025-06-16）"
    url: "https://blog.cybozu.io/entry/2025/06/16/080000"
    accessedAt: "2026-07-21"
  - label: "マイナビニュース: サイボウズ2025年度通期決算 記者説明会（kintone売上216.9億円・契約3.9万社・2026-02-25）"
    url: "https://news.mynavi.jp/techplus/article/20260225-4165084/"
    accessedAt: "2026-07-21"
---

## サービス解説

サイボウズは1997年創業のグループウェア企業で、現在の主力はノーコード業務アプリ基盤のkintoneだ。プログラミングなしにフォーム・データベース・業務フローを組み立てられるツールで、現場の非エンジニアが自分の部署の業務アプリを作る、という使われ方を想定している。「チームワークあふれる社会を創る」という理念と、「100人いれば100通りの働き方」を掲げる人事制度でも知られる。

:::fact
公式IR資料によれば、2025年12月期の連結売上高は374.3億円（前年比26.1%増）、営業利益は101億円（同106.4%増）と、増収に対して利益がほぼ倍増した。決算説明会の報道によれば、kintoneの売上は216.9億円（同33.9%増）で契約社数は3万9,000社を突破。顧客規模別のMRR構成は従業員99名以下が39.1%、100〜999名が33.7%、1,000名以上が27.2%と、特定セグメントに依存しない分散が示された。
:::

:::pull
当サイトが解剖したSaaSはほぼすべてAWSかGoogle Cloudの上にいた。サイボウズだけが、自分のラックの上にいる。
:::

::scorecard

## UX分析

kintoneのUXは「情シスを待たない」ことに最適化されている。美しさより、現場の非エンジニアが自力で完結できることを優先した設計だ。

- **ドラッグ&ドロップでアプリが組み上がる**。フォームの部品を並べるとデータベースと一覧・検索・集計が同時に生まれ、プロセス管理（承認フロー）まで画面操作で足せる。「Excelで回している業務」を最短距離で置き換える導線だ。
- **玄人向けの拡張が逃げ道として用意されている**。JavaScriptカスタマイズやプラグイン、パートナーのエコシステムが、ノーコードの天井を超えたい組織の受け皿になっている。
- **見た目は事務的で、そこが信頼でもある**。洗練されたコンシューマーアプリの美学とは別路線の、業務システム然としたUIは、決裁者と現場の双方に「道具」としての安心感を与えている。
- **「作る人」が現場にいる前提の学習設計**。ヘルプ・認定資格・ユーザーコミュニティ（kintone hive等）が、非エンジニアの「アプリを作る人」を育てる装置として整備されている。ツールでなく人の側に投資する普及戦略だ。

## 技術構成

::techstack

:::fact
サイボウズは国内東西のデータセンターにラックを借り、数千台規模のサーバーで自社開発のKubernetes基盤「Neco」を運用している。公式エンジニアリングブログによれば、物理サーバーの在庫管理・OSプロビジョニングを担うSabakan、クラスタ構築・更新を宣言的に行うCKE（Cybozu Kubernetes Engine）をいずれも自社開発し、BMC診断による故障検知からOS再起動・復旧までを自動化。ストレージはRook/Cephの分散構成で、全文検索にはElasticsearchを採用する。kintone・Garoon・サイボウズOfficeはこの基盤の上で動く。
:::

:::guess
クラウド全盛期にオンプレミスを続ける判断は、SaaSの原価構造に帰着するとみられる。数万社に同一製品を提供するマルチテナントSaaSでは負荷が予測しやすく、クラウドの弾力性への対価より、自社ハードの減価償却の方が長期では安くなる。数千台を少人数で回すために「全スタックの運用自動化」へ投資した結果がSabakanやCKEという自社ツール群であり、これは人を増やさず規模を増やすための自動化——つまりクラウド事業者が内部でやっていることの自前実装と推測される。国内東西の自社基盤という構成は、データ主権を重視する官公庁・大企業への営業材料としても機能しているだろう。
:::

## ビジネスモデル

サイボウズの収益はサブスクリプションで、kintoneを中心にGaroon・Office・Mailwiseの4製品が柱だ。パートナー経由の販売とエコシステムが拡販を担う。

:::fact
2025年12月期は売上374.3億円に対し営業利益101億円と、営業利益率は27%に達し、前年の約2倍になった。kintoneの顧客構成は小規模・中堅・大企業がほぼ3分の1ずつで、決算説明会では大規模な全社導入に向けた機能開発の強化が示された。
:::

:::guess
利益倍増の主因は、先行投資（自社基盤・海外展開・広告）を吸収できる規模にサブスクリプション収益が達したことによる利益レバレッジとみられる。SMB向けの「現場が作るノーコード」から出発し、MRRの27%を大企業が占めるまでに浸透した現在、競合はもはや国産グループウェアではなく、大企業のシステム内製化予算そのものだ。同じ国内SaaSでも、労務という単一業務を深く掘るSmartHRに対し、kintoneは「業務アプリという面」を広く取る戦略であり、この対比は国内SaaSの二つの勝ち筋を示している。
:::

数千台のサーバーを自社ラックで回し、Kubernetesの運用ツールまで自作する——当サイトが解剖してきた他のどのサービスとも逆の選択をした会社が、営業利益率27%という健全な決算を出している。クラウドは前提ではなく選択肢である、という当たり前の事実を、サイボウズの解剖は思い出させてくれる。自前主義は思想ではなく、原価計算の答えだった。
