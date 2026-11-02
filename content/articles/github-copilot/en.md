---
service: "GitHub Copilot"
title: "The Seat Became a Meter — From $10-a-Month Autocomplete to a Token-Billed Agent Platform: GitHub Copilot's Price List, Dissected"
description: "GitHub Copilot launched in 2022 as a flat $10 a month. On June 1, 2026 it moved to token-based usage billing. This piece dissects, from official sources, the shift from premium requests to GitHub AI Credits, the two-layer base and flex allotments, Copilot Fusion's routing, the cloud agent's runtimes, the default of using individual plans' data for training, and the numbers Microsoft has given on its earnings calls."
lead: "\"A quick chat question and a multi-hour autonomous coding session can cost the user the same amount.\" That is how GitHub described Copilot's pricing in April 2026, on its way to abandoning it. Completions stay outside the meter; chat and agents are measured in tokens. The seat became a prepaid credit, other companies' models pass through at API prices, and the word consumption began appearing on Microsoft's earnings calls. What is Copilot selling now? The price list and the calls give an answer."
category: dev-tool
tags: [ai, developer-tools, code-assistant, coding-agent, github, usage-based-pricing]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
serviceUrl: "https://github.com/features/copilot"
vendor: "GitHub, Inc. (owned by Microsoft)"
origin: "US"
heroTheme: "github-copilot"
scores: { product: 4.5, ux: 3.5, tech: 4.5, business: 4.5 }
techStack:
  - layer: "Editor integration"
    name: "VS Code (vscode-copilot-chat merged into core)"
    confidence: confirmed
    evidence: "The README of the MIT-licensed microsoft/vscode-copilot-chat repository states the project moved into the main VS Code repository. The repository was archived on May 20, 2026 (checked 2026-11-02)"
    evidenceUrl: "https://github.com/microsoft/vscode-copilot-chat"
  - layer: "Model router"
    name: "Copilot Fusion"
    confidence: confirmed
    evidence: "Official docs describe it as a runtime model router and orchestrator and name the Single, Cascade and Critique execution patterns (checked 2026-11-02)"
    evidenceUrl: "https://docs.github.com/en/copilot/concepts/models/copilot-fusion"
  - layer: "Third-party model serving"
    name: "OpenAI / Anthropic / Google / xAI"
    confidence: confirmed
    evidence: "The official model hosting page states GPT models are hosted by OpenAI and GitHub's Azure infrastructure, Claude on AWS, Anthropic and Google Cloud, Gemini on Google Cloud, and Grok by xAI (checked 2026-11-02)"
    evidenceUrl: "https://docs.github.com/en/copilot/reference/ai-models/model-hosting"
  - layer: "Microsoft's own model"
    name: "MAI-Code-1.1-Flash (Azure AI Foundry)"
    confidence: confirmed
    evidence: "Official docs state it is a first-party Microsoft model served on Azure AI Foundry within GitHub's tenant. $0.20 per million input tokens, $1.20 output (checked 2026-11-02)"
    evidenceUrl: "https://docs.github.com/en/copilot/reference/ai-models/model-hosting"
  - layer: "Open-weight model and free-tier completions"
    name: "Fireworks AI"
    confidence: confirmed
    evidence: "Official docs state GitHub hosts Kimi K3 on Fireworks AI, and that the inline suggestion models for Copilot Free and Student are hosted there. Inline suggestions for Business and Enterprise run on Azure (checked 2026-11-02)"
    evidenceUrl: "https://docs.github.com/en/copilot/reference/ai-models/model-hosting"
  - layer: "Cloud agent runtime"
    name: "GitHub Actions / cloud sandboxes"
    confidence: confirmed
    evidence: "Official docs list two environments: Actions, limited to one repository and 59 minutes, and cloud sandboxes, which support multi-repository sessions (checked 2026-11-02)"
    evidenceUrl: "https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent"
  - layer: "Product page delivery"
    name: "GitHub-operated delivery"
    confidence: likely
    evidence: "Observed response headers on the product page (server: github.com, x-github-request-id, 2026-11-02). This shows how the page is served, not how Copilot itself is built"
sources:
  - label: "Microsoft IR: FY27 Q1 earnings conference call (2026-10-28)"
    url: "https://www.microsoft.com/en-us/investor/events/fy-2027/earnings-fy-2027-q1"
    accessedAt: "2026-11-02"
  - label: "Microsoft IR: FY26 Q4 earnings conference call (2026-07-29)"
    url: "https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q4"
    accessedAt: "2026-11-02"
  - label: "Microsoft IR: FY26 Q3 earnings conference call (2026-04-29)"
    url: "https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q3"
    accessedAt: "2026-11-02"
  - label: "Microsoft IR: FY26 Q2 earnings conference call (2026-01-28)"
    url: "https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q2"
    accessedAt: "2026-11-02"
  - label: "Microsoft IR: FY26 Q1 earnings conference call (2025-10-29)"
    url: "https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q1"
    accessedAt: "2026-11-02"
  - label: "Microsoft IR: FY25 Q4 earnings conference call (2025-07-30)"
    url: "https://www.microsoft.com/en-us/investor/events/fy-2025/earnings-fy-2025-q4"
    accessedAt: "2026-11-02"
  - label: "Microsoft: Microsoft to acquire GitHub for $7.5 billion (2018-06-04)"
    url: "https://news.microsoft.com/source/2018/06/04/microsoft-to-acquire-github-for-7-5-billion/"
    accessedAt: "2026-11-02"
  - label: "GitHub Docs: Plans for GitHub Copilot (plans, allowances, models)"
    url: "https://docs.github.com/en/copilot/get-started/plans"
    accessedAt: "2026-11-02"
  - label: "GitHub: Copilot plan comparison page"
    url: "https://github.com/features/copilot/plans"
    accessedAt: "2026-11-02"
  - label: "GitHub Docs: Usage-based billing for individuals"
    url: "https://docs.github.com/en/copilot/concepts/billing-and-usage/individuals/billing"
    accessedAt: "2026-11-02"
  - label: "GitHub Docs: Usage-based billing for organizations and enterprises"
    url: "https://docs.github.com/en/copilot/concepts/billing-and-usage/organizations-and-enterprises/billing"
    accessedAt: "2026-11-02"
  - label: "GitHub Docs: Models and pricing (per-model token rates)"
    url: "https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing"
    accessedAt: "2026-11-02"
  - label: "GitHub Docs: Billing for cloud and local sandboxes"
    url: "https://docs.github.com/en/billing/concepts/product-billing/cloud-and-local-sandboxes"
    accessedAt: "2026-11-02"
  - label: "GitHub Blog: GitHub Copilot is moving to usage-based billing (2026-04-27)"
    url: "https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/"
    accessedAt: "2026-11-02"
  - label: "GitHub Blog: Changes to GitHub Copilot Individual plans (2026-04-20)"
    url: "https://github.blog/news-insights/company-news/changes-to-github-copilot-individual-plans/"
    accessedAt: "2026-11-02"
  - label: "GitHub Blog: Introducing flex allotments in Pro and Pro+, and a new Max plan (2026-05-12)"
    url: "https://github.blog/news-insights/company-news/github-copilot-individual-plans-introducing-flex-allotments-in-pro-and-pro-and-a-new-max-plan/"
    accessedAt: "2026-11-02"
  - label: "GitHub Changelog: Updates to GitHub Copilot billing and plans (2026-06-01)"
    url: "https://github.blog/changelog/2026-06-01-updates-to-github-copilot-billing-and-plans/"
    accessedAt: "2026-11-02"
  - label: "GitHub Changelog: Copilot individual plan sign-ups are reopening (2026-06-17)"
    url: "https://github.blog/changelog/2026-06-17-copilot-individual-plan-sign-ups-are-reopening/"
    accessedAt: "2026-11-02"
  - label: "GitHub Changelog: Upcoming changes to GitHub Copilot policies and billing (2026-08-28)"
    url: "https://github.blog/changelog/2026-08-28-upcoming-changes-to-github-copilot-policies-and-billing/"
    accessedAt: "2026-11-02"
  - label: "GitHub Changelog: Announcing GitHub Copilot Pro+ (2025-04-04)"
    url: "https://github.blog/changelog/2025-04-04-announcing-github-copilot-pro/"
    accessedAt: "2026-11-02"
  - label: "GitHub Changelog: Update to GitHub Copilot consumptive billing experience (2025-06-18)"
    url: "https://github.blog/changelog/2025-06-18-update-to-github-copilot-consumptive-billing-experience/"
    accessedAt: "2026-11-02"
  - label: "GitHub Changelog: Coding agent now uses one premium request per session (2025-07-10)"
    url: "https://github.blog/changelog/2025-07-10-github-copilot-coding-agent-now-uses-one-premium-request-per-session/"
    accessedAt: "2026-11-02"
  - label: "GitHub Changelog: Copilot coding agent is now generally available (2025-09-25)"
    url: "https://github.blog/changelog/2025-09-25-copilot-coding-agent-is-now-generally-available/"
    accessedAt: "2026-11-02"
  - label: "GitHub Docs: About Copilot cloud agent"
    url: "https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent"
    accessedAt: "2026-11-02"
  - label: "GitHub Docs: About third-party agents"
    url: "https://docs.github.com/en/copilot/concepts/agents/about-third-party-agents"
    accessedAt: "2026-11-02"
  - label: "GitHub Docs: About Copilot code review"
    url: "https://docs.github.com/en/copilot/concepts/code-review/code-review"
    accessedAt: "2026-11-02"
  - label: "GitHub Docs: About GitHub Copilot Fusion"
    url: "https://docs.github.com/en/copilot/concepts/models/copilot-fusion"
    accessedAt: "2026-11-02"
  - label: "GitHub Changelog: Route and orchestrate models with GitHub Copilot Fusion (2026-10-28)"
    url: "https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion/"
    accessedAt: "2026-11-02"
  - label: "GitHub Docs: Hosting of models for GitHub Copilot"
    url: "https://docs.github.com/en/copilot/reference/ai-models/model-hosting"
    accessedAt: "2026-11-02"
  - label: "GitHub Changelog: MAI-Code-1-Flash available on more Copilot surfaces (2026-06-18)"
    url: "https://github.blog/changelog/2026-06-18-mai-code-1-flash-available-on-more-copilot-surfaces/"
    accessedAt: "2026-11-02"
  - label: "GitHub Docs: Managing GitHub Copilot policies as an individual subscriber (training setting)"
    url: "https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies"
    accessedAt: "2026-11-02"
  - label: "GitHub Blog: Updates to GitHub Copilot interaction data usage policy (2026-03-25)"
    url: "https://github.blog/news-insights/company-news/updates-to-github-copilot-interaction-data-usage-policy/"
    accessedAt: "2026-11-02"
  - label: "GitHub Community: FAQ on Copilot data use for model training"
    url: "https://github.com/orgs/community/discussions/188488"
    accessedAt: "2026-11-02"
  - label: "GitHub Blog: GitHub Universe 2026: Evolving every layer of the stack (2026-10-28)"
    url: "https://github.blog/news-insights/company-news/github-universe-2026-evolving-every-layer-of-the-stack/"
    accessedAt: "2026-11-02"
  - label: "GitHub Blog: Octoverse 2026 (2026-10-28)"
    url: "https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/"
    accessedAt: "2026-11-02"
  - label: "GitHub Blog: Introducing Agent HQ (2025-10-28)"
    url: "https://github.blog/news-insights/company-news/welcome-home-agents/"
    accessedAt: "2026-11-02"
  - label: "GitHub Blog: Introducing GitHub Copilot (2021-06-29)"
    url: "https://github.blog/news-insights/product-news/introducing-github-copilot-ai-pair-programmer/"
    accessedAt: "2026-11-02"
  - label: "GitHub Blog: GitHub Copilot is generally available to all developers (2022-06-21)"
    url: "https://github.blog/news-insights/product-news/github-copilot-is-generally-available-to-all-developers/"
    accessedAt: "2026-11-02"
  - label: "GitHub Changelog: Japanese Consumption Tax (JCT) on your GitHub Account (2024-08-01)"
    url: "https://github.blog/changelog/2024-08-01-japanese-consumption-tax-jct-on-your-github-account/"
    accessedAt: "2026-11-02"
  - label: "VS Code Blog: VS Code: Open Source AI Editor (2025-05-19)"
    url: "https://code.visualstudio.com/blogs/2025/05/19/openSourceAIEditor"
    accessedAt: "2026-11-02"
  - label: "GitHub: microsoft/vscode-copilot-chat (archived repository)"
    url: "https://github.com/microsoft/vscode-copilot-chat"
    accessedAt: "2026-11-02"
expires:
  - date: "2026-11-30"
    claim: "The 30% model-cost discount on Copilot Fusion for paid plans (through November 30, 2026). Check what applies after it ends"
  - date: "2026-12-31"
    claim: "The flex allotments of Pro, Pro+ and Max (500, 3,100 and 10,000 credits). They are described as variable, so check the current amounts"
  - date: "2027-03-31"
    claim: "GitHub's migration to a multi-region deployment in Azure (expected to finish early next year). Check whether it has finished"
---

GitHub Copilot is still sometimes described as an "AI pair programmer." Open the price list, though, and a different product appears. The autocomplete tool launched at a flat $10 a month moved to token-based usage billing on June 1, 2026. Completions alone stay outside; chat and agents run on a meter at $0.01 per credit. This piece reads the official price lists and documentation, and the earnings-call records on Microsoft's investor relations site, all accessed on November 2, 2026, to work out what Copilot now sells. We are not reporting on long-term hands-on use; we are comparing public information.

## What the service is

GitHub Copilot began as code completion and now spans the editor, the terminal, a desktop app, GitHub.com and agents in the cloud. GitHub, which runs it, is the company Microsoft announced it would buy in June 2018.

:::fact
According to Microsoft's announcement (June 4, 2018), Microsoft agreed to acquire GitHub for $7.5 billion in Microsoft stock. Copilot's technical preview opened on June 29, 2021, and GitHub's blog said it was powered by "OpenAI Codex, a new AI system created by OpenAI." It became generally available on June 21, 2022 at $10 a month or $100 a year, free for verified students and maintainers of popular open source projects. GitHub said at the time that over 1.2 million developers had joined the preview in the prior 12 months and that, in files where it was enabled, nearly 40% of code was being written by Copilot in popular languages like Python.
:::

:::fact
The current plans are below (official docs, accessed 2026-11-02). All prices are in US dollars, and one credit is $0.01.

| Plan | Price | Monthly GitHub AI Credits | Model range |
| --- | --- | --- | --- |
| Free | Free | An allowance (amount not stated); 2,000 completions a month | Auto selection only |
| Student | Free for verified students | An allowance (amount not stated); unlimited completions | Auto selection only |
| Pro | $10/month (free for some users) | 1,000 base + 500 flex = 1,500 | A selection of models |
| Pro+ | $39/month | 3,900 base + 3,100 flex = 7,000 | Premium models |
| Max | $100/month | 10,000 base + 10,000 flex = 20,000 | Priority access to premium models |
| Business | $19 per granted seat/month | 1,900 per user (pooled across the organization) | Premium models |
| Enterprise | $39 per granted seat/month | 3,900 per user (pooled across the organization) | Priority access to premium models |
| Copilot access | $0 for GitHub Enterprise Cloud license holders; $10 per user/month for Copilot Standalone | No included allowance; usage billed separately | Priority access to premium models |

According to the model table in the docs, Claude Sonnet 5.5, Grok 4.7, Kimi K3 and MAI-Code-1.1-Flash are available from Pro, while Claude Opus 5.5, Claude Fable 5.1, GPT-5.6 Sol and GPT-6.1 Sol start at Pro+. Completions and next edit suggestions do not consume credits and are unlimited on paid plans. Copilot is not currently available for GitHub Enterprise Server.
:::

:::fact
For users in Japan, GitHub's prices are quoted in US dollars as above. According to GitHub's changelog (August 1, 2024), from October 1, 2024 it collects consumption tax from self-serve customers in Japan paying by credit card or PayPal, and invoices show its registration number and the 10% tax amount in both USD and JPY. We have not found a later Copilot-specific notice on this.
:::

:::pull
Completions stay unlimited; only the thinking gets measured in tokens. Copilot's price list redrew the line between the two.
:::

::scorecard

## UX analysis

The UX question for Copilot has moved from how good the screens are to how little users have to think about cost.

- **Completions stayed like running water.** Completions and next edit suggestions sit outside credits and keep working even under a $0 organization budget. The feature developers touch most during the day was taken off the meter. That can also be read as protecting the entry point where the monthly fee is felt.
- **The product is drifting back to not asking you to pick a model.** According to the official Octoverse, 63% of paying developers used auto selection at least once in September 2026, and 61% of those who chose models themselves used more than one. Paying users touched 47 distinct models that month. Having multiplied the choices, GitHub is now trying to replace them with a choice of effort, Standard, High or Max, in Copilot Fusion.
- **The unit of work became the pull request.** The cloud agent can be started by assigning an issue, from the Agents tab, or by a mention on a pull request, and it is corrected through review requests and comments. Nothing new has to be learned; the agent rides on a routine developers already know.
- **Cost remains hard to read.** The price of a request depends on the model and the tokens. Even the code review estimates are wide: $0.05 to $1 for Lite, $0.25 to $5 for the default Balanced, and $1.50 to $25 for Max in public preview, with Actions minutes on top. The docs provide alerts and budgets, but they ask for decisions a flat fee never required.
- **Running out now behaves differently.** The automatic fallback to a cheaper model is gone. Individuals set an extra budget, upgrade for the difference, or wait for the reset on the first of the month. Organization admins can stop usage with per-user budgets.

:::fact
How individual plans' data is treated changed in 2026. According to GitHub's blog (March 25, 2026), from April 24, 2026 interaction data from Free, Pro and Pro+ users is used to train and improve AI models unless they opt out. The current docs add Max and say this can include inputs, outputs, code snippets and associated context. The setting is called "Allow GitHub to use my data for AI model training," and selecting Disabled stops it. Users who had already declined collection keep that choice.

The docs also state that "GitHub does not use Copilot Business or Copilot Enterprise customer data to train AI models." A community FAQ says Copilot Student users and teachers on free Pro are not affected, that GitHub does not train on the contents of paid organizations' repositories, and that accounts that are members or outside collaborators of a paid organization are excluded. The blog says stored content from issues, discussions and private repositories is excluded, but that "Copilot does process code from private repositories when you are actively using Copilot." The data may be shared with GitHub affiliates, including Microsoft, but not with third-party AI model providers.
:::

:::guess
Making training opt-out for individual plans alone looks like a decision that separates the value of the data from the weight of enterprise contracts. Companies are protected by contract; individuals choose in a setting. While GitHub and Microsoft cultivate their own MAI-Code models, real usage data from individuals presumably becomes more valuable. For people who handle work code on a personal account, though, it adds the chore of checking a default. The exclusion for members of paid organizations may not apply to a side-project or personal account.
:::

## Tech stack

::techstack

:::fact
According to the official docs (accessed 2026-11-02), Copilot's cloud agent has two runtimes. The GitHub Actions environment limits changes to one repository, keeps chat data for 28 days, and allows custom compute and self-hosted runners, but its 59-minute limit "cannot be extended or bypassed." Cloud sandboxes handle sessions across several repositories in one organization, can be resumed across clients, and keep chat data for the life of the account, but do not support custom compute or self-hosted runners. In both, one task opens one pull request on one branch at a time, and repositories hosted outside GitHub are out of scope. Since October 28, 2026 the new "Copilot in the cloud" experience has been offered to paid plans.

Other companies' agents run in the same place. Agent HQ was announced on October 28, 2025, and the coding agents from Anthropic (Claude) and OpenAI (Codex) are available in public preview. They need no extra subscription and consume Actions minutes and AI Credits. The docs list them from Pro, which differs from the product's plan comparison page (Pro+ and up). Generated code is scanned with CodeQL, secret scanning and dependency checks, without requiring a GitHub Advanced Security license.
:::

:::fact
Copilot Fusion became generally available on October 28, 2026. The docs call it a runtime model router and orchestrator that picks one of three execution patterns per prompt: Single, where one model finishes the task; Cascade, where an efficient model drafts and a judge accepts it or escalates to a stronger model; and Critique, where several models critique a draft in parallel and the original model revises it. Effort levels are Standard, High and Max; High and Max are not included in Free, Student or Pro. There is no separate Fusion charge; you pay the standard rate for each model used. Paid plans get a 30% discount on model costs through November 30, 2026. The docs warn that discarding a draft does not undo file changes that draft already made.

GitHub's changelog says Fusion Max scored 60 on the Artificial Analysis Coding Agent Index, within two points of Claude Code with Opus 5.5 Max, at about half the average API cost per task and about 40% less time. On the earnings call (October 28, 2026), CEO Nadella said it delivers frontier-level quality "up to 40 percent faster, and at up to 77 percent lower cost." Both are the vendor's own figures, and the changelog page gives no detailed methodology.
:::

:::fact
According to the official model hosting page, GitHub has a zero data retention agreement with OpenAI and a similar one with Anthropic for generally available features, though Claude Fable 5 and 5.1 are not covered by default and some beta or preview features are excluded. GitHub hosts Kimi K3 on Fireworks AI, and prompts and completions are not sent to Moonshot AI.

On the client side, Microsoft announced on May 19, 2025 that it would open source the Copilot Chat extension. The MIT-licensed microsoft/vscode-copilot-chat repository was archived on May 20, 2026, and its README says development moved into the main VS Code repository. The surfaces GitHub's changelog names for MAI-Code-1-Flash include Copilot CLI, the cloud agent, the Copilot app, Copilot Chat on GitHub, Visual Studio, GitHub Mobile, JetBrains IDEs, Eclipse and Xcode.
:::

:::fact
The load has become an infrastructure story too. On the earnings call, CEO Nadella said agent-generated pull requests had grown 6X in six months, that agents now open more than a third of all pull requests on the platform, and that the company is working hard on GitHub's reliability. Octoverse gives a differently defined figure: in September 2026, more than 40% of pull requests started from an agent's first draft, up from 17% in March. These numbers cover all detectable agents, not Copilot alone. According to GitHub's blog (October 28, 2026), it has added 4 million CPU cores, 160 PB of high-speed storage and 50 Tb/s of network capacity this year, and expects its migration to a multi-region deployment in Azure to finish early next year. Decoupling storage from compute is among the stated principles of its new Git architecture.
:::

:::guess
What stands out in Copilot's stack is arguably not the models but the layer placed between them. GitHub lines up several vendors' models in the same credit wallet, routes among them with Fusion, and switches only at cache boundaries. That is a quality measure and, it seems, a cost measure. If a light first-party model drafts in a Cascade and the expensive model is called only when needed, more work fits into the same credits even as users pay less per task. Copilot appears to be betting less on owning one superior model than on owning the wiring that can absorb whichever model arrives next. The design has a weakness, though: Fusion's decisions are hard to see. A response lists the models used, but checking why a task cost what it did will not be easy for users.
:::

## Business model

Copilot's pricing history is a history of changing what counts as one unit. The unit has shrunk from the seat to the request to the token.

:::fact
The official announcements show this sequence.

| When | Billing unit | What happened |
| --- | --- | --- |
| June 2022 | Flat fee | General availability for individuals at $10/month or $100/year |
| April to June 2025 | Premium requests | Pro+ announced (1,500 a month). Monthly allowances enforced from June 18, 2025. Overage only with a spending limit, default $0 |
| July 2025 | One per session | Coding agent fixed at one premium request per session regardless of size |
| April 20, 2026 | Tighter limits | New sign-ups for Pro, Pro+ and Student paused; session and 7-day token limits tightened |
| June 1, 2026 | Tokens (GitHub AI Credits) | All plans moved to usage billing; plan prices unchanged |
| June 17, 2026 | Sign-ups reopen | Student, Pro, Pro+ and Max reopened gradually over a couple of weeks |

In its April 20 post GitHub said that "agentic workflows have fundamentally changed Copilot's compute demands" and that "it's now common for a handful of requests to incur costs that exceed the plan price." The April 27 post said that "a quick chat question and a multi-hour autonomous coding session can cost the user the same amount" and called the premium request model no longer sustainable. Since June, input, output and cached tokens are charged at each model's published API rates, and the fallback to cheaper models has been removed. Copilot code review also consumes Actions minutes.
:::

:::fact
The new pricing is close to prepaid. Base credits equal the plan price and are fixed; a flex allotment sits on top. The May 12 post describes flex as a variable part "designed to adapt as the economics of AI evolve." Base credits are used first, unused credits do not roll over, and the allowance resets at 00:00 UTC on the first of each month. Business and Enterprise list no flex allotment, but their credits are shared across the organization; the docs' example turns 100 Business seats into a pool of 190,000 credits. For June through August, the rollout included promotional amounts of $30 a month for Business and $70 for Enterprise.

Model rates, per million tokens in US dollars, from the official pricing page (accessed 2026-11-02):

| Model | Input | Cached input | Output |
| --- | --- | --- | --- |
| MAI-Code-1.1-Flash | 0.20 | 0.02 | 1.20 |
| Claude Sonnet 5.5 | 2.00 | 0.10 | 10.00 |
| Grok 4.7 (up to 200K) | 2.00 | 0.50 | 6.00 |
| Claude Opus 5.5 | 4.00 | 0.20 | 20.00 |
| Claude Fable 5.1 | 10.00 | 0.25 | 50.00 |

In our own simple calculation, a job of 100,000 input and 10,000 output tokens with no caching costs $0.30, or 30 credits, on Claude Sonnet 5.5. That is 50 such jobs on Pro's 1,500 credits; on MAI-Code-1.1-Flash the same job is $0.032. Long agent runs can involve far more tokens than this example. Cloud sandbox sessions also have three further meters, compute, memory and snapshot storage, counted separately from AI credits.
:::

:::fact
In the earnings-call materials we read for this piece, Microsoft gives no dollar figure for GitHub Copilot revenue. These are the numbers it did give; "users" is not defined.

| Call date | What was said |
| --- | --- |
| 2025-07-30 | 20 million Copilot users; 90% of the Fortune 100 use it |
| 2025-10-29 | Over 26 million users; GitHub home to over 180 million developers |
| 2026-01-28 | Over 4.7 million paid subscribers, up 75% year over year; Pro+ subscribers up 77% quarter over quarter |
| 2026-04-29 | Nearly 140,000 organizations; enterprise subscribers nearly tripled year over year; growing Copilot usage cited as a gross margin headwind |
| 2026-07-29 | 50 million users; GitHub at 225 million users; consumption above expectations after the June change, with margins improving through the quarter; "Copilot revenue accelerated over 60% quarter-over-quarter" |
| 2026-10-28 | Credit consumption from agentic features more than doubled since usage billing began; MAI Code Flash had 3 million users last month |

On the October 2026 call, CFO Hood named "stronger GitHub Copilot adoption and usage" as a reason M365 Commercial cloud results beat expectations, and cited usage-based offerings, "primarily GitHub Copilot," as a contributor to ARPU growth. An analyst's question said moving GitHub from per-seat to consumption had unlocked revenue growth. CEO Nadella replied that coding would move faster because people are used to paying pay-as-you-go.
:::

:::guess
Lined up in order, the remarks suggest Copilot's problem was not weak sales but a structure in which selling more inflated costs. In April 2026, rising Copilot usage was described as weighing on gross margin; in July, margins were said to have improved through the quarter thanks to the June change. A flat seat worked in the completion era, but in the agent era it presumably tended to lose the most on the heaviest users.

After the move, Copilot looks close to a model retailer. Other companies' models pass through at roughly API prices, so GitHub does not appear to earn much on the token trade itself. Margin likely sits elsewhere. One place is the adjustment available between credits that expire unused and a flex allotment GitHub can change. Another is steering work through Fusion toward models whose cost it controls, like the MAI-Code line. A third is the surrounding products that sell more as agents multiply: Actions minutes, sandbox meters, and Advanced Security, whose revenue CEO Nadella said grew over 50% year over year on the October 2026 call.

This is speculation about the overall shape, and Microsoft does not disclose the economics of individual lines. An alternative reading is that, while discounts and flex stay generous, Copilot may be prioritizing market position over margin for now. It is also characteristic of this business that, with agents such as Claude Code and Cursor doing work on GitHub, it chose to host competitors rather than shut them out. As long as it owns the place where the repository lives, pull requests arrive at GitHub whichever agent wins.
:::

In 2022, $10 a month was the price of one feature, completion. In 2026, $10 a month is closer to a wallet holding $15 of tokens. Copilot stays at the developer's fingertips through its unmetered completions, puts the heavy work on a meter, and has invited other companies' models and agents into its own house. What remains open is whether users can read their costs, and whether they will trust Fusion's routing. The bet is no longer on the best model. It is on GitHub itself, the place the work flows into whichever model comes next.
