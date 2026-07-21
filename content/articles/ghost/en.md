---
service: "Ghost"
title: "A Live Dashboard Instead of Financial Statements — Ghost and the Structure That Cannot Be Acquired"
description: "Ghost, the open-source publishing platform. A nonprofit foundation publishes its ARR, customer count, and churn rate in real time, runs on ~40 people with no investors and no donations, and takes 0% of writers' subscription revenue. A dissection from official sources, through Ghost 6.0's ActivityPub connection to the open social web."
lead: "Ghost's official site displays, at this very moment, its ARR ($10.9 million), customer count (30,493), and churn rate (3.05%) — live. It chose a nonprofit foundation, a vessel that makes acquisition structurally impossible, runs profitably with no investors or donations, and takes no cut from the people who write. This is a dissection of that thoroughgoing design."
category: media
tags: [publishing, newsletter, open-source, nonprofit, activitypub]
publishedAt: "2026-07-21"
updatedAt: "2026-07-21"
lastVerified: "2026-07-21"
serviceUrl: "https://ghost.org/"
vendor: "Ghost Foundation"
origin: "GB"
heroTheme: "ghost"
scores: { product: 4.0, ux: 4.0, tech: 4.0, business: 4.0 }
techStack:
  - layer: "Core"
    name: "Node.js (JavaScript)"
    confidence: confirmed
    evidence: "Verified on the official GitHub (TryGhost/Ghost) that the primary language is JavaScript (54K+ stars, 2026-07-21). Published as Node.js open source"
    evidenceUrl: "https://github.com/TryGhost/Ghost"
  - layer: "Federation protocol"
    name: "ActivityPub"
    confidence: confirmed
    evidence: "Official changelog (Ghost 6.0, 2025-08-05) states sites federate via ActivityPub and can be followed from Mastodon, Threads, Bluesky, Flipboard, and more — free on both Ghost(Pro) and self-hosted"
    evidenceUrl: "https://ghost.org/changelog/6/"
  - layer: "Native analytics"
    name: "Ghost Analytics"
    confidence: confirmed
    evidence: "Official changelog (6.0) states first-party analytics ship built in — real-time measurement across web, newsletters, and subscriptions with no external tools"
    evidenceUrl: "https://ghost.org/changelog/6/"
  - layer: "Website delivery"
    name: "Netlify"
    confidence: confirmed
    evidence: "Our own HTTP header observation (server: Netlify, x-nf-request-id; 2026-07-21)"
    evidenceUrl: "https://ghost.org/"
sources:
  - label: "Ghost official: About (live public dashboard — ARR, customers, churn; the nonprofit declaration)"
    url: "https://ghost.org/about/"
    accessedAt: "2026-07-21"
  - label: "Ghost official changelog: Ghost 6.0 (ActivityPub federation, native analytics, 2025-08-05)"
    url: "https://ghost.org/changelog/6/"
    accessedAt: "2026-07-21"
  - label: "Ghost official: Pricing (flat hosting fees; 0% added fees on subscription revenue)"
    url: "https://ghost.org/pricing/"
    accessedAt: "2026-07-21"
  - label: "Ghost official GitHub: TryGhost/Ghost (Node.js, 54K+ stars verified)"
    url: "https://github.com/TryGhost/Ghost"
    accessedAt: "2026-07-21"
---

## Service overview

Ghost, begun in 2013, is an open-source publishing platform. It handles blogs, newsletters, and paid memberships in one piece of software, serving as the foundation for independent publishers — from individual writers to news organizations — who deliver directly to readers and charge them directly. It is operated by the nonprofit Ghost Foundation, and the official site states it plainly: the company can never be bought or sold, and one hundred percent of revenue is reinvested into the product and the community.

:::fact
Ghost's official About page publishes its operating metrics in real time. At the time of our visit on July 21, 2026, ARR stood at $10,947,413, monthly revenue at $912,284, active customers at 30,493, and net churn at 3.05%. Cumulative installs exceed 100 million, with 9 billion requests served monthly. The team is roughly 40 people, fully remote across five continents, and the page states the organization relies on no outside investors, donations, or grants.
:::

:::pull
Public companies file financial statements every quarter. Ghost leaves its current ARR and churn rate on its website, continuously. The difference is the period of the transparency.
:::

::scorecard

## UX analysis

Ghost's UX is designed to shorten the distance between writing and earning. The writer is the protagonist; the platform stays backstage.

- **The editor is the face of the product.** The card-based editor prioritizes writing speed and focus over decoration, and publishing, newsletter delivery, and paywall placement all complete in the same screen.
- **Site, newsletter, and billing are one from the start.** No stitching together a blog tool, an email service, and a membership system — the direct relationship with readers accumulates in a single database.
- **6.0's native analytics removed the external dependency.** Measurement of web traffic, newsletters, and subscription conversion ships built in, so a publication runs without pasting in Google Analytics — an internalization that makes sense for both privacy and simplicity.
- **The feeling of ownership is the core of the experience.** A custom domain, data export, and the self-hosting option are always open; being free to leave functions, in reverse, as the reason to stay. It is the same design of trust through exit we saw dissecting Obsidian and Signal.

## Tech stack

::techstack

:::fact
Ghost's core is Node.js (JavaScript) open source, with the official repository exceeding 54,000 stars (verified 2026-07-21). Ghost 6.0, released August 5, 2025, ships ActivityPub federation as standard: users on Mastodon, Threads, Bluesky, Flipboard, and other networks can follow a Ghost site directly. The capability is free on both Ghost(Pro) and self-hosted installations. The release also bundled first-party analytics requiring no external tools.
:::

:::guess
The investment in ActivityPub reads as a structural answer to the independent publisher's greatest weakness: distribution dependence on platforms. Rather than having reach dictated by X's or Facebook's algorithms, a publication connects to readers over an open protocol — the publishing edition of the "transparency you can exit" we saw in the Bluesky dissection. That the technology choices stay with the careful operation of a boring tool — Node.js — rather than ambitious self-building (the Figma pattern) or bold assembly (the Supabase pattern) looks like maintainability winning, as it must, when roughly 40 people support 100 million installs.
:::

## Business model

Ghost's revenue combines the free open-source core with flat-fee managed hosting, Ghost(Pro).

:::fact
Per the official pricing page, Ghost(Pro) charges flat monthly fees (from $18 Starter to $199 Business, billed yearly), and Ghost adds 0% in fees on writers' subscription revenue (payment processor fees apply separately). The About page states one hundred percent of this revenue is reinvested into the product and community.
:::

:::guess
Flat pricing with no revenue share means the more a writer earns from subscriptions, the better the deal — the sharpest possible counter-position to newsletter platforms that take a percentage. The nonprofit foundation is not a tax story; it is a trust device that structurally guarantees no acquisition-driven change of direction, and it functions as sales material for writers exhausted by platforms that transform under new owners. An ARR of roughly $11 million is small by for-profit SaaS standards, but the combination — 3% churn, 40 people, zero outside capital — is solving a different optimization problem: not maximum growth but maximum endurance. It looks like one completed form of that solution.
:::

A live dashboard instead of financial statements; acquisition deleted by charter; no cut of the writer's revenue. What Ghost's dissection reveals belongs to the same lineage as Signal and Obsidian — trust proven by structure, applied to publishing. There is no dramatic growth curve. But the fact that a business which removed growth from its objectives has stayed profitable for over a decade is, in this field, the most eloquent data point of all.
