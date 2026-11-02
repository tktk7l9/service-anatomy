---
service: "Studio"
title: "You Can't Export It, So It Takes On Everything — How Japan's No-Code Builder Studio Rebuilt Its Hosting, Opened New Doors for AI, and Faced the Weight of Keeping It All in One Place After Its October 2026 Breach"
description: "Studio puts design, CMS, forms and hosting in one place and offers no way to export what you build. At 900,000 users and 250,000 published sites, the Japanese web platform moved its hosting from SPA to MPA, dropped monthly visitor limits, and opened new entry points with Studio.Assistant and Studio.Drop. Then, in October 2026, it disclosed unauthorized access that may have exposed information on every user. We dissect the pricing from a ¥590 Mini plan to the ¥99,800-a-month Assistant, the PHP and Vue stack, and an ecosystem that passes 100% of template sales to sellers, using official pages, help articles, job postings and our own response-header observations."
lead: "Studio's help center contains a line that is hard to forget. Designs, page data, source code and CMS data cannot be exported. You can publish only on Studio's servers. It sounds restrictive, and it is the other side of what Studio sells: you never need a server. The Japanese web platform has grown to 900,000 users and 250,000 published sites. In 2026 it rebuilt its hosting, removed its traffic limits and handed AI the first stage of production. Then, that October, it disclosed unauthorized access, and the weight of keeping everything in one place came into view."
category: saas
tags: [website-builder, no-code, design-tool, cms, hosting, ai]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
serviceUrl: "https://studio.design/ja"
vendor: "Studio, Inc."
origin: "JP"
heroTheme: "studio"
scores: { product: 4.0, ux: 4.0, tech: 3.5, business: 3.5 }
expires:
  - date: "2026-11-15"
    claim: "Follow-ups to the October 2026 unauthorized access: affected counts, the secondary-damage investigation, the cause and prevention measures, the opening of joint reporting to the Personal Information Protection Commission, and the custom-proxy old-key replacement deadline"
  - date: "2026-12-31"
    claim: "Studio.Drop being an invite-only closed beta, and the 14-day free trial of Studio.Assistant"
  - date: "2027-01-31"
    claim: "The plan to end, around the end of January 2027, the switch back from the new hosting base to the old one and support-desk handling of the old base"
techStack:
  - layer: "Cloud platform"
    name: "Google Cloud"
    confidence: confirmed
    evidence: "The official security page says all data is managed in Google Cloud Platform facilities and that the service is made redundant with global load balancing across regions in Tokyo and Iowa"
    evidenceUrl: "https://studio.design/ja/lp/security"
  - layer: "WAF"
    name: "Google Cloud Armor"
    confidence: confirmed
    evidence: "The official security page says Studio configures its WAF with Google Cloud Armor"
    evidenceUrl: "https://studio.design/ja/lp/security"
  - layer: "Application server"
    name: "PHP / Laravel"
    confidence: confirmed
    evidence: "The official Application Engineer job posting lists \"server side: PHP, Laravel, Node.js, Nuxt.js\". The October 2026 emergency maintenance notice says Studio updated PHP as a precaution against critical PHP vulnerabilities and also stopped APIs serving published sites"
    evidenceUrl: "https://herp.careers/v1/studio/J3Bj14R2i3Ke"
  - layer: "Frontend"
    name: "Vue.js / TypeScript"
    confidence: confirmed
    evidence: "The same job posting lists \"front: TypeScript, Vue.js, HTML, Sass, CSS\". The talk abstract on the Vue Fes Japan 2025 sponsor page says the company has used Vue.js for eight years, since version 1"
    evidenceUrl: "https://herp.careers/v1/studio/J3Bj14R2i3Ke"
  - layer: "Server-side rendering"
    name: "Node.js / Nuxt.js"
    confidence: confirmed
    evidence: "The same job posting lists Node.js and Nuxt.js. In our own observation (2026-11-02), published sites on *.studio.site also return x-powered-by: Nuxt"
    evidenceUrl: "https://herp.careers/v1/studio/J3Bj14R2i3Ke"
  - layer: "New hosting base"
    name: "Custom rendering engine (MPA + SSR + CDN cache)"
    confidence: confirmed
    evidence: "The official preview post says Studio built its own rendering engine and moved from SPA to MPA. The help center says HTML generated on the server is cached on and served from a CDN"
    evidenceUrl: "https://studio.design/ja/whats-new/site-speed-up"
  - layer: "Server side (frontend role)"
    name: "Bun"
    confidence: confirmed
    evidence: "The official Frontend Engineer job posting lists \"server side: Bun\". It does not say which workloads use it"
    evidenceUrl: "https://herp.careers/v1/studio/YiiIMnKiGCpS"
  - layer: "Infrastructure"
    name: "Kubernetes / Firebase"
    confidence: confirmed
    evidence: "The official Application Engineer job posting lists \"infrastructure: GCP (Firebase, Kubernetes)\""
    evidenceUrl: "https://herp.careers/v1/studio/J3Bj14R2i3Ke"
  - layer: "Payments"
    name: "Stripe"
    confidence: confirmed
    evidence: "The official help center says Studio.Assistant payment history and receipts open in a Stripe billing screen, and that template sales and payouts are also managed in Stripe"
    evidenceUrl: "https://help.studio.design/ja/articles/16767384"
  - layer: "CDN and edge"
    name: "Cloudflare"
    confidence: likely
    evidence: "Job postings list Google Cloud and Cloudflare together under infrastructure. In our own observation (2026-11-02), studio.design returned server: cloudflare and cf-ray, while the corporate site studio.inc and sites on *.studio.site returned server: Google Frontend. We could not confirm what role Cloudflare plays in delivering published sites overall"
  - layer: "Asset storage"
    name: "Google Cloud Storage"
    confidence: likely
    evidence: "In our own observation (2026-11-02), images on published pages come from studio-design-asset-files on storage.googleapis.com, with response headers starting x-goog-"
  - layer: "Help center"
    name: "Intercom"
    confidence: likely
    evidence: "In our own observation (2026-11-02), help.studio.design returns an x-intercom-version response header"
  - layer: "Web font delivery (apparently experimental)"
    name: "Incremental Font Transfer"
    confidence: speculative
    evidence: "The studio-design GitHub organization holds a fork of W3C's ift-encoder (created 2026-10-09) and a fork of woff2-rs (created 2026-05-14). An interview on the company's recruiting site says one of its engineers takes part in the W3C Web Fonts Working Group. Production use has not been announced"
    evidenceUrl: "https://github.com/studio-design"
sources:
  - label: "Studio, Inc.: Company profile (founding, capital, headcount, users, published sites, officers)"
    url: "https://studio.inc/company"
    accessedAt: "2026-11-02"
  - label: "Studio, Inc.: 10th anniversary site (history and funding rounds)"
    url: "https://studio.inc/10th"
    accessedAt: "2026-11-02"
  - label: "Studio: Pricing"
    url: "https://studio.design/ja/pricing"
    accessedAt: "2026-11-02"
  - label: "Studio: Terms of service (including the tax-inclusive price statement in the commercial disclosures)"
    url: "https://studio.design/ja/terms"
    accessedAt: "2026-11-02"
  - label: "Studio, Inc. press release: Rebranding announcement (2024-10-01)"
    url: "https://studio.inc/pressrelease/rebranding_2024"
    accessedAt: "2026-11-02"
  - label: "Studio: Pricing revision notice (2024-10-01)"
    url: "https://studio.design/ja/whats-new/pricing-renewal-2024"
    accessedAt: "2026-11-02"
  - label: "Studio, Inc. press release: Enterprise plan launch (2023-11-13)"
    url: "https://studio.inc/pressrelease/enterprise-plan_release"
    accessedAt: "2026-11-02"
  - label: "Studio, Inc. press release: US subsidiary (2022-12-13)"
    url: "https://studio.inc/pressrelease/studio-us_release"
    accessedAt: "2026-11-02"
  - label: "Studio, Inc. press release: Merger with gaz Inc. (2025-05-12)"
    url: "https://studio.inc/pressrelease/studio-gaz"
    accessedAt: "2026-11-02"
  - label: "Studio, Inc. press release: ISO/IEC 27001:2022 certification (2024-01-11)"
    url: "https://studio.inc/pressrelease/isms27001"
    accessedAt: "2026-11-02"
  - label: "Studio: No. 1 no-code CMS in Japan by usage (2026-04-16)"
    url: "https://studio.design/ja/whats-new/no-code-cms-japan-no1"
    accessedAt: "2026-11-02"
  - label: "Studio Help: Exporting site data"
    url: "https://help.studio.design/ja/articles/8860404"
    accessedAt: "2026-11-02"
  - label: "Studio Help: Servers where Studio sites can be published"
    url: "https://help.studio.design/ja/articles/4185070"
    accessedAt: "2026-11-02"
  - label: "Studio Help: Cart and payment features"
    url: "https://help.studio.design/ja/articles/4185079"
    accessedAt: "2026-11-02"
  - label: "Studio: Design editor"
    url: "https://studio.design/ja/editor"
    accessedAt: "2026-11-02"
  - label: "Studio: Editor 5.0 general release (2025-11-25)"
    url: "https://studio.design/ja/whats-new/editor5"
    accessedAt: "2026-11-02"
  - label: "Studio Help: Studio's AI features"
    url: "https://help.studio.design/ja/articles/12910840"
    accessedAt: "2026-11-02"
  - label: "Studio, Inc. press release: Figma to STUDIO (2023-11-01)"
    url: "https://studio.inc/pressrelease/figma-to-studio_release"
    accessedAt: "2026-11-02"
  - label: "Studio: Enterprise page"
    url: "https://studio.design/ja/lp/enterprise"
    accessedAt: "2026-11-02"
  - label: "Studio: Additional Morisawa typefaces (2026-03-24)"
    url: "https://studio.design/ja/whats-new/morisawa-fonts-202603"
    accessedAt: "2026-11-02"
  - label: "Studio: Embed Code AI (2026-01-27)"
    url: "https://studio.design/ja/whats-new/embedcodeai"
    accessedAt: "2026-11-02"
  - label: "Studio Help: End of FONTPLUS"
    url: "https://help.studio.design/ja/articles/14130523"
    accessedAt: "2026-11-02"
  - label: "Studio: Preview of the faster hosting base (2025-11-04)"
    url: "https://studio.design/ja/whats-new/site-speed-up"
    accessedAt: "2026-11-02"
  - label: "Studio: General release of the new hosting base (2026-06-11)"
    url: "https://studio.design/ja/whats-new/site-speed-up-release"
    accessedAt: "2026-11-02"
  - label: "Studio Help: Studio's hosting base"
    url: "https://help.studio.design/ja/articles/15444819"
    accessedAt: "2026-11-02"
  - label: "Studio: Monthly visitor limits removed (2026-07-02)"
    url: "https://studio.design/ja/whats-new/remove-visitor-limit"
    accessedAt: "2026-11-02"
  - label: "Studio Help: Concurrent access limits and options"
    url: "https://help.studio.design/ja/articles/3559957"
    accessedAt: "2026-11-02"
  - label: "Studio Help: Cloudflare DNS Proxy mode"
    url: "https://help.studio.design/ja/articles/14075332"
    accessedAt: "2026-11-02"
  - label: "Studio Help: Custom proxy overview and setup"
    url: "https://help.studio.design/ja/articles/9334656"
    accessedAt: "2026-11-02"
  - label: "Studio: Data Connect API (2026-04-20)"
    url: "https://studio.design/ja/whats-new/dataconnect-api"
    accessedAt: "2026-11-02"
  - label: "Studio: Studio.Assistant general release (2026-09-07)"
    url: "https://studio.design/ja/whats-new/assistant-official-release"
    accessedAt: "2026-11-02"
  - label: "Studio Help: Managing Studio.Assistant plans"
    url: "https://help.studio.design/ja/articles/16767384"
    accessedAt: "2026-11-02"
  - label: "Studio: Studio.Assistant FAQ"
    url: "https://studio.design/ja/assistant/faq"
    accessedAt: "2026-11-02"
  - label: "Studio: Studio.Drop announcement (2026-09-01)"
    url: "https://studio.design/ja/whats-new/studiodrop"
    accessedAt: "2026-11-02"
  - label: "Studio.Drop official site"
    url: "https://drop.studio.design/"
    accessedAt: "2026-11-02"
  - label: "Studio: Security"
    url: "https://studio.design/ja/lp/security"
    accessedAt: "2026-11-02"
  - label: "Studio: Unauthorized access information portal"
    url: "https://studio.design/ja/security/notice/2026-10-incident"
    accessedAt: "2026-11-02"
  - label: "Studio: Apology and requests on the unauthorized access (first report, 2026-10-16)"
    url: "https://studio.design/ja/whats-new/unauthorized-access-2026-10"
    accessedAt: "2026-11-02"
  - label: "Studio: Guidance on reporting to the Personal Information Protection Commission (2026-10-17)"
    url: "https://studio.design/ja/whats-new/unauthorized-access-2026-10-form"
    accessedAt: "2026-11-02"
  - label: "Studio: Emergency maintenance notice (2026-10-21)"
    url: "https://studio.design/ja/whats-new/maintenance-20261021"
    accessedAt: "2026-11-02"
  - label: "Studio: Last-editor data in CMS API responses (2026-02-20)"
    url: "https://studio.design/ja/whats-new/security-incident-report-202602"
    accessedAt: "2026-11-02"
  - label: "Studio job posting: Application Engineer"
    url: "https://herp.careers/v1/studio/J3Bj14R2i3Ke"
    accessedAt: "2026-11-02"
  - label: "Studio job posting: Frontend Engineer"
    url: "https://herp.careers/v1/studio/YiiIMnKiGCpS"
    accessedAt: "2026-11-02"
  - label: "Vue Fes Japan 2025: Studio, Inc. sponsor page"
    url: "https://vuefes.jp/2025/sponsors/studio"
    accessedAt: "2026-11-02"
  - label: "Studio, Inc. recruiting site: Inside W3C interview (Web Fonts Working Group participation)"
    url: "https://studio.inc/career/product/engineer/tech-interview/w3c-inside-1"
    accessedAt: "2026-11-02"
  - label: "GitHub: studio-design organization (Gesso, fork of ift-encoder and others)"
    url: "https://github.com/studio-design"
    accessedAt: "2026-11-02"
  - label: "Studio Help: Selling paid templates (revenue share)"
    url: "https://help.studio.design/ja/articles/11755322"
    accessedAt: "2026-11-02"
  - label: "Studio Help: Studio Template Affiliate Program"
    url: "https://help.studio.design/ja/articles/11755633"
    accessedAt: "2026-11-02"
  - label: "Studio, Inc. press release: STUDIO Store passes 2,000 transactions (2023-12-14)"
    url: "https://studio.inc/pressrelease/studiostore_2000"
    accessedAt: "2026-11-02"
  - label: "Studio: Studio.Works"
    url: "https://studio.design/ja/works"
    accessedAt: "2026-11-02"
  - label: "Studio: Startup support program"
    url: "https://studio.design/ja/lp/startup"
    accessedAt: "2026-11-02"
  - label: "Studio Help: Workspace pricing"
    url: "https://help.studio.design/ja/articles/9537342"
    accessedAt: "2026-11-02"
  - label: "Studio Help: Accepted payment methods"
    url: "https://help.studio.design/ja/articles/11112909"
    accessedAt: "2026-11-02"
  - label: "Studio Help: Refunds on project plans"
    url: "https://help.studio.design/ja/articles/3548049"
    accessedAt: "2026-11-02"
---

Set Studio beside the no-code tools from overseas and what stands out is not its feature list but one fact: you cannot export. Design editing, CMS, forms and delivery all live inside the company, and it has built no door out. Customers stop thinking about servers and, in return, leave the foundations of their site with Studio. Nearly everything that happened to Studio in 2026, good and heavy alike, follows from that structure.

## Service Overview

Studio is a platform for designing websites without code and publishing and running them in the same place. Until the October 2024 rebrand it was written STUDIO in capitals. Since then it has been "Studio" in Japan and "Studio.Design" abroad. The company is private and does not disclose revenue, but its official pages let you trace its growth.

:::fact
According to the Studio, Inc. company profile (viewed 2026-11-02), the company was founded in April 2016, its Representative Director and CEO is Joe Ishii, its capital is ¥100 million (excluding capital reserve), and it has 75 employees (October 2026, officers and regular staff). It lists 900,000+ users and 250,000+ published sites. Earlier press releases give about 100,000 published sites and about 350,000 users in August 2023, then 100,000 published sites and over 500,000 users in September 2024, with 30 employees in May 2023 and 41 in March 2024.
:::

:::fact
The history on the 10th anniversary site says the company began as Ohako Products. In 2017 it released the UX design tool STUDIO beta, moved to the studio.design domain and added website design. That year an MBO took it independent from Ohako and it raised ¥50 million in a seed round from D4V and others. A pre-Series A of ¥130 million followed in 2019 and a ¥350 million Series A in 2022. Those three rounds add up to ¥530 million, though the company has not published that as a cumulative figure. STUDIO 3.0 added CMS and animation in 2020, and the history notes that Japan's Digital Agency adopted it for its website in 2021.
:::

:::fact
The Enterprise plan for large sites arrived in November 2023, and ISO/IEC 27001:2022 certification in January 2024. A US subsidiary, STUDIO Technologies, Inc., was set up in December 2022. In May 2025 Studio absorbed the production company gaz Inc., and gaz's head Yasu Yoshioka became COO. According to the merger release, gaz ended its client work and moved its know-how from over 400 Studio projects into the platform side. In April 2026 Studio announced that a Tokyo Shoko Research survey (as of the end of December 2025) ranked it No. 1 among no-code CMSs by usage in Japan.
:::

:::fact
The official help center says Studio has no export feature for moving a site to another platform. Design data, page data, the HTML, CSS and JavaScript of the published site, and CMS data cannot be exported. Form responses can be downloaded as CSV. Sites can be published only on Studio's servers, not on your own server or a rental host. There is no cart or payment feature either, so e-commerce means embedding an outside service.
:::

:::pull
By building no way out, Studio took the whole job of running servers away from its customers. Its value and its weight come from the same point.
:::

::scorecard

## UX Analysis

The core of Studio's experience is letting you stack boxes into a layout without putting the vocabulary of CSS up front. Both are no-code, but the entry bar sits lower than at Webflow, which puts CSS terms straight on the panel.

- **It feels like stacking blocks.** The Enterprise page compares the work to building with blocks, and the Figma to STUDIO announcement says pasting Figma data converts it to the box model and sets up responsive behavior automatically. What a designer draws in Figma can reach publication with no implementer in between.
- **Japanese typefaces are standard equipment.** The editor page says 9,200+ fonts are free to use, including Morisawa's TypeSquare, Google Fonts, custom fonts and system fonts. Seven more Morisawa families (25 fonts) arrived in March 2026. Typefaces do depend on supplier contracts, though. FONTPLUS ended on April 7, 2026 when the contract with Monotype ended, and the notice said text set in those fonts would fall back to system fonts and the like from the next day.
- **There is a way in for the people who run the site.** A content editing mode changes text and images without breaking the layout, alongside real-time co-editing and one-click version restore. Version retention runs from one day on Free to 360 days on Business Plus, so it is part of the price ladder.
- **Check the dead ends first.** There is no cart or payment feature and no export. Running through Cloudflare's proxy is outside the standard feature set, and using your own reverse proxy needs the ¥39,800-a-month custom proxy add-on on Business Plus or above. Paid plans are in principle non-refundable. Ease of starting sits alongside difficulty changing course later.

AI has come in to speed up the hands more than to take over.

:::fact
Editor 5.0, released on November 25, 2025, added four features: Image AI for editing images in natural language, Text AI for generating and editing copy, Auto Responsive for filling in responsive settings, and Layer Rename for tidying layer names. The help center also lists SEO Writing Assist for titles and descriptions, and Embed Code AI for embedded code, added in January 2026. Usage is capped, and going over the limit disables the feature for a period.
:::

:::fact
Studio.Assistant, sold separately, launched in beta on December 23, 2025 and reached general release on September 7, 2026. It covers hearing sheets, sitemaps, wireframes, draft designs and copy adjustment, generates up to 10 pages at once and exports to Studio. Its FAQ says it is not an AI agent that completes work autonomously but a tool built around people adjusting results in a GUI. Generation combines and adjusts sections Studio holds the rights to, photos come from a commercially usable stock API, and sites you create are not used to train AI.
:::

## Tech Stack

::techstack

The recruiting site carries an interview series with engineers, but we found no official engineering blog that explains the architecture in detail. Even so, job postings, notices, public GitHub repositories and response headers together give a fairly clear outline.

:::fact
The Application Engineer posting lists PHP, Laravel, Node.js and Nuxt.js on the server side, TypeScript, Vue.js, HTML, Sass and CSS on the front, and GCP (Firebase, Kubernetes) for infrastructure. The Frontend Engineer posting lists Bun on the server side and Google Cloud and Cloudflare for infrastructure. A talk abstract for Vue Fes Japan 2025 says the company has used Vue.js for eight years, since version 1. The studio-design organization on GitHub publishes Gesso, an OpenAPI contract-testing tool for PHP.
:::

:::fact
According to the official security page, all data is managed in Google Cloud Platform facilities and the service uses global load balancing across regions in Tokyo and Iowa. The WAF runs on Google Cloud Armor and TLS 1.3 or later is enforced. Data is logically separated in the multi-tenant environment, and Enterprise customers get separation at the infrastructure level.
:::

The biggest technical event of 2026 was rebuilding the hosting base.

:::fact
According to the November 2025 preview, Studio built a new rendering engine of its own, cut JavaScript loading to a minimum, moved published sites from SPA to MPA, and reimplemented toggles and modals in standard HTML. It describes this as rebuilding features accumulated over seven years. Beta came in January 2026 and general release on June 11, after which new projects get the new base automatically. The help center says the new base caches server-generated HTML on a CDN and discards the old cache on publishing or CMS updates.
:::

:::fact
In the company's own tests, a site adjusted from a template went from a mobile Lighthouse score of 63 on the old base to 100, and sites using the CMS scored around 98. On Studio Blog, daily sign-ups from search rose about 84%, and on other pages the average search position improved from 40 to 25. The company cautions that these come from its own sites and templates and are not guaranteed for every project. It also says AI tools such as NotebookLM, which struggled to read the old base, can now read site content.
:::

:::fact
Existing projects do not switch automatically. After switching, custom CSS and JavaScript or tag settings built for an SPA (such as Google Tag Manager triggers) may not behave as expected. The ability to switch back to the old base and support-desk handling of the old base are due to end around the end of January 2027. Security updates to the old base will continue, but some new features will be offered only on the new one.
:::

:::guess
In our observation (2026-11-02), studio.design and studio.inc return headers starting x-hrc-, and the HTML of studio.design carries the generator "Studio.Design.HRC". Some sites on *.studio.site, by contrast, return x-powered-by: Nuxt and s-maxage=3, which suggests the old and new bases are running side by side. The new renderer appears to be a custom implementation that has left Nuxt, and the Bun in the job posting is a candidate for its runtime. GitHub also holds a fork of W3C's ift-encoder, and one of the company's engineers takes part in the Web Fonts Working Group. Studio seems to be testing a way to split character-heavy Japanese fonts and deliver only what is needed, as an extension of the "own font delivery base" in its preview, but no production use has been announced.
:::

A design with no export also gave Studio the freedom to swap the whole base. If customers never take the HTML away, the company can rebuild the renderer at its own discretion. In October 2026, the same concentration worked in the other direction.

:::fact
According to Studio's first report (October 16, 2026) and its portal, between September 30 and October 1 (Japan time) a third party exploited a vulnerability in part of Studio's features to gain unauthorized access to its cloud environment and left data in that environment retrievable from outside. That state lasted until the company dealt with it on October 14. An internal investigation confirmed the access on October 13, and the vulnerability was fixed and the path closed on October 13 and 14. The company says it has not confirmed that anything was actually taken, but is treating it as taken.
:::

:::fact
Studio says the information that may have been exposed, for all registered users, includes account data (user name, email address, hashed password and so on), design editor and CMS content, form submissions, live preview URLs, API keys and tokens registered for outside services, passwords for protected pages, Google Sheets integration credentials, and custom proxy keys. Data that was stored encrypted may also have been read, it explains, because the keys needed to decrypt it were read in the same access. By its account, the credentials the third party obtained included write permission, but a review of operation logs found no record of customer data being altered or deleted. As of our reading on 2026-11-02, the counts, the secondary-damage findings, and the cause and prevention measures were still to come, and the company was arranging for an outside specialist to investigate the cause.
:::

:::fact
On form responses, Studio does not notify submitters directly and asks site operators to do so. It explains that it stores this information under consignment from operators, and that the legal framework also has the operator inform the individual. For reports to the Personal Information Protection Commission it has arranged a joint-filing route with the commission, with applications due to open in early November. On October 21 it ran emergency maintenance after advance notice of critical PHP vulnerabilities. Contrary to its earlier notice, form submissions on published sites and other functions also stopped from 22:26 until 4:05 the next morning. It says this was a decision to stop traffic that could be used in an attack and that no damage was found. Separately, in February 2026 it disclosed that CMS API responses had included editors' email addresses and similar data from December 13, 2024 to February 17, 2026.
:::

:::guess
What this seems to show is less about a specific failure than about the structure of concentration. If customers have no server, then their outside API keys and their contact-form responses all gather in one environment. The official security page describes encrypting sensitive information, but if keys and ciphertext become readable along the same path, encryption alone cannot protect them. With the cause unpublished, it is not possible to judge the design at this point. At the same time, the stepwise public updates, the feature-by-feature notices and the joint-filing arrangement suggest the company is trying to reduce its customers' workload. For site operators, collecting personal data through forms probably means treating oversight of a contractor as part of their own job.
:::

## Business Model

Studio's core revenue is the per-site project plan. Prices start in the hundreds of yen for individuals and step up with corporate features.

:::fact
According to the official pricing page (viewed 2026-11-02; the terms state displayed prices include tax), pricing is per site, in six tiers.

| Plan | Monthly, billed yearly | Monthly billing | Pages | CMS models | Published CMS items | Main differences |
| --- | --- | --- | --- | --- | --- | --- |
| Free | ¥0 | ¥0 | 50 | 3 | 100 | 100 viewable form responses, 1-day version history |
| Mini | ¥590 | ¥1,290 | 2 + 404 page | 3 | 100 | Custom domain, GA and GTM integration |
| Personal | ¥1,190 | ¥1,720 | 150 | 5 | 1,000 | Sitewide password, 1,000 responses, 30 days |
| Business | ¥3,980 | ¥5,460 | 300 | 10 | 5,000 | One Data Connect API, redirects, 120 days |
| Business Plus | ¥9,980 | ¥12,900 | 300 | 30 | 15,000 | 1,000 concurrent connections guaranteed, activity log, priority support, 360 days |
| Enterprise | Contact sales | Contact sales | 300+ | 300+ | 300+ | 99.9% SLA on published sites, IP restriction, bank transfer |

Enterprise is paid only by prepaid bank transfer; everything else is by card. The custom proxy add-on costs ¥39,800 a month. The Team workspace plan for groups is ¥5,940 monthly with three seats included (¥4,350 a month billed yearly), and extra members cost ¥1,980 each monthly (¥1,450 billed yearly). A startup program gives companies under three years old 50% off Business and above if they pass review.
:::

:::fact
The December 2024 revision reshaped the Starter, CMS and Business plans into Mini, Personal, Business and Business Plus, and added limits on pages and CMS models as pricing axes. At the time, the company explained that editor data had an internal size limit and that warnings could appear at under 80 pages depending on how a site was built, and said it would overhaul the internals and state the limit openly. The traffic limit moved from page views to visitors, and on July 2, 2026 the monthly visitor limit was removed from every plan. The company cited sudden increases in traffic from AI and crawlers as a reason.
:::

:::guess
Removing traffic limits appears to have moved Studio's pricing axis from how much a site is viewed to how much functionality and control it needs. The approach avoids AI crawlers disturbing customers' limits and bills, while audit logs, SLAs, concurrency guarantees and IP restriction sit in the upper plans that companies need. It may also be that a new base centered on CDN caching lowered the cost per visit and supported the decision.
:::

The second pillar Studio is trying to grow is AI sold separately.

:::fact
Studio.Assistant is a paid add-on. According to the help center (prices include tax), Starter is ¥24,800 monthly (¥19,800 a month billed yearly) and Pro is ¥99,800 monthly (¥74,800 a month billed yearly), contracted per user. The FAQ's rough guide is about 3 sites a month on Starter and about 20 on Pro, at 10 pages per site. Studio.Drop, announced in August 2026 with pre-registration opening on September 1, takes in a live site by URL or file upload and lets you edit and run it with instructions in Japanese. It advertises connections to Claude and Codex over MCP. It is an invite-only closed beta, and we could not confirm its pricing.
:::

:::guess
Assistant's price is the kind compared with a production company's labor costs, not an individual's site budget; even Starter costs more than Business Plus, the top plan with a public price. That suggests a decision to sell AI for compressing the early stages of client work rather than for letting individuals build sites. Studio.Drop works the other way, as a door for sites built outside Studio. A company with no export is opening a wide import. Whether a site brought in through Drop can be taken back out is not explained in what we could check.
:::

The last pillar is the economy of people who earn around Studio.

:::fact
On Studio Store, 100% of paid template sales go to the seller (per the help center, with conditions subject to change; the terms also provide for the buyer paying a set fee on top). For free templates, if a project built from one upgrades to a yearly paid plan within 12 months, the seller receives 50% of the first year's fee (Studio Template Affiliate Program). The Store launched in March 2023 and reported 2,000 transactions and about ¥30 million in gross sales that December. The Studio.Works page lists 230+ creators in the Studio.Experts certification program for agencies and individuals, and says matching is free of charge.
:::

:::guess
Passing on template sales and paying half of the first year for free templates does not look like a design for earning store fees. It looks like paying customer-acquisition costs to the people who bring in monthly subscribers. Absorbing gaz brought production work inside and points the same way. Because there is no export, a site delivered on Studio will in principle keep being updated on Studio, so subscriptions appear to accumulate as creators multiply. That is also why the response to the October incident is likely to matter to creators who have to explain it to their own clients, and not only to end users.
:::

Build no way out and take on the servers. On that promise, Studio has rebuilt its base, removed its traffic limits and widened its entrance with AI. The same promise also means answering for everything held in one place. The cause and prevention measures still to come will be the first material for reading this company's next ten years.
