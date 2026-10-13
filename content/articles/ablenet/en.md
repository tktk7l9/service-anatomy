---
service: "ABLENET"
title: "Adding Memory to Its Four Main Windows Plans at Unchanged Prices, and Relaunching Its Linux Plans, as Component Costs Soared — Dissecting ABLENET, Which Sells a 24/7 Home for Automated FX Trading and a Place to Self-Host AI, and Took Its Service Brand as Its Company Name in October 2026"
description: "ABLENET is the service brand that a hosting company in Osaka, established in February 1998, has used for its VPS (virtual private server) and rental server services; on October 1, 2026, the operating company changed its trade name from 株式会社ケイアンドケイコーポレーション to ABLENET Inc. The VPS consists of seven plans with Windows Server installed (Win1 to Win7), advertised as ideal for running automated FX trading and MT4/MT5 around the clock, and eight Linux plans (L0 to L7) aimed at AI self-hosting and game servers; contracts run for up to 12 months, an \"introductory special price\" applies only to the first payment, and the 10-day free trial does not turn into a full contract automatically. In 2026, it relaunched its Linux plans on July 1, replacing V0 to V7 with L0 to L7 (the renewal price on annual payment is 47.4% to 61.7% lower than the old plans for L4 to L7, the plans with 10 GB of memory or more, by this site's calculation against the old-plan table on the pricing page), started an \"AI self-hosted VPS\" with a setup tool that installs Dify, n8n, Open WebUI and Claude Code, and in a July 29 notice, while referring to soaring procurement costs for components, announced that it had increased the memory of Win1 to Win4 and the virtual CPUs of Win4 without changing prices. Using the price tables, specifications, FAQ, terms of service, payment flow, the AI self-hosted VPS and its setup tool, campaigns, news and press releases, company profile, partner programs, the pricing pages of XServer VPS and ConoHa VPS, and this site's own observations, the article dissects what price tags and mechanisms a hosting company that advertises more than 28 years of operation uses to answer two kinds of demand: a resident home for automated FX trading and a place to put AI."
lead: "\"Even as procurement costs for components such as server equipment and memory soar worldwide, ABLENET VPS puts weight on being a Windows VPS that is easy for users to start and to keep using.\" — with these words on July 29, 2026, ABLENET announced that it had increased the memory of Win1 to Win4 and the virtual CPUs of Win4 while keeping the prices of its Windows plans unchanged. The same summer, its Linux plans were replaced with new L0 to L7 plans, and an \"AI self-hosted VPS\" for running AI apps on servers users manage themselves was added. Then on October 1, the operating company took \"ABLENET,\" the name it had long used as its service brand, as its company name. This article dissects, from public information alone, how a VPS that has been sold to users who want long-term stable operation of automated FX trading is pitching itself as a place to put AI, and what price tags it carries."
category: dev-tool
tags: [hosting, vps, small-business, ai, ai-agent, self-hosted, multiplayer]
publishedAt: "2026-10-13"
updatedAt: "2026-10-13"
lastVerified: "2026-10-13"
expires:
  - date: "2026-10-20"
    claim: "ABLENET VPS's summer switching campaign (the window for new orders ended on September 30; entries accepted until 17:00 on October 20) and the statements that rest on its page (the switching gift cards in the business model lead, the campaign page showing L2 with 6 GB of memory, and the claim that semiannual and annual payment are up to 19% and 29% cheaper)"
  - date: "2026-10-29"
    claim: "The ConoHa VPS Matome-Toku first-contract prices in the comparison table (campaign prices until October 29) and the calculations based on them"
  - date: "2026-11-19"
    claim: "The XServer VPS for Windows Server cashback in the comparison table (until 17:00 on November 19) and the calculations based on it"
serviceUrl: "https://www.ablenet.jp/"
# Affiliate link placeholder: ABLENET runs its VPS affiliate program through ValueCommerce or A8.net
# (https://www.ablenet.jp/partner/af_partner.html, checked 2026-10-13): up to 17,600 yen (tax included) per sale. The page
# names Win1-Win7 and V1-V7 as eligible (not yet the L0-L7 plans of 2026-07-01), counts only confirmed credit-card
# contracts (no convenience-store payments, trials or V0) and points to the ASP sites for current rewards and terms.
# Register free with A8.net or ValueCommerce (site review), search "ABLENET VPS" and apply (A8.net) or pick a material
# (ValueCommerce partners you automatically). No search-ad keyword or new-window rule is stated on the official pages;
# read the ASP's program terms first. The in-house Sales Partner program (https://www.ablenet.jp/partner/sale_partner.html:
# 1,048-16,500 yen (tax included) per new contract plus a yearly continuation commission) cannot be combined with it; the
# rental server program (https://www.ablenet.jp/rentalserver/partner/) pays up to 7,150 yen (tax included) via the same
# ASPs. The site also loads Moshimo Affiliate's tag (r.moshimo.com), but the official page names only ValueCommerce and
# A8.net. Use the ASP's ad code as provided: the link to affiliate.url, the 1x1 impression image to affiliate.impressionUrl,
# the text ad verbatim to affiliate.label. Keep every field identical in ja.md and en.md (parity.ts checks it). Never invent the label — ask the owner.
# affiliate:
#   url: "https://<a8-or-valuecommerce-link-for-ablenet-vps>"
#   program: "ABLENET VPS Affiliate Program (A8.net / ValueCommerce)"
#   impressionUrl: "https://<impression-pixel-of-that-link>"
#   label: "<verbatim text of the ad material>"
vendor: "ABLENET Inc."
origin: "JP"
heroTheme: "ablenet"
scores: { product: 3.5, ux: 3.0, tech: 3.0, business: 3.5 }
techStack:
  - layer: "Virtualization"
    name: "KVM"
    confidence: confirmed
    evidence: "The official FAQ (application questions, checked 2026-10-13) states about the VPS virtualization technology that \"we use KVM,\" and names handing over root (administrator) privileges as the biggest advantage of a VPS"
    evidenceUrl: "https://www.ablenet.jp/vps/faq/faq01.html"
  - layer: "Data center"
    name: "OPTAGE / IDCFrontier / NTT Communications (backbones of the Osaka data center)"
    confidence: confirmed
    evidence: "The official VPS specifications page (checked 2026-10-13) states that \"the data center is located in Osaka,\" that the backbone connects to three carriers, OPTAGE, IDCFrontier and NTT Communications, and that their backbones total more than 220 Gbps. It says the building has UPS/CVCF, emergency generators, batteries and air conditioning, and withstood the Great Hanshin earthquake"
    evidenceUrl: "https://www.ablenet.jp/vps/spec/"
  - layer: "Network"
    name: "IPv4 + IPv6 (200 Mbps shared line, best effort, unlimited transfer; IPv4 x1, IPv6 x65,536)"
    confidence: confirmed
    evidence: "The official VPS specifications page (checked 2026-10-13) states that every Windows and Linux plan has a \"200Mbps shared\" line, one IPv4 address, 65,536 IPv6 addresses and unlimited data transfer. The FAQ answers that the line is shared and best effort with no guaranteed bandwidth, and that no connection ports are restricted"
    evidenceUrl: "https://www.ablenet.jp/vps/spec/"
  - layer: "Storage and hardware"
    name: "RAID 10 / RAID 1 (SSD or HDD chosen at sign-up; CPU and memory models undisclosed)"
    confidence: confirmed
    evidence: "The hardware section of the official VPS specifications page (checked 2026-10-13) gives the CPU and memory as \"undisclosed,\" the main disk unit as a RAID subsystem (RAID-10, RAID-1) and the host OS as Linux. Each plan lists both SSD and HDD capacities (SSD only for 16 GB of memory and above), and the page says operation is monitored with SNMP and alarm notifications linked to mobile phones and email"
    evidenceUrl: "https://www.ablenet.jp/vps/spec/"
  - layer: "OS and templates"
    name: "Ubuntu / AlmaLinux / Rocky Linux / Oracle Linux / MIRACLE LINUX / CentOS Stream (initialization templates; Debian, FreeBSD and others via install media)"
    confidence: confirmed
    evidence: "The official VPS specifications page (checked 2026-10-13) lists, as templates for L0 to L7 that can be used immediately through \"initialization,\" Ubuntu Server 26.04/24.04/22.04 LTS, AlmaLinux, Rocky Linux and Oracle Linux (10/9/8), MIRACLE LINUX (9/8), CentOS Stream (10/9), game servers for Minecraft, Rust, Palworld, ARK, 7days and Valheim, and Ubuntu Desktop 22.04 with MT4/5 (each noted as \"requiring at least 1 GB of memory\" or \"for L2 and above,\" so the 0.5 GB L0 cannot use any of them as is), and states that Debian, Fedora, FreeBSD, NetBSD, OpenBSD and others can be installed from install media. There are 24 templates and 48 install-media images (this site's count)"
    evidenceUrl: "https://www.ablenet.jp/vps/spec/"
  - layer: "AI app setup"
    name: "Docker + Docker Compose + Let's Encrypt (setup-tool scripts for Dify / n8n / Open WebUI; Claude Code via its official installer)"
    confidence: confirmed
    evidence: "The official setup tool guide (checked 2026-10-13) states that the tool automatically installs Docker on the VPS, deploys each AI app, obtains an SSL certificate and issues an access URL, and that the certificate is issued with Let's Encrypt with automatic renewal set up. It says other apps can be added afterwards with Docker or Docker Compose, and gives the steps for installing Claude Code with the official install script (curl -fsSL https://claude.ai/install.sh | bash)"
    evidenceUrl: "https://www.ablenet.jp/ai/selfhost-vps/setup-tool/"
  - layer: "Windows"
    name: "Windows Server (2025 / 2022 / 2019 / 2016, 64-bit; RDS license per user)"
    confidence: confirmed
    evidence: "The official virtual desktop plan page (checked 2026-10-13) states that Win1 to Win7 offer Windows Server 2025, 2022, 2019 and 2016 (64-bit only) and that the version can be changed after sign-up by initializing. It says a Remote Desktop Services (RDS) license (1,320 yen a month) is required for each person who connects remotely for purposes other than administration, and that simultaneous connections are limited to two per server"
    evidenceUrl: "https://www.ablenet.jp/vps/service/vdp.html"
  - layer: "Rental server"
    name: "LiteSpeed (HTTP/3) + DirectAdmin + Imunify360 + Acronis Backup"
    confidence: confirmed
    evidence: "The official rental server features and specifications page (checked 2026-10-13) states LiteSpeed as the web server, HTTP/2 and HTTP/3 support, DirectAdmin as the control panel, imunify360 as the WAF, 14 days of automatic backups with Acronis Backup, all-SSD RAID10 and a data center in Osaka"
    evidenceUrl: "https://www.ablenet.jp/rentalserver/spec/"
  - layer: "Own website and control panel"
    name: "nginx (www.ablenet.jp) / Apache + PHP (vpsadm.ablenet.jp, ABLE Panel) / WHMCS (shared.ablenet.jp, panel.storage.ablenet.jp)"
    confidence: likely
    evidence: "This site's own observation (2026-10-13) found www.ablenet.jp returning server: nginx and HSTS over HTTP/2, and the VPS order form (/vps/order/index.cgi) setting a cookie named Apache. The ABLE Panel host vpsadm.ablenet.jp is an alias (CNAME) of vpsadm0.kk-net.ad.jp, and its HTTP/1.1 server header named Apache, CentOS, mod_fcgid and PHP. The rental server host shared.ablenet.jp and the storage host panel.storage.ablenet.jp set cookies whose names begin with WHMCS, so these two front doors appear to run on WHMCS"
sources:
  - label: "ABLENET official: Home page (news list)"
    url: "https://www.ablenet.jp/"
    accessedAt: "2026-10-13"
  - label: "ABLENET VPS official: Home page (plans, trial, reasons to choose)"
    url: "https://www.ablenet.jp/vps/"
    accessedAt: "2026-10-13"
  - label: "ABLENET VPS official: Pricing (introductory special prices and renewal prices, old VPS plan prices)"
    url: "https://www.ablenet.jp/vps/service/plan_fee.html"
    accessedAt: "2026-10-13"
  - label: "ABLENET VPS official: VPS specifications (OS, network, hardware)"
    url: "https://www.ablenet.jp/vps/spec/"
    accessedAt: "2026-10-13"
  - label: "ABLENET VPS official: Virtual desktop plans (Windows Server, RDS license, Office SAL)"
    url: "https://www.ablenet.jp/vps/service/vdp.html"
    accessedAt: "2026-10-13"
  - label: "ABLENET VPS official: Windows plan upgrade (more vCPUs and memory)"
    url: "https://www.ablenet.jp/vps/windows/"
    accessedAt: "2026-10-13"
  - label: "ABLENET VPS official: Resource changes (option prices)"
    url: "https://www.ablenet.jp/vps/spec/op_resource.html"
    accessedAt: "2026-10-13"
  - label: "ABLENET VPS official: Payment flow (trial, convenience-store payment)"
    url: "https://www.ablenet.jp/vps/payment.html"
    accessedAt: "2026-10-13"
  - label: "ABLENET VPS official: FAQ (application questions)"
    url: "https://www.ablenet.jp/vps/faq/faq01.html"
    accessedAt: "2026-10-13"
  - label: "ABLENET VPS official: FAQ (service questions)"
    url: "https://www.ablenet.jp/vps/faq/faq02.html"
    accessedAt: "2026-10-13"
  - label: "ABLENET VPS official: FAQ (contracts, cancellation, plan changes)"
    url: "https://www.ablenet.jp/vps/faq/faq04.html"
    accessedAt: "2026-10-13"
  - label: "ABLENET VPS official: ABLENET GAME (templates dedicated to game servers)"
    url: "https://www.ablenet.jp/vps/game/"
    accessedAt: "2026-10-13"
  - label: "ABLENET VPS official: Initial template Ubuntu Desktop 22.04 with MT4/5"
    url: "https://www.ablenet.jp/vps/spec/template_ubuntudesktop.html"
    accessedAt: "2026-10-13"
  - label: "ABLENET official: AI self-hosted VPS"
    url: "https://www.ablenet.jp/ai/selfhost-vps/"
    accessedAt: "2026-10-13"
  - label: "ABLENET official: AI self-hosted VPS setup tool guide"
    url: "https://www.ablenet.jp/ai/selfhost-vps/setup-tool/"
    accessedAt: "2026-10-13"
  - label: "ABLENET VPS official: Summer switching campaign (entries until 17:00 on October 20, 2026)"
    url: "https://www.ablenet.jp/vps/campaign/202607.html"
    accessedAt: "2026-10-13"
  - label: "ABLENET VPS official: VPS news (Linux plan renewal, Windows plan upgrade, convenience-store fee revision, price revisions)"
    url: "https://www.ablenet.jp/vps/news/"
    accessedAt: "2026-10-13"
  - label: "ABLENET official: News (change of company name and logo, 2026-10-01)"
    url: "https://www.ablenet.jp/news/"
    accessedAt: "2026-10-13"
  - label: "ABLENET official: Press releases (October 2022 to October 2026)"
    url: "https://www.ablenet.jp/company/press.html"
    accessedAt: "2026-10-13"
  - label: "ABLENET official: Company profile (notice under the Specified Commercial Transactions Act)"
    url: "https://www.ablenet.jp/company/profile.html"
    accessedAt: "2026-10-13"
  - label: "ABLENET official: Terms of service (VPS service terms)"
    url: "https://www.ablenet.jp/company/kiyaku.html"
    accessedAt: "2026-10-13"
  - label: "ABLENET official: Affiliate partners wanted (VPS)"
    url: "https://www.ablenet.jp/partner/af_partner.html"
    accessedAt: "2026-10-13"
  - label: "ABLENET official: Sales partners wanted (VPS)"
    url: "https://www.ablenet.jp/partner/sale_partner.html"
    accessedAt: "2026-10-13"
  - label: "ABLENET rental server official: Pricing"
    url: "https://www.ablenet.jp/rentalserver/plan/"
    accessedAt: "2026-10-13"
  - label: "ABLENET rental server official: Features and specifications"
    url: "https://www.ablenet.jp/rentalserver/spec/"
    accessedAt: "2026-10-13"
  - label: "ABLENET GPU official: Bare-metal servers with the H100"
    url: "https://www.ablenet.jp/gpu/h100.html"
    accessedAt: "2026-10-13"
  - label: "XServer VPS official: Pricing and specifications (price tables for first contracts and renewals)"
    url: "https://vps.xserver.ne.jp/price.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS official: Windows Server (pricing, licenses, cashback campaign)"
    url: "https://vps.xserver.ne.jp/windows-server.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS News: [Important] Revision of usage fees (2026-08-03, effective September 1)"
    url: "https://vps.xserver.ne.jp/support/news_detail.php?view_id=19107"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS official: Pricing and specs (hourly billing, Matome-Toku)"
    url: "https://vps.conoha.jp/pricing/"
    accessedAt: "2026-10-13"
---

ABLENET is the service brand that a hosting company in Osaka has long used for its rental servers and VPS (virtual private servers). On October 1, 2026, the operating company changed its trade name from 株式会社ケイアンドケイコーポレーション (abbreviated "K&K" in some of its press releases) to ABLENET Inc., bringing the brand and the company name together. The VPS has two banners: one is a Windows VPS for running automated FX trading on MT4/MT5 around the clock, and the other, launched in July 2026, is a Linux VPS for running AI tools such as Dify and Claude Code on servers that users manage themselves. This site has also dissected [XServer VPS](/en/articles/xserver-vps), [ConoHa VPS](/en/articles/conoha-vps) and [Sakura VPS](/en/articles/sakura-vps) in Japan, which can be read alongside this article when choosing where to host.

## Service overview

ABLENET's VPS has two lines: Windows plans (Win1 to Win7), delivered with Windows Server installed, and VPS plans for Linux (L0 to L7), on which users install the OS themselves; the old VPS plans (V0 to V7), which stopped taking new orders in July, are still provided to existing users. Under the same brand sit a rental server that uses LiteSpeed, bare-metal GPU servers with the NVIDIA H100, and cloud storage and security services for companies.

:::fact
According to the notice under the Specified Commercial Transactions Act in the company profile (checked 2026-10-13), the seller is ABLENET Inc., established in February 1998, with capital of 100 million yen, located in Naniwa Ward, Osaka, and notified as a telecommunications carrier under number E-9-1187. The overview section says the company began an in-house developed VPS hosting service in the 1990s, when commercial internet services in Japan had only just started. According to the news page, its former trade name was 株式会社ケイアンドケイコーポレーション; on October 1, 2026 it changed its trade name and unified the company name with "ABLENET," which it had used as its service brand. The same notice says it will strengthen "ABLENET SECURITY" and "ABLENET Storage" for companies and plan and develop new services in AI, and that the change of trade name and logo brings no change to existing contracts or services. According to the list of press releases, on September 30, 2022 the company received a majority investment through an SPC (special purpose company) of a fund run by the investment firm MSD (MSD企業投資株式会社); in March 2023 it relaunched its shared servers as "ABLENET Rental Server" using LiteSpeed; in November 2024 it added bare-metal servers with the NVIDIA H100 to its GPU service; and it launched cloud storage for companies in December 2025 and a security service for companies in September 2026. The VPS home page says the company has provided rental server and hosting services for more than 28 years, and the AI self-hosted VPS page advertises "a track record of about 190,000 cumulative VPS contracts." The FAQ on contracts answers that the company holds ISMS (ISO27001) certification.
:::

:::fact
According to the pricing page (checked 2026-10-13, tax included), the VPS plans for Linux are L0 (1 virtual core, 0.5 GB of memory, 30 GB SSD), L1 (2 cores, 2 GB, 40 GB), L2 (3 cores, 4 GB, 80 GB), L3 (4 cores, 8 GB, 160 GB), L4 (5 cores, 10 GB, 200 GB), L5 (8 cores, 16 GB, 300 GB), L6 (10 cores, 32 GB, 500 GB) and L7 (12 cores, 64 GB, 800 GB), and L0 to L4 can also be ordered with HDDs. On annual payment, the monthly equivalent runs from 554 yen for L0 to 23,328 yen for L7 at the introductory special price and from 554 to 25,920 yen at the renewal price, and monthly payment runs from 783 to 29,440 yen. The seven Windows plans are Win1 (2 cores, 2 GB, 60 GB SSD), Win2 (3 cores, 3.5 GB, 120 GB), Win3 (4 cores, 6 GB, 150 GB), Win4 (8 cores, 10 GB, 150 GB), Win5 (8 cores, 16 GB), Win6 (10 cores, 32 GB) and Win7 (12 cores, 64 GB) (the memory of Win1 to Win4 and the virtual CPUs of Win4 are the "increased" values, and Win5 to Win7 have 150 GB of SSD), and on annual payment the monthly equivalent runs from 1,587 to 56,550 yen at the introductory special price and from 2,208 to 62,205 yen at the renewal price. The introductory special price applies only to the first payment at contract, and for monthly payment the page notes that "the renewal price applies from the renewal two months later." The setup fee is 0 yen except for 1,130 yen on L0, and the VPS home page says the fee for the month of application is free and the first usage fee is billed from the following month. According to the payment flow page, payment is by credit card (monthly, semiannual or annual) or at a convenience store (semiannual or annual, with a 250 yen fee), and no receipts or invoices are issued. According to the VPS news, the convenience-store fee was revised from 176 yen to 250 yen (tax included) for payment slips issued from August 3, 2026. The FAQ answers that fees already paid are not refunded, that canceling midway brings no refund for the remaining period, and that no cancellation penalty is charged. According to the virtual desktop plan page, the RDS license required for each person who connects remotely for purposes other than administration costs 1,320 yen a month and the Microsoft Office SAL 3,360 yen a month, and according to the resource change page, adding 512 MB of memory, one virtual core, 10 GB of HDD or one IPv4 address costs 550 yen a month each. According to the rental server pricing page, the three plans are Light (6 vCPU cores, 8 GB of memory, 300 GB SSD), Standard (8 cores, 12 GB, 400 GB) and Premium (10 cores, 16 GB, 500 GB), at 970, 1,430 and 3,300 yen on monthly payment and 485, 715 and 1,650 yen a month on a three-year payment, with "various credit cards" given as the payment method, and the features and specifications page advertises a 30-day money-back guarantee (domains and monthly payment excluded). On the GPU side, a bare-metal server with one H100 PCIe costs 498,000 yen a month plus a 100,000 yen setup fee, with a minimum term of six months.
:::

:::pull
As component procurement costs soared, the Windows VPS kept its prices and gained memory on its four main plans, and the Linux VPS was relaunched as the new L0 to L7.
:::

::scorecard

## UX analysis

The ABLENET VPS experience is built on two things: lowering the threshold for trying it out, and leaving what runs on the server to the user. Plan changes and DNS edits go through inquiries and quotation exchanges, and some numbers and wording differ from page to page.

- **The trial lasts 10 days, and leaving it alone does not make it a contract.** The VPS home page describes the 10-day free trial with "it doesn't switch over automatically, so there's no worry about forgetting to cancel." According to the payment flow page, credit card payers are not charged during the trial (with a debit card, the amount is withdrawn from the account when the trial is applied for); they choose "move to full contract" or "cancel" under "End trial" in the ABLE Panel (the control panel), and if they do neither, the trial ends and the server is discontinued. According to the FAQ, the trial is limited to one per contracting customer and comes with no functional limits in the same environment as a full contract, and the home page says the trial setup carries over as is into the full contract. Because the usage fee is counted from the month after the month of application, the home page advertises the month of application as free. For convenience-store payers, the trial lasts until the payment slip's deadline (10 days after the application date).
- **One price tag for the first payment, another after renewal.** The pricing page lists an "introductory special price" and a "renewal price" for each plan. Comparing annual totals, the renewal price is 38.4% to 46.1% higher than the introductory special price on Win1 to Win4, 10.0% to 10.5% higher on Win5 to Win7, 16.7% higher on L1 and 5.3% to 11.1% higher on L2 to L7, with no change on L0 (this site's calculation). Contracts run for up to 12 months and renew automatically unless the customer asks to cancel. According to the FAQ on contracts, a customer who does not want to renew must apply for cancellation by the last day of the month before the month in which the VPS expires, and after that the fee for the following month is charged. Renewals on card payment are charged on the first business day of the month after expiry.
- **Windows for automated FX trading, Linux for games and automation.** The VPS home page calls the Windows plans "ideal for automated FX trading and stable 24-hour operation of MT4/MT5," and lists AI self-hosting, Docker, VPN, game servers, website operation and development environments as uses of the Linux plans. On Windows, using applications such as MT4 through the desktop requires an RDS license (one license covers a single user regardless of how many VPS they have), and remote desktop is limited to two simultaneous connections per server. The Windows plan upgrade page recommends Win4 or above for running ten or more EAs at once or for running several MT4/MT5 instances with accounts at multiple brokers. According to the ABLENET GAME page, initializing with a template dedicated to a game server brings up a multiplayer server on L1 or above for Minecraft and Valheim and on L2 or above for Palworld, Rust, ARK and 7 Days to Die, and the server can be reinitialized with another game's template once the user stops playing. As for the Ubuntu Desktop template that runs MT4/5 under Wine, the specifications page lists it in the template table for L0 to L7 with a note that it needs at least 1 GB of memory (so the 0.5 GB L0 cannot use it as is), and the FAQ likewise points to L1 to L7, while the template's own page names V1 to V7 as the eligible plans and displays "New applications are currently suspended."
- **AI apps come up with just a command, but protecting them is up to you.** The AI self-hosted VPS page relists L2 to L7 under names from "AI Start" to "AI Enterprise," and notes that, as the configuration has no GPU, large-scale LLM inference is out of scope. According to the setup tool guide, the user initializes the server in the ABLE Panel with a boot image such as "Ubuntu 24.04 LTS with Dify," logs in over SSH and runs the command for the app, and Docker installation, app deployment, an SSL certificate from Let's Encrypt and an access URL then follow automatically. The same page, however, says that the tool deploys apps publicly on the internet and does not automatically restrict the ports reachable from outside, recommends exposing nothing but ports 22, 80 and 443, and says the company cannot take responsibility for unauthorized access or leaked API keys caused by misconfiguration. On running several apps, the comparison table on the AI self-hosted VPS page says "Dify, n8n, WebUI and others can share one server," while the setup tool FAQ answers that the tool is meant for installing one AI app and is not designed for adding other apps later. Users can add other apps themselves with Docker or Docker Compose, but configuring them to coexist and troubleshooting are not supported, and the FAQ recommends a separate VPS for each app for first-time users or when stable operation matters.
- **Backups are up to the user, and support and paperwork go by email.** According to the FAQ on the service, the host servers are made redundant with RAID and backed up regularly, but those backups are not for restoring data lost through the user's own mistakes, and the company does not recover deleted data. Monitoring stops at the host servers; individual VPS and intrusions are not monitored. The specifications page gives support as email only, on weekdays from 9:00 to 17:45, and says the company does not support environments users build, their OS or their applications. Users cannot edit DNS directly and ask through the inquiry form in the ABLE Panel. A plan change works by replying with approval to a quotation email, costs a 1,100 yen fee plus the price difference for the remaining period, is carried out on weekdays from 10:00 to 12:00 and 13:30 to 16:00, and wipes the data in cases such as changes that shrink the disk or moves between Windows and Linux. There is no local network between VPS; they communicate only over global IP addresses.
- **Numbers and wording differ from page to page.** The VPS home page promises "no lock-in such as a three-month minimum usage period on monthly contracts," and the FAQ also answers that "there is no minimum usage period." Article 16 of the VPS service terms, on the other hand, sets the minimum usage period as running to the end of the month one month later for monthly payment and six or twelve months later for semiannual and annual payment, and says that canceling within it means paying the fees for the remaining period as a penalty. The summer switching campaign page shows L2 with 6 GB of memory, while the pricing and specifications pages give 4 GB. The VPS home page advertises "uptime of 99.99% or more," but the terms of service this site checked contain no article guaranteeing uptime, and Article 32 provides for damages, on the customer's claim and capped at the fees for the period the service was unusable, only when the service is completely unusable for more than half a month through the company's intent or gross negligence, and says the right is lost unless it is claimed in writing within 30 days of the first day a claim could be made. Before signing up, it is worth checking which page's wording applies to your own contract.

## Tech stack

::techstack

:::fact
According to the FAQ (checked 2026-10-13), the VPS is virtualized with KVM, and the company manages the hosts (hypervisors). The specifications page puts the data center in Osaka and describes it as the only place outside Tokyo where Tier 1/2 ISPs from Japan and abroad and overseas lines are concentrated. The backbone connects to three carriers, OPTAGE, IDCFrontier and NTT Communications, whose backbones total more than 220 Gbps. Every plan has a "200Mbps shared" line, one IPv4 address, 65,536 IPv6 addresses and unlimited data transfer, and the FAQ answers that bandwidth is not guaranteed and that no ports are restricted. The hardware section gives the CPU and memory as "undisclosed" and the main disk unit as a RAID subsystem of RAID-10 and RAID-1, and says host operation is monitored with SNMP and alarm notifications linked to mobile phones and email, with failures other than hardware faults recovered by an automatic self-recovery function. L0 to L7 are handed over empty, with no OS installed, and the OS is installed from an "initialization" template or by "booting from CD-ROM." The templates are 24 in all: Ubuntu Server 26.04/24.04/22.04 LTS, AlmaLinux, Rocky Linux and Oracle Linux 10/9/8, MIRACLE LINUX 9/8, CentOS Stream 10/9, game servers for Minecraft (Java and Bedrock editions), Rust, Palworld, ARK, 7days and Valheim, and Ubuntu Desktop 22.04 with MT4/5; the install media are 48, ranging from CentOS 7.9, Ubuntu Server 14.04 LTS (including i386) and Debian 7 to Ubuntu Server 26.04 LTS, FreeBSD 15.1, NetBSD, OpenBSD, DragonFly BSD, OpenIndiana and SystemRescueCd (the counts are this site's own). Every template carries the note "requires at least 1 GB of memory" or "for L2 and above," so the 0.5 GB L0 cannot use the templates without a memory add-on (according to the resource change page, L0's memory can be raised to at most 1 GB). According to the VPS news, in 2026 installation became available for Ubuntu Server 26.04 LTS on June 11, AlmaLinux 10.2 and openSUSE Leap 16.0 on June 16, and FreeBSD 15.1 and NetBSD 10.1 among others on June 22. Each VPS gets a host name under "ablenetvps.ne.jp," and reverse DNS can be changed only for IPv4 addresses (FAQ). The specifications and FAQ pages this site checked contained no mention of an API for operating the VPS from external programs.
:::

:::fact
This site's own observation (2026-10-13) found www.ablenet.jp returning server: nginx, HSTS (max-age=15552000) and an alt-svc header advertising HTTP/3 over HTTP/2, and the VPS order form (/vps/order/index.cgi) setting a cookie named Apache. The ABLE Panel host vpsadm.ablenet.jp is an alias (CNAME) of vpsadm0.kk-net.ad.jp, and its HTTP/1.1 server header named Apache, CentOS, mod_fcgid and PHP. The front door for ordering and managing the rental server, shared.ablenet.jp, and the storage host panel.storage.ablenet.jp both named Apache and AlmaLinux in their server headers and set cookies whose names begin with WHMCS. The name servers of ablenet.jp were ns.kk-ca.net and ns2.kk-ca.net. The HTML of the VPS home page loaded jQuery 3.7.1, the Google tag and the older analytics.js, Meta Pixel, LINE Tag, Microsoft UET, Yahoo! ad tags, Moshimo Affiliate's tag and the company's own chatbot (chatbot.ablenet.jp). The payment flow page says card statements show the merchant as "ABLENET," "エイブルネット," "ケイアンドケイコーポレーション" or "KK-NET." The rental server features and specifications page gives LiteSpeed (with HTTP/2 and HTTP/3) as the web server, DirectAdmin as the control panel and imunify360 as the WAF, takes 14 days of automatic backups with Acronis Backup, uses all-SSD RAID10, and puts the data center in Osaka.
:::

:::guess
Given that the VPS order form's URL ends in index.cgi and that the ABLE Panel host carries a kk-net.ad.jp name, which appears to derive from the former trade name, the VPS is presumably sold on in-house systems the company has kept using since the days of its former name. That "KK-NET" appears on card statements also appears to show the same name surviving in the contract and billing systems. Meanwhile, given the cookies with WHMCS in their names on the front doors of the rental server relaunched in 2023 and the storage service started in 2025, newer services appear to take orders and be managed through a system separate from the VPS. The cookie named Apache on www.ablenet.jp appears to point to Apache responding behind nginx. Keeping the CPU and memory models undisclosed and providing a 200 Mbps shared line reads as a way of selling on memory, price tag and ease of trial rather than on hardware generation. Together with the absence of any mention of an API, the AI self-hosted VPS is presumably being pitched less as something AI agents operate and more as a place where AI tools are put and kept running.
:::

## Lining up 2 GB price tags against XServer VPS and ConoHa VPS

:::fact
According to the VPS news (checked 2026-10-13), on July 1, 2026 ABLENET replaced its Linux plans V0 to V7 with L0 to L7, explaining that "we have revised the specifications and pricing so that the plans can be used at more reasonable prices." Compared with the table that opens when you press "See old VPS plan prices" on the pricing page, the renewal price on annual payment is the same for L1 as for V1 (1.5 GB of memory) but with 2 GB of memory, the same for L2 as for V2 (2.5 GB) but with 4 GB, 30.1% lower for L3 than for V3, and 47.4% to 61.7% lower for L4 to L7 than for V4 to V7 (this site's calculation). The July 29 notice, while referring to soaring component procurement costs, announced that the memory of Win1 to Win4 and the virtual CPUs of Win4 (from 5 cores to 8) had been increased with prices unchanged (the Win4 vCPU increase had already been announced in a July 10 notice as a "Win4 CPU increase campaign"). According to the Windows plan upgrade page, memory went from 1 GB to 2 GB on Win1 and from 8 GB to 10 GB on Win4, and no end date has been set for the increase. Meanwhile, an XServer VPS notice (August 3, 2026), citing sharply soaring equipment procurement costs, revised the prices of every plan on September 1, and the 2 GB plan on a 12-month contract went from 1,170 to 1,540 yen a month. Lining up the 2 GB plans on each company's pricing page on October 13, 2026 (all tax included) gives the table below. The XServer VPS for Windows Server page shows a single price table that does not separate first contracts from renewals, offers new contracts of 12 months or more made by 17:00 on November 19, 2026 cashback of up to 30% of the monthly fee (20% for 12 months), and prices the Remote Desktop SAL at 1,210 yen a month. The ConoHa VPS pricing page gives Matome-Toku first-contract prices as campaign prices until October 29, 2026, and prices the 2 GB plan on hourly billing at 3.7 yen an hour, capped at 2,033 yen a month.
:::

| 2 GB plan (tax included) | Virtual CPUs, disk, line | Monthly price on a 12-month contract (first) | Monthly price on a 12-month contract (renewal) | Monthly price on a 1-month contract (first / renewal) |
| --- | --- | --- | --- | --- |
| ABLENET L1 (Linux) | 2 cores, 40 GB SSD, 200 Mbps shared | 968 yen | 1,130 yen | 1,234 yen / 1,476 yen |
| XServer VPS 2GB (Linux) | 3 cores, 50 GB NVMe SSD, 10 Gbps shared (up to 100 Mbps per contract) | 1,540 yen | 1,540 yen | 1,980 yen / 1,980 yen |
| ConoHa VPS 2GB (Linux) | 3 cores, 100 GB SSD, 50 Gbps shared (limited to 100 Mbps) | 774 yen (campaign price) | 980 yen | 1,007 yen (campaign price) / 1,259 yen |
| ABLENET Win1 (Windows) | 2 cores, 60 GB SSD, 200 Mbps shared | 1,587 yen | 2,208 yen | 1,931 yen / 2,732 yen |
| XServer VPS for Windows Server 2GB | 3 cores, 100 GB NVMe SSD, 10 Gbps shared (limited to 200 Mbps) | 2,500 yen (effectively 2,000 yen after cashback) | Not distinguished (single price table) | 2,740 yen |

The amounts in the table come from each company's pricing page (ABLENET's 12-month contract is annual payment, and ConoHa VPS's is Matome-Toku). Among the 2 GB plans, ABLENET's L1 has one fewer virtual core and a smaller disk than XServer VPS and ConoHa VPS. The 12-month total is 11,616 yen at first and 13,552 yen after renewal for ABLENET's L1 (pricing page) and 18,480 yen for XServer VPS's 2 GB plan (monthly price × 12, this site's calculation), so L1 is 37.1% cheaper than XServer VPS at first and 26.7% cheaper after renewal, while the 12-month monthly price of ConoHa VPS's 2 GB plan (774 yen at first, 980 yen at renewal) is below L1's monthly equivalent (this site's calculation). For one person using MT4 or similar on Windows, the monthly equivalent including one license is 2,907 yen at first and 3,528 yen after renewal for ABLENET's Win1, and 3,710 yen (effectively 3,210 yen after cashback) for the 2 GB plan of XServer VPS for Windows Server (this site's calculation).

:::guess
Given that the largest price cuts in July's relaunch fell on the plans with 10 GB or more, and that the setup tool guide recommends L4 (10 GB) or above when in doubt, ABLENET appears to have gone after price competitiveness on the larger-memory plans needed to keep AI apps running continuously. On Windows, the step-up to the renewal price is large, 38% to 46% on the widely used Win1 to Win4 (this site's calculation), which can be read as a design that draws switchers with the first price tag and recovers revenue per customer at renewal, but even at the renewal price, Win1's annual payment stays below the 12-month monthly price of XServer VPS for Windows Server. Facing the same soaring procurement costs for components and equipment, XServer VPS raised its price tags while ABLENET explained that it kept its Windows price tags and raised specifications, but because ABLENET does not disclose its CPU and memory models, public information does not reveal what kind of equipment the added memory runs on.
:::

## Business model

The business centers on VPS and rental server fees received in advance (for up to 12 months on the VPS and up to three years on the rental server), topped by RDS licenses, Office licenses, added resources, domains and SSL, and convenience-store payment fees. Winning customers is left to the first-payment special price, the 10-day trial, gift cards for switching from other providers (a summer 2026 campaign whose window for new orders closed on September 30, with only entries accepted until 17:00 on October 20), and two kinds of partner programs.

:::fact
According to the affiliate partner page (checked 2026-10-13), the ASP is ValueCommerce or A8.net, the reward is up to 17,600 yen (tax included) per contract, the eligible plans are listed as Win1–Win7 and V1–V7, a contract becomes eligible once a credit-card payment is confirmed, convenience-store contracts, trials and the V0 plan are excluded, partners are asked to check the latest rewards on each ASP's site, and joining as both an affiliate partner and a sales partner, who contracts directly with the company, is not allowed. According to the sales partner page, sales partners only introduce the VPS and broker orders while the company collects fees and supports customers; the new-contract reward runs from 1,048 yen for L0 to 16,500 yen for Win5 to Win7, a continuation reward (such as 1,571 yen for L1 and 3,850 yen for Win1) is paid for every year the referred customer stays (all rewards tax included), at least 30 days of use is required, and a sales partner's own contracts are excluded. According to the summer switching campaign page, people who newly ordered a VPS between July 10 and September 30, 2026 and were using, or had left, another provider's VPS, an AI app cloud, a public cloud, a dedicated server, an on-premises server or a VPN receive 1,130 to 40,000 yen in Amazon digital gift cards depending on plan and contract term (monthly payers must keep using the service for four months or more). The page displays "The application period for VPS orders has ended," and only entries, accepted until 17:00 on October 20, remain open. The same page says that at the introductory special price, the monthly equivalent is up to 19% cheaper on semiannual payment and up to 29% cheaper on annual payment than on monthly payment (both for L2). The FAQ on applications covers proxy orders and VPS resale on the condition that the contract and support exist only between the company and the contracting customer, and the rental server features and specifications page marks resale with a circle (allowed).
:::

:::guess
Paying sales partners not just once per new contract but for every year a customer stays appears to be a design in which referrers who bring customers that keep their contracts for a long time accumulate more rewards. Limiting affiliate rewards to confirmed credit-card payments and excluding convenience-store payments and trials reads as a decision to concentrate referral costs on contracts whose payment is settled and that renew automatically more easily. As a company, after the 2022 investment from a fund, it has expanded into a relaunched rental server, GPUs, storage and security, and in October said it would push into the corporate market under a company name matching its brand. Keeping VPS price tags unchanged or lowering them while offering gift cards for switching over the summer is presumably aimed at adding customers on the VPS it has long sold while widening the door to its new services for companies. However, the only figure indicating scale that this site found on the official pages is roughly the "track record of about 190,000 cumulative VPS contracts," and how the price changes have shown up in customer numbers or revenue cannot be read from it.
:::

The ABLENET name, used for rental servers and VPS by an Osaka company established in 1998, became the company name in October 2026. On the foundation of a VPS sold as a place to run MT4/MT5 on Windows around the clock, it added a second banner as a place to run Dify and Claude Code on Linux, and as component procurement costs soared, it kept the prices of its four main Windows plans while adding memory to them and relaunched its Linux plans as new plans that promise "more reasonable prices." The 10-day trial that does not turn into a contract on its own and the special price for the first payment put ease of trial up front, but protecting the server remains with the user, and procedures such as plan changes remain an exchange of emails. Once it has gathered customers who want to run AI on their own servers, how much of that operation it takes on may be what sets its next price tags.
