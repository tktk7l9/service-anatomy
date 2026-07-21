---
service: "Vercel"
title: "Give the Framework Away, Sell the Land It Runs Best On — Dissecting Vercel, Which Hosts This Very Site"
description: "Vercel distributes Next.js as free open source and sells its optimal hosting. A dissection of the funnel behind a framework that topped 500 million downloads in twelve months, Fluid compute's bid to move past serverless, and the $9.3B pivot to an AI cloud — from official blogs and docs. Full disclosure: this article is served from Vercel."
lead: "The page you are reading right now is delivered from Vercel's servers — this site is written in Next.js and deployed on Vercel. Give the framework away for free, sell the place where it runs best: we dissect the business model from inside it, one step removed."
category: dev-tool
tags: [hosting, nextjs, serverless, rust, ai]
publishedAt: "2026-07-21"
updatedAt: "2026-07-21"
lastVerified: "2026-07-21"
serviceUrl: "https://vercel.com/"
vendor: "Vercel Inc."
origin: "US"
heroTheme: "vercel"
scores: { product: 4.5, ux: 4.5, tech: 4.0, business: 4.0 }
techStack:
  - layer: "Framework"
    name: "Next.js"
    confidence: confirmed
    evidence: "Official Series F post (2025-09-30) states downloads exceeded 500 million in the past 12 months — 'more times in the past 12 months than from 2016 to 2024 combined' — and notes adoption in the frontends of Grok, Claude, and Cursor"
    evidenceUrl: "https://vercel.com/blog/series-f"
  - layer: "Compute platform"
    name: "Fluid compute"
    confidence: confirmed
    evidence: "Official blog (2025-02-04) announces a 'mini-server' execution model beyond single-invocation serverless, with many-to-one concurrency per instance and compute cost reductions of up to 85%"
    evidenceUrl: "https://vercel.com/blog/introducing-fluid-compute"
  - layer: "Bundler"
    name: "Turbopack (Rust)"
    confidence: confirmed
    evidence: "Next.js official docs state Turbopack is an incremental bundler written in Rust, the default since Next.js 16"
    evidenceUrl: "https://nextjs.org/docs/app/api-reference/turbopack"
  - layer: "Underlying cloud"
    name: "AWS"
    confidence: likely
    evidence: "Verified (2026-07-21) that the internal names of the 20 compute regions in the official regions doc (eu-north-1, ap-northeast-1, etc.) match AWS region identifiers"
  - layer: "Website delivery"
    name: "Vercel"
    confidence: confirmed
    evidence: "Our own HTTP header observation (server: Vercel; 2026-07-21). The company serves its own site on its own product"
    evidenceUrl: "https://vercel.com/"
sources:
  - label: "Vercel official blog: Towards the AI Cloud — Series F ($300M at a $9.3B valuation, 2025-09-30)"
    url: "https://vercel.com/blog/series-f"
    accessedAt: "2026-07-21"
  - label: "Vercel official blog: Introducing Fluid compute (2025-02-04)"
    url: "https://vercel.com/blog/introducing-fluid-compute"
    accessedAt: "2026-07-21"
  - label: "Next.js official docs: Turbopack (Rust-based, default bundler since Next.js 16)"
    url: "https://nextjs.org/docs/app/api-reference/turbopack"
    accessedAt: "2026-07-21"
  - label: "Vercel official docs: Global network and regions (126 PoPs, 20 regions)"
    url: "https://vercel.com/docs/regions"
    accessedAt: "2026-07-21"
---

## Service overview

Vercel is a hosting platform for web applications. It sells an experience where a git push covers build, deploy, and global delivery — and as the entrance to that experience, it develops and gives away [Next.js](https://nextjs.org/), the de facto React framework, as free open source. This site itself is written in Next.js and served from Vercel — this article is an attempt to dissect the ground under our own feet.

:::fact
Per the official Series F announcement (September 30, 2025), Vercel raised $300 million co-led by Accel and GIC at a $9.3 billion valuation, alongside a roughly $300 million tender offer for employees and early investors. Next.js downloads exceeded 500 million in the past twelve months — described as more than from 2016 through 2024 combined. Weekly downloads of the AI SDK grew from 446,000 to 3.2 million in a year, and the post notes that the frontends of Grok, Claude, and Cursor run on Next.js.
:::

:::pull
The framework is free and runs anywhere. But there is only one place where it runs best. That asymmetry is the center of gravity of Vercel's business.
:::

::scorecard

## UX analysis

Vercel's UX aims to make deployment disappear as a concept. Its audience is developers, and its designs have repeatedly raised the industry's expectations.

- **A git push becomes a deploy.** Push a branch and a preview URL sprouts; merge to main and it ships to production. The product absorbs the entire concept of building CI/CD, giving individual developers the same delivery pipeline as large companies.
- **Preview URLs became the unit of collaboration.** A unique, globally served URL per change collapsed the friction of review, design checks, and sharing — an invention every rival host now imitates.
- **Zero-config has a cage of optimization inside it.** New Next.js features are designed to run most smoothly on Vercel; elsewhere they may need custom setup or arrive with gaps. The price of ease is a de facto lock-in that works quietly.
- **The dashboard doubles as an observatory.** Analytics, Speed Insights, and logs share one screen, laying a measure-and-fix path by default rather than deploy-and-forget. This site's own web analytics runs on that machinery.

## Tech stack

::techstack

:::fact
Vercel's infrastructure consists of 126 PoPs and 20 compute regions, and the internal names in the official region list match AWS region identifiers. The execution platform is Fluid compute, announced February 2025: in place of single-invocation serverless billing, one instance handles many requests concurrently — a "mini-server" model the company says cuts compute costs by up to 85%. On the build side, Rust-based Turbopack became the default bundler with Next.js 16.
:::

:::guess
Fluid compute reads as a response to AI workloads breaking the serverless billing model. A function awaiting an LLM response spends most of its life billed for doing nothing; an execution model that serves other requests during the wait looks like a precondition for calling yourself an AI cloud. Keeping AWS underneath while building only the layers that define the experience — CDN, execution model, build — is one more answer to the question our Canva and Netflix dissections kept raising: at what abstraction do you build, and what do you buy? Vercel's split is consistent: build everything the developer touches, rent everything they don't.
:::

## Business model

Vercel's revenue is hosting subscriptions plus usage-based billing, climbing from the free Hobby tier through Pro to enterprise contracts.

:::fact
The Series F post names the uses of the new capital: scaling v0 (UI generation from natural language), the AI Gateway, the AI SDK, and AI Sandbox — an official repositioning from "the company for web pages" to "the platform for AI applications," with the AI SDK's 3.2 million weekly downloads and Next.js's 500 million annual downloads presented as its footing.
:::

:::guess
Next.js, the free OSS, functions as a device that drives the acquisition cost of the paid product toward zero. A developer learning the framework naturally picks Vercel for their first deploy, and prospects flow in worldwide without a sales motion. The same structure permanently carries a tension — steward of the OSS versus seller of its hosting — and whether Next.js runs truly equally outside Vercel will remain a point the community keeps watching. The $9.3 billion valuation is aggressive against estimated revenue, and looks like a price paid in advance for the AI-cloud transition — for whether v0 and the AI SDK can become the second Next.js.
:::

A framework given away for free was downloaded five hundred million times in twelve months, and its makers' cloud is where it lands. This site is one of those five hundred million, and this article is being served from inside the structure it describes. The completed form of the OSS-as-funnel strategy, and the conflict-of-interest homework that comes with it — Vercel's dissection is a textbook of the modern developer business.
