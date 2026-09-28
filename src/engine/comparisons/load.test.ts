import path from "node:path";
import { describe, expect, it } from "vitest";
import { loadComparisons } from "./load";

const FIXTURES = path.join(process.cwd(), "src", "engine", "comparisons", "__fixtures__");

describe("loadComparisons", () => {
  it("returns newest publishedAt first", () => {
    const comparisons = loadComparisons(path.join(FIXTURES, "valid"));
    expect(comparisons.map((c) => c.slug)).toEqual(["gamma-vs-delta", "alpha-vs-beta"]);
  });

  it("parses frontmatter and body", () => {
    const comparisons = loadComparisons(path.join(FIXTURES, "valid"));
    const alpha = comparisons.find((c) => c.slug === "alpha-vs-beta");
    expect(alpha?.ja.frontmatter.slugA).toBe("alpha-service");
    expect(alpha?.ja.body).toBe("本文。");
    expect(alpha?.en.frontmatter.title).toBe("Alpha vs Beta");
  });

  it("breaks publishedAt ties by ascending slug", () => {
    const comparisons = loadComparisons(path.join(FIXTURES, "tie"));
    expect(comparisons.map((c) => c.slug)).toEqual(["aaa-vs-bbb", "zzz-vs-yyy"]);
  });

  it("empty array when rootDir does not exist", () => {
    expect(loadComparisons(path.join(FIXTURES, "no-such-dir"))).toEqual([]);
  });

  it("reads every real comparison from the default rootDir (content/comparisons)", () => {
    // Same reason as articles/load.test.ts (Array.isArray misses []). Measured: 12 comparisons (2026-09-12).
    expect(loadComparisons().length).toBeGreaterThanOrEqual(10);
  });
});
