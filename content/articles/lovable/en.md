---
service: "Lovable"
title: "It Doesn't Sell the Apps It Builds in Its Own Store — Why Lovable Started Distributing Inside ChatGPT and Claude"
description: "Lovable generates a complete app from conversation alone. Rebranded from its predecessor GPT Engineer in December 2024, it reached $100M ARR and an $1.8B valuation within eight months, then hit a $6.6B valuation in a December 2025 Series B and a $13.3B valuation in an August 2026 Series C. In July 2026 it began letting apps built with Lovable run directly inside ChatGPT and Claude. A dissection, from official sources, of why one of the fastest-growing developer tools alongside [Cursor](/en/articles/cursor) doesn't insist on keeping consumption inside its own app."
lead: "Someone using an app built with Lovable doesn't necessarily ever visit Lovable's own site. In July 2026, Lovable began letting apps built on its platform run directly inside ChatGPT and Claude. This Stockholm, Sweden company reached $100M ARR within eight months of rebranding from its predecessor, GPT Engineer, hit a $6.6 billion valuation by December 2025, and a $13.3 billion valuation by August 2026. This dissects a company that doesn't lock its own apps inside its own storefront."
category: dev-tool
tags: [ai, app-builder, vibe-coding, supabase, developer-tools]
publishedAt: "2026-07-23"
updatedAt: "2026-10-02"
lastVerified: "2026-09-28"
serviceUrl: "https://lovable.dev/"
vendor: "Lovable Labs Incorporated"
origin: "SE"
heroTheme: "lovable"
scores: { product: 4.5, ux: 4.0, tech: 3.5, business: 4.5 }
techStack:
  - layer: "Backend integration"
    name: "Supabase連携（データベース/認証基盤）"
    confidence: confirmed
    evidence: "Lovable's official documentation states the Supabase integration handles database design, migrations, authentication (Supabase Auth), storage, and Edge Functions from the project chat, and is available on all plans (checked 2026-09-28)"
    evidenceUrl: "https://docs.lovable.dev/integrations/supabase"
  - layer: "In-house backend"
    name: "Lovable Cloud & AI（組み込みバックエンド）"
    confidence: confirmed
    evidence: "Lovable's official documentation states the built-in backend utilizes Supabase's open-source foundation. Per the official blog, it was released on September 29, 2025"
    evidenceUrl: "https://docs.lovable.dev/integrations/cloud"
  - layer: "Generative AI models"
    name: "Anthropic (Claude)"
    confidence: confirmed
    evidence: "Anthropic's official customer story says Lovable's agent runs on Claude models, with the main agent using subagents matched to different Claude models by task (checked 2026-09-28). Lovable's own FAQ names no provider and says only that the agent runs on current frontier models"
    evidenceUrl: "https://claude.com/customers/lovable"
  - layer: "Agent capability"
    name: "Lovable Agent（自律型ビルド機能）"
    confidence: confirmed
    evidence: "Lovable's official blog states Lovable Agent, released July 2025, reduces step-by-step user direction and autonomously handles more complex builds"
    evidenceUrl: "https://lovable.dev/blog"
  - layer: "Distribution integration (new in 2026)"
    name: "ChatGPT / Claude内でのLovableアプリ利用"
    confidence: confirmed
    evidence: "Lovable's official blog states that as of July 2026, apps built with Lovable can be used directly inside ChatGPT and Claude"
    evidenceUrl: "https://lovable.dev/blog"
  - layer: "Visual editing"
    name: "Visual Edits（Figma風のフロントエンド編集機能）"
    confidence: confirmed
    evidence: "Lovable's official blog states Visual Edits, released February 2025, is a Figma-like visual editor allowing instant frontend changes without touching code"
    evidenceUrl: "https://lovable.dev/blog"
sources:
  - label: "Lovable official: Pricing (Free/Pro/Business/Enterprise fee structure, credit system)"
    url: "https://lovable.dev/pricing"
    accessedAt: "2026-09-28"
  - label: "Lovable official blog (funding history, ARR trajectory, Lovable Agent/Cloud, ChatGPT/Claude distribution announcements)"
    url: "https://lovable.dev/blog"
    accessedAt: "2026-09-28"
  - label: "Lovable official blog: Series C (2026-08-12 — $400M raised, $13.3B valuation)"
    url: "https://lovable.dev/blog/series-c"
    accessedAt: "2026-09-28"
  - label: "Lovable official blog: Series B (2025-12-18 — $330M raised, $6.6B valuation)"
    url: "https://lovable.dev/blog/lovable-raises-330m-to-power-the-age-of-the-builder"
    accessedAt: "2026-09-28"
  - label: "Lovable official docs: Lovable Cloud (uses Supabase's open-source foundation)"
    url: "https://docs.lovable.dev/integrations/cloud"
    accessedAt: "2026-09-28"
  - label: "Lovable official docs: Supabase integration"
    url: "https://docs.lovable.dev/integrations/supabase"
    accessedAt: "2026-09-28"
  - label: "Lovable official docs: FAQ (agent models, generated app stack)"
    url: "https://docs.lovable.dev/introduction/faq"
    accessedAt: "2026-09-28"
  - label: "Anthropic official: Lovable customer story (use of Claude; $200M ARR within 12 months)"
    url: "https://claude.com/customers/lovable"
    accessedAt: "2026-09-28"
  - label: "Wikipedia: Lovable (company) (rebrand history from GPT Engineer, Supabase integration, March 2025 security vulnerability reporting aggregated)"
    url: "https://en.wikipedia.org/wiki/Lovable_(company)"
    accessedAt: "2026-07-23"
---

## Service overview

Lovable generates a complete full-stack web app from conversational prompts alone. Per aggregated Wikipedia reporting, Anton Osika started it in 2023 as the open-source project "GPT Engineer," which became the commercial GPT Engineer App before rebranding as "Lovable" and launching publicly in December 2024. Its operator, Lovable Labs Incorporated, is based in Stockholm, Sweden.

:::fact
Per Lovable's official blog, following an additional $15 million raise in February 2025 (used for European hiring), the company raised a $200 million Series A that July at an $1.8 billion valuation — the blog itself describes this as "just eight months after launch." That same month, it announced both a $100 million ARR milestone and its autonomous build feature, Lovable Agent. In December 2025 it raised a $330 million Series B, reaching a $6.6 billion valuation. On August 12, 2026, it raised a $400 million Series C at a $13.3 billion valuation, led by Menlo Ventures and co-led by the Scaleup Europe Fund managed by EQT. Per the same announcement, over 60 million projects have been created since the November 2024 launch, and Lovable-built apps receive over 900 million visits a month. Per aggregated Wikipedia reporting, headcount stood at roughly 120 as of 2025, and the Series C announcement sets out a plan to grow the team to approximately 450.
:::

:::pull
[Cursor](/en/articles/cursor) set the fastest-ARR-growth record by taking the roundabout path of forking VS Code. Lovable set a different kind of fastest-growth record by handing its own apps out beyond its own site.
:::

::scorecard

## UX analysis

Lovable's UX focuses less on eliminating code entirely and more on shortening the back-and-forth between conversation and visual editing.

- **A full app spins up from conversation.** A prompt alone generates frontend, backend, and database together, removing the overhead of setting up an environment from scratch.
- **Visual editing shortens the fine-tuning loop.** Visual Edits, released February 2025, lets users adjust the frontend with something close to a Figma feel, without touching code directly.
- **Agentic capability moves toward "finishing the build."** Lovable Agent, from July 2025, reduces the need for step-by-step instruction and lets more complex builds proceed autonomously.
- **Where apps get consumed now extends beyond Lovable's own site.** As of July 2026, apps built with Lovable can run directly inside ChatGPT and Claude — a deliberate split between where an app is built and where it's used.

## Tech stack

::techstack

:::fact
Per Lovable's official blog, it shipped a built-in backend, "Lovable Cloud & AI" (including data persistence and authentication), in September 2025, following the autonomous build feature Lovable Agent in July 2025 and the Figma-like visual editor Visual Edits in February 2025. In July 2026, it added distribution letting generated apps run directly inside ChatGPT and Claude. Per Lovable's official documentation, this built-in backend utilizes Supabase's open-source foundation, and separately, an integration that connects directly to a user's own Supabase is available on all plans. Per Anthropic's official customer story, Lovable's agent runs on Claude models. Per aggregated Wikipedia reporting, in March 2025 a vulnerability was reported in which some Supabase-connected apps had misconfigured access controls that left database contents publicly exposed.
:::

:::guess
Adding an in-house built-in backend (Lovable Cloud & AI) on top of the Supabase integration looks like the same kind of staged strategy we saw with [Cursor](/en/articles/cursor) first shipping on a fine-tuned third-party model (its 2024 setup) and adding its own models later: launch on borrowed infrastructure first, then bring the important layer in-house later. Because the built-in backend itself sits on Supabase's open-source foundation, though, this in-housing looks less like rebuilding the foundation and more like rewrapping a borrowed one as Lovable's own product. The access-control gap reported in March 2025 plausibly symbolizes a gap between the speed of generating a full app from conversation alone and the specialized-knowledge domain of security configuration — the faster app generation gets, the heavier the product's responsibility to default new apps toward the safe side becomes. Starting distribution inside ChatGPT and Claude looks like a pragmatic choice for a developer tool with no distribution network of its own: reach the enormous existing user base of established AI assistants directly, rather than depending on driving traffic to its own site.
:::

## Business model

Lovable's revenue centers on a credit-based subscription — Free, Pro, Business, and Enterprise.

:::fact
Per Lovable's official pricing page, the Free plan grants 5 daily build credits and 20 monthly cloud credits; Pro and Business bill against a monthly credit balance (specific allowances undisclosed); and Enterprise offers custom, volume-based pricing. Credit consumption scales with task complexity, with examples given of 0.50 credits for a simple styling change and 1.70 credits for generating a complex landing page. On the business side, the February 2025 $15 million raise was followed by a July 2025 Series A ($200 million, $1.8 billion valuation) that coincided with the $100 million ARR milestone — eight months after launch — and valuation more than tripled again in five months to the December 2025 Series B ($330 million, $6.6 billion valuation). About eight months later, the August 2026 Series C ($400 million, $13.3 billion valuation) roughly doubled the valuation again. Anthropic's official customer story says ARR reached $200 million within 12 months of launch.
:::

:::guess
The credit-based pricing looks designed to tie billing to cost — AI model inference cost — scaling with task complexity, the same kind of adaptation to generative AI's distinctive cost structure that shows up in Cursor including a set amount of model usage in each plan and billing anything beyond it at API rates (as of October 2026). Valuation more than tripling in five months plausibly reflects investor enthusiasm not just for the $100 million ARR milestone itself but for the conversation-driven development style broadly known as "vibe coding." Starting distribution inside ChatGPT and Claude may be a bet on expanding revenue opportunity beyond developer-tool sales into the usage of the generated apps themselves.
:::

Rather than depending on traffic to its own site, Lovable hands the apps it builds directly into the enormous existing user bases of ChatGPT and Claude. What this dissection reveals belongs to the same lineage as [Cursor](/en/articles/cursor) setting a speed record by taking the roundabout path of forking VS Code: building on borrowed foundations while achieving the fastest possible growth without ever owning a distribution network of its own — a design pattern that keeps recurring across AI-native developer tools.
