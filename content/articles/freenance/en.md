---
service: "FREENANCE"
title: "Free Accounts and Free Insurance In, 3–10% Same-Day Factoring Out — Why freee Paid ¥1.1 Billion for FREENANCE, a ¥450 Million Business With ¥1.38 Billion of Negative Equity"
description: "FREENANCE is a \"money and insurance\" service for freelancers and sole proprietors in Japan. GMO Creators Network launched it in October 2018, and it became a wholly owned subsidiary of freee in September 2025. Its design uses a free collection account and free liability insurance as the entrance and earns its money from a 3–10% fee on same-day payment, which buys members' unpaid invoices (factoring). This article dissects that design from the official site, the terms of service, the pricing page, GMO Pepabo's timely disclosures, announcements from freee and GMO, patent publications, and this site's own observations. It also reads the ¥1.1 billion price put on a company with ¥450 million in sales and negative net assets of ¥1.38 billion for the year ended December 2024, and where its ¥2.5 billion of borrowings went."
lead: "The account is free. So is the insurance. There is no price tag at FREENANCE's front door. The price appears when you turn an invoice into cash instead of waiting for it: 3–10% off the face value, paid out as soon as the same day. After seven years inside the GMO group, the service passed to freee in September 2025 for ¥1.1 billion. Sales for the year ended December 2024 were ¥450 million and net assets at year end stood at minus ¥1.38 billion, and four months before the sale ¥2.5 billion of borrowings had been moved to the parent company's side. This article dissects what a tax-filing software company paid for when it bought a freelancer's \"entrance for money\"."
category: saas
tags: [fintech, factoring, insurance, freelance, small-business, subscription]
publishedAt: "2026-10-01"
updatedAt: "2026-10-01"
lastVerified: "2026-10-01"
serviceUrl: "https://freenance.net/"
affiliate:
  url: "https://px.a8.net/svt/ejp?a8mat=4BE68S+9U8XPU+47L8+614CY"
  program: "FREENANCE Affiliate Program (A8.net)"
  impressionUrl: "https://www12.a8.net/0.gif?a8mat=4BE68S+9U8XPU+47L8+614CY"
vendor: "freee K.K."
origin: "JP"
heroTheme: "freenance"
scores: { product: 3.5, ux: 3.5, tech: 3.0, business: 3.0 }
techStack:
  - layer: "FREENANCE account (virtual account for payment collection)"
    name: "GMO Aozora Net Bank virtual accounts"
    confidence: confirmed
    evidence: "Article 6 of the terms of service (last updated 2025-10-01) refers to the case where \"GMO Aozora Net Bank, which provides the FREENANCE account, suspends or restricts use of the account\", and the definitions call the FREENANCE account \"a virtual account assigned to each member\". The official FREENANCE account page says the account is opened in the member's own name, that members who registered on or after March 26, 2026 have \"/ﾌﾘｰﾕｰｻﾞｰ\" appended to the account name, and that transfers run every weekday when the member's main bank is GMO Aozora Net Bank"
    evidenceUrl: "https://freenance.net/terms-of-service"
  - layer: "Credit score (what sets the same-day payment fee)"
    name: "In-house credit score (account deposit history + Moneytree MT LINK)"
    confidence: confirmed
    evidence: "The official FAQ \"How do I raise my credit score?\" states that deposits into the FREENANCE collection account affect the score the most, that linking Moneytree's MT LINK also raises it, and that links with cloud accounting services are planned. Another FAQ says a higher score lowers the same-day payment fee"
    evidenceUrl: "https://freenance.net/archives/faq/140/"
  - layer: "Factoring mechanism (patents)"
    name: "JP Patents 6816062 / 7178521 (filed by GMO Creators Network)"
    confidence: confirmed
    evidence: "Claim 1 of JP Patent 6816062 on Google Patents (filed June 8, 2018, patent gazette issued January 20, 2021, applicant GMO Creators Network) is a device that stores a separate purchase account for each user, checks whether the payee named on an invoice is that account, and if so remits a purchase amount based on the invoiced amount to the user's own bank account. The specification describes the purchase account as a so-called virtual account and, as an embodiment, tables holding credit scores, ratings, and transaction limits for both users and their clients. JP Patent 7178521 (filed February 28, 2022 as a divisional of No. 7033644, patent gazette issued November 25, 2022) accepts a link setting with accounting software and lets the user apply for the purchase of an invoice chosen from a list fetched from that software. The official Patents and Trademarks page lists three patents, these two plus No. 7033644, and registered trademarks for FREENANCE, Factoring API, and 即日払いAPI (same-day payment API)"
    evidenceUrl: "https://patents.google.com/patent/JP6816062B2/ja"
  - layer: "Receivables management and collection"
    name: "Lecto Platform"
    confidence: confirmed
    evidence: "An announcement by Lecto Inc. on PR TIMES (2026-07-30) states that FREENANCE by freee introduced the Lecto Platform to strengthen its receivables management, using automated collection outreach by email, SMS, and IVR, communication rules per debtor group, a single store for receivables data and negotiation records, and dashboards showing progress"
    evidenceUrl: "https://prtimes.jp/main/html/rd/p/000000062.000074780.html"
  - layer: "Insurance underwriting"
    name: "Sompo Japan (liability) / Aioi Nissay Dowa (income protection)"
    confidence: confirmed
    evidence: "The official Anshin Hosho page names Sompo Japan Insurance Inc. as the underwriter and marks the content as applying to policies starting October 15, 2025 (accidents up to October 14 are covered on a separate page). The page for the income protection plan, Anshin Hosho Plus, names Aioi Nissay Dowa Insurance as the underwriter and says premiums are 44% lower than an individual policy through a group arrangement that requires joining the Freelance AWS Association"
    evidenceUrl: "https://freenance.net/anshin"
  - layer: "Hosting of the member app (my.freenance.net)"
    name: "Google Cloud (Google Front End)"
    confidence: likely
    evidence: "In this site's own observation (2026-10-01), responses from my.freenance.net carried server: Google Frontend and via: 1.1 google and advertised HTTP/3 via alt-svc. The host resolved to 34.110.174.128, in Google Cloud's global load balancing range. Without a session, /plans and / redirected to /login, and the cookie was an SID set as HttpOnly; Secure; SameSite=None"
  - layer: "Member app frontend"
    name: "React + Vue.js 2.5.17 + jQuery UI 1.11.4 (webpack bundles)"
    confidence: likely
    evidence: "In this site's own observation (2026-10-01), the login page loaded two bundles: /bundle.js (about 2.4 MB, containing the strings Vue.js v2.5.17, jQuery, and webpack) and /bundle-v2.js (about 420 KB, containing React and Axios strings), along with the jQuery UI 1.11.4 stylesheet, Google reCAPTCHA, and Google Tag Manager (GTM-W3H38KV). Sign-in options were email, LINE, Facebook, and Google"
  - layer: "Marketing site (freenance.net)"
    name: "WordPress (custom theme + All in One SEO 4.3.1.1) on Apache, GMO Internet Group IP space"
    confidence: likely
    evidence: "In this site's own observation (2026-10-01), the freenance.net HTML contained more than 20 paths to wp-content/themes/freenance and a generator meta for All in One SEO (AIOSEO) 4.3.1.1, and the response headers included server: Apache and x-cache. The A record was 157.7.44.184, whose whois netname is interQ with descr GMO Internet Group, Inc. Even after the move to freee, the footer loaded scripts from cache.img.gmo.jp and linked to GMO group services"
  - layer: "Analytics and ad tags"
    name: "GTM + GA4 + Microsoft Clarity + LINE Tag + Meta Pixel + Pinterest / LinkedIn / Yahoo! Ads tags + b→dash + AdMatrix + IM-UID + User Insight"
    confidence: likely
    evidence: "In this site's own observation (2026-10-01), loading the plan selection page (my.freenance.net/signup/registPlan) triggered requests to Google Ads (googleadservices.com, doubleclick.net), GA4 (analytics.google.com), clarity.ms, LINE Tag, connect.facebook.net, ct.pinterest.com, px.ads.linkedin.com, apm.yahoo.co.jp, bat.bing.com, s.adroll.com, smart-bdash.com, admatrix.jp, im-apps.net, nakanohito.jp, and others. The login page also loads maftag.js from r.moshimo.com (Moshimo Affiliate's conversion tag), and the top page loads tags from link-ag.net and smaad.net"
sources:
  - label: "FREENANCE official: Top page"
    url: "https://freenance.net/"
    accessedAt: "2026-10-01"
  - label: "FREENANCE official: Same-day payment (Sokujitsu-barai)"
    url: "https://freenance.net/sokujitsu"
    accessedAt: "2026-10-01"
  - label: "FREENANCE official: Anshin Hosho (liability insurance)"
    url: "https://freenance.net/anshin"
    accessedAt: "2026-10-01"
  - label: "FREENANCE official: Anshin Hosho Basic"
    url: "https://freenance.net/anshin-basic"
    accessedAt: "2026-10-01"
  - label: "FREENANCE official: Anshin Hosho Plus (income protection)"
    url: "https://freenance.net/shotoku"
    accessedAt: "2026-10-01"
  - label: "FREENANCE official: FREENANCE account"
    url: "https://freenance.net/bankaccount"
    accessedAt: "2026-10-01"
  - label: "FREENANCE official: Payment link"
    url: "https://freenance.net/payment-link"
    accessedAt: "2026-10-01"
  - label: "FREENANCE official: Virtual office"
    url: "https://freenance.net/virtual-office"
    accessedAt: "2026-10-01"
  - label: "FREENANCE official: Business model"
    url: "https://freenance.net/business-model"
    accessedAt: "2026-10-01"
  - label: "FREENANCE official: For companies"
    url: "https://freenance.net/for-employer"
    accessedAt: "2026-10-01"
  - label: "FREENANCE official: Friend invitation program"
    url: "https://freenance.net/affiliate"
    accessedAt: "2026-10-01"
  - label: "FREENANCE official: Patents and trademarks"
    url: "https://freenance.net/ip"
    accessedAt: "2026-10-01"
  - label: "FREENANCE official: Terms of service (last updated 2025-10-01)"
    url: "https://freenance.net/terms-of-service"
    accessedAt: "2026-10-01"
  - label: "FREENANCE official: Membership plan selection (pricing)"
    url: "https://my.freenance.net/signup/registPlan"
    accessedAt: "2026-10-01"
  - label: "FREENANCE official FAQ: Is there a maximum amount for same-day payment?"
    url: "https://freenance.net/archives/faq/3850/"
    accessedAt: "2026-10-01"
  - label: "FREENANCE official FAQ: How do I raise my credit score?"
    url: "https://freenance.net/archives/faq/140/"
    accessedAt: "2026-10-01"
  - label: "FREENANCE official FAQ: What are the benefits of a higher credit score?"
    url: "https://freenance.net/archives/faq/138/"
    accessedAt: "2026-10-01"
  - label: "FREENANCE official news: Revision of the terms of service (2026-09-04)"
    url: "https://freenance.net/archives/news/5401/"
    accessedAt: "2026-10-01"
  - label: "FREENANCE official news: freee starts a business alliance with Extreme (2026-09-10)"
    url: "https://freenance.net/archives/news/5411/"
    accessedAt: "2026-10-01"
  - label: "FREENANCE official news: Rental space discount coupons launched (2025-10-01)"
    url: "https://freenance.net/archives/news/5055/"
    accessedAt: "2026-10-01"
  - label: "PR TIMES (freee K.K.): GMO Creators Network joins the group as a wholly owned subsidiary of freee (2025-07-22)"
    url: "https://prtimes.jp/main/html/rd/p/000001840.000006428.html"
    accessedAt: "2026-10-01"
  - label: "GMO Pepabo, Inc.: Notice of change in consolidated subsidiary (share transfer) (2025-07-22)"
    url: "https://ssl4.eir-parts.net/doc/3633/tdnet/2657970/00.pdf"
    accessedAt: "2026-10-01"
  - label: "GMO Pepabo, Inc.: (Progress of disclosed matter) Completion of the share transfer of a consolidated subsidiary (2025-09-01)"
    url: "https://ssl4.eir-parts.net/doc/3633/tdnet/2683086/00.pdf"
    accessedAt: "2026-10-01"
  - label: "PR TIMES (GMO Internet Group): FREENANCE same-day payment passes 300,000 cumulative applications (2024-05-30)"
    url: "https://prtimes.jp/main/html/rd/p/000004422.000000136.html"
    accessedAt: "2026-10-01"
  - label: "PR TIMES (GMO Internet Group): FREENANCE byGMO factoring passes 50,000 cumulative applications (2022-01-26)"
    url: "https://prtimes.jp/main/html/rd/p/000003459.000000136.html"
    accessedAt: "2026-10-01"
  - label: "PR TIMES (GMO Internet Group): FREENANCE byGMO starts LINE integration on March 5 (2025-03-05)"
    url: "https://prtimes.jp/main/html/rd/p/000004753.000000136.html"
    accessedAt: "2026-10-01"
  - label: "PR TIMES (Lecto Inc.): FREENANCE by freee introduces the Lecto Platform to strengthen receivables management (2026-07-30)"
    url: "https://prtimes.jp/main/html/rd/p/000000062.000074780.html"
    accessedAt: "2026-10-01"
  - label: "PR TIMES (freee K.K.): freee surveys freelancers on cash flow (2025-12-12)"
    url: "https://prtimes.jp/main/html/rd/p/000001963.000006428.html"
    accessedAt: "2026-10-01"
  - label: "Google Patents: JP Patent 6816062, information processing device, information processing method, and program"
    url: "https://patents.google.com/patent/JP6816062B2/ja"
    accessedAt: "2026-10-01"
  - label: "Google Patents: JP Patent 7178521, information processing method, program, and information processing device"
    url: "https://patents.google.com/patent/JP7178521B2/ja"
    accessedAt: "2026-10-01"
  - label: "freee K.K.: Earnings presentation for the fiscal year ended June 2026 (2026-08-13)"
    url: "https://contents.xj-storage.jp/xcontents/AS08692/97bc7144/e317/47ab/926b/998554b4c0e4/20260814105745837s.pdf"
    accessedAt: "2026-10-01"
---

A freelancer's invoice can take a month or more to turn into money. FREENANCE is the company that put a price on that gap. Change the payee on your invoices to a dedicated account in your own name, and you get free liability insurance and the option to turn an invoice into cash the same day at 3–10% off its face value. It started inside the GMO group in 2018 and became part of [freee](/en/articles/freee) in autumn 2025. This article reads where a service that gives away its account and its insurance makes money, and what price was put on it.

## Service overview

FREENANCE is a "money and insurance" service for freelancers and sole proprietors in Japan. It has three pillars: the FREENANCE account, a collection account members name as the payee on their invoices; Anshin Hosho, liability insurance attached to every member for free; and same-day payment (sokujitsu-barai), which buys an invoice (an account receivable) and pays out as soon as the same day. Around them sit income protection insurance, a payment link that adds card payment to an invoice, and virtual offices in Ginza and Fukuoka.

:::fact
According to a GMO Internet Group announcement (2022-01-26), FREENANCE launched in October 2018. According to GMO Pepabo's timely disclosure (2025-07-22), the operator, GMO Creators Network, Inc., was founded on April 30, 2002, had ¥100 million in capital, was headquartered in Cerulean Tower in Sakuragaokacho, Shibuya, and was 100% owned by CN Inc., a consolidated subsidiary of GMO Pepabo. On July 22, 2025, GMO Pepabo approved an agreement to transfer all 3,833 shares to freee K.K., and GMO Pepabo's notice of September 1, 2025 reported the transfer as completed that day. The terms of service (last updated 2025-10-01) name freee K.K. as the provider, and the official site calls the service "FREENANCE by freee".
:::

:::fact
According to the official plan selection page (as of 2026-10-01, tax included), there are three plans. Free costs ¥0 a month and includes a business account in your own name or trade name, same-day payment, coverage for accidents during work (up to ¥50 million), and 10% off rental spaces. Regular costs ¥590 a month on monthly billing (¥7,080 a year) or the equivalent of ¥490 a month on annual billing (¥5,880 a year). Premium costs ¥1,200 a month on monthly billing (¥14,400 a year) or the equivalent of ¥980 a month on annual billing (¥11,760 a year). Both paid plans come with a 30-day free period and add professional error coverage (up to ¥5 million, covering data leaks, copyright infringement, defects in deliverables, delivery delays, and more), immediate eligibility for income protection, card payment on invoices (payment link fee of 3.93% on Regular and 3.43% on Premium), and 20% off rental spaces. Premium also includes the Light plan of the virtual office. The page notes that the membership fee can be deducted as a business expense.
:::

:::fact
According to the official same-day payment page and the terms of service, same-day payment is a service in which FREENANCE buys all or part of an unpaid invoice (account receivable) that the member issued to a client and, in principle, pays the purchase price the same day. The fee is 3% to 10% of the invoice's face value and falls the more the member uses the FREENANCE account. If approval comes by 4:30 p.m., the money arrives that day; later approvals are paid the next business day. Only invoices to corporate clients qualify; transactions between individuals cannot be used. According to the official FAQ, even first-time users can apply for any amount from ¥10,000 with no upper limit and no cap on the number of uses, and can apply for part of an invoice and the rest later. Every application is screened, however, and approval for the full amount requested is not guaranteed.
:::

:::pull
The entrance is free. The price tag appears only when you turn an invoice into cash: 3–10% off the face value, paid out the same day.
:::

::scorecard

## UX analysis

The FREENANCE experience comes down to a single move: changing the payee on your invoices. Once payments flow into the dedicated account, the insurance, the screening for same-day payment, and the fee discounts all follow from the deposit history that account builds up.

- **The first step is "change your account".** According to the official FREENANCE account page, the account is in your own name and free to maintain. A trade name or pen name can be used, but a copy of your business start notification is required. Payments that arrive are transferred to your main bank once a week (Friday), on the last and first business days of the month, and on the business day of the 15th; if your main bank is GMO Aozora Net Bank, transfers run every weekday. Transfer fees are paid by the operator. Put the other way, unless you change your account you can use very little of what FREENANCE offers, and you accept a lag before payments reach your own bank.
- **Credit builds from deposit history.** According to the official FAQ, deposits into the FREENANCE account affect the credit score the most, and linking Moneytree's MT LINK also raises it. A higher score lowers the same-day payment fee. According to GMO's announcement (2025-03-05), linking a LINE account raises the score as well. The design builds credit from the money flowing through your own account rather than from a credit bureau.
- **Invisible to clients, but the terms keep an exception.** The same-day payment page says your client will not learn that you sold the invoice. Article 8 of the terms, however, grants the operator authority to notify the client of the assignment of the receivable on the member's behalf and to demand payment directly when, for example, payment is late or refused or the member's representations prove untrue. On September 10, 2026, paragraphs 3–6 of Article 8-2 (special provisions for same-day payment) and paragraph 2 of Article 14 were revised.
- **Identity checks are on the strict side.** According to the page for companies, members must submit a photo ID and a selfie holding it at registration, and are checked against an anti-social forces database. Members who pass can show clients a "member page" by QR code or URL. According to the same-day payment page, identity verification usually finishes within 120 minutes, and same-day payment screening results arrive at the registered email address.
- **Insurance is "included", but the scope needs reading.** According to the Anshin Hosho Basic page, the free coverage is up to ¥50 million for accidents during work and for the results of work (product liability), and up to ¥1 million for entrusted property. The deductible is ¥200,000 across all three, and the work-results and entrusted-property coverages share a cap of ¥500 million per period across all members combined. Mistakes of your own, such as data leaks, copyright infringement, or delivery delays, are covered up to ¥5 million only under the paid plans' Anshin Hosho. The line between free and paid is drawn by the type of incident.

## Tech stack

::techstack

:::fact
JP Patent 6816062 on Google Patents (filed June 8, 2018, patent gazette issued January 20, 2021, applicant GMO Creators Network, inventor 次松武大) claims the skeleton of FREENANCE itself. Claim 1 stores a separate purchase account for each user, checks whether the payee named on an invoice is that account, and if so remits a purchase amount based on the invoiced amount to the user's own bank account. Claim 2 covers collection, where the invoiced amount paid by the client into that account is moved to the operator's account, and claim 4 covers paying a set guaranteed amount if the payment deadline passes without the client paying before the purchase amount was sent. The specification calls the purchase account a "so-called virtual account" and, as an embodiment, describes tables holding credit scores, ratings, and transaction limits for both users and their clients. JP Patent 7178521 (filed February 28, 2022 as a divisional of No. 7033644, patent gazette issued November 25, 2022) accepts a link setting with accounting software, shows a list of invoices fetched from that software, and applies for the purchase of a chosen invoice for an amount based on its total. Its dependent claims include showing the remaining purchasable amount after subtracting past purchases from a per-user transaction ceiling and accepting the client's corporate number. The specification states the aim as making factoring, which had mainly been used between companies, available to individuals. The official Patents and Trademarks page lists three patents including these, and registered trademarks for FREENANCE, Factoring API, and 即日払いAPI (same-day payment API).
:::

:::fact
In this site's own observation (2026-10-01), the member app my.freenance.net returned server: Google Frontend and via: 1.1 google, while the marketing site freenance.net ran on Apache at an IP address belonging to GMO Internet Group (whois netname interQ), with HTML containing the WordPress theme "freenance" and All in One SEO 4.3.1.1. The login page loads two bundles: /bundle.js, which contains the strings Vue.js 2.5.17, jQuery, and webpack, and /bundle-v2.js, which contains React and Axios. According to an announcement by Lecto Inc. on PR TIMES (2026-07-30), receivables management runs on the Lecto Platform, using automated collection by email, SMS, and IVR, a single store for receivables data and negotiation records, and dashboards. Anshin Hosho is underwritten by Sompo Japan (for policies starting October 15, 2025), and income protection by Aioi Nissay Dowa Insurance, at 44% below an individual policy through a group arrangement with the Freelance AWS Association.
:::

:::guess
Setting the patent claims next to the actual screens, the technical core of FREENANCE appears to be a single idea: using the payee account as the point where credit is observed. Because the fee is set by watching corporate payments arrive in your own account rather than by querying a credit bureau, members who keep using the account get cheaper rates, and they are likely to find it harder to leave. Vue 2.5 and React living side by side in the app is presumed to reflect a frontend from 2018 being rewritten step by step into the newer bundle (bundle-v2). With the marketing site still on GMO infrastructure a year after the sale and the app on Google Cloud, the work of moving onto freee's own platform (Kubernetes on AWS, covered in our freee article) seems to lie ahead. The Lecto rollout moves collection of purchased receivables from manual follow-up to a system, and appears to be preparation for handling more purchases under freee.
:::

## Business model

The main source of revenue is the same-day payment fee. The official "Business model" page calls it "the pillar of FREENANCE's revenue at present" and lists other sources it has planned, is considering, or has started: paid membership plans, future fees on transfer frequency or transfer charges, ads delivered to anonymized user groups, and, with the user's explicit consent, providing data to financial institutions for business loan or mortgage screening. The design gathers members with a free account and free basic insurance and recovers the cost through fees paid when cash runs short.

:::fact
According to GMO Internet Group announcements, cumulative applications for same-day payment passed 50,000 in November 2021, 100,000 in July 2022, and 300,000 in April 2024. GMO Pepabo's timely disclosure (2025-07-22) gave GMO Creators Network's results for the last three fiscal years. For the year ended December 2022, sales were ¥593.84 million, the operating loss ¥136.30 million, and the net loss ¥147.18 million. For the year ended December 2023, sales were ¥655.80 million, the operating loss ¥1,171.89 million, and the net loss ¥1,191.38 million. For the year ended December 2024, sales were ¥452.98 million, the operating loss ¥124.57 million, and the net loss ¥142.09 million. Net assets at the end of December 2024 were minus ¥1,381.88 million (total assets ¥1,212.96 million), a state of negative equity, but the same disclosure notes that this had already been resolved because the company's entire ¥2.5 billion of borrowings was transferred to CN Inc. on April 1, 2025. The transfer price was approximately ¥1.1 billion. GMO Pepabo explained the sale as "a review of the business portfolio and optimization of management resources, together with selection and concentration of businesses", while freee's announcement (2025-07-22) cited broadening its lineup for sole proprietors, who make up much of its customer base, and deeper integration between FREENANCE and freee's products.
:::

:::fact
According to freee's earnings presentation for the fiscal year ended June 2026 (2026-08-13), GMO Creators Network has been included in freee's revenue, ARR, and paying user counts since the first quarter of that fiscal year (July–September 2025). The same presentation adjusts its definition of adjusted free cash flow for "the change in purchased receivables arising in the factoring business". At the end of June 2026, freee had 694,586 paying user companies, of which 419,957 were sole proprietors (up 12.2% year on year); subscription ARR from sole proprietors was ¥8.73 billion, and annual ARPU per sole proprietor was ¥20,995. In a freee survey of 342 freelancers (2025-11-20 to 27), 86% said rising prices had affected them, 59.3% had struggled with cash flow around the New Year holidays, 62.6% had considered raising funds when short of cash over the holidays, and the methods those respondents considered were loans, factoring, and subsidies or grants, in that order.
:::

:::fact
According to the official friend invitation program page, when a member invites a friend with an invite code, a reward is earned once a corporate client pays into the friend's FREENANCE account. The inviter receives ¥2,000 each for the 1st to 10th friend, ¥2,500 for the 11th to 50th, and ¥3,000 from the 51st, and the invited friend receives ¥1,000. Beyond 100 friends, 5% of the friends' same-day payment fees is paid back to the inviter. For companies there is a partner program, "FREENANCE Tomodachi", under which members can use same-day payment at a lower-than-usual fee for transactions with that company only. According to an official notice (2026-09-10), freee formed a business alliance with Extreme, and users of Extreme Freelance can skip some verification documents, get faster screening, and receive a better-than-usual fee on same-day payment.
:::

:::guess
The reason for paying ¥1.1 billion for a loss-making company with ¥450 million in sales appears to lie not in its income statement but in the "entrance" it holds. freee has 420,000 paying sole proprietors (a count that includes FREENANCE's paid members), with annual ARPU of about ¥21,000. FREENANCE's paid plans cost ¥5,880 to ¥14,400 a year, which on their own would not lift freee's unit price much. But holding the payee account puts freee upstream of its accounting software, at the moment money comes in. Given that Patent 7178521 assumes a link with accounting software, a flow that sends invoices issued in freee's invoicing product straight into same-day payment is presumed to be the main line of integration. The ¥1.19 billion loss for 2023 is large relative to sales growth, and the disclosure gives no breakdown. It may have included costs tied to the valuation of purchased receivables, but public information does not say. Moving the ¥2.5 billion of borrowings to the parent side before the sale reads as a structure in which the buyer takes only the business and its member base, while the seller deals with the funding burden. Factoring at 3–10% is the same kind of transaction-based revenue that freee highlights in its earnings materials, and it appears aimed at adding fee income less tied to the tax season on top of tax-filing software subscriptions.
:::

The account and the insurance are free, and the price tag appears only on the days cash runs short. In seven years that design drew 300,000 applications, stayed in the red, and was priced at ¥1.1 billion. What freee bought was not profit but an "entrance for money" it can offer to 420,000 sole proprietors. A business that rides the tax-filing deadline is now trying to ride the invoice due date too.
