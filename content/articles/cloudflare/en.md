---
service: "Cloudflare"
title: "The Internet's Bedrock — What Cloudflare Is, the Name That Appears in About 40% of the Services We've Dissected"
description: "Cloudflare started as a CDN, replaced NGINX with a home-built Rust proxy, and stacked V8-isolate serverless on top. A dissection of the 'invisible infrastructure' that appears in the techStack of 22 of our 54 dissected services (as of September 28, 2026, its own article included) and that now serves this site too, using official engineering blogs and earnings releases."
lead: "Across the 54 services this site has dissected, the same name appears in 22 techStacks (as of September 28, 2026, its own article included) — Cloudflare. It was also the single shared technology in our Notion vs. Obsidian comparison. This company spreads beneath individual services like a geological layer. What is it made of, and how does it make money? This time, we dig into the bedrock itself."
category: dev-tool
tags: [cdn, edge-computing, rust, serverless, security]
publishedAt: "2026-07-21"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
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
    evidence: "Official network page states presence in 348 cities across 100+ countries (checked 2026-09-28), within 50 milliseconds of 95% of the Internet-connected population (most within 20ms)"
    evidenceUrl: "https://www.cloudflare.com/network/"
  - layer: "Implementation language"
    name: "Rust"
    confidence: confirmed
    evidence: "Official blog states Cloudflare built its own proxy, Pingora, in Rust. The open-sourcing post (2024-02-28) also describes Pingora as a Rust framework"
    evidenceUrl: "https://blog.cloudflare.com/how-we-built-pingora-the-proxy-that-connects-cloudflare-to-the-internet/"
  - layer: "Website delivery"
    name: "Cloudflare"
    confidence: confirmed
    evidence: "HTTP header observation of www.cloudflare.com (server: cloudflare, x-served-by: marketing-site; re-checked 2026-09-28). The company serves its own site with its own product"
    evidenceUrl: "https://www.cloudflare.com/"
sources:
  - label: "Cloudflare official press release: Q4 and fiscal year 2025 results ($2,167.9M revenue, +30% YoY; 2026-02-10)"
    url: "https://www.cloudflare.com/press/press-releases/2026/cloudflare-announces-fourth-quarter-and-fiscal-year-2025-financial-results/"
    accessedAt: "2026-09-28"
  - label: "Cloudflare official blog: How we built Pingora (why they left NGINX; 1 trillion requests/day)"
    url: "https://blog.cloudflare.com/how-we-built-pingora-the-proxy-that-connects-cloudflare-to-the-internet/"
    accessedAt: "2026-09-28"
  - label: "Cloudflare official blog: open-sourcing Pingora (2024-02-28, Apache 2.0)"
    url: "https://blog.cloudflare.com/pingora-open-source/"
    accessedAt: "2026-09-28"
  - label: "Cloudflare official docs: How Workers works (the V8 isolate architecture)"
    url: "https://developers.cloudflare.com/workers/reference/how-workers-works/"
    accessedAt: "2026-09-28"
  - label: "Cloudflare official: the global network (348 cities; 95% within 50ms)"
    url: "https://www.cloudflare.com/network/"
    accessedAt: "2026-09-28"
  - label: "SEC filing: Cloudflare Form 8-K exhibit, Q4 and fiscal year 2025 results (2026-02-10)"
    url: "https://www.sec.gov/Archives/edgar/data/1477333/000147733326000008/q425exhibit991.htm"
    accessedAt: "2026-09-28"
  - label: "SEC filing: Cloudflare Form 8-K exhibit, Q2 2026 results (2026-08-06 — $696.1M revenue, +36% YoY)"
    url: "https://www.sec.gov/Archives/edgar/data/0001477333/000147733326000053/q226exhibit991.htm"
    accessedAt: "2026-09-28"
---

## Service overview

Cloudflare is the network service that stands in front of websites and APIs. Founded in 2009 and listed on the NYSE in 2019 (ticker: NET), it began with CDN, DDoS protection, and DNS, and has grown into an edge platform spanning serverless compute (Workers) and object storage (R2).

Cloudflare holds a special place for this site, too. It appears in the techStack of 22 of the 54 services we've dissected (as of September 28, 2026, its own article included; 12 of 25 when this article first ran in July 2026), and it was the single technology shared by both sides of our Notion vs. Obsidian comparison. This site itself moved from Vercel to Cloudflare Workers on September 12, 2026, and is now served from this layer. Dig into individual services and this layer keeps showing up — this article's subject is the layer itself.

:::fact
Per the official earnings release (February 10, 2026), fiscal year 2025 revenue was $2,167.9 million, up 30% year over year. The full-year GAAP operating loss was $207.2 million (9.6% of revenue), while non-GAAP operating income was $303.9 million (14.0%). For Q4 alone, revenue was $614.5 million, the GAAP operating loss was $49.2 million (8% of revenue), and non-GAAP operating income was $89.6 million (14.6%). Q4 included the largest contract in company history, averaging $42.5 million per year, and remaining performance obligations grew 48% year over year as the shift to large contracts continues. Per the Q2 2026 earnings release (August 6, 2026), quarterly revenue was $696.1 million, up 36% year over year, and full-year revenue guidance is $2,864.0 to $2,870.0 million. The network spans 348 cities in 100+ countries (official network page, checked September 28, 2026), within 50 milliseconds of 95% of the world's Internet-connected population.
:::

Correction (September 28, 2026). The first version presented the Q4-only operating figures (a GAAP operating loss of $49.2 million and non-GAAP operating income of $89.6 million) as fiscal year 2025 figures, which was wrong. They have been replaced with the full-year figures, and the Q4 figures are now given as quarterly figures.

:::pull
A name that appears in 22 of 54 dissections is no longer "a service" — it is closer to the ground the other services stand on.
:::

::scorecard

## UX analysis

Cloudflare's users are developers and operators. Its UX aims at one thing: compressing planet-scale infrastructure into an individual's settings page.

- **Change your nameservers, get 348 cities.** The moment you point a domain's nameservers at Cloudflare, CDN, DDoS protection, and TLS light up at edges worldwide. The physical scale of the infrastructure is fully decoupled from the effort of configuring it.
- **The free plan is real.** From personal blogs to small sites like this one, CDN and DDoS protection cost nothing. Traffic observed from free users feeds the threat-detection models — a design where free doesn't degrade the product but strengthens it.
- **One dashboard to hold it all.** DNS, caching, security rules, and Workers deployments fit in a single console, folding what used to be a multi-vendor operation into one company.
- **The developer-facing surface is wrangler and the docs.** Workers development centers on a CLI (wrangler) and documentation, with a short path from local run to deploy. A genuinely exotic execution model — code running at the edge — is translated into the experience of ordinary JavaScript development.

## Tech stack

::techstack

:::fact
Cloudflare's core proxy is Pingora, built in-house to replace NGINX after the company, in its own words, outgrew it. Per the official blog, the reasons were NGINX's worker-process design (unbalanced CPU load, weak connection reuse) and the safety of C/Lua extensions; Pingora, written in Rust, handles over 1 trillion requests a day and was open-sourced under Apache 2.0 on February 28, 2024. Workers, the serverless platform, runs on V8 isolates rather than containers — official docs state a single runtime switches among hundreds to thousands of isolates, starting roughly 100x faster than a Node process on a container.
:::

:::guess
What Pingora and Workers share appears to be a single judgment: generic execution units — processes, containers — are too heavy at edge scale. In a design that runs every service in all 348 cities, per-request fixed costs multiply, so investment in lightweight execution units — isolates, a single-binary Rust proxy — pays back fastest. Building Pingora in-house rather than buying, and then open-sourcing it, reads as recruiting PR but also as a standardization play: keeping the de facto edge implementation under Cloudflare's own design.
:::

## Business model

Cloudflare's revenue is subscription-based, climbing a staircase from the free plan through paid self-serve tiers to enterprise contracts.

:::fact
Per the official earnings release, fiscal 2025 revenue of $2,167.9 million (up 30%) came with a GAAP operating loss of $207.2 million. Meanwhile, new annual contract value grew nearly 50% year over year — the fastest since 2021 — including the record deal averaging $42.5 million per year, and full-year non-GAAP operating margin held at 14.0%. In Q2 2026 (announced August 6, 2026), revenue was $696.1 million (up 36%), the GAAP operating loss was $205.7 million (30% of revenue), and non-GAAP operating income was $96.1 million (14%).
:::

:::guess
Continuing to invest through GAAP losses looks like a bet on the nature of infrastructure: once you become the bedrock, you cannot be swapped out. Maximize the base with a free plan, strengthen threat detection with the observed traffic, and use that credibility to win enterprise security and network budgets — to keep a loop where scale itself becomes product quality, expanding the surface beats near-term operating profit. The 48% growth in remaining performance obligations suggests the strategy is crystallizing into large contracts — and also, one suspects, that a head-on collision with the major clouds is drawing closer.
:::

A name that surfaced 22 times across 54 dissections is becoming less of a structure on the internet and more of its ground. Abandon NGINX and build your own; abandon containers and choose isolates — the obsession with staying light enough to remain the ground is the consistent theme of this company's engineering. Next time a dissection turns up a cf-ray header, this is the layer spreading underneath.
