---
service: "Claude"
title: "The Lab Guards Safety, the Product Chases Speed — Anthropic's Split-Brand Sprint Through Five Years"
description: "Founded in 2021 as an AI safety research lab, Anthropic grew into a company valued at $965 billion within five years. It split its web presence into anthropic.com (research and safety) and claude.com (product), open-sourced its own protocol MCP, and sources compute from Amazon, Google, and Microsoft simultaneously. A dissection of Claude and Anthropic from public information."
lead: "Anthropic's official presence is now split across two domains: anthropic.com, which talks about research and safety, and claude.com, which sells the product. The company, started in 2021 by seven researchers who left OpenAI to build \"safer AI,\" reached a $965 billion valuation in May 2026 and reportedly filed confidentially for an IPO the following month. This is a dissection of how a safety mission and IPO-track growth speed coexist inside one company."
category: ai-tool
tags: [ai-assistant, llm, api, developer-tools, mcp]
publishedAt: "2026-07-23"
updatedAt: "2026-07-23"
lastVerified: "2026-07-23"
serviceUrl: "https://claude.com/"
vendor: "Anthropic, PBC"
origin: "US"
heroTheme: "claude"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 4.0 }
techStack:
  - layer: "Foundation models"
    name: "Claudeモデルファミリー（最新はClaude Sonnet 5）"
    confidence: confirmed
    evidence: "Verified on Anthropic's official newsroom that Claude Sonnet 5, described as delivering frontier performance across coding, agents, and professional work, shipped on 2026-06-30"
    evidenceUrl: "https://www.anthropic.com/news"
  - layer: "Compute (primary contract)"
    name: "AWS Trainium / Inferentia（Amazon）"
    confidence: confirmed
    evidence: "Official announcement states AWS is Anthropic's primary cloud provider for mission-critical workloads, using Amazon's own Trainium and Inferentia chips for training and serving. Amazon committed up to $4 billion in investment"
    evidenceUrl: "https://www.anthropic.com/news/anthropic-amazon"
  - layer: "Compute (supplementary contract)"
    name: "Google Cloud TPU"
    confidence: likely
    evidence: "Beyond the AWS relationship, multiple outlets report Google also invests in and supplies TPU capacity to Anthropic (a $500M investment and $2B combined commitment announced October 2023, with reports of expanded TPU supply in 2025). We could not confirm technical specifics on Anthropic's own site, hence \"likely\""
  - layer: "Agent interoperability protocol"
    name: "Model Context Protocol (MCP)"
    confidence: confirmed
    evidence: "Official announcement (2024-11-25) states Anthropic open-sourced MCP as an open standard for securely connecting AI to data sources, releasing the spec, SDKs, and a library of server implementations at no cost"
    evidenceUrl: "https://www.anthropic.com/news/model-context-protocol"
  - layer: "Developer runtime"
    name: "Claude Code"
    confidence: confirmed
    evidence: "Official product page states it is an agentic CLI that lets developers work directly on their codebase from the terminal, IDE extensions, web, mobile, and Slack"
    evidenceUrl: "https://claude.com/product/claude-code"
sources:
  - label: "Anthropic official: Company (Public Benefit Corporation mission and governance)"
    url: "https://www.anthropic.com/company"
    accessedAt: "2026-07-23"
  - label: "Anthropic official: Amazon partnership announcement (investment amount, role of AWS Trainium/Inferentia)"
    url: "https://www.anthropic.com/news/anthropic-amazon"
    accessedAt: "2026-07-23"
  - label: "Anthropic official: Model Context Protocol announcement (2024-11-25, open standardization)"
    url: "https://www.anthropic.com/news/model-context-protocol"
    accessedAt: "2026-07-23"
  - label: "Claude official: Pricing (Free/Pro/Max/Team/Enterprise fee structure)"
    url: "https://claude.com/pricing"
    accessedAt: "2026-07-23"
  - label: "Claude official: Claude Code product page (distribution channels, features)"
    url: "https://claude.com/product/claude-code"
    accessedAt: "2026-07-23"
  - label: "Wikipedia: Anthropic (founding history, funding history, valuation trajectory, IPO reporting aggregated)"
    url: "https://en.wikipedia.org/wiki/Anthropic"
    accessedAt: "2026-07-23"
---

## Service overview

Anthropic was founded on January 26, 2021, by seven researchers who had left OpenAI, including siblings Dario Amodei and Daniela Amodei. The mission was AI safety research paired with a conversational AI product built on that research: Claude. The company chose the Public Benefit Corporation (PBC) legal structure, and its official site states its charter purpose as "the responsible development and maintenance of advanced AI for the long-term benefit of humanity."

:::fact
Anthropic's official presence today is split across two domains — anthropic.com for research and safety messaging, and claude.com for the product (verified directly at the time of writing). On scale: headcount is reported at roughly 2,500 as of 2026. Funding began with a $124 million seed round in May 2021, followed by Amazon's investment (up to $4 billion) and Google's (a combined $2 billion) in 2023, culminating in a $65 billion round in May 2026 that brought the valuation to $965 billion, per aggregated reporting (Wikipedia). The company reportedly filed confidentially for an IPO the same June, targeting a fall debut.
:::

:::pull
A company born as "an AI safety lab" became, in five years, a $965 billion company preparing to go public. Safety and growth speed were supposed to be two objectives in tension — here they sit side by side.
:::

::scorecard

## UX analysis

Claude's UX deliberately spreads across multiple entry points rather than converging on a single chat window.

- **Company and product live on separate domains.** Research and safety messaging stays on anthropic.com; the actual product lives on claude.com. The company's public posture (safety) and the product's posture (usefulness) are not blended on the same site.
- **An unusually large number of developer entry points.** Claude Code is reachable from the terminal, VS Code/JetBrains extensions, the browser (claude.ai/code), iOS/Android apps, Slack, and a desktop app — six channels for the same idea of "put AI next to the codebase," rather than betting on one channel.
- **Five pricing tiers from Free through Enterprise.** Individual use ($0–$20/month), heavy use via Max (from $100/month), Team (per-seat), and Enterprise (usage-based plus seats, or custom contracts) segment by usage intensity rather than a single flat plan.
- **API billing is separate.** Subscriptions cover chat/agent usage; API usage is billed separately on a usage basis. Developers effectively choose between "using it as a product" and "embedding it as infrastructure," with different payment models for each.

## Tech stack

::techstack

:::fact
Anthropic spreads its compute sourcing across three companies — Amazon, Google, and Microsoft. Per its official announcement, AWS is its "primary cloud provider for mission-critical workloads," using Amazon's own Trainium and Inferentia chips for training and serving. Separately, its partnership with Google (a combined $2 billion in investment) is reported to include TPU access. In November 2024, Anthropic open-sourced the Model Context Protocol (MCP), an open standard for securely connecting AI to data sources, releasing the spec, SDKs, and a library of server implementations for major platforms at no cost.
:::

:::guess
Spreading compute across three major clouds (AWS, Google Cloud, Microsoft Azure) looks like a hedge against the pricing power and supply risk that comes with depending on a single vendor. Where a major rival is reported to be deeply tied to one specific cloud provider, Anthropic appears to separate capital investment from compute supply and draw both from multiple partners at once — diversifying capital and compute independently. Open-sourcing MCP reads as an extension of the same instinct: rather than keeping the protocol that connects agents and tools proprietary, Anthropic released it as an industry standard, positioning Claude not merely as a player operating on top of the standard but as the party that authored it.
:::

## Business model

Anthropic's revenue rests on two pillars: individual/team subscriptions and usage-based API billing for developers.

:::fact
Per the official pricing page, Claude's individual plans run Free (no cost), Pro ($17–$20/month), Max (from $100/month, at 5x or 20x the usage), Team (per-seat, $20–$125/month), and Enterprise (self-serve per-seat plus API usage, or a custom contract). API usage is billed separately, scaling with model and task. On the funding side, the company moved from a $124 million seed in 2021 through investment and partnership deals with Amazon (up to $4 billion), Google (a combined $2 billion), and Microsoft (a roughly $30 billion Azure compute deal in November 2025) to a reported $965 billion valuation in May 2026, followed by a confidential IPO filing that June.
:::

:::guess
The subscription-plus-API structure pairs predictable individual subscription revenue with usage-based enterprise revenue that scales with adoption, and the investment in developer surfaces like Claude Code and MCP looks aimed at fattening the latter. That the company is heading toward an IPO while still operating as a Public Benefit Corporation with a Long-Term Benefit Trust in its governance suggests it is carrying an unresolved structural tension into public markets: if short-term shareholder interest ever collides with the chartered mission of "responsible AI development," which one wins is a question the structure raises but cannot yet answer. That will only be testable after the company is actually public.
:::

A company that began as a safety research lab has, in five years, taken investment and compute from three of the largest cloud companies, pushed its own protocol into an industry standard, and arrived at the doorstep of an IPO. What this dissection of Anthropic reveals is a consistently distributed design philosophy: to grow as fast as possible while carrying a safety constraint, split the company's public face in two, spread compute across multiple partners, and seek technical leadership through standardization rather than lock-in.
