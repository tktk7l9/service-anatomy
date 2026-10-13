---
service: "Google Workspace"
title: "Selling Apps Used by Over 3 Billion People, One Seat at a Time — Dissecting Google Workspace Through a Price List That Defaults to the Annual Plan, Gemini Folded into the Seat and Divided by Usage Limits, Referral Fees from 850 Yen per User, and Revenue Reported Inside Google Cloud's Numbers"
description: "Google Workspace is Google LLC's bundle of apps for work, renamed from G Suite. An official blog post from April 2026 claims more than 3 billion users and more than 13 million customers. On the pricing page (checked 2026-10-13, per user per month, before tax), the Annual Plan costs 800 yen for Business Starter, 1,600 yen for Standard and 2,500 yen for Plus, and according to the Admin Help, the Flexible Plan, which can be cancelled at any time, costs 950, 1,900 and 3,000 yen. Gemini has been included in the seat since 2025, and in Starter it is limited to Gemini in Gmail and Vids, basic access to the Gemini app and a few other features. The referral program pays 850 to 2,550 yen per new user in Japan, and Alphabet reports Workspace revenue inside its Google Cloud segment (revenues of $24,768 million in Q2 2026). Using the pricing page, the Admin Help, the Google Workspace Updates blog, the referral and affiliate terms, Alphabet's earnings release and this site's own observations, the article dissects a price list that defaults to the Annual Plan, AI divided by usage limits, custom-domain email that starts with one DNS record, and the doors opened to referrers and resellers."
lead: "Open Google Workspace's pricing page and the switch labeled \"年間プラン（1 年契約なら 16% お得）\" (Annual Plan, 16% savings with a one-year contract) is already on. The prices shown, from 800 yen per user per month before tax, assume a one-year contract, and the Flexible Plan described in the Admin Help, which can be cancelled at any time, costs roughly 19 to 20% more (this site's calculation). Gemini has been part of the seat since 2025, and how much of it you can use is divided by edition and usage limits. Referrers are paid about one month of a seat's price per user (this site's calculation), and in Alphabet's earnings the revenue sits inside Google Cloud. This article dissects, from public information alone, how apps used by more than 3 billion people are sold one seat at a time."
category: saas
tags: [productivity, groupware, email, ai, google, small-business, security, subscription]
publishedAt: "2026-10-13"
updatedAt: "2026-10-13"
lastVerified: "2026-10-13"
serviceUrl: "https://workspace.google.com/intl/ja/"
# Affiliate link placeholder: Google runs two official programs for Google Workspace (checked 2026-10-13).
# 1) Referral program (https://workspace.google.com/intl/ja/referral-program/): join by entering a name
#    and email address in Google's sign-up form; a welcome email brings a personal referral link and
#    promo codes (up to 100 a year). In Japan it pays a one-time fee per new user of 850 yen (Business
#    Starter), 1,700 yen (Business Standard) or 2,550 yen (Business Plus), for up to 100 users per referred
#    account and 200 users a year, after the customer has used a paid plan for 90 days; fees are paid
#    monthly to a bank account in the same country, set up through a Google Pay payments profile.
#    Customers who enter a promo code get 10% off per user for the first year; promo codes must be
#    handed out one by one, never posted publicly. The agreement is with Google Asia Pacific Pte. Ltd.
#    (https://workspace.google.com/intl/ja/landing/partners/referral/terms/).
# 2) Affiliate program (https://workspace.google.com/intl/ja/affiliate-program/), meant for 100 or more
#    referred users a year: apply through CJ Affiliate, subject to review. The July 2026 rate list pays
#    1,020 / 2,040 / 3,060 yen per user in Japan, processed in USD through CJ. Its terms (with Google LLC)
#    require Google's prior written approval of the site, disclosure that the affiliate is paid by
#    Google, and nofollow on links; banners and offers come from CJ.
# Both agreements forbid making hyperlinks to Google web pages open a new browser window (referral
# terms section 8(b), affiliate terms section 5(b)), while AffiliateCard opens links with
# target="_blank": settle that with the owner before enabling this block. Neither program page
# publishes an ad text; if one is supplied, copy it verbatim into label. Never invent the label — ask
# the owner. Keep every field identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<google-workspace-referral-link-or-cj-tracking-link>"
#   program: "Google Workspace Referral Program"
#   label: "<verbatim text of the ad material>"
vendor: "Google LLC"
origin: "US"
heroTheme: "google-workspace"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 4.5 }
techStack:
  - layer: "Generative AI"
    name: "Gemini (Gemini in Workspace apps, Gemini app, Gemini Notebook)"
    confidence: confirmed
    evidence: "The edition comparison on the pricing page (checked 2026-10-13) lists, edition by edition, the availability of Gemini in Gmail, Docs, Sheets, Slides, Vids, Drive, Meet and Chat, the Gemini app and Gemini Notebook. The AI page states that customer data is not used to train Gemini models or to target ads"
    evidenceUrl: "https://workspace.google.com/intl/ja/pricing"
  - layer: "AI agents and automation"
    name: "Google Workspace Studio (agents and flows; webhooks, Apps Script custom steps)"
    confidence: confirmed
    evidence: "The Google Workspace Updates blog (2025-12-03, updated 2026-03-19) introduces it as the place to create, manage and share AI agents without coding, and states that agents can call external APIs through webhooks, use custom steps built with Apps Script, and connect to Asana, Jira, Mailchimp, Salesforce and others. The update says it launched to all Rapid Release and Scheduled Release domains on March 19, 2026"
    evidenceUrl: "https://workspaceupdates.googleblog.com/2025/12/workspace-studio.html"
  - layer: "Script runtime"
    name: "Google Apps Script (V8 runtime; formerly Mozilla Rhino)"
    confidence: confirmed
    evidence: "The Apps Script developer documentation (checked 2026-10-13) states that Apps Script used to run on Mozilla's Rhino interpreter, which tied it to ES5, and that it now runs on the V8 runtime that powers Chrome and Node.js, with modern JavaScript syntax and features"
    evidenceUrl: "https://developers.google.com/apps-script/guides/v8-runtime?hl=ja"
  - layer: "Document rendering"
    name: "Canvas-based rendering (Google Docs)"
    confidence: confirmed
    evidence: "The Google Workspace Updates blog (2021-05-11) states that Docs would move its rendering from an HTML-based approach to a canvas-based approach to improve performance and consistency across platforms, and recommends the Google Workspace Add-ons framework and supported APIs for custom integrations"
    evidenceUrl: "https://workspaceupdates.googleblog.com/2021/05/Google-Docs-Canvas-Based-Rendering-Update.html"
  - layer: "Inbound custom-domain email"
    name: "Gmail MX record (smtp.google.com)"
    confidence: confirmed
    evidence: "The Admin Help (checked 2026-10-13) states that the Google Workspace MX record value is smtp.google.com (priority 1) and that the older values starting with aspmx, used by domains that started before 2023, remain supported"
    evidenceUrl: "https://support.google.com/a/answer/174125?hl=ja"
  - layer: "Encryption"
    name: "Client-side encryption (CSE)"
    confidence: confirmed
    evidence: "The Admin Help (checked 2026-10-13) lists Frontline Plus, Enterprise Plus, Education Standard and Education Plus as supported editions and states that end-to-end encryption with CSE cannot be decrypted by Google's servers or third parties"
    evidenceUrl: "https://support.google.com/a/answer/10741897?hl=ja"
  - layer: "Data location"
    name: "Data regions (United States / Europe / no preference)"
    confidence: confirmed
    evidence: "The Admin Help (checked 2026-10-13) states that covered data can be stored in the United States, the European Union or with no preference, and that supported editions include Business Standard, Business Plus, Enterprise Standard and Enterprise Plus, among others"
    evidenceUrl: "https://support.google.com/a/answer/7630496?hl=ja"
  - layer: "Delivery of the official site and apps"
    name: "Google web servers (server: ESF / sffe / GSE), HTTP/3, nonce-based CSP, Trusted Types"
    confidence: likely
    evidence: "This site's own HTTP header observation (2026-10-13). The workspace.google.com home and pricing pages returned server: ESF, the referral program page returned server: sffe with last-modified, and the Updates blog and mail.google.com returned server: GSE. Every host except mail.google.com advertised HTTP/3 (h3) through alt-svc. The pricing page and docs.google.com returned a CSP with require-trusted-types-for 'script' and a nonce-based script-src"
sources:
  - label: "Google Workspace official: home page (rename from G Suite, 14-day free trial, online sign-up under 300 employees)"
    url: "https://workspace.google.com/intl/ja/"
    accessedAt: "2026-10-13"
  - label: "Google Workspace official: pricing (edition comparison, Annual Plan, discount on the first three months)"
    url: "https://workspace.google.com/intl/ja/pricing"
    accessedAt: "2026-10-13"
  - label: "Google Workspace official: AI solutions (handling of data, Gemini built into the apps)"
    url: "https://workspace.google.com/intl/ja/solutions/ai/"
    accessedAt: "2026-10-13"
  - label: "Google Workspace official: FAQ (email aliases, uptime guarantee, support)"
    url: "https://workspace.google.com/intl/ja/faq/"
    accessedAt: "2026-10-13"
  - label: "Google Workspace official: Google Workspace SLA (last modified 2026-08-31)"
    url: "https://workspace.google.com/intl/ja/terms/sla/"
    accessedAt: "2026-10-13"
  - label: "Google Workspace official: referral program (referral fees in Japan)"
    url: "https://workspace.google.com/intl/ja/referral-program/"
    accessedAt: "2026-10-13"
  - label: "Google Workspace official: referral program FAQ (promo codes, payment of referral fees)"
    url: "https://workspace.google.com/intl/ja/landing/partners/referral/faqs/"
    accessedAt: "2026-10-13"
  - label: "Google Workspace official: referral program terms (Google Asia Pacific Pte. Ltd.)"
    url: "https://workspace.google.com/intl/ja/landing/partners/referral/terms/"
    accessedAt: "2026-10-13"
  - label: "Google Workspace official: affiliate program (through CJ Affiliate)"
    url: "https://workspace.google.com/intl/ja/affiliate-program/"
    accessedAt: "2026-10-13"
  - label: "Google Workspace Affiliate Program: Commission Rates by Country (Last Updated: July 2026, PDF)"
    url: "https://storage.googleapis.com/workspace-affiliate/country-list/current_rates.pdf"
    accessedAt: "2026-10-13"
  - label: "Google Workspace Affiliate Program: terms (Japanese, PDF)"
    url: "https://storage.googleapis.com/workspace-affiliate/terms/affiliate_program_terms_ja.pdf"
    accessedAt: "2026-10-13"
  - label: "Google Workspace Admin Help: Compare Flexible and Annual/Fixed-Term payment plans"
    url: "https://support.google.com/a/answer/1247360?hl=ja"
    accessedAt: "2026-10-13"
  - label: "Google Workspace Admin Help: Business editions"
    url: "https://support.google.com/a/answer/13062337?hl=ja"
    accessedAt: "2026-10-13"
  - label: "Google Workspace Admin Help: Choose your Google Workspace edition"
    url: "https://support.google.com/a/answer/6043576?hl=ja"
    accessedAt: "2026-10-13"
  - label: "Google Workspace Admin Help: About your Google Workspace free trial"
    url: "https://support.google.com/a/answer/6388094?hl=ja"
    accessedAt: "2026-10-13"
  - label: "Google Workspace Admin Help: About AI usage limits"
    url: "https://support.google.com/a/answer/14700766?hl=ja"
    accessedAt: "2026-10-13"
  - label: "Google Workspace Admin Help: Transfer subscriptions between Google and resellers"
    url: "https://support.google.com/a/answer/7643791?hl=ja"
    accessedAt: "2026-10-13"
  - label: "Google Workspace Admin Help: Set up MX records for Google Workspace"
    url: "https://support.google.com/a/answer/174125?hl=ja"
    accessedAt: "2026-10-13"
  - label: "Google Workspace Admin Help: About client-side encryption"
    url: "https://support.google.com/a/answer/10741897?hl=ja"
    accessedAt: "2026-10-13"
  - label: "Google Workspace Admin Help: Choose a geographic location for your data"
    url: "https://support.google.com/a/answer/7630496?hl=ja"
    accessedAt: "2026-10-13"
  - label: "Google Workspace Updates: The best of Google AI, now included in Workspace Business and Enterprise plans (2025-01-15)"
    url: "https://workspaceupdates.googleblog.com/2025/01/expanding-google-ai-to-more-of-google-workspace.html"
    accessedAt: "2026-10-13"
  - label: "Google Workspace Updates: Google Workspace Studio (2025-12-03, updated 2026-03-19)"
    url: "https://workspaceupdates.googleblog.com/2025/12/workspace-studio.html"
    accessedAt: "2026-10-13"
  - label: "Google Workspace Updates: AI Expanded Access (2026-02-05)"
    url: "https://workspaceupdates.googleblog.com/2026/02/google-workspace-ai-expanded-access.html"
    accessedAt: "2026-10-13"
  - label: "Google Workspace Updates: NotebookLM is now Gemini Notebook (2026-07-16)"
    url: "https://workspaceupdates.googleblog.com/2026/07/notebooklm-now-gemini-notebook.html"
    accessedAt: "2026-10-13"
  - label: "Google Workspace Updates: Google Docs will now use canvas based rendering (2021-05-11)"
    url: "https://workspaceupdates.googleblog.com/2021/05/Google-Docs-Canvas-Based-Rendering-Update.html"
    accessedAt: "2026-10-13"
  - label: "Google Workspace blog: 10 more announcements from Google Workspace at Cloud Next '26 (2026-04-23)"
    url: "https://workspace.google.com/blog/product-announcements/10-more-announcements-workspace-at-next-2026?hl=en"
    accessedAt: "2026-10-13"
  - label: "Alphabet: Alphabet Announces Second Quarter 2026 Results (2026-07-22, earnings release PDF)"
    url: "https://s206.q4cdn.com/479360582/files/doc_financials/2026/q2/2026q2-alphabet-earnings-release.pdf"
    accessedAt: "2026-10-13"
  - label: "Google blog: Alphabet earnings call Q2 2026: Sundar Pichai remarks (2026-07-22)"
    url: "https://blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q2-2026/"
    accessedAt: "2026-10-13"
  - label: "Google for Developers: Apps Script V8 runtime overview"
    url: "https://developers.google.com/apps-script/guides/v8-runtime?hl=ja"
    accessedAt: "2026-10-13"
  - label: "Muumuu Domain official: Google Workspace (25% off the first year, Google Cloud certified partner)"
    url: "https://muumuu-domain.com/lp/google-workspace"
    accessedAt: "2026-10-13"
---

Google Workspace is Google LLC's bundle of apps for work. It packs Gmail on your own domain, Calendar, Drive, Meet, Docs, Sheets and Slides, together with Gemini's assistant, Gemini Notebook, Vids for video and Studio for automation, into one contract sold per user per month. This site has dissected the AI side built into Workspace in [Gemini](/en/articles/gemini), and another tool for working documents in [Notion](/en/articles/notion). Workspace takes Gmail and Drive, which Google also offers to the general public for free, adds a custom domain, administration, storage and AI usage limits, and puts a price on each seat. Getting a custom domain was covered in this site's dissections of [Onamae.com](/en/articles/onamae) and [Muumuu Domain](/en/articles/muumuu-domain). This article dissects, from public information alone, how the price list is built, the AI folded into the seat, the doors opened to referrers and resellers, and the revenue placed inside Google Cloud's numbers.

## Service overview

Google Workspace is sold around the Business (Starter, Standard, Plus) and Enterprise editions, with a monthly fee per user. Business can be ordered online from Google's site, while Enterprise goes through a sales representative.

:::fact
According to the FAQ on the home page (checked 2026-10-13), Google renamed the service from G Suite to Google Workspace as it made G Suite's communication and collaboration tools more integrated. The same page says "何百万もの企業が Gmail、カレンダー、ドライブ、Meet などのプレミアム バージョンを業務に活用しています" (millions of businesses use premium versions of Gmail, Calendar, Drive, Meet and more for their work), and tells organizations with fewer than 300 employees that they can sign up online and start right away, while those with more than 300 should ask sales about the Enterprise plans. An official blog post of April 23, 2026, rounding up the Google Cloud Next '26 announcements, says "Google Workspace is where work happens for over 3 billion users and more than 13 million customers," and that "over 110 million attendees have used Take Notes For Me in the last month, with a staggering 8.5x growth in this number year-over-year." According to the Admin Help, the Business editions can be used by up to 300 users and can be signed up for with a custom domain, or with only a business email address or a Gmail address (@gmail.com). A sign-up with a Gmail address gets one user account, and verifying ownership of a domain unlocks up to 300 users and custom business email addresses. Signing up for Enterprise requires a verified domain. The Business editions can also be bought from Google's sales representatives or from a local reseller.
:::

:::fact
According to the pricing page (checked 2026-10-13, per user per month, before tax), the Annual Plan costs 800 yen for Business Starter, 1,600 yen for Business Standard and 2,500 yen for Business Plus, while Enterprise requires contacting sales. The Admin Help gives the Japanese yen prices of the Flexible Plan as 950, 1,900 and 3,000 yen a month and the Annual Plan as 800, 1,600 and 2,500 yen, noting that none of them include the 10% consumption tax. The pricing page sets the storage pool shared within an organization at 30 GB per user for Starter, 2 TB for Standard and 5 TB for Plus and Enterprise Plus, caps Meet at 100, 150, 500 and 1,000 participants, and sets the maximum meeting length at 24 hours for every edition. Gemini in Starter covers Gemini in Gmail and Vids, "基本的なアクセス" (basic access) to the Gemini app and a few other features, and its cell for "各種 Workspace アプリ内の Gemini" (Gemini in Workspace apps) reads "制限あり" (limited). Standard and above include Gemini in Docs, Sheets, Slides, Drive, Meet and Chat, Google's most capable AI model for complex tasks, and "より広いアクセス" (broader access) to Gemini Notebook. Recording and noise cancellation, booking pages, and eSignatures for Docs and PDFs start with Standard; Vault and advanced endpoint management start with Plus; and data loss prevention (DLP), context-aware access, Enterprise Data Regions and S/MIME encryption are listed in the Enterprise column. 2-Step Verification and the Advanced Protection Program come with every edition. The home and pricing pages say every plan has a 14-day free trial, that Starter, Standard and Plus serve up to 300 users, and that Enterprise has neither a maximum nor a minimum number of users.
:::

:::pull
The same apps are used by more than 3 billion people, and more than 13 million customers buy seats. Workspace's pricing is the design of what draws the line between the two.
:::

::scorecard

## UX analysis

The Workspace experience takes shape at the entrance of contracts and settings, before the app screens. A switch in the price list, the trial conditions, a DNS record and AI usage limits decide the path to getting started.

- **The Annual Plan is selected from the start.** In this site's own observation (2026-10-13), the switch labeled "年間プラン（1 年契約なら 16% お得）" (Annual Plan, 16% savings with a one-year contract) came back in the pricing page's HTML with aria-checked="true", and the prices shown were the Annual Plan's 800, 1,600 and 2,500 yen. According to the Admin Help, the Annual/Fixed-Term Plan assumes at least one year of service, licenses can be reduced only at renewal, and cancelling before the renewal date bills the remaining term with no refund. The Flexible Plan lets you add and remove users at any time, charges only for the accounts that existed during the month, and can be cancelled at any time with no cancellation fee. The Annual Plan is 15.8 to 16.7% cheaper than the Flexible Plan (this site's calculation), close to the page's "16% お得" (16% savings).
- **A 14-day trial for up to 10 users, with payment details first.** According to the Admin Help, signing up starts a 14-day free trial subscription in which up to 10 users can try the features. Payment details must be set up before use, but nothing is charged during the trial, and if they are in place, the paid subscription starts automatically when the trial ends. Choosing to end the trial when adding an 11th user applies the paid subscription to everyone, and a trial that ends without payment details suspends the account. The Business editions help says the storage pool is granted in stages: only part of it at purchase, rising to the full amount once 30 US dollars of subscription fees have been paid.
- **Custom-domain email switches over with one DNS record.** According to the Admin Help, receiving custom-domain email in Gmail means setting the MX record to smtp.google.com (priority 1) in the domain registrar's system and turning on Gmail in the Admin console. The older values starting with aspmx, used by domains that started before 2023, remain supported, and a new MX record can take up to about 72 hours to be recognized. According to the FAQ, up to 30 email aliases can be added per user.
- **AI is part of the seat, divided by usage limits.** According to a January 15, 2025 post on the Updates blog, Google included AI in the Business and Enterprise plans without the need to buy an add-on. According to the Admin Help, the usage limits on generative AI features differ by edition; daily limits reset every day and monthly limits on the first of each month, both at midnight Pacific time (UTC-8), and they cannot be carried over or shared with other users. On the pricing page, generating interactive audio overviews with two AI hosts in Gemini Notebook is capped at 3 a day for Starter and 20 a day for the other editions. An add-on named "AI 拡張アクセス" (AI Expanded Access) is listed to raise those limits.
- **Names change, but links keep working.** According to a July 16, 2026 post on the Updates blog, Google renamed NotebookLM to Gemini Notebook, with automatic redirects so that existing shared notebooks and links keep working, and said mobile users may need to update their app. Features that the January 2025 post called "Gemini Advanced" and "NotebookLM Plus" are listed on the October 2026 pricing page as "Gemini アプリ" (Gemini app) and "Gemini Notebook".
- **Moving to a reseller does not move the data.** According to the Admin Help, paid subscriptions can be transferred between Google and resellers and between resellers; a transfer does not affect data or service availability and cannot be undone. Transfers to a reseller are limited to two per calendar year, bills come from the reseller from the transfer date, and a transfer in the middle of a month brings two invoices that month, one from Google and one from the reseller. After a transfer, the reseller can access the Admin console unless that access is removed.

## Tech stack

::techstack

:::fact
In this site's own observation (2026-10-13), the workspace.google.com home and pricing pages returned server: ESF, and their CSP report destinations were /_/IntegratedStaticPageMarketingUi/ for the home page and /_/DasherGrowthPricingUi/ for the pricing page. The pricing page's CSP specified require-trusted-types-for 'script' in addition to a script-src with a per-request nonce, and docs.google.com, with a CSP specifying the same, redirected with a 302 to the sign-in screen on accounts.google.com. The referral program page returned server: sffe together with last-modified (October 9, 2026) and accept-ranges: bytes, and its CSP reported to workspace-web-team on csp.withgoogle.com. The Updates blog and mail.google.com returned server: GSE. workspace.google.com, the Updates blog and docs.google.com advertised HTTP/3 (h3) through alt-svc, while mail.google.com's 301 response carried alt-svc: clear. The pricing page's HTML embeds the prices as data passed to a function called AF_initDataCallback, which held the values JP and JAPAC, each edition's Annual Plan prices in yen with their yearly totals (9,600, 19,200 and 30,000 yen), the 950, 1,900 and 3,000 yen that the Admin Help gives as Flexible Plan prices, and the discount rates and periods. The UNIX timestamps marking the edges of the discount period correspond to midnight Pacific time on October 26, 2026 and January 26, 2027 (this site's calculation).
:::

:::fact
According to a May 11, 2021 post on the Updates blog, Google would move the implementation of Docs rendering from an HTML-based approach to a canvas-based one over several months, to improve performance and consistency in how content appears across platforms. Warning that Chrome extensions relying on the HTML structure might stop working, it recommended the Google Workspace Add-ons framework and supported APIs for custom integrations. According to the Apps Script documentation, Apps Script used to run on Mozilla's Rhino, which tied it to ES5, and now runs on the V8 runtime that powers Chrome and Node.js, with modern JavaScript. Workspace Studio, announced on December 3, 2025 and launched to all Rapid Release and Scheduled Release domains on March 19, 2026, is the place to create, manage and share AI agents without coding; agents call external APIs through webhooks, use custom steps built with Apps Script, and connect to Asana, Jira, Mailchimp, Salesforce and others. According to the Admin Help, data can be stored in the United States, the European Union or with no preference, with Business Standard, Business Plus and other editions supported. Client-side encryption (CSE) is supported by Frontline Plus, Enterprise Plus, Education Standard and Education Plus, and data encrypted with CSE cannot be decrypted by Google's servers or third parties. The AI page says customer data is not used to train Gemini models or to target ads. The SLA (last modified August 31, 2026) states that "the Monthly Uptime Percentage will be at least 99.9% in any calendar month" for covered services such as Gmail, Drive and Meet, and sets service credits at 3 days below 99.9%, 7 days below 99.0% and 15 days below 95.0%.
:::

:::guess
The pricing page embedding values that appear to denote a region (JP and JAPAC) and a discount period bounded by Pacific time as data in each response reads as a design that manages prices and campaigns per country or region in one place and leaves the page only to draw them. That the discount starts exactly 14 days after this site's fetch date (October 12 in Pacific time; this site's calculation) presumably means the three-month discount is counted from the day a free trial started that day would end. The different CSP report destinations on the home page, the pricing page and the Docs home appear to show that a different application answers each page, and the referral program page alone returning last-modified is presumably because pages that change rarely are served as static files by a separate system. The 2021 move to canvas and the lineup of official extension points, Add-ons, Apps Script and Studio, read as a policy of making APIs, not the HTML structure, the boundary with outside code, so that integrations do not break when the screens change. CSE and data regions appear to be positioned as higher-edition features for organizations that want to decide for themselves where their data lives and who holds the keys.
:::

## A seat's price depends on how you pay and where you buy

:::fact
The pricing page (checked 2026-10-13) tells new customers "最大 Google Workspace の最初の 3 か月間が 30% オフ。この特典は期間限定です。" (up to 30% off the first 3 months of Google Workspace; this offer is for a limited time), showing Starter and Plus at 640 and 2,000 yen with "3 か月間 20% オフ" (20% off for 3 months) and Standard at 1,120 yen with "3 か月間 30% オフ" (30% off for 3 months). The price details gave the discount period as "2026/10/26 – 2027/01/26" and the regular price after that. A note attached to the prices limits this trial price to new customers and the first 20 users added, describes it as "12 か月間に限り提供される" (offered only for 12 months), and says the final amount is presented before sign-up is completed. According to the referral program FAQ, customers who use a promo code handed out by a referrer get 10% off per user for the first year, and customers in Asia Pacific can enter the code at any time during the 14-day trial as long as they have not entered payment details. Muumuu Domain's Google Workspace page (checked 2026-10-13) names GMO Pepabo, Inc., the company behind it, as a Google Cloud certified partner, and lists annual contracts at 25% off for the first year: 660 yen a month for Starter (regularly 880 yen), 1,320 yen for Standard (regularly 1,760 yen) and 2,063 yen for Plus (regularly 2,750 yen), with renewals at the regular price and the campaign running until October 31. The visible part of that page does not say whether the prices include tax. On the paying side, the referral program pays a one-time fee per new user in Japan of 850 yen for Starter, 1,700 yen for Standard and 2,550 yen for Plus, for up to 100 users per referred account and 200 users a year, on condition that the referred customer uses a paid plan for 90 days or more. The by-country rate list (updated July 2026) of the affiliate program, which is joined through CJ Affiliate, sets the per-user fees in Japan at 1,020, 2,040 and 3,060 yen, and payments are processed in US dollars through the CJ network.
:::

| Edition (per user per month) | Annual Plan (before tax) | Flexible Plan (before tax) | Official site, first 3 months | Muumuu Domain, first year (regular) | Referral fee (referral program / affiliate) |
| --- | --- | --- | --- | --- | --- |
| Business Starter | 800 yen | 950 yen | 640 yen (20% off) | 660 yen (880 yen) | 850 yen / 1,020 yen |
| Business Standard | 1,600 yen | 1,900 yen | 1,120 yen (30% off) | 1,320 yen (1,760 yen) | 1,700 yen / 2,040 yen |
| Business Plus | 2,500 yen | 3,000 yen | 2,000 yen (20% off) | 2,063 yen (2,750 yen) | 2,550 yen / 3,060 yen |

The Annual Plan and the first three months follow the pricing page, the Flexible Plan follows the Admin Help (it also matches the data embedded in the pricing page), and Muumuu Domain follows its own page (no tax notation in the visible part). Referral fees are one-time amounts per new user, and the affiliate figures follow the rate list updated in July 2026 (all checked 2026-10-13).

:::guess
Preselecting the Annual Plan price, a three-month discount that appears to be counted from the end of the trial, 10% off the first year through a referrer's code, and the 25% first-year discount a reseller adds read as a design that keeps a single list price while changing what customers actually pay at each door. Muumuu Domain's regular prices (880, 1,760 and 2,750 yen) match Google's pre-tax Annual Plan prices plus 10% consumption tax (this site's calculation), so they appear to be shown tax included. Resellers presumably compete not on list price but on first-year discounts and perks combined with domains. Referral fees amount to 102 to 106% of one month of the Annual Plan price in the referral program and 122 to 127.5% in the affiliate program (this site's calculation), which suggests a going rate of roughly one month of a seat's price for winning a new seat. Paying referral fees only after 90 days or more on a paid plan appears to be a mechanism to avoid rewarding sign-ups that end with the trial.
:::

## Business model

Workspace makes money from a monthly fee for each user's seat and from add-ons that raise AI usage limits. In Alphabet's earnings, its revenue is included in the Google Cloud segment and is not shown on its own.

:::fact
According to Alphabet's earnings release for the second quarter of 2026, published on July 22, 2026, Google Cloud segment revenues rose from $13,624 million in the same quarter a year earlier to $24,768 million (up 82%), and operating income from $2,826 million to $8,814 million, lifting the operating margin from 20.7% to 35.6% (this site's calculation). The release describes Google Cloud as including "infrastructure and platform services, applications, and other products and services for enterprise customers," and says it "generates services revenues primarily from consumption-based fees and subscriptions received for Google Cloud Platform services, Google Workspace communication and collaboration tools, and other enterprise services," and "product revenues primarily from the sale of TPU systems." Workspace revenue is not shown on its own, and the release says the growth was "led by an increase in Google Cloud Platform (GCP) across enterprise AI Solutions and enterprise AI Infrastructure, as well as core GCP services." In his remarks the same day, the CEO said Gemini "is deeply integrated across all of our Cloud products including Gemini Enterprise, data analytics, cybersecurity, and Google Workspace." According to a January 15, 2025 post on the Updates blog, as Google included AI in the Business and Enterprise plans, it stopped selling the Gemini Business, Gemini Enterprise, AI Meetings & Messaging and AI Security add-ons and applied updated pricing to new customers from January 16, 2025. On February 5, 2026, it added the "AI Expanded Access" add-on for Business Standard and Plus and Enterprise Standard and Plus, sitting between the standard offering and the top-tier AI Ultra Access (formerly Google AI Ultra for Business), and said that from March 1, 2026 customers would need this add-on to keep higher access to advanced image and video generation. According to the Admin Help, resellers can manage subscriptions and billing on a customer's behalf, and prices for Enterprise and other services apply to purchases from Google's sales representatives and resellers. The referral program's agreement is with Google Asia Pacific Pte. Ltd. and excludes resellers' customers from eligible referrals, while the affiliate program's agreement is with Google LLC.
:::

:::guess
Because Workspace revenue is not shown on its own, the share of Google Cloud's 82% growth that comes from Workspace cannot be measured from the outside. With the release naming Google Cloud Platform as the driver of growth, Workspace appears to work less as the engine of rapid growth than as a subscription base that builds up with the number of seats and their monthly fees. Dropping the AI add-ons in 2025 to fold AI into the seat price, then adding an add-on that raises limits in 2026, reads as a two-tier design that raises the value of the seat itself with AI while charging extra to users who consume more compute. The gap between more than 3 billion users and more than 13 million customers appears to show the size of the funnel through which people used to the free Gmail and Docs move to paid seats when they use them for work. Handing outside doors such as resellers, referrals and affiliates rewards worth about one month of a seat's price (this site's calculation) and first-year discounts is presumably a way to widen sales to organizations of 300 or fewer without carrying them all on Google's own sales force.
:::

Google Workspace, renamed from G Suite, draws lines through apps used by more than 3 billion people with a custom domain, administration, storage and Gemini's usage limits, and prices each seat. The price list preselects the Annual Plan, shows new customers a discount on their first three months, and pays referrers about one month of a seat's price (this site's calculation). Muumuu Domain, a reseller, sells the same seat with 25% off the first year. How much weight pricing after folding AI into the seat carries inside Google Cloud's numbers is not shown as a revenue line, so the details of price lists and terms keep offering the clues.
