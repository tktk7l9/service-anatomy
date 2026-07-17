---
title: "Build the Model or Rent It — DeepL vs. Nani Translation, Two Doctrines of AI Translation"
description: "DeepL grows a translation-specialized LLM on its own giant GPU fleet; Nani Translation routes across multiple vendors' LLM APIs by speed. We dissect the two services' structured data and find zero shared technology — an extreme, opposite bet."
lead: "Same label, 'AI translation' — opposite bets. DeepL builds its own model; Nani Translation borrows others' models and competes on speed. Cross-referencing the techStack we dissected for both services turns up zero shared technology. We read into where that structural gap comes from, and what it means."
slugA: "deepl"
slugB: "nani-translation"
publishedAt: "2026-07-17"
updatedAt: "2026-07-17"
lastVerified: "2026-07-17"
sources:
  - label: "DeepL official blog: next-generation language model (2024-07 — fully in-house LLM)"
    url: "https://www.deepl.com/en/blog/next-gen-language-model"
    accessedAt: "2026-07-17"
  - label: "Zenn: the technical story behind Nani Translation (by developer catnose — LLM API routing)"
    url: "https://zenn.dev/catnose99/articles/nani-translate"
    accessedAt: "2026-07-17"
---

[DeepL](/en/articles/deepl) and [Nani Translation](/en/articles/nani-translation) both aim beyond "a machine that returns translated text." But cross-referencing their tech stacks mechanically turns up not a single shared technology — two companies attacking the same problem with opposite infrastructure strategies.

:::fact
DeepL's techStack is a "own both the model and the infrastructure" setup: a self-built translation-specialized LLM, over seven years of proprietary training data, and NVIDIA DGX SuperPOD — a self-operated GPU cluster. Nani Translation's techStack is a fleet of managed services (Next.js, Vercel, Turso, Upstash, Stripe) plus a routing layer that dynamically picks between Google, OpenAI, and Groq's LLM APIs based on time-to-first-token. Cross-referencing both articles' techStack frontmatter turned up zero overlapping technology tokens.
:::

:::pull
One company runs millions of dollars of its own GPUs; the other rents someone else's GPUs by the second and competes purely on speed. Under the same "AI translation" banner, the two spend capital in entirely different ways.
:::

## The cost of owning a model, and the cost of not

DeepL's bet is to keep growing a model specialized for a single task in-house, building a quality moat against general-purpose LLMs. Owning the training infrastructure as an asset means heavy fixed costs, but for a workload as predictable as translation, that can pay off in inference economics over the long run.

Nani Translation's bet is the opposite. By owning no model and dynamically routing across LLM APIs to whichever has the shortest time-to-first-token, it converts every vendor's model improvements directly into product improvements. In exchange for the agility to run on a team of one, its cost structure is tied directly to metered API pricing, at the mercy of LLM vendors' rate cards.

:::guess
This split likely mirrors a split in customers. DeepL's main battlefield is confidential corporate documents and bulk translation, where owning the model is also how it discharges data-governance accountability — "not used for training," "deleted after use." Nani Translation's main battlefield is casual individual conversation and writing help, where felt speed and price agility matter more than model ownership. The two staying technically non-overlapping looks less like coincidence than a rational division of territory.
:::

## Where this arrangement could break

:::guess
If general-purpose LLM translation quality keeps improving, Nani Translation's "route to whichever is best" approach could become even more advantageous — it captures the market's progress without having to fund the model-training investment itself. DeepL's defensive line, conversely, is the consistency, terminology control, and auditability that come from specialization — hard to replicate through API routing alone. If the two ever collide head-on in the same market, it will likely be the moment enterprises start choosing overwhelming speed and cost over a bit of consistency.
:::

DeepL grows its own model; Nani Translation rides other companies' models. The fact that their tech stacks share not a single technology is data-backed evidence that two survival strategies — different capital structures, different customers — coexist on the same field called AI translation.
