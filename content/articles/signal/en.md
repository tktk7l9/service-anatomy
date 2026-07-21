---
service: "Signal"
title: "Two Dates Is All a Subpoena Gets — Signal's Thorough Design of Not Having"
description: "Signal, the end-to-end encrypted messenger. A dissection of the design that pared data retention down until a government request can only yield a registration date and a last-connection date, the early migration to post-quantum PQXDH, and the economics of a nonprofit run by ~50 people on ~$50 million a year — from official blogs and public records."
lead: "What Signal can hand a court subpoena is an account registration date and a last connection date — two dates. Not because it refuses, but because by design it has nothing else. This is a dissection of the nonprofit messenger run by about 50 people on donations, which moved its cryptography ahead of the quantum era before almost anyone else."
category: consumer-app
tags: [messaging, encryption, privacy, nonprofit, open-source]
publishedAt: "2026-07-21"
updatedAt: "2026-07-21"
lastVerified: "2026-07-21"
serviceUrl: "https://signal.org/"
vendor: "Signal Technology Foundation"
origin: "US"
heroTheme: "signal"
scores: { product: 4.0, ux: 4.0, tech: 5.0, business: 3.5 }
techStack:
  - layer: "Encryption protocol"
    name: "Signal Protocol (PQXDH)"
    confidence: confirmed
    evidence: "Official blog (2023-09-19) states the key agreement protocol was upgraded to PQXDH, layering post-quantum CRYSTALS-Kyber onto the existing X25519 so an attacker must break both to compute keys"
    evidenceUrl: "https://signal.org/blog/pqxdh/"
  - layer: "Post-quantum KEM"
    name: "CRYSTALS-Kyber + X25519"
    confidence: confirmed
    evidence: "Official blog states the combination defends against Harvest Now, Decrypt Later attacks (collecting ciphertext today to decrypt with future quantum computers)"
    evidenceUrl: "https://signal.org/blog/pqxdh/"
  - layer: "Core library"
    name: "libsignal (Rust)"
    confidence: confirmed
    evidence: "Verified on the official GitHub repository (signalapp/libsignal) that the primary language is Rust (2026-07-21) — the cryptographic core shared across clients"
    evidenceUrl: "https://github.com/signalapp/libsignal"
  - layer: "Server"
    name: "Signal-Server (Java)"
    confidence: confirmed
    evidence: "The official GitHub repository (signalapp/Signal-Server) is public; verified its primary language is Java (2026-07-21)"
    evidenceUrl: "https://github.com/signalapp/Signal-Server"
  - layer: "Website delivery"
    name: "Cloudflare"
    confidence: confirmed
    evidence: "Our own HTTP header observation (server: cloudflare, cf-cache-status; 2026-07-21)"
    evidenceUrl: "https://signal.org/"
sources:
  - label: "Signal official blog: Signal is expensive (cost breakdown, ~$50M/year, 2023-11-16)"
    url: "https://signal.org/blog/signal-is-expensive/"
    accessedAt: "2026-07-21"
  - label: "Signal official blog: PQXDH — migrating to quantum-resistant key agreement (2023-09-19)"
    url: "https://signal.org/blog/pqxdh/"
    accessedAt: "2026-07-21"
  - label: "Signal official: Government Requests (full subpoena responses published — only registration date and last connection date available)"
    url: "https://signal.org/bigbrother/"
    accessedAt: "2026-07-21"
  - label: "Signal official blog: phone number privacy and usernames"
    url: "https://signal.org/blog/phone-number-privacy-usernames/"
    accessedAt: "2026-07-21"
---

## Service overview

Signal is a messenger with end-to-end encryption as the default. It is operated by the Signal Technology Foundation, a 501(c)(3) nonprofit with no advertising and no investors, funded by donations. Messages, calls, profiles, group data, contacts — the design goal is that the operator itself can access none of it.

:::fact
Signal's official government-requests page publishes the subpoenas and search warrants it has received, with its responses, in full — from the first documented case in 2016 to a 2026 grand jury subpoena. It states that due to end-to-end encryption and data minimization, all Signal can provide under legal compulsion is the date and time an account registered and the last date it connected. Operating costs are also disclosed: roughly $50 million a year by 2025 — $1.3M storage, $2.9M servers, $2.8M bandwidth, $6M SMS registration, and about $19M in labor for roughly 50 full-time staff — strikingly lean beside messengers run by thousands.
:::

:::pull
Not "won't hand it over" — "doesn't have it." That a subpoena response shrinks to two dates is not a policy; it is a consequence of the architecture.
:::

::scorecard

## UX analysis

Signal's UX aims to make security something you never have to think about. Encryption is a premise, not a setting, and the experience matches an ordinary messenger.

- **Encryption is default, not opt-in.** Refusing to make security an "advanced setting" is what moved encrypted messaging from a specialist's tool to an everyday one.
- **It holds up as a normal app.** Stickers, voice and video calls, stories — Signal tracks mainstream messengers on features, rejecting the classic "secure but inconvenient" trade-off as product policy.
- **It is gradually letting go of the phone number.** With usernames, conversations can start without revealing a number — rebalancing the ease of contact-book sync against the exposure of a personal identifier.
- **The cost of metadata minimization shows.** Read receipts and profile sync sometimes behave more conservatively than competitors; the design of not-having occasionally surfaces as a lag in convenience.

## Tech stack

::techstack

:::fact
In September 2023, Signal upgraded its key agreement to PQXDH, layering post-quantum CRYSTALS-Kyber over the existing X25519 curve so that an attacker must defeat both to compute keys — a preemptive move against Harvest Now, Decrypt Later attacks that collect ciphertext today for future quantum decryption. The implementations are public: libsignal, the cryptographic core shared across clients, is written in Rust, and Signal-Server in Java, both verifiable on the official GitHub.
:::

:::guess
Being among the first major messengers to move to post-quantum cryptography suggests Signal's true product is not the app but trust in the protocol. Since credibility with the cryptographic community is the source of both donations and adoption, falling behind on a cryptographic generation change would be a business risk in itself. Consolidating the core in Rust likewise reads as a choice dictated by this organization's particular risk structure: a single memory-safety flaw could destroy the trust everything rests on.
:::

## Business model

Signal's revenue model is donations. No ads, no data sales, no paid tier.

:::fact
The official blog (November 2023) published a full cost breakdown, projecting roughly $50 million a year by 2025. SMS verification alone runs $6 million a year — far exceeding storage ($1.3M) or bandwidth ($2.8M). The organization runs on about 50 full-time staff, with labor costs around $19 million a year.
:::

:::guess
Publishing the entire cost structure is itself, arguably, the sales activity of a donation model. Having rejected surveillance advertising, transparency is the only lever left for creating a reason to pay — the offered exchange is "we don't monetize your data; in return you get to see our books." Whether $50 million a year can be sustained on donations is an open question, though: bandwidth and verification costs scale with users, meaning growth itself becomes a financial risk — a tension peculiar to nonprofit infrastructure.
:::

If our X vs. Bluesky comparison framed "transparency you can view" against "transparency you can exit," Signal's answer is a third kind: there is nothing to view in the first place. Pare the data down until a subpoena yields two dates, publish the books in full, move the cryptography ahead of the quantum era. Thorough not-having is the hardest form a promise can take — trust proven by architecture.
