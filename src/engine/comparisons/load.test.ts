import path from "node:path";
import { describe, expect, it } from "vitest";
import { loadComparisons } from "./load";

const FIXTURES = path.join(process.cwd(), "src", "engine", "comparisons", "__fixtures__");

describe("loadComparisons", () => {
  it("公開日の新しい順で返す", () => {
    const comparisons = loadComparisons(path.join(FIXTURES, "valid"));
    expect(comparisons.map((c) => c.slug)).toEqual(["gamma-vs-delta", "alpha-vs-beta"]);
  });

  it("frontmatter と本文をパースする", () => {
    const comparisons = loadComparisons(path.join(FIXTURES, "valid"));
    const alpha = comparisons.find((c) => c.slug === "alpha-vs-beta");
    expect(alpha?.ja.frontmatter.slugA).toBe("alpha-service");
    expect(alpha?.ja.body).toBe("本文。");
    expect(alpha?.en.frontmatter.title).toBe("Alpha vs Beta");
  });

  it("publishedAt が同日なら slug 昇順でタイブレークする", () => {
    const comparisons = loadComparisons(path.join(FIXTURES, "tie"));
    expect(comparisons.map((c) => c.slug)).toEqual(["aaa-vs-bbb", "zzz-vs-yyy"]);
  });

  it("rootDir が存在しなければ空配列", () => {
    expect(loadComparisons(path.join(FIXTURES, "no-such-dir"))).toEqual([]);
  });

  it("既定の rootDir（content/comparisons）でも例外なく読める", () => {
    expect(Array.isArray(loadComparisons())).toBe(true);
  });
});
