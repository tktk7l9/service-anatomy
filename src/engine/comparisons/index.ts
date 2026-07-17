import { articleBySlug, type Article } from "@/engine/articles";
import { loadComparisons, type ComparisonItem } from "./load";

// モジュール読み込み時に全比較解剖を一度だけ読む（サーバー専用）。articles と同型。
export const ALL_COMPARISONS: ComparisonItem[] = loadComparisons();

export function comparisonBySlug(slug: string): ComparisonItem | undefined {
  return ALL_COMPARISONS.find((comparison) => comparison.slug === slug);
}

export interface ResolvedComparison {
  comparison: ComparisonItem;
  articleA: Article;
  articleB: Article;
}

/** slugA/slugB が指す実記事を解決する。片方でも見つからなければ undefined。 */
export function resolveComparison(comparison: ComparisonItem): ResolvedComparison | undefined {
  const articleA = articleBySlug(comparison.ja.frontmatter.slugA);
  const articleB = articleBySlug(comparison.ja.frontmatter.slugB);
  if (!articleA || !articleB) {
    return undefined;
  }
  return { comparison, articleA, articleB };
}

export type { ComparisonFile, ComparisonItem } from "./load";
export type { ComparisonFrontmatter } from "./schema";
