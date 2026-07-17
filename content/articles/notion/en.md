---
service: "Notion"
title: "The 'Everything Is a Block' Bet — The Single Data Model That Carried Notion to 100 Million Users"
description: "Docs, databases, wikis — Notion represents them all with one primitive: the block. We dissect the Postgres sharding behind 200 billion blocks, the S3 + Hudi + Kafka data lake, and the freemium-to-Fortune-500 business, straight from the official engineering blog."
lead: "A page, a bullet point, a database row — inside Notion they are all the same thing: a block. This one design decision produced the product's flexibility and its engineering pain in equal measure. How did it scale to 100 million users and 200 billion blocks? We dissect it through the primary sources: Notion's own engineering blog."
category: productivity
tags: [note-taking, collaboration, block-editor, postgres, saas]
publishedAt: "2026-07-17"
updatedAt: "2026-07-17"
lastVerified: "2026-07-17"
serviceUrl: "https://www.notion.com/"
vendor: "Notion Labs"
origin: "US"
heroTheme: "notion"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 5.0 }
revisions:
  - date: "2026-07-17"
    scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 4.5 }
    note: "The score at initial publication, based on Forbes' April 2024 reporting of a $10B valuation and the September 2024 official announcement of 100 million users."
techStack:
  - layer: "Data model"
    name: "Block model (全要素を単一のブロック木で表現)"
    confidence: confirmed
    evidence: "Official engineering blog states that everything — text, images, database rows — is stored in Postgres as blocks"
    evidenceUrl: "https://www.notion.com/blog/sharding-postgres-at-notion"
  - layer: "Database"
    name: "PostgreSQL (アプリケーションレベルシャーディング)"
    confidence: confirmed
    evidence: "Two official posts (2021 sharding, 2023 re-shard): application-level sharding keyed on workspace ID, expanded from 32 to 96 physical instances with zero downtime"
    evidenceUrl: "https://www.notion.com/blog/the-great-re-shard"
  - layer: "Change data capture"
    name: "Kafka + Debezium CDC"
    confidence: confirmed
    evidence: "The official data lake article (2024-07) names this as the incremental ingestion path from Postgres"
    evidenceUrl: "https://www.notion.com/blog/building-and-scaling-notions-data-lake"
  - layer: "Data lake"
    name: "Amazon S3 + Apache Hudi + Apache Spark"
    confidence: confirmed
    evidence: "The official data lake article (2024-07): Hudi handles upserts for the update-heavy workload, Spark does large-scale transformations"
    evidenceUrl: "https://www.notion.com/blog/building-and-scaling-notions-data-lake"
  - layer: "Analytics warehouse"
    name: "Snowflake"
    confidence: confirmed
    evidence: "Named in the official data lake article as the downstream warehouse for analytics and reporting"
    evidenceUrl: "https://www.notion.com/blog/building-and-scaling-notions-data-lake"
  - layer: "Marketing site delivery"
    name: "Next.js / Vercel / Cloudflare"
    confidence: likely
    evidence: "Our HTTP header observation (x-powered-by: Next.js / x-vercel-id / cf-ray, 2026-07-17). This is the marketing site (notion.com), separate from the app itself"
sources:
  - label: "Notion engineering blog: Herding elephants — lessons from sharding Postgres (2021)"
    url: "https://www.notion.com/blog/sharding-postgres-at-notion"
    accessedAt: "2026-07-17"
  - label: "Notion engineering blog: The Great Re-shard — to 96 instances with zero downtime (2023)"
    url: "https://www.notion.com/blog/the-great-re-shard"
    accessedAt: "2026-07-17"
  - label: "Notion engineering blog: building and scaling Notion's data lake (2024-07)"
    url: "https://www.notion.com/blog/building-and-scaling-notions-data-lake"
    accessedAt: "2026-07-17"
  - label: "Notion blog: 100 million of you (2024-09)"
    url: "https://www.notion.com/blog/100-million-of-you"
    accessedAt: "2026-07-17"
  - label: "Forbes: $10B productivity startup Notion (2024-04 — valuation and company trajectory)"
    url: "https://www.forbes.com/sites/kenrickcai/2024/04/11/10-billion-productivity-startup-notion-wants-to-build-your-ai-everything-app/"
    accessedAt: "2026-07-17"
  - label: "Notion official blog: GIC, Sequoia, and Index purchase Notion shares ($11B valuation, 2026-01)"
    url: "https://www.notion.com/blog/gic-sequoia-index-purchase-notion-shares"
    accessedAt: "2026-07-17"
  - label: "Forbes: Notion kicks off employee share sale at $11B valuation as AI accelerates its growth (2025-12)"
    url: "https://www.forbes.com/sites/annatong/2025/12/15/notion-kicks-off-employee-share-sale-at-11-billion-valuation-as-ai-accelerates-its-growth/"
    accessedAt: "2026-07-17"
---

Notes, wikis, task boards, databases — features that normally become separate apps. Notion bet on expressing all of them with a single abstraction: the block. The bet paid off as product flexibility, but it charged engineering a heavy price — every user's every piece of content converges into one colossal table. Here we dissect the flagship of the cloud-side approach, the exact opposite of the local-file bet made by [Obsidian](/en/articles/obsidian).

## What the service is

Notion is a collaboration tool that bills itself as the all-in-one workspace. Inside a page you can embed prose, databases, and kanban boards alike, covering everything from personal notes to corporate knowledge bases with the same instrument.

:::fact
Per the official blog, Notion reached 100 million users in 2024. Forbes (April 2024) reported it as a company valued at $10 billion. The data scale is documented first-hand too — the official engineering blog discloses that block rows in Postgres grew from more than 20 billion in early 2021 to over 200 billion by 2024, hundreds of terabytes even compressed.
:::

:::pull
In product language, "you can build anything" translates in engineering language to "you cannot predict what is coming." Notion's infrastructure history is the record of that translation.
:::

::scorecard

## UX analysis

The Notion experience oscillates between the omnipotence of a blank page and the paralysis of one.

- **Blocks transfer learning.** Turn a bullet into a toggle, text into a to-do — master one interaction grammar and it applies everywhere. That's the decisive difference from suites where each feature has its own UI to relearn.
- **Database views break the spreadsheet curse.** Viewing the same data as a table, kanban, calendar, or gallery is a direct answer to the culture of abusing Excel as a pseudo-database.
- **But freedom returns as onboarding cost.** Starting from a blank page is demanding; the template gallery and community serve as training wheels. In organizations, adoption often hinges on the presence of a resident "Notion artisan."
- **Offline and raw speed remain long-standing weaknesses.** A cloud-first design structurally cannot match the immediacy and availability of a local-first tool like [Obsidian](/en/articles/obsidian). This is the flip side of the data model bet.

## Tech stack

::techstack

:::fact
Per the official engineering blog, all Notion content is stored in PostgreSQL as blocks. In 2021 the company moved to application-level sharding keyed on workspace ID across 32 physical instances (480 logical shards), and in 2023 re-sharded to 96 physical instances with zero downtime. Analytics moved to an in-house data lake in 2024 — ingesting from Postgres via Kafka + Debezium CDC, handling upserts with Apache Hudi on S3, transforming with Spark, and serving analytics downstream in Snowflake. The stated motivations: the operational burden of 480 Fivetran connectors and Notion's peculiar workload where 90% of upserts are updates.
:::

:::guess
Headers show the marketing site (notion.com) is served by Next.js + Vercel + Cloudflare, while the app itself (notion.so) sits behind Cloudflare and reveals nothing about its internals; the official blog also stays away from application-layer languages and frameworks. The single block abstraction likely pays a dividend in the AI era — uniform structure makes content tractable for search, summarization, and agent manipulation, and the speed of Notion AI's rollout is plausibly a return on that data model.
:::

## Business model

Notion's revenue is textbook freemium SaaS with a modern twist: bottom-up adoption.

:::fact
Individuals get a free plan; paid tiers step up through Plus, Business, and Enterprise. AI features have been offered as an add-on. The officially announced 100 million users form the mouth of this funnel.
:::

:::fact
【**Re-observed 2026-07-17**】Per Notion's official blog (January 2026), the company completed an employee tender offer of roughly $270 million — with GIC joining as a new investor alongside returning backers Sequoia Capital and Index Ventures — at an $11 billion valuation, the first update since 2022's $10 billion figure. The same post states that "more than 50% of our ARR came from AI-enabled customers, and that percentage more than doubled over the last year." Forbes (December 2025) reported annual recurring revenue crossed $600 million by the end of 2025. Initial publication cited only Forbes' April 2024 valuation figure of $10B; this quantitative confirmation of AI-driven revenue share is new, so we raise the business axis from 4.5 to 5.0.
:::

:::guess
The typical adoption path is bottom-up — an individual starts free, brings it to the team, knowledge accumulates until switching costs are prohibitive, and the company signs an enterprise contract. Data gravity itself is the lock-in device: the more content accrues, the harder it is to leave. The AI add-on monetizes Notion's position of holding accumulated internal knowledge as inference context — a play to shift from "workspace" to "the interface to institutional knowledge." A majority of ARR now coming from AI-enabled customers suggests that shift is already showing up in the numbers.
:::

The 2013-vintage decision to make everything a block still defines the same company in three ways at once: product flexibility, infrastructure difficulty, and fitness for the AI era. Notion is a standing lesson in how early data-model design decides the following decade.
