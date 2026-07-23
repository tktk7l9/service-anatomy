---
title: "900 Million Users, and a Valuation Reversal — How Claude and ChatGPT Reached the Same Place by Different Roads"
description: "ChatGPT has 900 million weekly active users; Claude's disclosed scale doesn't come close. Yet by spring 2026, Anthropic's valuation had overtaken OpenAI's. A company born nonprofit and a company born a PBC converged on the same governance shape, and a mechanical comparison finds zero shared technology even though both companies run on the same standard underneath. Overlaying the two dissections."
lead: "As of February 2026, ChatGPT reportedly had 900 million weekly active users. We could not find a comparable public figure for Claude. Yet that same spring, Anthropic's reported valuation ($965 billion) overtook OpenAI's ($852 billion). The side with vastly fewer users is the one the market priced higher — this piece overlays the two dissections to find where that reversal happened."
slugA: "claude"
slugB: "chatgpt"
publishedAt: "2026-07-23"
updatedAt: "2026-07-23"
lastVerified: "2026-07-23"
sources:
  - label: "Anthropic official: Company (PBC mission and governance)"
    url: "https://www.anthropic.com/company"
    accessedAt: "2026-07-23"
  - label: "Anthropic official: Model Context Protocol announcement (2024-11-25, open standardization)"
    url: "https://www.anthropic.com/news/model-context-protocol"
    accessedAt: "2026-07-23"
  - label: "OpenAI Developers official: homepage (states Apps SDK is built on MCP)"
    url: "https://developers.openai.com"
    accessedAt: "2026-07-23"
  - label: "Wikipedia: Anthropic (PBC founding history, valuation trajectory, IPO reporting aggregated)"
    url: "https://en.wikipedia.org/wiki/Anthropic"
    accessedAt: "2026-07-23"
  - label: "Wikipedia: OpenAI (2025 restructuring, ownership structure, valuation trajectory aggregated)"
    url: "https://en.wikipedia.org/wiki/OpenAI"
    accessedAt: "2026-07-23"
  - label: "Wikipedia: ChatGPT (weekly active user trajectory aggregated)"
    url: "https://en.wikipedia.org/wiki/ChatGPT"
    accessedAt: "2026-07-23"
---

[Claude](/en/articles/claude) and [ChatGPT](/en/articles/chatgpt) compete most directly of any two companies in this corpus, both in the same "conversational AI" market. But dissect them and their corporate origins and governance histories run in opposite directions, and a mechanical comparison of their techStacks finds zero overlap. Read the prose side by side, though, and a closer relationship than expected emerges: one built a standard the other runs on top of.

## Opposite origins, the same governance shape

Anthropic was born in 2021 as a public benefit corporation (PBC) — a safety mission written into its charter from day one. OpenAI began in 2015 as a pure nonprofit lab, moved through an unusual "capped-profit" structure in 2019, and only on October 28, 2025 finally restructured into a two-tier arrangement: the nonprofit "OpenAI Foundation" (holding 26%) alongside the public benefit corporation "OpenAI Group PBC."

:::fact
Per Anthropic's official site, the company has been a Public Benefit Corporation since founding, with its charter purpose stated as "the responsible development and maintenance of advanced AI for the long-term benefit of humanity." Per aggregated Wikipedia reporting, OpenAI moved from its 2015 nonprofit founding through a 2019 capped-profit transition to completing, on October 28, 2025, a restructuring into "OpenAI Group PBC," with ownership split between the nonprofit OpenAI Foundation (26%), Microsoft (27%), and employees/investors (47%).
:::

:::pull
Anthropic was a PBC from day one. OpenAI spent ten years unwinding its nonprofit origins to arrive at something similar. Same destination, very different length of road.
:::

That two companies starting from opposite points landed, a decade apart, in roughly the same vessel — a minority nonprofit/quasi-nonprofit stake plus a PBC — suggests this kind of governance apparatus may be structurally necessary for running a conversational-AI business at the capital scale required.

:::guess
Anthropic likely could choose PBC from the start because its founders, having watched OpenAI's internal conflict between its nonprofit mission and its for-profit business up close, designed around that exact failure mode in advance. OpenAI, by contrast, spent years pulling against the tension between its founding nonprofit ideal and the extraordinary capital demands of frontier model development, only institutionalizing a compromise in the 2025 restructuring. That both companies converged on the same shape looks less like there being only one right answer and more like two different attempts at solving the same constraint — raising enormous capital while claiming a safety/public-benefit mission — landing near the same solution.
:::

## Zero on the mechanical comparison, yet standing on the same standard

Cross-referencing techStacks mechanically finds **not a single shared technology token**. Anthropic runs on AWS Trainium and Google Cloud TPU; OpenAI runs on Microsoft Azure and Oracle — the compute sourcing doesn't overlap at all.

:::fact
Per the [Claude](/en/articles/claude) dissection, Anthropic open-sourced the Model Context Protocol (MCP) — an open standard for securely connecting AI to data sources — in November 2024, free of charge. Per the [ChatGPT](/en/articles/chatgpt) dissection, OpenAI's official developer site states that the Apps SDK, used to extend ChatGPT with apps, is built on that same MCP.
:::

That convergence doesn't show up in this site's mechanical comparison (techOverlap). ChatGPT's own techStack entry records it as a single line, "Apps SDK（Model Context Protocol準拠）," with MCP treated as a parenthetical annotation — so only the token "Apps SDK" gets extracted, and it never becomes the shared token "Model Context Protocol." The same granularity limit we saw in the [Figma vs Canva](/en/compare/figma-vs-canva) dissection resurfaces here.

:::guess
Building your own app-extension mechanism on a rival's open standard suggests a pragmatic judgment on OpenAI's side: in the fight over agent-interoperability standards, riding one that already has adoption beats locking developers into a proprietary one. For Anthropic, the fact that its biggest rival adopted a standard it authored doesn't generate revenue, but it plausibly functions as proof of technical leadership. That the mechanical comparison returns zero while both companies are, in fact, aligned on exactly this one point shows that surface-level rivalry and infrastructure-layer cooperation can coexist.
:::

## 900 million users, and a valuation reversed

As a conversational AI, ChatGPT's reach dwarfs Claude's. Yet by spring 2026, Anthropic's valuation had pulled ahead.

:::fact
Per the [ChatGPT](/en/articles/chatgpt) dissection, weekly active users were reported at 900 million as of February 2026. As of writing the [Claude](/en/articles/claude) dissection, we could not confirm a comparable consumer-scale figure from either Anthropic's own materials or Wikipedia. Valuations, meanwhile, were reported at $965 billion for Anthropic as of May 2026 (per aggregated Wikipedia reporting) and $852 billion for OpenAI as of April 2026 (same source) — over roughly the same window, Anthropic came out ahead.
:::

:::pull
ChatGPT has many times Claude's users. Yet in spring 2026, the market priced Anthropic higher. Scale and valuation don't necessarily point the same direction.
:::

:::guess
This reversal plausibly suggests investors are pricing Anthropic's penetration among developers and enterprises more highly than ChatGPT's consumer-scale reach. As the [Claude](/en/articles/claude) dissection shows, Anthropic has stacked investment into developer-facing products like Claude Code and tends not to foreground consumer user counts in its own communications. OpenAI, by contrast, keeps publishing weekly active users as a headline metric. The valuation reversal looks like evidence that, within the same "conversational AI company" category, the two are actually chasing different paths to winning — mass consumer reach versus deep developer/enterprise penetration. That said, the valuation gap is narrow enough to be explained just by the timing mismatch between funding rounds, so whether this reversal reflects a structural trend or a momentary blip is something only future funding rounds will show.
:::

Two companies with opposite origins landed on the same governance shape; a mechanical comparison finds zero overlap even though both stand on the same open standard; and the side with far fewer users came out ahead on valuation. Overlaying the [Claude](/en/articles/claude) and [ChatGPT](/en/articles/chatgpt) dissections reveals two companies competing head-on in the same market for conversational AI while, in places neither seems eager to advertise, sharing the same foundation underneath.
