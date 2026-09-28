---
service: "Railway"
title: "Leaving Google Cloud for Its Own Racks — How Railway, a 35-Person PaaS, Took Back Its Cost of Goods to Carry 3 Million Users"
description: "Railway is a developer cloud where connecting a repository is enough to bring up apps and databases. In 2023 it declared a break with Google Cloud, in 2024 it moved onto its own racks (Railway Metal), and in 2026 it even built its own CDN, Hikari. A dissection — from the official blog, pricing page, incident report, and a founder interview — of how 35 people support 3 million users, per-second usage pricing, and a 15%-for-12-months affiliate program."
lead: "\"Google isn't the place for reliable cloud compute\" — in December 2023 the PaaS Railway wrote that on its own blog and announced it would move to its own servers. A year later its first own site was live and three more regions were being lit up, and in January 2026 it raised $100M. Then in May 2026 an automated action suspended the Google Cloud account it still relied on, and the whole platform went down for about eight hours. This is a dissection of how a company stepping off rented cloud to own its costs — and its fate — is built and makes money."
category: dev-tool
tags: [paas, hosting, bare-metal, rust, indie-dev]
publishedAt: "2026-09-28"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://railway.com/"
# Affiliate link placeholder: the owner must join the Railway affiliate program
# (https://railway.com/affiliate-program — the referral link is issued from the workspace
# "Refer" page in the Railway dashboard; cash payouts via Stripe Connect) before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://railway.com?referralCode=<owner-referral-code>"
#   program: "Railway Affiliate Program"
vendor: "Railway Corporation"
origin: "US"
heroTheme: "railway"
scores: { product: 4.0, ux: 4.5, tech: 4.5, business: 3.5 }
techStack:
  - layer: "Dashboard and API"
    name: "TypeScript / GraphQL"
    confidence: confirmed
    evidence: "The official careers page (Senior Full-Stack Engineer) says the role will \"Build TypeScript + GraphQL APIs\""
    evidenceUrl: "https://railway.com/careers/full-stack"
  - layer: "Infrastructure languages"
    name: "Rust / Go (C for BPF)"
    confidence: confirmed
    evidence: "Founder and CEO Jake Cooper said in a Latent Space interview (published 2026-05-20): \"Internally, we have TypeScript, Rust, and Go. We don't add more languages. Actually, we have a little C because we write BPF code and hooks.\""
    evidenceUrl: "https://www.latent.space/p/railway"
  - layer: "Workflow orchestration"
    name: "Temporal"
    confidence: confirmed
    evidence: "The official careers page describes building features \"from the UI in our dashboard to orchestrating workflows that interact with our microservices using Temporal\""
    evidenceUrl: "https://railway.com/careers/full-stack"
  - layer: "Logging infrastructure"
    name: "ClickHouse"
    confidence: confirmed
    evidence: "The official careers page lists \"Rebuild logging infrastructure to support 1B logs/day, from configuring ClickHouse to developing a brand new observability UI\""
    evidenceUrl: "https://railway.com/careers/full-stack"
  - layer: "Builds (container image generation)"
    name: "Railpack (Go / BuildKit)"
    confidence: confirmed
    evidence: "The public GitHub repository (MIT license, primary language Go) states in its README that Railpack is the successor to Nixpacks and builds images from source using BuildKit. Official docs say Railway uses it to build and deploy with zero configuration"
    evidenceUrl: "https://github.com/railwayapp/railpack"
  - layer: "Compute"
    name: "Railway Metal (owned servers in caged colocation)"
    confidence: confirmed
    evidence: "The official blog (2025-01-17) says the project began in January 2024 and placed Railway's own servers in a private cage inside colocation data centers. The official region list shows four: US West (California), US East (Virginia), EU West (Amsterdam), and Southeast Asia (Singapore)"
    evidenceUrl: "https://blog.railway.com/p/data-center-build-part-one"
  - layer: "Burst and backup cloud"
    name: "AWS / Google Cloud"
    confidence: confirmed
    evidence: "The official incident report (2026-05) describes Railway Metal, AWS burst-cloud environments, and Google Cloud-hosted infrastructure running side by side, and commits to keeping Google Cloud only for secondary/failover use"
    evidenceUrl: "https://blog.railway.com/p/incident-report-may-19-2026-gcp-account-outage"
  - layer: "Edge and CDN"
    name: "Hikari (Rust / WebAssembly on wasmtime)"
    confidence: confirmed
    evidence: "The official blog (2026-06-04) says Railway built its own CDN in Rust in 30 days, runs per-request logic as WebAssembly on wasmtime, and operates 60 points of presence with 180+ nodes. Our own observation (2026-09-28) found railway.com responding with server: railway-hikari and x-railway-edge: hnd1"
    evidenceUrl: "https://blog.railway.com/p/railway-cdn"
  - layer: "Entry point for AI agents"
    name: "Railway MCP Server"
    confidence: confirmed
    evidence: "Official docs say the MCP server lets AI assistants create projects, deploy templates, manage environments, pull variables, and redeploy services"
    evidenceUrl: "https://docs.railway.com/ai/mcp-server"
  - layer: "Public API front"
    name: "Cloudflare"
    confidence: likely
    evidence: "Our own observation (2026-09-28) found the public GraphQL API at backboard.railway.com returning server: cloudflare and a cf-ray header, with IP addresses in Cloudflare's network, while the marketing site and docs were served by Railway's own Hikari. No official statement found"
sources:
  - label: "Railway official blog: Not Everything Is Google’s Fault (Just Most Things) (2023-12-01)"
    url: "https://blog.railway.com/p/gcp-incidents"
    accessedAt: "2026-09-28"
  - label: "Railway official blog: So You Want to Build Your Own Data Center (2025-01-17)"
    url: "https://blog.railway.com/p/data-center-build-part-one"
    accessedAt: "2026-09-28"
  - label: "Railway official blog: Railway raises $100M Series B (2026-01-22)"
    url: "https://blog.railway.com/p/series-b"
    accessedAt: "2026-09-28"
  - label: "SiliconANGLE: Railway gets $100M in a round led by TQ Ventures (2026-01-22)"
    url: "https://siliconangle.com/2026/01/22/intelligent-cloud-infrastructure-startup-railway-gets-100m-simplify-application-deployment/"
    accessedAt: "2026-09-28"
  - label: "Latent Space: Railway: The Agent-Native Cloud — Jake Cooper (2026-05-20)"
    url: "https://www.latent.space/p/railway"
    accessedAt: "2026-09-28"
  - label: "Railway official blog: Incident Report: May 19, 2026 - GCP Account Suspension"
    url: "https://blog.railway.com/p/incident-report-may-19-2026-gcp-account-outage"
    accessedAt: "2026-09-28"
  - label: "Railway official blog: How to build a 30M RPS CDN in 30 days with Rust and WASM (2026-06-04)"
    url: "https://blog.railway.com/p/railway-cdn"
    accessedAt: "2026-09-28"
  - label: "Railway official: Pricing"
    url: "https://railway.com/pricing"
    accessedAt: "2026-09-28"
  - label: "Railway docs: Regions"
    url: "https://docs.railway.com/deployments/regions.md"
    accessedAt: "2026-09-28"
  - label: "Railway docs: Railpack"
    url: "https://docs.railway.com/builds/railpack"
    accessedAt: "2026-09-28"
  - label: "GitHub: railwayapp/railpack (README)"
    url: "https://github.com/railwayapp/railpack"
    accessedAt: "2026-09-28"
  - label: "Railway official: Careers (Senior Full-Stack Engineer)"
    url: "https://railway.com/careers/full-stack"
    accessedAt: "2026-09-28"
  - label: "Railway docs: MCP Server"
    url: "https://docs.railway.com/ai/mcp-server"
    accessedAt: "2026-09-28"
  - label: "Railway docs: Projects (the project canvas)"
    url: "https://docs.railway.com/projects"
    accessedAt: "2026-09-28"
  - label: "Railway docs: Services (deployment sources and service types)"
    url: "https://docs.railway.com/services"
    accessedAt: "2026-09-28"
  - label: "Railway docs: The Basics (per-project private network)"
    url: "https://docs.railway.com/overview/the-basics"
    accessedAt: "2026-09-28"
  - label: "Railway docs: Template Kickbacks"
    url: "https://docs.railway.com/templates/kickbacks"
    accessedAt: "2026-09-28"
  - label: "Railway official: Affiliate Program"
    url: "https://railway.com/affiliate-program"
    accessedAt: "2026-09-28"
  - label: "Railway official blog: Launching Railway's Affiliate Program (2025-06-24)"
    url: "https://blog.railway.com/p/launching-affiliate-program"
    accessedAt: "2026-09-28"
---

A developer cloud where you "just push code and it runs" (a PaaS) is, from the user's side, a business built on not making you think about where the foundation sits. Railway, too, started out on top of Google Cloud. What sets it apart is that it decided midway to rebuild that foundation itself — and then actually assembled racks, ran cables, and even wrote its own CDN.

## What the service is

Railway is a developer cloud that brings up web apps, APIs, message queues, databases, and scheduled jobs from a GitHub repository, a local directory, or a Docker image. According to the official docs, services in the same project are automatically joined to a private network, and services and environments are managed from the project's default view, the "canvas."

:::fact
According to the official blog, Railway raised a $100M Series B on January 22, 2026. According to SiliconANGLE, the round was led by TQ Ventures with FPV Ventures, Redpoint, and Unusual Ventures participating, and the company is led by founder and CEO Jake Cooper. The official blog put users at "2 million, and counting" and customers at "tens of thousands of companies, from small mom and pop shops to Fortune 500s." In a Latent Space interview published on May 20, 2026, Cooper said "We're 35 people right now. It's very small," and, asked whether that team was already supporting three million, replied "We're adding 100,000 users a week right now."
:::

:::fact
In a December 1, 2023 blog post, Railway listed the problems it had run into on Google Cloud: persistent networking trouble that led it to build its own eBPF and IPv6 WireGuard network, an Artifact Registry quota cut unilaterally that led it to build its own registry, and, that very day, multiple machines in its us-west fleet becoming unresponsive. The post said "Google isn't the place for reliable cloud compute" and announced a move to its own bare metal, with all instances to move during 2024. A follow-up on January 17, 2025 said the project began in January 2024, the first servers were powered up about five months later, and after bringing the first site in California online the company was lighting up three more regions.
:::

:::pull
On rented foundations, someone else holds your prices and your outages. Railway's bet is to own the cost of goods of a PaaS itself.
:::

::scorecard

## UX analysis

Railway's UX goes all-in on two ideas: never make you write configuration files, and show the whole system as one picture.

- **It figures out the build from your language.** According to the official docs, builds are handled by Railpack, which detects Node, Python, Go, PHP, Java, Ruby, Deno, Rust, Elixir, and more, and sets up everything from dependency installation to start commands with zero configuration. Whether you can't write a Dockerfile or just don't want to, handing over the repository is enough.
- **The architecture diagram is the control panel.** According to the official docs, a project's default view is the canvas, where you manage services and environments and select a service to open its configuration. You can grasp an app made of several services without drawing a separate diagram.
- **Changing regions is one setting.** According to the official docs, a service can run in one of four regions — US West, US East, Europe, and Southeast Asia — and can be moved at any time without touching domains or private networking.
- **It welcomes AI agents as customers alongside humans.** With the official MCP server, an AI assistant can create projects, deploy templates, pull environment variables, redeploy, and investigate failed deployments. Even the Series B announcement addresses "you, or your agents."

The convenience comes with dependence, though. In the May 2026 outage, the dashboard and API returned 503s and login was unavailable, so users lost even the means to see what was happening. A UX that concentrates everything in one screen is inseparable from how few escape routes remain when that screen goes down.

## Tech stack

::techstack

:::fact
According to the official careers page, the dashboard is backed by TypeScript and GraphQL APIs, and work that spans microservices is orchestrated as workflows with Temporal. The same page lists rebuilding logging infrastructure on ClickHouse to support "1B logs/day." In the Latent Space interview, Cooper said the company limits itself to TypeScript, Rust, and Go internally, with a little C for BPF. Railpack, which handles builds, is MIT-licensed open-source software written in Go; its README says it is the successor to the Rust-based Nixpacks, which ran in production for several years, and it assembles images with BuildKit.
:::

:::fact
According to the January 2025 official blog post, Railway rented private cages inside colocation data centers and bought servers to match the vCPU, RAM, and NVMe it had been using on Google Cloud. Each rack gets two independent power feeds, and installation takes 6 to 14 days from the arrival of materials. Power is paid as a fixed monthly commitment whether it is consumed or not, and the post calls it the largest cost. Reasons given for leaving include egress fees, getting about as much support as a $100 customer despite multi-million-dollar annual spend, restrictions that blocked feature development, and outages whose causes were opaque.
:::

:::fact
According to a June 4, 2026 official blog post, Railway spent 30 days building its own CDN in Rust, called Hikari (Japanese for "light"). Per-request logic runs as WebAssembly guests on wasmtime, and multiple versions can run at once so upgrades happen without dropping connections. It has 60 points of presence and more than 180 nodes, each with a 16-core EPYC, 256GB of memory, 8TB of NVMe, and 100G networking, and it reportedly absorbed a DDoS attack of 30 million requests per second without disruption. The post contrasts automatically purging HTML cache on every deploy with Cloudflare, which does not cache HTML by default.
:::

:::fact
According to the official incident report, API failures began around 22:10 UTC on May 19, 2026, and the cause was that Google Cloud had incorrectly suspended Railway's production account as part of an automated action. The dashboard, API, control plane, databases, and Google Cloud-hosted compute went down. Workloads on Railway Metal and AWS burst-cloud environments kept running, but because the edge proxies populated their routing tables from a Google Cloud-hosted control plane API, once the cache expired they started returning 404s across all regions. The incident was fully resolved at 07:58 UTC on May 20. To prevent a recurrence, Railway committed to removing the hard Google Cloud dependency from its network control plane, extending database shards across AWS and Metal, and keeping Google Cloud only for secondary/failover use.
:::

:::guess
The outage appears to show that the middle of a move off the cloud is the most fragile point. Even with most compute moved onto its own racks, as long as the brain that distributes routing tables stays on one cloud, a single account suspension at that one provider can stop everything. Railway publishing its CDN post the month after the outage and promising to decouple the control plane reads as part of a plan to remove the remaining dependencies one by one. In our observation (2026-09-28), railway.com and the docs were answered by Railway's own Hikari (from the hnd1 point of presence, presumably Tokyo), while the public API at backboard.railway.com sat behind Cloudflare. How much to bring in-house, and where, appears to be still mid-migration.
:::

## Business model

Railway earns revenue two ways: a monthly minimum fee and per-second usage billing for the compute actually consumed.

:::fact
According to the pricing page, after a free trial with a one-time $5 credit for 30 days, there is a Free plan ($1 of usage per month), Hobby ($5 per month including $5 of usage), Pro ($20 per month including $20 of usage), and custom-priced Enterprise. Usage rates are $0.00000772 per vCPU-second (about $20 per vCPU per month), $0.00000386 per GB-second of memory (about $10 per GB per month), about $0.15 per GB per month for volumes, and $0.05 per GB of egress.
:::

:::fact
In the Latent Space interview, Cooper recalled that during the free-tier era the company was losing about half a million dollars a month on maybe $50,000 a month in revenue. He said that, having moved onto its own servers, margins on Metal are around 70%, and the payback period compared with renting in the cloud is about three months.
:::

:::fact
According to the official site, Railway's affiliate program pays 15% of every invoice paid by people who sign up through your referral link, for 12 months from their signup, with no dollar cap. Payouts can be taken in cash (via Stripe Connect in $100–$10,000 increments, monthly) or as Railway credits that don't expire, and referred users receive $20 in credits (about a free month of the Pro tier). According to the official blog, the program launched on June 24, 2025. Separately, template authors receive a 15% kickback of the usage costs their templates generate (25% in total if they also help support users).
:::

:::guess
A PaaS is fundamentally a business of reselling resources rented from a cloud with a markup, so most of its cost of goods is written on someone else's invoice. By replacing that cost with its own racks, Railway appears to be trying to build a structure where even fine-grained per-second pricing leaves a margin. The affiliate program and template kickbacks both pay in proportion to usage, which reads as a mechanism for turning referrers and template authors into drivers of growth. For 35 people to handle 100,000 signups a week, leaning on developers' own content and templates rather than advertising seems the rational choice. But the May 2026 outage showed that the company now carries reliability as well as cost on its own shoulders. Where it draws the line between what it owns and what it leaves to others is likely to shape how it is judged from here.
:::

Behind "just push code and it runs," Railway has taken on the work of a cloud provider one piece at a time — dual power feeds for racks, zero-downtime CDN upgrades, a redundant control plane. Whether a 35-person PaaS that stepped off rented foundations can earn the cost structure and trust to match that weight looks set to be a bellwether for what developer clouds become next.
