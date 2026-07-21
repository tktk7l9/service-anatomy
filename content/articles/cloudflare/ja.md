---
service: "Cloudflare"
title: "インターネットの地層 — 当サイトが解剖した25サービスの半分に現れるCloudflareの正体"
description: "CDNから始まり、NGINXを自作Rustプロキシで置き換え、V8 isolatesのサーバーレスまで積み上げたCloudflare。当サイトの解剖記事25本中12本のtechStackに登場する「見えないインフラ」を、公式エンジニアリングブログと決算発表から解剖する。"
lead: "当サイトがこれまで解剖した25サービスのうち、12サービスのtechStackに同じ名前が現れる——Cloudflare。NotionとObsidianの比較解剖で唯一重なった技術でもある。個々のサービスの下に地層のように広がるこの会社は、何で出来ていて、どう稼いでいるのか。今回は地層そのものを掘る。"
category: dev-tool
tags: [cdn, edge-computing, rust, serverless, security]
publishedAt: "2026-07-21"
updatedAt: "2026-07-21"
lastVerified: "2026-07-21"
serviceUrl: "https://www.cloudflare.com/"
vendor: "Cloudflare, Inc."
origin: "US"
heroTheme: "cloudflare"
scores: { product: 4.5, ux: 4.0, tech: 5.0, business: 4.0 }
techStack:
  - layer: "エッジプロキシ"
    name: "Pingora (Rust)"
    confidence: confirmed
    evidence: "公式ブログに、NGINXの限界（ワーカープロセス設計・C/Luaの安全性）を理由にRustで自社プロキシPingoraを構築し、1日1兆リクエスト超を処理していると明記。2024年2月にApache 2.0でOSS公開"
    evidenceUrl: "https://blog.cloudflare.com/how-we-built-pingora-the-proxy-that-connects-cloudflare-to-the-internet/"
  - layer: "サーバーレス実行基盤"
    name: "Cloudflare Workers (V8 isolates)"
    confidence: confirmed
    evidence: "公式ドキュメントに、コンテナではなくV8 isolatesでコードを実行し、単一ランタイムで数百〜数千のisolateを切り替え、コンテナ上のNodeプロセス比で約100倍高速に起動すると明記"
    evidenceUrl: "https://developers.cloudflare.com/workers/reference/how-workers-works/"
  - layer: "ネットワーク"
    name: "Anycastグローバルネットワーク"
    confidence: confirmed
    evidence: "公式ネットワークページに337都市・100カ国超で展開し、世界のインターネット人口の95%から50ミリ秒以内（大半は20ミリ秒以内）と明記"
    evidenceUrl: "https://www.cloudflare.com/network/"
  - layer: "公式サイト配信"
    name: "Cloudflare"
    confidence: confirmed
    evidence: "当サイトのHTTPヘッダー実観測（server: cloudflare・x-served-by: marketing-site、2026-07-21）。自社製品による自社サイト配信"
    evidenceUrl: "https://www.cloudflare.com/"
sources:
  - label: "Cloudflare公式プレスリリース: 2025年度第4四半期・通期決算（売上21.679億ドル・前年比30%増・2026-02-10）"
    url: "https://www.cloudflare.com/press/press-releases/2026/cloudflare-announces-fourth-quarter-and-fiscal-year-2025-financial-results/"
    accessedAt: "2026-07-21"
  - label: "Cloudflare公式ブログ: How we built Pingora（NGINXからの移行理由・1日1兆リクエスト）"
    url: "https://blog.cloudflare.com/how-we-built-pingora-the-proxy-that-connects-cloudflare-to-the-internet/"
    accessedAt: "2026-07-21"
  - label: "Cloudflare公式ブログ: Pingora OSS公開（2024-02-28・Apache 2.0）"
    url: "https://blog.cloudflare.com/pingora-open-source/"
    accessedAt: "2026-07-21"
  - label: "Cloudflare公式ドキュメント: How Workers works（V8 isolatesアーキテクチャ）"
    url: "https://developers.cloudflare.com/workers/reference/how-workers-works/"
    accessedAt: "2026-07-21"
  - label: "Cloudflare公式: グローバルネットワーク（337都市・95%が50ms以内）"
    url: "https://www.cloudflare.com/network/"
    accessedAt: "2026-07-21"
---

## サービス解説

Cloudflareは、WebサイトやAPIの前段に立つネットワークサービスだ。2009年創業・2019年にNYSE上場（ティッカー: NET）。CDN・DDoS防御・DNSから始まり、いまはサーバーレス実行基盤（Workers）やオブジェクトストレージ（R2）まで広がる「エッジのプラットフォーム」になっている。

当サイトにとってCloudflareは特別な存在でもある。これまで解剖した25サービスのうち12サービスのtechStackに登場し、NotionとObsidianの比較解剖では両社で唯一重なった技術だった。個々のサービスを掘ると必ず現れる地層——それが本記事の被写体だ。

:::fact
公式決算発表（2026年2月10日）によれば、2025年度通期の売上は21億6,790万ドルで前年比30%増。GAAPベースの営業損失は4,920万ドル（売上の8%）だが、非GAAP営業利益は8,960万ドル（同15%）。第4四半期には年間契約額4,250万ドルという過去最大の契約を締結し、残存履行義務（RPO）は前年比48%増と、大型契約への移行が進む。ネットワークは337都市・100カ国超に展開し、世界のインターネット人口の95%が50ミリ秒以内に到達できる。
:::

:::pull
25の解剖のうち12でtechStackに現れる会社は、もはや「あるサービス」ではなく、他のサービスが立つ地面に近い。
:::

::scorecard

## UX分析

Cloudflareの利用者は開発者と運用者だ。そのUXは「世界規模のインフラを、個人の設定画面に圧縮する」ことに向けられている。

- **ネームサーバーを変えるだけで337都市**。ドメインのネームサーバーをCloudflareに向けた瞬間、CDN・DDoS防御・TLSが世界中のエッジで有効になる。物理的なインフラ規模と設定の手数が完全に切り離されている。
- **無料プランが本物**。個人ブログから当サイトのような小規模サイトまで、CDNとDDoS防御が無料で使える。無料ユーザーが観測するトラフィックが脅威検知の学習データになる構造で、「タダより高いものはない」ではなく「タダが製品を強くする」設計だ。
- **ダッシュボード一枚の統合**。DNS・キャッシュ・セキュリティルール・Workersのデプロイまでが一つの管理画面に収まり、複数ベンダーを渡り歩く運用を一社に畳み込む。
- **開発者向けの顔はwranglerとdocs**。Workersの開発はCLI（wrangler）とドキュメント中心で、ローカル実行からデプロイまでの導線が短い。エッジで動くコードという特殊な実行モデルを、普通のJavaScript開発の体験に翻訳している。

## 技術構成

::techstack

:::fact
Cloudflareの中核プロキシは、長年使ったNGINXを「規模がNGINXを超えた」として自社開発のPingoraに置き換えたものだ。公式ブログによれば、NGINXのワーカープロセス設計によるCPU負荷の偏り・コネクション再利用の弱さ・C/Lua拡張の安全性が移行理由で、Rustで書かれたPingoraは1日1兆リクエスト超を処理し、2024年2月28日にApache 2.0でOSS公開された。サーバーレス基盤のWorkersはコンテナではなくV8 isolatesを使い、単一ランタイムで数百〜数千のisolateを切り替えることで、コンテナ上のNodeプロセスに比べ約100倍高速な起動を実現していると公式ドキュメントに明記されている。
:::

:::guess
PingoraとWorkersに共通するのは、「汎用の実行単位（プロセス・コンテナ）は、エッジの規模では重すぎる」という判断とみられる。337都市すべてで全サービスを動かす設計では、1リクエストあたりの固定費が積の形で効いてくるため、isolateやシングルバイナリのRustプロキシのような軽量な実行単位への投資が最も回収効率が高い。Pingoraを買収や既製品でなく自作した上でOSS化までする動きは、採用広報であると同時に、「エッジのデファクト実装」を自社設計で押さえる標準化戦略の一環と推測される。
:::

## ビジネスモデル

Cloudflareの収益はサブスクリプションで、無料プランから中小向け有料プラン、そして大企業向けのエンタープライズ契約へと階段が続く。

:::fact
公式決算発表によれば、2025年度は売上21億6,790万ドル（前年比30%増）に対しGAAP営業損失4,920万ドル。一方で第4四半期の新規年間契約額は前年比50%近い伸びで2021年以来最速となり、年間4,250万ドルの過去最大契約を含む大型化が進む。非GAAPでは営業利益率15%を確保している。
:::

:::guess
GAAP赤字のまま成長投資を続ける構図は、「地層になってしまえば置き換えられない」というインフラ事業の性質に賭けているとみられる。無料プランで裾野を最大化し、観測したトラフィックで脅威検知を強くし、その信頼で大企業のセキュリティ・ネットワーク予算を取りに行く——規模がそのまま製品品質になるループを回すには、目先の営業黒字より面の拡大が合理的という判断だろう。RPOの48%増はこの戦略が大型契約として結実しつつある兆候だが、同時にAWSら大手クラウドとの正面衝突が近づいていることも意味していると推測される。
:::

25サービスを解剖して12回現れた名前は、インターネットの「上物」ではなく「地面」になりつつある。NGINXを捨てて自作し、コンテナを捨ててisolateを選ぶ——地面であり続けるための軽量化への執念が、この会社の技術の一貫した主題だ。次にどこかのサービスを解剖してcf-rayヘッダーを見つけたとき、その下にはこの地層が広がっている。
