---
title: "Rent and Polish, or Build From the Ground Up — Vercel, Where This Site Used to Stand, and Cloudflare, Where It Stands Now"
description: "This site was served from Vercel until September 12, 2026, and now runs on Cloudflare, which also shows up in the techStack of 22 of our 54 dissections. Both are flagship developer infrastructure companies, yet a mechanical comparison finds only one shared technology: Rust, an implementation language. Vercel polishes only the experience layer on top of AWS; Cloudflare replaced NGINX with its own Rust proxy to build the ground itself. A dissection of two opposite depths of vertical integration."
lead: "This article was served from Vercel until September 12, 2026, and is now served from Cloudflare Workers. And Cloudflare shows up in the techStack of 22 of the 54 dissections on this site (as of September 28, 2026, Cloudflare's own article included). Line up two flagship developer-infrastructure companies and the shared technology comes out to just Rust, an implementation language — Vercel polishes only the Next.js experience on top of someone else's cloud (AWS), while Cloudflare builds the ground itself, from the nameserver down to a self-written Rust proxy. This dissects two companies with radically different depths of vertical integration."
slugA: "vercel"
slugB: "cloudflare"
publishedAt: "2026-07-23"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
sources:
  - label: "Vercel official blog: Towards the AI Cloud — Series F ($9.3B valuation, 2025-09-30)"
    url: "https://vercel.com/blog/series-f"
    accessedAt: "2026-09-28"
  - label: "Vercel official documentation: Global network and regions (126 PoPs, 19 regions)"
    url: "https://vercel.com/docs/regions"
    accessedAt: "2026-09-28"
  - label: "Cloudflare official blog: How we built Pingora (reasons for moving off NGINX)"
    url: "https://blog.cloudflare.com/how-we-built-pingora-the-proxy-that-connects-cloudflare-to-the-internet/"
    accessedAt: "2026-09-28"
  - label: "Cloudflare official press release: Q4 and fiscal year 2025 results"
    url: "https://www.cloudflare.com/press/press-releases/2026/cloudflare-announces-fourth-quarter-and-fiscal-year-2025-financial-results/"
    accessedAt: "2026-09-28"
  - label: "Next.js official docs: Turbopack (a bundler written in Rust)"
    url: "https://nextjs.org/docs/app/api-reference/turbopack"
    accessedAt: "2026-09-28"
  - label: "Cloudflare official: the global network (348 cities, 100+ countries)"
    url: "https://www.cloudflare.com/network/"
    accessedAt: "2026-09-28"
  - label: "Cloudflare official docs: Next.js on Workers (the official guide to running Next.js on Workers)"
    url: "https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/"
    accessedAt: "2026-09-28"
---

[Vercel](/en/articles/vercel) and [Cloudflare](/en/articles/cloudflare) are both flagship examples of "infrastructure developers never see." This site was served from Vercel until September 12, 2026, and is now served from Cloudflare Workers. Cloudflare also shows up in the techStack of 22 of the 54 dissections written so far (as of September 28, 2026, Cloudflare's own article included) — both companies are deeply entangled in how this very site came to exist. And yet, mechanically comparing their techStacks turns up just one shared technology token: Rust, an implementation language.

## Vercel rents and polishes; Cloudflare builds the ground itself

:::fact
Per the [Vercel](/en/articles/vercel) dissection, the internal names of the 19 compute regions listed in Vercel's official region documentation (checked September 28, 2026) match AWS region names, and Vercel's underlying cloud is assessed as "likely" AWS. On top of that, what Vercel builds itself is confined to the layer developers actually touch: Next.js (the framework), Fluid compute (the execution model), and Turbopack (a Rust-based bundler). Per the [Cloudflare](/en/articles/cloudflare) dissection, Cloudflare replaced the NGINX it had run for years — reasoning that its scale had outgrown NGINX — with its own Rust-built proxy, Pingora, and also builds its own physical Anycast network across 348 cities in over 100 countries (official network page, checked September 28, 2026). Turbopack and Pingora are both written in Rust.
:::

:::pull
Vercel builds the best possible structure on someone else's land. Cloudflare builds the land itself. Same category — "developer infrastructure" — wildly different depths of vertical integration.
:::

Vercel's technology choices resemble the "assembly" pattern we saw in the [Canva dissection](/en/articles/canva): delegate the foundation to AWS, and pour effort only into the framework, execution model, and bundler layers developers touch directly. Cloudflare's choices are the "build it yourself" pattern from the [Netflix dissection](/en/articles/netflix), applied end to end — from the physical network layer through the proxy to the serverless execution substrate (Cloudflare Workers, running on V8 isolates) — nothing rented.

:::guess
This difference likely traces back to what each company actually sells. What Vercel sells is "the experience of writing Next.js," and that value lives in deploy speed and preview URLs — things developers touch directly — not in what cloud sits underneath. That's precisely why it can rent the foundation from AWS and concentrate resources on the experience layer. What Cloudflare sells is the physical guarantee of "fast and secure delivery from anywhere in the world," and that's a kind of value that can't be built on top of someone else's rented network. What a company sells appears to determine how far down it has to build.
:::

Correction (September 28, 2026). The first version said the two companies shared zero technology, which was wrong. Vercel's Turbopack and Cloudflare's Pingora are both written in Rust, and the body of both dissections said so, but in the techStack Rust sat inside a parenthetical note and so fell outside the mechanical comparison. With Rust added as its own techStack entry in both dissections, the mechanical comparison returns Rust as shared technology.

## Rust is the only overlap, yet both are part of this site's history

The mechanical techStack comparison returns only Rust, an implementation language, as shared, but inside this single product — this site — the two companies aren't unrelated at all.

:::fact
This site was deployed to Vercel from launch, moved to Cloudflare Workers on September 12, 2026, and has been served from its own domain, serviceanatomy.com, since September 23, 2026. It still uses Next.js, built with OpenNext and run on Workers. At the same time, Cloudflare shows up in the techStack of 22 of the 54 dissections published so far (as of September 28, 2026, Cloudflare's own article included), and the [Notion vs Obsidian comparison](/en/compare/notion-vs-obsidian) named Cloudflare as the single technology shared between those two services.
:::

:::guess
That the mechanical comparison of Vercel and Cloudflare overlaps only on an implementation language isn't a coincidence — it likely reflects the two companies targeting different layers within developer infrastructure. Vercel operates near the application layer — frameworks and the hosting experience — while Cloudflare operates near the internet layer — networking and edge execution — each building its own "stratum." An individual web service like this one ends up sitting on top of one or both of those strata, but the strata themselves barely overlap as products, likely because the two companies have occupied separate layers stacked vertically on top of each other. That said, the fact that this site could move from Vercel to Cloudflare Workers while staying on Next.js suggests that, at the layer that runs applications, the two also compete for the same customers.
:::

Correction (September 28, 2026). The first version said this site was deployed to and served from Vercel. The site moved to Cloudflare Workers on September 12, 2026, so the text has been rewritten to match. The number of dissections and the number in which Cloudflare appears have also been updated from 12 of 25 in the first version to 22 of 54 as of September 28, 2026.

Vercel polishes the experience on someone else's land; Cloudflare builds the land itself. That the mechanical comparison overlaps only on Rust reflects the fact that, within the same map of developer infrastructure, the two have occupied different altitudes. This site has moved from one of them to the other.
