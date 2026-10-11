---
service: "Shin Rental Server"
title: "Another Storefront From Xserver — Dissecting Shin Rental Server, Which Adds Disk to the Same 6 Cores and 8 GB, Shipped Its API Six Days Later and Its MCP Server on the Same Day, and Kept Campaigns Running for More Than Nine Months"
description: "Shin Rental Server is another shared hosting service sold by XServer Inc. It launched in May 2021 as \"wpX Shin Rental Server,\" was transferred to XServer Inc. in a group reorganization in October 2025, and since June 2026 has belonged to a brand called \"Shin Cloud.\" The Basic plan's 6 cores and 8 GB of memory match the numbers of Xserver's Standard plan, its disk is 700 GB, 200 GB more, and its regular price on a 36-month contract is 1,078 yen a month (tax included), 88 yen more than Xserver's Standard. The web server combines nginx and Apache, and on top of 4th-generation EPYC CPUs and all-NVMe RAID10 run XPageSpeed, developed by Xserver, and X Accelerator, whose effect was measured on Xserver's servers. In 2026 it published a REST API in April, an MCP server, a CLI and a skill for AI agents in May, and in August made it possible to order servers through the API. Referrals come through A8.net and Moshimo Affiliate as well as its own Shin Cloud Affiliate program. Using the pricing, features, feature list, business plans, terms of service, manuals, API reference, SKILL.md, news, Xserver's pricing and specifications, and this site's own observations, the article dissects a design that hangs a second sign while overlapping its parts with Xserver, and a business that runs on campaigns and referrals."
lead: "On April 16, 2026, Xserver published the main operations of its control panel as a REST API. Six days later, on April 22, an announcement with almost the same wording appeared on the site of another hosting service: Shin Rental Server. It is run by the same XServer Inc., and its MCP server and CLI went public on the same day as Xserver's, May 12. This article dissects, from public information alone, what a company that claims the No. 1 share in Japan changes when it puts up a second sign over largely overlapping parts."
category: dev-tool
tags: [hosting, wordpress, small-business, php, api, mcp]
publishedAt: "2026-10-11"
updatedAt: "2026-10-11"
lastVerified: "2026-10-11"
serviceUrl: "https://www.shin-server.jp/"
# Affiliate link placeholder: Shin Rental Server runs two referral routes (checked 2026-10-11).
# (1) ASP: https://www.shin-server.jp/affiliate/ says it promotes through A8.net and Moshimo Affiliate
# (register with either network for free, then apply to the Shin Rental Server program); the page lists
# per-sale rewards of 3,000 yen (Basic / Business Basic), 5,000 yen (Standard / Business Standard) and
# 8,000 yen (Premium / Business Premium). Both are ASPs whose ad code must be used as provided: copy the
# link to affiliate.url, the 1x1 impression image to affiliate.impressionUrl (rewrite Moshimo's
# protocol-relative //i.moshimo.com/... to https://), and the text ad verbatim to affiliate.label.
# (2) In-house "Shin Cloud Affiliate" (https://www.shin-server.jp/shin_affiliate.php): join with a free
# Shin Cloud account; it pays 3,500 / 5,500 / 9,000 yen per plan for contracts of 6 months or longer and
# gives the referred customer 10% off the first fee. It cannot be combined with A8.net, Moshimo Affiliate
# or point sites, and the page asks for a "PR" label when introducing it to an unspecified audience.
# Never invent the label — ask the owner for the material's exact text. Keep every field identical in
# ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<a8-or-moshimo-link-for-shin-rental-server>"
#   program: "Shin Rental Server Affiliate Program (A8.net / Moshimo Affiliate)"
#   impressionUrl: "https://<impression-pixel>"
#   label: "<verbatim text of the ad material>"
vendor: "XServer Inc."
origin: "JP"
heroTheme: "shin-rental-server"
scores: { product: 4.0, ux: 3.5, tech: 3.5, business: 3.5 }
techStack:
  - layer: "Web server"
    name: "nginx + Apache 2.4"
    confidence: confirmed
    evidence: "The server specification list on the official support site (checked 2026-10-11) names the web server as \"apache 2.4.x, nginx\". The features page also advertises nginx, and the site creation and publishing skill's SKILL.md describes the environment as \"Apache-based shared hosting\" that can be configured with .htaccess"
    evidenceUrl: "https://www.shin-server.jp/support/manual/man_server_spec.php"
  - layer: "Server hardware"
    name: "AMD EPYC (4th gen) / all-NVMe RAID10"
    confidence: confirmed
    evidence: "The official features page (checked 2026-10-11) states the use of 4th-generation \"AMD EPYC\" CPUs, a server spec of 256 vCPU cores and 1.5 TB of memory, RAID10 with NVMe on every drive, and a direct 10 Gbps link to one of Japan's largest backbone networks. The server specification list also gives the RAID configuration as RAID 10"
    evidenceUrl: "https://www.shin-server.jp/service/feature.php"
  - layer: "Database"
    name: "MariaDB 10.11 / SQLite"
    confidence: confirmed
    evidence: "The official feature list (checked 2026-10-11) names databases on MariaDB 10.11 and SQLite. The news index announced support for MariaDB 10.11 on newly provisioned servers on April 20, 2026. The feature list on the business plan page says MariaDB 10.5"
    evidenceUrl: "https://www.shin-server.jp/service/functions.php"
  - layer: "Acceleration"
    name: "XPageSpeed (developed by Xserver) / X Accelerator Ver.2"
    confidence: confirmed
    evidence: "The official XPageSpeed page (checked 2026-10-11) describes a website optimization feature that Xserver developed from Google's \"PageSpeed Module\" extension. The features page notes that the effect of X Accelerator Ver.2, which speeds up PHP, was measured on servers of the same configuration inside Xserver as of February 2019"
    evidenceUrl: "https://www.shin-server.jp/service/detail_xpagespeed.php"
  - layer: "External API"
    name: "Shin Cloud API (REST, api.shin-server.jp/v1, xs_ keys)"
    confidence: confirmed
    evidence: "The official API reference (checked 2026-10-11) gives the base URL https://api.shin-server.jp, the path /v1/server/{servername}, Bearer token authentication, JSON responses and an OpenAPI specification. The manual says keys start with xs_ and come with permissions, IP address restrictions, 90 days of execution logs and per-plan rate limits"
    evidenceUrl: "https://developer.shin-server.jp/api/server/"
  - layer: "AI agent integration"
    name: "Shin Cloud MCP Server (npx shincloud-mcp, runs locally) / Shin Cloud CLI"
    confidence: confirmed
    evidence: "The official manual (checked 2026-10-11) states that the MCP server runs on the user's PC as npx -y shincloud-mcp, requires Node.js 18 or later and an API key, and gives setup examples for Cursor, Claude Desktop, VS Code (GitHub Copilot), Claude Code and Codex. The feature list also includes an official CLI that drives the API from the terminal"
    evidenceUrl: "https://www.shin-server.jp/support/manual/man_tool_mcp.php"
  - layer: "AI skill"
    name: "Site creation and publishing skill (SKILL.md 1.2.1, SSH + rsync)"
    confidence: confirmed
    evidence: "The official SKILL.md (checked 2026-10-11) gives version 1.2.1 and lists the author as xserver-inc, and for Cursor, Claude Code, Gemini CLI, Cline and Codex describes steps that enable SSH and register a public key through the API, then transfer files with rsync. The dedicated page states that it is available on every plan"
    evidenceUrl: "https://developer.shin-server.jp/ai/skills/shinserver/SKILL.md"
  - layer: "Mail"
    name: "WithSecure anti-virus / DKIM / DMARC"
    confidence: confirmed
    evidence: "The official feature list (checked 2026-10-11) names virus removal for mail (WithSecure), DKIM to prevent tampering with and spoofing of outgoing mail, DMARC, a spam filter, SMTP-AUTH and IMAP"
    evidenceUrl: "https://www.shin-server.jp/service/functions.php"
  - layer: "Own website and control panel"
    name: "Apache (shin-server.jp, secure.wpx.ne.jp) / WordPress on nginx (community)"
    confidence: likely
    evidence: "This site's own observation (2026-10-11) found www.shin-server.jp, developer.shin-server.jp and api.shin-server.jp returning server: Apache. The URL that the site header's login button points to, secure.wpx.ne.jp/wpxapanel/login/wpxserver/, returned 200 with server: Apache and charset=EUC-JP, and the user community at community.shin-server.jp returned server: nginx over HTTP/2 with a link to the WordPress REST API, so the community appears to run on WordPress"
sources:
  - label: "Shin Rental Server official: Home page"
    url: "https://www.shin-server.jp/"
    accessedAt: "2026-10-11"
  - label: "Shin Rental Server official: Pricing (price tables for new contracts and renewals)"
    url: "https://www.shin-server.jp/service/price.php"
    accessedAt: "2026-10-11"
  - label: "Shin Rental Server official: Features (EPYC, all-NVMe, Shin Cloud API, free domain perks)"
    url: "https://www.shin-server.jp/service/feature.php"
    accessedAt: "2026-10-11"
  - label: "Shin Rental Server official: Feature list"
    url: "https://www.shin-server.jp/service/functions.php"
    accessedAt: "2026-10-11"
  - label: "Shin Rental Server official: Business plans (guaranteed resources, pricing)"
    url: "https://www.shin-server.jp/service/business.php"
    accessedAt: "2026-10-11"
  - label: "Shin Rental Server official: Site creation and publishing skill"
    url: "https://www.shin-server.jp/service/detail_skill.php"
    accessedAt: "2026-10-11"
  - label: "Shin Rental Server official: XPageSpeed"
    url: "https://www.shin-server.jp/service/detail_xpagespeed.php"
    accessedAt: "2026-10-11"
  - label: "Shin Rental Server official: Company information (profile and Specified Commercial Transactions Act notice)"
    url: "https://www.shin-server.jp/company.php"
    accessedAt: "2026-10-11"
  - label: "Shin Rental Server official: Terms of service"
    url: "https://www.shin-server.jp/rule.php"
    accessedAt: "2026-10-11"
  - label: "Shin Rental Server official: Affiliate program (A8.net and Moshimo Affiliate, reward amounts)"
    url: "https://www.shin-server.jp/affiliate/"
    accessedAt: "2026-10-11"
  - label: "Shin Rental Server official: Shin Cloud Affiliate"
    url: "https://www.shin-server.jp/shin_affiliate.php"
    accessedAt: "2026-10-11"
  - label: "Shin Rental Server support site: Server specification list"
    url: "https://www.shin-server.jp/support/manual/man_server_spec.php"
    accessedAt: "2026-10-11"
  - label: "Shin Rental Server Support: Free domain for life"
    url: "https://www.shin-server.jp/support/manual/man_order_present_domain.php"
    accessedAt: "2026-10-11"
  - label: "Shin Rental Server support site: Shin Cloud API (permissions, rate limits)"
    url: "https://www.shin-server.jp/support/manual/man_tool_api.php"
    accessedAt: "2026-10-11"
  - label: "Shin Rental Server support site: Shin Cloud MCP Server"
    url: "https://www.shin-server.jp/support/manual/man_tool_mcp.php"
    accessedAt: "2026-10-11"
  - label: "Shin Cloud developer docs: API reference (server management)"
    url: "https://developer.shin-server.jp/api/server/"
    accessedAt: "2026-10-11"
  - label: "Shin Cloud developer docs: Site creation and publishing skill (SKILL.md)"
    url: "https://developer.shin-server.jp/ai/skills/shinserver/SKILL.md"
    accessedAt: "2026-10-11"
  - label: "Shin Rental Server News: Index (August 2025 to October 2026)"
    url: "https://www.shin-server.jp/news/"
    accessedAt: "2026-10-11"
  - label: "Shin Rental Server News: Transfer of services to group company XServer Inc. (2025-09-02)"
    url: "https://www.shin-server.jp/news/detail.php?view_id=1632"
    accessedAt: "2026-10-11"
  - label: "Shin Rental Server News: New brand name and related name changes (2026-05-28)"
    url: "https://www.shin-server.jp/news/detail.php?view_id=2222"
    accessedAt: "2026-10-11"
  - label: "Shin Rental Server News: Launch of the \"Shin Account API\" (2026-04-22)"
    url: "https://www.shin-server.jp/news/detail.php?view_id=2154"
    accessedAt: "2026-10-11"
  - label: "Shin Rental Server News: APIs for ordering servers and managing contracts added (2026-08-26)"
    url: "https://www.shin-server.jp/news/detail.php?view_id=2423"
    accessedAt: "2026-10-11"
  - label: "Shin Rental Server official: Up-to-half cashback campaign (2026-08-10 to 10-07, ended)"
    url: "https://www.shin-server.jp/campaign/campaign_260810.php"
    accessedAt: "2026-10-11"
  - label: "XServer Inc.: Company history"
    url: "https://www.xserver.co.jp/history.php"
    accessedAt: "2026-10-11"
  - label: "Xserver official: Pricing (cited for the comparison with Xserver)"
    url: "https://www.xserver.ne.jp/price/"
    accessedAt: "2026-10-11"
  - label: "Xserver official: Features (5th-generation AMD EPYC)"
    url: "https://www.xserver.ne.jp/feature/"
    accessedAt: "2026-10-11"
  - label: "Xserver official: Affiliate program (A8.net rewards)"
    url: "https://www.xserver.ne.jp/affiliate.php"
    accessedAt: "2026-10-11"
  - label: "Xserver official manual: Server specification list (guaranteed resources)"
    url: "https://www.xserver.ne.jp/manual/man_server_spec.php"
    accessedAt: "2026-10-11"
  - label: "Xserver official manual: XServer API (key format, rate limits)"
    url: "https://www.xserver.ne.jp/manual/man_tool_api.php"
    accessedAt: "2026-10-11"
  - label: "Xserver official news: Launch of the \"XServer API\" (2026-04-16)"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=18133"
    accessedAt: "2026-10-11"
  - label: "Xserver official news: Launch of \"XServer MCP Server\" and \"XServer CLI\" (2026-05-12)"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=18397"
    accessedAt: "2026-10-11"
  - label: "Xserver official manual: XServer MCP Server, remote version"
    url: "https://www.xserver.ne.jp/manual/man_tool_mcp_remote.php"
    accessedAt: "2026-10-11"
---

Shin Rental Server is a Japanese shared hosting service for WordPress blogs and small business websites. It is run by XServer Inc., the same company behind [Xserver](/en/articles/xserver), dissected on this site, and it lines up XPageSpeed and the Xwrite WordPress theme, both developed by Xserver, and X Accelerator, whose effect was measured on Xserver's servers; the API and MCP server added in 2026 also arrived in step with the parent service. Even so, the plan names, the amount of disk, the price tags and the referral programs are designed separately. On the comparison shelf where [ConoHa WING](/en/articles/conoha-wing), [mixhost](/en/articles/mixhost), [ColorfulBox](/en/articles/colorfulbox), [Lolipop!](/en/articles/lolipop) and [Sakura Rental Server](/en/articles/sakura-rental-server) sit, the same company has placed a second product.

## Service overview

Shin Rental Server sells three regular plans, Basic, Standard and Premium, and three business plans, aimed at companies, that guarantee CPU and memory values. Other services carrying the same "Shin" name sit alongside it, such as the Shin Domain registrar and Shin VPS, and since June 2026 they have been grouped under a brand called "Shin Cloud."

:::fact
According to the company history on XServer Inc.'s corporate site (as of 2026-10-11), the company launched "wpX," a WordPress-only hosting and cloud service, in January 2013, the "new-generation hosting service 'wpX Shin Rental Server' (now 'Shin Rental Server')" in May 2021, and "Shin VPS" in September 2023. The service's own site and news write the name as シンレンタルサーバー, without the middle dot. An announcement dated September 2, 2025 said that, as part of a group reorganization, every service offered through Shin Account (Shin Rental Server, Shin Domain, Shin Blog, Shin VPS, Shin Cloud Desktop for FX, Shin Free Server, wpX Speed, wpX Rental Server and wpX Cloud) would be transferred to the group company XServer Inc. on October 1, 2025, with no change to service content or features. An announcement dated May 28, 2026 set "Shin Cloud" as the brand name, which had not been formally defined before, describing it as "a brand that provides environments specialized and optimized for particular purposes and needs," and renamed "Shin Account" to "Shin Cloud account" from June 2. According to the site's company information, the seller is XServer Inc. (notified telecommunications carrier E-20-03085), its capital is 100 million yen (including capital reserve), and the head office is at Grand Front Osaka in Kita Ward, Osaka. The home page claims to be "No. 1 fastest in Japan," and a note explains the basis as the company's own research on June 30, 2026: h2load measured five times against six services, the top three services by share in Japan excluding its own plus services it selected itself (for services with several plans, the lowest plan was measured except for the ones it selected; share was calculated from W3Techs data). The same page says there are no restrictions on the genres of content you can run.
:::

:::fact
According to the pricing page (checked 2026-10-11, tax included), the monthly equivalent of the regular plans is 1,078 yen for Basic, 2,002 yen for Standard and 4,004 yen for Premium on a 36-month contract; 1,155, 2,145 and 4,290 yen on 24 months; 1,232, 2,314 and 4,628 yen on 12 months; and 1,386, 2,574 and 5,148 yen on 3 and 6 months. The table for new contracts and the table for renewals show the same amounts, and payment is a lump sum in advance for the whole contract term. According to the feature list, the setup fee is 0 yen; Basic has 6 cores, 8 GB of memory and 700 GB of NVMe SSD, Standard 8 cores, 12 GB and 1,000 GB, and Premium 10 cores, 16 GB and 1,200 GB; there is no charge for data transfer, and the server specification list gives transfer guidelines of 900 GB, 1,200 GB and 1,500 GB a day respectively and says speed restrictions or similar limits may apply when the guideline is greatly exceeded. The business plans for companies guarantee CPU and memory values, and their monthly price on a 36-month contract is 1,630 yen for Business Basic (4 cores, 4 GB, 700 GB), 3,418 yen for Business Standard (6 cores, 8 GB, 1,000 GB) and 7,236 yen for Business Premium (8 cores, 12 GB, 1,200 GB). The free trial lasts up to 10 days, and the paid WordPress theme "Xwrite" (normally 9,900 yen a year) is free on every plan except Basic. According to the support site's manual on the free domain for life perk, the regular plans (Basic, Standard and Premium) get one domain from a designated list and the business plans get two, free for as long as the server contract is valid. "Settings Support," in which staff carry out server settings, costs from 5,500 yen per request, and the server migration service costs 33,000 yen per request. The company information page lists bank transfer, credit card, convenience store payment and prepaid balance as payment methods.
:::

:::pull
Another sign the same company put on the same comparison shelf. What visibly differs is the name, the amount of disk, and the way it is sold.
:::

::scorecard

## UX analysis

Shin Rental Server's experience adds two banners, no restriction on content genre and the ability to leave work to an AI agent, to the standard toolkit of a shared server for WordPress. Some pages do not agree with each other, though, and a few points are worth checking before signing up.

- **A 10-day trial, and paid fees do not come back.** According to the terms of service, the trial lasts 10 days from the notice that the service has started, some features are restricted during it, the paid contract starts once payment is confirmed within the period, and without payment the data is deleted when the trial ends. The notice under the Specified Commercial Transactions Act allows an order to be withdrawn only during the trial before payment, and the terms state that fees already paid are not returned on cancellation. Unless either party gives notice by the last day of the month before the month in which the term expires that it will not renew, the contract renews automatically for the same period.
- **Freedom of genre, within the terms.** The home page says there are no restrictions on the genres of content you can run, and the feature list on the business plan page notes that the guaranteed vCPU value is halved when running adult content. The prohibited acts in the terms of service, meanwhile, include child pornography and sending or posting information deemed harmful to the healthy development of minors, acts that violate laws, and acts that put a significant load on servers or the network.
- **Leave everything from building to publishing to AI.** According to the site creation and publishing skill page, sending an AI agent a one-line instruction to read SKILL.md loads the connection steps, and once an API key is entered, everything from building a site to publishing it on the contracted server proceeds by instruction alone. It works with agents that can run a terminal on a PC, such as Claude Code, Cursor, Gemini CLI and Google Antigravity, and not with web versions of AI chat or smartphone apps. SKILL.md itself imposes rules on the agent: never have the user paste the API key into the chat, never decide the publishing destination on its own, and ask before deleting or overwriting. The prohibited acts in the terms of service also include automatically generating or posting blogs, articles or comments by program, so how much to leave to AI has to be decided against the terms.
- **The MCP server runs on your own PC.** According to the MCP Server manual, Shin Cloud MCP Server runs on the user's PC as `npx -y shincloud-mcp`, requires Node.js 18 or later and an API key, and cannot be used from browser versions of AI chat. Ordering a new server, which costs money, is disabled by default; it runs only after both a permission on the API key and an environment variable are set, and only when the user reviews the order and its tax-included total and explicitly approves it. Xserver has a remote version that works from a Claude connector with no installation on the device and no API key, but the Shin manual describes only the method that runs locally.
- **How to read the price tag depends on when you look.** The pricing page shows two tables, for new contracts and for renewals, but as of October 11, 2026 they showed the same amounts, and no two-tier pricing that is cheap in the first term and rises from year two was visible. As shown below, however, campaigns for new contracts ran almost continuously for more than nine months, so the effective price depends on when you sign up.
- **Some numbers differ from page to page.** The feature list and the terms of service give the free trial as 10 days, while the site creation and publishing skill page mentions a "14-day free trial period." The features page says "any two" domains are free, while the feature list gives "one" for the regular plans and the home page shows two as a perk of the business plans. For the database, the feature list says MariaDB 10.11 and the feature list on the business plan page says 10.5. For API rate limits, the manual and the feature list give Premium 300 requests a minute, 100,000 a day and 20 concurrent connections, while the API reference's table gives Premium 120, 30,000 and 10 and puts 300, 100,000 and 20 on the Business row. Before signing up, it is worth checking which number applies to your own contract.

## Tech stack

::techstack

:::fact
According to the features page (checked 2026-10-11), the servers use 4th-generation AMD EPYC CPUs with a spec of 256 vCPU cores and 1.5 TB of memory, are built as RAID10 with NVMe on every drive, run nginx, and connect to one of Japan's largest backbone networks at 10 Gbps. The page puts NVMe read speed at up to about 32 times that of the previous all-SSD environment, and note ※1 at the end of the section on server performance describes the measurement results as the company's own research as of March 2024 (a comparison of random-read throughput under a 128-parallel load with fio). The server specification list gives the OS as Linux and the web server as "apache 2.4.x, nginx," and says SSH, cron, .htaccess and mod_rewrite are available while telnet is not. The feature list names MariaDB 10.11 and SQLite for databases, PHP 8 and 7, FastCGI, OPcache, daily automatic backups (14 days each of web and mail data and of MySQL), a WAF, virus removal for mail by WithSecure, and DKIM and DMARC. The XPageSpeed page says Xserver developed the feature from Google's "PageSpeed Module" and that, in a comparison against servers of the same configuration within the company's services, the PageSpeed Insights score improved to as much as 264% of the original score. The features page notes that the effect of X Accelerator Ver.2, which speeds up PHP (up to 20 times without caching, up to 10 times on WordPress), was measured on servers of the same configuration inside Xserver as of February 2019. According to the news index, AI crawler blocking was added on January 14, 2026, PHP 8.5 on January 22, MariaDB 10.11 on newly provisioned servers on April 20, and on June 22 "WordPress Recovery," which claims an in-house AI system that resolves WordPress trouble.
:::

:::fact
According to the API reference (checked 2026-10-11), the Shin Cloud API's base URL is `https://api.shin-server.jp`, the path is `/v1/server/{servername}`, and the API key is sent as a Bearer token. `{servername}` takes the initial domain in the form `ServerID.wpx.jp`, and adding a domain or creating a mail account verifies ownership through a TXT record named `_xserver-verify.{domain}`. Ordering a new server (`POST /v1/server`) first checks the order and its tax-included total with `dry_run=true`; the real order puts that amount in `expected_total_price` and sends `agree_to_terms=true` and an `Idempotency-Key` header. If no response was received, resending with the same key returns 409 DUPLICATE_REQUEST for 48 hours. According to the API manual, keys start with `xs_`, permissions can be chosen from "all operations," "read only" and "custom," there are IP address restrictions and 90 days of execution logs, and letting a key order servers requires a prepaid balance of at least 20,000 yen. Rate limits apply per server account; according to the manual and the feature list, they are 60 a minute, 10,000 a day and 5 concurrent connections for Basic, 120, 30,000 and 10 for Standard, and 300, 100,000 and 20 for Premium (the API reference's table gives Premium 120, 30,000 and 10 and puts 300, 100,000 and 20 on the Business row). SKILL.md (version 1.2.1, author listed as xserver-inc) sets SSH to public-key authentication only on port 10022 and describes steps that by default create an ed25519 key locally, register only the public key through the API, and transfer files with rsync. The project's settings file is named `.xserver.json`, and the environment is described as "Apache-based shared hosting. No Node.js runtime." This site's own observation (2026-10-11) found `www.shin-server.jp` and `developer.shin-server.jp` returning server: Apache over HTTP/1.1, and the root of `api.shin-server.jp` returning 403 along with HSTS (max-age=63072000; includeSubDomains). The URL that the site header's login button points to, `secure.wpx.ne.jp/wpxapanel/login/wpxserver/`, returned 200 with server: Apache and charset=EUC-JP, and the user community at `community.shin-server.jp` returned server: nginx over HTTP/2 with a link to the WordPress REST API.
:::

:::guess
Xserver's name remains all over the API, the MCP server and the skill: the key prefix `xs_`, the ownership check `_xserver-verify`, the skill's `.xserver.json`, and acceleration features measured on Xserver's servers. Shin Rental Server appears to run on the same management system and API code as Xserver, with different plan definitions and a different sign. That said, for the CPU, Xserver's features page says 5th-generation AMD EPYC while Shin's features page says 4th generation, so the hardware is not necessarily the same. That the login page sits on a wpX domain and uses EUC-JP as its character encoding suggests a customer management system inherited from the wpX era that began in 2013. The ordering API's three safeguards, a price check in advance, a match against the expected amount, and the Idempotency-Key, read as an attempt to prevent, in the API design itself, accidents in which an AI agent that cannot wait for a response repeats the same order or signs a contract at a price nobody expected.
:::

## Parts that overlap with Xserver, price tags set apart

:::fact
According to Xserver's official news, the XServer API launched on April 16, 2026 for Xserver and XServer Business. Shin Rental Server's "Shin Account API" launched six days later, on April 22, with an announcement whose text is almost the same apart from the service names and whose list of available APIs has the same 14 items. Xserver published its MCP server and CLI on May 12, and according to the news index Shin Rental Server published its own on the same day, May 12. According to the XServer API manual, keys start with the same `xs_`, and the rate limits are 60 a minute, 10,000 a day and 5 concurrent for Standard, 120, 30,000 and 10 for Premium, and 300, 100,000 and 20 for Business, the same numbers that Shin's manual gives for Basic, Standard and Premium (Shin's API reference gives different numbers). Xserver's server specification list gives the guaranteed resources on servers from sv13001 onward as 6 virtual cores and 8 GB of memory for Standard, 8 cores and 12 GB for Premium, and 10 cores and 16 GB for Business. Shin's regular plans also have 6 cores and 8 GB, 8 cores and 12 GB, and 10 cores and 16 GB, and Shin's business plan page says that, unlike the regular plans, the business plans guarantee resource values per plan. Differences remain. Xserver has a remote version of its MCP server (`https://api.xserver.ne.jp/mcp`) that works with no installation on the device and no API key. Xserver's pricing page (checked 2026-10-11) was applying campaign prices of up to 30% off from 17:00 on October 5 to 17:00 on November 4, 2026, cutting Standard on a 36-month contract from 990 yen to 693 yen.
:::

| Monthly price, 36-month contract (tax included, regular price) | Shin Rental Server | Xserver |
| --- | --- | --- |
| Plan with 6 cores and 8 GB of memory | Basic 1,078 yen (700 GB) | Standard 990 yen (500 GB) |
| Plan with 8 cores and 12 GB of memory | Standard 2,002 yen (1,000 GB) | Premium 1,980 yen (600 GB) |
| Plan with 10 cores and 16 GB of memory | Premium 4,004 yen (1,200 GB) | Business 3,960 yen (700 GB) |
| A8.net reward (for the three plans above) | 3,000, 5,000 and 8,000 yen | 5,000, 7,500 and 10,000 yen |
| Campaign on October 11, 2026 | none | up to 30% off (until November 4) |

In the table, Xserver's 6 cores and 8 GB, 8 cores and 12 GB, and 10 cores and 16 GB are "resource guarantee" values on servers from sv13001 onward, according to Xserver's server specification list, while Shin's feature list describes its regular-plan values as allocations, and according to Shin's business plan page, values are guaranteed only on the business plans.

:::guess
Splitting into two signs while keeping most parts overlapping appears intended to put two products on the comparison shelf and go after different customers with each. Where Xserver puts the No. 1 share in Japan and its number of client companies at the top of its pricing page, Shin Rental Server advertises "fastest in Japan," "ambitiously adopting the latest technology" and "there are no restrictions on the genres of content you can run," and sells the same CPU and memory numbers with more disk. Its regular prices are slightly higher and its ASP rewards lower, but by rarely letting campaigns lapse it reads as pulling the contest onto effective prices. Being able to ship the API six days later and the MCP server on the same day presumably comes from a single development effort, which would keep the extra development cost of a second sign small. The 2025 transfer and the 2026 brand name appear to mark a stage of growing Shin Rental Server as part of one product family, "Shin Cloud," alongside the VPS and domains.
:::

## Business model

The business centers on server fees received in advance for the contract term, topped by setup and migration services, paid SSL certificates, domains from Shin Domain, Xwrite and more. Winning customers is left to time-limited campaigns and a two-track affiliate program, ASP and in-house.

:::fact
The news index (checked 2026-10-11) lists six campaigns: from "Until 2/26: 492 yen a month on a one-year contract! Up to 69% off the first year," posted December 26, 2025, through, in 2026, "Until 4/7" with up to 60% cashback (effectively from 754 yen a month) on February 26, "Until 5/11" with up to 50% off (from 862 yen a month) on April 7, "Until 7/7" with up to 60% cashback (effectively from 539 yen) on May 11, "Until 8/10" with up to 30% off (from 862 yen) on July 7, and "Until 10/7" with up to half back as cashback (effectively from 754 yen) on August 10; from the second on, each was announced on the day the previous one ended. According to the last campaign's page, it ran from 17:00 on August 10 to 17:00 on October 7, gave new contracts of 12 months or longer 30% cashback on Basic and Business Basic and 50% on the other plans (11,664 yen on a 36-month Basic contract, effectively 754 yen a month), sent instructions for claiming it around the 10th of the month after six full months from the order, and excluded contracts that had ended by the time of the claim. The page displayed "This campaign has ended." According to the affiliate page, the ASPs are A8.net and Moshimo Affiliate, and the per-sale rewards are 3,000 yen for Basic and Business Basic, 5,000 yen for Standard and Business Standard, and 8,000 yen for Premium and Business Premium. The in-house Shin Cloud Affiliate, which according to the news index began on October 22, 2025, is open to anyone with a free Shin Cloud account, pays 3,500 to 9,000 yen for referring contracts of six months or longer, and gives the referred customer 10% off the first fee. Rewards are paid by bank transfer on the 15th of the month after next, counted from the referred customer's contract date, and cannot be combined with A8.net, Moshimo Affiliate or point sites. On December 1, 2025, the company also began a "Customer-Only Discount" that takes 10% off the first fee when a customer orders a service they do not yet use. The August 26, 2026 announcement particularly recommends ordering servers through the API to web production companies and resellers that build and manage several servers, and says orders through the API are paid from the prepaid balance and do not get the free trial.
:::

:::guess
That the in-house affiliate program can pay 500 to 1,000 yen more per plan than the ASPs appears to come from channeling the fees it does not pay an ASP into the referrer's reward and the referred customer's discount. Forbidding combination with ASPs and limiting the referred customer's discount to the first fee reads as a design that avoids paying twice while protecting renewal revenue. Making cashback claimable only after six full months presumably keeps discounts from flowing to customers who cancel after a short time. Campaigns that rarely lapse come close, for customers, to a state of "there is always some discount whenever you sign up," but someone who lands on a gap, as on October 11, 2026, sees only the regular price. Recommending API ordering to production companies and resellers appears aimed at bringing in, beyond personal blogs, businesses that hold many sites as a new sales channel running through AI agents and programs.
:::

Born in 2021 as "wpX Shin Rental Server," Shin Rental Server moved to the group company XServer Inc. in 2025 and gained the "Shin Cloud" sign in 2026. Much of what is inside overlaps with Xserver, and its API and MCP server arrive in step with the parent service. Even so, the amount of disk, the words on the sign, and the way price tags and campaigns are run are designed separately. When two products from the same company sit on the same comparison shelf, the question for the person choosing is not the brand name but which numbers matter for their own site.
