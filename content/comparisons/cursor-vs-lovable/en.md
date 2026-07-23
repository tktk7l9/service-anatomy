---
title: "Bring the Editor, or Build the Backend — the Different Layers Cursor and Lovable Chose to Own"
description: "Cursor was born forking VS Code; Lovable started with a Supabase integration. Both are \"AI tools standing on borrowed foundations,\" but they later built out different layers themselves — Cursor its own frontier model, Composer; Lovable its own built-in backend, Lovable Cloud & AI. Both grew fast on an oddly similar rhythm, roughly tripling in valuation in about five months. A dissection of how each company chose what to bring in-house."
lead: "Cursor borrowed an editor, VS Code, and built an AI model on top of it. Lovable borrowed a backend, Supabase, and built its own cloud on top of it. Both companies ran the same playbook — stand on a borrowed foundation — yet they later brought completely different layers in-house. And both grew fast on an oddly similar rhythm: valuation roughly tripling in about five months. This overlays the two dissections to compare how each chose what to own."
slugA: "cursor"
slugB: "lovable"
publishedAt: "2026-07-23"
updatedAt: "2026-07-23"
lastVerified: "2026-07-23"
sources:
  - label: "Cursor official blog: Series D (2025-11, $29.3B valuation)"
    url: "https://cursor.com/blog/series-d"
    accessedAt: "2026-07-20"
  - label: "Cursor official blog: Series C (2025-06, $9.9B valuation)"
    url: "https://cursor.com/blog/series-c"
    accessedAt: "2026-07-20"
  - label: "Lovable official blog (funding history, ARR trajectory)"
    url: "https://lovable.dev/blog"
    accessedAt: "2026-07-23"
---

[Cursor](/en/articles/cursor) and [Lovable](/en/articles/lovable) both grew, at strikingly similar speed, in the same market — having AI build an app from conversation or code. Yet a mechanical comparison of their tech stacks finds zero shared technology. And where each chose to bring a layer in-house, on top of an otherwise borrowed foundation, points in completely different directions.

## Same strategy, different layer brought in-house

:::fact
Per the [Cursor](/en/articles/cursor) dissection, Cursor forked the VS Code codebase as its editor foundation, then combined a code-editing model, Fast Apply (a fine-tuned Llama-3-70B via a Fireworks AI partnership), with its own in-house frontier model, Composer. Per the [Lovable](/en/articles/lovable) dissection, Lovable offers a mechanism connecting to Supabase's database infrastructure, while also shipping its own built-in backend, Lovable Cloud & AI (including data persistence and authentication), released in September 2025.
:::

:::pull
Cursor borrowed the editor and built the model. Lovable borrowed the backend and built the cloud. Same "borrow, then build" strategy — but which layer you pick defines the company.
:::

What Cursor brought in-house is the "intelligence" layer. It delegates the editor UI to a well-worn open-source project, VS Code, and concentrates its own differentiation on the model layer that determines editing precision and speed. What Lovable brought in-house is the "foundation" layer. The AI model that generates the app itself is apparently left to third parties, while the backend infrastructure — database, authentication — that lets the generated app actually run is something Lovable is trying to own itself.

:::guess
This difference in choice likely reflects the two companies placing value on different parts of the same phenomenon: AI writing code. Cursor's users are already developers who can write code themselves, and what they judge the product on is the precision and speed of editing itself — so owning the model layer becomes a direct differentiator. Lovable's users include non-engineers who just want to build an app from conversation, and for them the value lies in "something functional comes out the other end" — the reliability of the backend that keeps the generated app running matters more to the experience than model sophistication. Even within the same "AI developer tool" category, the assumed technical sophistication of the target user appears to determine which layer is worth owning.
:::

## The same rhythm: roughly tripling valuation in five months

The layers they chose to own diverge, yet their funding pace is strangely similar.

:::fact
Per the [Cursor](/en/articles/cursor) dissection, Cursor's valuation grew roughly threefold in about five months, from Series C ($9.9 billion, June 2025) to Series D ($29.3 billion, November 2025). Per the [Lovable](/en/articles/lovable) dissection, Lovable's valuation grew roughly 3.7-fold in about five months, from Series A ($1.8 billion, July 2025 — eight months after launch, coinciding with reaching $100 million ARR) to Series B ($6.6 billion, December 2025).
:::

:::guess
Two independent companies growing valuation at a similar pace suggests investors are converging on a shared time horizon for capital deployment across the AI coding / AI development tool space as a whole. Per the Cursor dissection, its Series D brought in NVIDIA and Google — the very providers of the compute these tools consume — as new investors, meaning the suppliers of compute are also becoming shareholders in the companies that consume it. Whether a similar pattern eventually appears for Lovable remains to be seen, but in this new market for AI developer tools, a growth rhythm of roughly tripling valuation every five months may itself be becoming an unwritten prerequisite for the next round.
:::

Cursor borrowed the editor and built the model; Lovable borrowed the backend and built the cloud. The layers they chose to own diverge completely, yet the rhythm of their growth — valuation multiplying within a few months — lines up almost exactly. Overlaying the two dissections reveals a market — AI writing code — that tolerates multiple winning patterns depending on the target user's technical sophistication, while capital markets appear to be betting on both at the same pace.
