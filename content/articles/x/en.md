---
service: "X"
title: "The Company That Open-Sources Its Algorithm Got Swallowed by an AI Company, Then a Rocket Company — X's Transparency and Its Newly Visible Finances"
description: "X, the successor to Twitter, holds an unusual transparency by open-sourcing two things — its recommendation algorithm and Community Notes. It merged with xAI in 2025 and, in February 2026, became a SpaceX subsidiary along with xAI. We dissect the numbers SpaceX's IPO disclosed for the first time, and the Manhattan/Finagle technical legacy through to Grok integration."
lead: "Publish your entire recommendation algorithm on GitHub — no other social network does that. The same company disclosed no financials after going private in 2022, until its parent SpaceX went public and ad revenue and paid-subscriber counts started appearing in SEC filings. We dissect X, where what is visible and what is not are trading places, around two pivot points — the xAI merger and the move under SpaceX."
category: media
tags: [social-media, ai, open-source, moderation, x-corp]
publishedAt: "2026-07-20"
updatedAt: "2026-10-02"
lastVerified: "2026-10-02"
serviceUrl: "https://x.com/"
vendor: "X Corp. (Space Exploration Technologies Corp.)"
origin: "US"
heroTheme: "x"
scores: { product: 3.5, ux: 3.5, tech: 4.0, business: 3.0 }
techStack:
  - layer: "Distributed database"
    name: "Manhattan"
    confidence: confirmed
    evidence: "Official engineering blog describes it as an in-house real-time multi-tenant distributed database built to serve millions of queries per second at low latency (published April 2, 2014; as of 2026-10-02 the live page returns a bot-check screen, so the text was confirmed in the Wayback Machine capture of 2026-06-03)"
    evidenceUrl: "https://blog.x.com/engineering/en_us/a/2014/manhattan-our-real-time-multi-tenant-distributed-database-for-twitter-scale"
  - layer: "Service-to-service RPC"
    name: "Finagle"
    confidence: confirmed
    evidence: "Published in the official GitHub repository (twitter/finagle) as a fault-tolerant, protocol-agnostic RPC system; an update on August 13, 2026 was confirmed"
    evidenceUrl: "https://github.com/twitter/finagle"
  - layer: "Recommendation algorithm"
    name: "X For You Feed Algorithm (open source)"
    confidence: confirmed
    evidence: "The official GitHub repository (xai-org/x-algorithm) publishes the core code of the For You feed — created January 2026, mostly Rust, Apache-2.0, 33k+ stars, with an update confirmed on 2026-10-01. The older twitter/the-algorithm repository (published March 2023, 73k+ stars) has had no updates since September 2025 (all as of 2026-10-02)"
    evidenceUrl: "https://github.com/xai-org/x-algorithm"
  - layer: "Moderation"
    name: "Community Notes (scoring algorithm open source)"
    confidence: confirmed
    evidence: "The official GitHub repository (twitter/communitynotes) publishes note-scoring/ranking code and data, actively maintained (a commit confirmed as recently as 2026-10-01)"
    evidenceUrl: "https://github.com/twitter/communitynotes"
  - layer: "AI integration"
    name: "Grok (xAI)"
    confidence: confirmed
    evidence: "SpaceX's Form S-1 (2026-05-20) describes native integration of Grok's models into X and says the Basic, Premium and Premium+ tiers include priority Grok interactions. xAI's developer documentation shows Grok 4.7 as the latest model (2026-10-02)"
    evidenceUrl: "https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm"
  - layer: "Edge / CDN"
    name: "Cloudflare + Envoy"
    confidence: likely
    evidence: "Our HTTP header observation (server: cloudflare envoy, 2026-10-02); no official documentation found"
sources:
  - label: "SEC: SpaceX Form S-1 (filed 2026-05-20; acquisition of xAI and X, MAU, paid subscribers, revenue breakdown, X's borrowings)"
    url: "https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm"
    accessedAt: "2026-10-02"
  - label: "SEC: SpaceX Form 10-Q (quarter ended June 2026; IPO completion, advertising revenue, repayment of X's term loans)"
    url: "https://www.sec.gov/Archives/edgar/data/1181412/000162828026052535/spcx-20260630.htm"
    accessedAt: "2026-10-02"
  - label: "Elon Musk (official X post): announcing xAI's acquisition of X, valuing it at $80B + $33B (2025-03-28)"
    url: "https://x.com/elonmusk/status/1905731750275510312?lang=en"
    accessedAt: "2026-10-02"
  - label: "Official GitHub: X For You Feed Algorithm (xai-org/x-algorithm)"
    url: "https://github.com/xai-org/x-algorithm"
    accessedAt: "2026-10-02"
  - label: "Official GitHub: The X Recommendation Algorithm (older repository)"
    url: "https://github.com/twitter/the-algorithm"
    accessedAt: "2026-10-02"
  - label: "Official GitHub: Community Notes (scoring code, actively maintained)"
    url: "https://github.com/twitter/communitynotes"
    accessedAt: "2026-10-02"
  - label: "Official GitHub: Finagle"
    url: "https://github.com/twitter/finagle"
    accessedAt: "2026-10-02"
  - label: "X official engineering blog: Manhattan (2014)"
    url: "https://blog.x.com/engineering/en_us/a/2014/manhattan-our-real-time-multi-tenant-distributed-database-for-twitter-scale"
    accessedAt: "2026-10-02"
  - label: "App Store (US): X in-app purchases (Premium Basic $4 / Premium $11 / Premium Plus $50)"
    url: "https://apps.apple.com/us/app/x/id333903271"
    accessedAt: "2026-10-02"
  - label: "App Store (Japan): X in-app purchases (Premium Basic ¥450 / Premium ¥1,270 / Premium Plus ¥8,000)"
    url: "https://apps.apple.com/jp/app/x/id333903271"
    accessedAt: "2026-10-02"
  - label: "xAI developer documentation: Grok models and pricing"
    url: "https://docs.x.ai/docs/models"
    accessedAt: "2026-10-02"
  - label: "WebProNews: Premium+ raised to $40/month following Grok 3 launch (2025-02)"
    url: "https://www.webpronews.com/x-raises-premium-subscription-to-40-per-month-on-the-strength-of-grok-3/"
    accessedAt: "2026-10-02"
---

For years, the standing complaint about social networks has been "show me the algorithm." Exactly one company answered that directly: X published its entire recommendation algorithm and its fact-checking scoring code on GitHub. The same company disclosed no financials after going private in 2022 — until its parent SpaceX went public in 2026 and ad revenue and paid-subscriber counts became readable in SEC filings. We dissect X — where transparency and opacity twist together — around two pivot points, the 2025 xAI merger and the 2026 move under SpaceX. It's a different answer to the same question — who owns a platform — from the opposite path taken by [Bluesky](/en/articles/bluesky).

## What the service is

X is the microblogging social network formerly known as Twitter, renamed in 2023. Elon Musk took it private in October 2022, merged it with his AI company xAI in March 2025, and in February 2026 it became a wholly owned SpaceX subsidiary along with xAI.

:::fact
Per Musk's own X post (March 28, 2025), xAI acquired X in an all-stock transaction valuing xAI at $80 billion and X at $33 billion (a $45 billion enterprise value less $12 billion in debt). SpaceX's Form S-1 (filed May 20, 2026) states that SpaceX acquired X.AI Holdings Corp. effective February 2, 2026, and describes X Corp. as an indirect subsidiary. SpaceX completed its initial public offering in June 2026 and listed on Nasdaq as "SPCX" (Form 10-Q). According to the S-1, Grok and X combined had approximately 550 million monthly active users as of March 31, 2026, and X Premium and Premium+ had approximately 4.4 million paid subscribers. As of October 2, 2026, the App Store lists in-app purchases of $4/month for Premium Basic, $11/month for Premium and $50/month for Premium Plus in the US, and ¥450, ¥1,270 and ¥8,000 in Japan. Premium+ was reported at the time to have risen to $40/month after the February 2025 launch of Grok 3.
:::

:::pull
The algorithm is readable on GitHub and the revenue in SEC filings. Only X's own profit and loss appears in neither.
:::

::scorecard

## UX analysis

X's UX has two faces: a laboratory for transparency, and a platform subject to Musk's mercurial product changes.

- **Community Notes is a best-in-class implementation.** Displaying a note only when users from different perspectives agree demonstrates a third path between centralized fact-checking and a free-for-all — and because the scoring algorithm itself is public, it's independently verifiable.
- **The open-sourced recommendation algorithm has moved to a new repository.** "The Algorithm," published in March 2023, gathered over 70,000 stars and then went quiet in September 2025. In January 2026 the "X For You Feed Algorithm" appeared under xAI's organization, and in August 2026 it added scoring weights and visibility-filtering code. Its README has a "What's not in this repo?" section, so the publisher itself states where the disclosure ends.
- **Features are split across three paid tiers.** SpaceX's prospectus says the Basic, Premium and Premium+ tiers offer expanded features, ad-reduced experiences and priority Grok interactions. The gap between free and paid is itself designed as the revenue funnel.
- **Grok integration spreads from outside the timeline in.** The company says it intends to embed Grok further into discovery, analysis of posts, user support and personalization, and reports that approximately 117 million monthly users used Grok's AI features as of March 31, 2026. The line between a social feed and an AI assistant keeps blurring.

## Tech stack

::techstack

:::fact
Manhattan (an in-house multi-tenant distributed database) was documented in detail on the official engineering blog in the Twitter era (2014), and Finagle (the service-to-service RPC layer) is maintained in an official repository updated as recently as August 2026. The recommendation algorithm was published to GitHub as "The Algorithm" in March 2023, and since January 2026 publication has continued in a separate repository, "x-algorithm" (mostly Rust, Apache-2.0). According to its README, posts are ranked with a transformer model. Community Notes' scoring code is also maintained on an official repository (updates to both confirmed on October 1, 2026). Premium+ has gone from $40/month in February 2025 (as reported at the time) to $50/month on the App Store as of October 2, 2026.
:::

:::guess
Our observation found Cloudflare and Envoy headers, suggesting the edge layer has moved partly toward cloud/standardized infrastructure from Twitter's original self-hosted stack. That "The Algorithm" went quiet in September 2025 and a new repository appeared under xAI's organization four months later likely reflects the recommendation system itself being rebuilt on xAI's technical foundation. Community Notes has been maintained throughout, suggesting moderation transparency has been kept across the changes in corporate structure.
:::

## Business model

X's revenue is being restructured around three pillars: advertising, subscriptions, and the bundle with Grok. In SpaceX's financial statements, all three sit inside the "AI" segment.

:::fact
According to SpaceX's Form S-1, X Corp. entered into a $6.705 billion term loan, a $500 million revolving facility and two $3 billion bridge facilities in 2022, for roughly $13.2 billion of acquisition-era borrowing capacity. The Form 10-Q for the quarter ended June 2026 states that X's term loans were repaid with a SpaceX bridge loan. Advertising revenue was $2.323 billion in 2023, $1.728 billion in 2024 and $1.844 billion in 2025, and $367 million in the April–June 2026 quarter (versus $426 million a year earlier); the company attributes the decline to its transition to a new advertising platform. X and Grok subscription revenue grew by $365 million in 2025 from the prior year. X's standalone profit and loss is not reported separately.
:::

:::guess
Advertising revenue has not returned to its 2023 level, and subscriptions and Grok appear to be filling the gap. The prospectus describes X as a "foundational distribution and data engine for the AI ecosystem," which suggests X's role is shifting from an advertising business in its own right toward a channel for acquiring Grok users and a source of training data. With X's standalone results undisclosed, there are limited means for outsiders to verify how that shift has changed X's own economics.
:::

Transparency and opacity. X still offers a rare window into its platform's algorithm. Finances that were once invisible have become partly visible through its parent's listing — but as one line inside a giant that bundles space, connectivity and AI. How much X earns and spends as a social network still can't be fully read from outside.
