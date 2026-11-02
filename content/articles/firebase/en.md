---
service: "Firebase"
title: "A Price List That Ends in \"Then Google Cloud pricing,\" Firestore Reads You Cannot Cap, and Four Products Given End Dates in 2026 — Dissecting Firebase, Which Became the Front Desk of Google Cloud"
description: "Every Firebase project is a Google Cloud project behind the scenes, and moving from the no-cost Spark plan to the pay-as-you-go Blaze plan means linking a Cloud Billing account. Firestore in Tokyo costs $0.038 per 100,000 reads. Spend caps, in public preview since September 14, 2026, cover AI Logic, App Hosting, Cloud Functions and Extensions, but not Firestore, Realtime Database or Cloud Storage. Data Connect was renamed SQL Connect, and Firebase Studio, Extensions, Firebase ML and Test Lab all received end dates in 2027. We dissect the service from its pricing page, documentation, release notes, official blog and our own observation."
lead: "Read down the pay-as-you-go column of Firebase's pricing page and you keep meeting the same words: \"Then Google Cloud pricing.\" The documentation says it outright: \"All Firebase projects are actually Google Cloud projects behind the scenes.\" The realtime database company that joined Google in 2014 is now a front desk that hands Google Cloud's parts to app developers in a usable form. In 2026, end dates landed on product after product around its edges, and a way to stop the bill finally arrived. This article dissects what is running behind that desk."
category: dev-tool
tags: [baas, backend, database, nosql, google-cloud, serverless, ai-agent, gemini]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
serviceUrl: "https://firebase.google.com/"
# Affiliate link placeholder: no public affiliate program for Firebase was found (checked
# 2026-11-02 on firebase.google.com/pricing and the support FAQ). Leave this block commented out
# unless the owner finds a program. Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<firebase-referral-link>"
#   program: "Firebase"
vendor: "Google LLC"
origin: "US"
heroTheme: "firebase"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 4.0 }
expires:
  - date: "2026-11-02"
    claim: "Check that automatic App Check enforcement for Firebase AI Logic began on November 2, 2026 as announced and that the delay option is unchanged"
  - date: "2027-02-01"
    claim: "Check whether spend caps are still in public preview and whether Firestore, Realtime Database or Cloud Storage have joined the eligible services"
  - date: "2027-03-22"
    claim: "Check whether the Firebase Studio end date (March 22, 2027) has changed, then rewrite for after the shutdown"
  - date: "2027-03-31"
    claim: "Check whether the Firebase Extensions end date (March 31, 2027) has changed, then rewrite for after the shutdown"
  - date: "2027-06-15"
    claim: "Check whether the Firebase ML end date (June 15, 2027) has changed, then rewrite for after the shutdown"
  - date: "2027-09-30"
    claim: "Check whether the Firebase Test Lab end date (September 30, 2027) has changed, then rewrite for after the shutdown"
techStack:
  - layer: "Foundation (projects and billing)"
    name: "Google Cloud projects + Cloud Billing"
    confidence: confirmed
    evidence: "The official \"Firebase pricing plans\" page states that all Firebase projects are actually Google Cloud projects behind the scenes, that billing is shared across Firebase and Google Cloud, and that the same project appears in both consoles. It describes upgrading to Blaze as, \"for all intents and purposes,\" linking a Cloud Billing account to the underlying Google Cloud project"
    evidenceUrl: "https://firebase.google.com/docs/projects/billing/firebase-pricing-plans"
  - layer: "Document database"
    name: "Cloud Firestore (Standard / Enterprise, MongoDB compatibility)"
    confidence: confirmed
    evidence: "The official \"Editions\" page states that Standard supports Core operations only while Enterprise has an advanced query engine and two modes, Native mode and Firestore with MongoDB compatibility. Indexes are required in Standard and optional in Enterprise"
    evidenceUrl: "https://firebase.google.com/docs/firestore/editions"
  - layer: "JSON database (the original)"
    name: "Firebase Realtime Database"
    confidence: confirmed
    evidence: "The official comparison page calls it \"the classic Firebase JSON database,\" states that data is stored as one large JSON tree, and gives limits of around 200,000 concurrent connections and 1,000 writes per second in a single database, beyond which sharding is required"
    evidenceUrl: "https://firebase.google.com/docs/firestore/rtdb-vs-firestore"
  - layer: "Relational database"
    name: "SQL Connect (GraphQL) + Cloud SQL for PostgreSQL"
    confidence: confirmed
    evidence: "The official docs describe a fully managed PostgreSQL database powered by Cloud SQL, with schema, queries and mutations managed through GraphQL and type-safe SDKs generated. The release notes of April 22, 2026 say \"Firebase Data Connect is now known as Firebase SQL Connect\" and that the APIs have not changed"
    evidenceUrl: "https://firebase.google.com/docs/sql-connect"
  - layer: "Web app delivery"
    name: "App Hosting (Cloud Build + Cloud Run + Cloud CDN)"
    confidence: confirmed
    evidence: "The official docs state that apps are built with Cloud Build, served on Cloud Run and cached in Cloud CDN, with API keys protected by Cloud Secret Manager. Containers go to Artifact Registry. Google Cloud terms apply, not Firebase terms"
    evidenceUrl: "https://firebase.google.com/docs/app-hosting/about-app-hosting"
  - layer: "Serverless functions"
    name: "Cloud Functions for Firebase (on Cloud Run functions)"
    confidence: confirmed
    evidence: "The official FAQ states that Cloud Functions for Firebase, both 1st and 2nd gen, relies on Cloud Run functions, so a spend cap on Cloud Run functions is essentially a spend cap on Cloud Functions for Firebase. It gives reliance on paid Google services such as Cloud Build as the reason a billing account is needed"
    evidenceUrl: "https://firebase.google.com/docs/functions/faq-and-troubleshooting"
  - layer: "Entry point for AI features"
    name: "Firebase AI Logic (client SDKs + proxy) + Gemini API"
    confidence: confirmed
    evidence: "The official docs describe client SDKs for Swift, Kotlin/Java, JavaScript, Dart and Unity plus a proxy service that acts as a gateway between the client and the chosen Gemini API provider (the Gemini Developer API or the Agent Platform Gemini API)"
    evidenceUrl: "https://firebase.google.com/docs/ai-logic"
  - layer: "Entry point for AI agents"
    name: "Firebase MCP server + agent skills + Firebase CLI"
    confidence: confirmed
    evidence: "The official docs describe a local MCP server usable from Antigravity, Claude Code, Cursor and others, and agent skills as packages that teach AI assistants Firebase workflows. The official blog of 2026-09-28 says the Firebase plugin is now available in Codex and bundles the skills, the MCP server and the CLI"
    evidenceUrl: "https://firebase.google.com/docs/ai-assistance/mcp-server"
  - layer: "Public sites"
    name: "Google Frontend (firebase.google.com) / Fastly (firebase.blog)"
    confidence: likely
    evidence: "This site's own observation (2026-11-02) found firebase.google.com returning server: Google Frontend. firebase.blog returned x-served-by: cache-nrt-… and x-timer, a format commonly seen on Fastly cache responses, but we did not find a statement from Firebase on this"
sources:
  - label: "Firebase: Pricing (plans, per-product no-cost usage and unit prices)"
    url: "https://firebase.google.com/pricing"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Firebase pricing plans"
    url: "https://firebase.google.com/docs/projects/billing/firebase-pricing-plans"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Avoid surprise bills"
    url: "https://firebase.google.com/docs/projects/billing/avoid-surprise-bills"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Spend caps"
    url: "https://firebase.google.com/docs/projects/billing/spend-caps"
    accessedAt: "2026-11-02"
  - label: "Firebase blog: Introducing Firebase spend caps (2026-09-14)"
    url: "https://firebase.blog/posts/2026/09/firebase-spend-caps"
    accessedAt: "2026-11-02"
  - label: "Firebase: FAQ (pricing, caps, support)"
    url: "https://firebase.google.com/support/faq"
    accessedAt: "2026-11-02"
  - label: "Firebase: Release Notes"
    url: "https://firebase.google.com/support/releases"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Understand Cloud Firestore billing"
    url: "https://firebase.google.com/docs/firestore/pricing"
    accessedAt: "2026-11-02"
  - label: "Google Cloud: Firestore pricing (Standard edition prices by location)"
    url: "https://cloud.google.com/firestore/pricing"
    accessedAt: "2026-11-02"
  - label: "Google Cloud: Firestore Enterprise edition pricing"
    url: "https://cloud.google.com/firestore/enterprise/pricing"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Cloud Firestore editions"
    url: "https://firebase.google.com/docs/firestore/editions"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Choose a database (Firestore vs. Realtime Database)"
    url: "https://firebase.google.com/docs/firestore/rtdb-vs-firestore"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Realtime Database billing"
    url: "https://firebase.google.com/docs/database/usage/billing"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Firebase SQL Connect"
    url: "https://firebase.google.com/docs/sql-connect"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: SQL Connect pricing"
    url: "https://firebase.google.com/docs/sql-connect/pricing"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: App Hosting"
    url: "https://firebase.google.com/docs/app-hosting"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: About App Hosting (architecture and regions)"
    url: "https://firebase.google.com/docs/app-hosting/about-app-hosting"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: App Hosting costs"
    url: "https://firebase.google.com/docs/app-hosting/costs"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: App Hosting compared with Firebase Hosting and other products"
    url: "https://firebase.google.com/docs/app-hosting/product-comparison"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: FAQ on Cloud Storage changes (announced September 2024)"
    url: "https://firebase.google.com/docs/storage/faqs-storage-changes-announced-sept-2024"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Cloud Functions FAQ"
    url: "https://firebase.google.com/docs/functions/faq-and-troubleshooting"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Cloud Functions locations"
    url: "https://firebase.google.com/docs/functions/locations"
    accessedAt: "2026-11-02"
  - label: "Google Cloud: Identity Platform pricing (SMS prices by country)"
    url: "https://cloud.google.com/identity-platform/pricing"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Firebase AI Logic"
    url: "https://firebase.google.com/docs/ai-logic"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Firebase AI Logic pricing"
    url: "https://firebase.google.com/docs/ai-logic/pricing"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Firebase AI Logic FAQ (automatic App Check enforcement)"
    url: "https://firebase.google.com/docs/ai-logic/faq-and-troubleshooting"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Develop with AI assistance"
    url: "https://firebase.google.com/docs/ai-assistance"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Firebase MCP server"
    url: "https://firebase.google.com/docs/ai-assistance/mcp-server"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Firebase agent skills"
    url: "https://firebase.google.com/docs/ai-assistance/agent-skills"
    accessedAt: "2026-11-02"
  - label: "Firebase blog: The Firebase plugin is now available in Codex (2026-09-28)"
    url: "https://firebase.blog/posts/2026/09/firebase-plugin-for-codex"
    accessedAt: "2026-11-02"
  - label: "Genkit official site"
    url: "https://genkit.dev/"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Firebase Studio"
    url: "https://firebase.google.com/docs/studio"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Migrating from Firebase Studio"
    url: "https://firebase.google.com/docs/studio/migrating-project"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Firebase Extensions Deprecation FAQ"
    url: "https://firebase.google.com/docs/extensions/faq-and-troubleshooting"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Firebase Extensions"
    url: "https://firebase.google.com/docs/extensions"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Firebase Test Lab Deprecation FAQ"
    url: "https://firebase.google.com/docs/test-lab/deprecation-faq"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Firebase ML"
    url: "https://firebase.google.com/docs/ml"
    accessedAt: "2026-11-02"
  - label: "Firebase: Dynamic Links Deprecation FAQ"
    url: "https://firebase.google.com/support/dynamic-links-faq"
    accessedAt: "2026-11-02"
  - label: "Firebase blog: Firebase is Joining Google! (2014-10-21)"
    url: "https://firebase.googleblog.com/2014/10/firebase-is-joining-google.html"
    accessedAt: "2026-11-02"
  - label: "Firebase blog: Firebase expands to become a unified app platform (2016-05-18)"
    url: "https://firebase.googleblog.com/2016/05/firebase-expands-to-become-unified-app-platform.html"
    accessedAt: "2026-11-02"
  - label: "Firebase blog: Introducing Cloud Firestore (2017-10-03)"
    url: "https://firebase.googleblog.com/2017/10/introducing-cloud-firestore.html"
    accessedAt: "2026-11-02"
  - label: "GitHub: genkit-ai/genkit"
    url: "https://github.com/genkit-ai/genkit"
    accessedAt: "2026-11-02"
---

Firebase is Google's platform for using the parts of an app backend without running servers. Authentication, databases, file storage, functions and delivery sit in one console alongside Crashlytics and push notifications. Where [Supabase](/en/articles/supabase) bundles existing open source and calls itself a Firebase alternative, what Firebase bundles is Google Cloud. This article looks at how that bundling shows up in the price list and the bill, using official pages re-read on November 2, 2026. We have not operated Firebase ourselves for this piece; we are reading the public pricing pages, documentation and release notes against each other.

## Service overview

Firebase began as a realtime database. In an official blog post on October 21, 2014, co-founder James Tamplin announced that the company had joined Google after three years, with the product "used by 110,000 developers." One of the two reasons he gave was that the Firebase and Google Cloud Platform teams were "highly complementary": "Firebase developers will gain access to a powerful cloud infrastructure suite, and Cloud Platform customers will gain access to our rapid development capabilities." The post does not state the acquisition price.

:::fact
According to the official blog of May 18, 2016, developers grew from 110,000 to over 450,000 in the 18 months after joining Google, and that day Firebase announced its expansion into "a unified app platform for Android, iOS and mobile web development." One stated principle was "one SDK, one console, and one place to go for documentation and support." Cloud Firestore launched in beta on October 3, 2017. The release notes of April 9, 2025 record general availability for App Hosting and Data Connect (now SQL Connect). The docs describe Firestore as "trusted by more than 600,000 developers." We did not find a developer count or revenue figure for Firebase as a whole on the official pages we checked.
:::

There are only two plans today. Spark is no-cost and needs no payment method. Blaze links a Cloud Billing account, includes Spark's no-cost usage, and charges for what goes beyond it. There is no monthly base fee.

:::fact
According to the official pricing page and docs (accessed 2026-11-02), A/B Testing, App Check, App Distribution, most Authentication, Cloud Messaging, Crashlytics, In-App Messaging and Performance Monitoring are no-cost on both plans, "even in your production apps and even if you have several million users." The money moves on the products below. Prices are in US dollars; the page says that if you pay in another currency, the prices on the Cloud Platform SKUs apply. We could not confirm tax treatment on the pricing page.

| Product | Spark (no-cost) | Blaze (pay as you go after no-cost usage) |
| --- | --- | --- |
| Authentication | 50K MAUs | No-cost up to 50K MAUs, then Google Cloud pricing |
| Firestore (Standard) | 1 GiB stored; 50K reads/day; 20K writes/day; 20K deletes/day; 10 GiB/month egress | Same no-cost usage, then Google Cloud pricing |
| Realtime Database | 100 simultaneous connections; 1 GB stored; 10 GB/month downloaded | 200K connections per database; $5/GB stored beyond 1 GB; $1/GB downloaded beyond 360 MB/day |
| Cloud Storage | Unavailable (since 2026-02-03) | For new-format buckets, no-cost up to 5 GB-months, 100 GB/month downloaded, 5K uploads/month and 50K downloads/month, only in us-central1, us-west1 and us-east1 |
| Cloud Functions | Unavailable | No-cost up to 2M invocations, 400K GB-seconds and 200K CPU-seconds a month; invocations then $0.40/million |
| App Hosting | Unavailable | No-cost up to 10 GiB/month, then $0.15/GiB cached and $0.20/GiB uncached, plus Cloud Run and other costs |
| Hosting | 10 GB stored; 360 MB/day transfer | Same no-cost usage, then $0.026/GB stored and $0.15/GB transferred |
| SQL Connect | 90-day trial (about 8,000 operations and 330 MiB a day) | No-cost up to 250K operations/month, then $0.90/million, plus Cloud SQL (from $9.37/month) with a 3-month no-cost trial |

Firestore's unit prices vary by location. Standard edition in Tokyo (asia-northeast1) costs $0.038 for reads, $0.115 for writes and $0.013 for deletes per 100,000 documents, against $0.03, $0.09 and $0.01 in Iowa. Phone authentication is billed per SMS; Identity Platform's price table lists $0.03 for Japan, with the first ten SMS each day not billed. New Google Cloud users may be eligible for $300 in credit.
:::

:::fact
The official explanation is candid. The docs say "All Firebase projects are actually Google Cloud projects behind the scenes," and that upgrading to Blaze means, "for all intents and purposes," linking a Cloud Billing account to the underlying Google Cloud project. Linking a billing account from the Google Cloud console, or using services such as Pub/Sub or Cloud Run in the same project, also moves a project to Blaze automatically. Unlinking the account returns it to Spark, and non-default Realtime Database instances and Cloud Storage buckets then become inaccessible, though the data is not deleted.
:::

:::pull
Blaze is less a Firebase pricing plan than the name for a state: a Google Cloud billing account has been linked.
:::

::scorecard

## UX analysis

Firebase's UX is lightest on day one. You can create a project with no payment method, write to a database straight from a client SDK, and connect a sign-in screen. The weight arrives later, one decision at a time.

- **Spark quietly narrowed.** Changes to Cloud Storage were announced in September 2024, and Blaze became mandatory from February 3, 2026. Spark projects cannot reach any bucket, the APIs return 402 or 403, and the console redirects to an upgrade prompt. Cloud Functions and App Hosting also require Blaze, so what you can build without a card comes down to databases, authentication and static hosting. Adding a feature that uploads one photo means registering a card.
- **No-cost periods differ by product.** Firestore resets daily (around midnight Pacific time) and Cloud Functions monthly. Firestore's no-cost usage applies to one database per project. New-format Cloud Storage buckets get no-cost usage only in three US regions. The FAQ says that exceeding Spark resources shuts the app off for the rest of the calendar month. It stops and no bill arrives. Blaze is the reverse: the bill arrives and it does not stop.
- **The unit of a read does not match intuition.** A realtime listener costs one read each time a document in the result set is added or updated. With offline persistence on, a listener disconnected for more than 30 minutes is charged as if it had issued a brand-new query. An `offset` is charged for every skipped document (an offset of 10 returning 1 document costs 11 reads). A query returning nothing still costs a minimum of one read. If Security Rules call `get()` on another document, that read is billed too.
- **The classic failures are written down officially.** The "Avoid surprise bills" page lists as common causes "Forgetting to add a limit to a database query with millions of results" and Cloud Functions combinations that cause "excessive fan-out workloads or even infinite loops," and recommends testing on the Local Emulator Suite first. The Realtime Database billing page says operations denied by security rules, and reads and writes from the console, are billed as well.
- **Where your data lives may not be where you can serve from.** Firestore offers Tokyo and Osaka, and Cloud Functions can run in asia-northeast1. App Hosting has six regions: us-central1, us-east4, us-east5, asia-east1 (Taiwan), asia-southeast1 (Singapore) and europe-west4. Japan is not among them. The CDN is global, but uncached content is served from the chosen region. With Firestore in Tokyo and App Hosting in Taiwan, every server render crosses a border.
- **Enterprise contracts are not offered as standard.** The FAQ says Blaze is "suitable for enterprises of all sizes" but also "we don't offer enterprise contracts, pricing, or support, nor do we offer dedicated infrastructure hosting." All apps, including those on Spark, get email support from Firebase staff during US Pacific business hours.

Overall, Firebase has spent years polishing the experience of starting small. At the moment scale changes, the UX is handed over to Google Cloud's screens and vocabulary. Budgets are set in Cloud Billing, caps are lifted through a link to the Cloud console, and unit prices live on Google Cloud's pricing pages. This step looks largest when the person starting and the person paying are the same solo developer.

## Tech stack

::techstack

There are three databases because Firebase's history remains in its product list. The official comparison page tells new customers to start with Firestore and calls Realtime Database "the classic Firebase JSON database." No end date is given for it.

:::fact
The three databases side by side, from the official docs (accessed 2026-11-02):

| Item | Cloud Firestore | Realtime Database | SQL Connect |
| --- | --- | --- | --- |
| Data model | Collections and documents | One large JSON tree | PostgreSQL tables (defined in GraphQL) |
| Queries | Compound sorting and filtering; returns whole documents | Sort or filter, not both; returns the whole subtree | Multi-table queries, multi-row updates |
| Billing axis | Reads, writes and deletes, storage, egress | Storage and downloads | Operations and the Cloud SQL instance |
| Scaling | Automatic; no limit on concurrent connections or overall writes; write-rate limits on individual documents or indexes | Around 200,000 concurrent connections and 1,000 writes/second, then sharding | Not listed on the comparison page (Cloud SQL underneath) |
| Availability | Typical 99.999%; regional or multi-region | Typical 99.95%; zonal within a region | Not listed on the comparison page (Cloud SQL underneath) |
| Suited to | The default for new work | Frequent state sync; typical responses within 10 ms | Relational data, vector search |

Offline support covers Apple, Android and web on Firestore, and Apple and Android on Realtime Database. Realtime Database supports presence natively; Firestore does not, and the docs describe syncing the two through Cloud Functions.
:::

:::fact
Firestore has two editions. In Standard, indexes are required and single-field indexes are created automatically. In Enterprise, indexes are optional, and it adds Pipeline operations and a MongoDB-compatible mode. Per the release notes, Enterprise text search and geospatial search became generally available on October 19, 2026, and DML operations on October 22. The billing unit differs too: Enterprise counts Read Units in 4 KiB tranches and Write Units in 1 KiB tranches, at $0.05 per million Read Units and $0.26 per million Write Units in the default Iowa display. Where Standard counts each document as one operation regardless of size, Enterprise counts data processed.
:::

:::fact
SQL Connect was renamed from Data Connect on April 22, 2026. The release notes say all features remain and "the APIs haven't changed." Per the docs, you declare a data model and the queries you need in GraphQL, and it generates a PostgreSQL schema, secure endpoints and type-safe SDKs for Kotlin, iOS, Flutter and web. The official description is a "self-driving app server" made to order. The pricing page notes that "The price is per operation and is not related to the amount of data read from the database; there is no 'per row read' fee." The default Cloud SQL configuration is equivalent to db-f1-micro (1 vCPU, 628.74 MB of memory, 10 GB of storage).
:::

:::fact
App Hosting is for server-rendered web apps, with built-in support for Next.js and Angular. A push to the live branch triggers an event through Google Cloud Developer Connect; Cloud Build creates a container, Artifact Registry stores it, and a new Cloud Run revision takes over. The request timeout is 5 minutes against 1 minute on classic Hosting. The official comparison says App Hosting "is not a drop-in replacement for Firebase Hosting" and suggests classic Hosting for static sites and single-page apps. Classic Hosting works on Spark; App Hosting requires Blaze. The terms differ as well: Firebase terms for Hosting, Google Cloud terms for App Hosting.
:::

:::guess
Three databases and two hosting products look like the result of Firebase adding a different answer to the same question in each generation. Realtime Database answered sync speed, Firestore answered querying and scale, and SQL Connect answered relational data, with each later generation sitting closer to an existing Google Cloud product. The change from the abstract "Data Connect" to "SQL Connect" can be read as a document database company naming demand for SQL head-on. It may also reflect that SQL has an advantage when AI agents write the code, given how much training material exists for it, but the official notes do not give a reason for the rename.
:::

On AI, the line between what carries the Firebase name and what does not moved a great deal in 2026. What Firebase holds today is AI that helps developers and an entry point for AI inside apps.

:::fact
The current state of AI products, from the official docs (accessed 2026-11-02):

| Name | What it is | Status |
| --- | --- | --- |
| Firebase AI Logic | Client SDKs and a proxy for calling Gemini from mobile and web. Renamed from "Vertex AI in Firebase" on May 20, 2025 | No charge for AI Logic itself; Gemini API costs are separate. The Gemini Developer API's free tier works on Spark |
| Gemini in Firebase | Development help in the console and elsewhere, including AI assistance in Crashlytics, Messaging and SQL Connect | No-cost on the pricing page |
| Firebase MCP server | A local server that lets AI coding tools operate a project | Works with Antigravity, Claude Code, Cursor and others |
| Firebase agent skills | Instruction packages for AI assistants | Works with Antigravity, Claude Code, Codex, Cursor |
| Google AI Studio integration | The AI Studio agent sets up Firestore and Authentication | Listed in the docs |
| Genkit | Google's open-source AI framework (TypeScript, Go, Python, Dart) | The old docs URL redirects to genkit.dev. Repository genkit-ai/genkit, Apache-2.0, 6,563 stars |
| Firebase Studio | A browser-based development environment | New workspaces and signups stopped on June 22, 2026. Ends March 22, 2027 |

AI Logic announced that it would automatically enforce App Check from November 2, 2026. Requests without a valid App Check token are blocked, including those from released app versions (the console can temporarily delay this). The official explanation is that this protects the Gemini API when apps access it directly. The name of the target changed too: following the renaming of Vertex AI, it is now the "Agent Platform Gemini API." The SDKs' old `vertexAI` initialization syntax was deprecated in August 2026 and removed in October. Imagen models shut down on August 17, 2026 and were removed from the SDKs and docs.
:::

## Business model

Firebase's revenue is not disclosed separately. What we can say from the pages we checked is that the structure of the price list explains the business model. No-cost products draw developers in, and infrastructure usage connects to the Google Cloud bill.

:::fact
The official pricing page gives some unit prices itself, such as Cloud Functions and SQL Connect operations, but sends many rows, including Firestore, Authentication and Cloud Run, out with "Then Google Cloud pricing." Blaze charges go through a Cloud Billing account; older `*.appspot.com` buckets are processed as App Engine usage fees and newer `*.firebasestorage.app` buckets as Cloud Storage usage fees. Firestore has one-year and three-year committed use discounts, taking Tokyo reads from $0.038 to $0.0304 and $0.0228. From going past the no-cost usage to Cloud's discount programs, it is one staircase.
:::

How a bill grows depends on the product. Firestore's unit price looks small, but your code decides the count. Our own estimates give a sense of scale.

:::fact
These examples are this site's own calculations from Firestore Standard's Tokyo prices ($0.038 for reads and $0.115 for writes per 100,000) and no-cost quotas. Storage and egress are excluded.

| Scenario | Reads/day | Writes/day | Approx. cost for 30 days |
| --- | --- | --- | --- |
| 10,000 daily users at 200 reads and 20 writes each | 2 million | 200,000 | About $28 |
| Same users, with a listener design causing 2,000 reads each | 20 million | 200,000 | About $234 |
| A bug loop sustaining 1 million reads a minute | 1.44 billion | — | About $547 per day |

Normal use produces small numbers. What the official docs warn about is not the first row but the third.
:::

For a long time, Blaze had no standard feature to stop that third row. Budget alerts only sent email, and the official suggestion was to use budget notifications to disable billing programmatically.

:::fact
On September 14, 2026 the official blog announced Firebase spend caps in public preview. You set a monthly budget per service; warning emails go out at 50% and 80%, and at 100% new usage of that service pauses for the rest of the month. Lifting a cap lets the service run with no limit that month, and resuming can take up to an hour. You can also raise the limit mid-month and keep it for following months. Eligible services are Firebase AI Logic, App Hosting (Cloud Run), Cloud Functions (Cloud Run functions) and Extensions, set per project and per service; a cap cannot cover a whole billing account. The docs repeat that these are not "hard caps": usage reporting lags, enforcement can be delayed by several minutes, and overages in that window are billed as normal. Calculations use gross costs before credits and discounts.
:::

:::fact
Asked whether usage can be capped on Blaze, the FAQ says the four products above can be, and "For the other products that have a paid tier of usage, you cannot cap your usage when on the Blaze pricing plan. However, we are actively evaluating options for these products." So as of November 2, 2026, Firestore, Realtime Database, Cloud Storage and Hosting are outside spend caps and have alerts-only budgets. The official list also says "We're working to add to this list."
:::

:::pull
Spend caps arrived as a circuit breaker for runaway AI and functions. The database, where the bill grows with every read, is still outside the circuit.
:::

:::guess
Starting with functions and AI appears to reflect that pausing them has a fairly clear meaning. When a function or an AI call stops, often only one feature of an app fails. When a database stops, the whole app goes blind. There is likely a technical reason too: Cloud Run billing is easy to stop as a single service, while Firestore, read directly by client SDKs, presumably needs a separately designed place to stop. The announcement opens with an "AI-powered feature" and a "runaway bill," which suggests that generative AI API costs pushed the request up the list.
:::

The other movement of 2026 was tidying up around the edges. Lined up from the official release notes, the direction is clear.

:::fact
End-of-life notices, from the release notes and each product's FAQ (accessed 2026-11-02):

| Product | Announced | End date | Suggested path |
| --- | --- | --- | --- |
| Firebase Studio | March 19, 2026 | March 22, 2027 | Google AI Studio, Google Antigravity |
| Firebase ML | June 11, 2026 | June 15, 2027 | Cloud Storage for model delivery; AI Logic or Cloud Vision API for image analysis |
| Firebase Extensions | July 20, 2026 | March 31, 2027 | Function kits in Cloud Functions |
| Firebase Test Lab | September 30, 2026 | September 30, 2027 | Google Cloud's Developer Device Platform |
| Dynamic Links | Per the official FAQ | August 25, 2025 | App Links, Universal Links |

Installed extensions keep running after the end date, but they can no longer be updated, reconfigured or uninstalled from the console or CLI. The official FAQ says most extensions are built on the legacy Cloud Functions v1 SDK and may stop if those runtimes are decommissioned, and gives the reason as "upcoming changes and deprecations within our underlying Google Cloud infrastructure." The Studio migration guide states that core Firebase services are not affected. Firebase Studio was labeled Preview and Extensions and Firebase ML beta, none of them subject to an SLA or deprecation policy.
:::

:::guess
The last column suggests the direction is less "fewer Firebase products" than "hand them to another Google signboard." Test Lab goes to Google Cloud, Studio to AI Studio and Antigravity, Extensions to functions running on Cloud Run. What stays with Firebase is the layer any app needs, whichever AI tool built it: authentication, databases, delivery and measurement. That is the layer AI Studio's agent sets up and the Codex plugin operates through MCP and the CLI. This appears to be a decision to give up Firebase as the entrance to development and bet on Firebase as the backend.

It also remains a fact that people who started building in Studio are being asked to move to other tools. Firebase users will be re-estimating the cost of depending on beta and preview products. That cost appears neither in the no-cost usage nor on the price list.
:::

Firebase's strength was joining Google's infrastructure scale to a solo developer's convenience through one SDK and one console. The billing behind that desk was always Google Cloud's, and in 2026 the circuit breakers finally began to appear. What to read is less the size of the no-cost usage than how many reads your code makes for one screen, and whether that row sits inside spend caps. Even as the AI entrance moves to other signboards, Firebase remains the place the data sits. How far Google keeps this layer as a "front desk" should become visible in whether Firestore next joins the list of cappable services.
