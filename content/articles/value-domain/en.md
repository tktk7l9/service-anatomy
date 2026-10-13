---
service: "Value Domain"
title: "Three Prices for the Same .com — Dissecting Value Domain Through a Price List With a Separate Row for Each Registrar, Prices Shown With the 24.5% Surcharge Already Included, and One MCP, Which Hands Domains and Servers to AI Agents"
description: "Value Domain (バリュードメイン) is a domain registration service run by GMO DigiRock, Inc., a GMO Internet Group company headquartered in Osaka. It traces back to \"DOMAIN.XREA.COM\", started in January 2002, and a domain registration agency service begun that March as an agent of eNom, Inc.; in August, DOMAIN.XREA.COM was renamed \"VALUE-DOMAIN\". The home page claims more than 7 million cumulative domain registrations, more than 650,000 registered users and more than 570 kinds of domains. The price list (checked 2026-10-13, tax included) shows amounts that include the service maintenance adjustment fee (サービス維持調整費): a .com through GMO costs 790 yen in year one and 1,986 yen to renew or transfer, while the same .com costs 2,231 yen through KeySystems and 2,643 yen through eNom, each on its own row. October's price sheet (PDF) puts the fee rate at 24.5%, and the company has announced that from November 1, citing changes in the prices offered by its wholesale registrars, the regular price of a .com through GMO will rise to 2,283 yen. Using the price list, the terms of use, the official documentation for the API and One MCP, the user guide, news posts and price sheets, GMO DigiRock's company information and this site's own observations, the article dissects a price list where you choose the registrar, price sheets reissued month by month, a setup where the legacy site and Value Domain One sit side by side, and a business that uses domains as the entry point to servers."
lead: "Look up .com in Value Domain's price list and three rows come up. A .com through GMO costs 790 yen in year one and 1,986 yen to renew, a .com through KeySystems 2,231 yen, and a .com through eNom 2,643 yen. Below the table a note reads \"上記表示金額は、サービス維持調整費率を含みます。\" (the amounts shown above include the service maintenance adjustment fee rate), and the price sheet (PDF) issued month by month puts October's rate at 24.5%. Born in 2002 and run by a company of 23 employees, the service merged its login into the new Value Domain One in 2026, and as of October 2026 it also offers an MCP server through which AI agents can operate domains and servers. This article dissects its pricing, mechanics and money flows from public information alone."
category: dev-tool
tags: [domains, hosting, small-business, api, mcp, security, php, cloudflare]
publishedAt: "2026-10-13"
updatedAt: "2026-10-13"
lastVerified: "2026-10-13"
expires:
  - date: "2026-10-31"
    claim: "Prices in the home page's price box marked \"（2026.10.31まで）\" (until 2026.10.31), such as the 790-yen first year of a .com, and the 2,000-yen new .co.jp registration campaign (until October 31)"
  - date: "2026-10-31"
    claim: "The 24.5% service maintenance adjustment fee rate in October's price sheet and the prices that include it (a .com renewal at 1,986 yen, the repeat customer discount .com at 1,781 yen and at 1,582 yen for 100 or more, the API discount that brings a .com from 1,986 yen to 1,781 yen, etc.), and Onamae.com's 25.50% fee for October"
  - date: "2026-10-31"
    claim: "The announced price revision from November 1 (a regular .com price of 2,283 yen through GMO, a .com at 2,154 yen with the repeat customer discount for 15 or more, etc.); check the actual prices and fee rate after the revision"
  - date: "2026-10-31"
    claim: "The support status the One MCP page gives as of October 2026 (operations excluded when connecting from claude.ai's connector list, and AI site generation (β) supporting only publishing on subdomains)"
serviceUrl: "https://www.value-domain.com/"
# Affiliate link placeholder: Value Domain runs its affiliate program through the ASP A8.net
# (https://www.value-domain.com/affiliate/, checked 2026-10-13): register with A8.net for free, then
# apply to the program there (the page's "詳細はこちら" link opens A8.net's program search, keyword
# s00000007238). Rewards (tax excluded): new domain 100 yen (50 at a campaign price), transfer in
# 100 yen (50 at a campaign price), Omakase Start 2,000 yen, CORESERVER new contracts 100-10,000 yen,
# Value Server 500-3,000 yen, XREA (tax included) 50-700 yen, SiteLock 100-3,500 yen, Value-Auth
# 30-5,000 yen. A separate in-house referral program pays Value Domain points. A8.net ad code must be
# used as provided: link to affiliate.url, 1x1 image to affiliate.impressionUrl, text ad verbatim to
# affiliate.label. Never invent the label — ask the owner. No new-window ban was found, so sameWindow
# is not set. Keep every field identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://px.a8.net/svt/ejp?a8mat=<value-domain-material>"
#   program: "Value Domain Affiliate Program (A8.net)"
#   impressionUrl: "https://www<nn>.a8.net/0.gif?a8mat=<value-domain-material>"
#   label: "<verbatim text of the ad material>"
vendor: "GMO DigiRock, Inc."
origin: "JP"
heroTheme: "value-domain"
scores: { product: 3.5, ux: 3.0, tech: 3.5, business: 3.5 }
techStack:
  - layer: "Registrar"
    name: "GMO (Onamae.com) / eNom / KeySystems / JPRS"
    confidence: confirmed
    evidence: "The terms of use page (checked 2026-10-13) has separate sections, \"上位レジストラお名前.comドメイン登録規約\", \"上位レジストラENOMの規約\" and \"上位レジストラKeySystemsの規約\" (terms of the upstream registrars Onamae.com, ENOM and KeySystems), that link to each company's terms and ask users to agree to them, and a \"JPRSドメイン登録規約\" (JPRS domain registration terms) section that asks users to agree to JPRS's rules. The service status page lists \"GMO(お名前.com)\", \"JPRS\", \"eNom\" and \"KeySystems\" under domains. GMO DigiRock's history says it began a domain registration agency service as an agent of eNom, Inc. in March 2002, signed a designated registrar agreement for general-use JP domains in September 2003 and contracted with the German registrar KeySystems in January 2004"
    evidenceUrl: "https://www.value-domain.com/terms/"
  - layer: "Site delivery and DNS"
    name: "Cloudflare (proxy, DNS)"
    confidence: likely
    evidence: "In this site's own observation (2026-10-13), the www, one, status, web3 and mcp hosts of value-domain.com returned server: cloudflare and a cf-ray ending in NRT, and set a cookie named __cf_bm. The name servers of value-domain.com are gabriel.ns.cloudflare.com and vera.ns.cloudflare.com, and the customer-facing ns1–ns5 and ns11–ns13.value-domain.com returned addresses inside 172.64.0.0/13, a range Cloudflare publishes as its own IPv4 addresses"
  - layer: "Customer DNS"
    name: "Value Domain name servers + DNSSEC"
    confidence: confirmed
    evidence: "The DNSSEC setup manual (checked 2026-10-13) states that DNSSEC is available for domains that are managed by Value Domain and also use its name servers ns1–5.value-domain.com and ns11–13.value-domain.com, and not for domains managed by other companies. It shows the CAA record to add when using free SSL (Let’s Encrypt) as the single line \"caa @ 0 issue “letsencrypt.org”\""
    evidenceUrl: "https://www.value-domain.com/userguide/manual/dnssec"
  - layer: "Legacy service site"
    name: "PHP / jQuery"
    confidence: likely
    evidence: "In this site's own observation (2026-10-13), www.value-domain.com uses URLs ending in .php, such as /login.php for login and /support.php for support, and /vdapi/ set a PHPSESSID cookie before redirecting to the login on one.value-domain.com. The home page loaded /assets/js/lib/jquery.js (jQuery v3.5.1) and slick-carousel 1.8.1 from jsDelivr"
  - layer: "Value Domain One"
    name: "Laravel + Livewire / LiteSpeed"
    confidence: likely
    evidence: "In this site's own observation (2026-10-13), one.value-domain.com and mcp.value-domain.com returned x-turbo-charged-by: LiteSpeed. one.value-domain.com set cookies named XSRF-TOKEN and value_domain_one_session, and its HTML loaded /livewire/livewire.min.js, scripts under /build/assets/, the Tailwind CSS CDN, Bootstrap 5.3.0 and jQuery 3.7.1. Livewire's official documentation (Quickstart) lists Laravel version 10 or later as a prerequisite and shows installing it by running composer require livewire/livewire from the root directory of a Laravel app"
  - layer: "Public API"
    name: "Value Domain API v1 / OpenAPI 3.0 + ReDoc (Bearer token)"
    confidence: confirmed
    evidence: "The API documentation for domains (checked 2026-10-13) is written in OpenAPI 3.0.0 and published with ReDoc 2.0.0-rc.24. The endpoint is https://api.value-domain.com/v1/ with Bearer token authentication; it lists operations for domain registration, transfers, expiry, DNS, DNSSEC and more, and the registrar field of a new registration says \"'GMO'のみ対応しています\" (only 'GMO' is supported). The API page requires SMS verification to issue an API key and says domains whose managing registrar is Enom or Key-Systems are not supported"
    evidenceUrl: "https://www.value-domain.com/api/doc/domain/"
  - layer: "AI agent integration"
    name: "One MCP (remote MCP server, OAuth 2.1 + PKCE)"
    confidence: confirmed
    evidence: "The One MCP page (last updated October 8, 2026; checked 2026-10-13) gives the endpoint https://mcp.value-domain.com/mcp, adding it in Claude Code with --transport http, authentication with OAuth 2.1 and PKCE, and free use of the MCP server (AI token costs are borne by the user). In this site's own observation (2026-10-13), the authorization server metadata on the same host showed the authorization code grant, PKCE with S256 and a dynamic client registration endpoint"
    evidenceUrl: "https://one.value-domain.com/service/mcp"
  - layer: "Features that use AI (domain name suggestions, etc.)"
    name: "OpenAI"
    confidence: confirmed
    evidence: "The \"AIを利用した機能についての利用規約\" (terms for features that use AI) section of the terms of use (added in the June 23, 2023 revision) states that users of features that use AI comply with OpenAI's terms of use and consent to the information they send being stored and used by OpenAI. The home page's \"最適なドメインをAIに質問\" (ask AI for the best domain) box asks users to check the terms of use before using it"
    evidenceUrl: "https://www.value-domain.com/terms/"
  - layer: "AI support chat"
    name: "DocsBot AI (chat widget)"
    confidence: likely
    evidence: "In this site's own observation (2026-10-13), the home page and the live chat page contained code that loads chat.js from widget.docsbot.ai, and the user guide pages loaded a script named docsbot-chat.js. docsbot.ai also appeared in the Content-Security-Policy of www.value-domain.com's responses"
  - layer: "NFT domains"
    name: "Unstoppable Domains / ENS resolution"
    confidence: confirmed
    evidence: "The news list on the Value Domain Web3 page (checked 2026-10-13) includes the release of \"Value Domain Web3 byGMO\" on May 25, 2023, a campaign of August 3, 2023 marking the \"unstoppableパートナーシップ締結記念\" (conclusion of the Unstoppable partnership), and the launch of ENS name resolution for DNS domains on March 27, 2024, and contains the wording \"NFTドメイン上位レジストラ(UnstoppableDomains)\" (NFT domain upstream registrar (UnstoppableDomains)). The page lists 12 TLDs (this site's count), including .x, .nft and .crypto"
    evidenceUrl: "https://web3.value-domain.com/"
sources:
  - label: "Value Domain official: Home page (cumulative registrations, kinds of domains, AI domain name suggestions, sign-up entrances)"
    url: "https://www.value-domain.com/"
    accessedAt: "2026-10-13"
  - label: "Value Domain official: Domain price list (by registrar, including the service maintenance adjustment fee rate)"
    url: "https://www.value-domain.com/domain/price/"
    accessedAt: "2026-10-13"
  - label: "Value Domain official: Domain transfer (registrar choice, transferable domains, notes)"
    url: "https://www.value-domain.com/domain/transfer/"
    accessedAt: "2026-10-13"
  - label: "Value Domain official: Domains effectively free forever (signing up together with CORESERVER V2)"
    url: "https://www.value-domain.com/guide/setregist/"
    accessedAt: "2026-10-13"
  - label: "Value Domain official: Repeat customer discount (15 or more, 100 or more)"
    url: "https://www.value-domain.com/service/repeat-customer-discount/"
    accessedAt: "2026-10-13"
  - label: "Value Domain official: Terms of use (membership terms, service terms, upstream registrars, features that use AI)"
    url: "https://www.value-domain.com/terms/"
    accessedAt: "2026-10-13"
  - label: "Value Domain official: Notice under the Specified Commercial Transactions Act"
    url: "https://www.value-domain.com/commercial/"
    accessedAt: "2026-10-13"
  - label: "Value Domain official: Notice under the Payment Services Act (validity of the purchasable balance and points)"
    url: "https://www.value-domain.com/settlement/"
    accessedAt: "2026-10-13"
  - label: "Value Domain official: Value Domain API (API discount, SMS verification, supported registrars)"
    url: "https://www.value-domain.com/service/api/"
    accessedAt: "2026-10-13"
  - label: "Value Domain official: Value Domain API documentation (domains)"
    url: "https://www.value-domain.com/api/doc/domain/"
    accessedAt: "2026-10-13"
  - label: "Value Domain official: Domain and hosting OEM"
    url: "https://www.value-domain.com/service/oem/"
    accessedAt: "2026-10-13"
  - label: "Value Domain official: Affiliate program (A8.net, rewards)"
    url: "https://www.value-domain.com/affiliate/"
    accessedAt: "2026-10-13"
  - label: "Value Domain user guide: Explanation of auto-renewal settings"
    url: "https://www.value-domain.com/userguide/manual/autorenewal_about"
    accessedAt: "2026-10-13"
  - label: "Value Domain user guide: How to set up DNSSEC"
    url: "https://www.value-domain.com/userguide/manual/dnssec"
    accessedAt: "2026-10-13"
  - label: "Value Domain user guide: Setting up WHOIS privacy"
    url: "https://www.value-domain.com/userguide/manual/whoisproxy_on"
    accessedAt: "2026-10-13"
  - label: "Value Domain news: Introducing the service maintenance adjustment fee (2022-12-26)"
    url: "https://www.value-domain.com/information/detail/?no=20221226-1"
    accessedAt: "2026-10-13"
  - label: "Value Domain news: Domain prices for October 2026 (2026-09-28)"
    url: "https://www.value-domain.com/information/detail/?no=20260928-2"
    accessedAt: "2026-10-13"
  - label: "Value Domain official: Revised domain price list (from 10/1, PDF)"
    url: "https://www.value-domain.com/assets/pdf/information/2026/0928/domain_price.pdf"
    accessedAt: "2026-10-13"
  - label: "Value Domain news: Domain price revision (2026-09-15)"
    url: "https://www.value-domain.com/information/detail/?no=20260915-1"
    accessedAt: "2026-10-13"
  - label: "Value Domain official: Revised domain price list (from 11/1, PDF)"
    url: "https://www.value-domain.com/assets/pdf/information/2026/0915/domain_price.pdf"
    accessedAt: "2026-10-13"
  - label: "Value Domain news: .co.jp new registration campaign (2026-09-01)"
    url: "https://www.value-domain.com/information/detail/?no=20260901-2"
    accessedAt: "2026-10-13"
  - label: "Value Domain news: Login screen and support contact merged into Value Domain One (2026-09-24)"
    url: "https://www.value-domain.com/information/detail/?no=20260924-1"
    accessedAt: "2026-10-13"
  - label: "Value Domain: Service status (domains shown by upstream registrar)"
    url: "https://status.value-domain.com/"
    accessedAt: "2026-10-13"
  - label: "Value Domain One: One MCP (connection methods, supported operations, pricing)"
    url: "https://one.value-domain.com/service/mcp"
    accessedAt: "2026-10-13"
  - label: "Value Domain One: One Rental Server (plans, free-forever domain perk)"
    url: "https://one.value-domain.com/rs"
    accessedAt: "2026-10-13"
  - label: "Value Domain Web3: NFT domain registration and management service"
    url: "https://web3.value-domain.com/"
    accessedAt: "2026-10-13"
  - label: "GMO DigiRock, Inc.: Company information (overview, history)"
    url: "https://www.digirock.co.jp/about/"
    accessedAt: "2026-10-13"
  - label: "Onamae.com news: Service maintenance adjustment fee at 25.50% from 12:00 on October 1 (2026-09-25)"
    url: "https://www.onamae.com/news/article/11547"
    accessedAt: "2026-10-13"
  - label: "Cloudflare: IP Ranges (IPv4)"
    url: "https://www.cloudflare.com/ips-v4"
    accessedAt: "2026-10-13"
  - label: "Livewire official site"
    url: "https://livewire.laravel.com/"
    accessedAt: "2026-10-13"
  - label: "Livewire official documentation: Quickstart (prerequisites, installing with Composer)"
    url: "https://livewire.laravel.com/docs/4.x/quickstart"
    accessedAt: "2026-10-13"
---

Value Domain is a domain registration service run by GMO DigiRock, Inc., a GMO Internet Group company. The same company also runs the rental servers CORESERVER, Value Server and XREA, and the home page says a single account can manage both domains and rental servers. In the price list, the same TLD appears on a separate row for each registrar, the amounts are shown with the service maintenance adjustment fee (サービス維持調整費) included, and the fee rate is announced in news posts and price sheets (PDF) issued month by month. In 2026 the service merged its login into the new "Value Domain One", and as of October 2026 it also offers an MCP server for AI agents. This site has also dissected [Onamae.com](/en/articles/onamae) and [Muumuu Domain](/en/articles/muumuu-domain) as domain registration services.

## Service overview

Value Domain centers on registering, renewing and transferring domains, and also lists auctions and back-orders for .jp domains, gTLD auctions, premium domains, WHOIS lookup, SSL certificates, SiteLock and more, which can be signed up for together with CORESERVER, Value Server, XREA and One Rental Server. The home page has a box labeled "最適なドメインをAIに質問" (ask AI for the best domain), where AI comes up with domain names from a written request, and NFT domains are handled on a separate site, "Value Domain Web3".

:::fact
According to GMO DigiRock's company information (checked 2026-10-13), the company (GMO DigiRock, Inc. in English) was registered in July 2001 as 有限会社デジロック (DigiRock, a limited company) and launched the rental server XREA the following month. In January 2002 it started "DOMAIN.XREA.COM", which provided other companies' domains on XREA servers; in March it began a domain registration agency service as an agent of eNom, Inc.; and in August it renamed DOMAIN.XREA.COM to "VALUE-DOMAIN". It signed a designated registrar agreement for general-use JP domains in September 2003, contracted with the German registrar KeySystems in January 2004, and became a stock company in April of that year. In July 2011 it formed a capital and business alliance with GMO Internet Group, Inc.; in May 2013 it changed to its current name; and in February 2026 it officially launched Value Domain One and One Rental Server. Its business is providing internet services and developing software; it had 23 employees (as of October 1, 2026) and capital of 10 million yen, and its head office is in Grand Front Osaka in Kita-ku, Osaka. The Value Domain home page claims more than 7 million cumulative domain registrations, more than 650,000 registered users, more than 20 years of operation and more than 570 kinds of domains. The "バリュードメイン サービス利用規約" (Value Domain service terms) in the terms of use define the service as providing registration of second-level domain names and the name servers to run them, and limit users to people who live in Japan and understand Japanese. In separate sections ("上位レジストラお名前.comドメイン登録規約", "上位レジストラENOMの規約" and "上位レジストラKeySystemsの規約", the terms of the upstream registrars Onamae.com, ENOM and KeySystems), the same page links to each company's terms and asks users to agree to them, and in its "JPRSドメイン登録規約" (JPRS domain registration terms) section it asks them to agree to JPRS's rules.
:::

:::fact
The price list (checked 2026-10-13, tax included) carries a note below the table: "上記表示金額は、サービス維持調整費率を含みます。" (the amounts shown above include the service maintenance adjustment fee rate). A .com with GMO as the registrar costs 790 yen for a first-year registration and 1,986 yen to renew or transfer, and the home page puts a second or later .com at 1,390 yen. A .net costs 2,090 yen in year one and 2,301 yen to renew, a .jp costs 2,035 yen in year one and 3,889 yen to renew or transfer, and a .co.jp costs 5,177 yen to renew or transfer; according to a September 1, 2026 news post, a campaign running until October 31 brings a new .co.jp registration down to 2,000 yen (サービス維持調整費込, fee included). The price box on the home page is marked "（2026.10.31まで）" (until 2026.10.31). According to a September 28, 2026 news post and its price sheet (PDF), prices from 0:00 on October 1 are "サービス維持調整費率 24.5%を含むお支払い額" (payment amounts including the 24.5% service maintenance adjustment fee rate) and apply to domain registrations, renewals and transfers other than those under campaigns. The fee was announced in a December 26, 2022 news post, which cited soaring domestic electricity prices, the weak yen and rising domain procurement costs, said around 10–20% would be added to procedures from February 1, 2023, and planned reviews every one to three months or so. Accounts managing 15 or more domains get a "お得意様割引" (repeat customer discount), which brings a .com to 1,781 yen from the next registration, transfer or renewal. There is also a "ドメイン永久無料" (domain free forever) perk: applying for a CORESERVER V2 plan (CORE-X, Y or Z) together with a domain and signing a contract of 12 months or longer during the trial makes renewals free for eligible domains (.com, .net, .org, .biz, .info and .jp), and makes registration free as well for a domain registered at the same time. Domains managed by other companies and premium domains are excluded.
:::

:::pull
A domain's price is not settled by its TLD alone. It changes with the registrar you go through, how many domains you hold, the month you pay in, and whether you sign up together with a server.
:::

::scorecard

## UX analysis

Value Domain's experience starts with a search box and AI-generated domain name suggestions. The places to check what you will pay are split across the price list, the monthly news posts and PDFs, and the pages for discounts and perks.

- **The table includes the surcharge and opens on the rows on sale.** In this site's own observation (2026-10-13), the price list table had 517 rows, and the "セール中" (on sale) tab was already selected in the HTML. 126 rows carried a campaign price, and in every one of them the first-year registration was cheaper than the renewal (all row counts are this site's count). Besides the domain name, the columns are "新規取得（初年度）" (new registration, first year), "更新/年" (renewal per year), "移管" (transfer), "新規取得（定価）" (new registration, list price) and "WHOIS代行" (WHOIS privacy), so each row shows both the first-year price and the list price. The amounts in the table include the service maintenance adjustment fee rate, and the price sheets call them "お支払い額" (payment amounts).
- **Renewals stall if they straddle the monthly price revision.** A September 28, 2026 news post warns that renewing across the price revision at the start of a month creates a difference from the actual renewal fee, and the domain renewal is then not processed. For bank or postal transfers and convenience store payments, it asks customers to make sure the payment is reflected (normally by the second bank business day) before the month turns, and if a difference arises, the difference must be paid in. It also recommends payment methods that settle immediately, such as automatic credit card payment.
- **Auto-renewal runs six times starting 30 days out, with no advance notice.** According to the explanation of auto-renewal settings, domains and servers set to "自動更新する" (auto-renew) are renewed in six attempts in total starting 30 days before the expiry date, with no advance notice by email or other means. For a renewal to go through, the prepaid "購入可能金額" (purchasable balance) must cover the renewal fee or automatic credit card payment must be enabled. According to the notice under the Payment Services Act, the purchasable balance is valid for three years from purchase and Value Domain points for six months from issue.
- **Login now goes through One, and you choose between two control panels.** According to a September 24, 2026 news post, from September 25 the Value Domain login screen was merged into the Value Domain One login screen, and after logging in, users choose between "従来のコントロールパネルを使う" (use the conventional control panel) and "Value Domain One パネルを使う" (use the Value Domain One panel). The support contact moved to One as well. Sign-up also has two entrances: the home page adds "外部サービスでの登録が一部未対応（Google等）" (sign-up through some external services, such as Google, not yet supported) to the conventional user registration, and lists Google, Yahoo!, GMO ID and Amazon for creating a One account.
- **WHOIS privacy works differently by registrar.** In the price list's "WHOIS代行" column, 476 of 517 rows were marked ○ and 41 were marked ✕ (this site's count). According to the manual for setting up WHOIS privacy, the service publishes Value Domain's information in place of the registrant information shown in WHOIS, and checks whether the registered user information is accurate when it is enabled. Domains with eNom switch immediately, while for domains with KeySystems two emails asking to approve a change of registrant name arrive, and the setup completes once both are approved. The manual also says the domain will be suspended if spam or terms violations occur while privacy is on, and that the information will be forcibly changed back to the user's own in cases such as domain disputes.
- **Fees for registered domains are not refunded, and cancelled transfers are refunded in points.** The notice under the Specified Commercial Transactions Act accepts cancellations of credit card and bank transfer orders only within 10 days of the order, but says that in either case fees for domains already registered cannot be cancelled or refunded. The API page likewise says fees for purchases and renewals made through the API cannot be cancelled or refunded. According to the transfer page, refunds for cancelled transfers are returned in full as Value Domain points, and a transfer costs one year's renewal fee and extends the expiry date by one year on completion.

## Tech stack

::techstack

:::fact
In this site's own observation (2026-10-13), the www, one, status, web3 and mcp hosts of value-domain.com all returned, over HTTP/2, server: cloudflare and a cf-ray ending in NRT, and set a cookie named __cf_bm. The name servers of value-domain.com itself are gabriel.ns.cloudflare.com and vera.ns.cloudflare.com, and the customer-facing name servers ns1–ns5.value-domain.com and ns11–ns13.value-domain.com returned addresses inside 172.64.0.0/13, a range Cloudflare publishes as its own IPv4 addresses. www.value-domain.com uses URLs ending in .php, such as /login.php for login and /support.php for support, and /vdapi/ set a PHPSESSID cookie before redirecting to the login on one.value-domain.com. The home page contained code that loads /assets/js/lib/jquery.js (jQuery v3.5.1), slick-carousel 1.8.1 from jsDelivr, the Google Translate widget, GMO's shared header and footer scripts on cache.img.gmo.jp, Cloudflare's beacon.min.js and chat.js from widget.docsbot.ai. The Content-Security-Policy of the response lists 68 distinct hosts under a single default-src, including *.stripe.com, payments.amazon.co.jp, auth.login.yahoo.co.jp, unstoppabledomains.com, docsbot.ai and bzr.openai.com (this site's count). one.value-domain.com and mcp.value-domain.com returned x-turbo-charged-by: LiteSpeed; one.value-domain.com set cookies named XSRF-TOKEN and value_domain_one_session, and its HTML loaded /livewire/livewire.min.js, scripts under /build/assets/, the Tailwind CSS CDN, Bootstrap 5.3.0 and jQuery 3.7.1. Livewire's official documentation (Quickstart, checked 2026-10-13) lists Laravel version 10 or later as a prerequisite and shows installing it by running composer require livewire/livewire from the root directory of a Laravel app. The user guide under /userguide/ loads a theme and plugins under /userguide/wp-content/.
:::

:::fact
According to the Value Domain API page (checked 2026-10-13), the API is free for every registered user and automates purchases, renewals and setting changes for domains and servers that are otherwise done in the control panel. Issuing an API key requires SMS verification, and the domain API also supports general-use JP, organizational JP (.co.jp and .or.jp) and prefecture-type JP domains, but not domains whose managing registrar is Enom or Key-Systems. Registrations and renewals through the API are charged at the "お得意様割引サービス（バルクレジスター）" (repeat customer discount, bulk register) price, which brings a .com from 1,986 yen to 1,781 yen. The API documentation for domains is written in OpenAPI 3.0.0 and published with ReDoc 2.0.0-rc.24. The endpoint is https://api.value-domain.com/v1/, and authentication uses Bearer tokens. It lists 51 operations across 32 paths (this site's count), from domain registration, transfer requests, expiry extension, auto-renewal, transfer lock, Whois, name servers, DNS, dynamic DNS, DNSSEC, private name servers and moving domains between users to free name servers, availability search and API logs, and the registrar field of a new registration says "'GMO'のみ対応しています" (only 'GMO' is supported). The One MCP page (last updated October 8, 2026) says domain registration, DNS settings, server operations, site publishing and more can be run through conversation with AI, and that use of the MCP server is free (AI token costs are borne by the user). The endpoint is https://mcp.value-domain.com/mcp, authentication uses OAuth 2.1 and PKCE, and the page states "重要な操作は確認プロンプトを経るため、AIが勝手に課金や削除を行うことはありません。" (important operations go through a confirmation prompt, so AI will not charge or delete anything on its own). When "ValueDomainMCP" is chosen and connected from the "コネクタ" (connectors) in claude.ai, new domain registrations, renewals (term extensions) and transfers, new server contracts, renewals, plan changes and cancellations, listing and revoking API tokens and more are excluded, while adding it by entering the endpoint URL makes every function available. AI site generation (β) currently supports publishing on subdomains of the form xxxx.oners.jp. In this site's own observation (2026-10-13), the OAuth authorization server metadata on the same host showed the authorization code grant, PKCE with S256, no client authentication (none) and a dynamic client registration endpoint, and listed 33 scopes (this site's count), including domain:contract, server:contract, domain:transfer and apikey:manage.
:::

:::guess
The three layers, URLs ending in .php with PHPSESSID cookies on www.value-domain.com, a WordPress user guide, and Value Domain One loading Livewire, read as traces of keeping the legacy site that dates back to 2002 (renewed in January 2021) while launching the new One as a separate application and moving users over, starting from the login and support entrances. Judging from the XSRF-TOKEN and value_domain_one_session cookies and the /livewire/ script, One appears to be built with Laravel and Livewire. Since not only the company's own domain but also the customer-facing name servers return addresses in Cloudflare's range, [Cloudflare](/en/articles/cloudflare)'s network appears to sit in front of the authoritative DNS as well. The 68 hosts in the Content-Security-Policy also read as a list of the outside services the site relies on, such as payments, sign-in through external services, chat, analytics and AI. That new registrations through the API support only GMO, and not domains with Enom or Key-Systems, is presumably because automation is focused on the registrar the company mainly uses. One MCP's scopes carve out contracts (domain:contract and server:contract) and transfers separately from reading and settings, and connecting from the connector list leaves out operations that involve charges, as well as cancellations and API token management. This reads as a design that draws the line against unintended charges and the like by AI agents on the permission side.
:::

## Three prices for the same .com — prices split by registrar, and price sheets reissued every month

:::fact
In this site's own observation (2026-10-13), the 517 rows of the price list break down by registrar label into 393 GMO rows, 97 KeySystems rows, 19 eNom rows and 8 JPRS rows, and 24 TLDs, including .com, .net, .org, .info and .biz, were split across rows for two or three registrars. For these five gTLDs, the GMO row is the cheapest to renew and the eNom row the most expensive (both this site's count). The service status page lists "GMO(お名前.com)", "JPRS", "eNom" and "KeySystems" under domains, and on the transfer page customers choose GMO, KeySystems or eNom as the registrar when applying, with transfers of .bz, .mn, .sc, .vc, .co, .com.tw and others accepted only through KeySystems. October's price sheet (from 10/1) gives the rate as 24.5%, and its before and after amounts were identical on every row (this site's count). A note beside its JPRS heading, however, says that Japanese-language JP domains registered on or before September 25, 2010 change from 691 yen to 817 yen (tax included) for both renewal and transfer. Meanwhile, a September 15, 2026 news post announced that from 0:00 on November 1 the prices of some domains would be revised, mainly because of "卸元レジストラによる提供価格の大幅変更" (major changes in the prices offered by wholesale registrars), with no change to other prices. According to its price sheet (from 11/1), the regular prices (new registration, renewal and transfer) of .com, .net, .org and .biz go up through GMO, ENOM and "CentralNicReceller（旧 KeySystems）" (formerly KeySystems) alike: a .com through GMO goes from 1,986 yen to 2,283 yen, and a .com at the repeat customer discount for 15 or more domains from 1,781 yen to 2,154 yen. A .fm through KeySystems goes from 15,593 yen to 26,510 yen. Onamae.com, which the terms of use name as an upstream registrar, set its own fee for domains (including options) at 25.50% from 12:00 on October 1 in a September 25, 2026 news post, naming "為替状況の変動" (fluctuations in exchange rates) as the main factor.
:::

| Domain (tax included, one year) | Registrar | First-year registration | Renewal | Transfer | Regular price from November 1 |
| --- | --- | --- | --- | --- | --- |
| .com | GMO | 790 yen | 1,986 yen | 1,986 yen | 2,283 yen |
| .com | KeySystems | 2,231 yen | 2,231 yen | 2,231 yen | 2,566 yen |
| .com | eNom | 2,643 yen | 2,643 yen | 2,643 yen | 3,039 yen |
| .net | GMO | 2,090 yen | 2,301 yen | 2,301 yen | 2,485 yen |
| .org | GMO | 1,370 yen | 2,301 yen | 2,301 yen | 2,553 yen |
| .biz | GMO | 420 yen | 3,395 yen | 3,395 yen | 3,633 yen |
| .info | GMO | 590 yen | 3,949 yen | 3,949 yen | not in the revision |
| .jp | JPRS | 2,035 yen | 3,889 yen | 3,889 yen | not in the revision |
| .co.jp | JPRS | 2,000 yen | 5,177 yen | 5,177 yen | not in the revision |

First-year, renewal and transfer prices are the price list's values (checked 2026-10-13, tax included, including the service maintenance adjustment fee rate). The rightmost column is the revised amount in the price sheet (from 11/1) attached to the September 15, 2026 news post, where the KeySystems rows are labeled "CentralNicReceller（旧 KeySystems）". The 2,000 yen for .co.jp is a campaign price until October 31, and the home page marks its price box, including the 790 yen for .com, with "（2026.10.31まで）" (until 2026.10.31).

:::guess
With the GMO row the cheapest for the five main gTLDs and new registrations through the API supporting only GMO, the main route today appears to be GMO (Onamae.com), while the eNom and KeySystems rows appear to remain from a history of starting domain registration as an eNom agent in March 2002 and adding a KeySystems contract in 2004, and to carry over the domains managed through each. The KeySystems rows also read as a way to widen the range of domains on offer: transfers of .bz, .co and others are accepted only through KeySystems, and in the price list 73 kinds of domains, such as .fm, .mn and .sc, appear only on KeySystems rows (this site's count). In the November revision, .com rises by about 15% regardless of registrar, .org by about 11%, .net by about 8% and .biz by about 7% (this site's calculation). Since the rates line up regardless of registrar, the revision appears to reflect changes in each TLD's wholesale price rather than the circumstances of individual registrars. The .com at the repeat customer discount rises by about 21%, and its gap to the regular price narrows from 205 yen to 129 yen (this site's calculation). October's fee rate of 24.5% differed from the 25.50% Onamae.com shows as its own rate, and the amounts in October's price sheet had not moved from the previous month. Value Domain presumably reissues its price sheets each month and reflects wholesale price changes through revisions of the regular price, rather than tracking exchange rate movements finely through a monthly rate. The "（2026.10.31まで）" (until 2026.10.31) attached to the home page's price box (in the heading over both the registration and renewal prices) also reads as a cutoff at the day before this revision.
:::

## Business model

Value Domain's earnings appear to be built on domain registration, renewal and transfer fees, with contracts for rental servers, SSL certificates, Google Workspace and more sold under the same account stacked on top. Referrals are gathered through an A8.net affiliate program, and for businesses that hold many domains there are the repeat customer discount, the API and OEM.

:::fact
The One Rental Server page (checked 2026-10-13) lists three plans after a 15-day free trial: Basic from 680 yen a month, Pro from 1,680 yen a month and Business from 2,680 yen a month, each on a 36-month contract, with a perk keeping one or two custom domains free forever depending on the plan. The same page claims more than 1 million hosted sites, more than 7 million managed domains and more than 24 years of experience running infrastructure. The home page puts Google Workspace's Business Starter plan at 880 yen a month and up (10,560 yen a year) and says no DNS verification is needed for domains managed at Value Domain. The repeat customer discount page applies discounted prices from the next purchase for accounts managing 15 or more domains, and applies the price for 100 or more (1,582 yen for a .com) after an inquiry. The domain and hosting OEM page says businesses can offer domains and hosting under their own brand on top of in-house hosting such as CORESERVER, Value Server and XREA, or cPanel and DirectAdmin, and breaks the monthly fee down into server rental and technical support charged by the time spent. According to the affiliate page, the program runs on the ASP A8.net, and the rewards (tax excluded) are 100 yen each for a new domain registration and a transfer to Value Domain (50 yen each at a campaign price), 2,000 yen for a new application for Omakase Start (おまかせスタート, a setup service), and 100 yen to 10,000 yen for new CORESERVER contracts depending on the plan and term. The Value Domain Web3 page explains that for NFT domains, payment is made only at registration and no renewal fee is ever charged, while its FAQ also says that domains with a management fee may require a separate annual management agency fee (管理代行料).
:::

:::guess
A company of 23 employees runs, in addition to domains, four rental servers, SSL certificates, NFT domains and even an AI article-writing tool. The domain-free-forever perk, which forgoes renewal fees when a server is signed up for at the same time, reads as a way to swap the domain fee for the monthly fee of CORESERVER or One Rental Server and keep the contract going longer. The gap in affiliate rewards, 100 yen for a domain registration versus up to 10,000 yen for a new CORESERVER contract, also appears to reflect a design that values the server contracts on top more than the domains themselves. The repeat customer discount, the API discount and OEM are presumably tools for keeping businesses and web production firms that hold many domains close, more than for winning new individual customers. A domain company that earns from renewal fees selling NFT domains that as a rule carry no renewal fees on a separate site, and opening up everything from domain registration to server creation to customers and AI through a free API and One MCP, appears to be an attempt to widen its lineup with few people and add entrances without adding manual work.
:::

Value Domain, which began with DOMAIN.XREA.COM in January 2002 and started registering domains as an eNom agent that March, has carried on for 24 years while adding a KeySystems contract, designated registrar status for general-use JP domains and an alliance with GMO Internet Group. In its price list, several registrars' prices line up for a single TLD, and monthly price sheets and the surcharge, bulk discounts and combinations with servers stack on top. Now that Value Domain One and an MCP server sit on top of the PHP site, the question is whether it can offer this intricate pricing as an entrance that both people and AI agents can read.
