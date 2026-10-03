---
title: "Rent the Cloud, or Build Your Own Kubernetes Under It — Why Two Japanese SaaS Companies Split on Technology and on Business"
description: "SmartHR digs deep into a single workflow, HR and labor. kintone takes the wide surface of business apps in general. Behind a zero-shared-technology measurement lies an infrastructure split at the poles: SmartHR fully entrusts Google Cloud, while Cybozu runs its domestic services on Kubernetes in its own data centers. A head-to-head dissection of two winning paths in Japanese SaaS."
lead: "Cross-referencing both articles' techStack turns up zero shared technology — a zero-overlap matchup alongside X vs. Bluesky. But this time the substance is different in kind. One company hands everything to Google Cloud; the other builds Kubernetes in its own data centers for its domestic services. Under the same label, 'Japanese SaaS,' stand two companies that diverge starting from the infrastructure itself."
slugA: "smarthr"
slugB: "cybozu-kintone"
publishedAt: "2026-07-21"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
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
    accessedAt: "2026-09-28"
  - label: "Mynavi News: Cybozu fiscal 2025 earnings briefing (39,000 customers; MRR mix by customer size; 2026-02-25)"
    url: "https://news.mynavi.jp/techplus/article/20260225-4165084/"
    accessedAt: "2026-09-28"
  - label: "Cybozu official announcement: kintone on AWS launched for the US (2019-09-09)"
    url: "https://topics.cybozu.co.jp/news/2019/09/09-8487.html"
    accessedAt: "2026-09-28"
  - label: "Cybozu Inside Out: US kintone after completing its AWS migration (2020-07-02)"
    url: "https://blog.cybozu.io/entry/2020/07/02/000000"
    accessedAt: "2026-09-28"
  - label: "Cybozu Inside Out: kintone's generative AI features and system overview (2025-01-22; Amazon Bedrock)"
    url: "https://blog.cybozu.io/entry/2025/01/22/112000"
    accessedAt: "2026-09-28"
  - label: "Google Cloud official blog: SmartHR's full migration to Google Cloud (2022-04-27; Cloud Run / App Engine / Cloud SQL)"
    url: "https://cloud.google.com/blog/ja/topics/customers/smarthr-full-migration-to-google-cloud?hl=ja"
    accessedAt: "2026-09-28"
  - label: "SmartHR official press release: ARR passes ¥30B (2026-07-07)"
    url: "https://smarthr.co.jp/news/press/20260707/"
    accessedAt: "2026-09-28"
  - label: "SmartHR official: #1 share for seven consecutive years, registered companies pass 80,000 (2026-04-28)"
    url: "https://smarthr.jp/release/20260428/"
    accessedAt: "2026-09-28"
---

[SmartHR](/en/articles/smarthr) and [Cybozu's kintone](/en/articles/cybozu-kintone) are both commonly described as Japan-born business SaaS. Yet cross-referencing both articles' techStack turns up not a single shared technology token — a zero-overlap matchup alongside X vs. Bluesky. In Figma vs. Canva, fixing gaps in the individual articles' techStack surfaced two shared technologies (AWS and Amazon S3). Here, we audited both articles' records and filled the gaps, and there is still no overlap. This time, the infrastructure choices for each company's core domestic service sit at opposite poles.

:::fact
Per SmartHR's official tech blog, the backend is standardized on Ruby on Rails, the frontend on React/TypeScript (with Next.js being introduced), the database is Google Cloud SQL, and the platform is Google Cloud. Per Google Cloud's official customer story (April 2022), web servers run on Cloud Run and asynchronous jobs on App Engine. In August 2025 the company announced upgrading its largest Rails application to Ruby 3.4 with YJIT. Cybozu, by contrast, leases racks in data centers across eastern and western Japan and runs the domestic kintone atop Neco, a home-built Kubernetes platform spanning thousands of servers. kintone.com for the US completed its migration to AWS in June 2020, and generative AI inference uses Amazon Bedrock. Even after adding these to both articles' techStack and re-running the cross-reference on September 28, 2026, not a single technology token overlaps, at any layer.
:::

:::pull
SmartHR sits at the pole of renting the cloud; Cybozu sits at the pole of building it yourself. The same phrase, "Japanese SaaS," covers two companies with opposite infrastructure philosophies.
:::

Correction (September 28, 2026). The first edition described Cybozu as a company running solely on its own data centers and called the infrastructure choices literally opposite; that was inaccurate. Per official announcements, kintone.com for the US completed its migration to AWS in June 2020, and generative AI inference also uses Amazon Bedrock. What runs on Cybozu's own platform is the domestic service. We also added AWS and Amazon Bedrock to Cybozu's techStack, and Cloud Run and App Engine to SmartHR's. The zero-shared-technology result is unchanged after these additions. The first edition also called this the third zero-overlap matchup after DeepL vs. Nani Translation and X vs. Bluesky, and cited Figma vs. Canva as an example of an illusory zero; both premises have changed. After gaps in the individual articles' techStack were fixed, Figma vs. Canva shares two technologies and DeepL vs. Nani Translation shares one (Cloudflare), so we revised those passages.

## Dig one workflow deep, or take the surface wide

SmartHR's design digs deep into a single domain: HR and labor procedures. Onboarding paperwork, year-end tax adjustments, employment contracts — complex workflows that change with every law revision — get polished doggedly on a standard Rails + React stack. The official tech blog's stated policy, unifying Rails and React across more than ten products, prioritizes a consistent development experience over feature breadth. Entrusting the platform to Google Cloud reads as a decision to concentrate engineering resources on the complexity of the domain logic itself.

kintone does the opposite: it takes the surface of business apps as wide as possible. Combining generic parts — forms, databases, approval workflows — it lets customers build their own apps for anything from expense reports to sales pipeline management, not just HR. That generality means kintone invests engineering not in domain-specific feature depth but in the stability and long-term cost structure of the platform itself — and Neco, a self-built platform spanning thousands of servers, is exactly that investment.

:::guess
This fork appears to come down to a difference in what kind of reassurance each company sells. SmartHR sells accuracy that keeps pace with regulatory change — where the update speed of business logic is the value, so entrusting infrastructure to a reliable off-the-shelf platform (Google Cloud) to maximize development speed is rational. kintone sells stability that keeps running in the same place for decades — and given that it holds the core operational data of a huge number of companies for the long haul, controlling the cost structure through your own platform becomes the rational long-term choice. Even within the same SaaS category, what each company sells as its reassurance appears to dictate its infrastructure choice.
:::

## What the growth numbers reveal about each company's ceiling

SmartHR keeps deepening within the addressable market of a single workflow — HR and labor. kintone, within the broad definition of business apps, has spread its MRR mix almost evenly across large, mid-size, and small companies.

:::fact
Per Cybozu's official IR materials and coverage of its earnings briefing, kintone's revenue for fiscal 2025 grew 33.9% year over year, with contracts surpassing 39,000 companies, and its MRR mix by customer size is well balanced — 39.1% under 100 employees, 33.7% from 100–999, 27.2% at 1,000+. Consolidated operating profit for the company nearly doubled, up 106.4%. SmartHR, per its official announcements, passed ¥20 billion in ARR in April 2025 and ¥30 billion in July 2026, with registered companies exceeding 80,000 in April 2026.
:::

:::guess
That kintone's customer base isn't concentrated in any single segment appears to follow from the product design itself: a generic no-code tool applies regardless of company size. SmartHR, by contrast, differentiates on the depth of a single workflow, so its growth likely tracks not company size but how complex a given company's HR operations are. This comparison suggests Japanese SaaS has at least two independent winning paths: the Neco-style cost advantage of owning your platform, and the SmartHR-style expertise of specializing in one domain.
:::

Under the same label, "Japanese SaaS," SmartHR and Cybozu overlap on neither technology nor business strategy. Win by renting the cloud and going deep on one workflow, or win by building the cloud and going wide on the surface — the zero-shared-technology measurement is the most honest evidence that these two companies occupy different corners of the same market.
