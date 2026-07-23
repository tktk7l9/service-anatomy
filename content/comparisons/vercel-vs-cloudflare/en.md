---
title: "Rent and Polish, or Build From the Ground Up — Where This Site Stands on Vercel, and Where Cloudflare Hides in 12 Other Articles"
description: "This site itself is served from Vercel, and Cloudflare shows up in the techStack of 12 out of 25 other dissections. Both are flagship developer infrastructure companies, yet a mechanical comparison finds zero shared technology. Vercel polishes only the experience layer on top of AWS; Cloudflare replaced NGINX with its own Rust proxy to build the ground itself. A dissection of two opposite depths of vertical integration."
lead: "This article is being served from Vercel. And Cloudflare shows up in the techStack of 12 of the 25 dissections that make up the site this article lives on. Line up two flagship developer-infrastructure companies and the shared technology comes out to zero — Vercel polishes only the Next.js experience on top of someone else's cloud (AWS), while Cloudflare builds the ground itself, from the nameserver down to a self-written Rust proxy. This dissects two companies with radically different depths of vertical integration."
slugA: "vercel"
slugB: "cloudflare"
publishedAt: "2026-07-23"
updatedAt: "2026-07-23"
lastVerified: "2026-07-23"
sources:
  - label: "Vercel official blog: Towards the AI Cloud — Series F ($9.3B valuation, 2025-09-30)"
    url: "https://vercel.com/blog/series-f"
    accessedAt: "2026-07-21"
  - label: "Vercel official documentation: Global network and regions (126 PoPs, 20 regions)"
    url: "https://vercel.com/docs/regions"
    accessedAt: "2026-07-21"
  - label: "Cloudflare official blog: How we built Pingora (reasons for moving off NGINX)"
    url: "https://blog.cloudflare.com/how-we-built-pingora-the-proxy-that-connects-cloudflare-to-the-internet/"
    accessedAt: "2026-07-21"
  - label: "Cloudflare official press release: Q4 and fiscal year 2025 results"
    url: "https://www.cloudflare.com/press/press-releases/2026/cloudflare-announces-fourth-quarter-and-fiscal-year-2025-financial-results/"
    accessedAt: "2026-07-21"
---

[Vercel](/en/articles/vercel) and [Cloudflare](/en/articles/cloudflare) are both flagship examples of "infrastructure developers never see." This site is served from Vercel, and Cloudflare shows up in the techStack of 12 out of the 25 other dissections written so far — both companies are deeply entangled in how this very site came to exist. And yet, mechanically comparing their techStacks turns up not a single shared technology token.

## Vercel rents and polishes; Cloudflare builds the ground itself

:::fact
Per the [Vercel](/en/articles/vercel) dissection, the internal names of the 20 compute regions listed in Vercel's official region documentation match AWS region names, and Vercel's underlying cloud is assessed as "likely" AWS. On top of that, what Vercel builds itself is confined to the layer developers actually touch: Next.js (the framework), Fluid compute (the execution model), and Turbopack (a Rust-based bundler). Per the [Cloudflare](/en/articles/cloudflare) dissection, Cloudflare replaced the NGINX it had run for years — reasoning that its scale had outgrown NGINX — with its own Rust-built proxy, Pingora, and also builds its own physical Anycast network across more than 337 cities in over 100 countries.
:::

:::pull
Vercel builds the best possible structure on someone else's land. Cloudflare builds the land itself. Same category — "developer infrastructure" — wildly different depths of vertical integration.
:::

Vercel's technology choices resemble the "assembly" pattern we saw in the [Canva dissection](/en/articles/canva): delegate the foundation to AWS, and pour effort only into the framework, execution model, and bundler layers developers touch directly. Cloudflare's choices are the "build it yourself" pattern from the [Netflix dissection](/en/articles/netflix), applied end to end — from the physical network layer through the proxy to the serverless execution substrate (Cloudflare Workers, running on V8 isolates) — nothing rented.

:::guess
This difference likely traces back to what each company actually sells. What Vercel sells is "the experience of writing Next.js," and that value lives in deploy speed and preview URLs — things developers touch directly — not in what cloud sits underneath. That's precisely why it can rent the foundation from AWS and concentrate resources on the experience layer. What Cloudflare sells is the physical guarantee of "fast and secure delivery from anywhere in the world," and that's a kind of value that can't be built on top of someone else's rented network. What a company sells appears to determine how far down it has to build.
:::

## Zero overlap between them, yet both are part of this site

The mechanical techStack comparison returns zero shared tokens, but inside this single product — this site — the two companies aren't unrelated at all.

:::fact
This site itself is deployed to and served from Vercel. At the same time, Cloudflare shows up in the techStack of 12 of the 25 dissections published so far, and the [Notion vs Obsidian comparison](/en/compare/notion-vs-obsidian) named Cloudflare as the single technology shared between those two services.
:::

:::guess
Vercel and Cloudflare returning zero on the mechanical comparison isn't a coincidence — it likely reflects the two companies targeting different layers within developer infrastructure. Vercel operates near the application layer — frameworks and the hosting experience — while Cloudflare operates near the internet layer — networking and edge execution — each building its own "stratum." An individual web service like this one ends up sitting on top of one or both of those strata, but the strata themselves don't overlap as technology tokens, likely because the two companies aren't so much rivals as they are separate layers stacked vertically on top of each other.
:::

Vercel polishes the experience on someone else's land; Cloudflare builds the land itself. The zero overlap the mechanical comparison shows isn't a sign of conflict between the two — it reflects the fact that, within the same map of developer infrastructure, they occupy entirely different altitudes. This site sits on top of both, without ever quite noticing.
