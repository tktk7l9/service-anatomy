---
service: "Resend"
title: "Resend Explained: Pricing, Rate Limits, the Amazon SES Foundation and the New Forge MTA Behind the Developer Email API"
description: "Resend is a developer email API that grew out of React Email, an open-source library for building email templates. It incorporated in January 2023, went through Y Combinator, raised an $18M Series A led by Andreessen Horowitz in December 2024, passed 3 million users in June 2026 and says it has been profitable since 2025. Pricing is monthly and set by sending volume: the Free plan is 3,000 emails a month (100 a day), Pro is $20 for 50,000, and overage is $0.90 per 1,000. The DNS records its domain setup guide asks for point to Amazon SES, and on October 23, 2026 it announced Resend Forge, its own MTA sending from IPv4 blocks it bought. This article dissects Resend from its official pricing page, docs, handbook, blog, incident reports, terms of service, AWS's pricing page, the GitHub and npm APIs, and this site's own observations."
lead: "In his first blog post, Resend's founder called the company \"a next-generation Sendgrid.\" Yet the SPF record its domain setup guide tells you to paste says amazonses.com. The sending underneath appears to be Amazon SES, which AWS sells at $0.10 per 1,000 emails. Over three years Resend built a layer of usability on top of it, an API, a dashboard and React Email, and sold that at $0.40 to $0.90 per 1,000. In October 2026, a company with 3 million users and a profit bought IPv4 addresses and wrote its own MTA. This article dissects why a company that started at the top of the stack is now moving down to the foundation."
category: dev-tool
tags: [email-api, transactional-email, developer-experience, react, open-source, aws, ai-agent, deliverability]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
serviceUrl: "https://resend.com/"
# Affiliate link placeholder: Resend has no public affiliate or referral program (checked
# 2026-11-02 on resend.com/pricing, /enterprise, /nonprofits and every child sitemap of
# resend.com/sitemap.xml; only a 50% nonprofit discount and Enterprise sales exist).
# Leave this block commented out unless the owner finds a program.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<resend-referral-link>"
#   program: "Resend"
expires:
  - date: "2026-11-30"
    claim: "Live figures on the official Resend Forge page (last 7 days as of 2026-11-02: median time to acceptance 0.8s on Forge vs 1.5s on the legacy engine, 94.48% vs 91.09% delivered within 5 seconds, and so on). They update hourly, so re-take them"
  - date: "2026-12-31"
    claim: "Forge does not yet support open and click tracking, and domains with tracking enabled are routed to the legacy engine (the FAQ's \"Not yet\"). Check whether it does now"
  - date: "2026-12-31"
    claim: "The 2026 plan stated in the December 2025 \"1,000,000 users\" post (extending the support SLA to Asia-Pacific time zones). Check whether it happened"
vendor: "Plus Five Five, Inc. (Resend)"
origin: "US"
heroTheme: "resend"
scores: { product: 4.5, ux: 4.5, tech: 4.0, business: 4.0 }
techStack:
  - layer: "Sending infrastructure (legacy engine)"
    name: "Amazon SES (AWS)"
    confidence: likely
    evidence: "The official DNS setup guide (Cloudflare, as of 2026-11-02) lists the records used to verify a domain: an MX record of feedback-smtp.us-east-1.amazonses.com and an SPF TXT record of \"v=spf1 include:amazonses.com ~all\". The subprocessor list describes Amazon Web Services, Inc. as \"Third party hosting and sending provider.\" The official Forge page calls its comparison baseline \"our legacy engine including the third-party provider.\" This site found no primary source in which Resend itself says it uses SES, so this is marked likely"
    evidenceUrl: "https://resend.com/docs/guides/dns/cloudflare"
  - layer: "In-house sending infrastructure (from 2026-10)"
    name: "Resend Forge (own MTA, owned IPv4 blocks)"
    confidence: confirmed
    evidence: "The official blog (2026-10-23, \"Announcing Resend Forge\") describes Forge as Resend's own Mail Transfer Agent that \"sends from IP blocks we own and operate,\" and says \"To this point in our history, we ran that infrastructure on a rented foundation.\" The product page explains that the IPv4 blocks were bought on the transfer market"
    evidenceUrl: "https://resend.com/features/forge"
  - layer: "API and back end"
    name: "TypeScript + Go on AWS ECS Fargate / Lambda, queues, control plane + data plane"
    confidence: confirmed
    evidence: "The official handbook page \"What is our tech stack\" (updated 2026-07-08) states that back-end applications use TypeScript and Golang, APIs run on AWS ECS Fargate, background jobs on AWS Lambda, queues absorb traffic spikes, and \"The control plane handles requests, and the data plane sends emails\""
    evidenceUrl: "https://resend.com/handbook/engineering/what-is-our-tech-stack"
  - layer: "API entry point"
    name: "Cloudflare (WAF + Load Balancing) → AWS ALB → ECS (Email API / Resend API)"
    confidence: confirmed
    evidence: "The official incident report (2025-11-18) states that all API traffic to Resend is proxied through Cloudflare, that Cloudflare Load Balancing sends all POST /emails requests to the \"Email API\" and the rest to the \"Resend API,\" and that the origins are AWS Application Load Balancers in front of APIs on ECS. This site's own observation (2026-11-02) also found api.resend.com returning server: cloudflare"
    evidenceUrl: "https://resend.com/blog/incident-report-for-november-18-2025"
  - layer: "Dashboard, public site and docs"
    name: "Next.js (React Server Components) on Vercel + Tailwind CSS + Base UI / Mintlify (docs)"
    confidence: confirmed
    evidence: "The official handbook states that the dashboard and public website use React with Next.js, that since Next.js 15 data is fetched primarily with React Server Components, that styling uses Tailwind CSS and Base UI, and that the docs are powered by Mintlify. This site's own observation (2026-11-02) found resend.com returning server: Vercel, x-powered-by: Next.js and x-vercel-id: hnd1::iad1, and /docs returning x-mintlify-client-version"
    evidenceUrl: "https://resend.com/handbook/engineering/what-is-our-tech-stack"
  - layer: "Data and auth"
    name: "Postgres (Drizzle / sqlc) + Tinybird + Redis / Supabase Auth"
    confidence: confirmed
    evidence: "The official handbook states that Postgres is the main storage system, accessed with Drizzle from TypeScript and sqlc from Go, that Tinybird holds analytics data, Redis is used for caching, and Supabase handles authentication with Resend's own organization model built on top for multiple teams. The subprocessor list (updated 2026-08-27) describes PlanetScale as \"Database hosting,\" Supabase as \"Database and user authentication\" and Tinybird as \"Data analytics\""
    evidenceUrl: "https://resend.com/handbook/engineering/what-is-our-tech-stack"
  - layer: "Background jobs and webhook delivery"
    name: "Inngest (background jobs) + Svix (webhooks)"
    confidence: confirmed
    evidence: "The official handbook states that Inngest is the main tool for background jobs and that Svix processes webhooks to users, helping \"monitor and scale webhooks with automatic retries\""
    evidenceUrl: "https://resend.com/handbook/engineering/what-is-our-tech-stack"
  - layer: "Templates (open source)"
    name: "React Email (TypeScript, MIT)"
    confidence: confirmed
    evidence: "GitHub's resend/react-email (as of 2026-11-02, via the API) is mostly TypeScript under the MIT license with 19,900 stars and 1,109 forks, created on 2022-09-19; the latest release is react-email@6.11.6 (2026-10-29). The react-email package on npm was downloaded 7,607,039 times in the week of October 23-29, 2026"
    evidenceUrl: "https://github.com/resend/react-email"
  - layer: "AI"
    name: "Anthropic (AI editor, support agent) + self-hosted LLMs on RunPod (trust and safety)"
    confidence: confirmed
    evidence: "The FAQ on the official Security page states that Anthropic receives content only when you use the AI Editor or share content with the in-app AI Support Agent, that normal sending through the Emails API is not sent to Anthropic, and that RunPod processes a small sample of emails for trust and safety on dedicated infrastructure Resend operates"
    evidenceUrl: "https://resend.com/security"
  - layer: "Entry points for AI agents"
    name: "Remote MCP server (mcp.resend.com) + CLI + llms.txt / Markdown pages"
    confidence: confirmed
    evidence: "The official llms.txt (as of 2026-11-02) lists the remote MCP server at https://mcp.resend.com/mcp, the CLI and agent skills, and says blog posts and guides return their raw Markdown when .md is appended or Accept: text/markdown is sent. The official blog of June 2026 says every page on resend.com now renders as Markdown, that the MCP server went from about 8% to about 90% API coverage, and that a CLI with 53 commands shipped"
    evidenceUrl: "https://resend.com/llms.txt"
sources:
  - label: "Resend: Pricing (fetched as Markdown)"
    url: "https://resend.com/pricing"
    accessedAt: "2026-11-02"
  - label: "Resend docs: What are Resend account quotas and limits?"
    url: "https://resend.com/docs/knowledge-base/account-quotas-and-limits"
    accessedAt: "2026-11-02"
  - label: "Resend docs: Usage Limits (rate limits)"
    url: "https://resend.com/docs/api-reference/rate-limit"
    accessedAt: "2026-11-02"
  - label: "Resend docs: Choosing a Region"
    url: "https://resend.com/docs/dashboard/domains/regions"
    accessedAt: "2026-11-02"
  - label: "Resend docs: DNS setup guide (Cloudflare)"
    url: "https://resend.com/docs/guides/dns/cloudflare"
    accessedAt: "2026-11-02"
  - label: "Resend docs: Idempotency Keys"
    url: "https://resend.com/docs/dashboard/emails/idempotency-keys"
    accessedAt: "2026-11-02"
  - label: "Resend docs: Retries and Replays (webhooks)"
    url: "https://resend.com/docs/webhooks/retries-and-replays"
    accessedAt: "2026-11-02"
  - label: "Resend docs: How do Dedicated IPs work?"
    url: "https://resend.com/docs/knowledge-base/how-do-dedicated-ips-work"
    accessedAt: "2026-11-02"
  - label: "Resend: Security"
    url: "https://resend.com/security"
    accessedAt: "2026-11-02"
  - label: "Resend: Subprocessors"
    url: "https://resend.com/legal/subprocessors"
    accessedAt: "2026-11-02"
  - label: "Resend: Terms of Service"
    url: "https://resend.com/legal/terms-of-service"
    accessedAt: "2026-11-02"
  - label: "Resend: Enterprise"
    url: "https://resend.com/enterprise"
    accessedAt: "2026-11-02"
  - label: "Resend: Resend for Nonprofits"
    url: "https://resend.com/nonprofits"
    accessedAt: "2026-11-02"
  - label: "Resend: llms.txt (guide for AI agents)"
    url: "https://resend.com/llms.txt"
    accessedAt: "2026-11-02"
  - label: "Resend handbook: How we got here (timeline)"
    url: "https://resend.com/handbook/company/how-we-got-here"
    accessedAt: "2026-11-02"
  - label: "Resend handbook: How we make money"
    url: "https://resend.com/handbook/company/how-we-make-money"
    accessedAt: "2026-11-02"
  - label: "Resend handbook: What is our tech stack"
    url: "https://resend.com/handbook/engineering/what-is-our-tech-stack"
    accessedAt: "2026-11-02"
  - label: "Resend handbook: What is our philosophy for anti-abuse"
    url: "https://resend.com/handbook/success/what-is-our-philosophy-for-anti-abuse"
    accessedAt: "2026-11-02"
  - label: "Resend blog: Introducing Resend (2023-01-04)"
    url: "https://resend.com/blog/introducing-resend"
    accessedAt: "2026-11-02"
  - label: "Resend blog: Resend + Y Combinator (2023-02-01)"
    url: "https://resend.com/blog/y-combinator"
    accessedAt: "2026-11-02"
  - label: "Resend blog: Why I spent $25,000 on a domain (2023-02-06)"
    url: "https://resend.com/blog/how-to-pick-a-startup-name"
    accessedAt: "2026-11-02"
  - label: "Resend blog: New Free Tier (2023-06-12)"
    url: "https://resend.com/blog/new-free-tier"
    accessedAt: "2026-11-02"
  - label: "Resend blog: Resend raises $3M (2023-07-18)"
    url: "https://resend.com/blog/resend-raises-3m-seed-round"
    accessedAt: "2026-11-02"
  - label: "Resend blog: Improving Time to Inbox in Asia (2024-01-17)"
    url: "https://resend.com/blog/improving-time-to-inbox-in-asia"
    accessedAt: "2026-11-02"
  - label: "Resend blog: Introducing the Scale plan (2024-10-16)"
    url: "https://resend.com/blog/introducing-the-scale-plan"
    accessedAt: "2026-11-02"
  - label: "Resend blog: Resend raises $18M Series A (2024-12-04)"
    url: "https://resend.com/blog/series-a"
    accessedAt: "2026-11-02"
  - label: "Resend blog: Resend acquires Mergent (2025-04-23)"
    url: "https://resend.com/blog/resend-acquires-mergent"
    accessedAt: "2026-11-02"
  - label: "Resend blog: Resend acquires Briefer (2025-08-05)"
    url: "https://resend.com/blog/resend-acquires-briefer"
    accessedAt: "2026-11-02"
  - label: "Resend blog: $3M to Make Email Safer (2025-10-03)"
    url: "https://resend.com/blog/3-million-to-make-email-safer"
    accessedAt: "2026-11-02"
  - label: "Resend blog: Incident report for November 18, 2025"
    url: "https://resend.com/blog/incident-report-for-november-18-2025"
    accessedAt: "2026-11-02"
  - label: "Resend changelog: Pay-as-you-go Pricing (2025-12-05)"
    url: "https://resend.com/changelog/pay-as-you-go-pricing"
    accessedAt: "2026-11-02"
  - label: "Resend blog: 1,000,000 users (2025-12-18)"
    url: "https://resend.com/blog/1-million-users"
    accessedAt: "2026-11-02"
  - label: "Resend blog: Incident report for February 15, 2026"
    url: "https://resend.com/blog/incident-report-for-february-15-2026"
    accessedAt: "2026-11-02"
  - label: "Resend blog: React Email 6.0 (2026-04-17)"
    url: "https://resend.com/blog/react-email-6"
    accessedAt: "2026-11-02"
  - label: "Resend blog: 3,000,000 users (2026-06-03)"
    url: "https://resend.com/blog/3-million-users"
    accessedAt: "2026-11-02"
  - label: "Resend blog: Sunsetting new.email (2026-07-08)"
    url: "https://resend.com/blog/sunsetting-new-email"
    accessedAt: "2026-11-02"
  - label: "Resend changelog: More Domains on the Free Tier (2026-08-25)"
    url: "https://resend.com/changelog/three-domains-on-the-free-tier"
    accessedAt: "2026-11-02"
  - label: "Resend blog: Announcing Inboxes (2026-10-22)"
    url: "https://resend.com/blog/announcing-inboxes"
    accessedAt: "2026-11-02"
  - label: "Resend blog: Announcing Resend Forge (2026-10-23)"
    url: "https://resend.com/blog/announcing-resend-forge"
    accessedAt: "2026-11-02"
  - label: "Resend: Resend Forge (product page with live figures)"
    url: "https://resend.com/features/forge"
    accessedAt: "2026-11-02"
  - label: "AWS: Amazon SES Pricing"
    url: "https://aws.amazon.com/ses/pricing/"
    accessedAt: "2026-11-02"
  - label: "GitHub: resend/react-email (via the API)"
    url: "https://github.com/resend/react-email"
    accessedAt: "2026-11-02"
  - label: "npm Downloads API: resend (2026-10-23 to 10-29)"
    url: "https://api.npmjs.org/downloads/point/last-week/resend"
    accessedAt: "2026-11-02"
---

Resend is an API for developers to send email from their apps. It made transactional email, the messages sent one at a time in response to what a user does, such as password resets, login links and receipts, something you can send with one API key and a few lines of code. Where the email marketing platform [Mailchimp](/en/articles/mailchimp) started from a list of contacts, Resend started from a developer's code. Its first three years can be told as a sequence: build an easy layer on top of rented sending infrastructure, gather users, then replace the foundation itself.

## Service overview

According to the timeline in the official handbook, Zeno Rocha and Bu Kinoshita were frustrated in August 2022 with email tools that felt "outdated, slow, and built for marketers, not developers," and started building the "Stripe of Email" as a side project. In September 2022 a friend at another startup began using the MVP in production, and paid the $10 payment link the two sent him. In November they were accepted into Y Combinator's Winter 2023 batch and quit their jobs; in December they launched React Email as open source, and in January 2023 they incorporated. In the first blog post, dated January 4, 2023, Rocha wrote that he had struggled with emails landing in spam as CPO at Liferay Cloud and as VP of Developer Experience at WorkOS, and called Resend "a next-generation Sendgrid." His reason for entering the market: the biggest competitors were all founded around 2009 or 2010, had all been acquired, and were prioritizing enterprise requirements and sales-led growth.

:::fact
According to Resend's official blog and handbook, the company's path runs as follows. A post of February 1, 2023 says the waitlist reached 4,949 people within four weeks of launch and React Email had 4,168 GitHub stars, and that Rocha was joining Y Combinator's Winter 2023 batch with Bu Kinoshita and Jonni Lundy. In a post of February 6, 2023, Rocha writes that the asking price for resend.com was $39,999, that he offered $7,999, received a counteroffer of $35,000, and settled at $25,000. Resend left the waitlist and opened to everyone in June 2023, and on July 18 announced a $3M seed round (with Y Combinator, SV Angel, Figma's Dylan Field, Vercel's Guillermo Rauch and Supabase's Paul Copplestone among others; the handbook timeline places the seed under April 2023). It reached 1,000 paying customers in December 2023 and 100,000 users in April 2024, and on December 4, 2024 announced an $18M Series A led by Andreessen Horowitz. A post of December 18, 2025 says that during 2025 users went from 249,000 to 1 million, revenue grew 5x, and the team went from 12 to 28 people. A post of June 3, 2026 says users reached 3 million, the team 43, and "Resend is profitable. It has been since last year." The contracting party in the terms of service is "Plus Five Five, Inc.," and the governing law is that of California.
:::

:::fact
According to the official pricing page (as of 2026-11-02, Markdown version), transactional email is priced by monthly sending volume. Free is 3,000 emails a month with a cap of 100 a day; Pro is $20 a month for 50,000 or $35 for 100,000; Scale starts at $90 a month for 100,000 and steps through $160 for 200,000, $350 for 500,000, $650 for 1 million, $825 for 1.5 million and $1,150 for 2.5 million, above which Enterprise is quoted individually. Emails beyond the included volume cost $0.90 per 1,000 on Pro and on Scale up to 100,000, $0.80 at 200,000, $0.70 at 500,000, $0.65 at 1 million, $0.52 at 1.5 million and $0.46 at 2.5 million. Marketing email is priced by the number of contacts rather than emails sent: 1,000 on Free, and Pro marketing from $40 for 5,000 to $650 for 150,000. Automations include 10,000 runs a month on every plan, with overage on paid plans at $0.0015 per run. Every plan includes 3 inboxes, and each extra inbox is $1 a month. Add-ons are 100 extra domains for $20 a month, a dedicated IP for $30 a month (on Scale, for senders above 3,000 emails a day) and single sign-on for $150 a month (on Scale). Self-serve plans are billed monthly only, with no annual plan or annual discount. All prices are shown in US dollars, and the pricing page does not say how tax is handled.
:::

:::pull
AWS sells sending at $0.10 per 1,000 emails. Resend's overage rate is $0.90 per 1,000. Much of that gap appears to be the price of usability: the API, the dashboard and React Email.
:::

::scorecard

## UX analysis

Resend's UX rests on two things: shortening the distance to the first email, and building the discipline of not landing in spam into the product. It does not make you wait for a review, and in exchange it imposes sending discipline in numbers.

- **You can send without waiting for approval**. The official handbook's anti-abuse philosophy notes that most competitors require users to fill out a long form and wait a couple of days for approval, and says Resend defaults to trust. After signing up you can send right away from the resend.dev testing domain. According to the docs, however, resend.dev can only send to the email address on your own account; to send to anyone else you must verify your own domain through DNS. The first test email is immediate, and the first production email needs a domain set up.
- **The free tier has widened step by step**. The official blog of June 12, 2023 raised the free tier 30x, from 100 emails a month to 3,000 a month (100 a day), while limiting free teams to one domain and making region selection Pro-only. The changelog of August 25, 2026 raised free domains to three, and today's pricing page includes region selection on every plan. Features once pushed toward paid plans have since been given back to free ones.
- **Limits are about paying to exceed rather than stopping**. The changelog of December 5, 2025 added pay-as-you-go overages (Transactional Overages) to paid plans. According to the docs it is off by default; when on, you can keep sending past the monthly quota and pay the overage rate in buckets of 1,000. To prevent unexpected bills, overage is capped at 5x the monthly quota.
- **The rate limit does not change with the plan**. According to the docs, the API allows 10 requests per second per team, shared across all API keys and domains rather than per key, with no burst allowance. The pricing FAQ states that upgrading does not raise the rate limit and points to the batch API, which sends up to 100 emails in one request. Responses carry headers such as ratelimit-limit, following an IETF draft.
- **Sending discipline is set in numbers**. The docs require every account to keep a bounce rate under 4% and a spam rate under 0.08%, and say that exceeding them may pause sending temporarily. Received email counts toward the quota just like sent email, and each To, CC and BCC recipient counts as a separate email.
- **Retries do not deliver twice**. According to the docs, adding an Idempotency-Key header (up to 256 characters) to a send request makes the API return the same response without sending again for any request with the same key within 24 hours. Over SMTP the Resend-Idempotency-Key header does the same. Failed webhooks are retried eight times on a widening schedule, ending at a 10-hour interval.
- **You can send from Tokyo, but data stays in the US**. The official blog of January 17, 2024 added a Tokyo region, bringing sending regions to four: North Virginia (us-east-1), Ireland (eu-west-1), São Paulo (sa-east-1) and Tokyo (ap-northeast-1). The docs state that the region controls where email is sent from, and that account data, including email metadata and logs, is stored in the United States regardless of region. Data is retained for 30 days on all plans.

Imposing discipline in numbers can also feel, from the sender's side, like an experience that is easy at first and strict later: you can start without a review, but a bounce rate above 4% may stop your sending. The handbook, though, also says "Don't lock people out of their accounts" and that "It's okay to block specific features and slow down sending, but it's not ideal to automatically remove access from people's accounts." The line it draws is that what gets stopped is the sending, not the account.

## Tech stack

::techstack

:::fact
According to the official handbook page "What is our tech stack" (updated 2026-07-08), the back end is TypeScript and Go, run serverless where possible: Next.js on Vercel, background jobs on AWS Lambda, and APIs on AWS ECS Fargate. Queues sit in between to absorb spikes, and responsibilities are split so that "The control plane handles requests, and the data plane sends emails," limiting the impact of failures. Storage is Postgres, accessed through Drizzle from TypeScript and sqlc from Go; Tinybird handles analytics, Redis caching, Supabase authentication, Inngest jobs, Svix webhook delivery, Mintlify the docs, AWS CDK and Terraform the infrastructure, and GitHub Actions with Depot the CI/CD. The incident report of November 18, 2025 reveals the entry point. All requests to api.resend.com pass through Cloudflare, where Cloudflare Load Balancing sends POST /emails to the "Email API" and everything else to the "Resend API," with AWS Application Load Balancers in front of APIs on ECS as origins. That day's Cloudflare outage affected Resend's sending from 11:30 to 14:31 UTC. The report says that because load balancing happened on Cloudflare, moving the entry point to another provider was "more difficult than a single DNS entry," and that Resend prepared a fallback path on AWS CloudFront with a runbook to switch within 60 seconds if it happens again.
:::

:::fact
The official DNS setup guide (Cloudflare) lists the records for verifying a domain: an MX record of feedback-smtp.us-east-1.amazonses.com and an SPF record of "v=spf1 include:amazonses.com ~all". The subprocessor list (updated 2026-08-27) describes Amazon Web Services, Inc. as a "Third party hosting and sending provider." According to AWS's official pricing page, Amazon SES outbound email costs $0.10 per 1,000 emails (plus $0.12 per GB of attachment data), and inbound email $0.10 per 1,000. The official blog of October 23, 2026 announced Resend Forge, its own MTA, writing "To this point in our history, we ran that infrastructure on a rented foundation. Today, that changes." According to the Forge product page, Forge sends from IP blocks Resend owns and operates. The free pool of IPv4 addresses ran out years ago and the regional registry ARIN's waiting list only hands out small returned blocks, so Resend bought on the transfer market through a broker, checked each block's previous holders, routing, neighbors and blocklist history, and chose blocks that had been "sitting unused for years with reputable owners." It then warmed them up, sending a little more each day, over weeks for some providers and months for others. Forge keeps a separate configuration for each major receiver (Gmail, Outlook, Yahoo and Apple) for connection limits and retry intervals, and the page says the tuning is done increasingly by AI agents working on the same data as well as by people.
:::

:::fact
The Forge product page shows live figures for the last 7 days, updated hourly. When this site fetched it on 2026-11-02, the median time from API call to acceptance by the receiver across all providers was 1.5 seconds on the legacy engine ("including the third-party provider") and 0.8 seconds on Forge; for Google 1.4 vs 0.7 seconds, for Outlook 3.0 vs 2.2, and for Apple 4.9 vs 4.8. The share delivered within 5 seconds was 94.48% on Forge vs 91.09% on legacy, and within 3 minutes 99.97% vs 98.59%. The official blog says hundreds of customers have sent more than 10 million emails through Forge in the last few months. To use Forge you add one CNAME record in the domain's settings, and once automated checks establish you as a good sender you are moved over, with no code changes. If Forge has an incident, delivery falls back to the legacy engine automatically, and domains with open or click tracking enabled are still sent through the legacy engine.
:::

:::guess
Putting the DNS records next to the subprocessor list, the sending part of Resend's "legacy engine" appears to be Amazon SES. Read that way, Resend's technology over three years concentrated not on sending itself but on the layers before and after it: before, React Email, the API, the SDKs and templates; after, webhooks, bounce reasons, spam complaints, delivery metrics and the dashboard. Forge is presumably an attempt to replace the last borrowed piece beneath those layers. A 0.7-second cut in the median matters for the emails users are waiting on, such as password resets and login links, and being able to tune each receiver's settings directly appears to be a lever that rented infrastructure did not offer. Owning the IPs also means owning, directly, the responsibility for stopping senders who would pollute the pool. The October 2025 commitment of $3M over three years to make email safer, and the Forge page's line that "a shared pool is only as good as its worst tenant," can be read as preparation for taking that on.
:::

:::fact
According to the official incident report for February 15, 2026, email sending was delayed and the dashboard failed for 3 hours and 31 minutes from 10:19 PM UTC. The cause was database connection exhaustion: a missing configuration let one service go from an average of 60 database connections to over 330. The report says that a mix of deployment types (long-lived, serverless, cron-based), Postgres libraries, and direct versus pooled connections made healthy connection usage hard to ensure. Because the sending platform was built to be resilient to database unavailability, emails were delayed by about 2 hours on average but none were lost. The fixes listed are reviewing connection limits for every Postgres role and isolating a few critical tables in a separate database.
:::

:::fact
React Email is an open-source library for writing email templates as React components, and it predates Resend. GitHub's resend/react-email (as of 2026-11-02, via the API) is TypeScript under the MIT license with 19,900 stars and 1,109 forks, created on September 19, 2022. The official blog post "React Email 6.0" of April 17, 2026 released an open-source visual editor you can embed in your own app (@react-email/editor) and cited 2 million weekly downloads and 196 contributors. According to the npm API, in the week of October 23-29, 2026, Resend's official SDK "resend" was downloaded 16,955,624 times and "react-email" 7,607,039 times. The official blog of June 2026 says every page on resend.com now renders as Markdown, the MCP server went from about 8% to about 90% API coverage, and a 53-command CLI shipped. This site's own observation (2026-11-02) also found the link header of /docs declaring llms.txt, an MCP server card and an agent skills index.
:::

:::guess
React Email appears to work as Resend's front door. For a developer who has written templates in React, choosing Resend as the place to send them is the smallest step. The pricing page's listing of "React Email" on every plan, for a library anyone can use for free, is presumably less a feature than a description of that path. The 2026 work on Markdown pages, MCP, the CLI and skills appears to lay the same path for AI agents: in the official blog's words, "Agents don't need dashboards. They need APIs," and the aim seems to be a state where sending can be set up without a person clicking through a browser.
:::

## Business model

Revenue comes from transactional sending volume, marketing contacts, and per-part monthly and usage fees for automation runs, inboxes, domains, dedicated IPs and single sign-on. The free tier gathers users widely, and bills grow as sending volume and team size grow.

:::fact
The official handbook page "How we make money" (updated 2026-07-08) gives three principles. The first is "giving first": the generous free tier is "a way to capture new leads with a low customer acquisition cost," and once a user gains value the company "should not be afraid to charge for it." The second is "providing value": as a multi-product company, Resend sells transactional and marketing email as separate subscriptions that can be added or cancelled at any time. The third is "growing together": progressive tiers in which the cost per unit gets cheaper as volume grows, plus pay-as-you-go for usage beyond the quota. The official blog of October 16, 2024 says that around 100,000 emails a month inbox providers start to treat you as a bulk sender, making DMARC and one-click unsubscribe essential, and introduced the Scale plan at $90 a month for 100,000 emails, replacing the Pro tiers above 100,000. Scale adds 1,000 domains, a dedicated Slack channel with Resend engineers, urgent response SLAs and 10 webhook endpoints. On the pricing page, 100,000 emails cost $35 a month on Pro and $90 on Scale, a $55 difference for the same volume. As for the $30-a-month dedicated IP, the docs say that "Sending less than 90,000 emails a month may not be enough to keep the IPs warm," and do not recommend it to every sender.
:::

:::fact
According to the official Enterprise page, Enterprise contracts are annual or multi-year, invoiced in advance, net 30. The Enterprise Terms use commercially reasonable efforts to achieve 99.99% email sending uptime per calendar month, and if the target is missed, eligible customers may request a service credit of 5% to 50%. The same page says 90% of urgent requests get a first reply in under 13 minutes. The official blog of December 2025 says that in 2025 Resend helped 82,416 users, with a median first response time of 2 hours 45 minutes and 90% of urgent requests answered within 47 minutes, and that in 2026 it would extend support coverage to Asia-Pacific time zones. According to the official Security page, Resend holds SOC 2 Type II and complies with GDPR, but is not HIPAA compliant, cannot sign a BAA, and does not hold an ISO 27001 certificate. Registered nonprofits can apply for 50% off paid plans. The terms of service say paid subscription fees are non-refundable except when required by law, and reserve the right, without notice, to modify or discontinue the Free Tier or convert Free Tier accounts to paid subscriptions if usage exceeds its limits.
:::

:::fact
Resend has reshaped the edges of its product through acquisitions and shutdowns. The official blog of April 23, 2025 announced the acquisition of Mergent, a serverless background job service, which was to be sunset on July 28, 2025. On August 5, 2025 it announced the acquisition of the data analytics platform Briefer (YC S23), to make a Resend that "processes terabytes of data every week" faster; Briefer was to be sunset on November 5, 2025. new.email, a separately branded tool launched in February 2025 for creating email templates in natural language, was announced as sunsetting on July 8, 2026, with its main features moved into Resend's own editor for free. In that post Rocha reflects that choosing a separate brand and a separate stack was "fast to launch and slow to live with," and that "emails are not like websites... You build a handful of templates once, and then send them many times," so people did not need new templates constantly. On October 22, 2026 Resend announced Inboxes, shared inboxes worked by teams and AI agents side by side.
:::

:::guess
Setting the price list beside the cost of the sending infrastructure appears to show where Resend's gross margin comes from. Amazon SES charges $0.10 per 1,000 emails sent, while Resend charges $0.40 per 1,000 within Pro's 50,000, $0.90 on overage, and $0.46 even at Scale's top tier. The gap is not a simple markup, since it must also cover the API platform, data retention, webhook delivery, support staff and abuse prevention, but it presumably shows in the shape of the prices that Resend's value lay not in sending but in the layers around it. Forge also moves part of that cost from payments to an outside provider into Resend's own assets (IP blocks and running an MTA), an effect that grows with volume. A profitable company bringing its foundation in-house at its highest volume appears to be doing so to control its cost and its delivery reputation, as well as its speed.
:::

:::guess
Another reading is that Resend is widening its scope from "the email layer developers pick first" to "one platform for sending, receiving and conversations." It has added receiving, marketing, automations and inboxes, and its June 2026 blog post says "There should be no need to use multiple email services," explaining that for an agent every extra service is another billing account, another credential and another thing that can break. The more products it adds, the less each team's bill depends on sending volume alone. Yet as the end of new.email shows, not every attempt to reach a different audience lasts, and what survives is presumably what can be folded into the core product.
:::

The company that called itself "a next-generation Sendgrid" in its first blog post spent three years polishing only the layer developers touch, on top of rented sending infrastructure. Now, with 3 million users and a profit, it is buying IPv4 blocks, writing its own MTA and setting aside $3M for abuse prevention. Whether it can trade the trust it earned at the top of the stack for the responsibilities at the bottom is likely to decide its next three years.
