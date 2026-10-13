---
title: "ConoHa VPS vs XServer VPS — GMO's VPS That Keeps Hourly Billing and XServer's VPS Sold on Prepaid Terms Split on Price Tags, 2026 Sign-Ups, the Operations They Hand to AI Agents and Referral Rewards"
description: "A comparison of two Japanese VPS services, GMO Internet's ConoHa VPS and XServer's XServer VPS, using their official pricing and specification pages, campaigns, news posts and release notes, API, MCP and CLI documentation, GPU pages, affiliate pages, company histories and press releases as of October 13, 2026. ConoHa VPS started in July 2013 and offers hourly billing (with a monthly cap) alongside \"Matome-Toku,\" which is paid up front for the whole term. XServer VPS started in September 2022 and sells its standard plans on prepaid terms of 1 to 36 months. On the 2 GB memory plan, ConoHa gives 3 vCPUs and a 100 GB SSD and XServer gives 3 vCPUs and a 50 GB NVMe SSD; on a 36-month prepaid term, the monthly price is 903 yen at ConoHa's renewal rate (677 yen for a first contract until 16:00 on October 29), against 1,265 yen at XServer. From July to October 2026 XServer VPS suspended new sign-ups for its free VPS and its 2 GB plan, raised prices on September 1, and paused new sign-ups from September 17 to October 6 (the free VPS and the business plans were still suspended as of October 6). For AI agents, ConoHa lets its remote MCP server and its Claude connector create servers, but takes creating and resizing out of its ChatGPT plugin; XServer takes billable operations out of its remote MCP server (the connector), turns new orders through its local MCP server off by default and limits paid orders from its CLI to an interactive terminal. Company, price, 2026 sign-ups, entry points for AI agents, referral programs and tech stack overlap are laid out side by side."
lead: "ConoHa VPS's price list shows Matome-Toku monthly prices for terms from one month to 36 months, alongside an hourly price with a cap for a month of use. XServer VPS's price list shows only a monthly price for each contract term. GMO's VPS, which started in 2013, and the VPS that the shared hosting company XServer started in 2022 differ, even on the same 2 GB memory tier, in how they set prices, how they handled sign-ups in 2026, and how far they let AI agents act. Reading both services' official pages on the same day, this article lays out what is the same and what differs."
slugA: "conoha-vps"
slugB: "xserver-vps"
publishedAt: "2026-10-13"
updatedAt: "2026-10-13"
lastVerified: "2026-10-13"
expires:
  - date: "2026-10-29"
    claim: "ConoHa VPS's Matome-Toku campaign (until 16:00 on October 29) and the comparisons that use its first-contract prices (one-month and 36-month)"
sources:
  - label: "ConoHa VPS official: Pricing and specifications (hourly billing, Matome-Toku)"
    url: "https://vps.conoha.jp/pricing/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS official: Happy Halloween campaign (until 16:00 on October 29, 2026)"
    url: "https://vps.conoha.jp/campaign/special/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS official: Terraform Provider (billing of servers created through the API)"
    url: "https://vps.conoha.jp/terraform_provider/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS official: GPU servers"
    url: "https://vps.conoha.jp/gpu/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS official: How to use the GPU servers (automatic switch to hourly billing)"
    url: "https://vps.conoha.jp/gpu/flow/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS official: Affiliate program (A8.net, Moshimo Affiliate)"
    url: "https://vps.conoha.jp/affiliate/"
    accessedAt: "2026-10-13"
  - label: "ConoHa documentation: Release notes"
    url: "https://doc.conoha.jp/release-notes/"
    accessedAt: "2026-10-13"
  - label: "ConoHa documentation: ConoHa VPS MCP Server, remote version"
    url: "https://doc.conoha.jp/reference/mcp-server/remote-mcp/conoha-vps-mcp-server-remote/"
    accessedAt: "2026-10-13"
  - label: "ConoHa official: Company information (GMO Internet, Inc.)"
    url: "https://www.conoha.jp/company/"
    accessedAt: "2026-10-13"
  - label: "GMO Internet, Inc.: History of the former companies (before the January 1, 2025 reorganization)"
    url: "https://internet.gmo/company/history/archive/"
    accessedAt: "2026-10-13"
  - label: "GMO Internet, Inc.: ConoHa VPS byGMO launches a connector for Anthropic's Claude, a first among Japanese cloud providers (2026-08-12)"
    url: "https://internet.gmo/news/article/218/"
    accessedAt: "2026-10-13"
  - label: "GMO Internet, Inc.: ConoHa VPS byGMO launches a ChatGPT plugin (2026-09-01)"
    url: "https://internet.gmo/news/article/224/"
    accessedAt: "2026-10-13"
  - label: "XServer VPS official: Pricing and specifications"
    url: "https://vps.xserver.ne.jp/price.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS official: About XServer VPS (in-house data centers in Japan)"
    url: "https://vps.xserver.ne.jp/xserver-vps.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS official: GPU servers (XServer VPS for GPU)"
    url: "https://vps.xserver.ne.jp/gpu.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS official: Affiliate program (A8.net rewards)"
    url: "https://vps.xserver.ne.jp/affiliate.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS news: New sign-ups for the free plan suspended (2026-07-10)"
    url: "https://vps.xserver.ne.jp/support/news_detail.php?view_id=18884"
    accessedAt: "2026-10-13"
  - label: "XServer VPS news: New sign-ups for the 2 GB plan suspended and some offerings changed (2026-07-14)"
    url: "https://vps.xserver.ne.jp/support/news_detail.php?view_id=18920"
    accessedAt: "2026-10-13"
  - label: "XServer VPS news: [Important] Price revision (2026-08-03, effective September 1)"
    url: "https://vps.xserver.ne.jp/support/news_detail.php?view_id=19107"
    accessedAt: "2026-10-13"
  - label: "XServer VPS news: New sign-ups temporarily suspended (2026-09-18, updated October 6)"
    url: "https://vps.xserver.ne.jp/support/news_detail.php?view_id=19471"
    accessedAt: "2026-10-13"
  - label: "XServer VPS news: New sign-ups resumed (2026-10-06)"
    url: "https://vps.xserver.ne.jp/support/news_detail.php?view_id=19612"
    accessedAt: "2026-10-13"
  - label: "XServer VPS news: Support for the XServer API (2026-09-08)"
    url: "https://vps.xserver.ne.jp/support/news_detail.php?view_id=19395"
    accessedAt: "2026-10-13"
  - label: "XServer VPS support site: XServer MCP Server"
    url: "https://vps.xserver.ne.jp/support/manual/man_tool_mcp.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS support site: XServer MCP Server, remote version"
    url: "https://vps.xserver.ne.jp/support/manual/man_tool_mcp_remote.php"
    accessedAt: "2026-10-13"
  - label: "XServer developer documentation: API reference (VPS management)"
    url: "https://developer.xserver.ne.jp/api/vps/"
    accessedAt: "2026-10-13"
  - label: "XServer developer documentation: CLI reference (VPS management)"
    url: "https://developer.xserver.ne.jp/cli/vps/"
    accessedAt: "2026-10-13"
  - label: "XServer Inc.: History"
    url: "https://www.xserver.co.jp/history.php"
    accessedAt: "2026-10-13"
---

[ConoHa VPS](/en/articles/conoha-vps) and [XServer VPS](/en/articles/xserver-vps) are two Japanese VPS services for individuals and small businesses that want a virtual private server with root access. Laying the two dissections on top of each other, the difference shows less in the server performance figures than in whether prices are set by the hour as well or by the term only, how sign-ups were handled in 2026, and how far AI agents are allowed to act.

This article was put together by rereading both services' official pages on October 13, 2026. This site has not rented both under the same conditions to measure speed or stability, so it does not rank how they feel in use. All prices include tax.

## Company and platform: GMO's VPS since 2013 and XServer's VPS since 2022

:::fact
According to the history of GMO Internet's former companies (as of 2026-10-13), in July 2013 "GMO Internet, Inc. (now GMO Internet Group, Inc.)" launched "ConoHa byGMO" as a new VPS brand. According to ConoHa's company information page, the service is now run by GMO Internet, Inc. ConoHa VPS's pricing and specifications page names OpenStack as its cloud platform and lists nine plans from 512 MB to 128 GB of memory. According to XServer Inc.'s history, the company launched "Xserver VPS" in September 2022, added a VPS with Windows and a game-only VPS in 2023, and added "XServer VPS Cloud," which builds multi-server setups automatically, in August 2026. XServer VPS's introduction page says the servers run in its own data centers in Japan, and its pricing and specifications list gives six standard plans from 2 GB to 64 GB of memory.
:::

| Item | ConoHa VPS | XServer VPS |
| --- | --- | --- |
| Started | July 2013 (as "ConoHa byGMO") | September 2022 |
| Operator | GMO Internet, Inc. | XServer Inc. |
| What is named as the platform | OpenStack | In-house data centers in Japan |
| Memory tiers (standard plans) | Nine, from 512 MB to 128 GB | Six, from 2 GB to 64 GB |

:::pull
Even on the same 2 GB tier, one sets prices both by the hour and by the term, and the other by the term only. The operations they leave to AI agents are also fenced off along different lines.
:::

## Price: hourly caps and prepaid monthly rates

:::fact
According to ConoHa VPS's pricing and specifications page (checked 2026-10-13), hourly billing is charged per hour, and a month of use is never billed above a monthly cap. The 2 GB plan (3 vCPUs, 100 GB SSD) costs 3.7 yen an hour with a cap of 2,033 yen a month, and the 4 GB plan (4 vCPUs, 100 GB SSD) costs 6.6 yen an hour with a cap of 3,608 yen a month. The other option, "Matome-Toku," is paid up front for a term of 1, 3, 6, 12, 24 or 36 months, with no monthly installments and no cancellation during the term. Its monthly prices at renewal are 1,259 yen for 2 GB and 2,189 yen for 4 GB on a one-month term, and 903 yen for 2 GB and 1,691 yen for 4 GB on a 36-month term. According to the campaign page, the "Happy Halloween campaign" running until 16:00 on October 29, 2026 lowers the price of a first Matome-Toku contract: 1,007 yen for 2 GB and 1,752 yen for 4 GB on a one-month term, and 677 yen and 1,285 yen on a 36-month term, and Matome-Toku is described as up to 66% off compared with hourly billing (for the 2 GB plan). There is no setup fee on any plan. According to XServer VPS's pricing and specifications list (checked the same day), the 2 GB plan (3 vCPUs, 50 GB NVMe SSD) costs 1,265 yen a month on a 36-month contract and 1,980 yen a month on a one-month contract, and the 4 GB plan (4 vCPUs, 150 GB NVMe SSD) costs 2,035 yen a month on a 36-month contract and 2,640 yen a month on a one-month contract; the tables for a first contract and for a renewal show the same amounts. Payment is made up front for the whole contract term, and there is no setup fee.
:::

| Tax included | ConoHa VPS | XServer VPS |
| --- | --- | --- |
| 2 GB plan configuration | 3 vCPUs, 100 GB SSD | 3 vCPUs, 50 GB NVMe SSD |
| Using 2 GB for one month | Hourly billing capped at 2,033 yen a month (3.7 yen an hour), or a one-month Matome-Toku term at 1,259 yen on renewal (1,007 yen for a first contract until 16:00 on October 29) | 1,980 yen a month on a one-month contract |
| 2 GB prepaid for 36 months (monthly) | 903 yen at the Matome-Toku renewal rate (677 yen for a first contract until 16:00 on October 29) | 1,265 yen (first contract and renewal alike) |
| 4 GB plan configuration | 4 vCPUs, 100 GB SSD | 4 vCPUs, 150 GB NVMe SSD |
| Using 4 GB for one month | Hourly billing capped at 3,608 yen a month (6.6 yen an hour), or a one-month Matome-Toku term at 2,189 yen on renewal (1,752 yen for a first contract, same period) | 2,640 yen a month on a one-month contract |
| 4 GB prepaid for 36 months (monthly) | 1,691 yen at the Matome-Toku renewal rate (1,285 yen for a first contract, same period) | 2,035 yen (first contract and renewal alike) |

:::guess
For a single month of use, XServer's one-month contract is 53 yen cheaper on 2 GB and 968 yen cheaper on 4 GB than ConoHa's hourly cap, but against ConoHa's one-month Matome-Toku term, ConoHa is cheaper even at renewal prices, by 721 yen on 2 GB and 451 yen on 4 GB (973 and 888 yen for a first contract until 16:00 on October 29). For a 36-month prepaid term, ConoHa is also cheaper at renewal prices, by 362 yen on 2 GB and 344 yen on 4 GB (all this site's calculation). The SSD sizes differ, though: ConoHa's is larger on 2 GB and XServer's on 4 GB, so the same tier does not hold the same contents. ConoHa appears to run a two-track model in which hourly billing takes short stays and trials and Matome-Toku gives a discount to customers who pay for a term up front, with its campaign aimed at first contracts. XServer appears to sell from a single table that keeps the first-contract and renewal prices equal and gets cheaper the longer the term. Which one is cheaper changes with the length of use, the memory tier and whether a campaign is running, so it is worth checking both price pages on the day of signing up.
:::

## Sign-ups in 2026: XServer stopped for stock

:::fact
According to XServer VPS's news posts (checked 2026-10-13), on July 10, 2026 it suspended new sign-ups for the free VPS because more orders than expected had made server stock tight, and on July 14 it paused new sign-ups for the 2 GB plan, citing soaring equipment procurement costs and more orders than expected. The August 3 post said procurement costs had risen sharply against the background of growing global demand for server equipment and revised the monthly prices for first contracts and renewals from September 1; the 2 GB plan on a 36-month contract went from 990 yen to 1,265 yen. The September 18 post announced that new sign-ups had been paused from September 17 (existing customers could still order additional servers), and the October 6 post says sign-ups resumed at 17:00 that day while new sign-ups for the business plans and the free VPS remained suspended. The pricing and specifications list on October 13 showed the 2 GB plan with a sign-up link. In the same month, ConoHa VPS's campaign page announces a campaign under which Matome-Toku costs up to 66% less than hourly billing, until 16:00 on October 29.
:::

:::guess
XServer VPS reads as having passed the constraints of equipment procurement and stock on to its price tags and sign-ups, narrowing sign-ups from the cheap entry plans and then raising prices and pausing sign-ups. In the same October, ConoHa VPS was lowering first-contract prices with its Matome-Toku campaign; even amid rising equipment costs, the circumstances of stock and pricing appear to differ from company to company.
:::

## Entry points for AI agents: where each draws the line on billable operations

:::fact
According to ConoHa's release notes and MCP documentation (checked 2026-10-13), ConoHa VPS launched the remote version of its MCP server on July 7, 2026; any client connects to `https://api.conoha.jp/vps/mcp` and authorizes with a ConoHa account. The August 12, 2026 press release announced the Claude connector and says users can operate their VPS by giving instructions in Japanese such as "create a server with 1 GB of memory on Ubuntu 24.04." The September 1 press release explains that operations that newly incur charges (creating servers and volumes, and resizing servers) cannot be performed from the ChatGPT plugin, so using the plugin does not change ConoHa VPS charges. According to the Terraform Provider page, servers created through the API are billed by the hour and cannot use Matome-Toku. According to XServer VPS's September 8, 2026 post, XServer VPS was added to the services supported by the "XServer API" (the API for new orders cannot be used for Windows Server or the GPU server). According to the API reference, API keys are sent as Bearer tokens, rate limits apply per account at 60 requests a minute, 10,000 a day and 5 concurrent connections, and new orders come with dry_run, which checks whether an order would be accepted without charging, Idempotency-Key, which is required for a real order, and expected_total_price, which states the quoted amount. According to the MCP manual, in the MCP server that runs on the user's PC, executing new orders and OS reinstalls is disabled by default and works only when both the API key's permissions and the environment variable `XSERVER_MCP_ENABLE_HIGH_RISK_EXECUTE` are set. The remote version is added as a connector at `https://api.xserver.ne.jp/mcp`, and the user logs in to an XServer account and allows the scope of the connection; its manual says operations that involve charges cannot be used through the connector. The CLI reference says real orders that involve charges can be run only on an interactive terminal and that `--yes` cannot skip the confirmation.
:::

| Item | ConoHa VPS | XServer VPS |
| --- | --- | --- |
| API | OpenStack-compatible public API (servers created through the API are billed hourly) | XServer API (VPS from September 8, 2026; 60 a minute, 10,000 a day, 5 concurrent) |
| Remote MCP server | `https://api.conoha.jp/vps/mcp` (from July 7, 2026; authorized with a ConoHa account) | `https://api.xserver.ne.jp/mcp` (log in to an XServer account and allow the scope; no billable operations) |
| Billable operations | The Claude connector is presented as able to create servers; the ChatGPT plugin leaves out creating and resizing | Not through the remote MCP (connector); local MCP has new orders off by default; CLI real orders only on an interactive terminal; the API has dry_run and a stated quote |

:::guess
Both companies appear to draw lines to keep AI agents from charging users beyond what they intend, and both change which operations are allowed from one entry point to another: ConoHa took billable operations out of its ChatGPT plugin, whose user base is broad, and XServer took them out of its remote connector. On top of that, XServer requires explicit permission or confirmation of the amount for new orders through its local MCP server, API and CLI, which reads as putting a brake on the ordering procedure as well as on the range of operations. The difference shows in ConoHa letting its Claude connector go as far as creating servers.
:::

## Referral programs: the A8.net reward tables

:::fact
ConoHa VPS's affiliate page (checked 2026-10-13) points to A8.net and Moshimo Affiliate and, under the heading "rewards for the long-term discount pass," lists rewards such as 1,100 yen for a one-month contract and 2,000 yen for three months or longer on 2 GB, and 2,100 yen and 3,600 yen on 4 GB, noting that the table is an excerpt. XServer VPS's affiliate page lists A8.net rewards such as 1,046 yen for a one-month contract and 1,569 yen for three months or longer on 2 GB, and 2,000 yen and 3,000 yen on 4 GB.
:::

| Reward per sale | ConoHa VPS (table heading: "long-term discount pass") | XServer VPS |
| --- | --- | --- |
| ASP | A8.net, Moshimo Affiliate | A8.net |
| 2 GB (one month / three months or longer) | 1,100 yen / 2,000 yen | 1,046 yen / 1,569 yen |
| 4 GB (one month / three months or longer) | 2,100 yen / 3,600 yen | 2,000 yen / 3,000 yen |

:::guess
On both the 2 GB and 4 GB tiers, ConoHa's rewards are higher. Since that makes a difference to the income of the writers who refer customers, it is worth reading a referral article about either service on the assumption that a reward program exists, and checking prices against whether you plan hourly or prepaid use and for how many months.
:::

## One shared tech stack item

The tech stack comparison shown below this page is a mechanical match of the two articles' techStack entries. Only one item was judged shared: the NVIDIA L4 Tensor Core GPU on the GPU servers.

:::fact
ConoHa VPS's GPU server page (checked 2026-10-13) lists configurations with one NVIDIA L4 (24 GB of GPU memory): 20 vCPUs and 128 GB of memory at 154.0 yen an hour (90,200 yen a month), and 4 vCPUs and 16 GB of memory at 60.5 yen an hour (36,300 yen a month). XServer VPS's GPU server page lists one NVIDIA L4 Tensor Core GPU with 24 vCPUs and 120 GB of memory at 150 yen an hour with a monthly cap of 88,000 yen, and notes that it is billed even while the server is stopped. ConoHa's page on how to use the GPU servers says use of less than a month switches automatically to hourly billing, calculated so that the price is always the lowest.
:::

ConoHa uses hourly billing for its GPU servers too, while XServer VPS, which sells its standard plans on prepaid terms, rents its GPU server by the hour. Both appear to apply hourly billing to uses whose running time is hard to predict.

The question for those choosing comes down to how long they will use a server and from which entry point. For someone who wants to try a server for a few days or weeks, add and remove servers through the API or Terraform, or rent for a long time to match a Matome-Toku campaign, ConoHa VPS, with its choice of hourly or prepaid billing, is a candidate. For someone who prefers the same price at first contract and at renewal, or wants confirmation steps in the ordering procedure through a local MCP server or the CLI, XServer VPS is a candidate. What separates the same product, a VPS, appears to be less the server parts than the design of whether prices are cut by the hour as well or by the term only, and where the brake on billable operations is placed.
