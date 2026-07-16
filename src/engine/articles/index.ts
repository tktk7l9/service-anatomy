import { loadArticles, type Article, type ArticleFile } from "./load";
import { collectCategories, collectTags, filterByCategory, filterByTag, findBySlug } from "./query";
import { CATEGORY_IDS, type CategoryId } from "./taxonomy";

// モジュール読み込み時に全記事を一度だけ読む（サーバー専用）。
export const ALL_ARTICLES: Article[] = loadArticles();

export function articleBySlug(slug: string): Article | undefined {
  return findBySlug(ALL_ARTICLES, slug);
}

export function articlesByCategory(category: CategoryId): Article[] {
  return filterByCategory(ALL_ARTICLES, category);
}

export function articlesByTag(tag: string): Article[] {
  return filterByTag(ALL_ARTICLES, tag);
}

export function allTags(): string[] {
  return collectTags(ALL_ARTICLES);
}

export function usedCategories(): CategoryId[] {
  return collectCategories(ALL_ARTICLES, CATEGORY_IDS);
}

export type { Article, ArticleFile };
