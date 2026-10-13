---
service: "XServer VPS"
title: "When Server Hardware Costs Reached a VPS Price Tag — Dissecting XServer VPS, Which Raised Its 2 GB Plan on a 36-Month Contract From 990 to 1,265 Yen a Month, Opened Its API and MCP Server a Week Later, and Paused New Orders for Nearly Three Weeks"
description: "XServer VPS is a VPS (virtual private server) service that XServer Inc., the company behind Xserver, the hosting service that claims the No. 1 share in Japan, launched in September 2022. It puts 3rd-generation AMD EPYC CPUs and NVMe SSDs under six plans from 2 GB to 64 GB of memory, hands over root access, and installs an OS or application as soon as you sign up. This site counted 91 app images, 40 of them games such as Minecraft and Palworld and 6 of them AI tools such as Claude Code, Codex CLI, Gemini CLI and Dify. In 2026, it stopped taking new orders in July for the free VPS, citing tight inventory caused by more orders than expected, and for the 2 GB plan, citing that and soaring equipment procurement costs amid rising global demand for server hardware; it raised the prices of every plan on September 1, citing the procurement costs, by 19.7% to 32.4% (this site's calculation; the 2 GB plan on a 36-month contract went from 990 to 1,265 yen a month, tax included); and it paused new orders from September 17 to October 6 for both reasons. On September 8, a week after the price rise, it extended its REST API, MCP server and CLI to the VPS, letting AI agents operate power and place new orders. Using the pricing, specifications, OS and app image list, game VPS, Windows Server, GPU server, free VPS, business plans, terms of service, manuals, API and CLI references, news, affiliate page and this site's own observations, the article dissects how a VPS that advertises \"overwhelming cost performance\" passed rising equipment costs on to its inventory and its price tags, and what it opened up to AI agents."
lead: "\"Equipment procurement costs have risen sharply, and it has become difficult to maintain our previous prices\" — on August 3, 2026, XServer VPS announced in a notice marked \"Important\" that it would revise the prices of every plan from September 1. This summer, a VPS whose entry points had been campaigns and a 2 GB plan priced at 990 yen a month on a 36-month contract before the revision stopped taking orders for the free VPS and the 2 GB plan, rewrote its price tags, and on September 17 stopped taking new orders altogether. A week after the price rise, meanwhile, it published an API and an MCP server through which AI agents can order a VPS and operate its power. This article dissects, from public information alone, what rising equipment costs did to one VPS service."
category: dev-tool
tags: [hosting, vps, small-business, api, mcp, ai-agent, multiplayer]
publishedAt: "2026-10-13"
updatedAt: "2026-10-13"
lastVerified: "2026-10-13"
expires:
  - date: "2026-10-26"
    claim: "The home page's XServer VPS Cloud pop-up (\"until 10/26 | contract term + 3 months free\")"
  - date: "2026-11-19"
    claim: "The Windows Server cashback for new contracts (until 17:00 on November 19) and the guess built on it"
serviceUrl: "https://vps.xserver.ne.jp/"
# Affiliate link placeholder: XServer VPS runs its affiliate program through A8.net
# (https://vps.xserver.ne.jp/affiliate.php, checked 2026-10-13): flat rewards per sale, e.g. XServer VPS 2GB
# 1,046 / 1,569 yen (1-month / 3-month-or-longer) up to 64GB 40,182 / 60,273 yen, Windows Server 2,000-64,000
# yen, Game 690-47,115 yen, FX Premium 12,000-43,000 yen (business plans: new orders suspended). Register with
# A8.net for free and apply via that page (it says self sign-ups are allowed). Use A8.net's ad code as provided:
# the link to affiliate.url, the 1x1 impression image to affiliate.impressionUrl, the text ad verbatim to
# affiliate.label. Never invent the label — ask the owner. Do not use the friend-referral link
# (https://www.xserver.ne.jp/friend.php): it forbids spreading to an unspecified audience and cannot be combined
# with an ASP. Keep every field identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://px.a8.net/svt/ejp?a8mat=<xserver-vps-material>"
#   program: "XServer VPS Affiliate Program (A8.net)"
#   impressionUrl: "https://www18.a8.net/0.gif?a8mat=<xserver-vps-material>"
#   label: "<verbatim text of the ad material>"
vendor: "XServer Inc."
origin: "JP"
heroTheme: "xserver-vps"
scores: { product: 4.0, ux: 3.5, tech: 3.5, business: 3.5 }
techStack:
  - layer: "Server hardware"
    name: "AMD EPYC (3rd gen, Milan) / NVMe SSD (striping + mirroring)"
    confidence: confirmed
    evidence: "The official service introduction page (checked 2026-10-13) states that the CPU is the 3rd-generation \"AMD EPYC\" (code name \"Milan\") and that every drive uses NVMe in a striping configuration with mirroring. It puts read speed at up to about 17 times that of the previous all-SSD environment and notes the basis as the company's own research as of January 2024 (a comparison of random-read throughput under a 128-parallel load with fio)"
    evidenceUrl: "https://vps.xserver.ne.jp/xserver-vps.php"
  - layer: "Network"
    name: "10 Gbps shared uplink (up to 100 Mbps per contract)"
    confidence: confirmed
    evidence: "The official pricing and specifications page (checked 2026-10-13) gives the network as \"Internet 10Gbps shared (up to 100Mbps per contract),\" unlimited data transfer and one IPv4 global IP address. The service introduction page says it connects directly to one of Japan's largest backbone networks at 10 Gbps, and the game VPS page gives bandwidth from 100 Mbps to 2 Gbps per plan"
    evidenceUrl: "https://vps.xserver.ne.jp/price.php"
  - layer: "OS and app images"
    name: "9 Linux distributions / 91 app images (Claude Code, Codex CLI, Gemini CLI, Dify, n8n, OpenClaw, 40 games)"
    confidence: confirmed
    evidence: "The official OS and app image list (checked 2026-10-13) lists nine OS families including AlmaLinux, Rocky Linux and Ubuntu, and app images in six categories: AI tools, business tools, programming tools, blogs and websites, games, and server management and other tools, and says the OS installation and application server setup are complete as soon as the server is created. The counts are this site's own"
    evidenceUrl: "https://vps.xserver.ne.jp/os-list.php"
  - layer: "Game server management"
    name: "Minecraft Manager / Palworld Manager (XServer-provided tools)"
    confidence: confirmed
    evidence: "The official Minecraft page (checked 2026-10-13) states that a dedicated Minecraft management tool is provided for changing game settings, upgrading versions and making backups with clicks. The news index lists three notices about settings added to the \"Palworld Manager,\" and the game VPS page lists \"Easy Migration\" for moving Palworld, Minecraft and ARK from other providers' servers"
    evidenceUrl: "https://vps.xserver.ne.jp/minecraft.php"
  - layer: "GPU"
    name: "NVIDIA L4 Tensor Core GPU (24 GB VRAM)"
    confidence: confirmed
    evidence: "The official GPU server page (checked 2026-10-13) states one NVIDIA L4 Tensor Core GPU, 24 GB of VRAM, 24 vCPU cores, 120 GB of memory, 150 GB of SSD (RAID10) and Ubuntu 22.04 LTS, with images for Automatic1111, InvokeAI and NVIDIA Container Toolkit, at 150 yen an hour (capped at 88,000 yen a month)"
    evidenceUrl: "https://vps.xserver.ne.jp/gpu.php"
  - layer: "External API"
    name: "XServer API (REST, api.xserver.ne.jp/v1/vps, xs_ keys, OpenAPI)"
    confidence: confirmed
    evidence: "The official API reference (checked 2026-10-13) gives the base URL https://api.xserver.ne.jp, the base path /v1/vps, authentication with a Bearer token (API key), JSON responses and an OpenAPI specification. Rate limits apply per account at 60 a minute, 10,000 a day and 5 concurrent connections regardless of plan, and new orders come with dry_run, Idempotency-Key and expected_total_price"
    evidenceUrl: "https://developer.xserver.ne.jp/api/vps/"
  - layer: "AI agent integration"
    name: "XServer MCP Server (npx xserver-mcp --services=vps / remote at api.xserver.ne.jp/mcp)"
    confidence: confirmed
    evidence: "The official manual (checked 2026-10-13) states that the MCP server runs on the user's PC as npx -y xserver-mcp --services=vps, requires Node.js 18 or later and an API key, and enables new orders and OS reinstallation only when the environment variable XSERVER_MCP_ENABLE_HIGH_RISK_EXECUTE is set to 1. The manual for the remote version describes adding https://api.xserver.ne.jp/mcp as a Claude connector and says operations that incur charges are not available through the connector"
    evidenceUrl: "https://vps.xserver.ne.jp/support/manual/man_tool_mcp.php"
  - layer: "CLI"
    name: "XServer CLI (npm: xserver-cli, Node.js 18+)"
    confidence: confirmed
    evidence: "The official CLI reference (checked 2026-10-13) states that it is installed with npm install -g xserver-cli in a Node.js (v18 or later) environment, that commands under xserver vps operate the VPS list, power, packet filters, OS reinstallation and new orders, and that a real order incurring charges can only run from an interactive terminal, with no way to skip the confirmation through --yes"
    evidenceUrl: "https://developer.xserver.ne.jp/cli/vps/"
  - layer: "Own website and control panel"
    name: "Apache (vps.xserver.ne.jp, api.xserver.ne.jp, secure.xserver.ne.jp) / WordPress on nginx (community)"
    confidence: likely
    evidence: "This site's own observation (2026-10-13) found vps.xserver.ne.jp, developer.xserver.ne.jp and api.xserver.ne.jp returning server: Apache over HTTP/1.1, with HSTS on api.xserver.ne.jp. The URL the home page's login button points to, secure.xserver.ne.jp/xapanel/login/xvps/, returned server: Apache and charset=EUC-JP, and the user community at community.xserver.ne.jp returned server: nginx over HTTP/2 with a link to the WordPress REST API, so the community appears to run on WordPress"
sources:
  - label: "XServer VPS official: Home page"
    url: "https://vps.xserver.ne.jp/"
    accessedAt: "2026-10-13"
  - label: "XServer VPS official: Pricing and specifications (price tables for first contracts and renewals)"
    url: "https://vps.xserver.ne.jp/price.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS official: About XServer VPS (3rd-generation AMD EPYC, NVMe, own data centers)"
    url: "https://vps.xserver.ne.jp/xserver-vps.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS official: Feature list"
    url: "https://vps.xserver.ne.jp/feature.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS official: OS and app image list"
    url: "https://vps.xserver.ne.jp/os-list.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS official: Minecraft (multiplayer servers and the dedicated management tool)"
    url: "https://vps.xserver.ne.jp/minecraft.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS official: Game VPS (XServer VPS for Game)"
    url: "https://vps.xserver.ne.jp/game-server/"
    accessedAt: "2026-10-13"
  - label: "XServer VPS official: Windows Server (pricing, licenses, cashback campaign)"
    url: "https://vps.xserver.ne.jp/windows-server.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS official: GPU server (XServer VPS for GPU)"
    url: "https://vps.xserver.ne.jp/gpu.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS official: Business plans (SLA, automatic backups, suspension of new orders)"
    url: "https://vps.xserver.ne.jp/business.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS official: Free VPS"
    url: "https://vps.xserver.ne.jp/free.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS official: Affiliate program (A8.net rewards)"
    url: "https://vps.xserver.ne.jp/affiliate.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS official: Notice under the Specified Commercial Transactions Act"
    url: "https://vps.xserver.ne.jp/regulation.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS official: Terms of service (XServer Account and VPS service)"
    url: "https://vps.xserver.ne.jp/rule/rule.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS News: Index (latest 100 items, January 13 to October 6, 2026)"
    url: "https://vps.xserver.ne.jp/support/news.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS News: Temporary suspension of new orders for the free plans (2026-07-10)"
    url: "https://vps.xserver.ne.jp/support/news_detail.php?view_id=18884"
    accessedAt: "2026-10-13"
  - label: "XServer VPS News: New orders for the 2GB plan stopped and some offerings changed (2026-07-14)"
    url: "https://vps.xserver.ne.jp/support/news_detail.php?view_id=18920"
    accessedAt: "2026-10-13"
  - label: "XServer VPS News: [Important] Revision of usage fees (2026-08-03, effective September 1)"
    url: "https://vps.xserver.ne.jp/support/news_detail.php?view_id=19107"
    accessedAt: "2026-10-13"
  - label: "XServer VPS News: Temporary suspension of new orders for the business plans (2026-08-31, updated September 15)"
    url: "https://vps.xserver.ne.jp/support/news_detail.php?view_id=19336"
    accessedAt: "2026-10-13"
  - label: "XServer VPS News: Temporary suspension of new orders (2026-09-18, addendum October 6)"
    url: "https://vps.xserver.ne.jp/support/news_detail.php?view_id=19471"
    accessedAt: "2026-10-13"
  - label: "XServer VPS News: New orders resumed (2026-10-06)"
    url: "https://vps.xserver.ne.jp/support/news_detail.php?view_id=19612"
    accessedAt: "2026-10-13"
  - label: "XServer VPS News: Support for the \"XServer API\" (2026-09-08)"
    url: "https://vps.xserver.ne.jp/support/news_detail.php?view_id=19395"
    accessedAt: "2026-10-13"
  - label: "XServer VPS support site: XServer MCP Server"
    url: "https://vps.xserver.ne.jp/support/manual/man_tool_mcp.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS support site: XServer MCP Server, remote version"
    url: "https://vps.xserver.ne.jp/support/manual/man_tool_mcp_remote.php"
    accessedAt: "2026-10-13"
  - label: "XServer developer docs: API reference (VPS management)"
    url: "https://developer.xserver.ne.jp/api/vps/"
    accessedAt: "2026-10-13"
  - label: "XServer developer docs: CLI reference (VPS management)"
    url: "https://developer.xserver.ne.jp/cli/vps/"
    accessedAt: "2026-10-13"
  - label: "XServer developer docs: Changelog (API / CLI)"
    url: "https://developer.xserver.ne.jp/changelog/"
    accessedAt: "2026-10-13"
  - label: "XServer VPS Cloud News: Launch of the cloud VPS \"XServer VPS Cloud\" (2026-08-31)"
    url: "https://vpscloud.xserver.ne.jp/news/detail.php?view_id=19335"
    accessedAt: "2026-10-13"
  - label: "XServer Inc.: Company history"
    url: "https://www.xserver.co.jp/history.php"
    accessedAt: "2026-10-13"
  - label: "Xserver official: Friend referral program (XServer VPS benefits and prohibited acts)"
    url: "https://www.xserver.ne.jp/friend.php"
    accessedAt: "2026-10-13"
---

XServer VPS is a Japanese service that rents out virtual private servers (VPS), on which users decide everything from the choice of OS to the software they install, paid in advance for terms of one to 36 months. It is run by XServer Inc., the company that sells [Xserver](/en/articles/xserver) and [Shin Rental Server](/en/articles/shin-rental-server), both dissected on this site, and in 2026 the same "XServer API" gateway opened for the VPS as well. Its two banners are multiplayer game servers that come up the moment you sign up and a testing ground for AI tools such as Claude Code and Dify. In the summer of 2026, this VPS, which advertises "overwhelming cost performance," had to face rising equipment costs and more orders than expected through both its inventory and its price tags. This site has also dissected [DigitalOcean](/en/articles/digitalocean) and [ConoHa WING](/en/articles/conoha-wing), which can be read alongside this article when choosing where to host.

## Service overview

At the core of XServer VPS are six Linux plans from 2 GB to 64 GB of memory. Under the same XServer VPS name sit plans running Windows Server, a game VPS for multiplayer, a GPU server with an NVIDIA L4, a VPS dedicated to automated FX trading, business plans for companies, and a free VPS renewed day by day. In August 2026, XServer VPS Cloud, a separate service that builds multi-server configurations automatically, joined them.

:::fact
According to the company history on XServer Inc.'s corporate site (as of 2026-10-13), the company launched "Xserver VPS" in September 2022, "Xserver for Windows" with Windows (now "Xserver VPS for Windows Server") in March 2023, "Xserver for Game" for games (now "Xserver VPS for Game") in April 2023, "Shin VPS" in September 2023, "Xserver GAMEs," a dedicated multiplayer game server, in June 2024, "XServer VPS for FX Premium" with dedicated resources in December 2025, and "XServer VPS Cloud" in August 2026. The supplementary provisions of the VPS terms of service give September 8, 2022 as the date the terms took effect. According to the notice under the Specified Commercial Transactions Act, the seller is XServer Inc., headquartered at Grand Front Osaka in Kita Ward, Osaka. The service introduction page says the servers run in the company's own data centers in Japan, users get root access, and support is in Japanese. The home page gives the basis for Xserver's No. 1 share in Japan as W3Techs research as of June 2026, and notes the basis for its "overwhelming No. 1 processing performance among VPS in Japan" as the company's own research on November 18, 2024 (covering 2 GB memory plans of the services called VPS offered by the top three companies by share in Japan, comparing CPU with sysbench and IOPS by the average of random reads and random writes run 70 times every five minutes with a 1 MB block size and 2 GB in total, with share calculated from builtwith.com data).
:::

:::fact
According to the pricing and specifications page (checked 2026-10-13, tax included), the six plans are 2 GB (3 vCPU cores, 50 GB NVMe SSD), 4 GB (4 cores, 150 GB), 8 GB (6 cores, 400 GB), 16 GB (8 cores, 800 GB), 32 GB (12 cores, 1,600 GB) and 64 GB (24 cores, 2,400 GB), with monthly equivalents of 1,265, 2,035, 3,850, 8,690, 22,220 and 45,650 yen on a 36-month contract and 1,980, 2,640, 5,280, 11,770, 26,510 and 53,020 yen on a one-month contract. The tables for first contracts and for renewals show the same amounts, payment is a lump sum in advance for the whole term, and the setup fee is 0 yen. The network is "Internet 10Gbps shared (up to 100Mbps per contract)," data transfer is unlimited, there is one IPv4 address, image saving, which stores a whole server, is free up to 50 GB, and another 500 GB costs 1,650 yen a month. Plans can be changed to a higher tier. According to the feature list, inquiries by email are accepted 24 hours a day, 365 days a year, and by phone on weekdays from 10:00 to 18:00. The plan table on the home page marks automatic backups and private networking as "-" for 2 GB, 4 GB and 8 GB. The Windows Server plans start at 2,410 yen a month for 2 GB (3 cores, 100 GB) on a 36-month contract; from 17:00 on August 31 to 17:00 on November 19, 2026, new contracts of 12 months or longer get up to 30% of the monthly fee back (20% for 12 months, 25% for 24 months, 30% for 36 months), for an effective price from 1,687 yen a month, and the Remote Desktop SAL, required for each person who connects by remote desktop for purposes other than server management, costs 1,210 yen a month and the Microsoft Office SAL 3,740 yen a month. The GPU server has one NVIDIA L4 (24 GB of VRAM), 24 vCPU cores and 120 GB of memory for 150 yen an hour, capped at 88,000 yen a month, and is billed even while stopped. The business plans for companies include, free of charge, an SLA guaranteeing at least 99.99% monthly uptime and weekly automatic backups of one generation, but new orders for them are suspended. The notice under the Specified Commercial Transactions Act lists credit card, deferred payment the following month through Paidy (convenience store or bank) and prepaid balance as payment methods, and says orders cannot be canceled after payment.
:::

:::pull
A VPS that advertises "overwhelming cost performance" took on rising equipment costs through its inventory and its price tags in the summer of 2026.
:::

::scorecard

## UX analysis

The XServer VPS experience is built on a clear division: it thoroughly takes over the initial build, the part of running a VPS that usually takes effort, and leaves the operation after that to the user. In 2026, working out which plans can be ordered right now, given the state of inventory, became one more task.

- **Game servers come up the moment you sign up.** The game section of the OS and app image list (checked 2026-10-13) has 40 entries, 10 of them editions of Minecraft (Java Edition, Bedrock Edition, Paper, Forge and more). The home page says installation starts automatically as soon as the order is complete and advertises "building a multiplayer server in just 20 seconds." The Minecraft page introduces a dedicated management tool that handles settings changes, version upgrades and backups with clicks, and the game VPS page lists "Easy Migration," which moves Palworld, Minecraft and ARK servers from other providers along with their world data. Some games require a minimum plan, though: Satisfactory and Soulmask need a plan with 16 GB of memory or more, and Counter-Strike 2 and Conan Exiles 8 GB or more.
- **AI tools are handed out as images, too.** The "AI tools" section of the same list has six entries, Claude Code, Codex CLI, Gemini CLI, Dify, n8n and OpenClaw, and Claude Code, Codex CLI, Gemini CLI and Dify can be used on plans with 4 GB of memory or more. OpenClaw is described as an AI agent that performs file operations and runs commands on the VPS through chat tools such as Discord and Telegram. The free VPS page lists vibe coding as one of its use cases, and the friend referral page introduces XServer VPS as "supporting development use and AI use, with a wide range of OS and app images available."
- **Knowing which plans can be ordered now takes reading the notices together.** The July 14 notice announced that new orders for the 2 GB plan were suspended, and the October 6 notice says new orders, paused since September 17, have resumed while the business plans and the free VPS remain suspended. As of October 13, 2026, the home page and the pricing and specifications page listed the 2 GB plan from 1,265 yen a month with an order button, while the business plan and free VPS pages displayed "Orders suspended." The API reference says plans whose orders are temporarily suspended stay in the plan list if they are expected to resume, asks callers to check whether an order can actually go through by calling the ordering API with `dry_run=true`, and says it returns 409 CAPACITY_UNAVAILABLE when no server can accept the order.
- **The free VPS is extended by hand, day by day.** The free VPS page claims to be "the first in Japan" (based on the company's own research as of July 10, 2025) and lists plans of 2 GB (2 cores) and 4 GB (3 cores) with 30 GB of NVMe and 30 Mbps for 0 yen a month, on the condition that a credit card is registered. The contract has to be renewed manually every day from the control panel; without renewal the server is deleted, and using scripts or bots to automate renewal counts as misconduct. According to the July 14 notice, from July 22 the usage period shrank to a maximum of 24 hours (previously up to 96 hours for 2 GB and 48 hours for 4 GB), and renewal became possible only once 12 hours remain. According to the news index, new orders have been suspended since July 10.
- **Backups and updates are up to you.** The terms of service state that the company has no obligation to back up users' data and that users must prepare for loss themselves. The standard services on the pricing and specifications page include no automatic backup item, and the free safeguard is image saving up to 50 GB. The business plans include weekly automatic backups of one generation, and XServer VPS Cloud includes daily backups kept for up to seven days as standard. The Minecraft page cautions that "you need to manage the server environment yourself." Of the latest 100 items in the news index (January 13 to October 6, 2026), 16 have "vulnerability" in the title, three each about n8n and OpenClaw, both of which are distributed as app images.
- **Pages describe the timing of cancellation differently.** Article 8 of the VPS service terms says a contract ends at the end of the month following the day the company confirms the cancellation notice, and that fees already paid are not returned. The notice under the Specified Commercial Transactions Act, on the other hand, says that once the cancellation procedure is complete, the contract ends on the expiry date in effect at the time of the procedure. According to Article 12 of the VPS service terms, a renewal notice arrives 14 days before the term expires, and unless the user says by the end of that month that they will not renew, the contract renews automatically for the same period. Before signing up, it is worth checking which wording applies to your own contract.

## Tech stack

::techstack

:::fact
According to the service introduction page (checked 2026-10-13), the CPU is the 3rd-generation "AMD EPYC" (code name "Milan"), every drive uses NVMe in a striping configuration that also has mirroring, and read speed is up to about 17 times that of the previous all-SSD environment (the company's own research as of January 2024, comparing random-read throughput under a 128-parallel load with fio). The network connects directly to one of Japan's largest backbone networks at 10 Gbps. The game VPS page lists a different allocation at the same monthly prices as the standard plans from 2 GB to 64 GB: 50 GB of disk on 2 GB and 100 GB on 4 GB and above, and bandwidth of 100 Mbps on 2 GB and 4 GB, 200 Mbps on 8 GB, 300 Mbps on 16 GB, 500 Mbps on 32 GB, 1 Gbps on 64 GB and 2 Gbps on 128 GB (40 cores, 91,190 yen a month on a 36-month contract). The OS and app image list offers nine OS families: AlmaLinux, Arch Linux, CentOS Stream, Debian, Fedora, Oracle Linux, Rocky Linux, Ubuntu (22.04, 24.04 and 26.04) and openSUSE Leap. This site counted 91 app images: 6 AI tools, 6 business tools, 4 programming tools, 12 for blogs and websites, 40 games and 23 server management and other tools; most are based on Ubuntu 24.04, most games on Ubuntu 22.04, and WordPress with KUSANAGI on AlmaLinux 8 and 9 and CentOS Stream 9. According to the news index, the company announced the addition of OpenClaw (February 6), Coolify (February 10), Dokploy (April 10), Ubuntu 26.04 (April 30), Conan Exiles (September 2) and others in 2026, and on September 4 it announced the end of new provisioning of Debian 11. The GPU server page describes its control panel as an in-house management tool.
:::

:::fact
According to the September 8, 2026 notice, XServer VPS, Windows Server and the GPU server were added to the services supported by the "XServer API" (the free plans are excluded), so that VPS information lookups, power operations, OS reinstallation, packet filters and new orders can be executed from AI agents and external programs (new orders are not available for Windows Server or the GPU server). The developer changelog records that the Shin VPS API also started on the same day, and that new orders through the API are full contracts with no free trial period. According to the API reference (checked 2026-10-13), the base URL is `https://api.xserver.ne.jp`, the base path is `/v1/vps`, an API key starting with `xs_` is sent as a Bearer token, and an OpenAPI specification (`openapi.json`) is published. Rate limits apply per account and, regardless of plan, are 60 requests a minute, 10,000 a day and 5 concurrent connections. Exceeding them returns 429 with Retry-After, and repeated authentication failures in a short time lead to a temporary block by IP address. For new orders (`POST /v1/vps/servers`), letting an API key place orders requires a prepaid balance of at least 20,000 yen; `dry_run=true` checks the amount and whether orders are being accepted, and a real order sends an `Idempotency-Key` header, `expected_total_price` (PRICE_MISMATCH if it differs from the current price) and `agree_to_terms=true`. Orders cover VPS and business VPS with a standard Linux OS, an agency code, `partner_code`, can also be specified, and automatic renewal is on by default. According to the CLI reference, with `xserver-cli` from npm a real order that incurs charges can only be run from an interactive terminal, the confirmation cannot be skipped with `--yes` either, and resending with the same key after receiving no response returns 409 DUPLICATE_REQUEST for 48 hours. According to the MCP Server manual, the MCP server runs on the user's PC as `npx -y xserver-mcp --services=vps` (Node.js 18 or later), and new orders and OS reinstallation are enabled only when, in addition to a permission on the API key, the environment variable `XSERVER_MCP_ENABLE_HIGH_RISK_EXECUTE` is set to 1, with the order details and the tax-included total shown before a real order. The remote version works by adding `https://api.xserver.ne.jp/mcp` as a Claude connector and authorizing the link with an XServer account; it has no expiry or IP restriction settings, and operations that incur charges are not available through the connector. This site's own observation (2026-10-13) found `vps.xserver.ne.jp` and `developer.xserver.ne.jp` returning server: Apache over HTTP/1.1, and the root of `api.xserver.ne.jp` returning 403 along with HSTS (max-age=63072000; includeSubDomains). The URL that the home page's login button points to, `secure.xserver.ne.jp/xapanel/login/xvps/`, returned 200 with server: Apache and charset=EUC-JP, and the user community at `community.xserver.ne.jp` returned server: nginx over HTTP/2 with a link to the WordPress REST API. In this site's own observation on 2026-10-11, an unauthenticated `GET /v1/vps/servers` returned 401 with a JSON error (code: UNAUTHORIZED), and a GET to `/mcp` returned 405 with Allow: POST.
:::

:::guess
The ordering API stacks safeguards, a trial calculation in advance, a match against the expected amount, the Idempotency-Key and, in the CLI, a confirmation in an interactive terminal, and it deliberately keeps suspended plans in the list and turns orders away with 409 CAPACITY_UNAVAILABLE; this reads as a design that assumes AI agents and programs will place orders while inventory fluctuates. According to the changelog, API keys became per XServer account in August 2026, and one key can now handle several services such as server management and domains. Together with the Shin VPS API starting on the same day, this suggests that the contract and management system is shared across several brands and that the VPS was placed on top of it. That the login page uses EUC-JP as its character encoding hints at a long-running customer management system carried over. Meanwhile, the CPU on the service introduction page is still the 3rd-generation EPYC, while for XServer VPS Cloud, launched in August, the announcement says it adopts "hardware newly designed for this service." Newly procured equipment was presumably directed to the cloud.
:::

## How rising equipment costs reached inventory and price tags

:::fact
According to the news index and the individual notices (checked 2026-10-13), the summer of 2026 went as follows. On July 10, citing tight server inventory caused by more orders than expected, the company stopped taking new orders for the free 2 GB and free 4 GB plans. At 17:00 on July 14, saying that equipment procurement costs had soared amid rising global demand for server hardware, making it hard to secure inventory at the previous level, and that inventory was tight because of more orders than expected, it suspended new orders for the 2 GB plan, ended new provisioning of "Free Memory Expansion" on plans of 4 GB and above, and ended early the "up to 20% off campaign" scheduled to run until September 3; on July 22 it shortened the free VPS usage period. According to the Windows Server and business plan pages, Free Memory Expansion permanently increases memory capacity for free, for example adding 4 GB to 8 GB to make 12 GB. On July 9 it also announced the early end of a campaign that doubled friend referral benefits. On August 3 it announced that prices for first contracts and renewals on every plan would be revised on September 1, and said contracts renewed before that date could be extended at the old prices. On August 31 it suspended new orders for the business plans and, on the same day, launched XServer VPS Cloud, provided on dedicated equipment prepared separately for more than half a year. On September 15, the planned resumption of business plan orders was changed from mid-September to "undecided." On September 17 it stopped new orders for every XServer VPS plan (existing customers could still place additional orders) and said it expected to resume in November, but resumed at 17:00 on October 6. The business plans and the free VPS were still suspended as of October 13. The home page that day carried a pop-up recommending XServer VPS Cloud with "until 10/26 | contract term + 3 months free," from 2,480 yen a month (on a one-month contract).
:::

| Monthly price (tax included) | Before (until August 31) | After (from September 1) | Increase (this site's calculation) |
| --- | --- | --- | --- |
| 2 GB, 36-month contract | 990 yen | 1,265 yen | 27.8% |
| 2 GB, 1-month contract | 1,496 yen | 1,980 yen | 32.4% |
| 4 GB, 36-month contract | 1,700 yen | 2,035 yen | 19.7% |
| 8 GB, 36-month contract | 3,201 yen | 3,850 yen | 20.3% |
| 16 GB, 36-month contract | 7,200 yen | 8,690 yen | 20.7% |
| 64 GB, 36-month contract | 38,000 yen | 45,650 yen | 20.1% |

The amounts in the table come from the August 3 notice. Of the 36 combinations of contract term and plan, the smallest increase is 19.7%, on the 4 GB 36-month contract and others, and the largest is 32.4%, on the 2 GB one-month contract; the total paid for the 2 GB plan on a 36-month contract goes from 35,640 yen to 45,540 yen (this site's calculation).

:::guess
That the first things to stop, citing tight inventory, were the free VPS and the cheapest 2 GB plan, and that the 2 GB plan also got the largest increase, appears to show that the gap between price and equipment cost had narrowed most on the entry-level plans. Since the free memory expansion that came with plans of 4 GB and above until July and the campaigns also disappeared, the effective increase for new customers presumably exceeds the rise on the price tag (19.7% to 32.4% by this site's calculation). Taken together with the friend referral page advertising "development use and AI use" and the free VPS page listing vibe coding among its use cases, demand for trying out AI tools may have accounted for part of the orders that exceeded expectations. Launching a cloud running on separate equipment on the same day, as a destination while orders were stopped, reads as a decision to direct new equipment first to a new service whose daily backups and multi-server configurations make it easier to raise revenue per customer.
:::

## Business model

The business centers on VPS fees received in advance for the contract term, topped by extra image storage, Windows licenses, hourly GPU billing and more. Winning customers is left to the A8.net affiliate program, friend referrals and time-limited campaigns.

:::fact
According to the affiliate page (checked 2026-10-13), the program runs on A8.net, and the per-sale rewards for XServer VPS are 1,046 yen for 2 GB on a one-month contract and 1,569 yen on three months or longer, 2,000 and 3,000 yen for 4 GB, 4,000 and 6,000 yen for 8 GB, 8,864 and 13,296 yen for 16 GB, 20,091 and 30,137 yen for 32 GB, and 40,182 and 60,273 yen for 64 GB, while the business-plan rows display "new orders are temporarily suspended." Windows Server pays 2,000 to 64,000 yen, the game VPS 690 to 47,115 yen (45,000 yen for 128 GB), and FX Premium, the VPS dedicated to automated FX trading, 12,000 to 43,000 yen, and the page notes that the program can also be used for your own sign-up. The one-month rewards for 4 GB to 64 GB match the pre-revision one-month prices (tax included) in the August 3 notice divided by 1.1 and rounded to the nearest yen, and the rewards for three months or longer are about 1.5 times those (this site's calculation). According to the friend referral page, referring XServer VPS gives both the referrer and the referred customer a benefit of 10% of the fee (4,554 yen on a 2 GB 36-month contract, 10% of the post-revision total of 45,540 yen); it cannot be combined with affiliate programs such as A8.net or with the XServer Business Partner Program, spreading the link to an unspecified audience on social media, message boards or blogs is prohibited, and orders for the business plans earn no reward while their new orders are suspended. Article 23 of the VPS service terms allows, under conditions, resale, that is, using XServer VPS to provide a similar service to third parties. According to the news index, up to 25% cashback until June 18 (effectively from 742 yen a month) was announced on April 16, 2026, a campaign raising the rate to up to 30% (effectively from 693 yen a month) on May 1, and up to 20% off until September 3 on June 18, but the pricing and specifications page on October 13 showed no campaign prices for the Linux plans.
:::

:::guess
If the A8.net reward table remains built on the pre-revision prices, then, unlike friend referrals, which track the price, the payment per referral has stayed the same after the price rise, and the cost of referrals relative to revenue has fallen. On the other hand, when inventory is short, adding orders through referrals is not necessarily desirable, and cutting the campaign that doubled friend referral benefits short in July and stopping campaigns on the Linux plans appear to be decisions to turn down the tap on customer acquisition. That the Windows Server campaign still runs until November 19 hints that the Windows plans, which carry license fees on top, may differ from the Linux plans in inventory or profitability. Allowing resale, the API's agency code and ordering through the API are presumably mechanisms for bringing in, beyond individual customers, businesses that handle many servers at once as a sales channel.
:::

The entry points of XServer VPS, launched in 2022, are a 2 GB plan that cost 990 yen a month on a 36-month contract before the revision and game servers that come up the moment you sign up, and in 2026 it hands out even AI tools such as Claude Code and OpenClaw as images. That summer, rising equipment costs and more orders than expected reached users as a shrinking free tier, the end of the memory expansion and the campaigns, a price rise of roughly 20 to just over 30 percent (this site's calculation) and a pause in orders of nearly three weeks. The API and MCP server opened in the same period appear to be designed with even AI agents ordering amid fluctuating inventory in mind. When a VPS that makes low prices its banner finds it harder to compete on the price tag, the reasons it gets chosen next may shift toward procedures that agents can handle without hesitation and mechanisms that let you come back after a stop.
