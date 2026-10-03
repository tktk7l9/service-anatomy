---
title: "The Side Claiming 238x Cheaper Uses Its Rival as the Answer Key — TypeSafe AI's Jev and Claude Are Less Competitors Than Different Parts"
description: "TypeSafe AI, maker of Jev, a decision-only model that writes no text, says on its homepage that Jev's input price is 238x lower than Claude Fable 5.1. In its own evaluation, it uses that same Claude Fable 5.1 as the reference for what counts as correct. Overlaying the two dissections — how the price lists are compared, what each model can do, whether you can try it, and what kind of information each publishes — shows a general reasoning model and a narrow, fast decision model related by combination rather than replacement."
lead: "TypeSafe AI's homepage says Jev's input price is 238 times lower than Claude Fable 5.1. Open the company's evaluation site, and the answers of that same Claude Fable 5.1 are being used as the reference for what is correct. The model it measures its cheapness against is also the model it learns correctness from. This piece reads that seemingly twisted relationship through the two dissections and both companies' official pages."
slugA: "typesafe-ai"
slugB: "claude"
publishedAt: "2026-10-01"
updatedAt: "2026-10-02"
lastVerified: "2026-10-02"
sources:
  - label: "TypeSafe AI: homepage (the 238x and $42 figures)"
    url: "https://typesafe.ai/"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI docs: Models (price, context length, input types)"
    url: "https://docs.typesafe.ai/models"
    accessedAt: "2026-10-01"
  - label: "Claude Platform docs: Pricing (input and output prices by model)"
    url: "https://platform.claude.com/docs/en/about-claude/pricing"
    accessedAt: "2026-10-02"
  - label: "TypeSafe AI: Workflow evals (how the reference labels are made)"
    url: "https://evals.typesafe.ai/"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI blog: Introducing System One Models & Jev (2026-09-15)"
    url: "https://typesafe.ai/blog/introducing-system-one-models-and-jev"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI docs: Jev with coding agents"
    url: "https://docs.typesafe.ai/introduction/coding-agents"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI docs: Jev 1.13 jaggedness"
    url: "https://docs.typesafe.ai/model-jaggedness/jev-1.13"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI docs: System One (where low-confidence answers go)"
    url: "https://docs.typesafe.ai/concepts/system-one"
    accessedAt: "2026-10-01"
---

[TypeSafe AI](/en/articles/typesafe-ai)'s Jev and [Claude](/en/articles/claude) are both "AI models you call through an API." But one writes prose and code, and the other returns only options and probabilities. The companies differ greatly in size and in the kind of information they publish. Putting them side by side still makes sense, because TypeSafe AI itself names Claude as the thing to compare against.

## Which row of the price list "238x" compares

TypeSafe AI's homepage says Jev's input price is "238x lower" than Claude Fable 5.1. That is the company's claim, and the numbers behind the arithmetic are on both companies' official price lists.

:::fact
According to TypeSafe AI's official docs, Jev 1.13 costs $0.042 per million input tokens ($42 per billion), and output is free. On Anthropic's official price list (as of October 1, 2026), Claude Fable 5.1 costs $10 per million input tokens and $50 per million output tokens. Dividing $10 by $0.042 gives about 238. The same price list also shows Claude Opus 5.5 ($4 input, $20 output), Claude Sonnet 5.5 ($2 input, $10 output), and Claude Haiku 4.5 ($1 input, $5 output).
:::

The 238x figure compares Jev with the row that has the highest input price among the four current models at the top of Claude's list. Applying the same arithmetic ourselves to other rows gives about 95x against Opus 5.5 and about 24x against Haiku 4.5 (each is this site's calculation: the model's input price divided by $0.042). The list's "other models" section also carries older models; against Claude Opus 4.1 at $15 input the figure would be about 357x, and against Claude Haiku 3.5 at $0.80 about 19x. The gap is an order of magnitude or more against any row, but the multiple moves by a factor of ten depending on which row is chosen.

:::pull
238x is measured against the most expensive input row among the four current models. Against the cheapest of them, Haiku 4.5, it is about 24x.
:::

One more point: only input is being compared. Claude charges five times its input price for output. Jev's output is free, but it does not output text in the first place. As the [TypeSafe AI](/en/articles/typesafe-ai) dissection shows, Jev returns only one of your defined options, a score, or a probability; the explanations and code Claude returns never exist as something to charge for.

:::guess
Showing only the input price is a framing that favors Jev, but it is not clearly off the mark either. In uses such as sorting and checking, the model reads long material and gives a short answer, so most of the cost presumably sits on the input side. That said, many users giving the same job to Claude would likely choose a cheaper model such as Haiku 4.5 rather than Fable 5.1, in which case the gap would presumably be far smaller than 238x. Which is the better deal once accuracy is included cannot be told from the price lists.
:::

## The model it measures cheapness against is also its standard of correctness

TypeSafe AI publishes "workflow evals" as the basis for its speed and cost claims. Claude appears in how those evals are scored.

:::fact
According to TypeSafe AI's evaluation site, the eval assumes the workflow written in code is correct and builds the reference label for each question by averaging the responses of GPT-6 Astra and Claude Fable 5.1, both at high thinking. Other models answer the same questions at their provider's default reasoning setting and are measured by how closely they match that reference. The official blog notes that this biases the answers toward OpenAI's and Anthropic's models, and that it likely underestimates the relative performance of TypeSafe AI's own model.
:::

So what Jev is aiming for in this eval is not to be smarter than Claude Fable 5.1. It is to get close to the answers Claude Fable 5.1 and GPT-6 Astra give, far more cheaply and quickly. The design of the eval itself puts the large general-purpose models in the teacher's seat.

:::fact
TypeSafe AI's official docs also state plainly where Jev does not stand in for Claude. The page for coding agents says Jev is not a drop-in replacement for the LLM behind Claude Code or Cursor. The page listing its weak spots says it struggles with multi-hop reasoning, arithmetic, date comparison, and text generation, and that if you need generated text "there are other models for that." The System One page recommends escalating low-confidence answers to a person or a reasoning model. The company also publishes an "agent skill" that teaches agents such as Claude Code how to use Jev's API.
:::

:::guess
This relationship looks closer to a division of labor than to competition. As the [Claude](/en/articles/claude) dissection shows, Anthropic is extending its products toward prose, code, and agents, where a person receives the work. Jev targets what sits in front of and behind that: sorting, scoring, and checking, where a program receives the result. The combination that can be read from TypeSafe AI's own recommended usage is to handle the bulk of judgments cheaply with Jev and send only the low-confidence ones to a model like Claude. Even if Jev spreads, calls to Claude would not necessarily fall; it seems more likely that only the hard judgments would be selected and passed on.
:::

## What you can try, and what each publishes, point in opposite directions

The two companies also differ in what can be checked from the outside.

:::fact
According to the [Claude](/en/articles/claude) dissection, anyone can use Claude starting from a free plan, with five tiers for individuals, teams, and enterprises plus usage-based API pricing. Anthropic is a public benefit corporation with roughly 2,500 employees and a reported valuation of $965 billion as of May 2026. According to the [TypeSafe AI](/en/articles/typesafe-ai) dissection, Jev opened in early access on September 15, 2026, with developers invited from a waitlist. Input is text only and the context length is 64k tokens. Investor names, the amount raised, headcount, and the model's architecture are not public. This site has not been able to try Jev either.
:::

:::fact
What TypeSafe AI publishes is a different kind of information: the code that runs its evals and 705 cases (confirmed in the [TypeSafe AI](/en/articles/typesafe-ai) dissection), a page listing nine weak spots of the model, and caveats on its own numbers. The official blog states, in the company's own words, that the 193.6x and 444.6x figures are expected to be on the higher end of real-world gains, that the eval workflows were made by its own team, and that it cannot prove its price is not subsidized.
:::

:::guess
Our reading is that Anthropic offers more information about company scale and funding, while TypeSafe AI offers finer detail about a model's limits and evaluation procedure, at least for the single model Jev. For a company two weeks past launch, earning trust through financial strength or customer names is hard. It appears to be seeking developers' trust by handing out material they can check themselves instead. Only those who have been invited can do that checking, though, and whether the numbers reproduce widely is not yet known.
:::

The side claiming to be 238x cheaper uses its rival as the answer key. That is not a contradiction; it shows the two models are different parts. [Claude](/en/articles/claude) thinks and writes. [TypeSafe AI](/en/articles/typesafe-ai)'s Jev decides without writing. More than which one wins, the question for developers from here is where to draw the line between them inside one system.
