---
title: "Make vs n8n — Counting Every Action Against Counting Every Run; a Closed Cloud Against Source That Is Given Away"
description: "A comparison of the workflow automation tools Make and n8n using only their official pages, help centers, documentation, and repositories as of October 6, 2026. Make counts each action in a scenario as one credit, from $9 a month for 10,000 credits. n8n counts one workflow execution as one, from €20 a month for 2,500 executions. Make runs only on its own AWS infrastructure; n8n gives away its source and also runs on your own server. The article lines up the shape of the free tiers, AI billing, where data lives, parent companies and investors, and affiliate terms, to help decide which way of counting fits your own use."
lead: "Both connect nodes to automate work, both sell AI agents, and both pay affiliates for 12 months. What differs is what they count when they bill, and where the source code lives. Make counts one action as one credit and runs in a cloud owned by Celonis. n8n counts one execution as one and lets you run the source it publishes on GitHub on your own server. Reading both companies' official pages on the same day, this article dissects how the difference in counting and in location shows up in prices and in the business."
slugA: "make"
slugB: "n8n"
publishedAt: "2026-10-06"
updatedAt: "2026-10-06"
lastVerified: "2026-10-06"
sources:
  - label: "Make: Pricing"
    url: "https://www.make.com/en/pricing"
    accessedAt: "2026-10-06"
  - label: "Make Help Center: Extra credits"
    url: "https://help.make.com/extra-credits"
    accessedAt: "2026-10-06"
  - label: "Make: Affiliate program"
    url: "https://www.make.com/en/affiliate"
    accessedAt: "2026-10-06"
  - label: "Make: Security"
    url: "https://www.make.com/en/security"
    accessedAt: "2026-10-06"
  - label: "Make: Make launches AI Agents (2025-04-14)"
    url: "https://www.make.com/en/make-ai-agents-press-release"
    accessedAt: "2026-10-06"
  - label: "Make: Make Grid announcement (2025-06-24)"
    url: "https://www.make.com/en/make-grid-announcement"
    accessedAt: "2026-10-06"
  - label: "n8n: Plans and Pricing"
    url: "https://n8n.io/pricing/"
    accessedAt: "2026-10-06"
  - label: "n8n: Affiliate program"
    url: "https://n8n.io/affiliates/"
    accessedAt: "2026-10-06"
  - label: "n8n docs: Choose how to use n8n"
    url: "https://docs.n8n.io/choose-how-to-use-n8n"
    accessedAt: "2026-10-06"
  - label: "n8n docs: Try free then choose a plan"
    url: "https://docs.n8n.io/deploy/use-n8n-cloud/start-your-free-trial"
    accessedAt: "2026-10-06"
  - label: "n8n docs: Choose n8n's database"
    url: "https://docs.n8n.io/deploy/host-n8n/configure-n8n/choose-n8ns-database"
    accessedAt: "2026-10-06"
  - label: "n8n blog: n8n raises $180M Series C (2025-10-09)"
    url: "https://blog.n8n.io/series-c/"
    accessedAt: "2026-10-06"
  - label: "n8n blog: Announcing SAP's strategic investment in n8n (2026-05-12)"
    url: "https://blog.n8n.io/n8n-sap/"
    accessedAt: "2026-10-06"
  - label: "GitHub: n8n-io/n8n (LICENSE.md)"
    url: "https://github.com/n8n-io/n8n/blob/master/LICENSE.md"
    accessedAt: "2026-10-06"
  - label: "GitHub: n8n-io/n8n Security Advisories"
    url: "https://github.com/n8n-io/n8n/security/advisories"
    accessedAt: "2026-10-06"
---

[Make](/en/articles/make) and [n8n](/en/articles/n8n) do the same job. They connect apps to apps, branch on conditions, call AI, and reduce manual work. Both are European companies (Make in Prague, n8n in Berlin), and both put AI agents on their signboards in 2025. Laid over each other, the two anatomy articles show the difference not in the feature lists but in the counting and the location.

This article was compiled by re-reading both companies' official pages, help centers, documentation, and repositories on October 6, 2026. This site has not run the same workflow on both tools to compare them, and does not rank them on ease of use or speed.

## What is counted when they bill

The unit of counting differs from the headline of the price list onward.

:::fact
According to the Make pricing page (checked October 6, 2026, in US dollars, monthly billing shown), Free gives 1,000 credits a month, two active scenarios, a minimum interval of 15 minutes, and a 5-minute execution limit. Core is 10,000 credits for $9 a month, Pro is the same 10,000 credits for $16, and Teams is $29, each with unlimited active scenarios, a 1-minute interval, and a 40-minute execution limit. Enterprise is quoted individually. Annual billing is shown as saving 15% or more. The same page explains that each module action in a scenario (adding a Google Sheets row, fetching Gmail data, and so on) counts as one credit, and that error handlers and routers consume none. The Extra credits page in the help center gives the example that on the $9 plan with 10,000 credits one credit costs $0.0009, and that extra credits carry a 25% surcharge, so 1,000 extra credits cost $1.125.
:::

:::fact
According to the n8n pricing page (checked October 6, 2026, in euros, annual billing shown), the cloud Starter plan is €20 a month for 2,500 workflow executions a month, Pro is €50 for 10,000, Business is €667 for 40,000 and self-hosted only, and Enterprise is quoted individually. Annual billing saves 17%. The headline reads that pricing is based on monthly workflow executions regardless of complexity, with unlimited steps, and the body says that unlike tools that charge per step or per user, n8n only charges when a workflow runs from start to finish. Separately, a single execution may run at most 5 minutes on Starter and 40 on Pro, and concurrency is 5 on Starter and 20 or 50 on Pro.
:::

| Item | Make | n8n (cloud) |
| --- | --- | --- |
| Unit counted | Each action in a scenario = 1 credit | One workflow execution = 1 (steps are not counted) |
| Cheapest paid plan | Core, $9 a month, 10,000 credits | Starter, €20 a month, 2,500 executions (annual) |
| List price per unit (this site's calculation) | $0.0009 per credit (help center example) | €0.008 per execution (20 ÷ 2,500) |
| Longest single execution | Free 5 min, Core and above 40 min | Starter 5 min, Pro and above 40 min |
| Interval and concurrency limits | Free 15 min, Core and above 1 min | Concurrency: Starter 5, Pro 20 to 50, Enterprise 200+ |
| Users | No user limit shown on the pricing page | Unlimited on every plan |

What follows is this site's calculation; neither pricing page carries this comparison. One action on Make and one execution on n8n are different units, so they can only be compared once a specific workflow is placed on both. Take a workflow of 10 steps (excluding routers) run 1,000 times a month: on Make that is 10,000 credits, exactly Core's monthly allowance ($9); on n8n it is 1,000 executions, 40% of Starter's allowance (a flat €20). If the same workflow has 50 steps, Make needs 50,000 credits, so extra credits or a higher plan, while n8n stays at 1,000 executions. Conversely, a 2-step workflow run 10,000 times a month costs 20,000 credits on Make and 10,000 executions on n8n, which means Pro (€50). Many steps and few runs go further on n8n's counting; few steps and many runs go further on Make's, for the same monthly fee.

:::pull
Make counts what was done; n8n counts how many times it ran. For the same workflow, the former rises as steps are added and the latter does not.
:::

:::guess
n8n's decision to put "unlimited steps" in the headline appears aimed at absorbing, on the pricing side, uses such as AI agents where one execution triggers many tool calls. Make's decision to keep the per-action unit is presumably tied to the design, seen in the [Make](/en/articles/make) article, in which the token consumption of its AI Provider is also converted into credits and billed in the same unit; changing the unit would mean reworking the whole billing model.
:::

## The shape of the free tier

Both have a free entrance. The shapes differ.

:::fact
Make's Free plan, according to the pricing page, gives 1,000 credits a month, two active scenarios, a 15-minute interval, 512 MB of data transfer, and a 5-minute execution limit, with no expiry. According to the n8n documentation page "Try free then choose a plan," the cloud trial lasts 14 days with Pro features up to 1,000 executions and Starter-level compute, after which the workspace is deleted (workflows can be downloaded for 90 days). n8n has a second free option, the Community Edition distributed on GitHub; "Choose how to use n8n" recommends the self-hosted Community Edition to anyone who wants to run n8n for free and describes it as free with almost the complete feature set.
:::

| Item | Make | n8n |
| --- | --- | --- |
| Free cloud | Free plan (1,000 credits a month, two scenarios, no expiry) | 14-day trial (Pro features, up to 1,000 executions, deleted afterward) |
| Free self-hosting | None | Community Edition (Sustainable Use License) |
| Condition for staying free | Stay within 1,000 credits a month | Your own server, plus the work of updating and isolating it |

:::guess
Make's free tier looks like an allowance for keeping small uses running; n8n's looks like a distribution for running it yourself. The former costs nothing as long as use fits within 1,000 credits a month; the latter shifts server costs and operational effort to the user. Which is cheaper appears to depend less on volume than on whether you can run a server of your own.
:::

## AI is billed in credits on both

:::fact
Make announced Make AI Agents in a press release of April 14, 2025, citing more than 200,000 businesses, more than 2,000 apps, and 30,000+ actions. As confirmed in the [Make](/en/articles/make) article, the help center says Make's AI Provider is available on every plan and lets users pay Make in credits based on tokens and operations without an OpenAI or Anthropic account, while paid plans can use the user's own provider connection and pay Make only for operations. The n8n pricing page (checked October 6, 2026) lists in its feature table the AI Agent node, an MCP Server Trigger, an MCP client, human approval for tool calls, hosted chat, "AI models without API keys" (Gateway credits), and an Assistant that builds workflows (1,600 credits a month on Starter, up to 9,600 on Pro).
:::

| Item | Make | n8n |
| --- | --- | --- |
| AI agents | Make AI Agents (announced April 2025) | AI Agent node, Agents (preview) |
| Models through the vendor | Make's AI Provider (tokens converted to credits, every plan) | Gateway credits (AI models without API keys) |
| Your own API key | Yes on paid plans (only operation credits go to Make) | Yes (registered as LLM credentials) |
| Having AI build the workflow | — | Assistant (1,600 credits a month on Starter, up to 9,600 on Pro) |
| Driving it from outside AI apps | Make MCP server (mcp.make.com) | MCP Server Trigger, instance-level MCP |

:::guess
Both converge on converting model costs into their own credits, and the difference is whether that unit is the same as execution billing (Make) or a separate pool of credits (n8n). On Make, each agent step is one credit plus tokens, so the longer an agent thinks, the higher the bill. On n8n, one execution stays one execution, and only the model cost grows separately. The heavier the agent use, the larger this difference presumably becomes compared with how the price lists look.
:::

## Where it runs, and whose source it is

:::fact
According to Make's official Security page (checked October 6, 2026), Make's infrastructure runs on Amazon AWS EC2 private instances (Amazon VPC) deployed over two zones, with AES-256 encryption at rest and AWS KMS, TLS 1.2 and 1.3 in transit, SOC 2 Type II and SOC 3 audits, an ISO 27001 certified information security program, 30 days of log retention by default, and a 99.5% uptime commitment for Enterprise. As seen in the [Make](/en/articles/make) article, the API is split by organization zone (for example eu1.make.com). Make's source code is not published; what sits in the integromat organization on GitHub are peripheral tools such as the legacy make-mcp-server (TypeScript, MIT).
:::

:::fact
According to LICENSE.md in the n8n repository (checked October 6, 2026), source files with .ee. in the filename or .ee in the directory name are outside the Sustainable Use License and require an n8n Enterprise License, and everything else is under Sustainable Use License 1.0, which allows use and modification only for internal business, non-commercial, or personal purposes and distribution only free of charge for non-commercial purposes. According to the documentation page "Choose n8n's database," self-hosted installs default to SQLite with PostgreSQL supported, and on n8n Cloud, Starter and Pro use SQLite while only Enterprise Scaling uses PostgreSQL. GitHub's Security Advisories listed 210 published advisories as of October 6, 2026: 14 in 2025 and 196 in 2026 (through September 30), including 22 rated critical.
:::

| Item | Make | n8n |
| --- | --- | --- |
| Where it runs | Make's cloud only (AWS EC2, EU and US zones) | n8n Cloud, or your own server (Docker, npm) |
| Source code | Not published | Published (Sustainable Use License; .ee under the Enterprise License) |
| Option to run on your own infrastructure | None | Yes (Community, Business, Enterprise) |
| Vulnerability disclosure | Audits and certifications listed on the Security page | Individual GitHub Security Advisories (196 in 2026) |
| Who is responsible for updates | Make | n8n for Cloud, the user for self-hosting |

:::guess
Being able to choose where it runs appears to be both the reason n8n sells to large companies and the reason n8n keeps publishing vulnerabilities: for users running it on their own servers, a fix only arrives if they update. Make does not let you choose the location, but takes on updates and audits as a package and presents that guarantee through its Security page and the Enterprise uptime commitment. The difference in the number of advisories seems best read as a difference in whether they are published, not in how many vulnerabilities exist.
:::

## Parent companies and investors

:::fact
Make, as confirmed in the [Make](/en/articles/make) article, is the renamed Integromat, which Celonis acquired in October 2020 and which became Make in February 2022; the footer of the official site reads "© 2026 Celonis, Inc." The Make Grid press release of June 24, 2025 says more than 250,000 organizations use Make and quotes co-founder and CTO Patrik Simek. n8n, according to its official blog of October 9, 2025, raised a $180 million Series C led by Accel at a $2.5 billion valuation, bringing total funding to $240 million, and according to the blog of May 12, 2026, a strategic investment by SAP took the valuation to $5.2 billion. The same post cites 1.7 million monthly active builders, more than 1,400 enterprise customers, and the embedding of n8n in SAP's Joule Studio.
:::

| Item | Make | n8n |
| --- | --- | --- |
| Operator | Celonis, Inc. (acquired Integromat in 2020) | n8n GmbH (Berlin, independent) |
| Published scale | More than 250,000 organizations (June 2025) | 1.7 million monthly active builders, 1,400+ enterprise customers (May 2026) |
| Latest funding | Part of its parent (no standalone funding announcements) | $180 million Series C (October 2025), SAP strategic investment (May 2026, $5.2 billion valuation) |

:::guess
Make's figures are counted in "organizations" and n8n's in "builders" and "enterprise customers," so they are not on the same scale. Make is positioned as a product alongside its parent's process mining business, while n8n publishes numbers as an independent startup showing growth to investors. The difference in how they publish appears to be a difference in whom the numbers are for.
:::

## Affiliate terms

:::fact
According to Make's official affiliate page (checked October 6, 2026), affiliates earn 35% on all referred users for 12 months, counted from the subscription payments; purchases of extra operations (credits) do not earn commission. Visitors have 30 days after clicking to register, payouts go exclusively through Wise, and a payout requires a $100 minimum balance and at least three paying referred users. Paid ads are allowed, but the trademark "Make" may not be used in ad titles or body text without written consent from Celonis. According to n8n's official affiliate page (checked the same day), referrals to n8n Cloud earn 30% of net earnings for 12 months, limited to Starter and Pro; payouts go through PayPal once a month on balances of €100 or more, and paid ad campaigns are not permitted at all, with violations leading to removal from the program.
:::

| Item | Make | n8n |
| --- | --- | --- |
| Rate and period | 35%, 12 months | 30%, 12 months |
| What is counted | Subscriptions (excluding extra credits) | n8n Cloud (Starter and Pro) |
| Payout | Wise, $100 minimum, three paying users | PayPal, monthly, €100 minimum |
| Paid ads | Allowed (without the trademark "Make") | Not allowed |

## The tech stacks overlap in four places: Cloudflare, GitBook, Node.js, and TypeScript

The tech stack comparison at the bottom of this page mechanically matches the techStack of the two articles. Four entries were judged shared: Cloudflare, GitBook, Node.js, and TypeScript. Both are written in Node.js and TypeScript, keep their developer documentation on GitBook, and place their public sites behind Cloudflare. The difference is that the n8n side lists "insides" such as Express, TypeORM, SQLite, PostgreSQL, Redis, Bull, task runners, LangChain.js, Vue.js, and the Sustainable Use License, while the Make side lists "boundaries visible from outside" such as Amazon EC2, the Make Gateway, REST API v2, the Make MCP server, OpenAI's GPT-5 models, RudderStack, and VWO. One has published source, so the insides are visible; the other is closed, so only the boundary is. This difference table is as much a difference in what is published as a difference in technology.

The difference in counting is decided by how you use it: many steps and few runs go further on n8n's unit, few steps and many runs on Make's. The difference in location is decided by your organization: if you have your own server and can take on updates yourself, n8n's distribution is an option; if not, both are cloud, and Make, in exchange for not letting you choose the location, bundles the guarantees. Before comparing the first line of either price list, count the steps in your own workflow and ask whether your organization can run a server.
