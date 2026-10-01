---
service: "Make"
title: "$9 for 10,000 Credits, Overage at +25%, and 35% to the Referrer for 12 Months — How Make (formerly Integromat) Bills You per Module Run"
description: "Make, the automation platform from Prague, was bought by Celonis for more than $100 million in 2020 and renamed from Integromat in 2022. It does not bill Zapier-style \"tasks\": it bills credits, one per module run, from $9 for 10,000 on the Core plan. Overage costs 25% more, and AI modules burn credits by the token. From the official pricing page, help center, developer docs, press releases, affiliate terms, public GitHub repositories and our own observations, this piece dissects the GPT-5 nano and GPT-5 mini behind the tiered models of Make's own AI provider, the affiliate program that pays 35% for 12 months, and the AWS deployment sitting behind Cloudflare."
lead: "Make's pricing page says \"Core plan, $9 a month for 10,000 credits.\" A credit is, as a rule, one run of one module inside a scenario. If a form gets 10 responses, the three modules downstream each run 10 times, and 31 credits are gone. Route anything through AI and tokens eat credits too. Run out, and you top up at 25% over the plan rate. That is how 0.09 cents per credit turns into an invoice that depends not on what you connected but on how many times it moved. This piece dissects the design of a company born in the Czech Republic in 2012, sold to Celonis for more than $100 million in 2020, and renamed from Integromat to Make in 2022."
category: saas
tags: [no-code, automation, ai, mcp, aws, small-business]
publishedAt: "2026-09-30"
updatedAt: "2026-10-01"
lastVerified: "2026-10-01"
serviceUrl: "https://www.make.com/en"
# Affiliate link placeholder: Make runs its own public affiliate program
# (https://www.make.com/en/affiliate; 35% of referred users' subscription payments for
# 12 months, 30-day cookie, US$100 minimum payout via Wise after 3 unique paying users).
# The owner must sign up with a Make account, get the tracking link from the affiliate
# dashboard, and paste it here before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<make-affiliate-tracking-link>"
#   program: "Make Affiliate Program"
vendor: "Celonis, Inc."
origin: "CZ"
heroTheme: "make"
scores: { product: 4.0, ux: 3.5, tech: 3.5, business: 3.5 }
techStack:
  - layer: "Hosting"
    name: "Amazon EC2 (Amazon VPC, 2 availability zones) + AWS KMS"
    confidence: confirmed
    evidence: "The official Security page states that the infrastructure resides within Amazon AWS EC2 private instances (Amazon VPC) with Amazon Enterprise support, deployed across two availability zones for redundancy. Data at rest uses AES-256 full-disk encryption with AWS KMS; transport uses TLS 1.2 and 1.3. SOC 2 Type II and SOC 3 audits are complete and the security program is ISO 27001 certified"
    evidenceUrl: "https://www.make.com/en/security"
  - layer: "Public API"
    name: "REST API v2 per zone (Token header, 60–1,000 req/min by plan)"
    confidence: confirmed
    evidence: "The developer docs state that requests go to {zone_url}/api/v2/... with an Authorization: Token {token} header, where zone_url is for example https://eu1.make.com. Rate limits are Core 60, Pro 120, Teams 240 and Enterprise 1,000 requests per minute; exceeding them returns 429 with \"Requests limit for organization exceeded, please try again later.\" Most endpoints are reserved for paid plans and may not be accessible on the free tier"
    evidenceUrl: "https://developers.make.com/api-documentation/getting-started/rate-limiting"
  - layer: "AI agent integration (MCP)"
    name: "Hosted Make MCP server (mcp.make.com, OAuth) + legacy open-source make-mcp-server (TypeScript, MIT)"
    confidence: confirmed
    evidence: "The developer docs state that the Make MCP server lets AI systems such as LLMs run scenarios, view and modify scenarios with their connections and webhooks, and manage teams and organizations, connecting via https://mcp.make.com (OAuth), https://<MAKE_ZONE>/mcp/u/<MCP_TOKEN>, or https://<MAKE_ZONE>/mcp with the token in the Authorization header. GitHub's integromat/make-mcp-server is TypeScript under the MIT license, takes MAKE_API_KEY, MAKE_ZONE and MAKE_TEAM as environment variables, and exposes on-demand scenarios as tools. Its README recommends the newer cloud-based version for most use cases"
    evidenceUrl: "https://developers.make.com/mcp-server"
  - layer: "Models behind Make's own AI provider"
    name: "OpenAI GPT-5 nano (Small / Medium) + GPT-5 mini (Large)"
    confidence: confirmed
    evidence: "The help center's Credits page (as of 2026-09-30) lists Make's AI Provider tiers as Small = \"GPT-5 nano with minimal reasoning\", Medium = \"GPT-5 nano with low reasoning\" and Large = \"GPT-5 mini\", with 18,080 input tokens per credit for Small/Medium and 3,616 for Large, and 2,260 / 452 output tokens per credit. Paid plans can instead bring their own OpenAI or Anthropic connection and pay the provider directly for tokens"
    evidenceUrl: "https://help.make.com/credits"
  - layer: "Edge / bot protection"
    name: "Cloudflare (managed challenge on www, proxy on app zones)"
    confidence: likely
    evidence: "In our observation on 2026-09-30, www.make.com answered both curl and headless Chrome with 403 and cf-mitigated: challenge, and the page title was the Japanese-localized \"please wait a moment\" challenge text. eu1, eu2 and us1.make.com and hook.eu1.make.com responded with server: cloudflare, and the whois network name of the resolved IP addresses was CLOUDFLARENET (CLOUDFLARE-EU, registered with RIPE, for hook.eu1.make.com)"
  - layer: "Webhook ingress"
    name: "In-house \"Make Gateway\""
    confidence: likely
    evidence: "In our observation on 2026-09-30, the webhook host hook.eu1.make.com responded with x-powered-by: Make Gateway/production, and the cf-ray colo was VIE (Vienna). The integromat GitHub organization also has a gateway repository described as \"Integromat Gateway Client for Node.js\", but public information does not reveal the implementation"
  - layer: "Backend language"
    name: "Node.js / TypeScript"
    confidence: likely
    evidence: "The integromat GitHub organization (38 public repositories) holds imt-proto, a TypeScript repository described as \"Integromat Proto-Classes\", plus forks of isolated-vm (isolated JS environments for Node.js) and node-imap, and TypeScript MCP server, SDK, CLI and VS Code extension. No official statement of the runtime language was found"
  - layer: "In-app analytics and onboarding"
    name: "RudderStack + Userflow + Candu + Chameleon + VWO + OneTrust"
    confidence: likely
    evidence: "In our observation on 2026-09-30, the Content-Security-Policy header returned by eu1.make.com listed integromat-dataplane.rudderstack.com, js.userflow.com, api.candu.ai, *.chameleon.io, *.visualwebsiteoptimizer.com and cdn.cookielaw.org among its connect-src, and img-src included make-hq-production-user-inputs.s3.eu-west-1.amazonaws.com and storage.googleapis.com"
  - layer: "Documentation platforms"
    name: "GitBook (developers.make.com) + Archbee (help.make.com)"
    confidence: likely
    evidence: "In our observation on 2026-09-30, developers.make.com pages returned Markdown containing GitBook-specific {% stepper %} syntax when .md was appended, and the 404 page text said GitBook tailors answers. The .md versions of help.make.com pages carried frontmatter image URLs on archbee-image-uploads.s3.amazonaws.com"
sources:
  - label: "Make official: Pricing"
    url: "https://www.make.com/en/pricing"
    accessedAt: "2026-10-01"
  - label: "Make official: Affiliate program"
    url: "https://www.make.com/en/affiliate"
    accessedAt: "2026-10-01"
  - label: "Make official: Partner programs"
    url: "https://www.make.com/en/partners"
    accessedAt: "2026-10-01"
  - label: "Make official: Press (history and press releases)"
    url: "https://www.make.com/en/press"
    accessedAt: "2026-10-01"
  - label: "Make official: Make launches Make AI Agents (2025-04-14)"
    url: "https://www.make.com/en/make-ai-agents-press-release"
    accessedAt: "2026-10-01"
  - label: "Make official: Make launches Make Grid (2025-06-24)"
    url: "https://www.make.com/en/make-grid-announcement"
    accessedAt: "2026-10-01"
  - label: "Make official: End of Integromat (2023-02-28)"
    url: "https://www.make.com/en/end-of-integromat"
    accessedAt: "2026-10-01"
  - label: "Make official: AWS partnership (2022-06-09)"
    url: "https://www.make.com/en/aws-make-partnership"
    accessedAt: "2026-10-01"
  - label: "TechCrunch: Celonis acquires Czech startup Integromat (2020-10-14)"
    url: "https://techcrunch.com/2020/10/14/celonis-acquires-czech-startup-integromat-to-accelerate-move-to-process-automation/"
    accessedAt: "2026-10-01"
  - label: "Make official: Security"
    url: "https://www.make.com/en/security"
    accessedAt: "2026-10-01"
  - label: "Make official: Careers"
    url: "https://www.make.com/en/careers"
    accessedAt: "2026-10-01"
  - label: "Make official: AI Agents"
    url: "https://www.make.com/en/ai-agents"
    accessedAt: "2026-10-01"
  - label: "Make official: Make Grid"
    url: "https://www.make.com/en/grid"
    accessedAt: "2026-10-01"
  - label: "Make blog: Introducing Make Grid (2024-11-14)"
    url: "https://www.make.com/en/blog/introducing-make-grid"
    accessedAt: "2026-10-01"
  - label: "Make blog: Designing Maia by Make (2026-08-21)"
    url: "https://www.make.com/en/blog/designing-maia"
    accessedAt: "2026-10-01"
  - label: "Make blog: How to build Make automations and AI agents in ChatGPT (2026-09-16)"
    url: "https://www.make.com/en/blog/make-plugin-chatgpt"
    accessedAt: "2026-10-01"
  - label: "Make Help Center: Credits"
    url: "https://help.make.com/credits"
    accessedAt: "2026-10-01"
  - label: "Make Help Center: Operations"
    url: "https://help.make.com/operations"
    accessedAt: "2026-10-01"
  - label: "Make Help Center: Extra credits"
    url: "https://help.make.com/extra-credits"
    accessedAt: "2026-10-01"
  - label: "Make Help Center: Adjustments to plans and pricing (2025-11-06)"
    url: "https://help.make.com/adjustments-to-plans-and-pricing"
    accessedAt: "2026-10-01"
  - label: "Make Help Center: Updated Make's AI Provider token pricing model (2026-08-25)"
    url: "https://help.make.com/more-value-for-your-credits-updated-makes-ai-provider-token-pricing-model"
    accessedAt: "2026-10-01"
  - label: "Make Help Center: Credit usage for AI agents"
    url: "https://help.make.com/credit-usage-for-ai-agents"
    accessedAt: "2026-10-01"
  - label: "Make Developers: Rate limiting"
    url: "https://developers.make.com/api-documentation/getting-started/rate-limiting"
    accessedAt: "2026-10-01"
  - label: "Make Developers: Making your first API request"
    url: "https://developers.make.com/api-documentation/getting-started/making-your-first-api-request"
    accessedAt: "2026-10-01"
  - label: "Make Developers: Make MCP server"
    url: "https://developers.make.com/mcp-server"
    accessedAt: "2026-10-01"
  - label: "GitHub: integromat/make-mcp-server"
    url: "https://github.com/integromat/make-mcp-server"
    accessedAt: "2026-10-01"
  - label: "GitHub: integromat (organization)"
    url: "https://github.com/integromat"
    accessedAt: "2026-10-01"
---

Make is the automation platform from Prague in the same app-connecting automation category as [Zapier](https://zapier.com/). You build "scenarios" — post to Slack when a row lands in Google Sheets, generate and email a document for every form response — by laying modules out on a canvas. It was born as Integromat in 2012, bought by the German process-mining company Celonis in 2020, and renamed Make in 2022. Its unit of billing is "the number of times a module ran," and the choice of that unit holds most of the company's design.

## Service overview

Make connects more than 3,000 apps visually to build automations and AI agents. A scenario starts with a trigger (watch for new rows, receive a webhook) and continues through filters, branches, transformations and writes to other apps, each one a module. In 2025 it added AI Agents and an MCP server that lets outside AI systems drive it (the older GitHub version was published in March 2025); in 2026 its official blog introduced Maia, which builds scenarios from conversation, and a plugin that runs inside ChatGPT.

:::fact
According to TechCrunch (2020-10-14), Celonis acquired the Czech company Integromat, and CEO Alexander Rinke described the price as "a three-digit amount of over $100 million." Integromat was founded in 2012, had raised no outside funding, was roughly a $10 million business with 60 staff, and had more than 11,000 customers. According to Make's official Press page, Integromat was renamed Make on February 22, 2022, and listed on the AWS Marketplace on June 9, 2022; that day's release cited 1,000+ apps, 6,000+ endpoints and 500,000+ organizations worldwide. The February 28, 2023 announcement said support for the old Integromat would end on June 30, 2023 and the platform would shut down on September 30, 2023, deactivating all scenarios. The CEO said scenarios "have been migrated in the hundreds of thousands," and users who moved before the deadline received a Legacy plan that kept their existing price and operation limits.
:::

:::fact
According to the official pricing page (as of 2026-09-30, USD, monthly billing shown), Free includes 1,000 credits a month, 2 active scenarios, a 15-minute minimum interval between runs, 512MB of data transfer, 5MB files and 5 minutes of execution time. Core is $9 a month for 10,000 credits with unlimited active scenarios, intervals down to one minute, 5GB of data transfer, 100MB files and 40 minutes of execution. Pro is $16 a month for the same 10,000 credits (250MB files), Teams $29 (500MB files) and Enterprise custom (1,000MB files). Annual billing "saves 15% or more," and credits expire at the end of the term. The same page says each action a scenario performs consumes a certain number of credits — most actions consume 1 credit, while some advanced features leveraging Make's AI Provider may use more.
:::

:::pull
$9 for 10,000 credits is 0.09 cents per credit. A top-up costs 25% more, 0.1125 cents. Route the same run through AI, and the credit count moves with the token count.
:::

::scorecard

## UX analysis

Make's experience is built around showing you everything that happened. The editor is a canvas, and a scenario is drawn as a diagram, branches and loops included. In exchange, it made the price just as visible.

- **The screen shows how many credits each run burns.** According to the help center's Operations page, when you run a scenario the white bubble above each module shows its operation count, and a toggle switches it to credits. An operation is "a single module run to process data or check for new data": sending 5 emails with Gmail is 5 operations, while a trigger is 1 operation per check regardless of how many bundles it returns. If a trigger returns 10 bundles, each downstream module runs 10 times, so the example form-response scenario costs 31 operations per run (1 + 10 × 3).
- **Stopping does not stop mid-module.** The same page says that if you click Stop while a scenario is running, the running module must finish processing all of its bundles first. When you push a large batch through by mistake, that one module's cost is locked in.
- **Overage is bought automatically.** According to the Extra credits page, paid plans can buy credits manually in units of 1,000, or enable auto-purchasing so Make buys more the moment the limit is exceeded. Since November 6, 2025, both manual and automatic purchases carry the same 25% additional cost (previously automatic purchases cost 30% more and manual ones nothing extra). On Core with annual billing, regular credits reset monthly, and extra credits expire at each monthly reset too.
- **AI brings in a second unit: tokens.** According to the Credits page, non-AI modules are fixed at 1 credit per operation, but AI Agents and AI Toolkit on Make's AI Provider consume credits by tokens, and some features vary by file size, page count or processing time. Since August 25, 2026, input and output tokens have separate rates; an extraction step using 2,000 input and 100 output tokens on the Medium tier fell from about 0.6 credits to about 0.16. Steps that generate long output from a short prompt may cost more.
- **More doors open by conversation.** According to the August 21, 2026 blog post, Maia by Make stands beside you on the canvas, turns words into a workflow in front of you, and narrates what it is doing in speech bubbles. According to the September 16, 2026 post, the Make plugin for ChatGPT is available on all plans including Free, and works in the browser, the ChatGPT Work desktop app and Codex. The same post, however, carries a note that OpenAI has temporarily disabled the Make plugin for ChatGPT while it updates automation tool support (checked 2026-10-01), and points users to building Make automations from ChatGPT or Codex via MCP in the meantime.

## Tech stack

::techstack

:::fact
According to the official Security page, Make's infrastructure resides within Amazon AWS EC2 private instances (Amazon VPC) with Amazon Enterprise support, deployed across two availability zones for redundancy. The private network is reachable only over VPN, with no direct public internet access. Data at rest is protected by AES-256 full-disk encryption and AWS KMS, transport by TLS 1.2 and 1.3. The company has completed SOC 2 Type II and SOC 3 audits, operates an ISO 27001-certified information security program, runs third-party penetration tests, follows OWASP coding standards and uses SAST. Logs are retained for 30 days by default, longer for Enterprise, and the Enterprise plan carries a 99.5% cloud service uptime commitment.
:::

:::fact
According to the developer docs, the Make API lives under {zone_url}/api/v2/, where zone_url is the zone the organization is hosted in (for example https://eu1.make.com), and authentication is an Authorization header carrying the word "Token" and the token. Rate limits are per organization plan: Core 60, Pro 120, Teams 240 and Enterprise 1,000 requests per minute, with a 429 and "Requests limit for organization exceeded, please try again later." beyond that. Most endpoints are reserved for paid plans. The MCP server connects at https://mcp.make.com with OAuth or at https://<MAKE_ZONE>/mcp/u/<MCP_TOKEN> with a token, and can run scenarios, view and modify scenarios, connections and webhooks, and manage teams and organizations. GitHub's integromat/make-mcp-server is the older TypeScript, MIT-licensed version: it takes MAKE_API_KEY, MAKE_ZONE (for example eu2.make.com) and MAKE_TEAM as environment variables and exposes on-demand scenarios as tools with parsed parameter descriptions for AI assistants. Its README recommends the cloud-based version for most use cases.
:::

:::fact
According to the help center's Credits page (as of 2026-09-30), Make's AI Provider is available on all plans; users skip creating OpenAI or Anthropic accounts and instead pay Make credits based on tokens and operations. The tiered models are Small = "GPT-5 nano with minimal reasoning", Medium = "GPT-5 nano with low reasoning" and Large = "GPT-5 mini", at 18,080 input tokens per credit for Small and Medium, 3,616 for Large, and 2,260 and 452 output tokens per credit. Besides the tiers, individual OpenAI and Anthropic models can be chosen; in the same table GPT-5.5 and Claude Opus 5 are at 180 input and 30–36 output tokens per credit, so a credit buys roughly a hundredth of the tokens it buys on Small. Paid plans can use their own OpenAI or Anthropic Claude connection, paying Make for operations and the provider for tokens; before the November 6, 2025 change, custom connections were limited to Pro and above. According to the Credit usage for AI agents page, running an agent costs 1 credit per operation plus token-based credits, and ingesting a knowledge file (PDF/DOCX) costs 1 credit per operation plus 10 tokens per page plus tokens for description generation and embeddings, where embedding converts chunks of the file into vectors stored in a RAG vector database.
:::

:::guess
The marketing site sits behind Cloudflare and answers both curl and headless Chrome with a managed challenge. The app zones (eu1, eu2, us1) and the webhook ingress also go through Cloudflare, and the ingress announces itself as an in-house layer called "Make Gateway." Execution runs on AWS (the bucket name's eu-west-1 is Ireland), and because the organization's public repositories lean toward TypeScript and Node.js forks (isolated-vm, node-imap), the backend appears to be written in Node.js with a mechanism for running untrusted code, such as users' custom functions, in isolation. That all three tiers of Make's AI Provider are built on inexpensive OpenAI models (GPT-5 nano and mini) suggests the default tiers are positioned as a cheap, no-account-needed on-ramp. Picking a higher-end model on the same provider sharply cuts the tokens a credit buys, so users who want more capability choose between spending more credits and bringing their own API key to pay the provider for tokens directly.
:::

## Business model

Revenue comes from subscriptions that sell bundles of credits. The higher the plan, the lower the price per credit; run short and you top up at 25% over. Acquisition is delegated to an affiliate program that pays 35% for 12 months and to a partner program for consultants.

:::fact
According to the help center's "Adjustments to plans and pricing" (2025-11-06), the Core plan now tops out at 300,000 credits a month, and the tiers above that moved to Pro (organizations on monthly Core subscriptions above 300,000 were upgraded to Pro at the same price and credit count — the example given is a customer paying $338.13 a month for 500,000 credits, who continues to pay $338.13 on Pro). Pro goes up to 8 million credits a month. The Extra credits page's example: on a $9 plan with 10,000 credits, one credit costs $0.0009, so 1,000 extra credits cost $1.125 (× 1.25) and 10,000 cost $11.25. Extra credits last until the end of the current billing cycle on monthly plans and the end of the billing year on annual plans, add data transfer allowance, and change no other limits.
:::

:::fact
According to the official affiliate page, the program pays "35% commission on all your referrals for 12 months," based on the subscription payments of users you brought to Make (extra operations those users buy earn no commission), with the 12 months starting when the user registers through the affiliate link. Visitors have 30 days to sign up after clicking. Anyone with a Make account can become an affiliate, and the page says integration consultants, agencies, thought leaders and freelancers are most likely to succeed. Payouts go through Wise, with a $100 minimum, after you have referred 3 unique paying users, and take 2–3 weeks from the request (the page notes current delays). In paid advertising, the trademark "Make" may not appear in ad titles or body text, and using it in online campaigns requires prior written consent from Celonis. The partners page lists, alongside affiliates, Solution Partners (consulting and implementation), Technology Partners (ISVs building connectors), an Academic Alliance for universities, and Startup Partners for VCs and accelerators.
:::

:::fact
According to the Careers page (as of 2026-09-30), Make employs 350+ "Makers" of 50+ nationalities, its job postings are in Prague and Madrid, and the footer reads "© 2026 Celonis, Inc." The April 14, 2025 press release (datelined New York) said 200,000+ businesses use Make, with 2,000+ integrated apps and 30,000+ actions, and quoted CEO Fabian Veit and VP of Product Anton Danilov. The June 24, 2025 release for Make Grid's open beta said 250,000+ organizations, and quoted co-founder and CTO Patrik Simek on turning an automation network "from a black box into a shared, navigable system." Make Grid was first announced as a closed beta on November 14, 2024. The official Grid page says it is free during the open beta, and that after general availability some interaction capabilities and information may be limited to certain plans or carry an additional fee.
:::

:::guess
The June 2022 release says "500,000+ organizations," April 2025 says "200,000+ businesses," and June 2025 says "250,000+ organizations." The counts are not on the same basis. They appear to use different definitions — registered versus active organizations, or counts with and without the old Integromat. One reading is that organizations that never migrated dropped out of the count when Integromat shut down in September 2023. There are no financial statements to check against, since Celonis is private, and Make's standalone revenue is not published.
:::

:::guess
Credit billing resembles Zapier's task billing, but the number of bundles a trigger returns multiplies through every downstream module, so how you design a scenario feeds straight into the bill. Build it well and it is cheap; build it carelessly and it is expensive. That structure rewards people who can optimize and creates demand for consultants among those who cannot. The Solution Partner program, and an affiliate page that names freelancers and consultants explicitly, appear to be the mechanism for letting outsiders capture that demand. The 35%-for-12-months rate differs from pay-once models (up to 40% at [Hostinger](/en/articles/hostinger)): the longer a referred user stays, the more the referrer earns. That suggests confidence in retention, a wish to enlist referrers in retention, or both. AI Agents and Maia move module design from people to machines. Less effort to build means more scenarios running, and more scenarios running means more credits consumed. The more AI becomes the builder of automations, the faster credits sell.
:::

Behind "$9 for 10,000 credits" sit the unit of one module run, the trigger count that multiplies through, the 25% top-up, the AI price that moves with tokens, and the 35%-for-12-months referral fee. All of it is on the pricing page and in the help center. Make lets you draw free diagrams, branches and loops included, and in return it put a price on every movement inside them. The freedom and the bill are on the same screen.
