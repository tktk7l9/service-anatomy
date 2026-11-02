---
service: "PostHog"
title: "How PostHog Makes Money: Per-Product Usage Pricing Matched to the Cheapest Competitor, an MIT Repo With 7,466 Commits in One Month, and $15 Pull Requests — PostHog's Pricing, Architecture and Business Model Explained"
description: "How PostHog pricing works: a $0 base fee, no per-seat charges, and separate usage-based billing for each product, with monthly free tiers of 1 million analytics events and 5,000 session recordings and per-unit prices that fall with volume. Its public handbook says it matches the cheapest competitor for each product and makes the money back by selling more products; in 2024 it cut prices in a way it expected to shrink product analytics revenue by about 30%. After a $70M Series D led by Stripe at a $920M valuation and a $75M Series E at $1.4B in 2025, it now sells itself as a platform for \"self-driving products\" whose agents open pull requests from production data. This analysis draws on the handbook, the pricing page, the architecture docs, the GitHub API and this site's own observations."
lead: "PostHog's handbook spells out how the company sets its prices: \"roughly match the pricing of the cheapest big competitor\" in established markets, and \"make it up by selling other products.\" The December 2024 entry of its timeline records the result: \"people show up for one product and end up using four.\" This article dissects how a company that lines up dozens of analytics tools, each at the lowest price, makes money, and why it has now started selling pull requests at $15 each."
category: dev-tool
tags: [product-analytics, session-replay, feature-flags, open-source, clickhouse, usage-based-pricing, ai-agent, y-combinator]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
serviceUrl: "https://posthog.com/"
# Affiliate link placeholder: PostHog has no public affiliate or referral program (checked
# 2026-11-02: posthog.com/partners and posthog.com/referrals return 404, and the pricing page
# lists only startup, Y Combinator, nonprofit and annual discounts). Leave this block commented
# out unless the owner finds a program. Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<posthog-referral-link>"
#   program: "PostHog"
vendor: "PostHog Inc."
origin: "US"
heroTheme: "posthog"
scores: { product: 4.5, ux: 4, tech: 4.5, business: 4.5 }
techStack:
  - layer: "Web app and API"
    name: "Django (Python)"
    confidence: confirmed
    evidence: "The official docs page \"PostHog's architecture\" states \"Django serves the UI and REST API for users.\" On GitHub, PostHog/posthog (fetched via the API on 2026-11-02) has Python as its main language (about 257 MB), with about 170 MB of TypeScript and about 30 MB of Rust. In this site's observation (2026-11-02), responses from us.posthog.com carried a server-timing header with django, pg and ch entries"
    evidenceUrl: "https://posthog.com/docs/how-posthog-works"
  - layer: "High-throughput intake"
    name: "Rust services (capture, feature flags, replay capture)"
    confidence: confirmed
    evidence: "The official docs page \"PostHog's architecture\" describes \"High-throughput services for event capture, feature flag evaluation, and session replay ingestion\" written in Rust. The ingestion docs call the capture service \"a Rust HTTP server\""
    evidenceUrl: "https://posthog.com/docs/how-posthog-works"
  - layer: "Message bus"
    name: "Kafka / WarpStream"
    confidence: confirmed
    evidence: "The official docs page \"PostHog's architecture\" calls Kafka the \"Central message bus connecting ingestion to storage\" and labels it \"Kafka / WarpStream\" in the infrastructure diagram. The ClickHouse docs say data is not inserted directly into ClickHouse but pulled from Kafka, which \"makes our ingestion pipeline more resilient towards outages\""
    evidenceUrl: "https://posthog.com/docs/how-posthog-works"
  - layer: "Event storage and queries"
    name: "ClickHouse (sharded, ReplicatedReplacingMergeTree, self-managed on EC2)"
    confidence: confirmed
    evidence: "The official docs page \"ClickHouse\" describes the flow kafka_events (Kafka table engine) → events_mv (materialized view) → writable_events (Distributed, sharded by sipHash64(distinct_id)) → sharded_events (ReplicatedReplacingMergeTree). The infrastructure diagram in the architecture docs shows a \"ClickHouse cluster (self-managed EC2)\" with two replicas per shard and ZooKeeper"
    evidenceUrl: "https://posthog.com/docs/how-posthog-works/clickhouse"
  - layer: "Persons, settings and cache"
    name: "PostgreSQL (Aurora) + PgBouncer + Redis / Valkey"
    confidence: confirmed
    evidence: "The infrastructure diagram in the official docs page \"PostHog's architecture\" shows \"Aurora PostgreSQL,\" \"PgBouncer\" and \"Redis / Valkey.\" The ClickHouse docs state \"The source of truth for person info and person to distinct_id mappings is in PostgreSQL, but to speed up queries we replicate it to ClickHouse\""
    evidenceUrl: "https://posthog.com/docs/how-posthog-works"
  - layer: "Background jobs and CDP"
    name: "Celery + Temporal + Dagster / CDP worker (Node.js)"
    confidence: confirmed
    evidence: "The official docs page \"PostHog's architecture\" lists background workers as \"Celery (short tasks), Temporal (reliable workflows), and Dagster (scheduled data pipelines)\" and the CDP worker as Node.js. The ingestion docs explain that the CDP ingestion worker runs transformations, person processing, event processing, the write to ClickHouse, and destinations, in that order"
    evidenceUrl: "https://posthog.com/docs/how-posthog-works/ingestion-pipeline"
  - layer: "Session replay"
    name: "rrweb + S3 blob storage + ClickHouse (AggregatingMergeTree)"
    confidence: confirmed
    evidence: "The official docs page \"Replay ingestion\" states that rrweb collects \"snapshot data\" in the browser, a dedicated Rust HTTP server receives it, the recordings go to blob storage (S3), and aggregated session information goes to the session_replay_events table in ClickHouse (AggregatingMergeTree). Because snapshots exceed Kafka's maximum message size, replay has its own capture service and ingestion infrastructure"
    evidenceUrl: "https://posthog.com/docs/how-posthog-works/recordings-ingestion"
  - layer: "Cloud and regions"
    name: "AWS EKS (us-east-1 Virginia / eu-central-1 Frankfurt)"
    confidence: confirmed
    evidence: "The official docs page \"PostHog's architecture\" states \"On PostHog Cloud, the application services run in an EKS (Kubernetes) cluster on AWS, while the data stores are managed separately.\" The handbook's Security page says customers can host data in the EU (eu-central-1 in Germany) or the US (us-east-1 in Virginia). There is no region in Japan"
    evidenceUrl: "https://posthog.com/handbook/company/security"
  - layer: "Front of the stack"
    name: "Envoy (app) / Cloudflare (SDK assets)"
    confidence: likely
    evidence: "In this site's observation (2026-11-02), us.posthog.com and eu.posthog.com returned server: envoy with a 302 redirect to /login, and the event endpoint us.i.posthog.com also returned server: envoy. The SDK file us-assets.i.posthog.com/static/array.js returned server: cloudflare and cf-cache-status: HIT"
  - layer: "Public website"
    name: "Gatsby (PostHog/posthog.com) on Vercel"
    confidence: likely
    evidence: "The package.json of PostHog/posthog.com on GitHub (main language TypeScript) lists gatsby 4.25.9 and react ^18.2.0. In this site's observation (2026-11-02), posthog.com/pricing returned server: Vercel and x-vercel-cache: HIT, and the HTML was about 1.5 MB (content-length 1,538,040). PostHog does not state officially which build of which repository Vercel serves"
    evidenceUrl: "https://github.com/PostHog/posthog.com"
  - layer: "Billing"
    name: "Stripe (billing portal)"
    confidence: confirmed
    evidence: "The official docs page \"Billing common questions\" says that \"Manage card details and view past invoices\" in the billing settings takes you to Stripe, where you can update your card and billing information and see your invoice history"
    evidenceUrl: "https://posthog.com/docs/billing/common-questions"
sources:
  - label: "PostHog: Pricing"
    url: "https://posthog.com/pricing"
    accessedAt: "2026-11-02"
  - label: "PostHog handbook: How we got here (timeline)"
    url: "https://posthog.com/handbook/story"
    accessedAt: "2026-11-02"
  - label: "PostHog handbook: How we make money"
    url: "https://posthog.com/handbook/how-we-make-money"
    accessedAt: "2026-11-02"
  - label: "PostHog handbook: Pricing principles"
    url: "https://posthog.com/handbook/engineering/feature-pricing"
    accessedAt: "2026-11-02"
  - label: "PostHog handbook: Contract rules"
    url: "https://posthog.com/handbook/growth/sales/contract-rules"
    accessedAt: "2026-11-02"
  - label: "PostHog handbook: How we get users"
    url: "https://posthog.com/handbook/how-we-get-users"
    accessedAt: "2026-11-02"
  - label: "PostHog handbook: Small teams"
    url: "https://posthog.com/handbook/company/small-teams"
    accessedAt: "2026-11-02"
  - label: "PostHog handbook: Compensation"
    url: "https://posthog.com/handbook/people/compensation"
    accessedAt: "2026-11-02"
  - label: "PostHog handbook: Security"
    url: "https://posthog.com/handbook/company/security"
    accessedAt: "2026-11-02"
  - label: "PostHog blog: PostHog raises a series D (and a small C) (2025-06-09)"
    url: "https://posthog.com/blog/series-d"
    accessedAt: "2026-11-02"
  - label: "PostHog blog: \"E\"xciting news (2025-09-29)"
    url: "https://posthog.com/blog/series-e"
    accessedAt: "2026-11-02"
  - label: "PostHog blog: We've decided to make less money [Part 1] (2024-07-23)"
    url: "https://posthog.com/blog/session-replay-pricing"
    accessedAt: "2026-11-02"
  - label: "PostHog blog: We've decided to make less money [Part 2] (2024-08-01)"
    url: "https://posthog.com/blog/analytics-pricing"
    accessedAt: "2026-11-02"
  - label: "PostHog blog: Sunsetting Kubernetes support for PostHog (2023-02-08)"
    url: "https://posthog.com/blog/sunsetting-helm-support-posthog"
    accessedAt: "2026-11-02"
  - label: "PostHog docs: PostHog's architecture"
    url: "https://posthog.com/docs/how-posthog-works"
    accessedAt: "2026-11-02"
  - label: "PostHog docs: Ingestion pipeline"
    url: "https://posthog.com/docs/how-posthog-works/ingestion-pipeline"
    accessedAt: "2026-11-02"
  - label: "PostHog docs: ClickHouse"
    url: "https://posthog.com/docs/how-posthog-works/clickhouse"
    accessedAt: "2026-11-02"
  - label: "PostHog docs: Replay ingestion"
    url: "https://posthog.com/docs/how-posthog-works/recordings-ingestion"
    accessedAt: "2026-11-02"
  - label: "PostHog docs: Self-host PostHog"
    url: "https://posthog.com/docs/self-host"
    accessedAt: "2026-11-02"
  - label: "PostHog docs: Disclaimer for open-source self-hosted PostHog"
    url: "https://posthog.com/docs/self-host/open-source/disclaimer"
    accessedAt: "2026-11-02"
  - label: "PostHog docs: Billing limits and alerts"
    url: "https://posthog.com/docs/billing/limits-alerts"
    accessedAt: "2026-11-02"
  - label: "PostHog docs: Billing common questions"
    url: "https://posthog.com/docs/billing/common-questions"
    accessedAt: "2026-11-02"
  - label: "PostHog docs: Data storage"
    url: "https://posthog.com/docs/privacy/data-storage"
    accessedAt: "2026-11-02"
  - label: "PostHog: Terms"
    url: "https://posthog.com/terms"
    accessedAt: "2026-11-02"
  - label: "PostHog: llms.txt"
    url: "https://posthog.com/llms.txt"
    accessedAt: "2026-11-02"
  - label: "GitHub: PostHog/posthog (LICENSE, ee/LICENSE, commit history)"
    url: "https://github.com/PostHog/posthog"
    accessedAt: "2026-11-02"
  - label: "GitHub: PostHog/posthog-foss"
    url: "https://github.com/PostHog/posthog-foss"
    accessedAt: "2026-11-02"
  - label: "GitHub: PostHog/posthog.com"
    url: "https://github.com/PostHog/posthog.com"
    accessedAt: "2026-11-02"
---

PostHog started as a tool for recording and analyzing what people do in websites and apps. Today a single account gives you session replay, feature flags, A/B testing, error tracking, surveys, logs, external data sources and AI observability as well; the pricing page alone lists 14 products and 8 add-ons. Every product has a monthly free tier, and beyond it each product is billed separately by usage, at per-unit prices that fall as volume grows. There is no base fee and no charge per seat. That shape is not an accident: it follows from a policy written in the company's handbook, "match the cheapest for each individual product" and make the money back on the other products.

## Service overview

According to "How we got here," the timeline in PostHog's public handbook, James and Tim founded PostHog on January 23, 2020 (their surnames, Hawkins and Glaser, appear in the bylines of the official blog; the GitHub repository PostHog/posthog was also created on January 23, 2020). They had been trying startups together since August 2019, their first idea, helping engineers manage technical debt, did not work out, and PostHog was their sixth idea. They joined Y Combinator's W20 batch, launched on Hacker News four weeks after they started writing code, saw more than 300 deployments within a couple of days, and passed 1,500 GitHub stars two weeks later. The original motivation was developers' frustration with SaaS analytics tools: "We don't want to send all our user data to third parties," "We want full underlying data access," and the tools "don't give you choice and control over pricing."

:::fact
According to the handbook timeline (as of 2026-11-02), PostHog raised a $3.025M seed round in April 2020, a $9M Series A led by GV in December 2020 (bringing total funding to $12M), and a $15M Series B led by Y Combinator in June 2021. An official blog post of June 9, 2025 announced a $70M Series D led by [Stripe](/en/articles/stripe) at a $920M valuation, with YC, GV and Formus Capital participating. The same post explains that PostHog had also raised a Series C with relatively little primary capital (around $10M), to let its earliest employees sell shares and to increase founder control, and that during the Series D any employee could sell up to 20% of their vested shares. An official blog post of September 29, 2025 announced a $75M Series E at $1.4B, led by Peak XV Partners. The timeline files this under October 2025 and puts total funding since 2020 at about $194M and headcount at about 140. The entry for early 2026 puts headcount at about 200 and calls PostHog Desktop "probably our biggest launch yet."
:::

The timeline is candid about the business numbers as well. In 2022 revenue grew 6x with a CAC payback period under two months. In 2023 revenue quadrupled while net headcount rose by only three people. In April 2024, "54% of the first Y Combinator batch this year adopted PostHog." In October 2024 PostHog passed 100,000 customers, paying or free, and more than a quarter of a million users, with about 65 people, about 9 products, and revenue "in the low $10s of millions of ARR." In December 2024 it was cashflow positive, with about 80 people and about 12 products. The handbook page "How we get users" says, as of 2026-11-02, "Over 500,000 teams have signed up to PostHog."

:::fact
According to the official pricing page (as of 2026-11-02), there are only two plans. Free needs no credit card and gives a monthly free allowance on every product, 1 project, 1 year of data retention and community support. Paid is "pay-as-you-go" with a "$0/mo base price": you get the same free tier every month and pay only for usage above it, with 6 projects, 7 years of retention and email support. "There are no per-seat charges. Your whole team can use PostHog." The free tiers are 1 million events a month for product analytics, 5,000 recordings for session replay, 1 million requests for feature flags and Experiments, 1,500 survey responses, 100,000 exceptions for error tracking, 100,000 events for AI observability, 10 GB of logs and 10,000 emails. Above that, unit prices fall with volume: product analytics costs $0.00005 per event from 1 million to 2 million events and $0.000009 above 250 million; session replay costs $0.005 per recording from 5,001 to 15,000 and $0.0015 above 500,000. All prices are in US dollars and, as the page states, exclude taxes.
:::

:::pull
"People show up for one product and end up using four." This line from the December 2024 entry of the timeline explains why PostHog's price list is cut so finely by product.
:::

::scorecard

## UX analysis

PostHog's UX shows less in its screens than in how its pricing feels. You start free, use a single product, set your own ceiling and pay without talking to sales, and each step of that path rests on a written policy in the handbook.

- **The first bill starts at a fraction of a cent per unit**. The handbook page "How we make money" says that once a user likes the product, PostHog does not want to make expansion a big decision, for example "if we suddenly charged a large recurring price per month"; "Instead, we charge a tiny fraction of a cent for each extra event they send." By the pricing table, 10 million anonymous events a month cost $324.40: the first million free, the next million $50, and the remaining 8 million $274.40 (this site's calculation; the official blog post of August 1, 2024 gives the same example as "$324 per month").
- **Recording who sent an event raises the price**. The pricing page lists "Identified events," events tied to a person profile, as a separate add-on to product analytics with its own tiers ($0.000198 per event from 1 million to 2 million). If all of the same 10 million events are identified, the add-on adds $755.60 and the total becomes $1,080 a month (this site's calculation). The August 1, 2024 blog post explains that anonymous events became up to 80% cheaper because identifying users means "a bunch of processing to create, update, or merge person profiles" stored in Postgres, "one of the most complex and expensive steps in our ingestion pipeline," while anonymous events can "rely on our cheaper, faster ClickHouse tables."
- **Set a limit and the overflow is discarded**. According to the "Billing limits" docs, you can set a dollar limit for each product, and once it is reached PostHog stops ingesting and processing your data: "if you exceed the billing limit you set, your additional data is lost forever." The organization owner gets alert emails at 80% and 100% of the limit and of the free allowance. Logs custom retention ($0.05 per GB-month) cannot be capped. The same setting that prevents surprise bills is also the one that can lose data.
- **You can work out the price yourself**. The pricing page publishes every tier and the annual discount schedule: 20% off for annual credit purchases of $25,000 to $59,999, 40% for $500,000 to $999,999, plus 3% for a 2-year commitment and 5% for a 3-year commitment. The handbook's "Contract rules" says "We don't offer discounts to customers paying monthly, irrespective of commitment," and describes margin-negative deals as "very rare (~1 per year)."
- **An entrance for AI agents sits next to the one for people**. posthog.com/llms.txt says every docs page is "available as raw Markdown by appending `.md` to any URL," and tells AI coding assistants to "Use the PostHog wizard," `npx @posthog/wizard@latest`. The same file notes that session replay is "Enabled by default with `posthog-js` - no extra code needed." In this site's observation (2026-11-02), posthog.com's robots.txt disallowed only URLs ending in .md for Googlebot, Bingbot, DuckDuckBot and Yeti. The Markdown versions appear to be meant for agents and kept out of search results.

For users in Japan, data can live in only two places, AWS in the US (Virginia) or the EU (Frankfurt); there is no Japanese region. Prices are in US dollars excluding tax, the terms make taxes the customer's responsibility, and they are governed by California law with exclusive venue in the courts of San Francisco County. Billing details and invoices are managed in Stripe's portal.

## Tech stack

::techstack

:::fact
According to the official docs page "PostHog's architecture" (as of 2026-11-02), PostHog's main systems are Django, which serves the UI and REST API; Rust microservices for event capture, feature flag evaluation and replay ingestion; Kafka, which connects the two; background workers on Celery, Temporal and Dagster; and the CDP (Node.js), which processes events on ingestion and exports them to destinations. On PostHog Cloud the application services run in an EKS (Kubernetes) cluster on AWS, with the data stores managed separately. The infrastructure diagram shows a ClickHouse cluster on self-managed EC2 (two replicas per shard, plus ZooKeeper), Aurora PostgreSQL behind PgBouncer, Redis / Valkey, S3 for recordings and exports, and "Kafka / WarpStream."
:::

:::fact
According to the official docs page "ClickHouse," events are not written into ClickHouse directly. The materialized view events_mv pulls them from kafka_events (Kafka table engine), writable_events (Distributed engine) picks a shard by hashing distinct_id with sipHash64, and the rows land in sharded_events (ReplicatedReplacingMergeTree). Person data has its source of truth in PostgreSQL and is replicated to ClickHouse to speed up queries; in sharded setups the person tables are not sharded but replicated onto each node "to avoid JOINs over the network." According to the ingestion docs, when a single distinct ID in a project exceeds "roughly 5,000 events per minute sustained," the Rust capture service reroutes its events to an overflow pipeline and skips person processing for them. Nothing is dropped, the API still returns a normal 200, and an ingestion warning is logged. Sending events with `$process_person_profile` set to false enables "personless mode," which skips the PostgreSQL lookup.
:::

:::fact
According to the official docs page "Replay ingestion," session replay uses rrweb to collect "snapshot data" in the browser, which a dedicated Rust HTTP server receives. Because snapshots are often larger than Kafka's maximum message size, replay has its own capture service and ingestion infrastructure; it batches sessions to disk and periodically flushes them to S3 to write fewer files and lower operating cost. Metadata for the UI goes to the session_replay_events table in ClickHouse (AggregatingMergeTree), and the docs say this stores "at least a hundred times less data per row" than the original infrastructure. An official blog post of July 23, 2024 cited the optimized pipeline and infrastructure when it cut the price of 25,000 recordings a month from $430 to $85. Under today's pricing table, 25,000 recordings still cost $85: 5,000 free, 10,000 for $50 and 10,000 for $35 (this site's calculation).
:::

:::fact
On GitHub, PostHog/posthog (fetched via the API on 2026-11-02) has Python as its main language, 40,594 stars, 3,577 forks, 5,205 open issues and pull requests combined, and master as its default branch. From October 1 to 31, 2026, master received 7,466 commits (counted by this site from the API's pagination). The LICENSE says that content under the "ee/" directory is licensed under ee/LICENSE and everything else under the "MIT Expat" license; ee/LICENSE requires a valid PostHog Enterprise license for production use (copying and modifying for development and testing is allowed). PostHog/posthog-foss, a read-only mirror "with all proprietary code removed," is MIT-licensed and synced automatically.
:::

:::fact
According to the official docs page "Self-host PostHog," self-hosting is offered free under the MIT license as a Docker Compose deployment, sized for a VM with 4 vCPUs, 16 GB of RAM and more than 30 GB of storage. PostHog does not publish CVEs because "PostHog doesn't have versions": every change, security fixes included, ships continuously from master to PostHog Cloud and to the latest Docker image. The disclaimer describes self-hosting as "made for hobbyists or hosting PostHog in weird and wonderful ways (like in your basement)," notes that because everything runs on a single machine it is "unlikely to scale past a couple 100ks events without significant effort," and offers neither commercial support nor help recovering from data loss. All paid-plan features are Cloud-only. An official blog post of February 8, 2023 by co-founder and CTO Tim Glaser said about 3.5% of users ran PostHog on Kubernetes and that the small infrastructure team was spending an outsized amount of time supporting them; PostHog stopped selling paid self-hosted deployments and ended regular updates to its Helm chart after May 31, 2023.
:::

:::guess
This architecture appears to map almost one-to-one onto the units in the price list. Taking an event in through Rust, queuing it in Kafka and streaming it into ClickHouse is cheap. Tying it to a person adds PostgreSQL reads and writes, which is why "Identified events" are an add-on. Recordings are too large for Kafka and need their own intake and S3, which is why the unit is a recording. Flag evaluations are answered by a Rust service, which is why the unit is a request. The handbook says each product should "have a path to pay for itself" and that PostHog welcomes "this pressure to do things more efficiently and get the costs down over time." Lowering cost by changing the architecture and passing the saving on as a price cut is what actually happened, at least for replay and analytics in 2024.
:::

:::guess
In contrast with [Neon](/en/articles/neon), whose public repository has seen roughly one commit a month since the summer of 2025, PostHog's public master takes more than 7,000 commits a month. Still, open source here seems to mean "you can read the same code and try it at small scale" rather than "you can run it yourself at scale." Paid features are Cloud-only, self-hosting tops out at a few hundred thousand events, and the enterprise code sits in ee/ under a separate license. A very high degree of openness and a commercial model that is Cloud-only appear to coexist inside the same company.
:::

## Business model

Revenue comes from per-product usage billing, flat-fee "platform packages," and annual credit purchases. Each is designed to increase the number of products a customer uses rather than to maximize the profit on any one of them.

:::fact
The handbook page "How we make money" opens with "We make money from those that have it and like our products. We don't make money from those that don't," and says to "Match the cheapest for each individual product. We can make it up by selling other products to the customer over time." The handbook's "Pricing principles" spells this out: in established markets PostHog should "roughly match the pricing of the cheapest big competitor" that is "making actual revenue at significant scale," not the prices of random startups or new products. Every product is priced separately, and events that exist only because of another product, such as the `$feature_flag_called` events sent when a flag is evaluated, are not charged. Extra users in an organization are free because they grow word of mouth, and PostHog AI is charged "close to cost" even though it is expensive to provide. Price rises go through a yearly pricing evaluation and come with plenty of notice (e.g. 60 days). Grandfathering is limited to a transition period of about three months for self-serve paying customers, and "Nobody gets legacy pricing forever."
:::

:::fact
According to the official pricing page (as of 2026-11-02), the flat-fee extras are three platform packages: Boost at $250 a month (unlimited projects, white labeling, a HIPAA BAA, SSO enforcement and more), Scale at $750 a month (priority support, SAML and more), and Enterprise at $2,000 a month (RBAC, dedicated support, training and more). The "Pricing principles" page reserves flat fees for functionality whose cost "doesn't scale with usage." Discounts include $50,000 in credits for 12 months for startups less than 2 years old that have raised less than $5M, $50,000 in credits per year for Y Combinator companies (renewable while they have raised less than $25M), 15% for nonprofits, and 10% off annual billing for qualifying self-serve customers. According to "Contract rules," an uptime SLA is available only with the Enterprise package or as a special term for customers spending $100k+ ARR after discount, and requests to change contract terms are considered only for contracts above $20k a year.
:::

:::fact
The pricing page also lists products that put agents to work. PostHog AI is free for the first 500 credits a month and $0.01 per credit after that; "Replay vision," which reviews recordings for moments you define, is free for the first 2,500 credits; PostHog Desktop is "billed by AI token usage at cost," with the first 2,000 credits free. "Inbox" groups signals from your product context into reports and "opens pull requests for actionable issues so your team can review and merge the fix." Its unit is the PR: the first 3 a month are free and each one after that costs $15. The Series E post of September 29, 2025 called the raise the start of "Act 2 of PostHog": "We are going deeper into being a devtool, not 'just' analytics... we're also going to start working on generating pull requests for you." llms.txt now describes PostHog as "the platform for self-driving products."
:::

:::fact
The handbook page "How we get users" says that "the total spend we have on marketing and sales per customer we acquire pays itself off within 3 months of them signing up for a paid plan," and that "Customers buy from us, we don't sell to them." As the reason, it says founders in its space leading companies with well over $100M in annual revenue all regretted "letting go of their growth engine (people recommending their product to each other) and getting focused on sales." On big customers, "How we make money" says "We don't care about losing deals," "We don't contract deliverables," and PostHog will build something for a big customer only if it is "confident they won't be the only user of that thing." The company is organized into "small teams" of strictly 2 to 6 people, each meant to operate "like a startup." Salaries are benchmarked to the San Francisco market for each role, and the compensation page says engineering pay targets the 90th percentile.
:::

:::guess
Pushing every product toward the lowest price seems hard for single-product competitors to copy. A standalone analytics or replay vendor has to fund the whole company from that one product, while PostHog is funded by the total spend of customers who "end up using four." The price cut in August 2024, which PostHog itself expected to cause "a ~30% decline in product analytics revenue," was presumably made on top of that calculation. The model does, however, assume that the number of products keeps growing, and the pricing page now carries 22 tier tables across products and add-ons. The handbook says "We accept pricing complexity for the benefit of the users," but the work of tracking what you pay for each product stays with the user.
:::

:::guess
A $15 pull request is a different order of magnitude from "a tiny fraction of a cent" per event. It appears to be the first product priced not in a unit built up from cost, like an event or a recording, but in a unit of output that replaces part of an engineer's work. The data gathered by lining up analytics tools at the lowest price becomes the "context" agents work from, and the work agents produce from that context can carry a much higher unit price. The capital from the Series D and E rounds and a headcount of about 200 seem to be pointed at this second act. How outcome-based pricing at a higher unit price fits with a strategy built on free tiers and near-cost prices that earned word of mouth is, for now, a question the price list does not yet answer.
:::

PostHog gathered more than 500,000 teams since its founding in 2020 by lining up analytics tools one by one at the lowest price, dropping per-seat charges, letting users hold the spending limit, and letting them buy without a sales team. The units in its price list are the units of its architecture, and each time engineering lowered a cost, the price came down too. Now a $15 pull request has been added to the end of that price list. How much of the data it has collected PostHog can turn into work done by agents is likely to decide how the next few years are judged.
