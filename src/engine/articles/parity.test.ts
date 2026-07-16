import { describe, expect, it } from "vitest";
import { makeArticle, makeArticleFile } from "./__fixtures__/factories";
import { localeParityIssues } from "./parity";

describe("localeParityIssues", () => {
  it("完全に一致していれば空", () => {
    expect(localeParityIssues(makeArticle("ok"))).toEqual([]);
  });

  it("言語中立フィールドの不一致を検出する", () => {
    const article = makeArticle("x");
    article.en = makeArticleFile({ publishedAt: "2026-07-02", origin: "US" });
    const issues = localeParityIssues(article);
    expect(issues.join("\n")).toMatch(/publishedAt が ja\/en で一致しません/);
    expect(issues.join("\n")).toMatch(/origin が ja\/en で一致しません/);
  });

  it("tags の不一致を検出する", () => {
    const article = makeArticle("x");
    article.en = makeArticleFile({ tags: ["other-tag"] });
    expect(localeParityIssues(article).join("\n")).toMatch(/tags が ja\/en で一致しません/);
  });

  it("scores の不一致を検出する", () => {
    const article = makeArticle("x");
    article.en = makeArticleFile({ scores: { product: 4, ux: 3.5, tech: 3, business: 5 } });
    expect(localeParityIssues(article).join("\n")).toMatch(/scores\.business が ja\/en で一致しません/);
  });

  it("techStack の件数不一致を検出する", () => {
    const article = makeArticle("x");
    article.en = makeArticleFile({
      techStack: [
        { layer: "F", name: "React", confidence: "likely", evidence: "t" },
        { layer: "B", name: "Rails", confidence: "likely", evidence: "t" },
      ],
    });
    expect(localeParityIssues(article).join("\n")).toMatch(/techStack の件数/);
  });

  it("techStack の内容不一致（name/confidence/evidenceUrl）を検出する", () => {
    const article = makeArticle("x");
    article.en = makeArticleFile({
      techStack: [{ layer: "Frontend", name: "Vue", confidence: "likely", evidence: "t" }],
    });
    expect(localeParityIssues(article).join("\n")).toMatch(/techStack\[0\]/);
  });

  it("sources の件数・url 不一致を検出する", () => {
    const fewer = makeArticle("x");
    fewer.en = makeArticleFile({
      sources: [
        { label: "a", url: "https://example.com", accessedAt: "2026-07-01" },
        { label: "b", url: "https://example.org", accessedAt: "2026-07-01" },
      ],
    });
    expect(localeParityIssues(fewer).join("\n")).toMatch(/sources の件数/);

    const differentUrl = makeArticle("x");
    differentUrl.en = makeArticleFile({
      sources: [{ label: "a", url: "https://example.org", accessedAt: "2026-07-01" }],
    });
    expect(localeParityIssues(differentUrl).join("\n")).toMatch(/sources\[0\]\.url/);
  });
});
