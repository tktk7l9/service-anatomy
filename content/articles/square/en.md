---
service: "Square"
title: "Thirteen Years After the White Card Reader — Square Entered Japan With Sumitomo Mitsui Card, and Now Bundles POS, Funding and AI Into One Account Behind 2.5% In-Person Fees and Next-Business-Day Payouts"
description: "In May 2013 Square landed in Japan with Sumitomo Mitsui Card as its domestic acquirer, bringing card acceptance to sole proprietors with a stamp-sized reader and a 3.25% fee. Thirteen years on, in-person fees start at 2.5% under conditions, payouts arrive the next business day for SMBC and Mizuho accounts, the hardware line runs from a ¥4,980 reader to a ¥99,980 register, and the account now includes funding of up to ¥30 million against future sales, instant transfers at 1.5%, and a free conversational AI. Parent Block, Inc.'s Square segment posted $8.45 billion in revenue and $3.94 billion in gross profit on $250 billion of payment volume in 2025. We dissect how Square is built and how it earns, from its official fee schedule and press releases, SEC filings, and our own observations."
lead: "A small white card reader born in the United States in 2009 turned a smartphone into a card terminal. The first country that company chose outside North America was Japan, where it launched on May 23, 2013 in partnership with Sumitomo Mitsui Card. In the thirteen years since, Square has changed from a card-reader company into a platform for businesses that offers point of sale, online stores, invoices, appointments, funding and an AI assistant under one account. It opens the door at ¥0 a month, takes a fee on every payment, and uses that payment data to decide who gets a loan. We dissect how a cashless platform for small shops is built and how it makes money."
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
#   program: "Square Performance Program (Moshimo Affiliate)"
vendor: "Block, Inc. (Japan entity: Square K.K.)"
origin: "US"
heroTheme: "square"
scores: { product: 4.5, ux: 4.0, tech: 4.0, business: 4.0 }
techStack:
  - layer: "Payment hardware"
    name: "Square Reader / Terminal / Handheld / Stand / Kiosk / Register (custom-designed hardware)"
    confidence: confirmed
    evidence: "The official hardware page (viewed 2026-09-30) lists six devices, from the ¥4,980 Square Reader (2nd generation) to the ¥99,980 Square Register (2nd generation), tax included. Block, Inc.'s Form 10-K for fiscal 2025 describes Square hardware as custom-designed and states that it accepts JCB and e-Money in Japan"
    evidenceUrl: "https://squareup.com/jp/ja/hardware"
  - layer: "Developer platform"
    name: "Square APIs (20+ APIs, 100+ endpoints) + Web Payments SDK + Terminal API"
    confidence: confirmed
    evidence: "The Japanese page of the developer site lists more than 20 APIs and over 100 endpoints, backend SDKs for Python, Node.js, Ruby, PHP, Java and .NET, webhooks, API logs and a GraphQL explorer. Press releases announced the API opening in Japan in May 2017, the in-app payments SDK in January 2019 and the Orders API in August 2019"
    evidenceUrl: "https://developer.squareup.com/jp/ja"
  - layer: "Android/Kotlin libraries (in-house, open source)"
    name: "OkHttp, Retrofit, Moshi, Wire, LeakCanary, Workflow, Anvil"
    confidence: confirmed
    evidence: "Block's open source site states that OkHttp and Retrofit originated at Square (Block), and square.github.io lists Moshi, Wire, LeakCanary, Workflow and Anvil (a Kotlin compiler plugin for Dagger 2). The Form 10-K also says the company regularly contributes source code it developed under open source licenses"
    evidenceUrl: "https://opensource.block.xyz/"
  - layer: "Payment security"
    name: "PCI DSS compliance + encryption from read to transmission + machine-learning fraud detection"
    confidence: confirmed
    evidence: "The official payment security page states that Square's products comply with the PCI guidelines set by the international card brands, that card-read payments are encrypted from start to finish, and that Square monitors payments across its ecosystem with machine learning to derive fraud trends"
    evidenceUrl: "https://squareup.com/jp/ja/payments/secure"
  - layer: "Edge delivery and protection"
    name: "Cloudflare"
    confidence: likely
    evidence: "Our observation (2026-09-30): squareup.com, app.squareup.com, api.squareup.com and developer.squareup.com all returned a server header of cloudflare, the cf-ray header pointed to the Narita (NRT) PoP, and each set Cloudflare's bot-management cookie (__cf_bm)"
  - layer: "API gateway and runtime"
    name: "Envoy + AWS (us-west-2)"
    confidence: likely
    evidence: "Our observation (2026-09-30): responses from api.squareup.com, connect.squareup.com and developer.squareup.com carried an x-envoy-decorator-operation header along with x-sq-dc: aws and x-sq-region: us-west-2. The header names are Square's own, and the meaning is our interpretation"
  - layer: "Marketing site"
    name: "SvelteKit + Contentful"
    confidence: likely
    evidence: "Our observation (2026-09-30): the response for squareup.com/jp/ja carried an x-sveltekit-page: true header, the HTML contained a large number of hashed svelte- class names and contentfulEntryId attributes, and images were served from Contentful's images.ctfassets.net. Consent management was OneTrust (cdn.cookielaw.org), and some assets loaded from Amazon S3 (square-production.s3.amazonaws.com) and squarecdn.com"
sources:
  - label: "Square: Processing fees (pricing)"
    url: "https://squareup.com/jp/ja/payments/our-fees"
    accessedAt: "2026-09-30"
  - label: "Square: Hardware line-up (prices)"
    url: "https://squareup.com/jp/ja/hardware"
    accessedAt: "2026-09-30"
  - label: "Square: Square launches in Japan (2013-05-23)"
    url: "https://squareup.com/jp/ja/press/jp-square-arrives-in-japan"
    accessedAt: "2026-09-30"
  - label: "Square: Strategic partnership between Square, Inc. and Sumitomo Mitsui Card (2013-05-23)"
    url: "https://squareup.com/jp/ja/press/square-partners-with-smcc"
    accessedAt: "2026-09-30"
  - label: "Square: Sumitomo Mitsui Card, Square and VJA to promote Square nationwide (2019-08-30)"
    url: "https://squareup.com/jp/ja/press/smcc-square-vja-to-partner-to-push-cashless"
    accessedAt: "2026-09-30"
  - label: "Square: Square Funding launches in Japan (2024-01-24)"
    url: "https://squareup.com/jp/ja/press/funding-japan"
    accessedAt: "2026-09-30"
  - label: "Square: Instant Transfers launch in Japan (2025-12-23)"
    url: "https://squareup.com/jp/ja/press/instant-transfers"
    accessedAt: "2026-09-30"
  - label: "Square: Square AI launches in Japan (2026-03-10)"
    url: "https://squareup.com/jp/ja/press/square-ai"
    accessedAt: "2026-09-30"
  - label: "Square: Second-generation Square Register announced (2026-03-31)"
    url: "https://squareup.com/jp/ja/press/square-register-2nd-generation"
    accessedAt: "2026-09-30"
  - label: "Square: About Square (history)"
    url: "https://squareup.com/jp/ja/about"
    accessedAt: "2026-09-30"
  - label: "Square: Affiliate program"
    url: "https://squareup.com/jp/ja/affiliate"
    accessedAt: "2026-09-30"
  - label: "Affisearch: ASPs carrying the Square affiliate program"
    url: "https://media-analytics.jp/affisearch/promotions/square"
    accessedAt: "2026-09-30"
  - label: "Block, Inc.: Form 10-K (fiscal 2025, filed with the SEC 2026-02-26)"
    url: "https://www.sec.gov/Archives/edgar/data/1512673/000162828026012254/xyz-20251231.htm"
    accessedAt: "2026-09-30"
  - label: "Block, Inc.: Form 10-Q (Q2 2026, filed with the SEC 2026-08-05)"
    url: "https://www.sec.gov/Archives/edgar/data/1512673/000162828026053368/xyz-20260630.htm"
    accessedAt: "2026-09-30"
  - label: "Block: Open Source"
    url: "https://opensource.block.xyz/"
    accessedAt: "2026-09-30"
---

For a long time, accepting cards meant a merchant-account review, a fixed terminal and a monthly fee, all bundled together. Square replaced that with a free app, a small reader that plugs into a phone, and a fee paid only when a payment happens. Thirteen years after arriving in Japan, the reader is no longer free, the hardware line has grown to six devices, the fees have come down, and lending and AI now sit behind the payments. What is free and what pays the bills is spelled out plainly in the fee schedule and the parent company's filings.

## Service overview

Square is a payments and operations platform for small and mid-sized businesses that provides card, e-money and QR code acceptance, point of sale, online stores, invoices, appointment booking and funding under a single account. It is operated by Block, Inc. (formerly Square, Inc.) in the United States and by Square K.K. in Japan.

:::fact
According to Square's press release of May 23, 2013, Square, Inc. launched its service in Japan on that day, its first market outside North America. Sumitomo Mitsui Card had invested in Square in September 2012 as the only non-US investor and had been discussing the Japanese rollout not only as acquirer but as a strategic partner. At launch the fee was 3.25% per transaction, the Square Register app and the Square Reader were free, and payouts to partner banks normally arrived the next business day. According to the company's history page, it then launched a new reader and Square Stand in Japan in 2019, online store features and e-money acceptance in 2020, Square Terminal in 2021, PayPay acceptance and appointments in 2022, Tap to Pay on Android and a restaurant POS in 2023, and Square Handheld in 2025.
:::

:::fact
According to the official pricing page (viewed 2026-09-30), there are no setup or monthly fees, and in-person processing starts at 2.5%. The 2.5% rate applies to in-person payments on the major card brands (Visa, Mastercard, American Express, JCB, Diners Club and Discover) for sellers with less than ¥30 million in annual cashless volume; otherwise the rate is 3.25% or higher, or custom pricing. Online payments through the eCommerce API cost 3.6%, invoice payments 3.25% (3.75% for manually keyed card details or automatic recurring invoices), and browser-keyed payments 3.75%. Transfers are free of charge and arrive the next business day for Sumitomo Mitsui Banking Corporation and Mizuho Bank accounts, or every Friday for other banks after a Wednesday cutoff. Sellers above ¥30 million a year can get custom pricing; the page cites a Japanese restaurant with ¥110 million in annual volume at 2.76% and a beauty retailer with ¥67 million at 2.97%.
:::

:::fact
According to the official hardware page (viewed 2026-09-30), the line-up consists of six devices, tax included: Square Reader (2nd generation) at ¥4,980, Square Stand at ¥29,980, Square Kiosk at ¥29,980, Square Terminal at ¥39,980, Square Handheld at ¥44,980 and Square Register (2nd generation) at ¥99,980. All but the reader can be paid in 12 or 24 monthly installments. According to the press release of March 31, 2026, the second-generation Register is up to 40% faster than the original, carries an IP54 dust and splash rating, and in the United States 62% of food and beverage sellers with more than $500,000 in annual volume use Square Register.
:::

:::pull
The entry point is ¥0 a month and a ¥4,980 reader. From there, Square takes 2.5 to 3.75% on every payment and turns sales that have not yet reached the bank into lending and instant transfers. A fee company has become a cash-flow company.
:::

::scorecard

## UX analysis

Square's UX is built around two ideas: you can take payments the day you sign up, and the work that follows a payment lives on the same screen. The way the pricing page is written reflects that design.

- **Show fees by payment scenario**. Four scenes, in-person, online, invoice and browser, each with a single rate and no column for a monthly fee. "Pay nothing when you do not use it" is communicated by the shape of the table itself.
- **Sell payout speed as a feature**. The condition for next-business-day payouts is written as bank names, Sumitomo Mitsui Banking Corporation or Mizuho Bank, with everything else clearly marked as weekly on Fridays. The Instant Transfer service launched on December 16, 2025 moves money to the bank in minutes for 1.5% of the amount. A restaurant in Wakayama quoted in the press release said it had always wanted to convert sales to cash before its large payments around the 10th of each month; a cash-flow pain point became a paid feature.
- **Let sellers climb a hardware ladder**. Start with the ¥4,980 reader; add Terminal if you need receipt printing, Handheld if you take orders at the table, Stand if you already own an iPad. Six rungs matched to the size and type of the shop, with installment plans published officially.
- **Put AI on the same screen at no extra charge**. Square AI, launched in Japan on March 10, 2026, is free for every Square seller and answers natural-language questions about sales and performance from the Square Dashboard app or web. A Square survey of 500 Japanese business owners cited in the release found that only 19.2% of small businesses use AI regularly and that owners spend an average of 3.66 hours a week analyzing business data.

:::guess
Writing fees and payout terms with such specific bank names and rates appears to reflect the fact that a small shop's decision comes down to two questions: how much is taken, and when does the money arrive. Every feature Square has added over thirteen years (POS, invoices, appointments, funding, AI) sits on top of the data generated by payments. A seller who uses only payments can switch on price, but the more of the register, bookings and lending that run through the same account, the more work it is to leave. The steady addition of free features is presumably meant to defend on switching cost rather than on the fee gap.
:::

## Tech stack

::techstack

:::fact
According to Block, Inc.'s Form 10-K for fiscal 2025, Square acts as both merchant of record and payment service provider for its sellers, settling funds with them and managing the associated payment risk. In that role it holds contracts with acquiring processors and card networks that, it says, often carry commercial terms not typically available to sellers contracting on their own. Its hardware is custom-designed, processes magnetic stripe, EMV chip and NFC, and accepts JCB and e-Money in Japan, Interac Flash in Canada and eftpos in Australia. The 10-K also states that the company regularly contributes source code it developed under open source licenses and has made other technology, such as AI agents, available under such licenses.
:::

:::fact
According to the Japanese page of the developer site (viewed 2026-09-30), Square publishes more than 20 APIs with over 100 endpoints, covering payments, orders, catalog, inventory, customers, bookings, invoices, subscriptions, terminals and bank accounts, plus the Web Payments SDK, backend SDKs for Python, Node.js, Ruby, PHP, Java and .NET, webhooks, API logs and a GraphQL explorer. According to the press archive, the APIs were opened in Japan on May 9, 2017, the in-app payments SDK arrived on January 10, 2019, and the Orders API for managing orders across channels was announced on August 15, 2019.
:::

:::fact
In our observation (2026-09-30), responses from squareup.com, app.squareup.com, api.squareup.com and developer.squareup.com all passed through Cloudflare, with the cf-ray header pointing to the Narita PoP. Responses from api.squareup.com and connect.squareup.com included the x-envoy-decorator-operation header set by the Envoy proxy, along with Square-specific headers x-sq-dc: aws and x-sq-region: us-west-2. The Japanese marketing site returned x-sveltekit-page: true, its HTML was densely populated with hashed Svelte class names and Contentful entry IDs, and images loaded from Contentful's delivery domain.
:::

:::guess
The x-sq-dc: aws and x-sq-region: us-west-2 headers appear to indicate that the API response was served from AWS's Oregon region. The header names are Square's own and we found no official explanation, so this is our interpretation. If Japanese sellers' payments also pass through this infrastructure, traffic received at Cloudflare's Narita PoP would be making a round trip to the US West Coast. In-person payments finish reading and encryption on the device and need only one round trip for authorization, so the distance is presumably hard to feel. Since the 10-K lists data center facilities in the San Francisco Bay Area as a seismic risk, the company appears to combine its own facilities with the cloud, but public information does not show which workloads run where.
:::

:::guess
That so much of the open source Square has published (OkHttp, Retrofit, Moshi, Wire, LeakCanary, Workflow, Anvil) consists of Android and Kotlin foundation libraries appears to show that its terminal and POS app development has long centered on Android and the JVM. Its own hardware, such as Register and Terminal, is presumably built on an Android-based app platform, though the devices' operating system is not stated in official materials.
:::

## Business model

Square earns from per-payment fees, hardware sales, software subscriptions, and lending and cash-flow services for sellers. Figures for Japan alone are not disclosed, so the overall picture comes from the Square segment of parent Block, Inc.

:::fact
According to Block, Inc.'s Form 10-K, the Square segment posted revenue of $8,451.9 million in 2025 (up 10% year over year) and segment gross profit of $3,935.0 million (up 9%). More than 4.5 million sellers made 5.9 billion transactions on Square in 2025, and Square GPV (payment volume net of refunds) was $250 billion. Revenue is disclosed as Commerce Enablement (payment processing, software and hardware) and Financial Solutions (lending, deposits and other financial services); within the Square segment the former was $7,426.0 million and the latter $1,011.1 million. Square Loans are underwritten by the company's bank subsidiary Square Financial Services (a Utah industrial loan company) using sellers' Square transaction data, and the majority are sold to third-party investors. In 2025 Square introduced a three-tier pricing package that combines software features with processing rates. Block's 2025 revenue by geography was $22,186.6 million in the United States and $2,007.1 million internationally, and no single country outside the US exceeded 10% of total revenue.
:::

:::fact
According to Block, Inc.'s Form 10-Q for the second quarter of 2026, Square segment revenue for the quarter was $2,503.6 million (up 16% year over year) and gross profit was $1,160.2 million (up 13%), with Square GPV up 13%, driven primarily by food and beverage sellers. In February 2026 the company announced a restructuring plan to reduce its workforce by more than 40%, described as aligning its organizational structure with its operating model and strategic priorities; restructuring charges for the first half of 2026 were $495.0 million. As of December 31, 2025, the company had 10,205 full-time employees worldwide, 2,472 of them outside the United States.
:::

:::fact
According to the press release of January 24, 2024, Square Funding is a mechanism in which a seller assigns a portion of its future Square sales to Square in advance and receives funds up front; it launched by invitation. No business plan or financial statements are required, review takes up to three business days, and approved funds arrive as early as the next business day. The only cost is a fixed fee set at application, and repayment is a fixed percentage automatically withheld from daily Square sales, with nothing withheld on days without sales. The official page (viewed 2026-09-30) gives an amount range of ¥15,000 to ¥30 million and a worked example: on ¥10,000 of sales, a ¥325 processing fee and a ¥1,000 funding deduction leave ¥8,675 for transfer.
:::

:::fact
According to Square's affiliate page, Square's affiliate program is currently available only through Moshimo Affiliate, and a commission is earned when a visitor creates a new account via the designated link. Tracking is done by Partnerize with cookies, and commissions are paid on the 15th of the month after they are earned. Square reviews accounts created through the program every month and may freeze or suspend accounts that operate businesses against its terms or were created for fraud, in which case no commission is paid. According to Affisearch, a third-party site that aggregates ASP listings (viewed 2026-09-30), the Moshimo commission is ¥8,000 (tax included) per account created, with an additional ¥6,500 if a Square Terminal or Handheld purchase is confirmed and ¥13,000 for a Square Register purchase, and self-referral has been excluded since November 1, 2022.
:::

:::guess
Dividing Square segment gross profit of $3.94 billion by Square GPV of $250 billion gives roughly ¥1.6 of gross profit per ¥100 processed (our calculation, including hardware and software gross profit). If that thin margin is what remains of the 2.5 to 3.75% in the Japanese fee table after the cost paid to card networks and acquirers, it is clear this is not a business that earns on payments alone. Lending and cash-flow revenue reaching $1.01 billion in 2025, up 20% year over year, appears to show that underwriting on payment data is becoming the second pillar. Launching funding in Japan in 2024 and instant transfers in 2025, one after the other, is presumably the move to bring that pillar to Japan.
:::

:::guess
A referral fee of ¥8,000 per account plus ¥6,500 to ¥13,000 for a hardware purchase amounts to 6 to 16% of the Square segment's annual gross profit per seller (about $875 from $3.94 billion divided by 4.5 million, roughly ¥130,000 at ¥150 to the dollar, our calculation). The average includes large US sellers, so the figure for a small Japanese shop is presumably lower, but a seller who has moved its register, invoices and funding onto Square tends to stay for years and pays more in fees as its volume grows, so paying part of first-year gross profit for a referral appears to be a design that holds. The extra reward for hardware purchases appears to reflect a view that sellers who buy a Terminal or Register route more of the shop's total sales through Square than those with only a reader. Excluding self-referral is presumably meant to avoid accounts created for the commission itself.
:::

What Square sells in Japan is less the card reader than the speed of "start today, get paid tomorrow" and the way the work after a payment hangs together. It spread nationwide through Sumitomo Mitsui Card's acquiring and the branch counters of VJA member regional banks, lowered its fees, stacked up free features, and turned sales not yet in the bank into material for lending and instant transfers. Even as the parent company carried out a restructuring that cut its workforce by 40%, Japan saw a second-generation Register and an AI assistant in quick succession. The transformation from a fee company into a cash-flow company, at the scale of the corner shop, is one Square has sustained longer than anyone.
