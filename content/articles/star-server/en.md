---
service: "Star Rental Server"
title: "Another Price Tag on Xserver's System — Dissecting Star Rental Server, Which Succeeds Netowl's \"Star Server,\" Sells 6 Cores and 8 GB for 550 Yen a Month on a 36-Month Contract, and Opens Its API Only to the Business Plan"
description: "Star Rental Server is a shared hosting service that Netowl launched in December 2024 as the successor to its former \"Star Server,\" and that moved to XServer Inc. in a group reorganization in October 2025. Since June 2026 it has belonged to a brand called \"Star8,\" together with the Star Domain domain service and the SSL Box certificate service. The home page says it adopts the system of \"Xserver,\" a hosting service it calls No. 1 by share in Japan, and the Star8 API and the skill for AI agents still carry keys starting with xs_, the same prefix as Xserver's API keys, and an author listed as xserver-inc. There are three plans, Light, Standard and Business, at 253, 550 and 2,090 yen a month on a 36-month contract (tax included). The 550 yen for Standard, with 6 cores and 8 GB of memory, is about 51% of the 1,078 yen for Basic at Shin Rental Server, sold by the same company (this site's calculation). On the other hand, automatic backups start at Standard, the API and MCP Server are for Business only, support is by email only, and the news index lists no announcement of a campaign on server fees after the February 5, 2025 notice extending the launch campaign, which began on December 19, 2024, to April 4 (as of October 13, 2026). Referrals are left to A8.net. Using the pricing, feature list, server specifications, terms of service, manuals, API reference, SKILL.md, news, the former Star Server's pricing, Xserver's and Shin Rental Server's pricing and specifications, and this site's own observations, the article dissects a design that puts a different price tag on the same system, and how it makes money."
lead: "Star Rental Server's home page says it adopts the system of \"Xserver,\" a hosting service it calls No. 1 by share in Japan. The seller is that same company, XServer Inc., which took the service over from Netowl in October 2025. Within that one company, a plan with 6 cores and 8 GB of memory costs 990 yen a month on a 36-month contract at Xserver (regular price), 1,078 yen at Shin Rental Server and 550 yen at Star (tax included). This article dissects, from public information alone, what this sign changes to lower the price tag on the same system, and where it makes its money."
category: dev-tool
tags: [hosting, wordpress, small-business, php, api, mcp]
publishedAt: "2026-10-13"
updatedAt: "2026-10-13"
lastVerified: "2026-10-13"
expires:
  - date: "2026-11-04"
    claim: "Xserver's up-to-30%-off campaign prices (until 17:00 on November 4; Standard on a 36-month contract at 693 yen a month)"
serviceUrl: "https://www.star.ne.jp/"
# Affiliate link placeholder: Star Rental Server promotes through A8.net only (checked 2026-10-13).
# https://www.star.ne.jp/affiliate.php says its affiliate system uses A8.net (register with A8.net for free,
# then apply to the program; the page's details-and-partnership button points to A8.net program
# s00000008919001) and lists per-sale rewards by plan and contract length (3 / 6 / 12 / 24 / 36 months):
# Light 400 / 700 / 1,000 / 1,300 / 1,500 yen, Standard 1,600 / 1,600 / 1,800 / 2,000 / 2,500 yen,
# Business 7,000 / 7,000 / 7,000 / 7,500 / 8,000 yen. It says the program can also be used for your own
# sign-up and sends affiliates to the program details in the A8.net console for the exact conditions.
# The in-house "Netowl referral program" ended on 2025-03-31. No new-window restriction was found.
# A8.net is an ASP whose ad code must be used as provided: copy the link to affiliate.url, the 1x1
# impression image to affiliate.impressionUrl, and the text ad verbatim to affiliate.label. Never invent
# the label — ask the owner for the material's exact text. Keep every field identical in ja.md and en.md
# (parity.ts checks it).
# affiliate:
#   url: "https://px.a8.net/svt/ejp?a8mat=<star-rental-server-material>"
#   program: "Star Rental Server Affiliate Program (A8.net)"
#   impressionUrl: "https://<a8-impression-pixel>"
#   label: "<verbatim text of the ad material>"
vendor: "XServer Inc."
origin: "JP"
heroTheme: "star-server"
scores: { product: 3.5, ux: 3.5, tech: 3.5, business: 3.0 }
techStack:
  - layer: "Web server"
    name: "nginx + Apache 2.4"
    confidence: confirmed
    evidence: "The server specification list on the official support site (checked 2026-10-13) names the web server as \"apache 2.4.x, nginx\" and says .htaccess and mod_rewrite are available while telnet is not. The SKILL.md of the site creation and publishing skill also describes the environment as \"Apache-based shared hosting\""
    evidenceUrl: "https://www.star.ne.jp/support/manual/man_server_spec.php"
  - layer: "Server hardware"
    name: "AMD EPYC (4th gen) / NVMe SSD / RAID 10"
    confidence: confirmed
    evidence: "The official home page (checked 2026-10-13) states that every plan uses 4th-generation \"AMD EPYC™\" CPUs and the high-speed \"NVMe\" interface. The server specification list gives the OS as Linux and the RAID configuration as RAID 10"
    evidenceUrl: "https://www.star.ne.jp/"
  - layer: "Database"
    name: "MariaDB (10.5 / 10.11) / SQLite"
    confidence: confirmed
    evidence: "The official database specification list (checked 2026-10-13) names \"MariaDB 10.5.x\" and \"MariaDB 10.11.x\" (MyISAM and InnoDB) as database servers, and says SQLite is available and PostgreSQL is not. The news index announced support for MariaDB 10.11 on newly provisioned servers on April 20, 2026"
    evidenceUrl: "https://www.star.ne.jp/support/manual/man_db_spec.php"
  - layer: "Languages and acceleration"
    name: "PHP (7 and 8, FastCGI, OPcache) / X Accelerator"
    confidence: confirmed
    evidence: "The official feature list (checked 2026-10-13) names PHP8/PHP7, FastCGI to reduce the load of PHP and CGI, OPcache, HTTP/2, \"X Accelerator,\" which speeds up page display and expands the number of simultaneous accesses, and browser cache settings"
    evidenceUrl: "https://www.star.ne.jp/service/functions.php"
  - layer: "Control panel system"
    name: "Xserver's control panel system"
    confidence: confirmed
    evidence: "The official announcement of December 19, 2024 (checked 2026-10-13) states that the service is based on the system of \"Xserver\" and that its management tools adopt a system similar to Xserver's. The home page also says it adopts Xserver's system and offers the UI of its intuitive management panels"
    evidenceUrl: "https://www.star.ne.jp/news/detail.php?view_id=14011"
  - layer: "External API"
    name: "Star8 API (REST, api.star.ne.jp/v1, xs_ keys)"
    confidence: confirmed
    evidence: "The official API reference (checked 2026-10-13) gives the base URL https://api.star.ne.jp, the base path /v1/server/{servername}, Bearer token authentication, JSON responses and an OpenAPI specification. The manual says only the Business plan can use it, and that keys start with xs_ and come with permission settings, IP address restrictions and 90 days of execution logs"
    evidenceUrl: "https://developer.star.ne.jp/api/server/"
  - layer: "AI agent integration"
    name: "Star8 MCP Server (npx star8-mcp, runs locally) / Star8 CLI"
    confidence: confirmed
    evidence: "The official manual (checked 2026-10-13) states that the MCP server runs on the user's PC as npx -y star8-mcp, requires Node.js v18 or later and an API key, and gives setup examples for Cursor, Claude Desktop, VS Code (GitHub Copilot), Claude Code and Codex. In the npm registry, star8-mcp carries the MIT license and lists its maintainer as xserver-developer"
    evidenceUrl: "https://www.star.ne.jp/support/manual/man_tool_mcp.php"
  - layer: "AI skill"
    name: "Site creation and publishing skill (SKILL.md 1.2.1, SSH + rsync)"
    confidence: confirmed
    evidence: "The official SKILL.md (checked 2026-10-13) gives version 1.2.1 and lists the author as xserver-inc, and for Cursor, Claude Code, Gemini CLI, Cline and Codex describes steps that enable SSH and register a public key through the API, then transfer files with rsync (or scp if rsync is missing). The feature list limits it to the Business plan"
    evidenceUrl: "https://developer.star.ne.jp/ai/skills/starserver/SKILL.md"
  - layer: "Mail"
    name: "Anti-virus / DKIM / DMARC"
    confidence: confirmed
    evidence: "The official feature list (checked 2026-10-13) names virus removal for mail (anti-virus), a spam filter, DKIM to prevent tampering with and spoofing of outgoing mail, DMARC, SMTP-AUTH and IMAP"
    evidenceUrl: "https://www.star.ne.jp/service/functions.php"
  - layer: "Own website and control panel"
    name: "Apache (star.ne.jp, secure.netowl.jp) / WordPress on nginx (community) / jQuery / Google Tag Manager"
    confidence: likely
    evidence: "This site's own observation (2026-10-13) found www.star.ne.jp, developer.star.ne.jp and api.star.ne.jp returning server: Apache. The login page at secure.netowl.jp/starapanel/login/starserver/ returned charset=EUC-JP and a cookie named X2SESSID, and the login pages of Xserver and Shin Rental Server returned the same combination. The user community at community.star.ne.jp returned server: nginx over HTTP/2 with a link to the WordPress REST API, so it appears to run on WordPress. The site loaded a file named jquery-1.12.4.min.js and a Google Tag Manager container"
sources:
  - label: "Star Rental Server official: Home page"
    url: "https://www.star.ne.jp/"
    accessedAt: "2026-10-13"
  - label: "Star Rental Server official: Pricing"
    url: "https://www.star.ne.jp/price/"
    accessedAt: "2026-10-13"
  - label: "Star Rental Server official: Feature list"
    url: "https://www.star.ne.jp/service/functions.php"
    accessedAt: "2026-10-13"
  - label: "Star Rental Server official: Company profile (Specified Commercial Transactions Act and Payment Services Act notices)"
    url: "https://www.star.ne.jp/company.php"
    accessedAt: "2026-10-13"
  - label: "Star Rental Server official: Terms of service (Star8 account, rental server)"
    url: "https://www.star.ne.jp/rule/rule.php"
    accessedAt: "2026-10-13"
  - label: "Star Rental Server official: Affiliate program (A8.net, reward amounts)"
    url: "https://www.star.ne.jp/affiliate.php"
    accessedAt: "2026-10-13"
  - label: "Star Rental Server support site: Server specification list"
    url: "https://www.star.ne.jp/support/manual/man_server_spec.php"
    accessedAt: "2026-10-13"
  - label: "Star Rental Server support site: Database specification list"
    url: "https://www.star.ne.jp/support/manual/man_db_spec.php"
    accessedAt: "2026-10-13"
  - label: "Star Rental Server support site: Free domain for life perk"
    url: "https://www.star.ne.jp/support/manual/man_order_present_domain.php"
    accessedAt: "2026-10-13"
  - label: "Star Rental Server support site: Automatic renewal settings (amount debited on renewal)"
    url: "https://www.star.ne.jp/support/manual/man_order_pay_method_autopay.php"
    accessedAt: "2026-10-13"
  - label: "Star Rental Server support site: Star8 API (eligible plan, rate limits)"
    url: "https://www.star.ne.jp/support/manual/man_tool_api.php"
    accessedAt: "2026-10-13"
  - label: "Star Rental Server support site: Star8 MCP Server"
    url: "https://www.star.ne.jp/support/manual/man_tool_mcp.php"
    accessedAt: "2026-10-13"
  - label: "Star Rental Server support site: Star8 CLI (eligible plan)"
    url: "https://www.star.ne.jp/support/manual/man_tool_cli.php"
    accessedAt: "2026-10-13"
  - label: "Star Rental Server support site: News index (February 2025 to October 2026)"
    url: "https://www.star.ne.jp/support/news/"
    accessedAt: "2026-10-13"
  - label: "Star8 API reference: Server management"
    url: "https://developer.star.ne.jp/api/server/"
    accessedAt: "2026-10-13"
  - label: "Star8 developer docs: Site creation and publishing skill (SKILL.md)"
    url: "https://developer.star.ne.jp/ai/skills/starserver/SKILL.md"
    accessedAt: "2026-10-13"
  - label: "Star Rental Server News: Release of \"Star Rental Server,\" which adopts Xserver's system (2024-12-19)"
    url: "https://www.star.ne.jp/news/detail.php?view_id=14011"
    accessedAt: "2026-10-13"
  - label: "Star Rental Server News: Major Netowl renewal (2024-12-19)"
    url: "https://www.star.ne.jp/news/detail.php?view_id=14015"
    accessedAt: "2026-10-13"
  - label: "Star Rental Server News: Launch campaign of up to 30% off paid plans extended until April 4 (2025-02-05)"
    url: "https://www.star.ne.jp/news/detail.php?view_id=14039"
    accessedAt: "2026-10-13"
  - label: "Star Rental Server News: New sign-ups for the Free Plan suspended (2025-09-05)"
    url: "https://www.star.ne.jp/news/detail.php?view_id=14183"
    accessedAt: "2026-10-13"
  - label: "Star Rental Server News: Transfer of services to group company XServer Inc. (2025-09-02)"
    url: "https://www.star.ne.jp/news/detail.php?view_id=14179"
    accessedAt: "2026-10-13"
  - label: "Star Rental Server News: Change of upstream registrar following the transfer of the registrar business (2025-09-02)"
    url: "https://www.star.ne.jp/news/detail.php?view_id=14178"
    accessedAt: "2026-10-13"
  - label: "Star Rental Server News: New brand name and related name changes (2026-05-28)"
    url: "https://www.star.ne.jp/news/detail.php?view_id=14339"
    accessedAt: "2026-10-13"
  - label: "Star Rental Server News: APIs for ordering servers and managing contracts added (2026-08-26)"
    url: "https://www.star.ne.jp/news/detail.php?view_id=14412"
    accessedAt: "2026-10-13"
  - label: "Former Star Server: Pricing"
    url: "https://www.star.ne.jp/old/price/"
    accessedAt: "2026-10-13"
  - label: "Star8 (netowl.jp): Home page"
    url: "https://www.netowl.jp/"
    accessedAt: "2026-10-13"
  - label: "npm: star8-mcp (public registry data)"
    url: "https://registry.npmjs.org/star8-mcp"
    accessedAt: "2026-10-13"
  - label: "XServer Inc.: History (About the XServer Group)"
    url: "https://www.xserver.co.jp/history.php"
    accessedAt: "2026-10-13"
  - label: "Shin Rental Server official: Pricing (cited for the comparison in the body)"
    url: "https://www.shin-server.jp/service/price.php"
    accessedAt: "2026-10-13"
  - label: "Shin Rental Server official: Feature list (cores, memory, phone support, API rate limits)"
    url: "https://www.shin-server.jp/service/functions.php"
    accessedAt: "2026-10-13"
  - label: "Shin Rental Server News: Index (August 2025 to October 2026)"
    url: "https://www.shin-server.jp/news/"
    accessedAt: "2026-10-13"
  - label: "Shin Rental Server News: Transfer of services to group company XServer Inc. (2025-09-02)"
    url: "https://www.shin-server.jp/news/detail.php?view_id=1632"
    accessedAt: "2026-10-13"
  - label: "Xserver official: Pricing (campaign prices, phone inquiries)"
    url: "https://www.xserver.ne.jp/price/"
    accessedAt: "2026-10-13"
  - label: "Xserver official manual: Server specification list (guaranteed resources)"
    url: "https://www.xserver.ne.jp/manual/man_server_spec.php"
    accessedAt: "2026-10-13"
  - label: "Xserver official manual: XServer API (API key format)"
    url: "https://www.xserver.ne.jp/manual/man_tool_api.php"
    accessedAt: "2026-10-13"
---

Star Rental Server is a Japanese shared hosting service for WordPress blogs and small business websites. Netowl launched it in December 2024 as the successor to its former service "Star Server," and it moved to XServer Inc. in a group reorganization in October 2025. It is sold by the same company as [Xserver](/en/articles/xserver) and [Shin Rental Server](/en/articles/shin-rental-server), both dissected on this site, and its home page says it adopts the system of Xserver, which it labels "No. 1 domestic share." On the comparison shelf where [Lolipop!](/en/articles/lolipop), [ConoHa WING](/en/articles/conoha-wing) and [ColorfulBox](/en/articles/colorfulbox) sit, the word this sign puts forward is "cost performance."

## Service overview

Star Rental Server sells three paid plans: Light, Standard and Business. Alongside the Star Domain domain registration service and the SSL Box certificate service, it has been grouped since June 2026 under a brand called "Star8" (スターエイト). Its predecessor, Star Server, no longer accepts new sign-ups and still runs for customers with active contracts.

:::fact
According to an announcement dated December 19, 2024 (checked 2026-10-13), Netowl launched "Star Rental Server" that day as the successor to "Star Server." Based on the system of "Xserver," which it called the No. 1 hosting service by share in Japan, it adopted the high-speed NVMe interface and AMD's 4th-generation "AMD EPYC" on every plan, and also offered a "Free Plan," completely free and without ads. At the same time, Star Server and Star Server Free stopped accepting new orders, and Star Server Free was to end at the end of March 2025. A renewal announcement on the same day renamed the contract management screen from "Member Management Tool" to "Star Account," started a "new contract management screen" that adopts a system similar to Xserver's, replaced the "Q&A board" with the "Netowl User Community," and said the "Netowl Referral Program" would end on March 31, 2025. The Free Plan suspended new sign-ups on September 5, 2025, "taking into account the server inventory situation," and according to the news index, on October 22 it announced the end of new orders. An announcement dated September 2, 2025 said that, as part of a group reorganization, every service offered by Netowl (Star Rental Server, Star Domain, SSL Box and Star Server) would move to the group company XServer Inc. on October 1, with no change to service content or features. Another announcement on the same day explained that the upstream registrar of some domains at Star Domain would change from Netowl, named in the notice as "our company (ネットオウル株式会社)," to XServer Inc. An announcement dated May 28, 2026 set "Star8" (スターエイト) as the brand name, which had not been formally defined before, describing it as "a brand that achieves overwhelming cost performance by combining low prices with quality," and renamed "Star Account" to "Star8 account" from June 2. According to the site's company profile, the seller is XServer Inc. (notified telecommunications carrier E-20-03085), its capital is 100 million yen (including capital reserve), its head office is at Grand Front Osaka in Kita Ward, Osaka, and it states, "We do not offer support by phone." The site at netowl.jp now calls itself "Star8, which provides comprehensive internet services centered on cheap, easy services," and lists entrances to Star Rental Server, to Star Domain, which advertises that it "comes with a free rental server that can also run WordPress!," and to SSL BOX.
:::

:::fact
According to the pricing page (checked 2026-10-13, tax included), the monthly equivalent for Light is 495 yen on a 3-month contract, 462 yen on 6 months, 418 yen on 12 months, 352 yen on 24 months and 253 yen on 36 months; for Standard 1,320, 1,210, 990, 825 and 550 yen; and for Business 2,640, 2,420, 2,365, 2,255 and 2,090 yen. The setup fee is 0 yen, and payment is a lump sum in advance for the whole contract term. There is a single price table, with a note that automatic renewal is also accepted for renewal payments. The manual on automatic renewal settings refers readers to this "Pricing" page for the amount debited for each renewal period of a server. According to the server specification list and the feature list, Light has 4 cores, 6 GB of memory and 350 GB of NVMe SSD, Standard 6 cores, 8 GB and 700 GB, and Business 8 cores, 12 GB and 1,200 GB; the data transfer guidelines are 900 GB, 1,200 GB and 1,500 GB a day, and speed restrictions or similar limits may apply when a guideline is greatly exceeded. Light allows up to 200 domains and 50 MySQL databases (1 GB in total), while Standard and Business are unlimited (5 GB and 10 GB in total). Automatic backups, which keep 14 days of web and mail data and of MySQL data, come only with Standard and Business. The free domain for life perk gives Standard one domain from 9 types and Business two from 12 types including .jp and .co.jp, free as long as the server contract is valid; it is not shown during the free trial, and transferring a perk domain to another company requires paying one year's domain renewal fee as a release fee. The free trial lasts up to 10 days, payment methods are bank transfer, credit card, convenience store payment and prepaid balance, and support on every plan is by email. The former Star Server's pricing page, while showing that new sign-ups have ended, keeps its table of five plans: Economy (138 yen a month), Light, Standard, High Speed and Enterprise. On a 36-month contract the monthly price was 220 yen for Light, 440 yen for Standard, 550 yen for High Speed and 2,090 yen for Enterprise, and the setup fee on a first contract was 1,650 yen for Economy through Standard, 0 yen for High Speed and 5,500 yen for Enterprise. The home page claims "the strongest cost performance in Japan" and "No. 1 in Japan for speed and cost performance," and a note explains the basis as the company's own research on August 19, 2025: h2load measured five times against six services, the top three services by share in Japan excluding its own plus well-known domestic services it selected itself, with cost performance compared as the speed result divided by the price of a 12-month contract.
:::

:::pull
Three price tags hang on the same company's 6 cores and 8 GB of memory. Under this sign, it is 550 yen a month on a 36-month contract.
:::

::scorecard

## UX analysis

The core of Star Rental Server's experience is using a control panel and toolkit similar to Xserver's at a low price. Some things, however, are missing from the cheaper plans, and the terms draw lines worth reading before signing up.

- **The price tag varies by up to 2.4 times with the contract term.** On the pricing page, the monthly equivalent of a 3-month contract is nearly twice that of a 36-month contract for Light, 2.4 times for Standard and about 1.3 times for Business (this site's calculation). Getting the lowest price means paying 36 months in advance: 9,108 yen for Light, 19,800 yen for Standard and 75,240 yen for Business (this site's calculation, monthly equivalent × 36 months). The terms of service say the contract renews automatically for the same period unless notice that it will not be renewed is given by the last day of the month before the month in which the term expires, and that fees already paid are not returned.
- **The cheapest plan, Light, has no automatic backups.** Automatic backups and the free domain perk start at Standard, and Light is capped at 200 domains, 50 databases and 300,000 files. The terms of service state that the company's backups do not guarantee that data will be reliably preserved and that users need to make their own backups, so choosing Light assumes keeping copies yourself.
- **Support is by email, plus a community of users.** The feature list gives support on every plan as email, and the company profile says there is no phone support. With the December 2024 renewal, the place for questions moved from the "Q&A board" to the "Netowl User Community," and the site header links to community.star.ne.jp. Having staff carry out settings ("Settings Support") and server migrations are treated as optional services in the feature list.
- **The road to leaving work to AI agents is open only to the Business plan.** According to the feature list and the manuals, the Star8 API, MCP Server and the site creation and publishing skill are for the Business plan only, and the manual for the CLI, which drives the Star8 API from the terminal, also says it is available only on the "Business" plan. The MCP Server runs on the user's PC, requires Node.js v18 or later, and cannot be used from the browser versions of ChatGPT or Claude. Ordering a new server, which costs money, is disabled by default; it runs only after both a permission on the API key and an environment variable are set, and only when the user reviews the order and its tax-included total and explicitly approves it. Allowing a key to place orders requires a prepaid balance of at least 20,000 yen, and orders through the API do not get the free trial. SKILL.md imposes rules on the agent, such as never having the user paste the API key into the chat and confirming before deletion or reset. The prohibited acts in the terms of service, meanwhile, include automatically generating or posting blogs, articles or comments by program.
- **The terms draw the lines first.** The prohibited acts in the terms of service include posting information containing obscene expressions, putting a significant load on servers or the network, and posting articles that consist mainly of reprinted material, and Article 27 of the rental server terms does not allow reselling, meaning lending disk space or resources to third parties, except where conditions set on the website are met. The August 26, 2026 announcement particularly recommends ordering servers through the API to web production companies and resellers, so anyone planning to resell should check those conditions first.
- **Pages describe the day a cancellation takes effect differently.** The notice under the Specified Commercial Transactions Act says, "Once the cancellation procedure is complete, this usage contract is cancelled as of the usage expiration date at the time of the cancellation procedure," while Article 8 of the rental server terms states that "the contract is cancelled at the end of the month following the day on which we confirm the notice of cancellation." An order can be withdrawn only during the trial period before payment.

## Tech stack

::techstack

:::fact
According to the home page (checked 2026-10-13), every plan uses 4th-generation "AMD EPYC™" CPUs and "NVMe." The server specification list gives the OS as Linux, the RAID configuration as RAID 10 and the web server as "apache 2.4.x, nginx," and says SSH, cron, .htaccess and mod_rewrite are available while telnet is not. The CPU, memory and transfer entries of the same table also list a "domain perk server" (4 cores, 6 GB, a transfer guideline of 900 GB a day) alongside the three plans. The database specification list says MariaDB 10.5.x and 10.11.x (MyISAM and InnoDB) and SQLite are available and PostgreSQL is not. The feature list names PHP8/PHP7, FastCGI, OPcache, HTTP/2, X Accelerator, a WAF, "AI crawler blocking" that blocks crawlers used for AI training and AI search, "WordPress Recovery" that recovers or resets WordPress when problems occur, virus removal for mail, DKIM and DMARC. According to the news index, AI crawler blocking was added on January 14, 2026, MariaDB 10.11 on newly provisioned servers on April 20, and WordPress Recovery, announced under the headline "WordPress trouble solved by an in-house AI system!," on June 22. The December 19, 2024 release said the management tools adopt a system similar to Xserver's, and wrote, "Thanks to high compatibility with 'Xserver,' when there is something you don't understand, the know-how of its many users supports your operation."
:::

:::fact
According to the API reference (checked 2026-10-13), the Star8 API's base URL is `https://api.star.ne.jp`, the base path is `/v1/server/{servername}`, the API key is sent as a Bearer token, and the specification is published as OpenAPI. `{servername}` takes the initial domain in the form `ServerID.stars.ne.jp`, and adding a domain or creating a mail account verifies ownership through a TXT record named `_xserver-verify.{domain}`. Ordering a new server (`POST /v1/server`) first checks the order and its tax-included total with `dry_run=true`; the real order puts that amount in `expected_total_price` and sends `agree_to_terms=true` and an `Idempotency-Key` header. If no response was received, resending with the same key returns 409 DUPLICATE_REQUEST for 48 hours. The rate limit table has only a Business row (120 a minute, 30,000 a day, 10 concurrent connections), and the endpoint list also includes "XPageSpeed settings," with the note "This feature is not available on Star Rental Server (Business plan)." According to the API manual, keys start with `xs_`, permissions can be chosen from "all operations," "read only" and "custom," and execution logs are kept for 90 days. Xserver's manual for its "XServer API" also describes API keys as "a string starting with xs_." The MCP Server manual says it runs locally as `npx -y star8-mcp --services=server` and that `--services=server,domain` also brings in the domain management API. According to the npm registry (checked 2026-10-13), the latest star8-mcp is 1.5.0 from September 8, 2026, under the MIT license, with the maintainer listed as xserver-developer and the homepage field set to `https://developer.xserver.ne.jp`; the first version, 0.0.1, was published on April 22 (UTC), and 1.0.0 came out on May 12, the same day the MCP Server was announced. SKILL.md (version 1.2.1, author listed as xserver-inc) sets SSH to public-key authentication only on port 10022 and describes steps that by default create an ed25519 key locally, register only the public key through the API, and transfer files with rsync. The project's settings file is `.xserver.json`, and the environment is described as "Apache-based shared hosting. No Node.js runtime (no daemons)." This site's own observation (2026-10-13) found `www.star.ne.jp` and `developer.star.ne.jp` returning server: Apache over HTTP/1.1, and the root of `api.star.ne.jp` returning 403 along with HSTS (max-age=63072000; includeSubDomains). The URL that the site's "Star8 account" link points to, `secure.netowl.jp/starapanel/login/starserver/`, returned 200 with server: Apache, charset=EUC-JP and a cookie named X2SESSID, and Xserver's `secure.xserver.ne.jp/xapanel/login/xserver/` and Shin Rental Server's `secure.wpx.ne.jp/wpxapanel/login/wpxserver/` returned the same combination. The user community at `community.star.ne.jp` returned server: nginx over HTTP/2 with a link to the WordPress REST API, and the support site's pages loaded stylesheets from paths named `/support/x_header/` and `/support/shin_header/`.
:::

:::guess
Xserver's name remains all over the API, the MCP server and the skill: the key prefix `xs_` (the same as Xserver's API keys), the ownership check `_xserver-verify`, the skill's `.xserver.json` and its author listed as xserver-inc, and npm's maintainer xserver-developer and homepage developer.xserver.ne.jp. Taken together with three login pages that return a cookie of the same name and the same character encoding, and a support site that loads stylesheets named `x_header` and `shin_header`, Star Rental Server appears to run on the same management system, API code and site parts as Xserver and Shin Rental Server, with different plan definitions and a different sign. That the API reference lists XPageSpeed endpoints with a note that they cannot be used at Star presumably shows that the reference is generated from a shared specification and that features are switched on and off by plan definitions. That the login and sign-up pages still sit on the netowl.jp domain reads as taking over Netowl-era customers and contracts without changing the URLs of those entrances. That the first version of star8-mcp on npm came out on April 22, the day the API launched, presumably shows that the name "Star8" had been decided before the brand was announced on May 28.
:::

## One company, three price tags

:::fact
The XServer Group history on XServer Inc.'s website (as of 2026-10-13) lists the launch of the shared hosting service "Xserver" in July 2003 and of "wpX Shin Rental Server" (now "Shin Rental Server") in May 2021. A Shin Rental Server announcement dated September 2, 2025 (checked 2026-10-13) said that, as part of a group reorganization, every service offered under the Shin Account, Shin Rental Server included, would move to the group company XServer Inc. on October 1, 2025, the same date as Star. Comparing the news indexes of Star Rental Server and Shin Rental Server, of the 26 announcements posted at Star from April 20 to August 26, 2026, excluding special measures for disaster victims, 23 have an announcement on the same subject dated the same day at Shin (this site's count). They include support for MariaDB 10.11 (April 20), the launch of the API (April 22), the MCP Server and CLI (May 12), the new brand name and the site creation and publishing skill (May 28), and ordering servers through the API (August 26); the remaining three were a PHP update (August 18 at Star, August 10 at Shin), an iOS mail app (June 2 at Star, May 11 at Shin), and a PHP notice for the former Star Server that exists only at Star. Lining up prices and plans, the monthly price on a 36-month contract (tax included, regular price) for a plan with 6 cores and 8 GB of memory is 550 yen for Star's Standard, 1,078 yen for Shin's Basic and 990 yen for Xserver's Standard, and for a plan with 8 cores and 12 GB it is 2,090 yen for Star's Business, 2,002 yen for Shin's Standard and 1,980 yen for Xserver's Premium. According to Shin's feature list, its API is available on all three regular plans including Basic, with rate limits of 60 a minute, 10,000 a day and 5 concurrent connections for Basic and 120, 30,000 and 10 for Standard, the same numbers as Star's Business. Xserver's pricing page (checked 2026-10-13) was applying campaign prices of up to 30% off from 17:00 on October 5 to 17:00 on November 4, 2026, cutting Standard on a 36-month contract from 990 yen to 693 yen. On the same day, Star's and Shin's pricing pages showed no campaign.
:::

| Monthly price, 36-month contract (tax included, regular price) | Star Rental Server | Shin Rental Server | Xserver |
| --- | --- | --- | --- |
| Plan with 6 cores and 8 GB of memory | Standard 550 yen (700 GB) | Basic 1,078 yen (700 GB) | Standard 990 yen (500 GB) |
| Plan with 8 cores and 12 GB of memory | Business 2,090 yen (1,200 GB) | Standard 2,002 yen (1,000 GB) | Premium 1,980 yen (600 GB) |
| Plan with 10 cores and 16 GB of memory | no such plan | Premium 4,004 yen (1,200 GB) | Business 3,960 yen (700 GB) |
| Phone support | not offered (email only) | included on all three regular plans | accepted weekdays 10:00–18:00 |
| Campaign on October 13, 2026 | none shown | none shown | up to 30% off (until 17:00 on November 4) |

The numbers in the table are, for Star, the "cores per plan" and "memory per plan" in its server specification list; for Shin, the cores and memory "allocated" according to its feature list; and for Xserver, the "resource guarantee" (servers from sv13001 onward) in its server specification list, so the wording does not match. Star also has Light, with 4 cores, 6 GB and 350 GB (253 yen). Star's 550 yen for 6 cores and 8 GB is about 51% of Shin's 1,078 yen, about 56% of Xserver's regular 990 yen and about 79% of its campaign price of 693 yen, while for 8 cores and 12 GB Star is 88 yen more than Shin and 110 yen more than Xserver's regular price (all this site's calculations).

:::guess
Putting three signs and price tags on the same parts appears to be a way of dividing the market: catching customers who weigh price above all with Star, and customers who want more features and support with Shin and Xserver. That Star's price cut is concentrated at the 6-core, 8 GB entry point, while its 8-core, 12 GB plan carries the highest price tag of the three, reads as a line drawn so that customers drawn in by low prices are not discounted on the upper plans as well. In exchange for a cheap entry point, it appears to remove parts that cost staff time or server resources: phone support, automatic backups on Light, and the API on every plan but Business. That the announcement dates almost coincide with Shin's presumably shows that development and operations are unified and that adding one more sign costs little extra. That announcements of a new brand name appeared in both Star's and Shin's news indexes on May 28, 2026 also reads as a sign that the same company has entered a stage of organizing product families sign by sign.
:::

## Business model

The business centers on server fees received in advance for the contract term, topped by setup and migration services, paid SSL certificates, domains from Star Domain, the Xwrite WordPress theme and more. Winning customers is left to low regular prices and A8.net affiliates.

:::fact
According to the affiliate page (checked 2026-10-13), the referral system uses A8.net, and the reward per sale varies by plan and contract length: for Light, 400 yen on 3 months, 700 yen on 6 months, 1,000 yen on 12 months, 1,300 yen on 24 months and 1,500 yen on 36 months; for Standard, 1,600, 1,600, 1,800, 2,000 and 2,500 yen; and for Business, 7,000, 7,000, 7,000, 7,500 and 8,000 yen. The page says the program can also be used for your own sign-up and directs affiliates to the "program details" in the A8.net console for the exact conditions. The December 19, 2024 renewal announcement said the in-house "Netowl Referral Program" would end on March 31, 2025. The news index (February 4, 2025 to October 9, 2026) lists four campaign announcements (this site's count): the only one on server fees was "Extended until 4/4: Up to 30% off paid plans! 'Star Rental Server' launch campaign" on February 5, 2025, and the other three were campaigns for the Xwrite WordPress theme. That February 5 announcement said the launch campaign, running since December 19, 2024, was being extended to April 4, 2025 because of its popularity. Counting the period both news indexes cover, from August 5, 2025 to October 9, 2026, Shin Rental Server has eight announcements of discount or cashback campaigns on server fees and Star has none. Shin also has two announcements, on April 28, 2026, of campaigns raising the discount on the first fee from the usual 10% to 20% for its "customer-only discount," aimed at current and past users of the company's paid services, and for sign-ups referred through its "Shin Cloud Affiliate" program; counting them gives ten (all this site's counts). The August 26, 2026 announcement described ordering new servers through the API as "a feature we particularly recommend for web production companies and resellers that want to build and manage multiple servers efficiently," and said orders through the API are paid from the prepaid balance. The notice under the Payment Services Act in the company profile sets the prepaid limit at 3 million yen per member.
:::

:::guess
Rarely running campaigns on server fees and using a single price table for new contracts and renewals appears designed to win on the regular-price column of comparison tables, with the clarity of the same price whenever you sign up. For Standard, the plan the home page recommends, the 2,500-yen reward on a 36-month contract is about 13% of the 19,800 yen the customer pays in advance, and the 1,600-yen reward on a 3-month contract is about 40% of the customer's 3,960 yen (this site's calculation). On all three plans, the reward's share of what the customer pays is generally higher for shorter contracts, but for Light and Standard the 36-month share is higher than the 24-month share. Standard's 24-month and 36-month contracts both cost the customer 19,800 yen, and the rewards are 2,000 and 2,500 yen (all this site's calculations). The amount per referral is not large, but this reads as a design that asks referrers to pile up even small contracts. Ending the in-house referral program and consolidating on A8.net presumably reduces the work by leaving referral management to an ASP. Recommending the API entrance to production companies and resellers appears aimed at bringing in customers who buy several Business plans at once as a new sales channel running through AI agents and programs. That the server specification list includes a "domain perk server" appears to show that the free server that comes with Star Domain runs on the same infrastructure, which could also serve as an entrance that moves domain customers to paid plans.
:::

Netowl's "Star Server" was rebuilt on Xserver's system as Star Rental Server in December 2024, became a service of XServer Inc. in October 2025, and gained the "Star8" sign in June 2026. Its control panel uses a system similar to Xserver's, and its API, MCP server and AI skill were announced on the same days as Shin Rental Server's. What differs is how the price tags are set: Star sells 6 cores and 8 GB for 550 yen a month on a 36-month contract while leaving out phone support and the API on plans other than Business, and rarely runs campaigns on server fees. Facing three signs from the same company, the question for the person choosing is not the brand name but which parts their own site needs.
