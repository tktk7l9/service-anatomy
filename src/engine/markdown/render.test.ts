import { describe, expect, it } from "vitest";
import { renderMarkdown } from "./render";

describe("renderMarkdown", () => {
  it("converts basic Markdown to HTML", () => {
    const html = renderMarkdown("# タイトル\n\n段落です。");
    expect(html).toContain("<h1");
    expect(html).toContain("<p>段落です。</p>");
  });

  it("headings get rehype-slug ids", () => {
    const html = renderMarkdown("## サービス解説");
    expect(html).toContain('id="サービス解説"');
  });

  it("GFM tables and strikethrough work", () => {
    const html = renderMarkdown("| a | b |\n| - | - |\n| 1 | 2 |\n\n~~取り消し~~");
    expect(html).toContain("<table>");
    expect(html).toContain("<del>取り消し</del>");
  });

  it("wraps each table in a focusable, labelled scroll region numbered in document order", () => {
    const table = "| a | b |\n| - | - |\n| 1 | 2 |";
    const html = renderMarkdown(`${table}\n\n:::fact\n${table}\n:::`, {
      fact: "事実",
      guess: "推測",
      table: "表 {n}",
    });
    expect(html).toContain(
      '<div class="table-scroll" role="region" tabindex="0" aria-label="表 1"><table>',
    );
    expect(html).toContain(
      '<div class="table-scroll" role="region" tabindex="0" aria-label="表 2"><table>',
    );
    // Each table is wrapped exactly once.
    expect(html.match(/class="table-scroll"/g)).toHaveLength(2);
    expect(html.match(/<table>/g)).toHaveLength(2);
  });

  it("uses the default English table label", () => {
    expect(renderMarkdown("| a |\n| - |\n| 1 |")).toContain('aria-label="Table 1"');
  });

  it("raw HTML is ignored (no script is emitted)", () => {
    const html = renderMarkdown('<script>alert("x")</script>\n\n本文');
    expect(html).not.toContain("<script");
    expect(html).toContain("<p>本文</p>");
  });

  it(":::pull becomes a pull quote", () => {
    const html = renderMarkdown(":::pull\n抜き出しの一文。\n:::");
    expect(html).toContain('<aside class="pull-quote">');
    expect(html).toContain("<p>抜き出しの一文。</p>");
  });

  it(":::fact becomes a callout with the default label", () => {
    const html = renderMarkdown(":::fact\n観測された事実。\n:::");
    expect(html).toContain('<aside class="callout callout-fact">');
    expect(html).toContain('<span class="callout-label">Fact</span>');
    expect(html).toContain("<p>観測された事実。</p>");
  });

  it(":::guess accepts locale-specific labels", () => {
    const html = renderMarkdown(":::guess\n推測の内容。\n:::", { fact: "事実", guess: "推測", table: "表 {n}" });
    expect(html).toContain('<aside class="callout callout-guess">');
    expect(html).toContain('<span class="callout-label">推測</span>');
  });

  it.each(["scorecard", "techstack"])("::%s becomes a component marker", (name) => {
    const html = renderMarkdown(`前段。\n\n::${name}\n\n後段。`);
    expect(html).toContain(`<div data-component="${name}"></div>`);
  });

  it("unknown container directives unwrap into their children", () => {
    const html = renderMarkdown(":::mystery\n中身は残る。\n:::");
    expect(html).toContain("<p>中身は残る。</p>");
    expect(html).not.toContain("mystery");
  });

  it("unknown leaf directives are removed", () => {
    const html = renderMarkdown("前段。\n\n::mystery\n\n後段。");
    expect(html).not.toContain("mystery");
    expect(html).toContain("<p>前段。</p>");
    expect(html).toContain("<p>後段。</p>");
  });

  it("inline text directives are not site syntax: the source text stays as written", () => {
    expect(renderMarkdown("これは :note[補足] です。")).toContain("これは :note[補足] です。");
    expect(renderMarkdown("これは :bare のテスト。")).toContain("これは :bare のテスト。");
  });

  it("keeps times and ratios that remark-directive would read as inline directives", () => {
    const html = renderMarkdown(
      "受付は10:00から23:59までに発生した分。2026/10/5 17:00まで。比率は16:9。\n\n:::fact\nPeak hours are 01:00–04:00 UTC.\n:::",
    );
    expect(html).toContain("受付は10:00から23:59までに発生した分。2026/10/5 17:00まで。比率は16:9。");
    expect(html).toContain("Peak hours are 01:00–04:00 UTC.");
  });

  it("keeps an inline directive with a label and attributes as literal text", () => {
    const html = renderMarkdown("See :abbr[HTML]{title=x} here.");
    expect(html).toContain("See :abbr[HTML]{title=x} here.");
  });
});
