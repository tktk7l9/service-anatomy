import { describe, expect, it } from "vitest";
import { ALL_ARTICLES } from "@/engine/articles";
import { ALL_COMPARISONS, comparisonBySlug, resolveComparison } from "./index";

// ALL_COMPARISONS は実 content/comparisons を読む。

describe("comparisons/index", () => {
  it("comparisonBySlug は存在しない slug に undefined", () => {
    expect(comparisonBySlug("no-such-comparison")).toBeUndefined();
  });

  it("comparisonBySlug は全比較解剖を引ける", () => {
    for (const comparison of ALL_COMPARISONS) {
      expect(comparisonBySlug(comparison.slug)).toBe(comparison);
    }
  });

  it("resolveComparison は slugA/slugB を実記事に解決する", () => {
    for (const comparison of ALL_COMPARISONS) {
      const resolved = resolveComparison(comparison);
      expect(resolved).toBeDefined();
      expect(resolved?.articleA.slug).toBe(comparison.ja.frontmatter.slugA);
      expect(resolved?.articleB.slug).toBe(comparison.ja.frontmatter.slugB);
      expect(ALL_ARTICLES).toContain(resolved?.articleA);
      expect(ALL_ARTICLES).toContain(resolved?.articleB);
    }
  });

  function makeFakeComparison(slugA: string, slugB: string) {
    const frontmatter = {
      title: "t",
      description: "d",
      lead: "l",
      slugA,
      slugB,
      publishedAt: "2026-07-18",
      updatedAt: "2026-07-18",
      lastVerified: "2026-07-18",
      sources: [{ label: "l", url: "https://example.com", accessedAt: "2026-07-18" }],
    };
    return { slug: "fake", ja: { frontmatter, body: "b" }, en: { frontmatter, body: "b" } };
  }

  it("resolveComparison は slugA/slugB のどちらが未解決でも undefined", () => {
    expect(resolveComparison(makeFakeComparison("no-such-a", "no-such-b"))).toBeUndefined();
    expect(resolveComparison(makeFakeComparison(ALL_ARTICLES[0].slug, "no-such-b"))).toBeUndefined();
  });
});
