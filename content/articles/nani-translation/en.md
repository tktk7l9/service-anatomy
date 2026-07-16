---
service: "Nani Translate"
title: "Turning Translation into a Conversation — Nani Translate as the Model Indie SaaS"
description: "Nani Translate is an AI translation tool by catnose, the indie developer behind Zenn. We dissect its TTFT-driven LLM routing, the Electron + Next.js architecture, and its freemium design — based on the developer's own first-hand write-ups."
lead: "Instead of a machine that returns a translation and nothing else, it reproduces the experience of consulting a native speaker — nuance notes, tone variants, and example sentences included. Nani Translate, the new product from catnose (creator of Zenn), reads like a textbook on AI-era translation UX and indie SaaS technology choices."
category: ai-tool
tags: [ai, translation, electron, nextjs, indie-dev]
publishedAt: "2026-07-16"
updatedAt: "2026-07-16"
lastVerified: "2026-07-16"
serviceUrl: "https://nani.now/ja"
vendor: "Kioku LLC"
origin: "JP"
heroTheme: "nani-translate"
scores: { product: 4.0, ux: 4.5, tech: 4.0, business: 3.5 }
techStack:
  - layer: "Web / backend"
    name: "Next.js (App Router)"
    confidence: confirmed
    evidence: "Our own HTTP header observation (x-powered-by: Next.js, rsc vary headers; 2026-07-16) plus the developer's own tech write-up"
    evidenceUrl: "https://zenn.dev/catnose99/articles/nani-translate"
  - layer: "Hosting"
    name: "Vercel"
    confidence: confirmed
    evidence: "HTTP header observation (server: Vercel, x-vercel-id=hnd1 [Tokyo]; 2026-07-16)"
    evidenceUrl: "https://zenn.dev/catnose99/articles/nani-translate"
  - layer: "Desktop app"
    name: "Electron"
    confidence: confirmed
    evidence: "Developer's tech write-up: tried Tauri first, then chose Electron (Electron Vite + Electron Builder) for startup speed and other reasons"
    evidenceUrl: "https://zenn.dev/catnose99/articles/nani-translate"
  - layer: "API layer"
    name: "Hono"
    confidence: confirmed
    evidence: "Developer's tech write-up (Hono running on Next.js Route Handlers)"
    evidenceUrl: "https://zenn.dev/catnose99/articles/nani-translate"
  - layer: "Database"
    name: "Turso (SQLite) + Drizzle"
    confidence: confirmed
    evidence: "Developer's tech write-up"
    evidenceUrl: "https://zenn.dev/catnose99/articles/nani-translate"
  - layer: "Cache / rate limiting"
    name: "Upstash Redis"
    confidence: confirmed
    evidence: "Developer's tech write-up"
    evidenceUrl: "https://zenn.dev/catnose99/articles/nani-translate"
  - layer: "LLM APIs"
    name: "Google / OpenAI / Groq"
    confidence: confirmed
    evidence: "Developer's tech write-up: providers are switched by TTFT (time to first token); Google/Groq preferred for basic translation"
    evidenceUrl: "https://zenn.dev/catnose99/articles/nani-translate"
  - layer: "Payments"
    name: "Stripe"
    confidence: confirmed
    evidence: "Developer's tech write-up"
    evidenceUrl: "https://zenn.dev/catnose99/articles/nani-translate"
sources:
  - label: "Nani Translate official site (features)"
    url: "https://nani.now/ja/about"
    accessedAt: "2026-07-16"
  - label: "Nani Translate pricing page (Free / PRO)"
    url: "https://nani.now/ja/pricing"
    accessedAt: "2026-07-16"
  - label: "Zenn: the tech behind Nani Translate (by developer catnose)"
    url: "https://zenn.dev/catnose99/articles/nani-translate"
    accessedAt: "2026-07-16"
  - label: "PR TIMES: Kioku LLC launches AI translation tool 'Nani !?'"
    url: "https://prtimes.jp/main/html/rd/p/000000004.000170738.html"
    accessedAt: "2026-07-16"
---

If DeepL and Google Translate are machines that return translations, Nani Translate aims to be the native speaker at the next desk. It doesn't stop at the translated text: in a single pass it also returns nuance notes, tone-by-tone rewrites, and example sentences. Its creator is catnose — known to virtually every Japanese engineer as the solo developer behind the tech-publishing platform Zenn. This article dissects what may be the most polished form of indie SaaS today.

## Service Overview

Nani Translate is an AI translation tool from Kioku LLC. Alongside the web version there are macOS/Windows desktop apps: select text in any application, hit a shortcut, and translation starts.

:::fact
According to the official site, the main features are: (1) translations in multiple tones (casual/formal, etc.), (2) nuance explanations with example sentences, (3) AI proofreading, (4) screenshot and image translation, and (5) locally-stored translation history. The free plan covers basic translation, proofreading, and image translation; the PRO plan (¥1,000/month, ¥12,000/year) unlocks higher-grade models, a 100,000-character limit for long texts, and over 2 million tokens per month.
:::

Down to the name — "Nani?" is the Japanese equivalent of "wait, what?" — it is designed less as a tool and more as a companion.

:::pull
A translation machine only needs to return the text. Returning the nuance is what turns it into a conversation — Nani Translate's invention is a change in translation's output format.
:::

::scorecard

## UX Analysis

Nani Translate's UX boils down to two things: **speed** and **context**.

- **Shortcut-first design.** It never makes you open a browser tab to translate. Select text anywhere in the OS, press the shortcut, done — turning translation from an interruption into part of the work itself.
- **Speed treated as a feature.** As described below, LLM providers are routed by time-to-first-token. Streaming that starts painting characters instantly translates directly into perceived quality.
- **Variants instead of a single answer.** The same sentence comes back in multiple registers, so users choose rather than receive — with language learning as a side effect.
- **Explicit privacy.** Translation history is stated to stay local, lowering the barrier for business documents.

Against heavyweight competition — DeepL, Google Translate, and raw ChatGPT — the differentiation is the speed and context of a purpose-built UI.

## Tech Stack

The architecture is unusually well-documented because the developer published a detailed write-up on Zenn. We also observed the HTTP response headers ourselves on July 16, 2026, confirming the web version runs on Next.js (App Router) hosted on Vercel (Tokyo region).

::techstack

:::fact
Per the developer's write-up: the desktop app was first prototyped in Tauri but shipped on Electron (Electron Vite + Electron Builder), partly for startup speed. The UI is shared with the web version via TypeScript / React / Tailwind CSS in a pnpm + Turborepo monorepo. LLM providers — Google, OpenAI, Groq — are switched based on TTFT, with Google/Groq preferred for basic translation.
:::

:::guess
Choosing Electron over the lighter, newer Tauri looks like an expression of catnose's consistent philosophy: pick the boring, proven option. The database (Turso), cache (Upstash), and payments (Stripe) are all managed services — plausibly a deliberate setup so a solo developer never burns time on infrastructure operations. Not owning a translation model and instead routing across multiple LLM APIs also means the product improves automatically as the models do.
:::

## Business Model

Pricing is a two-tier freemium — Free and PRO (¥1,000/month or ¥12,000/year) — with team and enterprise plans available.

:::guess
The dominant cost is metered LLM API usage. The free plan's limits (4,000 characters per translation, token caps) read as a way of budgeting API costs as user-acquisition spend. The TTFT-based preference for Google/Groq is a UX optimization, but plausibly doubles as cost control, reserving pricier models for where they matter.
:::

The biggest risks for an indie translation tool are OS-level commoditization (on-device translation à la Apple Intelligence) and the spread of general-purpose chat AI. Yet the select-and-translate dedicated pathway, and the translation-plus-explanation output format, are structurally hard for general tools to copy. Add the secret weapon proven with Zenn — a developer who is himself the strongest marketing channel — and you have a showcase of indie SaaS survival strategy.

Redefining translation as consultation, and engineering speed around TTFT: Nani Translate is one of the most refined indie answers yet to the question of how to turn AI into a product feature.
