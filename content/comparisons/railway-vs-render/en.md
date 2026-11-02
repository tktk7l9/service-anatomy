---
title: "Railway vs Render — Pay for What You Use, or Pay for the Box You Reserved? Pricing, Free Tiers, Regions, and Databases from the Official Pages"
description: "A comparison of Railway and Render based only on both companies' official pages (read on 2026-11-02). Railway is usage billing from $5 a month with usage included; Render adds fixed-size instance prices to plans at $0 and $25 a month. We line up per-CPU conversions, free tiers, region changes, zero-downtime deploys, how much of a database each one runs for you, and request time limits, then read where the gap between a company that went down to its own racks and one that stayed on the cloud shows up."
lead: "When choosing a PaaS where connecting GitHub is enough to run an app, Railway and Render are often the last two standing. Their feature lists look alike, but how they build a bill is close to opposite. Railway meters the CPU and memory that actually ran, by the second; Render sets a monthly price from the size of the box you reserved. Each publishes a comparison page about the other, and each offers a guide to migrating away from the other. We reread both companies' official pages on November 2, 2026 to work out who each one suits, including what their own comparison pages leave out."
slugA: "railway"
slugB: "render"
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
expires:
  - date: "2026-11-30"
    claim: "What the two comparison pages say (Railway's last updated 2026-10-30, Render's dated 2026-05-06) and Render's migration credits. Comparison pages change often, so check at month end"
  - date: "2026-12-31"
    claim: "Render Sandboxes being in public beta, and both companies' sandbox pricing"
sources:
  - label: "Railway official: Pricing"
    url: "https://railway.com/pricing"
    accessedAt: "2026-11-02"
  - label: "Railway docs: Pricing Plans"
    url: "https://docs.railway.com/pricing/plans.md"
    accessedAt: "2026-11-02"
  - label: "Railway docs: Free Trial"
    url: "https://docs.railway.com/pricing/free-trial.md"
    accessedAt: "2026-11-02"
  - label: "Railway docs: Cost Control"
    url: "https://docs.railway.com/pricing/cost-control.md"
    accessedAt: "2026-11-02"
  - label: "Railway docs: Serverless"
    url: "https://docs.railway.com/deployments/serverless.md"
    accessedAt: "2026-11-02"
  - label: "Railway docs: Regions"
    url: "https://docs.railway.com/deployments/regions.md"
    accessedAt: "2026-11-02"
  - label: "Railway docs: Scaling"
    url: "https://docs.railway.com/deployments/scaling.md"
    accessedAt: "2026-11-02"
  - label: "Railway docs: Healthchecks"
    url: "https://docs.railway.com/deployments/healthchecks.md"
    accessedAt: "2026-11-02"
  - label: "Railway docs: Deployment Reference (deployment pausing)"
    url: "https://docs.railway.com/deployments/reference.md"
    accessedAt: "2026-11-02"
  - label: "Railway docs: Volumes Reference"
    url: "https://docs.railway.com/volumes/reference.md"
    accessedAt: "2026-11-02"
  - label: "Railway docs: Databases (What Railway manages)"
    url: "https://docs.railway.com/databases.md"
    accessedAt: "2026-11-02"
  - label: "Railway docs: Backups"
    url: "https://docs.railway.com/volumes/backups.md"
    accessedAt: "2026-11-02"
  - label: "Railway docs: Public Networking Specs and Limits"
    url: "https://docs.railway.com/networking/public-networking/specs-and-limits.md"
    accessedAt: "2026-11-02"
  - label: "Railway docs: Domains (custom domains by plan)"
    url: "https://docs.railway.com/networking/domains/working-with-domains.md"
    accessedAt: "2026-11-02"
  - label: "Railway docs: CDN"
    url: "https://docs.railway.com/networking/cdn.md"
    accessedAt: "2026-11-02"
  - label: "Railway docs: Railway Metal"
    url: "https://docs.railway.com/platform/railway-metal.md"
    accessedAt: "2026-11-02"
  - label: "Railway docs: Railway vs Render (last updated 2026-10-30)"
    url: "https://docs.railway.com/platform/compare-to-render.md"
    accessedAt: "2026-11-02"
  - label: "Railway official blog: Incident Report: May 19, 2026 - GCP Account Suspension"
    url: "https://blog.railway.com/p/incident-report-may-19-2026-gcp-account-outage"
    accessedAt: "2026-11-02"
  - label: "Railway official blog: Railway raises $100M Series B (2026-01-22)"
    url: "https://blog.railway.com/p/series-b"
    accessedAt: "2026-11-02"
  - label: "Latent Space: Railway: The Agent-Native Cloud — Jake Cooper (2026-05-20)"
    url: "https://www.latent.space/p/railway"
    accessedAt: "2026-11-02"
  - label: "Render official: Pricing"
    url: "https://render.com/pricing"
    accessedAt: "2026-11-02"
  - label: "Render Changelog: Updated plans for Render workspaces (2026-04-23)"
    url: "https://render.com/changelog/updated-plans-for-render-workspaces.md"
    accessedAt: "2026-11-02"
  - label: "Render docs: Deploy for Free"
    url: "https://render.com/docs/free.md"
    accessedAt: "2026-11-02"
  - label: "Render docs: Regions"
    url: "https://render.com/docs/regions.md"
    accessedAt: "2026-11-02"
  - label: "Render docs: Scaling Render Services"
    url: "https://render.com/docs/scaling.md"
    accessedAt: "2026-11-02"
  - label: "Render docs: Deploying on Render"
    url: "https://render.com/docs/deploys.md"
    accessedAt: "2026-11-02"
  - label: "Render docs: Persistent Disks"
    url: "https://render.com/docs/disks.md"
    accessedAt: "2026-11-02"
  - label: "Render docs: High Availability for Render Postgres"
    url: "https://render.com/docs/postgresql-high-availability.md"
    accessedAt: "2026-11-02"
  - label: "Render docs: Render Postgres Recovery and Backups"
    url: "https://render.com/docs/postgresql-backups.md"
    accessedAt: "2026-11-02"
  - label: "Render docs: Render vs Vercel (request and cron limits)"
    url: "https://render.com/docs/render-vs-vercel-comparison.md"
    accessedAt: "2026-11-02"
  - label: "Render official: Render vs Railway (2026-05-06)"
    url: "https://render.com/articles/render-vs-railway.md"
    accessedAt: "2026-11-02"
  - label: "Render docs: Migrate from Railway to Render"
    url: "https://render.com/docs/migrate-from-railway.md"
    accessedAt: "2026-11-02"
  - label: "Render official blog: Root Cause Analysis for Render's Extended Service Disruption on 3/26/24 (2024-03-29)"
    url: "https://render.com/blog/root-cause-analysis-extended-service-disruption-3-26-24"
    accessedAt: "2026-11-02"
  - label: "Render official blog: How Render Services Stayed Up During the AWS October Outage (2025-12-02)"
    url: "https://render.com/blog/how-render-services-stayed-up-during-the-aws-october-outage"
    accessedAt: "2026-11-02"
  - label: "Render official blog: Render raises $100M at $1.5B valuation (2026-02-17)"
    url: "https://render.com/blog/series-c-extension"
    accessedAt: "2026-11-02"
---

[Railway](/en/articles/railway) and [Render](/en/articles/render) are both PaaS products that bring up web apps and databases from a GitHub repository or Docker image. Railway's own comparison page lists deployment methods, preview environments, rollbacks, cron, SSH, and IaC as things they share. On a feature table alone, the gap is small. What differs is the unit of billing and who owns the foundation. This article reads both companies' official pages as of November 2, 2026 and lays out the numbers and conditions as written. We did not subscribe to and measure either service; we are cross-checking public information. Amounts are in US dollars, and we could not find a Japanese yen price list from either company. Pricing changes, so check the official pages before signing up.

## How the bills are built

:::fact
Below, Railway's pricing page and docs and Render's pricing page (all read on 2026-11-02) are rearranged by item. Neither price list states a tax treatment that we could find.

| Item | Railway | Render |
| --- | --- | --- |
| Basic shape | Plan fee counts toward usage; you pay usage beyond it | Plan fee and compute are separate; compute is a fixed monthly price per instance |
| Individuals | Hobby $5/month ($5 of usage included) | Hobby $0/month (compute extra) |
| Teams | Pro $20/month ($20 of usage included) | Pro $25/month (compute extra), Scale $499/month |
| Seats | Unlimited on Pro | Unlimited on Pro and above |
| CPU | $20 per vCPU per month ($0.00000772 per second) | Included in the plan |
| Memory | $10 per GB per month ($0.00000386 per second) | Included in the plan |
| Egress | $0.05 per GB | Hobby 5GB, Pro 25GB, Scale 1TB included, then $0.15 per GB |
| Builds | Free | Hobby 500, Pro 1,000, Scale 5,000 minutes included, then $5 per 1,000 |
| Disk | Volumes $0.15 per GB per month | Persistent disks $0.25 per GB per month, Postgres storage $0.30 per GB |
| Custom domains | Hobby 2 per service, Pro 20 per service (more on request for Pro) | Hobby 2, Pro 15, Scale 25 included, then $0.25 per domain per month |

Railway's pricing page shows one custom domain on the trial and none on Free. Render bills compute prorated to the second, so a stopped instance is not billed for the time it is off. Railway quotes per-second rates.
:::

:::fact
Render's plans changed on April 23, 2026. Until then, Professional cost $19 per member per month and Organization $29 per member per month. Those seat fees gave way to today's flat prices, and all workspaces had moved by August 1. In the same change, the bandwidth included in Hobby and Pro was reduced and overages moved from 100GB increments to per-GB.
:::

Comparing the cost of the same size used flat out for a whole month shows how the two relate. The table below is our own calculation, applying Railway's monthly conversion ($20 per vCPU, $10 per GB) to Render's instance specs. Render's 512MB is treated as 0.5GB.

:::fact
| Spec | Render (fixed monthly) | Railway (conversion at constant 100% use) |
| --- | --- | --- |
| 0.5 CPU, 512MB | $7 | $15 |
| 1 CPU, 2GB | $25 | $40 |
| 2 CPU, 4GB | $85 | $80 |
| 2 CPU, 8GB | $135 | $120 |
| 4 CPU, 8GB | $175 | $160 |
| 4 CPU, 16GB | $225 | $240 |
| 8 CPU, 32GB | $450 | $480 |
:::

:::guess
The Railway column is the ceiling for using a whole box flat out. Most web apps spend much of their time waiting and run at far lower CPU use, so Railway's actual bill appears likely to come in under this table. On the other hand, if you keep a small 0.5 or 1 CPU box under heavy load, Render's fixed price is cheaper. For 1 CPU and 2GB, the crossover is around sustained average use above roughly 60% of the box ($25 of $40). From 2 CPU and 4GB up, the two are close, and in that band the choice seems to come down to operating conditions rather than unit prices.
:::

Here is a closer-to-real estimate: a team running one web app and one Postgres, serving 100GB a month, with 10GB in the database. The usage assumptions are ours and do not guarantee an actual bill.

:::guess
- Render (Pro) comes to the $25 plan, $25 for a `1c-2g` web service, $19 for a `0.5c-1g` Postgres, $11.25 for 75GB of bandwidth overage, and about $3 for 10GB of storage. That totals around $83 a month and appears unlikely to move much as load changes.
- Railway (Pro), with the app averaging 0.2 vCPU and 0.5GB and the database averaging 0.1 vCPU and 0.5GB, comes to $6 of CPU, $10 of memory, $5 of egress, and $1.50 of volume, or $22.50. Since $20 is included in the plan, the bill works out to $22.50 a month. If averages rise to 0.8 vCPU and 1.8GB for the app and 0.5 vCPU and 1GB for the database, it reaches the low $60s.
- For a small always-on personal project, Render starts at $13 a month on Hobby ($7 web plus $6 Postgres). Railway may fit within the $5 Hobby plan.
- For high-traffic services, the threefold gap in egress rates ($0.05 vs $0.15) matters. It applies only beyond what Render's plan includes, but serving 1TB (1,000GB) a month works out to about $146 of bandwidth on Render Pro against $50 on Railway, a difference of about $100.
:::

:::fact
The spending controls differ too. According to Railway's docs, you can set usage limits, and exceeding the hard limit takes your workloads offline. Render's docs describe a spend limit for build pipeline minutes. Compute is set by the number of boxes, so its monthly amount is known in advance, although on Render too, bandwidth overages and instances added by autoscaling increase the bill.
:::

## What you can try for free

:::fact
The two "frees" have entirely different shapes.

| Item | Railway | Render |
| --- | --- | --- |
| On signup | One-time $5 credit for 30 days (no credit card needed) | Hobby workspace with no time limit |
| Ongoing free allowance | Free plan after the trial ($1 per month) | 750 free web service hours per month |
| Free specs | Up to 0.5GB and 1 vCPU per service, 1 project, 3 services | 0.1 CPU, 512MB |
| What stops it | Usage beyond the credit; optional Serverless sleeps after 5 minutes without outbound traffic | Spins down after 15 minutes without inbound traffic; about one minute to wake on the next request |
| Databases | A normal service, with up to 0.5GB of volume | Postgres 1GB expires in 30 days; Key Value loses data on restart |
| Custom domains | None on Free | Available even on free web services |
| Static sites | Served as a service | Free to deploy (counts against bandwidth and build minutes) |

According to Railway's docs, during periods of high demand Pro and above are prioritized, and builds and deployments on Free and, more rarely, Hobby may be queued. Running deployments and data are not affected. Render says a free web service may be restarted at any time and states plainly not to use free instances for production.
:::

:::guess
For learning or prototyping where a public URL is all you need, Render's free tier appears the easier to understand. It sleeps but wakes, so you can leave things there with no time limit within 750 hours a month, as long as you design around the database vanishing after 30 days. Railway's Free has only $1 a month, so in practice the decision after the 30-day trial seems to be whether to move to the $5 Hobby plan. For someone who wants to keep something running cheaply all the time, that $5 is the more straightforward path.
:::

## Deploys and scaling

:::fact
| Item | Railway | Render |
| --- | --- | --- |
| Sizing | Grows automatically up to plan limits | Choose a plan per service |
| Horizontal scaling | Set replica count manually (up to 6 on Hobby, 42 on Pro) | Manual, or autoscaling against CPU and memory targets on Pro and above |
| Changing region | Any time; services with volumes are down during migration | Not possible for existing services and databases; recreate and migrate |
| Multiple regions | Replicas can be placed in different regions | Create a separate service per region; private networks are per region |
| Zero-downtime deploys | Achieved by configuring health checks | On by default |
| With a disk attached | Brief downtime; volumes and replicas cannot be combined | No zero-downtime deploys; no multiple instances |
| Build limit | 40 minutes on Hobby, 90 on Pro | 120 minutes |
| HTTP request limit | 15 minutes if data keeps flowing; 5 minutes with no data | Up to 100 minutes |
| Scheduled jobs | Cron schedule; Free only during the trial | Cron jobs (up to 12 hours per run), prorated by the second |
| Long-running work | A long-lived service | Background workers, Workflows (up to 24 hours per task) |
:::

:::guess
For a web app whose load peaks are hard to predict, Railway's design of growing to the limit by itself appears the more relaxed. Render makes you choose thresholds, but it has real autoscaling that adds instances based on utilization. The split seems to be Render if you want replicas added and removed automatically, Railway if you are happy for one instance to grow. For work where a single request runs long, such as waiting on generative AI or building reports, Render's 100 minutes helps. On Railway you would likely lean toward an asynchronous design.
:::

## How much of the database is run for you

:::fact
According to Render's official pages, paid Postgres instances run continuous point-in-time recovery, reaching back 3 days on Hobby and 7 days on Pro and above. High availability uses a standby in a different zone of the same region, with automatic failover when the primary is unavailable for 30 seconds. New Key Value instances run Valkey 8, and paid ones persist to disk. MySQL and MongoDB are things you run yourself as services.

According to Railway's docs, it maintains PostgreSQL, MySQL, Redis, and MongoDB as templates and handles provisioning and security patches. Backups, point-in-time recovery (PostgreSQL, MySQL), high availability, and connection pooling are things "the user turns on," after which they run automatically. Backups are kept for 6 days (daily), 27 days (weekly), and 89 days (monthly). Railway does not publish a database uptime SLA and points to sales for one. Render's pricing page lists contractual uptime SLAs under Enterprise.
:::

:::guess
The database choice reads as a difference in how much is looked after by default. Render's Postgres follows an RDS-like idea: choose an instance and recovery comes with it. Railway puts more kinds of database on the same canvas and has you turn on protection as needed. Railway seems the easier path for MySQL or MongoDB, and Render the better fit if you run only Postgres and want your recovery procedure settled early.
:::

## Different foundations, and regions as seen from Japan

:::fact
Railway has four regions, California, Virginia, Amsterdam, and Singapore, all listed under the Railway Metal name in its docs, which describe Metal as hardware it owns and operates. Render has five: Oregon, Ohio, Virginia, Frankfurt, and Singapore. According to its official blog, it runs its own Kubernetes on foundational AWS services such as EC2, S3, and ELB, and also has services on Google Cloud. Neither company lists a Japanese region, and Singapore is the only choice in Asia for both.

In our own observation (2026-11-02), railway.com returned server: railway-hikari and x-railway-edge: hnd1, and render.com returned server: cloudflare and a cf-ray ending in NRT. Both appear to have answered from an edge near Tokyo, but that concerns the delivery entrance. The app itself runs in a region such as Singapore.
:::

:::fact
Both companies publish incident reports. On May 19, 2026, an automated Google Cloud action wrongly suspended Railway's production account and the platform went down for about eight hours. Workloads on its own Metal and on AWS kept running, but because the control plane API that distributes routing tables lived on Google Cloud, requests began returning 404 across all regions. On March 26, 2024, a code change of Render's own restarted all workloads, and full recovery took about 2 hours 40 minutes for paid services and about 3 hours 50 minutes for free ones. The causes differ and the two cannot be compared on equal terms. In the AWS outage of October 2025, Render officially reported that some builds and deploys slowed while running services stayed up.
:::

:::pull
Railway holds its own cost of goods and carries the operational weight that comes with it. Render leaves its cost of goods to others and, in exchange, owns no data center.
:::

## How to read each other's comparison pages

Both official comparison pages are useful, but what they say about the other side needs discounting. On the date of this article we found the following mismatches. Neither suggests bad intent; they look like examples of competitor information falling behind updates.

:::fact
- Railway's comparison page (last updated 2026-10-30) lists a fixed monthly fee per team member among Render's costs. According to Render's pricing page and Changelog, seat fees ended in April 2026 and seats are unlimited on Pro and above.
- Render's comparison article (2026-05-06) describes Railway's databases as unmanaged containers relying on manual or scheduled backups. Railway's current docs say high availability, point-in-time recovery, and connection pooling can be turned on.
- The same Render article says Railway's CDN was disabled as of May 2026. Railway's current docs say CDN caching is available on all plans at no additional cost (off by default).
- The same Render article says Railway free-tier deploys are rejected from 8 AM to 8 PM local time. Railway's docs say Free and, more rarely, Hobby deployments may be queued during high load. We could not confirm the time-of-day claim on Railway's official pages.
- Railway's comparison page puts Serverless sleep at 10 minutes while its Serverless docs say 5. Numbers do not line up even across one company's pages, so this article uses the value from the dedicated feature page.
:::

## Which fits whom

From here on, this is our own reading of the tables and conditions above. It does not rank the two; it shows which conditions matter for which use.

:::guess
- For personal projects where you want an always-on API or bot for a few dollars a month, Railway appears the better fit. An app that mostly waits may fit within the $5 Hobby plan.
- For learning or a portfolio where you want a public URL without spending money, Render's free tier is the easier to grasp, provided you accept the one-minute wake and the 30-day database limit.
- For a small SaaS that wants to see several services and databases on one screen, Railway's canvas and usage billing seem a good match. A hard limit protects the budget, but your design must allow for workloads stopping when it is reached.
- For companies that want a nearly fixed bill every month, or organizations that approve spending in advance, Render's fixed prices appear suitable. High-traffic services should estimate the egress difference separately.
- Teams that need automatic replica scaling, Postgres point-in-time recovery, requests longer than an hour, or SSO, SCIM, and HIPAA early will find more of those conditions in Render's table. In that case, Scale at $499 a month comes into view.
- If you want MySQL or MongoDB alongside Redis with little effort, Railway's templates are likely easier.
- If you may change regions later or want the same service in several regions, Railway's settings take less work. On Render, choosing a new region means rebuilding.
- If you serve users in Japan and want low latency, Singapore is the nearest for both. For services with many dynamic responses, assume neither has a Tokyo region and include domestic infrastructure in the comparison.
:::

## Why the pricing has a different shape

:::fact
As covered in our [Railway article](/en/articles/railway), Railway declared in December 2023 that it would move from Google Cloud to its own servers. Founder Jake Cooper said in a Latent Space interview that margins on Metal are around 70%. In its February 2026 announcement, Render presents long-running processes, private networking, WebSockets, Postgres, Redis, and IaC as the foundation for AI agents.
:::

:::guess
Per-second usage billing appears to be an easy price to offer for a company whose costs are fixed in its own racks. Idle compute belongs to no customer in particular. Owned equipment costs the same used or unused, so the more customers' loads are layered to raise utilization, the more margin remains. For Render, which rents nodes from clouds and places customers' boxes on them, pricing by the size a customer reserves seems closer to the shape of its own costs. Render selling the predictability of fixed prices and Railway selling the absence of waste read as each company's cost structure turned inside out.

The two are also converging, though. Render meters cron jobs and Workflows by usage and bills Sandboxes on CPU time used. Railway has minimum fees that act almost like a fixed price. Both now list execution environments for agents on their price sheets, and the next round of competition seems likely to happen not over boxes for web apps but over where the short-lived code run by agents lives.
:::

Railway and Render sell the same "push and it runs" with different promises. Railway promises you will not pay for what you did not use. Render promises next month's bill will look like this month's. What a buyer should look at is how much of the time the app spends waiting, and whether a swinging bill or extra setup is the thing to avoid. Once that is settled, which rows of the two tables matter follows naturally.
