---
service: "LIFULL HOME'S"
title: "A Portal Paid by Inquiries Deletes the Listings That Bring Them — LIFULL HOME'S and Its Bet on 'Listing Freshness'"
description: "LIFULL HOME'S is one of Japan's largest real-estate and housing portals. Its revenue comes from listing and inquiry fees paid by agents and homebuilders, yet it keeps delisting 'bait listings' automatically with AI and data links to property managers. We dissect why, using its financial results and supplemental materials, official press releases and the official engineering blog — and trace how its tech moved from a Symfony monolith onto the in-house Kubernetes platform KEEL."
lead: "LIFULL HOME'S makes money from listing and inquiry fees: real-estate agents pay to post properties, homebuilders pay when users request their catalogs. Yet this portal uses its own AI to delist, almost every day, the very properties that would draw those inquiries. From January to March 2026, the number of properties the AI delisted automatically was 163 times the figure a year earlier. Why keep investing in something that could cut inquiries? We dissect it from the earnings materials and the developer blog."
category: consumer-app
tags: [real-estate, portal, machine-learning, kubernetes, php]
publishedAt: "2026-09-28"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://www.homes.co.jp/"
# Affiliate link placeholder: the owner must join a LIFULL HOME'S affiliate program via an ASP
# before enabling this block. Third-party listings report that A8.net carries
# "LIFULL HOME'S 住まいの窓口" (reward on an in-store or video consultation within 30 days of
# a web booking); this was not confirmed on an official LIFULL page. Check the program terms
# (e.g. rules on comparison articles) on the ASP after joining.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<lifull-homes-affiliate-tracking-link>"
#   program: "LIFULL HOME'S Sumai no Madoguchi (A8.net)"
vendor: "LIFULL Co., Ltd."
origin: "JP"
heroTheme: "lifull-homes"
scores: { product: 4.0, ux: 3.5, tech: 3.5, business: 4.0 }
techStack:
  - layer: "Application platform"
    name: "KEEL (in-house Kubernetes PaaS + Istio)"
    confidence: confirmed
    evidence: "Official engineering blog (2020-12): KEEL is an in-house project developed and operated since early 2018, a multi-tenant single cluster, and \"most of LIFULL's applications already run on KEEL.\" A 2024-08 post calls KEEL a \"Kubernetes-based in-house PaaS\" and describes authorization with Istio's AuthorizationPolicy and mTLS"
    evidenceUrl: "https://www.lifull.blog/entry/2020/12/02/000000"
  - layer: "Cloud"
    name: "AWS"
    confidence: confirmed
    evidence: "Official engineering blog (2020-12): LIFULL moved to microservices \"triggered by the migration from on-premises to AWS a few years ago.\" A 2026-04 post also describes auditing the S3 bucket policy that holds behavior logs and checking access with CloudTrail"
    evidenceUrl: "https://www.lifull.blog/entry/2020/12/02/000000"
  - layer: "Backend (legacy core)"
    name: "Symfony (PHP) monolith + Sinatra (Ruby) BFF/API"
    confidence: confirmed
    evidence: "Official engineering blog (2021-03): the LIFULL HOME'S backend is \"mostly a three-layer structure of a Symfony (PHP) monolith plus a Sinatra (Ruby) BFF and API server,\" and the monolith had been developed for more than nine years. The same post says the new BFF was built with TypeScript + LoopBack (Clean Architecture). This describes 2021; the current split is not known"
    evidenceUrl: "https://www.lifull.blog/entry/2021/03/15/100000"
  - layer: "Rental property detail page"
    name: "Express + TypeScript, Preact SSR, Tailwind CSS, Stimulus"
    confidence: confirmed
    evidence: "Official engineering blog (2023-03): the rental property detail page was split out of the main repository, which had run for more than ten years, and rebuilt with Express x TypeScript, server-side rendering with Preact x TypeScript, Tailwind CSS and Stimulus. It runs on KEEL and is tested with Vitest and Playwright"
    evidenceUrl: "https://www.lifull.blog/entry/2023/03/02/120000"
  - layer: "Behavior-log pipeline"
    name: "Tealium + Amazon S3 + BigQuery"
    confidence: confirmed
    evidence: "Official engineering blog (2026-04): only the behavior-log sending of the rental detail page had stayed in the old system, effectively doubling backend requests per page view, so the team moved it to Tealium, the company's de facto standard. The old logs sat in S3, more than 20 systems depended on them, and they also fed BigQuery"
    evidenceUrl: "https://www.lifull.blog/entry/2026/04/10/100211"
  - layer: "Listing quality control"
    name: "Self-developed bait-listing detection models"
    confidence: confirmed
    evidence: "Official press release (2026-05-13): a self-developed AI trained on past advertised listings and LIFULL's own surveys of vacancy status detects 'bait listings' among rental properties and delists them automatically; since going live in January 2025, multiple AI models have run in parallel for comparative validation"
    evidenceUrl: "https://lifull.com/news/48558/"
  - layer: "Conversational AI"
    name: "LIFULL AI (built on OpenAI ChatGPT technology)"
    confidence: confirmed
    evidence: "Official press release (2025-12-17): the integrated AI agent LIFULL AI is \"based on ChatGPT (OpenAI) technology\" connected to LIFULL's accumulated data, and its first feature is 'AI HOME'S-kun' for real estate and housing"
    evidenceUrl: "https://lifull.com/news/45744/"
  - layer: "CDN"
    name: "Amazon CloudFront"
    confidence: likely
    evidence: "Our own observation (2026-09-28): the top, rental and custom-home pages of www.homes.co.jp return via: CloudFront and x-amz-cf-pop: NRT12-P2, and DNS points through www2.homes.co.jp to AWS addresses. No official documentation states it"
sources:
  - label: "LIFULL Co., Ltd.: Consolidated Financial Results for the Nine Months of FY9/2026 [IFRS] (Japanese, 2026-08-12)"
    url: "https://lifull.com/doc/2026/08/260812_FY2026Q3_report.pdf"
    accessedAt: "2026-09-28"
  - label: "LIFULL Co., Ltd.: FY9/2026 Q3 Supplementary Materials (Japanese, 2026-08-12)"
    url: "https://lifull.com/doc/2026/08/260812_FY2026Q3_presentation.pdf"
    accessedAt: "2026-09-28"
  - label: "LIFULL news: LIFULL HOME'S improves detection accuracy of its self-developed bait-listing AI; AI-driven automatic delistings up 163x year on year (Japanese, 2026-05-13)"
    url: "https://lifull.com/news/48558/"
    accessedAt: "2026-09-28"
  - label: "LIFULL news: LIFULL HOME'S expands its bait-listing detection system to property sales (Japanese, 2026-04-23)"
    url: "https://lifull.com/news/48447/"
    accessedAt: "2026-09-28"
  - label: "LIFULL news: LIFULL HOME'S links with the real-estate SaaS 'ielove CLOUD' to eliminate bait listings (Japanese, 2026-09-17)"
    url: "https://lifull.com/news/50131/"
    accessedAt: "2026-09-28"
  - label: "LIFULL news: LIFULL HOME'S improves flood and landslide risk assessment for pre-owned condos and houses (Japanese, 2026-09-18)"
    url: "https://lifull.com/news/50253/"
    accessedAt: "2026-09-28"
  - label: "LIFULL news: LIFULL HOME'S Custom Homes adds visit booking; traffic to the model-house list up 53%, click-through to detail pages up 62% (Japanese, 2026-04-27)"
    url: "https://lifull.com/news/48489/"
    accessedAt: "2026-09-28"
  - label: "LIFULL news: LIFULL HOME'S Sumai no Madoguchi publishes its latest customer satisfaction survey from 3,604 responses (Japanese, 2026-09-24)"
    url: "https://lifull.com/news/50285/"
    accessedAt: "2026-09-28"
  - label: "LIFULL news: LIFULL announces the integrated AI agent 'LIFULL AI' (Japanese, 2025-12-17)"
    url: "https://lifull.com/news/45744/"
    accessedAt: "2026-09-28"
  - label: "LIFULL HOME'S Business: Pay-per-response lead generation for homebuilders | LIFULL HOME'S Custom Homes (Japanese)"
    url: "https://iezukuri-business.homes.jp/lists/lifull-service/lifull-service-00004"
    accessedAt: "2026-09-28"
  - label: "LIFULL HOME'S Sumai no Madoguchi: FAQ (Japanese)"
    url: "https://counter.homes.co.jp/faq/"
    accessedAt: "2026-09-28"
  - label: "LIFULL Creators Blog: About KEEL, LIFULL's company-wide application platform (Japanese, 2020-12)"
    url: "https://www.lifull.blog/entry/2020/12/02/000000"
    accessedAt: "2026-09-28"
  - label: "LIFULL Creators Blog: Building a Backend for Frontend with Clean Architecture (Japanese, 2021-03)"
    url: "https://www.lifull.blog/entry/2021/03/15/100000"
    accessedAt: "2026-09-28"
  - label: "LIFULL Creators Blog: Rebuilding the LIFULL HOME'S rental property detail page (Japanese, 2023-03)"
    url: "https://www.lifull.blog/entry/2023/03/02/120000"
    accessedAt: "2026-09-28"
  - label: "LIFULL Creators Blog: Platform Engineering with LLMs (Japanese, 2024-08)"
    url: "https://www.lifull.blog/entry/2024/08/29/173000"
    accessedAt: "2026-09-28"
  - label: "LIFULL Creators Blog: Untangling the behavior-log sending of LIFULL HOME'S Rental, and the ROI of engineering (Japanese, 2026-04)"
    url: "https://www.lifull.blog/entry/2026/04/10/100211"
    accessedAt: "2026-09-28"
---

A real-estate portal lives on inquiries. Agents who post properties and homebuilders who hand out catalogs pay because inquiries arrive. Yet this portal deletes, with its own hands, the properties that are supposed to draw them. Since 2025, LIFULL HOME'S has used AI to find "bait listings" — properties no longer on offer — and delist them automatically, and in 2026 it wired itself directly into property managers' business systems. What is it protecting, at the cost of short-term inquiries?

## What It Is

LIFULL HOME'S is a real-estate and housing portal covering rentals, new and pre-owned condos and houses, custom homes, sale appraisals and real-estate investment. It is run by LIFULL Co., Ltd., listed on the Prime Market of the Tokyo Stock Exchange. Users search for free; the agents and builders who list, and the agents who receive appraisal requests, pay. Besides the web and apps, it runs "LIFULL HOME'S Sumai no Madoguchi," walk-in counters for housing consultations.

:::fact
According to the financial results (2026-08-12), LIFULL's revenue for the first nine months of FY9/2026 (October 2025 – June 2026) was ¥21.98B (up 4.4% year on year) and operating profit ¥3.24B (up 7.9%). The supplementary materials show that the HOME'S-related business accounted for ¥20.04B of revenue (up 4.5%) with segment profit of ¥3.63B (up 5.8%), and that segment revenue has beaten the prior-year quarter for 11 straight quarters. The overseas business was reclassified as discontinued in FY9/2025, leaving the HOME'S-related business as the only reportable segment.
:::

:::fact
The same materials put the number of HOME'S-related customers (nine-month average) at a record 34,089 (up 2.9%) and ARPA (HOME'S-related revenue ÷ customers) at ¥65,325 (up 1.5%). The full-year forecast was revised in August: consolidated revenue was cut from ¥29.7B to ¥29.3B while operating profit was raised from ¥3.0B to ¥3.9B. HOME'S-related revenue is forecast at ¥26.5B. The medium-term plan ending FY9/2028 targets consolidated revenue of ¥35–40B and operating profit of ¥5.5–6.0B.
:::

:::pull
From January to March 2026, the AI delisted 163 times as many properties as a year earlier. A portal paid by inquiries is deleting the listings that bring them.
:::

::scorecard

## UX Analysis

LIFULL HOME'S puts its UX money less into search convenience itself than into the question "can I trust what is listed here?" From the side of landlords and property managers, this shift matters too.

- **Fewer "I inquired and it was already gone" moments.** The official announcement (2026-05-13) calls that experience "a heavy burden on users." On top of matching listings against property managers' data to delist ended vacancies, LIFULL HOME'S has since January 2025 used a self-developed AI to detect and remove bait listings. The AI also catches ended vacancies for properties managed by companies it has no data link with, and for properties listed by only one agent.
- **Extended to sales.** In February 2026 the same mechanism went live for pre-owned homes for sale, and daily automatic delistings grew about fivefold within a month. According to the company's survey, one in three people considering a pre-owned home had run into a bait listing.
- **Direct links to property managers' systems.** On September 16, 2026, it connected with "ielove CLOUD," a rental management system used by more than 17,000 real-estate companies, and began importing each day the listing data and vacancy status of managers who consent to share it. The person in charge commented that expanding one-to-one links "one company at a time" had its limits. The supplementary materials also list a data link (May 2026) with TAKUTO, which manages more than 50,000 units, mainly in the Kansai region.
- **Location risk, property by property.** Since September 8, 2026, detail pages for pre-owned condos and houses check each property's latitude and longitude against flood and landslide hazard zones one by one. After the Chiba downpour of August 13, 2026, users viewing the hazard map for properties in Chiba rose to 134.3% of the week before the storm. The release adds that falling inside a hazard zone does not mean a property is dangerous or less valuable.
- **Custom homes: visit booking for a purchase with no building yet.** A January 2026 redesign put "Search by model house" at the entrance and added visit booking. The company reports that from January to March, traffic to the model house and showroom list rose 53% and click-through to detail pages 62%.

## Tech Stack

::techstack

:::fact
According to the official engineering blog (2020-12), LIFULL moved to microservices after migrating from on-premises to AWS a few years earlier, and since early 2018 has built and run KEEL, a Kubernetes-based in-house PaaS, as the platform for them. It is a multi-tenant single cluster, and at the time of that post "most of LIFULL's applications" ran on KEEL. A post from August 2024 says the KEEL team also develops an internal general-purpose AI (an AutoGPT implementation), exposed with authorization via Istio's AuthorizationPolicy, including traffic inside the Kubernetes cluster.
:::

:::fact
The core of the application, however, was long a single monolith. A March 2021 post says the LIFULL HOME'S backend was mostly a three-layer structure of a Symfony (PHP) monolith plus a Sinatra (Ruby) BFF and API server, with the monolith under development for more than nine years. A March 2023 post reports splitting the rental property detail page out of the main repository, in operation for more than ten years, and rebuilding it with Express + TypeScript, Preact server-side rendering, Tailwind CSS and Stimulus. For technology choices, the team says it stopped "taking on challenges" and picked "frameworks with a low learning cost." An April 2026 post describes how, on that detail page, behavior-log sending alone had stayed in the old system, effectively doubling backend requests per view; the team mapped more than 20 dependent systems and moved the logs to Tealium to finish the job.
:::

:::guess
Bait-listing detection appears to work in three stages — data links, then AI, then human checks — because the portal does not hold the ground truth. Whether a unit is still available is known to the property manager's business system; what reaches the portal is only the ad an agent submitted. LIFULL links managers one by one, fills the gaps with AI inference, and has people confirm the rest. The ielove CLOUD link reads as a move to widen that first stage by business system rather than company by company. Given how the team split the detail page out of the monolith and patiently peeled off even its log dependencies, it is plausible that a foundation able to take in external data daily and reflect it in listings has only come together in the last few years.
:::

## Business Model

Almost all revenue comes from the HOME'S-related business, and the payers are real-estate agents, homebuilders and construction firms. How they are charged differs by area.

:::fact
According to the official page for businesses, LIFULL HOME'S Custom Homes charges homebuilders per response: fees accrue according to the number of responses such as catalog requests and visit bookings, and builders can cap their budget (number of responses) in the dashboard. The supplementary materials say that for sale appraisals LIFULL receives referral fees from agents, and, in explaining its regional revitalization business, describe a "listing and inquiry fee model" in which market activity drives both "listings" and "inquiries and deals" on LIFULL HOME'S and Kenbiya. Sumai no Madoguchi, per the official FAQ, runs on referral fees from builders and agents and is free to users; a September 2026 release says it has 78 locations and has served more than 27,000 households.
:::

:::fact
The quarterly figures in the supplementary materials show HOME'S-related revenue peaking every year in January–March (Q2): ¥5,527M → ¥6,575M in FY9/2024, ¥5,951M → ¥7,079M in FY9/2025 and ¥6,361M → ¥7,223M in FY9/2026 (Q1 → Q2). Consolidated advertising and sales expenses swell in the same quarter, from ¥1,877M in Q1 to ¥2,998M in Q2 of FY9/2026; the materials say TV ads and social media campaigns were timed to the rental peak season. The real-estate investment site Kenbiya is said to carry more than 90,000 investment listings as of June 2026.
:::

:::guess
For a portal that charges for listings and inquiries, bait listings can in the short run be inventory that generates inquiries. LIFULL still takes the side of removing them, likely because inquiries about properties that are already taken are wasted responses for the agents who pay, too. Just as builders on per-response pricing watch their budget caps, what businesses want to pay for are inquiries close to a deal. With customers growing 2.9% but ARPA only 1.5%, it can be read as a judgment that the only lever for raising unit price is inquiry quality. Not disappointing users — gathered with heavy ad spend in the January–March peak — with properties no longer on offer is plausibly the premise that links ARPA growth to the medium-term target of ¥5.5–6.0B in operating profit.
:::

In a business that earns more the more it lists, it cuts what is listed. LIFULL HOME'S "listing freshness" is a bet to buy user trust and response quality for businesses with one and the same number. Behind that bet sit the engineering that has peeled a decade-plus-old monolith apart piece by piece, and the data plumbing reaching into property managers' business systems.
