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

describe("cross-cutting consistency of article content", () => {
  it("slugs are unique", () => {
    const slugs = ALL_ARTICLES.map((article) => article.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  describe.each(cases)("%s", (_slug, article) => {
    it("ja/en language-neutral fields match", () => {
      expect(localeParityIssues(article)).toEqual([]);
    });

    it("lastVerified / publishedAt are not in the future", () => {
      expect(article.ja.frontmatter.lastVerified <= todayIso).toBe(true);
      expect(article.ja.frontmatter.publishedAt <= todayIso).toBe(true);
    });

    it("publishedAt <= updatedAt", () => {
      expect(article.ja.frontmatter.publishedAt <= article.ja.frontmatter.updatedAt).toBe(true);
    });

    it.each(locales)("%s: body has at least four parts (four or more h2)", (locale) => {
      const sections = extractToc(article[locale].body).filter((entry) => entry.depth === 2);
      expect(sections.length).toBeGreaterThanOrEqual(4);
    });

    it.each(locales)("%s: inserts scorecard / techstack exactly once each", (locale) => {
      const html = renderMarkdown(article[locale].body);
      expect(html.match(/data-component="scorecard"/g)).toHaveLength(1);
      expect(html.match(/data-component="techstack"/g)).toHaveLength(1);
    });

    it.each(locales)("%s: renderMarkdown converts it and it contains no script", (locale) => {
      const html = renderMarkdown(article[locale].body);
      expect(html.length).toBeGreaterThan(0);
      expect(html).not.toContain("<script");
    });

    it.each(locales)("%s: emphasis (**) does not break next to CJK brackets", (locale) => {
      // CommonMark sometimes does not treat ** adjacent to punctuation such as 「」 as emphasis.
      // When that happens raw ** remains in the HTML, so detect it here.
      const html = renderMarkdown(article[locale].body);
      expect(html).not.toContain("**");
    });

    it("revisions (periodic re-anatomy), if any, are not in the future, chronological, and not after updatedAt", () => {
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

    it("og-cards.json has a link card entry (run npm run og-cards if missing)", () => {
      expect(ogCards[article.slug]).toBeDefined();
      expect(ogCards[article.slug].url).toBe(article.ja.frontmatter.serviceUrl);
    });

    it("the link card image origin is in og-image-hosts.json (CSP img-src)", () => {
      // Images not included are silently blocked by the CSP, so detect it here.
      const image = ogCards[article.slug]?.image;
      if (image) {
        expect(ogImageHosts).toContain(new URL(image).origin);
      }
    });
  });
});
