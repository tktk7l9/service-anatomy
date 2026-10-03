---
service: "Lovable"
title: "It Doesn't Sell the Apps It Builds in Its Own Store — Why Lovable Started Distributing Inside ChatGPT and Claude"
description: "Lovable generates a complete app from conversation alone. Rebranded from its predecessor GPT Engineer in December 2024, it reached $100M ARR and an $1.8B valuation within eight months, then hit a $6.6B valuation in a December 2025 Series B and a $13.3B valuation in an August 2026 Series C. In July 2026 it began letting apps built with Lovable run directly inside ChatGPT and Claude. A dissection, from official sources, of why a developer tool that, like [Cursor](/en/articles/cursor), grew revenue in a short time doesn't insist on keeping consumption inside its own app."
lead: "Someone using an app built with Lovable doesn't necessarily ever visit Lovable's own site. In July 2026, Lovable began letting apps built on its platform run directly inside ChatGPT and Claude. This Stockholm, Sweden company reached $100M ARR within eight months of rebranding from its predecessor, GPT Engineer, hit a $6.6 billion valuation by December 2025, and a $13.3 billion valuation by August 2026. This dissects a company that doesn't lock its own apps inside its own storefront."
category: dev-tool
tags: [ai, app-builder, vibe-coding, supabase, developer-tools]
publishedAt: "2026-07-23"
updatedAt: "2026-10-03"
lastVerified: "2026-10-02"
serviceUrl: "https://lovable.dev/"
vendor: "Lovable Labs Incorporated"
origin: "SE"
heroTheme: "lovable"
scores: { product: 4.5, ux: 4.0, tech: 3.5, business: 4.5 }
techStack:
  - layer: "Backend integration"
    name: "Supabase (database / auth integration)"
    confidence: confirmed
    evidence: "Lovable's official documentation states the Supabase integration handles database design, migrations, authentication (Supabase Auth), storage, and Edge Functions from the project chat, and is available on all plans (checked 2026-10-02)"
    evidenceUrl: "https://docs.lovable.dev/integrations/supabase"
  - layer: "In-house backend"
    name: "Lovable Cloud & AI (built-in backend)"
    confidence: confirmed
    evidence: "Lovable's official documentation states the built-in backend utilizes Supabase's open-source foundation (checked 2026-10-02). Per the official blog, it was released on September 29, 2025"
    evidenceUrl: "https://docs.lovable.dev/features/cloud"
  - layer: "Generative AI models"
    name: "Anthropic (Claude)"
    confidence: confirmed
    evidence: "Anthropic's official customer story presents Lovable as delivering software generation with Claude (checked 2026-10-02). Lovable's official blog also announced adopting Opus 5.5 (2026-09-22) and Fable 5.1 (2026-09-01). The company describes itself as model-independent, and its FAQ names no provider, saying only that the agent runs on current frontier models"
    evidenceUrl: "https://claude.com/customers/lovable"
  - layer: "Default stack for generated apps"
    name: "TanStack Start"
    confidence: confirmed
    evidence: "Lovable's official FAQ states that new apps created from May 13, 2026 use TanStack Start with server-side rendering, and older apps use React + Vite (checked 2026-10-02)"
    evidenceUrl: "https://docs.lovable.dev/introduction/faq"
  - layer: "App runtime"
    name: "workerd (runtime open-sourced by Cloudflare)"
    confidence: confirmed
    evidence: "Lovable's official blog (2026-08-18) states each published app is built as its own worker for Cloudflare's workerd runtime and served from its own V8 isolate. Per the same post, lovable.dev itself was migrated onto this platform from Next.js on Vercel"
    evidenceUrl: "https://lovable.dev/blog/how-we-migrated-lovable-dev-away-from-nextjs"
  - layer: "Agent capability"
    name: "Lovable Agent (autonomous build mode)"
    confidence: confirmed
    evidence: "Lovable's official blog (2025-07-23) states Lovable Agent is now the default and carries a request from interpretation through codebase exploration, fixes and a summary without step-by-step guidance"
    evidenceUrl: "https://lovable.dev/blog/agent"
  - layer: "Distribution integration (new in 2026)"
    name: "ChatGPT / Claude (Lovable apps used inside them)"
    confidence: confirmed
    evidence: "Lovable's official blog (2026-07-15) states you can add an MCP server to a published Lovable app so it can be used directly inside AI tools such as ChatGPT and Claude"
    evidenceUrl: "https://lovable.dev/blog/agent-integrations"
  - layer: "Visual editing"
    name: "Visual Edits (Figma-style front-end editing)"
    confidence: confirmed
    evidence: "Lovable's official blog (2025-02-12) states Visual Edits lets you change text, sizes and styling on the spot without a prompt, with the control of a Figma-like design tool"
    evidenceUrl: "https://lovable.dev/blog/introducing-visual-edits"
sources:
  - label: "Lovable official: Pricing (credit system, free grants, example credit costs)"
    url: "https://lovable.dev/pricing"
    accessedAt: "2026-10-02"
  - label: "Lovable official blog (index of announcements)"
    url: "https://lovable.dev/blog"
    accessedAt: "2026-10-02"
  - label: "Lovable official blog: Series C (2026-08-12 — $400M raised, $13.3B valuation)"
    url: "https://lovable.dev/blog/series-c"
    accessedAt: "2026-10-02"
  - label: "Lovable official blog: Series B (2025-12-18 — $330M raised, $6.6B valuation)"
    url: "https://lovable.dev/blog/series-b"
    accessedAt: "2026-10-02"
  - label: "Lovable official blog: Series A (2025-07-17 — $200M raised, $1.8B valuation)"
    url: "https://lovable.dev/blog/200m-series-a-fundraise"
    accessedAt: "2026-10-02"
  - label: "Lovable official blog: $15M in added funding (2025-02-25 — led by Creandum)"
    url: "https://lovable.dev/blog/fundraise-series-a-announcement"
    accessedAt: "2026-10-02"
  - label: "Lovable official blog: $100M ARR & Lovable Agent (2025-07-23)"
    url: "https://lovable.dev/blog/agent"
    accessedAt: "2026-10-02"
  - label: "Lovable official blog: One year of Lovable (2025-11-18 — $200M ARR)"
    url: "https://lovable.dev/blog/one-year-of-lovable"
    accessedAt: "2026-10-02"
  - label: "Lovable official blog: Introducing Lovable Cloud and AI (2025-09-29)"
    url: "https://lovable.dev/blog/lovable-cloud"
    accessedAt: "2026-10-02"
  - label: "Lovable official blog: Introducing Visual Edits (2025-02-12)"
    url: "https://lovable.dev/blog/introducing-visual-edits"
    accessedAt: "2026-10-02"
  - label: "Lovable official blog: Your Lovable app now works inside ChatGPT and Claude (2026-07-15)"
    url: "https://lovable.dev/blog/agent-integrations"
    accessedAt: "2026-10-02"
  - label: "Lovable official blog: Lovable acquires Sutro (2026-09-18)"
    url: "https://lovable.dev/blog/lovable-acquires-sutro-to-make-software-easier-to-explain-and-easier-to-trust"
    accessedAt: "2026-10-02"
  - label: "Lovable official blog: Lovable acquires Molnett (2025-11-25)"
    url: "https://lovable.dev/blog/lovable-welcomes-molnett"
    accessedAt: "2026-10-02"
  - label: "Lovable official blog: How we migrated lovable.dev away from Next.js (2026-08-18 — TanStack Start and workerd)"
    url: "https://lovable.dev/blog/how-we-migrated-lovable-dev-away-from-nextjs"
    accessedAt: "2026-10-02"
  - label: "Lovable official blog: The model picker is a dead end (2026-08-11 — model routing and in-house trained models)"
    url: "https://lovable.dev/blog/the-model-picker-is-a-dead-end"
    accessedAt: "2026-10-02"
  - label: "Lovable official blog: Opus 5.5 now in Lovable (2026-09-22)"
    url: "https://lovable.dev/blog/opus-5-5-now-in-lovable"
    accessedAt: "2026-10-02"
  - label: "Lovable official blog: Our response to the April 2026 incident (2026-04-22)"
    url: "https://lovable.dev/blog/our-response-to-the-april-2026-incident"
    accessedAt: "2026-10-02"
  - label: "Lovable official blog: You can now chat with Lovable for free (2026-09-24)"
    url: "https://lovable.dev/blog/chat-for-free"
    accessedAt: "2026-10-02"
  - label: "Lovable official docs: Credits and usage (included grants, top-up prices)"
    url: "https://docs.lovable.dev/introduction/credits-and-usage"
    accessedAt: "2026-10-02"
  - label: "Lovable official docs: Lovable Cloud (uses Supabase's open-source foundation)"
    url: "https://docs.lovable.dev/features/cloud"
    accessedAt: "2026-10-02"
  - label: "Lovable official docs: Supabase integration"
    url: "https://docs.lovable.dev/integrations/supabase"
    accessedAt: "2026-10-02"
  - label: "Lovable official docs: FAQ (agent models; generated apps use TanStack Start)"
    url: "https://docs.lovable.dev/introduction/faq"
    accessedAt: "2026-10-02"
  - label: "Anthropic official: Lovable customer story (use of Claude; $200M ARR 12 months after launch, now stated as $400M)"
    url: "https://claude.com/customers/lovable"
    accessedAt: "2026-10-02"
  - label: "Wikipedia: Lovable (company) (rebrand history from GPT Engineer, Supabase integration, March 2025 security vulnerability reporting aggregated)"
    url: "https://en.wikipedia.org/wiki/Lovable_(company)"
    accessedAt: "2026-10-02"
---

## Service overview

Lovable generates a complete full-stack web app from conversational prompts alone. Per aggregated Wikipedia reporting, Anton Osika started it in 2023 as the open-source project "GPT Engineer," which became the commercial GPT Engineer App before rebranding as "Lovable" and launching publicly in December 2024. Its operator, Lovable Labs Incorporated, is based in Stockholm, Sweden.

:::fact
Per Lovable's official blog, following an additional $15 million raise led by Creandum in February 2025, the company raised a $200 million Series A on July 17, 2025 at an $1.8 billion valuation — the blog itself describes this as "just eight months after launch." Six days later, on July 23, it announced both a $100 million ARR milestone and its autonomous build feature, Lovable Agent. On December 18, 2025 it raised a $330 million Series B at a $6.6 billion valuation. On August 12, 2026, it raised a $400 million Series C at a $13.3 billion valuation, led by Menlo Ventures and co-led by the Scaleup Europe Fund managed by EQT. Per the same announcement, over 60 million projects have been created since the November 2024 launch, and Lovable-built apps receive over 900 million visits a month. Acquisitions have continued as well: the official blog announced the acquisition of Molnett in November 2025 and of Sutro on September 18, 2026, with Sutro's founder and three engineers joining. Per aggregated Wikipedia reporting, headcount stood at roughly 120 as of 2025, and the Series C announcement sets out a plan to grow the team to roughly 450 this year.
:::

:::pull
[Cursor](/en/articles/cursor) took the roundabout path of forking VS Code and grew its revenue in a short time. Lovable took a different path, handing the apps it builds out beyond its own site, and grew just as quickly.
:::

::scorecard

## UX analysis

Lovable's UX focuses less on eliminating code entirely and more on shortening the back-and-forth between conversation and visual editing.

- **A full app spins up from conversation.** A prompt alone generates frontend, backend, and database together, removing the overhead of setting up an environment from scratch.
- **Visual editing shortens the fine-tuning loop.** Visual Edits, released February 2025, lets users adjust the frontend with something close to a Figma feel, without touching code directly.
- **Agentic capability moves toward "finishing the build."** Lovable Agent, from July 2025, reduces the need for step-by-step instruction and lets more complex builds proceed autonomously.
- **Where apps get consumed now extends beyond Lovable's own site.** Since July 15, 2026, a published Lovable app can be given an MCP server so it runs directly inside ChatGPT and Claude — a deliberate split between where an app is built and where it's used.
- **No model picker.** Per the official FAQ, there is no setting to switch the model used for builds, and model upgrades roll out to all users automatically. On September 24, 2026, chatting with Lovable before building became free to use.

## Tech stack

::techstack

:::fact
Per Lovable's official blog, it shipped Visual Edits, an editing feature with a Figma-like feel, on February 12, 2025; the autonomous build feature Lovable Agent on July 23, 2025; and a built-in backend, "Lovable Cloud & AI" (including a database, authentication and file storage), on September 29, 2025. On July 15, 2026, it added distribution, in the form of an MCP server, that lets generated apps be used directly from inside ChatGPT and Claude. Per Lovable's official documentation, this built-in backend utilizes Supabase's open-source foundation, and separately, an integration that connects directly to a user's own Supabase is available on all plans. Anthropic's official customer story presents Lovable as a company building with Claude, and Lovable's official blog announced the adoption of Fable 5.1 and Opus 5.5 in September 2026. The same blog (August 11, 2026) describes a policy of assigning different models to different parts of a build, and says models the company post-trained itself now handle a share of app-building work in production. Per the official FAQ, generated apps use TanStack Start if created from May 13, 2026 and React + Vite if older, and published apps are served as workers for Cloudflare's workerd runtime. lovable.dev itself was moved onto this platform from Next.js on Vercel (official blog, August 18, 2026).

Per aggregated Wikipedia reporting, in March 2025 a vulnerability was reported in which some Supabase-connected apps had misconfigured access controls that left database contents publicly exposed. The official blog (April 22, 2026) reported that between February 3 and April 20, 2026, the chat history and source code of public projects could be viewed by other users who had the project link. The company says it shipped a fix within two hours of the report and that private projects and Lovable Cloud were not affected, and that it is restructuring how vulnerability reports are triaged.
:::

:::guess
Adding an in-house built-in backend (Lovable Cloud & AI) on top of the Supabase integration looks like the same kind of staged strategy we saw with [Cursor](/en/articles/cursor) first shipping on a fine-tuned third-party model (its 2024 setup) and adding its own models later: launch on borrowed infrastructure first, then bring the important layer in-house later. Because the built-in backend itself sits on Supabase's open-source foundation, though, this in-housing looks less like rebuilding the foundation and more like rewrapping a borrowed one as Lovable's own product. Starting to use models it post-trained itself, and moving even its own site onto its own hosting platform, suggest the in-housing is spreading from the backend toward the model and delivery layers. The access-control gap reported in March 2025, and the public-project visibility issue the company reported in April 2026, plausibly symbolize a gap between the speed of generating a full app from conversation alone and the specialized-knowledge domain of security configuration — the faster app generation gets, the heavier the product's responsibility to default new apps toward the safe side becomes. The company's account that it made all new projects private by default in November 2025 reads as a move in that direction. Starting distribution inside ChatGPT and Claude looks like a pragmatic choice for a developer tool with no distribution network of its own: reach the enormous existing user base of established AI assistants directly, rather than depending on driving traffic to its own site.
:::

## Business model

Lovable's revenue centers on a credit-based subscription — Free, Pro, Business, and Enterprise.

:::fact
Per Lovable's official pricing page (checked October 2, 2026), the Free plan grants 5 daily build credits (up to 30 a month), 20 monthly Cloud credits, and 4 monthly credits for AI features built into apps. On Pro and Business, the plan's credits are added to a balance each month and can be spent across building, Cloud, and in-app AI features; Enterprise offers volume-based credit pricing. There is no per-seat charge, and workspaces allow unlimited members on every plan. In the default mode, credit consumption scales with task complexity, with examples given of 0.50 credits for making a button gray and 1.70 credits for generating a landing page with images; Plan Mode costs 1 credit per message. Per the official docs, top-ups cost $15 per 50 credits on Pro and $30 per 50 credits on Business. On the business side, the February 2025 $15 million raise was followed by a July 2025 Series A ($200 million, $1.8 billion valuation) that coincided with the $100 million ARR milestone — eight months after launch — and valuation more than tripled again in five months to the December 2025 Series B ($330 million, $6.6 billion valuation). About eight months later, the August 2026 Series C ($400 million, $13.3 billion valuation) roughly doubled the valuation again. The official blog (November 18, 2025) announced $200 million ARR one year after launch, and Anthropic's official customer story states the current figure as $400 million ARR (no as-of date given; viewed October 2, 2026).
:::

:::guess
The credit-based pricing looks designed to tie billing to cost — AI model inference cost — scaling with task complexity, the same kind of adaptation to generative AI's distinctive cost structure that shows up in Cursor including a set amount of model usage in each plan and billing anything beyond it at API rates (as of October 2026). Valuation more than tripling in five months plausibly reflects investor enthusiasm not just for the $100 million ARR milestone itself but for the conversation-driven development style broadly known as "vibe coding." Starting distribution inside ChatGPT and Claude may be a bet on expanding revenue opportunity beyond developer-tool sales into the usage of the generated apps themselves.
:::

Rather than depending on traffic to its own site, Lovable hands the apps it builds directly into the enormous existing user bases of ChatGPT and Claude. What this dissection reveals belongs to the same lineage as [Cursor](/en/articles/cursor) growing by taking the roundabout path of forking VS Code: building on borrowed foundations and growing in a short time without ever owning a distribution network of its own — a design pattern that keeps recurring across AI-native developer tools.
