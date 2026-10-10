---
service: "Grammarly"
title: "The Red-Underline Company Renamed Itself Superhuman — Dissecting Grammarly, Which Corrects the Writing of 40 Million People a Day With 100 Billion LLM Requests a Week and Is Buying Up Email, Meeting Notes and AI Detection"
description: "Grammarly is an AI writing assistant that underlines errors in English text in red and suggests rewrites. Founded in 2009, it is used by more than 40 million people a day and had annual revenue of more than $700 million as of May 2025. In December 2024 it announced the acquisition of Coda and brought in a new CEO, and in October 2025 it changed the company's name to Superhuman. It has since bought GPTZero, an AI detector, and Fathom, an AI meeting notetaker, while Grammarly as a product remains at the center of the Superhuman suite. Using the official blogs, the pricing page, the engineering blogs, the affiliate terms and this site's own observations, the article dissects the move from a grammar engine written in Common Lisp to a single model with more than a billion parameters, an inference platform combining vLLM, Amazon EKS and Databricks, pricing split by the number of AI prompts, and an \"AI productivity platform\" being assembled through acquisitions."
lead: "Grammarly's red underlines appear on their own, in the middle of a sentence, without the user pressing a button. According to Superhuman's engineering blog (2026-09-16), serving those suggestions that must never keep people waiting means 40 million daily users generate roughly 100 billion requests to LLMs a week. Known as an English grammar checker, Grammarly renamed the company Superhuman in 2025 and has been buying an email app, documents, AI detection and meeting notes. This article dissects its technology and money flows from public information alone."
category: ai-tool
tags: [ai, ai-assistant, llm, writing, aws, kubernetes]
publishedAt: "2026-10-10"
updatedAt: "2026-10-10"
lastVerified: "2026-10-10"
serviceUrl: "https://www.grammarly.com/"
# Affiliate link placeholder: Grammarly runs its own affiliate program
# (https://www.grammarly.com/affiliates, checked 2026-10-10: a 90-day cookie, an activation bonus,
# commissions for both account sign-ups and purchases). The terms
# (https://www.grammarly.com/affiliates/terms) run the program through HasOffers, Commission
# Junction, PartnerStack or ShareASale, forbid bidding on "Grammarly" and many generic keywords,
# and say affiliates may not use Grammarly's name or logo in marketing materials without written
# approval, so the owner should confirm with the program that an affiliate link inside this
# editorial article is acceptable before enabling it. If a network supplies a text ad, copy it
# verbatim into label (never invent it) and keep every field identical in ja.md and en.md.
# affiliate:
#   url: "https://<grammarly-affiliate-tracking-link>"
#   program: "Grammarly Affiliate Program"
vendor: "Superhuman Platform Inc. (formerly Grammarly, Inc.)"
origin: "US"
heroTheme: "grammarly"
scores: { product: 4.0, ux: 3.5, tech: 4.5, business: 4.0 }
techStack:
  - layer: "Grammatical error correction (GEC)"
    name: "Grammarly GEC model (in-house LLM, 1B+ parameters)"
    confidence: confirmed
    evidence: "Superhuman's engineering blog (2026-09-16) states that the GEC (Grammatical Error Correction) system began as a pipeline of several small specialized models with tens to hundreds of millions of parameters, needed a separate model just to arbitrate between their conflicting suggestions, and was consolidated into a single larger model with more than a billion parameters"
    evidenceUrl: "https://blog.superhuman.com/scaling-gec-inference/"
  - layer: "Inference platform"
    name: "vLLM (FP8 quantization, speculative decoding) + Kubernetes (Amazon EKS) + AWS"
    confidence: confirmed
    evidence: "The same post states that the team moved from Amazon ECS, where each service needed its own dedicated pool of GPU instances, to Kubernetes on AWS (Amazon EKS), which allows mixing instance types; adopted vLLM for inference and model serving; and raised throughput and cut latency with quantization that stores weights as 8-bit floats and with speculative decoding"
    evidenceUrl: "https://blog.superhuman.com/scaling-gec-inference/"
  - layer: "External inference vendor"
    name: "Databricks (Foundation Model API)"
    confidence: confirmed
    evidence: "The same post states that after testing Databricks' Foundation Model API with shadow traffic and an A/B test on real production traffic, the team adopted a hybrid in which Databricks serves the highest-volume models while specialized, experimental and lower-volume models stay on the internal infrastructure"
    evidenceUrl: "https://blog.superhuman.com/scaling-gec-inference/"
  - layer: "LLM gateway"
    name: "LLM gateway/proxy (in-house, ~100,000 RPS)"
    confidence: confirmed
    evidence: "The same post states that, to authenticate requests and route traffic across providers, the in-house LLM gateway/proxy layer was extended and hardened from about 1,000 requests per second to about 100,000, an increase of almost 100x"
    evidenceUrl: "https://blog.superhuman.com/scaling-gec-inference/"
  - layer: "Service mesh"
    name: "Linkerd"
    confidence: confirmed
    evidence: "Grammarly's engineering blog (2025-07-24) states that the core services that analyze users' writing (the data plane) were migrated from a legacy container service to Kubernetes on AWS, and that Linkerd, the open-source service mesh, was deployed to secure and monitor communication between those services"
    evidenceUrl: "https://www.grammarly.com/blog/engineering/the-great-linkerd-mystery/"
  - layer: "On-device model"
    name: "Llama (on-device model, ~1B parameters)"
    confidence: confirmed
    evidence: "Grammarly's engineering blog (2025-04-28) states that, to work offline, the team built a proof-of-concept that folds the spelling and grammar corrections handled by multiple large models into a single compact model of about 1 billion parameters, chose Llama over T5 as the base, and optimized first for Apple desktop users"
    evidenceUrl: "https://www.grammarly.com/blog/engineering/efficient-on-device-writing-assistance/"
  - layer: "Core grammar engine (as of 2015)"
    name: "Common Lisp (SBCL in production, CCL in development)"
    confidence: confirmed
    evidence: "Grammarly's engineering blog (2015-06-26) states that the core grammar engine, the foundation of the business, is written in Common Lisp, processes more than a thousand sentences per second, and runs on stock Linux images on AWS with SBCL in production and CCL on most developers' machines. The same post says the company also develops in JVM languages, JavaScript, Erlang, Python and Go"
    evidenceUrl: "https://www.grammarly.com/blog/engineering/running-lisp-in-production/"
  - layer: "Web delivery"
    name: "Amazon CloudFront"
    confidence: likely
    evidence: "This site's own observation (2026-10-10) found www.grammarly.com returning via: ... cloudfront.net (CloudFront), x-amz-cf-pop: NRT57-P3 and x-cache: Miss from cloudfront"
  - layer: "Company blog"
    name: "Ghost (blog.superhuman.com)"
    confidence: likely
    evidence: "This site's own observation (2026-10-10) found posts on blog.superhuman.com containing <meta name=\"generator\" content=\"Ghost 6.68\"> and returning server: cloudflare together with Varnish cache headers"
sources:
  - label: "Grammarly official: About Us (founding and the company rename)"
    url: "https://www.grammarly.com/about"
    accessedAt: "2026-10-10"
  - label: "Grammarly official: Prices and Plans"
    url: "https://www.grammarly.com/plans"
    accessedAt: "2026-10-10"
  - label: "Grammarly official blog: Grammarly to Acquire Coda, Bring on New CEO (2024-12-17)"
    url: "https://www.grammarly.com/blog/company/grammarly-to-acquire-coda/"
    accessedAt: "2026-10-10"
  - label: "Grammarly official blog: Grammarly Announces $1 Billion Growth Financing With General Catalyst (2025-05-29)"
    url: "https://www.grammarly.com/blog/company/grammarly-announces-growth-financing/"
    accessedAt: "2026-10-10"
  - label: "Grammarly official blog: Grammarly to Acquire Superhuman (2025-07-01)"
    url: "https://www.grammarly.com/blog/company/grammarly-to-acquire-superhuman/"
    accessedAt: "2026-10-10"
  - label: "Grammarly official blog: Grammarly Expands Beyond English With AI Writing Assistance in 5 New Languages (2025-09-10)"
    url: "https://www.grammarly.com/blog/company/grammarly-launches-multilingual-support/"
    accessedAt: "2026-10-10"
  - label: "Grammarly official: Languages (23 languages for writing support, 19 for in-line translation)"
    url: "https://www.grammarly.com/languages"
    accessedAt: "2026-10-10"
  - label: "Grammarly official blog: Grammarly Rebrands Company as Superhuman (2025-10-29)"
    url: "https://www.grammarly.com/blog/company/announcing-company-rebrand-to-superhuman"
    accessedAt: "2026-10-10"
  - label: "Superhuman official blog: Superhuman to Acquire GPTZero (2026-06-23)"
    url: "https://blog.superhuman.com/superhuman-to-acquire-gptzero/"
    accessedAt: "2026-10-10"
  - label: "Superhuman official blog: Superhuman Launches Superhuman Docs (2026-07-08)"
    url: "https://blog.superhuman.com/superhuman-launches-superhuman-docs/"
    accessedAt: "2026-10-10"
  - label: "Superhuman official blog: Superhuman Acquires Fathom (2026-09-14)"
    url: "https://blog.superhuman.com/superhuman-acquires-fathom/"
    accessedAt: "2026-10-10"
  - label: "Superhuman official blog: GPTZero is Now Part of Superhuman (2026-09-30)"
    url: "https://blog.superhuman.com/superhuman-acquires-gptzero/"
    accessedAt: "2026-10-10"
  - label: "Superhuman engineering blog: How We Scaled Our LLM Inference Infrastructure to Serve 100+ Billion Requests a Week (2026-09-16)"
    url: "https://blog.superhuman.com/scaling-gec-inference/"
    accessedAt: "2026-10-10"
  - label: "Grammarly engineering blog: Running Lisp in Production (2015-06-26)"
    url: "https://www.grammarly.com/blog/engineering/running-lisp-in-production/"
    accessedAt: "2026-10-10"
  - label: "Grammarly engineering blog: One Model to Rule Them All (the on-device model, 2025-04-28)"
    url: "https://www.grammarly.com/blog/engineering/efficient-on-device-writing-assistance/"
    accessedAt: "2026-10-10"
  - label: "Grammarly engineering blog: The Great Linkerd Mystery (2025-07-24)"
    url: "https://www.grammarly.com/blog/engineering/the-great-linkerd-mystery/"
    accessedAt: "2026-10-10"
  - label: "Grammarly official: Affiliates"
    url: "https://www.grammarly.com/affiliates"
    accessedAt: "2026-10-10"
  - label: "Grammarly official: Affiliate Program Operating Agreement (terms)"
    url: "https://www.grammarly.com/affiliates/terms"
    accessedAt: "2026-10-10"
  - label: "Grammarly official: Terms of Service (Superhuman Platform Inc.)"
    url: "https://www.grammarly.com/terms"
    accessedAt: "2026-10-10"
---

Grammarly is an AI writing assistant that sits on top of browsers, email and word processors, underlining errors in the English you are writing in red and suggesting rewrites and changes of tone. Where [DeepL](/en/articles/deepl), dissected on this site, grew from translation into rewriting, Grammarly went the other way: it started with English proofreading and now also offers generative AI features of the kind found in [ChatGPT](/en/articles/chatgpt). In October 2025 the company changed its name from Grammarly to Superhuman. Grammarly as a product remains at the center of the new company's suite.

## Service overview

Grammarly is sold in three plans, the free Free plan, Pro for individuals and teams, and Enterprise for large organizations, and runs as a browser extension, desktop apps for Windows and Mac, apps for iPhone and Android, and in its own writing surface, Docs.

:::fact
According to the official About Us page (checked 2026-10-10), Grammarly was founded in 2009 by Max Lytvyn, Alex Shevchenko and Dmytro Lider and grew from a grammar checker for students into an AI communication platform that works everywhere people write. It says the company acquired Coda and Superhuman Mail in 2025, became Superhuman that October, and that Grammarly remains at its core. According to an announcement on May 29, 2025, more than 40 million people used Grammarly daily and annual revenue exceeded $700 million. An announcement on September 14, 2026 says the company serves over 40 million people, 50,000 organizations and 3,000 educational institutions. The counterparty in the terms of service is Superhuman Platform Inc., formerly Grammarly, Inc.
:::

:::fact
According to the pricing page (checked 2026-10-10), Free corrects mistakes and shows writing tone and includes 100 AI prompts a month for generating text; Pro adds full-sentence rewrites, tone adjustment, and detection of plagiarism and AI-generated text, with 2,000 AI prompts per member a month; Enterprise has unlimited prompts, is delivered through Superhuman Go, and adds bring-your-own-key encryption (BYOK) and data loss prevention. Pro is displayed at $12 a month, and in the price list embedded in the page as seen from this site's location (Japan), annual billing was $144, monthly $30 and quarterly $60. According to an announcement on September 10, 2025, Grammarly expanded beyond English for the first time that day, adding grammar and spelling correction and paragraph rewrites in Spanish, French, Portuguese, German and Italian. The languages page (checked 2026-10-10) lists 23 languages with writing support, English and those five plus Turkish, Polish, Dutch, Vietnamese, Indonesian, Korean, Hindi and others. Japanese is not on that list; it appears, with Chinese and Korean, among the 19 target languages of the paid in-line translation feature.
:::

:::pull
A red underline is useless if it comes only after being asked. That promise of never making people wait is kept with 100 billion requests a week.
:::

::scorecard

## UX analysis

The core of Grammarly's experience is that users never have to ask. Unlike generative AI that waits for a question in a chat box, the suggestions come to the place where you are writing, while you are writing.

- **Suggestions appear without a button press.** The engineering blog (2026-09-16) notes that while most AI features wait for a user to trigger a request, grammar correction is "ambient," running continuously, and that latency is nonnegotiable because suggestions that do not appear instantly slow writers down. That premise dictates everything about how the inference platform, discussed below, is built.
- **It works wherever you write.** A July 2025 announcement said Grammarly works across more than 500,000 apps and websites and helps revise over 50 million emails a week across more than 20 email providers. By the October rename, the count of integrations was given as over 1 million apps and websites. Users get the same proofreading without switching apps.
- **Generative AI is metered by count.** The number of AI prompts, 100 a month on Free and 2,000 on Pro, is the dividing line between plans. Corrections by red underline are not counted; only the computationally heavier generation is.
- **It also shows whether AI wrote it.** Pro includes plagiarism and AI-text detection. A post on September 30, 2026 explains that Grammarly's Authorship, which shows how a piece of writing came together (what was typed, pasted or AI-generated), now sits alongside the AI detection of the acquired GPTZero, giving instructors signals so they do not judge students on a single score. The proofreading tool also sells a tool for checking AI use.
- **Japanese text cannot be corrected.** Writing support has grown to 23 languages, but Japanese is not among them. Paid in-line translation can render text into Japanese, but Japanese sentences themselves get no red underline. For users in Japan, Grammarly is a tool for English emails, papers and language learning.

## Tech stack

::techstack

:::fact
According to Grammarly's engineering blog (2015-06-26), the core grammar engine that formed the foundation of the business at the time was written in Common Lisp, processed more than a thousand sentences per second, and had run in production for almost three years. It was a classical AI application operating on huge piles of knowledge created by linguists and researchers, run on AWS with SBCL in production and CCL on most developers' machines. According to Superhuman's engineering blog (2026-09-16), grammatical error correction (GEC) went from a pipeline of small specialized models with tens to hundreds of millions of parameters to a single model with more than a billion parameters. The team moved from Amazon ECS, where each service needed a dedicated GPU pool, to Amazon EKS (Kubernetes), which lets instance types be mixed; adopted vLLM for inference; and squeezed latency with quantization that stores weights as 8-bit floats and with speculative decoding. It then sent production traffic to Databricks' Foundation Model API as shadow requests, compared latency, suggestion correctness and cost per token in an A/B test, and settled on a hybrid in which Databricks serves the highest-volume models while low-volume and experimental models stay in-house. For routing, the in-house LLM gateway was hardened from about 1,000 to about 100,000 requests per second.
:::

:::fact
Grammarly's engineering blog (2025-04-28) describes building a proof-of-concept that folds the spelling and grammar corrections handled by multiple large models into a single model of about 1 billion parameters so the assistant can work without a connection, choosing Llama over T5 as the base and optimizing first for Apple desktop users. A post on July 24, 2025 describes migrating the core text-processing services to Kubernetes on AWS, using Linkerd to secure and monitor communication between services, and tracking down a flood of proxy "denied" errors that erupted right after the migration. This site's own observation (2026-10-10) found www.grammarly.com served from Amazon CloudFront and blog.superhuman.com running on Ghost 6.68.
:::

:::guess
Much of the roughly 100 billion requests a week presumably comes from the writing of free users. Calling a large generative model for every correction would not pay, so narrowing the task to a dedicated model of about a billion parameters and cutting the cost and latency of each call with quantization and speculative decoding appears to be the precondition for keeping a free plan. That the on-device model and the single server-side model are both around a billion parameters suggests a direction of distributing the same family of models according to where they run. Keeping both an external vendor, Databricks, and an in-house platform lets traffic shift to one when the other is squeezed by GPU shortages or demand spikes; the post itself says the choice was "both/and" rather than build-or-buy.
:::

## The company that changed its name

:::fact
On December 17, 2024, Grammarly announced its acquisition of Coda, the document platform, and that Coda's co-founder and CEO Shishir Mehrotra would become Grammarly's CEO. On May 29, 2025, it announced $1 billion in financing from General Catalyst's Customer Value Fund, following the Coda acquisition in January 2025, to be used to scale sales and marketing and for strategic acquisitions. On July 1 it announced the acquisition of Superhuman, the AI-native email app, calling email the number-one use case of Grammarly for professionals. On October 29 the company renamed itself Superhuman and announced a suite of four products: Grammarly, Coda, Superhuman Mail and a new AI assistant, Superhuman Go. Go reads the context of a user's work to make proactive suggestions, orchestrates first- and third-party AI agents, and was offered with all features at no additional cost through February 1, 2026. In 2026 the company agreed on June 23 to acquire GPTZero, the AI detector (completed September 30), launched Superhuman Docs, a rebuilt Coda, on July 8, and acquired Fathom, an AI meeting notetaker, on September 14.
:::

| When | What happened |
| --- | --- |
| 2009 | Three founders start Grammarly |
| December 2024 | Coda acquisition announced; Coda's CEO becomes Grammarly's CEO |
| May 2025 | $1 billion from General Catalyst; annual revenue above $700 million |
| July 2025 | Acquisition of the email app Superhuman announced |
| September 2025 | Support for five languages beyond English |
| October 2025 | Company renamed Superhuman; Superhuman Go announced |
| June–September 2026 | GPTZero acquisition (agreed and completed), Superhuman Docs, Fathom acquisition |

:::guess
A proofreading company going so far as to change its name appears to stem from the worry that, with the arrival of generative AI, the function of polishing text itself is being absorbed into general-purpose AI such as ChatGPT. Grammarly's strength lies less in its models than in its distribution: being present at the moment of writing inside more than a million apps. The strategy can be read as attaching "work context" to that entry point, email, documents, meeting notes and AI detection, one after another, to beat general-purpose AI on the quality of its suggestions. For a company that sells tools for writing with AI to buy a tool for spotting AI writing looks contradictory, but it makes sense as an attempt to own the layer that tells both writers and readers how a text was made.
:::

## Business model

The business is freemium: gather users on the free plan and move them up to Pro and the business plans. The company also recruits affiliates on its own site and pays them for referrals.

:::fact
The affiliates page (checked 2026-10-10) advertises a 90-day cookie window, cross-device tracking and an activation bonus, and says the commission structure lets affiliates earn in two ways. According to the terms, in the individual consumer program two qualified actions earn commissions, a new account sign-up and an upgrade to a paid plan, and in the business program three, including self-serve purchases of up to 149 seats. The program runs through HasOffers, Commission Junction, PartnerStack and ShareASale, and bidding on trademarks such as "grammarly" and on generic terms such as "grammar checker" in search advertising is prohibited. The $1 billion of May 2025 was described as a "go-to-market investment" from General Catalyst's Customer Value Fund (CVF), to be used to scale sales and marketing and for acquisitions.
:::

:::guess
Paying affiliates even for sign-ups appears designed to widen the freemium funnel: get people writing for free first, then move those who write more onto a paid plan. Taking $1 billion as a "go-to-market investment" earmarked for sales and marketing also suggests a business in which how much acquired customers keep paying can be predicted. Whether the 40 million free and paid users can be converted into seats on the Superhuman suite presumably decides whether the rename pays off.
:::

Born in 2009 as an English grammar checker, Grammarly rebuilt its Common Lisp grammar engine into a single model with more than a billion parameters, splits 100 billion inferences a week between its own platform and Databricks, and keeps the red underlines coming without a wait. On the strength of that reach, the company renamed itself Superhuman and bought email, documents, meetings and AI detection. It is a big bet on whether a proofreading tool can become the assistant that is everywhere work happens in the age of AI.
