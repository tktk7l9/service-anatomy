---
service: "DeepSeek"
title: "A Cache Hit Costs One-Fiftieth — How DeepSeek Gives Away Weights Under MIT and Prices Its API by the Hour"
description: "DeepSeek, an AI lab registered in Hangzhou, publishes the weights of its latest model, DeepSeek-V4.1-Flash, under the MIT licence while selling the same model through its API at $0.30 per million input tokens (peak, cache miss). A cache hit costs $0.006, and off-peak hours halve everything. We dissect the structure behind that pricing from the price list, model card, technical reports, terms, privacy policy and our own observation of the official site."
lead: "DeepSeek's API price list shows six prices for a single model: cache hit or miss, peak or off-peak, input or output. The cheapest input is $0.003 per million tokens. The weights of that same model can be downloaded by anyone under the MIT licence. So what is a company that gives its weights away actually selling through its API? We read the structure from the official price list, model card, technical reports and terms."
category: ai-tool
tags: [ai-assistant, llm, api, open-weights, coding-agent]
publishedAt: "2026-10-01"
updatedAt: "2026-10-02"
lastVerified: "2026-10-02"
serviceUrl: "https://www.deepseek.com/"
vendor: "Hangzhou DeepSeek Artificial Intelligence Co., Ltd."
origin: "CN"
heroTheme: "deepseek"
scores: { product: 4.0, ux: 3.5, tech: 4.5, business: 3.0 }
techStack:
  - layer: "Foundation model (current)"
    name: "DeepSeek-V4.1-Flash (552B MoE, Causal Encoder-Decoder, image input)"
    confidence: confirmed
    evidence: "The official Hugging Face model card describes a multimodal MoE model with 552B backbone parameters, a 20-layer causal encoder followed by a 20-layer decoder, activating only 8B parameters per token during prefill and 16B during decode. The licence field is MIT (checked 2026-10-01)"
    evidenceUrl: "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash"
  - layer: "Foundation model (Pro line)"
    name: "DeepSeek-V4-Pro (1.6T MoE, hybrid CSA/HCA attention, mHC)"
    confidence: confirmed
    evidence: "The abstract of the arXiv technical report (2606.19348) states 1.6T parameters (49B activated), a one-million-token context, a hybrid attention architecture combining CSA and HCA, mHC, the Muon optimizer, and pre-training on more than 32T tokens"
    evidenceUrl: "https://arxiv.org/abs/2606.19348"
  - layer: "API"
    name: "OpenAI-format / Anthropic-format compatible API (Responses API supported)"
    confidence: confirmed
    evidence: "The pricing page of the official API docs lists both an OpenAI-format base URL (api.deepseek.com) and an Anthropic-format base URL (api.deepseek.com/anthropic), and a feature table showing support for the Responses API, tool calls and JSON output"
    evidenceUrl: "https://api-docs.deepseek.com/quick_start/pricing"
  - layer: "Inference efficiency"
    name: "Context caching (prefixes persisted to disk)"
    confidence: confirmed
    evidence: "The caching guide in the official API docs states that a cache hit requires the prefix to have been persisted to the disk cache, and that prefixes are persisted at request boundaries, on common-prefix detection, and at fixed token intervals"
    evidenceUrl: "https://api-docs.deepseek.com/guides/kv_cache"
  - layer: "Agent runtime"
    name: "DeepSeek Harness (TypeScript, Cordis plugin architecture, MIT)"
    confidence: confirmed
    evidence: "The official GitHub repository deepseek-ai/deepseek-harness has TypeScript as its primary language and an MIT licence (checked via the GitHub API on 2026-10-01). The product page says it is built on Cordis's \"everything is a plugin\" architecture"
    evidenceUrl: "https://github.com/deepseek-ai/deepseek-harness"
  - layer: "Official site delivery"
    name: "Next.js + Amazon S3 + Amazon CloudFront"
    confidence: likely
    evidence: "curl -sI against www.deepseek.com returned server: AmazonS3 / x-cache: Hit from cloudfront / via: CloudFront, and the HTML loads chunks from /_next/static/ (observed 2026-10-01). No official document states the setup, hence likely"
  - layer: "In front of the API and chat"
    name: "Amazon CloudFront + AWS WAF + load balancer (server: elb)"
    confidence: likely
    evidence: "api.deepseek.com and platform.deepseek.com returned server: elb / via: CloudFront, and chat.deepseek.com answered a non-browser GET with HTTP 403 and a challenge page containing awsWafCookieDomainList (observed 2026-10-01). Inferred from response headers, hence likely"
  - layer: "API documentation"
    name: "Docusaurus v3.1.0 + Tencent Cloud (COS; CDN appears to be EdgeOne)"
    confidence: likely
    evidence: "The HTML of api-docs.deepseek.com carries generator: Docusaurus v3.1.0, the response headers include server: tencent-cos / eo-cache-status: HIT, and the DNS CNAME sits under eo.dnse1.com (observed 2026-10-01)"
  - layer: "Status page"
    name: "Flashduty Status Page"
    confidence: likely
    evidence: "The CNAME of status.deepseek.com points to statuspage.flashduty.com (observed with dig on 2026-10-01)"
  - layer: "Delivery of terms and policies"
    name: "CDN that appears to be Huawei Cloud (cdn.deepseek.com)"
    confidence: speculative
    evidence: "The CNAME of cdn.deepseek.com points to a cdnhwc-style domain and the response header is server: openresty (observed 2026-10-01). This is a guess from the CNAME naming; the provider is not officially confirmed"
sources:
  - label: "DeepSeek official site (home: product entry points, operating company in the footer, ICP numbers)"
    url: "https://www.deepseek.com/"
    accessedAt: "2026-10-02"
  - label: "DeepSeek API Docs: Models & Pricing (models, context length, prices, peak/off-peak)"
    url: "https://api-docs.deepseek.com/quick_start/pricing"
    accessedAt: "2026-10-02"
  - label: "DeepSeek API Docs: Change Log (entries up to 2026-09-10)"
    url: "https://api-docs.deepseek.com/updates"
    accessedAt: "2026-10-01"
  - label: "DeepSeek API Docs: context caching guide"
    url: "https://api-docs.deepseek.com/guides/kv_cache"
    accessedAt: "2026-10-01"
  - label: "DeepSeek API Docs: Rate Limit & Isolation (concurrency limits)"
    url: "https://api-docs.deepseek.com/quick_start/rate_limit"
    accessedAt: "2026-10-01"
  - label: "DeepSeek news: Introducing DeepSeek-V4.1-Flash (2026-09-10)"
    url: "https://www.deepseek.com/en/news/deepseek-v4-1-flash/"
    accessedAt: "2026-10-01"
  - label: "DeepSeek news: DeepSeek-V4 Preview (2026-04-24)"
    url: "https://www.deepseek.com/en/news/v4-preview/"
    accessedAt: "2026-10-01"
  - label: "Hugging Face: deepseek-ai/DeepSeek-V4.1-Flash model card (architecture, training, self-reported benchmarks, MIT licence)"
    url: "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash"
    accessedAt: "2026-10-01"
  - label: "arXiv 2606.19348: DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence"
    url: "https://arxiv.org/abs/2606.19348"
    accessedAt: "2026-10-01"
  - label: "DeepSeek official: DeepSeek Harness product page"
    url: "https://www.deepseek.com/en/harness/"
    accessedAt: "2026-10-01"
  - label: "GitHub: deepseek-ai/deepseek-harness (MIT, TypeScript)"
    url: "https://github.com/deepseek-ai/deepseek-harness"
    accessedAt: "2026-10-01"
  - label: "DeepSeek official: app download page"
    url: "https://www.deepseek.com/en/download/"
    accessedAt: "2026-10-01"
  - label: "DeepSeek official: Transparency Center (list of model cards and technical reports)"
    url: "https://www.deepseek.com/en/transparency/"
    accessedAt: "2026-10-01"
  - label: "DeepSeek official: Model Mechanism and Training Methods of DeepSeek"
    url: "https://cdn.deepseek.com/policies/en-US/model-algorithm-disclosure.html"
    accessedAt: "2026-10-01"
  - label: "DeepSeek Privacy Policy (Japanese-language version, last updated 10 February 2026)"
    url: "https://cdn.deepseek.com/policies/ja-JP/deepseek-privacy-policy.html"
    accessedAt: "2026-10-01"
  - label: "DeepSeek Terms of Use (Japanese-language version, last updated 20 January 2025)"
    url: "https://cdn.deepseek.com/policies/ja-JP/deepseek-terms-of-use.html"
    accessedAt: "2026-10-01"
  - label: "DeepSeek Open Platform Terms of Service (effective 29 April 2026)"
    url: "https://cdn.deepseek.com/policies/en-US/deepseek-open-platform-terms-of-service.html"
    accessedAt: "2026-10-01"
  - label: "Personal Information Protection Commission of Japan: information notice on DeepSeek (3 February 2025, updated 5 March 2025; in Japanese)"
    url: "https://www.ppc.go.jp/news/careful_information/250203_alert_deepseek/"
    accessedAt: "2026-10-01"
  - label: "Wikipedia: DeepSeek (aggregated account of founding, backer and reported funding)"
    url: "https://en.wikipedia.org/wiki/DeepSeek"
    accessedAt: "2026-10-01"
  - label: "Anthropic official docs: Pricing (reference point for the price comparison)"
    url: "https://platform.claude.com/docs/en/about-claude/pricing"
    accessedAt: "2026-10-01"
---

## What it is

DeepSeek (深度求索) is an AI lab registered in Hangzhou, China. It develops large language models in-house and publishes their weights. It also offers the same models through a free chat app and a pay-as-you-go API. The home page of the official site has five product entry points: "DeepSeek Web", "DeepSeek Harness", "API Platform", "API Docs" and "Downloads" (plus a link to job openings). We found no page offering monthly subscription plans.

:::fact
The footer of the Chinese-language site names the operator as 杭州深度求索人工智能基础技术研究有限公司. The privacy policy (we were served the Japanese-language version) says the service is provided and controlled by Hangzhou DeepSeek Artificial Intelligence Co., Ltd., with a registered address in China. There are two current model lines: DeepSeek-V4.1-Flash, released on 10 September 2026 (API name deepseek-flash), and DeepSeek-V4-Pro, which reached general availability on 13 August 2026 (deepseek-v4-pro). According to the official docs, both have a context length of one million tokens and a maximum output of 384K tokens. The weights are published on Hugging Face, where the model cards list the licence as MIT.
:::

:::fact
On founding and ownership, we could not find a page on DeepSeek's own site that describes its investors or funding (as of 2026-10-01). According to Wikipedia's aggregated account, the Chinese hedge fund High-Flyer announced an AGI research lab on 14 April 2023, and that lab was spun off as an independent company on 17 July 2023. High-Flyer is described as its principal investor, and co-founder Liang Wenfeng serves as CEO. The same source says DeepSeek raised US$7 billion in a Series A round in May 2026 at a post-money valuation of US$52 billion, and that Bloomberg and the Financial Times reported in July 2026 that it had begun preparing for an IPO. All of this is secondary information; we have not confirmed an official announcement.
:::

:::pull
The weights go out under MIT. The API is priced by the hour and by the cache. What DeepSeek sells looks less like the model itself and more like the operation that runs it cheaply.
:::

::scorecard

## UX analysis

DeepSeek's UX is split into three entry points: chat, the API, and an agent runtime. What follows is based on the official pages, the official docs and our outside observation of the site. It is not a hands-on review.

- **The home page is the entrance itself.** Under the headline sit the labels "DeepThink" and "Search", and three buttons: "Chat with DeepSeek", "API Platform" and "Harness Desktop". There is no feature tour or price table in between; the page sends visitors straight to where they will use the product.
- **The chat app is stated to be free.** The download page says "Chat with leading AI models for free" and points to iOS and Android versions, including a direct APK download. The V4 Preview announcement said users could pick "Expert Mode / Instant Mode" on chat.deepseek.com.
- **The API follows other vendors' formats.** It offers both an OpenAI-format and an Anthropic-format base URL, and the "Agent Integrations" section of the docs lists setup guides for external coding agents such as Claude Code, Codex and OpenCode. The design lets someone switching over change only the endpoint and the model name.
- **Model names are short and stable.** The current Flash model is called deepseek-flash, with no generation number. The pricing page notes that the legacy name deepseek-v4-flash is still accepted, but requests are served by V4.1-Flash and billed at the Flash price.
- **An agent on the desktop.** DeepSeek Harness is an open-source agent runtime distributed for macOS (Apple silicon) and Windows (64-bit). The product page says it is "in public preview worldwide" and lists everyday document work, coding, research and background tasks as uses.

:::fact
The terms spell out how user inputs and outputs are handled. Section 4.2 of the Terms of Use assigns the rights in outputs to the user and states that inputs and outputs may be used for "personal use, academic research, derivative product development, training other models (such as model distillation), etc." (wording as in the English Open Platform terms, which carry the same clause). Section 4.3 says DeepSeek may use inputs and outputs to a minimal extent to improve the service, on the premise of anonymisation and similar measures. The privacy policy lists, among user rights, the right to refuse the use of personal data for model training or technical optimisation, with email as the channel. According to the same policy, the service is not directed at children under 14.
:::

:::guess
Adding entry points while showing no plan comparison or subscription offer suggests that monthly consumer billing is not designed as a revenue source. The structure appears to be a free chat app that widens the funnel, with billing concentrated in the pay-as-you-go API. That keeps the explanation short, but it also makes usage caps and behaviour under load hard to read from the official pages. We could not confirm specific limits of the free tier from public information.
:::

## Tech stack

::techstack

:::fact
According to the official model card, DeepSeek-V4.1-Flash is a Mixture-of-Experts (MoE) model with a 552B-parameter backbone. It uses a "Causal Encoder-Decoder (CED)" layout that splits 40 layers into a 20-layer causal encoder and a 20-layer decoder. The parameters activated per token are stated as 8B while reading input (prefill) and 16B while generating (decode). Each MoE layer has one shared expert and 384 routed experts, of which six are used per token. The card says the model was pre-trained from scratch on a multimodal corpus of 45T tokens.
:::

:::fact
The same model card puts KV cache compression at the centre of the design. It combines "CSA2", which assigns each attention layer one of three modes (Full, Reindex or Reuse), with FP4 cache storage, and reports a global KV cache of 890 bytes per token, roughly a quarter of the previous V4-Flash. The official announcement says the cache needs a quarter of the HBM and an eighth of the SSD storage of the previous generation, and gives the reason: "Cache-hit charges often account for a large share of agent costs." For V4-Pro, the other current model, the arXiv technical report says that in a one-million-token context it needs 27% of the single-token inference FLOPs and 10% of the KV cache of DeepSeek-V3.2.
:::

:::fact
Every performance figure here was published by DeepSeek itself. The V4.1-Flash model card, comparing models at maximum reasoning effort, lists 90.6 on Terminal-Bench 2.1 (Opus-5.0 in the same table: 89.1) and 74.2 on DeepSWE v1.1 (74.0). The same table also shows rows where it trails other vendors' models: 31.2 on Terminal-Bench 4.0 (51.8) and 64.0 on NL2Repo-Bench (75.3). The card notes that the evaluations used the company's own DeepSeek Harness among other scaffolds. We have not checked any third-party reproduction.
:::

:::fact
As far as we could observe, delivery spans several clouds. www.deepseek.com returned server: AmazonS3 and CloudFront headers. api.deepseek.com returned server: elb and CloudFront headers plus strict-transport-security (max-age=31536000; includeSubDomains; preload). chat.deepseek.com answered a non-browser GET with HTTP 403 and an AWS WAF challenge page. api-docs.deepseek.com, by contrast, returned server: tencent-cos, and the CNAME of status.deepseek.com pointed to a Flashduty status page (all on 2026-10-01).
:::

:::guess
The fact that the architectural changes cluster around KV cache compression looks like a design matched to the cost structure of agent workloads. Agents resend long contexts many times, so most of the input is "the same prefix as last time". If the cost of keeping that prefix falls to a quarter or an eighth, it is presumably easier to stay viable while lowering the cache-hit price. We could not confirm from the official docs what compute is used to train and serve the models (GPU type and scale, data centre location). Response headers reveal only the delivery network in front; they do not indicate where the inference servers are.
:::

## Business model

The revenue source we can confirm from public information is pay-as-you-go API usage, deducted from a prepaid balance. The chat app is stated to be free, and no subscription plan is listed on the official site.

:::fact
According to the official pricing page (checked 2026-10-01), deepseek-flash costs, per million tokens at peak, $0.30 for input on a cache miss, $0.006 on a cache hit, and $1.20 for output. Off-peak is half of each: $0.15, $0.003 and $0.60. deepseek-v4-pro costs $1.32, $0.044 and $3.96 at peak, and $0.66, $0.022 and $1.98 off-peak. Peak hours are 1 a.m. to 4 a.m. and 6 a.m. to 10 a.m. UTC, Monday to Friday; weekends and Chinese public holidays are off-peak all day. The concurrency limit is 2,500 for deepseek-flash and 500 for deepseek-v4-pro, and the docs say there is no additional cost for requesting more capacity.
:::

:::fact
The history of price changes is also on the record. According to the Change Log, peak/off-peak pricing was announced on 13 August 2026 and took effect at 4 p.m. UTC on 16 August. When V4.1-Flash was released on 10 September, DeepSeek announced that API prices had been reduced. The news post of the same day explained: "V4.1-Flash lets us serve more users at a lower cost. We're passing the savings on to you." That post also said deepseek-v4-pro requests would be routed to V4.1-Flash from 14 September. The Change Log, however, states that in response to user demand the V4-Pro API continues after 14 September with billing unchanged, and the pricing page lists both models.
:::

:::fact
As a reference point for the price level, we cite Anthropic's official price list (checked 2026-10-01): Claude Haiku 4.5 is listed at $1 per million input tokens and $5 per million output tokens, and Claude Opus 5.5 at $4 and $20. This is a comparison of list prices only; it does not imply that the models are equivalent in capability or purpose.
:::

:::fact
Where data is stored and which law governs are written into the policy and the terms. The privacy policy states that DeepSeek stores the information it collects on secure servers located in the People's Republic of China. Sections 9.1 and 9.2 of the Terms of Use and sections 10.1 and 10.2 of the Open Platform terms set the governing law as "the laws of the People's Republic of China in the mainland", and provide that disputes not settled by negotiation may be brought before a court with jurisdiction over the registered office of Hangzhou DeepSeek Artificial Intelligence Co., Ltd. On 3 February 2025 (updated 5 March 2025), Japan's Personal Information Protection Commission published an information notice on what the company's privacy policy says, in two points: data including personal information obtained through the service is stored on servers located in the People's Republic of China, and the laws of the People's Republic of China apply to that data.
:::

:::guess
Publishing weights under MIT means other clouds and users' own infrastructure can run the same model. That the company's own API can still charge is presumably because the thing on sale is operational efficiency rather than the model. For deepseek-flash, a cache-hit input token ($0.006 per million) costs one-fiftieth of a cache miss ($0.30), and off-peak halves it again (for deepseek-v4-pro the ratio is one-thirtieth: $0.044 against $1.32). That price appears to be possible because DeepSeek controls both a mechanism that keeps the KV cache on disk and time-of-day pricing that shifts work into demand troughs, on its own equipment. A third party holding the weights would presumably need comparable cache infrastructure and utilisation to match the same unit price.
:::

:::guess
Whether the API alone is profitable at these prices cannot be judged from public information. Revenue, profit and inference cost are not disclosed. Wikipedia notes that the company has said it focuses on research and has no immediate plans for commercialisation. The official announcement includes a line inviting enquiries about "a large-scale deployment with 2,000 GPUs + a storage cluster", which may indicate that it is exploring deployment support on customers' own infrastructure as a revenue path beyond the API. If the reported funding round and IPO preparation are accurate, the company could be read as moving from a stage where research is paid for by its backer to one where it explains revenue prospects to outside investors. These are inferences from secondary information, and other readings are possible.
:::

:::guess
For those considering it, the question is likely to be less about price than about where data lives. With the official chat app and API, the policy says data is stored on servers in China and Chinese law applies. Running the MIT-licensed weights on one's own infrastructure or a third-party cloud would presumably fall outside that clause. Having two routes to the same model, a cheap official API and open weights whose location you choose, appears to be a design that lets users pick by use case. Which to choose depends on the nature of the data and each organisation's own rules.
:::

Give the weights away under MIT, price the API finely by cache and time of day, and make chat free. What the dissection of DeepSeek shows is a design that puts a price not on the scarcity of a model but on the operational efficiency of keeping long contexts cheaply and reusing them. Its profitability and the details of its ownership are not public. What public information does confirm is the correspondence: the price list was rewritten twice within one month, and the official announcement and model card explain the price cut by the compression of the KV cache.
