---
service: "Gemini"
title: "It Makes Its Own Chips and Owns Its Own Distribution — Why Gemini Is the One AI That Doesn't Have to Rent Anything"
description: "Gemini, the conversational AI built by Google DeepMind. From its rebrand out of Bard, to training on Google's own TPU chips, to distribution through Search, Android, and Workspace — while rivals keep buying compute from multiple vendors, Gemini runs chip-to-distribution vertical integration in-house. A dissection from official sources."
lead: "Both ChatGPT and Claude run on compute rented from other companies. Gemini alone trains its models on chips it designs itself (TPUs) and delivers them, at no marginal distribution cost, through Search, Android, Chrome, and Workspace — some of the largest reach on the planet. Less than three years after rebranding from \"Bard,\" this is a dissection of the one company that can fight the AI race without renting anything."
category: ai-tool
tags: [ai-assistant, llm, multimodal, tpu, google]
publishedAt: "2026-07-23"
updatedAt: "2026-07-23"
lastVerified: "2026-07-23"
serviceUrl: "https://gemini.google.com/"
vendor: "Google LLC"
origin: "US"
heroTheme: "gemini"
scores: { product: 4.5, ux: 3.5, tech: 4.5, business: 4.0 }
techStack:
  - layer: "Foundation models"
    name: "Geminiモデルファミリー（3.6 Flash / 3.1 Pro / 3.1 Deep Think 等）"
    confidence: confirmed
    evidence: "Verified on the official Google DeepMind model page that multiple purpose-specific versions are listed (3.6 Flash, 3.5 Flash-Lite, 3.1 Pro, 3.1 Deep Think, Omni, and more)"
    evidenceUrl: "https://deepmind.google/models/gemini/"
  - layer: "Research organization"
    name: "Google DeepMind"
    confidence: confirmed
    evidence: "Listed on the official site as the developer of Gemini — the organization formed from the merger of the former Google Brain and DeepMind"
    evidenceUrl: "https://deepmind.google/models/gemini/"
  - layer: "Compute (in-house design)"
    name: "Google TPU (v4 / v5e / v5p)"
    confidence: confirmed
    evidence: "Official Google blog post (2023-12-06) states Gemini 1.0 was trained on Google's own TPU v4 and v5e chips, with the next-generation TPU v5p announced at the same time"
    evidenceUrl: "https://blog.google/technology/ai/google-gemini-ai/"
  - layer: "Subscription infrastructure"
    name: "Google One AI Premium（Google AI Pro / Ultra）"
    confidence: confirmed
    evidence: "Official site states a three-tier lineup — Google AI Plus, Pro, and Ultra — bundled with Google One storage"
    evidenceUrl: "https://one.google.com/about/google-ai-plans/"
  - layer: "Distribution integration"
    name: "Android（Pixel / Galaxy 標準アシスタント）"
    confidence: likely
    evidence: "Per aggregated Wikipedia reporting, Gemini became the default assistant on the Pixel 9 and Galaxy S25 lines. Not confirmed on Google's own technical pages, hence \"likely\""
sources:
  - label: "Google DeepMind official: Gemini model page (model family and version lineup)"
    url: "https://deepmind.google/models/gemini/"
    accessedAt: "2026-07-23"
  - label: "Google official blog: Gemini announcement (2023-12-06 — TPU v4/v5e training, Bard/Duet AI unification history)"
    url: "https://blog.google/technology/ai/google-gemini-ai/"
    accessedAt: "2026-07-23"
  - label: "Google One official: AI Plans (Plus/Pro/Ultra three-tier lineup)"
    url: "https://one.google.com/about/google-ai-plans/"
    accessedAt: "2026-07-23"
  - label: "Wikipedia: Gemini (chatbot) (rebrand history from Bard, model version history, Android integration aggregated)"
    url: "https://en.wikipedia.org/wiki/Gemini_(chatbot)"
    accessedAt: "2026-07-23"
---

## Service overview

Gemini is the conversational AI developed by Google DeepMind. Its predecessor was "Bard," launched in March 2023; in February 2024, Bard and the productivity-focused "Duet AI" were unified under the Gemini brand. Google DeepMind, its developer, is the research organization formed by merging the former Google Brain and DeepMind.

:::fact
Per Google's official blog (December 6, 2023), the first Gemini 1.0 shipped in three sizes — Ultra, Pro, and Nano — trained on Google's own TPU v4 and v5e chips. The next-generation Cloud TPU v5p was announced at the same time. On the official Google DeepMind model page, we confirmed that by 2026 Google publishes multiple purpose-specific versions, including Gemini 3.6 Flash, Gemini 3.1 Pro, Gemini 3.1 Deep Think, and the multimodal-focused Gemini Omni.
:::

:::pull
Both ChatGPT and Claude buy their compute from someone else. Gemini designs its own chips and owns its own distribution. It isn't competing on the same field.
:::

::scorecard

## UX analysis

Gemini's UX prioritizes penetration across the entire Google product family over polish as a standalone app.

- **A brand made complicated by consolidation.** From Bard's March 2023 launch to the February 2024 unification under Gemini, the brand and feature set were reorganized in a short span — the standalone app has had less time to build coherent experience than later entrants like ChatGPT or Claude.
- **Designed to be "everywhere" rather than a single app.** It's embedded throughout Search, Workspace (Gmail/Docs/Sheets), Android, Chrome, Google Photos, and Messages — users encounter Gemini without opening a new app.
- **Pricing is bundled with storage.** Google AI Plus/Pro/Ultra ship bundled with Google One storage capacity (400GB to 20TB+), designed less as a standalone AI subscription and more as a contract for the whole Google service bundle.
- **Default placement on Android is a distribution advantage.** As the default assistant on flagship Android devices like Pixel and Galaxy, it doesn't require users to actively find and install an app.

## Tech stack

::techstack

:::fact
Per Google's official blog, Gemini is trained on Google's own TPUs (Tensor Processing Units). The first Gemini 1.0 trained on TPU v4 and v5e, with later generations like TPU v5p following. Its developer, Google DeepMind, is the merged organization of the former Google Brain and DeepMind, and as of 2026 publishes a purpose-segmented model lineup: Gemini 3.6 Flash (token-efficiency focused), Gemini 3.1 Pro (complex tasks), Gemini 3.1 Deep Think (science/research), and Gemini Omni (multimodal).
:::

:::guess
Training models on in-house-designed chips (TPUs) and delivering them at no incremental cost over distribution channels Google already owns (Search, Android, Workspace) implies a fundamentally different cost structure than rivals who must keep sourcing chips and compute from outside cloud vendors. Where ChatGPT and Claude each sign enormous contracts with multiple cloud companies to secure compute, Gemini's "rental" cost is structurally smaller to begin with. This vertical-integration advantage is hard to see in head-to-head model benchmarks, but it plausibly compounds into a long-run cost-structure gap.
:::

## Business model

Gemini's revenue model centers less on a standalone subscription than on embedding into the whole Google ecosystem.

:::fact
Per the official site, individual users get Google One AI Premium, a three-tier lineup of Google AI Plus, Pro, and Ultra. Each tier bundles Gemini usage limits with Gmail/Google Drive/Google Photos storage, and Ultra includes priority access to the top-tier models. Beyond that, Google secures revenue and usage through several other channels: enterprise API access via Vertex AI, embedding into every Google Workspace product, and default-assistant placement on Android devices.
:::

:::guess
Bundling Gemini's pricing with Google One storage contracts suggests a judgment that upselling AI to Google's existing, enormous user base (Gmail, Search, Android) costs less than acquiring new AI subscribers from zero. Where ChatGPT and Claude must build their user base from scratch, Gemini can roll out as an "added feature" to services already used by billions — extending the distribution network built for ads and cloud into the AI race as well. This distribution advantage plausibly functions as a structural strength that holds even if Google occasionally trails on head-to-head model performance.
:::

Chips designed in-house, distribution through existing Search/Android/Workspace channels, and revenue bundled with storage contracts. What separates Gemini from ChatGPT and Claude most isn't model intelligence — it's a structure that lets it compete without renting anything from the outside. Despite a messy origin story as a rebrand from Bard, on the single axis of vertical integration, Gemini is playing a different game from the other two.
