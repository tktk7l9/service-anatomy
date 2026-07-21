---
service: "Netflix"
title: "The Company That Gave Everything to the Cloud — Except Delivery, Which Runs on Its Own Boxes"
description: "Netflix spent seven years abandoning its data centers for AWS — yet for the CDN that moves video bytes, it ships home-built appliances to ISPs worldwide, free of charge. A dissection of the two-layer design visible in a single HTTP header, using official sources and SEC filings."
lead: "Send a request to netflix.com and the via header lines up an AWS us-west-2 instance next to an nflxvideo.net box at a Tokyo internet exchange — in one line. The evangelist of cloud migration hands out its own hardware to over a thousand ISPs, but only for video delivery. This dissection is about why that apparent contradiction is rational."
category: media
tags: [streaming, video, aws, cdn, microservices]
publishedAt: "2026-07-21"
updatedAt: "2026-07-21"
lastVerified: "2026-07-21"
serviceUrl: "https://www.netflix.com/"
vendor: "Netflix, Inc."
origin: "US"
heroTheme: "netflix"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 5.0 }
techStack:
  - layer: "Cloud platform"
    name: "AWS"
    confidence: confirmed
    evidence: "AWS official case study states Netflix operates across four AWS Regions with thousands of auto-scaling groups, using Aurora, EKS, EMR, and more"
    evidenceUrl: "https://aws.amazon.com/solutions/case-studies/netflix/"
  - layer: "Video delivery CDN"
    name: "Open Connect (自社CDNアプライアンス)"
    confidence: confirmed
    evidence: "Official Open Connect site states partnerships with over 1,000 ISPs, providing Netflix-designed appliances (OCAs) to qualifying ISPs at no charge (ISPs provide only rack space, power, and connectivity)"
    evidenceUrl: "https://openconnect.netflix.com/en/"
  - layer: "Chaos engineering"
    name: "Chaos Monkey (Simian Army)"
    confidence: confirmed
    evidence: "Official tech blog details the Simian Army (Chaos Monkey and kin), which deliberately injects failures into production — the origin of chaos engineering as a discipline"
    evidenceUrl: "https://netflixtechblog.com/the-netflix-simian-army-16e57fbab116"
  - layer: "Edge proxy"
    name: "Envoy"
    confidence: likely
    evidence: "Our own HTTP header observation (server: envoy, x-envoy-upstream-service-time; 2026-07-21)"
  - layer: "Website delivery"
    name: "AWS + Open Connect"
    confidence: confirmed
    evidence: "Our own HTTP header observation: the via header lists a us-west-2 EC2 instance ID alongside an nflxvideo.net host at a Tokyo IX (2026-07-21). Control plane on AWS, delivery edge on Open Connect — both layers visible in one line"
    evidenceUrl: "https://www.netflix.com/"
sources:
  - label: "SEC Form 10-K (Netflix, Inc., fiscal year 2025, filed 2026-01-23)"
    url: "https://www.sec.gov/Archives/edgar/data/1065280/000106528026000034/nflx-20251231.htm"
    accessedAt: "2026-07-21"
  - label: "AWS official case study: Netflix on AWS (four Regions; Aurora / EKS / EMR)"
    url: "https://aws.amazon.com/solutions/case-studies/netflix/"
    accessedAt: "2026-07-21"
  - label: "Netflix official: Open Connect (the ISP-facing in-house CDN program)"
    url: "https://openconnect.netflix.com/en/"
    accessedAt: "2026-07-21"
  - label: "Netflix official tech blog: The Netflix Simian Army (the Chaos Monkey original, 2011)"
    url: "https://netflixtechblog.com/the-netflix-simian-army-16e57fbab116"
    accessedAt: "2026-07-21"
---

## Service overview

Netflix is a video streaming service operating in over 190 countries. It began in 1997 as DVD-by-mail rental, pivoted to streaming in 2007, and — through massive investment in originals and viewing-data-driven personalization — has replaced the television habit itself.

:::fact
According to the 10-K and the January 2026 earnings release, fiscal 2025 revenue was $45.2 billion, up 16% year over year, with operating income of $13.3 billion (a 29.5% operating margin) and net income of $11.0 billion. Paid memberships crossed 325 million in Q4, and advertising revenue exceeded $1.5 billion — 2.5 times the prior year. Guidance for 2026 is $50.7–51.7 billion in revenue, with ad revenue expected to roughly double again.
:::

:::pull
The company's entire design philosophy is written in one via header: leave the computing to AWS, carry the bytes on your own boxes.
:::

::scorecard

## UX analysis

Netflix's UX is fully committed to one goal: eliminating the effort of choosing. Both the refinement and its costs are on display.

- **Even the thumbnails are personalized.** The same title shows different artwork depending on your viewing history. Presenting the catalog not as a shelf to browse but as a proposal made to you set the standard other video services now follow.
- **Friction before playback is near zero.** Auto-playing next episodes, intro skipping, synced resume across devices — the obstacles to continuing are systematically removed. But autoplay is also a watch-time maximization device; stopping deliberately becomes the user's job.
- **Global simultaneous release and multilingual experience.** The quality and coverage of subtitles and dubbing enable non-English titles to become global hits — content strategy and UX are directly coupled.
- **The ad-supported tier built a pricing staircase.** A cheap entrance rising toward ad-free, higher resolution, and more screens is also an escape route design: steering users toward downgrade instead of cancellation.

## Tech stack

::techstack

:::fact
Netflix began its cloud migration after a 2008 data-center failure and completed it over seven years. The AWS official case study states it now runs across four AWS Regions with thousands of auto-scaling groups, using Aurora, EKS, and EMR. Meanwhile, the CDN that carries video bytes is Netflix's own Open Connect: per the official site, it partners with over 1,000 ISPs and installs Netflix-designed appliances inside their networks at no charge. Chaos Monkey and the Simian Army — deliberately injecting failures into production — are this company's invention and the origin of chaos engineering. Our own observation shows the two-layer design directly: netflix.com's via header lists a us-west-2 instance next to an nflxvideo.net host at a Tokyo IX.
:::

:::guess
Keeping the control plane on AWS while pulling delivery back in-house appears to come down to an asymmetry in cost structure. Login, recommendation, and billing traffic is complex but small in volume — cloud flexibility wins. Video bytes are simple but vast — cloud egress economics don't work, and localizing delivery with boxes inside ISP networks is cheaper for Netflix and for the ISPs alike. The design-for-failure culture symbolized by Chaos Monkey likewise reads as a consequence of scale: run hundreds of microservices on cloud infrastructure and failure must be treated as routine, not exception.
:::

## Business model

Netflix's revenue centers on subscriptions, with advertising emerging as a second engine.

:::fact
Fiscal 2025 delivered $45.2 billion in revenue at a 29.5% operating margin, improved from 26.7% the prior year on the twin engines of pricing and advertising. Ad revenue exceeded $1.5 billion, 2.5x year over year, with another rough doubling expected in 2026. Free cash flow reached $9.5 billion.
:::

:::guess
The surge in advertising looks like a shift toward monetizing each subscriber on more surfaces as subscriber growth approaches saturation. The decision to stop disclosing quarterly subscriber counts likely reflects the same intent: moving the evaluation axis from headcount to watch time and revenue. Expansion into live events and games reads as investment in a daily reason to open the app — a retention play, suggesting the streaming war's main front has moved from acquisition to keeping.
:::

The first giant service to abandon its own data centers — and the company that brought delivery back onto its own hardware. What Netflix's dissection shows is the sterility of the "cloud versus on-prem" binary. When each workload has different economics, the answer is always a hybrid — and that one via header line is the textbook example.
