---
service: "xAI"
title: "From xAI to SpaceXAI — The Company Behind Grok Now Rents Its One-Gigawatt Compute to Rivals"
description: "xAI, the developer of Grok, absorbed X in March 2025, was absorbed by SpaceX in February 2026, and now calls itself SpaceXAI. According to the Form S-1 SpaceX filed in May 2026, the AI segment had 2025 revenue of $3.2 billion, an operating loss of $6.36 billion and capital expenditures of $12.7 billion. It has also signed contracts to rent the roughly one gigawatt of compute it built around Memphis to Anthropic and Google for a monthly fee. We dissect Grok 4.7 API pricing, SuperGrok plans, a backend written in Rust and the Cursor acquisition from official docs and the prospectus."
lead: "Open x.ai and the page title reads SpaceXAI. xAI, the company that built Grok, took in its founder's other company X in March 2025, became a SpaceX subsidiary in February 2026 and changed its sign that July. What SpaceX's IPO prospectus revealed for the first time is a company that started earning from the compute that trains its models before earning from the models themselves. The tenant paying $1.25 billion a month is Anthropic, a direct competitor in AI assistants."
category: ai-tool
tags: [ai-assistant, llm, api, data-center, coding-agent]
publishedAt: "2026-10-01"
updatedAt: "2026-10-01"
lastVerified: "2026-10-01"
serviceUrl: "https://x.ai"
vendor: "Space Exploration Technologies Corp. (SpaceXAI, formerly xAI)"
origin: "US"
heroTheme: "xai"
scores: { product: 4.0, ux: 3.5, tech: 4.5, business: 3.0 }
techStack:
  - layer: "Foundation model"
    name: "Grok 4.7 (500k context, reasoning effort low / medium / high / xhigh)"
    confidence: confirmed
    evidence: "The Models page of the official docs lists grok-4.7 with a 500k-token context window at $2 input and $6 output per million tokens (prompts under 200k tokens). The Grok 4.7 overview page states that reasoning effort can be set to low, medium, high (default) or xhigh and that the knowledge cutoff is May 2026 (checked 2026-10-01)"
    evidenceUrl: "https://docs.x.ai/developers/models"
  - layer: "Compute"
    name: "COLOSSUS / COLOSSUS II (approx. 1.0 GW; NVIDIA H100, GB200, GB300)"
    confidence: confirmed
    evidence: "The Form S-1 SpaceX filed with the SEC (2026-05-20) states that COLOSSUS and COLOSSUS II together provide approximately 1.0 gigawatt of compute power. COLOSSUS brought about 100,000 H100s (about 130 MW) online in 122 days, COLOSSUS II brought about 110,000 GB200s (about 210 MW) online in 91 days, and a further 110,000 GB300s (220 MW) in 64 days"
    evidenceUrl: "https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm"
  - layer: "API"
    name: "Responses API / Chat Completions (OpenAI SDK compatible)"
    confidence: confirmed
    evidence: "The Grok 4.7 overview page in the official docs shows code that points the OpenAI SDK's baseURL at https://api.x.ai/v1 and lists both the Responses API and Chat Completions. The docs index (llms.txt) also lists a gRPC API reference"
    evidenceUrl: "https://docs.x.ai/developers/grok-4-7"
  - layer: "Data residency"
    name: "US regional endpoint (us.api.x.ai)"
    confidence: confirmed
    evidence: "The official docs state that the default api.x.ai does not guarantee the processing region, and that us.api.x.ai/v1 should be used when processing must happen in the United States. It serves two models, grok-4.7 and grok-4.6, and token usage costs 10% more"
    evidenceUrl: "https://docs.x.ai/developers/advanced-api-usage/regions"
  - layer: "Coding agent"
    name: "Grok Build (TUI / headless CLI / Agent Client Protocol)"
    confidence: confirmed
    evidence: "The official docs describe a coding agent usable in three ways: an interactive TUI, headless runs from scripts (grok -p), and embedding in other apps through the Agent Client Protocol"
    evidenceUrl: "https://docs.x.ai/build/overview"
  - layer: "Backend language"
    name: "Rust"
    confidence: confirmed
    evidence: "An official job posting (Backend Engineer - API) states that \"most of our backend infrastructure is written in Rust\". The same posting asks for expert knowledge of gRPC (checked 2026-10-01)"
    evidenceUrl: "https://job-boards.greenhouse.io/xai/jobs/5120536007"
  - layer: "Training framework"
    name: "JAX / Python / Rust / C++"
    confidence: likely
    evidence: "An official job posting (Member of Technical Staff - RL Training Framework) lists proficiency in Python, Jax, Rust and/or C++ as a qualification. It is a hiring requirement, not a statement of the actual stack, so this is marked likely"
    evidenceUrl: "https://job-boards.greenhouse.io/xai/jobs/5186992007"
  - layer: "Cluster operations"
    name: "Kubernetes"
    confidence: likely
    evidence: "An official job posting (Member Of Technical Staff - Cloud Infrastructure, US Government team) asks for experience running training and inference clusters across bare metal and cloud with Kubernetes. It is a posting for the government team and does not describe the company-wide setup, so this is marked likely"
    evidenceUrl: "https://job-boards.greenhouse.io/xai/jobs/5133071007"
  - layer: "Web frontend"
    name: "Next.js"
    confidence: likely
    evidence: "Our own observation (2026-10-01). The HTML of grok.com loads files under /_next/static/, and the response headers of docs.x.ai include x-nextjs-cache and x-nextjs-prerender. We found no official statement"
  - layer: "Edge/CDN"
    name: "Cloudflare"
    confidence: likely
    evidence: "Our own observation (2026-10-01). The response headers of x.ai, grok.com, docs.x.ai and api.x.ai all show server: cloudflare. x.ai returns a 403 (challenge) to non-browser requests. We found no official statement"
sources:
  - label: "SEC: Space Exploration Technologies Corp. Form S-1 (filed 2026-05-20; history of the xAI and X combinations, AI segment results, COLOSSUS, the Anthropic agreement, paid subscribers)"
    url: "https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm"
    accessedAt: "2026-10-01"
  - label: "SpaceXAI official docs: Models (model list and API pricing)"
    url: "https://docs.x.ai/developers/models"
    accessedAt: "2026-10-01"
  - label: "SpaceXAI official docs: Pricing (tool calls, Batch, Priority, Grok 4.7 Fast, US endpoint)"
    url: "https://docs.x.ai/developers/pricing"
    accessedAt: "2026-10-01"
  - label: "SpaceXAI official docs: Grok 4.7 (overview and where it runs)"
    url: "https://docs.x.ai/developers/grok-4-7"
    accessedAt: "2026-10-01"
  - label: "SpaceXAI official docs: Release Notes (updates from June to September 2026)"
    url: "https://docs.x.ai/developers/release-notes"
    accessedAt: "2026-10-01"
  - label: "SpaceXAI official docs: Regional Endpoints (scope of the US endpoint)"
    url: "https://docs.x.ai/developers/advanced-api-usage/regions"
    accessedAt: "2026-10-01"
  - label: "SpaceXAI official docs: Security FAQ (no training on API data, 30-day retention)"
    url: "https://docs.x.ai/developers/faq/security"
    accessedAt: "2026-10-01"
  - label: "SpaceXAI official docs: FAQ - Grok Website / Apps (weekly usage pool, extra credits, relationship with X Premium)"
    url: "https://docs.x.ai/grok/faq"
    accessedAt: "2026-10-01"
  - label: "SpaceXAI official docs: Grok Bot (overview and eligible plans)"
    url: "https://docs.x.ai/grok-bot/overview"
    accessedAt: "2026-10-01"
  - label: "SpaceXAI official docs: Grok Build (coding agent overview)"
    url: "https://docs.x.ai/build/overview"
    accessedAt: "2026-10-01"
  - label: "SpaceXAI official: Introducing Grok 4.7 (x.ai cannot be fetched directly, so checked via the Internet Archive capture of 2026-09-29)"
    url: "https://web.archive.org/web/20260929101703/https://x.ai/news/grok-4-7"
    accessedAt: "2026-10-01"
  - label: "Apple App Store (US): Grok (seller X Corp., in-app purchase prices)"
    url: "https://apps.apple.com/us/app/grok/id6670324846"
    accessedAt: "2026-10-01"
  - label: "Apple App Store (US): X (in-app purchase prices of the X Premium plans)"
    url: "https://apps.apple.com/us/app/x/id333903271"
    accessedAt: "2026-10-01"
  - label: "SpaceXAI official job posting: Backend Engineer - API (most of the backend is Rust)"
    url: "https://job-boards.greenhouse.io/xai/jobs/5120536007"
    accessedAt: "2026-10-01"
  - label: "SpaceXAI official job posting: Member of Technical Staff - RL Training Framework (Python, Jax, Rust, C++)"
    url: "https://job-boards.greenhouse.io/xai/jobs/5186992007"
    accessedAt: "2026-10-01"
  - label: "Yahoo Finance: Anthropic to rent all AI capacity at SpaceX's Colossus data center (2026-05-06)"
    url: "https://finance.yahoo.com/news/anthropic-to-rent-all-ai-capacity-at-spacexs-colossus-data-center-180327774.html"
    accessedAt: "2026-10-01"
  - label: "The Verge: xAI is becoming SpaceXAI (2026-05-06)"
    url: "https://www.theverge.com/ai-artificial-intelligence/925469/xai-is-becoming-spacexai"
    accessedAt: "2026-10-01"
  - label: "CNBC: Google to pay SpaceX $920 million a month for compute capacity at xAI data centers (2026-06-05)"
    url: "https://www.cnbc.com/2026/06/05/google-to-pay-spacex-920-million-a-month-for-xai-compute-capacity.html"
    accessedAt: "2026-10-01"
  - label: "CNBC: SpaceX says it can buy Cursor later this year for $60 billion (2026-04-21)"
    url: "https://www.cnbc.com/2026/04/21/spacex-says-it-can-buy-cursor-later-this-year-for-60-billion-or-pay-10-billion-for-our-work-together.html"
    accessedAt: "2026-10-01"
  - label: "Business Insider: XAI makes its rebrand to SpaceXAI complete with a new logo (2026-07-06)"
    url: "https://www.businessinsider.com/xai-rebrand-spacexai-new-logo-x-handle-spacex-2026-7"
    accessedAt: "2026-10-01"
  - label: "Cursor official blog: Cursor is now a part of SpaceX (2026-08-14)"
    url: "https://cursor.com/blog/joining-spacex"
    accessedAt: "2026-10-01"
  - label: "Bloomberg Law: SpaceX Completes $60 Billion Acquisition of AI Startup Cursor (2026-08-14)"
    url: "https://news.bloomberglaw.com/mergers-and-acquisitions/spacex-completes-its-60-billion-cursor-acquisition"
    accessedAt: "2026-10-01"
---

AI companies usually sell models. They build a capable model and recover the cost through monthly app subscriptions and metered API usage. xAI walked the same road, but the IPO prospectus published in 2026 shows a second product: the compute in the data centres it built to train those models. This article is not about [X](/en/articles/x) the social network. It is about the AI company that makes Grok.

One note on method. x.ai itself returns a Cloudflare challenge (403) to non-browser requests, so this article is based on the official docs (docs.x.ai), SEC filings, official job postings, App Store listings and press reports. We did not operate any paid feature; everything about paid plans is read from published descriptions.

## Service overview

xAI develops the conversational AI Grok and the Grok models underneath it. The product line now covers Grok chat (grok.com, the iOS and Android apps, and the integration in X), Grok Imagine for images and video, Grok Voice, the coding agent Grok Build, Grok Bot, which carries out work on a cloud computer, and an API for developers.

:::fact
According to the Form S-1 SpaceX filed with the SEC (2026-05-20), xAI was founded in 2023 and launched Grok-1 in November of that year. On March 28, 2025 it took in X Holdings Corp., the parent of X (the S-1 calls this the "X Merger"), and on February 2, 2026 xAI's parent X.AI Holdings Corp. was acquired by SpaceX (the "xAI Merger"). Both were accounted for as transactions between entities under common control, and SpaceX's financial statements were retrospectively recast to include xAI and X. The S-1 defines today's xAI as "X.AI Holdings LLC" and splits the business into three segments: Space, Connectivity and AI. Grok and X both sit in the AI segment.
:::

:::fact
The name changed too. The Verge (2026-05-06) reported that the company first called itself "SpaceXAI" in the announcement of its partnership with Anthropic, and quoted Elon Musk as saying that "xAI will be dissolved as a separate company, so it will just be SpaceXAI, the AI products from SpaceX." According to Business Insider (2026-07-06), the handle of the xAI account on X changed to SpaceXAI and a new logo was unveiled. The same article reports that SpaceX went public in June 2026, raising $75 billion at a valuation of around $1.77 trillion. In what we could check on 2026-10-01, the official docs write the company name as "SpaceXAI" and Grok's own description reads "an AI assistant built by SpaceXAI". The xAI name remains in the domain (x.ai), the API name (xAI API), the SDK (xai_sdk) and the App Store copyright line (xAI Inc.).
:::

:::pull
The company that absorbed X was then absorbed by SpaceX. The sign changed twice, but what sits at the centre of the product did not: Grok, and the compute that trains it.
:::

::scorecard

The reasons behind the scores, up front. Product (4.0) reflects a single model family covering chat, image and video, voice, coding, agents and an API, with about 1.9 million paid Grok subscribers. UX (3.5) credits the easy-to-follow weekly usage pool that spans products, and deducts for support being split by where you bought the plan and for the fact that we did not operate the paid features. Tech (4.5) reflects about one gigawatt of compute brought online in a short time and documentation prepared in machine-readable form. Business (3.0) weighs both sides: the AI segment's operating loss exceeds its revenue, while compute rental has become a new pillar of income.

## UX analysis

Grok's UX is being rebuilt so that users do not have to count how much of which product they have used.

- **Usage is merged into one weekly pool**. According to the official FAQ, since June 2026 paid plans have dropped the separate daily limits for Chat, Imagine, Voice and Build in favour of one weekly pool that can be spent across products. The FAQ explains that this removes the case where you run out of image generation while chat allowance is left over.
- **Running out is not a hard stop**. The same FAQ says paid features pause until the next reset when the weekly pool is used up, but chat and voice keep working within the free tier. Users can also buy Extra Usage Credits from $5, turn on Auto Top Up, or move to a higher plan. Credits expire one year after purchase.
- **Three entrances, three support desks**. Grok can be used from grok.com, the mobile apps and X. In exchange, where you cancel or ask for a refund depends on where you bought. The FAQ says web purchases are handled by xAI, App Store purchases by Apple, and X Premium by X (not xAI).
- **More places to connect**. The official docs list connectors for Google Drive, Gmail and Google Calendar, Outlook, SharePoint, OneDrive, Microsoft Teams and Salesforce, plus a way to connect your own MCP server.
- **Grok Bot assumes handing over work, not chatting**. According to the official docs, a Bot with a name and a job keeps working on a cloud computer with a browser, a filesystem and a terminal, and comes back to the user only when approval is needed. It is included in paid individual Cursor plans and the Cursor Teams plan, and can also be used by linking a SuperGrok subscription.

:::fact
The App Store (US) listing for Grok (checked 2026-10-01) shows these in-app purchases: SuperGrok Lite $10.00, SuperGrok $30.00, SuperGrok Plus $100.00 and SuperGrok Heavy $300.00 (the listing does not show the billing period, and there is also a separate "SuperGrok" item at $300.00). The seller is X Corp. Through X, the App Store (US) listing for X shows X Premium Basic at $4.00 a month, X Premium at $11.00 a month and X Premium Plus at $50.00 a month. App Store prices can differ from web prices, and the pricing screen on grok.com requires login, so we could not confirm the web prices.
:::

:::guess
Merging usage into one pool probably matters more as the number of products grows. With separate limits on chat, images, video, voice, coding and agents, a user would have to keep six different balances in mind. A single pool that deducts by compute weight lets the company add a product without adding a row to the price list. On the other hand, the FAQ itself says video generation and long coding tasks consume far more, so a different kind of opacity appears to remain: it is hard to estimate in advance how much of the pool a given action will use.
:::

## Tech stack

::techstack

:::fact
According to the official docs (checked 2026-10-01), the main API model is grok-4.7, with a 500k-token context window priced per million tokens at $2 input, $0.50 cached input and $6 output. When a prompt reaches 200k tokens, every token in that request is billed at double the rate ($4 input, $12 output). grok-4.3 and the grok-4.20 family have a 1M-token context at $1.25 input and $2.50 output. Server-side tools are billed separately: web search and code execution cost $5 per 1,000 calls, while X search is billed per item fetched rather than per call, at $5 per 1,000 posts and $10 per 1,000 profiles. The Batch API discount (20%) exists only for grok-4.3 and the grok-4.20 family, and Priority Processing costs twice the standard rate.
:::

:::fact
According to the release notes, Grok 4.5 shipped in July 2026, Grok 4.6 and Grok Bot in August, and Grok 4.7 in September. The fast variant, Grok 4.7 Fast, is the same model served on faster infrastructure at twice the price (1.5x for long-context requests). It is available only in Cursor and Grok Build and is not offered on the public API. The docs say Grok 4.7 can also be used through the OpenRouter, Vercel and Cloudflare model gateways besides the API. The Security FAQ says API requests and responses are stored for 30 days for abuse investigation and are not used for training without explicit permission.
:::

:::fact
On compute, the Form S-1 (2026-05-20) says the following. The flagship data centre COLOSSUS is in Memphis, Tennessee, and COLOSSUS II spans Memphis and Southaven, Mississippi. Together they provide approximately 1.0 gigawatt of compute power. The first cluster at COLOSSUS (about 100,000 H100s, about 130 MW) came online in 122 days by repurposing the shell of an existing factory. The first cluster at COLOSSUS II (about 110,000 GB200s, about 210 MW) took 91 days, and the next one (110,000 GB300s, 220 MW) took 64 days. The next phase of expansion is expected to add at least 220,000 GB300s and over 400 MW. Power is described as a combination of behind-the-meter generation and battery storage.
:::

:::fact
Benchmarks need to be read with the publisher in mind. SpaceXAI's announcement (Introducing Grok 4.7) says Grok 4.7 uses a new, larger base model than Grok 4.6 and was trained with a longer reinforcement learning run weighted toward tasks that take many hours. The same announcement says Grok 4.7 is at the frontier in price-performance on CursorBench 4.0 and showed the highest safety on HackerBench v0.3, which it describes as its own benchmark. CursorBench comes from Cursor, now part of the same group, and HackerBench is in-house; we have not found independent reproductions.
:::

:::guess
The job postings suggest a backend leaning on Rust, JAX in the training stack, and Kubernetes across bare metal and cloud for government work. Postings describe the experience being sought, however, and are not documentation of the company-wide architecture. The only firm point is that the API posting states outright that most of the backend is Rust. Making the API callable from the OpenAI SDK as-is appears to be a latecomer's choice to minimise switching effort. Serving every docs page as Markdown when .md is appended, and publishing llms.txt and an MCP server, is presumably a design aimed at being read by coding agents before human developers.
:::

## Business model

There are four revenue lines: advertising on X, X and Grok subscriptions, API access and data licensing, and, added in 2026, compute rental.

:::fact
According to the Form S-1 (2026-05-20), the AI segment (which includes Grok and X) had 2025 revenue of $3,201 million, a loss from operations of $6,355 million and capital expenditures of $12,727 million. For January to March 2026 the figures were revenue of $818 million, a loss from operations of $2,469 million and capital expenditures of $7,723 million. In the same quarter the Space segment spent $1,052 million on capital expenditures and the Connectivity segment (Starlink) $1,332 million, so the AI segment accounts for most of the total. At the end of March 2026 there were approximately 6.3 million paid subscribers: about 4.4 million on X Premium and Premium+, and about 1.9 million on SuperGrok, SuperGrok Heavy and SuperGrok Lite. The filing puts monthly active AI users across Grok and X at approximately 550 million.
:::

:::fact
Compute rental appears in the S-1 as "compute services agreements with third parties". In May 2026 SpaceX entered into cloud services agreements with Anthropic, under which Anthropic pays $1.25 billion per month through May 2029 for access to compute capacity across COLOSSUS and COLOSSUS II (at a reduced fee during the ramp in May and June 2026). Either party can terminate on 90 days' notice. Yahoo Finance (2026-05-06) reported that Anthropic will use all of the capacity at COLOSSUS 1, more than 300 MW through more than 220,000 NVIDIA GPUs. CNBC (2026-06-05), citing a SpaceX regulatory filing, reported that Google also agreed to rent about 110,000 NVIDIA GPUs at $920 million per month from October 2026 through June 2029. The S-1 also names Anthropic and Google as competitors in AI.
:::

:::fact
In coding, the company added a product by acquisition. According to CNBC (2026-04-21), SpaceX announced in April 2026 that it had obtained the right to acquire Cursor for $60 billion or to pay $10 billion for the work the two were doing together. The S-1 describes the deal as a compute agreement combined with an acquisition option, and says it expects the data generated by coding workflows to enhance Grok's training and inference. According to the Cursor official blog and Bloomberg Law (both 2026-08-14), the acquisition closed on August 14, 2026. Our article on [Cursor](/en/articles/cursor) was written before the acquisition.
:::

:::guess
Put side by side, the size of the compute rental stands out. The $1.25 billion Anthropic pays each month exceeds, in a single month, the AI segment's revenue of $818 million for the whole January–March 2026 quarter. Simply adding the Google contract gives $2.17 billion a month, or roughly $26 billion a year if the contracts run as written. The data centres built for a model company appear to have started earning as data centres before earning as a model company. This income, however, rests on contracts either side can end with 90 days' notice, and the tenants may be using the capacity as a bridge until their own compute is ready. A Google spokesperson telling CNBC the deal was made to secure "bridge capacity" is consistent with that reading.

Another reading is the structure the S-1 calls vertical integration. A company that owns the compute, the models and the surfaces that reach users (X, Grok, Cursor) can train its models on data from coding work and ship those models first in its own products. Offering the fast variant of Grok 4.7 only in Cursor and Grok Build looks like that integration made visible on a price list. Meanwhile, the AI segment's operating loss is about twice its revenue and its capital expenditures about four times. Whether the bet pays off presumably depends on how far paid use of Grok itself grows. Lawsuits and regulatory inquiries concerning the safety of Grok's output and the power supply of the data centres have been reported. This article stays with the structural analysis and does not go into individual disputes.
:::

Anthropic, which makes [Claude](/en/articles/claude), has become a tenant, and Google, which makes [Gemini](/en/articles/gemini), is also reported to have signed a contract for bridge capacity. Including OpenAI's [ChatGPT](/en/articles/chatgpt), the race among AI assistants has become as much about how quickly a company can secure power and GPUs as about how good its model is. What the anatomy of xAI shows is a company standing on the landlord's side of that race. The sign changed from xAI to SpaceXAI, but the question did not: whether the day will come when it can fill the compute it built with its own models.
