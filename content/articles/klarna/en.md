---
service: "Klarna"
title: "A Year After Bragging About Replacing 700 Workers, It Called Them Back — What Klarna's AI Experiment Revealed"
description: "Klarna, the buy-now-pay-later fintech, dissected: in 2024 it officially announced an OpenAI-built AI assistant doing 'the work of 700 employees' in a month, then in 2025 its own CEO admitted the company 'went too far' and rehired humans — from the official press release and the CEO's own words. A real case study in the tension between quality and cost."
lead: "A year after proudly announcing AI could handle the work of 700 customer service employees, the same CEO admitted the company 'went too far' and quality suffered — and called humans back. What Klarna exposed isn't a failure story so much as rare, real measured data on exactly where AI adoption hits its limits."
category: saas
tags: [fintech, bnpl, ai, customer-service, ipo]
publishedAt: "2026-07-20"
updatedAt: "2026-07-20"
lastVerified: "2026-07-20"
serviceUrl: "https://www.klarna.com/"
vendor: "Klarna Group plc"
origin: "SE"
heroTheme: "klarna"
scores: { product: 4.0, ux: 3.5, tech: 3.5, business: 3.5 }
techStack:
  - layer: "AI customer support"
    name: "OpenAI (GPT系モデル)"
    confidence: confirmed
    evidence: "Both Klarna's official press release (2024-02-27) and OpenAI's own official page state the AI assistant was built through a partnership with OpenAI"
    evidenceUrl: "https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/"
  - layer: "Delivery infrastructure"
    name: "Amazon S3 + CloudFront"
    confidence: confirmed
    evidence: "Our own HTTP header observation (server: AmazonS3 / via: CloudFront, 2026-07-20) confirmed delivery of the corporate site"
    evidenceUrl: "https://www.klarna.com/"
sources:
  - label: "Klarna official press release: AI assistant handles the work of 700 employees in one month (2024-02-27)"
    url: "https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/"
    accessedAt: "2026-07-20"
  - label: "OpenAI official: Klarna's AI assistant does the work of 700 full-time agents"
    url: "https://openai.com/index/klarna/"
    accessedAt: "2026-07-20"
  - label: "Klarna Group plc IR: full-year 2025 results (2026-02-26)"
    url: "https://investors.klarna.com/News--Events/news/news-details/2026/Klarna-Group-plc-Publishes-Full-Year-2025-Results/default.aspx"
    accessedAt: "2026-07-20"
  - label: "Forbes: Klarna Reverses AI Push, Says Customers Prefer Human Support (2025-05 — quoting the CEO's Bloomberg remarks)"
    url: "https://www.forbes.com/sites/quickerbettertech/2025/05/18/business-tech-news-klarna-reverses-on-ai-says-customers-like-talking-to-people/"
    accessedAt: "2026-07-20"
---

AI could do the work of 700 employees — that's what the company proudly announced. A little over a year later, the same CEO admitted the company "went too far" and quality suffered, and called human operators back. While most companies only ever publicize their AI adoption wins, Klarna has kept exposing real measured data to the world, failures included.

## What the service is

Klarna is a Swedish buy-now-pay-later (BNPL) and neobank service, founded in 2005 and listed on the NYSE in September 2025.

:::fact
Per Klarna Group plc's official investor relations release (February 2026), full-year 2025 gross merchandise volume (GMV) reached $127.9 billion (up 22% year over year), revenue was $3.5 billion (up 25%), and adjusted operating profit was $65 million (a 1.9% adjusted operating margin). Active consumers reached 118 million (up 28%) and merchants reached 966,000 (up 42%). The company is now listed on the NYSE as "KLAR."
:::

:::pull
The world is full of "AI adoption success stories." What makes Klarna valuable to the AI industry is that the same mouth that announced success admitted failure a year later.
:::

::scorecard

## UX analysis

Klarna's UX sits at the intersection of two stories: BNPL's core strength of reducing checkout friction, and a walked-back AI push.

- **Split-pay at checkout is the core invention.** Presenting a "buy now, pay later" option in a single click completes a credit decision without the heavy process of a credit card application. This shaped UX standards across the entire BNPL industry.
- **The AI assistant overwhelmed on speed.** Per the official press release (February 2024), resolution time dropped from 11 minutes to under 2, with customer satisfaction reported on par with human agents. The initial numbers showing speed and satisfaction together were real, measured results.
- **And still, the company chose to bring humans back.** CEO Sebastian Siemiatkowski told Bloomberg, "We focused too much on cost. The result was lower quality," and gradually reintroduced human operators through 2025. He effectively proved himself that numerical efficiency and the experience quality customers actually want don't necessarily align.
- **Redesigned into an "Uber-style" hybrid.** Reporting describes a shift to flexible, part-time human operators (students, parents) supported by AI on every conversation — redefining AI as an assist rather than a replacement.

## Tech stack

::techstack

:::fact
Per Klarna's official press release (February 2024) and OpenAI's own official page, the AI assistant was built through a partnership with OpenAI, supporting 23 markets in over 35 languages, operating 24/7. In its first month it handled 2.3 million conversations (two-thirds of all customer service chats), reported as equivalent to the full-time work of 700 employees, with an estimated $40 million profit improvement projected for full-year 2024.
:::

:::guess
The initial numbers (resolution time dropping from 11 minutes to under 2, satisfaction on par with humans) were likely real, measured achievements. But a metric like "satisfaction on par with humans" may not capture the specific wear of AI-handled support — resolving issues in the same polished phrasing every time while failing to register complex circumstances or emotional appeals, accumulating quietly as dissatisfaction. The CEO's own words, "quality suffered," read as a real-world case where qualitative experience can degrade even while quantitative metrics still look healthy.
:::

## Business model

Klarna's revenue combines merchant payment processing fees with consumer financial services (interest on installment plans and similar).

:::fact
Per its official IR release (February 2026), full-year 2025 revenue was $3.5 billion (up 25% year over year), but adjusted operating profit was only $65 million, for an adjusted operating margin of just 1.9%. The company listed on the NYSE in September 2025.
:::

:::guess
Strong revenue growth (25%) alongside an extremely thin operating margin (1.9%) reflects the fact that BNPL is fundamentally a credit business, caught between expanding credit to fuel growth and managing default risk. The AI cost-cutting experiment was likely a genuine attempt to protect that thin margin, and the fact that it still had to be walked back on quality grounds shows just how little room the BNPL industry has to pursue cost reduction and customer experience simultaneously. Now answerable to quarterly margin scrutiny as a public company, that tension is only likely to sharpen.
:::

A year after announcing AI could handle 700 employees' worth of work, the same CEO admitted the company went too far and called humans back. What Klarna revealed isn't a record of failure — it's some of the industry's rare, real measured data on exactly where AI adoption crosses the line on quality.
