---
title: "借りて磨くか、地面から作るか — 当サイトが立つVercelと、12記事に潜むCloudflareの違い"
description: "当サイト自身が配信されているVercelと、これまでの解剖記事25本中12本のtechStackに現れるCloudflare。どちらも開発者向けインフラの代表格だが、機械比較した技術の重なりはゼロ。AWSの上でNext.jsという体験だけを磨くVercelと、NGINXを自作Rustプロキシに置き換えてまで地面から作るCloudflare、正反対の垂直統合度を解剖する。"
lead: "この記事はVercelから配信されている。そして、この記事が生まれた当サイトを含む25本の解剖記事のうち12本のtechStackに、Cloudflareが登場する。開発者インフラの2つの代表格を並べると、技術の重なりはゼロ——Vercelは他社のクラウド（AWS）の上でNext.jsという体験だけを磨き、Cloudflareはネームサーバーの下から自作のRustプロキシまで、地面そのものを作っている。垂直統合の度合いがまるで違う2社を解剖する。"
slugA: "vercel"
slugB: "cloudflare"
publishedAt: "2026-07-23"
updatedAt: "2026-07-23"
lastVerified: "2026-07-23"
sources:
  - label: "Vercel公式ブログ: Towards the AI Cloud — Series F（評価額93億ドル・2025-09-30）"
    url: "https://vercel.com/blog/series-f"
    accessedAt: "2026-07-21"
  - label: "Vercel公式ドキュメント: Global network and regions（126 PoP・20リージョン）"
    url: "https://vercel.com/docs/regions"
    accessedAt: "2026-07-21"
  - label: "Cloudflare公式ブログ: How we built Pingora（NGINXからの移行理由）"
    url: "https://blog.cloudflare.com/how-we-built-pingora-the-proxy-that-connects-cloudflare-to-the-internet/"
    accessedAt: "2026-07-21"
  - label: "Cloudflare公式プレスリリース: 2025年度第4四半期・通期決算"
    url: "https://www.cloudflare.com/press/press-releases/2026/cloudflare-announces-fourth-quarter-and-fiscal-year-2025-financial-results/"
    accessedAt: "2026-07-21"
---

[Vercel](/ja/articles/vercel)と[Cloudflare](/ja/articles/cloudflare)は、どちらも「開発者に見えないところで動くインフラ」の代表格だ。当サイトはVercelから配信され、これまでの解剖記事25本中12本のtechStackにCloudflareが登場する——2社ともこの site の成り立ちに深く関わっている。それなのに、両社のtechStackを機械比較すると、共有される技術トークンは1つもない。

## 借りて磨くVercel、地面から作るCloudflare

:::fact
[Vercel](/ja/articles/vercel)の記事によれば、公式のリージョンドキュメントに載る20のコンピュートリージョンの内部名称はAWSのリージョン名と一致しており、Vercelの基盤クラウドはAWSだとlikely評価されている。その上で、Vercel自身が開発するのはNext.js（フレームワーク）・Fluid compute（実行モデル）・Turbopack（Rust製バンドラ）という「開発者が触れる体験の層」に絞られている。一方[Cloudflare](/ja/articles/cloudflare)の記事によれば、Cloudflareは長年使ったNGINXを「規模がNGINXを超えた」として自社開発のRust製プロキシPingoraに置き換え、Anycastの物理ネットワークも自社で337都市・100カ国超に展開している。
:::

:::pull
Vercelは他社の土地の上に、最高の建物を建てる。Cloudflareは、土地から自分で作る。同じ「開発者インフラ」でも、垂直統合の深さがまるで違う。
:::

Vercelの技術選定は、[Canvaの解剖記事](/ja/articles/canva)で見た「組み立て」型に近い。基盤はAWSに委ね、開発者が直接触れるフレームワーク・実行モデル・バンドラという層だけを自社で磨き込む。Cloudflareの技術選定は、[Netflixの解剖記事](/ja/articles/netflix)で見た「自作」型そのものだ。ネットワークの物理層からプロキシ、サーバーレス実行基盤（V8 isolatesによるCloudflare Workers）まで、借りずに作る。

:::guess
この差は、両社が売っているものの違いに由来するとみられる。Vercelが売るのは「Next.jsを書く体験」であり、その価値は基盤のクラウドが何かではなく、デプロイの速さやプレビューURLといった開発者が直接触れる部分に宿る。だからこそ基盤はAWSを借りて、体験の層にリソースを集中できる。Cloudflareが売るのは「世界中どこからでも速く安全に届く」という物理的な保証そのものであり、これは借り物のネットワークの上では実現できない性質の価値だ。何を売るかが、どこまで自作するかを規定していると考えられる。
:::

## 共有ゼロの裏で、両社とも当サイトの一部になっている

機械比較したtechStackの重なりはゼロだが、当サイトというたった1つのプロダクトの中では、両社は無関係ではない。

:::fact
当サイト自体がVercelにデプロイされ、Vercelのサーバーから配信されている。同時に、これまでの解剖記事25本のうち12本のtechStackにCloudflareが登場し、[Notion vs Obsidianの比較解剖](/ja/compare/notion-vs-obsidian)では両社で唯一重なる技術としてCloudflareが挙げられている。
:::

:::guess
VercelとCloudflareが機械比較でゼロなのは偶然ではなく、両社が開発者インフラの中で異なるレイヤーを狙っているためだと考えられる。Vercelはフレームワークとホスティング体験というアプリケーション至近の層、Cloudflareはネットワークとエッジ実行というインターネット至近の層で、それぞれ「地層」を作っている。当サイトのような個々のWebサービスは、この2つの地層のどちらか（あるいは両方）の上に乗ることになるが、地層同士が技術トークンとして重ならないのは、両社が競合というより、垂直方向に積み重なる別のレイヤーを担っているからだと推測される。
:::

Vercelは他社の土地の上で体験を磨き、Cloudflareは土地そのものを自作する。機械比較が示すゼロの重なりは、2社が対立しているからではなく、開発者インフラという同じ地図の中で、まったく異なる高さのレイヤーを担当しているからだ。当サイトはその両方の上に、気づかぬうちに乗っている。
