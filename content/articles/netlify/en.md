---
service: "Netlify"
title: "The Company Whose Founders Coined \"Jamstack\" Now Receives 93% of New Projects Without a Git Host — Dissecting Netlify, Which Unified Its Prices Into Credits, Moved Edge Functions Onto MicroVMs, and Put Claude Code and Codex Inside Its Dashboard"
description: "Netlify is a web application hosting and deployment platform founded in 2014 and headquartered in San Francisco. It grew as a development platform built around Git workflows, and its founders coined the term \"Jamstack.\" In November 2021 it raised $105 million in a Bessemer-led round at a $2 billion valuation. In September 2025 it unified its pricing into a single unit called credits, in October it launched Agent Runners, which run Claude Code, Codex and Gemini from the dashboard, and in March 2026 it announced that more than 10 million developers and teams use it. Using the pricing page, the partner page, press releases, the official blog, the documentation, GitHub and this site's own observations, the article dissects the move of Edge Functions from V8 isolates to Firecracker MicroVMs, an in-house Git storage with S3 as the source of truth, a partner program that tracks referrals through PartnerStack and shares 20% of revenue, and where a company without a framework of its own as a front door earns money in the age of AI."
lead: "According to Netlify's official blog (September 22, 2026), in the past month 93% of new projects were created without going through a Git host such as GitHub, arriving instead as uploaded folders, through the API, through MCP, or from an agent. Two years ago it was 70%. A company that grew by selling the Git workflow gave every project that arrives without a Git host an in-house Git repository with S3 as its source of truth. Netlify has no framework of its own as a front door and rents its cloud. This article dissects, from public information alone, what it builds itself and what it turns into a price."
category: dev-tool
tags: [hosting, jamstack, serverless, edge, ai-agent, deno, aws]
publishedAt: "2026-10-11"
updatedAt: "2026-10-11"
lastVerified: "2026-10-11"
serviceUrl: "https://www.netlify.com/"
# Affiliate link placeholder: Netlify Partners (https://www.netlify.com/partners/, checked 2026-10-11)
# pays Ecosystem Partners a 20% revenue share for up to 12 months on eligible self-serve new business
# (Certified Partners: 20% for up to 24 months). Applications are reviewed by the Netlify Partner Team
# and tracking links are issued through PartnerStack after approval. Once the owner is approved, paste
# the PartnerStack tracking link here and keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<partnerstack-tracking-link-for-netlify>"
#   program: "Netlify Partners (PartnerStack)"
vendor: "Netlify, Inc."
origin: "US"
heroTheme: "netlify"
scores: { product: 4.0, ux: 4.5, tech: 4.0, business: 3.5 }
techStack:
  - layer: "Edge function execution"
    name: "Firecracker MicroVM (Unikraft)"
    confidence: confirmed
    evidence: "The official blog (2026-09-29) states that Netlify rebuilt the infrastructure behind Edge Functions, which run about a billion times a day: requests that used to leave the network for a hosted execution service now run on compute nodes inside Netlify's own edge network, each function in its own Firecracker MicroVM. Boot, snapshot, restore and scale-to-zero are handled by Unikraft's product, and the median fell from 25–40ms to 5–6ms. The previous execution model was V8 isolates"
    evidenceUrl: "https://www.netlify.com/blog/edge-functions-firecracker-microvms/"
  - layer: "Edge function runtime"
    name: "Deno"
    confidence: confirmed
    evidence: "The official \"Edge Functions overview\" documentation (checked 2026-10-11) states that TypeScript and JavaScript code runs in a secure runtime based on Deno at the network edge location closest to each user. An April 2022 press release also announced the choice of Deno"
    evidenceUrl: "https://docs.netlify.com/build/edge-functions/overview/"
  - layer: "Serverless functions"
    name: "Netlify Functions"
    confidence: confirmed
    evidence: "The official documentation (checked 2026-10-11) states that a function is a file in the project that runs in an ephemeral runtime environment on each event and scales automatically with traffic. \"Lambda compatibility mode,\" which uses the AWS Lambda handler signature, is deprecated: deploys containing functions in that mode will no longer be accepted from July 1, 2027. The same Lambda compatibility page also describes writing functions in Go"
    evidenceUrl: "https://docs.netlify.com/build/functions/overview/"
  - layer: "Underlying cloud"
    name: "AWS (S3, Lambda)"
    confidence: confirmed
    evidence: "The official blog \"How we built Git storage for millions of Netlify projects\" (2026-09-22) states that the in-house Git service uses S3 as its durable source of truth, that each pod keeps a disk cache, and that refs are updated atomically with S3 conditional writes (If-Match). The Lambda compatibility documentation says functions in that mode are subject to AWS Lambda's 4 KB environment variable limit. This site's own observation (2026-10-11), connecting from Japan, found the server-timing header of responses from www.netlify.com and others containing dc;desc=\"aws-nrt\", suggesting that the Tokyo (NRT) location runs on AWS"
    evidenceUrl: "https://www.netlify.com/blog/how-we-built-git-storage-for-millions/"
  - layer: "Git storage"
    name: "Go / Amazon S3"
    confidence: confirmed
    evidence: "The same blog post states that the Git service is written in Go, runs the Git binary against a local bare repository and speaks Smart HTTP to clients, that objects and packfiles are stored in S3 in Git's native formats and refs as small JSON records. Preparing the source workspace for builds and agent runs took 0.76s at the median during September 7–13, 2026 (0.84s for GitHub-connected projects)"
    evidenceUrl: "https://www.netlify.com/blog/how-we-built-git-storage-for-millions/"
  - layer: "Database"
    name: "Netlify Database (managed Postgres with branching)"
    confidence: confirmed
    evidence: "The official documentation (checked 2026-10-11) states that Netlify Database is a fully managed Postgres database built into the platform, that provisioning, migrations and branching are handled automatically, and that every Deploy Preview and every agent run gets its own branch with a copy of production data. It is available on Credit-based plans only"
    evidenceUrl: "https://docs.netlify.com/build/data-and-storage/netlify-database/"
  - layer: "Authentication (Identity)"
    name: "GoTrue"
    confidence: confirmed
    evidence: "GitHub's netlify/gotrue (checked 2026-10-11) is an API for managing users and issuing JWTs, written in Go, MIT licensed, with about 4,500 stars. Its README describes the operator of this microservice as \"usually Netlify\""
    evidenceUrl: "https://github.com/netlify/gotrue"
  - layer: "CLI and build"
    name: "TypeScript / Node.js"
    confidence: confirmed
    evidence: "GitHub's netlify/cli (checked 2026-10-11) is TypeScript under MIT, and netlify/build is JavaScript under MIT, described as \"Netlify Build (node process),\" which runs the build command and Build Plugins and bundles functions. The docs say function dependencies are bundled by @netlify/zip-it-and-ship-it"
    evidenceUrl: "https://github.com/netlify/cli"
  - layer: "AI platform"
    name: "AI Gateway + Agent Runners"
    confidence: confirmed
    evidence: "The official documentation (checked 2026-10-11) states that AI Gateway injects API keys and base URLs for OpenAI, Anthropic, Google Gemini, OpenRouter and TypeSafe AI into the function environment and bills actual token usage as credits. Agent Runners run Claude Code, OpenAI Codex, Google Gemini and OpenCode (routed via OpenRouter only to providers with a Zero Data Retention policy) from the dashboard, and for Git-connected projects support GitHub only"
    evidenceUrl: "https://docs.netlify.com/build/ai-gateway/overview/"
  - layer: "Partner management"
    name: "PartnerStack"
    confidence: confirmed
    evidence: "The official partner page (checked 2026-10-11) states that Netlify uses PartnerStack for tracking, attribution and reporting across referral, recommendation and influence, for distributing brand assets and for viewing performance"
    evidenceUrl: "https://www.netlify.com/partners/"
  - layer: "Own website delivery"
    name: "Netlify"
    confidence: confirmed
    evidence: "This site's own observation (2026-10-11) found www.netlify.com, app.netlify.com and docs.netlify.com all returning server: Netlify, cache-status: \"Netlify Edge\" and x-nf-request-id headers. The company serves its own sites on its own product"
    evidenceUrl: "https://www.netlify.com/"
sources:
  - label: "Netlify official: Home page"
    url: "https://www.netlify.com/"
    accessedAt: "2026-10-11"
  - label: "Netlify official: Pricing (Free / Personal / Pro / Enterprise and credit rates)"
    url: "https://www.netlify.com/pricing/"
    accessedAt: "2026-10-11"
  - label: "Netlify official: About (founding year, headquarters, press release list)"
    url: "https://www.netlify.com/about/"
    accessedAt: "2026-10-11"
  - label: "Netlify official: Netlify Partners (20% revenue share, PartnerStack)"
    url: "https://www.netlify.com/partners/"
    accessedAt: "2026-10-11"
  - label: "Netlify press release: After Onboarding 800,000 Developers, Netlify Raises $53M in Series C (2020-03-04)"
    url: "https://www.netlify.com/press/after-onboarding-800000-developers-netlify-raises-53m-in-series-c-funding-to-fuel-enterprise-growth/"
    accessedAt: "2026-10-11"
  - label: "Netlify press release: Netlify Raises $105 Million to Transform Development for the Modern Web (2021-11-17)"
    url: "https://www.netlify.com/press/netlify-raises-usd105-million-to-transform-development-for-the-modern-web/"
    accessedAt: "2026-10-11"
  - label: "Netlify press release: Netlify Edge Functions Accelerate Development of Modern Web Applications at the Edge (built on Deno, 2022-04-19)"
    url: "https://www.netlify.com/press/netlify-edge-functions-accelerate-development-of-modern-web-applications-at-the-edge/"
    accessedAt: "2026-10-11"
  - label: "Netlify press release: Netlify Acquires Gatsby Inc. (2023-02-01)"
    url: "https://www.netlify.com/press/netlify-acquires-gatsby-inc-to-accelerate-adoption-of-composable-web-architectures/"
    accessedAt: "2026-10-11"
  - label: "Netlify press release: Bolt.new and Netlify Power 1 Million AI-Generated Websites (2025-03-26)"
    url: "https://www.netlify.com/press/bolt-netlify-1-million-ai-generated-websites/"
    accessedAt: "2026-10-11"
  - label: "Netlify Blog: New credit-based pricing for today's AI development (2025-09-04)"
    url: "https://www.netlify.com/blog/new-pricing-credits/"
    accessedAt: "2026-10-11"
  - label: "Netlify press release: Netlify Launches AI Agent Runners (2025-10-01)"
    url: "https://www.netlify.com/press/netlify-launches-ai-agent-runners-to-clear-production-backlogs-turning-days-of-updates-into-minutes/"
    accessedAt: "2026-10-11"
  - label: "Netlify press release: As AI accelerates how fast code ships, Netlify delivers the production tools built for this AI era (2025-12-16)"
    url: "https://www.netlify.com/press/as-ai-accelerates-how-fast-code-ships-netlify-delivers-the-production-tools-built-for-this-ai-era/"
    accessedAt: "2026-10-11"
  - label: "Netlify press release: Netlify Turns AI Prompts Into Production-Ready Software (2026-03-18)"
    url: "https://www.netlify.com/press/netlify-turns-ai-prompts-into-production-ready-software/"
    accessedAt: "2026-10-11"
  - label: "Netlify Blog: New Netlify projects are now private by default (2026-07-28)"
    url: "https://www.netlify.com/blog/new-netlify-projects-are-now-private-by-default/"
    accessedAt: "2026-10-11"
  - label: "Netlify Blog: Open models are having a moment. We're all in. (2026-08-06)"
    url: "https://www.netlify.com/blog/build-with-open-models-in-production/"
    accessedAt: "2026-10-11"
  - label: "Netlify Blog: How we built Git storage for millions of Netlify projects (2026-09-22)"
    url: "https://www.netlify.com/blog/how-we-built-git-storage-for-millions/"
    accessedAt: "2026-10-11"
  - label: "Netlify Blog: 5x faster Edge Functions: v8 isolates to Unikraft MicroVMs (2026-09-29)"
    url: "https://www.netlify.com/blog/edge-functions-firecracker-microvms/"
    accessedAt: "2026-10-11"
  - label: "Netlify Docs: Functions overview"
    url: "https://docs.netlify.com/build/functions/overview/"
    accessedAt: "2026-10-11"
  - label: "Netlify Docs: Lambda compatibility for Functions (no longer accepted from July 1, 2027)"
    url: "https://docs.netlify.com/build/functions/lambda-compatibility/"
    accessedAt: "2026-10-11"
  - label: "Netlify Docs: Edge Functions overview (runtime based on Deno)"
    url: "https://docs.netlify.com/build/edge-functions/overview/"
    accessedAt: "2026-10-11"
  - label: "Netlify Docs: Netlify Database"
    url: "https://docs.netlify.com/build/data-and-storage/netlify-database/"
    accessedAt: "2026-10-11"
  - label: "Netlify Docs: Agent Runners overview"
    url: "https://docs.netlify.com/build/build-with-ai/agent-runners/overview/"
    accessedAt: "2026-10-11"
  - label: "Netlify Docs: AI Gateway overview"
    url: "https://docs.netlify.com/build/ai-gateway/overview/"
    accessedAt: "2026-10-11"
  - label: "Netlify Docs: Frameworks overview (Next.js, Astro, SvelteKit and other settings)"
    url: "https://docs.netlify.com/build/frameworks/overview/"
    accessedAt: "2026-10-11"
  - label: "GitHub: netlify/gotrue (Go, MIT)"
    url: "https://github.com/netlify/gotrue"
    accessedAt: "2026-10-11"
  - label: "GitHub: netlify/cli (TypeScript, MIT)"
    url: "https://github.com/netlify/cli"
    accessedAt: "2026-10-11"
  - label: "GitHub: netlify/build (JavaScript, MIT)"
    url: "https://github.com/netlify/build"
    accessedAt: "2026-10-11"
  - label: "Netlify Blog: The full power of Git, without the friction: A conversation with Netlify CTO Dana Lawson (2026-08-14)"
    url: "https://www.netlify.com/blog/netlify-source-with-netlify-cto-dana-lawson/"
    accessedAt: "2026-10-11"
  - label: "Next.js official site (Next.js by Vercel, maintained by Vercel)"
    url: "https://nextjs.org/"
    accessedAt: "2026-10-11"
  - label: "Vercel Blog: Towards the AI Cloud — Series F ($300 million at a $9.3 billion valuation, 2025-09-30)"
    url: "https://vercel.com/blog/series-f"
    accessedAt: "2026-10-11"
  - label: "Cloudflare Docs: How Workers works (V8 isolates)"
    url: "https://developers.cloudflare.com/workers/reference/how-workers-works/"
    accessedAt: "2026-10-11"
---

Netlify is a hosting platform for web applications that takes a connected Git repository, or simply a folder dropped onto it, through build and global delivery. It competes in the same market as [Vercel](/en/articles/vercel), dissected on this site, and its 2020 press release described it as a web development platform "based on Git workflows and the modern JAMstack web architecture it pioneered." The difference is that Vercel owns a framework, Next.js, as its front door, while Netlify has no framework of its own as a front door and has sold the promise that every framework runs the same way. It acquired Gatsby in 2023 but pledged to keep Gatsby open source, and its documentation lists setups for many frameworks, including Next.js, Astro and SvelteKit. Between 2025 and 2026, the company rebuilt its pricing, its execution layer, where source code lives, and who does the building, one after another.

## Service overview

Netlify lines up static sites, serverless functions, functions that run at the edge, a database, Blob storage, forms, authentication and an AI gateway on one platform, and sells everything from a free plan for individuals to enterprise contracts.

:::fact
According to the About page (as of 2026-10-11), Netlify is a venture-backed software company founded in 2014, headquartered in San Francisco with a global team. The same page says Netlify was founded in the summer of 2014 by Mathias Biilmann (co-founder and CEO) and Christian Bach (co-founder, Chief Strategy and Creative Officer), and Dana Lawson is CTO (an official blog conversation on August 14, 2026). According to press releases, the Series C in March 2020 was led by EQT Ventures at $53 million, when the platform had 800,000 developers and $97 million raised in total. The same release says Netlify bet the company in 2015 on a new architecture that removes the need for web servers, and that its founders coined the name "JAMstack" for it. The Series D in November 2021 was led by Bessemer Venture Partners with Andreessen Horowitz, BOND, EQT Ventures, Kleiner Perkins, Mango Capital and Menlo Ventures participating: $105 million at a $2 billion valuation, bringing the total raised to $212 million. At the same time the company acquired OneGraph, a GraphQL platform; it acquired Gatsby Inc. in February 2023 and Stackbit in June 2023. Its user count rises with every announcement: more than 6 million in a March 2025 press release, more than 8 million in a September 2025 blog post, more than 8.5 million in October, more than 9 million in December, and more than 10 million developers and teams in March 2026.
:::

:::fact
According to the pricing page (checked 2026-10-11, US dollars), there are four plans: Free ($0, a limit of 300 credits a month, one member), Personal ($9 a month, 1,000 credits a month, one member), Pro (unlimited members, with a monthly tier chosen from 3,000 credits for $20 up to 5,000 for $33, 10,000 for $63, 15,000 for $95 or 20,000 for $126) and Enterprise (custom, with a 99.99% SLA, SSO and SCIM, and log drains). Usage is counted in a single unit, credits: a production deploy costs 15 credits, compute 10 credits per GB-hour, bandwidth 20 credits per GB, web requests 2 credits per 10,000, and AI inference varies with the cost of the model used. With auto recharge enabled, Personal can buy 500 additional credits for $5 and Pro 1,500 for $10 (custom on Enterprise). Deploy Previews and branch deploys are unlimited, and on new credit-based accounts new projects stay private until published. According to the official blog of September 4, 2025, credit-based pricing was introduced that day, existing customers may stay on their legacy plans, and Pro became "$20/month with 5,000 credits (was $19/month)." The same post gives the reasons: AI development doubled the community in a year to more than 8 million developers, and the old pricing assumed development at a human pace.
:::

:::pull
A company without a framework of its own as a front door has to sell what lies outside the framework. What Netlify rebuilt was the unit of its prices, the path code arrives by, and the box a function runs in.
:::

::scorecard

## UX analysis

Netlify spent ten years polishing "not having to think about deploys," and since 2025 has shifted its weight to "how to receive code that people did not write."

- **It arrives even without a git push.** According to the official blog (2026-09-22), in the most recent month 93% of new projects were created directly through Netlify Drop (uploading a folder or zip), the API, MCP or an agent, up from 70% two years earlier; in absolute terms that is multiple millions a month, which the post calls a 14x increase. Projects that arrive without a Git host quietly get a Netlify-managed Git repository, which can be cloned, pushed to another remote, or exported to GitHub. The front door widened without the back door closing.
- **Private became the default.** According to the official blog (2026-07-28), on new credit-based teams every new project starts private, protected by Netlify login and not publicly accessible until it is made public (team members and invited collaborators can sign in to view it). The post explains this as a response to prototypes, internal tools and agent-built projects becoming common, where "a deploy is often a work in progress, not a publication." There is no password to create or share; access follows the team's permissions.
- **One unit for the price.** The official blog says there is no longer any need to juggle "dozens of separate metrics": usage falls into five categories (production deploys, compute, forms, bandwidth and web requests) counted in one number, credits. One number is easier to watch, but a production deploy costing 15 credits means every production release has a price, so a workflow that pushes many small fixes to production will see the number move. Deploy Previews can be made as often as you like without the 15 credits of a production deploy, so separating where you try things from where you publish them becomes, in itself, cost design, although visits to previews still use credits as web requests.
- **The agent lives inside the dashboard.** According to the press release (2025-10-01), Agent Runners run Claude Code, Codex and Gemini from the dashboard with access to the codebase, logs and deploy pipeline, and changes go to production through previews and approvals. With netlify.new in March 2026, a new project can start from a prompt alone. According to the docs, for Git-connected projects Agent Runners work only with GitHub, not with projects connected to GitLab, Bitbucket, Azure DevOps or Cursor Origin.
- **Freedom to choose a model is a selling point.** According to the official blog (2026-08-06), Agent Runners and AI Gateway support open-weight models such as DeepSeek, Qwen, GLM and Kimi through partnerships with OpenRouter and OpenCode, and switching between Claude, GPT and Gemini changes nothing about the project, the deploy pipeline or the production environment.
- **The end of the compatibility mode has a date.** According to the docs, "Lambda compatibility mode," in which functions are written with the AWS Lambda handler signature, is deprecated, and deploys containing such functions will not be accepted from July 1, 2027. The migration paths are the modern Functions API, or a compatibility package that runs Lambda-style handlers on the new runtime. Because the deadline is stated, users with old functions can see how much time they have.

## Tech stack

::techstack

:::fact
According to the official blog (2026-09-29), Edge Functions run about a billion times a day. Previously a request left Netlify's network, was processed by a hosted execution service and came back; in the rebuilt infrastructure, the edge node terminates TLS and, if the path matches an edge function route, forwards the request to a compute node inside the network. The compute node creates a Firecracker MicroVM per function in under a millisecond, boots it in about 2ms at p99, and mounts the function's files as an EROFS image that is memory-mapped so only the parts actually used are read. A snapshot is taken once the JavaScript server starts listening; when a function is not being invoked its MicroVMs scale to zero, and the next invocation restores from the snapshot. Boot, snapshot, restore and scale-to-zero are the work of Unikraft's product. Deploys with different code or environment variables become separate service IDs, rendezvous hashing sends the same service to the same compute node to keep VMs warm, and above a threshold a service is spread over several nodes. As a result, a warm invocation's median fell from 25–40ms to 5–6ms, p99 became 47.4% faster, availability is 99.998%, and cold starts occur on about 1.2% of invocations at about 9ms on average. The post adds that this provides isolation that V8 isolates did not, that the current limits of 50ms of CPU, 512MB of memory and 20MB of compressed code came from the isolate era and can be revisited, and that npm package support can leave beta.
:::

:::fact
According to the official blog (2026-09-22), the in-house Git service built for projects that arrive without a Git host is written in Go, runs the Git binary against a local bare repository and behaves as an ordinary remote over Smart HTTP. The durable source of truth is S3: objects and packfiles are stored in Git's native formats and refs as small JSON records. A push proceeds as a sync from S3, a run of git receive-pack, an upload of new objects, and an update of refs with an If-Match conditional write against the ETag; because S3 checks the condition atomically, if two pods advance the same branch at once only one succeeds. Success is not reported to the client until persistence to S3 completes, and on large pushes Git progress messages are sent every ten seconds to keep the connection alive. Preparing the workspace for builds and agent runs took 0.76s at the median and 2.26s at p95 during September 7–13, 2026, close to the 0.84s and 2.51s of GitHub-connected projects. Publishing an agent run became, most of the time, a git merge and a push, and conflict-free updates went from minutes to about one second. According to the docs, Netlify Functions run in an ephemeral runtime environment and Edge Functions in a runtime based on Deno. On GitHub, netlify/gotrue is a JWT-issuing API written in Go, netlify/cli is TypeScript and netlify/build is JavaScript, all MIT licensed. This site's own observation (2026-10-11) found www.netlify.com, app.netlify.com and docs.netlify.com returning server: Netlify and cache-status: "Netlify Edge", with a server-timing header containing dc;desc="aws-nrt".
:::

:::guess
Keeping the underlying cloud on AWS while building the layers that decide the experience, such as the edge compute nodes and the Git storage, appears to closely resemble the trade-off seen in the dissection of [Vercel](/en/articles/vercel). Moving Edge Functions from an external execution service to MicroVMs inside its own network appears to be a decision about more than speed: owning the request path brings isolation, debuggability and unit costs back into the company's own hands. The direction from V8 isolates to MicroVMs looks like the opposite of [Cloudflare](/en/articles/cloudflare), which made isolates its banner for Workers, but Netlify was not operating isolates itself; it was renting an outside service, so the comparison that matters is "it decided to own the box it had been renting." A Git storage design that handles concurrent pushes across pods with S3 conditional writes appears to trade replica management for atomicity that is deliberately narrow, one ref at a time, which also seems consistent with the official blog's words: "We don't want to become a Git hosting provider."
:::

## Who does the building

:::fact
According to the press release (2025-03-26), more than one million sites generated with Bolt.new and deployed on Netlify were built in the five months from November 2024 to March 2025, and the company said the partnership supports the new era of "agent experience (AX)." According to the release of October 1, 2025, Agent Runners bring Claude Code, Codex and Gemini into the dashboard, and the company describes three stages joined into one flow: creation in one of twenty partners such as Bolt, Same and Rocket; development with Copilot, Windsurf and Cursor through the MCP server or Git; and production with Agent Runners. Based on data from the early release program, it estimated about three hours a week per developer and roughly $18,000 of annual capacity per developer recovered. The release of December 16, 2025 made Observability, AI Gateway (which centralizes credentials, simplifies billing and tracks usage across providers including Anthropic, OpenAI and Google Gemini) and Prerender extensions, which serve rendered HTML to crawlers and AI agents, generally available, and the release of March 18, 2026 announced that a new project can be started from a prompt at netlify.new, and an "Internal Builder" seat for enterprises so that product managers, designers and marketers can build with agents. Figma, Mattel and Riot Games are named as customers.
:::

| Announcement | Date | User count Netlify published |
| --- | --- | --- |
| Series C | March 2020 | 800,000 developers |
| Series D ($2 billion valuation) | November 2021 | more than 2 million developers |
| Gatsby acquisition | February 2023 | more than 3 million developers |
| 1 million sites with Bolt.new | March 2025 | more than 6 million developers |
| Credit-based pricing | September 2025 | more than 8 million developers (doubled in a year) |
| Agent Runners | October 2025 | more than 8.5 million |
| Observability and AI Gateway | December 2025 | more than 9 million |
| netlify.new | March 2026 | more than 10 million developers and teams |

:::guess
The announcements do not count the same way (developers only, teams included, or cumulative), but a count that took two years to go from 3 million in 2023 to 6 million in March 2025, and then one year to reach 10 million, appears to reflect users who do not write code themselves, arriving from generation tools such as Bolt. This group presumably stays on the free plan and brings little revenue per person, but Netlify's move to credits, private-by-default projects and credit-billed inference in Agent Runners reads as a design that turns the act of "trying" itself into the unit of billing. The 93% figure for projects that bypass a Git host suggests the company's position has shifted from standing beside GitHub to standing in front of it. On the other hand, that Agent Runners support only GitHub among Git connections suggests the integrations built for agents are still being rolled out one major provider at a time.
:::

## Business model

Revenue comes from the Personal, Pro and Enterprise plans and from usage counted in credits. The shape, a free plan to attract users and team and enterprise contracts to earn, has not changed, but putting AI inference on the credit meter extended what is billed from delivery to the act of building.

:::fact
According to the partner page (checked 2026-10-11), everyone joins Netlify Partners as an Ecosystem Partner and earns a 20% revenue share for up to 12 months on eligible self-serve new business. Ecosystem Partners in good standing who refer three or more new Pro customers or one or more new Enterprise customers a year and complete the required training qualify as Certified Partners (who must also be active Netlify customers), earning 20% for up to 24 months on self-serve and enterprise revenue, including renewals and expansion. An Ecosystem Partner does not need to be a Netlify customer, there is no exclusivity, and tracking, attribution, reporting and brand assets go through PartnerStack. Applications are reviewed by the Netlify Partner Team. According to the press release (2021-11-17), at the time of the Series D an estimated 16% of the internet population visited a Netlify-powered site every month, and customers included Adyen, Affirm, Autodesk, Box, H&R Block, Klépierre, Okta, ServiceNow, Twilio, Unilever and VMware. The 2023 Gatsby acquisition release said Gatsby, after building a cloud platform on top of its framework, had been growing revenue at more than 100% year over year, and that the Gatsby framework would remain open source.
:::

:::guess
Netlify's weakness appears to have been that it had no framework like [Vercel](/en/articles/vercel)'s Next.js, given away free to funnel users to the company. The Gatsby acquisition can be read as an attempt to fill that hole, but the company kept its framework-neutral stance afterward and chose instead to make generation tools such as Bolt and agents such as Claude Code and Codex its front door. It is a strategy of being the place where agents and tools put things, rather than the author of a framework, and lining up open-weight models as well reads as insurance against any single model company owning that front door. The $2 billion valuation dates from November 2021, and no later fundraising appears among the official press releases. Compared with Vercel's $300 million raise at a $9.3 billion valuation in September 2025, the gap in capital has widened, and Netlify's shift to credits and its 20% payout to partners look like practical means of growing paying users without paying for advertising up front.
:::

Founded in 2014, and in 2015 betting the company on the architecture its founders named Jamstack, Netlify spent ten years making deploys something you do not have to think about, and in the year from 2025 it remade the unit of its prices as credits, the box for edge functions as MicroVMs, the home of code as its own Git, and the builder from people to agents. It is the year to watch whether a company without a framework of its own as a front door, betting on agents instead, can move the number that comes after 10 million.
