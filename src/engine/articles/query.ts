import type { Article } from "./load";
import type { CategoryId } from "./taxonomy";
import { techRefs } from "./tech";

// Pure-function queries over an article collection. index.ts binds them to ALL_ARTICLES.

export function findBySlug(articles: Article[], slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function filterByCategory(articles: Article[], category: CategoryId): Article[] {
  return articles.filter((article) => article.ja.frontmatter.category === category);
}

export function filterByTag(articles: Article[], tag: string): Article[] {
  return articles.filter((article) => article.ja.frontmatter.tags.includes(tag));
}

/** Collects the tags of all articles, deduplicated and sorted ascending. */
export function collectTags(articles: Article[]): string[] {
  const tags = new Set<string>();
  for (const article of articles) {
    for (const tag of article.ja.frontmatter.tags) {
      tags.add(tag);
    }
  }
  return [...tags].sort();
}

/** Collects the categories actually used by articles, keeping definition order. */
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
 * Related articles. Scored with weights shared tag (+3 each) > same category (+2) > shared tech
 * (+1 each), returning at most limit items, highest first. A score of 0 counts as unrelated and
 * is excluded; ties keep the original article order (newest first).
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
