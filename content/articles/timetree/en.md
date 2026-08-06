---
service: "TimeTree"
title: "The Only Ledger Filled with the Future — What TimeTree Moved 15 Billion Records to Protect"
description: "TimeTree is a calendar-sharing app where 70 million people write down their plans. We dissect its extraordinary 85% WAU/MAU, the 15-billion-record migration from Aurora to Cloud Spanner, and an ad business that sells the future itself."
lead: "Everything written in a calendar has yet to happen. Born in 2015, TimeTree spent a decade turning that truism into a business. Seventy million registered users worldwide; 85% WAU/MAU in Japan. In 2025 it moved a 15-billion-record database from Aurora to Cloud Spanner wholesale. We dissect what is inside the unremarkable-looking vessel called a shared calendar."
category: consumer-app
tags: [calendar, family, advertising, google-cloud, spanner]
publishedAt: "2026-08-06"
updatedAt: "2026-08-06"
lastVerified: "2026-08-06"
serviceUrl: "https://timetreeapp.com/"
vendor: "TimeTree, Inc."
origin: "JP"
heroTheme: "timetree-calendar"
scores: { product: 4.5, ux: 4.5, tech: 4.5, business: 4.0 }
techStack:
  - layer: "Database"
    name: "Google Cloud Spanner"
    confidence: confirmed
    evidence: "Stated in the official Google Cloud customer story (2025-07-25); over 15 billion records migrated off a MySQL-based database"
    evidenceUrl: "https://cloud.google.com/blog/ja/topics/customers/timetree-migration-to-spanner-ensures-service-continuity"
  - layer: "Data migration"
    name: "Datastream / Spanner 移行ツール"
    confidence: confirmed
    evidence: "Stated in the same customer story, which notes the migration tooling was tuned for performance together with the Google Cloud engineering team"
    evidenceUrl: "https://cloud.google.com/blog/ja/topics/customers/timetree-migration-to-spanner-ensures-service-continuity"
  - layer: "Server application"
    name: "Ruby on Rails"
    confidence: confirmed
    evidence: "Stated in the officially published tech stack (2020-04-21). Consistent with our own HTTP header observation (Rails-style x-runtime / x-request-id headers, 2026-08-06)"
    evidenceUrl: "https://timetreeapp.com/intl/ja/newsroom/2020-04-21/technology-stack"
  - layer: "Container platform"
    name: "Cloud Run"
    confidence: confirmed
    evidence: "Listed in the Google Cloud customer story among the services used after migration"
    evidenceUrl: "https://cloud.google.com/blog/ja/topics/customers/timetree-migration-to-spanner-ensures-service-continuity"
  - layer: "Cache"
    name: "Memorystore for Valkey"
    confidence: confirmed
    evidence: "Listed in the same customer story among the services used after migration"
    evidenceUrl: "https://cloud.google.com/blog/ja/topics/customers/timetree-migration-to-spanner-ensures-service-continuity"
  - layer: "Messaging"
    name: "Pub/Sub"
    confidence: confirmed
    evidence: "Listed in the same customer story among the services used after migration"
    evidenceUrl: "https://cloud.google.com/blog/ja/topics/customers/timetree-migration-to-spanner-ensures-service-continuity"
  - layer: "Delivery"
    name: "Cloud CDN / Cloud Load Balancing"
    confidence: confirmed
    evidence: "Listed in the same customer story. Consistent with our own HTTP header observation (server: Google Frontend / via: 1.1 google, 2026-08-06)"
    evidenceUrl: "https://cloud.google.com/blog/ja/topics/customers/timetree-migration-to-spanner-ensures-service-continuity"
  - layer: "Analytics"
    name: "BigQuery / Looker"
    confidence: confirmed
    evidence: "Listed in the same customer story among the services used after migration"
    evidenceUrl: "https://cloud.google.com/blog/ja/topics/customers/timetree-migration-to-spanner-ensures-service-continuity"
  - layer: "Mobile apps"
    name: "Swift (iOS) / Kotlin (Android)"
    confidence: confirmed
    evidence: "Stated in the officially published tech stack (2020-04-21); CI/CD via Bitrise and fastlane"
    evidenceUrl: "https://timetreeapp.com/intl/ja/newsroom/2020-04-21/technology-stack"
  - layer: "Web frontend"
    name: "React / TypeScript（Jotai・React Query・Playwright）"
    confidence: confirmed
    evidence: "The TimeTree Tech Blog stack-evolution post (Zenn, 2023-12-01) documents the moves from Redux to Jotai and from WebdriverIO to Playwright"
    evidenceUrl: "https://zenn.dev/timetree/articles/81c2adaeb29834"
  - layer: "Corporate site"
    name: "Next.js"
    confidence: confirmed
    evidence: "Our own HTTP header observation (x-powered-by: Next.js / x-next-i18n-router-locale, 2026-08-06)"
    evidenceUrl: "https://timetreeapp.com/intl/ja"
sources:
  - label: "TimeTree newsroom: UI/UX renewal and the new Discover feature (2026-01-13; 70M registered users)"
    url: "https://timetreeapp.com/intl/ja/newsroom/2026-01-13/timetree-renewal"
    accessedAt: "2026-08-06"
  - label: "TimeTree newsroom: 10th anniversary infographics (2025-03-24)"
    url: "https://timetreeapp.com/intl/ja/newsroom/2025-03-24/timetree-10th-anniversary-infographics"
    accessedAt: "2026-08-06"
  - label: "Google Cloud blog: TimeTree's migration to Spanner secures service continuity (2025-07-25)"
    url: "https://cloud.google.com/blog/ja/topics/customers/timetree-migration-to-spanner-ensures-service-continuity"
    accessedAt: "2026-08-06"
  - label: "Speaker Deck: TimeTree — the decision and background behind migrating from Aurora to Spanner (2024-06-13)"
    url: "https://speakerdeck.com/3utama/timetree-aurora-kara-spanner-heno-yi-xing-nojue-duan-tobei-jing"
    accessedAt: "2026-08-06"
  - label: "TimeTree newsroom: post-maintenance issues resolved (2025-01-12, the day of the migration cutover)"
    url: "https://timetreeapp.com/intl/ja/newsroom/2025-01-12/2025-1-12-issue-resolution"
    accessedAt: "2026-08-06"
  - label: "TimeTree newsroom: publishing our latest technology stack (2020-04-21)"
    url: "https://timetreeapp.com/intl/ja/newsroom/2020-04-21/technology-stack"
    accessedAt: "2026-08-06"
  - label: "Zenn / TimeTree Tech Blog: the evolution of the TimeTree web stack (2023-12-01)"
    url: "https://zenn.dev/timetree/articles/81c2adaeb29834"
    accessedAt: "2026-08-06"
  - label: "TimeTree Ads media guide, 2024.10-12 (official PDF)"
    url: "https://static.timetreeads.com/docs/timetreeads_mediaguide_20241012.pdf"
    accessedAt: "2026-08-06"
  - label: "TimeTree newsroom: general availability of the TimeTree Ads platform (2018-07-03)"
    url: "https://timetreeapp.com/intl/ja/newsroom/2018-07-03/ads-release"
    accessedAt: "2026-08-06"
  - label: "TimeTree newsroom: connected-TV delivery via future-behavior targeting (2025-06-23)"
    url: "https://timetreeapp.com/intl/ja/newsroom/2025-06-23/timetree-ads-ctv-delivery"
    accessedAt: "2026-08-06"
  - label: "TimeTree newsroom: store-visit measurement after ad exposure (2025-10-15)"
    url: "https://timetreeapp.com/intl/ja/newsroom/2025-10-15/timetree-ads-store-visit-measurement"
    accessedAt: "2026-08-06"
  - label: "TimeTree newsroom: launch of the paid TimeTree Premium plan (2022-04-19)"
    url: "https://timetreeapp.com/intl/ja/newsroom/2022-04-19/timetree-premium"
    accessedAt: "2026-08-06"
  - label: "CodeZine: the organizational thinking behind TimeTree's evolution past 65M users (2025-08-18)"
    url: "https://codezine.jp/article/detail/21914"
    accessedAt: "2026-08-06"
  - label: "TimeTree: company profile"
    url: "https://timetreeapp.com/intl/ja/corporate"
    accessedAt: "2026-08-06"
---

Almost all data in the world is a log of the past. Search history, purchase history, watch history — every one of them records something already finished, and companies pour machine learning over the pile in a desperate attempt to infer what comes next. Yet there is exactly one place where users write down the future by hand: a calendar. TimeTree spent ten years mining that single fact.

## What It Is

TimeTree is a calendar app designed around sharing from the start. If Google Calendar is a tool for managing your own schedule, TimeTree is a tool for holding a schedule jointly with someone else. Families, couples, clubs, shift-based workplaces — several people write into one calendar, and every entry carries its own comment thread.

:::fact
According to the official newsroom, TimeTree reached 70 million registered users worldwide in November 2025, ten years after its 2015 launch (over 60 million as of October 2024, including more than 27 million in Japan). It is used in over 200 countries and regions; outside Japan the largest user bases are, in order, the United States, Germany, Taiwan, the United Kingdom, South Korea, France, and Australia. The 10th anniversary infographics report that cumulative registered events passed 11 billion in November 2024 — the equivalent of 36 new events created every second. TimeTree, Inc. was founded in September 2014, is headquartered in Nishi-Shinjuku, Tokyo, and also maintains an office in Seoul.
:::

Structurally, the decisive detail is that the comment thread hangs off the event itself. "What time are we leaving on Saturday?" "Who is going to the daycare meeting?" — these negotiations conclude inside the calendar rather than in a chat app. The event stops being a topic of conversation and becomes the container for it.

:::pull
Everything written into a calendar is, without exception, about the future. Social apps, search, and commerce all work with logs of past behavior; TimeTree's ledger alone is filled with things that have not happened yet.
:::

::scorecard

## UX Analysis

Shared calendars are not a rare category. What sets TimeTree apart is the depth of habit visible in its numbers.

:::fact
According to the official TimeTree Ads media guide (2024.10-12 edition), WAU/MAU in Japan is 85%, and has stayed above 70% for the eight years since launch. An average of 37 events per month are created per calendar, and store ratings as of August 2024 were 4.6 on the App Store and 4.7 on Google Play. The same guide frames the expected usage pattern as three moments a day: checking today's schedule in the morning, exchanging messages with calendar partners during the day, and reviewing tomorrow and beyond at night.
:::

An 85% WAU/MAU is an exceptional figure for a consumer app, and the design holding it up has nothing to do with flashy features.

- **You open it because someone else is there.** Forgetting to check your own calendar costs you nothing; an event a partner wrote demands to be seen. Usage frequency is determined not by your own intent but by other people's writing.
- **Quitting requires consensus.** Switching costs live not in your event data but in the shared habits built with other people. Migrating an entire family's calendar to another service is a far heavier negotiation than any feature comparison.
- **The negotiation finishes in place.** Because every event carries comments, coordinating a time never requires a round trip to a messaging app. Keeping events and conversation in the same place converts directly into session time.
- **There is always a reason to write.** Where photo-sharing apps depend on the irregular event of a child growing up, plans occur every single week. Running out of things to post is structurally impossible.

On January 13, 2026, TimeTree announced its largest UI/UX renewal in a decade. The old presentation, which lined calendars up as separate boxes per sharing group, gives way to a home calendar that layers multiple calendars around your own time, alongside a new Discover feature. It surfaces trending events (plans whose registration counts are spiking across TimeTree), recommended events and sales a little way out, and updates from public calendars of organizations and artists you follow — anything that catches your eye can be saved and pulled into your own calendar.

:::guess
The renewal looks less like a visual refresh than a change of role. TimeTree has historically been a vessel for recording plans already made. Discover moves it to the supply side, feeding candidate plans that have not been decided yet, and appears intended to shift the app from a recording device toward a demand-generation surface. It points in the same direction as the advertising business discussed below, which suggests the connection between product and revenue was deliberately redesigned rather than incidentally extended.
:::

## Tech Stack

TimeTree publishes technical information consistently, including a full-stack disclosure on its official site in 2020. Between 2024 and 2025 it also performed a piece of surgery rarely seen in a service of this kind.

::techstack

:::fact
According to a June 2024 conference deck, the data grew over six years from 8 million to 55 million users, from 1 billion to 13 billion records, and from 1TB to 13TB between 2018 and 2024. The motive for migrating was not missing functionality but physical ceilings: Aurora's 128TB storage limit, its connection limit of roughly 16,000, and local storage exhaustion during online DDL. Vitess, PlanetScale, and Cloud Spanner were all evaluated before Spanner was chosen. Per the official Google Cloud blog (2025-07-25), more than 15 billion records were moved using Datastream and Spanner migration tooling; preparation took over a year, and the cutover completed within planned maintenance windows without critical problems. The cutover itself ran in a maintenance window beginning at 2:00 a.m. JST on January 12, 2025. After the move, the platform uses Cloud Run, BigQuery, Cloud CDN, Memorystore for Valkey, Pub/Sub, and Looker alongside Spanner.
:::

That said, the day was not uneventful. In a notice TimeTree published on that same January 12, the company reported that some users could not use the service normally after the maintenance, with fixes completed across iOS, Android, and Web by 7:00 p.m. the same day — full recovery seventeen hours after the 2:00 a.m. start, announced and closed out on its own site within the day. It is worth recording that even inside what a customer story summarizes as "no critical problems," there was real work on the ground.

We observed the response headers ourselves on August 6, 2026 and confirmed delivery from Google Cloud via `server: Google Frontend` and `via: 1.1 google`. The corporate site returns `x-powered-by: Next.js`, while the app-side entry point returns Rails-style `x-runtime` and `x-request-id` headers — consistent with the Rails backend published back in 2020 still being in service.

:::guess
The striking part is the decision to rebuild before anything broke. At 13TB against a 128TB ceiling — nearly ten times the headroom remaining — the company committed to a migration lasting more than a year. Calendar data is never deleted: past events are kept, and future events pile up at 36 per second. For a service whose ledger only ever grows, the capacity ceiling is effectively the ceiling on the service's lifespan. Choosing Spanner's horizontal scale reads as an investment in not ending, rather than in any new feature. Shifting the center of gravity from an AWS-centric setup to Google Cloud also placed the analytics stack — BigQuery, Looker — in the same cloud as the application database. Given that analyzing event data is the core of the business, that consolidation was likely part of the point rather than a side effect.
:::

## Business Model

TimeTree ran for nearly three years after launch with no monetization at all. Today it stands on advertising and subscription, but the advertising half is designed on a different premise from ordinary in-app ads.

:::fact
Per official announcements, TimeTree Ads began as a beta in December 2017 and reached general availability in July 2018. Its defining property is that targeting is applied to registered events rather than user attributes; validation at the time reported roughly a 2.2x difference in effectiveness for travel-related ads when event targeting was used versus not. The media guide (2024.10-12 edition) states that more than 2 billion events registered per year are used as first-party data to deliver targeting without relying on cookies. Four menus are offered — Premium Reach, Target Day, Persona Targeting, and Self Serve — and the persona segment examples are themselves event-shaped: expecting a child, marriage, moving house, vehicle inspection, golf. A TimeTree-specific format lets a tap save a pre-configured event straight into the user's calendar, where it is also shared with their calendar partners. TimeTree Premium, launched in late April 2022, costs ¥300 per month or ¥3,000 per year and provides ad removal plus a dedicated support channel.
:::

The 2025 announcements show how far this business intends to reach. On June 23 the company partnered with MicroAd to extend future-behavior targeting to connected TV, making it possible to put a family-car ad on the television screen of a household whose child starts elementary school next spring. On October 15 it began offering store-visit measurement using location data from Blogwatcher, tracking how often people who saw an ad later walked into a physical store. The event data is being carried out of the app and wired to television screens and shop doorways.

:::guess
The value of ad inventory is set not by how many people it reaches but by knowing when they will buy. Search ads work with intent in the present moment and social ads with accumulated past interest, whereas event data belongs to a third category: dated future intent. Two weeks before a move, a month before a vehicle inspection, six months before a wedding — no other medium can manufacture inventory where the purchase date is known in advance. The event-creation format goes further still, writing the ad into the user's own ledger so that every subsequent glance replays the reminder at no cost. The risks are equally visible. Monetizing something as private as a person's plans makes collision between business growth and privacy expectations hard to avoid, and the fact that Premium's headline value is ad removal is the company itself conceding that the ad experience carries a cost. The ¥300 price point suggests subscription is positioned as a release valve for that friction rather than as a primary revenue line.
:::

What TimeTree accumulated over ten years was not photographs and not a follow graph, but a ledger of dated intentions. Among a field of companies parsing logs of the past to guess at what comes next, this one alone starts out holding a future its users wrote by hand. The weight of the decision to move 15 billion records is the clearest evidence that nobody understood better than they did what it would mean for that ledger to stop.
