---
service: "ChatGPT"
title: "From Nonprofit Lab to a For-Profit Company With 900 Million Weekly Users — OpenAI's 2025 Restructuring"
description: "Founded in 2015 as a nonprofit research lab, OpenAI grew in a decade into a company behind ChatGPT's 900 million weekly active users and the GPT-6 model family, completing a restructuring in October 2025 into a two-tier structure where a nonprofit foundation holds 26%. Combined with hundred-billion-dollar compute deals with Oracle, Microsoft, and Nvidia, this is a dissection of ChatGPT and OpenAI from public information."
lead: "On November 30, 2022, ChatGPT launched — and hit one million users within five days. By February 2026, weekly active users reached 900 million. Behind that growth, OpenAI — which began as a nonprofit lab dedicated to developing AI safely for humanity — completed a restructuring on October 28, 2025, into a two-tier structure: the nonprofit \"OpenAI Foundation\" (holding 26%) and the for-profit \"OpenAI Group PBC.\" This is a dissection of a company that kept its nonprofit banner while signing a $300 billion compute deal with Oracle alone."
category: ai-tool
tags: [ai-assistant, llm, api, chatbot, coding-agent]
publishedAt: "2026-07-23"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://chatgpt.com/"
vendor: "OpenAI Group PBC"
origin: "US"
heroTheme: "chatgpt"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 4.0 }
techStack:
  - layer: "Foundation models"
    name: "GPT-6ファミリー（Astra / Sol / Luna）"
    confidence: confirmed
    evidence: "Verified on OpenAI's official developer pricing documentation that per-token pricing is published for gpt-6-astra, gpt-6-sol, and gpt-6-luna as the latest models, with the gpt-5.6 line still offered alongside"
    evidenceUrl: "https://developers.openai.com/api/docs/pricing"
  - layer: "Coding agent"
    name: "Codex"
    confidence: confirmed
    evidence: "Verified on the OpenAI Developers official homepage that Codex is listed as its developer-facing coding agent product"
    evidenceUrl: "https://developers.openai.com"
  - layer: "App extension standard"
    name: "Apps SDK（Model Context Protocol準拠）"
    confidence: confirmed
    evidence: "Verified on the OpenAI Developers official homepage that the Apps SDK, used to extend ChatGPT with apps, is built on the Model Context Protocol — an open standard authored and published by rival Anthropic"
    evidenceUrl: "https://developers.openai.com"
  - layer: "Compute (cloud)"
    name: "Microsoft Azure"
    confidence: likely
    evidence: "Per aggregated Wikipedia reporting, Microsoft Azure has been the primary cloud provider since 2019, with exclusivity terms reportedly loosened in an April 2026 agreement renewal. Not confirmed on OpenAI's own technical pages, hence \"likely\""
  - layer: "Compute (additional contracts)"
    name: "Oracle Cloud Infrastructure / Stargateプロジェクト"
    confidence: likely
    evidence: "Per aggregated Wikipedia reporting, OpenAI signed a five-year, $300 billion compute deal with Oracle in September 2025, and in January 2025 announced the Stargate project with Oracle, SoftBank, and MGX — a roughly $500 billion data center buildout. Not confirmed via a primary source, hence \"likely\""
sources:
  - label: "Forbes: OpenAI reportedly weighing a new round at up to a $1.5 trillion valuation (2026-09-16)"
    url: "https://www.forbes.com/sites/siladityaray/2026/09/16/openai-is-reportedly-weighing-new-funding-round-at-15-trillion-valuation/"
    accessedAt: "2026-09-28"
  - label: "CloudZero: ChatGPT pricing roundup (third-party secondary source; Go at $8, Pro at $100 and $200)"
    url: "https://www.cloudzero.com/blog/how-much-does-chatgpt-cost/"
    accessedAt: "2026-09-28"
  - label: "OpenAI Developers official: API Pricing (per-token rates for the GPT-6 family)"
    url: "https://developers.openai.com/api/docs/pricing"
    accessedAt: "2026-09-28"
  - label: "OpenAI Developers official: homepage (Codex, Apps SDK, and API Platform product lineup)"
    url: "https://developers.openai.com"
    accessedAt: "2026-07-23"
  - label: "Wikipedia: OpenAI (2025 restructuring, ownership structure, funding history, compute deals aggregated)"
    url: "https://en.wikipedia.org/wiki/OpenAI"
    accessedAt: "2026-09-28"
  - label: "Wikipedia: ChatGPT (launch date, weekly active user trajectory, pricing tiers, feature history aggregated)"
    url: "https://en.wikipedia.org/wiki/ChatGPT"
    accessedAt: "2026-09-28"
---

## Service overview

ChatGPT is the conversational AI OpenAI launched on November 30, 2022. OpenAI itself was founded in 2015 by Elon Musk, Sam Altman, and others as a nonprofit research lab. In 2019 it moved to an unusual "capped-profit" structure, and on October 28, 2025, it completed a restructuring into a two-tier structure: the nonprofit "OpenAI Foundation" and the public benefit corporation "OpenAI Group PBC."

:::fact
Per aggregated Wikipedia reporting, ownership after the October 2025 restructuring stood at OpenAI Foundation (nonprofit) 26%, Microsoft 27%, and employees/investors 47%. On funding, the company moved from Microsoft's $1 billion investment in 2019 through a $10 billion investment in January 2023 (at a $29 billion valuation), to a $110 billion raise in February 2026 (at a $730 billion valuation, extended to $120 billion in March), reaching a further $122 billion committed in April 2026 (at an $852 billion post-money valuation). ChatGPT's weekly active users reached 900 million as of February 2026, with headcount at roughly 4,500 as of 2026.
:::

:::pull
A conversational AI that reached one million users in five days became, in a little over three years, a product used by 900 million people weekly. The company that runs it was born a nonprofit and grew into an enterprise sized for a for-profit listing.
:::

::scorecard

## UX analysis

ChatGPT's UX keeps expanding from a single chatbot into a family of agent products.

- **From one chat window to a product family.** Rather than a single-purpose tool, OpenAI runs a lineup under the ChatGPT umbrella: the coding agent Codex, the document-focused ChatGPT Work, and browser-operating agents like Operator/ChatGPT Atlas.
- **Flexible enough to ride a rival's standard.** The Apps SDK, used to extend ChatGPT with third-party apps, is built on the Model Context Protocol — an open standard authored by rival Anthropic. In the fight over agent-interoperability standards, OpenAI chose to follow the standard that gained adoption rather than push its own.
- **Pricing tiers span individual to emerging-market.** Beyond the free tier, there's a lower-priced "ChatGPT Go" plan ($8/month), Plus ($20/month), and Pro in two steps ($100 and $200/month), slicing the price range finely.
- **Rapid feature accretion is testing experiential coherence.** Memory, voice, image generation (GPT Image), and search integration have all stacked up in a short span — the product is mid-transition from chatbot to personal AI agent, and that shows.

## Tech stack

::techstack

:::fact
Per OpenAI's official developer site, the latest models on the API platform are the GPT-6 family (three grades: Astra, Sol, and Luna), alongside the GPT-5.6, GPT-5.5, and GPT-5.4 lines still offered. The same site lists the coding agent Codex and the Apps SDK, used to extend ChatGPT with apps, as flagship products — and states that the Apps SDK is built on the Model Context Protocol, the open standard published by rival Anthropic.
:::

:::guess
Building ChatGPT's own app-extension mechanism on a rival's open standard suggests a judgment that, in the fight over agent-interoperability standards, riding a standard that already has adoption beats locking developers into a proprietary one. The same instinct seems to show in spreading compute across Microsoft, Oracle, Nvidia, AMD, and CoreWeave rather than one vendor — avoiding both single-vendor dependency and supply constraints, while attempting to fund an infrastructure buildout on the scale of the reported $500 billion Stargate project through several risk-sharing partnerships at once.
:::

## Business model

OpenAI's revenue rests on two pillars: ChatGPT subscriptions for individuals and businesses, and usage-based API billing for developers.

:::fact
ChatGPT's pricing includes a free tier plus Plus ($20/month, launched February 2023), and Pro ($200/month, launched December 2024). Per third-party pricing roundups, the lower-cost "ChatGPT Go" plan expanded from select markets (₹399/month in India) to a global $8/month plan in January 2026, and a $100/month Pro step was added (the official pricing page blocks automated access, so we could not confirm this from a primary source). Team, Business, and Enterprise plans exist for organizations. On funding, following the October 2025 restructuring, the company was reported at an $852 billion valuation as of April 2026, with Microsoft's cumulative investment reported to exceed $13 billion. In September 2026 it was reported to be weighing a new funding round at a valuation of up to $1.5 trillion (Forbes; unconfirmed). On going public, it confirmed an IPO filing in June 2026, and a delay to 2027 was reported that September (aggregated Wikipedia reporting). At the same time, compute commitments have stacked up at an extraordinary scale: a five-year, $300 billion deal with Oracle, and the roughly $500 billion Stargate buildout with Oracle, SoftBank, and MGX.
:::

:::guess
The combination of 900 million weekly users and hundred-billion-dollar-scale compute contracts stacking up at the same time suggests ChatGPT already commands enormous demand, while the compute investment required to serve that demand keeps running ahead of it. Continuing to raise for-profit-scale capital while the nonprofit OpenAI Foundation retains 26% ownership carries the same tension we saw dissecting Anthropic: an organization chartered around a safety/public-benefit mission simultaneously running a business built to raise enormous amounts of capital. How much practical bite that two-tier governance structure retains is something only future decisions, not the structure itself, can demonstrate.
:::

A company born as a nonprofit research lab became, in a decade, one running a consumer product used by 900 million people weekly alongside infrastructure commitments in the hundreds of billions of dollars. What this dissection of ChatGPT and OpenAI reveals is a consistently pragmatic set of choices: ride a rival's standard rather than fight over one, diversify compute sourcing rather than depend on a single vendor, and keep the nonprofit banner while maximizing capital raised as a for-profit enterprise.
