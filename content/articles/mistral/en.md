---
service: "Mistral AI"
title: "Give Away the Weights, Sell Where They Run — How Mistral AI Earns From \"Sovereign AI\""
description: "Mistral AI, the French AI lab, publishes the weights of its main models under Apache 2.0 and a modified MIT license — and in September 2026 announced a €3 billion raise at a valuation above €21 billion. Vibe (the agent formerly called Le Chat), a pay-as-you-go API, region-pinned inference, and its own compute platform: a dissection, from public sources, of where a lab that gives its weights away actually makes money."
lead: "Mistral AI's pricing page answers one question plainly: yes, you can self-host its models anywhere. Mistral Large 3 and Small 4 are published under Apache 2.0, and the newest Medium 3.5 under a modified MIT license (which excludes companies with more than $20 million in monthly revenue; they need a separate commercial license). Yet in September 2026 the company announced a €3 billion Series D at a valuation above €21 billion. What does a company sell when its core product can be downloaded? This dissects it from the official site, the documentation, and observed response headers."
category: ai-tool
tags: [ai-assistant, llm, api, open-source, sovereign-ai, coding-agent]
publishedAt: "2026-10-01"
updatedAt: "2026-10-02"
lastVerified: "2026-10-02"
serviceUrl: "https://mistral.ai/"
vendor: "Mistral AI SAS"
origin: "FR"
heroTheme: "mistral"
scores: { product: 4.0, ux: 3.5, tech: 4.5, business: 3.5 }
techStack:
  - layer: "Foundation models"
    name: "Mistral Medium 3.5 / Large 3 / Small 4 (open weights)"
    confidence: confirmed
    evidence: "Verified on the official model list (2026-10-01) that Mistral Large 3 and Small 4 carry an \"Apache 2.0\" label and Medium 3.5 a \"Modified MIT\" label. The LICENSE file of Medium 3.5 excludes companies with more than $20 million in monthly revenue and directs them to a commercial license (checked on Hugging Face, 2026-10-02)"
    evidenceUrl: "https://mistral.ai/models/"
  - layer: "Compute"
    name: "Mistral Compute (NVIDIA GB200 / GB300)"
    confidence: confirmed
    evidence: "The official AI Cloud page lists \"GB200, GB300, B300\" GPUs, \"GB200 serving production\" in February 2026, and a capacity target of 1 GW across the EU by 2030"
    evidenceUrl: "https://mistral.ai/products/ai-cloud/"
  - layer: "Inference API delivery"
    name: "Regional Endpoints (Europe / US) + Priority Tier"
    confidence: confirmed
    evidence: "The official announcement (2026-08-11) states Regional Endpoints, which let customers choose whether inference runs in Europe or the US, are generally available, and that Priority Tier with an uptime SLA is in public preview"
    evidenceUrl: "https://mistral.ai/news/regional-inference-open-models-new-compute/"
  - layer: "CDN / edge"
    name: "Cloudflare"
    confidence: likely
    evidence: "Responses from mistral.ai and api.mistral.ai carry server: cloudflare and cf-ray, and the nameservers resolve to ns.cloudflare.com (verified with curl -sI and dig). No official technical description found, hence \"likely\""
  - layer: "Marketing site (mistral.ai)"
    name: "Astro + Netlify"
    confidence: likely
    evidence: "The homepage HTML loads assets under /_astro/ and has data-astro- attributes; response headers include cache-status: \"Netlify Edge\" and x-nf-request-id (verified). No official mention found"
  - layer: "Documentation (docs.mistral.ai)"
    name: "Next.js + Vercel"
    confidence: likely
    evidence: "docs.mistral.ai responds with server: Vercel, x-nextjs-prerender, and x-vercel-cache (verified). It also returns a Link header pointing to llms.txt"
  - layer: "API gateway"
    name: "Kong"
    confidence: likely
    evidence: "Responses from api.mistral.ai and console.mistral.ai carry x-kong-request-id and x-kong-response-latency (verified). Details of the setup are not public"
sources:
  - label: "Mistral official: Models (model list and license labels)"
    url: "https://mistral.ai/models/"
    accessedAt: "2026-10-02"
  - label: "Hugging Face: mistralai/Mistral-Medium-3.5-128B LICENSE (Modified MIT License; excludes companies above $20 million in monthly revenue)"
    url: "https://huggingface.co/mistralai/Mistral-Medium-3.5-128B/blob/main/LICENSE"
    accessedAt: "2026-10-02"
  - label: "Mistral official: Pricing (Free / Pro / Team / Enterprise plans and FAQ)"
    url: "https://mistral.ai/pricing/"
    accessedAt: "2026-10-02"
  - label: "Mistral official: API pricing (per-model rates, Enterprise APIs, tool fees)"
    url: "https://mistral.ai/pricing/api/"
    accessedAt: "2026-10-01"
  - label: "Mistral official: Series D announcement (€3B, valuation above €21B, led by Samsung Electronics)"
    url: "https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier/"
    accessedAt: "2026-10-01"
  - label: "Mistral official: Series C announcement (2025-09-09, €1.7B at €11.7B post-money, led by ASML)"
    url: "https://mistral.ai/news/mistral-ai-raises-1-7-b-to-accelerate-technological-progress-with-ai/"
    accessedAt: "2026-10-01"
  - label: "Mistral official: Regional Endpoints, third-party open models, European Compute Units (2026-08-11)"
    url: "https://mistral.ai/news/regional-inference-open-models-new-compute/"
    accessedAt: "2026-10-01"
  - label: "Mistral official: AI Cloud / Mistral Compute (GPU generations, timeline, 1 GW target)"
    url: "https://mistral.ai/products/ai-cloud/"
    accessedAt: "2026-10-01"
  - label: "Mistral official: Mistral Compute announcement (2025-06-11)"
    url: "https://mistral.ai/news/mistral-compute/"
    accessedAt: "2026-10-01"
  - label: "Mistral official: Vibe gets to work (2026-05-28, Le Chat renamed Vibe)"
    url: "https://mistral.ai/news/vibe-agent/"
    accessedAt: "2026-10-01"
  - label: "Mistral official: Mistral Medium 3.5 announcement (2026-05-22, 128B, modified MIT; benchmarks are the company's own figures)"
    url: "https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5/"
    accessedAt: "2026-10-01"
  - label: "Mistral official: Introducing Mistral 3 (2025-12-02, Large 3 and Ministral 3 under Apache 2.0)"
    url: "https://mistral.ai/news/mistral-3/"
    accessedAt: "2026-10-01"
  - label: "Mistral official: About (founding story, key dates, co-founders)"
    url: "https://mistral.ai/about/"
    accessedAt: "2026-10-01"
  - label: "Mistral official: Privacy Policy (operating entity, training use and opt-out, retention, transfers outside the EU)"
    url: "https://legal.mistral.ai/terms/privacy-policy/"
    accessedAt: "2026-10-01"
  - label: "Mistral official documentation: Zero data retention (covered endpoints and excluded products)"
    url: "https://docs.mistral.ai/admin/monitor-comply/zero-data-retention"
    accessedAt: "2026-10-01"
  - label: "Wikipedia: Mistral AI (seed through Series B amounts and valuations, partnership reporting aggregated)"
    url: "https://en.wikipedia.org/wiki/Mistral_AI"
    accessedAt: "2026-10-01"
---

## Service overview

Mistral AI is an AI lab headquartered in Paris. Per its official About page, the co-founders looked at 2022 — when large tech companies were starting to close off their technology — and set out to build an open, European AI company, founding it in April 2023. The three co-founders are Arthur Mensch (CEO), Guillaume Lample (Chief Science Officer), and Timothée Lacroix (CTO). The privacy policy states that the operating entity is a French company incorporated in Paris.

The official site currently organizes the lineup into five products: the agent "Vibe," "Vibe for code" for coding, "Studio" for developers, "Forge" for training models on a company's own data, and the compute platform "AI Cloud." The homepage headline reads "Frontier AI. In your hands.," followed by a line about helping organizations build tailored AI systems. It is a site that addresses enterprises and governments as its primary customers, more than individual chat users.

:::fact
What the official site confirms: in an announcement dated May 28, 2026, the chat assistant "Le Chat" was renamed "Vibe," with conversations, settings, and plans carried over (we verified that the old URL /products/le-chat redirects to /products/vibe). On models, Mistral Large 3 and Mistral Small 4 are published as open weights under Apache 2.0, and Mistral Medium 3.5 under a modified MIT license. In an announcement dated September 8, 2026, the company said it raised €3 billion in a Series D led by Samsung Electronics at a post-money valuation of more than €21 billion, and that it operates across 20 countries and supports more than 125 enterprises.
:::

:::pull
Anyone can take the weights home. What is for sale is the choice of where the model runs, and under whose control.
:::

::scorecard

## UX analysis

This section is based on observing public pages and documentation, not on hands-on use of paid features. The app itself (chat.mistral.ai) answered our command-line request with a Cloudflare challenge (HTTP 403, cf-mitigated: challenge), so we did not inspect any logged-in screen.

- **One name instead of two.** The chat product "Le Chat" and the coding agent "Vibe" used to carry separate names; in May 2026 they were unified as "Vibe." The official announcement describes it as "one agent and one licence," with Work Mode (research, deliverables, recurring processes) and Code Mode (remote coding agents) under the same plan.
- **A four-tier price list with the numbers stated.** Free, Pro ($14.99 per month, excluding taxes), Team ($24.99 per user per month, excluding taxes), and Enterprise (contact sales). The page says verified students get Pro for $5.99 per month. Switching the display to euros showed the same figures, 14.99 and 24.99.
- **Subscriptions come with API credits.** The Free plan is listed as including $10 per month in API credits, a path that leads chat users toward the developer platform, Studio. Usage beyond a plan's limit can continue on pay-as-you-go at API rates.
- **Many entry points.** The pricing page lists the web, a CLI, IDE extensions (VS Code and JetBrains), and mobile (iOS and Android). The CLI documentation says it supports any model served behind an OpenAI-compatible API, so it can connect to self-hosted models as well.
- **Usage limits are mostly relative.** Many rows are expressed against the free plan — "up to 6x" messages, "up to 40x" image generations — rather than as absolute counts. The FAQ gives one concrete example (Flash answers: 150 per day on Pro, 200 per day on Team), but it is hard to see the full set of limits in numbers before subscribing.

On training use of data, the "Model training" row of the pricing table shows "Opt-out." The privacy policy states that inputs and outputs are used to train models and that users can object from their account settings.

## Tech stack

::techstack

:::fact
On models, from the official model list and announcements: Mistral Large 3 (announced December 2, 2025) is a sparse mixture-of-experts with 41B active and 675B total parameters, released in base and instruct versions under Apache 2.0. Mistral Small 4 (announced March 16, 2026) has 119B total parameters and is under Apache 2.0. Mistral Medium 3.5 (announced May 22, 2026) is a 128B dense model whose weights are on Hugging Face under a modified MIT license. That license says its rights cannot be exercised if the global consolidated revenue of a company (or of one's employer) exceeded $20 million in the preceding month, and directs such companies to request a commercial license from Mistral or to use its hosted services (LICENSE file on Hugging Face, checked 2026-10-02). The pricing page FAQ likewise answers "you can self-host our models anywhere" and then adds that open-weight models are Apache 2.0 licensed for research and individual use, while commercial deployments require a Mistral license with separate terms for derivatives and production use. The company reports that Medium 3.5 scores 77.6% on SWE-Bench Verified and can be self-hosted on as few as four GPUs (both are Mistral's own published figures; we did not reproduce them). The model list also includes models labeled "Premier," such as OCR 4.1 and Codestral, and Voxtral TTS under CC BY-NC 4.0 — not everything is open on the same terms.
:::

:::fact
On compute: Mistral Compute is the company's own AI infrastructure, announced June 11, 2025. The timeline on the official page reads: concept greenlit in April 2025, GB200 racks landing that July, GB200 serving production in February 2026 with a Sweden site (EcoDataCenter) in motion, and first external customers in March 2026. The stated capacity target is 1 GW across the EU by 2030. On August 11, 2026, the company announced general availability of Regional Endpoints (choosing whether inference runs in Europe or the US), a public preview of Priority Tier with an uptime SLA, and support for third-party open models, starting with Z.ai's GLM-5.2. The company notes that Regional Endpoints remain subject to limited transfers to sub-processors that may be located outside the selected region.
:::

Our web observations, for the record: mistral.ai sits behind Cloudflare, its HTML loads assets under /_astro/, and its response headers show a Netlify Edge cache status. docs.mistral.ai returns server: Vercel and headers indicating Next.js prerendering, and advertises llms.txt in a Link header. api.mistral.ai answers unauthenticated requests with 401 and attaches a Kong request id. The homepage CSP lists origins for the consent manager Axeptio, HubSpot's EU region (js-eu1), and Google Analytics.

:::guess
A company that champions European sovereignty serving its official site through Cloudflare, Netlify, and Vercel — all US companies — looks less like a contradiction than a sign of where it draws the line. What the company calls sovereignty appears to be control over customers' input data, where inference executes, and the model weights; delivery of a marketing site and documentation that anyone can read is presumably treated as outside that scope. Separately, folding three model lines (instruct, reasoning, coding) into single sets of weights with Small 4 and Medium 3.5 may be aimed at reducing how many models a self-hosting customer has to operate. For a model meant to be handed over, "how many GPUs it runs on" becomes part of the product spec alongside raw performance.
:::

## Business model

From what the official pages show, a company that publishes its weights earns in at least five ways.

:::fact
First, pay-as-you-go API usage. The API pricing page lists, per million tokens, Mistral Medium 3.5 at $1.5 input and $7.5 output, Mistral Large 3 at $0.5 and $1.5, and Mistral Small 4 at $0.15 and $0.6. The FAQ says batch processing halves the price and cached input tokens cut input cost by up to 90%. Second, a premium on top of that: "Enterprise APIs" add regional data processing controls, system-level SLAs, increased rate limits, and premium support, offered at 75% above list pricing on select APIs. Third, Vibe subscriptions (Pro at $14.99 per month, Team at $24.99 per user per month). Fourth, Enterprise contracts: the pricing table lists "Custom deployments" — self-hosted, in a private cloud, or on-premises — along with custom models, audit logs, SAML SSO, and white labeling, priced on request. The commercial license for Medium 3.5 (for companies above $20 million in monthly revenue) is also, per the license text, granted individually through the sales contact. Fifth, compute itself: in August 2026 the company announced "European Compute Units (ECUs)," which convert multi-year commitments into access to Mistral-built infrastructure.
:::

:::fact
Funding, as announced and as reported. Per aggregated Wikipedia reporting, the June 2023 seed was €105 million (valuation estimated by the Financial Times at €240 million), December 2023 brought €385 million, and June 2024 brought €600 million at a €5.8 billion valuation. Per Mistral's own announcements, the Series C on September 9, 2025 was €1.7 billion at an €11.7 billion post-money valuation, led by ASML, and the Series D in September 2026 was €3 billion at a post-money valuation of more than €21 billion, led by Samsung Electronics. The company describes the Series D as the largest equity fundraising round ever completed by a European technology company. Wikipedia also records that Mistral raised $830 million in March 2026 to build data centers near Paris and in Sweden, and that Le Figaro reported an agreement with Microsoft in July 2026 concerning AI infrastructure in Europe. Revenue has not been officially disclosed.
:::

The "sovereign AI" positioning is defined in the company's own words. The Series D announcement describes sovereignty as retaining control across four dimensions: data that stays inside the organization's boundaries, models that are controllable and customizable, compute that is private and predictable, and systems in production that are controllable and auditable. The August 2026 announcement says most customers already run Mistral's models inside their own data centers and cloud environments, and the Mistral Compute announcement addresses regions that have been waiting for an alternative to cloud and AI providers based in the US or China.

Data handling is documented along the same lines. The privacy policy says the company prioritizes providers within the European Union and, where it exceptionally uses providers outside it, applies safeguards under GDPR Article 46 together with the Standard Contractual Clauses. Inputs and outputs are kept for the time needed to generate the output plus thirty rolling days to monitor abuse; on paid plans, organizations can request zero data retention, which applies only to stateless API endpoints. Vibe Work and Chat, which store conversation history, are explicitly outside its scope.

:::guess
Publishing weights appears to work less as giving up revenue than as the front door to a sale. With the weights in hand, a customer can test in its own environment before procurement, and the argument that it is not locked into one vendor holds up. What Mistral then charges for seems to be mainly everything other than the weights — region selection, SLAs, customization, operational support — as the 75% premium on Enterprise APIs and the quote-based Enterprise tier suggest. The newest Medium 3.5 does, however, require a commercial license from high-revenue companies, so permission to use the weights itself appears to be part of what is sold to large enterprises. ECUs and the 1 GW target can be read as extending that structure further toward compute: the more models are handed out and become hard to differentiate, the more that reserved compute capacity inside Europe, a scarce asset, could serve as the basis for holding prices. At the same time, data centers require money to go out first, and with revenue undisclosed there is limited material for an outsider to judge whether income matches the capital raised. That the Series C was led by ASML and the Series D by Samsung Electronics — both manufacturing companies — suggests the company is gathering industrial customer-shareholders rather than purely financial investors.
:::

Renaming the chat product, merging the model lines, and owning the compute underneath: Mistral's past year reads as a move from "a lab that publishes good models" to "an operator that also takes responsibility for where the models run." In its design, giving the weights away and earning from them are not in conflict. It hands out what can be handed out, and puts a price on what cannot — location, guarantees, and capacity — and on usage rights for large enterprises.
