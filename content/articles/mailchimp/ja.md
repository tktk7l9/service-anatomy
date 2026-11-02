---
service: "Mailchimp"
title: "120億ドルで買われ、伸びる会社から稼ぐ会社へ — 配信停止した人まで数える料金表の上で、売上12.7億ドル・利益率47.5%を出すMailchimpを解剖する"
description: "Mailchimpは2001年にアトランタで生まれ、2021年にIntuitが約120億ドルで買収したメールマーケティングの基盤だ。料金は保存した連絡先の数で決まり、配信を停止した人も数に入る。Intuitの2026年度の開示では、売上は12億7,200万ドルで前年比1%減、セグメント営業利益は6億400万ドルで利益率47.5%。2026年8月からは独立の報告セグメントになり、2027年度の売上見通しは横ばいから1%減で、値上げが解約の増加を埋めると説明された。公式の料金データ、ヘルプ、開発者ドキュメント、Intuitの決算資料、Investor Dayの資料、応答ヘッダーの実観測から、連絡先を課金の単位にする設計、Omnivoreとドメイン認証による配信の守り方、Mandrillの名前を残すTransactional、そして『Monetize the base』へ移った経営を解剖する。"
lead: "Mailchimpのヘルプは、月額の料金を決める連絡先の数に、配信を停止した人も含めると書く。2021年、Intuitはこの会社に約120億ドルを払い、中小企業の成長の中心に置くと語った。5年後の2026年、Intuitの投資家向け資料の見出しは『Managing Mailchimp for stable top line and improved profitability』に変わった。売上は横ばいで、利益率は47.5%。料金表、配信の仕組み、開発者向けAPI、決算の開示を公開情報だけで読み、この変化が製品のどこに表れているかを解剖する。"
category: saas
tags: [email-marketing, marketing-automation, saas, intuit, transactional-email, deliverability]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
expires:
  - date: "2026-11-19"
    claim: "Intuitの2027年度のMailchimpの売上見通し（12億5,600万〜12億6,600万ドル）。11月19日の第1四半期決算で更新されうる"
  - date: "2026-12-31"
    claim: "Mailchimpの期間限定の提供（連絡先1万以上で最初の12か月15%引き、14日間の無料トライアル、生成AI機能の追加料金なし、Transactionalの100万通以上で12か月50%引き）。いずれも終了日の記載がない"
serviceUrl: "https://mailchimp.com/"
# Affiliate link placeholder: Mailchimp & Co (https://mailchimp.com/andco/, checked 2026-11-02) is a
# free program for agencies and freelancers. The page says members can "earn commission", and the
# partner and pro partner levels add a directory listing and "even more commission". It does not
# publish commission rates. Never invent a rate or a label. If the owner joins and the terms allow a
# tracking link, add the affiliate block here and keep the url identical in ja.md and en.md
# (parity.ts checks it).
# affiliate:
#   url: "https://<tracking-link-for-mailchimp>"
#   program: "Mailchimp & Co"
vendor: "The Rocket Science Group LLC (Intuit Inc.)"
origin: "US"
heroTheme: "mailchimp"
scores: { product: 4.0, ux: 3.5, tech: 4.0, business: 4.0 }
techStack:
  - layer: "アプリ本体"
    name: "Monolith on Kubernetes + Istio/Envoy"
    confidence: likely
    evidence: "当サイトの実観測（2026-11-02）で、mailchimp.com と login.mailchimp.com は server: istio-envoy を返し、x-envoy-decorator-operation に mailchimp-app-desired-service.mailchimp-monolith-mailchimpapp-use2-prd7（loginはprd8）.svc.cluster.local:8090 という内部のサービス名が出ていた。svc.cluster.local はKubernetesのサービス名の形式とみられる。公式の説明はなく、ヘッダーからの推定"
  - layer: "クラウド基盤"
    name: "AWS / Google Cloud (Intuit-wide)"
    confidence: confirmed
    evidence: "Intuitの2026年度の10-Kは、Mailchimpのマーケティング自動化と顧客管理を含むオンラインのサービスについて、システムの大半にAmazon Web ServicesやGoogle Cloud Platformなどのパブリッククラウドを使うと書く。Mailchimp単独の配分は開示がない。当サイトの実観測（2026-11-02）では、mailchimp.com が x-intuit-upstream-locality-region: us-east-2 と x-amzn-trace-id を返した"
    evidenceUrl: "https://investors.intuit.com/sec-filings/all-sec-filings/content/0000896878-26-000037/intu-20260731.htm"
  - layer: "CDN・ボット対策"
    name: "Akamai"
    confidence: confirmed
    evidence: "公式のサブプロセッサーの一覧にAkamaiを「アプリケーションの速度と安全性を改善する」として明記（一覧の最終更新は2024-02-29）。当サイトの実観測（2026-11-02）では、mailchimp.com が server-timing の ak_p と、Cookieの _abck と bm_sz を返し、us1.api.mailchimp.com が akamai-grn を返した"
    evidenceUrl: "https://mailchimp.com/legal/subprocessors/"
  - layer: "Marketing APIの入口"
    name: "http-interposer (Istio/Envoy)"
    confidence: likely
    evidence: "当サイトの実観測（2026-11-02）で、us1.api.mailchimp.com は server: istio-envoy と http-interposer-desired-service.mailchimp-cloud-httpinterposer-use2-prd-m2 という内部のサービス名を返した。本体のアプリとは別の名前空間から応答しているとみられる"
  - layer: "Transactional（旧Mandrill）"
    name: "mandrillapp.com (separate deployment)"
    confidence: likely
    evidence: "当サイトの実観測（2026-11-02）で、mandrillapp.com は server: nginx と mandrill-app-desired-service.mctx-mandrillapp-usw2-prd という内部のサービス名、x-intuit-upstream-locality-region: us-west-2 を返した。本体がus-east-2なのに対し、別のリージョンの別の配備に見える。開発者ドキュメントもDKIMのレコード値に dkim1.mandrillapp.com を指定する"
  - layer: "データベース"
    name: "MySQL (Percona)"
    confidence: likely
    evidence: "公式のサブプロセッサーの一覧はPerconaを「リレーショナルデータベース管理システムの改善」と記す。Perconaが公開する講演の要旨「Mailchimp Scale: a MySQL Perspective」は、数百のMySQLインスタンスを運用していると述べる（講演の時期は確認できず、現在の構成の裏付けではない）"
    evidenceUrl: "https://www.percona.com/resource/mailchimp-scale-mysql-perspective-percona-live-open-source/"
  - layer: "生成AI"
    name: "OpenAI / Microsoft (Intuit Assist)"
    confidence: confirmed
    evidence: "公式のサブプロセッサーの一覧に、OpenAIとMicrosoftを「Intuit Assistを通じてAI機能を提供する」として明記"
    evidenceUrl: "https://mailchimp.com/legal/subprocessors/"
  - layer: "SMS"
    name: "Infobip / Twilio"
    confidence: confirmed
    evidence: "公式のサブプロセッサーの一覧に、InfobipとTwilioを「SMSプログラムの提供」として明記"
    evidenceUrl: "https://mailchimp.com/legal/subprocessors/"
  - layer: "ドメイン認証の自動化"
    name: "Entri"
    confidence: confirmed
    evidence: "公式のヘルプが、DKIMとDMARCのDNSレコードの設定を自動化する方法としてEntriを推奨すると明記"
    evidenceUrl: "https://mailchimp.com/help/about-email-authentication/"
  - layer: "開発者ドキュメント"
    name: "Fern"
    confidence: confirmed
    evidence: "公式ドキュメントのMCPサーバーの設定例が、サーバー名に fern_mcp_mailchimp-docs を使う。当サイトの実観測（2026-11-02）では、mailchimp.com/developer/ が server: cloudflare と x-fern-renderer: static を返し、Markdown版の画像は mailchimp.docs.buildwithfern.com のパスを含んでいた"
    evidenceUrl: "https://mailchimp.com/developer/marketing/build/ai-tools/mcp-server.md"
sources:
  - label: "Mailchimp公式: トップページ"
    url: "https://mailchimp.com/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp公式: Marketing Pricing（プラン・FAQ・注記）"
    url: "https://mailchimp.com/pricing/marketing/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp公式: 料金ページが読み込む料金データ（日本からの閲覧・JPY）"
    url: "https://mailchimp.com/forms/pricing/?currency=JPY"
    accessedAt: "2026-11-02"
  - label: "Mailchimpヘルプ: About Mailchimp Pricing Plans"
    url: "https://mailchimp.com/help/about-mailchimp-pricing-plans/"
    accessedAt: "2026-11-02"
  - label: "Mailchimpヘルプ: About Mailchimp Pricing Tiers"
    url: "https://mailchimp.com/help/mailchimp-pricing-tiers/"
    accessedAt: "2026-11-02"
  - label: "Mailchimpヘルプ: About Additional Charges"
    url: "https://mailchimp.com/help/about-additional-charges/"
    accessedAt: "2026-11-02"
  - label: "Mailchimpヘルプ: About the Pay As You Go Plan"
    url: "https://mailchimp.com/help/about-the-pay-as-you-go-plan/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp公式: Transactional Email Pricing"
    url: "https://mailchimp.com/pricing/transactional-email/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp公式: About Mailchimp"
    url: "https://mailchimp.com/about/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp公式: Founders"
    url: "https://mailchimp.com/about/founders/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp公式: Mailchimp & Co"
    url: "https://mailchimp.com/andco/"
    accessedAt: "2026-11-02"
  - label: "Mailchimpヘルプ: About Omnivore"
    url: "https://mailchimp.com/help/about-omnivore/"
    accessedAt: "2026-11-02"
  - label: "Mailchimpヘルプ: About Email Domain Authentication"
    url: "https://mailchimp.com/help/about-email-authentication/"
    accessedAt: "2026-11-02"
  - label: "Mailchimpヘルプ: About Compliance for Email Marketing"
    url: "https://mailchimp.com/help/about-compliance-for-email-marketing/"
    accessedAt: "2026-11-02"
  - label: "Mailchimpヘルプ: My Email From Name Shows mailchimpapp.net or mcsv.net"
    url: "https://mailchimp.com/help/my-campaign-from-name-shows-mcsvnet/"
    accessedAt: "2026-11-02"
  - label: "Mailchimpヘルプ: About SMS Marketing（対応国）"
    url: "https://mailchimp.com/help/about-sms-marketing/"
    accessedAt: "2026-11-02"
  - label: "Mailchimpヘルプ: Language Settings and Preferences"
    url: "https://mailchimp.com/help/language-settings-preferences/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp公式: Sub-processors（最終更新2024-02-29）"
    url: "https://mailchimp.com/legal/subprocessors/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp公式: Security"
    url: "https://mailchimp.com/about/security/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Newsroom: Intuit names Matt Idema as new leader of Mailchimp（2025-01-13）"
    url: "https://mailchimp.com/newsroom/matt-idema-new-leader/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp: Intuit Mailchimp Unlocks a New Era of Profitable Ecommerce Marketing（2026-02-10）"
    url: "https://mailchimp.com/february-2026-release-data-driven-ecommerce-marketing/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Newsroom: Intuit Mailchimp Launches Analytics AI（2026-05-28）"
    url: "https://mailchimp.com/newsroom/introducinganalyticsai/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Developer: トップページ"
    url: "https://mailchimp.com/developer/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Developer: Authentication and Delivery（Transactional）"
    url: "https://mailchimp.com/developer/transactional/docs/authentication-delivery.md"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Developer: Reputation and Rejections（Transactional）"
    url: "https://mailchimp.com/developer/transactional/docs/reputation-rejections.md"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Developer: Quick Start（Transactional）"
    url: "https://mailchimp.com/developer/transactional/guides/quick-start.md"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Developer: How to Use Mailchimp's Transactional Messaging MCP"
    url: "https://mailchimp.com/developer/transactional/guides/how-to-use-mailchimps-transactional-messaging-mcp.md"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Developer: API structure（Marketing API）"
    url: "https://mailchimp.com/developer/marketing/api-concepts/api-structure.md"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Developer: Rate limits and timeouts（Marketing API）"
    url: "https://mailchimp.com/developer/marketing/api-concepts/rate-limits-and-timeouts.md"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Developer: MCP server（ドキュメント検索）"
    url: "https://mailchimp.com/developer/marketing/build/ai-tools/mcp-server.md"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Developer: Release Notes"
    url: "https://mailchimp.com/developer/release-notes.md"
    accessedAt: "2026-11-02"
  - label: "Intuit IR: Intuit to Acquire Mailchimp（2021-09-13）"
    url: "https://investors.intuit.com/news-events/press-releases/detail/162/intuit-to-acquire-mailchimp"
    accessedAt: "2026-11-02"
  - label: "Intuit IR: Intuit Completes Acquisition of Mailchimp（2021-11-01）"
    url: "https://investors.intuit.com/news-events/press-releases/detail/154/intuit-completes-acquisition-of-mailchimp"
    accessedAt: "2026-11-02"
  - label: "Intuit IR: Acquisition of Mailchimp Conference Call Remarks（2021-09-13）"
    url: "https://investors.intuit.com/_assets/_64f3415e6601d7a94d9a083d8f6622dc/intuit/db/919/9561/file/Investor-Call-Script-9-13-21-PM.pdf"
    accessedAt: "2026-11-02"
  - label: "Intuit IR: Form 10-K（2022年度）"
    url: "https://investors.intuit.com/sec-filings/all-sec-filings/content/0000896878-22-000028/intu-20220731.htm"
    accessedAt: "2026-11-02"
  - label: "Intuit IR: Form 10-K（2026年度）"
    url: "https://investors.intuit.com/sec-filings/all-sec-filings/content/0000896878-26-000037/intu-20260731.htm"
    accessedAt: "2026-11-02"
  - label: "Intuit IR: Fourth Quarter and Full Year Fiscal 2026 Results（2026-08-25）"
    url: "https://investors.intuit.com/news-events/press-releases/detail/1320/intuit-reports-fourth-quarter-and-full-year-fiscal-2026-results-sets-fiscal-2027-guidance"
    accessedAt: "2026-11-02"
  - label: "Intuit IR: Q4 FY26 Earnings Script（2026-08-25）"
    url: "https://investors.intuit.com/_assets/_622200c7c84d6028edc9773ada09f18b/intuit/db/946/10378/webcast_transcript/Q4+FY26+Earnings+Script.pdf"
    accessedAt: "2026-11-02"
  - label: "Intuit IR: Investor Day 2026 Presentation（2026-09-17）"
    url: "https://investors.intuit.com/_assets/_622200c7c84d6028edc9773ada09f18b/intuit/db/923/10406/pdf/ID_FY27_PRINT_FINAL-rev2.pdf"
    accessedAt: "2026-11-02"
  - label: "Intuit IR: 2026 Investor Day Fact Sheet"
    url: "https://investors.intuit.com/_assets/_622200c7c84d6028edc9773ada09f18b/intuit/db/1072/10401/pdf/2026+Investor+Day+Fact+Sheet+External+Ledger+Size+%2811x17%29+v3.pdf"
    accessedAt: "2026-11-02"
  - label: "Intuit IR: トップページ（第1四半期決算の日程）"
    url: "https://investors.intuit.com/"
    accessedAt: "2026-11-02"
  - label: "Percona: Mailchimp Scale: a MySQL Perspective（講演の要旨）"
    url: "https://www.percona.com/resource/mailchimp-scale-mysql-perspective-percona-live-open-source/"
    accessedAt: "2026-11-02"
---

Mailchimpは、中小企業がメールで客とつながり続けるための道具だ。読者を増やして購読料や広告で稼ぐ書き手の道具である[beehiiv](/ja/articles/beehiiv)や[Ghost](/ja/articles/ghost)とは、課金の単位からして違う。Mailchimpのメーターは、保存している連絡先の数で回る。そして2026年のIntuitの開示を読むと、この会社の立ち位置は「買って伸ばす事業」から「利益を取りにいく事業」へ移っている。製品の説明より先に、この2つの事実を押さえておくと、料金表も配信の守りも読みやすくなる。

## サービス解説

Mailchimpの料金は、機能の段階であるプランと、連絡先の数の段階を掛け合わせて決まる。プランはFree、Essentials、Standard、Premiumの4つで、これとは別に、送信ごとにクレジットを買うPay As You Goと、開発者向けのTransactionalがある。

:::fact
公式のAboutによれば、MailchimpはBen Chestnut氏とDan Kurzius氏が営んでいたWeb制作会社Rocket Science Groupの副業として始まり、2001年にアトランタで創業した。大企業向けの高価なメールソフトの代わりを小さな事業者に届ける、というのが出発点だとする。Foundersのページは、2021年に買収されるまで非公開の会社だったと書く。Intuitは2021年9月13日に買収を発表し、同じ日の投資家向け説明で、Mailchimpの2020年の売上（未監査）を約8億ドル、前年比20%増、売上の約95%が継続課金、半分超が米国外と説明した。発表は、総ユーザー1,300万、月間アクティブ240万、有料顧客80万、連絡先700億と掲げた。買収は2021年11月1日に完了し、2022年度の10-Kによれば対価の総額は120億ドルで、現金57億ドルと、約63億ドル相当のIntuit株1,010万株からなる。現金の一部には47億ドルのタームローンを充てた。
:::

:::fact
料金ページ（2026-11-02確認）が読み込む料金データは、日本からの閲覧では基準の通貨がJPYで、次の表の通りだった。同じデータの注記は、表示価格にVATは含まれず加算されること、USDを選んだ場合の表示はJPYからの換算の見積もりであることを書く。USD表示の見積もりでは、Essentialsの500人が8.19ドル、Standardの10,000人が81.91ドル、Premiumの10,000人が239.43ドルだった。月間の送信上限は連絡先の上限の10倍（Essentials）、12倍（Standard）、15倍（Premium）。ヘルプによれば、連絡先を保存できる上限はEssentialsが5万、Standardが10万、Premiumが20万で、それを超えると個別のプランになる。
:::

| 連絡先の上限 | Essentials（月額） | Standard（月額） | Premium（月額） |
| --- | --- | --- | --- |
| 500 | 1,300円 | 1,900円 | — |
| 2,500 | 3,800円 | 6,300円 | — |
| 10,000 | 9,500円 | 13,000円 | 38,000円 |
| 15,000 | 16,000円 | 20,000円 | 45,000円 |
| 50,000 | 33,000円 | 38,000円 | 76,000円 |
| 100,000 | — | 63,000円 | 89,000円 |
| 200,000 | — | — | 143,000円 |

:::fact
Freeは連絡先250、月500通、1日250通までで、ヘルプによれば連絡先が250を超えると、本番のメールもテストのメールも止まる。作業の続きと連絡先の収集はできる。料金ページの比較表によれば、Freeは自動化のフローなし、1シート、1オーディエンス、Mailchimpのブランド表示は消せず、サポートは最初の30日のメールのみ。Essentialsは4ステップまでのフローと3シート、Standardは最大200フロー、5シート、生成AI機能、Premiumはシート無制限、電話と優先サポート、エンタープライズSSOが加わる。Standardは1回、Premiumは4回のオンボーディングの枠があり、注記によれば提供の言語は英語などに限られる。連絡先が1万以上なら最初の12か月が15%引きになり、EssentialsとStandardには14日間の無料トライアルがある。どちらも注記に「期間限定」とあり、終了日の記載はない。非営利団体には15%の割引がある。Pay As You Goはメール1通を1クレジットで買う方式で、機能はEssentials相当、クレジットの有効期限は12か月で、バウンスしたメールやコンプライアンスの審査で止まったメールにも消費される。
:::

:::fact
顧客の数の表現は、公式のページの間で揃っていない。開発者向けのトップページは1,400万（Trusted by fourteen million customers）、Mailchimp & Coのページは1,300万、トップページは1,100万の事業者と書く。発表の時期が違う可能性があり、どれが現在の数字かは確認できなかった。料金ページの「#1」の表現は、競合の顧客数についての2023年12月時点の公開データに基づくと注記され、Standardプランの「最大27倍のROI」は、2024年12月から2025年11月の、利用者のメールに帰属させたeコマースの売上に基づくと注記される。
:::

:::guess
連絡先1人あたりの月額を計算すると、Standardは500人で3.8円、100,000人で0.63円まで下がる。一方でEssentialsの10,000人から15,000人の段階は、連絡先が1.5倍で料金が約1.7倍になり、1人あたりが0.95円から1.07円へ上がる。10,000人の段階でPremiumはStandardの約2.9倍だが、100,000人では約1.4倍まで縮まる。リストが1万を超えたあたりで上位のプランへ移らせ、さらに大きな客にはPremiumの割高感を薄める階段に見える。連絡先1万以上にだけ15%引きを出しているのも、この層を取りにいく動きと読める。
:::

:::pull
連絡先1万人の客は、Mailchimpにとって最も値段を作りやすい場所に立っている。割引の条件も、Premiumへの移行も、そこから始まる。
:::

::scorecard

## UX分析

Mailchimpの体験は、はじめてメールを送る人を迷わせず、送信の失敗を早い段階で止めることに重心がある。その代わり、請求の考え方は慣れが要る。

- **配信を止めた人も料金に入る**。ヘルプは、購読中、配信停止、購読していない連絡先のすべてが上限に数えられると書く。数に入らないのは、アーカイブした連絡先、クリーニング済み、削除済みだ。請求はその月の連絡先の最大値で決まるので、月の途中で減らしても、その月の請求には反映されない。ヘルプ自身が、反応のない連絡先をセグメントで見つけてアーカイブすることを勧めている。
- **上限を超えても止まらない**。有料プランでは、連絡先か送信数の上限を超えるとサービスを止めず、追加の連絡先ブロックが請求される。Standardなら1,000連絡先のブロックに12,000通が付く。ブロックの値段はログインして上限を設定しないと表示されない。Freeは止まり、有料は課金されるという違いは、配信が止まる事故を防ぐ配慮でもあり、気づかない出費の入口でもある。この請求の方式は2019年5月15日に導入され、それ以前の有料プランはレガシーとして別の扱いだ。テストメールとTransactionalのメールも月の送信数に数えられる。
- **送る前に止める**。Omnivoreという不正防止の仕組みは、連絡先を取り込んだときや新しい宛先へ送るときに、まだ送ったことのないアドレスを調べ、バウンスや苦情が高い確率で起きると予測すれば、そのオーディエンスへの送信を止める。どのアドレスが問題かは教えてくれない。ヘルプはこれを、Mailchimpの送信の評判と利用者自身の評判を守るためと説明する。別のヘルプは、バウンス、配信停止、苦情の率を監視し、業界の基準を超えた口座に警告を出すと書く。
- **ドメイン認証へ誘導する**。Gmailとヤフーは、1日に5,000通を超えて送る送信者に独自の認証と公開されたDMARCレコードを求めている、とヘルプは書く。Mailchimpは、DKIM用のCNAME 2本とDMARC用のTXT 1本の設定を、Entriを使ってDNSの事業者に直接つないで済ませる方法を推奨し、ホーム画面のチェックリスト、バナー、メール作成中の注意書きから誘導する。バナーの例は「あなたのドメインからのメールは受信箱の74%に届かないおそれがある」というものだ。認証していないと、受信者の画面に「via mailchimpapp.net」や「on behalf of mcsv.net」が表示される。
- **AIは分析から実行へ**。2026年2月10日の発表はChatGPT連携を挙げ、5月28日の発表は、キャンペーンと売上をつないで会話で答えるAnalytics AI、自然文でセグメントを作るAI Segment Builder（ベータ）、ChatGPTとClaudeの中でキャンペーンを下書きしMailchimpで配信する連携を出した。Intuit Assistは料金ページの注記で「ベータ」「現時点では追加料金なし」「一部の国で英語のみ」とされ、StandardとPremiumの機能だ。
- **日本から使うと届かない部分がある**。ヘルプの言語の表に並ぶのは英語、スペイン語、フランス語、ポルトガル語、ドイツ語、イタリア語で、日本語はない。SMSの対応国に載るのは米国、カナダ、欧州の国々、オーストラリアで、日本は載っていない。料金が円で出るのに対し、画面とサポートは日本語を前提にしていない。

## 技術構成

::techstack

:::fact
当サイトの実観測（2026-11-02）では、mailchimp.com と login.mailchimp.com は server: istio-envoy を返し、x-envoy-decorator-operation に mailchimp-monolith-mailchimpapp-use2 を含む内部のサービス名を出していた。us1.api.mailchimp.com は mailchimp-cloud-httpinterposer-use2 を含む名前、mandrillapp.com は server: nginx と mctx-mandrillapp-usw2 を含む名前を返した。リージョンのヘッダーは、本体とAPIがus-east-2、mandrillappがus-west-2だった。mailchimp.com/developer/ は server: cloudflare と x-fern-renderer: static を返した。セキュリティのページは、Mailchimpが所有し運用するサーバーを米国のデータセンターに置くと書き、Intuitの2026年度の10-Kは、Mailchimpを含むオンラインのサービスのシステムの大半にAWSやGoogle Cloudなどを使うと書く。サブプロセッサーの一覧（最終更新2024-02-29）は、Akamai、配信と一時保存のAmazon、Googleのほか、SMSにInfobipとTwilio、AIにOpenAIとMicrosoft、データベースの改善にPercona、不正防止にE-HawkとEl Caminoを挙げる。
:::

:::guess
内部の名前に「monolith」が残っていることからは、25年分の本体を分割し切らず、大きなアプリのままKubernetesの上で動かしているとみられる。ヘッダーのリージョンの名前はAWSの命名に一致し、10-Kの説明とも合うが、Mailchimp単独のホスティングの比率は開示がない。セキュリティのページの「所有し運用するサーバー」は、古い文面が残っている可能性も、配信のサーバーだけが自前である可能性もあり、当サイトには判別できない。メールの送信基盤が自前か外部かは、一覧に専業の配信事業者が見当たらないことから自前の比重が大きいと推測されるが、公式の説明は確認できなかった。機能フラグの名前は、2027年度に値上げに関わる設定があることをうかがわせるが、内容も時期も公式の発表ではない。
:::

開発者向けの入口は2つある。自社のデータをマーケティングにつなぐMarketing APIと、注文確認やパスワード再設定を送るTransactionalだ。後者には、旧名のMandrillが、ドメインやDNSのレコード値として今も残っている。

:::fact
Marketing APIのルートは `https://api.mailchimp.com/3.0/` で、OpenAPIで定義され、APIキーとOAuth 2に対応する。同時接続はユーザーあたり10で、APIキーやクライアント単位ではなく、顧客ごとの引き上げはできない。呼び出しのタイムアウトは120秒で、長い処理はBatchエンドポイントへ回すよう案内される。開発者のページによれば、Transactional（旧Mandrill）はAPIかSMTPで送り、Node、PHP、Ruby、Pythonの例が載る。料金は2.5万通を1ブロックとする形で、1〜20ブロックは1ブロック20ドル、161ブロック以上は10ドル、専用IPは月29.95ドル。余った分は翌月に繰り越されず、ブロックが尽きると送信が止まる。使うにはStandard以上が要り、Essentialsは対象外だが、新規の利用者は認証済みのドメインに500通まで無料で試せる。デモの口座は1時間25通に制限される。100万通以上の新規の利用者には12か月50%引きの提供があり、終了日の記載はない。料金ページは「99%のメールが1秒未満で受信箱に届く」と書くが、算定の方法は確認できなかった。
:::

:::fact
Transactionalのドキュメントによれば、未認証のドメインや、有効なDMARCとDKIMがないドメインからは送れない。DMARCは `p=none` でよい。2024年3月15日に始まったこの要件は、GoogleとYahooの新しい送信要件への対応で、当時のリリースノートは、満たさない場合は `mandrillapp.com` のサブドメインから送られると書いた。口座ごとにPoor、Good、Excellentの評判があり、苦情、バウンス、配信停止、内容の審査の失敗などから決まる。評判と普段の送信量が1時間あたりの上限を決め、超えた分はバックログに入り、48時間で消える。苦情率は業界の目安の0.1%未満を勧め、苦情は最も重く見る要素の1つだという。バウンスや苦情のあった宛先は拒否リストに入り、以後は送られない。既定では共有のIPから送られ、専用IPは少なくとも週3日、1日5,000通以上送る場合に検討する価値があるとし、送信量が少ないと逆効果になるとも書く。ウォームアップは約1か月かけて自動で行う。
:::

:::fact
AIエージェントの入口は3つに分かれている。開発者ドキュメント自体のMCPサーバーは、公開の文書を検索するだけで、Mailchimpの口座は操作できないと明記される。`https://mandrillapp.com/mcp` のTransactionalのMCPは、API呼び出し、テンプレートの作成、送信の失敗の診断など9つのツールを持つ。マーケティング側の口座操作については、APIを直接呼ぶか、Agent skillsを使うよう案内される。
:::

## 『買って伸ばす』から『基盤から稼ぐ』へ

:::fact
Intuitの2026-09-17のInvestor Dayの資料と同時期のファクトシートによれば、Mailchimpの売上は2024年度が12億6,700万ドル、2025年度が12億8,700万ドル、2026年度が12億7,200万ドルだった（年度は7月末まで）。組み替え後のセグメント営業利益は5億1,600万ドル、5億4,800万ドル、6億400万ドルで、利益率は41%、43%、47%。資料は2026年度の利益率を47.5%、前年比4.9ポイント増とし、「コスト構造を売上の形に合わせた」と説明する。この数字には開発と顧客対応の費用が組み替えで入っているが、10-Kによれば株式報酬や買収の償却は全社の未配分の項目に置かれる。顧客1人あたりの年間売上（ARPC）は、2023年度から順に1,298ドル、1,298ドル、1,277ドル、1,278ドルで、資料の注記は「Managed for profitability」。全社の2026年度の売上は214億4,800万ドルで、Online Ecosystemの伸びは含めて19%、Mailchimpを除くと23%だった。
:::

| 年度 | 売上 | セグメント営業利益 | 利益率 | ARPC |
| --- | --- | --- | --- | --- |
| 2024 | 12億6,700万ドル | 5億1,600万ドル | 41% | 1,298ドル |
| 2025 | 12億8,700万ドル | 5億4,800万ドル | 43% | 1,277ドル |
| 2026 | 12億7,200万ドル | 6億400万ドル | 47% | 1,278ドル |

:::fact
2026年8月25日の決算発表によれば、Intuitは2026年8月1日からMailchimpをGlobal Business Solutionsから切り離して別の事業セグメントとして管理し、2027年度から独立の報告セグメントにする。2027年度の売上見通しは12億5,600万〜12億6,600万ドルで、前年比1%減から横ばい。決算説明の原稿は、第4四半期の売上は前年比でわずかに減少し、2027年度は実質的な値上げが解約の増加を相殺する見込みで、Mailchimpの価値を最大化し強い収益性を出すことに集中すると述べる。Investor Dayの資料が挙げる2027年度の優先事項は、独立のセグメントとしての責任、「Monetize the base」（転換、拡大、価値に基づく価格設定、高価値顧客の維持）、販売費を単位経済性で管理して利益と現金を増やすこと。別のページは、Sales-Assistedの中堅市場で高価値の新規予約の月次売上が前年比9%増、SMSの有料顧客が35%増でSMSの客は平均11%多く払う、と掲げる。次の決算は2026年11月19日の予定だ。
:::

:::guess
売上をARPCで割ると、2026年度の平均の顧客数はおよそ100万となり、2021年の発表の有料顧客80万より多い。公式が掲げる1,100万〜1,400万という数字の大半は、有料でない利用者や過去の利用者を含むとみられる。ARPCが動かないまま売上が横ばいなのは、新しく入る客も出ていく客も大きく変わらず、値上げの効果を解約が打ち消している状態と読める。Intuitの説明の「値上げが解約の増加を相殺する」は、これをそのまま言葉にしたものに見える。

ただし、これを失敗と読むのは早い。2020年に2割伸びていた会社の売上が止まったのは事実だが、Mailchimpは6億ドル超のセグメント利益を出しており、買収の目的だったQuickBooksとの接続の価値は、このセグメントの数字だけでは測れない。買収時に語られた「顧客の獲得から入金まで」の構想は、2025年1月の新任者の発表でも繰り返された。一方で、2026年の資料の言葉は明らかに「投資」から「回収」へ寄っている。売上の12億7,200万ドルに対して買収額は120億ドルで、約9.4倍にあたる。経営の焦点が伸びから現金に移るなら、値上げの幅と解約の速さの競争になるとみられる。
:::

## ビジネスモデル

稼ぎ方の中心は、連絡先の数で上がる月額の継続課金だ。そこにSMSのクレジット、Transactionalのブロック、Premiumへの移行が上乗せされる。2021年の説明で売上の約95%が継続課金だった構造は、製品の形からも読み取れる。

:::fact
料金ページの注記によれば、SMSは有料プランのアドオンで、クレジットは毎月付与され、余っても繰り越されない。TransactionalのSMSも同じクレジットを使う。Premiumは個別の見積もりと年間プランの窓口があり、月299ドル以上の個別プランにはカスタマーサクセスが付くと注記される。2026年2月10日の発表は、Klaviyoから乗り換えた利用者の事例と、移行の道具の追加を掲げ、eコマースの客に向けて値段の低さと投資収益率を訴える。Mailchimp & Coのページは、代理店とフリーランス向けに無料のプログラムを案内し、紹介で手数料を得られ、上位の区分ほど手数料が増えるとするが、率は公開していない。Mailchimpの指導者の交代は2025年1月13日に発表され、WhatsAppのCOOなどを務めたMatt Idema氏がMailchimp担当のSVPになった。
:::

:::guess
連絡先で課金する料金表は、リストが伸びる限り売上が自動で増える仕組みで、配信停止の人まで数えることが、その増加を支えている。利用者の側から見れば、古いリストを掃除する動機になる一方、値上げのときに掃除で逃げられる余地も残る。Mailchimpがセグメントの見出しに掲げる「高価値の顧客」は、この構造で最も支払いが増える、連絡先の多いeコマースや中堅企業を指すとみられる。

配信の評判を守る仕組みがこのモデルと噛み合っている点も見逃せない。共有の送信基盤の上で、1人の悪い送信者が全員の到達率を下げるので、Omnivoreや認証の要求は、利用者を守る機能であると同時に、売り物である配信の品質を守る費用でもある。
:::

Mailchimpは、小さな店のためのメールの道具として始まり、120億ドルの買収を経て、利益率47.5%の成熟した事業になった。連絡先で回るメーターと、送る前に止める守りは、25年かけて作られたこの会社の強みだ。これから問われるのは、基盤から稼ぐという方針のもとで、値上げをどこまで積めば客が離れるのかだ。その答えは、独立のセグメントになった2027年度の開示に、四半期ごとに表れる。
