---
service: "MillenVPN"
title: "A \"Clean VPN Based on Japanese Laws and Regulations\" From the Company Behind mixhost — Dissecting MillenVPN, Which Spells Out What It Does Not Record for Each Connection Method, Added a Static IP Option in 2026, and Leaves Referrals to A8.net"
description: "MillenVPN is a VPN from AzPocket, Inc., the Osaka company founded in April 2016 that also runs the mixhost hosting service. One contract covers three ways to connect: MillenVPN through its own app, MillenVPN Native (IKEv2) without an app, and MillenVPN Native OpenConnect for connecting from countries with strict internet restrictions. The 2-year plan costs 396 yen a month (tax included) for the first term only and 950 yen a month (before tax) after renewal. One-time plans from seven days, dedicated servers for businesses and a static IP option launched in August 2026 complete the lineup. The official site advertises more than 2,000 servers in over 140 locations worldwide, and 56 of the 144 locations on its server list carry a \"virtual environment\" note. Using the pricing page, server list, privacy policy, terms of service, fair use policy, refund guarantee, release notes, news posts, company profile, app store listings and this site's own observations, the article dissects what its no-log policy covers for each connection method, a server setup split between the app and everything else, two-tier pricing of first-term discounts and renewal fees, and a business that wins customers through A8.net and friend referrals."
lead: "MillenVPN's home page lists \"a clean VPN based on Japanese laws and regulations\" next to \"a no-log policy that does not track communications or usage.\" Being run by a telecommunications carrier that has filed a notification in Japan is a promise to protect the secrecy of communications, and at the same time a position of answering court orders and inquiries based on law. On August 25, 2026, the same day it launched its static IP option, MillenVPN added to its privacy policy and set out, for each connection method, what it records and what it does not. This article dissects, from public information alone, how the Osaka company behind mixhost builds and earns from a VPN."
category: consumer-app
tags: [vpn, privacy, security, subscription, small-business]
publishedAt: "2026-10-11"
updatedAt: "2026-10-11"
lastVerified: "2026-10-11"
serviceUrl: "https://millenvpn.jp/"
# Affiliate link placeholder: MillenVPN distributes its ads through the A8.net affiliate network
# (https://millenvpn.jp/affiliate/, checked 2026-10-11: register with A8.net, search for MillenVPN and
# apply; the page advertises a reward of up to 3,500 yen per contract and publishes no per-plan table).
# The top page also loads tracking scripts from h.accesstrade.net, t.afi-b.com and link-ag.net, and the
# refer-a-friend page mentions "each ASP", so other networks may carry the program too; the affiliate page
# itself names only A8.net. A8.net is an ASP whose ad code must be used as provided: copy the link to
# affiliate.url, the 1x1 impression image to affiliate.impressionUrl, and the text ad verbatim to
# affiliate.label. Never invent the label — ask the owner for the material's exact text. Keep every field
# identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://px.a8.net/svt/ejp?a8mat=<millenvpn-material>"
#   program: "MillenVPN Affiliate Program (A8.net)"
#   impressionUrl: "https://www18.a8.net/0.gif?a8mat=<millenvpn-material>"
#   label: "<verbatim text of the ad material>"
vendor: "AzPocket, Inc."
origin: "JP"
heroTheme: "millenvpn"
scores: { product: 3.5, ux: 3.5, tech: 3.0, business: 3.0 }
techStack:
  - layer: "App connection protocols"
    name: "WireGuard / IKEv2 / OpenVPN (MillenVPN app)"
    confidence: confirmed
    evidence: "The official service comparison page (checked 2026-10-11) lists WireGuard, IKEv2 and OPENVPN as the protocols of the MillenVPN app. According to the release notes, the Windows app added WireGuard in July 2023 and the iOS app in February 2024, and the macOS app's version 2.0.0 in September 2025 made IKEv2, IPSec and WireGuard selectable"
    evidenceUrl: "https://millenvpn.jp/millenvpn-and-millenvpnnative/"
  - layer: "App-free connections"
    name: "IKEv2 (MillenVPN Native) / OpenConnect (MillenVPN Native OpenConnect)"
    confidence: confirmed
    evidence: "The same comparison page names IKEv2 for MillenVPN Native and OpenConnect for MillenVPN Native OpenConnect. Native connects through the device's own VPN settings without a dedicated app, while OpenConnect needs a separate app and is described as hard to restrict even when connecting from countries with strict internet controls such as China. Japanese servers for both are in Tokyo and Osaka"
    evidenceUrl: "https://millenvpn.jp/millenvpn-and-millenvpnnative/"
  - layer: "Client apps"
    name: "Windows / macOS / Android / Android TV / iOS / Fire tablet / Fire TV Stick"
    confidence: confirmed
    evidence: "The official download page (checked 2026-10-11) links installers for Windows and macOS, the Android and Android TV app on Google Play, the iOS app on the App Store, and apps for Fire tablets and the Fire TV Stick on the Amazon Appstore. It notes that the Fire TV Stick app does not work on Vega OS"
    evidenceUrl: "https://millenvpn.jp/app/"
  - layer: "App connection platform"
    name: "WLVPN (white-label VPN platform, presumed)"
    confidence: likely
    evidence: "The app's package name on Google Play is com.wlvpn.consumervpn (our check, 2026-10-11). WLVPN's own site advertises an OEM program for launching a branded VPN service on the IPVanish-powered server network with its SDKs and APIs, and lists double hop, a kill switch, split tunneling and WireGuard among its features. MillenVPN does not disclose who provides the platform behind app connections"
  - layer: "Dedicated servers"
    name: "Dedicated VPN servers in Tokyo (IKEv2 / OpenConnect, kernelCare)"
    confidence: confirmed
    evidence: "The official dedicated server page (checked 2026-10-11) lists, as common specifications, a dedicated static IP, kernelCare, IKEv2/OpenConnect as supported protocols, Japan/Tokyo as the region, and contracts from 12 months. Network bandwidth is 1 to 4 Gbps depending on the plan (after the October 8, 2026 revision)"
    evidenceUrl: "https://millenvpn.jp/dedicated/"
  - layer: "Encryption and protection"
    name: "AES-256 / kill switch / DNS leak protection"
    confidence: confirmed
    evidence: "The FAQ on the pricing page (checked 2026-10-11) lists 256-bit AES encryption, a kill switch (some platforms only), no retention of connection or traffic logs, and DNS leak protection (some platforms only)"
    evidenceUrl: "https://millenvpn.jp/pricing/"
  - layer: "Payments and fraud detection"
    name: "Stripe / MaxMind"
    confidence: confirmed
    evidence: "The privacy policy (effective 2026-08-25) states that credit card payments use Stripe, that card details are held by Stripe rather than MillenVPN, and that MaxMind's fraud detection system is used to prevent misuse"
    evidenceUrl: "https://millenvpn.jp/privacy-policy/"
  - layer: "Status page"
    name: "Atlassian Statuspage (status.millenvpn.jp)"
    confidence: confirmed
    evidence: "status.millenvpn.jp, linked from the official site's footer, shows \"Powered by Atlassian Statuspage\" and reports the status of the MillenVPN app, MillenVPN Native and My Page. In our check (2026-10-11), the response returned server: AtlassianEdge"
    evidenceUrl: "https://status.millenvpn.jp/"
  - layer: "Own website and customer portal"
    name: "WordPress / LiteSpeed / Cloudflare / WHMCS (accounts.millenvpn.jp)"
    confidence: likely
    evidence: "This site's own observation (2026-10-11) found millenvpn.jp and support.millenvpn.jp returning server: cloudflare, x-litespeed-cache and x-turbo-charged-by: LiteSpeed, plus a link to the WordPress REST API, and the HTML of millenvpn.jp containing a WordPress 7.1.3 generator tag. The sign-up and My Page portal accounts.millenvpn.jp has clientarea.php and cart.php paths and returned a cookie whose name starts with WHMCS, suggesting WHMCS handles customer management and billing"
  - layer: "Support chat"
    name: "DocsBot AI (chat widget)"
    confidence: likely
    evidence: "This site's own observation (2026-10-11) found the HTML of millenvpn.jp loading chat.js from widget.docsbot.ai and calling DocsBotAI.init. It appears to answer questions on the site with an AI chat"
sources:
  - label: "MillenVPN official: Home page"
    url: "https://millenvpn.jp/"
    accessedAt: "2026-10-11"
  - label: "MillenVPN official: Pricing (subscription plans, one-time plans, static IP option, FAQ)"
    url: "https://millenvpn.jp/pricing/"
    accessedAt: "2026-10-11"
  - label: "MillenVPN official: MillenVPN Dedicated Server"
    url: "https://millenvpn.jp/dedicated/"
    accessedAt: "2026-10-11"
  - label: "MillenVPN official: Three services in one contract (comparison of the app, Native and OpenConnect)"
    url: "https://millenvpn.jp/millenvpn-and-millenvpnnative/"
    accessedAt: "2026-10-11"
  - label: "MillenVPN official: Features and uses (quick diagnosis)"
    url: "https://millenvpn.jp/features/"
    accessedAt: "2026-10-11"
  - label: "MillenVPN official: VPN server list"
    url: "https://millenvpn.jp/locations/"
    accessedAt: "2026-10-11"
  - label: "MillenVPN official: Compatibility tables (countries and VOD services)"
    url: "https://millenvpn.jp/vod-table/"
    accessedAt: "2026-10-11"
  - label: "MillenVPN official: MillenVPN app downloads"
    url: "https://millenvpn.jp/app/"
    accessedAt: "2026-10-11"
  - label: "MillenVPN official: Fair use policy"
    url: "https://millenvpn.jp/fair-use-policy/"
    accessedAt: "2026-10-11"
  - label: "MillenVPN official: Privacy policy (effective 2026-08-25)"
    url: "https://millenvpn.jp/privacy-policy/"
    accessedAt: "2026-10-11"
  - label: "MillenVPN official: Terms of service (effective 2025-12-15)"
    url: "https://millenvpn.jp/tos/"
    accessedAt: "2026-10-11"
  - label: "MillenVPN official: Affiliate program (A8.net)"
    url: "https://millenvpn.jp/affiliate/"
    accessedAt: "2026-10-11"
  - label: "MillenVPN official: Refer-a-friend program"
    url: "https://millenvpn.jp/friend/"
    accessedAt: "2026-10-11"
  - label: "MillenVPN official: pCloud cloud storage"
    url: "https://millenvpn.jp/pcloud/"
    accessedAt: "2026-10-11"
  - label: "MillenVPN Help Center: About the 30-day money-back guarantee"
    url: "https://support.millenvpn.jp/30"
    accessedAt: "2026-10-11"
  - label: "MillenVPN Help Center: Static IP option (subscription plans only)"
    url: "https://support.millenvpn.jp/3965"
    accessedAt: "2026-10-11"
  - label: "MillenVPN Help Center: Windows release notes"
    url: "https://support.millenvpn.jp/102"
    accessedAt: "2026-10-11"
  - label: "MillenVPN Help Center: macOS release notes"
    url: "https://support.millenvpn.jp/123"
    accessedAt: "2026-10-11"
  - label: "MillenVPN Help Center: iOS release notes"
    url: "https://support.millenvpn.jp/126"
    accessedAt: "2026-10-11"
  - label: "MillenVPN News: Dedicated server spec optimization (2026-10-08)"
    url: "https://millenvpn.jp/news/2193"
    accessedAt: "2026-10-11"
  - label: "MillenVPN News: Static IP option released (2026-08-25)"
    url: "https://millenvpn.jp/news/2164"
    accessedAt: "2026-10-11"
  - label: "MillenVPN News: Privacy policy revision (2026-08-25)"
    url: "https://millenvpn.jp/news/2154"
    accessedAt: "2026-10-11"
  - label: "MillenVPN News: Simultaneous connection limit removed (2024-11-25)"
    url: "https://millenvpn.jp/news/1876"
    accessedAt: "2026-10-11"
  - label: "MillenVPN News: Fourth anniversary campaign (2024-11-01)"
    url: "https://millenvpn.jp/news/1853"
    accessedAt: "2026-10-11"
  - label: "MillenVPN Status (outages and maintenance)"
    url: "https://status.millenvpn.jp/"
    accessedAt: "2026-10-11"
  - label: "AzPocket, Inc.: Company profile"
    url: "https://www.azpocket.co.jp/company/"
    accessedAt: "2026-10-11"
  - label: "AzPocket, Inc.: Home page (business lines and news)"
    url: "https://www.azpocket.co.jp/"
    accessedAt: "2026-10-11"
  - label: "App Store: MillenVPN (seller AzPocket, Inc.)"
    url: "https://apps.apple.com/jp/app/millenvpn/id1514053309"
    accessedAt: "2026-10-11"
  - label: "Google Play: MillenVPN (package name com.wlvpn.consumervpn)"
    url: "https://play.google.com/store/apps/details?id=com.wlvpn.consumervpn&hl=ja"
    accessedAt: "2026-10-11"
  - label: "WLVPN: Home (white-label VPN OEM program)"
    url: "https://wlvpn.com/"
    accessedAt: "2026-10-11"
---

MillenVPN is a VPN service that encrypts the traffic of smartphones and computers and lets users choose the country they connect through. It is run by AzPocket, Inc., the same company behind the hosting service [mixhost](/en/articles/mixhost) dissected on this site, and the official site's footer links to mixhost as well. When choosing a VPN, which country's laws the operator works under is itself part of the product (see also the [Proton](/en/articles/proton) dissection). In the FAQ on its pricing page, MillenVPN describes itself as a service that complies with Japanese law and has filed a notification with the Ministry of Internal Affairs and Communications, and says it is "fundamentally different from the many VPN operators based offshore." It is a VPN that puts being a Japanese company at the center of the product.

## Service overview

A MillenVPN contract covers three ways to connect. "MillenVPN" picks a destination from more than 140 locations in a dedicated app; "MillenVPN Native" connects through the device's own VPN settings (IKEv2) without installing an app; and "MillenVPN Native OpenConnect" is meant for connecting from countries with strict internet restrictions such as China. There are three kinds of plan, 1-year and 2-year subscription plans, one-time plans from seven days, and dedicated servers for businesses, and in August 2026 a static IP option was added that gives app users an IP address of their own. The pCloud cloud storage service and the Airalo eSIM are listed as "partner services," and the official site can be read in English, Simplified Chinese, Traditional Chinese and Korean as well as Japanese.

:::fact
According to the company profile (as of 2026-10-11), AzPocket, Inc. was founded on April 11, 2016, is headquartered in Minamisenba, Chuo Ward, Osaka, is engaged in internet infrastructure and in telecommunications business under the Telecommunications Business Act, and lists its operator number as notified telecommunications carrier E-28-03926. The company's home page introduces it as an "internet infrastructure startup from Asia" founded in 2016, names two businesses, mixhost and MillenVPN, and describes MillenVPN as a "flat-rate VPN you can start with short-term use." The features page describes MillenVPN as a service that AzPocket, which conducts telecommunications business in Japan, operates after filing a notification with the Ministry of Internal Affairs and Communications, and says it is operated in compliance with the secrecy of communications under Article 21 of the Constitution of Japan. Article 21 of the terms of service likewise protects the secrecy of communications under Article 4 of the Telecommunications Business Act. The app release notes date the first Windows and macOS versions to a "new release" on June 2, 2020 and iOS version 1.0.0 to July 30, 2020, and a news post on November 1, 2024 announced that MillenVPN had reached its fourth anniversary.
:::

:::fact
According to the pricing page (checked 2026-10-11), the 2-year subscription plan costs 360 yen a month (396 yen with tax) for the first term and the 1-year plan 540 yen (594 yen with tax), labeled "62% off the first term" and "43% off the first term," and both renew at 950 yen a month before tax. The monthly figures are per-month equivalents of paying for the whole term up front; contracts renew automatically and the discount applies to the first term only. One-time plans cost 638 yen for 7 days, 1,078 yen for 15 days and 1,738 yen for 30 days (all tax included) and end automatically when the period is over. The static IP option costs 396 yen a month (tax included) per address, requires a subscription plan, and offers five regions: Tokyo, London, Paris, Frankfurt and Kansas City. Dedicated servers for businesses come in six plans from Solo (from 2,310 yen a month, tax included) to Enterprise (from 26,400 yen), shown as the monthly price when the longest term is paid up front, with contracts from 12 months and 1 to 160 accounts. No plan limits the number of devices, and the 30-day money-back guarantee applies only to subscription plans. Payment is by credit card (VISA, MasterCard, JCB, American Express, Diners Club, Discover), with PayPal and bank transfer available only for payments in Japanese yen. The home page says customers can use more than 2,000 VPN servers in over 140 locations worldwide.
:::

:::pull
A VPN that sells being a Japanese company spells out, for each connection method, both what it does not record and what it does.
:::

::scorecard

## UX analysis

MillenVPN's experience is built from procedures completed entirely in Japanese and a lineup that runs from short-term to long-term and from individuals to businesses. The differences between the three connection methods and the options, however, are hard to see from the first line of the price table.

- **Try it briefly, or use it long and cheaply.** One-time plans can be bought from seven days, and the pricing page recommends them for travel and temporary use of overseas services. Subscription plans carry a 30-day money-back guarantee and are recommended to first-time users too. A "quick diagnosis" on the features page recommends a plan and connection method from four questions: your purpose, where you connect from, which country's server you need, and how long you will use it. Dedicated servers have no trial period; their FAQ suggests trying MillenVPN Native, which has the same specifications, on a plan covered by the refund guarantee.
- **Three connection methods to choose from.** According to the service comparison page, the app connects to more than 2,000 servers in 140 locations over WireGuard, IKEv2 or OpenVPN and is said to work with many streaming sites in and outside Japan. MillenVPN Native uses IKEv2 without an app, is said to work with almost all streaming sites in Japan, and includes a static IP shared with other users as standard. MillenVPN Native OpenConnect needs a separate app and is described as "particularly hard to restrict" from countries with strict controls. The pricing FAQ says the kill switch and DNS leak protection are available on some platforms only. The range of choices is wide, but the work of understanding which method suits which use is left to the user.
- **How the 140 locations are counted.** The server list (checked 2026-10-11) shows, by this site's count, 144 locations in 110 countries and regions, 56 of which carry a "virtual environment" note. The note explains that these are not where the servers physically sit but servers in an environment treated virtually as that location; in Asia, 20 of 33 locations fall into this group. The app descriptions on the App Store and Google Play still say "more than 75 locations and more than 1,300 VPN servers," smaller numbers than the official site. For uses where the physical country of the server matters, the notes on the list are worth checking.
- **The streaming tables come with conditions.** The compatibility page lists overseas streaming services usable from Japan and Japanese services usable from abroad (TVer, U-NEXT, ABEMA, d Anime Store and others). The home page notes, however, that support for every streaming service is not guaranteed, that viewing may stop when a provider changes its specifications, and that a separate subscription to the streaming service is required, and the compatibility page says that from some countries MillenVPN Native must be used. The features page says services not on the tables may not be accessible or viewable even through the VPN. How each streaming service defines where it can be watched is something users need to check in that service's own terms.
- **Refunds are self-service, but narrow.** According to the refund guarantee help page, only the first term of a subscription plan (2-year or 1-year) ordered from the official site qualifies, within 30 days from the day after the start date (Japan time). Customers who paid by credit card or PayPal get an automatic refund by choosing "cancel immediately and apply the money-back guarantee" when cancelling. Bank transfer customers must contact support and pay a 330-yen refund fee (tax included). One-time plans, subscriptions reached by upgrading, renewed subscriptions, dedicated servers, pCloud and Airalo are excluded, and the static IP option qualifies only when ordered together with a subscription plan. The static IP help page warns that a cancelled address may later be assigned to another user and recommends removing it from any allowlist. The terms of service say other fees already paid are not refunded for any reason, and that subscription plans and dedicated servers renew for the same term unless the customer gives notice at least 14 days before the end date.
- **App features fell into step in summer 2026.** According to the release notes, the Windows app gained WireGuard in July 2023 and the iOS app in February 2024, while the macOS app made IKEv2, IPSec and WireGuard selectable with version 2.0.0 in September 2025. A kill switch reached the macOS and iOS apps that same September, and threat protection arrived first on Windows in August 2024. The August 2026 updates added static IP and double hop to the Windows, macOS and iOS apps, and threat protection to macOS and iOS. Because features have reached different operating systems years apart, it is worth checking what the version on your own device can do.

## Tech stack

::techstack

:::fact
According to the service comparison page (checked 2026-10-11), app connections use WireGuard, IKEv2 or OpenVPN, MillenVPN Native uses IKEv2, and MillenVPN Native OpenConnect uses OpenConnect; Japanese servers for all three are in Tokyo and Osaka. App connections reach more than 2,000 servers in 140 locations, while servers for Native and OpenConnect are "being added on an ongoing basis." Dedicated servers are built per customer after ordering (according to the static IP option announcement), run in the Tokyo region over IKEv2 and OpenConnect, and list "kernelCare" among their common specifications. The pricing FAQ lists 256-bit AES encryption, a kill switch, no retention of connection or traffic logs, and DNS leak protection, and says the service uses the high-capacity networks of Tier 1 providers. App IP addresses are dynamic, randomly assigned from tens of thousands of addresses operated worldwide. The same FAQ says there is no limit on data transfer. The fair use policy says the limit on simultaneous connections (previously 10 devices) was removed from November 25, 2024, while stating that MillenVPN runs a system that monitors and limits CPU, memory and data transfer, with 3 TB a month per contract and per connection method as the threshold for restrictions. It says customers who exceed their fair share are 0.01% or less of the total.
:::

:::fact
This site's own observation (2026-10-11) found millenvpn.jp returning x-litespeed-cache and x-turbo-charged-by: LiteSpeed headers and a WordPress REST API link from behind Cloudflare, and its HTML containing a "WordPress 7.1.3" generator tag and a note of optimization by LiteSpeed Cache. The HTML also loaded a chat script from widget.docsbot.ai. The help center (support.millenvpn.jp) returned the same WordPress and LiteSpeed headers. The sign-up and My Page entry point, accounts.millenvpn.jp, has clientarea.php, cart.php and submitticket.php paths and returned a cookie whose name starts with WHMCS. The status page, status.millenvpn.jp, shows "Powered by Atlassian Statuspage" and announced that during the My Page maintenance on October 7, new orders and support inquiries would also be unavailable. App installers are served from app.millenvpn.jp through Cloudflare, and the Windows installer's last-modified date matched the release date of V2.5.2.0 in the release notes (September 25, 2026). The privacy policy states that Stripe handles credit card payments and MaxMind fraud detection. The App Store seller and the Google Play developer are both AzPocket, Inc., and the app's package name on Google Play is com.wlvpn.consumervpn.
:::

:::guess
MillenVPN appears to be split into two layers. One is the network of more than 140 locations that the app connects to. The string wlvpn in the Google Play package name matches the name of WLVPN, a provider of white-label VPN services. On its own site, WLVPN advertises an OEM program for launching a branded VPN on the IPVanish-powered server network with its SDKs and APIs, and lists 3,000+ servers covering over 110 countries, double hop with paths chosen from over 145 locations, a kill switch, split tunneling and WireGuard. The features MillenVPN's apps have been adding, and the scale of its server list at 110 countries and regions and 144 locations, are close to this, so app connections presumably run on such an external platform, though MillenVPN does not disclose a provider. If so, part of the app's no-log promise also rests on how that platform is operated (WLVPN itself advertises independently verified no-traffic-logs privacy). The other layer is MillenVPN Native, OpenConnect and the dedicated servers, which are said to have many servers in Japan, starting with Tokyo and Osaka, and which AzPocket presumably operates itself. As the next section shows, the privacy policy says source IP addresses and timestamps are collected for Native and dedicated servers but not for the app, a difference that reads as matching these two layers. The website, help center, customer portal and status page are built from off-the-shelf parts; for a comparison of setups, the [mixhost](/en/articles/mixhost) dissection is also a useful reference.
:::

## What "no logs" means differs by connection method

:::fact
The privacy policy (checked 2026-10-11) revises the version in force from June 26, 2020 and applies from August 25, 2026. It is written in four parts, MillenVPN (the app), MillenVPN Native, dedicated servers and the static IP option; there is no separate part for MillenVPN Native OpenConnect. For the app, it says MillenVPN neither collects nor records source IP addresses and timestamps, communications content or browsing history, or DNS queries, and collects only credit card information (held by Stripe), the IP address at sign-up, the server locations chosen, total monthly traffic, the app version, and diagnostic logs that users send from the app when connection problems occur (the source IP address and other details on Windows, device information on Android). It adds that diagnostic logs arrive only when users send them and are not collected continuously on the server side. MillenVPN Native records no communications content, browsing history or DNS queries, but does collect source IP addresses and timestamps (without content). For dedicated servers and the static IP option, MillenVPN collects the static IP address assigned and the period of assignment, states that because the static IP is technically linked to the contract holder's information, the contract holder can be identified from an IP address and time of use notified in an outside inquiry, and lists among its reasons for collection responding to court orders, disclosure requests based on law (including sender information disclosure requests under the Japanese law on information distribution platforms, 情報流通プラットフォーム対処法) and inquiries from investigative authorities. Source IP addresses and timestamps are collected for dedicated servers but not for the static IP option. According to the August 25 announcement, the revision added the app's diagnostic logs and the provisions for dedicated servers and the static IP option, and asked dedicated server customers to consent again. The date is the same as that of the announcement releasing the static IP option. In the stores' disclosure sections, the App Store says user IDs, usage data and diagnostics may be collected and linked to the user (with a note that Apple has not verified this), while Google Play says "No data collected" yet shows that the app may share personal information with third parties.
:::

| Privacy policy section | Source IP and timestamps | Content, browsing history, DNS | Identifying the contract holder |
| --- | --- | --- | --- |
| MillenVPN app (dynamic IP) | Not collected or recorded | Not collected or recorded | Said to be impossible |
| MillenVPN Native | Collected (without content) | Not collected or recorded | Said to be impossible |
| Static IP option (from August 2026) | Not collected or recorded | Not collected or recorded | Possible from the static IP and time of use |
| Dedicated server | Collected (without content) | Not collected or recorded | Possible from the static IP and time of use |

:::guess
This division appears to draw the line that lets MillenVPN sell, under one banner, a personal app about which the home page says "there is no need to worry about being tracked by anyone" and static IP addresses whose very value lies in showing whose traffic it is. Static IPs are used to restrict which addresses may reach internal systems and outside services, and the dedicated server page itself names access to attendance and expense services with IP restrictions as a use. Stating in contract language, in advance, that the holder can be identified reads as a design meant to stay consistent with the banner of "a clean VPN based on Japanese laws and regulations." That the policy was revised on the same day the static IP option launched also suggests that each time a product is added, the scope of records has been rewritten to follow it. Still, "no logs" is the company's own description, and this site has not verified it independently. The stores' disclosure sections cover how apps handle analytics and diagnostics, which reads as a separate matter from records of VPN traffic, but because the stores display it differently, the text of the privacy policy is the surest place to check.
:::

## Business model

The business centers on subscription plans paid up front for one or two years, topped by one-time plans from seven days, the static IP option at 396 yen a month per address, and dedicated servers for businesses on contracts of 12 months or more, plus extra accounts. Sales of pCloud and coupons for Airalo (the features page says up to 15% off) sit alongside, and winning customers is left to A8.net affiliates, friend referrals and the company's own media sites listed in the footer.

:::fact
According to the affiliate page (checked 2026-10-11), MillenVPN distributes its ads through the affiliate service provider (ASP) A8.net and pays a performance reward of up to 3,500 yen per contract; to join, one registers with A8.net, searches for MillenVPN and applies. According to the refer-a-friend page, when a customer shares a dedicated invitation link and coupon code and a friend signs up with them, the friend gets a 1,000 yen discount, and once 30 days of use are confirmed, the referrer receives 1,000 yen in credit (payments in Japanese yen only, with no limit on the number of invitations). The pricing FAQ offers volume discounts for 10 or more contracts, consultations about resale and OEM supply, and combining multiple contracts into one invoice, and the dedicated server FAQ says invoices that comply with Japan's qualified invoice system can be downloaded from My Page. The pCloud page hands MillenVPN users a promo code for 500 GB free for one year (worth about 7,700 yen) and lets them buy paid pCloud plans through MillenVPN. The fourth-anniversary post on November 1, 2024 gave the regular new-contract prices of subscription plans as 7,128 yen for one year and 9,504 yen for two years (both tax included), the same as today's first-term monthly prices (594 and 396 yen) multiplied by the number of months. According to the October 8, 2026 announcement, after surveying actual usage in the face of rising infrastructure procurement costs, MillenVPN revised dedicated server bandwidth from 2 Gbps to 1 Gbps on Pro, 4 Gbps to 1 Gbps on Business, 5 Gbps to 2 Gbps on Business Plus and 6 Gbps to 4 Gbps on Enterprise, and raised Business Plus from 60 to 80 accounts. At the same time it cut prices on Pro, Business and Business Plus; the monthly price of Business on a 2-year contract (tax included) fell from 14,300 yen to 13,200 yen. The dedicated server page advertises speeds of "up to 7 Gbps," a figure that does not line up with the revised plan bandwidth of 1 to 4 Gbps. The app has more than 50,000 downloads on Google Play.
:::

:::guess
The skeleton of the pricing appears to be a prepaid subscription that lowers the entry price with a first-term discount and recovers it at renewal. The 2-year plan's first payment is 9,504 yen (tax included); after renewal, 24 months at 950 yen before tax come to 25,080 yen with tax (this site's calculation), about 2.6 times as much. The A8.net reward of up to 3,500 yen, whose tax treatment is not stated, equals a little under 40% of the 2-year plan's first payment, a design that reads as handing much of the first term's revenue to the referrer and recovering it at renewal. Keeping first-term prices unchanged since 2024 while removing the simultaneous connection limit, adding app features and introducing the static IP option at 396 yen a month presumably reflects a strategy of broadening features while using its status as a Japanese company as the differentiator. Static IPs now come in three steps, Native with an address shared among users, the static IP option with one address of your own, and dedicated servers from 2,310 yen a month that give a customer a whole server (from the Entry plan up, several accounts can share one address), a ladder that takes in uses from individuals up to company operations. Announcing reduced dedicated server bandwidth together with price cuts appears to be a reworking of cost and price to match actual usage as infrastructure costs rise. The media sites in the footer, such as MillenVPN動画ガイド (video guide) and MillenVPNスポーツ (sports), presumably serve as entry points that bring in people searching for streaming information.
:::

Having released its apps in 2020, MillenVPN is a VPN that the same Osaka company behind mixhost has sold under the banner of being a telecommunications carrier that filed a notification in Japan. For app connections it lists what it does not record; for static IPs and dedicated servers it adds what it does record, and that the contract holder can be identified. Spelling out for each connection method not only what it does not record but also what it does has become the most concrete meaning of the words "a clean VPN based on Japanese laws and regulations."
