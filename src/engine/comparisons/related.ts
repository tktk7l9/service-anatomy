import type { Article } from "@/engine/articles/load";
import { affiliateSlots } from "@/engine/articles/disclosure";
import type { Locale } from "@/i18n/config";
import type { ComparisonItem } from "./load";

// Pure helpers that connect articles and comparisons. They take the data as arguments
// (no module-level content reads), so they are testable with fixtures.

/** A comparison that covers a given article, with the article on the other side. */
export interface ComparisonOfArticle {
  comparison: ComparisonItem;
  /** The article on the other side of the comparison ("vs what"). */
  other: Article;
  articleA: Article;
  articleB: Article;
}

/**
 * Comparisons that include the article `slug` on either side, newest publishedAt first
 * (same day: comparison slug ascending). Comparisons whose sides do not both resolve to an
 * article are skipped, because their page is not generated.
 */
export function comparisonsOfArticle(
  slug: string,
  comparisons: readonly ComparisonItem[],
  findArticle: (slug: string) => Article | undefined,
): ComparisonOfArticle[] {
  return comparisons
    .flatMap((comparison) => {
      const { slugA, slugB } = comparison.ja.frontmatter;
      if (slugA !== slug && slugB !== slug) return [];
      const articleA = findArticle(slugA);
      const articleB = findArticle(slugB);
      if (!articleA || !articleB) return [];
      const other = slugA === slug ? articleB : articleA;
      return [{ comparison, other, articleA, articleB }];
    })
    .sort(
      (a, b) =>
        b.comparison.ja.frontmatter.publishedAt.localeCompare(a.comparison.ja.frontmatter.publishedAt) ||
        a.comparison.slug.localeCompare(b.comparison.slug),
    );
}

/**
 * Whether a comparison page contains advertising: either compared article has an affiliate
 * link. Same affiliateSlots() condition the comparison page uses for its notice and PR cards,
 * so every "PR" label pointing at the page agrees with the page itself.
 */
export function comparisonHasAdvertising(
  sides: { articleA: Article; articleB: Article },
  locale: Locale,
): boolean {
  const { articleA, articleB } = sides;
  return (
    affiliateSlots([
      { slug: articleA.slug, frontmatter: articleA[locale].frontmatter },
      { slug: articleB.slug, frontmatter: articleB[locale].frontmatter },
    ]).length > 0
  );
}
