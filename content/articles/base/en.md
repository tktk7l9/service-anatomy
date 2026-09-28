---
service: "BASE"
title: "Where Does a \"Free Until You Sell\" Online Store Make Its Money? — BASE's Fee Design, and Swapping Out 2012-Era PHP in Production"
description: "BASE is a Japanese online-store builder with no setup fee and no monthly fee. We dissect a business with 2.6 million shops opened and ¥169.9B in annual GMV — from fees charged only when something sells, to a re-architecture that replaces a CakePHP 2 monolith from 2012 by running old and new code side by side, to a product classifier trained on a million listings — using its earnings materials and official product team blog."
lead: "BASE's pricing page says its Standard plan is \"free until you sell.\" A month with no sales costs nothing. So where does the company make money? In payments. It takes a small cut of many small sales by individuals and tiny teams, then stacks financing and a shopping app on top of those payments. Together with how it keeps 2012-era PHP running while replacing its insides, we dissect the infrastructure behind Japan's small online shops."
category: saas
tags: [e-commerce, small-business, fintech, php, aws]
publishedAt: "2026-09-28"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://thebase.com/"
# Affiliate link placeholder: BASE has no classic ASP program confirmed from a primary source.
# Its official partner program "BASE Partners" (https://partners.thebase.com/) pays sales-linked
# incentives to partners who help new shops open. The owner must apply there and confirm that a
# referral link on this site is allowed before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<base-partners-referral-link>"
#   program: "BASE Partners"
vendor: "BASE, Inc."
origin: "JP"
heroTheme: "base"
scores: { product: 4.0, ux: 4.0, tech: 3.5, business: 3.5 }
techStack:
  - layer: "Web framework (existing)"
    name: "PHP / CakePHP 2"
    confidence: confirmed
    evidence: "Official product team blog (2024-12) states that BASE's main application is written in CakePHP 2. A 2020 post explains that code built on PHP + CakePHP 2.x in 2012 is still running"
    evidenceUrl: "https://devblog.thebase.in/entry/base-todo-2025"
  - layer: "Re-architecture target"
    name: "CakePHP 4 + modular monolith (clean architecture)"
    confidence: confirmed
    evidence: "The same blog (2024-12) states that the new architecture is based on a modular monolith and clean architecture, and that the cart — a critical feature — has finished its re-architecture and now runs on CakePHP 4"
    evidenceUrl: "https://devblog.thebase.in/entry/base-todo-2025"
  - layer: "Migration verification"
    name: "DryRun (in-house, PHP / Doctrine / Ray.Di)"
    confidence: confirmed
    evidence: "Official blog (2024-06): to rewrite the shipping feature, BASE built DryRun, a tool that runs the pre- and post-migration code paths simultaneously in production and compares the database results to guarantee identical behavior"
    evidenceUrl: "https://devblog.thebase.in/entry/2024/06/14/110000"
  - layer: "Cloud platform"
    name: "AWS (Amazon Aurora)"
    confidence: confirmed
    evidence: "Official blog (2020-09) says the future will take more than \"scaling out AWS instances and raising Aurora instance specs,\" showing the service runs on AWS and Aurora. A 2024-12 post also states that BASE is optimizing costs and modernizing the AWS infrastructure behind the service"
    evidenceUrl: "https://devblog.thebase.in/entry/leverage_php"
  - layer: "Generative AI feature"
    name: "ChatGPT API via Amazon API Gateway + AWS Lambda"
    confidence: confirmed
    evidence: "Official blog (2023-06): the product-description generator calls ChatGPT from the CakePHP backend through a data strategy team API built on API Gateway and Lambda, and was switched to asynchronous polling to avoid API Gateway's 30-second timeout. The 2026 setup is unconfirmed"
    evidenceUrl: "https://devblog.thebase.in/entry/2023/06/02/110000"
  - layer: "Machine learning (product classification)"
    name: "Swin Transformer + Japanese BERT (MMBT)"
    confidence: confirmed
    evidence: "Official blog (2026-09): an MMBT-based model combining a Swin Transformer image encoder with Japanese BERT classifies products into 498 categories, trained on about 1 million products, with 90% accuracy on the full validation set; training took a few days on an on-premises server with a GeForce RTX 5090"
    evidenceUrl: "https://devblog.thebase.in/entry/2026/09/03/110000"
  - layer: "Monitoring"
    name: "New Relic"
    confidence: confirmed
    evidence: "Official blog (2026-07) states that BASE has long used New Relic and has reworked its Terraform management of New Relic with the help of AI"
    evidenceUrl: "https://devblog.thebase.in/entry/newrelic-terraform-next"
  - layer: "Marketing site delivery"
    name: "Amazon CloudFront"
    confidence: likely
    evidence: "Our own observation (thebase.com, 2026-09-28): responses carry a CloudFront Via header, X-Cache: Hit from cloudfront, and X-Amz-Cf-Pop (NRT), suggesting delivery through CloudFront. They also carry Server: nginx and x-amz-server-side-encryption: AES256, but the origin setup (including whether it is S3) is unconfirmed. The shops and admin console may be delivered differently"
sources:
  - label: "BASE, Inc.: Q2 FY2026.12 earnings presentation (Japanese, 2026-08-05)"
    url: "https://contents.xj-storage.jp/xcontents/AS08546/2364c60d/6ebc/4638/9005/d1b9179eb4c0/140120260805510102.pdf"
    accessedAt: "2026-09-28"
  - label: "BASE, Inc.: Q&A on Q2 FY2026.12 results (Japanese, 2026-08-25)"
    url: "https://contents.xj-storage.jp/xcontents/AS08546/8b36d330/c978/4d4d/9ba6/56d055623c28/20260825092735337s.pdf"
    accessedAt: "2026-09-28"
  - label: "BASE, Inc.: Business plan and growth potential (Japanese, 2026-03-26)"
    url: "https://contents.xj-storage.jp/xcontents/AS08546/d371d91b/efc7/45e1/8b5d/f30bf82f1b6f/140120260326589407.pdf"
    accessedAt: "2026-09-28"
  - label: "BASE, Inc.: Supplementary material on the capital and business alliance with SBI Holdings (Japanese, 2026-08-28)"
    url: "https://contents.xj-storage.jp/xcontents/AS08546/2e2f2b40/d5ff/46a3/8f61/f2419318c952/140120260828528137.pdf"
    accessedAt: "2026-09-28"
  - label: "BASE official site (top page: shops opened and pricing illustration)"
    url: "https://thebase.com/"
    accessedAt: "2026-09-28"
  - label: "BASE official: Pricing plans and fees (Japanese)"
    url: "https://thebase.com/price/"
    accessedAt: "2026-09-28"
  - label: "BASE Product Team Blog: Is there still work to do if you join BASE now? (Japanese, 2024-12)"
    url: "https://devblog.thebase.in/entry/base-todo-2025"
    accessedAt: "2026-09-28"
  - label: "BASE Product Team Blog: We built DryRun, a tool to help re-architecture (Japanese, 2024-06)"
    url: "https://devblog.thebase.in/entry/2024/06/14/110000"
    accessedAt: "2026-09-28"
  - label: "BASE Product Team Blog: Continuously evolving a PHP service to keep the business running (Japanese, 2020-09)"
    url: "https://devblog.thebase.in/entry/leverage_php"
    accessedAt: "2026-09-28"
  - label: "BASE Product Team Blog: System architecture of the ChatGPT-based text generation feature (Japanese, 2023-06)"
    url: "https://devblog.thebase.in/entry/2023/06/02/110000"
    accessedAt: "2026-09-28"
  - label: "BASE Product Team Blog: A multimodal product category classification model (Japanese, 2026-09)"
    url: "https://devblog.thebase.in/entry/2026/09/03/110000"
    accessedAt: "2026-09-28"
  - label: "BASE Product Team Blog: Redesigning New Relic's Terraform management for the AI era (Japanese, 2026-07)"
    url: "https://devblog.thebase.in/entry/newrelic-terraform-next"
    accessedAt: "2026-09-28"
  - label: "BASE Product Team Blog: The struggles and future of cs_a, our inquiry-investigation AI agent (Japanese, 2026-08)"
    url: "https://devblog.thebase.in/entry/2026/08/25/110000"
    accessedAt: "2026-09-28"
  - label: "BASE U: BASE Partners turns four (Japanese, 2024-10)"
    url: "https://baseu.jp/information/20241009"
    accessedAt: "2026-09-28"
---

BASE lets anyone in Japan open an online store that costs nothing until something sells. A month without sales costs zero. To keep that promise and still turn a profit, BASE has designed its fees carefully — and has kept replacing PHP code written in 2012, piece by piece, without ever switching it off.

## Service overview

BASE is a service for individuals and small teams to build an online store and sell their products. It bundles store design, payments, and product management in one place, and lets shops add features such as lottery sales and newsletters through "BASE Apps" extensions. The BASE group also runs the payments API PAY.JP, the financing service YELL BANK, and the shopping app PAY ID.

:::fact
According to the business plan and growth potential material (2026-03), BASE, Inc. was founded on December 11, 2012, and had 394 consolidated employees at the end of December 2025. The BASE business recorded ¥169.9 billion in GMV (order basis) for FY2025.12. A company survey in the same material (November 2025) found that 71.5% of shops opened on BASE are run by individuals, 77.4% are run by a single person, 82.7% use social media, and for 47.1% the online store is not their main business. The official site's top page displays "2.6 million shops" opened (as of 2026-09-28).
:::

:::fact
According to the Q2 FY2026.12 earnings presentation (2026-08-05), the BASE business's Q2 (April–June) GMV (order basis) was about ¥42.3 billion, up 5.6% year over year. Its take rate (revenue divided by payment-basis GMV) rose from 6.4% to 7.0%, revenue grew 17.0%, and gross profit grew 24.4%. For the group's first half (January–June), revenue was ¥12.39 billion (up 35.5%) and operating profit was ¥1.07 billion (up 87.3%).
:::

:::pull
About eight in ten BASE shops are run by one person, and for nearly half the store is not their main business. BASE's customer looks less like a corporate e-commerce manager and more like someone selling what they make on the side.
:::

::scorecard

## UX analysis

BASE's UX puts one thing first: someone opening their first online store should never lose money by trying.

- **Zero fixed costs make starting an easy decision**. An illustration on the official top page spells it out by month: "July, August, and September had no sales, so ¥0 in costs; October, only fees based on sales." The Standard plan has no setup fee and no monthly fee; you pay only when something sells.
- **No payment application paperwork**. According to the business plan material, "BASE Easy Payment" makes eight payment methods available as early as the next business day after a simple request, and works as escrow, with BASE standing between seller and buyer. Individuals don't need to sign separate contracts with payment processors.
- **AI as a shop-running advisor**. According to the business plan and Q2 materials, BASE has been rolling out AI features that draft social posts, product descriptions, and replies to customer inquiries and suggest shop designs, and has opened "BASE AI," a conversational assistant for shop operations, to a limited group of users. For owners who handle everything from making products to shipping and social media alone, being able to hand off first drafts of text and design matters.
- **The total fee is hard to see at a glance**. Standard plan fees come in two layers — a 3.6% + ¥40 payment fee and a 3% service fee — plus 1% more for PayPay, Amazon Pay, and PayPal, and a different rate for orders through the PAY ID app. A calculator that shows how much is deducted per order when you enter a price would make it easier to understand.

## Tech stack

::techstack

:::fact
According to the official product team blog (2020-09), BASE has run on code built with PHP and CakePHP 2.x in 2012. The post says a move to a new architecture was needed as CakePHP 2.x approached end of life, but explains the decision to stay on PHP: the team had not found an alternative worth switching languages wholesale for, development productivity included. It also notes that teams choose languages to fit the job — the BASE BANK team used Go, while the PAY.JP team and the data strategy team used Python.
:::

:::fact
According to the same blog (2024-12), the main application is still written in CakePHP 2, and new code is moving to CakePHP 4 on an architecture based on a modular monolith and clean architecture. The cart, a critical feature, has finished migrating. For the rewrite of the product shipping feature into a new repository based on DDD and clean architecture, the team built its own tool, DryRun, which runs the pre- and post-migration code simultaneously in production and compares the database results to confirm identical behavior (2024-06). The team split shipping into small units, one per payment method, and applied DryRun to them in production one at a time.
:::

:::fact
According to the same blog (2026-09), BASE assigns each product a category inferred by machine learning. The model is based on MMBT, combining a Swin Transformer image encoder with Japanese BERT; it classifies products into 498 classes, was trained on about 1 million products (labeled through LLM annotation), and reached 90% accuracy on the full validation set. Training took a few days on an on-premises server with a GeForce RTX 5090. The Q2 earnings presentation says that in the cross-border feature "Easy Overseas Sales," a proprietary AI model automates everything from identifying product information to judging whether an item can be shipped, including package size, weight, and whether it is prohibited on aircraft.
:::

:::fact
According to the same blog (2026-08), BASE introduced "cs_a," an AI agent running as a Slack bot, to help engineers investigate customer inquiries. After it was rebuilt as a multi-agent system that consults not just code but New Relic logs, feature specifications, and the CS team's operating procedures, cs_a's answers came to roughly match the engineers' answers for 70% of inquiries, excluding some areas and categories. The post also reports the limits: each new source it could consult added another reason for the LLM's output to fluctuate, and while drafting answers got easier, the work of checking each inquiry and replying to the CS team did not change, so engineers could not yet say the load had become "dramatically lighter."
:::

:::guess
Rather than throwing out the 2012 code and rewriting it, BASE chose to run old and new side by side in production and compare the results — most likely because it cannot stop processes where money and parcels move, such as payments and shipping. Switching over code that handles transactions for so many shops in one go would make any mismatch far too costly. Verifying with production data that the new code gives the same answers as the old, as DryRun does, and then switching gradually, appears to be the slow-but-safe option. Splitting shipping by payment method before applying DryRun also reads as a way to keep any mismatch contained to a small unit.
:::

## Business model

BASE earns mainly from fees proportional to its shops' sales. It makes money not from monthly fees, but from what sells.

:::fact
According to the official pricing page (as of 2026-09-28), the Standard plan has no setup fee and no monthly fee, and charges a 3.6% + ¥40 payment fee plus a 3% service fee on each sale. The Growth plan costs ¥16,580 a month (the monthly equivalent when paid annually; ¥19,980 when paid monthly), with a 2.9% payment fee and no service fee. On both plans, 1% is added when the buyer pays with PayPay, Amazon Pay, or PayPal. Orders placed through the PAY ID shopping app carry a 3.6% + ¥40 payment fee and a 5.9% service fee. The pricing page's Q&A says costs arise only "when a product sells and when sales are paid out," and according to the business plan material, withdrawing sales carries a ¥250 transfer request fee (plus a ¥500 handling fee if the amount is under ¥20,000).
:::

:::guess
The gap between Standard and Growth is 3.7% plus ¥40 per order. Ignoring the ¥40 and dividing the monthly fee by 3.7%, Growth becomes cheaper once monthly sales exceed roughly ¥540,000 when paying monthly (¥19,980), or roughly ¥450,000 when paying annually (¥16,580). Most small shops stay on Standard and pay per sale; only shops with larger sales pay a fixed fee to lower their rate. This two-tier design — no burden before you sell, lower rates the more you sell — likely also makes it harder for growing shops to leave for another service.
:::

:::fact
According to the Q2 earnings presentation and Q&A (2026-08-25), the BASE business's revenue grew far faster (17.0%) than its GMV (5.6%) because, on top of GMV growth, making the PAY ID shopping app a paid channel raised the take rate. GMV rose year over year as both the number of shops making sales each month and average monthly GMV per shop increased. Quarter over quarter, however, the number of selling shops grew but average GMV per shop fell, mainly as growth at existing fashion shops slowed, and GMV fell 1.8%. To bring in new shops, BASE ran a nationally broadcast mass-marketing campaign in May 2026.
:::

:::fact
According to the supplementary material on the capital and business alliance with SBI Holdings (2026-08-28), SBINM LLC, a wholly owned subsidiary of SBI Holdings, is running a tender offer (still open as of 2026-09-28) from August 31 to September 30, 2026 to acquire up to 20.00% of BASE's shares at ¥340 per share. BASE expressed support for the offer and left the decision to tender to shareholders. The aim is to make BASE an equity-method affiliate of SBI Holdings, and BASE plans to stay listed on the TSE Growth Market. The alliance plans to explore turning SBI group characters and content into products through BASE's commerce and payments, and jointly developing fintech businesses that combine commerce and finance.
:::

:::fact
According to an announcement on BASE U (2024-10), BASE runs an official partner program, BASE Partners, launched in October 2020, which had more than 2,000 partners as of October 2024. Companies, organizations, and sole proprietors can join, and partners receive sales-linked incentives and perks they can pass on to shop owners.
:::

Take nothing until it sells. Then take a little from each sale, and raise the take rate by stacking payments, financing, an app, and cross-border sales on top of those transactions. The caution of swapping out 2012-era PHP while it runs in production, and the move to expand payments and finance with SBI, rest on the same premise: never stop a small shop's sales.
