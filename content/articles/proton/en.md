---
service: "Proton"
title: "An Encrypted Suite With No Ads and No VCs — How Proton Runs 100 Million Accounts on Subscriptions Alone, on Servers and a Network It Owns, While Maintaining the OpenPGP Libraries Itself"
description: "Proton is the maker of the encrypted email service Proton Mail and of Proton VPN, whose free plan has no data cap. Conceived at CERN and launched through crowdfunding in 2014, the Swiss company reached 100 million accounts without venture capital and made a nonprofit foundation its primary shareholder in 2024. A dissection — from its official blog, support articles, and source code on GitHub — of the OpenPGP.js and GopenPGP libraries it maintains, a shared Rust core shipped as WebAssembly, its own autonomous system and data centers, the Stealth protocol for evading censorship, the infrastructure move prompted by a Swiss surveillance law revision, and an affiliate program that pays up to 100%."
lead: "Proton's official blog describes the company this way: it depends on no venture capital, no billionaires, no government, and no donations, and earns almost all of its revenue from selling services directly to users. It hands out free plans widely yet shows no ads, and runs its own servers instead of AWS or Google Cloud. Starting from encrypted email, this 'privacy suite' has spread to VPN, calendar, storage, password management, and an AI assistant. This is a dissection of how it is built and how it makes money."
category: consumer-app
tags: [privacy, email, vpn, end-to-end-encryption, open-source, security]
publishedAt: "2026-09-28"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://proton.me/"
# Affiliate link placeholder: the owner must join the Proton Partners Program
# (https://proton.me/partners/affiliates) before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<proton-partner-link>"
#   program: "Proton Partners Program"
vendor: "Proton AG"
origin: "CH"
heroTheme: "proton"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 4.0 }
techStack:
  - layer: "Web clients"
    name: "React 18 + TypeScript + Redux Toolkit + webpack (Yarn workspaces monorepo)"
    confidence: confirmed
    evidence: "The official repository ProtonMail/WebClients (GPL-3.0) is a monorepo that puts Mail, Calendar, Drive, Pass, VPN settings, Wallet, Lumo, Meet and other apps, plus shared packages such as @proton/components and @proton/shared, into a single set of Yarn workspaces. In our check (2026-09-28), the Mail app's package.json depended on react ^18.3.1, @reduxjs/toolkit, and webpack 5, and GitHub's language statistics were dominated by TypeScript"
    evidenceUrl: "https://github.com/ProtonMail/WebClients"
  - layer: "Crypto library (web)"
    name: "OpenPGP.js (Proton fork) via @protontech/crypto"
    confidence: confirmed
    evidence: "An official blog post (2016-08-02) announced that Proton had taken over as the primary maintainer of OpenPGP.js. In our check (2026-09-28), the npm package @protontech/crypto (\"Cryptography library for web projects across Proton\") depends on openpgp as npm:@protontech/openpgp, and apps in WebClients such as Drive use it"
    evidenceUrl: "https://proton.me/blog/openpgpjs-email-encryption"
  - layer: "Crypto library (Go)"
    name: "GopenPGP"
    confidence: confirmed
    evidence: "An official blog post (2019-05-15) announced GopenPGP, a high-level OpenPGP library, along with a fork of Go's crypto library, and explained that they were developed for Proton's own Android and iOS apps, Bridge, and the Import-Export app"
    evidenceUrl: "https://proton.me/blog/openpgp-golang"
  - layer: "Pass shared core"
    name: "Rust (proton-pass-common) + UniFFI / wasm-pack"
    confidence: confirmed
    evidence: "The README of the official repository protonpass/proton-pass-common states that the common library used by all clients (Android, iOS, and web) is written in pure Rust and exported to mobile via UniFFI and to the web via wasm-pack. Tests live only in the Rust core crate"
    evidenceUrl: "https://github.com/protonpass/proton-pass-common"
  - layer: "Email client bridge"
    name: "Proton Mail Bridge (Go + Qt/QML)"
    confidence: confirmed
    evidence: "The README of the official repository ProtonMail/proton-bridge states that, when launched, Bridge starts local IMAP/SMTP servers so existing email clients can use Proton Mail. GitHub's language statistics show Go as the largest language, with C++ and QML for the GUI"
    evidenceUrl: "https://github.com/ProtonMail/proton-bridge"
  - layer: "Desktop app"
    name: "Electron (Proton Mail desktop, electron-forge)"
    confidence: confirmed
    evidence: "applications/inbox-desktop/package.json in WebClients describes the official desktop app for Proton Mail and Proton Calendar and depends on electron and electron-forge (our check, 2026-09-28)"
    evidenceUrl: "https://github.com/ProtonMail/WebClients/tree/main/applications/inbox-desktop"
  - layer: "VPN protocols"
    name: "WireGuard / OpenVPN / Stealth (obfuscated TLS over TCP)"
    confidence: confirmed
    evidence: "An official blog post (2022-10-06) explains that Stealth uses obfuscated TLS tunneling over TCP to make VPN traffic look like ordinary HTTPS, and performs better than older obfuscation methods built on top of OpenVPN. The ProtonVPN organization on GitHub publishes wireguard-go, wireguard-apple, and wireguard-android repositories"
    evidenceUrl: "https://protonvpn.com/blog/stealth-vpn-protocol"
  - layer: "Infrastructure"
    name: "Self-owned servers and network (AS62371, data centers in CH / DE / NO)"
    confidence: confirmed
    evidence: "The official blog post \"Sustaining Proton's mission over time\" (2024-02-15) states that Proton owns all of its servers and network equipment, operates as its own ISP, uses data centers in Switzerland, Germany, and Norway, and does not rely on AWS, Google Cloud, or Azure. In our observation (2026-09-28), proton.me, mail.proton.me, and account.proton.me all resolved to addresses in 185.70.42.x, whose route is announced from AS62371 (Proton AG, Switzerland)"
    evidenceUrl: "https://proton.me/blog/sustaining-mission-over-time"
  - layer: "Feature flags"
    name: "Unleash"
    confidence: confirmed
    evidence: "packages/unleash in WebClients (described as \"Unleash feature flags\") depends on @unleash/proxy-client-react and unleash-proxy-client, and apps such as Drive use the package (our check, 2026-09-28)"
    evidenceUrl: "https://github.com/ProtonMail/WebClients/tree/main/packages/unleash"
  - layer: "Payment form"
    name: "Chargebee (isolated payment frame)"
    confidence: likely
    evidence: "WebClients contains a package named @proton/chargebee that is built on its own with Vite and ships an index.html (our check, 2026-09-28). It appears to load the input fields of the payment service Chargebee as a page separated from the main app, but no official page names the payment platform"
  - layer: "Marketing site"
    name: "Astro (islands)"
    confidence: likely
    evidence: "In our observation (2026-09-28), the HTML of proton.me contained many <astro-island> elements. The response returned no server header and was served from an address in the same AS62371 as the product itself"
sources:
  - label: "Wikipedia: Proton AG (founding, product launch years, acquisitions, data centers, headcount)"
    url: "https://en.wikipedia.org/wiki/Proton_AG"
    accessedAt: "2026-09-28"
  - label: "Proton official blog: The move to the Proton Foundation (2024-06-17)"
    url: "https://proton.me/blog/proton-non-profit-foundation"
    accessedAt: "2026-09-28"
  - label: "Proton official blog: Sustaining Proton's mission over time (2024-02-15)"
    url: "https://proton.me/blog/sustaining-mission-over-time"
    accessedAt: "2026-09-28"
  - label: "heise online: Proton relocates parts of its infrastructure from Switzerland over surveillance plans (2025-08-16)"
    url: "https://www.heise.de/en/news/Surveillance-Proton-relocates-parts-of-its-infrastructure-from-Switzerland-10538664.html"
    accessedAt: "2026-09-28"
  - label: "Proton support: Proton plans and pricing"
    url: "https://proton.me/support/proton-plans"
    accessedAt: "2026-09-28"
  - label: "Proton VPN: Pricing"
    url: "https://protonvpn.com/pricing"
    accessedAt: "2026-09-28"
  - label: "Proton VPN: Free VPN"
    url: "https://protonvpn.com/free-vpn"
    accessedAt: "2026-09-28"
  - label: "Proton VPN support: Secure Core"
    url: "https://protonvpn.com/support/secure-core-vpn"
    accessedAt: "2026-09-28"
  - label: "Proton VPN official blog: The Stealth protocol (2022-10-06)"
    url: "https://protonvpn.com/blog/stealth-vpn-protocol"
    accessedAt: "2026-09-28"
  - label: "Proton VPN official blog: Independent audits of the no-logs policy"
    url: "https://protonvpn.com/blog/no-logs-audit"
    accessedAt: "2026-09-28"
  - label: "Proton official blog: Becoming the maintainer of OpenPGP.js (2016-08-02)"
    url: "https://proton.me/blog/openpgpjs-email-encryption"
    accessedAt: "2026-09-28"
  - label: "Proton official blog: Releasing GopenPGP (2019-05-15)"
    url: "https://proton.me/blog/openpgp-golang"
    accessedAt: "2026-09-28"
  - label: "GitHub: ProtonMail/WebClients (web client monorepo)"
    url: "https://github.com/ProtonMail/WebClients"
    accessedAt: "2026-09-28"
  - label: "npm: @protontech/crypto"
    url: "https://www.npmjs.com/package/@protontech/crypto"
    accessedAt: "2026-09-28"
  - label: "GitHub: protonpass/proton-pass-common (Proton Pass Rust core)"
    url: "https://github.com/protonpass/proton-pass-common"
    accessedAt: "2026-09-28"
  - label: "GitHub: ProtonMail/proton-bridge (Proton Mail Bridge)"
    url: "https://github.com/ProtonMail/proton-bridge"
    accessedAt: "2026-09-28"
  - label: "Proton: Proton Partners Program (affiliates)"
    url: "https://proton.me/partners/affiliates"
    accessedAt: "2026-09-28"
  - label: "Proton support: Referral program"
    url: "https://proton.me/support/referral-program"
    accessedAt: "2026-09-28"
  - label: "1Password: Affiliate program (for comparison)"
    url: "https://1password.com/affiliate"
    accessedAt: "2026-09-28"
---

Encrypted email and VPNs are businesses built on a promise not to look inside. Yet most free email and free VPNs are paid for by ads, by user data, or by investors' money. Proton says openly that it relies on none of these: it hands out free plans and runs the business on paying users alone. What sets Proton apart is how it embeds the means of keeping that promise into its cryptography, into how it owns its servers, and even into who owns the company.

## Service overview

Proton is a "privacy suite" that offers, under one account, the end-to-end encrypted email service Proton Mail along with a VPN, calendar, cloud storage, password manager, document editor, and AI assistant. Each service can be subscribed to on its own, or all of them can be bundled into one plan.

:::fact
According to Wikipedia, Proton was started by Andy Yen, Jason Stockman, and Wei Sun, and opened the public beta of Proton Mail on May 16, 2014. It is headquartered in Plan-les-Ouates, near Geneva, Switzerland. Its official blog says Proton was "conceived at CERN", and recalls that 10,000 people gave more than $500,000 in the launch crowdfunding. Alongside a calendar, its products expanded to Proton VPN (2017), Proton Drive (2022), Proton Pass (2023), Proton Docs (2024), and the AI assistant Lumo (July 2025), and it acquired the email-alias service SimpleLogin in April 2022 and the notes app Standard Notes in April 2024 (all according to Wikipedia).
:::

:::fact
According to an official blog post on February 15, 2024, Proton has more than 100 million accounts and over 400 employees. In an official post on June 17 of the same year, exactly ten years after the initial Proton Mail crowdfunding campaign, it announced that the nonprofit Proton Foundation had become its primary shareholder. Andy Yen, Jason Stockman, and Dingchao Lu endowed the foundation by donating their own shares, and Proton pledges to give 1% of its net revenue to the foundation when conditions allow. The same post notes that Proton has no venture capital investors and that the team grew from 3 people to 500.
:::

:::pull
Free users are carried not by ads or investors but by paying users. Proton makes that promise not on a pricing page but through who owns the company.
:::

::scorecard

## UX analysis

Proton's UX is built to balance two things: never making people put up with inconvenience for the sake of privacy, and letting those who truly need it opt into heavier protection.

- **Try it free, with no cap.** The official page states that Proton VPN's free plan has no data or speed limits and shows no ads. In exchange, it allows one device at a time and connections to 10 countries chosen automatically. Proton's overall free plan includes one email address, up to 1 GB of mail storage, and up to 5 GB of Drive (starting at 500 MB and 2 GB, and growing as you complete the get-started steps). By placing the limit on "range of choice" rather than "quantity", it shows the gap to the paid tiers while staying usable every day.
- **Bundle everything into one account.** Proton Unlimited, the top single-user plan, combines 500 GB of storage, 15 email addresses, 3 custom domains, unlimited hide-my-email aliases, and a VPN on up to 10 devices in one subscription. It can hand a VPN to email users, and email to VPN users, without another sign-up.
- **Don't make people abandon their email client.** Launching Proton Mail Bridge starts local IMAP/SMTP servers, so an existing email client can read and send Proton Mail just by adding an account. The client can only sync while Bridge is running, so the option to start Bridge on startup is enabled by default.
- **Let people facing censorship or tracking choose heavier protection.** The VPN offers the Stealth protocol, which disguises traffic as ordinary HTTPS to get past blocking, and Secure Core, which first routes traffic through Proton-owned servers in Switzerland, Iceland, or Sweden.
- **Pay without revealing who you are.** According to Proton VPN's pricing page, besides cards and PayPal, you can pay with Proton credits, which can be bought with cash, bank transfer, or Bitcoin once you have an account. Every plan has a 30-day money-back guarantee.

:::fact
According to Proton VPN's official blog, its no-logs policy has been audited externally by the European auditing firm Securitum for five consecutive years, from 2022 to 2026. The 2026 audit concluded that the VPN server infrastructure it examined showed no sign of logging browsing activity, DNS queries, destination services, traffic contents, or user-identifiable connection metadata. The audits also check whether the no-logs policy is applied uniformly across all servers, regions, and plans.
:::

## Tech stack

::techstack

:::fact
Proton's web clients live in "WebClients", a monorepo published on GitHub under GPL-3.0. Apps such as Mail, Calendar, Drive, Pass, Wallet, Lumo, and Meet sit side by side in a single set of Yarn workspaces with shared packages for UI components, cryptography, payments, and feature flags. In our check (2026-09-28), the Mail app was built with React 18, Redux Toolkit, and webpack 5, and used Unleash for feature flags. The cryptographic foundation is OpenPGP. According to Proton's official blog, it took over as the primary maintainer of OpenPGP.js in August 2016, and in May 2019 released GopenPGP, an OpenPGP library for Go that it uses in its mobile apps and Bridge. For Proton Pass it went further and wrote a shared Rust core, shipped to mobile via UniFFI and to the web as WebAssembly.
:::

:::fact
The official blog post "Sustaining Proton's mission over time" says Proton owns all of its servers and network equipment, operates as its own ISP, and uses data centers in Switzerland, Germany, and Norway. In our observation (2026-09-28), proton.me, mail.proton.me, and account.proton.me all resolved to addresses announced from AS62371, Proton AG's autonomous system. For the VPN's Secure Core, the official support page explains that the servers are wholly owned by Proton and shipped directly from its offices, housed in an underground data center in Sweden and on a former military base in Iceland, and connected using IP addresses owned by Proton's own LIR (Local Internet Registry).
:::

:::fact
According to heise online, a proposed revision of Switzerland's surveillance ordinance (VÜPF) would require online services with 5,000 or more users to identify their users and to store metadata such as IP addresses for six months. In August 2025 Proton confirmed that, citing this legal uncertainty, it had begun moving the majority of its physical infrastructure out of Switzerland, placing the servers of its AI assistant Lumo in Germany and also building sites in Norway. At the same time, the company said that "investing in Europe does not mean leaving Switzerland."
:::

:::guess
Proton appears to maintain OpenPGP.js and GopenPGP itself so as not to leave the interoperability of encrypted email to the priorities of someone else's library. PGP is a standard that lets encrypted mail be exchanged with other email software, and a company that owns its implementation can push spec updates and vulnerability fixes at its own pace. Keeping separate implementations per language — JavaScript in the browser, Go on mobile and in Bridge, Rust for Pass — is a heavy investment, but the promise that "you don't have to trust the server" depends directly on the quality of the client-side crypto. Not outsourcing that part is presumably central to the product's credibility.
:::

:::guess
The decision to own its servers and network seems to be less about cost than about buying "jurisdictional options". A company renting cloud capacity is partly subject to its provider's choices about which countries data can sit in. With its own hardware and its own address space, Proton can move to Germany or Norway in response to a Swiss law revision on its own authority. Placing Lumo in Germany first is presumably an example of actually using that option.
:::

## Business model

Proton's revenue comes from subscriptions for individuals, families, and businesses. It shows no ads, and paying users cover the cost of the free plans.

:::fact
According to Proton's support site, Mail Plus costs €4.99 a month (€3.99 a month billed yearly), Proton Unlimited, which bundles every service, costs €12.99 a month (€9.99 a month billed yearly), the two-person Duo costs €19.99 a month, Family for up to six people costs €29.99 a month, and the top-tier Visionary costs €39.99 a month. Proton VPN's free page states that the free service is supported by paying users. The February 2024 blog post says Proton earns almost all of its revenue by selling services to users profitably, has not raised prices in ten years, and has no venture capital investors, and that it has donated more than $2.7 million to like-minded organizations.
:::

:::fact
According to the official Proton Partners Program page, affiliate commissions on new paid subscriptions are 100% for a one-month Proton VPN plan and 40% for one- to two-year plans, 30% for Proton Mail, and 30% for Proton Drive, Pass, and Lumo, with 30% also paid on renewals across all products. Commissions are paid by bank transfer on the 30th of the following month, and amounts under $100 are carried over until they exceed it. There is also a separate user-to-user referral program that gives both the referrer and the new user $20 in credit when the new user subscribes to an eligible paid plan (a referrer can earn up to $1,000 in credit in total). For comparison, 1Password's affiliate program pays $2 per signup plus 25% of the first year's or first month's payment.
:::

:::guess
Paying 100% on a one-month VPN plan likely reflects the fact that VPNs are products that are "easy to cancel and often chosen through comparison sites". VPN comparison articles and review videos tend to rank providers with high referral fees near the top. By handing over the entire first month to be chosen at the entry point, and then continuing to pay 30% on renewals, the scheme presumably rewards publishers more the longer the users they refer stay. Paying on renewals contrasts with 1Password, which ties its commission only to the first payment.
:::

:::guess
On the other hand, a model that hands out free plans widely, shows no ads, and owns its own infrastructure depends heavily on the paid conversion rate. Most of the 100 million accounts are likely free users, and whether paying users can keep carrying that cost is the crux of the business. Adding products — VPN, password manager, storage, AI — and bundling them in Unlimited to raise the price per user is presumably a strategy to increase what each paying user spends and thin out that burden.
:::

What Proton sells is less encrypted email or a VPN as such than a promise — "no one sees what's inside" — held in a form that is hard to break. It maintains its own crypto implementations, owns its own servers and network, and puts a foundation in charge of the company. Each of these is a detour from short-term profit, but in the business of selling privacy, that detour is the product. Now that it has begun moving infrastructure in response to a Swiss law revision, how that promise holds up across borders will be its next test.
