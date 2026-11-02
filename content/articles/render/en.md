---
service: "Render"
title: "Renting a Box That Never Stops at a Flat Price — How Render Grew on a Post-Heroku Free Tier, Dropped Seat Fees, and Reached a $1.5B Valuation"
description: "Render is a developer cloud where a git push brings up apps and databases. It sells always-on instances at fixed monthly prices, uses a free tier that sleeps after 15 minutes as its entrance, and runs its own Kubernetes on AWS and Google Cloud. In 2026 it dropped seat fees for metered bandwidth and domains and turned toward running AI agents. A dissection from the official pricing page, docs, incident reports, and engineering blog."
lead: "In November 2021, Render launched free web services. Almost a year later Heroku announced the end of its free offering, Render's free-app creation immediately doubled, and the surge brought four incidents in a month. The company that hurriedly rebuilt what its free tier stood on had more than 4.5 million developers by 2026, raising $100M at a $1.5B valuation. That same year it stopped charging by headcount and shifted to earning from compute and bandwidth. While pay-for-what-you-use rivals grow, this is a dissection of a company deliberately keeping the classic model of paying monthly for a reserved box."
category: dev-tool
tags: [paas, hosting, kubernetes, indie-dev]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
expires:
  - date: "2026-11-30"
    claim: "The pricing page's startup credits (up to $100K) and migration credits (up to $10K). No end date is stated, so check at month end"
  - date: "2026-12-31"
    claim: "Render Sandboxes being in public beta, with its beta pricing and limits, and the status of the remaining features the February 2026 announcement placed in the coming months (object storage, shared filesystem, AI gateway)"
serviceUrl: "https://render.com/"
vendor: "Render Inc."
origin: "US"
heroTheme: "render"
scores: { product: 4.0, ux: 4.0, tech: 4.0, business: 4.0 }
techStack:
  - layer: "Control plane language"
    name: "Go"
    confidence: confirmed
    evidence: "The official blog (2024-04-16) says Render used generics in \"our Go codebase\" to get compile-time guarantees that access policies are applied"
    evidenceUrl: "https://render.com/blog/how-render-enforces-access-controls-with-go-generics"
  - layer: "Container platform"
    name: "Kubernetes (self-managed, not EKS)"
    confidence: confirmed
    evidence: "The official blog (2025-12-02) says Render operates its own Kubernetes clusters on AWS instead of using EKS, and that its control plane runs independently of the customer clusters and not in us-east-1"
    evidenceUrl: "https://render.com/blog/how-render-services-stayed-up-during-the-aws-october-outage"
  - layer: "Underlying cloud (AWS)"
    name: "AWS (EC2 / S3 / ELB)"
    confidence: confirmed
    evidence: "The same post says the AWS-hosted infrastructure uses foundational services like EC2, S3, and ELB and avoids higher-level managed services like DynamoDB, RDS, and Lambda"
    evidenceUrl: "https://render.com/blog/how-render-services-stayed-up-during-the-aws-october-outage"
  - layer: "Underlying cloud (Google Cloud)"
    name: "Google Cloud"
    confidence: confirmed
    evidence: "The root cause analysis of the March 2024 outage lists \"all services hosted on GCP\" among its recovery milestones. No official list of which region runs on which cloud was found"
    evidenceUrl: "https://render.com/blog/root-cause-analysis-extended-service-disruption-3-26-24"
  - layer: "Cluster networking"
    name: "Calico / kube-proxy"
    confidence: confirmed
    evidence: "The official blog (2023-10-03) says Calico and kube-proxy run on every node in every cluster. An October 2025 post also names Calico as the daemonset configuring networking"
    evidenceUrl: "https://render.com/blog/knative"
  - layer: "Free-tier scale to zero"
    name: "Knative (patched)"
    confidence: likely
    evidence: "The official blog (2023-10-03) says Render adopted and patched Knative for free-tier scale to zero. The same post also says the time was approaching to replace Knative with a home-grown solution, and the current setup could not be confirmed"
    evidenceUrl: "https://render.com/blog/knative"
  - layer: "Log collection"
    name: "Vector"
    confidence: confirmed
    evidence: "The official blog (2025-10-30) says the daemonset handling log collection is Vector, and that a fix by Render engineers was merged upstream"
    evidenceUrl: "https://render.com/blog/how-we-found-7-tib-of-memory-just-sitting-around"
  - layer: "Request routing"
    name: "PostgreSQL LISTEN/NOTIFY + in-memory routers"
    confidence: confirmed
    evidence: "The official blog (2024-05-22) says routers connect to the service database at startup, subscribe to updates through PostgreSQL's LISTEN and NOTIFY, and serve requests from their in-memory cache only"
    evidenceUrl: "https://render.com/blog/distributing-global-state-to-serve-over-1-billion-daily-requests"
  - layer: "DDoS protection"
    name: "Cloudflare"
    confidence: confirmed
    evidence: "Official docs say Render uses Cloudflare's DDoS protection infrastructure behind the scenes. Our own observation (2026-11-02) also found render.com returning server: cloudflare and cf-ray"
    evidenceUrl: "https://render.com/docs/ddos-protection"
  - layer: "Key Value"
    name: "Valkey 8"
    confidence: confirmed
    evidence: "Official docs say newly created Render Key Value instances run Valkey 8"
    evidenceUrl: "https://render.com/docs/key-value"
  - layer: "Infrastructure as code"
    name: "Blueprints (render.yaml)"
    confidence: confirmed
    evidence: "Official docs describe a way to define, deploy, and manage multiple resources with a single YAML file"
    evidenceUrl: "https://render.com/docs/infrastructure-as-code"
  - layer: "Entry point for AI agents"
    name: "Render MCP Server"
    confidence: confirmed
    evidence: "Official docs say the server is hosted at mcp.render.com/mcp and lets AI apps create and redeploy services, query databases, and analyze metrics and logs"
    evidenceUrl: "https://render.com/docs/mcp-server"
  - layer: "Payments"
    name: "Stripe"
    confidence: confirmed
    evidence: "The pricing page FAQ says payment info is stored and processed by Stripe"
    evidenceUrl: "https://render.com/pricing"
  - layer: "Own website"
    name: "Next.js"
    confidence: likely
    evidence: "Our own observation (2026-11-02) found render.com returning x-nextjs-cache, x-nextjs-prerender, and x-render-origin-server: Render. No official statement found"
sources:
  - label: "Render official: Pricing"
    url: "https://render.com/pricing"
    accessedAt: "2026-11-02"
  - label: "Render official blog: Better pricing for fast-growing teams (2026-04-23)"
    url: "https://render.com/blog/better-pricing-for-fast-growing-teams.md"
    accessedAt: "2026-11-02"
  - label: "Render Changelog: Updated plans for Render workspaces (2026-04-23)"
    url: "https://render.com/changelog/updated-plans-for-render-workspaces.md"
    accessedAt: "2026-11-02"
  - label: "Render docs: Deploy for Free (free-tier limits)"
    url: "https://render.com/docs/free.md"
    accessedAt: "2026-11-02"
  - label: "Render docs: Render Compute Plans"
    url: "https://render.com/docs/compute-plans.md"
    accessedAt: "2026-11-02"
  - label: "Render docs: Updates to Render Compute Plans (the 2026-08-26 renaming)"
    url: "https://render.com/docs/compute-plans-update.md"
    accessedAt: "2026-11-02"
  - label: "Render docs: Regions"
    url: "https://render.com/docs/regions.md"
    accessedAt: "2026-11-02"
  - label: "Render docs: Deploying on Render (the deploy process)"
    url: "https://render.com/docs/deploys.md"
    accessedAt: "2026-11-02"
  - label: "Render docs: Health Checks"
    url: "https://render.com/docs/health-checks.md"
    accessedAt: "2026-11-02"
  - label: "Render docs: Rollbacks"
    url: "https://render.com/docs/rollbacks.md"
    accessedAt: "2026-11-02"
  - label: "Render docs: Native Runtimes"
    url: "https://render.com/docs/native-runtimes.md"
    accessedAt: "2026-11-02"
  - label: "Render docs: Persistent Disks"
    url: "https://render.com/docs/disks.md"
    accessedAt: "2026-11-02"
  - label: "Render docs: Scaling Render Services"
    url: "https://render.com/docs/scaling.md"
    accessedAt: "2026-11-02"
  - label: "Render docs: Render Blueprints (IaC)"
    url: "https://render.com/docs/infrastructure-as-code"
    accessedAt: "2026-11-02"
  - label: "Render docs: Preview Environments"
    url: "https://render.com/docs/preview-environments.md"
    accessedAt: "2026-11-02"
  - label: "Render docs: High Availability for Render Postgres"
    url: "https://render.com/docs/postgresql-high-availability.md"
    accessedAt: "2026-11-02"
  - label: "Render docs: Render Postgres Recovery and Backups"
    url: "https://render.com/docs/postgresql-backups.md"
    accessedAt: "2026-11-02"
  - label: "Render docs: Key Value"
    url: "https://render.com/docs/key-value"
    accessedAt: "2026-11-02"
  - label: "Render docs: Outbound Bandwidth"
    url: "https://render.com/docs/outbound-bandwidth.md"
    accessedAt: "2026-11-02"
  - label: "Render docs: DDoS Protection"
    url: "https://render.com/docs/ddos-protection"
    accessedAt: "2026-11-02"
  - label: "Render docs: Render MCP Server"
    url: "https://render.com/docs/mcp-server"
    accessedAt: "2026-11-02"
  - label: "Render docs: Intro to Render Sandboxes"
    url: "https://render.com/docs/sandboxes.md"
    accessedAt: "2026-11-02"
  - label: "Render docs: Render Workflows"
    url: "https://render.com/docs/workflows.md"
    accessedAt: "2026-11-02"
  - label: "Render official blog: Durability as code — Introducing Render Workflows (2026-04-07)"
    url: "https://render.com/blog/durability-as-code-introducing-render-workflows"
    accessedAt: "2026-11-02"
  - label: "Render official blog: Render raises $100M at $1.5B valuation (2026-02-17)"
    url: "https://render.com/blog/series-c-extension"
    accessedAt: "2026-11-02"
  - label: "Render official blog: $80M to reimagine the cloud for the AI era (2025-01-21)"
    url: "https://render.com/blog/series-c"
    accessedAt: "2026-11-02"
  - label: "Render official blog: Render's $50 Million Series B (2023-06-20)"
    url: "https://render.com/blog/render-series-b"
    accessedAt: "2026-11-02"
  - label: "Render official blog: Render's $20 Million Series A (2021-11-22)"
    url: "https://render.com/blog/render-series-a"
    accessedAt: "2026-11-02"
  - label: "Render official: About"
    url: "https://render.com/about"
    accessedAt: "2026-11-02"
  - label: "Render official blog: How Render Scaled Knative to 100k+ Web Apps (2023-10-03)"
    url: "https://render.com/blog/knative"
    accessedAt: "2026-11-02"
  - label: "Render official blog: Distributing Global State to Serve over 1 Billion Daily Requests (2024-05-22)"
    url: "https://render.com/blog/distributing-global-state-to-serve-over-1-billion-daily-requests"
    accessedAt: "2026-11-02"
  - label: "Render official blog: How We Found 7 TiB of Memory Just Sitting Around (2025-10-30)"
    url: "https://render.com/blog/how-we-found-7-tib-of-memory-just-sitting-around"
    accessedAt: "2026-11-02"
  - label: "Render official blog: Root Cause Analysis for Render's Extended Service Disruption on 3/26/24 (2024-03-29)"
    url: "https://render.com/blog/root-cause-analysis-extended-service-disruption-3-26-24"
    accessedAt: "2026-11-02"
  - label: "Render official blog: How Render Services Stayed Up During the AWS October Outage (2025-12-02)"
    url: "https://render.com/blog/how-render-services-stayed-up-during-the-aws-october-outage"
    accessedAt: "2026-11-02"
  - label: "Render official blog: How Render Enforces Access Controls with Go Generics (2024-04-16)"
    url: "https://render.com/blog/how-render-enforces-access-controls-with-go-generics"
    accessedAt: "2026-11-02"
  - label: "Render official: Render for Startups"
    url: "https://render.com/startups"
    accessedAt: "2026-11-02"
  - label: "Render official: Migration Credits"
    url: "https://render.com/migration-credits"
    accessedAt: "2026-11-02"
  - label: "Render docs: Migrate from Railway to Render"
    url: "https://render.com/docs/migrate-from-railway.md"
    accessedAt: "2026-11-02"
---

Cloud pricing has been drifting toward "pay only for what you use." Render keeps to a slightly old-fashioned way of selling inside that drift: you pick a box with a set amount of CPU and memory and pay a monthly price for it, and the box keeps running whether requests arrive or not. What makes Render interesting is how it makes this "box that never stops" work, through a free tier, flat entry plans, and its own Kubernetes assembled on top of AWS and Google Cloud.

## What the service is

Render is a developer cloud that brings up web services, private services, background workers, cron jobs, static sites, and Postgres and Key Value datastores from Git and Docker. By its own description it is headquartered in San Francisco with a team distributed around the world. In a January 2025 post, founder Anurag Goel wrote that as the fifth engineer at Stripe in 2011 he saw how much time building and managing infrastructure took, and that he started Render in 2019.

:::fact
Render's fundraising has been announced on its official blog as follows. Only the 2026 announcement gives a valuation. The official About page also puts the total at $258M.

| Announced | Round | Amount | Led by | Stated total | Stated developers |
| --- | --- | --- | --- | --- | --- |
| 2021-11-22 | Series A | $20M | Addition | $27M | Tens of thousands |
| 2023-06-20 | Series B | $50M | Bessemer Venture Partners | Not stated | Well over 500,000 |
| 2025-01-21 | Series C | $80M | Georgian | $157M | Over 2M (100,000+ signing up monthly) |
| 2026-02-17 | Series C extension | $100M ($1.5B valuation) | Georgian | $258M | Over 4.5M (250,000+ joining monthly) |
:::

:::fact
According to Render's official blog (2023-10-03), the free tier launched in November 2021 and adoption grew at a steady rate until Heroku announced the end of its free offering ten months later, when the adoption rate doubled immediately. Four incidents related to the surge followed within a month, and the total number of apps on Render effectively quadrupled. At the time of writing, the post said, tens of thousands of free-tier apps were being created each week.
:::

In its February 2026 announcement, Render restated its goal as "the cloud runtime for AI applications and agents." The argument runs like this. Traditional web apps run on short-lived, stateless request-response cycles. AI agents are the opposite: long-running, stateful, and distributed. Building them on hyperscalers is complex and expensive, and frontend-focused serverless platforms are too limiting. So Render, built from the start around long-running processes, is the natural fit.

:::pull
Bring developers in on a free tier, then sell them a process that never stops at a monthly price. Render's bet is that this old shape becomes right again in the age of AI agents.
:::

::scorecard

## UX analysis

Render's UX comes down to one idea: settle up front what it will cost and what will happen. Rather than stretching automatically and letting you check the bill afterward, it has a person choose the size of the box.

- **Picking a box sets the monthly price.** On the official pricing page, web services run in a table from $7 a month for 0.5 CPU and 512MB up to $1,500 a month for 12 CPU and 96GB. Since August 26, 2026, plan IDs have been named after their specs, as in `1c-2g`. The older names such as `standard` and `pro` still work, and prices did not change.
- **Deploys are visible as stages.** According to the official docs there are three stages, build, pre-deploy command, and start, with limits of 120, 30, and 15 minutes. Database migrations go in the pre-deploy command. If any stage fails, the last successful version keeps running.
- **Free-tier limits are spelled out.** The official "Deploy for Free" page gathers the 15-minute sleep, the roughly one-minute wake, the 750-hour monthly cap, what files are lost, and which features are unavailable on one page. It says at the top not to use free instances for production applications.
- **Configuration can live in the repository.** A file called `render.yaml` (a Blueprint) defines services and databases together, and can be generated from existing services.
- **Rollbacks come with a safety catch on auto-deploys.** According to the official docs, rolling back from the dashboard automatically disables auto-deploys for that service, so a new commit does not bring the same problem back. The docs also warn that rolling back through the API does not disable them.

:::fact
According to the official docs, a free web service spins down after 15 minutes without inbound traffic, counting HTTP requests and WebSocket messages on existing connections. The next request wakes it, which takes about one minute, and browsers see a loading page meanwhile. Free instance hours are 750 per workspace per month, and using them up suspends all free services until the next month. Filesystem changes are lost on redeploy, restart, and spin-down. While spun down, `/robots.txt` gets a "disallow all" response without waking the service. The official spec is 0.1 CPU and 512MB.
:::

:::fact
Free Postgres is limited to one per workspace with 1GB of storage and expires 30 days after creation. If it is not upgraded within a 14-day grace period after that, it is deleted along with its data. It has no backups. Free Key Value is also limited to one per workspace and holds data only in memory, so data is lost on restart and also when upgrading to a paid plan. According to the Changelog, the Free Postgres limit was shortened from 90 days to 30 on May 20, 2024. The pricing page lists 256MB for Postgres and 25MB for Key Value.
:::

:::guess
The 15-minute sleep and one-minute wake appear designed to keep the free tier a place for trying things. It does not suit an always-on public site, but it is enough for learning and prototyping, and the urge to move to a $7 box arrives the moment a project becomes real. The 30-day database limit pushes in the same direction. That the free tier is described so bluntly reads as a judgment that showing limits up front makes the move to paid go more smoothly than dealing with complaints later.
:::

Choosing boxes has weak spots too. According to the official docs, the region of an existing service or database cannot be changed; you create a new one elsewhere and move your data. A service with a persistent disk cannot scale to multiple instances and loses zero-downtime deploys. Forcing decisions at the start that are hard to change once running is a burden that comes with a reserved model.

## Tech stack

::techstack

:::fact
According to the official docs there are five regions: Oregon, Ohio, and Virginia in the US, Frankfurt in Germany, and Singapore. Only static sites skip the region choice, being served from a global CDN. Each region has a separate private network, and traffic between regions must be secured for the public internet. No Japanese region is listed, and Singapore is the only choice in Asia. According to an official post (2024-05-22), in its early days (before 2020) Render operated only in Oregon.
:::

:::fact
Deploys work as follows. Besides the default of deploying on a push to the branch, there is a setting that deploys only after CI checks pass and one that turns auto-deploys off. In a zero-downtime deploy, the original instance keeps receiving traffic until the new one starts successfully. Sixty seconds after the switch, the original instance gets SIGTERM, followed by SIGKILL after a shutdown delay of 30 seconds by default. Health checks run every few seconds: a running instance that fails for 15 consecutive seconds stops receiving traffic, and one that fails for 60 seconds is restarted. The filesystem is ephemeral by default, so data to keep belongs on a persistent disk or in a database. Disks are snapshotted automatically every 24 hours, but a service with one cannot run multiple instances.

Managed Postgres runs continuous point-in-time recovery (PITR) on paid instances, reaching back 3 days on Hobby and 7 days on Pro and above. Recovery comes up as a new instance, so it can be checked before switching over. With high availability enabled, an asynchronous standby sits in a different zone in the same region, and failover is automatic if the primary is unavailable for 30 seconds. For horizontal scaling, autoscaling adds and removes instances against CPU and memory targets. The maximum instance count is 100 on plans up to 8c-32g and 5 on 8c-64g and larger.
:::

What stands out in Render's engineering blog is that scale problems show up as counts of Kubernetes objects.

:::fact
According to an October 2023 official post, Kubernetes did not support scale to zero at the time, so Render adopted Knative for the free tier and first ran it with default settings. With the free-tier surge, each free app accumulated Kubernetes Services in proportion to its number of deploys (2N+1), the load on Calico and kube-proxy on every node rose, and delays in propagating network changes caused intermittent connection failures. Render patched Knative to remove three kinds of Services one by one, bringing the count per free app to zero. The post closes by saying that this too began to strain and the time was approaching to replace Knative with something home-grown.
:::

:::fact
An October 2025 official post says Render is probably near the very top in number of namespaces. It traced the log collector Vector listwatching namespaces from every node, reproduced the issue on a staging cluster with several hundred thousand namespaces, and contributed an option upstream to turn that off. Memory per pod fell from nearly 4GiB to a few tens of MiB, and the savings across clusters came to just over 7TiB. A May 2024 official post describes routing for more than a million active services across five regions and well over a billion requests a day. Routers receive update notifications through PostgreSQL's LISTEN and NOTIFY, refresh in-memory data, and never touch the database while serving a request, so traffic to existing services continues even when that database is down.
:::

:::fact
At 16:07 UTC on March 26, 2024, a faulty code change restarted all workloads on Render. According to the official root cause analysis, a bug in the feature-flagging code kept the faulty code from running in non-production environments, which delayed its discovery. No data was lost, and static sites and services without disks recovered within 20 minutes, but moving hundreds of thousands of services with disks became the bottleneck, and full recovery came at 18:45 for paid services and 20:00 for free services. The report calls it "the most severe and widespread outage in Render's history" and lists higher disk-operation limits, batched operations, tighter control-plane permissions, and closing the gap between production and non-production.
:::

:::fact
A December 2025 official post looks back at the AWS us-east-1 outage of October 20 that year. Builds and deploys in the Virginia region slowed, but running services stayed up. Three reasons are given: limiting itself to foundational services like EC2, S3, and ELB rather than DynamoDB, RDS, and Lambda; running its own Kubernetes rather than EKS, with a control plane separated from customer clusters and kept out of us-east-1; and placing most US customers in us-west-2 and us-east-2. The same post admits that luck played a part, that the impact would have been far greater had the same failure hit us-west-2, and that self-management takes considerable investment.
:::

:::guess
Render's technical choices can be summed up as "rent the compute, but keep the layer that bundles it." It does not go down to its own racks as Railway did. It uses only a cloud's basic parts and owns the scheduler, routers, and disk-moving layer above them. This appears to be a line drawn to accept someone else's invoice on cost in exchange for not carrying data-center operations. The 2024 outage showed that this layer can be stopped by the company's own change, and the 2025 outage showed that it can protect against someone else's failure. Being able to read both sides of the same layer in public posts is part of what makes this engineering blog valuable.
:::

:::fact
Three products stand out for agents. Render Workflows went into public beta on April 7, 2026: you define TypeScript or Python functions as tasks and leave retries, state management, and parallel execution to Render, with each task able to run for up to 24 hours. Render Sandboxes is an environment for running untrusted code in isolation, marked as public beta in the official docs and described on the pricing page as isolated microVMs. The MCP server lets AI apps such as Claude Code, Codex, and Cursor create and redeploy services and analyze logs. The rest of the February 2026 plan includes native object storage, a shared filesystem, an AI gateway, and unified observability. On the pricing page as checked on 2026-11-02 we found no object storage pricing, while the careers page listed roles for it.
:::

## Business model

Render's official FAQ splits billing into three parts: a flat workspace plan, metered items such as bandwidth, and compute for your applications.

:::fact
The workspace plans on the pricing page as of 2026-11-02 are below. Amounts are in US dollars, and we found no statement about tax treatment on the pricing page.

| Item | Hobby | Pro | Scale | Enterprise |
| --- | --- | --- | --- | --- |
| Monthly (compute extra) | $0 | $25 | $499 | Custom |
| Team seats | 1 | Unlimited | Unlimited | Unlimited |
| Maximum services | 25 | Unlimited | Unlimited | Unlimited |
| Included bandwidth (then $0.15/GB) | 5GB | 25GB | 1TB | Custom |
| Standard build minutes (then $5 per 1,000) | 500 | 1,000 | 5,000 | Custom |
| Custom domains (then $0.25/domain/month) | 2 | 15 | 25 | Custom |
| Postgres point-in-time recovery | 3 days | 7 days | 7 days | 7 days |
| Log retention | 7 days | 14 days | 30 days | 30 days |

Horizontal autoscaling and preview environments require Pro or higher, SAML SSO and SCIM require Scale or higher, and a HIPAA BAA requires Scale or higher with a 20% compute premium on enabled workspaces. Contractual uptime SLAs are listed under Enterprise.
:::

:::fact
Monthly prices for the main web service plans (pricing page, 2026-11-02) are as follows.

| CPU | Memory | Plan ID | Monthly |
| --- | --- | --- | --- |
| 0.1 | 512MB | free | $0 (limitations apply) |
| 0.5 | 512MB | 0.5c-512mb | $7 |
| 1 | 2GB | 1c-2g | $25 |
| 2 | 4GB | 2c-4g | $85 |
| 2 | 8GB | 2c-8g | $135 |
| 4 | 8GB | 4c-8g | $175 |
| 8 | 32GB | 8c-32g | $450 |
| 12 | 96GB | 12c-96g | $1,500 |

Billing is prorated to the second: in the official example, a paid web service turned off after 24 hours is billed for 24 hours. Each added instance is billed at the same price. Postgres runs from $6 a month for 0.1 CPU and 256MB to $11,000 for 128 CPU and 1,024GB, with storage at $0.30 per GB. Persistent disks cost $0.25 per GB per month, and Key Value runs from $10 a month for 256MB to $750 for 50GB. Cron jobs are billed by the minute, at $0.00016 a minute for 0.5 CPU and 512MB. Deploying static sites is free.
:::

:::fact
On April 23, 2026, Render dropped seat fees. According to the Changelog, Professional ($19 per member per month) gave way to Pro (a flat $25 per month) and Organization ($29 per member per month) to Scale (a flat $499 per month), with existing workspaces moved automatically on August 1. At the same time, bandwidth overages moved from 100GB increments to $0.15 per GB, the bandwidth included in Hobby and Pro was reduced, and additional custom domains began to carry a fee. The official blog explains that seat fees had been subsidizing included bandwidth and says 75% of paying customers will see costs fall or stay the same, while a small number with few seats and heavy bandwidth or many custom domains may see an increase. Compute prices did not change.
:::

:::guess
Dropping seat fees reads less as a price cut than as moving the axis of revenue. As AI coding tools let small teams run many services, headcount weakens as a measure of value. So billing appears to have shifted away from people toward the number of boxes running and the traffic leaving them. That the official post ties domain pricing to "more teams scale multi-tenant platforms on Render" also seems to reflect a customer type in which one company holds many services and domains. It does put more weight on customers with few seats and heavy traffic, though, and whether that balance is right will be judged by the churn and migrations that follow.
:::

:::fact
The pricing page offers up to $100K in credits to VC-funded startups. The official startups page shows tiers such as $10K for startups with under $1M in funding and $25K for $1M or more, with credits valid for one year from approval. Separately, Render offers up to $10K in migration credits for moving production infrastructure, with Heroku, Railway, Vercel, Fly, AWS, and GCP among the source options. The official docs also include a guide for migrating from Railway. As of 2026-11-02 we could not find a public affiliate program from Render.
:::

:::guess
Render's way of earning appears to be a staircase: gather developers with the free tier, sell boxes when projects reach production, and grow with flat plans and bandwidth as teams expand. Partway up the stairs it goes directly after rivals' customers. Naming competitors among the sources for migration credits and placing Heroku and Railway migration guides in the pricing page's navigation reads as a sign that the company has moved beyond nurturing new developers to winning spend already running in production. Reserved pricing means customers pay for what they leave unused. Render appears to sell that weakness as a strength: a bill you can predict. If AI agents that assume always-running processes become common, the weakness may become less visible.
:::

Render chose neither a dramatic move in-house nor ever finer billing. It built a bundling layer on rented cloud, put a price tag on the box, and took the fee off the seat. Can a company raised on a free tier turn the plain promise of selling non-stop processes at a flat price into a product for the age of agents? A $1.5B valuation is, in part, the price put on that promise.
