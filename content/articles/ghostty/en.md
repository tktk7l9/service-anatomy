---
service: "Ghostty"
title: "Build the Structure That Cannot Be Sold First — Ghostty Has No Revenue Model, and Uses a Non-Profit Shell and a Public Ledger to Treat the Terminal as Public Infrastructure"
description: "Ghostty is a terminal emulator that puts a Swift interface on macOS and a GTK4 interface on Linux on top of libghostty, a shared core written in Zig. It shipped 1.0 in December 2024, and in December 2025 it moved under the fiscal sponsorship of the non-profit Hack Club and transferred its names and marks to that organization. It has no pricing and no paid tier; funding comes from donations, and the ledger is public down to individual transactions. A dissection — from the official documentation, the GitHub repository, the writing of its author Mitchell Hashimoto, and the public ledger — of its technical makeup and of how a project with no revenue model plans to keep going."
lead: "A terminal is a tool people expect to get for free. Ghostty did not add a pricing page to that; it chose instead to make the project legally hard to sell or repurpose. Its author is its largest donor, states in writing that he will not receive a single cent, and publishes every inflow and outflow. Before speed or a native interface, it is this design of money and governance that most separates Ghostty from other developer tools."
category: dev-tool
tags: [terminal, open-source, zig, nonprofit, developer-tools]
publishedAt: "2026-10-01"
updatedAt: "2026-10-02"
lastVerified: "2026-10-02"
serviceUrl: "https://ghostty.org/"
vendor: "Ghostty (fiscal sponsor: Hack Club)"
origin: "US"
heroTheme: "ghostty"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 3.5 }
techStack:
  - layer: "Shared core"
    name: "Zig (libghostty)"
    confidence: confirmed
    evidence: "The official About page states that the core is libghostty, a cross-platform, C-ABI compatible library that provides terminal emulation, font handling, and rendering. GitHub's language statistics show Zig at about 78% (retrieved 2026-10-01)"
    evidenceUrl: "https://ghostty.org/docs/about"
  - layer: "macOS app"
    name: "Swift (AppKit / SwiftUI)"
    confidence: confirmed
    evidence: "The official About page states that the macOS GUI is written in Swift, uses AppKit and SwiftUI, and links against the libghostty C API"
    evidenceUrl: "https://ghostty.org/docs/about"
  - layer: "Linux app"
    name: "GTK4"
    confidence: confirmed
    evidence: "The official About page states that the Linux GUI is written in Zig and uses the GTK4 C API (optionally with Adwaita)"
    evidenceUrl: "https://ghostty.org/docs/about"
  - layer: "Rendering (macOS)"
    name: "Metal"
    confidence: confirmed
    evidence: "The official Features page states that Ghostty uses Metal on macOS to render the terminal screen"
    evidenceUrl: "https://ghostty.org/docs/features"
  - layer: "Rendering (Linux)"
    name: "OpenGL"
    confidence: confirmed
    evidence: "The official Features page states that Ghostty uses OpenGL on Linux to render the terminal screen"
    evidenceUrl: "https://ghostty.org/docs/features"
  - layer: "Embeddable library"
    name: "libghostty-vt"
    confidence: confirmed
    evidence: "The official README states that it is usable from Zig and C and is compatible with macOS, Linux, Windows, and WebAssembly. It also says no version has been tagged yet and the API signatures are still in flux"
    evidenceUrl: "https://github.com/ghostty-org/ghostty"
  - layer: "Configuration"
    name: "Plain-text config (key = value)"
    confidence: confirmed
    evidence: "The official Configuration page states that Ghostty is configured with a text file in a custom, simple key = value syntax, and that this is presently the only way to configure it"
    evidenceUrl: "https://ghostty.org/docs/config"
  - layer: "Crash reports"
    name: "Sentry envelope format"
    confidence: confirmed
    evidence: "The official README states that crash reports are saved on the local machine in the Sentry envelope format and are not automatically sent anywhere"
    evidenceUrl: "https://github.com/ghostty-org/ghostty"
  - layer: "CI infrastructure"
    name: "Namespace"
    confidence: confirmed
    evidence: "The official Financial Support page states that Namespace sponsors all of Ghostty's continuous integration infrastructure (supporter since 2023)"
    evidenceUrl: "https://ghostty.org/docs/sponsor"
  - layer: "Official website"
    name: "Next.js"
    confidence: confirmed
    evidence: "The website repository's package.json lists next ^16.1.6 and react 19.2.4. The response headers also include x-nextjs-prerender: 1 (our observation, 2026-10-01)"
    evidenceUrl: "https://github.com/ghostty-org/website/blob/main/package.json"
  - layer: "Website delivery"
    name: "Vercel"
    confidence: confirmed
    evidence: "Our observation of the HTTP headers (server: Vercel, x-vercel-cache: HIT, x-vercel-id: hnd1::…, 2026-10-01)"
    evidenceUrl: "https://ghostty.org/"
  - layer: "DNS"
    name: "Cloudflare DNS"
    confidence: likely
    evidence: "In our observation the NS records for ghostty.org were liv.ns.cloudflare.com / oswald.ns.cloudflare.com (2026-10-01). Delivery itself is on Vercel"
sources:
  - label: "Ghostty official: About (the three criteria of fast, feature-rich, native; libghostty; a free-time project)"
    url: "https://ghostty.org/docs/about"
    accessedAt: "2026-10-01"
  - label: "Ghostty official: Features (supported platforms, Metal/OpenGL, Windows planned for the future)"
    url: "https://ghostty.org/docs/features"
    accessedAt: "2026-10-01"
  - label: "Ghostty official: Configuration (zero-configuration philosophy, key = value syntax, config GUI planned)"
    url: "https://ghostty.org/docs/config"
    accessedAt: "2026-10-01"
  - label: "Ghostty official: Binaries and Packages (official binaries for macOS only; Linux packaged by distributions)"
    url: "https://ghostty.org/docs/install/binary"
    accessedAt: "2026-10-01"
  - label: "Ghostty official: Release Notes (release dates for 1.0.1 through 1.3.1)"
    url: "https://ghostty.org/docs/install/release-notes"
    accessedAt: "2026-10-01"
  - label: "Ghostty official: 1.3.0 release notes (2026-03-09; 180 contributors, 2,858 commits; scrollback search and more)"
    url: "https://ghostty.org/docs/install/release-notes/1-3-0"
    accessedAt: "2026-10-01"
  - label: "Ghostty official: Financial Support (Hack Club fiscal sponsorship, use of funds, $60 per hour, BDFL, 7% fee)"
    url: "https://ghostty.org/docs/sponsor"
    accessedAt: "2026-10-01"
  - label: "Mitchell Hashimoto: Ghostty Is Now Non-Profit (2025-12-03)"
    url: "https://mitchellh.com/writing/ghostty-non-profit"
    accessedAt: "2026-10-01"
  - label: "HCB: Ghostty's public ledger (balance, total raised, transactions)"
    url: "https://hcb.hackclub.com/ghostty"
    accessedAt: "2026-10-01"
  - label: "GitHub: ghostty-org/ghostty (README, roadmap, MIT license, stars, language statistics)"
    url: "https://github.com/ghostty-org/ghostty"
    accessedAt: "2026-10-01"
  - label: "Mitchell Hashimoto: Libghostty Is Coming (2025-09-22)"
    url: "https://mitchellh.com/writing/libghostty-is-coming"
    accessedAt: "2026-10-01"
  - label: "Mitchell Hashimoto: We Rewrote the Ghostty GTK Application (2025-08-14)"
    url: "https://mitchellh.com/writing/ghostty-gtk-rewrite"
    accessedAt: "2026-10-02"
  - label: "Mitchell Hashimoto: Ghostty 1.0 is Coming (2024-10-22)"
    url: "https://mitchellh.com/writing/ghostty-is-coming"
    accessedAt: "2026-10-01"
  - label: "Mitchell Hashimoto: Ghostty: Reflecting on Reaching 1.0 (2024-12-26)"
    url: "https://mitchellh.com/writing/ghostty-1-0-reflection"
    accessedAt: "2026-10-01"
  - label: "Mitchell Hashimoto: Ghostty Is Leaving GitHub (2026-04-28)"
    url: "https://mitchellh.com/writing/ghostty-leaving-github"
    accessedAt: "2026-10-01"
  - label: "GitHub: ghostty-org/website (source of the official site, package.json)"
    url: "https://github.com/ghostty-org/website/blob/main/package.json"
    accessedAt: "2026-10-01"
---

Articles about developer tools usually end by reading the pricing page. Ghostty has no pricing page. It has no paid edition, no team plan, and no cloud feature. What it has is source code under the MIT license, a non-profit arrangement that receives donations, and a ledger published one transaction at a time. This article uses only public information to look at what Ghostty builds and how it intends to keep going. We have not evaluated Ghostty hands-on. Every statement here about behavior or speed is a summary of what the official documents say.

## What Ghostty Is

Ghostty is a terminal emulator for macOS and Linux. The official description is "a fast, feature-rich, and cross-platform terminal emulator that uses platform-native UI and GPU acceleration." Its author is Mitchell Hashimoto, known as a co-founder of HashiCorp.

:::fact
The official About page says existing terminals force a choice of at most two of speed, features, and native UIs, and that Ghostty set out to be competitive in all three. On the same page the author says he is not trying to claim Ghostty is the best in any category. The page also says Ghostty is a "passion project" that the author works on in his free time, and that it is not a full-time job for anyone involved.
:::

:::fact
According to the author's writing, development began in 2022 as a way to learn Zig and graphics programming, with no intention of releasing it. After about two years of private beta, the first public release shipped as 1.0 in December 2024. At the end of the beta there were around 5,000 users and a Discord of about 28,000 members. Releases continued with 1.1.0 (January 30, 2025), 1.2.0 (September 15, 2025), and 1.3.0 (March 9, 2026); the latest version when we checked was 1.3.1 (March 13, 2026).
:::

The GitHub repository was created on March 29, 2022. When we checked the GitHub API on October 1, 2026, it had 61,764 stars and 3,551 forks, an MIT license, and about 420 contributors. The 1.3.0 release notes cite 180 contributors and 2,858 commits for six months of work. The README says Ghostty is "stable and in use by millions of people and machines daily"; that is the project's own statement, and no measurement method is given.

:::pull
Dissect a product with no pricing page and only three questions remain: who owns it, who decides, and where the money goes. Ghostty answers all three in writing.
:::

::scorecard

## UX Analysis

We have not evaluated the app on a real machine, so this section reads the design principles stated in the official documents.

- **It follows each operating system's conventions.** The project defines "native" as looking, feeling, and behaving the way an application is expected to in that desktop environment. Tabs, splits, and error messages use standard platform components, and the default keybindings differ between macOS and Linux. On macOS the documents list support for Quick Look, secure input, window state recovery on restart, and AppleScript.
- **It starts without configuration.** The project states a "Zero Configuration Philosophy" and embeds a default font (JetBrains Mono) along with built-in Nerd Fonts. It goes as far as asking users to open a discussion if they need to configure anything other than highly subjective things like the theme, because that may belong in the defaults.
- **Configuration is one text file.** The syntax is a custom `key = value` format, and every key is also a valid command-line flag. Configuration can be split across files and reloaded at runtime. A GUI for configuration is described as planned for the future; the documents state that text is presently the only way.
- **Shell integration is injected automatically.** Ghostty injects integration scripts for bash, elvish, fish, nushell, and zsh, which enables features such as jumping between prompts and selecting a command's output. The Bash that ships with macOS does not support automatic injection and needs manual setup, according to the documents.
- **The entry point differs by platform.** The project officially distributes prebuilt binaries only for macOS, which require macOS 13 or later. Linux relies on each distribution's packages, and the documents say those are built independently of the Ghostty project.

:::fact
The 1.3.0 release notes list, as highly requested features, scrollback search, native scrollbars, click-to-move-cursor inside shell prompts, notifications when a long-running command finishes, and key tables that allow tmux-like modal keybindings. Search is described as running on a dedicated thread that operates concurrently with terminal I/O.
:::

The documents also state what is not supported. Windows is described as "planned for the future," and there was no Windows build on the download page when we checked. On text, individual grapheme clusters in Arabic and Hebrew are rendered correctly, but only left-to-right text is supported. The sixth roadmap item, "Ghostty-only Terminal Control Sequences," has not been started; the stated reason is caution about adding fragmentation to the terminal ecosystem.

:::guess
Putting configuration in text and leaving interface components to the operating system appears to be a design narrowed to one kind of user: developers who live in a terminal. The absence of a configuration GUI may be a step up for newcomers, but polishing the defaults first so that nothing needs configuring looks like an attempt to lower that step by a different route.
:::

## Technical Architecture

::techstack

:::fact
According to the official About page, the core of Ghostty is libghostty, a cross-platform, C-ABI compatible library that handles terminal emulation, font handling, and rendering. The macOS app is written in Swift, uses AppKit and SwiftUI, and links against the libghostty C API. The Linux app is written in Zig and uses the GTK4 C API. Rendering uses Metal on macOS and OpenGL on Linux. In his reflection on 1.0, the author writes that over 90% of the code is shared across platforms.
:::

:::fact
The README names a multi-threaded architecture with a dedicated read thread, write thread, and render thread per terminal, and a parser that uses CPU-specific SIMD instructions, as the design behind its performance. The official wording on performance is restrained: the About page says Ghostty "aims to be in the same class as the fastest terminal emulators. In some benchmarks it is faster, in others it is slower," and that detailed benchmarks are something the author would like to provide in the future. We could not find figures published with a named benchmark and procedure, so this article does not quote speed numbers.
:::

:::fact
In a September 2025 post, the author laid out a plan to ship libghostty as a family of smaller libraries. The first is libghostty-vt, which only parses terminal sequences and maintains terminal state, and does not depend even on libc. The README says it is usable from Zig and C and is compatible with macOS, Linux, Windows, and WebAssembly. It also says that no version has been tagged yet and that the API signatures are still in flux.
:::

The Linux app was rewritten in August 2025. According to the author's post (2025-08-14), the rewrite fully embraced the GTK object system (GObject) from Zig and was verified with Valgrind along the way. The README also says the Linux app integrates with systemd for things such as new windows in a single instance and cgroup isolation.

The official website is an ordinary web stack. The response we observed on October 1, 2026 with `curl -sI https://ghostty.org/` included `server: Vercel`, `x-vercel-cache: HIT`, and `x-nextjs-prerender: 1`. The site's source is public too, and its `package.json` lists Next.js 16 and React 19.2.4. Each documentation page carries an "Edit on GitHub" link.

:::guess
That the library's design is discussed ahead of the app suggests Ghostty's center of gravity is less "one terminal app" and more "a shared component for terminal functionality." The author points to editors, CI log viewers, and hosting consoles each implementing terminal emulation on their own, and argues that a shared component is needed. That libghostty-vt already targets Windows and WebAssembly while no Windows app is offered appears to reflect that order of priorities.
:::

## Business Model

Ghostty has no revenue model. It sells nothing, its money comes from donations, and the recipient of those donations is a non-profit arrangement. This section lays out, within what is public, how it plans to continue.

:::fact
On December 3, 2025, the author announced that Ghostty is fiscally sponsored by Hack Club, a registered 501(c)(3) non-profit in the United States. The project did not form its own legal entity; fiscal sponsorship is an arrangement in which an existing non-profit extends its tax-exempt status to a project. The same post says the names, marks, and intellectual property associated with Ghostty were transferred to Hack Club, that copyright continues to be held by individual contributors, and that the license remains MIT. Seven percent of all donations go to Hack Club for administrative costs.
:::

:::fact
The official Financial Support page limits the use of funds to three places: compensation for contributors, services (website hosting, the Discord bot, CI, code signing fees, and so on), and support for upstream projects Ghostty depends on. Compensation is by invited contract at a single global rate of $60 per hour. The page states that Mitchell Hashimoto is the largest donor and that not a single cent goes to him or to projects directly affiliated with him. Governance remains a BDFL model: the author has final authority, including over the direction of funds, while Hack Club's board of directors oversees alignment with the non-profit mission and legal obligations.
:::

:::fact
Inflows and outflows are public on HCB, Hack Club's financial platform. When we checked HCB's public API on October 1, 2026, the balance was $35,767.13 and the total raised was $79,055.55. The ledger lists small individual donations, weekly fiscal sponsorship fees, payments for services, and transfers to contributors, one transaction at a time. The official page says Namespace has sponsored the CI infrastructure since 2023.
:::

The project also explains why it did not form its own non-profit. It gives four reasons: the 7% fee is lower than the cost of forming and maintaining a standalone organization; a 501(c)(3) determination can take months or years; working under an existing non-profit brings accounting and compliance oversight from day one; and the fee goes to another non-profit rather than to a for-profit management company. The page also notes that the structure is recent and that processes, such as which upstream projects to support and how, are still being refined.

The ground the project runs on is also moving. On April 28, 2026, the author announced that Ghostty will leave GitHub. The reason he gave was his own experience of repeated days on which his work was blocked; the post said the destination would be decided over the coming months and that a read-only mirror is planned to remain on GitHub. When we checked on October 1, 2026, pull requests were still being merged on GitHub, and we did not find a follow-up post naming the destination in the author's list of writing.

:::guess
This structure appears to be designed not to create revenue but to close off the possibility of monetization from the inside. The author names removing concerns about a future change of direction — a "rug pull" — as one reason for becoming non-profit. Developer tools changing their license or pricing after becoming popular has been a recurring topic. Transferring the marks to the organization and making the funds impossible to use privately appears to function as a commitment aimed at both users and those who embed libghostty in their own products.
:::

:::guess
On sustainability, dependence on the author personally still appears to be large. The author himself describes having himself as the backer as an "abnormally fortunate position" and writes that he envisions a future where Ghostty is supported more equally by a broader community. Judging from the total raised and the $60-per-hour contracts, the current scale of funding is presumably at the level of paying a small number of people for limited hours. Whether the project reaches a state that continues without its author seems likely to depend on how widely donations spread and on whether companies that use libghostty take part financially. The author has said funding goals and a budget will come later; when we checked, we did not find them on the official Financial Support page or in the author's announcement.
:::

## Our Assessment

We scored product 4.5, UX 4.0, tech 4.5, and business 3.5. For product, we credited a clear goal — meeting three criteria at once — and continued releases after 1.0, and deducted for the absence of a Windows app and a release cadence measured in half-years. For UX, we credited the principle of following each operating system's conventions and defaults that work without configuration, and deducted for the absence of a configuration GUI and of right-to-left text support. We have not tried the app on a real machine, so this score rates the published design principles. For tech, we credited the separation of a shared core from native interfaces and the plan to ship that core as a library, and deducted because libghostty has no tagged version yet.

The 3.5 for business is not a deduction for having no revenue. A structure that cannot be sold, a mechanism under which the author cannot be paid, and a ledger public at the transaction level are a high standard of design for trust. On top of that, we reflected uncertainty about sustainability: funding is concentrated in the author, we could not confirm funding goals or a budget, and the arrangement is less than a year old.

A product with no pricing page still has a business design. Ghostty's was to decide first not what to sell, but what to make unsellable.
