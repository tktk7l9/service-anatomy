import { describe, expect, it } from "vitest";
import { makeArticle } from "@/engine/articles/__fixtures__/factories";
import type { Article } from "@/engine/articles/load";
import { makeComparisonItem } from "./__fixtures__/factories";
import { comparisonHasAdvertising, comparisonsOfArticle } from "./related";

const alpha = makeArticle("alpha");
const beta = makeArticle("beta");
const gamma = makeArticle("gamma");
const articles = new Map<string, Article>([alpha, beta, gamma].map((a) => [a.slug, a]));
const find = (slug: string) => articles.get(slug);

describe("comparisonsOfArticle", () => {
  const ab = makeComparisonItem("alpha-vs-beta", { slugA: "alpha", slugB: "beta", publishedAt: "2026-07-01" });
  const ga = makeComparisonItem("gamma-vs-alpha", { slugA: "gamma", slugB: "alpha", publishedAt: "2026-08-01" });
  const bg = makeComparisonItem("beta-vs-gamma", { slugA: "beta", slugB: "gamma", publishedAt: "2026-09-01" });
  const sameDay = makeComparisonItem("alpha-vs-gamma", { slugA: "alpha", slugB: "gamma", publishedAt: "2026-07-01" });

  it("returns comparisons on either side with the other side's article, newest first", () => {
    const result = comparisonsOfArticle("alpha", [ab, ga, bg], find);
    expect(result.map((r) => r.comparison.slug)).toEqual(["gamma-vs-alpha", "alpha-vs-beta"]);
    expect(result.map((r) => r.other.slug)).toEqual(["gamma", "beta"]);
    expect(result[0].articleA).toBe(gamma);
    expect(result[0].articleB).toBe(alpha);
  });

  it("orders comparisons published on the same day by slug", () => {
    const result = comparisonsOfArticle("alpha", [sameDay, ab], find);
    expect(result.map((r) => r.comparison.slug)).toEqual(["alpha-vs-beta", "alpha-vs-gamma"]);
  });

  it("does not mutate the input", () => {
    const input = [ab, ga];
    comparisonsOfArticle("alpha", input, find);
    expect(input).toEqual([ab, ga]);
  });

  it("returns an empty list for an article that is in no comparison", () => {
    expect(comparisonsOfArticle("delta", [ab, ga, bg], find)).toEqual([]);
  });

  it("skips comparisons whose other side does not resolve", () => {
    const broken = makeComparisonItem("alpha-vs-missing", { slugA: "alpha", slugB: "missing" });
    const brokenA = makeComparisonItem("missing-vs-alpha", { slugA: "missing", slugB: "alpha" });
    expect(comparisonsOfArticle("alpha", [broken, brokenA], find)).toEqual([]);
  });
});

describe("comparisonHasAdvertising", () => {
  const affiliate = { url: "https://example.com/aff", program: "Example" };
  const withLink = makeArticle("with-link", { affiliate });
  const enOnly = makeArticle("en-only", {}, { affiliate });

  it("is true when either side has an affiliate link", () => {
    expect(comparisonHasAdvertising({ articleA: alpha, articleB: withLink }, "ja")).toBe(true);
    expect(comparisonHasAdvertising({ articleA: withLink, articleB: alpha }, "en")).toBe(true);
  });

  it("is false when neither side has one", () => {
    expect(comparisonHasAdvertising({ articleA: alpha, articleB: beta }, "ja")).toBe(false);
  });

  it("reads the frontmatter of the given locale", () => {
    expect(comparisonHasAdvertising({ articleA: alpha, articleB: enOnly }, "ja")).toBe(false);
    expect(comparisonHasAdvertising({ articleA: alpha, articleB: enOnly }, "en")).toBe(true);
  });
});
