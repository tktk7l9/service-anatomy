import { describe, expect, it } from "vitest";
import { makeRawComparisonFrontmatter } from "./__fixtures__/factories";
import { parseComparisonFrontmatter } from "./schema";

function mutate(fn: (raw: Record<string, unknown>) => void): Record<string, unknown> {
  const raw = makeRawComparisonFrontmatter();
  fn(raw);
  return raw;
}

describe("parseComparisonFrontmatter", () => {
  it("parses valid frontmatter", () => {
    const parsed = parseComparisonFrontmatter(makeRawComparisonFrontmatter(), "ctx");
    expect(parsed.title).toBe("Alpha vs Beta");
    expect(parsed.slugA).toBe("alpha-service");
    expect(parsed.slugB).toBe("beta-service");
    expect(parsed.sources).toHaveLength(1);
  });

  it.each([
    ["frontmatter is a string", () => "not-object" as unknown, /frontmatter must be an object/],
  ])("fails when %s", (_name, make, pattern) => {
    expect(() => parseComparisonFrontmatter(make(), "ctx")).toThrow(pattern);
  });

  it.each([
    ["title is missing", (r: Record<string, unknown>) => delete r.title, /title must be a non-empty string/],
    ["slugA is not kebab-case", (r: Record<string, unknown>) => (r.slugA = "Alpha Service"), /slugA must be a kebab-case/],
    ["slugB is not kebab-case", (r: Record<string, unknown>) => (r.slugB = "Beta_Service"), /slugB must be a kebab-case/],
    [
      "slugA and slugB are the same",
      (r: Record<string, unknown>) => (r.slugB = r.slugA),
      /slugA and slugB must point to different articles/,
    ],
    ["publishedAt has an invalid format", (r: Record<string, unknown>) => (r.publishedAt = "2026/07/18"), /publishedAt must be a quoted string in "YYYY-MM-DD"/],
    ["sources is empty", (r: Record<string, unknown>) => (r.sources = []), /sources must be an array with at least one item/],
  ])("fails when %s", (_name, mutator, pattern) => {
    expect(() => parseComparisonFrontmatter(mutate(mutator as (r: Record<string, unknown>) => void), "ctx")).toThrow(
      pattern,
    );
  });

  it("error messages include the context (file name)", () => {
    const raw = mutate((r) => delete r.title);
    expect(() => parseComparisonFrontmatter(raw, "deepl-vs-nani/ja.md")).toThrow(/^deepl-vs-nani\/ja\.md: /);
  });
});
