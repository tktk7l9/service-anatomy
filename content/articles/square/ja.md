---
service: "Square"
title: "白いカードリーダーから13年 — 三井住友カードと組んで日本に入ったSquareは、対面決済2.5%と翌営業日入金を入口に、POSレジ・資金調達・AIまで一つのアカウントに束ねている"
description: "2013年5月、Squareは三井住友カードを国内のアクワイアラーとして日本に上陸し、切手サイズのカードリーダーと手数料3.25%で個人商店にカード決済を持ち込んだ。13年後の今、対面決済の手数料は条件付きで2.5%〜、三井住友銀行とみずほ銀行なら翌営業日入金、端末は4,980円のリーダーから99,980円のレジスターまで6種類、さらに将来の売上を譲渡して最大3,000万円を前受けする資金調達、送金額1.5%の即時入金、無料の対話型AIまで広がった。親会社Block, Inc.のSquare部門は2025年に売上84.5億ドル・粗利益39.4億ドル、決済総額2,500億ドルを扱う。公式の料金表とプレスリリース、SECへの提出書類、実観測から、Squareがどう作られ、どう稼いでいるかを解剖する。"
lead: "2009年に米国で生まれた小さな白いカードリーダーは、スマートフォンをカード決済端末に変えた。その会社が北米の外で最初に選んだ国が日本で、2013年5月23日、三井住友カードとの提携でサービスを始めた。以来13年、Squareは決済端末の会社からPOSレジ・ネットショップ・請求書・予約・資金調達・AIアシスタントまでを一つのアカウントで提供する事業者向けプラットフォームへ姿を変えた。月額0円で入口を開き、決済のたびに手数料を取り、その決済データで融資を判断する。個人商店向けのキャッシュレス基盤が、どう作られ、どう稼いでいるのかを解剖する。"
category: saas
tags: [payments, fintech, pos, small-business, hardware, aws]
publishedAt: "2026-09-30"
updatedAt: "2026-09-30"
lastVerified: "2026-09-30"
serviceUrl: "https://squareup.com/jp/ja"
# Affiliate link placeholder: Square's own affiliate page
# (https://squareup.com/jp/ja/affiliate) says the program is offered only through
# Moshimo Affiliate. The owner must apply to the "Square 成果報酬型プログラム" on
# Moshimo and pass its review before enabling this block. Self-referral has been
# prohibited since 2022-11-01, so never use the link for the owner's own account.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://af.moshimo.com/af/c/click?a_id=<owner-id>&p_id=<square-program-id>&pc_id=<...>&pl_id=<...>"
#   program: "Square 成果報酬型プログラム（もしもアフィリエイト）"
vendor: "Block, Inc.（日本法人: Square株式会社）"
origin: "US"
heroTheme: "square"
scores: { product: 4.5, ux: 4.0, tech: 4.0, business: 4.0 }
techStack:
  - layer: "決済端末"
    name: "Square Reader / Terminal / Handheld / Stand / Kiosk / Register (custom-designed hardware)"
    confidence: confirmed
    evidence: "公式のハードウェア一覧（2026-09-30閲覧）に、税込4,980円のSquare リーダー（第2世代）から99,980円のSquare レジスター（第2世代）まで6種類が並ぶ。Block, Inc.の2025年12月期Form 10-Kは、Squareのハードウェアを自社設計（custom-designed）と記し、日本ではJCBと電子マネーに対応すると明記している"
    evidenceUrl: "https://squareup.com/jp/ja/hardware"
  - layer: "開発者プラットフォーム"
    name: "Square APIs (20+ APIs, 100+ endpoints) + Web Payments SDK + Terminal API"
    confidence: confirmed
    evidence: "開発者向けサイトの日本語ページに、20種類以上のAPIと100を超えるエンドポイント、Python・Node.js・Ruby・PHP・Java・.NETのバックエンドSDK、Webhook、APIログ、GraphQLエクスプローラーが列挙されている。日本でのAPI開放は2017年5月、アプリ内決済SDKは2019年1月、Orders APIは2019年8月のプレスリリースで発表された"
    evidenceUrl: "https://developer.squareup.com/jp/ja"
  - layer: "Android/Kotlinライブラリ（自社開発・OSS）"
    name: "OkHttp, Retrofit, Moshi, Wire, LeakCanary, Workflow, Anvil"
    confidence: confirmed
    evidence: "Blockのオープンソースサイトは、OkHttpとRetrofitがSquare（Block）発のプロジェクトであると記し、square.github.io にはMoshi・Wire・LeakCanary・Workflow・Anvil（Dagger 2向けKotlinコンパイラプラグイン）が並ぶ。Form 10-Kも、自社で開発したソースコードを継続的にオープンソースとして公開していると記している"
    evidenceUrl: "https://opensource.block.xyz/"
  - layer: "決済セキュリティ"
    name: "PCI DSS compliance + encryption from read to transmission + machine-learning fraud detection"
    confidence: confirmed
    evidence: "公式の決済セキュリティのページに、Squareの製品は国際カードブランドが定めるPCIのガイドラインに準拠し、カード情報を読み取る決済は最初から最後まで暗号化され、エコシステム全体の決済を機械学習で監視して不正の傾向を導いていると書かれている"
    evidenceUrl: "https://squareup.com/jp/ja/payments/secure"
  - layer: "エッジ配信・保護"
    name: "Cloudflare"
    confidence: likely
    evidence: "当サイトの観測（2026-09-30）で、squareup.com、app.squareup.com、api.squareup.com、developer.squareup.com のいずれもserverヘッダーがcloudflareで、cf-rayヘッダーは成田（NRT）のPoPを示し、Cloudflareのボット対策Cookie（__cf_bm）を発行していた"
  - layer: "APIゲートウェイ・実行基盤"
    name: "Envoy + AWS (us-west-2)"
    confidence: likely
    evidence: "当サイトの観測（2026-09-30）で、api.squareup.com と connect.squareup.com、developer.squareup.com の応答に x-envoy-decorator-operation ヘッダーがあり、x-sq-dc: aws と x-sq-region: us-west-2 というヘッダーが付いていた。ヘッダー名はSquare独自のもので、意味は当サイトの解釈"
  - layer: "マーケティングサイト"
    name: "SvelteKit + Contentful"
    confidence: likely
    evidence: "当サイトの観測（2026-09-30）で、squareup.com/jp/ja の応答に x-sveltekit-page: true ヘッダーがあり、HTMLにはsvelte-のハッシュ付きクラス名とcontentfulEntryId属性が大量に含まれ、画像はContentfulの images.ctfassets.net から配信されていた。同意管理はOneTrust（cdn.cookielaw.org）、一部のアセットはAmazon S3（square-production.s3.amazonaws.com）とsquarecdn.comから読み込まれていた"
sources:
  - label: "Square: 決済手数料（料金）"
    url: "https://squareup.com/jp/ja/payments/our-fees"
    accessedAt: "2026-09-30"
  - label: "Square: 決済端末一覧（価格）"
    url: "https://squareup.com/jp/ja/hardware"
    accessedAt: "2026-09-30"
  - label: "Square: 日本でサービス提供開始（2013-05-23）"
    url: "https://squareup.com/jp/ja/press/jp-square-arrives-in-japan"
    accessedAt: "2026-09-30"
  - label: "Square: 米国Square, Inc.と三井住友カードが戦略的業務提携（2013-05-23）"
    url: "https://squareup.com/jp/ja/press/square-partners-with-smcc"
    accessedAt: "2026-09-30"
  - label: "Square: 三井住友カード、Square、VJAの協働で全国に普及・推進（2019-08-30）"
    url: "https://squareup.com/jp/ja/press/smcc-square-vja-to-partner-to-push-cashless"
    accessedAt: "2026-09-30"
  - label: "Square: 「Square 資金調達サービス」を提供開始（2024-01-24）"
    url: "https://squareup.com/jp/ja/press/funding-japan"
    accessedAt: "2026-09-30"
  - label: "Square: 「即時入金サービス」を提供開始（2025-12-23）"
    url: "https://squareup.com/jp/ja/press/instant-transfers"
    accessedAt: "2026-09-30"
  - label: "Square: 「Square AI」を日本で提供開始（2026-03-10）"
    url: "https://squareup.com/jp/ja/press/square-ai"
    accessedAt: "2026-09-30"
  - label: "Square: 第2世代「Square レジスター」を発表（2026-03-31）"
    url: "https://squareup.com/jp/ja/press/square-register-2nd-generation"
    accessedAt: "2026-09-30"
  - label: "Square: Squareについて（沿革）"
    url: "https://squareup.com/jp/ja/about"
    accessedAt: "2026-09-30"
  - label: "Square: アフィリエイト・プログラム"
    url: "https://squareup.com/jp/ja/affiliate"
    accessedAt: "2026-09-30"
  - label: "アフィサーチ: Squareのアフィリエイト案件を提携できるASP一覧"
    url: "https://media-analytics.jp/affisearch/promotions/square"
    accessedAt: "2026-09-30"
  - label: "Block, Inc.: Form 10-K（2025年12月期、SEC提出 2026-02-26）"
    url: "https://www.sec.gov/Archives/edgar/data/1512673/000162828026012254/xyz-20251231.htm"
    accessedAt: "2026-09-30"
  - label: "Block, Inc.: Form 10-Q（2026年第2四半期、SEC提出 2026-08-05）"
    url: "https://www.sec.gov/Archives/edgar/data/1512673/000162828026053368/xyz-20260630.htm"
    accessedAt: "2026-09-30"
  - label: "Block: オープンソース"
    url: "https://opensource.block.xyz/"
    accessedAt: "2026-09-30"
---

カード決済の導入は長く、加盟店契約の審査と据え置き型の端末と月額料金がセットだった。Squareはそれを、無料のアプリとスマートフォンに挿す小さなリーダーと、決済のたびに払う手数料だけに置き換えた。日本に来て13年、リーダーは有料になり、端末は6種類に増え、手数料は下がり、決済の先に融資とAIがついた。何を無料にし、何で稼いでいるのかは、料金表と親会社の決算書にはっきり書いてある。

## サービス解説

Squareは、クレジットカード・電子マネー・QRコード決済の受付、POSレジ、ネットショップ、請求書、予約管理、資金調達を一つのアカウントで提供する、中小事業者向けの決済・業務プラットフォームだ。運営は米国Block, Inc.（旧Square, Inc.）で、日本ではSquare株式会社が担う。

:::fact
Squareのプレスリリース（2013-05-23）によれば、Square, Inc.は2013年5月23日に日本でサービスを始めた。北米以外で初めての進出国だった。三井住友カードは2012年9月に米国以外の事業者として唯一Squareに出資し、アクワイアラー（加盟店契約会社）として日本展開を協議してきたという。開始時の手数料は1回の取引につき3.25%で、SquareレジのアプリとSquareリーダーは無料、決済金額は提携銀行なら通常翌営業日に振り込まれた。同社の沿革ページによれば、その後2019年に新型リーダーとスタンド、2020年にネットショップ機能と電子マネー対応、2021年にターミナル、2022年にPayPay対応と予約機能、2023年にTap to Pay on Androidとレストラン向けPOSレジ、2025年にハンディを日本で出している。
:::

:::fact
公式の料金ページ（2026-09-30閲覧）によれば、初期費用と月額固定費は0円で、対面決済の手数料は2.5%〜。ただし2.5%が適用されるのは、年間キャッシュレス決済額が3,000万円未満で、主要カードブランド（Visa・Mastercard・American Express・JCB・Diners Club・Discover）による対面決済の場合で、それ以外は3.25%〜またはカスタム料金となる。オンライン決済（eコマースAPI）は3.6%、請求書決済は3.25%（カード情報の手入力や定期請求書の自動送信は3.75%）、ブラウザ決済は3.75%。振込手数料は無料で、登録口座が三井住友銀行またはみずほ銀行なら決済日の翌営業日に、その他の銀行なら水曜締めで毎週金曜日に振り込まれる。年間3,000万円以上の事業者にはカスタム料金があり、ページには年間1.1億円の日本料理店で2.76%、6,700万円の美容小売で2.97%という例が載っている。
:::

:::fact
公式のハードウェア一覧（2026-09-30閲覧）によれば、端末は税込でSquare リーダー（第2世代）4,980円、Square スタンド29,980円、Square キオスク29,980円、Square ターミナル39,980円、Square ハンディ44,980円、Square レジスター（第2世代）99,980円の6種類で、リーダー以外は12回または24回の分割払いに対応する。2026年3月31日のプレスリリースによれば、第2世代のレジスターは処理速度が初代比で最大40%向上し、IP54の防塵・防滴性能を備え、米国では年間決済額50万ドル以上の飲食加盟店の62%がSquare レジスターを使っているという。
:::

:::pull
入口は月額0円と4,980円のリーダー。そこから先は、決済のたびに2.5〜3.75%を取り、口座に入る前の売上を融資と即時入金の材料にする。手数料の会社が、事業者の資金繰りの会社に変わった。
:::

::scorecard

## UX分析

SquareのUXは、「申し込んだ日に売上を受け付けられる」ことと、「決済の後ろに付いてくる業務を同じ画面に集める」ことで組み立てられている。料金ページの書き方そのものが、その設計を表している。

- **手数料を決済シーン別に見せる**。対面・オンライン・請求書・ブラウザという4つの場面ごとに率を1つずつ示し、月額料金の列を持たない。「使わなければ払わない」ことを、料金表の形で伝えている。
- **入金の速さを機能として売る**。翌営業日入金の条件を「三井住友銀行またはみずほ銀行」と銀行名で書き、それ以外は毎週金曜日とはっきり分ける。2025年12月16日に始まった即時入金サービスは、送金額の1.5%を払えば最短数分で口座に入る。プレスリリースに載った和歌山県の飲食店は「毎月10日前後の大きな支払いの前に現金化したかった」と語っており、資金繰りの痛点を手数料付きの機能に変えている。
- **端末を段階で選ばせる**。4,980円のリーダーから始め、レシート印刷が要ればターミナル、テーブルで注文を取るならハンディ、iPadがあればスタンド、というように、店の規模と業態に合わせた6段のはしごを用意する。分割払いも公式に載っている。
- **AIを追加料金なしで同じ画面に置く**。2026年3月10日に日本で始まったSquare AIは、Squareの全事業者に無料で、Square データのアプリやウェブから自然言語で売上や業績を尋ねられる。プレスリリースが引くSquareの調査（日本の経営者500名）では、AIを定期的に使う中小企業は19.2%、経営者は事業データの分析に週平均3.66時間を費やしているという。

:::guess
料金と入金の条件を、ここまで具体的な銀行名と率で書いているのは、個人商店の意思決定が「いくら取られて、いつ入るか」の2点でほぼ決まるためとみられる。Squareが13年かけて足してきた機能（POSレジ、請求書、予約、資金調達、AI）は、どれも決済で得たデータの上に乗るものだ。事業者が決済だけを使っている限りは手数料の比較で他社に乗り換えられるが、レジや予約や融資まで同じアカウントに載せるほど、乗り換えの手間が増える。無料の機能を増やし続けているのは、手数料の差より切り替えコストで守るためと推測される。
:::

## 技術構成

::techstack

:::fact
Block, Inc.の2025年12月期Form 10-Kによれば、Squareは加盟店に対して「merchant of record」と決済サービス事業者の両方を務め、加盟店への資金の精算と決済に伴うリスク管理を担う。その立場でアクワイアリング処理事業者やカードネットワークと契約し、加盟店が個別に契約するよりも有利な商業条件を得ているという。ハードウェアは自社設計で、磁気ストライプ・EMVチップ・NFCの全てを処理でき、日本ではJCBと電子マネー、カナダではInterac Flash、オーストラリアではeftposに対応する。10-Kはまた、自社で開発したソースコードをオープンソースとして継続的に公開し、AIエージェントも同様のライセンスで提供していると記している。
:::

:::fact
開発者向けサイトの日本語ページ（2026-09-30閲覧）によれば、Squareは20種類以上のAPIと100を超えるエンドポイントを公開し、決済・注文・商品・在庫・顧客・予約・請求書・サブスクリプション・ターミナル・銀行口座のAPI、Web Payments SDK、Python・Node.js・Ruby・PHP・Java・.NETのバックエンドSDK、Webhook、APIログ、GraphQLエクスプローラーを提供する。プレスリリースのアーカイブによれば、日本でのAPI開放は2017年5月9日、アプリ内決済のSDKは2019年1月10日、複数チャネルの注文を一括管理するOrders APIは2019年8月15日に発表された。
:::

:::fact
当サイトの観測（2026-09-30）では、squareup.com、app.squareup.com、api.squareup.com、developer.squareup.com の応答はいずれもCloudflareを経由し、cf-rayヘッダーは成田のPoPを示していた。api.squareup.com と connect.squareup.com の応答には、Envoyプロキシが付ける x-envoy-decorator-operation ヘッダーと、x-sq-dc: aws、x-sq-region: us-west-2 というSquare独自のヘッダーが含まれていた。日本語のマーケティングサイトは x-sveltekit-page: true を返し、HTMLにはSvelteのハッシュ付きクラス名とContentfulのエントリIDが大量に埋め込まれ、画像はContentfulの配信ドメインから読み込まれていた。
:::

:::guess
x-sq-dc: aws と x-sq-region: us-west-2 は、APIの応答を返した基盤がAWSのオレゴンリージョンであることを示しているとみられる。ヘッダー名はSquare独自のもので公式の説明は見つからないため、当サイトの解釈だ。日本の加盟店の決済もこの基盤を経由しているとすれば、Cloudflareの成田PoPで受けた通信が米西海岸まで往復していることになる。対面決済は端末側で読み取りと暗号化を済ませ、承認を1往復で取るだけなので、この距離でも体感には響きにくいと推測される。10-Kがサンフランシスコ湾岸のデータセンター施設を地震リスクとして挙げていることから、自社設備とクラウドを併用しているとみられるが、どの処理がどちらにあるかは公開情報からは分からない。
:::

:::guess
Squareが公開しているオープンソースの多く（OkHttp、Retrofit、Moshi、Wire、LeakCanary、Workflow、Anvil）がAndroidとKotlinの基盤ライブラリであることは、決済端末とPOSアプリの開発が長くAndroid/JVMを中心に進められてきたことを示しているとみられる。レジスターやターミナルのような自社ハードウェアを、Androidベースのアプリ基盤の上で作っていると推測されるが、端末のOSは公式資料に明記されていない。
:::

## ビジネスモデル

Squareの収益は、決済ごとの手数料、ハードウェアの販売、ソフトウェアのサブスクリプション、そして加盟店向けの融資と資金サービスでできている。日本単独の数字は公開されておらず、親会社Block, Inc.のSquare部門の数字で全体像をつかむことになる。

:::fact
Block, Inc.のForm 10-Kによれば、2025年のSquare部門の売上は84億5,191万ドル（前年比10%増）、部門粗利益は39億3,504万ドル（同9%増）。2025年に450万超の加盟店がSquareで59億件の取引を行い、Square GPV（返金を除く決済総額）は2,500億ドルだった。売上は「Commerce Enablement」（決済処理・ソフトウェア・ハードウェア）と「Financial Solutions」（融資・預金などの金融サービス）に分けて開示され、Square部門では前者が74億2,596万ドル、後者が10億1,114万ドル。Square Loansは自社の銀行子会社Square Financial Services（ユタ州の産業融資会社）が加盟店のSquareでの取引データを使って与信し、大半は第三者の投資家に売却される。2025年にはソフトウェア機能と決済手数料率を組み合わせた3段階の料金パッケージを導入した。Blockの2025年の地域別売上は米国が221億8,658万ドル、米国以外が20億711万ドルで、米国以外のどの国も総売上の10%を超えていない。
:::

:::fact
Block, Inc.の2026年第2四半期Form 10-Qによれば、同四半期のSquare部門の売上は25億356万ドル（前年同期比16%増）、粗利益は11億6,024万ドル（同13%増）で、Square GPVは13%増、飲食店の加盟店が牽引した。同社は2026年2月に、組織構造を経営モデルと戦略上の優先事項に合わせるためとして従業員を40%超削減する再編計画を発表し、2026年上半期の再編費用は4億9,500万ドルだった。2025年12月末の全世界の正社員は10,205名で、うち米国外は2,472名だった。
:::

:::fact
2024年1月24日のプレスリリースによれば、Square 資金調達は、加盟店が将来のSquareでの売上の一部をSquareへ事前に譲渡し、前もって資金を受け取る仕組みで、招待制で始まった。事業計画書や決算書は不要で、審査は最長3営業日、承認されれば最短翌営業日に入金される。費用は申し込み時に定めた固定手数料のみで、返済はSquareでの日々の売上から一定割合を自動で差し引く形をとり、売上がない日は差し引かれない。公式ページ（2026-09-30閲覧）では調達額は15,000円から最大3,000万円で、売上10,000円に対して決済手数料325円と資金調達の差引額1,000円を引いた8,675円が振り込まれるという計算例が載っている。
:::

:::fact
Squareのアフィリエイト案内ページによれば、Squareのアフィリエイトは現在もしもアフィリエイト内でのみ参加でき、訪問者が指定のリンクを経由して新規アカウントを作成すると成果報酬が発生する。追跡はPartnerizeがCookieで行い、報酬は成果が発生した翌月15日に送金される。Squareは毎月、アフィリエイト経由で作られたアカウントを審査し、利用規約に反する事業や詐欺目的のアカウントは凍結・停止し、その場合の報酬は発生しない。ASP案件を集約する第三者サイト「アフィサーチ」（2026-09-30閲覧）によれば、もしもアフィリエイトでの報酬はアカウント作成1件につき8,000円（税込）で、その後にSquare ターミナルまたはハンディの購入が確認できれば6,500円、レジスターの購入が確認できれば13,000円が追加され、2022年11月1日から本人申し込みは対象外とされている。
:::

:::guess
Square部門の粗利益39.4億ドルをSquare GPV 2,500億ドルで割ると、決済額100円あたり約1.6円の粗利益になる（当サイトの計算、ハードウェアやソフトウェアの粗利益も含む）。日本の料金表にある2.5〜3.75%のうち、カードネットワークやアクワイアラーへ払う原価を引いた残りがこの薄さだと考えると、決済だけで稼ぐ商売ではないことが分かる。融資と資金サービスの売上が2025年に前年比20%増の10.1億ドルに達していることは、決済データを使った与信が第2の柱になりつつあることを示すとみられる。日本で2024年に資金調達、2025年に即時入金を続けて出したのは、この柱を日本にも移す動きと推測される。
:::

:::guess
アカウント作成1件に8,000円、端末の購入でさらに6,500〜13,000円という紹介料は、Square部門の加盟店1件あたりの年間粗利益（39.4億ドル÷450万件で約875ドル、1ドル150円で約13万円、当サイトの計算）と比べると、その6〜16%にあたる。加盟店の平均には米国の大型店も含まれるので日本の個人商店ではもっと小さいとみられるが、一度レジや請求書や資金調達に載った加盟店は何年も残り、決済額が伸びるほど手数料が増えるため、初年度の粗利益の一部を紹介に払う設計は成り立つと推測される。端末の購入に追加報酬を付けているのは、リーダーだけの加盟店よりターミナルやレジスターを買った加盟店のほうが、店の売上全体をSquareに通す度合いが高いと見ているためとみられる。本人申し込みを対象外にしたのは、紹介料目当てのアカウントを避けるためだろう。
:::

Squareが日本で売っているのは、カードリーダーそのものより、「今日始めて明日入金される」という速さと、決済の先に付いてくる業務の一体感だ。三井住友カードのアクワイアリングとVJA加盟の地方金融機関の窓口で全国に広げ、手数料を下げ、無料の機能を積み、口座に入る前の売上を融資と即時入金の材料にする。親会社が従業員を4割減らす再編を進める中でも、日本ではレジスターの第2世代とAIアシスタントを続けて出した。手数料の会社が資金繰りの会社に変わる転換を、個人商店の規模で最も長く続けているのがSquareだ。
