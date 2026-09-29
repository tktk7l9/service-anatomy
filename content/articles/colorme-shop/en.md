---
service: "ColorMe Shop"
title: "The Reason for the Price Rise Is \"Server Hardware\" — The Economics of ColorMe Shop, 21 Years on Its Own Cloud"
description: "ColorMe Shop is an online-store builder that GMO Pepabo has run in Japan since 2005. Its contract count has slipped to 47K and its revenue is roughly flat, yet its operating margin has passed 40%. Starting from the reason it gave for raising its Regular and Large plans in November 2026 — the cost of \"procuring and operating server hardware\" — we dissect, using its earnings presentations, the official pricing pages and notice, and the official tech blog, an infrastructure that pairs an in-house OpenStack cloud with Amazon RDS, and its move to a remote MCP server."
lead: "On September 9, 2026, ColorMe Shop announced a price revision. For renewals on or after November 1, the Regular plan goes from ¥4,950 to ¥5,940 a month and the Large plan from ¥9,595 to ¥11,000. The stated reason is rising \"infrastructure costs, starting with the procurement and operation of server hardware.\" At a time when most SaaS runs on public clouds, why would the price of server hardware matter? We dissect it from GMO Pepabo's earnings materials and from how the platform, running on the company's own cloud, is built."
category: saas
tags: [e-commerce, small-business, php, mysql, mcp]
publishedAt: "2026-09-29"
updatedAt: "2026-09-29"
lastVerified: "2026-09-29"
serviceUrl: "https://shop-pro.jp/"
# Affiliate link placeholder: the owner must join the ColorMe Shop promotion on Moshimo Affiliate
# before enabling this block. A third-party ASP index
# (https://media-analytics.jp/affisearch/promotions/color-me-shop) lists it on Moshimo at ¥800 per
# new sign-up; confirm the current terms on the Moshimo dashboard, then paste the click URL here.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://af.moshimo.com/af/c/click?a_id=<a_id>&p_id=<p_id>&pc_id=<pc_id>&pl_id=<pl_id>"
#   program: "ColorMe Shop Affiliate Program (Moshimo Affiliate)"
vendor: "GMO Pepabo, Inc."
origin: "JP"
heroTheme: "colorme-shop"
scores: { product: 3.5, ux: 3.5, tech: 3.5, business: 3.5 }
techStack:
  - layer: "Web application"
    name: "PHP"
    confidence: confirmed
    evidence: "The official tech blog (2021-04) describes what a ColorMe Shop server-side engineer learned in order to move its \"PHP application\" to Kubernetes, and states that the newsletter feature became the first user-facing role to run on Kubernetes. In this site's own observation (2026-09-29), the admin console admin.shop-pro.jp also returns a PHP session cookie (PHPSESSID)"
    evidenceUrl: "https://tech.pepabo.com/2021/04/01/learn-kubernetes/"
  - layer: "Infrastructure (in-house cloud)"
    name: "OpenStack / Kubernetes (private cloud Nyah)"
    confidence: confirmed
    evidence: "The official tech blog (2024-05) states that the VMs and Kubernetes Nodes that run the application are built on Nyah, a private cloud based on OpenStack, and that this keeps operating costs far lower than a public cloud would. In this site's own observation (2026-09-29), the whois network name for the IP address that api.shop-pro.jp resolves to was PEPABO-NYAH, while the admin console admin.shop-pro.jp resolved to three IP addresses in AWS's Tokyo region"
    evidenceUrl: "https://tech.pepabo.com/2024/05/13/colrome-db-upgrade/"
  - layer: "Database"
    name: "Amazon RDS for MySQL + AWS Direct Connect"
    confidence: confirmed
    evidence: "The same official tech blog post (2024-05) states that the master DB is on Amazon RDS for MySQL, in a hybrid-cloud setup with four RDS read replicas and three DBs on Nyah, and that AWS and Nyah are connected over AWS Direct Connect. It also says the upgrade from MySQL 5.7.44 to 8.0.35 was done during a service-stopping maintenance window from midnight to 6 a.m., and that the primary DB took about an hour to upgrade. As of the July 2020 post, the DB was still running as VMs on Nyah"
    evidenceUrl: "https://tech.pepabo.com/2024/05/13/colrome-db-upgrade/"
  - layer: "Admin console frontend"
    name: "Vue 3 + Vite"
    confidence: confirmed
    evidence: "The official tech blog (2025-07) states that the admin console is being migrated to Vue 3, that procedural UI written directly against DOM APIs is being replaced step by step with Custom Elements built with Vue.js and Vite, and that a full move to a framework such as Nuxt was judged difficult for now"
    evidenceUrl: "https://tech.pepabo.com/2025/07/07/progressive-frontend-update/"
  - layer: "Public API"
    name: "REST API (OAuth 2.0 / OpenAPI)"
    confidence: confirmed
    evidence: "The official tech blog (2024-01) states that the ColorMe Shop API authorizes with OAuth 2.0 (api.shop-pro.jp/oauth/authorize) and publishes an OpenAPI specification (api.shop-pro.jp/v1/spec/open_api.json), which the author loaded into OpenAI's GPTs to build a shop-management assistant"
    evidenceUrl: "https://tech.pepabo.com/2024/01/11/colormeshop-and-openai-gpts/"
  - layer: "AI agent integration"
    name: "Remote MCP server (AI Connector)"
    confidence: confirmed
    evidence: "GMO Pepabo's press release (2026-03-09) states that installing the \"AI Connector\" app from the app store connects a shop to external AI apps through a remote MCP server, so that products and orders can be managed by conversation. It calls this a first among Japanese e-commerce cart services, based on the company's own comparison of seven general-purpose hosted cart services offered in Japan as of 2026-03-05"
    evidenceUrl: "https://pepabo.com/news/press/202603091300/"
  - layer: "API-layer framework"
    name: "Ruby on Rails"
    confidence: likely
    evidence: "In this site's own observation (2026-09-29), responses from api.shop-pro.jp carried the full set of headers Rails adds by default: X-Runtime, X-Request-Id, X-Download-Options and X-Permitted-Cross-Domain-Policies (secure.shop-pro.jp also returns X-Runtime, X-Request-Id and X-Permitted-Cross-Domain-Policies). Separately from the PHP admin console, the API side appears to run on Rails"
  - layer: "Marketing site delivery"
    name: "Amazon CloudFront + Amazon S3"
    confidence: likely
    evidence: "In this site's own observation (2026-09-29), responses from the marketing site shop-pro.jp carried via (CloudFront), x-amz-cf-pop (NRT), x-cache: Hit from cloudfront and x-amz-server-side-encryption"
  - layer: "App store"
    name: "Heroku"
    confidence: likely
    evidence: "In this site's own observation (2026-09-29), the app store app.shop-pro.jp is a CNAME to herokudns.com and returned server: Heroku and x-powered-by: Express"
sources:
  - label: "GMO Pepabo, Inc.: FY12/2026 2Q earnings presentation (Japanese, 2026-08-13)"
    url: "https://www.nikkei.com/markets/ir/irftp/data/tdnr/tdnetg3/20260813/g2rw0w/140120260813519264.pdf"
    accessedAt: "2026-09-29"
  - label: "GMO Pepabo, Inc.: FY12/2023 3Q earnings presentation (Japanese, 2023-11-13)"
    url: "https://pdf.pepabo.com/presentation/20231113p.pdf"
    accessedAt: "2026-09-29"
  - label: "ColorMe Shop official: Plans and pricing (Japanese)"
    url: "https://shop-pro.jp/plans/"
    accessedAt: "2026-09-29"
  - label: "ColorMe Shop official: Free plan (Japanese)"
    url: "https://shop-pro.jp/plans/free/"
    accessedAt: "2026-09-29"
  - label: "ColorMe Shop official: [Important] Notice of revised fees for the Regular and Large plans (Japanese, 2026-09-09)"
    url: "https://shop-pro.jp/news/202611-pricing-notice"
    accessedAt: "2026-09-29"
  - label: "ColorMe Shop Developers: ColorMe Shop monthly fees change from April 5, 2022 (Japanese, 2022-01-21)"
    url: "https://developer.shop-pro.jp/news/releases/renewal_colorme_plans"
    accessedAt: "2026-09-29"
  - label: "ColorMe Shop Developers: Top page (app store) (Japanese)"
    url: "https://developer.shop-pro.jp/"
    accessedAt: "2026-09-29"
  - label: "ColorMe Shop App Store: ColorMe Shop AI Connector (Japanese)"
    url: "https://app.shop-pro.jp/apps/956"
    accessedAt: "2026-09-29"
  - label: "GMO Pepabo: ColorMe Shop launches \"AI Connector\" (remote MCP server), a first among Japanese e-commerce cart services (Japanese, 2026-03-09)"
    url: "https://pepabo.com/news/press/202603091300/"
    accessedAt: "2026-09-29"
  - label: "Pepabo Tech Portal: The ColorMe Shop architecture that supports post-COVID commerce (Japanese, 2020-07)"
    url: "https://tech.pepabo.com/2020/07/02/colorme-shop-re-architecting-2020/"
    accessedAt: "2026-09-29"
  - label: "Pepabo Tech Portal: What a server-side engineer learned to move a PHP application to Kubernetes (Japanese, 2021-04)"
    url: "https://tech.pepabo.com/2021/04/01/learn-kubernetes/"
    accessedAt: "2026-09-29"
  - label: "Pepabo Tech Portal: Upgrading ColorMe Shop's hybrid-cloud master DB to MySQL 8.0 (Japanese, 2024-05)"
    url: "https://tech.pepabo.com/2024/05/13/colrome-db-upgrade/"
    accessedAt: "2026-09-29"
  - label: "Pepabo Tech Portal: E-commerce operations in the AI era — a shop assistant built with ColorMe Shop and OpenAI GPTs (Japanese, 2024-01)"
    url: "https://tech.pepabo.com/2024/01/11/colormeshop-and-openai-gpts/"
    accessedAt: "2026-09-29"
  - label: "Pepabo Tech Portal: Progressively improving a frontend application with Vue.js and Vite (Japanese, 2025-07)"
    url: "https://tech.pepabo.com/2025/07/07/progressive-frontend-update/"
    accessedAt: "2026-09-29"
  - label: "BASE official: Pricing and fees (Japanese, for comparison)"
    url: "https://thebase.com/price"
    accessedAt: "2026-09-29"
---

ColorMe Shop is one of the veterans among Japan's online-store builders. It launched in 2005, more than 21 years ago. Its contract count has slipped from about 50K to about 47K over the past two years, and its revenue is roughly flat. Yet its profit keeps growing. In September 2026, its prices went up again. The reason it gave was not a cloud bill. It was "server hardware."

## Service overview

ColorMe Shop is an online-store builder run by GMO Pepabo. Pick a template, add products, and you have your own store with a cart, payments and order management. Like [BASE](/en/articles/base) and [Shopify](/en/articles/shopify), it is a tool for building a store on your own domain rather than a marketplace, and it offers HTML and CSS editing, add-ons from an app store, and a public API.

:::fact
According to GMO Pepabo's earnings presentation (2026-08-13), ColorMe Shop launched in February 2005 and had 47K contracts at the end of June 2026. For the first half of FY12/2026 (January–June), its revenue was ¥1.090B (up 0.9% year over year) and its operating profit ¥447M (up 7.1%); the presentation attributes the rise in profit to "more contracts on higher-margin upper plans." In its data sheet, contracts fell from 50,388 at the end of June 2024 to 47,075 at the end of June 2026, while average revenue per customer, calculated over monthly plans only, rose from ¥5,791 to ¥7,472 over the same period. The same presentation says that on July 1 the company acquired 70% of SmartEC (now GMO SmartEC), a smartphone-focused e-commerce builder, for ¥163M, making it a subsidiary.
:::

:::fact
According to the official pricing pages (as of 2026-09-29, tax included), there are four plans. The Free plan has no setup or monthly fee, with payment fees from 6.6% + ¥30. The Regular plan costs ¥4,950 a month plus a ¥3,300 setup fee, with credit-card fees from 3.4%; the Large plan costs ¥9,595 a month with fees from 3.19%; and the Premium plan costs from ¥35,640 a month plus a ¥22,000 setup fee, with fees from 2.99%. The card rates are given as a guide for shops that sign up for the "ColorMe Payment" payment service. Regular and Large come with a 30-day free trial; the Premium column points to a document download instead of a trial.
:::

:::pull
For renewals on or after November 1, 2026, the Regular plan goes from ¥4,950 to ¥5,940 a month, and the Large plan from ¥9,595 to ¥11,000. Premium stays the same. The reason: rising "infrastructure costs, starting with the procurement and operation of server hardware."
:::

::scorecard

## UX analysis

ColorMe Shop's UX is built as a one-way staircase: start free, then move up a plan once you sell. In 2026, it put an entrance to AI near the top of that staircase.

- **A free entrance, and a staircase with no way down.** The Free plan page says the plan suits people with "monthly sales of ¥100,000 or less" and that you can switch to an upper plan as your shop grows. Meanwhile, the FAQ on the same page says you cannot move from Regular, Large or Premium back to Free; to use Free again, you have to create a new account. Going up is easy; there is no path down.
- **The fee notation is inconsistent.** On the Free plan page, the plan comparison table lists the payment fee as "6.6% + ¥30 and up," while the FAQ says "6.6% of the payment amount + ¥33." ¥30 times 1.1 is ¥33, so it could be the difference between tax-excluded and tax-included, but the table carries a note that "all prices are shown tax included," so the page does not make clear which is right. A single line would save people comparing per-order costs from guessing.
- **You can talk to your shop's data through AI.** Install "AI Connector" from the app store and AI tools such as Claude Desktop connect to the shop through a remote MCP server. According to the official app page, it authenticates with ColorMe Shop's OAuth and lets you, by conversation, search, update and cancel orders, send confirmation emails, add and update products, grant points to customers and create coupons. This MCP part is free.
- **The AI inside the admin console is Premium-only.** According to the same app page, the "AI Agent," which you talk to from a side panel in the admin console, is a beta limited to the Premium plan and for now supports only read operations (fetching and checking information). The convenience of AI, too, is placed as one more reason to move up a plan.

## Tech stack

::techstack

:::fact
According to the official tech blog (2020-07), ColorMe Shop's database at the time was MySQL running as VMs on Nyah, GMO Pepabo's private cloud. It held 700GB of data on disk, with one write server and several read servers; at peak, each minute saw about 20,000 write queries and about 900,000 read queries per read server. The post says that over the previous half year, outages had several times made it temporarily impossible for shops to operate, and it names a hybrid-cloud setup using a public cloud to improve the database's fault tolerance and availability, and containerization with Kubernetes to improve scalability.
:::

:::fact
According to the official tech blog in May 2024, the master DB later moved to Amazon RDS for MySQL, in a hybrid-cloud setup of seven DBs in all: four RDS read replicas and three DBs on Nyah. In normal operation, reads from the application go to the DBs on Nyah, which keeps the charges for traffic from RDS to Nyah to a minimum; the RDS side also holds a standby in case the Nyah DBs become unavailable. The VMs and Kubernetes Nodes that run the application stay on Nyah, and the post says this "keeps operating costs far lower than a public cloud." Only the parts that need high reliability and performance, such as the database, go on the public cloud, and AWS and Nyah are connected over AWS Direct Connect. The same post puts the number of shops at about 45,000 and annual GMV at about ¥207B (both as of the end of 2021).
:::

:::fact
According to the official tech blog (2024-01), the public API authorizes with OAuth 2.0 and publishes an OpenAPI specification. The post shows loading that specification straight into OpenAI's GPTs to build a shop-management assistant that fetches and edits products by conversation. For the March 2026 AI Connector, the official app page explains that it connects through ColorMe Shop's OAuth and is used by adding the server URL shown on the app's MCP settings screen to an AI tool such as Claude Desktop. The same page says the API keeps being extended and that the range of operations will grow, tying what MCP can do to the reach of the public API.
:::

:::guess
The "procurement and operation of server hardware" that the pricing notice gives as its reason is consistent with this setup. The notice itself cites rising prices and the weakening yen as the background. If much of the application's compute sits on the company's own OpenStack, then the purchase price of physical servers and the weak yen would likely hit costs before any cloud bill does. That said, in this site's own observation the admin console's entry point resolves to AWS IP addresses, so how much sits on Nyah cannot be seen from outside. The advantage of an in-house cloud — running more cheaply than a public cloud — also comes back the other way when hardware prices rise, since the company carries that increase itself. Also, the master DB on RDS is presumably billed in dollars, and public information does not show how much of the price rise comes from which side.
:::

## Business model

The core revenue is the monthly fee shops pay. The Free plan has no monthly fee and charges only payment fees. On top of paid-plan fees come paid apps from the app store and options such as payments and build-for-you services.

:::fact
According to the data sheet in the November 2023 earnings presentation, ColorMe Shop's contracts grew from 41,191 at the end of March 2021 to 50,663 at the end of December 2022, and stood at 50,264 at the end of September 2023. The average revenue per customer, calculated over monthly plans only, rose from ¥3,436 at the end of March 2021 to ¥5,233 at the end of September 2023. According to a notice on the official developer site (2022-01-21), fees for every plan except the Free and Platinum plans were revised from April 5, 2022, and major optional features were folded into the paid plans. In the August 2026 presentation, the contract count is 47K (end of June 2026).
:::

:::fact
According to the data sheet in the August 2026 earnings presentation, ColorMe Shop's quarterly revenue was ¥546M in April–June 2024 and ¥544M in April–June 2026. Over the same period, operating profit rose from ¥208M to ¥227M. For GMO Pepabo as a whole, recurring revenue made up 78.1% of sales (first half of FY12/2026), and the presentation counts ColorMe Shop's monthly fees as recurring revenue.
:::

:::guess
Dividing the data-sheet figures, ColorMe Shop's quarterly operating margin works out to about 38% in April–June 2024 and about 42% in April–June 2026. Rather than growing the number of shops, it appears to have built profit by getting a slowly shrinking number of shops to choose higher plans and raising revenue per shop. This revision also leaves the top plan unchanged and raises only Regular (about 20%) and Large (about 15%), which narrows the gap between Large and Premium and is likely to nudge shops upward as well.
:::

:::guess
The break-even point between Free and Regular moves, too. Ignoring the fixed ¥30 (or ¥33) per order and the setup fee, and dividing the monthly fee by the card-rate difference alone (6.6% minus 3.4%, or 3.2%), Regular becomes cheaper above roughly ¥155K in monthly sales before the revision and roughly ¥186K after it. By comparison, according to its official pricing page, [BASE](/en/articles/base) charges a 3.6% + ¥40 payment fee plus a 3% service fee on its Standard plan with no monthly fee, and on its Growth plan at ¥16,580 a month (paid annually) lowers the payment fee to 2.9% and drops the service fee. Where BASE takes its cut from what sells, ColorMe Shop's design leans toward getting shops to pay a monthly fee early.
:::

The number of shops is slowly shrinking. Even so, with a staircase of plans and costs kept down by its own cloud, ColorMe Shop has reached an operating margin above 40%. In 2026, the reason for a price rise came from that cost side. Placing the entrance to AI near the top of the staircase looks like the next step for keeping shops choosing to move up, even after the price rise.
