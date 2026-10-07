---
service: "PayPay"
title: "74.6 Million Registered Users, ¥5.39 Trillion in Quarterly Payment GMV, Merchant Fees of 1.60% or 1.98%, and a Nasdaq Listing in March 2026 — Dissecting PayPay, the QR Code Wallet That Lost Money Every Year Through March 2024 and Is Now Spreading Into Banking, Securities and Insurance"
description: "PayPay, the QR code payment app launched in Japan in 2018, had 74.6 million registered users and 41.7 million users paying at least once a month at the end of June 2026, and listed its American depositary shares on Nasdaq (ticker PAYP) on March 12, 2026. Its operator, PayPay Corporation, is a company in which SoftBank Group may be deemed to hold 90.62% of the voting power. Total revenue for the fiscal year ended March 2026 was ¥380.7 billion (up 27%) and profit was ¥117.8 billion, after a loss in every year from its founding through the year ended March 2024. Merchants pay a 1.60% fee on a ¥1,980-a-month plan or 1.98% on the free plan (both before tax). Using the annual report on Form 20-F, earnings releases and presentations, the merchant pricing page, user notices, the official product blog, conference slides and this site's own observations, the article dissects a platform of Java and Node.js microservices that is adding Rust piece by piece, the 2026 rule changes that tie points to identity verification, and a business that is stretching from payments into banking, securities and life insurance."
lead: "PayPay's annual report says the company recorded a loss every year from its founding through the fiscal year ended March 2024. The QR code wallet spread by charging small and medium-sized merchants no fees until October 2021 and spending heavily on promotions; in the fiscal year ended March 2026 it earned ¥380.7 billion in revenue and ¥117.8 billion in profit, and listed on a US stock exchange. What the company now pitches is less payments than a path: layering cards, banking, securities and insurance onto the more than 70 million users that payments brought in. This article dissects, from public information alone, how that reshaping shows up in pricing, technology and results."
category: consumer-app
tags: [fintech, payments, mobile-app, points, ipo, microservices, rust, kafka]
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastVerified: "2026-10-07"
serviceUrl: "https://paypay.ne.jp/"
# Affiliate link placeholder: the official site shows no consumer affiliate program for the PayPay
# app (checked 2026-10-07 on paypay.ne.jp and the merchant pages). Third-party affiliate directories
# report merchant sign-up (PayPay加盟店) programs on several ASPs, which this site could not verify
# without an ASP account. If the owner joins one, copy the ad code as provided (url, impressionUrl
# and the material's exact text as label). Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://px.a8.net/<paypay-merchant-material>"
#   program: "PayPay"
vendor: "PayPay Corporation (SoftBank Group)"
origin: "JP"
heroTheme: "paypay"
scores: { product: 4.5, ux: 4.0, tech: 4.0, business: 4.5 }
techStack:
  - layer: "Application platform"
    name: "Java + Spring Boot / Node.js / Kubernetes (on AWS)"
    confidence: confirmed
    evidence: "PayPay's product blog post on its system (2019-04-19) states that PayPay runs a Kubernetes cluster on AWS, with microservices split into seven components and implemented mainly in Java with Spring Boot, plus some Scala and Node.js. A post of 2025-02-19 also says that \"since day one, PayPay has been powered by Java and NodeJS\""
    evidenceUrl: "https://blog.paypay.ne.jp/en/about-the-paypay-stack/"
  - layer: "API gateway"
    name: "Rust (Actix Web sidecar) + Nginx + Lua"
    confidence: confirmed
    evidence: "PayPay's product blog post \"Scaling PayPay with Rust\" (2025-02-19) states that a Rust sidecar called \"proxy companion,\" written with Actix Web, was placed in each Pod of the Nginx API gateway (rate limiting in Lua) to take over common logic such as authentication and header normalization, cutting CPU from 1.5 to 0.15 versus Java and from 40 to 2.4 versus Node.js"
    evidenceUrl: "https://blog.paypay.ne.jp/en/scaling-paypay-with-rust/"
  - layer: "Payment database"
    name: "TiDB (payment microservice, migrated from Amazon Aurora)"
    confidence: confirmed
    evidence: "The conference deck \"TiDB at PayPay\" on PayPay's official Speaker Deck account (2020-06-26) states that the microservices used Spring Boot with MySQL (Amazon Aurora), that growth in users and merchants made Aurora a bottleneck for the Payment microservice, that PayPay chose TiDB for MySQL compatibility and horizontal scaling, and that it operates TiDB on EKS with Terraform, Helm and tidb-operator"
    evidenceUrl: "https://speakerdeck.com/paypay/tidb-at-paypay-why-we-chose-and-how-we-operate"
  - layer: "Data stores and messaging"
    name: "Amazon RDS for MySQL / Apache Kafka"
    confidence: confirmed
    evidence: "The 2019-04-19 post states that each microservice has its own Amazon RDS (MySQL) instance and that Apache Kafka carries messaging and log transfer between services, listing New Relic, Datadog and PagerDuty for monitoring"
    evidenceUrl: "https://blog.paypay.ne.jp/en/about-the-paypay-stack/"
  - layer: "Card business data pipeline"
    name: "Amazon MSK + AWS Glue (Spark)"
    confidence: confirmed
    evidence: "PayPay's product blog (2025-11-05) states that PayPay Card runs a multi-tenant Kafka cluster on Amazon MSK, and that daily loads of 2GB+ CSV files from AWS Glue (Spark) pushed producer latency for unrelated workloads from under 10 ms to over 800 ms until parallelism, zstd compression and linger.ms were tuned"
    evidenceUrl: "https://blog.paypay.ne.jp/en/kafka-burst-latency-how-we-optimised-aws-glue-with-msk-ingestion/"
  - layer: "Merchant tools and fraud prevention"
    name: "Paytm Labs software (licensed)"
    confidence: confirmed
    evidence: "PayPay's annual report on Form 20-F (filed 2026-06-30) states that Paytm Labs Inc. has granted licenses to software used for the PayPay My Store service and for fraud prevention and marketing solutions, and that LY Corporation licenses the software needed for the credit card merchant acquiring business"
    evidenceUrl: "https://ir.paypay.ne.jp/assets/20-F_-_Paypay_Corp_-_06-30-2026.pdf"
  - layer: "Delivery"
    name: "Amazon CloudFront + nginx (paypay.ne.jp)"
    confidence: likely
    evidence: "This site's own observation (2026-10-07) found paypay.ne.jp returning server: nginx and via: CloudFront (x-amz-cf-pop: NRT57), with x-cache-status and x-cached headers indicating cache state"
sources:
  - label: "PayPay Corporation: Annual Report on Form 20-F (2026-06-30)"
    url: "https://ir.paypay.ne.jp/assets/20-F_-_Paypay_Corp_-_06-30-2026.pdf"
    accessedAt: "2026-10-07"
  - label: "PayPay Corporation: First Quarter Ended June 30, 2026 Financial Results (2026-07-31)"
    url: "https://ir.paypay.ne.jp/assets/fy2026q1earnings/PayPay_FY2026Q1%20Earnings%20Release.pdf"
    accessedAt: "2026-10-07"
  - label: "PayPay Corporation: FY2026 Q1 Earnings Presentation (2026-07-31)"
    url: "https://ir.paypay.ne.jp/assets/fy2026q1earnings/PayPay_FY2026Q1%20Earnings%20Presentation.pdf"
    accessedAt: "2026-10-07"
  - label: "PayPay Corporation: FY2026 Q1 Prepared Remarks (2026-07-31)"
    url: "https://ir.paypay.ne.jp/assets/fy2026q1earnings/PayPay_FY2026Q1%20Prepared%20Remarks.pdf"
    accessedAt: "2026-10-07"
  - label: "PayPay Corporation: Fourth Quarter and Full Year ended March 31, 2026 Financial Results (2026-05-07)"
    url: "https://ir.paypay.ne.jp/assets/fy2025q4earnings/FY2025Q4%20Earnings%20Release.pdf"
    accessedAt: "2026-10-07"
  - label: "PayPay (for merchants): Fees and payout cycle"
    url: "https://paypay.ne.jp/store/cost/"
    accessedAt: "2026-10-07"
  - label: "PayPay notice: Continuing to use other companies' credit cards (2026-07-01)"
    url: "https://paypay.ne.jp/notice/20260701/c-card_voucher/"
    accessedAt: "2026-10-07"
  - label: "PayPay Product Blog: About the PayPay stack (2019-04-19)"
    url: "https://blog.paypay.ne.jp/en/about-the-paypay-stack/"
    accessedAt: "2026-10-07"
  - label: "PayPay Product Blog: Scaling PayPay with Rust (2025-02-19)"
    url: "https://blog.paypay.ne.jp/en/scaling-paypay-with-rust/"
    accessedAt: "2026-10-07"
  - label: "PayPay Product Blog: Kafka Burst Latency: How We Optimized AWS Glue with MSK Ingestion (2025-11-05)"
    url: "https://blog.paypay.ne.jp/en/kafka-burst-latency-how-we-optimised-aws-glue-with-msk-ingestion/"
    accessedAt: "2026-10-07"
  - label: "PayPay (Speaker Deck): TiDB at PayPay : Why we chose & How we operate (2020-06-26)"
    url: "https://speakerdeck.com/paypay/tidb-at-paypay-why-we-chose-and-how-we-operate"
    accessedAt: "2026-10-07"
---

PayPay is a payment app: you pay by scanning a QR code with your smartphone or by showing one. Launched in 2018, it became Japan's front door to paying without cash, from small neighborhood shops to utility bills. Its operator, PayPay Corporation, listed on Nasdaq in March 2026, and it now describes itself as a company that stacks credit cards, banking, securities and, soon, life insurance on top of payments. Where [Square](/en/articles/square), dissected earlier on this site, spread cashless payments from the merchant side, PayPay spread them from the user side.

## Service overview

PayPay users pay from money loaded into the app (PayPay Balance) or with "PayPay Credit" linked to a PayPay Card, send money to friends, and receive points. The group includes a card company, a bank and a securities firm that share the PayPay name, all reachable from the same app.

:::fact
According to PayPay's annual report on Form 20-F (filed June 30, 2026), the company was incorporated on June 15, 2018 as Pay Corporation and changed its name to PayPay Corporation in July 2018. It is headquartered in Shinjuku, Tokyo. Its American depositary shares (ADSs) began trading on the Nasdaq Global Select Market on March 12, 2026 (US time) under the ticker PAYP; a total of 63,235,295 ADSs, including those sold by a selling shareholder, were offered at $16 per ADS, and the company's net proceeds were about ¥94.6 billion ($603 million). As of May 31, 2026, the principal shareholders were B Holdings Corporation, owned half by SoftBank Corp. and half by LY Corporation (47.07%), SVF II Piranha (DE) LLC (28.48%), SoftBank Corp. (7.54%) and LY Corporation (7.54%), and SoftBank Group may be deemed to beneficially own 90.62% of the voting power. Consolidated headcount was 4,567 at the end of March 2026.
:::

:::fact
According to the same report, PayPay had about 73 million registered users at the end of March 2026, equal to 78% of smartphone users in Japan. In 2025 it accounted for 65% of code-based payment GMV in Japan, and its code payments made up 20% of the roughly 43.5 billion cashless transactions in the country. It handled about 523 million peer-to-peer transfers in 2025, 98% of code-based P2P transfers. According to the earnings release for the first quarter of the fiscal year ending March 2027 (July 31, 2026), registered users reached 74.6 million at the end of June 2026 and monthly transacting users (MTU) 41.7 million, an active rate of 56%. The CEO's prepared remarks for the call say PayPay handles around 30 million payments a day.
:::

:::pull
A loss every year from its founding through March 2024. Payments spread by waiving fees became the front door for selling finance to more than 70 million users.
:::

::scorecard

## UX analysis

PayPay's experience was built so that a shop can start without buying anything and a user can pay just by opening the app. In 2026, identity verification and card conditions are being built into that front door.

- **Either side can scan.** According to the annual report, users pay by showing a code generated in the app for the merchant to scan, or by scanning the merchant's PayPay code. With a printed code, merchants can start without buying hardware, and merchant support runs 24 hours a day, 365 days a year.
- **Points in exchange for identity verification.** According to the earnings release, PayPay overhauled its points program on June 2, 2026: identity verification (eKYC) became a condition for earning points, payments made with PayPay Points stopped earning points, and the PayPay Card Gold bonus of +0.5% of spending was replaced with an "Annual Usage Benefit" of 11,000 points for members who spend ¥1 million or more a year. eKYC-verified users reached 42.5 million at the end of June, up 1.9 million from the previous quarter. The company says the impact on user retention and GMV stayed within expectations and that costs fell by about ¥1 billion in June alone.
- **Other companies' cards through "vouchers."** According to a PayPay notice (2026-07-01), credit cards other than PayPay Card are now used by buying an "other company card voucher" introduced on July 1, 2026 (in ¥10,000 units up to ¥250,000, Visa and Mastercard only, with no extra fee), and the previous payment method is scheduled to end at the end of August 2026. Personal cards issued by Sumitomo Mitsui Card keep the old method. The earnings presentation labels the change "Deficit Eliminated" and shows other companies' cards accounting for 1.4% of QR GMV (¥15.5 trillion in the fiscal year ended March 2026).
- **The de facto standard for sending money.** With 98% of code-based P2P transfers going through PayPay, uses such as splitting bills or handing children their allowance bring users back to the app independently of shopping.
- **The weak spot is how fast the rules change.** Point conditions, card handling and fee structures change every few months, and users and merchants have to rethink how they use PayPay each time. Users who came mainly for points are likely to feel these changes the most.

## Tech stack

::techstack

:::fact
PayPay's product blog (2019-04-19) introduced its overall system as the one supporting the much-discussed "¥10 billion campaign." According to that post, PayPay runs as a collection of microservices on a Kubernetes cluster on AWS, split into seven components (an app backend-for-frontend, payment, wallet balance, user, risk, merchant and campaign management), with the payment component alone made up of a dozen or so microservices. Systems are written mainly in Java with Spring Boot, with some in Scala and Node.js; each microservice has its own Amazon RDS (MySQL) instance, with ElastiCache for caching and Apache Kafka for messaging between services. A conference deck dated June 26, 2020 on PayPay's official Speaker Deck account explains that by April 2020, one year and seven months after launch, users had passed 28 million, and as transactions per second grew, Amazon Aurora became a bottleneck for the payment microservice; PayPay chose TiDB for MySQL compatibility and horizontal scaling, and in testing it handled three times as many transactions as Aurora.
:::

:::fact
According to "Scaling PayPay with Rust" (February 19, 2025), PayPay has run on Java and Node.js since day one, but as it grew, CPU and memory use on Kubernetes and server costs rose, and in late 2023 it compared GraalVM, Go, Rust and others and chose Rust. In the first trial it placed a Rust sidecar called "proxy companion," written with Actix Web, in each Pod of the Nginx API gateway and moved common logic such as authentication and header normalization into it. For a low-traffic feature, Java's 1.5 CPUs and 6 GB of memory became Rust's 0.15 CPUs and 75 MB; for the next feature, Node.js's 40 CPUs and 24 GB became 2.4 CPUs and 240 MB, and average latency fell by nearly 30%. A post of November 5, 2025 describes how PayPay Card, which runs a shared Kafka cluster on Amazon MSK, solved latency spikes caused by daily bulk loads from AWS Glue (Spark) by tuning parallelism and enabling zstd compression. The annual report describes the platform as cloud-native and microservice-based, and says that at the end of March 2026 about 48% of the combined employees of PayPay Corporation and PayPay India were engaged in product and technology development, representing people across 48 countries. PayPay licenses software from Paytm Labs for PayPay My Store and for fraud prevention and marketing. This site's own observation (2026-10-07) found paypay.ne.jp returning server: nginx with CloudFront.
:::

:::guess
PayPay's platform appears to have evolved not by rewriting but by replacing the parts where cost or performance limits became visible. The payment database, where writes concentrate, moved from Aurora to TiDB, and the common logic of the gateways that receive all traffic moved from Java and Node.js into Rust sidecars. Both follow the same pattern of leaving how applications are written unchanged and swapping out only the heaviest part, presumably a practical way to migrate without stopping a system that processes 30 million payments a day. That the 2019 post presented this design as the system behind the "¥10 billion campaign" suggests the early decision to prioritize surviving explosive growth, with microservices each team could build independently and proven Java, still forms the foundation today.
:::

## Business model

Revenue comes from two segments: the Payment segment, which includes payment fees from merchants and interest and fees from cards, and the Financial Service segment for banking and securities. Paying with the app stays free for users; the more often and the more they pay, the more fees and financial transactions there are.

:::fact
According to the merchant pricing page (checked 2026-10-07, before tax), the payment system fee is 1.60% for merchants that subscribe all physical stores to the "PayPay My Store Light Plan" at ¥1,980 a month per store, and 1.98% otherwise, with no initial or hardware costs. Transactions using PayPay Coupons carry a separate fee of 3% of the transaction amount. Payouts are free once a month (closing at month-end, deposited as early as the next day), while the early payout service costs 0.38% of the amount plus ¥20 for PayPay Bank or ¥200 for other banks. According to the annual report, PayPay charged small and medium-sized merchants no payment fees until October 2021 and has collected fees from all merchants since. In the fiscal year ended March 2026, payment settlement fees accounted for 61.5% of the Payment segment's revenue.
:::

:::fact
According to the earnings release, total revenue for the fiscal year ended March 2026 was ¥380.7 billion (up 27%) and profit for the year ¥117.8 billion (up 201%), including a one-time tax benefit of ¥57.5 billion from the recognition of deferred tax assets. Adjusted EBITDA was ¥111.1 billion. The annual report says the company recorded a loss every year from its founding through the fiscal year ended March 2024. In the first quarter of the fiscal year ending March 2027 (April–June 2026), total revenue was ¥109.8 billion (up 27% year over year), with the Payment segment at ¥88.6 billion (up 25%) and the Financial Service segment at ¥22.5 billion (up 44%). Payment segment GMV was ¥5.39 trillion (up 23%), and the take rate, revenue divided by GMV, was 1.64%. Profit was ¥19.7 billion (up 83%) and adjusted EBITDA ¥37.4 billion (a 34% margin). The company raised its full-year guidance to ¥465–473 billion in revenue and ¥149–155 billion in adjusted EBITDA.
:::

:::fact
Financial services have grown since PayPay Bank and PayPay Securities became consolidated subsidiaries in April 2025. At the end of June 2026, PayPay Bank had 10.2 million accounts, ¥2.3 trillion in deposits and ¥1.3 trillion in loans (up 37% year over year), and PayPay Securities had 1.82 million accounts. In June 2026 PayPay agreed to acquire 70.2% of the voting rights of T&D Financial Life Insurance for an estimated total cost of about ¥134.3 billion, with closing expected on October 1, 2027. On July 31 it announced a capital and business alliance with Seven & i Holdings, connecting about 22,000 stores and about 20 million daily store visits with PayPay's roughly 75 million users. The annual report also says PayPay is evaluating a new company, with capital from Visa, to roll out a digital wallet in the United States.
:::

:::guess
PayPay's business appears to be shifting from earning profit on payment fees toward using payments as a daily touchpoint for selling financial products. The take rate barely moves in the 1.6% range, while Financial Service revenue grew 44% year over year. The transaction records of users and merchants gathered through payments can feed card underwriting, lending to merchants and the design of life insurance products. Making identity verification a condition for points in 2026 is presumably both a fraud measure and a way to lower the friction of opening bank and securities accounts, smoothing the path into financial products.
:::

:::guess
Moving other companies' credit cards to vouchers appears to rest on the calculation that steering usage toward its own PayPay Card and PayPay Credit is more profitable than paying fees to accept other issuers' cards. The earnings presentation's figure of 1.4% for other cards, and its description of the change as eliminating a deficit, can also be read as rebalancing convenience against profitability in favor of its own cards. With SoftBank Group holding about 90% of the voting power, though, the question of how PayPay stays neutral for users and merchants outside the group, as ties to SoftBank's mobile plans and LY Corporation's services deepen, is likely to keep coming up for a listed company.
:::

The QR code wallet that spread in 2018 on waived fees and heavy promotions lost money every year through March 2024 while winning more than 70 million users and 65% of Japan's code payments. In 2026 PayPay showed that scale to the US market, tightened the conditions on points and cards, and moved toward life insurance and a convenience-store alliance. An app that was a tool for paying is now being redesigned as a daily front door for selling finance.
