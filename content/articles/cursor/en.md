---
service: "Cursor"
title: "Why Fork Instead of Copy — The Design Call Behind Cursor's $2B ARR in One Year"
description: "Cursor, the AI code editor born from forking VS Code, dissected: the editor-level AI integration that a plugin API couldn't achieve, its own fast code-editing model, ARR that passed $1 billion and, per press reports, reached $2 billion, and the acquisition by SpaceX completed in August 2026 — from official sources."
lead: "An AI code editor could have shipped faster as a plugin. Cursor chose the detour of forking VS Code from scratch instead. That detour bought the freedom to embed AI deep inside the editor, and underwrote the fastest ARR growth in application-layer SaaS history. We dissect the design philosophy of leaning on VS Code's assets while building proprietary infrastructure on top."
category: dev-tool
tags: [ai, code-editor, vscode, developer-tools, funding]
publishedAt: "2026-07-20"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://cursor.com/"
vendor: "Anysphere, Inc."
origin: "US"
heroTheme: "cursor"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 4.0 }
techStack:
  - layer: "Editor foundation"
    name: "VS Code (Code - OSS) ベース"
    confidence: confirmed
    evidence: "Cursor's official documentation states 'Cursor is based upon the VS Code codebase,' and offers bulk migration of extensions, themes, settings, and keybindings"
    evidenceUrl: "https://cursor.com/docs/configuration/migrations/vscode"
  - layer: "Code-editing model"
    name: "Fast Apply (ファインチューニング済みLlama-3-70B + 投機的デコード)"
    confidence: confirmed
    evidence: "The official blog of inference partner Fireworks AI (2024-06-23) states Cursor served a fine-tuned Llama-3-70B via a speculative decoding API, reaching roughly 1,000 tokens/sec — a 13x speedup over standard inference"
    evidenceUrl: "https://fireworks.ai/blog/cursor"
  - layer: "Inference infrastructure"
    name: "Fireworks AI"
    confidence: confirmed
    evidence: "Fireworks AI's official blog (2024-06-23) states it serves Cursor's Fast Apply model through its speculative decoding API. This is as of June 2024; current usage is unverified"
    evidenceUrl: "https://fireworks.ai/blog/cursor"
  - layer: "In-house model"
    name: "Composer"
    confidence: confirmed
    evidence: "The official Cursor blog (Cursor 2.0, 2025-10-29) describes a frontier model 4x faster than similarly intelligent models. The official Composer 2.5 post (2026-05-18) states it is built on the same open-source checkpoint as Composer 2"
    evidenceUrl: "https://cursor.com/blog/composer-2-5"
  - layer: "Base model under Composer"
    name: "Kimi K2.5 (Moonshot AI)"
    confidence: confirmed
    evidence: "The official Composer 2.5 post (2026-05-18) states it is built on the same open-source checkpoint as Composer 2, Moonshot's Kimi K2.5"
    evidenceUrl: "https://cursor.com/blog/composer-2-5"
  - layer: "Jointly released model"
    name: "Grok (SpaceXAI)"
    confidence: confirmed
    evidence: "The official Cursor blog (2026-08-12) states Grok 4.6 is released together with SpaceXAI. The official model list also shows Grok 4.7, 4.6, and 4.5"
    evidenceUrl: "https://cursor.com/blog/grok-4-6"
  - layer: "Third-party models"
    name: "Anthropic / OpenAI / Google"
    confidence: confirmed
    evidence: "Cursor's official model documentation states it supports frontier models from OpenAI, Anthropic, Google, SpaceXAI, and more (checked 2026-09-28)"
    evidenceUrl: "https://cursor.com/docs/models"
  - layer: "Delivery infrastructure"
    name: "Vercel + Next.js"
    confidence: likely
    evidence: "HTTP header observation of cursor.com (server: Vercel / x-vercel-id / x-nextjs-prerender, re-checked 2026-09-28); no official documentation found"
sources:
  - label: "Cursor official blog: Series D (2025-11 — $2.3B raised, $29.3B valuation, ARR over $1B)"
    url: "https://cursor.com/blog/series-d"
    accessedAt: "2026-09-28"
  - label: "Cursor official blog: Series C (2025-06 — $900M raised, $9.9B valuation, ARR over $500M)"
    url: "https://cursor.com/blog/series-c"
    accessedAt: "2026-09-28"
  - label: "Cursor official docs: VS Code Migration (on the codebase foundation)"
    url: "https://cursor.com/docs/configuration/migrations/vscode"
    accessedAt: "2026-09-28"
  - label: "Fireworks AI official blog: Fast Apply (speculative decoding technical detail, 2024-06)"
    url: "https://fireworks.ai/blog/cursor"
    accessedAt: "2026-09-28"
  - label: "Cursor official blog: Cursor is now a part of SpaceX (2026-08-14, acquisition completed)"
    url: "https://cursor.com/blog/joining-spacex"
    accessedAt: "2026-09-28"
  - label: "SEC filing: SpaceX Form 8-K (2026-08-14 — merger effective, 389,289,254 shares, $60.0B implied equity value)"
    url: "https://www.sec.gov/Archives/edgar/data/0001181412/000162828026056945/spcx-20260814.htm"
    accessedAt: "2026-09-28"
  - label: "Cursor official blog: Cursor 2.0 (2025-10-29, Composer announced)"
    url: "https://cursor.com/blog/2-0"
    accessedAt: "2026-09-28"
  - label: "Cursor official blog: Introducing Composer 2.5 (2026-05-18, built on Kimi K2.5)"
    url: "https://cursor.com/blog/composer-2-5"
    accessedAt: "2026-09-28"
  - label: "Cursor official blog: Introducing Grok 4.6 (2026-08-12, released together with SpaceXAI)"
    url: "https://cursor.com/blog/grok-4-6"
    accessedAt: "2026-09-28"
  - label: "Cursor official docs: Models (supported model list)"
    url: "https://cursor.com/docs/models"
    accessedAt: "2026-09-28"
  - label: "Cursor official blog index (its Press section lists Bloomberg, 2026-03-02: recurring revenue doubles in three months to $2 billion)"
    url: "https://cursor.com/blog"
    accessedAt: "2026-09-28"
---

Building it as a plugin would have shipped months faster. Cursor chose the detour of forking VS Code instead — and that call is a big part of why, alongside [Linear](/en/articles/linear) in the race for "developer tool speed," Cursor became the fastest-growing ARR story in application-layer SaaS history.

## What the service is

Cursor is a code editor with AI integrated deep into the editor itself, built by Anysphere, a company founded by four MIT graduates.

:::fact
Per Cursor's official documentation, Cursor is built on the VS Code codebase (the open-source Code - OSS), with bulk migration available for existing VS Code extensions, themes, settings, and keybindings. Per the official blog (November 2025, Series D), annual recurring revenue (ARR) surpassed $1 billion — doubling in just five months from the $500M+ reported at the June 2025 Series C. At that point the company had 300+ employees, and the blog states over half of the Fortune 500, including NVIDIA, Uber, and Adobe, use it. The official Cursor blog (August 14, 2026) announced that the acquisition by SpaceX was complete. Per the Form 8-K SpaceX filed with the SEC, the merger became effective that day, Cursor's shares were converted into the right to receive 389,289,254 shares of SpaceX Class A common stock, and Cursor's implied equity value was $60.0 billion. Cursor survives as a wholly owned subsidiary of SpaceX.
:::

:::pull
To embed AI where a plugin could never reach, Cursor rebuilt the editor itself. The paradox here: the detour turned out to be the shortest route.
:::

::scorecard

## UX analysis

Cursor's UX pulls off two seemingly contradictory experiences at once: familiarity and intrusion.

- **Migration cost engineered to zero.** VS Code extensions, settings, and keybindings carry over directly, so existing users switch with no relearning cost — an official tool erasing what is usually the biggest switching cost in the editor market.
- **Features only possible because it's built into the editor.** Tab completion, Shadow Workspace (generating suggestions out of view), and background agents all reach into territory a plugin API's permissions can't touch. The detour of forking translates directly into feature differentiation.
- **Friction with the existing VS Code extension ecosystem is also reported.** Compatibility issues stemming from the fork, and community concern about "fragmenting the VS Code ecosystem," are cited repeatedly as the cost of this strategy.
- **Agentification is redefining the experience.** The center of gravity is shifting from single-shot completions to agentic coding that autonomously handles multi-step tasks — the UX battlefield itself is moving.

## Tech stack

::techstack

:::fact
Per Fireworks AI's official blog (June 2024), Cursor's code-editing feature "Fast Apply" serves a fine-tuned Llama-3-70B via speculative decoding, using existing code as "draft tokens" to reach roughly 1,000 tokens/sec — a 13x speedup over standard inference. Separately, the official Cursor blog (Cursor 2.0, October 29, 2025) describes its own model, Composer, as a frontier model 4x faster than similarly intelligent models. The official Composer 2.5 post (May 18, 2026) states that the model is built on the same open-source checkpoint as Composer 2, Moonshot's Kimi K2.5, and that Cursor is training a significantly larger model from scratch together with SpaceXAI, using 10x more total compute. On August 12, 2026, Cursor released Grok 4.6 together with SpaceXAI. The official model list also includes third-party models from Anthropic, OpenAI, Google, and others.
:::

:::guess
Running a fine-tuned third-party model (Llama-based) alongside an in-house frontier model (Composer) suggests Cursor took a staged in-housing strategy: ship first on a fine-tuned external model, then pour resources into proprietary model development once revenue is established. This is a third path distinct from both Nani Translation's strategy of routing across multiple LLM APIs and DeepL's strategy of going all-in on a proprietary LLM from day one. That Composer 2.5 sits on an open-source checkpoint appears consistent with this reading. Alongside the choice to fork VS Code, Cursor's technology choices consistently read as efficiency-driven: borrow the foundation, build only the differentiator yourself.
:::

## Business model

Cursor's revenue growth is record-setting even by application-layer SaaS standards.

:::fact
Per the official blog, ARR was over $500 million at the June 2025 Series C and over $1 billion at the November 2025 Series D. A Bloomberg report (March 2, 2026, listed in the Press section of Cursor's official blog) says recurring revenue doubled in three months to $2 billion. Funding went from Series C (June 2025, $900M, $9.9B valuation) to Series D (November 2025, $2.3B, $29.3B valuation) — roughly a 3x valuation jump in five months. NVIDIA and Google joined as new investors in the Series D. On August 14, 2026, the acquisition by SpaceX was completed, and per the SEC filing Cursor's implied equity value was $60.0 billion. The official Cursor blog says the acquisition gives it access to the largest fleet of GPUs in the world, and the compute to build stronger models that are also more economical to run.
:::

:::guess
That NVIDIA and Google — themselves major players in compute infrastructure — are now investors likely signals strategic interest in Cursor's own cost structure (inference cost). The rapid ARR expansion reflects simultaneous penetration of both individual developers and enterprises, but as an inference-heavy AI application, gross margins are likely structurally thinner than traditional SaaS. Investment in the in-house Composer model is likely a rational medium-term move to reduce dependence on external LLM API costs and improve profitability.
:::

Choosing to fork rather than plug in — a seemingly roundabout technical decision — is what let Cursor seize control of the editor and post the fastest SaaS growth on record. In the new market of AI-native developer tools, Cursor sits at the frontier of testing how far "borrow the foundation, build only the differentiator" can carry a company.
