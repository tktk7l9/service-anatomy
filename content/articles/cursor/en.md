---
service: "Cursor"
title: "Why Fork Instead of Copy — The Design Call Behind Cursor's $2B ARR in One Year"
description: "Cursor, the AI code editor born from forking VS Code, dissected: the editor-level AI integration that a plugin API couldn't achieve, its own fast code-editing model, growth from $100M to $2B in annualized revenue in about a year, and its acquisition by SpaceX in August 2026 — from official sources."
lead: "An AI code editor could have shipped faster as a plugin. Cursor chose the detour of forking VS Code from scratch instead. That detour bought the freedom to embed AI deep inside the editor, and underwrote the fastest ARR growth in application-layer SaaS history. We dissect the design philosophy of leaning on VS Code's assets while building proprietary infrastructure on top."
category: dev-tool
tags: [ai, code-editor, vscode, developer-tools, funding]
publishedAt: "2026-07-20"
updatedAt: "2026-10-02"
lastVerified: "2026-10-02"
serviceUrl: "https://cursor.com/"
vendor: "Anysphere, Inc. (acquired by SpaceX in August 2026)"
origin: "US"
heroTheme: "cursor"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 4.0 }
techStack:
  - layer: "Editor foundation"
    name: "VS Code (Code - OSS) ベース"
    confidence: confirmed
    evidence: "Cursor's official documentation states 'Cursor is based upon the VS Code codebase,' and offers bulk migration of extensions, themes, settings, and keybindings (re-checked 2026-10-02)"
    evidenceUrl: "https://cursor.com/docs/configuration/migrations/vscode"
  - layer: "Code-editing model"
    name: "Fast Apply (ファインチューニング済みLlama-3-70B + 投機的デコード)"
    confidence: confirmed
    evidence: "The official blog of inference partner Fireworks AI (2024-06-23) states Cursor served a fine-tuned Llama-3-70B via a speculative decoding API, reaching roughly 1,000 tokens/sec — about a 13x speedup over standard inference. This is the 2024 setup; official sources do not confirm whether it is still the current one"
    evidenceUrl: "https://fireworks.ai/blog/cursor"
  - layer: "Inference infrastructure (as of 2024)"
    name: "Fireworks AI"
    confidence: confirmed
    evidence: "Fireworks AI's official blog (2024-06-23) states it serves Cursor's Fast Apply model through its speculative decoding API. This is as of June 2024; official sources do not confirm current usage"
    evidenceUrl: "https://fireworks.ai/blog/cursor"
  - layer: "In-house coding model"
    name: "Composer 2.5"
    confidence: confirmed
    evidence: "The official Models & Pricing docs list Composer 2.5 as an in-house model in the 'Cursor Models' pool (checked 2026-10-02). The original Composer was described on the official blog (2025-10-29) as '4x faster than similarly intelligent models'"
    evidenceUrl: "https://cursor.com/docs/models-and-pricing"
  - layer: "Base model under Composer"
    name: "Kimi K2.5 (Moonshot AI)"
    confidence: confirmed
    evidence: "The official Composer 2.5 post (2026-05-18) states it is built on the same open-source checkpoint as Composer 2, Moonshot's Kimi K2.5 (re-checked 2026-10-02)"
    evidenceUrl: "https://cursor.com/blog/composer-2-5"
  - layer: "Group frontier models"
    name: "Grok (4.7 / 4.6 / 4.5)"
    confidence: confirmed
    evidence: "The official docs place Grok 4.7, 4.6 and 4.5 in the same 'Cursor Models' pool as Composer 2.5 and call Grok and Composer 'first-party Cursor models' (checked 2026-10-02). The official blog (2026-08-12) describes Grok 4.6 as released together with SpaceXAI"
    evidenceUrl: "https://cursor.com/docs/models-and-pricing"
  - layer: "Third-party models (Other Models pool)"
    name: "Anthropic / OpenAI / Google"
    confidence: confirmed
    evidence: "The official Models & Pricing docs state Cursor supports frontier models from OpenAI, Anthropic, Google, SpaceXAI, and more (checked 2026-10-02). OpenAI is reported to be ending its access on 2026-11-12"
    evidenceUrl: "https://cursor.com/docs/models-and-pricing"
  - layer: "Delivery infrastructure"
    name: "Vercel + Next.js"
    confidence: likely
    evidence: "Our HTTP header observation (server: Vercel / x-vercel-id / x-nextjs-prerender, re-observed 2026-10-02); no official documentation found"
sources:
  - label: "Cursor official blog: Cursor is now a part of SpaceX (2026-08-14 — acquisition by SpaceX completed)"
    url: "https://cursor.com/blog/joining-spacex"
    accessedAt: "2026-10-02"
  - label: "Cursor official blog: Cursor partners with SpaceX on model training (2026-04-21)"
    url: "https://cursor.com/blog/spacex-model-training"
    accessedAt: "2026-10-02"
  - label: "SpaceX Form S-1 (filed 2026-05-20 — Collaboration with Cursor: terms of the compute and option agreements)"
    url: "https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm"
    accessedAt: "2026-10-02"
  - label: "CNBC: SpaceX says it has the right to buy Cursor for $60 billion (2026-04-21)"
    url: "https://www.cnbc.com/2026/04/21/spacex-says-it-can-buy-cursor-later-this-year-for-60-billion-or-pay-10-billion-for-our-work-together.html"
    accessedAt: "2026-10-02"
  - label: "CNBC: OpenAI to end model access to Cursor (2026-08-29)"
    url: "https://www.cnbc.com/2026/08/29/openai-cursor-spacex-model-access.html"
    accessedAt: "2026-10-02"
  - label: "TechCrunch: Cursor's funding talks and annualized revenue (2026-04-17, citing Bloomberg)"
    url: "https://techcrunch.com/2026/04/17/sources-cursor-in-talks-to-raise-2b-at-50b-valuation-as-enterprise-growth-surges/"
    accessedAt: "2026-10-02"
  - label: "Cursor official blog: Series D (2025-11-13 — $2.3B raised, $29.3B valuation, over $1B annualized revenue)"
    url: "https://cursor.com/blog/series-d"
    accessedAt: "2026-10-02"
  - label: "Cursor official blog: Series C (2025-06-06 — $900M raised, $9.9B valuation, ARR over $500M)"
    url: "https://cursor.com/blog/series-c"
    accessedAt: "2026-10-02"
  - label: "Cursor official blog: Series B (2025-01-16 — $105M raised, over $100M in recurring revenue)"
    url: "https://cursor.com/blog/series-b"
    accessedAt: "2026-10-02"
  - label: "Cursor official: Pricing (plans and prices)"
    url: "https://cursor.com/pricing"
    accessedAt: "2026-10-02"
  - label: "Cursor official docs: Models & Pricing (model list, usage pools, plan prices)"
    url: "https://cursor.com/docs/models-and-pricing"
    accessedAt: "2026-10-02"
  - label: "Cursor official blog: Introducing Cursor 2.0 and Composer (2025-10-29)"
    url: "https://cursor.com/blog/2-0"
    accessedAt: "2026-10-02"
  - label: "Cursor official blog: Introducing Composer 2.5 (2026-05-18 — built on Kimi K2.5)"
    url: "https://cursor.com/blog/composer-2-5"
    accessedAt: "2026-10-02"
  - label: "Cursor official docs: Cloud Agents (formerly Background Agents)"
    url: "https://cursor.com/docs/cloud-agent"
    accessedAt: "2026-10-02"
  - label: "Cursor official docs: VS Code Migration (on the codebase foundation)"
    url: "https://cursor.com/docs/configuration/migrations/vscode"
    accessedAt: "2026-10-02"
  - label: "Fireworks AI official blog: Fast Apply (speculative decoding technical detail, 2024-06)"
    url: "https://fireworks.ai/blog/cursor"
    accessedAt: "2026-10-02"
---

Building it as a plugin would have shipped months faster. Cursor chose the detour of forking VS Code instead — and that call is a big part of why, alongside [Linear](/en/articles/linear) in the race for "developer tool speed," Cursor became the fastest-growing ARR story in application-layer SaaS history.

## What the service is

Cursor is a code editor with AI integrated deep into the editor itself. It is built by Anysphere, Inc., a company founded by four MIT graduates, and has been part of SpaceX since August 2026.

:::fact
Per Cursor's official documentation, Cursor is built on the VS Code codebase (the open-source Code - OSS), with bulk migration available for existing VS Code extensions, themes, settings, and keybindings. Per the official blog, ARR had passed $500 million at the June 2025 Series C, when over half of the Fortune 500, including NVIDIA, Uber, and Adobe, were using it. Five months later, the Series D post (November 2025) reported over $1 billion in annualized revenue and a team of more than 300. On August 14, 2026, the official blog announced that Cursor had officially been acquired by SpaceX. As of October 2026 the copyright notice on the official site still reads "Anysphere, Inc."
:::

:::pull
To embed AI where a plugin could never reach, Cursor rebuilt the editor itself. The paradox here: the detour turned out to be the shortest route.
:::

::scorecard

## UX analysis

Cursor's UX pulls off two seemingly contradictory experiences at once: familiarity and intrusion.

- **Migration cost engineered to zero.** VS Code extensions, settings, and keybindings carry over directly, so existing users switch with no relearning cost — an official tool erasing what is usually the biggest switching cost in the editor market.
- **Features only possible because it's built into the editor.** Tab completion and Shadow Workspace (generating suggestions out of view) reach into territory a plugin API's permissions can't touch. The detour of forking translates directly into feature differentiation.
- **Friction with the existing VS Code extension ecosystem is also reported.** Compatibility issues stemming from the fork, and community concern about "fragmenting the VS Code ecosystem," are cited repeatedly as the cost of this strategy.
- **Agentification has pushed the experience beyond the editor.** The official site now introduces Cursor as a "coding agent," and the product spans the desktop editor, a CLI that runs in the terminal, Cloud Agents (formerly Background Agents) that run in isolated VMs in the cloud, an iOS app, and Bugbot for code review. The UX battlefield is moving from single-shot completions to handing over multi-step work and reviewing the result.

## Tech stack

::techstack

:::fact
Per Fireworks AI's official blog (June 2024), Cursor's code-editing feature "Fast Apply" served a fine-tuned Llama-3-70B via speculative decoding, reaching roughly 1,000 tokens/sec — about a 13x speedup over standard inference. The official Cursor blog (October 2025) describes Composer, its first in-house coding model, as 4x faster than similarly intelligent models. As of October 2026, the official docs group Composer 2.5 and Grok 4.7, 4.6 and 4.5 into a first-party pool called "Cursor Models," and offer third-party models from Anthropic, OpenAI, Google and others in an "Other Models" pool. Per SpaceX's Form S-1 (filed May 2026), under an agreement dated April 19, 2026, SpaceX provides Cursor with GPU cluster compute capacity and the two collaborate to improve existing models, including Grok.
:::

:::guess
The sequence — a fine-tuned external model (Fast Apply), then an in-house model (Composer), then Grok trained on the parent's GPUs — suggests Cursor has pursued staged in-housing: ship first on a fine-tuned external model, pour resources into its own models once revenue is established, and finally secure the compute itself. This is a third path distinct from both Nani Translation's strategy of routing across multiple LLM APIs and DeepL's strategy of going all-in on a proprietary LLM from day one. Alongside the choice to fork VS Code, Cursor's technology choices read as efficiency-driven: borrow the foundation, build only the differentiator yourself. After the acquisition, though, part of that borrowed foundation — compute and frontier models — appears to be shifting to in-group resources.
:::

## Business model

Cursor's revenue growth is record-setting even by application-layer SaaS standards. And in 2026 that growth stopped being the story of an independent company and became part of SpaceX.

:::fact
Per the official blog, recurring revenue exceeded $100 million in January 2025, and annualized revenue passed $1 billion by November of the same year. The figure of $2 billion in annualized revenue in February 2026 is not an official announcement; it is a Bloomberg report cited by TechCrunch (April 17, 2026). Funding went from Series C (June 2025, $900M, $9.9B valuation) to Series D (November 2025, $2.3B, $29.3B valuation) — roughly a 3x valuation jump in five months — and NVIDIA and Google joined as new investors in the Series D. These are the last rounds it officially announced before the acquisition.

Per CNBC (April 21, 2026), SpaceX announced that day that it had obtained the right to buy Cursor for $60 billion later in the year, or to pay $10 billion for the work the two were doing together. SpaceX's Form S-1 describes those terms as payment in Class A common stock based on an implied equity value of $60 billion, with a $1.5 billion termination fee and an $8.5 billion deferred services fee if the deal did not go ahead. The official Cursor blog announced the completion of the acquisition on August 14, 2026.

Per the official pricing page and docs (checked October 2026), the plans are a free Hobby tier; Pro ($20/month), Pro Plus ($60/month) and Ultra ($200/month) for individuals; Teams (Standard at $40 per user per month, Premium at $120); and a custom-priced Enterprise plan. Each plan includes a set amount of model usage, with on-demand usage beyond that billed at API rates. Usage is split into a first-party "Cursor Models" pool and a third-party "Other Models" pool, and Start, a plan for India at ₹649 per month, covers only the first-party pool.
:::

:::fact
Per CNBC (August 29, 2026), after the acquisition closed OpenAI announced it would end access to its models through Cursor, with a proposed shutoff date of November 12, 2026. Cursor's CEO said OpenAI models serve about 5% of Cursor user traffic and that the company is talking with OpenAI to resolve the matter. According to the same article, an Anthropic co-founder posted that Anthropic will continue to support Claude models in Cursor. As of October 2, 2026, the official docs still list OpenAI models.
:::

:::guess
In its Form S-1, SpaceX frames the deal as an extension of its strategy to vertically integrate compute infrastructure, models, and applications, and says it expects data from coding workflows to enhance the training of its models, including Grok. For Cursor, the parent's compute and the first-party models may offer a way to lower the cost base of an inference-heavy AI application. A pricing design that gives the first-party pool (Grok and Composer) more included usage, and exempts first-party models from the per-token rate charged on Teams plans, is likely intended to steer usage toward models that cost Cursor less to serve. At the same time, the neutrality of being able to pick models from other providers has been part of Cursor's value. With Grok inside the same group, relationships with model providers are likely to be more complicated than before the acquisition, and how far Cursor can remain "the editor where you can choose any model" looks like the thing to watch.
:::

Choosing to fork rather than plug in — a seemingly roundabout technical decision — is what let Cursor seize control of the editor and post the fastest SaaS growth on record. Having grown up on "borrow the foundation, build only the differentiator," Cursor now sits inside a parent that owns compute and models — a new stage for testing how far that strategy can carry it.
