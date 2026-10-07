---
service: "Sansan"
title: "A Business-Card Company Now Growing on Invoices — Dissecting Sansan, With ¥53.8 Billion in Revenue and Record Profit, Which Turns Paper Into Data With AI and Human Hands and Picks AWS, Azure or Google Cloud Product by Product"
description: "Sansan, Inc., which started with business card management, posted record profit for the fiscal year ended May 2026, with revenue of ¥53.761 billion (up 24.4%) and adjusted operating income of ¥8.427 billion (up 137.0%). Its flagship \"Sansan\" has 12,199 contracts and a 0.55% average monthly churn rate over the last 12 months. \"Bill One,\" the accounting service launched in 2020, has grown to ¥14.782 billion in ARR (up 34.9%), and the company expects it to be profitable for the full year ending May 2027. Prices are not published; the products are sold in editions priced by headcount or invoice volume. Using the official tech stack page, the engineering blog, the earnings summary and presentation, the product sites and this site's own observations, the article dissects a setup that uses PostgreSQL, Kotlin, Ruby on Rails or Azure depending on the product, the system that combines AI and people to turn paper into data, and how a business-card company makes money as it spreads into accounting and contracts."
lead: "Sansan's earnings presentation still uses the phrase \"from analog to digital.\" Business cards, invoices, contracts: information that arrives on paper is read by AI, checked by people and turned into a database. The company, which started with business card management in 2007, now earns a quarter of its revenue from Bill One, an invoice-receiving service, and in the age of generative AI it is trying to resell the value of \"each company's own data.\" This article dissects how it is built and how it makes money, from public information alone."
category: saas
tags: [saas, b2b, ai, accounting, aws, azure, google-cloud, postgres]
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastVerified: "2026-10-07"
serviceUrl: "https://jp.sansan.com/"
# Affiliate link placeholder: no public affiliate program for Sansan, Bill One or Eight was found
# (checked 2026-10-07). Bill One runs a partner program for companies by inquiry
# (https://bill-one.com/partner-program/: referral partners who introduce customers, and resellers
# who buy at wholesale prices), not a self-serve tracked-link program. Leave this block commented
# out unless the owner joins one. Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<sansan-referral-link>"
#   program: "Sansan"
vendor: "Sansan, Inc."
origin: "JP"
heroTheme: "sansan"
scores: { product: 4.0, ux: 3.5, tech: 4.0, business: 4.5 }
techStack:
  - layer: "Database (Sansan)"
    name: "PostgreSQL (PostgreSQL 17, multi-tenant)"
    confidence: confirmed
    evidence: "The official engineering blog (2026-09-09) states that \"as of September 2026, Sansan uses PostgreSQL 17 for its database.\" It describes a multi-tenant application used by more than 10,000 companies and holding hundreds of millions of business cards, where a view that expands department-level access rights was the bottleneck on the person detail screen"
    evidenceUrl: "https://buildersbox.corp-sansan.com/entry/2026/09/09/130000"
  - layer: "Application (Bill One)"
    name: "Kotlin + Ktor on Google Cloud Run"
    confidence: confirmed
    evidence: "An official engineering blog post (2026-02-04, part of the Bill One team's blog relay) describes its test setup as \"a Ktor application running on Cloud Run\" and says the examples are mostly code running in production. It explains how the team instrumented asynchronous processing with OpenTelemetry"
    evidenceUrl: "https://buildersbox.corp-sansan.com/entry/2026/02/04/100000"
  - layer: "Asynchronous processing (Bill One)"
    name: "Google Cloud Pub/Sub + Cloud Tasks"
    confidence: confirmed
    evidence: "The same post explains context propagation in a Ktor + Pub/Sub environment and lists an earlier talk on OpenTelemetry messaging instrumentation with Ktor, Google Cloud Tasks and Pub/Sub"
    evidenceUrl: "https://buildersbox.corp-sansan.com/entry/2026/02/04/100000"
  - layer: "Application (Eight)"
    name: "Ruby on Rails on AWS (Amazon ECS + Amazon SQS)"
    confidence: confirmed
    evidence: "The official engineering blog (2025-12-20) says Eight has used AWS since its 2012 launch, and that batch and asynchronous jobs once run on EC2 with DelayedJob and whenever were moved to ECS + Active Job + SQS and EventBridge Scheduler + ECS Run Task, with schedules managed in Terraform"
    evidenceUrl: "https://buildersbox.corp-sansan.com/entry/2025/12/20/100000"
  - layer: "Data integration (Sansan Data Hub)"
    name: "C# + Microsoft Azure (Azure SQL Database Hyperscale / Azure Cosmos DB)"
    confidence: confirmed
    evidence: "An event report on the official engineering blog (2024-08-30) says Sansan Data Hub, the data integration solution, uses Azure SQL Database Hyperscale in some services and stores data integration results as logs in Azure Cosmos DB, and that the team plans more events on C# and Azure"
    evidenceUrl: "https://buildersbox.corp-sansan.com/entry/2024/08/30/143000"
  - layer: "Digitization work platform"
    name: "BigQuery + Google Cloud Pub/Sub (BigQuery subscription)"
    confidence: confirmed
    evidence: "The official engineering blog (2026-03-18) says business cards and invoices are digitized by AI processing plus human verification and correction (human-in-the-loop), and that a data platform called hydra collects work records from more than ten digitization systems on AWS or Google Cloud into BigQuery (near real time through Pub/Sub BigQuery subscriptions, daily through Cloud Storage and Cloud Workflows)"
    evidenceUrl: "https://buildersbox.corp-sansan.com/entry/2026/03/18/100000"
  - layer: "Company-wide tech stack"
    name: "AWS / Microsoft Azure / Google Cloud / Cloudflare"
    confidence: confirmed
    evidence: "The engineering recruiting site's \"About our tech stack\" page (as of April 2026) lists AWS, Azure, Cloudflare, Google Cloud, Kubernetes, Terraform and more as infrastructure and platforms, and says each product picks the technology that suits it, with teams deciding autonomously"
    evidenceUrl: "https://media.sansan-engineering.com/tech-stack"
  - layer: "Product site delivery"
    name: "Cloudflare + Amazon CloudFront + Amazon S3"
    confidence: likely
    evidence: "This site's own observation (2026-10-07) found jp.sansan.com and 8card.net returning server: cloudflare along with via: CloudFront and x-amz-version-id, and bill-one.com returning server: AmazonS3 with CloudFront. The corporate site jp.corp-sansan.com returned Cloudflare and x-kinsta-cache headers"
sources:
  - label: "Sansan, Inc.: Company profile"
    url: "https://jp.corp-sansan.com/company/info"
    accessedAt: "2026-10-07"
  - label: "Sansan, Inc.: Earnings presentation for the fiscal year ended May 2026 (2026-07-13)"
    url: "https://data.swcms.net/file/corp-sansan-ir/dam/jcr:e3811c8d-1eeb-4dfb-adf5-d5c2dcc45991/140120260713592190.pdf"
    accessedAt: "2026-10-07"
  - label: "Sansan, Inc.: Consolidated earnings summary for the fiscal year ended May 2026 (Japanese GAAP, 2026-07-13)"
    url: "https://data.swcms.net/file/corp-sansan-ir/dam/jcr:11e809c9-01a3-43d2-91b6-641802080ac9/140120260713592192.pdf"
    accessedAt: "2026-10-07"
  - label: "Sansan engineering recruiting: About our tech stack (as of April 2026)"
    url: "https://media.sansan-engineering.com/tech-stack"
    accessedAt: "2026-10-07"
  - label: "Sansan Tech Blog: Query tuning in a multi-tenant application (2026-09-09)"
    url: "https://buildersbox.corp-sansan.com/entry/2026/09/09/130000"
    accessedAt: "2026-10-07"
  - label: "Sansan Tech Blog: Propagating context to keep distributed traces intact with Google Cloud Pub/Sub (2026-02-04)"
    url: "https://buildersbox.corp-sansan.com/entry/2026/02/04/100000"
    accessedAt: "2026-10-07"
  - label: "Sansan Tech Blog: How we eliminated EC2 instances from Eight (2025-12-20)"
    url: "https://buildersbox.corp-sansan.com/entry/2025/12/20/100000"
    accessedAt: "2026-10-07"
  - label: "Sansan Tech Blog: hydra, the data platform behind Sansan's digitization operations (2026-03-18)"
    url: "https://buildersbox.corp-sansan.com/entry/2026/03/18/100000"
    accessedAt: "2026-10-07"
  - label: "Sansan Tech Blog: Behind the scenes of building and running a large B2B product on Azure PaaS, database edition (2024-08-30)"
    url: "https://buildersbox.corp-sansan.com/entry/2024/08/30/143000"
    accessedAt: "2026-10-07"
  - label: "Bill One: Pricing (Bill One invoice receiving)"
    url: "https://bill-one.com/ap/plan/"
    accessedAt: "2026-10-07"
  - label: "Bill One: Partner program"
    url: "https://bill-one.com/partner-program/"
    accessedAt: "2026-10-07"
---

Sansan is a service for companies that lets everyone share who met whom, simply by scanning business cards. Today it calls itself a "business database" that holds not just cards but emails, meeting notes and company information. The same company runs "Bill One," which receives invoices on a customer's behalf and turns them into data, "Contract One" for contracts, and "Eight," a business card app for individuals. Like [SmartHR](/en/articles/smarthr) and [freee](/en/articles/freee), dissected on this site, it is SaaS that moves Japanese office work still tied to paper and manual entry into the cloud, but Sansan stands out for keeping the work of turning paper into data in-house.

## Service overview

Sansan, Inc. sells "Sansan" for sales teams, "Bill One" for accounting, "Contract One" for managing contracts and "Sansan Data Intelligence" for data quality management to companies, and offers the business card app "Eight" to individuals and companies. The company groups them as "AX services that change the way people work," AX standing for AI transformation.

:::fact
According to the company profile (as of 2026-10-07), Sansan, Inc. was incorporated on June 11, 2007, is headquartered at Shibuya Sakura Stage in Sakuragaoka-cho, Shibuya, Tokyo, is led by President and CEO Chikahiro Terada, and had 2,077 employees on a non-consolidated basis and 2,336 consolidated as of May 31, 2026. According to the earnings presentation for the fiscal year ended May 2026, "Sansan" launched in 2007; the company listed on TSE Mothers and launched "Bill One" in the fiscal year ended May 2020, then launched "Contract One" and moved to the TSE Prime Market in the fiscal year ended May 2022 (code 4443). The same presentation puts the share of revenue for the fiscal year ended May 2026 at 58% for "Sansan," 25% for "Bill One," 2% for "Contract One" and 13% for "Eight."
:::

:::fact
According to the same presentation, "Sansan" had 12,199 contracts at the end of May 2026 (up 14.0% year over year) and an average monthly churn rate of 0.55% over the last 12 months. The company says it has held the top revenue share in the corporate business card management market for 13 consecutive years (a January 2026 survey by Seed Planning), and that it enriches card data with information on more than 2.4 million companies and 200,000 executives. The Bill One product site (checked 2026-10-07) lists more than 5,000 paid contracts, about 268,000 companies participating in the "invoice network" that exchanges invoices through Bill One, and about ¥71 trillion a year in invoices exchanged on it (the average monthly amount over the 12 months to May 2026, annualized).
:::

:::pull
A quarter of revenue at a company that started with business cards now comes from invoices. Both are the same job: turning information that arrives on paper into data with AI and human hands.
:::

::scorecard

## UX analysis

At the center of Sansan's experience is not making users type. The company takes on the work of receiving, reading and checking paper, and hands users only data they can search.

- **The company even does the receiving.** According to the earnings presentation, Bill One receives invoices in any format on the customer's behalf and digitizes them with 99.9% accuracy (when conditions the company defines are met) by the end of the next business day. Customers no longer need staff to scan paper invoices, but because people check the results, the next business day is the standard for how quickly data arrives.
- **It also gathers contacts beyond card exchanges.** The same presentation says a feature that brings in information about people who joined Zoom or Microsoft Teams meetings, without exchanging cards, launched in beta in April 2026 with general release planned for July, and an "AI search" that collects and summarizes internal and external information was planned for September. The direction is to extend a record of contacts that started with business cards to meetings where no cards change hands.
- **Speed won back afterwards.** According to the official engineering blog (2026-09-09), "Sansan" cut screen response times in its PC version by about 40% over the past year. Using the person detail screen as an example, the post explains how the team found that checks of finely configurable department-level access rights ran against every user in the tenant rather than only the employees holding that person's cards, and rewrote the SQL to meet its speed targets across all tenants. Some customers have thousands to tens of thousands of users, it says.
- **Prices are hidden.** Neither "Sansan" nor Bill One publishes prices. According to the earnings presentation, "Sansan" layers three editions, Lite, Standard and Advanced, on a fixed fee based on headcount (or the number of contracted IDs), and Bill One charges an annual fee based on yearly transaction volume, each with separate onboarding fees. Bill One's pricing page says there are no extra charges based on the number of users or stored invoices. An internal purchase approval needs a sales rep's quote, which presumably makes the services harder to compare for smaller companies.

## Tech stack

::techstack

:::fact
The engineering recruiting site's "About our tech stack" page (as of April 2026) says Sansan picks the technology that suits each product and lets teams decide autonomously. It lists backend languages including C#, Go, Java, Kotlin, Ruby on Rails and TypeScript; databases including Amazon Aurora, BigQuery, Cloud Spanner, PostgreSQL and MySQL; and infrastructure including AWS, Azure, Cloudflare, Google Cloud, Kubernetes and Terraform. Its AI development tools are ChatGPT, Claude, CodeRabbit, Cursor, Devin and GitHub Copilot. The engineering blog shows how individual products are built. "Sansan" is a multi-tenant application on PostgreSQL 17 as of September 2026 (2026-09-09). Bill One is a Kotlin application on Ktor running on Google Cloud's Cloud Run, with asynchronous work handled by Pub/Sub and Cloud Tasks (2026-02-04). Eight has used AWS since its 2012 launch and moved its Ruby on Rails batch and asynchronous jobs from EC2 to ECS, SQS and EventBridge Scheduler (2025-12-20). Sansan Data Hub, for data integration, uses Azure SQL Database Hyperscale and Azure Cosmos DB (2024-08-30).
:::

:::fact
According to the official engineering blog (2026-03-18), Sansan turns business card images and invoice and contract PDFs into data through a "human-in-the-loop" process that combines automatic AI processing with verification and correction by people it calls operators. The Digitization division behind this develops and runs more than ten systems and outsources part of the work to partner companies in addition to its own operators. Card digitization produces a steady, heavy flow of work, while invoices bunch up at the start of each month with short deadlines, so people had to be shifted between systems. The division therefore built hydra, a platform that collects events for the start, completion and correctness check of each task from systems on AWS or Google Cloud into BigQuery. The near-real-time path through Pub/Sub BigQuery subscriptions can be aggregated within seconds, and the daily path through Cloud Storage and Cloud Workflows backfills the data, which is also used to calculate payments to partner companies. The earnings presentation puts the number of analog items digitized through the company's services at 270 million in the fiscal year ended May 2025, with a target of 500 million for the year ending May 2030. This site's own observation (2026-10-07) found jp.sansan.com and 8card.net served through Cloudflare in front of CloudFront and S3, bill-one.com returning CloudFront and S3, and the corporate site jp.corp-sansan.com returning Cloudflare and Kinsta cache headers.
:::

:::guess
The different clouds and languages per product appear to reflect choices made when each product was born. Eight, launched in 2012, on AWS and Rails; Bill One, started in 2020, on Google Cloud and Kotlin; data integration on Azure and C#: the combination is consistent with a policy of letting each product team choose rather than standardizing the whole company on one platform. The operation that turns paper into data, on the other hand, runs across products with the same people and systems, and hydra gathering work records from both AWS and Google Cloud into BigQuery is presumably meant to optimize this "human part" company-wide. Sansan's edge appears to lie less in any particular technology than in the scale of an operation that guarantees accuracy by combining AI reading with human checks.
:::

## Reselling "data" in the age of generative AI

:::fact
The earnings presentation for the fiscal year ended May 2026 opens its growth strategy by saying that "each company's own data is extremely important to get the most out of generative AI in business," and explains that its services let customers create and accumulate high-quality business data while working more efficiently. "Sansan" moved to new pricing that puts new features, including AI features, into the Standard edition. Bill One added "AI auto-matching" of invoice line items against delivery and inspection records (since November 2025), "AI auto-entry" that learns account and tax-rate decisions (since June 2026) and "auto-approval" of routine approvals under set conditions (planned for September 2026), and restructured its pricing into three editions. Contract One began offering a "legal AX solution" that includes an "MCP server" letting companies review contracts against their own standards based on past contract data, with a diagram showing connections to ChatGPT, Microsoft Copilot and Claude (noting that which general-purpose generative AI services it can support is still being tested).
:::

:::guess
The more generative AI learns to read text, the more the work of turning cards and invoices into data risks losing value on its own. Sansan argues the opposite: it appears to be reselling as value the error-free data that people have checked and accumulated across a company, and the ability to hand that data to outside AI through MCP. Putting AI features into the Standard edition rather than a premium one, and raising revenue per customer through upgrades to higher editions, can be read as an aim to grow contracts by expanding the ways data gets used, rather than charging extra for AI.
:::

## Business model

The business runs on recurring fees from companies that sign up for a year at a time. The company itself describes making profits on the mature "Sansan" and putting them toward the growth of Bill One and Contract One.

:::fact
According to the earnings summary and presentation (2026-07-13), revenue for the fiscal year ended May 2026 was ¥53.761 billion (up 24.4%), adjusted operating income ¥8.427 billion (up 137.0%, a 15.7% margin), operating income ¥8.185 billion and net income attributable to owners of the parent ¥6.778 billion, a record profit. ARR was ¥49.982 billion (up 20.2%). "Sansan" revenue was ¥31.089 billion (up 16.2%); monthly recurring revenue per contract fell 1.0%, but the number of contracts grew as the company won more small and mid-sized customers. Bill One revenue was ¥13.679 billion (up 39.7%) and ARR ¥14.782 billion (up 34.9%); paid contracts grew 31.9%, and its loss narrowed to ¥1.627 billion (an improvement of ¥3.723 billion). Eight revenue was ¥6.720 billion (up 33.0%), of which ¥6.274 billion came from business services. Advertising spending was ¥6.770 billion (up 32.6%). The presentation shows adjusted operating margins by service of 38.9% for "Sansan," 3.5% for Eight, −11.9% for Bill One and −184.9% for Contract One.
:::

:::fact
According to the same presentation, the company forecasts revenue of ¥63.706–65.319 billion (up 18.5–21.5%) and adjusted operating income of ¥12.741–14.696 billion (a 20.0–22.5% margin) for the fiscal year ending May 2027, expecting Bill One to be profitable for the full year. Its policy for the three years from the fiscal year ending May 2027 to May 2029 is a revenue CAGR of 16–20% and an adjusted operating margin of 25–30% in the year ending May 2029, aiming for 40% or more in the long run. It paid its first dividend for the fiscal year ended May 2026 (¥2.5 per share at year end) and bought back about ¥2 billion of its own shares between May 20 and June 18, 2026. The Bill One product site describes two partner programs: "referral partners," who only introduce customers, and "resale partners," who buy at wholesale prices and resell.
:::

:::guess
Sansan appears to make money by having "Sansan," with its 38.9% margin, fund the growth of loss-making Bill One and Contract One. Starting its first dividend and share buybacks in 2026, as Bill One's turn to profit came into view, and setting a 25–30% margin target for the medium term can be read as a signal that it has reached a stage where it can both invest in growth and return money to shareholders. At the same time, revenue per contract on the flagship "Sansan" is edging down, and the further it spreads among smaller companies, the smaller each contract becomes. Putting AI features into the Standard edition to encourage upgrades is presumably a way to push back against that pressure on unit prices with features.
:::

Sansan began as a tool for scanning business cards and, over 19 years, has become a company that turns information about every kind of transaction that arrives on paper into data with AI and human hands. A quarter of its revenue comes from invoices, and that invoice data reflects about ¥71 trillion a year in transactions. The clouds and languages differ product by product, but what they share is the unglamorous process of AI reading and people checking. Now that generative AI can read paper, whether Sansan can convince customers that the accurate data produced by that process is the real value will show in the numbers over the next three years.
