import { describe, expect, it } from "vitest";
import ogImageHosts from "../../../content/og-image-hosts.json";
import { locales } from "@/i18n/config";
import { renderMarkdown } from "../markdown/render";
import { extractToc } from "../markdown/toc";
import { ALL_ARTICLES } from "./index";
import { loadOgCards } from "./og-cards";
import { localeParityIssues } from "./parity";

// Cross-cutting consistency checks over real articles (content/articles/**).
// Adding an article automatically includes it in these checks.

const cases = ALL_ARTICLES.map((article) => [article.slug, article] as const);
const todayIso = new Date().toISOString().slice(0, 10);
const ogCards = loadOgCards();

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
      // CommonMark sometimes does not treat ** adjacent to punctuation such as 「」 as emphasis.
      // When that happens raw ** remains in the HTML, so detect it here.
      const html = renderMarkdown(article[locale].body);
      expect(html).not.toContain("**");
    });

    it("revisions（定点観測）があれば未来日でなく時系列順・updatedAt 以前", () => {
      const revisions = article.ja.frontmatter.revisions;
      if (!revisions) {
        return;
      }
      let prev = "";
      for (const revision of revisions) {
        expect(revision.date <= todayIso).toBe(true);
        expect(revision.date >= prev).toBe(true);
        prev = revision.date;
      }
      expect(prev <= article.ja.frontmatter.updatedAt).toBe(true);
    });

    it("og-cards.json にリンクカードのエントリがある（漏れたら npm run og-cards を実行）", () => {
      expect(ogCards[article.slug]).toBeDefined();
      expect(ogCards[article.slug].url).toBe(article.ja.frontmatter.serviceUrl);
    });

    it("リンクカード画像のオリジンが og-image-hosts.json（CSP img-src）に含まれる", () => {
      // Images not included are silently blocked by the CSP, so detect it here.
      const image = ogCards[article.slug]?.image;
      if (image) {
        expect(ogImageHosts).toContain(new URL(image).origin);
      }
    });
  });
});
