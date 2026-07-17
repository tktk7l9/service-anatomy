---
service: "SmartHR"
title: "書類仕事を入口にする — SmartHRが年末調整から人事データ基盤へ育つまで"
description: "クラウド人事労務のSmartHR。入社手続き・年末調整という日本固有のペインをくさびに、労務シェアNo.1からタレントマネジメントへ多プロダクト化。ARR150億円・シリーズE214億円のビジネスと、Rails+React+Cloud SQLの技術構成を解剖する。"
lead: "年末調整ほど嫌われている書類仕事は少ない。SmartHRはその面倒くささを入口に、従業員データが自然に溜まる構造を作り、労務ソフトから人事データ基盤へと育った。国内SaaSの優等生がどう設計されているのかを、公式テックブログと公式発表から解剖する。"
category: saas
tags: [hr, saas, rails, react, b2b]
publishedAt: "2026-07-17"
updatedAt: "2026-07-17"
lastVerified: "2026-07-17"
serviceUrl: "https://smarthr.jp/"
vendor: "SmartHR"
origin: "JP"
heroTheme: "smarthr"
scores: { product: 4.0, ux: 4.5, tech: 3.5, business: 4.5 }
techStack:
  - layer: "バックエンド"
    name: "Ruby on Rails"
    confidence: confirmed
    evidence: "公式テックブログに「RailsとReactの基本的な組み合わせを統一して開発」と明記。10超のプロダクトで標準化"
    evidenceUrl: "https://tech.smarthr.jp/entry/2023/12/25/120000"
  - layer: "フロントエンド"
    name: "React / TypeScript (Next.js導入中)"
    confidence: confirmed
    evidence: "公式テックブログにjQuery→React移行とNext.js導入を明記"
    evidenceUrl: "https://tech.smarthr.jp/entry/2023/12/25/120000"
  - layer: "ランタイム"
    name: "Ruby 3.4 + YJIT"
    confidence: confirmed
    evidence: "公式テックブログ（2025-08）に最大のRailsアプリをRuby 3.4+YJITへ更新したと明記"
    evidenceUrl: "https://tech.smarthr.jp/entry/2025/08/20/142858"
  - layer: "データベース"
    name: "Google Cloud SQL (PostgreSQL)"
    confidence: confirmed
    evidence: "公式テックブログ（2025-07）のリードレプリカ導入記事にCloud SQLとPostgreSQL設定（hot_standby_feedback）を明記"
    evidenceUrl: "https://tech.smarthr.jp/entry/2025/07/11/081458"
  - layer: "クラウド基盤"
    name: "Google Cloud"
    confidence: confirmed
    evidence: "Cloud SQL利用を公式テックブログで確認（コンテナ基盤等の詳細は非公開）"
    evidenceUrl: "https://tech.smarthr.jp/entry/2025/07/11/081458"
  - layer: "デザインシステム"
    name: "SmartHR UI (OSS)"
    confidence: confirmed
    evidence: "GitHubでOSS公開されているReactコンポーネント群（kufu/smarthr-ui）。全プロダクトのUI統一基盤"
    evidenceUrl: "https://github.com/kufu/smarthr-ui"
  - layer: "CDN"
    name: "Cloudflare"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー実観測（server: cloudflare、smarthr.jp、2026-07-17）。コーポレートサイトの観測でありアプリ本体は未確認"
sources:
  - label: "SmartHR公式プレスリリース: 約214億円のシリーズEラウンド実施（2024-07）"
    url: "https://smarthr.co.jp/news/press/27110/"
    accessedAt: "2026-07-17"
  - label: "SmartHR公式: ARR150億円を突破、前年比150%で成長（2024-02）"
    url: "https://smarthr.co.jp/news/info/26682/"
    accessedAt: "2026-07-17"
  - label: "SmartHR Tech Blog: エンジニア職エージェント説明会の内容公開（2023-12・Rails+React統一）"
    url: "https://tech.smarthr.jp/entry/2023/12/25/120000"
    accessedAt: "2026-07-17"
  - label: "SmartHR Tech Blog: 最大のRailsアプリにリードレプリカ導入（2025-07・Cloud SQL）"
    url: "https://tech.smarthr.jp/entry/2025/07/11/081458"
    accessedAt: "2026-07-17"
  - label: "ITmedia: ユニコーン企業となったSmartHRはどれほど規格外なのか（2021-06）"
    url: "https://www.itmedia.co.jp/business/articles/2106/09/news056.html"
    accessedAt: "2026-07-17"
---

BtoB SaaSの教科書には「強いペインを持つ狭い業務から入れ」と書いてある。SmartHRが選んだ入口は、日本の全企業が毎年必ず苦しむ書類仕事——入社手続きと年末調整だった。労務のシェアNo.1を足場に人事データ基盤へ広がっていく国内SaaSの代表例を、当サイト初のsaasカテゴリ記事として解剖する。

## サービス解説

SmartHRはクラウド人事労務ソフトだ。入社手続き・雇用契約・年末調整などの労務手続きをオンライン化し、その過程で集まる従業員データをタレントマネジメントに活かす。

:::fact
公式発表によれば、2024年2月にARR（年間経常収益）150億円を突破し、前年比150%で成長。2024年7月には約214億円のシリーズEラウンドを実施した。公式サイトは労務管理クラウドで7年連続シェアNo.1を掲げ（2026年7月時点）、2024年の同社リリースではタレントマネジメント機能は既存ユーザー企業の30%超が利用とされる。2021年6月のシリーズDでは評価額1,700億円でユニコーン企業となった。
:::

:::pull
労務手続きは嫌われ仕事だが、従業員全員のデータが必ず通る関所でもある。SmartHRの設計は、この関所の位置取りがすべてだ。
:::

::scorecard

## UX分析

SmartHRのUXの核心は、「人事担当者のソフト」ではなく「従業員全員が触るソフト」として作られていることだ。

- **入力を従業員本人に分散する**。年末調整も入社手続きも、従業員がスマホでフォームに答えれば書類が出来上がる。担当者の転記作業を消すのではなく、そもそも発生させない設計だ。
- **専門用語を翻訳するフォーム設計**。扶養や保険の難解な質問を平易な言葉と分岐で置き換える。この「行政書類のUX翻訳」こそが、シェアNo.1を支える見えない資産だろう。
- **デザインシステムをOSSで公開**。全プロダクトのUIはSmartHR UIというOSSコンポーネント群で統一され、10を超えるプロダクト群でも操作感が揃う。デザインシステムへの投資は多プロダクト戦略の前提条件になっている。
- **弱点は多プロダクト化に伴う複雑さ**。労務だけ使いたい企業には機能過剰に映る場面が増え、プラン体系と画面の情報量は「シンプルさが売り」だった初期からじわじわ遠ざかっている。

## 技術構成

::techstack

:::fact
公式テックブログによれば、SmartHRは10を超えるプロダクトをRails+Reactの統一構成で開発しており、フロントエンドはjQueryからReactへ移行済みで、近年はNext.jsも導入している。最大のRailsアプリケーション（基本機能）では、Cloud SQLのシングルインスタンス構成からリードレプリカ構成へ移行し（対象エンドポイントの読み取りが82%）、Ruby 3.4+YJITへの更新も公開されている。UIコンポーネントはSmartHR UIとしてOSS公開されている。
:::

:::guess
Cloud SQLの利用からGoogle Cloudが本番基盤とみられるが、コンテナ実行環境（GKEなど）の詳細は公式には語られていない。技術選定の思想は一貫して「攻めた構成より、採用しやすく知見を共有できる標準構成」で、Rails+React+デザインシステムという組み合わせは、多プロダクトを並行開発する組織のスループットを最大化するための選択と推測される。10超のプロダクトを支える共通認証・共通データ基盤の作りが、今後の技術的な見どころだろう。
:::

## ビジネスモデル

SmartHRの収益は従業員数に応じた月額課金のSaaSモデルだ。そしてその真価は、課金モデルよりデータの位置取りにある。

:::fact
労務手続きを起点に、タレントマネジメント（人事評価・配置・スキル管理）、さらにHRアナリティクス・学習管理（LMS）・採用管理（ATS）へと多プロダクト化を進めており、外部連携のアプリストアSmartHR Plusも展開する。シリーズEの発表では、マルチプロダクト展開の加速が資金使途として明示された。
:::

:::guess
労務は解約されにくい（法定手続きが毎年必ず発生する）一方で単価の上限も見えやすい。SmartHRの成長ストーリーは、労務で貯まった正確な従業員データを横のプロダクトに流用できることを前提に、1社あたり収益を積み増す「コンパウンド」型とみられる。IPOではなく大型のレイター調達を選んだのも、上場前にマルチプロダクトの単価成長を証明し切る意図と推測される。国内SaaSの時価総額の天井を試す試金石として、業界全体がこの会社の数字を見ている。
:::

書類仕事の面倒くささという、日本で最も普遍的なペインから始めて、人事データという最も社内政治的な資産の管理者になる。SmartHRの歩みは、地味な入口と大きな野心を両立させたB2B SaaSの、国内で最も完成度の高い実例だ。
