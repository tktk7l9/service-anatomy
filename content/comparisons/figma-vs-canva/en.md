---
title: "Build on Bare Land, or Assemble from the Parts Shelf — Figma and Canva's Opposite Architectures on the Same AWS"
description: "Figma compiled C++ to WebAssembly and built its own multiplayer protocol; Canva assembled managed services — EKS, Bedrock, S3. Two design tools whose techStacks share zero tokens — yet both stand on the same AWS. A head-to-head dissection of two engineering strategies: build versus assemble."
lead: "Cross-referencing both articles' techStack mechanically yields zero shared technology tokens. But this zero means something different from the zeros in our previous matchups. Figma's 'AWS' and Canva's 'Amazon EKS' are merely counted as different tokens — the two companies stand on the same cloud. The difference isn't the land. It's how they built on it."
slugA: "figma"
slugB: "canva"
publishedAt: "2026-07-21"
updatedAt: "2026-07-21"
lastVerified: "2026-07-21"
sources:
  - label: "Figma official blog: How Figma's multiplayer technology works (why not OT/CRDT — a custom protocol in Rust)"
    url: "https://www.figma.com/blog/how-figmas-multiplayer-technology-works/"
    accessedAt: "2026-07-21"
  - label: "Figma official blog: WebAssembly cut Figma's load time by 3x"
    url: "https://www.figma.com/blog/webassembly-cut-figmas-load-time-by-3x/"
    accessedAt: "2026-07-21"
  - label: "SEC Form 424B4 (Figma, Inc. — IPO prospectus, listed August 2025)"
    url: "https://www.sec.gov/Archives/edgar/data/1579878/000162828025037014/figma424b4.htm"
    accessedAt: "2026-07-21"
  - label: "The Register: Figma files for IPO in wake of abandoned Adobe acquisition (2025-04)"
    url: "https://www.theregister.com/2025/04/16/adobe_figma_ipo/"
    accessedAt: "2026-07-21"
  - label: "AWS official case study: Canva on AWS (EKS / Bedrock / S3 — 100 billion events per week)"
    url: "https://aws.amazon.com/solutions/case-studies/innovators/canva/"
    accessedAt: "2026-07-21"
  - label: "Bloomberg: Canva Begins Share Sale at $42 Billion Valuation (2025-08 — notes eight consecutive profitable years)"
    url: "https://www.bloomberg.com/news/articles/2025-08-20/canva-begins-share-sale-at-42-billion-valuation-in-road-to-ipo"
    accessedAt: "2026-07-20"
---

[Figma](/en/articles/figma) and [Canva](/en/articles/canva) are both called design tools. Yet cross-referencing both articles' techStack mechanically turns up not a single shared technology token. Another zero, following DeepL vs. Nani Translation and X vs. Bluesky — except this zero is different in kind. The matching granularity simply talks past itself: the two companies stand on the same cloud.

:::fact
The two articles' techStacks share zero technology tokens. But Figma's side lists "AWS + CloudFront," stated explicitly in its official infrastructure blog, while Canva's side lists "Amazon EKS," "Amazon Bedrock," and "Amazon S3," stated explicitly in its official engineering blog and AWS's official case study. "AWS" and "Amazon EKS" are different tokens to the matcher — but in substance, both companies run on the same AWS. The measured zero overlap is what it looks like when two companies use the same cloud at entirely different levels of abstraction.
:::

:::pull
Figma treated AWS as bare land and built its own engine on top. Canva treated AWS as a shelf of finished parts and competed on assembly speed. What the zero-overlap measurement captures is two opposite buildings on the same plot of land.
:::

## Reasons to build, reasons to assemble

Figma's technology converges on a single point: performance at the limit. The renderer is written in C++ and compiled to WebAssembly via Emscripten — the official blog records that this migration alone cut load times by 3x. The rendering backend moved to WebGPU, and multiplayer editing runs on a custom protocol implemented in Rust that is neither OT nor CRDT. To reach professional-grade performance inside the constraints of a browser, Figma builds everything the off-the-shelf world can't provide.

Canva's technology spreads horizontally toward breadth. Containers run on EKS; ML features like background removal run on GPU nodes built reproducibly with Nix; generative AI runs on Bedrock; over 230 petabytes of storage sit in S3. The 100 billion events per week recorded in AWS's official case study are carried by a combination of managed services. What Canva engineers isn't the parts — it's how the parts fit together.

:::guess
This fork appears to come down to who each company serves. For Figma, whose users are professional designers, the performance ceiling is the product ceiling — so investing to raise the ceiling itself, by building its own engine, is rational. For Canva, whose users are not designers, value is decided by breadth of features and speed of shipping — so assembling proven managed services is the rational play. Under the same label, "design tool," the two companies appear to be maximizing different variables.
:::

## Their distance from capital takes the same shape as their architecture

Figma's capital story is a concentrated bet. It grew on VC funding; Adobe's agreed $20 billion acquisition collapsed under regulatory resistance; Figma collected a $1 billion termination fee and reached its own IPO in August 2025.

Canva's capital story is closer to self-sufficiency. As the [Canva](/en/articles/canva) article covered, founder Melanie Perkins was turned down by more than 100 VCs and learned to reach profitability without outside money — Canva stayed profitable for eight consecutive years on its way to a $42 billion valuation. In that same August 2025, what it chose was not an IPO but an employee share sale, staying private.

:::guess
How the money comes in appears to mirror how the technology was built. Figma concentrated outside capital into the high fixed cost of a custom engine, raising its performance ceiling. Canva, holding itself to the constraint of profitability, widened its feature range with off-the-shelf parts. August 2025 — in the same month, Figma chose to enter the public market, and Canva chose to hand employees liquidity while staying private. Each choice appears to sit on the straight-line extension of each company's architecture.
:::

Figma and Canva chose opposite ways of building — in technology and in capital — under the same label of "design tool." This time, the zero-shared-token measurement meant not "two different industries" but "two different buildings on the same land." Building what off-the-shelf can't do versus assembling what off-the-shelf does best — the takeaway from this matchup isn't which is right, but that a choice dictated by who you serve runs consistently from the rendering engine all the way to how you go public.
