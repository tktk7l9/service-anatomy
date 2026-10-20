---
service: "makeshop byGMO"
title: "No Sales Fee, ¥380.4 Billion in GMV — How makeshop, Which Points Small Starters to Free Carts, Makes Money, and How It Is Being Rebuilt From Its Old API Toward AI Agents"
description: "makeshop byGMO is an e-commerce site builder (SaaS) that GMO MAKESHOP, part of Japan's GMO Internet Group, has offered since 2004. It takes no sales fee, charges a flat ¥13,750 a month, and its annual GMV reached ¥380.4 billion in 2025 (up 10.9% year over year). Using the official pricing, payment and comparison pages, press releases, GMO Internet Group's earnings presentation, the official engineering blog, the developer site and this site's own observations, we dissect the conditions behind its card rates, the B2B and subscription sales that lift its GMV, a long-running platform that includes a PHP payment service, running alongside the Go and GraphQL \"next-generation EC,\" its Smarty-based template tags, the legacy API scheduled to shut down in November, and its MCP server and open-source agent skills."
lead: "makeshop's pricing page says the \"sales fee is ¥0.\" However much sales grow, the Premium plan stays at ¥13,750 a month. Meanwhile, the comparison page on the same site advises people who want to try small first to start with a free cart and move over once sales grow. How does a cart that gets chosen after the selling starts make money, and how is it being rebuilt? We dissect it through the legacy API scheduled to shut down in November 2026 and the MCP server it opened to AI agents."
category: saas
tags: [e-commerce, b2b, payments, php, go, graphql, aws, mcp]
publishedAt: "2026-10-13"
updatedAt: "2026-10-20"
lastVerified: "2026-10-13"
expires:
  - date: "2026-11-02"
    claim: "The planned shutdown of the legacy (REST) API after 15:00 on November 2, 2026, and the statements that the move to the next-generation API is still under way"
  - date: "2026-12-31"
    claim: "The Food EC Package's early sign-up price (¥5,500 a month with no setup fee for one year, for sign-ups by the end of December 2026)"
  - date: "2026-12-31"
    claim: "The Food EC Package's in-store pickup (\"scheduled for December\")"
  - date: "2027-01-31"
    claim: "The Food EC Package's temperature-zone shipping settings (scheduled for January 2027)"
  - date: "2027-02-28"
    claim: "The Food EC Package's best-before date management and subscription-box settings (scheduled for February 2027)"
  - date: "2027-06-30"
    claim: "The Food EC Package's automation of noshi gift wrapping and multiple delivery addresses (planned for June 2027)"
serviceUrl: "https://www.makeshop.jp/"
# Affiliate link placeholder: no ASP program (A8.net etc.) for makeshop was found on an official page
# (checked 2026-10-13). The official route is GMO MAKESHOP's in-house "makeshop partner program"
# (https://www.makeshop.jp/main/reseller/reseller.html): free to join for individuals and companies;
# its FAQ (https://www.makeshop.jp/main/reseller/qa.html) says it can be used "like an affiliate" with
# the referral URL issued once registration is complete. Rewards: a share of the Premium plan's monthly
# fee at every renewal, by a rank set from the previous fiscal year's paid referrals (Diamond 20+ 50%,
# Platinum 5+ 40%, Gold 3+ 30%, Silver 2+ 20%, Bronze 1+ 10%), plus designated options on their first
# payment. The partner terms (https://www.makeshop.jp/main/company/partner_license.html, revised
# 2026-02-17) define the covered service as the Enterprise and Premium plans (the reseller page names
# Premium only), pay at the end of the month after next, rule out combining it with an "affiliate
# partner" arrangement and require separate ad guidelines. The FAQ asks partners to refrain from listing
# ads on "makeshop"-related keywords; says two active referrals are needed for a payout (the reseller
# page says one), except that the first one counts while a campaign is running; and still describes an
# older scheme (certified partners 35%, special partners 40% from 20 active shops) that conflicts with
# the rank table. Confirm all of this with msp@makeshop.jp before joining. Nothing found forbids opening
# links in a new window, so no sameWindow.
# The owner must register, confirm a referral link on this site is allowed, and paste it here.
# Never invent the label — ask the owner. Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<makeshop-partner-referral-link>"
#   program: "makeshop Partner Program"
vendor: "GMO MAKESHOP Co., Ltd."
origin: "JP"
heroTheme: "makeshop"
scores: { product: 4.0, ux: 3.5, tech: 3.5, business: 3.5 }
techStack:
  - layer: "Legacy platform (part of the payment service)"
    name: "PHP + Apache (EC2 → AWS Fargate)"
    confidence: confirmed
    evidence: "The official engineering blog (2025-01-17) states that while recent services are mostly built on containers or Lambda, many long-running services still run on EC2, and that part of the payment service was moved from EC2 to Fargate. The post explains that a Dockerfile drafted by generative AI (using php:8.1-apache as the runtime and adding mysqli and pdo_mysql) was adapted to requirements by feeding it httpd.conf and php.ini, and it shows the changes made to httpd.conf and php.ini"
    evidenceUrl: "https://tech.makeshop.co.jp/entry/2025/01/17/150153"
  - layer: "Shop design templates"
    name: "Smarty (template tags)"
    confidence: confirmed
    evidence: "The Premium plan page (checked 2026-10-13) says of its design editing feature that it offers \"new proprietary tags built on smarty.\" Smarty's official site carries \"PHP Template Engine\" as its page title"
    evidenceUrl: "https://www.makeshop.jp/main/plan/premium.html"
  - layer: "Next-generation EC backend"
    name: "Go + GraphQL + gRPC"
    confidence: confirmed
    evidence: "The official engineering blog (2024-01-23) lists \"Golang / GraphQL / gRPC\" as the backend technologies adopted for the next-generation EC platform"
    evidenceUrl: "https://tech.makeshop.co.jp/entry/2024/01/23/153605"
  - layer: "Next-generation EC admin console"
    name: "Vue.js + Vuetify + TypeScript (SPA)"
    confidence: confirmed
    evidence: "The official engineering blog (2024-03-27) states that the admin console was migrated from Vue2 / Vuetify2 to Vue3 / Vuetify3 over about half a year, including research. The 2024-01-23 post lists the next-generation frontend as \"Vue.js / SPA / Vuetify / TypeScript\""
    evidenceUrl: "https://tech.makeshop.co.jp/entry/half-year-vue3-migration"
  - layer: "New checkout (Smart Checkout)"
    name: "Go (BFF, echo) + OpenAPI (oapi-codegen)"
    confidence: confirmed
    evidence: "The official engineering blog (2024-05-31) states that the first phase of the project to renew the checkout screen was released in April, and that its BFF generates code from an OpenAPI (3.0) schema with oapi-codegen and uses the echo framework; the generated code is Go"
    evidenceUrl: "https://tech.makeshop.co.jp/entry/2024/05/31/180019"
  - layer: "Infrastructure and batch processing"
    name: "AWS (ECS on Fargate, AWS Batch, Fluent Bit via FireLens)"
    confidence: confirmed
    evidence: "The official engineering blog (2026-01-09) states that batch processing for the makeshop admin console was built on AWS Batch multi-container jobs, splitting the main logic written in Go, log forwarding with Fluent Bit (AWS FireLens) and an image conversion API that also runs for the admin console into separate containers. The sample job definition sets platformCapabilities to FARGATE"
    evidenceUrl: "https://tech.makeshop.co.jp/entry/2026/01/09/152800"
  - layer: "Public API"
    name: "GraphQL + OAuth (next-gen API replacing the legacy REST API)"
    confidence: confirmed
    evidence: "The developer site's guide to migrating from the legacy API to the next-generation API (checked 2026-10-13) states that the legacy API is REST with fixed-key authentication, that the next-generation API is GraphQL with token-based authentication (OAuth 2.0), and that the legacy API is scheduled to be shut down after 15:00 on November 2, 2026. The developer site's FAQ says GraphQL was adopted for the next-generation data-retrieval API"
    evidenceUrl: "https://developers.makeshop.jp/news/notice/api_migration_guide/index.html"
  - layer: "AI agent integration"
    name: "MCP server (MCP Server for Backoffice) + Agent Skills (MIT License)"
    confidence: confirmed
    evidence: "GMO MAKESHOP's notice (2026-05-11) states that \"MCP Server for Backoffice,\" which links AI agents with a shop's own e-commerce data, was released on makeshop apps and at launch supports searching orders, members and products. The press release of 2026-08-25 says four official agent skills were published on GitHub as open source under the MIT License"
    evidenceUrl: "https://www.makeshop.co.jp/news/info/2026-05-11/"
  - layer: "Marketing site and storefront delivery"
    name: "Amazon CloudFront + Application Load Balancer + Apache"
    confidence: likely
    evidence: "In this site's own observation (2026-10-13), the marketing site www.makeshop.jp responded with server: Apache and content-type: text/html; charset=EUC-JP, along with via (CloudFront), x-amz-cf-pop (NRT) and AWSALB and AWSALBCORS cookies. The template sample shop tplbaycross.makeshop.jp and the app store apps.makeshop.jp returned the same combination of server: Apache, CloudFront and AWSALB cookies (both in UTF-8)"
  - layer: "Admin console and developer site delivery"
    name: "Amazon CloudFront + Amazon S3"
    confidence: likely
    evidence: "In this site's own observation (2026-10-13), the developer site developers.makeshop.jp returned server: AmazonS3, x-amz-server-side-encryption: AES256 and via (CloudFront). A HEAD request to the admin console's login URL, console.makeshop.jp/login, also returned server: AmazonS3 and via (CloudFront), with status 403. The official engineering blog (2024-01-23) describes the next-generation frontend as an SPA"
sources:
  - label: "makeshop official: Top page (Japanese)"
    url: "https://www.makeshop.jp/"
    accessedAt: "2026-10-13"
  - label: "makeshop official: Pricing plans (plan fees, long-term discounts, FAQ) (Japanese)"
    url: "https://www.makeshop.jp/main/plan/"
    accessedAt: "2026-10-13"
  - label: "makeshop official: Premium plan (Japanese)"
    url: "https://www.makeshop.jp/main/plan/premium.html"
    accessedAt: "2026-10-13"
  - label: "makeshop official: Enterprise plan (Japanese)"
    url: "https://www.makeshop.jp/main/plan/enterprise.html"
    accessedAt: "2026-10-13"
  - label: "makeshop official: Comparison with other services (Japanese)"
    url: "https://www.makeshop.jp/main/comparison/"
    accessedAt: "2026-10-13"
  - label: "makeshop official: makeshop Payment (Japanese)"
    url: "https://www.makeshop.jp/main/function/makeshop_payment/"
    accessedAt: "2026-10-13"
  - label: "makeshop official: Payment methods (Japanese)"
    url: "https://www.makeshop.jp/main/function/multi_payment.html"
    accessedAt: "2026-10-13"
  - label: "makeshop official: AI features (makeshop byGMO MCP and agent skills) (Japanese)"
    url: "https://www.makeshop.jp/main/function/ai/"
    accessedAt: "2026-10-13"
  - label: "makeshop apps: makeshop byGMO MCP (app page, Japanese)"
    url: "https://apps.makeshop.jp/view/item/000000000199"
    accessedAt: "2026-10-13"
  - label: "makeshop official: Food EC Package (Japanese)"
    url: "https://www.makeshop.jp/main/food/"
    accessedAt: "2026-10-20"
  - label: "makeshop official: Partner program (Japanese)"
    url: "https://www.makeshop.jp/main/reseller/reseller.html"
    accessedAt: "2026-10-13"
  - label: "makeshop official: makeshop sales partner terms (last revised 2026-02-17, Japanese)"
    url: "https://www.makeshop.jp/main/company/partner_license.html"
    accessedAt: "2026-10-13"
  - label: "makeshop official: robots.txt"
    url: "https://www.makeshop.jp/robots.txt"
    accessedAt: "2026-10-13"
  - label: "makeshop apps developers: Top page (next-generation API and app distribution options, Japanese)"
    url: "https://developers.makeshop.jp/"
    accessedAt: "2026-10-13"
  - label: "makeshop apps developers: Guide to migrating from the legacy API to the next-generation API (Japanese)"
    url: "https://developers.makeshop.jp/news/notice/api_migration_guide/index.html"
    accessedAt: "2026-10-13"
  - label: "GMO MAKESHOP Co., Ltd.: Company profile (Japanese)"
    url: "https://www.makeshop.co.jp/company/outline/"
    accessedAt: "2026-10-13"
  - label: "GMO MAKESHOP Co., Ltd.: History (Japanese)"
    url: "https://www.makeshop.co.jp/company/history/"
    accessedAt: "2026-10-13"
  - label: "GMO MAKESHOP Co., Ltd.: makeshop byGMO achieves No. 1 annual GMV among Japan's e-commerce SaaS builders for the 14th consecutive year (Japanese, 2026-04-22)"
    url: "https://www.makeshop.co.jp/news/press/2026-04-22/"
    accessedAt: "2026-10-13"
  - label: "GMO MAKESHOP Co., Ltd.: makeshop byGMO releases \"MCP Server for Backoffice\" for AI agent integration (Japanese, 2026-05-11)"
    url: "https://www.makeshop.co.jp/news/info/2026-05-11/"
    accessedAt: "2026-10-13"
  - label: "GMO MAKESHOP Co., Ltd.: On support for the Universal Commerce Protocol (UCP) with purchases through AI agents in view (Japanese, 2026-08-06)"
    url: "https://www.makeshop.co.jp/news/info/2026-08-06/"
    accessedAt: "2026-10-13"
  - label: "GMO MAKESHOP Co., Ltd.: Official agent skills for shop operations published as open source (Japanese, 2026-08-25)"
    url: "https://www.makeshop.co.jp/news/press/2026-08-25/"
    accessedAt: "2026-10-13"
  - label: "GMO MAKESHOP Co., Ltd.: makeshop byGMO launches the Food EC Package for food businesses (Japanese, 2026-09-08)"
    url: "https://www.makeshop.co.jp/news/press/2026-09-08/"
    accessedAt: "2026-10-20"
  - label: "GitHub: gmomakeshop/agent-skills"
    url: "https://github.com/gmomakeshop/agent-skills"
    accessedAt: "2026-10-13"
  - label: "GMO Internet Group, Inc.: FY12/2026 2Q earnings presentation (Japanese, 2026-08-14)"
    url: "https://ir.group.gmo/pdf/presen/GMO_FY26_Q2_Financial_Results_Presentation_260814.pdf"
    accessedAt: "2026-10-13"
  - label: "GMO MAKESHOP engineer blog: How next-generation EC development began and how we run it (Japanese, 2024-01-23)"
    url: "https://tech.makeshop.co.jp/entry/2024/01/23/153605"
    accessedAt: "2026-10-13"
  - label: "GMO MAKESHOP engineer blog: We migrated the next-generation EC admin console to Vue3/Vuetify3 (Japanese, 2024-03-27)"
    url: "https://tech.makeshop.co.jp/entry/half-year-vue3-migration"
    accessedAt: "2026-10-13"
  - label: "GMO MAKESHOP engineer blog: Using OpenAPI (3.0) in Smart Checkout, makeshop's new checkout (Japanese, 2024-05-31)"
    url: "https://tech.makeshop.co.jp/entry/2024/05/31/180019"
    accessedAt: "2026-10-13"
  - label: "GMO MAKESHOP engineer blog: Moving a service from EC2 to Fargate (Japanese, 2025-01-17)"
    url: "https://tech.makeshop.co.jp/entry/2025/01/17/150153"
    accessedAt: "2026-10-13"
  - label: "GMO MAKESHOP engineer blog: AWS Batch and the sidecar pattern — reusing existing assets and separating responsibilities with multi-container jobs (Japanese, 2026-01-09)"
    url: "https://tech.makeshop.co.jp/entry/2026/01/09/152800"
    accessedAt: "2026-10-13"
  - label: "GMO MAKESHOP engineer blog: Having an AI agent audit a legacy EC payment database by checking real data (Japanese, 2026-06-26)"
    url: "https://tech.makeshop.co.jp/entry/2026/06/26/145915"
    accessedAt: "2026-10-13"
  - label: "Smarty official site (PHP Template Engine)"
    url: "https://www.smarty.net/"
    accessedAt: "2026-10-13"
---

makeshop is one of the veterans among Japan's e-commerce site builders. It started in earnest in November 2004 with a ¥500-a-month plan, and its annual GMV, ¥98.2 billion in 2012, grew to ¥380.4 billion in 2025. The company history says it launched a lineup that included a free monthly plan in 2005, yet every plan on the pricing page in October 2026 is a monthly-fee plan. How does a cart that takes no sales fee make money, and how is it being rebuilt?

## Service overview

makeshop byGMO is an e-commerce site builder (SaaS) offered by GMO MAKESHOP, part of GMO Internet Group. Pick a design template, add products, and you can open your own e-commerce site with a cart, payments and order management. The top page proclaims "B2C and B2B alike. You don't have to split your e-commerce," pushing the ability to serve consumers (B2C) and business customers (B2B) on one platform. A separate section says a site "can be built for any business model," including in-house sales to employees (B2E). For large sites that need customization, there is also a higher-tier service, "GMO Cloud EC."

:::fact
According to the company profile (checked 2026-10-13), GMO MAKESHOP Co., Ltd. was founded on September 22, 2004, has capital of ¥50 million, is headquartered in Cerulean Tower in Shibuya, Tokyo, and its president and CEO is Mukaihatake Kazuyoshi (the romanization given on the profile). Its directly employed staff ("partners," excluding temporary and contract workers) numbered 199 as of January 31, 2026. According to the company history, it launched "MakeShop" in earnest on November 1, 2004 with a ¥500-a-month plan, joined GMO Internet Group on May 10, 2005 through a capital alliance with GMO Internet Group, Inc., and took its current name on August 1, 2008. The entry for April 2, 2013 records annual total GMV of ¥98.2 billion for 2012. On March 30, 2023 it renewed its logo and changed the written name to "makeshop," and on August 31 of that year it launched its app platform. On December 1, 2025 it absorbed GMO Makeappli, Inc., and on January 1, 2026 it brought GMO Global EC, Inc. (formerly ジェイグラブ株式会社) into the group.
:::

:::fact
According to the pricing page, the plan pages and the makeshop Payment page (all as of 2026-10-13; amounts include tax, while consumption tax is added separately to the taxable portion of card and PayPay fees), there are two core plans, Premium and Enterprise, with a "Food EC Package" for food businesses listed alongside. The Premium plan costs ¥13,750 a month plus an ¥11,000 setup fee and allows 10,000 products. Its sales fee is ¥0, although the pricing page's footnotes exclude sales made on outside sites through Item Post (アイテムポスト) and say the Yahoo! Shopping integration carries a sales fee. It comes with a 15-day free trial that requires no credit card details. Long-term contracts take 5% off the monthly fee for 6 months, 10% for 12 months and 15% for 24 months (¥11,688 a month for 24 months), paid in one lump sum with no refunds after payment. The Enterprise plan costs from ¥55,000 a month plus a setup fee from ¥11,000; it is described as a "hybrid" plan that adds custom development to the SaaS Premium plan, and allows 50,000 products. Some options that cost extra on Premium, such as the BtoB option and subscriptions, are free, and delivery takes as little as two weeks and about three months on average. Card payments through "makeshop Payment" cost ¥1,650 a month on Premium, with a fee of 3.19% when payments reach ¥500,000 and 3.39% below that (the pages word this condition differently; see the UX analysis); on Enterprise the monthly fee is ¥0 and the rate is 3.14%. Amazon Pay costs 3.9% and PayPay 3.45%, and through makeshop Payment both require being a corporation in Japan. Sole proprietors can contract PayPay separately through GMO Epsilon, which costs ¥2,200 (¥2,000 excluding tax). Paidy costs 3.5%, and atone's next-month deferred payment costs 3.5% when used on the Standard plan. Card payments are paid out at the end of the month following the month-end close, and "same-day sales payout," which pays out as soon as the same day, costs a 1.5% fee.
:::

:::pull
The sales fee is ¥0, and the monthly fee is ¥13,750. In 2025, ¥380.4 billion flowed over that cart.
:::

::scorecard

## UX analysis

makeshop's experience leans toward welcoming businesses that already sell, rather than people building their first online shop. Its own comparison page spells out who it suits and who it does not.

- **It points small starters to other carts.** The comparison page lines up [Shopify](/en/articles/shopify), futureshop, [ColorMe Shop](/en/articles/colorme-shop), [BASE](/en/articles/base) and [STORES](/en/articles/stores) as the major carts, and when its FAQ asks about the downsides of adopting makeshop, it answers that "because the monthly fee is fixed, small shops just after launch may find it a burden as a fixed cost." It recommends makeshop as a guide to those aiming for ¥1 million or more in monthly sales or carrying many products, and advises individuals who want to try small first to start with a "free ASP" (BASE, STORES and the like) and move to makeshop once sales grow.
- **The lowest rate comes with conditions.** The top page and the payment page give the card fee as from 3.14% and call it among the lowest in the industry. 3.14% is the Enterprise plan's rate; on Premium, after the ¥1,650 monthly fee for makeshop Payment, the rate starts at 3.19%. The pricing page's footnote sets the condition for 3.19% as payments reaching "¥500,000 a month in each" of the listed card categories, and lists two: Visa/Mastercard and JCB/American Express/Diners. The Premium plan page's footnote does not split the categories; it says the rate applies "when payments by Visa/Mastercard/JCB/American Express/Diners reach ¥500,000, and below that the rate is 3.39%." The FAQ on the pricing page gives the Premium plan's card fee as "3.14%?" (the "?" is in the original). The payment page says "all prices include tax," while noting that consumption tax is added separately to the taxable portion of card and PayPay fees. The comparison page's simulation by monthly sales states its assumptions: card sales are 60% of monthly sales, and Visa/Mastercard make up 70% of card sales. By this site's calculation, all four makeshop rows (¥500,000, ¥1 million, ¥5 million and ¥10 million in monthly sales) match the ¥12,500 monthly fee, makeshop Payment's ¥1,500 monthly fee and ¥1,200 in other running costs (all before tax, from the same page's cost table), plus 3.19% of card sales, with 10% consumption tax added to the total. In the ¥500,000 row (¥27,247 including tax), card sales come to ¥300,000, short of ¥500,000 under either footnote; at 3.39% the row would be ¥27,907, or ¥660 a month more (this site's calculation). In the ¥1 million row (¥37,774 including tax), card sales come to ¥600,000, which meets the Premium plan page's condition for 3.19%, but under the pricing page's per-category footnote the Visa/Mastercard category comes to ¥420,000 and the other category to ¥180,000 at most, so neither reaches ¥500,000; at 3.39% the row would be ¥39,094, or ¥1,320 a month more (this site's calculation). It can also be read as a guide table that simply uses the most favorable rate.
- **An entrance built for shops that switch over.** The FAQ on the pricing page says moving from another service "cannot be called easy across the board" and points to the paid "Rakuraku moving service." The free trial can start from templates already set up for each industry (one-click shop setup), and the comparison page says fine-grained design customization needs HTML and CSS knowledge, while no-code design features are also free to use. The Enterprise plan's FAQ answers that it handles data migration for products, members, orders, shipping and designs, but that the admin console itself cannot be customized.
- **AI comes in from outside the admin console.** "MCP Server for Backoffice" (named "makeshop byGMO MCP" in the app store), released on May 11, 2026, is an MCP server that connects AI agents to a shop's order, member and product data. It started with search only; the AI features page (checked 2026-10-13) now covers updating product names, prices, images, descriptions and SEO settings, plus searching reviews from U-KOMI, and says it has been tested with Claude, Codex and GMO天秤AI Biz. The app is free (the connected AI service's fees are separate); write tools such as product updates can be allowed or blocked by the shop, and items that could identify a person are masked before sending. A notice of August 6, 2026 says the company is considering support for the "Universal Commerce Protocol (UCP)," which Google and e-commerce companies are developing together, and sorts the work as follows: real-time product, inventory and price feeds are supported, payment integration with GMO Payment Gateway is planned, and creating orders through AI agents is under consideration.
- **Know-how handed out as instructions.** On August 5, 2026, GMO MAKESHOP published four official agent skills — shop analytics, product analysis and improvement, Creator Mode design, and shop opening — on GitHub as open source under the MIT License. The press release calls this a first among Japan's major e-commerce SaaS builders (as of July 2026, per the company's own research). The README explains installation with the GitHub CLI's `gh skill install` and says pull requests are not accepted. CONTRIBUTING.md asks for bug reports and feedback on features through Issues. The Creator Mode design skill generates, from chat instructions, a .cdar file that can be imported into Creator Mode as is.
- **The food package's features arrive later.** According to the press release of September 8, 2026, the "Food EC Package" for food businesses could be tried free from August 24 to October 20, with full service starting on October 20 and the early sign-up price applying from October 21. Sign-ups by the end of December 2026 get an early sign-up price of no setup fee and ¥5,500 a month (tax included) for one year from sign-up; sign-ups from January 1, 2027, and those whose discount period has ended, pay the regular price (¥11,000 setup fee and ¥13,750 a month). The package page (checked 2026-10-20), under the heading "10/20 NEW RELEASE," lists "display condition customization," in which AI interprets natural-language instructions to help set display conditions on the checkout screen, as "available from October"; in-store pickup as "scheduled for December"; temperature-zone shipping settings for January 2027; best-before date management and annual subscription-box scheduling for February 2027; and automation of noshi gift wrapping and multiple delivery addresses for June 2027.

## Tech stack

::techstack

:::fact
According to the official engineering blog (2024-01-23), GMO MAKESHOP's core group is developing a "next-generation EC" platform. Its goal is to raise development speed and deliver features to shops sooner; the post names as problems the growing difficulty of feature development and maintenance as development piles up, too few growth opportunities for members, and the rising difficulty of hiring, and it adopted Vue.js / SPA / Vuetify / TypeScript for the frontend and Golang / GraphQL / gRPC for the backend. A post of 2024-03-27 says the admin console was migrated from Vue2 / Vuetify2 to Vue3 / Vuetify3 over about half a year, including research. The first phase of the new checkout, "Smart Checkout," was released in April 2024, and its BFF generates Go code from an OpenAPI (3.0) schema with oapi-codegen and runs on echo (2024-05-31). According to a post of 2026-01-09, the team built batch processing for the admin console on AWS Batch multi-container jobs, splitting the Go main logic, log forwarding through Fluent Bit (AWS FireLens) and an image conversion API also used by the admin console into separate containers. According to the press release of April 22, 2026, more than 90% of shops had adopted Smart Checkout as of December 2025.
:::

:::fact
According to the post of 2025-01-17, recently launched services are mostly built on containers or Lambda, while many long-running services still run on EC2, and part of the payment service was moved from EC2 to Fargate. The post shows a Dockerfile using php:8.1-apache along with changes to httpd.conf and php.ini, and says that the 100 target groups set up on the EC2 payment server could not be replicated because ECS allows only five, so the team put one NLB in front instead. A post of 2026-06-26 says that while moving payment processing from the old system to the new one, the team ran into subtle differences in what each payment method writes to the database, connected a Claude Code skill and MCP to the development database with SELECT-only access, and compared old and new against real data for around 18 payment methods. For the public API, according to the developer site's migration guide, the move is from the legacy REST API authenticated with fixed keys to the next-generation API, which uses GraphQL through a single endpoint and authenticates with OAuth 2.0 tokens, and the legacy API is scheduled to be shut down after 15:00 on November 2, 2026. The Premium plan page says design editing offers "new proprietary tags built on smarty." In this site's own observation (2026-10-13), the marketing site www.makeshop.jp returned responses with server: Apache and charset=EUC-JP through CloudFront, while the developer site and a HEAD request to the admin console's login URL (console.makeshop.jp/login) returned server: AmazonS3 (the latter with status 403). The marketing site's robots.txt disallows the whole site for GPTBot, ClaudeBot, Google-Extended, CCBot and others.
:::

:::guess
makeshop appears to be running two generations side by side. Smarty, which the Premium plan page names, is a template engine whose official site carries "PHP Template Engine" as its title, and part of the payment service was moved to Fargate as a PHP and Apache container, so the legacy platform, storefront included, is presumably written in PHP. Around it, the admin console, the checkout, batch processing and the public API appear to have been moved one at a time to newer components built with Go or GraphQL. The shutdown of the legacy API, the old-versus-new payment checks and the release of the MCP server read as parts of the same move of external touchpoints over to the next generation. Letting AI agents rewrite shop data presumably requires authentication that can narrow permissions per shop with tokens rather than fixed keys, and the MCP server presumably sits on top of the next-generation API. The line it draws — turning away what appear to be training crawlers in robots.txt while opening an entrance to the admin console for the AI agents shop owners use — also looks consistent as a design that chooses whom to hand data to.
:::

## ¥380.4 billion in GMV, broken down

:::fact
According to the press release of April 22, 2026, makeshop's annual GMV in 2025 was a record ¥380.4 billion (up 10.9% year over year), and the company calls it No. 1 in annual GMV among Japan's e-commerce SaaS builders for the 14th consecutive year (its own research comparing SaaS figures published by each company, as of April 2026). The comparison page defines GMV as the value of orders received. The release attributes the growth to wider use of ID-based payments and an improved checkout, and to growth in B2B and cross-border e-commerce, and says the average purchase value on shops' own sites was ¥17,078 as of December 2025 (136.6% of January 2021), more than four times the e-commerce marketplace average of ¥3,527 according to Nint Inc. The pricing page says makeshop is used by "more than 12,000 companies," and the Food EC Package page footnotes its "track record of more than 12,000 corporate adoptions," explaining that the count is the number of stores on the Premium plan or above (excluding free trials). The main figures are as follows (all from the same press release).
:::

| Metric (2025) | Figure | Year-over-year and more |
| --- | --- | --- |
| Annual GMV | ¥380.4 billion | 110.9% |
| GMV of shops using the B2B feature (2,000+ shops) | ¥127.0 billion | 117% |
| Smart Checkout's contribution to GMV (average CVR of adopting shops: 65.2%) | ¥127.3 billion | not stated |
| Subscription GMV | not stated | 133.6% |
| Cross-border GMV (2,000 shops) | not stated | 120.8% |
| GMV through Amazon Pay (18% share among ID-based payments) | not stated | 127% |
| Share of ID-based payments (December 2025) | 24% | in the 14% range in 2021 |

:::guess
By this site's calculation, the GMV of shops using the B2B feature is about 33% of annual GMV, and Smart Checkout's contribution is also about 33%. Working back from the year-over-year rates, annual GMV grew by about ¥37.4 billion, and about ¥18.5 billion of that came from the growth at shops using the B2B feature (this site's calculation). Dividing annual GMV by the 12,000 in "more than 12,000 companies" gives about ¥31.7 million a year per store (about ¥2.64 million a month); since the store count is above 12,000, this is an upper-bound guide and the real figure is smaller. That is also the same order of magnitude as the average annual sales of ¥25.97 million shown on the Premium plan page (stores that used Premium or above for a full year in 2020). A pricing scheme that took 3% of sales would cost about ¥950,000 a year for a store with about ¥31.7 million in annual sales (about ¥780,000 at the ¥25.97 million average), while the Premium plan's monthly fee comes to ¥165,000 a year (this site's calculation). A ¥0 sales fee appears to pay off for stores of this size, and the comparison page sending small starters to free carts reads as the flip side of the same arithmetic. That B2B and subscriptions help drive the growth appears to fit the top page's message that "you don't have to split your e-commerce" and the push behind the food package.
:::

## Business model

The core revenue is the monthly fee shops pay. makeshop takes no sales fee proportional to sales, apart from the exceptions in the pricing page's footnotes (sales on outside sites through Item Post, and the Yahoo! Shopping integration). On top of that come options, build-for-you and operations services, and platform fees from the app store. Shops that use makeshop Payment for card payments also pay its monthly fee and processing fees, but using it requires a contract with GMO Epsilon.

:::fact
GMO Internet Group's FY12/2026 2Q earnings presentation (2026-08-14), under "intra-group synergy examples," lines up the online-shop builders [ColorMe Shop](/en/articles/colorme-shop) and makeshop as a "recurring" model (revenue of unit price × number of stores, booked in the EC support segment) and the payment services GMO Epsilon and GMO Payment Gateway as a "transaction" model (GMV × fee rate and so on, booked in the payments segment), stating that "cross-selling products within the group is advancing monetization through recurring and transaction revenue." makeshop's payment methods page notes that using makeshop Payment requires a contract with GMO Epsilon, Inc. In the same presentation's EC support KPIs (online-shop support business), the chart's data labels show the number of online shops falling from 63.9 thousand in April–June 2021 to 42.8 thousand in April–June 2026, and the slide adds that "the decline continues, but the shift to higher-priced plans is accelerating." It gives no breakdown by service. GMV in the EC support business (online-shop support, minne, and SUZURI and Canvath combined) was ¥144.7 billion in April–June 2026 by the chart's data label, which the slide gives as up 3.6% year over year.
:::

:::fact
On the acquisition side, the official partner program keeps paying out part of the monthly fee. According to the partner program page (checked 2026-10-13), registration and monthly fees are free, and both individuals and companies can register. Referral commissions apply to the Premium plan and are paid at each contract renewal, at a rate set by a rank based on the previous fiscal year's paid referrals: Diamond (20 or more) 50%, Platinum (5 or more) 40%, Gold (3 or more) 30%, Silver (2 or more) 20% and Bronze (1 or more) 10%. Options such as the BtoB option (¥440,000) also earn commissions on their first payment. The partner terms (last revised February 17, 2026) define the commission base as monthly fees whose payment has been confirmed, and pay by the end of the month after next following the month-end close. According to the developer site, apps published openly on makeshop apps pay 10% of the payment amount (excluding tax) as a platform fee, and apps published to specific shops only pay ¥1,000 a month per installation (excluding tax).
:::

:::guess
Looked at across the whole group rather than makeshop alone, the ¥0 sales fee appears to be made up for in another form. The earnings presentation's "intra-group synergy examples" read as a structure in which monthly fees are booked as recurring revenue in EC support, while the card fees flowing through makeshop Payment are booked as transaction revenue in the payments segment. The presentation's framing of a shift to higher-priced plans as the store count falls arguably points the same way as a pricing page with no free plan and a comparison page that sends small starters to other companies' free carts. That store count, however, covers the whole online-shop support business, which the deck presents with ColorMe Shop and makeshop side by side, so it does not show how makeshop alone has changed. A partner program that keeps paying up to half of the monthly fee at every renewal presumably works as a way to gather corporate switching projects through web agencies and resellers. That the Food EC Package's early sign-up price lasts a year from sign-up roughly overlaps with the schedule for its features to arrive one by one through June 2027, which reads as a design that uses a discount to carry customers until the features are complete.
:::

makeshop is a cart that takes nothing from sales and instead collects a monthly fee from shops that already sell. Beneath the ¥380.4 billion that flowed over it in 2025, the move from a long-running legacy platform to the Go and GraphQL next-generation EC platform continues. The legacy API is scheduled to shut down on November 2, and just before that, an entrance for AI agents opened. A price list clear-cut enough to send small starters to free carts and a new API that opens the admin console to AI both look like tools for going after shops that already sell.
