---
service: "freee"
title: "How a Tax-Filing App Became \"the SaaS Easiest for AI to Use\" — Why freee Is Betting on 380 APIs and MCP"
description: "freee is Japan's cloud accounting and HR software for sole proprietors and small businesses. We dissect its 690K paying customers and ¥43.6B ARR — from a 14-year-old Rails monolith and a Kubernetes (EKS) platform to its official MCP server, freee-mcp — using its earnings materials and official developer blog, and read the sole-proprietor numbers that swell and shrink with tax season."
lead: "Every March, freee's paying sole-proprietor base jumps, and by June it has dropped by tens of thousands. The business rides a once-a-year deadline: Japan's income tax return. Now the same company calls itself \"the SaaS easiest for AI to use\" and puts 380+ public APIs and an MCP server front and center. We dissect why an accounting app has started aiming to be chosen not by people, but by AI agents."
category: saas
tags: [accounting, small-business, fintech, ruby-on-rails, mcp]
publishedAt: "2026-09-28"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://www.freee.co.jp/"
# Affiliate link placeholder: the owner must join the freee affiliate program via an ASP
# (A8.net or Moshimo Affiliate; see https://www.freee.co.jp/affiliate/) before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<freee-affiliate-tracking-link>"
#   program: "freee Affiliate Program (A8.net)"
vendor: "freee K.K."
origin: "JP"
heroTheme: "freee"
scores: { product: 4.0, ux: 4.0, tech: 4.0, business: 4.0 }
techStack:
  - layer: "Web framework"
    name: "Ruby on Rails"
    confidence: confirmed
    evidence: "Official developer blog (2026-04): freee Accounting is one of Japan's largest Ruby on Rails applications, 14 years after release — a monolith dating back to its first commit in July 2012 that still takes more than 1,000 commits a week"
    evidenceUrl: "https://developers.freee.co.jp/entry/backend-committee-and-ruby-yjit"
  - layer: "Ruby runtime"
    name: "YJIT"
    confidence: confirmed
    evidence: "Same post: enabling Ruby's YJIT compiler on freee Accounting made API responses about 15% faster at the mean and median and about 13% faster at P90–P99, while cutting overall CPU usage by about 20%"
    evidenceUrl: "https://developers.freee.co.jp/entry/backend-committee-and-ruby-yjit"
  - layer: "Static type checking"
    name: "Sorbet / Tapioca"
    confidence: confirmed
    evidence: "Same post: the backend committee is spreading the Sorbet type checker and the Tapioca type-definition generator, with type checks automated in GitHub Actions and at test runtime"
    evidenceUrl: "https://developers.freee.co.jp/entry/backend-committee-and-ruby-yjit"
  - layer: "Container platform"
    name: "Amazon EKS (Kubernetes)"
    confidence: confirmed
    evidence: "Official developer blog (2025-12): freee's standard infrastructure is built on Amazon EKS, and freee Sign, which had run on ECS, moved to EKS in May 2025"
    evidenceUrl: "https://developers.freee.co.jp/entry/freee-sign-eks-migration"
  - layer: "Database"
    name: "Amazon Aurora (MySQL-compatible)"
    confidence: likely
    evidence: "Official developer blog (2024-09): freee HR's payroll logic adopted Local Write Forwarding, available from Aurora 3.04. The post links to the Aurora MySQL documentation, and that feature and version line belong to Aurora MySQL, though the post never names the engine outright"
    evidenceUrl: "https://developers.freee.co.jp/entry/introduce-local-write-forwarding"
  - layer: "Frontend"
    name: "React / TanStack Query"
    confidence: confirmed
    evidence: "Official developer blog (2026-09): freee Sales' new frontend uses React 18 (with React Compiler), React Router v7 and TanStack Query, and coexists screen by screen with the old frontend (React 17, SWR) during the migration"
    evidenceUrl: "https://developers.freee.co.jp/entry/spa_react_upgrade"
  - layer: "AI agent integration"
    name: "freee-mcp (TypeScript, MCP server)"
    confidence: confirmed
    evidence: "The official GitHub repository describes an official MCP server plus Agent Skills that let AI agents operate 12 freee APIs (accounting, HR, invoicing and more) and e-signature; written in TypeScript, Apache-2.0, authenticating via OAuth 2.0 + PKCE, with a public Remote MCP URL"
    evidenceUrl: "https://github.com/freee/freee-mcp"
  - layer: "Internal AI platform"
    name: "LiteLLM on AWS"
    confidence: confirmed
    evidence: "Official developer blog (2025-11): freee published, on AWS Builders Flash, the architecture of a secure AI agent platform built with AWS and LiteLLM. The Builders Flash article describes a proxy platform for company-wide AI agent use, in which an app on EKS routes requests through LiteLLM to Amazon Bedrock and other LLM providers"
    evidenceUrl: "https://developers.freee.co.jp/entry/aws-builders-flash-202511"
  - layer: "Corporate site delivery"
    name: "Akamai + Amazon CloudFront / S3"
    confidence: likely
    evidence: "Our own observation (www.freee.co.jp, 2026-09-28): DNS is a CNAME to Akamai's edgekey.net and an akamai-grn header is returned, alongside x-amz-cf-pop (NRT) and x-amz-server-side-encryption. This suggests Akamai in front, serving S3 content via CloudFront. The product itself (secure.freee.co.jp) may be served differently"
sources:
  - label: "freee K.K.: FY2026.6 earnings presentation (Japanese, 2026-08-13)"
    url: "https://contents.xj-storage.jp/xcontents/AS08692/97bc7144/e317/47ab/926b/998554b4c0e4/20260814105745837s.pdf"
    accessedAt: "2026-09-28"
  - label: "freee K.K.: FY2026.6 consolidated financial results (Japanese, 2026-08-13)"
    url: "https://contents.xj-storage.jp/xcontents/AS08692/44a73483/5ccb/49e7/adc3/93f007680fdc/140120260813519620.pdf"
    accessedAt: "2026-09-28"
  - label: "freee K.K.: Business plan and growth potential (Japanese, 2026-09-28)"
    url: "https://contents.xj-storage.jp/xcontents/AS08692/c3c6f903/1281/41ec/8c69/3683cd07f1ef/140120260928540940.pdf"
    accessedAt: "2026-09-28"
  - label: "freee Developers Hub: The backend committee behind a large Rails app, and adopting Ruby YJIT (2026-04)"
    url: "https://developers.freee.co.jp/entry/backend-committee-and-ruby-yjit"
    accessedAt: "2026-09-28"
  - label: "freee Developers Hub: Strengthening SRE support by moving freee Sign to EKS (2025-12)"
    url: "https://developers.freee.co.jp/entry/freee-sign-eks-migration"
    accessedAt: "2026-09-28"
  - label: "freee Developers Hub: Adopting Local Write Forwarding in freee HR's payroll logic (2024-09)"
    url: "https://developers.freee.co.jp/entry/introduce-local-write-forwarding"
    accessedAt: "2026-09-28"
  - label: "freee Developers Hub: Moving to a new frontend screen by screen while swapping out a whole SPA (freee Sales, Japanese, 2026-09)"
    url: "https://developers.freee.co.jp/entry/spa_react_upgrade"
    accessedAt: "2026-09-28"
  - label: "freee Developers Hub: Published on Builders Flash — the architecture of a secure, flexible AI agent platform built with AWS and LiteLLM (Japanese, 2025-11)"
    url: "https://developers.freee.co.jp/entry/aws-builders-flash-202511"
    accessedAt: "2026-09-28"
  - label: "GitHub: freee/freee-mcp (official MCP server)"
    url: "https://github.com/freee/freee-mcp"
    accessedAt: "2026-09-28"
  - label: "freee official: Pricing for sole proprietors"
    url: "https://www.freee.co.jp/personal-business/accounting/pricing/"
    accessedAt: "2026-09-28"
  - label: "freee official: Affiliate partner program"
    url: "https://www.freee.co.jp/affiliate/"
    accessedAt: "2026-09-28"
---

freee grew up alongside Japan's tax-filing season. In 2026, the same company wrote "a SaaS chosen by AI" into the headings of its investor materials. From a tool where people keep their books on screen, to the "system of record" that AI agents write into on their behalf: the flagship of Japanese cloud accounting is trying to rewrite its own role.

## Service overview

freee offers cloud accounting software for sole proprietors and small businesses, plus HR and payroll, invoicing, sales management, e-signature and more, bundled as one "integrated business management platform." It spread among sole proprietors with a simple promise: pull in bank and credit card transactions automatically, answer a series of questions, and your tax return is done.

:::fact
According to its business plan and growth potential document (2026-09), freee K.K. was founded in 2012 and had 2,327 consolidated employees at the end of June 2026. According to its earnings presentation (2026-08-13), it had 694,586 paying customers at the end of June 2026 (up 14.0% year over year): 419,957 sole proprietors and 274,629 corporations. Platform ARR — recurring revenue on an annualized basis — was ¥43.6B (up 21.8%), and the 12-month average monthly ARR churn rate was 1.0%.
:::

:::fact
According to the official pricing page, freee Accounting for sole proprietors comes in four plans, with all prices excluding tax. Starter costs ¥980/month billed annually (¥11,760/year) or ¥1,780 billed monthly. Standard, which adds consumption tax filing, costs ¥1,980/month billed annually (¥23,760/year) or ¥2,980 billed monthly. Premium (¥39,800/year), which adds phone support and tax audit support, and the bookkeeping-outsourcing plan (¥49,800/year) are annual only.
:::

:::pull
There were 448,155 paying sole proprietors at the end of March and 419,957 at the end of June. The tax-filing deadline has become the company's season.
:::

::scorecard

## UX analysis

freee's UX has been optimized so that someone who doesn't know bookkeeping can reach a filed return without ever thinking about "accounting." In 2026, it added a new front door to that experience — not a human screen, but AI agents.

- **Questions instead of journal entries.** The pricing page describes creating a tax return by answering yes/no questions. Keeping debits and credits out of sight and asking in everyday language lowers the anxiety of first-time filers.
- **Automatic transaction import to cut input.** freee says it pulls transactions from more than 1,000 banks and services. The less typing, the easier it is for people who touch the app once a year to keep going.
- **Treating AI agents as "another user."** The official MCP server, freee-mcp, offers a Remote MCP endpoint that needs no local setup; in Claude, you connect by adding it as a custom connector with a name and URL. Its README even warns users not to enter any URL other than freee's official one — a thoughtful caution against fake endpoints from a company holding accounting data.
- **The plan boundary can be hard to read.** Whether Starter is enough, or Standard is needed for consumption tax filing, depends on tax knowledge: are you a taxable business? A flow that recommends a plan from the user's situation — say, "registered for invoices, so choose Standard" — would reduce the guesswork further.

## Tech stack

::techstack

:::fact
According to the official developer blog (2026-04), freee Accounting's backend is a Ruby on Rails monolith dating back to its first commit in July 2012, and it still takes more than 1,000 commits a week. To keep a domain whose accounting core logic is tightly coupled in good health, freee runs a "backend committee" that is spreading the Sorbet static type checker, among other things. After estimating memory limits and worker counts per Kubernetes pod, it enabled Ruby's YJIT compiler, cutting API response times by about 15% at the mean and median and about 13% for slow requests (P90–P99), and lowering overall CPU usage by about 20%.
:::

:::fact
According to other posts on the same blog, freee's standard infrastructure is Amazon EKS (Kubernetes); freee Sign, its e-signature product, moved from ECS to EKS in May 2025 so that the company's SREs could support it on the same footing (2025-12). On the frontend, freee Sales runs two SPAs side by side in one product — the old one (React 17, SWR) and the new one (React 18 with React Compiler, TanStack Query) — and migrates screen by screen, with the server (Rails) choosing which HTML to return based on the requested URL and a feature flag (2026-09).
:::

:::fact
According to the official GitHub repository, freee-mcp is open source under Apache-2.0, written in TypeScript, and exposes 515 operations across 12 freee APIs — accounting, HR, invoicing, time tracking, sales and more — plus e-signature to AI agents. It works in two layers: the MCP server handles OAuth 2.0 + PKCE authentication and validates requests against OpenAPI schemas, while Agent Skills inject only the API references and operation recipes the AI needs into its context. According to the growth potential document, the cumulative number of businesses that have used freee-mcp grew from about 5,000 in March 2026 to about 18,000 in June, and freee's public APIs number more than 380.
:::

:::guess
Keeping a 14-year-old Rails monolith and laying MCP over it as a thin new layer looks like a rational choice. The logic that keeps the books consistent stays behind the existing APIs, and all the AI gets is validated API calls. Handing over only the references needed via Agent Skills also appears to match the "high token efficiency" the growth document lists as a goal. The design seems to let AI work inside the fence of existing business rules rather than write to the ledger freely.
:::

## Business model

freee's revenue rests on monthly and annual subscriptions, plus fee-based revenue that scales with transactions, such as corporate cards.

:::fact
According to the financial results (2026-08-13), revenue for the fiscal year ended June 2026 was ¥42.44B (up 27.6%), operating income was ¥1.09B (up 78.6%), and adjusted operating income excluding stock compensation and similar items was ¥2.66B (up 41.3%). According to the earnings presentation, of ¥43.6B in ARR, corporations accounted for ¥34.8B and sole proprietors for ¥8.8B, and fee-based transaction ARR grew 65.4% on the expansion of the corporate credit card business. For the fiscal year ending June 2027, freee targets revenue of ¥52.2B (up 23.0% on FY2026 platform-business revenue) and an adjusted operating margin of 11%.
:::

:::fact
The quarterly breakdown in the same presentation shows paying sole proprietors spiking at the end of March (Q3) every year and falling by the end of June. In FY2026 they went from 448,155 at the end of March to 419,957 at the end of June, a drop of about 28,000. The presentation says sole-proprietor subscription ARR accelerated to 13.5% growth thanks to "curbing cancellations after tax filing," and that product improvements and pricing optimization lifted the share of annual contracts among sole proprietors to about 70%. Annual ARR per customer was ¥126,655 for corporations and ¥20,995 for sole proprietors.
:::

:::guess
The average for sole proprietors (about ¥21,000) sits between the annual price of Starter (¥11,760) and Standard (¥23,760), suggesting that most sole proprietors use one of these two plans on annual billing. Raising the share of annual billing is the most direct way to plug the "seasonal hole" of spring cancellations once returns are filed, which is presumably why freee discounts annual billing so heavily versus monthly. Growth, meanwhile, is clearly centered on corporations: sole proprietors read as the brand-awareness entry point, and corporations and their accounting firms as where revenue per customer is earned.
:::

:::fact
According to its official site, freee runs an affiliate program that pays referral fees to partners who introduce it on blogs and elsewhere. It points prospective partners to A8.net and Moshimo Affiliate, and notes that for payroll and My Number management, Moshimo Affiliate is the only supported network.
:::

Sole-proprietor numbers that swell and shrink with tax season, and corporate numbers compounding at over 20% a year: freee carries both while getting ahead of a future where the one keeping the books shifts from people to AI, in the form of APIs and MCP. One more front door, built for AI, on top of 14 years of Rails — that is freee's bet in 2026.
