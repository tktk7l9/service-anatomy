import { describe, expect, it } from "vitest";
import path from "node:path";
import { loadArticles } from "./load";

const FIXTURES = path.join(process.cwd(), "src", "engine", "articles", "__fixtures__");

describe("loadArticles", () => {
  it("公開日の新しい順（同日は slug 昇順）で返し、迷子ファイルは無視する", () => {
    const articles = loadArticles(path.join(FIXTURES, "valid"));
    expect(articles.map((a) => a.slug)).toEqual(["alpha-service", "gamma-service", "beta-service"]);
  });

  it("frontmatter と本文をパースする（本文は trim 済み）", () => {
    const articles = loadArticles(path.join(FIXTURES, "valid"));
    const alpha = articles[0];
    expect(alpha.ja.frontmatter.service).toBe("Alpha");
    expect(alpha.ja.body).toBe("本文。");
    expect(alpha.en.frontmatter.title).toBe("Anatomy of Alpha");
    expect(alpha.en.body).toBe("Body text.");
  });

  it("en.md がない記事は失敗する", () => {
    expect(() => loadArticles(path.join(FIXTURES, "missing-en"))).toThrow(/solo: en\.md がありません/);
  });

  it("本文が空の記事は失敗する", () => {
    expect(() => loadArticles(path.join(FIXTURES, "empty-body"))).toThrow(/hollow\/ja\.md: 本文が空/);
  });

  it("kebab-case でないディレクトリ名は失敗する", () => {
    expect(() => loadArticles(path.join(FIXTURES, "bad-slug"))).toThrow(/"Bad_Slug" は kebab-case/);
  });

  it("rootDir が存在しなければ空配列", () => {
    expect(loadArticles(path.join(FIXTURES, "no-such-dir"))).toEqual([]);
  });

  it("既定の rootDir（content/articles）でも例外なく読める", () => {
    expect(Array.isArray(loadArticles())).toBe(true);
  });
});
