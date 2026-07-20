---
service: "Shopify"
title: "「枯れた技術」を自分で若返らせる — Rails創業のShopifyが年間3,780億ドルを支える方法"
description: "ECプラットフォームの巨人Shopify。2004年の創業からRuby on Railsに賭け続け、自らJITコンパイラYJITを開発してRailsの性能限界を押し上げる技術戦略と、Black Friday単日で数兆件のDBクエリを捌く運用体制を公式エンジニアリングブログとSEC提出書類から解剖する。"
lead: "「Railsは大規模には向かない」という通説に、Shopifyは正面から反論し続けてきた——退場するのではなく、自らRailsとRuby本体に手を入れて若返らせることで。年間3,780億ドルの流通総額を、創業時と同じフレームワークの上で処理し続ける技術戦略を解剖する。"
category: saas
tags: [e-commerce, ruby-on-rails, saas, google-cloud, open-source]
publishedAt: "2026-07-20"
updatedAt: "2026-07-20"
lastVerified: "2026-07-20"
serviceUrl: "https://www.shopify.com/"
vendor: "Shopify Inc."
origin: "CA"
heroTheme: "shopify"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 4.5 }
techStack:
  - layer: "Webフレームワーク"
    name: "Ruby on Rails"
    confidence: confirmed
    evidence: "公式エンジニアリングブログに、2004年の創業からRailsと共に成長し、CEO Tobi氏がRails Core初期メンバーだったと明記"
    evidenceUrl: "https://shopify.engineering/shopify-open-source-philosophy"
  - layer: "Ruby実行系"
    name: "YJIT (self-built JIT compiler)"
    confidence: confirmed
    evidence: "公式エンジニアリングブログに、Ruby処理系に組み込むJITコンパイラYJITを自社開発したと明記"
    evidenceUrl: "https://shopify.engineering/shopify-open-source-philosophy"
  - layer: "Ruby代替実装研究"
    name: "TruffleRuby (joint research with Oracle)"
    confidence: confirmed
    evidence: "公式エンジニアリングブログに、高速な代替Ruby実装TruffleRubyをOracleと共同研究と明記"
    evidenceUrl: "https://shopify.engineering/shopify-open-source-philosophy"
  - layer: "クラウド基盤"
    name: "Google Cloud (multi-region)"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2025-11・BFCM準備記事）に、Google Cloud上でのマルチリージョン戦略と複数リージョンでの負荷試験を実施と明記"
    evidenceUrl: "https://shopify.engineering/bfcm-readiness-2025"
  - layer: "CDN"
    name: "Cloudflare"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー実観測（server: cloudflare、2026-07-20）。マーケティングサイト（shopify.com）についての観測でアプリ本体とは別。公式ドキュメントでの明言は見当たらない"
sources:
  - label: "Shopify公式エンジニアリングブログ: Shopify and Open Source（RailsとYJIT・TruffleRuby）"
    url: "https://shopify.engineering/shopify-open-source-philosophy"
    accessedAt: "2026-07-20"
  - label: "Shopify公式エンジニアリングブログ: How we prepare Shopify for BFCM（2025-11・実測トラフィック数値）"
    url: "https://shopify.engineering/bfcm-readiness-2025"
    accessedAt: "2026-07-20"
  - label: "SEC 8-K（Shopify Inc.・2025年通期決算プレスリリース）"
    url: "https://www.sec.gov/Archives/edgar/data/1594805/000159480526000007/shop-20251231.htm"
    accessedAt: "2026-07-20"
  - label: "Ruby on Rails Foundation: Shopifyについて"
    url: "https://rubyonrails.org/foundation/shopify"
    accessedAt: "2026-07-20"
---

「Railsは大規模運用には向かない」という業界の通説に、20年以上正面から反論し続けている企業がある。ShopifyはRailsを乗り換えるのではなく、Ruby本体にまで手を入れて若返らせることで、年間3,780億ドルの流通総額を処理する規模までRailsを連れてきた。

## サービス解説

Shopifyはオンラインストア構築・決済・在庫管理を統合したECプラットフォームだ。カナダのオタワで2004年に創業し、現在はNYSE上場企業。

:::fact
SEC提出書類（2025年通期決算）によれば、2025年のプラットフォーム流通総額（GMV）は3,784億ドルで前年比29%増、総収益は116億ドルで前年比30%増。マーチャントソリューション収益（決済手数料・貸付・広告等）は65億ドルから88億ドルへ35%拡大した。公式エンジニアリングブログによれば、Shopifyは2004年の創業以来Ruby on Railsを採用し続けており、CEOのTobi Lütke氏はRails初期のコア開発メンバーの一人だった。
:::

:::pull
普通の企業は技術的負債から逃げるために新フレームワークへ乗り換える。Shopifyは逃げずに、負債そのものに投資して若返らせる道を選んだ。
:::

::scorecard

## UX分析

ShopifyのUXは、マーチャント（出店者）という非エンジニアの意思決定者を主役に設計されている。

- **テーマとアプリのエコシステムが参入障壁を下げる**。コードを書かなくても数千種のテーマとアプリで機能拡張できるため、個人事業主から大企業まで同じ管理画面で完結する。
- **チェックアウトの最適化に技術投資が集中する**。決済離脱はEC事業者にとって収益に直結するため、Shopifyはチェックアウト体験そのものを競争優位の中核に据えている。
- **BFCM（Black Friday/Cyber Monday）という年に一度の耐久試験がUXの信頼性を作る**。公式ブログによれば2024年のBFCMでは57.3ペタバイトのデータを処理し、ピーク時はエッジで毎分2.84億リクエスト、Black Friday単日では毎分12テラバイトのデータが流れたという。この規模を落ちずに捌き切ること自体が、マーチャントにとっての最大の安心材料になっている。
- **管理画面の複雑さは規模とのトレードオフ**。機能が増えるほど中小マーチャントには過剰装備に見える場面もあり、シンプルさと拡張性の両立は継続的な課題として残る。

## 技術構成

::techstack

:::fact
公式エンジニアリングブログによれば、Shopifyは創業以来Ruby on Railsを採用し、CEO自身がRails Coreメンバーだった経緯から「100年続く会社」を見据えてRuby/Railsの性能研究に投資を続けている。その象徴が自社開発のJITコンパイラYJITで、Ruby処理系に組み込んで実行速度を底上げする。さらにOracleと共同で高速な代替Ruby実装TruffleRubyを研究している。インフラはGoogle Cloud上でマルチリージョン構成を取り、2025年11月の公式ブログでは3月から8ヶ月かけてカオスエンジニアリング（Game Days）や段階的負荷試験を重ねてBFCMに備えたと報告されている。
:::

:::guess
「フレームワークを乗り換えない」という選択は、20年分のドメイン知識とコードベースの蓄積を捨てないための合理的判断であると同時に、Rails/Rubyコミュニティ全体への投資という長期戦略でもあるとみられる。YJITやTruffleRubyへの投資は、Shopify自身の性能問題を解決するだけでなく、Rails/Ruby全体の「大規模運用に耐える」という評判を底上げし、結果的に採用市場でのRails人材確保にも有利に働く——自社の技術選定を業界標準に押し上げることで固定費を薄める、という長期の設計とも読める。
:::

## ビジネスモデル

Shopifyの収益は、月額のサブスクリプションとマーチャントの取引額に連動する従量課金の二本立てだ。

:::fact
SEC提出書類によれば、2025年の総収益116億ドルのうち、マーチャントソリューション（決済処理手数料・貸付・紹介料・広告収益等）が88億ドルと過半を占め、前年比35%という高い成長率を記録した。GMVは3,784億ドルで前年比29%増。
:::

:::guess
マーチャントソリューションの成長率が全社成長率を上回っている構図から、Shopifyの収益は「ストア開設料」から「マーチャントの商売そのものへの参加（決済・貸付・広告）」へと重心を移しているとみられる。GMVに連動する収益モデルは、Shopify自身の成長がマーチャントの成長と直結する構造を作り、プラットフォームとしての利害を一致させる設計だ。EC市場全体の成長が鈍化した局面でも、決済・金融サービスへの深掘りで収益源を多様化できている点が、単なる「ストア構築ツール」からの脱却を裏付けている。
:::

Railsを捨てるのではなく鍛え直す。ストア構築ツールから金融インフラへと収益の重心を移す。Shopifyの20年は、技術でもビジネスモデルでも「逃げずに向き合う」という一貫した選択の積み重ねだ。
