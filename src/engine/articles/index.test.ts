import { describe, expect, it } from "vitest";
import {
  ALL_ARTICLES,
  allTags,
  allTech,
  articleBySlug,
  articlesByCategory,
  articlesByTag,
  articlesByTech,
  ogCardFor,
  relatedTo,
  usedCategories,
} from "./index";
import { CATEGORY_IDS } from "./taxonomy";

// ALL_ARTICLES reads the real content/articles. Only generic properties that hold
// even with zero articles are checked here (article-specific checks live in content.test.ts).

describe("articles/index", () => {
  it("ALL_ARTICLES is newest publishedAt first", () => {
    const dates = ALL_ARTICLES.map((article) => article.ja.frontmatter.publishedAt);
    expect([...dates].sort().reverse()).toEqual(dates);
  });

  it("articleBySlug returns undefined for an unknown slug", () => {
    expect(articleBySlug("no-such-slug")).toBeUndefined();
  });

  it("articleBySlug finds every article", () => {
    for (const article of ALL_ARTICLES) {
      expect(articleBySlug(article.slug)).toBe(article);
    }
  });

  it("articlesByCategory is a subset of ALL_ARTICLES", () => {
    for (const id of CATEGORY_IDS) {
      for (const article of articlesByCategory(id)) {
        expect(ALL_ARTICLES).toContain(article);
        expect(article.ja.frontmatter.category).toBe(id);
      }
    }
  });

  it("articlesByTag returns an empty array for an unknown tag", () => {
    expect(articlesByTag("no-such-tag")).toEqual([]);
  });

  it("allTags covers the tags of every article", () => {
    const tags = allTags();
    for (const article of ALL_ARTICLES) {
      for (const tag of article.ja.frontmatter.tags) {
        expect(tags).toContain(tag);
      }
    }
  });

  it("usedCategories is a subsequence of the defined categories", () => {
    const used = usedCategories();
    expect(CATEGORY_IDS.filter((id) => used.includes(id))).toEqual(used);
  });

  it("each allTech entry finds as many articles via articlesByTech as its count", () => {
    for (const entry of allTech()) {
      expect(articlesByTech(entry.slug)).toHaveLength(entry.count);
    }
    expect(articlesByTech("no-such-tech")).toEqual([]);
  });

  it("relatedTo returns up to 3 articles from ALL_ARTICLES, excluding itself", () => {
    for (const article of ALL_ARTICLES) {
      const related = relatedTo(article);
      expect(related.length).toBeLessThanOrEqual(3);
      for (const other of related) {
        expect(other.slug).not.toBe(article.slug);
        expect(ALL_ARTICLES).toContain(other);
      }
    }
  });

  it("ogCardFor returns undefined for an unknown slug and a card with url for a known slug", () => {
    expect(ogCardFor("no-such-slug")).toBeUndefined();
    for (const article of ALL_ARTICLES) {
      const card = ogCardFor(article.slug);
      if (card) {
        expect(card.url).toMatch(/^https:\/\//);
      }
    }
  });
});
