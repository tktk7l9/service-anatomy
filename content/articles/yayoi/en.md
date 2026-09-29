---
service: "Yayoi Blue Return Online (Yayoi)"
title: "Free for Year One, Half the Rivals' Price After — Yayoi Prices by Phone Support, Not Features, and Keeps Half of Japan's Cloud Tax Filers"
description: "Yayoi has led Japan's cloud accounting software for sole proprietors for 11 straight years. Its cheapest plan that can file consumption-tax returns costs ¥11,800 a year before tax — about half of freee or Money Forward — and nothing in the first year. We dissect a price list that splits three plans only by how much support you get, the January 2026 price revision, and the customer base carried over from packaged software under KKR ownership, using the MM Research Institute survey, the official site, press releases and the official developer blog. We also read two generations of its stack: a filing app that appears to run on ASP.NET and Azure, and newer services built on AWS."
lead: "More than half of the sole proprietors who file their taxes with cloud software in Japan use Yayoi. MM Research Institute's survey as of March 2026 puts it at 54.0%, first place for 11 years running since the survey began. Its cheapest plan that also handles consumption-tax returns is ¥11,800 a year before tax, and the first year is free. At freee and Money Forward, the plans that can file consumption tax cost over ¥20,000 a year. So how does Yayoi stay on top at half the price? We dissect it from how the price list is cut, and from what the filing app reveals about itself."
category: saas
tags: [accounting, small-business, fintech, azure, mcp]
publishedAt: "2026-09-29"
updatedAt: "2026-09-29"
lastVerified: "2026-09-29"
serviceUrl: "https://www.yayoi-kk.co.jp/shinkoku/aoiroshinkoku/"
# Affiliate link placeholder: Yayoi's program is available on Moshimo Affiliate
# without review. The owner must get the tracking link from the Moshimo
# dashboard before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://af.moshimo.com/af/c/click?a_id=<a_id>&p_id=<p_id>&pc_id=<pc_id>&pl_id=<pl_id>"
#   program: "Yayoi Affiliate Program (Moshimo Affiliate)"
vendor: "Yayoi Co., Ltd."
origin: "JP"
heroTheme: "yayoi"
scores: { product: 4.0, ux: 3.5, tech: 3.0, business: 4.0 }
techStack:
  - layer: "Filing app (web framework)"
    name: "ASP.NET (.NET Framework 4.x)"
    confidence: likely
    evidence: "Our own observation (2026-09-29): shinkoku.yayoi-kk.co.jp, the host the Yayoi Blue Return Online login points to, returns x-aspnet-version: 4.0.30319 — a header added by ASP.NET on .NET Framework 4.x. kaikei.yayoi-kk.co.jp, used by the online accounting product, returns the same value"
  - layer: "Filing app (hosting)"
    name: "Microsoft Azure (Application Gateway / App Service)"
    confidence: likely
    evidence: "Our own observation (2026-09-29): shinkoku.yayoi-kk.co.jp returns Azure Application Gateway's session-affinity cookie (ApplicationGatewayAffinity), and kaikei.yayoi-kk.co.jp returns Azure App Service's cookie (ARRAffinity). Both are CNAMEs to Akamai (edgekey.net) in DNS"
  - layer: "Web architecture of new services"
    name: "Next.js (BFF) + GraphQL (Apollo Federation) + NestJS"
    confidence: confirmed
    evidence: "Official developer blog (2021-12): a new service under development at Yayoi used Next.js on the frontend with a GraphQL server in API Routes as a BFF, and a C# (ASP.NET Core) REST backend; while moving to GraphQL step by step, the team adopted NestJS and combined multiple GraphQL APIs with Apollo Federation. The post does not name the product"
    evidenceUrl: "https://tech-blog.yayoi-kk.co.jp/entry/entry/2021/12/23/000000"
  - layer: "Sibling product infrastructure"
    name: "AWS ECS + Terraform + CodeDeploy (Misoca)"
    confidence: confirmed
    evidence: "Official developer blog (2021-12): the invoicing service Misoca moved its production environment from EC2 to ECS without downtime, step by step, using Route53 weighted routing; infrastructure is managed with Terraform and deployed Blue/Green with CodeDeploy"
    evidenceUrl: "https://tech-blog.yayoi-kk.co.jp/entry/2021/12/06/000000"
  - layer: "Operations automation"
    name: "Azure Automation / Data Factory / Logic Apps"
    confidence: confirmed
    evidence: "Official developer blog (2024-12): the Service Platform department moved scheduled jobs that ran on the Task Scheduler of on-premises Windows Servers to Azure Automation runbooks, Azure Data Factory and Azure Logic Apps"
    evidenceUrl: "https://tech-blog.yayoi-kk.co.jp/entry/2024/12/12/000000"
  - layer: "AI agent integration"
    name: "Misoca MCP (remote MCP / OAuth)"
    confidence: confirmed
    evidence: "Misoca's official blog (2026-09-15): Misoca MCP, for paid-plan customers, lets Claude.ai, Claude Desktop and Cursor operate Misoca — creating and searching invoices, changing their status, creating and searching clients and recipients, and fetching invoice PDFs. It does not update, delete or email invoices, and does not cover quotes, delivery notes or receipts. Authentication is OAuth"
    evidenceUrl: "https://www.misoca.jp/blog/update_20260915"
  - layer: "Development process"
    name: "Cursor / Devin / Claude Code + Databricks"
    confidence: confirmed
    evidence: "Official developer blog (2026-08): Yayoi has pushed AI-driven development as an organization since the first half of 2025; across about 412 people measured, the company-wide average number of PRs rose from 6.9 in April 2025 to 11.41 recently (+65.5%), with usage aggregated in Databricks"
    evidenceUrl: "https://tech-blog.yayoi-kk.co.jp/entry/2026/08/12/110000"
  - layer: "Corporate site delivery"
    name: "Adobe Experience Manager + Akamai / Fastly"
    confidence: likely
    evidence: "Our own observation (2026-09-29): www.yayoi-kk.co.jp is a CNAME to Akamai (edgekey.net), and its responses carry x-served-by: cache-nrt-… and x-timer, which point to a Fastly cache node. Image paths are /content/dam/yayoi-corp/…, body elements use the cmp-text class, and the response includes x-vhost: publish — all consistent with an Adobe Experience Manager publish tier"
sources:
  - label: "Yayoi Co., Ltd.: Yayoi wins No.1 share of cloud accounting software for sole proprietors for the 11th straight year at 54.0% (Japanese, 2026-04-30)"
    url: "https://www.yayoi-kk.co.jp/company/pressrelease/detail.20260430/"
    accessedAt: "2026-09-29"
  - label: "MM Research Institute: Cloud accounting use among sole proprietors reaches 38.4%, nearing 40% (Japanese, 2026)"
    url: "https://www.m2ri.jp/release/detail.html?id=711"
    accessedAt: "2026-09-29"
  - label: "Yayoi Co., Ltd.: Yayoi wins No.1 share of cloud accounting software for sole proprietors for the 10th straight year (Japanese, 2025-05-13)"
    url: "https://www.yayoi-kk.co.jp/company/pressrelease/detail.20250513/"
    accessedAt: "2026-09-29"
  - label: "Yayoi Co., Ltd.: Yayoi Blue Return Online (Japanese)"
    url: "https://www.yayoi-kk.co.jp/shinkoku/aoiroshinkoku/"
    accessedAt: "2026-09-29"
  - label: "Yayoi Co., Ltd.: Yayoi Blue Return Online pricing plans (Japanese)"
    url: "https://www.yayoi-kk.co.jp/shinkoku/aoiroshinkoku/price/"
    accessedAt: "2026-09-29"
  - label: "Yayoi Co., Ltd.: Notice of price revision for Yayoi Blue Return Online (Japanese, 2025-09-01)"
    url: "https://www.yayoi-kk.co.jp/yss/info/detail.20250901/"
    accessedAt: "2026-09-29"
  - label: "Yayoi Co., Ltd.: Yayoi Blue Return 26 prices (Japanese)"
    url: "https://www.yayoi-kk.co.jp/shinkoku/aoiroshinkoku/yayoiaoiro/price/"
    accessedAt: "2026-09-29"
  - label: "Yayoi Co., Ltd.: Yayoi Blue Return Online and Yayoi White Return Online start supporting 2025 income tax returns (Japanese, 2026-01-30)"
    url: "https://www.yayoi-kk.co.jp/company/pressrelease/detail.2060130_2/"
    accessedAt: "2026-09-29"
  - label: "KKR: KKR completes acquisition of Yayoi shares (Japanese, 2022-03-01)"
    url: "https://www.kkr.com/content/dam/kkr/country-sites/jp/press-release/2022/20220301-kkr-%E7%94%9F%E3%81%AE%E6%A0%AA%E5%BC%8F%E8%AD%B2%E6%B8%A1%E5%AE%8C%E4%BA%86.pdf"
    accessedAt: "2026-09-29"
  - label: "Yayoi Co., Ltd. (ORIX Group news release): Acquisition of cloud invoicing venture Misoca (Japanese, 2016-02-22)"
    url: "https://www.orix.co.jp/grp/company/newsroom/newsrelease/160222_ORIXG.html"
    accessedAt: "2026-09-29"
  - label: "MM Research Institute: Yayoi releases Yayoi Kaikei Next and updates Yayoi Kyuyo Next (Japanese)"
    url: "https://www.m2ri.jp/topics/detail.html?id=796"
    accessedAt: "2026-09-29"
  - label: "Yayoi Developer Blog: Migrating microservice APIs from REST to GraphQL step by step (Japanese, 2021-12)"
    url: "https://tech-blog.yayoi-kk.co.jp/entry/entry/2021/12/23/000000"
    accessedAt: "2026-09-29"
  - label: "Yayoi Developer Blog: Migrating production infrastructure to ECS without downtime using Route53 weighted routing (Japanese, 2021-12)"
    url: "https://tech-blog.yayoi-kk.co.jp/entry/2021/12/06/000000"
    accessedAt: "2026-09-29"
  - label: "Yayoi Developer Blog: Moving the Task Scheduler runtime to Azure (Japanese, 2024-12)"
    url: "https://tech-blog.yayoi-kk.co.jp/entry/2024/12/12/000000"
    accessedAt: "2026-09-29"
  - label: "Yayoi Developer Blog: One year of organization-wide Cursor adoption (Japanese, 2026-08)"
    url: "https://tech-blog.yayoi-kk.co.jp/entry/2026/08/12/110000"
    accessedAt: "2026-09-29"
  - label: "Misoca: Launch of Misoca MCP, operating Misoca from AI tools (Japanese, 2026-09-15)"
    url: "https://www.misoca.jp/blog/update_20260915"
    accessedAt: "2026-09-29"
  - label: "freee: Pricing plans for sole proprietors (Japanese, for comparison)"
    url: "https://www.freee.co.jp/personal-business/accounting/pricing/"
    accessedAt: "2026-09-29"
  - label: "Money Forward Cloud Support: Partial revision of pricing (Japanese, 2026-09-24, for comparison)"
    url: "https://biz.moneyforward.com/support/plan/news/20260924.html"
    accessedAt: "2026-09-29"
---

Japan's three-way race in cloud accounting is often told as a story about two companies, freee and Money Forward. Both are listed, and their earnings materials put out numbers every quarter. But on the screens of sole proprietors, first place has always belonged to someone else: Yayoi, maker of the "Yayoi Series" of packaged software that began in 1987. We read how an unlisted company keeps half the market, from its public price list, an industry survey, and the HTTP headers its app sends back.

## What It Is

Yayoi Blue Return Online (Yayoi no Aoiro Shinkoku Online) is Yayoi's cloud tax-filing software for sole proprietors. It pulls in bank and credit-card statements and receipts, turns them into journal entries, and carries users through the blue-form financial statements and income tax return to e-filing with e-Tax. It sits beside Yayoi White Return Online for white-form filers and Yayoi Blue Return 26, installed on a PC. For corporations, Yayoi launched Yayoi Kaikei Next in April 2025 under a new cloud brand, "Yayoi Next."

:::fact
According to MM Research Institute's web survey of 15,845 sole proprietors who filed returns for 2025, run March 23–26, 2026, 40.9% of sole proprietors use accounting software, and 38.4% of them use cloud accounting software (38.3% a year earlier). By vendor, Yayoi holds 54.0% of cloud accounting users (down 1.4 points), freee 25.1% and Money Forward 15.7%; the top three account for 94.8%. Among accounting-software users, 51.0% use software installed on a PC. Yayoi's press release says it has held first place with more than 50% every year since the survey began in 2016, and that registered users exceed 3.5 million. In its February 2016 announcement of the Misoca acquisition, Yayoi said it had been rolling out its cloud business in earnest since 2014, offering Yayoi Kaikei Online, Yayoi Blue Return Online and Yayoi White Return Online.
:::

:::fact
According to the official pricing page, Yayoi Blue Return Online has three plans, all priced before tax. The Self plan is ¥11,800 a year and the Basic plan ¥22,800 a year, both free in the first year. The Total plan is ¥39,600 a year, half price (¥19,800) in the first year. The page says "every plan can use every product feature," and that consumption-tax returns, income-tax returns, invoice-system support and e-Tax filing are all free in the first year. The first-year offer requires registering a bank debit or credit card as the automatic-renewal payment method.
:::

:::pull
The cheapest plan that can file consumption-tax returns costs ¥11,800 a year at Yayoi, ¥22,560 at Money Forward (from December 2026) and ¥23,760 at freee — all before tax. Yayoi is roughly half.
:::

::scorecard

## UX Analysis

Yayoi Blue Return Online's UX starts with a price list that says: whichever plan you pick, the features are the same — the only choice is support.

- **Plans differ only in support.** Self comes with a web FAQ; Basic adds how-to questions by phone, email and chat; Total adds consultations on journal entries, bookkeeping work and tax returns. The pricing FAQ tells users to choose by "whether you need how-to support," and notes that plans can be changed later. That is a different cut from [freee](/en/articles/freee) and [Money Forward Cloud](/en/articles/moneyforward-cloud), which split plans by whether consumption-tax returns are available.
- **A free first year, and a notice before renewal.** The free first year requires a registered payment method and then renews automatically. The pricing FAQ says nothing is charged without notice: an email about renewal goes out the month before the contract ends, and users can cancel on the web until the end of that month. Separately, a free trial plan lets users try the software for up to two months, excluding the closing and filing features.
- **Import from Mynaportal.** A January 30, 2026 press release says that from the 2025 returns, users can fetch donation-deduction certificates, life-insurance-premium deduction certificates and medical-expense notices online via Mynaportal, the government's My Number portal, and import them directly.
- **Ahead of the ¥750K deduction change.** The official site says the software meets the "high-quality electronic books" requirement for the ¥750,000 blue-form special deduction revised from the 2027 tax year. The MM Research survey summarizes the change: meeting both electronic books and e-Tax raises the maximum deduction from ¥650,000 to ¥750,000, while not going digital shrinks it from ¥550,000 to ¥100,000.
- **Shown side by side with the packaged version.** The pricing page recommends the online version to people who want to keep costs down and the installed Yayoi Blue Return 26 to people who want to keep books properly with vouchers and ledgers. Version 26 is sold in the online store with a maintenance-support plan: ¥14,000 before tax in the first year (with Self or Basic support), then the yearly support fee (¥12,300 for Self, ¥20,700 for Basic, and so on).

## Tech Stack

::techstack

:::fact
According to the official developer blog (2021-12), a "new service" under development at Yayoi used Next.js on the frontend with a GraphQL server in API Routes as a BFF. The backend offered REST APIs in C# (ASP.NET Core), but while moving to GraphQL step by step, the team adopted NestJS and combined multiple GraphQL APIs with Apollo Federation. Misoca, a Nagoya invoicing service whose shares Yayoi fully acquired in February 2016, moved its production environment from AWS EC2 to ECS and manages it with Terraform, according to a post from the same month. Meanwhile, a December 2024 post says the Service Platform department moved scheduled jobs from on-premises Windows Servers to Azure Automation and related services — Yayoi uses both AWS and Azure.
:::

:::fact
When we observed it on 2026-09-29, shinkoku.yayoi-kk.co.jp — which uses the same service_id=shinkoku as the Yayoi Blue Return Online login link — answered an unauthenticated request with a 302 to the login page on myaccount.yayoi-kk.co.jp, returning x-aspnet-version: 4.0.30319 and an Azure Application Gateway session-affinity cookie. kaikei.yayoi-kk.co.jp returned Azure App Service's cookie (ARRAffinity). Both were CNAMEs to Akamai in DNS. Misoca launched Misoca MCP on September 15, 2026, but within what we checked on the official site and in press releases, we found no announcement of an MCP server or generally available API for Yayoi Blue Return Online.
:::

:::guess
The observed headers suggest the online version for sole proprietors is written in ASP.NET on .NET Framework and runs on Azure. The new services the developer blog describes, by contrast, are a different generation: Next.js, NestJS GraphQL and containers on AWS. It is presumed that inside Yayoi, existing cloud products built with technology close to its Windows packaged software run alongside newer cloud products such as Yayoi Next. That the door to AI agents opened first not in the filing app but in Misoca — acquired, and running in containers on AWS — can be read as a sign of that generational gap. The rise in average PRs per person to 1.6x across about 412 people suggests more hands for rebuilding existing products, but public information does not tell when that will reach the filing app.
:::

## Business Model

Revenue rests on annual fees that sole proprietors and corporations pay for software and support. The online version is an annual service fee; the installed version is a package plus an annual maintenance-support fee. Both follow the same pattern: cheap in year one, regular price from year two.

:::fact
According to Yayoi's notice (2025-09-01), Yayoi Blue Return Online revised its prices from January 1, 2026. Annual prices before tax went from ¥10,300 to ¥11,800 for Self (about +15%), from ¥17,250 to ¥22,800 for Basic (about +32%) and from ¥30,000 to ¥39,600 for Total (about +32%). New sign-ups paid the new prices from December 1, 2025, and existing contracts from the next term starting on or after January 1, 2026; the free first year for Self and Basic and the half-price first year for Total continue. The stated reasons are investment in infrastructure and support for stable service, and keeping up with technologies such as generative AI and the cloud.
:::

:::fact
For comparison, freee's official pricing page lists its Standard plan for sole proprietors, which can file consumption-tax returns, at ¥23,760 a year before tax, and its Starter plan, which cannot, at ¥11,760. According to Money Forward Cloud's notice (2026-09-24), its Personal plan, which can file consumption-tax returns, goes from ¥15,360 to ¥22,560 a year before tax for renewals from December 1, 2026.
:::

:::guess
Yayoi's cheapest plan costs about the same as the rivals' bottom plans that cannot file consumption tax, yet includes consumption-tax filing. Instead of pricing by features, Yayoi prices by support that people answer by phone or chat. The gap between Self and Basic is ¥11,000 a year, and Basic also took the largest rise in the revision. It appears to be a structure that loads price only onto the part that costs labor while keeping the software itself cheap. The MM Research survey notes that accounting-software vendors lower the barrier to use with limited-time free campaigns and the like. Yayoi makes that free period a full year and ties it to a registered payment method that leads into automatic renewal in year two. This entry point is presumed to also serve as the way to move users of installed software — 51.0% of users in the survey — onto the cloud.
:::

:::fact
According to KKR's announcement (2022-03-01), KKR completed the acquisition of Yayoi's shares held by ORIX that day. The announcement describes Yayoi as founded in 1978 with more than 2.5 million registered users of the "Yayoi Series," and says KKR hopes to contribute to Yayoi's next stage of growth using its overseas investment record in software and cloud/SaaS. According to MM Research, Yayoi then launched Yayoi Kaikei Next for corporations on April 8, 2025, with features such as AI-based automatic assignment of accounts to journal entries.
:::

Registered users have grown from more than 2.5 million in 2022 to more than 3.5 million, and Yayoi's first place in the cloud has lasted 11 years. It has defended that with a price list that splits plans by support rather than features and makes the first year free. Next to a filing app that appears to run on ASP.NET, a new generation of products and a door to AI agents are starting to open. What that half-share customer base does when the door reaches the filing app is the next thing to watch.
