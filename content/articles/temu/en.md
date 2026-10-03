---
service: "Temu"
title: "A House Built on a Tariff Loophole — the Two and a Half Years Temu Spent Rebuilding Its Own Model"
description: "Temu, the cross-border marketplace China's PDD Holdings (operator of Pinduoduo) launched in the US in September 2022. It grew rapidly on a direct-consignment model that assumed low-value imports would stay duty-free, then in May 2025, following a US tariff policy change, dropped direct shipping from China in favor of a locally-seller-centered model. A dissection of Temu's structure from public information."
lead: "Temu launched in the US in September 2022, and within about a year and a half was reported to have overtaken Amazon in monthly active users. The foundation of that growth was a direct-to-consumer shipping model from China, built on the assumption that the US would keep waiving duties on low-value imports (the \"de minimis\" exemption). In May 2025, that exemption itself changed, and Temu was forced to rebuild — dropping direct shipping from China for a model centered on local sellers. This dissects both the strength and the fragility of a business model built on top of a specific rule."
category: consumer-app
tags: [e-commerce, marketplace, cross-border, pdd-holdings, tariffs]
publishedAt: "2026-07-23"
updatedAt: "2026-10-03"
lastVerified: "2026-09-28"
serviceUrl: "https://www.temu.com/"
vendor: "Whaleco, Inc."
origin: "CN"
heroTheme: "temu"
scores: { product: 3.5, ux: 4.0, tech: 3.5, business: 3.5 }
techStack:
  - layer: "US operating entity"
    name: "Whaleco, Inc. (PDD Holdings subsidiary)"
    confidence: likely
    evidence: "Per aggregated Wikipedia reporting, Temu's US operations run through Whaleco, Inc., a PDD Holdings subsidiary registered in Delaware and Massachusetts. We could not reach a primary Temu/PDD source this time, hence \"likely\""
  - layer: "Parent company"
    name: "PDD Holdings (formerly Pinduoduo)"
    confidence: likely
    evidence: "Per aggregated Wikipedia reporting, PDD Holdings is incorporated in the Cayman Islands with a principal office also listed in Dublin, and grew out of Pinduoduo, founded in Shanghai in 2015. It reportedly changed legal domicile from Shanghai to Dublin in 2023"
  - layer: "Supply chain model"
    name: "Consignment model (Next-Gen Manufacturing, direct shipping)"
    confidence: likely
    evidence: "Per aggregated Wikipedia reporting, China-based sellers ship directly to consumers without intermediate distributors, and sellers must meet minimum thresholds such as 30 units and $90 in sales within 14 days"
  - layer: "Domestic sibling platform"
    name: "Pinduoduo (拼多多)"
    confidence: likely
    evidence: "Per aggregated Wikipedia reporting, Pinduoduo continues to operate as PDD Holdings' domestic Chinese sibling platform, while Temu was launched in September 2022 specifically for international expansion"
sources:
  - label: "Wikipedia: Temu (launch history, consignment model, user growth trajectory, tariff-policy response, regulatory developments aggregated)"
    url: "https://en.wikipedia.org/wiki/Temu"
    accessedAt: "2026-09-28"
  - label: "Wikipedia: PDD Holdings (restructuring history from Pinduoduo, domicile change, group financial metrics aggregated)"
    url: "https://en.wikipedia.org/wiki/PDD_Holdings"
    accessedAt: "2026-07-23"
  - label: "European Commission press release: Temu fined €200 million for breaching the Digital Services Act (May 28, 2026)"
    url: "https://ec.europa.eu/commission/presscorner/detail/en/ip_26_1178"
    accessedAt: "2026-09-28"
  - label: "European Commission, Taxation and Customs Union: guidance and legal text on the temporary flat duty on low-value imports (€3 per item from July 1, 2026)"
    url: "https://taxation-customs.ec.europa.eu/news/guidance-and-legal-text-temporary-flat-fee-low-value-imports-which-will-apply-until-1-july-2028-2026-06-08_en"
    accessedAt: "2026-09-28"
---

## Service overview

Temu is a cross-border e-commerce platform that PDD Holdings — operator of China's Pinduoduo — founded in July 2022 and launched in the US that September. Per aggregated Wikipedia reporting, the US business runs through subsidiary Whaleco, Inc., registered in Delaware and Massachusetts, while parent PDD Holdings is incorporated in the Cayman Islands with a base in Dublin as well. The parent platform, Pinduoduo, was founded in Shanghai in 2015 by Colin Huang.

:::fact
Per aggregated Wikipedia reporting, Temu's US monthly active users reached 51 million by January 2024, passed 100 million by February the same year (with cumulative app downloads exceeding 130 million), and by December 2024 had reportedly overtaken Amazon in monthly active users, with roughly 700 million monthly website visits. As of April 2025 it reportedly operated in more than 90 markets. In February that year, it reportedly ran multiple Super Bowl ad spots offering $15 million in giveaways.
:::

:::pull
A business model built on the assumption that low-value imports stay duty-free had to be rebuilt the moment that rule changed. Temu's 2025 was that story playing out in real time.
:::

::scorecard

## UX analysis

Temu's UX commits fully to a design that pushes purchases through low prices and game-like mechanics.

- **A direct-shipping model with no intermediate distributor.** Per aggregated Wikipedia reporting, China-based sellers ship straight to consumers, a structure that makes it easier to undercut existing cross-border e-commerce on price.
- **A high bar for sellers too.** Per the same source, sellers face minimum thresholds — 30 units and $90 in sales within 14 days — meaning both price and supply face strict selection.
- **Awareness bought at scale through advertising.** Tactics like Super Bowl ad spots buy overwhelming awareness in a short span, favoring an ad-budget-driven growth curve over word of mouth.
- **Quality and safety concerns keep surfacing in reporting.** Multiple authorities — South Korean regulators (August 2024), an EU toy-safety investigation — have reportedly found products exceeding legal limits for hazardous substances, suggesting the price-first design may come paired with quality-control challenges.

## Tech stack

::techstack

:::fact
Per aggregated Wikipedia reporting, Temu's US business is run by PDD Holdings subsidiary Whaleco, Inc., and parent PDD Holdings reportedly changed its legal domicile from Shanghai to Dublin in 2023. The supply chain runs on what's described as a "next-gen manufacturing" direct-consignment model, where China-based sellers ship to consumers with no intermediate distributor. In May 2025, following a change in US tariff policy (a revision to the low-value-import duty exemption), Temu reportedly dropped direct shipping from China in favor of a model where locally based sellers hold inventory and ship within the US.
:::

:::guess
A direct-shipping model with no intermediate distributor is both the source of price competitiveness and, it appears, structurally fragile in its dependence on a specific rule — the low-value-import duty exemption. That Temu could pivot to a locally-seller-centered model relatively quickly once that assumption broke in May 2025 suggests the operational know-how behind the consignment model itself wasn't tied to the exemption. At the same time, seller-selection criteria weighted heavily toward low price plausibly contribute to the recurring quality and safety concerns in reporting — growth speed and quality assurance appear to remain in tension.
:::

## Business model

Temu's revenue rests on seller commissions and maximizing purchase frequency through aggressively low prices.

:::fact
Per aggregated Wikipedia reporting, parent PDD Holdings' group-wide gross merchandise value (GMV) was reported at 4.17 trillion yuan (roughly $590 billion) in 2021, with 2024 revenue at $54.0 billion and net income at $15.4 billion. On regulation, a 2023 US House committee report flagged forced-labor risk in the supply chain; from late 2024, the EU investigated the sale of illegal products, and on May 28, 2026, the European Commission announced a €200 million fine against Temu under the Digital Services Act. The stated reason was an inadequate assessment of the risk of illegal products being offered, and Temu was given until August 28, 2026 to submit an action plan. On customs, per the European Commission, the EU ended its duty exemption for low-value imports of €150 or less on June 30, 2026, and has applied a temporary flat duty of €3 per item since July 1 (until July 1, 2028). Litigation with Shein over copyright and antitrust claims continues, with a UK trial reportedly expected in late 2026.
:::

:::guess
Pouring large ad budgets into maximizing awareness and user count quickly looks aimed at locking in market share before regulatory risk and quality concerns fully materialized. That the response to the 2025 US tariff change is overlapping with regulatory costs in the EU in 2026, the fine and the new duty on low-value imports, suggests Temu's "cheap and fast" growth model comes bundled with an ongoing bill: regulatory compliance costs that recur, market by market, as it expands. Running Pinduoduo domestically and Temu internationally as separate operations likely reflects the practical reality that regulatory environments and supply chains differ sharply by region.
:::

A direct-shipping model built on top of one country's duty exemption had to be rebuilt the moment that exemption changed. What this dissection of Temu reveals is a structure where the supply-chain logic behind its price competitiveness and the fragility of depending on a specific regulatory environment sit permanently side by side.
