---
service: "Webflow"
title: "It Bought the Library Its Customers Already Used — and Made It Free: How Webflow Grew from Visual CSS into an App Platform on Cloudflare"
description: "Webflow lets you build real CSS layouts without writing code. The private company, valued at $4B in 2022 and with $335M raised in total, bought GSAP — an animation library already loaded by over 100,000 Webflow sites — made it free for everyone, and put a full-stack app runtime, Webflow Cloud, on top of Cloudflare Workers. We dissect its in-house visual language WFDL, the Flow-to-TypeScript migration, and the D1, KV and R2 line items on its per-site pricing table, from the official blog, pricing page, press releases and our own response-header observations."
lead: "In October 2024, Webflow bought GSAP, the go-to JavaScript animation library, by acquiring the GreenSock business behind it. According to the announcement, more than 100,000 sites built on Webflow were already loading GSAP through custom code. Six months later, Webflow made every GSAP feature, including the formerly paid plugins, free for everyone, Webflow customer or not. We dissect what a tool that started as 'visual CSS for designers' is now buying, where it runs, and how it makes money."
category: saas
tags: [website-builder, no-code, design-tool, cloudflare, hosting]
publishedAt: "2026-09-28"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://webflow.com/"
# Affiliate link placeholder: the owner must apply to the Webflow Affiliate Program
# (https://webflow.com/solutions/affiliates, managed on PartnerStack) before enabling this block.
# The program is for content creators; commissions on one-to-one client referrals are not paid
# (those go through the Certified Partner Program instead), and one piece of content must be
# published within 30 days of acceptance.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<webflow-affiliate-partnerstack-link>"
#   program: "Webflow Affiliate Program"
vendor: "Webflow, Inc."
origin: "US"
heroTheme: "webflow"
scores: { product: 4.0, ux: 3.5, tech: 4.5, business: 4.0 }
techStack:
  - layer: "Site delivery"
    name: "Cloudflare"
    confidence: confirmed
    evidence: "The official Webflow Cloud announcement states that Webflow's native hosting infrastructure is powered by Cloudflare. Our own observation (2026-09-28) also shows server: cloudflare and cf-cache-status: HIT on a site published to webflow.io"
    evidenceUrl: "https://webflow.com/blog/webflow-cloud"
  - layer: "App runtime"
    name: "Cloudflare Workers (Webflow Cloud)"
    confidence: confirmed
    evidence: "The official Webflow Cloud product page states that the infrastructure is powered by Cloudflare Workers and scales automatically with demand. Supported frameworks are Next.js and Astro"
    evidenceUrl: "https://webflow.com/cloud"
  - layer: "App storage"
    name: "Cloudflare D1 / KV / R2"
    confidence: confirmed
    evidence: "The official pricing comparison table lists Webflow Cloud storage as 'SQLite (D1 database)', 'Key-value store (KV database)' and 'Object storage (R2 database)' — Cloudflare's product names as-is — with included capacity, operation limits and overage prices"
    evidenceUrl: "https://webflow.com/pricing"
  - layer: "Editor front end"
    name: "React / TypeScript"
    confidence: confirmed
    evidence: "The official engineering blog states that Webflow migrated its entire codebase from Flow to TypeScript and rewrote over 20,000 lines with jscodeshift codemods. A 2017 official blog post says most of the front-end team was then re-architecting the Designer to use React.js"
    evidenceUrl: "https://webflow.com/blog/codemods-and-large-scale-refactors-at-webflow"
  - layer: "Visual language"
    name: "WFDL (Webflow Design Language)"
    confidence: confirmed
    evidence: "The official engineering blog describes WFDL, a pure, visual-first in-house language that is compiled to React components to power DevLink, and whose intermediate representation is turned into JSON for site-search indexing"
    evidenceUrl: "https://webflow.com/blog/webflow-design-language"
  - layer: "Extension sandbox"
    name: "iframe + postMessage (JSON-RPC)"
    confidence: confirmed
    evidence: "The official Designer APIs write-up states that third-party Apps are loaded into an iframe inside the Designer and talk to it via window.postMessage and an internal JSON-RPC library"
    evidenceUrl: "https://webflow.com/blog/designer-apis-part-1"
  - layer: "Animation"
    name: "GSAP (GreenSock Animation Platform)"
    confidence: confirmed
    evidence: "The official pricing page lists 'Interactions with GSAP', stating that the latest Interactions editor is powered by GSAP. Webflow acquired the GreenSock business behind GSAP in October 2024"
    evidenceUrl: "https://webflow.com/pricing"
  - layer: "Origin and asset storage"
    name: "AWS (us-east-1 / Amazon S3)"
    confidence: likely
    evidence: "Our HTTP header observation (2026-09-28): a webflow.io site returns x-wf-region: us-east-1, and the asset domain cdn.prod.website-files.com returns server: cloudflare alongside x-amz-request-id and x-amz-version-id. This suggests an S3 origin behind Cloudflare, but we found no official statement"
sources:
  - label: "Webflow official: About (founding year, users, headcount, total funding, leadership)"
    url: "https://webflow.com/about"
    accessedAt: "2026-09-28"
  - label: "PR Newswire: Webflow raises $120M Series C at $4B valuation led by YC Continuity (2022-03-16)"
    url: "https://www.prnewswire.com/news-releases/webflow-raises-120m-series-c-at-4b-valuation-led-by-yc-continuity-301503860.html"
    accessedAt: "2026-09-28"
  - label: "PRWeb: Webflow names Linda Tong as its next CEO (2024-06-17)"
    url: "https://www.prweb.com/releases/webflow-names-linda-tong-as-its-next-chief-executive-officer-302173889.html"
    accessedAt: "2026-09-28"
  - label: "PR Newswire: Website Experience Platform launch and GreenSock (GSAP) acquisition (2024-10-15)"
    url: "https://www.prnewswire.com/news-releases/webflow-debuts-industry-first-website-experience-platform-wxp-superpowers-web-development-with-new-ai-products-tools-and-capabilities-302276259.html"
    accessedAt: "2026-09-28"
  - label: "Webflow official blog: Webflow acquires the GreenSock business (GSAP)"
    url: "https://webflow.com/blog/webflow-acquires-gsap"
    accessedAt: "2026-09-28"
  - label: "Webflow official update: Webflow makes GSAP 100% free (2025-04-30)"
    url: "https://webflow.com/updates/gsap-becomes-free"
    accessedAt: "2026-09-28"
  - label: "Webflow official blog: Introducing Webflow Cloud"
    url: "https://webflow.com/blog/webflow-cloud"
    accessedAt: "2026-09-28"
  - label: "Webflow official: Webflow Cloud product page"
    url: "https://webflow.com/cloud"
    accessedAt: "2026-09-28"
  - label: "Webflow official: Plans & pricing"
    url: "https://webflow.com/pricing"
    accessedAt: "2026-09-28"
  - label: "Webflow official engineering blog: Codemods and large-scale refactors at Webflow"
    url: "https://webflow.com/blog/codemods-and-large-scale-refactors-at-webflow"
    accessedAt: "2026-09-28"
  - label: "Webflow official engineering blog: Webflow Design Language"
    url: "https://webflow.com/blog/webflow-design-language"
    accessedAt: "2026-09-28"
  - label: "Webflow official engineering blog: Powering Webflow Apps — How we built Designer APIs, Part 1"
    url: "https://webflow.com/blog/designer-apis-part-1"
    accessedAt: "2026-09-28"
  - label: "Webflow official blog: What we've been working on (re-architecting the Designer in React, 2017-05-31)"
    url: "https://webflow.com/blog/what-weve-been-working-on"
    accessedAt: "2026-09-28"
  - label: "Webflow official blog: How developers are building in Webflow with code components"
    url: "https://webflow.com/blog/developers-code-components"
    accessedAt: "2026-09-28"
  - label: "Webflow official: Webflow Affiliate Program"
    url: "https://webflow.com/solutions/affiliates"
    accessedAt: "2026-09-28"
---

Open the Webflow editor and the panels speak CSS: flexbox, grid, margin, padding. You don't write code, but you don't get to escape how CSS thinks, either. While many site builders aim for "build a site without knowing the web," Webflow went the other way: "build a site without hand-writing code, if you already know the web." Now that company is buying an animation library to give it away, and running apps on Cloudflare.

## Service Overview

Webflow is a web-building platform where designers and marketers assemble sites visually and manage CMS, hosting and SEO in one place. As a private company it does not disclose revenue, but funding announcements and its own site let us trace its scale.

:::fact
According to its official site, Webflow was founded in 2013 and has 3.5 million users, more than 900 employees across 25 countries, and $335 million in total funding. Its co-founders are Vlad Magdalin, Sergie Magdalin and Bryant Chou; the CEO is Linda Tong. A March 16, 2022 press release says it closed a $120 million Series C at a $4 billion valuation, led by Y Combinator's Continuity fund. At that point it was a roughly $100 million ARR business serving 200,000 customers, visits to Webflow-hosted sites exceeded 10 billion a month, and its enterprise product had grown six-fold in a year.
:::

:::fact
A June 17, 2024 press release says Linda Tong, President and COO for the previous two years, became CEO, while co-founder Vlad Magdalin stayed on as Chair of the Board and took a new role as Chief Innovation Officer. An October 15, 2024 release rebranded Webflow as a "Website Experience Platform (WXP)," launched an AI Assistant and AI Optimize, and announced the acquisition of the GreenSock business, the company behind the GSAP animation library. The same release notes that Webflow had acquired Intellimize, which uses AI to personalize sites for each visitor, that April, and that it counts 300,000 customers and more than 1,300 Certified Partners.
:::

:::fact
The official acquisition post says more than 100,000 Webflow sites were already using GSAP through custom code. In an official update on April 30, 2025, Webflow made all of GSAP free for everyone, Webflow customer or not, including the formerly paid Club plugins, and expanded the standard license to cover commercial use. It also rewrote the popular SplitText plugin, cutting its file size by 50%.
:::

:::pull
It bought the business behind a library its customers were already loading on 100,000 sites by hand, and then gave it away to the whole web. An acquisition that runs opposite to lock-in now shapes what is inside Webflow's editor.
:::

::scorecard

## UX Analysis

Webflow's UX is optimized to make people who already know CSS faster. It is not a beginner-friendly tool, but what you learn is the web platform itself, so the learning is never wasted.

- **The panels speak CSS.** Building the box model, flexbox and grid on screen is nearly the same as writing CSS, minus the typing. People used to builders where you drop elements anywhere will likely find the first few hours heavy. In return, the HTML and CSS that come out are clean, and responsive behavior is predictable.
- **A high ceiling for animation.** According to the pricing page, the latest Interactions editor is built on GSAP and lets you compose reusable animations on a horizontal timeline. With GSAP now free, motion built in the editor and GSAP code written by hand sit on the same foundation.
- **Several exits to code when no-code runs out.** According to the official blog, you can place code components written in React on the canvas, export Webflow designs as React components with DevLink, and host Next.js or Astro apps under the same domain with Webflow Cloud. The design makes it hard to hit a no-code dead end.
- **The free tier is narrow.** Per the pricing page, the free Starter plan allows a webflow.io subdomain, two static pages, 1 GB of bandwidth and 50 form submissions. Publishing on a custom domain requires a paid Site plan per site. Billing split between Workspace plans and Site plans can also confuse newcomers.

## Tech Stack

::techstack

:::fact
According to the official engineering blog, Webflow migrated its entire codebase from the Flow type checker to TypeScript. After the new UI unveiled at Webflow Conf 2023, it had to remove the scaffolding used to switch between old and new components behind a feature flag, and used codemods written with jscodeshift to rewrite more than 20,000 lines and ship the change without any major visual regressions. Another post explains that Webflow built WFDL (Webflow Design Language), a pure, visual-first in-house language. Because WFDL is pure and has no side effects, it supports efficient incremental re-evaluation. WFDL is also compiled into React components to power DevLink, and its evaluated intermediate representation is turned into JSON for site-search indexing.
:::

:::fact
On extensibility, the official Designer APIs write-up says third-party Apps are loaded into an iframe inside the Designer; Webflow first injects its API bundle, then the App and the Designer communicate via window.postMessage and an internal JSON-RPC library. On infrastructure, the Webflow Cloud announcement says Webflow's native hosting infrastructure is powered by Cloudflare, and the product page says apps scale automatically on Cloudflare Workers. The pricing comparison table lists app storage as "SQLite (D1 database)," "Key-value store (KV database)" and "Object storage (R2 database)" — Cloudflare's product names as-is.
:::

:::guess
In our observation, a site published to webflow.io responded with server: cloudflare and x-wf-region: us-east-1, and cdn.prod.website-files.com, which serves images and CSS, returned Cloudflare responses carrying Amazon S3 headers. This suggests Cloudflare at the edge in front of origin data kept in AWS's US East region. Naming D1, KV and R2 directly on a pricing page is unusual. Rather than building an app runtime from scratch, Webflow appears to have wrapped Cloudflare's building blocks in its own dashboard and billing, shipping "apps running next to your site" with relatively little engineering. The trade-off is that Webflow Cloud likely inherits Cloudflare Workers' constraints more or less as they are.
:::

## Business Model

Webflow's revenue comes in two layers: a Site plan for each published site, and contracts for teams and enterprises.

:::fact
According to the official pricing page (as of 2026-09-28, USD, billed yearly and shown per month), Site plans are the free Starter, Basic at $15/month for simple sites without a CMS, and Premium from $25/month (rising with the bandwidth you choose) with the CMS and larger bandwidth. For organizations there is Team at $2,500/month with an annual contract required, and custom-quoted Enterprise. Webflow Cloud apps on Basic include 1 million requests and 15 CPU minutes per month, with overages billed at $2 per million requests and $2 per 5 CPU hours.
:::

:::guess
The pricing table sets the $15–25 individual plans alongside Team, marked "New," at $2,500 a month on an annual contract, plus custom Enterprise. Put that together with the six-fold enterprise growth reported in 2022 and the 2024 rebrand as a "Website Experience Platform" with marketers listed first, with visitor personalization (Intellimize) and AI Optimize bolted on, and Webflow's center of gravity appears to be shifting from "a build tool for freelancers" to "infrastructure that corporate marketing teams pay for on annual contracts." Making GSAP free reads as an investment that widens the creator-community funnel feeding those enterprise deals.
:::

:::fact
According to its official site, Webflow runs an affiliate program for content creators, influencers and bloggers (the Webflow Affiliate Program) on PartnerStack. Affiliates earn 50% of a new customer's first subscription for up to 12 months, with a 90-day cookie window and first-touch attribution. Higher Pro and Premium tiers add another 10% or 15% for up to 12 more months if the customer renews after the first year. Referrals by freelancers or agencies building sites for their own clients are not eligible; those are directed to the Certified Partner Program instead.
:::

No code, but no escape from how CSS thinks. A library that could have been a lock-in tool is given away, and the app runtime is handed to Cloudflare. Webflow has made staying close to web standards its differentiator. Now that tool is stretching into infrastructure that corporate marketing teams buy on annual contracts.
