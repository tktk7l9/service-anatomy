---
title: "Square vs. Stripe in Japan — One Started at the Counter, One Started at the API. Fees, Payouts and Onboarding Compared from the Official Pages"
description: "A comparison of Square and Stripe based only on their official Japan pages (accessed 2026-10-01). In-person card payments are 2.5% and up at Square and 3.24% on Stripe Terminal; online card payments are 3.6% on both. In-person e-money and QR code payments appear on Square's fee schedule, konbini and bank transfers on Stripe's. We line up hardware prices, payout schedules, chargeback fees, how consumption tax applies to the fees, and what each says about account review — then read the difference in the shape of the two fee tables through where each company started."
lead: "A shop or freelancer in Japan who wants to accept cards usually ends up asking the same question first: sign up for Square or for Stripe? They look like the same kind of service, but their fee tables are built differently. Square shows one rate per payment situation and lines up six pieces of hardware. Stripe shows a rate per payment method and stacks invoicing and subscription features on top as components. We re-read the official Japan pages on October 1, 2026, put the fees, hardware, payouts and review descriptions side by side, and dissect where the difference comes from. All fees below are the Japan schedule."
slugA: "square"
slugB: "stripe"
publishedAt: "2026-10-01"
updatedAt: "2026-10-02"
lastVerified: "2026-10-02"
sources:
  - label: "Square Japan: payment fees (rates, payout schedule, FAQ on review)"
    url: "https://squareup.com/jp/ja/payments/our-fees"
    accessedAt: "2026-10-01"
  - label: "Square Help Center (Japan): About Square's fees (what is free, fees stated as outside the scope of consumption tax, who conducts review)"
    url: "https://squareup.com/help/jp/ja/article/5068-what-are-square-s-fees"
    accessedAt: "2026-10-01"
  - label: "Square Japan: hardware lineup (six devices, tax-inclusive prices)"
    url: "https://squareup.com/jp/ja/hardware"
    accessedAt: "2026-10-01"
  - label: "Square Help Center (Japan): Square's transfer schedule"
    url: "https://squareup.com/help/jp/ja/article/3807-deposit-options-with-square"
    accessedAt: "2026-10-01"
  - label: "Square Help Center (Japan): accepted online payment methods (fees by product and plan)"
    url: "https://squareup.com/help/jp/ja/article/8593-accepted-payment-methods-and-fees-for-online-products"
    accessedAt: "2026-10-01"
  - label: "Square Japan: e-money payments (3.25% fee)"
    url: "https://squareup.com/jp/ja/payments/e-money"
    accessedAt: "2026-10-01"
  - label: "Square Japan: QR code payments (3.25% in person, labeled tax-inclusive; review usually within 30 days)"
    url: "https://squareup.com/jp/ja/payments/qr-code-payments"
    accessedAt: "2026-10-01"
  - label: "Square Help Center (Japan): payment disputes (no fee for chargeback management)"
    url: "https://squareup.com/help/jp/ja/article/3882-payment-disputes-walkthrough"
    accessedAt: "2026-10-01"
  - label: "Square Japan: Square Invoices (free plan and Invoices Plus)"
    url: "https://squareup.com/jp/ja/invoices"
    accessedAt: "2026-10-01"
  - label: "Square Japan: online store (free and paid plans)"
    url: "https://squareup.com/jp/ja/online-store"
    accessedAt: "2026-10-01"
  - label: "Square Japan: Tap to Pay on iPhone"
    url: "https://squareup.com/jp/ja/payments/tap-to-pay"
    accessedAt: "2026-10-01"
  - label: "Stripe: pricing (Japan)"
    url: "https://stripe.com/jp/pricing"
    accessedAt: "2026-10-01"
  - label: "Stripe Support: taxes on Stripe fees for businesses in Japan"
    url: "https://support.stripe.com/questions/taxes-on-stripe-fees-for-businesses-in-japan"
    accessedAt: "2026-10-01"
  - label: "Stripe Docs: Payouts (Japan payout schedule, settlement timing, payout fees, supported accounts)"
    url: "https://docs.stripe.com/payouts"
    accessedAt: "2026-10-01"
  - label: "Stripe Docs: Terminal regional considerations (Japan, preview)"
    url: "https://docs.stripe.com/terminal/payments/regional?integration-country=JP"
    accessedAt: "2026-10-01"
  - label: "Stripe Docs: Stripe Terminal global availability (countries and payment methods)"
    url: "https://docs.stripe.com/terminal/payments/collect-card-payment/supported-card-brands"
    accessedAt: "2026-10-01"
  - label: "Stripe Docs: Konbini payments"
    url: "https://docs.stripe.com/payments/konbini"
    accessedAt: "2026-10-01"
  - label: "Stripe Docs: PayPay payments"
    url: "https://docs.stripe.com/payments/paypay"
    accessedAt: "2026-10-01"
  - label: "Stripe: Invoicing pricing (Japan)"
    url: "https://stripe.com/jp/invoicing/pricing"
    accessedAt: "2026-10-01"
  - label: "Stripe Docs: Set up your account (business verification and review)"
    url: "https://docs.stripe.com/get-started/account/activate"
    accessedAt: "2026-10-01"
---

[Square](/en/articles/square) and [Stripe](/en/articles/stripe) are often listed together as "services that let you accept card payments." Put their fee tables side by side, though, and even the rows are different. Square's rows are payment situations — in person, online, invoice, browser-based keyed entry. Stripe's rows are payment methods — cards, konbini, PayPay, bank transfer — plus feature components such as Billing, Invoicing and Terminal. This piece reads the official Japan pages as of October 1, 2026 and lines up the numbers and conditions as written. It is not an account of signing up for and using either service; it cross-checks published fee schedules and documentation. Every fee here is the Japan schedule, in yen, and fees get revised, so check the official pages before you apply.

## The Japan fees, side by side

:::fact
The table below rearranges, by situation, what Square's fee page, Help Center and payment-method pages and Stripe's Japan pricing page and support article say (all accessed 2026-10-01). Both companies say businesses with large annual volume can get individually negotiated (custom) pricing; the table shows the standard rates.

| Situation | Square (Japan) | Stripe (Japan) |
| --- | --- | --- |
| Setup and monthly fees | ¥0 | No setup or monthly fee |
| In-person card payments | 2.5% and up, for businesses with under ¥30 million in annual cashless volume, on in-person Visa, Mastercard, American Express, JCB, Diners Club and Discover payments. Otherwise 3.25% and up, or custom rates | 3.24% on Terminal. Tap to Pay adds ¥18 per authorization |
| In-person e-money | 3.25% (transit IC cards, iD, QUICPay) | The docs state Terminal does not support Japan-only contactless networks such as iD and QUICPay |
| In-person QR code payments | 3.25% (PayPay, d Barai, Rakuten Pay, au PAY, Merpay, WeChat Pay, Alipay+) | Not listed in Terminal's supported payment methods table |
| Online card payments | 3.6% (eCommerce API, payment links, free plan of Square Online) | 3.6%, plus 2% when currency conversion is required |
| Card payments on invoices | 3.25%. Keyed-in cards and cards on file are 3.75% | Payments fees plus Invoicing Starter at 0.4% per paid invoice (0.5% on Plus) |
| Keyed-in cards (browser-based virtual terminal) | 3.75% | We could not confirm a corresponding line on the pricing page |
| Recurring billing | Square Subscriptions: ¥0 monthly fee, 3.6% (invoice payments 3.25% for the first, 3.6% from the second) | Payments fees plus Billing at 0.7% of Billing volume |
| Konbini (convenience store) payments | Not in the list of online payment methods | 3.6% (minimum fee ¥120) |
| Bank transfers | Not in the list of online payment methods | 1.5% |
| PayPay online | Not in the list of online payment methods | 3.98% (9.48% for digital content businesses) |
| Chargebacks | No fee for the chargeback management service | ¥1,500 dispute fee per dispute received |
| Refunds | No refund fee | On standard pricing, no fee for refunds except for bank transfers. The original processing fee is not returned |
:::

:::fact
The two companies describe consumption tax on their fees differently. Square's Help Center says processing fees are outside the scope of consumption tax "regardless of payment method," that the 1.5% instant transfer fee is likewise outside its scope, and that Square does not issue receipts for processing fees. Square's QR code payment page, meanwhile, labels the in-person QR code fee as "3.25% (tax-inclusive)." Stripe's support article says that for Stripe account holders in Japan, Japanese consumption tax applies to some Stripe fees at the current standard rate, and that the tax is applied "in addition to" Stripe's product and service fees. The table in that article marks JCB, American Express, Discover, Diners Club, konbini, PayPay, Japanese bank transfers, disputes, and software such as Billing as taxable, with Visa and Mastercard taxable from April 1, 2026 and currency conversion (FX) from October 31, 2025. Stripe Japan, Inc. is registered as a qualified invoice issuer, and the article says a monthly qualified tax invoice for the fees appears in the Dashboard by the 10th of each month.
:::

:::guess
On the listed rates alone, in-person card payments differ — 2.5% and up at Square versus 3.24% on Stripe Terminal — while online card payments sit at 3.6% on both. But if the official descriptions are taken at face value, Square's fees carry no consumption tax and Stripe's have consumption tax added on top, so the same 3.6% likely does not mean the same amount leaving the business's hands. The weight of that gap also presumably differs between a taxable business that can claim an input tax credit and a tax-exempt business that cannot. Tax treatment varies by business, so, as both companies' pages suggest, confirming with a tax advisor is the reliable route.
:::

## Hardware and in-person payments

:::fact
Square's hardware page (accessed 2026-10-01) lists six devices and states that all prices include tax.

| Device | Price (tax included) |
| --- | --- |
| Square Reader (2nd generation) | ¥4,980 |
| Square Stand | ¥29,980 |
| Square Kiosk | ¥29,980 |
| Square Terminal | ¥39,980 |
| Square Handheld | ¥44,980 |
| Square Register (2nd generation) | ¥99,980 |

Installment plans of 12 or 24 payments are listed for everything except the Reader. According to the Tap to Pay on iPhone page, an iPhone XS or later with the free Square POS app can accept contactless credit cards and Apple Pay without a card reader. The page also says e-money (transit IC cards, iD, QUICPay and so on) cannot be accepted with Tap to Pay on iPhone and requires Square hardware.
:::

:::fact
Stripe's in-person product is Stripe Terminal. In the documentation (accessed 2026-10-01), Japan falls under the "available in beta" group of the country list, and the Japan section is headed "Set up Terminal in Japan (preview)." The readers listed for Japan are the Stripe Reader S700 smart reader, the BBPOS WisePad 3 mobile reader, and Tap to Pay on iPhone. Supported brands are Visa, Mastercard, American Express, JCB and Discover, with a note that Diners is not supported in Japan. Reader prices on the Japan pricing page are ¥10,480 for the BBPOS WisePad 3, ¥46,480 for the Stripe Reader S700 and S710, and ¥1,580 per reader per month for mobile data. We could not confirm on the pricing page whether those prices include tax. Terminal is described as letting you "develop a custom POS app or integrate with third-party POS systems"; alongside SDK and API integration, no-code options are also mentioned.
:::

:::pull
Square's hardware is presented together with its own free POS app. Stripe's hardware is presented as a component you connect to your own POS and business systems.
:::

## Payout timing and conditions

:::fact
According to Square's fee page and Help Center (accessed 2026-10-01), when the registered account is at Sumitomo Mitsui Banking Corporation or Mizuho Bank, sales made between 0:00 and 23:59 are transferred on the next business day. For other financial institutions, sales from Thursday 0:00 through the following Wednesday 23:59 are transferred together on that week's Friday. Square bears the transfer fee and does not charge merchants. No transfers are made on weekends and public holidays; they move to the next business day. Separately, an instant transfer service is available for a fee of 1.5% of the amount sent, with a minimum transfer of ¥5,000.
:::

:::fact
Stripe's payouts documentation (accessed 2026-10-01) says of Japan that daily payouts are not available, the default schedule is manual, and weekly and monthly payout schedules are also available. In the settlement timing table by country, Japan is 7 calendar days for the initial payout and 4 business days by default thereafter. Payouts go to ordinary (futsu) or current (toza) accounts at Japanese financial institutions, with major banks, online banks and Japan Post Bank given as examples. On fees, the documentation says Stripe does not charge for normal payouts, and Japan's minimum payout amount is ¥1. The konbini documentation says funds become available for payout 4 business days after payment confirmation.
:::

:::guess
The way payouts are explained also appears to reflect who each company is talking to. Square states "when it reaches your account" outright, by bank name and day of the week. Stripe separates "when funds become available" from "when the payout is executed" and lets the business choose a schedule. The former reads as written for a shop owner who wants yesterday's sales available for tomorrow's purchasing; the latter for a business that wants payouts aligned with its accounting and treasury cycle. Which arrives sooner depends on the bank you register and the schedule you choose.
:::

## What you can do without code, and the range of payment methods

:::fact
Square's Help Center list of accepted online payment methods (accessed 2026-10-01) names products that work without writing code: Square Invoices, Square Online (online store), Square payment links, Square Subscriptions, Square Appointments and the browser-based Virtual Terminal. Payment methods are credit cards, Apple Pay and Google Pay, and Square Pay on some products; the card brands supported online are Visa, Mastercard, Amex, JCB, Diners Club and Discover. Square Invoices has a free plan at ¥0 per month with unlimited invoices and estimates, and a paid "Invoices Plus" plan at ¥3,000 per month. The online store has a free plan and a paid plan shown as "from ¥3,375" (we could not confirm the billing period on the page), and on the Premium plan the processing fee is 3.3%.
:::

:::fact
According to Stripe's Japan pricing page (accessed 2026-10-01), Payment Links are no-code payment links that let you sell online without a website, included at no additional charge with Payments on standard pricing (a custom domain is $10 per month). Invoicing is described as creating, customizing and sending invoices in minutes without code, and Billing handles subscriptions and usage-based billing. Beyond cards and wallets, the Japan pricing table lists konbini, PayPay and bank transfers as online payment methods. Per the konbini documentation, payments can be made at FamilyMart, Lawson, Ministop and Seicomart, and konbini works with Billing. Per the PayPay documentation, PayPay is available on Payment Links, Checkout and Elements and does not support recurring payments.
:::

:::guess
Sending an invoice, sharing a payment link and collecting a monthly fee all appear to be possible without code on either service. The difference likely shows up beyond that point. Square holds invoices, an online store, appointments and a POS as finished products on one dashboard, tied to the in-store hardware and to inventory and customer records. Stripe's depth is in the range of payment methods (konbini, bank transfer, PayPay) and in components — Billing, Invoicing, Tax — that can be built into your own service through the API. Square also has more than 20 APIs, and Stripe also has Terminal for in-person payments, so there are not many things only one of them can do. We read it as a difference in where the center of gravity sits.
:::

## Account review and getting started

:::fact
According to the FAQ on Square's fee page (accessed 2026-10-01), after account creation, review for Visa, Mastercard, American Express and UnionPay usually takes 1–3 business days, and use can begin as early as the day the account is created. JCB, Diners Club and Discover become available once JCB Co., Ltd. completes its own review, usually 5–15 days. QR code payments are reviewed by each QR payment provider, usually within 30 days. Transfers of sales begin once the registered bank account is verified, usually 1–3 business days. The Help Center notes that in addition to Square's review, Visa, Mastercard and UnionPay require review by Sumitomo Mitsui Card Co., Ltd., American Express by American Express International, Inc., and JCB, Diners Club and Discover by JCB Co., Ltd., and that depending on the result some brands may not be available. The FAQ says sole proprietors can also sign up with a free account.
:::

:::fact
According to Stripe's "Set up your account" documentation (accessed 2026-10-01), creating an account lets you test Stripe services in a sandbox, and using them in live mode requires verifying your business information and meeting the activation requirements. The page says KYC (Know Your Customer) obligations require Stripe to collect and retain this information for all users, that Stripe conducts a review to confirm compliance with its terms of service, and that it will contact you if additional information is needed. It also says more information or verification may be requested as you use more Stripe services. Within the Stripe pages we checked, no estimate of how many days review takes was given.
:::

## Which fits which kind of business

What follows is how we read the fee tables and conditions above. It is not a ranking; it shows, by the shape of the business, which rows of the official fee schedules matter.

:::guess
- For a storefront that wants cards, e-money and QR codes together, Square's fee table appears to be the closer fit. In-person cards at 2.5% and up (with conditions) and e-money and QR codes at 3.25% sit on one account, and hardware starts with the ¥4,980 (tax included) Reader. Stripe Terminal is in preview in Japan, and the docs state it does not support iD or QUICPay.
- Selling at events or on site means carrying a reader or using Tap to Pay on iPhone. Both Square and Stripe list Tap to Pay on iPhone for Japan, but Square's works directly in its free POS app, while Stripe's is described on the assumption of your own app or an integration with a third-party POS. For a business that does not provide its own app, Square presumably involves fewer steps.
- For sending invoices to clients who pay by card, the tables show Square Invoices at 3.25% with no monthly fee, and Stripe at 3.6% for Payments plus 0.4% for Invoicing. If the client wants to pay by bank transfer, on the other hand, Stripe's pricing has a bank transfer row at 1.5%, and Square's list of online payment methods has no bank transfer row. The choice likely turns on how the other side pays.
- A SaaS product or online course that builds monthly billing into its own web service or app appears to fit Stripe's design. Billing adds 0.7%, but features such as trials and discounts, usage-based billing and payment retries (Smart Retries) can be built into your own product through the API. For flat monthly tuition or membership dues at a class or gym, Square's subscriptions or recurring invoices may be enough.
- For an online store that wants to offer konbini or PayPay at checkout, Stripe's pricing has those rows. For a shop that wants in-store and online inventory to be one, Square Online runs on the same account as the POS.
- Using both is also conceivable — Square at the counter, Stripe for monthly billing on your own site. Neither pricing model has a fixed monthly fee, so running both does not add fixed costs. The trade-off to plan for is that payouts and bookkeeping are split across two systems.
:::

## Why the fee tables are shaped differently

:::fact
According to our [Square dissection](/en/articles/square), Square launched in Japan in May 2013 with Sumitomo Mitsui Card as its acquirer; the Form 10-K of its parent, Block, Inc., describes the hardware as custom-designed and states that it supports JCB and e-money in Japan. Square acts as both the merchant of record and the payment service provider for its sellers. According to our [Stripe dissection](/en/articles/stripe), Stripe is payments infrastructure whose screens end users rarely see, with revenue centered on payment fees and extending into software such as Billing and Tax.
:::

:::guess
The difference in the shape of the fee tables appears to come from whose desk each company first put its product on. Square's first customer was the shop owner standing at the register. So the product became a finished thing — hardware plus a POS app — and the fee table is divided in the owner's words: at the counter, by invoice, in the online store. Gathering the payment methods Japanese storefronts are asked for, such as e-money and QR codes, onto one account can be explained from the same starting point.

Stripe's first customer was the developer building payments into their own service. So the product became a component — an API — and the fee table is divided by payment method and by feature, with rates stacking up for each component used. The depth in methods online buyers choose, such as konbini and bank transfers, likely extends from there. That Terminal is described as a product for building a POS or connecting to one presumably reflects that, for Stripe, the storefront is also one more channel a developer assembles.

Each has stepped into the other's territory. Square has APIs and an online store; Stripe has hardware and no-code payment links. That the division of the fee tables has not changed appears to be because the shape of each product was made for its first customer, and features added later were placed inside that frame.
:::

Square and Stripe sell the same card payment through different entrances. Square came in through hardware at the counter and widened to invoices and online stores. Stripe came in through the API and widened to no-code screens and hardware. What an applicant should look at is less which rate is lower than where, and by which payment method, their sales actually happen. Mostly in person, with e-money and QR codes too? Mostly online, with konbini payments or monthly billing? Once that is answered, which rows of the two fee tables to read follows naturally.
