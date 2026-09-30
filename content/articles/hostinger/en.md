---
service: "Hostinger"
title: "¥299 a Month Means 48 Months Up Front, Renewal at 4.3x, and 40% to the Referrer — The Collect-Cash-First Design Behind Hostinger's Four Straight Years of 50% Growth"
description: "Hostinger, a web hosting company from Lithuania, grew to €275.4 million in revenue (up 51%) and 4.6 million customers in 2025. Its Japanese pricing starts at ¥299 a month, but that is the unit price when you pay 48 months at once; on renewal it becomes ¥1,299 a month. How it keeps growing while handing up to 40% of each sale (up to 60% for AI Builder) to affiliates is dissected from the official pricing pages, the affiliate agreement, the annual results blog, the official API documentation, public GitHub repositories, and this site's own observations. It also covers the AI Builder's in-house backend, the API opened to outside AI through MCP, and the AI agent that resolves 91% of support conversations."
lead: "Under the large \"¥299/mo\" on the pricing page, a smaller line reads: 48 months for ¥14,352 instead of the regular ¥71,952, renewing at ¥1,299 a month. That one sentence holds the skeleton of Hostinger's business. Collect four years up front, then renew at more than four times the price. On top of that, hand up to 40% of the first sale to an affiliate. This article dissects how a company that started in Kaunas, Lithuania in 2004 came to grow revenue by more than 50% for four consecutive years and to let an AI agent handle nine in ten support conversations."
category: dev-tool
tags: [hosting, website-builder, ai, mcp, small-business, vibe-coding]
publishedAt: "2026-09-30"
updatedAt: "2026-09-30"
lastVerified: "2026-09-30"
serviceUrl: "https://www.hostinger.com/"
# Affiliate link placeholder: Hostinger runs its own public affiliate program
# (https://www.hostinger.com/affiliates, tracked on affiliates.hostinger.com;
# up to 40% commission, 30-day cookie, US$100 PayPal minimum). The owner must sign up,
# get approved, and paste the tracking link here before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<hostinger-affiliate-tracking-link>"
#   program: "Hostinger Affiliate Program"
vendor: "Hostinger International Ltd."
origin: "LT"
heroTheme: "hostinger"
scores: { product: 4.0, ux: 3.5, tech: 3.5, business: 4.5 }
techStack:
  - layer: "Shared hosting (web server and storage)"
    name: "LiteSpeed Web Server + NVMe SSD + Object Cache"
    confidence: confirmed
    evidence: "The official pricing page (as of 2026-09-30) states that pages load faster with NVMe storage and LiteSpeed servers. Unlimited comes with 50 GB and Cloud Startup with 100 GB of NVMe storage, and the page also lists LiteSpeed and Object Cache among its WordPress optimization features"
    evidenceUrl: "https://www.hostinger.com/jp/web-hosting"
  - layer: "Public API and AI agent access"
    name: "REST API (Bearer token, 90 req/min) + @hostinger/mcp"
    confidence: confirmed
    evidence: "The official API documentation states that the API spans hosting, domains, DNS, email, VPS, WordPress, ecommerce, and billing, that a token generated in hPanel is sent as a Bearer header, and that the limit is 90 requests per minute. The same page says the @hostinger/mcp npm package exposes the API as 372 Model Context Protocol tools, and lists official SDKs for PHP, Python, and TypeScript, a Terraform provider, an Ansible collection, an n8n node, a WHMCS module, and a Postman collection"
    evidenceUrl: "https://docs.hostinger.com/api-reference/overview"
  - layer: "AI Builder generation model"
    name: "Google Gemini 3 + Anthropic Claude Sonnet 4.5 (mixed per task)"
    confidence: confirmed
    evidence: "The November entry of the official blog's 2025 product updates roundup states that Google's new large language model Gemini 3 is already powering Hostinger AI Builder. The same post's 2025 recap says AI Builder runs on a balanced mix of the latest models, including Gemini 3 and Claude Sonnet 4.5, each matched to the right task"
    evidenceUrl: "https://www.hostinger.com/blog/product-updates-2025/"
  - layer: "AI Builder backend"
    name: "Built-in database / auth / file storage / email (Hostinger-native)"
    confidence: confirmed
    evidence: "The February entry of the official blog's 2026 product updates roundup states that databases, authentication, file storage, and email sending are all included in AI Builder. The official blog post of 2026-08-18 says database provisioning, authentication with passwords, OTPs, and social logins, user account management, and file storage run on Hostinger's native infrastructure, eliminating third-party dependencies. The database engine is not disclosed"
    evidenceUrl: "https://www.hostinger.com/blog/ai-builder-launch/"
  - layer: "CI infrastructure (open source)"
    name: "fireactions (Firecracker microVM GitHub runners, Go)"
    confidence: confirmed
    evidence: "fireactions, published by Hostinger's GitHub organization, runs self-hosted GitHub Actions runners on your own metal (Bring Your Own Metal) as ephemeral Firecracker-based virtual machines. It is written in Go under the Apache-2.0 license. The README does not say how far Hostinger uses it internally"
    evidenceUrl: "https://github.com/hostinger/fireactions"
  - layer: "VPS"
    name: "AMD EPYC + NVMe SSD + Docker"
    confidence: confirmed
    evidence: "The navigation of the official pricing page (as of 2026-09-30) describes VPS hosting as AMD EPYC CPUs, NVMe SSDs, Docker, and full root access"
    evidenceUrl: "https://www.hostinger.com/jp/web-hosting"
  - layer: "Edge and CDN (own website)"
    name: "Cloudflare"
    confidence: likely
    evidence: "In this site's own observation (2026-09-30), responses from www.hostinger.com and www.hostinger.com/jp carried server: cloudflare, cf-cache-status: HIT, and a cf-ray (NRT) header, and the whois network name of the resolved IP addresses was CLOUDFLARENET. The control panel hpanel.hostinger.com returned cf-mitigated: challenge, so it sits behind a Cloudflare managed challenge"
  - layer: "Marketing site frontend"
    name: "Vue.js"
    confidence: likely
    evidence: "In this site's own observation (2026-09-30), the HTML of www.hostinger.com contained thousands of data-v-xxxxxxxx attributes, which Vue's scoped CSS adds"
  - layer: "Blog"
    name: "WordPress + WP Rocket (behind a Google Cloud load balancer)"
    confidence: likely
    evidence: "In this site's own observation (2026-09-30), the HTML of www.hostinger.com/blog/ contained a generator meta tag for WP Rocket 3.19.2.1 and more than 200 wp-content paths, and the response carried a via: 1.1 google header"
  - layer: "Product analytics and experiments"
    name: "Amplitude + in-house experiment assignment cookie"
    confidence: likely
    evidence: "In this site's own observation (2026-09-30), www.hostinger.com set an amplitude_session_id cookie and a hwebsites-exp-assignments cookie holding seven experiment IDs with their assigned variants"
sources:
  - label: "Hostinger: About (company, history, data centers)"
    url: "https://www.hostinger.com/about"
    accessedAt: "2026-09-30"
  - label: "Hostinger blog: Hostinger posts fourth consecutive year of 50%+ growth (2026-02-23)"
    url: "https://www.hostinger.com/blog/financial-results-2025/"
    accessedAt: "2026-09-30"
  - label: "Hostinger: Web hosting plans (Japan, JPY)"
    url: "https://www.hostinger.com/jp/web-hosting"
    accessedAt: "2026-09-30"
  - label: "Hostinger: Web hosting plans (USD)"
    url: "https://www.hostinger.com/web-hosting"
    accessedAt: "2026-09-30"
  - label: "Hostinger: AI Builder plans (Japan, JPY)"
    url: "https://www.hostinger.com/jp/ai-builder"
    accessedAt: "2026-09-30"
  - label: "Hostinger: Affiliate program (Japan)"
    url: "https://www.hostinger.com/jp/affiliates"
    accessedAt: "2026-09-30"
  - label: "Hostinger: Affiliate Program FAQs"
    url: "https://www.hostinger.com/affiliates/faqs"
    accessedAt: "2026-09-30"
  - label: "Hostinger: Affiliate Program Agreement (last revised 2026-08-19)"
    url: "https://www.hostinger.com/legal/affiliate-program-agreement"
    accessedAt: "2026-09-30"
  - label: "Hostinger: Referral Program"
    url: "https://www.hostinger.com/referral-program"
    accessedAt: "2026-09-30"
  - label: "Hostinger blog: What's new at Hostinger: 2025 product updates"
    url: "https://www.hostinger.com/blog/product-updates-2025/"
    accessedAt: "2026-09-30"
  - label: "Hostinger blog: What's new at Hostinger: 2026 product updates (2026-07-09)"
    url: "https://www.hostinger.com/blog/product-updates-2026/"
    accessedAt: "2026-09-30"
  - label: "Hostinger blog: AI Builder launch (2026-08-18)"
    url: "https://www.hostinger.com/blog/ai-builder-launch/"
    accessedAt: "2026-09-30"
  - label: "Hostinger blog: Hostinger Agent launch (2026-09-02)"
    url: "https://www.hostinger.com/blog/agent-launch/"
    accessedAt: "2026-09-30"
  - label: "Hostinger blog: Introducing subscriptions in Hostinger AI Builder (2026-06-15)"
    url: "https://www.hostinger.com/blog/hostinger-horizons-subscriptions/"
    accessedAt: "2026-09-30"
  - label: "Hostinger blog: Security incident – what you need to know (2019-08-25, updated 2019-11-25)"
    url: "https://www.hostinger.com/blog/security-incident-what-you-need-to-know/"
    accessedAt: "2026-09-30"
  - label: "Hostinger: API reference – Overview"
    url: "https://docs.hostinger.com/api-reference/overview"
    accessedAt: "2026-09-30"
  - label: "GitHub: hostinger/api-mcp-server"
    url: "https://github.com/hostinger/api-mcp-server"
    accessedAt: "2026-09-30"
  - label: "GitHub: hostinger/fireactions"
    url: "https://github.com/hostinger/fireactions"
    accessedAt: "2026-09-30"
---

Hostinger is still little known in Japan. Worldwide, though, it had 4.6 million customers and €275.4 million in revenue in 2025, and it has grown by more than 50% for four consecutive years. What it sells is web hosting for a few hundred yen a month, plus an AI site builder and an agent stacked on top. Behind the bargain-looking price sits a design that collects cash first, pays referrers generously, and recoups on renewal.

## Service overview

Hostinger is a hosting company that started in Kaunas, Lithuania in November 2004 as "Hosting Media." Under one account it sells shared hosting, VPS, domains, email, and managed WordPress hosting, along with AI Builder, which builds websites and web apps from conversation, and Hostinger Agent, which handles support and routine work. It is headquartered in Vilnius and is not publicly listed.

:::fact
According to the official About page (as of 2026-09-30), Hostinger was founded in Kaunas in November 2004 and launched the free hosting service 000webhost.com in 2007. It launched an AI chatbot in 2023, passed 3 million customers in 2024, and served more than 4 million in 2025. It serves customers in more than 150 countries, and its website and support are available in more than 30 languages. Its data centers are in Europe (France, Germany, Lithuania, the Netherlands, and the United Kingdom), North America (Phoenix, Boston, and Asheville), Asia (India, Indonesia, and Malaysia), and South America (Brazil); Japan is listed as a CDN location. The same page says Hostinger is a private company, that a private equity firm holds a minority stake of around 30%, and that the rest remains with the founders and the team. It has more than 1,000 employees.
:::

:::fact
According to the official Japanese pricing page (as of 2026-09-30, excluding tax), there are three web hosting plans. Premium is ¥299 a month: 48 months for ¥14,352 instead of the regular ¥71,952, renewing at ¥1,299 a month. Unlimited is ¥469 a month: 48 months for ¥22,512 (regular ¥100,752), renewing at ¥1,899 a month. Cloud Startup is ¥1,249 a month: 48 months for ¥59,952 (regular ¥210,192), renewing at ¥4,069 a month. Premium includes 3 websites and 20 GB SSD, Unlimited includes unlimited websites and 50 GB NVMe, and Cloud Startup includes 100 GB NVMe; all come with a domain free for one year and a 30-day money-back guarantee. On the US dollar page the same three plans are $2.99, $3.99, and $7.99, renewing at $10.99, $16.99, and $25.99.
:::

:::pull
¥299 a month is the unit price when you pay ¥14,352 for 48 months at once. On renewal it becomes ¥1,299 a month, 4.3 times more. The US dollar Premium plan likewise goes from $2.99 to $10.99, a 3.7x increase.
:::

::scorecard

## UX analysis

The Hostinger experience is built around "start cheap, let the AI do it, and leave the rest to us." How long "cheap" lasts, though, is only clear if you read the small print.

- **Big numbers, small footnotes.** The pricing page prints "¥299/mo" large and the 48-month total and renewal price small. The monthly and one-year unit prices are hard to see on the same screen, so anyone who wants to compare has to hunt for the term switcher. The money-back guarantee is 30 days, so after paying for four years, a change of heart is covered for only one month.
- **AI Builder "credits" are one-off.** According to the Japanese AI Builder pricing page, Premium comes with 5 and Unlimited and Cloud Startup with 15 AI credits as a "one-time gift." Cloud Startup also includes 20 credits for Hostinger Agent. Anyone who keeps building apps through conversation is expected to buy more credits after that.
- **The front door to support is an AI.** According to the official blog post of 2026-09-02, Hostinger Agent (formerly Kodee) independently resolves 91% of roughly 1.5 million monthly support conversations, and about one in ten is handed to a human specialist. Since June, the resolution rate with a specialist involved rose from 41% to 72%, with a median time to resolution of 3 minutes. Talking to a person is further away, but the wait is shorter.
- **Outside AIs can reach in.** The official blog post of August 2026 says Hostinger Connector is included free with every plan and lets external AI assistants such as Claude Code and Cursor deploy projects, manage domains, and update inventory. The bottom of the pricing page also says you can connect Cursor, Claude, or any MCP client to your hosting, with setup in two minutes.

## Tech stack

::techstack

:::fact
According to the official API documentation (as of 2026-09-30), the Hostinger API spans hosting, domains, DNS, email, VPS, WordPress, ecommerce, and billing, and a token generated in hPanel is sent as a Bearer header. The limit is 90 requests per minute; beyond that it returns 429. The same page lists an official CLI generated from the same specification (which requires a browser sign-in), SDKs for PHP, Python, and TypeScript, a Terraform provider, an Ansible collection, an n8n node, a WHMCS module, and a Postman collection, and says the @hostinger/mcp npm package exposes the API as 372 MCP tools. The README of api-mcp-server on GitHub explains that it covers 403 operations through three tools (search, execute, and multi-execute), runs over both stdio and HTTP streaming, and authenticates with an API token or OAuth 2.0 with PKCE.
:::

:::fact
The inside of AI Builder can be traced through the official blog's product update roundups. It started as Hostinger Horizons in February 2025, and in November Google's Gemini 3 took over generation; the same post's year-end recap says several models, including Gemini 3 and Claude Sonnet 4.5, are matched to different tasks. In February 2026 it gained a built-in database, authentication, file storage, and email sending, and in March it became usable from inside ChatGPT. According to the official blog post of June 15, the subscriptions feature processes payments through Stripe, supports Visa, Mastercard, Apple Pay, and Google Pay, and charges 0% platform fees. The official blog post of August 18 says Website Builder and AI Builder were merged into one, with an Agentic mode where the AI leads and a Manual mode where you control the layout yourself. The same post says nearly 20% of projects on the platform are SaaS products, internal tools, or learning platforms, a fivefold increase from under 4% a year earlier.
:::

:::fact
The support AI has also moved in stages. In May 2025, Kodee for VPS began handling server tasks through MCP, and in August it changed from "guiding you" to "doing the actual work for you." According to the annual results blog post of 2026-02-23, Kodee handles more than 350 admin-level actions, resolved 81% of support interactions (up from 50% at the start of the year), and saved €9 million through support automation. According to the official blog post of 2026-09-02, Hostinger Agent has been replacing Kodee since mid-August; support and account management stay free of additional charge, while specialized agentic work is sold as a tiered subscription.
:::

:::fact
According to the official blog post of 2019-08-25 (updated 2019-11-25), on August 23 an unauthorized party obtained an authorization token and used it to escalate privileges to the company's internal RESTful API server. The API database held the usernames, email addresses, hashed passwords, first names, and IP addresses of about 14 million customers. The company said financial data was unaffected because it never stores payment card or other sensitive financial data on its servers, and that customer websites and data remained untouched; it reset the passwords of all customers. The November update lists code rewrites, a dedicated security team, auto-rotating credentials, two-factor authentication, and a database restructuring that isolates sensitive data.
:::

:::guess
The company's own website sits behind Cloudflare, and the control panel is protected by a managed challenge. Shared hosting runs on LiteSpeed and NVMe, and while the AI Builder backend is described as "native," neither the database engine nor the runtime that executes AI Builder apps is disclosed. Given that the 2019 breach was a privilege escalation into the API server, the decision from 2025 onward to open the API and MCP widely to outside AI agents is best read together with boundary design such as the 90 requests per minute limit and OAuth with PKCE. The choice to run CI infrastructure like fireactions on its own physical servers suggests a policy of holding down costs with owned hardware rather than cloud fees.
:::

## Business model

Revenue comes from fees for web hosting and what surrounds it: domains, email, VPS, AI Builder, and Hostinger Agent subscriptions. What stands out is how the money is collected. Long-term contracts are collected up front, prices rise on renewal, and new customer acquisition is outsourced to affiliates who are paid generously.

:::fact
According to the official annual results blog post of 2026-02-23, revenue went from €69.6 million in 2022 (up 64%) to €110.2 million in 2023 (up 57%), €182.4 million in 2024 (up 65%), and €275.4 million in 2025 (up 51%), a compound annual growth rate of 58% from 2022 to 2025. Customers grew from 1.5 million (2022) to 2.4 million, 3.5 million, and 4.6 million (2025, up 35%). The company posted its first EBITDA profit of €2.4 million in 2023. By the end of 2025, AI Builder had more than 800,000 users, and the email marketing tool Hostinger Reach had 150,000 users as of December. Its Net Promoter Score is +59. CEO Daugirdas Jankus said, "Our customers don't want to manage infrastructure or tools – they want to run their businesses."
:::

:::fact
According to the affiliate program agreement (last revised 2026-08-19) and the FAQs, the commission is up to 40% on shared hosting, cloud hosting, VPS, Hostinger Reach, and yearly domain and email plans during special offers only (the Japanese program page says it "starts at 40% and increases with sales volume"), and up to 60% on specific AI Builder offers, with a maximum commission of $300 per sale. Cookies are stored for 30 days. No commission is granted for one-month hosting plans, renewals, or upgrades. The minimum payout is $100 by PayPal and $500 by bank transfer, each requiring at least three approved conversions. Buying through your own link, bidding on search ads for the Hostinger trademark, and videos whose primary purpose is to promote price-saving methods are prohibited. There is also a separate referral program: the referrer receives 20% of each eligible sale, the referred friend gets 20% off, and affiliate commissions are not credited if the purchase is canceled or refunded within 45 days, with only commissions older than 45 days being paid out.
:::

:::guess
Dividing 2025 revenue of €275.4 million by 4.6 million customers gives roughly €60 per customer per year, around €5 a month. That is higher than the prepaid unit price of the Japanese Premium plan (¥299 a month) and lower than the ¥1,299 a month after renewal, so it appears to be an average of cheap prepaid customers and renewed customers paying the higher price. A 48-month prepayment is recognized as revenue gradually as deferred revenue in the accounts, but the cash arrives on day one. That cash is presumably what makes it possible to hand 40% of the first sale to an affiliate and still come out ahead. Paying no commission on renewals or upgrades confines the referral fee to the initial acquisition cost and keeps the higher post-renewal price entirely as the company's own margin.
:::

:::guess
AI works on both cost and revenue. If an AI resolves nine in ten support conversations, staffing costs do not scale with 4.6 million customers; the €9 million saving in 2025 cited in the annual results blog is one part of that. Meanwhile, AI Builder credits are one-off, so people who keep building buy more. The figure that 20% of projects are now SaaS or internal tools suggests an attempt to shift the center of the customer base from individuals renting a server for a few hundred yen a month to businesses that run apps and charge for them. Where [Lovable](/en/articles/lovable) and [Replit](/en/articles/replit) started from AI and came down to hosting, Hostinger started from hosting and is climbing up to AI.
:::

Behind the ¥299 sign are 48 months paid up front, a 4.3x renewal price, a 40% referral fee, and support costs thinned out by AI. All of it is written on the official pages and in the agreement. It is legible if you read it, but few people read the small print under the big number. Hostinger's growth appears to be built on that.
