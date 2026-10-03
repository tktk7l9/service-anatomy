---
service: "Perplexity"
title: "No Markup on the Model, Revenue From Search Infrastructure Instead — Perplexity's Business Design and Its Publisher Lawsuits"
description: "Perplexity, the AI search engine that answers with citations. It routes models from OpenAI, Anthropic, Google, and others at each model's published rates, pushing monetization instead toward usage-based search API and tool-call fees. At the same time, it faces copyright claims from multiple news organizations, including the BBC, the New York Times, Yomiuri Shimbun, Asahi Shimbun, and Nikkei. A dissection of Perplexity's structure from official sources."
lead: "Perplexity's own documentation states it bills third-party models \"at each model's published rates.\" It doesn't monetize on model margin — it monetizes on usage-based search API and tool-call fees instead. But the content behind those answers comes from news organizations, and the BBC, the New York Times, Yomiuri Shimbun, Asahi Shimbun, and Nikkei have all raised copyright claims in succession. This dissects a company that sells answers without producing what the answers are built from."
category: ai-tool
tags: [ai-search, answer-engine, llm-routing, api, publisher-licensing]
publishedAt: "2026-07-23"
updatedAt: "2026-10-03"
lastVerified: "2026-09-28"
serviceUrl: "https://www.perplexity.ai/"
vendor: "Perplexity AI, Inc."
origin: "US"
heroTheme: "perplexity"
scores: { product: 4.0, ux: 4.0, tech: 3.5, business: 3.0 }
techStack:
  - layer: "In-house search models"
    name: "Sonar (model family: Sonar / Sonar Pro / Sonar Reasoning Pro / Sonar Deep Research)"
    confidence: confirmed
    evidence: "Verified on Perplexity's official API documentation that a purpose-segmented model lineup is listed, from the lightweight search model Sonar through reasoning-focused Sonar Reasoning Pro to Sonar Deep Research for exhaustive research (re-verified 2026-09-28). The same page carries a notice that Sonar Chat Completions is now the Agent API and that Sonar will be supported until September 27, 2026"
    evidenceUrl: "https://docs.perplexity.ai/getting-started/models"
  - layer: "Third-party model routing"
    name: "OpenAI / Anthropic / Google / xAI (multi-LLM routing)"
    confidence: confirmed
    evidence: "Perplexity's official API documentation states the Agent API provides third-party models from OpenAI, Anthropic, Google, xAI, Z.AI, Moonshot AI, and NVIDIA with transparent, token-based pricing at each model's published rates (verified 2026-09-28)"
    evidenceUrl: "https://docs.perplexity.ai/getting-started/pricing"
  - layer: "Routed models (built by Google)"
    name: "Gemini (3.1 Pro / 3.8 Flash, etc.)"
    confidence: confirmed
    evidence: "Verified on the Agent API model list in Perplexity's official API documentation that eight Google Gemini models, including google/gemini-3.1-pro-preview and google/gemini-3.8-flash, are listed with per-token rates (2026-09-28)"
    evidenceUrl: "https://docs.perplexity.ai/docs/agent-api/models"
  - layer: "Cloud infrastructure"
    name: "AWS (Amazon Bedrock / Amazon SageMaker)"
    confidence: confirmed
    evidence: "AWS's official case study states that Perplexity chose to build on AWS and chose AWS for training and inference of its models, that it offers Claude through Amazon Bedrock, and that it trains with Amazon SageMaker HyperPod and Amazon EC2"
    evidenceUrl: "https://aws.amazon.com/solutions/case-studies/perplexity-bedrock-case-study/"
  - layer: "Cloud infrastructure (additional contract)"
    name: "Microsoft Azure"
    confidence: likely
    evidence: "Per aggregated Wikipedia reporting (press-based), Perplexity signed a three-year, $750 million agreement with Microsoft in January 2026 to use Azure and Foundry, with AWS remaining its main cloud provider. We found no official announcement, hence \"likely\""
  - layer: "In-house browser"
    name: "Comet (Chromium-based browser)"
    confidence: likely
    evidence: "Per aggregated Wikipedia reporting, a Chromium-based AI-integrated browser launched subscription-exclusive in July 2025 and was opened up for free in October the same year. We could not reach Perplexity's own page this time, hence \"likely\""
  - layer: "API billing model"
    name: "Search API ($5.00 per 1,000 requests, plus metered tool calls)"
    confidence: confirmed
    evidence: "Perplexity's official API documentation states the Search API is billed at $5.00 per 1,000 requests independent of tokens ($1.00 with Fast Search), and tool calls are billed per invocation: web_search $0.0025, fetch_url $0.0005, people_search and finance_search $0.005 (verified 2026-09-28)"
    evidenceUrl: "https://docs.perplexity.ai/getting-started/pricing"
sources:
  - label: "Perplexity official API documentation: Models (the Sonar model family lineup)"
    url: "https://docs.perplexity.ai/getting-started/models"
    accessedAt: "2026-09-28"
  - label: "Perplexity official API documentation: Pricing (Agent API/Search API/tool-call fee structure)"
    url: "https://docs.perplexity.ai/getting-started/pricing"
    accessedAt: "2026-09-28"
  - label: "Perplexity official API documentation: Agent API Models (routed models and their rates)"
    url: "https://docs.perplexity.ai/docs/agent-api/models"
    accessedAt: "2026-09-28"
  - label: "AWS official case study: Perplexity (built on AWS, Claude offered through Amazon Bedrock)"
    url: "https://aws.amazon.com/solutions/case-studies/perplexity-bedrock-case-study/"
    accessedAt: "2026-09-28"
  - label: "Google official: Gemini API pricing (used to cross-check the rates Perplexity lists)"
    url: "https://ai.google.dev/gemini-api/docs/pricing"
    accessedAt: "2026-09-28"
  - label: "Wikipedia: Perplexity AI (founding history, funding trajectory, Comet browser, the Microsoft cloud agreement, publisher copyright disputes aggregated)"
    url: "https://en.wikipedia.org/wiki/Perplexity_AI"
    accessedAt: "2026-09-28"
---

## Service overview

Perplexity is the AI search engine founded in August 2022 by Aravind Srinivas and three co-founders, launching its search service on December 7 that year. Rather than returning a list of links like a traditional search engine, it positions itself as an "answer engine" that generates a cited summary answer on the spot.

:::fact
Per aggregated Wikipedia reporting, funding began with a $26 million Series A in April 2023, passed a $1 billion valuation by April 2024, jumped to $14 billion in June 2025, $20 billion that September, and reached $21.21 billion (Series E-6) in early 2026. Major investors include Jeff Bezos, Nvidia, and Databricks. Per Perplexity's official API documentation, alongside its in-house search-focused "Sonar" model family — from the lightweight Sonar through reasoning-focused Sonar Reasoning Pro to Sonar Deep Research for exhaustive research — it provides third-party models from OpenAI, Anthropic, Google, xAI, Z.AI, Moonshot AI, and NVIDIA via the Agent API with transparent, token-based pricing at each model's published rates (verified September 28, 2026; the first edition of this article described this as "no markup").
:::

:::pull
No margin added on top of model usage. Revenue comes from usage-based search infrastructure fees instead. Perplexity sells speed of lookup, not raw model intelligence.
:::

::scorecard

## UX analysis

Perplexity's UX puts a cited answer, not a list of search results, at the center of the experience.

- **Answer and citation share the same screen.** A summarized answer to a query is always shown alongside links to the sources it drew from, letting a user check the citations rather than take the answer on faith.
- **Model choice is handed to the user.** Perplexity Pro lets users choose which model generates the answer — its own Sonar, or a third-party model like GPT, Claude, or Gemini.
- **Extension into a browser reaches beyond the search box.** The Chromium-based Comet browser, released July 2025, integrates AI into browsing broadly — page summarization, image analysis, email drafting help — beyond a single search box.
- **A wide free entry point, but citation quality depends on the source.** A no-registration free tier is available, but the quality of any answer depends directly on the quality of the underlying search results and news content — the foundation of the UX isn't something the company produces itself.

## Tech stack

::techstack

:::fact
Per Perplexity's official API documentation, its in-house "Sonar" search model family spans four tiers: the lightweight, fact-lookup-focused Sonar; Sonar Pro for more complex queries; Sonar Reasoning Pro, focused on chain-of-thought reasoning; and Sonar Deep Research for exhaustive investigation. The same documentation carries a notice that Sonar Chat Completions is now the Agent API and that Sonar will be supported until September 27, 2026. The Agent API states that third-party models from OpenAI, Anthropic, Google, xAI, Z.AI, Moonshot AI, and NVIDIA are available at each model's published rates. When we cross-checked on September 28, 2026, the listed rates for Gemini 3.1 Pro and Gemini 3.8 Flash matched Google's official Gemini API pricing. Billing runs on the Search API at $5.00 per 1,000 requests independent of tokens, with tool calls billed per invocation: web search (web_search) at $0.0025, URL fetch (fetch_url) at $0.0005, and people search and finance search at $0.005. On compute, AWS's official case study states that Perplexity is built on AWS and offers Claude through Amazon Bedrock. Per aggregated Wikipedia reporting (press-based), Perplexity also signed a three-year, $750 million agreement with Microsoft in January 2026 to use Azure, with AWS remaining its main cloud provider.
:::

:::guess
Not marking up third-party model usage, and monetizing instead through usage-based fees on the search infrastructure itself (Search API, tool calls), looks aimed at stepping back from a head-to-head competition on raw model performance and instead claiming a clear position as "infrastructure that gathers and shapes information." Maintaining an in-house Sonar model while still routing to third-party models resembles the same kind of staged in-housing strategy we saw with Cursor first shipping on a fine-tuned third-party model (its 2024 setup), then adding its own models while still offering third-party ones. But most of the information behind any given answer still depends on third-party content from news organizations — and that dependency is plausibly exactly what fuels the copyright disputes described below.
:::

## Business model

Perplexity's revenue rests on two pillars: the individual subscription Perplexity Pro, and usage-based API billing for developers.

:::fact
Per aggregated Wikipedia reporting, Perplexity announced in July 2024 an initiative to share advertising revenue with partners including news organizations, framed as a response to copyright concerns. The same source reports Forbes criticized inadequate attribution in June 2024, the New York Times sent a cease-and-desist over alleged unauthorized use in October that year, and the BBC, Yomiuri Shimbun, Asahi Shimbun, and Nikkei raised copyright claims in succession between June and August 2025. In August 2025, Cloudflare research reportedly identified undeclared crawlers bypassing robots.txt directives.
:::

:::guess
Not taking a margin on model usage while monetizing through search infrastructure fees implies a revenue structure that assumes continued free access to news content as its "raw material." The July 2024 revenue-sharing program looks like a response to that assumption starting to break down, but with copyright claims from multiple news organizations still ongoing, the scope and terms of any revenue-sharing arrangement could ultimately force a rework of Perplexity's cost structure itself. Behind a valuation that jumped from $1 billion in 2024 to $21.2 billion in early 2026, how this copyright dispute resolves remains an unsettled variable in whether the business is sustainable long-term.
:::

No margin on the model, revenue from usage-based search infrastructure fees instead. It sells answers without producing the content those answers are built from. What this dissection of Perplexity reveals is a company betting everything on how information is gathered and shaped — growing fast while carrying an unresolved friction with the news organizations underneath it.
