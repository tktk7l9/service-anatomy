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

// ALL_ARTICLES は実 content/articles を読む。記事0本の段階でも成立する
// 汎用的な性質だけを検証する（記事固有の検証は content.test.ts）。

describe("articles/index", () => {
  it("ALL_ARTICLES は公開日の新しい順", () => {
    const dates = ALL_ARTICLES.map((article) => article.ja.frontmatter.publishedAt);
    expect([...dates].sort().reverse()).toEqual(dates);
  });

  it("articleBySlug は存在しない slug に undefined", () => {
    expect(articleBySlug("no-such-slug")).toBeUndefined();
  });

  it("articleBySlug は全記事を引ける", () => {
    for (const article of ALL_ARTICLES) {
      expect(articleBySlug(article.slug)).toBe(article);
    }
  });

  it("articlesByCategory は ALL_ARTICLES の部分集合", () => {
    for (const id of CATEGORY_IDS) {
      for (const article of articlesByCategory(id)) {
        expect(ALL_ARTICLES).toContain(article);
        expect(article.ja.frontmatter.category).toBe(id);
      }
    }
  });

  it("articlesByTag は存在しないタグに空配列", () => {
    expect(articlesByTag("no-such-tag")).toEqual([]);
  });

  it("allTags は全記事のタグを網羅する", () => {
    const tags = allTags();
    for (const article of ALL_ARTICLES) {
      for (const tag of article.ja.frontmatter.tags) {
        expect(tags).toContain(tag);
      }
    }
  });

  it("usedCategories は定義済みカテゴリの部分列", () => {
    const used = usedCategories();
    expect(CATEGORY_IDS.filter((id) => used.includes(id))).toEqual(used);
  });

  it("allTech の各エントリは articlesByTech で count と同数の記事を引ける", () => {
    for (const entry of allTech()) {
      expect(articlesByTech(entry.slug)).toHaveLength(entry.count);
    }
    expect(articlesByTech("no-such-tech")).toEqual([]);
  });

  it("relatedTo は自身を含まない ALL_ARTICLES の部分集合を最大3件返す", () => {
    for (const article of ALL_ARTICLES) {
      const related = relatedTo(article);
      expect(related.length).toBeLessThanOrEqual(3);
      for (const other of related) {
        expect(other.slug).not.toBe(article.slug);
        expect(ALL_ARTICLES).toContain(other);
      }
    }
  });

  it("ogCardFor は存在しない slug に undefined、既知の slug には url 付きカードを返す", () => {
    expect(ogCardFor("no-such-slug")).toBeUndefined();
    for (const article of ALL_ARTICLES) {
      const card = ogCardFor(article.slug);
      if (card) {
        expect(card.url).toMatch(/^https:\/\//);
      }
    }
  });
});
