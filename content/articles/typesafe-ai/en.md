---
service: "TypeSafe AI"
title: "The AI That Doesn't Write — TypeSafe AI's Jev Returns Only Choices and Probabilities, Aiming to Be the Judgment Inside Your Code"
description: "TypeSafe AI is a San Francisco AI lab that opened early access on September 15, 2026 to Jev, a model that generates no text and returns only a choice, a score, or a yes/no probability. A dissection — from its website, docs, legal pages, GitHub, and press coverage — of its $42-per-billion-input-tokens pricing with free output, the company's own \"193.6x faster\" and \"238x cheaper\" claims and how they were measured, an official page listing the model's weak spots, and what is not public: funding, architecture, and independent verification."
lead: "The homepage reads \"193.6x Faster, 444.6x Cheaper\" and \"$42 per billion input tokens.\" Every one of those numbers is TypeSafe AI's own claim, not something this site measured. But the company also writes down why those numbers flatter its model, and publishes a page listing nine ways the model fails. A researcher whose name is on the paper behind the training method that led to ChatGPT spent two years in stealth and came out with an AI that does not write. This is a dissection of it from public information alone."
category: ai-tool
tags: [ai, api, automation, developer-tools, structured-output]
publishedAt: "2026-10-01"
updatedAt: "2026-10-01"
lastVerified: "2026-10-01"
serviceUrl: "https://typesafe.ai/"
vendor: "TypeSafe AI, Inc."
origin: "US"
heroTheme: "typesafe-ai"
scores: { product: 3.5, ux: 3.5, tech: 3.5, business: 2.5 }
techStack:
  - layer: "Model"
    name: "Jev 1.13 (System One model, in-house)"
    confidence: confirmed
    evidence: "The official Models page documents the current model jev-1.13.0, its price ($42 per billion tokens), rate limits, a 64k-token context length, and text-only input. The architecture (parameter count, layer design) is not published"
    evidenceUrl: "https://docs.typesafe.ai/models"
  - layer: "Training method"
    name: "RLCD (Reinforcement Learning for Calibrated Decisions)"
    confidence: confirmed
    evidence: "The AI primer in the official docs describes RLCD as a third post-training approach after RLHF and RLVR, one that returns decisions and calibrated probabilities instead of generated text. No method details or paper have been published"
    evidenceUrl: "https://docs.typesafe.ai/introduction/machine-learning-primer"
  - layer: "API"
    name: "REST API (POST /v1/systemone)"
    confidence: confirmed
    evidence: "The official API reference documents a single endpoint that takes state, model, and questions and returns answers, with Bearer authentication. In our own observation (2026-10-01), a request without a key to api.typesafe.ai returned a JSON authentication_error and an x-typesafe-request-id header"
    evidenceUrl: "https://docs.typesafe.ai/api"
  - layer: "SDK"
    name: "Python SDK (typesafe-sdk) / TypeScript SDK (@typesafe-ai/sdk)"
    confidence: confirmed
    evidence: "The typesafe-ai organization on GitHub publishes the official Python and TypeScript/JavaScript libraries under the MIT license. The Python package depends on httpx2, pydantic, and tenacity, among others"
    evidenceUrl: "https://github.com/typesafe-ai"
  - layer: "Evaluation code"
    name: "WorkflowEvals (Python)"
    confidence: confirmed
    evidence: "Code to reproduce the results on evals.typesafe.ai is published on GitHub (Apache-2.0). The README lists four workflows with 705 cases in total and how to run them against providers such as OpenAI, Anthropic, and Fireworks"
    evidenceUrl: "https://github.com/typesafe-ai/WorkflowEvals"
  - layer: "Website"
    name: "Framer"
    confidence: confirmed
    evidence: "In our observation (2026-10-01), typesafe.ai returned server: Framer and a framer-site-id header, the HTML carried a generator: Framer meta tag, and the CNAME of www.typesafe.ai pointed to sites.framer.app"
    evidenceUrl: "https://typesafe.ai/"
  - layer: "Documentation"
    name: "Mintlify"
    confidence: likely
    evidence: "In our observation (2026-10-01), the CNAME of docs.typesafe.ai pointed to cname.mintlify.builders, images were served from mintcdn.com, and responses carried a Link header to llms.txt. We found no official statement"
  - layer: "CDN and DNS"
    name: "Cloudflare"
    confidence: likely
    evidence: "In our observation (2026-10-01), the name servers of typesafe.ai were on ns.cloudflare.com, and the api, console, evals, and docs subdomains returned server: cloudflare and cf-ray headers"
  - layer: "Container platform"
    name: "Kubernetes"
    confidence: likely
    evidence: "The official careers page lists an opening for \"Member of Technical Staff, Infrastructure (Kubernetes Specialist).\" We found no explicit statement that the product runs on it"
    evidenceUrl: "https://jobs.ashbyhq.com/typesafe-ai"
  - layer: "Applicant tracking"
    name: "Ashby"
    confidence: confirmed
    evidence: "\"Open roles\" on the official site links to jobs.ashbyhq.com/typesafe-ai, and typesafe.ai/careers serves the same Ashby job board"
    evidenceUrl: "https://jobs.ashbyhq.com/typesafe-ai"
  - layer: "Security and compliance"
    name: "Vanta"
    confidence: likely
    evidence: "trust.typesafe.ai, which the Data Processing Addendum points to for its subprocessor list, was a Trust Center loading Vanta scripts in our observation (2026-10-01). We could not confirm which certifications have been obtained"
  - layer: "Product analytics"
    name: "PostHog"
    confidence: likely
    evidence: "In our observation (2026-10-01), the HTML of typesafe.ai referenced us.posthog.com. The analytics service the privacy policy names is Google Analytics; we found no mention of PostHog there"
  - layer: "Email"
    name: "Google Workspace / SendGrid"
    confidence: likely
    evidence: "In our observation (2026-10-01), the MX records of typesafe.ai pointed to Google mail servers and the SPF record included _spf.google.com and sendgrid.net"
  - layer: "Authentication"
    name: "Stytch"
    confidence: speculative
    evidence: "In our observation (2026-10-01), the TXT records of typesafe.ai included stytch_verification_dns. That is a domain verification record; we could not confirm that the console login uses it"
sources:
  - label: "TypeSafe AI: homepage (the 193.6x, 444.6x, $42, and 238x figures)"
    url: "https://typesafe.ai/"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI blog: Introducing System One Models & Jev (2026-09-15)"
    url: "https://typesafe.ai/blog/introducing-system-one-models-and-jev"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI blog: Lies, Damned Lies, and Benchmarks (2026-09-11)"
    url: "https://typesafe.ai/blog/antibenchmaxxing"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI: Manifesto"
    url: "https://typesafe.ai/manifesto"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI: Team (founders, location, how the team works)"
    url: "https://typesafe.ai/team"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI docs: Models (price, rate limits, context length, languages)"
    url: "https://docs.typesafe.ai/models"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI docs: System One"
    url: "https://docs.typesafe.ai/concepts/system-one"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI docs: Introduction (Choice, Score, Noul)"
    url: "https://docs.typesafe.ai/introduction"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI docs: AI primer (RLCD)"
    url: "https://docs.typesafe.ai/introduction/machine-learning-primer"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI docs: Jev 1.13 jaggedness (list of weak spots, reviewed 2026-09-17)"
    url: "https://docs.typesafe.ai/model-jaggedness/jev-1.13"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI docs: Jev with coding agents"
    url: "https://docs.typesafe.ai/introduction/coding-agents"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI docs: API reference"
    url: "https://docs.typesafe.ai/api"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI docs: Legal (ZDR for enterprise customers)"
    url: "https://docs.typesafe.ai/legal"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI: Workflow evals"
    url: "https://evals.typesafe.ai/"
    accessedAt: "2026-10-01"
  - label: "GitHub: typesafe-ai (official organization page)"
    url: "https://github.com/typesafe-ai"
    accessedAt: "2026-10-01"
  - label: "GitHub: typesafe-ai/WorkflowEvals (evaluation code)"
    url: "https://github.com/typesafe-ai/WorkflowEvals"
    accessedAt: "2026-10-01"
  - label: "GitHub: typesafe-ai/system-one-adapter-python (adapter that calls LLMs through the same API shape)"
    url: "https://github.com/typesafe-ai/system-one-adapter-python"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI: Privacy Policy (updated 2025-11-19)"
    url: "https://typesafe.ai/legal/privacy-policy"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI: Terms of Use (updated 2026-09-19; address, governing law)"
    url: "https://typesafe.ai/legal/terms"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI: Master Customer Agreement (updated 2026-09-23)"
    url: "https://typesafe.ai/legal/mca"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI: Data Processing Addendum (updated 2026-04-24)"
    url: "https://typesafe.ai/legal/data-processing"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI: careers page (Ashby)"
    url: "https://jobs.ashbyhq.com/typesafe-ai"
    accessedAt: "2026-10-01"
  - label: "arXiv: Training language models to follow instructions with human feedback (the InstructGPT paper, 2022-03-04)"
    url: "https://arxiv.org/abs/2203.02155"
    accessedAt: "2026-10-01"
  - label: "TechCrunch: A new kind of AI model from a ChatGPT inventor is thrilling developers (2026-09-18)"
    url: "https://techcrunch.com/2026/09/18/a-new-kind-of-ai-model-from-a-chatgpt-inventor-is-thrilling-developers/"
    accessedAt: "2026-10-01"
  - label: "Hacker News: Introducing System One Models and Jev (posted 2026-09-15)"
    url: "https://news.ycombinator.com/item?id=49717558"
    accessedAt: "2026-10-01"
  - label: "Claude Platform docs: Pricing (input price of Claude Fable 5.1)"
    url: "https://platform.claude.com/docs/en/about-claude/pricing"
    accessedAt: "2026-10-01"
---

A chat AI returns text meant for a person to read. For a program to use that answer, something has to parse the text and check that it has the right shape. TypeSafe AI is a bet on removing that step on the model's side. Its model does not write a single character of prose. It returns one of the options you defined in advance, a score, or the probability of a yes.

## What It Is

TypeSafe AI describes itself as "an AI lab building machine-native intelligence infrastructure for automation, designed to make decisions within software." Its first public model is Jev, and the company calls this class of model a "System One Model."

Using it is simple. You pass the text or JSON the judgment depends on as the "state," and attach "questions" to it. There are only three kinds of question.

- **Choice**. Picks one option from a set you define. You get the chosen option, a probability for each option, and a confidence value.
- **Score**. Rates the state against ordered levels you define. You get a score, a probability for each level, and a confidence value.
- **Noul**. Answers a yes/no question with the probability (0 to 1) that the answer is yes.

Because nothing else comes back, the receiving program can use the values directly in an `if` or a sort. The official docs use a refund request as the example: put the customer's message, the transactions, and the refund policy in the state; ask separately and at once whether a refund was requested, whether the evidence shows a duplicate charge, and whether the policy supports a refund; then combine the answers with fixed rules in code to decide whether to act or send the case to a person.

"System 1" is the term the psychologist Daniel Kahneman popularized in *Thinking, Fast and Slow* for fast, intuitive thinking, as opposed to slow, deliberate "System 2." In the company's framing, a general-purpose LLM thinks while writing text one token after another, whereas Jev takes on only the kind of judgment "a highly knowledgeable person could make in a few seconds given the right context." For a judgment that weighs several factors, the company's advice is to split it into small questions and write the weighting in code.

:::fact
The official blog post of September 15, 2026, signed by founder Diogo Almeida, announced Jev in early access after two years in stealth. According to the official Team page, there are three founders: Almeida as CEO, Sasha Sheng as COO, and Erik Gafni as CTO. The page describes Almeida as a co-inventor of RLHF and InstructGPT who was previously at Google Brain. Diogo Almeida is one of the 20 authors listed on the InstructGPT paper (arXiv, March 2022). According to the Terms of Use, the operating company is TypeSafe AI, Inc., located at 255 California St in San Francisco. The Team page says the team works in person five days a week in its San Francisco office. The organization page on GitHub was created on May 28, 2024.
:::

:::fact
A good deal is not public. The Team page says the company is "backed by top-tier investors," but we found no investor names, amount raised, or valuation anywhere on the official site. The TechCrunch article of September 18, 2026 gives no funding amount or investors either. Headcount, revenue, customer names, and Jev's parameter count and architecture are not published. As of October 1, 2026, the careers page listed nine roles, from technical staff for model capabilities, backend, and infrastructure to a founding recruiter, a founding marketer, and strategic finance, all based in the San Francisco office.
:::

:::pull
Jev does not write. It returns one of your options, a score, or the probability of a yes.
:::

::scorecard

A note on the scores. Jev is in early access, with developers invited from a waitlist. This site has not been able to use the console or the API, so we have not experienced its speed, accuracy, or cost first-hand. The scores are based on what can be read from the official docs, legal pages, and public code, and we did not score highly where we could not check. Product reflects the discipline of three question types and the plain statement of what the model cannot do, minus its youth: text only, English first, two weeks since launch. UX weighs the thorough documentation against the waitlist in front of it. Tech weighs the published evaluation code against an undisclosed architecture and still-thin third-party verification. Business is lower because, although the price is public, funding, revenue, and the sustainability of that price cannot be confirmed.

## UX Analysis

Jev's "users" are developers and the code they write. Its experience design shows up in the shape of the API and the docs more than in any screen.

- **Only three kinds of question**. The constraint of fitting everything into Choice, Score, or Noul is itself the design. All three can be mixed in one request, and according to the official docs each question is evaluated in parallel and in isolation against the same state.
- **Confidence splits "let the machine act" from "ask a person"**. Choice and Score answers come with a confidence value. The docs describe "confidence-gated routing": act automatically when confidence is high, and escalate to a person or a reasoning model when it is low.
- **It says what it cannot do up front**. The page for coding agents opens by stating that Jev is not a drop-in replacement for the LLM behind Claude Code or Cursor, because it does not generate text, write code, or hold a conversation.
- **There is a page listing its weak spots**. "Jev 1.13 jaggedness" lists nine failure modes — reading too literally, unreliable counting, unreliable date comparison, weakness on multi-hop questions, accuracy falling as irrelevant detail grows, being moved by adversarial content, and more — each with a workaround.
- **An entrance that AI agents can read**. docs.typesafe.ai serves an `llms.txt` and returns each page as `.md`. The company also publishes an "agent skill" for Claude Code, Codex, and similar tools; its GitHub repository had 2,513 stars as of October 1, 2026.

:::fact
According to the official Models page (as of October 1, 2026), the current model is `jev-1.13.0`. Rate limits are 100K tokens per second and 40 requests per second, and the context length is 64k tokens per request (32k for the state plus the longest question). Input is text only; images, audio, and video are not supported. The page warns that rate limits can change without notice because of very high demand. English is the primary training language and where accuracy is best; other languages, including CJK scripts, are handled but not equally well, and the page recommends testing on your own content before relying on Jev for a non-English workload.
:::

:::fact
This site has not been able to try Jev. The official blog says the company is bringing developers off the waitlist "as quickly as we can." In our observation (October 1, 2026), calling `api.typesafe.ai/v1/models` without a key returned a JSON authentication error. TechCrunch reported that right after launch, demand was so high that the company briefly lost the ability to serve users from its API.
:::

## Tech Stack

::techstack

:::fact
The official blog says the company built "a new model architecture," a "parallel sampler," and a training method it calls RLCD for Jev. As the company explains it, an LLM generates one token at a time, while Jev outputs the probabilities for every answer in a single pass. Because the shape of the output is defined in advance, an answer of the wrong type is not returned. The AI primer in the official docs describes RLCD as a method under which the model "does not generate text," "returns decisions and probabilities," and is trained so that a higher probability corresponds to a greater chance that the answer is correct. However, the architecture details, parameter count, training procedure, and any paper are not published. TechCrunch described Jev as a transformer-based model that is not an LLM, reported that Almeida is tight-lipped about the architecture, and noted that outside observers suspect it is built on top of an open-weight LLM. In the same article, Almeida says the model is trained exclusively on synthetic data.
:::

:::fact
The company's "Zero Hallucinations" wording needs to be read narrowly. The official blog notes, in its own words, that this number "is not empirical": schema matching is guaranteed, so it puts 0% in the plot. The official docs, meanwhile, say that calibration "is measured across groups of predictions; it does not guarantee that an individual answer is correct." In other words, an off-schema answer is not returned, but picking the wrong option from the set can still happen.
:::

:::fact
The `typesafe-ai` organization on GitHub publishes the official Python and TypeScript SDKs (MIT), the WorkflowEvals evaluation code (Apache-2.0), an adapter that calls LLMs through the same API shape as Jev, and a node for n8n, among others. The same organization also holds forks of `vllm`, an inference engine for LLMs, and `LLaDA`, an implementation of a diffusion-style language model.
:::

:::guess
Public information says little about what is inside Jev. An input price two orders of magnitude below LLMs with free output, a 64k-token context, and the statement that adding questions barely changes response time together suggest an architecture that reads the state once and extracts the answer to every question at the same time with a short computation. On Hacker News, some readers speculated that it is an encoder-style transformer post-trained for classification and regression. The forks of vllm and LLaDA in the organization appear to show that the company studied existing inference stacks and language models that do not generate sequentially, but whether Jev uses either is unknown.
:::

:::guess
The surrounding technology we could observe looks like the choices of a small company. The website is on Framer, the docs on Mintlify, hiring on Ashby, and the Trust Center on Vanta: everything except the model appears to be assembled from outside services, presumably to concentrate effort on the model and the serving stack. The official blog says its published evals are generally run "from our laptops on the West Coast," which is where the service is currently based. Calls from distant regions, Japan included, would presumably add a network round trip on top of the 70–500ms the company cites.
:::

## Business Model

There is one revenue line: usage-based API pricing.

:::fact
According to the official docs, the price is $42 per billion input tokens ($0.042 per million), and output is free. Higher rate limits are offered on "custom and enterprise plans" through sales. We found no list of monthly plans or a free tier on the site or in the docs. According to the Master Customer Agreement (updated September 23, 2026), payment works through prepaid credits that are consumed by each input. Purchased credits expire 12 months after purchase unless an order says otherwise and are not refundable. Automatic refills when the balance runs out are opt-in. The agreement also covers free "Promotional Credits" that the company may issue at its discretion, with no obligation to do so.
:::

:::fact
Every number on the homepage is the company's own claim, and each has a specific baseline. "238x" compares input price with Claude Fable 5.1. On Anthropic's official price list, Fable 5.1 input costs $10 per million tokens; dividing by $0.042 gives about 238. The output price ($50 per million) is not part of the comparison, since Jev's output is free. "193.6x Faster, 444.6x Cheaper" comes, according to the official blog, from the company's own "workflow evals." Four tasks (invoice processing, customer service, agent trace observability, and security incident triage) are written as workflows in code; every model is asked the same questions; and the average of the answers from GPT-6 Astra and Claude Fable 5.1 is used as the reference. The evaluation code and 705 cases are public.
:::

:::fact
The company attaches its own caveats to these numbers. According to the official blog, 193.6x and 444.6x are expected to be "on the higher end of real world gains," and the workflows were made by people on its own model capabilities team, "so some bias could exist." The LLMs being compared answer through the company's adapter, which makes them output decisions with probabilities, and that "tends to be slower and more expensive" than giving decisions without probabilities. The published measurements were run from laptops on the West Coast. On price, the blog says "we can't prove it isn't subsidized" and that only the long term can show it. A separate blog post explains that the company will not put a standard benchmark table in its model releases. So for now there is no public benchmark result that places Jev on the same footing as other models.
:::

:::fact
Third-party reports are still individual cases. TechCrunch quoted an engineer at Vercel who said that replacing an OpenAI model with Jev in a classifier that reviews commands for safety gave results 5 to 18 times faster, and another developer who compared Jev with Gemini on classifying business emails and found Gemini slightly more accurate but 10 to 20 times more expensive. Both are the individuals' own reports; this site has not verified them. The Hacker News submission of the official blog post had 1,989 points and 520 comments as of October 1, 2026. Some commenters argued that existing zero-shot classifiers or small dedicated models may be enough for many of these uses.
:::

:::fact
Data handling is written into the legal pages. The privacy policy states that the company will not train or fine-tune AI models on user input, will not disclose input to third parties other than its service providers, and hosts the services in the United States. The Models page also says Jev is not trained on customer requests or responses and that the same weights serve every account. Zero data retention (ZDR) is offered to enterprise customers through sales. The Master Customer Agreement, on the other hand, lets the company process "Telemetry" such as technical logs and summary statistics without restriction, including to improve the services. The same agreement caps liability at the greater of the amounts paid in the prior 12 months or $50, and provides the services "as is." Using Jev's output for model distillation or to train a model that imitates it is prohibited.
:::

:::guess
Making output free and pricing input by the billion tokens appears aimed at making a single judgment cheap enough to call in bulk without thinking about it. The official blog says the model is named after William Stanley Jevons, the economist who argued that more efficient use of coal increased its consumption, so the name itself seems to carry the idea of creating new uses by lowering the price. Whether this price is profitable, or supported by investor money, cannot be told from the outside. The company itself writes that it cannot prove it.
:::

:::guess
The legal pages and the hiring suggest how the company may sell from here. A contract built around orders and invoices, ZDR for enterprises, and openings for the first people in recruiting, marketing, and finance look like preparation for growing individual enterprise deals on top of the pay-as-you-go entrance. What Jev takes on is sorting, scoring, and checking: the parts developers used to hand to an LLM with "return JSON." Rather than replacing LLMs, the outcome of this business seems likely to depend on whether Jev spreads as a component placed in front of and behind them.
:::

What TypeSafe AI released is not an AI that can do anything, but one narrowed to three kinds of answer. Its numbers are large, and all of them are its own measurements, as the company itself says. Publishing the evaluation code and a list of weak spots gives readers something to check them with. Its funding and architecture are undisclosed, and only two weeks have passed since launch. Whether the subtraction of "not writing" actually gets chosen for the judgments inside code is something the developers now coming off the waitlist will show.
