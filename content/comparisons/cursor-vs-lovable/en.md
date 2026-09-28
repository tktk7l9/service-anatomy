---
title: "Bring the Editor, or Build the Backend — the Different Layers Cursor and Lovable Chose to Own"
description: "Cursor was born forking VS Code; Lovable started with a Supabase integration. Both are \"AI tools standing on borrowed foundations,\" but they later built out different layers themselves — Cursor its own frontier model, Composer; Lovable its own built-in backend, Lovable Cloud & AI. Both grew fast on an oddly similar rhythm, roughly tripling in valuation in about five months. A dissection of how each company chose what to bring in-house."
lead: "Cursor borrowed an editor, VS Code, and built an AI model on top of it. Lovable borrowed a backend, Supabase, and built its own cloud on top of it. Both companies ran the same playbook — stand on a borrowed foundation — yet they later brought completely different layers in-house. And both grew fast on an oddly similar rhythm: valuation roughly tripling in about five months. This overlays the two dissections to compare how each chose what to own."
slugA: "cursor"
slugB: "lovable"
publishedAt: "2026-07-23"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
sources:
  - label: "Cursor official blog: Series D (2025-11, $29.3B valuation)"
    url: "https://cursor.com/blog/series-d"
    accessedAt: "2026-09-28"
  - label: "Cursor official blog: Series C (2025-06, $9.9B valuation)"
    url: "https://cursor.com/blog/series-c"
    accessedAt: "2026-09-28"
  - label: "Lovable official blog (funding history, ARR trajectory)"
    url: "https://lovable.dev/blog"
    accessedAt: "2026-09-28"
  - label: "Cursor official blog: Introducing Composer 2.5 (2026-05-18, built on Kimi K2.5)"
    url: "https://cursor.com/blog/composer-2-5"
    accessedAt: "2026-09-28"
  - label: "Cursor official docs: Models (supported model list)"
    url: "https://cursor.com/docs/models"
    accessedAt: "2026-09-28"
  - label: "Cursor official blog: Cursor is now a part of SpaceX (2026-08-14, acquisition completed)"
    url: "https://cursor.com/blog/joining-spacex"
    accessedAt: "2026-09-28"
  - label: "SEC filing: SpaceX Form 8-K (2026-08-14, Cursor's implied equity value of $60.0B)"
    url: "https://www.sec.gov/Archives/edgar/data/0001181412/000162828026056945/spcx-20260814.htm"
    accessedAt: "2026-09-28"
  - label: "Lovable official docs: Lovable Cloud (uses Supabase's open-source foundation)"
    url: "https://docs.lovable.dev/integrations/cloud"
    accessedAt: "2026-09-28"
  - label: "Anthropic official: Lovable customer story (use of Claude)"
    url: "https://claude.com/customers/lovable"
    accessedAt: "2026-09-28"
  - label: "Lovable official blog: Series B (2025-12-18, $6.6B valuation, investor list)"
    url: "https://lovable.dev/blog/lovable-raises-330m-to-power-the-age-of-the-builder"
    accessedAt: "2026-09-28"
  - label: "Lovable official blog: Series C (2026-08-12 — $400M raised, $13.3B valuation)"
    url: "https://lovable.dev/blog/series-c"
    accessedAt: "2026-09-28"
---

[Cursor](/en/articles/cursor) and [Lovable](/en/articles/lovable) both grew, at strikingly similar speed, in the same market — having AI build an app from conversation or code. Yet a mechanical comparison of their tech stacks finds just one shared entry: Anthropic, a provider of AI models. And where each chose to bring a layer in-house, on top of an otherwise borrowed foundation, points in completely different directions.

## Same strategy, different layer brought in-house

:::fact
Per the [Cursor](/en/articles/cursor) dissection, Cursor forked the VS Code codebase as its editor foundation, then combined a code-editing model, Fast Apply (a fine-tuned Llama-3-70B via a Fireworks AI partnership), with its own model, Composer. Per the official Composer 2.5 post, that model is built on an open-source checkpoint, Moonshot's Kimi K2.5, and the official model list also includes models from Anthropic, OpenAI, and Google. Per the [Lovable](/en/articles/lovable) dissection, Lovable offers a mechanism connecting to Supabase's database infrastructure, while also shipping its own built-in backend, Lovable Cloud & AI (including data persistence and authentication), released in September 2025. Per Lovable's official documentation, that built-in backend utilizes Supabase's open-source foundation. Per Anthropic's official customer story, Lovable's agent runs on Claude models.
:::

:::pull
Cursor borrowed the editor and built the model. Lovable borrowed the backend and built the cloud. Same "borrow, then build" strategy — but which layer you pick defines the company.
:::

What Cursor brought in-house is the "intelligence" layer. It delegates the editor UI to a well-worn open-source project, VS Code, and concentrates its own differentiation on the model layer that determines editing precision and speed. What Lovable brought in-house is the "foundation" layer. The AI model that generates the app itself is left to Anthropic's Claude, while the backend infrastructure — database, authentication — that lets the generated app actually run is something Lovable is trying to own itself.

:::guess
This difference in choice likely reflects the two companies placing value on different parts of the same phenomenon: AI writing code. Cursor's users are already developers who can write code themselves, and what they judge the product on is the precision and speed of editing itself — so owning the model layer becomes a direct differentiator. Lovable's users include non-engineers who just want to build an app from conversation, and for them the value lies in "something functional comes out the other end" — the reliability of the backend that keeps the generated app running matters more to the experience than model sophistication. Even within the same "AI developer tool" category, the assumed technical sophistication of the target user appears to determine which layer is worth owning. Note that Composer sits on an open-source checkpoint and Lovable Cloud sits on Supabase's open-source foundation, so both cases of in-housing look less like building from zero and more like reworking a borrowed base into the company's own product.
:::

Correction (September 28, 2026). The first version said a mechanical comparison of the two tech stacks found zero shared technology, which was wrong. The Cursor dissection's techStack was missing its third-party model providers, and the Lovable dissection's techStack was missing its generative AI model provider. With both confirmed against primary sources and added, the mechanical comparison returns Anthropic as shared technology. We also replaced the passage that guessed at which AI models Lovable uses with a statement based on Anthropic's official customer story, and added that Composer and Lovable Cloud each sit on an open-source base.

## The same rhythm: roughly tripling valuation in five months

The layers they chose to own diverge, yet their funding pace is strangely similar.

:::fact
Per the [Cursor](/en/articles/cursor) dissection, Cursor's valuation grew roughly threefold in about five months, from Series C ($9.9 billion, June 2025) to Series D ($29.3 billion, November 2025). Per the [Lovable](/en/articles/lovable) dissection, Lovable's valuation grew roughly 3.7-fold in about five months, from Series A ($1.8 billion, July 2025 — eight months after launch, coinciding with reaching $100 million ARR) to Series B ($6.6 billion, December 2025). Since then, Lovable reached a $13.3 billion valuation in its Series C on August 12, 2026, roughly doubling in about eight months from the Series B. Cursor's acquisition by SpaceX was completed on August 14, 2026, and per the SEC filing its implied equity value was $60.0 billion — roughly double the Series D valuation, about nine months later.
:::

:::guess
Two independent companies growing valuation at a similar pace suggests investors are converging on a shared time horizon for capital deployment across the AI coding / AI development tool space as a whole. Per the Cursor dissection, its Series D brought in NVIDIA and Google — the very providers of the compute these tools consume — as new investors, meaning the suppliers of compute are also becoming shareholders in the companies that consume it. Per Lovable's official announcement, its December 2025 Series B also included NVIDIA's NVentures and was co-led by CapitalG, Google's growth investment arm, so the same pattern appears to hold for Lovable as well. After 2025's roughly threefold rise in five months, 2026 brought both companies to a similar pace of roughly doubling in eight to nine months, but the outcomes diverged — an acquisition for Cursor, a funding round for Lovable — and whether this pace continues is unclear.
:::

Correction (September 28, 2026). The first version said it remained to be seen whether the pattern of compute suppliers becoming shareholders would appear for Lovable, which was wrong. Per Lovable's official announcement, its December 2025 Series B included NVIDIA's NVentures and CapitalG, Google's growth investment arm.

Cursor borrowed the editor and built the model; Lovable borrowed the backend and built the cloud. The layers they chose to own diverge completely, yet the rhythm of their growth — valuation multiplying within a few months — lines up almost exactly. In August 2026, Cursor became a wholly owned subsidiary of SpaceX, while Lovable stayed independent and raised at a $13.3 billion valuation. Overlaying the two dissections reveals a market — AI writing code — that tolerates multiple winning patterns depending on the target user's technical sophistication, while capital markets appear to be betting on both at the same pace.
