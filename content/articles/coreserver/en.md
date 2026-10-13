---
service: "CORESERVER"
title: "430 Yen a Month Is the Price of Paying 36 Months Upfront — Dissecting CORESERVER, Which Sells an Apache-Based V1 and a LiteSpeed-Based V2 Under One Name and Raised Prices in July 2026 With Bigger Increases for Shorter Contracts"
description: "CORESERVER (コアサーバー) is a shared rental server launched in August 2007 by GMO DigiRock, Inc., a GMO Internet Group company headquartered in Osaka. Its launch announcement positioned it as a paid service upwardly compatible with \"XREA.COM\", a free server the company started in 2001. In January 2021 it added \"V2\" (CORE-X, Y and Z), which runs on LiteSpeed, and kept the four earlier Apache-based plans (CORE-MINI, A, B and C) on sale as \"V1\". Prices (checked 2026-10-13, tax included) put CORE-X on V2 at 430 yen a month on a 36-month contract and 830 yen on a month-to-month contract, with a V2 setup fee of 1,650 yen (waived when a domain is ordered at the same time), and every plan comes with a 30-day free trial. From July 1, 2026, citing the weak yen, electricity prices and rising server costs driven by growing AI demand, the company raised prices on all seven plans, by about 10% for 36-month V2 contracts and about 20% for one-month ones (this site's calculation). Using the price page, function list, specifications, FAQ and manuals, news posts, API documentation, affiliate pages, company information, the price pages of a sister service and Xserver, and this site's own observations, the article dissects a lineup that sells two generations under one name, price tags that change with contract length, a mix of off-the-shelf components and an in-house control panel, and a business that gathers new contracts through referrals and campaigns."
lead: "CORESERVER's home page introduces the V2 plans as \"月額430円～\" (from 430 yen a month). Open the comparison table on the price page and it turns out to be the monthly equivalent of paying 15,480 yen upfront for 36 months of CORE-X on V2; on a month-to-month contract it is 830 yen, and the setup fee is 1,650 yen (waived when a domain is ordered at the same time). Launched in 2007 as a paid service upwardly compatible with XREA, the server is still sold under one name as Apache-based \"V1\" and LiteSpeed-based \"V2\", and in July 2026 it raised V2's 36-month price by about 10% and its one-month price by about 20% (this site's calculation). This article dissects its pricing, mechanics and money flows from public information alone."
category: dev-tool
tags: [hosting, wordpress, small-business, php, litespeed, backup, api, security, cloudflare]
publishedAt: "2026-10-13"
updatedAt: "2026-10-13"
lastVerified: "2026-10-13"
expires:
  - date: "2026-10-31"
    claim: "The co.jp domain × CORESERVER V2 business support campaign (September 1 to October 31, 2026; V2's setup fee and 12 months of fees returned as points, with applications until January 31, 2027). Check how it is handled after it ends and the banners on each page"
  - date: "2026-10-31"
    claim: "That the One MCP page (which describes its steps and support status as of October 2026) lists One Rental Server, not CORESERVER, among the servers that can be operated from AI"
  - date: "2026-11-04"
    claim: "Xserver Standard's campaign prices (693 yen a month on a 36-month contract and 990 yen on a 12-month contract, until 17:00 on November 4) and the three-year payment comparison that uses them"
serviceUrl: "https://www.coreserver.jp/"
# Affiliate link placeholder: CORESERVER's affiliate program runs through the ASP A8.net (checked 2026-10-13
# on https://www.coreserver.jp/partner/affiliate/ and https://www.value-domain.com/affiliate/): register with
# A8.net for free and apply there (the CORESERVER page links to A8.net's program search, keyword
# s00000007238001). New-contract rewards: the CORESERVER page lists V1 only, tax included (CORE-MINI 110-770
# yen, CORE-A 165-1,430, CORE-B 330-2,200, CORE-C 1,100-7,700 for 1-12 months); the Value Domain page lists the
# same V1 rewards tax excluded and adds V2 (CORE-X 635-5,000, CORE-Y 908-7,000, CORE-Z 2,272-10,000 yen). A
# separate in-house referral program (https://www.value-domain.com/service/referral/) pays 100 Value Domain
# points per server order and bans referrals where advertising is prohibited. Neither page states a listing-ad
# keyword ban or a new-window ban (A8.net's program terms need a publisher login, which was not used), so
# sameWindow is not set. Use the A8.net ad code as provided: link to affiliate.url, 1x1 image to
# affiliate.impressionUrl, text ad verbatim to affiliate.label; keep every field identical in ja.md and en.md
# (parity.ts checks it). Never invent the label — ask the owner.
# affiliate:
#   url: "https://px.a8.net/svt/ejp?a8mat=<coreserver-material>"
#   program: "CORESERVER Affiliate Program (A8.net)"
#   impressionUrl: "https://www<nn>.a8.net/0.gif?a8mat=<coreserver-material>"
#   label: "<verbatim text of the ad material>"
vendor: "GMO DigiRock, Inc."
origin: "JP"
heroTheme: "coreserver"
scores: { product: 3.5, ux: 3.0, tech: 3.0, business: 3.0 }
techStack:
  - layer: "Web server"
    name: "LiteSpeed Web Server (V2, HTTP/3) / Apache (V1)"
    confidence: confirmed
    evidence: "The server specifications page (checked 2026-10-13) names LiteSpeed as the web server for the V2 plans and Apache for the V1 plans, and lists HTTP/2 and HTTP/3 support for V2 and HTTP/2 support for V1. The home page describes V1 as \"Apache採用で標準的なセキュリティ対策\" (Apache with standard security measures) and V2 as the LiteSpeed plans. In this site's own observation (2026-10-13), s1.coreserver.jp, which the FAQ gives as an example server name, returned server: Apache"
    evidenceUrl: "https://www.coreserver.jp/spec/"
  - layer: "Databases and languages"
    name: "MariaDB (10.6) / PostgreSQL (14, V1 only) / SQLite / PHP (5.3–8.5) / Perl (5.26) / Ruby / Python"
    confidence: confirmed
    evidence: "The server specifications page (checked 2026-10-13) lists the MySQL server as MariaDB 10.6 for both V2 and V1, PostgreSQL 14 for V1 only, and SQLite 2 and 3 on V2 and 3 on V1. It lists PHP as 7.4 plus LiteSpeed PHP on V2 (5.3 to 8.5 selectable) and 7.4 plus FastCGI, OPcache and APCu on V1 (5.6 to 8.5 selectable), Perl 5.26, Ruby 2.3 on V2 and 2.6 on V1, and Python 2 and 3. The FAQ also says V2 offers only MySQL (MariaDB) and points those who need PostgreSQL to V1"
    evidenceUrl: "https://www.coreserver.jp/spec/"
  - layer: "Security"
    name: "Imunify360 (V2)"
    confidence: confirmed
    evidence: "The home page (checked 2026-10-13) writes \"セキュリティソフトImunify360\" (Imunify360 security software) in the security field of the three V2 plans, and its table of differences between V1 and V2 describes V2 as \"Imunify360搭載で強化\" (strengthened with Imunify360). The function list gives the Web Application Firewall and IPS/IDS to the three V2 plans and marks the Web Application Firewall of the four V1 plans \"未導入\" (not installed)"
    evidenceUrl: "https://www.coreserver.jp/"
  - layer: "Backups and app installation"
    name: "JetBackup (V2) / Installatron (V2)"
    confidence: confirmed
    evidence: "The manual \"自動バックアップからの復元（JetBackup）\" (restoring from automatic backups (JetBackup), checked 2026-10-13) shows restoring V2 plan backups by choosing \"バックアップ・復旧ソフトウェアを開く\" (open the backup and restore software) under \"ツール\" (tools) in the control panel and picking a date under \"Restore & Download\". The same page tells users to restore WordPress and other applications installed through the control panel's app installer (Installatron) with Installatron's own backup feature"
    evidenceUrl: "https://help.coreserver.jp/manual/v2/autobackup-restore/"
  - layer: "OS and resource control (V2)"
    name: "CloudLinux (V2, alt-php)"
    confidence: likely
    evidence: "The FAQ (checked 2026-10-13) gives the path of PHP 8.3 on the V2 plans as /opt/alt/php83/usr/bin/php and Ruby 3.2 as /opt/alt/ruby32/bin/ruby, among others. CloudLinux's official documentation shows the alt-php binaries used with PHP Selector at paths such as /opt/alt/php72/usr/bin/php. The home page describes V2 as \"クラウド型リソース制御を採用し\" (adopting cloud-style resource control)"
  - layer: "Server management platform (V2)"
    name: "DirectAdmin (V2)"
    confidence: likely
    evidence: "The FAQ gives the absolute path on the V2 plans as /home/(account name), the public directory as /domains/(domain name)/public_html/, and the storage location of newly created mail accounts as /imap/(domain name)/(account name)/Maildir. DirectAdmin's official FAQ gives a domain's public directory as /home/user/domains/domain.com/public_html and mail storage as /home/user/imap/domain.com/email/Maildir/, and contrasts it with cPanel's mail storage at /home/user/mail/domain.com/email/"
  - layer: "Control panel (cp.coreserver.jp)"
    name: "FuelPHP"
    confidence: likely
    evidence: "In this site's own observation (2026-10-13), the control panel's login page at cp.coreserver.jp/account/login/ set cookies named fuel_csrf_token and fuelfid. FuelPHP's official documentation gives 'fuelfid' as the default cookie name for file-driver sessions"
  - layer: "Site delivery and DNS"
    name: "Cloudflare (proxy, DNS)"
    confidence: likely
    evidence: "In this site's own observation (2026-10-13), the name servers of coreserver.jp are gabriel.ns.cloudflare.com and vera.ns.cloudflare.com, and the www, cp, help and apidoc hosts returned server: cloudflare and a cf-ray ending in NRT. www, cp and help also returned x-turbo-charged-by: LiteSpeed, which suggests LiteSpeed answers behind Cloudflare as well"
  - layer: "Server settings API"
    name: "CORESERVER API (api.coreserver.jp, POST key-value)"
    confidence: confirmed
    evidence: "The API documentation (titled \"Xrea Coreserver API Document\", checked 2026-10-13) gives CORESERVER's access URL as https://api.coreserver.jp/ and XREA's as https://api.xrea.com/, says parameters are sent \"POSTのKey,Value形式\" (as POST key-value pairs) rather than converted to JSON, and limits access to each endpoint to \"１秒間に１アクセスまで\" (one access per second). The sidebar lists 58 items in 13 categories (this site's count). The function list includes the API among the basic functions of the four V1 plans"
    evidenceUrl: "https://apidoc.coreserver.jp/"
  - layer: "Contract automation"
    name: "Value Domain API v1 (servers, Bearer token)"
    confidence: confirmed
    evidence: "The server volume of the Value Domain API documentation (OpenAPI 3.0.0, checked 2026-10-13) gives the endpoint as https://api.value-domain.com/v1/ with Bearer token authentication and lists 11 operations under /coreservers, including building a server (with an option for an initial WordPress install), extending the expiry, auto-renewal settings and resource changes (this site's count). It says anything described as a \"server\" applies to Xrea, CORESERVER and Value Server alike"
    evidenceUrl: "https://www.value-domain.com/api/doc/server/"
sources:
  - label: "CORESERVER official: Home page (plans, V1 vs V2, perks, FAQ)"
    url: "https://www.coreserver.jp/"
    accessedAt: "2026-10-13"
  - label: "CORESERVER official: Price plans (prices by contract length, setup fees)"
    url: "https://www.coreserver.jp/price/"
    accessedAt: "2026-10-13"
  - label: "CORESERVER official: Function list"
    url: "https://www.coreserver.jp/function/"
    accessedAt: "2026-10-13"
  - label: "CORESERVER official: Server specifications"
    url: "https://www.coreserver.jp/spec/"
    accessedAt: "2026-10-13"
  - label: "CORESERVER official: Backups"
    url: "https://www.coreserver.jp/function/backup/"
    accessedAt: "2026-10-13"
  - label: "CORESERVER official: Terms of use"
    url: "https://www.coreserver.jp/rule/"
    accessedAt: "2026-10-13"
  - label: "CORESERVER official: Affiliate program (A8.net, rewards)"
    url: "https://www.coreserver.jp/partner/affiliate/"
    accessedAt: "2026-10-13"
  - label: "CORESERVER news: List (2007 to 2026)"
    url: "https://www.coreserver.jp/info/"
    accessedAt: "2026-10-13"
  - label: "CORESERVER news: Launch of CORESERVER.JP (2007-08-02)"
    url: "https://www.coreserver.jp/info/2007/20070802.php"
    accessedAt: "2026-10-13"
  - label: "CORESERVER news: V2 plan launch campaign (2021-01-18)"
    url: "https://www.coreserver.jp/info/2021/0118.php"
    accessedAt: "2026-10-13"
  - label: "CORESERVER news: Server price revision (2026-05-20)"
    url: "https://www.coreserver.jp/info/2026/0520.php"
    accessedAt: "2026-10-13"
  - label: "CORESERVER support: FAQ"
    url: "https://help.coreserver.jp/faq/"
    accessedAt: "2026-10-13"
  - label: "CORESERVER manual: Purchasing an account"
    url: "https://help.coreserver.jp/manual/account-buy/"
    accessedAt: "2026-10-13"
  - label: "CORESERVER manual: Restoring from automatic backups (JetBackup)"
    url: "https://help.coreserver.jp/manual/v2/autobackup-restore/"
    accessedAt: "2026-10-13"
  - label: "Xrea Coreserver API Document"
    url: "https://apidoc.coreserver.jp/"
    accessedAt: "2026-10-13"
  - label: "Value Domain official: Domains effectively free forever (ordered together with CORESERVER V2)"
    url: "https://www.value-domain.com/guide/setregist/"
    accessedAt: "2026-10-13"
  - label: "Value Domain official: co.jp domain × CORESERVER V2 business support campaign"
    url: "https://www.value-domain.com/campaign/cojp/"
    accessedAt: "2026-10-13"
  - label: "Value Domain official: Notice under the Specified Commercial Transactions Act"
    url: "https://www.value-domain.com/commercial/"
    accessedAt: "2026-10-13"
  - label: "Value Domain official: Affiliate program (rewards for CORESERVER V1 and V2)"
    url: "https://www.value-domain.com/affiliate/"
    accessedAt: "2026-10-13"
  - label: "Value Domain API documentation: Servers"
    url: "https://www.value-domain.com/api/doc/server/"
    accessedAt: "2026-10-13"
  - label: "Value Domain official: WordPress migration service"
    url: "https://www.value-domain.com/guide/wp/"
    accessedAt: "2026-10-13"
  - label: "Value Domain official: Value AI Writer byGMO (pricing, ordering with CORESERVER V2)"
    url: "https://www.value-domain.com/value-aiwriter/"
    accessedAt: "2026-10-13"
  - label: "Value Domain One: One MCP (functions that can be operated from AI)"
    url: "https://one.value-domain.com/service/mcp"
    accessedAt: "2026-10-13"
  - label: "Value Domain One: One Rental Server (plans, prices by contract length)"
    url: "https://one.value-domain.com/rs"
    accessedAt: "2026-10-13"
  - label: "GMO DigiRock, Inc.: Company information (overview, history)"
    url: "https://www.digirock.co.jp/about/"
    accessedAt: "2026-10-13"
  - label: "GMO Internet Group: List of major group companies (GMO DigiRock, Inc.)"
    url: "https://group.gmo/company-profile/groupinfo/"
    accessedAt: "2026-10-13"
  - label: "Xserver official: Pricing (Standard prices by contract length, campaign)"
    url: "https://www.xserver.ne.jp/price/"
    accessedAt: "2026-10-13"
  - label: "Xserver official manual: Specifications (resource guarantees)"
    url: "https://www.xserver.ne.jp/manual/man_server_spec.php"
    accessedAt: "2026-10-13"
  - label: "DirectAdmin Docs: Frequently Asked Questions (where website and email data are stored)"
    url: "https://docs.directadmin.com/getting-started/first-steps/faq.html"
    accessedAt: "2026-10-13"
  - label: "CloudLinux OS Docs: CloudLinux OS components (alt-php and PHP Selector)"
    url: "https://docs.cloudlinux.com/cloudlinuxos/cloudlinux_os_components/"
    accessedAt: "2026-10-13"
  - label: "FuelPHP Documentation: Session Config (default cookie names)"
    url: "https://fuelphp.com/docs/classes/session/config.html"
    accessedAt: "2026-10-13"
---

CORESERVER is a shared rental server that GMO DigiRock, Inc., a GMO Internet Group company, has run since 2007. It shares the entrances for accounts, contracts and payments with [Value Domain](/en/articles/value-domain), the same company's domain registration service. In January 2021 it added three LiteSpeed-based "V2" plans and kept the four earlier Apache-based plans as "V1", so today it sells two generations under one name. The "月額430円～" (from 430 yen a month) on the home page is the monthly price of CORE-X, the cheapest V2 plan, paid 36 months at a time, and on July 1, 2026 the prices of all seven plans went up. This site has also dissected [Xserver](/en/articles/xserver), [Lolipop!](/en/articles/lolipop), [Star Rental Server](/en/articles/star-server) and [ConoHa WING](/en/articles/conoha-wing) as shared rental servers.

## Service overview

CORESERVER is a shared rental server, where several customers use one machine, and it handles websites on custom domains, email and databases together. V1 has four plans, CORE-MINI, CORE-A, CORE-B and CORE-C, and V2 has three, CORE-X, CORE-Y and CORE-Z; the home page writes "個人から法人まで幅広く対応できる７プランをご用意しました。" (we offer seven plans that cover a wide range, from individuals to corporations). Servers are purchased on the Value Domain site, and websites and email are configured in CORESERVER's control panel (cp.coreserver.jp).

:::fact
According to GMO DigiRock's company information (checked 2026-10-13), the company (GMO DigiRock, Inc. in English) was registered in July 2001 as 有限会社デジロック (DigiRock, a limited company), launched the rental server XREA the following month and launched CORESERVER in August 2007. In July 2011 it formed a capital and business alliance with GMO Internet Group, Inc.; in May 2013 it changed to its current name; and in February 2026 it officially launched Value Domain One and One Rental Server. Its business is providing internet services and developing software; it had 23 employees (as of October 1, 2026) and capital of 10 million yen, its head office is in Grand Front Osaka in Kita-ku, Osaka, and it also appears in GMO Internet Group's list of major group companies. The announcement of August 2, 2007 positioned CORESERVER as an "上位互換性がある有料サービス" (upwardly compatible paid service) of "XREA.COM", a free server started on August 2, 2001, and listed a 15-day free trial and compatibility with the paid "XREA+(Plus)" among its features. According to the headlines in the news list, the higher-end CORE-B plan began in October 2009, the start of the lower-end CORE-MINI plan was announced as planned in November, and CORE-C was added in April 2011. In 2017 a move to a new control panel, free SSL, callback phone support and an API began, and in January 2018 an automatic backup and restore service and region selection followed. According to the news post of January 18, 2021, the new "V2" plans were created that day, and the four existing plans became "V1" with their disk space roughly doubled (about 200%) at unchanged prices. V2 adopted 64-core latest-generation EPYC CPUs, 1TB of memory and "LiteSpeed" as its web server, listed HTTP/3, IPv6 and standard automatic backups among its features, and gave V2 customers a free-forever domain perk.
:::

:::fact
According to the price page (checked 2026-10-13, tax included), V2's setup fee is 1,650 yen and is waived when a .com, .net, .org, .info, .biz or .jp domain is ordered at the same time, while V1 has no setup fee. On V2, CORE-X (500GB NVMe SSD, 6GB memory allocation, 300% CPU allocation) costs 830 yen a month on a one-month subscription contract, 610 yen on a 12-month contract, 545 yen on a 24-month contract and 430 yen on a 36-month contract. CORE-Y (700GB, 9GB, 600%) costs 1,190, 990, 925 and 760 yen, and CORE-Z (1,000GB, 12GB, 1,200%) 2,990, 2,505, 2,445 and 2,190 yen; the CPU allocation is explained as "CPUの1コア相当のリソースを100とした場合の利用可能なリソース量" (the resources available when one CPU core's worth of resources is counted as 100). V1 lists prices for 1, 3, 6, 12, 24 and 36 months: on a 36-month contract CORE-MINI (300GB SSD) costs 255 yen a month, CORE-A (600GB) 510 yen, CORE-B (800GB) 1,015 yen and CORE-C (1,400GB) 3,165 yen, and on a one-month contract 425, 795, 1,585 and 4,950 yen. CORE-MINI allows up to 50 domains, 200 email addresses and 10 MySQL (MariaDB) databases, while the other six plans are all unlimited. Transfer is described as unlimited on every plan, and a note on V2's "転送量目安" (transfer guideline) says anything beyond the set amount is best effort. Every plan comes with a 30-day free trial, and the home page and price page write "クレジットカード不要" (no credit card required). According to the page on domains effectively free forever, ordering V2 together with a domain and signing a contract of 12 months or longer during the trial makes registration and renewal free for eligible domains (.com, .net, .org, .biz, .info and .jp), with domains managed by other companies and premium domains excluded. According to the FAQ, support consists of an inquiry form accepted 24 hours a day and live chat from 10:00 to 12:00 and 13:00 to 17:00 except weekends and holidays, and callback phone support is available only to customers on V1's CORE-B and CORE-C and V2's CORE-Z.
:::

:::pull
The 430 yen on the home page is the monthly price for those who pay 36 months upfront. CORESERVER's price tag gets higher the shorter you pay.
:::

::scorecard

## UX analysis

CORESERVER's experience starts with a 30-day trial that needs no card and WordPress set up at the time of ordering. Beyond that, the entrances split, with contracts on Value Domain and operations in CORESERVER's panel, and the available features differ between V1 and V2.

- **The 30-day trial needs no card.** According to the manual on purchasing an account, the remaining trial days carry over when you buy during the trial. The FAQ, however, says that during the trial the email address that comes with the server cannot be used, sudden bursts of traffic and mass email are limited more strictly than under a contract, and phone support is unavailable. It also says sites that can be seen as having no plan for a contract, such as promotional sites that end in about a week or sites that "乗り継ぎ" (hop) from trial to trial, may be deleted without notice. At the 2007 launch, the trial was 15 days.
- **V1 and V2 are different servers under the same name.** The home page sums up the differences in a table, describing V1 as "プラン変更不可" (no plan changes) and V2 as "上位プランへの変更可能" (can change to a higher plan), and makes the free domain perk V2-only. According to the FAQ, V2 plan changes are upgrades only, billed as "差額 × 残日数" (difference × remaining days), and V1 does not change between plans. Dedicated IP addresses, PostgreSQL, SSH with password authentication, .user.ini and VALUE-IP are available only on V1, and SSH on V2 takes public key authentication only. Data from V1 can be used on V2 as is, it says, because LiteSpeed reads Apache configuration files such as .htaccess. Neither allows adult sites, and the FAQ names [ColorfulBox](/en/articles/colorfulbox) as an example of a server that allows adult use.
- **Contracts go through Value Domain, and numbers need checking page by page.** According to the manual on purchasing an account, servers are bought by logging in to Value Domain, and the contract lengths available are 1, 3, 6 and 12 months for V1 and 1, 12, 24 and 36 months for V2. The price page lists 24- and 36-month prices for V1 as well, so the two do not match. The guideline for CORE-X's monthly page views also differs: 312,500 PV on the home page and 250,000 PV on the co.jp campaign page. Article 7 of the terms of use limits payment methods to "クレジットカード決済／銀行振込／郵便振替／WebMoneyのみ" (only credit card, bank transfer, postal transfer and WebMoney), while the notice under the Specified Commercial Transactions Act also lists Yahoo! Wallet and convenience store payments. According to the FAQ, a payment alone neither purchases nor extends anything; once it is reflected in the purchasable balance, the purchase or extension still has to be done.
- **WordPress goes in at the time of ordering.** The home page says that ordering a domain at the same time sets up a WordPress site on the custom domain in as little as 1 minute 30 seconds. According to the V2 manual, WordPress and other applications can be installed through the control panel's app installer (Installatron). Value Domain's "WordPress移行サービス" (WordPress migration service) is a free tool that moves the database, media, plugins and themes from another company's server automatically; there is no data size limit, but sites over about 100GB may fail, and multisite installs and WordPress.com cannot be moved. According to the FAQ, access from overseas to WordPress's admin screens and login page is restricted to prevent unauthorized logins and tampering. The home page also lists "おまかせスタート" (Omakase Start), a setup service, but according to the FAQ, website setup on the customer's behalf is not offered on V2, so the service is for V1.
- **Backups are free, but not guaranteed.** According to the backup page, backups run once a day with no sign-up, 15 generations (15 days, 7 for CORE-X) are kept, and a restore requested from the control panel lands in the chosen directory in about 5 to 10 minutes. V1 databases are saved as dump files in the customer's own space, while on V2, according to the manual, you restore by picking a date in JetBackup's screen. The same page states "バックアップデータの完全性、正確性、有用性等を保証するものではありません。" (we do not guarantee the completeness, accuracy, usefulness, etc. of backup data) and asks customers to keep their own backups too. V1 lets new accounts choose an eastern or western Japan region at sign-up, but only V1 has a region item on the function list and specifications pages. The headlines in the news list include the launch of the "自動バックアップ&復元サービス" (automatic backup and restore service) in January 2018, V1's "有料バックアップ開始" (start of paid backups) in September 2021 and "バックアップ無料標準化" (free backups made standard) in March 2023.
- **Fees paid are, as a rule, not returned.** Article 6 of the terms of use states "契約後は、理由の如何にかかわらず、受領料金の返金はいたしません。" (after the contract, fees received are not refunded for any reason), and Article 9 says the remaining contract period is not refunded on cancellation. Value Domain's notice under the Specified Commercial Transactions Act, on the other hand, accepts cancellations of credit card and bank transfer orders only within 10 days of the order, and says the company decides whether to accept cancellations and refunds. According to the FAQ, a contract that is not extended is cancelled automatically the day after it expires, and files are deleted after about 1 to 7 days. An account can be revived within 30 days of expiry, but the data is not guaranteed.

## Tech stack

::techstack

:::fact
According to the server specifications page (checked 2026-10-13), V2 has up to 64 CPU cores, up to 512GB–1TB of memory and NVMe SSD storage in RAID10, while V1 has up to 64 CPU cores, up to 1TB of memory and pure SSD storage in RAID; for both, servers are managed in-house and located in Japan, and each server connects to the backbone at 10Gbps. The web server is LiteSpeed on V2 and Apache on V1. PHP runs as 7.4 with LiteSpeed PHP on V2 (5.3 to 8.5 selectable) and as 7.4 with FastCGI, OPcache and APCu on V1 (5.6 to 8.5 selectable); databases are MariaDB 10.6 (plus PostgreSQL 14 on V1), and mailing lists use Majordomo on V2 and Mailman on V1. According to the function list, free SSL is Let's Encrypt, the Web Application Firewall and IPS/IDS come with the three V2 plans, and the Web Application Firewall of the four V1 plans is marked "未導入" (not installed) (the home page FAQ says free SSL and a WAF are provided as standard). The FAQ sets V2's load limits at disk speeds of 200, 400 and 800MB per second, 2,048, 4,096 and 8,192 IO operations per second, 30, 60 and 200 concurrent connections to the web server and 200, 400 and 800 processes per account (CORE-X, Y and Z in that order), and says the accounts with the heaviest load may be limited when the load on a whole server exceeds 90% of its maximum capacity. The same page gives V2's absolute path as /home/(account name), the public directory as /domains/(domain name)/public_html/, the storage location of newly created mail accounts as /imap/(domain name)/(account name)/Maildir and the path of PHP 8.3 as /opt/alt/php83/usr/bin/php, and says private_html is a symbolic link to public_html. DirectAdmin's official FAQ gives a domain's public directory as /home/user/domains/domain.com/public_html and mail storage as /home/user/imap/domain.com/email/Maildir/, and CloudLinux's official documentation shows the alt-php binaries used with PHP Selector at paths such as /opt/alt/php72/usr/bin/php.
:::

:::fact
In this site's own observation (2026-10-13), the name servers of coreserver.jp are gabriel.ns.cloudflare.com and vera.ns.cloudflare.com, and the www, cp (control panel), help (manuals) and apidoc (API documentation) hosts returned, over HTTP/2, server: cloudflare and a cf-ray ending in NRT, with www, cp and help also returning x-turbo-charged-by: LiteSpeed. The cp login page set cookies named fuel_csrf_token and fuelfid, and FuelPHP's official documentation gives "fuelfid" as the default cookie name for file-driver sessions. help returned a Link header pointing to /wp-json/. api.coreserver.jp returned server: LiteSpeed without Cloudflare's headers; in WHOIS its IP address belonged to a block named COREVPS registered to GMO DigiRock, Inc., and the address of s1.coreserver.jp (server: Apache), which the FAQ gives as an example server name, belonged to a block registered under the DigiRock name. According to the news list, the API began on December 25, 2017, and the API documentation (titled "Xrea Coreserver API Document"; in this site's own observation its Last-Modified was July 30, 2018) gives CORESERVER's access URL as https://api.coreserver.jp/, says parameters are sent "POSTのKey,Value形式" (as POST key-value pairs) and limits access to each endpoint to "１秒間に１アクセスまで" (one access per second). The sidebar lists 58 items in 13 categories, covering WordPress installation, database dumps and restores, email addresses, Cron, copying between servers, settings that block WordPress logins from overseas and more (this site's count). The function list includes the API among the basic functions of the four V1 plans but not in the V2 table. On the contract side, the server volume of the Value Domain API lists 11 operations under /coreservers, including building a server, extending the expiry, auto-renewal and resource changes (this site's count). The One MCP page (last updated October 8, 2026) lists creating and managing One Rental Server, file management, backups and more as server operations that can be run through conversation with AI, and does not list CORESERVER as something it operates. As for features that use AI, the home page lists the AI article-writing tool "Value AI Writer" among its perks as "毎月1回無料" (free once a month), and the product's page says GPT-4o and 4.1, Claude 4.0 and Gemini 2.5 Pro can be chosen for body text and gives the free plan one article a month. The same page promotes a "最大40%割引" (up to 40% off) on paid plans when ordered together with CORESERVER V2, and its table shows discounts of about 20% to 43%.
:::

:::guess
LiteSpeed, Imunify360, JetBackup and Installatron, the components on V2's list, are off-the-shelf software widely used by hosting companies abroad. The layout that places /domains/(domain name)/public_html and /imap/(domain name)/(account name)/Maildir under /home/(account name) matches the paths in DirectAdmin's official FAQ and differs from the cPanel mail location the same FAQ gives, so V2 appears to run on DirectAdmin. The PHP and Ruby paths starting with /opt/alt/ and the description "cloud-style resource control" suggest CloudLinux as the OS. Whereas [ColorfulBox](/en/articles/colorfulbox), which this site has dissected, puts cPanel up front, CORESERVER presumably keeps its own control panel, with FuelPHP's cookie names, in front and runs these components behind it. The API that began in 2017, meanwhile, is explained in documentation shared with XREA and appears only for V1 in the function list. That reads as V2's settings still sitting outside this API, though it could also simply be missing from the function list's V2 table. The same company starting One MCP, its entrance for AI agents, from the new One Rental Server appears to be a sign that investment for agents is going to the newer platform.
:::

## A price tag divided by 36 months — July's price increase, compared with a sister service and Xserver

:::fact
A news post of May 20, 2026 said, "円安・電気料金の高止まりの継続に加え、AI需要拡大による世界的なサーバーコストの上昇により、現在のご提供価格の維持が困難な状況となりました。" (on top of the continued weak yen and persistently high electricity prices, the global rise in server costs driven by growing AI demand has made it difficult to maintain current prices), raised the prices of all seven V1 and V2 plans for contract procedures from July 1, and said customers who had already paid would get the new prices from their next renewal. The table in the post does not state how tax is treated, but the revised amounts match the tax-included prices on the price page. On V2, CORE-X went from 690 to 830 yen a month on a one-month contract and from 390 to 430 yen on a 36-month contract, and CORE-Z from 2,490 to 2,990 yen and from 1,990 to 2,190 yen. The increases were about 20% for one-month contracts, about 15% for 12- and 24-month contracts and about 10% for 36-month contracts on all three V2 plans, and about 20–21% for 1-, 3- and 6-month contracts and about 15–16% for 12-, 24- and 36-month contracts on the four V1 plans (this site's calculation). The price page shows no separate prices for new contracts and renewals, and the co.jp campaign page limits the campaign to new contracts and excludes renewals. The page for One Rental Server, from the same company, gives Basic (800GB NVMe SSD, with 8 vCPU cores and 10GB of memory as a resource guarantee) at 680 yen a month on a 36-month contract and 1,280 yen on a 12-month contract, with no setup fee and a 15-day free trial, and does not say whether tax is included. Xserver's price page (tax included) gives Standard (500GB NVMe) a regular monthly price of 990 yen on a 36-month contract and 1,100 yen on a 12-month contract, discounted to 693 and 990 yen by a campaign from 17:00 on October 5 to 17:00 on November 4, 2026. There is no setup fee, the free trial is 10 days, and the specifications list guarantees Standard 6 virtual cores and 8GB of memory on servers sv13001 and later.
:::

| Plan (monthly) | Storage | CPU and memory (as each company states them) | Setup fee | 12-month contract | 36-month contract | Payment for 36 months (this site's calculation) | Free trial |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CORESERVER CORE-X | 500GB NVMe SSD | 300% CPU allocation, 6GB memory allocation | 1,650 yen (free with a domain ordered at the same time) | 610 yen | 430 yen | 15,480 yen (17,130 yen with the setup fee) | 30 days |
| CORESERVER CORE-Y | 700GB NVMe SSD | 600% CPU allocation, 9GB memory allocation | 1,650 yen (same as above) | 990 yen | 760 yen | 27,360 yen (29,010 yen with the setup fee) | 30 days |
| One Rental Server Basic | 800GB NVMe SSD | 8 vCPU cores, 10GB (resource guarantee) | 0 yen | 1,280 yen | 680 yen | 24,480 yen | 15 days |
| Xserver Standard | 500GB NVMe | 6 virtual cores, 8GB (guaranteed on sv13001 and later) | 0 yen | 1,100 yen (campaign 990 yen) | 990 yen (campaign 693 yen) | 35,640 yen (campaign 24,948 yen) | 10 days |

All checked 2026-10-13. CORESERVER and Xserver include tax; the One Rental Server page does not state how tax is treated. Xserver's campaign prices run until 17:00 on November 4, 2026. The payment for 36 months is the monthly price × 36, plus the setup fee where shown (this site's calculation).

:::guess
Lining up the 36-month price tags, CORE-X's 430 yen is the cheapest. Between CORE-Y and Xserver Standard, whose stated CPU and memory are close, the three-year payment is 8,280 yen lower for CORE-Y when both are at regular prices (6,630 yen lower even with the setup fee), and 2,412 yen higher for CORE-Y against Xserver's campaign price (4,062 yen higher with the setup fee) (this site's calculation). Because CORESERVER's price tag does not change between new contracts and renewals, its long-term contracts appear to stay cheaper in comparisons outside campaign periods, while the gap appears to narrow or reverse while other companies run campaigns. One Rental Server Basic, from the same company, is larger than CORE-Y in stated storage, CPU and memory, and its three-year payment is 2,880 yen lower (this site's calculation). Its page does not state tax, but even if 10% were added on the assumption that the price excludes tax, it would come to 26,928 yen, still below CORE-Y (this site's calculation). This can be read as placing the main line of the newer platform on One Rental Server while CORESERVER is chosen for its 30-day trial and the features carried over from V1, but the trial lengths and available features differ, so it cannot be called a simple replacement. That July's revision raised V2's one-month price by about twice the rate of its 36-month price is presumably a design that puts more of the cost increase on short contracts and steers customers toward paying long terms upfront. Another reading is that it reflects the administrative costs of short contracts, which need monthly billing and renewals.
:::

## Business model

CORESERVER's earnings appear to rest on server fees received upfront for 1 to 36 months, with V2's setup fee, domains and paid SSL certificates sold through Value Domain, and Value AI Writer's paid plans stacked on top. The job of bringing in customers falls to A8.net affiliates, campaigns aimed at new contracts and the 30-day free trial.

:::fact
CORESERVER's affiliate page (checked 2026-10-13) explains that affiliates register with the ASP A8.net, post ad links and are paid rewards by A8.net according to completed contracts, and its reward table (tax included) lists only the four V1 plans. Rewards for new orders run from 110 yen for one month to 770 yen for 12 months on CORE-MINI, and from 1,100 yen to 7,700 yen on CORE-C. Value Domain's affiliate page shows the same V1 rewards tax excluded (100 to 700 yen for CORE-MINI; each of the 16 V1 amounts is exactly the tax-included amount divided by 1.1, this site's calculation) and adds V2. Rewards for new V2 contracts (tax excluded) are 635 yen for one month, 2,000 yen for three months, 3,500 yen for six months and 5,000 yen for 12 months on CORE-X, 908 to 7,000 yen on CORE-Y and 2,272 to 10,000 yen on CORE-Z. Neither table has rows for 24 or 36 months, and Value Domain's table lists three- and six-month rows for V2 as well, which do not appear on V2's price page. According to the co.jp campaign page, customers who register a co.jp domain and sign a 12-month V2 contract between 0:00 on September 1 and 23:59 on October 31, 2026, and send their company name, corporate number and company address between October 1, 2026 and January 31, 2027, get V2's setup fee and one year of fees back as points, which can be used for the next year's renewal. 24- and 36-month contracts are excluded, and having the auto-renewal setting applied is also a condition. Of the eight 2026 announcements in the news list, five announce campaigns, promoting discounts of 20%, 30% and 24% and a year of free V2 fees (this site's count). The page on domains effectively free forever says that after a server is cancelled the domain can be used like any other, and that making it free forever again requires a new V2 contract, while the FAQ says a V2 free domain can also be used on V1, Value Server and XREA.
:::

:::guess
Compared on 12-month contracts, the V2 rewards of 5,000 yen for CORE-X and 10,000 yen for CORE-Z come to about 75% and about 37% of 12 months of fees excluding tax (about 6,655 yen for CORE-X and about 27,327 yen for CORE-Z), while V1 stays at about 15–21% (this site's calculation). This appears to be a design that hands much of the first year's revenue to referrers and recovers it through renewals, with the weight of sales on V2. Using the same price tag for new contracts and renewals while applying discounts only to new contracts reads as a setup that avoids complaints about prices jumping at renewal while going after new contracts through referrals and campaigns. The free-forever domain works as a device that swaps the domain's renewal fee for a V2 contract and keeps the server going longer, yet since the domain stays with the customer after cancellation, it also reads as a line drawn so as not to raise the barrier to switching too high. As the same company also sells XREA, Value Server and One Rental Server, CORESERVER appears to take the role of holding long-term prepaid contracts and existing customers, but no breakdown of revenue by service is published, so there is nothing to confirm it with.
:::

CORESERVER, which began in 2007 as a paid service upwardly compatible with XREA, layered the LiteSpeed-based V2 on top in 2021 while keeping V1's four plans, and in July 2026 raised prices with bigger increases for shorter contracts. On top of a 30-day trial with no card required, the same price tag for new contracts and renewals and a free-forever domain with V2, the entrance for AI agents opened from the newer One Rental Server. The question is which customers this name, carrying a 2017 API and two generations, will take on, and how far it will widen its new entrances.
