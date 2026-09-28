import { articleBySlug, type Article } from "@/engine/articles";
import { loadComparisons, type ComparisonItem } from "./load";

// Read all comparisons once at module load (server only). Same shape as articles.
export const ALL_COMPARISONS: ComparisonItem[] = loadComparisons();

export function comparisonBySlug(slug: string): ComparisonItem | undefined {
  return ALL_COMPARISONS.find((comparison) => comparison.slug === slug);
}

export interface ResolvedComparison {
  comparison: ComparisonItem;
  articleA: Article;
  articleB: Article;
}

/** Resolves the real articles that slugA/slugB point to. undefined if either is missing. */
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
