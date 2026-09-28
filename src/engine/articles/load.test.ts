import { describe, expect, it } from "vitest";
import path from "node:path";
import { loadArticles } from "./load";

const FIXTURES = path.join(process.cwd(), "src", "engine", "articles", "__fixtures__");

describe("loadArticles", () => {
  it("returns newest publishedAt first (ties by ascending slug) and ignores stray files", () => {
    const articles = loadArticles(path.join(FIXTURES, "valid"));
    expect(articles.map((a) => a.slug)).toEqual(["alpha-service", "gamma-service", "beta-service"]);
  });

  it("parses frontmatter and body (body is trimmed)", () => {
    const articles = loadArticles(path.join(FIXTURES, "valid"));
    const alpha = articles[0];
    expect(alpha.ja.frontmatter.service).toBe("Alpha");
    expect(alpha.ja.body).toBe("本文。");
    expect(alpha.en.frontmatter.title).toBe("Anatomy of Alpha");
    expect(alpha.en.body).toBe("Body text.");
  });

  it("fails for an article without en.md", () => {
    expect(() => loadArticles(path.join(FIXTURES, "missing-en"))).toThrow(/solo: en\.md is missing/);
  });

  it("fails for an article with an empty body", () => {
    expect(() => loadArticles(path.join(FIXTURES, "empty-body"))).toThrow(/hollow\/ja\.md: body is empty/);
  });

  it("fails for a non-kebab-case directory name", () => {
    expect(() => loadArticles(path.join(FIXTURES, "bad-slug"))).toThrow(/"Bad_Slug" must be kebab-case/);
  });

  it("empty array when rootDir does not exist", () => {
    expect(loadArticles(path.join(FIXTURES, "no-such-dir"))).toEqual([]);
  });

  it("reads every real article from the default rootDir (content/articles)", () => {
    // With Array.isArray this would pass even if the default path broke and returned []. The tests
    // iterating ALL_ARTICLES all pass silently on an empty array, so this is the only place that
    // catches "content silently disappeared". Measured: 46 articles (2026-09-12).
    expect(loadArticles().length).toBeGreaterThanOrEqual(40);
  });
});
