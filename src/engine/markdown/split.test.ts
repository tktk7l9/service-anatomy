import { describe, expect, it } from "vitest";
import { renderMarkdown } from "./render";
import { splitArticleHtml } from "./split";

describe("splitArticleHtml", () => {
  it("without markers the whole input is one html segment", () => {
    expect(splitArticleHtml("<p>本文</p>")).toEqual([{ kind: "html", html: "<p>本文</p>" }]);
  });

  it("splits on markers and inserts component segments", () => {
    const html =
      '<p>前</p>\n<div data-component="scorecard"></div>\n<p>中</p>\n<div data-component="techstack"></div>\n<p>後</p>';
    expect(splitArticleHtml(html)).toEqual([
      { kind: "html", html: "<p>前</p>\n" },
      { kind: "component", component: "scorecard" },
      { kind: "html", html: "\n<p>中</p>\n" },
      { kind: "component", component: "techstack" },
      { kind: "html", html: "\n<p>後</p>" },
    ]);
  });

  it("leading/trailing markers do not create empty html segments", () => {
    const html = '<div data-component="scorecard"></div>\n<div data-component="techstack"></div>';
    expect(splitArticleHtml(html)).toEqual([
      { kind: "component", component: "scorecard" },
      { kind: "component", component: "techstack" },
    ]);
  });

  it("fits the real output of renderMarkdown (integration)", () => {
    const html = renderMarkdown("導入。\n\n::scorecard\n\n本論。\n\n::techstack\n\n結論。");
    const segments = splitArticleHtml(html);
    expect(segments.map((s) => s.kind)).toEqual(["html", "component", "html", "component", "html"]);
  });
});
