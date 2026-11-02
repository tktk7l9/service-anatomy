---
service: "Stripe"
title: "The Payment Processor That Started Taking On the Seller's Role — Dissecting Stripe's Price List, Stripe Tax, Managed Payments and 50 Million Lines of Ruby Behind 1.6% of Global GDP"
description: "Stripe processed $1.9 trillion in 2025 (about 1.6% of global GDP) and, still private, returns cash to employees through a tender offer at a $159 billion valuation. Its price list stacks a rate per product: cards are 3.6% in Japan and from 1.5% + 20p in the UK. Stripe Tax starts at 0.5% per transaction, and Managed Payments, its merchant of record, adds 3.5% on top of payment fees. Managed Payments is being built by the team from Lemon Squeezy, which Stripe acquired in 2024. In 2026 Stripe completed its acquisition of Metronome (usage-based billing) and agreed to acquire OpenRouter and Parafin. Underneath run a Ruby monorepo on the order of 50 million lines, the in-house type checker Sorbet, a Go proxy that replaced Envoy, and in-house coding agents that write more than a thousand pull requests a week. The article dissects all of this from the official pricing pages, docs, newsroom, engineering blog, Lemon Squeezy's official blog, and this site's own observations."
lead: "Few people have ever seen Stripe's product on a screen. Developers call an API, and behind it flowed $1.9 trillion in 2025. For a long time Stripe processed payments and handed out the parts for tax calculation and billing. The seller was always the developer, and registering and filing tax was the developer's job. In April 2026 Stripe made Managed Payments, in which Stripe itself becomes the seller, generally available. It was built by the team from Lemon Squeezy, which Stripe acquired in 2024. This article dissects, from both the price list and the codebase, why a company that sells parts started taking on the whole bundle."
category: saas
tags: [payments, fintech, api, ruby, developer-experience, merchant-of-record, sales-tax, ai-agent]
publishedAt: "2026-07-21"
updatedAt: "2026-11-03"
lastVerified: "2026-11-03"
serviceUrl: "https://stripe.com/"
expires:
  - date: "2027-03-31"
    claim: "The announcement (2026-09-30) that the Parafin acquisition is expected to close \"in the coming months\""
vendor: "Stripe, Inc."
origin: "US"
heroTheme: "stripe"
scores: { product: 4.5, ux: 4.5, tech: 5.0, business: 5.0 }
revisions:
  - date: "2026-07-21"
    scores: { product: 4.5, ux: 4.5, tech: 5.0, business: 5.0 }
    note: "Scores at the first dissection. The first version was a short dissection centered on API design, Sorbet, DocDB, Radar and the 2025 annual letter, and did not cover the price list, Stripe Tax, Managed Payments, the Lemon Squeezy acquisition, or the 2026 acquisitions and engineering posts."
techStack:
  - layer: "Primary language & typing"
    name: "Ruby (not Rails) + Sorbet"
    confidence: confirmed
    evidence: "The official engineering blog (2022-03-28) says Stripe type-checks 15 million lines of Ruby in 150,000 files with Sorbet, its in-house type checker written in C++. The 2026-02-09 post \"Minions\" states that \"most of our backend is written in Ruby (not Rails) with Sorbet typing,\" the 2026-04-09 post calls the monorepo \"the order of 50 million lines of Ruby,\" and the 2026-04-28 post refers to a \"25 million line codebase\""
    evidenceUrl: "https://stripe.dev/blog/selective-test-execution-at-stripe-fast-ci-for-a-50m-line-ruby-monorepo"
  - layer: "Developer tooling (formatting & CI)"
    name: "rubyfmt (Rust) + Selective Test Execution (C++ LD_PRELOAD library)"
    confidence: confirmed
    evidence: "The official engineering blog (2026-04-28) describes rolling out rubyfmt, a Rust-based, zero-config autoformatter, across \"the world's largest Ruby codebase\" overnight. The 2026-04-09 post explains that Selective Test Execution, which runs about 5% of roughly 100,000 test files and 1.2 million test units on average, is built on file_access_interceptor, an in-house C++ shared library loaded with LD_PRELOAD"
    evidenceUrl: "https://stripe.dev/blog/formatting-an-entire-25-million-line-codebase-overnight-the-rubyfmt-story"
  - layer: "Database platform"
    name: "DocDB (in-house DBaaS based on MongoDB Community)"
    confidence: confirmed
    evidence: "The official engineering blog (2024-06-06) states that DocDB, an in-house database platform built on MongoDB Community, serves five million queries per second across 2,000+ shards at 99.999% uptime with zero-downtime data migrations. The 2026-07-16 post explains how recovery plans for this MongoDB fleet, with over 40 shard layouts, are computed at runtime by searching a state-machine graph (breadth-first search, later Dijkstra's algorithm)"
    evidenceUrl: "https://stripe.dev/blog/how-stripe-uses-graph-search-and-state-machines-to-auto-remediate-a-global-database-fleet"
  - layer: "Database engine"
    name: "MongoDB"
    confidence: confirmed
    evidence: "The official engineering blog (2024-06) states that DocDB is an extension of MongoDB Community and that Stripe has run self-managed MongoDB clusters in the cloud since 2011, before MongoDB Atlas existed"
    evidenceUrl: "https://stripe.dev/blog/how-stripes-document-databases-supported-99.999-uptime-with-zero-downtime-data-migrations"
  - layer: "Service mesh"
    name: "mesh-proxy (Go, in-house; replaced Envoy)"
    confidence: confirmed
    evidence: "The official engineering blog (2026-08-26) says Stripe replaced Envoy, used for almost 10 years, with mesh-proxy, a Go proxy with its own HTTP/1.1 and HTTP/2 implementations. It saw around half the CPU under high load and roughly 50% lower latency; the public API uptime target is 99.9995%"
    evidenceUrl: "https://stripe.dev/blog/building-a-data-plane-from-scratch-stripes-own-high-performance-distributed-proxy"
  - layer: "Fraud detection ML"
    name: "Stripe Radar (Shield: ResNeXt-based DNN, PyTorch)"
    confidence: confirmed
    evidence: "The official engineering blog describes the move from an XGBoost + DNN ensemble to a DNN-only model in mid-2022. The 2026-10-19 post says Shield, the transaction-fraud model, uses a ResNeXt architecture, that its training set grew from about 800 million to 11 billion transactions, that torch.compile and other changes cut an epoch from 24 hours to 4.8 hours, and that the model grew to about 30 million parameters"
    evidenceUrl: "https://stripe.dev/blog/scaling-radar-fighting-fraud-with-agent-assisted-machine-learning"
  - layer: "Internal coding agents"
    name: "Minions (fork of Block's goose) + Toolshed (internal MCP server)"
    confidence: confirmed
    evidence: "The official engineering blog (2026-02-09) states that Minions, Stripe's in-house coding agents, produce over a thousand merged pull requests a week (human-reviewed), run a fork of Block's coding agent goose on the same developer machines (devboxes) engineers use, and gather context from Toolshed, an internal MCP server hosting more than 400 MCP tools"
    evidenceUrl: "https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents"
  - layer: "Stablecoin infrastructure"
    name: "Tempo (payments blockchain incubated with Paradigm) + Bridge + Privy"
    confidence: confirmed
    evidence: "According to the official newsroom, Stripe completed its acquisition of the stablecoin platform Bridge on February 4, 2025, and the 2025 annual letter announcement (2026-02-24) lists Privy (acquired in July 2025, 110 million+ wallets) and Tempo, a blockchain for payments unveiled in September 2025 and incubated with Paradigm. The Sessions announcement of April 29, 2026 introduced \"streaming payments,\" combining Metronome's tracking with stablecoin micropayments on Tempo"
    evidenceUrl: "https://stripe.com/newsroom/news/sessions-2026"
  - layer: "Storage"
    name: "Amazon S3"
    confidence: likely
    evidence: "This site's HTTP header observations show stripe-images.s3.us-west-1.amazonaws.com in stripe.com's CSP (2026-09-28, re-checked 2026-11-03). This concerns image delivery, not the application itself. The official blog of 2026-10-19 describes streaming Radar's training data from S3"
  - layer: "Marketing site delivery"
    name: "nginx / Contentful"
    confidence: likely
    evidence: "This site's HTTP header observations (server: nginx, x-stripe-proxy-response, Contentful hosts such as assets.ctfassets.net in the CSP; 2026-09-28, re-checked 2026-11-03). docs.stripe.com also returned server: nginx and x-stripe-app-name: docs-app. These observations cover the marketing site and docs"
sources:
  - label: "Stripe Newsroom: 2025 annual letter and tender offer announcement (2026-02-24)"
    url: "https://stripe.com/newsroom/news/stripe-2025-update"
    accessedAt: "2026-11-03"
  - label: "Stripe Newsroom: Stripe Sessions 2026 (288 launches, 2026-04-29)"
    url: "https://stripe.com/newsroom/news/sessions-2026"
    accessedAt: "2026-11-03"
  - label: "Stripe Newsroom: Stripe completes Metronome acquisition (2026-01-14)"
    url: "https://stripe.com/newsroom/news/stripe-completes-metronome-acquisition"
    accessedAt: "2026-11-03"
  - label: "Stripe Newsroom: Stripe agrees to acquire OpenRouter (2026-08-19)"
    url: "https://stripe.com/newsroom/news/stripe-agrees-to-acquire-openrouter"
    accessedAt: "2026-11-03"
  - label: "Stripe Newsroom: Stripe agrees to acquire Parafin (2026-09-30)"
    url: "https://stripe.com/newsroom/news/stripe-agrees-to-acquire-parafin"
    accessedAt: "2026-11-03"
  - label: "Stripe Newsroom: Stripe completes Bridge acquisition (2025-02-04)"
    url: "https://stripe.com/newsroom/news/stripe-completes-bridge-acquisition"
    accessedAt: "2026-11-03"
  - label: "Stripe Newsroom: Agentic Commerce Suite launch (2025-12-11)"
    url: "https://stripe.com/newsroom/news/agentic-commerce-suite"
    accessedAt: "2026-11-03"
  - label: "Stripe: Pricing (Japan)"
    url: "https://stripe.com/jp/pricing"
    accessedAt: "2026-11-03"
  - label: "Stripe: Pricing (United Kingdom)"
    url: "https://stripe.com/gb/pricing"
    accessedAt: "2026-11-03"
  - label: "Stripe: Pricing (Canada)"
    url: "https://stripe.com/en-ca/pricing"
    accessedAt: "2026-11-03"
  - label: "Stripe Docs: Stripe Tax"
    url: "https://docs.stripe.com/tax"
    accessedAt: "2026-11-03"
  - label: "Stripe Docs: Managed Payments"
    url: "https://docs.stripe.com/payments/managed-payments"
    accessedAt: "2026-11-03"
  - label: "Stripe Docs: How Managed Payments works"
    url: "https://docs.stripe.com/payments/managed-payments/how-it-works"
    accessedAt: "2026-11-03"
  - label: "Stripe Docs: Managed Payments tax compliance"
    url: "https://docs.stripe.com/payments/managed-payments/tax-compliance"
    accessedAt: "2026-11-03"
  - label: "Stripe Docs: Managed Payments changelog"
    url: "https://docs.stripe.com/payments/managed-payments/changelog"
    accessedAt: "2026-11-03"
  - label: "Stripe Docs: Versioning (how API releases work)"
    url: "https://docs.stripe.com/api/versioning"
    accessedAt: "2026-11-03"
  - label: "Stripe Docs: Testing (sandboxes and test cards)"
    url: "https://docs.stripe.com/testing"
    accessedAt: "2026-11-03"
  - label: "Lemon Squeezy blog: Stripe acquires Lemon Squeezy (2024-07-26)"
    url: "https://www.lemonsqueezy.com/blog/stripe-acquires-lemon-squeezy"
    accessedAt: "2026-11-03"
  - label: "Lemon Squeezy blog: Stripe + Lemon Squeezy Update: A Big Milestone Reached (2025-04-29)"
    url: "https://www.lemonsqueezy.com/blog/stripe-lemon-squeezy-update-2025"
    accessedAt: "2026-11-03"
  - label: "Lemon Squeezy blog: 2026 Update: Lemon Squeezy + Stripe Managed Payments (2026-01-28)"
    url: "https://www.lemonsqueezy.com/blog/2026-update"
    accessedAt: "2026-11-03"
  - label: "Stripe blog: Sorbet — Stripe's type checker for Ruby (15 million lines, 150,000 files, 2022-03-28)"
    url: "https://stripe.dev/blog/sorbet-stripes-type-checker-for-ruby"
    accessedAt: "2026-11-03"
  - label: "Stripe blog: Selective Test Execution at Stripe: Fast CI for a 50M-line Ruby monorepo (2026-04-09)"
    url: "https://stripe.dev/blog/selective-test-execution-at-stripe-fast-ci-for-a-50m-line-ruby-monorepo"
    accessedAt: "2026-11-03"
  - label: "Stripe blog: Formatting an entire 25 million line codebase overnight: the rubyfmt story (2026-04-28)"
    url: "https://stripe.dev/blog/formatting-an-entire-25-million-line-codebase-overnight-the-rubyfmt-story"
    accessedAt: "2026-11-03"
  - label: "Stripe blog: Minions: Stripe's one-shot, end-to-end coding agents (2026-02-09)"
    url: "https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents"
    accessedAt: "2026-11-03"
  - label: "Stripe blog: DocDB — How Stripe's document databases supported 99.999% uptime with zero-downtime data migrations (2024-06-06)"
    url: "https://stripe.dev/blog/how-stripes-document-databases-supported-99.999-uptime-with-zero-downtime-data-migrations"
    accessedAt: "2026-11-03"
  - label: "Stripe blog: How Stripe uses graph search and state machines to auto-remediate a global database fleet (2026-07-16)"
    url: "https://stripe.dev/blog/how-stripe-uses-graph-search-and-state-machines-to-auto-remediate-a-global-database-fleet"
    accessedAt: "2026-11-03"
  - label: "Stripe blog: Building a data plane from scratch: Stripe's own high-performance distributed proxy (2026-08-26)"
    url: "https://stripe.dev/blog/building-a-data-plane-from-scratch-stripes-own-high-performance-distributed-proxy"
    accessedAt: "2026-11-03"
  - label: "Stripe blog: How we built it — Stripe Radar (the move to a DNN-only model)"
    url: "https://stripe.dev/blog/how-we-built-it-stripe-radar"
    accessedAt: "2026-09-28"
  - label: "Stripe blog: Scaling Radar: Fighting fraud with agent-assisted machine learning (2026-10-19)"
    url: "https://stripe.dev/blog/scaling-radar-fighting-fraud-with-agent-assisted-machine-learning"
    accessedAt: "2026-11-03"
  - label: "Stripe blog: Claimable sandboxes: Frictionless Stripe accounts for agents (2026-10-29)"
    url: "https://stripe.dev/blog/claimable-sandboxes-frictionless-stripe-accounts-for-agents"
    accessedAt: "2026-11-03"
---

Stripe provides the infrastructure for online payments. Brothers Patrick and John Collison, from Ireland, founded it in the US in 2010 with the mission to "increase the GDP of the internet." End users almost never see a Stripe screen; its product is an API running behind the payment buttons of online stores and SaaS apps. In 2026 the scope of that product widened sharply. The company that sells payment parts also became a "seller" that takes on tax, chargebacks and buyer questions, and it has been buying in usage metering, AI model routing and small-business lending.

## Service Overview

:::fact
According to the official newsroom's announcement of the 2025 annual letter (February 24, 2026), businesses on Stripe processed $1.9 trillion in total volume in 2025, up 34% year over year and equivalent to roughly 1.6% of global GDP. In the letter, the two cofounders wrote that Stripe's financial services power more than 5 million businesses directly or via platforms, including all of the top AI companies, 90% of the Dow Jones Industrial Average and 80% of the Nasdaq 100, and that 25% of all new Delaware corporations are created with Stripe Atlas. Stripe shipped more than 350 product updates in 2025 and "remained robustly profitable." The same day it announced a tender offer at a $159 billion (€135 billion) valuation to provide liquidity to current and former employees. Most of the funds come from investors including Thrive Capital, Coatue and a16z, and Stripe also uses a portion of its own capital to repurchase shares.
:::

:::fact
According to the same announcement, more new companies joined Stripe in 2025 than ever before, 57% of them based outside the US. The 2025 cohort grew around 50% faster than the 2024 cohort, and the number of companies reaching $10 million ARR within three months of launch doubled from 2024. Stablecoin payment volume doubled to around $400 billion in 2025, and Bridge, the stablecoin platform whose acquisition Stripe completed on February 4, 2025, saw volume more than quadruple. Stripe acquired the wallet platform Privy (110 million+ wallets) in July 2025, and in September it unveiled Tempo, a blockchain purpose-built for payments and incubated with Paradigm.
:::

:::fact
Almost every official newsroom announcement since January 2026 is framed as "economic infrastructure for AI." On January 14 Stripe completed its acquisition of Metronome, a company that meters and bills usage-based models; CEO Patrick Collison wrote that "metering and billing are in a very direct sense the interface between 'product' and 'business'," noting that Metronome already powers OpenAI, Anthropic and NVIDIA. At its annual Sessions conference on April 29 it announced 288 products and features, including support for Google (AI Mode and the Gemini app) in the Agentic Commerce Suite for selling inside AI apps (launched December 11, 2025 as a low-code way to sell across multiple AI agents with a single integration), Link wallets for agents (Link has more than 250 million users), "streaming payments" that charge per token, an expanded Stripe Treasury business account that holds funds in 15 currencies, and general availability of Stripe Projects, which lets developers or their agents sign up for, buy and integrate outside services in one place. On August 19 it agreed to acquire OpenRouter, an AI model gateway routing across 400+ models from more than 80 providers, and on September 30 it agreed to acquire Parafin, which provides small-business credit products for platforms. The Parafin announcement says more than 18,000 platforms build on Stripe and that new businesses launching on Stripe rose 86% year over year in Q2 2026. The Parafin deal is expected to close "in the coming months."
:::

:::pull
For years Stripe held the line that "the developer is the seller; Stripe supplies the parts." In 2026 it put Managed Payments on the other side of that line.
:::

::scorecard

## UX Analysis

To talk about Stripe's UX is almost to talk about developer experience (DX). With hardly any screens for end users, the company defined its user as the developer and built documentation, test environments and even the way it ships API changes as part of the product. In 2026 that user came to include AI agents writing code on developers' behalf.

- **A place to try things comes first**. According to the testing docs, Stripe provides "sandboxes" isolated from live data, and test card numbers such as 4242 4242 4242 4242 let you try payments from the Dashboard or any payment form. The official engineering blog of October 29, 2026 explains that when an agent can build an integration in minutes, a minute of sign-up becomes noticeable friction, so Stripe built the "claimable sandbox," which lets development platforms such as Vercel, Replit and Lovable provision sandboxes for their users without a sign-up flow, to be claimed into the user's own account later.
- **API changes run on a schedule**. According to the versioning docs, starting with the 2024-09-30.acacia release Stripe ships new API versions monthly with no breaking changes, and bundles breaking changes into two major releases a year (for example, Basil). You can upgrade to any monthly release without changing code. As of November 3, 2026, the current version was 2026-10-28.endive. Requests made with curl or the Stripe CLI use the account's default version unless overridden with the Stripe-Version header.
- **The price list stacks one line per product**. On the Japanese pricing page, card payments at 3.6% are followed by a line per product: 2% for currency conversion, 0.7% for Billing, 0.4% for Invoicing, 0.5% for Tax, 0.25% for Revenue Recognition and 3.5% for Managed Payments. You choose the parts you use, and adding up the total is left to you.
- **An option to give up the seller's name**. According to the Managed Payments docs, in Managed Payments transactions buyers interact with Link at checkout, on receipts and for post-purchase support, purchases show as "Sold through Link," and card statements read "LINK.COM* [your statement descriptor]." Custom domains aren't supported on Managed Payments checkouts. In exchange for handing over tax and support, the first name a buyer sees is no longer your own.

:::guess
Stripe's DX appears to rest on two designs: making the first run fast and not breaking things with change. Sandboxes and test cards remove friction from the first run, and splitting API releases into monthly and twice-yearly tracks reads as a promise not to break existing integrations in payments, where downtime erases revenue. The claimable sandbox presumably responds to the subject of that first run shifting from people to agents. A price list that stacks per product trades the freedom to choose parts for leaving the total estimate to the user, and as seen in [the Paddle vs Stripe comparison](/en/compare/paddle-vs-stripe), rival Paddle sells exactly against this point with a one-line price.
:::

## Tech Stack

::techstack

:::fact
Stripe's core is still a huge Ruby codebase. The official engineering blog of March 2022 said Stripe type-checks 15 million lines of Ruby in 150,000 files with Sorbet, a type checker it wrote in C++ (development began in November 2017; open-sourced in June 2019). The 2026 posts describe a larger scale. The February 9 post says Stripe's code spans "hundreds of millions of lines of code across a few large repositories" and that "most of our backend is written in Ruby (not Rails) with Sorbet typing." The April 9 post calls the monorepo "the order of 50 million lines of Ruby code," with roughly 100,000 test files and about 1.2 million test units run across about 50,000 builds a week. The April 28 post describes rolling out rubyfmt, a Rust-based, zero-config autoformatter, across a "25 million line codebase" overnight. Within the same year, official posts put the Ruby codebase at both 25 million and 50 million lines, and the posts do not say what each count covers.
:::

:::fact
The system that keeps CI fast is called Selective Test Execution (STE internally). According to the official engineering blog of April 9, 2026, STE runs about 5% of the full test suite on average, and at least half of builds run less than 0.5%. Because Ruby keeps escape hatches that static analysis cannot fully model, and tests depend on YAML and JSON config, templates and fixtures, STE is built on file_access_interceptor, an in-house C++ shared library loaded with LD_PRELOAD that records which files a test actually reads. According to the February 9 post, Stripe's in-house coding agents, "Minions," produce more than a thousand merged pull requests a week (human-reviewed, but containing no human-written code). Minions run on the same developer machines engineers use (devboxes, which spin up in 10 seconds); the core agent loop is a fork of Block's coding agent goose; and they gather internal docs, tickets and build status from Toolshed, an internal MCP server hosting more than 400 MCP tools.
:::

:::fact
The database is "DocDB," an in-house DBaaS built on MongoDB Community. According to the official engineering blog of June 2024, Stripe has run self-managed MongoDB clusters in the cloud since 2011, before MongoDB Atlas existed. DocDB serves five million queries per second across more than 2,000 shards at 99.999% uptime and performs zero-downtime data migrations between shards. According to the July 16, 2026 post, this MongoDB fleet, with over 40 shard layouts, finds the steps to repair a broken shard at runtime by searching a state-machine graph whose states are node votes, priorities and the like, first with breadth-first search and later with Dijkstra's algorithm. The approach cut pager volume by 30% (about 200 pages a year) and eliminated 12 days of unhealthy shard states a year.
:::

:::fact
Communication between services was also replaced with an in-house build. According to the official engineering blog of August 26, 2026, Stripe used Envoy as its service-mesh proxy for almost 10 years, but Envoy's worker-per-core threading model concentrated hundreds of thousands of connections on fleetwide infrastructure services, and small behavior changes in upgrades nearly caused incidents, so Stripe built mesh-proxy in Go. mesh-proxy implements HTTP/1.1 and HTTP/2 itself, uses one read and one write goroutine per connection, and multiplexes over one connection per host. After rollout, CPU under high load was around half and latency roughly 50% lower, and finer load balancing across Ruby backends gave 15–20% more headroom before traffic bursts overwhelm machines. The public API reliability target is 99.9995%.
:::

:::fact
Radar, the fraud detection product, moved from an XGBoost + DNN ensemble to a DNN-only model in mid-2022. According to the official engineering blog of October 19, 2026, Shield, the model that scores transaction fraud, uses a ResNeXt architecture. Its training set grew from about 800 million to 11 billion transactions, and streaming data from S3 into memory, PyTorch's torch.compile and lower-precision arithmetic cut an epoch from 24 hours to 4.8 hours. The model grew to about 30 million parameters, three times its previous size, without increasing serving latency. A training change tested with "Agentic MLE," which hands the experiment lifecycle from data preparation to evaluation to AI agents, improved recall by over 8%, which the post estimates as tens of millions of dollars a year in additional fraud prevention for merchants.
:::

:::guess
Stripe's technology choices appear to follow a consistent pattern: start with off-the-shelf tools and take ownership of the internals once scale outgrows their assumptions. It kept Ruby and built its own type checker, formatter and test selection; kept MongoDB and built its own DBaaS and remediation automation; and replaced Envoy after a decade of use. Each was an addition or a swap rather than a rewrite, which suggests a judgment that, in payments where nothing can stop, building the surrounding tools costs less than the risk of migrating a language or a database. What stands out in the 2026 posts is running AI agents on top of those home-built tools. Minions, Agentic MLE and claimable sandboxes are all designed so that agents can use existing development infrastructure (devboxes, CI, the feature platform) as is. Years of investment in internal developer infrastructure presumably now translate directly into a productivity gap in the age of agents.
:::

## Business Model

Stripe's revenue centers on payment processing fees and extends into software for billing (Billing), invoices (Invoicing), tax (Tax), revenue recognition and more. Prices are set on per-country pages, and the same product has different rates and wording by country.

:::fact
This site read the official pricing pages for Japan, the UK and Canada on November 3, 2026. The US pricing page (stripe.com/us/pricing) redirected from this site's location via /ja-us/pricing and /pricing to the Japanese page and could not be read, so US rates are not included. On standard pricing, online card payments are 3.6% per successful charge in Japan (plus 2% if currency conversion is required); in the UK, 1.5% + 20p for standard UK cards, 2.8% + 20p for premium UK cards, 2.5% + 20p for European Economic Area cards and 3.15% + 20p for other international cards (each plus 2% if currency conversion is required); and in Canada, 2.9% + CA$0.30 for domestic cards, plus 0.5% for manually entered cards, 0.8% for international cards and 2% for currency conversion. The Japanese page also lists konbini payments at 3.6% (minimum ¥120), PayPay at 3.98% (9.48% for digital-content businesses), bank transfers at 1.5% and a ¥1,500 dispute fee. Common parts include Billing pay-as-you-go at 0.7% of Billing volume, Invoicing Starter at 0.4% per paid invoice and Revenue Recognition at 0.25% of transaction volume. The Japanese page lists usage-based Metronome as its own line, with a startup plan at $0.04 per 1,000 ingested events plus 0.8% of invoiced amounts.
:::

:::fact
According to the docs, Stripe Tax automates sales tax, VAT and GST calculation, monitors the thresholds at which registration becomes necessary, manages registrations, and handles filing and remittance, and its API can calculate tax even on payments processed outside Stripe. The pricing shape varies by country. On the UK pricing page, Tax Complete, which includes threshold monitoring, registrations, calculations and filings, starts at £70 a month on a one-year contract; Tax Basic, which covers automated tax calculation only, is 0.5% per transaction where you're registered to collect taxes for no-code integrations with Billing, Checkout, Invoicing and Payment Links, or £0.40 per transaction for integrations through Stripe's payment APIs or another processor (including 10 calculation API calls, £0.04 per call above 10). In Canada, Tax Complete starts at CA$120 and API integration is CA$0.50 per transaction. The UK and Canadian pages say tax can be calculated and collected in 100+ countries and registered and filed in 90+ countries. The Japanese pricing page has no Complete/Basic split, listing only the no-code 0.5% and ¥65 per transaction for API integrations (including 10 calculation API calls, ¥6 per call above 10).
:::

:::fact
Managed Payments is the product in which Stripe itself becomes the merchant of record (MoR). According to the docs, for digital products such as SaaS, software and digital content or downloads, it handles sales tax, VAT and GST compliance in more than 80 countries, along with fraud prevention, dispute management and transaction-level customer support. The pricing page says "more than 75 countries" and charges 3.5% per successful transaction in addition to payment fees. It works only with Stripe Checkout and Payment Links, and does not support Connect (platforms and marketplaces), payment flows using embeddable components, or third-party tax integrations. Domestic sales have exceptions: Singapore's B2B domestic transactions and all of Japan's domestic transactions are excluded from Managed Payments' tax compliance. According to the changelog, on September 22, 2025 it added one-time payments and in-app payments and removed the requirement for buyers to have a Link account; on April 22, 2026 it became generally available to businesses in 39 countries; and on June 2 it added cloud-based "AI as a Service" product tax codes.
:::

:::fact
Managed Payments is being built by the team from Lemon Squeezy, which Stripe acquired in 2024. According to Lemon Squeezy's official blog, CEO JR Farr announced on July 26, 2024 that "@stripe has acquired @lmsqueezy," noting that Lemon Squeezy had processed payments on Stripe since its inception and would keep improving its merchant of record offering with Stripe. A post of April 29, 2025 announced as "the first major milestone" Managed Payments, a new merchant of record experience built directly into Stripe and launching that summer in private preview, and explained that the MoR role applies per transaction rather than to the whole account. Existing users were told "no changes or action needed." A post of January 28, 2026 acknowledged that while building Managed Payments, Lemon Squeezy users had seen "slower support responses and less frequent product updates," said Managed Payments supported merchants in 35+ countries, and stated the goal of giving Lemon Squeezy users an easy way to migrate to Managed Payments. The posts this site read do not give a date for Lemon Squeezy itself to shut down.
:::

:::fact
Correction (November 3, 2026). The first version said, citing the 2025 annual letter, that "the revenue and finance automation (RFA) suite beyond payments is expected to reach a $1 billion ARR by the end of 2025." That was inaccurate. The official announcement of February 24, 2026 says Stripe's "Revenue suite," comprising Billing, Invoicing, Tax and more, is on track to hit an annual run rate of $1 billion "this year," that is, in 2026.
:::

:::guess
Stripe's choice to become the seller itself appears aimed at filling the weak spot of a parts price list with a bundle. With standard Stripe, tax registration and filing remain the seller's job, and Stripe Tax stays a tool for calculation and filing. Small teams that dislike that work have chosen MoRs such as Paddle and Lemon Squeezy. Lemon Squeezy already processed its payments on Stripe, so from Stripe's side it bought the "bundling layer" that sat on top of its own platform and rebuilt it as a Stripe product. Managed Payments being selectable per transaction presumably lets existing users hand over only some markets or products, placing Stripe's parts and its bundle side by side in the same account. The exclusion of Japanese domestic transactions means that, for Japanese developers, handling consumption tax on domestic sales themselves remains the premise.
:::

:::guess
The 2026 acquisitions appear to widen the revenue entry point from "payment volume" to "usage." Metronome meters and bills usage such as tokens and calls, OpenRouter decides which model that usage is routed to, and Tempo and Bridge become the payment rails for collecting tiny amounts at the moment of use. Parafin is a part that lets platforms on Stripe offer credit to small businesses. A capital policy of staying private and returning liquidity to employees through tender offers can be read as a way to keep making such acquisitions and long-term product investments without quarterly earnings pressure. Because payment fees track customers' growth directly, remaining the first part developers and agents choose is presumably Stripe's most efficient path to growth.
:::

Infrastructure that moves 1.6% of global GDP without end users seeing it made the API and docs the face of its product, and swapped the internals of Ruby, the database and the proxy without stopping. In 2026 Stripe, still a company that sells parts, lined up Managed Payments to take on the seller's role, Metronome to count usage and OpenRouter to route tokens, and stepped onto the side that hands over the whole bundle. Whether to take the freedom of choosing parts or the ease of delegating the bundle is the user's call. Stripe is trying to put both entry points in the same account.
