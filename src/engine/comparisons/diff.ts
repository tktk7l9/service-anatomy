import { techRefs, type TechRef } from "@/engine/articles/tech";
import type { TechStackEntry } from "@/engine/articles/schema";

// 比較解剖の核 —— 2記事の techStack frontmatter から技術の重なりと違いを機械的に導く。
// 記事側に構造化データがすでにあるため、比較記事は追加の手入力なしで「安く作れる」
// （IDEAS.md の比較解剖フォーマット参照）。

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

/** 2記事の techStack を比較し、共有技術・A限定・B限定に分ける（slug 昇順）。 */
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
