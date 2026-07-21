---
service: "Stripe"
title: "The API Is the UX — How Stripe Moves 1.6% of Global GDP on 15 Million Lines of Ruby"
description: "Stripe, the online payments infrastructure. We dissect the API design and documentation culture behind the 'seven lines of code' legend, Sorbet — the type checker Stripe built to tame 15 million lines of Ruby — and DocDB, the in-house database serving five million queries per second, using official engineering blogs and annual letters."
lead: "Few people have ever 'seen' Stripe's product. Developers call an API, and behind it flowed $1.9 trillion in 2025 — roughly 1.6% of global GDP. This is a dissection of a company that defined the API reference, not the screen, as its user experience — and how it carries payments on 15 million lines of Ruby and a home-built database."
category: saas
tags: [payments, fintech, api, ruby, developer-experience]
publishedAt: "2026-07-21"
updatedAt: "2026-07-21"
lastVerified: "2026-07-21"
serviceUrl: "https://stripe.com/"
vendor: "Stripe, Inc."
origin: "US"
heroTheme: "stripe"
scores: { product: 4.5, ux: 4.5, tech: 5.0, business: 5.0 }
techStack:
  - layer: "Primary language & typing"
    name: "Ruby + Sorbet"
    confidence: confirmed
    evidence: "Official engineering blog states a Ruby codebase of 150,000 files and over 15 million lines, checked by Sorbet — a type checker Stripe built in C++ (development began November 2017, open-sourced June 2019, over 95% of files typed: true)"
    evidenceUrl: "https://stripe.dev/blog/sorbet-stripes-type-checker-for-ruby"
  - layer: "Database platform"
    name: "DocDB (MongoDB Communityベースの自社DBaaS)"
    confidence: confirmed
    evidence: "Official engineering blog states DocDB, an in-house database-as-a-service built on MongoDB Community, serves five million queries per second across 2,000+ shards at 99.999% uptime with zero-downtime data migrations"
    evidenceUrl: "https://stripe.dev/blog/how-stripes-document-databases-supported-99.999-uptime-with-zero-downtime-data-migrations"
  - layer: "Fraud-detection ML"
    name: "Stripe Radar (DNN)"
    confidence: confirmed
    evidence: "Official engineering blog details the mid-2022 migration from a Wide & Deep ensemble (XGBoost + DNN) to a DNN-only architecture, and why"
    evidenceUrl: "https://stripe.dev/blog/how-we-built-it-stripe-radar"
  - layer: "Storage"
    name: "Amazon S3"
    confidence: likely
    evidence: "Our own HTTP header observation: stripe.com's CSP includes stripe-images.s3.us-west-1.amazonaws.com (2026-07-21). An image-delivery observation, separate from the core application"
  - layer: "Website delivery"
    name: "nginx / Contentful"
    confidence: likely
    evidence: "Our own HTTP header observation (server: nginx, x-stripe-proxy-response, CSP includes assets.ctfassets.net = Contentful; 2026-07-21). Observed on the marketing site"
sources:
  - label: "Stripe official newsroom: 2025 annual letter (TPV $1.9T, ~1.6% of global GDP, $159B tender offer, 2026-02)"
    url: "https://stripe.com/newsroom/news/stripe-2025-update"
    accessedAt: "2026-07-21"
  - label: "Stripe official blog: Sorbet — open-sourcing Stripe's type checker (15M lines, 150K files)"
    url: "https://stripe.dev/blog/sorbet-stripes-type-checker-for-ruby"
    accessedAt: "2026-07-21"
  - label: "Stripe official blog: DocDB — the in-house document database behind 99.999% uptime and zero-downtime migrations"
    url: "https://stripe.dev/blog/how-stripes-document-databases-supported-99.999-uptime-with-zero-downtime-data-migrations"
    accessedAt: "2026-07-21"
  - label: "Stripe official blog: How we built it — Stripe Radar (migrating to a DNN-only model)"
    url: "https://stripe.dev/blog/how-we-built-it-stripe-radar"
    accessedAt: "2026-07-21"
---

## Service overview

Stripe provides the infrastructure for online payments. Founded in the US in 2010 by Irish brothers Patrick and John Collison, its stated mission is to "increase the GDP of the internet." End users almost never see Stripe's screens — the product runs as an API behind the payment buttons of e-commerce sites and SaaS products.

:::fact
According to the official 2025 annual letter, total payment volume (TPV) on Stripe reached $1.9 trillion in 2025, up 34% year over year — roughly 1.6% of global GDP. 90% of Dow Jones constituents and 80% of Nasdaq-100 companies use Stripe, as do the major AI companies across the board. In February 2026, Stripe announced a tender offer at a $159 billion valuation to provide liquidity to current and former employees, while noting it maintains high profitability alongside its growth.
:::

:::pull
Stripe's product is not a screen but an API. A developer reads the documentation and writes a few lines of code — that smoothness itself is the competitive edge that gathered 1.6% of global GDP.
:::

::scorecard

## UX analysis

To discuss Stripe's UX is to discuss developer experience. A company with almost no end-user screens defined its user as the developer — and in doing so, reset the bar for the entire industry.

- **The API reference is the face of the product.** The three-pane documentation — reference on the left, copyable code samples on the right — became the de facto template that developer-facing services now imitate wholesale. Reading the docs doubles as the sales pitch.
- **Even the error messages are designed.** API error responses read as sentences that tell you the cause and the next step, and together with test card numbers and a rich test mode, the learn-by-trying path is paved from the start.
- **An obsession with backward compatibility.** Pinning API versions to dates and guaranteeing that old integrations keep working is exactly how you build trust in a domain where downtime means lost revenue.
- **The blessing and curse of "seven lines of code."** The early promise that payments take seven lines worked as a symbol, but real integrations keep expanding into tax, invoicing, and fraud. Holding both — an easy entrance and deep extensibility — is the real substance of Stripe's UX.

## Tech stack

::techstack

:::fact
Stripe's core remains an enormous Ruby codebase — over 15 million lines across 150,000 files, per the official engineering blog. To carry that scale, Stripe built its own type checker, Sorbet, in C++ (development began November 2017), open-sourcing it in June 2019; over 95% of files are type-checked. For data, Stripe built DocDB, an in-house database-as-a-service on top of MongoDB Community, serving five million queries per second across more than 2,000 shards at 99.999% uptime, with zero-downtime migrations between shards. Radar, the fraud system, moved from an XGBoost + DNN ensemble to a DNN-only model in mid-2022.
:::

:::guess
The decision to keep Ruby and build a type checker rather than rewrite looks like a sober reading of opportunity cost. In a domain where compatibility is life, adding tools to a language is cheaper than migrating away from it — Sorbet is the product of that engineering judgment, and it rhymes with Shopify's investment in Ruby's own JIT. Building DocDB on MongoDB Community rather than a managed database likely reflects that at five million queries per second, the constraints of off-the-shelf services — shard management, migration freedom — become the bottleneck first. Fifteen million lines of Ruby plus a home-built database reads as a conservative technology strategy optimized for never stopping, rather than for spectacle.
:::

## Business model

Stripe's revenue centers on payment fees and expands into software: billing, tax, revenue recognition.

:::fact
Per the official annual letter, the Revenue and Finance Automation product suite was on track to reach $1 billion in annual recurring revenue by the end of 2025, and 57% of new 2025 customers were based outside the US. The February 2026 tender offer valued the company at $159 billion, led by Thrive Capital, Coatue, and a16z, with Stripe also conducting self-funded buybacks.
:::

:::guess
Staying private while returning liquidity to employees through recurring tender offers appears to be a way to keep making long-term bets — AI, global expansion — without quarterly-earnings pressure. Because per-transaction pricing automatically tracks customers' growth, Stripe's structure makes its users' growth its own; the most efficient growth strategy is therefore investing in documentation and API quality rather than sales. The company's outsized investment in developer experience is a culture, but it also looks like the rational consequence of this revenue structure.
:::

An infrastructure that moves 1.6% of global GDP while staying invisible to end users is the victory of a definition: the API and its documentation are the UX. Prop up 15 million lines of Ruby with types, build your own database if that's what it takes to never stop — what Stripe's dissection reveals is the essence of infrastructure business: perfecting the unglamorous is the ultimate differentiation.
