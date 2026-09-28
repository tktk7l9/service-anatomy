---
service: "Todoist"
title: "Say It and It Becomes a Task — How Todoist Grew From a Student's Hobby to a 50-Million-User To-Do App Without Venture Capital, on Delta-Only Sync and Voice Input"
description: "Todoist is the task manager that began in 2007 as a student's hobby project and, without venture capital, grew into an app used by more than 50 million people, run by a fully remote team of 108 spread across 38 countries. A dissection — from its engineering blog, API documentation, pricing page, and press release — of a sync protocol built on sync_token and temp_id that only exchanges what changed, an API answered by gunicorn in front of MySQL on Amazon Aurora, an iOS local database moved from Realm to GRDB, filter queries written by GPT-4 and Ramble turning speech into tasks with Gemini 2.5 Flash Live, and an affiliate program paying up to 25%."
lead: "Type a task name into Todoist together with \"every other Tuesday\", \"#Work\", and \"p1\", and a single line becomes a task with a recurring schedule, a project, and a priority. Since 2025 you can just say it out loud instead. In to-do lists — a tool anyone can build and anyone can switch away from — Todoist has spent 18 years gathering more than 50 million users while running without venture capital. This is a dissection of how it is built and how it makes money."
category: productivity
tags: [task-management, productivity, sync-engine, python, voice-ai]
publishedAt: "2026-09-28"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://www.todoist.com/"
# Affiliate link placeholder: the owner must join the Todoist affiliate program
# (https://www.todoist.com/channelpartners, run on PartnerStack) before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<todoist-partnerstack-affiliate-link>"
#   program: "Todoist Affiliate Program (PartnerStack)"
vendor: "Doist Inc."
origin: "GLOBAL"
heroTheme: "todoist"
scores: { product: 4.5, ux: 4.5, tech: 4.0, business: 4.0 }
techStack:
  - layer: "Sync protocol"
    name: "Todoist API v1 Sync (sync_token / commands / temp_id)"
    confidence: confirmed
    evidence: "The official API documentation describes incremental sync (the first request uses sync_token=* to fetch everything, later requests pass the returned token to receive only what changed), batching of up to 100 commands per request, and temporary IDs that let commands reference resources not yet created, resolved through a temp_id_mapping in the response. API v1 is described as unifying Sync API v9 and REST API v2"
    evidenceUrl: "https://developer.todoist.com/api/v1/"
  - layer: "Database"
    name: "MySQL 8.0 (Amazon Aurora)"
    confidence: confirmed
    evidence: "The official engineering blog post \"When IN(…) is Not Enough\" (2025-06-19) works on MySQL 8.0.40 (AWS Aurora), replacing IN(…) with JSON_TABLE so a single prepared statement can be reused regardless of array size"
    evidenceUrl: "https://www.doist.dev/in-mysql"
  - layer: "API server"
    name: "Python (gunicorn)"
    confidence: likely
    evidence: "In this site's HTTP header observation (2026-09-28), api.todoist.com/api/v1/sync returned server: gunicorn, a Python WSGI server. The official post \"AWS ECS-based Ephemeral consoles\" (2023-12-20) also says developers use a Python/iPython console to investigate production. No public job posting or page naming the server language was available to confirm it at the time of writing"
    evidenceUrl: "https://www.doist.dev/ephemeral-consoles"
  - layer: "Operations and debugging"
    name: "AWS ECS on Fargate + Tailscale (ephemeral consoles)"
    confidence: confirmed
    evidence: "The same official post explains that consoles for troubleshooting production are launched on demand as time-limited Fargate tasks on AWS ECS, reached over SSH through Tailscale, with mandatory session recording. The bootstrap that manages them is written in Go"
    evidenceUrl: "https://www.doist.dev/ephemeral-consoles"
  - layer: "Web client"
    name: "TypeScript / React / Redux"
    confidence: confirmed
    evidence: "The official post \"Kotlin Multiplatform on the Web\" (2022-01-20) says the web app is written in TypeScript and Redux, modeling state as immutable plain objects. \"Building Ramble #1\" (2025-12-19) introduces a custom React hook, useMicrophone, for microphone permissions"
    evidenceUrl: "https://www.doist.dev/filterist-kotlin-multiplatform-javascript-exploration"
  - layer: "Rich-text editor"
    name: "Typist (Tiptap / ProseMirror)"
    confidence: confirmed
    evidence: "The official GitHub repository Doist/typist (MIT license) describes it as the Tiptap-based React rich-text editor that powers Doist products, with HTML and Markdown serializers"
    evidenceUrl: "https://github.com/Doist/typist"
  - layer: "iOS local database"
    name: "GRDB (SQLite) — migrated from Realm in 2025"
    confidence: confirmed
    evidence: "The official post \"Optimizing GRDB in Todoist for iOS\" (2026-01-27) explains the migration from Realm to GRDB in summer 2025, and how aggregate queries built on LEFT JOINs exploded intermediate rows until they were replaced with subqueries"
    evidenceUrl: "https://www.doist.dev/optimizing-grdb-in-todoist-for-ios"
  - layer: "Voice input (Ramble)"
    name: "Gemini 2.5 Flash Live via Google Vertex AI"
    confidence: confirmed
    evidence: "The official press release (2026-01-21) states that Ramble uses Google's Gemini 2.5 Flash Live model via Vertex AI, streaming audio to Doist's backend where the model transcribes speech and parses intent in real time. Audio is never stored or used for training"
    evidenceUrl: "https://www.prnewswire.com/news-releases/introducing-todoist-ramble-ai-that-turns-natural-speech-into-structured-tasks-302666143.html"
  - layer: "AI filter generation"
    name: "FastAPI + OpenAI GPT-4 (Filter Assist)"
    confidence: confirmed
    evidence: "The official post \"Filter Assist\" (2024-03-14) describes sending a natural-language request through a FastAPI backend to GPT-4 to produce a filter query, validating it against the in-house parser (Filterist) before returning it, and publishes accuracy on 27 test prompts (about 70% for GPT-3.5-turbo, about 96% for GPT-4)"
    evidenceUrl: "https://www.doist.dev/filter-assist"
  - layer: "Product analytics"
    name: "bitmapist + bitmapist-server (Redis bitmaps / Go)"
    confidence: confirmed
    evidence: "The official post \"Bitmapist\" (2025-07-29, written by CEO Amir Salihefendic) describes the in-house cohort analytics library built on Redis bitmaps, and the Go-based bitmapist-server that cut memory use for the same data from nearly 130GB to 300MB"
    evidenceUrl: "https://www.doist.dev/bitmapist"
  - layer: "AI agent integration"
    name: "Todoist MCP server (TypeScript, hosted at ai.todoist.net/mcp)"
    confidence: confirmed
    evidence: "The official GitHub repository Doist/todoist-mcp (MIT license) describes a set of tools that let AI agents use Todoist on a user's behalf, offered as a streamable HTTP MCP server at https://ai.todoist.net/mcp"
    evidenceUrl: "https://github.com/Doist/todoist-mcp"
  - layer: "CI/CD"
    name: "GitHub Actions (Ubicloud runners) / Fastlane / Gradle plugins"
    confidence: confirmed
    evidence: "Official posts describe GitHub Actions on Ubicloud runners with Jest, Playwright, and Datadog for the web (\"Speeding up Todoist Web's CI\", 2026-09-18), Fastlane with daily internal TestFlight builds for iOS (\"Continuous Deployment for iOS\", 2022-02-15), and daily releases wrapped in Gradle plugins for Android (\"We release our Android apps every day\", 2021-10-13)"
    evidenceUrl: "https://www.doist.dev/taming-ci-times"
  - layer: "Delivery and marketing site"
    name: "Amazon CloudFront / Astro"
    confidence: likely
    evidence: "In this site's observation (2026-09-28), www.todoist.com, app.todoist.com, and api.todoist.com all returned via: CloudFront and x-amz-cf-pop headers. The pricing page HTML contained many data-astro-cid attributes, which Astro adds. doist.com redirects with a 301 to www.todoist.com/about-us"
sources:
  - label: "Wikipedia: Todoist (2007 origin, feature timeline, user counts)"
    url: "https://en.wikipedia.org/wiki/Todoist"
    accessedAt: "2026-09-28"
  - label: "Todoist: About us (founder, 108 people, 38 countries, remote since 2011)"
    url: "https://www.todoist.com/about-us"
    accessedAt: "2026-09-28"
  - label: "Todoist: Channel Partners (up to 25%, PartnerStack, grown without VC funding)"
    url: "https://www.todoist.com/channelpartners"
    accessedAt: "2026-09-28"
  - label: "Todoist Help: Todoist Partner Programs (reward terms, 90-day cookie)"
    url: "https://www.todoist.com/help/todoist/billing/todoist-partner-programs-t8t2hZ0Z"
    accessedAt: "2026-09-28"
  - label: "Todoist: Pricing"
    url: "https://www.todoist.com/pricing"
    accessedAt: "2026-09-28"
  - label: "Todoist Help: Use Quick Add (#, %, p1–p3, natural-language dates)"
    url: "https://www.todoist.com/help/articles/use-task-quick-add-in-todoist-va4Lhpzz"
    accessedAt: "2026-09-28"
  - label: "Todoist: Meet Ramble"
    url: "https://www.todoist.com/ramble"
    accessedAt: "2026-09-28"
  - label: "PR Newswire: Introducing Todoist Ramble (Doist press release, 2026-01-21)"
    url: "https://www.prnewswire.com/news-releases/introducing-todoist-ramble-ai-that-turns-natural-speech-into-structured-tasks-302666143.html"
    accessedAt: "2026-09-28"
  - label: "Todoist Developer: API v1 (sync, commands, temp_id, request limits)"
    url: "https://developer.todoist.com/api/v1/"
    accessedAt: "2026-09-28"
  - label: "Doist Engineering: When IN(…) is Not Enough (MySQL 8.0 / Aurora, 2025-06-19)"
    url: "https://www.doist.dev/in-mysql"
    accessedAt: "2026-09-28"
  - label: "Doist Engineering: AWS ECS-based Ephemeral consoles (2023-12-20)"
    url: "https://www.doist.dev/ephemeral-consoles"
    accessedAt: "2026-09-28"
  - label: "Doist Engineering: Choosing a Multiplatform Stack (2022-04-28)"
    url: "https://www.doist.dev/choosing-a-multiplatform-stack"
    accessedAt: "2026-09-28"
  - label: "Doist Engineering: Kotlin Multiplatform on the Web (2022-01-20)"
    url: "https://www.doist.dev/filterist-kotlin-multiplatform-javascript-exploration"
    accessedAt: "2026-09-28"
  - label: "Doist Engineering: Optimizing GRDB in Todoist for iOS (2026-01-27)"
    url: "https://www.doist.dev/optimizing-grdb-in-todoist-for-ios"
    accessedAt: "2026-09-28"
  - label: "Doist Engineering: Filter Assist: AI-Generated Filters in Todoist (2024-03-14)"
    url: "https://www.doist.dev/filter-assist"
    accessedAt: "2026-09-28"
  - label: "Doist Engineering: Bitmapist (2025-07-29)"
    url: "https://www.doist.dev/bitmapist"
    accessedAt: "2026-09-28"
  - label: "Doist Engineering: Building Ramble #1: Taming the Microphone (2025-12-19)"
    url: "https://www.doist.dev/building-ramble-1-taming-the-microphone"
    accessedAt: "2026-09-28"
  - label: "Doist Engineering: Speeding up Todoist Web's CI (2026-09-18)"
    url: "https://www.doist.dev/taming-ci-times"
    accessedAt: "2026-09-28"
  - label: "Doist Engineering: Continuous Deployment for iOS (2022-02-15)"
    url: "https://www.doist.dev/continuous-deployment-for-ios"
    accessedAt: "2026-09-28"
  - label: "Doist Engineering: We release our Android apps every day (2021-10-13)"
    url: "https://www.doist.dev/android-app-continuous-deployment"
    accessedAt: "2026-09-28"
  - label: "GitHub: Doist/typist (Tiptap-based rich-text editor)"
    url: "https://github.com/Doist/typist"
    accessedAt: "2026-09-28"
  - label: "GitHub: Doist/todoist-mcp (official MCP server)"
    url: "https://github.com/Doist/todoist-mcp"
    accessedAt: "2026-09-28"
  - label: "1Password: Affiliate program (for comparison)"
    url: "https://1password.com/affiliate"
    accessedAt: "2026-09-28"
---

A to-do app is one of the easiest pieces of software to build and one of the easiest to leave. A paper note or the reminders app that ships with every phone will do in a pinch. In that market Todoist has kept sharpening two things — how fast you can get a task in, and how instantly the same list appears on every device — and gathered more than 50 million users without leaning on outside capital.

## Service overview

Todoist is a task manager that organizes tasks by project, section, label, and priority, with due dates, reminders, and recurrence. It offers a free plan for individuals, a paid Pro plan, and Business for teams, and works on the same data across the web, Windows, macOS, Linux, iOS, Android, Apple Watch, and Wear OS. Its maker, Doist, also builds the team messaging app Twist.

:::fact
According to Wikipedia, Todoist was created in 2007 by Amir Salihefendic as a hobby project without formal funding. The official About us page says it began as a tool a stressed computer science student built to manage a demanding life and study schedule; Salihefendic is still CEO. The same page lists a team of 108 people of 43 nationalities in 94 cities across 38 countries, working remote and async "since 2011, before the pandemic normalized it." The official Channel Partners page says the company grew organically without VC funding, and cites more than 1 million Pro users, more than 30 million app downloads, and more than 2 billion completed tasks.
:::

:::fact
According to Wikipedia, registered users numbered 350,000 in 2012, 5 million in 2015, and more than 30 million in 2024. Doist's press release of January 21, 2026 describes Todoist as "used by over 50 million people worldwide." Along the way it shipped an HTML5 web version and native mobile apps in 2012, natural-language parsing for recurring dates in 2015, and team workspaces and kanban boards in 2020.
:::

:::pull
Write "every other Tuesday" and it recurs; write "p1" and it jumps to the top. Todoist's strength is turning what you type — and now what you say — into structure without making you press a single button.
:::

::scorecard

## UX analysis

Todoist's UX is designed to push the cost of input as close to zero as possible, and let the machine help with the organizing afterwards.

- **Decide everything in one line.** The Quick Add field reads dates and recurrence written like "tomorrow at 4 PM" or "every other Tuesday starting March 3", projects (#), labels (%, with the old @ being retired by the end of 2026), and priorities (p1–p3) out of the sentence itself. There are no form fields to fill in one by one; you type in whatever order the thought arrives. A word mistakenly read as a date — "monthly" in "Create monthly report" — can be clicked to turn it back into plain text.
- **Say it and it becomes a task.** Ramble, the voice input that entered public beta in November 2025 and became generally available in January 2026, splits a stream of free-form speech into several tasks with projects, dates, deadlines, priorities, and durations. Say "Actually, make that Thursday" mid-sentence and the task is rewritten on the spot. According to the press release it supports 38 languages; the free plan has a monthly session limit, while Pro and Business are unlimited.
- **No query language required.** Todoist filters use their own query syntax, like `(today | tomorrow) & @work`, which only a minority mastered. Filter Assist (2024) lets you ask in plain language and has AI write the query and a title.
- **A free plan you can live on.** The free Beginner plan includes 5 personal projects, Smart Quick Add, reminders, list and board layouts, and 3 filter views. Features for managing work at scale — the calendar layout, task durations, 150 filter views, full activity history — are reserved for Pro.

:::fact
According to Doist's press release (January 21, 2026), 76,000 users completed about 290,000 Ramble sessions during the November–December 2025 beta. End-to-end task creation success rose from about 40% in October 2025 to about 62% in December. Among new free users who tried Ramble, upgrade rates were about five times the baseline. The official engineering post "Filter Assist" (March 14, 2024) cites the fact that only a small percentage of users were adding filters as the reason for building the feature.
:::

## Tech stack

::techstack

:::fact
According to the official API documentation, Todoist clients and servers exchange data through a "sync_token." The first request uses `sync_token=*` to receive everything; every later request passes the previous token and receives only what has changed since. Writes are sent as "commands," up to 100 per request, each matched to its result by a UUID. Even creating a project that does not yet exist on the server and putting a task inside it can go in a single request, with the commands referring to each other through client-chosen temporary IDs (temp_id); the server replies with a temp_id_mapping to the real IDs. Per user, the limits are 1,000 partial syncs and 100 full syncs per 15 minutes. The former Sync API v9 and REST API v2 have been unified into the current API v1.
:::

:::fact
According to the official engineering blog, the server-side database is MySQL 8.0 on Amazon Aurora ("When IN(…) is Not Enough," June 2025), and consoles for investigating production are launched as time-limited Fargate tasks on AWS ECS and reached through Tailscale (December 2023). The web app is written in TypeScript and Redux (January 2022), and rich-text editing uses Typist, built in house on top of Tiptap. In summer 2025 the iOS app moved its local database from Realm to the SQLite-based GRDB (January 2026). "Choosing a Multiplatform Stack" (April 2022) compared JavaScript, Go, Rust, and Kotlin Multiplatform for sharing logic across Android, Apple platforms, the web, and Windows, and concluded that Kotlin Multiplatform — whose interop with Swift showed no significant performance loss — was "the only technology worth exploring." An earlier post that January, on compiling the Filterist query parser from Kotlin to JavaScript, concluded that Kotlin/JS was "not quite production-ready for Filterist."
:::

:::guess
In this site's observation (2026-09-28), the sync endpoint on api.todoist.com returned `server: gunicorn`. Gunicorn serves Python web applications, so the API itself appears to be written in Python. The use of FastAPI for the AI backend and of Python consoles for debugging also suggests Python sits at the center of the server. The sync design rests on three ideas — send only the changes, bundle writes into one request, and create things first under a temporary ID — which appears aimed at letting a phone create tasks locally in a subway or on a plane and send them all the moment it reconnects. With that approach, perceived speed on the device can stay high without an elaborate server.
:::

:::guess
Ramble's audio goes through Doist's backend to Gemini 2.5 Flash Live rather than straight from the device to Google. The likely reason is to pass the user's project names and labels in as context, and to turn the model's output into the existing sync commands. Promising never to store audio while still improving accuracy means tuning on outcomes — whether a task was successfully created end to end — rather than on recordings, and the press release publishing that success rate over time appears to reflect exactly that.
:::

## Business model

Todoist's revenue comes from subscriptions to Pro for individuals and Business for teams. It is classic freemium: start people on the free Beginner plan, then move the heavy users to paid.

:::fact
According to the official pricing page (viewed from Japan on September 28, 2026), Pro costs ¥672 per user per month billed yearly (¥8,064 a year) or ¥894 monthly, and Business costs ¥960 per user per month billed yearly (¥11,520 a year) plus local tax, or ¥1,280 monthly. In US dollars, Pro is $5 a month billed yearly ($60) or $7 monthly, and Business is $8 a month billed yearly ($96) or $10 monthly. Pro includes 300 projects, the calendar layout, task durations, 150 filter views, full activity history, the AI-powered Task Assist, and unlimited Ramble. Business adds a shared team workspace, up to 500 team projects, up to 1,000 members and guests, roles and permissions, and centralized billing, and is SOC 2 Type II compliant.
:::

:::fact
According to the official Channel Partners page and help center, Todoist's affiliate program runs on PartnerStack and pays up to 25% depending on partner tier. For yearly plans the reward is paid once, on the first payment; for monthly plans it applies to up to 12 payments. A sale counts if the referred person becomes a paid user on the web within 90 days of clicking; App Store and Google Play purchases are excluded. Rewards can be redeemed after the 30-day refund period, and all payments are in US dollars. Applicants are expected to have a sizeable existing audience.
:::

:::guess
Compared with 1Password's "$2 per signup plus 25% of the first payment," Todoist's terms leave more with the referrer when the customer pays monthly, since it pays on up to 12 months. Mobile app-store purchases, however, are excluded. Where the store already takes a cut there is little room left for a referral fee as well, which suggests an intent to steer users toward paying on the web. The press release's figure — free users who tried Ramble upgraded at about five times the baseline — indicates that AI features are working as a "free to try, paid once you rely on it" funnel, and Todoist is likely to keep using AI both as a hook in the free plan and as the differentiator of the paid ones.
:::

:::guess
The absence of venture capital appears to shape the engineering as well. Supporting more than 50 million users with a team of 108 requires systems that run with few hands. Shipping Android and iOS builds internally every day, cutting web CI times by roughly half by "stopping doing work that didn't need to happen," shrinking an analytics store to about 1/400th of its memory — many of the topics on the engineering blog aim at saving cost and people as much as at speed, which is presumably the other side of running a business that cannot cover losses with outside money.
:::

What Todoist sells is not a screen that lists tasks. It is the state in which whatever crosses your mind, the moment you type or say it, can be pulled up in the same structure on any device. Sync that exchanges only the changes, writes that create first under a temporary ID, and input that turns sentences and speech into structure — together they have made a to-do app, the kind anyone can build and anyone can leave, into an independent business now 18 years old. Even as AI agents begin writing tasks through MCP, the value of a design that keeps the way in fast and the contents the same everywhere is not going away.
