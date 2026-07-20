---
service: "X"
title: "The Company That Open-Sources Its Algorithm Got Swallowed by an AI Company — X's Transparency and Opaque Finances"
description: "X, the successor to Twitter, holds an unusual transparency by open-sourcing two things — its recommendation algorithm and Community Notes — while undergoing a $113B merger with xAI and the financial opacity of a private company. We dissect the Manhattan/Finagle technical legacy through to Grok integration."
lead: "Publish your entire recommendation algorithm on GitHub — no other social network does that. The same company discloses zero financial statements. We dissect X, where transparency and opacity coexist, around the pivot point of the 2025 xAI merger."
category: media
tags: [social-media, ai, open-source, moderation, x-corp]
publishedAt: "2026-07-20"
updatedAt: "2026-07-20"
lastVerified: "2026-07-20"
serviceUrl: "https://x.com/"
vendor: "X Corp (xAI Holdings Corp)"
origin: "US"
heroTheme: "x"
scores: { product: 3.5, ux: 3.5, tech: 4.0, business: 3.0 }
techStack:
  - layer: "Distributed database"
    name: "Manhattan"
    confidence: confirmed
    evidence: "Official engineering blog describes it as an in-house real-time multi-tenant distributed database powering Tweets, DMs, and ads (published 2014, with technical updates as late as 2022)"
    evidenceUrl: "https://blog.x.com/engineering/en_us/a/2014/manhattan-our-real-time-multi-tenant-distributed-database-for-twitter-scale"
  - layer: "Service-to-service RPC"
    name: "Finagle"
    confidence: confirmed
    evidence: "Named as the RPC layer underlying Manhattan and other systems across multiple official engineering blog posts"
    evidenceUrl: "https://blog.x.com/engineering/en_us"
  - layer: "Recommendation algorithm"
    name: "The Algorithm (open source)"
    confidence: confirmed
    evidence: "The official GitHub repository (twitter/the-algorithm) open-sources the For You timeline's recommendation algorithm — published March 2023, 73k+ stars as of 2026-07-20"
    evidenceUrl: "https://github.com/twitter/the-algorithm"
  - layer: "Moderation"
    name: "Community Notes (scoring algorithm open source)"
    confidence: confirmed
    evidence: "The official GitHub repository (twitter/communitynotes) publishes note-scoring/ranking code and data, actively maintained (a commit confirmed as recently as 2026-07-17)"
    evidenceUrl: "https://github.com/twitter/communitynotes"
  - layer: "AI integration"
    name: "Grok (xAI)"
    confidence: confirmed
    evidence: "After the March 2025 merger with xAI, Grok 3 and later were bundled into X Premium+, confirmed by official pricing changes such as the SuperGrok Heavy tier"
    evidenceUrl: "https://x.com/elonmusk/status/1905731750275510312"
  - layer: "Edge / CDN"
    name: "Cloudflare + Envoy"
    confidence: likely
    evidence: "Our HTTP header observation (server: cloudflare envoy, 2026-07-20); no official documentation found"
sources:
  - label: "Elon Musk (official X post): announcing xAI's acquisition of X, valuing it at $80B + $33B (2025-03-28)"
    url: "https://x.com/elonmusk/status/1905731750275510312?lang=en"
    accessedAt: "2026-07-20"
  - label: "Official GitHub: The X Recommendation Algorithm"
    url: "https://github.com/twitter/the-algorithm"
    accessedAt: "2026-07-20"
  - label: "Official GitHub: Community Notes (scoring code, actively maintained)"
    url: "https://github.com/twitter/communitynotes"
    accessedAt: "2026-07-20"
  - label: "X official engineering blog: Manhattan (2014)"
    url: "https://blog.x.com/engineering/en_us/a/2014/manhattan-our-real-time-multi-tenant-distributed-database-for-twitter-scale"
    accessedAt: "2026-07-20"
  - label: "WebProNews: Premium+ raised to $40/month following Grok 3 launch (2025-02)"
    url: "https://www.webpronews.com/x-raises-premium-subscription-to-40-per-month-on-the-strength-of-grok-3/"
    accessedAt: "2026-07-20"
---

For years, the standing complaint about social networks has been "show me the algorithm." Exactly one company answered that directly: X published its entire recommendation algorithm and its fact-checking scoring code on GitHub. The same company discloses zero financial statements. We dissect X — where transparency and opacity twist together — around the pivot point of the 2025 xAI merger. It's a different answer to the same question — who owns a platform — from the opposite path taken by [Bluesky](/en/articles/bluesky).

## What the service is

X is the microblogging social network formerly known as Twitter, renamed in 2023. Elon Musk took it private in October 2022, and in March 2025 merged it with his AI company xAI.

:::fact
Per Musk's own X post (March 28, 2025), xAI acquired X in an all-stock transaction valuing xAI at $80 billion and X at $33 billion (a $45 billion enterprise value less $12 billion in debt), consolidated under holding company xAI Holdings Corp. X's head of product, Nikita Bier, has stated subscription revenue reached a $1 billion annualized run rate (reported across multiple outlets). Premium+ rose to $40/month after the February 2025 launch of Grok 3, with the higher-tier SuperGrok Heavy ($300/month) added in July 2025.
:::

:::pull
A company that publishes its own algorithm to the world, and discloses its own earnings to no one — no other company embodies this contradiction as fully as X.
:::

::scorecard

## UX analysis

X's UX has two faces: a laboratory for transparency, and a platform subject to Musk's mercurial product changes.

- **Community Notes is a best-in-class implementation.** Displaying a note only when users from different perspectives agree demonstrates a third path between centralized fact-checking and a free-for-all — and because the scoring algorithm itself is public, it's independently verifiable.
- **The open-sourced recommendation algorithm is symbolically strong but of limited practical use.** The "The Algorithm" repository, published in March 2023, gathered over 70,000 stars, but GitHub activity stalled in September 2025 — there's no guarantee it still matches the current production algorithm. A transparency gesture and traceable operations are two different things.
- **Restrictions on free users keep expanding.** Bookmark caps, reply ranking, and view limits have grown incrementally as levers toward paid conversion, with revenue funnels increasingly taking priority over UX consistency.
- **Grok integration erodes the timeline from outside in.** AI features like post summarization and reply generation keep expanding as part of the paid bundle, blurring the line between a social feed and an AI assistant.

## Tech stack

::techstack

:::fact
Manhattan (an in-house multi-tenant distributed database) and Finagle (the service-to-service RPC layer) have been documented in detail on the official engineering blog since the Twitter era, with technical updates confirmed as late as 2022. The recommendation algorithm was published to GitHub as "The Algorithm" in March 2023, and Community Notes' scoring code is maintained on an official repository with ongoing updates (confirmed as recently as July 17, 2026). Since the xAI merger, Grok (xAI's LLM) has been bundled into Premium+, with pricing revised in step with Grok's model generations (3 → 4 → 4.5).
:::

:::guess
Our observation found Cloudflare and Envoy headers, suggesting the edge layer has moved partly toward cloud/standardized infrastructure from Twitter's original self-hosted stack. That "The Algorithm" activity stalled in September 2025 likely reflects either fading enthusiasm for the initial transparency push, or engineering resources being redirected toward xAI integration. Community Notes, by contrast, continues to be actively maintained — suggesting moderation transparency specifically remains a maintained management commitment.
:::

## Business model

X's revenue is being restructured around three pillars: advertising, subscriptions, and the AI bundle with xAI.

:::fact
Musk's 2022 acquisition is widely reported to have been a leveraged buyout carrying roughly $13 billion in debt, and X has disclosed no financial statements as a private company since. The March 2025 xAI merger folded X's standalone finances into the holding company xAI Holdings Corp. Subscription revenue is reported to have reached a roughly $1 billion annualized run rate.
:::

:::guess
Advertising revenue appears to still be recovering from advertiser exodus after the acquisition, and public information alone can't verify its exact scale. The xAI merger likely aims to offset that ad-revenue uncertainty with a new AI subscription revenue stream — bundling Grok into X effectively turns X's user base into a customer-acquisition-cost reducer for xAI. With finances undisclosed, there's limited means for outsiders to verify whether that bet is actually working.
:::

Transparency and opacity. X offers a rare window into its platform's algorithm while its actual business grows harder and harder to see. That the company that pushed social media's "algorithmic visibility" furthest has simultaneously become one of the least visible companies may be the single sentence that most accurately describes X today.
