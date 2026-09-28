---
service: "setlog"
title: "Editing by Refusing to Let You Edit — Why Korea's setlog Won Gen Z With an Hourly Notification"
description: "Dubbed the app that will succeed BeReal, setlog dissected: the hourly-notification 2-second clips, closed groups of up to 12 friends, automatic same-day vlog compilation with zero editing allowed, the K-pop-fueled virality, and a business model that is still nowhere to be seen."
lead: "Up to 12 friends. A notification arrives once an hour, and you have that window to shoot two seconds — no editing, no filters, no do-overs. setlog's bet was a 'social media you don't have to try hard at,' and it rode that bet to the top of Japan's free App Store chart."
category: consumer-app
tags: [video, social, closed-sns, bereal, gen-z]
publishedAt: "2026-07-17"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://apps.apple.com/jp/app/setlog/id6587576438"
vendor: "New Chat Inc."
origin: "KR"
heroTheme: "setlog"
scores: { product: 4.0, ux: 4.0, tech: 2.5, business: 2.5 }
techStack:
  - layer: "Distribution platform"
    name: "iOS / Android (ネイティブアプリ)"
    confidence: confirmed
    evidence: "Confirmed as a native app on both OSes via official listings on the Japan App Store and Google Play"
    evidenceUrl: "https://apps.apple.com/jp/app/setlog/id6587576438"
  - layer: "CDN"
    name: "Fastly"
    confidence: likely
    evidence: "Our HTTP header observation (x-served-by: cache-nrt-*, x-timer and other signature Fastly header formats, 2026-09-28); no official documentation found"
  - layer: "Official site hosting"
    name: "Firebase Hosting"
    confidence: likely
    evidence: "Our observation (2026-09-28): setlog.kr / newchat.kr return Firebase Hosting's signature vary: x-fh-requested-host, and their A records point to 199.36.158.100. No official documentation found; the app's own backend may be separate"
sources:
  - label: "setlog official App Store (Japan) listing"
    url: "https://apps.apple.com/jp/app/setlog/id6587576438"
    accessedAt: "2026-09-28"
  - label: "Business Insider Japan: after BeReal comes this — the K-pop-ignited Gen Z app 'Setlog'"
    url: "https://www.businessinsider.jp/article/2606-setlog-kpop-popular-app-vlog-friends-glimpse-real-life/"
    accessedAt: "2026-09-28"
  - label: "Impress Watch: BeReal's runner-up 'setlog' is a hit — the unstoppable shift to closed social"
    url: "https://www.watch.impress.co.jp/docs/news/2116019.html"
    accessedAt: "2026-09-28"
  - label: "Security Measures Lab: explaining setlog's risks and overview"
    url: "https://rocket-boys.co.jp/security-measures-lab/setlog-sns-privacy-threats/"
    accessedAt: "2026-07-17"
  - label: "DG Daiwa Ventures: investment in New Chat Inc.'s seed round (PR TIMES, 2026-09-09)"
    url: "https://prtimes.jp/main/html/rd/p/000000130.000076641.html"
    accessedAt: "2026-09-28"
---

Around the time BeReal started exhausting Gen Z with the anxiety of "post within two minutes or get caught being late," a small app that first caught fire in Korea turned that exact fatigue into a product. setlog made a lighter social network by shooting fewer moments and removing the freedom to edit them.

## What the service is

setlog is a video social app for recording daily life within friend groups of up to 12 people. It's operated by New Chat Inc., and it spread after becoming a hit in Korea.

:::fact
According to a press release issued on September 9, 2026 by investor DG Daiwa Ventures, New Chat Inc. was founded in 2024, is headquartered in New York, and is led by CEO Devin Doty, who has experience at Tumblr and Snapchat. The company received seed funding from DG Daiwa Ventures (amount undisclosed). Impress Watch (June 2026) reported the company as based in New York and Seoul.
:::

:::fact
Per Impress Watch (June 2026), setlog sends a notification once an hour and users must shoot a roughly two-second clip in that moment — uploading previously recorded footage isn't possible. At day's end, every participant's clips are stitched together chronologically into an automatically generated mini vlog. Business Insider Japan (June 2026) reported that virality ignited after K-pop group SEVENTEEN and aespa's Karina posted videos made with the app on Instagram, with downloads exceeding 2 million in May 2026 alone; setlog also topped Japan's free App Store chart during the same period.
:::

:::pull
The promise of "you don't have to try hard" can't be built by adding features. setlog delivered it instead by taking away the option to filter, edit, or repost.
:::

Correction (September 28, 2026). The first version of this article described the operator as "a Korean-founded startup with a presence in Seoul and New York," which was wrong. The investor's press release gives New Chat Inc.'s headquarters as New York and its CEO as Devin Doty, who has experience at Tumblr and Snapchat. Korea is the market where setlog first took off, and the Seoul base is based on press reporting (Impress Watch).

::scorecard

## UX analysis

setlog's UX reads as a precise prescription for the fatigue BeReal itself created.

- **The forced moment isn't left entirely to chance.** Against BeReal's two-minute pressure, setlog offers the slack of "anytime within this hour" — lowering tension while keeping the core of real-time authenticity intact.
- **No editing becomes a rebuttal to filter culture.** Being unable to apply filters or re-pick your best take flips into reassurance that you don't need to perform. A feature's absence doing the work of a brand message is rare.
- **Auto-compilation turns recording into a shared viewing experience.** The self-assembling end-of-day vlog converts a private act of logging into something friends watch together.
- **A cap of 12 manufactures closed-room comfort.** Visible only to a chosen circle rather than the whole world, the design embodies the closed-social trend itself — echoed by Instagram's follow-up "Instants" feature.

## Tech stack

::techstack

:::fact
setlog ships as a native app on both the Japan App Store and Google Play. Our own observation on September 28, 2026 found the official site (setlog.kr / newchat.kr) served with a signature Fastly header (x-served-by: cache-nrt-*) and Firebase Hosting's signature vary: x-fh-requested-host, with both domains' A records pointing to 199.36.158.100.
:::

:::guess
The official site appears to be served statically from Firebase Hosting (with Fastly as its delivery network), but whether the app's own backend also runs on Google's services is unknown. New Chat Inc. appears to be a small startup with no public engineering blog or conference talks, and no primary source corroborating its backend (language, database, video-processing pipeline) could be found. Delivering an hourly notification pulse and stitching every participant's clips together in chronological order is not a trivial workload — the very absence of published implementation detail likely reflects a fast-growing small team prioritizing feature velocity over public infrastructure communication.
:::

## Business model

The business model is the part of this dissection with the least material to work with.

:::fact
The app is offered for free; its Japan App Store listing as of September 28, 2026 shows no in-app purchases, and no ads or subscription tier could be confirmed from official sources. The September 2026 funding announcement discloses no monetization plans either; it states that since its official launch the app gained millions of daily active users in a short time without major marketing spend (a claim from the investor's announcement, not independently verified). Security Measures Lab (June 2026) notes that while the developer claims group-only encryption, no third-party security audit has been published.
:::

:::guess
Current growth appears heavily dependent on the free viral loop of K-pop celebrity posts, and a monetization mechanism likely does not yet exist in a mature form. Given BeReal's own struggle to reconcile monetization with retention after its own popularity peak, setlog's next hurdle is likely how to introduce payment or advertising without breaking the "you don't have to try hard" ethos that won it users. Data collection encompassing location and behavioral patterns could be groundwork for a future ad business, but nothing in public sources confirms that.
:::

BeReal asked the question; setlog offered one answer — that in an era of social-media fatigue, survival may belong not to the app that adds features, but to the one with the courage to strip them away. What gets built on top of the virality is a story nobody has seen yet.
