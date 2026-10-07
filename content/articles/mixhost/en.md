---
service: "mixhost"
title: "A Web Host That Cut Its Year-Two Price — Dissecting mixhost, Which Lowered Renewal Fees by Up to About 60%, Runs LiteSpeed and cPanel on a Cloud, and Leaves Referrals to A8.net and afb"
description: "mixhost is a Japanese shared hosting service run by AzPocket, Inc., a company founded in Osaka in April 2016. It uses LiteSpeed as its web server, cPanel as its control panel and CloudLinux as its operating system, on a cloud made redundant across multiple servers. In April 2025 it cut renewal fees by up to about 60% and added a Light plan from 495 yen a month (tax included, first term of a 36-month contract). Every plan allows adult sites and reselling, and customer acquisition is left to affiliates on A8.net and afb. Using the pricing and specification pages, the fair use policy, the SLA, the refund guarantee, news posts, the company profile and this site's own observations, the article dissects the two-tier pricing of first-term discounts and renewal fees, the usage thresholds behind \"unlimited,\" a defense layer that keeps adding tools such as Imunify360 and Jetpack, and a business that wins customers through referrals and friend invitations."
lead: "mixhost's price table shows two prices for every contract length: a discounted price for the first term only, and below it, in smaller type, the \"renewal\" price. In April 2025, mixhost cut that lower line sharply. On a 36-month Business plan, the monthly renewal price fell from 5,478 yen to 2,178 yen. In a Japanese hosting market where first-term discounts are the usual way to win customers, a small company lowered what customers pay from year two onward. This article dissects, from public information alone, the technology and money flows behind it."
category: dev-tool
tags: [hosting, wordpress, small-business, php, litespeed, cpanel]
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastVerified: "2026-10-07"
serviceUrl: "https://mixhost.jp/"
# Affiliate link placeholder: mixhost distributes its ads only through two affiliate networks,
# A8.net and afb (https://mixhost.jp/affiliate-program/, checked 2026-10-07: register with either
# network, search for mixhost and apply). Both are ASPs whose ad code must be used as provided:
# copy the link to affiliate.url, the 1x1 impression image (if any) to affiliate.impressionUrl,
# and the text ad verbatim to affiliate.label. Never invent the label — ask the owner for the
# material's exact text. Keep every field identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<a8-or-afb-link-for-mixhost>"
#   program: "mixhost Affiliate Program (A8.net / afb)"
#   impressionUrl: "https://<impression-pixel>"
#   label: "<verbatim text of the ad material>"
vendor: "AzPocket, Inc."
origin: "JP"
heroTheme: "mixhost"
scores: { product: 3.5, ux: 3.5, tech: 3.5, business: 3.0 }
techStack:
  - layer: "Web server"
    name: "LiteSpeed Web Server (HTTP/3)"
    confidence: confirmed
    evidence: "The official pricing and feature comparison table (checked 2026-10-07) marks \"LiteSpeed Web Server\" and \"HTTP/3\" as included on every plan. The company profile lists LiteSpeed Technologies Inc. as a certified partner"
    evidenceUrl: "https://mixhost.jp/hosting/web/"
  - layer: "Operating system"
    name: "CloudLinux"
    confidence: confirmed
    evidence: "The same table marks \"CloudLinux\" as included on every plan. The fair use policy says mixhost runs a system that monitors and limits CPU, memory and storage use, and restricts accounts that exceed their fair share"
    evidenceUrl: "https://mixhost.jp/hosting/web/"
  - layer: "Control panel"
    name: "cPanel + WP Toolkit"
    confidence: confirmed
    evidence: "The table marks the \"cPanel control panel\" and \"WP Toolkit\" as included on every plan, and says Premium and above get \"WP Toolkit Deluxe,\" with staging and an AI-checked smart update. The company profile lists cPanel, L.L.C. as a certified partner"
    evidenceUrl: "https://mixhost.jp/hosting/web/"
  - layer: "Database and language"
    name: "MariaDB (InnoDB, phpMyAdmin) / PHP (5.6–8.5)"
    confidence: confirmed
    evidence: "The table states that the database is MariaDB, that phpMyAdmin and InnoDB are available, and that PHP 5.6 to 8.5 can be set per domain or subdomain. A news post (2026-01-19) announced PHP 8.5 would roll out from January 26"
    evidenceUrl: "https://mixhost.jp/hosting/web/"
  - layer: "Storage and redundancy"
    name: "NVMe SSD (real-time replication across storage servers)"
    confidence: confirmed
    evidence: "The shared hosting page states that mixhost uses cloud servers made redundant across multiple servers that fail over automatically, that NVMe SSD storage is replicated in real time to multiple storage servers, and that backups are stored redundantly on multiple storage servers in a separate data center"
    evidenceUrl: "https://mixhost.jp/hosting/web/"
  - layer: "WordPress acceleration"
    name: "LiteSpeed Cache + RocketBooster (in-house)"
    confidence: confirmed
    evidence: "The table marks the server-integrated caching plugin \"LiteSpeed Cache\" and \"RocketBooster,\" a WordPress acceleration technology mixhost developed itself, as included on every plan"
    evidenceUrl: "https://mixhost.jp/hosting/web/"
  - layer: "Security"
    name: "Imunify360"
    confidence: confirmed
    evidence: "An official news post (2026-09-07) states that the security tool \"Imunify360\" has been added to the Light plan as well, automatically preventing site tampering and detecting and blocking unauthorized access, with a new \"Imunify360\" item in cPanel"
    evidenceUrl: "https://mixhost.jp/news/1962"
  - layer: "Outbound mail limits"
    name: "MailChannels"
    confidence: confirmed
    evidence: "The fair use policy states that, in addition to the sending caps (1,000 messages a day, 100 on Light), separate sending limits by MailChannels may apply"
    evidenceUrl: "https://mixhost.jp/fair-use-policy/"
  - layer: "Own website and customer portal"
    name: "WordPress / Cloudflare / WHMCS (accounts.mixhost.jp)"
    confidence: likely
    evidence: "This site's own observation (2026-10-07) found mixhost.jp returning server: cloudflare, x-litespeed-cache: hit and x-turbo-charged-by: LiteSpeed, plus a link to the WordPress REST API. The customer portal accounts.mixhost.jp, behind Cloudflare, returned a cookie whose name starts with WHMCS and a whmcsBaseUrl variable, suggesting WHMCS handles customer management and billing"
sources:
  - label: "mixhost official: Home page"
    url: "https://mixhost.jp/"
    accessedAt: "2026-10-07"
  - label: "mixhost official: Shared hosting (pricing, feature comparison and specifications)"
    url: "https://mixhost.jp/hosting/web/"
    accessedAt: "2026-10-07"
  - label: "mixhost official: Overseas hosting (US West Coast, San Jose)"
    url: "https://mixhost.jp/hosting/global/"
    accessedAt: "2026-10-07"
  - label: "mixhost official: Fair use policy"
    url: "https://mixhost.jp/fair-use-policy/"
    accessedAt: "2026-10-07"
  - label: "mixhost Help & Support: About the service level agreement (SLA)"
    url: "https://help.mixhost.jp/articles/360037394031"
    accessedAt: "2026-10-07"
  - label: "mixhost Help & Support: 30-day money-back guarantee"
    url: "https://help.mixhost.jp/articles/360035781732"
    accessedAt: "2026-10-07"
  - label: "mixhost official: Affiliate program (A8.net and afb)"
    url: "https://mixhost.jp/affiliate-program/"
    accessedAt: "2026-10-07"
  - label: "mixhost official: Refer-a-friend program"
    url: "https://mixhost.jp/refer-a-friend/"
    accessedAt: "2026-10-07"
  - label: "AzPocket, Inc.: Company profile"
    url: "https://www.azpocket.co.jp/company/"
    accessedAt: "2026-10-07"
  - label: "AzPocket, Inc.: Home page (business lines)"
    url: "https://www.azpocket.co.jp/"
    accessedAt: "2026-10-07"
  - label: "mixhost News: Notice of renewal price revision (2025-04-01)"
    url: "https://mixhost.jp/news/1736"
    accessedAt: "2026-10-07"
  - label: "mixhost News: Light plan from 495 yen a month, major price cuts and service upgrades (2025-04-22)"
    url: "https://mixhost.jp/news/1760"
    accessedAt: "2026-10-07"
  - label: "mixhost News: Rollout of PHP 8.5 (2026-01-19)"
    url: "https://mixhost.jp/news/1879"
    accessedAt: "2026-10-07"
  - label: "mixhost News: Jetpack free perks and paid options now available (2026-05-25)"
    url: "https://mixhost.jp/news/1924"
    accessedAt: "2026-10-07"
  - label: "mixhost News: Imunify360 security added to the Light plan (2026-09-07)"
    url: "https://mixhost.jp/news/1962"
    accessedAt: "2026-10-07"
  - label: "mixhost News: Posts from 2016"
    url: "https://mixhost.jp/news/date/2016"
    accessedAt: "2026-10-07"
  - label: "A8.net (operated by Fan Communications, Inc.)"
    url: "https://www.a8.net/"
    accessedAt: "2026-10-07"
---

mixhost is a Japanese shared hosting service for WordPress blogs and small business websites. Where [Xserver](/en/articles/xserver), [ConoHa WING](/en/articles/conoha-wing), [Lolipop!](/en/articles/lolipop) and [Sakura Rental Server](/en/articles/sakura-rental-server), all dissected on this site, are backed by large IT groups or long histories, mixhost is run by a company born in 2016 with capital of 2 million yen. For its control panel it uses cPanel, which mixhost itself describes as having the world's largest market share, and every plan allows adult sites and reselling. Among Japanese shared hosts, it is built a little differently and allows a little more.

## Service overview

mixhost centers on shared hosting, alongside plans for adult sites, overseas hosting on the US West Coast, and dedicated cloud hosting where one customer gets a whole server. Its catalog also includes domains, the Sitejet site builder, the pCloud cloud storage service and MillenVPN, a VPN from the same company.

:::fact
According to the company profile (as of 2026-10-07), AzPocket, Inc., which runs mixhost, was founded on April 11, 2016, is headquartered in Minamisenba, Chuo Ward, Osaka, has capital of 2 million yen, and is engaged in internet infrastructure and in telecommunications business under the Telecommunications Business Act (registered notification number E-28-03926). It lists Sakura Internet, GMO Internet, Akamai Technologies GK and Fan Communications, the operator of A8.net, among its main business partners, and cPanel, L.L.C., LiteSpeed Technologies Inc. and Softaculous Ltd. as certified partners. The company's home page introduces it as an "internet infrastructure startup from Asia" founded in 2016 and names two businesses, mixhost and MillenVPN. Its careers page advertises fully remote work, flextime and permission for side jobs. mixhost's news archive begins in 2016; it launched automatic backup and restore that November and PHP 7.1 that December.
:::

:::fact
According to the pricing and feature comparison table (checked 2026-10-07, tax included), shared hosting comes in four plans, Light, Standard, Premium and Business, with contract lengths of 3, 6, 12, 24 or 36 months paid in full up front. The table shows a discounted first-term price and the renewal price after it. On a 36-month contract the monthly equivalent is 495 yen for the first term and 748 yen on renewal for Light, 858 and 1,298 yen for Standard, 968 and 1,518 yen for Premium, and 1,408 and 2,178 yen for Business. On the 12-month contract labeled "most popular," Standard costs 968 yen for the first term and 1,518 yen on renewal. A note says the discount applies only to the first term and regular prices apply from renewal. Recommended monthly page views are 100,000 for Light, 200,000 for Standard, 300,000 for Premium and 600,000 for Business. File-count limits (inodes) run from 100,000 to 600,000; disk space is 100 GB on Light and "unlimited" on the others. Daily backups kept for 14 days come with Standard and above, not Light. The region is Tokyo, and every plan is marked as allowing commercial use, reselling and adult sites. Overseas hosting runs on servers in San Jose on the US West Coast and starts at 858 yen a month for the first term.
:::

:::pull
Every host competes on first-term discounts. What mixhost moved in 2025 was the line below: the price from year two onward.
:::

::scorecard

## UX analysis

mixhost's experience wraps tools that are standard in overseas hosting in Japanese-language support and generous migration help. What "unlimited" means, and how refunds work, cannot be read from the first line of the price table.

- **Migration is the front door.** According to the shared hosting page, a free tool called "WordPress Rakuraku Hikkoshi" (easy move) starts moving a site once the customer enters just three things on the order form, the WordPress login URL, ID and password, and a fully managed WordPress migration service is free for one site a year (for orders placed on or after April 4, 2023). New sites can start from an "easy template" with a theme and plugins already installed. Reducing the work of switching is the first way mixhost wins customers.
- **cPanel instead of an in-house control panel.** Where [ConoHa WING](/en/articles/conoha-wing), dissected on this site, uses a control panel it developed itself, mixhost uses cPanel on every plan and adds WP Toolkit for managing WordPress. Premium and above can create a test site and push it to production, and use a "smart update" that tries updates on a test site while AI checks for problems. General cPanel guides and how-tos are easy to follow, though people renting a server for the first time may find the number of options daunting.
- **"Unlimited" comes with thresholds.** According to the fair use policy, 99% of customers use 5 GB of storage and 7 GB of data transfer on average, and usage far beyond that is almost always file storage or download sites. It then sets acceptable thresholds of 50 GB of storage for Light and 100 GB for Standard and above, and 50 GB to 800 GB of transfer a month, and asks that databases stay under 1 GB. The 50 GB figure does not match the 100 GB the price table gives for Light's disk, so anyone planning to store large files should check before signing up.
- **The cheap Light plan also trims protection.** Light has no backups, and mail sending is capped at 50 messages an hour and 100 a day. The April 2025 announcement says existing Standard-or-higher servers cannot be downgraded to Light; Light requires a new contract. Lower entry prices mean knowing what was cut before choosing.
- **Refunds start only when you ask.** According to the refund guarantee help page, shared, adult and overseas hosting can be refunded within 30 days of signing up, but only if the customer chooses "cancel immediately" and then contacts support; refunds are not automatic. Domains and dedicated cloud hosting are excluded, and refunds to customers who paid by bank transfer carry a 2,200 yen fee.

## Tech stack

::techstack

:::fact
The pricing and feature comparison table (checked 2026-10-07) lists, as specifications common to every plan, LiteSpeed Web Server, HTTP/3, CloudLinux, cPanel, MariaDB, PHP 5.6 to 8.5, SSH and Git access, free SSL certificates, DDoS protection, AI-powered security, and malware scanning and removal. Only the Business plan is placed on a "super-fast server with twice the resources." The shared hosting page explains that while typical hosts use physical servers, mixhost uses cloud servers made redundant across multiple machines, so if one fails, sites switch to another automatically. NVMe SSD storage is replicated in real time to multiple storage servers, and backups are kept on storage servers in a separate data center with eleven nines (99.999999999%) of durability. According to the SLA help page, if monthly uptime falls below 99.99%, mixhost refunds 10% of the monthly fee, and 30% below 99.50%, as a deposit or points applied to the next renewal.
:::

:::fact
According to official news posts, mixhost began rolling out PHP 8.5 on January 26, 2026, and on May 25 started offering free perks of Automattic's Jetpack plugin (1 GB of backups, Akismet up to 500 calls a month and Jetpack Protect) and reselling its paid options. The same announcement says, however, that under the provider's terms, sites with adult content cannot use the Jetpack perks. On September 7 it added the Imunify360 security tool to the Light plan as well, with a new item in cPanel. The fair use policy says MailChannels may apply its own sending limits on top of mixhost's caps. This site's own observation (2026-10-07) found that mixhost.jp and the operating company's site return LiteSpeed cache headers and a WordPress REST API link from behind Cloudflare, so both appear to run on WordPress. The customer portal returned a cookie whose name contains WHMCS.
:::

:::guess
The combination of cPanel, LiteSpeed, CloudLinux, Imunify360 and WHMCS appears to be a stack of off-the-shelf components widely used by hosting companies overseas. Assembling the control panel and billing from licensed products rather than building them lets a small company offer a range of features close to that of large rivals. The trade-off is that license fees grow with the customer base, so price increases for those components presumably weigh on margins. The company profile's main business partners include Sakura Internet, GMO Internet and Akamai Technologies, which run data centers, clouds and CDNs, but which partner handles what is not disclosed.
:::

## The April 2025 price cut

:::fact
According to an announcement on April 1, 2025, mixhost lowered renewal prices for existing customers from April 22. It attributed the change to optimizing procurement and operating costs. On 36-month contracts, the monthly price (tax included) fell from 2,178 yen to 1,298 yen for Standard, from 3,278 yen to 1,518 yen for Premium, and from 5,478 yen to 2,178 yen for Business. Business on a 12-month contract fell from 5,478 yen to 2,618 yen, and even on a 3-month contract to 3,168 yen. The new prices applied to invoices issued from April 8. An announcement on April 22 introduced the Light plan from 495 yen a month (tax included), cut both new and renewal prices, added 6-month and 24-month contract lengths, raised recommended monthly page views from 25,000 to 200,000 for Standard, from 100,000 to 300,000 for Premium and from 400,000 to 600,000 for Business, and raised Standard's inode limit from 50,000 to 200,000. It also listed a free WordPress migration once a year, the return of the free subdomain (mixh.jp) and wider eligibility for a free one-year pCloud coupon.
:::

| Renewal price, 36-month contract (tax included, monthly equivalent) | Before | From April 22, 2025 | Cut |
| --- | --- | --- | --- |
| Standard | 2,178 yen | 1,298 yen | about 40% |
| Premium | 3,278 yen | 1,518 yen | about 54% |
| Business | 5,478 yen | 2,178 yen | about 60% |

:::guess
Japanese hosting price tables tend to be compared on first-term discount rates and cashback. That mixhost cut renewal prices sharply, rather than first-term prices, appears aimed at customers who stay beyond the first term, and at affiliate writers who recommend mixhost by telling readers it will not get expensive on renewal. That the cuts were deepest on the higher plans also suggests that customers who had moved up as their traffic grew were the ones most likely to leave for rivals. Because first-term discounts continue alongside, the two-tier price table remains as hard to read as before.
:::

## Business model

The business centers on hosting fees paid up front for the full contract length, topped by services such as WordPress migration and speed-up work and by resold products such as Jetpack's paid options. Winning customers is left to affiliates and friend invitations.

:::fact
According to the affiliate page (checked 2026-10-07), mixhost distributes its ads through two affiliate service providers (ASPs), A8.net and afb; to become an affiliate, one registers with either network, searches for mixhost and applies. According to the refer-a-friend page, when a customer shares a dedicated invitation link and coupon code and a friend signs up with it, the friend gets a 1,000 yen discount, and once 30 days of use are confirmed, the referrer receives 1,000 yen in credit, with no limit on the number of invitations. The comparison table adds WordPress consultations over Zoom (up to twice a month), setup assistance and priority support to Premium and above. The company's products include the MillenVPN VPN besides hosting, and customers on paid pCloud plans are also eligible for the pCloud coupon.
:::

:::guess
That a company with 2 million yen in capital can compete in the same market as rivals belonging to large groups appears to come from leaning on affiliates, which are paid only when a sale happens, rather than paying for advertising up front. For the writers who recommend it, credibility depends not only on the payout per sale but on readers not being disappointed at renewal. The renewal price cut and the free migration service can be read as investments in keeping that referral flow strong. Allowing adult sites presumably differentiates mixhost by picking up demand that large hosts are reluctant to serve, though the same policy collides with the terms of partners such as Jetpack.
:::

Born in Osaka in 2016, mixhost has sold world-standard components such as LiteSpeed and cPanel, placed on a cloud and wrapped in migration help and Japanese-language support. In 2025 it stepped back from the race of first-term discounts and lowered the renewal fee, the price from year two onward. For a small company that wins customers through referrals rather than advertising, the bet is that being used for a long time is the best customer acquisition of all.
