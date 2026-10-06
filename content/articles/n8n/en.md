---
service: "n8n"
title: "200,000 GitHub Stars, a Valuation That Doubled to $5.2 Billion in Seven Months, and 196 Security Advisories Published in 2026 Alone — Dissecting n8n's \"Fair-Code\" Way of Giving Away the Source While Selling the Cloud"
description: "n8n, the workflow automation tool built by Berlin-based n8n GmbH, publishes its source code on GitHub (206,731 stars as of 2026-10-06) and can be run free on your own server, while earning from a cloud edition starting at €20 a month and paid licenses for self-hosting. It raised a $180 million Series C led by Accel in October 2025 at a $2.5 billion valuation, and a strategic investment by SAP in May 2026 took that to $5.2 billion. Using the official pricing page, blog, documentation, the GitHub repository and its security advisories, and this site's own observations, the article dissects the pricing that counts executions rather than steps, the line between the Sustainable Use License and the .ee directories, the Node.js and Vue monorepo, Redis queue mode, the task runners that isolate the Code node, the 2.0 decision to make secure the default, and the surge of published vulnerabilities in 2026."
lead: "The n8n pricing page says that pricing is based on workflow executions, regardless of complexity. However many steps a workflow has, one run from start to finish counts as one. The company put that difference from step-priced competitors in the heading of its price list. The same company publishes its source code on GitHub, lets you run it free on your own server, and in 2026 published 196 security advisories in that same repository. Giving away and selling, opening up and defending: all of it happens in one place."
category: saas
tags: [automation, no-code, ai, open-source, mcp, self-hosted, ai-agent, typescript]
publishedAt: "2026-10-06"
updatedAt: "2026-10-06"
lastVerified: "2026-10-06"
serviceUrl: "https://n8n.io/"
# Affiliate link placeholder: n8n runs its own public affiliate program
# (https://n8n.io/affiliates/; 30% of n8n Cloud referrals for 12 months, payouts via
# PayPal once a month on balances of EUR 100 or more, paid ad campaigns are not permitted).
# Only n8n Cloud (Starter / Pro) is rewarded, not self-hosted or Enterprise.
# The owner must apply, get approved, and paste the tracking link here before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<n8n-affiliate-tracking-link>"
#   program: "n8n Affiliate Program"
vendor: "n8n GmbH"
origin: "DE"
heroTheme: "n8n"
scores: { product: 4.5, ux: 3.5, tech: 4.5, business: 4.0 }
techStack:
  - layer: "Language, runtime, and repository layout"
    name: "TypeScript / Node.js (24+) / pnpm (12) / Turborepo"
    confidence: confirmed
    evidence: "The n8n-io/n8n repository on GitHub (as of 2026-10-06) breaks down as roughly 133 MB of TypeScript and 9 MB of Vue, and the root package.json requires node >=24.0.0 and pnpm >=12.4.2 in engines, sets packageManager to pnpm@12.4.2, and builds with turbo. Under packages/ sit cli, core, workflow, nodes-base, frontend, and more than 60 @n8n/ packages including task-runner, task-runner-python, nodes-langchain, and typeorm"
    evidenceUrl: "https://github.com/n8n-io/n8n/blob/master/package.json"
  - layer: "Backend"
    name: "Express (5) + TypeORM (@n8n/typeorm fork) / SQLite (default) / PostgreSQL"
    confidence: confirmed
    evidence: "The dependencies in packages/cli/package.json (as of 2026-10-06) include express (5.1.0 in the catalog), the in-workspace @n8n/typeorm, pg, and sqlite3 5.1.7. The official documentation page \"Choose n8n's database\" states that SQLite is the default, PostgreSQL is also supported, and on n8n Cloud the Starter and Pro plans use SQLite while only Enterprise Scaling plans use PostgreSQL. Supported PostgreSQL versions are 17 and 18, plus 16 for compatibility (as of July 2026)"
    evidenceUrl: "https://github.com/n8n-io/n8n/blob/master/packages/cli/package.json"
  - layer: "Scaling (queue mode)"
    name: "Redis + Bull (queue mode: main / worker / webhook processors)"
    confidence: confirmed
    evidence: "The official documentation page \"Enable queue mode\" states that the main instance handles timers and webhook calls and generates executions, passes the execution ID to Redis as the message broker, and that workers pick it up, load the workflow from the database, write results back, and notify Redis on completion. The encryption key must be shared between main and workers, and queue mode with SQLite is not recommended. packages/cli/package.json includes bull 4.16.4 and ioredis 5.3.2"
    evidenceUrl: "https://docs.n8n.io/deploy/host-n8n/configure-n8n/scaling/enable-queue-mode"
  - layer: "Isolation of user code"
    name: "Task runners (JavaScript / native Python, external mode via n8nio/runners image)"
    confidence: confirmed
    evidence: "The official documentation page \"Set up task runners\" states that task runners are the only isolation layer between user-provided code and n8n and that production should use external mode, that internal mode runs as a child process with the same uid and gid as n8n and is insecure by design, and that it is deprecated from n8n 3.0. The v2.0 breaking changes list says task runners are enabled by default, the external-mode runner moved to the separate n8nio/runners image, and the Pyodide-based Python Code node was replaced by a native Python task runner"
    evidenceUrl: "https://docs.n8n.io/deploy/host-n8n/configure-n8n/set-up-task-runners"
  - layer: "AI and agent features"
    name: "LangChain.js (1.x) + LangGraph + Model Context Protocol SDK"
    confidence: confirmed
    evidence: "The catalog in the repository's pnpm-workspace.yaml (as of 2026-10-06) pins langchain 1.2.30, @langchain/core 1.2.8, @langchain/langgraph 1.0.2, @langchain/openai, and @langchain/anthropic, and packages/cli/package.json depends on @modelcontextprotocol/sdk. Under packages/@n8n sit nodes-langchain, ai-workflow-builder.ee, agents, mcp-apps, and mcp-browser"
    evidenceUrl: "https://github.com/n8n-io/n8n/blob/master/pnpm-workspace.yaml"
  - layer: "Editor (frontend)"
    name: "Vue.js (3.5) + Pinia + Vue Flow + Element Plus + CodeMirror + Vite (8)"
    confidence: confirmed
    evidence: "The dependencies in packages/frontend/editor-ui/package.json (as of 2026-10-06) include vue, pinia, and vue-router (vue ^3.5.13 in the catalog), @vue-flow/core 1.48.0, element-plus, @codemirror/state, and @n8n/design-system, built with vite (^8.0.2 in the catalog)"
    evidenceUrl: "https://github.com/n8n-io/n8n/blob/master/packages/frontend/editor-ui/package.json"
  - layer: "License"
    name: "Sustainable Use License (1.0) + n8n Enterprise License (.ee files)"
    confidence: confirmed
    evidence: "The repository's LICENSE.md states that source files with .ee. in the filename or .ee in the directory name are not licensed under the Sustainable Use License and require an n8n Enterprise License, and that everything else is under the Sustainable Use License, which allows use and modification only for internal business, non-commercial, or personal purposes and distribution only free of charge for non-commercial purposes. GitHub displays the license as \"Other\""
    evidenceUrl: "https://github.com/n8n-io/n8n/blob/master/LICENSE.md"
  - layer: "Marketing site, docs, and blog"
    name: "Nuxt + Strapi (n8n.io) / GitBook (docs) / Ghost (6, blog) / Discourse (community) / Cloudflare"
    confidence: likely
    evidence: "In this site's own observation (2026-10-06), responses from n8n.io carried server: cloudflare, and the HTML contained __NUXT__ and _nuxt/ paths, more than 700 data-v- attributes from Vue's scoped CSS, and more than 300 references to strapi. app.n8n.cloud returned x-powered-by: Nuxt, docs.n8n.io loaded GitBook assets and returned an x-vercel-id header, blog.n8n.io carried a generator meta tag for Ghost 6.68, and community.n8n.io returned x-discourse-route. The OGP image of n8n.io was served from Azure Blob Storage (the n8nio-strapi-blobs container on n8niostorageaccount.blob.core.windows.net)"
sources:
  - label: "n8n: Plans and Pricing"
    url: "https://n8n.io/pricing/"
    accessedAt: "2026-10-06"
  - label: "n8n: Affiliate program"
    url: "https://n8n.io/affiliates/"
    accessedAt: "2026-10-06"
  - label: "n8n: Imprint (n8n GmbH, Berlin)"
    url: "https://n8n.io/imprint/"
    accessedAt: "2026-10-06"
  - label: "n8n blog: n8n raises $180M Series C (2025-10-09)"
    url: "https://blog.n8n.io/series-c/"
    accessedAt: "2026-10-06"
  - label: "n8n blog: Announcing SAP's strategic investment in n8n (2026-05-12)"
    url: "https://blog.n8n.io/n8n-sap/"
    accessedAt: "2026-10-06"
  - label: "n8n blog: Introducing n8n 2.0 (2025-12-08)"
    url: "https://blog.n8n.io/introducing-n8n-2-0/"
    accessedAt: "2026-10-06"
  - label: "n8n docs: v2.0 Breaking changes"
    url: "https://docs.n8n.io/changelog/v20-breaking-changes"
    accessedAt: "2026-10-06"
  - label: "n8n docs: Choose how to use n8n (Cloud / self-hosted, licenses and plans)"
    url: "https://docs.n8n.io/choose-how-to-use-n8n"
    accessedAt: "2026-10-06"
  - label: "n8n docs: Try free then choose a plan"
    url: "https://docs.n8n.io/deploy/use-n8n-cloud/start-your-free-trial"
    accessedAt: "2026-10-06"
  - label: "n8n docs: Choose n8n's database"
    url: "https://docs.n8n.io/deploy/host-n8n/configure-n8n/choose-n8ns-database"
    accessedAt: "2026-10-06"
  - label: "n8n docs: Enable queue mode"
    url: "https://docs.n8n.io/deploy/host-n8n/configure-n8n/scaling/enable-queue-mode"
    accessedAt: "2026-10-06"
  - label: "n8n docs: Set up task runners"
    url: "https://docs.n8n.io/deploy/host-n8n/configure-n8n/set-up-task-runners"
    accessedAt: "2026-10-06"
  - label: "n8n docs: Privacy (GDPR and telemetry)"
    url: "https://docs.n8n.io/privacy-and-security/privacy"
    accessedAt: "2026-10-06"
  - label: "GitHub: n8n-io/n8n (repository, LICENSE.md, package.json)"
    url: "https://github.com/n8n-io/n8n"
    accessedAt: "2026-10-06"
  - label: "GitHub: n8n-io/n8n Security Advisories"
    url: "https://github.com/n8n-io/n8n/security/advisories"
    accessedAt: "2026-10-06"
  - label: "GitHub Security Advisory GHSA-v4pr-fm98-w9pg: Unauthenticated File Access via Improper Webhook Request Handling (CVE-2026-21858)"
    url: "https://github.com/n8n-io/n8n/security/advisories/GHSA-v4pr-fm98-w9pg"
    accessedAt: "2026-10-06"
---

n8n is a workflow tool for building business automations and AI agents by connecting nodes. It plays in the same market as [Make](/en/articles/make) and Zapier, but differs in publishing its source code and letting you run it free on your own server. The "runs free" part gathered 200,000 GitHub stars and 1.7 million monthly active builders; the "we run it for you" part and the "features for large companies" part are the revenue.

## Service overview

n8n GmbH is registered at Novalisstr. 10 in Berlin, and its managing director is Jan Oberhauser. The GitHub repository was created on June 22, 2019, and in a May 2026 blog post he wrote that he started n8n almost seven years ago. The product is an editor where you build workflows by connecting nodes on a browser canvas, plus the engine that runs them, offered both as the company-hosted "n8n Cloud" and as a self-hosted install on your own server.

:::fact
According to the official pricing page (as of 2026-10-06, billed annually), the cloud edition's Starter plan is €20 a month for 2,500 workflow executions a month, one shared project, 5 concurrent executions, and 1,600 Assistant credits a month. Pro is €50 a month for 10,000 executions, three shared projects, up to 50 concurrent executions, 7 days of insights, workflow history, and admin roles. Business is €667 a month, self-hosted only, for 40,000 executions, six shared projects, SSO and LDAP, multiple environments, queue mode for scaling, and version control with Git. Enterprise has a custom number of executions, unlimited shared projects, 200+ concurrent executions, 365 days of insights, external secret store integration, log streaming, and dedicated support with an SLA. Annual billing saves 17%, every plan includes unlimited users and workflows and every integration, a Start-up Plan gives companies with under 20 employees 50% off Business, and the Community Edition is available free on GitHub as a self-hosted version.
:::

:::fact
According to the official blog post of 2025-10-09, n8n raised a $180 million Series C led by Accel, with Meritech, Redpoint, Evantic, Visionaries Club, NVentures (NVIDIA), and T.Capital, plus existing investors Felicis, Sequoia, Highland Europe, and HV Capital, at a $2.5 billion valuation, bringing total funding to $240 million. The post cites 6x user growth and 10x revenue growth in 2025 and 162,000 GitHub stars, and says "n8n becomes the default platform to build with AI. And more importantly, to deploy AI." According to the post of 2026-05-12, SAP invested in n8n at a valuation of $5.2 billion, more than double the valuation of less than a year earlier. The post cites 1.7 million monthly active builders and more than 1,400 enterprise customers, and says n8n is being embedded natively inside SAP's Joule Studio.
:::

:::pull
GitHub stars went from 162,000 in October 2025 to 206,731 in October 2026. The valuation went from $2.5 billion in October 2025 to $5.2 billion in May 2026. Both grew in under a year.
:::

::scorecard

## UX analysis

The n8n experience is built so you can move between low-code "connect the nodes" and "write the code." How you read the pricing, and how much responsibility you carry when running it yourself, differ from other automation tools.

- **One execution is one, steps are not counted.** The pricing page says that unlike tools that charge per step or per user, n8n only charges when a workflow runs from start to finish. For anyone used to [Make](/en/articles/make)'s per-operation pricing, the way to estimate a workflow of the same complexity changes. At the same time, there are limits on other axes: a single execution may run at most 5 minutes on Starter and 40 on Pro, and concurrency is 5 on Starter and 20 or 50 on Pro.
- **There are two places to try it free.** According to the official documentation, the cloud trial lasts 14 days with Pro features up to 1,000 executions and Starter-level compute, after which the workspace is deleted (workflows can be downloaded for 90 days). The other is the self-hosted Community Edition, which the docs describe as free with almost the complete feature set. Where you start changes what you pay later.
- **AI is both a node and an editor helper.** The feature table on the pricing page lists the AI Agent node, an MCP Server Trigger, an MCP client, human approval for tool calls, hosted chat, AI models usable without API keys (Gateway credits), and an Assistant that builds workflows (1,600 credits a month on Starter). n8n is a tool for calling LLMs inside a workflow and, at the same time, a tool for letting outside AI apps build workflows.
- **If you run it, you also defend it.** The self-hosting documentation calls task runners the only isolation layer between user-provided code and n8n and asks, in bold, that production use external mode. Running it free comes with owning the decisions about updates and isolation.
- **Telemetry is on by default.** According to the Privacy page in the official documentation, n8n collects a limited amount of information about how the product is used, does not collect the data flowing through workflows or credentials, and self-hosted instances can opt out through configuration.

## Tech stack

::techstack

:::fact
The n8n-io/n8n repository on GitHub (as of 2026-10-06) has 206,731 stars and 61,008 forks, its main language is TypeScript, and its description reads "Fair-code workflow automation platform with native AI capabilities. 400+ integrations." The latest release is n8n@2.41.7 from October 5, 2026. The root package.json requires Node.js 24 or later and pnpm 12.4.2 or later and builds with Turborepo. The dependencies in packages/cli/package.json include Express, the in-workspace @n8n/typeorm, pg, sqlite3, bull, ioredis, @modelcontextprotocol/sdk, isolated-vm, prom-client, Sentry, PostHog, RudderStack, libraries for SAML (samlify), OIDC (openid-client), and LDAP (ldapts), and @n8n_io/license-sdk. The catalog in pnpm-workspace.yaml pins langchain 1.2.30, @langchain/core 1.2.8, @langchain/langgraph 1.0.2, vue ^3.5.13, vite ^8.0.2, and express 5.1.0.
:::

:::fact
According to the official documentation page "Enable queue mode" (as of 2026-10-06), in queue mode the main n8n instance handles timers and webhook calls and generates (but does not run) executions, passing the execution ID to Redis. Workers pick the message up from Redis, load the workflow from the database by ID, run it, write the results to the database, and post to Redis that the execution has finished. Each worker is its own Node.js instance, and you scale by adding or removing workers. The N8N_ENCRYPTION_KEY must be shared with all workers and webhook processors, queue mode with SQLite is not recommended, and filesystem binary data storage is not supported in queue mode, so S3 external storage is used instead. According to "Choose n8n's database," SQLite is the default and PostgreSQL is supported; on n8n Cloud, Starter and Pro use SQLite and only Enterprise Scaling uses PostgreSQL. Amazon Aurora PostgreSQL is experimental, and PostgreSQL-compatible derivatives such as AlloyDB, CockroachDB, and YugabyteDB are not supported.
:::

:::fact
According to the official blog post "Introducing n8n 2.0" of 2025-12-08, 2.0.0 was released as a BETA and is a hardening release that makes "secure by default" the theme rather than a feature release. Task runners are enabled by default so that Code node executions run in isolated environments, environment variables are blocked from Code nodes, and nodes that allow arbitrary command execution are disabled by default. A new SQLite pooling driver is up to 10x faster in the company's benchmarks, and the company plans to ship one to two major versions a year. The breaking changes list in the docs says the default of N8N_BLOCK_ENV_ACCESS_IN_NODE is now true, configuration files must use 0600 permissions, the external-mode task runner moved from the n8nio/n8n image to a separate n8nio/runners image, the Pyodide-based Python Code node was replaced by a native Python task runner, and $evaluateExpression() no longer works inside the Code node. "Set up task runners" states that internal mode runs as a child process with the same uid and gid as n8n, is insecure by design, and is deprecated from n8n 3.0 and will be removed.
:::

:::fact
According to GitHub's Security Advisories (retrieved through the API on 2026-10-06), n8n-io/n8n has published 210 advisories: 14 in 2025 and 196 in 2026 (through September 30), with 22 rated critical, 95 high, 91 medium, and 2 low. On some days 18 were published at once (June 10 and September 2, 2026). Among them, GHSA-v4pr-fm98-w9pg (CVE-2026-21858, published 2026-01-07, CVSS 10.0) allows an unauthenticated remote attacker to access files on the underlying server through the execution of certain form-based workflows; it affects versions from 1.65.0 up to but not including 1.121.0 and was fixed in 1.121.0. No official workaround was available, and restricting publicly accessible webhook and form endpoints until upgrading was given as a temporary mitigation.
:::

:::guess
The core of the stack appears to be a single TypeScript repository in which the editor (Vue), the execution engine (Express + TypeORM), and the node library (including LangChain) grow together. Pushing the Code node out to task runners and making secure the default in 2.0 appears to correspond to how many of the vulnerabilities published from late 2025 into 2026 cluster around expression evaluation, sandbox escapes, and prototype pollution through node parameters. The surge in the number of advisories in 2026 can be read either as more vulnerabilities or as more attention from researchers combined with a disclosure process that matured. Because a product that can be self-hosted for free is not fixed by a patch release unless users update, both publishing advisories and "secure by default" appear to be responses to the same structural fact. The statement that Starter and Pro run on SQLite suggests a single-tenant arrangement with one instance per customer.
:::

## Business model

Revenue comes from cloud subscriptions (a ladder of execution counts) and paid licenses for self-hosting (Business and Enterprise). The free part is the Community Edition source code and the "unlimited users and workflows" inside the monthly fee.

:::fact
According to the repository's LICENSE.md (as of 2026-10-06), source files with .ee. in the filename or .ee in the directory name are not covered by the Sustainable Use License and require an n8n Enterprise License. Everything else is under Sustainable Use License 1.0, which permits use, copying, modification, and distribution only for internal business purposes or non-commercial or personal use, and allows providing the software to others only free of charge for non-commercial purposes. The diagram in the official documentation page "Choose how to use n8n" places Starter, Pro, and Enterprise under Cloud and Community, Registered Community, Business, and Enterprise under self-hosted, and recommends the Community Edition to anyone who wants to run n8n for free.
:::

:::fact
According to the official affiliate page (as of 2026-10-06), referrals to n8n Cloud earn 30% of the net earnings of each referred subscription for the first 12 months. Only the cloud plans (Starter and Pro) are rewarded, payouts go through PayPal once a month on balances of €100 or more, and running paid ad campaigns with affiliate links is not permitted and leads to removal from the program. The same page says cloud plans start at €20 a month with a 14-day free trial, and that Enterprise licenses include unlimited executions, SSO, version control, and dedicated support with an SLA.
:::

:::guess
Counting executions means that the more steps a single run contains, the more you get for the same price. Because that is the opposite direction from the per-operation pricing of [Make](/en/articles/make), n8n's pricing is presumably easiest to make look favorable for uses such as AI agents, where one execution triggers many tool calls. At the same time, the cloud edition constrains execution time and concurrency, forming a ladder where heavy work moves to Pro and above and work that needs to scale moves to Business and above, which includes queue mode. Making Business self-hosted only looks like the entry point for converting companies that run the free Community Edition in production, by selling them the "operational features" of SSO, separated environments, and Git integration.
:::

:::guess
The 10x revenue growth in 2025, the $5.2 billion valuation in 2026, and the embedding in SAP's Joule Studio suggest that the center of revenue is shifting from individual cloud subscriptions to enterprise licenses and partnerships. The SAP post listed data sovereignty, sector-specific compliance, and audit trails because being self-hostable is a selling point for large organizations. The freely distributed source lowers the friction of adoption, and the published vulnerabilities in that same source push in the direction of "if you run this in production, get a paid license and an update process." Giving away and selling are separated within the same repository.
:::

A company that published its source on GitHub, collected 200,000 stars, and made free self-hosting possible doubled its valuation in seven months. What it sells is "running it for you" and "the features large companies need in production," and both became necessary precisely because the source was given away. The same repository published 196 security advisories in 2026. The cost of opening up is published in the place that was opened.
