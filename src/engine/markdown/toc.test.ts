import { describe, expect, it } from "vitest";
import { renderMarkdown } from "./render";
import { extractToc } from "./toc";

describe("extractToc", () => {
  it("h2/h3 のみを depth 付きで抽出する", () => {
    const toc = extractToc("# h1\n\n## 概要\n\n### 詳細\n\n#### h4");
    expect(toc).toEqual([
      { id: "概要", depth: 2, text: "概要" },
      { id: "詳細", depth: 3, text: "詳細" },
    ]);
  });

  it("重複する見出しは -1 サフィックスで区別される", () => {
    const toc = extractToc("## 概要\n\n## 概要");
    expect(toc.map((entry) => entry.id)).toEqual(["概要", "概要-1"]);
  });

  it("h1 と重複しても rehype-slug とカウンタが同期する", () => {
    const markdown = "# 概要\n\n## 概要\n\n## まとめ";
    const toc = extractToc(markdown);
    const html = renderMarkdown(markdown);
    for (const entry of toc) {
      expect(html).toContain(`id="${entry.id}"`);
    }
    expect(toc.map((entry) => entry.id)).toEqual(["概要-1", "まとめ"]);
  });

  it("インラインコード・強調・画像を含む見出しのテキストを組み立てる", () => {
    const markdown = "## `npm` と **強調** と ![代替](https://example.com/x.png) の話";
    const toc = extractToc(markdown);
    expect(toc[0].text).toBe("npm と 強調 と  の話");
    const html = renderMarkdown(markdown);
    expect(html).toContain(`id="${toc[0].id}"`);
  });

  it("見出しがなければ空配列", () => {
    expect(extractToc("本文だけ。")).toEqual([]);
  });
});
