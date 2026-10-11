---
service: "beehiiv"
title: "料金表の横に「広告収益の平均」を出すニュースレター基盤 — 購読料から取り分を取らずに年換算3,200万ドルを売り上げ、広告ネットワークとMCPで稼ぎ方とAIの入口を広げるbeehiivを解剖する"
description: "beehiivは、2021年にMorning Brewの初期メンバー3人が創業したニューヨーク発のニュースレター基盤だ。メール配信にWebサイト、ポッドキャスト、コミュニティ、デジタル商品、そして自前の広告ネットワークを1つにまとめ、2026年第2四半期時点で17万超のパブリケーションを抱え、送ったメールは累計750億通を超える。有料購読とデジタル商品の売上からは0%しか取らない一方、2025年11月には年換算の売上が3,200万ドルに達した。料金ページとそのMarkdown版、創業者のブログ、プロダクト更新、ヘルプセンター、Trust Centerとサブプロセッサーの一覧、求人、GitHub、当サイトの実観測から、Herokuの上で動くとみられるアプリにSendGrid・Crunchy Data・ClickHouse・Cloudflareを組み合わせた構成、CPMとCPCの広告と20%の手数料を取る有料のおすすめの仕組み、MCPとAIクローラーの制御まで、書き手に稼がせて自分も稼ぐ設計を解剖する。"
lead: "beehiivの料金ページで購読者数のつまみを動かすと、有料プランの『Ad monetization』の横に月あたりの平均額が現れる。2,500人なら39ドル、10万人なら400ドル。同じ画面に並ぶLiteの年払いの値段は、10万人で月399ドルだ。共同創業者でCEOのTyler Denk氏は2023年、最も大事な指標を『beehiivに払う額より多くをbeehiivから稼いでいる利用者が何人いるか』だと書いた。購読料から取り分を取らない会社が、何で稼ぎ、どう作られているのかを、公開情報だけで解剖する。"
category: saas
tags: [newsletter, creator-economy, saas, advertising, subscription, mcp, aws]
publishedAt: "2026-10-11"
updatedAt: "2026-10-11"
lastVerified: "2026-10-11"
serviceUrl: "https://www.beehiiv.com/"
# Affiliate link placeholder: the beehiiv Partner Program (https://www.beehiiv.com/partners, checked
# 2026-10-11) pays up to 60% of the revenue from each referred paying customer, monthly, for a full
# year. Every partner starts on the Launch tier; tiers follow lifetime conversions: Bronze (first
# conversion, 50%), Silver (55%, co-branded landing page) and Gold (60%). Cookies last 60 days,
# referred users get a 14-day trial plus 20% off their first 3 months, and payouts are made on the
# 15th of each month through Dub.co, beehiiv's partner management system. Joining means creating a
# beehiiv account and applying at https://app.beehiiv.com/partner_program. Search ads on Bing or
# Google (especially on branded terms or domain names) are prohibited; signing up through your own
# link is not allowed. Once the owner is approved, paste the Dub tracking link here and keep the url
# identical in ja.md and en.md (parity.ts checks it). If the program supplies a text ad, copy it
# verbatim into label. Never invent the label — ask the owner.
# affiliate:
#   url: "https://<dub-tracking-link-for-beehiiv>"
#   program: "beehiiv Partner Program (Dub)"
vendor: "beehiiv Inc."
origin: "US"
heroTheme: "beehiiv"
scores: { product: 4.5, ux: 4.0, tech: 4.0, business: 4.5 }
techStack:
  - layer: "アプリ本体・API・MCP"
    name: "Ruby on Rails (Heroku)"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-11）で、app.beehiiv.com、api.beehiiv.com、embeds.beehiiv.com、mcp.beehiiv.com はいずれも via: 1.1 heroku-router、HerokuのNELの報告先（heroku-nel）、x-runtime を返した。x-permitted-cross-domain-policies: none は app、embeds、mcp に、x-download-options: noopen は app と mcp にだけ付いていた（api.beehiiv.com/v2/ の404の応答にはどちらもなかった）。GitHubのbeehiiv/has_state_machine（Ruby・MIT）は、ActiveRecordのモデルに有限状態機械を足すgem。公式のサブプロセッサーの一覧は、クラウドホスティングにAmazonと並べてSalesforceを挙げる"
    evidenceUrl: "https://github.com/beehiiv/has_state_machine"
  - layer: "クラウド基盤・データの保管"
    name: "AWS"
    confidence: confirmed
    evidence: "公式のTrust Center（2026-10-11確認）のFAQに、出版物と購読者のデータはすべて米国内のAmazon Web Servicesのリージョンに保存すると明記。サブプロセッサーの一覧もAmazonをクラウドホスティングとして挙げる。当サイトの実観測（2026-10-11）では、画像を配る media.beehiiv.com が x-amz-request-id や x-amz-server-side-encryption などAmazon S3のヘッダーを返した"
    evidenceUrl: "https://security.beehiiv.com/"
  - layer: "メール配信"
    name: "SendGrid"
    confidence: confirmed
    evidence: "公式のサブプロセッサーの一覧（2026-10-11確認）に、Sendgridを「Email service provider」として明記。同じ一覧は、メールアドレスの検証にKickboxを挙げる"
    evidenceUrl: "https://subprocessors.beehiiv.com/sub-processor-list"
  - layer: "データベース"
    name: "Crunchy Data (managed Postgres)"
    confidence: confirmed
    evidence: "公式のサブプロセッサーの一覧（2026-10-11確認）に、Crunchydataを「Database hosting」として明記。Crunchy Dataの公式サイト（2026-10-11確認）は、自社の提供するものを「Fully-Managed Cloud Postgres」と説明する"
    evidenceUrl: "https://subprocessors.beehiiv.com/sub-processor-list"
  - layer: "分析データベース"
    name: "ClickHouse (ClickHouse Cloud)"
    confidence: confirmed
    evidence: "公式のサブプロセッサーの一覧にClickhouse Cloudを「Database hosting」として明記。公式の採用ページ（BambooHR）に2026-09-24に掲載されたデータサイエンティスト（Ad Network）の求人は、広告ネットワークについてのClickHouseのデータモデルを持って作り込むことを仕事に挙げ、OLAPのデータベースの経験を歓迎する"
    evidenceUrl: "https://beehiiv.bamboohr.com/careers/65"
  - layer: "エディタ"
    name: "Tiptap"
    confidence: confirmed
    evidence: "公式のサブプロセッサーの一覧（2026-10-11確認）に、ベルリンのTiptapを「Collaborative text editor hosting」として明記。2026年7月17日のプロダクト更新は、エディタを1年かけて一から作り直し、見たままを編集できる（WYSIWYG）体験にしたと書く（7月17日の時点ではオプトインのベータ）"
    evidenceUrl: "https://subprocessors.beehiiv.com/sub-processor-list"
  - layer: "CDN・WAF・AIクローラーの制御"
    name: "Cloudflare"
    confidence: confirmed
    evidence: "公式のサブプロセッサーの一覧にCloudflareを「CDN and web application firewall」として明記。ヘルプ記事は、AI Crawl Controlの設定をCloudflareを通じてネットワークの段階で強制し、止めたクローラーの要求はサイトに届く前に止まると書く。当サイトの実観測（2026-10-11）では、調べたbeehiivのすべてのホストが server: cloudflare を返し、media.beehiiv.com は cf-polished と cf-cache-status: HIT を返した"
    evidenceUrl: "https://www.beehiiv.com/support/article/41416948596119-how-to-control-which-ai-crawlers-access-your-content"
  - layer: "マーケティングサイト"
    name: "Next.js (Vercel) + Prismic"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-11）で、www.beehiiv.com は server: cloudflare とともに x-powered-by: Next.js、x-vercel-cache、hnd1とiad1を含む x-vercel-id を返した。HTMLはPrismicの static.cdn.prismic.io を参照し、料金ページには同じ料金データから作ったMarkdown版（/pricing.md）がある"
    evidenceUrl: "https://www.beehiiv.com/"
  - layer: "パブリケーションのWebサイト"
    name: "Remix (\"orchid\")"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-11）で、beehiivのプロダクト更新を載せる product.beehiiv.com と、独自ドメインで運営されるDenk氏のニュースレター mail.bigdeskenergy.com は、ともに x-orchid-version: 2 と x-release-version: orchid-v2-prod-v34-20261010001027 を返し、HTMLにRemixの window.__remixContext を含んでいた"
  - layer: "AIエージェント連携"
    name: "beehiiv MCP server (OAuth)"
    confidence: confirmed
    evidence: "GitHubのbeehiiv/agents（MIT・2026-10-11確認）は、Claude Code、Grok Build、Gemini CLI、Cursor、Codex向けのプラグインの定義と公式のMCPレジストリの登録が、すべて https://mcp.beehiiv.com/mcp の同じホスト型サーバーを指すと書く。当サイトの実観測では、このURLは認証なしの要求に401と www-authenticate: Bearer resource_metadata=\"https://mcp.beehiiv.com/.well-known/oauth-protected-resource/mcp\" を返し、app.beehiiv.com と同じ x-release-version: v9916 を付けていた"
    evidenceUrl: "https://github.com/beehiiv/agents"
  - layer: "決済・収益の送金"
    name: "Stripe (Stripe Express)"
    confidence: confirmed
    evidence: "料金ページのFAQ（2026-10-11確認）は、有料購読とデジタル商品の売上からbeehiivは0%しか取らず、書き手は稼いだ額からStripeの標準の決済手数料（1件あたり2.9%＋0.30ドル）を引いた分を受け取ると明記。Ad NetworkのFAQは、広告と有料のおすすめの収益の受け取りにはStripe Expressのアカウントが必須で、PayPalやWiseなど他の決済事業者には対応しないと書く"
    evidenceUrl: "https://www.beehiiv.com/support/article/17507491038231-ad-network-faq"
  - layer: "パートナー管理"
    name: "Dub"
    confidence: confirmed
    evidence: "公式のパートナーのページ（2026-10-11確認）に、紹介報酬は毎月15日に前月分が支払われ、その支払いはパートナー管理のシステムであるDub.coが扱うと明記"
    evidenceUrl: "https://www.beehiiv.com/partners"
sources:
  - label: "beehiiv公式: トップページ"
    url: "https://www.beehiiv.com/"
    accessedAt: "2026-10-11"
  - label: "beehiiv公式: Pricing（Free / Lite / Pro / Enterprise・初期表示は購読者1,000人・年払い）"
    url: "https://www.beehiiv.com/pricing"
    accessedAt: "2026-10-11"
  - label: "beehiiv公式: PricingのMarkdown版（購読者数ごとの料金表・プランごとの機能）"
    url: "https://www.beehiiv.com/pricing.md"
    accessedAt: "2026-10-11"
  - label: "beehiiv公式: About（創業者・社員数・2026年第2四半期の数字）"
    url: "https://www.beehiiv.com/about"
    accessedAt: "2026-10-11"
  - label: "beehiiv公式: Partner Program（最大60%・Dub）"
    url: "https://www.beehiiv.com/partners"
    accessedAt: "2026-10-11"
  - label: "beehiiv公式ブログ: beehiiv Raises $2.6 Million Seed to Empower Publishers（2021-10-05のプレスリリース）"
    url: "https://www.beehiiv.com/blog/beehiiv-raises-26-million-seed"
    accessedAt: "2026-10-11"
  - label: "beehiiv公式ブログ: beehiiv Powers Expansion with 1.6M Seed Extension（2022-09-12のプレスリリース）"
    url: "https://www.beehiiv.com/blog/beehiiv-expands-seed-round-fundraising"
    accessedAt: "2026-10-11"
  - label: "beehiiv公式ブログ: beehiiv Raises $12.5M Series A led by Lightspeed Venture Partners（2023-06-21）"
    url: "https://www.beehiiv.com/blog/beehiiv-raises-12-5-series-a-lightspeed-venture-partners"
    accessedAt: "2026-10-11"
  - label: "beehiiv公式ブログ: beehiiv Acquires Swapstack（2023-09-26）"
    url: "https://www.beehiiv.com/blog/beehiiv-acquires-swapstack"
    accessedAt: "2026-10-11"
  - label: "beehiiv公式ブログ: The beehiiv Story: Chapter 2（2023-11-16）"
    url: "https://www.beehiiv.com/blog/beehiiv-story-chapter-2"
    accessedAt: "2026-10-11"
  - label: "beehiiv公式ブログ: The beehiiv Story: Chapter 3（シリーズB・2024-11-22）"
    url: "https://www.beehiiv.com/blog/the-beehiiv-story-chapter-3"
    accessedAt: "2026-10-11"
  - label: "beehiiv公式ブログ: The beehiiv Story: Chapter 4（年換算3,200万ドル・2025-11-19）"
    url: "https://www.beehiiv.com/blog/the-beehiiv-story-chapter-4"
    accessedAt: "2026-10-11"
  - label: "beehiiv公式ブログ: The State of Newsletters 2026（2026年1月）"
    url: "https://www.beehiiv.com/blog/the-state-of-newsletters-2026"
    accessedAt: "2026-10-11"
  - label: "beehiivプロダクト更新: On-Demand Ads（2026-03-09）"
    url: "https://product.beehiiv.com/p/on-demand-ads"
    accessedAt: "2026-10-11"
  - label: "beehiivプロダクト更新: beehiiv MCP v2（2026-04-30）"
    url: "https://product.beehiiv.com/p/beehiiv-mcp-v2"
    accessedAt: "2026-10-11"
  - label: "beehiivプロダクト更新: Recommendations Reimagined（2026-07-09）"
    url: "https://product.beehiiv.com/p/recommendations-reimagined"
    accessedAt: "2026-10-11"
  - label: "beehiivプロダクト更新: Community（Summer Release Eventのまとめ・2026-07-17）"
    url: "https://product.beehiiv.com/p/community"
    accessedAt: "2026-10-11"
  - label: "beehiivプロダクト更新: AI Discovery（AI Crawl Control・2026-08-20）"
    url: "https://product.beehiiv.com/p/ai-discovery"
    accessedAt: "2026-10-11"
  - label: "beehiivプロダクト更新: Paid Recs, beehiiv AI, and More（2026-09-29）"
    url: "https://product.beehiiv.com/p/paid-recs-beehiiv-ai-and-more"
    accessedAt: "2026-10-11"
  - label: "beehiivヘルプ: Ad Network FAQ"
    url: "https://www.beehiiv.com/support/article/17507491038231-ad-network-faq"
    accessedAt: "2026-10-11"
  - label: "beehiivヘルプ: Growing your audience with paid incoming recommendations（20%の手数料）"
    url: "https://www.beehiiv.com/support/article/14492963616279-growing-your-audience-with-paid-incoming-recommendations"
    accessedAt: "2026-10-11"
  - label: "beehiivヘルプ: Boosts to paid recommendations: what changed（2026-10-01更新）"
    url: "https://www.beehiiv.com/support/article/41790356251159-boosts-to-paid-recommendations-what-changed"
    accessedAt: "2026-10-11"
  - label: "beehiivヘルプ: How to control which AI crawlers access your content"
    url: "https://www.beehiiv.com/support/article/41416948596119-how-to-control-which-ai-crawlers-access-your-content"
    accessedAt: "2026-10-11"
  - label: "beehiivヘルプ: What you can do with the beehiiv MCP（2026-10-04更新）"
    url: "https://www.beehiiv.com/support/article/41262491804439-what-you-can-do-with-the-beehiiv-mcp"
    accessedAt: "2026-10-11"
  - label: "beehiiv公式: Trust Center（SOC 2 Type 2・データの保管先）"
    url: "https://security.beehiiv.com/"
    accessedAt: "2026-10-11"
  - label: "beehiiv公式: Sub-processor list"
    url: "https://subprocessors.beehiiv.com/sub-processor-list"
    accessedAt: "2026-10-11"
  - label: "beehiiv採用ページ: Data Scientist, Ad Network (global)（2026-09-24掲載）"
    url: "https://beehiiv.bamboohr.com/careers/65"
    accessedAt: "2026-10-11"
  - label: "GitHub: beehiiv/has_state_machine（Ruby・MIT）"
    url: "https://github.com/beehiiv/has_state_machine"
    accessedAt: "2026-10-11"
  - label: "GitHub: beehiiv/agents（MCPのプラグイン定義・MIT）"
    url: "https://github.com/beehiiv/agents"
    accessedAt: "2026-10-11"
  - label: "Ghost公式: Pricing（Ghostからの追加の取引手数料なし）"
    url: "https://ghost.org/pricing/"
    accessedAt: "2026-10-11"
  - label: "Crunchy Data公式サイト（Fully-Managed Cloud Postgres）"
    url: "https://www.crunchydata.com/"
    accessedAt: "2026-10-11"
---

beehiivは、ニュースレターを書いて送り、読者を増やし、お金に換えるまでを1つの画面で済ませるためのプラットフォームだ。ニュースレターから始まり、いまはWebサイト、ポッドキャスト、コミュニティ、デジタル商品まで抱え、About（2026-10-11確認）では自らを「ニュースレター・ファースト」のプラットフォームと呼ぶ。当サイトが解剖した[Ghost](/ja/articles/ghost)と同じく、有料購読の売上から自分の取り分を取らない（Ghostの料金ページも、Ghostからの追加の取引手数料はかからないと書く）。beehiivの特徴は、ベンチャーキャピタルの資金で育ちながら、広告ネットワークと、ニュースレター同士のおすすめを売り買いする市場を自前で持つことにある。取り分を取らない代わりに、書き手の財布を太らせる仕組みそのものを売り物にしてきた。

## サービス解説

beehiivは、無料のFreeから、Lite、Pro、個別見積もりのEnterpriseまでの4つのプランで売られ、料金ページによれば、どのプランでもニュースレター、Webサイト、ポッドキャスト、コミュニティ、デジタル商品を使える。プランで変わるのは、上限とサポートと上位の機能だ。

:::fact
About（2026-10-11確認）によれば、beehiivは2021年に、Morning Brewの初期の社員だったTyler Denk氏、Benjamin Hargett氏、Jacob Hurd氏が創業した。全員がリモートで12か国に散らばり、正社員は129人。2026年第2四半期時点で、累計の送信メールは750億通超、ユニークの読者は4億5,000万人超、利用者がbeehiivを通じて稼いだ額は6,000万ドル超、パブリケーションは17万超と掲げる。2021年10月5日付のプレスリリースによれば、シードはSocial Leverageが主導した260万ドルで、Thirty Five Ventures、Company Venturesなどが加わった。CEOのDenk氏はMorning Brewの2人目の社員で、その後Googleでプロダクトリードを務め、HargettとHurdの両氏はMorning Brewのソフトウェアエンジニアだった。2022年9月12日には、既存の投資家のCreator Ventures、Blue Wire Capital、Social Leverageが主導する160万ドルのシードの追加を発表し、調達の累計は約420万ドル、2021年11月の公開から売上は毎月30%超伸び、チームは8人だった。2023年6月21日に発表したシリーズAはLightspeed Venture Partnersが主導した1,250万ドルで、当時の売上のランレートは400万ドル、2023年4月に月単位で黒字になったと書く。2024年11月22日のCEOのブログによれば、2024年4月のシリーズBはNEAが主導し、Lightspeed、Sapphire Sport、DSTなどが加わった3,300万ドルで、うち100万ドル分を利用者が出資できる枠にした。2023年9月にはニュースレター広告のSwapstackを、2024年6月にはAIのWebサイトビルダーのTypedreamを買った。2025年11月19日のCEOのブログによれば、年換算の売上は3,200万ドル、社員は110人で、毎月30億通超のメールを送っている。
:::

:::fact
料金ページ（2026-10-11確認・米ドル）の初期表示は「購読者1,000人まで・年払い」で、Freeは0ドル、Liteは月49ドル、Proは月95ドル、Enterpriseは個別見積もり。同じページのMarkdown版（/pricing.md）によれば、同じ1,000人の段階の月払いはLiteが59ドル、Proが109ドルで、年払いの総額はLiteが588ドル、Proが1,140ドル。料金は購読者数の段階で上がり、Freeは2,500人まで、Liteは10万人の段階まで（年払いで月399ドル、月払いで469ドル）、Proは25万人以上の段階まで（同869ドル、999ドル）売られる。FAQは、年払いなら月払いより最大20%安いと書くが、料金表から計算すると13〜17%だ。同じFAQによれば、メールの送信数はどのプランでも無制限で、有料購読とデジタル商品の売上からbeehiivは0%しか取らず、書き手は稼いだ額から[Stripe](/ja/articles/stripe)の標準の決済手数料（1件あたり2.9%＋0.30ドル）を引いた分を受け取る。Liteで広告ネットワーク、有料購読、自動化、MCPの書き込みが、Proでbeehiivのブランド表示の削除、AIのボットの制御、Send API、最大10のパブリケーションが、EnterpriseでSSO（SAML）、専用IP、学習に使わずデータを保持しない設定、自前のAIモデルの鍵が加わる。Markdown版は、Liteで加わるAd NetworkとRecommendationsを「試用中は不可・一部の地域では不可」と注記する。2026年8月20日のプロダクト更新は上位のプランを「Max」と呼んでいたが、2026-10-11の料金ページに並ぶプランはFree・Lite・Pro・Enterpriseだった。
:::

:::pull
取り分を取らない会社は、書き手が稼ぐほど自分にも入る別の蛇口を持つしかない。beehiivにとってそれは、広告と、おすすめの仲介だった。
:::

::scorecard

## UX分析

beehiivの体験は、書く・増やす・稼ぐを1つの画面に集めたうえで、その中に稼ぎ口を先回りして置くことに重心がある。

- **料金ページが損得を先に見せる**。料金ページで購読者数のつまみを動かすと、LiteとProの「Ad monetization」の横に、月あたりの平均の広告収益が出る（当サイトが同ページのJavaScriptから読み取った値で、1,000人の段階では表示されない）。Denk氏は2023年11月16日のブログで、多くのSaaSは利用者にとって費用だが、beehiivは最初から利用者の価値を足す側として作ったと書き、最も大事な指標に、beehiivに払う額より多くをbeehiivから稼ぐ利用者の数を挙げた。料金表は、その考えをそのまま画面に置いたものに見える。
- **広告は書きながら差し込む**。2026年3月9日のプロダクト更新によれば、広告の案件は毎時更新され、エディタで `/ads` と打てば案件を選んで記事に入れられる。選んでから5日（120時間）以内に送ればよく、送信の96時間後に成果の報告が届き、売上は毎月20日に入金される。それまでは、毎週日曜に届く案件を待つ形だった。Ad NetworkのFAQによれば、案件の割り当てには機械学習のシステムを使い、合わない案件は低評価を付ければ消える。営業も広告文も請求も、書き手の手から外れている。
- **登録の直後に4つのおすすめ**。2026年7月9日のプロダクト更新によれば、新しい読者が登録した直後に、書き手が推す他のニュースレターを最大4つまで見せられる。無料の相互のおすすめと、紹介した読者1人ごとにお金が動く有料のおすすめ（旧Boosts）を1つにまとめ直したもので、これまでにRecommendationsとBoostsから1,500万超の購読が生まれ、他を推すニュースレターは推し返される見込みが32倍だったという。9月29日の更新では、おすすめから生まれた購読は2,000万近くになった。ヘルプ記事（2026-10-01更新）によれば、検証に通らなかった購読者を自動で消す機能はなくなり、タグで結果を見せて書き手に判断を任せる形に変わった。
- **AIの入口が外にも中にもある**。beehiivは2026年3月に有料の利用者向けにMCPのサーバーを先行公開し、4月30日のv2で順番待ちも有料プランも要らずに全利用者へ開き、6月16日からは有料プランで書き込みもできるようにした。9月29日の更新によれば、MCPは600万回超のリクエストを処理し、[Claude](/ja/articles/claude)と[ChatGPT](/ja/articles/chatgpt)の公式のコネクタになった。製品の中では、7月16日のSummer Release Eventで出したエージェント「Copilot」を、その名前が利用者に不評だったとして8月に「beehiiv Agent」に改名し、9月に記憶とサブエージェントを足した。ヘルプ記事（2026-10-04更新）はFreeを読み取りのみ、Liteを変更まで、ProとEnterpriseを配信の予約と送信までとする一方、GitHubのbeehiiv/agentsのREADMEは、公開と送信は人の操作として残すと書き、両者の記述は揃っていない。
- **AIのクローラーを見える化して止める**。2026年8月20日のプロダクト更新によれば、beehiivは記事ごとに構造化データ（JSON-LD）を、サイトごとに内容から作るllms.txtを自動で出す。前の月にOpenAI、Anthropic、Google、Microsoftのボットがbeehiivの上のコンテンツを5億回超クロールしたとして、[Cloudflare](/ja/articles/cloudflare)と組んだAI Crawl Controlも出した。ヘルプ記事によれば、対象はWebサイトビルダーで独自ドメインを使うProとEnterpriseのパブリケーションで、22のクローラーを4つの分類で管理し、止める設定はCloudflareのネットワークの段階で強制される。robots.txtのようなお願いではなく、従わないボットも通さない。
- **稼げるかどうかは国による**。Ad NetworkのFAQによれば、広告と有料のおすすめの収益は原則としてStripe Expressのアカウントでしか受け取れず、PayPalやWiseには対応しない。Stripe Expressが使えない国の書き手は、プランにかかわらず広告ネットワークに参加できない。有料のおすすめの案件も、出す側が任意で対象の国を絞れる。9月29日の更新に上位の案件の例として並んだ5件のうち4件は、米国、または米国・カナダ・欧州の読者に限っていた。日本から使う場合は、配信の道具としての価値と、稼ぐ道具としての価値を分けて考える必要がある。

## 技術構成

::techstack

:::fact
当サイトの実観測（2026-10-11）では、マーケティングサイトの www.beehiiv.com は server: cloudflare とともに x-powered-by: Next.js と、hnd1とiad1を含む x-vercel-id を返した。一方、管理画面の app.beehiiv.com、APIの api.beehiiv.com、埋め込みフォームの embeds.beehiiv.com、MCPの mcp.beehiiv.com は、いずれも server: cloudflare の後ろで via: 1.1 heroku-router、HerokuのNELの報告先（heroku-nel）、x-runtime を返した。x-permitted-cross-domain-policies: none は app、embeds、mcp に、x-download-options: noopen は app と mcp にだけ付いていた（api.beehiiv.com/v2/ の404の応答にはどちらもなかった）。app と mcp はどちらも x-release-version: v9916 だった。mcp.beehiiv.com/mcp は、認証のない要求に401と、OAuthの保護リソースのメタデータを指す www-authenticate を返した。beehiivのプロダクト更新を載せる product.beehiiv.com と、独自ドメインで運営されるDenk氏のニュースレター mail.bigdeskenergy.com は、どちらもbeehiivの上で配られるパブリケーションのサイトで、x-orchid-version: 2 と orchid-v2-prod-v34-20261010001027 というリリースの名前、30日の s-maxage を返し、HTMLに `window.__remixContext` を含んでいた。画像の media.beehiiv.com は、Amazon S3のヘッダーとCloudflareの画像最適化のヘッダー（cf-polished）を返した。料金ページのMarkdown版は、AIが価格を答えるときはHTMLのスライダーを読み取らず、`https://www.beehiiv.com/api/mcp` のMCPのツール `get_pricing` を呼ぶよう書いている。公式ブログの記事内のリンクには utm_source=beehiivblog.beehiiv.com が付き、サブプロセッサーの一覧のページの末尾には「Powered by beehiiv」とある。GitHubのbeehiivの組織は、ActiveRecordのモデルに状態機械を足すRubyのgem（`has_state_machine`）や、MCPのサーバーにつなぐClaude Code、Gemini CLI、Cursor、Codexなどのプラグインの定義（agents）を公開している。
:::

:::fact
公式のサブプロセッサーの一覧（2026-10-11確認）は、クラウドホスティングにAmazonとSalesforce、メール配信にSendGrid、データベースのホスティングにCrunchy DataとClickHouse Cloud、CDNとWAFにCloudflare、共同編集のエディタのホスティングにTiptap、決済と本人確認にStripe、クラウドの監視にNew Relic、エラーの報告にSentry、社内のダッシュボードにRetool、問い合わせの管理にZendesk、分析と顧客への連絡にCustomer.io、顧客分析にFullstory、メールアドレスの検証にKickbox、不正の検知にE-HawkとIPQualityScoreを挙げる。Trust Centerによれば、出版物と購読者のデータはすべて米国のAWSのリージョンに保存され、2026年1月22日付でSOC 2 Type 2への準拠を達成した。広告ネットワークについて、2024年11月22日のCEOのブログは、数人の機械学習エンジニアが読者のデータ、コンテンツ、広告文、コンバージョンからモデルを作っていると書き、2025年11月19日のブログは、1年近くかけて広告ネットワークのモデルを作って学習させ、案件の割り当てを自動にしたと書く。2026年9月24日に掲載されたデータサイエンティストの求人は、広告ネットワークのClickHouseのデータモデル、エンティティ解決やグラフデータベースのモデリング、出版者への支払いと広告主の価値の釣り合いの分析を仕事に挙げ、報酬の幅を12万〜22万ドル（経験による）とする。Ad NetworkのFAQによれば、CPCの広告では、自動化されたものや無効と判定されたクリックを除き、残りを質の信号で重み付けした「payable clicks」を数え、広告主への請求と書き手への支払いは、この同じ数字にそれぞれの単価を掛けて決まる。
:::

:::guess
構成は、自前で作り込むより、運用を外に預けて組み立てる方向に寄っているように見える。アプリの本体はHerokuの上のRailsとみられ（x-runtime や x-download-options: noopen はRailsのアプリでよく見るヘッダーで、自社のgemもActiveRecord向けだ）、データベースはCrunchy DataのマネージドなPostgres、分析はClickHouse Cloud、配信はSendGrid、入口はCloudflareに任せている。正社員129人の会社が、ニュースレターに加えてWebサイト、ポッドキャスト、コミュニティ、デジタル商品まで手を広げられたのは、この「借りられるものは借りる」割り切りによるところが大きいと推測される。逆に自前で抱えているのは、広告の割り当てのモデル、payable clicksの判定、おすすめの購読者の検証といった、お金の流れを決める部分とみられる（ただし不正の検知やメールアドレスの検証には外部の事業者も使っている）。MCPのサーバーが管理画面と同じリリースの番号を返すことからは、MCPが別のサービスではなく本体のアプリの一部として動いているとみられる。料金ページのMarkdown版がAIに `get_pricing` を勧めていることからは、AIのアシスタントを、検索エンジンと並ぶ客の入口として扱っている様子が読める。
:::

## 広告とおすすめで『元を取らせる』

:::fact
beehiivの広告ネットワークは、2022年9月のシードの追加の発表で、一部の出版者と広告主で試験運用を始めるとされ、2023年9月26日のSwapstackの買収の記事は、その2週間前に広告ネットワークを公開したと書く。同じ記事によれば、Swapstackは数千の出版者と数百の広告主を抱え、200万ドル超の広告の取引を仲介してきた会社で、CEOのJake Schonberger氏がbeehiivのブランドとの提携の責任者として広告ネットワークを率いることになった。共同創業者たちは、Morning Brewで数千万ドルの広告売上を扱った広告管理の仕組みを作った経験があるとも書く。2024年10月には、インプレッションに応じて払いが保証されるCPMの案件が加わり（2024年11月22日のCEOのブログ）、2026年3月9日のプロダクト更新は、ニュースレターがNetflix、Roku、HubSpot、Nike、AG1などの広告から合わせて毎月100万ドル超を稼いでいると書く。2026年1月のレポート「The State of Newsletters 2026」によれば、2025年の広告ネットワークの月々の売上の合計は2024年の倍になり、有料購読は書き手に1,900万ドル（2024年は800万ドル）をもたらし、Boostsは書き手の稼ぎ全体の5%を占めた。有料のおすすめ（旧Boosts）では、読者を集めたい側が検証を通った購読者1人あたりの単価（CPA）を決め、その20%が運営とStripeの費用として価格に含まれる。ヘルプ記事の例では、払う側が2.50ドル、推した側が受け取るのが2ドルで、払う側が先に入れる資金は20ドルからだ。料金ページのスライダーが示す有料プランの値段と、広告収益の平均は次の通りだった（値段は年払いの月あたりで料金ページのMarkdown版から、広告収益の平均は当サイトが料金ページのJavaScriptから読み取った値）。
:::

| 購読者数（上限） | Lite（年払い・月あたり） | Pro（年払い・月あたり） | 料金ページの広告収益の平均 |
| --- | --- | --- | --- |
| 1,000 | 49ドル | 95ドル | 表示なし |
| 2,500 | 69ドル | 129ドル | 月39ドル |
| 5,000 | 95ドル | 169ドル | 月78ドル |
| 10,000 | 119ドル | 199ドル | 月128ドル |
| 25,000 | 169ドル | 299ドル | 月180ドル |
| 50,000 | 249ドル | 399ドル | 月255ドル |
| 75,000 | 329ドル | 499ドル | 月355ドル |
| 100,000 | 399ドル | 599ドル | 月400ドル |
| 150,000 | — | 689ドル | 月600ドル |
| 200,000 | — | 779ドル | 月620ドル |
| 250,000以上 | — | 869ドル | 月2,300ドル |

:::guess
1万人から10万人までの5つの段階では、広告収益の平均がLiteの年払いの月額をわずかに上回り（10万人では399ドルに対して400ドル）、25万人以上ではProの869ドルに対して2,300ドルになる。料金を広告で取り戻せるように見せるこの並べ方は、Denk氏の「払う額より多く稼ぐ利用者の数」という指標を、新しい客への約束に変えたものと読める。ただし、平均は大きく稼ぐ一部のニュースレターに引っ張られている可能性があり、Ad NetworkのFAQも、見込みの支払額は保証された額ではないと書く。会社の側から見れば、広告ネットワークは広告主への請求と書き手への支払いの単価の差で、有料のおすすめは20%の手数料（Stripeの費用も含む）で稼ぐ仕組みとみられ、どちらも書き手の稼ぎが増えるほどbeehiivの取り分も増える。購読料から取らない分を、ネットワークを流れるお金から取る設計と推測される。
:::

## ビジネスモデル

稼ぎ方の柱は、購読者数に応じて上がるプランの料金と、広告ネットワークや有料のおすすめのように、書き手と広告主、書き手どうしの間を流れるお金だ。有料購読とデジタル商品の売上からは取らない。

:::fact
2023年6月21日のシリーズAの記事は、継続課金のSaaSの売上のほかに、広告ネットワーク、Boosts、講座という3つの売上の柱があると書いた。同じ記事は、最初の12か月は顧客の獲得に1ドルも使わず、月々の伸びの約90%はお金をかけない自然な伸びだとも書く。売上は、2022年12月の約9万ドル（2023年11月16日のCEOのブログ）から、2023年6月のランレート400万ドル、2023年通年で約700万ドルの見込み、2024年11月の月約200万ドル、2025年7月のARR2,000万ドル突破を経て、2025年11月に年換算3,200万ドルになった。2026年9月24日掲載の求人は、ARR3,000万ドル超、前年比100%の成長と書く。2025年11月19日のブログによれば、利用者がbeehiivの中で稼いだ額は累計4,500万ドル超で、自分で取ってきたスポンサー契約のように、beehiivの外で決済されるがbeehiivの上で生まれた稼ぎは1億ドル超と見積もる。公式のパートナーのページ（2026-10-11確認）によれば、紹介した有料の客の売上の最大60%を1年間、毎月受け取れる紹介制度があり、最初の成約でBronze（50%）になり、累計の成約数に応じてSilver（55%）、Gold（60%）へ上がる。クッキーは60日、紹介された側は14日間の試用と最初の3か月の20%引きを受け、支払いは毎月15日にDub.coを通じて行われ、これまでにパートナーへ200万ドル超が支払われた。BingやGoogleへの検索広告（特にブランド名やドメイン名）は禁じられ、MetaやLinkedInなどの広告は認められている。
:::

:::guess
値段が書き手の売上ではなく購読者の数で決まる以上、有料購読で稼ぐ書き手ほど、beehiivへの支払いは売上に比べて軽くなる。[Ghost](/ja/articles/ghost)と同じ0%を掲げながら、beehiivは取らなかった分を、広告ネットワークと有料のおすすめという、ネットワークの手数料で取り戻しにいくと読める。紹介制度で最大60%を1年払うのは、有料の客を広告費で買う代わりに、すでに読者を持つ書き手やエージェンシーに営業を任せる設計とみられ、最初の1年は獲得に1ドルも使わなかったと書いた会社らしい選択と推測される。Webサイト、ポッドキャスト、コミュニティ、デジタル商品をすべてのプランに含め、デジタル商品の売上からも取らないのは、書き手の仕事を1か所に集めて乗り換えの手間を大きくし、プランの料金とネットワークの手数料の両方を長く受け取るための布石とみられる。
:::

2021年にMorning Brewの技術を誰でも使える形にしようと始まったbeehiivは、購読料から取り分を取らないまま、広告ネットワークと有料のおすすめで書き手の財布を太らせることを売り物にし、年換算3,200万ドルの会社になった。Webサイト、ポッドキャスト、コミュニティ、デジタル商品と守備範囲を広げ、MCPとAI Crawl Controlで、AIに使われる入口とAIに読まれる入口の両方を押さえにいく。料金表の横に並べた広告収益の平均が、どれだけの書き手にとって現実の数字になるかが、この設計の答え合わせになる。
