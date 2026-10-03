---
title: "Build on Bare Land, or Assemble from the Parts Shelf — Figma and Canva's Opposite Architectures on the Same AWS"
description: "Figma compiled C++ to WebAssembly and built its own multiplayer protocol; Canva assembled managed services — EKS, Bedrock, S3. Two design tools whose techStacks overlap only at the foundation — AWS and Amazon S3 — because both stand on the same AWS. A head-to-head dissection of two engineering strategies: build versus assemble."
lead: "Cross-referencing both articles' techStack mechanically yields two shared technologies: AWS and Amazon S3. Neither is a product feature — both are the foundation underneath. The renderer, the multiplayer engine, the generative AI: none of it overlaps. The two companies stand on the same cloud. The difference isn't the land. It's how they built on it."
slugA: "figma"
slugB: "canva"
publishedAt: "2026-07-21"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
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
  - label: "Figma official blog: Making multiplayer more reliable (2022-10 — checkpoints stored in S3)"
    url: "https://www.figma.com/blog/making-multiplayer-more-reliable/"
    accessedAt: "2026-09-28"
  - label: "Canva official engineering blog: GPU-accelerated ML with Kubernetes and Nix (2022-07 — 'Canva is an AWS shop', EKS)"
    url: "https://www.canva.dev/blog/engineering/supporting-gpu-accelerated-machine-learning-with-kubernetes-and-nix/"
    accessedAt: "2026-09-28"
  - label: "AWS official case study: Canva on AWS (Bedrock / S3 / Kinesis — 100 billion events per week)"
    url: "https://aws.amazon.com/solutions/case-studies/innovators/canva/"
    accessedAt: "2026-09-28"
  - label: "Bloomberg: Canva Begins Share Sale at $42 Billion Valuation (2025-08 — notes eight consecutive profitable years)"
    url: "https://www.bloomberg.com/news/articles/2025-08-20/canva-begins-share-sale-at-42-billion-valuation-in-road-to-ipo"
    accessedAt: "2026-07-20"
  - label: "The Next Web: Canva's backers cut $7.1bn from its valuation (2026-08-14 — press report citing the AFR)"
    url: "https://thenextweb.com/news/canva-valuation-cut-ai-costs-blackbird-airtree"
    accessedAt: "2026-09-28"
---

[Figma](/en/articles/figma) and [Canva](/en/articles/canva) are both called design tools. Yet cross-referencing both articles' techStack mechanically turns up only two shared technologies. AWS and Amazon S3 — neither one a product feature, both the foundation underneath. The two companies stand on the same cloud, and nothing they put on top of it overlaps.

:::fact
The two articles' techStacks share two technologies: AWS and Amazon S3. Figma's side lists "AWS + CloudFront," stated explicitly in its official infrastructure blog, and its official blog names Amazon S3 as where checkpoints are stored. On Canva's side, the official engineering blog states that "Canva is an AWS shop," and "Amazon EKS," "Amazon Bedrock," and "Amazon S3" are listed based on that blog and AWS's official case study. The overlap is limited to the platform and storage; in the layers above — Figma's C++/WebAssembly, WebGPU, Rust, DynamoDB, and PostgreSQL, and Canva's EKS, Nix, and Bedrock — not one entry overlaps.
:::

:::pull
Figma treated AWS as bare land and built its own engine on top. Canva treated AWS as a shelf of finished parts and competed on assembly speed. What the foundation-only overlap captures is two opposite buildings on the same plot of land.
:::

Correction (September 28, 2026). The first version stated that the two articles' techStacks share zero technology tokens. That measurement came from gaps in the individual articles' techStacks and did not reflect reality: the Canva article described running on AWS in its body but had no "AWS" entry in its techStack, and the Figma article did not list Amazon S3, where its checkpoints are stored. After filling in both techStacks from primary sources, the shared technologies are two: AWS and Amazon S3. The thesis of this piece — opposite ways of building on the same AWS — is unchanged.

## Reasons to build, reasons to assemble

Figma's technology converges on a single point: performance at the limit. The renderer is written in C++ and compiled to WebAssembly via Emscripten — the official blog records that this migration alone cut load times by 3x. The rendering backend moved to WebGPU, and multiplayer editing runs on a custom protocol implemented in Rust that is neither OT nor CRDT. To reach professional-grade performance inside the constraints of a browser, Figma builds everything the off-the-shelf world can't provide.

Canva's technology spreads horizontally toward breadth. Containers run on EKS; ML features like background removal run on GPU nodes built reproducibly with Nix; generative AI runs on Bedrock; over 230 petabytes of storage sit in S3. The 100 billion events per week recorded in AWS's official case study are carried by a combination of managed services. What Canva engineers isn't the parts — it's how the parts fit together.

:::guess
This fork appears to come down to who each company serves. For Figma, whose users are professional designers, the performance ceiling is the product ceiling — so investing to raise the ceiling itself, by building its own engine, is rational. For Canva, whose users are not designers, value is decided by breadth of features and speed of shipping — so assembling proven managed services is the rational play. Under the same label, "design tool," the two companies appear to be maximizing different variables.
:::

## Their distance from capital takes the same shape as their architecture

Figma's capital story is a concentrated bet. It grew on VC funding; Adobe's agreed $20 billion acquisition collapsed under regulatory resistance; Figma collected a $1 billion termination fee and reached its own IPO in August 2025.

Canva's capital story is closer to self-sufficiency. As the [Canva](/en/articles/canva) article covered, founder Melanie Perkins was turned down by more than 100 VCs and learned to reach profitability without outside money — Canva stayed profitable for eight consecutive years on its way to a $42 billion valuation. In that same August 2025, what it chose was not an IPO but an employee share sale, staying private. In August 2026, its backers Blackbird and Airtree were reported to have cut their estimate of Canva's valuation to $34.9 billion (The Next Web, August 14, 2026; not an official announcement by Canva).

:::guess
How the money comes in appears to mirror how the technology was built. Figma concentrated outside capital into the high fixed cost of a custom engine, raising its performance ceiling. Canva, holding itself to the constraint of profitability, widened its feature range with off-the-shelf parts. August 2025 — in the same month, Figma chose to enter the public market, and Canva chose to hand employees liquidity while staying private. Each choice appears to sit on the straight-line extension of each company's architecture.
:::

Figma and Canva chose opposite ways of building — in technology and in capital — under the same label of "design tool." That the shared technologies came down to just two pieces of foundation — AWS and Amazon S3 — meant not "two different industries" but "two different buildings on the same land." Building what off-the-shelf can't do versus assembling what off-the-shelf does best — the takeaway from this matchup isn't which is right, but that a choice dictated by who you serve runs consistently from the rendering engine all the way to how you go public.
