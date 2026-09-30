---
service: "ConoHa WING"
title: "A Shared Server at ¥2.5 an Hour Greets AI Agents With an FTPS Tool That Cannot Delete — ConoHa WING Keeps Its VPS-Style Billing and a LiteSpeed-Backed \"Fastest in Japan\" Claim"
description: "ConoHa WING is the rental server GMO Internet launched in 2018. It lists hourly billing next to a 36-month prepaid \"WING Pack\" and claims the No. 1 server processing speed in Japan from its own h2load benchmark. This anatomy walks through the nginx-plus-Apache-plus-LiteSpeed LSAPI stack, Prime Strategy's WEXAL, the FTPS site-publishing skill released for AI coding agents, the unauthorized access and database outage of September 2026, the ¥11.5 billion first-half segment, and the affiliate rewards of up to ¥12,000 on A8.net and Moshimo Affiliate, drawing on the official site, notices and earnings materials."
lead: "\"Read ConoHa WING's SKILL.md and follow the instructions to set it up\" — as of September 30, 2026, the official page says that asking an AI coding agent exactly that is enough to start publishing to the server. What arrives is not an API or an MCP server, but an FTPS tool that runs on Python's standard library alone and a design that never includes delete. A shared server that grew out of an hourly-billed VPS enters its eighth year on a ¥649-a-month campaign and a \"fastest in Japan\" banner. This anatomy looks at the door it built for the age of AI agents."
category: dev-tool
tags: [hosting, wordpress, small-business, ai, php]
publishedAt: "2026-09-30"
updatedAt: "2026-09-30"
lastVerified: "2026-09-30"
serviceUrl: "https://www.conoha.jp/wing/"
# Affiliate link placeholder: the owner must join the ConoHa WING promotion on
# Moshimo Affiliate (the official affiliate page lists A8.net and Moshimo as the two ASPs,
# with rewards from 3,500 to 12,000 yen per contract by plan) before enabling this block.
# Do not use the customer referral URL (お客様紹介プログラム) here: the official FAQ says it
# cannot be combined with the ASP programs and both rewards may be lost.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://af.moshimo.com/af/c/click?a_id=<owner-id>&p_id=<program-id>&pc_id=<pc-id>&pl_id=<link-id>"
#   program: "ConoHa WING Affiliate Program (Moshimo Affiliate)"
vendor: "GMO Internet, Inc."
origin: "JP"
heroTheme: "conoha-wing"
scores: { product: 4.0, ux: 3.5, tech: 3.5, business: 4.0 }
techStack:
  - layer: "Web server"
    name: "nginx + Apache (.htaccess editable)"
    confidence: confirmed
    evidence: "The official feature and spec list names CloudLinux as the OS and Apache + nginx as the web server, and the top page says nginx was adopted for handling large numbers of simultaneous connections. Our own observation (2026-09-30) found the two customer sites shown in the official case studies resolving to www1182.conoha.ne.jp / www265.conoha.ne.jp and returning server: nginx with x-nginx-cache: HIT/MISS over HTTP/2"
    evidenceUrl: "https://www.conoha.jp/wing/function/"
  - layer: "PHP runtime"
    name: "LiteSpeed LSAPI + OPcache (PHP 7.0–8.4)"
    confidence: confirmed
    evidence: "The official feature list states that LiteSpeed LSAPI, described as 20% faster than conventional FastCGI, is the PHP application runtime; PHP can be switched from 7.0 to 8.4 and OPcache is available. The launch press release of 2018-09-26 already cited LiteSpeed LSAPI as the basis of the speed claim"
    evidenceUrl: "https://www.conoha.jp/wing/function/"
  - layer: "OS"
    name: "CloudLinux"
    confidence: confirmed
    evidence: "The official spec table lists CloudLinux as the OS. The same table calls the memory and vCPU figures guide values that are available up to the maximum when the shared server is not busy (the business plans guarantee resources instead)"
    evidenceUrl: "https://www.conoha.jp/wing/function/"
  - layer: "Storage"
    name: "All-SSD RAID10"
    confidence: confirmed
    evidence: "The official spec table lists SSD disks (500GB Basic, 600GB Standard, 700GB Premium) in a RAID10 configuration; the high-speed page calls it a pure-SSD RAID10 setup"
    evidenceUrl: "https://www.conoha.jp/wing/function/"
  - layer: "Database"
    name: "MySQL (5.0GB per database, phpMyAdmin)"
    confidence: confirmed
    evidence: "The official spec table lists MySQL with an unlimited number of databases, 5.0GB each, and phpMyAdmin as the admin tool. The September 2026 outage notice named the database host as mysql1045.conoha.ne.jp"
    evidenceUrl: "https://www.conoha.jp/wing/function/"
  - layer: "Content cache"
    name: "nginx proxy cache (in-house tuned)"
    confidence: likely
    evidence: "The official support guide says the content cache feature caches pages to speed up display, that dynamic pages are cached too, and that wp-admin is never cached. Our own observation (2026-09-30) found customer sites returning x-nginx-cache: MISS / HIT headers, which points to an nginx-side proxy cache. The company does not name the implementation"
    evidenceUrl: "https://support.conoha.jp/w/contentscache/"
  - layer: "Front-end acceleration"
    name: "WEXAL Page Speed Technology (Prime Strategy)"
    confidence: confirmed
    evidence: "The official WEXAL page states it is a WordPress acceleration engine from Prime Strategy, the first available on a shared rental server in Japan, and that subscribers can enable it from a control-panel switch at no extra charge. The feature list says the strategy AI David tunes page display to the browser and compresses images, JS and CSS"
    evidenceUrl: "https://www.conoha.jp/wing/function/wexal/"
  - layer: "Mail security"
    name: "Vade (anti-spam / anti-virus)"
    confidence: confirmed
    evidence: "The official spec table names Vade as the provider of virus checking and spam filtering"
    evidenceUrl: "https://www.conoha.jp/wing/function/"
  - layer: "AI agent integration"
    name: "ConoHa WING site publishing skill (SKILL.md + conoha-ftp.py, FTPS over Python stdlib)"
    confidence: confirmed
    evidence: "The official page states a site publishing skill is published for major AI coding agents including Claude Code, Cursor, Gemini CLI and Cline. SKILL.md is a two-file package (the document and the tool), requires only Python 3.8 or later, uses FTP_TLS only with no plaintext fallback, and excludes deletion, sync, .htaccess edits, WordPress, databases and SSH"
    evidenceUrl: "https://www.conoha.jp/function/skills/SKILL.md"
  - layer: "Official site delivery"
    name: "Cloudflare (www.conoha.jp / doc.conoha.jp)"
    confidence: likely
    evidence: "Our own observation (2026-09-30) found www.conoha.jp and doc.conoha.jp returning server: cloudflare and cf-ray headers. This concerns the marketing and documentation sites only; the servers hosting customer sites answered directly as www****.conoha.ne.jp without Cloudflare"
sources:
  - label: "ConoHa WING: Top page (Japanese; footnotes on the speed claim, uptime, prices)"
    url: "https://www.conoha.jp/wing/"
    accessedAt: "2026-09-30"
  - label: "ConoHa WING: High-speed performance (Japanese; h2load methodology, LiteSpeed LSAPI, SSD RAID10)"
    url: "https://www.conoha.jp/wing/function/highspeed/"
    accessedAt: "2026-09-30"
  - label: "ConoHa WING: Feature list and specs (Japanese; CloudLinux, Apache + nginx, MySQL, Vade, PHP versions)"
    url: "https://www.conoha.jp/wing/function/"
    accessedAt: "2026-09-30"
  - label: "ConoHa WING: Pricing (Japanese; WING Pack, pay-as-you-go, business plans)"
    url: "https://www.conoha.jp/wing/pricing/"
    accessedAt: "2026-09-30"
  - label: "ConoHa WING: Site publishing skill (Japanese; supported agents, Python 3.8, FAQ on deletion)"
    url: "https://www.conoha.jp/function/skills/"
    accessedAt: "2026-09-30"
  - label: "ConoHa WING: SKILL.md (Japanese; the site publishing skill document)"
    url: "https://www.conoha.jp/function/skills/SKILL.md"
    accessedAt: "2026-09-30"
  - label: "ConoHa WING: conoha-ftp.py (source of the FTPS tool, v1.0.3)"
    url: "https://www.conoha.jp/function/skills/conoha-ftp.py"
    accessedAt: "2026-09-30"
  - label: "ConoHa WING: WEXAL Page Speed Technology (Japanese)"
    url: "https://www.conoha.jp/wing/function/wexal/"
    accessedAt: "2026-09-30"
  - label: "ConoHa: ConoHa Pencil (Japanese; AI writing tool pricing)"
    url: "https://www.conoha.jp/function/conoha-pencil/"
    accessedAt: "2026-09-30"
  - label: "ConoHa WING support: Using the content cache (Japanese)"
    url: "https://support.conoha.jp/w/contentscache/"
    accessedAt: "2026-09-30"
  - label: "ConoHa: Company overview (Japanese; GMO Internet, Inc., ticker 4784, headcount)"
    url: "https://www.conoha.jp/company/"
    accessedAt: "2026-09-30"
  - label: "ConoHa: Service level agreement (Japanese)"
    url: "https://www.conoha.jp/sla/"
    accessedAt: "2026-09-30"
  - label: "ConoHa WING: Affiliate program (Japanese; rewards on A8.net and Moshimo Affiliate)"
    url: "https://www.conoha.jp/wing/affiliate/"
    accessedAt: "2026-09-30"
  - label: "ConoHa WING: Customer referral program (Japanese)"
    url: "https://www.conoha.jp/wing/introduction/"
    accessedAt: "2026-09-30"
  - label: "ConoHa: Partner program / reseller scheme (Japanese)"
    url: "https://www.conoha.jp/wing/partner/"
    accessedAt: "2026-09-30"
  - label: "ConoHa WING news: Apology and notice on unauthorized access to some hosting servers (Japanese; 2026-09-20)"
    url: "https://www.conoha.jp/wing/news/?ap=2015054834"
    accessedAt: "2026-09-30"
  - label: "ConoHa WING news: Recovery of the database connection failure on some hosts (Japanese; 2026-09-18)"
    url: "https://www.conoha.jp/wing/news/?ap=2015054832"
    accessedAt: "2026-09-30"
  - label: "ConoHa WING news: Temporary suspension of SSH over CVE-2026-43499 (Japanese; 2026-07-17)"
    url: "https://www.conoha.jp/wing/news/?ap=2015054705"
    accessedAt: "2026-09-30"
  - label: "ConoHa WING news: Warning on the WordPress vulnerability CVE-2026-87902 (Japanese; 2026-09-25, updated 9/29)"
    url: "https://www.conoha.jp/wing/news/?ap=2015054839"
    accessedAt: "2026-09-30"
  - label: "ConoHa WING news: New installs now offer WordPress 7.1 (Japanese; 2026-08-24)"
    url: "https://www.conoha.jp/wing/news/?ap=2015054764"
    accessedAt: "2026-09-30"
  - label: "ConoHa WING news: End of new sales of the SANGO and OLTANA themes (Japanese; 2026-07-30)"
    url: "https://www.conoha.jp/wing/news/?ap=2015054723"
    accessedAt: "2026-09-30"
  - label: "ConoHa WING news: ConoHa VPS added to the partner program (Japanese; 2026-07-16)"
    url: "https://www.conoha.jp/wing/news/?ap=2015054703"
    accessedAt: "2026-09-30"
  - label: "GMO Internet Group: Press release on the launch of ConoHa WING byGMO (Japanese; 2018-09-26)"
    url: "https://group.gmo/news/article/6167/"
    accessedAt: "2026-09-30"
  - label: "PR TIMES STORY: The ConoHa WING development story (Japanese; 2020-09-28, 230,000 accounts)"
    url: "https://prtimes.com/story/detail/e7bZlNSgzxK"
    accessedAt: "2026-09-30"
  - label: "GMO Internet, Inc.: FY2026 Q2 earnings presentation (Japanese)"
    url: "https://internet.gmo/pdf/presen/gmointernet_fy2026q2_j_presentation.pdf"
    accessedAt: "2026-09-30"
  - label: "GMO Internet, Inc.: ConoHa VPS launches a ChatGPT plugin (Japanese; 2026-09-01, Claude connector on August 12)"
    url: "https://internet.gmo/news/article/224/"
    accessedAt: "2026-09-30"
  - label: "W3Techs: Web hosting provider share among sites hosted in Japan"
    url: "https://w3techs.com/technologies/segmentation/sl-jp-/web_hosting"
    accessedAt: "2026-09-30"
---

When someone in Japan compares rental servers before starting a blog, ConoHa WING comes up next to [Xserver](/en/articles/xserver). It is run by GMO Internet, Inc., a company listed on the Tokyo Stock Exchange Prime market that also runs a domain registrar business and ConoHa VPS. Launched in 2018 under a "fastest in Japan" banner, the service still keeps hourly billing, a rarity among shared servers, while putting a ¥649-a-month figure from its 36-month prepaid "WING Pack" front and center. And in 2026 it opened a door for AI agents — through FTPS rather than an API.

## Service overview

ConoHa WING is a shared rental server: many subscribers split one machine. A contract bundles web space, mail, MySQL databases and free SSL, and WordPress can be installed at sign-up. The "ConoHa" brand was originally the name of a VPS; WING is the rental server added on top of it later. The same brand now covers the VPS, a game-server product called for GAME, the GPU image generator AI Canvas and the AI writing tool Pencil.

:::fact
According to the GMO Internet Group press release, ConoHa WING launched on September 26, 2018. It claimed "the fastest processing speed in Japan" from day one, based on comparing the average of five Apache Bench runs. Setup was free, there was no minimum term, and pricing started at ¥1,200 a month (before tax) or, on the Basic plan, ¥2.0 an hour. A PR TIMES STORY from September 2020 says development began in 2017, domain management arrived in September 2019, and the "WING Pack" bundling a server with a free domain arrived in early 2020, by which point ConoHa as a whole had passed 230,000 accounts.
:::

:::fact
According to the company overview on the official site, GMO Internet, Inc. was founded on September 8, 1999, trades as ticker 4784 on the TSE Prime market, has capital of ¥10.69 billion and is led by president and CEO Masashi Ito. Headcount at the end of June 2026 was 2,240 consolidated and 1,138 standalone, and the principal shareholder is GMO Internet Group, Inc. Its businesses are the infrastructure trio of domains, cloud and rental servers, and internet access, plus advertising and media. The FY2026 Q2 earnings presentation puts first-half revenue of the "domain and rental server business", which includes the GPU cloud, at ¥11.5 billion (+18.1% year on year) with operating profit of ¥3.10 billion (+73.6%), and the company's total domestic contracts at 13.7 million as of the end of June 2026.
:::

:::fact
The ConoHa WING top page carries three banners: "No. 1 server processing speed", "No. 1 domestic share" and "99.99% or higher uptime". Per the footnotes, the speed figure is an in-house survey from July 2026 comparing the average of five h2load and Apache Bench runs on the cheapest plan of the top ten services that together hold over 90% of the domestic market. The share figure comes from builtwith.com data for July 2026 and refers to GMO Internet Group as a whole. The uptime is the actual figure from July 1, 2025 to July 31, 2026 "where an outage is defined as a state in which the server is completely unreachable". W3Techs data checked by this site on September 30, 2026 shows XServer hosting 30.4% of websites with servers located in Japan, GMO Internet Group 25.8% and Sakura 19.0%. The W3Techs number is for the group; neither the company nor any third party publishes a share for ConoHa WING alone.
:::

:::pull
A VPS's hourly meter and a shared server's 36-month prepayment. ConoHa WING puts two opposite ways of charging on the same price list.
:::

::scorecard

## UX analysis

ConoHa WING's UX is built around one job: letting someone with no server knowledge publish WordPress in as little as ten minutes. In 2026 a deliberately narrow entrance for AI coding agents was added on top.

- **Fold WordPress into the sign-up.** "WordPress Easy Setup" acquires and configures the server, a domain, WordPress, a theme and SSL in one pass, and the company quotes "as little as 10 minutes". Moving from another host is "WordPress Easy Migration", cloning a live site to another domain is "WordPress Site Copy", and "WordPress Reset" returns a site to its initial state — features that follow a WordPress site through its whole life.
- **Lower the bar to trying it with hourly billing.** The pay-as-you-go "regular rate" is ¥2.5 an hour on Basic with a monthly cap of ¥1,452, and the pricing page says starting mid-month wastes nothing. The no-minimum-term promise belongs to this rate; the WING Pack has a three-month minimum and cannot be cancelled mid-term.
- **Make speed a switch.** The content cache can target "all content" or "static content only", and wp-admin is never cached whichever is chosen. The support guide also warns that dynamic pages get cached too. WEXAL is likewise enabled from a single switch under "Acceleration" in site management.
- **Put passkeys on the control panel.** The feature list says the in-house control panel supports passkey login with biometrics or a PIN. Monitoring sends mail or Slack alerts when CPU, memory or disk cross a threshold, and "auto plan upgrade", when on, moves the contract to the next plan automatically.
- **Decide what the AI agent cannot do first.** The site publishing skill's FAQ answers "no" to whether files can be deleted, explaining that deletion is hard to undo and was left out on purpose. Browser-based AI chats and phones are not supported; the skill is for desktop agents such as Claude Code, Cursor, Gemini CLI and Cline.

:::fact
SKILL.md is written as a document addressed to the AI agent. An agent handed the URL first saves SKILL.md and conoha-ftp.py under `~/.claude/skills/conoha-wing-hosting/`, checks for Python 3.8 or later, and builds the config file by asking the user for connection details in conversation. The document even scripts the agent's manner — "do not use technical terms", "ask the minimum, one question at a time", "make technical decisions quietly on our side" — and tells it to call `index.html` "the site's front page" and an overwrite a "swap". What it can do is list, download, upload, overwrite with approval, and publish a whole folder; what it will not do is delete, mirror, touch server-managed files such as .htaccess, build or run WordPress, operate databases, use SSH, or write outside `public_html/<domain>/`. The tool, conoha-ftp.py (v1.0.3), states in its header comments that it uses FTP_TLS only with no plaintext fallback, verifies certificates and hostnames, rejects `..` and absolute paths, overwrites in two stages (propose with --plan, then --execute --approved), and uploads to a temporary name before renaming.
:::

## Tech stack

::techstack

:::fact
According to the official feature and spec list, the OS is CloudLinux, the web server is Apache + nginx, the PHP runtime is LiteSpeed LSAPI, described as "20% faster than conventional FastCGI", PHP can be switched between 7.0 and 8.4, and OPcache and HTTP/2 are available. Storage is SSD in RAID10, the database is MySQL at 5.0GB per database, and mail virus checking and spam filtering come from Vade. The Basic plan is described as 6 vCPU cores and 8GB of memory as guide values, with a note that the maximum is available "when the shared server is not busy". The business plans go the other way: 2 vCPU cores and 1GB of memory on the entry plan as a "resource guarantee", figures reserved rather than estimated. Our own observation on September 30, 2026 found the two customer sites in the official case studies resolving to www1182.conoha.ne.jp and www265.conoha.ne.jp, answering over HTTP/2 with server: nginx and x-nginx-cache: HIT or MISS. WHOIS shows the IP ranges allocated to GMO Internet Group, Inc., under the network name "interQ", the group's former company name.
:::

:::guess
Put the x-nginx-cache header that customer sites return next to the company's line that nginx was adopted for handling large numbers of simultaneous connections, and the picture is a two-tier setup: nginx in front to serve the cache and absorb connections, Apache behind it to interpret .htaccess and run PHP through LiteSpeed LSAPI. Both services say "nginx + Apache", but [Xserver](/en/articles/xserver) explains that .htaccess keeps working under nginx, whereas ConoHa WING only lists .htaccess editing as a control-panel feature and does not say which layer interprets it.
:::

:::fact
WEXAL Page Speed Technology, per the official page, is a WordPress acceleration engine from Prime Strategy, the first to be offered on a shared rental server in Japan, available to ConoHa WING subscribers at no extra charge. The feature list says its strategy AI "David" tunes page display to the visitor's browser and compresses images, JavaScript and CSS; images are converted to WebP automatically for browsers that support it. Xserver, which partnered with the same Prime Strategy in 2021, announced the end of that technical partnership in June 2026.
:::

:::fact
From summer into autumn 2026, the official news feed carried a run of infrastructure notices. A follow-up on July 17 said SSH access had been suspended as a stopgap against a Linux kernel privilege-escalation vulnerability (CVE-2026-43499), to be restored after a maintenance window from 0:00 to 8:00 on July 21. From September 16 at around 14:35 until September 18 at around 1:55, the database host mysql1045.conoha.ne.jp was unreachable; the cause was a hardware failure, the suspect part was replaced, and data on the host was restored to its state at around 1:00–2:00 on September 16. Then on September 20 the company announced that a third party had gained unauthorized access to some hosting servers and planted malicious programs in the web space of 426 accounts. The timeline given is September 3 for the start of the intrusion, September 16 for detection and the start of the investigation, and September 18 for identifying the cause and scope and removing the programs. Member, contract and payment data are said to be held in a separate environment and not to have leaked, and affected customers were contacted individually by email. On September 25 the company warned about a WordPress core vulnerability (CVE-2026-87902, affecting 4.7.0 through 7.1.1), and on September 29 it updated the version installed by Easy Setup to the patched 7.1.2.
:::

:::guess
The September intrusion notice describes "malicious programs planted" in web space and says nothing about the entry route. Thirteen days undetected, and in the same month a hardware failure on a database host that caused roughly 35 hours of downtime and a rollback of about half a day of data — these are the weaknesses of shared hosting itself. Packing many subscribers onto one machine lowers cost, and it also means one host's failure or compromise reaches hundreds of sites. The "99.99% or higher uptime" on the top page defines an outage as complete unreachability, so hours with only the database down, or days with tampered files still serving, would appear to fall outside that definition.
:::

:::guess
Within GMO Internet, the shape of the AI-agent entrance differs by product. ConoHa VPS shipped a remote MCP server in July 2026, a Claude connector on August 12 and a ChatGPT plugin on September 1, letting agents start, stop, restart and reconfigure servers. What ConoHa WING published is far narrower: a skill that places static files over FTPS. On a shared server, whatever an API exposes is also the blast radius for other subscribers, and most users have no server expertise; the likely reasoning is to carve out only the operations that cannot break anything and ship those first. It is the opposite choice from Xserver, which opened WordPress installs and DNS through a REST API and an MCP server.
:::

## Business model

ConoHa WING earns from shared-server fees, and its pricing has two legs: the hourly "regular rate" and the prepaid long-term "WING Pack".

:::fact
According to the pricing page as of September 30, 2026, the regular rate is ¥2.5 an hour on Basic with a monthly cap of ¥1,452, ¥4.4 an hour on Standard capped at ¥2,640, and ¥8.8 an hour on Premium capped at ¥5,280 (all including tax). There is no setup fee and no free-domain benefit on this rate. The WING Pack is a long-term discount paid up front for the whole term: on a 36-month contract the monthly equivalent is ¥649 on Basic (55% off the regular rate), ¥1,925 on Standard and ¥3,850 on Premium, while a three-month contract on Basic is ¥1,331, only 8% off. The ¥649 figure is a campaign price for new sign-ups by 16:00 on October 7, 2026, and up to two domains stay free for as long as the contract runs (the second from eight TLDs: .online, .space, .website, .tech, .site, .fun, .tokyo and .shop). The WING Pack cannot be cancelled mid-term and is not available in monthly installments. The business plans, which guarantee memory and vCPU, are ¥1,331 a month on Biz Light (26% off the regular rate), ¥2,844 on Biz Standard and ¥5,687 on Biz Advance over 36 months, with regular rates of ¥3.1, ¥6.1 and ¥12.1 an hour. The discounts are smaller than on the personal plans; a three-month Biz Light contract is only 6% off. The SLA guarantees 99.99% monthly uptime, crediting 10% of the monthly fee as service credit below 99.99% and 30% below 99.9%.
:::

:::fact
Customer acquisition through referrals runs on three tracks, and the official affiliate page says they cannot be combined. ASP-based affiliation runs through two networks, A8.net and Moshimo Affiliate, with rewards per contract of ¥5,000 for a WING Pack Basic, ¥7,500 for Standard and ¥10,000 for Premium, or ¥3,500, ¥5,000 and ¥6,500 on the regular rate. When the AI writing tool ConoHa Pencil is ordered together with a WING Pack, the reward rises to ¥6,000–11,000 with Pencil Lite and ¥7,000–12,000 with Standard or Business. Business plans count only on contracts of 12 months or longer, and one need not be a ConoHa WING user to join. The subscriber "customer referral program" pays the referrer ¥5,000 and gives the referred customer ¥5,000 off the first payment on WING Packs of 12 months or longer, and the reward can be collected by bank transfer or in cash at Seven Bank ATMs and Lawson's Loppi terminals. The "partner program" for web agencies pays ¥5,000 on the first contract plus 15% on every renewal, and from July 16, 2026 it also covers ConoHa VPS bundles and KUSANAGI. ConoHa Pencil itself has four tiers, from a ¥0 Free plan through Lite at ¥770, Standard at ¥2,480 and Business at ¥8,980 a month, with the first month of Lite free when ordered with a new server.
:::

:::guess
The two rate types look like a way to sell one product to two audiences. Hourly billing is the design ConoHa carried over from its VPS days; it guarantees that trying and quitting is cheap and turns the absence of a minimum term into a point of difference. The 36-month WING Pack, by contrast, collects several years of revenue up front and cuts the number of moments at which a customer thinks about leaving. A discount as large as 55% works because the regular rate sits high: the "55% off the regular rate" label uses the hourly cap as its baseline. Since a shared server's cost per contract falls the longer subscribers stay, the likely structure is a wide door through hourly billing and retention locked in through prepayment.
:::

:::guess
The referral design turns bloggers into a sales channel. The rewards on Moshimo Affiliate and A8.net are flat amounts by plan, easy to handle for a blog that writes "how to choose a rental server". The bump for ordering ConoHa Pencil alongside gives writers a reason to recommend the AI writing tool, a funnel that appears designed to collect a monthly fee for both the server and the AI from the moment a blog starts. Ending sales of the SANGO and OLTANA themes in July 2026 while the top page keeps listing JIN:R and THE THOR at discounted prices reads as trimming the theme lineup while shifting the reward top-up toward the company's own AI tool. The partner program's 15% recurring share gives agencies income on every client renewal — the same mechanism as Xserver's reseller scheme, securing corporate sites' hosting through the agencies that build them.
:::

ConoHa WING is a service that kept hourly billing, unusual for shared hosting, held the "fastest in Japan" claim for eight years on LiteSpeed LSAPI and nginx, and turned everything from WordPress installation to acceleration into switches. From summer into autumn 2026 the weaknesses of shared hosting surfaced one after another: an SSH suspension, a failed database host, unauthorized access to 426 accounts. The AI-agent entrance it published in the same period was a narrow single lane over FTPS that touches neither deletion nor WordPress nor the database. On the VPS the company opened operations through MCP and connectors; on the shared server it hands over only what cannot be broken. Whether that line holds as the way to protect a ¥649-a-month home, or proves too narrow an entrance in an era when agents choose by the procedures they know, is the next contest.
