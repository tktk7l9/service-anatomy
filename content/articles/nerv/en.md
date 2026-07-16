---
service: "NERV Disaster Prevention"
title: "Disaster Infrastructure That Shaves Seconds — How NERV Stays the Fastest in Japan"
description: "Born from a personal Twitter account, NERV Disaster Prevention now delivers alerts within one second of receipt over a dedicated line to Japan's weather authority. We dissect the fastest disaster-information infrastructure Gehirn built, and its public-good-first revenue structure."
lead: "A disaster app named after Evangelion's fictional agency became one of Japan's fastest disaster-information infrastructures. A dedicated line to the meteorological data hub, delivery within one second of receipt, and thorough color-vision accessibility. We dissect the engineering Gehirn stacked up to 'save people with information.'"
category: consumer-app
tags: [ios, android, disaster, accessibility, websocket]
publishedAt: "2026-07-16"
updatedAt: "2026-07-16"
lastVerified: "2026-07-16"
serviceUrl: "https://nerv.app/"
vendor: "Gehirn Inc. (wholly owned subsidiary of SAKURA internet)"
origin: "JP"
heroTheme: "nerv-bousai"
scores: { product: 4.5, ux: 4.5, tech: 4.5, business: 3.0 }
techStack:
  - layer: "Weather data ingestion"
    name: "JMBSC dedicated line"
    confidence: confirmed
    evidence: "A dedicated line to the Japan Meteorological Business Support Center; delivery within one second of receipt (Wikipedia, Jiji Press interview)"
    evidenceUrl: "https://ja.wikipedia.org/wiki/%E7%89%B9%E5%8B%99%E6%A9%9F%E9%96%A2NERV%E9%98%B2%E7%81%BD%E3%82%A2%E3%83%97%E3%83%AA"
  - layer: "Telegram delivery API"
    name: "DMDATA.JP (WebSocket)"
    confidence: confirmed
    evidence: "Gehirn's own commercial API that delivers JMA telegrams over WebSocket"
    evidenceUrl: "https://dmdata.jp/"
  - layer: "Official site delivery"
    name: "Google Cloud"
    confidence: confirmed
    evidence: "Our own HTTP header observation (server: Google Frontend, via: 1.1 google; 2026-07-16)"
    evidenceUrl: "https://nerv.app/"
  - layer: "Push notifications"
    name: "APNs / FCM"
    confidence: likely
    evidence: "Inferred from the standard delivery paths for iOS/Android alert notifications"
  - layer: "App distribution"
    name: "App Store / Google Play"
    confidence: confirmed
    evidence: "Distributed on both stores (links on the official site)"
    evidenceUrl: "https://nerv.app/"
sources:
  - label: "NERV Disaster Prevention official site"
    url: "https://nerv.app/"
    accessedAt: "2026-07-16"
  - label: "Wikipedia (ja): NERV Disaster Prevention app (history, dedicated line, supporters club)"
    url: "https://ja.wikipedia.org/wiki/%E7%89%B9%E5%8B%99%E6%A9%9F%E9%96%A2NERV%E9%98%B2%E7%81%BD%E3%82%A2%E3%83%97%E3%83%AA"
    accessedAt: "2026-07-16"
  - label: "Jiji Press: 'Information alone cannot save people' — the NERV team that keeps shaving milliseconds"
    url: "https://www.jiji.com/jc/v8?id=202503nerv-team"
    accessedAt: "2026-07-16"
  - label: "SAKURA internet: acquisition of Gehirn Inc. (2016-04-25)"
    url: "https://www.sakura.ad.jp/corporate/information/newsreleases/2016/04/25/90133/"
    accessedAt: "2026-07-16"
  - label: "DMDATA.JP (Gehirn's JMA telegram delivery API)"
    url: "https://dmdata.jp/"
    accessedAt: "2026-07-16"
  - label: "Cybozu-shiki: how the NERV app became social infrastructure"
    url: "https://cybozushiki.cybozu.co.jp/articles/m006292.html"
    accessedAt: "2026-07-16"
---

In disaster information, a one-second delay can decide whether someone evacuates in time. Gehirn's NERV Disaster Prevention keeps shaving not just that second but the milliseconds inside it. Behind the playful anime-derived name sits what is probably Japan's most serious disaster-information infrastructure, wired directly to the meteorological data hub.

## Service Overview

NERV Disaster Prevention is an iOS/Android app delivering flash reports for earthquakes, tsunamis, eruptions, and emergency warnings, along with weather alerts for heavy rain, floods, and landslides. The name comes from the fictional agency in Neon Genesis Evangelion.

:::fact
It began as a personal Twitter account, "特務機関NERV," started by Gehirn founder Daiki Ishimori in February 2010, and became a serious operation after the 2011 Tohoku earthquake. The app launched on iOS on September 1, 2019 — Japan's Disaster Prevention Day — and on Android on December 18 the same year, with features such as location-linked heavy-rain risk notifications. Cumulative downloads reached 8.04 million as of February 2026. Gehirn Inc. has been a wholly owned subsidiary of SAKURA internet since 2016.
:::

:::fact
The backbone of its speed is a dedicated line to the Japan Meteorological Business Support Center, enabling delivery within one second of receiving the data. During the 2018 northern Osaka earthquake, it was reported to have delivered information faster than television flash reports.
:::

:::pull
"Information alone cannot save people" — and yet they keep shaving milliseconds. The tension in that interview headline summarizes the app's design philosophy.
:::

::scorecard

## UX Analysis

NERV's UX is reverse-engineered from a single question: does it reach the most vulnerable person at the worst moment?

- **Speed is the UX.** Whether a notification arrives in the few seconds before shaking does — that decides the entire value of this genre. The dedicated line and sub-second delivery are not features; they are the floor the experience stands on.
- **Accessibility designed by a person concerned.** Ishimori himself has color vision deficiency, and the fonts, palettes, and map expressions are built so that everyone can make a judgment. Disaster color schemes lean heavily on reds and yellows, so this consideration is a matter of practical life and death.
- **A two-layer design for ordinary and emergency days.** In peacetime it works quietly as a weather app; in emergencies it turns into alert infrastructure. Daily utility secures install rates and notification permissions before the disaster — an answer to the structural problem of disaster apps.
- **Trust as presentation.** The Evangelion-styled UI is not just for buzz: the perfectly consistent alert format, unchanged since the Twitter era, functions as trust — the format is the brand.

## Tech Stack

::techstack

:::fact
Gehirn also sells the ingestion/delivery system underlying NERV as a commercial API, DMDATA.JP, which delivers JMA telegrams received via the Meteorological Business Support Center over WebSocket. The infrastructure of its own app doubles as a business. Our observation shows the official site (nerv.app) is served via Google Cloud (Google Frontend).
:::

:::guess
Combining the official statement about "cloud systems that withstand access surges" with the WebSocket API business, the architecture most plausibly consists of redundant dedicated-line ingestion fanning out through auto-scaling cloud delivery and push infrastructure (APNs/FCM). Disaster traffic spikes to hundreds of times the baseline, so "cheap in peacetime, near-infinitely scalable in emergencies" is presumably the paramount architectural requirement.
:::

## Business Model

The app is free, with no advertising. Revenue comes from surrounding structures.

:::fact
The NERV Supporters Club launched on September 1, 2020, with an E plan at ¥250/month and an EE plan at ¥450/month. Gehirn itself provides corporate information-security services and the disaster-response support system CRISIS, and sells DMDATA.JP as a telegram API.
:::

:::guess
Structurally, the app itself appears to be positioned not as a profit center but as public infrastructure serving the mission "make Japan safer" — and simultaneously as Gehirn's strongest technical showcase. Revenue plausibly flows from corporate security, CRISIS, and DMDATA, with parent company SAKURA internet's capital supporting the infrastructure investment (dedicated lines, redundancy). The donation-style supporter plans read less as a revenue source than as a designed relationship with users.
:::

Sixteen years from a personal Twitter alert account to a disaster infrastructure with dedicated lines and its own commercial API. NERV Disaster Prevention shows that polishing the plainest values — speed, and legibility for everyone — can itself be a product's entire reason to exist.
