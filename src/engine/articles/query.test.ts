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
  it("findBySlug returns the matching article", () => {
    expect(findBySlug(articles, "beta")?.slug).toBe("beta");
    expect(findBySlug(articles, "nope")).toBeUndefined();
  });

  it("filterByCategory filters by category", () => {
    expect(filterByCategory(articles, "game").map((a) => a.slug)).toEqual(["alpha", "gamma"]);
    expect(filterByCategory(articles, "saas")).toEqual([]);
  });

  it("filterByTag filters by tag", () => {
    expect(filterByTag(articles, "steam").map((a) => a.slug)).toEqual(["alpha", "beta"]);
    expect(filterByTag(articles, "nope")).toEqual([]);
  });

  it("collectTags is deduplicated and ascending", () => {
    expect(collectTags(articles)).toEqual(["ai", "indie", "multiplayer", "steam"]);
  });

  it("collectCategories returns used categories in definition order", () => {
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

  it("excludes itself and ranks by shared tags > same category > shared tech", () => {
    const base = makeArticle("base", {
      category: "game",
      tags: ["steam", "indie"],
      techStack: techStack("React"),
    });
    const pool = [
      base,
      // shared tech only (+1)
      makeArticle("tech-only", { category: "saas", tags: ["ai"], techStack: techStack("React") }),
      // same category only (+2)
      makeArticle("same-category", { category: "game", tags: ["ai"], techStack: techStack("Vue") }),
      // shared tag only (+3)
      makeArticle("shared-tag", { category: "saas", tags: ["steam"], techStack: techStack("Vue") }),
    ];
    expect(relatedArticles(pool, base).map((a) => a.slug)).toEqual([
      "shared-tag",
      "same-category",
      "tech-only",
    ]);
  });

  it("excludes articles with score 0", () => {
    const base = makeArticle("base", { category: "game", tags: ["steam"], techStack: techStack("React") });
    const unrelated = makeArticle("unrelated", {
      category: "saas",
      tags: ["ai"],
      techStack: techStack("Vue"),
    });
    expect(relatedArticles([base, unrelated], base)).toEqual([]);
  });

  it("detects shared tech even with compound names (A / B)", () => {
    const base = makeArticle("base", { category: "game", tags: ["a"], techStack: techStack("Next.js") });
    const composite = makeArticle("composite", {
      category: "saas",
      tags: ["b"],
      techStack: techStack("Next.js / Vercel"),
    });
    expect(relatedArticles([base, composite], base).map((a) => a.slug)).toEqual(["composite"]);
  });

  it("cuts off at limit and keeps original order on ties", () => {
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
