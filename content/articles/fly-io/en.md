---
service: "Fly.io"
title: "Dropped the Free Tier, Gave Up on GPUs, Cut Regions to 17, and the Founder Stepped Down as CEO to Bet on \"Computers for Agents\" — Dissecting Nine Years of Fly.io, the Cloud That Runs Firecracker on Its Own Hardware"
description: "Fly.io, the developer cloud built since 2017, takes a Docker image, turns it into a Firecracker microVM, and runs it on its own hardware in 17 regions worldwide. In October 2024 it abolished plans and the free tier in favour of per-second billing alone; in February 2025 it wrote \"We Were Wrong About GPUs\"; in September 2025 it cut its regions in half; and in July 2026, alongside a $25 million Series D, it brought in Docker's former CEO as its new CEO while the founder moved to an advisory role. The company's focus has shifted from machines for people to \"Sprites,\" Linux computers that AI agents can treat as disposable or persistent. Using the official pricing page, docs, blog, press release, GitHub and this site's own observations, the article dissects per-second pricing, the Rust proxy and SQLite gossip synchronization, a public site built on Phoenix, and a business where 8,000 of 37,000 customers are \"agent-native.\""
lead: "In a July 2026 blog post, Fly.io's founder wrote that being named by a streamer as a place to host a new app in 2026, and then as the provider he was least confident in, had hit a raw nerve, right in the middle of the best financial months in the company's history. In the same post he announced that the company had raised more money, was focusing itself on Sprites, and was handing the CEO role to someone else. This article dissects, from public information alone, what a company that removed its free tier, gave up on GPUs and cut its regions chose to drop and what it chose to keep."
category: dev-tool
tags: [paas, hosting, firecracker, rust, elixir, ai-agent, edge, bare-metal]
publishedAt: "2026-10-06"
updatedAt: "2026-10-06"
lastVerified: "2026-10-06"
serviceUrl: "https://fly.io/"
# Affiliate link placeholder: Fly.io has no public affiliate or referral program (checked
# 2026-10-06 on fly.io/pricing, docs.fly.io/about/pricing and the blog; only a Startup
# Program with up to $15,000 in credit exists). Leave this block commented out unless the
# owner finds a program. Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<fly-io-referral-link>"
#   program: "Fly.io"
vendor: "Fly.io, Inc."
origin: "US"
heroTheme: "fly-io"
scores: { product: 4.0, ux: 4.0, tech: 4.5, business: 3.5 }
techStack:
  - layer: "Workload isolation"
    name: "Firecracker microVMs (Intel Cloud Hypervisor for GPU Machines)"
    confidence: confirmed
    evidence: "The official blog (2021-04-08, \"Docker without Docker\") states \"most of our users deliver software to us as Docker containers, we don't use Docker to run them. Docker is great, but we're high-density multitenant, and despite strides, Docker's isolation isn't strong enough for that. So, instead, we transmogrify container images into Firecracker micro-VMs.\" The official security docs say \"Compute jobs at Fly.io are virtualized using Firecracker, the virtualization engine developed at AWS as the engine for Lambda and Fargate.\" The 2025-02-14 blog post explains that GPU Machines alone use Intel's Cloud Hypervisor for PCI passthrough"
    evidenceUrl: "https://docs.fly.io/security/security-at-fly-io"
  - layer: "Hardware"
    name: "Own servers in colocation (Equinix) with NVMe volumes"
    confidence: confirmed
    evidence: "The official security docs state \"We run on our own hardware deployed in secure data centers like Equinix.\" The Volumes docs say \"A Fly Volume is a slice of an NVMe drive on the same physical server as the Machine on which it's mounted\""
    evidenceUrl: "https://docs.fly.io/security/security-at-fly-io"
  - layer: "Edge proxy and Anycast"
    name: "fly-proxy (Rust, Hyper + Rustls) on an Anycast network"
    confidence: confirmed
    evidence: "The official security docs state \"Our software is built in memory-safe programming languages, including Rust (for our Anycast forwarding path) and Golang (for our deployment and control plane).\" The official blog \"Taming A Voracious Rust Proxy\" (2025-02-26) says edges \"exist almost solely to run a Rust program called fly-proxy, the router at the heart of our Anycast network.\" This site's own observation (2026-10-06) found fly.io responding with server: Fly/6d530f8f2 (2026-09-29) and via: 1.1 fly.io, with a fly-request-id ending in nrt (Tokyo)"
    evidenceUrl: "https://docs.fly.io/security/security-at-fly-io"
  - layer: "State synchronization"
    name: "Corrosion (Rust, SQLite + cr-sqlite CRDT + SWIM gossip)"
    confidence: confirmed
    evidence: "The official blog (2025-10-22) states \"Corrosion is a Rust program that propagates a SQLite database with a gossip protocol,\" that the gossip protocol is built on SWIM with \"no locking, no central servers, and no distributed consensus,\" and that it uses \"cr-sqlite, the CRDT SQLite extension.\" GitHub's superfly/corrosion is Rust under Apache-2.0 with 1,860 stars, and v1.0.0 was released on 2026-05-14"
    evidenceUrl: "https://fly.io/blog/corrosion/"
  - layer: "Orchestrator"
    name: "flyd (per-host, bid-based scheduling; replaced HashiCorp Nomad)"
    confidence: confirmed
    evidence: "The official blog (2023-02-01) describes replacing HashiCorp Nomad with the in-house orchestrator flyd: \"flyd operates like a market. Requests to schedule jobs are bids for resources; workers are suppliers\" and \"flyd is the source of truth for all the VMs running on a particular worker\""
    evidenceUrl: "https://fly.io/blog/carving-the-scheduler-out-of-our-orchestrator/"
  - layer: "Private networking"
    name: "WireGuard mesh (6PN, IPv6) + .internal DNS"
    confidence: confirmed
    evidence: "The official Private Networking docs state \"Fly Apps in an organization are connected by a mesh of WireGuard tunnels using IPv6 called a 6PN\" and \"You can connect apps running outside of Fly.io to your 6PN using WireGuard\""
    evidenceUrl: "https://docs.fly.io/networking/private-networking"
  - layer: "CLI and public tools"
    name: "flyctl (Go, Apache-2.0) / LiteFS (Go) / Litestream (Go)"
    confidence: confirmed
    evidence: "GitHub's superfly/flyctl (as of 2026-10-06, via the API) is Go under Apache-2.0 with 1,717 stars, and its latest release is v0.4.112 (2026-10-05). superfly/litefs is Go with 4,885 stars, described as a \"FUSE-based file system for replicating SQLite databases across a cluster of machines.\" The official blog (2025-05-20) compares LiteFS and Litestream and says Litestream is the more popular project"
    evidenceUrl: "https://github.com/superfly/flyctl"
  - layer: "Public site"
    name: "Phoenix (Elixir) / Mintlify (docs) / Discourse (community)"
    confidence: likely
    evidence: "This site's own observation (2026-10-06) found fly.io's HTML containing phx-track-static attributes and a _csrf_token, image paths beginning with /phx/ui/images/, and a _fly session cookie in the signed Plug.Session format (beginning SFMyNTY.). docs.fly.io loads its assets from mintcdn.com, and community.fly.io returns an x-discourse-route header. fly.io serves text/markdown to non-browser clients, and its llms.txt says every page has a .md version"
  - layer: "Managed Postgres"
    name: "Managed Postgres (MPG, PgBouncer; v1 on Fly Kubernetes, v2 beta on Fly Machines)"
    confidence: confirmed
    evidence: "The official Managed Postgres docs list automatic backups, high availability with automatic failover, connection pooling with PgBouncer on every plan, and encryption, and under \"What's not there yet\" list \"Security patches and version upgrades\" and a maximum storage limit of 1 TB. The official community post (2026-05-19) says \"The original Fly Managed Postgres runs on FKS. That caused some stability problems... Managed Postgres v2 is built directly on Fly Machines\""
    evidenceUrl: "https://docs.fly.io/postgres/index.md"
sources:
  - label: "Fly.io: Pricing"
    url: "https://fly.io/pricing/"
    accessedAt: "2026-10-06"
  - label: "Fly.io docs: About Pricing (free tier, region multipliers, reservation discounts)"
    url: "https://docs.fly.io/about/pricing"
    accessedAt: "2026-10-06"
  - label: "Fly.io docs: Free Trial"
    url: "https://docs.fly.io/about/free-trial"
    accessedAt: "2026-10-06"
  - label: "Fly.io docs: Discontinued Plans"
    url: "https://docs.fly.io/about/discontinued-plans"
    accessedAt: "2026-10-06"
  - label: "Fly.io Community: We're making pricing simpler (2024-10-07, plan removal notice)"
    url: "https://community.fly.io/t/were-making-pricing-simpler/22168"
    accessedAt: "2026-10-06"
  - label: "Fly.io: About (building since 2017, team list)"
    url: "https://fly.io/about/"
    accessedAt: "2026-10-06"
  - label: "Fly.io press release: Fly.io Launches Computers for Agents (2026-07-24, Series D, CEO change)"
    url: "https://fly.io/news/fly-io-launches-computers-for-agents/"
    accessedAt: "2026-10-06"
  - label: "Fly.io blog: Kurt, Scott, Money, Sprites (2026-07-24)"
    url: "https://fly.io/blog/kurt-scott-money-sprites/"
    accessedAt: "2026-10-06"
  - label: "Fly.io blog: We Raised A Bunch Of Money (2023-06-27)"
    url: "https://fly.io/blog/we-raised-a-bunch-of-money/"
    accessedAt: "2026-10-06"
  - label: "Fly.io blog: Docker without Docker (2021-04-08)"
    url: "https://fly.io/blog/docker-without-docker/"
    accessedAt: "2026-10-06"
  - label: "Fly.io blog: Carving The Scheduler Out Of Our Orchestrator (2023-02-01)"
    url: "https://fly.io/blog/carving-the-scheduler-out-of-our-orchestrator/"
    accessedAt: "2026-10-06"
  - label: "Fly.io blog: Corrosion (2025-10-22)"
    url: "https://fly.io/blog/corrosion/"
    accessedAt: "2026-10-06"
  - label: "Fly.io blog: Taming A Voracious Rust Proxy (2025-02-26)"
    url: "https://fly.io/blog/taming-rust-proxy/"
    accessedAt: "2026-10-06"
  - label: "Fly.io blog: We Were Wrong About GPUs (2025-02-14)"
    url: "https://fly.io/blog/wrong-about-gpu/"
    accessedAt: "2026-10-06"
  - label: "Fly.io blog: Our Best Customers Are Now Robots (2025-04-08)"
    url: "https://fly.io/blog/fuckin-robots/"
    accessedAt: "2026-10-06"
  - label: "Fly.io blog: The Region Consolidation Project (2025-09-09)"
    url: "https://fly.io/blog/the-region-consolidation-project/"
    accessedAt: "2026-10-06"
  - label: "Fly.io blog: The Design & Implementation of Sprites (2026-01-14)"
    url: "https://fly.io/blog/design-and-implementation/"
    accessedAt: "2026-10-06"
  - label: "Fly.io: Sprites (product page)"
    url: "https://fly.io/sprites/"
    accessedAt: "2026-10-06"
  - label: "Fly.io docs: Regions"
    url: "https://docs.fly.io/reference/regions"
    accessedAt: "2026-10-06"
  - label: "Fly.io docs: Security at Fly.io"
    url: "https://docs.fly.io/security/security-at-fly-io"
    accessedAt: "2026-10-06"
  - label: "Fly.io docs: Private Networking"
    url: "https://docs.fly.io/networking/private-networking"
    accessedAt: "2026-10-06"
  - label: "Fly.io docs: Managed Postgres"
    url: "https://docs.fly.io/postgres/index.md"
    accessedAt: "2026-10-06"
  - label: "Fly.io Community: Managed Postgres v2 is now in beta (2026-05-19)"
    url: "https://community.fly.io/t/managed-postgres-v2-is-now-in-beta/27909"
    accessedAt: "2026-10-06"
  - label: "Fly.io: llms.txt (guidance for AI agents and the .md versions of every page)"
    url: "https://fly.io/llms.txt"
    accessedAt: "2026-10-06"
  - label: "GitHub: superfly/flyctl"
    url: "https://github.com/superfly/flyctl"
    accessedAt: "2026-10-06"
  - label: "GitHub: superfly/corrosion"
    url: "https://github.com/superfly/corrosion"
    accessedAt: "2026-10-06"
---

Fly.io is a developer cloud that takes a Docker image and runs it as a virtual machine on a server somewhere in the world. Where [Railway](/en/articles/railway) left Google Cloud for its own racks, Fly.io has been on its own hardware from the start, building its own parts: Firecracker micro-VMs, a Rust proxy, SQLite synchronized by gossip. In 2026 the company declared that its focus was moving from apps that people deploy to computers that AI agents use.

## Service overview

The official About page says "We've been hammering on this thing since 2017." Its team list shows Scott Johnston as CEO and founder Kurt Mackey as "Advisor." Fly Machines "use Firecracker: the same fast-launching microVMs that back AWS Lambda" and can be started and stopped at sub-second speeds. Users create Machines with the flyctl CLI or a REST API and place them in 17 regions.

:::fact
According to the official press release (San Francisco, July 24, 2026), "Fly.io just closed its strongest quarter in company history, driven almost entirely by agent workloads. More than 37,000 customers build on Fly.io, and more than 8,000 of them are agent-native. Over the past 12 months, revenue from the company's largest agent-native customers has grown nearly 12 times." The same day it announced $25 million in Series D funding co-led by Dell Technologies Capital and Intel Capital, with participation from Andreessen Horowitz, EQT, Geodesic and YC. Scott Johnston joined as CEO and board member; he "previously served as CEO of Docker and held leadership roles at Puppet, Loudcloud, and Netscape." Founder Kurt Mackey "will remain on Fly.io's board and transition to an advisory role." Mackey's blog post of the same day says the company is "in the middle of a run of strong quarters that have included the best financial months in the company's history," and sums up: "we've raised a bunch more money. We're launching a new iteration of Sprites, and focusing the company on them and the problem they solve. And I'm tagging in Scott Johnston as CEO." According to the official blog of June 27, 2023, the company had raised $25 million from A16Z and existing investors including Intel Capital and Dell the previous July, and a further $70 million led by EQT Ventures in 2023.
:::

:::fact
According to the official pricing page and docs (as of 2026-10-06), Fly.io has no monthly plans: "New organizations use Pay As You Go pricing. There's no monthly platform fee; you pay for the resources and services you use." Machines are billed by the second while running. The smallest, shared-cpu-1x with 256 MB, is $2.19 a month in Ashburn ($0.0030 an hour); performance-16x with 32 GB is $528.02 a month; extra RAM is $6 per GB per month; a stopped Machine costs $0.15 per GB of root file system per month. Machine prices vary by region, and the docs' multiplier table gives Tokyo (nrt) as 1.3077. Volumes are $0.15 per provisioned GB per month, egress is $0.02 per GB in North America and Europe and $0.04 in Asia Pacific, and a dedicated IPv4 is $2 a month. On a free tier: "No. New organizations don't have a free tier or a monthly free usage allowance." Instead there is a free trial "which lasts for up to 2 hours of Machine runtime or 7 days, whichever comes first," with no credit card required. Only organizations that bought plans before October 2024 keep the old free allowances (three shared-cpu-1x 256 MB VMs, 3 GB of volumes, and so on). Support is free through the community, with Standard at $29 a month, Premium at $199, Enterprise from $2,500, and a HIPAA package at $99 a month with the BAA pre-signed. Annual reservation blocks give a 40% discount, for example $36 a year for $5 a month of shared Machine credit.
:::

:::pull
Of 37,000 customers, 8,000 are "agent-native." The customers whose revenue grew twelvefold in twelve months are the ones that moved the founder out of the CEO seat and changed the company's focus.
:::

::scorecard

## UX analysis

Fly.io's experience combines the developer-facing simplicity of one config file and one CLI that can deploy anywhere with the low-level feel of renting a real VM. Since 2026 that feel is being rebuilt for AI agents.

- **No plan to pick**. The community announcement of October 7, 2024 says "we're getting rid of plans. Pricing will now be just 'pay for what you use.'... we're not grouping certain things together and calling them 'Launch' or 'Scale' anymore." What you choose is Machine size, region and volume capacity, and that is all that appears on the invoice. The absence of a free tier is a consequence of the same announcement.
- **Stop it and it is cheap; stopped, you still pay a little**. According to the docs, Machines can auto-stop when idle, and a stopped Machine is charged only for its root file system. The cheapest always-on app is $2.19 a month, and the example of a small web app with Managed Postgres comes to $43.67 a month. The savings come from designing for stopping.
- **It looks at your framework and assembles the rest**. According to the docs, fly launch automatically detects Astro, Deno, Django, Elixir, FastAPI, Flask, Go, Laravel, Next.js, Nuxt, Rails, Remix, Rust, SvelteKit and more, and works best for "frameworks on which Fly.io has people specializing full time. Right now that's Elixir/Phoenix, Laravel, Rails, and Django." With a Dockerfile, almost anything can be deployed.
- **Fewer regions**. The official blog (September 9, 2025) deprecated 17 regions including mad, otp, waw, atl, bos, den, mia, sea and hkg, consolidating to 7 in North America, 5 in Europe, 4 in Asia-Pacific (Singapore, Tokyo, Sydney, Mumbai), 1 in South America and 1 in Africa. The docs' region table lists 17 as of October 2026, Tokyo (nrt) among them.
- **A separate product for agents**. According to the official product page, Sprites are "full Linux computers designed for agents, not sandboxes": a Sprite keeps its disk, snapshots in a second, answers on its own URL, sleeps when idle and wakes with everything where it was. Pricing has "No plans and no tiers, and nothing charged per Sprite": $0.0385 per CPU-hour, $0.021875 per GB-hour of memory, hot storage at $0.50 per GB-month while awake and cold storage at $0.02 per GB-month while asleep. New organizations get $30 in trial credit.
- **The site is written for AI too**. The official llms.txt says "Every page on fly.io has a Markdown version at its URL plus .md" and asks AI agents to identify themselves with an AI-Agent header. This site confirmed that sending Accept: text/markdown returns the pricing page as Markdown.

The flip side is that removing the free tier and offering a 7-day trial narrowed the door for individual developers who want to try something out. The single sentence "No. New organizations don't have a free tier" and the fact that only pre-October-2024 customers keep the old allowances mean two generations of pricing coexist within one service.

## Tech stack

::techstack

:::fact
According to the official blog "Docker without Docker" (April 8, 2021), users deliver software as Docker containers but Fly.io does not run Docker: "we're high-density multitenant, and despite strides, Docker's isolation isn't strong enough for that," so container images are transmogrified into Firecracker micro-VMs. According to the official security docs, the platform runs "on our own hardware deployed in secure data centers like Equinix," customer data on databases and volumes is encrypted with Linux LUKS, the software is written in memory-safe languages ("Rust (for our Anycast forwarding path) and Golang (for our deployment and control plane)"), and the company holds a SOC2 Type 2 audit. According to the official blog of February 1, 2023, the company replaced HashiCorp Nomad with its own orchestrator, flyd, designed like a market where "Requests to schedule jobs are bids for resources; workers are suppliers."
:::

:::fact
According to the official blog "Corrosion" (October 22, 2025), at 3:30 PM EST on September 1, 2024, seconds after a new Machine came up with a newly shipped configuration option, "every proxy in our fleet had locked up hard. It was the worst outage we've experienced," during which no end-user requests could reach customer apps. Corrosion, at the center of it, "is a Rust program that propagates a SQLite database with a gossip protocol," built on SWIM with "no locking, no central servers, and no distributed consensus." Every node eventually receives the same set of updates, and cr-sqlite, the CRDT SQLite extension, applies them last-write-wins using logical timestamps. The post also describes an incident where adding a single nullable column to a Corrosion table forced a backfill of every row and "played out as if every Fly Machine on our platform had suddenly changed state simultaneously." GitHub's superfly/corrosion is Rust under Apache-2.0 with 1,860 stars, and v1.0.0 was released on May 14, 2026.
:::

:::fact
According to the official blog "We Were Wrong About GPUs" (February 14, 2025, Kurt Mackey), GPU Machines ran not on Firecracker but on Intel's Cloud Hypervisor for PCI passthrough, and the team "burned months trying (and ultimately failing) to get Nvidia's host drivers working to map virtualized GPUs" into it. The post says "The biggest problem: developers don't want GPUs. They don't even want AI/ML models. They want LLMs," and that the company was "scaling back our GPU ambitions" while keeping existing GPU Machines. According to "The Design & Implementation of Sprites" (January 14, 2026), Sprites are "Linux virtual machines. You get root," created "in just a second or two," and "Sprites all have a 100GB durable root filesystem" because "the root of storage is S3-compatible object storage," with NVMe used "not as the root of storage" but as "a read-through cache for a blob on object storage."
:::

:::fact
This site's own observation (2026-10-06) found fly.io responding with server: Fly/6d530f8f2 (2026-09-29) and via: 1.1 fly.io, with a fly-request-id ending in nrt. The HTML contained phx-track-static attributes and a _csrf_token, image paths began with /phx/ui/images/, and the _fly session cookie was in the signed format beginning SFMyNTY. GitHub's superfly/flyctl is Go under Apache-2.0 with 1,717 stars, and its latest release v0.4.112 is dated October 5, 2026. The official Managed Postgres docs offer automatic backups, failover, PgBouncer on every plan and encryption, while listing "Security patches and version upgrades" under "What's not there yet," and the official community post (May 19, 2026) explains that "The original Fly Managed Postgres runs on FKS. That caused some stability problems," so v2 "is built directly on Fly Machines."
:::

:::guess
Fly.io's stack has more built parts than borrowed ones. Firecracker is borrowed, but the proxy, orchestrator, state synchronization and networking are home-grown, mostly in Rust and Go, and some of it is published under Apache-2.0. That the public site appears to run on Phoenix (Elixir) is consistent with Elixir/Phoenix being the first framework the fly launch docs name as having full-time specialists. That the Corrosion post describes "the worst outage we've experienced" in detail reads as a willingness not to hide the cost of a design without a consensus algorithm. Building Managed Postgres first on its own Kubernetes and then rebuilding it on Machines for stability suggests that a company stacking home-made layers also carries the redesign work for each of those layers.
:::

## Business model

Revenue is usage-based billing by the second and by capacity for Machines, volumes and traffic, plus monthly Managed Postgres plans and monthly support and compliance fees. From 2026, metered Sprites usage is added.

:::fact
According to the official pricing page (as of 2026-10-06), Managed Postgres is Basic (shared-2x, 1 GB) at $38 a month, Starter (shared-2x, 2 GB) at $72, Launch (performance-2x, 8 GB) at $282, Scale (performance-4x, 32 GB) at $962, and Performance (performance-8x, 64 GB) at $1,922, with storage at $0.28 per GB used and a maximum of 1,000 GB per cluster. Every plan includes high availability, automated backups and connection pooling. A startup program offers up to $15,000 in credit. According to the docs, charges for volume snapshots (first 10 GB a month free, then $0.08 per GB-month) started on January 1, 2026, and Fly Kubernetes is $75 a month per cluster and "in closed beta and not recommended for critical production usage."
:::

:::fact
The official blog "Our Best Customers Are Now Robots" (April 8, 2025) wrote: "the users driving the most growth on the platform aren't people at all. They're… robots." The press release of July 24, 2026 cites "More than 37,000 customers... and more than 8,000 of them are agent-native" and revenue from the largest agent-native customers growing "nearly 12 times" in 12 months, naming Firecrawl, Kilocode and Plastic Labs. Kurt Mackey's post of the same day says "Sprites were a skunkworks project. We didn't even host them on the main Fly.io website!... We were in an identity crisis. But the clouds have parted, and Computers for Agents are, going forward, the focus of our company."
:::

:::guess
Removing the free tier, retreating from GPUs, halving the regions and concentrating on Sprites appear to point the same way: shed free usage by individual developers, expensive GPU inventory and the fixed cost of under-used regions, and sell VMs that can be created in a second and put to sleep to agent platforms in bulk. That Sprites pricing is split between awake and asleep and charges nothing per Sprite reads as a design for one platform creating and sleeping thousands of them. The press release's "8,000 agent-native customers" and "12x revenue" are the numbers offered as the basis for that bet.
:::

:::guess
The founder stepping down as CEO in favour of Docker's former CEO appears to shift how the company measures itself, from a product developers love to a business that sells to agent platforms. That Mackey opened his post with being called the provider someone was least confident in, during the best months in the company's history, suggests a pivot made while acknowledging that strong numbers and outside doubt coexist. Nine years of technology built on its own hardware and Rust components remain; the customer changes from people to agents. Whether more of the individual developers who lost the free tier or more of the platforms that consume Sprites in volume remain through that transition will likely decide the next verdict on the business.
:::

A company that took Docker images and ran them on Firecracker, wrote its proxy in Rust, synchronized SQLite by gossip and placed it all on its own servers changed its sign in year nine from a cloud for people to computers for agents. What it dropped was the free tier, the GPUs and 17 regions; what it kept was its home-made parts and the robot customers who want them.
