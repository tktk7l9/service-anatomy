---
service: "PlanetScale"
title: "PlanetScale Explained: No Free Tier, Postgres from $5 a Month, 3-Node HA Clusters, NVMe Metal and Neki Sharding — How the Vitess Company Prices Databases by Cluster Size"
description: "PlanetScale is a managed database company founded in 2018 by the co-creators of Vitess, the MySQL sharding system built at YouTube. In March 2024 it said it would prioritize profitability and retired its free Hobby plan; in 2025 it added Postgres. Pricing is set by the cluster size you pick, not by usage: single-node Postgres is $5 a month, a 3-node high-availability cluster starts at $15, and Metal on local NVMe starts at $50 (AWS us-east-1 prices). The price list is also published as Markdown and as a read-only Postgres database that AI agents can query. It has a Tokyo region, added Azure in October 2026, and offers sharded Postgres, Neki, in platform preview. This article dissects how PlanetScale works and how its pricing compares with Neon, using the official pricing page, docs, blog, the GitHub API and this site's own observations."
lead: "On March 6, 2024, PlanetScale's CEO wrote that the company did not need to give away endless amounts of free resources in order to keep growing, and announced that the free plan would end a month later. Today its competitor Neon gives away 100 free projects. PlanetScale chose not to meter usage by the second, but to sell fixed-size \"boxes\" by the month. The boxes start at $5 and step up to three nodes, to local NVMe, and to sharding. This article dissects what a MySQL company that came to Postgres is selling, and how."
category: dev-tool
tags: [database, postgres, mysql, vitess, sharding, kubernetes, ai-agent, open-source]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
serviceUrl: "https://planetscale.com/"
expires:
  - date: "2026-12-31"
    claim: "Neki being in platform preview (a Beta Feature with no SLA, not recommended for production), and Postgres read-only regions being \"coming soon\""
# Affiliate link placeholder: no public affiliate or referral program was found for PlanetScale
# (checked 2026-11-02 on planetscale.com/pricing, /startups, the static sitemap and the docs).
# Leave this block commented out unless the owner finds a program.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<planetscale-referral-link>"
#   program: "PlanetScale"
vendor: "PlanetScale, Inc."
origin: "US"
heroTheme: "planetscale"
scores: { product: 4.5, ux: 4.0, tech: 5.0, business: 4.0 }
techStack:
  - layer: "MySQL-compatible sharding layer"
    name: "Vitess (Go, Apache-2.0, CNCF graduated)"
    confidence: confirmed
    evidence: "GitHub's vitessio/vitess (as of 2026-11-02, via the API) describes itself as \"a database clustering system for horizontal scaling of MySQL\": mostly Go, Apache-2.0, 21,399 stars, created on 2013-06-27, latest release v24.0.5 on 2026-10-13. vitess.io states it is \"a Cloud Native Computing Foundation graduated project.\" PlanetScale's home page says Vitess was developed at YouTube by PlanetScale's founders to scale MySQL to petabytes of data on 70,000 nodes across 20 data centers"
    evidenceUrl: "https://github.com/vitessio/vitess"
  - layer: "Postgres operations platform"
    name: "Real Postgres (17, 18) on a proprietary operator + PgBouncer"
    confidence: confirmed
    evidence: "The official blog (2025-07-01) says PlanetScale for Postgres \"uses real Postgres running on our proprietary operator\" and provides automatic failovers, query buffering and connection pooling \"via our proprietary proxy layer, which includes PgBouncer.\" The supported versions page (as of 2026-11-02) lists Postgres 17.11 and 18.6 and says in-place major version upgrades are not currently offered"
    evidenceUrl: "https://planetscale.com/blog/planetscale-for-postgres"
  - layer: "Sharded Postgres (platform preview)"
    name: "Neki (router + sidecars + control plane, real Postgres on every shard)"
    confidence: confirmed
    evidence: "The official blog (2026-09-10, \"Introducing Neki\") says applications connect to a Neki router that speaks the Postgres wire protocol, that each shard is a full Postgres cluster with one primary and at least two replicas across three availability zones, and that \"there is no custom storage engine.\" It describes four parts (routers, sidecars next to every Postgres instance, a control plane and a JSON data topology) and says \"Neki is not a fork of Vitess\""
    evidenceUrl: "https://planetscale.com/blog/introducing-neki"
  - layer: "Storage"
    name: "PlanetScale Metal (local NVMe) / Amazon EBS gp3 / Google Persistent Disk"
    confidence: confirmed
    evidence: "The \"PlanetScale plans\" docs say network-attached storage (Amazon Elastic Block Storage or Google Persistent Disk) autoscales, while Metal uses locally attached NVMe drives, so you choose both compute and storage when you create the database. The Metal page warns that \"the storage for Metal databases does not autoscale.\" The pricing docs say AWS gp3 includes 3,000 IOPS and 125 MiB/s"
    evidenceUrl: "https://planetscale.com/docs/metal"
  - layer: "Database runtime"
    name: "Kubernetes on AWS, Google Cloud and Azure"
    confidence: confirmed
    evidence: "The official blog (2026-10-13, \"PlanetScale is now available on Azure\") says \"PlanetScale runs databases on Kubernetes, and every database pod needs its own IP address on the network,\" and explains how it worked around Azure's cap of 65,536 private IP addresses per virtual network by handing out addresses in /28 blocks of 16"
    evidenceUrl: "https://planetscale.com/blog/planetscale-is-now-on-azure"
  - layer: "Management API and dashboard backend"
    name: "Ruby on Rails"
    confidence: confirmed
    evidence: "The official blog (2022-01-18) says \"At PlanetScale, our backend API is built with Ruby on Rails\" (tests use minitest and FactoryBot, CI runs on Buildkite). In this site's own observation (2026-11-02), responses from auth.planetscale.com and api.planetscale.com carried x-runtime, x-request-id, x-download-options and x-permitted-cross-domain-policies, headers that Rails sets by default"
    evidenceUrl: "https://planetscale.com/blog/how-our-rails-test-suite-runs-in-1-minute-on-buildkite"
  - layer: "Public site and docs"
    name: "React Router on Cloudflare (planetscale.com) / Mintlify on Vercel (docs)"
    confidence: likely
    evidence: "In this site's own observation (2026-11-02), the planetscale.com pricing page returned server: cloudflare and cf-placement: remote-SJC, and its HTML contained window.__reactRouterContext and JavaScript under /assets/ (it appears to be served with React Router's framework mode). app.planetscale.com also returned cf-placement: remote-IAD. /docs returned x-mintlify-client-version and x-vercel-id, and its pages end with \"built and hosted on Mintlify\""
  - layer: "Developer entry points"
    name: "pscale CLI (Go) + database-js (TypeScript) + hosted MCP server"
    confidence: confirmed
    evidence: "On GitHub (as of 2026-11-02, via the API), planetscale/cli is Go, Apache-2.0, 671 stars, and planetscale/database-js is \"a Fetch API-compatible PlanetScale database driver\" in TypeScript, Apache-2.0, 1,208 stars. The official blog (2026-01-29) announced a hosted MCP server authenticated with OAuth that blocks UPDATE or DELETE without a WHERE clause, does not allow TRUNCATE, and asks for human confirmation before DDL"
    evidenceUrl: "https://planetscale.com/blog/introducing-planetscale-mcp-server"
sources:
  - label: "PlanetScale: Pricing"
    url: "https://planetscale.com/pricing"
    accessedAt: "2026-11-02"
  - label: "PlanetScale: pricing.md (agent-friendly price catalog, AWS us-east-1)"
    url: "https://planetscale.com/pricing.md"
    accessedAt: "2026-11-02"
  - label: "PlanetScale: pricing.md?region=ap-northeast (AWS Tokyo prices)"
    url: "https://planetscale.com/pricing.md?region=ap-northeast"
    accessedAt: "2026-11-02"
  - label: "PlanetScale docs: PlanetScale plans"
    url: "https://planetscale.com/docs/planetscale-plans"
    accessedAt: "2026-11-02"
  - label: "PlanetScale docs: PlanetScale Postgres pricing"
    url: "https://planetscale.com/docs/postgres/pricing"
    accessedAt: "2026-11-02"
  - label: "PlanetScale docs: Billing"
    url: "https://planetscale.com/docs/billing"
    accessedAt: "2026-11-02"
  - label: "PlanetScale docs: Single node"
    url: "https://planetscale.com/docs/postgres/cluster-configuration/single-node"
    accessedAt: "2026-11-02"
  - label: "PlanetScale docs: Branching (Postgres)"
    url: "https://planetscale.com/docs/postgres/branching"
    accessedAt: "2026-11-02"
  - label: "PlanetScale docs: Development Environments (Postgres)"
    url: "https://planetscale.com/docs/postgres/development-environments"
    accessedAt: "2026-11-02"
  - label: "PlanetScale docs: Vitess, Neki, and Postgres"
    url: "https://planetscale.com/docs/postgres-vs-vitess"
    accessedAt: "2026-11-02"
  - label: "PlanetScale docs: Deploy requests (Vitess)"
    url: "https://planetscale.com/docs/vitess/schema-changes/deploy-requests"
    accessedAt: "2026-11-02"
  - label: "PlanetScale docs: Supported versions (Postgres)"
    url: "https://planetscale.com/docs/postgres/cluster-configuration/versions"
    accessedAt: "2026-11-02"
  - label: "PlanetScale docs: Selecting a region"
    url: "https://planetscale.com/docs/plans/regions"
    accessedAt: "2026-11-02"
  - label: "PlanetScale docs: PlanetScale Metal"
    url: "https://planetscale.com/docs/metal"
    accessedAt: "2026-11-02"
  - label: "PlanetScale docs: Neki"
    url: "https://planetscale.com/docs/neki"
    accessedAt: "2026-11-02"
  - label: "PlanetScale docs: Migrate from Neon to PlanetScale"
    url: "https://planetscale.com/docs/postgres/imports/neon"
    accessedAt: "2026-11-02"
  - label: "PlanetScale docs: Support"
    url: "https://planetscale.com/docs/support"
    accessedAt: "2026-11-02"
  - label: "PlanetScale docs: Security and compliance"
    url: "https://planetscale.com/docs/security"
    accessedAt: "2026-11-02"
  - label: "PlanetScale: About"
    url: "https://planetscale.com/about"
    accessedAt: "2026-11-02"
  - label: "PlanetScale: Home page"
    url: "https://planetscale.com/"
    accessedAt: "2026-11-02"
  - label: "PlanetScale: PlanetScale for Startups"
    url: "https://planetscale.com/startups"
    accessedAt: "2026-11-02"
  - label: "PlanetScale: Benchmarks"
    url: "https://planetscale.com/benchmarks"
    accessedAt: "2026-11-02"
  - label: "PlanetScale blog: Announcing PlanetScale: The database for developers (2021-05-18)"
    url: "https://planetscale.com/blog/announcing-planetscale-the-database-for-developers"
    accessedAt: "2026-11-02"
  - label: "PlanetScale blog: Sam Lambert appointed new CEO of PlanetScale (2021-07-19)"
    url: "https://planetscale.com/blog/new-ceo-of-planetscale"
    accessedAt: "2026-11-02"
  - label: "PlanetScale blog: How our Rails test suite runs in 1 minute on Buildkite (2022-01-18)"
    url: "https://planetscale.com/blog/how-our-rails-test-suite-runs-in-1-minute-on-buildkite"
    accessedAt: "2026-11-02"
  - label: "PlanetScale blog: PlanetScale forever (2024-03-06)"
    url: "https://planetscale.com/blog/planetscale-forever"
    accessedAt: "2026-11-02"
  - label: "PlanetScale blog: Announcing PlanetScale Metal (2025-03-11)"
    url: "https://planetscale.com/blog/announcing-metal"
    accessedAt: "2026-11-02"
  - label: "PlanetScale blog: Announcing PlanetScale for Postgres (2025-07-01)"
    url: "https://planetscale.com/blog/planetscale-for-postgres"
    accessedAt: "2026-11-02"
  - label: "PlanetScale blog: Announcing Neki (2025-08-11)"
    url: "https://planetscale.com/blog/announcing-neki"
    accessedAt: "2026-11-02"
  - label: "PlanetScale blog: PlanetScale for Postgres is now GA (2025-09-22)"
    url: "https://planetscale.com/blog/planetscale-for-postgres-is-generally-available"
    accessedAt: "2026-11-02"
  - label: "PlanetScale blog: Partnering with Cloudflare to bring you the fastest globally distributed applications (2025-09-24)"
    url: "https://planetscale.com/blog/partnering-with-cloudflare-fastest-applications"
    accessedAt: "2026-11-02"
  - label: "PlanetScale blog: $5 PlanetScale (2025-10-30)"
    url: "https://planetscale.com/blog/5-dollar-planetscale"
    accessedAt: "2026-11-02"
  - label: "PlanetScale blog: $5 PlanetScale is live (2025-11-14)"
    url: "https://planetscale.com/blog/5-dollar-planetscale-is-here"
    accessedAt: "2026-11-02"
  - label: "PlanetScale blog: $50 PlanetScale Metal is GA for Postgres (2025-12-15)"
    url: "https://planetscale.com/blog/50-dollar-planetscale-metal-is-ga-for-postgres"
    accessedAt: "2026-11-02"
  - label: "PlanetScale blog: Introducing the PlanetScale MCP server (2026-01-29)"
    url: "https://planetscale.com/blog/introducing-planetscale-mcp-server"
    accessedAt: "2026-11-02"
  - label: "PlanetScale blog: Introducing Neki (2026-09-10)"
    url: "https://planetscale.com/blog/introducing-neki"
    accessedAt: "2026-11-02"
  - label: "PlanetScale blog: PlanetScale is now available on Azure (2026-10-13)"
    url: "https://planetscale.com/blog/planetscale-is-now-on-azure"
    accessedAt: "2026-11-02"
  - label: "PlanetScale blog: Neki update: $50 Metal, read-only replicas, Azure, and more (2026-10-20)"
    url: "https://planetscale.com/blog/neki-updates-and-preparing-for-production"
    accessedAt: "2026-11-02"
  - label: "GitHub: vitessio/vitess"
    url: "https://github.com/vitessio/vitess"
    accessedAt: "2026-11-02"
  - label: "Vitess official site"
    url: "https://vitess.io/"
    accessedAt: "2026-11-02"
  - label: "GitHub: planetscale/cli"
    url: "https://github.com/planetscale/cli"
    accessedAt: "2026-11-02"
  - label: "GitHub: planetscale/database-js"
    url: "https://github.com/planetscale/database-js"
    accessedAt: "2026-11-02"
---

PlanetScale is a managed database company built by the people who wrote Vitess, the system that splits MySQL horizontally to run very large services. Where [Neon](/en/articles/neon) sells Postgres as "pay for what you use, and nothing while it is idle," PlanetScale sells fixed-size clusters by the month. It dropped its free plan in 2024, became a Postgres company as well as a MySQL company in 2025, and in 2026 put everything from a $5 single node to sharded Postgres, "Neki," on one price list. This article uses official primary sources to work out why that price list is shaped like a staircase.

## Service overview

According to the company's About page, PlanetScale was founded in 2018 by "the co-creators and maintainers of the Vitess open source project." The home page says Vitess was developed at YouTube by PlanetScale's founders to scale MySQL to petabytes of data on 70,000 nodes across 20 data centers, and that it now powers the databases of Slack, HubSpot, GitHub, Block and others. PlanetScale the product was announced on May 18, 2021 in an official blog post titled "The database for developers." On July 19 of the same year, co-founder Jiten Vaidya announced that he was handing the CEO role to Sam Lambert, who had joined as Chief Product Officer nine months earlier.

:::fact
The official blog post "PlanetScale forever" (March 6, 2024, Sam Lambert) announced a decision "to prioritize profitability," parting ways with team members (primarily Sales and Marketing) and retiring the free Hobby plan on April 8, 2024. The same post says "PlanetScale is the main database for companies totaling more than $50B in market cap," "The database space is full of unnecessary hype. We are opting out," and "We do not need to give away endless amounts of free resources in order to keep growing." The "PlanetScale plans" docs (as of 2026-11-02) still state that "PlanetScale does not offer a free plan, previously known as the 'Developer' or 'Hobby' plan. All databases require a paid subscription."
:::

:::fact
The move into Postgres came in steps. According to the official blog, PlanetScale made Metal, which runs on locally attached NVMe, generally available on March 11, 2025; after that launch "an immense number of companies" asked it to support Postgres, and on July 1, 2025 it opened a private preview of PlanetScale for Postgres. That announcement says the company spoke to more than 50 customers of existing Postgres hosts and heard "identical stories of regular outages, poor performance, and high cost." It became generally available on September 22, 2025, with "hundreds of companies" running production workloads. On October 30, 2025, noting that the entry-level configuration had been a 3-node cluster at $30 a month, it announced a non-HA single-node mode with a new $5 "PS-5" node, and on November 14 it finished rolling it out. The same day it cut development branches from $10 to $5 a month. On December 15, 2025 it lowered the starting price of Metal for Postgres from $589 to $50 a month. Sharded Postgres, Neki, was announced on August 11, 2025 and opened as a platform preview on September 10, 2026. On October 13, 2026, Postgres and Neki databases became available in three Azure regions (Vitess is not).
:::

:::fact
According to the pricing page and pricing.md, the agent-friendly catalog (generated 2026-11-02, AWS us-east-1 prices, USD per month), single-node Postgres is $5 for PS-5 (1/16 vCPU, 512 MiB), $10 on Arm or $13 on x86 for PS-10 (1/8 vCPU, 1 GiB), and $50 on Arm for PS-80 (1 vCPU, 8 GiB). A high-availability (HA) cluster with one primary and two replicas is $15 for PS-5, $30 on Arm for PS-10, $286 on Arm for PS-160 (2 vCPU, 16 GiB), and $5,599 on x86 for the largest, PS-2560 (32 vCPU, 256 GiB). Metal on local NVMe (3 nodes) starts at $50 on Arm for M-10 (1 GiB of memory and 10 GiB of storage). For MySQL-compatible Vitess the table lists only x86 configurations, starting at $39 for a 3-node PS-10. Neki has no single-node configuration; each shard is 3 nodes, a PS-10 on Arm is $30, and the smallest router, NKR-0, is $6. The Tokyo (ap-northeast-1) version of the same pricing.md lists single-node PS-5 at $5, PS-10 at $14 on Arm or $16 on x86, and HA PS-10 at $41 on Arm.
:::

:::pull
"We do not need to give away endless amounts of free resources in order to keep growing." A year and a half after writing that, the company built a $5 entry point. That it is $5 and not free says a lot about how it thinks about pricing.
:::

::scorecard

## UX analysis

PlanetScale's UX is tuned less for the first step than for never having to switch providers once you grow. The entry point got cheaper, but it is not free. In exchange, the company keeps promising that you can move from the $5 box to a much larger one without leaving the same screen.

- **$5, not free.** The official blog (2025-11-14) calls single-node databases "production-ready and a cost-effective option for startups, side projects, proof of concepts, or development," and explains that when you grow you raise the size on the same page, and that choosing "Primary + multi-replica" adds two replicas. According to the docs, a payment method is required and prepaid cards are not accepted. A new card triggers a temporary pre-authorization to check that it is valid.
- **A price list where you pick a size.** The monthly price is set by the cluster size you choose; creating or changing a cluster mid-month is prorated to the millisecond. In the docs' example, a database that moves from PS-10 to PS-20 halfway through the month costs half of $39 plus half of $59, or $49. Another example puts one HA production branch on PS-40 and two on PS-20 at $217 a month. The price list shows no way to bring compute cost to zero while a database sits idle, and development branches are billed for the time they run. Spend management is described as an email to administrators at 75% and 100% of a monthly budget.
- **You cannot pick the big boxes at first.** According to the docs, cluster sizes are capped at PS-160 and M-320 until you have paid an invoice of at least $100; larger sizes require contacting the company.
- **A Postgres branch is an empty box.** According to the docs, Postgres branches are "completely isolated databases," and a branch created from the Branches page includes no schema and no data: it is a single-node PS-DEV instance that "begins at $5/month." To get a branch with data you restore one from a backup, and the docs say "we do not recommend using production data for development environments." There is "currently no automated way to merge schema changes between PlanetScale Postgres branches," so you apply changes tested on a development branch to production by hand. Each database allows 100 development branches by default, configurable up to 5,000.
- **Vitess has deploy requests.** On MySQL-compatible Vitess, a "deploy request" ships a development branch's schema diff to production; the docs say it lets you "deploy non-blocking schema changes to your production database with zero downtime" and "undo deployments without losing any data that was written during that time." In the docs' comparison table, deploy requests exist only for Vitess, not for Postgres or Neki. The Git-like schema workflow that made PlanetScale famous is, for now, a MySQL-side experience.
- **Agents can read the price list.** The pricing page publishes the price list as a read-only Postgres database and prints the connection string. pricing.md explains how to use it in Markdown, along with "Agent rules" (do not use prices from memory; if a configuration returns no rows, say it is not sold in that region). The MCP server launched on January 29, 2026 lets Claude, Cursor and other tools read organizations, databases, branches, schemas and Insights, and run queries if permitted. It blocks UPDATE or DELETE without a WHERE clause, does not allow TRUNCATE, and asks for human confirmation before schema-changing DDL.
- **There is a Tokyo region.** The regions docs (as of 2026-11-02) list 12 AWS regions (including Tokyo), 7 Google Cloud regions (including Seoul) and 3 Azure regions. The default for new databases is AWS Ohio (us-east-2). A region cannot be changed once chosen; moving means a dump and restore, which the docs say requires downtime on a production branch.
- **Standard support targets two business days.** According to the docs, Standard support on the self-serve Base plan runs 6am to 6pm Pacific time on weekdays, with a target first response of two business days. Paid Business support answers urgent tickets within an hour, 24x7; Enterprise within 15 minutes.

Taken together, PlanetScale's dashboard and price list are optimized for growing a database that is already in production without taking it down. The $5 entry point is the first step on that long staircase. For someone who only wants to try it out, the friction (a card on file, empty branches, schema changes applied by hand) is greater than on Neon or [Supabase](/en/articles/supabase).

## Tech stack

::techstack

:::fact
According to the official blog (2025-07-01), PlanetScale for Postgres "uses real Postgres running on our proprietary operator," with automatic failovers, query buffering and connection pooling through a proprietary proxy layer that includes PgBouncer. The Azure post of October 13, 2026 says "PlanetScale runs databases on Kubernetes," and explains how it got around Azure's limit of 65,536 private IP addresses per virtual network: each node receives blocks of 16 addresses (/28 prefixes), and a lightweight CNI plugin on the node assigns pod IPs from them. That raised pod IP capacity sixteenfold, to over a million per network. In scale testing, one cluster ran more than 6,700 pods across more than 100 node pools. According to the docs, PlanetScale offers Postgres 17.11 and 18.6; there is no in-place upgrade from 17 to 18, so you create a new database and migrate online.
:::

:::fact
According to the docs, you choose between network-attached storage (Amazon EBS or Google Persistent Disk) and Metal (local NVMe). Network-attached storage autoscales, and AWS gp3 includes 3,000 IOPS and 125 MiB/s. With Metal you choose CPU, memory and disk size together at creation, and storage does not autoscale. The official blog of March 11, 2025 says Metal had been in production with some customers for three months, serving over 5 trillion queries across 5 petabytes of storage, with as much as a 65% drop in p99 query latency and 53% cost savings compared to Amazon Aurora. The post of December 15, 2025 calls the new sizes "the first step towards decoupling CPU and RAM from storage capacity," pairing as little as 1 GiB of memory with storage from 10 GB to 1.2 TB.
:::

:::fact
According to the official blog (2026-09-10), Neki puts a router that speaks the Postgres wire protocol in front of the application. The router has a full Postgres query parser and a distributed query planner, decides which shards should run a query, and combines the results into one stream. Every shard is real Postgres, and "there is no modified storage engine." Shard placement is defined in a JSON "data topology," and schema changes, version upgrades, failovers, imports and resharding run as online workflows. The same post says "you should not run production workloads on Neki during the platform preview" and that some changes "will be breaking." The docs also state that Neki is a "Beta Feature" under PlanetScale's Terms of Service and is not covered by any service level agreement. The update of October 20, 2026 says the team has merged more than 650 changes since the preview opened, that distributed INSERT ... SELECT is about 76x faster than at launch, and that COPY ingest is roughly 5x faster.
:::

:::guess
Lined up together, these suggest that the core of PlanetScale's engineering is to leave the database itself alone and build the operations around it. Vitess puts VTGate in front of real MySQL, Neki puts a router in front of real Postgres, and a Kubernetes operator manages real Postgres clusters. That places the ingenuity at the opposite end from Neon, which rebuilt Postgres from the storage layer up. Metal appears to follow the same idea: it drops network-attached disks for NVMe attached directly to the server, and presumably protects that more fragile local storage by replicating across three nodes.
:::

:::guess
In this site's own observation (2026-11-02), planetscale.com is served through Cloudflare, returns a cf-placement header, and its HTML has the shape of React Router. The dashboard runs on Ruby on Rails behind the scenes, and the docs are hosted on Mintlify. The stack appears to split tools by role: Go (Vitess, the CLI) and Kubernetes at the database core, Rails and TypeScript around it. On September 24, 2025 PlanetScale announced a partnership with Cloudflare and an integration that connects Workers to PlanetScale through Hyperdrive. The division of labor seems to be that PlanetScale sticks to the database and partners with others for the edge and the application runtime.
:::

## Business model

Revenue is the monthly price of the chosen cluster (prorated to the millisecond), plus storage, backups, network transfer and extra replicas beyond the included amounts, plus add-ons. There is no free tier, so revenue starts with the first invoice.

:::fact
According to the "PlanetScale Postgres pricing" docs (as of 2026-11-02), every branch includes 10 GB of disk, backup storage equal to twice the disk size, and outbound network transfer: 100 GB a month on production branches and 10 GB on single-node PS-5 and development branches, with a regional rate beyond that. Backup storage above the included amount costs $0.023 per GB per month, and traffic over private connections costs a flat $0.01 per GB regardless of region. Network-attached storage is billed "per database instance," so in an HA cluster the primary and both replicas each carry a volume of the configured size. The public API endpoint the pricing docs point to returned a storage rate of $0.125 per GB per month for Virginia and $0.15 for Tokyo on 2026-11-02. The plans page lists SSO as an add-on at $199 a month and user-scheduled backups at $0.023 per GB per month, and says BAAs (HIPAA business associate agreements) are included on the Base plan. The security page says SOC 1 Type 2 and SOC 2 Type 2+HIPAA reports are available through the Trust Center.
:::

:::fact
According to the "PlanetScale plans" docs, the Enterprise plan offers either a dedicated single-tenant environment or "PlanetScale Managed," which runs in the customer's own AWS, Google Cloud or Azure account. According to the pricing page, with Managed the customer pays infrastructure costs directly to the cloud provider and pays PlanetScale a percentage of that cost; the page says that "for companies with existing AWS or GCP agreements, this option sometimes ends up less expensive than running on PlanetScale's infrastructure." Customers who need a PCI DSS certified service provider are also pointed to Enterprise. PlanetScale can be bought through AWS Marketplace and Google Cloud Marketplace too. The startups page says "Clusters start at $5 per month" and offers "pay-as-you-go or annual pricing," but no free-credit program like Neon's appears on the official pages this site checked.
:::

:::fact
The official "Benchmarks" page (as of 2026-11-02), based on an internal benchmarking tool called "Telescope," lists a 3-node HA M-320 (4 vCPUs and 32 GB of RAM each) at about 18,000 QPS for $1,349 a month, Amazon Aurora at about 12,000 QPS for $1,754, Neon Lakebase at about 12,500 QPS for $2,768, and Supabase at about 5,000 QPS for $2,144. These are PlanetScale's own measurements, and the page invites readers to write to benchmarks@planetscale.com if they see any mistakes in the methodology or cost calculations.
:::

:::guess
Retiring the free plan in 2024 and launching a $5 single node in 2025 look contradictory, but they appear to come from the same idea. A free user generates only cost; a $5 user is a customer with a card on file whose revenue grows every time they size up. The staircase of single node, HA, Metal and Neki is presumably shaped to move customers up a step within the same company each time they grow. PlanetScale's blog keeps saying you will never need a painful migration, which reads as selling the cost of switching itself as a reason to stay.
:::

:::guess
The shape has a weak side too. Without a free tier, word of mouth from students and hobbyists, and the throwaway databases AI agents create in bulk, are likely to go to services with generous free tiers such as Neon. PlanetScale does not appear to chase that segment; it seems to have chosen to earn from large, expensive boxes for customers like Cursor, Block and Intercom, where an outage is a very public event. Naming Neon and Supabase in its own benchmarks, and publishing a guide for migrating Postgres from Neon in its official docs, look like a strategy to win databases that grew up on someone else's free tier at the moment they get big. Making the price list queryable with SQL reads as an investment in handing accurate prices to the agents that are asked to compare providers.
:::

PlanetScale sells itself not as a place to start a database cheaply, but as a place where a database will not get into trouble when it grows. A company that dropped its free tier built a $5 entry point, a MySQL company built Postgres, and for the limits of a single machine it has Neki. The steps on its price list are that promise rewritten as prices. The open question is how many companies will climb to the top step once Neki leaves preview.
