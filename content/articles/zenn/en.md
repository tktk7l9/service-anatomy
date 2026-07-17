---
service: "Zenn"
title: "Where Knowledge Earns Its Keep — How Zenn Was Acquired in 4.5 Months and Became Japan's Tech Blogging Standard"
description: "Zenn is Japan's community platform for engineers. We dissect its Markdown×CLI×GitHub writing experience, the C2C model that pays authors through books and badges, the Classmethod acquisition just 4.5 months after launch, and the Next.js + Rails + Cloud Run stack."
lead: "A solo developer's tech-article platform was acquired by a company just four and a half months after launch — and has sat at the center of Japan's engineering culture ever since. We dissect Zenn, the origin and biggest product of catnose, the developer behind Nani Translation and Shizuka na Internet."
category: media
tags: [tech-blog, markdown, nextjs, google-cloud, indie-dev]
publishedAt: "2026-07-17"
updatedAt: "2026-07-17"
lastVerified: "2026-07-17"
serviceUrl: "https://zenn.dev/"
vendor: "Classmethod"
origin: "JP"
heroTheme: "zenn"
scores: { product: 4.5, ux: 4.5, tech: 4.0, business: 3.5 }
techStack:
  - layer: "Frontend"
    name: "Next.js"
    confidence: confirmed
    evidence: "Our HTTP header observation (x-powered-by: Next.js, 2026-07-17), also stated in the official Zenn team's engineering article"
    evidenceUrl: "https://zenn.dev/team_zenn/articles/migrate-appengine-to-cloudrun"
  - layer: "Backend API"
    name: "Ruby on Rails (API mode)"
    confidence: confirmed
    evidence: "The official team's Cloud Run migration article (2022-03) states the stack as 'Next.js + Rails (API mode)'"
    evidenceUrl: "https://zenn.dev/team_zenn/articles/migrate-appengine-to-cloudrun"
  - layer: "Compute"
    name: "Google Cloud Run"
    confidence: confirmed
    evidence: "Zero-downtime migration from App Engine documented by the official team (2022-03); also stated in Classmethod's case study"
    evidenceUrl: "https://classmethod.jp/cases/zenn/"
  - layer: "Database"
    name: "Cloud SQL"
    confidence: confirmed
    evidence: "Listed with architecture diagrams in the official team's Cloud Run migration article"
    evidenceUrl: "https://zenn.dev/team_zenn/articles/migrate-appengine-to-cloudrun"
  - layer: "Async jobs"
    name: "Cloud Tasks / Cloud Scheduler / Cloud Run Jobs"
    confidence: confirmed
    evidence: "Stated in the official team's engineering articles (Cloud Run migration, Cloud Run Jobs migration)"
    evidenceUrl: "https://zenn.dev/team_zenn/articles/we-use-cloud-run-jobs"
  - layer: "IaC / Analytics"
    name: "Terraform / BigQuery + Looker Studio"
    confidence: confirmed
    evidence: "Classmethod's Google Cloud case study (2023-03) describes Terraform-managed infrastructure, BigQuery log aggregation, and Looker Studio dashboards"
    evidenceUrl: "https://classmethod.jp/cases/zenn/"
  - layer: "CDN"
    name: "Cloudflare"
    confidence: likely
    evidence: "Our HTTP header observation (server: cloudflare / cf-ray / cf-cache-status: HIT, 2026-07-17); no official documentation found naming the CDN"
sources:
  - label: "Zenn About (official — features and the compensation model)"
    url: "https://zenn.dev/about"
    accessedAt: "2026-07-17"
  - label: "Classmethod: press release on the Zenn acquisition (2021-02-01)"
    url: "https://classmethod.jp/news/20210201-zenn/"
    accessedAt: "2026-07-17"
  - label: "team_zenn: migrating Zenn's backend from App Engine to Cloud Run (2022-03)"
    url: "https://zenn.dev/team_zenn/articles/migrate-appengine-to-cloudrun"
    accessedAt: "2026-07-17"
  - label: "Classmethod: Zenn's Google Cloud case study (2023-03)"
    url: "https://classmethod.jp/cases/zenn/"
    accessedAt: "2026-07-17"
  - label: "ITmedia: Classmethod acquires tech community Zenn (2021-02)"
    url: "https://www.itmedia.co.jp/news/articles/2102/01/news092.html"
    accessedAt: "2026-07-17"
---

For years, Qiita was practically the only answer to where Japanese engineers publish technical articles. In September 2020, a solo-built service appeared — and within a few years created a new default: "just write it on Zenn." This is the origin story and still the biggest product of catnose, the developer we covered in [Nani Translation](/en/articles/nani-translation) and [Shizuka na Internet](/en/articles/sizu-me).

## What the service is

Zenn officially describes itself as "an information-sharing community for engineers." Knowledge is shared in three formats: articles, books, and "scraps" (lightweight discussion threads).

:::fact
According to the official About page, authors write in a Markdown editor, can compile knowledge into books sold for ¥0–5,000, and readers can gift paid badges to authors, which convert to cash or Amazon gift cards. The service is operated by Classmethod. Solo developer catnose launched Zenn in September 2020, and on February 1, 2021 the business was transferred from CodeBrew to Classmethod — roughly four and a half months after launch.
:::

:::pull
"Engineers who share knowledge should be properly compensated" — Zenn's design philosophy fits in that single sentence, not in a feature list.
:::

::scorecard

## UX analysis

Zenn's strength comes from going all-in on the writer's experience, not the reader's.

- **Writing feels like an editor, not a form.** The Markdown editor is smooth — completion, image upload, preview — built as an editor rather than a blog submission form. That signature writing feel carries over to the later [Shizuka na Internet](/en/articles/sizu-me).
- **Zenn CLI and GitHub integration won over power users.** You can manage articles as Markdown in your own repository and publish by pushing. Your writing is never locked inside the platform — a deep read on what engineer-readers actually fear.
- **The compensation loop creates a reason to write.** Books and badges matter less for the amounts involved than as a signal that good knowledge gets recognized, which pulls average article quality upward.
- **The weak side is reader-facing discovery.** Trends and topics dominate; there are few paths to older, excellent articles. Heavy reliance on search and social traffic is a challenge shared with most UGC platforms.

## Tech stack

::techstack

:::fact
Per the official Zenn team's engineering article (March 2022), the stack consists of two application servers — Next.js and Rails (API mode) — both running on Google Cloud Run. Zenn originally ran on App Engine, but scaling delays when articles went viral (instances took minutes to boot) prompted a zero-downtime migration to Cloud Run, cutting spike scale-out to roughly 10 seconds. Infrastructure is managed with Terraform; logs aggregate into BigQuery and are visualized in Looker Studio. Our own observation on July 17, 2026 confirmed x-powered-by: Next.js, Google's load balancer (via: 1.1 google), and CSP violation reports sent to a Cloud Functions endpoint in asia-northeast1.
:::

:::guess
Cloudflare sits at the front of delivery (we observed server: cloudflare and cf-cache-status: HIT). Since no official documentation names the CDN, the table keeps this at "likely" — but the observable cache hits suggest most article pages are served from CDN cache, sharply reducing Cloud Run load. That two-tier approach — serving a dynamic app statically — is likely a big part of how such a small team operates traffic at this scale.
:::

## Business model

Zenn's revenue structure is built on C2C fees and strategic value to its parent company, not ads.

:::fact
No ads are displayed in the service. Monetization consists of book sales (¥0–5,000) and reader-gifted badges — both C2C transactions where money flows to authors. The operator is Classmethod, an AWS consulting company, which stated in its acquisition press release that Zenn would be run independently from its own tech blog, Developers.IO.
:::

:::guess
Whether book and badge fees alone cover a platform of this scale is not disclosed; standalone profitability is likely limited. For Classmethod, Zenn is better understood as a brand asset that occupies the center of Japan's engineering community, with spillover value in hiring and awareness. The reason catnose gave for the transfer — the weight of an individual holding C2C money — is precisely the kind of model that only stabilizes under a company, making Zenn a textbook case of an exit strategy for solo developers.
:::

A culture built by one person in four and a half months became sustainable on corporate capital — and still runs on the founder's original values: writing feel, fair compensation, and data you can take with you. Zenn remains one of Japan's rare examples where a solo-dev success and an acquisition success turned out to be the same story.
