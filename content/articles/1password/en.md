---
service: "1Password"
title: "A Vault That Stays Shut Even If the Server Is Stolen — How 1Password Went From 14 Bootstrapped Years to $400M ARR in Enterprise Security With a Second Key and a Shared Rust Core"
description: "1Password is the password manager born in Canada in 2005. After 14 years without outside capital, it raised three rounds from 2019 onward to reach a $6.8 billion valuation, and passed $400 million in ARR in November 2025. A dissection — from its security white paper, official blog, developer docs, and careers pages — of a 128-bit-plus Secret Key the server never sees, a Rust core shared across every platform, ciphertext stored in AWS Aurora, a CLI and SSH agent that keep plaintext out of your .env files, SDKs that run on WebAssembly, and a 25% affiliate program."
lead: "1Password's security white paper spells out a worst case: a malicious database administrator sitting at a terminal on the back-end server, a list of table and column names in hand. The vault still won't open, the paper goes on, because half of the key only ever exists on the user's devices. Starting as a password app for individuals, 1Password has built on that design to protect developer secrets, employee devices, and even the credentials of AI agents. This is a dissection of how it is built and how it makes money."
category: saas
tags: [password-manager, security, developer-tools, rust, end-to-end-encryption]
publishedAt: "2026-09-28"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://1password.com/"
# Affiliate link placeholder: the owner must join the 1Password affiliate program
# (https://1password.com/affiliate, run on Commission Junction / CJ) before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<1password-cj-affiliate-link>"
#   program: "1Password Affiliate Program (CJ)"
vendor: "AgileBits Inc."
origin: "CA"
heroTheme: "1password"
scores: { product: 4.5, ux: 4.5, tech: 4.5, business: 4.0 }
techStack:
  - layer: "Shared client core"
    name: "Rust (1Password Core)"
    confidence: confirmed
    evidence: "The official blog post \"1Password 8: The Story So Far\" (2021-08-12) states the shared backend library was written in Rust and is used on macOS, iOS, Windows, Android, Linux, the browser extension, and the web app, consolidating server communication, database handling, permission enforcement, and cryptography just short of the UI"
    evidenceUrl: "https://1password.com/blog/1password-8-the-story-so-far"
  - layer: "UI frameworks"
    name: "Electron (Windows / Linux / macOS) / SwiftUI (iOS) / Android View"
    confidence: confirmed
    evidence: "The same official post says Electron was used for the Windows and Linux front ends, iOS went all in on SwiftUI, Android passed on the then-prerelease Jetpack Compose for the Android View framework, and on macOS work on a SwiftUI app was stopped so the Electron app could cover every supported Mac OS version"
    evidenceUrl: "https://1password.com/blog/1password-8-the-story-so-far"
  - layer: "Cryptography and auth"
    name: "2SKD (PBKDF2-HMAC-SHA256 650,000 rounds + Secret Key via HKDF) / SRP / AES-256-GCM"
    confidence: confirmed
    evidence: "The official security white paper documents two-secret key derivation (the account password run through 650,000 rounds of PBKDF2-HMAC-SHA256, XORed with an HKDF output derived from a 26-character Secret Key generated on the device), SRP authentication that never sends the password to the server, and AES256-GCM encryption"
    evidenceUrl: "https://agilebits.github.io/security-design/deepKeys.html"
  - layer: "Database"
    name: "Amazon Aurora (MySQL-compatible)"
    confidence: confirmed
    evidence: "The \"Server infrastructure\" chapter of the official white paper states that all database information is stored in an AWS Aurora instance (a MySQL-compatible relational database), and lists the columns that remain unencrypted (names, email addresses, team names, and so on)"
    evidenceUrl: "https://agilebits.github.io/security-design/infra.html"
  - layer: "SDKs"
    name: "WebAssembly core (Extism / wazero) + desktop-app IPC library"
    confidence: confirmed
    evidence: "The official Go SDK (GitHub: 1Password/onepassword-sdk-go) depends on Extism and wazero in go.mod and ships internal/wasm/core.wasm. When authenticating through the desktop app, it locates and calls a shared library bundled with the app (libop_sdk_ipc_client)"
    evidenceUrl: "https://github.com/1Password/onepassword-sdk-go"
  - layer: "Developer secrets"
    name: "1Password CLI (op run / op inject) / SSH agent / Service Accounts / Connect"
    confidence: confirmed
    evidence: "The official developer docs describe op://<vault>/<item>/<field> secret references written into .env and config files and resolved at runtime by op run and op inject, an SSH agent that signs without the private key ever leaving 1Password, Service Accounts for CI, and the self-hosted Connect server"
    evidenceUrl: "https://www.1password.dev/cli/secret-references/"
  - layer: "Backend"
    name: "Go"
    confidence: likely
    evidence: "An official careers posting (Developer, Rust, listed in 2026) names \"strong experience building backend services in Go\" and \"hands-on experience with cloud infrastructure (AWS)\" as bonus points, and other roles list Go first among example backend languages. No official page states the server's language outright"
    evidenceUrl: "https://jobs.ashbyhq.com/1password/c247ea98-bf31-45f0-a38b-1fe255909538"
  - layer: "Cloud and regions"
    name: "AWS (us-east-1 / ca-central-1 / eu-central-1)"
    confidence: likely
    evidence: "Our DNS observation (2026-09-28) resolved my.1password.com to AWS us-east-1, my.1password.ca to ca-central-1, and my.1password.eu to eu-central-1 (Frankfurt) EC2 addresses. This is consistent with the white paper's statement that Aurora is used"
  - layer: "Marketing site"
    name: "Next.js on Vercel (behind Cloudflare) / Contentful"
    confidence: likely
    evidence: "Our HTTP header observation (2026-09-28) found 1password.com returning server: cloudflare, x-powered-by: Next.js, and x-vercel-id, with page images and the OGP image served from Contentful's delivery domain (ctfassets.net). The product itself (my.1password.com) returns none of these headers and runs on separate infrastructure"
sources:
  - label: "Wikipedia: 1Password (release year, funding, acquisitions, ARR timeline)"
    url: "https://en.wikipedia.org/wiki/1Password"
    accessedAt: "2026-09-28"
  - label: "1Password official: Meet the team — Dave Teare (founded in 2005, co-founders)"
    url: "https://1password.com/company/meet-the-team/dave-teare"
    accessedAt: "2026-09-28"
  - label: "TechCrunch: 1Password raises a $620M Series C at a $6.8B valuation (2022-01-19)"
    url: "https://techcrunch.com/2022/01/19/1password-series-c-funding/"
    accessedAt: "2026-09-28"
  - label: "1Password press release: surpasses $400M ARR and expands its executive team (2025-11-06)"
    url: "https://1password.com/press/2025/nov/1password-strengthens-leadership-amid-growth-milestone"
    accessedAt: "2026-09-28"
  - label: "Kolide official blog: 1Password acquires Kolide (2024-02-20)"
    url: "https://www.kolide.com/blog/1password-acquires-kolide"
    accessedAt: "2026-09-28"
  - label: "1Password official blog: 1Password acquires Trelica (2025-01-07)"
    url: "https://1password.com/blog/1password-acquires-trelica"
    accessedAt: "2026-09-28"
  - label: "1Password official blog: 1Password 8: The Story So Far (2021-08-12)"
    url: "https://1password.com/blog/1password-8-the-story-so-far"
    accessedAt: "2026-09-28"
  - label: "1Password Security Design White Paper: Secret Key"
    url: "https://agilebits.github.io/security-design/apsk.html"
    accessedAt: "2026-09-28"
  - label: "1Password Security Design White Paper: A deeper look at keys (2SKD, 650,000 PBKDF2 rounds)"
    url: "https://agilebits.github.io/security-design/deepKeys.html"
    accessedAt: "2026-09-28"
  - label: "1Password Security Design White Paper: Server infrastructure (Amazon Aurora)"
    url: "https://agilebits.github.io/security-design/infra.html"
    accessedAt: "2026-09-28"
  - label: "1Password official blog: 1Password SDKs are now available in beta (2024-05-14)"
    url: "https://1password.com/blog/sdk-beta"
    accessedAt: "2026-09-28"
  - label: "GitHub: 1Password/onepassword-sdk-go (official Go SDK)"
    url: "https://github.com/1Password/onepassword-sdk-go"
    accessedAt: "2026-09-28"
  - label: "1Password Developer: Secret references (op run / op inject)"
    url: "https://www.1password.dev/cli/secret-references/"
    accessedAt: "2026-09-28"
  - label: "1Password Developer: SSH agent and Git commit signing"
    url: "https://www.1password.dev/ssh/"
    accessedAt: "2026-09-28"
  - label: "1Password Developer: Secrets Automation (Service Accounts vs. Connect)"
    url: "https://www.1password.dev/secrets-automation/"
    accessedAt: "2026-09-28"
  - label: "1Password official: Pricing (Individual and Families)"
    url: "https://1password.com/pricing/password-manager"
    accessedAt: "2026-09-28"
  - label: "1Password official: Pricing (Teams Starter Pack and Business)"
    url: "https://1password.com/business-pricing"
    accessedAt: "2026-09-28"
  - label: "1Password official: Affiliate program"
    url: "https://1password.com/affiliate"
    accessedAt: "2026-09-28"
  - label: "1Password official blog: Okta Support System incident and 1Password (2023)"
    url: "https://1password.com/blog/okta-incident"
    accessedAt: "2026-09-28"
  - label: "1Password official: Careers (Developer, Rust)"
    url: "https://jobs.ashbyhq.com/1password/c247ea98-bf31-45f0-a38b-1fe255909538"
    accessedAt: "2026-09-28"
  - label: "Bitwarden official: Pricing (for comparison)"
    url: "https://bitwarden.com/pricing/"
    accessedAt: "2026-09-28"
  - label: "Wikipedia: Bitwarden (for comparison; the February 2026 Premium price increase)"
    url: "https://en.wikipedia.org/wiki/Bitwarden"
    accessedAt: "2026-09-28"
---

A password manager is a tool for gathering every key in one place. The price of that convenience is that if the one place falls, everything falls. 1Password's answer has been a design in which the vault stays shut even if the provider's servers are stolen outright. And it has stretched that same design into a business that protects developers' API keys, employees' devices, and the credentials of AI agents.

## What It Is

1Password is a password manager that encrypts and stores passwords, passkeys, credit cards, notes, and more, and fills them in across browsers and apps. Beyond plans for individuals and families, it offers business plans that centralize employee credentials, a CLI, SSH agent, and SDKs for developer secrets, and Extended Access Management (XAM), which extends control to devices and SaaS access.

:::fact
According to 1Password's own site, the company was founded in 2005 by four co-founders: Dave and Sara Teare and Roustem and Natalia Karimov. Wikipedia says the first version shipped in 2006 and that the developer is the Canadian company AgileBits Inc. Its first outside capital came in November 2019 with a $200 million Series A led by Accel. It then raised $100 million at a $2 billion valuation in 2021, and a $620 million Series C at a $6.8 billion valuation in January 2022. TechCrunch reports the Series C was led by ICONIQ Growth, with Tiger Global, Lightspeed, and Accel participating alongside actors Ryan Reynolds and Robert Downey Jr. The same article says paying business customers grew from 90,000 at the July 2021 Series B to more than 100,000, and headcount from 475 to 570.
:::

:::fact
According to an official press release dated November 6, 2025, 1Password passed $400 million in ARR while remaining free-cash-flow positive. It serves 180,000 business customers, including more than 30% of the Fortune 100 and over two-thirds of the Forbes AI 50, and more than 75% of revenue comes from businesses. It says it secures more than 1.3 billion human and machine credentials and is used by more than a million developers worldwide. On the acquisition front, it bought Kolide, which checks device health, in February 2024 (per Kolide's official blog), and Trelica, which manages SaaS usage and access, in January 2025 (per 1Password's official blog); both became foundations of XAM.
:::

:::pull
Half of the key never once reaches 1Password's servers. "You don't have to trust the provider" is itself the sales pitch.
:::

::scorecard

## UX Analysis

1Password's UX is designed to push the effort that security demands into the first setup and into places you never see.

- **It has you print the second key.** The Secret Key, generated on the device at sign-up, is 26 characters drawn from 31 uppercase letters and digits, giving slightly more than 2^128 possibilities. It is not something a person can memorize, so the 1Password app stores it on the device, and at account creation you are strongly urged to save and print an Emergency Kit. You still memorize only one account password, yet the premise of brute-forcing it is broken.
- **It keeps plaintext out of .env.** With the CLI, you write references in the form `op://<vault>/<item>/<field>` in `.env` and config files instead of real values, and `op run` or `op inject` swaps in the values at runtime. Files of references can be committed to Git, and no plaintext secret stays in the repository.
- **SSH private keys never leave.** The SSH agent acts as the key provider for existing SSH clients and Git, and signing requests are approved with Touch ID or Windows Hello. The private key itself never leaves 1Password, and Git commit signing can be configured from the app.
- **CI doesn't borrow a human's account.** CI/CD and servers use Service Accounts, separate from people's accounts. They carry rate limits and request quotas but require no extra server. For heavy reads, you run a Connect server that caches data in your own environment. Both are included in the subscription.
- **Trying it means a 14-day trial.** The pricing pages list paid plans and a 14-day trial; there is no indefinite free plan of the kind Bitwarden offers.

:::fact
According to the official blog, on September 29, 2023, 1Password detected suspicious activity in its Okta instance, terminated it immediately, and investigated. The cause was the breach of Okta's support system, in which attackers abused HAR files shared for support. In October 2023, 1Password concluded that there was no compromise of user data or of other internal or user-facing systems. Wikipedia notes that 1Password 8 removed the option to store vaults locally, which drew criticism.
:::

## Tech Stack

::techstack

:::fact
The official blog post "1Password 8: The Story So Far" (August 12, 2021) explains that 1Password abandoned its separate per-platform implementations and rewrote a shared backend library in Rust. The core is shared across macOS, iOS, Windows, Android, Linux, the browser extension, and the web app, and handles server communication, the database, permission enforcement, and cryptography all the way up to the UI. The UI is chosen per platform: Electron for Windows, Linux, and macOS, SwiftUI for iOS, and Android View for Android. The official security white paper describes two-secret key derivation (2SKD): the account password is hashed with 650,000 rounds of PBKDF2-HMAC-SHA256 and XORed with a value derived from the Secret Key via HKDF. It explains that a more modern hashing scheme was passed over because PBKDF2 has efficient implementations on every client, and in particular is not too slow in JavaScript in web browsers. Authentication uses SRP, which never sends the password to the server, and data is encrypted with AES256-GCM.
:::

:::fact
The white paper's "Server infrastructure" chapter says all database information is stored in AWS Aurora (MySQL-compatible), and openly lists the columns that remain unencrypted — team names, users' names and email addresses, device makes and operating systems, IP addresses, public keys, and more. Even if a malicious administrator rewrote table relationships to expose an item to someone else, it explains, that user could not decrypt it, because the vault key is encrypted with the intended user's public key. The official Go SDK runs a WebAssembly core (core.wasm) through Extism and wazero, and when authenticating through the desktop app, it calls a shared library bundled with the app.
:::

:::guess
In our observation (2026-09-28), my.1password.com, my.1password.ca, and my.1password.eu resolved to AWS addresses in US East, Canada Central, and Frankfurt respectively. The company appears to split account domains by region so that users can choose where their data lives — presumably to meet data-residency demands from business customers, especially in Canada and Europe. And since the SDK core ships as WebAssembly, it seems likely that the Rust core is compiled to WebAssembly so that the Go, Python, and JavaScript SDKs all call the same cryptographic code. Not reimplementing cryptography per language narrows the entry points for bugs to one, which for a security product likely matters more than speed.
:::

:::guess
No official document states the server-side language, however. Since an official careers posting for a Rust developer lists "building backend services in Go" and "AWS" as bonus points, the split appears to be Rust for the shared client core and Go on AWS for the server. Because the server only stores and relays ciphertext and never holds the keys to decrypt it, the heavy lifting and the secrets worth guarding sit in the client's Rust code, while the server is built plainly in a language that scales easily — or so we infer.
:::

## Business Model

1Password's revenue comes from subscriptions for individuals and families and seat-based subscriptions for businesses. More than three quarters of revenue comes from businesses.

:::fact
According to the official pricing pages, Individual costs $3.99 a month and Families (up to five people) $5.99 a month, both billed annually. New customers who subscribe annually and directly through 1Password.com pay $2.99 and $4.49 respectively for the first year. For businesses, the Teams Starter Pack for up to 10 people costs $24.95 a month, and Business costs $8.99 per user per month, including SSO integrations and Watchtower (alerts for leaked or weak passwords). Business gives every user a free Families plan for personal use. Enterprise is quoted individually. Individual, Families, the Teams Starter Pack, and Business each have a 14-day free trial, and the business pricing page says it is trusted by "200,000 businesses". For comparison, the open-source Bitwarden syncs across unlimited devices on its free plan; its pricing page lists Premium at $19.80 a year and the Teams business plan at $4 per user per month. Wikipedia notes that Bitwarden Premium rose from $10 to $20 a year in February 2026.
:::

:::fact
According to the official affiliate page, 1Password's affiliate program runs on Commission Junction (CJ) and pays $2 for each completed sign-up plus 25% of the first year's or first month's payment ($2 minimum). Publishers with either consumer or business audiences may apply, and it targets outlets whose readers are interested in technology, security, or productivity.
:::

:::guess
1Password has no free plan and keeps its prices several times Bitwarden's. That it still grows business customers and ARR seems to be because it is sold not as "password management" but as "access management" that gathers developer secrets, employee devices, SaaS access, and AI agents' credentials into one console. Employees who learn to like the consumer product then ask for the same thing at work — a bottom-up adoption that appears to push up business seat counts. Giving every Business user a free Families plan looks designed with that round trip in mind.
:::

:::guess
The affiliate payout is 25% of the first payment — a full year if billed annually, a single month if billed monthly. Compared with ElevenLabs' 22% or Better Stack's 25%, both paid across a whole year, the cut for a monthly customer is small, though 1Password adds $2 per sign-up on top. Tying the reward to the first payment alone suggests the company values steering buyers to annual billing and closing the deal right after the referral. Developer blogs and technical articles can lead naturally from concrete pains like plaintext in `.env` or SSH key handling to 1Password, which likely makes this a good fit for affiliate content.
:::

What 1Password sells is not only the convenience of not memorizing passwords. It is the design itself: you don't have to trust the provider's servers. Keep the second key in the user's hands, gather cryptography into a single Rust core, drive plaintext secrets out of repositories — that accumulation turned a consumer app into an enterprise security business holding 1.3 billion credentials. Now that AI agents hold keys as well as people, the value of a system that hands out keys without showing anyone what is inside is still rising.
