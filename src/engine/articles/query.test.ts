import { describe, expect, it } from "vitest";
import { makeArticle } from "./__fixtures__/factories";
import { collectCategories, collectTags, filterByCategory, filterByTag, findBySlug } from "./query";
import { CATEGORY_IDS } from "./taxonomy";

const articles = [
  makeArticle("alpha", { category: "game", tags: ["steam", "multiplayer"] }),
  makeArticle("beta", { category: "ai-tool", tags: ["ai", "steam"] }),
  makeArticle("gamma", { category: "game", tags: ["indie"] }),
];

describe("articles/query", () => {
  it("findBySlug は一致する記事を返す", () => {
    expect(findBySlug(articles, "beta")?.slug).toBe("beta");
    expect(findBySlug(articles, "nope")).toBeUndefined();
  });

  it("filterByCategory はカテゴリで絞る", () => {
    expect(filterByCategory(articles, "game").map((a) => a.slug)).toEqual(["alpha", "gamma"]);
    expect(filterByCategory(articles, "saas")).toEqual([]);
  });

  it("filterByTag はタグで絞る", () => {
    expect(filterByTag(articles, "steam").map((a) => a.slug)).toEqual(["alpha", "beta"]);
    expect(filterByTag(articles, "nope")).toEqual([]);
  });

  it("collectTags は重複なし・昇順", () => {
    expect(collectTags(articles)).toEqual(["ai", "indie", "multiplayer", "steam"]);
  });

  it("collectCategories は使用中のカテゴリを定義順で返す", () => {
    expect(collectCategories(articles, CATEGORY_IDS)).toEqual(["game", "ai-tool"]);
    expect(collectCategories([], CATEGORY_IDS)).toEqual([]);
  });
});
