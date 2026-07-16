import { describe, expect, it } from "vitest";
import { renderMarkdown } from "./render";

describe("renderMarkdown", () => {
  it("基本の Markdown を HTML に変換する", () => {
    const html = renderMarkdown("# タイトル\n\n段落です。");
    expect(html).toContain("<h1");
    expect(html).toContain("<p>段落です。</p>");
  });

  it("見出しに rehype-slug の id が付く", () => {
    const html = renderMarkdown("## サービス解説");
    expect(html).toContain('id="サービス解説"');
  });

  it("GFM のテーブルと打ち消し線が有効", () => {
    const html = renderMarkdown("| a | b |\n| - | - |\n| 1 | 2 |\n\n~~取り消し~~");
    expect(html).toContain("<table>");
    expect(html).toContain("<del>取り消し</del>");
  });

  it("生 HTML は無視される（script は出力されない）", () => {
    const html = renderMarkdown('<script>alert("x")</script>\n\n本文');
    expect(html).not.toContain("<script");
    expect(html).toContain("<p>本文</p>");
  });

  it(":::pull はプルクオートになる", () => {
    const html = renderMarkdown(":::pull\n抜き出しの一文。\n:::");
    expect(html).toContain('<aside class="pull-quote">');
    expect(html).toContain("<p>抜き出しの一文。</p>");
  });

  it(":::fact は既定ラベル付きカラウトになる", () => {
    const html = renderMarkdown(":::fact\n観測された事実。\n:::");
    expect(html).toContain('<aside class="callout callout-fact">');
    expect(html).toContain('<span class="callout-label">Fact</span>');
    expect(html).toContain("<p>観測された事実。</p>");
  });

  it(":::guess はロケール別ラベルを注入できる", () => {
    const html = renderMarkdown(":::guess\n推測の内容。\n:::", { fact: "事実", guess: "推測" });
    expect(html).toContain('<aside class="callout callout-guess">');
    expect(html).toContain('<span class="callout-label">推測</span>');
  });

  it.each(["scorecard", "techstack"])("::%s はコンポーネントマーカーになる", (name) => {
    const html = renderMarkdown(`前段。\n\n::${name}\n\n後段。`);
    expect(html).toContain(`<div data-component="${name}"></div>`);
  });

  it("未知のコンテナディレクティブは子に展開される", () => {
    const html = renderMarkdown(":::mystery\n中身は残る。\n:::");
    expect(html).toContain("<p>中身は残る。</p>");
    expect(html).not.toContain("mystery");
  });

  it("未知のリーフディレクティブは取り除かれる", () => {
    const html = renderMarkdown("前段。\n\n::mystery\n\n後段。");
    expect(html).not.toContain("mystery");
    expect(html).toContain("<p>前段。</p>");
    expect(html).toContain("<p>後段。</p>");
  });

  it("未知のテキストディレクティブはラベルだけ残す", () => {
    const html = renderMarkdown("これは :note[補足] です。");
    expect(html).toContain("補足");
    expect(html).not.toContain("note");
  });

  it("ラベルなしの未知テキストディレクティブは消える", () => {
    const html = renderMarkdown("これは :bare のテスト。");
    expect(html).not.toContain("bare");
  });
});
