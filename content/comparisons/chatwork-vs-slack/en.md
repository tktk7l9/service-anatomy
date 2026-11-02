---
title: "Chatwork vs. Slack in Japan — A Window for Talking to Outsiders, and a Place That Turns Internal Conversation Into an Asset. Pricing, Free-Plan Limits, AI and APIs Compared from the Official Pages"
description: "A comparison of Chatwork and Slack based on their official Japan pages (accessed 2026-11-02). Annual-billing prices per user per month before tax are ¥700 for Chatwork Standard, ¥1,200 for Professional, ¥925 for Slack Pro and ¥1,920 for Business+. Free-plan history is the last 40 days on Chatwork and 90 days on Slack, where data older than a year is deleted. AI is included from Standard on Chatwork, while on Slack features and message counts change by tier. It also lines up downgrading, how seats are counted, how outsiders are handled, API limits and where data lives, and sets out who would reasonably pick which."
lead: "A company bringing in a work chat in Japan often ends up asking the same last question: Chatwork or Slack? Both are bought per user per month, but their price lists divide different things. Chatwork's paid plans make reading and contacts unlimited and put the difference between tiers in security and administration. Slack's paid plans put the difference in how widely the AI can read. Rereading the official Japan pages on November 2, 2026, this piece lines up pricing, free plans, outside collaboration, AI and APIs, then dissects which way of drawing the line fits which kind of organization."
slugA: "chatwork"
slugB: "slack"
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
expires:
  - date: "2026-11-15"
    claim: "Statements treating kubell's second quarter of the fiscal year ending December 2026 as the latest (a third-party calendar shows third-quarter results in mid-November; the exact date is unconfirmed)"
  - date: "2026-11-30"
    claim: "The \"50% off for 3 months\" offer for new teams on Slack's pricing page (described as limited-time, with no end date stated)"
  - date: "2026-11-30"
    claim: "Statements on Slackbot availability and message counts (the pricing FAQ says it will soon be available to try on all plans)"
sources:
  - label: "Chatwork: Pricing plans"
    url: "https://go.chatwork.com/ja/price/"
    accessedAt: "2026-11-02"
  - label: "Chatwork: Security"
    url: "https://go.chatwork.com/ja/security/"
    accessedAt: "2026-11-02"
  - label: "Chatwork API documentation: Endpoints (rate limit)"
    url: "https://developer.chatwork.com/docs/endpoints"
    accessedAt: "2026-11-02"
  - label: "GitHub: chatwork/chatwork-mcp-server"
    url: "https://github.com/chatwork/chatwork-mcp-server"
    accessedAt: "2026-11-02"
  - label: "kubell Co., Ltd.: Q2 FY2026 results presentation (2026-08-14)"
    url: "https://contents.xj-storage.jp/xcontents/AS04681/c5c169ad/7c90/4228/b376/4749c88551d5/140120260814520629.pdf"
    accessedAt: "2026-11-02"
  - label: "Slack: Pricing plans (Japan)"
    url: "https://slack.com/intl/ja-jp/pricing"
    accessedAt: "2026-11-02"
  - label: "Slack Help Center: Feature limitations on the free version of Slack"
    url: "https://slack.com/intl/ja-jp/help/articles/27204752526611"
    accessedAt: "2026-11-02"
  - label: "Slack Help Center: Updates to message and file history on free workspaces"
    url: "https://slack.com/intl/ja-jp/help/articles/29414264463635"
    accessedAt: "2026-11-02"
  - label: "Slack Help Center: Slack's Fair Billing Policy"
    url: "https://slack.com/intl/ja-jp/help/articles/218915077"
    accessedAt: "2026-11-02"
  - label: "Slack Help Center: Sales tax and VAT"
    url: "https://slack.com/intl/ja-jp/help/articles/226166647"
    accessedAt: "2026-11-02"
  - label: "Slack Help Center: Updates to feature availability and pricing for Slack plans"
    url: "https://slack.com/intl/ja-jp/help/articles/39264531104275"
    accessedAt: "2026-11-02"
  - label: "Slack Help Center: Slackbot limits and credit usage"
    url: "https://slack.com/intl/ja-jp/help/articles/53579676130195"
    accessedAt: "2026-11-02"
  - label: "Slack Help Center: Slack data residency"
    url: "https://slack.com/intl/ja-jp/help/articles/360035633934"
    accessedAt: "2026-11-02"
  - label: "Slack Developer Docs: Rate limits"
    url: "https://docs.slack.dev/apis/web-api/rate-limits/"
    accessedAt: "2026-11-02"
  - label: "Slack Developer Docs: Rate limit changes for non-Marketplace apps (2025-05-29)"
    url: "https://docs.slack.dev/changelog/2025/05/29/rate-limit-changes-for-non-marketplace-apps"
    accessedAt: "2026-11-02"
  - label: "Slack: API Terms of Service"
    url: "https://slack.com/intl/ja-jp/terms-of-service/api"
    accessedAt: "2026-11-02"
  - label: "Slack Developer Docs: Slack MCP server overview"
    url: "https://docs.slack.dev/ai/slack-mcp-server/"
    accessedAt: "2026-11-02"
---

[Chatwork](/en/articles/chatwork) and [Slack](/en/articles/slack) are both usually filed as services that move work communication into chat. Put their price lists side by side, though, and what changes when you pay is designed differently. This piece reads the official Japan pages on November 2, 2026 and lines up the numbers and conditions as written. This site has not subscribed to both and compared them in use; it is checking published price lists and documentation against each other. Prices and terms change, so always check the official pages before signing up.

## The Japan prices, side by side

:::fact
The table below rearranges Chatwork's and Slack's pricing pages (both accessed 2026-11-02). Chatwork states its prices exclude tax. Slack's Help Center says prices on its website do not include tax and that consumption tax applies when the billing address is in Japan.

| Plan | Annual billing, per user per month | Monthly billing, per user per month |
| --- | --- | --- |
| Chatwork Free | ¥0 | ¥0 |
| Chatwork Standard | ¥700 | ¥840 |
| Chatwork Professional | ¥1,200 | ¥1,440 |
| Slack Free | ¥0 | ¥0 |
| Slack Pro | ¥925 | ¥1,050 |
| Slack Business+ | ¥1,920 | ¥2,160 |
| Slack Enterprise+ | ¥5,760 | Not shown |

Chatwork sets a minimum of five users for Professional. No minimum appears in the notes for Standard, and kubell's results presentation says the minimum was changed to one. Monthly Slack Pro and Business+ show a limited-time offer of 50% off for three months if bought within seven days of creating a team.
:::

:::fact
From the annual-billing prices above, this site calculates the pre-tax cost of 30 people for one year as follows. Slack's 50% offer is not included.

| Plan | 30 people, one year, before tax |
| --- | --- |
| Chatwork Standard | ¥252,000 |
| Slack Pro | ¥333,000 |
| Chatwork Professional | ¥432,000 |
| Slack Business+ | ¥691,200 |
| Slack Enterprise+ | ¥2,073,600 |
:::

:::fact
Seats are counted differently too. The notes on Chatwork's pricing page say an upgrade from Free covers all users in the organization, that upgrading only some is not possible, and that when the number of users and licenses differ, charges follow the number of licenses. After upgrading you cannot return to Free. Slack's Fair Billing Policy says plans bought through the website charge only active members and turn inactive members' unused time into prorated credit. A member counts as active if they took an action in Slack at any point in 28 days. Slack allows downgrading to Free and has a page explaining the effects.
:::

:::guess
On the rates alone, Chatwork is cheaper at each comparable level, and Standard and Pro differ by ¥225 per user per month on annual billing. In organizations where not everyone uses it every month, however, Slack's active-member billing has room to shrink the actual bill. Conversely, if nearly everyone uses it daily, that advantage appears to be small. Consumption tax treatment varies by business, so checking with a tax accountant is the reliable course.
:::

## What stops on the free plan

:::fact
The main free-plan limits from both companies' official pages (accessed 2026-11-02):

| Item | Chatwork Free | Slack Free |
| --- | --- | --- |
| Reading messages | Last 40 days | Last 90 days |
| Older data | No mention of deletion found on the pricing page | Deleted on a rolling basis after one year (since August 26, 2024); cannot be restored once deleted |
| Does the past come back on paying? | Paid plans have unlimited message reading | The 275 days between 90 days and one year become readable |
| Users | Up to 100 per organization | No limit found on the pricing page |
| Connecting with outsiders | Up to 20 outside contacts per user | Slack Connect is one-to-one DMs only |
| Calls | One to one | One-to-one huddles |
| Outside apps | Could not be confirmed | Up to 10 |
| Ads | Shown (hidden on paid plans, except notices for its own and group services) | No mention found on the pricing page |

For storage, Chatwork states 10GB per organization on Free and 10GB per user on paid plans. According to kubell's results presentation, Chatwork's Free plan introduced a reading limit in October 2022, and in August 2024 removed the limit on the number of messages viewable, increased storage and added the contact limit.
:::

:::guess
The difference between the free plans appears to lie less in 40 days versus 90 days than in when you are pushed to move. Chatwork offers a shorter past but lets you keep connecting with up to 20 outsiders and in group chats. Slack lets you read 90 days, but what passes one year does not come back even on a paid plan, so if there are conversations you want to keep as records, the decision needs to come early. If you intend to stay free for a long time, it is safer not to use either as the home for work records.
:::

## How each connects you to outsiders

:::fact
Chatwork's paid plans have unlimited contacts, and in the pricing page's terms you can connect with people outside your organization with no per-user cap. According to Slack's pricing page, Pro and above can work with outsiders through DMs, group chats and dedicated channels with up to 250 organizations (Slack Connect). Moving to Free disconnects Slack Connect channels and limits outside work to one-to-one DMs. Guests are another route: single-channel guests are free, multi-channel guests are paid, and all are deactivated on returning to Free.
:::

:::guess
For companies that talk to outsiders a lot, the difference appears to come down to what you ask of the other side. Slack Connect assumes the other organization also uses Slack, and what is available depends on whether it is on a paid plan. Chatwork contacts link individuals, so it is presumed to be easier to start even when the counterpart is a sole proprietor or a small office. Conversely, Slack Connect's design is likely to suit large organizations that want dedicated channels with outside organizations under administrator control.
:::

## How AI is stacked

:::fact
Chatwork's pricing page lists "AI features such as summaries and document creation" as a Standard and above feature. kubell's results presentation (2026-08-14) says it released AI summaries, AI draft writing, AI labor and employment news, AI explanation and analysis, and AI document creation, and that it will expand them according to response.
:::

:::fact
According to Slack's Help Center, Pro has two features, conversation and thread summaries and huddle notes; Business+ adds search, recaps, translation, file summaries and workflow automation; and Enterprise+ adds enterprise search. Slackbot, the personal AI agent, allows 15 messages per person per week on Business+, is available on Free and Pro only during a trial or preview, and has no weekly or lifetime limit on Enterprise+. Extra use can be bought through Salesforce Flex Credits.
:::

:::guess
Chatwork appears to add AI where daily chat runs into trouble, while Slack tiers AI by how far across the organization's knowledge it reads. A feature like Chatwork's labor and employment news reads as an idea aimed at small businesses with nobody assigned to follow legal changes. Slack's design gains value the more accumulated conversation and connected outside systems it reads, so the benefit is presumed to be greatest for organizations with heavy conversation volume that can pay for Business+ or above. On Pro, note that AI search and Slackbot, Slack's headline AI features, are not available on a continuing basis.
:::

## How each opens its API

:::fact
Chatwork's API documentation states a limit of 300 requests per five minutes, with remaining calls returned in response headers. API tokens are sent in an HTTP header and do not expire. The official Chatwork MCP Server is published on GitHub in TypeScript under the MIT license (51 stars via the API as of 2026-11-02).
:::

:::fact
Slack's Web API assigns each method a tier from Tier 1 (1+ per minute) to Tier 4 (100+ per minute), evaluated per workspace and per app, and the same on all plans. For apps distributed commercially outside the Marketplace, however, apps created from May 29, 2025 and new installations are limited to one request per minute and 15 objects per request on conversations.history and conversations.replies. Internal custom apps stay at 50+ requests per minute and 1,000 objects per request. The API Terms of Service forbid apps offered outside your organization from training large language models and from bulk export. The Slack MCP Server is available to Marketplace-published and internal apps, and also through partner clients such as Claude.ai, Claude Code, Perplexity and Cursor.
:::

:::guess
For automating notifications or reporting inside your own company, either API will often be enough. The difference appears when you want to distribute that integration to other companies as a product. Slack has made its reviewed Marketplace the practical requirement, which adds work but puts you in a market of more than 2,600 apps. In the Chatwork API documentation this site read, no comparable review was found, so it is easier to start, while the audience is presumed to be mainly domestic users.
:::

## Where data lives, and security

:::fact
Slack's data residency feature includes Tokyo as a storage location, with Osaka as the backup region. According to the Help Center, Free and Pro must first upgrade to Business+, and use is requested through sales. Chatwork's security page explains encryption of communications and uploaded files and two-step verification, and lists IP address restriction, mobile device restriction and chat log export among Professional plan features. Data storage regions could not be confirmed on the official Chatwork pages this site read.
:::

## Which fits which kind of organization

From here on, this is this site's reading of the price lists and conditions above. It does not rank them; it shows which rows matter for which shape of organization.

:::guess
- **Companies of a few to a few dozen people who mostly talk to outside individuals** are likely to fit Chatwork's price list. Standard makes reading and contacts unlimited, includes AI, and stays at ¥700 per user per month. kubell's results presentation says 97% of paying users are small and medium-sized businesses.
- **Development teams and IT companies that want to keep internal discussion searchable and connect several SaaS tools through notifications** could start with Slack Pro. The app market and the depth of the Web API matter, and people who do not use it turn into credit.
- **Companies that want AI to search across organizational knowledge** have reason to consider Slack Business+ or above. At ¥1,920 per user per month, estimates still need to account for the AI message limits.
- **Small businesses that need auditing or device restrictions at low cost** could consider Chatwork Professional. IP restriction and chat log export are included at ¥1,200 per month.
- **Large organizations that must specify Japan as the data location** will find the feature stated publicly for Slack, within what this site could confirm. For Chatwork, ask directly.
- **If you might upgrade, watch how it goes and go back**, note that Chatwork states you cannot return to Free. Slack allows it, but with Slack Connect disconnected and workflows stopped.
:::

## Why the lines are drawn differently

:::fact
According to kubell's results presentation (2026-08-14), Chatwork had 849,000 paying IDs and ARPU of ¥734.5 at the end of June 2026, and in kubell's April to June 2026 revenue the SaaS domain grew 5.0% year on year while the BPaaS domain, which takes on work through the chat, grew 84.0%. According to Salesforce's earnings materials, Slack's revenue is not disclosed separately, and Slackbot is included in Agentforce ARR.
:::

:::guess
The difference in where the lines fall appears to come from what each company sees beyond the chat. For kubell, chat is a window for taking on small businesses' work, so keeping users broad has value. AI therefore sits in the cheap tier, the difference lies in security and administration, and growth is sought outside the chat. For Salesforce, Slack is where organizational context accumulates and an entry point for AI agents. So the line falls on how much can be read, and it leads toward higher plans and Flex Credits.

Both designs make sense in some ways and are inconvenient in others for users. Chatwork is easy to understand, but the difference in chat features between tiers is small, and notices may increase. Slack is powerful, but tiers and counts overlap, and estimating takes work. Either company may change prices or features, so neither is a safe assumption over many years.
:::

Chatwork and Slack sell the same chat for different purposes. What a buyer should look at is less the per-user price gap than who your conversations are with and who will read them years from now. If quickly talking to small outside parties is the center, Chatwork's price list tells you which rows to read. If reusing the conversation built up inside through search and AI is the center, Slack's does.
