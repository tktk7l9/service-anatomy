---
service: "Rakuten Mobile"
title: "¥781 of a ¥2,921 ARPU Isn't Telecom Revenue — How Rakuten Mobile's 11 Million Lines Are Designed to Pay Back Outside the Phone Bill"
description: "Rakuten Mobile passed 11 million contracted lines on September 24, 2026. Its price moves through three tiers based on how much data you use, and even unlimited data costs ¥3,278 a month including tax (¥3,168 with the family discount). Behind that low price, the earnings materials count ¥781 of the ¥2,921 monthly revenue per line (ARPU) as the effect of subscribers spending more on Rakuten Ichiba and other Rakuten services. This article dissects the fully virtualized network and Open RAN, the calling app that ties families together, and the base-station spending that continues while losses shrink, drawing on Rakuten Group's earnings presentations, the official plan, family discount and Rakuten Link pages, the official network technology pages, a 2019 press release, and this site's own observations."
lead: "\"Up to 3 GB for ¥968, unlimited data past 20 GB for ¥3,168.\" Rakuten Mobile's pricing page is explained by three numbers with the family discount applied. Open Rakuten Group's earnings materials, though, and the monthly revenue per line is ¥2,921, of which ¥781 is not a telecom fee. It is \"ecosystem ARPU\": the extra shopping that Rakuten Mobile subscribers do on Rakuten Ichiba and elsewhere, counted as income of the mobile business. This article dissects how Japan's fourth mobile carrier, which entered the market in 2019 with a fully virtualized network, is trying to earn its money back outside the phone bill."
category: consumer-app
tags: [telecom, subscription, family, open-ran, cdn]
publishedAt: "2026-10-01"
updatedAt: "2026-10-01"
lastVerified: "2026-10-01"
serviceUrl: "https://network.mobile.rakuten.co.jp/"
# Affiliate link placeholder: the owner must join Moshimo Affiliate (https://af.moshimo.com/)
# and get approved for the Rakuten Mobile (楽天モバイル) program before enabling this block.
# The reward terms were not verified from a primary source when this article was written;
# check the program page inside Moshimo before enabling.
# Do not use the customer referral campaign (紹介キャンペーン) link here: it is a
# points program for subscribers, not an advertising program.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://af.moshimo.com/af/c/click?a_id=<owner-id>&p_id=<program-id>&pc_id=<pc-id>&pl_id=<link-id>"
#   program: "Rakuten Mobile (Moshimo Affiliate)"
vendor: "Rakuten Mobile, Inc."
origin: "JP"
heroTheme: "rakuten-mobile"
scores: { product: 4.0, ux: 3.5, tech: 4.5, business: 3.5 }
techStack:
  - layer: "Mobile network (core)"
    name: "Fully virtualized cloud-native network (NFV → containerized CNF, microservices)"
    confidence: confirmed
    evidence: "The official network technology page (as of 2026-10-01) states that virtualization, which replaces hardware functions with software, is applied across the whole network, and that 4G and 5G software run side by side on the same general-purpose hardware on a virtualization platform. It also says the 5G platform uses container technology, with containerized network functions (CNFs) developed function by function as microservices"
    evidenceUrl: "https://corp.mobile.rakuten.co.jp/innovation/technology/cloud-network/"
  - layer: "Radio access network (RAN)"
    name: "Open RAN (O-RAN ALLIANCE spec, vDU/vCU split, AI-driven RIC)"
    confidence: confirmed
    evidence: "The official Open RAN page (as of 2026-10-01) states that the company joined the O-RAN ALLIANCE in August 2020 and runs commercial service on Open RAN built to its specifications, that the commercial network fully separates the virtualized distributed unit (vDU) and centralized unit (vCU), and that it develops a RAN Intelligent Controller (RIC) platform and AI applications. The official history says a nationwide rollout of AI-based RIC began in 2025"
    evidenceUrl: "https://corp.mobile.rakuten.co.jp/innovation/technology/open-ran/"
  - layer: "Transport network and build partners"
    name: "IPv6 transport/backhaul + multi-vendor partners (Cisco, Nokia, Altiostar, Intel, Red Hat, NEC/Netcracker, Mavenir, etc.)"
    confidence: confirmed
    evidence: "Rakuten's press release of February 12, 2019 states that the transport network has terabit-class capacity to carry around 100 Gbps of traffic from base station sites, and that being IPv6-based it needs no address translation equipment. It names partners including Cisco Systems, Nokia, Altiostar Networks, Intel, Red Hat, OKI, Fujitsu, Ciena, NEC/Netcracker, Qualcomm, Mavenir, and QCT. The 2026 configuration and vendors are not disclosed"
    evidenceUrl: "https://corp.rakuten.co.jp/news/press/2019/0212_06.html"
  - layer: "Satellite communications"
    name: "AST SpaceMobile (direct-to-device satellite)"
    confidence: confirmed
    evidence: "Rakuten Group's Q2 FY2026 earnings presentation (2026-08-10) states that the commercial service targeted to launch from Q4 2026 will be provided by Rakuten Mobile using AST SpaceMobile's satellites. It also says the company was selected as an indirect subsidy recipient of the Ministry of Internal Affairs and Communications' J-LEO program"
    evidenceUrl: "https://corp.rakuten.co.jp/investors/assets/doc/documents/26Q2MAINPPT_J.pdf"
  - layer: "Calling, messaging and account app"
    name: "Rakuten Link (Android 10+ / iOS 16+, Rakuten ID login)"
    confidence: confirmed
    evidence: "The official Rakuten Link page (as of 2026-10-01) states that domestic calls are free through the app (¥22 per 30 seconds without it), that login with a Rakuten ID is required, that it supports Android 10 or later and iOS 16 or later, and that from July 2026 all features of the my Rakuten Mobile app were gradually merged into Rakuten Link so calls, messages and account management happen in one app. It also says sending and receiving messages counts toward data usage"
    evidenceUrl: "https://network.mobile.rakuten.co.jp/service/rakuten-link/"
  - layer: "CDN and website delivery"
    name: "Akamai + OpenStack Swift (origin object storage)"
    confidence: likely
    evidence: "In this site's own observation (2026-10-01), DNS for network.mobile.rakuten.co.jp and corp.mobile.rakuten.co.jp resolved through edgekey.net to akamaiedge.net. Responses from network.mobile.rakuten.co.jp carried X-Openstack-Request-Id, X-Trans-Id (tx…) and X-Object-Meta-Mtime headers, which suggests OpenStack object storage (Swift) serves the static files at the origin"
  - layer: "Sign-up flow (frontend)"
    name: "React + Redux + axios (webpack) with nonce-based CSP"
    confidence: likely
    evidence: "In this site's own observation (2026-10-01), the HTML of onboarding.mobile.rakuten.co.jp/plans loaded webpack chunks named npm.react-dom, npm.react-redux, npm.axios, npm.formatjs, npm.luxon and npm.crypto-js. Its Content-Security-Policy set script-src to a nonce plus 'strict-dynamic'. The hostname resolved to onboarding.bss.rmb-ss.jp"
  - layer: "Marketing site and analytics"
    name: "jQuery 3.7.1 + KARTE + RAT (Rakuten Analytics) + Google Tag Manager"
    confidence: likely
    evidence: "In this site's own observation (2026-10-01), the network.mobile.rakuten.co.jp home page loaded jquery-3.7.1.min.js, a set of in-house bundle.js files built with webpack, builder.js from cdn-blocks.karte.io, rat-sec.js from r.r10s.jp and Google Tag Manager, along with an A/B testing bundle and a generative AI chat bundle"
  - layer: "WAF and bot protection"
    name: "F5 BIG-IP (ASM/Advanced WAF)"
    confidence: speculative
    evidence: "In this site's own observation (2026-10-01), portal.mobile.rakuten.co.jp and onboarding.mobile.rakuten.co.jp set cookies whose names start with TS01. This matches the cookie naming used by F5 BIG-IP security modules, but there is no official statement"
sources:
  - label: "Rakuten Mobile: Contracts pass 11 million lines (2026-09-25, Japanese)"
    url: "https://corp.mobile.rakuten.co.jp/news/press/2026/0925_02/"
    accessedAt: "2026-10-01"
  - label: "Rakuten Mobile: Company overview (Japanese)"
    url: "https://corp.mobile.rakuten.co.jp/about/overview/"
    accessedAt: "2026-10-01"
  - label: "Rakuten Mobile: History (Japanese)"
    url: "https://corp.mobile.rakuten.co.jp/about/history/"
    accessedAt: "2026-10-01"
  - label: "Rakuten Mobile: Rakuten Saikyo Plan pricing (Japanese)"
    url: "https://network.mobile.rakuten.co.jp/fee/saikyo-plan/"
    accessedAt: "2026-10-01"
  - label: "Rakuten Mobile: Saikyo family discount (Japanese)"
    url: "https://network.mobile.rakuten.co.jp/fee/family/"
    accessedAt: "2026-10-01"
  - label: "Rakuten Mobile: Rakuten Link (Japanese)"
    url: "https://network.mobile.rakuten.co.jp/service/rakuten-link/"
    accessedAt: "2026-10-01"
  - label: "Rakuten Mobile: Fully virtualized cloud-native mobile network (Japanese)"
    url: "https://corp.mobile.rakuten.co.jp/innovation/technology/cloud-network/"
    accessedAt: "2026-10-01"
  - label: "Rakuten Mobile: Open RAN (Japanese)"
    url: "https://corp.mobile.rakuten.co.jp/innovation/technology/open-ran/"
    accessedAt: "2026-10-01"
  - label: "Rakuten: Successful test of the world's first end-to-end fully virtualized cloud-native network (2019-02-12, Japanese)"
    url: "https://corp.rakuten.co.jp/news/press/2019/0212_06.html"
    accessedAt: "2026-10-01"
  - label: "Rakuten Group: Q2 FY2026 earnings presentation (2026-08-10, Japanese)"
    url: "https://corp.rakuten.co.jp/investors/assets/doc/documents/26Q2MAINPPT_J.pdf"
    accessedAt: "2026-10-01"
  - label: "Rakuten Group: Q2 FY2026 supplementary earnings materials (2026-08-10, Japanese)"
    url: "https://corp.rakuten.co.jp/investors/assets/doc/documents/26Q2PPT_J.pdf"
    accessedAt: "2026-10-01"
---

Rakuten Mobile is the fourth mobile carrier in Japan, launched by Rakuten Group in 2019. Its pricing is close to a single pay-for-what-you-use plan, and even unlimited data stays in the ¥3,000 range per month. Judging the company by its price list alone, though, misses half the picture. The earnings materials count part of what subscribers spend on Rakuten Ichiba and other services as income of the mobile business.

## Service overview

Rakuten Mobile, Inc. was founded in January 2018 as a wholly owned subsidiary of Rakuten Group. Besides the Rakuten Mobile phone service, it offers the Rakuten Turbo home router, Rakuten Hikari fiber, and Rakuten Energy electricity. It is headquartered at Rakuten Crimson House in Setagaya, Tokyo, and had 992 employees as of January 1, 2026.

:::fact
According to the official history (as of 2026-10-01), Rakuten started a budget smartphone service on borrowed networks (MVNO) in October 2014, received a 4G (1.7 GHz) spectrum allocation from the Ministry of Internal Affairs and Communications in 2018, and began building base stations. It launched as a mobile network operator (MNO) with its own network in October 2019, started full service with "Rakuten UN-LIMIT" in April 2020, and launched the "Rakuten Saikyo Plan" in June 2023. It received a 700 MHz "platinum band" allocation in October 2023 and began commercial service on it in 2024. According to the press release of September 25, 2026, contracts passed 11 million lines on September 24. That figure includes corporate BCP (business continuity) lines, wholesale lines to other operators (MVNE), and MVNO; own-network MNO contracts excluding BCP, MVNO and MVNE were 10.18 million lines.
:::

:::fact
According to the official pricing and family discount pages (as of 2026-10-01), the Rakuten Saikyo Plan has three price tiers based on monthly data usage. With the family discount (the Saikyo family discount, ¥110 off for any family member), the monthly price including tax is ¥968 up to 3 GB, ¥2,068 up to 20 GB, and ¥2,880 (¥3,168 including tax) above 20 GB, where speed is unlimited (with speed control during congestion and similar cases). Without the family discount each tier is ¥110 higher, making unlimited ¥3,278 including tax. "Rakuten Saikyo U-NEXT," which bundles the U-NEXT video service, is ¥3,980 a month (¥4,378 including tax). Domestic calls are free through the Rakuten Link app and cost ¥22 per 30 seconds without it. The family discount covers relatives of any degree, up to 20 lines, with no time limit.
:::

:::pull
The pricing page leads with three numbers: ¥968, ¥2,068 and ¥3,168. Yet in the earnings materials, ¥781 of the ¥2,921 monthly revenue per line is counted not as a telecom fee but as "extra sales on Rakuten Ichiba and elsewhere."
:::

::scorecard

## UX analysis

The Rakuten Mobile experience is designed so that the more you lean on your Rakuten ID and the app, the better the deal. The price itself is simple, but the conditions for discounts and points assume you use the Rakuten Link app and a Rakuten ID.

- **Usage sets the price automatically**. The pricing page says the bill "gets cheaper on its own if you don't use it." There is no data bucket to choose, and a month where you used only 3 GB ends at ¥968 (with the family discount). Data counted includes international roaming, not just domestic use.
- **Free calls only inside the app**. Domestic calls are free only when placed from the Rakuten Link app; calls from the OS's built-in phone app cost ¥22 per 30 seconds. Numbers starting with 0570 and similar are excluded from free calls. The phone ends up with two calling apps, and which one you dial from changes the price.
- **Account management consolidated into Link**. From July 2026, the features of the "my Rakuten Mobile" app for checking your contract and data usage were gradually merged into Rakuten Link. The family discount page says Rakuten Link is needed to create and manage a family discount group. Calls, messages, account and family management now live in one app, while the entry point has narrowed for people who do not use Link.
- **A referral path for bringing in family**. According to the family discount page, referring one person who switches from another carrier while keeping their number earns a combined 20,000 points (12,000 points for a new line without number porting), paid in installments, and the page advertises "a total of 100,000 points if five family members refer each other." The points also require the referred person to use Rakuten Link.
- **A brake on short-term churn**. According to the pricing page, from November 19, 2025 a contract fee of ¥3,850 including tax per line applies to the fifth and later lines under the same name. "Cumulative" counts every line contracted since April 8, 2020, including cancelled ones. Up to the fourth line it remains free.

## Tech stack

::techstack

:::fact
According to the official network technology page (as of 2026-10-01), instead of conventional telecom equipment where dedicated hardware and software come as one, Rakuten Mobile runs network functions as software on the same kind of general-purpose hardware used by cloud servers. 4G and 5G software coexist on the same hardware, and generational upgrades can be handled by adding or updating software without replacing hardware. On the 5G platform, network functions are containerized (CNFs) and developed function by function as small independent services (microservices). At base stations, radio signal processing has moved to an edge cloud, simplifying the base stations themselves.
:::

:::fact
Rakuten's press release of February 12, 2019 described the pre-launch design in detail. Everything from radio access to the core runs on a common Telco Cloud, distributed across more than a thousand sites and managed by a common orchestration layer. The transport network has terabit-class capacity and, being IPv6-based, needs no address translation equipment. The same release listed more than a dozen partners, including Cisco Systems, Nokia, Altiostar Networks, Intel, Red Hat, NEC/Netcracker and Mavenir. The official Open RAN page says the company joined the O-RAN ALLIANCE in August 2020 and keeps capital spending down with a multi-vendor setup that is not tied to any single vendor. The history page says a nationwide rollout of AI-based RIC for controlling the RAN began in 2025, and that in February 2026 TM Forum certified it at "Autonomous Network Level 4" for RAN energy saving.
:::

:::fact
According to Rakuten Group's Q2 FY2026 earnings presentation, Rakuten Mobile's network-related capital spending was ¥39.3 billion in the second quarter, and the FY2026 plan of ¥200 billion is unchanged. It has brought pre-construction work such as site negotiations in-house and says about 90% of the pre-construction work toward its 2026 target for new transmitting sites is done. 5G has been built at 25 of the 30 stations on the JR Yamanote Line, with the remaining five planned within 2026. For satellite communications, it aims to start a commercial service using the satellites of U.S.-based AST SpaceMobile from Q4 2026.
:::

:::guess
The web side is not built as ambitiously as the network. In this site's observation, the official site with the pricing pages sits behind Akamai's CDN, and the origin appears to be OpenStack object storage. The home page is built with jQuery and in-house webpack bundles and carries KARTE, Rakuten's shared analytics (RAT), and A/B testing scripts. The sign-up flow, by contrast, is a React and Redux SPA with a strict nonce-based CSP. It is presumed that the promotional pages are built for speed of change and the contract pages for safety. That many price figures sit in image alt text also hints at an operation that swaps campaigns image by image.
:::

:::guess
Consolidating around Rakuten Link appears to pay off on both the technical and the pricing side. Since messages are counted as data traffic, Link calls are presumed to be carried over IP as well. If so, the more people use Link, the more calls ride on the company's own data network, which makes "free domestic calls" easier to sustain. At the same time, because it requires a Rakuten ID login, it also serves as an entry point that ties subscribers to Rakuten Ichiba and points.
:::

## Business model

The main revenue streams are monthly telecom fees and device sales. Rakuten Mobile's results, however, are not judged on those alone. The earnings materials add the extra sales that subscribers generate on other Rakuten Group services to the mobile business's revenue as "ecosystem ARPU."

:::fact
According to Rakuten Group's Q2 FY2026 earnings presentation and supplementary materials (2026-08-10), Rakuten Mobile's second-quarter revenue was ¥101.3 billion (up 11.9% year on year), of which MNO was ¥62.7 billion (up 22.8%). The Non-GAAP operating loss was ¥32.3 billion, an improvement of ¥6.7 billion from a year earlier. EBITDA was ¥5.9 billion (up 6.4%). Total contracted lines at the end of June 2026 were 10.75 million (up 1.78 million year on year), and the adjusted MNO churn rate, excluding BCP lines, was 1.38%. The mobile segment as a whole (including Rakuten Symphony and others) had revenue of ¥121.4 billion and a Non-GAAP operating loss of ¥33.1 billion.
:::

:::fact
According to the same materials, second-quarter MNO ARPU (monthly revenue per line) was ¥2,921: data ¥1,761, calls ¥87, options ¥215, other (advertising and so on) ¥77, and ecosystem ¥781. Ecosystem ARPU is the "uplift in group sales by MNO subscribers," and for users one year after signing it rises to ¥917. Subtracting the related cost of sales and the effect of referrals from group companies gives a "net ARPU" of ¥2,516 (up ¥42 year on year). The materials also report that since the Saikyo Plan launched in June 2023, B2C data ARPU has risen about ¥31 for every 1 GB increase in median data usage (R² = 0.896), and that the share of users above 20 GB rose 3.6 points from a year earlier.
:::

:::fact
According to the pricing page, Rakuten Mobile subscribers get +4x points on Rakuten Ichiba purchases as "Rakuten Mobile SPU" (entry required, capped at 2,000 points a month, paid as time-limited points), for 5x including the base 1x for Rakuten members. A bonus interest rate offered jointly with Rakuten Bank started in February 2026 (press release). A note in the earnings materials treats "SPU etc." as a customer acquisition cost, alongside marketing and shop costs, when calculating PMCF (pre-marketing cash flow).
:::

:::fact
The same earnings presentation says the group redeemed U.S. dollar perpetual subordinated bonds (¥81.7 billion) in April 2026 and yen senior bonds (¥20 billion) in June, raised about ¥200 billion in May by selling securities it held, and has secured the funds for its 2026 bond redemptions. For 2027 and later, it says it will combine options such as bank loans and asset securitization. Rakuten Group booked consolidated profit after tax of ¥27.2 billion in the second quarter, which the materials describe as the first profit since Q2 2020.
:::

:::guess
Set the price list next to the ARPU figures and the intent of the design comes into view. On telecom fees alone, the ¥3,278 ceiling for unlimited data caps what one line can bring in. So Rakuten pushes data ARPU up with usage-based tiers that rise as people use more data, while counting what lies outside that ceiling, the money subscribers spend on Rakuten Ichiba and Rakuten Bank, as mobile income. That is the ¥781 within ¥2,921, and it grows to ¥917 for users a year after signing. The UX that pulls calls into Link, family discount management into Link, and points into the Rakuten ID appears to be the path for growing this ecosystem ARPU. Its role as an entry point to the Rakuten ecosystem overlaps with [Rakuten Travel](/en/articles/rakuten-travel). Note, however, that ecosystem ARPU is an internal way for Rakuten Group to evaluate the business; the same amount of cash does not flow into Rakuten Mobile.
:::

:::guess
The losses, meanwhile, continue. The company has to keep spending ¥200 billion a year on base stations while shrinking a quarterly Non-GAAP operating loss of ¥32.3 billion. Choosing virtualization and Open RAN to lower equipment and operating costs is presumed to have been a precondition for building a nationwide network as the fourth carrier to arrive. The fee on the fifth and later lines and stricter identity checks, which curb short-term cancellations known as "hopping" and lower churn, also appear aimed at lengthening the period over which the acquisition cost per line is recovered.
:::

Rakuten Mobile's pricing page shows only three numbers, but its earnings materials describe a mechanism for earning money back outside the phone bill. Bring in family through referrals, gather calls and account management in Link, and add Rakuten Ichiba points on top. The scale of 11 million lines appears to have been built on that path.
