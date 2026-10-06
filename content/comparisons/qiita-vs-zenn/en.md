---
title: "Qiita vs Zenn — A Place That Pays Writers Nothing and Takes Money From Companies, and a Place That Takes a Fee From What Writers Earn"
description: "A comparison of Japan's two main technical-article platforms, Qiita and Zenn, using only their official pages, FAQs, price lists, releases, parent-company materials and repositories as of October 6, 2026. Qiita launched in 2011 and has more than 1.8 million members and 1.2 million cumulative articles; reading and writing are free, nothing is paid out to writers, and it earns money from advertising and sponsorship sold to companies and from Qiita Team, starting at ¥500 a month. On Zenn, writers can sell books for ¥0–5,000 and readers can send badges, and Zenn keeps a 3.6% payment fee plus 10% of the remainder. For companies, Publication Pro costs ¥9,980 a month and the new Publication Connect ¥360,000 for six months. The parents are Ateam and Classmethod. The article lines up where the money flows, what is sold to companies, how quality is protected in the age of AI, writing tools and tech stacks under the same headings."
lead: "Both are places to write technical articles in Markdown, both let you post from a local CLI, and both let companies run a tech blog as an organization. What differs is whether money reaches writers and what is sold to companies. For fifteen years Qiita has paid writers nothing and taken money through ads and sponsorship from companies that want to reach engineers. Zenn takes a fee from writers' book and badge sales and sells companies tech-blog operating features by the month. Reading both companies' official pages on the same day, this article dissects how the difference in money flow shows up in the experience and the business."
slugA: "qiita"
slugB: "zenn"
publishedAt: "2026-10-06"
updatedAt: "2026-10-06"
lastVerified: "2026-10-06"
sources:
  - label: "Qiita Inc.: Company profile"
    url: "https://corp.qiita.com/company"
    accessedAt: "2026-10-06"
  - label: "Qiita Inc.: Qiita turns 15 with 1.8M members and 1.2M articles (2026-09-16)"
    url: "https://corp.qiita.com/releases/2026/09/15th-anniversary/"
    accessedAt: "2026-10-06"
  - label: "Qiita for Business (ad and sponsorship products)"
    url: "https://business.qiita.com/"
    accessedAt: "2026-10-06"
  - label: "Qiita Team: Pricing"
    url: "https://teams.qiita.com/price-list/"
    accessedAt: "2026-10-06"
  - label: "Qiita Blog: Organization feature updates (2026-08-28)"
    url: "https://blog.qiita.com/organization-improvement/"
    accessedAt: "2026-10-06"
  - label: "Qiita Blog: Trend and reporting improvements (2026-01-28, updated 2026-04-23)"
    url: "https://blog.qiita.com/improve-user-experience/"
    accessedAt: "2026-10-06"
  - label: "Ateam Holdings: FY2026 (July) full-year earnings briefing transcript (2026-09-04)"
    url: "https://www.release.tdnet.info/inbs/140120260908533206.pdf"
    accessedAt: "2026-10-06"
  - label: "GitHub: increments/qiita-cli"
    url: "https://github.com/increments/qiita-cli"
    accessedAt: "2026-10-06"
  - label: "Zenn: About"
    url: "https://zenn.dev/about"
    accessedAt: "2026-10-06"
  - label: "Zenn FAQ: What are the sales and payout fees?"
    url: "https://zenn.dev/faq/sales"
    accessedAt: "2026-10-06"
  - label: "Zenn FAQ: What is the listing fee (payout)?"
    url: "https://zenn.dev/faq/dividend"
    accessedAt: "2026-10-06"
  - label: "Zenn: Publication (plans and pricing)"
    url: "https://zenn.dev/publications"
    accessedAt: "2026-10-06"
  - label: "Zenn FAQ: What can Publication Pro do?"
    url: "https://zenn.dev/faq/what-is-publication-pro"
    accessedAt: "2026-10-06"
  - label: "What's New in Zenn: Revising the Publication terms of use (2026-09-16)"
    url: "https://info.zenn.dev/2026-09-16-update-publication-terms"
    accessedAt: "2026-10-06"
  - label: "What's New in Zenn: Secret detection in posts (2026-09-17)"
    url: "https://info.zenn.dev/2026-09-17-content-secret-detection"
    accessedAt: "2026-10-06"
  - label: "What's New in Zenn: Publication Pro passes 100 (2026-07)"
    url: "https://info.zenn.dev/2026-07-22-publication-pro-100"
    accessedAt: "2026-10-06"
  - label: "Classmethod: Press release on acquiring Zenn (2021-02-01)"
    url: "https://classmethod.jp/news/20210201-zenn/"
    accessedAt: "2026-10-06"
  - label: "GitHub: zenn-dev/zenn-editor"
    url: "https://github.com/zenn-dev/zenn-editor"
    accessedAt: "2026-10-06"
---

[Qiita](/en/articles/qiita) and [Zenn](/en/articles/zenn) are usually mentioned together as the places where Japanese engineers write technical articles. Qiita launched in 2011; Zenn appeared as an indie project and was acquired by Classmethod in 2021. Laying the two dissections side by side, the difference shows up not in how they feel to write in or how they look, but in which direction the money flows.

This article was compiled by rereading both companies' official pages, FAQs, price lists, releases, parent-company materials and GitHub on October 6, 2026. This site has not posted the same article to both and compared the response, and it does not rank them on readership or search traffic.

## Which way the money flows

On Qiita, no money moves between writers and readers. On Zenn, money moves from readers to writers, and Zenn keeps part of it.

:::fact
Qiita has no feature for selling articles and no way for readers to send money to writers. A writer's reward is Contribution, built up from likes, and an award program. According to Zenn's official About page (checked October 6, 2026), writers can compile their knowledge into "books" and sell them for ¥0–5,000, readers can give authors paid badges, and authors who receive badges get a payout from Zenn, by bank transfer or as Amazon gift cards. According to Zenn's FAQ "What are the sales and payout fees?", a book sale incurs a payment fee of 3.6% of the price (matching Stripe's fee) and a platform fee of 10% of the amount left after the payment fee, and each request to withdraw cash costs ¥350. In the FAQ's example, a ¥1,000 book leaves the seller with ¥868.
:::

| Item | Qiita | Zenn |
| --- | --- | --- |
| Selling articles or books | None | Books sold for ¥0–5,000 |
| Money from readers to writers | None | Paid badges (payout to the author) |
| Platform's cut | None (no transactions) | 3.6% payment fee + 10% of the rest |
| Writer's take on a ¥1,000 book | — | ¥868 (FAQ example) |
| Withdrawal fee | — | ¥350 per request (Amazon gift cards also available) |
| What writers get back | Likes, Contribution, awards | Sales and payouts, plus likes |

:::pull
Qiita pays writers nothing and takes money from companies. Zenn takes its fee out of what writers earn.
:::

:::guess
With no payouts to writers, Qiita turns its article count and visitor count directly into attention it can sell to companies. On Zenn, the books and badges writers sell become platform transactions, and Zenn's take scales with writers' sales. The former appears to rest on being "a place that gets read a lot," the latter on being "a place where people write things worth paying for."
:::

## What is sold to companies

Both let companies run a tech blog, but Qiita sells exposure on its venue while Zenn sells operating features.

:::fact
Qiita for Business (checked October 6, 2026) lists impression-guaranteed banner ads, Qiita DSP for reaching engineers on outside sites, sponsored articles in Qiita Zine, single-company email campaigns, the engineer survey service Qiita Research, and sponsorship of the Advent Calendar, Qiita Conference and Qiita Tech Festa, saying programs can start "from several hundred thousand yen." Organizations for companies and groups are free, and according to the Qiita Blog (2026-08-28) each organization can now place one "PR slot" below the table of contents of its articles to announce hiring or events. Separately, Qiita sells Qiita Team, an internal knowledge-sharing service, from ¥500 a month for one user to ¥15,300 a month for up to 17, plus ¥720 per additional person (tax included).
:::

:::fact
According to Zenn's official Publication page (checked October 6, 2026), there are three plans for companies and organizations. Free costs nothing and offers linking members' articles, shared draft previews and a Publication home page. Pro costs ¥9,980 a month or ¥99,800 a year with the first 30 days free, and adds article reviews, a statistics dashboard, PR banners on articles, connecting all members to one GitHub repository, Google Analytics integration and the ability to disable comments. The new Connect plan costs ¥360,000 for six months (¥60,000 a month), on a six-month contract when paid by card or an annual contract when invoiced, and adds a Q&A box on articles, newsletters to followers, repeat-reader analytics, executive reports and priority speaking slots. According to What's New in Zenn (2026-09-16), the terms of use were revised to allow multiple paid plans, effective October 16, 2026. As of July 22, 2026 there were more than 1,800 Publications, of which more than 100 used Pro.
:::

| Item | Qiita | Zenn |
| --- | --- | --- |
| Organization page | Organization (free) | Publication Free (free) |
| Paid version of it | None (the PR slot is free too) | Pro ¥9,980/month; Connect ¥360,000 for 6 months |
| Ads and sponsorship | Banners, DSP, sponsored articles, email, surveys, event sponsorship (from several hundred thousand yen) | Pro's PR banners appear on the organization's own articles |
| Internal tool | Qiita Team (from ¥500/month) | None |
| Operator | Qiita Inc. (a subsidiary of Ateam) | Classmethod |

:::guess
Qiita appears to keep its organization pages free while making them richer, letting companies settle in first and then leading them into ad and sponsorship deals. Zenn puts tiered prices on the organization page itself and sells features that reduce the effort of running a tech blog, such as reviews, statistics and newsletters. Put another way, Qiita sells exposure to other people's readers, and Zenn sells the running of your own publishing.
:::

## Scale and parent companies

:::fact
According to Qiita Inc.'s release (2026-09-16), Qiita launched on September 16, 2011 and had more than 1.8 million members and 1.2 million cumulative articles as of September 1, 2026. The company is a subsidiary of Ateam Holdings, listed on the TSE Prime Market; Ateam acquired the then operator in December 2017 for about ¥1.453 billion. Ateam's full-year briefing (2026-09-04) names "strengthening promotion within Qiita" as one reason the group's microCMS is growing, but does not disclose Qiita's own revenue. According to Classmethod's press release (2021-02-01), Classmethod acquired the technical information-sharing service Zenn from CodeBrew LLC, and its main developer joined Classmethod to keep developing it. Zenn's member and article counts do not appear on the official pages this site checked.
:::

| Item | Qiita | Zenn |
| --- | --- | --- |
| Start of current ownership | Ateam bought the operator in December 2017 (launched September 2011) | Classmethod acquired it in February 2021 |
| Operator | Qiita Inc. (Nagoya, subsidiary of Ateam Holdings) | Classmethod |
| Published scale | 1.8M+ members, 1.2M+ articles (2026-09) | 1,800+ Publications, 100+ on Pro (2026-07) |
| Role for the parent | Also a promotion channel for the group's microCMS | Not described on the official pages |

## Protecting quality in the age of AI

:::fact
According to the Qiita Blog (2026-01-28, updated April 23), Qiita said generative AI and the democratization of technology made sharing information easier but noisier, rebuilt its trend calculation to prioritize "higher-quality, trustworthy information," switched over formally on April 23, 2026, and redesigned its reporting form. According to What's New in Zenn (2026-09-17), Zenn now periodically scans published articles, books, scraps and comments and emails writers when they may contain secrets such as API keys. It says the feature does not stop a post from being published and does not guarantee complete detection.
:::

:::guess
Both have started responding to generative AI making articles easier to write, but they appear to be protecting different things. Qiita changed the rule for what rises to the top, protecting the quality of the venue for advertisers and readers. Zenn moved to reduce accidents in which writers publish keys by mistake, protecting the writers. That fits the difference between a business that sells the trustworthiness of a place and one built around transactions with writers.
:::

## Writing tools

:::fact
Both let you write in your own editor and post from there. GitHub's increments/qiita-cli (checked October 6, 2026) is a tool for writing, previewing and posting articles locally, mostly TypeScript under Apache-2.0 with 520 stars, created in June 2023. zenn-dev/zenn-editor describes itself as "Convert markdown to html in Zenn format," mostly TypeScript under MIT with 747 stars, created in May 2020. Both were pushed the same day. Zenn's Publication Pro lists connecting all members' articles to one GitHub repository among its selling points.
:::

## The tech stacks share two entries: Ruby on Rails and BigQuery

The tech stack comparison at the bottom of this page mechanically matches the techStack of the two articles. It finds two shared entries, Ruby on Rails and BigQuery, used differently. Qiita's Rails is a monolith dating from 2011, and this site's observation shows React inserted piece by piece into Rails-rendered pages. Zenn's Rails runs in API mode, with Next.js drawing the pages. BigQuery is, for Qiita, the data platform it moved to from Treasure Data, and for Zenn, the place logs gather for viewing in Looker Studio. The bigger difference is where they run. Qiita's side lists Amazon ECS on Fargate, CloudFront, OpenSearch and Datadog, a record of trimming cost and response time on AWS. Zenn's side lists Cloud Run, Cloud SQL, Cloud Tasks, Cloud Load Balancing and Cloudflare, a setup built to absorb spikes on Google Cloud's serverless services. Both run Rails, but a monolith that has run for fifteen years and an API built in 2020 choose where to live differently.

For a writer, the question is simple. If you want to be paid directly for what you write, Zenn has books and badges and Qiita does not. For a company, there are two questions. If you want your name in front of other people's readers, Qiita's ads, sponsorships and free Organizations are the way in; if you want running your own tech blog to be easier, Zenn's paid Publication plans are the tool. For readers, both are free, but who pays for that free is completely different in the two places.
