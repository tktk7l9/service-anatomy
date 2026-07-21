---
title: "Notes Held for You, Notes You Hold — The Single Choice That Split Notion and Obsidian"
description: "Notion stores everything as blocks in its own Postgres; Obsidian keeps everything as Markdown files on your device. Two note-taking apps that chose exact opposites, dissected head to head using both articles' structured data. They share exactly one technology — and it sits outside the product."
lead: "Notion built a 100-million-user SaaS by holding your notes; Obsidian built a world-class product with a team of about 10 by refusing to hold them. Cross-referencing both articles' techStack turns up exactly one shared technology — and it isn't anything that powers a note. It's the CDN serving both companies' websites."
slugA: "notion"
slugB: "obsidian"
publishedAt: "2026-07-21"
updatedAt: "2026-07-21"
lastVerified: "2026-07-21"
sources:
  - label: "Notion official blog: Herding elephants — storing every element as a block in Postgres (2021)"
    url: "https://www.notion.com/blog/sharding-postgres-at-notion"
    accessedAt: "2026-07-21"
  - label: "Notion official blog: The Great Re-shard — scaling to 96 instances with zero downtime (2023)"
    url: "https://www.notion.com/blog/the-great-re-shard"
    accessedAt: "2026-07-21"
  - label: "Notion official blog: 100 million of you — reaching 100 million users (2024-09)"
    url: "https://www.notion.com/blog/100-million-of-you"
    accessedAt: "2026-07-21"
  - label: "Notion official blog: GIC, Sequoia, and Index purchase employee shares ($11B valuation, 2026-01)"
    url: "https://www.notion.com/blog/gic-sequoia-index-purchase-notion-shares"
    accessedAt: "2026-07-21"
  - label: "Obsidian About (team size, philosophy, funding policy)"
    url: "https://obsidian.md/about"
    accessedAt: "2026-07-21"
  - label: "Obsidian Pricing (Sync's E2E encryption, pricing structure)"
    url: "https://obsidian.md/pricing"
    accessedAt: "2026-07-21"
---

[Notion](/en/articles/notion) and [Obsidian](/en/articles/obsidian) both deal in notes. Same category — productivity — and both articles carry the note-taking tag. Yet cross-referencing both articles' techStack mechanically turns up exactly one shared technology: Cloudflare. And it isn't anything that powers a note — it was observed at the layer that serves both companies' websites. Two products handling the same thing pass each other almost completely in their technology.

:::fact
Notion stores everything — text, images, database rows — as blocks in its own Postgres. Sharding started at 32 instances in 2021, expanded to 96 instances with zero downtime in 2023, and the company officially announced 100 million users in September 2024. Obsidian does the opposite: notes live as local Markdown files on your device, and the official site states that your data is stored locally and inaccessible to the company. The team is about 10 people, with an officially stated policy of taking no outside investors. The one technology the two techStacks share — Cloudflare — comes from website-delivery observations on both sides (Notion's is rated likely, based on our own HTTP header observation of its marketing site), not from either product itself.
:::

:::pull
The only technology the two articles share isn't anything that powers a note — it's the CDN serving each company's storefront. Two companies in the same market are running what amounts to two different industries.
:::

## The technology holding creates, and the technology not-holding creates

Scan Notion's tech list and most of it stems from one thing: holding other people's data. Application-level Postgres sharding, Kafka + Debezium CDC, an S3 + Hudi + Spark data lake, Snowflake for analytics — all machinery for holding an enormous number of blocks, continuously. The official blog's record of pulling off two rounds of resharding with zero downtime is an honest accounting of what the choice to hold actually costs.

Obsidian's tech list has almost no server side. Electron, CodeMirror, the community plugin API — all of it is the app itself, because the data starts out in the user's hands. Sync exists as a paid service, but only in a form the company cannot read, protected by end-to-end encryption. Even the paid features refuse to break the promise of not holding.

:::guess
The roughly 10-person team size appears to be a consequence of this design. If you don't hold the data, the server-side complexity that grows with scale never materializes — and neither does much reason to grow the organization. Notion, conversely, can build value that cuts across data — full-text search, collaboration, AI — precisely because it holds it. The choice of where data lives seems to have simultaneously determined what kind of value each company can offer and what shape each organization takes.
:::

## Business models follow the data's address

Notion is a textbook SaaS expanding from freemium into the enterprise, and in January 2026 it officially announced an employee share sale at an $11 billion valuation. It walks the classic road: buy growth with VC capital, build enterprise contracts on the data you hold.

Obsidian gives the core app away and sells exactly two things — Sync and Publish, both remedies for the inconveniences of being local. No outside investors. No published user counts or ARR.

:::guess
This contrast reads as a difference in how each company designs switching costs. Because Notion holds the data, leaving means migration work — which underpins enterprise pricing and contract retention. Obsidian's data is just Markdown files; abandon the app tomorrow and you lose nothing. Its stated philosophy of "file over app" doubles as a declaration that it deliberately forfeits switching costs. A business that sells trust instead of lock-in sits uneasily with promises of growth to investors — the zero-investor funding policy looks like both a principle and a necessity of this business model.
:::

The Notion vs. Obsidian matchup can't be captured by a feature comparison table. What divides the two companies isn't features but a single decision — who holds the notes — from which nearly everything else follows: the engineering, the size of the organization, the shape of the pricing. That the shared technology amounted to one entry at the website-delivery layer shows that under the same word, "notes," sit two different industries: one that holds, and one that refuses to.
