---
service: "Mailchimp"
title: "Bought for $12 Billion, Moved From Growing to Earning — Dissecting Mailchimp, Which Makes $1.27 Billion at a 47.5% Margin on a Price List That Counts Even Unsubscribed Contacts"
description: "Mailchimp is the email marketing platform founded in Atlanta in 2001 and bought by Intuit for about $12 billion in 2021. Its price depends on how many contacts you store, and unsubscribed people count. In Intuit's fiscal 2026 disclosures, revenue was $1.272 billion, down 1%, and segment operating income was $604 million, a 47.5% margin. Since August 2026 it has been a separate reportable segment, with fiscal 2027 revenue guided flat to down 1% and higher effective prices expected to offset increased churn. From the official pricing data, help center, developer docs, Intuit's results and Investor Day material, and our own header observations, we dissect the contact-based meter, how Omnivore and domain authentication guard delivery, the Transactional product that still carries the Mandrill name, and a management agenda now titled 'Monetize the base'."
lead: "Mailchimp's help center says the contact count that sets your monthly price includes people who have unsubscribed. In 2021 Intuit paid about $12 billion for this company and said it would sit at the center of small business growth. Five years later, in 2026, the heading in Intuit's investor material reads 'Managing Mailchimp for stable top line and improved profitability'. Revenue is flat and the margin is 47.5%. Using only public information, the price list, the delivery machinery, the developer APIs and the financial disclosures, we look at where that change shows up in the product."
category: saas
tags: [email-marketing, marketing-automation, saas, intuit, transactional-email, deliverability]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
expires:
  - date: "2026-11-19"
    claim: "Intuit's fiscal 2027 Mailchimp revenue guidance ($1,256 million to $1,266 million), which the first-quarter results on November 19 may update"
  - date: "2026-12-31"
    claim: "Mailchimp's limited-time offers (15% off the first 12 months at 10,000+ contacts, the 14-day free trial, generative AI at no additional cost, 50% off Transactional at 1M+ emails for 12 months), none of which states an end date"
serviceUrl: "https://mailchimp.com/"
# Affiliate link placeholder: Mailchimp & Co (https://mailchimp.com/andco/, checked 2026-11-02) is a
# free program for agencies and freelancers. The page says members can "earn commission", and the
# partner and pro partner levels add a directory listing and "even more commission". It does not
# publish commission rates. Never invent a rate or a label. If the owner joins and the terms allow a
# tracking link, add the affiliate block here and keep the url identical in ja.md and en.md
# (parity.ts checks it).
# affiliate:
#   url: "https://<tracking-link-for-mailchimp>"
#   program: "Mailchimp & Co"
vendor: "The Rocket Science Group LLC (Intuit Inc.)"
origin: "US"
heroTheme: "mailchimp"
scores: { product: 4.0, ux: 3.5, tech: 4.0, business: 4.0 }
techStack:
  - layer: "Core application"
    name: "Monolith on Kubernetes + Istio/Envoy"
    confidence: likely
    evidence: "Our observation (2026-11-02): mailchimp.com and login.mailchimp.com returned server: istio-envoy, and x-envoy-decorator-operation exposed the internal service name mailchimp-app-desired-service.mailchimp-monolith-mailchimpapp-use2-prd7 (prd8 for login).svc.cluster.local:8090. svc.cluster.local appears to be the Kubernetes service name format. There is no official description; this is inferred from headers"
  - layer: "Cloud infrastructure"
    name: "AWS / Google Cloud (Intuit-wide)"
    confidence: confirmed
    evidence: "Intuit's fiscal 2026 10-K says its online offerings, which include Mailchimp's marketing automation and customer relationship offerings, use public cloud providers such as Amazon Web Services and Google Cloud Platform for most of their systems. The split for Mailchimp alone is not disclosed. Our observation (2026-11-02): mailchimp.com returned x-intuit-upstream-locality-region: us-east-2 and x-amzn-trace-id"
    evidenceUrl: "https://investors.intuit.com/sec-filings/all-sec-filings/content/0000896878-26-000037/intu-20260731.htm"
  - layer: "CDN and bot protection"
    name: "Akamai"
    confidence: confirmed
    evidence: "The official sub-processor list names Akamai for improving application speed and security (list last updated 2024-02-29). Our observation (2026-11-02): mailchimp.com returned ak_p in server-timing and the cookies _abck and bm_sz, and us1.api.mailchimp.com returned akamai-grn"
    evidenceUrl: "https://mailchimp.com/legal/subprocessors/"
  - layer: "Marketing API edge"
    name: "http-interposer (Istio/Envoy)"
    confidence: likely
    evidence: "Our observation (2026-11-02): us1.api.mailchimp.com returned server: istio-envoy and the internal service name http-interposer-desired-service.mailchimp-cloud-httpinterposer-use2-prd-m2. It appears to answer from a namespace separate from the core application"
  - layer: "Transactional (formerly Mandrill)"
    name: "mandrillapp.com (separate deployment)"
    confidence: likely
    evidence: "Our observation (2026-11-02): mandrillapp.com returned server: nginx, the internal service name mandrill-app-desired-service.mctx-mandrillapp-usw2-prd, and x-intuit-upstream-locality-region: us-west-2. The core application is in us-east-2, so this looks like a separate deployment in another region. The developer docs also give dkim1.mandrillapp.com as the DKIM record value"
  - layer: "Database"
    name: "MySQL (Percona)"
    confidence: likely
    evidence: "The official sub-processor list says Percona is used to improve the relational database management system. The abstract of 'Mailchimp Scale: a MySQL Perspective', published by Percona, says Mailchimp runs hundreds of MySQL instances (we could not date the talk, so it does not prove the current setup)"
    evidenceUrl: "https://www.percona.com/resource/mailchimp-scale-mysql-perspective-percona-live-open-source/"
  - layer: "Generative AI"
    name: "OpenAI / Microsoft (Intuit Assist)"
    confidence: confirmed
    evidence: "The official sub-processor list names OpenAI and Microsoft as providing AI features through Intuit Assist"
    evidenceUrl: "https://mailchimp.com/legal/subprocessors/"
  - layer: "SMS"
    name: "Infobip / Twilio"
    confidence: confirmed
    evidence: "The official sub-processor list names Infobip and Twilio as providing the SMS program"
    evidenceUrl: "https://mailchimp.com/legal/subprocessors/"
  - layer: "Domain authentication automation"
    name: "Entri"
    confidence: confirmed
    evidence: "The official help center recommends Entri as the automated way to set up the DKIM and DMARC DNS records"
    evidenceUrl: "https://mailchimp.com/help/about-email-authentication/"
  - layer: "Developer documentation"
    name: "Fern"
    confidence: confirmed
    evidence: "The setup example for the official docs MCP server uses the server name fern_mcp_mailchimp-docs. Our observation (2026-11-02): mailchimp.com/developer/ returned server: cloudflare and x-fern-renderer: static, and images in the Markdown version include the path mailchimp.docs.buildwithfern.com"
    evidenceUrl: "https://mailchimp.com/developer/marketing/build/ai-tools/mcp-server.md"
sources:
  - label: "Mailchimp: Home page"
    url: "https://mailchimp.com/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp: Marketing Pricing (plans, FAQ, disclaimers)"
    url: "https://mailchimp.com/pricing/marketing/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp: pricing data loaded by the pricing page (viewed from Japan, JPY)"
    url: "https://mailchimp.com/forms/pricing/?currency=JPY"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Help: About Mailchimp Pricing Plans"
    url: "https://mailchimp.com/help/about-mailchimp-pricing-plans/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Help: About Mailchimp Pricing Tiers"
    url: "https://mailchimp.com/help/mailchimp-pricing-tiers/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Help: About Additional Charges"
    url: "https://mailchimp.com/help/about-additional-charges/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Help: About the Pay As You Go Plan"
    url: "https://mailchimp.com/help/about-the-pay-as-you-go-plan/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp: Transactional Email Pricing"
    url: "https://mailchimp.com/pricing/transactional-email/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp: About Mailchimp"
    url: "https://mailchimp.com/about/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp: Founders"
    url: "https://mailchimp.com/about/founders/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp: Mailchimp & Co"
    url: "https://mailchimp.com/andco/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Help: About Omnivore"
    url: "https://mailchimp.com/help/about-omnivore/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Help: About Email Domain Authentication"
    url: "https://mailchimp.com/help/about-email-authentication/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Help: About Compliance for Email Marketing"
    url: "https://mailchimp.com/help/about-compliance-for-email-marketing/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Help: My Email From Name Shows mailchimpapp.net or mcsv.net"
    url: "https://mailchimp.com/help/my-campaign-from-name-shows-mcsvnet/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Help: About SMS Marketing (supported countries)"
    url: "https://mailchimp.com/help/about-sms-marketing/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Help: Language Settings and Preferences"
    url: "https://mailchimp.com/help/language-settings-preferences/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp: Sub-processors (last updated 2024-02-29)"
    url: "https://mailchimp.com/legal/subprocessors/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp: Security"
    url: "https://mailchimp.com/about/security/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Newsroom: Intuit names Matt Idema as new leader of Mailchimp (2025-01-13)"
    url: "https://mailchimp.com/newsroom/matt-idema-new-leader/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp: Intuit Mailchimp Unlocks a New Era of Profitable Ecommerce Marketing (2026-02-10)"
    url: "https://mailchimp.com/february-2026-release-data-driven-ecommerce-marketing/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Newsroom: Intuit Mailchimp Launches Analytics AI (2026-05-28)"
    url: "https://mailchimp.com/newsroom/introducinganalyticsai/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Developer: Home page"
    url: "https://mailchimp.com/developer/"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Developer: Authentication and Delivery (Transactional)"
    url: "https://mailchimp.com/developer/transactional/docs/authentication-delivery.md"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Developer: Reputation and Rejections (Transactional)"
    url: "https://mailchimp.com/developer/transactional/docs/reputation-rejections.md"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Developer: Quick Start (Transactional)"
    url: "https://mailchimp.com/developer/transactional/guides/quick-start.md"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Developer: How to Use Mailchimp's Transactional Messaging MCP"
    url: "https://mailchimp.com/developer/transactional/guides/how-to-use-mailchimps-transactional-messaging-mcp.md"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Developer: API structure (Marketing API)"
    url: "https://mailchimp.com/developer/marketing/api-concepts/api-structure.md"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Developer: Rate limits and timeouts (Marketing API)"
    url: "https://mailchimp.com/developer/marketing/api-concepts/rate-limits-and-timeouts.md"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Developer: MCP server (documentation search)"
    url: "https://mailchimp.com/developer/marketing/build/ai-tools/mcp-server.md"
    accessedAt: "2026-11-02"
  - label: "Mailchimp Developer: Release Notes"
    url: "https://mailchimp.com/developer/release-notes.md"
    accessedAt: "2026-11-02"
  - label: "Intuit IR: Intuit to Acquire Mailchimp (2021-09-13)"
    url: "https://investors.intuit.com/news-events/press-releases/detail/162/intuit-to-acquire-mailchimp"
    accessedAt: "2026-11-02"
  - label: "Intuit IR: Intuit Completes Acquisition of Mailchimp (2021-11-01)"
    url: "https://investors.intuit.com/news-events/press-releases/detail/154/intuit-completes-acquisition-of-mailchimp"
    accessedAt: "2026-11-02"
  - label: "Intuit IR: Acquisition of Mailchimp Conference Call Remarks (2021-09-13)"
    url: "https://investors.intuit.com/_assets/_64f3415e6601d7a94d9a083d8f6622dc/intuit/db/919/9561/file/Investor-Call-Script-9-13-21-PM.pdf"
    accessedAt: "2026-11-02"
  - label: "Intuit IR: Form 10-K (fiscal 2022)"
    url: "https://investors.intuit.com/sec-filings/all-sec-filings/content/0000896878-22-000028/intu-20220731.htm"
    accessedAt: "2026-11-02"
  - label: "Intuit IR: Form 10-K (fiscal 2026)"
    url: "https://investors.intuit.com/sec-filings/all-sec-filings/content/0000896878-26-000037/intu-20260731.htm"
    accessedAt: "2026-11-02"
  - label: "Intuit IR: Fourth Quarter and Full Year Fiscal 2026 Results (2026-08-25)"
    url: "https://investors.intuit.com/news-events/press-releases/detail/1320/intuit-reports-fourth-quarter-and-full-year-fiscal-2026-results-sets-fiscal-2027-guidance"
    accessedAt: "2026-11-02"
  - label: "Intuit IR: Q4 FY26 Earnings Script (2026-08-25)"
    url: "https://investors.intuit.com/_assets/_622200c7c84d6028edc9773ada09f18b/intuit/db/946/10378/webcast_transcript/Q4+FY26+Earnings+Script.pdf"
    accessedAt: "2026-11-02"
  - label: "Intuit IR: Investor Day 2026 Presentation (2026-09-17)"
    url: "https://investors.intuit.com/_assets/_622200c7c84d6028edc9773ada09f18b/intuit/db/923/10406/pdf/ID_FY27_PRINT_FINAL-rev2.pdf"
    accessedAt: "2026-11-02"
  - label: "Intuit IR: 2026 Investor Day Fact Sheet"
    url: "https://investors.intuit.com/_assets/_622200c7c84d6028edc9773ada09f18b/intuit/db/1072/10401/pdf/2026+Investor+Day+Fact+Sheet+External+Ledger+Size+%2811x17%29+v3.pdf"
    accessedAt: "2026-11-02"
  - label: "Intuit IR: Home page (first-quarter results date)"
    url: "https://investors.intuit.com/"
    accessedAt: "2026-11-02"
  - label: "Percona: Mailchimp Scale: a MySQL Perspective (talk abstract)"
    url: "https://www.percona.com/resource/mailchimp-scale-mysql-perspective-percona-live-open-source/"
    accessedAt: "2026-11-02"
---

Mailchimp is a tool for small businesses to stay in touch with customers by email. It differs from writer-first tools such as [beehiiv](/en/articles/beehiiv) and [Ghost](/en/articles/ghost), which help you grow readers and earn from subscriptions or ads, right down to the billing unit. Mailchimp's meter runs on the number of contacts you store. And Intuit's 2026 disclosures show the business moving from something to buy and grow to something to earn from. With those two facts in hand, the price list and the delivery safeguards are easier to read.

## Service overview

Mailchimp's price is the product of a plan, which sets the features, and a contact tier. There are four plans, Free, Essentials, Standard and Premium, plus Pay As You Go, which sells send credits, and Transactional for developers.

:::fact
According to the official About page, Mailchimp began as a side project at Rocket Science Group, the web design agency run by Ben Chestnut and Dan Kurzius, and was founded in Atlanta in 2001 as an alternative to oversized, expensive email software. The Founders page says it stayed privately held until it was acquired in 2021. Intuit announced the deal on September 13, 2021, and on the same day told investors that Mailchimp had unaudited 2020 revenue of about $800 million, up 20%, with about 95% recurring and over half outside the US. The announcement cited 13 million total users, 2.4 million monthly actives, 800,000 paid customers and 70 billion contacts. The deal closed on November 1, 2021. The fiscal 2022 10-K puts total consideration at $12.0 billion: $5.7 billion in cash and 10.1 million Intuit shares worth about $6.3 billion. A $4.7 billion term loan funded part of the cash.
:::

:::fact
The pricing data loaded by the pricing page (checked 2026-11-02) uses JPY as the base currency when viewed from Japan, as in the table below. Its disclaimers say displayed prices exclude VAT, which is added, and that USD figures are estimates converted from JPY. In the USD estimate, Essentials at 500 contacts was $8.19, Standard at 10,000 was $81.91 and Premium at 10,000 was $239.43. The monthly send limit is 10 times the contact limit on Essentials, 12 times on Standard and 15 times on Premium. The help center says Essentials stores up to 50,000 contacts, Standard 100,000 and Premium 200,000, beyond which plans are customized.
:::

| Contact limit | Essentials (monthly) | Standard (monthly) | Premium (monthly) |
| --- | --- | --- | --- |
| 500 | ¥1,300 | ¥1,900 | — |
| 2,500 | ¥3,800 | ¥6,300 | — |
| 10,000 | ¥9,500 | ¥13,000 | ¥38,000 |
| 15,000 | ¥16,000 | ¥20,000 | ¥45,000 |
| 50,000 | ¥33,000 | ¥38,000 | ¥76,000 |
| 100,000 | — | ¥63,000 | ¥89,000 |
| 200,000 | — | — | ¥143,000 |

:::fact
Free allows 250 contacts, 500 sends a month and 250 a day. The help center says that past 250 contacts both live and test emails are held, while you can keep working and collecting contacts. The pricing page's comparison table shows Free with no automation flows, 1 seat, 1 audience, Mailchimp branding that cannot be removed, and email support for the first 30 days. Essentials adds flows of up to 4 steps and 3 seats; Standard adds up to 200 flows, 5 seats and generative AI features; Premium adds unlimited seats, phone and priority support and enterprise SSO. Standard includes 1 onboarding session and Premium 4, and the disclaimers limit the languages to English and a few others. Accounts with 10,000 or more contacts get 15% off the first 12 months, and Essentials and Standard have a 14-day free trial. The disclaimers call both limited-time offers without giving an end date. Nonprofits get a 15% discount. Pay As You Go sells one credit per email, with Essentials-level features. Credits expire after 12 months and are used even by emails that bounce or are stopped in compliance review.
:::

:::fact
Official pages do not agree on the customer count. The developer home page says fourteen million, the Mailchimp & Co page 13 million, and the home page 11 million businesses. They may date from different times, and we could not confirm which is current. The pricing page footnotes its "#1" claim to December 2023 public data on competitors' customer counts, and its "up to 27x ROI" for Standard to e-commerce revenue attributed to users' Mailchimp campaigns from December 2024 to November 2025.
:::

:::guess
Per contact, Standard falls from ¥3.8 a month at 500 to ¥0.63 at 100,000. But moving Essentials from 10,000 to 15,000 raises contacts 1.5 times and the price about 1.7 times, taking the per-contact cost from ¥0.95 up to ¥1.07. At 10,000 contacts Premium is about 2.9 times Standard, narrowing to about 1.4 times at 100,000. This looks like a staircase that nudges lists past 10,000 toward a higher plan, then softens Premium's premium for larger customers. Offering 15% off only at 10,000 or more contacts reads as aiming at the same group.
:::

:::pull
A customer with 10,000 contacts stands where Mailchimp finds it easiest to set a price. The discount and the path to Premium both start there.
:::

::scorecard

## UX analysis

Mailchimp's experience is weighted toward keeping first-time senders on track and stopping bad sends early. In exchange, the way billing works takes some getting used to.

- **People who opted out still count.** The help center says subscribed, unsubscribed and non-subscribed contacts all count toward the limit. Archived, cleaned and deleted contacts do not. The bill follows the peak contact total for the period, so reducing contacts mid-month does not change that month's charge. The help center itself suggests using segments to find inactive contacts and archive them.
- **Going over does not stop you.** On paid plans, exceeding the contact or send limit does not interrupt service; you are billed for add-on contact blocks. On Standard, a block of 1,000 contacts comes with 12,000 sends. Block prices appear only once you log in and set your limit. Free stops and paid bills, which both prevents a halted campaign and opens a door to unnoticed spending. This model arrived on May 15, 2019, and earlier paid plans are treated as legacy. Test emails and Transactional emails also count toward the monthly send total.
- **Stopping sends before they go.** An abuse-prevention system called Omnivore checks addresses you have not yet contacted when you import or send to new people, and if it predicts a high bounce or complaint rate, it disables sending to that audience. It does not say which addresses are the problem. The help center explains this as protecting Mailchimp's sending reputation and yours. Another page says Mailchimp monitors bounce, unsubscribe and abuse rates and warns accounts that exceed industry standards.
- **Steering you to domain authentication.** The help center says Gmail and Yahoo require custom authentication and a published DMARC record from anyone sending more than 5,000 emails to their addresses in 24 hours. Mailchimp recommends Entri, which connects to your DNS provider to set the two DKIM CNAME records and one DMARC TXT record, and steers you there through a Home screen checklist, banners and nudges while drafting. One example banner warns that emails from your domain may miss 74% of inboxes. Without authentication, recipients may see "via mailchimpapp.net" or "on behalf of mcsv.net".
- **AI moving from analysis to action.** The February 10, 2026 release cited a ChatGPT integration. The May 28 release added Analytics AI, which answers questions by connecting campaigns and revenue, AI Segment Builder (beta), which builds segments from plain language, and an app for drafting campaigns inside ChatGPT and Claude and launching them in Mailchimp. The pricing page's disclaimers describe Intuit Assist as beta, at no additional cost at this time, in select countries in English only, on Standard and Premium.
- **Some of it does not reach Japan.** The help center's language table lists English, Spanish, French, Portuguese, German and Italian, not Japanese. SMS supported countries are the US, Canada, European countries and Australia; Japan is not listed. Prices appear in yen, but the screens and support do not assume Japanese.

## Tech stack

::techstack

:::fact
Our observation (2026-11-02): mailchimp.com and login.mailchimp.com returned server: istio-envoy, with an internal service name in x-envoy-decorator-operation containing mailchimp-monolith-mailchimpapp-use2. us1.api.mailchimp.com returned a name containing mailchimp-cloud-httpinterposer-use2, and mandrillapp.com returned server: nginx and a name containing mctx-mandrillapp-usw2. The region header was us-east-2 for the main site and API and us-west-2 for mandrillapp. mailchimp.com/developer/ returned server: cloudflare and x-fern-renderer: static. The security page says Mailchimp's owned and operated servers sit in US data centers, while Intuit's fiscal 2026 10-K says online offerings including Mailchimp use providers such as AWS and Google Cloud for most systems. The sub-processor list (last updated 2024-02-29) names Akamai, Amazon for delivery and temporary storage, and Google, plus Infobip and Twilio for SMS, OpenAI and Microsoft for AI, Percona for the database, and E-Hawk and El Camino for abuse prevention.
:::

:::guess
The word "monolith" in the internal name suggests the 25-year-old core has not been fully split up and runs as a large application on Kubernetes. The region names match AWS naming and fit the 10-K, but Mailchimp's own hosting split is not disclosed. The security page's "owned and operated servers" may be older wording, or may apply only to delivery servers; we cannot tell. The sub-processor list shows no specialist email delivery vendor, which suggests sending is largely in-house, but we could not confirm this officially. The flag name hints at a fiscal 2027 pricing setting, but neither its content nor timing has been announced.
:::

There are two developer entrances: the Marketing API, which connects your data to marketing, and Transactional, which sends order confirmations and password resets. The second still carries its old name, Mandrill, in domains and DNS record values.

:::fact
The Marketing API root is `https://api.mailchimp.com/3.0/`. It is described with OpenAPI and accepts API keys and OAuth 2. It allows 10 simultaneous connections per user, not per key or client, with no per-customer increases, and has a 120-second timeout, with long jobs pointed to the Batch endpoint. The developer site says Transactional (formerly Mandrill) sends through the API or SMTP, with examples in Node, PHP, Ruby and Python. Pricing uses blocks of 25,000 emails: $20 a block for 1 to 20 blocks, falling to $10 at 161 or more, with a dedicated IP at $29.95 a month. Unused emails do not roll over, and sending stops when blocks run out. It requires Standard or higher, and Essentials is not eligible, but new users can try up to 500 free sends to a verified domain. Demo accounts are limited to 25 emails an hour. New users at 1 million or more emails get 50% off for 12 months, with no end date stated. The pricing page says 99% of emails reach the inbox in less than a second; we could not confirm how that is calculated.
:::

:::fact
The Transactional docs say it will not send from unverified domains or those without valid DMARC and DKIM. A DMARC policy of `p=none` is enough. The requirement began on March 15, 2024 in response to new Google and Yahoo sending rules, and the release note at the time said non-compliant mail would go out from a `mandrillapp.com` subdomain. Each account has a Poor, Good or Excellent reputation built from complaints, bounces, unsubscribes, failed content reviews and more. Reputation and usual volume set an hourly quota, and overflow waits in a backlog for 48 hours before deletion. The docs recommend a complaint rate under the industry guideline of 0.1%, calling it one of the most heavily weighted factors. Addresses that bounce or complain go on a denylist and are not sent to again. Mail uses shared IPs by default. The docs say a dedicated IP is worth considering at 5,000 emails a day on at least three days a week, and can hurt at low volume. Warm-up runs automatically over about a month.
:::

:::fact
The entrance for AI agents splits in three. The MCP server for the developer docs only searches published content and explicitly cannot act on your account. The Transactional MCP at `https://mandrillapp.com/mcp` has nine tools, including API calls, template building and diagnosing failed sends. For acting on a marketing account, the docs say to call the API directly or use Agent skills.
:::

## From "buy and grow" to "earn from the base"

:::fact
Intuit's September 17, 2026 Investor Day material and the accompanying fact sheet show Mailchimp revenue of $1.267 billion in fiscal 2024, $1.287 billion in 2025 and $1.272 billion in 2026 (years end in July). Recast segment operating income was $516 million, $548 million and $604 million, for margins of 41%, 43% and 47%. The material puts the fiscal 2026 margin at 47.5%, up 4.9 points, saying the cost structure was aligned to the revenue profile. The recast figures include product development and customer success costs, while the 10-K places share-based compensation and acquisition amortization in unallocated corporate items. Average revenue per customer (ARPC) from fiscal 2023 was $1,298, $1,298, $1,277 and $1,278, annotated "Managed for profitability". Intuit's total fiscal 2026 revenue was $21.448 billion, and Online Ecosystem revenue grew 19%, or 23% excluding Mailchimp.
:::

| Fiscal year | Revenue | Segment operating income | Margin | ARPC |
| --- | --- | --- | --- | --- |
| 2024 | $1.267 billion | $516 million | 41% | $1,298 |
| 2025 | $1.287 billion | $548 million | 43% | $1,277 |
| 2026 | $1.272 billion | $604 million | 47% | $1,278 |

:::fact
The August 25, 2026 results say Intuit began managing Mailchimp as a separate operating segment from Global Business Solutions on August 1, 2026, and will report it separately from fiscal 2027. Fiscal 2027 revenue guidance is $1,256 million to $1,266 million, down 1% to flat. The earnings script says fourth-quarter revenue was down slightly and that in fiscal 2027 higher effective prices should offset increased churn, adding that the focus is on maximizing its value and delivering strong profitability. Investor Day lists fiscal 2027 priorities as dedicated accountability through standalone reporting, "Monetize the base" (conversion, expansion, value-based pricing and retention of high-value customers), and go-to-market spend governed by unit economics to expand margin and cash. Another slide cites 9% growth in high-value new bookings MRR from Sales-Assisted Mid Market, and 35% growth in SMS paid customers, who spend 11% more on average. The next results are scheduled for November 19, 2026.
:::

:::guess
Dividing revenue by ARPC gives an average of roughly 1 million customers in fiscal 2026, above the 800,000 paid customers cited in 2021. Most of the 11 million to 14 million in official copy therefore appears to be unpaid or past users. Flat ARPC alongside flat revenue suggests inflow and outflow are not changing much, with price increases cancelled out by churn. Intuit's "higher effective prices offset increased churn" seems to say exactly that.

It is too early to call this a failure, though. A business that grew 20% in 2020 has stopped growing, but it earns over $600 million in segment profit, and the value of connecting it to QuickBooks, the point of the deal, cannot be measured by this segment alone. The vision of covering everything from finding customers to getting paid was repeated in the January 2025 leadership announcement. Even so, the 2026 language has clearly shifted from investing to recovering. The $12 billion price is about 9.4 times the $1.272 billion in revenue. If management's focus moves from growth to cash, the question becomes a race between the size of price increases and the speed of churn.
:::

## Business model

The core is monthly recurring revenue that rises with contacts. SMS credits, Transactional blocks and moves to Premium sit on top. The 2021 figure of about 95% recurring revenue can also be read off the shape of the product.

:::fact
The pricing page's disclaimers say SMS is a paid-plan add-on, with credits issued monthly that do not roll over. Transactional SMS uses the same credits. Premium has a sales path for custom quotes and annual plans, and custom plans spending at least $299 a month include customer success. The February 10, 2026 release features a customer who switched from Klaviyo and new migration tools, pitching lower cost and ROI to e-commerce businesses. The Mailchimp & Co page offers a free program for agencies and freelancers who can earn commission, with more at higher levels, but publishes no rates. A leadership change was announced on January 13, 2025, when Matt Idema, formerly WhatsApp's COO, became SVP of Mailchimp.
:::

:::guess
A contact-based price list raises revenue automatically as lists grow, and counting unsubscribed people supports that growth. For users, it is a reason to clean old lists, which also leaves an escape route when prices rise. The "high-value customers" Mailchimp highlights are likely the large-list e-commerce and mid-market businesses whose bills grow most under this structure.

The reputation safeguards also fit the model. On shared sending infrastructure, one bad sender can lower delivery for everyone, so Omnivore and the authentication requirements protect users and, at the same time, are a cost of protecting delivery quality, the thing being sold.
:::

Mailchimp started as an email tool for small shops and, after a $12 billion acquisition, has become a mature business with a 47.5% margin. A meter that runs on contacts and safeguards that stop sends before they go are strengths built over 25 years. The open question, under a policy of earning from the base, is how far prices can rise before customers leave. The answer will appear quarter by quarter in the fiscal 2027 disclosures of a newly standalone segment.
