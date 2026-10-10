---
service: "ColorfulBox"
title: "A Web Host With 3 Million Yen in Capital That Keeps Your Backups in Another Region — Dissecting ColorfulBox, Which Runs LiteSpeed and cPanel in East and West Japan, Puts Adult Sites on Separate Servers, and Added a Business Tier in Its Eighth Year"
description: "ColorfulBox is a Japanese shared hosting service launched in July 2018 by ColorfulLab, Inc., a company founded in Osaka in January of that year. It uses LiteSpeed as its web server, cPanel as its control panel, CloudLinux as its operating system and Imunify360 for security, lets customers choose whether their server sits in East or West Japan, and stores 14 days of automatic backups in the other region. Eight plans, BOX1 to BOX8, start at 528 yen a month (tax included) with a 30-day free trial, and adult sites are served from separate servers with separate IP addresses. As of September 2026 it had more than 24,000 cumulative users, and on October 1 of that year it launched \"Colorful Business,\" a business tier with a 99.99% uptime SLA and dedicated IP addresses. Referrals are left to an A8.net affiliate program whose rewards the official page publishes. Using the pricing, features, specifications, feature list, CDN, free tada server, company profile, news, Specified Commercial Transactions Act notice and this site's own observations, the article dissects the two-tier pricing of first-term half-price discounts and renewal fees, a stack of off-the-shelf parts built around cPanel and LiteSpeed, a backup design that splits by region, and the ladder from free to business."
lead: "ColorfulBox's features page shows two maps, East Japan and West Japan. Choose the region your server lives in when you sign up, and 14 days of automatic backups are stored in the other one. A company in Osaka with 3 million yen in capital and eight years of history made \"prepared for disaster\" a standard feature of shared hosting, at no extra charge. It uses the same LiteSpeed and cPanel as mixhost, dissected on this site, likewise accepts adult sites, and likewise collects referrals through A8.net. This article dissects, from public information alone, what this company does differently and where it earns."
category: dev-tool
tags: [hosting, wordpress, small-business, php, litespeed, cpanel, backup]
publishedAt: "2026-10-10"
updatedAt: "2026-10-10"
lastVerified: "2026-10-10"
serviceUrl: "https://www.colorfulbox.jp/"
# Affiliate link placeholder: ColorfulBox runs its affiliate program through A8.net
# (https://www.colorfulbox.jp/partner/affiliate/, checked 2026-10-10; the page lists the rewards per plan
# and contract length, e.g. BOX2 on a 36-month contract pays 8,000 yen before tax, and 1 yen for a 30-day
# trial sign-up). A8.net is an ASP whose ad code must be used as provided: copy the link to affiliate.url,
# the 1x1 impression image to affiliate.impressionUrl, and the text ad verbatim to affiliate.label. Never
# invent the label — ask the owner for the material's exact text. Keep every field identical in ja.md and
# en.md (parity.ts checks it).
# affiliate:
#   url: "https://px.a8.net/svt/ejp?a8mat=<colorfulbox-material>"
#   program: "ColorfulBox Affiliate Program (A8.net)"
#   impressionUrl: "https://www18.a8.net/0.gif?a8mat=<colorfulbox-material>"
#   label: "<verbatim text of the ad material>"
vendor: "ColorfulLab, Inc."
origin: "JP"
heroTheme: "colorfulbox"
scores: { product: 3.5, ux: 3.5, tech: 3.5, business: 3.0 }
techStack:
  - layer: "Web server"
    name: "LiteSpeed Web Server (6.x, HTTP/3, QUIC)"
    confidence: confirmed
    evidence: "The official specifications page (checked 2026-10-10) names the web server software as \"LiteSpeed 6.x.x\" and lists QUIC support under SSH. The features page says HTTP/3 and LiteSpeed's own \"LiteSpeed Cache\" are standard on every plan"
    evidenceUrl: "https://www.colorfulbox.jp/spec/"
  - layer: "Operating system"
    name: "CloudLinux"
    confidence: confirmed
    evidence: "The system configuration section of the specifications page states that the OS is Linux (CloudLinux), the server type is shared, the CPUs are Intel Xeon / AMD EPYC with up to 64 cores, memory is up to 512 GB, and storage is a RAID array of pure SSDs"
    evidenceUrl: "https://www.colorfulbox.jp/spec/"
  - layer: "Control panel"
    name: "cPanel"
    confidence: confirmed
    evidence: "The official \"About cPanel\" page (checked 2026-10-10) states that ColorfulBox adopted cPanel, the world's most widely used control panel, covering backup and restore, mailing lists, FTP accounts, subdomains, SSH access and cron jobs. The feature list names cPanel as the control panel on every plan"
    evidenceUrl: "https://www.colorfulbox.jp/feature/cpanel/"
  - layer: "Security"
    name: "Imunify360"
    confidence: confirmed
    evidence: "The features page (checked 2026-10-10) states that the next-generation security product \"Imunify360\" provides WAF / IPS / IDS, a firewall, malware and tampering detection, and tampering prevention as standard"
    evidenceUrl: "https://www.colorfulbox.jp/feature/"
  - layer: "Database and languages"
    name: "MariaDB (10.6) / PHP (5.3–8.3, LSAPI) / Perl / Ruby / Python"
    confidence: confirmed
    evidence: "The specifications page lists MariaDB 10.6.x (InnoDB / MyISAM) as the database, PHP 5.3 through 8.3 running in LSAPI mode, Perl 5.16 and 5.26, Ruby 1.8 to 3.1, and Python 2.7 and 3.3 to 3.11"
    evidenceUrl: "https://www.colorfulbox.jp/spec/"
  - layer: "Mail and FTP"
    name: "Exim / Dovecot / Pure-FTPd / Roundcube"
    confidence: confirmed
    evidence: "The specifications page names exim4 for outbound mail, Dovecot for inbound mail, Pure-FTPd for FTP and Roundcube for webmail. Submission ports are 587 and 465; POP3 uses 110/995 and IMAP4 143/993"
    evidenceUrl: "https://www.colorfulbox.jp/spec/"
  - layer: "SSL"
    name: "Let's Encrypt"
    confidence: confirmed
    evidence: "The specifications page names Let's Encrypt as the certificate authority for free SSL and lists TLS 1.3 and 1.2. The features page says free SSL certificates (Let's Encrypt / COMODO) come as standard"
    evidenceUrl: "https://www.colorfulbox.jp/spec/"
  - layer: "CDN"
    name: "ColorfulBox CDN"
    confidence: confirmed
    evidence: "The official CDN page (checked 2026-10-10) describes a CDN with a backbone spanning more than 100 countries and over 285 cities, with WAF, DDoS protection, image optimization and rate limiting, available separately from hosting from 440 yen a month. The company history says \"ColorfulBox CDN\" launched in May 2023"
    evidenceUrl: "https://www.colorfulbox.jp/cdn/"
  - layer: "Site builder"
    name: "Sitejet Builder"
    confidence: confirmed
    evidence: "The official Sitejet page (checked 2026-10-10) states that a no-code builder in which AI produces the design, copy and structure from a few questions is available to subscribers at no extra cost. The company history says \"Sitejet Builder\" launched in June 2025"
    evidenceUrl: "https://www.colorfulbox.jp/feature/sitejet/"
  - layer: "Own website and customer portal"
    name: "Cloudflare / WHMCS (secure.colorfulbox.jp)"
    confidence: likely
    evidence: "This site's own observation (2026-10-10) found www.colorfulbox.jp and the operating company's site returning server: cloudflare. The sign-up and login entry point secure.colorfulbox.jp uses the paths clientarea.php and cart.php and returned a cookie whose name starts with WHMCS, suggesting WHMCS handles customer management and billing"
sources:
  - label: "ColorfulBox official: Home page"
    url: "https://www.colorfulbox.jp/"
    accessedAt: "2026-10-10"
  - label: "ColorfulBox official: Pricing (BOX1 to BOX8, prices by contract length, adult servers)"
    url: "https://www.colorfulbox.jp/price/"
    accessedAt: "2026-10-10"
  - label: "ColorfulBox official: Features (region-separated backups, LiteSpeed, Imunify360)"
    url: "https://www.colorfulbox.jp/feature/"
    accessedAt: "2026-10-10"
  - label: "ColorfulBox official: Specifications"
    url: "https://www.colorfulbox.jp/spec/"
    accessedAt: "2026-10-10"
  - label: "ColorfulBox official: Feature list"
    url: "https://www.colorfulbox.jp/function/"
    accessedAt: "2026-10-10"
  - label: "ColorfulBox official: About cPanel"
    url: "https://www.colorfulbox.jp/feature/cpanel/"
    accessedAt: "2026-10-10"
  - label: "ColorfulBox official: Sitejet (AI website builder)"
    url: "https://www.colorfulbox.jp/feature/sitejet/"
    accessedAt: "2026-10-10"
  - label: "ColorfulBox official: ColorfulBox CDN"
    url: "https://www.colorfulbox.jp/cdn/"
    accessedAt: "2026-10-10"
  - label: "ColorfulBox official: Adult hosting"
    url: "https://www.colorfulbox.jp/adult/"
    accessedAt: "2026-10-10"
  - label: "ColorfulBox official: tada server (free hosting)"
    url: "https://www.colorfulbox.jp/tadaserver/"
    accessedAt: "2026-10-10"
  - label: "ColorfulBox official: Colorful Business (hosting for companies)"
    url: "https://www.colorfulbox.jp/business/"
    accessedAt: "2026-10-10"
  - label: "ColorfulBox official: Affiliate program (A8.net, reward table)"
    url: "https://www.colorfulbox.jp/partner/affiliate/"
    accessedAt: "2026-10-10"
  - label: "ColorfulBox official: Company information (ColorfulLab, Inc. profile and history)"
    url: "https://www.colorfulbox.jp/company/"
    accessedAt: "2026-10-10"
  - label: "ColorfulBox official: Notice under the Specified Commercial Transactions Act"
    url: "https://www.colorfulbox.jp/commercial/"
    accessedAt: "2026-10-10"
  - label: "ColorfulBox News: Launch of \"Colorful Business\" hosting for companies (2026-10-01)"
    url: "https://www.colorfulbox.jp/info/detail/?id=229"
    accessedAt: "2026-10-10"
  - label: "ColorfulBox News: 8th anniversary campaign, 88 extra days and 55% off the first term (2026-08-24)"
    url: "https://www.colorfulbox.jp/info/detail/?id=227"
    accessedAt: "2026-10-10"
  - label: "ColorfulBox News: .co.jp domains at 2,000 yen, 50% off Japan's corporate-only domain (2026-09-01)"
    url: "https://www.colorfulbox.jp/info/detail/?id=228"
    accessedAt: "2026-10-10"
  - label: "ColorfulBox News: Index (2026)"
    url: "https://www.colorfulbox.jp/info/"
    accessedAt: "2026-10-10"
  - label: "A8.net (operated by Fan Communications, Inc.)"
    url: "https://www.a8.net/"
    accessedAt: "2026-10-10"
---

ColorfulBox is a Japanese shared hosting service for WordPress blogs and small business websites. Like [mixhost](/en/articles/mixhost), dissected on this site, it uses LiteSpeed as its web server and cPanel as its control panel, allows adult sites, and leaves referrals to an A8.net affiliate program. Where [Xserver](/en/articles/xserver), [Lolipop!](/en/articles/lolipop) and [Sakura Rental Server](/en/articles/sakura-rental-server) carry large groups or long histories behind them, ColorfulBox is run by an Osaka company born in 2018 with 3 million yen in capital, and its banner is narrowed to one point rarely seen in shared hosting: automatic backups kept in a different region.

## Service overview

ColorfulBox centers on shared hosting plans BOX1 to BOX8, alongside separate servers for adult sites, the free tada server, the Colorful Business tier launched in October 2026, a CDN that can be bought without hosting, domains, SSL certificates, and SiteLock, which detects tampering with a site.

:::fact
According to the company information page (as of 2026-10-10), ColorfulLab, Inc., which runs the service, was founded on January 23, 2018, is headquartered in Awaza, Nishi Ward, Osaka, has capital of 3 million yen, is led by President Emiko Sugihara, develops internet services and apps, and is registered as a notified telecommunications carrier (E-30-04229). Its history lists the launch of the "ColorfulBox" hosting service in July 2018, "ColorfulBox CDN" in May 2023, and the free "tada server" and the no-code "Sitejet Builder" in June 2025, and the same page puts cumulative users at more than 24,000 (as of September 2026). The home page says "24,000 users and counting." According to the news index, the company announced an 8th anniversary campaign on August 24, 2026, a .co.jp domain discount on September 1, and the launch of the business tier "Colorful Business" on October 1; it also announced the availability of WordPress 7.0 on May 29 and a warning about WordPress vulnerabilities on July 22.
:::

:::fact
According to the pricing page (checked 2026-10-10, tax included), shared hosting comes in eight plans, BOX1 to BOX8, with contract lengths of 1, 3, 6, 12, 24 or 36 months; there is no setup fee on contracts of three months or longer, and 2,200 yen on one-month contracts only. On a 36-month contract the monthly equivalent is 528 yen for BOX1 (also 528 yen on renewal), 484 yen for the first term and 968 yen on renewal for BOX2, 814 and 1,628 yen for BOX3, 1,089 and 2,178 yen for BOX4, 1,639 and 3,278 yen for BOX5, 2,739 and 5,478 yen for BOX6, 3,839 and 7,678 yen for BOX7, and 7,689 and 15,378 yen for BOX8, so BOX2 and above have two tiers: a first-term-only 50% discount and the renewal price. BOX2 on a 12-month contract costs 583 yen for the first term and 1,166 yen on renewal. BOX2, labeled "most popular," has 700 GB of SSD, 6 vCPUs, 8 GB of memory, unlimited transfer as a guideline and a guideline of 60,000 monthly page views; BOX1 has 200 GB, 1 vCPU, 2 GB and a transfer guideline of 6 TB a month. BOX8 goes up to 1,600 GB, 18 vCPUs and 40 GB, and BOX7 and above include phone support. One domain from six types is free for life on BOX2 and above with a contract of 12 months or longer. Every plan comes with a 30-day free trial that needs no credit card. Plans can be changed at any time, and the server region can be chosen between East and West Japan (East is the default). Adult sites must be ordered from a separate set of servers, BOX2 to BOX8, where a 36-month BOX2 costs 528 yen for the first term and 1,320 yen on renewal, and plans cannot be moved between the adult and regular servers.
:::

:::pull
Shared hosting sales pitches tend to gather around speed and price. ColorfulBox made "when it breaks, there is a copy in another region" its banner, at no extra charge.
:::

::scorecard

## UX analysis

ColorfulBox's experience wraps the standard parts of overseas shared hosting in Japanese-language support and the reassurance of backups kept in a separate region. How far "shared" goes, and what costs extra, cannot be read from the first line of the price table.

- **Backups live in the other region.** According to the features page, 14 days of automatic backups are stored in whichever of East or West Japan the customer did not choose at sign-up, giving disaster-conscious distribution without the customer thinking about it. It is standard and free on every plan. Where [mixhost](/en/articles/mixhost) attaches backups in a separate data center to Standard and above but not to its Light plan, the cheapest BOX1 here gets the same protection.
- **A 30-day trial with no card.** According to the pricing page, signing a contract during the trial does not shorten it: the paid term starts after the 30 days end, and no free days are lost. It lowers the psychological barrier at the door, and in the affiliate reward table even a free-trial sign-up earns 1 yen.
- **cPanel to manage, AI to build.** The cPanel page sells the panel as the world's most used, with backup restore, cron and SSH all in one place. Since June 2025, Sitejet, in which AI writes the design and copy from a few questions, is included at no extra cost, and ordering a server and domain together produces an SSL-enabled WordPress site right away. The sheer number of cPanel options can still feel heavy to a first-time user.
- **"Unlimited" sits next to "guideline."** According to the feature list, add-on domains, subdomains, databases, mail addresses and FTP accounts are unlimited; transfer is "unlimited" on BOX2 and above and a "guideline" of 6 TB a month on BOX1. The specifications page says directories holding more than a million files fall outside the operation and backup guarantees, and the company may ask for unneeded files to be deleted.
- **What the cheap end cuts is visible.** The free tada server requires the customer to bring their own domain; it shows no ads, but has no support and no backups, 5 GB of SSD, 1 GB of memory, a mail limit of 10 messages an hour, and neither HTTP/3 nor LiteSpeed caching. BOX1 has HTTP/3 and caching but is excluded from the free domain perk, and phone support starts at BOX7.
- **Refunds have an eight-day window.** According to the Specified Commercial Transactions Act notice, cancellation of an order is accepted only within eight days of ordering, whether paid by card or bank transfer; fees for domains already registered cannot be refunded, and whether to refund is decided at the company's discretion. The 30-day trial leaves plenty of room to check before paying, but the way out after paying is short.

## Tech stack

::techstack

:::fact
According to the specifications page (checked 2026-10-10), the servers use Intel Xeon / AMD EPYC CPUs with up to 64 cores and up to 512 GB of memory, run CloudLinux, store data on a RAID array of pure SSDs, and both the East and West Japan data centers connect to the backbone at 10 Gbps. The web server software is "LiteSpeed 6.x.x" with .htaccess and mod_rewrite, and SSH uses public-key authentication with sftp and QUIC. PHP 5.3 through 8.3 runs in LSAPI mode with editable php.ini and selectable extensions. The database is MariaDB 10.6.x, mail runs on exim4 and Dovecot, FTP on Pure-FTPd, webmail on Roundcube, and the certificate authority for free SSL is Let's Encrypt with TLS 1.3 and 1.2. The features page makes Imunify360's WAF / IPS / IDS and LiteSpeed's own cache standard on every plan, and says LiteSpeed benchmarks about three times faster than Apache and more than five times faster than Nginx on WordPress.
:::

:::fact
According to the CDN page (checked 2026-10-10), ColorfulBox CDN has a backbone spanning more than 100 countries and over 285 cities, with WAF, DDoS protection, image optimization and rate limiting, in three plans that can be bought without hosting: Light (one domain, from 440 yen a month), Standard (two domains, from 880 yen) and Premium (five domains, from 2,200 yen). The adult hosting page says BOX2 and above on the adult servers include the Premium CDN. This site's own observation (2026-10-10) found www.colorfulbox.jp and the operating company's site returning server: cloudflare, and the sign-up and login entry point secure.colorfulbox.jp redirecting to clientarea.php and returning a cookie whose name starts with WHMCS.
:::

:::guess
The combination of LiteSpeed, cPanel, CloudLinux, Imunify360 and WHMCS appears to be the same stack of off-the-shelf components widely used by hosting companies overseas that the [mixhost](/en/articles/mixhost) dissection found. A small company can offer a range of features close to large rivals without building its own control panel or billing, and presumably carries the same structure of license fees that grow with the customer base. The figures in the CDN description, "more than 285 cities" and "the collective intelligence of six million websites," overlap with numbers that large CDN operators have published about their own networks, so the CDN is most likely a resale of another company's network rather than ColorfulBox's own, though the operator is not disclosed. Splitting backups between two regions means keeping physical servers in both, a fixed cost for a small company, but it reads as a cheap way to build a differentiator that can be put on the banner.
:::

## Two-tier pricing and a business tier in year eight

:::fact
According to the pricing page (checked 2026-10-10), the discount on BOX2 and above is a "first-term-only discount" and the regular price returns at renewal: on a 36-month contract BOX2 costs 484 yen for the first term and 968 yen on renewal, BOX3 814 and 1,628 yen, and BOX4 1,089 and 2,178 yen. According to the 8th anniversary announcement (2026-08-24), from August 24 to September 24 new contracts of 12 months or longer got 55% off the first term (from 436 yen a month), 88 days added to the server contract free, a domain free for life and no setup fee, with a note that the first-term discount applies to the first contract only and regular prices apply from renewal. According to the October 1 announcement, "Colorful Business" is ordered as a new contract separate from an existing ColorfulBox account and offers a 99.99% uptime SLA (months below the threshold automatically earn account credit), a dedicated IP address for outbound mail per contract, one domain from ten types including .co.jp free for the life of the contract, and management by several people. According to the business page, the monthly price on a 36-month contract is 2,280 yen for Starter (700 GB SSD, 7 vCPUs, 10 GB), 4,950 yen for Basic (1,300 GB, 13 vCPUs, 22 GB) and 9,510 yen for Advance (1,500 GB, 17 vCPUs, 34 GB), and every plan includes SPF, DKIM and DMARC sender authentication, team accounts that assign sub-users permissions by function (mail, site, database), and quotes issued before ordering.
:::

| Monthly price, 36-month contract (tax included) | First term | Renewal | Increase at renewal |
| --- | --- | --- | --- |
| BOX1 | 528 yen | 528 yen | none |
| BOX2 | 484 yen | 968 yen | 2x |
| BOX3 | 814 yen | 1,628 yen | 2x |
| BOX4 | 1,089 yen | 2,178 yen | 2x |
| Adult BOX2 | 528 yen | 1,320 yen | 2.5x |
| Colorful Business Starter | 2,280 yen | — | no discount shown for the business tier |

:::guess
ColorfulBox follows the common pattern of Japanese shared hosts competing on first-term discount rates, but rounding the discount to an easily grasped "50%" or "55%" and pricing BOX1 at its renewal price from the start appears intended to avoid buying distrust about "year two gets expensive" at the cheapest entry point. The higher renewal price on the adult servers presumably carries the cost of separate servers, separate IP addresses and the Premium CDN. Adding a business tier in year eight reads as a response to the fact that the individual bloggers and affiliate sites gathered at the entry level tend to leave for cheaper rivals at each renewal, while companies that have entrusted a .co.jp domain and their mail move less and pay more per month. Making dedicated IP addresses and SPF, DKIM and DMARC the business banner appears to turn the trend of large mail providers demanding strict sender authentication, which makes mail from shared servers easier to reject as spam, into a sales argument.
:::

## Business model

The business centers on hosting fees paid up front for the full contract length, topped by domain registration, paid SSL certificates, SiteLock, the "Anshin Start" setup service, WordPress migration and the CDN. Winning customers is left to the A8.net affiliate program and the free trial.

:::fact
According to the affiliate page (checked 2026-10-10), ColorfulBox's affiliate program is offered through A8.net, participation is free with no quota, logos and screenshots may be used freely, and the reward table is public. Rewards for hosting sign-ups (before tax) are 1 yen for the 30-day free trial, 1,500 yen (1, 3 or 6 months) to 7,000 yen (36 months) for BOX1 depending on contract length, 2,500 to 8,000 yen for BOX2, 3,000 to 8,500 yen for BOX3, 3,500 to 9,500 yen for BOX4 and 4,000 to 11,500 yen for BOX5, and the table also has sections for domains, the CDN, options, SSL and SiteLock. The home page presents BOX2 as "ideal for affiliate and small sites," and sells a WordPress site built in five minutes and a domain free for life. The business page says the five strengths of Colorful Business were born from the voices of 24,000 cumulative contracts.
:::

:::guess
The 8,000 yen reward for a 36-month BOX2 contract is close to half of the first payment on that contract (484 yen times 36 months, about 17,400 yen), a design that appears to hand much of the first term's revenue to the referring writer and recover it on renewal. Paying 1 yen for a free trial and giving the tada server away look like ways to use A8.net's performance-based rewards in place of advertising and to keep several doors open for getting the name known. That a company with 3 million yen in capital gathered 24,000 contracts in eight years appears to come from this structure, which requires no advertising paid up front, combined with assembling features from off-the-shelf parts. On the other hand, a structure in which referrers are inclined to stress the first-term price makes dissatisfaction at a doubled renewal rebound onto the referrers' credibility; keeping BOX1's renewal price flat and not leading with discounts on the business tier read as decisions to soften that rebound.
:::

Born in Osaka in 2018, ColorfulBox added one point of reassurance, backups split between East and West Japan, to the world-standard parts LiteSpeed and cPanel, and gathered customers from personal blogs upward. In its eighth year, facing a structure in which customers who enter on a first-term discount tend to leave at renewal, it added a business tier bundling an SLA, dedicated IP addresses and domains. For a small company to keep being chosen in shared hosting, the question beyond speed and price is whether it can say, in words, what it is keeping safe.
