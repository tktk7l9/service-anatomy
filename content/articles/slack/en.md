---
service: "Slack"
title: "90 Days Visible, 275 More Returned by Paying, Gone After a Year. Slackbot at 15 Messages a Week on Business+, Outside Apps at One Call a Minute for 15 Items — Dissecting Slack, Which Sells the Right to Read Past Conversations by Drawing Lines Around It"
description: "Slack's Japan pricing on annual billing is ¥925 per user per month for Pro, ¥1,920 for Business+ and ¥5,760 for Enterprise+, all before consumption tax. The Free plan shows messages and files from the last 90 days only, and since August 26, 2024 data older than one year has been deleted on a rolling basis. In June 2025 Slack built AI into its plans and moved Business+ from ¥1,600 to ¥1,920. The new Slackbot, generally available in January 2026, is capped at 15 messages per person per week on Business+, with extra use bought through Salesforce Flex Credits. In the same period the API tightened: apps distributed commercially outside the Marketplace can fetch history once a minute, 15 items at a time, and the terms ban training large language models and bulk export. From the official pricing page, the Help Center, the developer changelog and terms, Salesforce's earnings release and the Engineering at Slack blog, this piece dissects how the same line runs through history, AI and the API, and the Hack, Java, Vitess and cellular infrastructure beneath it, including an AI platform that started with Anthropic's models."
lead: "On Slack's Free plan, past conversations you can no longer see are not gone right away. After 90 days they are hidden, after a year they are deleted, and the 275 days in between come back if you move to a paid plan. This design is not just a pricing detail. How far the AI can read, how many times you can talk to Slackbot, and how fast an outside app can pull history out all have lines drawn around them in the same way. What Slack sells is less the chat itself than who can read how much of the conversation that has built up in an organization. This piece dissects how those lines are drawn, using public information only."
category: saas
tags: [business-chat, collaboration, b2b, salesforce, ai-agent, api-platform, hack, vitess]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
expires:
  - date: "2026-11-30"
    claim: "The pricing page's \"50% off for 3 months\" offer for new teams (described as limited-time, with no end date stated)"
  - date: "2026-11-30"
    claim: "The pricing FAQ's statement that Slackbot will soon be available to try on all plans, and the Slackbot limits page (15 messages a week and so on)"
  - date: "2026-11-30"
    claim: "Statements treating Salesforce's fiscal 2027 second quarter as the latest (the third-quarter results date could not be confirmed as of 2026-11-02)"
serviceUrl: "https://slack.com/intl/ja-jp/"
# Affiliate link placeholder: the official pages read on 2026-11-02 show a partner program in the
# site navigation but no consumer affiliate program. If the owner joins one, copy the ad code as
# provided and keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://example.com/<slack-material>"
#   program: "Slack"
vendor: "Salesforce, Inc. (Slack)"
origin: "US"
heroTheme: "slack"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 4.0 }
techStack:
  - layer: "Web application (API)"
    name: "Hack on HHVM (webapp monolith)"
    confidence: confirmed
    evidence: "Engineering at Slack's \"Hacklang at Slack\" (2020-04-14, updated 2023-11-21) explains the move from a PHP 5 backend to HHVM in 2016 and then to Hack. \"Real-time Messaging\" (2023-04-11) describes Webapp, which hosts all the APIs Slack clients call, as a Hacklang codebase"
    evidenceUrl: "https://slack.engineering/hacklang-at-slack-a-better-php/"
  - layer: "Real-time delivery"
    name: "Channel / Gateway / Admin / Presence Servers (Java) + WebSocket + Consul"
    confidence: confirmed
    evidence: "\"Real-time Messaging\" (2023-04-11) states that the core services are written in Java, that Channel Servers take channels by consistent hashing, that Gateway Servers run in multiple regions, and that Consul handles service discovery"
    evidenceUrl: "https://slack.engineering/real-time-messaging/"
  - layer: "Datastore"
    name: "MySQL + Vitess"
    confidence: confirmed
    evidence: "\"Scaling Datastores at Slack with Vitess\" (2020-12-01) states that the migration began in 2017, that Vitess then served 99% of overall query load, and that the peak was 2.3 million QPS"
    evidenceUrl: "https://slack.engineering/scaling-datastores-at-slack-with-vitess/"
  - layer: "Runtime and failure containment"
    name: "AWS us-east-1 (multi-AZ cells, AZ drain) + Envoy + Rotor (in-house xDS control plane)"
    confidence: confirmed
    evidence: "\"Slack's Migration to a Cellular Architecture\" (2023-08-22) states that core compute sits in multiple AZs of us-east-1, that AZs are treated as cells, and that edge Envoy with the in-house Rotor is designed to pull traffic away within five minutes"
    evidenceUrl: "https://slack.engineering/slacks-migration-to-a-cellular-architecture/"
  - layer: "EC2 operations"
    name: "Chef (multi-stack) → Shipyard (immutable EC2 platform)"
    confidence: confirmed
    evidence: "\"Shipyard\" (2026-07-14) describes running tens of thousands of EC2 instances with Chef and the next-generation platform that treats instances as deployable artifacts"
    evidenceUrl: "https://slack.engineering/shipyard-how-we-built-slacks-next-generation-ec2-platform/"
  - layer: "AI model platform"
    name: "Amazon SageMaker → Amazon Bedrock + Google Cloud Vertex AI (intelligent routing layer)"
    confidence: confirmed
    evidence: "\"Slack AI: The Path to Multi-Cloud\" (2026-05-28) sets out four phases: Anthropic models in a SageMaker escrow VPC, the move to Bedrock in mid-2024, mixing in on-demand capacity, and adding Vertex AI in early 2026"
    evidenceUrl: "https://slack.engineering/slack-ai-the-path-to-multi-cloud/"
  - layer: "Entry point for AI clients"
    name: "Slack MCP Server (mcp.slack.com, JSON-RPC 2.0 over Streamable HTTP)"
    confidence: confirmed
    evidence: "Slack Developer Docs state the endpoint, the available tools, and that only Marketplace-published apps and internal apps can use it"
    evidenceUrl: "https://docs.slack.dev/ai/slack-mcp-server/"
  - layer: "Static delivery"
    name: "Amazon CloudFront + Amazon S3 (a.slack-edge.com)"
    confidence: likely
    evidence: "In this site's own observation (2026-11-02), a.slack-edge.com returned server: AmazonS3, via: CloudFront and x-amz-cf-pop: NRT12-P8. slack.com returned server: Apache along with ingress-edge-nrt in via, x-edge-backend: envoy-www and x-envoy-upstream-service-time"
sources:
  - label: "Slack: Pricing plans (Japan)"
    url: "https://slack.com/intl/ja-jp/pricing"
    accessedAt: "2026-11-02"
  - label: "Slack Help Center: Slack plans and features"
    url: "https://slack.com/intl/ja-jp/help/articles/115003205446"
    accessedAt: "2026-11-02"
  - label: "Slack Help Center: Feature limitations on the free version of Slack"
    url: "https://slack.com/intl/ja-jp/help/articles/27204752526611"
    accessedAt: "2026-11-02"
  - label: "Slack Help Center: Usage limits for free workspaces"
    url: "https://slack.com/intl/ja-jp/help/articles/115002422943"
    accessedAt: "2026-11-02"
  - label: "Slack Help Center: Updates to message and file history on free workspaces"
    url: "https://slack.com/intl/ja-jp/help/articles/29414264463635"
    accessedAt: "2026-11-02"
  - label: "Slack Help Center: Customize data retention in Slack"
    url: "https://slack.com/intl/ja-jp/help/articles/203457187"
    accessedAt: "2026-11-02"
  - label: "Slack Help Center: Updates to feature availability and pricing for Slack plans"
    url: "https://slack.com/intl/ja-jp/help/articles/39264531104275"
    accessedAt: "2026-11-02"
  - label: "Slack blog: Salesforce updates Slack pricing (2025-06-17)"
    url: "https://slack.com/intl/ja-jp/blog/news/june-2025-pricing-and-packaging-announcement"
    accessedAt: "2026-11-02"
  - label: "Slack Help Center: Slack's Fair Billing Policy"
    url: "https://slack.com/intl/ja-jp/help/articles/218915077"
    accessedAt: "2026-11-02"
  - label: "Slack Help Center: Sales tax and VAT"
    url: "https://slack.com/intl/ja-jp/help/articles/226166647"
    accessedAt: "2026-11-02"
  - label: "Slack Help Center: Slackbot limits and credit usage"
    url: "https://slack.com/intl/ja-jp/help/articles/53579676130195"
    accessedAt: "2026-11-02"
  - label: "Salesforce: General availability of Slackbot (2026-01-13)"
    url: "https://www.salesforce.com/news/press-releases/2026/01/13/slackbot-announcement/"
    accessedAt: "2026-11-02"
  - label: "Salesforce: Flex Credits Rate Card (2026-08-31)"
    url: "https://www.salesforce.com/en-us/wp-content/uploads/sites/4/assets/pdf/agentforce/Flex-Credits-Rate-Card-08.31.2026.pdf"
    accessedAt: "2026-11-02"
  - label: "Slack Developer Docs: Rate limit changes for non-Marketplace apps (2025-05-29)"
    url: "https://docs.slack.dev/changelog/2025/05/29/rate-limit-changes-for-non-marketplace-apps"
    accessedAt: "2026-11-02"
  - label: "Slack Developer Docs: Rate limits"
    url: "https://docs.slack.dev/apis/web-api/rate-limits/"
    accessedAt: "2026-11-02"
  - label: "Slack Developer Docs: conversations.history"
    url: "https://docs.slack.dev/reference/methods/conversations.history/"
    accessedAt: "2026-11-02"
  - label: "Slack: API Terms of Service"
    url: "https://slack.com/intl/ja-jp/terms-of-service/api"
    accessedAt: "2026-11-02"
  - label: "Slack Developer Docs: Using the Real-time Search API"
    url: "https://docs.slack.dev/apis/web-api/real-time-search-api/"
    accessedAt: "2026-11-02"
  - label: "Slack Developer Docs: Slack MCP server overview"
    url: "https://docs.slack.dev/ai/slack-mcp-server/"
    accessedAt: "2026-11-02"
  - label: "Slack Developer Docs: Slack developer changelog"
    url: "https://docs.slack.dev/changelog/"
    accessedAt: "2026-11-02"
  - label: "Salesforce: Q2 fiscal 2027 earnings press release (2026-08-26)"
    url: "https://s205.q4cdn.com/626266368/files/doc_financials/2027/q2/CRM-Q2-FY27-Earnings-Press-Release.pdf"
    accessedAt: "2026-11-02"
  - label: "Salesforce: Definitive agreement to acquire Slack (2020-12-01)"
    url: "https://www.salesforce.com/news/press-releases/2020/12/01/salesforce-definitive-agreement-update/"
    accessedAt: "2026-11-02"
  - label: "Salesforce: Completion of the Slack acquisition (2021-07-21)"
    url: "https://www.salesforce.com/news/press-releases/2021/07/21/salesforce-slack-deal-close/"
    accessedAt: "2026-11-02"
  - label: "Slack: About us"
    url: "https://slack.com/intl/ja-jp/about"
    accessedAt: "2026-11-02"
  - label: "Slack blog: Looking back on growth in Asia Pacific (2019)"
    url: "https://slack.com/intl/ja-jp/blog/news/intl-ja-jp-slacks-growth-in-asia"
    accessedAt: "2026-11-02"
  - label: "Slack Help Center: Slack data residency"
    url: "https://slack.com/intl/ja-jp/help/articles/360035633934"
    accessedAt: "2026-11-02"
  - label: "Slack Help Center: Security for AI features in Slack"
    url: "https://slack.com/intl/ja-jp/help/articles/28310650165907"
    accessedAt: "2026-11-02"
  - label: "Engineering at Slack: Real-time Messaging (2023-04-11)"
    url: "https://slack.engineering/real-time-messaging/"
    accessedAt: "2026-11-02"
  - label: "Engineering at Slack: Hacklang at Slack: A Better PHP (2020-04-14)"
    url: "https://slack.engineering/hacklang-at-slack-a-better-php/"
    accessedAt: "2026-11-02"
  - label: "Engineering at Slack: Scaling Datastores at Slack with Vitess (2020-12-01)"
    url: "https://slack.engineering/scaling-datastores-at-slack-with-vitess/"
    accessedAt: "2026-11-02"
  - label: "Engineering at Slack: Unified Grid (2024-07-31)"
    url: "https://slack.engineering/unified-grid-how-we-re-architected-slack-for-our-largest-customers/"
    accessedAt: "2026-11-02"
  - label: "Engineering at Slack: Slack's Migration to a Cellular Architecture (2023-08-22)"
    url: "https://slack.engineering/slacks-migration-to-a-cellular-architecture/"
    accessedAt: "2026-11-02"
  - label: "Engineering at Slack: How We Built Slack AI To Be Secure and Private"
    url: "https://slack.engineering/how-we-built-slack-ai-to-be-secure-and-private/"
    accessedAt: "2026-11-02"
  - label: "Engineering at Slack: Slack AI: The Path to Multi-Cloud (2026-05-28)"
    url: "https://slack.engineering/slack-ai-the-path-to-multi-cloud/"
    accessedAt: "2026-11-02"
  - label: "Engineering at Slack: Shipyard (2026-07-14)"
    url: "https://slack.engineering/shipyard-how-we-built-slacks-next-generation-ec2-platform/"
    accessedAt: "2026-11-02"
---

Slack is a business chat that gathers work conversations into channels. Where [Chatwork](/en/articles/chatwork) made it easy to reach people outside your company, Slack built its value on putting conversations in open channels and being able to search them later. That quality of being readable later has now become the product boundary itself. The past you can see for free stops at 90 days. How widely the AI can read differs by plan. How much an outside app can pull out changes by orders of magnitude depending on whether it goes through the Marketplace.

## Service overview

Slack started in 2013 and launched its Japanese version on November 17, 2017. It became part of Salesforce in 2021 and now also serves as the front door for Salesforce's AI agents.

:::fact
According to an Engineering at Slack post (2024-07-31), Slack began in 2013 with a simple structure in which each user belonged to one workspace and talked in channels, and released Enterprise Grid for its largest customers in 2017. Salesforce reached a definitive agreement to acquire Slack on December 1, 2020, paying $26.79 in cash plus 0.0776 Salesforce shares for each Slack share, which it described as an enterprise value of approximately $27.7 billion based on the closing price of November 30, 2020. The acquisition was completed on July 21, 2021.
:::

:::fact
Slack's About page (accessed 2026-11-02, no as-of date shown) lists "200k+" paid customers, 77 of the Fortune 100 on paid plans, and daily active users in "150+ countries". Slack's blog in 2019 said daily active users passed 12 million in September 2019, of whom 1.28 million were in Japan, Australia and New Zealand. Newer user counts, and any figure for Japan alone, could not be confirmed on the official pages this site read.
:::

There are four pricing tiers, shown in yen in Japan.

:::fact
The official pricing page (accessed 2026-11-02) shows the prices below. According to the Help Center, prices on Slack's website do not include tax, and Japanese consumption tax applies when the billing address is in Japan.

| Plan | Monthly billing (per user, per month) | Annual billing (per user, per month) | History | AI tier |
| --- | --- | --- | --- | --- |
| Free | ¥0 | — | 90 days | None |
| Pro | ¥1,050 | ¥925 | Unlimited | Basic AI features |
| Business+ | ¥2,160 | ¥1,920 | Unlimited | Advanced AI features |
| Enterprise+ | Not shown | ¥5,760 | Unlimited | Enterprise-grade AI features |

Monthly Pro and Business+ also show a limited-time offer of 50% off for three months when bought online within seven days of creating a team (annual billing and Enterprise+ are excluded). Enterprise+ is bought through sales.
:::

:::pull
The past you can see for free is 90 days. The 275 days beyond it stay hidden, and come back on a paid plan.
:::

::scorecard

## UX analysis

The core of the Slack experience is that conversations stay in channels and can be searched later. Pricing and AI are built by splitting that staying and that reading apart.

- **The past recedes in three steps.** According to the Help Center, on the Free plan messages and files older than 90 days are hidden and those older than a year are permanently deleted. Deletion began on August 26, 2024, and data now disappears continuously once it is a year old. Deleted data cannot be restored. The 275 days between 90 days and one year, however, become readable again after an upgrade. On paid plans, data is kept for the lifetime of the workspace by default.
- **Because downgrading is possible, what you lose is spelled out.** The "feature limitations" page lists what stops one item at a time. Slack Connect channels are disconnected and outside work is limited to one-to-one DMs, guest accounts are deactivated, canvases and lists become read-only, workflows stop running, and apps are limited to 10. It advises checking workspace analytics before downgrading to see how much would be hidden.
- **You pay for those who use it.** Under the official Fair Billing Policy, plans bought through the website charge only active members, and when a paid member becomes inactive the unused portion is reflected as prorated credit on the next bill. The pricing FAQ says a member who took an action in Slack at any point in 28 days counts as active. Single-channel guests and bots are free; multi-channel guests are paid.
- **AI reads more widely as the tier rises.** According to the Help Center's table, Pro has two features, conversation and thread summaries and huddle notes. Business+ and above add search, recaps, translation, file summaries and workflow automation, and enterprise search across connected outside apps is Enterprise+ only.
- **Slackbot is metered in messages.** According to the Help Center, the new Slackbot made generally available in January 2026 accepts 15 messages per person per week on Business+ (resetting at midnight on Monday). Free and Pro have it only during a trial or preview, and the included allowance does not reset once used. Enterprise+ has no weekly or lifetime message limit. Automatic task runs are limited to three a day. Guests and frontline members cannot use it.
- **The weakness is that the line gets harder to see.** The same AI now involves three overlapping measures: whether a feature is included, the weekly message count, and the action type under Flex Credits. The pricing FAQ says Slackbot will soon be available to try on all plans, while the limits page says Free and Pro have it "only during a trial or preview". Some readers may find it hard to tell quickly how many times they can use it on their own plan.

## Tech stack

::techstack

:::fact
According to Engineering at Slack, Slack started on a LAMP stack of Linux, Apache, MySQL and PHP, moved its PHP 5 backend to HHVM in 2016, and migrated to Hack, which adds static type checking. The APIs that clients call are still served by Webapp, a Hacklang codebase. Real-time delivery is a separate system written in Java. According to the April 2023 post, Channel Servers take channels by consistent hashing and handle about 16 million channels per host at peak. Gateway Servers run in multiple regions, and clients connect to the nearest edge over WebSocket. A message received by Webapp goes through an Admin Server to a Channel Server and then out to every subscribed Gateway Server worldwide, and the post says delivery across the world takes 500 milliseconds. Events that are not persisted, such as typing indicators, take a similar path without going through Webapp. If a Channel Server fails, a new one is ready to serve traffic in under 20 seconds.
:::

:::fact
According to the December 2020 post, all of Slack's data was originally in MySQL, sharded by workspace ID with one workspace's data on one shard. That model hit a limit when a single company no longer fit on the largest shard, and Slack began migrating to Vitess in 2017. By then Vitess served 99% of overall query load, handling a peak of 2.3 million QPS (2 million reads, 300,000 writes) at a median of 2 milliseconds and a p99 of 11 milliseconds. The post also explains that every message is persisted before it is sent across the WebSocket stack, and that Vitess's flexibility helped with Slack Connect and data residency. The July 2024 post says that moving shard keys away from workspace and org IDs was a precondition for Unified Grid, which shows several workspaces in one view.
:::

:::fact
According to the August 2023 post, Slack's core compute sits in multiple Availability Zones (AZs) of a single region, us-east-1. In an incident on June 30, 2021, intermittent faults in a network link for one AZ produced a "gray failure", in which different components saw availability differently, and users were affected. Over about 18 months Slack split its critical services into per-AZ cells, with each service talking only within its own AZ (siloing), and set a goal of pulling traffic out of an AZ within five minutes using only configuration in edge Envoy and the in-house Rotor. Because Hack, Go, Java and C++ were all in use, it chose to switch at one point at the entrance rather than implement switching in each language's clients. The post gives as motivation that a 99.99% availability SLA allows less than one hour of unavailability a year (this site could not confirm the figure in the current SLA). The July 2026 post says that continuously updating tens of thousands of EC2 instances with Chef was hitting its limits, which led to Shipyard, a platform that treats instances as deployable artifacts.
:::

:::fact
According to the AI platform post (2026-05-28), Slack started on AWS SageMaker in early 2023 and ran Anthropic's models in an escrow VPC, a setup in which the model provider cannot reach customer data and Slack cannot reach the model weights. GPU scarcity and the burden of idle capacity were heavy, and new models increasingly reached Bedrock first, so Slack moved to Amazon Bedrock in mid-2024 and shifted work such as nightly recaps to on-demand capacity. In early 2026 it added Google Cloud's Vertex AI, choosing models per feature and building a path that automatically switches to another model or provider when degradation is detected. Slack reports about a 10% improvement in quality metrics for complex reasoning tasks and about a 67% reduction in latency for lightweight workloads. The Help Center explains that data is not used to train LLMs and that Slack uses Retrieval Augmented Generation (RAG), passing only what each inference needs.
:::

:::guess
The Help Center and the pricing FAQ say customer data does not leave infrastructure Slack controls and that the LLMs are hosted directly within Slack's AWS VPC. The May 2026 engineering post, by contrast, describes a setup using managed Bedrock and Vertex AI, so parts of the FAQ wording appear to date from the early SageMaker era. That said, the engineering post also says data boundaries were maintained, and "infrastructure Slack controls" may be a phrasing that includes contractual boundaries. Which reading is correct cannot be determined from public information alone.
:::

:::guess
Laid out in order, Slack's technical history looks like one in which nothing was ever thrown away entirely. PHP became Hack, MySQL stayed beneath Vitess, and Shipyard sits on top of Chef. The cell design, too, accepts mixed languages as a given and switches only at the entrance, without aiming for perfect isolation. Keeping the core in one region and containing failures by AZ is presumed to be a choice to add availability on top of a running platform rather than rebuild it as multi-region from scratch. The AI platform alone changed providers within three years, apparently because model generations turn over faster than this kind of layering moves.
:::

## Business model

Revenue centers on monthly per-user fees, and since 2025 AI tiers and usage-based charges have been layered on top.

:::fact
According to Slack's blog (2025-06-17), Slack updated its plans and pricing that day. Pro kept its price and gained summaries and huddle notes, Business+ moved from ¥1,600 to ¥1,920 per user per month on annual billing and from ¥1,800 to ¥2,160 on monthly billing, and Enterprise+ was introduced. According to the Help Center, the previously separate Slack AI add-on can no longer be bought on the website, and existing buyers keep it until their first renewal after August 17, 2025. The new Slackbot became generally available for Business+ and Enterprise+ on January 13, 2026. Extra use is bought through Salesforce Flex Credits, available to Free, Pro and Business+ workspaces with a connected Salesforce org. On the rate card dated August 31, 2026, a Slackbot standard action is 40 credits and an advanced action is 200 credits.
:::

The other line runs through the API.

:::fact
According to Slack's developer changelog (2025-05-29), the rate limits for conversations.history and conversations.replies were cut from Tier 3 to Tier 1 for apps distributed commercially outside the Marketplace. The limit is one request per minute and 15 objects per request, and it applies to apps created from that date and to new installations of existing apps. Internal custom apps stay at 50+ requests per minute and 1,000 objects per request, and Marketplace apps are not affected. The current version says existing installations are not subject to the change. Slack gives preventing bulk data exfiltration by unvetted apps as the reason. The API Terms of Service forbid apps offered outside your organization from using API data to train large language models, from bulk-exporting messages or files (unless separately permitted), and from using one organization's data to benefit another, and they generally require Marketplace participation or a partner agreement for commercial distribution. The Real-time Search API and the Slack MCP Server are available only to Marketplace-published and internal apps. The terms for the Real-time Search API also forbid making persistent copies or indexes of other organizations' data. The Marketplace requires at least 10 installations on active workspaces for review (since July 2026).
:::

:::fact
According to the developer changelog, in 2026 Slack has been adding pieces that invite outside AI in. It released the Slackbot MCP Client, which lets Slackbot call outside MCP servers, on June 18; the Slack MCP and Skills Plugin for Claude Code and Cursor on July 31; Slack Code, in which people and agents work in dedicated channels, on August 20; and API methods for managing Slackbot skills on October 28. On June 17 it moved system notifications from Slackbot to a system user called "Slack", separating Slackbot as the home for AI conversations.
:::

:::fact
According to Salesforce's earnings release for the second quarter of fiscal 2027 (May to July 2026), revenue was $11.345 billion, up 11% year on year. Slack's revenue is not disclosed separately. The disclosure categories were revised in the first quarter of fiscal 2027, and Slack now sits within "Agentforce Apps" ($7.193 billion in the second quarter, up 8% in constant currency) alongside Agentforce Sales, Agentforce Service and others. For the quarter, the company said Slack delivered its fastest quarterly Net New Annual Order Value growth since acquisition and that Slackbot users grew over 150% quarter on quarter. Agentforce annual recurring revenue exceeded $1.5 billion, up over 240% year on year, but the definition includes Slackbot and Headless 360 from the second quarter. Agentic Work Units delivered across Agentforce and Slack reached 7.0 billion to date, with 3.2 billion in the second quarter. Full-year revenue guidance is $46.1 billion to $46.4 billion.
:::

:::guess
The 90 days of history, the 15 Slackbot messages a week and the one call a minute for outside apps look like separate measures but appear to be lines protecting the same asset. The conversation built up in an organization has become the most valuable context for AI. Leaving it open for free costs storage, and if outside AI carries it off, the case for selling Slack's own AI features on higher plans weakens. The sequence of tightening the API in May 2025 and building AI into plans the following month suggests the two were one decision. Slack gives protecting customer data as the reason, and that is likely a real and large issue too. Data protection and competitive defense can both hold at once, so the motive cannot be pinned on just one.
:::

:::guess
It also matters that outside AI is not shut out completely. The Real-time Search API and the MCP Server open a window by letting apps search within the user's permissions without storing the data outside. Not allowing copies while allowing reads each time can be read as a design that keeps Slack as the place where conversation data lives while making it a place any AI can call. The inclusion of Slackbot in Agentforce ARR in Salesforce's earnings materials is presumed to reflect a wish to have Slack valued as an entry point for agents rather than as revenue from human chat. Still, because Slack's revenue is undisclosed, how much income the move from a 15-message cap to Flex Credits generates cannot be seen from outside, and the absolute amount behind "fastest since acquisition" cannot be checked.
:::

Slack began in 2013 as a simple chat and has grown into the place where past conversations become an organization's asset. That asset now carries price tags and fences in the form of 90 days, 15 messages and one call a minute. To someone buying a chat tool these may be small limits. To Slack they are the definition of what it owns in the age of AI.
