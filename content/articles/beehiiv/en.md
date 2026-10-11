---
service: "beehiiv"
title: "The Newsletter Platform That Shows \"What Ads Could Earn You\" Next to Its Prices — Dissecting beehiiv, Which Takes No Cut of Subscriptions Yet Reached $32 Million in Annualized Revenue, and Is Widening How Writers Earn and How AI Gets In Through Its Ad Network and MCP"
description: "beehiiv is a New York–born newsletter platform founded in 2021 by three early members of Morning Brew. It bundles email sending with websites, podcasts, communities, digital products and an in-house ad network, hosted more than 170,000 publications as of Q2 2026, and has sent more than 75 billion emails in total. It takes 0% of paid subscription and digital product revenue, yet its annualized revenue reached $32 million in November 2025. Using the pricing page and its Markdown twin, the founders' blog, product updates, the help center, the Trust Center and sub-processor list, a job posting, GitHub and this site's own observations, the article dissects a stack that appears to run its app on Heroku and combines it with SendGrid, Crunchy Data, ClickHouse and Cloudflare, an ad network paying by CPM and CPC alongside paid recommendations that carry a 20% fee, and its MCP server and AI crawler controls: a design that earns by making writers earn."
lead: "On beehiiv's pricing page, moving the subscriber slider makes an average monthly figure appear next to \"Ad monetization\" on the paid plans: $39 at 2,500 subscribers, $400 at 100,000. On the same screen, Lite billed annually costs $399 a month at 100,000. In 2023, co-founder and CEO Tyler Denk wrote that the company's top success metric is \"how many of our users are making more money from beehiiv than they are paying beehiiv.\" This article dissects, from public information alone, how a company that takes no cut of subscriptions makes its money and how it is built."
category: saas
tags: [newsletter, creator-economy, saas, advertising, subscription, mcp, aws]
publishedAt: "2026-10-11"
updatedAt: "2026-10-11"
lastVerified: "2026-10-11"
serviceUrl: "https://www.beehiiv.com/"
# Affiliate link placeholder: the beehiiv Partner Program (https://www.beehiiv.com/partners, checked
# 2026-10-11) pays up to 60% of the revenue from each referred paying customer, monthly, for a full
# year. Every partner starts on the Launch tier; tiers follow lifetime conversions: Bronze (first
# conversion, 50%), Silver (55%, co-branded landing page) and Gold (60%). Cookies last 60 days,
# referred users get a 14-day trial plus 20% off their first 3 months, and payouts are made on the
# 15th of each month through Dub.co, beehiiv's partner management system. Joining means creating a
# beehiiv account and applying at https://app.beehiiv.com/partner_program. Search ads on Bing or
# Google (especially on branded terms or domain names) are prohibited; signing up through your own
# link is not allowed. Once the owner is approved, paste the Dub tracking link here and keep the url
# identical in ja.md and en.md (parity.ts checks it). If the program supplies a text ad, copy it
# verbatim into label. Never invent the label — ask the owner.
# affiliate:
#   url: "https://<dub-tracking-link-for-beehiiv>"
#   program: "beehiiv Partner Program (Dub)"
vendor: "beehiiv Inc."
origin: "US"
heroTheme: "beehiiv"
scores: { product: 4.5, ux: 4.0, tech: 4.0, business: 4.5 }
techStack:
  - layer: "App, API and MCP"
    name: "Ruby on Rails (Heroku)"
    confidence: likely
    evidence: "This site's own observation (2026-10-11) found app.beehiiv.com, api.beehiiv.com, embeds.beehiiv.com and mcp.beehiiv.com all returning via: 1.1 heroku-router and a Heroku NEL reporting endpoint (heroku-nel), with headers such as x-runtime, x-download-options: noopen and x-permitted-cross-domain-policies: none. GitHub's beehiiv/has_state_machine (Ruby, MIT) is a gem that adds finite state machines to ActiveRecord models. The official sub-processor list names Salesforce alongside Amazon for cloud hosting"
    evidenceUrl: "https://github.com/beehiiv/has_state_machine"
  - layer: "Cloud and data storage"
    name: "AWS"
    confidence: confirmed
    evidence: "The FAQ of the official Trust Center (checked 2026-10-11) states that all publication and subscriber data is stored within Amazon Web Services regions in the United States. The sub-processor list also names Amazon for cloud hosting. This site's own observation (2026-10-11) found media.beehiiv.com, which serves images, returning Amazon S3 headers such as x-amz-request-id and x-amz-server-side-encryption"
    evidenceUrl: "https://security.beehiiv.com/"
  - layer: "Email delivery"
    name: "SendGrid"
    confidence: confirmed
    evidence: "The official sub-processor list (checked 2026-10-11) names Sendgrid as \"Email service provider.\" The same list names Kickbox for email validation"
    evidenceUrl: "https://subprocessors.beehiiv.com/sub-processor-list"
  - layer: "Database"
    name: "Crunchy Data (managed Postgres)"
    confidence: confirmed
    evidence: "The official sub-processor list (checked 2026-10-11) names Crunchydata for \"Database hosting.\" Crunchy Data's official site (checked 2026-10-11) describes its offering as \"Fully-Managed Cloud Postgres\""
    evidenceUrl: "https://subprocessors.beehiiv.com/sub-processor-list"
  - layer: "Analytics database"
    name: "ClickHouse (ClickHouse Cloud)"
    confidence: confirmed
    evidence: "The official sub-processor list names Clickhouse Cloud for \"Database hosting.\" A data scientist (Ad Network) job posted on the official careers page (BambooHR) on 2026-09-24 lists owning and building out the ClickHouse data model for the ad network among its duties and welcomes experience with OLAP databases"
    evidenceUrl: "https://beehiiv.bamboohr.com/careers/65"
  - layer: "Editor"
    name: "Tiptap"
    confidence: confirmed
    evidence: "The official sub-processor list (checked 2026-10-11) names Tiptap, based in Berlin, for \"Collaborative text editor hosting.\" The product update of July 17, 2026 says the editor was rebuilt from the ground up over the year into a what-you-see-is-what-you-get (WYSIWYG) experience"
    evidenceUrl: "https://subprocessors.beehiiv.com/sub-processor-list"
  - layer: "CDN, WAF and AI crawler control"
    name: "Cloudflare"
    confidence: confirmed
    evidence: "The official sub-processor list names Cloudflare for \"CDN and web application firewall.\" The help center says AI Crawl Control enforces settings at the network level via Cloudflare, so requests from blocked crawlers are stopped before they reach the site. This site's own observation (2026-10-11) found every beehiiv host checked returning server: cloudflare, and media.beehiiv.com returning cf-polished and cf-cache-status: HIT"
    evidenceUrl: "https://www.beehiiv.com/support/article/41416948596119-how-to-control-which-ai-crawlers-access-your-content"
  - layer: "Marketing site"
    name: "Next.js (Vercel) + Prismic"
    confidence: likely
    evidence: "This site's own observation (2026-10-11) found www.beehiiv.com returning server: cloudflare together with x-powered-by: Next.js, x-vercel-cache and an x-vercel-id containing hnd1 and iad1. The HTML references Prismic's static.cdn.prismic.io, and the pricing page has a Markdown twin (/pricing.md) generated from the same plan data"
    evidenceUrl: "https://www.beehiiv.com/"
  - layer: "Publication websites"
    name: "Remix (\"orchid\")"
    confidence: likely
    evidence: "This site's own observation (2026-10-11) found product.beehiiv.com, which carries beehiiv's product updates, and mail.bigdeskenergy.com, Denk's newsletter on a custom domain, both returning x-orchid-version: 2 and x-release-version: orchid-v2-prod-v34-20261010001027, with HTML containing Remix's window.__remixContext"
  - layer: "AI agent integration"
    name: "beehiiv MCP server (OAuth)"
    confidence: confirmed
    evidence: "GitHub's beehiiv/agents (MIT, checked 2026-10-11) says its plugin manifests for Claude Code, Grok Build, Gemini CLI, Cursor and Codex, plus the official MCP registry entry, all point at the same hosted server at https://mcp.beehiiv.com/mcp. This site's own observation found that URL answering an unauthenticated request with a 401 and www-authenticate: Bearer resource_metadata=\"https://mcp.beehiiv.com/.well-known/oauth-protected-resource/mcp\", carrying the same x-release-version: v9916 as app.beehiiv.com"
    evidenceUrl: "https://github.com/beehiiv/agents"
  - layer: "Payments and payouts"
    name: "Stripe (Stripe Express)"
    confidence: confirmed
    evidence: "The pricing page FAQ (checked 2026-10-11) states that beehiiv takes 0% of paid subscription and digital product revenue, leaving only Stripe's standard processing fee of 2.9% + $0.30 per transaction. The Ad Network FAQ says a Stripe Express account is required to receive ad network and paid recommendation earnings, and that alternative processors such as PayPal and Wise are not supported"
    evidenceUrl: "https://www.beehiiv.com/support/article/17507491038231-ad-network-faq"
  - layer: "Partner management"
    name: "Dub"
    confidence: confirmed
    evidence: "The official partner page (checked 2026-10-11) states that partners are paid on the 15th of each month for the prior month and that these payouts are managed by Dub.co, beehiiv's partner management system"
    evidenceUrl: "https://www.beehiiv.com/partners"
sources:
  - label: "beehiiv official: Home page"
    url: "https://www.beehiiv.com/"
    accessedAt: "2026-10-11"
  - label: "beehiiv official: Pricing (Free / Lite / Pro / Enterprise; default view of 1,000 subscribers, billed annually)"
    url: "https://www.beehiiv.com/pricing"
    accessedAt: "2026-10-11"
  - label: "beehiiv official: Markdown twin of Pricing (price table by subscriber count, features by plan)"
    url: "https://www.beehiiv.com/pricing.md"
    accessedAt: "2026-10-11"
  - label: "beehiiv official: About (founders, headcount, Q2 2026 figures)"
    url: "https://www.beehiiv.com/about"
    accessedAt: "2026-10-11"
  - label: "beehiiv official: Partner Program (up to 60%, Dub)"
    url: "https://www.beehiiv.com/partners"
    accessedAt: "2026-10-11"
  - label: "beehiiv official blog: beehiiv Raises $2.6 Million Seed to Empower Publishers (press release dated 2021-10-05)"
    url: "https://www.beehiiv.com/blog/beehiiv-raises-26-million-seed"
    accessedAt: "2026-10-11"
  - label: "beehiiv official blog: beehiiv Powers Expansion with 1.6M Seed Extension (press release dated 2022-09-12)"
    url: "https://www.beehiiv.com/blog/beehiiv-expands-seed-round-fundraising"
    accessedAt: "2026-10-11"
  - label: "beehiiv official blog: beehiiv Raises $12.5M Series A led by Lightspeed Venture Partners (2023-06-21)"
    url: "https://www.beehiiv.com/blog/beehiiv-raises-12-5-series-a-lightspeed-venture-partners"
    accessedAt: "2026-10-11"
  - label: "beehiiv official blog: beehiiv Acquires Swapstack (2023-09-26)"
    url: "https://www.beehiiv.com/blog/beehiiv-acquires-swapstack"
    accessedAt: "2026-10-11"
  - label: "beehiiv official blog: The beehiiv Story: Chapter 2 (2023-11-16)"
    url: "https://www.beehiiv.com/blog/beehiiv-story-chapter-2"
    accessedAt: "2026-10-11"
  - label: "beehiiv official blog: The beehiiv Story: Chapter 3 (Series B, 2024-11-22)"
    url: "https://www.beehiiv.com/blog/the-beehiiv-story-chapter-3"
    accessedAt: "2026-10-11"
  - label: "beehiiv official blog: The beehiiv Story: Chapter 4 ($32M annualized, 2025-11-19)"
    url: "https://www.beehiiv.com/blog/the-beehiiv-story-chapter-4"
    accessedAt: "2026-10-11"
  - label: "beehiiv official blog: The State of Newsletters 2026 (January 2026)"
    url: "https://www.beehiiv.com/blog/the-state-of-newsletters-2026"
    accessedAt: "2026-10-11"
  - label: "beehiiv product updates: On-Demand Ads (2026-03-09)"
    url: "https://product.beehiiv.com/p/on-demand-ads"
    accessedAt: "2026-10-11"
  - label: "beehiiv product updates: beehiiv MCP v2 (2026-04-30)"
    url: "https://product.beehiiv.com/p/beehiiv-mcp-v2"
    accessedAt: "2026-10-11"
  - label: "beehiiv product updates: Recommendations Reimagined (2026-07-09)"
    url: "https://product.beehiiv.com/p/recommendations-reimagined"
    accessedAt: "2026-10-11"
  - label: "beehiiv product updates: Community (Summer Release Event recap, 2026-07-17)"
    url: "https://product.beehiiv.com/p/community"
    accessedAt: "2026-10-11"
  - label: "beehiiv product updates: AI Discovery (AI Crawl Control, 2026-08-20)"
    url: "https://product.beehiiv.com/p/ai-discovery"
    accessedAt: "2026-10-11"
  - label: "beehiiv product updates: Paid Recs, beehiiv AI, and More (2026-09-29)"
    url: "https://product.beehiiv.com/p/paid-recs-beehiiv-ai-and-more"
    accessedAt: "2026-10-11"
  - label: "beehiiv help center: Ad Network FAQ"
    url: "https://www.beehiiv.com/support/article/17507491038231-ad-network-faq"
    accessedAt: "2026-10-11"
  - label: "beehiiv help center: Growing your audience with paid incoming recommendations (the 20% fee)"
    url: "https://www.beehiiv.com/support/article/14492963616279-growing-your-audience-with-paid-incoming-recommendations"
    accessedAt: "2026-10-11"
  - label: "beehiiv help center: How to control which AI crawlers access your content"
    url: "https://www.beehiiv.com/support/article/41416948596119-how-to-control-which-ai-crawlers-access-your-content"
    accessedAt: "2026-10-11"
  - label: "beehiiv help center: What you can do with the beehiiv MCP (updated 2026-10-04)"
    url: "https://www.beehiiv.com/support/article/41262491804439-what-you-can-do-with-the-beehiiv-mcp"
    accessedAt: "2026-10-11"
  - label: "beehiiv official: Trust Center (SOC 2 Type 2, where data is stored)"
    url: "https://security.beehiiv.com/"
    accessedAt: "2026-10-11"
  - label: "beehiiv official: Sub-processor list"
    url: "https://subprocessors.beehiiv.com/sub-processor-list"
    accessedAt: "2026-10-11"
  - label: "beehiiv careers page: Data Scientist, Ad Network (global) (posted 2026-09-24)"
    url: "https://beehiiv.bamboohr.com/careers/65"
    accessedAt: "2026-10-11"
  - label: "GitHub: beehiiv/has_state_machine (Ruby, MIT)"
    url: "https://github.com/beehiiv/has_state_machine"
    accessedAt: "2026-10-11"
  - label: "GitHub: beehiiv/agents (MCP plugin manifests, MIT)"
    url: "https://github.com/beehiiv/agents"
    accessedAt: "2026-10-11"
  - label: "Ghost official: Pricing (no additional transaction fees from Ghost)"
    url: "https://ghost.org/pricing/"
    accessedAt: "2026-10-11"
  - label: "Crunchy Data official site (Fully-Managed Cloud Postgres)"
    url: "https://www.crunchydata.com/"
    accessedAt: "2026-10-11"
---

beehiiv is a platform for writing and sending newsletters, growing a readership and turning it into money, all from one screen. It started with newsletters and now also covers websites, podcasts, communities and digital products; its About page (checked 2026-10-11) calls it a "newsletter-first" platform. Like [Ghost](/en/articles/ghost), dissected on this site, it takes no cut of paid subscription revenue (Ghost's pricing page likewise says there are no additional transaction fees from Ghost). What sets beehiiv apart is that, while growing on venture capital, it owns an ad network and a marketplace where newsletters buy and sell recommendations of one another. Instead of taking a cut, it has made the machinery that fattens writers' wallets the thing it sells.

## Service overview

beehiiv is sold in four plans, from the free Free plan through Lite and Pro to custom-priced Enterprise, and according to the pricing page every plan includes newsletters, websites, podcasts, communities and digital products. What changes between plans is limits, support and advanced features.

:::fact
According to the About page (checked 2026-10-11), beehiiv was founded in 2021 by Tyler Denk, Benjamin Hargett and Jacob Hurd, early employees at Morning Brew. The company is fully remote, spread across 12 countries, with 129 full-time employees. As of Q2 2026 it lists more than 75 billion emails sent all time, more than 450 million unique readers, more than $60 million earned by users via beehiiv, and more than 170,000 publications. According to a press release dated October 5, 2021, the seed round was $2.6 million led by Social Leverage, joined by Thirty Five Ventures, Company Ventures and others. CEO Denk was the second employee at Morning Brew and later a Product Lead at Google; Hargett and Hurd were software engineers at Morning Brew. On September 12, 2022, the company announced a $1.6 million seed extension led by existing investors Creator Ventures, Blue Wire Capital and Social Leverage, bringing the total raised to nearly $4.2 million; revenue had grown more than 30% every month since launch in November 2021, and the team numbered eight. The Series A on June 21, 2023 was $12.5 million led by Lightspeed Venture Partners, when the revenue run rate was $4 million, and the post says the company became profitable on a monthly basis in April 2023. According to the CEO's blog of November 22, 2024, the Series B in April 2024 was $33 million led by NEA with Lightspeed, Sapphire Sport, DST and others, of which $1 million was set aside as an allocation for users to invest. It acquired Swapstack, a newsletter advertising platform, in September 2023, and Typedream, an AI website builder, in June 2024. According to the CEO's blog of November 19, 2025, annualized revenue was $32 million, the company had 110 employees, and it sends more than 3 billion emails a month.
:::

:::fact
According to the pricing page (checked 2026-10-11, US dollars), the default view is "up to 1,000 subscribers, billed annually": Free is $0, Lite $49 a month, Pro $95 a month, and Enterprise custom. According to the page's Markdown twin (/pricing.md), monthly billing at the same 1,000 tier is $59 for Lite and $109 for Pro, and the annual totals are $588 for Lite and $1,140 for Pro. Prices rise with subscriber tiers: Free goes up to 2,500 subscribers, Lite is sold up to the 100,000 tier ($399 a month billed annually, $469 monthly), and Pro up to the 250,000+ tier ($869 and $999 respectively). According to the FAQ, yearly billing saves up to 20% over monthly, and every plan includes unlimited email sends. beehiiv takes 0% of paid subscription and digital product revenue; the only charge is [Stripe](/en/articles/stripe)'s standard processing fee of 2.9% + $0.30 per transaction. Lite adds the ad network, paid subscriptions, automations and MCP write access; Pro adds removal of beehiiv branding, AI bot control, the Send API and up to 10 publications; Enterprise adds SSO (SAML), dedicated IPs, a no-training and zero-retention setting, and bring-your-own AI model keys. The Markdown twin notes that the Ad Network and Recommendations added on Lite are "not in trial; not in all regions," and that the plan keys in code remain launch / grow / scale / enterprise. A product update on August 20, 2026 called the upper plan "Max," but the plans listed on the pricing page on 2026-10-11 were Free, Lite, Pro and Enterprise.
:::

:::pull
A company that takes no cut has to own another tap that pays it more the more its writers earn. For beehiiv, that tap was advertising and brokering recommendations.
:::

::scorecard

## UX analysis

The weight of beehiiv's experience lies in gathering writing, growing and earning onto one screen, and then placing ways to earn inside it before you go looking.

- **The pricing page shows the math up front.** Moving the subscriber slider on the pricing page makes an average monthly ad revenue figure appear next to "Ad monetization" on Lite and Pro (values this site read from the page's JavaScript; nothing is shown at the 1,000 tier). In a blog post on November 16, 2023, Denk wrote that most SaaS companies are an expense to their users while beehiiv was built from day one to be value-additive, and named as the top success metric the number of users making more money from beehiiv than they pay it. The pricing table looks like that idea put directly on screen.
- **Ads go in while you write.** According to the product update of March 9, 2026, ad offers refresh every hour, and typing `/ads` in the editor lets you pick an offer and drop it into a post. You have 5 days (120 hours) to send it after selecting it, a performance report arrives 96 hours after sending, and earnings are deposited on the 20th of each month. Before that, publishers waited for offers that arrived every Sunday. According to the Ad Network FAQ, a machine learning system matches offers to newsletters, and offers that don't fit disappear when downvoted. Sales, ad copy and billing are all out of the writer's hands.
- **Four recommendations right after sign-up.** According to the product update of July 9, 2026, right after a new reader subscribes, a writer can show up to four other newsletters they recommend. It merges free mutual recommendations with paid recommendations (formerly Boosts), where money changes hands for each reader referred; more than 15 million subscriptions have come from Recommendations and Boosts so far, and newsletters that recommend others are 32x more likely to be recommended back. In the September 29 update, subscriptions from recommendations had reached nearly 20 million. According to the help center, the feature that automatically removed subscribers who failed verification is gone, replaced by tags that show the outcome and leave the decision to the writer.
- **AI enters from outside and from inside.** beehiiv opened early access to its MCP server for paid users in March 2026, opened it to every user with no waitlist and no paid plan required in v2 on April 30, and added write access on paid plans from June 16. According to the September 29 update, the MCP has handled more than 6 million requests, and beehiiv became an official connector in both [Claude](/en/articles/claude) and [ChatGPT](/en/articles/chatgpt). Inside the product, the agent "Copilot," launched at the Summer Release Event on July 16, was renamed "beehiiv Agent" in August because users disliked the name, and gained memory and subagents in September. The help center (updated 2026-10-04) says Free is read-only, Lite can make changes, and Pro and Enterprise can schedule and send posts, while the README of beehiiv/agents on GitHub says publishing and sending stay human actions; the two descriptions do not line up.
- **AI crawlers are made visible and stopped.** According to the product update of August 20, 2026, beehiiv automatically emits structured data (JSON-LD) for every post and, for every site, an llms.txt generated from its content. Saying that bots from OpenAI, Anthropic, Google and Microsoft crawled content hosted on beehiiv more than half a billion times the previous month, it also launched AI Crawl Control, built with [Cloudflare](/en/articles/cloudflare). According to the help center, it covers Pro and Enterprise publications that use the Website Builder with a custom domain, shows 22 crawlers in four categories, and enforces blocks at the network level through Cloudflare. It is not a request like robots.txt; bots that ignore the rules do not get through either.
- **Whether you can earn depends on your country.** According to the Ad Network FAQ, earnings from ads and paid recommendations can only be received through a Stripe Express account, and PayPal and Wise are not supported. Writers in countries where Stripe Express is not available cannot join the ad network, regardless of plan. Paid recommendation offers are often limited by country too: of the five shown as examples in the September 29 update, four were limited to readers in the US, or in the US, Canada and Europe. Using it from Japan, the value as a sending tool and the value as an earning tool have to be weighed separately.

## Tech stack

::techstack

:::fact
This site's own observation (2026-10-11) found the marketing site www.beehiiv.com returning server: cloudflare together with x-powered-by: Next.js and an x-vercel-id containing hnd1 and iad1. Meanwhile, the dashboard at app.beehiiv.com, the API at api.beehiiv.com, embedded forms at embeds.beehiiv.com and the MCP at mcp.beehiiv.com all returned via: 1.1 heroku-router behind server: cloudflare, with headers such as x-runtime and x-download-options: noopen, and app and mcp both carried x-release-version: v9916. mcp.beehiiv.com/mcp answered an unauthenticated request with a 401 and a www-authenticate header pointing to OAuth protected resource metadata. product.beehiiv.com and mail.bigdeskenergy.com, a custom domain, both of which serve writers' sites, returned x-orchid-version: 2, a release name of orchid-v2-prod-v34-20261010001027 and a 30-day s-maxage, and their HTML contained `window.__remixContext`. Images on media.beehiiv.com came with Amazon S3 headers and a Cloudflare image optimization header (cf-polished). The Markdown twin of the pricing page tells AI systems answering price questions not to scrape the HTML slider but to call the MCP tool `get_pricing` at `https://www.beehiiv.com/api/mcp`. Links inside official blog posts carry utm_source=beehiivblog.beehiiv.com, and the sub-processor list page ends with "Powered by beehiiv." The beehiiv organization on GitHub publishes a Ruby gem that adds state machines to ActiveRecord models (`has_state_machine`) and plugin definitions for Claude Code, Gemini CLI, Cursor, Codex and others that connect to the MCP server (agents).
:::

:::fact
The official sub-processor list (checked 2026-10-11) names Amazon and Salesforce for cloud hosting, SendGrid as email service provider, Crunchy Data and ClickHouse Cloud for database hosting, Cloudflare for CDN and WAF, Tiptap for collaborative text editor hosting, Stripe for payments and identity verification, New Relic and Sentry for monitoring, Retool for internal dashboards, Zendesk for support tickets, Customer.io for analytics and customer outreach, Kickbox for email validation, and E-Hawk and IPQualityScore for fraud detection. According to the Trust Center, all data is stored in AWS regions in the United States, and the company achieved SOC 2 Type 2 compliance as of January 22, 2026. On the ad network, the CEO's blog of November 22, 2024 says a handful of machine learning engineers build models from audience data, content, advertiser copy and conversions, and the post of November 19, 2025 says the team spent the better part of a year building and training models for the ad network and then automated how offers are provisioned. A data scientist job posted on September 24, 2026 lists the ad network's ClickHouse data model, entity resolution and graph database modeling, and analysis of the balance between publisher payouts and advertiser value among its duties, with compensation of $120,000 to $220,000 depending on experience. According to the Ad Network FAQ, CPC ads count "payable clicks," which remove clicks flagged as automated or invalid and weight the rest by quality signals; advertiser billing and publisher payouts are both that same number multiplied by their own rates.
:::

:::guess
The stack appears to lean toward assembling managed services rather than building everything in-house. The app itself is presumably Rails on Heroku (x-runtime and x-download-options: noopen are headers commonly seen on Rails apps, and the company's own gem targets ActiveRecord), the database is Crunchy Data's managed Postgres, analytics is ClickHouse Cloud, sending is SendGrid, and the front door is Cloudflare. That a company of 129 full-time employees could expand from newsletters into websites, podcasts, communities and digital products presumably owes much to this "rent what can be rented" trade-off. What it keeps in-house, by contrast, are the parts that decide where money flows: the ad-matching models, the payable-click judgment and the verification of recommended subscribers. That the MCP server returns the same release number as the dashboard suggests the MCP runs as part of the main app rather than as a separate service. That the pricing page's Markdown twin steers AI toward `get_pricing` reads as treating AI assistants as a customer entry point alongside search engines.
:::

## Ads and recommendations that pay for the plan

:::fact
beehiiv's ad network was described in the September 2022 seed extension announcement as about to be piloted with select publishers and brand partners, and the September 26, 2023 post on the Swapstack acquisition says the ad network had launched two weeks earlier. According to the same post, Swapstack was home to thousands of publishers and hundreds of advertisers and had facilitated more than $2 million in advertising spend, and its CEO, Jake Schonberger, would lead the beehiiv Ad Network as Head of Brand Partnerships. The post also says the co-founders had previously built Morning Brew's ad management platform, which facilitated tens of millions of dollars in advertising revenue. In October 2024, CPM deals with guaranteed, impression-based payouts were added (the CEO's blog of November 22, 2024), and the product update of March 9, 2026 says newsletters collectively earn more than $1 million every month from brands such as Netflix, Roku, HubSpot, Nike and AG1. According to the January 2026 report "The State of Newsletters 2026," the ad network's monthly revenue totals in 2025 doubled from 2024, paid subscriptions brought writers $19 million ($8 million in 2024), and Boosts accounted for 5% of total earnings. In paid recommendations (formerly Boosts), the side seeking readers sets a price per verified subscriber (CPA), and a 20% fee covering operational and Stripe costs is built into that price. In the help center's example, the payer pays $2.50 and the recommending publication receives $2, with a minimum deposit of $20. The paid plan prices and the average ad revenue shown by the pricing page's slider were as follows (prices are per month billed annually, from the pricing page's Markdown twin; the average ad revenue is what this site read from the pricing page's JavaScript).
:::

| Subscribers (up to) | Lite (annual, per month) | Pro (annual, per month) | Average ad revenue on the pricing page |
| --- | --- | --- | --- |
| 1,000 | $49 | $95 | not shown |
| 2,500 | $69 | $129 | $39/mo |
| 5,000 | $95 | $169 | $78/mo |
| 10,000 | $119 | $199 | $128/mo |
| 25,000 | $169 | $299 | $180/mo |
| 50,000 | $249 | $399 | $255/mo |
| 75,000 | $329 | $499 | $355/mo |
| 100,000 | $399 | $599 | $400/mo |
| 150,000 | — | $689 | $600/mo |
| 200,000 | — | $779 | $620/mo |
| 250,000+ | — | $869 | $2,300/mo |

:::guess
In the five tiers from 10,000 to 100,000 subscribers, the average ad revenue slightly exceeds Lite's monthly price billed annually ($400 against $399 at 100,000), and at 250,000+ it is $2,300 against Pro's $869. Laying the numbers out so that ads appear to win back the plan's price reads as turning Denk's metric, the number of users who earn more than they pay, into a promise to new customers. Averages may, however, be pulled up by a few newsletters that earn a great deal, and the FAQ itself says estimated payouts are not guaranteed. From the company's side, the ad network presumably earns on the gap between the rate billed to advertisers and the rate paid to writers, and paid recommendations on the 20% fee; in both cases, beehiiv's share grows as writers earn more. It is presumably a design that takes from the money flowing through the network what it declines to take from subscriptions.
:::

## Business model

The pillars of revenue are plan fees that rise with subscriber count and the money that flows between writers and advertisers, and among writers, through the ad network and paid recommendations. It takes nothing from paid subscription and digital product revenue.

:::fact
The Series A post of June 21, 2023 said that in addition to recurring SaaS revenue, the company had three other meaningful revenue streams: the ad network, Boosts and courses. The same post says it did not spend a dollar on acquisition for the first 12 months and that about 90% of monthly growth remained organic, that is, unpaid. Revenue went from about $90,000 in December 2022 (the CEO's blog of November 16, 2023), through a $4 million run rate in June 2023, nearly $7 million expected for 2023, nearly $2 million a month in November 2024 and passing $20 million ARR in July 2025, to $32 million annualized in November 2025. A job posted on September 24, 2026 cites more than $30 million ARR and 100% year-over-year growth. According to the post of November 19, 2025, users have earned more than $45 million on the platform, and the company estimates more than $100 million more earned off-platform but on its rails, such as sponsorships newsletters secure themselves. According to the official partner page (checked 2026-10-11), a referral program pays up to 60% of the revenue from each referred paying customer, monthly, for a full year: the first conversion makes a partner Bronze (50%), and lifetime conversions move them up to Silver (55%) and Gold (60%). Cookies last 60 days, referred users get a 14-day trial and 20% off their first 3 months, payouts are made on the 15th of each month through Dub.co, and more than $2 million has been paid to partners so far. Search ads on Bing or Google (especially on branded terms or domain names) are prohibited, while ads on Meta, LinkedIn and other social platforms are allowed.
:::

:::guess
Since the price depends on the number of subscribers rather than a writer's revenue, the more a writer earns from paid subscriptions, the lighter beehiiv's fee becomes relative to that revenue. While flying the same 0% flag as [Ghost](/en/articles/ghost), beehiiv reads as going after what it declined to take through network fees: the ad network and paid recommendations. Paying up to 60% for a year through the referral program appears to be a design that hands sales to writers and agencies that already have audiences instead of buying paying customers with ad spend, presumably a natural choice for a company that wrote it spent nothing on acquisition in its first year. Including websites, podcasts, communities and digital products in every plan, and taking nothing from digital product sales either, appears to be groundwork for gathering a writer's work in one place, raising the effort of switching, and collecting both plan fees and network fees for longer.
:::

Started in 2021 to make Morning Brew's technology available to anyone, beehiiv has become a company with $32 million in annualized revenue by selling the fattening of writers' wallets through its ad network and paid recommendations, without taking a cut of subscriptions. It has widened its scope to websites, podcasts, communities and digital products, and through its MCP server and AI Crawl Control it is moving to hold both doors: the one through which AI uses it and the one through which AI reads it. How many writers find the average ad revenue printed next to the price list to be a real number will be the test of this design.
