---
service: "Onamae.com"
title: "One Yen in Year One, and a Surcharge That Moves With the Exchange Rate Every Month — Dissecting Onamae.com, Which Claims 49 Million Registrations, Tiers Renewal Prices by How Many Domains You Hold, and Added Passkeys to Its Login"
description: "Onamae.com is a domain registration service run by GMO Internet, Inc. It traces its roots to a business that started in September 1999 as \"Discount Domain Dotcom,\" handles more than 630 kinds of domains as an ICANN-accredited registrar, and claims more than 49 million cumulative registrations. It sells the first year of 24 items, including .com and .jp, for one yen, limited to \"one per person,\" while a one-year .com renewal costs 1,408 yen (tax included) for customers holding four domains or fewer (the base price, without the discount for holding five or more), and the \"service maintenance adjustment fee\" added since February 1, 2023 is revised every month with exchange rate fluctuations as the main factor, lowered to 25.50% from 12:00 on October 1, 2026. Using the price list, renewal prices, Whois privacy, Domain Protection, the DNS management service, the Navi guide, news posts, the Specified Commercial Transactions Act notice, GMO Internet's company profile, history, earnings presentations and data sheet, and this site's own observations, the article dissects a three-tier pricing of year one, year two and the surcharge, renewal prices that fall with the number of domains held, login and Whois lookup pages placed behind Cloudflare, and a business built with domains as the entry point."
lead: "On Onamae.com's home page, a large \"1 yen\" sits next to .com and .jp. Read the notes and one yen turns out to be limited to one domain per person, a second .com costs 750 yen, renewal prices change with the number of domains you hold, and a \"service maintenance adjustment fee\" is added on top of the displayed prices. Its rate is rewritten in a news post almost every month, and from October 1, 2026 it is 25.50%. This article dissects, from public information alone, the pricing and mechanics behind one of Japan's largest domain registration services, which traces its roots to a business chosen as an ICANN registrar in 1999 and claims more than 49 million registrations."
category: dev-tool
tags: [domains, hosting, small-business, security, subscription]
publishedAt: "2026-10-11"
updatedAt: "2026-10-11"
lastVerified: "2026-10-11"
expires:
  - date: "2026-10-30"
    claim: "The 100% transfer-fee cashback campaign (until 12:00 on October 30)"
  - date: "2026-10-31"
    claim: "October's 25.50% service maintenance adjustment fee and the renewal table that includes it"
serviceUrl: "https://www.onamae.com/"
# Affiliate link placeholder: Onamae.com runs its affiliate program through two ASPs, A8.net and
# ValueCommerce (https://www.onamae.com/clever/affiliate/, checked 2026-10-11: register with either
# network for free, apply to the Onamae.com program from the network's dashboard, and the approval
# email usually arrives within one to two business days). The page does not publish reward terms.
# Both are ASPs whose ad code must be used as provided: copy the link to affiliate.url, the 1x1
# impression image (if any) to affiliate.impressionUrl, and the text ad verbatim to affiliate.label.
# Never invent the label — ask the owner for the material's exact text. Keep every field identical in
# ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<a8-or-valuecommerce-link-for-onamae>"
#   program: "Onamae.com Affiliate Program (A8.net / ValueCommerce)"
#   impressionUrl: "https://<impression-pixel>"
#   label: "<verbatim text of the ad material>"
vendor: "GMO Internet, Inc."
origin: "JP"
heroTheme: "onamae"
scores: { product: 4.0, ux: 3.0, tech: 3.5, business: 4.0 }
techStack:
  - layer: "Registrar"
    name: "ICANN-accredited registrar (GMO Internet, Inc. d/b/a Onamae.com)"
    confidence: confirmed
    evidence: "The official \"What is Onamae.com\" page (checked 2026-10-11) states that it is an ICANN-accredited registrar and \"one of only 19 registrars accredited in Japan.\" A note on the home page names the registrar used for the domestic share count as \"GMO Internet, Inc. d/b/a Onamae.com,\" and the operating company's profile lists ICANN among its memberships"
    evidenceUrl: "https://www.onamae.com/clever/about/"
  - layer: "Authoritative DNS"
    name: "Onamae.com DNS (01–04.dnsv.jp, default dns1/dns2.onamae.com)"
    confidence: confirmed
    evidence: "The Onamae.com Navi guide page \"Changing name servers\" (checked 2026-10-11) lists 01.dnsv.jp to 04.dnsv.jp as Onamae.com's name servers, ns-rs1/ns-rs2.gmoserver.jp for the rental server (Basic and RS plans) and others, and dns1.onamae.com / dns2.onamae.com as the default set at registration"
    evidenceUrl: "https://www.onamae.com/guide/p/67"
  - layer: "DNSSEC and secondary DNS"
    name: "DNSSEC / secondary DNS master (DNS add-on option)"
    confidence: confirmed
    evidence: "The DNS management service page (checked 2026-10-11) states that DNS record settings, secondary DNS (slave) and host registration are free, while zone templates, secondary DNS (master), DNSSEC and DNS settings for externally managed domains form the DNS add-on option at 110 yen a month per domain (tax included)"
    evidenceUrl: "https://www.onamae.com/option/dns/"
  - layer: "Login authentication"
    name: "Passkeys + two-step verification (email / SMS)"
    confidence: confirmed
    evidence: "An official news post (2026-09-28) states that passkey authentication is now offered for logging in to Onamae.com Navi and the rental server control panel, and that logging in with the existing ID and password remains available. The Navi guide gives the steps for two-step verification using codes sent by email or SMS for logins, member information changes and similar actions"
    evidenceUrl: "https://www.onamae.com/news/article/11513"
  - layer: "Domain protection"
    name: "Domain Protection (registrant approval for NS, Whois and transfer-lock changes)"
    confidence: confirmed
    evidence: "The Domain Protection page (checked 2026-10-11) states that procedures such as changing name servers, DNS settings, the transfer lock, auto-renewal settings and Whois information changes can be made subject to the registrant's approval, at 1,078 yen a year per domain (tax included)"
    evidenceUrl: "https://www.onamae.com/service/protectoption/"
  - layer: "Reseller API"
    name: "Domain registration API for resellers (Advanced Partner, spec under NDA)"
    confidence: confirmed
    evidence: "The reseller program page (checked 2026-10-11) states that under an Advanced Partner contract, registration, renewal, information changes and other procedures can be automated through an API, that the API specification is provided after an NDA is signed, and that the partner builds the system integration"
    evidenceUrl: "https://www.onamae.com/partner/"
  - layer: "Rental server (RS plan)"
    name: "nginx + Apache HTTP Server 2.4 + LSAPI, AlphaSSL"
    confidence: confirmed
    evidence: "The page for ordering a domain and rental server together (checked 2026-10-11) states that the server uses nginx, which excels at handling heavy concurrent access, with Apache HTTP Server 2.4 as its backend, LSAPI as the application runtime, an all-SSD RAID10 array and HTTP/2, and that AlphaSSL is used for the standard free SSL"
    evidenceUrl: "https://www.onamae.com/server/rs/campaign/simulregist/"
  - layer: "Official site delivery and bot protection"
    name: "Cloudflare (bot protection, challenge on login and lookup paths)"
    confidence: likely
    evidence: "This site's own observation (2026-10-11) found www.onamae.com returning server: cloudflare and a cf-ray ending in NRT, and setting a __cf_bm cookie. The login path /navi/login/, the Whois lookup /service/whois/, the renewal page /campaign/renewal/ and the help site help.onamae.com returned 403 with cf-mitigated: challenge to this site's scripted requests"
  - layer: "Official site front end"
    name: "jQuery 3.7.1 / Swiper / lazysizes / Google tag"
    confidence: likely
    evidence: "This site's own observation (2026-10-11) found the home page HTML loading jquery-3.7.1.min.js, swiper.min.js, lazysizes.min.js, gtag.js from googletagmanager.com, and GMO's shared header and footer scripts hosted on cache.img.gmo.jp. The price list table is loaded afterwards by a script on the page through GET requests carrying table_type and table_group"
sources:
  - label: "Onamae.com official: Home page (one-yen conditions, domestic share note, RDAP lookup)"
    url: "https://www.onamae.com/"
    accessedAt: "2026-10-11"
  - label: "Onamae.com official: What is Onamae.com (ICANN-accredited registrar, 630+ domain types, 49 million registrations)"
    url: "https://www.onamae.com/clever/about/"
    accessedAt: "2026-10-11"
  - label: "Onamae.com official: Domain price list (registration, renewal, transfer, Whois privacy, surcharge toggle)"
    url: "https://www.onamae.com/service/d-price/"
    accessedAt: "2026-10-11"
  - label: "Onamae.com official: Domain renewal prices (by number of domains held)"
    url: "https://www.onamae.com/service/d-renew/price.html"
    accessedAt: "2026-10-11"
  - label: "Onamae.com official: What is domain renewal (auto-renewal)"
    url: "https://www.onamae.com/service/d-renew/"
    accessedAt: "2026-10-11"
  - label: "Onamae.com official: Whois privacy service"
    url: "https://www.onamae.com/service/d-regist/option.html"
    accessedAt: "2026-10-11"
  - label: "Onamae.com official: Domain Protection"
    url: "https://www.onamae.com/service/protectoption/"
    accessedAt: "2026-10-11"
  - label: "Onamae.com official: DNS management service (DNSSEC, secondary DNS)"
    url: "https://www.onamae.com/option/dns/"
    accessedAt: "2026-10-11"
  - label: "Onamae.com official: One-yen domain with a rental server (free-renewal conditions, RS plan stack)"
    url: "https://www.onamae.com/server/rs/campaign/simulregist/"
    accessedAt: "2026-10-11"
  - label: "Onamae.com official: Domain transfer 100% cashback campaign (2026-09-30 to 10-30)"
    url: "https://www.onamae.com/campaign/transferincp/"
    accessedAt: "2026-10-11"
  - label: "Onamae.com official: Reseller program (API integration)"
    url: "https://www.onamae.com/partner/"
    accessedAt: "2026-10-11"
  - label: "Onamae.com official: What is affiliate marketing? (A8.net, ValueCommerce)"
    url: "https://www.onamae.com/clever/affiliate/"
    accessedAt: "2026-10-11"
  - label: "Onamae.com official: Notice under the Specified Commercial Transactions Act"
    url: "https://www.onamae.com/tokusho/"
    accessedAt: "2026-10-11"
  - label: "Onamae.com Navi guide: Changing name servers"
    url: "https://www.onamae.com/guide/p/67"
    accessedAt: "2026-10-11"
  - label: "Onamae.com Navi guide: Stopping news delivery"
    url: "https://www.onamae.com/guide/p/5"
    accessedAt: "2026-10-11"
  - label: "Onamae.com Navi guide: Two-step verification settings"
    url: "https://www.onamae.com/guide/p/102"
    accessedAt: "2026-10-11"
  - label: "Onamae.com News: Passkey login launched (2026-09-28)"
    url: "https://www.onamae.com/news/article/11513"
    accessedAt: "2026-10-11"
  - label: "Onamae.com News: Service maintenance adjustment fee at 25.50% from October 1 (2026-09-25)"
    url: "https://www.onamae.com/news/article/11547"
    accessedAt: "2026-10-11"
  - label: "Onamae.com News: Service maintenance adjustment fee at 26.25% from September 1 (2026-08-25)"
    url: "https://www.onamae.com/news/article/11506"
    accessedAt: "2026-10-11"
  - label: "Onamae.com News: Service maintenance adjustment fee at 27.00% from August 3 (2026-07-24)"
    url: "https://www.onamae.com/news/article/11486"
    accessedAt: "2026-10-11"
  - label: "Onamae.com News: Price changes for some domains (2026-09-04; adjustment fee charged since February 1, 2023)"
    url: "https://www.onamae.com/news/article/11532"
    accessedAt: "2026-10-11"
  - label: "Onamae.com News: GMO AI Kantan Shukyaku free for the first month and 30% off monthly (2026-02-25)"
    url: "https://www.onamae.com/news/article/11336"
    accessedAt: "2026-10-11"
  - label: "GMO Internet, Inc.: Company profile"
    url: "https://internet.gmo/company/outline/"
    accessedAt: "2026-10-11"
  - label: "GMO Internet, Inc.: History (from January 1, 2025)"
    url: "https://internet.gmo/company/history/"
    accessedAt: "2026-10-11"
  - label: "GMO Internet, Inc.: History of the former companies (internet infrastructure business, November 1995 to December 2024, and more)"
    url: "https://internet.gmo/company/history/archive/"
    accessedAt: "2026-10-11"
  - label: "GMO Internet, Inc.: Services (Onamae.com byGMO, ConoHa byGMO)"
    url: "https://internet.gmo/service/"
    accessedAt: "2026-10-11"
  - label: "GMO Internet, Inc.: Full-year results presentation for FY ending December 2025 (2026-02-12)"
    url: "https://internet.gmo/pdf/presen/gmointernet_fy2025_full-year_j_presentation.pdf"
    accessedAt: "2026-10-11"
  - label: "GMO Internet, Inc.: Q2 results presentation for FY ending December 2026 (2026-08-14)"
    url: "https://internet.gmo/pdf/presen/gmointernet_fy2026q2_j_presentation.pdf"
    accessedAt: "2026-10-11"
  - label: "GMO Internet, Inc.: Q2 FY2026 data sheet (quarterly sales, total domestic contracts)"
    url: "https://internet.gmo/pdf/presen/gmointernet_fy2026q2_j_datasheet.xlsx"
    accessedAt: "2026-10-11"
  - label: "Cloudflare Docs: Cloudflare Cookies (__cf_bm)"
    url: "https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/"
    accessedAt: "2026-10-11"
  - label: "Cloudflare Docs: Detect a Challenge Page response (cf-mitigated)"
    url: "https://developers.cloudflare.com/cloudflare-challenges/challenge-types/challenge-pages/detect-response/"
    accessedAt: "2026-10-11"
---

Onamae.com is a Japanese domain registration service whose slogan is "ドメイン取るならお名前.com" (if you are getting a domain, get it at Onamae.com). It is run by GMO Internet, Inc., listed on the Prime Market of the Tokyo Stock Exchange, and the same company owns the ConoHa brand, including [ConoHa WING](/en/articles/conoha-wing), dissected on this site. Behind an entrance that sells .com and .jp for "one yen," the price list carries two mechanisms: renewal prices that change with the number of domains held, and a "service maintenance adjustment fee" revised every month with exchange rate fluctuations as the main factor.

## Service overview

Onamae.com centers on registering, renewing and transferring domains, and offers options such as Whois privacy, Domain Protection, the DNS management service and domain parking, along with auctions and back-orders for previously used domains and a domain sale service. Rental servers, the AI Homepage Pack, Onamae Mail, VPS and SSL certificates are on offer too, and contracts are managed in a control panel called "Onamae.com Navi."

:::fact
According to the notice under the Specified Commercial Transactions Act (as of 2026-10-11), the seller is GMO Internet, Inc., the trade name is "GMOインターネットお名前.com" (GMO Internet Onamae.com), and the address is Cerulean Tower in Sakuragaoka-cho, Shibuya, Tokyo. GMO Internet's page on the history of its former companies records, as the story of the internet infrastructure business, that in April 1999 ICANN selected it as "the only commercial domain name registrar in Asia and Japan," and that in September of that year it launched "Discount Domain Dotcom (now Onamae.com)" and entered the domain business. In June 2024 an absorption-type split agreement was signed as part of reorganizing this business, and according to the history page, on January 1, 2025 GMO Ad Partners, Inc. took over the internet infrastructure business that GMO Internet Group, Inc. had been running and changed its name to GMO Internet, Inc. The company profile gives the founding date as September 8, 1999, and according to the history of the former companies this legal entity was originally founded with an email advertising delivery service as its business purpose and later became GMO Ad Partners. According to the company profile, its securities code is 4784 (TSE Prime), its capital is 10,691.6 million yen, it had 2,405 consolidated employees at the end of June 2026 (1,915 regular and 490 temporary), its major shareholders include GMO Internet Group, Inc., and ICANN is among its memberships. The "What is Onamae.com" page presents it as an ICANN-accredited registrar, "one of only 19 registrars accredited in Japan," with more than 630 kinds of domains and more than 49 million cumulative registrations. The note behind "No.1 domestic share" on the home page says it is a May 2026 survey that, based on figures published by ICANN, covers gTLDs and counts the share of the registrar "GMO Internet, Inc. d/b/a Onamae.com" among the companies listed with "Japan" in the list of accredited registrars provided by InterNIC.
:::

:::fact
According to the price list and the home page (checked 2026-10-11, tax included), registering .com or .net costs one yen, limited to "one per person," and 750 yen applies to the second and later ones and to anyone who has bought one for one yen before. The same one-yen terms cover 24 items, including .jp in roman letters (1,860 yen from the second), .jp in Japanese (1,160 yen), .org (860 yen), .shop (280 yen), .xyz (220 yen), .online (60 yen) and .tokyo (80 yen). According to the renewal price page, a one-year renewal costs 1,408 yen for .com, 1,628 yen for .net, 3,124 yen for .jp and 7,678 yen for .co.jp (all for customers holding four domains or fewer, that is, the base price on the renewal price page without the discounts labeled "5個以上保有の方" (holders of five or more) and so on), and according to the price list a .com transfer costs 1,012 yen. From 12:00 on October 1, 2026, a 25.50% "service maintenance adjustment fee" is added to the displayed prices for domains (including options). Domains can be paid for by credit card, bank transfer or convenience store, and according to the Specified Commercial Transactions Act notice convenience store payment carries a fee of 165 yen. Whois privacy costs 1,078 yen a year per domain and is free when ordered together with a new registration. Ordering a rental server at the same time makes domain registration one yen, and the first domain, if it is one of the eligible domains such as .com and .jp, renews free while the server is in use (if the server is cancelled within 12 months of a free renewal, the actual renewal fee is charged). For a second domain, free renewal applies only to a .com registered within the validity period of a coupon worth the .com registration fee, sent the following month, and added to the server; using the coupon on anything other than .com does not qualify. The rental server RS plan costs 2,398 yen a month, with the first month free and no setup fee.
:::

:::pull
A domain's price is not settled by the one yen of year one. It is the product of a year-two renewal price that changes with how many domains you hold and a surcharge rewritten every month.
:::

::scorecard

## UX analysis

Onamae.com's experience puts a domain search box in the home page's main visual, while the full picture of what you will pay is split across notes and separate pages.

- **The entrance is one yen; the conditions are in the notes.** According to the notes on the home page and the price list, all 24 one-yen items are limited to one per person, and for .com and .net anyone who has bought one for one yen before pays the same 750 yen as for a second domain. The home page says renewal prices "vary with the number of domains each member holds," and the price list asks customers to check the exact amount in Onamae.com Navi because renewal prices also differ by when a domain was registered. Renewal prices for domains obtained in past campaigns are likewise checked per domain in Navi.
- **The table's default view excludes the surcharge.** The price list table has a checkbox labeled "サービス維持調整費含む" (include the service maintenance adjustment fee), and this site's own observation (2026-10-11) found it unchecked by default, so prices before the surcharge are shown. Checking it switches the .com renewal from 1,287 yen and up to 1,615 yen and up, and the transfer from 1,012 yen to 1,270 yen. Looking only at the table's numbers leaves a gap of about a quarter against the amount actually paid.
- **A path that keeps renewals from being forgotten.** According to the page explaining domain renewal, enabling auto-renewal renews a domain automatically 15 days before its renewal deadline, for that domain's minimum renewal period. The Navi guide notes that a screen asking "更新手続きをお忘れではございませんか？" (haven't you forgotten to renew?) may appear when going to the name server settings or My Page, and tells users to click "更新画面から移動する" (leave the renewal screen) when it does.
- **News and renewal reminders can be stopped, but the pre-expiry notices ICANN requires cannot.** According to the Navi guide page on stopping news delivery, mail announcing new domain launches and campaigns can be set to "no delivery," and SMS delivery and renewal reminder mail can also be turned off in the settings. A note adds, however, that the automatic notices before expiry that ICANN requires to be sent cannot be stopped.
- **Login protection is available to everyone; domain protection is an option.** According to the September 28, 2026 news post, passkeys can now be used to log in to Onamae.com Navi and the rental server control panel, and logging in with an ID and password remains available. The Navi guide gives the steps for two-step verification that asks for a code sent by email or SMS at login and when changing member information. On the other hand, Domain Protection, which makes changes such as name server updates and the transfer lock subject to the registrant's approval, costs 1,078 yen a year per domain, and DNSSEC is part of the DNS add-on option at 110 yen a month.
- **Whois privacy is free when ordered with a new registration, and domain orders cannot be cancelled.** According to the Whois privacy page, the service publishes Onamae.com's name and the address of the 11th floor of Cerulean Tower in Sakuragaoka-cho, Shibuya, Tokyo in place of the registrant's name and address. In the price list, the Whois privacy column shows × for .co.jp, .ai and others. The price list FAQ answers that domain registrations and contracts "cannot be cancelled or revoked for any reason," and the Specified Commercial Transactions Act notice likewise does not accept returns (cancellations).

## Tech stack

::techstack

:::fact
According to the Navi guide page on changing name servers (checked 2026-10-11), Onamae.com's name servers are the four from 01.dnsv.jp to 04.dnsv.jp; the rental server Basic and RS plans, the AI Homepage Pack and Onamae Mail (Economy/Basic) use ns-rs1.gmoserver.jp and ns-rs2.gmoserver.jp; the shared server SD plan and Onamae Mail (Light/Standard) use dns01.gmoserver.jp and dns02.gmoserver.jp; and the default set at registration is dns1.onamae.com and dns2.onamae.com. The same page warns that a name server change can take up to about 72 hours to propagate across the internet. According to the DNS management service page, DNS record settings, secondary DNS (slave) and host registration are free, while zone templates, secondary DNS (master), DNSSEC and DNS settings for externally managed domains make up the DNS add-on option at 110 yen a month per domain. According to the reseller program page, an Advanced Partner contract allows registration, renewal, information changes and other procedures to be automated through an API, and the API specification is provided after an NDA is signed. A deposit of 100,000 yen is charged when a reseller partner contract is completed. For the rental server RS plan, the page for ordering a domain and server together explains that Apache HTTP Server 2.4 sits behind nginx, with LSAPI, an all-SSD RAID10 array and HTTP/2, and that AlphaSSL is used for the standard free SSL.
:::

:::fact
This site's own observation (2026-10-11) found the www.onamae.com home page returning, over HTTP/2, server: cloudflare, a cf-ray ending in NRT, cf-cache-status: DYNAMIC and cache-control: no-cache, no-store, max-age=0, must-revalidate, and setting a cookie named __cf_bm. According to Cloudflare's documentation, __cf_bm is a cookie placed on sites protected by Bot Management or Bot Fight Mode. On the same day, the login path /navi/login/, the Whois lookup /service/whois/, the renewal page /campaign/renewal/ and the help site help.onamae.com returned 403 with cf-mitigated: challenge to this site's scripted requests. Cloudflare's documentation describes this header as present on Challenge Page responses. The home page HTML loads jquery-3.7.1.min.js, swiper.min.js, lazysizes.min.js, Google's gtag.js, and GMO's shared header and footer scripts hosted on cache.img.gmo.jp, and many of its links carry a parameter named btn_id. The price list table is loaded afterwards, as the visitor scrolls, by a script on the page through GET requests carrying table_type and table_group.
:::

:::guess
www.onamae.com sits behind Cloudflare, and among the pages this site requested, the login, the Whois lookup, the renewal entry and the help site returned a challenge to automated requests. This appears to use [Cloudflare](/en/articles/cloudflare)'s bot protection to throttle attacks that try passwords by brute force and the mechanical collection of registrant information and prices. The home page reads as a conventional jQuery-built page that loads only heavy parts such as the price list table afterwards through GET requests. The btn_id attached to links is presumably a parameter for measuring which button led to an order. Passkeys and two-step verification are features members turn on themselves, and the news post and the guide mention no additional fee. Domain Protection and DNSSEC, on the other hand, are paid options. This line reads as a design that makes login protection available to everyone and lets those who need it buy protection for the domain settings themselves.
:::

## One yen in year one, and a year two that moves with holdings and exchange rates

:::fact
According to the renewal price page (checked 2026-10-11, tax included), one-year renewal prices fall in four tiers by the number of domains held: .com costs 1,408 yen for four or fewer, 1,375 yen for five or more, 1,342 yen for 11 or more and 1,287 yen for 31 or more. .net and .org go from 1,628 yen down to 1,507 yen, .jp from 3,124 yen to 3,091 yen, and .co.jp from 7,678 yen to 4,125 yen. .xyz (2,013 yen), .shop (6,688 yen) and .online (5,040 yen) have no tiers. The transfer campaign page says that from 12:00 on September 30 to 12:00 on October 30, 2026, transferring .com, .net or general-use and prefecture-type .jp domains from a domestic provider earns a 100% cashback of the transfer fee and a three-year extension of the expiry date (for .jp, only the two-year extension granted the following month; paid by credit card, up to 10 domains per person during the period), and it tells "those holding 31 or more domains" that renewal costs get cheaper as the count grows. On the service maintenance adjustment fee added to these prices, the September 4, 2026 news post says that "in view of the surge in various prices," it has been charged temporarily since February 1, 2023. The home page notes that the rate "differs every month," and the news posts set it at 27.00% from 12:00 on August 3, 2026, 26.25% from 12:00 on September 1 and 25.50% from 12:00 on October 1, all naming "fluctuations in exchange rates" as the main factor and stating that charges incurred between 0:00 and 12:00 on the day of a change are calculated at the previous rate.
:::

| Domain (tax included) | First registration | Second and later | One-year renewal (four or fewer held) | Transfer | Renewal with the 25.50% surcharge |
| --- | --- | --- | --- | --- | --- |
| .com | 1 yen | 750 yen | 1,408 yen | 1,012 yen | 1,767 yen |
| .net | 1 yen | 750 yen | 1,628 yen | 1,012 yen | 2,043 yen |
| .jp (roman letters) | 1 yen | 1,860 yen | 3,124 yen | 3,124 yen | 3,921 yen |
| .xyz | 1 yen | 220 yen | 2,013 yen | 2,013 yen | 2,526 yen |
| .shop | 1 yen | 280 yen | 6,688 yen | 6,688 yen | 8,393 yen |
| .online | 1 yen | 60 yen | 5,040 yen | not listed in the table | 6,325 yen |
| .co.jp | 930 yen | — | 7,678 yen | 1,320 yen | 9,636 yen |

In the rightmost column, .xyz, .shop and .online show the price list's "include the service maintenance adjustment fee" view, while .com, .net, .jp and .co.jp are this site's calculation adding 25.50% to the renewal price for four or fewer domains held (rounded to the nearest yen). For .co.jp, the second-and-later cell shows "—" because, according to the transfer campaign page, attribute-type JP domain names can in principle be registered only one per organization.

:::guess
There are 24 one-yen items, and even a domain like .online, whose second and later registrations cost 60 yen, renews at 5,040 yen a year. This appears to be a design that gathers members and domains with a cheap first year and recovers the cost through renewals from year two onward. Renewal prices that fall in four tiers by the number of domains held, together with the transfer pitch aimed at holders of 31 or more, read as an effort to gather businesses that hold domains in bulk and keep them from leaving. That the gap between four or fewer and 31 or more held exceeds 3,500 yen for .co.jp presumably also reflects pricing with web production firms and others managing many domains in mind. The service maintenance adjustment fee, though described as "temporary," has continued since February 2023 and is revised every month with exchange rate fluctuations as the main factor. It presumably passes changes in procurement costs, which appear to be priced in foreign currencies, on to customers without rewriting the listed prices; because the price list's default view shows amounts without the fee, comparisons that quote only the table's numbers appear to need care about the gap with the amount actually paid.
:::

## Business model

The business appears to center on fees for registering, renewing and transferring domains, topped by Whois privacy, Domain Protection and the DNS add-on option, and it also sends customers on to rental servers and an AI marketing tool. Referrals are left to affiliate programs on A8.net and ValueCommerce and to a reseller program for businesses.

:::fact
GMO Internet's services page (checked 2026-10-11) describes Onamae.com as "a brand centered on the No.1 domestic-share domain registration service with more than 37 million registrations," providing domains, rental servers, DNS and more "with domains as the entry point, targeting individuals and companies (SMBs)." The full-year results presentation for the fiscal year ending December 2025 (February 12, 2026) gives cumulative domain registrations of more than 42 million and ranks the number of domains under management fourth in the world based on Domain Name Stat (active domains under management as of February 3, 2026), and puts 2025 sales of the domain and rental server business, which includes the GPU cloud, at 20.7 billion yen with operating profit of 5.12 billion yen. According to the Q2 presentation for the fiscal year ending December 2026 (August 14, 2026), the business's first-half sales were 11.5 billion yen (up 18.1% year on year) and operating profit 3.1 billion yen (up 73.6%), alongside high utilization of the GPU cloud's H200 and B300 and continued advertising investment in the existing business. According to the data sheet, total domestic contracts of the internet infrastructure business, which also includes the internet provider business, grew from about 8.33 million at the end of June 2025 to about 9.52 million at the end of September, about 12.44 million at the end of December and about 13.70 million at the end of June 2026. The presentation attributes the surge mainly to bulk domain contracts by corporations and businesses in the third and fourth quarters of 2025 (for purposes such as domain trading and SEO/AIO testing), expects a certain decline in the second half of 2026 because these are one-year contracts, and explains that the impact on results is limited because the bulk purchases carry low unit prices. The same presentation lists offering a discount plan to Onamae.com customers to send them on and build recurring revenue. According to the February 25, 2026 news post, Onamae.com started a service tie-up under which the web marketing tool "GMO AI Kantan Shukyaku" is available free for the first month and at 30% off the monthly price. According to the affiliate page, referrers register for free with A8.net or ValueCommerce and apply to the Onamae.com program, and the approval email usually arrives within one to two business days. The reseller program offers monthly deferred payment and API integration.
:::

:::guess
True to the phrase "with domains as the entry point" in GMO Internet's description, Onamae.com appears to serve as an entrance that hands out domains cheaply and sends customers on to rental servers, Whois privacy, Domain Protection, DNS options and an AI marketing tool. The perk that makes domain renewals free when a server is ordered at the same time reads as a way to replace a standalone domain renewal fee with a server's monthly fee and keep the contract tied in. The surge in bulk contracts in the second half of 2025, and the decline expected afterwards, suggest a structure in which contract counts can swing widely with bulk demand while the effect on sales stays limited. Renewal prices that fall with the number of domains held, and the reseller program's deferred payment and API, are presumably also tools for bringing in such bulk users and production firms. That official materials give different registration counts, 37 million, 42 million and 49 million, presumably reflects differences in update timing and counting method, so they cannot simply be compared.
:::

Onamae.com, which began in 1999 as Discount Domain Dotcom, has carried on while the name and shape of its operating company changed, and today it widens its entrance with one-yen domains. Its price list is built in three tiers: one yen in year one, a year two that changes with the number of domains held, and a surcharge that changes with exchange rates every month. While it lines up protections as the party holding domains in trust, such as passkeys and Domain Protection, reaching the amount actually paid still requires reading the notes and separate pages together. The question for one of Japan's largest registrars is whether it can turn an entrance of 49 million registrations into a reason to be chosen again at every renewal.
