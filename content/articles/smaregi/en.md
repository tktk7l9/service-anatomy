---
service: "Smaregi"
title: "How an iPad Register Came to Call Itself \"the OS for Stores\" — 50,000 Paying Stores, ARR of 11.6 Billion Yen, 932.1 Billion Yen of Quarterly Transactions. Dissecting Smaregi, Which Gathers Stores With a Free Plan, Earns on Payments and Subscriptions, and Targets ARR of 30 Billion Yen by 2031"
description: "Smaregi is a cloud POS register launched in September 2011 by Smaregi, Inc. (Tokyo Stock Exchange Growth, 4431), a company founded in Osaka in 2005. It turns iPads and iPhones into registers and gathers sales, inventory and customer data in the cloud. It sells per store, from a free Standard plan for a single store to Premium at 5,500 yen a month, Premium Plus at 8,800 yen, and Food Business and Retail Business at 15,400 yen, and has added the PAYGATE payment terminal, the Smaregi Timecard attendance service, and an App Market where outside developers sell apps built on its API. Revenue for the fiscal year ended April 2026 was 13,345 million yen (up 20.6%) and operating profit 3,216 million yen (up 35.2%), the thirteenth consecutive year of revenue growth. At the end of July 2026 it had 49,952 paying stores, ARR of 11,589 million yen, and quarterly transaction volume of 932.1 billion yen. Using the earnings presentations, financial summaries, company profile, history, pricing, SLA, PAYGATE fees, the tech stack on its recruiting page, the affiliate and partner pages and this site's own observations, the article dissects the ladder pricing that starts free, a stack built on PHP, Aurora and iOS, a business that raises revenue per store by cross-selling payments, and a plan that targets ARR of 30 billion yen in 2031."
lead: "Smaregi's earnings presentation reports one number every quarter: 11,520 yen a month per store, its ARPU. The free Standard plan is not counted. There are 49,952 paying stores, and in three months those stores recorded 932.1 billion yen of sales, 65% of it cashless. The app born in 2011 as \"a POS register system using iPhone / iPod\" was built on the idea that the essence of a register is not the hardware but the point-of-sale payment and the data it aggregates. Fifteen years later the same company calls itself \"the OS for stores\" and bundles payments, attendance and e-commerce toward ARR of 30 billion yen. This article dissects, from public information alone, where and how a register given away for free makes money."
category: saas
tags: [pos, retail, restaurant, payments, fintech, saas, php, aws, ipo]
publishedAt: "2026-10-10"
updatedAt: "2026-10-10"
lastVerified: "2026-10-10"
serviceUrl: "https://smaregi.jp/"
# Affiliate link placeholder: Smaregi runs an official affiliate program through the ASP "Dairin"
# (https://smaregi.jp/partner/affiliate.php, checked 2026-10-10: register with Dairin, pass its review,
# then search for the Smaregi program and apply; rewards are paid for new downloads of Smaregi's service
# brochure and of the white paper "How to choose and compare POS registers"). Dairin's ad code must be
# used as provided: copy the link to affiliate.url, the 1x1 impression image (if any) to
# affiliate.impressionUrl and the text ad verbatim to affiliate.label. Never invent the label — ask the
# owner for the material's exact text. Keep every field identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<dairin-link-for-smaregi>"
#   program: "スマレジ アフィリエイトパートナー（Dairin）"
#   impressionUrl: "https://<impression-pixel>"
#   label: "<verbatim text of the ad material>"
vendor: "Smaregi, Inc."
origin: "JP"
heroTheme: "smaregi"
scores: { product: 4.0, ux: 4.0, tech: 3.5, business: 4.0 }
techStack:
  - layer: "Server side"
    name: "PHP / Laravel / CakePHP"
    confidence: confirmed
    evidence: "The official recruiting page for engineers (checked 2026-10-10) lists PHP, JavaScript and SQL as server-side languages and Laravel and CakePHP as frameworks in its development environment and tech stack. The same page says more than 40% of its engineers learned PHP after joining"
    evidenceUrl: "https://corp.smaregi.jp/recruit/teams/engineer.php"
  - layer: "Database"
    name: "Amazon Aurora (MySQL-compatible)"
    confidence: confirmed
    evidence: "The database section of the same recruiting page lists \"Aurora\" and \"MySQL\""
    evidenceUrl: "https://corp.smaregi.jp/recruit/teams/engineer.php"
  - layer: "Cloud infrastructure"
    name: "AWS"
    confidence: confirmed
    evidence: "The recruiting page names Aurora, an AWS service, as the database. This site's own observation (2026-10-10) also found the login entry point www1.smaregi.jp returning an AWSALB cookie, which AWS Application Load Balancer issues, and the developer portal developers.smaregi.dev responding through CloudFront"
    evidenceUrl: "https://corp.smaregi.jp/recruit/teams/engineer.php"
  - layer: "Front end"
    name: "Vue.js / Nuxt / Next.js / TypeScript"
    confidence: confirmed
    evidence: "The recruiting page lists JavaScript (ES2018) and TypeScript under front end, and Nuxt, Next.js, Vue.js, jQuery and Bootstrap under frameworks. This site's own observation (2026-10-10) found the App Market at apps.smaregi.jp returning x-powered-by: Nuxt"
    evidenceUrl: "https://corp.smaregi.jp/recruit/teams/engineer.php"
  - layer: "Register app (iOS)"
    name: "Swift / Objective-C"
    confidence: confirmed
    evidence: "The recruiting page lists Objective-C, Swift and Dart (Flutter) under iOS. The official service guarantee page says transaction data is first saved on the register device (iPad, iPhone, iPod touch) so sales can continue if the server goes down, and a press release introduces Smaregi as a POS register \"using iPad and iPhone\""
    evidenceUrl: "https://corp.smaregi.jp/recruit/teams/engineer.php"
  - layer: "Android and payment terminal"
    name: "Kotlin / Flutter"
    confidence: confirmed
    evidence: "The recruiting page lists AndroidJava, Kotlin and Dart (Flutter) under Android. The corporate PAYGATE page says the mobile multi-payment terminal \"PAYGATE Station\" launched in December 2018 and in February 2019 became the first Android device in Japan certified as a PCI P2PE solution (since ended)"
    evidenceUrl: "https://corp.smaregi.jp/recruit/teams/engineer.php"
  - layer: "Cashless payments"
    name: "PAYGATE"
    confidence: confirmed
    evidence: "The corporate PAYGATE page (checked 2026-10-10) describes a multi-payment terminal for credit cards, e-money and QR codes that complies with PCI DSS, keeps no card data on the device, links with Smaregi POS so amounts need not be keyed twice, and completes register and payment with the built-in \"PAYGATE POS\" app. The company history says RoyalGate Inc. became a subsidiary in December 2021 and PAYGATE went on sale in May 2022"
    evidenceUrl: "https://corp.smaregi.jp/service/paygate.php"
  - layer: "Platform and API"
    name: "Smaregi Platform API / App Market"
    confidence: confirmed
    evidence: "The developer site \"Smaregi Developers\" (checked 2026-10-10) publishes API specifications for POS, inventory, order management, Waiter, Timecard and Smaregi EC, and states that apps built on them can be sold to retailers and restaurants through the App Market. The company history says \"Smaregi 4\" and the App Market launched in July 2020"
    evidenceUrl: "https://developers.smaregi.jp/"
  - layer: "Help center"
    name: "Zendesk (help.smaregi.jp)"
    confidence: likely
    evidence: "This site's own observation (2026-10-10) found help.smaregi.jp redirecting to the /hc path and returning a cookie named _help_center_session, a configuration characteristic of Zendesk help centers, suggesting the help site runs on Zendesk"
  - layer: "Own website delivery"
    name: "nginx"
    confidence: likely
    evidence: "This site's own observation (2026-10-10) found smaregi.jp and corp.smaregi.jp returning server: nginx"
sources:
  - label: "Smaregi official: Home page"
    url: "https://smaregi.jp/"
    accessedAt: "2026-10-10"
  - label: "Smaregi official: Plans and option prices"
    url: "https://smaregi.jp/price/"
    accessedAt: "2026-10-10"
  - label: "Smaregi official: Service guarantee (99.95% SLA)"
    url: "https://smaregi.jp/feature/sla.php"
    accessedAt: "2026-10-10"
  - label: "Smaregi official: PAYGATE prices and fees"
    url: "https://smaregi.jp/payment/price.php"
    accessedAt: "2026-10-10"
  - label: "Smaregi official: Smaregi App Market"
    url: "https://smaregi.jp/product/appmarket.php"
    accessedAt: "2026-10-10"
  - label: "Smaregi official: Affiliate partners (Dairin)"
    url: "https://smaregi.jp/partner/affiliate.php"
    accessedAt: "2026-10-10"
  - label: "Smaregi official: Business partners (referral and agency partners)"
    url: "https://smaregi.jp/partner/"
    accessedAt: "2026-10-10"
  - label: "Smaregi Developers (API specifications, App Market)"
    url: "https://developers.smaregi.jp/"
    accessedAt: "2026-10-10"
  - label: "Smaregi, Inc. corporate site: Home page (active stores, cumulative transactions, cumulative transaction value)"
    url: "https://corp.smaregi.jp/"
    accessedAt: "2026-10-10"
  - label: "Smaregi, Inc. corporate site: Company overview"
    url: "https://corp.smaregi.jp/corporate/company.php"
    accessedAt: "2026-10-10"
  - label: "Smaregi, Inc. corporate site: History"
    url: "https://corp.smaregi.jp/corporate/history.php"
    accessedAt: "2026-10-10"
  - label: "Smaregi, Inc. corporate site: Directors"
    url: "https://corp.smaregi.jp/corporate/directors.php"
    accessedAt: "2026-10-10"
  - label: "Smaregi, Inc. corporate site: Business, Smaregi (POS)"
    url: "https://corp.smaregi.jp/service/smaregi.php"
    accessedAt: "2026-10-10"
  - label: "Smaregi, Inc. corporate site: Business, PAYGATE (payments)"
    url: "https://corp.smaregi.jp/service/paygate.php"
    accessedAt: "2026-10-10"
  - label: "Smaregi, Inc. corporate site: Careers, Engineers (development environment and tech stack)"
    url: "https://corp.smaregi.jp/recruit/teams/engineer.php"
    accessedAt: "2026-10-10"
  - label: "Smaregi, Inc. corporate site: Careers, Smaregi in numbers (headcount, job mix)"
    url: "https://corp.smaregi.jp/recruit/about/infographics.php"
    accessedAt: "2026-10-10"
  - label: "Smaregi, Inc. corporate site: Long-term vision and medium-term plan (VISION 2031, third medium-term plan)"
    url: "https://corp.smaregi.jp/ir/management/vision2031.php"
    accessedAt: "2026-10-10"
  - label: "Smaregi, Inc. IR: Q1 results for the fiscal year ending April 2027 (financial summary, presentation)"
    url: "https://corp.smaregi.jp/ir/result/fy2027_1Q/"
    accessedAt: "2026-10-10"
  - label: "Smaregi, Inc. IR: Q1 FY2027 presentation material (PDF)"
    url: "https://ssl4.eir-parts.net/doc/4431/tdnet/2884808/00.pdf"
    accessedAt: "2026-10-10"
  - label: "Smaregi, Inc. IR: Q1 FY2027 consolidated financial summary, Japanese GAAP (PDF)"
    url: "https://ssl4.eir-parts.net/doc/4431/tdnet/2884800/00.pdf"
    accessedAt: "2026-10-10"
  - label: "Smaregi, Inc. IR: Full-year results for the fiscal year ended April 2026 (financial summary, presentation)"
    url: "https://corp.smaregi.jp/ir/result/fy2026_4Q/"
    accessedAt: "2026-10-10"
  - label: "Smaregi, Inc. IR: FY2026 full-year presentation material (PDF)"
    url: "https://ssl4.eir-parts.net/doc/4431/tdnet/2835408/00.pdf"
    accessedAt: "2026-10-10"
  - label: "Smaregi, Inc. press release: Smaregi signs a distributor agreement with SB C&S (2026-09-30)"
    url: "https://corp.smaregi.jp/news/press/20260930_distributoragreement.php"
    accessedAt: "2026-10-10"
---

Smaregi is a POS register that turns iPads and iPhones into registers and gathers sales, inventory and customer records in the cloud. Where [Square](/en/articles/square), dissected on this site, built a register as a payments company, Smaregi started from register software and added payments, attendance and e-commerce later. For restaurants, retailers, clinics and event merchandise stands, it is free for a single store, and the monthly price rises as stores and features are added. Smaregi, Inc., which runs it, is listed on the Tokyo Stock Exchange's Growth market and headquartered in Osaka, and every earnings release publishes paying store counts, revenue per store, churn and transaction volume.

## Service overview

Smaregi centers on the "Smaregi" POS register and sells Smaregi Waiter for taking restaurant orders, Smaregi Timecard for attendance and payroll, the PAYGATE payment terminal, Smaregi EC, which bundles online store orders and inventory, and the Smaregi App Market, where apps built by outside developers can be bought.

:::fact
According to the company overview and history pages (as of 2026-10-10), Smaregi, Inc. was founded on May 24, 2005 as Genefix Design, released the tablet POS "Smaregi" in September 2011, changed its name from Plugram to the current one in November 2016, listed on the Tokyo Stock Exchange's Mothers market in February 2019 (ticker 4431) and moved to the Growth market in April 2022. Capital is 1,156 million yen (as of April 30, 2026), the head office is in Honmachi, Chuo Ward, Osaka, with offices in Tokyo, Akasaka, Fukuoka and Fukui, a support center in Sapporo, and six showrooms in Ebisu, Ikebukuro, Nagoya, Osaka, Fukuoka and Okinawa. In July 2024 Ryuhei Miyazaki, who joined in 2011 and created Smaregi Timecard, became president, and founder Hiroshi Yamamoto became chairman of the board; as of October 2026 the officers section of the company overview lists Yamamoto as an advisor (management and capital policy), and Makoto Tokuda, one of the 2005 founders and the creator of its design system, as an advisor for investor relations. The CTO is Naoi Okada, who joined in 2017 and became executive officer and CTO in 2025. The corporate home page puts active stores at 58,275, cumulative transactions at 3.59 billion and cumulative transaction value at more than 15.5 trillion yen as of the end of July 2026. The history lists cumulative transaction value of 1 trillion yen in July 2018, "Smaregi 4" and the App Market in July 2020, the "device subscription plan" renting peripherals for a monthly fee in September 2021, the acquisition of payments company RoyalGate in December 2021, the acquisition of Netshop Shienshitsu in December 2024, ARR passing 10 billion yen in December 2025, and in March 2026 the AI-based financing service "Smaregi Shussebarai" and the third medium-term plan.
:::

:::fact
According to the pricing page (checked 2026-10-10, tax included, per store per month), there are five plans: Standard (0 yen, one store only, up to 1,000 products, no monthly analysis), Premium (5,500 yen, consolidated sales management across stores), Premium Plus (8,800 yen, "most popular," 100,000 customer records, points, phone support, self-checkout), Food Business for restaurants with mobile ordering built in (15,400 yen, order entry, kitchen tickets) and Retail Business for retailers (15,400 yen, advanced inventory, order management, passport scanning and electronic tax-free processing); using Food and Retail together costs 22,000 yen. Up to three register devices per store are free, each additional one is 1,540 yen, and Standard cannot add any. Beyond 100,000 products or 100,000 members, usage-based billing applies; order management costs 11,000 yen per receiving store plus 33 yen per transaction from the 1,001st each month, a self-checkout device 1,320 yen, and head-office management bundling several contracts starts at 11,000 yen a month plus 88,000 yen to issue a head-office account. Linking payment terminals from Rakuten Pay, STORES, Square and others costs 1,320 yen per device. Smaregi Timecard starts at 0 yen (features linked to Smaregi from 2,420 yen a month). The same page puts cashless payment fees at 1.98% and up.
:::

:::pull
The free register is not counted. What is counted are the stores that pay, and the money that passes through their registers.
:::

::scorecard

## UX analysis

Smaregi's experience tries to answer both the shop-floor demand that "the register must not go down" and the SaaS convention of "pay only for what you use." The price of that is a plan table that has to be read both down and across.

- **The register keeps working when the server does not.** According to the service guarantee page, sales records are saved first on the register device (iPad, iPhone, iPod touch), so selling continues if the server stops, and if the app crashes or the battery dies mid-sale, restarting restores the cart as it was. Monthly uptime of 99.95% is guaranteed under an SLA (described as "a first in the industry at the time" when it began in July 2013), and a month below that refunds 10% of the monthly fee. It answers the first condition a cloud register has to meet to be chosen in a store.
- **Start free with one store, then climb.** Standard is one store only, up to 1,000 products, no monthly analysis, and no extra register devices. Each step of a store's growth, a second location, more products, loyalty points, a self-checkout, meets a higher plan or a per-device charge. A low free entrance and a pay-when-you-grow design live in the same price table.
- **Missing features are bought as apps.** According to the App Market page, only the apps a store needs are bought from its account page. The developer site publishes API specifications for POS, inventory, orders, Waiter, Timecard and EC, and other companies build and sell membership cards, ticket machines, mobile ordering and BI on them. According to the corporate site, there were 2,583 corporate and 1,299 individual development partners at the end of July 2026.
- **Payments in one device.** According to the PAYGATE page, one terminal accepts credit cards, e-money and QR codes, has a built-in 4G connection and printer for use outdoors, and linking it with Smaregi removes double entry of amounts. Fees are 1.98% and up for credit cards (conditional on a small-business plan for merchants with Visa and Mastercard sales of 25 million yen or less in the past year), 3.24% for e-money and 2.00% and up for QR; payouts come twice a month (once a month for QR), and it takes 15 days to a month for a payment to become cash. The terminal costs 39,600 yen, but a new plan with no monthly fee is offered to customers on paid Smaregi plans, with different fees.
- **Tax changes are absorbed in settings.** According to the Q1 FY2027 earnings presentation, the government approved a policy on August 5, 2026 to cut the consumption tax on food from 8% to 1% for two years from April 1, 2027, and the company says Smaregi handles any tax regime immediately with a settings change. Not having to replace the register is pushed to the front as a reason to choose cloud.
- **Many ways to meet a person.** Six showrooms, online consultations, subsidy consultations, downloadable brochures, and a food festival once a year. For a SaaS company the sales touchpoints are many, and the earnings presentation says staff were moved from customer support to sales to strengthen selling. There are many places to try before buying, but comparing everything alone before making contact takes work, because the information is spread out.

## Tech stack

::techstack

:::fact
According to the engineering recruiting page (checked 2026-10-10), Smaregi's development environment is PHP, JavaScript and SQL on the server with Laravel and CakePHP; JavaScript (ES2018) and TypeScript on the front end with Nuxt, Next.js, Vue.js, jQuery and Bootstrap; Objective-C, Swift and Dart (Flutter) for iOS; AndroidJava, Kotlin and Dart (Flutter) for Android; Aurora and MySQL as databases; PhpStorm, Visual Studio Code and Docker as tools; and macOS as the OS. The organization has teams for Smaregi POS (sales, consolidated online store management, inventory), PAYGATE, the platform (management features, App Market, apps for stores), Timecard and Waiter, plus a CTO office, service infrastructure and quality assurance. The same page says more than 40% of its engineers learned PHP after joining and that coming to the office at least four times a month is the rule, with fully remote work not allowed; the careers page "Smaregi in numbers" says that of 435 employees in the fiscal year ended April 2025, 29% were in technical roles, with 106 engineers and designers in Osaka. This site's own observation (2026-10-10) found the login entry point www1.smaregi.jp returning an AWSALB cookie, the developer portal developers.smaregi.dev responding through CloudFront with a cookie name Laravel uses (XSRF-TOKEN), the App Market apps.smaregi.jp returning x-powered-by: Nuxt, and smaregi.jp and corp.smaregi.jp returning server: nginx.
:::

:::fact
According to the corporate PAYGATE page, PAYGATE's history begins with "PAYGATE MAG" in April 2011, obtains the international card security standard PCI DSS in April 2014, releases "PAYGATE AIR," a PCI DSS-compliant service on Microsoft Azure, in November 2015, and launches the mobile multi-payment terminal "PAYGATE Station" in December 2018. According to the company history, RoyalGate Inc., which owned this business, became a subsidiary in December 2021, PAYGATE went on sale in May 2022, and the subsidiary was absorbed in July. According to the directors page, Tetsuya Takahashi, who joined in 2023 as head of the payments business, led the integration of the former RoyalGate, which turned profitable in the second quarter of the fiscal year ended April 2024. The service guarantee page explains the design of saving sales data on the device as a hedge against server outages, and the 99.95% monthly uptime SLA.
:::

:::guess
Keeping a PHP and MySQL-family stack for fifteen years, with two frameworks, Laravel and CakePHP, appears to reflect code dating from the 2011 release living alongside newer services. That the recruiting page says "40% learned PHP after joining" reads as a policy of hiring people who know store operations rather than a language. Concentrating the register app on iOS while using Android for the PAYGATE Station payment terminal presumably balances limiting the devices that must not fail on the shop floor with closing payments inside the company's own PCI DSS-certified terminal. nginx and Laravel on top of AWS Aurora and CloudFront is a standard configuration for a Japanese SaaS company, and the emphasis appears to lie not on differentiating through technology but on the platform side, publishing API specifications and letting other companies build apps.
:::

## The OS for stores, in numbers

:::fact
According to the full-year earnings presentation for the fiscal year ended April 2026, revenue was 13,345 million yen (up 20.6%), operating profit 3,216 million yen (up 35.2%) and net profit 2,228 million yen, the thirteenth consecutive year of revenue growth and fourth of profit growth, a record, with an operating margin of 24.1% for the year. Within revenue, monthly fees and similar were 10,090 million yen (up 31.7%) and equipment sales 2,823 million yen (down 7.4%), as the shift from selling peripherals outright to the monthly "device subscription" advanced. ARR at year end was 11,055 million yen (up 27.4%) and headcount 477. Shareholder returns target a payout ratio of about 20%, with annual dividends of 462 million yen (a 20.7% payout ratio), two share buybacks totaling about 760 million yen, and the "OS for Stores Fund" for M&A and investment of up to 10 billion yen over the three years of the medium-term plan. According to the presentation for the first quarter of the fiscal year ending April 2027 (May to July 2026), revenue was 3,608 million yen (up 19.7% year on year), operating profit 1,027 million yen (up 73.3%), a quarterly record, with an operating margin of 28.5% and an equity ratio of 71.0%. ARR was 11,589 million yen (up 22.9%): 7.2 billion yen from POS (up 19.4%), 2.75 billion yen from cashless payments (up 38.6%) and 860 million yen from Timecard (up 21.4%). Paying stores numbered 49,952 (up 14.5%, 1,655 more than the previous quarter), ARPA per contract was 25,505 yen, ARPU per store 11,520 yen, MRR churn 0.41%, and quarterly transaction volume (GMV) 932.1 billion yen (up 22.7%) with a cashless share of 64.9%; cumulative transaction value passed 15 trillion yen in June 2026. Payment contracts numbered 17,803, and the share of POS users who also use its payments (cross-sell rate) was 34.1%. The full-year plan is revenue of 15,387 million yen, operating profit of 4,004 million yen and ARR of 14.2 billion yen (up 28.4%); the third medium-term plan targets ARR of 22.2 billion yen in the fiscal year ending April 2029, and the long-term VISION 2031 targets ARR of 30 billion yen in the fiscal year ending April 2031. ARR is calculated as the final month's MRR (monthly fees and similar) multiplied by 12.
:::

| Metric (consolidated) | FY ended April 2026 (full year) | Q1 FY ending April 2027 |
| --- | --- | --- |
| Revenue | 13,345 million yen (+20.6%) | 3,608 million yen (+19.7%) |
| Operating profit | 3,216 million yen (+35.2%) | 1,027 million yen (+73.3%) |
| Operating margin | 24.1% | 28.5% |
| ARR | 11,055 million yen (+27.4%) | 11,589 million yen (+22.9%) |
| Paying stores | — | 49,952 (+14.5%) |
| Quarterly transaction volume (GMV) | — | 932.1 billion yen (+22.7%, 64.9% cashless) |
| Employees | 477 | 483 |

:::guess
Profit growing faster than revenue appears to come from recurring monthly revenue piling up while the company deliberately shrank one-off equipment sales and cut costs by bringing the payments business in-house. With payments the fastest-growing part of ARR and only a third of POS users on its payments, selling terminals to the other two-thirds is presumably the cheapest source of growth for now. Against about 50,000 paying stores, the company reports about 58,000 active stores, and the free stores in between appear to form the pool of prospects for higher plans and payments. Taking ARR from 11 billion yen in the fiscal year ended April 2026 to 30 billion yen in 2031 means five years of growth above 20% a year, which store counts alone cannot deliver; it reads as a plan premised on stacking revenue per store through payment take rates, device subscriptions, e-commerce and Timecard.
:::

## Business model

Revenue comes from monthly fees per store, sales and subscriptions of peripherals, monthly fees and transaction fees on cashless payments, Timecard and EC fees, and App Market commissions. The free Standard plan gathers stores, and store growth and payment cross-selling raise revenue per store.

:::fact
According to the affiliate page (checked 2026-10-10), Smaregi recruits official affiliate partners through the affiliate service "Dairin"; participation is free, partners apply to the Smaregi program after passing Dairin's review, and rewards are paid for new downloads of the service brochure and of the white paper "How to choose and compare POS registers." The business partner page recruits two kinds of partner: "referral partners," who introduce prospects and receive a referral fee when a paid plan is signed, and "agency partners," who handle proposals through contract intermediation and receive a monthly agency fee, with contracts and support handled by Smaregi. According to a press release (2026-09-30), the company signed a distributor agreement with SB C&S, which inherited the SoftBank Group's IT distribution business, so that sales partners nationwide can carry Smaregi, PAYGATE and Timecard. In the same release, executive officer Masashi Sakamoto said the main engine of growth so far had been the company's own web-centered marketing. The earnings presentation lists among the topics of Q1 FY2027 that Smaregi was certified as a "recommended replacement POS register" by the national cosmetics retailers' association after the POS function of a specialty-store system was discontinued, with more than 1,100 stores expected to migrate; that the bankruptcy of credit card processor Zentoshin affected payments and settlement at its member stores; and that the company's services were designated eligible tools under the "Digitalization and AI Adoption Subsidy 2026."
:::

:::guess
An affiliate program that pays for brochure downloads and a three-layer partner system of referral, agency and distributor appear to express a judgment that a product priced in the low tens of thousands of yen per store per month cannot profitably be sold nationwide by the company's own sales force alone. For a company that grew on its own web marketing, teaming with SB C&S presumably serves the third medium-term plan's "focus on mid-sized and large deals" without adding headcount. That the earnings presentation frames regulatory changes such as the consumption tax cut and the refund-style tax-free system as opportunities to replace registers reads as a cloud POS, whose selling point is regulatory compliance, treating changes in the law as its biggest sales opportunity. Listing the bankruptcy of another payment processor and its effect on member stores among its own topics suggests, on the other hand, that bringing payments in-house is sold not only for the share of fees but as the assurance that a store's payments will not stop.
:::

Born in 2011 as a register on iPhone and iPod, Smaregi spent fifteen years turning the register into "the entrance to point-of-sale payments and aggregated data," reaching 50,000 paying stores, ARR of 11.6 billion yen and quarterly transactions of 932.1 billion yen in 2026. The register it gave away is not counted, because what it counts is the growth of stores and the money paid through them. The "OS for stores" that targets ARR of 30 billion yen is a company that will show, in numbers, with every earnings release, what it holds beyond the register.
