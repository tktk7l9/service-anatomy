---
title: "Better Stack vs. Sentry for Error Tracking — Per-Error Pricing, Free Tiers, Self-Hosting and On-Call Compared from the Official Pages"
description: "A comparison of Better Stack and Sentry for error tracking, based only on their official pricing pages and docs (accessed 2026-11-02). Better Stack accepts Sentry SDKs as-is and charges $0.00005 per additional error in Europe; Sentry's Team plan charges $0.00015 per error on pay-as-you-go above 20M. We line up free tiers, session replay and log pricing, data residency, whether you can self-host, on-call and status pages, and how each bills for AI, then sort out which kind of team each tends to fit."
lead: "Better Stack's official docs say you can keep using your existing Sentry SDK and just send the data to Better Stack. Sentry publishes those SDKs under the MIT license. In other words, the two companies compete for the same instrumentation code inside your app. Because switching is cheap, what is worth comparing is the shape of the price lists and what comes attached around error tracking. We read both companies' official pages on November 2, 2026, and lay out their numbers and conditions as written."
slugA: "better-stack"
slugB: "sentry"
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
sources:
  - label: "Better Stack official: pricing (free tier, Responder, regional rates for errors and session replay, telemetry bundles)"
    url: "https://betterstack.com/pricing"
    accessedAt: "2026-11-02"
  - label: "Better Stack docs: Errors (Sentry SDK compatibility, supported languages, MCP server)"
    url: "https://betterstack.com/docs/errors/"
    accessedAt: "2026-11-02"
  - label: "Better Stack official: Error tracking (assumptions behind its price comparison with Sentry and Datadog)"
    url: "https://betterstack.com/error-tracking"
    accessedAt: "2026-11-02"
  - label: "Better Stack official: Security (data residency, SOC 2, HIPAA)"
    url: "https://betterstack.com/security"
    accessedAt: "2026-11-02"
  - label: "Better Stack official homepage (product list, migration assistance)"
    url: "https://betterstack.com/"
    accessedAt: "2026-11-02"
  - label: "Better Stack press release: introducing Better Stack and merging Better Uptime and Logtail"
    url: "https://betterstack.com/press/introducing-better-stack/"
    accessedAt: "2026-11-02"
  - label: "Sentry official: pricing page (plans, included volume, add-on rates)"
    url: "https://sentry.io/pricing/"
    accessedAt: "2026-11-02"
  - label: "Sentry docs: Pricing & Billing (per-category rates, PAYG budget, what happens over quota, Seer pricing)"
    url: "https://docs.sentry.io/pricing/"
    accessedAt: "2026-11-02"
  - label: "Sentry docs: Data Storage Location (US and EU)"
    url: "https://docs.sentry.io/organization/data-storage-location/"
    accessedAt: "2026-11-02"
  - label: "Sentry developer docs: Self-Hosted Sentry"
    url: "https://develop.sentry.dev/self-hosted/"
    accessedAt: "2026-11-02"
  - label: "Sentry developer docs: Application Architecture Overview (Relay, Symbolicator, Snuba)"
    url: "https://develop.sentry.dev/application-architecture/overview/"
    accessedAt: "2026-11-02"
  - label: "Sentry official: homepage (product list, Seer, MCP server)"
    url: "https://sentry.io/welcome/"
    accessedAt: "2026-11-02"
  - label: "GitHub: getsentry/sentry-javascript LICENSE (MIT)"
    url: "https://github.com/getsentry/sentry-javascript/blob/develop/LICENSE"
    accessedAt: "2026-11-02"
---

[Better Stack](/en/articles/better-stack) and [Sentry](/en/articles/sentry) started from different places. Better Stack was born from merging two products, Better Uptime for uptime monitoring and Logtail for log management (per its official press release), and error tracking was added on top. Sentry started with error tracking and later added traces, logs, and uptime monitoring. Even so, the two now overlap in one specific place: the Sentry SDK inside your app. This article lays out the numbers and conditions written on both companies' official pricing pages and docs, read on November 2, 2026. We have not subscribed to both and used them side by side; we are cross-checking published price lists and documentation. Prices change, so always check the official pages before signing up.

## What overlaps and what does not

:::fact
Better Stack's official docs (accessed 2026-11-02) call its error tracking "AI-native error tracking built on Better Stack" and describe it as "Sentry SDK-compatible at 1/6th the price." You keep your existing Sentry SDK and "just send the data to Better Stack," and it says errors can be tracked across 100+ platforms, including JavaScript, Python, Go, Ruby, Java, .NET, and PHP. The LICENSE for Sentry's JavaScript SDK (sentry-javascript) is MIT, with no terms that prevent Better Stack from using it this way. Sentry's homepage says errors, logs, replays, spans, profiles, and metrics are connected by the same trace, and lists Seer (its AI) and an MCP server as products. Better Stack's homepage lists an eBPF-based service map (tracing), log management, OpenTelemetry tracing, infrastructure monitoring, error tracking, incident management, status pages, an AI SRE, uptime monitoring, and real user monitoring including session replay.
:::

:::fact
We rearranged what each company offers from their official pages (all accessed 2026-11-02). "Not listed" means we could not find it on the pages we read; it is not a claim that the product does not exist.

| Feature | Better Stack | Sentry |
| --- | --- | --- |
| Error tracking | Yes (Sentry SDK compatible) | Yes (its own SDKs) |
| Tracing | Yes (OpenTelemetry, eBPF) | Yes (billed by spans) |
| Logs | Yes | Yes |
| Session replay | Yes | Yes |
| Uptime monitoring | Yes | Yes |
| Cron / heartbeat monitoring | Yes (monitors and heartbeats on the price list) | Yes (cron monitors) |
| Profiling | Not listed | Yes (PAYG only) |
| On-call (phone and SMS paging) | Yes (included with Responder) | Not listed on the pricing page |
| Status pages | Yes (one on the free tier) | Not listed on the pricing page |
| Self-hosting | Not listed on the pricing page (custom cluster deployment for logs, traces, and metrics is Enterprise) | Yes (internal use permitted under the FSL) |
| AI-assisted fixes | AI SRE, prompts for coding agents, MCP server | Seer (root cause analysis, fix pull requests, code review), MCP server |
:::

:::pull
The SDK at the front door is the same, but Better Stack is strongest at carrying an error to the on-call person's phone, and Sentry at carrying it to a code fix.
:::

## Error tracking prices side by side

:::fact
From both pricing pages and Sentry's pricing docs (all accessed 2026-11-02), here are the rows that matter for error tracking. All prices are in US dollars. Sentry states that prices exclude sales tax, and that in the EU and UK VAT applies to orders without a valid VAT ID or exemption documentation.

| Item | Better Stack | Sentry |
| --- | --- | --- |
| Errors on the free tier | 100,000/month | 5,000/month on the Developer plan (one user) |
| Paid base price | Members who only view telemetry: $0/month. On-call Responder: $34/month ($29/month billed annually) | Team $29/month ($26/month annually), Business $89/month ($80/month annually). Unlimited users on Team and above |
| Errors included on paid plans | 100,000 | 50,000 |
| Each additional error | Europe $0.000050, US $0.000075, Singapore $0.000175 | Team PAYG: 50k–100k $0.0003625, 500k–10M $0.0001875, above 20M $0.00015 (reserved: $0.00029, $0.00015, and $0.00012 respectively). Business PAYG above 20M: $0.0003 |
| Error retention / lookback | 90 days | Developer 30 days; Team and Business up to 90 days |
| Session replay | 5,000 included; each additional replay $0.00150 in Europe, $0.00225 in the US | 50 included; Team PAYG 50–5k tier $0.00375 per replay |
| Logs | $0.10/GB in Europe, $0.15/GB in the US (bundles include 30-day retention) | 5GB included; additional $0.50/GB (PAYG only) |
| Uptime monitoring | 10 monitors and heartbeats on the free tier | 1 included; each additional monitor $1.00 (PAYG only) |
| When you hit the cap | Not found on the pricing page | Data sent after reserved volume and the PAYG budget run out is dropped and not charged |
:::

:::fact
Better Stack's error tracking page estimates the monthly cost of storing 100M exceptions for 90 days at about $5,000 on Better Stack, $18,000 for Datadog error tracking, and $30,000 on Sentry, and advertises that you can "save up to 83% of your costs." Per its footnote, the per-event rates are $0.0003000 for Sentry, $0.00018 for Datadog, and $0.000050 for Better Stack, assuming a European data location and on-demand pricing. In Sentry's pricing docs, $0.0003 is the Business plan's PAYG rate above 20M errors; the Team plan's PAYG rate in the same tier is $0.00015, and $0.00012 reserved.
:::

:::guess
On unit price alone, Better Stack looks cheaper at high error volumes. Even comparing against Sentry's Team plan above 20M errors, Sentry's PAYG $0.00015 versus Better Stack's European $0.00005 is a third, and Better Stack's US rate of $0.000075 is half. However, Better Stack's "1/6th" figure is set against Sentry's Business PAYG rate, and the gap appears narrower on the Team plan or with reserved volume. Conversely, a small service with a few tens of thousands of errors a month fits inside Better Stack's free 100,000, while Sentry's free tier is 5,000 errors and a single user. The pattern seems to be that Better Stack's generous free tier matters most when you are small, while Sentry's tiered discounts and reserved pricing narrow the gap as volume grows. The Sentry docs we read do not say whether tier rates apply progressively or as a single rate on the whole volume, so we have not estimated totals.
:::

## Where data lives, and self-hosting

:::fact
According to Better Stack's security page (accessed 2026-11-02), data is stored by default in EU regions in GDPR-compliant, DIN ISO/IEC 27001-certified data centers, and custom data locations are offered for enterprise accounts. It is SOC 2 Type 2 compliant and states that it is "currently not HIPAA compliant." On the pricing page, error, replay, and log rates are broken out by region: Europe, the US, and Singapore. According to Sentry's data storage location docs, you choose the US (Iowa) or the EU (Frankfurt), and the choice cannot be changed later. Errors, spans, logs, replays, and similar data are stored in the chosen region, while user accounts, organization settings, audit logs, cron check-ins, DSN keys, and the like always stay in the US.
:::

:::fact
Sentry publishes its server source under the Functional Source License (FSL) and documents a self-hosted version. Per the official developer docs, the minimum requirements are 4 CPU cores, 16 GB of RAM (plus 16 GB of swap), and 20 GB of free disk, with 32 GB of RAM recommended. There are no guarantees or dedicated support, and closed-source features such as Seer, spike protection, and data storage location selection exist only in SaaS. Under the FSL you can deploy it anywhere, including within an enterprise, but selling self-hosted Sentry or competing directly with Sentry using its FSL code is prohibited, and the code becomes Apache 2.0 after two years. Better Stack's pricing page lists "custom cluster deployment" for logs, traces, and metrics and "custom VPC deployment" as Enterprise items, but we did not find a self-hosted edition that customers run themselves.
:::

:::guess
For an organization that cannot let data leave its own facilities, or that needs to collect errors in an isolated network, the realistic option appears to be self-hosted Sentry — on the condition that you operate a stack starting at 16 GB of RAM and give up the AI features. If you simply want data kept in the EU, Better Stack defaults to the EU and Sentry lets you choose the EU, so either seems to meet the requirement. With Sentry, the fact that accounts and audit logs always stay in the US is likely to be a point your internal review will want to check.
:::

## What happens after the error

:::fact
According to Better Stack's pricing page, a Responder ("Incidents + Telemetry") includes on-call scheduling, and the on-call and incident management rows list "unlimited phone call alerts" and "unlimited SMS." One status page is included on the free tier. Its error tracking page lists creating tickets in Linear or Jira, escalating to the on-call person, and acknowledging or resolving errors from Slack and Microsoft Teams, and says its AI SRE "never takes any automated actions without your approval." According to Sentry's homepage, Seer uses logs, commits, traces, and stack traces to explain "why your code failed, not just where," generates merge-ready patches, and checks pull requests against error and performance history to catch regressions before they ship. Per the pricing docs, Seer costs $40 per active contributor per month (anyone who opens two or more pull requests in a month to a Seer-enabled repository), billed separately from the PAYG budget.
:::

:::guess
After an error occurs, the two companies' centers of gravity appear clearly different. Better Stack owns the whole chain in one vendor: raise the error as an incident, phone whoever is on call, and inform users through a status page. For an operations team with a fixed person who gets woken up at night, that continuous chain is the value. Sentry is strongest at tying the error to the commit that caused it, having AI write a fix pull request, and stopping the next regression at review. It puts its value on the desk of the developer who fixes the bug. Which chain sits closer to your own pain is likely to decide the choice.
:::

## Which team tends to fit which

What follows is our reading of the price lists and conditions above. It does not rank the two; it shows which rows of the official price lists matter for each kind of team.

:::guess
- For indie developers and small SaaS products that want errors, uptime monitoring, and a status page together for free, Better Stack's free tier (100,000 errors a month, 10 monitors, one status page) is likely to fit. Sentry's free tier is 5,000 errors a month for one user, so the moment a second person joins you need Team at $29/month.
- For services with high error volumes, where the unit price drives the total, Better Stack's European rate of $0.00005 starts to matter. But Sentry also has reserved volume and per-tier discounts, so the reliable approach is to run your actual monthly volume through both price lists.
- Teams already using the Sentry SDK can, if Better Stack's docs hold, try a different destination without changing instrumentation code. However, the pages we read do not detail which Sentry SDK features (tracing, replay, profiling, and so on) Better Stack handles, or how far. Before migrating, check each feature you actually use.
- Teams handling native crashes on iOS, Android, or games, and teams that want AI to carry an error all the way to a fix pull request, are likely to find Sentry's design a better fit. Symbolicator for symbolication and Seer are built out as Sentry's own products.
- For organizations that cannot send data outside and must run on their own infrastructure, self-hosted Sentry seems the realistic choice. The FSL explicitly permits internal use.
- Operations teams that want paging and status pages on the same invoice may find Better Stack's price list shape (viewers free, only on-call responders pay) a better fit. Using Sentry while leaving paging to a separate product is also a workable combination.
:::

## Why both accept the same SDK

:::guess
Better Stack accepts the Sentry SDK presumably to remove the biggest barrier to switching: re-instrumenting your code. It is the same idea as accepting OpenTelemetry, the industry standard, for traces and logs; in error tracking, it apparently judged that the Sentry SDK holds the de facto standard position. From Sentry's side, having published the SDKs under MIT, it cannot stop this, and it can be read as having chosen not to. Sentry applies its ban on competing use only to the server code and leaves the SDKs open to anyone. There is a plausible calculation here too: the more other vendors accept the Sentry SDK, the more the first thing developers install is the Sentry SDK, and owning that standard becomes Sentry's advantage.

The upshot is that the buyer is in a strong position. You can compare destinations with the same instrumentation and switch back if it does not suit you. What is worth comparing is not just the price per error but which jobs after the error you want a single vendor to own.
:::

Better Stack and Sentry carry errors arriving through the same SDK to different exits: Better Stack to incidents, on-call phone calls, and status pages; Sentry to the culprit commit and a fix pull request. Before signing up, look at how many errors you produce a month, whether the first person to receive an error is the on-call operator or the developer who fixes the code, and where your data needs to live. Once those are settled, it becomes clear which rows of the two price lists you need to read.
