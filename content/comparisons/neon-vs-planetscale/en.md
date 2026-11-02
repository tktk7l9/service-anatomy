---
title: "Neon vs PlanetScale: Serverless Postgres with a Free Tier vs Fixed-Size Postgres Clusters from $5 — Pricing, Branching, High Availability and Regions Compared"
description: "A comparison of Neon and PlanetScale based only on the two companies' official pages (read on 2026-11-02). Neon gives 100 free projects and bills paid usage from $0.106 per CU-hour, with compute dropping to zero when idle. PlanetScale has no free tier and charges a monthly price per cluster: single-node Postgres from $5 a month, a 3-node high-availability cluster from $15. The article also compares what a branch contains, how each builds high availability, the ceilings as you grow, whether there is a Tokyo region, and how each talks about the other, and explains which kind of workload fits which."
lead: "When you pick a managed Postgres, Neon and PlanetScale often end up side by side. Both sell \"real Postgres\" together with branching, but their bills are built in almost opposite ways. Neon measures the time your compute runs and charges nothing for compute while it is idle. PlanetScale sets a monthly price by the size of the box you pick and recommends a production-ready setup from the start. This article rereads both companies' official pages on November 2, 2026, lines up free tiers, pricing, branching, high availability, regions and how each describes the other, and works out who each one suits."
slugA: "neon"
slugB: "planetscale"
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
expires:
  - date: "2026-11-30"
    claim: "The Neon Lakebase figures on PlanetScale's Benchmarks page (about 12,500 QPS and $2,768 a month) and the limits of Neon's Free plan (1 GB per project, 20 GB per account, 5 GB of transfer). Comparisons and limits change often, so check at month end"
  - date: "2026-12-31"
    claim: "PlanetScale's Neki being in platform preview (a Beta Feature with no SLA), and Postgres read-only regions being \"coming soon\""
sources:
  - label: "Neon: Pricing (last updated 2026-10-31)"
    url: "https://neon.com/pricing"
    accessedAt: "2026-11-02"
  - label: "Neon docs: Plans"
    url: "https://neon.com/docs/introduction/plans"
    accessedAt: "2026-11-02"
  - label: "Neon docs: Regions"
    url: "https://neon.com/docs/introduction/regions"
    accessedAt: "2026-11-02"
  - label: "Neon docs: Branching"
    url: "https://neon.com/docs/introduction/branching"
    accessedAt: "2026-11-02"
  - label: "Neon docs: Scale to Zero"
    url: "https://neon.com/docs/introduction/scale-to-zero"
    accessedAt: "2026-11-02"
  - label: "Neon docs: The lakebase architecture"
    url: "https://neon.com/docs/introduction/architecture-overview"
    accessedAt: "2026-11-02"
  - label: "Neon docs: Postgres version support"
    url: "https://neon.com/docs/postgresql/postgres-version-support"
    accessedAt: "2026-11-02"
  - label: "PlanetScale: Pricing"
    url: "https://planetscale.com/pricing"
    accessedAt: "2026-11-02"
  - label: "PlanetScale: pricing.md (AWS us-east-1 prices)"
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
  - label: "PlanetScale docs: Branching (Postgres)"
    url: "https://planetscale.com/docs/postgres/branching"
    accessedAt: "2026-11-02"
  - label: "PlanetScale docs: Vitess, Neki, and Postgres"
    url: "https://planetscale.com/docs/postgres-vs-vitess"
    accessedAt: "2026-11-02"
  - label: "PlanetScale docs: Supported versions (Postgres)"
    url: "https://planetscale.com/docs/postgres/cluster-configuration/versions"
    accessedAt: "2026-11-02"
  - label: "PlanetScale docs: Selecting a region"
    url: "https://planetscale.com/docs/plans/regions"
    accessedAt: "2026-11-02"
  - label: "PlanetScale docs: Neki"
    url: "https://planetscale.com/docs/neki"
    accessedAt: "2026-11-02"
  - label: "PlanetScale docs: Migrate from Neon to PlanetScale"
    url: "https://planetscale.com/docs/postgres/imports/neon"
    accessedAt: "2026-11-02"
  - label: "PlanetScale docs: Using the Neon serverless driver"
    url: "https://planetscale.com/docs/postgres/connecting/neon-serverless-driver"
    accessedAt: "2026-11-02"
  - label: "PlanetScale: Benchmarks"
    url: "https://planetscale.com/benchmarks"
    accessedAt: "2026-11-02"
  - label: "PlanetScale blog: PlanetScale forever (2024-03-06)"
    url: "https://planetscale.com/blog/planetscale-forever"
    accessedAt: "2026-11-02"
  - label: "PlanetScale blog: $5 PlanetScale is live (2025-11-14)"
    url: "https://planetscale.com/blog/5-dollar-planetscale-is-here"
    accessedAt: "2026-11-02"
  - label: "PlanetScale blog: PlanetScale for Postgres is now GA (2025-09-22)"
    url: "https://planetscale.com/blog/planetscale-for-postgres-is-generally-available"
    accessedAt: "2026-11-02"
  - label: "PlanetScale blog: Introducing Neki (2026-09-10)"
    url: "https://planetscale.com/blog/introducing-neki"
    accessedAt: "2026-11-02"
---

[Neon](/en/articles/neon) and [PlanetScale](/en/articles/planetscale) both sell "real Postgres" together with a branch-based development workflow. Put their price lists side by side, though, and even the rows are different. Neon's rows are units of usage, "CU-hour," "GB-month" and "branch-month"; PlanetScale's rows are cluster model numbers, "PS-5," "PS-10" and "M-10." This article reads both companies' official pages on November 2, 2026 and lays out the numbers and conditions exactly as written. This site has not subscribed to either service and is not describing hands-on use; it is cross-checking the public price lists and documentation. Prices change, so always check the official pages before signing up.

## How the pricing is built

:::fact
The table below rearranges, item by item, what is written on Neon's pricing page (last updated 2026-10-31) and on PlanetScale's pricing page, pricing.md and pricing docs (all read on 2026-11-02). All amounts are in US dollars, and PlanetScale prices are for AWS Northern Virginia (us-east-1). Both offer custom Enterprise contracts; the table shows standard self-serve pricing.

| Item | Neon | PlanetScale |
| --- | --- | --- |
| What you get free | The Free plan is $0 a month and permanent (not a trial), with no credit card. 100 projects, each with 100 CU-hours a month, 1 GB of storage (up to 20 GB across the account) and 5 GB of transfer | No free plan (retired on April 8, 2024). Every database requires a paid subscription and a card on file |
| Billing unit | Compute in "CU-hours" (1 CU is about 4 GB of RAM plus CPU and SSD), storage in "GB-months." Metered hourly, no monthly minimum. Invoices under $0.50 are not collected | A monthly price per cluster model. Creating or changing a cluster is prorated to the millisecond |
| Smallest compute | Launch is $0.106 per CU-hour, Scale $0.222. No CU-hours accrue while compute is suspended | Single-node PS-5 (1/16 vCPU, 512 MiB) is $5 a month; PS-10 (1/8 vCPU, 1 GiB) is $10 a month on Arm |
| Smallest high-availability setup | Storage is spread across multiple availability zones on every plan ("high availability without standbys") | Three nodes: one primary and two replicas. $15 a month for PS-5, $30 for PS-10 on Arm |
| Storage | $0.35 per GB-month on paid plans, no cap | 10 GB included with each cluster. Beyond that, billed per instance; the public API rate is $0.125 per GB-month in Virginia (an HA cluster pays for three) |
| Restoring the past | History window of 6 hours on Free, up to 7 days on Launch, up to 30 days on Scale. Instant restore is $0.20 per GB-month | Automatic backups every 12 hours. Backup storage up to twice the disk size included, then $0.023 per GB-month |
| Outbound transfer | 5 GB per project on Free; 500 GB per project included on paid plans, then $0.10 per GB | 100 GB a month on production branches, 10 GB on PS-5 and development branches, then a regional rate |
| Development branches | 10 per project included on Free and Launch, 25 on Scale. Extras are $1.50 per branch-month (prorated hourly) | A Postgres development branch (PS-DEV) is $5 a month each, billed only while it runs. Default limit of 100 |
| Spend notifications | Email at 80% and 100% of a monthly threshold on Launch and Scale | Email to administrators at 75% and 100% of a monthly budget |
| Postgres versions | 14 to 18 (18.6, 17.11, 16.15, 15.19 and 14.24 as of August 2026) | 17.11 and 18.6 |
| Programs for getting started | Up to $100k in credits for startups, an Agent Plan for agent platforms, and an open-source program | The startups page says "Clusters start at $5 per month," but no free-credit program could be found |
:::

:::fact
Neon's pricing page defines 1 CU as "~4 GB RAM + CPU + SSD," while PlanetScale's model numbers state vCPU and memory separately (PS-10 is 1/8 vCPU and 1 GiB). PlanetScale's docs explain that a fractional vCPU is "the minimum number of cycles dedicated to your workload," and that spare compute on the shared machines can be used at no additional charge. The two companies' "CPU" is not the same yardstick, so the table lines up unit prices; it does not mean the performance is equal.
:::

:::guess
Read as a whole, Neon's pricing appears shaped so that "the longer it sits idle, the cheaper it is," and PlanetScale's so that "the longer it runs, the better the deal." A PlanetScale single node costs the same whether it runs around the clock or not, while a Neon bill grows with running time even at the same size. Which one is cheaper is presumably decided mostly by how many hours a day the database is actually serving queries.
:::

## The cost of starting small

:::fact
Neon's pricing page lists typical monthly costs for representative workloads. "Intermittent load" (140 CU-hours and 1 GB; scales to zero when idle and runs at 0.25 to 2 CU when active) is $15 a month on Launch; "Low load" (190 CU-hours and 5 GB; scale-to-zero disabled, mostly at 0.25 CU) is $22; "Medium load" (720 CU-hours and 10 GB) is $80. On the Free plan, running out of CU-hours or transfer suspends compute for the rest of the month, and going over 1 GB of storage blocks writes, but none of these limits delete data. Neon does not pause Free projects for inactivity: compute scales to zero after five minutes and comes back on the next query, typically within a few hundred milliseconds.

On PlanetScale, single-node PS-5 is $5 a month and PS-10 is $10 on Arm, including 10 GB of storage and, for PS-5, 10 GB of transfer a month. The official blog (2025-11-14) calls single-node databases "production-ready" and "a cost-effective option for startups, side projects, proof of concepts, or development." A 3-node high-availability cluster is $15 a month for PS-5 and $30 for PS-10 on Arm. According to the docs, billing applies at the database level, and sizes larger than PS-160 and M-320 are unavailable until you have paid an invoice of at least $100.
:::

:::fact
The gap is large when you have many small databases. In an example on Neon's pricing page, 100 tenants on Launch, each with its own project running at 0.25 CU for about an hour a day and storing 150 MB, use about 750 CU-hours and 15 GB, roughly $85 a month in total, or about $0.85 per tenant. On PlanetScale, giving each of 100 databases the smallest single node costs $5 × 100, or $500 a month (this site's arithmetic, assuming storage and transfer stay within the included amounts). The other way around, for one database that runs 24 hours a day, Neon's "Low load" estimate is $22 a month, while a PlanetScale PS-10 single node is $10.
:::

:::guess
For uses with "many databases that mostly sleep," such as personal prototypes, classes, and databases AI agents create and throw away, Neon's free tier and usage-based billing appear to have an overwhelming advantage. For a small production app that serves queries all day, every day, PlanetScale's flat single-node price is likely easier to predict and can come out cheaper. Note, though, that a PlanetScale single node is one machine with no replica, and its protection against failure is built differently from Neon's (see the next sections).
:::

## A branch means different things

:::fact
According to Neon's docs, a branch is "a copy-on-write clone of your data" that can be created from the current state or any point in the past, and by default it includes all of the parent branch's data. Creating a branch adds no load to the parent, and writes are saved as deltas. For sensitive data you can also create schema-only branches. Managed Better Auth users and sessions, Object Storage, Functions and the AI Gateway branch together with the data. According to the pricing page, a child branch's storage starts at $0 and grows only with what you write.

According to PlanetScale's Postgres docs, branches are "completely isolated databases," and there is no data replication between them. A branch created from the Branches page is a single-node development branch (PS-DEV, from $5 a month) with no schema and no data; to get a branch with data you restore one from a backup (the cluster size, and so the cost, is inherited from the parent production branch). There is "currently no automated way to merge schema changes between PlanetScale Postgres branches." The product comparison table describes Postgres as having "Schema and data branches," and lists "deploy requests," which review schema changes and ship them to production, only for MySQL-compatible Vitess.
:::

:::guess
The same word "branch" appears to mean cutting out a point in time of your data on Neon, and something closer to adding one more database on PlanetScale Postgres. If you want production-like data in every preview environment, or want an agent to roll back to an earlier state, Neon's branches look like the better fit. On PlanetScale Postgres, a branch presumably serves as an empty container to run migrations against, with data handled explicitly by restoring a backup. For teams whose policy is to keep production data out of development, that can actually be clearer.
:::

## High availability, and the ceiling as you grow

:::fact
According to Neon's docs, "The lakebase architecture," compute nodes are standard Postgres; in the storage layer a transaction commits once a quorum of Safekeepers acknowledges the WAL via the Paxos protocol, a pageserver reconstructs the page versions needed, and object storage holds long-term history. The pricing page says every plan includes storage spread across multiple availability zones ("high availability without standbys"). Compute is capped at 2 CU (8 GB of RAM) on Free, 16 CU (64 GB) on Launch, and 16 CU of autoscaling or fixed sizes up to 56 CU (224 GB) on Scale. Scale-to-zero works only for computes up to 16 CU; larger ones stay always on. Read replicas are available on every plan as separate computes that count toward CU-hours.

According to PlanetScale's docs, a high-availability Postgres cluster places one primary and two replicas across three availability zones. A single node can be moved to HA from the dashboard, which adds two replicas. The largest model is PS-2560 (32 vCPU and 256 GiB, $5,599 a month for 3 nodes on x86), and Metal on local NVMe is also available. For workloads beyond a single cluster there is sharded Postgres, "Neki," but according to the docs Neki is a "Beta Feature" in platform preview and is not covered by any SLA, and the official blog (2026-09-10) says "you should not run production workloads on Neki during the platform preview."
:::

:::guess
High availability appears to be where the two design philosophies differ most clearly. Neon treats compute as disposable and leaves durability to consensus in the storage layer, building availability without standby machines. That design presumably trades a wait of a few hundred milliseconds to wake suspended compute for costs that track usage. PlanetScale builds availability from three Postgres instances that are always running plus automatic failover, and charges a monthly price for that many machines. As a home for workloads that outgrow a single machine, whether PlanetScale's Neki reaches general availability is likely to be a major dividing line in this comparison.
:::

## Regions, and distance from Japan

:::fact
Neon's "Regions" docs (as of 2026-11-02) list eight AWS regions (N. Virginia, Ohio, Oregon, Frankfurt, London, Singapore, Sydney and São Paulo), with no Tokyo. Its three Azure regions are deprecated, new projects cannot be created there, and Free projects inactive for 90 days or more are subject to deletion as of October 5, 2026. Backend products such as Object Storage, Functions and the AI Gateway are available first in four regions, including Singapore. A project's region cannot be changed after creation.

PlanetScale's "Selecting a region" docs list 12 AWS regions (including Tokyo), 7 Google Cloud regions (including Seoul) and 3 Azure regions. A region cannot be changed after creation; moving requires a dump and restore. The Tokyo version of pricing.md lists single-node PS-5 at $5 a month, PS-10 at $14 on Arm and HA PS-10 at $41 on Arm, higher than Virginia ($10 and $30). The storage rate was also $0.15 per GB-month in Tokyo, against $0.125 in Virginia.
:::

:::guess
For applications running on servers in Japan, only PlanetScale lets you keep the database in the same country. Tokyo prices are somewhat higher, but removing a cross-border round trip from every query is likely to matter more the more queries an app makes. Using Neon from Japan, the nearest region is Singapore, and the design presumably assumes the application runtime sits in the same region.
:::

:::pull
Neon's price list puts no price on the time a database sits idle. PlanetScale's price list puts a price on never going down.
:::

## How each talks about the other

PlanetScale mentions Neon several times on its official pages. As far as this site could check on the day of reading, Neon's sitemap has no comparison page about PlanetScale. PlanetScale's statements should be read with the discount due to a competitor measuring on its own terms.

:::fact
- PlanetScale's "Benchmarks" page lists a 3-node HA M-320 (4 vCPU, 32 GB) at about 18,000 QPS for $1,349 a month, and Neon Lakebase at about 12,500 QPS for $2,768. These come from PlanetScale's internal tool, and the page invites corrections to its methodology or cost calculations at benchmarks@planetscale.com.
- PlanetScale's docs include "Migrate from Neon to PlanetScale," a no-downtime migration using Postgres logical replication. The guide tells readers to note the warning in Neon's dashboard that enabling logical replication "will sever all existing connections and restart all computes." Neon's own docs say that logical replication from Neon keeps compute active while subscribers are connected, so the database does not scale to zero.
- PlanetScale's docs explain how to use Neon's serverless driver (@neondatabase/serverless) with PlanetScale Postgres, recommending it for platforms that cannot keep TCP connections or a connection pool (Netlify Functions, Deno Deploy, and Cloudflare Workers without Hyperdrive). For Vercel and AWS Lambda, it recommends the standard pg driver with PgBouncer.
- The general-availability announcement for PlanetScale for Postgres (2025-09-22) links, among its customer migration stories, to a post titled "Why We Migrated from Neon to PlanetScale."
:::

:::guess
PlanetScale's benchmark compares 3-node high-availability configurations that run all the time, and appears not to measure the "pay nothing while idle" usage that Neon is good at. PlanetScale's claim is more likely to hold for large, constantly busy databases; for small, intermittent ones, the monthly figures in that table probably do not apply as they stand. On the other hand, the fact that PlanetScale officially supports Neon's driver and maintains a migration guide from Neon reads as a sign that it wants to be where databases that grew up on Neon go once they get big.
:::

## Which one fits which use

What follows is this site's reading of the tables and conditions above. It does not rank the two; it shows which conditions matter for which use.

:::guess
- If you want to try things without spending money, or use Postgres for a class or a personal prototype, Neon appears to be the easier fit. You can create up to 100 projects without a card, and data is not deleted when you hit a limit.
- If an AI agent or your own product creates many databases, one per user, Neon's pricing shape looks better suited. PlanetScale bills per database, at a minimum of $5 a month each.
- If your workflow depends on production-like data in every preview environment or on rolling back to a past point in time, Neon's copy-on-write branches look more convenient.
- If you want to start a production app that serves queries all day at a small, fixed monthly price, PlanetScale's single node ($5 to $10 a month) is straightforward, and you can move to a 3-node HA cluster from the same dashboard when you need to.
- If your users are in Japan and you want the database in the country, PlanetScale, with its Tokyo region, is the candidate. Neon's nearest region is Singapore.
- Teams with constantly heavy load, nearing the limits of a single machine, or wanting MySQL (Vitess) and Postgres from one vendor will probably find PlanetScale's Metal, Neki and Vitess options decisive. Neki, however, is not yet meant for production.
- If you need to stay on Postgres 14 to 16, Neon supports them. PlanetScale Postgres offers only 17 and 18, and a major-version upgrade means migrating to a new database.
- If you want auth, object storage and functions to branch along with the database, Neon, which puts them on one price list, looks like the fit. PlanetScale focuses on the database and partners with others, such as Cloudflare, for the application runtime.
:::

## Why the pricing is shaped differently

:::fact
As covered in [this site's Neon article](/en/articles/neon), Neon is part of Databricks, and its pricing page describes it as "a complete set of cloud backend primitives built around Lakebase Postgres... from Databricks." According to its docs, Neon separates compute from storage, and compute can scale down, go idle and restart at any time. PlanetScale announced on its official blog on March 6, 2024 a decision "to prioritize profitability," retired its free plan, and wrote, "We do not need to give away endless amounts of free resources in order to keep growing." On November 14, 2025 it announced it had finished rolling out $5 single-node databases across its global fleet.
:::

:::guess
For Neon, which separated compute from storage, idle compute appears to belong to no one and to cost very little. That presumably makes it possible to put no price on idle time, hand out a wide free tier, and grow it as an entry point to Databricks' products. PlanetScale keeps three Postgres instances actually running and reserves local NVMe for each customer to promise performance. Since its costs scale with the size of the box, setting the monthly price by box size looks like the natural shape. Dropping the free tier reads as the result of putting profit first in a structure where even an unused box costs money.

The two are also converging. Neon offers fixed computes up to 56 CU and an always-on setting, and PlanetScale has moved toward people who start small with a $5 entry point and millisecond proration within the month. The boundary between them appears to be forming between the many small databases that agents create and the large databases that have grown too important to stop.
:::

Neon and PlanetScale sell the same Postgres on different promises. Neon promises that you will not pay for the time you did not use. PlanetScale promises that you will not have to switch providers when you grow. What a buyer should look at is how much of the day the database sleeps, and how many databases they will end up owning. Once those answers are clear, which rows of the two tables to read follows naturally.
