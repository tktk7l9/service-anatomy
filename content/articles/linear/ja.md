---
service: "Linear"
title: "遅いツールへの反乱 — Linearがsync engineで取り戻した「道具の速さ」"
description: "課題管理ツールLinearの解剖。IndexedDB+MobX+WebSocket差分同期の独自sync engineによる体感ゼロ秒のUX、キーボード第一の設計哲学Linear Method、OpenAIら15,000社への浸透とシリーズC（評価額$1.25B）までを読み解く。"
lead: "課題管理ツールは遅くて重い——その業界常識への反乱として、Linearは「クリックした瞬間に終わっている」体験を建築した。ローカルDBに書いてから裏で同期するsync engineの設計と、開発チームの美意識をそのまま製品にした思想を解剖する。"
category: dev-tool
tags: [project-management, local-first, sync-engine, graphql, saas]
publishedAt: "2026-07-17"
updatedAt: "2026-07-17"
lastVerified: "2026-07-17"
serviceUrl: "https://linear.app/"
vendor: "Linear"
origin: "US"
heroTheme: "linear"
scores: { product: 4.5, ux: 4.5, tech: 4.5, business: 4.0 }
techStack:
  - layer: "同期アーキテクチャ"
    name: "独自Sync Engine (OT系・sync id・差分配信)"
    confidence: confirmed
    evidence: "LinearのCTOが「社内文書より正確で完全」と公認したリバースエンジニアリング文書に、単調増加のsync idで全順序を決めるOT系設計と明記"
    evidenceUrl: "https://github.com/wzhudev/reverse-linear-sync-engine"
  - layer: "クライアント状態管理"
    name: "MobX + IndexedDB"
    confidence: confirmed
    evidence: "同文書に、モデルをMobXでリアクティブ化しIndexedDBにモデル別テーブルで永続化すると明記"
    evidenceUrl: "https://github.com/wzhudev/reverse-linear-sync-engine"
  - layer: "リアルタイム配信"
    name: "WebSocket (デルタパケット配信)"
    confidence: confirmed
    evidence: "同文書に、サーバーが増分デルタをWebSocketで全接続クライアントに配ると明記"
    evidenceUrl: "https://github.com/wzhudev/reverse-linear-sync-engine"
  - layer: "API"
    name: "GraphQL"
    confidence: confirmed
    evidence: "公式開発者ページに公開APIとしてGraphQLを明記"
    evidenceUrl: "https://linear.app/developers"
  - layer: "データベース"
    name: "PostgreSQL"
    confidence: likely
    evidence: "CTO公認のリバースエンジニアリング文書と複数の技術解説で、同期サーバーがPostgresのレプリケーションログを追跡する構成として言及"
    evidenceUrl: "https://github.com/wzhudev/reverse-linear-sync-engine"
  - layer: "配信/基盤"
    name: "Cloudflare + Google Cloud"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー実観測（server: cloudflare / via: 1.1 google、2026-07-17）。公式ドキュメントでの明言は見当たらない"
sources:
  - label: "Linear公式ブログ: Building our way — シリーズC発表（2025-06）"
    url: "https://linear.app/now/building-our-way"
    accessedAt: "2026-07-17"
  - label: "Linear Method（公式・プロダクト思想の文書）"
    url: "https://linear.app/method"
    accessedAt: "2026-07-17"
  - label: "reverse-linear-sync-engine（CTO公認のsync engine解説）"
    url: "https://github.com/wzhudev/reverse-linear-sync-engine"
    accessedAt: "2026-07-17"
  - label: "Linear公式: 開発者向けGraphQL API"
    url: "https://linear.app/developers"
    accessedAt: "2026-07-17"
  - label: "TechCrunch: Atlassian rival Linear raises $82M at $1.25B valuation（2025-06）"
    url: "https://techcrunch.com/2025/06/10/atlassian-rival-linear-raises-82m-at-1-25b-valuation/"
    accessedAt: "2026-07-17"
---

JiraやAsanaを開くとき、人は無意識にワンテンポ待つ癖がついている。Linearはその「待ち」を敵と定めた。2019年に生まれたこの課題管理ツールは、速さを機能ではなく建築で実現し、OpenAIを含む15,000社超に浸透した。ローカルファーストの思想を[Obsidian](/ja/articles/obsidian)がノートで実践したなら、LinearはチームのSaaSで実践した例だ。

## サービス解説

Linearはソフトウェア開発チーム向けの課題管理・プロジェクト管理ツールだ。イシュー、サイクル（スプリント）、ロードマップを、キーボード操作を第一級市民とするUIで扱う。

:::fact
公式ブログ（2025年6月）によれば、LinearはAccel主導のシリーズCで8,200万ドルを調達し、評価額は12.5億ドル。OpenAI・Cash App・Ramp・Scale AIを含む15,000社超が利用するとされる。プロダクト思想は「Linear Method」として公式に文書化されており、フルリモートで少人数のチーム運営を公言している。
:::

:::pull
Linearの本当の製品は課題管理ではない。「道具は手より遅れてはならない」という規律を、SaaSで再現したことだ。
:::

::scorecard

## UX分析

LinearのUXは、速度・キーボード・意見の3点で説明できる。

- **体感ゼロ秒は同期設計の帰結**。すべての操作はまずローカルDBに書かれ、画面は即座に更新される。ネットワークはユーザーの操作経路から追放され、裏で帳尻を合わせる係になった。速さがUIの磨き込みではなくアーキテクチャから来ている点が肝だ。
- **キーボード第一とCmd+K**。あらゆる操作にショートカットが振られ、コマンドメニューが全機能への最短経路になる。マウスは補助輪であり、熟練するほど速くなる道具として設計されている。
- **「意見のある」ワークフロー**。カスタムフィールド地獄のJiraと逆に、Linearはサイクル・トリアージ・優先度など決められた型を押しつける。Linear Methodはその型の正当化文書であり、設定の自由を捨てることが速さの一部だと宣言している。
- **弱点は型に合わない組織**。開発チーム以外の部門や、複雑な承認フローを要する大企業には規律がそのまま制約になる。Linearの美学は、合わない現場では頑固さと呼ばれる。

## 技術構成

::techstack

:::fact
LinearのCTO Tuomas Artman氏が「おそらく存在する中で最良の文書」と公認したリバースエンジニアリング解説によれば、クライアントはモデルをMobXでリアクティブ化し、IndexedDBに永続化する。変更はトランザクションとしてキューされサーバーに送られ、サーバーは単調増加するsync idで全順序を確定し、差分（デルタパケット）をWebSocketで全クライアントへ配信する。CRDTではなく中央サーバーが順序を決めるOT系の設計で、オフライン時はトランザクションを溜めて後で送る。公開APIは公式にGraphQLだ。
:::

:::guess
当サイトの観測ではCloudflareの背後にGoogleのロードバランサ（via: 1.1 google）が見えるため、本番基盤はGoogle Cloudとみられる。同期サーバーはPostgresのレプリケーションログを追う構成が解説されており、「アプリのDBを二重化せず、DBの変更ストリームを配信インフラに転用する」堅実な作りと推測される。CRDTを避けた判断は、課題管理では同時編集の衝突が稀でサーバー順序で十分という、ドメインを見切った割り切りだろう。
:::

## ビジネスモデル

Linearの収益はシート課金のSaaSで、無料枠から有料プランへ引き上げる標準的なPLG（プロダクト主導成長）だ。

:::fact
無料プランがあり、有料はチーム規模と機能で段階的に上がる。シリーズC発表では、AI時代の製品開発（エージェントによるイシュー処理など）への投資が語られ、顧客リストには急成長AI企業が並ぶ。
:::

:::guess
Linearの成長は広告ではなく「開発者の転職とともにツールが伝播する」経路が主とみられ、デザインと速度そのものがマーケティングとして機能している。AI企業に顧客が偏るのは、ツールの規律が少人数・高速迭代の組織と相性が良いためだろう。今後の試金石は、エージェントがイシューを起票・処理する時代に「人間のための速さ」という差別化がどこまで価値を保つかだ。
:::

道具の速さは、機能表に載らないが毎日効いてくる。Linearは「開発者の道具は開発者の速度で動くべきだ」という当たり前を、sync engineという重い投資で実装してみせた——道具論としても、SaaS設計論としても、参照され続ける仕事だ。
