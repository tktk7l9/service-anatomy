---
service: "Warp"
title: "Give Away the Terminal, Charge for the Agent's Work — In Year Five, Warp Opened Its Client Under AGPL and Moved What It Sells to Software-Factory Infrastructure"
description: "Warp launched in 2022 as a terminal written in Rust and rendered on the GPU. It dropped mandatory login in 2024, renamed itself an agentic development environment in 2025, open-sourced its client under AGPL v3 in April 2026, and in August 2026 put Warp Factories, a system for running agents in the cloud, at the front. We dissect the home-built Rust UI framework, the blocks made from an Alacritty-derived grid and shell hooks, the ConPTY fork, the agent core that stays on the server, usage-based pricing at $20 a month for 1,500 credits, and the $73 million in publicly announced funding, from the official blog, docs, GitHub and press reports."
lead: "\"A terminal shouldn't need a login.\" That was the most common criticism of Warp after its 2022 launch. In February 2024 the founder wrote that neither the login requirement nor the closed source would change for now. Nine months later the login requirement was gone, and in April 2026 the client's source code was published under AGPL. The home page no longer calls the product a terminal; it calls it an open platform for automating development. We dissect where a company that gives its tool away moved the price tag."
category: dev-tool
tags: [ai, terminal, rust, open-source, coding-agent]
publishedAt: "2026-10-01"
updatedAt: "2026-10-01"
lastVerified: "2026-10-01"
serviceUrl: "https://www.warp.dev/"
vendor: "Denver Technologies, Inc. (d/b/a Warp)"
origin: "US"
heroTheme: "warp"
scores: { product: 4.0, ux: 4.0, tech: 4.5, business: 3.5 }
techStack:
  - layer: "Client language"
    name: "Rust"
    confidence: confirmed
    evidence: "The official blog post \"How Warp Works\" (2021-07-12) says the team switched to Rust after a brief experiment with Electron, so one language could target Mac, Linux, Windows and, by compiling to WASM, the web. In our observation (2026-10-01) the GitHub API's per-language byte counts for warpdotdev/warp showed Rust at about 65.9 million bytes, the large majority"
    evidenceUrl: "https://www.warp.dev/blog/how-warp-works"
  - layer: "Rendering (macOS)"
    name: "Metal (direct GPU rendering)"
    confidence: confirmed
    evidence: "The same post says the team chose Metal over OpenGL because macOS was the first target, and kept the shaders to about 200 lines by limiting what is drawn to three primitives: rectangles, images and glyphs"
    evidenceUrl: "https://www.warp.dev/blog/how-warp-works"
  - layer: "Rendering (cross-platform)"
    name: "wgpu + winit + cosmic-text"
    confidence: confirmed
    evidence: "The official Linux launch post (2024-02-22) says the Linux build sits on the cross-platform open-source Rust libraries wgpu, winit and cosmic-text, and shares about 98% of its code with the Mac app. The public repository's Cargo.toml also specifies wgpu 30.0.0 with the dx12, gles, metal and vulkan features, and points winit at the company's own fork (observed 2026-10-01)"
    evidenceUrl: "https://www.warp.dev/blog/warp-for-linux"
  - layer: "UI framework"
    name: "WarpUI (warpui_core / warpui, MIT license)"
    confidence: confirmed
    evidence: "\"How Warp Works\" says that, lacking a stable Rust UI framework, the team partnered with Atom co-founder Nathan Sobo and built its own, loosely inspired by Flutter. The public repository's README licenses the UI framework crates (warpui_core, warpui) under MIT and the rest under AGPL v3"
    evidenceUrl: "https://github.com/warpdotdev/warp"
  - layer: "Terminal data model"
    name: "Alacritty-derived grid + shell hooks (precmd / preexec) + DCS"
    confidence: confirmed
    evidence: "\"How Warp Works\" says the team started by forking Alacritty's model code, and separates commands and their output into blocks by having the shell's precmd and preexec hooks send a custom DCS (Device Control String) carrying JSON"
    evidenceUrl: "https://www.warp.dev/blog/how-warp-works"
  - layer: "Windows PTY"
    name: "ConPTY (company fork)"
    confidence: confirmed
    evidence: "The official blog (2025-01-22) says ConPTY did not forward the custom DCS and delivered OSCs out of order, which broke blocks, so the team forked ConPTY. It also says the PowerShell shell integration was written from scratch"
    evidenceUrl: "https://www.warp.dev/blog/building-warp-on-windows"
  - layer: "License and what is open"
    name: "Client: AGPL v3 / UI crates: MIT / server, Drive, Oz: not public"
    confidence: confirmed
    evidence: "The public repository's FAQ says the client is open under AGPL v3 and the UI framework crates under MIT, while the server, the Warp Drive backend, hosted authentication and Oz, the agent orchestration layer, are not in the repository and remain proprietary today. It also says the built-in agent harness runs server-side and is not open"
    evidenceUrl: "https://github.com/warpdotdev/warp/blob/master/FAQ.md"
  - layer: "Client-server communication"
    name: "GraphQL (cynic / graphql-ws-client)"
    confidence: confirmed
    evidence: "The public repository's Cargo.toml (observed 2026-10-01) lists the workspace crates crates/graphql and warp_graphql_schema, plus the Rust GraphQL client cynic 3 and graphql-ws-client 0.11.1 as dependencies"
    evidenceUrl: "https://github.com/warpdotdev/warp/blob/master/Cargo.toml"
  - layer: "Cloud agent runtime"
    name: "Docker sandboxes (Warp-hosted / self-hosted)"
    confidence: confirmed
    evidence: "The Oz press release (2026-02-10) says agents run in sandboxed cloud environments powered by Docker, hosted on Warp's infrastructure or self-hosted for enterprise customers. The subprocessor list (last modified 2026-09-02) names Docker and Namespace Labs under \"customer compute hosting\""
    evidenceUrl: "https://www.warp.dev/newsroom/2026/2/10/warp-launches-oz-the-orchestration-platform-for-cloud-coding-agents"
  - layer: "AI models"
    name: "Models from several providers (Anthropic / OpenAI / Google / xAI / Fireworks AI)"
    confidence: confirmed
    evidence: "The pricing FAQ in the official docs says Warp integrates with multiple LLM providers including Anthropic, OpenAI, Google, xAI and Fireworks AI, and has executed Zero Data Retention (ZDR) agreements with them. Traffic routed through a user's own API key or a custom inference endpoint follows that provider's policies instead"
    evidenceUrl: "https://docs.warp.dev/support-and-community/plans-and-billing/pricing-faqs/"
  - layer: "Codebase search"
    name: "Turbopuffer / Voyage AI / Cohere"
    confidence: confirmed
    evidence: "The official subprocessor list (last modified 2026-09-02) names Turbopuffer, Voyage AI and Cohere under \"codebase search\". The same list names Temporal for workflow orchestration, WorkOS for authentication and identity infrastructure, and Stripe for payments"
    evidenceUrl: "https://www.warp.dev/legal/subprocessors"
  - layer: "Instrumentation"
    name: "Sentry (crash reporting) / RudderStack (app analytics)"
    confidence: confirmed
    evidence: "The privacy page in the official docs says Warp uses Sentry for crash reporting and RudderStack for app analytics. Both can be turned off under Settings > Privacy"
    evidenceUrl: "https://docs.warp.dev/support-and-community/privacy-and-security/privacy/"
  - layer: "Server infrastructure"
    name: "Google Cloud (app.warp.dev)"
    confidence: likely
    evidence: "In our HTTP header observation (2026-10-01), app.warp.dev returned server: Google Frontend and via: 1.1 google, and its CSP included securetoken.googleapis.com and identitytoolkit.googleapis.com (Firebase Authentication endpoints). The public repository also has crates/firebase. The subprocessor list names AWS, Azure and Vercel as cloud infrastructure too, and we found no official breakdown of which workload runs where"
  - layer: "Website"
    name: "Next.js + Tailwind CSS (served by Vercel)"
    confidence: confirmed
    evidence: "The official blog (2026-06-02) says the team abandoned its no-code site and rebuilt it from scratch with Next.js and Tailwind so that agents can work on it. In our observation (2026-10-01) www.warp.dev returned server: Vercel and x-powered-by: Next.js, and its CSP included Sanity domains"
    evidenceUrl: "https://www.warp.dev/blog/why-we-tore-down-our-no-code-site-and-went-back-to-code"
  - layer: "Documentation"
    name: "Astro Starlight (served by Vercel)"
    confidence: confirmed
    evidence: "The package.json of the public docs repository warpdotdev/docs (observed 2026-10-01) lists @astrojs/starlight and @astrojs/vercel as dependencies. docs.warp.dev returned server: Vercel"
    evidenceUrl: "https://github.com/warpdotdev/docs"
sources:
  - label: "Warp: home page (current positioning)"
    url: "https://www.warp.dev/"
    accessedAt: "2026-10-01"
  - label: "Warp blog: Introducing Warp (public beta and $23M in funding, 2022-04-05)"
    url: "https://www.warp.dev/blog/introducing-warp"
    accessedAt: "2026-10-01"
  - label: "TechCrunch: Warp raises $23M to build a better terminal (2022-04-05)"
    url: "https://techcrunch.com/2022/04/05/warp-raises-23m-to-build-a-better-terminal/"
    accessedAt: "2026-10-01"
  - label: "Warp blog: Warp Drive and the Series B (2023-06-21)"
    url: "https://www.warp.dev/blog/warp-drive-series-b"
    accessedAt: "2026-10-01"
  - label: "Wikipedia: Warp (terminal) (founding year)"
    url: "https://en.wikipedia.org/wiki/Warp_(terminal)"
    accessedAt: "2026-10-01"
  - label: "Warp blog: How Warp Works (2021-07-12)"
    url: "https://www.warp.dev/blog/how-warp-works"
    accessedAt: "2026-10-01"
  - label: "Warp blog: Warp for Linux (2024-02-22)"
    url: "https://www.warp.dev/blog/warp-for-linux"
    accessedAt: "2026-10-01"
  - label: "Warp blog: Bringing Warp to Windows, engineering learnings (2025-01-22)"
    url: "https://www.warp.dev/blog/building-warp-on-windows"
    accessedAt: "2026-10-01"
  - label: "Warp blog: Open source and login for Warp (2024-02-22)"
    url: "https://www.warp.dev/blog/open-source-and-login-for-warp"
    accessedAt: "2026-10-01"
  - label: "Warp blog: Lifting the login requirement (2024-11-22)"
    url: "https://www.warp.dev/blog/lifting-login-requirement"
    accessedAt: "2026-10-01"
  - label: "Warp blog: the Pro plan (2024-06-24)"
    url: "https://www.warp.dev/blog/pro-plan"
    accessedAt: "2026-10-01"
  - label: "Warp blog: Warp 2.0 and the Agentic Development Environment (2025-06-24)"
    url: "https://www.warp.dev/blog/reimagining-coding-agentic-development-environment"
    accessedAt: "2026-10-01"
  - label: "Warp blog: pricing changes and the Build plan (2025-10-30)"
    url: "https://www.warp.dev/blog/warp-new-pricing-flexibility-byok"
    accessedAt: "2026-10-01"
  - label: "Warp: Oz press release (2026-02-10)"
    url: "https://www.warp.dev/newsroom/2026/2/10/warp-launches-oz-the-orchestration-platform-for-cloud-coding-agents"
    accessedAt: "2026-10-01"
  - label: "Warp blog: Warp is now open-source (2026-04-28)"
    url: "https://www.warp.dev/blog/warp-is-now-open-source"
    accessedAt: "2026-10-01"
  - label: "GitHub: warpdotdev/warp (README, licenses, star count)"
    url: "https://github.com/warpdotdev/warp"
    accessedAt: "2026-10-01"
  - label: "GitHub: warpdotdev/warp FAQ.md (what is open and why these licenses)"
    url: "https://github.com/warpdotdev/warp/blob/master/FAQ.md"
    accessedAt: "2026-10-01"
  - label: "Warp blog: Introducing the Warp Agent CLI (2026-08-04)"
    url: "https://www.warp.dev/blog/introducing-the-warp-agent-cli-coding-agent"
    accessedAt: "2026-10-01"
  - label: "Warp blog: Introducing Warp Factories (2026-08-18)"
    url: "https://www.warp.dev/blog/open-infrastructure-for-building-a-software-factory"
    accessedAt: "2026-10-01"
  - label: "TechCrunch: report on Warp Factories (2026-08-18)"
    url: "https://techcrunch.com/2026/08/18/warps-new-system-is-an-out-of-the-box-software-factory-for-ai-development/"
    accessedAt: "2026-10-01"
  - label: "Warp blog: Sign in to Warp with ChatGPT (2026-09-29)"
    url: "https://www.warp.dev/blog/sign-in-to-warp-with-chatgpt"
    accessedAt: "2026-10-01"
  - label: "Warp: pricing page"
    url: "https://www.warp.dev/pricing"
    accessedAt: "2026-10-01"
  - label: "Warp docs: credits and billing"
    url: "https://docs.warp.dev/support-and-community/plans-and-billing/credits/"
    accessedAt: "2026-10-01"
  - label: "Warp docs: pricing and billing FAQs (BYOK, ZDR)"
    url: "https://docs.warp.dev/support-and-community/plans-and-billing/pricing-faqs/"
    accessedAt: "2026-10-01"
  - label: "Warp docs: privacy and data control (telemetry)"
    url: "https://docs.warp.dev/support-and-community/privacy-and-security/privacy/"
    accessedAt: "2026-10-01"
  - label: "Warp docs: using Warp offline"
    url: "https://docs.warp.dev/support-and-community/troubleshooting-and-support/using-warp-offline/"
    accessedAt: "2026-10-01"
  - label: "Warp: subprocessor list (last modified 2026-09-02)"
    url: "https://www.warp.dev/legal/subprocessors"
    accessedAt: "2026-10-01"
  - label: "Warp: terms of service (name of the operating entity)"
    url: "https://www.warp.dev/legal/terms-of-service"
    accessedAt: "2026-10-01"
  - label: "Warp blog: why the marketing site went back to code (2026-06-02)"
    url: "https://www.warp.dev/blog/why-we-tore-down-our-no-code-site-and-went-back-to-code"
    accessedAt: "2026-10-01"
  - label: "Ghostty: Financial Support (fiscal sponsorship by Hack Club)"
    url: "https://ghostty.org/docs/sponsor"
    accessedAt: "2026-10-01"
---

A terminal is a tool developers open every day and almost never pay for. One ships with every operating system, and capable alternatives are available as open source. Warp raised venture money to build that unpaid-for tool, which is why it has redrawn the line between what is free and what is sold several times in five years. Following that line shows where developer tools are trying to earn money in the AI era.

## What It Is

Warp is a family of products: a terminal for macOS, Windows and Linux, a coding agent that runs inside it, and infrastructure for running many agents in the cloud. On the home page as we observed it (2026-10-01), the title reads "The Open Platform for Automating Development," and three products are listed: Factories, Terminal and Agent CLI.

:::fact
According to Wikipedia, Warp was founded in June 2020 by Zach Lloyd. Warp's press release (2026-02-10) describes Lloyd as the former engineering lead for Google Sheets and the Google Docs suite, and says the company is based in New York. The operating entity named in the terms of service is Denver Technologies, Inc. (d/b/a Warp). According to the official blog, the public beta for Mac opened on April 5, 2022 and the Linux version shipped in February 2024; the company's 2025 year-in-review says the Windows version launched in February 2025.
:::

:::fact
The product has been renamed three times. At the 2022 launch it was "the terminal for the 21st century." With Warp 2.0 in June 2025 it became an "Agentic Development Environment" that put Code, Agents, Terminal and Drive into one app. In February 2026 the company announced Oz, a platform for running and managing agents in the cloud, and on August 18, 2026 it announced Warp Factories in closed beta, which hands triage, spec writing, implementation, review and verification to cloud agents. On user numbers, the February 2026 press release says "over 700,000 developers," the April 2026 blog post says "nearly a million active developers," and the terminal product page as we observed it says "800k+ devs" — the figure differs by page.
:::

:::pull
The terminal itself is no longer the thing for sale. What Warp prices is the amount of work an agent does on the other side of it.
:::

::scorecard

## UX Analysis

We have not operated Warp hands-on for this article. What follows is an analysis of the design as described in the official blog, the docs and the public repository.

- **The input is a text editor; the output is blocks.** According to "How Warp Works," the command input is a full text editor with selections, cursor positioning and multiple cursors, and each command and its output are grouped into a unit called a block. Copying only the output, or jumping to the previous command's result, operates on a chunk rather than on a stream of characters.
- **Commands and requests go in the same field.** Since Agent Mode in June 2024, a request written in plain language in that same input makes the agent ask permission to run commands and use their output to decide the next step. The Agent CLI post (2026-08-04) says a classifier automatically tells shell commands apart from prompts.
- **It can be just a terminal, or a development environment.** The open-source announcement (2026-04-28) says users can now choose anything from a plain terminal, to a setup that adds only a diff view and a file tree, to a full environment with built-in agents, and that a settings file was added.
- **It starts without a login.** Since November 22, 2024, Warp can be used without creating an account. According to the docs, the app must be online at first launch, when a user ID is created to meter AI usage; for logged-out use that ID is attached to an anonymous user account. After initial setup, the core terminal features work offline.
- **It shows what leaves the machine.** The docs publish a table of every telemetry event, describe an in-app Network Log for inspecting traffic, and say "Help improve Warp" and crash reporting can be turned off under Settings > Privacy. The same page says that, unless a user opts out, Warp may collect product usage analytics and the AI interactions and console inputs that power its AI features, with secret redaction always applied to AI interactions. It says no AI interaction or console data is collected on Business and Enterprise plans.
- **It works in other terminals too.** The Warp Agent CLI of August 2026 is the built-in agent split out as a standalone CLI; the blog says it runs in Ghostty, iTerm2, VS Code and the terminals built into the operating system.

:::fact
The position on login reversed within two and a half years of launch. In an official blog post dated February 22, 2024, founder Zach Lloyd wrote that login was needed for team features and for metering AI usage, and that he would not adopt "delayed login" — asking only when a cloud feature is used — because he believed it leads to a worse experience. In the same post he explained that no console data is sent to Warp's servers unless a user opts in to collaboration or device syncing, and that telemetry had been made optional in response to feedback. Then, on November 22, 2024, the official blog announced that the requirement was lifted, saying hundreds of developers had told the company that it kept them from using Warp.
:::

:::guess
Lifting the login requirement appears to be less an abandonment of the policy than a lowering of the unit of identification from an account to an anonymous ID. The need to meter AI usage remains, so the step of creating an ID online at first launch is kept. It can be read as a compromise: remove the friction users see (registering an email address) while keeping the measurement the business needs.
:::

## Tech Stack

::techstack

:::fact
According to "How Warp Works" (2021-07-12), Warp's initial requirements were speed (60fps even on 4K or 8K monitors), compatibility with bash, zsh and fish, multiple platforms including the web, rendering arbitrary UI elements, and editor-grade input. After a brief experiment with Electron, the team moved to Rust and direct GPU rendering with Metal. By limiting what is drawn to three primitives — rectangles, images and glyphs — it kept the shaders to about 200 lines, and on top of that it built its own Rust UI framework, loosely inspired by Flutter, in partnership with Atom co-founder Nathan Sobo. The company writes that this "essentially amounted to building the architecture of a browser."
:::

:::fact
Blocks are built by extending the old contract between a terminal and a shell. According to the same post, a terminal only reads and writes characters through a pseudoterminal, so it cannot normally know where one command ends and the next begins. Warp has the shell's precmd and preexec hooks send a custom DCS (Device Control String) carrying JSON, and uses it as the marker for creating a block. The grid data model started as a fork of Alacritty's code. According to the Windows engineering post (2025-01-22), the Windows pseudoconsole ConPTY did not forward that custom DCS, and the OSCs used instead arrived out of order, so the team forked ConPTY. The post says around five engineers had been working on the Windows version since April 2024.
:::

:::fact
On April 28, 2026, Warp published its client source code at github.com/warpdotdev/warp. According to the repository's FAQ, the app and most crates are licensed under AGPL v3 and the UI framework crates (warpui_core, warpui) under MIT; the server, the Warp Drive backend, hosted authentication and Oz, the agent orchestration layer, are not included and remain proprietary. The built-in agent harness runs server-side and is not open. On the choice of AGPL, the FAQ explains that a permissive license would let someone fork the client and ship a closed product, and that the company wanted derivatives to stay open. The README names OpenAI as the founding sponsor of the open-source repository. In our observation (2026-10-01), the repository had 65,321 stars.
:::

:::guess
Where the open-source line is drawn appears to overlap closely with where the money is made. In February 2024, Lloyd wrote that most of Warp's value was in the client-side app and that open-sourcing it risked capping the company's ability to monetize. That the same client could be opened two years later is presumably because billing had moved from client features to the agent harness and the cloud runtime that run on the server. Opening the client leaves the priced part in the company's hands.
:::

:::guess
The home-built UI framework was originally a choice for speed, but it appears to have become an asset in the agent era. The Agent CLI post says the CLI is built on Warp's terminal infrastructure and puts a pseudoterminal layer between the agent and the shell, which lets the agent drive full-screen apps such as vim or a database REPL. Holding terminal input and output in structured form as blocks is presumably what gives the agent a way to know what is happening on screen.
:::

## Business Model

Warp's revenue comes from monthly subscriptions combined with credits that are drawn down by the amount of agent work. Using it as a terminal is free. The company does not disclose its revenue.

:::fact
According to the pricing page as we observed it (2026-10-01), there are five plans. Free is $0 and includes the core terminal features, the Agent CLI and the option to bring your own inference. Build is $20 a month ($18 a month billed annually) with 1,500 credits, described as "$20 of included agent usage at API rates." Max is $200 a month ($180 annually) with 18,000 credits. Business is $50 per user per month ($45 annually) for up to 25 seats, with 1,500 credits per seat and SAML-based SSO. Enterprise is custom-priced and includes routing inference through the customer's own cloud and running cloud agents on the customer's own infrastructure. According to the docs, the Free plan does not include bundled AI usage for the built-in agent: to use it, a user upgrades, buys add-on credits, or brings their own API key or similar. An official blog post on September 29, 2026 announced that users can sign in with a ChatGPT account and use that subscription's included usage for AI requests in Warp.
:::

:::fact
Credits track the volume of tokens processed, not the number of exchanges. According to the docs, consumption varies with the model, the number of tool calls, task complexity and codebase size; two similar prompts can use different amounts, and there is no exact formula for predicting usage. Credits come in three buckets: AI credits for the model call, compute credits for the sandbox a cloud agent runs in, and platform credits for the platform layer — run lifecycle, integrations, dashboard and APIs — which are billed by the agent hour. Ordinary shell commands and non-AI features do not consume credits.
:::

:::fact
The pricing unit has moved from counts to work. According to the official blog in June 2024, usage was then counted in AI "requests": 40 a month on the free plan, 500 on Pro and 750 on Team. In a post dated October 30, 2025, Lloyd announced that the Pro, Turbo and Lightspeed plans would be retired and consolidated into Build. The reasons he gave were that many users did not use all the credits they paid for, that overages had become eight times more expensive than in-plan credits, and that at full usage the plans did not scale sustainably — Warp was losing more money as usage grew. The same post says the change would be more expensive for some users and that the company expected some churn. At that time, bringing your own API key was available only on paid plans; the current docs say it can be configured on the Free plan as well.
:::

:::fact
On funding, the publicly announced total is $73 million (the sum is our own calculation). According to TechCrunch (2022-04-05), Warp raised $23 million across a $6 million seed round led by GV and a $17 million Series A led by Figma co-founder Dylan Field. Warp's official blog (2023-06-21) announced a $50 million Series B led by Sequoia Capital and named Sam Altman and Tobi Lutke among the new angel investors. As far as we could confirm (2026-10-01), the company's newsroom and press pages show no announcement of a later round or of a valuation. By contrast, the open-source terminal Ghostty is, according to its official site, fiscally sponsored by Hack Club, a 501(c)(3) non-profit, and developed as non-profit work supported by donations.
:::

:::guess
The move from request counts to usage-based credits appears to reflect a cost problem common to tools with built-in AI. Once an agent calls a model dozens of times for a single request, a flat plan sold by count loses money on its heaviest users. That Warp acknowledged this in public, describes credits in near-cost terms ("at API rates"), and opened bring-your-own inference even to the Free plan suggests it is leaning toward earning outside the resale of inference — on the harness, the cloud runtime and the management layer.
:::

:::guess
Warp Factories appears to be an extension of that direction. In the open-source announcement, Lloyd wrote that although Warp is a VC-funded startup, it does not have the resources to compete on price or massively subsidize usage. Asking individual developers for $20 a month puts the company on the same field as competitors that own their models. Infrastructure for running agents in the cloud, measuring their cost and output, and governing their permissions, on the other hand, is something any company needs whichever model or harness it uses, and it can be billed by working time. Factories is still in closed beta, and how this bet turns into revenue cannot be judged from the figures made public.
:::

Warp was criticized for requiring a login and criticized for being closed source, and over several years it let go of both. What it let go of, though, was also what it no longer needed to defend. With the terminal's features free and the source code public, the starting point of billing does not move as long as the agent core and the runtime sit on the server. As developer tools shift their weight from software that runs on your machine to agents that work on the other side, open-sourcing and earning are less at odds than they used to be. Warp's five years read as a record of that turning point.
