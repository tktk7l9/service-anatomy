---
service: "Squarespace"
title: "A Website Builder Taken Private for About $7.2 Billion Now Sells Domains First — Dissecting Squarespace, Which Took Over Millions of Google Domains, Is Moving Its Own Data Centers to Google Cloud and Now Sells Visibility in AI Search"
description: "Squarespace, a website builder born in a college dorm room in 2003, was taken private in October 2024 when investment firm Permira completed an acquisition valued at about $7.2 billion, ending its listing on the New York Stock Exchange. Its plans are monthly subscriptions from Basic to Advanced; viewed from Japan, the pricing page shows annual-billing prices of ¥1,180 to ¥3,040 a month. There is no free plan, only a 14-day free trial. In 2024 it finished migrating millions of domains from Google Domains, and its 2026 Super Bowl ad sold domains too. Using the pricing page, the help center, the official newsroom, the engineering blog, Google Cloud's case study, Permira's announcement and this site's own observations, the article dissects a zero-downtime move from PostgreSQL to CockroachDB and from its own data centers to Google Cloud, payments and lending built on Stripe, an AI search visibility tool run on monthly AI credits, and an affiliate program that pays $100–200 per referral."
lead: "Squarespace's 2026 Super Bowl ad was the story of actor Emma Stone struggling to get the domain with her own name. The message: before you build a site, secure your domain. The website builder, born in a college dorm room in 2003, went private again in 2024 and, having taken over the domains of Google Domains, now calls itself one of the world's leading domain registrars. This article dissects, from public information alone, a Squarespace that runs payments and lending on Stripe and its servers on Google Cloud, and has started selling a view of how a business appears in AI search."
category: saas
tags: [website-builder, no-code, e-commerce, small-business, ai, google-cloud, payments, domains]
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastVerified: "2026-10-07"
serviceUrl: "https://www.squarespace.com/"
# Affiliate link placeholder: Squarespace runs an official affiliate program on Impact
# (https://www.squarespace.com/affiliates, checked 2026-10-07: open worldwide where Impact supports
# the affiliate's country, commissions paid in USD; the help center lists payouts of $100–200 per
# new website subscription and $45 per new Acuity Scheduling subscription). Sites are reviewed
# before acceptance. If the owner joins it, paste the tracking link here (Impact links carry no
# impression pixel). Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<squarespace-impact-tracking-link>"
#   program: "Squarespace Affiliate Program (Impact)"
vendor: "Squarespace, Inc."
origin: "US"
heroTheme: "squarespace"
scores: { product: 4.0, ux: 4.0, tech: 4.0, business: 4.0 }
techStack:
  - layer: "Cloud platform"
    name: "Google Cloud (moving off on-premises data centers; BigQuery / Cloud SQL / GKE)"
    confidence: confirmed
    evidence: "Google Cloud's case study page (checked 2026-10-07) says Squarespace is lifting and shifting its critical workloads from on-premises infrastructure with limited scalability and agility to Google Cloud, starting with QA and pre-production environments with staging and production to follow, and will soon decommission its data centers. It lists BigQuery, Cloud Storage, Cloud SQL and Google Kubernetes Engine among the products used"
    evidenceUrl: "https://cloud.google.com/customers/squarespace"
  - layer: "Database"
    name: "PostgreSQL + CockroachDB"
    confidence: confirmed
    evidence: "The official engineering blog (2025-05-13) says PostgreSQL has been the foundation for ACID workloads but does not scale horizontally, and that many databases were moved to the distributed database CockroachDB"
    evidenceUrl: "https://engineering.squarespace.com/blog/2025/leveraging-change-data-capture-for-database-migrations-at-scale"
  - layer: "Change data capture"
    name: "Debezium + Apache Kafka + Apache Beam (Google Cloud Dataflow)"
    confidence: confirmed
    evidence: "The same post says changes were streamed from PostgreSQL's logical decoding through Debezium (Kafka Connect) into Kafka topics in Avro format, written into CockroachDB by per-table Apache Beam pipelines, and run on Google Cloud's Dataflow Runner as Terraform-managed Flex templates"
    evidenceUrl: "https://engineering.squarespace.com/blog/2025/leveraging-change-data-capture-for-database-migrations-at-scale"
  - layer: "Media asset storage"
    name: "Google Cloud Storage + Google Cloud Spanner (write-back cache)"
    confidence: confirmed
    evidence: "The official engineering blog (2024-03-21) says Alexandria, the service behind the asset library for images and videos, stores asset records in Google Cloud Storage objects, and that the team built a write-back cache on Cloud Spanner to make up for slow writes"
    evidenceUrl: "https://engineering.squarespace.com/blog/2024/why-we-built-a-write-back-cache-for-our-asset-library-with-google-cloud-spanner"
  - layer: "Domains and DNS"
    name: "Google Cloud DNS + Let's Encrypt (DNSSEC)"
    confidence: confirmed
    evidence: "The official newsroom (2024-11-14) says every Squarespace Domain, including those migrated from Google Domains, includes premium DNS powered by services like Google Cloud DNS, DNSSEC, a free SSL/TLS certificate from Let's Encrypt and free WHOIS privacy"
    evidenceUrl: "https://newsroom.squarespace.com/blog/squarespace-domains-updates"
  - layer: "Payments and lending"
    name: "Stripe (Squarespace Payments / Capital / Balance)"
    confidence: confirmed
    evidence: "A note in the official newsroom (2025-09-30) says Squarespace partners with Stripe Payments Company for money transmission, and that Squarespace Capital loans and Squarespace Balance commercial cards are powered by Stripe and issued by Celtic Bank. The Squarespace Capital announcement (2025-08-26) also says \"Squarespace Capital is powered by Stripe\""
    evidenceUrl: "https://newsroom.squarespace.com/blog/squarespace-refresh-2025-built-to-stand-out-ready-to-scale"
  - layer: "Image and static file delivery"
    name: "Fastly"
    confidence: likely
    evidence: "This site's own observation (2026-10-07) found static1.squarespace.com and images.squarespace-cdn.com returning via: 1.1 varnish and Fastly-style x-served-by headers such as cache-nrt-… (images.squarespace-cdn.com also lists 1.1 google in via). No official statement naming Fastly was found"
  - layer: "Own marketing site"
    name: "Next.js (www.squarespace.com)"
    confidence: likely
    evidence: "This site's own observation (2026-10-07) found the RSC payload that Next.js's App Router emits (self.__next_f.push) in the HTML of www.squarespace.com/pricing. The response header was server: Squarespace"
sources:
  - label: "Squarespace: About Us"
    url: "https://www.squarespace.com/about/company"
    accessedAt: "2026-10-07"
  - label: "Squarespace: Pricing (shown in yen when viewed from Japan)"
    url: "https://www.squarespace.com/pricing"
    accessedAt: "2026-10-07"
  - label: "Squarespace Help Center: Selling on the Basic, Core, Plus, and Advanced plans"
    url: "https://support.squarespace.com/hc/en-us/articles/29215717722637-Selling-on-the-Basic-Core-Plus-and-Advanced-plans"
    accessedAt: "2026-10-07"
  - label: "Squarespace Help Center: Use AI credits for Squarespace AI tools"
    url: "https://support.squarespace.com/hc/en-us/articles/46668956855053-Use-AI-credits-for-Squarespace-AI-tools"
    accessedAt: "2026-10-07"
  - label: "Squarespace Help Center: Countries, currencies, and payment methods available on Squarespace Payments"
    url: "https://support.squarespace.com/hc/en-us/articles/33482360045069-Countries-currencies-and-payment-methods-available-on-Squarespace-Payments"
    accessedAt: "2026-10-07"
  - label: "Squarespace Help Center: Connect a payment processor"
    url: "https://support.squarespace.com/hc/en-us/articles/235161188-Connect-a-payment-processor"
    accessedAt: "2026-10-07"
  - label: "Squarespace Help Center: Squarespace Affiliate Program vs. Squarespace Circle referral payments"
    url: "https://support.squarespace.com/hc/en-us/articles/4424080134413-Squarespace-Affiliate-Program-vs-Squarespace-Circle-referral-payments"
    accessedAt: "2026-10-07"
  - label: "Squarespace: Affiliate Program"
    url: "https://www.squarespace.com/affiliates"
    accessedAt: "2026-10-07"
  - label: "Permira: Permira Completes Acquisition of Squarespace (2024-10-17)"
    url: "https://www.permira.com/news-and-insights/announcements/permira-completes-acquisition-of-squarespace"
    accessedAt: "2026-10-07"
  - label: "Google Cloud: Squarespace case study (from on-premises to Google Cloud)"
    url: "https://cloud.google.com/customers/squarespace"
    accessedAt: "2026-10-07"
  - label: "Squarespace Engineering Blog: Leveraging Change Data Capture For Database Migrations At Scale (2025-05-13)"
    url: "https://engineering.squarespace.com/blog/2025/leveraging-change-data-capture-for-database-migrations-at-scale"
    accessedAt: "2026-10-07"
  - label: "Squarespace Engineering Blog: Why We Built a Write Back Cache for Our Asset Library with Google Cloud Spanner (2024-03-21)"
    url: "https://engineering.squarespace.com/blog/2024/why-we-built-a-write-back-cache-for-our-asset-library-with-google-cloud-spanner"
    accessedAt: "2026-10-07"
  - label: "Squarespace Engineering Blog: How We Helped Bring HTML Video & Audio Lazy Loading to Today's Browsers (2026-03-30)"
    url: "https://engineering.squarespace.com/blog/2026/squarespace-and-web-standards-how-we-helped-bring-html-video-and-audio-lazy-loading-to-todays-browsers"
    accessedAt: "2026-10-07"
  - label: "Squarespace Newsroom: Squarespace Completes Google Domains Migration (2024-11-14)"
    url: "https://newsroom.squarespace.com/blog/squarespace-domains-updates"
    accessedAt: "2026-10-07"
  - label: "Squarespace Newsroom: Squarespace and Emma Stone Confront the Stakes of Domain Ownership in Super Bowl LX Campaign (2026-02-04)"
    url: "https://newsroom.squarespace.com/blog/squarespace-and-emma-stone-confront-the-stakes-of-domain-ownership-in-super-bowl-lx-campaign"
    accessedAt: "2026-10-07"
  - label: "Squarespace Newsroom: Squarespace Refresh 2025 (2025-09-30)"
    url: "https://newsroom.squarespace.com/blog/squarespace-refresh-2025-built-to-stand-out-ready-to-scale"
    accessedAt: "2026-10-07"
  - label: "Squarespace Newsroom: Squarespace Capital Introduces a New Way for Entrepreneurs to Grow (2025-08-26)"
    url: "https://newsroom.squarespace.com/blog/squarespace-capital-for-entrepreneurs"
    accessedAt: "2026-10-07"
  - label: "Squarespace Newsroom: Squarespace and Perplexity Partner to Reimagine Business Creation in the AI Era (2025-10-02)"
    url: "https://newsroom.squarespace.com/blog/squarespace-and-perplexity-partner-to-reimagine-business-creation-in-the-ai-era"
    accessedAt: "2026-10-07"
  - label: "Squarespace Newsroom: AI Visibility Helps Businesses Navigate the Shift to AI-Powered Search (2026-07-07)"
    url: "https://newsroom.squarespace.com/blog/ai-visibility-helps-businesses-navigate-the-shift-to-ai-powered-search"
    accessedAt: "2026-10-07"
---

Squarespace is a website builder that lets people publish a portfolio or a store's website by picking a template and adjusting it with drag and drop. It handles bookings, an online store, invoices and email marketing from the same dashboard, and serves small businesses such as photographers, designers, schools and salons. It is one of the standard choices alongside [Wix](/en/articles/wix), dissected on this site, but while Wix bought six-month-old Base44 and stepped into app generation, Squarespace has been moving to lock in design, domains and the flow of money that follows.

## Service overview

Squarespace sells website building and hosting, domain registration, online stores and payments, Acuity Scheduling for bookings, and email and social marketing as one package. It is built to layer a domain, Google Workspace email, payments and lending, one after another, onto people who sign up for a website plan.

:::fact
According to the official company page (as of 2026-10-07), Squarespace was founded in 2003 in founder Anthony Casalena's dorm room at the University of Maryland, has grown to more than 1,760 employees, and has offices in New York, Dublin and Aveiro, Portugal. It says millions of websites have been created on the platform since launch. According to investment firm Permira's announcement (2024-10-17), the acquisition by its funds closed in an all-cash transaction valued at approximately $7.2 billion, and Squarespace is no longer listed on the New York Stock Exchange. Casalena rolled over a substantial majority of his existing equity, remains one of the largest shareholders, and continues as CEO and board chairman. Accel and General Atlantic also remain investors.
:::

:::fact
According to the pricing page (checked 2026-10-07, viewed from Japan), Basic costs ¥1,480 a month on monthly billing or ¥1,180 a month on annual billing, Core ¥2,580 or ¥2,080, and Advanced ¥3,800 or ¥3,040. The structured data embedded in the page explains that Squarespace prices its plans per billing country, so customers in other countries see a different currency and amount. There is no free plan: every site starts with a 14-day free trial that needs no credit card, and annual plans include a free domain for a year. According to the help center, the current plans are Basic, Core, Plus and Advanced, which replaced the older Personal, Business, Commerce Basic and Commerce Advanced plans. Only Basic charges a 2% online store transaction fee, and the digital products fee falls from 7% on Basic to 5% on Core, 1% on Plus and 0% on Advanced.
:::

:::pull
Before you build a site, get your domain. At the 2026 Super Bowl, what a website builder advertised was not a website but a name.
:::

::scorecard

## UX analysis

Squarespace's experience is ordered so that people choose it for its design and then add business tools. Since 2025 a new unit has joined the mix: AI usage.

- **It starts with design.** The pricing page highlights Fluid Engine, the drag-and-drop editor for version 7.1 sites, as its newest editing experience. According to the official newsroom (2025-09-30), the annual Refresh 2025 release brought Finish Layer, which adds animations and transforms block by block, an expanded Blueprint AI that builds templates already filled with content for an industry, and Squarespace GPT, available from ChatGPT's store.
- **AI runs on monthly credits.** According to the pricing page and the help center, AI features use AI credits: Basic gets only a one-time 10 credits, Core 20 a month and Advanced 120 a month. Credits pay for prompts sent to large language models like ChatGPT and Gemini; users who run short can buy packs of up to 400 credits, and purchased credits expire after a year. "AI Visibility," launched in July 2026, tracks how AI search answers questions about a business compared with its competitors; one run is one query to one AI model, and it is available only for English-language accounts.
- **Fees fall as you sell more.** According to the help center, the processing fee for Squarespace Payments, its own payment service, on domestic cards is 2.9% + $0.30 on Basic and Core, 2.7% + $0.30 on Plus and 2.5% + $0.30 on Advanced. In December 2025 it added Pay Links, payment URLs that work without a store or cart, to every plan, and in July 2026 it added tools for limited releases, such as a Reserved Cart that holds items for a set time during checkout and per-customer purchase limits.
- **Some parts are unavailable from Japan.** There is a pricing page in yen, but the countries where Squarespace Payments is available, according to the help center, include Australia, Canada, parts of Europe, the UK and the US, and not Japan. A Japanese business selling products would connect an outside payment service such as Stripe or PayPal. AI Visibility is limited to English-language accounts as well.
- **You cannot stay published for free.** With no free plan, keeping a site online after the trial requires a paid plan. The product is aimed at people who expect to pay from the start and does not suit leaving a site up just to try it out.

## Tech stack

::techstack

:::fact
Google Cloud's case study page (checked 2026-10-07) says Squarespace is moving its critical workloads to Google Cloud from on-premises infrastructure with limited scalability and agility. It started with QA and pre-production environments, with staging and production to follow; it had already moved its analytical infrastructure to Google Cloud and will soon decommission its data centers. Automation cut the time to provision a database from two days to 25 minutes, and the products used include BigQuery, Cloud Storage, Cloud SQL and Google Kubernetes Engine. According to the official engineering blog (2025-05-13), PostgreSQL, the foundation for its ACID workloads, did not scale horizontally and had reached the limits of vertical scaling, so many databases were moved to the distributed database CockroachDB. The migration streamed PostgreSQL changes through logical decoding and Debezium into Kafka, wrote them into CockroachDB with per-table Apache Beam pipelines running on Google Cloud's Dataflow Runner, and kept a reverse path that could write back to PostgreSQL if problems arose. For most systems, data was more than 99.99% fresh at cutover, allowing migration without noticeable write downtime.
:::

:::fact
A March 21, 2024 post on the same blog says Alexandria, the service behind the asset library for images and videos, stores asset records in Google Cloud Storage objects and loads only libraries in use into memory. Because Cloud Storage limits writes to the same object to once per second and write latency had a long tail, the team built a write-back cache on Cloud Spanner that takes writes first and flushes them later. A March 30, 2026 post says lazy loading for `<video>` and `<audio>` (loading="lazy"), proposed by Squarespace engineers, was adopted into the HTML Standard; the team contributed implementations for Firefox and WebKit and worked with Chromium's developers on an implementation that is now in Google Chrome. For domains, the official newsroom (2024-11-14) says every domain gets premium DNS powered by services like Google Cloud DNS, DNSSEC and a free Let's Encrypt certificate. This site's own observation (2026-10-07) found www.squarespace.com returning server: Squarespace, with a Next.js RSC payload in the pricing page's HTML. static1.squarespace.com and images.squarespace-cdn.com, which serve images and static files, returned Varnish and Fastly-style x-served-by headers.
:::

:::guess
Squarespace's platform appears to be partway through a switch, without downtime, from an era of its own data centers and PostgreSQL to managed Google Cloud services and a distributed database. Running old and new databases side by side with CDC and building a way back before cutting over is consistent with a business that puts not taking customers' sites offline first. Getting video lazy loading into the HTML standard is presumably a judgment that, for a company hosting heavy videos on millions of sites, leaving the job to browsers makes every site faster and is easier to maintain than working around it with its own JavaScript.
:::

## Locking customers in through domains and money

:::fact
According to the official newsroom (2024-11-14), Squarespace finished migrating millions of domains from the Google Domains business it had acquired the year before, and says that eight years after launching Squarespace Domains it has become one of the leading global domain registrars. It offers more than 360 top-level domains and promises an independent registrar experience even for customers who use no other Squarespace services. According to an announcement on February 4, 2026, its 12th Super Bowl campaign, "Unavailable," follows Emma Stone as she fails to register emmastone.com; directed by Yorgos Lanthimos, it aired during Super Bowl LX on February 8, 2026, with a simple call to action: get your domain before you lose it.
:::

:::fact
On the money side, the Squarespace Capital announcement (2025-08-26) says the company launched its own Squarespace Payments in 2023 and, as a next step, introduced Squarespace Capital, financing that eligible sellers can receive within a few days. The loans are provided by Celtic Bank in the US and YouLend in the UK, and the program is powered by Stripe. The Refresh 2025 announcement lists Squarespace Balance, a Squarespace-hosted financial account, Instant Payouts and Pay Links, and notes a partnership with Stripe Payments Company for money transmission. On October 2, 2025, Squarespace announced that it would be the website building and hosting partner for Comet, Perplexity's AI browser.
:::

:::guess
Squarespace appears to be drawing a path where customers enter through a domain and go deeper, step by step, into a website, email, payments and lending. A domain renews every year and is the very address of a site and its email, so a business that has parked one there is less likely to move. Building lending and instant payouts on Stripe's infrastructure is presumably faster than carrying its own financial machinery, and adds tools that earn close to the flow of a store's sales. Tools that measure visibility in AI search and the partnership with Perplexity can be read as moves not to give up, in the AI era, the role of "getting found" that website builders played in the era of search engines.
:::

## Business model

The pillars of revenue are monthly and annual website plan fees, transaction and payment processing fees on sales, and add-on services such as domains and Google Workspace. Since 2025 AI credit packs and lending have joined them.

:::fact
According to the pricing page and the help center, on top of website plan fees Squarespace earns from the online store transaction fee on Basic, the digital products fee, Squarespace Payments processing fees, domain registration fees (which vary by top-level domain) and AI credit packs. Select plans include one Google Workspace account free for the first year, after which it renews at standard rates. Because the Permira acquisition ended its New York Stock Exchange listing, figures such as revenue can no longer be followed in public earnings filings.
:::

:::fact
There are two referral programs. According to the official affiliate program page (checked 2026-10-07), Squarespace recruits affiliates through the third-party affiliate platform Impact, accepts them from anywhere Impact supports, and pays commissions in US dollars. According to the help center, a first-time customer who starts a website subscription through a referral link earns the affiliate $100–200, and a paid Acuity Scheduling subscription earns $45, with no cap on the number of subscriptions per year. Joining requires an application and review. Separately, members of "Circle," the partner program for agencies and freelancers, can receive referral payments for clients they bring without using links. "Squarespace for Pros," announced in September 2025, brought Circle's tiers, perks and referral payments into one dashboard.
:::

:::guess
Squarespace can presumably pay $100–200 per referral because it expects to earn from one customer for a long time, through domains, email and payment fees on top of the website plan. A payout that looks large next to a plan costing around ¥1,000–4,000 a month makes sense if domain renewals and a few percent of sales keep coming in for years. Being private and free from quarterly reporting is also presumably making it easier to invest in large advertising like the Super Bowl and in businesses that take time to pay off, such as lending.
:::

Twenty-three years after it was born in a dorm room, the website builder has become a registrar holding millions of domains and offers lending close to the flow of its customers' sales. It has done so while switching, without taking customers' sites down, from its own data centers to Google Cloud and from PostgreSQL to a distributed database. Chosen for design, held by domains, drawn deeper through money: whether Squarespace, now private, can keep that order in an era when AI builds sites and AI looks for businesses is its next challenge.
