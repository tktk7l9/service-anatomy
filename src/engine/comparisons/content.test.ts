import { describe, expect, it } from "vitest";
import { ALL_ARTICLES } from "@/engine/articles";
import { renderMarkdown } from "@/engine/markdown/render";
import { locales } from "@/i18n/config";
import { ALL_COMPARISONS } from "./index";
import { localeParityIssues } from "./parity";

// Cross-cutting consistency checks over real comparisons (content/comparisons/**). Counterpart of articles/content.test.ts.

const cases = ALL_COMPARISONS.map((comparison) => [comparison.slug, comparison] as const);
const todayIso = new Date().toISOString().slice(0, 10);
const articleSlugs = new Set(ALL_ARTICLES.map((article) => article.slug));

describe("cross-cutting consistency of comparison content", () => {
  it("slugs are unique", () => {
    const slugs = ALL_COMPARISONS.map((comparison) => comparison.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  describe.each(cases)("%s", (_slug, comparison) => {
    const { slugA, slugB } = comparison.ja.frontmatter;

    it("slugA/slugB point to existing articles", () => {
      expect(articleSlugs.has(slugA)).toBe(true);
      expect(articleSlugs.has(slugB)).toBe(true);
    });

    it("ja/en language-neutral fields match", () => {
      expect(localeParityIssues(comparison)).toEqual([]);
    });

    it("lastVerified / publishedAt are not in the future", () => {
      expect(comparison.ja.frontmatter.lastVerified <= todayIso).toBe(true);
      expect(comparison.ja.frontmatter.publishedAt <= todayIso).toBe(true);
    });

    it("publishedAt <= updatedAt", () => {
      expect(comparison.ja.frontmatter.publishedAt <= comparison.ja.frontmatter.updatedAt).toBe(true);
    });

    it.each(locales)("%s: renderMarkdown converts it and it contains no script", (locale) => {
      const html = renderMarkdown(comparison[locale].body);
      expect(html.length).toBeGreaterThan(0);
      expect(html).not.toContain("<script");
    });

    it.each(locales)("%s: emphasis (**) does not break next to CJK brackets", (locale) => {
      const html = renderMarkdown(comparison[locale].body);
      expect(html).not.toContain("**");
    });
  });
});
