---
service: "Linear"
title: "A Rebellion Against Slow Tools — How Linear's Sync Engine Reclaimed the Speed of Instruments"
description: "Dissecting Linear, the issue tracker: the custom sync engine (IndexedDB + MobX + WebSocket deltas) behind its zero-latency feel, the keyboard-first philosophy codified as the Linear Method, and its spread to 15,000+ companies including OpenAI, capped by a Series C at a $1.25B valuation."
lead: "Issue trackers are slow and heavy — Linear was built as a rebellion against that industry norm, engineering an experience where the action is finished the moment you click. We dissect the sync engine that writes locally first and reconciles in the background, and the philosophy that shipped a team's aesthetics as a product."
category: dev-tool
tags: [project-management, local-first, sync-engine, graphql, saas]
publishedAt: "2026-07-17"
updatedAt: "2026-07-17"
lastVerified: "2026-07-17"
serviceUrl: "https://linear.app/"
vendor: "Linear"
origin: "US"
heroTheme: "linear"
scores: { product: 4.5, ux: 4.5, tech: 4.5, business: 4.0 }
techStack:
  - layer: "Sync architecture"
    name: "独自Sync Engine (OT系・sync id・差分配信)"
    confidence: confirmed
    evidence: "The reverse-engineering documentation endorsed by Linear's CTO as 'more correct and complete than what Linear publishes internally' describes an OT-style design with a monotonically increasing sync id establishing total order"
    evidenceUrl: "https://github.com/wzhudev/reverse-linear-sync-engine"
  - layer: "Client state"
    name: "MobX + IndexedDB"
    confidence: confirmed
    evidence: "The same documentation: models are made reactive with MobX and persisted to IndexedDB in per-model tables"
    evidenceUrl: "https://github.com/wzhudev/reverse-linear-sync-engine"
  - layer: "Realtime delivery"
    name: "WebSocket (デルタパケット配信)"
    confidence: confirmed
    evidence: "The same documentation: the server broadcasts incremental delta packets to all connected clients over WebSocket"
    evidenceUrl: "https://github.com/wzhudev/reverse-linear-sync-engine"
  - layer: "API"
    name: "GraphQL"
    confidence: confirmed
    evidence: "The official developers page documents the public API as GraphQL"
    evidenceUrl: "https://linear.app/developers"
  - layer: "Database"
    name: "PostgreSQL"
    confidence: likely
    evidence: "The CTO-endorsed documentation and multiple technical write-ups describe the sync server tailing Postgres's replication log"
    evidenceUrl: "https://github.com/wzhudev/reverse-linear-sync-engine"
  - layer: "Delivery / platform"
    name: "Cloudflare + Google Cloud"
    confidence: likely
    evidence: "Our HTTP header observation (server: cloudflare / via: 1.1 google, 2026-07-17); no official documentation found"
sources:
  - label: "Linear official blog: Building our way — the Series C announcement (2025-06)"
    url: "https://linear.app/now/building-our-way"
    accessedAt: "2026-07-17"
  - label: "The Linear Method (official product philosophy document)"
    url: "https://linear.app/method"
    accessedAt: "2026-07-17"
  - label: "reverse-linear-sync-engine (CTO-endorsed sync engine documentation)"
    url: "https://github.com/wzhudev/reverse-linear-sync-engine"
    accessedAt: "2026-07-17"
  - label: "Linear official: GraphQL API for developers"
    url: "https://linear.app/developers"
    accessedAt: "2026-07-17"
  - label: "TechCrunch: Atlassian rival Linear raises $82M at $1.25B valuation (2025-06)"
    url: "https://techcrunch.com/2025/06/10/atlassian-rival-linear-raises-82m-at-1-25b-valuation/"
    accessedAt: "2026-07-17"
---

People open Jira or Asana with an unconscious habit of waiting a beat. Linear declared that wait the enemy. Born in 2019, this issue tracker achieved speed through architecture rather than features, and spread to more than 15,000 companies including OpenAI. If [Obsidian](/en/articles/obsidian) practiced local-first thinking for notes, Linear practiced it for team SaaS.

## What the service is

Linear is issue and project management for software teams — issues, cycles (sprints), and roadmaps handled through a UI where the keyboard is a first-class citizen.

:::fact
Per the official blog (June 2025), Linear raised an $82 million Series C led by Accel at a $1.25 billion valuation, with 15,000+ companies using it, including OpenAI, Cash App, Ramp, and Scale AI. The product philosophy is officially codified as the Linear Method, and the company openly operates as a small, fully remote team.
:::

:::pull
Linear's real product is not issue tracking. It is the discipline that a tool must never lag behind the hand — reproduced in SaaS form.
:::

::scorecard

## UX analysis

Linear's UX can be explained through three things: speed, keyboard, opinion.

- **Zero perceived latency is a consequence of sync design.** Every action writes to a local database first, and the screen updates instantly. The network was banished from the user's interaction path and demoted to bookkeeping in the background. What matters is that the speed comes from architecture, not UI polish.
- **Keyboard-first and Cmd+K.** Every action has a shortcut, and the command menu is the shortest path to everything. The mouse is training wheels; the tool is designed to get faster as you get better.
- **Opinionated workflows.** Where Jira offers custom-field purgatory, Linear imposes fixed forms — cycles, triage, priorities. The Linear Method is the written justification for those forms, declaring that giving up configurability is part of the speed.
- **The weakness is organizations that don't fit the mold.** For non-engineering departments or enterprises with complex approval flows, the discipline becomes a constraint. In the wrong shop, Linear's aesthetics read as stubbornness.

## Tech stack

::techstack

:::fact
Per the reverse-engineering documentation that Linear CTO Tuomas Artman endorsed as "probably the best documentation that exists," the client makes its models reactive with MobX and persists them to IndexedDB. Changes queue as transactions and are sent to the server, which establishes total order with a monotonically increasing sync id and broadcasts delta packets to all clients over WebSocket. It is an OT-style design — a central server decides ordering, not CRDTs — and offline changes are cached as transactions to submit later. The public API is officially GraphQL.
:::

:::guess
Our observation shows Google's load balancer (via: 1.1 google) behind Cloudflare, suggesting Google Cloud as the production platform. The documented design has the sync server tailing Postgres's replication log — a pragmatic build that repurposes the database's change stream as delivery infrastructure rather than duplicating state. Avoiding CRDTs looks like a domain judgment call: in issue tracking, concurrent-edit conflicts are rare enough that server ordering suffices.
:::

## Business model

Linear's revenue is seat-based SaaS with a free tier — standard product-led growth.

:::fact
A free plan exists, with paid tiers stepping up by team size and features. The Series C announcement emphasized investment in AI-era product development (such as agents processing issues), and the customer list is dense with fast-growing AI companies.
:::

:::guess
Linear's growth appears to travel primarily through developers changing jobs and bringing the tool along — design and speed function as the marketing. The customer skew toward AI companies likely reflects fit: the tool's discipline suits small, fast-iterating organizations. The coming test is whether "speed for humans" retains its differentiating value in an era when agents file and process the issues themselves.
:::

A tool's speed never appears on a feature list, but it compounds daily. Linear implemented the obvious — developer tools should move at developer speed — through the heavy investment of a custom sync engine. As both a theory of tools and a theory of SaaS design, it will keep being cited.
