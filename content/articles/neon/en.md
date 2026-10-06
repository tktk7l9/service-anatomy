---
service: "Neon"
title: "80% of Databases Created by AI Agents, Acquired by Databricks, a Free Plan of 100 Projects, and a Public Repository Down to One Commit a Month Since August 2025 — Dissecting Neon, Which Rebuilt Its Free Tier for Agents Instead of People"
description: "Neon, the serverless Postgres that separated storage from compute and sold branching and scale-to-zero, announced on May 14, 2025 that it was joining Databricks and now calls itself a \"backend for apps and agents\" built around \"Lakebase Postgres.\" Pricing is usage-based with no minimum: Launch is $0.106 per CU-hour and storage is $0.35 per GB-month. The free plan gives 100 projects, each with 100 CU-hours and 1 GB. In April 2026 it deprecated its Azure regions, and in September it made Functions, Object Storage and an AI Gateway generally available. Meanwhile the Apache-2.0 repository on GitHub has seen roughly one commit a month since August 2025. The article dissects all of this from the official pricing page, docs, blog, Databricks press releases, the GitHub API, and this site's own observations."
lead: "Neon's company page shows two numbers in large type: \"15,000,000 Postgres databases turned on every day\" and \"80% of databases are deployed by automated agents.\" A free tier designed for people creating databases by hand needed one or two projects. In a world where agents create more than one a second, it needs a hundred. This article dissects what a company acquired by Databricks is trying to sell as it raises the free plan to 100 projects, retreats from Azure, and lets its public repository go quiet."
category: dev-tool
tags: [database, postgres, serverless, rust, ai-agent, open-source, baas, databricks]
publishedAt: "2026-10-06"
updatedAt: "2026-10-06"
lastVerified: "2026-10-06"
serviceUrl: "https://neon.com/"
# Affiliate link placeholder: Neon has no public affiliate program (checked 2026-10-06 on
# neon.com/pricing and the docs; only a Startup Program, an Open Source Program and an
# Agent Plan exist). Leave this block commented out unless the owner finds a program.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<neon-referral-link>"
#   program: "Neon"
vendor: "Neon, LLC (a subsidiary of Databricks, Inc.)"
origin: "US"
heroTheme: "neon"
scores: { product: 4.5, ux: 4.5, tech: 4.5, business: 3.5 }
techStack:
  - layer: "Storage engine (Pageserver / Safekeeper)"
    name: "Rust (neondatabase/neon, Apache-2.0)"
    confidence: confirmed
    evidence: "GitHub's neondatabase/neon (as of 2026-10-06, via the API) is mostly Rust (about 11.2 MB, with about 2.9 MB of Python and 0.8 MB of C), Apache-2.0, 23,173 stars, created on 2021-03-26. The README says \"Compute nodes are stateless PostgreSQL nodes backed by the Neon storage engine,\" which consists of the Pageserver (\"Scalable storage backend for the compute nodes\") and the Safekeepers (a redundant WAL service that stores WAL durably until the pageserver has processed it and uploaded it to cloud storage). The official blog of 2022-07-08 is titled as being about an open-source, multi-tenant storage engine for Postgres written in Rust"
    evidenceUrl: "https://github.com/neondatabase/neon"
  - layer: "Compute"
    name: "PostgreSQL (14–18, unmodified query engine)"
    confidence: confirmed
    evidence: "The official architecture overview states \"Each Lakebase Postgres compute node is a standard Postgres instance\" and \"From the perspective of the query engine, nothing about Postgres itself is rewritten or replaced.\" The version policy page says \"Neon currently supports Postgres 14, 15, 16, 17, and 18. Neon supports the five latest major Postgres versions, in alignment with the official PostgreSQL version support policy.\" The official blog of July 2022 said \"we don't want to compete with Postgres itself or maintain a fork\" and that Postgres changes would be minimal and hopefully pushed upstream"
    evidenceUrl: "https://neon.com/docs/introduction/architecture-overview"
  - layer: "WAL durability and consensus"
    name: "Safekeepers quorum (Paxos) + S3-compatible object storage"
    confidence: confirmed
    evidence: "The official architecture overview states \"Safekeepers are responsible for one thing: durable replication of WAL\" and \"A transaction is considered committed once a quorum of safekeepers has acknowledged the WAL record via the Paxos protocol,\" and describes object storage as where the database keeps its durable history. The official blog of 2026-08-24, \"WAL + S3,\" describes the same design"
    evidenceUrl: "https://neon.com/docs/introduction/architecture-overview"
  - layer: "Autoscaling"
    name: "NeonVM + autoscaler-agent on Kubernetes (Go, neondatabase/autoscaling)"
    confidence: confirmed
    evidence: "The official autoscaling algorithm guide states \"Every 5 seconds, the autoscaler-agent checks the 1-minute load average from the virtual machine (VM) running your database\" and \"every 100ms the vm-monitor checks memory usage from Postgres.\" GitHub's neondatabase/autoscaling describes itself as \"Vertical autoscaling for a fleet of postgres instances running in a Kubernetes cluster,\" is mostly Go under Apache-2.0, and says NeonVM orchestrates VMs as custom resources"
    evidenceUrl: "https://neon.com/docs/guides/autoscaling-algorithm"
  - layer: "Backend platform (GA 2026-09)"
    name: "Functions (Node.js 24) + Object Storage (S3-compatible) + AI Gateway (Databricks Foundation APIs) + Managed Better Auth"
    confidence: confirmed
    evidence: "The official blog of 2026-09-17, \"The Neon backend is GA,\" states that Functions are Node.js 24 HTTP handlers that run on the same branch and in the same region as the database, that Object Storage is S3-compatible buckets that branch with the project, and that the AI Gateway gives one API to frontier and open-weight models powered by Databricks Foundation APIs. The pricing page says Managed Better Auth is included on the Free plan for up to 60,000 MAU"
    evidenceUrl: "https://neon.com/blog/neon-backend-is-ga"
  - layer: "Cloud and regions"
    name: "AWS (8 regions; Azure regions deprecated 2026-04-07)"
    confidence: confirmed
    evidence: "The official Regions page (as of 2026-10-06) lists eight AWS regions (us-east-1, us-east-2, us-west-2, eu-central-1, eu-west-2, ap-southeast-1, ap-southeast-2, sa-east-1) and says the three Azure regions (eastus2, westus3, gwc) \"are deprecated. You can no longer create new projects in Azure regions.\" The deprecation guide dates the deprecation to April 7, 2026 with a migration deadline of October 5, 2026, and points users who must stay on Azure to Databricks Lakebase. There is no Tokyo region"
    evidenceUrl: "https://neon.com/docs/introduction/regions"
  - layer: "Login and public site"
    name: "Keycloak (console.neon.tech) / Next.js on Vercel (neon.com) / Cloudflare (console)"
    confidence: likely
    evidence: "This site's own observation (2026-10-06) found console.neon.tech's app redirecting to /realms/prod-realm/protocol/openid-connect/auth (the shape of a Keycloak authorization endpoint) and responding with server: cloudflare. neon.com returned server: Vercel and x-nextjs-prerender: 1 with more than 300 _next/static references in its HTML. To non-browser User-Agents it returned the page as text/markdown and declared /docs/llms.txt and /.well-known/mcp/server-card.json in its link header"
  - layer: "Entry points for AI clients"
    name: "Neon MCP Server (remote, mcp.neon.tech) + Neon Local (Docker proxy) + Data API"
    confidence: confirmed
    evidence: "The official Neon MCP Server docs describe the remote server at https://mcp.neon.tech/mcp that lets AI assistants operate Neon projects, and state \"Always review and authorize actions requested by the LLM before execution\" and \"Never connect MCP agents to production databases.\" GitHub's neondatabase/mcp-server-neon is TypeScript under MIT with 648 stars and was pushed on 2026-10-04"
    evidenceUrl: "https://neon.com/docs/ai/neon-mcp-server"
sources:
  - label: "Neon: Pricing"
    url: "https://neon.com/pricing"
    accessedAt: "2026-10-06"
  - label: "Neon docs: Plans"
    url: "https://neon.com/docs/introduction/plans"
    accessedAt: "2026-10-06"
  - label: "Neon docs: Agent Plan"
    url: "https://neon.com/docs/introduction/agent-plan"
    accessedAt: "2026-10-06"
  - label: "Neon: About us (timeline and company figures)"
    url: "https://neon.com/about-us"
    accessedAt: "2026-10-06"
  - label: "Neon blog: Neon and Databricks (2025-05-14)"
    url: "https://neon.com/blog/neon-and-databricks"
    accessedAt: "2026-10-06"
  - label: "Databricks press release: Databricks Agrees to Acquire Neon (2025-05-14)"
    url: "https://www.databricks.com/company/newsroom/press-releases/databricks-agrees-acquire-neon-help-developers-deliver-ai-systems"
    accessedAt: "2026-10-06"
  - label: "Databricks press release: Databricks Grows >80% YoY, Surpasses $7B Revenue Run-Rate (2026-08-13)"
    url: "https://www.databricks.com/company/newsroom/press-releases/databricks-grows-80-yoy-surpasses-7b-revenue-run-rate-scales"
    accessedAt: "2026-10-06"
  - label: "Neon docs: Neon and Lakebase"
    url: "https://neon.com/docs/introduction/neon-and-lakebase"
    accessedAt: "2026-10-06"
  - label: "Neon docs: Architecture overview (Lakebase Postgres)"
    url: "https://neon.com/docs/introduction/architecture-overview"
    accessedAt: "2026-10-06"
  - label: "Neon blog: Architecture decisions in Neon (2022-07-08)"
    url: "https://neon.com/blog/architecture-decisions-in-neon"
    accessedAt: "2026-10-06"
  - label: "Neon docs: Autoscaling algorithm"
    url: "https://neon.com/docs/guides/autoscaling-algorithm"
    accessedAt: "2026-10-06"
  - label: "Neon docs: Postgres version policy"
    url: "https://neon.com/docs/postgresql/postgres-version-policy"
    accessedAt: "2026-10-06"
  - label: "Neon blog: Neon's New Pricing, Explained: Usage-Based, No Minimum (2025-08-14)"
    url: "https://neon.com/blog/new-usage-based-pricing"
    accessedAt: "2026-10-06"
  - label: "Neon blog: Reducing cost of compute by 25% as we scale on Databricks (2025-11-03)"
    url: "https://neon.com/blog/major-compute-price-reduction-on-neon"
    accessedAt: "2026-10-06"
  - label: "Neon blog: Neon gives you 100 projects for free, with 1 GB of Postgres storage each (2026-10-02)"
    url: "https://neon.com/blog/neon-free-plan-1-gb-per-project"
    accessedAt: "2026-10-06"
  - label: "Neon blog: The Neon backend is GA (2026-09-17)"
    url: "https://neon.com/blog/neon-backend-is-ga"
    accessedAt: "2026-10-06"
  - label: "Neon blog: Neon for Agent Platforms (2026-05-22)"
    url: "https://neon.com/blog/neon-for-agent-platforms"
    accessedAt: "2026-10-06"
  - label: "Neon blog: Replit App History powered by Neon branches (2025-05-21)"
    url: "https://neon.com/blog/replit-app-history-powered-by-neon-branches"
    accessedAt: "2026-10-06"
  - label: "Neon docs: Regions"
    url: "https://neon.com/docs/introduction/regions"
    accessedAt: "2026-10-06"
  - label: "Neon docs: Azure regions deprecation"
    url: "https://neon.com/docs/import/azure-regions-deprecation"
    accessedAt: "2026-10-06"
  - label: "Neon docs: SOC 2 compliance"
    url: "https://neon.com/docs/security/soc2-compliance"
    accessedAt: "2026-10-06"
  - label: "Neon docs: Neon MCP Server"
    url: "https://neon.com/docs/ai/neon-mcp-server"
    accessedAt: "2026-10-06"
  - label: "GitHub: neondatabase/neon (README, releases, commit history)"
    url: "https://github.com/neondatabase/neon"
    accessedAt: "2026-10-06"
  - label: "GitHub Issue #12945: Plans for PostgreSQL 18 support? (user discussion of the public repository's state)"
    url: "https://github.com/neondatabase/neon/issues/12945"
    accessedAt: "2026-10-06"
  - label: "GitHub: neondatabase/autoscaling"
    url: "https://github.com/neondatabase/autoscaling"
    accessedAt: "2026-10-06"
---

Neon is a serverless Postgres that separates storage from compute, shrinks to zero when idle, and clones databases the way Git clones branches. Where [Supabase](/en/articles/supabase) bundled auth and storage around Postgres into a complete backend, Neon was the company that rebuilt Postgres itself. Since Databricks acquired it in May 2025, the rebuilt Postgres has been called "Lakebase Postgres," and auth, functions, storage and an AI gateway have been added around it, so that Neon now claims the same "complete backend" as Supabase.

## Service overview

According to the timeline on the official About page, the first commit was in March 2021, the technical preview on June 15, 2022, open access in December 2022, a $46 million raise in August 2023, general availability on April 15, 2024, and the Databricks acquisition on May 14, 2025. The About page names no founders; the official blog post "Neon and Databricks" of May 14, 2025 is signed by Nikita Shamgunov, Heikki Linnakangas and Stas Kelvich. The terms of service name the contracting party as "Databricks, Inc., the parent company of Neon, LLC."

:::fact
According to the Databricks press release (San Francisco, May 14, 2025), Databricks agreed to acquire Neon citing that "over 80 percent of the databases provisioned on Neon were created automatically by AI agents rather than by humans." CEO Ali Ghodsi said "The era of AI-native, agent-driven applications is reshaping what a database must do," and the release describes Neon as "founded in 2021 by a team of experienced database engineers and Postgres contributors." Neither the press release nor Neon's blog states a price (TechCrunch and CNBC reported about $1 billion, which this site could not confirm from a primary source). Neon's post of the same day says "In 2024, something shifted: AI-native apps started taking off... within a few months, over 80% of databases were being created by AI agents rather than humans," and "Neon isn't going anywhere... the entire team will stay." A Databricks press release of August 13, 2026 reports that the company crossed a $7 billion revenue run-rate with more than 80% year-over-year growth and "Surpasses $100M revenue run-rate for Lakebase, Databricks' serverless Postgres database built for AI agents."
:::

:::fact
According to the official pricing page (as of 2026-10-06), there are three plans, Free, Launch and Scale, and Launch and Scale are usage-based with no monthly base fee. Free gives 100 projects, each with 100 CU-hours of compute a month and 1 GB of storage, computes up to 2 CU (8 GB RAM), 10 branches, a 6-hour restore window, Managed Better Auth up to 60,000 MAU, 5 GB of Object Storage, and 1 million Function invocations a month. Launch is $0.106 per CU-hour, $0.35 per GB-month of storage, computes up to 16 CU (64 GB RAM), a 7-day restore window, extra branches at $0.002 per branch-hour, and 500 GB of network transfer per project before $0.10 per GB. Scale is $0.222 per CU-hour, computes up to 56 CU (224 GB RAM), 1,000+ projects, 25 branches, a 30-day restore window, SLAs, HIPAA and private networking. The pricing page's "typical spend" is $15 a month on Launch (intermittent load, 1 GB) and $701 a month on Scale (high load, 100 GB). A CU is "approximately 1 vCPU and 4 GB of RAM," and no CU-hours are consumed while compute is suspended.
:::

:::pull
"15,000,000 Postgres databases turned on every day." "80% of databases are deployed by automated agents." The two numbers on the company page explain why the free plan became 100 projects.
:::

::scorecard

## UX analysis

Neon's UX has been reworked around the work of agents rather than people. The shape of the free plan, the absence of a minimum, and the way branches are used all assume "create many, leave most of them idle."

- **The free plan is not one big project but a hundred small ones**. The official blog (2026-10-02) says "The Neon Free plan assumes the agent workflow: lots of projects, lots of experiments, most of them idle most of the time," explaining why each of the 100 projects gets its own 100 CU-hours and 1 GB. It also notes the scale: "we're creating new projects at a rate of more than one per second!" The pricing FAQ gives the example of a database running at 1 CU for about 3 hours a day using roughly 90 CU-hours a month, within the free allowance.
- **No minimum**. The official blog (2025-08-14) moved pricing to "usage-based, no minimum," and a December addendum says "We are no longer enforcing the $5 minimum in our paid plans - if you consume $3, that's what you'll be charged." The post of November 3, 2025 cut Launch from $0.14 to $0.106 per CU-hour and Scale from $0.26 to $0.222, "up to 25% cheaper across plans," citing the move onto Databricks' infrastructure.
- **Branches become the unit of undo**. According to the docs, "A branch is a copy-on-write clone of your data. You can create a branch from a current or past state." The official blog (2025-05-21) describes Replit's App History, where every checkpoint the Replit Agent creates gets a Neon branch at that exact timestamp so code and database can be rolled back together.
- **Stopping is the default; not stopping costs money**. According to the docs, compute suspends after 5 minutes of inactivity and reactivates "within a few hundred milliseconds." On the Free plan this cannot be changed; paid plans can disable scale-to-zero for an always-active compute. Restore "performs a complete overwrite of the database timeline, not a merge," and the pre-restore state is kept in a backup branch.
- **MCP control, with warnings alongside**. The MCP Server docs explain how to let an AI assistant create projects and run queries, and in the same breath say "Always review and authorize actions requested by the LLM before execution" and "Never connect MCP agents to production databases."
- **No Tokyo region, and Azure is gone**. The regions page lists eight AWS regions (Virginia, Ohio, Oregon, Frankfurt, London, Singapore, Sydney, São Paulo); Singapore is the nearest to Japan. The three Azure regions were deprecated on April 7, 2026 with a migration deadline of October 5, 2026. The deprecation guide explains that "Most Neon projects run in AWS regions, so concentrating there lets us ship features and reliability improvements faster," and points anyone who must keep data in Azure to Databricks Lakebase.

The flip side of agent-first design is fewer handholds for people. A hundred free projects leave the user responsible for knowing which experiment belongs to which agent, and the Azure retreat is answered with "the same technology exists on the Databricks side." Whether you are a person or an agent changes how this product looks.

## Tech stack

::techstack

:::fact
According to the official architecture overview (as of 2026-10-06, titled "The lakebase architecture"), Lakebase Postgres "splits the system into two independent layers: compute and storage" connected by a stream of WAL records, and "Each Lakebase Postgres compute node is a standard Postgres instance... nothing about Postgres itself is rewritten or replaced." On the storage side, the Pageserver materializes page versions from base pages and WAL, the Safekeepers are "responsible for one thing: durable replication of WAL," and "A transaction is considered committed once a quorum of safekeepers has acknowledged the WAL record via the Paxos protocol." Object storage is "where Lakebase Postgres keeps the durable history of the database." The same page says "Neon and Databricks run the same database, Lakebase Postgres, on the same infrastructure. What surrounds it differs: on Neon it anchors a complete backend for apps and agents, while Databricks integrates it with the rest of the Data Intelligence Platform." The official blog of July 8, 2022 (Heikki Linnakangas) framed the design as an open-source, multi-tenant storage engine written in Rust and said "we don't want to compete with Postgres itself or maintain a fork," with minimal changes that could be pushed upstream.
:::

:::fact
According to the official autoscaling algorithm guide, "Every 5 seconds, the autoscaler-agent checks the 1-minute load average from the virtual machine (VM) running your database," "every 100ms the vm-monitor checks memory usage from Postgres," and the goals are to keep memory at or below 75% of allocated RAM and to fit the frequently accessed working set within the compute cache (up to 75% of RAM). GitHub's neondatabase/autoscaling (Go, Apache-2.0) is "Vertical autoscaling for a fleet of postgres instances running in a Kubernetes cluster," where NeonVM orchestrates VMs as custom resources, and it notes that "NeonVM and Autoscaling are not expected to work outside Linux x86" and that external use is not officially supported. According to the official blog (2026-09-17), the Neon backend is generally available: Functions run Node.js 24 HTTP handlers on the same branch and in the same region as the database, Object Storage is S3-compatible and branches with the project, and the AI Gateway reaches frontier and open-weight models through Databricks Foundation APIs. The same post says the Electric team, who built PGlite and the Electric sync engine, is now part of Neon.
:::

:::fact
GitHub's neondatabase/neon (as of 2026-10-06, via the API) is mostly Rust under Apache-2.0 with 23,173 stars, 1,108 forks and 570 open issues, and is not archived. The latest release tags are release-proxy-8853 (July 29, 2025), release-compute-9073 (July 28, 2025) and release-9129 (July 25, 2025), with no releases since. Commit counts were 298 in July 2025, 1 in August, 5 in September, 1 in October, and one each in January, February, March, May and August 2026; the most recent commit is "docs: fix typo" on August 31, 2026. Issue #12945, "Plans for PostgreSQL 18 support?", opened on September 16, 2026, notes that main as of August 31, 2026 builds only Postgres 14 to 17; in the comments one user writes that development appears to have moved to closed source after the Databricks acquisition, and another is attempting a fork with a Postgres 18 port and a repaired CI. No official reply from Neon appears on the issue. By contrast, neondatabase/mcp-server-neon in the same organization was pushed on October 4, 2026.
:::

:::guess
Putting the state of the public repository next to the docs' "supports Postgres 14 through 18" and the roadmap's "Postgres 18 is now generally available on Neon," it appears that Neon's cloud runs Postgres 18 while that code has not reached the Apache-2.0 repository since July 2025. The natural reading is not that development stopped but that where it is published changed. Databricks' press release described the deal in terms of Neon's open-source serverless Postgres, and the About page now links to Databricks job openings rather than naming Neon's founders. A quiet public repository and a product name drifting toward "Lakebase Postgres" appear to reflect the technical source of truth moving from Neon to Databricks. That is a change for users who chose Neon because it was open source, and a separate matter from the experience of users of the cloud service.
:::

:::guess
This site observed console.neon.tech's login redirecting to the shape of a Keycloak authorization endpoint, and neon.com returning text/markdown to non-browser User-Agents while declaring llms.txt and an MCP server card in its link header. As with [Fly.io](/en/articles/fly-io), the public site itself is built to be read by AI agents, consistent with the product's "for agents" claim. The core of the stack, a Rust storage engine and VM autoscaling on Kubernetes, is unchanged, and the Functions, Object Storage and AI Gateway added in 2026 appear to be the layers needed to catch up with the "complete backend" that [Supabase](/en/articles/supabase) built first.
:::

## Business model

Revenue is usage-based compute (CU-hours) and storage (GB-months), with no monthly base fee. The free tier is wide, and the move to paid happens through one of three doors: not stopping, going bigger, or restoring further back.

:::fact
According to the official pricing page and docs (as of 2026-10-06), on paid plans "you pay only for what you use; there's no minimum monthly fee." Upgrading unlocks disabling scale-to-zero (Launch and up), larger computes (from Free's 2 CU to Launch's 16 CU and Scale's 56 CU), longer restore windows (6 hours to 7 days to 30 days), and higher project and branch limits. Scale alone adds SLAs, HIPAA, private networking, IP allow rules and SOC 2 report access. The AI Gateway charges model providers' list prices with no markup, drawn from prepaid credits. The "Agent Plan" is for "AI agent platforms that provision thousands of databases," with unlimited projects, compute at the Launch rate of $0.106 per CU-hour, and up to $25,000 in initial credits. There is also a Startup Program with up to $100,000 in credits and an Open Source Program. The official blog of May 22, 2026 names Replit and Retool among its biggest agent customers.
:::

:::fact
According to the official "SOC 2 compliance" docs, Neon has completed audits for SOC 2 Type 1 and Type 2, SOC 3, ISO 27001 and ISO 27701, and adheres to GDPR and CCPA. HIPAA is offered as part of the Scale plan. The security contact is security@neon.tech and the privacy contact is privacy@databricks.com. Databricks' Lakebase product page says it is "SOC 2 and HIPAA compliant with support for PCI-DSS and HITRUST on Azure and AWS (limited)" with "99.99% uptime SLAs for production apps."
:::

:::guess
Removing the minimum, widening the free plan to 100 projects and cutting prices by 25% would be revenue-reducing decisions for a standalone company, but inside Databricks they appear to be investment in Lakebase's front door. That the August 2026 Databricks press release placed Lakebase's $100 million run-rate next to the company's $7 billion suggests Neon's cloud is judged as part of the Databricks portfolio rather than on its own P&L. Most of the 15 million databases created on the free plan presumably end as agent experiments, but when platforms like Replit or Retool become customers, Agent Plan usage arrives thousands of databases at a time. The structure appears to be two-tiered: give widely and free to individual developers, collect from agent platforms and from enterprises (through Databricks).
:::

:::guess
The Azure retreat and the "stay on Azure via Databricks Lakebase" guidance appear to narrow the Neon brand to the developer and agent front door on AWS, with enterprises and other clouds handled by Databricks. The stalled public repository presumably reflects a lower priority for "open-source Neon" within that split, though the Apache-2.0 code remains and user forks have begun. The business will likely be judged less on how many open-source-motivated users stay than on how many agent platforms arrive.
:::

The company that rebuilt Postgres became part of Databricks together with the technology it rebuilt. The free tier was redesigned for agents instead of people, the minimum disappeared, Azure closed, and the public repository went quiet. What remains is a database created every second, and the question of what share of them grow into a platform's invoice.
