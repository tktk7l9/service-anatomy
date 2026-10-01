---
service: "Money Forward ME"
title: "Free Means Four Accounts and One Year — Where Money Forward ME Draws the Line That 673K of Its 18.3M Users Pay ¥540 a Month to Cross"
description: "Money Forward ME, a household budgeting and asset-tracking app, has more than 18.3 million users and more than 673,000 paying users. It caps free members at four linked financial services and one year of visible history, and sells a Standard course at ¥540 a month (¥590 through in-app purchase) and an Asset Building Advanced course at ¥980 a month outside that line. The Home segment's premium-subscription ARR is ¥4.02 billion, up 30.2% year on year. From the earnings release and presentation, the official support site, official press releases, the official developer blog, and this site's own observations of the app stores, we dissect how the free/paid boundary is drawn and what the joint venture with Sumitomo Mitsui Card changed. It covers the Java aggregation platform, the mobile app that mixes in Flutter, and how bank linking was suspended after unauthorized access to GitHub in May 2026."
lead: "On December 7, 2022, Money Forward ME cut the number of financial services a free member can link from 10 to 4. Free members who had linked five or more got a 30-day premium coupon, and the app offered a button labeled \"Keep 4 and use it for free.\" On August 5, 2025, the price of the Standard course was revised. Where has one of Japan's largest budgeting apps, with more than 18.3 million users, drawn the line between free and paid, and how has it moved that line? We dissect it from earnings materials, support-site notices, the official developer blog, and observation of the app."
category: consumer-app
tags: [personal-finance, fintech, subscription, ruby-on-rails, flutter, mcp]
publishedAt: "2026-10-01"
updatedAt: "2026-10-01"
lastVerified: "2026-10-01"
serviceUrl: "https://moneyforward.com/me"
# Affiliate link placeholder: as of 2026-10-01 no public page confirms which ASP
# carries a Money Forward ME program (A8.net and Moshimo Affiliate program search
# requires a login). Candidates to check first: Moshimo Affiliate, A8.net and
# ValueCommerce. The owner must search the ASP dashboards for the Money Forward ME
# premium-service program, pass the review, and paste the tracking link here
# before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<asp-moneyforward-me-tracking-link>"
#   program: "Money Forward ME Premium Service (ASP not yet confirmed: check Moshimo Affiliate / A8.net / ValueCommerce)"
vendor: "Money Forward Home, Inc."
origin: "JP"
heroTheme: "moneyforward-me"
scores: { product: 4.5, ux: 3.5, tech: 3.5, business: 4.0 }
techStack:
  - layer: "Web app"
    name: "Ruby (likely Ruby on Rails)"
    confidence: likely
    evidence: "The official developer blog (2026-04) states that Ruby is used in many of the company's services, with the budgeting app Money Forward ME and Cloud Expense named as representative examples. In this site's observation (2026-10-01), moneyforward.com returns a session cookie named \"_moneybook_session\" in the Rails style and the x-runtime header that Rack adds. No primary source that directly names Rails as the framework was found"
    evidenceUrl: "https://moneyforward-dev.jp/entry/2026/04/08/100000"
  - layer: "Account aggregation platform"
    name: "Java account aggregation platform (microservice)"
    confidence: confirmed
    evidence: "The official developer blog (2014-06) states that the web aggregation platform that collects data from financial institutions was written in Java, built almost single-handedly by the then CTO, and supported more than 1,400 financial institutions and services. The CTO message (2022-03) says shared functions such as the ID platform, billing platform, and aggregation platform have been split into microservices. The posts do not say whether the platform is still written in Java today"
    evidenceUrl: "https://moneyforward-dev.jp/entry/2014/06/10/java_20140610/"
  - layer: "Infrastructure"
    name: "Multi-tenant Kubernetes cluster"
    confidence: confirmed
    evidence: "The CTO message (2022-03) states that the company built an infrastructure platform centered on a multi-tenant Kubernetes cluster, standardized all the way to monitoring and CI/CD"
    evidenceUrl: "https://moneyforward-dev.jp/entry/2022/03/10/cto-message-202203/"
  - layer: "Mobile apps"
    name: "Swift + Flutter (Add-to-App)"
    confidence: confirmed
    evidence: "The official developer blog (2023-10) states that Money Forward ME's mobile team builds new screens in Flutter by default and embeds them into the existing native apps with Add-to-App, that CI moved from Jenkins to Bitrise, and that the app was re-architected around 2019. The post on the iOS Control Widget (2024-12) explains the implementation with App Intents written in Swift"
    evidenceUrl: "https://moneyforward-dev.jp/entry/2023/10/18/110000"
  - layer: "Authentication"
    name: "Money Forward ID (in-house IdP with passkeys)"
    confidence: confirmed
    evidence: "The official developer blog (2023-04) states that Money Forward ID is the IdP for the company's services and that it introduced passwordless login with Passkey autofill, which uses the browser's autofill. The July 2026 report counts about 3.4 million registered passkeys"
    evidenceUrl: "https://moneyforward-dev.jp/entry/2023/04/05/134721"
  - layer: "Financial institution linking"
    name: "Bank API + screen scraping"
    confidence: confirmed
    evidence: "The official support site states that there are two linking methods: with API linking the user logs in on the bank's own site, so the company does not hold PINs, and with the scraping method it stores the user's ID and password encrypted and logs in to the linked site. Another support article explains that, under the revised Banking Act, electronic payment agents including the company must sign individual contracts with each bank"
    evidenceUrl: "https://support.me.moneyforward.com/hc/ja/articles/900004397063"
  - layer: "AI agent integration"
    name: "Apps in ChatGPT (likely an MCP server)"
    confidence: likely
    evidence: "According to Money Forward Home's announcement (2026-09-17), the service has been offered as an app in ChatGPT since September 17, 2026, letting users refer to their ME budget and asset data in a conversation with ChatGPT (the data cannot be updated). The announcement does not mention an SDK or protocol, but OpenAI's developer documentation directs Apps SDK developers to build an MCP (Model Context Protocol) server, so the connection is presumed to go through an MCP server"
    evidenceUrl: "https://corp.moneyforward.com/news/release/service/20260917-mf-press-3/"
  - layer: "Edge / CDN"
    name: "Cloudflare"
    confidence: likely
    evidence: "In this site's observation (2026-10-01), moneyforward.com and id.moneyforward.com return server: cloudflare and cf-ray (NRT), and id.moneyforward.com is a CNAME to cdn.cloudflare.net. The support site support.me.moneyforward.com is a CNAME to pfmus.zendesk.com and is served by Zendesk"
sources:
  - label: "Money Forward, Inc.: FY11/2026 2Q (interim) consolidated financial results (Japanese, 2026-07-13)"
    url: "https://contents.xj-storage.jp/xcontents/AS71106/eee10499/1dac/4664/9aa5/229eaf8de8d0/140120260713592274.pdf"
    accessedAt: "2026-10-01"
  - label: "Money Forward, Inc.: FY11/2026 2Q earnings presentation (Japanese, 2026-07-13)"
    url: "https://contents.xj-storage.jp/xcontents/AS71106/d6d5dd76/4582/4a3b/96c8/10c9b996d59d/140120260713592129.pdf"
    accessedAt: "2026-10-01"
  - label: "Money Forward ME: What the Premium Service offers (Japanese)"
    url: "https://moneyforward.com/pages/premium"
    accessedAt: "2026-10-01"
  - label: "Money Forward ME: Premium vs. free member feature comparison (Japanese)"
    url: "https://moneyforward.com/pages/premium_features"
    accessedAt: "2026-10-01"
  - label: "Money Forward ME: Asset Building Advanced course (Japanese)"
    url: "https://moneyforward.com/pages/extra_premium"
    accessedAt: "2026-10-01"
  - label: "Money Forward ME Support: Premium Service pricing (Japanese)"
    url: "https://support.me.moneyforward.com/hc/ja/articles/4409828451993"
    accessedAt: "2026-10-01"
  - label: "Money Forward ME Support: Price revision of the Premium Service Standard course (effective August 5, 2025) (Japanese)"
    url: "https://support.me.moneyforward.com/hc/ja/articles/48081250560409"
    accessedAt: "2026-10-01"
  - label: "Money Forward ME Support: Change to the linking limit for free members (Japanese, 2022-10-03)"
    url: "https://support.me.moneyforward.com/hc/ja/articles/11112036463001"
    accessedAt: "2026-10-01"
  - label: "Money Forward ME Support: How financial data and login credentials are handled (Japanese)"
    url: "https://support.me.moneyforward.com/hc/ja/articles/900004397063"
    accessedAt: "2026-10-01"
  - label: "Money Forward ME Support: Changes to some bank linking (background) (Japanese)"
    url: "https://support.me.moneyforward.com/hc/ja/articles/900003516286"
    accessedAt: "2026-10-01"
  - label: "Money Forward ME Support: Unauthorized access to GitHub and temporary suspension of bank account linking (updated 2026-06-23) (Japanese)"
    url: "https://support.me.moneyforward.com/hc/ja/articles/57504390625305"
    accessedAt: "2026-10-01"
  - label: "Money Forward ME Support: Apology and extension of Premium Service subscriptions (updated 2026-06-19) (Japanese)"
    url: "https://support.me.moneyforward.com/hc/ja/articles/58059562469913"
    accessedAt: "2026-10-01"
  - label: "Money Forward, Inc.: Report on the investigation of unauthorized access to GitHub (fourth report) (Japanese, 2026-06-23)"
    url: "https://corp.moneyforward.com/news/info/20260623-mf-press-1/"
    accessedAt: "2026-10-01"
  - label: "Money Forward, Inc.: Basic agreement with Sumitomo Mitsui Card on a capital and business alliance in the consumer business (Japanese, 2024-07-17)"
    url: "https://corp.moneyforward.com/news/release/corp/20240717-mf-press/"
    accessedAt: "2026-10-01"
  - label: "Money Forward Home, Inc.: Money Forward ME launches \"a budget book that earns points\" (Japanese, 2024-12-02)"
    url: "https://corp.moneyforward.com/news/release/service/20241202-mf-press-2/"
    accessedAt: "2026-10-01"
  - label: "Money Forward Home, Inc.: Some Money Forward ME asset features become available in the SMBC app and the Vpass app (Japanese, 2026-03-02)"
    url: "https://corp.moneyforward.com/news/release/service/20260302-mf-press-1/"
    accessedAt: "2026-10-01"
  - label: "Money Forward Home, Inc.: Money Forward ME launches an app for Apps in ChatGPT from September 17, 2026 (Japanese, 2026-09-17)"
    url: "https://corp.moneyforward.com/news/release/service/20260917-mf-press-3/"
    accessedAt: "2026-10-01"
  - label: "OpenAI Developers: Apps SDK (developer documentation for Apps in ChatGPT)"
    url: "https://developers.openai.com/apps-sdk/"
    accessedAt: "2026-10-01"
  - label: "Money Forward Developers Blog: What kind of environment Money Forward's Java engineers work in (Japanese, 2014-06)"
    url: "https://moneyforward-dev.jp/entry/2014/06/10/java_20140610/"
    accessedAt: "2026-10-01"
  - label: "Money Forward Developers Blog: What Money Forward's CTO is thinking (Japanese, March 2022)"
    url: "https://moneyforward-dev.jp/entry/2022/03/10/cto-message-202203/"
    accessedAt: "2026-10-01"
  - label: "Money Forward Developers Blog: Ranking what boosted Money Forward ME's mobile productivity (Japanese, 2023-10)"
    url: "https://moneyforward-dev.jp/entry/2023/10/18/110000"
    accessedAt: "2026-10-01"
  - label: "Money Forward Developers Blog: Control Widget support in Money Forward ME (Japanese, 2024-12)"
    url: "https://moneyforward-dev.jp/entry/2024/12/11/125931"
    accessedAt: "2026-10-01"
  - label: "Money Forward Developers Blog: Money Forward sponsors RubyKaigi 2026 (Japanese, 2026-04)"
    url: "https://moneyforward-dev.jp/entry/2026/04/08/100000"
    accessedAt: "2026-10-01"
  - label: "Money Forward Developers Blog: Introducing passwordless login with Passkey autofill (Japanese, 2023-04)"
    url: "https://moneyforward-dev.jp/entry/2023/04/05/134721"
    accessedAt: "2026-10-01"
  - label: "Money Forward Developers Blog: Passkey usage report @ Money Forward ID (vol.10, Jul 2026) (Japanese)"
    url: "https://moneyforward-dev.jp/entry/2026/07/10/passkey-report-vol10"
    accessedAt: "2026-10-01"
  - label: "App Store: Money Forward ME (Money Forward Home, Inc.)"
    url: "https://apps.apple.com/jp/app/id594145971"
    accessedAt: "2026-10-01"
  - label: "Google Play: Money Forward ME (com.moneyforward.android.app)"
    url: "https://play.google.com/store/apps/details?id=com.moneyforward.android.app&hl=ja"
    accessedAt: "2026-10-01"
---

In Money Forward's earnings materials, the budgeting app appears as the Home segment. Of the company's ¥47.67 billion in SaaS ARR, Home's premium subscriptions account for ¥4.02 billion. The product that became the company's face now makes up less than a tenth of its revenue. Even so, users have passed 18.3 million and paying users have passed 673,000, and both keep growing. How much to give away for free: the history of where that line has been drawn is the business of this app.

## Service overview

Money Forward ME is an app that links accounts at banks, brokerages, credit cards, e-money, and point programs, pulls in transactions automatically, and builds a household budget and an asset list from them. It runs on the web, iOS, and Android, and launched in December 2012. It is operated by Money Forward Home, Inc., founded in August 2024, and the seller shown on the App Store is also "Money Forward Home, Inc." It is a separate product from [Money Forward Cloud](/en/articles/moneyforward-cloud), the group's back-office service for sole proprietors and businesses, and it sits in the Home segment in the earnings materials.

:::fact
According to the earnings presentation (2026-07-13), the Home segment's revenue for 2Q of the fiscal year ending November 2026 (March to May 2026) was ¥1.30 billion (up 13% year on year, or 18% excluding Next Solution, which was deconsolidated). The year-end campaign performed well, and premium subscription revenue rose 26% year on year. Money Forward ME passed 18.3 million users and 673,000 paying users. A note says the user count is the cumulative total of app downloads and web registrations. According to the earnings release, Home premium-subscription SaaS ARR was ¥4.017 billion at the end of May 2026 (up 30.2% year on year). Company-wide SaaS ARR was ¥47.669 billion.
:::

:::fact
According to the official pricing guide, the Premium Service has two courses, the Standard course and the Asset Building Advanced course, and the price depends on the payment method (all prices include tax). The Standard course costs ¥540 a month or ¥5,940 a year when paid by credit card from the web version, and ¥590 a month or ¥6,490 a year through App Store or Google Play billing. The Asset Building Advanced course costs ¥980 a month or ¥10,700 a year with any payment method. New sign-ups get a 30-day free trial. According to a support-site notice, the Standard course price was revised on August 5, 2025; the reason given was rising system maintenance and operating costs and API costs amid inflation. The Asset Building Advanced course price was unchanged.
:::

:::pull
Free members can link up to four financial services and see one year of history. Outside that line sits a price of ¥540 a month.
:::

::scorecard

## UX analysis

Money Forward ME's UX comes down to one experience: "link your accounts and the budget builds itself." The gap between free and paid is set not by the quality of features but by how many accounts you can link and how far back you can see.

- **The free tier is defined by numbers.** According to the official comparison table, free members can link up to four financial services, see one year of budget data, create one group, and see ads. Premium removes every limit and adds ad-free use, bulk refresh, household asset reports, CSV download, and alerts when a card payment exceeds the bank balance, among others. There is little room for doubt about what is paid.
- **The boundary has been moved.** According to a support-site notice (2022-10-03), the free linking limit dropped from 10 to 4 on December 7, 2022. The reasons given were rising maintenance and operating costs from growing data volume and rising costs of API linking. Free members who had five or more links as of November 6, 2022 received a 30-day free premium coupon, and from the change date, opening the app showed a screen to choose between "Keep 4 and use it for free" and "Choose accounts to link." It leaves a path to stay free while showing a paid entrance at the exact moment a user hits the limit.
- **Two tiers, with investors on the upper one.** The Asset Building Advanced course adds investor features such as dividend history and forecasts, My Portfolio, asset tagging, and a breakdown of stocks by industry. According to the official page, these course-specific features are available only in the smartphone apps. According to the official developer blog (2023-10), the course was released at the end of February 2023 and its features were built in Flutter.
- **The price depends on how you pay.** Paying by credit card from the web is ¥50 a month and ¥550 a year cheaper than paying through the App Store or Google Play. Charging more for sign-ups inside the app reads as passing the store fee straight through to the user's choice.
- **Sharing with family came later.** According to the earnings release, the previous fiscal year saw the launch of "Share Board," which lets family members and partners check household finances and assets together, and "Prime Coupon," offered only to premium members. The price-revision notice explains that Share Board works between two premium members or a pair of one premium member and one free member.
- **There was no fallback when it stopped.** In May 2026, bank account linking was suspended in response to the unauthorized access described below. The support site's apology cited "there is no alternative to bank account linking, such as CSV import" as one reason for extending premium members' subscriptions by 15 days. The convenience of automatic linking was the flip side of its fragility when linking stops.

## Tech stack

::techstack

:::fact
According to the official developer blog (2014-06), the web aggregation platform that collects data from financial institutions was written in Java, built almost single-handedly by the then CTO, and supported more than 1,400 financial institutions and services. Adding a new institution on top of the platform was relatively easy; the author writes that they implemented one about two weeks after joining. The CTO message (2022-03) explains that shared functions such as the ID platform, billing platform, and aggregation platform have been split into microservices, and that the company built an infrastructure platform centered on a multi-tenant Kubernetes cluster, standardized all the way to monitoring and CI/CD.
:::

:::fact
According to the official support site, there are two ways to link financial institutions, and they handle login credentials differently. API linking reflects data based on information from the bank's API, so registration sends the user to the bank's own site and the company does not hold PINs. The scraping method stores the ID and password the user registered, encrypted, and logs in to the linked site to fetch data. Another support article explains that, under the revised Banking Act, electronic payment agents including the company must sign individual contracts with each bank to obtain bank account information.
:::

:::fact
According to the official developer blog (2023-10), Money Forward ME's mobile team re-architected the apps around 2019, moved CI from Jenkins to Bitrise, and introduced OpenAPI. New screens are built in Flutter by default and embedded into the existing native apps with Add-to-App. Compared with building screens natively, the team feels the overall development cost is half or less. The iOS Control Widget work (2024-12) was implemented with App Intents; the post explains a decision not to use OpenURLIntent, which was buggy on iOS 18.0, and instead to hold the destination's custom URL scheme temporarily and handle the navigation in the app. In this site's observation (2026-10-01), the App Store version was 20.3.0 (updated 2026-09-30), it required iOS 18.0 or later, and it was rated 4.4 (174,310 ratings). On Google Play it had 5 million+ downloads and a 4.3 rating (46.9K reviews).
:::

:::fact
According to Money Forward Home's announcement (2026-09-17), a Money Forward ME app became available in "Apps in ChatGPT" on September 17, 2026. In a conversation with ChatGPT, users can refer to information and transaction history from linked banks, cards, brokerages, pensions, e-money, and point programs, as well as budget data and asset and liability data. The credentials used to link financial services are never shared with ChatGPT, and the app cannot update ME's data.
:::

:::guess
The announcement does not mention an SDK or protocol, but OpenAI's developer documentation directs developers building apps with the Apps SDK to build an MCP (Model Context Protocol) server. The Money Forward ME app is presumed to be an MCP server carrying tools that read ME's data, authorized through OAuth. Whereas the remote MCP server that [Money Forward Cloud](/en/articles/moneyforward-cloud) opened to all plans in March 2026 allows creating and updating journal entries, ME started with read-only access. It appears the company narrowed the first doorway for handing household data to an outside AI to "show only."
:::

:::fact
According to a notice on the official support site, unauthorized access to the source-code hosting service GitHub was disclosed on May 1, 2026, and Money Forward ME's bank account linking was temporarily suspended. Linking resumed institution by institution from May 12, 2026, and all banks were reconnected at 10:50 on June 5, 2026. According to Money Forward, Inc.'s fourth report (2026-06-23), the leak was limited to information contained in repositories on GitHub: names (100) or email addresses (24) of 124 customers, information on 28 business partners, information on 2,300 employees and former employees, and identifiers for 60,449 customers that cannot identify an individual on their own. The company says there was no unauthorized access to the production database that stores customer information and no leak from the production environment. According to the earnings presentation, countermeasures include stricter management of GitHub authentication, a real-time monitoring setup for development environments, and stronger automatic detection of secrets committed to repositories.
:::

## Business model

The core of revenue is monthly and annual premium subscriptions. According to the earnings presentation, the Home segment's revenue consists of three parts: premium subscription revenue, financial-services revenue, and media and advertising revenue. Financial-services revenue includes income from services such as "Money Forward Okane no Sodan" (money consultations) and "Money Forward Koteihi no Minaoshi" (fixed-cost review). According to a note in the earnings release, the Home segment's SaaS ARR is calculated from premium subscription revenue alone.

:::fact
According to the earnings release, Home premium-subscription SaaS ARR grew 30.2%, from ¥3.087 billion at the end of May 2025 to ¥4.017 billion at the end of May 2026. According to the earnings presentation, within the Home segment's ¥1.30 billion of 2Q revenue, financial-services revenue fell 18% year on year and media and advertising revenue fell 15%; premium subscription revenue was the only part growing. The earnings release says that, in addition to the Money Forward ME price revision in the previous fiscal year, the company is working to improve the user experience through Share Board and Prime Coupon.
:::

:::guess
673,000 paying users out of 18.3 million users is a ratio of just under 4%. However, the user count is the cumulative total of downloads and web registrations, so the paying ratio among people who actually keep using the app is likely higher. Dividing ARR of ¥4.017 billion by 673,000 paying users gives about ¥5,970 per user per year, close to the Standard course's annual price (¥5,940 by credit card, ¥6,490 through in-app purchase). It is presumed that most paying users are on the Standard course and that the Asset Building Advanced course is still a minority. Both the August 2025 price revision and the December 2022 cut to the free tier cited the cost of APIs with linked institutions as a reason. The structure of the electronic payment agent business, which requires individual contracts with each financial institution, appears to act as pressure to narrow the free tier.
:::

:::fact
According to Money Forward, Inc.'s announcement (2024-07-17), the company and Sumitomo Mitsui Card Co., Ltd. signed a basic agreement on a capital and business alliance in the consumer business, including setting up a joint venture. At the time, Money Forward ME supported more than 2,460 financial services, had 16.1 million users, and had ¥25 trillion in linked financial assets (end of May 2024). Olive, which Sumitomo Mitsui Card offers with Sumitomo Mitsui Banking Corporation and others, had 2.3 million account openings in a little over a year after launch. The joint venture was scheduled to start business in December 2024, with Yukihiko Onishi of Sumitomo Mitsui Card as Representative Director and Chairman and Yosuke Tsuji of Money Forward as Representative Director and President. According to the earnings release (2Q of the fiscal year ending November 2026), consolidated subsidiary Money Forward Home, Inc. carried out a third-party allotment of new shares in the previous interim period, increasing capital surplus by ¥2.518 billion.
:::

:::fact
The basic agreement listed five services to consider: "seamless fund transfers," "real-time household management," "your own loan," "a budget book that earns points," and "money support from an AI assistant." Some of them have taken shape. According to Money Forward Home's announcement, "a budget book that earns points" launched on December 2, 2024: users earn points for actions such as opening the app, linking accounts, and checking the monthly report, and can exchange them for V Points worth ¥1 each. The example point-earning actions include "link five or more accounts." According to the Standard course price-revision notice, from August 5, 2025, paying for the Premium Service by credit card with eligible cards such as Olive Flexible Pay or Sumitomo Mitsui Card (NL) earns a 10% V Point return (App Store and Google Play billing are excluded). On March 2, 2026, the account lists in the Sumitomo Mitsui Banking Corporation app and the Sumitomo Mitsui Card Vpass app gained a feature that shows asset information from financial services linked to ME, and an alert when a card payment exceeds the balance of the debit account. Linking requires registering an SMBC ID, and linking in either app applies to both. According to the earnings presentation, the three companies — Money Forward, Sumitomo Mitsui Banking Corporation, and Sumitomo Mitsui Card — also started a joint official YouTube channel, "ME STUDIO."
:::

:::guess
That the joint-venture partner is a card company rather than a bank appears to say something about how revenue is meant to be made. Hand out points on top of the budget, stream instant card-use notifications into the budget, and suggest how much a user can borrow from their household data. The five services in the basic agreement are all designed to turn ME's household data into an entrance to SMBC Group's financial products. The earnings release says the company is working toward "diversifying revenue sources" by combining ME's visualization with Olive's financial services. It is presumed that the joint venture was chosen as the base for adding financial revenue to a Home segment where only premium subscriptions are growing. On the other hand, the fact that ME's asset list became visible inside SMBC's apps in March 2026 means part of the core function can be used without opening ME at all. How ME's premium subscriptions hold up if users' entrance moves to the bank's app cannot yet be read from the materials.
:::

Four accounts and one year, for free. The ¥540 a month outside that line supports the Home segment's revenue. Each time the line moved, the reason given was the cost of staying connected to financial institutions. The joint venture with Sumitomo Mitsui Card is an attempt to turn that cost into an entrance to financial products, and the bank linking halted by the unauthorized access to GitHub showed, from the back side, where this app's value lies. Anyone can build a budget for free. What carries a price is staying connected.
