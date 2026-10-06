---
service: "note"
title: "13.13 Million Members, 91.23 Million MAU, ¥21.3 Billion in Annual GMV, Revenue Up 35% and Operating Profit Nearly Tripled, and Japan's No. 2 Domain Cited by AI — Dissecting note, Which Has No Rankings and Re-Routes Its Articles With an LLM"
description: "note, the Japanese media platform launched in 2014, had 13.13 million members and 89.93 million public pieces of content at the end of August 2026, and ¥21.3 billion in gross merchandise value (tax included) for the fiscal year ended November 2025. Its third-quarter results for the fiscal year ending November 2026, released on October 6, 2026, show quarterly revenue of ¥1.453 billion (up 35.1% year on year) and operating profit of ¥310 million (up 199.5%). Fees are 10% or 20% by content type plus 5–15% by payment method. The corporate plan note pro costs ¥80,000 a month before tax; the personal note premium is ¥500 a month. note has no rankings, rebuilt its recommendations with an LLM in February 2026, ranks second in Japan among domains cited by AI search, and is betting on AI-era distribution through its \"AI Context Network\" of topic pages and the government's GENIAC project. The article dissects it from the earnings presentation and summary, official pricing pages, engineering posts and this site's own observations."
lead: "note's front page has no ranking. The company has explained again and again that it wants to keep writers from drifting toward whatever earns page views. What it put there instead is an LLM that reads and classifies articles and recommendations tailored to each reader. In 2026, as more people ask an AI and stop at the answer, note became Japan's second most-cited domain in AI search, grew revenue 35% and nearly tripled operating profit. This article dissects what a place without rankings is trying to sell in the age of AI."
category: media
tags: [creator-economy, publishing, subscription, nextjs, ruby-on-rails, llm, aws, ai]
publishedAt: "2026-10-06"
updatedAt: "2026-10-06"
lastVerified: "2026-10-06"
serviceUrl: "https://note.com/"
# Affiliate link placeholder: no public affiliate or referral program for note pro or note
# premium was found (checked 2026-10-06 on pro.lp-note.com and premium.lp-note.com). The
# reader-side "note affiliate (beta)" ran only for a limited period in 2024 and has ended.
# Leave this block commented out unless the owner finds a program.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<note-referral-link>"
#   program: "note"
vendor: "note inc."
origin: "JP"
heroTheme: "note"
scores: { product: 4.5, ux: 4.5, tech: 4.0, business: 4.5 }
techStack:
  - layer: "Backend"
    name: "Ruby on Rails + Sidekiq Enterprise (Redis)"
    confidence: confirmed
    evidence: "A post by a note engineer (2021-06-23) states that \"the early note was an SPA built on top of Ruby on Rails' assets.\" A post in the company's Advent Calendar (2025-12-13) explains that the team decided to control email sending rates \"on the Rails side\" and adopted Sidekiq::Limiter, the Redis-based rate limiter in Sidekiq Enterprise"
    evidenceUrl: "https://note.com/sunakujira/n/ne325af361530"
  - layer: "Frontend"
    name: "Next.js + Svelte (shared components) / Nuxt.js (legacy pages) / Biome, monorepo"
    confidence: confirmed
    evidence: "A post by the note engineering team (2025-02-01) lays out the timeline: Angular 1.x in 2014, a move to Nuxt.js completed in 2021, a decision to switch gradually to Next.js because of the cost of moving to Nuxt 3, shared components written in Svelte, a move to a monorepo, and a switch from ESLint to Biome"
    evidenceUrl: "https://engineerteam.note.jp/n/nb5b9d045cf86"
  - layer: "Delivery and service routing"
    name: "Amazon CloudFront + Envoy / Next.js App Router (frontend.st-note.com)"
    confidence: likely
    evidence: "This site's own observation (2026-10-06) found note.com returning via: CloudFront and x-envoy-upstream-service-time, a vary header listing rsc and next-router-state-tree (a Next.js App Router response), and a link header preloading CSS from frontend.st-note.com/next/_next/static with a nonce. Images were served from assets.st-note.com"
  - layer: "Article tagging and scoring"
    name: "Gemini 2.5 Flash-Lite (by subsidiary note AI creative)"
    confidence: confirmed
    evidence: "In a company event report (2026-04-06), an engineer explains that the project to have generative AI attach tags and quality scores to articles started on Gemini 2.0 Flash-Lite and moved to Gemini 2.5 Flash-Lite in mid-January 2026. The tagging runs on systems of the subsidiary note AI creative, founded in December 2023, which writes the results into note's relational database"
    evidenceUrl: "https://note.jp/n/nce0a239e3c40"
  - layer: "Recommendation data platform"
    name: "Snowflake + Databricks + Amazon S3 / SQS (formerly Amazon SageMaker)"
    confidence: confirmed
    evidence: "The same report explains that the relational database is synced into Snowflake, which serves as the \"boundary of responsibility\" between organizations; that note runs classification, matching and recommendation logic on Databricks as its machine-learning SaaS and feeds results back to the main service asynchronously via S3 and SQS; and that it previously used Amazon SageMaker"
    evidenceUrl: "https://note.jp/n/nce0a239e3c40"
  - layer: "Email delivery"
    name: "Amazon SES"
    confidence: confirmed
    evidence: "The Advent Calendar post (2025-12-13) states that \"note sends many kinds of email every day, and much of it goes through AWS SES,\" and describes controls to stay under SES's per-second sending limit"
    evidenceUrl: "https://note.com/sunakujira/n/ne325af361530"
  - layer: "In-house AI use"
    name: "Claude (all employees) / Claude Code"
    confidence: confirmed
    evidence: "The earnings presentation for the third quarter of the fiscal year ending November 2026 (2026-10-06) states that Claude was distributed to all employees as a shared AI tool, that executives and managers took hands-on Claude Code training, and that development now runs requirements, design and coding together with AI agents"
    evidenceUrl: "https://www.release.tdnet.info/inbs/140120261006546608.pdf"
sources:
  - label: "note inc.: Earnings presentation, Q3 of FY ending November 2026 (2026-10-06)"
    url: "https://www.release.tdnet.info/inbs/140120261006546608.pdf"
    accessedAt: "2026-10-06"
  - label: "note inc.: Summary of financial results, Q3 of FY ending November 2026 (2026-10-06)"
    url: "https://www.release.tdnet.info/inbs/140120261006546607.pdf"
    accessedAt: "2026-10-06"
  - label: "note pro (official, pricing)"
    url: "https://pro.lp-note.com/"
    accessedAt: "2026-10-06"
  - label: "note premium (official)"
    url: "https://premium.lp-note.com/"
    accessedAt: "2026-10-06"
  - label: "note inc.: Behind note's rebuild of recommendations with an LLM (2026-02-13)"
    url: "https://note.jp/n/nf016d2c0bc2f"
    accessedAt: "2026-10-06"
  - label: "note inc.: The recommendation overhaul — boundaries between organizations and systems behind 2x page views (2026-04-06)"
    url: "https://note.jp/n/nce0a239e3c40"
    accessedAt: "2026-10-06"
  - label: "note engineering team: A brief history of note's frontend (2025-02-01)"
    url: "https://engineerteam.note.jp/n/nb5b9d045cf86"
    accessedAt: "2026-10-06"
  - label: "note inc.: Splitting note's frontend into apps with Next.js + Svelte (2021-06-23)"
    url: "https://note.jp/n/n7f757d7050f6"
    accessedAt: "2026-10-06"
  - label: "note inc. Advent Calendar 2025: Living with AWS SES rate limits using Sidekiq::Limiter (2025-12-13)"
    url: "https://note.com/sunakujira/n/ne325af361530"
    accessedAt: "2026-10-06"
---

note is a media platform where anyone can publish articles for free or for a price. Since 2014, personal diaries, corporate PR and posts from ministries and local governments have sat side by side in the same place. Where [Shizuka na Internet](/en/articles/sizu-me) sells smallness and [Ghost](/en/articles/ghost) sells writers' independence, note has built "a big place with no rankings." And in 2026, that place is becoming somewhere AI reads.

## Service overview

On note, anyone can write and collect money from readers through paid articles, paid magazines, subscription magazines, memberships and tips. Companies and organizations can run an owned-media site on their own domain through the monthly note pro plan. The operator, note inc., is listed on the Growth Market of the Tokyo Stock Exchange (code 5243).

:::fact
According to note inc.'s earnings presentation for the third quarter of the fiscal year ending November 2026 (released October 6, 2026), note had 13.13 million registered members and 89.93 million public pieces of content at the end of August 2026, and gross merchandise value (GMV, tax included) of ¥21.3 billion for the fiscal year ended November 2025. MAU, counting every browser including non-members that visited at least once a month, averaged 91.23 million from December 2025 to May 2026. Citing Similarweb, the presentation puts note.com 13th among websites in Japan as of June 1, 2026. It also says note has been designated, alongside Google, Meta and LY Corporation, as a "large-scale specified telecommunications service provider" under Japan's Information Distribution Platform Act, with 13 operators designated as of August 31, 2026. During the quarter, the Ministry of Foreign Affairs, the Ministry of Economy, Trade and Industry, cities such as Kamaishi and Akashi, and all prefectural schools in Aomori began publishing on note.
:::

:::fact
The same presentation says the top 1,000 creators averaged ¥15.15 million in annual sales for the fiscal year ended November 2025, and that by value, 91.4% of purchases came from readers who bought in two or more months of the year and 70.5% from those who bought in six or more. On February 12, 2026, note rebuilt its recommendation system from the ground up using an LLM. In an interview (2026-02-13), CEO Sadaaki Kato said note holds about 70 million works (as of the end of November 2025) and receives more than 2 million posts a month, and explained that "note deliberately has no rankings."
:::

:::pull
No rankings, and an LLM that reads every article to route it to the right reader. That place became Japan's second most-cited domain in AI search.
:::

::scorecard

## UX analysis

note's experience is aimed at two things at once: writers who are not pulled around by numbers, and readers who find articles that suit them. It is trying to achieve both through classification and recommendation instead of rankings.

- **No rankings.** In the February 2026 interview, Kato explains that rankings push creators toward writing for numbers and erode diversity. What the front page shows instead is 53 categories, topics refreshed every hour, a new "Trending" section and a personalized "For you" section.
- **An LLM reads and classifies each article.** According to the interview and an April 2026 event report, an LLM attaches tags and a quality score almost as soon as an article is posted, sorts it into topics, and matches it against each reader's behavior. Articles that look like AI-generated text pasted in as-is are given lower display priority, and aggressive expressions are detected. Impressions through category pages had grown about 4.5x and page views about 2.6x (approximate) by the end of February 2026.
- **Selling opens up in steps.** According to the note premium page, monthly memberships have been available to free members since July 2022. The ¥500-a-month note premium adds subscription magazines, scheduled posting, a price ceiling of up to ¥100,000, an increase in magazines per account from 21 to 1,000, and an increase in daily file uploads from 10 to 100. The first month is free.
- **Japanese articles go abroad.** According to the earnings presentation, AI translation started for some creators in March 2026, extended to English translations of free articles for all creators in May, and in late August to English for paid articles and Korean for free articles. It adds that NAVER's "AI Briefing" in Korea has started citing note articles.
- **The weak spot is how hard the fees are to read.** From what a reader pays, note deducts a platform fee set by content type and a processing fee set by payment method. The same ¥1,000 article leaves the writer with a different amount depending on how the reader paid.

## Tech stack

::techstack

:::fact
note's frontend has been rebuilt three times. According to the engineering team's post (2025-02-01) and a transcript of a June 2021 talk, note in 2014 was an AngularJS and CoffeeScript SPA built on the Ruby on Rails asset pipeline; it could not render on the server and had to return HTML to crawlers through a headless browser. The move to Nuxt.js started in 2018 and was completed in 2021. Because moving to Nuxt 3 proved costly and incompatible, note changed course to switch to Next.js gradually, carving out features such as the editor and settings pages as independent Next.js apps and writing shared components in Svelte so they work in both Nuxt and Next. It moved to a monorepo and switched from ESLint to Biome. This site's own observation (2026-10-06) found note.com's front page returning a Next.js App Router response (rsc in the vary header) through CloudFront, with an Envoy header (x-envoy-upstream-service-time).
:::

:::fact
In an event report published on April 6, 2026, note's engineers showed the architecture of the recommendation system for the first time. Systems run by the subsidiary note AI creative (founded December 2023) use Gemini to tag and score articles (moving from Gemini 2.0 Flash-Lite to 2.5 Flash-Lite in mid-January 2026) and write the results into note's relational database. That database is synced into Snowflake, which serves as the "boundary of responsibility" between the organizations; on note's side, Databricks runs classification, matching and recommendation logic, and results flow back to the main service asynchronously via S3 and SQS. note previously used Amazon SageMaker, but it was hard to operate and no team maintained it full time. On the backend, a post of December 13, 2025 describes adopting the rate limiter in Sidekiq Enterprise to control email sending through AWS SES on the Rails side. The earnings presentation says note gave Claude to every employee, adopted a development flow that runs from requirements to coding with AI agents, and kept headcount flat while revenue grew.
:::

:::guess
note's technical choices appear consistent in avoiding full rewrites and splitting along boundaries instead. The frontend carves features out into independent Next.js apps that coexist with the old Nuxt code. The recommendation pipeline connects the subsidiary, the data platform and the main service asynchronously through Snowflake, S3 and SQS so that each can change only its own part. Envoy showing up behind CloudFront is presumably consistent with routing different paths to different apps. Using the Flash-Lite line rather than a top-tier model for tagging appears to be a choice to keep down the cost of processing more than 2 million posts a month in near real time.
:::

## Business model

The foundation of revenue is the fee taken from what readers pay for articles. On top of it sit note pro for companies, data for AI companies and IP licensing.

:::fact
According to the earnings presentation, consolidated revenue for the third quarter of the fiscal year ending November 2026 (June–August 2026) was ¥1.453 billion (up 35.1% year on year), adjusted EBITDA ¥338 million (up 193.4%), operating profit ¥310 million (up 199.5%) and net income ¥334 million. Revenue for the first three quarters was ¥4.058 billion (up 33.2%), and against the full-year forecast announced on July 7 (revenue ¥5.65 billion, adjusted EBITDA ¥1.22 billion, operating profit ¥1.1 billion), the company expects profits at each level to land above plan. The business is split into note, note pro, corporate services, AI (the government's GENIAC generative-AI project) and IP (Tales & Co.), and the KPIs it emphasizes are note's GMV and note pro's ARR. Subscriptions (subscription magazines and memberships) were 29.4% of note's GMV, monthly purchasers grew 20.7% year on year, and ARPPU stayed in the ¥2,700 range. note pro's ARR grew 29.5% and paid contracts rose by 145. After investments from NAVER in December 2025 and KADOKAWA in April 2026, note repaid its borrowings and held ¥7.896 billion in cash at the end of August 2026, with an equity ratio of 70.6%.
:::

:::fact
The presentation's explanation of fees sets the platform fee at 10% for single paid content, paid magazines, tips and memberships, and 20% for subscription magazines. Processing fees depend on the payment method: 5% for credit cards, 6.5% for PayPal, 7% for PayPay and Amazon Pay, 10% for note points and 15% for mobile carrier billing. The take rate (both fees as a share of GMV) has been falling as single purchases and memberships grow and payment methods diversify, but the presentation says its mathematical floor is 15%. The official note pro page (as of 2026-10-06) lists ¥0 for the setup fee and the first month, ¥80,000 a month before tax, ¥880,000 a year before tax, and free plans for local governments, schools and cultural institutions.
:::

:::guess
note's business appears to be adding a layer that sells AI-era distribution on top of a foundation, reader payments, that is relatively insensitive to traffic volume. The presentation argues that as more people get answers from AI and stop visiting websites, note ranks second in Japan among domains cited by AI search (Ahrefs, June 2026) and draws about four times the AI-search traffic that other sites would be expected to (a joint study with VALUES, October 2025). The plan is to sell that strength to companies through the "AI Context Network," which gathers official information and readers' reviews into a page per work or product (more than 1.17 million keyword pages as of the end of September 2026), to earn usage fees from AI companies through the database being built under GENIAC, and to pass part of that on to creators. It reads as a decision to sell not page views but being "the place where first-hand information gathers."
:::

:::guess
The company attributes the near tripling of operating profit not only to revenue growth but to keeping headcount flat through AI. A fee-based platform does not need staff to grow in proportion to transactions, and internal productivity gains from AI appear to have compounded that. On the other hand, the presentation notes that GENIAC, the core of its AI revenue, is a government-commissioned project whose costs are reimbursed within set rules. Whether usage fees from AI companies become recurring revenue outside that commission is presumably the dividing line for the next stage.
:::

note started in 2014 as a place without rankings, where writers would not be pulled around by numbers. Twelve years later, without changing that policy, it has an LLM reading its articles and has become a place AI cites. The base of its revenue is still what readers pay for articles, but what it has begun to build on top is the value of being the place both people and AI decide to look first.
