---
service: "メルカリ"
title: "How a ¥1.1 Trillion Secondhand Economy Came to Issue Credit Cards — Mercari's Loop of Circulation and Credit"
description: "Mercari, Japan's largest flea-market app. A dissection of the business turn that converted ¥1,120.9 billion of secondhand GMV into credit data and five million Mercard credit cards, and the four-year engineering history of replacing a PHP monolith with Go microservices — from earnings filings and the official engineering blog."
lead: "On August 4, 2022, the PHP monolith known internally as web-2 was shut down — four years after the replacement began in 2018. Meanwhile, secondhand transaction data was converting into credit data, and the flea-market app became a financial operator issuing five million credit cards. This is a dissection of a structure where the circular economy and finance intertwine."
category: consumer-app
tags: [marketplace, c2c, fintech, go, kubernetes]
publishedAt: "2026-07-21"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
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
  - layer: "Container platform"
    name: "Google Kubernetes Engine (GKE)"
    confidence: confirmed
    evidence: "Official engineering blog (2023-10-30) states that all of Mercari's microservices run on Kubernetes clusters on Google Kubernetes Engine (GKE)"
    evidenceUrl: "https://engineering.mercari.com/en/blog/entry/20231027-reducing-inter-zone-egress-costs-with-zone-aware-routing-in-mercaris-kubernetes-clusters/"
  - layer: "Cloud platform"
    name: "Google Cloud / Google Cloud Spanner / Google Cloud Storage"
    confidence: confirmed
    evidence: "Official engineering blog states Cloud Spanner was chosen as the database for session information and static HTML was designed to be returned from Google Cloud Storage (GCS)"
    evidenceUrl: "https://engineering.mercari.com/en/blog/entry/20220830-15d4e8480e/"
  - layer: "Legacy monolith"
    name: "PHP"
    confidence: confirmed
    evidence: "Official engineering blog states the PHP web server (web-2) was shut down on August 4, 2022 — four years after the redesign began in May 2018"
    evidenceUrl: "https://engineering.mercari.com/en/blog/entry/20220830-15d4e8480e/"
  - layer: "Website delivery"
    name: "Cloudflare + Google Cloud"
    confidence: confirmed
    evidence: "Our own HTTP header observation (cf-ray: …-NRT and server: cloudflare alongside via: 1.1 google; observed 2026-07-21 and unchanged on re-observation 2026-09-28). A Google Cloud load balancer behind Cloudflare"
    evidenceUrl: "https://jp.mercari.com/"
sources:
  - label: "Mercari fiscal year ending June 2025: earnings report (IFRS, consolidated, 2025-08-05)"
    url: "https://pdf.irpocket.com/C4385/bffO/gPP8/rMjw.pdf"
    accessedAt: "2026-09-28"
  - label: "Mercari fiscal year ending June 2026: earnings report (IFRS, consolidated, 2026-08-05; copy of the TDnet filing)"
    url: "https://finance-frontend-pc-dist.west.edge.storage-yahoo.jp/disclosure/20260805/20260804508114.pdf"
    accessedAt: "2026-09-28"
  - label: "Mercari IR: FY2025.6 Mercari CEO and Shareholder Dialogue (23 million MAU, more than five million Mercards)"
    url: "https://pdf.irpocket.com/C4385/K2Hn/r4i9/eYQn.pdf"
    accessedAt: "2026-09-28"
  - label: "Merpay official news: Launch of Mercard Gold (2025-03-17)"
    url: "https://jp.merpay.com/news/2025/03/20250317mercardgold/"
    accessedAt: "2026-09-28"
  - label: "Merpay official news: Mercard installment payments extended to stores and online shops (2025-06-30)"
    url: "https://jp.merpay.com/news/2025/06/20250630installmentpayment/"
    accessedAt: "2026-09-28"
  - label: "Mercari official engineering blog: The Four-Year history to migrate Mercari Web to Microservices (2022-08-30)"
    url: "https://engineering.mercari.com/en/blog/entry/20220830-15d4e8480e/"
    accessedAt: "2026-09-28"
  - label: "Mercari official engineering blog: Microservice Migration at Mercari — The Ideal and the Real (2021-11-11)"
    url: "https://engineering.mercari.com/en/blog/entry/20211111-reality-of-microservices-migration/"
    accessedAt: "2026-09-28"
  - label: "Mercari official engineering blog: Reducing Inter-Zone Egress Costs with Zone-Aware Routing in Mercari's Kubernetes Clusters (2023-10-30, GKE)"
    url: "https://engineering.mercari.com/en/blog/entry/20231027-reducing-inter-zone-egress-costs-with-zone-aware-routing-in-mercaris-kubernetes-clusters/"
    accessedAt: "2026-09-28"
---

## Service overview

Mercari, launched in 2013, is Japan's largest consumer-to-consumer marketplace for secondhand goods. Snap a photo and list in under a minute; ship without revealing your name or address. That combination made "your unused stuff becomes money" a mass-market experience. The group now spans Merpay (payments), Mercard (credit cards), and a US business.

:::fact
Per the earnings report for the fiscal year ending June 2025, full-year revenue was ¥192.6 billion (up 2.8% year over year) with core operating profit of ¥27.5 billion (up 46%). GMV of the Marketplace business, centered on the Japanese flea-market app, rose 4% to ¥1,120.9 billion. According to that year's IR material (the CEO and shareholder dialogue), monthly active users stood at about 23 million and Mercard, launched in November 2022, had surpassed five million cards issued. A gold tier was added in March 2025, and the US business turned profitable for the full year (segment profit of about ¥0.7 billion). In the following fiscal year ending June 2026, the earnings report shows revenue of ¥229.3 billion (up 19.0%) and core operating profit of ¥44.2 billion (up 60.2%), both record highs, with Marketplace GMV back to double-digit growth at ¥1,285.6 billion (up 14.7%).
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
Per the official engineering blog, Mercari began its web re-architecture in May 2018, replacing the monolithic PHP API servers with Go microservices on Kubernetes. Cloud Spanner was chosen as the database for session information, and static HTML was designed to be returned from Cloud Storage (GCS); only login and registration, which must receive callbacks from external account authentication, were split out to a Go server, web-auth. After staged migration, the old PHP server, web-2, was shut down on August 4, 2022 — four years after the start. A separate 2021 post frankly admits the hardest remaining part is core business logic where "we haven't yet performed sufficient domain analysis," and the effort was renamed from migration to foundation development ("Robust Foundation for Speed"). A 2023 post on the same blog states that all of Mercari's microservices run on Google Kubernetes Engine (GKE).
:::

:::guess
Publishing the four-year timeline and its difficulties without varnish reads as recruiting PR, but also as sharing the real lesson: a microservices migration is not a one-time event but a permanent infrastructure investment. The Google Cloud-centered stack — GKE, Spanner — stands out in a Japanese large-company landscape where AWS is the majority choice, and looks like a deliberate bet on making Kubernetes and Spanner operational expertise the core of its technical brand. Our own observation of Cloudflare in front of Google Cloud is a modern two-layer example: security and CDN split from the compute platform.
:::

Correction (September 28, 2026). The first version's description said the PHP monolith was replaced over "eight years," which was wrong. According to the official engineering blog, the re-architecture began in May 2018 and the old PHP server was shut down on August 4, 2022 — four years.

## Business model

Mercari's core revenue is marketplace commission, with fintech revenue — Merpay payments, Mercard credit — stacking on top.

:::fact
For the fiscal year ending June 2025, revenue of ¥192.6 billion produced core operating profit of ¥27.5 billion, up 46% from the prior year. On the base of ¥1,120.9 billion in GMV, Mercard exceeded five million cards issued, and from June 30, 2025 installment payments opened to purchases outside Mercari. For the fiscal year ending June 2026, revenue was ¥229.3 billion and core operating profit ¥44.2 billion; the Fintech receivables balance grew 44.4% to ¥358.1 billion, and US segment profit rose to about ¥1.7 billion.
:::

:::guess
In the fiscal year ending June 2025, with GMV up 4% and revenue up 2.8%, the 46% profit growth appears driven by commission-business efficiency and a growing fintech contribution. GMV returning to 14.7% growth in the fiscal year ending June 2026 suggests the core business, which looked mature, still had room to grow. Marketplace transaction history is credit data that can discover "individuals who keep promises" invisible to traditional credit bureaus — and that is Mercari's structural advantage as a card issuer. Sell, spend the balance, buy with the card, resell what you bought: money and goods both circulate inside the economy, a consumption loop that doesn't leak outside. The next ceiling is likely not GMV growth alone but how deeply finance can penetrate this loop.
:::

Correction (September 28, 2026). The first version assumed "GMV growth at 3%" as the premise of our analysis, which was wrong. According to the earnings report for the fiscal year ending June 2025, Marketplace GMV grew 4% year over year; the 3% (2.8%) figure was the growth rate of consolidated revenue.

Four years to retire a PHP monolith; ten years to turn a flea market into finance. What Mercari's dissection reveals is not a flashy pivot but management that keeps finding new uses for the same asset. A business that began with piles of secondhand goods struck an intangible vein — behavioral history — and ended up issuing credit cards. The giant of secondary circulation turned out to be a primary producer of data.
