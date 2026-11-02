---
service: "NordVPN"
title: "A Panamanian Contract, Payments in Shibuya and a Renewal Table on a Legal Page — Anatomy of Nord Security's Flagship VPN Through Its Yen-Fixed Yearly Renewals, NordLynx and Published Client Code, Deloitte Assurance and How It Describes Its \"Group\" with Surfshark"
description: "NordVPN is the flagship VPN of Nord Security, which began in Lithuania in 2012. Its terms name nordvpn S.A. in Panama as the contracting party and Panamanian law as the governing law, yet say that payments by residents of Japan are mainly processed by Nord Security JP Co., Ltd in Shibuya, Tokyo. Renewal prices sit in a per-country table on a legal page of Nord Account; for Japan they run from 21,960 yen a year for Basic to 45,960 yen for Complete Max (updated June 10, 2026, tax excluded). Our requests to nordvpn.com were refused by a Cloudflare challenge, so the first-term prices on the official site could not be read. Instead, this anatomy uses the Japanese App Store listing, the help center, legal documents, Nord Security's announcements and engineering blog, and code published on GitHub to examine how prices are set, NordLynx and NordWhisper, the 10-device limit, the five no-logs assessments, the relationship with Surfshark and the affiliate terms."
lead: "NordVPN's renewal prices sit not on the product site but in a fixed table on a legal page of its account site. The row for Japan lists six yearly amounts, from 21,960 yen for Basic to 45,960 yen for Complete Max. The contracting party is a Panamanian company, payments by residents of Japan are mainly processed by a company in Shibuya, and the terms cover the two in separate clauses. NordLynx, the core of the VPN, is built on WireGuard, and the code of the Linux client and the networking library is public on GitHub. This is a public-information anatomy of how the company, which joined the same group as Surfshark in 2022, is built and how it earns money."
category: consumer-app
tags: [vpn, privacy, security, subscription]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
expires:
  - date: "2026-12-31"
    claim: "The yearly amounts in the Japan row of Nord Account's renewal price page (last updated 2026-06-10): Basic 21,960 yen, Standard 23,640 yen, Plus 28,320 yen, Complete 34,680 yen, Ultra 42,720 yen, Complete Max 45,960 yen, dedicated IP 12,840 yen and others. Observed 2026-11-02"
  - date: "2026-12-31"
    claim: "The in-app purchases shown on the Japanese App Store (12-month plans at 9,300 and 11,800 yen, 1-month plans at 1,350 and 2,100 yen). Observed 2026-11-02"
  - date: "2026-12-31"
    claim: "The help center's 7-day free trial scope (15 countries including Japan; 1-year and 2-year Prime, Ultimate Max, Ultra and Complete Max plans), and the observation of 2026-11-02 that nordvpn.com refuses our requests with a Cloudflare challenge"
serviceUrl: "https://nordvpn.com/"
# Affiliate link placeholder: NordVPN runs an in-house affiliate program (terms checked 2026-11-02 at
# https://affiliates.nordvpn.com/terms; apply via https://affiliates.nordvpn.com/users/signup/). Commission
# rates were not readable: they are on https://nordvpn.com/affiliate/, which returned a Cloudflare challenge.
# 30-day tracking cookie (clause 2.5), $100 minimum payout (4.1), commission cancelled on refund, chargeback or
# cancellation (3.1.5, 4.7), payout request not earlier than 40 days (4.4). Restrictions: no bidding on Banned
# Keywords (6.2.4, 9.3.3), any pop-ups/unders forbidden (6.2.1), no Nord marks in domain names (9.3.2), and clause
# 2.6.2 forbids posting "any refunds, credits or discounts" without prior written permission in each instance.
# This article describes prices and the refund guarantee, so ask the affiliate manager before enabling. Rule
# 6.2.1 covers pop-ups, so sameWindow is not needed on that ground. If NordVPN supplies ad text, copy it verbatim;
# never invent the label — ask the owner. Keep every field identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<nordvpn-affiliate-link>"
#   program: "Nord Affiliate Program"
vendor: "nordvpn S.A. (Nord Security)"
origin: "PA"
heroTheme: "nordvpn"
scores: { product: 4.0, ux: 3.5, tech: 4.5, business: 4.0 }
techStack:
  - layer: "VPN protocols"
    name: "NordLynx (WireGuard) / NordWhisper / OpenVPN / IKEv2"
    confidence: confirmed
    evidence: "The help center's feature list (checked 2026-11-02) names NordLynx (built on WireGuard), NordWhisper, OpenVPN and IKEv2/IPsec. Its protocol guide calls NordLynx the default in most apps"
    evidenceUrl: "https://support.nordvpn.com/hc/en-us/articles/19559429814545-What-features-does-NordVPN-have"
  - layer: "Post-quantum cryptography"
    name: "Post-quantum encryption (NordLynx only)"
    confidence: confirmed
    evidence: "Nord Security's announcement (2025-05-22) says it spread to all apps after the Linux app in September 2024. The help center says it works with NordLynx only and is disabled with dedicated IPs, OpenVPN, Obfuscated servers and Meshnet"
    evidenceUrl: "https://nordsecurity.com/press-area/nordvpn-launches-post-quantum-encryption-across-all-its-applications/"
  - layer: "Clients"
    name: "Go (nordvpn-linux) / Rust (libtelio, NepTUN)"
    confidence: confirmed
    evidence: "The NordSecurity organization on GitHub (checked 2026-11-02) publishes the Linux client nordvpn-linux (GPL-3.0), the VPN and Meshnet networking library libtelio (GPL-3.0) and the userspace WireGuard implementation NepTUN (BSD-3-Clause)"
    evidenceUrl: "https://github.com/NordSecurity/nordvpn-linux"
  - layer: "Server infrastructure"
    name: "Colocated servers"
    confidence: confirmed
    evidence: "Nord Security's announcement (2025-07-16) says it colocated servers in 37 data centers around the world in 2024"
    evidenceUrl: "https://nordsecurity.com/press-area/half-of-nord-security-s-colocated-servers-use-renewable-energy/"
  - layer: "CDN and security"
    name: "Cloudflare"
    confidence: likely
    evidence: "Our observation (2026-11-02): nordvpn.com, my.nordaccount.com, nordsecurity.com, support.nordvpn.com and s1.nordcdn.com return server: cloudflare, and nordvpn.com answered our requests with a cf-mitigated: challenge header"
  - layer: "Official site"
    name: "Astro / SolidJS"
    confidence: likely
    evidence: "Nord Security's engineering blog (2022-10-20) explains the choice of Astro and SolidJS to rebuild NordVPN's marketing sites. In our observation (2026-11-02) the HTML of nordsecurity.com and nordvpn.org carried Astro traces, but nordvpn.com itself could not be fetched, so we did not confirm it still uses the same setup"
    evidenceUrl: "https://nordsecurity.com/blog/why-we-chose-astro-for-our-websites/"
  - layer: "Support"
    name: "Zendesk (support.nordvpn.com)"
    confidence: confirmed
    evidence: "The privacy policy names Zendesk Inc. as a customer support provider. In our observation (2026-11-02) the help center returned a zendesk-service: help-center header"
    evidenceUrl: "https://my.nordaccount.com/legal/privacy-policy/"
  - layer: "Payments"
    name: "Stripe / Adyen / PayPal / Coingate / Checkout"
    confidence: confirmed
    evidence: "The privacy policy names Stripe, Adyen, PayPal, Coingate and Checkout Ltd as payment processing providers. The shared purchase counter is Nord Checkout, which the help center calls a unified payment system for all services"
    evidenceUrl: "https://my.nordaccount.com/legal/privacy-policy/"
  - layer: "Affiliate tracking"
    name: "TUNE (HasOffers)"
    confidence: likely
    evidence: "Our observation (2026-11-02): the cookie notice on the affiliates.nordvpn.com sign-up page mentions nordvpn.hasoffers.com, and a page script defines hasoffersBrandTheme"
  - layer: "Documentation"
    name: "GitBook / Vercel (meshnet.nordvpn.com)"
    confidence: likely
    evidence: "Our observation (2026-11-02): the HTML of meshnet.nordvpn.com shows GitBook as its generator and responses carry an x-vercel-cache header"
sources:
  - label: "Nord Account: Subscription Renewal Prices (updated 2026-06-10)"
    url: "https://my.nordaccount.com/legal/pricing/"
    accessedAt: "2026-11-02"
  - label: "Nord Account: General Terms of Service (updated 2026-08-10)"
    url: "https://my.nordaccount.com/legal/terms-of-service/"
    accessedAt: "2026-11-02"
  - label: "Nord Account: Privacy Policy"
    url: "https://my.nordaccount.com/legal/privacy-policy/"
    accessedAt: "2026-11-02"
  - label: "Nord Account: NordVPN Privacy Notice (version of 2026-07-20)"
    url: "https://my.nordaccount.com/legal/privacy-policy/nordvpn/"
    accessedAt: "2026-11-02"
  - label: "App Store (Japan): NordVPN"
    url: "https://apps.apple.com/jp/app/nordvpn-vpn-for-privacy/id905953485"
    accessedAt: "2026-11-02"
  - label: "NordVPN Help Center: How to check the plans and prices"
    url: "https://support.nordvpn.com/hc/en-us/articles/19744251757841-How-to-check-the-plans-and-prices-of-NordVPN"
    accessedAt: "2026-11-02"
  - label: "NordVPN Help Center: How much will I need to pay upon renewal?"
    url: "https://support.nordvpn.com/hc/en-us/articles/19477173269265-How-much-will-I-need-to-pay-upon-renewal"
    accessedAt: "2026-11-02"
  - label: "NordVPN Help Center: What is the currency your prices are shown in"
    url: "https://support.nordvpn.com/hc/en-us/articles/19744714597905-What-is-the-currency-your-prices-are-shown-in"
    accessedAt: "2026-11-02"
  - label: "NordVPN Help Center: What is VAT, and why am I charged"
    url: "https://support.nordvpn.com/hc/en-us/articles/19743990111121-What-is-VAT-and-why-am-I-charged"
    accessedAt: "2026-11-02"
  - label: "NordVPN Help Center: Does NordVPN charge all at once?"
    url: "https://support.nordvpn.com/hc/en-us/articles/19476182512273-Does-NordVPN-charge-all-at-once"
    accessedAt: "2026-11-02"
  - label: "NordVPN Help Center: What is your refund policy?"
    url: "https://support.nordvpn.com/hc/en-us/articles/19476991311121-What-is-your-refund-policy"
    accessedAt: "2026-11-02"
  - label: "NordVPN Help Center: Does NordVPN have a free trial?"
    url: "https://support.nordvpn.com/hc/en-us/articles/19744837091217-Does-NordVPN-have-a-free-trial"
    accessedAt: "2026-11-02"
  - label: "NordVPN Help Center: What payment methods does NordVPN accept"
    url: "https://support.nordvpn.com/hc/en-us/articles/19685782821265-What-payment-methods-does-NordVPN-accept"
    accessedAt: "2026-11-02"
  - label: "NordVPN Help Center: How to get NordVPN cheaper"
    url: "https://support.nordvpn.com/hc/en-us/articles/19477702164369-How-to-get-NordVPN-cheaper"
    accessedAt: "2026-11-02"
  - label: "NordVPN Help Center: How many devices can I use with NordVPN?"
    url: "https://support.nordvpn.com/hc/en-us/articles/19476515228305-How-many-devices-can-I-use-with-NordVPN"
    accessedAt: "2026-11-02"
  - label: "NordVPN Help Center: What features does NordVPN have?"
    url: "https://support.nordvpn.com/hc/en-us/articles/19559429814545-What-features-does-NordVPN-have"
    accessedAt: "2026-11-02"
  - label: "NordVPN Help Center: Different NordVPN server categories explained"
    url: "https://support.nordvpn.com/hc/en-us/articles/19479130821521-Different-NordVPN-server-categories-explained"
    accessedAt: "2026-11-02"
  - label: "NordVPN Help Center: Which NordVPN protocol should I choose"
    url: "https://support.nordvpn.com/hc/en-us/articles/19482810153745-Which-NordVPN-protocol-should-I-choose"
    accessedAt: "2026-11-02"
  - label: "NordVPN Help Center: What is NordLynx"
    url: "https://support.nordvpn.com/hc/en-us/articles/19564565879441-What-is-NordLynx"
    accessedAt: "2026-11-02"
  - label: "NordVPN Help Center: Post-quantum encryption explained"
    url: "https://support.nordvpn.com/hc/en-us/articles/30046321712529-NordVPN-Post-quantum-encryption-explained"
    accessedAt: "2026-11-02"
  - label: "NordVPN Help Center: Obfuscated Servers are getting an upgrade"
    url: "https://support.nordvpn.com/hc/en-us/articles/46609126551697-NordVPN-Obfuscated-Servers-are-getting-an-upgrade-what-changed"
    accessedAt: "2026-11-02"
  - label: "NordVPN Help Center: Dedicated NordVPN IP addresses"
    url: "https://support.nordvpn.com/hc/en-us/articles/19507808024209-Dedicated-NordVPN-IP-addresses"
    accessedAt: "2026-11-02"
  - label: "NordVPN Help Center: Does NordVPN offer port forwarding"
    url: "https://support.nordvpn.com/hc/en-us/articles/19483392309649-Does-NordVPN-offer-port-forwarding"
    accessedAt: "2026-11-02"
  - label: "NordVPN Help Center: What is NordVPN's Next-gen antivirus?"
    url: "https://support.nordvpn.com/hc/en-us/articles/19508765521425-What-is-NordVPN-s-Next-gen-antivirus"
    accessedAt: "2026-11-02"
  - label: "NordVPN Help Center: What is Incogni?"
    url: "https://support.nordvpn.com/hc/en-us/articles/20228780938129-What-is-Incogni"
    accessedAt: "2026-11-02"
  - label: "NordVPN Help Center: What is Nord Checkout?"
    url: "https://support.nordvpn.com/hc/en-us/articles/19685602129297-What-is-Nord-Checkout"
    accessedAt: "2026-11-02"
  - label: "NordVPN Help Center: Sponsorship and affiliate programs with NordVPN"
    url: "https://support.nordvpn.com/hc/en-us/articles/20285763640337-Sponsorship-and-affiliate-programs-with-NordVPN"
    accessedAt: "2026-11-02"
  - label: "Nord Affiliate Program: Terms and Conditions"
    url: "https://affiliates.nordvpn.com/terms"
    accessedAt: "2026-11-02"
  - label: "Nord Affiliate Program: Partner Sign Up"
    url: "https://affiliates.nordvpn.com/users/signup/"
    accessedAt: "2026-11-02"
  - label: "Nord Security: Home page"
    url: "https://nordsecurity.com/"
    accessedAt: "2026-11-02"
  - label: "Nord Security: About us (timeline)"
    url: "https://nordsecurity.com/about-us/"
    accessedAt: "2026-11-02"
  - label: "Nord Security: Fifth no-logs assurance announcement (2025-02-18)"
    url: "https://nordsecurity.com/press-area/nordvpn-verifies-its-no-logs-assurance-assessment-for-the-fifth-time/"
    accessedAt: "2026-11-02"
  - label: "Nord Security: Post-quantum encryption across all applications (2025-05-22)"
    url: "https://nordsecurity.com/press-area/nordvpn-launches-post-quantum-encryption-across-all-its-applications/"
    accessedAt: "2026-11-02"
  - label: "Nord Security: NordWhisper announcement (2025-01-29)"
    url: "https://nordsecurity.com/press-area/nordvpn-introduces-nordwhisper-a-new-solution-for-restricted-networks/"
    accessedAt: "2026-11-02"
  - label: "Nord Security: Renewable energy and Impact Report announcement (2025-07-16)"
    url: "https://nordsecurity.com/press-area/half-of-nord-security-s-colocated-servers-use-renewable-energy/"
    accessedAt: "2026-11-02"
  - label: "Nord Security: Coveron becomes a stand-alone service (2025-03-18)"
    url: "https://nordsecurity.com/press-area/coveron-becomes-a-stand-alone-service-and-includes-online-fraud-coverage/"
    accessedAt: "2026-11-02"
  - label: "Nord Security Blog: First outside capital at a $1.6B valuation (2022-04-07)"
    url: "https://nordsecurity.com/blog/nord-security-raises-outside-capital-16-b-valuation/"
    accessedAt: "2026-11-02"
  - label: "Nord Security Blog: Another $100M round (2023-09-28)"
    url: "https://nordsecurity.com/blog/nord-security-raised-another-100m-investment-round/"
    accessedAt: "2026-11-02"
  - label: "Nord Security Blog: Announcement on Atlas VPN (2024-03-25)"
    url: "https://nordsecurity.com/blog/announcement-on-atlas-vpn/"
    accessedAt: "2026-11-02"
  - label: "Nord Security Blog: NordLynx speed tests (2021-04-15)"
    url: "https://nordsecurity.com/blog/nordlynx-performance/"
    accessedAt: "2026-11-02"
  - label: "Nord Security Blog: NAT traversal with vanilla WireGuard (2023-03-21)"
    url: "https://nordsecurity.com/blog/reaching-beyond-1gbps/"
    accessedAt: "2026-11-02"
  - label: "Nord Security Blog: Why we chose Astro for our marketing websites (2022-10-20)"
    url: "https://nordsecurity.com/blog/why-we-chose-astro-for-our-websites/"
    accessedAt: "2026-11-02"
  - label: "NordVPN: Social responsibility (nordvpn.org)"
    url: "https://nordvpn.org/"
    accessedAt: "2026-11-02"
  - label: "GitHub: NordSecurity/nordvpn-linux"
    url: "https://github.com/NordSecurity/nordvpn-linux"
    accessedAt: "2026-11-02"
  - label: "GitHub: NordSecurity/libtelio"
    url: "https://github.com/NordSecurity/libtelio"
    accessedAt: "2026-11-02"
  - label: "GitHub: NordSecurity/NepTUN"
    url: "https://github.com/NordSecurity/NepTUN"
    accessedAt: "2026-11-02"
  - label: "Surfshark official: About us (Japanese)"
    url: "https://surfshark.com/ja/about-us"
    accessedAt: "2026-11-02"
  - label: "Surfshark official blog: Merger with Nord Security (2022-02-01)"
    url: "https://surfshark.com/blog/surfshark-merges-with-nord-security"
    accessedAt: "2026-11-02"
  - label: "ESET Ireland: NordVPN reveals breach at datacenter provider (2019-10-23; press report, as NordVPN's own statement is on nordvpn.com and could not be fetched)"
    url: "https://blog.eset.ie/2019/10/23/nordvpn-reveals-breach-at-datacenter-provider/"
    accessedAt: "2026-11-02"
---

NordVPN is a subscription built around a VPN, which encrypts traffic and hides the source IP address, with blocking of malicious sites and malware, data leak monitoring and more added on top. Its operator, Nord Security, began in Lithuania in 2012 and runs the password manager NordPass, the encrypted storage NordLocker, the business product NordLayer and the eSIM Saily in the same family. This anatomy has one limit that should be stated first. On November 2, 2026, apart from robots.txt, our requests for `nordvpn.com` pages were refused by a Cloudflare challenge (`cf-mitigated: challenge`). We did not try to get around it, for example by posing as a browser, and we did not read the pricing page, feature pages, official blog or affiliate page. So this article has no first-term discount prices and no feature comparison by plan. What follows is assembled from the sources we were allowed to fetch: Nord Account's legal pages, the help center, Nord Security's site, GitHub and the Japanese App Store.

## Service overview

:::fact
The General Terms of Service (updated August 10, 2026) define "Nord" as nordvpn S.A. of Panama City. They are governed by Panamanian law and disputes go to the courts of Panama, though mandatory provisions of a consumer's local law apply where they exist, and the English version prevails over translations. A separate "Payment providers" clause says purchases may be handled by different companies depending on payment method and jurisdiction, and lists a company per region. Payments by residents of Japan are said to be mainly processed by Nord Security JP Co., Ltd, registered on the 22nd floor of Shibuya Mark City, 1-12-1 Dogenzaka, Shibuya City, Tokyo; PayPal payments in the EU go to NordSec B.V. in Amsterdam, the UK to Moonflash Limited, and the United States and Mexico to Lagosec, Inc. The seller on the Japanese App Store is Nordvpn S.A. The affiliate terms give an Amsterdam address, Fred. Roeskestraat 115, for the same nordvpn S.A. The privacy policy names NordSec B.V. at that address as the EEA representative. Nord Security's timeline says NordVPN started in 2012 as a Windows configuration, launched its app in 2013 and introduced NordLynx in 2020. An announcement of April 7, 2022 dates the company's founding to Lithuania in 2012 and names Tom Okman and Eimantas Sabaliauskas as founders.
:::

:::fact
According to the help center (checked 2026-11-02), NordVPN is sold for 2 years, 1 year and 1 month, and the 2-year and 1-year plans are paid in full at purchase. It can be bought from NordVPN's pricing page, the App Store or Google Play. One subscription covers up to 10 devices at once, and connecting several devices to the same server requires different protocols. Apps exist for Windows, Linux, macOS, iOS, Android and more, with extensions for Chrome, Firefox and Edge. The 7-day free trial is for new users taking a 1-year or 2-year Prime, Ultimate Max, Ultra or Complete Max plan by credit card or PayPal, and Japan is among the 15 eligible countries. Unless cancelled before it ends, the plan starts at the price shown when the trial began. Payment options include credit cards, PayPal, cryptocurrency, Apple Pay, Google Pay, bank transfer and prepaid cards, and some are unavailable in certain regions. Dedicated IPs are listed in 31 countries and regions (our count), with Tokyo for Japan. Port forwarding does not work with dedicated IPs; only the Dedicated Server add-on supports it. The latest official server figure we could read is over 7,600 servers in 118 countries, from an announcement of May 22, 2025; announcements in January and February of that year said over 6,400 servers in 111 countries. The number of servers in Japan is not given on the pages we could fetch.
:::

The features form two layers: the VPN itself, and protection that also works outside it. The help center's feature list covers encryption, no logs, DNS leak protection, Kill Switch, dark web monitoring, Double VPN, Onion Over VPN, which combines the VPN with the Tor network, Obfuscated servers, Meshnet, which connects devices to each other, and scam call warnings on Android. Next-gen antivirus scans for malware and warns of scam sites without a VPN connection, on 64-bit Windows 10 or later and on macOS except the Mac App Store version. It is a different feature from Real-time protection, which blocks through DNS only while connected to the VPN.

:::pull
We could not read the first-term price. The renewal price was there, in a fixed table in yen, on a legal page of the account site rather than the product site.
:::

::scorecard

## UX analysis

NordVPN's UX rests on a thick help center and thick legal documents, but the wording varies depending on where you read.

- **Renewal amounts sit in one table.** Nord Account's "Subscription Renewal Prices" lists NordVPN, NordPass, NordLocker, threat protection, dedicated IP and Incogni by product and country. Users only need to find their own country's row. However, an A/B price testing notice sits on the same page, saying the displayed renewal prices may be subject to testing.
- **Display currency and billing currency are described separately.** The help center says prices are shown in local currencies including yen, but charges are made in US dollars except for some payment providers. The renewal price page says charges are made in the currency of the first payment. Whether a Japanese customer is billed in yen has to be checked with the chosen payment method.
- **Tax comes later.** The terms say prices may first be displayed excluding taxes, with tax calculated after the customer chooses a country of residence and the total shown before charging. The renewal price page also says the tax of the country given at the first payment is added at the rate on the day of the charge.
- **Refunds cover 30 days from the first purchase.** The help center and terms apply the 30-day guarantee to the initial purchase only, not to renewals. A clause allows pro rata refunds after renewal for purchases from Germany, the Netherlands and the UK, but Japan is not listed (customers who believe their local law grants that right are told to get in touch). The process starts in live chat and is automated; Apple purchases go to Apple, Amazon Appstore purchases to Amazon, Google Play through support or through Google within 48 hours, and retail or reseller purchases to that seller. Money can take up to 10 business days to arrive.
- **The 10-device explanation counts unevenly.** The devices article says five devices in total can connect to one server, then names six options: HTTP proxy, SOCKS5, NordLynx, NordWhisper, OpenVPN TCP and OpenVPN UDP.
- **Old and new explanations coexist.** The "what information does NordVPN store" article recommends CoinPayments for anonymous payment, while the privacy policy's payment providers name Coingate. The protocol article calls WireGuard "experimental" and the NordLynx article says WireGuard is still under development and to use it with caution, while the same articles recommend NordLynx as the default.
- **Japanese help exists, with partial translation.** The help center's sitemap has 487 URLs for the Japanese version (492 for English, our count). Yet articles such as "Does NordVPN charge all at once?" and "How to get NordVPN cheaper" kept English titles even at their Japanese-version URLs.

## Tech stack

::techstack

:::fact
According to the help center, NordLynx is the default in NordVPN's apps and is described as NordVPN's technology built around WireGuard. Nord Security's engineering blog of April 15, 2021 says it was tested on Linux before going to other operating systems, and explains the design of 256,886 speed tests run over a month. That is the company's own measurement. OpenVPN is said to use AES-256-GCM with a 4096-bit DH key. NordWhisper, announced on January 29, 2025, is a protocol for getting past restricted networks; the announcement says it uses web tunnel technology to mimic regular web traffic. It is now available on Windows, Android, Linux, iOS and macOS, and cannot be combined with dedicated IPs, Meshnet or Onion Over VPN. Another help article explains that the Obfuscated servers category moved from OpenVPN to NordWhisper and that it can no longer be reached through a manual OpenVPN connection. Post-quantum encryption began with NordLynx on Linux in September 2024 and reached all apps by the announcement of May 22, 2025. It is a setting to turn on, and the help center says it works with NordLynx only and is disabled with OpenVPN, dedicated IPs, Obfuscated servers and Meshnet.
:::

:::fact
The NordSecurity organization on GitHub (checked 2026-11-02, 62 repositories through the API) publishes the Linux client `nordvpn-linux` in Go (GPL-3.0), the VPN and Meshnet networking library `libtelio` in Rust (GPL-3.0), the file sharing library `libdrop` (GPL-3.0) and the userspace WireGuard implementation `NepTUN` (BSD-3-Clause). The `libtelio` README lists adapting to different WireGuard implementations as a feature, and the `NepTUN` README describes an implementation designed for portability and speed. An engineering blog post of March 21, 2023 explains how Meshnet does NAT traversal with vanilla WireGuard, and its first rule is that user data must be inaccessible even to Nord Security. A Nord Security announcement says the company colocated servers in 37 data centers in 2024. On the web side, an engineering blog post of October 20, 2022 describes rebuilding NordVPN's marketing sites with Astro and SolidJS for more than 20 locales, 10 currencies, thousands of pages and A/B testing. In our observation (2026-11-02), Nord Account's legal pages have no body text in the HTML and are drawn by scripts. The help center returned Zendesk headers.
:::

:::fact
The NordVPN privacy notice (version of July 20, 2026) says internet activity is not monitored, recorded or stored, and that used bandwidth, traffic logs, IP addresses and browsing information are not stored. It then lists what is processed: last session information used to limit concurrent sessions, deleted automatically within 15 minutes after a session ends, and whether the user used the service in the last 90 days, kept to prevent abuse and dispute unfair chargebacks. It states plainly that dedicated IPs and dedicated servers are linked to the user's email and account information, and that SmartDNS stores the IP address once activated. Apps may collect the device's country or city, operating system, the server and protocol in use and similar data together with an identifier randomly generated on the device, and the privacy label on the Japanese App Store (self-reported by the developer) lists email address and user ID under data linked to the user. Requests for data must go through a process recognized by Panamanian law, such as a mutual legal assistance treaty. On outside review, an announcement of February 18, 2025 reports NordVPN's fifth assurance engagement, commissioned from Deloitte Audit Lithuania. Under ISAE 3000 (Revised), Deloitte had access from November 18 to December 20, 2024 and reviewed the configuration and deployment processes of standard, Double VPN, Onion Over VPN, obfuscated and P2P servers. Earlier assessments took place in 2018, 2020, 2022 and 2023, and the full report is available to users after logging in to Nord Account. As for a past incident, an ESET Ireland article of October 23, 2019 relays NordVPN's account: in March 2018 an insecure remote management system left by a data center provider in Finland was exploited, one of about 3,000 servers was affected, a TLS key that has since expired was exposed, and no user activity logs or credentials were involved. NordVPN's own statement is on nordvpn.com and we could not read it.
:::

:::guess
NordVPN's technical story appears to favor adding connection and obfuscation layers on top of the public foundation of WireGuard over standing out with a wholly new protocol. Publishing the Linux client and `libtelio` widens what third parties can check about how the apps behave. But the server side and the full Windows, macOS, iOS and Android apps are not all public, so this does not amount to "public, therefore safe". Deloitte's assurance is a procedure for the scope and period requested, the full report sits inside the account, and we have not read it. Searches turned up headlines reporting a sixth assessment in 2026, but we could not read the articles, so this piece stops at the fifth, whose text we confirmed.
:::

## A renewal table fixed in yen

:::fact
The renewal price page (updated June 10, 2026) explains that a plan renews automatically when its first term ends, and that the table amount plus tax is charged in the currency of the first payment. The terms and subscription clauses say plans of one year or longer all renew for one year at a time, a notice goes out 30 days before renewal (except for monthly and shorter subscriptions), monthly plans are charged on the renewal day, and others 14 days before the renewal period starts. The renewal column below shows the Japan row, excluding tax. The monthly figures are our calculation. The Japan row has no Ultimate or Prime, but has Ultra and Complete Max. The euro zone has Ultimate, Ultimate Pro and Ultimate Max, and the United States has Ultimate and Prime. US Basic is $139.08 and Standard $149.88, and the page says countries whose currency is not supported are billed in US dollars.
:::

| Product | Yearly renewal (Japan, excl. tax) | Per month (our calculation) |
| --- | --- | --- |
| NordVPN Basic | 21,960 yen | 1,830 yen |
| NordVPN Standard | 23,640 yen | 1,970 yen |
| NordVPN Plus | 28,320 yen | 2,360 yen |
| NordVPN Complete | 34,680 yen | 2,890 yen |
| NordVPN Ultra | 42,720 yen | 3,560 yen |
| NordVPN Complete Max | 45,960 yen | 3,830 yen |
| Dedicated IP | 12,840 yen | 1,070 yen |
| Threat Protection | 9,360 yen | 780 yen |
| NordPass Premium | 5,760 yen | 480 yen |
| NordLocker 500GB | 9,480 yen | 790 yen |

:::fact
The in-app purchase list on the Japanese App Store (checked 2026-11-02), by contrast, shows 12-month plans at 11,800 and 9,300 yen, 1-month plans at 2,100 and 1,350 yen, and "Basic" 12-month and 1-month plans at 11,800 and 2,100 yen. The page does not say which amount applies under which conditions. The terms say introductory prices are limited to the first term, that prices can change, that changes take effect from the next renewal, and that customers are told in advance. The renewal price page says initial purchases may have included an introductory offer and that savings are compared with the current renewal price.
:::

:::guess
This setup appears to follow a pattern common among long-prepaid VPNs: discount the first one or two years, then collect the list price each year. Comparing the 11,800 yen for 12 months on the App Store with the 21,960 yen renewal for Basic on the web suggests that the same year can cost different amounts depending on channel and timing. But the page does not say whether the former is a first-term price or how tax is treated, so this is not a like-for-like comparison. Gathering renewal prices on the account site's legal page could be a way to manage each country's currency in one table, or a way to give legal explanations a home apart from the purchase screen. Compared with [Surfshark](/en/articles/surfshark), which draws its table with a script according to the viewer's location on a separate page, NordVPN's table is easier to check because the same content can be read from anywhere.
:::

## Business model

NordVPN sells tiered subscriptions plus add-ons such as a dedicated IP or a dedicated server. Nord Security layers a group strategy on top that widens the product range.

:::fact
Nord Security's announcement of April 7, 2022 says it had been profitable without outside money since its founding, and that a $100M round led by Novator Ventures was its first external capital, at a $1.6B valuation. An announcement of September 28, 2023 says another $100M from Warburg Pincus and others took the valuation to $3B, with about 2,000 employees. The company's home page states more than 20 million protected users, more than 25,000 businesses and more than 400 patented innovations. It acquired Atlas VPN in October 2021 and, as announced on March 25, 2024, closed it on April 24 of that year and guided users to NordVPN. On Surfshark, Nord Security's 2022 announcement says it "joined forces" with Surfshark in 2022, and the 2023 one says it "formed a group of companies" with Surfshark. Surfshark's About page says the two merged under one holding company in 2022 and operate as independent brands, and Surfshark's official blog of 2022 said they would continue as autonomous companies with separate infrastructure and product development plans. Surfshark's name does not appear in Nord Security's current timeline, product list or the company profile at the end of its announcements (in what we read). A 2025 announcement's closing text calls Nord Security NordVPN's parent company. On the product side, the privacy policy gives Incogni and Saily as examples of third-party services, and the help center carries a guide to Incogni. Incogni also appears in the renewal price table, without a Japan row. Saily appears in Nord Security's timeline as a 2024 launch of its own.
:::

:::fact
The affiliate terms (affiliates.nordvpn.com) cover NordVPN, NordLocker, NordPass and NordLayer, with nordvpn S.A. as counterparty (Nord Security Inc. for NordLayer alone). The tracking cookie lasts 30 days, and commissions arise on purchases not refunded, charged back or cancelled within 30 days (payouts may also apply to some free registrations) and are cancelled if the customer later terminates. The minimum payout is $100, payment can be requested no earlier than 40 days after the revenue was generated, and it is made by PayPal or wire transfer. Bidding on brand terms, domains containing the trademarks, and pop-ups and pop-unders are forbidden, posting refunds, credits or discounts needs written permission each time, and only coupons provided through the program may be used. The help center says the commission depends on the plan chosen and points to the affiliate page on nordvpn.com for details, which we could not read. As ways to pay less, the help center lists sponsorship on YouTube and streams, creators' coupons, monthly coupons, a student discount for ages 18 to 26, and a free month for referring a friend. Nord Checkout, the payment counter, combines NordVPN, NordPass, NordLocker and Coveron. According to an announcement of March 18, 2025, Coveron's identity theft protection is for the United States only, with cyber insurance benefits for the UK, the Netherlands, France, Sweden, Germany and Italy; Japan is not listed. nordvpn.org presents discounts for nonprofits and free emergency VPN access, with figures such as 12,600 donated licenses.
:::

:::guess
NordVPN appears to earn its money by drawing new customers through sponsorships and affiliates, welcoming them with a discounted prepayment, and recovering it through yearly renewals. Adding tiers and putting threat protection or password management in higher plans could be a way to keep customers who might otherwise cancel a plain VPN. On the other hand, some higher-tier benefits are limited to the United States or Europe, so their value may differ for users in Japan. Payment subsidiaries in each country appear to serve local currency and tax handling, though the tax treatment cannot be told from public information. Leaving Surfshark out of the timeline could reflect a policy of presenting independent brands, and the two companies' accounts do not conflict. For users, the two brands are competing products that belong to the same group. Anyone switching VPNs to get away from the capital behind an operator should check this point.
:::

NordVPN is a service whose explanations are spread out: the contract in Panama, payments with a company per country, the terms' wording in English, renewal prices on the account's legal page. In return, anyone who knows where to read can confirm the renewal amount and the scope of logging in writing. The first-term prices and plan comparison we could not read are something applicants need to check themselves on the pricing page and the checkout screen.
