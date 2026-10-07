---
service: "Sakura Rental Server"
title: "Shared Hosting From ¥121 a Month, and an August 2026 Intrusion After Which 951 Accounts and 1.36 Million Member Records May Have Been Viewed or Taken — Dissecting Sakura Rental Server, Run by a Company Whose GPU Business Now Makes Up 40% of Sales"
description: "Sakura Rental Server, from SAKURA internet, is a shared hosting service that runs from the Light plan at ¥121 a month on a three-year contract up to Business Pro at ¥3,850, on FreeBSD with nginx and Apache 2.4. On August 9, 2026 the company detected an anomaly on a maintenance server, and its third report on September 10 said that data in 951 accounts' hosting space, and member information for 1,360,563 accounts held in the sales management system that stores contract information, may have been viewed or obtained by a third party. It says it has found no evidence of data being taken out or of secondary harm. At the operating company, revenue from GPUs for generative AI grew 3.5-fold year over year and made up 42% of sales in the first quarter of the fiscal year ending March 2027, while sales of cloud applications, made up mainly of the rental server and application services, stayed flat. Using the pricing page, the specification page, the incident reports, earnings presentations and summaries, the affiliate program page and this site's own observations, the article dissects a shared server designed to keep old things working, a feature that blocks AI crawlers, and a sales model built on long contracts, affiliates and resellers."
lead: "Sakura Rental Server's price list shows four shared plans starting with Light at ¥121 a month and a 14-day free trial. In the same company's earnings presentation, 40% of sales now come from renting out NVIDIA GPUs. In 2026, as Xserver and Lolipop opened management entry points to AI agents, Sakura Rental Server added a feature that blocks AI crawlers, and in August it disclosed unauthorized access to its own servers. This article dissects, from public information alone, how a long-running shared hosting service is built and sold at a company that has shifted its weight to GPUs and Japan's government cloud, and what happened to it."
category: dev-tool
tags: [hosting, wordpress, small-business, php, security, data-center, nvidia, ai]
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastVerified: "2026-10-07"
serviceUrl: "https://rs.sakura.ad.jp/"
# Affiliate link placeholder: Sakura Internet runs an official affiliate program on A8.net
# (https://www.sakura.ad.jp/function/affiliate/, checked 2026-10-07: rental server rewards of
# ¥400–12,000 per contract by plan; bidding on the company or service names in search ads is
# forbidden). If the owner joins it, copy the ad code as provided (url, impressionUrl and the
# material's exact text as label). Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://px.a8.net/<sakura-rental-server-material>"
#   program: "Sakura Internet Affiliate Program (A8.net)"
vendor: "SAKURA internet Inc."
origin: "JP"
heroTheme: "sakura-rental-server"
scores: { product: 3.5, ux: 3.5, tech: 3.0, business: 3.5 }
techStack:
  - layer: "OS"
    name: "FreeBSD (FreeBSD 13 on servers contracted since 2022-02-16)"
    confidence: confirmed
    evidence: "The official support page \"Basic specifications (Sakura Rental Server)\" (checked 2026-10-07) lists the OS as FreeBSD on shared servers with RAID10 and a 1,000 Mbps line. The official column answering rumors about the service (updated 2025-11-10) says the company applies security patches itself even where the OS version is old, and that contracts made on or after February 16, 2022 get FreeBSD 13"
    evidenceUrl: "https://help.sakura.ad.jp/rs/2251/"
  - layer: "Web server"
    name: "nginx + Apache 2.4 (.htaccess / mod_rewrite)"
    confidence: confirmed
    evidence: "The same specification page lists the server software as \"nginx + Apache 2.4\" and says .htaccess files can be created and edited. Root access, firewall changes and IDS installation are not available to users"
    evidenceUrl: "https://help.sakura.ad.jp/rs/2251/"
  - layer: "Language runtimes"
    name: "PHP / Perl / Ruby / Python (CGI)"
    confidence: confirmed
    evidence: "The specification page lists PHP 8.x with versions selectable down to 5.2.x, Perl 5.14.x (servers provided since February 16, 2022 also offer 5.32.x), Ruby 2.5.x and Python 3.8.x (2.7.x on some older servers)"
    evidenceUrl: "https://help.sakura.ad.jp/rs/2251/"
  - layer: "Database"
    name: "MySQL (8.0; 4.0–5.7 databases kept) / SQLite"
    confidence: confirmed
    evidence: "The specification page lists MySQL 8.0 on Standard and above, says previously created MySQL 4.0, 5.1, 5.5 and 5.7 databases remain usable, that PostgreSQL is not available and SQLite is, with 50 databases on Standard up to 400 on Business Pro"
    evidenceUrl: "https://help.sakura.ad.jp/rs/2251/"
  - layer: "Mail and FTP"
    name: "Sendmail + Courier-IMAP / ProFTPD (FTPS)"
    confidence: confirmed
    evidence: "The specification page lists Sendmail for sending (with SPF, DKIM and DMARC), Courier IMAP for receiving and ProFTPD for FTP (with FTPS). Light through Standard can send about 100 messages per 15 minutes"
    evidenceUrl: "https://help.sakura.ad.jp/rs/2251/"
  - layer: "Security"
    name: "SiteGuard (WAF) + WithSecure (mail virus scan)"
    confidence: confirmed
    evidence: "The specification page names SiteGuard as the web application firewall software (logs kept for three months, up to 4,000 entries) and WithSecure for mail virus scanning"
    evidenceUrl: "https://help.sakura.ad.jp/rs/2251/"
  - layer: "Storage"
    name: "SSD + RAID10"
    confidence: confirmed
    evidence: "An official notice (2022-02-16) says new servers with refreshed hardware, starting with SSDs, offer up to five times the display speed and processing capacity, alongside free setup, unlimited transfer and more storage at unchanged prices. The specification page lists a RAID10 configuration"
    evidenceUrl: "https://www.sakura.ad.jp/corporate/information/announcements/2022/02/16/1968209031/"
  - layer: "AI bot control"
    name: "Website access control (AI data scrapers / AI search crawlers / AI assistants)"
    confidence: confirmed
    evidence: "An official notice (2026-02-10) says every plan of Sakura Rental Server and Managed Server gets a \"website access control\" feature that blocks access from AI data scrapers, AI search crawlers and AI assistants from the control panel, and that blocking of AI data scrapers would switch on automatically on March 17, 2026"
    evidenceUrl: "https://www.sakura.ad.jp/corporate/information/announcements/2026/02/10/1968223457/"
sources:
  - label: "Sakura Rental Server: Plans and pricing"
    url: "https://rs.sakura.ad.jp/plan/"
    accessedAt: "2026-10-07"
  - label: "SAKURA internet support: Basic specifications (Sakura Rental Server)"
    url: "https://help.sakura.ad.jp/rs/2251/"
    accessedAt: "2026-10-07"
  - label: "Sakura Rental Server column: Answering rumors about Sakura Rental Server (updated 2025-11-10)"
    url: "https://rs.sakura.ad.jp/column/rs/rental-server-rumor/"
    accessedAt: "2026-10-07"
  - label: "SAKURA internet: New Sakura Rental Server servers with up to five times the speed and capacity (2022-02-16)"
    url: "https://www.sakura.ad.jp/corporate/information/announcements/2022/02/16/1968209031/"
    accessedAt: "2026-10-07"
  - label: "SAKURA internet: Migration tool to the new Sakura Rental Server servers (2022-07-13)"
    url: "https://www.sakura.ad.jp/corporate/information/announcements/2022/07/13/1968210006/"
    accessedAt: "2026-10-07"
  - label: "SAKURA internet: Website access control feature for Sakura Rental Server and Managed Server (2026-02-10)"
    url: "https://www.sakura.ad.jp/corporate/information/announcements/2026/02/10/1968223457/"
    accessedAt: "2026-10-07"
  - label: "SAKURA internet: Unauthorized access to part of the rental server environment (2026-08-17)"
    url: "https://www.sakura.ad.jp/corporate/information/newsreleases/2026/08/17/1968225614/"
    accessedAt: "2026-10-07"
  - label: "SAKURA internet: Timely disclosure on unauthorized access to company systems, including the second report (2026-08-19)"
    url: "https://www.sakura.ad.jp/corporate/wp-content/uploads/2026/08/260819-ir_1.pdf"
    accessedAt: "2026-10-07"
  - label: "SAKURA internet: Timely disclosure on investigation results and prevention measures, including the third report (2026-09-10)"
    url: "https://www.sakura.ad.jp/corporate/wp-content/uploads/2026/09/260910-ir_1.pdf"
    accessedAt: "2026-10-07"
  - label: "SAKURA internet: Q1 FY2027 (ending March 2027) earnings presentation (2026-07-28)"
    url: "https://www.sakura.ad.jp/corporate/wp-content/uploads/2026/07/260728-ir_2.pdf"
    accessedAt: "2026-10-07"
  - label: "SAKURA internet: Q1 FY2027 (ending March 2027) earnings summary (2026-07-28)"
    url: "https://www.sakura.ad.jp/corporate/wp-content/uploads/2026/07/260728-ir_1.pdf"
    accessedAt: "2026-10-07"
  - label: "SAKURA internet: FY2026 (ended March 2026) earnings presentation (2026-04-27)"
    url: "https://www.sakura.ad.jp/corporate/wp-content/uploads/2026/04/260427-ir_2-1.pdf"
    accessedAt: "2026-10-07"
  - label: "SAKURA internet: FY2025 (ended March 2025) earnings presentation (2025-04-28)"
    url: "https://www.sakura.ad.jp/corporate/wp-content/uploads/2025/04/250428-ir_2.pdf"
    accessedAt: "2026-10-07"
  - label: "SAKURA internet: Company profile"
    url: "https://www.sakura.ad.jp/corporate/corp/profile/"
    accessedAt: "2026-10-07"
  - label: "SAKURA internet: Affiliate program"
    url: "https://www.sakura.ad.jp/function/affiliate/"
    accessedAt: "2026-10-07"
---

Sakura Rental Server is shared hosting: many customers split one server. It holds anything from a WordPress blog to a company website and email, starting at a few hundred yen a month. It is one of Japan's standard choices alongside [Xserver](/en/articles/xserver), [ConoHa WING](/en/articles/conoha-wing) and [Lolipop](/en/articles/lolipop), all dissected on this site. While those three opened entry points for AI agents one after another in 2026, Sakura Rental Server added, in February, a feature that blocks access from AI crawlers and assistants. Then in August, it disclosed unauthorized access to its own servers.

## Service overview

Sakura Rental Server consists of four shared plans, Light, Standard, Business and Business Pro, along with Managed Server, which gives a customer a dedicated OS, and mail-only plans. Its operator, SAKURA internet, also runs VPS hosting, the IaaS "Sakura Cloud" and GPU cloud services for generative AI.

:::fact
According to SAKURA internet's company profile (as of 2026-10-07), the company was founded on December 23, 1996 and incorporated on August 17, 1999, is headquartered at Grand Green Osaka in Kita-ku, Osaka, is led by President Kunihiro Tanaka, is listed on the Prime Market of the Tokyo Stock Exchange (code 3778), and had 1,135 consolidated employees at the end of March 2026. According to the earnings presentation for the first quarter of the fiscal year ending March 2027, it listed on TSE Mothers in October 2005 and opened a large suburban data center in Ishikari, Hokkaido in November 2011. After a conditional selection in November 2023, "Sakura Cloud" was formally selected in March 2026 as the first Japanese-made government cloud service provider.
:::

:::fact
According to the pricing page (checked 2026-10-07, tax included), Light costs ¥4,356 for three years paid upfront (¥121 a month) or ¥1,980 for one year (¥165 a month), with no monthly billing. Standard costs ¥18,000 for three years (¥500 a month) or ¥660 a month on monthly billing. Business works out to ¥1,980 a month on three years or ¥2,970 monthly, and Business Pro to ¥3,850 or ¥5,280. There is no setup fee on any of the four plans, and SSD storage ranges from 100 GB on Light to 900 GB on Business Pro. A three-year contract saves up to 36%, and the service can be tried free for 14 days without registering a credit card. Managed Server starts at ¥7,485 a month on three years, with a ¥17,600 setup fee. The Premium plan stopped taking new customers on April 1, 2024.
:::

:::pull
At a company where GPUs now make up 40% of sales, the ¥121-a-month shared server has carried on quietly as a tool for keeping things working. In August 2026, that server was broken into.
:::

::scorecard

## UX analysis

Sakura Rental Server's experience has put weight on one promise: what you built long ago keeps running. In 2026 it added the ability to choose to turn away AI traffic from outside.

- **The longer you prepay, the cheaper it gets.** According to the pricing page, Standard works out to ¥500 a month on a three-year contract versus ¥660 on monthly billing, 1.32 times as much. Light can only be bought in upfront terms of 12 to 36 months. The 14-day free trial starts without a credit card, but email sending and transfer are limited during the trial.
- **AI traffic can be turned away.** According to an official notice (2026-02-10), every plan got a "website access control" feature that lets users block three kinds of access from the control panel: AI data scrapers, AI search crawlers and AI assistants. The notice said blocking of AI data scrapers would switch on automatically on March 17 unless users turned it off by March 16.
- **Compatibility that keeps old versions.** According to the specification page, PHP defaults to 8.x and can be switched down to 5.2, Perl defaults to 5.14 and can be switched down to 5.8, and MySQL 4.0 to 5.7 databases created in the past still work. The official column says the company applies security patches to FreeBSD itself even where the version is old. That reassures people who want to keep old CGI scripts or an old WordPress running, while defaults such as Ruby 2.5 and Python 3.8 may look dated to people who want the newest versions right away.
- **A managed environment over freedom.** Root access, firewall changes and IDS installation are not open to users, and SSH is available on Standard and above. Because the company takes on maintenance of the OS and shared software, the range of things users can change is narrow.
- **The weak spot is restoring trust.** The August 2026 unauthorized access led the company to disclose that the hosting space of 951 accounts and member information for 1,360,563 accounts in its sales management system may have been viewed or obtained. The company plans to rebuild every server, and how that rebuild proceeds and how it keeps explaining itself are likely to weigh on new customers' decisions.

## Tech stack

::techstack

:::fact
According to the official specification page (checked 2026-10-07), Sakura Rental Server runs shared servers on FreeBSD with RAID10 disks and a 1,000 Mbps line. The web server is nginx + Apache 2.4 with .htaccess support. Languages are PHP 8.x (switchable to 5.2.x–7.x), Perl 5.14.x (5.32.x also available on servers provided since February 16, 2022), Ruby 2.5.x and Python 3.8.x, and databases are MySQL 8.0 and SQLite on Standard and above. Mail is sent with Sendmail and received with Courier IMAP, FTP runs on ProFTPD (with FTPS), the WAF is SiteGuard and mail virus scanning uses WithSecure. The login shell is csh (tcsh), and users can switch to bash. According to a notice of February 16, 2022, new servers with refreshed hardware, starting with SSDs, offer up to five times the display speed and processing capacity of earlier ones (measured as the average of loading a WordPress front page 200 times). At the same time the setup fee was dropped, transfer became unlimited and storage grew, with prices unchanged. On July 13, 2022, a free tool that automatically moves data and settings to the new servers was released for customers who had signed up before then. According to the official column (updated 2025-11-10), contracts made on or after February 16, 2022 get FreeBSD 13. This site's own observation (2026-10-07) found rs.sakura.ad.jp and www.sakura.ad.jp returning server: nginx.
:::

:::guess
Sakura Rental Server's setup stands out for sticking with FreeBSD, while Lolipop runs on Ubuntu and ConoHa WING on CloudLinux among the services dissected on this site. Together with compatibility that keeps PHP back to 5.2 and MySQL back to 4.0, the design appears to have put not breaking existing customers' sites ahead of adding new features. A managed shared server, where the company handles OS updates and patches and does not hand out root, saves users effort, but only the company can decide to replace the platform all at once. Rolling out SSDs and FreeBSD 13 with the 2022 servers from new contracts first and giving existing customers a migration tool is presumably consistent with that approach.
:::

## The August 2026 unauthorized access

:::fact
According to the third report published on September 10, 2026, SAKURA internet detected an anomaly on a maintenance server for Sakura Rental Server on August 9 and confirmed unauthorized access to the service's servers, malware placed on some servers, and unauthorized access to the database of the sales management system that stores contract information. It published a first report on August 17 and, on August 19, a second report on possible unauthorized access to the sales management system. As of the third report, what may have been viewed or obtained by a third party is the mail, website, log and other data in the hosting space of 951 Sakura Rental Server accounts (the 583 first disclosed plus 368 whose link could not be confirmed but could not be ruled out), and member information for 1,360,563 accounts in the sales management system (member ID, company name, address, name, phone number, email address, date of birth, contracted services, billed amounts and more). For 30 of those accounts, hashed member ID passwords may have been viewed, and the sales management system held some initial server passwords for Sakura Rental Server and some initial administrator passwords for Sakura VPS in unhashed form. The unauthorized access to the sales management system took place between April 2023 and March 2026, and no clear evidence linking it to the access to the rental servers was found. Traces of suspicious activity apparently dating from July 2025 onward were also found in the rental server environment, which the company says do not indicate a continuing compromise.
:::

:::fact
The same report says no clear evidence of data being taken outside has been found, and no misuse of information or secondary harm such as phishing had been confirmed at the time of publication. The company says it does not hold credit card information, so there is no risk of card numbers leaking. It changed the server passwords of contracts still using an initial password and asked affected VPS customers to change theirs. Measures already taken include a full review and tightening of administrator and access rights, revised connection paths and traffic restrictions to critical systems, a review of authentication methods, wider EDR coverage and hardened settings on management servers; planned measures include rebuilding every Sakura Rental Server server, regular external audits and a review of security log coverage and retention. The company is withholding details of the intrusion route and attack to avoid copycat attacks. A timely disclosure the same day said the impact on consolidated results for the year ending March 2027 is expected to be limited and that the forecast will not be revised.
:::

:::guess
The third report counts within the scope even the 368 accounts whose link could not be confirmed and the traces dating from July 2025, which suggests the disclosure was built so as not to understate the impact. At the same time, keeping the initial passwords issued at signup unhashed in the sales management system is a fact the company disclosed itself, and storage meant to simplify the signup process appears to have been in a form that could widen the impact of an intrusion. Rebuilding every server could also give customers a refreshed environment, but the intrusion route has not been disclosed, and nothing about the cause can be judged from outside.
:::

## Business model

The business runs on monthly fees that get cheaper the longer customers prepay, with contracts gathered through outside referral networks such as affiliates and resellers. Across the company, though, rental server revenue is not growing; growth comes from GPUs and the cloud.

:::fact
According to the official affiliate program page (checked 2026-10-07), SAKURA internet runs performance-based ads on A8.net, paying ¥400 per Sakura Rental Server contract on Light, ¥1,600 on Standard, ¥7,000 on Business and ¥12,000 on Business Pro and Managed Server, and up to ¥24,000 for Sakura VPS. Results are approved once a month, orders canceled during the trial period do not count, and bidding on the company or service names in search ads is forbidden. Separately, a "reseller referral program" pays according to the number and plans of contracts referred; the earnings presentation for the year ended March 2026 puts the number of resellers at over 2,000 (the presentation for the year ended March 2025 said 1,088 had registered). There is also an OEM service that lets companies run a rental server business under their own brand.
:::

:::fact
According to the earnings presentations, SAKURA internet's revenue for the fiscal year ended March 2026 was ¥35.301 billion, with an operating loss of ¥403 million. The presentation for the year ended March 2025 defines the "cloud applications" revenue category as mainly the rental server and application services; that category brought in ¥4.724 billion in the year ended March 2026, and the initial forecast for the year ending March 2027 was ¥4.75 billion (up 0.5%). Quarterly figures have stayed flat in a range of ¥1.169–1.187 billion, and the first quarter of the year ending March 2027 came in at ¥1.164 billion. In that same quarter, revenue was ¥11.134 billion (up 48.6% year over year) and operating income ¥1.23 billion (versus a ¥457 million loss a year earlier), with GPU infrastructure services, which rent out NVIDIA H200, B200 and H100 GPUs, bringing in ¥4.718 billion (up 245.9%), 42.4% of revenue. ARR for cloud, VPS and rental server services (the parent company alone) was ¥15.579 billion (up 8.9%). The company raised its full-year forecast to ¥45.5 billion in revenue and ¥2.5 billion in operating income, and decided to invest in NVIDIA's next-generation "Rubin" GPUs.
:::

:::guess
Sakura Rental Server appears to have become not a growth engine but part of a base that steadily brings in a little under ¥1.2 billion a quarter. Swapping in new servers without raising prices and gathering contracts through affiliates and more than 2,000 resellers is consistent with accumulating low-churn customers on long prepaid contracts rather than fighting for new ones with advertising or price cuts. Inside a company whose GPU revenue reached ¥4.7 billion in a quarter, whether a shared server costing a few hundred yen a month keeps being chosen presumably depends on the rebuild and the explanations that follow the 2026 intrusion.
:::

Shared hosting, where customers split one server, has been chosen for starting at ¥121 a month and for keeping sites built long ago running. Forty percent of the operating company's sales now come from GPUs, and it has been selected for the government cloud. In 2026 that company was broken into at the foundation of a long-running service and promised to rebuild every server. For a shared server that added a feature to turn AI crawlers away, what will be tested next is not speed or price but the trust that what customers leave with it is kept safe.
