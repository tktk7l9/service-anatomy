---
service: "Auth0"
title: "Auth0 Pricing and Architecture Explained: Free Up to 25,000 Users, Paid From 500 — How Okta's Auth0 Meters Login by MAU and Is Extending It to AI Agents"
description: "Auth0, the identity platform owned by Okta, is free for up to 25,000 monthly active users, while paid Essentials starts at 500 MAU: a flat $0.07 per user per month for B2C, and $150 a month for B2B. A dissection — from the official pricing page, docs, and blog, plus Okta's investor relations releases — of the path from its 2013 founding to a roughly $6.5 billion all-stock acquisition, Universal Login and Node.js Actions, the end-of-life dates for Rules and Hooks, authorization built on OpenFGA, regional login endpoints behind Cloudflare, support for the Client ID Metadata Documents that MCP calls for, and Token Vault for AI agents priced as a 50% add-on."
lead: "Auth0's pricing page lists a free plan for up to 25,000 monthly active users next to paid plans that start at 500. A free ceiling fifty times higher than the paid entry point says a lot about what the company sells. It gives the login screen away almost for free and charges for the thing you will need next, such as multi-factor authentication or enterprise SSO. In 2026, the first item on that list has become credentials for AI agents. This is a dissection of how Auth0, five years into its life inside Okta, is built and how it makes money."
category: dev-tool
tags: [authentication, identity, oauth, developer-tools, ai-agent]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
expires:
  - date: "2026-11-30"
    claim: "Statements that treat Okta's Q2 FY2027 results (quarter ended July 2026) as the latest (replace the figures and outlook once the Q3 results are released)"
  - date: "2027-04-30"
    claim: "The statement that Hooks reach end of life on April 30, 2027 (check the official deprecations and migrations page for date changes and what happens afterwards)"
  - date: "2028-01-31"
    claim: "The statement that Rules reach end of life on January 31, 2028 (check the official deprecations and migrations page for date changes and what happens afterwards)"
serviceUrl: "https://auth0.com/"
# No affiliate slot: no public affiliate or referral program was found on auth0.com (checked 2026-11-02).
# If one appears, add a commented-out placeholder here following the 1password article's pattern.
vendor: "Okta, Inc."
origin: "US"
heroTheme: "auth0"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 4.0 }
techStack:
  - layer: "Identity protocols"
    name: "OpenID Connect / OAuth 2.0 (PKCE, private_key_jwt, DPoP, CIBA, Token Exchange)"
    confidence: confirmed
    evidence: "The OpenID Connect discovery document published by Auth0's own tenant (auth0.auth0.com, fetched 2026-11-02) lists PKCE with S256, private_key_jwt client authentication, DPoP with ES256, a CIBA bc-authorize endpoint, the token exchange grant, and back-channel logout"
    evidenceUrl: "https://auth0.auth0.com/.well-known/openid-configuration"
  - layer: "Extensibility"
    name: "Actions (Node.js functions on triggers)"
    confidence: confirmed
    evidence: "The official docs define Actions as tenant-specific Node.js functions that run at points called triggers. The limitations page caps each trigger execution at 20 seconds and each Action at 100 kB. The deprecations page says the Node.js 12 and 16 runtimes reached end of life on August 15, 2025, with code forced onto Node 22"
    evidenceUrl: "https://auth0.com/docs/customize/actions/limitations"
  - layer: "Password storage"
    name: "bcrypt"
    confidence: confirmed
    evidence: "The FAQ on the official pricing page states that credentials are never stored in plain text and that all passwords are hashed and salted with bcrypt"
    evidenceUrl: "https://auth0.com/pricing"
  - layer: "Authorization"
    name: "Auth0 FGA (based on OpenFGA, Go, Apache-2.0)"
    confidence: confirmed
    evidence: "The official FGA docs state that Auth0 FGA is based on OpenFGA, an open-source authorization system owned by the CNCF, and that Auth0/Okta is a key maintainer. On GitHub, openfga/openfga lists Go as its main language and Apache-2.0 as its license (checked 2026-11-02)"
    evidenceUrl: "https://docs.fga.dev/openfga-vs-auth0-fga"
  - layer: "Deployment models"
    name: "Public Cloud (multi-tenant) / Private Cloud on AWS or Azure"
    confidence: confirmed
    evidence: "The official docs describe the standard multi-tenant Public Cloud and a dedicated, isolated Private Cloud offered on AWS (with Geo-HA add-ons) and Azure. The pricing page FAQ says Private Cloud Performance raises throughput to 500 requests per second and Performance Plus to 1,500"
    evidenceUrl: "https://auth0.com/docs/deploy-monitor/deploy-private-cloud"
  - layer: "Edge"
    name: "Cloudflare (in front of regional login endpoints)"
    confidence: likely
    evidence: "Our DNS observation (2026-11-02) resolved login.us.auth0.com, login.eu.auth0.com, and login.jp.auth0.com through CNAMEs of the form auth0-ingress.<region>.auth0.com.cdn.cloudflare.net to Cloudflare addresses, and auth0.auth0.com returned server: cloudflare and cf-ray headers. The origin infrastructure is not visible from outside"
  - layer: "Legacy CDN"
    name: "Amazon CloudFront + S3 (cdn.auth0.com)"
    confidence: likely
    evidence: "Our observation (2026-11-02) resolved cdn.auth0.com to a CloudFront domain, and a JavaScript file it serves returned server: AmazonS3 and via: CloudFront headers. The official docs point US tenants created before June 11, 2020 to this CDN"
  - layer: "Marketing site and docs"
    name: "Next.js on Vercel (behind Cloudflare) / Contentful / Mintlify"
    confidence: likely
    evidence: "Our HTTP header observation (2026-11-02) found auth0.com/pricing returning server: cloudflare and x-vercel-id, with __NEXT_DATA__, /_next/static/ paths, and images from Contentful's delivery domain (ctfassets.net) in the HTML. Pages under auth0.com/docs returned an x-mintlify-client-version header. These run separately from the product's login infrastructure"
  - layer: "SDKs"
    name: "nextjs-auth0 / node-auth0 (GitHub: auth0)"
    confidence: confirmed
    evidence: "On the official GitHub repositories, the latest releases were v4.33.0 of auth0/nextjs-auth0 for Next.js (published 2026-10-22) and v7.6.0 of auth0/node-auth0 for Node.js (published 2026-10-19), as checked on 2026-11-02"
    evidenceUrl: "https://github.com/auth0/nextjs-auth0/releases"
sources:
  - label: "Auth0 official: Pricing (Free, Essentials, Professional, Enterprise; B2C/B2B; add-ons; FAQ)"
    url: "https://auth0.com/pricing"
    accessedAt: "2026-11-02"
  - label: "Auth0 official: Pricing (Japanese edition)"
    url: "https://auth0.com/jp/pricing"
    accessedAt: "2026-11-02"
  - label: "Auth0 official blog: Auth0 Plans Got an Upgrade (free plan raised from 7,500 to 25,000 MAU, 2024-09-24)"
    url: "https://auth0.com/blog/auth0-plans-got-an-upgrade"
    accessedAt: "2026-11-02"
  - label: "Auth0 official: Auth0 for Startups (program requirements)"
    url: "https://auth0.com/startups"
    accessedAt: "2026-11-02"
  - label: "Auth0 official blog: Okta completes its acquisition of Auth0 (Eugenio Pace, 2021-05-03)"
    url: "https://auth0.com/blog/okta-acquisition-announcement/"
    accessedAt: "2026-11-02"
  - label: "Okta investor relations: Definitive agreement to acquire Auth0 (2021-03-03)"
    url: "https://investor.okta.com/news-and-events/news-releases/news-details/2021/Okta-Signs-Definitive-Agreement-to-Acquire-Auth0-to-Provide-Customer-Identity-for-the-Internet-03-03-2021/default.aspx"
    accessedAt: "2026-11-02"
  - label: "Okta investor relations: Q4 and fiscal year 2026 results (2026-03-04)"
    url: "https://investor.okta.com/news-and-events/news-releases/news-details/2026/Okta-Announces-Fourth-Quarter-And-Fiscal-Year-2026-Financial-Results/default.aspx"
    accessedAt: "2026-11-02"
  - label: "Okta investor relations: Q2 fiscal year 2027 results (2026-08-26)"
    url: "https://investor.okta.com/news-and-events/news-releases/news-details/2026/Okta-Announces-Second-Quarter-Fiscal-Year-2027-Financial-Results/default.aspx"
    accessedAt: "2026-11-02"
  - label: "Auth0 Docs: Universal Login"
    url: "https://auth0.com/docs/authenticate/login/auth0-universal-login"
    accessedAt: "2026-11-02"
  - label: "Auth0 Docs: Actions"
    url: "https://auth0.com/docs/customize/actions"
    accessedAt: "2026-11-02"
  - label: "Auth0 Docs: Actions Limitations (20-second execution, 100 kB)"
    url: "https://auth0.com/docs/customize/actions/limitations"
    accessedAt: "2026-11-02"
  - label: "Auth0 Docs: Deprecations and Migrations (end-of-life dates for Rules and Hooks)"
    url: "https://auth0.com/docs/troubleshoot/product-lifecycle/deprecations-and-migrations"
    accessedAt: "2026-11-02"
  - label: "Auth0 Docs: Organizations"
    url: "https://auth0.com/docs/manage-users/organizations"
    accessedAt: "2026-11-02"
  - label: "Auth0 Docs: Public Cloud Service Endpoints (regional domains)"
    url: "https://auth0.com/docs/troubleshoot/customer-support/operational-policies/public-cloud-service-endpoints"
    accessedAt: "2026-11-02"
  - label: "Auth0 Docs: Private Cloud"
    url: "https://auth0.com/docs/deploy-monitor/deploy-private-cloud"
    accessedAt: "2026-11-02"
  - label: "Auth0 official blog: Auth0 for AI Agents is generally available (2025-11-19)"
    url: "https://auth0.com/blog/auth0-for-ai-agents-generally-available/"
    accessedAt: "2026-11-02"
  - label: "OpenID Connect discovery document of Auth0's tenant auth0.auth0.com (fetched by us)"
    url: "https://auth0.auth0.com/.well-known/openid-configuration"
    accessedAt: "2026-11-02"
  - label: "Model Context Protocol specification: Authorization (2025-11-25 revision)"
    url: "https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization"
    accessedAt: "2026-11-02"
  - label: "Auth0 FGA Docs: Auth0 FGA vs OpenFGA"
    url: "https://docs.fga.dev/openfga-vs-auth0-fga"
    accessedAt: "2026-11-02"
  - label: "CNCF blog: OpenFGA becomes a CNCF incubating project (2025-11-11)"
    url: "https://www.cncf.io/blog/2025/11/11/openfga-becomes-a-cncf-incubating-project/"
    accessedAt: "2026-11-02"
  - label: "GitHub: openfga/openfga"
    url: "https://github.com/openfga/openfga"
    accessedAt: "2026-11-02"
  - label: "GitHub: auth0/nextjs-auth0 (releases)"
    url: "https://github.com/auth0/nextjs-auth0/releases"
    accessedAt: "2026-11-02"
---

Every app needs login, and no app wins customers because of it. The demands also grow as a product does — password storage, multi-factor authentication, social login, SSO for business customers — and getting any of it wrong is expensive. Auth0 turned this part, the one nobody wants to build and everyone has to, into something you rent by the monthly active user (MAU). It opens the door very wide and starts charging as a product approaches production. Now that it sits inside Okta, the same design is reaching all the way to AI agents.

## What It Is

Auth0 is an authentication and authorization platform — customer identity and access management (CIAM) — for adding sign-in, sign-up, multi-factor authentication, social login, and enterprise SSO to applications. Instead of storing passwords themselves, developers send users to Auth0's login page and verify the tokens that come back. It targets both consumer apps (B2C) and SaaS products that separate logins per business customer (B2B), and its price list is split along the same two lines.

:::fact
According to Auth0's official blog, Auth0 was co-founded in early 2013 by its CEO, Eugenio Pace, and CTO Matias Woloski. According to Okta's investor relations site, on March 3, 2021, Okta announced a definitive agreement to acquire Auth0 in a stock transaction valued at approximately $6.5 billion, paid in Okta Class A common stock based on a fixed number of shares and an Okta share price of $276.21. Okta said the deal would accelerate its growth in the "$55 billion identity market" and that Auth0 would "operate as an independent business unit inside of Okta." The acquisition closed on May 3, 2021, and Auth0's blog said Pace would continue as Auth0's CEO, reporting directly to Okta CEO Todd McKinnon.
:::

:::fact
Okta does not break out Auth0's numbers in its results. According to its March 4, 2026 release, total revenue for the fiscal year ended January 31, 2026 was $2.919 billion (up 12% year over year), free cash flow was $863 million (30% of revenue), and GAAP net income was $235 million; the same release lists "Customer Identity Cloud" among its products. According to its August 26, 2026 release, revenue for the second quarter of fiscal 2027 (ended July 31, 2026) was $805 million (up 11%), of which subscription revenue was $793 million (up 12%), and remaining performance obligations (RPO) stood at $4.858 billion (up 17%). The CFO said that "steady momentum from core Okta workforce and customer identity drove ACV acceleration in both businesses." Full-year revenue guidance is $3.216 billion to $3.226 billion.
:::

:::pull
A free ceiling of 25,000 users, a paid entry point of 500. Auth0 hands out the login screen almost for free and earns its money on the thing you will need next.
:::

::scorecard

## UX Analysis

Auth0's UX is designed to get developers to choose not to keep the login screens and logic in their own codebase.

- **It hosts the login page for you.** With the recommended Universal Login, the app redirects users to a page on Auth0's authorization server, and Auth0 handles authentication. The official docs explain that adding authentication methods requires no integration work in the app, and that the app does not need to change when Auth0 improves its login pages. Classic Login, which builds each page with JavaScript, is documented as "no longer receives updates."
- **Hooks are written as code.** To run logic in the middle of sign-in or sign-up, you write Actions: Node.js functions that run on triggers. They can use npm packages, but each trigger execution must finish within 20 seconds, and each Action is limited to 100 kB.
- **Old extension points close on a schedule.** Rules and Hooks, the predecessors of Actions, were deprecated on May 16, 2023 and became read-only on November 18, 2024. According to the official deprecations and migrations page, Hooks reach end of life on April 30, 2027 and Rules on January 31, 2028; "after January 31, 2028, Rules stop running and are removed."
- **Each business customer gets its own room.** For B2B SaaS there is Organizations, which manages multiple business customers inside a single tenant. Each organization can have its own name and branding, enterprise connections to the customer's own identity provider, email invitations, and roles of its own.
- **You can go a long way into production for free.** The free plan on the pricing page needs no credit card to sign up and includes up to 25,000 monthly active users, passwordless login, unlimited social connections (subject to system limitations), one custom domain (credit card verification required), five Organizations, and one enterprise connection. According to the FAQ, the first 22 days are a trial of paid features, after which the account moves to the free plan automatically.

:::fact
According to Auth0's official blog (September 24, 2024), the free plan's MAU ceiling was raised that day from 7,500 to 25,000, and unlimited social and Okta connections, custom domains, Organizations, and passwordless authentication were added to the free plan; existing free users received the new entitlements automatically. In the same update, paid B2C plans began including up to 10 Organizations and B2B plans unlimited ones, Essentials gained "Pro MFA," and Professional gained "Enterprise MFA."
:::

:::fact
In the pricing page's comparison, the free plan's "1 Enterprise Connection," "Self-Service SSO," and "SCIM" carry a "New" badge, while the B2C Essentials and Professional columns carry the note "Upgrade to B2B to continue using EC, Self-Service SSO, and SCIM." B2C Essentials and Professional offer no enterprise connections; B2B Essentials includes 3 and Professional 5, and more can be added at $100 a month ($1,100 a year) each, up to 30 in total. Log retention is 1 day on Free, 5 on Essentials, 10 on Professional, and 30 on Enterprise, and the number of tenants is 1, 3, 12, and unlimited (subject to system limitations).
:::

:::guess
A table in which the free plan lets you try one enterprise SSO connection, but upgrading to a paid B2C plan takes it away, looks inconsistent at first glance. It can be read, though, as a line — "B2B features are sold at B2B prices" — that is relaxed at the free stage and redrawn at the moment you start paying. The path it seems to anticipate is a startup whose first business customer asks for SSO: it builds something that works on the free plan, takes it into the sales conversation, and moves onto the B2B price list once the deal is signed.
:::

## Tech Stack

::techstack

:::fact
Auth0 separates the entry points for tenant logins by regional domain. According to the official docs, US tenants use `{yourAccount}.us.auth0.com`, while Australia, Canada, Europe, Japan, and the UK use `{yourAccount}.[au|ca|eu|jp|uk].auth0.com`, with the dashboard at the shared `manage.auth0.com`. US tenants created before June 11, 2020 are told to use the region-less `cdn.auth0.com`. The standard deployment model is a multi-tenant Public Cloud, and a dedicated Private Cloud is offered on AWS and Azure. The pricing page FAQ says Private Cloud Performance raises throughput to 500 requests per second and Performance Plus to 1,500, and that Auth0 has had over 99.99% monthly uptime in most regions. Passwords are never stored in plain text; they are hashed and salted with bcrypt.
:::

:::fact
The OpenID Connect discovery document of Auth0's own tenant (auth0.auth0.com), which we fetched on November 2, 2026, lists PKCE (S256), `private_key_jwt` client authentication, DPoP signed with ES256 (a mechanism that binds tokens to a key), a CIBA `bc-authorize` endpoint (poll mode), the token exchange grant, and back-channel logout, and sets `client_id_metadata_document_supported` to `true`. The Model Context Protocol (MCP) authorization specification (2025-11-25 revision) says authorization servers and MCP clients SHOULD support Client ID Metadata Documents — a scheme in which an HTTPS URL serves as the client ID and points to a JSON document describing the client — and that servers advertise support with exactly this field.
:::

:::fact
Authorization — who can access what — is handled by a separate service, Auth0 FGA. According to its official docs, Auth0 FGA is based on OpenFGA, an open-source authorization system owned by the Cloud Native Computing Foundation (CNCF), and Auth0/Okta is a key maintainer. OpenFGA is free and has the same core capabilities, but Auth0 FGA is deployed in two cloud regions per locality (US, Australia, Europe), and Auth0 manages the database backups. According to the CNCF blog (November 11, 2025), OpenFGA was developed by a group of Okta employees, was accepted as a CNCF Sandbox project in September 2022, and moved to Incubating in November 2025; 37 companies publicly acknowledge using it in production.
:::

:::fact
For AI agents, "Auth0 for AI Agents" became generally available on November 19, 2025. According to Auth0's official blog, it consists of four parts: user authentication; Token Vault, which stores and refreshes OAuth tokens for third-party services such as Google Drive, Jira, and Slack (with 35+ supported app integrations); asynchronous authorization (CIBA), which asks the user for approval in the background before critical actions; and FGA for RAG, which makes sure retrieval-augmented generation answers only from documents the user is allowed to see. It supports LangChain and LlamaIndex (JavaScript and Python) and the Vercel AI SDK, and at the time "Auth for MCP" was in Early Access.
:::

:::guess
In our observation (2026-11-02), `login.us.auth0.com`, `login.eu.auth0.com`, and `login.jp.auth0.com` all resolved through Cloudflare names of the form `auth0-ingress.<region>.auth0.com`. Auth0 appears to split entry points by region and then put Cloudflare in front of all of them, sharing DDoS protection and TLS termination. The old region-less `cdn.auth0.com`, by contrast, was served from Amazon CloudFront and S3 — presumably kept for tenants that predate the 2020 move to regional domains. An identity platform cannot easily change its entry points, because customers' apps keep referencing a URL for years after it is handed out; the old and new layers visible in the domain design look like a consequence of that constraint.
:::

:::guess
Advertising Client ID Metadata Documents support in the discovery document says a lot about where Auth0 is aiming in the age of AI agents. In MCP, clients (AI apps) and servers (tools) usually have no prior relationship, so registering every client by hand in a dashboard does not scale. Supporting the scheme the specification recommends, early and on the authorization-server side, gives developers building MCP servers a reason to choose Auth0 as their authorization server. A company that has been holding the login screen is, it seems, now trying to hold the handover of keys between agents and tools as well.
:::

## Business Model

Auth0's revenue comes from monthly and yearly subscriptions priced by MAU tier, individually quoted Enterprise contracts, and add-ons stacked on top. It is reported inside Okta's revenue and not disclosed on its own.

:::fact
According to the official pricing page, prices are shown in dollars (the Japanese edition uses the same dollar prices), and we found no statement about tax treatment. The free plan costs $0 a month for up to 25,000 users on both B2C and B2B. Essentials starts at 500 users at $35 a month for B2C and $150 for B2B; Professional starts at $240 a month for B2C and $800 for B2B. B2C Essentials is $70 at 1,000 users, $700 at 10,000, and $3,500 at 50,000; B2C Professional is $1,600 at 10,000 and $3,200 at 20,000 (contact sales from 30,000); B2B Essentials is $2,100 at 10,000 and $3,800 at 20,000; and B2B Professional is $2,400 at 10,000. "If your usage falls between tiers, you are billed at the next tier up." "Yearly billing is 11× the monthly price (equivalent to 1 month free)," so B2C Essentials at 500 users comes to $385 a year.
:::

:::fact
Among the add-ons, "Auth0 for AI Agents" "adds 50% to the base price (rounded up to the dollar)" and includes unlimited Token Vault and all forms of CIBA. In the pricing page's data, that surcharge for B2C Essentials at 1,000 users is $385 a year, half of the $770 base. Each enterprise SSO connection costs $100 a month, enterprise MFA on B2B Essentials is a $100-a-month add-on, and machine-to-machine (M2M) tokens have tiered pricing. According to Auth0's official blog (November 2025), even the free plan can connect up to two third-party apps to Token Vault. For startups — venture-backed with less than $5 million in funding, under $1 million in ARR, and less than two years from incorporation — Auth0 offers the B2B Professional plan with 100,000 MAU free for one year. For nonprofits, the pricing page makes every paid plan eligible for a "Social Impact" discount, and the same blog post describes it as 50% off self-service and enterprise plans.
:::

:::guess
Working from the table, B2C Essentials costs $0.07 per user per month whether you have 500 users or 50,000; the unit price does not fall with volume. B2C Professional, on the other hand, works out to $0.48 per user at 500 and $0.16 at 10,000, so it is relatively expensive at small scale. In effect, Professional's "$240 a month" is a minimum charge, while Essentials is straightforward usage-based pricing proportional to MAU. The point to watch is the move off the free plan. An app with 25,000 users on the free plan that upgrades to Essentials to add, say, Pro MFA falls between the 20,000 and 30,000 tiers, so it pays the 30,000 tier: $2,100 a month. Because the free range is so wide, the price tag on the first paid feature is not "the price of the feature" but "the price of every user you have at that point." Whether that looks expensive, or like fair payment for having grown to 25,000 users for free, is likely to divide opinion.
:::

:::guess
B2B Essentials starts at $150 a month for 500 users, roughly 4.3 times the B2C price. Per user, B2B costs more, but each B2B user is an employee of a business customer, and each contract is large. For a SaaS company, SSO with a customer's identity provider and account sync over SCIM tend to be prerequisites for selling to large enterprises. Auth0 appears to earn its money by making customers weigh the effort of building those prerequisites themselves against paying $100 a month per connection — and choosing the latter. Pricing the AI agent offering as a flat "50% of the base price" likewise seems meant to tie the price of a new market to a price already set by MAU, keeping the buying decision simple.
:::

:::guess
Okta's results do not show Auth0's revenue on its own. Still, since Okta describes workforce identity and customer identity as "both businesses" when explaining its ACV growth, Auth0 appears to be positioned as a pillar with room to grow outside the mature market of employee login. With the CEO saying in the Q2 release that "every agent needs a trusted identity," and Auth0 assembling features that follow the MCP specification, the effort reads as an attempt to recount AI agents as a new kind of MAU.
:::

What Auth0 sells is not the login screen itself. It is the ability to rent — measured by a single yardstick, the MAU — the parts nobody wants to build yet everyone is made to, and that cost dearly when done wrong: password storage, regional entry points, the planned retirement of old extension points, SSO for each business customer. It keeps the door open wide up to 25,000 users and puts you on the price list once your product starts making production demands. Now that AI agents call tools on behalf of people, that yardstick is stretching from the number of people to the number of agents.
