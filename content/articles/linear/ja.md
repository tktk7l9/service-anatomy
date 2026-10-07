---
service: "Linear"
title: "遅いツールへの反乱 — Linearがsync engineで取り戻した「道具の速さ」"
description: "課題管理ツールLinearの解剖。IndexedDB+MobX+WebSocket差分同期の独自sync engineによる体感ゼロ秒のUX、キーボード第一の設計哲学Linear Method、OpenAIら4万社超への浸透と、評価額$2.5Bでの株式買い取り（2026年8月）までを読み解く。"
lead: "課題管理ツールは遅くて重い——その業界常識への反乱として、Linearは「クリックした瞬間に終わっている」体験を建築した。ローカルDBに書いてから裏で同期するsync engineの設計と、開発チームの美意識をそのまま製品にした思想を解剖する。"
category: dev-tool
tags: [project-management, local-first, sync-engine, graphql, saas]
publishedAt: "2026-07-17"
updatedAt: "2026-10-07"
lastVerified: "2026-10-07"
serviceUrl: "https://linear.app/"
vendor: "Linear"
origin: "US"
heroTheme: "linear"
scores: { product: 4.5, ux: 4.5, tech: 4.5, business: 4.0 }
techStack:
  - layer: "同期アーキテクチャ"
    name: "Sync Engine (in-house; OT-style, sync IDs, delta delivery)"
    confidence: confirmed
    evidence: "LinearのCTOが「社内文書より正確で完全」と公認したリバースエンジニアリング文書に、単調増加のsync idで全順序を決めるOT系設計と明記"
    evidenceUrl: "https://github.com/wzhudev/reverse-linear-sync-engine"
  - layer: "クライアント状態管理"
    name: "MobX + IndexedDB"
    confidence: confirmed
    evidence: "同文書に、モデルをMobXでリアクティブ化しIndexedDBにモデル別テーブルで永続化すると明記"
    evidenceUrl: "https://github.com/wzhudev/reverse-linear-sync-engine"
  - layer: "リアルタイム配信"
    name: "WebSocket (delta packet delivery)"
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
    confidence: confirmed
    evidence: "Linear公式ブログ「Rebuilding Linear's delta sync read path」（2026-08-18）に、クライアント向けの変更の記録（sync action）をワークスペースごとの追記専用のログとしてPostgresにコミットして保持し、以前は差分同期の読み出しにもPostgresのテーブルを使っていたと明記"
    evidenceUrl: "https://linear.app/now/rebuilding-delta-sync-read-path"
  - layer: "差分同期の読み出し"
    name: "turbopuffer (inverted-index read path, fed by CDC from a Postgres publication)"
    confidence: confirmed
    evidence: "同じ記事に、20TBを超えるsync actionに対する権限つきの差分同期の問い合わせを、転置インデックスを持つturbopufferで処理するよう作り替え、Postgresのpublicationからの独自の変更データキャプチャで反映し（遅延はp50で約1秒）、最新の部分はPostgresが返すと明記"
    evidenceUrl: "https://linear.app/now/rebuilding-delta-sync-read-path"
  - layer: "フロントエンド"
    name: "React + StyleX (migrated from styled-components)"
    confidence: confirmed
    evidence: "Linear公式ブログ「Styling Linear for the future with StyleX」（2026-08-26）に、1,000を超えるプルリクエストでLinearのReactアプリケーションをstyled-componentsからMeta製のStyleXに移したと明記"
    evidenceUrl: "https://linear.app/now/styling-linear-for-the-future-stylex"
  - layer: "配信/基盤"
    name: "Cloudflare + Google Cloud"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー実観測（server: cloudflare / via: 1.1 google、2026-07-17と2026-10-07）。公式ドキュメントでの明言は見当たらない"
sources:
  - label: "Linear公式ブログ: Building our way — シリーズC発表（2025-06）"
    url: "https://linear.app/now/building-our-way"
    accessedAt: "2026-09-28"
  - label: "Linear公式ブログ: Sharing Linear's growth with the people building it（2026-08-26・評価額25億ドルのテンダーオファー・有料4万社超・ARR1億ドル超）"
    url: "https://linear.app/now/sharing-growth-with-the-people-building-linear"
    accessedAt: "2026-10-07"
  - label: "Linear公式: Pricing（Free/Basic/Business/Enterprise）"
    url: "https://linear.app/pricing"
    accessedAt: "2026-10-07"
  - label: "Linear Docs: AI Credits"
    url: "https://linear.app/docs/ai-credits"
    accessedAt: "2026-10-07"
  - label: "Linear公式ブログ: Rebuilding Linear's delta sync read path（2026-08-18）"
    url: "https://linear.app/now/rebuilding-delta-sync-read-path"
    accessedAt: "2026-10-07"
  - label: "Linear公式ブログ: Styling Linear for the future with StyleX（2026-08-26）"
    url: "https://linear.app/now/styling-linear-for-the-future-stylex"
    accessedAt: "2026-10-07"
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

JiraやAsanaを開くとき、人は無意識にワンテンポ待つ癖がついている。Linearはその「待ち」を敵と定めた。2019年に生まれたこの課題管理ツールは、速さを機能ではなく建築で実現し、OpenAIを含む4万社超に浸透した。ローカルファーストの思想を[Obsidian](/ja/articles/obsidian)がノートで実践したなら、LinearはチームのSaaSで実践した例だ。

## サービス解説

Linearはソフトウェア開発チーム向けの課題管理・プロジェクト管理ツールだ。イシュー、サイクル（スプリント）、ロードマップを、キーボード操作を第一級市民とするUIで扱う。

:::fact
公式ブログ（2025年6月）によれば、LinearはAccel主導のシリーズCで8,200万ドルを調達し、評価額は12.5億ドル。当時はOpenAI・Cash App・Ramp・Scale AIを含む15,000社超が利用するとしていた。2026年8月26日の公式ブログでは、評価額25億ドルで9,900万ドルの株式買い取り（現従業員と元従業員が持ち株の一部を売却できるテンダーオファー）を実施したと公表し、有料で利用する企業は4万社超、ARR（年間経常収益）は1億ドルを超え、キャッシュフローは黒字だとしている。プロダクト思想は「Linear Method」として公式に文書化されており、フルリモートで少人数のチーム運営を公言している。
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

:::fact
Linearの公式ブログ（2026-08-18）によれば、変更はすべて「sync action」として、ワークスペースごとの追記専用のログに順番に記録され、クライアントはこれを手元のデータベースに再生する。オフラインから戻ったクライアントは最後に適用したIDを送り、その後の差分だけを受け取る（差分同期）。最大級のワークスペースは1日に100万件近いsync actionを生み、全体では20TBを超える。差分同期の読み出しは以前Postgresの専用テーブルで処理していたが、権限と購読の条件を突き合わせる処理でCPUが増え、遅延の裾が不安定になったため、転置インデックスを持つturbopufferに読み出しを移した。Postgresのpublicationから独自の変更データキャプチャでメタデータを流し込み（反映の遅れはp50で約1秒）、まだ反映されていない最新の部分はPostgresが返し、両者を重ねて重複を除く。記事は、変更のログを保存することと配ることは別の問題で、Postgresはクライアント向けのログを保存する場所として正しいと結んでいる。2026年8月26日の記事によれば、LinearのReactアプリケーションは、1,000を超えるプルリクエストをかけてstyled-componentsからMeta製のStyleXへ移った。
:::

:::guess
当サイトの観測ではCloudflareの背後にGoogleのロードバランサ（via: 1.1 google）が見えるため、本番基盤はGoogle Cloudとみられる。2026年の公式記事は、Postgresを変更のログの正本に据えたまま、重い読み出しだけを専用のインデックスに逃がす作り方を示しており、アプリのDBを二重化せずにログを配信の基盤に使う堅実な設計と推測される。CRDTを避けた判断は、課題管理では同時編集の衝突が稀でサーバー順序で十分という、ドメインを見切った割り切りだろう。
:::

## ビジネスモデル

Linearの収益はシート課金のSaaSで、無料枠から有料プランへ引き上げる標準的なPLG（プロダクト主導成長）だ。

:::fact
無料プランがあり、有料はチーム規模と機能で段階的に上がる。公式の料金ページ（2026年10月7日確認）では、Free（メンバー無制限・2チーム・課題250件まで）・Basic（年払いで1ユーザー月10ドル）・Business（同16ドル）・Enterprise（個別見積もり）の4段階だ。コードを書かせるCoding sessionsと、定期的な作業を任せるLoopsは別に「AIクレジット」を使う。公式ドキュメントによれば、AIクレジットはワークスペースで共有する前払いの残高で、Coding sessionsはモデルのトークン代を提供元の公表価格のまま上乗せなしで払い、サンドボックスの実行時間は20分ごとに0.25ドル、Loopsは1回あたり0.07〜0.20ドル程度。残高を入れなければこれらの機能は使えず、課金もされない。2026年8月の公式ブログは、有料ワークスペースの95%にエージェントが導入され、エージェントが作る作業の割合が1年前の3%から50%に増え、売上の継続率（NRR）が177%だと述べている。シリーズC発表では、AI時代の製品開発（エージェントによるイシュー処理など）への投資が語られ、顧客リストには急成長AI企業が並ぶ。
:::

:::guess
Linearの成長は広告ではなく「開発者の転職とともにツールが伝播する」経路が主とみられ、デザインと速度そのものがマーケティングとして機能している。AI企業に顧客が偏るのは、ツールの規律が少人数・高速迭代の組織と相性が良いためだろう。今後の試金石は、エージェントがイシューを起票・処理する時代に「人間のための速さ」という差別化がどこまで価値を保つかだ。
:::

道具の速さは、機能表に載らないが毎日効いてくる。Linearは「開発者の道具は開発者の速度で動くべきだ」という当たり前を、sync engineという重い投資で実装してみせた——道具論としても、SaaS設計論としても、参照され続ける仕事だ。
