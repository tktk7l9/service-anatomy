---
service: "Ghost"
title: "決算書の代わりに、ライブのダッシュボードを晒す — 「買収されない構造」を選んだGhostの経営"
description: "オープンソースのパブリッシングプラットフォームGhost。非営利財団がARR・顧客数・解約率までリアルタイムで公開し、投資家も寄付も持たず約40人で運営する。購読収益から歩合を取らない料金設計と、ActivityPubで開かれた社会圏へ接続したGhost 6.0までを公式情報から解剖する。"
lead: "Ghostの公式サイトには、いま この瞬間のARR（1,094万ドル）・顧客数（30,493）・解約率（3.05%）が生の数字で表示されている。非営利財団という「売却も買収も構造的に不可能」な器を選び、投資家も寄付もなしに黒字で回る。書く人からは歩合を取らない——この徹底した設計の解剖である。"
category: media
tags: [publishing, newsletter, open-source, nonprofit, activitypub]
publishedAt: "2026-07-21"
updatedAt: "2026-07-21"
lastVerified: "2026-07-21"
serviceUrl: "https://ghost.org/"
vendor: "Ghost Foundation"
origin: "GB"
heroTheme: "ghost"
scores: { product: 4.0, ux: 4.0, tech: 4.0, business: 4.0 }
techStack:
  - layer: "本体"
    name: "Node.js (JavaScript)"
    confidence: confirmed
    evidence: "公式GitHub（TryGhost/Ghost）の主要言語がJavaScriptであることを実確認（スター5.4万超・2026-07-21）。Node.js製のOSSとして公開"
    evidenceUrl: "https://github.com/TryGhost/Ghost"
  - layer: "連合プロトコル"
    name: "ActivityPub"
    confidence: confirmed
    evidence: "公式チェンジログ（Ghost 6.0・2025-08-05）に、ActivityPubで連合し、Mastodon・Threads・Bluesky・Flipboard等から購読可能になったと明記。Ghost(Pro)・セルフホストの双方で無料"
    evidenceUrl: "https://ghost.org/changelog/6/"
  - layer: "ネイティブ分析"
    name: "Ghost Analytics"
    confidence: confirmed
    evidence: "公式チェンジログ（6.0）に、外部ツール不要のファーストパーティ分析（Web・ニュースレター・購読の実時間計測）を同梱と明記"
    evidenceUrl: "https://ghost.org/changelog/6/"
  - layer: "公式サイト配信"
    name: "Netlify"
    confidence: confirmed
    evidence: "当サイトのHTTPヘッダー実観測（server: Netlify・x-nf-request-id、2026-07-21）"
    evidenceUrl: "https://ghost.org/"
sources:
  - label: "Ghost公式: About（ライブ公開ダッシュボード=ARR・顧客数・解約率・非営利構造の宣言）"
    url: "https://ghost.org/about/"
    accessedAt: "2026-07-21"
  - label: "Ghost公式チェンジログ: Ghost 6.0（ActivityPub連合・ネイティブ分析・2025-08-05）"
    url: "https://ghost.org/changelog/6/"
    accessedAt: "2026-07-21"
  - label: "Ghost公式: Pricing（定額ホスティング・購読収益への追加手数料0%）"
    url: "https://ghost.org/pricing/"
    accessedAt: "2026-07-21"
  - label: "Ghost公式GitHub: TryGhost/Ghost（Node.js・スター5.4万超を実確認）"
    url: "https://github.com/TryGhost/Ghost"
    accessedAt: "2026-07-21"
---

## サービス解説

Ghostは2013年に始まったオープンソースのパブリッシングプラットフォームだ。ブログ・ニュースレター・有料購読（メンバーシップ）を1つのソフトウェアで扱い、個人のライターから報道機関まで、「読者に直接届けて直接課金する」独立系パブリッシャーの基盤になっている。運営は非営利のGhost Foundationで、公式サイトには「この会社は決して買収も売却もされない。収益の100%は製品とコミュニティに再投資される」と明記されている。

:::fact
公式Aboutページには経営指標がリアルタイムで公開されており、2026年7月21日の閲覧時点でARRは1,094万7,413ドル、月次収益は91万2,284ドル、有効顧客は30,493、純解約率は3.05%だった。累計インストールは1億超、月間リクエストは90億件。チームは約40人のフルリモートで5大陸に分散し、外部投資家・寄付・助成金のいずれにも依存しない自己資金経営と明記されている。
:::

:::pull
上場企業は四半期ごとに決算書を出す。Ghostは今この瞬間のARRと解約率をサイトに晒し続ける。透明性の周期が違う。
:::

::scorecard

## UX分析

GhostのUXは「書くことと売ることの距離」を縮める方向に設計されている。書き手が主役で、プラットフォームは黒子に徹する。

- **エディタが製品の顔**。カード式のリッチエディタは、装飾より書く速度と集中を優先した設計で、公開・ニュースレター配信・有料区切りの設定までが同じ画面で完結する。
- **サイトとニュースレターと課金が最初から一体**。ブログ・メール配信・メンバーシップを別ツールで縫い合わせる必要がなく、「読者との直接関係」が単一のデータベースに集まる。
- **6.0のネイティブ分析が外部依存を消した**。Web・ニュースレター・購読転換の計測が同梱になり、Google Analytics等を貼らずに運営が完結する。プライバシーと簡潔さの両面で理にかなった内製化だ。
- **所有の感覚が体験の核**。独自ドメイン・データエクスポート・セルフホストの選択肢が常に開かれており、「いつでも出て行ける」ことが逆に留まる理由として機能している。ObsidianやSignalの解剖で見たものと同じ、退出可能性による信頼の設計だ。

## 技術構成

::techstack

:::fact
Ghostの本体はNode.js（JavaScript）のOSSで、公式リポジトリのスターは5万4,000を超える（2026-07-21実確認）。2025年8月5日リリースのGhost 6.0では、ActivityPubによる連合機能を標準搭載し、MastodonやThreads・Bluesky・Flipboardなどのユーザーが、Ghostのサイトを直接フォローできるようになった。この機能はGhost(Pro)でもセルフホストでも無料で使える。同時に、外部ツール不要のファーストパーティ分析も同梱された。
:::

:::guess
ActivityPubへの投資は、独立パブリッシャーの最大の弱点である「配信のプラットフォーム依存」への構造的な回答とみられる。XやFacebookのアルゴリズムに露出を左右されるかわりに、開かれたプロトコルで読者と直接つながる——Blueskyの解剖で見た「出る透明性」の、パブリッシング版だ。技術選定が野心的な自作（Figma型）でも大胆な組み立て（Supabase型）でもなく、Node.jsという枯れた道具の丁寧な運用に留まっているのは、約40人で1億インストールを支えるための保守性優先の判断と推測される。
:::

## ビジネスモデル

Ghostの収益は、OSS本体の無料公開と、マネージドホスティングGhost(Pro)の定額課金の組み合わせだ。

:::fact
公式の料金ページによれば、Ghost(Pro)は定額の月額課金（Starter 18ドル〜Business 199ドル・年払い時）で、書き手の有料購読収益に対するGhost側の追加手数料は0%と明記されている（決済事業者の手数料は別）。Aboutページには、この収益の100%が製品とコミュニティに再投資されると書かれている。
:::

:::guess
歩合を取らない定額制は、購読で稼ぐ書き手ほど得をする料金設計であり、収益歩合を取るニュースレター事業者への最も鋭い対抗軸になっているとみられる。非営利財団という器は税制の話ではなく、「買収による方針転換がありえない」ことを構造で保証する信頼の装置で、プラットフォームの豹変に疲れた書き手への営業資料として機能している。ARR約1,100万ドルという規模は営利SaaSの物差しでは小さいが、解約率3%・40人・外部資本ゼロという組み合わせは、成長の最大化ではなく持続の最大化という別の最適化問題を解いている——その解のひとつの完成形と推測される。
:::

決算書の代わりにライブのダッシュボードを晒し、買収の可能性を定款で消し、書き手の売上から歩合を取らない。Ghostの解剖で見えるのは、SignalやObsidianと同じ系譜——「構造で信頼を証明する」設計の、パブリッシング版だ。派手な成長曲線はない。だが、成長を目的から外した経営が10年以上黒字で続いているという事実そのものが、この分野でもっとも雄弁なデータである。
