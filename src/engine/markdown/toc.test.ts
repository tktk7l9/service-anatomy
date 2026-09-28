import { describe, expect, it } from "vitest";
import { renderMarkdown } from "./render";
import { extractToc } from "./toc";

describe("extractToc", () => {
  it("extracts only h2/h3 with depth", () => {
    const toc = extractToc("# h1\n\n## 概要\n\n### 詳細\n\n#### h4");
    expect(toc).toEqual([
      { id: "概要", depth: 2, text: "概要" },
      { id: "詳細", depth: 3, text: "詳細" },
    ]);
  });

  it("duplicate headings get a -1 suffix", () => {
    const toc = extractToc("## 概要\n\n## 概要");
    expect(toc.map((entry) => entry.id)).toEqual(["概要", "概要-1"]);
  });

  it("stays in sync with rehype-slug counters even when duplicating h1", () => {
    const markdown = "# 概要\n\n## 概要\n\n## まとめ";
    const toc = extractToc(markdown);
    const html = renderMarkdown(markdown);
    for (const entry of toc) {
      expect(html).toContain(`id="${entry.id}"`);
    }
    expect(toc.map((entry) => entry.id)).toEqual(["概要-1", "まとめ"]);
  });

  it("builds heading text containing inline code, emphasis, and images", () => {
    const markdown = "## `npm` と **強調** と ![代替](https://example.com/x.png) の話";
    const toc = extractToc(markdown);
    expect(toc[0].text).toBe("npm と 強調 と  の話");
    const html = renderMarkdown(markdown);
    expect(html).toContain(`id="${toc[0].id}"`);
  });

  it("empty array when there are no headings", () => {
    expect(extractToc("本文だけ。")).toEqual([]);
  });
});
