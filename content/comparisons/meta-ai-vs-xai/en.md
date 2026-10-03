---
title: "AI Paid for by Ads, and AI That Rents Out Its Compute — Who Covers the Gigawatt-Scale Bill at Meta AI and xAI"
description: "Meta AI and xAI (now SpaceXAI) both sit inside a listed parent company and a social network, and both are building compute measured in gigawatts. What differs is who covers the bill. Meta funds AI from advertising, which is about 98% of its revenue, and keeps the assistant free. SpaceX's AI segment runs at an operating loss while renting the compute it built to other AI companies by the month. This piece lines up earnings documents, plan prices, API prices, what each side releases as open weights, and regional availability, all from public sources."
lead: "Meta's revenue for April–June 2026 was $60.8 billion, of which $59.36 billion was advertising. SpaceX's AI segment (xAI, Grok and X) had 2025 revenue of $3.2 billion and an operating loss of $6.36 billion. Both put a conversational AI inside their own social network, and both are building data centers measured in gigawatts. Their answers to who pays for it differ: one pays with ads, the other rents the compute it built to other companies. We overlay the two dissections and both companies' public documents to check that difference in numbers."
slugA: "meta-ai"
slugB: "xai"
publishedAt: "2026-10-02"
updatedAt: "2026-10-02"
lastVerified: "2026-10-02"
sources:
  - label: "SEC EDGAR: Meta Q2 2026 earnings press release (Form 8-K Exhibit 99.1, 2026-07-29 — revenue, advertising, other revenue, capex, full-year outlook; as verified in this site's Meta AI article on 2026-10-01)"
    url: "https://www.sec.gov/Archives/edgar/data/1326801/000162828026050596/meta-06302026xexhibit991.htm"
    accessedAt: "2026-10-01"
  - label: "SEC EDGAR: Meta Form 10-Q (quarter ended June 2026 — purpose of AI investment, third-party cloud capacity arrangements, drivers of other revenue; as verified in this site's Meta AI article on 2026-10-01)"
    url: "https://www.sec.gov/Archives/edgar/data/1326801/000162828026050705/meta-20260630.htm"
    accessedAt: "2026-10-01"
  - label: "SEC: Space Exploration Technologies Corp. Form S-1 (filed 2026-05-20 — AI segment results, COLOSSUS, the Anthropic agreement, paying subscribers; as verified in this site's xAI article on 2026-10-01)"
    url: "https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm"
    accessedAt: "2026-10-01"
  - label: "Meta Model API docs: Pricing and rate limits (Standard and Contributor tier prices)"
    url: "https://dev.meta.ai/docs/pricing-rate-limits"
    accessedAt: "2026-10-02"
  - label: "SpaceXAI docs: Models (context length and API price per model)"
    url: "https://docs.x.ai/developers/models"
    accessedAt: "2026-10-02"
  - label: "SpaceXAI docs: Pricing (long-context rates, Batch, Priority, US regional endpoint)"
    url: "https://docs.x.ai/developers/pricing"
    accessedAt: "2026-10-02"
  - label: "SpaceXAI docs: Security FAQ (no training on API data, 30-day retention)"
    url: "https://docs.x.ai/developers/faq/security"
    accessedAt: "2026-10-02"
  - label: "Meta Newsroom: Introducing Meta One (2026-09-15 — plans, US dollar prices, 15 million subscriptions and trials)"
    url: "https://about.fb.com/news/2026/09/introducing-meta-one-subscription-service-more-features-ai/"
    accessedAt: "2026-10-02"
  - label: "Meta Newsroom Japan: Meta One (prices in yen, tax included; everyday use of Meta AI stays free)"
    url: "https://about.fb.com/ja/news/2026/09/introducing-meta-one-subscription-service-more-features-ai/"
    accessedAt: "2026-10-02"
  - label: "Apple App Store (US): Grok (seller X Corp.; in-app purchases for the SuperGrok plans)"
    url: "https://apps.apple.com/us/app/grok/id6670324846"
    accessedAt: "2026-10-02"
  - label: "Apple App Store (Japan): Grok (in-app purchases in yen)"
    url: "https://apps.apple.com/jp/app/grok/id6670324846"
    accessedAt: "2026-10-02"
  - label: "Apple App Store (US): X (in-app purchases for the X Premium plans)"
    url: "https://apps.apple.com/us/app/x/id333903271"
    accessedAt: "2026-10-02"
  - label: "Apple App Store (Japan): X (in-app purchases for the X Premium plans in yen)"
    url: "https://apps.apple.com/jp/app/x/id333903271"
    accessedAt: "2026-10-02"
  - label: "SpaceXAI docs: FAQ - Grok Website / Apps (weekly usage pool, free tier, relationship to X Premium)"
    url: "https://docs.x.ai/grok/faq"
    accessedAt: "2026-10-02"
  - label: "Meta AI Research Blog: Introducing Muse Glimmer (2026-08-10 — weights released under Apache 2.0)"
    url: "https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model"
    accessedAt: "2026-10-02"
  - label: "Meta developer site: Llama (per-generation licenses and use policies)"
    url: "https://dev.meta.ai/llama"
    accessedAt: "2026-10-02"
  - label: "GitHub: xai-org/grok-1 (code and Grok-1 weights, Apache 2.0)"
    url: "https://github.com/xai-org/grok-1"
    accessedAt: "2026-10-02"
  - label: "Hugging Face: xai-org/grok-2 (Grok 2 weights, xAI Community License Agreement)"
    url: "https://huggingface.co/xai-org/grok-2"
    accessedAt: "2026-10-02"
  - label: "AI at Meta: Meta AI assistant page (page description — free, where it is offered)"
    url: "https://ai.meta.com/meta-ai/assistant/"
    accessedAt: "2026-10-02"
  - label: "Meta Newsroom Japan: Introducing Muse (2026-09-09 — rolling out in the US; availability in Japan undecided at this time)"
    url: "https://about.fb.com/ja/news/2026/09/introducing-muse-personal-ai-agent/"
    accessedAt: "2026-10-02"
  - label: "Meta Newsroom Japan: Meta AI Convenience Store (Meta AI rolled out in stages in Japan from November 2025)"
    url: "https://about.fb.com/ja/news/2026/08/meta-ai-convenience-store/"
    accessedAt: "2026-10-02"
  - label: "Meta Data Centers: Richland Parish Data Center (5 gigawatts of compute capacity to house Hyperion)"
    url: "https://datacenters.atmeta.com/richland-parish-data-center/"
    accessedAt: "2026-10-02"
  - label: "Meta Newsroom: Expanding Meta's Custom Silicon (2026-03-11 — MTIA and sourcing from multiple vendors)"
    url: "https://about.fb.com/news/2026/03/expanding-metas-custom-silicon-to-power-our-ai-workloads/"
    accessedAt: "2026-10-02"
  - label: "Meta Newsroom: Launching Meta Enterprise Platform (2026-09-28 — the next major pillar of the business)"
    url: "https://about.fb.com/news/2026/09/launching-meta-enterprise-platform/"
    accessedAt: "2026-10-02"
  - label: "Yahoo Finance: Anthropic to rent all AI capacity at SpaceX's Colossus data center (2026-05-06)"
    url: "https://finance.yahoo.com/news/anthropic-to-rent-all-ai-capacity-at-spacexs-colossus-data-center-180327774.html"
    accessedAt: "2026-10-02"
  - label: "CNBC: Google to pay SpaceX $920 million a month for compute capacity at xAI data centers (2026-06-05)"
    url: "https://www.cnbc.com/2026/06/05/google-to-pay-spacex-920-million-a-month-for-xai-compute-capacity.html"
    accessedAt: "2026-10-02"
---

[Meta AI](/en/articles/meta-ai) and [xAI](/en/articles/xai) (which has gone by "SpaceXAI" since July 2026) share a lot on the surface. Neither is a standalone AI company; each is part of a large listed parent. Each has its own social network and puts its conversational AI inside it. And each is building compute measured in gigawatts.

The difference lies in how the cost is paid. This piece does not rank performance. This site has not operated the paid features of either one; everything below is based on the two companies' public materials, SEC filings, and news reports.

## Both are "AI inside a social network," but the accounting home differs

First, where the numbers sit. Meta talks about AI inside the results of the whole company, while SpaceX carves AI out as one segment.

:::fact
According to Meta's earnings press release for the second quarter of 2026 (April–June), revenue was $60.801 billion, of which advertising was $59.363 billion, Family of Apps "other revenue" was $1.007 billion, and Reality Labs was $431 million. Capital expenditures (including principal payments on finance leases) were $31.08 billion for the quarter, with a full-year 2026 outlook of $130–145 billion. Operating margin was 31%. Meta does not separately disclose AI-only revenue or AI-only capital expenditures.
:::

:::fact
According to the Form S-1 SpaceX filed with the SEC (May 20, 2026), the company divides its business into three segments — Space, Connectivity and AI — and both Grok and [X](/en/articles/x) fall in the AI segment. The AI segment's 2025 revenue was $3.201 billion, its operating loss $6.355 billion, and its capital expenditures $12.727 billion. For January–March 2026, revenue was $818 million, operating loss $2.469 billion, and capital expenditures $7.723 billion. Profit and loss for Grok alone or X alone is not separately disclosed.
:::

These two sets of numbers match in neither scope nor period. Meta's are one quarter of the whole company; SpaceX's are a full year and one quarter of the AI segment only. With that caveat, here are the ratios as this site's calculation.

| | Meta (whole company, Apr–Jun 2026) | SpaceX AI segment (Jan–Mar 2026) |
| --- | --- | --- |
| Revenue | $60.801B | $0.818B |
| Capital expenditures | $31.08B | $7.723B |
| Capex ÷ revenue (this site's calculation) | 31.08 ÷ 60.801 = about 0.51x | 7.723 ÷ 0.818 = about 9.4x |
| Operating result | 31% operating margin | $2.469B operating loss |

Advertising's share at Meta is, by this site's calculation, 59.363 ÷ 60.801 = about 98%. "Other revenue" is 1.007 ÷ 60.801 = about 1.7%. For SpaceX's AI segment over full-year 2025, the operating loss is about 2.0 times revenue (6.355 ÷ 3.201) and capital expenditures about 4.0 times (12.727 ÷ 3.201).

:::pull
At Meta, capital expenditures are about half of a quarter's revenue. In SpaceX's AI segment, they are about nine times a quarter's revenue.
:::

:::guess
This gap appears to reflect the size of the vessel carrying the AI rather than how hard each side is pushing on AI. Meta's capital expenditures are far larger in absolute terms, but its existing advertising revenue is twice that again. SpaceX's AI segment cannot cover its capital expenditures from segment revenue alone, and the funding presumably comes from the parent as a whole and from outside financing. Note that Meta's capex includes uses other than AI, and SpaceX's AI segment includes the revenue and costs of X as a social network, so this table cannot be read as a like-for-like comparison of AI businesses.
:::

## Who covers the bill — paying with ads, and renting out compute

Next, where each side recovers the cost.

:::fact
Meta's Form 10-Q describes the purpose of its AI investment as recommending relevant content across its products, enhancing its advertising tools, developing new products, and developing new features for existing products. "Other revenue" rose 73% year over year, driven mainly by WhatsApp paid messaging and subscriptions. Meta Newsroom (September 15, 2026) says of the paid plan Meta One that "the core experience across our apps and Meta AI will stay free," and reports 15 million subscriptions and trials to date. On September 28 it announced Meta Enterprise Platform for businesses as "the next major pillar of our business."
:::

:::fact
SpaceX's Form S-1 lists, under compute services agreements with third parties, a cloud services agreement signed with Anthropic in May 2026. Anthropic pays $1.25 billion per month through May 2029 for use of compute capacity at COLOSSUS and COLOSSUS II (reduced during a ramp-up period in May and June 2026). Either party can terminate with 90 days' notice. Yahoo Finance (May 6, 2026) reported that Anthropic would use all the capacity of COLOSSUS 1, more than 300 megawatts. CNBC (June 5, 2026) reported that Google also agreed to rent compute capacity at $920 million per month from October 2026 through June 2029, and that a Google Cloud spokesperson described the deal as ensuring "bridge capacity." Per the same S-1, there were about 6.3 million paying subscribers at the end of March 2026: about 4.4 million on X Premium and Premium+, and about 1.9 million on the SuperGrok plans.
:::

The two also face compute from opposite directions. SpaceX's AI segment rents compute it built to other AI companies. Meta's 10-Q lists "third-party cloud capacity arrangements" alongside servers, data centers and network infrastructure among its AI-related investments, which places it on the side that builds and also sources capacity from outside.

:::fact
On scale, SpaceX's S-1 puts the combined compute capacity of COLOSSUS and COLOSSUS II at approximately 1.0 gigawatt and says the next expansion is expected to add more than 400 megawatts. Meta's data center site says its Richland Parish, Louisiana data center will deliver 5 gigawatts of compute capacity to house Hyperion, described as its largest multi-gigawatt AI cluster (how much is already operating could not be confirmed from that page). Meta also says it keeps its custom MTIA chips at the center while sourcing silicon from a range of vendors.
:::

:::guess
The difference between the two seems to lie less in how they sell AI than in how they buy time. Meta appears to be using advertising profits to fund, from its own cash, the time it takes for new paid lines to grow. SpaceX's AI segment appears to be buying the time it takes for paid use of Grok itself to grow by renting out the compute it built. Anthropic's $1.25 billion per month comes to $3.75 billion over three months (this site's calculation, 1.25 × 3), which exceeds the AI segment's revenue of $818 million for January–March 2026. On the other hand, that agreement can be ended with 90 days' notice, and Meta's advertising is in turn exposed to the economy and advertisers' budgets. Each form of support seems to carry its own kind of uncertainty.
:::

## Price lists side by side — what is free, subscriptions, and the API

Now the price tags users see. First, the assistant and subscriptions.

:::fact
The page description of the Meta AI assistant page (checked October 2, 2026) calls Meta AI "your free personal AI chatbot and assistant," usable in the app, on the web, in AI glasses and in Meta apps. Meta One's US prices start at $2.99 a month for single-product plans, with the individual bundles Core at $7.99 and Premium at $19.99 a month, and the business plan Essential starting at $14.99. In Japan the announced prices are from ¥239 a month for single-product plans, ¥949 for Core, ¥2,900 for Premium, and from ¥2,000 for Essential (tax included). Meta says plans, benefits, pricing and availability may vary by region, by app and by account.
:::

:::fact
For Grok, the official FAQ says that after the weekly usage pool of a paid plan is used up, chat and voice remain available within free-tier limits. The App Store (US) listing for Grok (checked October 2, 2026) shows in-app purchases of SuperGrok Lite $10.00, SuperGrok $30.00, SuperGrok Plus $100.00 and SuperGrok Heavy $300.00; the Japanese App Store shows, in the same order, ¥1,500, ¥5,000, ¥15,000 and ¥50,000 (the listings do not state a billing period). X's in-app purchases are X Premium Basic $4.00, X Premium $11.00 and X Premium Plus $50.00 per month in the US, and ¥450, ¥1,270 and ¥8,000 per month in Japan. App Store prices may differ from web prices, and this site has not been able to confirm web prices on grok.com.
:::

Next, the developer API. Both companies publish US dollar prices per 1 million tokens in their official docs (checked October 2, 2026).

| Model (condition) | Input | Cached input | Output |
| --- | --- | --- | --- |
| Meta: Muse Spark 1.1–1.3 (Standard tier) | $1.25 | $0.15 | $4.25 |
| Meta: Muse Spark 1.2 and 1.3 (Contributor tier) | $0.10 | $0.002 | $0.20 |
| SpaceXAI: grok-4.7 (prompt under 200k tokens) | $2.00 | $0.50 | $6.00 |
| SpaceXAI: grok-4.7 (prompt of 200k tokens or more) | $4.00 | $1.00 | $12.00 |
| SpaceXAI: grok-4.3 (prompt under 200k tokens) | $1.25 | $0.20 | $2.50 |

:::fact
The differing conditions are written on the price lists. Meta's Contributor tier is a discount in exchange for permission to use prompts and completions to train future Meta models; the Standard tier states they are not used for training. SpaceXAI's Security FAQ says API requests and responses are stored for 30 days and are not used for training without explicit permission. For grok-4.7, once a prompt reaches 200k tokens, all tokens in that request are billed at the higher rate. Context length is 500k tokens for grok-4.7 and 1M tokens for grok-4.3; for Muse Spark, the official blog states 1 million tokens. SpaceXAI also lists rates for priority processing (2x) and for an endpoint that processes in the United States (1.1x).
:::

This table simply lines up published unit prices. Model performance, and the number of tokens the same job needs, are not in it, so it cannot tell you which is cheaper for a given task. Both companies publish benchmark results as their own announcements; this site has not confirmed third-party reproduction and leaves them out of this comparison.

:::guess
The shape of each price list seems to reflect each company's situation. Meta's Contributor tier is one 12.5th of the Standard input price (this site's calculation, 1.25 ÷ 0.10), and what is given in return is data usable for training. That looks like a design that puts developer adoption and training data ahead of API revenue. SpaceXAI's price list attaches multipliers to conditions such as long context, priority processing and processing region, which presumably brings the price closer to the amount of compute used. For a company that also rents compute to outsiders, reflecting the cost of compute in the price can be read as a natural way of thinking.
:::

## What each releases — weights and licences

On releasing model weights, neither company is at "everything" or "nothing."

:::fact
Meta has released the weights of the 30B-parameter Muse Glimmer under the Apache 2.0 licence (official blog, August 10, 2026; the Hugging Face listing also shows apache-2.0). For the earlier Llama models, the developer site lists a licence and use policy per generation for Llama 4, the Llama 3 series and Llama 2; they are distributed under their own licences rather than Apache 2.0. The flagship Muse Spark is offered through the API, and its weights are not released.
:::

:::fact
xAI has released the code and weights of Grok-1 under the Apache 2.0 licence (xai-org/grok-1 on GitHub; the README gives 314B parameters). xai-org/grok-2 on Hugging Face releases the weights of Grok 2 under the "xAI Community License Agreement," which permits non-commercial and research use, permits commercial use on condition of following the company's acceptable use policy, and restricts use for training other foundation models. As far as this site could confirm, a release of the weights of Grok 4.7, the current flagship on the API, was not found. Separately from models, the code for X's For You feed is published on GitHub under Apache 2.0 (see the [X](/en/articles/x) dissection).
:::

:::guess
Side by side, both companies appear to have settled on a similar shape: the newest flagship goes out through the API, and something else is handed out as weights. What differs is the choice of what to hand out. Meta distributes a small current model distilled from its flagship, under one of the most permissive kinds of licence. What xAI distributes are models from earlier generations: Grok-1 under Apache 2.0 and Grok 2 under a conditional licence. Which policy counts as more open presumably depends on the yardstick — permissiveness of the licence, recency of the model, or size.
:::

## Where you can use it — inside existing apps, and in Japan

Both assistants live inside the company's own social network.

:::fact
According to Meta's earnings release, 3.60 billion people on average used its family of apps daily in June 2026. Per the [Meta AI](/en/articles/meta-ai) dissection, Meta AI can be used on meta.ai and in the Meta AI app, as well as from inside WhatsApp, Instagram, Messenger and Facebook. SpaceX's S-1 puts monthly active AI users across Grok and X at about 550 million as of the end of March 2026. Per the [xAI](/en/articles/xai) dissection, Grok can be used from grok.com, the mobile apps or X, and paid plans are also offered through X Premium. The two companies' user figures differ in definition and date and cannot be compared directly.
:::

:::fact
Availability in Japan is as follows. According to Meta's Japanese newsroom, Meta AI began rolling out in stages in Japan from November 2025. The agent Muse began rolling out in the US, and the Japanese announcement states that availability in Japan is undecided at this time. Meta One has announced prices in yen, though some features carry a note that they are not yet supported in Japan. Grok is listed on the Japanese App Store with a Japanese description and in-app purchases priced in yen (checked October 2, 2026). As far as this site could confirm, no official page listing the countries where Grok is offered was found.
:::

## Matching the two techStacks gives one overlap

Finally, the result of mechanically matching the techStack of the two dissections. Only one item was judged shared: Next.js.

:::fact
In this site's mechanical comparison, out of 13 tech tokens on the Meta AI side and 14 on the xAI side, the only overlap was Next.js. On the Meta side it comes from this site's observation of responses from the developer site dev.meta.ai, and on the xAI side from grok.com and docs.x.ai; in both dissections the confidence is "likely" (no official statement). Only on the Meta side are Muse Spark, Muse Glimmer, Llama, MTIA, the Hyperion data center, Muse Secure VM, Vercel and others. Only on the xAI side are Grok 4.7, COLOSSUS, COLOSSUS II, Rust, JAX, Kubernetes, Cloudflare and others.
:::

What overlaps is only how the front of the websites is built; nothing is shared in models, chips, data centers or backends. Note that each dissection confirms its company's API can be called from OpenAI's SDK, but because the techStack entries are named differently, the mechanical comparison does not count that as an overlap.

:::guess
Both companies seem to share a two-layer structure: the entrance developers see (an OpenAI-compatible API, a docs site on Next.js) leans on industry standards, while the compute and models behind it are their own. The difference is made in the back layer, and the size of the cost there is presumably what raises the question this piece has followed: who pays.
:::

At [Meta AI](/en/articles/meta-ai), the existing advertising business covers the bill, the assistant stays free, and "other revenue," which includes subscriptions, is still under 2% of revenue. At [xAI](/en/articles/xai), the AI segment runs at an operating loss while renting the compute it built to other AI companies, and collects subscriptions through both [X](/en/articles/x) and Grok. Much could not be confirmed. Meta's AI-only revenue and capex, the results of SpaceX's AI segment from April 2026 onward, the price of Muse's paid plans, and a list of countries where Grok is offered could not be determined from the materials used here. The same "AI inside a social network" is being built at gigawatt scale out of two different wallets. That is as far as this comparison can confirm.
