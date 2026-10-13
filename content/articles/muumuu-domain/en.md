---
service: "Muumuu Domain"
title: "Fewer Contracted Domains, Rising Sales — Dissecting Muumuu Domain Through a .com That Costs 750 Yen in Year One and 1,728 Yen to Renew Before a 25.50% Surcharge, Domains Kept Free for as Long as a Server or Google Workspace Contract Lasts, and an MCP Server That Lets AI Agents Register Domains"
description: "Muumuu Domain is a domain registration service run by GMO Pepabo, Inc. that launched in January 2004. According to its terms of use, it relies on Onamae.com (GMO Internet, Inc.) and eNom, Inc. of the US as registrars, and its home page claims more than 620 kinds of domains and 5.6 million cumulative registrations. In the price list (checked 2026-10-13, tax included), a .com costs 750 yen in year one and 1,728 yen to renew or transfer, and the service maintenance adjustment fee (サービス維持調整費) added since February 2023 stood at 25.50% in October 2026, which brings a .com renewal to 2,168 yen. Signing up for Muumuu Server or Google Workspace (Standard plan or higher) together with a domain makes registration and renewal free for more than 45 eligible domain types. According to GMO Pepabo's earnings presentation, contracted domains fell from 1,076,138 at the end of June 2024 to 1,012,324 at the end of June 2026, while quarterly sales rose from about 650 million yen to about 730 million yen. Using the price list, the terms of use, renewal and recovery fees, Domain Lock, Muumuu Server, the official documentation for API v2 and the MCP server, news posts, GMO Pepabo's company profile, history, company introduction, earnings presentation and engineering blog, and this site's own observations, the article dissects a three-tier pricing of year one, renewal and surcharge, a site where PHP, Ruby and Nuxt live side by side, an API opened to AI agents, and a business that stacks options on top of domains as the entry point."
lead: "Muumuu Domain's price list has a checkbox labeled \"サービス維持調整費を含む\" (include the service maintenance adjustment fee), and it starts out unchecked. With it unchecked, the table shows a .com renewal at 1,728 yen; according to the data embedded in the page, including the 25.50% surcharge makes it 2,168 yen. Meanwhile, the page for its \"ドメインずっと無料\" (domains free forever) perk says that renewal fee drops to zero if you sign up together with a server or Google Workspace. Launched in 2004 and claiming 5.6 million cumulative registrations, the service has grown its sales while its contracted domains fell by more than 60,000 in two years, and in 2026 it opened an MCP server that lets AI agents register domains. This article dissects its pricing, mechanics and money flows from public information alone."
category: dev-tool
tags: [domains, hosting, small-business, api, mcp, security, subscription]
publishedAt: "2026-10-13"
updatedAt: "2026-10-13"
lastVerified: "2026-10-13"
expires:
  - date: "2026-10-31"
    claim: "The 25% first-year Google Workspace discount (the page says \"until October 31\")"
  - date: "2026-10-31"
    claim: "October's 25.50% service maintenance adjustment fee and the prices that include it (a .com renewal at 2,168 yen, etc.)"
serviceUrl: "https://muumuu-domain.com/"
# Affiliate link placeholder: Muumuu Domain publishes a per-result reward table on its official page
# (https://muumuu-domain.com/affiliate, checked 2026-10-13): new Muumuu Server contract (3 months or
# longer) 5,000 yen, Muumuu Domain for WP Hosting 3,000 yen, Google Workspace 2,000 yen per account,
# domain registration 100 yen, transfer to Muumuu Domain 100 yen (some domains 50 yen), 1 yen per ad
# click. The page's "learn more about the referral program" link opens A8.net's program search
# (keyword s00000000404008), and it recommends registering with A8.net for free first
# (https://www.a8.net/as/as_promo/), then applying to the program from A8.net. A8.net is an ASP whose
# ad code must be used as provided: copy the link to affiliate.url, the 1x1 impression image to
# affiliate.impressionUrl, and the text ad verbatim to affiliate.label. Never invent the label — ask
# the owner for the material's exact text. Keep every field identical in ja.md and en.md (parity.ts
# checks it).
# affiliate:
#   url: "https://px.a8.net/svt/ejp?a8mat=<muumuu-domain-material>"
#   program: "Muumuu Domain Affiliate Program (A8.net)"
#   impressionUrl: "https://www18.a8.net/0.gif?a8mat=<muumuu-domain-material>"
#   label: "<verbatim text of the ad material>"
vendor: "GMO Pepabo, Inc."
origin: "JP"
heroTheme: "muumuu-domain"
scores: { product: 4.0, ux: 3.5, tech: 4.0, business: 3.5 }
techStack:
  - layer: "Registrar"
    name: "Onamae.com / eNom (upstream registrars)"
    confidence: confirmed
    evidence: "Article 2 of the terms of use (last revised September 14, 2026; checked 2026-10-13) states that, in providing the service, the company uses Onamae.com (GMO Internet, Inc.) and eNom, Inc. of the US as registrars, and that other registrars may be used for some domains. The same terms define the service as \"ムームードメイン ドメイン取得代行サービス\" (Muumuu Domain domain registration agency service)"
    evidenceUrl: "https://muumuu-domain.com/?mode=kiyaku"
  - layer: "Service site (newer pages)"
    name: "Nuxt / Vue.js / Istio + Envoy"
    confidence: likely
    evidence: "In this site's own observation (2026-10-13), the home page, the price list, /developers/ and the MCP pages returned server: istio-envoy and muu-origin-app: js, and their HTML contained scripts under /_nuxt/ and state data in window.__NUXT__ (the API v2 documentation page also returned js, but it was built with Redoc and showed no trace of Nuxt). GMO Pepabo's tech stack page lists Vue.js/Nuxt.js for the frontend and Kubernetes for the infrastructure of the Lolipop and Muumuu Domain division"
  - layer: "Service site (older pages and login)"
    name: "PHP / Ruby on Rails"
    confidence: confirmed
    evidence: "In a July 26, 2017 engineering blog post, a Muumuu Domain engineer explains that the service had been developed in PHP since its launch, that the smartphone site, landing pages and other parts had recently been built with Ruby on Rails, and that every page of the shopping cart except the top page was built with Ruby on Rails (4.2 at the time), with Vue.js used for the top page's modals and the cart's detail settings pages. In this site's own observation (2026-10-13), the /?mode= pages returned muu-origin-app: php, a PHPSESSID cookie and the EUC-JP character encoding, while the /information/ news pages and the /checkout/login page returned muu-origin-app: rb"
    evidenceUrl: "https://tech.pepabo.com/2017/07/26/muumuu-shopping-cart/"
  - layer: "Public API"
    name: "Muumuu Domain API v2 / OpenAPI (3.1.0; PAT, OAuth 2.0, sandbox)"
    confidence: confirmed
    evidence: "The API v2 documentation (checked 2026-10-13) is written in OpenAPI 3.1.0 and lists endpoints for owned domains, DNS records, name servers, availability search, purchase quotes and purchases, Personal Access Tokens and payment history, rate limits of 1,000 requests an hour for authenticated and 100 for unauthenticated requests, and a sandbox at api-sandbox.muumuu-domain.com separated from the production database"
    evidenceUrl: "https://muumuu-domain.com/developers/openapi-me.html"
  - layer: "AI agent integration"
    name: "Remote MCP server / OAuth (HTTP transport, PKCE S256, dynamic client registration)"
    confidence: confirmed
    evidence: "The MCP setup guide (checked 2026-10-13) gives the endpoint https://mcp.muumuu-domain.com/mcp, adding it in Claude Code with --transport http, OAuth 2.0, short-lived (two-hour) access tokens that are refreshed automatically, and scopes such as domains:purchase. In this site's own observation (2026-10-13), the authorization server metadata on the same host showed OAuth 2.1, mandatory PKCE with S256 and a dynamic client registration endpoint"
    evidenceUrl: "https://muumuu-domain.com/muumuu-domain-mcp/setup"
  - layer: "AI domain name suggestions"
    name: "OpenAI (domain name suggestions)"
    confidence: confirmed
    evidence: "Articles 32-2 to 32-5 of the terms of use state that users of features such as the one where AI suggests domains matching a user's request must comply with the terms of \"OpenAI\" provided by OpenAI, Inc., and that the information they send may be sent to, stored and used by OpenAI, Inc. and used for AI training"
    evidenceUrl: "https://muumuu-domain.com/?mode=kiyaku"
  - layer: "Muumuu Server"
    name: "heteml (infrastructure behind Muumuu Server)"
    confidence: confirmed
    evidence: "The Muumuu Server page (checked 2026-10-13) states that it uses the infrastructure of heteml, a rental server GMO Pepabo has operated for many years. Article 32-6 of the terms of use applies the \"ヘテムル利用規約\" (heteml terms of use) to Muumuu Server as well"
    evidenceUrl: "https://muumuu-domain.com/hosting/muumuu-servers"
  - layer: "Credit card authentication"
    name: "GMO Payment Gateway (card authentication)"
    confidence: confirmed
    evidence: "Article 30 of the terms of use states that, to detect and prevent fraudulent credit card use, part of the identity authentication work is outsourced to GMO Payment Gateway, Inc., and personal information is provided to it to the extent necessary"
    evidenceUrl: "https://muumuu-domain.com/?mode=kiyaku"
  - layer: "Login password check"
    name: "Have I Been Pwned (Pwned Passwords range API)"
    confidence: likely
    evidence: "In this site's own observation (2026-10-13), a script named pwned_password loaded by /checkout/login contained a function named checkPwnedPassword that computes the SHA-1 hash of the entered password and sends its first five characters to https://api.pwnedpasswords.com/range. On the login screen, the message \"パスワード強度の診断中です...\" (checking password strength...) appears while the check runs (after the user leaves the password field)"
  - layer: "Help center"
    name: "Zendesk / Cloudflare (help center at support.muumuu-domain.com)"
    confidence: likely
    evidence: "In this site's own observation (2026-10-13), support.muumuu-domain.com has a CNAME pointing to muumuu-domain.zendesk.com and returned 403, server: cloudflare and cf-mitigated: challenge to this site's scripted requests. The SPF record of muumuu-domain.com includes mail.zendesk.com and _spf.onamae.com"
sources:
  - label: "Muumuu Domain official: Home page (5.6 million cumulative registrations, 620+ kinds, news)"
    url: "https://muumuu-domain.com/"
    accessedAt: "2026-10-13"
  - label: "Muumuu Domain official: Price list (registration, renewal, transfer, options)"
    url: "https://muumuu-domain.com/domain/price"
    accessedAt: "2026-10-13"
  - label: "Muumuu Domain official: Domains free forever (eligible domains, conditions, support channels)"
    url: "https://muumuu-domain.com/domain/treats/server"
    accessedAt: "2026-10-13"
  - label: "Muumuu Domain official: About domain renewal (auto-renewal, renewal reminder emails)"
    url: "https://muumuu-domain.com/supports/renew-domain"
    accessedAt: "2026-10-13"
  - label: "Muumuu Domain official: Terms of use (last revised 2026-09-14)"
    url: "https://muumuu-domain.com/?mode=kiyaku"
    accessedAt: "2026-10-13"
  - label: "Muumuu Domain official: Domain registration recovery fee table"
    url: "https://muumuu-domain.com/?mode=recovery_contract"
    accessedAt: "2026-10-13"
  - label: "Muumuu Domain official: Domain Lock"
    url: "https://muumuu-domain.com/security/domain-lock"
    accessedAt: "2026-10-13"
  - label: "Muumuu Domain official: Muumuu Server (heteml infrastructure, minimum term)"
    url: "https://muumuu-domain.com/hosting/muumuu-servers"
    accessedAt: "2026-10-13"
  - label: "Muumuu Domain official: Google Workspace (25% off the first year, Google Cloud certified partner)"
    url: "https://muumuu-domain.com/lp/google-workspace"
    accessedAt: "2026-10-13"
  - label: "Muumuu Domain official: Muumuu Domain MCP server"
    url: "https://muumuu-domain.com/muumuu-domain-mcp/"
    accessedAt: "2026-10-13"
  - label: "Muumuu Domain official: MCP server setup guide (OAuth, scopes)"
    url: "https://muumuu-domain.com/muumuu-domain-mcp/setup"
    accessedAt: "2026-10-13"
  - label: "Muumuu Domain official: Muumuu Domain API v2 documentation"
    url: "https://muumuu-domain.com/developers/openapi-me.html"
    accessedAt: "2026-10-13"
  - label: "Muumuu Domain official: About affiliate blogs (reward table)"
    url: "https://muumuu-domain.com/affiliate"
    accessedAt: "2026-10-13"
  - label: "Muumuu Domain news: Introducing the service maintenance adjustment fee (2022-12-26)"
    url: "https://muumuu-domain.com/information/news/4901"
    accessedAt: "2026-10-13"
  - label: "Muumuu Domain news: Adjustment fee for August 2026 (2026-07-31)"
    url: "https://muumuu-domain.com/information/news/5880"
    accessedAt: "2026-10-13"
  - label: "Muumuu Domain news: Adjustment fee for September 2026 (2026-08-31)"
    url: "https://muumuu-domain.com/information/news/5901"
    accessedAt: "2026-10-13"
  - label: "Muumuu Domain news: Adjustment fee for October 2026 (2026-09-30)"
    url: "https://muumuu-domain.com/information/news/5918"
    accessedAt: "2026-10-13"
  - label: "Muumuu Domain news: .co.jp offered at 900 yen (2026-09-08)"
    url: "https://muumuu-domain.com/information/news/5903"
    accessedAt: "2026-10-13"
  - label: "Muumuu Domain news: WHOIS registrant name hiding for general-use and prefecture-type JP domains (2026-09-14)"
    url: "https://muumuu-domain.com/information/news/5912"
    accessedAt: "2026-10-13"
  - label: "Muumuu Domain news: AI Homepage contracts managed from MCP and the Concierge (2026-09-25)"
    url: "https://muumuu-domain.com/information/news/5919"
    accessedAt: "2026-10-13"
  - label: "GMO Pepabo: Press release on Muumuu Domain becoming a verified Claude connector (2026-10-07)"
    url: "https://pepabo.com/news/press/202610071300/"
    accessedAt: "2026-10-13"
  - label: "GMO Pepabo, Inc.: Company profile"
    url: "https://pepabo.com/company/overview/"
    accessedAt: "2026-10-13"
  - label: "GMO Pepabo, Inc.: History"
    url: "https://pepabo.com/company/history/"
    accessedAt: "2026-10-13"
  - label: "GMO Pepabo, Inc.: Company introduction materials (businesses, sales by segment)"
    url: "https://pdf.pepabo.com/other/pepabo_company_information.pdf"
    accessedAt: "2026-10-13"
  - label: "GMO Pepabo, Inc.: Q2 earnings presentation for the fiscal year ending December 2026 (2026-08-13)"
    url: "https://www.nikkei.com/markets/ir/irftp/data/tdnr/tdnetg3/20260813/g2rw0w/140120260813519264.pdf"
    accessedAt: "2026-10-13"
  - label: "Pepabo Tech Portal: GMO Pepabo's tech stack, Lolipop and Muumuu Domain division"
    url: "https://tech.pepabo.com/tech-stack/hosting/"
    accessedAt: "2026-10-13"
  - label: "Pepabo Tech Portal: Muumuu Domain released a shopping cart feature (2017-07-26)"
    url: "https://tech.pepabo.com/2017/07/26/muumuu-shopping-cart/"
    accessedAt: "2026-10-13"
  - label: "Onamae.com news: Service maintenance adjustment fee at 25.50% from 12:00 on October 1 (2026-09-25)"
    url: "https://www.onamae.com/news/article/11547"
    accessedAt: "2026-10-13"
  - label: "Onamae.com news: Service maintenance adjustment fee at 26.25% from 12:00 on September 1 (2026-08-25)"
    url: "https://www.onamae.com/news/article/11506"
    accessedAt: "2026-10-13"
  - label: "Onamae.com news: Service maintenance adjustment fee at 27.00% from 12:00 on August 3 (2026-07-24)"
    url: "https://www.onamae.com/news/article/11486"
    accessedAt: "2026-10-13"
---

Muumuu Domain is a domain registration service run by GMO Pepabo, Inc. According to GMO Pepabo's company introduction materials, the same company also runs [Lolipop!](/en/articles/lolipop) and [ColorMe Shop](/en/articles/colorme-shop), both dissected on this site. The home page claims 5.6 million cumulative registrations and more than 620 kinds of domains, and lays out paths from a new domain to email, servers, site building and Google Workspace. In the price list, a year-one registration price, a renewal price that is higher than the year-one price for 124 of 521 domains (this site's count of the price list data), and a service maintenance adjustment fee (サービス維持調整費) reviewed every one to three months (it changed monthly from August to October 2026) stack on top of one another. Those registration and renewal fees drop to zero when an eligible domain is signed up together with an eligible option.

## Service overview

Muumuu Domain centers on registering, renewing and transferring domains, and offers options such as Domain Lock, Muumuu Mail, Muumuu Server, AI Homepage, MuuMuu Sites and Google Workspace under the same account. Its menus also include auctions and back-orders for JP domains, premium domain registration and bulk registration, and in 2026 it opened an API for developers and an MCP server for AI agents.

:::fact
According to GMO Pepabo's history page (checked 2026-10-13), the company (then paperboy&co. Ltd.) launched the domain registration agency service "Muumuu Domain" in January 2004, became a stock company in March of that year and a consolidated subsidiary of Global Media Online, Inc. (now GMO Internet Group, Inc.), and changed to its current name in April 2014. The terms of use were established on January 15, 2004 and last revised on September 14, 2026. They define the service as "ムームードメイン ドメイン取得代行サービス" (Muumuu Domain domain registration agency service) and state that, in providing it, the company uses [Onamae.com](/en/articles/onamae) (GMO Internet, Inc.) and eNom, Inc. of the US as registrars. According to the company profile, GMO Pepabo, Inc. was founded on January 10, 2003, its securities code is 3633 (Standard Market of the Tokyo Stock Exchange), its capital is 262.22 million yen, its consolidated sales for the fiscal year ending December 2025 were 10,959.1 million yen, it had 362 employees at the end of December 2025 (308 regular and 54 temporary), and its major shareholders include GMO Internet Group, Inc. The home page claims 5.6 million cumulative registrations, more than 20 years of track record and more than 620 kinds of domains. The Q2 earnings presentation for the fiscal year ending December 2026 (August 13, 2026) describes Muumuu Domain as a domain registration agency service offering "400種類以上の豊富なドメイン" (a rich selection of more than 400 kinds of domains), names individuals and small and medium-sized companies as its main users, and gives 1.01 million contracts (as of the end of June 2026). The number of domains handled differs by source (more than 620 on the home page, more than 400 in this presentation and 521 in the price list data described below), and the counts are not reconciled here.
:::

:::fact
According to the price list (checked 2026-10-13, tax included, per year), a .com costs 750 yen to register, 1,728 yen to renew and 1,728 yen to transfer; .net costs 1,848 yen for all three; .jp costs 990 yen to register and 3,344 yen to renew or transfer; and .co.jp costs 900 yen to register and 4,378 yen to renew. The price list shows no end date for the registration prices, and a September 8, 2026 news post offering .co.jp at 900 yen says the price applies only to a one-year term for new registrations and may end without notice. Above the table sits a checkbox labeled "サービス維持調整費を含む" (include the service maintenance adjustment fee). According to a September 30, 2026 news post, the fee from 0:00 on October 1 is 25.50%, multiplied against the domain price before tax and charged on new registrations, renewals and transfers. According to the options table in the price list, Domain Lock costs 1,320 yen a year, Muumuu Mail 2,350 yen a year, Muumuu Server 1,430 yen a month after the first two months free, and AI Homepage 2,200 yen a month. According to the page for "ドメインずっと無料" (domains free forever), signing up for Muumuu Server or Google Workspace (Standard plan or higher) at the same time as a domain makes registration and renewal free for more than 45 eligible domain types, including .jp, .com, .co.jp and .net. The conditions are registering by credit card, a one-year term, and signing up for and continuing to use an eligible option; cancelling or not paying for the option removes the perk, and premium domains are excluded. Article 27 of the terms of use allows users to have GMO Pepabo's information published free of charge in place of their own in Whois, within the scope set by the upstream registrars and registries.
:::

:::pull
A domain's price is not settled by its year-one registration price. It is settled by the renewal price from year two, a surcharge reviewed every one to three months, and whether you sign up together with an option.
:::

::scorecard

## UX analysis

Muumuu Domain's experience starts with a search box and AI-generated domain name suggestions and continues on to email and site building after registration. The full picture of what you will pay is split across a checkbox, notes and news posts.

- **The table's default view excludes the surcharge.** In this site's own observation (2026-10-13), the price list's "サービス維持調整費を含む" (include the service maintenance adjustment fee) checkbox was unchecked in the HTML itself, and the display setting embedded in the page was also set to exclude the fee. The same data holds tax-included prices with the fee as well: a .com renewal goes from 1,728 yen to 2,168 yen, and a .jp renewal from 3,344 yen to 4,196 yen. A news post says the price list shows domain prices (tax included) and asks customers to confirm the actual amount on the billing screen.
- **Auto-renewal is on from the start.** According to the page about domain renewal, auto-renewal is set when a domain is registered, and payment is processed one month before the renewal deadline for that domain's minimum renewal period. Auto-renewal accepts credit cards and Osaipo! payment, while convenience store payment and bank transfer are available for manual renewals from the control panel. Renewal reminder emails arrive 30, 15, 10, 2 and 1 days before expiry and on the expiry date, and the emails allow renewal without logging in.
- **Recovery after expiry is charged separately.** According to the domain registration recovery fee table, recovering the registration of an expired domain costs 13,280 yen for .jp and prefecture-type .jp, 28,600 yen for .co.jp and .or.jp, and 37,500 yen for .com, .net and others, with the domain renewal fee charged on top. A note says the recovery period differs by domain.
- **Whois privacy is free, and general-use and prefecture-type JP domains can hide the registrant name too.** According to Article 27 of the terms of use, Whois privacy can be applied free of charge at registration and from the members' page, and a registrar transfer is not possible while it is applied. According to a September 14, 2026 news post, general-use and prefecture-type JP domains can now hide the registrant name per domain using JPRS's "WHOIS登録者情報非表示設定機能" (WHOIS registrant information hiding feature). Article 27-2, added to the terms on the same day, sets the default to public, makes the name private only when the registrant chooses so, and rules out combining it with Whois privacy.
- **An approval step between a production firm and its client.** According to the Domain Lock page, four items can be locked: Whois information, name servers, changes of manager (transfers and assignments) and contract settings (auto-renewal changes and cancellation), and changing a locked item requires an application and an approval. A diagram shows a flow with a web production firm as the applicant and its client as the approver; the price is 1,320 yen a year per domain, payable only by credit card or Osaipo! payment.
- **What is left to AI, and what a person confirms.** According to a September 25, 2026 news post, the Muumuu Domain MCP and the "ムームードメインコンシェルジュ" (Muumuu Domain Concierge) in the control panel can now check AI Homepage contracts, start a 10-day free trial, change auto-renewal, cancel and more, but switching from the trial to a paid contract cannot be done directly from AI "安全のため" (for safety) and must be done in the control panel. The MCP setup guide says a completed purchase cannot be cancelled and asks users to always check the amount when purchasing.

## Tech stack

::techstack

:::fact
In this site's own observation (2026-10-13), every muumuu-domain.com page this site requested returned, over HTTP/2, server: istio-envoy and x-envoy-upstream-service-time, while the value of a custom header named muu-origin-app differed by page. The home page, the price list, /developers/ and the MCP pages returned js, and their HTML contained scripts under /_nuxt/ and state data in window.__NUXT__ (the API v2 documentation page also returned js, but it was built with Redoc and showed no trace of Nuxt). The /?mode= pages, such as the terms of use and transfers, returned php, along with a PHPSESSID cookie and the EUC-JP character encoding. The /information/ pages for news and campaigns, the /checkout/login page and the MCP OAuth authorization server metadata returned rb; the /information/ and login pages set a cookie named _www-smartphone_session, and their HTML contained csrf-param and csrf-token meta tags. The login page offers sign-in with "1アカウント" (labelled Google authentication) in addition to a Muumuu ID and password, and a script it loads, named pwned_password, contained a function that sends the first five characters of the SHA-1 hash of the entered password to the range endpoint of api.pwnedpasswords.com. The home page HTML was 837,825 bytes, more than 80% of it state data, and like the price list page it embedded price data for 521 domains and 93 feature flags. In a July 26, 2017 engineering blog post, a Muumuu Domain engineer wrote that the service had been developed in PHP since its launch, that the smartphone site, landing pages and other parts had recently been built with Ruby on Rails, and that every page of the shopping cart except the top page was built with Ruby on Rails (4.2 at the time), with Vue.js used for the top page's modals and the cart's detail settings pages. GMO Pepabo's tech stack page lists Go, TypeScript, PHP and Ruby as the service-site languages of the Lolipop and Muumuu Domain division, React/Next.js and Vue.js/Nuxt.js for the frontend, and bare metal, KVM, OpenStack, Kubernetes, AWS, Google Cloud and more for the infrastructure.
:::

:::fact
The API v2 documentation (checked 2026-10-13) is written in OpenAPI 3.1.0 and published with Redoc. It has endpoints for listing owned domains and their details, auto-renewal settings, creating, updating and deleting DNS records, checking and changing name servers, availability search, purchase quotes and purchases, managing Personal Access Tokens (PATs), payment history and more, with rate limits of 1,000 requests an hour for authenticated and 100 for unauthenticated requests and up to 200 DNS records per domain (excluding SOA). In a sandbox separated from the production database (api-sandbox.muumuu-domain.com), developers can issue test PATs themselves. The documentation requires calling the quote API before every purchase; the purchase token it issues expires in 10 minutes, and it asks developers to show the amount to the user and obtain consent before executing the purchase. In the normal flow, the purchase API returns a checkout page URL (valid for 10 minutes) that the user opens in a browser to confirm the purchase, but the spec also lists a direct-purchase endpoint (POST /me/domain-purchase/direct) that requires prior application and approval, charges on execution and completes payment and domain registration in a single request without any browser screen transitions. The MCP page bills the service as "国内初のドメインMCPサーバー" (Japan's first domain MCP server), says its 11 tools in total cover domain search and registration, management and DNS settings, and states that use of the MCP server itself is free. According to the setup guide, the endpoint is https://mcp.muumuu-domain.com/mcp, it is added in Claude Code with --transport http, authentication uses OAuth 2.0, access tokens are short-lived (two hours) and refresh automatically, and users authorize scopes such as domains:read, dns:write, domains:purchase and options:write. In this site's own observation (2026-10-13), the OAuth authorization server metadata on the same host showed OAuth 2.1, the authorization code and refresh token grants, mandatory PKCE with S256, and a dynamic client registration endpoint. According to an October 7, 2026 press release, this remote MCP server has been listed as a "認証済み" (verified) connector in the "Connectors Directory" of Anthropic's Claude since September 30, 2026, and payment for a domain purchase is confirmed by the customer on the Muumuu Domain site. The same release recounts that the remote MCP server launched on March 31, 2026, that API v2 became generally available in May, and that the AI assistant "ムームードメインコンシェルジュ" (Muumuu Domain Concierge) was added to the control panel in June.
:::

:::guess
The three kinds of responses, PHP for /?mode=, Ruby for /information/ and /checkout/, and Nuxt for /_nuxt/, read as traces of replacing the PHP site that dates back to 2004 page by page, with the Rails smartphone site and cart and then Nuxt pages, rather than rebuilding it all at once. The muu-origin-app header appears to indicate the application that Istio's entry point routes each path to. Judging from the cookie name _www-smartphone_session, the Rails smartphone application described in the 2017 post appears to now handle news, login and OAuth authorization. Having the login screen send only the first five characters of the password hash to an outside service reads as a way to check whether a password has already leaked without handing over the password itself. State data makes up most of the home page HTML, presumably because prices and feature flags sit in a store shared by every page. API v2 and the MCP server separate quotes from purchases, expire the purchase token after 10 minutes and (apart from the direct-purchase endpoint, which requires prior application) have customers confirm payment themselves in a browser. This reads as a design that uses the system itself to keep AI agents from charging customers by mistake or beyond what they intended.
:::

## What a domain costs on its own, and the conditions for keeping it free

:::fact
In this site's own observation (2026-10-13), the data embedded in the price list page splits each domain's registration price into regular price fields (original_price and its variants) and campaign price fields (campaign_price and its variants), and, in the tax-included fields used for all figures below, .com held a regular price of 1,728 yen against a campaign price of 750 yen, .jp 3,344 yen against 990 yen, .co.jp 4,378 yen against 900 yen, and .online 5,478 yen against 125 yen. A registration campaign price was set for 120 of the 521 domains, no domain had a campaign price in its renewal or transfer fields, and the renewal prices shown in the table are 1,728 yen for .com and 5,962 yen for .online. The tax-included prices with the fee in the same data matched the pre-tax price plus a 25.50% fee rounded down to the yen, plus 10% consumption tax, rounded down to the yen, in all 1,739 price fields (this site's calculation). The fee was announced in a December 26, 2022 news post, which cited soaring domestic electricity prices, the weakening yen and rising domain procurement costs, said it would start at around 10–20% on February 1, 2023, and planned reviews every one to three months. In 2026, a July 31 news post set August at 27.00%, an August 31 post set September at 26.25%, and a September 30 post set October at 25.50%, each switching at 0:00 on the first of the month. Onamae.com, which the terms of use name as a registrar, also set its fee for domains (including options) at 27.00% from 12:00 on August 3, 26.25% from 12:00 on September 1 and 25.50% from 12:00 on October 1, naming fluctuations in exchange rates as the main factor.
:::

| Domain (tax included) | Year-one registration | One-year renewal | Renewal with the 25.50% fee | Transfer | Eligible for free forever |
| --- | --- | --- | --- | --- | --- |
| .com | 750 yen | 1,728 yen | 2,168 yen | 1,728 yen | Eligible |
| .net | 1,848 yen | 1,848 yen | 2,318 yen | 1,848 yen | Eligible |
| .jp | 990 yen | 3,344 yen | 4,196 yen | 3,344 yen | Eligible |
| .co.jp | 900 yen | 4,378 yen | 5,493 yen | not listed in the table | Eligible |
| .tokyo | 126 yen | 2,560 yen | 3,213 yen | 2,560 yen | Eligible |
| .shop | 335 yen | 6,690 yen | 8,395 yen | 6,690 yen | Eligible |
| .online | 125 yen | 5,962 yen | 7,482 yen | 5,962 yen | Not in the list |

Year-one, renewal and transfer prices are the price list's default view (tax included, without the fee), and the renewal with the fee is the value in the data embedded in the page (all checked 2026-10-13). The rightmost column follows the list of eligible domains on the "ドメインずっと無料" (domains free forever) page. The perk requires signing up together with Muumuu Server or Google Workspace (Standard plan or higher), a one-year term paid by credit card, and other conditions.

:::guess
Holding the year-one price in the campaign_price fields while showing no end date appears to be a design that uses a cheap first year as a permanent entrance and recovers the cost through renewals from year two onward. A .online costs 125 yen in year one but 5,962 yen to renew, or 7,482 yen with the fee. For eligible domains, the domains-free-forever perk shows that this kind of gap can be wiped out entirely with a bundled contract, and it reads as a way to replace a standalone domain renewal fee with a server's or Google Workspace's monthly fee and keep the contract tied in. Among domains that are cheap in year one, .space (53 yen), .site (97 yen), .online (125 yen) and others are not eligible, and eligibility is limited to some, such as .click, .tokyo and .shop (by this site's count, 10 of the 40 domains under 500 yen in year one). This presumably reflects a choice about which domains to give away. From August to October 2026 the fee rate moved in lockstep with Onamae.com's. Taken together with the terms of use naming Onamae.com as a registrar, this appears to pass the rate set by the upstream provider, and in turn exchange rate movements, straight through to customers' prices. The switching times differ, though: Muumuu Domain switched at 0:00 on the first each time, while Onamae.com switched at 12:00 on the first in September and October and at 12:00 on the third in August, and the two companies' rates diverge in between.
:::

## Business model

Muumuu Domain's pricing is made up of domain registration, renewal and transfer fees and the monthly and annual fees of the options stacked on top. Referrals are gathered through an affiliate program with a published reward table, and the terms also provide for businesses that hand out domains through API integration.

:::fact
According to GMO Pepabo's company introduction materials (as of the end of December 2025), the domain and rental server (hosting) business accounted for 56.6% of consolidated sales of 10.9 billion yen for the fiscal year ending December 2025, and Muumuu Domain's fee is given as 0 yen a year and up (when signed up together with a rental server; a service maintenance adjustment fee is charged separately on top of the fee) with 1.02 million contracts. According to the quarterly figures in the Q2 earnings presentation for the fiscal year ending December 2026 (August 13, 2026), Muumuu Domain's contracted domains fell from 1,076,138 at the end of June 2024 to 1,036,661 at the end of June 2025 and 1,012,324 at the end of June 2026. Sales for the quarters containing those dates moved from 650 million yen to 670 million yen and 732 million yen, and operating profit from 116 million yen to 115 million yen and 142 million yen (all rounded down to the million yen). For the first half of 2026, Muumuu Domain's sales were 1,445 million yen (108.5% of the prior year) and operating profit 266 million yen (121.2%), and the presentation attributes the sales growth to "ムームードメイン関連オプション、ムームーサーバー" (Muumuu Domain-related options and Muumuu Server). The same presentation puts first-half sales of new services, which combine Muumuu Domain-related options, Lolipop! Fixed IP Access and Lolipop! for Gamers, at 156 million yen (291.0% of the prior year), and says Google Workspace adoption by corporations, signed as a bundle with domains, is performing well. According to the Google Workspace page (checked 2026-10-13), signing up through Muumuu Domain gives 25% off the regular price for the first year (the page says "10月31日まで" (until October 31)), Business Standard costs 1,320 yen a month (regularly 1,760 yen), renewals are at the regular price, and GMO Pepabo is a Google Cloud certified partner. The affiliate page lists rewards of 5,000 yen for a new Muumuu Server contract (three months or longer), 3,000 yen for a Muumuu Domain for WP Hosting contract, 2,000 yen for a Google Workspace contract (per account), 100 yen each for a domain registration and a transfer to Muumuu Domain (50 yen for transfers of some domains), and 1 yen per ad click, and its "紹介プログラムについて詳しく見る" (learn more about the referral program) link opens A8.net's program search. Article 32-8 of the terms of use sets out how businesses that provide domains to their own service's customers as an ancillary service can integrate through the API with GMO Pepabo's individual approval, and prohibits using it to run an independent domain provision service.
:::

:::guess
That quarterly sales rose by more than 10% and operating profit by more than 20% while contracted domains fell by more than 60,000 in two years appears to be the result of raising earnings per domain by stacking options. The domains-free-forever perk reads as a way to give up domain renewal fees in exchange for a contract that brings in Muumuu Server's 1,430 yen a month or Google Workspace's monthly fee, which also matches the reasons for sales growth given in the earnings presentation. The gap between the 5.6 million cumulative registrations on the home page and the roughly 1.01 million contracted domains in the presentation reads as the difference between cumulative registrations and the domains still under contract today. The API and MCP work, and the terms for businesses that hand out domains through API integration, are presumably an attempt to add production firms, other companies' services and AI agents as new buyers alongside individuals buying on screen. The gap in affiliate rewards, 100 yen for a domain registration versus 5,000 yen for a new Muumuu Server contract, also appears to reflect a design that values the monthly contracts on top more than the domains themselves.
:::

Muumuu Domain, which began in 2004 as a PHP site, has carried on for more than 22 years while adding layers: a Rails cart, Nuxt pages, and then an API and an MCP server. Its price list is built in three tiers, 750 yen in year one, 1,728 yen to renew and a 25.50% surcharge, and beside it runs another road on which a domain costs nothing if it comes with a server or Google Workspace. The question for this long-established Japanese domain registration service is whether it can widen today's shape, growing sales while contracted domains shrink, from purchases made by hand into an entrance that AI agents choose as well.
