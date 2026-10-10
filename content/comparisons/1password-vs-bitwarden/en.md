---
title: "1Password vs Bitwarden — A Private Company That Makes Everyone Pay and Guards Them With a \"Second Key,\" and an Open-Source Rival That Gives It Away and Shows You the Code"
description: "A comparison of the two standard password managers, 1Password and Bitwarden, using only their official pricing pages, security white papers, press releases, official blogs, help centers and GitHub as of October 10, 2026. 1Password has no free plan, starts at $3.99 a month for individuals ($2.99 in the first year), exceeds $400 million in ARR and earns more than 75% of its revenue from businesses. Bitwarden's free plan syncs unlimited items on unlimited devices, Premium costs $19.80 a year, more than 15 million people and over 80,000 businesses use it, and its source code is published on GitHub. In key design, 1Password adds a Secret Key of more than 128 bits held only on the device, while Bitwarden relies on a key derived from the master password and lets users choose the derivation function. Scale, pricing, key design, open source and self-hosting, credentials for AI agents, referral programs and tech stack overlap are laid out side by side."
lead: "This site's 1Password article was about a vault that cannot be opened even if the server is stolen; its Bitwarden article was about not having to trust, only to verify. Both make keys on the device and keep only ciphertext on the server. Yet on whether there is a free plan, a second key, published source code and self-hosting, the two services stand in opposite corners. Reading both companies' official information on the same day, this article dissects their differences in scale, price, keys, openness and readiness for AI agents."
slugA: "1password"
slugB: "bitwarden"
publishedAt: "2026-10-10"
updatedAt: "2026-10-10"
lastVerified: "2026-10-10"
sources:
  - label: "1Password official: Pricing (Individual and Families)"
    url: "https://1password.com/pricing/password-manager"
    accessedAt: "2026-10-10"
  - label: "1Password official: Pricing (Teams Starter Pack and Business)"
    url: "https://1password.com/business-pricing"
    accessedAt: "2026-10-10"
  - label: "1Password official press release: $400M ARR milestone and executive appointments (2025-11-06)"
    url: "https://1password.com/press/2025/nov/1password-strengthens-leadership-amid-growth-milestone"
    accessedAt: "2026-10-10"
  - label: "1Password Security Design White Paper: Secret Key"
    url: "https://agilebits.github.io/security-design/apsk.html"
    accessedAt: "2026-10-10"
  - label: "1Password Security Design White Paper: A deeper look at keys (PBKDF2, 650,000 iterations)"
    url: "https://agilebits.github.io/security-design/deepKeys.html"
    accessedAt: "2026-10-10"
  - label: "1Password Security Design White Paper: Server infrastructure (Amazon Aurora)"
    url: "https://agilebits.github.io/security-design/infra.html"
    accessedAt: "2026-10-10"
  - label: "1Password official blog: 1Password 8: The Story So Far (the shared Rust core, 2021-08-12)"
    url: "https://1password.com/blog/1password-8-the-story-so-far"
    accessedAt: "2026-10-10"
  - label: "1Password official: Affiliate program"
    url: "https://1password.com/affiliate"
    accessedAt: "2026-10-10"
  - label: "Bitwarden: Pricing"
    url: "https://bitwarden.com/pricing/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Blog: Bitwarden launches enhanced premium plan (2026-01-21)"
    url: "https://bitwarden.com/blog/bitwarden-launches-enhanced-premium-plan/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Blog: Accelerating value for Bitwarden users - Bitwarden raises $100 million (2022-09-06)"
    url: "https://bitwarden.com/blog/accelerating-value-for-bitwarden-users-bitwarden-raises-usd100-million/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden: About (user counts and leadership)"
    url: "https://bitwarden.com/about/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Help: Bitwarden Security White Paper"
    url: "https://bitwarden.com/help/bitwarden-security-white-paper/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Help: Server Regions"
    url: "https://bitwarden.com/help/server-geographies/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Help: Install and deploy Bitwarden lite"
    url: "https://bitwarden.com/help/install-and-deploy-lite/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Blog: Shadow AI agents are already in your organization (Agent Access SDK, 2026-06-10)"
    url: "https://bitwarden.com/blog/shadow-ai-agents-how-to-secure-credential-access-with-agent-access-sdk/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Blog: Bitwarden Privileged Controls (2026-09-29)"
    url: "https://bitwarden.com/blog/bitwarden-privileged-controls-secure-your-most-sensitive-accounts-in-minutes/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden: Become a Partner"
    url: "https://bitwarden.com/partners/become-a-partner/"
    accessedAt: "2026-10-10"
  - label: "GitHub: bitwarden/server (README and LICENSE)"
    url: "https://github.com/bitwarden/server"
    accessedAt: "2026-10-10"
  - label: "GitHub: bitwarden/sdk-internal (Rust)"
    url: "https://github.com/bitwarden/sdk-internal"
    accessedAt: "2026-10-10"
---

[1Password](/en/articles/1password) and [Bitwarden](/en/articles/bitwarden) are often compared side by side as password managers that encrypt passwords and passkeys on the device before storing them and sync across browsers, desktops and phones. 1Password was born in Canada in 2005, ran for 14 years without outside capital, and then expanded into access management for businesses. Bitwarden was born in 2016 as an open-source password manager and grew from individuals to businesses on the strength of its free plan and self-hosting. Laid over each other, the two articles show that the difference between the companies lies less in the strength of their cryptography than in whom they make pay and what they let you see.

This article was assembled by rereading both companies' official pricing pages, security white papers, press releases, official blogs, help centers and GitHub repositories on October 10, 2026. This site has not used both apps under the same conditions to measure usability or the accuracy of autofill, so it does not judge which feels better.

## Scale: a private company that publishes ARR, and an open-source one that publishes user counts

Both are private companies that publish no financial statements. 1Password announces ARR and business customer counts at milestones; Bitwarden announces user and business counts.

:::fact
According to 1Password's press release (2025-11-06), the company surpassed $400 million in annual recurring revenue (ARR) while remaining free cash-flow positive, with more than 75% of revenue coming from businesses. It serves 180,000 business customers including more than 30% of the Fortune 100, secures more than 1.3 billion human and machine credentials, and supports over 1 million developers. Its business pricing page says it is trusted by "200,000 businesses." According to Bitwarden's About page (as of 2026-10-10), Bitwarden was founded in 2016 and is used by more than 15 million users in over 180 countries and more than 80,000 businesses. According to its official blog (2022-09-06), it took a $100 million growth investment led by PSG, which took a minority position and a board seat. It does not publish revenue or ARR.
:::

| Item | 1Password | Bitwarden |
| --- | --- | --- |
| Founded | 2005 (Canada) | 2016 (Santa Barbara, US) |
| Capital | Private; outside capital since 2019 | Private; $100 million led by PSG in 2022 |
| Published scale | ARR above $400 million; over 75% of revenue from businesses | Over 15 million users, over 80,000 businesses; revenue undisclosed |
| Business customers | 180,000 (pricing page says 200,000) | Over 80,000 |
| Source code | Closed (SDKs and some components on GitHub) | Published on GitHub (dual AGPL/GPL and Bitwarden licenses) |

:::pull
1Password makes everyone pay and guards them with a second key only the device holds. Bitwarden gives the product away and shows how the keys are made, source included.
:::

## Pricing: pay from day one, or start free

:::fact
According to 1Password's pricing page (checked 2026-10-10, US dollars, annual billing), Individual costs $3.99 a month and Families, which lets you invite up to five family members, $5.99 a month; new customers on annual billing pay $2.99 and $4.49 respectively in the first year. There is no free plan; everyone starts with a 14-day free trial. For businesses, the Teams Starter Pack for up to 10 people costs $24.95 a month ($299.40 a year) and Business $8.99 per user per month ($107.88 a year), with every Business user getting Families free. According to Bitwarden's pricing page (same day, US dollars, annual billing, taxes not included), the free plan syncs unlimited items on unlimited devices; Premium costs $1.65 a month ($19.80 a year), Families for up to six people $3.99 a month ($47.88 a year), Teams $4 per user per month and Enterprise $6 per user per month, with every Enterprise user getting Families free. According to the official blog (2026-01-21), Premium was repriced at that $19.80 a year, with existing subscribers getting a 25% discount on their next annual renewal only.
:::

| Item | 1Password | Bitwarden |
| --- | --- | --- |
| Free plan | None (14-day free trial) | Yes (unlimited items and devices) |
| Individuals | $3.99 a month ($2.99 in the first year) | Premium $1.65 a month ($19.80 a year) |
| Families | $5.99 a month ($4.49 in the first year), invite up to five family members | $3.99 a month ($47.88 a year), up to six people |
| Small teams | Teams Starter Pack $24.95 a month (up to 10) | Teams $4 per user a month |
| Businesses | Business $8.99 per user a month | Enterprise $6 per user a month |
| Family perk for business users | Families for every Business user | Families for every Enterprise user |

:::guess
With no free entry point, 1Password appears to treat individuals as the same "paid product" as the business customers that bring in more than three quarters of its revenue. Bitwarden lets people use it free on unlimited devices to widen the path into workplaces, and the 2026 repricing reads as a move to earn more from those who do pay. That both attach a family plan to their business users suggests a shared aim of shuttling between personal habit and company contract.
:::

## Key design: add a second key, or rely on the master password

:::fact
According to 1Password's security white paper, a 26-character Secret Key held only on the device is mixed into key derivation alongside the master password, and the number of possible Secret Keys is just over 2 to the 128th power. The master password goes through 650,000 iterations of PBKDF2-HMAC-SHA256, and the white paper explains that a stolen server cannot unlock the vault without the Secret Key. Data is stored in Amazon Aurora on AWS. According to Bitwarden's security white paper, the master password becomes a key through PBKDF2 SHA-256 salted with the email address at a default of 600,000 iterations, users can switch to Argon2id or raise the iteration count afterwards, and end-to-end encryption uses AES-CBC 256-bit with HMAC authentication. All keys are generated on the device, only a separately derived hash is sent to the server, and the encrypted vault is stored on Microsoft Azure with Azure's encryption-at-rest technology TDE also configured.
:::

| Item | 1Password | Bitwarden |
| --- | --- | --- |
| Key material | Master password + Secret Key (device-only, over 128 bits) | Master password (salted with the email address) |
| Key derivation | PBKDF2-HMAC-SHA256, 650,000 iterations | PBKDF2 SHA-256, 600,000 iterations by default, or Argon2id (user's choice) |
| Server-side storage | Amazon Aurora on AWS | Microsoft Azure (TDE encryption at rest) |
| Regions | AWS in the US, Canada and the EU | Azure in the US and the EU (chosen at sign-up) |

:::guess
1Password's device-held second key appears to make brute-forcing ciphertext stolen from the server practically impossible even for users with weak master passwords. The trade-off is that losing the Secret Key means no one can open the vault. Bitwarden has no second key and lets users choose the derivation function and iteration count, leaving the degree of safety to the strength of the master password and the settings. The former reads as a design that narrows the escape routes in exchange for never making you think; the latter as one that leaves the judgment to the user in exchange for letting them verify.
:::

## Open source and self-hosting

:::fact
According to the README of Bitwarden's server repository on GitHub, the server is written in C# using .NET Core and ASP.NET Core, and the database is SQL Server. The LICENSE makes AGPL v3.0 the default and says Bitwarden-licensed code lives only in the /bitwarden_license directory. The shared SDK, sdk-internal, is written in Rust and available under either GPL v3 or Bitwarden's own SDK license. According to the help center, Bitwarden lite, for individuals and home labs, runs from a single Docker image with SQLite, PostgreSQL or MySQL as options, and using paid features on a self-hosted server requires subscribing on the cloud and loading a license file. 1Password, according to its official blog (2021-08-12), writes its shared backend library in Rust and publishes SDKs on GitHub, but as of this site's dissection, neither the source code of the product itself nor a self-hosting option appears on its official pricing pages.
:::

| Item | 1Password | Bitwarden |
| --- | --- | --- |
| Product source code | Closed (SDKs published) | Published (server, clients, mobile, SDK) |
| License | — | AGPL v3 / GPL v3 by default; enterprise features under Bitwarden's own license |
| Self-hosting | Not listed on the pricing pages | Standard deployment (MSSQL) and lite (a single Docker image) |

## Credentials for AI agents

:::fact
1Password's press release (2025-11-06) names AI systems that have the same access as employees without the same oversight as a new risk, and introduces a "trust layer for AI" that keeps every password, key and credential secure and traceable whether used by a person or an AI system; it also says 1Password became a launch partner for Perplexity's Comet browser. Bitwarden's official blog (2026-06-10), starting from the observation that AI agents look for credentials in .env files and password managers, published Agent Access SDK on GitHub (Rust, Apache-2.0), an open-source protocol for handing agents credentials without exposing the whole vault; requests reach the user's device, where a human approves them. According to a blog post on September 29, 2026, Privileged Controls, which lets privileged credentials be borrowed for a stated period and reason, entered private preview.
:::

:::guess
Both companies appear to see their next market not in employee seats but in the credentials of agents and machines. 1Password's direction is to sell a "trust layer" inside its own product as an extension of business access management; Bitwarden's is to publish the protocol so that other agents and management tools use the same procedure. The difference between giving the product away and making everyone pay shows up unchanged in how each prepares for AI agents.
:::

## Referral programs

:::fact
According to 1Password's affiliate page (checked 2026-10-10), its program on Commission Junction pays $2 for each completed sign-up and 25% of the first year's or first month's payment ($2 minimum). Bitwarden has no official affiliate page that could be found; this site's own observation (2026-10-10) found bitwarden.com/affiliates/ returning 404. Its partner page recruits three kinds of partners, MSPs, resellers and technology partners, through an application form.
:::

## The tech stack overlap is two items: Rust and Electron

The tech stack comparison at the bottom of this page is produced mechanically from the techStack of the two articles. The two items judged common are Rust and Electron, and they are used in similar ways. According to its official blog, 1Password writes "Core," the backend library shared across every platform, in Rust and builds its desktop apps on Electron. Bitwarden writes its shared SDK, sdk-internal, in Rust, and its desktop app is built on Electron, sharing Angular code with the web vault and browser extension. Concentrating the cryptography in one language and reusing it across clients is nearly the same approach at both companies. The difference is underneath: 1Password sits on Amazon Aurora on AWS, Bitwarden on Microsoft Azure and SQL Server, and while Bitwarden discloses that its server language is C# and .NET, 1Password's job postings name Go.

The question for anyone choosing can be split in two. If you do not want to think about it, want to give everyone in the family or the company the same protection, and want a second key such as the Secret Key to close the hole left by a weak password, 1Password, where everyone pays, is the fit. If you want to start free, verify the source code and audit results yourself, and run it on your own server, Bitwarden is the fit. Whichever you choose, the password manager of 2026 is turning from a tool that holds people's passwords into the place that decides how keys are handed to AI agents.
