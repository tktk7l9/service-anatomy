---
service: "Webflow"
title: "顧客が使っていたライブラリを買い、無料にした — Webflowが「見た目で書くCSS」からCloudflare上のアプリ基盤へ広がるまで"
description: "コードを書かずにCSSのレイアウトを組めるビジュアル開発ツールWebflow。2022年に評価額40億ドルをつけ、累計調達3.35億ドルの非上場企業が、Webflowで作られたサイトの10万件超で使われていたアニメーションライブラリGSAPを買って無料化し、Cloudflare Workersの上にフルスタックアプリの実行環境Webflow Cloudを載せた。独自のビジュアル言語WFDL、FlowからTypeScriptへの移行、サイト単位の料金表に並ぶD1・KV・R2までを、公式ブログ・料金ページ・プレスリリースと応答ヘッダーの実観測から解剖する。"
lead: "2024年10月、Webflowはアニメーションライブラリの定番GSAPを、開発元GreenSockの事業ごと買った。買収の発表によれば、Webflowで作られたサイトのうち10万件超が、すでに独自コードでGSAPを読み込んでいた。半年後、Webflowは有料プラグインを含むGSAPの全機能を、Webflowの顧客かどうかに関係なく無料にした。デザイナーが「見た目で書くCSS」として始まった道具が、いま何を買い、どこで動き、どう稼いでいるのかを解剖する。"
category: saas
tags: [website-builder, no-code, design-tool, cloudflare, hosting]
publishedAt: "2026-09-28"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://webflow.com/"
# Affiliate link placeholder: the owner must apply to the Webflow Affiliate Program
# (https://webflow.com/solutions/affiliates, managed on PartnerStack) before enabling this block.
# The program is for content creators; commissions on one-to-one client referrals are not paid
# (those go through the Certified Partner Program instead), and one piece of content must be
# published within 30 days of acceptance.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<webflow-affiliate-partnerstack-link>"
#   program: "Webflow Affiliate Program"
vendor: "Webflow, Inc."
origin: "US"
heroTheme: "webflow"
scores: { product: 4.0, ux: 3.5, tech: 4.5, business: 4.0 }
techStack:
  - layer: "サイト配信"
    name: "Cloudflare"
    confidence: confirmed
    evidence: "公式ブログのWebflow Cloud発表記事に、Webflowのネイティブなホスティング基盤はCloudflareで動いていると明記。当サイトの実観測（2026-09-28）でも、webflow.ioで公開されたサイトの応答に server: cloudflare と cf-cache-status: HIT が出る"
    evidenceUrl: "https://webflow.com/blog/webflow-cloud"
  - layer: "アプリ実行環境"
    name: "Cloudflare Workers (Webflow Cloud)"
    confidence: confirmed
    evidence: "公式のWebflow Cloud製品ページに、インフラはCloudflare Workersで動き、需要に応じて自動でスケールすると明記。対応フレームワークはNext.jsとAstro"
    evidenceUrl: "https://webflow.com/cloud"
  - layer: "アプリ用ストレージ"
    name: "Cloudflare D1 / KV / R2"
    confidence: confirmed
    evidence: "公式の料金ページの比較表に、Webflow Cloudの保存先として「SQLite (D1 database)」「Key-value store (KV database)」「Object storage (R2 database)」と、Cloudflareの製品名のまま容量・操作回数の上限と超過単価を掲載"
    evidenceUrl: "https://webflow.com/pricing"
  - layer: "エディタのフロントエンド"
    name: "React / TypeScript"
    confidence: confirmed
    evidence: "公式ブログ（エンジニアリング）に、コードベース全体をFlowからTypeScriptへ移行し、jscodeshiftのcodemodで2万行超を書き換えたと明記。2017年の公式ブログ記事には、フロントエンドチームの大半がDesignerをReact.jsで作り直している最中だと書かれている"
    evidenceUrl: "https://webflow.com/blog/codemods-and-large-scale-refactors-at-webflow"
  - layer: "ビジュアル言語"
    name: "WFDL (Webflow Design Language)"
    confidence: confirmed
    evidence: "公式ブログ（エンジニアリング）に、ビジュアル操作を前提にした純粋な独自言語WFDLを作り、WFDLをReactコンポーネントにコンパイルしてDevLinkを動かし、中間表現からサイト内検索用のJSONを作っていると明記"
    evidenceUrl: "https://webflow.com/blog/webflow-design-language"
  - layer: "拡張機能の実行"
    name: "iframe + postMessage (JSON-RPC)"
    confidence: confirmed
    evidence: "公式ブログのDesigner APIs解説に、サードパーティのアプリはDesigner内のiframeに読み込まれ、window.postMessageと社内のJSON-RPCライブラリでDesignerと通信すると明記"
    evidenceUrl: "https://webflow.com/blog/designer-apis-part-1"
  - layer: "アニメーション"
    name: "GSAP (GreenSock Animation Platform)"
    confidence: confirmed
    evidence: "公式の料金ページに「Interactions with GSAP」として、最新のInteractionsエディタがGSAPで動くと明記。GSAPの開発元GreenSockの事業は2024年10月に買収"
    evidenceUrl: "https://webflow.com/pricing"
  - layer: "オリジン・アセット保管"
    name: "AWS (us-east-1 / Amazon S3)"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー実観測（2026-09-28）で、webflow.ioのサイトに x-wf-region: us-east-1、アセット配信ドメイン cdn.prod.website-files.com の応答に server: cloudflare と x-amz-request-id・x-amz-version-id が並ぶ。Cloudflareの後ろにS3のオリジンがあるとみられるが、公式の明言は見当たらない"
sources:
  - label: "Webflow公式: About（創業年・ユーザー数・従業員数・累計調達額・経営陣）"
    url: "https://webflow.com/about"
    accessedAt: "2026-09-28"
  - label: "PR Newswire: WebflowがYC Continuity主導で1.2億ドルのシリーズCを調達、評価額40億ドル（2022-03-16）"
    url: "https://www.prnewswire.com/news-releases/webflow-raises-120m-series-c-at-4b-valuation-led-by-yc-continuity-301503860.html"
    accessedAt: "2026-09-28"
  - label: "PRWeb: WebflowがLinda Tongを次期CEOに指名（2024-06-17）"
    url: "https://www.prweb.com/releases/webflow-names-linda-tong-as-its-next-chief-executive-officer-302173889.html"
    accessedAt: "2026-09-28"
  - label: "PR Newswire: Website Experience Platformの発表とGreenSock（GSAP）の買収（2024-10-15）"
    url: "https://www.prnewswire.com/news-releases/webflow-debuts-industry-first-website-experience-platform-wxp-superpowers-web-development-with-new-ai-products-tools-and-capabilities-302276259.html"
    accessedAt: "2026-09-28"
  - label: "Webflow公式ブログ: GreenSock（GSAP）の買収"
    url: "https://webflow.com/blog/webflow-acquires-gsap"
    accessedAt: "2026-09-28"
  - label: "Webflow公式アップデート: GSAPを100%無料に（2025-04-30）"
    url: "https://webflow.com/updates/gsap-becomes-free"
    accessedAt: "2026-09-28"
  - label: "Webflow公式ブログ: Webflow Cloudの発表"
    url: "https://webflow.com/blog/webflow-cloud"
    accessedAt: "2026-09-28"
  - label: "Webflow公式: Webflow Cloud製品ページ"
    url: "https://webflow.com/cloud"
    accessedAt: "2026-09-28"
  - label: "Webflow公式: Plans & pricing"
    url: "https://webflow.com/pricing"
    accessedAt: "2026-09-28"
  - label: "Webflow公式ブログ（エンジニアリング）: Codemodsと大規模リファクタリング"
    url: "https://webflow.com/blog/codemods-and-large-scale-refactors-at-webflow"
    accessedAt: "2026-09-28"
  - label: "Webflow公式ブログ（エンジニアリング）: Webflow Design Language"
    url: "https://webflow.com/blog/webflow-design-language"
    accessedAt: "2026-09-28"
  - label: "Webflow公式ブログ（エンジニアリング）: Designer APIsの作り方 Part 1"
    url: "https://webflow.com/blog/designer-apis-part-1"
    accessedAt: "2026-09-28"
  - label: "Webflow公式ブログ: What we've been working on（DesignerのReact化・2017-05-31）"
    url: "https://webflow.com/blog/what-weve-been-working-on"
    accessedAt: "2026-09-28"
  - label: "Webflow公式ブログ: コードコンポーネント（Reactコンポーネントをキャンバスで使う）"
    url: "https://webflow.com/blog/developers-code-components"
    accessedAt: "2026-09-28"
  - label: "Webflow公式: Webflow Affiliate Program"
    url: "https://webflow.com/solutions/affiliates"
    accessedAt: "2026-09-28"
---

Webflowの編集画面を開くと、パネルに並ぶのはflexbox、grid、margin、paddingといったCSSの言葉だ。コードは書かないが、CSSの考え方からは逃がしてくれない。多くのサイトビルダーが「Webを知らなくても作れる」方向を目指すなかで、Webflowは「Webを知っている人が、手でコードを書かずに作れる」方向に進んだ。その会社がいま、アニメーションライブラリを買って無料にし、Cloudflareの上でアプリまで動かし始めている。

## サービス解説

Webflowは、デザイナーやマーケターがビジュアル操作でWebサイトを組み、CMS・ホスティング・SEOまでを一つの場所で管理するためのWeb制作プラットフォームだ。非上場のため売上は開示されていないが、資金調達や公式サイトの数字から規模は追える。

:::fact
公式サイトによれば、Webflowは2013年創業で、ユーザーは350万、従業員は25ヶ国に900人超、累計調達額は3.35億ドル。共同創業者はVlad Magdalin、Sergie Magdalin、Bryant Chouの3人で、CEOはLinda Tong。2022年3月16日のプレスリリースによれば、Y CombinatorのContinuityファンド主導で1.2億ドルのシリーズCを評価額40億ドルで調達した。この時点で年間経常収益（ARR）は1億ドル規模、顧客は20万で、Webflowでホストされたサイトへの訪問は月100億を超え、エンタープライズ向け製品は前年比6倍に伸びていた。
:::

:::fact
2024年6月17日のプレスリリースによれば、それまで2年間President兼COOを務めたLinda TongがCEOに就き、共同創業者のVlad Magdalinは取締役会長を続けながらChief Innovation Officerに移った。同年10月15日のプレスリリースでは、自らを「Website Experience Platform（WXP）」と名乗り直し、AIアシスタントとAI Optimizeを発表するとともに、アニメーションライブラリGSAPの開発元GreenSockの事業を買収した。同じリリースは、同年4月にAIでサイトを訪問者ごとに出し分けるIntellimizeを買収したこと、顧客が30万、認定パートナーが1,300超であることにも触れている。
:::

:::fact
買収時の公式ブログによれば、Webflowのサイトのうち10万件超が、すでに独自コードでGSAPを読み込んでいた。2025年4月30日の公式アップデートで、Webflowは以前は有料だったClubプラグインを含むGSAPの全機能を、Webflowの顧客かどうかに関係なく無料にし、標準ライセンスを商用利用まで広げた。あわせて人気プラグインSplitTextを作り直し、ファイルサイズを50%削ったとしている。
:::

:::pull
顧客の10万サイトが自前で読み込んでいたライブラリを、開発元の事業ごと買って、世界中に無料で配った。囲い込みの逆を行く買収が、Webflowのエディタの中身を決めている。
:::

::scorecard

## UX分析

WebflowのUXは「CSSを知っている人の手を速くする」ことに最適化されている。初心者に優しい道具ではないが、覚えたことがWebの標準そのものなので、学習が無駄にならない。

- **パネルの言葉がCSSそのもの**。ボックスモデル、flexbox、gridを画面上で組む体験は、コードを書かないだけでCSSを書いているのとほぼ同じだ。要素を好きな位置に置いていくタイプのビルダーに慣れた人には、最初の数時間が重いだろう。そのかわり、出てくるHTMLとCSSが素直で、レスポンシブの崩れ方も予測できる。
- **アニメーションの天井が高い**。料金ページによれば、最新のInteractionsエディタはGSAPの上に作られ、横向きのタイムラインで再利用できるアニメーションを組める。GSAPを無料にしたことで、エディタで作った動きと、開発者が手で書いたGSAPのコードが同じ土俵に並ぶ。
- **「足りなくなったらコード」の出口が複数ある**。公式ブログによれば、Reactで書いたコードコンポーネントをキャンバスに置け、DevLinkでWebflowのデザインをReactコンポーネントとして書き出せ、Webflow CloudでNext.jsやAstroのアプリを同じドメインの下に置ける。ノーコードで行き止まりになりにくい設計だ。
- **無料で試せる範囲は狭い**。料金ページによれば、無料のStarterはwebflow.ioのサブドメインで静的ページ2枚・帯域1GB・フォーム送信50件まで。独自ドメインで公開するには、サイトごとに有料のSite planが要る。料金がワークスペース（作業場所）とサイトの二系統に分かれている点も、初めての人には分かりにくい。

## 技術構成

::techstack

:::fact
公式ブログ（エンジニアリング）によれば、Webflowはコードベース全体を型チェッカーのFlowからTypeScriptへ移した。Webflow Conf 2023で出した新しいUIでは、新旧のコンポーネントを機能フラグで切り替えるための仕組みを後から一掃する必要があり、jscodeshiftで書いたcodemodで2万行超を書き換え、目立った見た目の不具合（回帰）を出さずにリリースできたという。別の記事では、ビジュアル操作を前提にした独自の純粋な言語WFDL（Webflow Design Language）を作ったと説明している。WFDLは副作用を持たない純粋な言語なので部分的な再評価を効率よくできる。WFDLはReactコンポーネントにもコンパイルされてDevLinkを支え、評価結果の中間表現からはサイト内検索用のJSONも作られている。
:::

:::fact
拡張の仕組みについて、公式ブログのDesigner APIs解説によれば、サードパーティのアプリはDesigner内のiframeに読み込まれ、Webflowが先にAPI用のJavaScriptを注入したうえで、window.postMessageと社内のJSON-RPCライブラリでDesignerとやり取りする。実行基盤については、Webflow Cloudの発表記事が、Webflowのネイティブなホスティング基盤はCloudflareで動いていると書き、製品ページはアプリがCloudflare Workersの上で自動スケールすると書く。料金ページの比較表には、アプリ用のストレージが「SQLite (D1 database)」「Key-value store (KV database)」「Object storage (R2 database)」と、Cloudflareの製品名のまま並んでいる。
:::

:::guess
当サイトの観測では、webflow.ioで公開されたサイトの応答に server: cloudflare と x-wf-region: us-east-1 が並び、画像やCSSを配るcdn.prod.website-files.comはCloudflareの応答にAmazon S3由来のヘッダーを含んでいた。配信の入口はCloudflare、元データはAWSの米国東部に置く構成とみられる。料金ページにD1・KV・R2の名前をそのまま出しているのは珍しい。アプリの実行環境を一から作らず、Cloudflareの部品に自社の管理画面と課金を被せることで、少ない開発量で「サイトの隣でアプリも動く」体験を出したと推測される。その代わり、Webflow Cloudの制約はCloudflare Workersの制約をほぼそのまま受け継ぐことになる。
:::

## ビジネスモデル

Webflowの収益は、公開するサイトごとのSite planと、チームや企業向けの契約の二層でできている。

:::fact
公式の料金ページによれば（2026-09-28時点・米ドル・年払いの月額換算）、Site planは無料のStarter、CMSを使わない簡単なサイト向けのBasicが月15ドル、CMSと大きな帯域を含むPremiumが月25ドルから（選ぶ帯域に応じて上がる）。組織向けには年契約が必須のTeamが月2,500ドル、個別見積のEnterpriseがある。Webflow Cloudのアプリは、Basicで月100万リクエストとCPU時間15分までが含まれ、超過分は100万リクエストあたり2ドル、CPU時間5時間あたり2ドルで課金される。
:::

:::guess
料金表には、個人向けの月15〜25ドルのプランと並んで、「New」の印がついた年契約・月2,500ドルのTeamと、個別見積のEnterpriseが置かれている。2022年の時点でエンタープライズ製品が1年で6倍に伸びていたこと、2024年にマーケターを筆頭に掲げて自らを「Website Experience Platform」と名乗り直し、訪問者ごとの出し分け（Intellimize）やAI Optimizeを足してきたことを合わせると、Webflowの重心は「フリーランスが使う制作ツール」から「企業のマーケティング部門が年契約で払う基盤」へ移りつつあるとみられる。GSAPの無料化は、制作者のコミュニティという入口を広げ、その先の企業契約につなげるための投資と読める。
:::

:::fact
公式サイトによれば、Webflowはコンテンツ制作者・インフルエンサー・ブロガー向けのアフィリエイトプログラム（Webflow Affiliate Program）をPartnerStack上で運営している。紹介した新規顧客の最初のサブスクリプションについて、最長12ヶ月分の50%が報酬になり、クッキーの有効期間は90日（ファーストタッチで計上）。上位のPro・Premium区分では、顧客が1年を超えて更新すると、さらに最長12ヶ月分の10%・15%が加わる。一方で、自分の顧客のために制作するフリーランスや制作会社の紹介は対象外で、そちらは認定パートナープログラムに回るよう案内している。
:::

コードを書かないのに、CSSの考え方からは逃がさない。囲い込むはずのライブラリを無料で配り、アプリの実行はCloudflareに任せる。Webflowは、Webの標準に寄り添うことそのものを差別化にしてきた会社だ。その道具がいま、企業のマーケティング部門が年契約で使う基盤へと広がりつつある。
