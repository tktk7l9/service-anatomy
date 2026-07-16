---
service: "Obsidian"
title: "Files Outlive Apps — How a Team of Ten Built Obsidian, the Notes You Actually Own"
description: "Obsidian stores everything in local Markdown files, took no investor money, and became a global note-taking app with a team of about ten. We dissect the 'file over app' philosophy and the free-core + Sync/Publish revenue structure."
lead: "In a decade when note-taking apps rushed to the cloud, Obsidian bet the other way. Your data stays on your disk as plain Markdown files the company cannot read. We dissect how a zero-investor, ten-person team built a global product out of that one conviction."
category: productivity
tags: [markdown, local-first, electron, plugins, note-taking]
publishedAt: "2026-07-16"
updatedAt: "2026-07-16"
lastVerified: "2026-07-16"
serviceUrl: "https://obsidian.md/"
vendor: "Obsidian"
origin: "CA"
heroTheme: "obsidian"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 4.0 }
techStack:
  - layer: "Desktop app"
    name: "Electron"
    confidence: confirmed
    evidence: "Official changelog continuously records installer Electron updates (e.g., v1.12.7 updated to Electron v39.8.3)"
    evidenceUrl: "https://obsidian.md/changelog"
  - layer: "Editor engine"
    name: "CodeMirror"
    confidence: confirmed
    evidence: "Official changelog records updates (e.g., v1.13.1 'Upgraded CodeMirror to the latest version')"
    evidenceUrl: "https://obsidian.md/changelog"
  - layer: "Data format"
    name: "Local Markdown files"
    confidence: confirmed
    evidence: "Official principles state data is stored on your device, inaccessible to the company"
    evidenceUrl: "https://obsidian.md/about"
  - layer: "Extensibility"
    name: "Community plugin API (JavaScript)"
    confidence: confirmed
    evidence: "Official community plugin directory"
    evidenceUrl: "https://obsidian.md/plugins"
  - layer: "Sync"
    name: "Obsidian Sync (E2E encryption)"
    confidence: confirmed
    evidence: "Pricing page states end-to-end encryption and version history"
    evidenceUrl: "https://obsidian.md/pricing"
  - layer: "Official site delivery"
    name: "Cloudflare / Fastly"
    confidence: confirmed
    evidence: "Our own HTTP header observation (cf-ray coexisting with x-served-by: cache-nrt… / via: varnish; 2026-07-16)"
    evidenceUrl: "https://obsidian.md/"
sources:
  - label: "Obsidian official site"
    url: "https://obsidian.md/"
    accessedAt: "2026-07-16"
  - label: "Obsidian About (team, principles, funding policy)"
    url: "https://obsidian.md/about"
    accessedAt: "2026-07-16"
  - label: "Obsidian Pricing (free scope, Sync/Publish/Catalyst/Commercial)"
    url: "https://obsidian.md/pricing"
    accessedAt: "2026-07-16"
  - label: "Obsidian Changelog (primary record of Electron/CodeMirror updates)"
    url: "https://obsidian.md/changelog"
    accessedAt: "2026-07-16"
---

While Notion and Evernote spent a decade moving everything into the cloud, Obsidian chose the opposite — keep everything in files on your own machine — and became a global product for it. This is a dissection of a note-taking app run by roughly ten people (plus one office cat) with zero venture capital.

## Service Overview

Obsidian manages local Markdown files in a plain folder called a Vault. Notes connect through `[[links]]`, growing into a networked graph of knowledge.

:::fact
According to the official About page, the company was founded in 2020 by Shida Li and Erica Xu, with Steph Ango (kepano) as the current CEO. The team is about ten people (including five engineers), and the site states it is "100% supported by our users, not investors." Its five principles are Yours / Durable / Private / Malleable / Independent, including the statement that your data is stored on your device, inaccessible to the company. The app is free for both personal and commercial use.
:::

:::pull
Apps eventually die. Files remain — Obsidian's value proposition is not a feature but a redefinition of ownership.
:::

::scorecard

## UX Analysis

Obsidian's UX cannot be measured with the usual "ease of use" ruler.

- **Ownership is the core of the UX.** Notes are not records in a vendor's database; they are .md files on your disk. The anxieties of shutdowns, price hikes, and terms changes are structurally absent — and that trust in the tool is what produces decade-scale usage.
- **Local speed.** Search, links, and the graph respond instantly, offline. Against network-bound note apps, the difference becomes decisive past a few thousand notes.
- **Malleability.** Community plugins and themes let users rebuild it into their own instrument — from task management to Zettelkasten. Software rarely offers the experience of a tool that its user cultivates.
- **The weakness is the steep entrance.** Raw Markdown, countless settings, an ocean of plugins — for beginners it can be a tool that "doesn't tell you what to do." Paid cloud sync is also friction for mobile-first casual users.

Obsidian deliberately abandons universal comfort and goes all-in on people who want to grow their tools — and that very trade-off produces its intensely devoted community.

## Tech Stack

::techstack

:::fact
The desktop app is built on Electron and the editor on CodeMirror — both verifiable in the official changelog's update records. The Sync add-on states end-to-end encryption, meaning plaintext notes never sit on the company's servers. Our observation of the official site found Cloudflare and Fastly (varnish/cache-nrt) traces coexisting.
:::

:::guess
Storing data as plain Markdown files reads less like a technical choice than a business strategy: deliberately driving switching costs toward zero (any other tool can open your notes at any time) and retaining users through trust instead of lock-in. Opening the plugin API in JavaScript likewise functions as leverage — thousands of community developers compensating for a ten-person development team.
:::

## Business Model

The core stays free; the operation runs entirely on optional purchases.

:::fact
Per the pricing page: the app is free for personal and commercial use. Paid offerings are Sync for cross-device synchronization ($4/month billed annually), Publish for hosting notes as websites ($8/site/month billed annually), Catalyst for early beta access ($25 one-time), and an optional commercial license ($50/user/year).
:::

:::guess
The structure appears designed so that agreement with the philosophy is itself the reason to pay. Sync and Publish pinpoint exactly the weaknesses of local-first (multi-device, sharing) without competing with the free core. The absence of VC money constrains growth speed, but as collateral for the principle of answering to no one but users, it converts into competitive strength. Working backwards from a ten-person team, the P&L plausibly sustains itself on hundreds of thousands of paying users — no more needed.
:::

Files outlive apps. To the growing anxiety of the AI era — where should my knowledge live? — Obsidian gives the most conservative answer, which is precisely what makes it the most forward-looking one.
