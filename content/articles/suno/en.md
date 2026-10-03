---
service: "Suno"
title: "Partnering With One of Its Own Plaintiffs — How Suno Reached a $5.4 Billion Valuation While Its Training-Data Dispute Stayed Open"
description: "Suno, the AI music service that generates a complete song from a text prompt. Sued for copyright infringement by the RIAA in June 2024, it then struck a partnership with Warner Music Group, one of the plaintiffs, in November 2025, reached a $5.4 billion valuation in a Series D round in June 2026, and released v6, a new model developed with the music industry, that September. A dissection, from official sources, of a company growing fast while its training-data dispute remains unresolved."
lead: "Suno generates a complete song — lyrics, melody, and vocals — from a single prompt. In June 2024, the Recording Industry Association of America (RIAA) sued Suno and rival Udio for copyright infringement. Seventeen months later, in November 2025, Suno announced a partnership with Warner Music Group, one of the plaintiffs, and by June 2026 it had raised a Series D at a $5.4 billion valuation. This dissects a company that keeps growing while partnering with one of the parties that sued it."
category: ai-tool
tags: [ai-music, generative-ai, licensing, copyright, creative-tools]
publishedAt: "2026-07-23"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://suno.com/"
vendor: "Suno, Inc."
origin: "US"
heroTheme: "suno"
scores: { product: 4.0, ux: 4.5, tech: 3.5, business: 3.0 }
techStack:
  - layer: "Music generation model"
    name: "Suno v6（v6 / v6-wild / v6-mini）"
    confidence: confirmed
    evidence: "Suno's official blog (September 9, 2026) announces the v6 generation, developed with industry partners (Warner Music Group, BMG, Believe): v6 and v6-wild for Pro/Premier, v6-mini for everyone. Previous models are to be retired as Suno moves entirely onto v6. The preceding v5.5 shipped March 26, 2026"
    evidenceUrl: "https://suno.com/blog/introducing-v6"
  - layer: "Stem separation / production tools"
    name: "Suno Studio（MIDI / オートメーション / プラグイン等）"
    confidence: confirmed
    evidence: "Suno's official blog states Suno Studio 2.0 (August 13, 2026) added MIDI, audio effects and plugins, automation, and advanced stem separation, available to Premier subscribers"
    evidenceUrl: "https://suno.com/blog/studio-2"
  - layer: "Label licensing foundation"
    name: "Warner Music Groupとのカタログライセンス提携"
    confidence: confirmed
    evidence: "Suno's official blog (November 25, 2025) announces the partnership with Warner Music Group and plans for a new generation of models using licensed music. No dollar amount is disclosed"
    evidenceUrl: "https://suno.com/blog/wmg-partnership"
  - layer: "Label licensing foundation"
    name: "BMGとのグローバル提携"
    confidence: confirmed
    evidence: "Suno's official blog (August 12, 2026) announces a global partnership with BMG and new economic opportunities for artists and songwriters who opt in"
    evidenceUrl: "https://suno.com/blog/suno-partnership-bmg"
  - layer: "Content identification"
    name: "Audible Magic（コンテンツ識別パートナーシップ）"
    confidence: confirmed
    evidence: "Suno's official blog states a partnership with content-identification technology provider Audible Magic was announced October 18, 2024"
    evidenceUrl: "https://suno.com/blog"
sources:
  - label: "Suno official: Pricing (Free/Pro/Premier fee structure)"
    url: "https://suno.com/pricing"
    accessedAt: "2026-09-28"
  - label: "Suno official: About (headquarters, company philosophy)"
    url: "https://suno.com/about"
    accessedAt: "2026-07-23"
  - label: "Suno official blog (funding history, Warner Music Group partnership, product release history)"
    url: "https://suno.com/blog"
    accessedAt: "2026-09-28"
  - label: "Wikipedia: Suno (founding history, RIAA lawsuit background and status, 2026 training-data reporting, label partnerships aggregated)"
    url: "https://en.wikipedia.org/wiki/Suno_(platform)"
    accessedAt: "2026-09-28"
  - label: "Suno official blog: Introducing v6 (2026-09-09)"
    url: "https://suno.com/blog/introducing-v6"
    accessedAt: "2026-09-28"
  - label: "Suno official blog: partnership with Warner Music Group (2025-11-25; no amount disclosed)"
    url: "https://suno.com/blog/wmg-partnership"
    accessedAt: "2026-09-28"
  - label: "Suno official blog: Series D ($400M+ at a $5.4B valuation, 2026-06-03)"
    url: "https://suno.com/blog/series-d-announcement"
    accessedAt: "2026-09-28"
  - label: "Suno official blog: global partnership with BMG (2026-08-12)"
    url: "https://suno.com/blog/suno-partnership-bmg"
    accessedAt: "2026-09-28"
  - label: "Suno official blog: Suno Studio 2.0 (2026-08-13)"
    url: "https://suno.com/blog/studio-2"
    accessedAt: "2026-09-28"
  - label: "TheWrap (via Yahoo; press report): Warner Music Group settles $500 million Suno lawsuit, sets AI partnership (2025-11)"
    url: "https://www.yahoo.com/entertainment/music/articles/warner-music-group-settles-500-194041732.html"
    accessedAt: "2026-09-28"
---

## Service overview

Suno is the AI music generation service founded by four former Kensho employees — Mikey Shulman, Georg Kucsko, Martin Camacho, and Keenan Freyberg. Headquartered in Cambridge, Massachusetts, with additional offices in New York and Los Angeles per its official site, it launched publicly on December 20, 2023, via a web app and a Microsoft Copilot integration. Its defining feature is generating a complete song — lyrics, melody, vocals, and instrumentation — from a text prompt.

:::fact
Per Suno's official blog, funding accelerated from a Series C in November 2025 ($250 million, at a $2.45 billion valuation) to a Series D in June 2026 (over $400 million, at a $5.4 billion valuation). On the model side, v5.5 (March 26, 2026) added a voice feature, custom models, and a preference-learning feature called "My Taste," and on September 9, 2026 Suno moved to the v6 generation, developed with music-industry partners. Meanwhile, per aggregated Wikipedia reporting, the Recording Industry Association of America (RIAA) sued Suno and rival Udio for copyright infringement in June 2024, seeking damages of up to $150,000 per work.
:::

:::pull
Seventeen months after being sued, Suno partnered with one of the parties that sued it. The lawsuit and the partnership are unfolding on the same timeline.
:::

::scorecard

## UX analysis

Suno's UX pushes almost all music-production expertise out of the loop.

- **A single prompt produces a finished song.** There's no need to assemble lyrics, melody, vocals, and instrumentation separately — a text instruction alone generates a roughly four-minute complete track.
- **Rich tools for extending and editing existing tracks.** Suno Studio offers DAW-adjacent editing features for generated tracks, including Warp Markers, unwanted-noise removal (Remove FX), and time-signature support.
- **Commercial use rights are clearly split by plan.** The official site states the free plan excludes commercial use, while the paid Pro/Premier plans include it — a clean line between hobbyist use and monetization drawn directly into the pricing tiers.
- **Fine-grained constraints — upload length, priority queueing — differentiate the tiers.** Free (8-minute upload cap), Pro (30-minute cap, priority queue), and Premier (bundles Suno Studio) segment not just generation volume but overall usability.

## Tech stack

::techstack

:::fact
Per Suno's official blog, its latest music generation models are the v6 generation (released September 9, 2026), described as developed with industry partners Warner Music Group, BMG, and Believe. There are three — v6, v6-wild, and v6-mini — and previous models are to be retired as Suno moves entirely onto v6. The preceding v5.5 (released March 26, 2026) had added a voice feature, custom models, and a preference-learning feature called "My Taste." Its production tool, Suno Studio, added Warp Markers, unwanted-noise removal, and time-signature support in version 1.2 in February 2026, then MIDI, automation, and plugins in version 2.0 on August 13, 2026. In October 2024, it announced a partnership with Audible Magic, a copyrighted-content identification technology provider. We could not confirm any technical disclosure from Suno itself, this time, detailing what music datasets its models were trained on.
:::

:::guess
Signing with Audible Magic as early as October 2024 looks aimed at building out identification and remediation capability for cases where generated output resembles existing tracks, laying down a partial line of defense ahead of copyright claims. At the same time, Suno's own lack of technical disclosure about the composition of its training data plausibly reflects a transparency challenge common to generative AI music as a field. The Warner Music Group partnership appears to have clarified licensing for at least that one catalog, but how relationships with other labels get resolved likely depends on how the ongoing litigation plays out.
:::

## Business model

Suno's revenue centers on individual subscriptions — Free, Pro, and Premier.

:::fact
Per Suno's official site, the Free plan offers model v6-mini, 50 daily credits, and no commercial use rights at no cost; Pro ($8/month) offers the advanced models v6 and v6-wild, 2,500 monthly credits, and commercial use rights; and Premier ($24/month) bundles Suno Studio with 10,000 monthly credits. On the business side, despite the June 2024 RIAA lawsuit (targeting Suno and rival Udio, seeking up to $150,000 per work in damages), Suno officially announced a partnership with Warner Music Group, one of the plaintiffs, on November 25, 2025. The announcement cites making the names, likenesses, voices, and compositions of opted-in Warner artists available for new generations, and building a new generation of models on licensed music; it discloses no dollar amount. Per press reports, the partnership settled Warner's lawsuit, and the $500 million figure was reported as the size of the lawsuit's claim, not the value of the partnership. Per aggregated Wikipedia reporting, Suno acquired Warner-owned concert discovery platform Songkick as part of the same agreement. Per the official blog, Suno also partnered with BMG in August 2026 and with Believe and TuneCore that September. Meanwhile, per aggregated Wikipedia reporting, Universal Music Group and Sony Music remain plaintiffs and their litigation continues.
:::

:::guess
Striking a major partnership with one RIAA member just seventeen months after being sued suggests a strategy of resolving unlicensed-training legal risk gradually, one label licensing deal at a time. The Warner partnership alone hasn't fully resolved the issue — how relationships with other labels get sorted out remains unclear — yet the valuation more than doubled in seven months, from $2.45 billion to $5.4 billion. Whether this rapid growth reflects the market pricing in an early resolution of the pending copyright dispute, or simply hasn't yet priced in its full severity, is something only the litigation's outcome will show.
:::

Correction (September 28, 2026). The first edition described the Warner Music Group partnership as a roughly $500 million deal, including in the title; that was wrong. The $500 million figure is the size of the lawsuit's claim as reported in the press, and the value of the partnership has not been disclosed. We also corrected the interval between the lawsuit and the partnership from fifteen months to seventeen, and a passage that read as if v5.5 had shipped in June 2026 rather than March.

Sued, and still partnering with one of the parties that sued it, and still growing. What this dissection of Suno reveals is a company carrying generative AI's "training data problem," building legitimacy incrementally through individual label licensing deals — a transitional moment where litigation and partnership unfold side by side.
