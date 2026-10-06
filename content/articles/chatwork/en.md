---
service: "Chatwork"
title: "1.004 Million Companies, 8.23 Million Registered IDs, 849,000 Paying IDs, ARPU of ¥734.5 Up Just 1.8% — and the +84% Is Happening Outside the Chat: Dissecting Chatwork, Whose Company Renamed Itself kubell and Turned Chat Into a Front Door for Outsourced Work"
description: "Chatwork, the Japanese business chat launched in 2011, reached 1.004 million companies, 8.231 million registered IDs and 849,000 paying IDs at the end of June 2026, and 97% of its paying users are small and medium-sized businesses. In 2024 its operator renamed itself from Chatwork Co., Ltd. to kubell Co., Ltd. and shifted its weight to Takushita, a BPaaS that takes on accounting and HR work through the chat. Revenue for the second quarter of the fiscal year ending December 2026 was ¥2.689 billion (up 17.1% year on year): the SaaS domain that includes Chatwork grew 5.0%, while the BPaaS domain grew 84.0%. Pricing runs from a Free plan that shows only the last 40 days of messages to Standard at ¥700 per user per month on an annual contract (before tax) and Professional at ¥1,200, with plans renamed in August 2026. Using the earnings presentation, the company introduction, the official pricing and sales-partner pages, the engineering blog kubell Creator's Note, GitHub and this site's own observations, the article dissects a platform where PHP, Scala and Go sit side by side, pricing that raised ARPU while paying IDs stalled, and a business being rebuilt so that chat becomes the intake window for outsourced work."
lead: "The SaaS domain that includes Chatwork now accounts for only 76% of kubell's revenue. From April to June 2026, that SaaS domain grew 5.0% year on year, while the BPaaS domain, which takes on work through the chat, grew 84.0%. The company that dropped the name Chatwork in 2024 has started using its 8.23 million-ID chat not as a product but as a window for taking on work. This article dissects, from public information alone, how that rebuild shows up in the price list, the technology and the earnings."
category: saas
tags: [business-chat, small-business, b2b, bpaas, scala, php, kubernetes, ai]
publishedAt: "2026-10-06"
updatedAt: "2026-10-06"
lastVerified: "2026-10-06"
serviceUrl: "https://go.chatwork.com/ja/"
# Affiliate link placeholder: the official site shows only a reseller program (distributors and
# sales partners at https://go.chatwork.com/ja/partner/, checked 2026-10-06), not a consumer
# affiliate program. A third-party affiliate directory reports a Chatwork paid-plan program on
# A8.net, which this site could not verify without an ASP account. If the owner joins one,
# copy the ad code as provided (url, impressionUrl and the material's exact text as label).
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://px.a8.net/<chatwork-material>"
#   program: "Chatwork"
vendor: "kubell Co., Ltd. (formerly Chatwork Co., Ltd.)"
origin: "JP"
heroTheme: "chatwork"
scores: { product: 4.0, ux: 4.0, tech: 4.0, business: 4.0 }
techStack:
  - layer: "Messaging core"
    name: "Scala + Akka + Apache Kafka + HBase (Falcon)"
    confidence: confirmed
    evidence: "The kubell Creator's Note post \"Chatwork's Scala products and the team behind them, part 1\" (2020-12-10) states that Falcon, the system that checks preconditions and then persists messages when they are posted or read, is built with HBase, Kafka, Akka, Akka HTTP, Akka Streams, Kafka Streams and Circe"
    evidenceUrl: "https://creators-note.chatwork.com/entry/2020/12/10/113000"
  - layer: "Surrounding Scala services"
    name: "Webhook (Aurora) / OAuth server (Aurora, ElastiCache, SQS) / Reaction (DynamoDB) / Search indexing (Amazon Elasticsearch Service)"
    confidence: confirmed
    evidence: "The same post lists Webhook, which delivers events to outside systems (Kafka, Amazon Aurora, Alpakka Kafka, ScalikeJDBC); an RFC 6749-compliant authorization server (Aurora, ElastiCache, SQS, S3); reaction persistence (DynamoDB); the message-search indexer Biryani (Kafka, Amazon Elasticsearch Service); and a link-preview service running a GraalVM native image on AWS Lambda"
    evidenceUrl: "https://creators-note.chatwork.com/entry/2020/12/10/113000"
  - layer: "Web application (legacy)"
    name: "PHP (legacy monolith)"
    confidence: confirmed
    evidence: "The kubell Creator's Note post \"Moving a legendary PHP system from EC2 to Kubernetes, part 3\" (2020-11-18) explains that the PHP system was moved from EC2 to Kubernetes and that the cluster then ran 12 applications, six in Scala and six in PHP. This site's own observation (2026-10-06) also found www.chatwork.com redirecting to /login.php"
    evidenceUrl: "https://creators-note.chatwork.com/entry/2020/11/18/140000"
  - layer: "Runtime platform"
    name: "Amazon EKS (ap-northeast-1, multi-tenant single cluster, Blue/Green upgrades) + Cluster Autoscaler"
    confidence: confirmed
    evidence: "The 2020-11-18 post states that test, staging and production share one multi-tenant EKS cluster and that the cluster is upgraded about every three months by building a new cluster and moving over (Blue/Green). The 2023-12-09 post says the cluster is built with eksctl with nodes defined per availability zone in ap-northeast-1, and that Karpenter was tested but not adopted in favor of Cluster Autoscaler with balloon pods holding spare capacity"
    evidenceUrl: "https://creators-note.chatwork.com/entry/2023/12/09/090000"
  - layer: "API boundary (2026)"
    name: "Facade API (GraphQL server in Go) + go-arch-lint"
    confidence: confirmed
    evidence: "The kubell Creator's Note post \"Structuring the transition from monolith to microservices in software\" (2026-06-29) states that Chatwork is moving step by step from a long-accumulated monolith to domain-specific microservices, that the Facade API at the entrance is a GraphQL server written in Go, that domain logic to be extracted later lives in its microservices/ directory, and that go-arch-lint mechanically enforces the direction of dependencies"
    evidenceUrl: "https://creators-note.chatwork.com/entry/2026/06/29/160816"
  - layer: "Entry points for AI clients"
    name: "Chatwork MCP Server (TypeScript, MIT) + Chatwork API (RAML)"
    confidence: confirmed
    evidence: "GitHub's chatwork/chatwork-mcp-server (as of 2026-10-06, via the API) describes itself as an MCP server for operating Chatwork from AI, is mostly TypeScript under MIT with 48 stars, was created in March 2025 and was pushed on October 2, 2026. chatwork/api is the official repository holding the public API definition in RAML (84 stars)"
    evidenceUrl: "https://github.com/chatwork/chatwork-mcp-server"
  - layer: "Delivery"
    name: "Fastly (go.chatwork.com) / Amazon CloudFront + nginx (www.chatwork.com)"
    confidence: likely
    evidence: "This site's own observation (2026-10-06) found go.chatwork.com returning server: nginx, via: 1.1 varnish, and the x-served-by: cache-nrt-… and x-timer headers characteristic of Fastly. The app host www.chatwork.com returned server: nginx and via: CloudFront (x-amz-cf-pop: NRT57)"
sources:
  - label: "kubell Co., Ltd.: Earnings presentation, Q2 of FY ending December 2026 (2026-08-14)"
    url: "https://contents.xj-storage.jp/xcontents/AS04681/c5c169ad/7c90/4228/b376/4749c88551d5/140120260814520629.pdf"
    accessedAt: "2026-10-06"
  - label: "kubell Co., Ltd.: Summary of financial results, Q2 (interim) of FY ending December 2026 (2026-08-14)"
    url: "https://contents.xj-storage.jp/xcontents/AS04681/cd3eb060/4277/4202/97c6/c1179a9d3a9c/140120260814520626.pdf"
    accessedAt: "2026-10-06"
  - label: "kubell Co., Ltd.: Company overview and medium-term plan"
    url: "https://www.kubell.com/document/ir/kubell_introduction.pdf"
    accessedAt: "2026-10-06"
  - label: "Chatwork: Pricing"
    url: "https://go.chatwork.com/ja/price/"
    accessedAt: "2026-10-06"
  - label: "Chatwork: Sales partners"
    url: "https://go.chatwork.com/ja/partner/"
    accessedAt: "2026-10-06"
  - label: "kubell Creator's Note: Chatwork's Scala products and the team behind them, part 1 (2020-12-10)"
    url: "https://creators-note.chatwork.com/entry/2020/12/10/113000"
    accessedAt: "2026-10-06"
  - label: "kubell Creator's Note: Moving a legendary PHP system from EC2 to Kubernetes, part 3 (2020-11-18)"
    url: "https://creators-note.chatwork.com/entry/2020/11/18/140000"
    accessedAt: "2026-10-06"
  - label: "kubell Creator's Note: How Chatwork runs Kubernetes, 2023 edition (2023-12-09)"
    url: "https://creators-note.chatwork.com/entry/2023/12/09/090000"
    accessedAt: "2026-10-06"
  - label: "kubell Creator's Note: Structuring the transition from monolith to microservices in software (2026-06-29)"
    url: "https://creators-note.chatwork.com/entry/2026/06/29/160816"
    accessedAt: "2026-10-06"
  - label: "GitHub: chatwork/chatwork-mcp-server"
    url: "https://github.com/chatwork/chatwork-mcp-server"
    accessedAt: "2026-10-06"
  - label: "GitHub: chatwork/api"
    url: "https://github.com/chatwork/api"
    accessedAt: "2026-10-06"
---

Chatwork is a Japanese business chat built to move work communication from email to chat. Group chats, tasks, files and video calls share one screen, and you can talk with people outside your company. Like [Cybozu kintone](/en/articles/cybozu-kintone) and [SmartHR](/en/articles/smarthr), it has worked its way into the middle of small and medium-sized businesses' daily work, yet in 2024 its operator took the word Chatwork out of its company name. The chat is now both a product and a window for taking on work.

## Service overview

Chatwork launched in 2011, and its operator listed on the TSE Mothers market (now Growth) in 2019. In 2024 the company renamed itself kubell Co., Ltd. and made Takushita, a BPaaS that handles accounting, HR, administration and other work through the chat, its new pillar.

:::fact
According to kubell's company introduction (as of 2026-10-06), the company was founded on November 11, 2004, its Representative Director and CEO is Masaki Yamamoto, and the group had 824 employees at the end of June 2026. Its history lists the release of Chatwork in 2011, ¥1.8 billion raised in total in 2015–2016, a listing on TSE Mothers in 2019, the release of Chatwork Assistant (now Takushita) in 2023, and the change of name to kubell in 2024. The document says Chatwork ranked first in Japan by number of users in a Nielsen survey of July 2025 (covering 44 services chosen by the company, including Microsoft Teams, Slack and LINE WORKS), and that 97% of its paying users are small and medium-sized businesses.
:::

:::fact
According to the earnings presentation for the second quarter of the fiscal year ending December 2026 (released August 14, 2026), at the end of June 2026 kubell group services were used by 1.004 million companies (up 7.3% year on year), Chatwork had 8.231 million registered IDs (up 6.2%) and 849,000 paying IDs (up 3.3%), and average revenue per paying ID (ARPU) was ¥734.5 (up 1.8%). The paying-ID churn rate rose to 1.17%, which the company attributes to phishing scams. Company-wide ARR (annual recurring revenue) was ¥10.23 billion (up 17.3%), of which the SaaS domain was ¥7.92 billion (up 6.4%) and the BPaaS domain ¥2.31 billion (up 80.9%).
:::

:::pull
8.23 million registered IDs, 849,000 paying. The chat is growing in single digits; what is growing is the side that takes on work behind the chat.
:::

::scorecard

## UX analysis

Chatwork's experience has been aimed at letting companies that are not IT-savvy start talking with outside people right away. In 2026 that same entrance doubles as a door to AI and outsourced work.

- **The free plan is limited by hiding the past.** According to the official pricing page (as of 2026-10-06), the Free plan can be used indefinitely, but you can view only messages from the last 40 days, an organization is capped at 100 users and 10 GB of storage, each user can have 20 outside contacts, video calls are one-to-one, and ads are shown. Paid plans make message history, users and contacts unlimited, allow calls of up to 14 people and remove ads.
- **Everyone is billed together.** The same page says upgrading from Free to a paid plan applies to every user in the organization; you cannot upgrade only some users. Paid plans come with a one-month free trial, but once upgraded you cannot go back to Free.
- **AI inside everyday chat.** According to the earnings presentation, in 2026 Chatwork added AI summaries of unread messages, AI drafting, AI labor and employment news that collects and delivers updates on legal and regulatory changes, AI explanation and analysis, and AI document creation. On the pricing page these AI features are included from Standard upward.
- **Reachable from outside AI too.** The official Chatwork MCP Server (TypeScript, MIT) published on GitHub lets AI clients operate Chatwork.
- **The weak spot is more nudges beyond the chat.** The more the chat screen doubles as an entrance to Takushita, attendance tracking, HR evaluation, invoice receipt and other services, the more users who just want a messaging tool may feel there are more promotions. A note on the pricing page says notices about the company's own and group services are excluded from ad removal.

## Tech stack

::techstack

:::fact
According to kubell's engineering blog, kubell Creator's Note, Chatwork's core was long a PHP monolith, and messaging has been rebuilt in Scala. A post of December 10, 2020 lists Falcon, which handles posting and reading messages (HBase, Kafka, Akka); Webhook, which delivers events to outside systems (Kafka, Amazon Aurora); an OAuth authorization server (Aurora, ElastiCache, SQS, S3); reaction persistence (DynamoDB); message-search indexing (Kafka, Amazon Elasticsearch Service); and a link-preview service running a GraalVM native image on AWS Lambda. A post of November 18, 2020 explains that the PHP system was moved from EC2 to Kubernetes, that test, staging and production share one multi-tenant EKS cluster upgraded about every three months by building a new cluster and moving over (Blue/Green), and that the cluster then ran six Scala and six PHP applications. A post of December 9, 2023 explains that the team tested Karpenter but did not adopt it, instead keeping spare node capacity with Cluster Autoscaler and low-priority balloon pods.
:::

:::fact
According to a post of June 29, 2026, Chatwork is in the middle of moving step by step "from a long-accumulated monolith to domain-specific microservices," and the Facade API at the entrance is a GraphQL server written in Go. Because the deploy pipelines, authentication, monitoring, SLOs and on-call rotations that microservices need are not yet in place, logic for domains to be extracted later is kept in a microservices/ directory inside the Facade API, with go-arch-lint mechanically enforcing the direction of dependencies. This site's own observation (2026-10-06) found the marketing site go.chatwork.com returning nginx and varnish with Fastly's x-served-by and x-timer headers, and the app host www.chatwork.com returning nginx and CloudFront and redirecting to /login.php.
:::

:::guess
Chatwork's platform appears to have evolved by not discarding the PHP monolith all at once: the parts that need volume and reliability, such as messaging, moved to Scala and Kafka first, and in 2026 the rest is being carved up inside a Go GraphQL boundary. PHP, Scala and Go sitting side by side reads as the strata of each migration stage left in place. Keeping domains "parked" inside the Facade API until the microservice operating setup is ready is presumably a choice that prioritizes not adding operational load, much like the 2020 decision to use a single cluster so that a small SRE team could support many applications.
:::

## Business model

There are now two pillars of revenue: the SaaS domain centered on Chatwork subscriptions, and the BPaaS domain that takes on work through the chat.

:::fact
According to the official pricing page (as of 2026-10-06, before tax), Standard costs ¥700 per user per month on an annual contract or ¥840 on a monthly contract, and Professional costs ¥1,200 or ¥1,440 respectively, with a minimum of five users. Annual contracts are shown as "two months free." According to the "history of price and plan changes" in the earnings presentation, in August 2026 the Business plan was renamed Standard and the Enterprise plan renamed Professional. Before that, in August 2022 the personal paid plan was discontinued; in October 2022 the Free plan's limit on group chats was removed and a viewing limit introduced; in July 2023 new prices were applied to all users, including existing ones; and in August 2024 the Free plan's limit on viewable messages was removed, storage increased and a limit on contacts added.
:::

:::fact
According to the same presentation, consolidated revenue for the second quarter of the fiscal year ending December 2026 (April–June) was ¥2.689 billion (up 17.1% year on year), with the SaaS domain at ¥2.044 billion (up 5.0%) and the BPaaS domain at ¥645 million (up 84.0%). EBITDA was ¥469 million (up 60.6%) and operating profit ¥276 million. Recurring (stock) revenue makes up 95% of sales. The company revised its full-year forecast to revenue of ¥10.768–10.958 billion (up 13–15%) and EBITDA of ¥1.5–1.7 billion; for the fiscal year ended December 2025, revenue was ¥9.529 billion and EBITDA ¥1.371 billion. The BPaaS domain includes Takushita, attendance management, HR evaluation, invoice receipt and mail receipt services, plus the business of atena, which joined the group in April 2026. The official sales-partner page lists SB C&S, Daiwabo Information System, TD SYNNEX and Networld as distributors, along with more than 40 sales partners.
:::

:::guess
With paying IDs growing only 3.3% year on year, Chatwork appears to have raised its unit price step by step: a price increase for all users (July 2023), the viewing limit on the Free plan, billing every user together, and concentrating AI features in paid plans. Still, ARPU grew only 1.8%, which suggests limited room for the chat alone to drive large revenue growth. kubell's description of "promoting BPaaS cross-selling from 1 million companies' worth of customer touchpoints" reads as a decision to reposition the chat from a ¥700-per-ID product to a window for taking orders for small businesses' work. If requests come in through chat, are processed behind the scenes with AI and SaaS, and finished by people, the revenue per company is on a different scale from the chat fee.
:::

:::guess
That rebuild is a different path from continuing to sell software, as [SmartHR](/en/articles/smarthr) and [kintone](/en/articles/cybozu-kintone) do. Outsourced work takes people and tends to earn lower margins than software, but for small businesses it has the clarity of "you don't have to learn how to use it." Spinning off the AI agent business for labor and social security attorneys appears to be a move toward replacing the procedures accumulated through outsourcing with AI and lowering the share of human labor. Whether the touchpoints gathered through chat can be channeled into outsourced work whose margins AI has raised will presumably decide the next few years for the company that changed its name.
:::

A chat built in 2011 to replace email has made its way into a million companies in fifteen years. The company took that name out of its own and started using the chat as a window for taking on work. Just as the platform has stacked Scala on PHP and a Go boundary on top, the business is stacking a new layer on the chat rather than discarding it.
