---
title: "Opposite Answers to the Same Question — Where X and Bluesky Split on 'Who Owns a Platform'"
description: "X, the successor to Twitter, and Bluesky, the decentralized social network. Both claim 'transparency,' yet arrived at entirely different answers — down to zero shared technology. We dissect the two head to head, using both articles' structured data."
lead: "X publishes its own algorithm on GitHub. Bluesky publishes the platform itself as a spec you can switch out of. Both companies claim the same word — transparency — yet arrived at entirely different answers, in both technology and ownership. Following DeepL vs. Nani Translation, this is the second comparison where shared technology comes up zero."
slugA: "x"
slugB: "bluesky"
publishedAt: "2026-07-20"
updatedAt: "2026-07-20"
lastVerified: "2026-07-20"
sources:
  - label: "Elon Musk (official X post): announcing xAI's acquisition of X (2025-03-28)"
    url: "https://x.com/elonmusk/status/1905731750275510312?lang=en"
    accessedAt: "2026-07-20"
  - label: "Bluesky official blog: disclosing the $100M Series B (2026-03 — notes the PBC structure and CEO transition)"
    url: "https://bsky.social/about/blog/03-19-2026-series-b"
    accessedAt: "2026-07-20"
  - label: "Bluesky official docs: federation architecture (PDS / Relay / AppView)"
    url: "https://docs.bsky.app/docs/advanced-guides/federation-architecture"
    accessedAt: "2026-07-20"
---

[X](/en/articles/x) and [Bluesky](/en/articles/bluesky) both grew out of the same complaint about social media — that operators hold the platform, and users are only tenants. But cross-referencing both articles' techStack mechanically turns up not a single shared technology. Starting from the same grievance, the two companies arrived at entirely different answers at the infrastructure level.

:::fact
X publishes two components on GitHub — the recommendation algorithm ("The Algorithm") and the Community Notes scoring code — while the infrastructure underneath, Manhattan (distributed database) and Finagle (service-to-service RPC), remains proprietary and closed. Bluesky does the opposite: it open-sources the foundational protocol itself (AT Protocol) and the server implementation (PDS), designed so anyone can run their own PDS and join. Cross-referencing both tech stacks turned up zero overlapping technology tokens.
:::

:::pull
X talks about transparency through "showing you the algorithm." Bluesky talks about transparency through "letting you leave the operator." The same word has become the banner for two entirely different design philosophies.
:::

## What "publishing" actually means differs

X's openness is a window mounted on a centralized architecture. You can read the recommendation algorithm's code, but the foundation it runs on — Manhattan, Finagle — stays closed, and the code itself hasn't been updated since September 2025. The publication is a symbolic gesture; actual operation is consolidated under a single holding company, xAI Holdings Corp.

Bluesky's openness is the architecture's own design principle. Because PDS (personal data server) accounts are verifiable via DIDs and signed repositories, if a user grows unhappy with the operator, Bluesky Social, PBC, they can take their data and follow graph to a different PDS. The official documentation's stated design — migrating without the old server's cooperation — is a different order of transparency from X's "transparency you can view." It's "transparency you can exit."

:::guess
This split likely comes down to whether each company accepts the premise that "anyone should be able to run this." X's openness is designed as part of the current operator's (xAI Holdings Corp) accountability, without building in any notion that the operator itself could be replaced. Bluesky, conversely, puts operator replaceability at the center of the spec — even as its own documentation projects a future where Relays converge on a few large providers, it never surrenders PDS-level autonomy. The same word, transparency, points to "the right to view" at X and "the right to leave" at Bluesky.
:::

## Ownership structure is the other fork in the road

X is a private company (now part of xAI Holdings Corp) that discloses no financial statements. Its ownership structure is decided through capital transactions — acquisitions, mergers — within the traditional corporate framework.

Bluesky is operated by a public benefit corporation (PBC) that states a policy of avoiding dependence on surveillance advertising. Even so, Bluesky is also a venture-backed company that has raised over $100 million; it doesn't run on unpaid idealism alone.

:::guess
The difference in capital structure likely shows up as a difference in priorities — who each company is really building for. Since going private, X appears to prioritize operational freedom over accountability to shareholders (effectively Musk and xAI Holdings Corp). Bluesky, by choosing the PBC structure, takes a stance — at least on paper — of prioritizing user interest over advertisers and investors. But Bluesky's monetization remains unresolved, and whether that principle survives if the funding runs out is an open question. Just as X's commitment to "transparency you can view" coexists with financial opacity, Bluesky's commitment to "transparency you can exit" carries its own most opaque area: how it will ever make money.
:::

X and Bluesky started from the same grievance about social media and split over whether to translate transparency into "the right to view" or "the right to leave." That their tech stacks share zero technology shows this divergence is etched not just into philosophy, but into the infrastructure choices themselves. The real takeaway from this head-to-head isn't which answer is correct — it's that the same question could produce implementations this different.
