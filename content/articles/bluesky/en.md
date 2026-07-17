---
service: "Bluesky"
title: "The Test Bed for a Social Network You Can Move Out Of — Bluesky's Protocol Bet With 43 Million Users"
description: "Dissecting Bluesky, the decentralized social network: the AT Protocol federation that separates PDS, Relay, and AppView; account portability via DIDs; stackable moderation; the $100M Series B; and the still-unfinished business model — from official documentation."
lead: "Every complaint about social media shares one root: your account and your audience are hostages of the operator. Bluesky implements 'move out with your whole account' as a technical specification, and is testing it on 43 million real users. We dissect the protocol design and the unfinished business behind it."
category: media
tags: [social-media, decentralized, at-protocol, open-source, community]
publishedAt: "2026-07-17"
updatedAt: "2026-07-17"
lastVerified: "2026-07-17"
serviceUrl: "https://bsky.app/"
vendor: "Bluesky Social, PBC"
origin: "US"
heroTheme: "bluesky"
scores: { product: 4.0, ux: 4.0, tech: 4.5, business: 2.5 }
techStack:
  - layer: "Protocol"
    name: "AT Protocol (OSS)"
    confidence: confirmed
    evidence: "Official documentation states the Bluesky app itself is built as one application on top of atproto"
    evidenceUrl: "https://docs.bsky.app/docs/advanced-guides/atproto"
  - layer: "Federation architecture"
    name: "PDS / Relay / AppView 分離"
    confidence: confirmed
    evidence: "The official federation architecture guide describes the three-role split: data hosting (PDS), full-network crawling (Relay), and feed assembly (AppView)"
    evidenceUrl: "https://docs.bsky.app/docs/advanced-guides/federation-architecture"
  - layer: "Identity"
    name: "DID + 署名付きデータリポジトリ"
    confidence: confirmed
    evidence: "Official documentation: DIDs and signed data repositories allow migrating to a new PDS without the old server's involvement"
    evidenceUrl: "https://docs.bsky.app/docs/advanced-guides/atproto"
  - layer: "Reference implementation"
    name: "TypeScript (公式OSSモノレポ)"
    confidence: confirmed
    evidence: "Primary language of the official bluesky-social/atproto repository (checked via GitHub API, 2026-07-17)"
    evidenceUrl: "https://github.com/bluesky-social/atproto"
  - layer: "Self-hosting"
    name: "PDS公式コンテナ配布"
    confidence: confirmed
    evidence: "The official repository distributes the PDS container image and compose configuration"
    evidenceUrl: "https://github.com/bluesky-social/pds"
  - layer: "Moderation"
    name: "Ozone (積み替え可能なラベラー)"
    confidence: confirmed
    evidence: "The official blog describes moderation split out as independent labeler services, with Ozone released as OSS"
    evidenceUrl: "https://docs.bsky.app/blog/blueskys-moderation-architecture"
sources:
  - label: "Bluesky official docs: federation architecture (PDS / Relay / AppView)"
    url: "https://docs.bsky.app/docs/advanced-guides/federation-architecture"
    accessedAt: "2026-07-17"
  - label: "Bluesky official docs: The AT Protocol"
    url: "https://docs.bsky.app/docs/advanced-guides/atproto"
    accessedAt: "2026-07-17"
  - label: "Bluesky official blog: disclosing the $100M Series B (2026-03 — 43M users, ~20B public records)"
    url: "https://bsky.social/about/blog/03-19-2026-series-b"
    accessedAt: "2026-07-17"
  - label: "Bluesky official blog: Bluesky's moderation architecture"
    url: "https://docs.bsky.app/blog/blueskys-moderation-architecture"
    accessedAt: "2026-07-17"
  - label: "TechCrunch: Bluesky announces $100M Series B after CEO transition (2026-03)"
    url: "https://techcrunch.com/2026/03/19/bluesky-announces-100m-series-b-after-ceo-transition/"
    accessedAt: "2026-07-17"
---

As Twitter turned into X, the world was reminded of an unspoken default: a social network belongs to its operator, and users are tenants. Bluesky is the technical rebuttal. It implements the separation of accounts, data, and follow graphs from the operator — not as an ideal but as protocol specification — and is now validating it under the real traffic of 43 million users.

## What the service is

At first glance, Bluesky is a microblogging network that looks a lot like vintage Twitter. But the real product is the AT Protocol (atproto) beneath it; the Bluesky app is officially just one application on the protocol.

:::fact
Per the official blog (March 2026), Bluesky raised a $100 million Series B led by Bain Capital Crypto in April 2025 (over $120 million raised in total). Users grew from 13 million at the October 2024 Series A to more than 43 million; the network holds roughly 20 billion public records (posts, likes, and so on); over 1,000 atproto apps are used weekly and SDKs are downloaded 400,000+ times monthly. The operator is a public benefit corporation, and founding CEO Jay Graber moved to the role of Chief Innovation Officer.
:::

:::pull
Bluesky's product is not "an X alternative app." It is a specification that makes the operator of a social network replaceable — the app is merely the demonstration.
:::

::scorecard

## UX analysis

Bluesky's experience design commits to being a decentralized network that never makes you think about decentralization.

- **Conservative surface, radical substance.** The UI follows old Twitter's grammar almost exactly, minimizing switching costs. The complexity of federation is deliberately sunk into the protocol layer and hidden from the surface.
- **Feeds you can choose — and build.** Instead of a single For You algorithm, custom feeds can be selected or authored. It is the feature where the ideology shows most: editorial control of the timeline shifts from operator to user.
- **Moderation is stackable too.** By subscribing to labelers, users choose whose judgments about unwanted content to adopt — aiming at a third path between one central standard and lawlessness.
- **The weaknesses: network effects, and explaining it to normal people.** A social network without your friends is dead on arrival, and the value of DIDs and PDSes stays invisible until you need to migrate. Like insurance, the product proves its worth only after the disaster — structurally hard to market.

## Tech stack

::techstack

:::fact
Per official documentation, the network splits into three roles: the PDS (personal data server — holds your signed repository of posts), the Relay (crawls the whole network and merges it into a single firehose), and the AppView (assembles feeds and aggregations from the firehose). Users are identified by DIDs, and because data repositories are cryptographically verifiable, an account can move to a new PDS without the old server's cooperation. The reference implementation is open-source TypeScript, an official PDS container is distributed for self-hosting, and moderation is split out as Ozone, an open-source labeler.
:::

:::guess
This is pragmatic decentralization — federate in principle, but run the working system centrally first. The official docs themselves expect Relays to converge on a few large full-network providers plus a long tail of partial ones, given the resource demands; the design reads as "a replaceable center," not pure P2P. The sharpest divergence from ActivityPub (Mastodon and kin) is putting account portability at the spec's center — a visible lesson learned from federations that force users to choose a server on day one.
:::

## Business model

The most unfinished organ in this dissection is monetization.

:::fact
The official blog frames the Series B as funding growth and open social infrastructure; no advertising revenue or established subscription revenue has been disclosed. The company is a public benefit corporation and has repeatedly stated its intent to avoid dependence on surveillance advertising.
:::

:::guess
Reports point to a subscription called Bluesky+, and monetization will likely combine "charges that don't distort the experience" — custom domains, premium features, developer services. Whether subscriptions alone can carry infrastructure costs at 43-million-user scale is unknown; the $100 million is effectively a runway for inventing the revenue model. And the structural dilemma remains: the more the protocol succeeds, the more replaceable Bluesky the company becomes. How it resolves that — through the PBC structure and first-mover advantages inside its own ecosystem — is the real thing to watch in this experiment.
:::

What Bluesky is trying to prove is not that social media can be good, but that you can leave when it turns bad. People only settle where an exit is guaranteed — and this 43-million-person social experiment is the first attempt to answer a decade-old question about who owns social media with an implementation instead of an argument.
