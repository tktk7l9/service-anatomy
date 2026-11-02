---
service: "Rakuten Securities"
title: "Over 90% of Fund Savers Pay Through Rakuten — Rakuten Securities, With 14.39 Million Accounts, Filled the Zero-Commission Gap With Balance Income, Is 49% Owned by Mizuho Securities and Moved Under Rakuten Bank in October 2026"
description: "Rakuten Securities made Japanese stock trading commissions free in October 2023. By the end of June 2026 it had 14.39 million accounts and ¥58.7 trillion in client assets, and in January to September 2026 it posted ¥165.9 billion in operating revenue and ¥55.0 billion in operating income. A dissection, from earnings documents and official pages, of the entry point where 93.1% of fund savers use a Rakuten Group payment method, the SOR and R-Cross conditions on the Zero Course, Mizuho Securities' 49% stake, the October 2026 fintech reorganization, a revenue mix with 44.1% from financial income, the compensation policy after the 2025 unauthorized access cases, and an Oracle Exadata and hybrid cloud foundation."
lead: "What sets Rakuten Securities apart is less its low fees than the route money takes into an account. People invest monthly on a Rakuten Card, buy with Rakuten points and link balances to Rakuten Bank. Of those with a fund savings plan, 93.1% use one of the Rakuten Group payment methods. At the same time, Mizuho Securities holds 49% of the shares, and the holding company became a consolidated subsidiary of Rakuten Bank in October 2026. This is a dissection, from public documents, of what a broker that made Japanese stock commissions free earns from and who now owns it. It explains how the business works and does not recommend any financial product or account."
category: consumer-app
tags: [fintech, securities, investing, nisa, points, cloud]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
serviceUrl: "https://www.rakuten-sec.co.jp/"
# Affiliate link placeholder: the official page (https://www.rakuten-sec.co.jp/web/service/affiliate.html)
# lists LinkShare and TG Affiliate as partner networks. The owner must join a network and pass
# review before enabling this block. Securities ads fall under the Financial Instruments and
# Exchange Act, and the page forbids solicitation by anyone not registered as a sales representative.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<network-rakuten-securities-link>"
#   program: "Rakuten Securities account opening"
vendor: "Rakuten Securities, Inc."
origin: "JP"
heroTheme: "rakuten-securities"
scores: { product: 4.5, ux: 4.0, tech: 3.5, business: 4.5 }
techStack:
  - layer: "Core database"
    name: "Oracle Database (Exadata)"
    confidence: confirmed
    evidence: "A Rakuten Securities job posting (infrastructure engineer) says the role oversees stable operation of financial infrastructure including core databases such as Oracle Exadata, and lists Oracle (Exadata) in its main tech stack."
    evidenceUrl: "https://hrmos.co/pages/rakuten-sec/jobs/0000250"
  - layer: "Infrastructure (hybrid)"
    name: "AWS, Azure, Google Cloud, VMware"
    confidence: confirmed
    evidence: "The same posting lists these four under cloud and infrastructure in its main tech stack and describes optimizing a hybrid cloud environment. Which systems run where is not published."
    evidenceUrl: "https://hrmos.co/pages/rakuten-sec/jobs/0000250"
  - layer: "Other data stores"
    name: "MySQL, PostgreSQL, Redis"
    confidence: confirmed
    evidence: "Listed under databases in the same posting's main tech stack. How they are assigned is not published."
    evidenceUrl: "https://hrmos.co/pages/rakuten-sec/jobs/0000250"
  - layer: "Infrastructure as code and automation"
    name: "Terraform, Ansible, Jenkins, GitHub Actions"
    confidence: confirmed
    evidence: "Listed in the same posting, which says the company is moving away from manual operations and pushing IaC and automation."
    evidenceUrl: "https://hrmos.co/pages/rakuten-sec/jobs/0000250"
  - layer: "Containers"
    name: "Docker, Kubernetes"
    confidence: confirmed
    evidence: "Listed under other tools in the same posting. Which services use them is not published."
    evidenceUrl: "https://hrmos.co/pages/rakuten-sec/jobs/0000250"
  - layer: "Server layout"
    name: "Web / application / MARKETSPEED tiers + six business database sets"
    confidence: confirmed
    evidence: "The system disclosure page publishes the load of web servers, web application servers, MARKETSPEED application and database servers, and business database servers (sets 1 to 6) that store balance, order and execution data."
    evidenceUrl: "https://www.rakuten-sec.co.jp/web/company/disclosure/system/system_operating.html"
  - layer: "Order execution"
    name: "SOR + R-Cross (ToSTNeT)"
    confidence: confirmed
    evidence: "The SOR page says orders connect to up to four markets: the Tokyo Stock Exchange, JAX PTS, Japannext PTS and R-Cross (ToSTNeT). R-Cross covers cash trades only and requires the Zero Course."
    evidenceUrl: "https://www.rakuten-sec.co.jp/web/domestic/sor/"
  - layer: "Login authentication"
    name: "Passkeys (FIDO2)"
    confidence: confirmed
    evidence: "The results briefing says passkeys were introduced for all customers and channels on October 26, 2025, and that they have been made mandatory in stages since June 2026."
    evidenceUrl: "https://www.rakuten-sec.co.jp/ITS/disc_PDF/kessann_20260804_01.pdf"
  - layer: "Trading tools"
    name: "MARKETSPEED II (Windows), MARKETSPEED for Mac, iSPEED"
    confidence: confirmed
    evidence: "The official site states that MARKETSPEED II supports Windows only. The Mac version is a separate product, and iSPEED is a smartphone app."
    evidenceUrl: "https://marketspeed.jp/ms2/"
  - layer: "AI investment information"
    name: "BridgeWise"
    confidence: confirmed
    evidence: "The FY12/2025 earnings report says the company began offering investment information covering about 8,500 Japanese and US stocks using the AI technology of BridgeWise Analytics Ltd."
    evidenceUrl: "https://www.rakuten-sec.co.jp/ITS/disc_PDF/kessann_20260206_02.pdf"
  - layer: "Shared platform with Mizuho Securities"
    name: "Shared system with Mizuho Securities"
    confidence: confirmed
    evidence: "The FY12/2025 briefing says a system was developed so Mizuho Securities can jointly use Rakuten Securities' UI/UX, starting with online customer detail changes in December 2024 and with fully online account opening planned from February 16, 2026. The history page also records joint development of the account opening system in February 2026."
    evidenceUrl: "https://www.rakuten-sec.co.jp/ITS/disc_PDF/kessann_20260206_01.pdf"
  - layer: "Web delivery"
    name: "Akamai"
    confidence: likely
    evidence: "In our observation (2026-11-02), responses from www.rakuten-sec.co.jp and member.rakuten-sec.co.jp returned server-timing: ak_p, which points to Akamai, and the member host also returned server: Apache and a cookie named akaalb_twins."
sources:
  - label: "Rakuten Securities: Company profile (shareholders, capital, employees)"
    url: "https://www.rakuten-sec.co.jp/web/company/profile/"
    accessedAt: "2026-11-02"
  - label: "Rakuten Securities: Company history"
    url: "https://www.rakuten-sec.co.jp/web/company/profile/history.html"
    accessedAt: "2026-11-02"
  - label: "Rakuten Securities: Q3 FY12/2026 results notice (2026-10-29)"
    url: "https://www.rakuten-sec.co.jp/ITS/disc_PDF/kessann_20261029_01.pdf"
    accessedAt: "2026-11-02"
  - label: "Rakuten Securities: H1 FY12/2026 results briefing (2026-08-04)"
    url: "https://www.rakuten-sec.co.jp/ITS/disc_PDF/kessann_20260804_01.pdf"
    accessedAt: "2026-11-02"
  - label: "Rakuten Securities: Q2 FY12/2026 earnings report (2026-08-04)"
    url: "https://www.rakuten-sec.co.jp/ITS/disc_PDF/kessann_20260804_02.pdf"
    accessedAt: "2026-11-02"
  - label: "Rakuten Securities: FY12/2025 results briefing (2026-02-06)"
    url: "https://www.rakuten-sec.co.jp/ITS/disc_PDF/kessann_20260206_01.pdf"
    accessedAt: "2026-11-02"
  - label: "Rakuten Securities: FY12/2025 earnings report (2026-02-06)"
    url: "https://www.rakuten-sec.co.jp/ITS/disc_PDF/kessann_20260206_02.pdf"
    accessedAt: "2026-11-02"
  - label: "Rakuten Securities: FY12/2025 statement of business and financial condition"
    url: "https://www.rakuten-sec.co.jp/ITS/disc_PDF/gyoumu202512_01.pdf"
    accessedAt: "2026-11-02"
  - label: "Rakuten Group: Strengthening the strategic capital and business alliance between Rakuten Securities Holdings and Mizuho Securities (2023-11-09)"
    url: "https://www2.jpx.co.jp/disc/47550/140120231108582020.pdf"
    accessedAt: "2026-11-02"
  - label: "Mizuho FG, Mizuho Bank and Rakuten Bank: Strategic capital and business alliance and expected change of a major shareholder of Rakuten Bank (2026-05-20)"
    url: "https://www2.jpx.co.jp/disc/58380/140120260520541703.pdf"
    accessedAt: "2026-11-02"
  - label: "Rakuten Group: Effectiveness of the fintech reorganization and recording of income tax expense (2026-10-01)"
    url: "https://corp.rakuten.co.jp/news/press/2026/1001_11.html"
    accessedAt: "2026-11-02"
  - label: "Rakuten Securities: Fees"
    url: "https://www.rakuten-sec.co.jp/web/commission/"
    accessedAt: "2026-11-02"
  - label: "Rakuten Securities: Japanese stock cash trading fees"
    url: "https://www.rakuten-sec.co.jp/web/domestic/stock/commission.html"
    accessedAt: "2026-11-02"
  - label: "Rakuten Securities: Margin trading fees, interest and stock lending fees"
    url: "https://www.rakuten-sec.co.jp/web/domestic/margin/commission.html"
    accessedAt: "2026-11-02"
  - label: "Rakuten Securities: US stock fees"
    url: "https://www.rakuten-sec.co.jp/web/us/stock/commission.html"
    accessedAt: "2026-11-02"
  - label: "Rakuten Securities: SOR orders"
    url: "https://www.rakuten-sec.co.jp/web/domestic/sor/"
    accessedAt: "2026-11-02"
  - label: "Rakuten Securities: NISA"
    url: "https://www.rakuten-sec.co.jp/web/nisa/"
    accessedAt: "2026-11-02"
  - label: "Rakuten Securities: Earning and using points"
    url: "https://www.rakuten-sec.co.jp/web/nisa/point/"
    accessedAt: "2026-11-02"
  - label: "Rakuten Securities: Credit card investing (Rakuten Card payment)"
    url: "https://www.rakuten-sec.co.jp/web/rfund/guide/creditcard.html"
    accessedAt: "2026-11-02"
  - label: "Rakuten Securities: Point rate for Rakuten Black Card fund investing rises to as much as 3.2% (2026-09-28)"
    url: "https://www.rakuten-sec.co.jp/web/info/info20260928-01.html"
    accessedAt: "2026-11-02"
  - label: "Rakuten Securities: Fund savings plans"
    url: "https://www.rakuten-sec.co.jp/web/rfund/saving/"
    accessedAt: "2026-11-02"
  - label: "Rakuten Securities: Point program"
    url: "https://www.rakuten-sec.co.jp/web/service/point/"
    accessedAt: "2026-11-02"
  - label: "Rakuten Securities: Money Bridge (bank link)"
    url: "https://www.rakuten-sec.co.jp/web/bank/"
    accessedAt: "2026-11-02"
  - label: "Rakuten Securities: Compensation policy for unauthorized access from phishing and similar fraud (2025-07-25, updated 2026-02-18)"
    url: "https://www.rakuten-sec.co.jp/web/info/info20250725-04.html"
    accessedAt: "2026-11-02"
  - label: "Rakuten Securities: Possible leak of customer information through unauthorized access at an external service provider (2026-10-31)"
    url: "https://www.rakuten-sec.co.jp/web/info/info20261031-01.html"
    accessedAt: "2026-11-02"
  - label: "Rakuten Securities: Passkey authentication (FIDO2)"
    url: "https://www.rakuten-sec.co.jp/web/security/passkey/"
    accessedAt: "2026-11-02"
  - label: "Rakuten Securities: System disclosure"
    url: "https://www.rakuten-sec.co.jp/web/company/disclosure/system/system_operating.html"
    accessedAt: "2026-11-02"
  - label: "Rakuten Securities careers (HRMOS): Infrastructure engineer (manager candidate)"
    url: "https://hrmos.co/pages/rakuten-sec/jobs/0000250"
    accessedAt: "2026-11-02"
  - label: "Rakuten Securities: MARKETSPEED II"
    url: "https://marketspeed.jp/ms2/"
    accessedAt: "2026-11-02"
  - label: "Rakuten Securities: Affiliate program"
    url: "https://www.rakuten-sec.co.jp/web/service/affiliate.html"
    accessedAt: "2026-11-02"
expires:
  - date: "2026-11-30"
    claim: "Re-check the Money Bridge preferential rates (0.58% and 0.52% a year as of November 2, 2026)."
  - date: "2026-11-30"
    claim: "Check for updates on the unauthorized access at NTT Data's contractor (announced October 31, 2026; 362 cases; under investigation)."
  - date: "2026-12-06"
    claim: "Check whether 23-hour US stock trading (planned for December 6, 2026, US time) has begun."
  - date: "2026-12-31"
    claim: "Check the Rakuten Black Card rate change for card investing (up to 3.2% from January 2027 purchases) and how far mandatory passkeys have progressed."
  - date: "2026-12-31"
    claim: "Rewrite the Kodomo NISA statements once it starts in January 2027."
  - date: "2027-05-31"
    claim: "Check whether the premium membership service Star CLUB (full launch planned for next spring) has begun."
---

The commission war among Japan's online brokers reached its end point in 2023. Rakuten Securities made Japanese stock trading commissions free in October of that year. Three years on, its operating margin has risen to the 35% range and it has 14.39 million general accounts. How can it earn more after taking down the sign it used to trade under? Half of the answer is income from the balances that pile up in accounts. The other half is the route those balances travel. Monthly investing flows through Rakuten Card, the points are Rakuten's, and idle cash sits at Rakuten Bank. Read Rakuten Securities as a broker built at the exit of Rakuten's payment network, and the numbers start to connect.

## Service overview

Rakuten Securities is an online broker offering Japanese stocks, US stocks, investment funds, bonds, FX, futures and options and iDeCo personal pensions through the web and apps. It has no retail branches, and it also sells through independent financial advisers (IFAs).

:::fact
According to the company's statement of business and financial condition, its predecessor, DLJ Direct SFG Securities, was founded in March 1999 and began internet trading that June. In November 2003, Rakuten (now Rakuten Group) acquired 96.7% of the shares and became the parent. A points tie-up with Rakuten began in February 2004, and the name changed to Rakuten Securities that July. Points have been part of this company's history since 2004. The company profile gives capital of ¥19,495 million and 720 employees (as of December 2025).
:::

:::fact
The H1 FY12/2026 results briefing (2026-08-04) reports, as of the end of June 2026, 14.39 million general accounts (up 14.5% year on year), 7.92 million NISA accounts, ¥58.7 trillion in client assets (up 48.3%) and ¥25.8 trillion in fund balances (up 69.2%). The general account activity rate was 67.4%, or 9.7 million active accounts. Rakuten members made up 86.7% of general accounts. The Q3 notice (2026-10-29) reports consolidated operating revenue of ¥165,978 million, operating income of ¥55,093 million and quarterly net income attributable to owners of the parent of ¥28,581 million for January to September 2026. The figures a year earlier were ¥112,338 million, ¥29,519 million and ¥14,357 million.
:::

:::fact
The capital structure is essential to understanding this company. The company profile lists its shareholders as Rakuten Securities Holdings (51.0%) and Mizuho Securities (49.0%). Rakuten Group's disclosure of November 9, 2023 says Mizuho Securities would add about 29.01% to the 19.99% it took in 2022, for an expected ¥87.0 billion, with Rakuten Securities remaining a consolidated subsidiary of Rakuten Group and Rakuten Securities Holdings. Rakuten Group then announced on October 1, 2026 that its fintech reorganization had taken effect that day, making Rakuten Card and Rakuten Securities Holdings consolidated subsidiaries of Rakuten Bank. The May 20, 2026 disclosure by Mizuho FG, Mizuho Bank and Rakuten Bank says the business alliances between Mizuho and Rakuten Card and Rakuten Securities do not change after the reorganization. It also says Mizuho Bank was expected to become a major shareholder of Rakuten Bank with 10.52% of the voting rights through the same transaction.
:::

:::pull
Rakuten and Mizuho sit side by side on the shareholder register. In October 2026, Rakuten Bank moved into the parent's position as well. For an online broker, that is an unusually tangled ownership picture.
:::

::scorecard

## UX analysis

The core of the Rakuten Securities experience sits before the trading screen: a Rakuten member can start investing with the payment method they already use. The conditions on free trading, meanwhile, show how the company thinks about execution.

- **Pull monthly investing onto Rakuten payments**. The results briefing says that, as of the end of June 2026, 93.1% of people with a fund savings plan used a Rakuten Group payment method (Rakuten Card, Rakuten Pay balance, Rakuten Bank and others). The official pages say card investing runs from ¥100 to ¥100,000 a month and Rakuten Pay balance payment up to ¥50,000 a month, and both work in NISA.
- **Points vary by card type**. The points guide lists 0.5% for Rakuten Card, 0.75% for the Gold card, 1% for the Premium card and 2% for the Black card. For funds with an agent fee of 0.4% a year or more including tax, cards other than Black also earn 1%. A notice of September 28, 2026 says that from January 2027 purchases the Black card will earn 3.2% if the previous year's shopping spend was ¥4 million or more and 2.0% if it was less.
- **Points buy a wide range of products**. Points earned across Rakuten Group can be used at one point to the yen to buy funds, Japanese stocks (cash), US stocks (yen settlement) and binary options. The point program page says 95% of customers choose the Rakuten Point course. The results briefing says 63.8% of active accounts earned or used points.
- **Using the broker feeds back into shopping rewards**. Buying ¥30,000 or more of funds a month with points adds 0.5x to Rakuten Ichiba's SPU reward program, and US stocks (yen settlement) add another 0.5x on the same condition. The Rakuten Point course and Money Bridge must both be set. Investing and shopping sit inside the same membership ladder.
- **Give bank balances a reason through interest**. Money Bridge, which links accounts with Rakuten Bank, had 6.8 million users, a 47.7% usage rate and ¥6.6 trillion in those users' ordinary deposits (results briefing). The official page says the preferential rate as of November 2, 2026 was 0.58% a year on deposits up to ¥10 million and 0.52% a year above that (both before tax).
- **Add small-money entry points**. Kabu Mini, for odd-lot trading, is used by 37.2% of those trading Japanese stocks in cash. Kabu Pita, a NISA-only service launched in July 2025, lets customers specify amounts from ¥100 in ¥1 steps. In January to June 2026, 82.9% of new account holders said they had no investing experience.

:::fact
The condition for free trading differs in form from its rival's. The official fee pages say the Zero Course makes internet trading in Japanese stocks (cash and margin) free regardless of trade size, and that use of the company's designated SOR orders is in principle required (except for orders from designated tools and order types). To set the Zero Course, customers must understand and agree to SOR and R-Cross. R-Cross is the company's internal trading system (a dark pool), which matches investors' orders and, when opposing orders exist, sends them to the exchange's off-floor market (ToSTNeT) for execution. The SOR page says it connects to up to four markets, the Tokyo Stock Exchange, JAX PTS, Japannext PTS and R-Cross, and that a monthly report on price improvement is published by an outside firm, QUICK Corp. Alongside the Zero Course, the per-trade Super Discount Course and the flat daily course remain. Orders placed through an operator start at ¥3,795 including tax.
:::

:::fact
In NISA, the official page says trading commissions are free on Japanese stocks and ETFs, US stocks and overseas ETFs (Chinese and ASEAN stocks are not covered, and Kabu Mini and Kabu Pita carry a separate spread). In taxable accounts, US stocks cost 0.495% of the trade value including tax, capped at US$22 including tax. Buying in yen adds a 25 sen per dollar foreign exchange fee built into the rate. Using the Japan Securities Dealers Association's tally of ten brokers as of the end of June 2026, the company shows a share of 39.9% of NISA accounts and 38.7% of purchases. NISA purchases in January to June 2026 were about ¥4.0 trillion, 68% of it in the growth quota. For Kodomo NISA, which starts in January 2027, the company said it would begin accepting account applications in October 2026.
:::

:::guess
The Zero Course's requirement to agree to SOR and R-Cross appears aimed at gathering orders onto execution routes the company designed, in exchange for free trading. Reading this purely as a company convenience would be one-sided, though. The official explanation says SOR aims to send orders to PTS venues at prices better than or equal to the Tokyo Stock Exchange's best quote, and an outside firm's report is published. It can also be read as a mechanism with room for price improvement for customers. How much it delivers has to be checked individually in the reports available after login.
:::

:::fact
The weak spot in the experience came to the surface in the 2025 unauthorized access cases. The company's compensation policy (2025-07-25, updated 2026-02-18) says that, for the cases that began at the end of 2024, an internal investigation found no leak of IDs, passwords or trading PINs from its systems and no outflow of assets, and that it understands login details were improperly obtained and misused through phishing and malware. While saying such trades fall under the exemptions in its terms, it cited its social responsibility as a financial institution and set out a policy of compensating, as a baseline, 50% of the loss in cash, refunding trading commissions and paying a flat ¥10,000 consolation payment. Fraudulent sales of securities the customer already held are excluded from the loss calculation but qualify for the consolation payment. The company also wrote that it regretted not having sufficiently communicated the importance and use of its emoji-based additional login authentication, introduced in 2021.
:::

:::fact
Countermeasures followed. The results briefing shows risk-based authentication introduced from March 2025, the emoji additional login authentication made mandatory across all channels on June 1, 2025, a Cybersecurity Division created on October 1, 2025, and passkeys (FIDO2) introduced for all customers and channels on October 26, 2025. Since June 2026 passkeys have been made mandatory in stages. Once a passkey is set, login with ID and password can no longer be used alongside it. The compensation policy says no similar access or damage had been confirmed since early May 2025 after those measures. The impact shows in the earnings report: ¥858 million in compensation payments was booked as an extraordinary loss in FY12/2025.
:::

:::fact
In a separate matter, the company announced on October 31, 2026 that NTT Data, which provides an outside service used for benefit applications on its "digital benefit bonds," had reported unauthorized access to a system run by NTT Data's contractor, and that information on some customers who bought three bond issues, 362 cases in total, may have been taken. The company says its own systems were not accessed, that it was told login IDs, passwords and information needed for trading were not included, and that at the time of the announcement no unauthorized access or trading attributable to the matter had been confirmed. The cause is under investigation.
:::

## Tech stack

::techstack

Rakuten Securities does not publish its trading architecture in one place. What can be confirmed comes from its system disclosure page, job postings, earnings documents and our own observation.

:::fact
The system disclosure page, with measurement data (dated September 29, 2026 when we checked), separates servers by role: web and application servers for web and mobile (including iSPEED), application servers for the desktop trading tool, database servers storing price and text information, and business database servers storing customers' balance, order and execution data. The business databases are divided into Set 1 through Set 6. The difference between the sets is not stated.
:::

:::fact
The infrastructure engineer posting says one department oversees everything from core databases such as Oracle Exadata to a growing cloud environment. Its main tech stack lists AWS, Azure, Google Cloud, VMware, Oracle (Exadata), MySQL, PostgreSQL, Redis, Terraform, Ansible, Jenkins, GitHub Actions, Docker and Kubernetes. The stated duties include optimizing and modernizing the hybrid cloud environment, moving away from manual operations and pushing IaC and automation.
:::

:::fact
In our observation (2026-11-02), www.rakuten-sec.co.jp returned server-timing: ak_p and served its HTML in UTF-8. The top page loaded jQuery 4.0.0 from the site's own path and also loaded scripts from Rakuten Group's shared jp.rakuten-static.com. The member-facing member.rakuten-sec.co.jp returned server: Apache. Its robots.txt excludes some paths under /ITS/ from crawlers.
:::

:::fact
Desktop trading tools come as separate products. The official site says MARKETSPEED II supports Windows only, with MARKETSPEED for Mac as a separate product. On smartphones there is iSPEED for trading and iGrow for asset building. With Mizuho Securities, the company developed a system for jointly using Rakuten Securities' UI/UX, covering online changes to customer details in December 2024 and fully online account opening in February 2026 (results briefing, company history).
:::

:::guess
Taken together, the six business database sets and the use of Exadata for core databases suggest that customer balances and orders appear to be processed across several sets rather than one giant database. The basis for the split is not published, so this remains a guess. The job posting's wording suggests a move toward a two-layer structure that protects core reliability with databases closer to on-premises while building new services on cloud and containers. With Japanese stock trading value up 133.3% year on year to ¥180.4 trillion in April to June 2026, updating the foundation is presumed to be less about adding features than about coping with ever-growing load.
:::

## Business model

Rakuten Securities' revenue divides broadly into flow, tied to trading, and stock, tied to balances. The company publishes figures on this split itself.

:::fact
The Q3 notice breaks down January to September 2026 operating revenue of ¥165,978 million into ¥74,343 million in financial income, ¥32,089 million in trading gains, ¥24,221 million in brokerage commissions, ¥23,246 million in other commissions and other items. Financial income is 44.8% and brokerage commissions 14.6% (our calculation). After ¥17,751 million in financial expenses, net operating revenue was ¥148,226 million. On the balance sheet, margin loans reached ¥1,627,087 million at the end of September 2026, up from ¥1,139,816 million at the end of December 2025.
:::

:::fact
The results briefing's revenue diversification chart compares January to June 2023 with January to June 2026: stocks fell from 29.6% to 18.2%, while funds rose from 17.0% to 19.7% and financial income from 32.5% to 44.1%. In April to June 2026, stock revenue was ¥28.1 billion (up 67.8% year on year), covering 89.3% of ¥31.5 billion in selling and administrative expenses. The briefing defines stock revenue as income tied to balances or calendar days, such as fund agent fees and net financial income. On free commissions, the FY12/2025 briefing says the decline in trading commissions was offset by the increase in commission income, and operating income rose from ¥28.5 billion in 2023 to ¥44.5 billion in 2025. The operating margin in April to June 2026 was 35.9%.
:::

:::fact
Costs have a distinct shape too. Of ¥102,833 million in selling, general and administrative expenses in FY12/2025, transaction-related expenses were ¥61,182 million, or 59.5%. Personnel was ¥8,201 million, advertising ¥11,919 million (shown as a line within transaction-related expenses in the document), office expenses ¥15,806 million and depreciation ¥11,612 million (shares are our calculation). In January to June 2026, transaction-related expenses were ¥38,607 million, up 35.3% year on year.
:::

:::fact
Margin interest is the line supporting revenue behind free commissions. The official page gives a buyer's rate for Japanese stocks of 2.80% a year on standardized margin (preferential 2.28%) and 2.80% on negotiated margin (preferential 2.10%), with 0.00% for same-day Ichinichi margin. The basic stock lending fee is 1.10% a year. The results briefing says financial income in April to June 2026 was ¥25.87 billion, of which ¥12.74 billion came from margin and ¥13.13 billion from elsewhere, and that better treasury income from rising interest rates contributed.
:::

:::fact
In funds, related revenue in April to June 2026 was ¥7.4 billion (up 64.3% year on year), with 7.12 million holders, ¥317.1 billion a month in savings plan settings and 78.7% of holders on a plan. Customers through IFAs numbered 244,000, with ¥3.0 trillion in assets. The three robo-advisers totaled ¥390 billion. For the upper end, the company plans a full launch next spring of Star CLUB, combining online service with staff consultants for the upper-mass-affluent and above. Balance-based points are limited to six eligible funds, including the Rakuten Plus series. Other funds fall under a separate scheme that pays when a balance first reaches set levels.
:::

:::fact
The official affiliate program page names LinkShare and TG Affiliate as partners and says rewards are paid according to the number of account applications. There is a review, and a notice warns anyone not registered as a sales representative against soliciting securities trades or explaining individual products. The reward amount is not on that page.
:::

:::guess
Transaction-related expenses approaching 60% of the total appear to reflect a business that pays variable costs around customer acquisition, exchanges, information and payments rather than carrying staff. The public documents did not let us confirm the details, but payments to IFAs and costs tied to Rakuten Group's payments and points may sit here. If so, costs rise with revenue, while from the group's standpoint part of those costs becomes income at another Rakuten company. Rakuten Securities' standalone margin alone is presumed not to capture the value the group gets through monthly investing.
:::

:::guess
Mizuho's 49% appears to mean more than an added source of capital. Rakuten gathers younger customers and small monthly investing, with 58.0% of new account holders in their thirties or younger. Mizuho has corporate clients, IPO and bond underwriting and face-to-face consulting. Tie-ups across IFAs, workplace NISA, IPOs and balance display in Mizuho Bank's app read as a design to keep customers inside when their assets grow and they start needing advice. Yet the October 2026 reorganization placed the holding company under Rakuten Bank, and Mizuho Bank also becomes a Rakuten Bank shareholder. Public documents do not yet show how the division of roles between Rakuten and Mizuho will change.
:::

:::guess
The strength and weakness of this model sit in the same place. Riding Rakuten's payment network brings monthly investing in automatically and builds balances, and that is how stock revenue reached nearly 90% of selling and administrative expenses. But close to half of financial income is tied to margin trading, and the 2026 numbers were made with the Nikkei near record highs and the Bank of Japan raising rates. Some of the appeal can also change with a single condition inside Rakuten Group, such as a card's point rate. Monthly investing kept growing after the 2022 point rate revision, which shows resilience, but how much margin balances and financial income would survive a cold market is presumed to be untested.
:::

Rakuten Securities looks less like a brokerage than like the department of the Rakuten ecosystem that handles where spare money goes. People pay by card, buy with points, park cash at the bank and find a balance building up. On top of that, commissions went to zero and profit rose. On the capital side, though, this company no longer belongs to Rakuten alone. Mizuho's advisers and underwriting and Rakuten Bank's deposits have entered the same picture. After free trading, the question is who, inside this tangled ownership, ends up looking after customers' money all the way through.
