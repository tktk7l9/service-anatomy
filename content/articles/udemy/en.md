---
service: "Udemy"
title: "37% Versus 15% for Instructors — How Udemy Shifted From a Course-by-Course Marketplace to Enterprise and Subscriptions, Then Became Part of Coursera"
description: "Udemy is the online course marketplace used by 84 million learners. In 2025, two-thirds of its $789.8 million in revenue came from the enterprise product, Udemy Business, while the consumer segment shrank 9% year over year. Instructors get 37% of a marketplace sale and, from 2026, 15% of subscription revenue. In Japan, Benesse has been its exclusive partner since 2015, and in May 2026 Udemy became a wholly owned subsidiary of Coursera. A dissection — from annual reports, the official tech blog, instructor announcements, and Benesse's official pages — of Next.js micro frontends carved out of a Django monolith and routed by Cloudflare Workers, an AI Assistant that calls gpt-4.1-nano only when it has to, and generative-AI localization that started with Japanese."
lead: "Udemy's tech blog is candid about its own weak spot: most of its traffic comes from outside the US, a significant portion of it from mobile browsers, yet its pages were served from the US. Udemy grew up as a marketplace where anyone could publish a course and anyone could buy one at a time. It has since moved its center of gravity to enterprise subscriptions, and in May 2026 it became a subsidiary of Coursera. This is a dissection of how its design and its way of making money have changed."
category: consumer-app
tags: [online-learning, marketplace, subscription, b2b, nextjs, django]
publishedAt: "2026-09-28"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://www.udemy.com/"
# Affiliate link placeholder: the owner must join the Udemy affiliate program
# (https://www.udemy.com/affiliate/, run on Impact; Japan applications are reviewed by Benesse)
# before enabling this block. Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<udemy-impact-affiliate-link>"
#   program: "Udemy Affiliate Program (Impact)"
vendor: "Udemy, Inc. (a wholly owned subsidiary of Coursera, Inc.)"
origin: "US"
heroTheme: "udemy"
scores: { product: 4.0, ux: 3.5, tech: 4.0, business: 3.0 }
techStack:
  - layer: "Core web application"
    name: "Django (Python) monolith"
    confidence: confirmed
    evidence: "The official tech blog (January 2024) states that the marketplace, consumer subscription, and business applications live in a single monolithic codebase, that data is passed implicitly through Django templates, and that strings are extracted and translated through the Django monolith's pipeline"
    evidenceUrl: "https://medium.com/udemy-engineering/transforming-frontend-architecture-a-journey-from-monolith-to-micro-frontends-at-udemy-part-2-c9bd7ede5f1c"
  - layer: "Frontend"
    name: "Next.js + TypeScript (micro frontends, SSG/SSR)"
    confidence: confirmed
    evidence: "Part 2 of the same series states that, starting from a 2021 internal hackathon, Udemy moved to micro frontends carved out of the monolith with Next.js and TypeScript, generating static pages at build time for the CDN and falling back to Next.js apps hosted in the US for dynamic, uncached content"
    evidenceUrl: "https://medium.com/udemy-engineering/transforming-frontend-architecture-a-journey-from-monolith-to-micro-frontends-at-udemy-part-2-c9bd7ede5f1c"
  - layer: "API"
    name: "GraphQL + GraphQL Codegen"
    confidence: confirmed
    evidence: "Part 2 states that GraphQL is used for declarative data fetching, with GraphQL Codegen generating type-safe code"
    evidenceUrl: "https://medium.com/udemy-engineering/transforming-frontend-architecture-a-journey-from-monolith-to-micro-frontends-at-udemy-part-2-c9bd7ede5f1c"
  - layer: "Edge routing"
    name: "Cloudflare (CDN + Workers)"
    confidence: confirmed
    evidence: "The official post \"Migrating Udemy's Homepage to Micro Frontends\" (2024-05-01) states that Cloudflare Workers read a route configuration covering every frontend app and send users to the logged-out or logged-in homepage depending on whether an access-token cookie is present. In our own observation (2026-09-28), www.udemy.com returned server: cloudflare and resolved to Cloudflare IP addresses"
    evidenceUrl: "https://medium.com/udemy-engineering/migrating-udemys-homepage-to-micro-frontends-78bbd2e64925"
  - layer: "Deployment"
    name: "Kubernetes + Argo CD"
    confidence: confirmed
    evidence: "Part 2 of the micro-frontend series states that Argo CD handles declarative, automated deployment to the Kubernetes environment"
    evidenceUrl: "https://medium.com/udemy-engineering/transforming-frontend-architecture-a-journey-from-monolith-to-micro-frontends-at-udemy-part-2-c9bd7ede5f1c"
  - layer: "Monitoring"
    name: "Datadog / Sentry"
    confidence: confirmed
    evidence: "Part 3 of the micro-frontend series (2024-01-16) states that the dashboard tracking migration progress and performance is built on Datadog and Sentry"
    evidenceUrl: "https://medium.com/udemy-engineering/transforming-frontend-architecture-a-journey-from-monolith-to-micro-frontends-at-udemy-part-3-2dfdd74ff913"
  - layer: "AI Assistant"
    name: "OpenAI gpt-4.1-nano (fallback) + NeMo Guardrails embeddings"
    confidence: confirmed
    evidence: "The official tech blog (2025-05-28) states that learner intent is first classified by embedding similarity using NVIDIA's NeMo Guardrails, and only when similarity falls below 0.85 is gpt-4.1-nano asked to classify it. It estimates that about 32.5% of all learner messages reach the LLM"
    evidenceUrl: "https://medium.com/udemy-engineering/evolution-of-the-udemy-ai-assistant-intent-understanding-system-ec3ee0039364"
  - layer: "Data and ML platform"
    name: "Databricks (Delta Lake / Unity Catalog)"
    confidence: confirmed
    evidence: "The official tech blog (2025-08-04) states that a platform split across an S3 data lake with Hive and Spark on EMR, Redshift, DataHub, SageMaker, and AI gateways for OpenAI and Bedrock was consolidated on the Databricks Data Intelligence Platform, with Delta Lake as the single data format and Unity Catalog as unified governance"
    evidenceUrl: "https://medium.com/udemy-engineering/from-siloed-dataops-mlops-and-llmops-to-a-unified-data-intelligence-platform-4400be283641"
  - layer: "Cloud"
    name: "AWS"
    confidence: likely
    evidence: "The data-platform post says Udemy has used S3, EMR, Redshift, SageMaker, and Bedrock, and the micro-frontend series says pages were served from the US. No official document found names the cloud that hosts the core application"
sources:
  - label: "Udemy, Inc. Form 10-K (FY2025: learners, instructors, courses, share of revenue via Benesse)"
    url: "https://www.sec.gov/Archives/edgar/data/1607939/000160793926000034/udmy-20251231.htm"
    accessedAt: "2026-09-28"
  - label: "Udemy, Inc. Q4 and full-year 2025 results (Form 8-K exhibit)"
    url: "https://www.sec.gov/Archives/edgar/data/1607939/000160793926000006/q42025pressrelease.htm"
    accessedAt: "2026-09-28"
  - label: "Coursera IR: Coursera completes combination with Udemy (2026-05-11)"
    url: "https://investor.coursera.com/news/news-details/2026/Coursera-Completes-Combination-with-Udemy-to-Build-the-Worlds-Most-Comprehensive-Skills-Platform/default.aspx"
    accessedAt: "2026-09-28"
  - label: "Coursera, Inc. Form 10-Q (Q2 2026: Udemy purchase consideration and post-merger results)"
    url: "https://www.sec.gov/Archives/edgar/data/0001651562/000165156226000063/cour-20260630.htm"
    accessedAt: "2026-09-28"
  - label: "Udemy official blog: Udemy and Coursera agree to combine (December 2025)"
    url: "https://blog.udemy.com/udemy-coursera-combine/"
    accessedAt: "2026-09-28"
  - label: "Wikipedia: Udemy (timeline of founding, IPO, leadership, and results)"
    url: "https://en.wikipedia.org/wiki/Udemy"
    accessedAt: "2026-09-28"
  - label: "Udemy instructor announcement: subscription revenue share update (2023-11-02)"
    url: "https://teach.udemy.com/enabling-investment-subscription-terms-update/"
    accessedAt: "2026-09-28"
  - label: "Udemy Tech Blog: A Journey from Monolith to Micro frontends — Part 1 (2024-01-02)"
    url: "https://medium.com/udemy-engineering/transforming-frontend-architecture-a-journey-from-monolith-to-micro-frontends-at-udemy-part-1-e0a9c19c47bf"
    accessedAt: "2026-09-28"
  - label: "Udemy Tech Blog: A Journey from Monolith to Micro frontends — Part 2 (2024-01-08)"
    url: "https://medium.com/udemy-engineering/transforming-frontend-architecture-a-journey-from-monolith-to-micro-frontends-at-udemy-part-2-c9bd7ede5f1c"
    accessedAt: "2026-09-28"
  - label: "Udemy Tech Blog: A Journey from Monolith to Micro frontends — Part 3 (2024-01-16)"
    url: "https://medium.com/udemy-engineering/transforming-frontend-architecture-a-journey-from-monolith-to-micro-frontends-at-udemy-part-3-2dfdd74ff913"
    accessedAt: "2026-09-28"
  - label: "Udemy Tech Blog: Migrating Udemy's Homepage to Micro Frontends (2024-05-01)"
    url: "https://medium.com/udemy-engineering/migrating-udemys-homepage-to-micro-frontends-78bbd2e64925"
    accessedAt: "2026-09-28"
  - label: "Udemy Tech Blog: Evolution of the Udemy AI Assistant Intent Understanding System (2025-05-28)"
    url: "https://medium.com/udemy-engineering/evolution-of-the-udemy-ai-assistant-intent-understanding-system-ec3ee0039364"
    accessedAt: "2026-09-28"
  - label: "Udemy Tech Blog: From Zero to Hero: Localization-Led Generative AI at Udemy (2025-09-22)"
    url: "https://medium.com/udemy-engineering/from-zero-to-hero-localization-led-generative-ai-at-udemy-a422e4f968d4"
    accessedAt: "2026-09-28"
  - label: "Udemy Tech Blog: From siloed DataOps, MLOps, and LLMOps to a unified data-intelligence platform (2025-08-04)"
    url: "https://medium.com/udemy-engineering/from-siloed-dataops-mlops-and-llmops-to-a-unified-data-intelligence-platform-4400be283641"
    accessedAt: "2026-09-28"
  - label: "Udemy Tech Blog: The Architecture Behind Digression Control (Role Play) (2026-04-09)"
    url: "https://medium.com/udemy-engineering/from-drift-to-direction-the-architecture-behind-digression-control-role-play-1720d9a3a6a0"
    accessedAt: "2026-09-28"
  - label: "Benesse official: About the partnership between Udemy and Benesse (Japanese)"
    url: "https://www.benesse.co.jp/udemy/personal/privacy/"
    accessedAt: "2026-09-28"
  - label: "Benesse press release: Capital alliance with Udemy (2020-02-18, Japanese)"
    url: "https://prtimes.jp/main/html/rd/p/000000783.000000120.html"
    accessedAt: "2026-09-28"
  - label: "Benesse press release: Launch of Udemy's consumer subscription plan in Japan (2025-09-01, Japanese)"
    url: "https://prtimes.jp/main/html/rd/p/000001391.000000120.html"
    accessedAt: "2026-09-28"
  - label: "Benesse official: Udemy Personal Plan in Japan (Japanese)"
    url: "https://udemy.benesse.co.jp/pp_general/"
    accessedAt: "2026-09-28"
  - label: "Benesse official: Udemy Business pricing in Japan (Japanese)"
    url: "https://www.benesse.co.jp/udemy/business/price/"
    accessedAt: "2026-09-28"
  - label: "Udemy official: Affiliate program"
    url: "https://www.udemy.com/affiliate/"
    accessedAt: "2026-09-28"
  - label: "Udemy Media (Benesse): How to become a Udemy affiliate (Japanese)"
    url: "https://udemy.benesse.co.jp/marketing/udemy-affiliate.html"
    accessedAt: "2026-09-28"
---

Udemy grew into a marketplace where anyone could publish a course and anyone could buy one at a time. Plenty of engineers in Japan have bought a single programming course there. Read the annual report, though, and the main breadwinner has long since changed. What holds Udemy up today is subscriptions: companies paying for every employee seat, and individuals paying a flat fee.

## What It Is

Udemy is an online learning marketplace where instructors publish recorded video courses and learners buy and take them. It spans programming, data analysis, design, business, and more. Besides buying courses one at a time, learners can subscribe to Personal Plan, which unlocks a catalog of eligible courses, and companies can buy Udemy Business by the seat.

:::fact
According to Wikipedia, Udemy was founded in May 2010 by Eren Bali, Gagan Biyani, and Oktay Çağlar. In 2007, Bali and Çağlar had built a live virtual classroom while living in Turkey, and later moved to Silicon Valley to start Udemy. It went public on October 29, 2021. Its FY2025 annual report (Form 10-K) counts nearly 84 million learners, over 90,000 instructors, and more than 290,000 courses, with the marketplace spanning 78 languages. 61% of revenue comes from outside North America.
:::

:::fact
On December 17, 2025, Udemy agreed to combine with Coursera. According to Coursera, the combination closed on May 11, 2026, with each Udemy share converted into 0.800 Coursera shares. Former Coursera stockholders own about 59% of the combined company and former Udemy stockholders about 41%; Udemy was delisted from NASDAQ and became a wholly owned subsidiary of Coursera. Coursera's Greg Hart remains CEO. The combined company cites 290 million learners, 18,000 enterprise customers, 95,000 instructors, and more than $1.5 billion in combined 2025 revenue, and expects $115 million in annual cost synergies within 24 months. When the deal was announced, Udemy's official blog said purchased courses and subscriptions would remain accessible as before.
:::

:::fact
In Japan, Benesse Corporation has been Udemy's exclusive business partner since 2015. According to Benesse's official page, Udemy provides the platform and courses while Benesse supports university students and working adults and proposes learning opportunities. Benesse invested $50 million in February 2020, and a September 2025 press release says learners in Japan passed 2.2 million at the end of June 2025. Udemy's 10-K says 66% of Udemy Business revenue in the Asia Pacific region came through the Benesse partnership.
:::

:::pull
The course-by-course marketplace is now less than 30% of revenue. Udemy's core business has moved to subscriptions that companies pay for, seat by seat.
:::

::scorecard

## UX Analysis

Udemy's UX is designed to house two experiences under one roof: a marketplace where you buy to own, and a library you subscribe to.

- **Two ways to pay, side by side.** According to Benesse's official page, the Japanese Personal Plan costs ¥3,000 a month or ¥27,500 a year (about ¥2,292 a month), unlocks more than 29,000 eligible courses, and can be canceled at any time. Courses outside the plan, among the more than 250,000 in the full catalog, are still bought one by one. A purchased course has no time limit; subscription access lasts only while you subscribe.
- **Enterprise pricing steps down with headcount.** According to Benesse's Udemy Business pricing page, the Team Plan for 5–20 people costs ¥38,000 per ID per year for about 17,000 courses, and the Enterprise Plan for 21 or more starts at ¥18,100 per ID per year for over 30,000 courses. The more seats, the lower the per-seat price and the larger the catalog.
- **An AI companion inside the course.** The AI Assistant, which learners can question while watching, handles lecture summaries, in-course search, and comprehension checks. The 10-K also lists "AI Role Play," which lets learners practice sales, customer-service, and leadership conversations against an AI.
- **Rebuilding the logged-out homepage.** According to the official tech blog (May 2024), the logged-out homepage is the second most visited destination after course landing pages, and it was redesigned to foreground professional skills development. Above-the-fold modules were A/B tested against the old page, and the new page launched first in the US and India.

:::fact
According to Benesse's official page, Benesse receives personal information about Udemy users in Japan from Udemy — name, email address, profile, learning history, and more — and uses it for Udemy information and support, Benesse's own service development, advertising and marketing analysis, and introducing services from group companies and partners. From a Japanese user's point of view, Udemy delivers the courses while Benesse handles learning suggestions and enterprise sales.
:::

## Tech Stack

::techstack

:::fact
According to the official tech-blog series "A Journey from Monolith to Micro frontends at Udemy" (January 2024), Udemy's application is a monolith that houses the marketplace, consumer subscription, and business applications in one codebase, passing data through Django templates. The series lists the pain points: starting a new project meant a 10–15 minute build, and a release could take days of review, approval, and queuing. It adds that most traffic comes from outside the US, a significant portion of it from mobile browsers, while pages were served from the US, and that dynamic generation and A/B testing kept the CDN from being used to its full potential.
:::

:::fact
The answer was a move to micro frontends that began at a 2021 internal hackathon. Pages are carved out of the monolith with Next.js and TypeScript, data is fetched through GraphQL, and deployment flows through Argo CD into Kubernetes. Pages that can be static are generated at build time and placed on the CDN; only what cannot be cached goes back to the Next.js apps in the US. Part 3 of the series reports that on migrated pages, 75th-percentile First Contentful Paint improved by about 35% and Time to First Byte by about 320%, while Largest Contentful Paint was marginally better on the monolith — disclosing the metric that did not improve as well. According to the May 2024 post, Cloudflare Workers read a route configuration to decide which app receives each request, and the logged-out and logged-in homepages are split by whether an access-token cookie is present.
:::

:::fact
On the AI Assistant's intent classification, the official tech blog (May 2025) describes three stages of refinement. At first, intent was decided purely by similarity to pre-registered example utterances, using NVIDIA's NeMo Guardrails and a small embedding model (all-MiniLM-L6-v2). Handing the task to an LLM raised accuracy but added round-trip latency, so the team settled on a hybrid: if similarity is 0.85 or higher, the embedding decides; otherwise gpt-4.1-nano classifies. gpt-4.1 was 3% more accurate than nano but cost 20 times more; about 32.5% of learner messages go to nano, and average end-to-end latency rises by about 10%. According to a September 2025 post, localization of the AI Assistant and the Skills Mapping feature started with Japanese, combining multilingual embeddings with prompt engineering in Japanese, and reached production in under three months. Spanish and Portuguese followed even faster, and adding a new language now takes less than 25% of the initial development effort.
:::

:::guess
The choice of Japanese as the first language for generative-AI localization appears connected to the 10-K's figure that 66% of Udemy Business revenue in Asia Pacific comes through Benesse. Enterprise buyers tend to make "can employees ask the AI in their own language?" a purchase condition, so Udemy presumably started with its largest non-English enterprise market. Settling most classifications with cheap embeddings and calling an LLM only when unsure also looks like a pragmatic way to keep inference costs, which scale with learner count, under control.
:::

:::guess
No official document found names the cloud hosting the core application. But since the data-platform post lists S3, EMR, Redshift, SageMaker, and Bedrock, the main infrastructure appears to be AWS. Rather than rewriting the Django monolith in one go, putting Cloudflare Workers in front and moving pages one at a time to Next.js apps looks like an incremental migration — keeping heavy features such as checkout and instructor tools in the monolith while speeding up the pages that drive acquisition first.
:::

## Business Model

Udemy's revenue has three legs: Udemy Business for companies, courses bought one at a time by individuals, and the consumer subscription. Courses are made by outside instructors, who receive a share of the revenue.

:::fact
According to the Q4 and full-year 2025 results release, 2025 revenue was $789.8 million. The Enterprise segment brought in $524.1 million, up 6% year over year, and the Consumer segment $265.8 million, down 9%. Within Consumer, subscription revenue grew 44% to $44.5 million, and paid consumer subscribers roughly doubled to 343,000. Subscription revenue made up 72% of the total. Udemy Business ARR was $540.0 million (up 4%), with 17,029 enterprise customers. Full-year net income was $3.8 million; according to Wikipedia, 2024 had a net loss of $85 million. AI content on Udemy grew 120% year over year in 2025.
:::

:::fact
On instructor payouts, an announcement Udemy sent instructors on November 2, 2023 kept the 37% marketplace revenue share for courses sold one at a time, while lowering the subscription share in steps: 20% in January 2024, 17.5% in January 2025, and 15% in January 2026. It cited investment in the platform, marketing, and sales, and stated the goal that total instructor payouts would equal or exceed current levels each year. At that point, Udemy had paid instructors more than $200 million over the previous 12 months. According to the FY2025 10-K, instructors collectively earned $168 million in 2025. Instructors whose courses are added to the Udemy Business collection agree, subject to limited exceptions, to exclusivity that prevents them from offering on-demand content on competing platforms.
:::

:::fact
According to Coursera's Q2 2026 quarterly report (Form 10-Q), the purchase consideration for Udemy was $673.6 million, almost all of it 116.6 million shares of Coursera stock. From May 11 to June 30, Udemy contributed $103.8 million in revenue and a $31.2 million net loss. After the merger, Coursera still reports two segments, Enterprise and Consumer, and merger, integration, and restructuring costs for the quarter were $79.8 million. According to Wikipedia, Udemy's equity was valued at about $930 million when the deal was agreed in December 2025.
:::

:::fact
On affiliates, Udemy's official page says its affiliate program runs on the Impact network and offers course-specific links, sitewide links, and custom links. Applications are reviewed within 3 to 4 business days. The official page does not state commission rates. According to Udemy Media, run by Benesse (March 31, 2026), applicants in Japan sign up through Impact and are reviewed and approved against Benesse's criteria, and campaigns that raise commission rates run from time to time.
:::

:::guess
The gap between the instructor's 37% on a marketplace sale and 15% on subscription revenue appears to mirror Udemy's shift in center of gravity. The more consumer course sales shrink and subscriptions and enterprise grow, the smaller the amount that tends to reach the instructor from the same course. That payouts went from "more than $200 million over the last 12 months" in 2023 to $168 million in 2025 may reflect this effect. On the other hand, one can argue that when the consumer course-by-course market itself is shrinking, the pool for instructor payouts would thin out anyway unless Udemy leaned into subscriptions. How to balance terms for instructors against the stability of company revenue looks set to remain an open question after the Coursera combination.
:::

:::guess
On the affiliate side, because commission rates are not published, per-sale earnings appear hard to estimate until an application is approved. For a developer blog, a link to a specific course — "if you want to learn this technology, take this course" — is presumably more likely to convert than a link to the homepage. Because Benesse reviews applications in Japan, how well a site's content matches the course categories is likely to be checked.
:::

What Udemy sold was freedom: anyone can teach, and anyone can learn from a single course. That freedom gathered 84 million learners and 90,000 instructors, but the center of its earnings has moved to subscriptions that companies buy by the seat. Slicing the Django monolith piece by piece behind Cloudflare Workers, letting the AI Assistant choose between cheap and expensive classification, starting localization with Japanese — all of it looks like groundwork for delivering learning at consistent quality to companies worldwide. Now that Udemy is part of Coursera, the next thing to watch is how that groundwork connects with university courses.
