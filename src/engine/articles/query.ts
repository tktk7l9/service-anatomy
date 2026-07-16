import type { Article } from "./load";
import type { CategoryId } from "./taxonomy";

// 記事コレクションに対する純関数クエリ。index.ts が ALL_ARTICLES に束縛する。

export function findBySlug(articles: Article[], slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function filterByCategory(articles: Article[], category: CategoryId): Article[] {
  return articles.filter((article) => article.ja.frontmatter.category === category);
}

export function filterByTag(articles: Article[], tag: string): Article[] {
  return articles.filter((article) => article.ja.frontmatter.tags.includes(tag));
}

/** 全記事のタグを重複なし・昇順で集める。 */
export function collectTags(articles: Article[]): string[] {
  const tags = new Set<string>();
  for (const article of articles) {
    for (const tag of article.ja.frontmatter.tags) {
      tags.add(tag);
    }
  }
  return [...tags].sort();
}

/** 記事が実際に使っているカテゴリを、定義順を保って集める。 */
export function collectCategories(articles: Article[], categoryIds: readonly CategoryId[]): CategoryId[] {
  const used = new Set(articles.map((article) => article.ja.frontmatter.category));
  return categoryIds.filter((id) => used.has(id));
}
