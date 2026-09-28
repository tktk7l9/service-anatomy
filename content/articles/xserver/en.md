---
service: "Xserver"
title: "A Shared Server From an Effective ¥495 a Month Opens Up to AI Agents — Xserver Is Rebuilding Japan's Biggest WordPress Home, 30% of the Market, Around an API and MCP"
description: "Xserver is the rental server that claims the No. 1 share in Japan. It started in Osaka in 2003 and has grown to 2.5 million hosted sites and ¥8.35 billion in revenue, and in 2026 this veteran of shared hosting shipped a REST API, a CLI, and an official MCP server in quick succession. A dissection — from official news posts, manuals, and company pages — of a web server that runs nginx alongside Apache, new machines with 5th-gen EPYC and NVMe, the acquisition of the free Cocoon theme business, prepaid long-term pricing, and flat A8.net rewards next to a 20% friend-referral program."
lead: "\"Add the domain example.com and install WordPress\" — in May 2026, Xserver wrote in an official announcement that asking an AI assistant exactly that is now enough to configure a server. The company that claims the No. 1 share in Japan and has become a default home for WordPress sites, on shared servers that cost as little as an effective ¥495 a month during the current campaign, has opened API and MCP doors next to its control panel. This is a dissection of how a 23-year-old shared hosting business is built and how it makes money."
category: dev-tool
tags: [hosting, wordpress, api, mcp, small-business]
publishedAt: "2026-09-28"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://www.xserver.ne.jp/"
# Affiliate link placeholder: the owner must join the Xserver program on A8.net
# (see https://www.xserver.ne.jp/affiliate.php — flat reward per contract by plan) before enabling this block.
# Do not use the "friend referral" URL here: its terms forbid spreading the link to an
# unspecified audience on blogs or social media, and it cannot be combined with an ASP.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<xserver-a8-tracking-link>"
#   program: "Xserver Affiliate Program (A8.net)"
vendor: "XServer Inc."
origin: "JP"
heroTheme: "xserver"
scores: { product: 4.0, ux: 4.0, tech: 3.5, business: 4.5 }
techStack:
  - layer: "Web server"
    name: "nginx + Apache 2.4 (.htaccess compatible)"
    confidence: confirmed
    evidence: "The official spec list names the web server as \"apache 2.4.x, nginx\". The nginx manual page says .htaccess files written for Apache work as-is under nginx. In our own observation (2026-09-28), shared server hostnames such as sv13001.xserver.jp answered over HTTP/2 with server: nginx"
    evidenceUrl: "https://www.xserver.ne.jp/manual/man_server_spec.php"
  - layer: "Server hardware"
    name: "AMD EPYC (5th gen) / all-NVMe RAID10"
    confidence: confirmed
    evidence: "An official news post (2026-03-27) states that newly ordered servers use 5th-gen EPYC with up to about 40% more CPU performance than before, and that memory per machine grew from 1.5TB to 2.3TB. The spec list gives the RAID layout as RAID10"
    evidenceUrl: "https://www.xserver.ne.jp/news_detail.php?view_id=17933"
  - layer: "Database"
    name: "MariaDB 10.11"
    confidence: confirmed
    evidence: "An official news post (2026-05-11) states that new servers switched from MariaDB 10.5 to 10.11 (LTS), and that servers issued since June 2024 would be upgraded in stages from June 2026"
    evidenceUrl: "https://www.xserver.ne.jp/news_detail.php?view_id=18377"
  - layer: "Acceleration"
    name: "X Accelerator / XPageSpeed (in-house)"
    confidence: confirmed
    evidence: "The official manual states that Ver.1 caches static files on the server for two minutes and Ver.2 also speeds up PHP execution. It publishes the bypass rules too, such as logged-in WordPress cookies and /wp-admin/"
    evidenceUrl: "https://www.xserver.ne.jp/manual/man_server_xaccelerator.php"
  - layer: "Public API"
    name: "XServer API (REST, scoped API keys)"
    confidence: confirmed
    evidence: "An official news post (2026-04-16) opened the main control-panel operations as a REST API. The manual documents per-key permissions (all, read-only, custom), IP restrictions, and per-plan rate limits (60 requests a minute and 10,000 a day on Standard)"
    evidenceUrl: "https://www.xserver.ne.jp/manual/man_tool_api.php"
  - layer: "AI agent integration"
    name: "XServer MCP Server (npm: xserver-mcp / remote OAuth at api.xserver.ne.jp/mcp)"
    confidence: confirmed
    evidence: "An official news post (2026-05-12) launched the MCP server and CLI. The manual for the remote version says to add https://api.xserver.ne.jp/mcp as a Claude connector, log in to an XServer account, and approve the scope. The xserver-mcp package on npm is MIT-licensed and maintained by developer@xserver.co.jp"
    evidenceUrl: "https://www.xserver.ne.jp/manual/man_tool_mcp_remote.php"
  - layer: "CLI"
    name: "XServer CLI (Node.js 18+)"
    confidence: confirmed
    evidence: "The official manual describes it as the official CLI for the XServer API, requiring Node.js v18 or later and an API key, and usable inside CI/CD pipelines"
    evidenceUrl: "https://www.xserver.ne.jp/manual/man_tool_cli.php"
  - layer: "Network"
    name: "In-house backbone network (1Tbps+ external capacity)"
    confidence: confirmed
    evidence: "The official top page states that Xserver runs its own dedicated backbone network with more than 1Tbps of external connectivity"
    evidenceUrl: "https://www.xserver.ne.jp/"
  - layer: "In-house language"
    name: "PHP"
    confidence: speculative
    evidence: "On the careers site's \"Xserver in numbers\" page, PHP is engineers' favorite language (45%), followed by Python (17%). That is a preference survey; there is no official statement of what the control panel or API is written in"
    evidenceUrl: "https://www.xserver.co.jp/recruit/infographic"
sources:
  - label: "XServer Inc.: Company overview (Japanese; founded 2004-01-23, capital, business lines)"
    url: "https://www.xserver.co.jp/overview.php"
    accessedAt: "2026-09-28"
  - label: "XServer Inc.: History (Japanese; from the July 2003 launch to 2026)"
    url: "https://www.xserver.co.jp/history.php"
    accessedAt: "2026-09-28"
  - label: "XServer Inc.: Group companies (Japanese)"
    url: "https://www.xserver.co.jp/companies.php"
    accessedAt: "2026-09-28"
  - label: "XServer Inc. careers: Xserver in numbers (Japanese; revenue, headcount, roles)"
    url: "https://www.xserver.co.jp/recruit/infographic"
    accessedAt: "2026-09-28"
  - label: "XServer Inc.: Corporate site (Japanese; footnotes to the No. 1 share and speed claims)"
    url: "https://www.xserver.co.jp/"
    accessedAt: "2026-09-28"
  - label: "W3Techs: Web hosting providers for websites with Japan as server location"
    url: "https://w3techs.com/technologies/segmentation/sl-jp-/web_hosting"
    accessedAt: "2026-09-28"
  - label: "Xserver official: Top page (Japanese; client companies, hosted sites, backbone)"
    url: "https://www.xserver.ne.jp/"
    accessedAt: "2026-09-28"
  - label: "Xserver official: Pricing (Japanese)"
    url: "https://www.xserver.ne.jp/price/"
    accessedAt: "2026-09-28"
  - label: "Xserver news: Half-price cashback campaign (Japanese, 2026-09-07)"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=19393"
    accessedAt: "2026-09-28"
  - label: "Xserver news: Revised monthly prices for 1/3/6-month auto-renewals (Japanese, 2025-10-31)"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=16855"
    accessedAt: "2026-09-28"
  - label: "Xserver news: Discount for existing customers (Japanese, 2025-12-01)"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=17117"
    accessedAt: "2026-09-28"
  - label: "Xserver manual: Specifications (Japanese)"
    url: "https://www.xserver.ne.jp/manual/man_server_spec.php"
    accessedAt: "2026-09-28"
  - label: "Xserver manual: About nginx (Japanese)"
    url: "https://www.xserver.ne.jp/manual/man_server_nginx.php"
    accessedAt: "2026-09-28"
  - label: "Xserver manual: X Accelerator (Japanese)"
    url: "https://www.xserver.ne.jp/manual/man_server_xaccelerator.php"
    accessedAt: "2026-09-28"
  - label: "Xserver news: New server environment with 5th-gen EPYC (Japanese, 2026-03-27)"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=17933"
    accessedAt: "2026-09-28"
  - label: "Xserver news: MariaDB 10.11 support (Japanese, 2026-05-11)"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=18377"
    accessedAt: "2026-09-28"
  - label: "Xserver news: KUSANAGI technology and new server hardware (Japanese, 2021-10-07)"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=8186"
    accessedAt: "2026-09-28"
  - label: "GMO Prime Strategy: KUSANAGI acceleration adopted by Xserver (Japanese, 2021-10-07)"
    url: "https://www.prime-strategy.co.jp/information/xserver_20211007/"
    accessedAt: "2026-09-28"
  - label: "Xserver news: End of the technology partnership with GMO Prime Strategy (Japanese, 2026-06-10)"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=18634"
    accessedAt: "2026-09-28"
  - label: "Xserver news: Launch of the XServer API (Japanese, 2026-04-16)"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=18133"
    accessedAt: "2026-09-28"
  - label: "Xserver news: Site creation and publishing skill (Japanese, 2026-04-28)"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=18254"
    accessedAt: "2026-09-28"
  - label: "Xserver news: Launch of XServer MCP Server and XServer CLI (Japanese, 2026-05-12)"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=18397"
    accessedAt: "2026-09-28"
  - label: "Xserver news: APIs for ordering and managing server contracts (Japanese, 2026-08-26)"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=19291"
    accessedAt: "2026-09-28"
  - label: "Xserver manual: XServer API (Japanese; permissions and rate limits)"
    url: "https://www.xserver.ne.jp/manual/man_tool_api.php"
    accessedAt: "2026-09-28"
  - label: "Xserver manual: XServer MCP Server (Japanese)"
    url: "https://www.xserver.ne.jp/manual/man_tool_mcp.php"
    accessedAt: "2026-09-28"
  - label: "Xserver manual: XServer MCP Server, remote version (Japanese)"
    url: "https://www.xserver.ne.jp/manual/man_tool_mcp_remote.php"
    accessedAt: "2026-09-28"
  - label: "Xserver manual: XServer CLI (Japanese)"
    url: "https://www.xserver.ne.jp/manual/man_tool_cli.php"
    accessedAt: "2026-09-28"
  - label: "Xserver news: AI crawler blocking setting (Japanese, 2026-01-07)"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=17401"
    accessedAt: "2026-09-28"
  - label: "Xserver manual: AI crawler blocking (Japanese; list of blocked crawlers)"
    url: "https://www.xserver.ne.jp/manual/man_server_ai_crawler.php"
    accessedAt: "2026-09-28"
  - label: "Xserver news: Acquisition of the Cocoon WordPress theme business (Japanese, 2022-09-07)"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=9635"
    accessedAt: "2026-09-28"
  - label: "Xserver news: Closer development partnership with Cocoon's developer (Japanese, 2025-02-27)"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=14852"
    accessedAt: "2026-09-28"
  - label: "Xserver official: Affiliate program (Japanese; A8.net rewards)"
    url: "https://www.xserver.ne.jp/affiliate.php"
    accessedAt: "2026-09-28"
  - label: "Xserver official: Friend referral program (Japanese)"
    url: "https://www.xserver.ne.jp/friend.php"
    accessedAt: "2026-09-28"
  - label: "XServer Business official: Business partner program (Japanese)"
    url: "https://business.xserver.ne.jp/partner/"
    accessedAt: "2026-09-28"
---

When someone in Japan starts a blog, or a small company builds its website, the first name that comes up in many "which server should I pick" articles is Xserver. It is not a flashy new cloud. It is an Osaka company that has spent 23 years selling shared servers for roughly ¥1,000 a month. In 2026, that company opened a series of doors that let AI agents operate a server without going through the control panel.

## Service overview

Xserver is shared rental hosting: one physical server is split among many customers. A contract gives you space for a website, custom domains, mail accounts, and databases, and WordPress can be installed from the control panel in a few clicks. The operator, XServer Inc., runs several other products on the same foundation, including XServer Business for companies, VPS plans, the Xserver Domain registrar, and the Xwrite WordPress theme.

:::fact
According to the history page on its corporate site, Xserver began in July 2003 as a trade name and launched its shared hosting at the same time. The company was incorporated in January 2004 as Bet Ltd., renamed itself XServer Inc. in July 2012, and moved its head office to Grand Front Osaka in Umeda in May 2013. The company overview lists capital of ¥100 million (including capital reserve) and Naoki Kobayashi as representative director. The careers site's "Xserver in numbers" page gives revenue of ¥8,354.42 million (fiscal year ended March 2025), 21 consecutive years of revenue growth, and 255 employees (as of April 1, 2026), with engineers the largest group at 46%. The group also includes XServer Networks, which designs and maintains the cloud infrastructure, the domain company XRegistry, and XS Customer Service.
:::

:::fact
The official site advertises the No. 1 share in Japan, 260,000 client companies, and 2.5 million hosted sites. For the share claim, the corporate site cites W3Techs as of June 2026, and for the WordPress-only share it cites Dataprovider.com as of June 2025 (a count of DNS NS records of WordPress sites in Japan). When we checked W3Techs on September 28, 2026, XServer hosted 30.4% of websites with Japan as their server location, ahead of GMO Internet Group at 25.8% and Sakura at 19.0%.
:::

:::pull
Not a flashy feature, but staying the default place to put WordPress. Xserver has polished that for 23 years without leaving the old shape of shared hosting.
:::

::scorecard

## UX analysis

Xserver's UX is built around one goal: someone who knows nothing about servers should be able to publish a WordPress site without getting lost. In 2026, a second set of doors for developers and AI agents was added on top.

- **Shorten the distance to WordPress**. The official site lists WordPress Quick Start, which installs WordPress at signup, and WordPress Easy Migration, which moves a WordPress site from another host automatically. In 2022, together with the Cocoon acquisition, Xserver also added a WordPress Theme Install feature to the control panel. Xserver also owns the free Cocoon theme and the paid Xwrite theme, and gives Xwrite (normally ¥9,900 a year) free on Premium plans and above.
- **Keep Apache-style configuration working**. According to the spec list, the web server is Apache 2.4 combined with nginx, and the nginx manual page says .htaccess files written for Apache work unchanged under nginx. The mountain of Apache-based configuration examples on the web keeps working without rewriting.
- **Make speed a single switch**. The in-house X Accelerator caches static files on the server for two minutes in Ver.1, and also speeds up PHP execution in Ver.2. The manual lists what it never caches, such as logged-in WordPress cookies, /wp-admin/, and cart pages, so exclusions built around the WordPress admin screen come preinstalled. The same manual also warns that pages restricted by source address in .htaccess can end up cached and visible to people who were not meant to see them.
- **Let customers choose how close to be to AI**. In January 2026, Xserver added a per-domain switch that blocks AI crawlers such as GPTBot, ClaudeBot, Google-Extended, and PerplexityBot. It is off by default, and the announcement spells out the trade-off: once it is on, the site will no longer be cited as a source in AI search answers.
- **Let AI agents operate the server**. Xserver published a REST API in April 2026, a "site creation and publishing skill" (a SKILL.md for Claude Code or Cursor to read) on April 28, and an MCP server and CLI in May. The remote MCP server only needs https://api.xserver.ne.jp/mcp added as a Claude connector, followed by an XServer account login and a scope approval. No API key has to live on the local machine.

:::fact
According to the official manual, an XServer API key is shown in full only once, at creation (a string starting with xs_), and each key can have its own expiry date, allowed source IP addresses, and permissions (all operations, read-only, or custom). Rate limits apply per server account: Standard gets 60 requests a minute, 10,000 a day, and 5 concurrent connections; Premium gets 120 a minute and 30,000 a day; Business gets 300 a minute and 100,000 a day. An official news post on August 26, 2026, added APIs for ordering new servers and managing contracts; orders placed through the API are paid from the prepaid balance and skip the free trial. A key can be allowed to order new servers only when the prepaid balance is at least ¥20,000.
:::

## Tech stack

::techstack

:::fact
According to an official news post on March 27, 2026, newly ordered servers use 5th-generation AMD EPYC processors, with CPU performance up to about 40% higher than its previous servers, and memory per machine increased from 1.5TB to 2.3TB. All storage is NVMe, and the spec list gives the RAID layout as RAID10. From May 11, 2026, new servers switched to MariaDB 10.11, a long-term support release. The official top page says Xserver runs its own dedicated backbone network with more than 1Tbps of external connectivity. Under "resource guarantees", the spec list promises 6 virtual cores and 8GB of memory to each Standard plan on servers from sv13001 onward, putting a number on each customer's share of a shared machine.
:::

:::fact
According to an official news post on October 7, 2021, Xserver had formed a strategic partnership in May of that year with Prime Strategy (now GMO Prime Strategy), the developer of the KUSANAGI WordPress runtime, and adopted its acceleration technology together with servers built around 3rd-gen EPYC that cost "more than ¥10 million each". On June 10, 2026, however, Xserver announced that the technology partnership had ended. The only reason given was "our future service policy", and the post said nothing would change in customers' environments and no action was required. Even so, when we checked on September 28, 2026, the service description on the corporate site still advertised the KUSANAGI technology.
:::

:::guess
The announcement of the partnership's end says customers' environments stay the same. That suggests the KUSANAGI-derived acceleration is already built into Xserver's own server environment, and that the company judged it could carry further improvements with its own engineering team. The same year brought 5th-gen EPYC servers, a move to MariaDB 10.11, and the launch of the API, CLI, and MCP server one after another, which also points to the company pulling the work on its foundation in-house.
:::

:::guess
In our observation (2026-09-28), shared server hostnames (sv13001.xserver.jp and sv16001.xserver.jp) answered over HTTP/2 with server: nginx. The official site (www.xserver.ne.jp), the API documentation site, and api.xserver.ne.jp/mcp answered with server: Apache, and the MCP endpoint accepted only POST. For customer sites, this looks like a two-tier setup where nginx sits in front to handle static files and concurrent connections, while Apache handles PHP and interprets .htaccess. Combined with PHP topping the engineers' favorite-language survey on the careers site, the API and MCP endpoints may also be built on the same PHP and Apache foundation as the long-running control panel.
:::

:::fact
The official MCP server on npm, xserver-mcp, was registered on April 22, 2026, and reached version 1.5.0 on September 8. It is MIT-licensed, and its maintainer address is developer@xserver.co.jp. The manual gives setup examples for Cursor, Claude Desktop, VS Code (GitHub Copilot), Claude Code, and Codex. The MCP server exposes the same functions as the XServer API: domains and subdomains, free SSL, DNS records, mail accounts, WordPress installation, MySQL, FTP, SSH keys, cron, PHP versions, and access and error logs.
:::

## Business model

Xserver's revenue rests on shared hosting fees. Its pricing stands out in two ways: the longer you prepay, the lower the monthly price, and campaigns run almost constantly.

:::fact
According to the pricing page (as of September 28, 2026), there is no setup fee, and the monthly price including tax for Standard is ¥1,320 on a 3-month contract, ¥1,100 on 12 months, and ¥990 on 36 months. On a 36-month contract, Premium is ¥1,980 and Business ¥3,960, with 500GB, 600GB, and 700GB of NVMe disk respectively. The whole contract period is paid up front, and every plan comes with a 10-day free trial. From September 7 to October 5, 2026, a campaign refunds half the fee on new contracts of 12 months or longer, bringing Standard on a 36-month contract to an effective ¥495 a month. For new contracts, custom domains stay free for as long as the contract lasts: one on a 12-month Standard contract, two on Standard contracts of 24 months or more, and two on every Premium or Business contract. From December 2025, Xserver ended the discount it had given to 1-, 3-, and 6-month auto-renewals, and told customers that switching to 12 months or longer would keep their monthly price unchanged.
:::

:::fact
Referrals come through three channels. According to the official affiliate page, rewards through A8.net are ¥5,000 per contract for Standard, ¥7,500 for Premium, and ¥10,000 for Business. The friend referral program for existing customers gives both the referrer and the new customer 20% of the fee (for Xserver hosting). Its terms, however, forbid spreading the link to an unspecified audience on social media, forums, or blogs, and it cannot be combined with A8.net or other affiliate programs. For companies, the business partner program lets web agencies earn rewards on the contracts they bring in, including on renewals.
:::

:::guess
Long prepaid contracts give customers a lower monthly price, but they also let the company collect years of revenue in advance and reduce how often a customer even thinks about cancelling. The 2025 change that ended short-term auto-renewal discounts and nudged customers toward 12 months or more looks like a decision in the same direction. Shared hosting gets cheaper per contract the more contracts fit on one machine, so increasing the number of customers who stay for a long time likely feeds straight into margins.
:::

:::guess
The referral design has turned bloggers into a sales network. The A8.net reward is a flat amount, which is easy to understand for anyone writing a "how to choose a server" post. The friend referral program, by contrast, forbids spreading the link on blogs and limits itself to people who know each other. That looks like a line drawn to keep public promotion under the ASP's control and to prevent double rewards. And acquiring the free Cocoon theme, which many bloggers use, in 2022 and keeping it free is, in our view, an investment in staying the first option for anyone starting a blog. Opening the API and MCP server extends the same story about doors. If more people ask an AI agent to "make me a blog", the server whose steps the agent already knows is more likely to be chosen. The SKILL.md for the site creation and publishing skill appears to be an attempt to hand agents those steps ahead of time.
:::

Xserver did not invent a new kind of cloud. It took shared hosting, an old and familiar shape, and grew it into Japan's largest home for websites through easy WordPress setup, compatibility that keeps .htaccess working, prepaid long-term pricing, and a referral network that brought bloggers on board. In 2026, that company started building doors for customers who never open the control panel: AI agents. Can a market share won when people chose on screens carry over to an era when agents choose by following steps? That is the next contest for a server that starts at an effective ¥495 a month.
