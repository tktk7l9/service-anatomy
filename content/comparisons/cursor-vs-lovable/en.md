---
title: "Bring the Editor, or Build the Backend — the Different Layers Cursor and Lovable Chose to Own"
description: "Cursor was born forking VS Code; Lovable started with a Supabase integration. Both are \"AI tools standing on borrowed foundations,\" but they later built out different layers themselves — Cursor its own model, Composer; Lovable its own built-in backend, Lovable Cloud & AI. In 2025 both grew on an oddly similar rhythm, roughly tripling in valuation in about five months. In August 2026 their paths split: Cursor was acquired by SpaceX, while Lovable kept raising outside capital. A dissection of what each chose to bring in-house, and where it led."
lead: "Cursor borrowed an editor, VS Code, and built an AI model on top of it. Lovable borrowed a backend, Supabase, and built its own cloud on top of it. Both companies ran the same playbook — stand on a borrowed foundation — yet they later brought completely different layers in-house. In 2025 both grew on an oddly similar rhythm: valuation roughly tripling in about five months. Then, in August 2026, Cursor became part of SpaceX, a parent that owns compute and models, and Lovable announced its Series C the same month. This overlays the two dissections to compare what each chose to own, and where the two paths diverged."
slugA: "cursor"
slugB: "lovable"
publishedAt: "2026-07-23"
updatedAt: "2026-10-02"
lastVerified: "2026-10-02"
sources:
  - label: "Cursor official blog: Cursor is now a part of SpaceX (2026-08-14 — acquisition by SpaceX completed)"
    url: "https://cursor.com/blog/joining-spacex"
    accessedAt: "2026-10-02"
  - label: "Cursor official blog: Series D (2025-11, $29.3B valuation, NVIDIA and Google as new investors)"
    url: "https://cursor.com/blog/series-d"
    accessedAt: "2026-10-02"
  - label: "Cursor official blog: Series C (2025-06, $9.9B valuation)"
    url: "https://cursor.com/blog/series-c"
    accessedAt: "2026-10-02"
  - label: "Cursor official docs: Models & Pricing (Composer and Grok in the first-party Cursor Models pool)"
    url: "https://cursor.com/docs/models-and-pricing"
    accessedAt: "2026-10-02"
  - label: "Lovable official blog: Series C (2026-08-12 — $400M raised, $13.3B valuation)"
    url: "https://lovable.dev/blog/series-c"
    accessedAt: "2026-10-02"
  - label: "Lovable official blog: Series B (2025-12-18 — $330M raised, $6.6B valuation, investor list)"
    url: "https://lovable.dev/blog/series-b"
    accessedAt: "2026-10-02"
  - label: "Lovable official blog: Series A (2025-07-17 — $200M raised, $1.8B valuation)"
    url: "https://lovable.dev/blog/200m-series-a-fundraise"
    accessedAt: "2026-10-02"
  - label: "Lovable official blog: Lovable Cloud & AI (2025-09-29)"
    url: "https://lovable.dev/blog/lovable-cloud"
    accessedAt: "2026-10-02"
  - label: "Lovable official docs: Lovable Cloud (uses Supabase's open-source foundation)"
    url: "https://docs.lovable.dev/integrations/cloud"
    accessedAt: "2026-10-02"
  - label: "Lovable official blog (funding history, ARR trajectory)"
    url: "https://lovable.dev/blog"
    accessedAt: "2026-10-02"
---

[Cursor](/en/articles/cursor) and [Lovable](/en/articles/lovable) both grew, at strikingly similar speed, in the same market — having AI build an app from conversation or code. Yet a mechanical comparison of their tech stacks finds zero shared technology. And where each chose to bring a layer in-house, on top of an otherwise borrowed foundation, points in completely different directions. In August 2026 that difference showed up in ownership too: Cursor was acquired by SpaceX.

## Same strategy, different layer brought in-house

:::fact
Per the [Cursor](/en/articles/cursor) dissection, Cursor forked the VS Code codebase as its editor foundation, used a code-editing model called Fast Apply (a fine-tuned Llama-3-70B via a Fireworks AI partnership) as of 2024, and introduced its own in-house coding model, Composer, in October 2025. As of October 2026, the official docs group Composer 2.5 and Grok 4.7, 4.6 and 4.5 into a first-party pool called "Cursor Models." Per Lovable's official blog, it released its built-in backend, Lovable Cloud & AI (including data persistence and authentication), on September 29, 2025. Its official docs (checked October 2026) say that built-in backend uses Supabase's open-source foundation, and they still describe connecting a Supabase project of your own as an option.
:::

:::pull
Cursor borrowed the editor and built the model. Lovable borrowed the backend and built the cloud. Same "borrow, then build" strategy — but which layer you pick defines the company.
:::

What Cursor brought in-house is the "intelligence" layer. It delegates the editor UI to a well-worn open-source project, VS Code, and concentrates its own differentiation on the model layer that determines editing precision and speed. Since the acquisition, though, that layer is no longer Cursor's alone: per the Cursor dissection, its parent SpaceX supplies GPU cluster compute, and Grok sits in the first-party pool next to Composer. What Lovable brought in-house is the "foundation" layer. The AI model that generates the app itself is apparently left to third parties, while the backend — database, authentication — that lets the generated app actually run is assembled as Lovable's own service on top of Supabase's open-source foundation.

:::guess
This difference in choice likely reflects the two companies placing value on different parts of the same phenomenon: AI writing code. Cursor's users are already developers who can write code themselves, and what they judge the product on is the precision and speed of editing itself — so owning the model layer becomes a direct differentiator. Lovable's users include non-engineers who just want to build an app from conversation, and for them the value lies in "something functional comes out the other end" — the reliability of the backend that keeps the generated app running matters more to the experience than model sophistication. Even within the same "AI developer tool" category, the assumed technical sophistication of the target user appears to determine which layer is worth owning.
:::

## The same valuation rhythm, then different destinations

The layers they chose to own diverge, yet their funding pace in 2025 was strangely similar. The difference came in 2026.

:::fact
Per Cursor's official blog, Cursor's valuation grew roughly threefold in about five months, from Series C ($9.9 billion, June 2025) to Series D ($29.3 billion, November 2025), and NVIDIA and Google joined as new investors in the Series D. Per the [Cursor](/en/articles/cursor) dissection, those were the last rounds officially announced before the acquisition; SpaceX then obtained the right to acquire Cursor on terms based on an implied equity value of $60 billion, and the official Cursor blog announced the completion of the acquisition on August 14, 2026. Per Lovable's official blog, Lovable's valuation grew roughly 3.7-fold in about five months, from Series A ($1.8 billion, July 2025 — "just eight months after launch," in the blog's words) to Series B ($6.6 billion, December 2025), and reached $13.3 billion with a $400 million Series C announced on August 12, 2026. The Series B was led by CapitalG and Menlo Ventures' Anthology fund, with NVentures among the participants.
:::

:::guess
That the two companies grew valuation at a similar pace in 2025 suggests investors were deploying capital on a shared time horizon across the AI coding / AI development tool space as a whole. At Cursor back then, NVIDIA and Google — major providers of the compute these tools consume — joined the Series D, so suppliers of compute were also becoming shareholders in a company that consumes it. Lovable's Series B likewise lists NVIDIA's venture arm and an Alphabet-affiliated growth fund, so a similar pattern can be read at both. In 2026 the destinations diverged. Cursor moved past having compute suppliers on its cap table and became part of a parent that owns compute and models. Lovable, as far as its official blog shows, was still raising a Series C from outside investors in August 2026, and appears to be continuing down the path of funding itself as an independent company. From Series B to Series C its valuation roughly doubled in about eight months — a gentler pace than in 2025.
:::

Cursor borrowed the editor and built the model; Lovable borrowed the backend and built the cloud. The layers they chose to own diverge completely, yet in 2025 the rhythm of their growth — valuation multiplying within a few months — lined up almost exactly. Overlaying the two dissections reveals a market — AI writing code — that has tolerated multiple winning patterns depending on the target user's technical sophistication, and in which the shape of ownership that follows is not settled on a single answer either. Cursor, which built the model, moved inside a parent that vertically integrates compute and models. Lovable, which built the cloud, is for now scaling on outside capital. The choice of which layer to own may also shape the choice of whom to join.
