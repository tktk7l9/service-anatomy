---
service: "Stripe"
title: "決済を処理する会社が「売り手」も引き受け始めた — 世界GDPの1.6%を流すStripeの料金表、Stripe Tax、Managed Payments、5,000万行のRubyを解剖する"
description: "決済インフラのStripeは、2025年に1.9兆ドル（世界GDPの約1.6%）を処理し、評価額1,590億ドルのテンダーオファーで非上場のまま従業員に現金を返している。料金表は製品ごとに率が積み上がる形で、日本はカード3.6%、英国は1.5% + 20pから。Stripe Taxは取引ごとの0.5%から、マーチャント・オブ・レコードのManaged Paymentsは決済手数料に3.5%を足す。そのManaged Paymentsは、2024年に買収したLemon Squeezyのチームが作っている。2026年にはMetronome（従量課金）の買収を終え、OpenRouterとParafinの買収に合意した。裏側では5,000万行規模のRubyのモノレポ、自作の型チェッカーSorbet、Envoyを置き換えたGo製のプロキシ、週1,000件超のプルリクエストを書く自社のコーディングエージェントが動く。公式の料金ページ、ドキュメント、ニュースルーム、エンジニアリングブログ、Lemon Squeezyの公式ブログ、当サイトの実観測から解剖する。"
lead: "Stripeの製品を画面で見たことがある人は少ない。開発者がAPIを呼び、その裏を2025年に1.9兆ドルが流れた。長いあいだ、Stripeは決済を処理し、税の計算や請求の部品を渡す側にいた。売り手はあくまで開発者で、税の登録も申告も開発者の仕事だった。2026年4月、Stripeは自分が売り手になるManaged Paymentsを一般提供した。作ったのは、2024年に買収したLemon Squeezyのチームだ。部品を売る会社が、部品の束を丸ごと引き受け始めた理由を、料金表とコードベースの両方から解剖する。"
category: saas
tags: [payments, fintech, api, ruby, developer-experience, merchant-of-record, sales-tax, ai-agent]
publishedAt: "2026-07-21"
updatedAt: "2026-11-03"
lastVerified: "2026-11-03"
serviceUrl: "https://stripe.com/"
expires:
  - date: "2027-03-31"
    claim: "Parafinの買収が「今後数か月のうちに」完了する見込みという発表（2026-09-30）"
vendor: "Stripe, Inc."
origin: "US"
heroTheme: "stripe"
scores: { product: 4.5, ux: 4.5, tech: 5.0, business: 5.0 }
revisions:
  - date: "2026-07-21"
    scores: { product: 4.5, ux: 4.5, tech: 5.0, business: 5.0 }
    note: "初回解剖時点のスコア。初版はAPI設計、Sorbet、DocDB、Radarと2025年のアニュアルレターを中心にした短い解剖で、料金表、Stripe Tax、Managed Payments、Lemon Squeezyの買収、2026年の買収と技術記事は扱っていなかった。"
techStack:
  - layer: "主要言語・型基盤"
    name: "Ruby (not Rails) + Sorbet"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2022-03-28）は、1,500万行・15万ファイルのRubyを、C++で書いた自社の型チェッカーSorbetで検査していると書く。2026年2月9日の記事「Minions」は「バックエンドの大半はSorbetの型付きのRuby（Railsではない）」と明記し、2026年4月9日の記事はモノレポを「5,000万行規模のRuby」、2026年4月28日の記事は「2,500万行のコードベース」と書く"
    evidenceUrl: "https://stripe.dev/blog/selective-test-execution-at-stripe-fast-ci-for-a-50m-line-ruby-monorepo"
  - layer: "開発基盤（整形・CI）"
    name: "rubyfmt (Rust) + Selective Test Execution (C++ LD_PRELOAD library)"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2026-04-28）は、Rustで書いた設定不要の自動整形ツールrubyfmtを「世界最大のRubyのコードベース」全体に一晩で適用したと書く。2026年4月9日の記事は、約10万のテストファイルと約120万のテストのうち、平均で約5%だけを選んで実行するSelective Test Executionの土台が、LD_PRELOADで読み込む自社のC++共有ライブラリ file_access_interceptor だと説明する"
    evidenceUrl: "https://stripe.dev/blog/formatting-an-entire-25-million-line-codebase-overnight-the-rubyfmt-story"
  - layer: "データベース基盤"
    name: "DocDB (in-house DBaaS based on MongoDB Community)"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2024-06-06）に、MongoDB Community上に構築した自社データベース基盤DocDBで2,000超のシャード・秒間500万クエリを99.999%の稼働率で処理し、無停止のデータ移行を実現していると明記。2026年7月16日の記事は、40を超えるシャード構成を持つこのMongoDB群の復旧手順を、状態機械のグラフ探索（幅優先探索、のちにダイクストラ法）で実行時に計算する仕組みを説明する"
    evidenceUrl: "https://stripe.dev/blog/how-stripe-uses-graph-search-and-state-machines-to-auto-remediate-a-global-database-fleet"
  - layer: "データベースエンジン"
    name: "MongoDB"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2024-06）に、DocDBはMongoDB Communityの拡張で、MongoDB Atlasが存在しなかった2011年からクラウド上に自社運用のMongoDBクラスタを構築してきたと明記"
    evidenceUrl: "https://stripe.dev/blog/how-stripes-document-databases-supported-99.999-uptime-with-zero-downtime-data-migrations"
  - layer: "サービスメッシュ"
    name: "mesh-proxy (Go, in-house; replaced Envoy)"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2026-08-26）は、10年近く使ったEnvoyを、HTTP/1.1とHTTP/2を自前で実装したGo製のプロキシ mesh-proxy に置き換えたと書く。高負荷時のCPUは約半分、レイテンシは約50%下がり、公開APIの稼働率の目標は99.9995%"
    evidenceUrl: "https://stripe.dev/blog/building-a-data-plane-from-scratch-stripes-own-high-performance-distributed-proxy"
  - layer: "不正検知ML"
    name: "Stripe Radar (Shield: ResNeXt-based DNN, PyTorch)"
    confidence: confirmed
    evidence: "公式エンジニアリングブログは、XGBoostとDNNのアンサンブルから2022年半ばにDNN単独へ移行した経緯を書く。2026年10月19日の記事は、取引の不正を見るモデルShieldがResNeXtの構造を持ち、学習データを約8億件から110億件に広げ、PyTorchのtorch.compileなどで1エポックを24時間から4.8時間に縮め、パラメータ数が約3,000万になったと書く"
    evidenceUrl: "https://stripe.dev/blog/scaling-radar-fighting-fraud-with-agent-assisted-machine-learning"
  - layer: "社内のコーディングエージェント"
    name: "Minions (fork of Block's goose) + Toolshed (internal MCP server)"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2026-02-09）に、自社のコーディングエージェントMinionsが毎週1,000件を超えるプルリクエストを書き（人がレビューする）、Blockのコーディングエージェントgooseのフォークをエンジニアと同じ開発マシン（devbox）で動かし、400を超えるMCPツールを載せた社内のMCPサーバーToolshedから情報を得ると明記"
    evidenceUrl: "https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents"
  - layer: "ステーブルコイン基盤"
    name: "Tempo (payments blockchain incubated with Paradigm) + Bridge + Privy"
    confidence: confirmed
    evidence: "公式ニュースルームによれば、Stripeは2025年2月4日にステーブルコインの基盤Bridgeの買収を完了し、2025年アニュアルレターの発表（2026-02-24）は、2025年7月に買収したPrivy（1億1,000万超のウォレット）、2025年9月にParadigmと共同で立ち上げた決済向けブロックチェーンTempoを挙げる。2026年4月29日のSessionsの発表は、Metronomeの計測とTempo上のステーブルコインの少額決済を組み合わせた「ストリーミング決済」を発表した"
    evidenceUrl: "https://stripe.com/newsroom/news/sessions-2026"
  - layer: "ストレージ"
    name: "Amazon S3"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー実観測で、stripe.comのCSPに stripe-images.s3.us-west-1.amazonaws.com が含まれる（2026-09-28、2026-11-03に再確認）。画像配信用途の観測でありアプリ本体の構成とは別。Radarの学習データをS3からストリーミングする記述は2026年10月19日の公式ブログにある"
  - layer: "公式サイト配信"
    name: "nginx / Contentful"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー実観測（server: nginx、x-stripe-proxy-response、CSPに assets.ctfassets.net などContentfulのホスト。2026-09-28、2026-11-03に再確認）。docs.stripe.com も server: nginx と x-stripe-app-name: docs-app を返した。マーケティングサイトとドキュメントについての観測"
sources:
  - label: "Stripe公式ニュースルーム: 2025年アニュアルレターとテンダーオファーの発表（2026-02-24）"
    url: "https://stripe.com/newsroom/news/stripe-2025-update"
    accessedAt: "2026-11-03"
  - label: "Stripe公式ニュースルーム: Stripe Sessions 2026（288の発表・2026-04-29）"
    url: "https://stripe.com/newsroom/news/sessions-2026"
    accessedAt: "2026-11-03"
  - label: "Stripe公式ニュースルーム: Metronomeの買収完了（2026-01-14）"
    url: "https://stripe.com/newsroom/news/stripe-completes-metronome-acquisition"
    accessedAt: "2026-11-03"
  - label: "Stripe公式ニュースルーム: OpenRouterの買収に合意（2026-08-19）"
    url: "https://stripe.com/newsroom/news/stripe-agrees-to-acquire-openrouter"
    accessedAt: "2026-11-03"
  - label: "Stripe公式ニュースルーム: Parafinの買収に合意（2026-09-30）"
    url: "https://stripe.com/newsroom/news/stripe-agrees-to-acquire-parafin"
    accessedAt: "2026-11-03"
  - label: "Stripe公式ニュースルーム: Bridgeの買収完了（2025-02-04）"
    url: "https://stripe.com/newsroom/news/stripe-completes-bridge-acquisition"
    accessedAt: "2026-11-03"
  - label: "Stripe公式ニュースルーム: Agentic Commerce Suiteの発表（2025-12-11）"
    url: "https://stripe.com/newsroom/news/agentic-commerce-suite"
    accessedAt: "2026-11-03"
  - label: "Stripe: 料金体系（日本）"
    url: "https://stripe.com/jp/pricing"
    accessedAt: "2026-11-03"
  - label: "Stripe: Pricing（英国）"
    url: "https://stripe.com/gb/pricing"
    accessedAt: "2026-11-03"
  - label: "Stripe: Pricing（カナダ）"
    url: "https://stripe.com/en-ca/pricing"
    accessedAt: "2026-11-03"
  - label: "Stripe Docs: Stripe Tax"
    url: "https://docs.stripe.com/tax"
    accessedAt: "2026-11-03"
  - label: "Stripe Docs: Managed Payments"
    url: "https://docs.stripe.com/payments/managed-payments"
    accessedAt: "2026-11-03"
  - label: "Stripe Docs: How Managed Payments works"
    url: "https://docs.stripe.com/payments/managed-payments/how-it-works"
    accessedAt: "2026-11-03"
  - label: "Stripe Docs: Managed Payments tax compliance"
    url: "https://docs.stripe.com/payments/managed-payments/tax-compliance"
    accessedAt: "2026-11-03"
  - label: "Stripe Docs: Managed Payments changelog"
    url: "https://docs.stripe.com/payments/managed-payments/changelog"
    accessedAt: "2026-11-03"
  - label: "Stripe Docs: Versioning（APIのリリースの仕組み）"
    url: "https://docs.stripe.com/api/versioning"
    accessedAt: "2026-11-03"
  - label: "Stripe Docs: Testing（サンドボックスとテスト用カード）"
    url: "https://docs.stripe.com/testing"
    accessedAt: "2026-11-03"
  - label: "Lemon Squeezy公式ブログ: Stripe acquires Lemon Squeezy（2024-07-26）"
    url: "https://www.lemonsqueezy.com/blog/stripe-acquires-lemon-squeezy"
    accessedAt: "2026-11-03"
  - label: "Lemon Squeezy公式ブログ: Stripe + Lemon Squeezy Update: A Big Milestone Reached（2025-04-29）"
    url: "https://www.lemonsqueezy.com/blog/stripe-lemon-squeezy-update-2025"
    accessedAt: "2026-11-03"
  - label: "Lemon Squeezy公式ブログ: 2026 Update: Lemon Squeezy + Stripe Managed Payments（2026-01-28）"
    url: "https://www.lemonsqueezy.com/blog/2026-update"
    accessedAt: "2026-11-03"
  - label: "Stripe公式ブログ: Sorbet — Stripeの型チェッカー（1,500万行・15万ファイル・2022-03-28）"
    url: "https://stripe.dev/blog/sorbet-stripes-type-checker-for-ruby"
    accessedAt: "2026-11-03"
  - label: "Stripe公式ブログ: Selective Test Execution at Stripe: Fast CI for a 50M-line Ruby monorepo（2026-04-09）"
    url: "https://stripe.dev/blog/selective-test-execution-at-stripe-fast-ci-for-a-50m-line-ruby-monorepo"
    accessedAt: "2026-11-03"
  - label: "Stripe公式ブログ: Formatting an entire 25 million line codebase overnight: the rubyfmt story（2026-04-28）"
    url: "https://stripe.dev/blog/formatting-an-entire-25-million-line-codebase-overnight-the-rubyfmt-story"
    accessedAt: "2026-11-03"
  - label: "Stripe公式ブログ: Minions: Stripe's one-shot, end-to-end coding agents（2026-02-09）"
    url: "https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents"
    accessedAt: "2026-11-03"
  - label: "Stripe公式ブログ: DocDB — 99.999%稼働率と無停止データ移行を支える自社ドキュメントDB（2024-06-06）"
    url: "https://stripe.dev/blog/how-stripes-document-databases-supported-99.999-uptime-with-zero-downtime-data-migrations"
    accessedAt: "2026-11-03"
  - label: "Stripe公式ブログ: How Stripe uses graph search and state machines to auto-remediate a global database fleet（2026-07-16）"
    url: "https://stripe.dev/blog/how-stripe-uses-graph-search-and-state-machines-to-auto-remediate-a-global-database-fleet"
    accessedAt: "2026-11-03"
  - label: "Stripe公式ブログ: Building a data plane from scratch: Stripe's own high-performance distributed proxy（2026-08-26）"
    url: "https://stripe.dev/blog/building-a-data-plane-from-scratch-stripes-own-high-performance-distributed-proxy"
    accessedAt: "2026-11-03"
  - label: "Stripe公式ブログ: How we built it — Stripe Radar（DNN単独モデルへの移行）"
    url: "https://stripe.dev/blog/how-we-built-it-stripe-radar"
    accessedAt: "2026-09-28"
  - label: "Stripe公式ブログ: Scaling Radar: Fighting fraud with agent-assisted machine learning（2026-10-19）"
    url: "https://stripe.dev/blog/scaling-radar-fighting-fraud-with-agent-assisted-machine-learning"
    accessedAt: "2026-11-03"
  - label: "Stripe公式ブログ: Claimable sandboxes: Frictionless Stripe accounts for agents（2026-10-29）"
    url: "https://stripe.dev/blog/claimable-sandboxes-frictionless-stripe-accounts-for-agents"
    accessedAt: "2026-11-03"
---

Stripeはオンライン決済のインフラを提供する。2010年にアイルランド出身のPatrick・John Collison兄弟が米国で創業し、「インターネットのGDPを増やす」をミッションに掲げる。エンドユーザーがStripeの画面を見ることはほとんどない。ECサイトやSaaSの決済ボタンの裏側で、APIとして動くのがこの会社の製品だ。その製品の範囲が、2026年に大きく広がった。決済の部品を売る会社が、税とチャージバックと購入者の問い合わせを丸ごと引き受ける「売り手」にもなり、従量課金の計測、AIモデルへの振り分け、中小企業向けの融資まで買い足している。

## サービス解説

:::fact
公式ニュースルームの2025年アニュアルレターの発表（2026年2月24日）によれば、2025年にStripe上の事業者が処理した総決済額は1.9兆ドルで前年比34%増、世界GDPの約1.6%にあたる。共同創業者の2人は年次レターで、Stripeの金融サービスが直接またはプラットフォーム経由で500万を超える事業者に使われ、ダウ平均構成企業の90%、Nasdaq-100の80%、主要なAI企業のすべてが含まれ、デラウェア州で新しく作られる会社の25%がStripe Atlasで設立されていると書いた。2025年の製品更新は350を超え、「しっかりと黒字を保った」とも述べている。同日、評価額1,590億ドル（1,350億ユーロ）で現従業員と元従業員に現金化の機会を与えるテンダーオファーを発表した。資金の大半はThrive Capital、Coatue、a16zなどの投資家が出し、Stripe自身も自己資金の一部で株を買い戻す。
:::

:::fact
同じ発表によれば、2025年にStripeに加わった新しい事業者は過去最多で、その57%が米国外の企業だった。2025年の新規事業者は2024年の新規事業者より約50%速く伸び、立ち上げから3か月以内にARR1,000万ドルに達した企業の数は2024年の2倍になった。ステーブルコインの決済額は2025年に約4,000億ドルへ倍増し、Stripeが2025年2月4日に買収を完了したステーブルコインの基盤Bridgeの取扱高は4倍を超えた。Stripeは2025年7月にウォレット基盤のPrivy（1億1,000万超のウォレット）を買収し、9月にはParadigmと共同で、決済のために作ったブロックチェーンTempoを発表している。
:::

:::fact
2026年に入ってからの公式ニュースルームの発表は、ほぼすべてが「AIの経済インフラ」という言葉でまとめられている。1月14日に従量課金の計測・請求の会社Metronomeの買収を完了し、CEOのPatrick Collison氏は「メータリングと請求は、まさに『製品』と『ビジネス』の境界面だ」と書き、MetronomeがOpenAI、Anthropic、NVIDIAの課金を支えていると紹介した。4月29日の年次カンファレンスSessionsでは288の製品・機能を発表し、AIアプリの中で商品を売るAgentic Commerce Suite（2025年12月11日の発表では、複数のAIエージェントでの販売を1つの連携で扱う低コードの仕組み）のGoogle対応（AI ModeとGeminiアプリ）、2億5,000万人超の利用者がいるウォレットLinkをエージェントが使えるようにする機能、トークン単位で代金を受け取る「ストリーミング決済」、15通貨を持てる法人口座としてのStripe Treasuryの拡張、開発者やエージェントが外部サービスの契約と組み込みをまとめて行えるStripe Projectsの一般提供を並べた。8月19日には、400超のモデルを80超の提供元へ振り分けるAIモデルのゲートウェイOpenRouterの買収に、9月30日にはプラットフォーム向けに中小企業への融資を提供するParafinの買収に合意したと発表している。Parafinの発表によれば、Stripe上で事業をするプラットフォームは18,000を超え、2026年4〜6月にStripeで新しく立ち上がった事業者は前年同期比86%増だった。Parafinの買収は「今後数か月のうちに」完了する見込みとされている。
:::

:::pull
Stripeは長く「売り手は開発者、Stripeは部品」という線を守ってきた。2026年、その線の向こう側にManaged Paymentsが置かれた。
:::

::scorecard

## UX分析

StripeのUXを語ることは、開発者体験（DX）を語ることとほぼ同じだ。エンドユーザー向けの画面をほとんど持たないこの会社は、「使う人は開発者だ」と定義し、ドキュメント、テスト環境、APIの変更の出し方までを製品の一部として作ってきた。2026年には、その「使う人」に開発者の代わりにコードを書くAIエージェントが加わった。

- **試す環境が最初から渡される**。テストのドキュメントによれば、Stripeは本番に影響しない「サンドボックス」を用意し、4242 4242 4242 4242のようなテスト用カード番号でダッシュボードや決済フォームから支払いを試せる。2026年10月29日の公式エンジニアリングブログは、エージェントなら数分で書ける組み込みに対して、アカウント登録の1分が目立つ摩擦になったとして、VercelやReplit、Lovableのような開発プラットフォームが利用者の登録なしにサンドボックスを用意でき、あとから利用者が自分のアカウントとして引き取れる「claimable sandbox」を作ったと説明する。
- **APIの変更には予定表がある**。バージョン管理のドキュメントによれば、2024-09-30.acaciaのリリース以降、Stripeは破壊的な変更を含まない新しいAPIバージョンを毎月出し、破壊的な変更は年2回のメジャーリリース（例: Basil）にまとめる。毎月のリリースへはコードを変えずに上げられる。2026年11月3日時点の最新は2026-10-28.endiveだった。curlやStripe CLIのリクエストは、アカウントの既定のバージョンか Stripe-Version ヘッダーで指定したバージョンで処理される。
- **料金表は製品ごとに1行ずつ積み上がる**。日本の料金ページでは、カード決済3.6%の下に、通貨換算2%、Billing 0.7%、Invoicing 0.4%、Tax 0.5%、Revenue Recognition 0.25%、Managed Payments 3.5%と、製品ごとの行が続く。使う部品を選べる一方で、全部を足した額は利用者が自分で計算することになる。
- **売り手の名前を手放す選択肢ができた**。Managed Paymentsのドキュメントによれば、Managed Paymentsの取引では購入者はチェックアウト、領収書、購入後のサポートでLinkとやり取りし、購入は「Sold through Link」と表示され、カード明細は「LINK.COM* [売り手の明細表記]」になる。Managed Paymentsのチェックアウトでは独自ドメインは使えない。税と問い合わせを任せる代わりに、購入者が最初に目にする名前は自社ではなくなる。

:::guess
StripeのDXは、「最初の1回を速くする」設計と「変更で壊さない」設計の2本で成り立っているとみられる。サンドボックスとテスト用カードは最初の1回の摩擦を減らし、月次と半年ごとに分けたAPIのリリースは、決済という止まると売上が消える領域で、既存の組み込みを壊さないための約束と考えられる。claimable sandboxは、その「最初の1回」の主語が人からエージェントに移ったことへの対応と推測される。料金表が製品ごとに積み上がる形は、部品を選べる自由と引き換えに、総額の見積もりを利用者に任せる設計で、[PaddleとStripeの比較](/ja/compare/paddle-vs-stripe)で見たとおり、競合のPaddleはまさにこの点を突いて「1行の料金」を売っている。
:::

## 技術構成

::techstack

:::fact
Stripeの中核は今もRubyの巨大なコードベースだ。2022年3月の公式エンジニアリングブログは、15万ファイル・1,500万行のRubyを、C++で自作した型チェッカーSorbet（2017年11月開発開始、2019年6月にOSSとして公開）で検査していると書いていた。2026年の記事が示す規模はさらに大きい。2月9日の記事は、Stripeのコードは「いくつかの大きなリポジトリにまたがる数億行」で、バックエンドの大半は「Sorbetで型付けしたRuby（Railsではない）」と書く。4月9日の記事はモノレポを「5,000万行規模のRuby」とし、約10万のテストファイルと約120万のテスト単位を、毎週約5万回のビルドで回していると説明する。4月28日の記事は、Rustで書いた設定不要の自動整形ツールrubyfmtを「2,500万行のコードベース」に一晩で適用した経緯を書く。同じ年の公式記事の中で、Rubyの規模は2,500万行とも5,000万行とも書かれており、数え方の範囲は記事からは分からない。
:::

:::fact
CIを速く保つ仕組みは、Selective Test Execution（社内ではSTE）と呼ばれる。2026年4月9日の公式エンジニアリングブログによれば、STEは全テストのうち平均で約5%、ビルドの半数以上では0.5%未満だけを選んで実行する。Rubyには静的解析で依存関係を完全には追えない抜け道があり、テストはYAMLやJSONの設定、テンプレート、フィクスチャにも依存するため、STEの土台は、LD_PRELOADで読み込む自社のC++共有ライブラリ file_access_interceptor で、テストが実際に読んだファイルを記録する方式をとる。2月9日の記事によれば、Stripeの自社のコーディングエージェント「Minions」は、毎週1,000件を超えるマージ済みのプルリクエストを書いている（人がレビューするが、人が書いたコードは含まない）。Minionsは、エンジニアが使うのと同じ開発用マシン（devbox、10秒で立ち上がる）で動き、エージェントの中核はBlockのコーディングエージェントgooseのフォークで、400を超えるMCPツールを載せた社内のMCPサーバーToolshedから社内文書やチケット、ビルドの状態を集める。
:::

:::fact
データベースは、MongoDB Communityの上に作った自社のDBaaS「DocDB」だ。2024年6月の公式エンジニアリングブログによれば、MongoDB Atlasがまだ存在しなかった2011年から、クラウド上で自社運用のMongoDBクラスタを動かしてきた。DocDBは2,000を超えるシャードで秒間500万クエリを99.999%の稼働率で処理し、シャード間の無停止データ移行を実現している。2026年7月16日の記事によれば、40を超えるシャード構成を持つこのMongoDB群では、壊れたシャードを直す手順を、ノードの投票権や優先度を状態とする状態機械のグラフ上で、幅優先探索、のちにダイクストラ法で実行時に探す。この仕組みで呼び出し（ページ）は30%（年約200件）減り、シャードが不健全な状態にある時間は年12日分なくなったという。
:::

:::fact
サービス間の通信も自作に置き換えた。2026年8月26日の公式エンジニアリングブログによれば、Stripeは10年近くEnvoyをサービスメッシュのプロキシとして使ってきたが、1台のクライアントがCPUコアの数だけ接続を張るEnvoyのスレッドモデルが、全社から呼ばれる基盤サービスに数十万の接続を集めることや、アップグレードの小さな挙動の変化が事故につながりかけたことから、Go製のプロキシ mesh-proxy を作った。mesh-proxyはHTTP/1.1とHTTP/2を自前で実装し、接続ごとに読み書きのgoroutineを1つずつ持ち、1ホストに1接続で多重化する。導入後、高負荷時のCPUは約半分、レイテンシは約50%下がり、Rubyのバックエンドへの負荷の振り分けを細かくできたことで、急な負荷に対する余裕が15〜20%増えた。公開APIの稼働率の目標は99.9995%とされる。
:::

:::fact
不正検知のRadarは、XGBoostとDNNのアンサンブルから2022年半ばにDNN単独のモデルへ移行した。2026年10月19日の公式エンジニアリングブログによれば、取引の不正を見るモデルShieldはResNeXtの構造を持つ。学習データを約8億件から110億件の取引に広げ、S3からメモリへの直接のストリーミング、PyTorchのtorch.compile、低精度の演算などで1エポックを24時間から4.8時間に縮めた。パラメータ数は約3,000万で以前の3倍になったが、推論の遅延は増えなかった。実験の準備から評価までをAIエージェントに任せる「Agentic MLE」で試した学習設定の変更で、不正の検出率（再現率）は8%以上上がり、記事は加盟店にとって年に数千万ドル規模の不正の防止にあたると見積もっている。
:::

:::guess
Stripeの技術の選び方には、一貫した型があるとみられる。既製の道具で始め、規模が既製の道具の前提を超えたところで、中身を自分で持つ。Rubyは捨てずに型チェッカーと整形ツールとテストの選び方を自作し、MongoDBは捨てずにDBaaSと復旧の自動化を自作し、Envoyは10年使ったあとに置き換えた。どれも「書き換え」ではなく「足す」か「差し替える」で、決済のように止められない領域では、言語やデータベースを移す危険より、周りの道具を作る費用のほうが安いという判断と考えられる。2026年の記事で目立つのは、その自作の道具の上でAIエージェントを動かす話だ。Minionsも、Agentic MLEも、claimable sandboxも、エージェントが既存の開発基盤（devbox、CI、特徴量の基盤）をそのまま使えるようにする設計になっている。何年も投資してきた社内の開発基盤が、エージェントの時代にそのまま生産性の差になっていると推測される。
:::

## ビジネスモデル

Stripeの収益は決済手数料を中核に、課金管理（Billing）、請求書（Invoicing）、税（Tax）、収益認識などのソフトウェア群へ広がっている。料金は国ごとのページで決まり、同じ製品でも国によって率と書き方が違う。

:::fact
当サイトは2026年11月3日に、日本・英国・カナダ向けの公式の料金ページを読んだ。米国向けの料金ページ（stripe.com/us/pricing）は、当サイトの所在地からは /ja-us/pricing、/pricing を経て日本向けのページへ転送されて読めなかったため、米国の料率は載せていない。標準の料金で、オンラインのカード決済は、日本が成功した決済ごとに3.6%（通貨換算が必要なら2%を加算）、英国は標準的な英国カードが1.5% + 20p、プレミアムな英国カードが2.8% + 20p、欧州経済領域のカードが2.5% + 20p、その他の海外カードが3.15% + 20p（通貨換算が必要ならそれぞれ2%を加算）、カナダは国内カードが2.9% + CA$0.30で、手入力のカードは0.5%、海外カードは0.8%、通貨換算は2%をそれぞれ加算する。日本の料金ページには、コンビニ決済3.6%（最低120円）、PayPay 3.98%（デジタルコンテンツ事業は9.48%）、銀行振込1.5%、不審請求の申し立て1件1,500円も載る。共通する部品は、Billingの従量制がBilling取引額の0.7%、Invoicing Starterが支払い済み請求書1件につき0.4%、Revenue Recognitionが取引額の0.25%だ。日本の料金ページは、従量課金のMetronomeを独立した行として載せ、スタートアップ向けのプランを取り込みイベント1,000件あたり0.04ドルと請求額の0.8%としている。
:::

:::fact
Stripe Taxは、ドキュメントによれば、売上税・VAT・GSTの自動計算、税の登録が必要になるしきい値の監視、登録の管理、申告と納付までを扱い、Stripeの外で処理した支払いにもAPIで税を計算できる。料金の形は国で違う。英国の料金ページでは、しきい値の監視・登録・計算・申告まで含むTax Completeが月額£70から（1年契約）、自動の税額計算だけのTax Basicが、Billing・Checkout・Invoicing・Payment Linksでのノーコード連携なら税の徴収を登録した地域の取引1件につき0.5%、決済APIや他社の決済での連携なら1件£0.40（計算APIの呼び出し10回を含み、超過は1回£0.04）。カナダはTax CompleteがCA$120から、APIでの連携が1件CA$0.50。英国とカナダのページは、税の計算と徴収を100を超える国で、登録と申告を90を超える国で扱えると書く。日本の料金ページにはTax CompleteとBasicの区分がなく、ノーコードの0.5%と、APIでの連携の1件65円（計算APIの呼び出し10回を含み、超過は1回6円）だけが載る。
:::

:::fact
Managed Paymentsは、Stripe自身がマーチャント・オブ・レコード（MoR）として売り手になる製品だ。ドキュメントによれば、SaaS、ソフトウェア、デジタルコンテンツやダウンロードのようなデジタル製品を対象に、80を超える国で売上税・VAT・GSTの準拠を引き受け、不正対策、不審請求への対応、取引単位の購入者サポートも担う。料金ページの説明は「75を超える国」で、料金は決済手数料に加えて成功した取引1件につき3.5%。使えるのはStripe CheckoutとPayment Linksだけで、Connect（プラットフォームやマーケットプレイス）、埋め込み型のコンポーネントを使う決済、他社の税の連携には対応しない。国内取引の扱いには例外があり、シンガポールのB2Bの国内取引と、日本のすべての国内取引はManaged Paymentsの税の準拠の対象外とされている。変更履歴によれば、2025年9月22日に単発の支払いとアプリ内決済に対応し、購入者がLinkのアカウントを作る必要をなくした。2026年4月22日に39か国の事業者向けに一般提供を始め、6月2日にはクラウドで提供する「AI as a Service」の税コードを対象に加えた。
:::

:::fact
Managed Paymentsを作っているのは、2024年にStripeが買収したLemon Squeezyのチームだ。Lemon Squeezyの公式ブログによれば、CEOのJR Farr氏は2024年7月26日に「StripeがLemon Squeezyを買収した」と発表し、Lemon Squeezyは創業時からStripeで決済を処理してきたこと、StripeとともにMoRとしての提供を改善していくことを書いた。2025年4月29日の記事は「最初の大きな節目」として、Stripeに直接組み込んだ新しいMoRの体験Managed Paymentsを、その夏にプライベートプレビューで出すと発表し、MoRの役割はアカウント全体ではなく取引ごとに適用されると説明した。既存の利用者には「変更も対応も不要」としている。2026年1月28日の記事は、Managed Paymentsを作るあいだにLemon Squeezyの利用者への「サポートの返信が遅くなり、製品の更新が減った」ことを認め、Managed Paymentsは35を超える国の事業者に対応し、Lemon Squeezyの利用者がManaged Paymentsへ移りやすい道を用意することが目標だと書いた。Lemon Squeezyそのものの終了時期は、当サイトが読んだ記事には書かれていない。
:::

:::fact
訂正（2026年11月3日）。初版では、2025年のアニュアルレターの内容として「決済以外の収益・財務自動化（RFA）製品群は2025年末までにARR10億ドル規模に到達する見込み」と書いていたが、不正確だった。2026年2月24日の公式の発表は、Billing、Invoicing、Taxなどからなる「Revenue suite」が「今年」、つまり2026年中に年間のランレート10億ドルに達する見込みだと書いている。
:::

:::guess
Stripeが自分で売り手になる道を選んだのは、部品の料金表の弱点を、部品の束で埋めるためとみられる。標準のStripeでは、税の登録と申告は売り手の仕事として残り、Stripe Taxは計算や申告の道具にとどまる。その手間を嫌う小さなチームは、PaddleやLemon SqueezyのようなMoRを選んできた。Lemon Squeezyはもともと決済をStripeで処理していたので、Stripeから見れば、自社の上に載っていた「束ねる層」を買い取り、自社の製品として作り直したことになる。Managed Paymentsが取引単位で選べる形をとるのは、既存の利用者が一部の市場や商品だけを任せられるようにして、Stripeの部品と束を同じアカウントの中で並べるためと推測される。日本の国内取引が対象外であることは、日本の開発者にとっては、国内の売上の消費税を自分で扱う前提が変わらないことを意味する。
:::

:::guess
2026年の買収は、収益の入口を「決済の量」から「使った量」へ広げる動きとみられる。Metronomeはトークンや呼び出し回数のような使用量を計測して請求し、OpenRouterはその使用量をどのモデルに振り分けるかを決め、TempoとBridgeは使った瞬間に少額を受け取るための決済の通り道になる。Parafinは、Stripeの上のプラットフォームが中小企業に融資を出す部品だ。上場せずテンダーオファーで従業員に流動性を返す資本政策は、四半期ごとの利益の圧力を避けながら、こうした買収と長期の製品投資を続けるための選択と考えられる。決済手数料は顧客の成長にそのまま連動するので、開発者とエージェントが最初に選ぶ部品であり続けることが、Stripeにとって最も効率のよい成長の道になっていると推測される。
:::

エンドユーザーに見えないまま世界GDPの1.6%を流すインフラは、APIとドキュメントを製品の顔にし、Rubyもデータベースもプロキシも止めずに中身を差し替えてきた。2026年のStripeは、その部品を売る会社のまま、売り手を引き受けるManaged Payments、使用量を数えるMetronome、トークンを振り分けるOpenRouterを並べ、部品の束を丸ごと渡す側にも立った。部品を選ぶ自由と、束で任せる楽さのどちらを取るかは、使う側が決める。Stripeは、その両方の入口を同じアカウントの中に置こうとしている。
