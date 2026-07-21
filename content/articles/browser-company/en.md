---
service: "The Browser Company (Arc / Dia)"
title: "How to Kill a Beloved Browser — The 5.5% Reality That Turned Arc into Dia"
description: "The Browser Company froze Arc — a browser with devoted fans — and went all in on Dia, its AI browser. A dissection of the 'novelty tax,' the usage numbers the CEO published in an open letter, and the $610 million Atlassian acquisition, from the founder's own letter and official announcements."
lead: "Only 5.52% of daily active users regularly used Spaces, Arc's signature feature. Live Folders: 4.17%. Calendar Preview: 0.4%. The CEO published his own product's usage rates in an open letter — a public reckoning that love and retention are different metrics — then froze the product and re-bet the company on an AI browser. This is a dissection of that decision."
category: consumer-app
tags: [browser, ai, chromium, swift, acquisition]
publishedAt: "2026-07-21"
updatedAt: "2026-07-21"
lastVerified: "2026-07-21"
serviceUrl: "https://thebrowser.company/"
vendor: "The Browser Company of New York"
origin: "US"
heroTheme: "browser-company"
scores: { product: 3.5, ux: 4.0, tech: 4.0, business: 3.5 }
techStack:
  - layer: "Browser engine"
    name: "Chromium"
    confidence: confirmed
    evidence: "The CEO's open letter (2025-05-26) states Arc's maintenance continues as regular Chromium updates and security fixes; both Arc and Dia are Chromium-based"
    evidenceUrl: "https://browsercompany.substack.com/p/letter-to-arc-members-2025"
  - layer: "In-house browser toolkit"
    name: "ADK (Arc Development Kit)"
    confidence: confirmed
    evidence: "The same letter explains Arc won't be open-sourced because the in-house ADK is core to the company's competitive advantage and the foundation of Dia"
    evidenceUrl: "https://browsercompany.substack.com/p/letter-to-arc-members-2025"
  - layer: "Client language"
    name: "Swift"
    confidence: confirmed
    evidence: "Official GitHub (thebrowsercompany/swift-winrt) publishes a WinRT interop library for building Windows apps in Swift (840 stars, verified 2026-07-21) — Swift on Windows as well as macOS"
    evidenceUrl: "https://github.com/thebrowsercompany/swift-winrt"
  - layer: "Website delivery"
    name: "Vercel + Cloudflare"
    confidence: confirmed
    evidence: "Our own HTTP header observation (x-vercel-id: hnd1::… alongside server: cloudflare; 2026-07-21). Cloudflare layered in front of Vercel"
    evidenceUrl: "https://thebrowser.company/"
sources:
  - label: "The Browser Company official letter: Letter to Arc members 2025 (CEO Josh Miller — usage data and the freeze decision, 2025-05-26)"
    url: "https://browsercompany.substack.com/p/letter-to-arc-members-2025"
    accessedAt: "2026-07-21"
  - label: "Atlassian official blog: announcing the acquisition of The Browser Company (2025-09-04)"
    url: "https://www.atlassian.com/blog/announcements/atlassian-acquires-the-browser-company"
    accessedAt: "2026-07-21"
  - label: "CNBC: Atlassian agrees to acquire The Browser Co. for $610 million in cash (2025-09-04)"
    url: "https://www.cnbc.com/2025/09/04/atlassian-the-browser-company-deal.html"
    accessedAt: "2026-07-21"
  - label: "The Browser Company official GitHub: swift-winrt (Swift-on-Windows tooling)"
    url: "https://github.com/thebrowsercompany/swift-winrt"
    accessedAt: "2026-07-21"
---

## Service overview

The Browser Company of New York is a startup that builds browsers. Arc, released publicly in 2022, won devoted fans with bold redesigns — sidebar-first tab management, Spaces for switching work contexts. But in May 2025 the company stopped building new features for Arc and pivoted to Dia, an AI browser; that September, Atlassian announced it would acquire the company.

:::fact
In an open letter dated May 26, 2025, CEO Josh Miller disclosed Arc's own feature usage rates: 5.52% of daily active users regularly used multiple Spaces, 4.17% used Live Folders, 0.4% used Calendar Preview on Hover. He called the problem a "novelty tax": for most people Arc was simply too different, with too many new things to learn, for too little reward. Dia, by contrast, was reported to have 40% of DAUs chatting with tabs and 37% using personalization. On September 4, 2025, Atlassian announced the acquisition — approximately $610 million in cash, per CNBC.
:::

:::pull
"Loved" and "used" turned out to be different metrics. A CEO publishing his own product's usage rates is an unusually honest format for a product's funeral.
:::

::scorecard

## UX analysis

Arc's UX ranks among the most praised in the industry — and among the least retained. The gap itself is the lesson.

- **The beauty of the redesign scaled with its learning cost.** The vertical sidebar, Spaces, the hidden URL bar — designs that broke browser convention created passionate fans, but as the letter's numbers show, the majority stopped before learning the new concepts.
- **Fan enthusiasm is not a proxy for retention.** Praise on social media and a hot community coexisted with 5.52% actual usage. It is a quantified example of the danger of steering a product by the loudest voices.
- **Dia swung to the "nothing to learn" side.** It looks like a normal browser and centers on AI chat — an interaction pattern users already learned from ChatGPT. Instead of teaching new concepts, the design rides habits that already spread.
- **The honesty of the wind-down is also design.** Arc continues to receive Chromium updates and security fixes, with no forced migration. Folding a product carefully carries trust forward to the next one.

## Tech stack

::techstack

:::fact
Arc and Dia are both Chromium-based; the open letter states Arc's maintenance continues as regular Chromium updates and security patches. It also explains why Arc won't be open-sourced: the in-house browser toolkit ADK (Arc Development Kit) is core to the company's competitive advantage and the foundation of Dia. The clients are written in Swift — including on Windows, for which the company built and open-sourced its own Swift/WinRT interop library (verified on the official GitHub).
:::

:::guess
In browsers as a category, building the engine itself is impractical — differentiation concentrates in the layer above. Placing the competitive moat in ADK, an in-house layer atop Chromium, looks like the same shape of judgment as Supabase stacking value on Postgres or Vercel on AWS. The investment in Swift interop for Windows reads as both an obsession with UI quality and a single-language strategy for keeping macOS and Windows parity with a small team.
:::

## Business model

The Browser Company had not seriously begun monetizing before the acquisition. It ran on VC funding, and the exit was a sale to Atlassian.

:::fact
Atlassian announced the acquisition on its official blog (September 4, 2025), with CEO Mike Cannon-Brookes stating that "today's browsers weren't built for work. They were built for browsing." The stated plan develops Dia as the knowledge worker's browser along three lines: optimization for SaaS apps, AI capabilities with a memory of work context, and enterprise-grade security and admin controls. Per CNBC, the price was approximately $610 million, paid in cash from Atlassian's balance sheet.
:::

:::guess
The $610 million price looks less like a valuation of a consumer browser business and more like an acquisition of a team proven able to ship a browser, plus its technology. Standalone monetization — subscriptions, search deals — is brutal in a market where Chrome reigns for free; under Atlassian, where a browser can be redefined as the entry point to enterprise SaaS, Dia arguably found one of its few viable survival paths. The bet's outcome hangs on which gets amplified by Atlassian's distribution: the building ability Arc proved, or the spreading difficulty Arc exposed.
:::

Publish your own usage numbers, fold a beloved product, and sell the company along with the new bet — The Browser Company's three years are unusually dense as a textbook of product judgment. "Novelty tax" is a warning to every maker with UX ambition — and, at the same time, the irony stands: only by paying that tax did they earn the lesson that leads to Dia.
