---
title: "Rent the Cloud, or Build Your Own Kubernetes Under It — Why Two Japanese SaaS Companies Split on Technology and on Business"
description: "SmartHR digs deep into a single workflow, HR and labor. kintone takes the wide surface of business apps in general. Behind a zero-shared-technology measurement lies an infrastructure split at the poles: SmartHR fully entrusts Google Cloud, while Cybozu builds Kubernetes on its own data centers. A head-to-head dissection of two winning paths in Japanese SaaS."
lead: "Cross-referencing both articles' techStack turns up zero shared technology — the third zero-overlap matchup after DeepL vs. Nani Translation and X vs. Bluesky. But this time the substance is different in kind. One company hands everything to Google Cloud; the other builds Kubernetes on its own data centers. Under the same label, 'Japanese SaaS,' stand two companies that diverge starting from the infrastructure itself."
slugA: "smarthr"
slugB: "cybozu-kintone"
publishedAt: "2026-07-21"
updatedAt: "2026-07-21"
lastVerified: "2026-07-21"
sources:
  - label: "SmartHR official tech blog: unifying on Rails and React (2023-12-25)"
    url: "https://tech.smarthr.jp/entry/2023/12/25/120000"
    accessedAt: "2026-07-21"
  - label: "SmartHR official tech blog: upgrading the largest Rails app to Ruby 3.4 + YJIT (2025-08-20)"
    url: "https://tech.smarthr.jp/entry/2025/08/20/142858"
    accessedAt: "2026-07-21"
  - label: "Cybozu Inside Out: introducing Neco, Cybozu's Kubernetes platform (2025-04-11)"
    url: "https://blog.cybozu.io/entry/2025/04/11/112000"
    accessedAt: "2026-07-21"
  - label: "Cybozu official IR: fiscal 2025 business digest (revenue ¥37.43B, +26.1% YoY)"
    url: "https://cybozu.co.jp/company/ir/meeting/pdf/2512_02.pdf"
    accessedAt: "2026-07-21"
---

[SmartHR](/en/articles/smarthr) and [Cybozu's kintone](/en/articles/cybozu-kintone) are both commonly described as Japan-born business SaaS. Yet cross-referencing both articles' techStack turns up not a single shared technology token — the third zero-overlap matchup here, after DeepL vs. Nani Translation and X vs. Bluesky. But this isn't the "zero that's really a matching-granularity illusion" we saw in Figma vs. Canva. This time, the infrastructure choices are literally opposite.

:::fact
Per SmartHR's official tech blog, the backend is standardized on Ruby on Rails, the frontend on React/TypeScript (with Next.js being introduced), the database is Google Cloud SQL, and the platform is Google Cloud. In August 2025 the company announced upgrading its largest Rails application to Ruby 3.4 with YJIT. Cybozu, by contrast, leases racks in data centers across eastern and western Japan and runs kintone atop Neco, a home-built Kubernetes platform spanning thousands of servers. Not a single technology token overlaps between the two techStacks, at any layer.
:::

:::pull
SmartHR sits at the pole of renting the cloud; Cybozu sits at the pole of building it yourself. The same phrase, "Japanese SaaS," covers two companies with opposite infrastructure philosophies.
:::

## Dig one workflow deep, or take the surface wide

SmartHR's design digs deep into a single domain: HR and labor procedures. Onboarding paperwork, year-end tax adjustments, employment contracts — complex workflows that change with every law revision — get polished doggedly on a standard Rails + React stack. The official tech blog's stated policy, unifying Rails and React across more than ten products, prioritizes a consistent development experience over feature breadth. Entrusting the platform to Google Cloud reads as a decision to concentrate engineering resources on the complexity of the domain logic itself.

kintone does the opposite: it takes the surface of business apps as wide as possible. Combining generic parts — forms, databases, approval workflows — it lets customers build their own apps for anything from expense reports to sales pipeline management, not just HR. That generality means kintone invests engineering not in domain-specific feature depth but in the stability and long-term cost structure of the platform itself — and Neco, a self-built platform spanning thousands of servers, is exactly that investment.

:::guess
This fork appears to come down to a difference in what kind of reassurance each company sells. SmartHR sells accuracy that keeps pace with regulatory change — where the update speed of business logic is the value, so entrusting infrastructure to a reliable off-the-shelf platform (Google Cloud) to maximize development speed is rational. kintone sells stability that keeps running in the same place for decades — and given that it holds the core operational data of a huge number of companies for the long haul, controlling the cost structure through your own platform becomes the rational long-term choice. Even within the same SaaS category, what each company sells as its reassurance appears to dictate its infrastructure choice.
:::

## What the growth numbers reveal about each company's ceiling

SmartHR keeps deepening within the addressable market of a single workflow — HR and labor. kintone, within the broad definition of business apps, has spread its MRR mix almost evenly across large, mid-size, and small companies.

:::fact
Per Cybozu's official IR materials, kintone's revenue for fiscal 2025 grew 33.9% year over year, with contracts surpassing 39,000 companies, and its MRR mix by customer size is well balanced — 39.1% under 100 employees, 33.7% from 100–999, 27.2% at 1,000+. Consolidated operating profit for the company nearly doubled, up 106.4%.
:::

:::guess
That kintone's customer base isn't concentrated in any single segment appears to follow from the product design itself: a generic no-code tool applies regardless of company size. SmartHR, by contrast, differentiates on the depth of a single workflow, so its growth likely tracks not company size but how complex a given company's HR operations are. This comparison suggests Japanese SaaS has at least two independent winning paths: the Neco-style cost advantage of owning your platform, and the SmartHR-style expertise of specializing in one domain.
:::

Under the same label, "Japanese SaaS," SmartHR and Cybozu overlap on neither technology nor business strategy. Win by renting the cloud and going deep on one workflow, or win by building the cloud and going wide on the surface — the zero-shared-technology measurement is the most honest evidence that these two companies occupy different corners of the same market.
