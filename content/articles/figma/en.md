---
service: "Figma"
title: "A Game Engine Inside a Browser — How Figma Turned a Collapsed $20B Deal Into a $1B War Chest"
description: "Figma, the browser-based design tool, dissected: its custom rendering engine (C++ compiled to WebAssembly), a proprietary real-time collaboration protocol that is neither OT nor CRDT, and the path from a collapsed Adobe acquisition to an independent IPO — from official blog posts and SEC filings."
lead: "The conventional wisdom was that browsers weren't built to run game engines. Figma broke that by compiling a C++ rendering engine to WebAssembly, enabling multiple people to edit the same canvas at once. When regulators blocked a $20 billion acquisition, the $1 billion breakup fee became the war chest for an independent IPO. We dissect the technical and business strength behind both moves."
category: productivity
tags: [design-tool, webassembly, collaboration, rust, ipo]
publishedAt: "2026-07-20"
updatedAt: "2026-07-20"
lastVerified: "2026-07-20"
serviceUrl: "https://www.figma.com/"
vendor: "Figma, Inc."
origin: "US"
heroTheme: "figma"
scores: { product: 4.5, ux: 4.5, tech: 4.5, business: 4.0 }
techStack:
  - layer: "Rendering engine"
    name: "C++ (WebAssembly / Emscripten)"
    confidence: confirmed
    evidence: "Official blog: the renderer is written in C++ and compiled to WebAssembly via Emscripten for use in the main app. The switch to WebAssembly cut load time by 3x"
    evidenceUrl: "https://www.figma.com/blog/webassembly-cut-figmas-load-time-by-3x/"
  - layer: "Graphics API"
    name: "WebGPU"
    confidence: confirmed
    evidence: "Official blog states the C++ renderer's drawing backend has moved to WebGPU"
    evidenceUrl: "https://www.figma.com/blog/figma-rendering-powered-by-webgpu/"
  - layer: "Realtime sync server"
    name: "Rust (自作の同時編集プロトコル)"
    confidence: confirmed
    evidence: "Official blog: the server is written in Rust and uses a custom collaborative-editing system, adopting neither OT nor CRDTs"
    evidenceUrl: "https://www.figma.com/blog/how-figmas-multiplayer-technology-works/"
  - layer: "Persistence (write durability)"
    name: "DynamoDB (Write-Ahead Journal)"
    confidence: confirmed
    evidence: "Official blog (2022-10): a DynamoDB-backed journal processes over 2.2 billion changes per day, cutting worst-case data loss from 60 seconds to under 1 second"
    evidenceUrl: "https://www.figma.com/blog/making-multiplayer-more-reliable/"
  - layer: "Persistence (non-multiplayer data)"
    name: "PostgreSQL"
    confidence: confirmed
    evidence: "Official blog states comments, users, and teams data are managed in PostgreSQL"
    evidenceUrl: "https://www.figma.com/blog/how-figmas-multiplayer-technology-works/"
  - layer: "Cloud platform"
    name: "AWS + CloudFront"
    confidence: confirmed
    evidence: "Official infrastructure blog states operation on AWS; consistent with our own HTTP header observation (via: CloudFront, 2026-07-20)"
    evidenceUrl: "https://www.figma.com/blog/under-the-hood-of-figmas-infrastructure/"
sources:
  - label: "Figma official blog: How Figma's multiplayer technology works (why not OT/CRDT)"
    url: "https://www.figma.com/blog/how-figmas-multiplayer-technology-works/"
    accessedAt: "2026-07-20"
  - label: "Figma official blog: Making multiplayer more reliable (2022-10 — DynamoDB WAL)"
    url: "https://www.figma.com/blog/making-multiplayer-more-reliable/"
    accessedAt: "2026-07-20"
  - label: "Figma official blog: WebAssembly cut Figma's load time by 3x"
    url: "https://www.figma.com/blog/webassembly-cut-figmas-load-time-by-3x/"
    accessedAt: "2026-07-20"
  - label: "SEC Form 424B4 (Figma, Inc. — IPO prospectus, listed August 2025)"
    url: "https://www.sec.gov/Archives/edgar/data/1579878/000162828025037014/figma424b4.htm"
    accessedAt: "2026-07-20"
  - label: "The Register: Figma files for IPO in wake of abandoned Adobe acquisition (2025-04)"
    url: "https://www.theregister.com/2025/04/16/adobe_figma_ipo/"
    accessedAt: "2026-07-20"
---

A browser is for displaying documents and forms — not for running a game engine. That was the conventional wisdom circa 2015. Figma broke it, embedding a C++ rendering engine compiled to WebAssembly inside the browser, enabling multiple people to edit the same canvas simultaneously. That technical bet became the foundation for turning a corporate crisis — a $20 billion acquisition falling apart — into an independent IPO victory.

## What the service is

Figma is a collaborative design tool that runs in the browser, built around the experience of an entire team — not just designers, but engineers and PMs — viewing and editing the same file at once.

:::fact
Per its SEC filing (Form 424B4), Figma listed on the New York Stock Exchange on August 1, 2025, offering 12.5 million newly issued shares at a public offering price of $33 per share. Prior to this, Adobe had announced in September 2022 its intent to acquire Figma for roughly $20 billion, but the two companies mutually agreed to terminate the deal in December 2023 after regulators in Europe and the UK gave no clear path to approval. Per reporting including The Register, Adobe paid Figma a $1 billion termination fee as part of that agreement.
:::

:::pull
Plenty of companies simply end when an acquisition falls apart. Few turn the breakup fee into the capital for an independent IPO. For Figma, the collapsed deal wasn't a defeat — it was the war chest for independence.
:::

::scorecard

## UX analysis

Figma's UX concentrates its technical investment on a single goal: never let you feel the browser's limits.

- **The invention of visible cursors.** Simply seeing other people's cursors and selections in real time turns concurrent editing from "avoiding collisions" into "building together." That felt quality is what elevated Figma from a design tool into collaboration infrastructure.
- **No freezing, even on heavy documents.** Thanks to the C++/WebAssembly rendering engine, browser tabs handle files with thousands of layers at near-native-app speed. The feeling of "runs in a browser, yet isn't sluggish" is itself a differentiator.
- **Comments and version history pull in non-designers.** Letting PM and engineering feedback accumulate directly inside the design file turned Figma from "a designer's tool" into "where the whole product team lives."
- **A low barrier to free entry drives organic spread.** Individual viewing and commenting sit within the free tier, so one designer's adoption tends to propagate across an entire organization.

## Tech stack

::techstack

:::fact
Per official blog posts, Figma's rendering engine was originally written in C++ and compiled to WebAssembly via Emscripten (a move that cut load times 3x), with the drawing backend more recently migrated to WebGPU. Real-time collaboration uses neither OT (Operational Transform) nor CRDTs (Conflict-free Replicated Data Types), but a custom, centralized protocol run on Rust servers. Persistence is split by purpose: general data like comments, users, and teams live in PostgreSQL, while multiplayer change history runs through a Write-Ahead Journal on DynamoDB. A 2022 official post reports that journal processing over 2.2 billion changes per day, cutting worst-case data-loss exposure from 60 seconds to under 1 second. The platform runs on AWS, and our own header observation confirmed delivery via CloudFront.
:::

:::guess
Deliberately adopting neither of the two academically established approaches — OT nor CRDT — looks like a pragmatic, domain-aware call: Figma documents are trees of objects with hundreds of properties, a poor fit for OT (optimized for text editing), while the complexity CRDTs assume for decentralized consensus is unnecessary given a centralized server architecture. The early investment in C++/WASM likely paid off as first-mover advantage in the "heavy app on the web" category, and plausibly forms the foundation for newer products like Figma Slides as well.
:::

## Business model

Figma's revenue is seat-based SaaS, but its business history is defined by an M&A drama that overshadows the pricing model itself.

:::fact
In September 2022, Adobe announced its intent to acquire Figma for roughly $20 billion (split roughly evenly between cash and stock), but with no clear path to European and UK regulatory approval, the deal was mutually terminated in December 2023. Per the termination agreement, Adobe paid Figma a $1 billion breakup fee. Figma subsequently filed for an IPO in July 2025 and went public on August 1, 2025, at $33 per share.
:::

:::guess
The widely held interpretation is that regulators blocked the deal because Figma wasn't merely an acquisition target for Adobe — it was a potential competitive threat to Adobe's own future product lines, including Adobe XD. The $1 billion fee likely functioned as insurance against deal-collapse damage (talent flight, customer anxiety), and in effect became the economic push toward choosing independence. As generative AI opens a new axis of competition around design automation, whether Figma can navigate that shift while carrying the quarterly accountability of a public company is the real test ahead.
:::

A technical bet on embedding game-engine-grade software inside a browser, and a business decision to turn a regulator-blocked acquisition into the capital for independence. Figma's decade is a record of both engineering and management repeatedly choosing what lay outside conventional wisdom.
