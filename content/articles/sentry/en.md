---
service: "Sentry"
title: "Why Sentry's SDKs Are MIT but Its Server Is Under the FSL — How the Error-Tracking Standard Publishes Its Source, Blocks Resellers, and Prices by Event Volume"
description: "Sentry is the error tracking, tracing, and session replay SaaS that began as a small piece of Django code in 2008 and has raised $217M in total. It still keeps its server source on GitHub, but moved it to the Business Source License in 2019 and to its own Functional Source License (FSL) in 2023. A look, from Sentry's blog, the license text, and its docs, at how it keeps the SDKs MIT while barring competing commercial use of the server for two years, its volume-based pricing from $29/month on Team, Seer AI at $40 per active contributor, and an architecture built on Rust-based Relay, Kafka, and ClickHouse."
lead: "Sentry's server code is still on GitHub for anyone to read, and you are free to run it inside your company. What you cannot do, for two years after each release, is use it to sell the same service. The SDKs you embed in your app, meanwhile, remain MIT-licensed, and nothing stops a competitor from advertising that it accepts Sentry SDKs as-is. Keep the front door open to developers, block only resale on the way out: this is a look at how the error-tracking standard designed its license and its pricing."
category: dev-tool
tags: [observability, error-tracking, monitoring, licensing, open-source]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
serviceUrl: "https://sentry.io/"
vendor: "Functional Software, Inc. (dba Sentry)"
origin: "US"
heroTheme: "sentry"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 4.0 }
techStack:
  - layer: "Application (web, API, workers)"
    name: "Python / Django"
    confidence: confirmed
    evidence: "pyproject.toml in the public getsentry/sentry repository lists django>=5.2.15 and requires-python >=3.13; Python is also the largest language in GitHub's statistics"
    evidenceUrl: "https://github.com/getsentry/sentry/blob/master/pyproject.toml"
  - layer: "Frontend"
    name: "React / TypeScript / Emotion"
    confidence: confirmed
    evidence: "The same repository's package.json lists react 19.3.0, typescript, and @emotion/react"
    evidenceUrl: "https://github.com/getsentry/sentry/blob/master/package.json"
  - layer: "Event ingestion"
    name: "Relay (Rust)"
    confidence: confirmed
    evidence: "The official developer architecture doc states that Relay receives envelopes from SDKs, checks project configs and quotas, and publishes to Kafka. The getsentry/relay repository's main language is Rust"
    evidenceUrl: "https://develop.sentry.dev/application-architecture/overview/"
  - layer: "Queue"
    name: "Apache Kafka"
    confidence: confirmed
    evidence: "The architecture doc states Kafka is used both for the ingest topic and for the event stream handed to Snuba after saving"
    evidenceUrl: "https://develop.sentry.dev/application-architecture/overview/"
  - layer: "Event storage and query"
    name: "Snuba / ClickHouse"
    confidence: confirmed
    evidence: "The architecture doc states Snuba is the query and event-storage layer, reading from Kafka and Redis and writing to ClickHouse"
    evidenceUrl: "https://develop.sentry.dev/application-architecture/overview/"
  - layer: "Relational data and caching"
    name: "PostgreSQL / Redis / Memcached"
    confidence: confirmed
    evidence: "The architecture doc states Postgres holds relational application data, Redis handles caching and quota counting, and Memcached handles caching"
    evidenceUrl: "https://develop.sentry.dev/application-architecture/overview/"
  - layer: "Stack trace symbolication"
    name: "Symbolicator (Rust)"
    confidence: confirmed
    evidence: "Listed in the architecture doc as an auxiliary service that symbolicates events such as crash stack traces. The getsentry/symbolicator repository's main language is Rust"
    evidenceUrl: "https://github.com/getsentry/symbolicator"
  - layer: "Data residency"
    name: "US (Iowa) / EU (Frankfurt), Control Silo + Region Silo"
    confidence: confirmed
    evidence: "Official docs state you can choose US (Iowa) or EU (Frankfurt) data storage and cannot change it later. The architecture doc says SaaS runs as multiple regions built from the same source as self-hosted, split into a Control Silo for shared data and Region Silos for organization data"
    evidenceUrl: "https://docs.sentry.io/organization/data-storage-location/"
  - layer: "Load balancer and edge"
    name: "Google Cloud Load Balancing"
    confidence: likely
    evidence: "Our HTTP header observation (sentry.io, us.sentry.io, de.sentry.io, and the ingest endpoint, 2026-11-02) returned via: 1.1 google, and sentry.io's IP addresses belong to Google's 34.x network. Behind it, server: nginx and x-envoy-upstream-service-time are returned. No explicit official statement found"
  - layer: "Documentation site"
    name: "Next.js on Vercel"
    confidence: likely
    evidence: "package.json in the public getsentry/sentry-docs repository lists next ^15.5.24. Our observation (docs.sentry.io, 2026-11-02) returned server: Vercel and x-vercel-cache: HIT. No explicit official statement about hosting found"
    evidenceUrl: "https://github.com/getsentry/sentry-docs"
  - layer: "Billing"
    name: "Stripe"
    confidence: likely
    evidence: "Our observation (2026-11-02) found js.stripe.com allowed in the frame-src of de.sentry.io's Content-Security-Policy. No explicit official statement found"
sources:
  - label: "Sentry official: About (organizations, countries, daily events, total funding, offices)"
    url: "https://sentry.io/about/"
    accessedAt: "2026-11-02"
  - label: "Sentry official: homepage (product list, Seer description, customer quotes)"
    url: "https://sentry.io/welcome/"
    accessedAt: "2026-11-02"
  - label: "Sentry blog: Driven by Open Source (David Cramer, 2015-06-30; the first commit and how it became paid)"
    url: "https://blog.sentry.io/driven-by-open-source"
    accessedAt: "2026-11-02"
  - label: "Sentry press release: $90M Series E (2022-05-04)"
    url: "https://sentry.io/about/press-releases/sentry-raises-90-million-in-series-e-funding-to-expand-and-drive-adoption-of-developer-first-application-monitoring/"
    accessedAt: "2026-11-02"
  - label: "Harness press release: Harness acquires Codecov from Sentry (2026-06-02)"
    url: "https://www.harness.io/press-and-news/harness-acquires-codecov"
    accessedAt: "2026-11-02"
  - label: "Sentry blog: Relicensing Sentry (David Cramer, 2019-11-06; the move to the BSL)"
    url: "https://blog.sentry.io/relicensing-sentry/"
    accessedAt: "2026-11-02"
  - label: "Sentry blog: Introducing the Functional Source License (Chad Whitacre, 2023-11-17)"
    url: "https://blog.sentry.io/introducing-the-functional-source-license-freedom-without-free-riding/"
    accessedAt: "2026-11-02"
  - label: "Functional Source License official site (fsl.software)"
    url: "https://fsl.software/"
    accessedAt: "2026-11-02"
  - label: "GitHub: getsentry/sentry LICENSE.md (FSL-1.1-Apache-2.0 text)"
    url: "https://github.com/getsentry/sentry/blob/master/LICENSE.md"
    accessedAt: "2026-11-02"
  - label: "GitHub: getsentry/sentry-javascript LICENSE (MIT)"
    url: "https://github.com/getsentry/sentry-javascript/blob/develop/LICENSE"
    accessedAt: "2026-11-02"
  - label: "Sentry developer docs: Self-Hosted Sentry (requirements, differences from SaaS, license)"
    url: "https://develop.sentry.dev/self-hosted/"
    accessedAt: "2026-11-02"
  - label: "Sentry developer docs: Application Architecture Overview"
    url: "https://develop.sentry.dev/application-architecture/overview/"
    accessedAt: "2026-11-02"
  - label: "Sentry docs: Data Storage Location (US and EU)"
    url: "https://docs.sentry.io/organization/data-storage-location/"
    accessedAt: "2026-11-02"
  - label: "Sentry official: pricing page (plans, included volume, add-on rates)"
    url: "https://sentry.io/pricing/"
    accessedAt: "2026-11-02"
  - label: "Sentry docs: Pricing & Billing (per-category rates, PAYG budget, Seer pricing, taxes)"
    url: "https://docs.sentry.io/pricing/"
    accessedAt: "2026-11-02"
  - label: "Sentry blog: Another year, another $1,000,000 to Open Source maintainers (2026-10-21)"
    url: "https://blog.sentry.io/another-year-another-1-000-000-to-open-source-maintainers/"
    accessedAt: "2026-11-02"
  - label: "Better Stack docs: Errors (Sentry SDK compatibility)"
    url: "https://betterstack.com/docs/errors/"
    accessedAt: "2026-11-02"
---

When your app breaks in production, it tells you which line failed, for which user, starting with which release. Sentry is the error tracker many developers install first for exactly that job. Unusually, nearly all of its server code is public on GitHub. And yet Sentry went as far as writing its own license to draw a line under which it no longer calls its software "open source." This article looks at where that line sits and how Sentry's pricing and architecture fit around it.

## Service Overview

Sentry collects application errors (exceptions and crashes), groups those with the same cause into a single "Issue," and shows them alongside the stack trace, release, and user environment. Beyond errors, it now handles traces (the path and duration of a request), logs, session replay (a reconstruction of what the user did on screen), profiling, cron job monitoring, and uptime monitoring, all linked by the same trace ID. Its AI, Seer, is sold as a feature that infers the root cause of an error, opens a pull request with a fix, and predicts bugs at code review time.

:::fact
According to a post that co-founder David Cramer wrote on the official blog on June 30, 2015, the first commit is dated May 12, 2008, with the message "initial working code." Disqus, where Cramer worked at the time, started using the small example he had published for logging Django errors to a database, and he calls the day "around May of 2010," when they decided to build it out properly, "the day Sentry was truly born." Per the same post, work on customer billing for the hosted version ran through Christmas 2012, and the first paying customer arrived on February 28, 2013. It also notes that Chris Jennings, who joined Disqus later, persuaded Cramer to move to San Francisco.
:::

:::fact
The official About page (accessed 2026-11-02) says Sentry is used by "millions" of developers and 200K organizations across 146 countries, processes 190B+ events a day, and has raised $217M in six rounds of funding. It supports more than 100 programming languages and lists offices in San Francisco, Vienna, and Toronto. According to the official press release of May 4, 2022, its $90M Series E brought total funding to $217M at a valuation above $3B. BOND and Accel co-led the round, with existing investor NEA and new investor K5 Global participating. At the time it served more than 3.5 million developers and 85,000 organizations, and CEO Milin Desai said that "revenue has more than tripled in just over two years."
:::

:::fact
Sentry acquired the code coverage tool Codecov in 2022 (the About page lists December 2022 coverage from ADTMag and others), but according to Harness's official press release of June 2, 2026, Harness bought Codecov from Sentry. The price was not disclosed, and Harness says it will keep the brand and free access for open source projects. In the same release, Sentry's Milin Desai said: "We didn't just find Codecov a home, we found it the right one."
:::

:::pull
You can read it, run it, and fix it. You just cannot use it to run the same business. Sentry's license is written to forbid that one thing.
:::

### From "open source" to "Fair Source"

Sentry's original code was published under BSD 3-Clause, with Apache-2.0 and MIT mixed in across repositories. It has changed licenses twice since.

:::fact
In the official blog post "Relicensing Sentry" on November 6, 2019 (David Cramer), Sentry announced its move to the Business Source License (BSL). The post itself says the BSL is "formally not an open-source license." The single restriction is that "you cannot offer a commercial version of Sentry's service," and after 36 months the code becomes Apache-2.0. As reasons, it cited funded companies copying Sentry's code, documentation, and even marketing to compete, and the risk of large cloud providers hosting it commercially, describing the goal as "protection from other companies selling our work." It also said the change would not affect anyone's ability to run Sentry at their company.
:::

:::fact
In an official blog post on November 17, 2023 (Chad Whitacre), Sentry announced it was relicensing Sentry and Codecov under a new license it had written, the Functional Source License (FSL). The reasons for leaving the BSL: its default four-year non-compete period was too long (Sentry had used three years, and the post says even that was probably too long), and the Additional Use Grant varies from project to project, so every BSL project is effectively a different license. The FSL fixes the restriction to "Competing Use" and converts to Apache 2.0 or MIT after two years. The official site fsl.software describes the FSL as "a Fair Source license that converts to Apache 2.0 or MIT after two years" and lists two versions, FSL-1.1-ALv2 and FSL-1.1-MIT.
:::

:::fact
The LICENSE.md in getsentry/sentry (accessed 2026-11-02) is FSL-1.1-Apache-2.0, with the notice "Copyright 2008-2024 Functional Software, Inc. dba Sentry." It permits use, copying, modification, and redistribution for any "Permitted Purpose," defined as any purpose other than a "Competing Use." A Competing Use means making the software available to others in a commercial product or service that substitutes for the software, substitutes for another product Sentry offers using the software, or offers the same or substantially similar functionality. Internal use, non-commercial education and research, and professional services provided to a licensee are explicitly named as permitted purposes. And there is a "Grant of Future License" that irrevocably allows use under the Apache License 2.0 from the second anniversary of the date the software is made available. In our check, the relay (ingestion), snuba (storage), and self-hosted repositories are under the same FSL-1.1-Apache-2.0. By contrast, the LICENSE in sentry-javascript is MIT ("Copyright (c) 2012 Functional Software, Inc. dba Sentry"), and GitHub's API reports sentry-python's license as MIT.
:::

:::guess
The line is easiest to understand if you split the software into a "front door" and a "core." SDKs embedded in apps ship alongside the customer's own code, so restrictive terms would stall adoption outright. That appears to be why the SDKs stay under the most permissive license, MIT. The server side is the very product sold as SaaS, so the ban on competing use applies there alone. The result is that when a competitor such as Better Stack writes in its official docs that you can "keep using your existing Sentry SDK, just send the data to Better Stack," that is not a loophole in the license but a consequence Sentry accepted the moment it made the front door MIT. It can also be read as a deliberate trade-off: the more other vendors use Sentry's SDKs, the more "the Sentry SDK" becomes a de facto standard.
:::

::scorecard

## UX Analysis

Sentry's UX aims at two things: shortening the time until the first error arrives, and turning that error into something the person who has to fix it can actually fix.

- **A few lines to get started.** The homepage says you can start with "five lines" of code and lists SDKs for Python, JavaScript, React, Next.js, Go, Ruby, PHP, .NET, and more. Once an SDK is in, errors are sent automatically and those with the same cause are grouped into one Issue. Seeing "a list of problems to fix" rather than scrolling through raw exceptions one by one is the heart of the error-tracking experience.
- **From the error to its context.** The homepage says errors, logs, replays, spans, profiles, and metrics are connected by "the same trace." From an exception you can jump to a replay of what the user did, the slow operation, or related logs. It also lists integrations with GitHub, Slack, Jira, and Linear, so the flow covers which commit broke things and who it goes to, on one screen.
- **AI writes the "why."** The homepage says Seer uses logs, commits, traces, and stack traces to explain "why your code failed, not just where," and generates merge-ready patches. Code review that checks pull requests against error and performance history to catch regressions before they ship is also part of Seer. The pricing docs state that Seer does not use your application data, error information, or source code to train AI models.
- **Free, up to "one person in production."** According to the pricing page, the free Developer plan is for one user and includes 5k errors, 5M spans, 50 replays, 5GB of logs, and more per month, with a 30-day lookback. New accounts get a 14-day free trial of the Business plan, with no credit card required.
- **When you hit the cap, data is dropped silently.** According to the pricing docs, data sent after reserved volume and the PAYG (pay-as-you-go) budget are used up is dropped and not charged for, which means you lose monitoring for the rest of the billing cycle. The reassurance that the bill cannot run away and the risk that the data you most need may be dropped in the very month incidents pile up live in the same sentence.

:::fact
According to the official developer docs (accessed 2026-11-02), the self-hosted version runs on Docker and Docker Compose, with minimum requirements of 4 CPU cores, 16 GB of RAM (plus 16 GB of swap), and 20 GB of free disk; 32 GB of RAM is recommended. Disk I/O matters a lot: if iowait is above 10% of CPU time, the system likely cannot keep up. It comes with no guarantees or dedicated support; Sentry engineers answer on a best-effort basis, and otherwise users are pointed to the community Discord. Listed as present in SaaS but missing from self-hosted are the pricing and billing system, spike protection, Seer and other AI/ML features (which are closed source), and data storage location selection, and mobile stack trace resolution such as iOS symbolication is limited. The license section says that under the FSL you can deploy it anywhere, including within an enterprise, but that selling self-hosted Sentry or competing directly with Sentry using its FSL code is prohibited, and that the code becomes Apache 2.0 after two years.
:::

:::guess
A 16 GB RAM minimum is heavy for "just spinning up" error tracking yourself. It is the natural weight of running Kafka, ClickHouse, Postgres, Redis, and a set of Rust services together. Read another way, even with the source public, the operational burden and the gap in AI features appear to make SaaS the rational choice, especially for small teams. The license stops competitors from reselling, and the weight of the stack plus closed AI features create the gap with running it yourself: a two-layer approach that reconciles publishing the code with running a business.
:::

## Tech Stack

::techstack

:::fact
According to the official developer architecture doc (accessed 2026-11-02), SDKs send events via a load balancer to `/api/0/envelope/`, where Relay receives them. Relay fetches project configs from the Sentry web service, caches them in memory and in Redis, counts events and quotas in Redis, and publishes to the ingest Kafka topic. Sentry's ingest consumer reads from Kafka and starts preprocessing; where needed, Symbolicator symbolicates stack traces; processing and save tasks follow; and the event goes out on the event stream for Snuba. Snuba consumers write it to ClickHouse, and a separate consumer handles alerting. The Sentry web service serves the UI and API and connects to Postgres, Memcached, Redis, Snuba, Kafka, Seer, and Symbolicator.
:::

:::fact
The same doc says SaaS Sentry runs as multiple regions built from the same source as self-hosted. Globally shared data that belongs to no region, such as login and signup, lives in the "Control Silo," while organization data lives in "Region Silos," each with its own infrastructure; a "Monolith" mode can access both. The data storage location doc says you can choose the US (Iowa) or the EU (Frankfurt, Germany), and once chosen it cannot be changed. Errors, transactions, spans, logs, replays, releases, and source maps are stored in the chosen region, whereas user accounts, organization settings, audit logs, cron check-ins, DSN keys and access tokens, and data shared with support always stay in the US. Uptime checks run from multiple locations and may be stored outside your chosen region.
:::

:::fact
The getsentry/sentry repository was created on August 30, 2010 (GitHub API, 2026-11-02), and by code volume Python is the largest language, followed by TypeScript. pyproject.toml requires Python 3.13 or later and Django 5.2.15 or later, and package.json uses React 19.3.0 and Emotion. Relay (ingestion) and Symbolicator (symbolication) are written in Rust, and Snuba (storage) in Python. In our HTTP header observation (2026-11-02), responses from sentry.io, us.sentry.io, and de.sentry.io returned via: 1.1 google and server: nginx, and us.sentry.io and others also returned x-envoy-upstream-service-time. docs.sentry.io returned server: Vercel.
:::

:::guess
via: 1.1 google is the header Google Cloud's load balancer adds, and the IP addresses belong to Google's network, so the SaaS front end appears to sit on Google Cloud. However, the official docs do not name a cloud provider, nor say whose facilities the Iowa and Frankfurt storage locations are, so this remains an inference from headers. Across the stack you can read a clear division of roles: only the latency- and volume-sensitive entry point (Relay) and the heavy work on native crashes (Symbolicator) are written in Rust, the UI and business logic remain the long-standing Django app, and searching huge numbers of events is left to columnar ClickHouse. By concentrating "receive, count, and drop" — what drives a monitoring service's cost of goods — in Relay, the design appears able to drop over-quota data early in the pipeline.
:::

## Business Model

Sentry's revenue is a combination of plan fees and charges based on event volume. The basic unit of price is the amount of data sent, not the number of users. In 2026 a second axis arrived: Seer, the AI, alone is priced by people.

:::fact
According to the pricing page (accessed 2026-11-02), there are four plans: the free Developer plan (one user), Team ($29/month, or $26/month billed annually), Business ($89/month, or $80/month billed annually), and custom-quoted Enterprise; Team and above allow unlimited users. Paid plans include 50k errors, 5M spans, 50 replays, 5GB of logs, 5GB of application metrics, 1GB of attachments, and one uptime monitor and one cron monitor, among others. The lookback is 30 days on Developer and up to 90 days on Team and Business. According to the pricing docs, prices shown on the pricing page do not include sales tax, and in the EU and UK VAT applies to orders without a valid VAT ID or exemption documentation. All prices are in US dollars; within what we checked, there is no Japanese yen price list.
:::

:::fact
According to the pricing docs (accessed 2026-11-02), usage beyond the included volume is covered either by "reserved volume," prepaid at a discount, or by a "PAYG budget" shared across all categories. Error rates fall with volume. On Team, the 50k–100k tier is $0.00029 per error reserved and $0.0003625 PAYG; the 500k–10M tier is $0.00015 reserved and $0.0001875 PAYG; and above 20M it is $0.00012 reserved and $0.00015 PAYG. Business rates are roughly two to three times Team's depending on the tier: $0.0011125 PAYG in the 50k–100k tier and $0.0003 PAYG above 20M. Logs and application metrics are $0.50 per GB, cron monitors $0.78 each, and uptime monitors $1.00 each, PAYG only. The docs note that per-category prices are rounded.
:::

:::fact
The same docs say Seer is added to an existing subscription at "$40 per active contributor per month" and billed as its own monthly charge, separate from the PAYG budget. An active contributor is anyone who makes two or more pull requests to a Seer-enabled repository in a month, and counts reset monthly; GitHub [bot] accounts are excluded. Legacy Seer, before January 2026, was $20/month per subscription with $25 of credits and usage-based charges such as $1.00 per Issue Fix run; as of January 2026 it is no longer offered as an add-on.
:::

:::fact
Sentry pays the maintainers of the open source software it uses every year. According to an official blog post of October 21, 2026, the 2026 amount was $1,000,000, up from $750,000 the year before. Of that, $495,000 went via thanks.dev to maintainers of packages Sentry uses, $100,000 to ecosyste.ms Funds, and about $305,000 to foundations such as the Python Software Foundation ($60,000) and the Django Software Foundation ($40,000). The post says the 37 member companies of the "Open Source Pledge" have paid a total of $8,421,535.
:::

:::guess
The shape of the pricing suggests Sentry uses "volume" and "people" for different things. Errors and spans grow naturally as a service grows, so even as unit prices fall, the total keeps rising. Unlimited users appear designed so that rolling Sentry out widely adds more sources of events, which feeds back into volume billing. Seer, on the other hand, counts "people who open pull requests," not events. We infer that Sentry judged AI's cost to scale with the number of developers asking for fixes and reviews rather than the number of errors, and moved from its earlier usage-based model to the per-seat pricing common in developer tools.

In terms of the license, what the FSL protects is arguably less the server code itself than the "operated SaaS" sold on this price list. The yearly payments to open source can be read as a way of stating, in numbers, where Sentry stands on the open source ecosystem even after it stopped calling its own software open source. How much that returns in hiring or reputation, however, cannot be judged from public information.
:::

Sentry is a company that kept its code public while redrawing, on its own terms, the boundary between publishing and selling. The SDKs are MIT and open to anyone; the server can be read and run, but not used for the same business for two years. On top of that, it prices by volume, and prices only its AI by people. For anyone choosing an error tracker, that line is insurance — you could run it yourself if you had to — and it also leaves open the path to competitors that advertise Sentry SDK compatibility. What should decide it is less the wording of the license than your own data volume and who will operate it.
