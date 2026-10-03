---
service: "Zellij"
title: "Built on Donations and Savings, Now Selling Sharing — How Zellij Plans to Keep a Free Multiplexer Alive"
description: "Zellij is an open-source terminal workspace written in Rust. We dissect its design (WebAssembly plugins, session resurrection, a built-in web client) and its funding: years of donations, and now Zellij.online, a hosted session-sharing service in closed beta, using public information only."
lead: "A terminal multiplexer splits your terminal and keeps your work alive after a disconnect, and people expect it to be free. Zellij builds even its own UI out of WebAssembly plugins, and its full-time development has run on donations and savings. In August 2026 the maintainers said plainly that they are starting a paid hosted service. Here is how the pieces fit."
category: dev-tool
tags: [terminal, rust, open-source, webassembly, developer-tools]
publishedAt: "2026-10-01"
updatedAt: "2026-10-02"
lastVerified: "2026-10-02"
serviceUrl: "https://zellij.dev/"
vendor: "zellij-org"
origin: "AT"
heroTheme: "zellij"
scores: { product: 4.0, ux: 4.0, tech: 4.5, business: 2.5 }
techStack:
  - layer: "Implementation language"
    name: "Rust"
    confidence: confirmed
    evidence: "GitHub API language byte counts put Rust at about 98.0% (12,455,954 of 12,709,524 bytes; fetched 2026-10-01)"
    evidenceUrl: "https://api.github.com/repos/zellij-org/zellij/languages"
  - layer: "Process model"
    name: "Client / server (Protocol Buffers contract)"
    confidence: confirmed
    evidence: "The 0.44.0 release post says a new client/server contract was created and is enforced with protocol buffers; the repository is split into zellij-client and zellij-server crates"
    evidenceUrl: "https://zellij.dev/news/remote-sessions-windows-cli/"
  - layer: "Plugin runtime"
    name: "WebAssembly / WASI (wasmi)"
    confidence: confirmed
    evidence: "zellij-server's Cargo.toml depends on wasmi 1.1.0 and wasmi_wasi; the 0.44.0 post describes the migration from wasmtime to wasmi"
    evidenceUrl: "https://github.com/zellij-org/zellij/blob/main/zellij-server/Cargo.toml"
  - layer: "Async runtime"
    name: "Tokio"
    confidence: confirmed
    evidence: "The 0.44.0 post says the async runtimes were reduced to a single tokio runtime"
    evidenceUrl: "https://zellij.dev/news/remote-sessions-windows-cli/"
  - layer: "Configuration and layouts"
    name: "KDL"
    confidence: confirmed
    evidence: "The official FAQ says layouts are configuration files written in KDL and that configuration lives in config.kdl"
    evidenceUrl: "https://zellij.dev/faq/"
  - layer: "Session persistence"
    name: "Session resurrection (layout serialization)"
    confidence: confirmed
    evidence: "The documentation says each session is serialized and kept in the user's cache folder, to be recreated after a quit or a crash"
    evidenceUrl: "https://zellij.dev/documentation/session-resurrection.html"
  - layer: "Remote access"
    name: "Built-in web server / web client"
    confidence: confirmed
    evidence: "The documentation describes a built-in web server that is off by default (default 127.0.0.1:8082, login-token authentication, HTTPS required on any interface other than 127.0.0.1)"
    evidenceUrl: "https://zellij.dev/documentation/web-client.html"
  - layer: "Official site generator"
    name: "Hugo"
    confidence: confirmed
    evidence: "Our observation: the home page HTML carries meta generator 'Hugo 0.82.0' (2026-10-01)"
    evidenceUrl: "https://zellij.dev/"
  - layer: "Official site delivery"
    name: "GitHub Pages (Fastly)"
    confidence: confirmed
    evidence: "Our curl -sI observation: server: GitHub.com, x-github-request-id, via: 1.1 varnish, x-served-by: cache-nrt-…, x-fastly-request-id (2026-10-01)"
    evidenceUrl: "https://zellij.dev/"
  - layer: "Web analytics"
    name: "GoatCounter"
    confidence: likely
    evidence: "The home page HTML loads gc.zgo.at/count.js (our observation, 2026-10-01). The privacy policy of zellij.online, run by the same maintainers, names GoatCounter, but we found no written statement covering zellij.dev itself"
    evidenceUrl: "https://zellij.online/privacy/"
sources:
  - label: "Zellij official site (home: downloads, mention of the paid hosted service)"
    url: "https://zellij.dev/"
    accessedAt: "2026-10-01"
  - label: "Zellij About (design philosophy)"
    url: "https://zellij.dev/about/"
    accessedAt: "2026-10-01"
  - label: "Zellij FAQ (features, supported OSes, maintenance, relation to tmux/screen)"
    url: "https://zellij.dev/faq/"
    accessedAt: "2026-10-01"
  - label: "Zellij.online explainer page (operator, commercial nature, funding rationale)"
    url: "https://zellij.dev/zellij-online/"
    accessedAt: "2026-10-01"
  - label: "Zellij.online (waitlist landing page)"
    url: "https://zellij.online/"
    accessedAt: "2026-10-01"
  - label: "Zellij.online Legal Notice (operating company poor.dev GmbH)"
    url: "https://zellij.online/legal/"
    accessedAt: "2026-10-01"
  - label: "Zellij.online Privacy Policy (use of GitHub Pages and GoatCounter)"
    url: "https://zellij.online/privacy/"
    accessedAt: "2026-10-01"
  - label: "Zellij 0.45.0 release post (nested sessions, Kitty graphics, mobile web UI, Zellij.online announcement)"
    url: "https://zellij.dev/news/nested-sessions-kitty-graphics-new-ui/"
    accessedAt: "2026-10-02"
  - label: "Zellij 0.44.0 release post (native Windows, attach over HTTPS, wasmi/tokio migration, protocol buffers)"
    url: "https://zellij.dev/news/remote-sessions-windows-cli/"
    accessedAt: "2026-10-01"
  - label: "Zellij 0.43.0 release post (web client, zellij-no-web)"
    url: "https://zellij.dev/news/web-client-multiple-pane-actions/"
    accessedAt: "2026-10-01"
  - label: "Zellij 0.39.0 release post (session resurrection, loading plugins from the web)"
    url: "https://zellij.dev/news/session-resurrection-ui-components/"
    accessedAt: "2026-10-01"
  - label: "Zellij documentation: Session Resurrection"
    url: "https://zellij.dev/documentation/session-resurrection.html"
    accessedAt: "2026-10-01"
  - label: "Zellij documentation: Layouts (commands in remote-URL layouts are suspended)"
    url: "https://zellij.dev/documentation/layouts.html"
    accessedAt: "2026-10-02"
  - label: "Zellij documentation: Plugins"
    url: "https://zellij.dev/documentation/plugins.html"
    accessedAt: "2026-10-01"
  - label: "Zellij documentation: Plugin API Permissions"
    url: "https://zellij.dev/documentation/plugin-api-permissions.html"
    accessedAt: "2026-10-01"
  - label: "Zellij documentation: Web Client"
    url: "https://zellij.dev/documentation/web-client.html"
    accessedAt: "2026-10-01"
  - label: "Zellij documentation: Installation"
    url: "https://zellij.dev/documentation/installation.html"
    accessedAt: "2026-10-01"
  - label: "GitHub: zellij-org/zellij (README, sponsor credits)"
    url: "https://github.com/zellij-org/zellij"
    accessedAt: "2026-10-01"
  - label: "GitHub API: zellij-org/zellij (creation date, licence, stars, forks)"
    url: "https://api.github.com/repos/zellij-org/zellij"
    accessedAt: "2026-10-01"
  - label: "GitHub API: language byte counts for zellij-org/zellij"
    url: "https://api.github.com/repos/zellij-org/zellij/languages"
    accessedAt: "2026-10-01"
  - label: "GitHub: zellij-org/zellij Releases (release history, distributed binaries)"
    url: "https://github.com/zellij-org/zellij/releases"
    accessedAt: "2026-10-01"
  - label: "GitHub: GOVERNANCE.md (decision-making structure)"
    url: "https://github.com/zellij-org/zellij/blob/main/GOVERNANCE.md"
    accessedAt: "2026-10-01"
  - label: "GitHub: zellij-server/Cargo.toml (wasmi dependency)"
    url: "https://github.com/zellij-org/zellij/blob/main/zellij-server/Cargo.toml"
    accessedAt: "2026-10-01"
  - label: "GitHub Sponsors: imsnif (donation goal, sponsor count)"
    url: "https://github.com/sponsors/imsnif"
    accessedAt: "2026-10-02"
---

Split the terminal into panes, and keep the work alive when SSH drops. Tools that do this are called terminal multiplexers, and they have been given away for free for decades. Zellij entered that field in 2020 as an open-source project written in Rust, and its site calls it a "Terminal Workspace with Batteries Included". This dissection uses only public documents, the repository and HTTP headers. It is not a review based on our own extended use of the tool.

## Service Overview

Zellij runs inside whatever terminal emulator you already have and manages panes, tabs and sessions. The official FAQ stresses that it does not tie you to a specific terminal emulator, and that your existing shell, editor and dotfiles keep working.

:::fact
According to the GitHub API, the repository zellij-org/zellij was created on 1 September 2020 and is licensed under MIT. When we fetched it on 1 October 2026 (UTC) it had 35,610 stars and 1,470 forks, and Rust accounted for about 98.0% of the code by bytes. There were 71 releases: the first tag was v0.1.0-alpha on 21 January 2021 and the latest was v0.45.1 on 28 August 2026. The latest release ships binaries for Linux (x86_64 and aarch64, musl), macOS (x86_64 and aarch64) and Windows (x86_64, with an MSI installer).
:::

:::fact
The official FAQ says Zellij is developed full-time by Aram Drevekenin with support from the community and sponsors, and states that "Zellij will always remain free and open-source." The repository's GOVERNANCE.md names him BDFL (Benevolent Dictator for Life): he has the final say on large decisions about finances and collaboration and holds a veto, while the document says the group strives to decide by consensus and that the veto is a last resort. It lists 13 current organization members.
:::

The FAQ also contains a line worth noting: although Zellij offers capabilities similar to tmux and screen, it "does not consider itself a tmux or screen replacement." The project positions itself as a workspace built on top of the terminal, not as a substitute for an existing tool.

:::pull
In Zellij the tab bar and the status bar are plugins. Building its own UI with its own extension mechanism sits at the centre of the design.
:::

::scorecard

## UX Analysis

What follows covers design choices described in the official documents, not our own impressions of using the tool.

- **Nothing to memorise first.** The FAQ says the status bar shows the available shortcuts on screen, so there is nothing to learn by heart. Version 0.43.0 added tooltips that show the hints only when needed, for people who prefer not to give up screen space.
- **A way out of key collisions.** For users whose editor (vim, for example) fights with the default bindings, there is an official "Unlock-First (non-colliding)" preset, where you unlock the interface before using a Zellij mode.
- **Floating and stacked panes.** Panes that float above the layout and panes stacked vertically with one expanded are first-class features. Version 0.45.0 changed the default look: pane frames are off and only a title line remains, with a documented setting to bring the classic frames back.
- **A pause before anything destructive.** When a session is resurrected, saved commands do not run straight away. They wait behind a "Press ENTER to run..." banner, and the documentation gives the reason: avoiding accidents with commands like `rm -rf`. According to the layouts documentation, commands in a layout loaded from a remote URL are held back the same way.
- **Less friction on upgrade.** In 0.45.0 the release-notes screen that appears after an update detects new keybindings missing from your config file and offers to add them with one keypress.
- **Several people in one session.** The FAQ describes "True Multiplayer": multiple users connect to the same session and each gets their own coloured cursor. Version 0.45.0 sizes tabs per client, so one person on a small screen no longer shrinks the view of people who are looking at a different tab.

The pages differ on supported platforms. The 0.44.0 release post says Zellij now runs natively on Windows, and the installation guide has steps for the Windows binary, while the FAQ's platform list still read "Windows: Via WSL" on 2026-10-01. Going by the release post and the distributed binaries, native support looks like the current state.

## Tech Stack

::techstack

:::fact
The documentation describes the plugin system as "Webassembly / WASI" and says "Zellij itself builds its UI from plugins." The FAQ lists the built-in plugins: the tab bar and status bar, the Strider file picker, the session manager, the multiple-pane selection interface and the configuration screen. Rust is currently the only officially supported plugin language, and support for other languages is described as a community effort. Plugins are permission-gated: the documentation lists 14 permissions, including reading and changing application state, running commands, writing to STDIN, reading pane contents and controlling the web server, and a plugin has to ask the user to grant them.
:::

:::fact
The 0.44.0 release post lists these internal changes. The plugin runtime moved from wasmtime to wasmi (the stated reasons are a smaller binary and better portability). The async runtimes were reduced to a single tokio runtime. A client/server contract was defined with protocol buffers. On that last point the post explains that every version upgrade used to orphan existing sessions, and that future versions will be able to connect to existing ones.
:::

:::fact
Session resurrection, introduced in 0.39.0, serializes a session as a human-readable layout and keeps it in the cache folder. By default it saves the arrangement of panes and tabs and the command running in each pane, and configuration can add the pane viewport and scrollback. The built-in web server, introduced in 0.43.0, is off by default and requires login-token authentication, with tokens stored hashed in a local database. The documentation says HTTPS with a user-provided certificate is a hard requirement on any interface other than 127.0.0.1. Version 0.44.0 added attaching from a terminal with `zellij attach https://…` and read-only tokens. A zellij-no-web build without the web server is also distributed.
:::

The official site itself is modest. By our observation zellij.dev is a static site generated with Hugo 0.82.0 and served from GitHub Pages (`server: GitHub.com`, plus Fastly headers). The documentation is mdBook output, and the only analytics script was `gc.zgo.at/count.js`.

:::guess
Building the UI as plugins appears to be what makes development workable with few people. The 0.44.0 post says it is "Zellij development policy to create new UI interfaces as built-in plugins", so each new feature opens the same API to third parties. Core development and ecosystem work become the same task, which would let the extension surface grow even with limited full-time staff. The move to wasmi landed in the same 0.44.0 release as native Windows support, so it may have been a choice that put portability across platforms first.
:::

:::guess
The last three releases added a built-in web server, attach over HTTPS, read-only sharing and a mobile web UI, and that sequence seems to overlap with the groundwork a hosted service would need. How Zellij.online relays or encrypts sessions is not public, though, and we could not confirm whether it uses the same implementation as the web server in the open-source build.
:::

## Business Model

How does a free terminal multiplexer pay its developer's bills? Zellij's public pages answer that question quite directly.

:::fact
Donations go through the maintainer's personal GitHub Sponsors, Ko-fi and Liberapay accounts, the three set in the repository's FUNDING.yml. On 2026-10-01 the GitHub Sponsors page showed a goal of $5,000 per month, described as breaking even with expenses, and 269 current sponsors. On the same page he writes that he is mostly living on savings while devoting all of his time to the project. The README credits sponsors with links that include G-Research and Terminal Trove.
:::

:::fact
In the 0.45.0 release post of 20 August 2026 the maintainer announced that Zellij.online is being built. The official explainer page describes it as an end-to-end encrypted terminal session sharing service: you hand someone a link and they join from a browser, their own terminal or a phone, with no TLS certificates to set up and no ports to open. It is in closed beta with a waiting list. The page states that it is commercial, that it "is run by the same people who maintain Zellij", and that it is "a paid service with a free tier". It names Aram Drevekenin and others from the Zellij team as operators. The Legal Notice on zellij.online gives the operating company as poor.dev GmbH in Vienna, with him as managing director.
:::

:::fact
The same page lists what the paid service does not change. Zellij stays free and open source under the same licence. There is no "community edition" and no "pro edition". Nothing is removed or left unbuilt to make the hosted service more attractive. The built-in web client stays fully featured, and sharing over your own infrastructure remains a first-class path. There are no ads, no telemetry and no data collection, and no account is needed to use Zellij. On funding, the page says development has been funded entirely by recurring donations and the maintainers' savings; that this model "works, but it is fragile, and it scales poorly with the amount of work the project requires"; that the realistic alternatives are advertising, venture capital, selling user data or selling a service; that selling a service is the only one that does not degrade the project or its users; and that Zellij.online is not funded by venture capital or private equity.
:::

Much is not public. Neither the explainer page nor the landing page gives Zellij.online's price, the scope of the free tier or a general-availability date. The actual monthly donation total, the number of Zellij users, and the operating company's revenue and headcount cannot be determined from public information. The amounts contributed by the sponsors credited in the README are also not stated.

:::guess
This looks like a careful attempt at a common fork in the road for open-source sustainability. A multiplexer runs entirely on the user's machine, so the project carries no server costs but also has no natural point at which to charge. Donations depend on goodwill. The actual monthly total is not public, but judging from 269 sponsors and a $5,000 monthly goal described as break-even, they are presumably at most around the scale of one full-time developer's living costs. The response is to sell not the tool but the chores around it: certificates, open ports and NAT traversal. Because the project has promised to keep self-hosting first-class, the paid service would have to earn its price from saved effort alone, with no feature gap to lean on.
:::

:::guess
The difficulty is visible too. Terminal sharing is not necessarily something people do every day, which can make the reason to pay weaker. On the other hand, the CLI automation added from 0.44.0 (listing panes, sending keys, subscribing to pane output) widens the ways scripts and external tools, and not only people, can drive a session. If that connects with a need to watch long-running work from somewhere else, sharing could be used more often. This is our inference; the project has not stated such an aim. With no price published, it is not yet possible to judge whether the service will reach a scale that funds development.
:::

We scored it 4.0 for product, 4.0 for UX, 4.5 for tech and 2.5 for business. The tech score reflects a consistent design in which even the UI is built from plugins, and internal rework aimed at compatibility and portability. The business score is lower because the main source of income is donations, which the project itself calls fragile, and because the paid service is still in closed beta with no public pricing. It is not a negative judgement on how the project is run. It reflects how thin the confirmable revenue base is today.

To keep making a free tool, earn money outside the tool. Zellij's explainer page writes down the reason for that choice and the lines it will not cross before the service has launched. Nobody knows yet whether it will work, but it is worth reading as a record of an open-source project stating its funding plan up front.
