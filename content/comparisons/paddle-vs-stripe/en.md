---
title: "Paddle vs Stripe: Merchant of Record or Payment Processor? Fees, Sales Tax and VAT Liability, and Stripe Managed Payments Compared"
description: "A comparison of Paddle and Stripe based only on their official pricing pages, terms and docs (accessed 2026-11-02). Paddle resells your product as the seller and charges 5% + 50¢ per checkout transaction, covering sales tax, VAT, chargebacks and buyer support. Stripe, by default, processes payments while you remain the seller, calculates tax with Stripe Tax (from 0.5%), and adds 3.5% per transaction if you want a merchant of record through Managed Payments. We line up where tax liability still stays with you, whose name buyers see, what you can sell and from where, and how often and in which currencies you get paid, then sort out which kind of business fits which. This is not tax advice."
lead: "Start selling software or SaaS to customers abroad and, before the card fees, you run into a different question: who registers for, collects and remits sales tax and VAT in each country? Paddle's answer is to become the seller itself. Stripe long sat on the other side, processing payments and handing you tax calculation as a tool, but it now also offers to take on the role of seller through Managed Payments. We read both companies' official pages on November 2, 2026, set fees, tax liability, the seller's name, what you can sell and payouts side by side, and dissect where the two models actually differ."
slugA: "paddle"
slugB: "stripe"
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
expires:
  - date: "2027-03-31"
    claim: "Paddle's announcement (2026-10-20) that native Usage-Based Billing enters private preview in early 2027"
sources:
  - label: "Paddle: Pricing (5% + 50¢)"
    url: "https://www.paddle.com/pricing"
    accessedAt: "2026-11-02"
  - label: "Paddle: Master Services Agreement (terms, last updated 2026-10-06)"
    url: "https://www.paddle.com/legal/terms"
    accessedAt: "2026-11-02"
  - label: "Paddle Help Center: The legal relationship between Paddle and you"
    url: "https://www.paddle.com/help/start/intro-to-paddle/the-legal-relationship-between-paddle-and-you"
    accessedAt: "2026-11-02"
  - label: "Paddle Help Center: Acceptable Use Policy"
    url: "https://www.paddle.com/support/aup"
    accessedAt: "2026-11-02"
  - label: "Paddle Help Center: Which countries are supported by Paddle?"
    url: "https://www.paddle.com/help/start/intro-to-paddle/which-countries-are-supported-by-paddle"
    accessedAt: "2026-11-02"
  - label: "Paddle Help Center: When and how do I get paid?"
    url: "https://www.paddle.com/help/manage/get-paid/when-and-how-do-i-get-paid"
    accessedAt: "2026-11-02"
  - label: "Paddle: Why has Paddle charged me?"
    url: "https://www.paddle.com/about/why-has-paddle-charged-me"
    accessedAt: "2026-11-02"
  - label: "Paddle: Sales tax compliance software"
    url: "https://www.paddle.com/billing/tax-and-compliance"
    accessedAt: "2026-11-02"
  - label: "Paddle: Paddle vs Stripe (Paddle's own comparison page)"
    url: "https://www.paddle.com/compare/stripe"
    accessedAt: "2026-11-02"
  - label: "Paddle Developer Docs: Supported countries"
    url: "https://developer.paddle.com/concepts/sell/supported-countries-locales"
    accessedAt: "2026-11-02"
  - label: "Paddle Developer Docs: Supported currencies"
    url: "https://developer.paddle.com/concepts/sell/supported-currencies"
    accessedAt: "2026-11-02"
  - label: "Paddle Blog: Paddle launches AI Toolkit (2026-10-20)"
    url: "https://www.paddle.com/blog/paddle-launches-ai-toolkit-bringing-global-selling-into-ai-workflows"
    accessedAt: "2026-11-02"
  - label: "Stripe: Pricing (UK)"
    url: "https://stripe.com/gb/pricing"
    accessedAt: "2026-11-02"
  - label: "Stripe: Pricing (Netherlands)"
    url: "https://stripe.com/en-nl/pricing"
    accessedAt: "2026-11-02"
  - label: "Stripe: Pricing (Canada)"
    url: "https://stripe.com/en-ca/pricing"
    accessedAt: "2026-11-02"
  - label: "Stripe: Pricing (Japan)"
    url: "https://stripe.com/jp/pricing"
    accessedAt: "2026-11-02"
  - label: "Stripe Docs: Managed Payments"
    url: "https://docs.stripe.com/payments/managed-payments"
    accessedAt: "2026-11-02"
  - label: "Stripe Docs: How Managed Payments works"
    url: "https://docs.stripe.com/payments/managed-payments/how-it-works"
    accessedAt: "2026-11-02"
  - label: "Stripe Docs: Managed Payments eligibility"
    url: "https://docs.stripe.com/payments/managed-payments/eligibility"
    accessedAt: "2026-11-02"
  - label: "Stripe Docs: Managed Payments tax compliance"
    url: "https://docs.stripe.com/payments/managed-payments/tax-compliance"
    accessedAt: "2026-11-02"
  - label: "Stripe Docs: Managed Payments changelog"
    url: "https://docs.stripe.com/payments/managed-payments/changelog"
    accessedAt: "2026-11-02"
  - label: "Stripe Docs: Payouts (schedules and settlement timing)"
    url: "https://docs.stripe.com/payouts"
    accessedAt: "2026-11-02"
  - label: "Stripe Newsroom: Stripe 2025 annual letter (2026-02)"
    url: "https://stripe.com/newsroom/news/stripe-2025-update"
    accessedAt: "2026-11-02"
---

[Paddle](/en/articles/paddle) and [Stripe](/en/articles/stripe) both come up as "what you use to bill for SaaS or apps." But the role each takes on is not the same. Paddle becomes the seller by reselling the developer's product, so tax, chargebacks and buyers' questions land on Paddle first. In Stripe's default setup the seller is the developer; Stripe processes the payment and hands over components for tax calculation and billing. Now that Stripe has launched Managed Payments, which takes on the role of seller as a merchant of record (MoR), the axis of comparison has moved from "what's the rate" to "who takes on how much." This piece reads both companies' official pricing pages, terms and docs as of November 2, 2026 and sets out what they say. We have not signed up for and used either service. Prices and conditions change, so always check the official pages before you sign up. Sales tax, VAT and consumption tax treatment differs from business to business, and nothing here is tax advice.

## Two models: become the seller, or process the payment

:::fact
Paddle's terms (last updated October 6, 2026) state that the seller appoints Paddle as the non-exclusive reseller of its product, and that the reseller structure is what allows Paddle to handle sales tax collection, reporting and remittance and to deduct sales tax from sales proceeds and remit it. Paddle also reserves the right, as merchant of record, to set the price at which the product is offered. The help center describes Paddle as an authorized reseller rather than a "payment provider." According to Paddle's page for buyers, the buyer is purchasing from Paddle, and Paddle's name appears on the card statement.
:::

:::fact
Stripe's docs (accessed 2026-11-02) describe Managed Payments as "the Stripe merchant of record solution," letting you sell SaaS, software and digital content through Stripe Checkout or Payment Links without operating local business entities in each country. Stripe handles sales tax, VAT and GST compliance, fraud prevention, dispute management and transaction-level customer support. According to the Managed Payments changelog, it became generally available to businesses in 39 countries on April 22, 2026. The eligibility page says that if your product isn't eligible for Managed Payments, you can use Stripe Tax to manage your compliance requirements. On Stripe's pricing page, the Stripe Tax Basic plan "includes only automated tax calculations," while Tax Complete covers threshold monitoring, registrations, calculations and filings.
:::

:::pull
With Paddle, the seller is Paddle from start to finish. With Stripe, you choose whether to stay the seller or hand that role to Stripe, transaction by transaction.
:::

## The fees, side by side

:::fact
Below are the figures on Paddle's pricing page and terms and on Stripe's UK, Netherlands, Canada and Japan pricing pages (all accessed 2026-11-02), rearranged by us. Stripe's US pricing page redirected to the Japan page from our location and could not be read, so US rates are not included.

| Item | Paddle | Stripe |
| --- | --- | --- |
| Base fee | 5% + 50¢ per Checkout transaction. No monthly fee | UK: 1.5% + 20p for standard UK cards, 2.5% + 20p for EEA cards, 3.15% + 20p for other international cards. Netherlands: 1.5% + €0.25 for standard EEA cards, 2.5% + €0.25 for UK cards. Canada: 2.9% + CA$0.30 for domestic cards, plus 0.8% for international cards. Japan: 3.6% for cards |
| Currency conversion | Under the terms, a conversion margin of up to 1.5% if the seller is paid in a currency other than the balance currency | UK, Netherlands, Canada, Japan: +2% if currency conversion is required |
| Subscription billing | Included in 5% + 50¢ | Billing pay-as-you-go: 0.7% of Billing volume |
| Tax calculation and collection | Included in 5% + 50¢; Paddle registers, collects and remits | Tax Basic (no-code): 0.5% per transaction where you're registered to collect taxes. UK: Tax Complete from £70 per month on a 1-year contract |
| Merchant of record | Included in 5% + 50¢ | Managed Payments: 3.5% per successful transaction in addition to Payments fees |
| Invoices | Invoices paid by bank transfer: 3.5% of SRP | Invoicing Starter: 0.4% per paid invoice |
| Chargebacks | Full amount plus processing costs, and a fee of up to 20 in GBP, USD or EUR (40 in AUD or CAD) per chargeback | UK: £20 dispute received fee. Japan: ¥1,500 per dispute |
| Small tickets and high volume | Bespoke pricing on request for products under $10; custom pricing for high volume | Custom packages for large volume (IC+, volume discounts and more) |
:::

:::fact
Paddle's terms define the suggested retail price (SRP), the base for its fee, as "the price paid by the Buyer." Paddle's comparison page argues that a subscription business on Stripe ends up paying 7-9% per transaction, calculated on the tax-inclusive amount, and shows an "effective total" of 5% + 50¢ for Paddle against "more than 7.1% + 30¢" for Stripe. Stripe's pricing pages show no row with such a total.
:::

:::guess
Paddle's "7-9%" is presumably an estimate that stacks Stripe's international card fee, currency conversion, Billing, Tax and Managed Payments. Which rows actually stack depends on where the seller is based, the buyer's country and card, the currency and the products used. A UK business selling a sterling subscription to UK buyers on UK cards, for example, would on paper pay 1.5% + 20p plus 0.7% for Billing and 0.5% for Tax, but registering and filing tax would remain its own job. Conversely, a US business selling to consumers worldwide that does not want to register for VAT and GST country by country is comparing Managed Payments' extra 3.5% with Paddle's 5% + 50¢. The pages we read did not say whether Billing's 0.7% is charged separately on Managed Payments transactions. A fair comparison likely needs the rate, the work that stays with you, and the cost of tax registrations in the same table.
:::

## How much tax liability actually moves

:::fact
Paddle's tax and compliance page (accessed 2026-11-02) says Paddle registers, charges and remits sales tax in "over 100 jurisdictions"; its comparison page says "270+ tax jurisdictions," and the October 20, 2026 announcement describes "more than 300 markets" that customers sell to. The developer docs say you can sell in over 200 countries and territories and that Paddle calculates taxes and handles sales tax liability for all countries and currencies. In the supported-countries table, Japan, the UK and the Netherlands are tax-inclusive, while the US and Canada are tax-exclusive.
:::

:::fact
According to Stripe's docs (accessed 2026-11-02), Managed Payments calculates and collects sales tax, VAT and GST on digital products, registers and files returns, and remits the tax in more than 80 countries; the pricing page puts it at "more than 75 countries." For transactions in countries where Managed Payments doesn't handle indirect tax compliance, the seller remains responsible, and Stripe Tax calculation can be used for those transactions at no additional charge. For domestic sales, two of the countries where Managed Payments is available are carved out: Singapore (domestic B2B transactions) and Japan (all domestic transactions). The docs state plainly that a business based in Japan is responsible for calculating, collecting, filing and remitting taxes on domestic sales to customers in Japan. On refunds, Stripe must keep remitting the original sales tax in certain jurisdictions, so the seller's balance is reduced by that amount.
:::

:::guess
"It's an MoR, so I don't have to think about tax" likely holds only with conditions on either service. Paddle gives a broad coverage figure, but it is written in different units, jurisdictions, countries and markets, so you need to check the supported-countries list for the countries where your buyers are. Stripe Managed Payments explicitly excludes domestic sales by Japan-based businesses, so a Japanese developer selling to Japanese customers has to handle consumption tax on that part. We did not find a Paddle page that specifically explains how sales by a Japan-based business to buyers in Japan are treated. Whichever you choose, the reliable route is to map out which countries your revenue comes from first and confirm with a tax professional.
:::

## Whose name the buyer sees as the seller

:::fact
Paddle's page for buyers explains that a Paddle charge on a card statement means the person bought a product from one of the software companies Paddle works with, and points them to paddle.net to look up the transaction, cancel or request a refund. Paddle's terms require the seller's website to clearly reflect Paddle's status as reseller. According to Stripe's docs, in Managed Payments transactions buyers interact with Link at checkout, on receipts and for post-purchase support; they see Link as the merchant of record, and purchases are shown as "Sold through Link." The statement descriptor reads "LINK.COM* [your statement descriptor]," receipts, invoices and refund notices come from Link, and custom domains aren't supported on Managed Payments checkouts. Stripe says that if it needs input from you on a support request and you don't respond within 48 hours, it might issue a refund without your approval.
:::

:::guess
With either MoR, the first seller name the buyer sees is no longer yours: it is "Paddle" on Paddle and "Link" on Stripe Managed Payments. For the developer, this means questions from buyers looking at their statements, and refund requests over "charges I don't recognize," go to the MoR's desk instead of yours. A business that wants its own brand to carry all the way through the statement and the checkout has a reason to stay the seller on standard Stripe.
:::

## What you can sell, and from where

:::fact
Paddle's Acceptable Use Policy (accessed 2026-11-02) says Paddle serves software companies, "including B2B SaaS, Consumer Software, and Games," and prohibits products requiring physical delivery, human services not related to a software offering (consulting, coaching, IT services and the like), donations and crowdfunding, marketplaces that let non-Paddle sellers sell, regulated financial products and payment services, among others. It lists countries sellers cannot operate from, including Russia, Belarus, Iran, North Korea and Cuba. On the buyer side, the supported-countries table in the developer docs lists 229 countries and territories, including China, and 23 unsupported ones, including Russia and Iran.
:::

:::fact
According to Stripe's docs (accessed 2026-11-02), access to Managed Payments follows an eligibility review, and supported business locations include the US, Canada, the UK, the Netherlands, Germany, France, Ireland, Australia, Hong Kong, Japan and Singapore. Eligible products are software, video games, digital media such as e-books and audio or video content, online courses, and electronically supplied services such as website hosting; physical goods, professional services such as consulting, marketing, design, development or tech support, and live in-person events are not supported. A service that involves human intervention, such as live 1-1 coaching, also does not qualify. Only direct integrations are supported, not Connect platforms or platform-controlled accounts. Customers can buy from more than 195 countries and territories, except restricted ones including China, Cuba, Iran, North Korea, Russia and Syria. On June 2, 2026, tax codes for AI-as-a-service products became eligible.
:::

:::guess
The range of products the two MoRs accept is likely quite similar: digital products without human involvement. Both narrow themselves to products whose tax classification is clear and whose delivery can be verified by a system. The differences sit at the edges. In the buyer-country lists, Paddle includes buyers in China, while Stripe Managed Payments restricts China, and for a product with many Chinese buyers that one row can decide the choice. On the other hand, SaaS bundled with consulting, and marketplace businesses, fit neither MoR, so selling as yourself on standard Stripe with Stripe Tax is presumably the realistic option.
:::

## How often, and in which currencies, you get paid

:::fact
According to Paddle's help center (accessed 2026-11-02), payouts are monthly. On the 1st of each month, a balance above the seller's threshold (minimum $100, adjustable up to $100,000) becomes a payout, it is sent by the 15th, and it can take up to 3 more working days to arrive. Sellers cannot withdraw on demand. Balances can be held in five currencies, USD, EUR, GBP, AUD and CAD, and the yen does not appear on the payout currency list in the developer docs. Buyers can pay in more than 30 currencies, including the yen.
:::

:::fact
Stripe's payouts docs (accessed 2026-11-02) let you choose daily, weekly, monthly or manual payouts, and the time before funds become available is set by country. The initial settlement timing is 7 calendar days in Canada, Japan, the Netherlands and the UK, and 2 business days in the US; after that the default is 3 business days in Canada, the Netherlands and the UK and 4 business days in Japan. In Japan daily payouts aren't available, the default schedule is manual, and weekly and monthly schedules can be chosen. Japanese payouts go to a futsū or tōza account in your legal entity's name; virtual account services that don't open accounts in your name, such as Wise and Payoneer, aren't supported.
:::

:::guess
The difference in payout design likely mirrors the difference between the models. Paddle, as the seller, receives refund and chargeback claims after the fact, so it builds the balance for a month before paying out. In Stripe's default setup the seller carries that liability, so payouts every few business days are available. A small business that runs its cash flow on weekly payouts and one that is fine with a monthly close will rate the same fee differently. A Japanese developer on Paddle should expect to be paid in dollars or euros and to convert into yen through their own bank or transfer service.
:::

## Which fits which kind of business

What follows is our reading of the fees and conditions above. It does not rank the two; it shows which conditions of which model come into play for each shape of business.

:::guess
- A small team selling SaaS or downloadable software to people and companies worldwide that does not want to own sales tax and VAT registrations and filings in each country likely has two candidates: Paddle or Stripe Managed Payments. On paper, Paddle is one line, 5% + 50¢, while Managed Payments adds 3.5% to the local card fee; which is cheaper depends on the buyer's country, card and price point.
- For low-priced products (in-app purchases of a few dollars, plans under $10), Paddle's fixed 50¢ weighs heavily. Paddle offers bespoke pricing for products under $10, so it is likely worth getting a quote before signing up.
- A business already running payments or Billing on Stripe can try an MoR on selected markets or products by adding Managed Payments to Checkout or Payment Links; Stripe's pricing page says it can be used for all transactions or just for specific markets and products. Managed Payments does assume Stripe Checkout or Payment Links, though, and custom domains aren't supported.
- For products with many buyers in China, the fact that Paddle's buyer list includes China and Stripe Managed Payments restricts it comes into play.
- A developer based in Japan who also sells to Japanese customers handles tax on those domestic sales themselves under Stripe Managed Payments, and cannot hold a yen balance on Paddle. On either, the consumption tax treatment of domestic sales is likely something to confirm with a tax professional.
- Contracts that bundle consulting or implementation, marketplaces and anything involving physical goods fall outside both MoRs, so selling as yourself on standard Stripe with Stripe Tax is presumably the realistic setup. Tax registration and filing then stay with your company.
- A business that wants its own brand on the statement and the checkout likely fits standard Stripe better than an MoR, where the seller's name becomes Paddle or Link.
:::

## Why the two are shaped differently

:::fact
According to [our Paddle dissection](/en/articles/paddle), Paddle was founded in 2012, started with license sales for Mac software and expanded as an MoR into SaaS billing. In an announcement on October 20, 2026, Paddle launched an AI Toolkit for setting up billing from AI tools and said native Usage-Based Billing would enter private preview in early 2027. According to Stripe's 2025 annual letter (February 2026), total payment volume on Stripe grew 34% year over year to $1.9 trillion, roughly 1.6% of global GDP. [Our Stripe dissection](/en/articles/stripe) describes Stripe as payments infrastructure whose API and documentation are the face of the product.
:::

:::guess
The difference in shape likely comes from what each company took on first. Paddle began by taking the whole hassle off one developer selling a Mac app to the world. So it became the seller from day one, collapsed pricing into one line, narrowed what it sells and paid out monthly. Stripe began by handing components to developers who build payments into their own services. So its fees stack by component, tax first arrived as a calculation tool, and Managed Payments, the product that takes on the seller's role, has been added on top of existing components, Checkout and Payment Links.

As a result, Paddle has one entrance, "hand it all over," while Stripe offers a range from "do it yourself" to "hand it over," selectable per transaction. Which is better is not the question; the right entrance depends, in our view, on how much you want to let go, which countries you sell to and whose name you want on the sale.
:::

The difference between Paddle and Stripe lies, before the rates, in who the seller is. On Paddle the seller is Paddle from start to finish, and tax, chargebacks and buyer questions are all inside the 5% + 50¢. On Stripe you remain the seller, add tax calculation and billing as components, and can hand the seller's role to Stripe through Managed Payments when you need to. The questions to answer first are whom you sell to, in which countries, what you sell, and how much of tax registration and filing you want to keep. Once those are answered, it becomes clear which rows of the two price lists you need to read.
