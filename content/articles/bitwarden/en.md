---
service: "Bitwarden"
title: "The Password Manager That Promises \"Basic Is Free Forever\" Has Repriced Its Paid Plan — Dissecting Bitwarden, Which Publishes Its Source on GitHub, Runs on Azure and Even Open-Sourced the Protocol for Handing Keys to AI Agents"
description: "Bitwarden is an open-source password manager born in 2016. Its free plan syncs unlimited items across unlimited devices, and it is used by more than 15 million people and over 80,000 businesses. The server is written in C# on .NET, the clients in TypeScript and Angular, and the shared SDK in Rust, with all source code published on GitHub under a dual AGPL/GPL and Bitwarden license scheme. The cloud runs on Microsoft Azure in US and EU regions, and a single Docker image lets it run on a home server too. In January 2026 it repriced Premium at $19.80 a year, in June it released Agent Access SDK, an open-source protocol for handing credentials to AI agents, and in September it began leasing privileged accounts. Using the pricing page, the official blog, the security white paper, the help center, GitHub and this site's own observations, the article dissects a cryptographic design that generates keys on the device, the line between open source and proprietary licensing, and a business that gives the product away and sells it to companies."
lead: "When Bitwarden took $100 million of investment in 2022, its official blog wrote that the basic free version would stay free, forever, with unlimited credentials on unlimited devices. In January 2026 the same company repriced its paid Premium plan at $19.80 a year and gave existing subscribers a one-time 25% discount on their next renewal. Free stays the same; the paid price changes. This article dissects, from public information alone, where a password manager that publishes all of its code, runs on Microsoft Azure and can sit on a home server makes its money, and what it is trying to protect in the age of AI agents."
category: saas
tags: [password-manager, security, open-source, end-to-end-encryption, azure, rust, ai-agent]
publishedAt: "2026-10-10"
updatedAt: "2026-10-10"
lastVerified: "2026-10-10"
serviceUrl: "https://bitwarden.com/"
# Affiliate link placeholder: no public affiliate program was found (https://bitwarden.com/affiliates/
# returned 404 on 2026-10-10; https://bitwarden.com/partners/become-a-partner/ offers only MSP,
# reseller and technology partnerships by application form). Nothing to enable for now. If Bitwarden
# ever opens a referral or affiliate program, paste its tracking link here and keep ja/en identical.
# affiliate:
#   url: "https://<bitwarden-affiliate-link>"
#   program: "Bitwarden Affiliate Program"
vendor: "Bitwarden, Inc."
origin: "US"
heroTheme: "bitwarden"
scores: { product: 4.5, ux: 4.0, tech: 4.0, business: 3.5 }
techStack:
  - layer: "Server"
    name: ".NET (ASP.NET Core, C#) / SQL Server (T-SQL)"
    confidence: confirmed
    evidence: "The README of bitwarden/server on GitHub (checked 2026-10-10) states that the server is written in C# using .NET Core with ASP.NET Core and that the database is written in T-SQL/SQL Server. The repository's language statistics are dominated by C# and TSQL"
    evidenceUrl: "https://github.com/bitwarden/server"
  - layer: "Cloud platform"
    name: "Microsoft Azure (Azure Kubernetes Service, Transparent Data Encryption)"
    confidence: confirmed
    evidence: "The official security white paper states that the cloud database holding encrypted vaults is hosted on Microsoft Azure infrastructure with Azure's encryption-at-rest technology, Transparent Data Encryption (TDE), and that all data is processed and stored using Microsoft-managed services including Azure Kubernetes Service (AKS). The security FAQ says the cloud servers are hosted on Microsoft Azure within the United States and the European Union"
    evidenceUrl: "https://bitwarden.com/help/bitwarden-security-white-paper/"
  - layer: "Clients"
    name: "TypeScript + Angular / Electron (web vault, browser extension, desktop, CLI)"
    confidence: confirmed
    evidence: "The official contributing documentation \"Web Clients Architecture\" states that the web vault, browser extension, desktop application (Electron based) and CLI share a common codebase in one repository and that the visual clients share Angular code. The language statistics of bitwarden/clients on GitHub are dominated by TypeScript, and the desktop package.json depends on electron 43.x and @angular/core 21.x"
    evidenceUrl: "https://contributing.bitwarden.com/architecture/clients/"
  - layer: "Shared SDK"
    name: "Rust (sdk-internal)"
    confidence: confirmed
    evidence: "bitwarden/sdk-internal on GitHub (checked 2026-10-10) is mostly Rust by language statistics, and its LICENSE says the code is available under a choice of GPL v3 or the Bitwarden Software Development Kit License v2.0. In clients issue #11611 (October 2024) the founder explained that the repository was split out so the SDK is used in a way that stays compatible with the GPL"
    evidenceUrl: "https://github.com/bitwarden/sdk-internal"
  - layer: "Mobile"
    name: "Swift (iOS) / Kotlin (Android)"
    confidence: confirmed
    evidence: "bitwarden/android on GitHub (checked 2026-10-10) holds the Password Manager and Authenticator apps for Android, written in Kotlin and licensed under GPL-3.0. bitwarden/ios holds the same apps for iOS, written in Swift under GPL-3.0"
    evidenceUrl: "https://github.com/bitwarden/android"
  - layer: "Cryptography"
    name: "AES-256 (CBC + HMAC) / PBKDF2-SHA256 (600,000 iterations) / Argon2id"
    confidence: confirmed
    evidence: "The official security white paper states that end-to-end encryption uses AES-CBC 256-bit encryption with HMAC authentication, salted hashing and key derivation functions such as PBKDF2 SHA-256 or Argon2id, that all cryptographic keys are generated and managed by the client on the user's devices, and that all encryption is done locally. Accounts start with PBKDF2 at a default of 600,000 iterations and can switch to Argon2id afterwards"
    evidenceUrl: "https://bitwarden.com/help/bitwarden-security-white-paper/"
  - layer: "Credentials for AI agents"
    name: "Agent Access SDK (Rust, Apache-2.0)"
    confidence: confirmed
    evidence: "The official blog (2026-06-10) states that Agent Access SDK, an open-source protocol for giving AI agents credentials without exposing the whole vault, is published at github.com/bitwarden/agent-access. The GitHub repository (checked 2026-10-10) is written in Rust and licensed under Apache-2.0"
    evidenceUrl: "https://github.com/bitwarden/agent-access"
  - layer: "Self-hosting"
    name: "Docker (Bitwarden lite: MSSQL / PostgreSQL / SQLite / MySQL)"
    confidence: confirmed
    evidence: "The official help article \"Install and deploy Bitwarden lite\" states that lite is a single-Docker-image deployment for personal use and home labs, supports PostgreSQL, SQLite and MySQL/MariaDB as well as MSSQL, runs on ARM devices such as Raspberry Pi, that standard deployments require MSSQL, and that in December 2025 Bitwarden Unified exited beta and was renamed Bitwarden lite"
    evidenceUrl: "https://bitwarden.com/help/install-and-deploy-lite/"
  - layer: "Web vault delivery"
    name: "Azure Storage (vault.bitwarden.com / vault.bitwarden.eu)"
    confidence: likely
    evidence: "This site's own observation (2026-10-10) found vault.bitwarden.com and vault.bitwarden.eu returning x-ms-request-id and x-ms-version: 2018-03-28 headers and ETags in the 0x8DF... format, suggesting static delivery from Azure Storage. api.bitwarden.com returned rate-limit headers such as x-rate-limit-limit: 1m"
sources:
  - label: "Bitwarden: About (company profile, leadership, user counts)"
    url: "https://bitwarden.com/about/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden: Pricing"
    url: "https://bitwarden.com/pricing/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden: Pricing (Japanese edition)"
    url: "https://bitwarden.com/ja-jp/pricing/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Blog: Bitwarden launches enhanced premium plan (2026-01-21)"
    url: "https://bitwarden.com/blog/bitwarden-launches-enhanced-premium-plan/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Blog: Accelerating value for Bitwarden users - Bitwarden raises $100 million (2022-09-06)"
    url: "https://bitwarden.com/blog/accelerating-value-for-bitwarden-users-bitwarden-raises-usd100-million/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Blog: Accelerating innovation at Bitwarden (the founder becomes CIO and a CTO joins, 2026-06-17)"
    url: "https://bitwarden.com/blog/accelerating-innovation-at-bitwarden/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Blog: Shadow AI agents are already in your organization (Agent Access SDK, 2026-06-10)"
    url: "https://bitwarden.com/blog/shadow-ai-agents-how-to-secure-credential-access-with-agent-access-sdk/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Blog: Bitwarden Privileged Controls (2026-09-29)"
    url: "https://bitwarden.com/blog/bitwarden-privileged-controls-secure-your-most-sensitive-accounts-in-minutes/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Blog: Bitwarden upholds high security standards with annual third-party audits (2025-08-14)"
    url: "https://bitwarden.com/blog/third-party-security-audit/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden: Compliance (SOC 2 Type II, SOC 3, ISO 27001, HIPAA)"
    url: "https://bitwarden.com/compliance/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Help: Bitwarden Security White Paper"
    url: "https://bitwarden.com/help/bitwarden-security-white-paper/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Help: Security FAQs (Azure in the US and EU)"
    url: "https://bitwarden.com/help/security-faqs/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Help: Server Regions"
    url: "https://bitwarden.com/help/server-geographies/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Help: Install and deploy Bitwarden lite"
    url: "https://bitwarden.com/help/install-and-deploy-lite/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden: Become a Partner (MSP, reseller and technology partners)"
    url: "https://bitwarden.com/partners/become-a-partner/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden: Newsfeed (the 2026-07-28 release on 15 million users and 80,000 businesses, the 2026-09-09 CPO appointment and more)"
    url: "https://bitwarden.com/newsfeed/"
    accessedAt: "2026-10-10"
  - label: "GitHub: bitwarden/server (README and LICENSE)"
    url: "https://github.com/bitwarden/server"
    accessedAt: "2026-10-10"
  - label: "GitHub: bitwarden/clients"
    url: "https://github.com/bitwarden/clients"
    accessedAt: "2026-10-10"
  - label: "GitHub: bitwarden/sdk-internal"
    url: "https://github.com/bitwarden/sdk-internal"
    accessedAt: "2026-10-10"
  - label: "GitHub: bitwarden/agent-access"
    url: "https://github.com/bitwarden/agent-access"
    accessedAt: "2026-10-10"
  - label: "GitHub: bitwarden/clients issue #11611 \"Desktop version 2024.10.0 is no longer free software\" (October 2024)"
    url: "https://github.com/bitwarden/clients/issues/11611"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Contributing Docs: Web Clients Architecture"
    url: "https://contributing.bitwarden.com/architecture/clients/"
    accessedAt: "2026-10-10"
---

Bitwarden is a password manager that encrypts and stores passwords, passkeys, card numbers and more, and syncs them between browser extensions, desktop and mobile apps. It plays in the same market as [1Password](/en/articles/1password), dissected on this site, but from the opposite corner: its free plan syncs unlimited items across unlimited devices, all of its source code is published on GitHub, and it can run on your own server. It also has a Japanese website and pricing page. In 2026 the company repriced its paid plans and released an open-source mechanism for handing credentials to AI agents.

## Service overview

Bitwarden sells Free, Premium and Families plans for individuals and Teams and Enterprise plans for businesses, alongside Secrets Manager for developers and Passwordless.dev for passkey authentication.

:::fact
According to the About page (as of 2026-10-10), Bitwarden was founded in 2016, is headquartered in Santa Barbara, California, and Bitwarden, Inc. is the parent company of 8bit Solutions LLC. It serves more than 15 million users in over 180 countries and more than 80,000 businesses, in over 50 languages. Its leadership includes CEO Michael Sullivan, founder and chief innovation officer Kyle Spearrin and CTO Andrew Hartnett. According to the official blog (2026-06-17), founder Spearrin brought in Hartnett, previously CTO of One Identity, as CTO and shifted his own focus to new products, and the company said it would increase R&D investment by 50%. The newsfeed lists a press release on July 28, 2026 announcing that Bitwarden had surpassed 15 million users and 80,000 businesses, and the appointment of Mary Writz as chief product officer on September 9. According to the official blog of September 6, 2022, the company took a $100 million growth investment led by PSG, with existing investor Battery Ventures participating, and PSG took a minority position and a board seat. The same post promised that the basic free version with unlimited credentials on unlimited devices would stay free forever, and that open source and self-hosting would remain.
:::

:::fact
According to the pricing page (checked 2026-10-10, US dollars, annual billing, taxes not included), Free offers unlimited devices and unlimited passwords, passkey management, free sharing with one other user and Bitwarden Send for encrypted transmission. Premium costs $1.65 a month ($19.80 a year) and adds an integrated authenticator, file attachments, emergency access and security reports. Families covers up to six people at $3.99 a month ($47.88 a year). For businesses, Teams costs $4 per user per month and includes event logs, directory sync and automated provisioning with SCIM; Enterprise costs $6 per user per month and adds SSO, enterprise policies, the flexibility to self-host, Access Intelligence for surfacing vault risks, and a free Families plan for every user. The Japanese pricing page shows the same prices in US dollars. According to the official blog (2026-01-21), Premium and Families gained vault health alerts, password coaching, five times the attachment storage (5 GB in total) and twice as many security keys for two-step login, and subscriptions were updated "to reflect expanded security capabilities." Existing subscribers get 15 days' notice before renewal, and Premium subscribers and some older Families subscribers get a one-time 25% discount on their next annual renewal. The basic free plan stays the same.
:::

:::pull
Keys are made on the device; the server holds only ciphertext. That design is published with its source, given away for free and sold to companies.
:::

::scorecard

## UX analysis

Bitwarden's experience sells the idea that you do not have to take its word for anything. The cryptographic design is in a white paper, the implementation is on GitHub, and you can run it on your own server. In return, the strength of the keys rests on the user's master password.

- **Free, and devices are not counted.** The free plan syncs unlimited items on unlimited devices, a different front door from [1Password](/en/articles/1password), where everyone pays after a 14-day trial. The official blog has repeated "basic is free forever" since the 2022 investment, and even the January 2026 repricing left Free alone and changed what the paid plans include and cost.
- **You choose the region.** According to the help article "Server Regions," the cloud is split into a US and an EU region, chosen under "Logging in on" at registration. An account or organization exists only in the region where it was first created, so it cannot be moved later. This site's own observation (2026-10-10) also found vault.bitwarden.com and vault.bitwarden.eu answering separately.
- **It runs on a home server too.** According to the help center, Bitwarden lite, for individuals and home labs, runs from a single Docker image, can use SQLite, PostgreSQL or MySQL as its database, and works on ARM devices such as a Raspberry Pi. Using Premium or business features on a self-hosted server, however, requires first subscribing on the cloud and uploading a license file to your own instance.
- **Key derivation is yours to tune.** According to the white paper, the master password is turned into a key through PBKDF2, salted with the email address, at a default of 600,000 iterations; it can be switched to Argon2id or run with more iterations afterwards. There is no second key held only by the device like 1Password's "Secret Key," so the vault's safety rests on the strength of the master password. The white paper explains that all keys are generated on the device, and only a separately derived hash is ever sent to the server.
- **Repricing follows a procedure.** The January 2026 change came with 15 days' notice before renewal, a one-time 25% discount for existing subscribers, and an FAQ on the official blog listing what was added and what stayed the same. Nothing changes for free users, it says, and the added paid value is what the price reflects.

## Tech stack

::techstack

:::fact
According to the README of bitwarden/server on GitHub (checked 2026-10-10), the server is written in C# using .NET Core with ASP.NET Core and the database in T-SQL/SQL Server. The LICENSE file says code in the repository is covered by either AGPL v3.0 or the Bitwarden License v1.0, AGPL by default, with Bitwarden-licensed code found only in the /bitwarden_license directory. According to the contributing documentation for the clients, the web vault, browser extension, Electron-based desktop app and CLI live in one repository and the visual clients share Angular code. The mobile apps are Kotlin on Android and Swift on iOS, both GPL-3.0. The shared SDK is sdk-internal, written in Rust and available under either GPL v3 or the Bitwarden SDK License v2.0. Issue #11611 in the clients repository, opened on October 17, 2024, argued that desktop version 2024.10.0 was no longer free software because it included the Bitwarden SDK license. Founder Kyle Spearrin replied on October 20 that the SDK and the client are separate programs and that the goal was GPL-compatible use, reported on October 24 that the code had been reorganized into a new sdk-internal repository so the app could be built with only GPL licenses, and the issue was closed on October 25.
:::

:::fact
According to the official security white paper, the cloud database is hosted on Microsoft Azure with Azure's encryption-at-rest technology TDE configured, and data is processed and stored with Microsoft-managed services such as Azure Kubernetes Service. The security FAQ says the cloud servers are hosted on Microsoft Azure within the United States and the European Union. The white paper says Bitwarden uses CDN services for a WAF at the edge, DDoS protection and caching, without naming the provider. This site's own observation (2026-10-10) found vault.bitwarden.com and vault.bitwarden.eu returning the x-ms-request-id and x-ms-version headers characteristic of Azure Storage, and api.bitwarden.com returning per-minute rate-limit headers. According to the official blog (2025-08-14), the company runs annual security audits by outside experts such as Cure53 and Insight Risk Consulting covering servers, web applications, client applications and source code, and runs a bug bounty program on HackerOne. The compliance page says source code audits and penetration tests are completed annually for each client, including web, browser extension and desktop, in addition to the core application and library, and lists SOC 2 Type II, SOC 3, ISO 27001 and HIPAA.
:::

:::guess
A server written in C# and SQL Server and a cloud on Microsoft Azure appear to be a choice to keep the stack in one family and simplify operations. That the white paper describes encryption at rest such as TDE suggests a second layer of protection, encrypting on Azure's side a vault that is already encrypted on the device, so the premise that a stolen server cannot be read is backed by operations as well as design. Moving the SDK to Rust presumably lets the web, desktop and mobile clients reuse one implementation of the cryptography, in the same direction as 1Password writing its shared core in Rust. Defaulting to AGPL/GPL and confining proprietary code to a separate directory reads as an open-core line: keep the transparency that allows audits, and charge only for enterprise features. That the founder answered the 2024 issue and split the repository within a week suggests the company itself sees the credibility of open source as the foundation of the business.
:::

## Handing keys to AI agents

:::fact
According to the official blog (2026-06-10), CSA research found that 54% of organizations already have unsanctioned "shadow AI" agents, and AI agents look for credentials in .env files, chat history and password managers to finish their tasks, reading a file they were told to ignore once completing the task requires it. The company then published Agent Access SDK, an open-source protocol for giving agents credentials without exposing the whole vault, at github.com/bitwarden/agent-access. When an agent requests a credential, the SDK authenticates the agent and opens an end-to-end encrypted tunnel; the request is forwarded to the user's device, where a human approves or denies it. The GitHub repository (checked 2026-10-10) is written in Rust, licensed under Apache-2.0, and includes an open protocol, a CLI tool and an SDK. According to the official blog (2026-09-29), Privileged Controls for businesses entered private preview, offering credential leasing in which privileged credentials are borrowed for a stated period and reason, access rules that require approvals or IP-address checks, and automatic password rotation when a lease ends (supported on Microsoft Entra ID at launch).
:::

:::guess
Routing agents' credential requests through a human's approval on their device appears to extend Bitwarden's design, in which keys are handled only on the device, to users who are not people. Publishing the protocol under Apache-2.0 presumably aims to make it a de facto standard that other password managers and agent developers adopt, and to plant its name first in the market for "not letting agents read .env files." Privileged credential leasing overlaps with the "trust layer for AI" that [1Password](/en/articles/1password) sells, suggesting both password managers see their next market not in employees but in the credentials of agents.
:::

## Business model

Revenue comes from annual fees for Premium and Families for individuals and Teams and Enterprise for businesses. The free plan and open source gather users; business seats and the MSP and reseller channels bring in the money.

:::fact
The partner page (checked 2026-10-10) recruits three kinds of partners through an application form: managed service providers that offer Bitwarden as a managed service, resellers that resell licenses, and technology partners that build integrations. The newsfeed lists a distribution agreement with Leader Cloud, an Australian distributor, on September 8, 2026. No official affiliate page could be found; this site's own observation (2026-10-10) found bitwarden.com/affiliates/ returning 404. According to the pricing page, every Enterprise user gets Families for free, and the About page's FAQ says the business model focuses on paid business and individual plans. The 2022 post on the $100 million investment promised that the basic free version, open source, self-hosting and advanced business features would remain after the investment.
:::

:::guess
The free plan with unlimited devices appears to serve both as advertising that gathers users and as a way into workplaces. Just as 1Password gives its Business users a Families plan, Bitwarden gives Families to every Enterprise user, and both companies share a design that shuttles between personal habit and company contract. The 2026 repricing of Premium looks like a decision to raise revenue from those who pay while keeping the number of free users. Expanding the MSP and reseller channels presumably piles up small-business seats without hiring more salespeople, and the open-source and self-hosting options appear to make it easier to sell to public-sector and regulated customers with strict procurement rules.
:::

Born in 2016, Bitwarden wrote its device-side key design into a white paper, put the implementation on GitHub, let people use it for free on unlimited devices, and gathered 15 million users and 80,000 businesses. In 2026 it repriced its paid plans, published a protocol for handing keys to AI agents, and began leasing privileged accounts. It is a year that tests whether being verifiable rather than trusted can underpin a business that holds not only people's credentials but agents' too.
