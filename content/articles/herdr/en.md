---
service: "Herdr"
title: "A tmux-style server that knows which agent is stuck — 40,000 stars in six months, and what Herdr means by a \"runtime\""
description: "Herdr is an open-source tool that hands coding agents such as Claude Code and Codex, terminals and all, to a background server. Its \"runtime\" is concretely a server that keeps holding the PTYs, a per-pane state (working / blocked / idle), and a CLI and socket API that agents themselves can call. We dissect it from the official docs, the public repository, and the official blog: 59 stable releases in the six months since March 2026, the move from AGPL to Apache 2.0, joining YC, and a $6M seed round."
lead: "You close the laptop and the agent that had been running for six hours is gone. Herdr starts from that single problem. Its answer is not a new app but the same structure as tmux: a server owns the terminals, and screens attach and detach later. The difference is that the server knows which panes are agents, and whether each is working or stopped waiting for permission. We check what the project calls a \"runtime\" using only public material and source code. We have not tried the product hands-on."
category: dev-tool
tags: [ai, terminal, rust, open-source, developer-tools]
publishedAt: "2026-10-01"
updatedAt: "2026-10-01"
lastVerified: "2026-10-01"
serviceUrl: "https://herdr.dev/"
vendor: "Herdr, Inc."
origin: "TR"
heroTheme: "herdr"
scores: { product: 4.0, ux: 3.5, tech: 4.0, business: 2.5 }
techStack:
  - layer: "Implementation language"
    name: "Rust"
    confidence: confirmed
    evidence: "The public repository herdrdev/herdr is primarily Rust (about 94% by bytes per the GitHub languages API). The README also says \"one rust binary, no electron\""
    evidenceUrl: "https://github.com/herdrdev/herdr"
  - layer: "TUI rendering"
    name: "ratatui / crossterm"
    confidence: confirmed
    evidence: "The v0.9.3 Cargo.toml lists ratatui 0.30 and crossterm 0.29 as dependencies"
    evidenceUrl: "https://github.com/herdrdev/herdr/blob/v0.9.3/Cargo.toml"
  - layer: "Terminal emulation"
    name: "libghostty-vt (vendored)"
    confidence: confirmed
    evidence: "The Cargo.toml of the in-repo crate crates/ghostty-vt describes itself as \"Herdr's binding to its vendored libghostty-vt\""
    evidenceUrl: "https://github.com/herdrdev/herdr/blob/v0.9.3/crates/ghostty-vt/Cargo.toml"
  - layer: "PTY"
    name: "portable-pty (vendored) / ConPTY on Windows"
    confidence: confirmed
    evidence: "Cargo.toml pins portable-pty 0.9.0 and patches it to the in-repo vendor/portable-pty. For Windows, the official docs state that Herdr uses ConPTY"
    evidenceUrl: "https://github.com/herdrdev/herdr/blob/v0.9.3/Cargo.toml"
  - layer: "Async runtime"
    name: "tokio"
    confidence: confirmed
    evidence: "The v0.9.3 Cargo.toml lists tokio 1 (rt-multi-thread, process, io-util and others) as a dependency"
    evidenceUrl: "https://github.com/herdrdev/herdr/blob/v0.9.3/Cargo.toml"
  - layer: "Control API"
    name: "NDJSON over Unix domain socket / Windows named pipe"
    confidence: confirmed
    evidence: "The official docs (Socket API) state that it is newline-delimited JSON over a local socket: a Unix domain socket on Unix and a named pipe on Windows. The schema can be printed with herdr api schema"
    evidenceUrl: "https://herdr.dev/docs/socket-api/"
  - layer: "Server update without downtime"
    name: "PTY master FD transfer via SCM_RIGHTS"
    confidence: confirmed
    evidence: "The official blog (2026-05-27) states that the old server duplicates the PTY master file descriptors and sends them to the new server over a private Unix socket. The docs present it as an experimental feature, herdr update --handoff"
    evidenceUrl: "https://herdr.dev/blog/live-updates-without-killing-your-terminal-processes/"
  - layer: "Connecting machines"
    name: "SSH (OpenSSH)"
    confidence: confirmed
    evidence: "The official docs describe placing saved SSH machines in one window, requesting SSH compression, and sharing an OpenSSH connection"
    evidenceUrl: "https://herdr.dev/docs/connecting-machines/"
  - layer: "Distribution"
    name: "GitHub Releases / install.sh / Homebrew / mise / Nix"
    confidence: confirmed
    evidence: "The official docs cover the install script, Homebrew, mise, Nix, and manual download. GitHub Releases carry binaries for Linux (x86_64 / aarch64), macOS (x86_64 / aarch64), and Windows (x86_64)"
    evidenceUrl: "https://herdr.dev/docs/install/"
  - layer: "Documentation site"
    name: "Astro / Starlight"
    confidence: confirmed
    evidence: "In our own observation (2026-10-01 UTC), the HTML of herdr.dev/docs/ carried generator meta tags for Astro v5.18.1 and Starlight v0.36.3"
    evidenceUrl: "https://herdr.dev/docs/"
  - layer: "Site delivery"
    name: "Cloudflare"
    confidence: likely
    evidence: "In our own observation (2026-10-01 UTC), responses from herdr.dev returned server: cloudflare and cf-ray, and the name servers were ns.cloudflare.com. We found no official statement on which Cloudflare product serves the site"
sources:
  - label: "Herdr official site (home page)"
    url: "https://herdr.dev/"
    accessedAt: "2026-10-01"
  - label: "Herdr official docs: Concepts"
    url: "https://herdr.dev/docs/concepts/"
    accessedAt: "2026-10-01"
  - label: "Herdr official docs: Agents"
    url: "https://herdr.dev/docs/agents/"
    accessedAt: "2026-10-01"
  - label: "Herdr official docs: Integrations"
    url: "https://herdr.dev/docs/integrations/"
    accessedAt: "2026-10-01"
  - label: "Herdr official docs: Session state and restore"
    url: "https://herdr.dev/docs/session-state/"
    accessedAt: "2026-10-01"
  - label: "Herdr official docs: How to work with Herdr"
    url: "https://herdr.dev/docs/how-to-work/"
    accessedAt: "2026-10-01"
  - label: "Herdr official docs: Connecting machines"
    url: "https://herdr.dev/docs/connecting-machines/"
    accessedAt: "2026-10-01"
  - label: "Herdr official docs: Agent automation"
    url: "https://herdr.dev/docs/agent-automation/"
    accessedAt: "2026-10-01"
  - label: "Herdr official docs: Socket API"
    url: "https://herdr.dev/docs/socket-api/"
    accessedAt: "2026-10-01"
  - label: "Herdr official docs: Plugins"
    url: "https://herdr.dev/docs/plugins/"
    accessedAt: "2026-10-01"
  - label: "Herdr official docs: Marketplace"
    url: "https://herdr.dev/docs/marketplace/"
    accessedAt: "2026-10-01"
  - label: "Herdr official docs: Install Herdr"
    url: "https://herdr.dev/docs/install/"
    accessedAt: "2026-10-01"
  - label: "Herdr official docs: Windows support"
    url: "https://herdr.dev/docs/windows-beta/"
    accessedAt: "2026-10-01"
  - label: "Herdr official: Compare (comparison table with other tools)"
    url: "https://herdr.dev/compare/"
    accessedAt: "2026-10-01"
  - label: "Herdr official: Herdr Cloud (waitlist)"
    url: "https://herdr.dev/cloud/"
    accessedAt: "2026-10-01"
  - label: "Herdr official blog: Herdr is joining Y Combinator. The runtime stays open. (2026-08-06)"
    url: "https://herdr.dev/blog/herdr-is-joining-y-combinator/"
    accessedAt: "2026-10-01"
  - label: "Herdr official blog: Herdr raised a $6M seed. We're hiring. (2026-09-08)"
    url: "https://herdr.dev/blog/herdr-raised-a-seed/"
    accessedAt: "2026-10-01"
  - label: "Herdr official blog: Connecting the machines (2026-09-07)"
    url: "https://herdr.dev/blog/connecting-the-machines/"
    accessedAt: "2026-10-01"
  - label: "Herdr official blog: Ten agents, three clients, 95% less CPU (2026-08-03)"
    url: "https://herdr.dev/blog/ten-agents-three-clients-95-percent-less-cpu/"
    accessedAt: "2026-10-01"
  - label: "Herdr official blog: Live updates without killing your terminal processes (2026-05-27)"
    url: "https://herdr.dev/blog/live-updates-without-killing-your-terminal-processes/"
    accessedAt: "2026-10-01"
  - label: "Herdr official blog: Coding agents are becoming runtimes (2026-06-10)"
    url: "https://herdr.dev/blog/coding-agents-are-becoming-runtimes/"
    accessedAt: "2026-10-01"
  - label: "GitHub: herdrdev/herdr (README, license, star count)"
    url: "https://github.com/herdrdev/herdr"
    accessedAt: "2026-10-01"
  - label: "GitHub: herdrdev/herdr releases"
    url: "https://github.com/herdrdev/herdr/releases"
    accessedAt: "2026-10-01"
  - label: "GitHub: herdrdev/herdr v0.9.3 Cargo.toml"
    url: "https://github.com/herdrdev/herdr/blob/v0.9.3/Cargo.toml"
    accessedAt: "2026-10-01"
  - label: "GitHub: commit \"relicense herdr under apache-2.0\" (2026-07-22)"
    url: "https://github.com/herdrdev/herdr/commit/cd5ea1be"
    accessedAt: "2026-10-01"
  - label: "GitHub: commit \"clarify dual licensing\" (2026-05-26)"
    url: "https://github.com/herdrdev/herdr/commit/cfffe659"
    accessedAt: "2026-10-01"
  - label: "GitHub: herdrdev/herdr SPONSORS.md"
    url: "https://github.com/herdrdev/herdr/blob/v0.9.3/SPONSORS.md"
    accessedAt: "2026-10-01"
  - label: "Y Combinator: herdr (company page)"
    url: "https://www.ycombinator.com/companies/herdr"
    accessedAt: "2026-10-01"
  - label: "Homebrew Formulae: herdr"
    url: "https://formulae.brew.sh/formula/herdr"
    accessedAt: "2026-10-01"
---

Coding agents run inside terminals. With one agent, one terminal tab is enough. Line up five or ten and let them run for hours, and different problems appear. Which one is working, and which has stopped to ask for permission? Does everything die when the laptop closes? Herdr brings an old answer to this — a background server owns the terminals and the screen is just a client — and adds a new layer on top: the state of each agent.

## What the service is

Herdr is a terminal workspace manager for AI coding agents. Its official guide for agents describes it as "a multiplexer, like tmux": a background server owns real terminal processes, and clients attach to render them. Close the client or lose the SSH connection, and the processes in the panes keep running.

On top of that, it has three things tmux does not: it finds agents inside panes and shows their state, the whole UI can be operated with a mouse, and it has a CLI and a socket API that scripts and the agents themselves can call.

:::fact
The public repository herdrdev/herdr was created on March 27, 2026, and v0.1.0 shipped the same day. According to the GitHub API, as of October 1, 2026 (UTC) it has 41,769 stars and 3,230 forks, is licensed under Apache 2.0, and is primarily Rust. There are 94 releases including previews, 59 of them stable, the latest being v0.9.3 on September 29, 2026. The home page of the official site shows "1,191,376 installs to date", "1,445 community plugins", and "22 agent CLIs detected" (how installs are counted is not stated).
:::

:::fact
In the official blog (2026-08-06), the author Can Celik wrote that he was "the only person behind Herdr" and announced that it was joining Y Combinator's Fall 2026 batch (F26). YC's company page lists it as founded in 2026, team size 1, located in Ankara, Turkey, with Can Celik as Founder/CEO. According to the official blog (2026-09-08), Herdr raised a $6M seed round led by Bessemer Venture Partners, with Y Combinator, e2vc, and angels including Tobi Lütke (CEO, Shopify), Dane Knecht (CTO, Cloudflare), and Görkem Yurtseven (co-founder, fal). The footer of the official site reads "© 2026 Herdr, Inc."
:::

:::pull
The "runtime" is a server that keeps holding the terminals, a state detector, and an API agents can call. It is not about isolation or sandboxing.
:::

"Runtime" is a broad word, so here is what it includes and does not include, according to public material.

- **Owner of the processes**. According to the official docs (Concepts), the server owns panes and process state, and the client is the terminal UI attached to that server. A session is defined as "a persistent Herdr server namespace".
- **State detection**. An agent has one of five states: working / blocked / done / idle / unknown. States roll up to tabs and workspaces and appear in the sidebar.
- **Remote access**. There are three ways: SSH in and run herdr there, attach from your own terminal with `herdr --remote <host>`, or place several SSH machines in one window.
- **What it does not include**. In the docs we read, we found no description of a feature by which Herdr itself isolates agents. What the docs do cover is how to tell Herdr the agent type with the `HERDR_AGENT` environment variable when you run an agent through an external sandbox wrapper. For plugins too, the official docs state that Herdr "does not review or sandbox plugin code".

::scorecard

## UX analysis

We did not install or try Herdr. What follows is an analysis of the design as written in the official docs, the README, and the official blog — not an evaluation of how it feels to use.

- **Usable without learning any keys**. According to the guide for agents, panes, tabs, workspaces, split borders, and right-click menus are all clickable, and no keybindings are required. For people who want the keyboard, the same `ctrl+b` prefix as tmux is the default.
- **You do not hunt for the stuck one**. According to the docs (Agents), Herdr finds the agent's process in each pane and matches the live bottom of the pane against detection rules (a manifest) to decide the state. It notifies you when an agent finishes or needs you.
- **Motion is used only for change**. According to the official blog (2026-08-03), every working agent used to get a spinner. After users said that with twenty of them it became harder to tell which one was waiting, v0.8.0 replaced the spinner with a static coloured mark.
- **On a phone, an SSH client is enough**. According to the docs, there is no mobile app or web dashboard; you open the same session from an SSH client on your phone. The TUI adapts to narrow screens.
- **One line to install, nothing else changes**. Installation is the single line `curl -fsSL https://herdr.dev/install.sh | sh`, with Homebrew, mise, and Nix also supported. It does not replace your terminal app; it runs inside the one you already use.

State detection also has limits, which the project documents itself.

:::fact
According to the docs (Agents), for agents whose state is read from the screen, blocked detection is "deliberately strict": Herdr marks blocked only when the screen matches known approval, question, or permission UI. An unusual new prompt may show as idle until Herdr learns that screen shape. Codex falls back to unknown when no rule matches, because its screen can look the same during an active turn and after a response. The docs explain that a misclassification affects only the visible status and waits, and should not make Herdr send input or take destructive action.
:::

:::fact
The support table in the same docs lists dedicated integrations (`herdr integration install <name>`) for 18 agents, including Claude Code, Codex, GitHub Copilot CLI, Cursor Agent CLI, OpenCode, Pi, Devin CLI, and Grok CLI. An integration tells Herdr which session the agent is in, so that the same conversation can be resumed after a server restart. OpenCode, Pi, Kimi Code CLI, Kilo Code CLI and some others also report their own state, in which case Herdr uses those reports instead of reading the screen. Amp, Kiro CLI, Gemini CLI, Cline and others are supported for state detection only.
:::

Another notable UX point is that the project publishes a table of what survives and what does not. According to the docs (Session state and restore), detaching the client leaves the processes running as they are. Restarting the server loses the original processes; what comes back is the layout, the working directories, and the conversations of agents that have an integration installed. The README also says that "the original processes do not survive". Stating up front what can be expected is an honest way to present a tool that people will trust with long-running jobs.

## Tech stack

::techstack

:::fact
According to the v0.9.3 Cargo.toml, Herdr is a single Rust crate (described as a "terminal workspace manager for AI coding agents") that uses ratatui and crossterm for the TUI, tokio for async, and portable-pty (patched to a copy vendored in the repository) for PTYs. Terminal emulation goes through the in-repo crate ghostty-vt, which calls a vendored libghostty-vt. On Linux it uses zbus to receive the systemd-logind shutdown warning and save the session before the host stops. The README says "one rust binary, no electron".
:::

:::fact
According to the official docs (Socket API), a running server can be controlled over a local socket; the protocol is newline-delimited JSON, over a Unix domain socket on Unix and a named pipe on Windows. The docs (Agent automation) divide control into three primitives — layout, pane, and agent — and provide commands such as `agent start` (start an agent), `agent prompt` (submit a prompt), and `agent wait` (wait for a state change). If the agent is already blocked, `agent prompt` returns `agent_blocked` without sending anything to the terminal. There is no separate SDK for plugins; the official docs say that "the entire Herdr CLI is the plugin API".
:::

:::fact
According to the official blog (2026-05-27), Herdr can keep pane processes alive while the server binary is replaced. It does not move the child processes; it passes the master-side file descriptors of the PTYs those processes are attached to, via SCM_RIGHTS over a Unix socket, to the new server. The docs present this as an experimental feature, `herdr update --handoff`, and as "best effort": processes keep running only if the handoff succeeds.
:::

:::fact
According to the official blog (2026-09-07), from v0.9 Herdr's outer UI is rendered on the client. Before that, one client attached to one server and everything on screen was rendered on that server. By keeping each server in charge of its own sessions and letting the client bring several independent servers into one TUI, the workspaces and agents of SSH machines added with `herdr machine add <host>` now sit alongside the local ones. The same post also says that the agent CLI still works within one server and does not yet see agents on other machines.
:::

:::fact
According to the official blog (2026-08-03), removing the spinner, skipping rendering for panes nobody can see, and skipping repaints of unchanged frames cut total CPU for the server and its attached clients by 89 to 95 percent in workloads dominated by unnecessary rendering. With one agent working and nothing else on screen, CPU went from 1.467% to 0.133% on Linux and from 3.280% to 0.265% on macOS (all figures are Herdr's own measurements).
:::

:::guess
Herdr's technical bet appears to be reading agents from the outside rather than wrapping them. Because it infers state from processes and what is drawn on screen, without modifying each vendor's CLI, adding support for more agents is relatively easy. In exchange, the detection rules need fixing whenever an agent's UI changes, and the official blog itself says that fixes for agent detection are frequent. The 59 stable releases in six months may reflect that burden of keeping up. The option for agents to report their own state (as OpenCode and Pi do), and the published steps for adding that reporting, can be read as an attempt to gradually reduce the dependence on screen reading.
:::

The site itself is light. In our observation (2026-10-01 UTC), herdr.dev responded with `server: cloudflare`, and the only script the home page loads via a src attribute was Cloudflare's email-obfuscation script. The docs are generated with Astro and Starlight and come in English, Japanese, and Simplified Chinese. The site also serves an `llms.txt` for agents to read and an `agent-guide.md` that lets an agent introduce the tool to a human. The sitemap has no pricing, terms, or privacy policy page; opening `/pricing`, `/terms`, and `/privacy` returned the same content as the home page.

## Business model

As of October 1, 2026, we found no Herdr product with a price on it. What it distributes is an Apache 2.0 binary and its source code, and there is no pricing page.

:::fact
The license has changed twice. According to the repository's commit history, the initial release (March 2026) was AGPL-3.0; a commit on May 26, 2026 stated that it was dual-licensed under "AGPL-3.0-or-later, plus commercial licenses for organizations that cannot comply with AGPL"; and a commit on July 22, 2026 switched it to Apache 2.0. In the official blog (2026-08-06), Can Celik gave the reason as "I want everyone to use Herdr freely" and wrote that "the runtime, what you use right now, stays free. Apache-2.0." According to SPONSORS.md in the repository, the sponsorship program is closed to new sponsors and the file only lists past backers.
:::

:::fact
The official site lists "Herdr Cloud" as coming soon and takes signups for a waitlist. It is described as "Same machines. No SSH setup." and "You bring the machines. We connect them." The official blog (2026-09-07) names connecting any machine anywhere through one Herdr account as the next goal on the way to 1.0. Pricing, availability, and the billing unit are not public. The README and SPONSORS.md give an email address for enterprise and partnership inquiries.
:::

:::fact
Adoption starts on developers' own machines. According to Homebrew's public analytics, herdr was installed 11,925 times in the past 30 days (retrieved 2026-10-01). According to the official docs (Marketplace), the plugin index is collected automatically every 30 minutes from public repositories tagged with the GitHub topic `herdr-plugin`; it is not reviewed, and a listing does not mean Herdr vetted it. YC's company page says the marketplace passed 500 community plugins in its first month.
:::

:::guess
The main source of revenue appears likely to be a connection service (Herdr Cloud) built on top of the open runtime. Giving the runtime away widely and charging for the relay and account layer that links machines would fit the official blog's statement that the runtime stays open and the author builds on top of it like everyone else. Dropping the AGPL-plus-commercial dual license in favour of Apache 2.0 can be read as a decision to earn from a service rather than from license sales. That said, neither the price nor the form of the service has been announced, and there is no public information about revenue. Our assessment of the business at this point rests on the spread of usage and the expectations implied by $6M in funding, not on a revenue track record.
:::

:::guess
The line against competitors is drawn by the official comparison page itself. It describes tmux and Zellij as keeping terminals alive without knowing agent state, and manager apps such as Conductor and Emdash as handling worktrees and diff review while the work depends on the app staying open. Herdr writes that these are "categories, not enemies" and that it pairs with a worktree manager. If the companies that build agents strengthen their own remote execution and management screens, how much a neutral layer that treats every CLI the same way will continue to be needed is presumed to be the deciding question going forward.
:::

What Herdr does is not build a new window but fix the place where agents live inside the terminal. That a project started by one person gathered 40,000 stars in six months shows how many developers wanted such a place. The next question is whether a connection service people will pay for can be built on top of a free runtime.
