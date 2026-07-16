import { describe, expect, it } from "vitest";
import { makeArticle } from "./__fixtures__/factories";
import {
  collectCategories,
  collectTags,
  filterByCategory,
  filterByTag,
  findBySlug,
  relatedArticles,
} from "./query";
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

describe("articles/relatedArticles", () => {
  const techStack = (...names: string[]) =>
    names.map((name) => ({
      layer: "Layer",
      name,
      confidence: "likely" as const,
      evidence: "テスト",
    }));

  it("自身を除外し、タグ共有 > カテゴリ一致 > 技術共有 の重みで並べる", () => {
    const base = makeArticle("base", {
      category: "game",
      tags: ["steam", "indie"],
      techStack: techStack("React"),
    });
    const pool = [
      base,
      // 技術共有のみ (+1)
      makeArticle("tech-only", { category: "saas", tags: ["ai"], techStack: techStack("React") }),
      // カテゴリ一致のみ (+2)
      makeArticle("same-category", { category: "game", tags: ["ai"], techStack: techStack("Vue") }),
      // タグ共有のみ (+3)
      makeArticle("shared-tag", { category: "saas", tags: ["steam"], techStack: techStack("Vue") }),
    ];
    expect(relatedArticles(pool, base).map((a) => a.slug)).toEqual([
      "shared-tag",
      "same-category",
      "tech-only",
    ]);
  });

  it("スコア 0 の記事は含めない", () => {
    const base = makeArticle("base", { category: "game", tags: ["steam"], techStack: techStack("React") });
    const unrelated = makeArticle("unrelated", {
      category: "saas",
      tags: ["ai"],
      techStack: techStack("Vue"),
    });
    expect(relatedArticles([base, unrelated], base)).toEqual([]);
  });

  it("複合表記の技術名（A / B）でも共有を検出する", () => {
    const base = makeArticle("base", { category: "game", tags: ["a"], techStack: techStack("Next.js") });
    const composite = makeArticle("composite", {
      category: "saas",
      tags: ["b"],
      techStack: techStack("Next.js / Vercel"),
    });
    expect(relatedArticles([base, composite], base).map((a) => a.slug)).toEqual(["composite"]);
  });

  it("limit 件で打ち切り、同点は元の記事順を保つ", () => {
    const base = makeArticle("base", { category: "game", tags: ["steam"], techStack: techStack("React") });
    const pool = [
      base,
      makeArticle("first", { category: "game", tags: ["x"], techStack: techStack("Vue") }),
      makeArticle("second", { category: "game", tags: ["y"], techStack: techStack("Vue") }),
      makeArticle("third", { category: "game", tags: ["z"], techStack: techStack("Vue") }),
    ];
    expect(relatedArticles(pool, base, 2).map((a) => a.slug)).toEqual(["first", "second"]);
    expect(relatedArticles(pool, base).map((a) => a.slug)).toEqual(["first", "second", "third"]);
  });
});
