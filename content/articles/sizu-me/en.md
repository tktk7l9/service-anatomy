---
service: "Shizuka na Internet (sizu.me)"
title: "Delete the Numbers and the Writing Comes Back — The Contrarian Design of sizu.me"
description: "Shizuka na Internet ('The Quiet Internet') is a writing space with no likes, no view counts, no rankings. We dissect the philosophy and the tech stack (Next.js / Cloud Run / Cloudflare) of the small sanctuary catnose — creator of Zenn and Nani Translate — built for the age of social media fatigue."
lead: "No like counts, no page views, no rankings. Shizuka na Internet deliberately discards the grammar of the modern web — engagement maximization — to be a place for diaries and essays. We dissect how catnose, the creator of Zenn and Nani Translate, designed and sustains this contrarian bet."
category: media
tags: [writing, blog, nextjs, cloudflare, indie-dev]
publishedAt: "2026-07-16"
updatedAt: "2026-07-16"
lastVerified: "2026-07-16"
serviceUrl: "https://sizu.me/home"
vendor: "catnose"
origin: "JP"
heroTheme: "sizu-me"
scores: { product: 4.0, ux: 4.5, tech: 4.0, business: 3.0 }
techStack:
  - layer: "Framework"
    name: "Next.js (App Router)"
    confidence: confirmed
    evidence: "Our HTTP header observation (x-powered-by: Next.js; 2026-07-16) plus the developer's own tech write-up (2023-11)"
    evidenceUrl: "https://zenn.dev/catnose99/articles/f8a90a1616dfb3"
  - layer: "CDN"
    name: "Cloudflare"
    confidence: confirmed
    evidence: "HTTP header observation (cf-ray; 2026-07-16) plus the developer's tech write-up"
    evidenceUrl: "https://zenn.dev/catnose99/articles/f8a90a1616dfb3"
  - layer: "Hosting"
    name: "Google Cloud Run"
    confidence: likely
    evidence: "Developer's tech write-up (as of 2023-11); later changes undisclosed"
    evidenceUrl: "https://zenn.dev/catnose99/articles/f8a90a1616dfb3"
  - layer: "Database"
    name: "PlanetScale (MySQL)"
    confidence: likely
    evidence: "Developer's tech write-up (as of 2023-11); later changes undisclosed"
    evidenceUrl: "https://zenn.dev/catnose99/articles/f8a90a1616dfb3"
  - layer: "Cache"
    name: "Upstash Redis"
    confidence: likely
    evidence: "Developer's tech write-up (as of 2023-11)"
    evidenceUrl: "https://zenn.dev/catnose99/articles/f8a90a1616dfb3"
  - layer: "Image / file storage"
    name: "Cloudflare R2"
    confidence: likely
    evidence: "Developer's tech write-up (as of 2023-11)"
    evidenceUrl: "https://zenn.dev/catnose99/articles/f8a90a1616dfb3"
  - layer: "Auth"
    name: "NextAuth.js + Firebase Authentication"
    confidence: likely
    evidence: "Developer's tech write-up (as of 2023-11)"
    evidenceUrl: "https://zenn.dev/catnose99/articles/f8a90a1616dfb3"
sources:
  - label: "Shizuka na Internet (service introduction)"
    url: "https://sizu.me/home"
    accessedAt: "2026-07-16"
  - label: "Zenn: the tech stack of Shizuka na Internet (by developer catnose, 2023-11)"
    url: "https://zenn.dev/catnose99/articles/f8a90a1616dfb3"
    accessedAt: "2026-07-16"
  - label: "sizu.me: major behind-the-scenes update (catnose, 2024-11)"
    url: "https://sizu.me/catnose/posts/dh12msvx92c3"
    accessedAt: "2026-07-16"
  - label: "laiso: investigating the tech stack of Shizuka na Internet (external analysis)"
    url: "https://laiso.hatenablog.com/entry/2023/11/23/210736"
    accessedAt: "2026-07-16"
---

Modern web services have driven people by showing them numbers: likes, views, followers, rankings. Shizuka na Internet — "The Quiet Internet" — erased all of them. A writing service that officially declares "you don't need to be read by many people." This is a dissection of the other signature work of catnose, whose [Nani Translate](/en/articles/nani-translation) we covered previously.

## Service Overview

Shizuka na Internet is a place for writing diaries and essays — a "scribble space," in its own words. You can publish what you write, but there is no machinery for competing to be read.

:::fact
The official introduction describes the service as "a scribble service just right for diaries and essays," and explicitly states that being widely read is not the point. The design avoids emphasizing numbers such as view counts and likes, and it does not ask for useful information. It is run by independent developer catnose, launched in November 2023, and the developer published a detailed explanation of its architecture on Zenn.
:::

:::pull
"You don't need to be read by many people" — almost no writing platform in the world could put that sentence in its own introduction.
:::

::scorecard

## UX Analysis

Shizuka na Internet is a showcase of design by subtraction.

- **The absence of numbers changes behavior.** With no views or likes visible, you write what you want to write instead of what will perform. Stepping outside the approval loop of social media is the core feature — the absence of features is the feature.
- **The word "scribble" is itself design.** Not works, not articles — scribbles. That word choice removes the pressure of polish and usefulness, lowering the barrier to writing all the way to the ground.
- **The editor is seriously good.** As you would expect from the creator of Zenn, the writing instrument is polished. The combination of soft philosophy and hard implementation separates it from mere minimalist styling.
- **The structural weakness is discoverability.** Abandoning the machinery of being read also means thin channels for new users. Growth depends on catnose's own reach and word of mouth.

Arriving amid widespread fatigue with the X-style internet, it stands as a rare product with an explicitly anti-engagement position.

## Tech Stack

::techstack

:::fact
Per the developer's own write-up (November 2023), the launch architecture ran Next.js (App Router) on Google Cloud Run, with Cloudflare as CDN, PlanetScale (MySQL) as the database, Upstash Redis for caching, Cloudflare R2 for files, and NextAuth.js with Firebase Authentication. Our own observation on July 16, 2026 confirmed Next.js (x-powered-by) and Cloudflare (cf-ray) in the current setup.
:::

:::guess
A "major behind-the-scenes update" was announced in November 2024, and PlanetScale — part of the 2023 stack — discontinued its free tier in 2024, so the database layer may have been migrated since; that is why the table keeps those rows at "likely." Comparing this stack with Nani Translate's (Turso/Upstash/Vercel), catnose appears to reassemble, per product, whatever managed stack is cheapest to keep alive at that moment — a consistent fixed-cost-minimization strategy for running multiple indie products.
:::

## Business Model

Shizuka na Internet has almost no machinery for maximizing revenue.

:::fact
The service contains links for sponsorship and support, but the official introduction lists no pricing plans, and no advertising is displayed.
:::

:::guess
A philosophy of hiding numbers is fundamentally incompatible with an advertising model (i.e., PV maximization), so the service plausibly sustains itself on direct user support combined with very low running costs. Within catnose's portfolio, Shizuka na Internet reads less as a standalone revenue source than as a statement of philosophy and a community anchor — one corner of the structure, proven with Zenn and Nani Translate, in which the developer himself is the strongest acquisition channel.
:::

On a web where maximizing engagement is treated as the only correct answer, this service quietly declines to play. Shizuka na Internet is a small, sharp counterexample showing that differentiation can come not from what you add, but from what you dare to remove.
