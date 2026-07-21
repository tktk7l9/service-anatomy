---
service: "メルカリ"
title: "How a ¥1.1 Trillion Secondhand Economy Came to Issue Credit Cards — Mercari's Loop of Circulation and Credit"
description: "Mercari, Japan's largest flea-market app. A dissection of the business turn that converted ¥1,120.9 billion of secondhand GMV into credit data and five million Mercard credit cards, and the eight-year engineering history of replacing a PHP monolith with Go microservices — from earnings filings and the official engineering blog."
lead: "On August 4, 2022, the PHP monolith known internally as web-2 was shut down — four years after the replacement began in 2018. Meanwhile, secondhand transaction data was converting into credit data, and the flea-market app became a financial operator issuing five million credit cards. This is a dissection of a structure where the circular economy and finance intertwine."
category: consumer-app
tags: [marketplace, c2c, fintech, go, kubernetes]
publishedAt: "2026-07-21"
updatedAt: "2026-07-21"
lastVerified: "2026-07-21"
serviceUrl: "https://jp.mercari.com/"
vendor: "株式会社メルカリ"
origin: "JP"
heroTheme: "mercari"
scores: { product: 4.5, ux: 4.0, tech: 4.0, business: 4.0 }
techStack:
  - layer: "Backend"
    name: "Go + Kubernetes"
    confidence: confirmed
    evidence: "Official engineering blog states the monolithic PHP API servers were replaced with Go microservices running on Kubernetes infrastructure"
    evidenceUrl: "https://engineering.mercari.com/en/blog/entry/20220830-15d4e8480e/"
  - layer: "Cloud platform"
    name: "Google Cloud (Cloud Spanner / GCS)"
    confidence: confirmed
    evidence: "Official engineering blog states Cloud Spanner backs the session service and Cloud Storage handles delivery"
    evidenceUrl: "https://engineering.mercari.com/en/blog/entry/20220830-15d4e8480e/"
  - layer: "Legacy monolith"
    name: "PHP"
    confidence: confirmed
    evidence: "Official engineering blog states the PHP web server (web-2) was shut down on August 4, 2022 — four years after the redesign began in May 2018"
    evidenceUrl: "https://engineering.mercari.com/en/blog/entry/20220830-15d4e8480e/"
  - layer: "Website delivery"
    name: "Cloudflare + Google Cloud"
    confidence: confirmed
    evidence: "Our own HTTP header observation (cf-ray: …-NRT and server: cloudflare alongside via: 1.1 google; 2026-07-21). A Google Cloud load balancer behind Cloudflare"
    evidenceUrl: "https://jp.mercari.com/"
sources:
  - label: "Mercari fiscal year ending June 2025: earnings report (IFRS, consolidated, 2025-08-05)"
    url: "https://pdf.irpocket.com/C4385/bffO/gPP8/rMjw.pdf"
    accessedAt: "2026-07-21"
  - label: "Mercari official engineering blog: The Four-Year history to migrate Mercari Web to Microservices (2022-08-30)"
    url: "https://engineering.mercari.com/en/blog/entry/20220830-15d4e8480e/"
    accessedAt: "2026-07-21"
  - label: "Mercari official engineering blog: Microservice Migration at Mercari — The Ideal and the Real (2021-11-11)"
    url: "https://engineering.mercari.com/en/blog/entry/20211111-reality-of-microservices-migration/"
    accessedAt: "2026-07-21"
---

## Service overview

Mercari, launched in 2013, is Japan's largest consumer-to-consumer marketplace for secondhand goods. Snap a photo and list in under a minute; ship without revealing your name or address. That combination made "your unused stuff becomes money" a mass-market experience. The group now spans Merpay (payments), Mercard (credit cards), and a US business.

:::fact
Per the earnings report for the fiscal year ending June 2025, full-year revenue was ¥192.6 billion (up 3% year over year) with core operating profit of ¥27.5 billion (up 46%). The Japanese marketplace's GMV reached ¥1,120.9 billion, with monthly active users exceeding 23 million. Mercard, launched in November 2022, surpassed five million cards issued, adding a gold tier in March 2025. The US business achieved its first full-year profitability.
:::

:::pull
A marketplace's real asset is not inventory — it is the behavioral record of who sold what, paid how much, and shipped on time. Mercard is the machine that converts that record into credit.
:::

::scorecard

## UX analysis

Mercari's UX is distinctive in how relentlessly it shaves friction on the seller's side. The flywheel — more sellers, more goods, more buyers — starts at the listing experience.

- **Listing takes under a minute.** Take a photo and get category and price suggestions; barcode listing and drafts round it out. This initial velocity is what turned the "too much hassle, just throw it away" demographic into sellers.
- **Anonymous shipping erased the psychological barrier.** Sending without revealing an address or real name absorbed the biggest anxiety of peer-to-peer trade at the system level — an invention that became the standard for successors.
- **Visible market prices do the pricing for you.** Because sold-price history for similar items is visible, an amateur can set a sellable price in a few taps. Market data substitutes for pricing expertise.
- **Haggling and homegrown etiquette are a cultural cost.** Comment-thread price negotiation and "reserved listings" — emergent customs — give the experience warmth, but function as unwritten rules newcomers must learn.

## Tech stack

::techstack

:::fact
Per the official engineering blog, Mercari began its web re-architecture in May 2018, replacing the monolithic PHP API servers with Go microservices on Kubernetes. Cloud Spanner backs the session service; Cloud Storage handles delivery. After staged migration, the old PHP server, web-2, was shut down on August 4, 2022 — four years after the start. A separate 2021 post frankly admits the hardest remaining part is core business logic where "we haven't yet performed sufficient domain analysis," and the effort was renamed from migration to foundation development ("Robust Foundation for Speed").
:::

:::guess
Publishing the four-year timeline and its difficulties without varnish reads as recruiting PR, but also as sharing the real lesson: a microservices migration is not a one-time event but a permanent infrastructure investment. The Google Cloud-centered stack — GKE, Spanner — stands out in a Japanese large-company landscape where AWS is the majority choice, and looks like a deliberate bet on making Kubernetes and Spanner operational expertise the core of its technical brand. Our own observation of Cloudflare in front of Google Cloud is a modern two-layer example: security and CDN split from the compute platform.
:::

## Business model

Mercari's core revenue is marketplace commission, with fintech revenue — Merpay payments, Mercard credit — stacking on top.

:::fact
For the fiscal year ending June 2025, revenue of ¥192.6 billion produced core operating profit of ¥27.5 billion, up 46% from the prior year. On the base of ¥1,120.9 billion in GMV, Mercard exceeded five million cards issued, and from June 2025 installment payments opened to purchases outside Mercari.
:::

:::guess
With GMV growth at a mature 3%, the 46% profit growth appears driven by commission-business efficiency and a growing fintech contribution. Marketplace transaction history is credit data that can discover "individuals who keep promises" invisible to traditional credit bureaus — and that is Mercari's structural advantage as a card issuer. Sell, spend the balance, buy with the card, resell what you bought: money and goods both circulate inside the economy, a consumption loop that doesn't leak outside. The next ceiling is likely not GMV but how deeply finance can penetrate this loop.
:::

Four years to retire a PHP monolith; ten years to turn a flea market into finance. What Mercari's dissection reveals is not a flashy pivot but management that keeps finding new uses for the same asset. A business that began with piles of secondhand goods struck an intangible vein — behavioral history — and ended up issuing credit cards. The giant of secondary circulation turned out to be a primary producer of data.
