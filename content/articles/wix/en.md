---
service: "Wix"
title: "The No-Code Veteran Bought Vibe Coding — Why Wix Paid $80M for Six-Month-Old Base44"
description: "Wix, the no-code website builder with 300M+ registered users and roughly $2B in annual revenue, bought Base44 — a six-month-old AI app builder — and launched the AI site builder Wix Harmony. We dissect its 4,000+ microservices, multi-cloud delivery, and the agency and reseller revenue behind it, from SEC filings and the official engineering blog."
lead: "In June 2025, Wix — long a byword for no-code — bought Base44, a six-month-old startup owned by its solo founder, for about $80 million. Nine months later, its earnings release says, Base44 had reached $100 million in ARR. We dissect how a company that spent almost two decades winning with drag-and-drop is rebuilding itself for an era where you build by talking."
category: saas
tags: [website-builder, no-code, e-commerce, ai, kafka]
publishedAt: "2026-09-28"
updatedAt: "2026-10-07"
lastVerified: "2026-10-07"
serviceUrl: "https://www.wix.com/"
# Affiliate link placeholder: the owner must register with the Wix Affiliate Program
# (via Impact, https://www.wix.com/about/affiliates) before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<wix-affiliate-tracking-link>"
#   program: "Wix Affiliate Program"
vendor: "Wix.com Ltd."
origin: "IL"
heroTheme: "wix"
scores: { product: 4.0, ux: 4.0, tech: 4.0, business: 4.5 }
techStack:
  - layer: "Site delivery"
    name: "Google Cloud / AWS / Fastly"
    confidence: confirmed
    evidence: "The official site reliability page states that, together with its own data centers, Wix hosts and renders sites on AWS, Google Cloud and Fastly, and automatically reroutes traffic if one provider goes down"
    evidenceUrl: "https://www.wix.com/site-reliability"
  - layer: "Backend languages"
    name: "Scala / TypeScript / Python"
    confidence: confirmed
    evidence: "Official engineering blog (2025-02): over 4,000 microservices and serverless functions communicate via gRPC and Kafka, with backend services written in Scala, TypeScript or Python"
    evidenceUrl: "https://www.wix.engineering/post/from-bottleneck-to-breakthrough-how-wix-cut-kafka-costs-by-30-with-a-push-based-consumer-proxy"
  - layer: "Event backbone"
    name: "Apache Kafka (Confluent Cloud)"
    confidence: confirmed
    evidence: "Official engineering blog (2025-02): Wix moved its entire Kafka infrastructure to Confluent's cloud in 2020 and uses it through its in-house client library Greyhound; a push-based consumer proxy cut Kafka costs by 30%"
    evidenceUrl: "https://www.wix.engineering/post/from-bottleneck-to-breakthrough-how-wix-cut-kafka-costs-by-30-with-a-push-based-consumer-proxy"
  - layer: "Database"
    name: "MySQL (AWS Graviton)"
    confidence: confirmed
    evidence: "Official engineering blog (2026-03): about 1,000 MySQL servers in 160 clusters moved from Intel-based EC2 to Graviton in 30 days with zero downtime, cutting MySQL compute costs by about 15%"
    evidenceUrl: "https://www.wix.engineering/post/1-000-servers-160-clusters-30-days-zero-downtime-migrating-wix-s-mysql-fleet-to-graviton"
  - layer: "Media processing"
    name: "Go / C (AVIF encoding)"
    confidence: confirmed
    evidence: "Official engineering blog (2026-09): the image manipulation service is written in Go, AVIF encoding uses the C libraries libaom/libavif, and the platform serves over 6 billion media requests a day"
    evidenceUrl: "https://www.wix.engineering/post/architecting-for-6-billion-daily-requests-inside-wix-s-media-platform"
  - layer: "Developer backend"
    name: "Node.js (Velo serverless backend)"
    confidence: confirmed
    evidence: "Official developer docs: sites built on Wix get a zero-setup, serverless backend running on a Node.js server-side runtime"
    evidenceUrl: "https://dev.wix.com/docs/develop-websites/articles/coding-with-velo/backend-code/about-the-site-backend"
  - layer: "Edge cache"
    name: "Varnish"
    confidence: likely
    evidence: "Our HTTP header observation (wix.com, 2026-09-28): server-timing shows varnish;desc=hit_hit and dc;desc=fastly_g, and the server header reads Pepyaka. No official documentation of Varnish use found"
sources:
  - label: "SEC Form 6-K (Wix.com Ltd. — Q4 and full-year 2025 results, 2026-03-04)"
    url: "https://www.sec.gov/Archives/edgar/data/1576789/000162828026014406/fourthquarterandfullyear20.htm"
    accessedAt: "2026-09-28"
  - label: "Wix: Wix Reports Second Quarter 2026 Results (2026-08-04)"
    url: "https://4f4a3186-9467-4c09-aa74-51fe1affec20.usrfiles.com/ugd/4f4a31_8c5aa627b16e4a029c0878698fee9ef6.pdf"
    accessedAt: "2026-10-07"
  - label: "Wix: Q2'26 Shareholder Update (2026-08-04)"
    url: "https://4f4a3186-9467-4c09-aa74-51fe1affec20.usrfiles.com/ugd/4f4a31_25423fea2d224a4e8411d94a174adde2.pdf"
    accessedAt: "2026-10-07"
  - label: "Wix: Company Overview, Second Quarter 2026 (earnings slides)"
    url: "https://4f4a3186-9467-4c09-aa74-51fe1affec20.usrfiles.com/ugd/4f4a31_baae91878ea74a109661f4f9202295b6.pdf"
    accessedAt: "2026-10-07"
  - label: "TechCrunch: 6-month-old, solo-owned vibe coder Base44 sells to Wix for $80M (2025-06-18)"
    url: "https://techcrunch.com/2025/06/18/6-month-old-solo-owned-vibe-coder-base44-sells-to-wix-for-80m-cash/"
    accessedAt: "2026-09-28"
  - label: "Wix press room: acquisition of Base44 (2025-06-18)"
    url: "https://www.wix.com/press-room/home/post/wix-further-expands-into-vibe-coding-with-acquisition-of-base44-a-hyper-growth-startup-that-simplif"
    accessedAt: "2026-10-07"
  - label: "Wix press room: launch of Wix Harmony (2026-01-21)"
    url: "https://www.wix.com/press-room/home/post/wix-launches-wix-harmony-the-ai-website-builder-that-merges-human-and-artificial-intelligence-rein"
    accessedAt: "2026-10-07"
  - label: "Wix: Site Reliability (multi-cloud and CDN)"
    url: "https://www.wix.com/site-reliability"
    accessedAt: "2026-10-07"
  - label: "Wix Engineering blog: cutting Kafka costs by 30% with a push-based consumer proxy (2025-02)"
    url: "https://www.wix.engineering/post/from-bottleneck-to-breakthrough-how-wix-cut-kafka-costs-by-30-with-a-push-based-consumer-proxy"
    accessedAt: "2026-09-28"
  - label: "Wix Engineering blog: migrating 1,000 MySQL servers to Graviton (2026-03)"
    url: "https://www.wix.engineering/post/1-000-servers-160-clusters-30-days-zero-downtime-migrating-wix-s-mysql-fleet-to-graviton"
    accessedAt: "2026-09-28"
  - label: "Wix Engineering blog: a media platform for 6 billion daily requests (2026-09)"
    url: "https://www.wix.engineering/post/architecting-for-6-billion-daily-requests-inside-wix-s-media-platform"
    accessedAt: "2026-09-28"
  - label: "Wix Engineering blog: AirBot, the AI on-call agent (2026-01)"
    url: "https://www.wix.engineering/post/when-ai-becomes-your-on-call-teammate-inside-wix-s-airbot-that-saves-675-engineering-hours-a-month"
    accessedAt: "2026-09-28"
  - label: "Wix developer docs: About the Site Backend (Velo)"
    url: "https://dev.wix.com/docs/develop-websites/articles/coding-with-velo/backend-code/about-the-site-backend"
    accessedAt: "2026-09-28"
  - label: "Wix: About Wix (founding year and headquarters)"
    url: "https://www.wix.com/about/us"
    accessedAt: "2026-10-07"
  - label: "Wix: Wix Affiliate Program"
    url: "https://www.wix.com/about/affiliates"
    accessedAt: "2026-09-28"
---

Building a website by drag-and-drop — Wix spent almost twenty years polishing that experience. Then, in 2025, it started showing a different face. It bought Base44, a six-month-old AI app builder, and rebuilt its flagship site builder into Wix Harmony, which you direct by talking to it. The no-code veteran is betting on whatever comes after no-code.

## Service overview

Wix is a website builder that lets people create websites and online stores without writing code. It stacks business features — bookings, payments, e-commerce, blogs — on a single dashboard, and serves everyone from sole proprietors to web agencies.

:::fact
According to its official site, Wix was founded in 2006 and is headquartered in Tel Aviv. According to its SEC filing (full-year 2025 results, 2026-03-04), 2025 revenue was $1.99 billion (up 13% year over year) and bookings were $2.07 billion (up 13%). At the end of 2025 it had over 304 million registered users, 6.11 million premium subscriptions (including Base44), and 5,340 employees.
:::

:::fact
According to the official press room, Wix acquired the AI app builder Base44 on June 18, 2025 for initial consideration of approximately $80 million, plus performance-based earn-out payments through 2029; Base44 continues to operate as a distinct product and business. TechCrunch reported Base44 as a six-month-old company solely owned by its founder, Maor Shlomo. On January 21, 2026, Wix announced Wix Harmony, an AI site builder that combines Aria, an AI agent directed in natural language, with Wix's existing visual editor. The full-year 2025 earnings release states that Base44 reached $100 million in ARR nine months after the acquisition.
:::

:::pull
An $80 million purchase had become $100 million a year in recurring revenue nine months later. The numbers read less like a veteran buying a newcomer, and more like a veteran buying its own next form.
:::

::scorecard

## UX analysis

Wix's UX is optimized so that someone who knows nothing can publish the same day. On top of that, it offers two exits: AI, and developer features.

- **Visual editing and AI generation on the same screen.** Wix describes Harmony as combining the speed of building by talking to an AI with the feel of an editor you can adjust pixel by pixel. When the AI's output isn't quite right, being able to fix it by hand — rather than rewriting the prompt — matters a great deal to non-engineers.
- **It absorbs the chores of running in production.** According to Wix, sites run on AWS, Google Cloud and Fastly, with automatic rerouting if one provider goes down, delivered through 200+ CDN nodes with a stated 99.99% uptime. Not having to think about servers or SSL is itself the experience Wix sells.
- **A developer exit that isn't a dead end.** People who want to write code get Velo (JavaScript) and a serverless Node.js backend, with a database and HTTP endpoints. You can start with no code and add code when you outgrow it.
- **Breadth cuts both ways.** Because it can do bookings, e-commerce, memberships and blogs, some people will find the first setup screens overwhelming. Harmony, which hands the initial setup to AI, reads as an answer to how heavy that first step is.

## Tech stack

::techstack

:::fact
According to the official engineering blog (2025-02), Wix's backend consists of over 4,000 small microservices and serverless functions, communicating synchronously via gRPC and asynchronously via Kafka. Services are written in Scala, TypeScript and Python, and all of them use Kafka through the in-house library Greyhound. Wix moved its Kafka infrastructure to Confluent's cloud in 2020, and later built a push-based consumer proxy that reduced redundant reads and cut Kafka costs by 30%.
:::

:::fact
Other posts on the same blog report that, at the database layer, Wix moved about 1,000 servers across 160+ MySQL clusters from Intel-based EC2 to AWS Graviton in 30 days with zero downtime (2026-03), lowering MySQL compute costs by about 15% and CPU utilization by up to 50%. The media platform serves over 6 billion media requests a day for more than 300 million websites and handles dozens of petabytes of data; its image manipulation service is written in Go and uses the C libraries libaom/libavif for AVIF encoding (2026-09). Wix also runs AirBot internally, which uses LLMs to automate failure investigation across 3,500+ Airflow pipelines, and reports that it saves 675 engineering hours a month (2026-01).
:::

:::guess
In our observation, wix.com's response headers showed server: Pepyaka alongside values indicating a Varnish cache hit and delivery via Fastly. This suggests a Fastly cache (Fastly is itself built on Varnish) placed in front of Wix's own delivery tier. For Wix, which serves hundreds of millions of sites through largely the same templated machinery, cache hit rate translates directly into cost of delivery. The steady stream of posts about shaving 30% off Kafka or 15% off MySQL compute likely reflects a business where trimming infrastructure costs — which grow with scale — by even a few percent materially moves margins.
:::

## Business model

Wix earns revenue from two pillars: paid site plans (Creative Subscriptions) and business features such as payments, e-commerce and shipping (Business Solutions).

:::fact
According to the SEC filing, of 2025 revenue of $1.99 billion, Creative Subscriptions contributed $1.41 billion (up 11%) and Business Solutions $583.3 million (up 18%). Within Business Solutions, transaction revenue — primarily from Wix Payments — was $255.0 million (up 19%). Revenue through agencies and freelancers who build sites or apps for others, plus B2B resellers such as LegalZoom and Vistaprint (Partners revenue), was $750.3 million, up 23% — faster than the company overall. Free cash flow was $573.0 million; excluding acquisition-related costs it would have been $605.1 million, or 30% of revenue. As of March 2026, Wix expected both bookings and revenue to grow at a mid-teens percentage in 2026.
:::

:::fact
According to the second-quarter results release and shareholder update of August 4, 2026, revenue for April–June 2026 was $563.1 million (up 15% year over year) and total ARR at quarter end $1.963 billion (up 15%), with Creative Subscriptions at $398.4 million (up 15%), Business Solutions at $164.7 million (up 14%) and Partners revenue at $213.8 million (up 17%). According to the earnings slides, Base44 reached $100 million in ARR in early March 2026 and $150 million in early May. In late June it launched "Base 1," its own LLM built on an open-source foundation and trained on Base44 data, and Wix expects Base44's non-GAAP gross margin, near zero at the start of the year, to reach about 60% in the second half. Paid advertising for Base44 pushed non-GAAP sales and marketing expenses up 67% year over year, and the GAAP net loss was $76.4 million. After an organizational realignment in early June, headcount fell by 906 from the previous quarter to 4,371, and registered users stood at nearly 317 million. Wix revised its full-year outlook in June, now expecting revenue to grow at a low- to mid-teens percentage and bookings at a low-teens percentage, citing softness in Partners.
:::

:::guess
Wix in 2026 appears to have entered a phase of buying Base44's growth with advertising and cutting the resulting inference costs with its own LLM. Revenue grew 15%, but ad spending and the inference costs of free users weighed on profits, and the realignment cut staff by nearly a fifth. The results' explanation, lowering costs with its own models and putting the savings into Base44 advertising, can be read as a decision to win the market for building apps with AI on speed rather than on price.
:::

:::guess
Line the growth rates up and payments (up 19%) and partner revenue driven by agencies and others (up 23%) outpace site subscriptions (up 11%). Wix's center of gravity appears to be shifting from "a tool for one person to build their own site" toward "people who build other people's businesses, and the rails those businesses run on." Base44 and Harmony read as investments that widen the entrance to that flow: the more people build sites and apps with AI, the more of the downstream payments, hosting and recurring billing lands on Wix's platform.
:::

:::fact
According to its official site, Wix runs an affiliate program (the Wix Affiliate Program) that pays affiliates when a referred new user converts to a Premium subscription, with applications accepted through Impact.
:::

A drag-and-drop veteran bolting AI onto its core skill without abandoning it, and earning from payments and the agency economy. Wix's 2025 was the year it went shopping for what comes after no-code. Behind it, the unglamorous work of trimming its infrastructure bill bit by bit goes on.
