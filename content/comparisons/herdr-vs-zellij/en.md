---
title: "In Both, the Server Owns the Terminals; the Difference Is Who It Owns Them For — Zellij as a Person's Workspace, Herdr as a Place for Agents"
description: "Zellij and Herdr are both terminal multiplexers written in Rust, where a server owns the terminals and the screen attaches and detaches later. A mechanical comparison finds two technologies in common: Rust and tokio. They part ways on who the user is assumed to be. Zellij builds WebAssembly plugins, layouts and a web client for a person at the keyboard; Herdr builds state detection and a socket API for the coding agents inside the panes. Using the two dissections and primary sources, this piece lines up what returns after a restart, how each is extended, how each is reached remotely, licence history, release cadence, funding and governance, and the prices neither has published yet."
lead: "Herdr's official comparison page puts Zellij in the same column as tmux and sums it up in one line: \"Zellij is a friendlier workspace for humans in terminals. Herdr is a runtime for agents in terminals.\" Two projects with the same language and the same server-owns-the-terminals structure diverge on who the user is, and on how development is paid for. One has run on donations and the maintainers' savings and is preparing a paid sharing service. The other has taken a $6M seed round and is running a waitlist for a cloud. This site has not tried either one hands-on."
slugA: "herdr"
slugB: "zellij"
publishedAt: "2026-10-02"
updatedAt: "2026-10-02"
lastVerified: "2026-10-02"
sources:
  - label: "Herdr: Compare (comparison matrix and one-line contrasts)"
    url: "https://herdr.dev/compare/"
    accessedAt: "2026-10-02"
  - label: "Herdr docs: Session state and restore (the what-survives table)"
    url: "https://herdr.dev/docs/session-state/"
    accessedAt: "2026-10-02"
  - label: "Zellij docs: Session Resurrection"
    url: "https://zellij.dev/documentation/session-resurrection.html"
    accessedAt: "2026-10-02"
  - label: "Herdr docs: Agents (state detection)"
    url: "https://herdr.dev/docs/agents/"
    accessedAt: "2026-10-02"
  - label: "Herdr docs: Agent automation (agent start / prompt / wait)"
    url: "https://herdr.dev/docs/agent-automation/"
    accessedAt: "2026-10-02"
  - label: "Herdr docs: Socket API"
    url: "https://herdr.dev/docs/socket-api/"
    accessedAt: "2026-10-02"
  - label: "Herdr docs: Plugins"
    url: "https://herdr.dev/docs/plugins/"
    accessedAt: "2026-10-02"
  - label: "Zellij docs: Plugins"
    url: "https://zellij.dev/documentation/plugins.html"
    accessedAt: "2026-10-02"
  - label: "Zellij docs: Plugin API Permissions"
    url: "https://zellij.dev/documentation/plugin-api-permissions.html"
    accessedAt: "2026-10-02"
  - label: "Zellij 0.44.0 release post (CLI automation, wasmi/tokio migration, Protocol Buffers)"
    url: "https://zellij.dev/news/remote-sessions-windows-cli/"
    accessedAt: "2026-10-02"
  - label: "Zellij docs: Web Client"
    url: "https://zellij.dev/documentation/web-client.html"
    accessedAt: "2026-10-02"
  - label: "Herdr docs: How to work with Herdr (working from a phone)"
    url: "https://herdr.dev/docs/how-to-work/"
    accessedAt: "2026-10-02"
  - label: "Herdr docs: Connecting machines"
    url: "https://herdr.dev/docs/connecting-machines/"
    accessedAt: "2026-10-02"
  - label: "GitHub: herdrdev/herdr Cargo.toml at v0.9.3 (tokio dependency)"
    url: "https://github.com/herdrdev/herdr/blob/v0.9.3/Cargo.toml"
    accessedAt: "2026-10-02"
  - label: "GitHub: zellij-org/zellij Cargo.toml (tokio dependency)"
    url: "https://github.com/zellij-org/zellij/blob/main/Cargo.toml"
    accessedAt: "2026-10-02"
  - label: "GitHub API: herdrdev/herdr (creation date, licence, stars, forks)"
    url: "https://api.github.com/repos/herdrdev/herdr"
    accessedAt: "2026-10-02"
  - label: "GitHub API: zellij-org/zellij (creation date, licence, stars, forks)"
    url: "https://api.github.com/repos/zellij-org/zellij"
    accessedAt: "2026-10-02"
  - label: "GitHub: herdrdev/herdr releases"
    url: "https://github.com/herdrdev/herdr/releases"
    accessedAt: "2026-10-02"
  - label: "GitHub: zellij-org/zellij releases"
    url: "https://github.com/zellij-org/zellij/releases"
    accessedAt: "2026-10-02"
  - label: "GitHub: commit \"relicense herdr under apache-2.0\" (2026-07-22)"
    url: "https://github.com/herdrdev/herdr/commit/cd5ea1be"
    accessedAt: "2026-10-02"
  - label: "GitHub: commit \"clarify dual licensing\" (2026-05-26)"
    url: "https://github.com/herdrdev/herdr/commit/cfffe659"
    accessedAt: "2026-10-02"
  - label: "GitHub: zellij-org/zellij LICENSE.md (MIT)"
    url: "https://github.com/zellij-org/zellij/blob/main/LICENSE.md"
    accessedAt: "2026-10-02"
  - label: "Herdr blog: Herdr is joining Y Combinator. The runtime stays open. (2026-08-06)"
    url: "https://herdr.dev/blog/herdr-is-joining-y-combinator/"
    accessedAt: "2026-10-02"
  - label: "Herdr blog: Herdr raised a $6M seed. We're hiring. (2026-09-08)"
    url: "https://herdr.dev/blog/herdr-raised-a-seed/"
    accessedAt: "2026-10-02"
  - label: "Y Combinator: herdr (company page)"
    url: "https://www.ycombinator.com/companies/herdr"
    accessedAt: "2026-10-02"
  - label: "Herdr: Herdr Cloud (waitlist)"
    url: "https://herdr.dev/cloud/"
    accessedAt: "2026-10-02"
  - label: "Zellij.online explainer (who runs it, that it is commercial, the funding rationale)"
    url: "https://zellij.dev/zellij-online/"
    accessedAt: "2026-10-02"
  - label: "Zellij.online (waitlist landing page)"
    url: "https://zellij.online/"
    accessedAt: "2026-10-02"
  - label: "GitHub Sponsors: imsnif (donation goal, sponsor count)"
    url: "https://github.com/sponsors/imsnif"
    accessedAt: "2026-10-02"
  - label: "GitHub: zellij-org/zellij GOVERNANCE.md"
    url: "https://github.com/zellij-org/zellij/blob/main/GOVERNANCE.md"
    accessedAt: "2026-10-02"
  - label: "Zellij FAQ (maintenance, the statement that it stays free)"
    url: "https://zellij.dev/faq/"
    accessedAt: "2026-10-02"
---

[Herdr](/en/articles/herdr) and [Zellij](/en/articles/zellij) both run inside the terminal you already have and manage panes and tabs. Both are written in Rust. In both, a background server owns the real terminal processes, and the screen is only a client attached to it. That much is the same. The difference is who each one assumes is sitting in front of those terminals. This piece lines up the two dissections and both projects' public material; it is not the result of this site using them side by side.

## The mechanical comparison finds two things in common: Rust and tokio

Start with what comes out when the tech stacks (techStack) of the two dissections are compared mechanically.

:::fact
This site's comparison engine matched the techStack of both articles and found two shared technologies: Rust and tokio. Seventeen items appeared only on the Herdr side (ratatui, crossterm, libghostty-vt, portable-pty, newline-delimited JSON over a Unix domain socket, SSH, Astro, Starlight, Cloudflare and others), and eleven only on the Zellij side (WebAssembly, WASI, KDL, session resurrection, the built-in web server, the web client, Hugo, GitHub Pages, GoatCounter and others). That gap reflects what each article could pick up from public information; it is not proof that one side does not use something.
:::

Both shared items can be checked in primary sources. Herdr's Cargo.toml (v0.9.3) depends on tokio 1, and Zellij's workspace Cargo.toml depends on tokio as well. Zellij's 0.44.0 release post says its several async runtimes were reduced to a single tokio runtime.

The foundation, language and async runtime, is the same, but what sits on top does not overlap. On the Herdr side are parts for drawing terminals and an opening for controlling them from outside. On the Zellij side are a mechanism for running plugins, a language for writing configuration, and an opening for coming in through a browser. That difference is the map for the rest of this piece.

:::pull
The foundation is the same Rust and tokio. On top, one built an opening to be driven from outside, the other built plugins that run inside.
:::

## Herdr's comparison page places Zellij next to tmux

Herdr's official site has a comparison matrix covering other tools. Here is what it says about Zellij, in its own words. Everything below is Herdr's framing, not Zellij's view.

:::fact
Herdr's comparison page (retrieved 2026-10-02) sorts nine tools into four columns and puts Zellij in the same column as tmux, "tmux · zellij". That column's "Kind of thing" is "terminal multiplexer" (Herdr's own is "runtime + clients"). On the row "Work survives its own UI closing", the column reads "yes, detach" and Herdr reads "yes, the server owns the terminals". On "Semantic agent state", Herdr reads "blocked · working · done · idle" and the column reads "—". On "API agents drive themselves", Herdr reads "read · send · wait · split · attach" and the column reads "terminal scripting". The one-line contrast on the same page says: "Zellij is a friendlier workspace for humans in terminals. Herdr is a runtime for agents in terminals: state, waits, direct attach, and an API." The page also says the columns "are categories, not enemies".
:::

The line Herdr draws is not about whether terminals persist. On that row, both say yes. The line is drawn at whether the server knows which pane is an agent and what it is doing right now.

:::fact
Zellij's official FAQ lists, among its features, a status bar that shows the available shortcuts on screen, floating and stacked panes, layouts, and "True Multiplayer", in which several users join the same session and each gets their own coloured cursor. The same FAQ says Zellij "does not consider itself a tmux or screen replacement". The 0.44.0 release post says it added `zellij action list-panes` to list panes from the CLI, `send-keys` to send keystrokes, `dump-screen` to dump a pane's contents, and `zellij subscribe` to subscribe to screen updates, describing the last one as "enabling external tools to react to terminal content changes".
:::

:::guess
What Herdr's matrix calls "terminal scripting" appears to be fairly close to Zellij's CLI since 0.44.0. Reading the screen, sending keys and waiting for a change exist on both sides. The difference is presumably whether the server itself holds the meaning on top of that: "this is an agent, and it is waiting for permission". In Zellij, that interpretation seems to be left to external tools or plugins. How much of it Zellij intends to hold on the server side in the future cannot be told from the public material this site read.
:::

## Both put in writing what comes back after a restart

Both keep running when the screen is closed. The difference shows up after the server itself stops. Both projects document what returns and what does not.

:::fact
Herdr's official docs (Session state and restore) carry a case-by-case table. On a plain detach and reattach, processes keep running and the layout and screen return. On a server restart, processes do not keep running and the layout returns. The recent screen returns only with "pane screen history", which is off by default and is enabled under an experimental section of the config file (the stated reason is that pane output can include secrets). Agent conversations return through "native agent session restore", which is on by default and restarts panes whose official integration reported a session reference, using the agent's own resume command. Herdr keeps up to 48 layout snapshots and adds one at most once every 15 minutes.
:::

:::fact
According to Zellij's official docs (Session Resurrection), each session is serialized by default and kept in the user's cache folder, to be recreated after an intentional quit or an unintentional crash. What is serialized by default is the layout (panes and tabs) and the command running in each pane; configuration can add the pane viewport and scrollback. Resurrected commands are not run immediately but wait behind a "Press ENTER to run..." banner, which the docs explain as preventing accidents with things like `rm -rf`. Session data is saved as a layout every second, in a human-readable form that can be carried to another machine and loaded there.
:::

Neither says that the original processes themselves survive a restart. What comes back is the shape, plus a handle for picking up where things left off. The kind of handle differs. Zellij remembers the command that was running in each pane. Herdr remembers the working directory and a reference pointing at the agent's conversation.

:::guess
This difference appears to mirror the assumed user directly. In a terminal used by a person, what is wanted after a restart is to run the same command again, and the pause before running it is also there for a person. In a terminal used by an agent, re-running the same command starts the conversation from scratch, so a reference that leads back to the conversation presumably matters more. Herdr also has `herdr update --handoff`, which keeps processes alive while the server binary is swapped, but the table in its docs labels it "best effort".
:::

## How each is extended: WebAssembly running inside, or a CLI driven from outside

The extension mechanism is where the two designs differ most visibly.

:::fact
According to Zellij's official docs, plugins run on a WebAssembly / WASI system, and Zellij builds its own UI from plugins. A plugin is a "first class citizen" like a terminal pane: it can render a UI, react to state changes and control Zellij. Rust is currently the only officially supported plugin language, with other languages described as community efforts. The permissions page lists fourteen permissions, including reading and changing application state, running commands, writing to STDIN, reading pane contents and controlling the web server, and plugins ask the user to grant them.
:::

:::fact
Herdr's official docs (Plugins) say there is no separate plugin SDK and no restricted command set: "The entire Herdr CLI is the plugin API." The plugin owns its implementation language, dependencies and files. Installation shows a preview of the source and of the commands that will run, but the same page says Herdr does not review or sandbox plugin code. Underneath the CLI is newline-delimited JSON over a local socket, and the docs (Socket API) say the three layers, an agent skill, the CLI wrappers and the raw socket, "share the same control surface". The docs (Agent automation) describe `agent start`, `agent prompt` and `agent wait`; when an agent is already blocked, `agent prompt` returns `agent_blocked` without sending terminal input.
:::

A Zellij extension goes inside Zellij and becomes part of the screen. A Herdr extension stays outside and drives Herdr through the same opening a person or an agent uses. The first runs within a permission boundary; the second runs as an ordinary program.

:::guess
Each choice appears to follow its own logic. In a tool that shows a screen to a person, there is value in extensions fitting neatly into that screen and in the user being able to grant what they may do. In a tool meant to be used by agents, there is presumably value in the API being something agents already handle, namely shell commands. In exchange, Zellij asks plugin authors to build to WebAssembly, and Herdr leaves it to users to check what a plugin contains before installing it.
:::

## Getting in remotely: Zellij added the browser, Herdr leans on SSH

The two also take different routes to a session on a machine that is not in front of you.

:::fact
According to Zellij's official docs (Web Client), Zellij has a built-in web server that is turned off by default. It listens on 127.0.0.1:8082 by default, requires authentication with a login token, and requires HTTPS with a user-provided certificate when listening on any interface other than 127.0.0.1. `zellij attach https://…` connects directly from another terminal, and there are read-only tokens for viewing only. The web client can be installed as an app (PWA) and switches automatically to a dedicated interface on mobile browsers.
:::

:::fact
Herdr's official docs (How to work with Herdr) say Herdr works on a phone "without a mobile app or web dashboard" and describe connecting with any SSH client and starting Herdr there; the TUI adapts to narrow screens. There is also `herdr --remote <host>` for attaching from a local UI to one remote session, and `herdr machine add <host>` for keeping saved SSH machines alongside local ones in one window (Connecting machines). The comparison page lists the clients on the same runtime as "TUI · CLI · plain SSH, more coming" and, for the "tmux · zellij" column, "its own client".
:::

That row of the comparison page is Herdr's framing. The clients described in Zellij's own docs include the browser in addition to the terminal.

:::guess
The choice of entry point appears to connect to what each plans to sell next. Zellij put browser access and read-only sharing into the open-source core first, and is setting up a paid service to take over only the work of certificates and open ports. Herdr uses whatever SSH already reaches, and presents "Herdr Cloud" as taking over the work of setting up SSH. What both intend to sell is presumably not features but the effort of connecting. The internals of both services are unpublished, so this is a reading of their descriptions and nothing more.
:::

## Repository numbers and licence history

The numbers were retrieved from the GitHub API on 2 October 2026 (UTC).

:::fact
herdrdev/herdr was created on 27 March 2026 and has 41,854 stars and 3,240 forks under Apache 2.0. It has 94 releases, 59 of them not marked as pre-releases, the latest being v0.9.3 on 29 September 2026. zellij-org/zellij was created on 1 September 2020 and has 35,623 stars and 1,472 forks under MIT. It has 71 releases, the latest being v0.45.1 on 28 August 2026. Counting only from 27 March 2026, when Herdr's first version came out, Zellij published five stable releases (v0.44.1 through v0.45.1) and Herdr published 59.
:::

:::fact
The licence histories differ too. In Herdr's repository, three commits touch the LICENSE file. The initial release on 27 March 2026 carries the AGPL v3 text; a commit on 26 May 2026 states at the top that Herdr is dual-licensed under "AGPL-3.0-or-later" and commercial licences "for organizations that cannot comply with AGPL"; and a commit on 22 July 2026 switches to Apache 2.0. In the official blog (2026-08-06), Can Celik gives the reason for the switch as "I want everyone to use Herdr freely." In Zellij's repository, two commits touch LICENSE.md: it has been MIT since the first version on 29 October 2020, and the February 2021 change renamed the copyright holder from the project's former name, Mosaic, to Zellij.
:::

:::guess
The gap in release counts appears to reflect differences in versioning habits and in the kind of work, not which project develops faster. Zellij ships a feature release every few months and bridges the time between with patch releases. Herdr ships small versions in quick succession. As the [Herdr](/en/articles/herdr) article notes, Herdr determines state by reading each vendor's agent screen, so it has to follow along whenever those screens change. The count may reflect how often that happens. The count alone does not show which one is better maintained.
:::

## Funding and decision-making, and the prices not yet published

Finally, whose money keeps development going, and who decides. This is the largest difference between the two.

:::fact
Zellij's official explainer page says development has been "funded entirely by recurring donations and the savings of the maintainers", and describes that model as one that "works, but it is fragile". The same page calls the upcoming Zellij.online "an end-to-end encrypted terminal session sharing service", states that it is "commercial" and "a paid service with a free tier", and says it is currently in closed beta. It also says the service is not funded by venture capital or private equity, that Zellij itself stays free under the same licence, and that the built-in web client stays fully featured. The maintainer's GitHub Sponsors page showed a goal of $5,000 per month and 269 current sponsors (retrieved 2026-10-02). The repository's GOVERNANCE.md names Aram Drevekenin as BDFL with the ultimate decision on large matters of finances and collaboration and a veto, while saying the project strives for consensus and that the veto is a last resort. It lists thirteen current organization members.
:::

:::fact
According to Herdr's official blog (2026-09-08), Herdr raised a $6M seed led by Bessemer Venture Partners, with Y Combinator, e2vc and angel investors. In the official blog (2026-08-06), Can Celik calls himself "the only person behind Herdr", announces joining Y Combinator's Fall 2026 batch, and says the runtime in use today stays free under Apache 2.0. The YC company page (retrieved 2026-10-02) lists a 2026 founding, a team size of one, and Ankara, Turkey as the location. The official site presents "Herdr Cloud" as coming soon, describes it as "You bring the machines. We connect them.", and is taking a waitlist.
:::

Neither sells anything with a price on it today. And neither has published the price of what it is about to sell.

:::fact
As far as this site could confirm on 2 October 2026, the Zellij.online explainer and landing page gave no price, no scope for the free tier, and no date for general availability. The Herdr Cloud page gave no price, no billing unit, and no availability date. The actual monthly amount of Zellij's donations, the number of users of either project, and Herdr's revenue cannot be determined from public information. For Herdr, this site did not find, in what it read, a public document setting out a decision-making structure comparable to Zellij's GOVERNANCE.md.
:::

:::guess
The two appear to answer the same question in opposite order. Zellij built its tool for more than five years on donations and savings, and is now adding a paid service without taking outside capital, writing down its commitments first and drawing its own lines. Herdr took outside capital about half a year after its first release, is hiring, and plans to put a connection service on top. The first reads as a choice to match the pace of development to the money available while keeping decisions with the maintainer and the community. The second reads as a choice to put people on tracking and extension at a moment when the use of agents is expanding quickly. Which one lasts will be settled by the unpublished prices and the number of people who pay them, and cannot be judged from what is public today.
:::

A server owns the terminals, and the screen attaches and detaches. On that old structure, [Zellij](/en/articles/zellij) built a workspace a person can use without memorising it, and [Herdr](/en/articles/herdr) built a place where agents can keep going. There may well be situations where one terminal needs both. What separates them is not a ranking of performance but who each assumed would be in front of the terminal, and whose money each decided would keep the work going.
