---
service: "Perplexity"
title: "No Markup on the Model, Revenue From Search Infrastructure Instead — Perplexity's Business Design and Its Publisher Lawsuits"
description: "Perplexity, the AI search engine that answers with citations. It routes models from OpenAI, Anthropic, Google, and others at \"no markup,\" pushing monetization instead toward usage-based search API and tool-call fees. At the same time, it faces copyright claims from multiple news organizations, including the BBC, the New York Times, Yomiuri Shimbun, Asahi Shimbun, and Nikkei. A dissection of Perplexity's structure from official sources."
lead: "Perplexity's own documentation states it passes through third-party model costs to users \"with no markup.\" It doesn't monetize on model margin — it monetizes on usage-based search API and tool-call fees instead. But the content behind those answers comes from news organizations, and the BBC, the New York Times, Yomiuri Shimbun, Asahi Shimbun, and Nikkei have all raised copyright claims in succession. This dissects a company that sells answers without producing what the answers are built from."
category: ai-tool
tags: [ai-search, answer-engine, llm-routing, api, publisher-licensing]
publishedAt: "2026-07-23"
updatedAt: "2026-07-23"
lastVerified: "2026-07-23"
serviceUrl: "https://www.perplexity.ai/"
vendor: "Perplexity AI, Inc."
origin: "US"
heroTheme: "perplexity"
scores: { product: 4.0, ux: 4.0, tech: 3.5, business: 3.0 }
techStack:
  - layer: "In-house search models"
    name: "Sonarモデルファミリー（Sonar / Sonar Pro / Sonar Reasoning Pro / Sonar Deep Research）"
    confidence: confirmed
    evidence: "Verified on Perplexity's official API documentation that a purpose-segmented model lineup is listed, from the lightweight search model Sonar through reasoning-focused Sonar Reasoning Pro to Sonar Deep Research for exhaustive research"
    evidenceUrl: "https://docs.perplexity.ai/getting-started/models"
  - layer: "Third-party model routing"
    name: "OpenAI / Anthropic / Google / xAI等のマルチLLMルーティング"
    confidence: confirmed
    evidence: "Perplexity's official API documentation states the Agent API routes third-party models from OpenAI, Anthropic, Google, xAI, and others \"with no markup,\" at provider rates"
    evidenceUrl: "https://docs.perplexity.ai/getting-started/pricing"
  - layer: "In-house browser"
    name: "Cometブラウザ（Chromiumベース）"
    confidence: likely
    evidence: "Per aggregated Wikipedia reporting, a Chromium-based AI-integrated browser launched subscription-exclusive in July 2025 and was opened up for free in October the same year. We could not reach Perplexity's own page this time, hence \"likely\""
  - layer: "API billing model"
    name: "Search API（$5.00/1,000リクエスト）+ ツール呼び出し従量課金"
    confidence: confirmed
    evidence: "Perplexity's official API documentation states the Search API is billed at $5.00 per 1,000 requests independent of tokens, and each tool call (web search, URL fetch, etc.) is billed at $0.005"
    evidenceUrl: "https://docs.perplexity.ai/getting-started/pricing"
sources:
  - label: "Perplexity official API documentation: Models (the Sonar model family lineup)"
    url: "https://docs.perplexity.ai/getting-started/models"
    accessedAt: "2026-07-23"
  - label: "Perplexity official API documentation: Pricing (Agent API/Search API/tool-call fee structure)"
    url: "https://docs.perplexity.ai/getting-started/pricing"
    accessedAt: "2026-07-23"
  - label: "Wikipedia: Perplexity AI (founding history, funding trajectory, Comet browser, publisher copyright disputes aggregated)"
    url: "https://en.wikipedia.org/wiki/Perplexity_AI"
    accessedAt: "2026-07-23"
---

## Service overview

Perplexity is the AI search engine founded in August 2022 by Aravind Srinivas and three co-founders, launching its search service on December 7 that year. Rather than returning a list of links like a traditional search engine, it positions itself as an "answer engine" that generates a cited summary answer on the spot.

:::fact
Per aggregated Wikipedia reporting, funding began with a $26 million Series A in April 2023, passed a $1 billion valuation by April 2024, jumped to $14 billion in June 2025, $20 billion that September, and reached $21.21 billion (Series E-6) in early 2026. Major investors include Jeff Bezos, Nvidia, and Databricks. Per Perplexity's official API documentation, alongside its in-house search-focused "Sonar" model family — from the lightweight Sonar through reasoning-focused Sonar Reasoning Pro to Sonar Deep Research for exhaustive research — it routes third-party models from OpenAI, Anthropic, Google, and xAI via the Agent API "with no markup," at the providers' own listed rates.
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
Per Perplexity's official API documentation, its in-house "Sonar" search model family spans four tiers: the lightweight, fact-lookup-focused Sonar; Sonar Pro for more complex queries; Sonar Reasoning Pro, focused on chain-of-thought reasoning; and Sonar Deep Research for exhaustive investigation. Separately, the Agent API can route third-party models from OpenAI, Anthropic, Google, and xAI "with no markup." Billing runs on the Search API at $5.00 per 1,000 requests independent of tokens, with tool calls like web search or URL fetch billed at $0.005 each.
:::

:::guess
Not marking up third-party model usage, and monetizing instead through usage-based fees on the search infrastructure itself (Search API, tool calls), looks aimed at stepping back from a head-to-head competition on raw model performance and instead claiming a clear position as "infrastructure that gathers and shapes information." Maintaining an in-house Sonar model while still routing to third-party models resembles the same kind of staged in-housing strategy we saw with Cursor running a fine-tuned third-party model alongside its own frontier model. But most of the information behind any given answer still depends on third-party content from news organizations — and that dependency is plausibly exactly what fuels the copyright disputes described below.
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
