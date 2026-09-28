---
service: "Better Stack"
title: "The Monitoring SaaS That Calls Itself 30x Cheaper Than Datadog — How a Small Rails Team Uses ClickHouse and Sentry Compatibility to Court the Giants' Customers"
description: "Better Stack bundles uptime monitoring, logs, traces, error tracking, and on-call into one observability SaaS. Founded in Prague in 2021 with $28.6M raised in total, the small company runs on Ruby on Rails and ClickHouse and advertises itself as 30x cheaper than Datadog. A dissection — from official docs, careers pages, and funding announcements — of a design that accepts Sentry SDKs and OpenTelemetry as-is to lower switching costs, down to its 25%-for-a-year affiliate program."
lead: "The headline on its homepage reads 30x cheaper than Datadog. Its error-tracking docs say: keep using your existing Sentry SDK and just send the data to Better Stack. Turning the standards built by the monitoring giants into its own front door, and fighting on price with a small team and a Rails app, Prague-born Better Stack announced that it became unintentionally profitable in 2023. This is a dissection of how it is built and how it makes money."
category: dev-tool
tags: [observability, monitoring, logging, clickhouse, incident-management]
publishedAt: "2026-09-28"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://betterstack.com/"
# Affiliate link placeholder: the owner must sign up for the Better Stack affiliate program
# (https://betterstack.com/affiliates, payouts via PayPal only) before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<better-stack-affiliate-link>"
#   program: "Better Stack Affiliate Program"
vendor: "Better Stack, Inc."
origin: "CZ"
heroTheme: "better-stack"
scores: { product: 4.0, ux: 4.0, tech: 4.0, business: 4.0 }
techStack:
  - layer: "Application"
    name: "Ruby on Rails"
    confidence: confirmed
    evidence: "The official engineering careers page lists Ruby on Rails first in its stack; job descriptions list \"Ruby on Rails, PostgreSQL, Redis, ClickHouse, Redpanda...\""
    evidenceUrl: "https://betterstack.com/careers/engineering"
  - layer: "Primary database and cache"
    name: "PostgreSQL / Redis"
    confidence: confirmed
    evidence: "The official engineering careers page states \"PostgreSQL, Redis, and ClickHouse\""
    evidenceUrl: "https://betterstack.com/careers/engineering"
  - layer: "Telemetry storage"
    name: "ClickHouse"
    confidence: confirmed
    evidence: "An official press release (2024-01-22) states that using ClickHouse lets the product keep data in hot storage for longer; also listed on the careers page"
    evidenceUrl: "https://betterstack.com/press/raises-10m/"
  - layer: "Event streaming"
    name: "Redpanda"
    confidence: confirmed
    evidence: "Job descriptions on the official careers page list Redpanda (a Kafka-compatible streaming platform) in the stack"
    evidenceUrl: "https://betterstack.com/careers"
  - layer: "Frontend"
    name: "Vue.js / Turbo / Tailwind"
    confidence: confirmed
    evidence: "The official engineering careers page states \"Vue.js, Vanilla.js, Turbo, ES6, and Tailwind\""
    evidenceUrl: "https://betterstack.com/careers/engineering"
  - layer: "Collection agent"
    name: "Better Stack collector (OpenTelemetry / Vector / eBPF)"
    confidence: confirmed
    evidence: "Official docs state it uses eBPF to gather logs, metrics, and OpenTelemetry traces without code changes and bundles Vector for log shipping. The GitHub README credits OpenTelemetry, Cilium, Vector, OBI, and Coroot as foundations"
    evidenceUrl: "https://betterstack.com/docs/logs/collector/"
  - layer: "Error-tracking ingest"
    name: "Sentry SDK compatible"
    confidence: confirmed
    evidence: "Official docs state: keep using your existing Sentry SDK, just send the data to Better Stack"
    evidenceUrl: "https://betterstack.com/docs/errors/"
  - layer: "Data residency"
    name: "EU regions (DIN ISO/IEC 27001-certified data centers)"
    confidence: confirmed
    evidence: "The official security page states data is stored by default in EU regions in GDPR-compliant, DIN ISO/IEC 27001-certified data centers; the company is SOC 2 Type 2 compliant"
    evidenceUrl: "https://betterstack.com/security"
  - layer: "CDN and edge"
    name: "Cloudflare"
    confidence: likely
    evidence: "Our HTTP header observation (betterstack.com, 2026-09-28) returned server: cloudflare and cf-cache-status: HIT, and the IP addresses belong to Cloudflare's network. No explicit statement found in official docs"
  - layer: "Image storage"
    name: "Backblaze B2"
    confidence: likely
    evidence: "Our observation (2026-09-28) found Backblaze B2 buckets for organization logos and user avatars allowed in betterstack.com's Content-Security-Policy. No explicit official statement found"
sources:
  - label: "Better Stack official homepage (30x cheaper than Datadog, 7,000+ customers, 60-day money-back guarantee, covering the rest of a switcher's contract)"
    url: "https://betterstack.com/"
    accessedAt: "2026-09-28"
  - label: "Better Stack press release: infrastructure monitoring launch, profitability, and a $10M raise (2024-01-22)"
    url: "https://betterstack.com/press/raises-10m/"
    accessedAt: "2026-09-28"
  - label: "TechCrunch: Better Stack secures $10M, $28.6M raised in total, 28 employees (2024-01-25)"
    url: "https://techcrunch.com/2024/01/25/observability-platform-better-stack-secures-10m-cash-infusion/"
    accessedAt: "2026-09-28"
  - label: "Silicon Canals: Prague-based Better Stack raises $18.6M led by Creandum (2022-07)"
    url: "https://siliconcanals.com/better-stack-raises-18-2m/"
    accessedAt: "2026-09-28"
  - label: "Better Stack press release: introducing Better Stack and merging Better Uptime and Logtail"
    url: "https://betterstack.com/press/introducing-better-stack/"
    accessedAt: "2026-09-28"
  - label: "Better Stack official: careers (tech stack, compensation ranges, Hardcore mode)"
    url: "https://betterstack.com/careers"
    accessedAt: "2026-09-28"
  - label: "Better Stack official: engineering careers"
    url: "https://betterstack.com/careers/engineering"
    accessedAt: "2026-09-28"
  - label: "Better Stack official: pricing (Responder seats, regional rates, ingestion via AWS Direct Connect)"
    url: "https://betterstack.com/pricing"
    accessedAt: "2026-09-28"
  - label: "Better Stack docs: Better Stack collector"
    url: "https://betterstack.com/docs/logs/collector/"
    accessedAt: "2026-09-28"
  - label: "GitHub: BetterStackHQ/collector (README)"
    url: "https://github.com/BetterStackHQ/collector"
    accessedAt: "2026-09-28"
  - label: "Better Stack docs: Welcome to Errors (Sentry SDK compatibility)"
    url: "https://betterstack.com/docs/errors/"
    accessedAt: "2026-09-28"
  - label: "Better Stack official: Security (data residency, SOC 2, GDPR)"
    url: "https://betterstack.com/security"
    accessedAt: "2026-09-28"
  - label: "Better Stack official: Affiliate program"
    url: "https://betterstack.com/affiliates"
    accessedAt: "2026-09-28"
---

The monitoring market is crowded with large vendors like Datadog, New Relic, and PagerDuty. Into it, a small company born in Prague in 2021 walked in and wrote, in plain words, that it does the same thing for a thirtieth of the price. Better Stack is an unusual SaaS: it puts price itself at the center of the product.

## Service Overview

Better Stack is an observability platform that combines uptime monitoring, logs, metrics, traces, error tracking, session replay, on-call (phone and Slack alerts to whoever is on duty), and status pages in one place. It started as two separate products — Better Uptime for uptime monitoring and Logtail for log management — which were later merged under the Better Stack name.

:::fact
According to an official press release, Better Uptime and Logtail were rebranded as Uptime and Logs on the Better Stack platform, with functionality and pricing unchanged and a single account for both. According to Silicon Canals, Better Stack is a Prague company founded in 2021 by Juraj Masar and Veronika Kolejak, and in July 2022 it raised an $18.6M Series A led by Creandum. In an official press release dated January 22, 2024, it announced an additional $10M from existing investor KAYA ($28.6M in total, per TechCrunch) and said it had become "unintentionally" profitable in 2023. According to TechCrunch, it had 28 employees at the time and planned to grow to 50 by the end of the year. At that time it served 200,000+ developers and 4,000+ customers; as of September 2026, the official homepage description says 7,000+ customers and the careers page says 300,000+ developers.
:::

:::fact
The official homepage headline is "30x cheaper than Datadog." Comparing against an approximate Datadog bill for 1 TB each of logs, traces, and metrics per month, it claims you can ingest up to 80x more data on the same budget or cut costs by up to 98% (an estimate assuming annual payment, European data location, and one responder with a Tera bundle: roughly $55,574/month for Datadog versus $687/month for Better Stack). The same page also pitches switching directly: "Datadog bill too high? Migrate today, the rest of your contract is on us."
:::

:::pull
It turns the standards built by the monitoring giants into its own front door. Better Stack's strategy is not to rebuild, but to make switching cheap.
:::

::scorecard

## UX Analysis

Better Stack's UX aims at two things: driving the cost of switching as close to zero as possible, and finishing everything on one screen.

- **It accepts the SDKs you already have.** For error tracking, the official docs say you can keep the code you wrote for Sentry and just change where the data goes. Traces and logs arrive over OpenTelemetry, the industry standard. The design goes after the biggest obstacle to migration: re-instrumenting your code.
- **Automatic collection without code changes.** The official collector uses eBPF to gather logs, metrics, and traces from Kubernetes or Docker clusters, and configuration changes can be applied remotely from the UI without redeploying. In exchange, with eBPF tracing enabled it asks you to keep 4 GiB of memory and 4 vCPUs free per host. Setup is light, but the observed machines need real headroom.
- **One flow from detection to paging.** Uptime monitoring detects an outage, on-call alerts the person on duty by phone or Slack, and a status page informs users. Wiring that would otherwise span several SaaS products happens inside one vendor.
- **A free tier that goes as far as "try it for real."** According to the pricing page, the free plan includes 10 monitors, 1 status page, 100,000 exceptions per month, and 3 GB of logs retained for 3 days. The top of the pricing page and the homepage description also promote a 60-day money-back guarantee. It allows the order indie developers prefer: try it in production first, pay later.

## Tech Stack

::techstack

:::fact
According to the official careers pages, Better Stack's stack is Ruby on Rails, PostgreSQL, Redis, ClickHouse, Redpanda, JavaScript, Vue.js, Tailwind, and Docker, with Turbo on the frontend. One job description says engineers work with the CTO, CEO, and designer to deliver features end to end, from backend to frontend, "within a single day." The January 2024 press release highlights that ClickHouse lets customers keep data in hot (immediately searchable) storage for longer, and that querying uses SQL.
:::

:::fact
According to the official security page, data is stored by default in EU regions in DIN ISO/IEC 27001-certified data centers, and the company is SOC 2 Type 2 compliant (it states it is not HIPAA compliant). The careers page describes an operations role that will "help to operate our data centers." On the pricing page, ingestion of logs and traces is priced by region: $0.10 per GB in Germany (EU), $0.15 in the US, and $0.35 in Singapore. The same page offers "Ingestion via AWS Direct Connect," explaining that ingestion endpoints hosted within AWS (eu-central-1) let AWS-hosted systems avoid paying AWS $0.09/GB for egress, and that the company has set up AWS Direct Connect itself.
:::

:::guess
In our observation, betterstack.com's response headers returned server: cloudflare with a cache hit, along with the x-runtime header that Rails' Rack middleware adds. The marketing site itself appears to be the Rails app sitting behind Cloudflare. The destination for browser security-policy violation reports (the reporting-endpoints header) is the company's own log ingestion endpoint (in.logs.betterstack.com), which reads as dogfooding — using its own product to monitor itself. AWS Direct Connect is a service for linking facilities outside AWS to AWS over a dedicated connection. That reads as ingestion endpoints inside AWS feeding the company's own infrastructure over Direct Connect, which suggests the main processing platform sits outside AWS — in the "data centers" the careers page mentions. Combining this with the fact that ingestion in Germany (EU) is the cheapest and EU is the default storage location, we infer that the company runs inexpensive compute it operates itself in Europe, and that this funds the "30x cheaper" claim. However, nothing official says it avoids hyperscalers; this remains an inference from circumstantial evidence.
:::

:::guess
The cost of goods for a monitoring SaaS is mostly the cost of storing and searching ingested data. Columnar ClickHouse compresses logs and metrics — where values of the same kind sit side by side — very well, and storage tends to be cheaper than on a full-text-search-engine style backend. Better Stack's pricing appears to rest on this choice of storage layer. Choosing Rails for the application layer, meanwhile, is likely about letting a small team keep shipping screens and features quickly. Heavy lifting goes to ClickHouse and Redpanda; the parts that need human effort are written with mature, productive tools — a clear division of roles.
:::

## Business Model

Better Stack earns money two ways: per-seat pricing for on-call responders, and usage-based pricing on the volume of data ingested.

:::fact
According to the pricing page, members who only view telemetry are free, while a Responder — the on-call person, with access to uptime monitoring, incident management, on-call scheduling, and status pages, plus unlimited phone and SMS alerts — costs $34/month ($29/month billed annually). Telemetry is sold in four bundles (Nano, Micro, Mega, Tera) or per GB, and the bundles include 30-day log retention. The official careers page publishes a full-stack engineer range of $60K–$300K/year plus equity, alongside a separate "Hardcore mode" range: work 1.5x the hours, earn 2x the compensation.
:::

:::fact
According to the official site, Better Stack runs an affiliate program that pays 25% of revenue from referred paying customers, for the first year only. The basis is net revenue after processing and platform fees; payouts happen after the referred customer's 60-day money-back guarantee period passes and once the balance exceeds $100, and only to a PayPal account. If several people refer the same customer, only the last one is eligible. In the official example, referring a customer who spends $100 a month yields 12 payments of $25, or $300 over the first year.
:::

:::guess
Charging per seat only for the people who carry the pager, while viewers are free, looks designed so that rolling the tool out across a company does not inflate the bill. We infer the aim is to attract teams frustrated with pricing that grows per host and the like, as with Datadog, through the very shape of the price list. The careers page also says: "We can't buy an F1 sponsorship or a Super Bowl ad, but we can sponsor a tech blogger to start their side hustle." Acquiring customers through developer-facing creators and affiliates rather than big ad budgets appears to sit at the center of how a small team grows while staying profitable.
:::

"30x cheaper than Datadog" reads like a provocation, but it is also the invoice that results from choosing ClickHouse for storage, writing the app in Rails with a small team, and aligning the front door with other companies' standards. Selling the giants' features on a different cost structure — Better Stack offers one answer to where a late-arriving developer SaaS can compete.
