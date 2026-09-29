---
service: "Money Forward Cloud"
title: "Why a Tax-Filing App Is Raising Its Annual Price by 47% — Money Forward Cloud Re-Prices the Sole Proprietor"
description: "Money Forward Cloud is a back-office SaaS suite for Japanese sole proprietors and small businesses. Of its ¥47.67B SaaS ARR, sole proprietors account for ¥3.12B. We dissect why the Personal plan's annual price rises from ¥15,360 to ¥22,560 in December 2026, using its financial results, earnings presentation and supplemental data, the official support site and the official developer blog — and read how its Rails accounting app and remote MCP server are built."
lead: "On September 24, 2026, Money Forward announced a price revision for sole proprietors. The Personal plan, the one that can file consumption-tax returns, goes from ¥15,360 to ¥22,560 a year for renewals from December 1 — a rise of about 47%. The number of paying sole proprietors keeps growing, now 237K. So why re-price now? We dissect it from the numbers in its earnings materials and from the inside of the accounting app."
category: saas
tags: [accounting, small-business, fintech, ruby-on-rails, mcp]
publishedAt: "2026-09-28"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://biz.moneyforward.com/tax_return/"
affiliate:
  url: "https://af.moshimo.com/af/c/click?a_id=5824839&p_id=888&pc_id=1087&pl_id=38622"
  program: "Money Forward Cloud Affiliate Program (Moshimo Affiliate)"
vendor: "Money Forward, Inc."
origin: "JP"
heroTheme: "moneyforward-cloud"
scores: { product: 4.0, ux: 3.5, tech: 3.5, business: 4.0 }
techStack:
  - layer: "Web framework"
    name: "Ruby on Rails (+ Go)"
    confidence: confirmed
    evidence: "Official developer blog (2019-11): the accounting team that builds Money Forward Cloud Accounting and Tax Return writes that \"the development language is Ruby and the framework is Ruby on Rails; some parts are developed in Go.\" It also says the team uses Git + GitHub and runs automated tests on CircleCI"
    evidenceUrl: "https://moneyforward-dev.jp/entry/2019/11/29/my-resume01/"
  - layer: "Frontend"
    name: "CoffeeScript → Vanilla JS / TypeScript"
    confidence: confirmed
    evidence: "Official developer blog (2024-04): Cloud Accounting, released in 2013, mixed CoffeeScript, Vanilla JS and TypeScript; a project converting about 250 files and 20,000 lines of CoffeeScript to Vanilla JS with decaffeinate started in August 2023 and finished at the end of March 2024"
    evidenceUrl: "https://moneyforward-dev.jp/entry/2024/04/10/190149"
  - layer: "AI agent integration"
    name: "Cloud Accounting MCP server (remote MCP)"
    confidence: confirmed
    evidence: "Official support site: Cloud Accounting and Tax Return users can use the MCP server at no extra charge, with OAuth or API-key authentication, via two URLs — alpha (from March 26, 2026; re-authentication every hour; slated for retirement) and beta (from April 1, 2026; longer authentication and automated re-authentication). Operations include fetching, creating and updating journal entries and fetching trial balances and transition tables"
    evidenceUrl: "https://biz.moneyforward.com/support/account/guide/others/ot10.html"
  - layer: "Mobile distribution"
    name: "CircleCI + Firebase App Distribution (Android)"
    confidence: confirmed
    evidence: "Official developer blog (2023-12): for the Android version of the Money Forward Cloud Tax Return app, QA members trigger a CircleCI pipeline and install the build uploaded to Firebase App Distribution on test devices"
    evidenceUrl: "https://moneyforward-dev.jp/entry/2023/12/18/ca_android2_bot"
  - layer: "Job platform of a sibling product"
    name: "Sidekiq on Amazon EKS (Cloud Expense)"
    confidence: confirmed
    evidence: "Official developer blog (2026-01): Cloud Expense, another Money Forward Cloud product, moved an access-log platform of hundreds of millions of records a month to AWS (Kinesis Data Firehose, Glue, S3, Athena), with Sidekiq containers on EKS doing the writes. The post does not say whether Cloud Accounting and Tax Return run on the same platform"
    evidenceUrl: "https://moneyforward-dev.jp/entry/2026/01/30/143450"
  - layer: "Edge / CDN"
    name: "Cloudflare"
    confidence: likely
    evidence: "Our own observation (2026-09-28): the app host accounting.moneyforward.com, the login host id.moneyforward.com and the MCP host beta.mcp.developers.biz.moneyforward.com all CNAME to cdn.cloudflare.net and return server: cloudflare and cf-ray (NRT). accounting and id also return the x-runtime header that Rack (Rails) adds, which suggests Rails answering behind Cloudflare"
sources:
  - label: "Money Forward, Inc.: FY11/2026 2Q (interim) consolidated financial results (Japanese, 2026-07-13)"
    url: "https://contents.xj-storage.jp/xcontents/AS71106/eee10499/1dac/4664/9aa5/229eaf8de8d0/140120260713592274.pdf"
    accessedAt: "2026-09-28"
  - label: "Money Forward, Inc.: FY11/2026 2Q earnings presentation (Japanese, 2026-07-13)"
    url: "https://contents.xj-storage.jp/xcontents/AS71106/d6d5dd76/4582/4a3b/96c8/10c9b996d59d/140120260713592129.pdf"
    accessedAt: "2026-09-28"
  - label: "Money Forward, Inc.: FY11/2026 2Q supplemental financial data (Excel, 2026-07-13)"
    url: "https://contents.xj-storage.jp/objects/AS71106/2033affd/a26c/4837/9c1d/d0bf4aecf12d/Supplemental_Financial_Data__FY26_Q2.xlsx"
    accessedAt: "2026-09-28"
  - label: "Money Forward Cloud Tax Return: Pricing (Japanese)"
    url: "https://biz.moneyforward.com/tax_return/price/"
    accessedAt: "2026-09-28"
  - label: "Money Forward Cloud Support: Partial revision of the pricing structure (effective December 1, 2026 and June 1, 2027) (Japanese, 2026-09-24)"
    url: "https://biz.moneyforward.com/support/plan/news/20260924.html"
    accessedAt: "2026-09-28"
  - label: "Money Forward Cloud Accounting Support: Money Forward Cloud Accounting MCP server (Japanese)"
    url: "https://biz.moneyforward.com/support/account/guide/others/ot10.html"
    accessedAt: "2026-09-28"
  - label: "PR TIMES (Money Forward, Inc.): Money Forward Cloud Accounting opens its remote MCP server to all plans (Japanese, 2026-03-26)"
    url: "https://prtimes.jp/main/html/rd/p/000001605.000008962.html"
    accessedAt: "2026-09-28"
  - label: "Money Forward Developers Blog: My résumé — the accounting development team (Japanese, 2019-11)"
    url: "https://moneyforward-dev.jp/entry/2019/11/29/my-resume01/"
    accessedAt: "2026-09-28"
  - label: "Money Forward Developers Blog: Seeking sustainability for a 10-year-old Rails app — why we removed CoffeeScript first (Japanese, 2024-04)"
    url: "https://moneyforward-dev.jp/entry/2024/04/10/190149"
    accessedAt: "2026-09-28"
  - label: "Money Forward Developers Blog: Building a next-generation Slack app to deploy our Android app (Japanese, 2023-12)"
    url: "https://moneyforward-dev.jp/entry/2023/12/18/ca_android2_bot"
    accessedAt: "2026-09-28"
  - label: "Money Forward Developers Blog: SRE Kaigi 2026 talk and notes — migrating an access-log platform of hundreds of millions of records a month to AWS with zero downtime at low cost (Japanese, 2026-01)"
    url: "https://moneyforward-dev.jp/entry/2026/01/30/143450"
    accessedAt: "2026-09-28"
  - label: "A8.net case study: Money Forward's B2B marketing — new acquisitions from affiliate ads up to 150% (Japanese)"
    url: "https://www.a8.net/ec/casestudy/12/"
    accessedAt: "2026-09-28"
  - label: "GitHub: freee/freee-mcp (for comparison)"
    url: "https://github.com/freee/freee-mcp"
    accessedAt: "2026-09-28"
  - label: "freee K.K.: FY2026.6 earnings presentation (Japanese, 2026-08-13, for comparison)"
    url: "https://contents.xj-storage.jp/xcontents/AS08692/97bc7144/e317/47ab/926b/998554b4c0e4/20260814105745837s.pdf"
    accessedAt: "2026-09-28"
  - label: "freee: Pricing plans for sole proprietors (Japanese, for comparison)"
    url: "https://www.freee.co.jp/personal-business/accounting/pricing/"
    accessedAt: "2026-09-28"
---

In Money Forward Cloud's earnings materials, sole proprietors always sit on a small line: ¥3.12B of a ¥47.67B SaaS ARR. Yet by headcount of paying customers, they are a block as large as the corporate one. In September 2026, the price for those sole proprietors was reset. We read what Money Forward — long known for its household-budget app — is trying to adjust through the price of its tax-filing software.

## What It Is

Money Forward Cloud is a suite of cloud back-office services covering accounting, tax filing, invoicing, expenses, payroll and more. The entry point for sole proprietors is Money Forward Cloud Tax Return (Kakutei Shinkoku), which pulls in bank and credit-card statements automatically and takes users from bookkeeping to blue- or white-form income tax returns and e-filing. It is a separate product from the company's consumer budgeting app, Money Forward ME, and it sits in the Business segment of the earnings reports.

:::fact
According to the financial results (2026-07-13), Money Forward's revenue for the first half of FY11/2026 (December 2025 – May 2026) was ¥28.99B (up 24.8% year on year), and company-wide SaaS ARR was ¥47.67B (up 34.2%). Within the Business segment, SaaS ARR from corporate customers was ¥36.77B (up 36.4%) and from sole proprietors ¥3.12B (up 19.2%). The supplemental data shows 237,328 paying sole proprietors and 255,406 paying corporate customers at the end of May 2026. The company's announcement on PR TIMES gives its founding as May 2012.
:::

:::fact
According to the official pricing page, there are three plans for sole proprietors, all priced excluding tax. The Personal Mini plan, which cannot file consumption-tax returns, is ¥900 a month billed annually (¥10,800 a year) or ¥1,280 a month billed monthly. The Personal plan, which supports consumption-tax returns (invoice-system ready), is ¥1,280 a month billed annually (¥15,360 a year) or ¥1,680 billed monthly. The Personal Plus plan, which adds phone support, is annual only at ¥35,760 a year. There is a one-month free trial.
:::

:::pull
For renewals from December 1, 2026, the Personal plan — the one that files consumption-tax returns — goes from ¥15,360 to ¥22,560 a year, and from ¥1,680 to ¥2,880 a month.
:::

::scorecard

## UX Analysis

Money Forward Cloud's UX for sole proprietors leans toward "collect your statements the way you would in a budgeting app, and carry them straight through to your tax return." In 2026 it added AI agents as another way in.

- **One clear line between plans: consumption tax.** The pricing page states under Personal Mini that "consumption-tax filing is not available," narrowing the difference from Personal to a single point. You choose based on whether you are tax-exempt or a registered taxable business, which keeps the choice simple.
- **The receipt-scanning surcharge goes away.** Today, AI-OCR reading costs an optional ¥20 (excluding tax) per item from the 31st item a month on the Personal plan and from the 101st on Personal Plus. From December 1, 2026, that fee is abolished on both plans and the count becomes unlimited. Pairing the price rise with the removal of a "the more you use, the more you pay" charge makes the bill easier to predict.
- **Your books are reachable from AI agents.** According to the official support site, Cloud Accounting and Tax Return users can connect to the MCP server at no extra charge by registering its URL in an AI tool and authenticating with OAuth or an API key. The company's announcement lists Claude Desktop, Claude Code, Cursor and Gemini CLI among the supported tools. The support site cautions users to turn off data collection in their AI tool so that authorization codes are not used for training.
- **The technical help desk is narrow.** The same support page says there is, as a rule, no contact point for technical questions about the API or MCP, and that support is limited to paying certified-member firms (tax and accounting offices). Sole proprietors wiring up their own AI agents may find themselves feeling their way.

## Tech Stack

::techstack

:::fact
According to the official developer blog (2019-11), the accounting team that builds Cloud Accounting and Tax Return (the Finance & Accounting Product Division) was formed in 2013 and was already the company's largest development organization. The language is Ruby, the framework is Ruby on Rails, and some parts are written in Go. A post from April 2024 says Cloud Accounting, released in 2013, mixed CoffeeScript, Vanilla JS and TypeScript; seeing the growing range of skills demanded of developers as the biggest problem, the team converted about 250 files and 20,000 lines of CoffeeScript to Vanilla JS with decaffeinate, starting in August 2023 and finishing at the end of March 2024. Among its references, the post lists freee's own article about rewriting the CoffeeScript left in freee Accounting with the same decaffeinate.
:::

:::fact
According to the company's announcement on PR TIMES (2026-03-26), the Cloud Accounting remote MCP server and API had until then been offered only to some tax and accounting firms (the MCP server as a beta for Platinum-rank-and-above certified members, the API for Silver-rank-and-above). On March 26, 2026 they opened to all plans, and the company says it chose a remote server — no setup on the user's side — "from the very start of the beta." The operations listed on the support site include fetching business information and fiscal-year settings; listing, fetching, creating and updating journal entries; fetching trial balances and transition tables; fetching accounts, sub-accounts, business partners, departments and tax categories; creating and listing bank-statement lines; and creating journal entries from them. The same page notes that with API-key authentication, operations follow the permissions set on each business's "Add and manage members" screen in Cloud Accounting, whereas with OAuth, a user granted permission in the app portal can operate regardless of their Cloud Accounting and Tax Return permissions.
:::

:::guess
The operations are narrowed to reading and writing the books. Compared with [freee](/en/articles/freee), whose official MCP server exposes operations across 12 APIs, Money Forward appears to have opened up the core of accounting — journal entries and trial balances — first. The support page also points to the guide on feature differences between plans, which reads as keeping what MCP can do within the scope of the subscribed plan. The approach seems to be a thin MCP layer in front of the existing API of a Rails app more than ten years old. That said, the page states that OAuth bypasses Cloud Accounting's member permissions, so the permission model is not simply the same as in the existing screens.
:::

## Business Model

The core revenue is monthly and annual subscriptions from corporate customers and sole proprietors. On top of that sit fees from payments and finance products such as the business card and early payment (Fintech ARR).

:::fact
The supplemental data shows that the number of paying sole proprietors jumps every year in the first quarter (December – February). In FY11/2025 it rose from 182,579 at the end of November 2024 to 200,889 at the end of February 2025; in FY11/2026 it rose from 210,190 at the end of November 2025 to 233,027 at the end of February 2026, reaching 237,328 at the end of May (up 16.3% year on year). The earnings presentation puts sole-proprietor churn (monthly average) at 4.9% on a three-month average and 2.3% on a twelve-month average. The supplemental data puts sole-proprietor ARPA (period-end ARR divided by paying customers) at ¥13,165, up only 2.5% year on year.
:::

:::fact
According to the official support site's notice (2026-09-24), prices for sole proprietors change for contracts renewed on or after December 1, 2026. The Personal plan goes from ¥15,360 to ¥22,560 a year and from ¥1,680 to ¥2,880 a month. Personal Mini goes from ¥1,280 to ¥1,680 a month, while its ¥10,800 annual price stays the same. Personal Plus goes from ¥35,760 to ¥38,160 a year. Corporate plans change on June 1, 2027: Small Business from ¥5,980 to ¥6,980 a month and Business from ¥7,980 to ¥8,980 a month (all excluding tax, monthly billing; the Solo Corporation plan keeps its monthly price, with only its annual price rising from ¥29,760 to ¥35,760). The earnings presentation says that after the June 2025 price revision in the SMB segment, churn came in below expectations and the ARR impact landed at +¥2.4B, above the initial estimate.
:::

:::guess
Sole-proprietor ARPA of ¥13,165 is far below freee's sole-proprietor ARPU (on a platform-ARR basis, ¥20,995 at the end of June 2026). The two companies define these metrics differently, but Money Forward appears to have been growing its customer count while lagging on revenue per customer. The new annual price of the Personal plan, ¥22,560, is close to freee's Standard plan, which also files consumption-tax returns, at ¥23,760 a year (excluding tax). It seems likely that the corporate price rise tried first — which did not drive churn up much — gave the company grounds to make the same move for sole proprietors. Keeping the annual Personal Mini price unchanged reads as a way to leave a cheap entry point for tax-exempt businesses that do not need to file consumption tax.
:::

:::fact
According to an A8.net case study (an interview with Money Forward's marketer), Money Forward has used affiliate advertising to acquire small businesses and sole proprietors since 2019 and began running it on A8.net in June 2020. Monthly acquisitions through affiliate ads rose to 120–150% of the same month a year earlier, and the marketer says customers acquired via A8.net convert to paid plans at a higher rate than those from display ads. The main KPIs are the number of free trials and the conversion rate to paid plans.
:::

Sole proprietors rival corporate customers in paying headcount yet make up less than a tenth of ARR. In 2026, Money Forward set out to close that gap with price. The budgeting-app habit of collecting statements, and a new entry point where AI agents write the journal entries — it is trying to fit both inside an annual price that just got a little higher.
