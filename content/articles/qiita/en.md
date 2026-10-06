---
service: "Qiita"
title: "1.8 Million Members and 1.2 Million Articles in 15 Years, Bought by Ateam for About ¥1.45 Billion in 2017, Free to Read and Write and Paid For by Ads and Qiita Team — Dissecting Qiita, the Tech-Article Site That Never Pays Its Writers"
description: "Qiita, the Japanese site where engineers share technical articles, launched on September 16, 2011 and passed 1.8 million members and 1.2 million cumulative articles as of September 1, 2026. Its operator, Qiita Inc., has been a wholly owned subsidiary of Ateam Holdings since December 2017. Reading and writing are free, and there is no mechanism that shares revenue with writers. The money comes from advertising and event sponsorship sold to companies, and from Qiita Team, an internal knowledge-sharing service that starts at ¥500 a month. Using the official company pages, the 15th-anniversary release, Qiita for Business, the Qiita Team price list, the Qiita Blog, engineering posts by Qiita's own staff, GitHub, the parent company's earnings briefing and this site's own observations, the article dissects the Rails monolith now running on ECS on Fargate (Arm), why trend ranking was changed in the age of generative AI, and how Organizations became the front door for selling to companies."
lead: "Qiita's pages have no button to sell an article and no badge to tip a writer. What they have is likes, stocks, company Organizations and ad slots. Launched in 2011, the site has accumulated 1.8 million members and 1.2 million articles in fifteen years without charging writers or readers, taking money instead from companies that want to reach engineers. This article dissects, from public information alone, how that design is being shaken in the age of generative AI and what Qiita is trying to protect."
category: media
tags: [tech-blog, community, markdown, ruby-on-rails, react, aws, advertising, ai]
publishedAt: "2026-10-06"
updatedAt: "2026-10-06"
lastVerified: "2026-10-06"
serviceUrl: "https://qiita.com/"
# Affiliate link placeholder: no public affiliate or referral program was found for Qiita or
# Qiita Team (checked 2026-10-06 on qiita.com/about, business.qiita.com and the Qiita Team
# price list; revenue comes from ads, event sponsorship and Qiita Team subscriptions).
# Leave this block commented out unless the owner finds a program.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<qiita-team-referral-link>"
#   program: "Qiita Team"
vendor: "Qiita Inc. (a subsidiary of Ateam Holdings Co., Ltd.)"
origin: "JP"
heroTheme: "qiita"
scores: { product: 4.0, ux: 3.5, tech: 4.0, business: 3.5 }
techStack:
  - layer: "Web application"
    name: "Ruby on Rails (monolith, Qiita and Qiita Team)"
    confidence: confirmed
    evidence: "A post by a Qiita Inc. engineer, \"We moved Qiita to ECS\" (2024-12-02), states that \"Qiita and Qiita Team are web applications built with Ruby on Rails.\" The former Increments Inc. hiring page (2018) also lists Ruby and JavaScript as languages and Rails, React and Bootstrap as frameworks"
    evidenceUrl: "https://qiita.com/tomoasleep/items/e7f919c7b4d0f091d458"
  - layer: "Runtime platform"
    name: "Amazon ECS on AWS Fargate (Arm) + ecspresso / ecschedule + GitHub Actions"
    confidence: confirmed
    evidence: "The same post explains that in July 2024 Qiita moved from EC2 (deployed with Capistrano, AMIs built with Packer and Chef) to ECS on EC2, deploying ECS services and scheduled tasks from GitHub Actions with ecspresso and ecschedule (configured in Jsonnet). A post of 2025-04-18 says it then went through ECS on Fargate (x86) to Fargate (Arm), improving response time by about 20% and cutting the peak server count by about 30%"
    evidenceUrl: "https://qiita.com/WakameSun/items/bf6ed99d589a98eb8d62"
  - layer: "Data stores and search"
    name: "MySQL (Amazon RDS / Aurora) / Redis / Amazon OpenSearch Service"
    confidence: confirmed
    evidence: "A post by a Qiita Inc. engineer (2024-12-01) describes moving RDS audit logs from CloudWatch to S3 via Lambda, resizing RDS and OpenSearch when buying reserved instances, and wanting to switch Amazon Aurora storage to I/O-Optimized. The former Increments hiring page (2018) lists MySQL and Redis as databases and Elasticsearch as the search engine"
    evidenceUrl: "https://qiita.com/WakameSun/items/0ebf0ebf7a28d7051ae9"
  - layer: "Data platform and monitoring"
    name: "BigQuery (migrated from Treasure Data) / Datadog"
    confidence: confirmed
    evidence: "The same post (2024-12-01) says Qiita had built a data platform around Treasure Data since 2019 and moved it to a BigQuery-centered setup, and it gives an estimate of Datadog billing switching from per-host to per-task as a benefit of moving to Fargate"
    evidenceUrl: "https://qiita.com/WakameSun/items/0ebf0ebf7a28d7051ae9"
  - layer: "Frontend"
    name: "React (React on Rails)"
    confidence: likely
    evidence: "This site's own observation (2026-10-06) found seven js-react-on-rails-component mount elements in qiita.com's HTML, with component names such as GlobalHeader, HomeTrendPage and LoginModal and a reference to ReactOnRails. The former Increments hiring page (2018) also lists React, but no official post describing the current setup was found"
  - layer: "Delivery"
    name: "Amazon CloudFront + nginx / cdn.qiita.com / S3 (qiita-image-store)"
    confidence: likely
    evidence: "This site's own observation (2026-10-06) found qiita.com responding with server: nginx and via: CloudFront (x-amz-cf-pop: NRT57), plus the x-runtime header that Rails responses carry and a _qiita_login_session cookie. CSS came from cdn.qiita.com and article images from the qiita-image-store S3 bucket in ap-northeast-1"
  - layer: "Markdown and writing tools"
    name: "qiita-markdown (Ruby, MIT) / Qiita CLI (TypeScript, Apache-2.0) / Qiita API v2"
    confidence: confirmed
    evidence: "GitHub's increments/qiita-markdown (as of 2026-10-06, via the API) is mostly Ruby under MIT with 410 stars, created in October 2014 and described as a \"Qiita-specified markdown processor.\" increments/qiita-cli is mostly TypeScript under Apache-2.0 with 520 stars, created in June 2023 and described as a tool for writing, previewing and posting articles locally. Both were pushed on October 6, 2026"
    evidenceUrl: "https://github.com/increments/qiita-cli"
  - layer: "Ad serving"
    name: "Google Ad Manager (GPT)"
    confidence: likely
    evidence: "This site's own observation (2026-10-06) found qiita.com's HTML loading securepubads.g.doubleclick.net (Google Publisher Tag). Qiita for Business lists impression-guaranteed banner ads among its ad products"
sources:
  - label: "Qiita Inc.: Company profile"
    url: "https://corp.qiita.com/company"
    accessedAt: "2026-10-06"
  - label: "Qiita Inc.: Qiita turns 15 with 1.8M members and 1.2M articles (2026-09-16)"
    url: "https://corp.qiita.com/releases/2026/09/15th-anniversary/"
    accessedAt: "2026-10-06"
  - label: "Qiita: About"
    url: "https://qiita.com/about"
    accessedAt: "2026-10-06"
  - label: "Qiita for Business (ad and sponsorship products)"
    url: "https://business.qiita.com/"
    accessedAt: "2026-10-06"
  - label: "Qiita Team: Pricing"
    url: "https://teams.qiita.com/price-list/"
    accessedAt: "2026-10-06"
  - label: "ITmedia NEWS: Ateam acquires the operator of Qiita (2017-12-22)"
    url: "https://www.itmedia.co.jp/news/articles/1712/22/news121.html"
    accessedAt: "2026-10-06"
  - label: "Ateam Holdings: FY2026 (July) full-year earnings briefing transcript (2026-09-04)"
    url: "https://www.release.tdnet.info/inbs/140120260908533206.pdf"
    accessedAt: "2026-10-06"
  - label: "Qiita Blog: Organization feature updates (2026-08-28)"
    url: "https://blog.qiita.com/organization-improvement/"
    accessedAt: "2026-10-06"
  - label: "Qiita Blog: Slides feature beta release (2026-07-07)"
    url: "https://blog.qiita.com/slide-beta/"
    accessedAt: "2026-10-06"
  - label: "Qiita Blog: Trend and reporting improvements (2026-01-28, updated 2026-04-23)"
    url: "https://blog.qiita.com/improve-user-experience/"
    accessedAt: "2026-10-06"
  - label: "Qiita: Qiita rankings 2025 (2026-01-16)"
    url: "https://qiita.com/Qiita/items/67f7fc1c79173c9a6c44"
    accessedAt: "2026-10-06"
  - label: "Qiita: Qiita update summary, September 2026 (2026-10-02)"
    url: "https://qiita.com/Qiita/items/93bd65f35d3e3e46cd44"
    accessedAt: "2026-10-06"
  - label: "Qiita Inc. engineering: We moved Qiita to ECS (2024-12-02)"
    url: "https://qiita.com/tomoasleep/items/e7f919c7b4d0f091d458"
    accessedAt: "2026-10-06"
  - label: "Qiita Inc. engineering: Moving Qiita's servers to Arm made response time 20% faster (2025-04-18)"
    url: "https://qiita.com/WakameSun/items/bf6ed99d589a98eb8d62"
    accessedAt: "2026-10-06"
  - label: "Qiita Inc. engineering: What we did to keep infrastructure costs down (2024-12-01)"
    url: "https://qiita.com/WakameSun/items/0ebf0ebf7a28d7051ae9"
    accessedAt: "2026-10-06"
  - label: "Increments Inc.: Engineer hiring page (2018)"
    url: "https://increments.github.io/increments.co.jp/jobs/engineers/"
    accessedAt: "2026-10-06"
  - label: "GitHub: increments/qiita-cli"
    url: "https://github.com/increments/qiita-cli"
    accessedAt: "2026-10-06"
  - label: "GitHub: increments/qiita-markdown"
    url: "https://github.com/increments/qiita-markdown"
    accessedAt: "2026-10-06"
---

Qiita is where Japanese engineers turn technical knowledge into articles and share them. Launched in 2011, it has long been the place you land when you search for an error message in Japanese. The later arrival [Zenn](/en/articles/zenn) made paying writers its headline feature. Qiita, for fifteen years, has charged neither writers nor readers. The ones who pay are companies that want to reach engineers.

## Service overview

Qiita is a site for writing technical articles, rating them with likes and stocks, and finding them through tags and trends. Companies and groups can appear as an "Organization" that gathers their members' articles, and events sit on top of that: the Advent Calendar every December, the online Qiita Conference, and Qiita Tech Festa in the summer.

:::fact
According to Qiita Inc.'s company profile (as of 2026-10-06), the company was founded on February 29, 2012, has ¥50 million in capital, is led by President and Representative Director Kensuke Shibata, is headquartered in Nakamura-ku, Nagoya, and is a subsidiary of Ateam Holdings Co., Ltd., listed on the Prime Market of the Tokyo Stock Exchange (code 3662). Its business is developing and running Qiita and the internal knowledge-sharing service Qiita Team. A release the company issued on September 16, 2026 says Qiita launched on September 16, 2011 and had passed 1.8 million members and 1.2 million cumulative articles as of September 1, 2026, and that in 2026 it released a Markdown-based slides feature (beta) and held the first Qiita AI Summit. According to ITmedia NEWS (2017-12-22), Ateam acquired all shares of the then operator, Increments Inc., for about ¥1.453 billion, making it a subsidiary on December 25, 2017.
:::

:::fact
Qiita's official About page (as of 2026-10-06) says "over 6 million users visit Qiita each month (as of February 2021)." The corporate-facing Qiita for Business site, without giving a date, cites about 8 million monthly unique users, 1.5 million registered members, roughly 65% of users being decision-makers or advisers on tool adoption, and more than 12,000 registrations a year across the spring and autumn Qiita Conferences. Summing the article-count distribution table in Qiita's "Qiita rankings 2025" (published 2026-01-16), this site counts 24,898 users who posted at least one article in 2025, of whom 19,651 posted one to five. Users who posted 100 or more articles in a year rose from 64 in 2024 to 85 in 2025.
:::

:::pull
Free to read, free to write, and nothing shared with writers. On top of a design that has held for fifteen years sit 1.8 million members and 1.2 million articles.
:::

::scorecard

## UX analysis

Qiita's experience has been refined as a place where people who are searching land. You arrive from a search engine, find the answer, stock the article and leave. A writer's reward is not money but likes, Contribution counts and the visibility that comes with an Organization.

- **Writers are motivated by numbers and affiliation.** Likes on an article accumulate as Contribution, and an award program recognizes writers at each tier. The 2025 rankings show user counts jumping in the 100–250 and 1,000–2,500 Contribution bands compared with the band just below, which the post reads as many people aiming for the three- and four-digit milestones. Qiita has nothing like [Zenn](/en/articles/zenn)'s paid books or badges that put money in a writer's hands.
- **Trend ranking was rebuilt.** According to the Qiita Blog (2026-01-28, updated April 23), Qiita changed its trend logic to prioritize "higher-quality, trustworthy information" for engineers, testing it with some users before switching over formally on April 23, 2026. The stated reason is that generative AI and the democratization of technology made sharing information easier but noisier. At the same time it redesigned the reporting form into a two-level choice of category and subcategory.
- **Organizations as the company's window.** According to the Qiita Blog (2026-08-28), articles tied to an Organization can now show one "PR slot" per organization below the table of contents for hiring or event notices, and article footers now show the organization's X, GitHub, connpass and other links. No extra charge is mentioned for any of it.
- **Writing moves closer to the writer's machine.** Qiita CLI lets people write, preview and post from their own editor. The slides feature, released in beta on July 7, 2026, is compatible with Marp, and in September gained visibility settings (only me, link only, members only, public). GitHub Gist integration, on the other hand, ended on February 18, 2026.
- **The weak spots are the lack of payouts and stale articles.** Fifteen years of articles are a search asset, but many still assume old versions. With no direct income for writers, the motivation to keep articles up to date depends on rating numbers and on their employer's PR.

## Tech stack

::techstack

:::fact
According to a post by a Qiita Inc. engineer on December 2, 2024, Qiita and Qiita Team are Ruby on Rails web applications that ran for years on EC2, deployed with Capistrano and updated by swapping AMIs built with Packer and Chef. Because changing that setup was complicated and only a few engineers could do it, Qiita moved to ECS on EC2 in July 2024, managing ECS service and scheduled-task definitions with ecspresso and ecschedule (configured in Jsonnet) and deploying from GitHub Actions. A post of April 18, 2025 says the service then went through ECS on Fargate (x86) to Fargate (Arm), and that, while withholding exact numbers, response time improved by about 20% and the peak server count fell by about 30%.
:::

:::fact
The post of December 1, 2024 lists cost cuts: moving the data platform used since 2019 from Treasure Data to BigQuery, moving RDS audit logs from CloudWatch Logs to S3 via Lambda, resizing RDS and OpenSearch, and replacing older instance generations with Graviton r6g and t4g. Among the reasons for moving to Fargate it cites Datadog billing switching from per-host to per-task. This site's own observation (2026-10-06) found qiita.com returning server: nginx with CloudFront, the x-runtime header that Rails responses carry and a _qiita_login_session cookie, and HTML containing React on Rails mount elements and a Google Publisher Tag. On GitHub, Qiita publishes its Markdown processor qiita-markdown (Ruby, MIT) and Qiita CLI (TypeScript, Apache-2.0).
:::

:::guess
Qiita's platform appears to have evolved by swapping out the lower layers rather than rewriting the Rails monolith it has had since 2011. The application is still Rails, while deployment moved from Capistrano to ECS, compute from EC2 to Arm on Fargate, and the data platform from Treasure Data to BigQuery. Every one of these posts gives cost and response time as the main reasons, which suggests that for a service that gives articles away for free, infrastructure spending translates directly into profit. The React on Rails mount elements lined up component by component suggest a continued policy of inserting React piece by piece into Rails-rendered pages rather than rebuilding the whole site as an SPA.
:::

## Business model

There are two ways money comes in: advertising and sponsorship from companies that want to reach engineers, and monthly fees for Qiita Team. Readers and writers pay nothing.

:::fact
Qiita for Business (as of 2026-10-06) lists its products for companies: impression-guaranteed banner ads, Qiita DSP for reaching engineers on outside sites, sponsored articles researched and written by the editors of Qiita Zine, single-company email campaigns segmented by behavior, the engineer survey service Qiita Research, user-participation campaigns and hackathons, and sponsorship of events such as the Advent Calendar, Qiita Conference and Qiita Tech Festa, saying programs can start "from several hundred thousand yen." The Qiita Team price list (checked the same day, tax included) shows Personal for one user at ¥500 a month, Micro for up to 3 at ¥1,520, Small for up to 7 at ¥4,900, Medium for up to 10 at ¥7,050, Large for up to 17 at ¥15,300, and Extra with unlimited users from ¥15,300 plus ¥720 per person from the 18th, adding IP address restrictions and invoice billing (annual payment available). Every plan has unlimited posts and 30 GB of file storage.
:::

:::fact
According to the transcript of the parent company Ateam Holdings' full-year briefing for the fiscal year ended July 2026 (September 4, 2026), Ateam's revenue was ¥22.997 billion and it reports two segments, Digital Marketing and Entertainment. The briefing names "strengthening promotion within the engineer community site Qiita" as one of the reasons the group's headless CMS company microCMS is growing. Revenue or profit for Qiita alone is not disclosed in the briefing.
:::

:::guess
Qiita's revenue structure appears to sell not the articles themselves but engineers' attention to companies. Because it pays nothing out to writers, the number of articles and visitors becomes ad inventory directly, and Organizations, the Advent Calendar and the Conference are sold as places where companies can put their name in front of engineers. Adding a free PR slot to Organizations in August 2026 is presumably meant to widen the entrance: let companies settle into Qiita for free first, then lead them into ad and sponsorship deals. That the parent company describes using Qiita to promote microCMS suggests Qiita is valued in the group not just for its own revenue but as a channel for reaching engineers.
:::

:::guess
Generative AI making articles easier to write could be either a tailwind or a headwind for a structure that grows ad inventory through article volume. More articles mean more inventory, but more low-quality articles reduce the value of the place for companies that want to be seen there. The April 2026 change to trend ranking and the rebuilt reporting form can also be read as a decision to protect the quality of the venue for advertisers by putting "trustworthy information" ahead of sheer volume.
:::

A service written in Rails in 2011 is still running on Rails fifteen years later, with only the platform underneath swapped for Arm on Fargate. It pays writers nothing, charges readers nothing, and takes money from companies that want to reach engineers. Without changing that design, it changed the rule for what rises to the top in the age of AI. What Qiita is trying to protect is not its article count but the trust that makes companies want to put their name there.
