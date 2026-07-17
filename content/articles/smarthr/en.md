---
service: "SmartHR"
title: "Paperwork as the Wedge — How SmartHR Grew From Year-End Tax Forms Into an HR Data Platform"
description: "SmartHR is Japan's leading cloud HR/labor software. We dissect how it wedged in through Japan's uniquely painful onboarding and year-end tax adjustment paperwork, expanded from #1 labor-management share into talent management, and runs on Rails + React + Cloud SQL — with ¥15B ARR and a ¥21.4B Series E."
lead: "Few chores are as universally hated as Japan's year-end tax adjustment. SmartHR used that misery as its entry point, built a structure where employee data accumulates naturally, and grew from labor-management software into an HR data platform. We dissect Japan's model B2B SaaS through its official tech blog and announcements."
category: saas
tags: [hr, saas, rails, react, b2b]
publishedAt: "2026-07-17"
updatedAt: "2026-07-17"
lastVerified: "2026-07-17"
serviceUrl: "https://smarthr.jp/"
vendor: "SmartHR"
origin: "JP"
heroTheme: "smarthr"
scores: { product: 4.0, ux: 4.5, tech: 3.5, business: 4.5 }
techStack:
  - layer: "Backend"
    name: "Ruby on Rails"
    confidence: confirmed
    evidence: "Official tech blog: development is standardized on the Rails + React combination across 10+ products"
    evidenceUrl: "https://tech.smarthr.jp/entry/2023/12/25/120000"
  - layer: "Frontend"
    name: "React / TypeScript (Next.js導入中)"
    confidence: confirmed
    evidence: "Official tech blog documents the jQuery-to-React migration and recent Next.js adoption"
    evidenceUrl: "https://tech.smarthr.jp/entry/2023/12/25/120000"
  - layer: "Runtime"
    name: "Ruby 3.4 + YJIT"
    confidence: confirmed
    evidence: "Official tech blog (2025-08): the largest Rails app was updated to Ruby 3.4 with YJIT enabled"
    evidenceUrl: "https://tech.smarthr.jp/entry/2025/08/20/142858"
  - layer: "Database"
    name: "Google Cloud SQL (PostgreSQL)"
    confidence: confirmed
    evidence: "Official tech blog (2025-07) on read-replica adoption names Cloud SQL and the PostgreSQL hot_standby_feedback setting"
    evidenceUrl: "https://tech.smarthr.jp/entry/2025/07/11/081458"
  - layer: "Cloud platform"
    name: "Google Cloud"
    confidence: confirmed
    evidence: "Cloud SQL usage confirmed via the official tech blog (container platform details are not disclosed)"
    evidenceUrl: "https://tech.smarthr.jp/entry/2025/07/11/081458"
  - layer: "Design system"
    name: "SmartHR UI (OSS)"
    confidence: confirmed
    evidence: "Open-sourced React component library (kufu/smarthr-ui) unifying the UI across all products"
    evidenceUrl: "https://github.com/kufu/smarthr-ui"
  - layer: "CDN"
    name: "Cloudflare"
    confidence: likely
    evidence: "Our HTTP header observation (server: cloudflare on smarthr.jp, 2026-07-17); this covers the corporate site, not necessarily the app"
sources:
  - label: "SmartHR official press release: approx. ¥21.4B Series E round (2024-07)"
    url: "https://smarthr.co.jp/news/press/27110/"
    accessedAt: "2026-07-17"
  - label: "SmartHR official: ARR exceeds ¥15B, growing 150% year over year (2024-02)"
    url: "https://smarthr.co.jp/news/info/26682/"
    accessedAt: "2026-07-17"
  - label: "SmartHR Tech Blog: engineering roles briefing (2023-12 — the unified Rails + React stack)"
    url: "https://tech.smarthr.jp/entry/2023/12/25/120000"
    accessedAt: "2026-07-17"
  - label: "SmartHR Tech Blog: adding a read replica to the largest Rails app (2025-07 — Cloud SQL)"
    url: "https://tech.smarthr.jp/entry/2025/07/11/081458"
    accessedAt: "2026-07-17"
  - label: "ITmedia: just how exceptional is unicorn SmartHR? (2021-06)"
    url: "https://www.itmedia.co.jp/business/articles/2106/09/news056.html"
    accessedAt: "2026-07-17"
---

Every B2B SaaS textbook says to enter through a narrow workflow with acute pain. SmartHR chose the paperwork every Japanese company suffers through annually: employee onboarding and the year-end tax adjustment. As our first article in the SaaS category, we dissect Japan's flagship example of wedging in through labor management — where it holds the #1 share — and expanding into an HR data platform.

## What the service is

SmartHR is cloud HR/labor-management software. It moves procedures like onboarding, employment contracts, and year-end tax adjustments online, then puts the employee data gathered along the way to work in talent management.

:::fact
Per official announcements, SmartHR's ARR (annual recurring revenue) passed ¥15 billion in February 2024, growing 150% year over year, and the company raised an approximately ¥21.4 billion Series E in July 2024. The official site claims seven consecutive years as the #1 labor-management cloud by share (as of July 2026), and the company's 2024 releases state that over 30% of existing customers use its talent-management features. Its June 2021 Series D valued the company at ¥170 billion, making it a unicorn.
:::

:::pull
Labor paperwork is hated work — but it is also the checkpoint every employee's data must pass through. SmartHR's design is entirely about holding that checkpoint.
:::

::scorecard

## UX analysis

The core of SmartHR's UX is that it is built as software every employee touches, not software for the HR department.

- **Input is distributed to the employees themselves.** For tax adjustments and onboarding alike, employees answer a smartphone form and the paperwork assembles itself. The design doesn't reduce the administrator's transcription work — it prevents it from existing.
- **Forms that translate bureaucracy.** Opaque questions about dependents and insurance are replaced with plain language and branching logic. This "UX translation of government paperwork" is likely the invisible asset behind the #1 share.
- **A design system published as OSS.** All products share SmartHR UI, an open-source React component library, keeping 10+ products consistent. Design-system investment is a precondition of the multi-product strategy.
- **The weakness is multi-product complexity.** Companies that only want labor management increasingly see feature excess; the plan structure and screen density drift steadily away from the simplicity that was the original selling point.

## Tech stack

::techstack

:::fact
Per the official tech blog, SmartHR develops its 10+ products on a standardized Rails + React stack; the frontend has migrated from jQuery to React, with Next.js adopted in recent projects. Its largest Rails application (the core-features product) moved from a single Cloud SQL instance to a read-replica configuration — reads were 82% of traffic on the targeted endpoints — and has been updated to Ruby 3.4 with YJIT. UI components are open-sourced as SmartHR UI.
:::

:::guess
Cloud SQL usage points to Google Cloud as the production platform, though the container runtime (GKE or otherwise) is not publicly described. The engineering philosophy is consistently "a standard stack that hires well and shares knowledge" over adventurous choices — Rails + React + a design system reads as a deliberate optimization for the throughput of an organization shipping many products in parallel. The shared authentication and data foundation underneath 10+ products is the technical story to watch next.
:::

## Business model

SmartHR charges a monthly subscription scaled by employee count. Its real value, though, lies less in the pricing model than in where the data sits.

:::fact
From the labor-management wedge, SmartHR has expanded into talent management (evaluations, staffing, skills), then HR analytics, learning management (LMS), and applicant tracking (ATS), alongside the SmartHR Plus app store for integrations. The Series E announcement explicitly named accelerating multi-product expansion as the use of funds.
:::

:::guess
Labor management churns rarely (statutory procedures recur every year) but has a visible price ceiling. SmartHR's growth story appears to be the compound model: accurate employee data accumulated through labor workflows feeds adjacent products, compounding revenue per customer. Choosing a large late-stage round over an IPO suggests an intent to prove multi-product price expansion before listing. The entire Japanese SaaS industry watches this company's numbers as the test of the domestic valuation ceiling.
:::

Start from the most universal pain in Japanese working life — tedious paperwork — and end up as the custodian of the most politically sensitive asset in any company: HR data. SmartHR's trajectory is Japan's most polished example of a humble entrance concealing a large ambition.
