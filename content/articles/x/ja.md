---
service: "X"
title: "アルゴリズムを公開する会社が、AI企業ごとロケット会社に呑み込まれた — Xの透明性と、上場で見え始めた財務"
description: "旧Twitterの後継、X。推薦アルゴリズムとCommunity Notesという2つのOSS公開で異例の透明性を保つ一方、2025年にxAIと合併し、2026年2月にはxAIごとSpaceXの子会社になった。SpaceXの上場で初めて開示された数字と、Manhattan/Finagleの技術遺産からGrok統合までを解剖する。"
lead: "自社の推薦アルゴリズムを丸ごとGitHubに公開する——SNS業界でXしかやっていないことだ。その会社は2022年の非公開化から財務を開示してこなかったが、親会社SpaceXの上場で、広告売上や有料会員数がSECの書類に載るようになった。見えるものと見えないものが入れ替わりつつあるXを、xAI合併とSpaceX傘下入りという2つの転換点を軸に解剖する。"
category: media
tags: [social-media, ai, open-source, moderation, x-corp]
publishedAt: "2026-07-20"
updatedAt: "2026-10-02"
lastVerified: "2026-10-02"
serviceUrl: "https://x.com/"
vendor: "X Corp. (Space Exploration Technologies Corp.)"
origin: "US"
heroTheme: "x"
scores: { product: 3.5, ux: 3.5, tech: 4.0, business: 3.0 }
techStack:
  - layer: "分散データベース"
    name: "Manhattan"
    confidence: confirmed
    evidence: "公式エンジニアリングブログが、毎秒数百万件のクエリを低遅延で処理するために開発した自社製のリアルタイム多テナント分散DBと説明（2014年4月2日公開。2026-10-02時点で公式ページはボット確認画面を返すため、Wayback Machineの2026-06-03保存分で本文を確認）"
    evidenceUrl: "https://blog.x.com/engineering/en_us/a/2014/manhattan-our-real-time-multi-tenant-distributed-database-for-twitter-scale"
  - layer: "サービス間通信"
    name: "Finagle"
    confidence: confirmed
    evidence: "GitHub公式リポジトリ（twitter/finagle）で、耐障害性を備えたプロトコル非依存のRPCシステムとして公開。2026年8月13日の更新を確認"
    evidenceUrl: "https://github.com/twitter/finagle"
  - layer: "推薦アルゴリズム"
    name: "X For You Feed Algorithm (open source)"
    confidence: confirmed
    evidence: "GitHub公式リポジトリ（xai-org/x-algorithm）で「For You」フィードの中核コードを公開。2026年1月作成・Rust中心・Apache-2.0・3.3万Star超、2026-10-01の更新を確認。2023年3月公開の旧リポジトリ twitter/the-algorithm（7.3万Star超）は2025年9月で更新が止まっている（いずれも2026-10-02時点）"
    evidenceUrl: "https://github.com/xai-org/x-algorithm"
  - layer: "モデレーション"
    name: "Community Notes (scoring algorithm open source)"
    confidence: confirmed
    evidence: "GitHub公式リポジトリ（twitter/communitynotes）でノート採点・ランキングのコードとデータを公開し継続更新中（2026-10-01時点の更新を確認）"
    evidenceUrl: "https://github.com/twitter/communitynotes"
  - layer: "AI統合"
    name: "Grok (xAI)"
    confidence: confirmed
    evidence: "SpaceXのForm S-1（2026-05-20）が、XにGrokのモデルをネイティブ統合しており、Basic・Premium・Premium+の各プランがGrokの優先利用を含むと説明。SpaceXAIの開発者向けドキュメント（docs.x.ai）は最新モデルをGrok 4.7と表示（2026-10-02）"
    evidenceUrl: "https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm"
  - layer: "エッジ/CDN"
    name: "Cloudflare + Envoy"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー実観測（server: cloudflare envoy、2026-10-02）。公式ドキュメントでの明言は見当たらない"
sources:
  - label: "SEC: SpaceX Form S-1（2026-05-20提出。xAI・Xの取得、MAU、有料会員数、売上内訳、Xの借入）"
    url: "https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm"
    accessedAt: "2026-10-02"
  - label: "SEC: SpaceX Form 10-Q（2026年6月期。IPOの完了、広告売上、Xのタームローン返済）"
    url: "https://www.sec.gov/Archives/edgar/data/1181412/000162828026052535/spcx-20260630.htm"
    accessedAt: "2026-10-02"
  - label: "Elon Musk（公式X投稿）: xAIによるX買収発表・評価額$80B+$33B（2025-03-28）"
    url: "https://x.com/elonmusk/status/1905731750275510312?lang=en"
    accessedAt: "2026-10-02"
  - label: "GitHub公式: X For You Feed Algorithm（xai-org/x-algorithm）"
    url: "https://github.com/xai-org/x-algorithm"
    accessedAt: "2026-10-02"
  - label: "GitHub公式: The X Recommendation Algorithm（旧リポジトリ）"
    url: "https://github.com/twitter/the-algorithm"
    accessedAt: "2026-10-02"
  - label: "GitHub公式: Community Notes（採点コード・継続更新）"
    url: "https://github.com/twitter/communitynotes"
    accessedAt: "2026-10-02"
  - label: "GitHub公式: Finagle"
    url: "https://github.com/twitter/finagle"
    accessedAt: "2026-10-02"
  - label: "X公式エンジニアリングブログ: Manhattan（2014）"
    url: "https://blog.x.com/engineering/en_us/a/2014/manhattan-our-real-time-multi-tenant-distributed-database-for-twitter-scale"
    accessedAt: "2026-10-02"
  - label: "App Store（米国）: X のアプリ内課金（Premium Basic $4／Premium $11／Premium Plus $50）"
    url: "https://apps.apple.com/us/app/x/id333903271"
    accessedAt: "2026-10-02"
  - label: "App Store（日本）: X のアプリ内課金（Premium Basic ¥450／Premium ¥1,270／Premium Plus ¥8,000）"
    url: "https://apps.apple.com/jp/app/x/id333903271"
    accessedAt: "2026-10-02"
  - label: "SpaceXAI開発者向けドキュメント（docs.x.ai）: Grokのモデル一覧と料金"
    url: "https://docs.x.ai/developers/models"
    accessedAt: "2026-10-02"
  - label: "WebProNews: Grok 3発表後にPremium+を月$40へ値上げ（2025-02）"
    url: "https://www.webpronews.com/x-raises-premium-subscription-to-40-per-month-on-the-strength-of-grok-3/"
    accessedAt: "2026-10-02"
---

「アルゴリズムを見せろ」というSNSへの長年の不満に、正面から応えた会社が1社だけある。Xは自社の推薦アルゴリズムとファクトチェックの採点コードをまるごとGitHubに公開した。その会社は2022年の非公開化から財務を開示してこなかったが、2026年に親会社のSpaceXが上場し、広告売上や有料会員数がSECの書類で読めるようになった——透明性と不透明さがねじれて同居するXを、2025年のxAI合併と2026年のSpaceX傘下入りという転換点を軸に解剖する。分散型SNSで正反対の道を選んだ[Bluesky](/ja/articles/bluesky)とは、同じ問い（プラットフォームは誰のものか）への別の回答だ。

## サービス解説

Xは旧Twitterが2023年に改称したマイクロブログ型SNSだ。2022年10月にElon Musk氏が非公開化し、2025年3月には氏のAI企業xAIと合併、2026年2月にはそのxAIごとSpaceXの完全子会社になった。

:::fact
Musk氏自身のX投稿（2025年3月28日）によれば、xAIがXを全株式交換で買収し、xAIを800億ドル、Xを330億ドル（企業価値450億ドルから負債120億ドルを控除）と評価する取引だった。SpaceXのForm S-1（2026年5月20日提出）は、SpaceXがX.AI Holdings Corp.を2026年2月2日付で取得し、X Corp.は同社の間接子会社だと記載している。SpaceXは2026年6月に新規株式公開を完了し、Nasdaqに「SPCX」で上場した（Form 10-Q）。同S-1によれば、GrokとXを合わせた月間アクティブユーザーは2026年3月末時点で約5.5億、X PremiumとPremium+の有料会員は約440万だ。2026年10月2日時点のApp Storeのアプリ内課金は、米国でPremium Basic 月4ドル・Premium 月11ドル・Premium Plus 月50ドル、日本で月450円・1,270円・8,000円と表示されている。Premium+は2025年2月のGrok 3発表後に月額40ドルへ値上げされたと当時報じられていた。
:::

:::pull
アルゴリズムはGitHubで、売上はSECの書類で読める。X単体の損益だけが、どちらにも載っていない。
:::

::scorecard

## UX分析

XのUXは「透明性の実験場」と「料金と機能の組み替えが続く製品」という2つの顔を持つ。

- **Community Notesは業界随一の実装**。文脈の異なる複数ユーザーの合意でノートを表示する仕組みは、中央集権のファクトチェックとも野放しとも違う第三の道を実証しており、採点アルゴリズム自体が公開されているため検証可能性も高い。
- **推薦アルゴリズムの公開は新しいリポジトリに引き継がれた**。2023年3月公開の「The Algorithm」は7万Star超を集めたまま2025年9月で更新が止まったが、2026年1月にxAIの組織で「X For You Feed Algorithm」が公開され、2026年8月にはスコアの重みや表示制限（visibility filtering）のコードが加わった。READMEには「このリポジトリに含まれないもの」の節があり、公開範囲がどこまでかを公開側が明示している。
- **機能は有料3段階に振り分けられている**。SpaceXの目論見書は、Basic・Premium・Premium+の各プランが拡張機能、広告の少ない表示、Grokの優先利用を提供すると説明している。無料と有料の差そのものが収益動線として設計されている。
- **Grok統合はタイムラインの外側から広がる**。同社は検索・投稿の分析・サポート・パーソナライズへGrokをさらに組み込む方針を示しており、2026年3月末時点で約1.17億の月間ユーザーがGrokのAI機能を使ったとしている。SNSとAIアシスタントの境界が薄れつつある。

## 技術構成

::techstack

:::fact
Manhattan（自社製の多テナント分散データベース）は旧Twitter時代の公式エンジニアリングブログ（2014年）で詳述されており、Finagle（サービス間通信の基盤）は公式リポジトリで2026年8月にも更新されている。推薦アルゴリズムは2023年3月に「The Algorithm」として公開され、2026年1月からは別リポジトリ「x-algorithm」（Rust中心・Apache-2.0）で公開が続いている。READMEによれば、投稿の順位付けにはトランスフォーマーモデルを使う。Community Notesの採点コードも公式リポジトリで継続的に更新されている（いずれも2026年10月1日の更新を確認）。Premium+の価格は2025年2月時点の月額40ドル（当時の報道）から、2026年10月2日時点のApp Store表示で月額50ドルになっている。
:::

:::guess
当サイトの観測ではCloudflareとEnvoyのヘッダーが確認でき、エッジ層は旧来のTwitter自社インフラから一部クラウド化・標準化が進んでいるとみられる。旧「The Algorithm」の更新が2025年9月で止まり、4か月後にxAI側の組織で新リポジトリが立ち上がった経緯は、推薦システムそのものがxAIの技術基盤へ載せ替えられたことを反映していると推測される。Community Notesは一貫して更新されており、モデレーションの透明性は経営体制が変わっても維持されているとみられる。
:::

## ビジネスモデル

Xの収益構造は、広告・サブスクリプション・Grokとのバンドルの三本柱に再編されつつある。SpaceXの決算では、これらが「AI」セグメントの中に入っている。

:::fact
SpaceXのForm S-1によれば、X Corp.は2022年に67.05億ドルのタームローン、5億ドルの回転信用枠、30億ドルずつ2本のブリッジ融資を契約しており、買収時の借入枠は合計約132億ドルだった。Form 10-Q（2026年6月期）は、このうちXのタームローンをSpaceXのブリッジローンで返済したと記載している。広告売上は2023年23.23億ドル、2024年17.28億ドル、2025年18.44億ドルで、2026年4〜6月期は3.67億ドル（前年同期4.26億ドル）だった。同社は減少の理由を新しい広告プラットフォームへの移行と説明している。XとGrokのサブスクリプション売上は2025年に前年から3.65億ドル増えた。X単体の損益は区分して開示されていない。
:::

:::guess
広告売上は2023年の水準に戻っておらず、サブスクリプションとGrokがその差を埋める構図だと推測される。目論見書はXを「AIエコシステムの配信とデータの基盤」と位置づけており、Xの役割は広告事業そのものから、Grokの利用者獲得と学習データの供給源へ比重を移しつつあるとみられる。X単体の損益が開示されていない以上、この組み替えがX自身の収支をどう変えたかを外部から検証する手段は限られている。
:::

透明性と不透明さ。Xは、プラットフォームのアルゴリズムを覗ける稀有な窓を提供し続けている。かつて見えなかった財務は、親会社の上場によって一部が見えるようになった。ただしそれは宇宙・通信・AIを束ねる巨大企業の一行としてであり、SNSとしてのXがいくら稼ぎ、いくら使っているのかは、いまも外からは読み切れない。
