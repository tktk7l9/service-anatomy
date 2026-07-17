import { describe, expect, it } from "vitest";
import { makeRawComparisonFrontmatter } from "./__fixtures__/factories";
import { parseComparisonFrontmatter } from "./schema";

function mutate(fn: (raw: Record<string, unknown>) => void): Record<string, unknown> {
  const raw = makeRawComparisonFrontmatter();
  fn(raw);
  return raw;
}

describe("parseComparisonFrontmatter", () => {
  it("正しい frontmatter をパースする", () => {
    const parsed = parseComparisonFrontmatter(makeRawComparisonFrontmatter(), "ctx");
    expect(parsed.title).toBe("Alpha vs Beta");
    expect(parsed.slugA).toBe("alpha-service");
    expect(parsed.slugB).toBe("beta-service");
    expect(parsed.sources).toHaveLength(1);
  });

  it.each([
    ["frontmatter が文字列", () => "not-object" as unknown, /frontmatter はオブジェクト/],
  ])("%s なら失敗", (_name, make, pattern) => {
    expect(() => parseComparisonFrontmatter(make(), "ctx")).toThrow(pattern);
  });

  it.each([
    ["title 欠落", (r: Record<string, unknown>) => delete r.title, /title は空でない文字列/],
    ["slugA が kebab-case でない", (r: Record<string, unknown>) => (r.slugA = "Alpha Service"), /slugA は kebab-case/],
    ["slugB が kebab-case でない", (r: Record<string, unknown>) => (r.slugB = "Beta_Service"), /slugB は kebab-case/],
    [
      "slugA と slugB が同じ",
      (r: Record<string, unknown>) => (r.slugB = r.slugA),
      /slugA と slugB は異なる記事を指す必要があります/,
    ],
    ["publishedAt が形式外", (r: Record<string, unknown>) => (r.publishedAt = "2026/07/18"), /publishedAt は "YYYY-MM-DD"/],
    ["sources が空", (r: Record<string, unknown>) => (r.sources = []), /sources は1件以上の配列/],
  ])("%s なら失敗", (_name, mutator, pattern) => {
    expect(() => parseComparisonFrontmatter(mutate(mutator as (r: Record<string, unknown>) => void), "ctx")).toThrow(
      pattern,
    );
  });

  it("エラーメッセージにコンテキスト（ファイル名）が入る", () => {
    const raw = mutate((r) => delete r.title);
    expect(() => parseComparisonFrontmatter(raw, "deepl-vs-nani/ja.md")).toThrow(/^deepl-vs-nani\/ja\.md: /);
  });
});
