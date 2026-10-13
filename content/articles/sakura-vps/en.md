---
service: "Sakura VPS"
title: "A Flat-Rate VPS From ¥643 a Month With Different Price Tags in Ishikari, Osaka and Tokyo — Dissecting Sakura VPS, Which Added an SLA in 2026 and Saw Inventory of Its 32 GB Plan Run Tight in Ishikari, Its Cheapest Region"
description: "Sakura VPS is a virtual private server (VPS) service that SAKURA internet launched in September 2010. It uses KVM for virtualization and rents out seven Linux plans from 512 MB to 32 GB of memory with root access. Servers are placed in one of three regions the company runs itself, Ishikari, Osaka and Tokyo, and prices differ by region: monthly billing starts at ¥643 for 512 MB in Ishikari, and the same plan costs 8.6% to 16.7% more in Tokyo than in Ishikari (this site's calculation). Pricing is flat, with no cap on data transfer, and paying 12 months upfront costs roughly 11 months' fees. In 2026, it introduced an SLA guaranteeing 99.95% monthly uptime for Linux plans with 4 GB or more on August 1; on August 26, in connection with unauthorized access to its sales management system, it asked users still using the initial administrator password issued at signup to change it; and on October 2 it announced that inventory of the 32 GB plan in the Ishikari region was tight. Using the pricing and specifications, FAQ, SLA, terms of service, manuals, API documentation, VPS news and columns, earnings materials and securities report, the affiliate page and this site's own observations, the article dissects how a flat-rate VPS that has run for more than 15 years is trying to serve both as a home for AI tools and as an entry point to the cloud."
lead: "\"We are in a situation where inventory of the 'Ishikari region 32GB Linux plan' is tight\" — on October 2, 2026, Sakura VPS made this announcement, said that because of equipment procurement and other factors it could take two weeks to a month for the situation to improve, and asked customers to consider the Tokyo and Osaka regions as well. Ishikari is the cheapest of the three regions for the Linux plans. This summer, the flat-rate VPS, whose cumulative usage has passed 530,000, added an SLA to plans with 4 GB or more and, after unauthorized access to its sales management system, called on users of older contracts to change their administrator passwords. This article dissects, from public information alone, how a VPS that has run for more than 15 years is built and sold at a company where GPUs for generative AI now make up 40% of sales."
category: dev-tool
tags: [hosting, vps, small-business, api, security, data-center, ai]
publishedAt: "2026-10-13"
updatedAt: "2026-10-13"
lastVerified: "2026-10-13"
serviceUrl: "https://vps.sakura.ad.jp/"
# Affiliate link placeholder: SAKURA internet runs its affiliate program through A8.net (https://www.sakura.ad.jp/function/affiliate/,
# checked 2026-10-13). Flat rewards per Sakura VPS contract: 585 yen (512 plan), 800 (1G), 1,580 (2G), 3,200 (4G), 6,400 (8G),
# 12,000 (16G), 24,000 yen (32G), i.e. the Ishikari monthly price before tax. Approved once a month; orders canceled during the
# free trial do not count; bidding on the company or service names in search ads is forbidden; self-back is allowed. To join,
# register with A8.net and apply to the SAKURA internet program from the A8 dashboard (SAKURA internet reviews the site). The
# official page shows only a sample text ad: use A8.net's ad code as provided (link to affiliate.url, 1x1 impression image to
# affiliate.impressionUrl, the material's text verbatim to affiliate.label). Never invent the label — ask the owner.
# Keep every field identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://px.a8.net/svt/ejp?a8mat=<sakura-vps-material>"
#   program: "Sakura Internet Affiliate Program (A8.net)"
#   impressionUrl: "https://www<NN>.a8.net/0.gif?a8mat=<sakura-vps-material>"
#   label: "<verbatim text of the ad material>"
vendor: "SAKURA internet Inc."
origin: "JP"
heroTheme: "sakura-vps"
scores: { product: 3.5, ux: 3.5, tech: 3.5, business: 3.5 }
techStack:
  - layer: "Virtualization"
    name: "KVM"
    confidence: confirmed
    evidence: "The official FAQ (checked 2026-10-13) states that \"Sakura VPS uses KVM as its virtualization technology,\" and the Windows Server specifications page also gives the virtualization platform as \"Linux KVM.\" The service terms say the service provides, for the user's exclusive use, the function of one virtualized server set up on server equipment in the company's data centers, with equipment such as CPUs, network and storage shared by multiple users"
    evidenceUrl: "https://vps.sakura.ad.jp/faq/"
  - layer: "Data centers"
    name: "SAKURA internet data centers (Ishikari, Osaka, Tokyo)"
    confidence: confirmed
    evidence: "The official pricing and specifications page (checked 2026-10-13) states that servers can be placed in Tokyo, Osaka or Ishikari, that all three data centers are run by the company itself, and that server and network engineers stationed on site monitor them 24 hours a day, 365 days a year. Prices differ by region, and the Windows Server plans are offered only in Osaka and Ishikari"
    evidenceUrl: "https://vps.sakura.ad.jp/specification/"
  - layer: "Network"
    name: "100 Mbps shared internet / 1 Gbps shared local network (IPv4 + IPv6)"
    confidence: confirmed
    evidence: "The official pricing and specifications page (checked 2026-10-13) states a 100 Mbps shared line to the internet, a 1 Gbps shared local network, three NICs, one IPv4 and one IPv6 global address, unlimited data transfer and local network connections for any number of servers. The Windows Server specifications page notes that the physical servers connect to the backbone network at 10 Gbps"
    evidenceUrl: "https://vps.sakura.ad.jp/specification/"
  - layer: "Standard OS"
    name: "AlmaLinux / Rocky Linux / Ubuntu / Debian / CentOS Stream / KUSANAGI (14 standard OS images)"
    confidence: confirmed
    evidence: "The official OS lineup page (checked 2026-10-13) lists, as standard OS images that can be reinstalled with one click from the control panel, CentOS Stream 9, AlmaLinux 8, 9 and 10, Rocky Linux 8, 9 and 10, Ubuntu 22.04, 24.04 and 26.04, KUSANAGI 9 (on CentOS Stream 9 and on AlmaLinux 9), and Debian 11 and 12, and states that installation from official distribution ISO images or ISO images supplied by the user is also supported. The count of 14 is this site's own"
    evidenceUrl: "https://vps.sakura.ad.jp/functions/os/"
  - layer: "Startup scripts"
    name: "WordPress / Docker Compose / Dify / Open WebUI / n8n (22 official startup scripts)"
    confidence: confirmed
    evidence: "The startup script page of the official manual (checked 2026-10-13) describes a function that runs any script when a server is added or its OS is reinstalled, with a list of official SAKURA internet scripts (WordPress, DockerCompose, LAMP, Misskey, GROWI, Open WebUI + Sakura AI Engine, Dify + Sakura AI Engine, n8n and more) and \"My Scripts,\" up to 10 per user, which can also be shared. The count of 22 is this site's own"
    evidenceUrl: "https://manual.sakura.ad.jp/vps/startupscript/startupscript.html"
  - layer: "External API"
    name: "Sakura VPS API (v7, REST, HTTP Bearer, OpenAPI)"
    confidence: confirmed
    evidence: "The official API documentation (version 7.2.3, checked 2026-10-13) states that requests go to https://secure.sakura.ad.jp/vps/api/v7/ followed by the endpoint, with HTTP Bearer authentication using an API key issued in the control panel, JSON (UTF-8) responses and a limit of 100 requests a minute per account (429 when exceeded), and offers the OpenAPI specification for download. Permissions can be set through roles"
    evidenceUrl: "https://manual.sakura.ad.jp/vps/api/api-doc/index.html"
  - layer: "Windows"
    name: "Windows Server (2025 / 2022 Datacenter, SPLA)"
    confidence: confirmed
    evidence: "The official Windows Server pricing and specifications page (checked 2026-10-13) states that the OS can be Windows Server 2025 Datacenter Edition or Windows Server 2022 Datacenter Edition, that Microsoft product licenses are provided under the service provider license (SPLA), and that an RDS SAL is required for each person who connects by remote desktop for purposes other than server management"
    evidenceUrl: "https://vps.sakura.ad.jp/windows/specification/"
  - layer: "Control panel"
    name: "Vue.js (3.4) + vue-router + Pinia + vue-i18n + Sentry"
    confidence: likely
    evidence: "This site's own observation (2026-10-13) found that secure.sakura.ad.jp/vps/ returns HTML that loads module JavaScript into an empty div element (id=app), and the bundle served carried license notices for @vue/shared 3.4.33, vue-router 4.6.3, pinia 2.3.1, vue-i18n 9.14.5 and @sentry/vue, so it appears to be a Vue 3 single-page app that collects errors with Sentry"
  - layer: "API server"
    name: "Django REST framework"
    confidence: likely
    evidence: "This site's own observation (2026-10-13) found that an unauthenticated GET https://secure.sakura.ad.jp/vps/api/v7/servers returns 401 with WWW-Authenticate: Bearer and Allow: GET, HEAD, OPTIONS, and that the message in the body, \"認証情報が含まれていません。\", matches the translation that Django REST framework's Japanese translation file gives to its response for requests without credentials (\"Authentication credentials were not provided.\"), so the API appears to be built with Django REST framework"
    evidenceUrl: "https://raw.githubusercontent.com/encode/django-rest-framework/master/rest_framework/locale/ja/LC_MESSAGES/django.po"
  - layer: "Website, news and manual"
    name: "nginx / WordPress (VPS News) / Sphinx (manual)"
    confidence: likely
    evidence: "This site's own observation (2026-10-13) found vps.sakura.ad.jp returning server: nginx and HSTS (max-age=15768000) over HTTP/1.1, and VPS News (/contents/) naming WordPress 7.1.3 as the generator in its HTML and returning a Link header pointing to the WordPress REST API. manual.sakura.ad.jp returned server: nginx, x-amz-id-2, x-amz-request-id and via: 1.1 sac-elb over HTTP/2, and its HTML referred to a Sphinx theme (SphinxRtdTheme), so the manual appears to be generated with Sphinx and served from S3-compatible storage"
sources:
  - label: "Sakura VPS official: Home page"
    url: "https://vps.sakura.ad.jp/"
    accessedAt: "2026-10-13"
  - label: "Sakura VPS official: Pricing and specifications"
    url: "https://vps.sakura.ad.jp/specification/"
    accessedAt: "2026-10-13"
  - label: "Sakura VPS official: Features"
    url: "https://vps.sakura.ad.jp/feature/"
    accessedAt: "2026-10-13"
  - label: "Sakura VPS official: OS lineup"
    url: "https://vps.sakura.ad.jp/functions/os/"
    accessedAt: "2026-10-13"
  - label: "Sakura VPS official: Scale-up (conditions of use)"
    url: "https://vps.sakura.ad.jp/functions/scaleup/"
    accessedAt: "2026-10-13"
  - label: "Sakura VPS official: Sign-up flow (free trial and payment methods)"
    url: "https://vps.sakura.ad.jp/flow/"
    accessedAt: "2026-10-13"
  - label: "Sakura VPS official: FAQ"
    url: "https://vps.sakura.ad.jp/faq/"
    accessedAt: "2026-10-13"
  - label: "Sakura VPS official: Service level agreement (SLA)"
    url: "https://vps.sakura.ad.jp/sla/"
    accessedAt: "2026-10-13"
  - label: "Sakura VPS official: Pricing and specifications for Windows Server"
    url: "https://vps.sakura.ad.jp/windows/specification/"
    accessedAt: "2026-10-13"
  - label: "VPS News: Launch of the Sakura VPS SLA (service quality guarantee) (2026-08-04)"
    url: "https://vps.sakura.ad.jp/contents/info/vps-sla/"
    accessedAt: "2026-10-13"
  - label: "VPS News: Request to change Sakura VPS administrator passwords (2026-08-26)"
    url: "https://vps.sakura.ad.jp/contents/info/password-change-faq/"
    accessedAt: "2026-10-13"
  - label: "VPS News: Low inventory in the Sakura VPS Ishikari region (2026-10-02)"
    url: "https://vps.sakura.ad.jp/contents/info/ik01-stock-2026-1002/"
    accessedAt: "2026-10-13"
  - label: "VPS column: Troubled by foreign cloud bills? (2026-03-05)"
    url: "https://vps.sakura.ad.jp/contents/column/advantage-vps-costs/"
    accessedAt: "2026-10-13"
  - label: "VPS column: Sakura VPS is recommended for AI use too (2026-04-02)"
    url: "https://vps.sakura.ad.jp/contents/column/start-ai-with-vps/"
    accessedAt: "2026-10-13"
  - label: "VPS column: Starting disaster recovery with Sakura VPS (2026-08-07)"
    url: "https://vps.sakura.ad.jp/contents/column/dr-measures/"
    accessedAt: "2026-10-13"
  - label: "Sakura VPS manual: Checking the server version (launch dates of v1 to v5)"
    url: "https://manual.sakura.ad.jp/vps/controlpanel/server-version.html"
    accessedAt: "2026-10-13"
  - label: "Sakura VPS manual: Startup scripts (list of official scripts)"
    url: "https://manual.sakura.ad.jp/vps/startupscript/startupscript.html"
    accessedAt: "2026-10-13"
  - label: "Sakura VPS manual: API (API changelog)"
    url: "https://manual.sakura.ad.jp/vps/api/index.html"
    accessedAt: "2026-10-13"
  - label: "Sakura VPS API documentation (version 7.2.3)"
    url: "https://manual.sakura.ad.jp/vps/api/api-doc/index.html"
    accessedAt: "2026-10-13"
  - label: "Sakura VPS manual: Acronis Cyber Protect Cloud quick setup"
    url: "https://manual.sakura.ad.jp/vps/marketplace/acronis-setup.html"
    accessedAt: "2026-10-13"
  - label: "SAKURA internet: Sakura VPS service terms (PDF, effective August 1, 2026)"
    url: "https://www.sakura.ad.jp/agreement/%5Ba%5Dyakkan2_vps.pdf"
    accessedAt: "2026-10-13"
  - label: "SAKURA internet: Company profile"
    url: "https://www.sakura.ad.jp/corporate/corp/profile/"
    accessedAt: "2026-10-13"
  - label: "SAKURA internet: Affiliate program"
    url: "https://www.sakura.ad.jp/function/affiliate/"
    accessedAt: "2026-10-13"
  - label: "SAKURA internet: Q1 FY2027 (ending March 2027) earnings presentation (2026-07-28)"
    url: "https://www.sakura.ad.jp/corporate/wp-content/uploads/2026/07/260728-ir_2.pdf"
    accessedAt: "2026-10-13"
  - label: "SAKURA internet: Q1 FY2027 (ending March 2027) earnings summary (2026-07-28)"
    url: "https://www.sakura.ad.jp/corporate/wp-content/uploads/2026/07/260728-ir_1.pdf"
    accessedAt: "2026-10-13"
  - label: "SAKURA internet: FY2026 (ended March 2026) earnings presentation (2026-04-27, reclassification of service categories)"
    url: "https://www.sakura.ad.jp/corporate/wp-content/uploads/2026/04/260427-ir_2.pdf"
    accessedAt: "2026-10-13"
  - label: "SAKURA internet: FY2025 (ended March 2025) earnings presentation (2025-04-28, definitions of revenue categories)"
    url: "https://www.sakura.ad.jp/corporate/wp-content/uploads/2025/04/250428-ir_2.pdf"
    accessedAt: "2026-10-13"
  - label: "SAKURA internet: 27th annual securities report (submitted 2026-06-15)"
    url: "https://www.sakura.ad.jp/corporate/wp-content/uploads/2026/06/260615-ir_1.pdf"
    accessedAt: "2026-10-13"
  - label: "SAKURA internet: Timely disclosure on investigation results and prevention measures, including the third report (2026-09-10)"
    url: "https://www.sakura.ad.jp/corporate/wp-content/uploads/2026/09/260910-ir_1.pdf"
    accessedAt: "2026-10-13"
  - label: "Django REST framework (GitHub): Japanese translation file (locale/ja/LC_MESSAGES/django.po)"
    url: "https://raw.githubusercontent.com/encode/django-rest-framework/master/rest_framework/locale/ja/LC_MESSAGES/django.po"
    accessedAt: "2026-10-13"
---

Sakura VPS virtualizes a physical server so that several customers share it, and rents out one of those virtual servers with root access. Users take care of everything from configuring the OS to installing software and securing the server, and in exchange the price is flat, with no usage-based charges for traffic. It is run by SAKURA internet, the same company behind [Sakura Rental Server](/en/articles/sakura-rental-server), dissected on this site, and its FAQ places it as a service that offers more freedom than the shared rental server and, while less flexible than Sakura Cloud, can be scaled up at a relatively low price. This site has also dissected [XServer VPS](/en/articles/xserver-vps) in Japan, [DigitalOcean](/en/articles/digitalocean) overseas and the shared hosting service [ConoHa WING](/en/articles/conoha-wing), which can be read alongside this article when choosing where to host.

## Service overview

Sakura VPS consists of seven Linux plans from 512 MB to 32 GB of memory and six plans running Windows Server. The Linux plans can be placed in one of three regions, Ishikari, Osaka and Tokyo, and the Windows plans in Osaka or Ishikari. Ways to move to or connect with the same company's Sakura Cloud are listed among the related features too.

:::fact
According to the version table in the Sakura VPS manual (checked 2026-10-13), Sakura VPS started v1 on September 1, 2010, added IPv6 and local connections with v3 (March 29, 2012) and scale-up with v4 (November 27, 2014), and the current v5 started on November 7, 2019. The home page says cumulative usage has passed 530,000 and that the service has been used for more than 15 years (a note in the same section reads "as of December 2025, company research, cumulative number of VPS contracts"), and says the company runs its data centers in Tokyo, Osaka and Ishikari itself. According to its company profile (as of 2026-10-13), SAKURA internet was founded on December 23, 1996 and incorporated on August 17, 1999, is headquartered at Grand Green Osaka in Kita Ward, Osaka, and is listed on the Prime Market of the Tokyo Stock Exchange (code 3778). According to the earnings presentation for the first quarter of the fiscal year ending March 2027, it opened a large suburban data center in Ishikari, Hokkaido in November 2011, and in March 2026 "Sakura Cloud" was selected as the first Japanese-made government cloud service provider. The earnings summary describes its business as a single segment, the internet infrastructure business. The features page says a migration function moves a server with the same configuration as the VPS to the cloud side, and the pricing and specifications page lists among related services "Hybrid Connection," which links Sakura Cloud and the VPS over layer 2, and the CDN "Sakura Web Accelerator" (5 yen per GiB outbound), which requires creating a Sakura Cloud project.
:::

:::fact
According to the pricing and specifications page (checked 2026-10-13, tax included), the seven Linux plans are 512 MB (1 virtual core, 25 GB SSD), 1G (2 cores, 50 GB), 2G (3 cores, 100 GB), 4G (4 cores, 200 GB), 8G (6 cores, 400 GB), 16G (8 cores, 800 GB) and 32G (10 cores, 1,600 GB). Monthly billing costs 643, 880, 1,738, 3,520, 7,040, 13,200 and 26,400 yen in Ishikari and from 698 to 30,800 yen in Tokyo, and paying 12 months upfront starts at 7,078 yen for 512 MB in Ishikari (590 yen a month). The page says paying 12 months upfront saves "roughly one month's fee," and for 1G and above it comes to exactly 11 months of the monthly fee (this site's calculation). There is no setup fee, and the minimum term is three months. The common specifications are a 100 Mbps shared line to the internet, a 1 Gbps shared local network, three NICs, one IPv4 and one IPv6 address, unlimited data transfer and root access. According to the Windows Server pricing and specifications page, the six Windows Server plans run from W1G (2 cores, 1 GB, 50 GB) at 1,485 yen a month to W32G (10 cores, 32 GB, 1,600 GB) at 42,240 yen a month with no price difference between regions, and NFS, which several servers can use over the local network, runs from 880 yen a month for 100 GB of SSD to 26,400 yen for 3,200 GB. According to the sign-up flow page, there are four payment methods: credit card, bank transfer, invoice and automatic bank debit. The home page and the pricing and specifications page showed no campaign prices, and paying by credit card lets you try every plan free for two weeks (checked 2026-10-13).
:::

:::pull
A flat-rate VPS that has run for more than 15 years added an SLA in 2026, and inventory of its 32 GB plan ran tight in Ishikari, its cheapest region.
:::

::scorecard

## UX analysis

The Sakura VPS experience rests on two things: the price is fixed in advance, and what runs inside the server is up to the user. In 2026, choosing a region became a question not only of price but also of inventory.

- **Choosing a region also sets the price tag.** The pricing and specifications page (checked 2026-10-13) switches each plan's price between Ishikari, Osaka and Tokyo, and on monthly billing Tokyo costs 8.6% to 16.7% more than Ishikari (this site's calculation). According to the scale-up page, moving to a higher plan can be done from the control panel, but not to another region or zone, not to a plan with less disk space and not on the day of the order, and not when the target plan lacks inventory. Asked how the service differs from Sakura Cloud, the FAQ answer on the home page says it "cannot scale out," the one on the FAQ page says it "cannot scale down," and the features page recommends "flexible scale-out through local network connections."
- **The free trial is for credit card payment only, up to two servers.** According to the sign-up flow page, the two-week free trial is limited to orders that choose credit card payment, with up to two servers at a time. During the trial, outbound port 25 is closed (lifted about 72 hours after service starts), outgoing traffic from the server is limited to 10 Mbps, and the free name servers cannot be used. Unless the user cancels, the contract becomes a full registration automatically when the trial ends, and with other payment methods such as bank transfer, the server becomes available once payment is confirmed.
- **Even AI tools go in by script.** The list of official scripts in the Sakura VPS manual (checked 2026-10-13) has 22 entries, including WordPress, DockerCompose, LAMP, Misskey, Mastodon, GROWI and Minecraft (this site's count), and three of them, Open WebUI + Sakura AI Engine, Dify + Sakura AI Engine and n8n, are about AI. Users can save up to 10 scripts of their own as "My Scripts" and share them with other users, but the terms of service say the company gives no warranty for any script and accepts no liability for damage arising from scripts published by other users. In the list's Ubuntu 26.04 column, no official script is marked as supported yet (this site's count). An official column describes the VPS as "the place where AI agents and AI tools run" and Sakura AI Engine, which provides LLMs through an API, as the "brain," and says AI Engine does not send data outside Japan and does not use questions for training.
- **Backups have to live outside the VPS.** The FAQ answers, "No, Sakura VPS has no backup function, either standard or optional," and recommends syncing with another server in the same zone or saving data in a local environment. The options on offer are NFS, which several servers can use over the local network, and Acronis Cyber Protect Cloud, a backup service from Acronis introduced in the marketplace section of the manual, whose fees are billed per Sakura Cloud project. An official column of August 7 gives as an example a setup with the main server in Tokyo and backups in Osaka or Ishikari.
- **The SLA starts at Linux plans with 4 GB.** The SLA that began on August 1 guarantees 99.95% monthly uptime for Linux plans of v5 or later with at least 4 GB of memory, and for a month that falls short, deducts the fee from bills from the following month on, based on a claim filed by the 15th of the following month. Failures of individual virtual machines, announced or emergency maintenance, and failures whose duration the user cannot prove are excluded, and the Windows Server plans are not covered. The announcement explains the reason as "we have received many requests from customers for a guarantee of service quality," and an article on quality assurance was added to the terms of service.
- **Older contracts should check their administrator password.** An August 26 notice, in connection with unauthorized access to the sales management system, asked users of contracts whose initial administrator (root/Administrator) password, issued at signup, had been stored in the company's systems to change it if they were still using it. New contracts from September 1, 2022 use a method in which users set the password themselves, and the company does not store it (some of those contracts may still be affected, and their users have been contacted by email). According to the third report of September 10, the sales management system is separate from the environments that actually deliver each service, and some Sakura VPS initial administrator passwords were stored there unhashed. On the other hand, no signs of unauthorized access were found in the service environments other than Sakura Rental Server. The incident as a whole is covered in the article on [Sakura Rental Server](/en/articles/sakura-rental-server).

## Tech stack

::techstack

:::fact
According to the FAQ (checked 2026-10-13), Sakura VPS uses KVM for virtualization. The terms of service say the service provides, for the user's exclusive use, the function of one virtualized server set up on server equipment in the company's data centers; that equipment such as CPUs, network and storage is shared by multiple users; and that the quantity of allocated computing resources shows the maximum available and cannot be occupied constantly, listing crypto-asset mining among prohibited acts. The OS lineup page lists 14 standard OS images that can be reinstalled with one click from the control panel (this site's count): CentOS Stream 9, AlmaLinux 8, 9 and 10, Rocky Linux 8, 9 and 10, Ubuntu 22.04, 24.04 and 26.04, KUSANAGI 9 (on CentOS Stream 9 and on AlmaLinux 9), and Debian 11 and 12, and manual installation from official distribution ISO images or ISO images supplied by the user is also supported. According to the pricing and specifications page, the host-based WAF "SiteGuard Server Edition" is provided free in a special edition for the VPS, server monitoring that checks reachability is a free option, and any number of servers can be connected on the local network. The Windows Server specifications page notes that the physical servers connect to the backbone network at 10 Gbps and that each member ID can have up to 20 switches for local connections, and says Microsoft product licenses are provided under SPLA, Microsoft's licensing for service providers. The earnings presentation for the first quarter of the fiscal year ending March 2027 records that in June the company launched a feature in four services, including Sakura Rental Server and Sakura VPS, that shows CO2 emissions calculated from electricity use (estimates, Scope 2).
:::

:::fact
According to the API page of the Sakura VPS manual (checked 2026-10-13), the API was published on March 28, 2023, access control through roles and API keys was added on September 18, 2024, OS reinstallation from official distribution ISO images on February 5, 2026, and OS reinstallation of standard OS images on July 28. According to the API documentation (version 7.2.3), requests go to `https://secure.sakura.ad.jp/vps/api/v7/` followed by the endpoint, an API key issued in the control panel is sent with HTTP Bearer authentication, and results come back as JSON (UTF-8). The basic request limit is 100 per minute per account, and exceeding it returns 429. The documentation says the API "is still limited to some functions, but we plan to add functions step by step," provides the request and response strings shown as the specification under CC BY 4.0, and offers the OpenAPI specification for download. This site counted 62 operations on 43 paths, covering server power, OS reinstallation, packet filters, server monitoring, host server migration, NFS, switches, and API keys and roles, but none for ordering or canceling a server. In this site's own observation (2026-10-13), an unauthenticated `GET /vps/api/v7/servers` returned 401 with WWW-Authenticate: Bearer and Allow: GET, HEAD, OPTIONS, and the body was `{"message":"認証情報が含まれていません。","code":"not_authenticated"}` (the Japanese message says no credentials were included). The control panel (`secure.sakura.ad.jp/vps/`) loads JavaScript into an empty div element, and the bundle served carried license notices for @vue/shared 3.4.33, vue-router 4.6.3, pinia 2.3.1, vue-i18n 9.14.5 and @sentry/vue. `vps.sakura.ad.jp` returned server: nginx and HSTS (max-age=15768000) over HTTP/1.1, and the HTML of VPS News (`/contents/`) named WordPress 7.1.3 as its generator. The manual (`manual.sakura.ad.jp`) returned server: nginx, x-amz-request-id and via: 1.1 sac-elb over HTTP/2, and its HTML referred to a Sphinx theme (SphinxRtdTheme).
:::

:::guess
The sentence in the 401 body is word for word the translation that Django REST framework's Japanese translation file gives to its response for requests without credentials ("Authentication credentials were not provided."), so the API appears to be built with Django REST framework. The control panel reads as a single-page app written in Vue 3 that collects front-end errors with Sentry. That the API is limited to operational tasks such as power and OS reinstallation and includes no contract operations presumably reflects an approach of keeping prices and contracts on the sales management side while opening up operations, where demand for automation is greatest, first. It also reads as though what required action from VPS users in the August incident was not the environment where servers run but passwords left in the system that holds contract information.
:::

## Three regions, three price tags

:::fact
The pricing and specifications page (checked 2026-10-13) says servers can be placed in Tokyo, Osaka or Ishikari and shows prices for each plan by switching between regions. All three data centers are run by the company itself, with engineers on site monitoring them 24 hours a day, 365 days a year, and the home page introduces Ishikari as a "location resilient to disasters." According to the earnings presentation for the first quarter of the fiscal year ending March 2027, the Ishikari data center uses cooling that takes advantage of Hokkaido's cold climate (direct outside-air cooling in Buildings 1 and 2, indirect outside-air cooling in Building 3 and liquid cooling in the container-type facility) and continues to run on 100% renewable energy. The earnings summary for the same quarter gives infrastructure reinforcement at the Ishikari data center, among other things, as the main reason total assets grew. NFS and the Windows Server plans cost the same regardless of region. The October 2 notice said "we are in a situation where inventory of the 'Ishikari region 32GB Linux plan' is tight," that new orders, scale-ups and other procedures requiring inventory might not be possible, and that other plans in Ishikari might also run tight. Inventory will be replenished, but because of equipment procurement and other factors, "it may take two weeks to a month for the inventory situation to improve," and the notice says orders can be placed in the Tokyo and Osaka regions. As of October 13, VPS News carried no follow-up.
:::

| Plan (monthly billing, tax included) | Ishikari | Osaka | Tokyo | Tokyo vs. Ishikari (this site's calculation) |
| --- | --- | --- | --- | --- |
| 512 MB (1 core, 25 GB) | 643 yen | 671 yen | 698 yen | +8.6% |
| 1G (2 cores, 50 GB) | 880 yen | 935 yen | 990 yen | +12.5% |
| 2G (3 cores, 100 GB) | 1,738 yen | 1,848 yen | 1,958 yen | +12.7% |
| 4G (4 cores, 200 GB) | 3,520 yen | 3,740 yen | 3,960 yen | +12.5% |
| 8G (6 cores, 400 GB) | 7,040 yen | 7,480 yen | 7,920 yen | +12.5% |
| 16G (8 cores, 800 GB) | 13,200 yen | 14,300 yen | 15,400 yen | +16.7% |
| 32G (10 cores, 1,600 GB) | 26,400 yen | 28,600 yen | 30,800 yen | +16.7% |

The amounts in the table come from the pricing and specifications page (checked 2026-10-13). Osaka costs 4.4% to 8.3% more than Ishikari. Paying 12 months upfront, the 32G plan costs 290,400 yen a year in Ishikari and 338,800 yen in Tokyo, a difference of 48,400 yen (all this site's calculations).

:::guess
Pricing in which the gap with Tokyo widens for larger plans appears to pass differences in data center costs such as power, cooling and land onto the price tag in proportion to the resources used. If demand for large plans gathers in the cheapest region, inventory runs down in Ishikari first, and that the first plan to run tight was the most expensive one, 32 GB, reads as a sign of this. Because scale-up cannot cross regions, users who started small in Ishikari may be unable to move to a higher plan until inventory returns. Taken together with the explanation of "equipment procurement and other factors" and the company's investment in infrastructure reinforcement at the Ishikari data center and in next-generation GPUs during the same period, this suggests that procuring general-purpose servers is also taking time. An official column recommending that backups of servers in Tokyo be placed in Osaka or Ishikari presumably serves not only as preparation for failures but also to spread demand across regions.
:::

## Business model

The business takes flat fees set by region and plan, paid monthly or 12 months in advance, topped by Windows licenses, additional software and NFS. Winning customers is left to the A8.net affiliate program, the two-week free trial and the company's own columns.

:::fact
According to the official affiliate program page (checked 2026-10-13), SAKURA internet runs performance-based ads on A8.net, and the per-contract rewards for Sakura VPS are 585 yen for the 512 plan, 800 yen for 1G, 1,580 yen for 2G, 3,200 yen for 4G, 6,400 yen for 8G, 12,000 yen for 16G and 24,000 yen for 32G. Each matches the Ishikari monthly price on monthly billing excluding tax (rounded to the nearest yen for the 512 plan; this site's calculation). Results are approved once a month, orders canceled during the trial do not count, bidding on the company or service names in search ads is forbidden, and self-back, earning the reward on one's own contract, is allowed. The top of the page says "we pay up to 12,000 yen per case," while the VPS 32G row shows 24,000 yen. An official column of March 5, 2026 aimed at people troubled by foreign cloud bills puts a 4 GB cloud instance at about 6,108 yen a month and the 4 GB plan in Ishikari at 3,227 yen a month paid 12 months upfront, calls the VPS "roughly half the price," and introduces the company as "the oldest VPS provider in Japan." According to the earnings materials, the revenue category "cloud infrastructure" was defined in the presentation for the fiscal year ended March 2025 as "mainly cloud services and VPS services," and since the fiscal year ended March 2026 it has also included the DOK and VRT services, which provide GPUs in cloud form. In the first quarter of the fiscal year ending March 2027, cloud infrastructure revenue was ¥2.81 billion (up 11.1% year over year), and ARR for cloud, VPS and rental server services at SAKURA internet alone was ¥15.579 billion (up 8.9%), with a note to the ARR figures describing the cloud as pay-as-you-go. Of consolidated revenue of ¥11.134 billion in the same quarter (up 48.6%), GPU infrastructure services accounted for ¥4.718 billion (up 245.9%), or 42.4%, and the company decided to invest in the next-generation "Rubin" GPUs. The materials this site checked did not show revenue for the VPS alone. The securities report describes the business as "providing cloud and internet infrastructure services by making use of domestic data centers that the group operates itself," and the presentation for the fiscal year ended March 2025 sets out "a vertically integrated, do-it-ourselves business model."
:::

:::guess
Pegging the reward to one month of the Ishikari monthly price before tax appears to set it at a level where the referral cost can be recovered within the three-month minimum term. A flat-rate VPS that people keep using without price changes is stacked, recurring revenue counted in ARR, and it presumably grows differently from the GPU business, up 245.9% year over year. Still, that the company counts the cloud and the VPS in the same category, and lines up migration to the cloud, hybrid connections to the cloud, and backups and a CDN billed through cloud projects beyond the VPS's own features, suggests the VPS is treated as an entry point to Sakura Cloud. The columns' appeal of flat pricing to people troubled by foreign cloud bills and their recommendation to combine the VPS with AI Engine presumably reflect a path that welcomes customers with a flat-rate VPS and extends their usage to pay-as-you-go cloud services and AI APIs.
:::

Sakura VPS, launched in 2010, has kept renting out virtual servers in its own data centers in Ishikari, Osaka and Tokyo at flat prices unaffected by traffic. In 2026 it added an SLA to plans with 4 GB or more and also pitched itself as a home for AI tools, while calling on users to change initial passwords from older contracts that had been left in the sales management system, and in Ishikari, its cheapest region, inventory of a large plan ran tight. For a VPS whose selling point is that the price is settled in advance, the next question may be whether it can provide a server of the chosen size, in the chosen place, when it is needed.
