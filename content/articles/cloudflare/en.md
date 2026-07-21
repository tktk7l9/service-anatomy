---
service: "Cloudflare"
title: "The Internet's Bedrock — What Cloudflare Is, the Name That Appears in Half of the 25 Services We've Dissected"
description: "Cloudflare started as a CDN, replaced NGINX with a home-built Rust proxy, and stacked V8-isolate serverless on top. A dissection of the 'invisible infrastructure' that appears in the techStack of 12 of our 25 dissected services, using official engineering blogs and earnings releases."
lead: "Across the 25 services this site has dissected, the same name appears in 12 techStacks — Cloudflare. It was also the single shared technology in our Notion vs. Obsidian comparison. This company spreads beneath individual services like a geological layer. What is it made of, and how does it make money? This time, we dig into the bedrock itself."
category: dev-tool
tags: [cdn, edge-computing, rust, serverless, security]
publishedAt: "2026-07-21"
updatedAt: "2026-07-21"
lastVerified: "2026-07-21"
serviceUrl: "https://www.cloudflare.com/"
vendor: "Cloudflare, Inc."
origin: "US"
heroTheme: "cloudflare"
scores: { product: 4.5, ux: 4.0, tech: 5.0, business: 4.0 }
techStack:
  - layer: "Edge proxy"
    name: "Pingora (Rust)"
    confidence: confirmed
    evidence: "Official blog states Cloudflare outgrew NGINX (worker-process design, C/Lua safety) and built Pingora in Rust, handling over 1 trillion requests a day; open-sourced February 2024 under Apache 2.0"
    evidenceUrl: "https://blog.cloudflare.com/how-we-built-pingora-the-proxy-that-connects-cloudflare-to-the-internet/"
  - layer: "Serverless runtime"
    name: "Cloudflare Workers (V8 isolates)"
    confidence: confirmed
    evidence: "Official docs state code runs in V8 isolates rather than containers — a single runtime switches between hundreds or thousands of isolates, starting about 100x faster than a Node process on a container"
    evidenceUrl: "https://developers.cloudflare.com/workers/reference/how-workers-works/"
  - layer: "Network"
    name: "Anycastグローバルネットワーク"
    confidence: confirmed
    evidence: "Official network page states presence in 337 cities across 100+ countries, within 50 milliseconds of 95% of the Internet-connected population (most within 20ms)"
    evidenceUrl: "https://www.cloudflare.com/network/"
  - layer: "Website delivery"
    name: "Cloudflare"
    confidence: confirmed
    evidence: "Our own HTTP header observation (server: cloudflare, x-served-by: marketing-site; 2026-07-21). The company serves its own site with its own product"
    evidenceUrl: "https://www.cloudflare.com/"
sources:
  - label: "Cloudflare official press release: Q4 and fiscal year 2025 results ($2,167.9M revenue, +30% YoY; 2026-02-10)"
    url: "https://www.cloudflare.com/press/press-releases/2026/cloudflare-announces-fourth-quarter-and-fiscal-year-2025-financial-results/"
    accessedAt: "2026-07-21"
  - label: "Cloudflare official blog: How we built Pingora (why they left NGINX; 1 trillion requests/day)"
    url: "https://blog.cloudflare.com/how-we-built-pingora-the-proxy-that-connects-cloudflare-to-the-internet/"
    accessedAt: "2026-07-21"
  - label: "Cloudflare official blog: open-sourcing Pingora (2024-02-28, Apache 2.0)"
    url: "https://blog.cloudflare.com/pingora-open-source/"
    accessedAt: "2026-07-21"
  - label: "Cloudflare official docs: How Workers works (the V8 isolate architecture)"
    url: "https://developers.cloudflare.com/workers/reference/how-workers-works/"
    accessedAt: "2026-07-21"
  - label: "Cloudflare official: the global network (337 cities; 95% within 50ms)"
    url: "https://www.cloudflare.com/network/"
    accessedAt: "2026-07-21"
---

## Service overview

Cloudflare is the network service that stands in front of websites and APIs. Founded in 2009 and listed on the NYSE in 2019 (ticker: NET), it began with CDN, DDoS protection, and DNS, and has grown into an edge platform spanning serverless compute (Workers) and object storage (R2).

Cloudflare holds a special place for this site, too. It appears in the techStack of 12 of the 25 services we've dissected, and it was the single technology shared by both sides of our Notion vs. Obsidian comparison. Dig into any individual service and this layer keeps showing up — this article's subject is the layer itself.

:::fact
Per the official earnings release (February 10, 2026), fiscal year 2025 revenue was $2,167.9 million, up 30% year over year. The GAAP operating loss was $49.2 million (8% of revenue), while non-GAAP operating income was $89.6 million (15%). Q4 included the largest contract in company history at $42.5 million in annual contract value, and remaining performance obligations grew 48% year over year as the shift to large contracts continues. The network spans 337 cities in 100+ countries, within 50 milliseconds of 95% of the world's Internet-connected population.
:::

:::pull
A name that appears in 12 of 25 dissections is no longer "a service" — it is closer to the ground the other services stand on.
:::

::scorecard

## UX analysis

Cloudflare's users are developers and operators. Its UX aims at one thing: compressing planet-scale infrastructure into an individual's settings page.

- **Change your nameservers, get 337 cities.** The moment you point a domain's nameservers at Cloudflare, CDN, DDoS protection, and TLS light up at edges worldwide. The physical scale of the infrastructure is fully decoupled from the effort of configuring it.
- **The free plan is real.** From personal blogs to small sites like this one, CDN and DDoS protection cost nothing. Traffic observed from free users feeds the threat-detection models — a design where free doesn't degrade the product but strengthens it.
- **One dashboard to hold it all.** DNS, caching, security rules, and Workers deployments fit in a single console, folding what used to be a multi-vendor operation into one company.
- **The developer-facing surface is wrangler and the docs.** Workers development centers on a CLI (wrangler) and documentation, with a short path from local run to deploy. A genuinely exotic execution model — code running at the edge — is translated into the experience of ordinary JavaScript development.

## Tech stack

::techstack

:::fact
Cloudflare's core proxy is Pingora, built in-house to replace NGINX after the company, in its own words, outgrew it. Per the official blog, the reasons were NGINX's worker-process design (unbalanced CPU load, weak connection reuse) and the safety of C/Lua extensions; Pingora, written in Rust, handles over 1 trillion requests a day and was open-sourced under Apache 2.0 on February 28, 2024. Workers, the serverless platform, runs on V8 isolates rather than containers — official docs state a single runtime switches among hundreds to thousands of isolates, starting roughly 100x faster than a Node process on a container.
:::

:::guess
What Pingora and Workers share appears to be a single judgment: generic execution units — processes, containers — are too heavy at edge scale. In a design that runs every service in all 337 cities, per-request fixed costs multiply, so investment in lightweight execution units — isolates, a single-binary Rust proxy — pays back fastest. Building Pingora in-house rather than buying, and then open-sourcing it, reads as recruiting PR but also as a standardization play: keeping the de facto edge implementation under Cloudflare's own design.
:::

## Business model

Cloudflare's revenue is subscription-based, climbing a staircase from the free plan through paid self-serve tiers to enterprise contracts.

:::fact
Per the official earnings release, fiscal 2025 revenue of $2,167.9 million (up 30%) came with a GAAP operating loss of $49.2 million. Meanwhile, Q4 new annual contract value grew nearly 50% year over year — the fastest since 2021 — including the record $42.5 million-per-year deal, and non-GAAP operating margin held at 15%.
:::

:::guess
Continuing to invest through GAAP losses looks like a bet on the nature of infrastructure: once you become the bedrock, you cannot be swapped out. Maximize the base with a free plan, strengthen threat detection with the observed traffic, and use that credibility to win enterprise security and network budgets — to keep a loop where scale itself becomes product quality, expanding the surface beats near-term operating profit. The 48% growth in remaining performance obligations suggests the strategy is crystallizing into large contracts — and also, one suspects, that a head-on collision with the major clouds is drawing closer.
:::

A name that surfaced 12 times across 25 dissections is becoming less of a structure on the internet and more of its ground. Abandon NGINX and build your own; abandon containers and choose isolates — the obsession with staying light enough to remain the ground is the consistent theme of this company's engineering. Next time a dissection turns up a cf-ray header, this is the layer spreading underneath.
