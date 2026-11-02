---
title: "Auth0 vs. Clerk (2026): MAU vs. MRU Billing, Pricing, SSO and SCIM, Hosted vs. Embedded Login, and Data Residency Compared from the Official Pages"
description: "A comparison of Auth0 and Clerk based only on both companies' official pages, read on November 2, 2026. Auth0's free plan covers 25,000 MAU; Clerk's covers 50,000 MRUs per app. Auth0 counts anyone who logs in or refreshes a token in a calendar month, per tenant; Clerk counts only users who come back at least a day after signing up, per app. Paid plans start at $35/mo for Auth0 Essentials and $25/mo ($20 billed annually) for Clerk Pro. We also line up SSO and SCIM, Auth0's hosted Universal Login versus Clerk's embedded components, which regions you can host in (Auth0 offers Japan, the EU, the UK and more; Clerk is US-only), and how each publishes outages, then sort out which kind of app fits which."
lead: "When you decide to hand authentication to an outside service, Auth0 and Clerk are two of the names that come up first. Both cover sign-up, sign-in, multi-factor authentication and enterprise SSO, and both let you start for free. Put their official pages side by side, though, and they differ in how they count users, where the login screen lives and how you choose the country your data sits in. Auth0 is an authorization server that started in 2013 and has been part of Okta since 2021; Clerk has sold authentication as React components since 2019. We read both companies' pricing pages and documentation on November 2, 2026 and dissect the differences that matter when you choose."
slugA: "auth0"
slugB: "clerk"
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
expires:
  - date: "2026-12-31"
    claim: "Check that billing for Clerk's Directory Sync connections began on January 1, 2027 as announced (from $75/mo per additional connection), then rewrite for after the start"
sources:
  - label: "Auth0: Pricing (plans, comparison table, FAQ)"
    url: "https://auth0.com/pricing"
    accessedAt: "2026-11-02"
  - label: "Auth0: Pricing, Japanese page (US dollar reference prices)"
    url: "https://auth0.com/jp/pricing"
    accessedAt: "2026-11-02"
  - label: "Auth0 Blog: Auth0 MAU Explained (how MAU is counted)"
    url: "https://auth0.com/blog/auth0-monthly-active-user-mau-explained/"
    accessedAt: "2026-11-02"
  - label: "Auth0 Docs: Create Tenants (regions and localities)"
    url: "https://auth0.com/docs/get-started/auth0-overview/create-tenants"
    accessedAt: "2026-11-02"
  - label: "Auth0 Docs: Auth0 Universal Login"
    url: "https://auth0.com/docs/authenticate/login/auth0-universal-login"
    accessedAt: "2026-11-02"
  - label: "Auth0 Docs: Hosted Login vs. Embedded Login"
    url: "https://auth0.com/docs/authenticate/login/universal-vs-embedded-login"
    accessedAt: "2026-11-02"
  - label: "Auth0 Docs: Auth0 Data Processing (inactive free tenants and deletion)"
    url: "https://auth0.com/docs/secure/data-privacy-and-compliance/data-processing"
    accessedAt: "2026-11-02"
  - label: "Auth0 Docs: Billing Policy"
    url: "https://auth0.com/docs/troubleshoot/customer-support/operational-policies/billing-policy"
    accessedAt: "2026-11-02"
  - label: "Auth0 Blog: Okta Completes Acquisition of Auth0 (2021-05-03)"
    url: "https://auth0.com/blog/okta-acquisition-announcement/"
    accessedAt: "2026-11-02"
  - label: "Clerk: Pricing (plans, usage rates, FAQ)"
    url: "https://clerk.com/pricing"
    accessedAt: "2026-11-02"
  - label: "Clerk Changelog: New plans, more value (pricing change, 2026-02-05)"
    url: "https://clerk.com/changelog/2026-02-05-new-plans-more-value"
    accessedAt: "2026-11-02"
  - label: "Clerk Docs: How Clerk works"
    url: "https://clerk.com/docs/guides/how-clerk-works/overview"
    accessedAt: "2026-11-02"
  - label: "Clerk Docs: Migrating"
    url: "https://clerk.com/docs/guides/development/migrating/overview"
    accessedAt: "2026-11-02"
  - label: "Clerk: Security and Compliance at a Glance"
    url: "https://clerk.com/security"
    accessedAt: "2026-11-02"
  - label: "Clerk: Standard Terms and Conditions (taxes)"
    url: "https://clerk.com/legal/standard-terms"
    accessedAt: "2026-11-02"
  - label: "Clerk Blog: Postmortem: Clerk System Outage (March 10, 2026)"
    url: "https://clerk.com/blog/2026-03-10-service-outage-postmortem"
    accessedAt: "2026-11-02"
  - label: "Clerk Blog: Clerk for the AI era (2026-03-03)"
    url: "https://clerk.com/blog/2026-03-03-clerk-for-the-ai-era"
    accessedAt: "2026-11-02"
---

[Auth0](/en/articles/auth0) and [Clerk](/en/articles/clerk) are usually filed together as services that take authentication and user management off your hands. Put their pricing pages side by side, though, and they differ from the first line. Auth0's pricing page opens with a slider asking "How many monthly active users?" and a B2C/B2B toggle. Clerk's opens by defining a unit of its own, the Monthly Retained User. This article lines up the numbers and conditions exactly as both companies' official pages state them on November 2, 2026. We have not run either service in production; we are cross-checking the published pricing and documentation. Prices change, so always check the official pages before you sign up.

## How each one counts users

What an auth provider bills you depends less on the unit price than on who counts as one user. This is where the two differ most.

:::fact
The billing unit, from both companies' official pages (accessed 2026-11-02):

| Item | Auth0 | Clerk |
| --- | --- | --- |
| Unit | Monthly active user (MAU) | Monthly Retained User (MRU), and MROs for organizations |
| Who counts as one | A user who performed a login or a token refresh in the calendar month | A user who visits the app in the month at least one day after signing up |
| Users who sign up and never return | The official explanation decides by whether the user logged in (or refreshed a token) that month | Not counted ("First Day Free") |
| Scope of the count | Per tenant. The same person logging into dev, staging and prod tenants counts as three MAUs | Per app (the free tier is also 50,000 MRUs per app) |
| Users who only sit in the database | Not counted | Not counted (Clerk never bills on the total size of the user table) |

Auth0's description comes from its blog post "Auth0 MAU Explained," which says MAU is counted the same whether a tenant is tagged staging, dev or prod. Clerk's definitions come from its pricing page and migration guide.
:::

:::guess
This difference can matter more than the gap between the free-tier numbers. For an app with many sign-ups but low retention, such as a service with lots of free trials or one that sees a temporary spike from a campaign, Clerk's way of counting likely leaves fewer billable users. Conversely, if most users log in again every month and few real users touch your development tenants, the difference in counting is probably small. If you run separate Auth0 tenants for development, staging and production and the same employees or testers log into each every month, they are counted once per tenant, which is worth building into an estimate.
:::

## Plans and prices

:::fact
The standard plans on both pricing pages (accessed 2026-11-02). Both are listed in US dollars. Auth0's Japanese pricing page also shows US dollars, labelled as reference prices. Clerk's Standard Terms say fees exclude taxes, which the customer pays. We could not confirm how taxes are treated on Auth0's pricing page.

| Item | Auth0 | Clerk |
| --- | --- | --- |
| Free plan | Free: up to 25,000 MAU. No credit card needed (custom domains require credit card verification) | Hobby: up to 50,000 MRUs per app. No credit card required |
| Entry paid plan | Essentials: $35/mo (as shown for B2C with 500 monthly active users) | Pro: $25/mo, or $20/mo billed annually. Includes 50,000 MRUs; overage from $0.02 per MRU per month |
| Next tier | Professional: $240/mo (same display conditions) | Business: $300/mo, or $250/mo billed annually |
| Top tier | Enterprise: custom. Custom user and SSO tiers, 99.99% SLA | Enterprise: custom (billed annually only). 99.99% uptime SLA |
| How user volume is set | Paid plans let you pick a number of users, from 1,000 up to 100,000 or more | Published usage rates for anything beyond the included 50,000 MRUs |
| Trial | A 22-day trial, after which the Free plan activates automatically | No trial period; Pro features can be tried in development instances |
| Startups | A program free for a year (including 100K external MAU); you can also apply for $5,000 in AWS credits | Discounts through partners such as Stripe Atlas and Y Combinator (up to one year after launch, up to $5M in funding) |

Auth0's paid prices change with the number of users you pick on the slider and with the B2C/B2B toggle. The $35 and $240 above are what the page shows by default (B2C, 500 users). Clerk's own pricing FAQ also describes Auth0's paid plans as starting "at $35/mo for Essentials and $240/mo for Professional."
:::

:::fact
The feature steps differ too. In Auth0's comparison table (B2C view), log retention is 1 day on Free, 5 days on Essentials, 10 days on Professional and 30 days on Enterprise; included tenants are 1, 3, 12 and unlimited; and admins are capped at 3 on Free and unlimited above that. "Custom Database Connections," which let users sign in against your existing user database, are Professional and up. Clerk retains logs for 1 day on Hobby, 7 days on Pro and 30 days on Business, and its dashboard allows up to 3 seats on Hobby and Pro; four or more seats require Business (10 seats included, extra seats $20/mo each). Multi-factor authentication is Pro and above on Clerk, while Auth0's "Pro MFA Factors" are Essentials and above.
:::

:::guess
Clerk's entry price is lower and its free tier larger, but the comparison needs care. Auth0 has you decide the number of users you are contracting for up front and choose a higher tier when you go over. Clerk adds usage to a base fee, so what you use goes straight onto the bill. The first makes monthly costs easier to predict; the second lets you start small and pay only for growth. The other difference is admin seats: once your team passes three people, Clerk's $300/mo Business plan comes into view, while Auth0's Essentials allows unlimited admins. Team size is likely to move the bill about as much as user count.
:::

## Enterprise features: SSO, organizations and SCIM

For B2B SaaS, the deciding features are SSO with customers' identity providers, an organization (tenant) per customer company, and SCIM to reflect hires and departures automatically.

:::fact
On Auth0's pricing page (accessed 2026-11-02), Free lists "1 Enterprise Connection," "Self-Service SSO" and "SCIM," marked "New," and includes 5 Organizations. Essentials and Professional carry the note "Upgrade to B2B to continue using EC, Self-Service SSO, and SCIM," and in the B2C comparison table Inbound SCIM is "Not included" on those paid plans. Essentials and Professional include 10 Organizations, and Enterprise is custom. The number of enterprise connections is set individually on Enterprise.

On Clerk's pricing page, Hobby has no SSO connections; Pro and Business include one per app, with additional connections at $75/mo each for 2 to 15, $60 for 16 to 100 and $48 for 101 to 250. Directory Sync (SCIM and Google Workspace) also includes one connection, at the same rates, with billing starting January 1, 2027. Organizations are free on every plan up to 100 MROs per app and 20 members per organization; beyond that you need the Enhanced B2B Authentication add-on ($100/mo, or $85/mo billed annually) plus usage from $1 per organization per month. Clerk itself wrote that its February 2026 change moved enterprise connections from unlimited to metered, so apps with three or more connections pay more.
:::

:::guess
When you are connecting a handful of customer companies over SSO, Clerk's published per-connection prices make estimates easy, and its pricing FAQ presents this as an advantage. Auth0 lets you try an enterprise connection, SCIM and self-service SSO even on Free, but those drop out when you move to a B2C paid plan, and you continue on a B2B plan or a custom quote. Once the number of customer companies pushes SSO connections into the dozens, both providers enter the realm of individual negotiation or top-tier plans, and the public price lists alone are no longer enough to compare them.
:::

## Where the login screen lives

The difference in design shows most clearly in where each puts the login screen.

:::fact
Auth0's documentation (accessed 2026-11-02) splits the login experience into hosted (Universal Login) and embedded. With Universal Login, your app redirects the user to Auth0's authorization server (your tenant), Auth0 shows the login screen, and it sends the user back with an ID token and an access token. You change the configuration in the dashboard, and Auth0's improvements apply without changes to your application code. Auth0 says Universal Login meets WCAG 2.2 AA and EN 301 549 by default. Embedded login is also available and gives full control over the UI, but on the web it uses cross-origin authentication, which relies on third-party cookies, unless you configure a custom domain. The docs say the two can be combined, with Universal Login as the default for primary sign-in, sign-up and password reset.

Clerk's documentation strongly recommends placing its prebuilt components (such as `<SignIn />`) inside your app's screens, and offers "custom flows" built from hooks and other primitives when you want more control. The prebuilt components let you change the CSS, but not the HTML structure or the order of the authentication flow. In production, Clerk's Frontend API sits on a subdomain of your own domain through a CNAME record, and the SDK refreshes a session token that expires after 60 seconds every 50 seconds. Server-rendered apps refresh an expired token through a redirect Clerk calls the handshake.
:::

:::guess
Auth0's design appears to treat login as a single place outside the app. If you want SSO across several apps or third-party apps, or want security updates to the login screen decoupled from your app's releases, this shape fits naturally. Clerk's design treats login as part of your app's screens, and its strengths are an experience that never leaves the app and the ease of handling auth as components inside a React or Next.js app. Each also offers the other shape, so we see this less as a difference in what is possible than in where the default sits.
:::

## Where the data lives, and operations

:::fact
According to Auth0's documentation (accessed 2026-11-02), public cloud tenants can be placed in the Australia, Canada, Europe, Japan, United Kingdom and United States localities, and the locality you choose determines the tenant's domain and the region where its data is hosted. Choosing Japan gives a domain of the form `{tenant}.jp.auth0.com`. The pricing FAQ lists, in addition to the shared public cloud, a dedicated Private Cloud Basic that "addresses specific data residency needs," Private Cloud Performance at 500 requests per second and Performance Plus at 1,500, and says Auth0 systems have "over 99.99% monthly uptime figures for most regions." A Free-plan customer whose tenants all show no activity for 150 consecutive days has its tenants and data scheduled for permanent deletion.

Clerk's security overview says regional data residency is "not offered": data is hosted on US infrastructure (Google Cloud and Cloudflare, with all subprocessors in the USA), and EU, UK and Swiss personal data is transferred to the US under the Data Privacy Framework. Clerk has held SOC 2 Type 2 and HIPAA since May 6, 2022; the SOC 2 report is available on Business and above, and a HIPAA BAA on Enterprise. In Auth0's comparison table, compliance certifications are "Included" on every plan and the HIPAA BAA is an add-on.
:::

:::fact
The two also publish outages differently. Clerk posts detailed postmortems on its blog. Its March 10, 2026 report says a failed live migration of its database, Google Cloud SQL, took the service down for about 26 minutes, that Clerk shifted most of its engineers to reliability work, and that it is considering changing database providers or running Postgres itself. Auth0's pricing page points to its status and uptime pages for current and past availability. We did not review individual Auth0 incident records for this article.
:::

:::guess
For companies outside the US, where the data lives may be as decisive as price. Auth0 lets you place a tenant in Japan, Europe, the UK, Canada or Australia; Clerk is hosted in the US with no choice. Depending on how internal rules or customer contracts treat cross-border transfers of personal data, that single line may settle the shortlist. Clerk's postmortems, on the other hand, can be read as concrete material on what went wrong and how it is being fixed. How to weigh each approach is for the adopting team to judge against its own availability requirements.
:::

## Where the companies come from

:::fact
According to Auth0's blog, Eugenio Pace and Matias Woloski co-founded Auth0 in early 2013, and Okta completed its acquisition of Auth0 on May 3, 2021. At the time, Auth0 was described as operating as an independent business unit within Okta, led by Pace and reporting directly to Okta's CEO. Auth0's billing policy directs refund requests to Okta Accounts Receivable.

Clerk's blog says it has focused on developer experience for authentication and user management since 2019. On October 15, 2025 it announced a $50M Series C led by Menlo and Anthropic's Anthology Fund, saying it manages over 200 million users across over 15,000 applications. In its 2023 Series A, Madrona's Karan Mehandru, who had served on Auth0's board, joined Clerk's board.
:::

## Which fits which kind of app

What follows is our reading of the official pages above. It is not a ranking; it shows which rows of the two price lists come into play for each kind of app.

:::guess
- For a solo project or small SaaS built with React or Next.js that needs login screens fast, Clerk's price list is likely the better match. The free tier is a generous 50,000 MRUs per app, and using MFA and passkeys in production still costs $25/mo ($20 billed annually). Not billing users who sign up and never return also suits apps that people often just try.
- If you need, or want, user data stored in Japan, the EU, the UK, Canada or Australia, Auth0's localities are the option. Clerk states plainly that it does not offer data residency.
- If you want SSO across several apps or third-party apps, or want to manage the login screen centrally and separately from app releases, Auth0's Universal Login design likely fits more naturally.
- For B2B SaaS with a few to a dozen or so business customers that wants to know SSO costs in advance, Clerk's published per-connection prices are easier to estimate. Auth0 lets you try enterprise connections and SCIM even on Free, but keeping them on a paid plan means choosing a B2B plan.
- If you want users to keep signing in against your existing user database, Auth0's "Custom Database Connections" on Professional and up cover that. Clerk publishes procedures for bulk import and for a "trickle migration" that runs alongside your old system.
- For consumer apps with large numbers of free users, work out the per-user cost beyond the free tier with either provider first. Clerk's own pricing FAQ says Supabase Auth or Firebase Auth may be cheaper for low-ARPU apps.
:::

Auth0 and Clerk sell the same outsourcing of authentication through different doors. Auth0's door is an authorization server outside your app, and it has widened the deployment options that enterprise requirements call for. Clerk's door is components that sit in your app's screens, and it has drawn in developers with pricing that counts only retained users. What to decide first is not which unit price is lower, but whether you want the login screen inside or outside your app, which country your users' data must live in, and what "one user" means in your own app. Once those are settled, it becomes clear which rows of the two price lists to read.
