---
title: "借りて磨くか、地面から作るか — 当サイトがかつて立っていたVercelと、いま立っているCloudflareの違い"
description: "当サイトが2026年9月12日まで配信されていたVercelと、現在の配信基盤であり、解剖記事54本中22本のtechStackに現れるCloudflare。どちらも開発者向けインフラの代表格だが、機械比較で重なる技術は実装言語のRustだけ。AWSの上でNext.jsという体験だけを磨くVercelと、NGINXを自作Rustプロキシに置き換えてまで地面から作るCloudflare、正反対の垂直統合度を解剖する。"
lead: "この記事は2026年9月12日までVercelから配信され、いまはCloudflare Workersから配信されている。そして、当サイトの54本の解剖記事のうち22本のtechStackに、Cloudflareが登場する（2026年9月28日時点・Cloudflare自身の記事を含む）。開発者インフラの2つの代表格を並べると、技術の重なりは実装言語のRustだけ——Vercelは他社のクラウド（AWS）の上でNext.jsという体験だけを磨き、Cloudflareはネームサーバーの下から自作のRustプロキシまで、地面そのものを作っている。垂直統合の度合いがまるで違う2社を解剖する。"
slugA: "vercel"
slugB: "cloudflare"
publishedAt: "2026-07-23"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
sources:
  - label: "Vercel公式ブログ: Towards the AI Cloud — Series F（評価額93億ドル・2025-09-30）"
    url: "https://vercel.com/blog/series-f"
    accessedAt: "2026-09-28"
  - label: "Vercel公式ドキュメント: Global network and regions（126 PoP・19リージョン）"
    url: "https://vercel.com/docs/regions"
    accessedAt: "2026-09-28"
  - label: "Cloudflare公式ブログ: How we built Pingora（NGINXからの移行理由）"
    url: "https://blog.cloudflare.com/how-we-built-pingora-the-proxy-that-connects-cloudflare-to-the-internet/"
    accessedAt: "2026-09-28"
  - label: "Cloudflare公式プレスリリース: 2025年度第4四半期・通期決算"
    url: "https://www.cloudflare.com/press/press-releases/2026/cloudflare-announces-fourth-quarter-and-fiscal-year-2025-financial-results/"
    accessedAt: "2026-09-28"
  - label: "Next.js公式ドキュメント: Turbopack（Rustで書かれたバンドラ）"
    url: "https://nextjs.org/docs/app/api-reference/turbopack"
    accessedAt: "2026-09-28"
  - label: "Cloudflare公式: グローバルネットワーク（348都市・100カ国超）"
    url: "https://www.cloudflare.com/network/"
    accessedAt: "2026-09-28"
  - label: "Cloudflare公式ドキュメント: Next.js on Workers（Next.jsをWorkersで動かす公式ガイド）"
    url: "https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/"
    accessedAt: "2026-09-28"
---

[Vercel](/ja/articles/vercel)と[Cloudflare](/ja/articles/cloudflare)は、どちらも「開発者に見えないところで動くインフラ」の代表格だ。当サイトは2026年9月12日までVercelから配信され、いまはCloudflare Workersから配信されている。解剖記事54本中22本のtechStackにもCloudflareが登場する（2026年9月28日時点・Cloudflare自身の記事を含む）——2社ともこのサイトの成り立ちに深く関わっている。それなのに、両社のtechStackを機械比較すると、共有される技術トークンは実装言語のRust、1つだけだ。

## 借りて磨くVercel、地面から作るCloudflare

:::fact
[Vercel](/ja/articles/vercel)の記事によれば、公式のリージョンドキュメントに載る19のコンピュートリージョン（2026年9月28日確認）の内部名称はAWSのリージョン名と一致しており、Vercelの基盤クラウドはAWSだとlikely評価されている。その上で、Vercel自身が開発するのはNext.js（フレームワーク）・Fluid compute（実行モデル）・Turbopack（Rust製バンドラ）という「開発者が触れる体験の層」に絞られている。一方[Cloudflare](/ja/articles/cloudflare)の記事によれば、Cloudflareは長年使ったNGINXを「規模がNGINXを超えた」として自社開発のRust製プロキシPingoraに置き換え、Anycastの物理ネットワークも自社で348都市・100カ国超に展開している（公式ネットワークページ・2026年9月28日確認）。TurbopackとPingoraは、どちらもRustで書かれている。
:::

:::pull
Vercelは他社の土地の上に、最高の建物を建てる。Cloudflareは、土地から自分で作る。同じ「開発者インフラ」でも、垂直統合の深さがまるで違う。
:::

Vercelの技術選定は、[Canvaの解剖記事](/ja/articles/canva)で見た「組み立て」型に近い。基盤はAWSに委ね、開発者が直接触れるフレームワーク・実行モデル・バンドラという層だけを自社で磨き込む。Cloudflareの技術選定は、[Netflixの解剖記事](/ja/articles/netflix)で見た「自作」型そのものだ。ネットワークの物理層からプロキシ、サーバーレス実行基盤（V8 isolatesによるCloudflare Workers）まで、借りずに作る。

:::guess
この差は、両社が売っているものの違いに由来するとみられる。Vercelが売るのは「Next.jsを書く体験」であり、その価値は基盤のクラウドが何かではなく、デプロイの速さやプレビューURLといった開発者が直接触れる部分に宿る。だからこそ基盤はAWSを借りて、体験の層にリソースを集中できる。Cloudflareが売るのは「世界中どこからでも速く安全に届く」という物理的な保証そのものであり、これは借り物のネットワークの上では実現できない性質の価値だ。何を売るかが、どこまで自作するかを規定していると考えられる。
:::

訂正（2026年9月28日）。初版では、両社の技術の重なりはゼロだと書いていたが、誤りだった。VercelのTurbopackとCloudflareのPingoraはどちらもRustで書かれており、両方の記事の本文にもそう書いてあったのに、techStackではRustが括弧書きの注釈に入っていたため機械比較の対象から外れていた。両方の記事のtechStackにRustを独立した項目として追加した結果、機械比較はRustを共有技術として返す。

## 重なりはRustだけ、それでも両社とも当サイトの歴史の一部になっている

機械比較したtechStackの重なりは実装言語のRustだけだが、当サイトというたった1つのプロダクトの中では、両社は無関係ではない。

:::fact
当サイトは公開時からVercelにデプロイされていたが、2026年9月12日にCloudflare Workersへ移り、2026年9月23日からは独自ドメイン serviceanatomy.com で配信している。Next.jsはそのまま使い、OpenNextでビルドしてWorkersで動かしている。同時に、これまでの解剖記事54本のうち22本のtechStackにCloudflareが登場し（2026年9月28日時点・Cloudflare自身の記事を含む）、[Notion vs Obsidianの比較解剖](/ja/compare/notion-vs-obsidian)では両社で唯一重なる技術としてCloudflareが挙げられている。
:::

:::guess
VercelとCloudflareの機械比較で重なるのが実装言語だけなのは偶然ではなく、両社が開発者インフラの中で異なるレイヤーを狙っているためだと考えられる。Vercelはフレームワークとホスティング体験というアプリケーション至近の層、Cloudflareはネットワークとエッジ実行というインターネット至近の層で、それぞれ「地層」を作っている。当サイトのような個々のWebサービスは、この2つの地層のどちらか（あるいは両方）の上に乗ることになるが、地層同士が製品としてほとんど重ならないのは、両社が垂直方向に積み重なる別のレイヤーを担ってきたからだと推測される。ただし、当サイトがNext.jsのままVercelからCloudflare Workersへ移れたことは、アプリケーションを動かす層では両社が同じ利用者を取り合う関係にもあることを示しているとみられる。
:::

訂正（2026年9月28日）。初版では、当サイトはVercelにデプロイされVercelから配信されていると書いていたが、2026年9月12日にCloudflare Workersへ移行したため、現状に合わせて書き直した。解剖記事の本数とCloudflareが登場する本数も、初版の25本中12本から、2026年9月28日時点の54本中22本へ改めた。

Vercelは他社の土地の上で体験を磨き、Cloudflareは土地そのものを自作する。機械比較で重なるのがRustだけなのは、開発者インフラという同じ地図の中で、2社が異なる高さのレイヤーを担当してきたからだ。当サイトはその片方から、もう片方へ引っ越した。
