---
service: "Surfshark"
title: "\"Unlimited devices\" and 27 Months Paid Up Front — Dissecting the VPN-and-Security Bundle Sold by the Netherlands' Surfshark B.V., Through a Renewal Price Table Drawn by a Script, Connection Data It Says It Deletes Within 15 Minutes, Deloitte's Assurance Reports and an Affiliate Program Starting at 40% of New Sales"
description: "Surfshark is a subscription that bundles a VPN with scam protection, antivirus, data leak alerts, personal data removal and more, offered by Surfshark B.V. of Amsterdam, the Netherlands (originally founded in Lithuania in 2018). Its pricing page lines up three bundles, Starter, One and One+, and on October 13, 2026 it was selling, as a \"Black Friday\" sale, 27 months — a 24-month plan plus three extra months — from 388 yen a month (before tax, with VAT added on top). Renewals are at the \"full price,\" and the amounts sit not on the pricing page but in a table on a separate page that a script draws according to the visitor's location. Using the official site, terms of service, privacy policy, official blog, help center and this site's own observations, the article dissects 4,500+ servers in 100 countries including 80 in Tokyo, the in-house Dausos protocol and post-quantum WireGuard, connection data the company says it deletes within 15 minutes after a session ends, two Deloitte assurance reports and audits by Cure53 and SecuRing, dedicated IP locations and transparency reports that differ between language versions, and an affiliate program that starts at 40% of new sales."
lead: "On Surfshark's pricing page, the Starter 24-month plan carries a \"+3 EXTRA months\" tag and 10,476 yen next to a struck-through 68,796 yen — 27 months paid up front, or 388 yen a month. So what does month 28 cost? The FAQ's answer to \"How much does Surfshark cost after 2 years?\" says it depends on the plan and only links the words \"renewal price,\" and the table on the linked page is drawn by a script according to the visitor's location. This article dissects, from public information alone, how Surfshark — which bundles scam protection, antivirus and personal data removal around a VPN in one contract, and says its no-logs policy has twice received a Deloitte assurance report — is built and how it makes money."
category: consumer-app
tags: [vpn, privacy, security, subscription]
publishedAt: "2026-10-13"
updatedAt: "2026-10-13"
lastVerified: "2026-10-13"
expires:
  - date: "2026-10-31"
    claim: "The \"Black Friday\" sale labels on the pricing page and the observed prices (24-month plans at 388 yen a month for Starter and One and 698 yen for One+, with \"+3 EXTRA months\"). No end date is stated; observed on 2026-10-13, re-check"
serviceUrl: "https://surfshark.com/"
# Affiliate link placeholder: Surfshark runs an in-house affiliate program on the TUNE (HasOffers) platform
# (https://surfshark.com/affiliate, checked 2026-10-13; apply via the "Partner Sign Up" form at
# https://surfshark.com/affiliate-signup; the terms name surfshark.hasoffers.com). Commissions start at a 40%
# revenue share of new sales (custom payouts/CPA possible), 30-day last-click cookie, $100 minimum payout;
# also listed on Impact Radius, Avant, CJ, Appsflyer and Awin. Refunds and chargebacks cancel the commission.
# Restrictions (https://surfshark.com/affiliate-terms-and-conditions, Annex 2 "Promotional rules"): no bidding
# on banned brand keywords, Google Ads / Apple Search Ads / social / retargeting only with prior written
# permission, no pop-up/under ads, no cashback or other incentives, no Surfshark trademarks in domain names,
# and rule 1.13 forbids posting "any refunds, credits or discounts" without prior written permission. This
# article describes sale prices and the refund guarantee, so ask the account manager before enabling. Only
# ads that open a window or tab automatically are banned, so sameWindow is not set. Not an ASP text-ad
# program; if Surfshark supplies ad text, copy it verbatim. Never invent the label — ask the owner. Keep
# every field identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<surfshark-tune-affiliate-link>"
#   program: "Surfshark Affiliate Program (TUNE / HasOffers)"
vendor: "Surfshark B.V."
origin: "NL"
heroTheme: "surfshark"
scores: { product: 4.0, ux: 3.5, tech: 4.0, business: 4.0 }
techStack:
  - layer: "VPN protocols"
    name: "WireGuard / IKEv2 / OpenVPN / Dausos (Surfshark's own protocol)"
    confidence: confirmed
    evidence: "The official protocols page (checked 2026-10-13) states that four protocols are offered: Dausos, WireGuard, IKEv2 and OpenVPN. It describes Dausos as Surfshark's own protocol designed specifically for consumers, currently available in the macOS app, and says IKEv2 is not available in the Windows app"
    evidenceUrl: "https://surfshark.com/ja/features/surfshark-vpn-protocols"
  - layer: "Encryption"
    name: "AES-256-GCM / ChaCha20 / AEGIS-256X2"
    confidence: confirmed
    evidence: "The official Trust Center (checked 2026-10-13) states that, in addition to the VPN-standard AES-256-GCM, ChaCha20 is used for WireGuard and AEGIS-256X2 for Dausos"
    evidenceUrl: "https://surfshark.com/ja/trust-center"
  - layer: "Post-quantum cryptography"
    name: "ML-KEM + ML-DSA (WireGuard / Dausos)"
    confidence: confirmed
    evidence: "An official blog post (2026-10-07) states that WireGuard is now fully post-quantum secure, with ML-KEM protecting key exchange and ML-DSA protecting authentication, available on macOS and iOS (other platforms planned). Dausos was built with the same two standards and is currently available on macOS. A post on 2026-06-17 describes Dausos's key exchange as a hybrid of ML-KEM and X25519"
    evidenceUrl: "https://surfshark.com/blog/post-quantum-secure-wireguard"
  - layer: "Server infrastructure"
    name: "RAM-only servers / Everlink / FastTrack"
    confidence: confirmed
    evidence: "The official Trust Center (checked 2026-10-13) states 100% RAM-only servers (all data wiped on every reboot), regular destruction and rebuilding of most VPN servers, 10Gbps ports on all servers (up to 100Gbps in high-traffic areas), Everlink, a self-healing infrastructure that switches servers without disconnecting, and FastTrack, a multi-server routing system that keeps evaluating routes"
    evidenceUrl: "https://surfshark.com/ja/trust-center"
  - layer: "CDN and security"
    name: "Cloudflare"
    confidence: confirmed
    evidence: "The privacy policy (updated 2026-10-12) names Cloudflare as a security service provider. In this site's observation (2026-10-13), surfshark.com, my.surfshark.com and support.surfshark.com all returned server: cloudflare and cf-ray headers"
    evidenceUrl: "https://surfshark.com/ja/privacy"
  - layer: "Official website"
    name: "Next.js (Pages Router) / WordPress (blog, feature pages) / Envoy"
    confidence: likely
    evidence: "This site's observation (2026-10-13) found the home, pricing, legal and server list pages carrying __NEXT_DATA__ and scripts under /website/_next/static/chunks/pages/, while the blog, feature, download and transparency report pages load the /wp-content/themes/surfshark theme and the sitemaps were generated by Yoast SEO. Responses carried an x-envoy-upstream-service-time header"
  - layer: "Support"
    name: "Zendesk (support.surfshark.com, live chat)"
    confidence: confirmed
    evidence: "The privacy policy names Zendesk as a live chat and support service provider. In this site's observation (2026-10-13), the help center at support.surfshark.com returned x-zendesk-origin-server and zendesk-service headers"
    evidenceUrl: "https://surfshark.com/ja/privacy"
  - layer: "Payments"
    name: "Stripe / Adyen / Coingate"
    confidence: confirmed
    evidence: "The privacy policy names Stripe, Adyen, Checkout and Coingate as third-party payment providers. The terms of service name Paddle, Google Play and Cleverbridge as sales channels through which refunds can be handled, and say payments are processed by Surfshark Limited (London) and Surfshark Inc. (California)"
    evidenceUrl: "https://surfshark.com/ja/privacy"
  - layer: "Affiliate tracking"
    name: "TUNE (HasOffers)"
    confidence: confirmed
    evidence: "The official affiliate terms (English, checked 2026-10-13) state that the program runs at surfshark.hasoffers.com and that referrals are managed on the TUNE platform. The affiliate page says Tunes (also known as HasOffers) is the main affiliate platform, and the privacy policy names Hasoffers (Tune Inc.) for conversion attribution"
    evidenceUrl: "https://surfshark.com/affiliate-terms-and-conditions"
  - layer: "App analytics and data platform"
    name: "AppsFlyer / Firebase Analytics / Iterable / Purchasely / BigQuery"
    confidence: confirmed
    evidence: "The privacy policy names Iterable, Firebase Analytics (Google), Purchasely and Appsflyer as marketing and app analytics providers, and BigQuery (Google) as a storage and infrastructure provider. It says the app may collect the device model, OS version, device language and randomized identifiers, used for measuring campaign effectiveness and similar purposes"
    evidenceUrl: "https://surfshark.com/ja/privacy"
sources:
  - label: "Surfshark official: Home page (Japanese)"
    url: "https://surfshark.com/ja"
    accessedAt: "2026-10-13"
  - label: "Surfshark official: Plans and pricing (Japanese)"
    url: "https://surfshark.com/ja/pricing"
    accessedAt: "2026-10-13"
  - label: "Surfshark official: Pricing (English, viewed from Japan)"
    url: "https://surfshark.com/pricing"
    accessedAt: "2026-10-13"
  - label: "Surfshark official: Billing practices, currency policy and renewal prices (Japanese)"
    url: "https://surfshark.com/ja/terms-of-service/pricing"
    accessedAt: "2026-10-13"
  - label: "Surfshark official: Billing Practices, Currency Policy & Renewal Prices (English)"
    url: "https://surfshark.com/terms-of-service/pricing"
    accessedAt: "2026-10-13"
  - label: "Surfshark official: Terms of service (updated 2026-07-13, Japanese)"
    url: "https://surfshark.com/ja/terms-of-service"
    accessedAt: "2026-10-13"
  - label: "Surfshark official: Privacy policy (updated 2026-10-12)"
    url: "https://surfshark.com/ja/privacy"
    accessedAt: "2026-10-13"
  - label: "Surfshark official: About us (timeline, leadership, offices)"
    url: "https://surfshark.com/ja/about-us"
    accessedAt: "2026-10-13"
  - label: "Surfshark official: Media center"
    url: "https://surfshark.com/ja/press"
    accessedAt: "2026-10-13"
  - label: "Surfshark official: VPN server list"
    url: "https://surfshark.com/ja/servers"
    accessedAt: "2026-10-13"
  - label: "Surfshark official: VPN servers in Japan (80 in Tokyo)"
    url: "https://surfshark.com/ja/servers/japan"
    accessedAt: "2026-10-13"
  - label: "Surfshark official: Surfshark VPN protocols"
    url: "https://surfshark.com/ja/features/surfshark-vpn-protocols"
    accessedAt: "2026-10-13"
  - label: "Surfshark official: No-logs VPN"
    url: "https://surfshark.com/ja/features/no-logs"
    accessedAt: "2026-10-13"
  - label: "Surfshark official: Trust Center"
    url: "https://surfshark.com/ja/trust-center"
    accessedAt: "2026-10-13"
  - label: "Surfshark official: Transparency report (Japanese version, April to June 2026)"
    url: "https://surfshark.com/ja/transparency-report"
    accessedAt: "2026-10-13"
  - label: "Surfshark official: Transparency Report (English version, July to September 2026)"
    url: "https://surfshark.com/transparency-report"
    accessedAt: "2026-10-13"
  - label: "Surfshark official: Dedicated IP (Japanese version, 18 locations)"
    url: "https://surfshark.com/ja/dedicated-ip"
    accessedAt: "2026-10-13"
  - label: "Surfshark official: Dedicated IP (English version, 19 locations)"
    url: "https://surfshark.com/dedicated-ip"
    accessedAt: "2026-10-13"
  - label: "Surfshark official: Affiliate program"
    url: "https://surfshark.com/ja/affiliate"
    accessedAt: "2026-10-13"
  - label: "Surfshark official: Affiliate Program Agreement and Promotional rules (English)"
    url: "https://surfshark.com/affiliate-terms-and-conditions"
    accessedAt: "2026-10-13"
  - label: "Surfshark official: Refer and earn (referral program)"
    url: "https://surfshark.com/ja/surfshark-referral"
    accessedAt: "2026-10-13"
  - label: "Surfshark official blog: Surfshark’s no-logs statement gets verified by Deloitte (2023-01-25, English)"
    url: "https://surfshark.com/blog/deloitte-audit-nologs"
    accessedAt: "2026-10-13"
  - label: "Surfshark official blog: Deloitte verifies Surfshark's no-logs policy (Japanese version)"
    url: "https://surfshark.com/ja/blog/deloitte-audit-nologs"
    accessedAt: "2026-10-13"
  - label: "Surfshark official blog: Our no-logs policy was verified again (2025-06-16)"
    url: "https://surfshark.com/blog/deloitte-nologs-policy-verified-again"
    accessedAt: "2026-10-13"
  - label: "Surfshark official blog: Infrastructure audit by SecuRing (2026-01-23)"
    url: "https://surfshark.com/blog/surfshark-securing-infrastructure-audit"
    accessedAt: "2026-10-13"
  - label: "Surfshark official blog: WireGuard now fully post-quantum secure (2026-10-07)"
    url: "https://surfshark.com/blog/post-quantum-secure-wireguard"
    accessedAt: "2026-10-13"
  - label: "Surfshark official blog: Dausos connectivity update (2026-06-17)"
    url: "https://surfshark.com/blog/dausos-connectivity-update"
    accessedAt: "2026-10-13"
  - label: "Surfshark official blog: Merger with Nord Security (2022-02-01)"
    url: "https://surfshark.com/blog/surfshark-merges-with-nord-security"
    accessedAt: "2026-10-13"
  - label: "Surfshark Help Center: Surfshark's refund policy (Japanese)"
    url: "https://support.surfshark.com/hc/ja/articles/360003103653-Surfshark%E3%81%AE%E8%BF%94%E9%87%91%E3%83%9D%E3%83%AA%E3%82%B7%E3%83%BC%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"
    accessedAt: "2026-10-13"
  - label: "Surfshark Help Center: What payment options do you offer? (Japanese)"
    url: "https://support.surfshark.com/hc/ja/articles/360003069034-%E3%81%A9%E3%81%AE%E3%82%88%E3%81%86%E3%81%AA%E6%94%AF%E6%89%95%E3%81%84%E6%96%B9%E6%B3%95%E3%82%92%E5%88%A9%E7%94%A8%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%81%8B"
    accessedAt: "2026-10-13"
  - label: "Surfshark Help Center: Does Surfshark offer a free trial? (Japanese)"
    url: "https://support.surfshark.com/hc/ja/articles/360026123554-Surfshark%E3%81%AF%E7%84%A1%E6%96%99%E3%83%88%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%AB%E3%82%92%E6%8F%90%E4%BE%9B%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%81%8B"
    accessedAt: "2026-10-13"
---

Surfshark is a subscription built around a VPN, which encrypts traffic and hides the user's IP address, that bundles scam protection, antivirus, data leak notifications, alternative identities and forwarding email addresses, and personal data removal into one account. It has a Japanese-language site and help center and runs 80 VPN servers in Tokyo. When choosing a VPN, which country's laws the operator works under is itself part of the product (see also the [Proton](/en/articles/proton) and [MillenVPN](/en/articles/millenvpn) dissections). On its no-logs page, Surfshark says its headquarters are in the Netherlands, a country that does not require companies to store or report user data.

## Service overview

The pricing page lines up three bundles: Starter, with the VPN plus Alternative ID, which creates alternative personal details and forwarding email addresses for signing up to sites you do not trust; One, which adds scam protection, Antivirus and Alert for leak notifications; and One+, which adds identity theft coverage and Incogni, which removes personal data from data brokers and others. Each comes in 1-month, 12-month and 24-month terms. A dedicated IP and Alternative Number, a virtual phone number, are sold as add-ons chosen on the account page.

:::fact
According to the media center page (as of 2026-10-13), Surfshark VPN is offered by Surfshark B.V., a company registered in the Netherlands that was originally founded in Lithuania in 2018. The site's footer lists the company's KvK number, 81967985, and its address at Kabelweg 57, Amsterdam. The about page names Vytautas Kaziukonis as founder (now Chairman of the Board) and Dovydas Godelis as CEO, says the company has more than 500 employees, and lists offices in Vilnius and Kaunas (Lithuania), Warsaw and Berlin. The timeline on the same page says that after merging with Nord Security in 2022 the company became a unicorn valued at 1.6 billion dollars, and its FAQ explains that the two companies merged under one holding company and operate as independent brands. A blog post dated February 1, 2022 likewise said the two would continue as autonomous companies with separate infrastructures and product development plans, and that Surfshark's Terms of Service and Privacy Policy would not change. The terms of service (updated July 13, 2026) name Surfshark B.V., established in the Netherlands, as the contracting party, while stating that the contract is governed by the laws of the British Virgin Islands, as it was before the company moved to the Netherlands. Disputes go to the courts of the British Virgin Islands unless mandatory laws of the customer's country of residence apply, and the English version prevails over translations. Payments are processed by Surfshark Limited in London and Surfshark Inc. in California, and the affiliate terms direct invoices for services rendered before October 2021 to Surfshark Ltd. in the British Virgin Islands.
:::

:::fact
The pricing page (checked 2026-10-13) sells the three bundles under 24-month, 12-month and 1-month tabs. Viewed from Japan, the 24-month plans show 388 yen a month for Starter and One and 698 yen for One+, each with a "+3 EXTRA months" tag and totals of 10,476, 10,476 and 18,846 yen "for the first 27 months" (next to struck-through prices of 68,796, 79,326 and 91,476 yen), followed by a note on VAT (on the Japanese page, 付加価値税が適用されます, meaning VAT applies). The terms of service say fees charged by Surfshark are exclusive of taxes and that VAT and other taxes may be calculated and added at purchase. The One column carries a "Black Friday deal" tag, and the banner at the top of the site, "Hurry up! Grab our Black Friday deal here," leads to the pricing page; no end date is given. Every plan carries a 30-day money-back guarantee, and the FAQ says there is no limit on simultaneous connections (up to three devices during a free trial). Supported devices are listed as Windows, macOS, Linux, Android, iOS, Android TV, Apple TV and Fire TV, plus extensions for Chrome, Firefox and Edge and manual setup for routers and for game consoles and smart TVs without an app. According to the help center, payment options include credit and debit cards, PayPal, Google Pay, Apple Pay and cryptocurrency (not on mobile devices), with other methods depending on the region. There are more than 4,500 servers in 100 countries (the server list table also has 100 country rows, by this site's count), and according to the Japan server page, 80 of them are in Tokyo.
:::

:::pull
The first 27 months are paid up front, from 388 yen a month. What month 28 costs sits not on the pricing page but in a table on another page, drawn by a script.
:::

::scorecard

## UX analysis

Surfshark's UX is built from bundles that add features to a single account and pricing tilted toward long prepaid terms. What the service costs after renewal, and displays that differ between language versions, are left for users to check themselves.

- **Prices depend on where you are, and tax comes on top.** According to the billing practices page, prices on the order page are displayed in the local currency based on the visitor's location (IP address), and payments from Japan are processed in JPY (card payments prioritize the currency of the country where the card was issued). Sales tax or VAT for the purchase country is added to the first purchase, and renewals add tax at the rate in force on the day of the charge. The Japanese pricing page says VAT applies (付加価値税が適用されます), while the English page viewed from Japan says "(VAT may apply)." The same billing page reserves the right to run A/B price tests and says the displayed renewal prices may be subject to them.
- **Read the differences between bundles from the comparison table's marks.** In the pricing page's comparison table, Starter includes the VPN (ad blocker, cookie pop-up blocker, the Bypasser split tunneling, rotating IP and the Dynamic MultiHop double VPN) and Alternative ID; One adds scam protection, Antivirus and Alert; and One+ adds identity theft coverage and Incogni. The coverage, however, is noted as "Available for US residents, except for New York State," and Incogni as available only to residents of the US, the UK, the EU, Switzerland and Canada, so neither of the two things One+ adds includes Japan among its regions.
- **The refund guarantee applies once, to the first purchase.** According to the terms of service, the 30-day money-back guarantee applies only to the initial purchase and is limited to one refund per service; recurring payments are non-refundable. Purchases through resellers other than Paddle, Google Play or Cleverbridge or with prepaid or gift cards, the anonymous Dedicated IP option and Alternative ID purchases such as Alternative Number are excluded, and cryptocurrency payments are refunded as the US dollar equivalent in the same cryptocurrency at the exchange rate at the time of the refund. The help center directs website customers to live chat and tells App Store and Amazon Appstore customers to ask those stores, while Google Play purchases can be refunded through Google within 48 hours of purchase. The 7-day free trial is for new users buying a 12-month or 24-month plan on the website with PayPal, Apple Pay or a credit card; it covers up to three devices, and after the trial is charged a refund can still be requested within 30 days.
- **Unlimited devices, with a caveat.** The pricing FAQ promises "unlimited simultaneous device connections," but the fair usage policy in the terms of service cites abuse by unauthorized resellers and organizers of illicit activities using many devices, and reserves the right to have its network maintenance system limit an excessive number of simultaneously connected devices. Antivirus allows a maximum of five simultaneous connections per account.
- **What Japan sees differs by language version.** The Japanese version of the dedicated IP page lists 18 locations worldwide (世界18か所) without Japan, while the English version says "We offer Dedicated IP in 19 locations across the globe" and includes Tokyo. The FAQs on both versions say 20 locations, and the pricing page says "Available in 20 locations." In the server list table, Japan's row has no dedicated IP mark (this site's check). The transparency report, too, showed figures for July to September 2026 in English but still April to June in Japanese (both checked 2026-10-13).
- **Protocols and features differ by operating system.** According to the protocols page, the in-house Dausos protocol is currently available in the macOS app, and IKEv2 is not available in the Windows app. Post-quantum protection currently does not apply to manually configured WireGuard. An official blog post on October 7, 2026 said WireGuard with post-quantum protection for both key exchange and authentication is available on macOS and iOS, with other platforms to follow.

## Tech stack

::techstack

:::fact
According to the protocols page (checked 2026-10-13), Surfshark offers Dausos, WireGuard, IKEv2 and OpenVPN and uses AES-256-GCM, ChaCha20 and AEGIS-256X2 encryption (the Trust Center says ChaCha20 is used for WireGuard and AEGIS-256X2 for Dausos). An official blog post on June 17, 2026 lists Dausos's strengths as speeds up to 30% faster with AEGIS-256X2, post-quantum protection through a hybrid ML-KEM and X25519 key exchange and an ML-DSA self-signed root certificate, and a separate tunnel for each user. The October 7 post explains that Surfshark had earlier protected WireGuard's key exchange with ML-KEM and has now added ML-DSA for authentication. The Trust Center says all servers run on RAM only and wipe data on every reboot, most VPN servers are regularly destroyed and rebuilt, and every server has 10Gbps ports (with up to 100Gbps servers in high-traffic areas); it also lists Everlink, a self-healing infrastructure that moves a connection to another server without disconnecting, and FastTrack, which keeps evaluating routes, and says the company has been granted 20+ patents. The timeline on the about page says Surfshark moved to a RAM-only server network and introduced WireGuard in 2020 and introduced 100Gbps servers in Amsterdam in 2025. This site's observation (2026-10-13) found surfshark.com responding through Cloudflare and returning an `x-envoy-upstream-service-time` header. The home, pricing, legal and server list pages carry Next.js's `__NEXT_DATA__` and `/website/_next/` paths, while the blog, feature and download pages are built on a WordPress theme (`/wp-content/themes/surfshark`), and the sitemaps were generated by Yoast SEO. The help center (support.surfshark.com) returned Zendesk response headers, and the sign-up host order.surfshark.com answered this site's request with a Cloudflare challenge (`cf-mitigated: challenge`).
:::

:::fact
The terms of service and the privacy policy (the latter updated October 12, 2026) say Surfshark does not collect information about online activity such as visited IP addresses, browsing history, session information, used bandwidth, connection time stamps or network traffic. They add that, to prevent abuse and keep the VPN working, servers temporarily store the user ID, IP address and time stamps of connections to a VPN server, and that this information is automatically deleted within 15 minutes after the session ends. The email address, encrypted password and subscription and payment details are kept while the subscription is active and for two years after the last login. A blog post dated January 25, 2023 (English version) announced that Deloitte, one of the Big Four auditing firms, had performed independent assurance procedures on compliance with the no-logs policy, covering server configuration, the deployment process, VPN server configuration, APIs, SDN and interviews with employees. The Deloitte conclusion it quotes reads "properly prepared, in all material respects, in accordance with Surfshark’s description of its no-logs policy" in English, while the Japanese version translates it as 「Surfsharkのノーログポリシーの基準に従い適切に運営され」 (properly operated in accordance with the standards of Surfshark's no-logs policy). A post on June 16, 2025 described a second assurance by Deloitte, including an assessment of standard, static and multiport VPN servers, and said the detailed report (ISAE 3000) is available in the Surfshark account. The Trust Center also lists audits by Cure53 (browser extensions in 2018, infrastructure in 2021, infrastructure and Dausos in 2026) and two assessments by SecuRing in 2025, and a blog post on January 23, 2026 said SecuRing's infrastructure audit found no critical vulnerabilities and that one SSL/TLS configuration improvement was resolved. The robots.txt of surfshark.com disallows crawling of three PDFs whose names contain "Nologs-assurance," "ISAE_3000" and "InfrastructureTestReport" (the Trust Center links the last as SecuRing's report), and this site did not fetch them. The Japanese version of the transparency report says that in April 2026 Surfshark complied with a warrant issued by the Amsterdam District Court, and that the only information it could disclose was confirmation that an account existed and payment-related information.
:::

:::guess
Surfshark's technology story appears to come in two layers. One is the VPN itself: servers that run on RAM only and are rebuilt regularly, an in-house protocol and post-quantum cryptography, a stack of measures against seizure and future decryption described in the company's own words, topped by Deloitte's assurance and audit firms' assessments. The other is the storefront: pricing and legal pages built with Next.js, which can swap prices to match the visitor's location and currency (the pricing page's HTML embedded a generation time and pricing data for the visitor's country and currency), and articles and feature pages on WordPress, which suits search traffic — a division of labor, as it reads. On no-logs, Surfshark itself states that it holds account and payment data and keeps connection data for up to 15 minutes after a session ends, and its report on the warrant stays within that scope. The body of Deloitte's reports, however, is for account holders, and this site has not read it. The no-logs page explains that ISAE 3000 reports come as Type 1, which reviews control design, and Type 2, which also evaluates how effectively controls operate, but the public pages do not say which type the two reports are. The 2023 conclusion's "properly prepared" can read as an assessment of design or as one that includes operation, and the Japanese translation 「適切に運営され」 (properly operated) can be read as covering operation too. No-logs is presumably best taken as Surfshark's description plus the result of an assurance engagement on that description.
:::

## A 27-month first term, then yearly renewals

:::fact
On the pricing page (checked 2026-10-13), every bundle's 24-month plan is paid as 27 months at once, and the FAQ says "The 2-year plan is billed once at the beginning of your subscription and then annually after it expires." The billing practices page says "All subscription plans renew automatically at the full price," explains that any introductory promotional deal is part of the initial purchase and that "The renewal price will be at the standard non-introductory rate," and promises an email 30 days before renewal (except for 1-month plans). In the HTML this site fetched, however, the renewal price table on that page was an empty frame that a script fills in according to the visitor's location. This site's observation found data for nine plans (24, 12 and 1 month for each bundle) embedded in the pricing page's HTML: the 12-month plans (15 months including three extra) at 7,920 yen for Starter and One and 17,370 yen for One+, and the 1-month plans at 2,548, 2,938 and 3,388 yen. A field with the same name as the one the renewal table's script puts into the table (recurringTotalPrice; for the 24-month and 12-month plans the cycle field is 12 months) read 12,508 yen for Starter, 15,675 yen for One and 18,841 yen for One+. All are before tax; for Starter's 24-month plan, the same data also lists a tax amount of 1,048 yen and 11,524 yen with it added. The struck-through prices of the 24-month plans (68,796 yen and so on) equal 27 times the 1-month price, and the "Save 85%," "Save 87%" and "Save 79%" labels match discounts against those amounts (this site's calculation). The table below shows this site's calculation, from these values, of the total paid over 27 months and the renewal amounts that follow (before tax).
:::

| Plan | 24-month plan (first 27 months) | 12-month plan + one renewal (27 months) | 1-month plan × 27 | 24-month plan renewal (every 12 months) |
| --- | --- | --- | --- | --- |
| Starter | 10,476 yen (388 a month) | 20,428 yen | 68,796 yen | 12,508 yen (about 1,042 a month) |
| One | 10,476 yen (388 a month) | 23,595 yen | 79,326 yen | 15,675 yen (about 1,306 a month) |
| One+ | 18,846 yen (698 a month) | 36,211 yen | 91,476 yen | 18,841 yen (about 1,570 a month) |

:::guess
The pricing appears designed to take the first 27 months up front at a deep discount and recover it through yearly renewals from month 28. For Starter, the first 12 months after renewal (12,508 yen) cost more than the first 27 months (10,476 yen), about 2.7 times as much per month (this site's calculation). That the sale prices One's 24-month plan at the same 10,476 yen as Starter can read as drawing customers into the bundle with scam protection and Antivirus at the entrance and recovering the difference at renewal (3,167 yen a year, this site's calculation), or as pricing meant to get the new scam protection features widely used. Given that renewal amounts are not shown on the pricing page but sit in a location-dependent table on another page, under a caveat about A/B price testing, the moments when users reliably learn their own renewal amount are presumably the email 30 days before renewal and the account screen. The renewal amounts in the table are values this site read from the embedded data; actual charges may vary with tax, currency and any testing.
:::

## Business model

Surfshark sells subscriptions to the Starter, One and One+ bundles plus add-ons such as a dedicated IP and Alternative Number. To win customers, it runs an affiliate program and a refer-a-friend program.

:::fact
According to the affiliate page (checked 2026-10-13), Surfshark's affiliate commissions start at a 40% revenue share of new sales, with custom terms offered based on performance and traffic. The cookie lasts 30 days, credit goes to the affiliate the customer clicked last, and the minimum payout is 100 dollars. Its main platform is Tunes, also known as HasOffers, and the program is also listed on Impact Radius, Avant, CJ, Appsflyer, Awin and others. The affiliate terms (in English) prohibit bidding on banned keywords, require prior written permission for Google Ads, Apple Search Ads, social media and retargeting campaigns, and ban pop-up and pop-under ads that open automatically, incentives such as cashback, the use of Surfshark's trademarks in domain names, and posting refunds, credits or discounts without permission. If a referred customer gets a refund or files a chargeback, the commission is cancelled. In the refer-a-friend program, a customer can choose between up to 38 US dollars per referral or free time added to both their own and the friend's subscriptions (one month if the friend buys a 1-month plan, three months for longer plans such as 24 months); the friend must keep the account active for 31 days, and only the friend's first purchase counts. According to the terms of service, the identity theft coverage in One+ is a third-party service provided under a group policy issued by HSB Specialty Insurance Company, which manages all claims. The home page's navigation lists Incogni and the Saily eSIM under other products, and the link to Saily was a tracking URL beginning with go.saily.site/aff_c (this site's observation). The home page notes that the reviews it quotes were published by media partnered with Surfshark (Surfsharkと提携しているメディア).
:::

:::guess
Paying 40% of new sales and limiting referral rewards to the first purchase, while collecting renewals at the full price, appears designed to spend much of the first-term revenue on acquisition and earn the profit from the renewals that follow the first term. Splitting the offer into three bundles and pricing One's first term at Starter's level during the sale can read as an attempt to raise the per-customer price at renewal, or as a push to spread new features such as scam protection. The coverage and Incogni that One+ adds are limited to certain regions, so the value of One+ presumably looks different to users in Japan than to users in the US. The affiliate terms' ban on posting discounts or refunds without permission is presumably a way to keep control over how discounts are shown on coupon and comparison sites, though it can also read as a common line drawn to protect the brand. Quoting reviews from partner media, with a note saying so, can also read as the company itself showing a structure that relies on partner media for much of its customer acquisition.
:::

Surfshark is a service that wears VPN technology and third-party assessments as its banner while its storefront pushes 27 months paid up front and the higher bundles. Both the scope of its no-logs promise and the way renewals work are written in official documents, but the body of the assurance reports sits inside the account and the renewal amounts in a table drawn by a script. To check what it promises and what it sells at what price, you have to read one level deeper than the first line of the pricing page.
