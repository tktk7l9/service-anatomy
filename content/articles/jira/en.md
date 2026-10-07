---
service: "Jira"
title: "350,000+ Customers and $6.57 Billion in Revenue at Atlassian, Self-Managed Data Center Ending in March 2029 — Dissecting Jira, Which Keeps One PostgreSQL Database per Tenant, Four Million in All, and Is Layering AI Credits on Top of Seat Pricing"
description: "Jira, the issue tracker Atlassian launched as its first product in 2002, is stretching from a staple of software teams into a place that holds company-wide work and the work of AI agents. Atlassian's revenue for the fiscal year ended June 2026 was $6.572 billion (up 26%), and fourth-quarter cloud revenue was $1.213 billion (up 31% year over year). The self-managed Data Center edition stopped selling to new customers on March 30, 2026 and becomes read-only on March 28, 2029. Free covers up to 10 users, Standard costs $9.05 per user per month for the first 100 users on monthly billing, and paid plans include 25 to 150 Rovo credits per user per month. Using the official pricing and licensing pages, the earnings release and shareholder letters, the Data Center end-of-life notice, Atlassian's engineering blog, GitHub and this site's own observations, the article dissects a platform that keeps one PostgreSQL database per tenant, about four million in all, the rebuild that moves heavy reads into dedicated services, and pricing that layers usage-based AI charges on top of seats."
lead: "Jira keeps one database for every customer site. There are about four million of them, spread across 13 AWS regions. Born in 2002, the issue tracker is carrying 24 years of flexibility and a plugin architecture through three switches at once in 2026: ending the edition customers run on their own servers by 2029, moving heavy reads into new services, and layering AI credits on top of the price per user. This article dissects, from public information alone, how those three switches show up in the price list, the technology and the financial results."
category: dev-tool
tags: [project-management, saas, b2b, cloud-migration, aws, postgres, ai, mcp]
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastVerified: "2026-10-07"
serviceUrl: "https://www.atlassian.com/software/jira"
# Affiliate link placeholder: no public affiliate or referral program for Jira was found
# (checked 2026-10-07; atlassian.com/affiliate returns 404, and Atlassian sells through its own
# site and the Solution Partner program at atlassian.com/partners, which is for resellers and
# consultants, not a referral program). Leave this block commented out unless the owner finds one.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<jira-referral-link>"
#   program: "Jira"
vendor: "Atlassian Corporation"
origin: "AU"
heroTheme: "jira"
scores: { product: 4.0, ux: 3.5, tech: 4.5, business: 4.0 }
techStack:
  - layer: "Database"
    name: "PostgreSQL / Amazon Aurora PostgreSQL (one database per tenant, migrated from Amazon RDS)"
    confidence: confirmed
    evidence: "Atlassian's engineering blog (2025-07-01) states that \"Jira uses Postgres as its backing store\" with \"one database per Jira tenant,\" and explains that about four million databases are spread across about 3,000 instances (Amazon RDS for PostgreSQL or Aurora PostgreSQL) in 13 AWS regions, with RDS being replatformed onto Aurora since late 2023"
    evidenceUrl: "https://www.atlassian.com/blog/how-we-build/migrating-jira-database-platform-to-aws-aurora"
  - layer: "Issue data, search and permissions (new platform)"
    name: "Amazon DynamoDB (JIS) / OpenSearch (JSIS) / Memcached (JAS)"
    confidence: confirmed
    evidence: "Atlassian's engineering blog (2025-12-15) describes three services: JIS for issue data (a document store plus caches, mentioning DynamoDB item size limits, DynamoDB Streams and a GSI), JSIS for JQL search (built on OpenSearch) and JAS for permission checks (Memcached compare-and-swap plus JVM-level LRU caches)"
    evidenceUrl: "https://www.atlassian.com/blog/how-we-build/how-we-unlocked-performance-at-scale-with-jira-platform"
  - layer: "Application"
    name: "Java (JVM; plugin-based monolith and new platform services)"
    confidence: confirmed
    evidence: "Atlassian's engineering blog (2020-02-04) explains how Jira was transformed from a single-tenant, single-JVM Tomcat web app into a composition of multi-tenant web services on AWS, with pages rendered in the JVM by Java components. The 2025-12-15 post says Jira was built as a plugin system and that the new permission service relies on JVM-level caches"
    evidenceUrl: "https://www.atlassian.com/blog/how-we-build/scaling-react-server-side-rendering-in-jira-cloud"
  - layer: "Frontend"
    name: "React (server-side rendering on a Node.js service)"
    confidence: confirmed
    evidence: "The same 2020-02-04 post describes replacing 17 years of JSPs, Velocity templates and Backbone/Marionette apps with React components, and adding a Node.js service on top of the existing system to server-side render React"
    evidenceUrl: "https://www.atlassian.com/blog/how-we-build/scaling-react-server-side-rendering-in-jira-cloud"
  - layer: "Cloud platform"
    name: "AWS (13 regions for the Jira database fleet)"
    confidence: confirmed
    evidence: "The 2025-07-01 post states that Jira's databases are spread across 13 AWS regions. The 2020-02-04 post also says Jira became multi-tenant web services operated by Atlassian on AWS"
    evidenceUrl: "https://www.atlassian.com/blog/how-we-build/migrating-jira-database-platform-to-aws-aurora"
  - layer: "Extension runtime"
    name: "Forge (FaaS on AWS Lambda)"
    confidence: confirmed
    evidence: "Atlassian's developer documentation, \"The Forge platform,\" states that \"at the heart of Forge is a serverless FaaS hosting platform, powered by AWS Lambda\" and that \"apps created with Forge run inside a security layer that enforces data egress restriction by design\""
    evidenceUrl: "https://developer.atlassian.com/platform/forge/introduction/the-forge-platform/"
  - layer: "Entry point for AI clients"
    name: "Atlassian Rovo MCP Server (remote MCP, OAuth 2.1 or API tokens)"
    confidence: confirmed
    evidence: "GitHub's atlassian/atlassian-mcp-server (as of 2026-10-07, via the API) is described as the official remote MCP server that connects Jira, Confluence, Jira Service Management, Bitbucket and Compass to Claude, ChatGPT, Cursor, VS Code and other tools using OAuth 2.1 or API tokens; Apache-2.0, 1,084 stars, created in August 2025 and pushed on September 15, 2026"
    evidenceUrl: "https://github.com/atlassian/atlassian-mcp-server"
  - layer: "Delivery"
    name: "Amazon CloudFront + AtlassianEdge"
    confidence: likely
    evidence: "This site's own observation (2026-10-07) found both www.atlassian.com and jira.atlassian.com returning server: AtlassianEdge and via: CloudFront (x-amz-cf-pop: NRT20), along with Atlassian-specific headers such as atl-traceid"
sources:
  - label: "Atlassian: About Us (company profile and history)"
    url: "https://www.atlassian.com/company"
    accessedAt: "2026-10-07"
  - label: "Atlassian: Jira pricing"
    url: "https://www.atlassian.com/software/jira/pricing"
    accessedAt: "2026-10-07"
  - label: "Atlassian: Rovo Plans and Trial (Rovo credits)"
    url: "https://www.atlassian.com/licensing/rovo"
    accessedAt: "2026-10-07"
  - label: "Atlassian: Data Center End of Life"
    url: "https://www.atlassian.com/licensing/data-center-end-of-life"
    accessedAt: "2026-10-07"
  - label: "Atlassian: Fourth Quarter and Fiscal Year 2026 Results (2026-08-06)"
    url: "https://s206.q4cdn.com/270053503/files/doc_financials/2026/q4/TEAM-Q4-2026-Earnings-Release.pdf"
    accessedAt: "2026-10-07"
  - label: "Atlassian: Q4 FY2026 Shareholder Letter (2026-08-06)"
    url: "https://s206.q4cdn.com/270053503/files/doc_financials/2026/q4/TEAM-Q4-2026-Shareholder-Letter.pdf"
    accessedAt: "2026-10-07"
  - label: "Atlassian: Q1 FY2026 Shareholder Letter (2025-10)"
    url: "https://s206.q4cdn.com/270053503/files/doc_financials/2026/q1/TEAM-Q1-2026-Shareholder-Letter.pdf"
    accessedAt: "2026-10-07"
  - label: "Inside Atlassian: An important update on our team (2026-03-11)"
    url: "https://www.atlassian.com/blog/company-news/atlassian-team-update-march-2026"
    accessedAt: "2026-10-07"
  - label: "Inside Atlassian: Welcoming The Browser Company to Atlassian (2025-09-04)"
    url: "https://www.atlassian.com/blog/company-news/atlassian-acquires-the-browser-company"
    accessedAt: "2026-10-07"
  - label: "Inside Atlassian: Atlassian + DX: Engineering Intelligence for the AI Era (2025-09-18)"
    url: "https://www.atlassian.com/blog/announcements/atlassian-acquires-dx"
    accessedAt: "2026-10-07"
  - label: "Atlassian Engineering: Migrating the Jira Database Platform to AWS Aurora (2025-07-01)"
    url: "https://www.atlassian.com/blog/how-we-build/migrating-jira-database-platform-to-aws-aurora"
    accessedAt: "2026-10-07"
  - label: "Atlassian Engineering: How We Unlocked Performance at Scale with Jira Platform (2025-12-15)"
    url: "https://www.atlassian.com/blog/how-we-build/how-we-unlocked-performance-at-scale-with-jira-platform"
    accessedAt: "2026-10-07"
  - label: "Atlassian Engineering: Scaling React server-side rendering in Jira Cloud (2020-02-04)"
    url: "https://www.atlassian.com/blog/how-we-build/scaling-react-server-side-rendering-in-jira-cloud"
    accessedAt: "2026-10-07"
  - label: "Atlassian Developer: The Forge platform"
    url: "https://developer.atlassian.com/platform/forge/introduction/the-forge-platform/"
    accessedAt: "2026-10-07"
  - label: "GitHub: atlassian/atlassian-mcp-server"
    url: "https://github.com/atlassian/atlassian-mcp-server"
    accessedAt: "2026-10-07"
---

Jira is an issue tracker where software teams file issues (tickets), move them through a workflow they define, and keep track of them on boards and backlogs. Atlassian launched it as its first product in 2002, and over 24 years it became a staple of development teams. In this site's dissection of [Linear](/en/articles/linear), Jira is also the first name that comes up as the benchmark for slowness. In 2026, Jira is going through three switches at once: ending its self-managed edition, rebuilding its platform, and pricing AI.

## Service overview

Jira handles issues, projects and goals through backlog, board, timeline, calendar and other views. In 2024 Atlassian merged Jira Software, built for software development, and Jira Work Management, built for business teams, into a single "Jira," pushing it beyond engineering. There are four plans, Free, Standard, Premium and Enterprise, and Atlassian also sells a "Teamwork Collection" that bundles Jira with its AI, Rovo, its documentation tool Confluence and its video tool Loom.

:::fact
According to Atlassian's company page (as of 2026-10-07), the company was started by Mike Cannon-Brookes and Scott Farquhar, who met in the same scholarship course at the University of New South Wales, and launched Jira 1.0 in 2002. It shipped the first cloud versions of Jira and Confluence in 2011, listed on NASDAQ in 2015 (ticker TEAM), acquired Loom in 2023, and in 2024 announced its AI, Rovo, and merged Jira Software and Jira Work Management into one Jira. Atlassian's engineering blog (2020-02-04) describes turning Jira from "a single-tenanted single-JVM tomcat webapp hosted in-house by customers" into "a composition of multi-tenanted web services operated by Atlassian on AWS" as one of the largest and most complex projects in the company's history. According to the August 6, 2026 earnings release, Atlassian's revenue for the fiscal year ended June 2026 was $6.572 billion (up 26%), and its software is used by more than 350,000 customers and more than 85% of the Fortune 500.
:::

:::fact
Atlassian announced the end of its self-managed Data Center edition in September 2025. According to the official notice (checked 2026-10-07), sales to new customers ended on March 30, 2026, existing customers can buy new subscriptions and expansions until March 30, 2028, and on March 28, 2029 Data Center products and their Marketplace apps become read-only. Bitbucket and Bamboo Data Center are excluded and will continue beyond that date, and Atlassian says it will offer extended maintenance by exception to some customers who cannot migrate in time. The same page says 99% of Atlassian's customers are already in the cloud or on a path there, including 75% of regulated and enterprise customers.
:::

:::pull
One PostgreSQL database per customer site, about four million in all. Carrying them, Jira is retiring its self-managed edition and layering AI usage on top of the price per seat.
:::

::scorecard

## UX analysis

Jira spread on the flexibility to mirror any organization's process. That same flexibility became a source of weight, and in 2026 it is being rebuilt on two fronts: speed and AI.

- **A design that imposes no single method.** The pricing page (checked 2026-10-07) lists, for every plan, unlimited goals, projects, tasks and forms, custom workflows and custom fields, and backlog, list, board, timeline, calendar and summary views. Where [Linear](/en/articles/linear) imposes fixed forms such as cycles and triage, Jira grew up as a tool that takes each organization's process as it is.
- **Weight was the price of flexibility.** Atlassian's engineering blog (2025-12-15) says Jira was originally built as a plugin system, so serving a single request required calling many components and outside services, which made performance hard to guarantee. With the move to the new platform, the p99 for the initial load of the Issue Navigator fell from about 4 seconds to about 300 milliseconds, and some large customers saw endpoint p99 drop from about 14.4 seconds to about 486 milliseconds.
- **AI runs on credits attached to seats.** According to the Rovo licensing page (checked 2026-10-07), paid Jira plans include 25 (Standard), 70 (Premium) or 150 (Enterprise) Rovo credits per user per month, pooled across the organization. A basic AI interaction uses 10 credits. When the allowance runs out and extra usage is off, only new AI actions pause until the next month, while no-cost features such as Rovo Search and summaries keep working. Usage beyond the allowance can be paid for at $0.01 per credit.
- **A way in for outside AI.** The official atlassian/atlassian-mcp-server on GitHub (as of 2026-10-07) is a remote MCP server that connects Jira, Confluence, Jira Service Management, Bitbucket and Compass to Claude, ChatGPT, Cursor and other tools. According to the shareholder letter (2026-08-06), monthly active users of the MCP server and the Teamwork Graph CLI more than doubled in the quarter to over one million, and Jira work items and Confluence pages generated via MCP rose nearly fourfold from the prior quarter. The letter also says 98% of MCP users were active in the Jira UI in the same month.
- **The weak spot is the burden of migration.** With Data Center ending, organizations that have run Jira themselves must move to the cloud by March 2029 or negotiate an exception. The more customization and Marketplace apps an environment has accumulated over the years, the heavier that move is likely to be.

## Tech stack

::techstack

:::fact
According to Atlassian's engineering blog (2025-12-15), Jira Cloud began with the Studio (later Unicorn) architecture, which wrapped the same codebase used for Jira Server with cloud-specific layers, keeping the core application logic, data models and plugin system identical to the server version. A complete rewrite would have been too costly and risky, and as a result server-era assumptions came along to the cloud, the most important being a single-tenant database. Under the OfBiz Entity Engine, an ORM forked from Apache OFBiz that Atlassian adopted in 2005, Jira's schema became heavily relational and normalized and tightly coupled to a single RDBMS, and the application is read-heavy, with a 10:1 read-to-write ratio. For the front end, a post of February 4, 2020 explains that to replace 17 years of JSPs, Velocity templates and Backbone/Marionette apps rendered with stateful Java components in the JVM, Atlassian took an "inside-out" approach, inserting small islands of React and expanding them, and added a Node.js service on top of the existing system to server-side render React.
:::

:::fact
According to a post of July 1, 2025, Jira stores everything, including issues, projects, workflows and custom fields, in PostgreSQL, with one database per tenant (customer site). The post calls this an uncommon architecture chosen to maximize isolation, horizontal scalability and the ability to balance tenants of very different sizes, and says about four million databases are spread across about 3,000 instances (Amazon RDS for PostgreSQL or Aurora PostgreSQL) in 13 AWS regions. A cluster hosts up to about 4,000 databases, and Atlassian moves about 1,000 databases a day on average as routine rebalancing. Since late 2023 it has converted RDS instances to Aurora, and the post says it could halve the instance size and still get better performance. Because a single Jira database needs about 5,000 files on disk, the sheer file count became an obstacle to the conversion.
:::

:::fact
The post of December 15, 2025 explains that Jira Cloud is being rebuilt from "a write-optimised monolith" into "a read-optimised platform." Issue data is handled by JIS (Jira Issue Service) with a document store and caches (the post mentions DynamoDB item size limits, DynamoDB Streams and a GSI), targeting reads under 15 milliseconds and 99.999% API uptime, and designed for up to one billion issues per tenant and 100 billion to one trillion issues across Jira Cloud. JQL search is handled by JSIS (Jira Scalable Issue Search) on OpenSearch, and permission checks by JAS (Jira Authorization Service), which uses Memcached and JVM-level caches and targets evaluations within 10 milliseconds. Services now have data pushed into them instead of fetching it on demand, and the post says the change saved millions in operational costs. According to the official documentation, Forge, the runtime for extension apps, is a FaaS platform powered by AWS Lambda that runs inside a security layer restricting data egress. This site's own observation (2026-10-07) found both www.atlassian.com and jira.atlassian.com returning server: AtlassianEdge with CloudFront (x-amz-cf-pop: NRT20).
:::

:::guess
Jira's platform appears to be keeping its one-database-per-tenant PostgreSQL as the source of truth while moving only the heavy reads into dedicated services. Issue display goes to the JIS cache, search to OpenSearch and permissions to Memcached, giving each read path its own home and appearing to cut back the "fetch when asked" behavior of an era when plugins could insert processing anywhere. That the December 2025 post makes change data capture (CDC) the standard and names the Data Lake and Rovo Search as what it enables suggests the rebuild is not only about speed but also groundwork for reliably extracting organizational context from every tenant to feed AI. The one-database-per-tenant design is described as a deliberate choice for isolation and scale in the Aurora post and as a server-era assumption carried into the cloud in the rebuild post, which suggests it is both. Ending Data Center can also be read as a decision to stop maintaining the same product in two lines, self-managed and cloud, and focus development on the new read platform.
:::

## Business model

Most revenue comes from subscriptions priced by the number of users, and Atlassian reports revenue in three buckets: Cloud, Data Center, and Marketplace and other. In 2026 a usage-based layer for AI was added on top.

:::fact
According to the Jira pricing page (checked 2026-10-07, monthly billing), Free covers up to 10 users with 2 GB of storage, 150 automation steps per month for the whole subscription and community support only. In the price table embedded in the page, Standard costs $9.05 per user per month for the first 100 users and Premium $18.30, with graduated discounts as user counts grow; in yen the same tiers are ¥1,240 and ¥2,500. At the page's default team size of 300 users, the average works out to $7.91 for Standard and $14.54 for Premium according to the page's structured data, and the yen page displays ¥1,085 and ¥1,987. Standard includes 250 GB of storage, 400 automation steps per user per month and up to 100,000 users per site. Premium adds unlimited storage, 750 steps, 24/7 support for critical issues and a 99.9% uptime SLA. Enterprise is billed annually through sales and adds up to 150 sites and a 99.95% SLA. Annual billing saves up to 17%.
:::

:::fact
According to the August 6, 2026 earnings release and shareholder letter, revenue for the fourth quarter of the fiscal year ended June 2026 (April–June) was $1.766 billion (up 28% year over year): Cloud $1.213 billion (up 31%), Data Center $462 million (up 21%), and Marketplace and other $91 million. Full-year revenue was $6.572 billion (up 26%), Subscription ARR $6.606 billion (up 23%) and remaining performance obligations $4.817 billion (up 44%). Full-year GAAP operating income was $10 million (a 0.2% margin); excluding stock-based compensation and other items, non-GAAP operating income was $1.996 billion (30%), and free cash flow was $1.319 billion. Customers with more than $10,000 in Cloud ARR numbered 57,334. The letter attributes cloud growth to seat expansion in Jira and Confluence, and explains the Data Center increase by a higher share of contract value being recognized upfront after the end-of-life announcement, plus pricing. Atlassian's targets for the fiscal year ending June 2027 call for total revenue growth of about 13%, Cloud growth of about 25.5% and a Data Center decline of about 17%, citing among other reasons customer purchases that pulled revenue from fiscal 2027 into fiscal 2026.
:::

:::fact
According to the same letter, over 80% of the Fortune 500 use Rovo, and customers that adopt Rovo complete 20% more Jira work items than those that do not. On March 11, 2026, CEO Mike Cannon-Brookes announced a reduction of about 10% of the workforce (about 1,600 employees) to self-fund further investment in AI and enterprise sales, writing in the same post that Rovo had passed 5 million monthly active users. In the first quarter of the fiscal year ended June 2026, Atlassian acquired [The Browser Company](/en/articles/browser-company), maker of the AI browser Dia, and agreed to acquire DX, which measures developer productivity. In that fiscal year's cash flow statement, cash paid for business combinations, net of cash acquired, was $1.229 billion.
:::

:::guess
Jira's pricing appears to be moving toward a model that layers usage-based charges for AI on top of seat-based charges. By giving each seat an allowance of credits, pooling them across the organization and charging only for usage beyond it, Atlassian can leave the price unchanged for customers who use little AI while collecting an amount that matches inference costs from those who use a lot. The shareholder letter's emphasis on the correlation between Rovo use and completed work items, and on 98% of MCP users also using the Jira UI, is presumably meant to show investors that seats will not shrink even as AI creates issues from outside the screen.
:::

:::guess
Ending Data Center appears to lift short-term revenue and leave a hangover the following year. That Atlassian itself projects Data Center revenue to fall about 17% in the fiscal year ending June 2027 appears to reflect both pulled-forward purchases and ongoing migration to the cloud. It nonetheless chose to end it, which can be read as a bet that gathering self-managed customers into the cloud lets it sell cloud-only products, such as usage-based Rovo charges and the Teamwork Graph, to every customer.
:::

Jira was built in 2002 to track the issues of development teams. Twenty-four years later, on top of about four million PostgreSQL databases, it is trying to become the place that receives company-wide work and the work of AI agents. It is ending its self-managed edition in 2029, moving heavy reads into new services, and layering AI credits on top of the price per seat. All three switches connect as preparation for one thing: gathering an organization's work context in a single place in the cloud and selling it to AI.
