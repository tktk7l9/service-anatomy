import { loadArticles, type Article, type ArticleFile } from "./load";
import { loadOgCards, type OgCard } from "./og-cards";
import { collectCategories, collectTags, filterByCategory, filterByTag, findBySlug } from "./query";
import { collectTech, filterByTech, type TechIndexEntry } from "./tech";
import { CATEGORY_IDS, type CategoryId } from "./taxonomy";

// モジュール読み込み時に全記事を一度だけ読む（サーバー専用）。
export const ALL_ARTICLES: Article[] = loadArticles();
const OG_CARDS = loadOgCards();

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

export function allTech(): TechIndexEntry[] {
  return collectTech(ALL_ARTICLES);
}

export function articlesByTech(slug: string): Article[] {
  return filterByTech(ALL_ARTICLES, slug);
}

export function ogCardFor(slug: string): OgCard | undefined {
  return OG_CARDS[slug];
}

export type { Article, ArticleFile };
