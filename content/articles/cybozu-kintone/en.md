---
service: "サイボウズ kintone"
title: "Building Kubernetes on Your Own Racks in the Age of Cloud — Dissecting Cybozu's Self-Reliance"
description: "Cybozu, maker of the no-code business-app platform kintone, runs neither on AWS nor Google Cloud: thousands of servers in leased racks across east and west Japan, orchestrated by Neco, a home-built Kubernetes platform. A dissection of Japan's most unusual SaaS company from its engineering blog and IR filings — in a year its operating profit doubled."
lead: "Nearly every SaaS this site has dissected sits on AWS or Google Cloud. Cybozu does not. It leases racks in data centers across eastern and western Japan, runs a home-built Kubernetes platform called Neco across thousands of servers, and serves kintone on top. This is a dissection of the rationale for staying on-premises in the cloud era — and of the fiscal year in which operating profit doubled."
category: saas
tags: [no-code, groupware, kubernetes, on-premises, b2b]
publishedAt: "2026-07-21"
updatedAt: "2026-07-21"
lastVerified: "2026-07-21"
serviceUrl: "https://kintone.cybozu.co.jp/"
vendor: "サイボウズ株式会社"
origin: "JP"
heroTheme: "cybozu-kintone"
scores: { product: 4.0, ux: 3.5, tech: 4.5, business: 4.5 }
techStack:
  - layer: "Infrastructure platform"
    name: "Neco (自社Kubernetes基盤)"
    confidence: confirmed
    evidence: "Official engineering blog describes a Kubernetes cluster at the scale of thousands of servers supporting kintone, Garoon, and Cybozu Office — with in-house tools Sabakan (server lifecycle) and CKE (cluster management), and automated failure detection and recovery via BMC diagnostics"
    evidenceUrl: "https://blog.cybozu.io/entry/2025/04/11/112000"
  - layer: "Data centers"
    name: "オンプレミス (国内東西データセンター)"
    confidence: confirmed
    evidence: "Official engineering blog states Cybozu leases racks in multiple domestic data centers, operated in an east/west split for disaster resilience"
    evidenceUrl: "https://blog.cybozu.io/entry/2025/06/16/080000"
  - layer: "Distributed storage"
    name: "Rook + Ceph"
    confidence: confirmed
    evidence: "Official engineering blog details Rook/Ceph distributed storage operations, including safe inter-rack data moves (2026-07)"
    evidenceUrl: "https://blog.cybozu.io/entry/2026/07/08/090000"
  - layer: "Full-text search"
    name: "Elasticsearch"
    confidence: confirmed
    evidence: "Elastic official case study states the cloud platform's full-text search was rebuilt on Elasticsearch"
    evidenceUrl: "https://www.elastic.co/jp/customers/cybozu"
  - layer: "Product site delivery"
    name: "Apache + Amazon CloudFront"
    confidence: confirmed
    evidence: "Our own HTTP header observation (server: Apache, x-cache: RefreshHit from cloudfront; 2026-07-21). The product runs on Cybozu's own platform, but the marketing site flows through CloudFront"
    evidenceUrl: "https://kintone.cybozu.co.jp/"
sources:
  - label: "Cybozu official IR: fiscal 2025 business digest (revenue ¥37.43B, +26.1% YoY; operating profit ¥10.1B)"
    url: "https://cybozu.co.jp/company/ir/meeting/pdf/2512_02.pdf"
    accessedAt: "2026-07-21"
  - label: "Cybozu Inside Out: introducing Neco, Cybozu's Kubernetes platform (2025-04-11)"
    url: "https://blog.cybozu.io/entry/2025/04/11/112000"
    accessedAt: "2026-07-21"
  - label: "Cybozu Inside Out: the data centers where Cybozu.com runs (2025-06-16)"
    url: "https://blog.cybozu.io/entry/2025/06/16/080000"
    accessedAt: "2026-07-21"
  - label: "Mynavi News: Cybozu fiscal 2025 earnings briefing (kintone revenue ¥21.69B; 39,000 customers; 2026-02-25)"
    url: "https://news.mynavi.jp/techplus/article/20260225-4165084/"
    accessedAt: "2026-07-21"
---

## Service overview

Cybozu, founded in 1997, is a groupware company whose flagship is now kintone — a no-code platform for building business applications. Forms, databases, and approval workflows assemble without programming, on the premise that non-engineers in the field build apps for their own departments. The company is equally known for its philosophy ("a society brimming with teamwork") and its HR stance that a hundred employees should have a hundred ways of working.

:::fact
Per official IR materials, consolidated revenue for the fiscal year ending December 2025 was ¥37.43 billion (up 26.1% year over year), with operating profit of ¥10.1 billion — up 106.4%, nearly doubling. Per coverage of the earnings briefing, kintone revenue reached ¥21.69 billion (up 33.9%) with contracts surpassing 39,000 companies. The MRR mix by customer size — 39.1% under 100 employees, 33.7% from 100–999, 27.2% at 1,000+ — shows a base no longer dependent on any single segment.
:::

:::pull
Nearly every SaaS this site has dissected sits on AWS or Google Cloud. Only Cybozu sits on its own racks.
:::

::scorecard

## UX analysis

kintone's UX is optimized for not waiting on the IT department. It prioritizes something over beauty: that a non-engineer in the field can finish the job alone.

- **Apps assemble by drag and drop.** Arrange form parts and a database appears with list views, search, and aggregation; approval workflows bolt on through the same UI. It is the shortest path for replacing the workload currently running on Excel.
- **Expert escape hatches are built in.** JavaScript customization, plugins, and a partner ecosystem catch the organizations that outgrow no-code's ceiling.
- **The look is clerical — and that is part of the trust.** A UI that resembles a business system rather than a polished consumer app reassures both approvers and the field that this is a tool.
- **The learning design assumes builders in the field.** Help, certifications, and user communities (kintone hive and others) are machinery for growing non-engineer app builders. It is an adoption strategy that invests in people rather than just the tool.

## Tech stack

::techstack

:::fact
Cybozu leases racks in data centers across eastern and western Japan and operates Neco, a home-built Kubernetes platform, across thousands of servers. Per the official engineering blog, the company built its own tooling end to end: Sabakan for physical server inventory and OS provisioning, CKE (Cybozu Kubernetes Engine) for declarative cluster construction and upgrades, with failure detection via BMC diagnostics and automated recovery before human escalation. Storage is distributed on Rook/Ceph; full-text search runs on Elasticsearch. kintone, Garoon, and Cybozu Office all run on this platform.
:::

:::guess
Staying on-premises through the cloud era appears to come down to SaaS cost structure. A multi-tenant product serving tens of thousands of companies has predictable load, and over the long run depreciating your own hardware beats paying for cloud elasticity you don't need. The investment in full-stack automation — Sabakan, CKE — is what lets a small team run thousands of servers: effectively an in-house implementation of what cloud providers do internally. The east/west domestic footprint also plausibly doubles as a sales asset for government agencies and enterprises that care about data sovereignty.
:::

## Business model

Cybozu's revenue is subscription-based, anchored by kintone alongside Garoon, Office, and Mailwise, with partner-led distribution and an ecosystem driving expansion.

:::fact
Fiscal 2025 delivered ¥37.43 billion in revenue against ¥10.1 billion in operating profit — a 27% operating margin, roughly double the prior year. kintone's customer mix is split nearly in thirds across small, mid-size, and large companies, and the earnings briefing highlighted accelerated development for large-scale, company-wide deployments.
:::

:::guess
The doubling of profit looks like subscription revenue finally out-scaling the up-front investments — the in-house platform, overseas expansion, advertising — classic subscription operating leverage. Having started from "no-code built by the field" for small businesses and grown to 27% of MRR from large enterprises, kintone's competitor is no longer domestic groupware but enterprise internal-development budgets themselves. Against SmartHR, which digs one workflow (HR and labor) deep, kintone takes the wide surface of business apps in general — a contrast that maps the two winning paths of Japanese SaaS.
:::

Thousands of servers on its own racks, Kubernetes tooling written in-house — the company that chose the opposite of every other service this site has dissected posts a healthy 27% operating margin. Cybozu's dissection is a reminder of something easily forgotten: the cloud is an option, not a premise. Self-reliance here isn't ideology. It's the answer to a cost calculation.
