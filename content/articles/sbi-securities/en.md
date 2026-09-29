---
service: "SBI Securities"
title: "Record Profits After Dropping Trading Fees to Zero — SBI Securities, With 16 Million Accounts, Moved Its Japanese Stock Trading System to AWS and Earns From Margin Interest and a Web of Point Partnerships"
description: "Two and a half years after its \"Zero Revolution\" made online Japanese stock trading commissions permanently free in September 2023, SBI Securities became the first Japanese online broker to pass 16 million accounts and posted a record ¥284.6 billion in operating revenue for the fiscal year ended March 2026. A dissection — from its earnings presentation, press releases, and our own observation — of how commissions make up just over a tenth of revenue, how its trading system handling over ¥2 trillion a day moved to AWS and is run with AWS CDK and AWS FIS, the partner network it built on five selectable point programs and credit card investing, and an affiliate program that pays ¥286 per account application."
lead: "In August 2023, SBI Securities announced what it called the \"Zero Revolution\": online commissions on Japanese stocks would become permanently free, regardless of trade size, for both cash and margin trades. If a broker throws away the fee that used to be its signboard, what does it earn from instead? It moved the front door of trading to the cloud, connected to other companies' customer bases through points and cards, and leads Japan's online brokers in account numbers. This is a dissection of how a full-line online broker for individual investors is built and how it makes money."
category: consumer-app
tags: [fintech, securities, investing, nisa, aws, points]
publishedAt: "2026-09-29"
updatedAt: "2026-09-29"
lastVerified: "2026-09-29"
serviceUrl: "https://www.sbisec.co.jp/"
# Affiliate link placeholder: the owner must join the SBI Securities program on
# LinkShare Japan (https://www.linkshare.ne.jp/advertiser/47482/) and pass its
# review before enabling this block. Securities ads fall under the Financial
# Instruments and Exchange Act, so check the program's ad rules first.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<linkshare-sbi-securities-link>"
#   program: "SBI Securities account opening (LinkShare)"
vendor: "SBI SECURITIES Co., Ltd."
origin: "JP"
heroTheme: "sbi-securities"
scores: { product: 4.5, ux: 3.5, tech: 4.0, business: 4.5 }
techStack:
  - layer: "Trading system platform"
    name: "AWS (Asia Pacific Tokyo, multi-AZ)"
    confidence: confirmed
    evidence: "An AWS press release (2024-04-23) states that SBI Securities moved its online trading system for Japanese stocks to AWS and, using multiple Availability Zones in the Tokyo Region, handles up to 100 million visits to its trading site and about 3.6 million orders a day. It says this makes SBI the first Japanese broker to run more than ¥2 trillion of Japanese stock trades a day on AWS"
    evidenceUrl: "https://prtimes.jp/main/html/rd/p/000001838.000004612.html"
  - layer: "Infrastructure as code"
    name: "AWS CDK + AWS CloudFormation"
    confidence: confirmed
    evidence: "The same press release states that SBI Securities uses AWS CDK to build mission-critical systems such as stock trading as code, provisioned through CloudFormation. A Cloud Watch report (2024-05-16) says the team made a rule of coding all of its infrastructure"
    evidenceUrl: "https://cloud.watch.impress.co.jp/docs/case/1591461.html"
  - layer: "Failure and load testing"
    name: "AWS Fault Injection Service + Distributed Load Testing on AWS"
    confidence: confirmed
    evidence: "The press release says fault injection, previously done by hand, was replaced with AWS FIS, which simulates Availability Zone failures to verify the high-availability design automatically, and that traffic spikes are simulated with AWS Distributed Load Testing. According to Cloud Watch, an AZ switchover now takes about eight minutes"
    evidenceUrl: "https://prtimes.jp/main/html/rd/p/000001838.000004612.html"
  - layer: "Service connectivity"
    name: "AWS PrivateLink"
    confidence: confirmed
    evidence: "The press release states that AWS PrivateLink, which connects the VPC to AWS services, is used to establish secure private connections with companies inside and outside the SBI Group, such as SBI Shinsei Bank and Osaka Digital Exchange"
    evidenceUrl: "https://prtimes.jp/main/html/rd/p/000001838.000004612.html"
  - layer: "Engineering organization"
    name: "SBI Simplex Solutions (in-house engineering joint venture)"
    confidence: confirmed
    evidence: "According to a Cloud Watch report (2024-05-16), the migration was led by SBI Simplex Solutions with an engineering team of about 600 people, and moved just under 1,000 servers, the front-end portion of the online trading system for Japanese stocks called Genesis, in about one year and four months from the project announcement. The company is a joint venture of SBI Securities and Simplex Holdings"
    evidenceUrl: "https://cloud.watch.impress.co.jp/docs/case/1591461.html"
  - layer: "Web delivery"
    name: "Amazon CloudFront + Application Load Balancer"
    confidence: likely
    evidence: "In our observation (2026-09-29), responses from www.sbisec.co.jp showed CloudFront in the via header and set the ALB sticky-session cookie (AWSALB). The trading site site1.sbisec.co.jp also set AWSALB"
  - layer: "Web application"
    name: "Java servlet (JSESSIONID) behind Apache, pages in Windows-31J"
    confidence: likely
    evidence: "In our observation (2026-09-29), the top page redirected to /ETGate/, returned server: Apache, set JSESSIONID, the session cookie name used by Java servlet containers, and served its HTML in Windows-31J, a Shift_JIS variant"
  - layer: "Static asset delivery"
    name: "Akamai (sbisec.akamaized.net)"
    confidence: likely
    evidence: "In our observation (2026-09-29), the top page loaded its layout JavaScript and libraries such as encoding-japanese, which converts Japanese character encodings in the browser, from sbisec.akamaized.net"
  - layer: "On-site engagement"
    name: "KARTE"
    confidence: likely
    evidence: "In our observation (2026-09-29), the top page loaded KARTE's delivery script (cdn-edge.karte.io/…/edge.js)"
sources:
  - label: "SBI Securities: Earnings presentation for the fiscal year ended March 2026 (2026-05-01, Japanese)"
    url: "https://search.sbisec.co.jp/v2/popwin/info/home/irpress/kessanshiryou_260501.pdf"
    accessedAt: "2026-09-29"
  - label: "SBI Securities: Announcement of the \"Zero Revolution\" (free Japanese stock trading commissions, 2023-08-31, Japanese)"
    url: "https://search.sbisec.co.jp/v2/popwin/info/home/irpress/prestory230831_010830.pdf"
    accessedAt: "2026-09-29"
  - label: "AWS (PR TIMES): SBI Securities moves its online trading system to AWS (2024-04-23, Japanese)"
    url: "https://prtimes.jp/main/html/rd/p/000001838.000004612.html"
    accessedAt: "2026-09-29"
  - label: "Cloud Watch: SBI Securities moves its Japanese stock trading system to the AWS cloud (2024-05-16, Japanese)"
    url: "https://cloud.watch.impress.co.jp/docs/case/1591461.html"
    accessedAt: "2026-09-29"
  - label: "SBI Securities: How to use SBI's points (Japanese)"
    url: "https://go.sbisec.co.jp/lp/lp_sbi_pointservice.html"
    accessedAt: "2026-09-29"
  - label: "LinkShare Japan: SBI Securities affiliate program (Japanese)"
    url: "https://www.linkshare.ne.jp/advertiser/47482/"
    accessedAt: "2026-09-29"
  - label: "Wikipedia (Japanese): SBI Securities (history)"
    url: "https://ja.wikipedia.org/wiki/SBI%E8%A8%BC%E5%88%B8"
    accessedAt: "2026-09-29"
---

For a long time, a brokerage made its money by taking a fee on every trade. Online brokers won customers from full-service firms by cutting that fee, but in 2023 SBI Securities cut the commission on Japanese stock trades to zero. Two and a half years later, its results are at a record high. What replaced the fee shows up in the pie chart of its earnings presentation, in the way its trading system is built, and in its web of point partnerships.

## Service overview

SBI Securities is a full-line online broker for individual investors, offering Japanese and US stocks, mutual funds, bonds, FX, futures and options, iDeCo (Japan's individual defined-contribution pension), and more through the web and apps. It is part of the SBI Holdings group and also underwrites initial public offerings (IPOs).

:::fact
According to Wikipedia, SBI Securities traces back to Osawa Securities, founded in March 1944. It was renamed E\*Trade Securities in April 1999 and began online trading that year, became SBI E\*Trade Securities in July 2006, and took its current name, SBI SECURITIES Co., Ltd., on July 1, 2008. According to its earnings presentation (2026-05-01), its securities accounts passed 15 million in November 2025, a first for a Japanese online broker, and 16 million in May 2026. Customer assets at the end of March 2026 were about ¥66 trillion, up 41% year on year. For the fiscal year ended March 2026, operating revenue was ¥284.6 billion and operating income ¥86.8 billion, both record highs.
:::

:::fact
According to the company's press release of August 31, 2023, the "Zero Revolution" made the regular commissions on Japanese stock cash trades (including odd lots) and margin trades free for online trades by Internet Course customers, for orders from September 30, 2023. The only condition is setting trade reports and other documents to "electronic delivery." Margin interest and stock lending fees are excluded. The same release notes that the company had announced a "Neo Securities" plan in June 2019 aimed at making Japanese stock commissions free, and that about 60% of customers opening new accounts were in their 30s or younger and about 90% had never invested in stocks.
:::

:::pull
Dropping the commission to zero did not remove the ways to make money. SBI made the act of trading free and rebuilt its earnings around the money that stays in accounts, the interest on margin trading, and its partners' customer bases.
:::

::scorecard

## UX analysis

SBI Securities' UX is built on not making customers pay the first yen, and on letting them bring the points and cards of other companies with them. At the same time, the sheer number of services it has accumulated over the years shows up directly in how its screens and apps are split.

- **Remove commissions from the reasons to compare.** By making Japanese stock commissions permanently free with one condition, it removed the need to check what a trade will cost. Because that condition is electronic delivery, it also nudges customers away from paper documents.
- **Let customers pick the points of their own daily life.** According to the official points page, the main point program can be chosen from five: V Point, Ponta Points, d Points, PayPay Points, and JAL miles. Points are earned through the "mutual fund mileage" program based on average fund holdings, and through Japanese stock trading. Two of them, V Point and Ponta Points, can be used to invest: mutual funds from 100 points and Japanese stocks from a few hundred points, including in NISA (Japan's tax-free investment account).
- **Put regular investing on the credit card.** The same page says credit card mutual fund investing earns up to 4% in points on the amount invested (the 4% applies to the Sumitomo Mitsui Card Visa Infinite when certain conditions are met). It turns the monthly contribution into something that feels like an ordinary card payment.
- **Split apps by purpose.** According to the earnings presentation, the company redesigned its "Kantan Tsumitate" (easy regular investing) app in November 2025, launched the PC FX trading tool HYPER SBI FX the same month, and launched the asset management app "SBI Securities Plus" in February 2026. In January and February 2026 it also renewed its foreign stock and gold, silver, and platinum trading sites.

:::guess
The apps and trading sites appear to be split by purpose because it is hard to satisfy, on the same screen, a beginner who only wants to invest regularly and a customer who trades FX or futures every day. The cost is that customers have to learn for themselves which app does what. Given that most new account holders have never invested, how easy the front door is to understand is likely to become the main UX battleground.
:::

## Tech stack

::techstack

:::fact
According to the AWS press release of April 23, 2024, SBI Securities moved its online trading system for Japanese stocks to the AWS Tokyo Region and, using multiple Availability Zones, handles up to 100 million visits to its trading site and about 3.6 million orders a day. Its infrastructure is defined as code with AWS CDK and built with CloudFormation; failure testing that used to be manual is automated with AWS Fault Injection Service, and traffic spikes are simulated with AWS Distributed Load Testing. The release says other business systems are scheduled to move to AWS in stages, targeting 2026.
:::

:::fact
According to a Cloud Watch report (2024-05-16), what was moved was the front-end portion of the online trading system for Japanese stocks, called Genesis: just under 1,000 servers, in about one year and four months from the project announcement. The migration was basically a lift from on-premises to EC2 instances, and the applications that ran on premises were built with almost no changes and run on EC2. The project was led by SBI Simplex Solutions, a joint venture of SBI Securities and Simplex Holdings, with an engineering team of about 600 people. Availability Zone switchovers during failures are also done with AWS CDK and now take about eight minutes.
:::

:::fact
In our observation (2026-09-29), responses from www.sbisec.co.jp passed through CloudFront and set AWSALB, a cookie used by AWS load balancers. At the same time, the top page redirected to a path called /ETGate/, set JSESSIONID, the session cookie of Java servlet containers, and served HTML in Windows-31J, a Shift_JIS variant. Much of the layout JavaScript, CSS, and images was delivered from Akamai at sbisec.akamaized.net, and the script of the on-site engagement tool KARTE was loaded as well.
:::

:::guess
That Windows-31J HTML and long-standing URLs such as /ETGate/ remain in front of the new cloud platform suggests the migration started as a "move" rather than a "rebuild." That fits the Cloud Watch report that the applications were moved to EC2 almost unchanged. To move a system handling over ¥2 trillion of trades a day without stopping it, swapping only the platform underneath while leaving screens and URLs unchanged keeps the impact on customers and the risk small. Putting infrastructure as code and deliberate failure testing in place first is likely the groundwork for repeating the same process when the screens and business systems are rebuilt later.
:::

## Business model

SBI Securities' revenue rests on several pillars beyond trading commissions: financial revenue such as margin interest, trading gains on bonds and foreign exchange, IPO underwriting, and trust fees on mutual funds.

:::fact
According to the earnings presentation, the revenue mix for the fiscal year ended March 2026 was 11.5% commissions, 42.4% financial revenue, 5.0% underwriting and selling fees, 19.9% trading gains, and 21.3% other. Financial revenue rose 40.2% year on year to ¥120.5 billion, of which ¥63.0 billion came from margin trading. Margin accounts numbered about 1.95 million. Commissions, including futures, options, and foreign stocks, rose 9.6% to ¥32.7 billion, and brokerage trading value in Japanese stocks rose 47.4% to ¥534 trillion. In IPOs, it took part in underwriting 52 of the 54 listings in the period, a participation rate of 96.3%.
:::

:::fact
The same presentation puts customer assets at about ¥66 trillion, accounts with regular mutual fund investing at about 3.87 million, and NISA purchases at ¥2.41 trillion for January to March 2026 (up 27.2% year on year). Its highlights for the fiscal year ended March 2026 include a business alliance with SMBC Group for asset management services on Olive, a retail alliance with au Financial Group, and "SBI Hyper Deposit," an automatic sweep of cash balances with SBI Shinsei Bank, which passed ¥1 trillion in January 2026. The 2023 Zero Revolution release calls its partnerships with companies across many industries an "open alliance" strategy, under which it has pursued "multi-point" and "multi-card" strategies supporting many points and cards.
:::

:::fact
According to LinkShare Japan's advertiser page, SBI Securities' affiliate program pays a flat ¥286 per completed application for a securities account. Duplicate or fraudulent applications are rejected, and using terms such as "SBI" and "SBI証券" as keywords in search ads is prohibited, with violations potentially leading to termination.
:::

:::guess
Dividing operating revenue of ¥284.6 billion by the roughly 15.82 million accounts at the end of March 2026 gives about ¥18,000 per account per year (our calculation). A ¥286 referral fee is tiny by comparison. Since opening an account alone earns nothing, and money is made only once assets build up and the customer moves on to margin trading or holding funds, the program appears designed to pay thinly per application and gather a large number of entries. The ban on brand-name search ads is likely meant to avoid paying referral fees for customers who would come through a branded search anyway.
:::

:::guess
Commissions could go to zero likely because the center of earnings had already shifted from the number of trades to the amount of money left in accounts. Margin interest, mutual fund trust fees, and sweeping cash to a bank all grow in proportion to balances. The more accounts and balances free trading attracts, the more these revenues grow. On the other hand, much of financial revenue depends on outstanding margin positions, in other words on how hot the market is, so how well earnings hold up when markets cool is likely the real test of this model.
:::

What SBI Securities sells is not free trading so much as convenience as a place to keep your money. It ties into daily life through points and cards, moved the front door of trading to the cloud to withstand sudden waves of orders, and earns in proportion to balances. At the end of the race to cut commissions, brokers are turning into something closer to banks and card companies, and SBI Securities is driving that shift at the largest scale.
