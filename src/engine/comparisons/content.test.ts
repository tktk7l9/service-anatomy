import { describe, expect, it } from "vitest";
import { ALL_ARTICLES } from "@/engine/articles";
import { renderMarkdown } from "@/engine/markdown/render";
import { locales } from "@/i18n/config";
import { ALL_COMPARISONS } from "./index";
import { localeParityIssues } from "./parity";

// 実比較解剖（content/comparisons/**）の横断整合性検証。articles/content.test.ts と対をなす。

const cases = ALL_COMPARISONS.map((comparison) => [comparison.slug, comparison] as const);
const todayIso = new Date().toISOString().slice(0, 10);
const articleSlugs = new Set(ALL_ARTICLES.map((article) => article.slug));

describe("比較解剖コンテンツの横断整合性", () => {
  it("slug が一意", () => {
    const slugs = ALL_COMPARISONS.map((comparison) => comparison.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  describe.each(cases)("%s", (_slug, comparison) => {
    const { slugA, slugB } = comparison.ja.frontmatter;

    it("slugA/slugB が実在の記事を指す", () => {
      expect(articleSlugs.has(slugA)).toBe(true);
      expect(articleSlugs.has(slugB)).toBe(true);
    });

    it("ja/en の言語中立フィールドが一致する", () => {
      expect(localeParityIssues(comparison)).toEqual([]);
    });

    it("lastVerified / publishedAt が未来日でない", () => {
      expect(comparison.ja.frontmatter.lastVerified <= todayIso).toBe(true);
      expect(comparison.ja.frontmatter.publishedAt <= todayIso).toBe(true);
    });

    it("publishedAt <= updatedAt", () => {
      expect(comparison.ja.frontmatter.publishedAt <= comparison.ja.frontmatter.updatedAt).toBe(true);
    });

    it.each(locales)("%s: renderMarkdown が変換でき、script を含まない", (locale) => {
      const html = renderMarkdown(comparison[locale].body);
      expect(html.length).toBeGreaterThan(0);
      expect(html).not.toContain("<script");
    });

    it.each(locales)("%s: 強調(**)がCJK括弧の隣接で失敗していない", (locale) => {
      const html = renderMarkdown(comparison[locale].body);
      expect(html).not.toContain("**");
    });
  });
});
