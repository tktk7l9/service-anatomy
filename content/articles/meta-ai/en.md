---
service: "Meta AI"
title: "The AI Is Free, the Capex Is $130 Billion-Plus — How Meta AI and Muse Are Meant to Pay for Themselves"
description: "A dissection of Meta AI and the new Muse agent as presented on Meta's official site, ai.meta.com. A free assistant, Muse Glimmer released under Apache 2.0, a Meta Model API that starts at $0.10 per million tokens, and Meta One from $2.99 a month. How a company that earns about 98% of its revenue from ads plans to recover $130-145 billion of annual capital expenditure — read only from its filings and official announcements."
lead: "Meta gives away its conversational assistant, Meta AI, and has published the weights of its 30B-parameter Muse Glimmer model under Apache 2.0. At the same time, its 2026 capital expenditure outlook is $130-145 billion. Of the $60.8 billion in revenue for April-June 2026, $59.36 billion was advertising. Where does a company that puts almost no price tag on the AI itself intend to earn it back? This piece reads the design from three announcements that landed in September 2026 — Muse, Meta One, and Meta Enterprise Platform — and from the company's SEC filings."
category: ai-tool
tags: [ai-assistant, ai-agent, llm, open-source, advertising]
publishedAt: "2026-10-01"
updatedAt: "2026-10-01"
lastVerified: "2026-10-01"
serviceUrl: "https://ai.meta.com/"
vendor: "Meta Platforms, Inc."
origin: "US"
heroTheme: "meta-ai"
scores: { product: 4.0, ux: 3.5, tech: 4.5, business: 4.0 }
techStack:
  - layer: "Foundation models (served by API, weights not published)"
    name: "Muse Spark (1.1 / 1.2 / 1.3)"
    confidence: confirmed
    evidence: "The Meta Model API pricing page lists muse-spark-1.3 / 1.2 / 1.1 as the standard-tier models. Developed by Meta Superintelligence Labs. The official documentation states a 1M-token context window"
    evidenceUrl: "https://dev.meta.ai/docs/pricing-rate-limits"
  - layer: "Open-weight model"
    name: "Muse Glimmer (30B, Apache 2.0)"
    confidence: confirmed
    evidence: "The official blog post of 2026-08-10 states that the weights of the 30B-parameter model were released on Hugging Face under the Apache 2.0 license, and that it was pre-trained by logit distillation from Muse Spark's outputs"
    evidenceUrl: "https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model"
  - layer: "Earlier open models"
    name: "Llama 4 / Llama 3 / Llama 2"
    confidence: confirmed
    evidence: "The Llama page on the developer site lists Llama 4, the Llama 3 family and Llama 2, each with links to its own license and use policy (per-generation Llama licenses, not Apache 2.0)"
    evidenceUrl: "https://dev.meta.ai/llama"
  - layer: "Agent runtime"
    name: "Muse Secure VM + Sentinel agent"
    confidence: confirmed
    evidence: "The Muse announcement (2026-09-08) describes a dedicated virtual machine per person, plus a Sentinel agent on the same machine, separated from Muse, that approves outbound activity"
    evidenceUrl: "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/"
  - layer: "In-house silicon"
    name: "MTIA (300 / 400 / 450 / 500)"
    confidence: confirmed
    evidence: "The official post (2026-03-11) says hundreds of thousands of MTIA chips are deployed for inference and that four new generations will be developed and deployed within two years; MTIA 400 and later are primarily for generative AI inference"
    evidenceUrl: "https://about.fb.com/news/2026/03/expanding-metas-custom-silicon-to-power-our-ai-workloads/"
  - layer: "Training and inference infrastructure"
    name: "Hyperion data center"
    confidence: confirmed
    evidence: "The Muse Spark announcement (2026-04-08) names the Hyperion data center among its investments from research and training through infrastructure. The Form 10-Q also mentions third-party cloud capacity arrangements"
    evidenceUrl: "https://ai.meta.com/blog/introducing-muse-spark-msl/"
  - layer: "Developer API"
    name: "Meta Model API (OpenAI SDK compatible)"
    confidence: confirmed
    evidence: "The product page says you can point an existing OpenAI SDK compatible client at it. The documentation lists three API shapes: Responses, Chat Completions and Messages"
    evidenceUrl: "https://dev.meta.ai/products/meta-model-api"
  - layer: "Developer site delivery"
    name: "Next.js / Vercel (dev.meta.ai)"
    confidence: likely
    evidence: "Observed with curl -sI against dev.meta.ai on 2026-10-01: server: Vercel, x-powered-by: Next.js, and an x-vercel-id response header. This is a header-level observation; no official statement from Meta was found"
    evidenceUrl: "https://dev.meta.ai/"
  - layer: "ai.meta.com delivery"
    name: "Meta in-house web stack (nonce CSP / HSTS preload / HTTP/3)"
    confidence: likely
    evidence: "Observed with curl -sI on 2026-10-01: x-fb-debug, a Content-Security-Policy with a nonce, strict-transport-security (preload, includeSubDomains) and alt-svc: h3. CSP reports go to facebook.com, which suggests Meta's shared delivery platform"
    evidenceUrl: "https://ai.meta.com/"
sources:
  - label: "AI at Meta official home (meta description \"Meet Muse, our new AI agent…\"; response headers observed)"
    url: "https://ai.meta.com/"
    accessedAt: "2026-10-01"
  - label: "AI at Meta: Muse page (capabilities, free limit and paid plan, permissions)"
    url: "https://ai.meta.com/muse/"
    accessedAt: "2026-10-01"
  - label: "AI at Meta: Meta AI assistant page (surfaces, free use, usage-limit testing)"
    url: "https://ai.meta.com/meta-ai/assistant/"
    accessedAt: "2026-10-01"
  - label: "AI at Meta Blog: Introducing Muse Spark (2026-04-08 — Meta Superintelligence Labs, compute efficiency versus Llama 4 Maverick)"
    url: "https://ai.meta.com/blog/introducing-muse-spark-msl/"
    accessedAt: "2026-10-01"
  - label: "Meta Newsroom Japan: Muse Spark announcement (2026-04-09 — regional rollout, mention of future open-sourcing)"
    url: "https://about.fb.com/ja/news/2026/04/introducing-muse-spark-meta-superintelligence-labs-first-model-built-to-prioritize-people/"
    accessedAt: "2026-10-01"
  - label: "AI at Meta Blog: Introducing Muse Spark 1.1 (2026-07-09 — Meta Model API public preview, 1M tokens)"
    url: "https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/"
    accessedAt: "2026-10-01"
  - label: "Meta AI Research Blog: Introducing Muse Glimmer (2026-08-10 — 30B, Apache 2.0)"
    url: "https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model"
    accessedAt: "2026-10-01"
  - label: "Meta Model API docs: Pricing and rate limits (standard and contributor tier prices)"
    url: "https://dev.meta.ai/docs/pricing-rate-limits"
    accessedAt: "2026-10-01"
  - label: "Meta developer site: Muse Code product page ($5 / $15 / $50 monthly plans)"
    url: "https://dev.meta.ai/products/muse-code"
    accessedAt: "2026-10-01"
  - label: "Meta developer site: Llama (per-generation licenses and use policies)"
    url: "https://dev.meta.ai/llama"
    accessedAt: "2026-10-01"
  - label: "Meta Newsroom: Introducing Muse (2026-09-08 — Muse Secure VM, no data sharing with ad systems)"
    url: "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/"
    accessedAt: "2026-10-01"
  - label: "Meta Newsroom Japan: Muse announcement (2026-09-09 — availability in Japan undecided)"
    url: "https://about.fb.com/ja/news/2026/09/introducing-muse-personal-ai-agent/"
    accessedAt: "2026-10-01"
  - label: "Meta Newsroom: Muse for Small Business (2026-09-29 — available in the US and Canada)"
    url: "https://about.fb.com/news/2026/09/introducing-muse-small-business/"
    accessedAt: "2026-10-01"
  - label: "Meta Newsroom: The Biggest News From Connect 2026 (2026-09-24 — more connectors, Muse on AI glasses)"
    url: "https://about.fb.com/news/2026/09/the-biggest-news-from-connect-2026/"
    accessedAt: "2026-10-01"
  - label: "Meta Newsroom: Introducing Meta One (2026-09-15 — plans and US dollar prices)"
    url: "https://about.fb.com/news/2026/09/introducing-meta-one-subscription-service-more-features-ai/"
    accessedAt: "2026-10-01"
  - label: "Meta Newsroom Japan: Meta One (Japanese yen prices, tax included)"
    url: "https://about.fb.com/ja/news/2026/09/introducing-meta-one-subscription-service-more-features-ai/"
    accessedAt: "2026-10-01"
  - label: "Meta Newsroom Japan: Meta AI Convenience Store (Meta AI rolled out in Japan in stages from November 2025)"
    url: "https://about.fb.com/ja/news/2026/08/meta-ai-convenience-store/"
    accessedAt: "2026-10-01"
  - label: "Meta Newsroom: Launching Meta Enterprise Platform (2026-09-28 — CEO statement)"
    url: "https://about.fb.com/news/2026/09/launching-meta-enterprise-platform/"
    accessedAt: "2026-10-01"
  - label: "Meta Newsroom: Meta Business Agent (2026-06-03 — more than one million businesses, plan to move to paid subscriptions)"
    url: "https://about.fb.com/news/2026/06/meta-business-agent/"
    accessedAt: "2026-10-01"
  - label: "Meta Newsroom: Expanding Meta's Custom Silicon (2026-03-11 — MTIA)"
    url: "https://about.fb.com/news/2026/03/expanding-metas-custom-silicon-to-power-our-ai-workloads/"
    accessedAt: "2026-10-01"
  - label: "Meta: Personal Superintelligence (2025-07-30 — CEO letter, stance on open source)"
    url: "https://www.meta.com/superintelligence/"
    accessedAt: "2026-10-01"
  - label: "AI at Meta: Open Source AI (why openness also benefits Meta)"
    url: "https://ai.meta.com/opensourceai/"
    accessedAt: "2026-10-01"
  - label: "SEC EDGAR: Meta second quarter 2026 earnings press release (Form 8-K Exhibit 99.1, 2026-07-29)"
    url: "https://www.sec.gov/Archives/edgar/data/1326801/000162828026050596/meta-06302026xexhibit991.htm"
    accessedAt: "2026-10-01"
  - label: "SEC EDGAR: Meta Form 10-Q (quarter ended June 30, 2026; filed 2026-07-30)"
    url: "https://www.sec.gov/Archives/edgar/data/1326801/000162828026050705/meta-20260630.htm"
    accessedAt: "2026-10-01"
---

## Service overview

ai.meta.com is the official site where Meta presents its AI products, models and research in one place. As of October 1, 2026, the page description reads: "Meet Muse, our new AI agent that takes tasks off your plate. Use Meta AI for questions and images, plus tools for developers." So there are three entrances: Meta AI, the free assistant for questions and images; Muse, the agent that carries out tasks; and the models and tools for developers.

A year ago, Meta's generative AI meant Llama. The name at the center of the site today is "Muse" — both a model family and the name of the agent product.

:::fact
According to the official blog, Muse Spark was announced on April 8, 2026 as the first model in the Muse family from Meta Superintelligence Labs (MSL). Meta describes it as the first product of a ground-up overhaul of its AI efforts, and says it can reach the same capabilities as its previous model, Llama 4 Maverick, with over an order of magnitude less compute. On July 9, Muse Spark 1.1 arrived together with the public preview of the Meta Model API, and on August 10 the 30B-parameter Muse Glimmer was released under Apache 2.0. The developer site currently lists Muse Spark 1.3 as the latest version. The Muse agent product was announced on September 8, and Meta Newsroom describes it as available in the US and Canada.
:::

:::fact
Availability in Japan differs by product. According to Meta's Japanese newsroom, Meta AI has been rolling out in Japan in stages since November 2025. For the Muse agent, however, the Japanese announcement states that availability in Japan is undecided at this time. This article did not operate Muse hands-on; everything written about Muse is based on official pages and announcements.
:::

:::pull
The models are handed out. The assistant is free. The only things with a price tag are heavy use and delegated work.
:::

::scorecard

## UX analysis

The design that can be read from the public pages leans toward one thing: not making people learn a new app.

- **It lives inside the apps people already have.** According to the official page, Meta AI is available at meta.ai, in the Meta AI app and in a desktop app for Mac, and also inside WhatsApp, Instagram, Messenger and Facebook. Meta says no separate account is needed beyond an existing Meta account.
- **You talk to the agent as a message thread.** Muse takes instructions in the Muse app, on muse.ai, or directly in WhatsApp, the same way you would message a person. Meta puts "no learning curve" at the center of the design.
- **Approval and audit are placed up front.** Before actions such as sending an email or making a purchase, Muse asks for confirmation, and permission can be granted once, always, or denied. Meta says people can see an audit trail of what Muse has done and what it plans to do.
- **There are many names and domains.** ai.meta.com (overview), meta.ai (assistant), muse.ai (agent), dev.meta.ai (developers) and research.meta.ai (research) are split by role, and llama.com redirects to the developer site. A first-time visitor has to work out whether Meta AI or Muse is the right one for the job.
- **Regional differences are large.** Muse starts in the US and Canada, and new Meta AI features have also been announced as rolling out "in select markets" first. What a user in Japan can touch today is Meta AI.

:::guess
Placing the assistant inside existing apps and making the agent work as a WhatsApp conversation appears to prioritize using the distribution Meta already has over competing on polish as a standalone app. Per the earnings release, 3.60 billion people on average used Meta's family of apps daily in June 2026. Not needing anyone to install something new is presumably the strongest asset here. In exchange, the confusion that comes with more names and domains seems to be left for users to absorb for the time being.
:::

## Tech stack

::techstack

:::fact
Models are released in two different ways. The flagship Muse Spark is served through the Meta Model API, while the official documentation says Muse Glimmer "takes a different path: you download the open weights and run it on your own hardware." Glimmer is under Apache 2.0; the earlier Llama models are distributed under per-generation licenses and use policies. The CEO letter (July 30, 2025) says the benefits of superintelligence should be shared broadly, while adding that Meta will need to be "careful about what we choose to open source." The Japanese announcement of Muse Spark says open-sourcing is being considered for the future.
:::

:::fact
The agent's runtime is also described publicly. Muse runs on a dedicated virtual machine per person, the Muse Secure VM, and nothing Muse does reaches the internet unless a Sentinel agent on the same machine approves it. Passwords and payment methods go into storage that Muse cannot see. For payments, Link by Stripe generates a one-time-use card number. Meta says it will introduce Muse Confidential VM later this year, encrypted with a key only the person holds.
:::

:::fact
On compute, the official post places Meta's own MTIA chips "at the center" of its infrastructure strategy while describing a portfolio approach that sources silicon from several companies. The Form 10-Q lists "third-party cloud capacity arrangements" alongside servers, data centers and network infrastructure among its AI-related infrastructure investments.
:::

:::guess
Shipping the flagship as a closed API while releasing a small model under the most permissive license appears to be an adjustment from the Llama-era approach of distributing everything as weights. The division of roles is presumably this: widen the developer base by making a small local model the default, and recover the cost of the compute-heavy top model through the API and Meta's own products. Meta has not published concrete criteria for which models it will release in the future, so it is not possible to tell from outside whether this line is fixed.
:::

## Business model

This is the core question. Start with how revenue breaks down today.

:::fact
According to the earnings press release for the second quarter of 2026 (April-June), revenue was $60.801 billion, up 28% year over year. Of that, advertising was $59.363 billion, Family of Apps "other revenue" was $1.007 billion, and Reality Labs was $431 million. By this article's calculation, advertising is about 98% of revenue. Ad impressions rose 14% year over year and the average price per ad rose 12%. Capital expenditures (including principal payments on finance leases) were $31.08 billion in the quarter, and the full-year 2026 outlook is $130-145 billion. Operating margin was 31% (43% a year earlier) and free cash flow was $784 million.
:::

:::fact
The Form 10-Q describes the purpose of its AI investments as being "to, among other things, recommend relevant content across our products, enhance our advertising tools, develop new products, and develop new features for existing products." Other revenue grew 73% year over year, and the filing says the increase was "primarily driven by paid messaging from WhatsApp and subscriptions." In the earnings release, the CEO said: "AI is accelerating our core business today, powering our next generation of products, and opening the door to entirely new enterprise opportunities."
:::

Laid side by side, the official materials point to four routes for earning the investment back.

**The first is advertising itself.** The first purposes the 10-Q lists are recommendations and advertising tools — not a new charge, but a way to make the existing business more efficient. Against a business that brings in $59 billion a quarter, an improvement of a few percent is a large sum.

**The second is subscriptions built around usage limits.** Meta One, announced on September 15, keeps "the core experience across our apps and Meta AI" free, per the announcement, and sells expanded usage of the most compute-intensive AI features. In the US, single product plans start at $2.99 a month, the Core bundle is $7.99 and Premium is $19.99, with creator and business bundles from $14.99. In Japan the equivalents are from 239 yen, 949 yen, 2,900 yen and from 2,000 yen a month (tax included). Meta reports 15 million subscriptions and trials to date. Muse is likewise "free for most of what people need," with paid plans for those who hit the limit — but no price could be confirmed on the public pages.

**The third is developers and enterprises.** On the Meta Model API standard tier, Muse Spark costs $1.25 per million input tokens and $4.25 per million output tokens. Separately there is a "contributor" tier, which grants Meta permission to use prompts and completions to train future models, at $0.10 for input and $0.20 for output. Muse Code, the coding agent for the terminal, comes in three plans at $5, $15 and $50 a month. On September 28, Meta announced Meta Enterprise Platform as "the next major pillar of our business," bringing the Muse agent, Meta Business Agent, the API and Muse Code to businesses.

**The fourth is agents for businesses, and devices.** Meta says more than one million businesses were already using a Meta Business Agent on WhatsApp and Messenger at announcement; getting started is free, and access will move to paid subscription offerings. The connectors that plug third-party services into Muse include the Shopify catalogue, a list of retailers, Shop Pay and PayPal. At Connect 2026, Meta previewed bringing Muse to its AI glasses and a dedicated device called Muse Charm.

:::fact
The Muse announcement states that "Muse doesn't share a person's conversations or the data in their VM with Meta's ad systems." The muse.ai home page carries a statement to the same effect. Meta also says people can opt out of their interactions being used to train its AI models.
:::

:::guess
That sentence seems important for reading the revenue design. Meta is an advertising company, yet for the agent — where the most personal information accumulates — it has itself separated the data from advertising use. That would narrow Muse's routes to revenue to subscriptions for usage beyond the free limit, the value created on the business side through purchases and payments made via connectors, and sales of compatible devices. It appears to be a two-stage structure: use the money earned from ads to widen the free user base, then charge the heavy users and the businesses among them.
:::

:::guess
The official site also offers a clue as to why the models are given away. The Open Source AI page explains that if Meta's AI becomes one of the global standards, Meta itself benefits by not being "locked into a competitor's proprietary ecosystem." The underlying premise is presumably that Meta does not earn its living by selling cloud capacity, so publishing model weights costs it little revenue. The contributor tier's price gap can be read the same way: it appears to be an exchange of data usable for training in return for a unit price less than a tenth of the standard one.
:::

:::guess
For now the sizes are asymmetric. Other revenue — which includes subscriptions and paid WhatsApp messaging — was $1 billion in the quarter. Its growth rate is high, but it is an order of magnitude smaller than the $31.08 billion of capital expenditure in the same quarter. The recovery therefore seems to depend, for the time being, on growth in the advertising business rather than on new charges. Read another way, having advertising as an existing source of income is what lets Meta fund the wait, from its own cash, until the new revenue lines grow. Meta itself notes in the 10-Q risk factors that if its investments are not successful longer-term, its business and financial performance could be harmed.
:::

Finally, what could not be confirmed. The price of Muse's paid plans, the number of users of Meta AI and of Muse, revenue from the Meta Model API or Muse Code, and the portion of capital expenditure that is specifically for AI were not disclosed in the public materials consulted here. The investor relations site that hosts earnings call transcripts could not be retrieved from this article's environment, so statements about earnings are limited to the press release and 10-Q filed with the SEC.

More is being handed out, and the places that carry a price tag are few. The assistant is free, the small model is Apache 2.0, the flagship model is pay-as-you-go, and the agent charges only for use beyond the limit. And most of the bill is still being paid by ads. What ai.meta.com shows is less a company selling AI than a company using AI to grow the business it already has, while buying time to raise its next pillar.
