---
service: "Spotify"
title: "The 'Spotify Model' No Longer Exists — What's Actually Running Is a Machine That Updates 10,000 Repos at Once"
description: "Spotify, the music-streaming giant, dissected: the legendary 'squad' organizational model's real status today, the migration from Kafka to Google Cloud Pub/Sub, and Fleet Management — the system that auto-updates thousands of repositories at once — from the official engineering blog and SEC filings."
lead: "Every agile practitioner has heard of 'the Spotify model.' But Spotify itself moved on from that 2012 snapshot long ago. Behind the legend, something quieter — and far more consequential — is what's actually still running."
category: media
tags: [music-streaming, cloud-migration, engineering-culture, subscription, audio]
publishedAt: "2026-07-20"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://open.spotify.com/"
vendor: "Spotify Technology S.A."
origin: "SE"
heroTheme: "spotify"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 4.0 }
techStack:
  - layer: "Cloud platform"
    name: "Google Cloud Platform"
    confidence: confirmed
    evidence: "Official engineering blog: migrated to GCP in stages starting 2016 and retired all four of its own data centers by 2018"
    evidenceUrl: "https://engineering.atspotify.com/2019/12/views-from-the-cloud-a-history-of-spotifys-journey-to-the-cloud-part-1-2"
  - layer: "Event delivery infrastructure"
    name: "Google Cloud Pub/Sub (旧Kafkaから移行)"
    confidence: confirmed
    evidence: "Official engineering blog: migrated from an older Kafka-based system to Google Cloud Pub/Sub in 2016-2017, decommissioning the old system in February 2017"
    evidenceUrl: "https://engineering.atspotify.com/2019/11/spotifys-event-delivery-life-in-the-cloud"
  - layer: "Infrastructure operating model"
    name: "Fleet Management（数千リポジトリの自動一斉変更）"
    confidence: confirmed
    evidence: "Official engineering blog (2023-04): shifted to automatically applying changes across thousands of repositories at once rather than case-by-case, deploying a Log4j fix to 80% of production within 9 hours"
    evidenceUrl: "https://engineering.atspotify.com/2023/04/spotifys-shift-to-a-fleet-first-mindset-part-1"
  - layer: "Edge / load balancing"
    name: "Envoy"
    confidence: confirmed
    evidence: "An incident report on the official engineering blog (2025-05-09) states that Spotify uses Envoy Proxy for its networking perimeter systems. This matches our HTTP header observation (server: envoy / x-envoy-upstream-service-time, 2026-07-20 and 2026-09-28)"
    evidenceUrl: "https://engineering.atspotify.com/2025/05/incident-report-spotify-outage-on-april-16-2025"
sources:
  - label: "Spotify official engineering blog: Fleet Management at Spotify Part 1 (2023-04)"
    url: "https://engineering.atspotify.com/2023/04/spotifys-shift-to-a-fleet-first-mindset-part-1"
    accessedAt: "2026-07-20"
  - label: "Spotify official engineering blog: a history of Spotify's journey to the cloud (2019-12)"
    url: "https://engineering.atspotify.com/2019/12/views-from-the-cloud-a-history-of-spotifys-journey-to-the-cloud-part-1-2"
    accessedAt: "2026-07-20"
  - label: "Spotify official engineering blog: Event Delivery – Life in the Cloud (2019-11 — Kafka to Pub/Sub)"
    url: "https://engineering.atspotify.com/2019/11/spotifys-event-delivery-life-in-the-cloud"
    accessedAt: "2026-07-20"
  - label: "SEC Form 6-K (Spotify Technology S.A. — Q4 and full-year 2025 results, 2026-02-10)"
    url: "https://www.sec.gov/Archives/edgar/data/1639920/000114036126004482/ef20065075_ex99-1.htm"
    accessedAt: "2026-09-28"
  - label: "45 Degrees: The death of the 'Spotify Model'"
    url: "https://45degrees.be/the-death-of-the-spotify-model/"
    accessedAt: "2026-07-20"
  - label: "SEC Form 6-K (Spotify Technology S.A. — Q2 2026 interim financial report)"
    url: "https://www.sec.gov/Archives/edgar/data/0001639920/000162828026052543/spot-20260630x6xk.htm"
    accessedAt: "2026-09-28"
  - label: "Spotify official engineering blog: incident report on the April 16, 2025 outage (2025-05-09 — Envoy Proxy at the perimeter)"
    url: "https://engineering.atspotify.com/2025/05/incident-report-spotify-outage-on-april-16-2025"
    accessedAt: "2026-09-28"
---

Squads, tribes, chapters, guilds — anyone in the agile world knows these four words. Companies everywhere have tried to copy this organizational model as "the Spotify model." But Spotify itself set the framework aside over a decade ago. Behind the legend, what's still actually running is quieter, and operates at a far larger scale.

## What the service is

Spotify is a Swedish music, podcast, and audiobook streaming service, founded in 2006 and now listed on the NYSE via American Depositary Shares.

:::fact
Per its SEC filing (full-year 2025 results), Spotify ended 2025 with 751 million monthly active users (MAU) and 290 million Premium subscribers, with annual revenue of €17.19 billion (up 9.7% year over year) — of which Premium subscriber revenue was €15.35 billion, 89.3% of total revenue. By the end of June 2026, MAU had grown to 777 million and Premium subscribers to 300 million (Q2 2026 filing). "The Spotify model" traces back to a 2012 paper, "Scaling Agile @ Spotify," by Henrik Kniberg and Anders Ivarsson, who have since repeatedly explained it was only a snapshot of that moment, never intended as a generic framework.
:::

:::pull
While the world kept copying "the Spotify model," Spotify itself had already moved on to the next problem: how do you move 10,000 repositories at once?
:::

::scorecard

## UX analysis

Spotify's UX centers on machine-learning-driven curation, polished to minimize the need for active searching.

- **Discover Weekly and Wrapped became the face of the experience.** Auto-generated playlists from listening history and the annual year-in-review are less a feature than a symbol of the Spotify brand itself.
- **The free tier functions as an entry point, constraints included.** The ad-supported free plan is both a funnel toward paid conversion and an exposure point for content beyond music — podcasts and audiobooks.
- **The audiobook expansion tests UX consistency.** Folding books into a music app can read as feature bloat to existing users, and as the platform's scope widens, the tension with "simplicity as a music app" persists.
- **Reaction to price increases is quiet but consequential.** With Premium accounting for nearly 90% of revenue, sensitivity to pricing changes ties directly to the health of the whole business.

## Tech stack

::techstack

:::fact
Per the official engineering blog, Spotify migrated to Google Cloud Platform in stages starting in 2016 and had retired all four of its self-operated data centers by 2018. Event delivery infrastructure originally depended on an older Kafka version paired with Hadoop, but migrated to Google Cloud Pub/Sub in 2016-2017, fully decommissioning the old system in February 2017. An official blog post from April 2023 describes a shift to "Fleet Management" — automatically applying changes across thousands of repositories at once rather than case by case — citing a Log4j vulnerability fix deployed to 80% of production within 9 hours. The same post notes a single Java runtime upgrade once took eight months and roughly 2,000 semi-automated pull requests. An official incident report from May 2025 states that Spotify uses Envoy Proxy for its networking perimeter, the first software to receive users' traffic.
:::

:::guess
Moving from Kafka to Google Cloud Pub/Sub looks like a response to a specific design weakness — the Kafka version in use at the time couldn't persist events, making Hadoop a single point of failure — rather than a general aversion to Kafka. The investment in Fleet Management likely reflects an organization with hundreds of development teams hitting the limits of relying on individual teams' goodwill to apply changes. It suggests an ongoing internal tension between the autonomous, decentralized ideal the "Spotify model" represented and the centralized, bulk control that operating at real scale actually requires.
:::

## Business model

Spotify's revenue structure leans almost entirely on Premium subscriptions.

:::fact
Per its SEC filing, of €17.19 billion in full-year 2025 revenue, Premium subscriber revenue was €15.35 billion (89.3%), with the Ad-Supported business — including advertising revenue — making up roughly the remaining tenth. At the end of 2025, Premium subscribers stood at 290 million and MAU at 751 million. In Q2 2026, revenue was €4.777 billion, of which Premium was €4.331 billion (90.7%) and Ad-Supported €446 million; at the end of June, Premium subscribers were 300 million and MAU 777 million.
:::

:::guess
The extreme reliance on Premium revenue likely reflects the structurally thin margins of music streaming, where label royalty payments eat into gross profit; expansion into podcasts and audiobooks plausibly aims to capture higher-margin business to offset that. The scale of free users (the gap between MAU and Premium subscribers, over 400 million) represents significant potential ad inventory, but with Ad-Supported still around a tenth of revenue, whether Spotify can meaningfully scale ad revenue beyond music remains the open question going forward.
:::

The myth of "the Spotify model" has outlived the real Spotify that inspired it. While the ideal of autonomous squads got the press, the actual Spotify was quietly building a centralized machine to move 10,000 repositories at once — and that tension between ideal and scale may be the truest description of the company there is.
