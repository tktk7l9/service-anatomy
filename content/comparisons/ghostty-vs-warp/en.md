---
title: "One Terminal Made Itself Unsellable, the Other Opened Its Client and Sells Agent Work — Ghostty and Warp Start From the Same GPU Rendering and Choose Opposite Ways to Exist"
description: "Ghostty and Warp are both terminals written in native code that draw the screen on the GPU. How they keep going points in opposite directions. Ghostty has no revenue model and runs under the fiscal sponsorship of the non-profit Hack Club with a ledger that is public down to each transaction. Warp is a venture-backed company that opened its client under AGPL v3 and sells agent work in credits. This lines up architecture, what is open and under which licence, login and network behaviour, AI features, platforms and funding, from each side's official information."
lead: "A terminal is a tool almost nobody is used to paying for. Ghostty did not add a price list; it fixed a structure in which the project cannot be sold or repurposed. Warp gives the terminal away, opened its source code as well, and put the price on the agents working behind it. A mechanical comparison finds only two shared items in their tech stacks: Metal and Next.js. Using the two dissections and each side's official information, this reads how a similar foundation led to such different ways of keeping going."
slugA: "ghostty"
slugB: "warp"
publishedAt: "2026-10-02"
updatedAt: "2026-10-02"
lastVerified: "2026-10-02"
sources:
  - label: "Ghostty official: About (the three goals of fast, feature-rich and native; libghostty; a free-time project)"
    url: "https://ghostty.org/docs/about"
    accessedAt: "2026-10-02"
  - label: "Ghostty official: Features (supported platforms, Metal/OpenGL, Windows planned for the future)"
    url: "https://ghostty.org/docs/features"
    accessedAt: "2026-10-02"
  - label: "Ghostty official: Download (how to get it on macOS and Linux, latest version 1.3.1)"
    url: "https://ghostty.org/download"
    accessedAt: "2026-10-02"
  - label: "Ghostty official: Financial Support (Hack Club fiscal sponsorship, use of funds, $60 per hour, BDFL, 7% fee)"
    url: "https://ghostty.org/docs/sponsor"
    accessedAt: "2026-10-02"
  - label: "Mitchell Hashimoto: Ghostty Is Now Non-Profit (2025-12-03)"
    url: "https://mitchellh.com/writing/ghostty-non-profit"
    accessedAt: "2026-10-02"
  - label: "HCB: Ghostty's public ledger (balance, total raised, transactions)"
    url: "https://hcb.hackclub.com/ghostty"
    accessedAt: "2026-10-02"
  - label: "GitHub: ghostty-org/ghostty (README, MIT licence, libghostty-vt, crash reports)"
    url: "https://github.com/ghostty-org/ghostty"
    accessedAt: "2026-10-02"
  - label: "Warp official: home page (current positioning and the three products)"
    url: "https://www.warp.dev/"
    accessedAt: "2026-10-02"
  - label: "Warp official blog: How Warp Works (2021-07-12)"
    url: "https://www.warp.dev/blog/how-warp-works"
    accessedAt: "2026-10-02"
  - label: "Warp official blog: Warp for Linux (wgpu, winit, cosmic-text; about 98% of code shared; 2024-02-22)"
    url: "https://www.warp.dev/blog/warp-for-linux"
    accessedAt: "2026-10-02"
  - label: "GitHub: warpdotdev/warp (README, licences, founding sponsor)"
    url: "https://github.com/warpdotdev/warp"
    accessedAt: "2026-10-02"
  - label: "GitHub: warpdotdev/warp FAQ.md (what is open and why these licences)"
    url: "https://github.com/warpdotdev/warp/blob/master/FAQ.md"
    accessedAt: "2026-10-02"
  - label: "GitHub: warpdotdev/warp Cargo.toml (the wgpu entry and the winit fork)"
    url: "https://github.com/warpdotdev/warp/blob/master/Cargo.toml"
    accessedAt: "2026-10-02"
  - label: "Warp official blog: Warp is now open-source (2026-04-28)"
    url: "https://www.warp.dev/blog/warp-is-now-open-source"
    accessedAt: "2026-10-02"
  - label: "Warp official blog: Lifting the login requirement (2024-11-22)"
    url: "https://www.warp.dev/blog/lifting-login-requirement"
    accessedAt: "2026-10-02"
  - label: "Warp official docs: Using Warp Offline (first launch and the anonymous user ID)"
    url: "https://docs.warp.dev/support-and-community/troubleshooting-and-support/using-warp-offline/"
    accessedAt: "2026-10-02"
  - label: "Warp official docs: Privacy and data control (telemetry)"
    url: "https://docs.warp.dev/support-and-community/privacy-and-security/privacy/"
    accessedAt: "2026-10-02"
  - label: "Warp official: pricing page"
    url: "https://www.warp.dev/pricing"
    accessedAt: "2026-10-02"
  - label: "Warp official docs: Credits"
    url: "https://docs.warp.dev/support-and-community/plans-and-billing/credits/"
    accessedAt: "2026-10-02"
  - label: "Warp official: download page (macOS, Windows, Linux)"
    url: "https://www.warp.dev/download"
    accessedAt: "2026-10-02"
  - label: "Warp official blog: Introducing the Warp Agent CLI (2026-08-04)"
    url: "https://www.warp.dev/blog/introducing-the-warp-agent-cli-coding-agent"
    accessedAt: "2026-10-02"
  - label: "TechCrunch: Warp raises $23M to build a better terminal (2022-04-05)"
    url: "https://techcrunch.com/2022/04/05/warp-raises-23m-to-build-a-better-terminal/"
    accessedAt: "2026-10-02"
  - label: "Warp official blog: Warp Drive and the Series B (2023-06-21)"
    url: "https://www.warp.dev/blog/warp-drive-series-b"
    accessedAt: "2026-10-02"
---

[Ghostty](/en/articles/ghostty) and [Warp](/en/articles/warp) are both described as GPU-rendered terminals written in native code. They start close together. But line up who owns each one, what is open, and where the money comes from, and the two give nearly opposite answers. This article does not rank them. This site has not used either one hands-on; what follows compares what each side's official documents and public repositories say.

## A similar foundation, and only Metal and Next.js in common

First, the two describe themselves differently today.

:::fact
Ghostty's official About page describes it as "a terminal emulator that differentiates itself by being fast, feature-rich, and native." On the same page its creator, Mitchell Hashimoto, writes that it is a "passion project" he works on in his free time and that it is not a full-time job for anyone involved. Warp's home page title (checked on October 2, 2026) is "The Open Platform for Automating Development," and it lists three products: Warp Factories, Warp Terminal and Warp Agent CLI. The README of the public repository calls Warp "an agentic development environment, born out of the terminal."
:::

They are also built differently. Both reuse one codebase across several operating systems, but they make the screen in opposite ways.

:::fact
According to Ghostty's official About page, its core is libghostty, a C-ABI compatible library written in Zig that handles terminal emulation, font handling and rendering. The interface on top is separate per OS: Swift (AppKit and SwiftUI) on macOS, and Zig calling GTK4 on Linux. Per the official Features page, rendering uses Metal on macOS and OpenGL on Linux. Warp, according to its official blog post "How Warp Works" (2021), briefly tried Electron, then moved to Rust and Metal, and because there was no stable Rust UI framework, built its own together with Nathan Sobo, co-founder of Atom. The official Linux post (2024) says the Linux version is built on wgpu, winit and cosmic-text and shares about 98% of its code with the Mac app. In the public repository's Cargo.toml (checked on October 2, 2026), wgpu 30.0.0 is specified with the dx12, gles, metal and vulkan features.
:::

This site's comparison page mechanically matches the tech stacks of the two dissections. Only two items overlapped: Metal and Next.js. Next.js is about the two official websites, so for the terminals themselves the only overlap is Metal. Language (Zig and Rust), interface parts (OS-standard and self-made) and Linux rendering (OpenGL and wgpu) all fell on separate sides.

:::pull
Ghostty leaves the interface to the OS and hands out its core as a part. Warp draws the interface itself and stacks its product on top of that interface.
:::

:::guess
This difference appears to come from what each wants to put on screen. Ghostty states the goal of behaving the way an application is expected to behave in its desktop environment, so leaving tabs and splits to OS-standard parts fits. Warp puts its own interface on screen — "blocks" that group a command with its output, an editor-like input, conversations with agents — so it presumably needed its own UI framework that can draw the same thing on any OS. On speed, both state goals officially, but this site could not confirm comparative figures with a named benchmark and procedure, so no numbers are given here.
:::

## What is open, and which licence each chose

Both publish source code. What is open, and which way the chosen licence points, differ.

:::fact
Ghostty is under the MIT licence, per the official Financial Support page and the GitHub repository. The README describes libghostty as a library anyone can use "to build a terminal emulator or embed a terminal into their own applications," and says libghostty-vt, the first piece split out, is usable from Zig and C and is compatible with macOS, Linux, Windows and WebAssembly. The same README also says libghostty has not been tagged with a version yet and that the API signatures are still in flux.
:::

:::fact
Warp opened its client on April 28, 2026. According to the repository's FAQ, the app and most crates are under AGPL v3, and the UI framework crates (warpui_core and warpui) are under MIT. The server, the Warp Drive backend, hosted authentication and Oz, the agent orchestration layer, are not in the repository and remain proprietary today. The built-in agent harness runs server-side and is not open. As the reason for AGPL, the FAQ explains that a permissive licence would let someone fork the client and ship a closed-source product, and that Warp wanted modifications to stay open. Contributions require a CLA (contributor licence agreement).
:::

Both licences were chosen to decide how the code gets taken up by others. They decide it in opposite ways. Ghostty chose MIT as a project that wants to be embedded in other companies' products. Warp chose AGPL to keep the client from being turned into a closed product, and put only the UI framework, which is useful in other apps, under MIT.

:::guess
The scope of what is open appears to match how each keeps going. Ghostty has nothing to sell, so opening everything under a permissive licence costs it little, and each new place it is used moves it closer to its purpose. Warp keeps the priced part — the core of the agent and the cloud execution platform — on the server side, so opening the client presumably does not move the point where billing starts. Which one is "more open" depends on what is counted. By the share of the whole that can be read, Ghostty is wider; by the power to keep derivatives open, Warp's AGPL is stronger.
:::

## Accounts, data leaving the machine, and AI

The differences closest to everyday use gather in these three.

:::fact
For Ghostty, the official About, Features and Download pages this site checked (October 2, 2026) did not describe any account sign-up or login step, or any AI or agent feature. The README states that crash reports are saved to disk and are not automatically sent anywhere off the machine. To send one, the user runs a command themselves.
:::

:::fact
Warp announced on its official blog on November 22, 2024 that it can be used without creating an account. According to the official docs, the first launch must be online; at that point a unique user ID is created to meter AI usage, and if the user stays logged out it is attached to an anonymous user account. After the initial setup, the core terminal features work offline. On telemetry, Warp publishes the list of events it sends, lets users watch traffic in the in-app Network Log, and lets them turn off "Help improve Warp" and crash reports in settings. The same page carries a note that telemetry must be enabled to use AI features on the Free plan, while paid plans can opt out and keep using AI. It says Warp uses Sentry for crash reporting and RudderStack for app analytics.
:::

AI is where the difference is clearest. Warp has a built-in agent that runs commands when asked in plain language in the input, and goes as far as a platform for running many agents in the cloud. Ghostty's official pages list no such features.

:::fact
The two are not mutually exclusive, though. Warp's official blog (August 4, 2026) announced the Warp Agent CLI, the built-in agent split out as a standalone tool, and says it runs in Ghostty, iTerm 2, VS Code, the built-in OS terminals, or whatever terminal the user prefers. On the pricing page, this CLI is included in the Free plan.
:::

:::guess
What this suggests is that, for Warp, the terminal window is no longer the only entrance. Making the agent run in other terminals appears to follow from the product for sale moving from the window to the amount of agent work. Seen from Ghostty's side, not building in AI is presumably less a missing feature than the result of keeping its role to the terminal layer. Which agent runs on top of it is left to the user.
:::

Supported operating systems differ as well. Ghostty's official Features page says it runs on macOS and Linux and that Windows support is planned for the future. The official binary is the macOS one; Linux relies on each distribution's packages. Warp's download page lists builds for macOS, Windows and Linux.

## Where the money comes from is where they are furthest apart

This is the largest difference between the two.

:::fact
On December 3, 2025, Ghostty came under the fiscal sponsorship of Hack Club, a US 501(c)(3) non-profit. According to the creator's announcement, the names, marks and intellectual property were transferred to Hack Club, copyright stays with individual contributors, and the licence remains MIT. The official Financial Support page says Ghostty "cannot be sold, pivoted, or shuttered on a whim," and limits the use of funds to three things: paying contributors (everyone at the same $60 per hour), services, and support for upstream projects. The creator is the largest donor, and the page states that not a single cent goes to him. Seven percent of donations go to Hack Club. When this site checked HCB's public API on October 2, 2026, the balance was $35,772.13 and the total raised was $79,060.93.
:::

:::fact
Warp is a venture-backed company. According to TechCrunch (April 5, 2022), it raised a $6 million seed round led by GV and a $17 million Series A led by Dylan Field, co-founder of Figma. Its official blog (June 21, 2023) announced a $50 million Series B led by Sequoia Capital. The publicly announced total comes to $73 million (the sum is this site's calculation). Revenue comes from monthly plans and credits: per the pricing page (checked on October 2, 2026), Free is $0, Build is $20 a month with 1,500 credits, Max is $200 a month with 18,000 credits, Business is $50 per user per month, and Enterprise is custom. According to the official docs, the Free plan does not include bundled AI usage for the built-in agent. The README of the public repository names OpenAI as the founding sponsor of the repository.
:::

:::pull
Ghostty shows where the money goes, one transaction at a time. Warp shows where it put the price, in a price list.
:::

The two amounts are different kinds of money and cannot simply be compared: one is a running total of donations, the other a running total of investment. Even so, public information supports two statements: the scale of funding differs by three orders of magnitude, and one side carries no expectation of a return to investors while the other does. Warp's founder, Zach Lloyd, writes in the open-source announcement that opening the client comes from the desire to build a successful business, and that although Warp is a VC-funded startup, it does not have the resources to compete on price or massively subsidize usage.

:::guess
Each form appears to carry its own uncertainty. Ghostty removed the worry about a future change of direction through structure, while its creator himself describes the project as being in an "abnormally fortunate position" to have him as a backer, so broadening its funding is presumably still ahead. Warp has more money and people to put into development, while it needs to produce revenue, so the line between what is free and what is sold may keep moving. Warp has in fact, over a few years, dropped the login requirement, changed its pricing unit from request counts to the amount of work, and opened its client. That can be read as responding to its users, and it can also be read as a reason to assume the line will move.
:::

## What a user is actually choosing between

Line up the feature lists and these two look like "a terminal with AI and a terminal without." Reading the official information together shows a choice that sits a little earlier than that.

One is what you want a terminal to do. Ghostty keeps its role to the terminal layer and hands that layer out as a part for others. Warp is remaking the terminal into a place to work with agents, and extending its product to the cloud platform beyond it.

The other is what kind of promise you treat as the basis for trust. Ghostty's promise is in its structure: it cannot be sold, its funds cannot be used privately, and its ledger is public. Warp's promise is in the published client code, the list of what it sends, and the price list. The first offers "this cannot be changed"; the second offers "this can be seen."

And the two can be used at the same time. By Warp's own account, its agent runs inside Ghostty too. [Ghostty](/en/articles/ghostty) and [Warp](/en/articles/warp) read less like rivals on the same shelf than like two separate answers to one question: whose is the terminal, and how far does the tool extend?
