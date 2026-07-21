---
service: "Supabase"
title: "The Company That Declared It Won't Build from Scratch — How Supabase Curated Existing OSS into $10 Billion"
description: "Supabase bills itself as the open-source Firebase alternative. In substance it is a product of curation: Postgres at the center, bundled with off-the-shelf OSS like PostgREST (Haskell), Kong, and Deno, with gaps filled in Go and Elixir. A dissection from official docs and funding announcements — including the tailwind of 60%+ of new databases being created by AI tools."
lead: "Supabase's official architecture document carries an unusual declaration: wherever possible, use and support existing tools rather than developing from scratch. Built around Postgres — a 40-year-old piece of open source — the company doubled its developer count in eight months and reached a $10 billion valuation. This is a dissection of the strategy of not building."
category: dev-tool
tags: [database, postgres, open-source, backend, baas]
publishedAt: "2026-07-21"
updatedAt: "2026-07-21"
lastVerified: "2026-07-21"
serviceUrl: "https://supabase.com/"
vendor: "Supabase Inc."
origin: "US"
heroTheme: "supabase"
scores: { product: 4.5, ux: 4.5, tech: 4.0, business: 4.0 }
techStack:
  - layer: "Core database"
    name: "PostgreSQL"
    confidence: confirmed
    evidence: "Official architecture doc states every project gets a dedicated Postgres database; the entire platform is designed around Postgres"
    evidenceUrl: "https://supabase.com/docs/guides/getting-started/architecture"
  - layer: "Auto-generated REST API"
    name: "PostgREST (Haskell)"
    confidence: confirmed
    evidence: "Official architecture doc states PostgREST, third-party OSS written in Haskell, is adopted as-is to generate REST APIs from the database schema"
    evidenceUrl: "https://supabase.com/docs/guides/getting-started/architecture"
  - layer: "Authentication"
    name: "Supabase Auth (Go)"
    confidence: confirmed
    evidence: "Official architecture doc lists it as a Supabase-built component written in Go"
    evidenceUrl: "https://supabase.com/docs/guides/getting-started/architecture"
  - layer: "Realtime & connection pooling"
    name: "Realtime + Supavisor (Elixir)"
    confidence: confirmed
    evidence: "Official architecture doc lists Realtime (live broadcasting) and the Supavisor connection pooler as Supabase-built components in Elixir"
    evidenceUrl: "https://supabase.com/docs/guides/getting-started/architecture"
  - layer: "Edge functions"
    name: "Deno"
    confidence: confirmed
    evidence: "Official architecture doc states Edge Functions run on Deno, adopted as third-party OSS"
    evidenceUrl: "https://supabase.com/docs/guides/getting-started/architecture"
  - layer: "Website delivery"
    name: "Vercel"
    confidence: confirmed
    evidence: "Our own HTTP header observation (server: Vercel, x-nextjs-prerender; 2026-07-21)"
    evidenceUrl: "https://supabase.com/"
sources:
  - label: "Supabase official docs: Architecture (components, languages, and the 'use and support existing tools' declaration)"
    url: "https://supabase.com/docs/guides/getting-started/architecture"
    accessedAt: "2026-07-21"
  - label: "Supabase official blog: Series F ($500M at a $10B pre-money valuation, led by GIC, 2026-06-04)"
    url: "https://supabase.com/blog/supabase-series-f"
    accessedAt: "2026-07-21"
  - label: "Supabase official blog: Series E ($100M at a $5B valuation, led by Accel and Peak XV, 2025-10)"
    url: "https://supabase.com/blog/supabase-series-e"
    accessedAt: "2026-07-21"
  - label: "Supabase official GitHub: supabase/supabase (verified 106K+ stars)"
    url: "https://github.com/supabase/supabase"
    accessedAt: "2026-07-21"
---

## Service overview

Supabase is a backend-as-a-service that bills itself as the open-source alternative to Firebase. It provides the full kit an application backend needs — database, auth, storage, realtime, edge functions — in a form that sets up in minutes. At the center sits not a proprietary database but PostgreSQL itself, forty years old and counting.

:::fact
Per official announcements, Supabase raised $500 million on June 4, 2026, led by GIC at a $10 billion pre-money valuation, with Stripe participating for the second time. Developers number roughly 10 million — double the count from eight months earlier — database creation grew 600% year over year, and more than 60% of new databases are launched by "some sort of AI tool." Eight months before that, the October 2025 Series E raised $100 million at $5 billion; four months before that, the Series D raised $200 million at $2 billion. The valuation multiplied five-fold in about a year.
:::

:::pull
A company that writes "don't build from scratch wherever possible" into its own documentation reached $10 billion on exactly that policy. The product is not the power to build — it is the power to choose and bundle.
:::

::scorecard

## UX analysis

Supabase's UX aims to erase the backend as a phase of work. The audience is developers, and the core of the experience is speed.

- **A backend sprouts in minutes.** Create a project and Postgres, auth, APIs, and storage come up together with connection credentials issued. Setup that once took days finishes before your coffee cools.
- **The dashboard turns database administration into a GUI.** A table editor, SQL editor, and logs share one screen; a developer who has never touched psql can go from schema design to operations.
- **Affinity with AI tools is the new main front.** Because the schema and API are standard Postgres and REST, LLMs can operate them from knowledge they already have. That 60%+ of new databases arrive via AI tools is evidence this "standardness" has converted into an AI-era asset.
- **Row Level Security is the honest price.** The database-direct design pushes access control onto the user as RLS policies to write and understand. Easy to start, demanding to secure properly — this gradient draws the most criticism of any part of Supabase's UX.

## Tech stack

::techstack

:::fact
The official architecture document specifies each component and its origin. The core is Postgres (C, third-party OSS); the REST layer is PostgREST (Haskell, third-party OSS); the API gateway is Kong (Lua, third-party OSS); edge functions run on Deno (third-party OSS). Meanwhile auth (Go), Realtime (Elixir), the Supavisor connection pooler (Elixir), and storage (TypeScript) are built in-house. The same document states the policy outright: wherever possible, use and support existing tools rather than developing from scratch. The main repository has over 106,000 stars (verified 2026-07-21).
:::

:::guess
Adopting Haskell's PostgREST and Lua's Kong as-is looks like the consequence of one consistent rule: if the best OSS for a layer already exists, adopt it; build only where nothing exists. The in-house components — auth, realtime, pooling — are precisely the gaps that appear when Postgres is used by many users over many connections; the choice of where to fill is what's sharp. The weakness of the strategy is upstream dependency, mitigated by sponsoring the adopted projects. Multigres, announced with the Series F (a horizontal-scaling layer for Postgres, with a Vitess co-creator hired to lead it), reads as the turning point where the bundling company first steps into building at the deepest layer.
:::

## Business model

Supabase's revenue is subscription-based managed hosting. Self-hosting the OSS is possible; the paid cloud that shoulders operations is the actual business.

:::fact
The official Series F post names three uses for the capital: accelerating open source and Postgres tooling, funding growth, and providing employee stock liquidity. The Series E officially reserved an allocation for community members to invest alongside institutional partners.
:::

:::guess
The valuation surge — $2B to $10B in about a year — looks like prepayment for a position rather than for current revenue: the default backend of AI coding. In an era where AI tools write the code, what wins adoption is not human learning cost but standardness an AI can operate accurately. Sitting atop Postgres and REST — the technologies best represented in training data — Supabase is structurally favored as the landing zone for vibe coding. But the 60%-via-AI figure carries the twin risk of surging free usage decoupled from paid conversion; how many of the ten million AI-created databases grow into paying customers is what will grade this valuation.
:::

Just as Figma built its engine in C++ and Canva assembled AWS, backend construction forks into building and bundling. Supabase is the terminal case of bundling — a product held together by taste in selection and care in integration. Writing "we don't build from scratch" into official documentation is the clearest possible statement that in the age of open source, product development has shifted its center of gravity from invention to editing.
