---
service: "RENOSY"
title: "A Property Company That Compares Itself to Amazon — Why RENOSY Talks About ¥200 Billion in Sales in 'Net' Terms"
description: "RENOSY is Japan's 'AI real-estate investment' service. Its operator GA technologies booked ¥211.6 billion in revenue in nine months, yet the figure it puts first is 'net revenue,' a gross-profit-based metric. We dissect why a company that buys properties and sells them to investors calls itself a 'marketplace' that turns its inventory in 16 days, using its earnings report, earnings presentation and corporate story, the official site, official news and the developer blog."
lead: "RENOSY lets salaried workers invest in real estate — buying a used studio condo, say, and renting it out — with every step from requesting a brochure to signing the loan handled online. Its operator GA technologies booked ¥211.6 billion in revenue in the first nine months of the fiscal year ending October 2026. Yet the company leads with ¥38.5 billion of 'net revenue' instead, and describes its business as a 'marketplace,' comparing itself to Amazon. Why does a company that buys and sells properties describe itself by how fast its inventory turns? We dissect it from the IR materials and the developer blog."
category: consumer-app
tags: [real-estate, marketplace, fintech, ruby-on-rails, snowflake]
publishedAt: "2026-09-28"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://www.renosy.com/"
# Affiliate link placeholder: the owner must join a RENOSY affiliate program via an ASP
# before enabling this block. Third-party ASP directories (e.g. affi-search.com, last updated
# 2022-11) list RENOSY on A8.net and afb; this was not confirmed on an official GA technologies
# or RENOSY page, and the reward conditions (e.g. a completed first consultation) must be read
# on the ASP after joining. Investment-property ads also carry extra rules, so check the
# program terms before linking from this article.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<renosy-affiliate-tracking-link>"
#   program: "RENOSY real-estate investment consultation (ASP)"
vendor: "GA technologies Co., Ltd."
origin: "JP"
heroTheme: "renosy"
scores: { product: 4.0, ux: 3.5, tech: 3.5, business: 4.0 }
techStack:
  - layer: "Data warehouse"
    name: "Snowflake"
    confidence: confirmed
    evidence: "GA technologies official news (2026-09-02): the Data Division, which started work in 2024, adopted a DWH as its analytics platform and began introducing technologies including Snowflake that year. A session abstract describes a \"company-wide VoC analytics platform\" that gathers customer feedback scattered across consultations, calls, chats and emails in Snowflake and analyzes it with LLMs, embedding models and Streamlit in Snowflake"
    evidenceUrl: "https://www.ga-tech.co.jp/news/5vc1yoh7r4p0c37/"
  - layer: "Data pipeline"
    name: "Dagster + dbt + Apache Iceberg (AWS Glue Catalog) on Amazon ECS Fargate"
    confidence: confirmed
    evidence: "Official developer blog (Zenn, 2026-06-15): Dagster was adopted as the data platform's orchestrator and runs mainly on Amazon ECS on Fargate. Data flows as \"external services and in-house products -> S3 -> Snowflake -> BI tool\"; data-lake data is turned into Iceberg tables that dbt and Snowflake read, with table metadata managed in AWS Glue Catalog"
    evidenceUrl: "https://zenn.dev/gatechnologies/articles/76b3f400c26d1a"
  - layer: "Machine-learning pipeline"
    name: "Amazon SageMaker Pipelines"
    confidence: confirmed
    evidence: "Official developer blog (Zenn, 2026-06-24): an ML pipeline built around SageMaker Pipelines uses data accumulated across real-estate tech services starting with RENOSY; inference data in Snowflake is handed over via S3, and monitoring uses AWS-native features centered on CloudWatch, with no third-party tools added"
    evidenceUrl: "https://zenn.dev/gatechnologies/articles/sagemaker-ml-pipeline"
  - layer: "Web application"
    name: "Ruby on Rails"
    confidence: likely
    evidence: "Our own observation (2026-09-28): the HTML of www.renosy.com carries a csrf-token meta tag and responses return x-runtime and x-request-id headers (matching Rails defaults). RENOSY Magazine issues a Rails-style session cookie named _renosy_magazine_cms_session. The official developer blog (2026-04) describes moving an in-house product's tests to RSpec while upgrading to Rails 8.0, without naming the product. According to the official developer blog (2026-05), the company exhibited at RubyKaigi 2026 as a Platinum sponsor, and according to official news it is a gold sponsor of Kaigi on Rails 2026"
  - layer: "CDN"
    name: "Amazon CloudFront + nginx"
    confidence: likely
    evidence: "Our own observation (2026-09-28): the www.renosy.com top page and RENOSY Magazine return server: nginx, via: CloudFront and x-amz-cf-pop: NRT20-P2, and some URLs are redirected by a CloudFront Functions response (x-cache: FunctionGeneratedResponse from cloudfront). We found no official statement"
  - layer: "Front-end monitoring"
    name: "Datadog RUM"
    confidence: likely
    evidence: "Our own observation (2026-09-28): the HTML of www.renosy.com loads the Datadog RUM browser SDK (datadog-rum.js v6). The official developer blog (2025-12) describes adopting Datadog RUM to measure the experience of post-login screens and linking it with APM, without naming the product"
  - layer: "On-site personalization"
    name: "KARTE"
    confidence: likely
    evidence: "Our own observation (2026-09-28): the HTML of www.renosy.com loads a KARTE tag (edge.js from cdn-edge.karte.io)"
  - layer: "UI styling"
    name: "Tailwind CSS"
    confidence: speculative
    evidence: "Our own observation (2026-09-28): the HTML of www.renosy.com is full of utility classes with arbitrary variants such as desktop:[&>div]:before:w-2. This matches Tailwind CSS syntax, but we found no official statement"
  - layer: "Business AI"
    name: "In-house AI (listing-sheet reading, rent prediction, consultation support)"
    confidence: confirmed
    evidence: "Official news (2026-03-31): technology including AI, such as automatically reading and digitizing property sales sheets, speeds up purchasing, and a rent-prediction tool and consultation-support AI give prospective investors personalized information"
    evidenceUrl: "https://www.ga-tech.co.jp/news/wherjxrzxv88n_r/"
  - layer: "Mortgage workflow"
    name: "MORTGAGE GATEWAY by RENOSY"
    confidence: confirmed
    evidence: "RENOSY official site, 'Contract flow': the sales contract proceeds on the RENOSY My Page, and the loan contract with the bank can be handled online through 'MORTGAGE GATEWAY by RENOSY,' a platform provided by group company RENOSY X Inc. (not supported by some lenders)"
    evidenceUrl: "https://www.renosy.com/investment/why_renosy/flow"
sources:
  - label: "GA technologies Co., Ltd.: Consolidated Financial Results for the Third Quarter of the Fiscal Year Ending October 2026 [IFRS] (2026-09-14, Japanese)"
    url: "https://www.release.tdnet.info/inbs/140120260914535676.pdf"
    accessedAt: "2026-09-28"
  - label: "GA technologies Co., Ltd.: Q3 FY2026 earnings presentation (2026-09-14, Japanese)"
    url: "https://ssl4.eir-parts.net/doc/3491/tdnet/2884649/00.pdf"
    accessedAt: "2026-09-28"
  - label: "GA technologies Co., Ltd.: Corporate Story (September 2026, Japanese)"
    url: "https://ssl4.eir-parts.net/doc/3491/ir_material_for_fiscal_ym/210705/00.pdf"
    accessedAt: "2026-09-28"
  - label: "GA technologies official news: Q3 FY2026 earnings materials (2026-09-14, Japanese)"
    url: "https://www.ga-tech.co.jp/news/0524ezmlf2shq7d/"
    accessedAt: "2026-09-28"
  - label: "GA technologies official news: RENOSY ranks No. 1 nationwide in sales of investment condos and apartments for the second year (2026-03-31, Japanese)"
    url: "https://www.ga-tech.co.jp/news/wherjxrzxv88n_r/"
    accessedAt: "2026-09-28"
  - label: "GA technologies official news: RENOSY evolves into an 'asset-building platform' (2026-06-30, Japanese)"
    url: "https://www.ga-tech.co.jp/news/s9u_k77tl28fjels/"
    accessedAt: "2026-09-28"
  - label: "GA technologies official news: RENOSY publishes its real-estate investment customer trend report for April–June 2026 (2026-08-05, Japanese)"
    url: "https://www.ga-tech.co.jp/news/ruojmgsy5i49a_9w/"
    accessedAt: "2026-09-28"
  - label: "RENOSY official site: top page (investment flow, first-consultation gift, review rating; Japanese)"
    url: "https://www.renosy.com/"
    accessedAt: "2026-09-28"
  - label: "RENOSY official site: Contract flow (Japanese)"
    url: "https://www.renosy.com/investment/why_renosy/flow"
    accessedAt: "2026-09-28"
  - label: "GA technologies official news: GA technologies data staff give two sessions at Snowflake World Tour Tokyo 2026 (2026-09-02, Japanese)"
    url: "https://www.ga-tech.co.jp/news/5vc1yoh7r4p0c37/"
    accessedAt: "2026-09-28"
  - label: "GA technologies official news: Gold sponsorship and booth at Kaigi on Rails 2026 (2026-09-04, Japanese)"
    url: "https://www.ga-tech.co.jp/news/ja17cw281bk4a3wp/"
    accessedAt: "2026-09-28"
  - label: "GA technologies developer blog (Zenn): Introducing Dagster to our data platform (2026-06-15, Japanese)"
    url: "https://zenn.dev/gatechnologies/articles/76b3f400c26d1a"
    accessedAt: "2026-09-28"
  - label: "GA technologies developer blog (Zenn): Building a scalable ML pipeline around SageMaker (2026-06-24, Japanese)"
    url: "https://zenn.dev/gatechnologies/articles/sagemaker-ml-pipeline"
    accessedAt: "2026-09-28"
  - label: "GA technologies developer blog (Zenn): Migrating 900 test files to RSpec in two months (2026-04-22, Japanese)"
    url: "https://zenn.dev/gatechnologies/articles/3694b4daf9ea6e"
    accessedAt: "2026-09-28"
  - label: "GA technologies developer blog (Zenn): GA technologies' first booth at RubyKaigi 2026 (2026-05-01, Japanese)"
    url: "https://zenn.dev/gatechnologies/articles/3ac3995ada18cc"
    accessedAt: "2026-09-28"
  - label: "GA technologies developer blog (Zenn): Measuring the post-login experience with Datadog RUM (2025-12-22, Japanese)"
    url: "https://zenn.dev/gatechnologies/articles/147acc3197651f"
    accessedAt: "2026-09-28"
---

A property company usually describes itself by its sales. GA technologies, which runs RENOSY, booked ¥211.6 billion in revenue in just the first nine months of the fiscal year ending October 2026. Yet what it puts at the top of its earnings materials is "net revenue," less than a fifth of that figure. And it explains its business as a "marketplace," placing itself next to Amazon. Why does a company that buys properties and sells them to investors describe itself by gross profit and turnover days instead of sales?

## Service overview

RENOSY is the "AI real-estate investment" service GA technologies has run since 2016. Individuals — typically salaried workers — buy mainly used studio units (the company calls them "STUDIO") and compact condos, as well as apartment buildings, detached houses and overseas property, and earn rent. One service covers the brochure request, consultation, application, sales contract, loan contract, rental management after purchase, and resale. The operator is listed on the Tokyo Stock Exchange Growth Market.

:::fact
According to the earnings report (2026-09-14), GA technologies' revenue for the first three quarters of the fiscal year ending October 2026 (November 2025 to July 2026) was ¥211.6 billion (up 24.8% year on year). Business profit, however, was ¥5.72 billion (down 3.6%), operating profit ¥5.39 billion (down 9.9%), and profit attributable to owners of the parent ¥2.73 billion (down 9.0%). "Net revenue," which the company discloses separately (gross profit of the RENOSY Marketplace business plus revenue of ITANDI and others), was ¥38.53 billion (up 24.2%). The full-year forecast was left unchanged at ¥323.0 billion in revenue, ¥55.9 billion in net revenue and ¥10.0 billion in business profit.
:::

:::fact
The segment information in the same report lists two reportable segments: the "RENOSY Marketplace business" and the "ITANDI business," which sells SaaS to real-estate companies. For the first three quarters, the RENOSY Marketplace business had revenue of ¥205.28 billion and segment profit of ¥10.30 billion, about 97% of consolidated revenue. Its description lists one-stop purchase, sale and management of domestic and overseas property, subscription-style management plans for owners, and the structuring, sale and management of real-estate funds.
:::

:::pull
A company that buys and sells property calls itself a "marketplace." The number it holds up is not sales, but the 16 days it takes inventory to turn back into cash.
:::

::scorecard

## UX analysis

RENOSY's UX aims to break the purchase of an investment condo — a purchase of tens of millions of yen — into steps close to online shopping. Yet a person in a consultation still sits at the moment of decision.

- **The entry point is a brochure request; the next step is a person.** According to the official "Contract flow" page, after a brochure request one of the company's "Asset Planners" calls or emails to schedule a consultation. Consultations are online by default and cover a proposal fitted to the customer's life plan, an explanation of the mechanism and the risks, proposed properties and management plans, and a cash-flow simulation. The top page advertises a gift of ¥50,000 in PayPay points for a first consultation (conditions and caps apply).
- **Contracts move through My Page and an online loan flow.** Applications are made online, the sales contract proceeds on the RENOSY My Page, and the bank loan can be handled through "MORTGAGE GATEWAY by RENOSY," provided by group company RENOSY X (some lenders do not support it). The official site says a customer can become an owner "in as little as one week," depending on timing and loan screening, and that management information appears in the app and My Page on the first day of the month after the contract.
- **After purchase, the app stays the front door.** My Page covers consultation schedules, contract procedures, management of the purchased property, and even tax-return support. For selling, the site says owners "can set their own price and list the property from their smartphone."
- **Reviews are put up front.** The top page shows an overall review rating of 4.3 (7,242 responses as of September 2026) and lists each review with the reviewer's age bracket, gender, income band and employer.
- **Eight in ten buyers already invest.** According to the customer trend report in official news (2026-08-05), 80% of customers who closed a deal in April–June 2026 had investment experience, the first quarter above 80%. By age, 40% were in their 40s and 26% in their 30s. By income, 26% earned ¥10–15 million and 27% ¥15–30 million. The earnings presentation says owners earning more than ¥10 million make up 50% of buyers over the past year.

## Tech stack

::techstack

:::fact
According to GA technologies official news (2026-09-02), its Data Division started in 2024 as a cross-company team, adopted a DWH as the analytics platform, and began introducing technologies including Snowflake that year. As a practical example drawn from businesses such as RENOSY, it cites a company-wide VoC analytics platform that gathers customer feedback scattered across consultations, calls, chats and emails in Snowflake and handles everything from extraction to visualization with LLMs, embedding models and Streamlit in Snowflake. The official developer blog (2026-06) describes the data flow as "external services and in-house products -> S3 -> Snowflake -> BI tool," with Dagster as the orchestrator (on Amazon ECS on Fargate), dbt for transformation, and Apache Iceberg as the data-lake table format (catalogued in AWS Glue). Machine learning centers on SageMaker Pipelines, with inference data in Snowflake handed over through S3 and monitoring built around CloudWatch without additional tools.
:::

:::fact
According to official news (2026-03-31), RENOSY speeds up purchasing with technology including AI, such as automatically reading and digitizing property sales sheets, and gives customers personalized information through a rent-prediction tool and consultation-support AI. The earnings presentation says the "property pipeline" (the last 12 months; used compact condos only), which adds up purchase offers from real-estate companies, AI valuation amounts and assets under management, has reached ¥5.0 trillion, and the corporate story puts the cumulative number of AI valuations at more than 48,000 (end of October 2025).
:::

:::guess
In our own observation, www.renosy.com is served by nginx behind CloudFront, and its response headers and HTML carry traces that match Ruby on Rails defaults. The company's developer blog has posts on upgrading to Rails 8.0 and moving to RSpec, and it sponsors RubyKaigi and Kaigi on Rails, so the core of RENOSY's web application appears to be built on Rails. We could not, however, find a primary source that states RENOSY's architecture officially. The center of gravity of its technology seems to be data rather than screens. Reading purchase offers, predicting rent, and collecting even consultation records in one DWH is presumably an investment lined up with the "turn inventory quickly" business described below.
:::

## Business model

In the company's own breakdown, RENOSY earns from three areas: "Marketplace," "Subscription" and "Asset Management." The first is the main act.

:::fact
The corporate story (September 2026) describes the traditional investment-property sales model as "a buy-and-sell model driven by sales staff" that "secures gross margin from price rises while the property is held in inventory," and contrasts RENOSY as "a platform model that instantly connects buyers and sellers" that "secures gross margin by accumulating deals through fast inventory turnover." The same document sets it beside Amazon's first-party business, explaining that both are marketplaces that hold inventory. By the company's count, "matching days" from listing to application are 4, the CCC (cash conversion cycle) is 16 days and inventory turns 22 times a year (fiscal year ending October 2025) — shorter than the average of the top 20 listed Japanese real-estate companies by sales that it compares against (CCC of 365 days) and the average of Opendoor and Offerpad (144 days).
:::

:::fact
According to the earnings presentation, in the third quarter alone (May–July 2026), net revenue of the domestic RENOSY Marketplace was ¥7.88 billion (up 10.4%), while its business profit fell to ¥2.39 billion from ¥2.53 billion a year earlier. The company cites TV commercials (about ¥500 million) for medium-term brand awareness, and says that this year it booked about ¥1.5 billion of advertising from the start of the year instead of concentrating it in the fourth quarter as usual. Subscription (rental management) contracts reached 40,905 (up 32%), cumulative RENOSY members 677,772 (up 16%), and deals closed over the last 12 months about 8,200 (up 874). The share of tenant turnovers in which rent was raised has stayed above 90%, it says.
:::

:::fact
Meanwhile, the statement of financial position in the earnings report shows inventories rising from ¥11.68 billion at the end of October 2025 to ¥25.19 billion at the end of July 2026, and current bonds and borrowings from ¥12.49 billion to ¥25.81 billion. In between, on June 30, 2026, the company completed making SPC Securities (a financial instruments business, among others) a wholly owned subsidiary, which also brought in its subsidiary SPC Asset Management, an asset-management business. Official news (2026-06-30) says this lets it offer products other than physical property, such as fractional real-estate products, and turn RENOSY into an "asset-building platform." The earnings presentation calls the roughly ¥9.7 billion year-on-year rise in inventories "a strategic and temporary increase" for this year's fourth quarter and for accelerating the fractional-ownership business after integrating the SPC Securities group, and expects it to subside from next year. The same page puts the CCC at the end of the third quarter at 26.3 days, about two days longer than 24.2 days a year earlier.
:::

:::guess
A company with more than ¥200 billion in sales puts "net revenue" in the headline presumably to bridge the gap between buy-and-sell accounting, which books the full property price as revenue, and its claim to be seen as a place where deals happen. The argument is that most of a property's price flows straight through, and that what reflects the business's strength is gross profit and the speed of turnover. From this viewpoint, the question is how to read the doubling of inventory at the quarter-end. If it is, as the company says, a "strategic and temporary" build-up that subsides from next year, the fast-turnover story holds. If holding properties to structure fractional products becomes a lasting phase, it can also be read as a challenge for a model built on turning inventory quickly. The third-quarter CCC has lengthened by only about two days year on year, and the CCC disclosed in the coming quarters is presumably where the answer will show. One more point: spending on consultation gifts and TV commercials to grow the membership looks in some ways closer to a sales company that closes deals in human consultations than to a marketplace brokered by AI. The company's work on consultation-support AI and AI-assisted property selection appears to be an investment in folding this "people sell" part into the speed of turnover.
:::

RENOSY sits between a company that "sells" property and a place that "connects" buyers and sellers. Its revenue swells with the size of its buy-and-sell business, while the company describes itself by gross profit and a 16-day turnover. Whether that claim holds up in the numbers will become clearer as the inventory build-up the company calls "temporary" does or does not subside from next year — and by where the CCC, 26.3 days at the end of the third quarter, lands.
