---
service: "Framer"
title: "A Prototyping Tool That Stalled at $5M Rebuilt Itself to Publish Sites — Framer Serves Its Own Site From Its Own Hosting, and Lets an AI Agent and Template Creators Bring In the Next Users"
description: "Framer grew up as a prototyping tool for designers, then saw revenue sit flat for a year after reaching $5M. In May 2022 it relaunched as a tool for building and publishing websites, and in August 2025 it raised a Series D at a $2 billion valuation. This anatomy covers React server-side rendering and Traffic-aware Pre-Rendering, the move from esbuild to Rolldown, Motion (the animation library spun out of Framer Motion), an AI design agent that writes only patches in a compact tree language, how it picks models to translate sites into 200+ languages, and a marketplace that gives template creators 100% of sales plus an affiliate program paying 50% of the first year — based on the official blog, pricing page, help articles, and observation of live sites."
lead: "At SXSW in 2026, Framer co-founder Jorn van Dijk looked back on a hard stretch: after their prototyping tool reached $5M in revenue, sales were flat for about a year, and morale was low. People were using it, just not enough people to buy it. Instead of throwing the tool away, they turned it around, so designers could publish production websites straight from it. About three years after the relaunch, he says, revenue had reached $30M. This is an anatomy of how Framer was rebuilt and how it makes money."
category: saas
tags: [website-builder, no-code, design-tool, react, ai, aws]
publishedAt: "2026-09-29"
updatedAt: "2026-09-29"
lastVerified: "2026-09-29"
serviceUrl: "https://www.framer.com/"
# Affiliate link placeholder: the owner must join the Framer Creator Program
# (https://www.framer.com/creators, affiliate links run on Dub) before enabling this block.
# Program terms to respect: sign-up links only credit new users, paid advertising with
# affiliate links is not permitted, and Enterprise subscriptions earn no commission.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<framer-affiliate-link>"
#   program: "Framer Creator Program"
vendor: "Framer B.V."
origin: "NL"
heroTheme: "framer"
scores: { product: 4.5, ux: 4.5, tech: 4.5, business: 4.0 }
techStack:
  - layer: "Published site runtime"
    name: "React (server-side rendering + hydration)"
    confidence: confirmed
    evidence: "The official engineering blog (2025-10-22) states that Framer sites are \"React-based JavaScript applications\" that use server-side rendering for optimization. The 2024-03-26 post \"Why Framer uses React to build sites\" explains the choice of React. In our observation (2026-09-29), the HTML of www.framer.com loaded react.*.mjs from framerusercontent.com/sites/"
    evidenceUrl: "https://www.framer.com/blog/dynamic-optimization/"
  - layer: "Page pre-rendering"
    name: "Traffic-aware Pre-Rendering (render on first visit, cache until next publish)"
    confidence: confirmed
    evidence: "According to the official engineering blog (2025-10-22), Framer used to generate every page statically at publish time, and switched to optimizing each page the first time it is visited and caching it until the next publish. The optimization wait, which could take up to a minute on large sites, is now typically a second or less regardless of page count. It rolled out to all sites during October 2025"
    evidenceUrl: "https://www.framer.com/blog/dynamic-optimization/"
  - layer: "Site bundler"
    name: "Rolldown + oxc-minify (migrated from esbuild)"
    confidence: confirmed
    evidence: "The official engineering blog (2025-11-20) states that Framer moved from esbuild to Rolldown, with the rollout starting in September 2025. Median JavaScript size fell 36%, p90 LCP across all sites improved 11%, and LCP on very large sites (over 2MB of JS) improved 41%. In our observation (2026-09-29), published sites' HTML also loaded rolldown-runtime.*.mjs"
    evidenceUrl: "https://www.framer.com/blog/framer-rolldown/"
  - layer: "Animation"
    name: "Motion (formerly Framer Motion)"
    confidence: confirmed
    evidence: "According to Motion's official blog (2024-11-12), Framer Motion was the React animation library Framer grew for six years after acquiring Popmotion, with over 4.5 million weekly npm downloads. It was spun out as the independent open-source project Motion, with Framer as its first sponsor, and Framer's animations continue to be powered by Motion. In our observation (2026-09-29), published sites' HTML loaded motion.*.mjs"
    evidenceUrl: "https://motion.dev/blog/framer-motion-is-now-independent-introducing-motion"
  - layer: "AI design agent"
    name: "Frontier LLMs with a compact tree language and patch commands"
    confidence: confirmed
    evidence: "Co-founder Koen's official engineering post (2026-06-16) states that the agent creates, iterates and debugs directly on the canvas, reads the project tree in a stripped-down language Framer invented, and writes changes as \"patch commands.\" It receives layout rectangles and linter results for accessibility, contrast and typography, and can render its output to pixels in a server-side browser on request. A 2026-07-21 post reports a 40-48% cut in average session cost, including eliminating avoidable cache misses"
    evidenceUrl: "https://www.framer.com/blog/building-framer-agents/"
  - layer: "Site translation"
    name: "LLM translation (GPT 5.2 selected via multi-judge evaluation GEMBA-DMA)"
    confidence: confirmed
    evidence: "According to the official engineering blog (2026-03-31), Framer translates users' sites into more than 200 languages while preserving HTML markup, URLs, glossary terms and custom instructions. It built GEMBA-DMA, an evaluation that uses several LLMs as judges instead of reference translations, and selected GPT 5.2 with a quality score of 95"
    evidenceUrl: "https://www.framer.com/blog/how-we-pick-translation-models-for-framer/"
  - layer: "Hosting"
    name: "Framer's own edge servers on AWS (server: Framer/<version>)"
    confidence: likely
    evidence: "In our observation (2026-09-29), both www.framer.com and a user site (*.framer.website) returned server: Framer/26fa766, with a server-timing header carrying region=ap-northeast-1, cache status, ssg-status and A/B test assignments. Both hostnames resolved to addresses in AS16509 (Amazon). Framer's own site appears to be served from the same hosting as its users' sites"
  - layer: "Image and script delivery"
    name: "Amazon CloudFront (framerusercontent.com)"
    confidence: likely
    evidence: "In our observation (2026-09-29), framerusercontent.com, which serves images and JavaScript, returned server: CloudFront and via: ...cloudfront.net, answering from a Tokyo edge (NRT)"
sources:
  - label: "Foundation Capital: What it takes to build a $2B company — lessons from Framer at SXSW"
    url: "https://foundationcapital.com/ideas/what-it-takes-to-build-a-2b-company-lessons-from-framer-at-sxsw"
    accessedAt: "2026-09-29"
  - label: "The Next Web: Sofa's Koen Bok and Jorn van Dijk leave Facebook (2013-07-26)"
    url: "https://thenextweb.com/news/founder-of-dutch-software-firm-sofa-koen-bok-and-art-director-jorn-van-dijk-leave-facebook-after-2-years"
    accessedAt: "2026-09-29"
  - label: "Framer official blog: Series D (2025-08-28)"
    url: "https://www.framer.com/blog/series-d/"
    accessedAt: "2026-09-29"
  - label: "Framer: Terms of Service (operated by Framer B.V.)"
    url: "https://www.framer.com/legal/terms-of-service/"
    accessedAt: "2026-09-29"
  - label: "Framer: Pricing"
    url: "https://www.framer.com/pricing"
    accessedAt: "2026-09-29"
  - label: "Framer official blog: Traffic-aware Pre-Rendering (2025-10-22)"
    url: "https://www.framer.com/blog/dynamic-optimization/"
    accessedAt: "2026-09-29"
  - label: "Framer official blog: Bundling at Framer with Rolldown (2025-11-20)"
    url: "https://www.framer.com/blog/framer-rolldown/"
    accessedAt: "2026-09-29"
  - label: "Framer official blog: Why Framer uses React to build sites (2024-03-26)"
    url: "https://www.framer.com/blog/why-framer-uses-react-to-build-sites/"
    accessedAt: "2026-09-29"
  - label: "Framer official blog: Building Agents for Framer (2026-06-16)"
    url: "https://www.framer.com/blog/building-framer-agents/"
    accessedAt: "2026-09-29"
  - label: "Framer official blog: Making the Framer Agent cheaper & faster (2026-07-21)"
    url: "https://www.framer.com/blog/making-the-framer-agent-cheaper-faster/"
    accessedAt: "2026-09-29"
  - label: "Framer official blog: How we pick translation models for Framer (2026-03-31)"
    url: "https://www.framer.com/blog/how-we-pick-translation-models-for-framer/"
    accessedAt: "2026-09-29"
  - label: "Motion official blog: Framer Motion is now independent (2024-11-12)"
    url: "https://motion.dev/blog/framer-motion-is-now-independent-introducing-motion"
    accessedAt: "2026-09-29"
  - label: "Framer: Creator Program"
    url: "https://www.framer.com/creators"
    accessedAt: "2026-09-29"
  - label: "Framer Help: How the Creator Program works"
    url: "https://www.framer.com/help/articles/how-the-creator-program-works/"
    accessedAt: "2026-09-29"
  - label: "Framer Help: How affiliate links work"
    url: "https://www.framer.com/help/articles/how-affiliate-links-work/"
    accessedAt: "2026-09-29"
  - label: "Framer: Agency Partner Program"
    url: "https://www.framer.com/agencies/"
    accessedAt: "2026-09-29"
  - label: "Webflow: Webflow Affiliate Program (for comparison)"
    url: "https://webflow.com/solutions/affiliates"
    accessedAt: "2026-09-29"
---

Most design tools finish their job at the handoff. Screen mockups get rebuilt by engineers, and clickable prototypes never become production code. For years Framer was a tool for the stage before that handoff. When its growth stalled, it rebuilt itself into a tool that skips the handoff and publishes directly. Elements laid out on the canvas become a production site running on React. What sets Framer apart is that it takes on that conversion out of the designer's sight, and folds hosting and AI into the same product.

## Service overview

Framer lets you lay out a page on a canvas and publish it as a website on Framer's own hosting. It has a built-in CMS, analytics, A/B testing, localization and SEO settings, and lately it leads with an AI design agent that rebuilds pages on the canvas from chat instructions. The headline of its own site reads "AI design agent."

:::fact
According to The Next Web, co-founders Koen Bok and Jorn van Dijk worked as product designers at Facebook after Facebook bought their software company Sofa, and both left in July 2013. According to Foundation Capital's write-up of its SXSW conversation with Jorn van Dijk (published 2026-04-01), Sofa was acquired in 2011, and Foundation Capital invested in Framer's seed round in 2014. Framer spread as a prototyping tool for designers, but after revenue reached $5M, sales were flat for about a year. After about a year of debate and nine months of building, they launched the new Framer in May 2022. He says revenue went from zero to $1M in the first eight months, to $10M the year after, then to $30M, and that "this year, we're crossing 100."
:::

:::fact
According to Framer's official blog (2025-08-28), Framer raised a $100 million Series D at a $2 billion valuation, led by existing investors Meritech and Atomico with participation from WiL and HV. The same post says hundreds of thousands of sites run on Framer, more than half a million people use it each month, the company has been break-even for the past year, and close to half of the latest Y Combinator batch launched with Framer. It lists customers including Perplexity, Cal.com, Miro, Scale AI, Mixpanel and Zapier.
:::

:::pull
From a tool for handing work off to a tool for putting it out into the world. Framer did not throw away its stalled prototyping tool; it only changed which way it faced.
:::

::scorecard

## UX analysis

Framer's UX concentrates on one thing: removing every step between design and publishing while keeping the feel of a design tool.

- **Publish for free**. According to the pricing page, even the free plan can publish a site on a Framer domain and comes with 500 AI credits. Bandwidth is capped at 1GB, and custom domains start with paid plans. You can get as far as sharing a live URL without paying.
- **Price by the size of the site**. With yearly billing shown, Basic is $10 a month for 30 pages and 50GB of bandwidth, and Pro is $30 a month for 150 pages and 100GB, with a staging environment and branch previews. Pro lets you choose monthly AI credits in tiers from 3,000 to 50,000. Extra designers cost $20 a month each, content-only editors $10, and viewers are free. Localization costs $20 a month per locale, and Convert, the A/B testing add-on, costs $50 per 500,000 events.
- **Remove the wait to publish**. According to the official engineering blog, Framer used to pre-generate every page on each publish, and optimization could take up to a minute on large sites. Since October 2025 it optimizes each page on its first visit and caches it, cutting that wait to a second or less.
- **Let AI do the work, but keep it editable on the canvas**. The AI design agent rewrites canvas elements directly rather than code. According to the official blog, the agent works while receiving layout positions and checks for accessibility, contrast and typography, and every change stays editable on the canvas.
- **Start from a template**. In the official marketplace, community creators offer templates, plugins, components and vector sets, and creators keep 100% of the revenue from paid templates.

:::fact
According to the official engineering blog (2026-06-16), the AI agent takes roughly 40 to 100 seconds to generate a full page. With GPT-5.5, the token cost is about $3 for a full page and about $0.50 for a medium edit, and some users spent up to $300 building a complete site. A 2026-07-21 post reports cutting average session cost by 40-48%, among other things by bringing avoidable cache misses from 10-20% down to zero and reducing unnecessary tool calls.
:::

## Tech stack

::techstack

:::fact
A site published with Framer is a React JavaScript application. According to the official engineering blog (2025-10-22), it returns server-rendered HTML, after which React takes over in the browser. Framer used to generate every page statically at publish time, and has switched to "Traffic-aware Pre-Rendering," which optimizes a page on its first visit and caches it until the next publish. High-traffic pages are pre-rendered ahead of time based on analytics data, and crawlers that do not run JavaScript get the latest optimized version even when a page has not been optimized yet. According to a November 2025 post, the bundler moved from esbuild to Rolldown, median JavaScript size fell 36%, and the p75 number of chunks dropped from 67 to 22. In our observation (2026-09-29), published sites' HTML loaded react, motion and rolldown-runtime modules from framerusercontent.com.
:::

:::fact
In our observation (2026-09-29), www.framer.com and a user site (*.framer.website) both returned the same server: Framer/26fa766. The server-timing header carried the responding region (ap-northeast-1), cache status, ssg-status, a page ID, and on www.framer.com even A/B test assignments. Both hostnames resolved to addresses in AS16509 (Amazon), and framerusercontent.com, which serves images and scripts, answered from an Amazon CloudFront edge in Tokyo.
:::

:::fact
According to Motion's official blog (2024-11-12), Framer Motion was a React library that Framer built on top of the animation library Popmotion, which it acquired, and that its author Matt Perry developed inside Framer for six years; it had over 4.5 million weekly npm downloads. Framer spun it out as an independent open-source project, "Motion," and became its first sponsor. Animations on Framer sites are still powered by Motion.
:::

:::guess
Framer's own site being served from the same servers, on the same version of the delivery stack, as its users' sites appears to reflect thorough dogfooding. Exposing A/B test assignments and cache status in server-timing likewise suggests that Framer's marketing team runs its site day to day with the same analytics and A/B testing features its users get. When your own site is the first to suffer if delivery is slow, that structure is likely what pushes delivery-side work such as the Rolldown migration and Traffic-aware Pre-Rendering.
:::

:::guess
Letting Framer Motion go independent looks like the opposite of what competitor Webflow did when it bought the animation library GSAP along with its business and made it free. Yet both share one aim: keeping the library that powers site animations widely used by developers outside the company. Framer chose to stop owning it and stay involved as a sponsor, presumably letting Motion fund its development independently while Framer's product keeps using the results.
:::

:::guess
Having the AI agent use a compact tree language and patch commands is likely because generative AI cost goes straight into cost of goods. At $3 a page and $300 for a whole site, wasted tokens eat directly into margin. The report of cutting average cost by more than 40% suggests that AI is not a free extra but a product sold as credits.
:::

## Business model

Framer's revenue comes from paid plans per site, editor seats, add-ons such as localization and A/B testing, and Enterprise contracts for large companies. The free plan lets people experience everything up to publishing, and charges begin as custom domains, page counts, bandwidth and editors grow.

:::fact
According to the pricing page (with yearly billing shown), paid plans are Basic at $10 a month (1,000 AI credits a month) and Pro at $30 a month (from 3,000 credits), with Enterprise priced by quote. Enterprise includes credits with volume discounts, custom limits, unlimited editors, SSO, SCIM and an uptime guarantee. Add-ons include localization at $20 a month per locale (up to 20 on Basic and Pro), Convert A/B testing at $50 per 500,000 events, and Advanced Hosting, which puts multiple sites under one domain, at $200.
:::

:::fact
According to Framer's official Creator Program page, the affiliate reward is "50% of their subscription for 12 months when they upgrade" to a paid plan. According to the official help center, affiliate links are tracked and paid through Dub, with payouts processed via Stripe. Sign-up links only credit new users, template purchases take priority over sign-up referrals, and paid advertising using affiliate links is not permitted. Enterprise subscriptions are not eligible. To join, you publish a product on the marketplace, become a verified Framer Expert, or pass a review of your work, audience and promotion plans. The same page says Framer paid creators $6.5M in 2025. Separately, the Agency Partner Program for agencies offers free, unlimited Framer access for the whole agency and up to 50% commission on referrals.
:::

:::fact
For comparison, Webflow's affiliate program pays 50% of a new customer's first subscription for up to 12 months, with a 90-day cookie window. Higher tiers add 10% or 15% for up to 12 more months if the customer renews after the first year. Freelancers and agencies referring their own clients earn no commission, and are directed to a separate Certified Partner Program instead (Webflow official).
:::

:::guess
Framer's affiliate rate and duration are nearly the same as Webflow's base terms, but the entry point is designed differently. On Framer, when someone starts from the "remix" link a template creator attaches to their work and later upgrades, the creator earns the commission. Distributing a template is itself a referral, so 100% of marketplace sales and referral commissions stack up for the same creator. The more creators there are, the more entry points into building on Framer — that appears to be the mechanism. The ban on paid advertising is presumably there so that referrers do not bid against each other, or against Framer itself, on search ads for the name "Framer."
:::

:::guess
At the same time, putting the AI agent front and center appears to be changing Framer's cost structure. Hosting cost can be read from bandwidth and page counts, but AI cost swings widely with how many instructions a user piles on. Handing out credits even on the free plan, tiering Pro by credit volume, and offering volume discounts on Enterprise presumably reflect a shift toward counting AI usage separately as credits rather than folding it into a flat fee.
:::

What Framer sells is less a design tool than a short path: what a designer makes goes out as a fast production site as it is. React, Rolldown and Motion carry the back end of that path, Framer's own site travels the same path, and template creators and an AI agent build the entry points for the next users. A prototyping tool that had stopped growing became a tool for putting work into the world by changing which way it faced. In an era when AI handles "the first 80%," being able to fix the remaining 20% on the canvas is where Framer's next edge lies.
