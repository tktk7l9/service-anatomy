---
service: "MECCHA CHAMELEON"
title: "When Drawing Skill Becomes Game Skill — How MECCHA CHAMELEON Sold 15 Million Copies"
description: "A hide-and-seek game built by two indie devs in two months sold 7 million copies in 12 days. We dissect the 'paint-yourself camouflage' design that made it stream-friendly, and the EOS-based zero-server-cost architecture."
lead: "Paint anything you like on your blank white body, then blend into the stage like a chameleon. That one idea repainted Steam in the early summer of 2026 — with zero ad spend, zero server cost, and a team of two. We dissect this anomaly of a hit from four angles: product, UX, tech, and business."
category: game
tags: [steam, multiplayer, streaming, unreal-engine, indie-dev]
publishedAt: "2026-07-16"
updatedAt: "2026-07-16"
lastVerified: "2026-07-16"
serviceUrl: "https://store.steampowered.com/app/4704690/MECCHA_CHAMELEON/"
vendor: "lemorion_1224 (independent developers)"
origin: "JP"
heroTheme: "chameleon"
scores: { product: 4.5, ux: 4.5, tech: 3.5, business: 4.5 }
techStack:
  - layer: "Game engine"
    name: "Unreal Engine"
    confidence: confirmed
    evidence: "Stated by the developers in a GameWith interview"
    evidenceUrl: "https://gamewith.jp/gamedb/17059/articles/59486"
  - layer: "Matchmaking / online"
    name: "Epic Online Services (EOS)"
    confidence: confirmed
    evidence: "Stated in the developer interview; free to use, which explains the zero server cost"
    evidenceUrl: "https://gamewith.jp/gamedb/17059/articles/59486"
  - layer: "Distribution platform"
    name: "Steam (Workshop / Cloud)"
    confidence: confirmed
    evidence: "Store page category labels (Steam Workshop / Steam Cloud support)"
    evidenceUrl: "https://store.steampowered.com/app/4704690/MECCHA_CHAMELEON/"
  - layer: "Networking model"
    name: "Host-based session (P2P)"
    confidence: likely
    evidence: "Inferred from the official note that 'max player count depends on the host's connection' combined with the stated zero server cost"
sources:
  - label: "Steam store page: MECCHA CHAMELEON"
    url: "https://store.steampowered.com/app/4704690/MECCHA_CHAMELEON/"
    accessedAt: "2026-07-16"
  - label: "ITmedia NEWS: 3 million copies in the first week (2026-06-18)"
    url: "https://www.itmedia.co.jp/news/articles/2606/18/news124.html"
    accessedAt: "2026-07-16"
  - label: "ITmedia NEWS: 7 million copies in 12 days (2026-06-22)"
    url: "https://www.itmedia.co.jp/news/articles/2606/22/news110.html"
    accessedAt: "2026-07-16"
  - label: "GameWith: developer interview (two people, ~2 months, UE/EOS)"
    url: "https://gamewith.jp/gamedb/17059/articles/59486"
    accessedAt: "2026-07-16"
  - label: "Wikipedia (ja): MECCHA CHAMELEON (sales milestones, team)"
    url: "https://ja.wikipedia.org/wiki/%E3%82%81%E3%81%A3%E3%81%A1%E3%82%83%E3%82%AB%E3%83%A1%E3%83%AC%E3%82%AA%E3%83%B3"
    accessedAt: "2026-07-16"
  - label: "4Gamer: update 1.8.0 adds 11 emotes (2026-06-24)"
    url: "https://www.4gamer.net/games/007/G100712/20260624025/"
    accessedAt: "2026-07-16"
---

Every so often, gaming history produces an invention whose rules fit in one sentence yet stays playable for hundreds of hours. MECCHA CHAMELEON is the latest example. Let's dissect it in order: what happened, why people keep playing, how it is built, and how it makes money.

## Service Overview

MECCHA CHAMELEON is an online hide-and-seek game played between a seeker team and a hiding team. The twist is in how you hide: players draw freely on their blank white bodies, then camouflage themselves against the walls, floors, and furniture of the stage. Your hiding spot, your frozen pose, and above all your drawing skill decide the round.

:::fact
According to the Steam store page, the game launched on June 9, 2026 at ¥790, Windows only. It is developed and published under the individual account lemorion_1224 — in reality a two-person team of Lemorion (design, art direction, music) and Haganeiro (programming), who say it went from concept to release in roughly two months.
:::

:::fact
On sales: ITmedia NEWS reported 3 million copies within the first week (June 18) and 7 million within 12 days (June 22). Wikipedia's tally records 10 million on June 26 and 15 million by July 5. When this site checked the store page on July 16, 2026, the game had roughly 59,000 Steam reviews with a "Very Positive" rating.
:::

The numbers look like a AAA blockbuster's — achieved with zero advertising budget. That is what makes this hit an anomaly.

:::pull
"Your hiding spot, your pose, and above all your drawing skill decide the game" — that single line of store copy summarizes the entire invention.
:::

::scorecard

## UX Analysis

The biggest factor behind the hit is a design that **needs no explanation, yet produces something different every round**.

- **Understandable in three seconds.** It is a mashup of two games everyone has played — hide-and-seek and doodling — so there is virtually no tutorial. A viewer who glances at a stream can become a buyer as-is.
- **The asymmetry of drawing skill produces comedy.** A skilled drawing works as brilliant camouflage; a bad one works as comedy in itself. **Failure becomes content** — skill gaps convert into laughter instead of excluding beginners.
- **Streaming affinity is designed in, officially.** The store page explicitly welcomes videos and streams, with a single requirement: include the game's name in the title. Streamers can easily host viewer-participation servers, closing the loop of viewer → player → streamer.
- **Language-independent.** Humor made of drawings and poses needs no subtitles. Combined with localization into 12 languages, it crossed borders while staying distinctly Japanese.

The trade-offs: play quality depends on the host's connection, and Windows-only support narrows the entrance.

## Tech Stack

:::fact
In the developer interview, the team states the game runs on Unreal Engine with Epic Online Services (EOS) for matchmaking. EOS is free to use, and even at around 200,000 concurrent players their server cost remained zero.
:::

::techstack

:::guess
Since the official page notes that "max player count depends on the host's connection," the game most likely uses a listen-server (P2P) architecture with no dedicated servers. Under that design, load beyond the matchmaking layer (EOS) is distributed to players themselves no matter how large the player base grows — which is how "zero server cost at 15 million copies" can be true. For indie multiplayer developers, this is a repeatable architectural template.
:::

The two-month development time owes much to reusing the online-play foundation from their previous game, as the developers themselves note. Ride on proven engine features and a managed matchmaking service, and concentrate all originality into one point — the paint-yourself camouflage. It is a textbook example of resource allocation.

## Business Model

The revenue structure is a single ¥790 buy-to-play purchase — almost classical in a Japanese market dominated by free-to-play and gacha.

:::guess
A naive calculation gives 15 million copies × ¥790 ≈ ¥11.8 billion gross. Actual net revenue is far lower after regional pricing (much cheaper in emerging markets), Steam's standard 30% cut, and refunds — but against a development cost of two people × two months, the return is still plausibly in the billions of yen. With zero ad and server costs, revenue converts to gross profit almost directly.
:::

Marketing was carried by streamers and social media. The developers note that quote-reposts from overseas accounts were already climbing when the first trailer went out, and the guideline requiring only that videos include the game's title means every video doubles as a searchable ad.

The risk is longevity. Party games inevitably cool down, and clones will come. The developers have already issued a notice about unofficial merchandise (July 2026) — a sign the project is entering its brand-management phase. Steam Workshop support for user-generated stages and prompts is likely the key to extending its life.

Take one pure invention — drawing skill as game skill — and ship it at maximum speed on boring, proven technology and a free matchmaking backbone. With 15 million copies, MECCHA CHAMELEON proved that the winning path for indie developers lies not in volume, but in the purity of the invention.
