import { describe, expect, it } from "vitest";
import { ALL_ARTICLES } from "@/engine/articles";
import { ALL_COMPARISONS, comparisonBySlug, comparisonsFor, resolveComparison } from "./index";

// ALL_COMPARISONS reads the real content/comparisons.

describe("comparisons/index", () => {
  it("comparisonBySlug returns undefined for an unknown slug", () => {
    expect(comparisonBySlug("no-such-comparison")).toBeUndefined();
  });

  it("comparisonBySlug finds every comparison", () => {
    for (const comparison of ALL_COMPARISONS) {
      expect(comparisonBySlug(comparison.slug)).toBe(comparison);
    }
  });

  it("resolveComparison resolves slugA/slugB to real articles", () => {
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

  it("resolveComparison returns undefined if either slugA or slugB is unresolved", () => {
    expect(resolveComparison(makeFakeComparison("no-such-a", "no-such-b"))).toBeUndefined();
    expect(resolveComparison(makeFakeComparison(ALL_ARTICLES[0].slug, "no-such-b"))).toBeUndefined();
  });
});

describe("comparisonsFor", () => {
  it("lists every real comparison that includes the article, on either side", () => {
    for (const comparison of ALL_COMPARISONS) {
      const { slugA, slugB } = comparison.ja.frontmatter;
      const ofA = comparisonsFor(slugA).find((r) => r.comparison === comparison);
      const ofB = comparisonsFor(slugB).find((r) => r.comparison === comparison);
      expect(ofA?.other.slug).toBe(slugB);
      expect(ofB?.other.slug).toBe(slugA);
    }
  });

  it("finds the Money Forward vs Yayoi and freee vs Yayoi comparisons for yayoi", () => {
    const slugs = comparisonsFor("yayoi").map((r) => r.comparison.slug);
    expect(slugs).toEqual(expect.arrayContaining(["moneyforward-cloud-vs-yayoi", "freee-vs-yayoi"]));
  });
});
