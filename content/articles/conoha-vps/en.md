---
service: "ConoHa VPS"
title: "Letting Claude Create Servers but Not ChatGPT — Dissecting ConoHa VPS, Which Pairs Hourly Billing From 1.3 Yen With Prepaid Plans Up to 66% Off Until October 29 and Has Opened Five Doors to AI Agents"
description: "ConoHa VPS is a VPS (virtual private server) service that GMO Internet, Inc. offers under its ConoHa brand, which the then GMO Internet (now GMO Internet Group) launched in July 2013 as a new VPS brand. It sells nine plans from 512 MB to 128 GB of memory in two ways, hourly billing from 1.3 yen an hour with a monthly cap and \"Matome-Toku,\" which prepays 1 to 36 months, on an OpenStack platform with free data transfer. A campaign until 16:00 on October 29, 2026 takes Matome-Toku up to 66% below hourly billing (from 293 yen a month), but the price applies only at sign-up, not at renewal. This site counted 13 OS families and 31 app templates plus 38 startup scripts, and since September 25 the seven AI-agent scripts such as Claude Code, Codex CLI, OpenClaw and Hermes Agent ship with a management script for \"Guard,\" a malicious-package blocker. After an open-source MCP server in July 2025, it published a remote MCP server, a Claude connector and a ChatGPT plugin in 2026, but servers cannot be created or resized from ChatGPT. Using the pricing and campaign pages, template lists, MCP and API documentation, release notes, membership terms, affiliate and partner programs, press releases, earnings materials and this site's own observations, the article dissects the two ways of pricing and how permissions are divided among the doors opened to AI agents."
lead: "\"Using the plugin will not change your ConoHa VPS byGMO charges\" — that is how GMO Internet explained, on September 1, 2026, the launch of a plugin for operating its VPS from ChatGPT. The plugin cannot create new servers or resize them, the operations that would incur new charges. The Claude connector launched in August, on the other hand, takes requests in plain Japanese all the way up to creating a server. This article dissects, from public information alone, how much a VPS that has long paired hourly billing with prepaid discounts has handed over to AI agents."
category: dev-tool
tags: [hosting, vps, small-business, api, mcp, ai-agent, security]
publishedAt: "2026-10-13"
updatedAt: "2026-10-13"
lastVerified: "2026-10-13"
serviceUrl: "https://vps.conoha.jp/"
# Affiliate link placeholder: ConoHa VPS runs its affiliate program through two ASPs, A8.net and Moshimo
# Affiliate (https://vps.conoha.jp/affiliate/, checked 2026-10-13): flat rewards per sale, 1GB 1,000 yen,
# 2GB 1,100 / 2,000 yen (1-month / 3-month-or-longer) up to 96GB 40,200 / 53,900 yen. The page calls the
# table an excerpt (full terms on each ASP), says there is no cap per sale (several servers in one sale pay
# for each server) and offers self-back on your own sign-up. Register with A8.net (program s00000000018030)
# or Moshimo Affiliate (promotion 2540) for free, then apply to the ConoHa VPS program from the network's
# dashboard. The owner already has a Moshimo link for ConoHa WING (content/articles/conoha-wing); ConoHa VPS
# needs its own material. Use the ASP's ad code as provided: the link to affiliate.url, the 1x1 impression
# image to affiliate.impressionUrl (rewrite Moshimo's //i.moshimo.com to https://), the text ad verbatim to
# affiliate.label. Never invent the label — ask the owner. Do not mix in the ConoHa partner program
# (https://www.conoha.jp/wing/partner/: 300-15,000 yen plus 15% of every renewal for 1GB+ prepaid plans):
# it cannot be combined with affiliate links. Keep every field identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<a8-or-moshimo-link-for-conoha-vps>"
#   program: "ConoHa VPS Affiliate Program (A8.net / Moshimo Affiliate)"
#   impressionUrl: "https://<impression-pixel-of-that-link>"
#   label: "<verbatim text of the ad material>"
vendor: "GMO Internet, Inc."
origin: "JP"
heroTheme: "conoha-vps"
scores: { product: 4.0, ux: 3.5, tech: 4.0, business: 3.5 }
techStack:
  - layer: "Cloud platform"
    name: "OpenStack (OpenStack-compatible public API, Ver.3.0)"
    confidence: confirmed
    evidence: "The official pricing and specifications page (checked 2026-10-13) states that the cloud platform is OpenStack and that an OpenStack-compatible API is provided free of charge. The documentation page on using the API says the API is implemented with the functions of OpenStack, the cloud platform, and that how to use it is outside ConoHa's support"
    evidenceUrl: "https://vps.conoha.jp/pricing/"
  - layer: "Storage and availability"
    name: "NVMe SSD distributed storage / automatic failover (HA) / SLA 99.99%"
    confidence: confirmed
    evidence: "The official page for businesses (checked 2026-10-13) states a fault-tolerant distributed storage configuration with NVMe SSDs on every drive, a standard HA function that automatically fails over to another host server when a host fails, a DDoS protection system, and an SLA of 99.99% monthly uptime"
    evidenceUrl: "https://vps.conoha.jp/for-corporations/"
  - layer: "Network"
    name: "50 Gbps shared uplink (100 Mbps per server, upgradable to 1 Gbps) / 1 Gbps private network"
    confidence: confirmed
    evidence: "The official pricing and specifications page (checked 2026-10-13) gives the internet connection as 50 Gbps shared (limited to 100 Mbps), a 1 Gbps shared private network, one IPv4 and 17 IPv6 addresses, and unlimited data transfer with no charge. The paid network bandwidth upgrade comes in three steps, 300 Mbps, 500 Mbps and 1 Gbps"
    evidenceUrl: "https://vps.conoha.jp/pricing/"
  - layer: "OS and app templates"
    name: "13 OS families / 31 app templates / 38 startup scripts (user-data)"
    confidence: confirmed
    evidence: "The official OS and application template page (checked 2026-10-13) lists operating systems such as CentOS, Ubuntu, AlmaLinux, FreeBSD and OpenBSD and application templates such as KUSANAGI, LAMP, GitLab and Docker, and says OS installation and application server setup finish as soon as the server is created. The startup script page lists OpenClaw, Claude Code, Dify and others, and the server creation API documentation says user-data can use headers such as `#cloud-config`. The counts are this site's own"
    evidenceUrl: "https://vps.conoha.jp/function/template/"
  - layer: "External API and IaC"
    name: "OpenStack-compatible API (compute.c3j1.conoha.io/v2.1) / Terraform ConoHa VPS Provider"
    confidence: confirmed
    evidence: "The official server creation API documentation (checked 2026-10-13) addresses /v2.1/servers on compute.c3j1.conoha.io and explains that a boot volume must be created first and that user-data can be up to 16 KiB before encoding. The Terraform Provider page calls Terraform ConoHa VPS Provider a free official plugin and answers that servers created through the API are billed hourly and cannot use Matome-Toku"
    evidenceUrl: "https://doc.conoha.jp/reference/api-vps3/api-compute-vps3/compute-create_vm-v3/"
  - layer: "AI agent integration"
    name: "ConoHa VPS MCP Server (remote: api.conoha.jp/vps/mcp, OAuth 2.1 / OSS: Apache-2.0, Node.js 20+)"
    confidence: confirmed
    evidence: "The official documentation (checked 2026-10-13) states that the remote version connects to https://api.conoha.jp/vps/mcp and is authorized with a ConoHa account, so the ConoHa API password and Keystone token never go into a settings file, and that the ChatGPT plugin does not offer creating servers and volumes or resizing servers. The documentation for the OSS version says v0.6.2 is published under the Apache License 2.0, runs on Node.js v20 or later or Docker as a beta, and is outside ConoHa's support"
    evidenceUrl: "https://doc.conoha.jp/reference/mcp-server/remote-mcp/conoha-vps-mcp-server-remote/"
  - layer: "Supply-chain protection"
    name: "Takumi Guard (GMO Flatt Security, bundled with 7 AI-agent startup scripts)"
    confidence: confirmed
    evidence: "The official documentation (checked 2026-10-13) states that Takumi Guard is the \"Guard\" function of GMO Flatt Security's \"Takumi byGMO,\" a proxy placed in front of package registries that refuses requests for malicious packages on its blocklist, that a management script (/root/takumi-guard.sh) is bundled with seven startup scripts including Claude Code, Codex CLI and OpenClaw, and that it is off by default"
    evidenceUrl: "https://doc.conoha.jp/products/vps-v3/startupscripts-v3/takumi-guard/"
  - layer: "GPU"
    name: "NVIDIA L4 Tensor Core GPU (24 GB; H100 ended March 2026)"
    confidence: confirmed
    evidence: "The official GPU server page (checked 2026-10-13) lists a configuration with one NVIDIA L4 (24 GB of GPU memory) at 154.0 yen an hour (90,200 yen a month) with 20 vCPUs and 128 GB of memory, or 60.5 yen an hour (36,300 yen a month) with 4 vCPUs and 16 GB, on Ubuntu 22.04 LTS with Automatic1111, InvokeAI and NVIDIA Container Toolkit as application templates. A notice at the top of the page links to the end of the \"NVIDIA H100 Tensor Core GPU,\" and the release notes say new provisioning ended on March 31, 2026"
    evidenceUrl: "https://vps.conoha.jp/gpu/"
  - layer: "Own websites and control panel"
    name: "Cloudflare (vps.conoha.jp, doc.conoha.jp, api.conoha.jp) / ASP.NET session cookies (manage.conoha.jp) / nginx (compute API)"
    confidence: likely
    evidence: "This site's own observation (2026-10-13) found vps.conoha.jp, doc.conoha.jp and api.conoha.jp returning server: cloudflare and a cf-ray ending in NRT over HTTP/2, with a PHPSESSID cookie on vps.conoha.jp. The control panel at manage.conoha.jp returned a 302 to the login page along with ASP.NET_SessionId and .ASPXAUTH cookies, and the API host compute.c3j1.conoha.io returned server: nginx over HTTP/1.1, so the control panel appears to run on ASP.NET and the API entry point on nginx"
sources:
  - label: "ConoHa VPS official: Home page (FAQ and benchmark notes)"
    url: "https://vps.conoha.jp/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS official: Pricing and specifications (hourly billing, Matome-Toku, options)"
    url: "https://vps.conoha.jp/pricing/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS official: Happy Halloween campaign (until 16:00 on October 29, 2026)"
    url: "https://vps.conoha.jp/campaign/special/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS official: Feature list"
    url: "https://vps.conoha.jp/function/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS official: OS and application templates"
    url: "https://vps.conoha.jp/function/template/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS official: Startup scripts"
    url: "https://vps.conoha.jp/function/startupscript/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS official: MCP server (remote version)"
    url: "https://vps.conoha.jp/function/remote-mcp/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS official: Terraform Provider"
    url: "https://vps.conoha.jp/terraform_provider/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS official: GPU server"
    url: "https://vps.conoha.jp/gpu/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS official: For businesses (NVMe, distributed storage, HA)"
    url: "https://vps.conoha.jp/for-corporations/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS official: FAQ (cancellation and plan changes)"
    url: "https://vps.conoha.jp/faq/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS official: How to sign up (steps and payment methods)"
    url: "https://vps.conoha.jp/flow/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS official: Affiliate program (A8.net and Moshimo Affiliate)"
    url: "https://vps.conoha.jp/affiliate/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS official: llms.txt"
    url: "https://vps.conoha.jp/llms.txt"
    accessedAt: "2026-10-13"
  - label: "ConoHa Docs: Release notes"
    url: "https://doc.conoha.jp/release-notes/"
    accessedAt: "2026-10-13"
  - label: "ConoHa Docs: ConoHa VPS MCP Server, remote version"
    url: "https://doc.conoha.jp/reference/mcp-server/remote-mcp/conoha-vps-mcp-server-remote/"
    accessedAt: "2026-10-13"
  - label: "ConoHa Docs: ConoHa VPS MCP Server, OSS version (local)"
    url: "https://doc.conoha.jp/reference/mcp-server/local-mcp/conoha-vps-mcp-server-local/"
    accessedAt: "2026-10-13"
  - label: "ConoHa Docs: Using the API (public API Ver.3.0)"
    url: "https://doc.conoha.jp/reference/api-vps3/api-guideline-vps3/api-guideline-v3/"
    accessedAt: "2026-10-13"
  - label: "ConoHa Docs: Create server (Compute API)"
    url: "https://doc.conoha.jp/reference/api-vps3/api-compute-vps3/compute-create_vm-v3/"
    accessedAt: "2026-10-13"
  - label: "ConoHa Docs: Takumi Guard (bundled tool)"
    url: "https://doc.conoha.jp/products/vps-v3/startupscripts-v3/takumi-guard/"
    accessedAt: "2026-10-13"
  - label: "ConoHa official: Membership terms (automatic renewal, backups, supplementary provisions)"
    url: "https://www.conoha.jp/agreement/"
    accessedAt: "2026-10-13"
  - label: "ConoHa official: Company information (GMO Internet, Inc.)"
    url: "https://www.conoha.jp/company/"
    accessedAt: "2026-10-13"
  - label: "GMO Internet, Inc.: Corporate Profile (English)"
    url: "https://internet.gmo/en/company/outline/"
    accessedAt: "2026-10-13"
  - label: "ConoHa official: Partner program (agency system)"
    url: "https://www.conoha.jp/wing/partner/"
    accessedAt: "2026-10-13"
  - label: "GMO Internet, Inc.: History of the former companies (before the reorganization of January 1, 2025)"
    url: "https://internet.gmo/company/history/archive/"
    accessedAt: "2026-10-13"
  - label: "GMO Internet, Inc.: ConoHa VPS byGMO becomes the first domestic cloud provider to offer an Anthropic Claude connector (2026-08-12)"
    url: "https://internet.gmo/news/article/218/"
    accessedAt: "2026-10-13"
  - label: "GMO Internet, Inc.: [First in Japan] ConoHa VPS byGMO launches a ChatGPT plugin (2026-09-01)"
    url: "https://internet.gmo/news/article/224/"
    accessedAt: "2026-10-13"
  - label: "GMO Internet, Inc.: ConoHa VPS byGMO bundles, free of charge, a function that keeps malicious program components out of AI agent development environments (2026-10-01)"
    url: "https://internet.gmo/news/article/236/"
    accessedAt: "2026-10-13"
  - label: "GMO Internet, Inc.: FY2026 Q2 earnings presentation (2026-08-14)"
    url: "https://internet.gmo/pdf/presen/gmointernet_fy2026q2_j_presentation.pdf"
    accessedAt: "2026-10-13"
  - label: "GMO Internet, Inc.: FY2026 Q2 earnings call transcript"
    url: "https://internet.gmo/pdf/presen/gmointernet_fy2026q2_j_script.pdf"
    accessedAt: "2026-10-13"
---

ConoHa VPS is a Japanese service that rents out virtual private servers (VPS), on which users install whatever OS and software they like, either billed hourly or paid in advance for 1 to 36 months. It is run by GMO Internet, Inc., which also runs [ConoHa WING](/en/articles/conoha-wing) and [Onamae.com](/en/articles/onamae), both dissected on this site. In October 2026 the home page carries the line "ConoHa VPS, making self-hosting easier," and puts forward its use as a place to keep AI agents running around the clock. In the same year, doors for operating the VPS itself from Claude and ChatGPT opened one after another. This site has also dissected [XServer VPS](/en/articles/xserver-vps), [Sakura Rental Server](/en/articles/sakura-rental-server) and [DigitalOcean](/en/articles/digitalocean), which can be read alongside this article when choosing where to host.

## Service overview

At the core of ConoHa VPS are nine plans from 512 MB to 128 GB of memory. The lineup also includes Windows Server, a GPU server with an NVIDIA L4, object storage, a DB server, a mail server and KUSANAGI, a WordPress runtime, and for businesses there is a Managed Pack, an operations service run in cooperation with Beyond. For multiplayer game servers, a separate brand, ConoHa for GAME, is available.

:::fact
According to GMO Internet's "History of the former companies" (the histories of each company before the reorganization of January 1, 2025, checked 2026-10-13), the internet infrastructure business section records that in July 2013 "GMO Internet, Inc. (now GMO Internet Group, Inc.)" launched "ConoHa byGMO" as a new VPS brand. The supplementary provisions of the ConoHa membership terms give July 4, 2013 as the date the terms took effect. According to the company information page on the ConoHa site, the operator today is GMO Internet, Inc., established on September 8, 1999, listed under securities code 4784 (TSE Prime), with capital of 10,691.6 million yen; per the English corporate profile its President and CEO is Tadashi Ito, and its consolidated headcount at the end of June 2026 was 2,405, with GMO Internet Group, Inc. among its principal shareholders. The home page advertises "overwhelming performance with high-performance CPUs" and notes the basis as the company's own research as of May 2025 (a CPU performance test with UnixBench, comparing every company on the same spec of "2 GB of memory / 3 CPU cores," with ConoHa VPS tested on Ver 3.0), and the alt text of the comparison chart reads "the highest score among three major VPS providers." The feature list puts the time it takes to build a server at "just 25 seconds" and gives phone and chat support hours as 10:00 to 18:00 on weekdays.
:::

:::fact
According to the pricing and specifications page (checked 2026-10-13, tax included), the nine plans are 512 MB of memory (1 vCPU core, 30 GB SSD), 1 GB (2 cores), 2 GB (3 cores), 4 GB (4 cores), 12 GB (6 cores), 24 GB (8 cores), 48 GB (12 cores), 96 GB (24 cores) and 128 GB (40 cores); every plan from 1 GB up has a 100 GB SSD, and there is no setup fee. Hourly billing costs 1.3 yen an hour (512 MB), 1.9, 3.7, 6.6, 13.2, 24.2, 48.4, 96.8 and 129.8 yen (128 GB), and even a full month of use is never billed above 751, 1,065, 2,033, 3,608, 7,348, 14,300, 28,600, 53,900 and 72,600 yen a month. Matome-Toku is paid in advance as a lump sum for terms of 1, 3, 6, 12, 24 or 36 months, with no monthly installments and no mid-term cancellation. On a 36-month contract the monthly price at renewal is 326 yen (512 MB), 542, 903, 1,691, 3,192, 7,191, 18,491, 37,991 and 50,654 yen (128 GB), while the first term during the campaign that runs until 16:00 on October 29, 2026 costs 293, 466, 677, 1,285, 2,553, 5,249, 13,313, 27,353 and 50,654 yen. Among the options, automatic backup starts at 363 yen a month for 100 GB, image saving is free up to 50 GB, object storage costs 545 yen a month per 100 GB, a load balancer 1,210 yen a month and an extra IP address 424 yen a month. The Managed Pack's reference prices start at 43,780 yen a month (tax included) for operations, maintenance and monitoring and at 132,000 yen a month (tax included) for design and build. The GPU server page lists a configuration with one NVIDIA L4 (24 GB of GPU memory) at 154.0 yen an hour (90,200 yen a month) with 20 vCPUs and 128 GB of memory, or 60.5 yen an hour (36,300 yen a month) with 4 vCPUs and 16 GB, and notes that use may require screening. According to the sign-up page, payment is by credit card or by the prepaid ConoHa Charge, which can be topped up with Amazon Pay, bank transfer, PayPal, convenience store payment or Pay-easy.
:::

:::pull
Connected to the same remote MCP server, Claude can create servers and ChatGPT cannot. ConoHa VPS divides what it hands to AI agents door by door.
:::

::scorecard

## UX analysis

The ConoHa VPS experience is built on a clear division: it shortens the path to a running server and leaves operating it, and managing the contract, to the user. In 2026, doors through which part of that operation can be handed to AI agents were added.

- **Up in 25 seconds, with apps arriving through templates and scripts.** The feature list puts the time to build a server at "just 25 seconds." The OS and application template list (checked 2026-10-13) shows, by this site's count, 13 OS families in 48 versions and 31 application templates, and templates such as KUSANAGI for WordPress, LAMP, GitLab, Docker and Ubuntu Desktop for FX, for automated MT4 trading, finish building as soon as the server is created. The startup script list has 38 entries by this site's count, and besides AI tools such as OpenClaw, Hermes Agent, Claude Code, Codex CLI, Antigravity CLI, Dify and n8n, it installs Mastodon, Misskey, a Bluesky PDS and Pterodactyl, a game server management panel. The home page FAQ cautions that when building with a startup script, initial settings and connection work on the tool's side follow the script's run. Signing up takes a verification code sent to an email address plus phone or SMS verification.
- **Stopping the server does not stop the meter.** Hourly billing runs by the hour and a full month is never billed above the monthly fee. Counting at the unit prices on the price list, every plan reaches the cap after roughly 547 to 591 hours in a month (about 23 to 25 days) (this site's calculation). The sign-up page says the fee does not change when a server is stopped (shut down) and that fees accrue per contract whether the server is running or stopped. According to the FAQ, an hourly VPS can be deleted (cancelled) at any time with no minimum term, but the data on a deleted VPS is erased completely and cannot be recovered.
- **Deleting the VPS does not end Matome-Toku.** The FAQ explains that with Matome-Toku or VPS Waribiki Kippu (discount ticket), deleting the VPS alone does not cancel the contract, that automatic renewal must be switched off separately, and that renewal is processed seven days before the contract expires. Article 16 of the membership terms likewise sets the renewal date for ConoHa VPS's VPS Waribiki Kippu and Matome-Toku at seven days before expiry, renews the contract automatically for the original term unless the member says otherwise, and rules out cancellation during the term. The price list notes that without renewal the server is deleted at the end of the term, and according to the home page FAQ there is no refund for cancelling mid-term but no cancellation fee (penalty) either. Campaign prices apply only at sign-up; for the 2 GB plan on a 36-month contract, for example, the first-term price of 677 yen a month is shown next to the renewal price of 903 yen.
- **What AI can be asked to do changes with the door.** According to the remote MCP documentation, Claude Code and Codex CLI register it with two commands and work once the user authorizes with a ConoHa account, while for Claude and ChatGPT the documentation recommends adding it from each one's directory. For the ChatGPT plugin, though, it says that "creating new servers and volumes and resizing servers (plan changes) are not provided." The same documentation says deletion, stopping, resizing and security group changes affect the live environment and, depending on the content, cannot be undone, and recommends telling the AI agent to check resource IDs as well as names when it proposes something other than what was intended. The remote MCP server and the Terraform Provider support only VPS on the Ver.3.0 platform.
- **Backups and updates are up to you.** Article 31 of the membership terms says the company has no obligation to back up data and that members do so at their own cost and responsibility. According to the home page FAQ, there are three ways to protect data: paid automatic backups that keep up to 30 daily generations (not available on the 512 MB plan), image saving free up to 50 GB, and free snapshots that are deleted automatically 24 hours after they are taken. The same FAQ says ongoing operations such as security settings, SSL certificate management and OS and middleware updates are basically the user's job, and points businesses that want to outsource operations to the Managed Pack.
- **Read the lists against the release notes.** According to the release notes, on September 25, 2026 the Gemini CLI startup script stopped being offered to new users and its successor, Antigravity CLI, was added, and on September 16 the NetBSD 11.0 OS template became available. The Redmine application template stopped being offered to new users on November 26, 2025, and a startup script of the same name began on October 23, 2025. As of October 13, 2026, the /llms.txt that each page's HTML points to with `rel="llms-txt"` listed Gemini CLI as one of the startup scripts, the OS and application template list showed the NetBSD version as 9.3, and the template field on the pricing page listed Redmine. The campaign discount also reads "up to 66% off" on the campaign page and "up to 65% off" on the banner above the price list. What can be chosen right now is best confirmed in the dated release notes.

## Tech stack

::techstack

:::fact
According to the pricing and specifications page (checked 2026-10-13), the cloud platform is OpenStack, the network is a 50 Gbps shared internet connection (limited to 100 Mbps) and a 1 Gbps shared private network, the global IP addresses are one IPv4 and 17 IPv6 addresses, data transfer is unlimited with no charge, and an OpenStack-compatible API is provided free of charge. The 100 Mbps bandwidth can be widened with the paid network bandwidth upgrade to 300 Mbps (4,950 yen a month), 500 Mbps (7,920 yen a month) or 1 Gbps (15,180 yen a month), and according to the release notes 500 Mbps and 1 Gbps were added on October 6, 2026. The page for businesses lists a fault-tolerant distributed storage configuration with NVMe SSDs on every drive, a standard HA function that fails over automatically to another host server when a host fails, and a DDoS protection system, and the home page FAQ says an SLA guaranteeing at least 99.99% monthly uptime applies to every plan. The documentation page on using the API says the API is implemented with the functions of OpenStack, the cloud platform, notes that how to use it is outside ConoHa's support, and warns that with mistakes or flaws in automation settings or design, "the API may be executed repeatedly, leading to unintended use of services." The server creation API example addresses `/v2.1/servers` on `compute.c3j1.conoha.io`, a boot volume must be created first, and startup scripts can be passed as user-data of up to 16 KiB before encoding with headers such as `#!` and `#cloud-config`. Windows Server that requires Remote Desktop SALs cannot be created through the API. According to the Terraform Provider page, Terraform ConoHa VPS Provider is a free official plugin (the first beta came out on March 5, 2026, according to the release notes), and servers created through the API are billed hourly and cannot use Matome-Toku. In this site's own observation (2026-10-13), the root of `compute.c3j1.conoha.io` returned an HTTP/1.1 300 Multiple Choices with server: nginx and listed v2.1 in JSON (status: CURRENT, version: 2.87, min_version: 2.1).
:::

:::fact
According to the release notes, the first beta of ConoHa VPS MCP (v0.1.0) came out on July 23, 2025, and the OSS (local) version reached v0.6.2 on September 24, 2026. According to the documentation for the OSS version, this MCP server is published under the Apache License 2.0, runs on the user's PC with Node.js v20 or later or Docker, needs the API user's tenant ID, user ID and password, and is a beta outside ConoHa's support. The remote version, launched on July 7, 2026, has every client connect to `https://api.conoha.jp/vps/mcp` and authorize with a ConoHa account, so the ConoHa API password, Keystone token and tenant ID never go into the AI agent's settings. It covers listing, creating, deleting, starting, stopping, force-stopping, rebooting and resizing servers and issuing remote console URLs, as well as volumes, SSH key pairs, security groups and more, while object storage is handled by a separate remote MCP server (`https://api.conoha.jp/vps/swift-mcp`) launched on August 7, 2026. When it is added from Claude's connector directory, a dedicated endpoint, `https://api.conoha.jp/vps/claude`, is used internally. According to the Takumi Guard documentation and the release notes, from September 25, 2026 seven startup scripts, Claude Code, Codex CLI, OpenCode, Antigravity CLI, OpenClaw, Hermes Agent and NanoClaw, ship with a management script (`/root/takumi-guard.sh`) that configures the "Guard" function of GMO Flatt Security's "Takumi byGMO." Guard works as a proxy placed in front of package registries, refuses requests for malicious packages on its blocklist, and rewrites the configuration files for npm, pip and uv, RubyGems, Go modules and Composer. It is off by default; `enable` turns on an anonymous mode with no email registration, and `register` plus `login` switch to an email-authenticated mode, both free. In this site's own observation (2026-10-13), vps.conoha.jp, doc.conoha.jp and api.conoha.jp returned server: cloudflare and a cf-ray ending in NRT over HTTP/2, and vps.conoha.jp set a PHPSESSID cookie and HSTS (max-age=31536000). An unauthenticated GET to `https://api.conoha.jp/vps/mcp` returned 401 with a WWW-Authenticate header carrying resource_metadata and `scope="vps:read vps:write"`, and the authorization server named in that metadata, `https://cp.conoha.jp/auth`, published authorization code and refresh token grants, PKCE with S256, a dynamic client registration endpoint and `client_id_metadata_document_supported: true`. The control panel at manage.conoha.jp returned a 302 to `https://www.conoha.jp/login/` along with ASP.NET_SessionId and .ASPXAUTH cookies, and the login page it redirects to answered this site's script with 403 and cf-mitigated: challenge. The robots.txt of vps.conoha.jp explicitly allows OAI-SearchBot, ChatGPT-User, Applebot-Extended, PerplexityBot and ClaudeBot by name, and /llms.txt was served with x-robots-tag: noindex.
:::

:::guess
The website, the documentation and the remote MCP server sit behind Cloudflare, while `compute.c3j1.conoha.io`, the host in the API example, is answered directly by nginx; together with the version name v2.1, this fits the description that the public API is implemented with OpenStack functions. The remote MCP server reads as a layer that takes requests authorized through OAuth with a ConoHa account and relays them to this public API on the user's behalf. An authorization server that supports dynamic client registration and client ID metadata documents is presumably designed so that AI clients that were never registered in advance can connect with nothing more than the user's authorization. If, as the Terraform Provider page says, servers created through the API are billed hourly, servers created from the remote MCP server presumably are too, although the MCP documentation does not state this. The cookie names hint that the control panel runs on ASP.NET and the service site on PHP. Naming AI search crawlers in robots.txt and providing llms.txt read as preparations aimed at appearing not only in search results but also in AI assistants' answers.
:::

## What AI agents may do depends on the door

:::fact
According to the release notes and press releases (checked 2026-10-13), the doors and tools for AI agents were added in this order: the first MCP beta on July 23, 2025; the Claude Code, Codex CLI, Gemini CLI, Dify and n8n startup scripts on October 16; OpenClaw on February 5, 2026; Hermes Agent on April 28; the remote MCP server on July 7; the remote MCP server for object storage on August 7; the Claude connector on August 12; the ChatGPT plugin on September 1; and the bundling of Guard and Antigravity CLI on September 25. The August 12 press release calls the listing in Claude's connector directory the first by a domestic cloud provider offering VPS (the company's own research as of August 12, 2026) and says GMO Internet Group signed a strategic partnership agreement with Anthropic on July 10, 2026. The September 1 press release calls the ChatGPT plugin the first by a domestic cloud provider (the company's own research as of September 1, 2026) and explains that the plugin was published after OpenAI's review, consists of the connection settings plus a "skill" that bundles server operation procedures, and runs on servers operated by GMO Internet, so it can also be used from the smartphone app. The earnings presentation (August 14, 2026) listed "promoting AI-driven server operation and the use of AI agents" as a topic of the domain and rental server business.
:::

| Door | Launched | How it connects | Creating or resizing servers |
| --- | --- | --- | --- |
| OSS MCP server (local) | July 23, 2025 (beta) | Runs on the user's PC with the API user's credentials | Yes |
| Remote MCP server | July 7, 2026 | Connects to `https://api.conoha.jp/vps/mcp` and is authorized with a ConoHa account | Yes (regular fees apply) |
| Remote MCP server for object storage | August 7, 2026 | Connects to `https://api.conoha.jp/vps/swift-mcp` | Not applicable (operates object storage) |
| Claude connector | August 12, 2026 | Added from the connector directory and authorized with a ConoHa account | Yes (regular fees apply) |
| ChatGPT plugin | September 1, 2026 | Added from the plugin directory and authorized with a ConoHa account | No (start, stop, reboot, status checks, security settings and more) |

The table is based on the release notes, the MCP documentation and the press releases. Using the remote MCP server, the Claude connector and the ChatGPT plugin themselves is free; what costs money is the regular ConoHa VPS fee incurred by creating or starting servers and the like, and each AI service's own fee.

:::guess
That only the ChatGPT plugin, though connected to the same remote MCP server, leaves out the operations that incur charges reads as a decision to narrow permissions to fit the users each door expects. The press release lists operation from a smartphone among the plugin's advantages and states plainly that charges do not change, so the company appears to have expected uses such as a user without server expertise rebooting a server while out, and to have withheld from the start the operations that could raise the bill unintentionally. Claude Code, Codex CLI and Claude, meanwhile, are handed creation and resizing, with users asked to confirm the operations that cannot be undone. Taken together with the home page answering the worry that "AI agents on a local PC stop when you close it" with round-the-clock operation, and with Guard bundled into the AI-agent startup scripts, ConoHa VPS is presumably being sold not only as a tool that AI agents operate but also as a place where AI agents live.
:::

## Business model

The business centers on VPS fees collected through hourly billing and Matome-Toku, topped by automatic backups, extra storage, object storage, the network bandwidth upgrade, Windows Server and GPU servers. Winning customers is left to time-limited campaigns, affiliate programs on A8.net and Moshimo Affiliate, and a partner program for web production companies.

:::fact
According to the affiliate page (checked 2026-10-13), the program is offered through two networks, A8.net and Moshimo Affiliate, and the per-sale rewards are 1,000 yen for 1 GB, 1,100 yen for 2 GB on a one-month contract and 2,000 yen on three months or longer, 2,100 and 3,600 yen for 4 GB, 4,100 and 7,400 yen for 12 GB, 9,000 and 14,300 yen for 24 GB, 20,100 and 28,600 yen for 48 GB, and 40,200 and 53,900 yen for 96 GB. The page calls the table an excerpt, says there is no cap on the reward per sale and that a sale using several servers pays the server price for each of them, and also offers self-back, which pays the reward on one's own sign-up. The rewards for three months or longer on 2 GB to 96 GB are almost the same as the hourly billing monthly caps, and match them exactly for 24 GB, 48 GB and 96 GB (this site's comparison). The partner program (agency system) for web production companies and freelancers pays, for referring Matome-Toku on plans with 1 GB of memory or more, a fixed first reward from 300 yen (one month) to 6,000 yen (36 months) for 1 GB and from 500 to 15,000 yen for 2 GB and above, plus a recurring reward of 15% of the lump sum paid at every renewal, and it cannot be combined with affiliate programs. According to the campaign page, the Happy Halloween campaign until 16:00 on October 29, 2026 covers everyone newly ordering Matome-Toku, at up to 66% off compared with hourly billing and from 293 yen a month; the prices apply only at sign-up, not at renewal, and switching from hourly billing to Matome-Toku and options other than Matome-Toku are excluded. According to the earnings presentation (August 14, 2026), GMO Internet's consolidated revenue for the first half of 2026 was 41.2 billion yen (+7.2% year on year) with operating profit of 4.76 billion yen (+46.2%), and the domain and rental server business, which includes the GPU cloud, posted revenue of 11.5 billion yen (+18.1%) and operating profit of 3.10 billion yen (+73.6%). The company's domestic contracts are given as 13.7 million and its stock-revenue ratio as 87.6%. The explanation of the business's second-quarter progress cites high utilization of the GPU cloud's H200 and B300 and continued advertising investment in the existing business, and the earnings call transcript says of AI-agent server operation and the startup scripts that the company "will connect them to acquiring new customers and improving the retention rate."
:::

:::guess
That the rewards for three months or longer on 2 GB and above sit almost exactly at the hourly billing monthly caps appears to reflect a policy of paying roughly one month of the regular fee per referral. The partner program, meanwhile, keeps paying 15% at every renewal. This reads as a two-tier sales channel that leaves one-off sign-ups to blogs and comparison sites and long-running contracts to web production companies. A design in which the campaign discount applies only to the first term, so that the 2 GB plan on a 36-month contract rises from 677 to 903 yen a month at renewal, 33.4% more (this site's calculation), reads as attracting customers with the entry price tag and recovering the unit price at renewal. If the statement that servers created through the API are billed hourly applies, servers that AI agents create for testing would presumably run on hourly billing, which costs more per month than Matome-Toku. The earnings materials, however, show no figures for ConoHa VPS alone, the explanation of the domain and rental server business's first-half growth centers on GPU cloud utilization, and how much the AI agent integration contributes to new customers and retention cannot be read from public information.
:::

The ConoHa VPS service that began in 2013 has paired hourly billing with a monthly cap and Matome-Toku, which gets cheaper the longer you prepay, and has shortened the path to a running server with templates and scripts. In just over a year since the first MCP beta, the doors for handing that operation to AI agents have widened to a remote MCP server, Claude and ChatGPT, and whether each door can create servers has been decided door by door. How this attempt to sell both a place to keep AI agents running around the clock and tools that AI agents can use will show up in the new-customer acquisition and retention the company has named as its goals cannot yet be read from the figures in its published earnings materials.
