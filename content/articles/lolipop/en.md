---
service: "Lolipop!"
title: "A ¥121-a-Month Shared Host Added MCP, AI Agents, an AI Gateway, and a Deploy Platform in Six Months — Dissecting Why Lolipop!, 380,000 Contracts and 25 Years In, Is Rebuilding Itself as \"the Server AI Agents Choose\""
description: "Lolipop!, run by GMO Pepabo, is a Japanese shared hosting service that launched in November 2001. It had 380,000 contracts at the end of June 2026 and ¥1,348 million in revenue in the first half of 2026. Its five plans run from the ¥121-a-month Economy to the ¥2,420 Enterprise, and the unit price on a 36-month contract is up to 2.2 times lower than on a one-month contract. Between April and September 2026 it launched, in quick succession, an AI Agent Cloud that runs OpenClaw in one click, Deploy Now for publishing with a single npx command, an AI Gateway that calls models from 14 providers through one key, a public API and MCP server, and a skill.md written for AI coding agents to read. Using GMO Pepabo's earnings presentation, press releases, the official pricing, spec, and reseller pages, the Pepabo Tech Portal tech stack list, and this site's own observations, the article dissects the pricing ladder, shared servers on OpenStack and bare metal, and the relationship between investment in the new AI services and profit."
lead: "Open the Lolipop! pricing page and the ¥121-a-month Economy and ¥330 Lite plans are what you see first. In the same navigation, 2026 added \"MCP server and public API,\" \"AI Agent Skills,\" \"AI Agent Cloud,\" \"AI Gateway,\" and \"Deploy Now.\" A 25-year-old Japanese shared host rewrote its signboard in six months, from the assumption that a person works the control panel in a browser to the assumption that an AI agent works it through an API. The cost of that investment appears, as a concrete number, in the parent company's earnings presentation under the reasons operating profit fell."
category: dev-tool
tags: [hosting, wordpress, ai, mcp, small-business, ai-agent, vibe-coding]
publishedAt: "2026-10-06"
updatedAt: "2026-10-06"
lastVerified: "2026-10-06"
serviceUrl: "https://lolipop.jp/"
# Affiliate link placeholder: Lolipop's official "取次店制度" (https://lolipop.jp/partner/) is a
# referral scheme for web agencies and freelancers who introduce clients (rewards per plan:
# e.g. ¥4,400 for a new Standard contract of 6 months or more, paid monthly, tax included,
# cannot be combined with coupons). Whether it may be used from a review article was not
# confirmed. No official page confirms an ASP program; the owner's existing Moshimo Affiliate
# account (used for the sister service ColorMe Shop) is the first place to check, then A8.net.
# Paste the tracking link and the material's text (label) here before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://af.moshimo.com/af/c/click?a_id=<owner-id>&p_id=<program-id>&pc_id=<pc-id>&pl_id=<link-id>"
#   program: "Lolipop Affiliate Program (Moshimo Affiliate)"
vendor: "GMO Pepabo, Inc."
origin: "JP"
heroTheme: "lolipop"
scores: { product: 4.0, ux: 3.5, tech: 4.0, business: 3.5 }
techStack:
  - layer: "Shared servers (OS and web server)"
    name: "Ubuntu + nginx + Apache HTTP Server (Economy to Standard) / LiteSpeed Web Server (6.3, High Speed and Enterprise)"
    confidence: confirmed
    evidence: "The official server spec page (as of 2026-10-06) states that the servers run Linux (Ubuntu) as shared servers and that the web server on the High Speed and Enterprise plans is LiteSpeed 6.3. The pricing page lists Nginx+Apache for Economy through Standard and Nginx+LiteSpeed for High Speed and above, PHP in CGI, module, and LiteSpeed builds, and LiteSpeed Cache on High Speed and above"
    evidenceUrl: "https://lolipop.jp/service/server-spec/"
  - layer: "Hosting infrastructure"
    name: "Bare metal + OpenStack + Kubernetes (private cloud \"Nyah\") + Google Cloud + IDCF Cloud"
    confidence: confirmed
    evidence: "The Pepabo Tech Portal page \"GMO Pepabo's tech stack: Lolipop and Muumuu Domain division\" (as of 2026-10-06) lists Baremetal, OpenStack, Kubernetes, Google Cloud, and IDCF Cloud under Infrastructure, Nginx, ngx_mruby, Apache httpd, LiteSpeed, and ProFTPD under Hosting Web & Storage, MAAS and Cobbler under Hosting Setup, and dockerd, containerd, and haconiwa under Container Runtime. In this site's own observation (2026-10-06), the whois record for the IP address of lolipop.jp (133.130.34.142) had the netname PEPABO-NYAH and the description GMO Pepabo, Inc."
    evidenceUrl: "https://tech.pepabo.com/tech-stack/hosting/"
  - layer: "Database, mail, and DNS"
    name: "MySQL (8) / PostgreSQL + Postfix + Dovecot + Courier-IMAP + Amazon SES + PowerDNS"
    confidence: confirmed
    evidence: "The same tech stack page lists MySQL and PostgreSQL under Hosting Database and Postfix, Dovecot, Courier-IMAP, Amazon SES, and PowerDNS under Hosting Mail & DNS. The pricing page gives MySQL8 for Lite and above (50 on Lite, 100 on Standard, unlimited on High Speed and above), and the spec page names F-Secure for mail virus scanning and GlobalSign (paid) and Let's Encrypt (free) for SSL"
    evidenceUrl: "https://tech.pepabo.com/tech-stack/hosting/"
  - layer: "Operations, observability, and CI/CD"
    name: "Prometheus + Apache Kafka + Fluentd + Elastic APM + Mackerel + Sentry + Datadog + GitHub Actions + Argo CD + Chef + Puppet + Ansible + Terraform"
    confidence: confirmed
    evidence: "The same tech stack page lists Prometheus, Kafka, Fluentd, Elastic APM, Mackerel, Sentry, and Datadog under Observability, GitHub Actions and ArgoCD under CI/CD, Ruby, Chef, Perl, gRPC, Puppet, Ansible, and Hashicorp Terraform under Backend and Hosting Infrastructure, and Memcached, Redis, Consul, Vault, and Wazuh under Other Middleware"
    evidenceUrl: "https://tech.pepabo.com/tech-stack/hosting/"
  - layer: "Public API and MCP server"
    name: "Public REST API (Personal Access Token) + Lolipop MCP server"
    confidence: confirmed
    evidence: "GMO Pepabo's notice of 2026-07-16 states that Lolipop! launched a public API for developers and an MCP server, covering domains, subdomains, SSL, WordPress, and account information, with an API key issued in the user panel and usable from Claude Code, Cursor, Gemini CLI, OpenAI Codex, and others. The official page limits availability to the Standard, High Speed, and Enterprise plans and says the Personal Access Token (PAT) also covers mail, PHP versions, MySQL, and FTP accounts"
    evidenceUrl: "https://pepabo.com/news/information/202607161300/"
  - layer: "AI Gateway"
    name: "Lolipop AI Gateway (OpenAI- and Anthropic-compatible APIs, 15 providers)"
    confidence: confirmed
    evidence: "The press release of 2026-08-25 states that Lolipop! AI Gateway offers LLMs from 14 AI providers through a unified API compatible with Anthropic and OpenAI, with no setup or monthly base fee and a 5% platform fee on purchases of prepaid credits. A notice of September 18 added Jev, the judgment-focused model from the US company TypeSafe AI, and the official page (as of 2026-10-06) lists 15 providers and 65 models and support for the OpenAI Responses API, Chat Completions API, and Anthropic Messages API"
    evidenceUrl: "https://pepabo.com/news/press/202608251600/"
  - layer: "Deploy Now (web app hosting)"
    name: "Next.js / Nuxt / Astro (disposable builds, sleep-on-idle, WAF, auto HTTPS)"
    confidence: confirmed
    evidence: "The official page (as of 2026-10-06) states that npx lolipop deploy issues a URL, that Next.js, Nuxt, and Astro are built and published as they are, that apps are protected by a WAF, that every project gets automatic HTTPS, and that URLs take the form https://(project name).lolipop-now.app. The Pepabo Tech Portal interview of 2026-09-30 describes a design that throws away the build environment every time, sites that sleep after a period without access and wake when a request arrives, and a team in which everyone implemented with Claude Code"
    evidenceUrl: "https://lolipop.jp/deploy-now/"
  - layer: "AI Agent Cloud"
    name: "OpenClaw / Hermes Agent / NanoClaw (dedicated server per user)"
    confidence: confirmed
    evidence: "The press release of 2026-04-22 states that Lolipop! AI Agent Cloud launched as a feature for running OpenClaw with browser operations alone. The official page (as of 2026-10-06) supports three agents (OpenClaw, Hermes Agent, and NanoClaw), charges ¥1,200 a month, provides an independent server per user, includes a free AI allowance for trying it out, and lets users register their own API keys"
    evidenceUrl: "https://pepabo.com/news/press/202604221100/"
  - layer: "Service site and control panel"
    name: "PHP (lolipop.jp, EUC-JP user panel) + React / Next.js / Vue.js / Nuxt (newer surfaces)"
    confidence: likely
    evidence: "In this site's own observation (2026-10-06), lolipop.jp responded over HTTP/1.1 without a server header and set a PHPSESSID cookie, and the response from user.lolipop.jp was charset=EUC-JP. The tech stack page lists React/Next.js and Vue.js/Nuxt.js under Frontend, pepabo.com was served through CloudFront, and tech.pepabo.com returned server: GitHub.com"
sources:
  - label: "Lolipop!: Pricing (plans, monthly price by contract term, feature comparison)"
    url: "https://lolipop.jp/pricing/"
    accessedAt: "2026-10-06"
  - label: "Lolipop!: Server specifications"
    url: "https://lolipop.jp/service/server-spec/"
    accessedAt: "2026-10-06"
  - label: "Lolipop!: Top page (uptime, cumulative users, support satisfaction)"
    url: "https://lolipop.jp/"
    accessedAt: "2026-10-06"
  - label: "Lolipop!: Lolipop MCP server and public API"
    url: "https://lolipop.jp/rentalserver/developers/"
    accessedAt: "2026-10-06"
  - label: "Lolipop!: AI Agent Skills (skill.md)"
    url: "https://lolipop.jp/ai/skills/"
    accessedAt: "2026-10-06"
  - label: "Lolipop!: AI Agent Cloud"
    url: "https://lolipop.jp/ai/agent-cloud/"
    accessedAt: "2026-10-06"
  - label: "Lolipop!: AI Gateway"
    url: "https://lolipop.jp/ai/gateway/"
    accessedAt: "2026-10-06"
  - label: "Lolipop!: Deploy Now"
    url: "https://lolipop.jp/deploy-now/"
    accessedAt: "2026-10-06"
  - label: "Lolipop!: AI Homepage"
    url: "https://lolipop.jp/ai/homepage/"
    accessedAt: "2026-10-06"
  - label: "Lolipop!: Reseller (取次店) program"
    url: "https://lolipop.jp/partner/"
    accessedAt: "2026-10-06"
  - label: "GMO Pepabo, Inc.: Q2 FY2026 earnings presentation (2026-08-13)"
    url: "https://www.nikkei.com/markets/ir/irftp/data/tdnr/tdnetg3/20260813/g2rw0w/140120260813519264.pdf"
    accessedAt: "2026-10-06"
  - label: "GMO Pepabo: Lolipop! launches a public API and MCP server (2026-07-16)"
    url: "https://pepabo.com/news/information/202607161300/"
    accessedAt: "2026-10-06"
  - label: "GMO Pepabo: Launch of Lolipop! AI Agent Cloud (2026-04-22)"
    url: "https://pepabo.com/news/press/202604221100/"
    accessedAt: "2026-10-06"
  - label: "GMO Pepabo: Launch of Lolipop! Deploy Now (2026-07-02)"
    url: "https://pepabo.com/news/press/202607021300/"
    accessedAt: "2026-10-06"
  - label: "GMO Pepabo: Launch of Lolipop! AI Gateway (2026-08-25)"
    url: "https://pepabo.com/news/press/202608251600/"
    accessedAt: "2026-10-06"
  - label: "GMO Pepabo: Lolipop! AI Gateway adds Jev from TypeSafe AI (2026-09-18)"
    url: "https://pepabo.com/news/information/202609181900"
    accessedAt: "2026-10-06"
  - label: "Pepabo Tech Portal: GMO Pepabo's tech stack, Lolipop and Muumuu Domain division"
    url: "https://tech.pepabo.com/tech-stack/hosting/"
    accessedAt: "2026-10-06"
  - label: "Pepabo Tech Portal: The story behind Lolipop! Deploy Now, part 2 (2026-09-30)"
    url: "https://tech.pepabo.com/2026/09/30/deploynow-interview/"
    accessedAt: "2026-10-06"
---

Lolipop! is a Japanese shared hosting service that GMO Pepabo has run since 2001. It rents shared servers from ¥121 a month, mostly for WordPress sites and email. On top of that base, 2026 stacked five new services for AI agents in six months. A business of renting cheap servers in volume and a signboard reading "domestic infrastructure for AI" now live under the same brand.

## Service overview

GMO Pepabo, Inc. is listed on the Tokyo Stock Exchange Standard market (ticker 3633) and, besides Lolipop!, runs Muumuu Domain, [ColorMe Shop](/en/articles/colorme-shop), minne, and SUZURI. According to the history in its earnings presentation, Lolipop! launched in November 2001, earlier than the company's own founding (January 2003, as paperboy&co. in Fukuoka). It became a consolidated subsidiary of GMO Internet Group in March 2004, listed on JASDAQ in December 2008, and changed its name to GMO Pepabo in April 2014.

:::fact
According to GMO Pepabo's earnings presentation for the second quarter of fiscal 2026 (2026-08-13), Lolipop! is "one of the largest hosting services in Japan," with 380,000 contracts as of the end of June 2026, mainly individuals and small companies as users, and prices from ¥121 a month. For the first half of 2026 (cumulative Q2), Lolipop! revenue was ¥1,348 million (102.7% of the prior year, up ¥35 million) and operating profit was ¥562 million (93.5%, down ¥39 million), with "Lolipop! for Gamers" and "Lolipop! Fixed IP Access" cited as reasons for the revenue increase and "costs for developing and promoting AI-related services" as the reason for the profit decrease. These figures include for Gamers, Fixed IP Access, AI Agent Cloud, Deploy Now, and Zero Trust Link. Quarterly revenue rose gently from ¥642 million in Q2 2024 to ¥678 million in Q2 2026, while operating profit fell from ¥304 million to ¥268 million over the same period.
:::

:::fact
According to the official pricing page (as of 2026-10-06), there are five hosting plans, with no setup fee and a 10-day free trial. On a 36-month contract the monthly price is ¥121 for Economy, ¥330 for Lite, ¥605 for Standard, ¥660 for High Speed, and ¥2,420 for Enterprise; on a one-month contract it is ¥231, ¥605, ¥1,265, ¥1,430, and ¥2,860, and on a 12-month contract ¥231, ¥539, ¥957, ¥1,045, and ¥2,585. Capacity (SSD, files, mail, and databases combined) is 120 GB, 350 GB, 450 GB, 700 GB, and 1.2 TB; custom domains are 50, 200, 300, unlimited, and unlimited; MySQL8 databases are 50 on Lite, 100 on Standard, and unlimited on High Speed and above, with none on Economy. SSH is available from Standard up, phone support from High Speed up, and on High Speed and above two custom domains stay free to register and renew for as long as the contract is 12 months or longer with auto-renewal enabled.
:::

:::fact
The official top page (as of 2026-10-06) cites 99.9% server uptime, 2.5 million cumulative users, a chat support satisfaction rate above 90% in post-support surveys (tallied from January 1 to August 31, 2026), and WordPress installation in 60 seconds, and notes its position in HostAdvice.com's "web hosting market share in Japan 2026" ranking as checked on September 30, 2026. AI chat is available 24 hours a day, and staff answer by chat, email, and phone (phone on High Speed and above).
:::

:::pull
High Speed is ¥660 a month on a 36-month contract and ¥1,430 on a one-month contract. The same server costs 2.2 times more per month on the shorter term. Only the ¥121 Economy plan, at ¥231 on a one-month contract, has the smallest gap by term.
:::

::scorecard

## UX analysis

The Lolipop! experience is beginning to split into two entrances: "a person works the control panel" and "an AI agent works the API." The former has 25 years of accumulation; the latter was added in one go in 2026.

- **Cheapness is decided by term.** The big numbers on the pricing page (¥121, ¥330, ¥660) are all 36-month unit prices, and the one-month prices sit in a separate table. It is not as extreme as [Hostinger](/en/articles/hostinger)'s 48-month prepayment, but the same plan can differ by more than double, as with High Speed at ¥660 versus ¥1,430. On the other hand there is no setup fee and a 10-day free trial, which applies equally whether you are still trying or already under contract.
- **Features are pushed to the upper plans.** SSH starts at Standard, LiteSpeed and phone support at High Speed, and the MCP server, public API, and AI Agent Skills at Standard (the Skills page says a plan with SSH is required). The ¥330 Lite plan is the entrance for "easily building a WordPress site"; anyone who wants AI to automate things starts at ¥605 at the lowest.
- **It publishes instructions for AIs to read.** The AI Agent Skills page explains that you only send Claude Code, Cursor, Gemini CLI, or similar the line "read https://lolipop.jp/ai/skills/skill.md and follow the instructions to set up." The skill.md this site read (as of 2026-10-06) tells the AI to execute from Step 1 in order, to write and run Playwright code if it lacks permission to drive a browser directly, and to take a screenshot and recover on its own up to three times when a selector fails. A procedure for AIs now sits in the same place as the manual for people.
- **You can also build by conversation alone.** AI Homepage answers the AI's questions, adjusts colors and text, and publishes with one click, with a 10-day free trial and publication in as little as 10 minutes; its price varies by term from ¥1,540 a month on one month to ¥660 on 36 months. AI Agent Cloud promises an agent running in three minutes with no terminal or programming, and lets you switch per server between Lolipop's simple dashboard and the native dashboards of OpenClaw and Hermes Agent.

## Tech stack

::techstack

:::fact
According to the Pepabo Tech Portal page "GMO Pepabo's tech stack: Lolipop and Muumuu Domain division" (as of 2026-10-06), the hosting infrastructure is bare metal, OpenStack, Kubernetes, Google Cloud, and IDCF Cloud, with MAAS and Cobbler for setting up physical servers, Nginx, ngx_mruby, Apache httpd, LiteSpeed, ProFTPD, and OpenSSH for web and storage, MySQL and PostgreSQL for databases, Postfix, Dovecot, Courier-IMAP, Amazon SES, and PowerDNS for mail and DNS, dockerd, containerd, and haconiwa as container runtimes, Prometheus, Kafka, Fluentd, Elastic APM, Mackerel, Sentry, and Datadog for observability, GitHub Actions and ArgoCD for CI/CD, and Chef, Puppet, Ansible, and Terraform for configuration management. The service-site side uses Ruby, Perl, and TypeScript, with React/Next.js and Vue.js/Nuxt.js on the frontend. The page notes that it does not list the languages of the hosting environment where customers' content runs.
:::

:::fact
According to the official server spec page (as of 2026-10-06), the server OS is Linux (Ubuntu), the type is a shared server used by multiple users, and the web server on the High Speed and Enterprise plans is LiteSpeed 6.3. PHP on Economy is 8.3 to 8.5 in CGI builds, Lite and Standard also get a module build of 8.4, SSL is paid GlobalSign or free Let's Encrypt, TLS is 1.2 and 1.3, mail virus scanning is F-Secure, and there is one FTP account per server contract. The pricing page gives Nginx+Apache as the web server for Economy through Standard and Nginx+LiteSpeed for High Speed and above, describing LiteSpeed as delivering 84 times the WordPress performance of an Apache web server. In this site's own observation (2026-10-06), the whois record for the IP address of lolipop.jp had the netname PEPABO-NYAH, GMO Pepabo's own network.
:::

:::fact
The AI services added in 2026 can be traced by press release dates. On April 22 the company launched AI Agent Cloud, which runs OpenClaw through browser operations alone, and on April 28 added Hermes Agent; the official page (as of 2026-10-06) describes three agents including NanoClaw, ¥1,200 a month, and an independent server per user. On July 2 it launched Deploy Now, which publishes a web app built with Claude Code or other AI agents to https://◯◯◯.lolipop-now.app with a single deploy command; the official page (same date) lists Free at ¥0 with 200 projects, 4 hours of monthly CPU time, and 100 GB a month of CDN bandwidth, Personal at ¥980 with 500 projects, 40 hours, and 1 TB a month, Pro as coming soon, support for Next.js, Nuxt, and Astro, and automatic HTTPS and a WAF for every project. On July 16 it launched the public API and MCP server, noting that GMO Pepabo had already released MCP servers for ColorMe Shop and Muumuu Domain in March and for SUZURI in June. On August 25 it launched AI Gateway, calling models from 14 providers through a unified API compatible with Anthropic and OpenAI, with no setup or monthly base fee and a 5% fee on purchases of prepaid credits. On September 18 it added Jev, the judgment-focused model from the US company TypeSafe AI, and the official page now lists 15 providers and 65 models, with credits valid for one year from purchase.
:::

:::fact
According to the Pepabo Tech Portal interview of 2026-09-30 (part 2), Deploy Now was built by a team in which every member could use Claude Code, with engineers laying out the database structure and naming rules in Markdown and implementing together with Claude Code. The build environment is thrown away every time to keep it safe, and published sites sleep after a period without access and start when a request arrives. After the initial release, the service was substantially rebuilt while the user base was still small.
:::

:::guess
The shared servers themselves appear to sit on the company's own bare metal and OpenStack private cloud (the Nyah network seen in this site's observation), and a ¥121 monthly price presumably holds only because owned equipment keeps the cost down. The 2026 services add, outside those shared servers, an independent server per AI agent (AI Agent Cloud), containers that start only when accessed (Deploy Now), and a front door to each vendor's LLMs (AI Gateway), each billed on a different unit from the shared host's prepaid long-term contracts. Deploy Now's disposable build environments and sleep-and-wake behavior presumably reuse the container platforms listed in the tech stack, such as Kubernetes and haconiwa. The design of skill.md, which has the AI drive a browser on its own, can also be read as the flip side of a control panel that only got a public API in July 2026 and still has operations that are not exposed through it.
:::

## Business model

Revenue rests on shared hosting fees (380,000 contracts) and the paid options and new services stacked on top. The parent company's earnings presentation counts the AI-related services inside Lolipop! and states plainly that the investment is pulling operating profit down.

:::fact
According to the earnings presentation (2026-08-13), GMO Pepabo's consolidated revenue for the first half of 2026 was ¥5,264 million (95.0% of the prior year) and operating profit ¥513 million (85.9%), while the domain and hosting segment posted revenue of ¥3,215 million (105.1%) and operating profit of ¥969 million (100.6%), the only segment in the group to grow both. The company names three growth strategies, "growth of high-price, business-oriented new services," "building alliances," and "services chosen by AI agents," and says that in hosting "investment in developing AI-related services was covered by higher revenue per customer, for a year-on-year increase in profit."
:::

:::fact
According to the official reseller program page (as of 2026-10-06), web agencies and freelancers who introduce Lolipop! to clients receive a reseller reward when a contract results. Registration is free with no quota; a new contract of six months or longer pays ¥3,300 for Lite, ¥4,400 for Standard, ¥5,500 for High Speed, and ¥11,000 for Enterprise, 12-month renewals pay ¥660 to ¥5,280, and 24-month renewals pay ¥1,320 to ¥10,560 (all tax included), transferred monthly after the result is confirmed. Economy is excluded, and the reward cannot be combined with coupons. Paid SSL, Fixed IP Access, and Zero Trust Link are also eligible.
:::

:::guess
Set against the unit prices, the ¥4,400 reward for a new Standard contract (¥605 a month on 36 months) equals about seven months of fees, and ¥5,500 for High Speed (¥660) about eight. Because long-term contracts are prepaid and the cash arrives first, the design appears to afford handing nearly a year of monthly fees to the referrer at signing, and the fact that rewards continue on renewal is the reverse of [Hostinger](/en/articles/hostinger), which pays nothing on renewals. It looks like a mechanism for rewarding agencies with recurring income for continuing to choose Lolipop! as the place their clients' sites live.
:::

:::guess
The 2026 AI services show up in the accounts, at least for the first half, as cost rather than profit. Pricing Deploy Now's Free plan at ¥0, AI Gateway with no monthly base fee, and AI Agent Cloud at ¥1,200 a month appears to put building a track record for the "services chosen by AI agents" strategy ahead of near-term revenue. The 380,000 shared hosting contracts were built on people placing WordPress sites, and when that demand shifts toward having AI agents build sites, whether higher-priced services can be added for the same customers is presumably what the parent company's "higher revenue per customer" will consist of.
:::

A company that has sold a ¥121-a-month server for 25 years added an MCP server, an execution environment for AI agents, an AI gateway, and a deploy platform in six months. The cost is written in the earnings presentation as a reason operating profit fell, and revenue is still carried by shared hosting. Whether a business of renting cheap servers in volume grows into domestic infrastructure for AI agents will show up on the same line of the same document next year.
