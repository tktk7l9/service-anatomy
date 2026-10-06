---
service: "Zapier"
title: "A $5 Billion Valuation on $1.3 Million Raised in 2012, 9,000+ Apps, and One AI Call Costing 1 to 5 Tasks — Dissecting Zapier, the Company That Counts Everything in \"Tasks\""
description: "Zapier, the automation service that came out of Y Combinator in 2012, connects more than 9,000 apps, serves 3.4 million businesses, and employs 800+ people across 40 countries. Pricing runs from Free at 100 tasks a month through Professional at $19.99 a month (annual, 750 tasks), Team at $69, and Enterprise. Since June 15, 2026, AI steps cost 1, 3 or 5 tasks depending on the model tier and an MCP tool call costs 2, so every new feature is sold in the same unit. Using the official pricing page, help center, press page, engineering blog, GitHub and this site's own observations, the article dissects how the task currency is built, the Python, Django, RabbitMQ, Kafka and Go foundation, a sales model without a public affiliate program, and the Next Gen Zaps of September 2026."
lead: "Zapier's pricing page says how many tasks each step costs. An app action is 1 task, a Filter or Formatter is 0, an AI step is 1 on a standard model, 3 on an advanced one and 5 on a premium one, and an MCP tool call from an outside AI client is 2. A company that raised only $1.3 million in 2012 and was valued at $5 billion in 2021 has not added a new price tag for every new feature; it has re-counted each one in the same currency. The currency is the task. This article dissects how that currency is made and what it carries, using public information alone."
category: saas
tags: [automation, no-code, ai, mcp, python, django, kafka, remote-work]
publishedAt: "2026-10-06"
updatedAt: "2026-10-06"
lastVerified: "2026-10-06"
serviceUrl: "https://zapier.com/"
# Affiliate link placeholder: Zapier has no public affiliate program as of 2026-10-06.
# Zapier staff wrote in the community on 2025-01-08 that "Zapier does not currently have an
# affiliate program"; referral rewards exist only inside the Solution Partner Program
# (https://zapier.com/l/solution-partner, consultants and agencies) and an invitation-only
# Ambassador/Affiliate program run on PartnerStack (terms posted 2025-01-17 at
# https://zapier.com/legal/ambassador-affiliate-terms, rates stated only inside the portal).
# Leave this block commented out until the owner is accepted into one of those programs.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<zapier-partnerstack-referral-link>"
#   program: "Zapier Ambassador & Affiliate Program"
vendor: "Zapier, Inc."
origin: "US"
heroTheme: "zapier"
scores: { product: 4.5, ux: 4.0, tech: 4.0, business: 4.0 }
techStack:
  - layer: "Backend language and framework"
    name: "Python / Django / Celery"
    confidence: confirmed
    evidence: "The official blog (2012-01-27, co-founder Bryan Helmig) states \"Python/Django on the backend and JS/Backbone on the front.\" The 2016-03-02 post \"Automating billions of tasks\" says \"Python powers a large majority of our backend. Django is the framework of choice\" and that Celery is a massive part of the distributed workflow engine. The 2022-02-03 KEDA post also notes that the workers written in Python do a lot of blocking I/O"
    evidenceUrl: "https://zapier.com/blog/automating-billions-of-tasks/"
  - layer: "Workflow execution queue"
    name: "RabbitMQ + Kubernetes (KEDA autoscaling)"
    confidence: confirmed
    evidence: "The official blog (2022-02-03) states \"RabbitMQ is at the heart of Zap processing at Zapier. We enqueue messages to RabbitMQ for each step in a Zap. These messages get consumed by our backend workers, which run on Kubernetes,\" and that KEDA was adopted to scale workers on queue length"
    evidenceUrl: "https://zapier.com/blog/keda-at-zapier/"
  - layer: "Event platform"
    name: "Apache Kafka (managed on AWS) + Go (events API) + SQLite (local outbox)"
    confidence: confirmed
    evidence: "The official blog (2026-03-30) states \"We run a really large managed Kafka cluster in AWS,\" that the events API service \"is built in Go and deployed using Kubernetes\" and validates events in Avro against a schema registry, and describes a local SQLite outbox that keeps accepting events during a Kafka outage. The 2025-10-31 post describes a gRPC sidecar that cut Kafka producer connections by about 10x"
    evidenceUrl: "https://zapier.com/blog/lessons-from-using-outbox-pattern-at-scale/"
  - layer: "Data stores and search"
    name: "PostgreSQL / Elasticsearch / Amazon S3"
    confidence: confirmed
    evidence: "The official blog (2021-10-11, the architecture behind Zap History pages) states that behind the Django web application sit a PostgreSQL database and an Elasticsearch cluster, that Zap run data lives in Amazon S3, and that Zapier also has a Kafka cluster"
    evidenceUrl: "https://zapier.com/blog/the-architecture-behind-zap-history-pages/"
  - layer: "Frontend and public site"
    name: "Next.js + Apollo (BFF on Kubernetes) / Vercel + Amazon CloudFront (zapier.com) / Contentful"
    confidence: confirmed
    evidence: "The official blog (2021-10-11) states \"We currently deploy our Next.js service to our Kubernetes cluster\" and that Apollo Server with Next.js API routes forms a backend for frontend. This site's own observation (2026-10-06) found zapier.com responding with server: Vercel and x-nextjs-prerender: 1, a via header naming CloudFront, and a Content-Security-Policy whose frame-ancestors includes app.contentful.com. /blog/ was served by CloudFront and help.zapier.com sat behind Cloudflare"
    evidenceUrl: "https://zapier.com/blog/the-architecture-behind-zap-history-pages/"
  - layer: "Cloud infrastructure"
    name: "AWS (US regions, EC2 / VPC / RDS / Lambda)"
    confidence: confirmed
    evidence: "The official Security & Compliance page states \"Enterprise-grade hosting on AWS in the United States.\" The 2016-03-02 official blog says \"EC2 and VPC are the centerpiece,\" that RDS is used where possible, and that partner and user code runs on AWS Lambda; a July 2017 addendum says Kubernetes was being rolled out for container orchestration"
    evidenceUrl: "https://zapier.com/security-compliance"
  - layer: "Integration developer kit"
    name: "Zapier Platform CLI / Core / Schema (JavaScript, npm)"
    confidence: confirmed
    evidence: "GitHub's zapier/zapier-platform (as of 2026-10-06) is mostly JavaScript (about 2.27 MB, with about 143 KB of TypeScript), has 556 stars, was created in June 2019, was last pushed on 2026-10-05, and is described as \"The toolkit for you to build an integration on Zapier.\" The monorepo holds the cli, core, schema and legacy-scripting-runner packages"
    evidenceUrl: "https://github.com/zapier/zapier-platform"
  - layer: "Entry points for AI clients"
    name: "Zapier MCP (hosted, 2 tasks per tool call) + Zapier SDK (beta) + llms.txt"
    confidence: confirmed
    evidence: "The official MCP page states \"Zapier MCP is included in every Zapier plan. Each tool call uses two tasks from your existing task quota—the same bucket your Zaps use\" and that the agent searches 9,000+ apps and 66,000+ triggers and actions. The pricing page FAQ says the SDK is free while in beta. This site's own observation (2026-10-06) found zapier.com's link header listing the actions.zapier.com OpenAPI document (rel=service-desc), docs.zapier.com/sdk/reference and /llms.txt"
    evidenceUrl: "https://zapier.com/mcp"
sources:
  - label: "Zapier: Pricing"
    url: "https://zapier.com/pricing"
    accessedAt: "2026-10-06"
  - label: "Zapier: Task usage rates (tasks per step)"
    url: "https://zapier.com/pricing/rates"
    accessedAt: "2026-10-06"
  - label: "Zapier Help Center: How is task usage measured in Zapier? (updated 2026-08-21)"
    url: "https://help.zapier.com/hc/en-us/articles/8496196837261-How-is-task-usage-measured-in-Zapier"
    accessedAt: "2026-10-06"
  - label: "Zapier Help Center: AI by Zapier: new model-based pricing starting June 15, 2026 (updated 2026-08-12)"
    url: "https://help.zapier.com/hc/en-us/articles/46597632373389-AI-by-Zapier-new-model-based-pricing-starting-June-15-2026"
    accessedAt: "2026-10-06"
  - label: "Zapier Help Center: How pay-per-task billing works in Zapier (updated 2026-08-15)"
    url: "https://help.zapier.com/hc/en-us/articles/15279018245901-How-pay-per-task-billing-works-in-Zapier"
    accessedAt: "2026-10-06"
  - label: "Zapier: Press (company figures)"
    url: "https://zapier.com/press"
    accessedAt: "2026-10-06"
  - label: "Zapier: About"
    url: "https://zapier.com/about"
    accessedAt: "2026-10-06"
  - label: "Zapier blog: Zippity Zappity, Zapier Launches Publicly (2012-06-20)"
    url: "https://zapier.com/blog/zippity-zappity-zapier-launches-publicly/"
    accessedAt: "2026-10-06"
  - label: "Zapier blog: Zapier's Tech Stack (2012-01-27)"
    url: "https://zapier.com/blog/zapier-tech-stack/"
    accessedAt: "2026-10-06"
  - label: "Zapier blog: Automating billions of tasks (2016-03-02)"
    url: "https://zapier.com/blog/automating-billions-of-tasks/"
    accessedAt: "2026-10-06"
  - label: "Zapier blog: The architecture behind Zap History pages (2021-10-11)"
    url: "https://zapier.com/blog/the-architecture-behind-zap-history-pages/"
    accessedAt: "2026-10-06"
  - label: "Zapier blog: How Zapier uses KEDA to scale its backend workers (2022-02-03)"
    url: "https://zapier.com/blog/keda-at-zapier/"
    accessedAt: "2026-10-06"
  - label: "Zapier blog: Reducing Kafka connections by 10x with a sidecar pattern (2025-10-31)"
    url: "https://zapier.com/blog/reducing-kafka-connections-sidecar/"
    accessedAt: "2026-10-06"
  - label: "Zapier blog: Lessons from using the outbox pattern at scale (2026-03-30)"
    url: "https://zapier.com/blog/lessons-from-using-outbox-pattern-at-scale/"
    accessedAt: "2026-10-06"
  - label: "Zapier: Zapier MCP"
    url: "https://zapier.com/mcp"
    accessedAt: "2026-10-06"
  - label: "Zapier: Zapier Functions (wind-down notice for 2026-09-01)"
    url: "https://zapier.com/functions"
    accessedAt: "2026-10-06"
  - label: "Zapier Community: The next generation of Zaps is here (2026-09-23)"
    url: "https://community.zapier.com/product-updates/the-next-generation-of-zaps-is-here-53832"
    accessedAt: "2026-10-06"
  - label: "Zapier: Security & Compliance"
    url: "https://zapier.com/security-compliance"
    accessedAt: "2026-10-06"
  - label: "Zapier: Ambassador & Affiliate Program Terms (2025-01-17)"
    url: "https://zapier.com/legal/ambassador-affiliate-terms"
    accessedAt: "2026-10-06"
  - label: "Zapier: Solution Partner Program"
    url: "https://zapier.com/l/solution-partner"
    accessedAt: "2026-10-06"
  - label: "Zapier Community: Does Zapier have an affiliate program? (staff reply 2025-01-08)"
    url: "https://community.zapier.com/show-tell-5/does-zapier-have-an-affiliate-program-13950"
    accessedAt: "2026-10-06"
  - label: "GitHub: zapier/zapier-platform"
    url: "https://github.com/zapier/zapier-platform"
    accessedAt: "2026-10-06"
---

Zapier connects apps so that "when this happens, do that" runs by itself. It shares a market with [Make](/en/articles/make) and [n8n](/en/articles/n8n), and it is the oldest player with the most apps connected. In the fourteen years since its 2012 launch the company has not raised again, and its valuation reached $5 billion. In all that time the price list has never let go of one unit: the task.

## Service overview

According to the official blog, Zapier launched publicly on June 20, 2012 and was part of Y Combinator's Summer 2012 batch. Wade Foster, who wrote the launch post, is co-founder and CEO; Bryan Helmig, who wrote the January 2012 tech-stack post, is co-founder and CTO. The affiliate terms name the legal entity as Zapier, Inc., a Delaware corporation, and the press page says the team has been fully remote from day one and is distributed across 40 countries.

:::fact
According to the official press page (as of 2026-10-06), Zapier connects more than 9,000 apps, powers over 3.4 million businesses, and has 800+ people across 40 countries. Users have created more than 25 million automated workflows, called Zaps. The same page states: "Zapier raised $1.3 million in 2012. Without any further funding, we were valued at $5 billion in 2021." The About page lists 81 billion tasks automated and 69% of the Fortune 1000 as users, and says "We've been working remotely since day one."
:::

:::fact
According to the official pricing page (as of 2026-10-06, annual billing shown), Free is $0 a month for 100 tasks a month, two-step Zaps, and unlimited Zaps, Tables and Forms. Professional starts at $19.99 a month (the 750-task tier) with multi-step Zaps, unlimited premium apps, webhooks, and email and live chat support (live chat from the 2,000-task tier). Team starts at $69 a month with 25 users, shared Zaps and folders, shared app connections, SAML SSO, and priority support. Enterprise is priced on request with unlimited users, advanced admin permissions, annual task limits, observability, and a technical account manager. Paid task tiers run from 750 to 2 million in 17 steps, and yearly billing is shown as "Save 33%." Polling time is 15 minutes on Free, 2 minutes on Professional, and 1 minute on Team and Enterprise. Included Code by Zapier runtime is 1 second on Free, 30 seconds on Professional and Team, and 2 minutes on Enterprise. A new account starts a 14-day Professional trial with no credit card required.
:::

:::pull
$1.3 million in 2012, no further funding, a $5 billion valuation in 2021. The company wrote those numbers itself, on its press page.
:::

::scorecard

## UX analysis

Zapier's experience is organized around having one unit to count. However many apps there are, and however many new entry points such as AI and MCP appear, the only unit the user sees is the task.

- **Only successful actions count as tasks**. According to the pricing page FAQ, triggers do not count, checking (polling) for new data is never charged, and failed actions do not count. Steps using the built-in tools, such as Tables, Forms, Filter, Formatter, Paths, Delay, Looping, Sub-Zap, Digest, Zapier Manager and Storage, cost 0 tasks. Where [Make](/en/articles/make) counts every module except routers and error handlers as a credit, Zapier counts only the moments when something was done to an app.
- **AI uses the same currency, with a price by tier**. According to the official "Task usage rates" page, an AI by Zapier step costs 1 task on standard models, 3 on advanced models and 5 on premium models, and each tool call the model makes adds the same amount. Connecting your own model provider costs 1 task. The help center says this model-based pricing started on June 15, 2026 and that new steps default to the advanced tier (3x). An MCP tool call from an outside AI client is 2 tasks, Lead Router is 5 tasks per lead, and a Code by Zapier step is 1 task per run, with 1 more task per 30 seconds beyond the plan's allowance.
- **Going over the limit does not stop you, but 3x does**. According to the help center (updated 2026-08-15), reaching the plan's task limit switches the account to pay-per-task billing at a rate that depends on the plan and billing cycle, and Zaps stop once usage reaches "3 times your plan's task limit." The Free plan has no pay-per-task option.
- **More products, same price list**. The pricing page says Zap workflows, AI steps, code, MCP and the SDK all draw from the same task allocation, with no separate budgets by product. Interfaces has been renamed "Forms," and both Forms and Tables are included in every plan. Meanwhile Zapier Functions, the hosted code product, is "winding down on September 1, 2026" and being consolidated into Code by Zapier.
- **Toward workflows that repair themselves**. According to a community post of 2026-09-23, Next Gen Zaps were unveiled at ZapConnect 2026: lists can be processed with no 500-item loop cap, and a monitoring agent watches runs, diagnoses failures, and applies or suggests a fix ("self-healing workflows"). They are available on paid plans only.

The flip side of a single currency is that the price of every new feature is set by how many tasks it costs. That new AI steps default to the 3x tier, or that one MCP call is 2 tasks, is not visible from the tier table alone. Keeping one unit has moved the job of reading the conversion table onto the user.

## Tech stack

::techstack

:::fact
Following the official blog over time, the core has stayed Python and Django for fourteen years. The post of January 27, 2012 says "Python/Django on the backend and JS/Backbone on the front" with "Linode, nginx, Gunicorn, MySQL, Redis and RabbitMQ." The post of March 2, 2016, "Automating billions of tasks," says "Python powers a large majority of our backend. Django is the framework of choice," that Celery is a massive part of the distributed workflow engine, that "EC2 and VPC are the centerpiece," and that partner and user code runs on AWS Lambda (a July 2017 addendum says Kubernetes was being rolled out for container orchestration and that async languages such as Go were being considered where appropriate). The post of October 11, 2021 describes the Zap History UI as a Next.js service deployed to Kubernetes with Apollo Server and Next.js API routes as a backend for frontend, and a Django application in front of PostgreSQL, Elasticsearch, Amazon S3 and Kafka. The post of February 3, 2022 says "RabbitMQ is at the heart of Zap processing at Zapier. We enqueue messages to RabbitMQ for each step in a Zap," consumed by workers on Kubernetes, and that KEDA was adopted to scale on queue length.
:::

:::fact
According to the official blog of October 31, 2025, Zapier moved Kafka producer connections into a per-pod gRPC sidecar, cutting peak connections cluster-wide by about 10x and broker heap usage at peak by about 70 percentage points. According to the post of March 30, 2026, the events API service is built in Go, deployed on Kubernetes, and sends Avro events to "a really large managed Kafka cluster in AWS." To handle producer latency spikes during Kafka upgrades and security updates, and to remove Kafka as a single point of failure, the team put a SQLite database on an EBS-backed volume as a local outbox so that events keep being accepted even during a complete Kafka outage.
:::

:::fact
This site's own observation (2026-10-06) found zapier.com responding with server: Vercel and x-nextjs-prerender: 1, a via header naming CloudFront, and a Content-Security-Policy whose frame-ancestors includes app.contentful.com. The link header lists the actions.zapier.com OpenAPI document (rel=service-desc), docs.zapier.com/sdk/reference (rel=service-doc) and /llms.txt (rel=describedby). /blog/ was served from CloudFront and help.zapier.com from behind Cloudflare. GitHub's zapier/zapier-platform is mostly JavaScript, has 556 stars, was last pushed on 2026-10-05, and holds the CLI, Core and Schema packages for building integrations in one monorepo. The official Security & Compliance page lists annual SOC 2 Type II and SOC 3 audits, hosting on AWS in the United States, TLS 1.2+ and AES-256. The official blog (2025-10-09) states plainly: "No, Zapier isn't HIPAA compliant," and that it does not sign a Business Associate Agreement.
:::

:::guess
Zapier's platform appears to have kept its 2012 Django monolith and decomposed the edges around it. Zap execution on RabbitMQ with Python workers, events on Kafka with Go, UI as Next.js backends for frontend, and the public site on Vercel with Contentful read as an evolution that adds queues and boundaries rather than languages. That the 2025 and 2026 engineering posts concentrate on Kafka connections and the outbox is presumably because features such as AI steps and MCP calls generate more events behind each task, so the reliability of the event platform is now the reliability of billing. Declaring an OpenAPI document and llms.txt in zapier.com's link header appears intended to let AI agents discover the API through the same front door as human visitors.
:::

## Business model

Revenue comes from a monthly fee set by the task tier plus pay-per-task charges above it. However many products there are, billing collapses to how many tasks were used.

:::fact
According to the official pricing page (as of 2026-10-06), Professional starts at $19.99 a month (annual) on the 750-task tier and the cost per task falls as the tier rises. The page says: "Pick any task tier, and if you reach your limit, you'll be switched to pay-as-you-go unless you turn it off or move up to a higher tier." Yearly billing saves 33%, and non-profits get 15% off any paid plan excluding pay-per-task charges. The Free plan's 100 tasks have no pay-per-task option and simply stop at the limit. Zapier MCP is included in every plan at 2 tasks per tool call, and the SDK is free while in beta. According to the help center, the pay-per-task ceiling is 3 times the plan's task limit, after which Zaps pause until the next usage period.
:::

:::fact
As of 2026-10-06, Zapier has no public affiliate program that anyone can join. In the official community, a staff member replied on 2025-01-08 that "Zapier does not currently have an affiliate program" and that a referral benefit exists for partners in the Experts program. The official Solution Partner Program page (the rebranded Zapier Experts Program) says the program for consultants and agencies includes "a referral benefit, rewarding partners with commissions for referring net-new customers to Zapier." Separately, Ambassador & Affiliate Program terms dated January 17, 2025 cover social media creators and affiliates aged 18 or over "who have been invited to apply or who have been approved," paid through a referral link on the zapier.partnerstack.com portal "a certain percentage of the total cost of the Customer's subscription plan(s)" for "a certain period of time, as set forth in the Partner Portal." The rate and period are not stated in the terms; add-on charges and taxes are excluded, and rewards are calculated monthly and paid electronically within 30 days of month end.
:::

:::guess
Making the task a single currency appears to let Zapier price new features by conversion rate rather than by changing the tiers. Defaulting AI steps to the 3x tier and charging 2 tasks per MCP call raises usage inside the existing tiers and moves customers up a tier or into pay-per-task. Where [n8n](/en/articles/n8n) puts "one execution, steps not counted" in its headline and [Make](/en/articles/make) counts every module as a credit, Zapier counts only app actions, makes the built-in tools free to reduce the friction of adding steps, and weights AI and outside calls more heavily. Reaching a $5 billion valuation without raising again, and saying so on the press page, suggests the revenue has been built on this staircase of tiers and overage. Having no public affiliate program, and limiting referral rewards to consultants and invited creators, is presumably because the 9,000 app partners and the 3.4 million-business customer base do the acquiring, so broad referral fees are not needed.
:::

:::guess
In 2026 Zapier folded Functions into Code by Zapier, renamed Interfaces back to "Forms," and led with "self-healing" Next Gen Zaps. Fewer product names and narrower entry points for people are moving in parallel with more entry points for AI agents (MCP, SDK, llms.txt). Both appear to be preparation for a shift from people building Zaps to AI consuming tasks, and the further that shift goes, the heavier each task becomes and the more billing grows within the same tier.
:::

A company written in Django in 2012, grown on $1.3 million, and now connecting 9,000 apps did not change the unit on its invoice when the AI era arrived. It changed the exchange rate. One AI call is 1, 3 or 5; one call from outside is 2. The consistency of counting everything in tasks shifts the work of decoding the price list onto the user while protecting the company's currency.
