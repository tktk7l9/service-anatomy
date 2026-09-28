import { techRefs, type TechRef } from "@/engine/articles/tech";
import type { TechStackEntry } from "@/engine/articles/schema";

// Core of comparisons —— mechanically derives the overlap and differences in tech from two articles' techStack frontmatter.
// Articles already carry structured data, so comparisons are "cheap to make" with no extra manual input
// (see the comparison format in IDEAS.md).

export interface TechDiff {
  shared: TechRef[];
  onlyA: TechRef[];
  onlyB: TechRef[];
}

function collectRefs(techStack: TechStackEntry[]): Map<string, TechRef> {
  const refs = new Map<string, TechRef>();
  for (const entry of techStack) {
    for (const ref of techRefs(entry.name)) {
      if (!refs.has(ref.slug)) {
        refs.set(ref.slug, ref);
      }
    }
  }
  return refs;
}

function sortedRefs(refs: TechRef[]): TechRef[] {
  return [...refs].sort((a, b) => a.slug.localeCompare(b.slug));
}

/** Compares the techStack of two articles and splits it into shared / A only / B only (slug ascending). */
export function techOverlap(techStackA: TechStackEntry[], techStackB: TechStackEntry[]): TechDiff {
  const refsA = collectRefs(techStackA);
  const refsB = collectRefs(techStackB);
  const shared: TechRef[] = [];
  const onlyA: TechRef[] = [];
  for (const ref of refsA.values()) {
    (refsB.has(ref.slug) ? shared : onlyA).push(ref);
  }
  const onlyB: TechRef[] = [...refsB.values()].filter((ref) => !refsA.has(ref.slug));
  return { shared: sortedRefs(shared), onlyA: sortedRefs(onlyA), onlyB: sortedRefs(onlyB) };
}
