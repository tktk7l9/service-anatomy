import type { Article } from "./load";
import type { CategoryId } from "./taxonomy";
import { techRefs } from "./tech";

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

function techSlugSet(article: Article): Set<string> {
  const slugs = new Set<string>();
  for (const entry of article.ja.frontmatter.techStack) {
    for (const ref of techRefs(entry.name)) {
      slugs.add(ref.slug);
    }
  }
  return slugs;
}

/**
 * 関連記事。タグ共有（各+3）> カテゴリ一致（+2）> 技術共有（各+1）の重みで
 * スコアリングし、高い順に最大 limit 件返す。スコア 0 は関連なしとして除外し、
 * 同点は元の記事順（新しい順）を保つ。
 */
export function relatedArticles(articles: Article[], base: Article, limit = 3): Article[] {
  const baseTags = new Set(base.ja.frontmatter.tags);
  const baseTech = techSlugSet(base);
  return articles
    .filter((article) => article.slug !== base.slug)
    .map((article) => {
      let score = 0;
      if (article.ja.frontmatter.category === base.ja.frontmatter.category) score += 2;
      for (const tag of article.ja.frontmatter.tags) {
        if (baseTags.has(tag)) score += 3;
      }
      for (const slug of techSlugSet(article)) {
        if (baseTech.has(slug)) score += 1;
      }
      return { article, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.article);
}
