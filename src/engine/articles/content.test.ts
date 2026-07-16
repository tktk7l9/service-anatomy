import { describe, expect, it } from "vitest";
import { locales } from "@/i18n/config";
import { renderMarkdown } from "../markdown/render";
import { extractToc } from "../markdown/toc";
import { ALL_ARTICLES } from "./index";
import { localeParityIssues } from "./parity";

// 実記事（content/articles/**）の横断整合性検証。
// 記事を追加すると自動的にここの検証対象に含まれる。

const cases = ALL_ARTICLES.map((article) => [article.slug, article] as const);
const todayIso = new Date().toISOString().slice(0, 10);

describe("記事コンテンツの横断整合性", () => {
  it("slug が一意", () => {
    const slugs = ALL_ARTICLES.map((article) => article.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  describe.each(cases)("%s", (_slug, article) => {
    it("ja/en の言語中立フィールドが一致する", () => {
      expect(localeParityIssues(article)).toEqual([]);
    });

    it("lastVerified / publishedAt が未来日でない", () => {
      expect(article.ja.frontmatter.lastVerified <= todayIso).toBe(true);
      expect(article.ja.frontmatter.publishedAt <= todayIso).toBe(true);
    });

    it("publishedAt <= updatedAt", () => {
      expect(article.ja.frontmatter.publishedAt <= article.ja.frontmatter.updatedAt).toBe(true);
    });

    it.each(locales)("%s: 本文が4部構成以上（h2 が4本以上）", (locale) => {
      const sections = extractToc(article[locale].body).filter((entry) => entry.depth === 2);
      expect(sections.length).toBeGreaterThanOrEqual(4);
    });

    it.each(locales)("%s: scorecard / techstack をちょうど1回ずつ差し込む", (locale) => {
      const html = renderMarkdown(article[locale].body);
      expect(html.match(/data-component="scorecard"/g)).toHaveLength(1);
      expect(html.match(/data-component="techstack"/g)).toHaveLength(1);
    });

    it.each(locales)("%s: renderMarkdown が変換でき、script を含まない", (locale) => {
      const html = renderMarkdown(article[locale].body);
      expect(html.length).toBeGreaterThan(0);
      expect(html).not.toContain("<script");
    });

    it.each(locales)("%s: 強調(**)がCJK括弧の隣接で失敗していない", (locale) => {
      // CommonMark は「」等の約物に隣接した ** を強調として解釈しないことがある。
      // 失敗すると生の ** がHTMLに残るため、ここで検出する。
      const html = renderMarkdown(article[locale].body);
      expect(html).not.toContain("**");
    });
  });
});
