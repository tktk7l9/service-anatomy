---
title: "Firebase vs. Supabase — A Backend You Pay for by the Count and One You Pay for by the Box. Billing Units, How to Stop a Bill, and Databases Compared from the Official Pages"
description: "A comparison of Firebase and Supabase based only on their official pages (accessed 2026-11-02). Firebase charges by reads and writes with no base fee. Supabase charges a $25 monthly Pro plan plus compute you size yourself. We line up no-cost plans, what each product's cap actually covers (Firebase spend caps and the Supabase Spend Cap), NoSQL against Postgres, Tokyo regions, self-hosting and announced product shutdowns, then sort out which kinds of app suit which."
lead: "When you want an app backend without running one yourself, Firebase and Supabase are usually the first two compared. The feature lists look alike: authentication, a database, file storage, functions, realtime. How the bill is built could hardly be more different. With Firebase you pay for how many times your code read. With Supabase you pay for the size of the box you rented. We re-read both sets of official pages on November 2, 2026 and put side by side how this difference affects no-cost usage, stopping a bill, how data is held, and the way out."
slugA: "firebase"
slugB: "supabase"
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
expires:
  - date: "2027-02-01"
    claim: "Check whether Firebase spend caps are still in public preview and whether Firestore, Realtime Database or Cloud Storage have joined the eligible services"
  - date: "2027-03-22"
    claim: "Check whether the Firebase Studio end date (March 22, 2027) has changed"
  - date: "2027-03-31"
    claim: "Check whether the Firebase Extensions end date (March 31, 2027) has changed"
  - date: "2027-06-15"
    claim: "Check whether the Firebase ML end date (June 15, 2027) has changed"
  - date: "2027-09-30"
    claim: "Check whether the Firebase Test Lab end date (September 30, 2027) has changed"
sources:
  - label: "Firebase: Pricing"
    url: "https://firebase.google.com/pricing"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Firebase pricing plans"
    url: "https://firebase.google.com/docs/projects/billing/firebase-pricing-plans"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Spend caps"
    url: "https://firebase.google.com/docs/projects/billing/spend-caps"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Avoid surprise bills"
    url: "https://firebase.google.com/docs/projects/billing/avoid-surprise-bills"
    accessedAt: "2026-11-02"
  - label: "Firebase: FAQ (caps on Blaze, support)"
    url: "https://firebase.google.com/support/faq"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Understand Cloud Firestore billing"
    url: "https://firebase.google.com/docs/firestore/pricing"
    accessedAt: "2026-11-02"
  - label: "Google Cloud: Firestore pricing (Tokyo prices)"
    url: "https://cloud.google.com/firestore/pricing"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Choose a database"
    url: "https://firebase.google.com/docs/firestore/rtdb-vs-firestore"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Firebase SQL Connect"
    url: "https://firebase.google.com/docs/sql-connect"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: SQL Connect pricing"
    url: "https://firebase.google.com/docs/sql-connect/pricing"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Firebase Security Rules"
    url: "https://firebase.google.com/docs/rules"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: About App Hosting (regions)"
    url: "https://firebase.google.com/docs/app-hosting/about-app-hosting"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Cloud Functions locations"
    url: "https://firebase.google.com/docs/functions/locations"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Cloud Firestore locations"
    url: "https://firebase.google.com/docs/firestore/locations"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: FAQ on Cloud Storage changes"
    url: "https://firebase.google.com/docs/storage/faqs-storage-changes-announced-sept-2024"
    accessedAt: "2026-11-02"
  - label: "Firebase docs: Firebase AI Logic"
    url: "https://firebase.google.com/docs/ai-logic"
    accessedAt: "2026-11-02"
  - label: "Firebase: Release Notes (shutdown notices)"
    url: "https://firebase.google.com/support/releases"
    accessedAt: "2026-11-02"
  - label: "Supabase: Pricing & Fees"
    url: "https://supabase.com/pricing"
    accessedAt: "2026-11-02"
  - label: "Supabase docs: Control your costs (what the Spend Cap covers)"
    url: "https://supabase.com/docs/guides/platform/cost-control"
    accessedAt: "2026-11-02"
  - label: "Supabase docs: Manage Compute usage"
    url: "https://supabase.com/docs/guides/platform/manage-your-usage/compute"
    accessedAt: "2026-11-02"
  - label: "Supabase docs: Architecture"
    url: "https://supabase.com/docs/guides/getting-started/architecture"
    accessedAt: "2026-11-02"
  - label: "Supabase docs: Row Level Security"
    url: "https://supabase.com/docs/guides/database/postgres/row-level-security"
    accessedAt: "2026-11-02"
  - label: "Supabase docs: Realtime"
    url: "https://supabase.com/docs/guides/realtime"
    accessedAt: "2026-11-02"
  - label: "Supabase docs: Available regions"
    url: "https://supabase.com/docs/guides/platform/regions"
    accessedAt: "2026-11-02"
  - label: "Supabase docs: Self-Hosting"
    url: "https://supabase.com/docs/guides/self-hosting"
    accessedAt: "2026-11-02"
  - label: "Supabase: Supabase vs Firebase (Supabase's own comparison page, 2025-08-20)"
    url: "https://supabase.com/alternatives/supabase-vs-firebase"
    accessedAt: "2026-11-02"
  - label: "Supabase blog: Series F"
    url: "https://supabase.com/blog/supabase-series-f"
    accessedAt: "2026-11-02"
  - label: "GitHub: supabase/supabase"
    url: "https://github.com/supabase/supabase"
    accessedAt: "2026-11-02"
---

[Firebase](/en/articles/firebase) and [Supabase](/en/articles/supabase) are both listed as ways to get an app backend without running servers. Supabase keeps an official comparison page of its own, and its architecture document says it "is not a 1-to-1 mapping of Firebase." The feature names are alike, but read the rows of the price lists and the billing units turn out to be different things. This article reads both companies' official pages on November 2, 2026 and lines up the numbers and conditions as written. We have not operated either service for this piece; we are comparing public pricing pages and documentation. Prices change, so check the official pages before you choose. Amounts are in US dollars as shown, and tax treatment could not be read from the amounts on either price list. Supabase's comparison page is written by a competitor, so we rely on it only where Supabase describes its own product.

## Billing units side by side

:::fact
Key items from Firebase's pricing pages (Firestore Standard edition) and Supabase's pricing page (both accessed 2026-11-02):

| Item | Firebase | Supabase |
| --- | --- | --- |
| Paid plan shape | Blaze: pay as you go, no base fee | Pro from $25/month, Team from $599/month, Enterprise custom |
| Database billing unit | Reads, writes and deletes, storage, egress | Instance size (compute), disk, egress |
| Main database prices | Firestore in Tokyo: $0.038 reads, $0.115 writes, $0.013 deletes per 100,000 | Monthly: Micro $10, Small $15, Medium $60, Large $110. Pro disk beyond 8 GB is $0.125/GB |
| API requests | Firestore bills them as reads and writes | Unlimited (Free) |
| Authentication | No-cost up to 50K MAUs, then Google Cloud pricing | Free 50K MAUs; Pro 100K, then $0.00325 per MAU |
| File storage | Requires Blaze. New-format buckets no-cost to 5 GB-months, then Cloud Storage pricing | Free 1 GB; Pro 100 GB, then $0.0213/GB |
| Functions | Requires Blaze. No-cost to 2M/month, then $0.40/million plus CPU and memory | Free 500K; Pro 2M, then $2/million |
| Realtime | Firestore listener updates are billed as reads | Free 200 peak connections and 2M messages; Pro 500 and 5M, then $10 per 1,000 and $2.50 per million |
| Egress | Firestore no-cost to 10 GiB/month, then Google Cloud pricing | Free 5 GB; Pro 250 GB, then $0.09/GB. Cached egress separate, then $0.03/GB |

Supabase's paid plans include $10 a month in compute credits, enough for one Micro instance. Additional projects start at $10 a month, and each one adds compute. Firebase applies its plan to the entire project and adds up usage from every app in it.
:::

:::guess
The shape of the price lists suggests how bills grow differently. A Firebase bill tracks what the app does. Unused, it sits near $0; popular, it rises linearly; and a design change can move it by an order of magnitude at the same user count. A Supabase bill climbs in steps. As long as you fit in the box, any number of queries costs the same, and when the box runs out you step up. In [our Firebase article](/en/articles/firebase), an app with 10,000 daily users at 200 reads and 20 writes each came to about $28 a month in Firestore costs in Tokyo. At that scale the two companies' amounts appear not to differ much. The gap likely shows when those same users read ten times as much (about $234 a month on Firestore) and in the period with almost no users (Firebase $0, Supabase Pro $25 a month).
:::

## Where no-cost usage ends

:::fact
The two no-cost plans end differently.

| Item | Firebase Spark | Supabase Free |
| --- | --- | --- |
| Database | Firestore 1 GiB (50K reads/day, 20K writes/day) | Postgres 500 MB (shared CPU, 500 MB RAM) |
| Not available | Cloud Storage, Cloud Functions, App Hosting | Image transformations |
| When idle | No pausing mentioned on the pages we checked | Paused after 1 week of inactivity |
| Project count | No limit listed on the pricing pages we checked | 2 active projects |
| When you go over | Per the FAQ, the app is shut off for the rest of the calendar month (Firestore's quota itself resets daily) | See the Spend Cap section below |

On Firebase, Cloud Storage has required Blaze since February 3, 2026, so an app that handles file uploads cannot stay on Spark. Supabase Free includes storage and functions.
:::

:::guess
For the same personal prototype, the constraints appear to run in opposite directions. Firebase is strong on neglect and weak on features: without photo uploads or functions, you can leave an unused app sitting there. Supabase is strong on features and weak on neglect: one free project covers auth, files and functions, but it stops if nobody touches it for a week. Which suits you likely depends on whether you want a hobby app to sit for a long time or want to build one idea end to end in a short period.
:::

## How to stop a bill

Both products have something called a cap, but what each covers is close to the opposite.

:::fact
Firebase spend caps, announced on September 14, 2026, are in public preview. You set a monthly budget per service, and at 100% new usage pauses for the rest of the month. Eligible services are Firebase AI Logic, App Hosting, Cloud Functions and Extensions. The FAQ says "For the other products that have a paid tier of usage, you cannot cap your usage when on the Blaze pricing plan," so Firestore, Realtime Database, Cloud Storage and others get alerts only. Firebase states these are not "hard caps," and overages during reporting delays are billed as normal.

Supabase's pricing page says the Pro plan has a Spend Cap enabled by default. Per its docs, while on, usage of an item beyond the plan's quota is disallowed until the next billing cycle and you are not charged for over-usage, though services are restricted under the Fair Use Policy if you consistently exceed the quota. It covers disk size, egress, function invocations, logs, MAUs, Realtime messages and peak connections, image transformations and storage size. It does not cover compute, branching and read replica compute, custom domains, additional IOPS and throughput, IPv4, log drains, phone MFA or point-in-time recovery; the stated reason is that these are "predictable and explicitly opted into by the user." The Spend Cap applies to the organization, and the docs say it does not allow budgets for specific items or notifications when certain costs are reached.
:::

:::fact
Side by side:

| Item | Firebase spend caps | Supabase Spend Cap |
| --- | --- | --- |
| Default | You set it up | On for Pro |
| Scope | One project and one service, as an amount | Whole organization, on or off |
| Database usage charges | Not covered | Disk is covered; compute is the fixed amount you chose |
| Functions and AI | Covered | Functions covered. AI API costs are outside Supabase's price list |
| At the limit | Pauses that service to month end; can be lifted manually | Stops that item until the next cycle; switch off to continue on usage pricing |
| Notifications | Email at 50%, 80%, 100% | Says it cannot notify when certain costs are reached |
:::

:::pull
Firebase has begun adding circuit breakers to a product that does not stop. Supabase put a switch to turn off on a product that does.
:::

:::guess
Supabase, stopping by default, appears strong against billing accidents and weak against surges. If a broadcast or a sale pushes you past a quota, features stop. To avoid that you turn off the Spend Cap and accept usage billing from then on. Firebase is the reverse: Blaze databases do not stop, so surges are fine, but a bug loop that keeps reading is not cut off. What a solo developer on Firebase can do is likely something assembled by hand: alerts-only budgets plus disciplined `limit` use, testing on the Emulator Suite, and disabling billing from budget notifications.
:::

## Database design

:::fact
Supabase's architecture document says "we use Postgres rather than a NoSQL store. This choice was deliberate." Each project has a dedicated Postgres database, with PostgREST and pg_graphql providing REST and GraphQL APIs. Firebase centers on Cloud Firestore, which holds data in collections and documents and returns whole documents from queries. The official comparison lists offline support for Apple, Android and web. Realtime Database is the older JSON-tree type.

Firebase has a Postgres option as well. SQL Connect (renamed from Data Connect in April 2026) defines schema and queries in GraphQL on top of Cloud SQL for PostgreSQL and generates type-safe SDKs. It has two costs: operations (no-cost to 250K a month on Blaze, then $0.90 per million) and the Cloud SQL instance (from $9.37 a month, with a 3-month no-cost trial). There is no per-row read fee.

On realtime, Supabase has Broadcast, Presence and Postgres Changes. Firestore has listeners on query results as a standard feature, with updates billed as reads. Presence on Firebase belongs to Realtime Database and is not native to Firestore. On offline use, Supabase's own comparison page says offline access "requires your own caching strategy."
:::

:::guess
The dividing line here appears to come before the shape of the data: it is when your questions get decided. Firestore is strong in apps where each screen reads known documents, and mobile offline sync comes with it. When a cross-cutting question arrives later, such as last month's sales by region, you need denormalization or an export to BigQuery. Postgres is strong in apps whose questions keep growing, where SQL often settles it, at the price of arranging offline sync yourself. If you leave things to AI coding tools, both have MCP servers and neither is plainly ahead, though Supabase reports that more than 60% of new databases are launched by some sort of AI tool.
:::

## How permissions are written

:::fact
Firebase's access control is Security Rules, written in a dedicated language for Firestore, Realtime Database and Cloud Storage. Per the official comparison, Firestore rules generally do not cascade and Realtime Database rules do. Server SDK access is secured by IAM. Using `get()` or `exists()` in Firestore rules bills a read for each document read.

Supabase's control is Postgres Row Level Security, written as SQL policies. Its docs warn: "A table in an exposed schema without RLS is readable and writable by any role with a grant on it. Enable RLS on every table in an exposed schema."
:::

:::guess
Both let clients reach the database directly, which makes permissions central to the design. Either can break when a rule is forgotten, so this seems a poor basis for choosing. The difference is in how you check: RLS can reuse SQL tests and existing Postgres knowledge, and Security Rules are verified with the Emulator Suite. Whether the team has SQL experience is likely the deciding input.
:::

## Delivery, Tokyo, and self-hosting

:::fact
Items that depend on distance from Japan and on where things run:

| Item | Firebase | Supabase |
| --- | --- | --- |
| Database in Tokyo | Firestore in asia-northeast1 (Tokyo); Osaka also available | ap-northeast-1 (Tokyo) available |
| Functions in Tokyo | Cloud Functions can run in asia-northeast1 | Not checked for Edge Functions |
| SSR web app delivery | App Hosting. Regions: three in the US, Taiwan, Singapore, the Netherlands; none in Japan | No SSR app delivery item on the price list we checked |
| Infrastructure | Google Cloud | AWS |
| Self-hosting | Supabase's comparison page says "Not supported" | Possible with Docker; branching, managed backups and PITR, among others, are unavailable |
| Source availability | Not checked | Official docs say "everything we use is open source." Main repository Apache-2.0, 114,420 stars (as of 2026-11-02) |
:::

:::fact
Firebase includes products absent from Supabase's price list. Crashlytics, Cloud Messaging, A/B Testing, Remote Config and App Distribution serve mobile app operations, most at no cost. In 2026 Firebase also announced the end of Firebase Studio (March 22, 2027), Extensions (March 31, 2027), Firebase ML (June 15, 2027) and Test Lab (September 30, 2027). It says core services such as Firestore, Authentication and App Hosting are not affected. Supabase announced in June 2026 a $500 million Series F at a $10 billion pre-money valuation and nearly 10 million developers.
:::

:::guess
The way out appears to differ too. Supabase's data is Postgres, so moving it to another Postgres with something like `pg_dump` is a realistic prospect, though auth, RLS and Realtime settings are separate work. Moving Firestore data involves rewriting the data model and is likely heavier. This is not a claim that Firebase traps you; the flip side is that if you stay within Google Cloud, the need to migrate shrinks. What to estimate on Firebase is more likely the chance of products outside the core moving to another signboard.
:::

## Which app suits which

From here on is our own reading of the price lists and conditions above. It does not rank the two; it shows which rows matter for what you are building.

:::guess
- Native iOS and Android apps that must work offline appear to suit Firebase. Firestore's SDK has offline sync built in, and Crashlytics, push notifications and A/B Testing sit in one console at no cost. On Supabase, you would arrange offline use and those operational tools separately.
- Web apps whose questions grow later, such as admin screens, business tools and SaaS, appear to suit Supabase. You can write SQL, read counts do not feed the bill directly, and a Tokyo region is available.
- For a personal prototype with no users yet and a target of zero fixed cost, both start free. If you need file uploads or functions, Supabase Free covers more; if you want to leave it idle for long periods, Firebase Spark is likely easier.
- If you want a predictable monthly number, Supabase Pro's stepped pricing likely fits. Conversely, an app with long quiet periods that may take off suits Blaze with no base fee, provided you accept that Blaze databases cannot be capped.
- Apps whose traffic spikes briefly from TV or advertising fit Firestore's description of automatic scaling. On Supabase you would likely raise compute beforehand or turn off the Spend Cap.
- If you want Next.js SSR for users in Japan, confirm that App Hosting has no Japanese region. With data in Firestore's Tokyo location, delivering from a different service is one option. Supabase's price list has no SSR app delivery item either, so delivery there would likely pair with another service.
- A company already on Google Cloud, or a team that wants to call Gemini directly from a mobile app, appears suited to Firebase on the same billing and IAM. AI Logic's client SDKs and App Check exist for that purpose.
- If rules or policy require running your own infrastructure, Supabase remains a candidate because it can be self-hosted with Docker. Check which features are unavailable there.
:::

## Why the bills are shaped differently

:::guess
The difference can apparently be explained by what each company sells. Firebase is a front desk that makes Google Cloud's parts easy to use, and as [our article](/en/articles/firebase) showed, the price list continues into Google Cloud's usage pricing. Since "pay for what you use" is the standard way to sell cloud, Firebase's bill takes that shape. No base fee, no stopping and no sense of a scale limit are likely inherited from that foundation.

Supabase, as [our article](/en/articles/supabase) describes, bundles existing open source around Postgres and runs a dedicated Postgres per project. A running box costs money however many queries it serves, so pricing becomes box size plus subscription. The official statement that "everything we use is open source" presumably grows from the same root: making Postgres's standardness the value itself.

The two are moving toward each other. Firebase took in Postgres with SQL Connect, added MongoDB compatibility and optional indexes with Firestore Enterprise, and began building places to stop a bill with spend caps. Supabase has become a product where many new databases are created through AI tools. How each bill is built still does not change, apparently because neither foundation changes.
:::

Firebase and Supabase lay out the same feature list on different foundations. With Firebase you pay by the count and grow on Google's infrastructure with little stopping you. With Supabase you pay by the box and stand on Postgres, a standard you can carry. What to look at is not the number of ticks in a feature table but whether your app's traffic is easier to read as counts or as boxes. A mobile app that works offline, or a web app whose questions keep growing? Do you fear a billing accident, or a stoppage? Once those are answered, which rows of the two price lists to read follows naturally.
