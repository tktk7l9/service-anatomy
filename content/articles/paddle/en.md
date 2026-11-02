---
service: "Paddle"
title: "How Paddle Works: The Merchant of Record That Resells Your Software, Files Your Sales Tax and VAT, and Charges 5% + 50¢"
description: "Paddle is a merchant of record (MoR) for SaaS, apps, games and other digital products: instead of processing payments for you, it becomes the seller. Founded in London in 2012, it raised a $200m Series D led by KKR at a $1.4bn valuation in 2022 and bought ProfitWell in a deal valued at over $200m the same year. Its terms appoint Paddle as the non-exclusive reseller of your product and pay you the buyer's price minus sales tax and 5% + $0.50, on or before the 15th of the following month. We dissect the three Paddle entities that sign your contract, how sales tax is withheld and remitted, Paddle's right to set prices, what you are not allowed to sell, payment routing across several PSPs and Paddle-owned merchant accounts, its Go microservices, and its remote MCP server, using Paddle's terms, help center, developer docs, engineering blog and our own observations."
lead: "When someone buys software through Paddle, the name on their card statement is not the developer's. It is Paddle's. Paddle does not process the payment on the developer's behalf; it buys the product from the developer and sells it to the customer under its own name. That one legal position, reseller, explains the rest: why tax is taken out of the tax-inclusive price and remitted, why the pricing page has a single line reading 5% + 50¢, why you are paid once a month, and why the acceptable use policy turns away consultancies and physical goods. Now that Stripe has launched Managed Payments into the same space, we dissect how a company that takes over the role of the seller is built and how it makes money."
category: saas
tags: [payments, fintech, merchant-of-record, saas, sales-tax, developer-experience]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
serviceUrl: "https://www.paddle.com/"
expires:
  - date: "2027-03-31"
    claim: "The announcement (2026-10-20) that native Usage-Based Billing enters private preview in early 2027"
# Affiliate link placeholder: Paddle lists "Referrals" as a way to partner on
# https://www.paddle.com/partners, but no public commission terms were found on 2026-11-02.
# The owner must join and confirm the program terms before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<paddle-referral-link>"
#   program: "Paddle Referrals"
vendor: "Paddle.com Market Limited"
origin: "GB"
heroTheme: "paddle"
scores: { product: 4.0, ux: 4.0, tech: 4.0, business: 4.0 }
techStack:
  - layer: "Billing API and checkout"
    name: "Paddle Billing API (REST/JSON, api.paddle.com) + Paddle.js v2"
    confidence: confirmed
    evidence: "The developer docs index (llms.txt, accessed 2026-11-02) says everyone who signed up after 2023-08-08 has Paddle Billing and that new signups for the legacy Paddle Classic are not allowed. Billing uses a JSON API at api.paddle.com, a Paddle-Signature header with SHA256 for webhook verification and Paddle.js v2, installable from npm; the docs tabulate it as a separate implementation from Classic"
    evidenceUrl: "https://developer.paddle.com/llms.txt"
  - layer: "Server SDKs"
    name: "Official SDKs for Node.js, Python, Go and PHP"
    confidence: confirmed
    evidence: "The developer docs index lists four official server-side SDKs, Node.js, Python, Go and PHP, and states that desktop SDKs aren't available"
    evidenceUrl: "https://developer.paddle.com/llms.txt"
  - layer: "Backend"
    name: "Go microservices + PostgreSQL / MySQL + Amazon SQS + OpenTelemetry"
    confidence: confirmed
    evidence: "Paddle's engineering blog (2026-01-28) says Paddle was built as a complex monolith; that the move to microservices left a mix of REST and gRPC, PostgreSQL and MySQL; and that Paddle built Go toolkits including a sidecar that delivers SQS messages to HTTP endpoints and Postgres connection management on sqlx, rolling out OpenTelemetry to every service in about three months"
    evidenceUrl: "https://paddle.engineering/blog/go-microservices-at-paddle-consistency-catalyst"
  - layer: "Payment routing"
    name: "Multi-PSP routing rules engine over Paddle-owned merchant accounts (local acquiring)"
    confidence: confirmed
    evidence: "Paddle's engineering blog (2024-07-18 and 2024-08-12) says Paddle integrates with several independent payment service providers (PSPs), holds merchant accounts in its own name in several regions, and runs a rules engine that picks a PSP and merchant account for every payment, with fallback and weighted strategies"
    evidenceUrl: "https://paddle.engineering/blog/payment-routing-part-2-developing-paddles-rules-engine"
  - layer: "Webhook delivery"
    name: "Event delivery with priority queues, exponential backoff and Redis locks"
    confidence: confirmed
    evidence: "Paddle's engineering blog (2025-05-02) says failed deliveries are retried through a low-priority queue so one bad destination does not slow everyone else, idempotency uses Redis locks, and delivery holds three nines on a 2-second SLO"
    evidenceUrl: "https://paddle.engineering/blog/hookdeck-podcast-event-delivery-scale"
  - layer: "AI agent integration"
    name: "Remote Paddle MCP server (codemode: search / execute / report_missing_tool)"
    confidence: confirmed
    evidence: "The developer changelog (2026-05-15) says the Paddle MCP server became a hosted remote service with one endpoint for sandbox and one for live, exposing the API through three tools in a 'codemode' interface instead of one tool per API operation"
    evidenceUrl: "https://developer.paddle.com/changelog/2026/remote-paddle-mcp-server"
  - layer: "Edge"
    name: "Cloudflare"
    confidence: likely
    evidence: "Our own observation (2026-11-02): responses from api.paddle.com, vendors.paddle.com, paddle.net, mcp.paddle.com, cdn.paddle.com and buy.paddle.com all carried server: cloudflare, with cf-ray showing the Narita (NRT) PoP"
  - layer: "Paddle.js delivery"
    name: "Amazon S3 + Amazon CloudFront (behind Cloudflare)"
    confidence: likely
    evidence: "Our own observation (2026-11-02): cdn.paddle.com/paddle/v2/paddle.js and buy.paddle.com returned x-amz-version-id and x-amz-replication-status, x-cache: Hit from cloudfront and an x-amz-cf-pop for a Narita CloudFront PoP, alongside a Cloudflare cf-ray"
  - layer: "Marketing site and developer docs"
    name: "Next.js on Netlify + Prismic"
    confidence: likely
    evidence: "Our own observation (2026-11-02): www.paddle.com returned server: Netlify and x-powered-by: Next.js, and its HTML contained _next/static assets, images from images.prismic.io and PrismicPreviewClient. developer.paddle.com also returned server: Netlify"
sources:
  - label: "Paddle: Pricing (5% + 50¢, FAQ)"
    url: "https://www.paddle.com/pricing"
    accessedAt: "2026-11-02"
  - label: "Paddle: Master Services Agreement (terms, last updated 2026-10-06)"
    url: "https://www.paddle.com/legal/terms"
    accessedAt: "2026-11-02"
  - label: "Paddle: About us (leadership and headline figures)"
    url: "https://www.paddle.com/about"
    accessedAt: "2026-11-02"
  - label: "Paddle Help Center: The legal relationship between Paddle and you"
    url: "https://www.paddle.com/help/start/intro-to-paddle/the-legal-relationship-between-paddle-and-you"
    accessedAt: "2026-11-02"
  - label: "Paddle Help Center: How Paddle is able to take on your VAT and tax responsibilities"
    url: "https://www.paddle.com/help/start/intro-to-paddle/how-paddle-is-able-to-take-on-your-vat-and-tax-responsibilities"
    accessedAt: "2026-11-02"
  - label: "Paddle Help Center: Acceptable Use Policy (what you are not allowed to sell)"
    url: "https://www.paddle.com/support/aup"
    accessedAt: "2026-11-02"
  - label: "Paddle Help Center: Which countries are supported by Paddle? (countries sellers cannot operate from)"
    url: "https://www.paddle.com/help/start/intro-to-paddle/which-countries-are-supported-by-paddle"
    accessedAt: "2026-11-02"
  - label: "Paddle Help Center: When and how do I get paid? (monthly payouts)"
    url: "https://www.paddle.com/help/manage/get-paid/when-and-how-do-i-get-paid"
    accessedAt: "2026-11-02"
  - label: "Paddle Help Center: Is there a fee taken for payouts?"
    url: "https://www.paddle.com/help/manage/get-paid/is-there-a-fee-taken-for-payouts"
    accessedAt: "2026-11-02"
  - label: "Paddle: Why has Paddle charged me? (page for buyers)"
    url: "https://www.paddle.com/about/why-has-paddle-charged-me"
    accessedAt: "2026-11-02"
  - label: "Paddle: Sales tax compliance software (tax and compliance)"
    url: "https://www.paddle.com/billing/tax-and-compliance"
    accessedAt: "2026-11-02"
  - label: "Paddle: Paddle vs Stripe (Paddle's own comparison page)"
    url: "https://www.paddle.com/compare/stripe"
    accessedAt: "2026-11-02"
  - label: "Paddle: Partnerships"
    url: "https://www.paddle.com/partners"
    accessedAt: "2026-11-02"
  - label: "Paddle Blog: What is a Merchant of Record? (2024-08-01)"
    url: "https://www.paddle.com/blog/what-is-merchant-of-record"
    accessedAt: "2026-11-02"
  - label: "Paddle Blog: Paddle turns 10 (2022-08-08)"
    url: "https://www.paddle.com/blog/paddle-turns-10-learnings-from-the-last-decade"
    accessedAt: "2026-11-02"
  - label: "Paddle Blog: We've raised $200m (2022-05-10)"
    url: "https://www.paddle.com/blog/weve-raised-200m-to-supercharge-saas-companies-global-growth"
    accessedAt: "2026-11-02"
  - label: "Paddle Blog: We've acquired ProfitWell (2022-05-25)"
    url: "https://www.paddle.com/blog/paddle-acquires-profitwell"
    accessedAt: "2026-11-02"
  - label: "Paddle Blog: CEO Transition (2023-04-20)"
    url: "https://www.paddle.com/blog/the-next-phase-of-paddle"
    accessedAt: "2026-11-02"
  - label: "Paddle Blog: Paddle raises $25M (2025-07-17)"
    url: "https://www.paddle.com/blog/paddle-raises-25m"
    accessedAt: "2026-11-02"
  - label: "Paddle Blog: Paddle launches AI Toolkit (2026-10-20)"
    url: "https://www.paddle.com/blog/paddle-launches-ai-toolkit-bringing-global-selling-into-ai-workflows"
    accessedAt: "2026-11-02"
  - label: "Paddle Developer Docs: llms.txt (Paddle Billing vs Paddle Classic, SDKs)"
    url: "https://developer.paddle.com/llms.txt"
    accessedAt: "2026-11-02"
  - label: "Paddle Developer Docs: Supported countries"
    url: "https://developer.paddle.com/concepts/sell/supported-countries-locales"
    accessedAt: "2026-11-02"
  - label: "Paddle Developer Docs: Supported currencies"
    url: "https://developer.paddle.com/concepts/sell/supported-currencies"
    accessedAt: "2026-11-02"
  - label: "Paddle Developer Docs: Payment methods"
    url: "https://developer.paddle.com/concepts/payment-methods"
    accessedAt: "2026-11-02"
  - label: "Paddle Developer Docs: API versioning"
    url: "https://developer.paddle.com/api-reference/about/versioning"
    accessedAt: "2026-11-02"
  - label: "Paddle Developer Changelog: The Paddle MCP server is now remote (2026-05-15)"
    url: "https://developer.paddle.com/changelog/2026/remote-paddle-mcp-server"
    accessedAt: "2026-11-02"
  - label: "Paddle Developer Changelog: Migrate Paddle Classic subscriptions to Paddle Billing (2025-04-15)"
    url: "https://developer.paddle.com/changelog/2025/classic-to-billing-migrations"
    accessedAt: "2026-11-02"
  - label: "Paddle.engineering: How we rebuilt Paddle for developers (2024-11-15)"
    url: "https://paddle.engineering/blog/how-we-rebuilt-paddle-for-developers"
    accessedAt: "2026-11-02"
  - label: "Paddle.engineering: Go microservices at Paddle (2026-01-28)"
    url: "https://paddle.engineering/blog/go-microservices-at-paddle-consistency-catalyst"
    accessedAt: "2026-11-02"
  - label: "Paddle.engineering: Payment routing part #1 (2024-07-18)"
    url: "https://paddle.engineering/blog/payment-routing-part-1-unifying-the-payments-lifecycle"
    accessedAt: "2026-11-02"
  - label: "Paddle.engineering: Payment routing part #2 (2024-08-12)"
    url: "https://paddle.engineering/blog/payment-routing-part-2-developing-paddles-rules-engine"
    accessedAt: "2026-11-02"
  - label: "Paddle.engineering: Behind webhooks at Paddle (2025-05-02)"
    url: "https://paddle.engineering/blog/hookdeck-podcast-event-delivery-scale"
    accessedAt: "2026-11-02"
  - label: "Paddle.engineering: How we migrated over a million subscriptions (2025-12-16)"
    url: "https://paddle.engineering/blog/self-serve-migrations"
    accessedAt: "2026-11-02"
  - label: "Paddle.engineering: Home page (sample webhook payload)"
    url: "https://paddle.engineering/"
    accessedAt: "2026-11-02"
  - label: "Stripe: Pricing (UK; Managed Payments 3.5%)"
    url: "https://stripe.com/gb/pricing"
    accessedAt: "2026-11-02"
  - label: "Stripe Docs: Managed Payments eligibility"
    url: "https://docs.stripe.com/payments/managed-payments/eligibility"
    accessedAt: "2026-11-02"
  - label: "Lemon Squeezy Blog: Stripe acquires Lemon Squeezy (2024-07-26)"
    url: "https://www.lemonsqueezy.com/blog/stripe-acquires-lemon-squeezy"
    accessedAt: "2026-11-02"
---

When you choose a payment service, you usually compare the fees and the cards it accepts. To understand Paddle, you have to ask an earlier question first: who is doing the selling? Paddle's terms say the developer appoints Paddle as the reseller of its product. The customer buys from Paddle, and Paddle buys from the developer. Each purchase contains two transactions, and the tax, the refunds, the chargebacks and the customer's questions all land first on Paddle, because Paddle is the seller. The single-line pricing page, 5% + 50¢, follows from that position. We have not signed up for Paddle and used it; we read its public terms, help center, docs and blogs on November 2, 2026 and set out what they say.

## Service overview

Paddle takes on checkout, subscription billing, invoicing, sales tax and VAT, fraud prevention and buyer support under one contract, for companies that sell digital products such as SaaS, apps, games and downloadable software. Paddle calls itself "the complete Merchant of Record." A merchant of record (MoR) is the business that is legally the seller to the customer and carries the liabilities that come with the payment.

:::fact
In a Paddle blog post (2022-08-08), founder Christian Owens writes that he and Harrison Rose founded Paddle in August 2012. According to Paddle's engineering blog (2024-11-15), Paddle started out to solve how hard it was to sell online to a global audience, especially on macOS; it became the de facto licensing solution for Mac sellers and then expanded into subscription billing for SaaS. A blog post dated May 10, 2022 announced a $200m Series D led by KKR at a $1.4bn valuation, bringing total funding to $293m. On May 25 of that year Paddle announced it had acquired ProfitWell, the subscription analytics company, in a deal valued at over $200m in cash and equity. On April 20, 2023, Owens stepped down as CEO to become Executive Chairman, and COO Jimmy Fitzgerald became CEO; in that post Owens wrote that Paddle was approaching $100 million in revenue. A July 17, 2025 announcement said Paddle had raised $25M from CIBC Innovation Banking, had grown 40% year over year, had a team of more than 300 and served more than 6,000 companies. An October 20, 2026 announcement puts the customer count at more than 10,000.
:::

:::fact
Paddle's Master Services Agreement (last updated October 6, 2026; accessed 2026-11-02) states that the seller ("Supplier") appoints Paddle as its non-exclusive reseller of the Product across all territories. The Paddle entity that is the counterparty is Paddle.com Inc. in the US if the buyer completes the transaction in the United States; Paddle Payments Limited in Ireland if the seller is a UK or Isle of Man business and the buyer is outside the US; and Paddle.com Market Limited in England in all other cases. The agreement is governed by English law, with exclusive jurisdiction for the English courts. Clause 4.1 says the reseller structure is what allows Paddle to handle sales tax collection, reporting and remittance, and lets Paddle deduct sales tax from sales proceeds and remit it. Clause 3.4 says that, as merchant of record, Paddle reserves the right to set the price at which the product is offered to buyers. The help center likewise describes Paddle as an authorized reseller rather than a "payment provider," which typically manages order processing and payment; VAT and sales tax collection, filing and payment; order support such as invoices, receipts and lost licenses; and fulfilment by download, license key or webhook.
:::

:::fact
According to the pricing page (accessed 2026-11-02), the standard price is "5% + 50¢ per Checkout transaction," with no monthly fees, migration fees or hidden extras. Included are checkout, subscriptions, multi-currency payments, sales tax and VAT compliance, fraud protection, reporting, handling of buyers' payment and cancellation queries, and a migration service. Products under $10 can get bespoke pricing, and custom pricing is offered for high-volume businesses. Clause 3.2 of the terms defines the amount Paddle pays the seller as the SRP less sales tax, the "Paddle Discount" and other charges, and sets the Paddle Discount at "5% of SRP plus $0.50" for Paddle Checkout and "3.5% of SRP" for Paddle Invoicing paid by bank transfer. SRP is defined as "the price paid by the Buyer." Checkout Recovery, which brings back buyers who abandoned checkout, costs 10% of each recovered checkout. When a refund or chargeback happens, the seller owes the full amount plus processing costs, and for a chargeback or pre-chargeback alert a fee of up to 20 in GBP, USD or EUR (40 in AUD or CAD) depending on the transaction currency.
:::

:::pull
What Paddle sells is not payment processing but being the seller. The 5% + 50¢ also pays for the tax filings, the refund desk and standing in the line of fire for chargebacks.
:::

::scorecard

## UX analysis

Paddle's UX is designed not only around the developer's screens but around what the buyer sees, because when Paddle is the seller, the buyer who spots it on a card statement contacts Paddle.

- **One line of pricing.** The standard plan on the pricing page shows one number, 5% + 50¢, with no rows for card brands, domestic versus international cards or payment methods. The FAQ says there is no extra cost for adding payment methods, migrating subscriptions or payment-related buyer support. The page invites the seller to compare it not with a card fee but with the total cost of building tax and billing in-house.
- **Answering the buyer before they ask.** The site's top navigation always carries a "Why has Paddle charged me?" link for buyers. That page explains that a Paddle charge on a statement usually means the person bought a product from one of the software companies Paddle works with, and sends them to paddle.net to look up the transaction, cancel or request a refund. Paddle treats the moment when a buyer feels "charged by a company I don't know" as part of being an MoR, and owns it.
- **Fewer fields at checkout.** The supported-countries page in the developer docs says Paddle Checkout doesn't ask for a full address, only the country and, in some countries, a ZIP or postal code or region, which are collected only where tax calculation, fraud prevention or banking compliance require them. Payment methods are chosen automatically from the buyer's country, currency and device: iDEAL appears only to buyers in the Netherlands paying in euros, Apple Pay only on compatible Apple devices or browsers.
- **An entrance built for agents, too.** Every page in the developer docs has a Markdown sibling at the same URL plus .md, and there is an llms.txt index for AI agents. On May 15, 2026 the MCP server became a hosted remote service, and on October 20, 2026 Paddle announced an "AI Toolkit" for setting up and testing billing from Claude Code, Codex, Cursor and Gemini CLI.

:::fact
The "About us" page (accessed 2026-11-02) lists more than $6B in transactions processed, more than 10,000 digital businesses, a 94% average payment acceptance rate, and $112M in sales tax remitted globally last year. The "Paddle vs Stripe" page on the same site claims 180 million transactions processed, "$6 billion in sales taxes remitted last year," and compliance in 270+ tax jurisdictions. The tax and compliance page says Paddle registers, charges and remits sales tax in "over 100 jurisdictions"; the developer docs say you can sell in over 200 countries and territories; and the October 20, 2026 announcement describes "more than 300 markets" that customers sell to. The partnerships page shows 6,000+ sellers, 245 countries and territories and $1b+ in payments processed.
:::

:::guess
The figures likely differ because they count different things. "Countries and territories," "tax jurisdictions" and "markets" are not the same unit: a country such as the US contains many tax jurisdictions, so a jurisdiction count can exceed a country count. Set next to the About page's "$6B+ transactions processed" and "$112M sales tax remitted last year," however, the comparison page's "$6 billion in sales taxes remitted last year" looks to us like a transaction figure that ended up in the tax row. The partnerships page's 6,000 sellers and $1b+ sit close to the 6,000-plus of the July 2025 announcement and are probably older figures that were never updated. A reader is safest giving priority to dated announcements and the terms, and checking the unit and date of any marketing-page number before relying on it.
:::

:::guess
Putting a buyer-facing link in the top navigation is presumably a response to the MoR model generating its own support volume. Paddle sells thousands of companies' products under its own name, so the name buyers see on their statements is an unfamiliar "Paddle." That the buyer page answers the question "Am I being scammed?" suggests the confusion is real. From the developer's side, this is the benefit of handing the first line of cancellations and refunds to Paddle, and it is likely what the pricing page means when it lists handling of buyers' payment and cancellation queries as included.
:::

## Tech stack

::techstack

:::fact
According to the developer docs index (accessed 2026-11-02), the current product is Paddle Billing: anyone who signed up after August 8, 2023 has Billing, and new signups for the legacy Paddle Classic are not allowed. They are separate products. Billing's API is JSON at api.paddle.com; Classic's is form-encoded at vendors.paddle.com/api. Billing supports multi-product subscriptions, country-specific prices, automatic currency conversion and a customer portal, and instead of Paddle handling license keys and downloads as in Classic, you build fulfilment on transaction webhooks. The API version is set with a Paddle-Version header and the current version is 1. Paddle releases a new version only for breaking changes, never changes an integration's version automatically, and says it does not deprecate older versions right now.
:::

:::fact
Paddle's engineering blog (2024-11-15) says that in 2022 the company confronted its technical and product debt and rebuilt most of its core product, launching it as Paddle Billing. It looks back frankly: the API was "sub-standard," developer tooling was "non-existent," and the docs were not clear enough. Paddle made "API first," defining features in an API spec before building them, the standard, and runs an API Working Group to discuss changes. A post from December 16, 2025 says that over two years Paddle migrated more than 1.3 million subscriptions from Classic to Billing, turning a process that had taken 2-3 weeks of daily calls with customers into a self-serve dashboard feature, and that it has shipped close to 200 Billing-only updates since launch.
:::

:::fact
According to the engineering blog post of January 28, 2026, Paddle was initially built as a complex monolith, which became a bottleneck for every team, so it began moving to microservices. Within 18 months it had a mix of REST and gRPC, PostgreSQL and MySQL, and a sprawl of deployment platforms: ECS, Fargate, Lambda, Elastic Beanstalk and Heroku. Paddle responded by building toolkits for Go services: HTTP handlers, a sidecar that delivers SQS messages to HTTP endpoints, configuration loading, Postgres connection and transaction management on sqlx, and tests against embedded Postgres. With them, OpenTelemetry went in within weeks and reached every service in about three months. The post says Paddle has about 90 people in engineering, 2-4 of them in platform engineering.
:::

:::fact
Two engineering posts on payment routing (2024-07-18 and 2024-08-12) say that, as a merchant of record, Paddle integrates with several independent payment service providers (PSPs) and holds merchant accounts in its own name in several regions. Accepting payments through a merchant account close to the buyer, "local acquiring," makes transactions more likely to count as domestic, which raises acceptance rates and lowers card-network fees. Paddle connects to more than one PSP in the same region because providers offer different payment methods, acceptance rates differ markedly even within a region, and redundancy protects against outages, regulatory problems or a provider's failure. For every payment a rules engine chooses a destination, a pairing of PSP and merchant account, using fallback strategies that retry at another destination and weighted strategies that compare destinations' performance. Each outcome is recorded with the payment method, PSP, merchant account, Paddle legal entity and the version of the rule that matched.
:::

:::fact
An engineering post from May 2, 2025 says Paddle now delivers every day the webhook volume that was a Black Friday stress test two years earlier. Retries to failing destinations go to a low-priority queue so one problematic destination doesn't slow delivery for everyone, idempotency uses Redis locks, and delivery holds three nines on a 2-second SLO. The developer changelog (2026-05-15) says the Paddle MCP server is now a hosted remote service with separate sandbox and live endpoints, authenticated with an API key as a Bearer token. Rather than exposing each API operation as its own tool, it uses a "codemode" interface with three tools: search to look up API methods, execute to run a JavaScript async function that chains several API calls, and report_missing_tool to flag gaps.
:::

:::fact
In our own observation (2026-11-02), api.paddle.com, vendors.paddle.com, paddle.net and mcp.paddle.com were served through Cloudflare, with cf-ray showing the Narita PoP. The checkout script at cdn.paddle.com/paddle/v2/paddle.js and buy.paddle.com returned, besides a Cloudflare cf-ray, an Amazon S3 version ID and headers showing a CloudFront cache hit. www.paddle.com and developer.paddle.com returned server: Netlify, and the HTML of www.paddle.com contained Next.js assets and Prismic images.
:::

:::guess
The routing posts suggest that being an MoR shapes the technology itself. In the usual processor setup, the merchant account belongs to the seller, and which acquirer is used in which country is bound by the seller's own contracts. With Paddle, the seller is Paddle, so it can hold merchant accounts in its own name region by region and switch destinations transaction by transaction. The About page's "94% average payment acceptance rate" and the comparison page's claim of "+2-6% higher authorization rates" are presumably written on the strength of this mechanism, though the public pages do not say how they were measured.
:::

:::guess
The home page of Paddle's engineering blog shows a sample transaction.completed webhook payload. Its numbers are a subtotal of $599.00, tax of $53.15, a total of $652.15 and a fee of $33.11. By our arithmetic, 5% of $652.15 plus $0.50 comes to $33.11, which matches a fee charged on the tax-inclusive total, and it is consistent with the terms defining SRP, the base for the fee, as "the price paid by the Buyer." The sample is presumably illustrative data, though, and sellers should check against their own transactions whether real charges work the same way. Paddle's comparison page points out that Stripe's costs are "calculated on the tax-inclusive amount"; if the sample is representative, Paddle's 5% is applied to the tax-inclusive amount as well.
:::

## Business model

Paddle is private, so what the terms, help center and announcements show is how it charges and how it manages the risk that comes with being the seller.

:::fact
According to the help center (accessed 2026-11-02), sellers cannot withdraw their balance on demand; payouts are monthly. On the 1st of each month, a balance above the seller's threshold (minimum $100, adjustable up to $100,000; £100 or €100 for sterling or euro balances) becomes a payout, Paddle sends it between the 2nd and the 15th, and it can take up to 3 more working days to arrive. Balances below the threshold carry over. Payouts go by wire transfer or Payoneer. When the payout currency matches the bank's local currency (USD in the US, EUR in the eurozone, GBP in the UK, CAD in Canada, AUD in Australia) local networks are used and the transfer is typically free; otherwise it goes by SWIFT with a $/€/£15 fee. Receiving a currency other than the balance currency can add a conversion margin of up to 1.5%. The terms set the seller's Payment Currency as one of USD, EUR, GBP, CAD or AUD, and allow a dormancy charge after six consecutive months without sales.
:::

:::fact
According to the developer docs (accessed 2026-11-02), buyers can pay in more than 30 currencies, including Japanese yen with a minimum charge of ¥100. Sellers can hold a balance in only five currencies, USD, EUR, GBP, AUD and CAD; payouts can also be received in CHF, CNY, CZK, DKK, HUF, PLN, SEK and ZAR, but the yen is not on the payout list. In the supported-countries table, Japan is listed with JPY and tax-inclusive prices. Payment methods include cards, Apple Pay, Google Pay and PayPal, plus iDEAL | Wero, Bancontact, BLIK, MB WAY, Pix, UPI, Alipay, WeChat Pay, KakaoPay, Naver Pay, Payco and Korean local cards, Samsung Pay and bank transfer. As far as we could find, Paddle's official site has no Japanese-language pages, and the pricing page shows only the dollar-denominated "5% + 50¢."
:::

:::fact
Paddle's Acceptable Use Policy (accessed 2026-11-02) says Paddle is built to serve software companies, "including B2B SaaS, Consumer Software, and Games," and is not a good fit for companies whose primary offering is human services such as consultation, support or design, or physical goods. Prohibited categories include products requiring physical delivery; human services not related to a software offering (pure consulting or advisory services, legal advice, coaching, IT services, access to a community of experts); offerings with no bona fide software or service, such as donations, crowdfunding, advertising and sponsorship; marketplaces that let non-Paddle sellers sell; regulated financial products; payment services, including acting as a merchant of record; gambling; and adult content. The help center lists countries sellers cannot operate from, including Russia, Belarus, Iran, North Korea and Cuba. The terms let Paddle suspend sales or terminate if it judges a product's chargeback or refund rate excessive, and retain supplier fees to cover future refunds and chargebacks.
:::

:::fact
On the competitive side, Stripe's UK pricing page (accessed 2026-11-02) describes Managed Payments as "Stripe's merchant of record solution" and prices it at 3.5% per successful transaction in addition to Payments fees. Stripe's docs list the business locations eligible for Managed Payments, which include the US, Canada, the UK, the Netherlands and Japan. Lemon Squeezy's blog (2024-07-26) announced that Stripe had acquired Lemon Squeezy. Paddle's comparison page calls Managed Payments "a positive step" while arguing that for a subscription business Stripe's costs stack up to 7-9% per transaction, calculated on the tax-inclusive amount. The partnerships page lists three ways to partner: investors, integrations and referrals; we could not find referral commission terms on the public pages.
:::

:::guess
The 5% + 50¢ presumably covers the cost paid to card networks and acquirers, tax registration and filing, fraud and chargeback losses, and buyer-support staff, plus Paddle's margin. A single line spares the seller from watching cost swings, while Paddle absorbs the differences in cost across countries and card types itself. The better local acquiring and routing get at lowering costs and raising acceptance, the larger Paddle's share inside the same 5% becomes. Bespoke pricing for products under $10 is likely there because the fixed 50¢ gets too heavy on small tickets.
:::

:::guess
The length of the prohibited list in the Acceptable Use Policy is likely the other side of the liability an MoR carries. Because Paddle is the seller, if a product turns out to be deceptive or draws heavy chargebacks, it is Paddle that answers to card networks and tax authorities. Turning away human services and physical goods and sticking to software presumably keeps the business to products whose tax classification is relatively clear, whose delivery can be confirmed through webhooks or licenses, and whose refunds are easier to judge, so the risk fits inside the 5%. Monthly payouts and the right to retain supplier fees likely serve the same purpose, using the seller's balance to absorb the time it takes for refund and chargeback claims to arrive.
:::

:::guess
With Stripe offering an MoR for an extra 3.5%, Paddle's point of comparison has likely shifted from "Stripe, where you do tax yourself" to "Stripe, where you can choose an MoR." Paddle's comparison page, which estimates Stripe's stacked costs at 7-9% on the tax-inclusive amount and calls Paddle "a complete Merchant of Record," reads as a response to that shift. Meanwhile, since 2025 Paddle has emphasized web payments outside Apple's App Store and serving the small teams that build with AI. The AI Toolkit in October 2026, and the announcement that native Usage-Based Billing will enter private preview in early 2027, look like a move to take usage-based pricing for AI products, where tax treatment is even more involved, into the MoR model. For developers in Japan, the inability to hold a balance in yen and the absence of a Japanese-language support channel are likely conditions to check before signing up. Sales tax and consumption tax treatment differs from business to business, so the reliable route is to confirm with a tax professional.
:::

Dissecting Paddle reveals less a payment company than a company that contracts to play the role of the seller. On top of a contract that buys a developer's product and resells it, Paddle withholds and remits tax, takes the buyer's questions and stands in front of chargebacks; it holds that risk down with an acceptable use policy and monthly payouts, and polishes cost and acceptance with several PSPs and merchant accounts in its own name. The one line reading 5% + 50¢ is the price of all of it. Now that Stripe has reached for the same role, the question Paddle faces is how deeply, in how many countries and how cheaply it can keep doing the job of being the seller.
