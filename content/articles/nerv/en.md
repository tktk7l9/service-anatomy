---
service: "NERV Disaster Prevention"
title: "Disaster Infrastructure That Shaves Seconds — How NERV Stays the Fastest in Japan"
description: "Born from a personal Twitter account, NERV Disaster Prevention now promises 'among the fastest delivery in Japan' over a dedicated line to the Japan Meteorological Business Support Center. We dissect the fastest disaster-information infrastructure Gehirn built, and its public-good-first revenue structure."
lead: "A disaster app named after Evangelion's fictional agency became one of Japan's fastest disaster-information infrastructures. A dedicated line to the meteorological data hub, delivery that keeps shaving off seconds, and thorough color-vision accessibility. We dissect the engineering Gehirn stacked up to 'save people with information.'"
category: consumer-app
tags: [ios, android, disaster, accessibility, websocket]
publishedAt: "2026-07-16"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://nerv.app/"
vendor: "Gehirn Inc. (wholly owned subsidiary of SAKURA internet)"
origin: "JP"
heroTheme: "nerv-bousai"
scores: { product: 4.5, ux: 4.5, tech: 4.5, business: 3.0 }
techStack:
  - layer: "Weather data ingestion"
    name: "JMBSC dedicated line"
    confidence: confirmed
    evidence: "The official site states the system connects over a dedicated line to the Japan Meteorological Business Support Center systems at JMA headquarters and the Osaka Regional Headquarters, and is geographically redundant across data centers in Tokyo and Osaka"
    evidenceUrl: "https://nerv.app/"
  - layer: "Telegram delivery API"
    name: "DMDATA.JP (WebSocket)"
    confidence: confirmed
    evidence: "Gehirn's own commercial API that delivers JMA telegrams over WebSocket"
    evidenceUrl: "https://dmdata.jp/"
  - layer: "Official site delivery"
    name: "Google Cloud"
    confidence: confirmed
    evidence: "Our own HTTP header observation (server: Google Frontend, via: 1.1 google; first on 2026-07-16, re-observed on 2026-09-28)"
    evidenceUrl: "https://nerv.app/"
  - layer: "Real-time lock-screen display (iOS)"
    name: "ActivityKit (Live Activities)"
    confidence: likely
    evidence: "The official site says earthquake early warnings show the expected intensity and a countdown to arrival via iOS Live Activities (the API is inferred from that statement)"
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
    accessedAt: "2026-09-28"
  - label: "Wikipedia (ja): NERV Disaster Prevention app (history, dedicated line, supporters club)"
    url: "https://ja.wikipedia.org/wiki/%E7%89%B9%E5%8B%99%E6%A9%9F%E9%96%A2NERV%E9%98%B2%E7%81%BD%E3%82%A2%E3%83%97%E3%83%AA"
    accessedAt: "2026-09-28"
  - label: "Jiji Press: 'Information alone cannot save people' — the NERV team that keeps shaving milliseconds"
    url: "https://www.jiji.com/jc/v8?id=202503nerv-team"
    accessedAt: "2026-07-16"
  - label: "SAKURA internet: acquisition of Gehirn Inc. (2016-04-25)"
    url: "https://www.sakura.ad.jp/corporate/information/newsreleases/2016/04/25/90133/"
    accessedAt: "2026-07-16"
  - label: "DMDATA.JP (Gehirn's JMA telegram delivery API)"
    url: "https://dmdata.jp/"
    accessedAt: "2026-09-28"
  - label: "Cybozu-shiki: how the NERV app became social infrastructure"
    url: "https://cybozushiki.cybozu.co.jp/articles/m006292.html"
    accessedAt: "2026-09-28"
  - label: "Gehirn: launch of the NERV Disaster Prevention Supporters Club (2020-09-01)"
    url: "https://www.gehirn.co.jp/news/2020-09-01/01-press-supporters/"
    accessedAt: "2026-09-28"
  - label: "Lumiarch (NTT East): how NERV Disaster Prevention approaches disaster information (2026-03)"
    url: "https://lumiarch.ntt-east.co.jp/articles/202603_disaster_information/"
    accessedAt: "2026-09-28"
---

In disaster information, a one-second delay can decide whether someone evacuates in time. Gehirn's NERV Disaster Prevention keeps shaving not just that second but the milliseconds inside it. Behind the playful anime-derived name sits what is probably Japan's most serious disaster-information infrastructure, wired directly to the meteorological data hub.

## Service Overview

NERV Disaster Prevention is an iOS/Android app delivering flash reports for earthquakes, tsunamis, eruptions, and emergency warnings, along with weather alerts for heavy rain, floods, and landslides. The name comes from the fictional agency in Neon Genesis Evangelion.

:::fact
It began as a personal Twitter account, "特務機関NERV," started by Gehirn founder Daiki Ishimori in February 2010, and became a serious operation after the 2011 Tohoku earthquake. The app launched on iOS on September 1, 2019 — Japan's Disaster Prevention Day — and on Android on December 18 the same year, with features such as location-linked heavy-rain risk notifications. According to the official site, earthquake early warnings use iOS Live Activities and Android live-update notifications to count down, on the lock screen and elsewhere, the expected intensity at your location and the seconds until the main shaking arrives. Cumulative downloads reached 8.04 million as of February 2026 (per an article in NTT East's Lumiarch, March 2026). Gehirn Inc. has been a wholly owned subsidiary of SAKURA internet since 2016.
:::

:::fact
The backbone of its speed is a dedicated line. According to the official site, NERV's processing system connects over a dedicated line to the Japan Meteorological Business Support Center systems at JMA headquarters in Tokyo and the Osaka Regional Headquarters, and is geographically redundant across multiple data centers in Tokyo and Osaka. The official site promises "among the fastest information delivery in Japan"; Wikipedia's summary says the team worked to send information within one second of receipt. A Cybozu-shiki article notes that, depending on device settings and network conditions, notifications can appear within one second of an earthquake early warning being issued in the fastest cases. Wikipedia's summary also says that during the 2018 northern Osaka earthquake, its tweets went out faster than NHK's flash reports and others.
:::

:::pull
"Information alone cannot save people" — and yet they keep shaving milliseconds. The tension in that interview headline summarizes the app's design philosophy.
:::

::scorecard

Correction (September 28, 2026). Our first version flatly stated that NERV "delivers within one second of receiving the data" and that it "delivered information faster than television flash reports" in the northern Osaka earthquake, which went beyond what the sources say and was wrong. The sources say the team "worked to send within one second of receipt" (Wikipedia summary), that notifications "can appear within one second of issuance in the fastest cases" (Cybozu-shiki), and that its tweets were "faster than NHK's flash reports and others" (Wikipedia summary); the paragraph above now follows them.

## UX Analysis

NERV's UX is reverse-engineered from a single question: does it reach the most vulnerable person at the worst moment?

- **Speed is the UX.** Whether a notification arrives in the few seconds before shaking does — that decides the entire value of this genre. The dedicated line and second-shaving delivery are not features; they are the floor the experience stands on.
- **Accessibility designed by a person concerned.** Ishimori himself has color vision deficiency, and the fonts, palettes, and map expressions are built so that everyone can make a judgment. Disaster color schemes lean heavily on reds and yellows, so this consideration is a matter of practical life and death.
- **A two-layer design for ordinary and emergency days.** In peacetime it works quietly as a weather app; in emergencies it turns into alert infrastructure. Daily utility secures install rates and notification permissions before the disaster — an answer to the structural problem of disaster apps.
- **Trust as presentation.** The Evangelion-styled UI is not just for buzz: the perfectly consistent alert format, unchanged since the Twitter era, functions as trust — the format is the brand.

## Tech Stack

::techstack

:::fact
Gehirn also sells the ingestion/delivery system underlying NERV as a commercial API, DMDATA.JP, which delivers JMA telegrams received via the Meteorological Business Support Center over WebSocket. The infrastructure of its own app doubles as a business. Our observation shows the official site (nerv.app) is served via Google Cloud (Google Frontend) (July 16, 2026; unchanged when re-observed on September 28, 2026).
:::

:::guess
Combining the officially disclosed Tokyo–Osaka geographic redundancy with the WebSocket API business, the architecture most plausibly handles ingestion and processing in the redundant data centers, then fans out to users through auto-scaling delivery and push infrastructure (APNs/FCM). Disaster traffic spikes to hundreds of times the baseline, so "cheap in peacetime, near-infinitely scalable in emergencies" is presumably the paramount architectural requirement.
:::

## Business Model

The app is free, with no advertising. Revenue comes from surrounding structures.

:::fact
The NERV Supporters Club launched on September 1, 2020, with an E plan at ¥250/month and an EE plan at ¥480/month (per Gehirn's announcement and the official site). At launch, Gehirn said the team spends about ¥60 million a year running the app. Gehirn itself provides corporate information-security services and the disaster-response support system CRISIS, and sells DMDATA.JP as a telegram API.
:::

:::guess
Structurally, the app itself appears to be positioned not as a profit center but as public infrastructure serving the mission "make Japan safer" — and simultaneously as Gehirn's strongest technical showcase. Revenue plausibly flows from corporate security, CRISIS, and DMDATA, with parent company SAKURA internet's capital supporting the infrastructure investment (dedicated lines, redundancy). The donation-style supporter plans read less as a revenue source than as a designed relationship with users.
:::

Sixteen years from a personal Twitter alert account to a disaster infrastructure with dedicated lines and its own commercial API. NERV Disaster Prevention shows that polishing the plainest values — speed, and legibility for everyone — can itself be a product's entire reason to exist.

Correction (September 28, 2026). Our first version gave the E plan as ¥250/month and the EE plan as ¥450/month; the EE plan price was wrong. Gehirn's launch announcement and the official site as of September 28, 2026 both give the EE plan as ¥480/month.
