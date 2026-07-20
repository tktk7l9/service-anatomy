---
service: "Cursor"
title: "Why Fork Instead of Copy — The Design Call Behind Cursor's $2B ARR in One Year"
description: "Cursor, the AI code editor born from forking VS Code, dissected: the editor-level AI integration that a plugin API couldn't achieve, its own fast code-editing model, and the fastest ARR growth in application-layer SaaS history — from official sources."
lead: "An AI code editor could have shipped faster as a plugin. Cursor chose the detour of forking VS Code from scratch instead. That detour bought the freedom to embed AI deep inside the editor, and underwrote the fastest ARR growth in application-layer SaaS history. We dissect the design philosophy of leaning on VS Code's assets while building proprietary infrastructure on top."
category: dev-tool
tags: [ai, code-editor, vscode, developer-tools, funding]
publishedAt: "2026-07-20"
updatedAt: "2026-07-20"
lastVerified: "2026-07-20"
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
  - layer: "In-house frontier model"
    name: "Composer"
    confidence: confirmed
    evidence: "The official Cursor blog (Series D post) describes an in-house model built for agentic coding, 4x faster than similarly intelligent models"
    evidenceUrl: "https://cursor.com/blog/series-d"
  - layer: "Delivery infrastructure"
    name: "Vercel + Next.js"
    confidence: likely
    evidence: "Our HTTP header observation (server: Vercel / x-vercel-id / x-nextjs-prerender, 2026-07-20); no official documentation found"
sources:
  - label: "Cursor official blog: Series D (2025-11 — $2.3B raised, $29.3B valuation, ARR over $1B)"
    url: "https://cursor.com/blog/series-d"
    accessedAt: "2026-07-20"
  - label: "Cursor official blog: Series C (2025-06 — $900M raised, $9.9B valuation, ARR over $500M)"
    url: "https://cursor.com/blog/series-c"
    accessedAt: "2026-07-20"
  - label: "Cursor official docs: VS Code Migration (on the codebase foundation)"
    url: "https://cursor.com/docs/configuration/migrations/vscode"
    accessedAt: "2026-07-20"
  - label: "Fireworks AI official blog: Fast Apply (speculative decoding technical detail, 2024-06)"
    url: "https://fireworks.ai/blog/cursor"
    accessedAt: "2026-07-20"
---

Building it as a plugin would have shipped months faster. Cursor chose the detour of forking VS Code instead — and that call is a big part of why, alongside [Linear](/en/articles/linear) in the race for "developer tool speed," Cursor became the fastest-growing ARR story in application-layer SaaS history.

## What the service is

Cursor is a code editor with AI integrated deep into the editor itself, built by Anysphere, a company founded by four MIT graduates.

:::fact
Per Cursor's official documentation, Cursor is built on the VS Code codebase (the open-source Code - OSS), with bulk migration available for existing VS Code extensions, themes, settings, and keybindings. Per the official blog (November 2025, Series D), annual recurring revenue (ARR) surpassed $1 billion — doubling in just five months from the $500M+ reported at the June 2025 Series C. At that point the company had 300+ employees, and the blog states over half of the Fortune 500, including NVIDIA, Uber, and Adobe, use it.
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
Per Fireworks AI's official blog (June 2024), Cursor's code-editing feature "Fast Apply" serves a fine-tuned Llama-3-70B via speculative decoding, using existing code as "draft tokens" to reach roughly 1,000 tokens/sec — a 13x speedup over standard inference. Separately, the official Cursor blog (Series D) describes Composer, an in-house frontier model built from scratch for agentic coding, running 4x faster than similarly intelligent models.
:::

:::guess
Running a fine-tuned third-party model (Llama-based) alongside an in-house frontier model (Composer) suggests Cursor took a staged in-housing strategy: ship first on a fine-tuned external model, then pour resources into proprietary model development once revenue is established. This is a third path distinct from both Nani Translation's strategy of routing across multiple LLM APIs and DeepL's strategy of going all-in on a proprietary LLM from day one. Alongside the choice to fork VS Code, Cursor's technology choices consistently read as efficiency-driven: borrow the foundation, build only the differentiator yourself.
:::

## Business model

Cursor's revenue growth is record-setting even by application-layer SaaS standards.

:::fact
Per the official blog, ARR grew from $100 million in January 2025 to $1 billion by November of the same year, then to $2 billion by February 2026. Funding went from Series C (June 2025, $900M, $9.9B valuation) to Series D (November 2025, $2.3B, $29.3B valuation) — roughly a 3x valuation jump in five months. NVIDIA and Google joined as new investors in the Series D.
:::

:::guess
That NVIDIA and Google — themselves major players in compute infrastructure — are now investors likely signals strategic interest in Cursor's own cost structure (inference cost). The rapid ARR expansion reflects simultaneous penetration of both individual developers and enterprises, but as an inference-heavy AI application, gross margins are likely structurally thinner than traditional SaaS. Investment in the in-house Composer model is likely a rational medium-term move to reduce dependence on external LLM API costs and improve profitability.
:::

Choosing to fork rather than plug in — a seemingly roundabout technical decision — is what let Cursor seize control of the editor and post the fastest SaaS growth on record. In the new market of AI-native developer tools, Cursor sits at the frontier of testing how far "borrow the foundation, build only the differentiator" can carry a company.
