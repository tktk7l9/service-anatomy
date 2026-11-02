---
service: "Clerk"
title: "Clerk Explained: Billing Only Users Who Come Back on Day Two, 60-Second Session Tokens, and One US Cloud SQL Database — How Clerk Sells Authentication as Components"
description: "Clerk sells sign-in screens and user management as React and framework components. It bills on Monthly Retained Users (MRU), counting only people who return at least a day after signing up, and its February 2026 pricing change raised the free tier to 50,000 MRUs per app. Under the hood, 60-second session JWTs are refreshed every 50 seconds and data sits in Google Cloud SQL for PostgreSQL in the US. We dissect Clerk's pricing, who paid more after the 2026 change, its session architecture, the 2025-2026 outages and postmortems, and its new tools for AI agents, from the pricing page, docs, official blog, postmortems and our own observation."
lead: "Clerk's pricing page uses a term you will not find at other auth providers: the Monthly Retained User, or MRU. People who sign up once and never come back are not billed, however many there are. Clerk counts only those who return on day two or later. That one definition says a lot about what Clerk sells. It is not charging for logins; it is selling the components that manage the users who stick around. Those components sit in your app as React components, while behind them a token that expires every 60 seconds is refreshed without pause. This article dissects what runs inside the components and who pays for what."
category: dev-tool
tags: [authentication, user-management, nextjs, react, saas, b2b, ai-agent]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
serviceUrl: "https://clerk.com/"
# Affiliate link placeholder: no public affiliate program for Clerk was found (checked
# 2026-11-02 on clerk.com/pricing, clerk.com/llms.txt and the legal index; clerk.com/affiliates
# returns 404). Leave this block commented out unless the owner finds a program.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<clerk-referral-link>"
#   program: "Clerk"
vendor: "Clerk, Inc."
origin: "US"
heroTheme: "clerk"
scores: { product: 4.5, ux: 4.5, tech: 4.0, business: 4.0 }
expires:
  - date: "2026-12-31"
    claim: "Check that billing for Directory Sync connections began on January 1, 2027 as announced (from $75/mo per additional connection), then rewrite for after the start"
  - date: "2027-02-01"
    claim: "Check whether Clerk for Agent Auth is still in private beta and whether its availability or pricing has been published"
techStack:
  - layer: "Auth APIs (per application)"
    name: "Frontend API (FAPI) + Backend API (BAPI)"
    confidence: confirmed
    evidence: "The official guide \"How Clerk works\" says that when you create an application, Clerk provisions a dedicated Frontend API instance for it, hosted at https://<slug>.clerk.accounts.dev in development. The Publishable Key is the FAPI URL encoded in base64. Administrative operations that affect many users, such as listing or banning users, go through a separate Backend API called with the Secret Key"
    evidenceUrl: "https://clerk.com/docs/guides/how-clerk-works/overview"
  - layer: "Session model"
    name: "Hybrid sessions (60-second session JWT + __client cookie)"
    confidence: confirmed
    evidence: "The same guide says that on sign-in Clerk records a session in its database, sets a long-lived client token (__client, HttpOnly) on the FAPI domain and a session token that expires after 60 seconds (__session) on the app domain, and that the SDK refreshes it every 50 seconds. Server-rendered apps refresh it through a redirect Clerk calls the handshake"
    evidenceUrl: "https://clerk.com/docs/guides/how-clerk-works/overview"
  - layer: "Database"
    name: "Google Cloud SQL for PostgreSQL (Enterprise Plus, HA)"
    confidence: confirmed
    evidence: "The postmortem for the March 10, 2026 outage says Clerk chose Google Cloud SQL in 2021 and uses the Enterprise Plus offering with high availability. The outage was triggered by a failed live migration of the Cloud SQL virtual machine"
    evidenceUrl: "https://clerk.com/blog/2026-03-10-service-outage-postmortem"
  - layer: "Application runtime"
    name: "Google Cloud Run"
    confidence: confirmed
    evidence: "The postmortem for the September 14-18, 2025 database incident says Clerk runs on many Cloud Run containers and that each container's connection pooler recycled its connections every 15 minutes"
    evidenceUrl: "https://clerk.com/blog/2025-09-18-database-incident-postmortem"
  - layer: "Edge and bot protection"
    name: "Cloudflare (Turnstile)"
    confidence: confirmed
    evidence: "Clerk's security overview names Google Cloud and Cloudflare as its infrastructure providers and says Cloudflare Turnstile bot protection is built in. In our own observation (2026-11-02), api.clerk.com returned server: cloudflare and via: 1.1 google"
    evidenceUrl: "https://clerk.com/security"
  - layer: "SDKs"
    name: "clerk/javascript monorepo (@clerk/nextjs, MIT)"
    confidence: confirmed
    evidence: "The GitHub repository clerk/javascript is MIT-licensed (1,775 stars as of 2026-11-02). The latest @clerk/nextjs on npm was 7.9.23 the same day. Core 3, the new generation of Clerk's main SDKs, shipped on March 3, 2026 and requires Node.js 20.9.0 or later"
    evidenceUrl: "https://github.com/clerk/javascript"
  - layer: "Subscription billing"
    name: "Clerk Billing (Stripe)"
    confidence: confirmed
    evidence: "The official docs say Clerk Billing uses only Stripe for payment processing, but is a separate product from Stripe Billing: plans and subscriptions created in Clerk are not synced to Stripe"
    evidenceUrl: "https://clerk.com/docs/guides/billing/overview"
  - layer: "Entry points for AI agents"
    name: "Clerk MCP server + Clerk CLI + agent skills"
    confidence: confirmed
    evidence: "Clerk's official llms.txt lists an MCP server (mcp.clerk.com), a CLI installed from npm and skills for agents, and publishes a procedure (auth.md) for creating a development application without an account"
    evidenceUrl: "https://clerk.com/llms.txt"
  - layer: "Public website"
    name: "Vercel (clerk.com)"
    confidence: likely
    evidence: "In our own observation (2026-11-02), clerk.com returned server: Vercel and x-vercel-cache: HIT, and dashboard.clerk.com also returned server: Vercel. We did not find a statement from Clerk"
sources:
  - label: "Clerk: Pricing (plans, usage rates, add-ons, FAQ)"
    url: "https://clerk.com/pricing"
    accessedAt: "2026-11-02"
  - label: "Clerk Changelog: New plans, more value (pricing change, 2026-02-05)"
    url: "https://clerk.com/changelog/2026-02-05-new-plans-more-value"
    accessedAt: "2026-11-02"
  - label: "Clerk Docs: How Clerk works"
    url: "https://clerk.com/docs/guides/how-clerk-works/overview"
    accessedAt: "2026-11-02"
  - label: "Clerk Docs: Rate limits"
    url: "https://clerk.com/docs/guides/how-clerk-works/system-limits"
    accessedAt: "2026-11-02"
  - label: "Clerk Docs: Migrating (into and away from Clerk)"
    url: "https://clerk.com/docs/guides/development/migrating/overview"
    accessedAt: "2026-11-02"
  - label: "Clerk: Security and Compliance at a Glance"
    url: "https://clerk.com/security"
    accessedAt: "2026-11-02"
  - label: "Clerk: Standard Terms and Conditions (updated 2026-10-01)"
    url: "https://clerk.com/legal/standard-terms"
    accessedAt: "2026-11-02"
  - label: "Clerk Docs: Clerk Billing"
    url: "https://clerk.com/docs/guides/billing/overview"
    accessedAt: "2026-11-02"
  - label: "Clerk Blog: Clerk raises $4 million (2021-07-01)"
    url: "https://clerk.com/blog/clerk-raises-for-next-gen-auth"
    accessedAt: "2026-11-02"
  - label: "Clerk Blog: Clerk raises $6.2m led by Andreessen Horowitz (2022-11-30)"
    url: "https://clerk.com/blog/a16z-seed"
    accessedAt: "2026-11-02"
  - label: "Clerk Blog: Clerk raises $15m Series A led by Madrona (2023-03-22)"
    url: "https://clerk.com/blog/series-a"
    accessedAt: "2026-11-02"
  - label: "Clerk Blog: Clerk raises $30M Series B from CRV and Stripe (2024-01-18)"
    url: "https://clerk.com/blog/series-b"
    accessedAt: "2026-11-02"
  - label: "Clerk Blog: Clerk raises $50m Series C (2025-10-15)"
    url: "https://clerk.com/blog/series-c"
    accessedAt: "2026-11-02"
  - label: "Clerk Blog: Ranked #4 fastest-growing vendor on Ramp's December 2025 list (2025-12-04)"
    url: "https://clerk.com/blog/clerk-ranked-4-fastest-growing-software-vendor-by-ramp"
    accessedAt: "2026-11-02"
  - label: "Clerk Blog: Clerk for the AI era (2026-03-03)"
    url: "https://clerk.com/blog/2026-03-03-clerk-for-the-ai-era"
    accessedAt: "2026-11-02"
  - label: "Clerk Changelog: Core 3 (2026-03-03)"
    url: "https://clerk.com/changelog/2026-03-03-core-3"
    accessedAt: "2026-11-02"
  - label: "Clerk: llms.txt (index of agent entry points)"
    url: "https://clerk.com/llms.txt"
    accessedAt: "2026-11-02"
  - label: "Clerk: auth.md (creating a development application without an account)"
    url: "https://clerk.com/auth.md"
    accessedAt: "2026-11-02"
  - label: "Clerk Changelog: Clerk MCP server (2026-10-15)"
    url: "https://clerk.com/changelog/2026-10-15-revamped-clerk-mcp-server"
    accessedAt: "2026-11-02"
  - label: "Clerk Changelog: Introducing Clerk Protect (2026-10-23)"
    url: "https://clerk.com/changelog/2026-10-23-introducing-clerk-protect"
    accessedAt: "2026-11-02"
  - label: "Clerk Changelog: Clerk for Agent Auth (2026-10-30)"
    url: "https://clerk.com/changelog/2026-10-30-clerk-for-agent-auth"
    accessedAt: "2026-11-02"
  - label: "Clerk Blog: Postmortem: June 26, 2025 service outage"
    url: "https://clerk.com/blog/postmortem-jun-26-2025-service-outage"
    accessedAt: "2026-11-02"
  - label: "Clerk Blog: Postmortem: August 28, 2025 - elevated API latency and errors"
    url: "https://clerk.com/blog/postmortem-aug-28-2025-elevated-latency-errors"
    accessedAt: "2026-11-02"
  - label: "Clerk Blog: Postmortem: Database Incident (September 14-18, 2025)"
    url: "https://clerk.com/blog/2025-09-18-database-incident-postmortem"
    accessedAt: "2026-11-02"
  - label: "Clerk Blog: Postmortem: DNS Provider Outage (February 10, 2026)"
    url: "https://clerk.com/blog/2026-02-10-dns-outage-postmortem"
    accessedAt: "2026-11-02"
  - label: "Clerk Blog: Postmortem: Clerk System Outage (February 19, 2026)"
    url: "https://clerk.com/blog/2026-02-19-system-outage-postmortem"
    accessedAt: "2026-11-02"
  - label: "Clerk Blog: Postmortem: Clerk System Outage (March 10, 2026)"
    url: "https://clerk.com/blog/2026-03-10-service-outage-postmortem"
    accessedAt: "2026-11-02"
  - label: "Clerk Changelog: Improved resilience with automatic regional failover (2025-08-04)"
    url: "https://clerk.com/changelog/2025-08-04-regional-failover"
    accessedAt: "2026-11-02"
  - label: "Clerk Blog: Middleware-based route protection bypass (2026-04-15)"
    url: "https://clerk.com/blog/middleware-based-route-protection-bypass"
    accessedAt: "2026-11-02"
  - label: "GitHub Security Advisory: GHSA-vqx2-fgx2-5wq9 (CVE-2026-41248)"
    url: "https://github.com/clerk/javascript/security/advisories/GHSA-vqx2-fgx2-5wq9"
    accessedAt: "2026-11-02"
  - label: "GitHub: clerk/javascript"
    url: "https://github.com/clerk/javascript"
    accessedAt: "2026-11-02"
---

Clerk is a service for dropping sign-up, sign-in and profile screens, plus the user management behind them, into web and mobile apps. Where [Supabase](/en/articles/supabase) and [Firebase](/en/articles/firebase) offer authentication as an accessory to a database, Clerk makes authentication and user management the main product and sells it starting from the UI components. [Auth0](/en/articles/auth0), the provider it is most often compared with, builds by default around a hosted login page (Universal Login) on its own authorization server that your app redirects to; Clerk's screens live inside your app. This article looks at how that works and how Clerk makes money, based on the pricing page, documentation, official blog and outage postmortems we read on November 2, 2026. We have not run Clerk in production ourselves; we are cross-reading the primary sources Clerk publishes.

## Service overview

Clerk started from a claim that "the Component is the new API." A November 30, 2022 post on its blog said that over 95% of customers use **all** of its `<SignUp/>`, `<SignIn/>` and `<UserProfile/>` components, and argued that components combine a backend API with a finished frontend and so deliver more value than APIs alone. The 2021 seed announcement, written by co-founders and brothers Colin and Braden Sidoti, listed mistakes developers commonly build in, such as accidentally creating a second account when someone who registered by email later signs in with Google, or reducing multi-factor authentication to a single factor during a password reset, and pitched finished screens as the way to remove them.

:::fact
Funding and scale as stated on Clerk's blog (all accessed 2026-11-02):

| Announced | Round | Amount | Lead investors | Scale at announcement |
| --- | --- | --- | --- | --- |
| July 1, 2021 | Seed | $4M | S28 Capital | Team grew from 2 to 15 in eight months |
| November 30, 2022 | Seed (extension) | $6.2M | Andreessen Horowitz | Over 95% of customers use all three components |
| March 22, 2023 | Series A | $15M | Madrona | Over a million managed users |
| January 18, 2024 | Series B | $30M | CRV, with Stripe | Over 16 million end users; more than one new sign-up per second |
| October 15, 2025 | Series C | $50M | Menlo and Anthropic's Anthology Fund | Over 200 million users across over 15,000 applications |

The five announced amounts add up to $105.2M by our count. Valuation and revenue are not stated on the official pages we checked. The Series A post says Madrona's Karan Mehandru, who had served on Auth0's board, joined Clerk's board, and that Vercel CEO Guillermo Rauch and former Auth0 CRO Dave Wilner were among the new investors. A December 4, 2025 post says Clerk ranked fourth by customer-count growth on Ramp's list of top SaaS vendors for December 2025. An October 23, 2026 changelog entry says Clerk "secures more than 100,000 active applications." That appears to be counted differently from the Series C's "over 15,000 applications," so the two cannot be compared as a growth rate.
:::

The product has spread outward from authentication. The Series B post said the money would expand Clerk from authentication (who a user is) into authorization (what they may do), and announced a partnership with Stripe to gate features by the plan a user bought. That became today's Clerk Billing. The current site groups the products as user authentication, multi-tenancy (Organizations), enterprise authentication (SSO and Directory Sync), Billing, and Platform, which lets a company white-label Clerk for the apps its own customers build.

:::fact
The official pricing page (accessed 2026-11-02) has four plans, all priced in US dollars and exclusive of tax. The Standard Terms say fees "are exclusive of any local, state, federal or foreign taxes," including value-added taxes, which the customer pays. We found no pricing in Japanese yen and no Japan-specific pricing page.

| Item | Hobby | Pro | Business | Enterprise |
| --- | --- | --- | --- | --- |
| Monthly price (billed monthly) | Free | $25 | $300 | Custom |
| Monthly price (billed annually) | Free | $20 | $250 | Annual only |
| MRUs included | 50,000 per app | 50,000 per app, then usage pricing | Same | Custom |
| Dashboard seats | Up to 3 | Up to 3 | 10 (extra seats $20/mo each) | Custom |
| SSO connections | None | 1 per app (extra from $75/mo) | Same | Custom |
| Session lifetime | Fixed at 7 days | Configurable, 5 minutes to 10 years | Same | Same |
| Log retention | 1 day | 7 days | 30 days (plus admin logs) | Custom |
| Main differences | No payment method required; up to 3 social connections | MFA, passkeys, remove Clerk branding, SMS sign-in | SOC 2 report, IP restrictions, advanced fraud protection | 99.99% uptime SLA, HIPAA BAA |

Every plan has unlimited applications, and user data can be exported without restriction. Email support on Hobby is limited to billing, registration and abuse questions. Business's priority support carries the note "No response-time SLA."
:::

:::fact
The MRU sits at the center of how Clerk counts. The pricing page says "Clerk bills on retained users, not monthly active users (MAU)" and defines an MRU as "a user who visits your app in a given month at least one day after signing up." It calls the rule that a user is not counted as active unless they sign in again after their first 24 hours "First Day Free," and says "a user who signs up and never returns is never billed." Organizations are counted the same way: a Monthly Retained Organization (MRO) is an organization with at least two members, at least one of whom is an MRU that month.
:::

:::pull
What shows up on a Clerk invoice is not the people who signed up, but the people who came back.
:::

::scorecard

## UX analysis

Clerk's UX is easiest to read as two screens: the one a developer sees in the first ten minutes, and the one they see when going to production. The first is relentlessly light. The second still carries the full weight of what authentication is.

- **An app runs before you have an account.** Clerk's `auth.md` tells AI agents how to call `POST /v1/accountless_applications` without authentication, get a development application and keys, and let a human "claim" it into their workspace later. In the CLI, `npx clerk@latest init` does this: it detects the framework, installs the SDK and writes the keys to the env file. An editor's note dated August 2026 on the Core 3 changelog says the earlier "Keyless mode" was removed and replaced by this `clerk init` flow.
- **Three levels of freedom.** The docs describe the levels of abstraction as prebuilt components, "custom flows" built from lower-level primitives such as hooks, and the raw Frontend API. With the prebuilt components you can "modify the CSS for any part," but "not the HTML structure or the logic/ordering of how the authentication flow works." Core 3, released March 3, 2026, redesigned hooks such as `useSignIn()` so that status and errors live in the hook. Clerk's blog presents this as being for users who "want total control over their UI, especially as AI has the ability to build so quickly."
- **Free Hobby keeps some production features closed.** Multi-factor authentication, passkeys, biometric sign-in, user bans and blocklists are Pro and above. Sessions are fixed at seven days, and social connections are capped at three. On the other hand, development instances can try every Pro feature. The pricing FAQ says this replaces a traditional trial period and that features needing an upgrade in production are tagged in the dashboard.
- **Going over the limit does not stop you immediately.** If a Hobby app exceeds 50,000 MRUs, or exceeds the 100 MROs that come without an add-on, there is a one-month grace period to upgrade, during which the app keeps running.
- **Development and production are separate worlds.** Users in a development instance cannot be migrated to a production instance. In development, session state travels in a query string (`__clerk_db_jwt`) rather than a cookie. The docs call this not secure enough for production and state plainly: "Never deploy a development environment to production." In production, FAPI has to sit on a subdomain of your own domain (for example `clerk.example.com`) through a CNAME record.
- **The way in and the way out are both documented.** The migration guide describes a basic export/import and a "trickle migration" that runs alongside the old system, and provides an open-source import tool. You can pass the password hashing algorithm, and in some cases Clerk transparently upgrades hashes to bcrypt. To leave, you can export a CSV from the dashboard that includes hashed passwords. The pricing page says "your data should always be in your control."
- **Rate limits are cut fairly small.** The Frontend API is limited per user by IP address: 5 requests per 10 seconds to start a sign-in or sign-up, and 3 per 10 seconds for verification attempts. The Backend API is limited per instance: 1,000 requests per 10 seconds in production and 100 in development. Updating a user's metadata is limited to 10 requests per 10 seconds per user. In a bulk import, these limits set the pace.

Overall, Clerk sells an experience of not having to think about authentication, and largely keeps that promise. In exchange, the decisions you no longer have to make are built into the components as Clerk's defaults. When you want to change the order of a flow, you have to give up the finished component and step down a level to build it yourself.

## Tech stack

::techstack

The technical core of Clerk is how it holds a session. Its documentation lays out the strengths and weaknesses of "stateful" authentication, which checks the database on every request, and "stateless" authentication, which trusts a signed token, and then explains its own model in between in some detail.

:::fact
According to the official guide "How Clerk works" (accessed 2026-11-02), on a successful sign-in Clerk records a session in its database and issues two signed JWTs.

| Item | Client token | Session token |
| --- | --- | --- |
| Cookie name | `__client` | `__session` |
| Where it lives | The FAPI domain (for example `clerk.example.com`) | Your app's domain, not shared across subdomains |
| Lifetime | The session lifetime (cookie expiry depends on the browser) | 60 seconds |
| HttpOnly | Yes | No (client-side SDKs must read it) |
| Role | Source of truth for auth state; its `rotating_token` rotates on every sign-in to prevent session fixation | Your server verifies its signature and reads the user ID and other claims |

The SDK fetches a new session token from FAPI every 50 seconds, leaving 10 seconds for network latency. If refreshes have stopped and the token has expired, as when a user closes a tab and returns five minutes later, a client-rendered app's SDK simply asks FAPI directly. A server-rendered app cannot send the browser's cookies from the server, so the server first redirects the browser to FAPI to get a new token. Clerk calls this the "handshake." The docs explain that a JWT valid for a week or a month can be abused for that whole period if stolen, whereas a 60-second token has usually expired before an attacker can even try it.
:::

:::guess
To an app developer, this model feels as simple as stateless authentication. The server only has to verify a JWT signature, and fetching the JWKS has no rate limit. The complexity of refreshing every minute, placing the cookies and running the handshake redirect is all gathered on Clerk's FAPI side. Put another way, Clerk does not have to answer each of your app's requests, but each of your users' browsers keeps talking to Clerk once a minute. The load this creates is not published, but the design appears to put Clerk's availability to the test for as long as a session lasts, not only at the moment of sign-in. That is likely why the outage reports below keep returning to the mechanisms that keep sessions alive.
:::

Clerk is unusually specific about its infrastructure in its postmortems. The March 2026 report says, "Though we generally prefer not to name our vendors, we are doing so today because the operation that failed is unique to their offering," and names Google Cloud SQL.

:::fact
The major incidents since 2025, from Clerk's postmortems and changelog (accessed 2026-11-02):

| Date | What happened | Cause and response given by Clerk |
| --- | --- | --- |
| June 26, 2025 | All services down from 6:16 to 7:01 UTC | An outage of its compute infrastructure. In response, automatic regional failover for critical parts of the system was introduced on August 4, 2025 |
| August 28, 2025 | Two periods of elevated API latency and errors, about 22 and 12 minutes | A distributed credential stuffing attack on one tenant's authentication endpoints. Session token issuance kept operating normally |
| September 14-18, 2025 | Intermittent request failures and latency spikes | An automatic minor PostgreSQL upgrade by the cloud provider made connection granting faster, so connections across Cloud Run containers began recycling in sync every 15 minutes. Fixed in the connection pooling configuration |
| February 10, 2026 | Authoritative DNS resolution unavailable for 2 hours 32 minutes from 17:06 UTC | A DNS provider failure. Thanks to caching and fallback DNS servers, successful request volume stayed above 95% of the expected level |
| February 19, 2026 | About 90 minutes of outage; over 95% of traffic returned 429 | An automatic PostgreSQL ANALYZE flipped a query plan. Recovered by re-running ANALYZE manually |
| March 10, 2026 | Outage from 15:57 to 16:23 UTC | A failed live migration of the Cloud SQL virtual machine caused a spike in disk latency |

The March report says Clerk chose Cloud SQL in 2021 and has run it on the Enterprise Plus high-availability offering, which carries a 99.99% availability SLA inclusive of maintenance. A different live migration had already caused a major incident in September 2025; Google worked on it for months, involving over 80 of its staff, and unpinned the database in January 2026. The March outage came after that. The report says Clerk will rely on replica promotion for all database maintenance, and that unless Google offers a way to disable live migrations permanently, it will need to move to another database provider or run Postgres in-house, options it is "actively investigating." It opens by saying Clerk has "shifted the majority of our engineering team to reliability-focused projects" and apologizes for the resulting delay in new features.
:::

:::fact
The postmortems also show how Clerk tries to keep signed-in users from being locked out during an incident. According to the February 19 report, the existing Session API failover, designed for a Postgres outage, did not trigger because the database was "technically still online, just degraded." The team manually enabled a new mechanism built over the previous months that generates session tokens outside the core Session API, which let many users back into customer applications, while sign-in and account management APIs stayed unavailable. During the March 10 outage, Clerk enabled "Origin Outage Mode" at 16:10 UTC to keep session management running. The report also flags that 429 responses from an internal service were passed straight through, and says these will become 500s so that applications can read Clerk's state correctly.
:::

:::fact
On security, Clerk's overview page (marked "Last reviewed: 2026-08-17") says it has held SOC 2 Type 2 and HIPAA since May 6, 2022, and transfers personal data from the EU, UK and Switzerland under the Data Privacy Framework. It does not hold ISO 27001; its infrastructure providers Google Cloud and Cloudflare do. Regional data residency is "not offered": data is hosted on US infrastructure, with all subprocessors in the USA. The page says no breach of Clerk's own systems or customer data has been publicly reported, and that the issues on record are vulnerabilities in its open-source SDKs, each patched within days and published with a CVE and advisory. One of them is CVE-2026-41248, published April 15, 2026, which allowed bypassing route protection that uses `createRouteMatcher` in Next.js, Nuxt or Astro middleware; the GitHub advisory rates it "critical."
:::

:::guess
Concentrating the database on one managed product from one provider looks like the result of what Clerk itself calls a "very conservative" approach of preferring "battle-tested solutions." Clerk has written openly about how that backfired in 2025 and 2026, and the candor of its reports stands out even among services of this kind. The lack of data residency, meanwhile, remains a factor on the customer's side. Personal data of users outside the US, including users in Japan, is stored in the US, so how a company handles cross-border transfer of personal information under its own laws is likely to be something to settle before adopting Clerk. The legal assessment depends on each business, so we limit ourselves to the facts here.
:::

## Business model

Clerk's revenue comes from plan fees, usage charges for MRUs and MROs, per-connection charges for SSO and similar, fraud-protection checks, and a percentage of Billing volume. The February 5, 2026 pricing change rearranged where the weight falls among them.

:::fact
Clerk's changelog entry "New plans, more value" (2026-02-05) calls it the first major pricing update since November 2023 and describes it like this:

- Lower prices or more features: free MRUs rose from 10,000 to 50,000 per application, and every plan now includes unlimited applications. The Enhanced Authentication add-on was eliminated, with most of its features, including multi-factor authentication and satellite domains, moved into Pro (from $20/mo). Five impersonations a month became free, and automatic volume discounts and an annual billing discount were added.
- Changes that raise prices: using four or more dashboard seats now requires Business (from $250/mo). SAML and OIDC enterprise connections, unlimited under the old add-on, are now metered on Pro, so apps with three or more connections pay more. Access to SOC 2 and HIPAA artifacts now requires Business.

If paid customers did not choose a new plan before their billing period beginning in April, Clerk said it would migrate them automatically. The stated goal was to "make authentication essentials more affordable, while focusing our fees on differentiated features and areas with real operational cost."
:::

:::fact
The usage rates on the pricing page (accessed 2026-11-02):

| What is metered | Included | Price beyond that (per month) |
| --- | --- | --- |
| MRUs | 50,000 per app | $0.02 each from 50,001 to 100,000; $0.018 from 100,001 to 1,000,000; $0.015 from 1,000,001 to 10,000,000; $0.012 above that |
| MROs (Enhanced B2B Authentication add-on, $100/mo or $85/mo billed annually) | 100 per app | $1 each from 101 to 1,000; $0.90 from 1,001 to 10,000; $0.75 from 10,001 to 100,000; $0.60 above that |
| SSO connections (SAML, OIDC, EASIE) | 1 per app | $75 each from 2 to 15; $60 from 16 to 100; $48 from 101 to 250 |
| Directory Sync connections (SCIM, Google Workspace) | 1 per app | Same rates as SSO; billing starts January 1, 2027 |
| Fraud-protection checks (Protect) | 10,000 per month | $0.002 per check up to 1,000,000 |
| Satellite domains | None | $10 each |
| SMS sign-in | None | $0.01 per SMS in the US and Canada; market rate elsewhere |
| Clerk Billing | — | 0.7% of billing volume, on top of Stripe's 2.9% + $0.30 |

Without the add-on, organizations are still free up to 100 MROs per app and 20 members per organization. Startup discounts are available through Stripe Atlas, Y Combinator, South Park Commons and OnDeck, for companies up to one year after launch and with up to $5 million in venture funding.
:::

To see what the pricing feels like, we worked out some examples from the published rates.

:::fact
Our own calculation from the pricing page's rates (monthly billing), excluding tax, SMS, Protect checks and Billing fees:

| Scenario | Breakdown | Per month |
| --- | --- | --- |
| Solo SaaS with 8,000 MRUs using MFA and passkeys in production | Pro | $25 |
| Consumer app with 100,000 MRUs | Pro $25 + 50,000 × $0.02 | $1,025 |
| The same app with 300,000 sign-ups a month, of whom 100,000 return after day one | Counted in MRUs, so the same as above | $1,025 |
| B2B SaaS with 20,000 MRUs, 500 organizations and SSO for 5 customer companies | Pro $25 + B2B add-on $100 + 400 orgs × $1 + 4 connections × $75 | $825 |
| The same SaaS once four employees use the dashboard | Replace Pro with Business at $300 | $1,100 |

The third row is where counting MRUs pays off. The fourth and fifth rows fall on the two axes Clerk said would cost more after the February 2026 change: metered enterprise connections and the number of seats.
:::

:::guess
The MRU appears to reflect plainly which customers Clerk is after. The pricing FAQ asks itself "Is Clerk good for B2C apps?" and answers that it can fit paid consumer apps and subscription products, but that for a free, ad-supported or very low-ARPU consumer app, the per-MRU model "may feel expensive once you outgrow the free tier." It even says that in those cases Supabase Auth or Firebase Auth may be cheaper. Billing on retained users means the model is easiest to pay for when users turn into revenue, and heaviest when they do not. The FAQ's line that "Clerk is easiest to justify when retention maps to revenue" sums up the design of the price list.
:::

:::guess
Another reading is that the weight of the price list is shifting from individual developers toward B2B SaaS. The change multiplied the free MRUs by five, but the things that got more expensive are features used by SaaS companies with business customers: enterprise connections, Directory Sync, audit artifacts, seats, IP restrictions and admin logs. B2B customers bring higher revenue per user and have clear reasons to pay for features like SSO. The design appears to be two-tiered: widen the entrance so that individual developers and AI agents write the first line of code, and earn the revenue on features for businesses.
:::

As part of widening that entrance, Clerk put support for AI agents up front in 2026. Its blog post "Clerk for the AI era" (2026-03-03) said "it's never been easier to prompt an app into existence," and committed to investing in APIs and tools that work well for agents as well as in its components.

:::fact
According to Clerk's llms.txt and changelog (accessed 2026-11-02), Clerk publishes an MCP server (`mcp.clerk.com`), a CLI installed from npm, and skills that route an agent to framework-specific instructions. On October 15, 2026, the MCP server gained the ability, after signing in to a Clerk account, to create applications, configure authentication, manage users and set up production instances within the permissions the user approves. On October 30, Clerk announced "Clerk for Agent Auth" in private beta, built on open OAuth standards and the Personal Agent Protocol, to verify and authenticate agents. The Series C post says one of the round's leads was Anthropic's Anthology Fund and names agent identity first among the uses of the money. Clerk Protect, the fraud and abuse product, was formally introduced on October 23, 2026, adding protections such as blocking sign-ups from VPNs and Tor, country restrictions and per-IP sign-up limits to the Business plan.
:::

:::guess
Support for agents seems to mean two things. One is a sales channel: raising the odds that AI coding tools pick "Clerk for auth." The account-free key provisioning in `auth.md` lets an agent create a first app without waiting for a human; that app gets claimed, goes to production, and starts generating a bill once it passes 50,000 MRUs. The other is a product that manages agents themselves as a new kind of user, which is still in private beta. The first widens today's revenue funnel; the second looks like a search for tomorrow's billing unit.
:::

Clerk has made a business of taking authentication, an unglamorous job that cannot be allowed to fail, and selling it in a visible form: UI components. Its price list puts the weight on retained users and enterprise connections, and its architecture keeps 60-second tokens rotating to balance security and convenience. Behind that convenience, the 2025-2026 outages showed that one database behind the components could stop the sign-in screens of tens of thousands of apps at once. How Clerk's decision to move most of its engineers onto reliability plays out over the next year, and whether it changes database providers or runs Postgres itself, is likely to matter more to the case for choosing Clerk than the per-MRU price.
