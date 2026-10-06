---
title: "Zapier vs n8n — A Closed Cloud That Counts Actions as \"Tasks\" and a Distributed Source That Counts Each Run as One"
description: "A comparison of the workflow automation tools Zapier and n8n using only their official pages, help centers, documentation and repositories as of October 6, 2026. Zapier counts each successful app action as one task, makes its built-in tools free, charges AI steps 1, 3 or 5 tasks by model tier and MCP calls 2 tasks; a free plan gives 100 tasks a month, and Professional starts at $19.99 a month (annual) for 750 tasks. n8n counts one workflow execution as one, regardless of steps, from €20 a month for 2,500. Zapier runs only on AWS in the United States, keeps its source closed, and has no public affiliate program; n8n publishes its source on GitHub, can run free on your own server, and pays 30% on cloud referrals. The article lines up what is counted, the shape of free, AI billing, where it runs, funding and referral terms under the same headings."
lead: "Both connect apps to automate work, and both have put AI agents and MCP on their banners since 2025. What differs is what they count to bill you and where the source code lives. Zapier has used the \"task\" as its currency for fourteen years and converts AI and outside calls into the same currency. n8n uses \"one execution\" as its unit, counts a run as one however many steps it has, and distributes its source on GitHub. Reading both companies' official pages on the same day, this article dissects how the differences in counting and placement show up in pricing and in the business."
slugA: "zapier"
slugB: "n8n"
publishedAt: "2026-10-06"
updatedAt: "2026-10-06"
lastVerified: "2026-10-06"
sources:
  - label: "Zapier: Pricing"
    url: "https://zapier.com/pricing"
    accessedAt: "2026-10-06"
  - label: "Zapier: Task usage rates"
    url: "https://zapier.com/pricing/rates"
    accessedAt: "2026-10-06"
  - label: "Zapier Help Center: How pay-per-task billing works in Zapier"
    url: "https://help.zapier.com/hc/en-us/articles/15279018245901-How-pay-per-task-billing-works-in-Zapier"
    accessedAt: "2026-10-06"
  - label: "Zapier: Press"
    url: "https://zapier.com/press"
    accessedAt: "2026-10-06"
  - label: "Zapier: Zapier MCP"
    url: "https://zapier.com/mcp"
    accessedAt: "2026-10-06"
  - label: "Zapier: Security & Compliance"
    url: "https://zapier.com/security-compliance"
    accessedAt: "2026-10-06"
  - label: "Zapier: Ambassador & Affiliate Program Terms (2025-01-17)"
    url: "https://zapier.com/legal/ambassador-affiliate-terms"
    accessedAt: "2026-10-06"
  - label: "Zapier Community: Does Zapier have an affiliate program? (staff reply 2025-01-08)"
    url: "https://community.zapier.com/show-tell-5/does-zapier-have-an-affiliate-program-13950"
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

[Zapier](/en/articles/zapier) and [n8n](/en/articles/n8n) do the same job. They connect one app to another, branch on conditions, call AI, and reduce manual work. Zapier launched in the United States in 2012; n8n's repository was created in Berlin in 2019. Laying the two anatomy articles over each other, the difference shows up not in the feature list but in how they count and where they run.

This article was compiled by re-reading both companies' official pages, help centers, documentation and repositories on October 6, 2026. This site has not run the same workflow on both tools to compare them, and does not rank them on ease of use or speed.

## What is counted and billed

The unit is different. Zapier counts "successful actions"; n8n counts "executions."

:::fact
According to Zapier's pricing page (checked October 6, 2026, USD, annual billing shown), Free is 100 tasks a month with two-step Zaps, Professional starts at $19.99 a month (the 750-task tier), Team starts at $69 a month, and Enterprise is priced on request. Paid tiers run from 750 to 2 million tasks in 17 steps, and yearly billing is shown as "Save 33%." The page's FAQ explains that triggers, polling and failed actions do not count as tasks, and that built-in tools such as Tables, Forms, Filter, Formatter, Paths, Delay, Looping and Sub-Zap cost 0 tasks. According to the "Task usage rates" page, an app action is 1 task per step, AI by Zapier is 1, 3 or 5 tasks for standard, advanced and premium models (and the same per tool call), an MCP tool call is 2 tasks, and a Code by Zapier step is 1 task per run. According to the help center, exceeding the limit switches the account to pay-per-task billing, which stops at 3 times the plan's limit.
:::

:::fact
According to n8n's pricing page (checked October 6, 2026, EUR, annual billing shown), the cloud edition's Starter is €20 a month for 2,500 executions, Pro is €50 a month for 10,000, Business is €667 a month for 40,000 and self-hosted only, and Enterprise is priced on request. Annual billing saves 17%. The headline says pricing is based on executions regardless of complexity, with unlimited steps, and the body says that unlike tools that charge per step or per user, n8n charges only when a workflow runs from start to finish. Separately, one execution may last at most 5 minutes on Starter and 40 minutes on Pro, and concurrency is 5 on Starter and 20 or 50 on Pro.
:::

| Item | Zapier | n8n (cloud) |
| --- | --- | --- |
| Unit counted | A successful app action = 1 task (built-in tools = 0) | One workflow execution = 1 (steps not counted) |
| Cheapest paid plan | Professional $19.99/month, 750 tasks (annual) | Starter €20/month, 2,500 executions (annual) |
| List price per unit (this site's calculation) | $0.027 per task (19.99 ÷ 750) | €0.008 per execution (20 ÷ 2,500) |
| Over the limit | Automatic pay-per-task (stops at 3x the limit) | No overage mechanism stated on the pricing page |
| Limits on length and frequency | Polling 15 min Free, 2 min Pro, 1 min Team | One execution 5 min Starter, 40 min Pro; concurrency 5 to 50 |
| Users | 1 on Free and Pro, 25 on Team, unlimited on Enterprise | Unlimited on every plan |

From here on, the figures are this site's own calculations; neither pricing page contains this comparison. One action on Zapier and one execution on n8n are different units, so they can only be compared on the same workflow. Take a workflow with five app actions (excluding Filters and Formatters) running 500 times a month: on Zapier that is 2,500 tasks, beyond the 750 tier, so a tier of 2,000 or more or pay-per-task is needed; on n8n it is 500 executions, a fifth of Starter's allowance at a flat €20. Conversely, a one-action workflow running 3,000 times a month is 3,000 tasks on Zapier and 3,000 executions on n8n, which puts n8n on Pro (€50). Many actions with few runs reach further on n8n's unit; few actions with many runs reach further on Zapier's.

:::pull
Zapier counts what was done to an app; n8n counts how many times a workflow ran. On the same workflow, the former rises with every app action and the latter does not change.
:::

:::guess
Zapier charging 0 tasks for built-in tools and n8n headlining "unlimited steps" both remove the friction of adding steps from the price, but in different ways. Zapier makes steps that do not touch an app free and weights app actions, AI and outside calls; n8n does not look inside the execution at all. In agent-style usage where one run makes many tool calls, Zapier's single task swells to 3 or 5 while n8n's stays at one, so the gap is presumably larger than the price lists suggest.
:::

## The shape of free

Both have a free entrance. The shapes differ.

:::fact
Zapier's Free plan, according to the pricing page, is 100 tasks a month, two-step Zaps, 15-minute polling, unlimited Zaps, Tables and Forms, with no expiry and no pay-per-task. A new account starts a 14-day Professional trial with no credit card. According to n8n's docs "Try free then choose a plan," the cloud trial lasts 14 days with Pro features for up to 1,000 executions, after which the workspace is deleted (workflows can be downloaded for 90 days). n8n also has the Community Edition distributed on GitHub; "Choose how to use n8n" recommends it to anyone who wants to run n8n for free and describes it as offering almost the full feature set at no cost.
:::

| Item | Zapier | n8n |
| --- | --- | --- |
| Free cloud | Free (100 tasks/month, two steps, no expiry) | 14-day trial (Pro-level, up to 1,000 executions, deleted afterwards) |
| Paid trial | 14 days of Professional (no card) | Same as above |
| Free self-hosting | None | Community Edition (Sustainable Use License) |
| Condition for staying free | Within 100 tasks a month and two steps | Your own server, plus the work of updating and isolating it |

:::guess
Zapier's free tier appears to be a bracket for staying small, and n8n's free offering a distribution for running it yourself. The former costs nothing as long as usage fits in 100 tasks and two steps; the latter moves server costs and operations onto the user. Which is cheaper seems to depend less on volume than on whether you can run a server.
:::

## AI and MCP are on both banners

:::fact
According to Zapier's official MCP page (checked October 6, 2026), "Zapier MCP is included in every Zapier plan. Each tool call uses two tasks from your existing task quota—the same bucket your Zaps use," and an AI client chooses from 9,000+ apps and 66,000+ triggers and actions. According to the "Task usage rates" page, AI by Zapier steps cost 1, 3 or 5 tasks by model tier, or 1 task with your own provider account, and the help center says new AI steps default to the advanced tier (3x). n8n's pricing page (same day) lists the AI Agent node, MCP Server Trigger, MCP client, human approval of tool calls, hosted chat, AI models without API keys (Gateway credits), and the workflow-building Assistant (1,600 credits a month on Starter, up to 9,600 on Pro).
:::

| Item | Zapier | n8n |
| --- | --- | --- |
| Billing for AI steps | 1, 3 or 5 tasks by model tier (1 with your own key) | Execution stays one; model cost via Gateway credits or your own key |
| Control from an outside AI | Zapier MCP (every plan, 2 tasks per call) | MCP Server Trigger, instance-level MCP |
| Let AI build the workflow | Copilot (daily limit on Free, unlimited on paid) | Assistant (1,600 credits/month on Starter, up to 9,600 on Pro) |
| Agent product | Zapier Agents (billed in separate "activities," 400/month on Free) | AI Agent node, Agents (preview) |

:::guess
Both convert AI usage into their own unit, but Zapier's unit is the same task that bills Zaps while n8n's is a credit separate from executions. On Zapier, the longer an agent thinks, the fewer tasks remain in the tier; on n8n an execution stays one and only the model cost grows alongside. Spelling out an outside MCP call as "2 tasks" and including it in every plan reads as Zapier folding AI clients into its existing price list as a new sales channel.
:::

## Where it runs, and whose source it is

:::fact
According to Zapier's official Security & Compliance page (checked October 6, 2026), hosting is on AWS in the United States, with annual SOC 2 Type II and SOC 3 audits, TLS 1.2+ and AES-256, SAML SSO, two-factor authentication and SCIM. The official blog (2025-10-09) states "No, Zapier isn't HIPAA compliant." The source code of Zapier's workflow engine is not published; the zapier GitHub organization holds the zapier-platform integration kit (JavaScript) and MCP and SDK tooling. According to n8n's LICENSE.md (same day), source with .ee. in the file name or in a .ee directory is excluded from the Sustainable Use License and requires the n8n Enterprise License; everything else is under Sustainable Use License 1.0, usable and modifiable for internal business, non-commercial or personal purposes, and may be provided to others only non-commercially and free of charge. According to "Choose n8n's database," self-hosting defaults to SQLite with PostgreSQL supported, and n8n Cloud uses SQLite on Starter and Pro with PostgreSQL only on Enterprise Scaling. GitHub's Security Advisories listed 210 published advisories as of October 6, 2026, 14 in 2025 and 196 in 2026 (through September 30), including 22 critical.
:::

| Item | Zapier | n8n |
| --- | --- | --- |
| Where it runs | Zapier's cloud only (AWS, United States) | n8n Cloud or your own server (Docker, npm) |
| Source code | Closed (only the integration kit, MCP and SDK are public) | Published (Sustainable Use License; .ee under the Enterprise License) |
| Run on your own infrastructure | No | Yes (Community, Business, Enterprise) |
| Vulnerability disclosure | Audits and certifications listed on the Security & Compliance page | Individual GitHub Security Advisories (196 in 2026) |
| HIPAA | Stated as not compliant | Not mentioned on the pricing page |
| Responsibility for updates | Zapier | n8n for cloud; the user for self-hosting |

:::guess
Being able to choose where it runs appears to be both why n8n sells to large companies and why n8n keeps publishing advisories: a fix does not reach a self-hosting user who does not update. Zapier gives no choice of location and in return takes on updates and audits as a package, presenting that guarantee on its Security & Compliance page. The gap in advisory counts is better read as a difference in whether vulnerabilities are published than in how many exist.
:::

## Funding and scale

:::fact
According to Zapier's official press page (checked October 6, 2026), "Zapier raised $1.3 million in 2012. Without any further funding, we were valued at $5 billion in 2021." It lists 9,000+ apps, over 3.4 million businesses, more than 25 million Zaps, and 800+ people across 40 countries. According to n8n's official blog of October 9, 2025, n8n raised a $180 million Series C led by Accel at a $2.5 billion valuation, bringing total funding to $240 million, and according to the post of May 12, 2026, SAP's strategic investment took the valuation to $5.2 billion. That post cites 1.7 million monthly active builders, more than 1,400 enterprise customers, and embedding in SAP's Joule Studio.
:::

| Item | Zapier | n8n |
| --- | --- | --- |
| Operator | Zapier, Inc. (Delaware, independent) | n8n GmbH (Berlin, independent) |
| Published scale | 3.4 million+ businesses, 9,000+ apps, 800+ people (2026-10) | 1.7 million monthly active builders, 1,400+ enterprise customers (2026-05) |
| Capital raised | $1.3 million in 2012 only | $240 million total (as of 2025-10) plus SAP's investment (2026-05) |
| Valuation | $5 billion (2021) | $5.2 billion (May 2026) |

:::guess
The valuations are almost the same; the roads were opposite. Zapier reached $5 billion over fourteen years on $1.3 million; n8n reached $5.2 billion in seven years on $240 million plus a strategic investment. Zapier's numbers are told in customers and apps, n8n's in builders, enterprise customers and investors. The former read as the figures a company grown on its own revenue is proud of, the latter as the figures a company showing growth to investors puts out.
:::

## Affiliate terms

:::fact
As of October 6, 2026, Zapier has no public affiliate program that anyone can join. A staff member replied in the official community on 2025-01-08 that "Zapier does not currently have an affiliate program"; referral rewards are limited to the Solution Partner Program for consultants and an invitation-only Ambassador & Affiliate Program under terms dated January 17, 2025 (run through PartnerStack, with the rate and period stated only inside the portal, calculated monthly and paid within 30 days of month end). According to n8n's official affiliate page (same day), referrals of n8n Cloud earn 30% of net revenue for 12 months on Starter and Pro, paid monthly by PayPal on balances of €100 or more, with paid advertising campaigns forbidden on pain of removal.
:::

| Item | Zapier | n8n |
| --- | --- | --- |
| Public program | None (invitation-only and partner programs) | Yes |
| Rate and period | Not published (inside the portal) | 30% for 12 months |
| Scope | Subscriptions (excluding add-ons and taxes) | n8n Cloud (Starter and Pro) |
| Payment | Monthly calculation, within 30 days of month end | PayPal, monthly, €100 minimum |

## The tech overlap is two items: PostgreSQL and SQLite

The tech stack comparison below this page is a mechanical match of the two articles' techStack fields. Two items were judged shared: PostgreSQL and SQLite. Their roles differ. Zapier's PostgreSQL is the database behind the Django application, and its SQLite is a local outbox that keeps accepting events when Kafka is down. n8n's SQLite is the default database for self-hosting and for the cloud's Starter and Pro plans, and PostgreSQL is the option for Enterprise and large self-hosted deployments. What differs is that the Zapier side lists parts visible from the official blog and from the outside, such as Python, Django, Celery, RabbitMQ, Kafka, Go, Next.js, Vercel and Contentful, while the n8n side lists internals readable in the repository, such as TypeScript, Express, TypeORM, Redis, Bull, task runners, LangChain.js, Vue.js and the Sustainable Use License. One source is closed, so only what the company wrote and what can be observed at the boundary is visible; the other is published, so the dependencies are visible. The diff table is a difference in technology and, at the same time, a difference in what is disclosed.

The difference in counting is decided by usage. Many app actions with few runs reach further on n8n's unit; few actions with many runs reach further on Zapier's. The heavier the AI use, the more Zapier's single task swells to 3 or 5 while n8n's single run stays one. The difference in placement is decided by the organization. If you have your own server and can take on the updates, n8n's distribution is an option; otherwise both are clouds, and Zapier, in return for giving no choice of location, offers 9,000 apps and fourteen years of audits as a package. Before comparing the first row of either price list, count the app actions in your workflow, the AI steps in it, and whether your organization can run a server.
