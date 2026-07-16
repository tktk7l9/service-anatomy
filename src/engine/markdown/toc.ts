import GithubSlugger from "github-slugger";
import type { Heading, Root, RootContent } from "mdast";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { visit } from "unist-util-visit";

// 記事本文から h2/h3 の目次を抽出する。id は rehype-slug（= github-slugger）と
// 同一のアルゴリズムで計算する。カウンタの同期を保つため、目次に含めない深さの
// 見出しも slugger には通す（rehype-slug は全見出しに id を振るため）。

export interface TocEntry {
  id: string;
  depth: 2 | 3;
  text: string;
}

function textOf(node: RootContent): string {
  if (node.type === "text" || node.type === "inlineCode") {
    return node.value;
  }
  if ("children" in node) {
    return node.children.map(textOf).join("");
  }
  return "";
}

export function extractToc(markdown: string): TocEntry[] {
  const tree = unified().use(remarkParse).use(remarkGfm).use(remarkDirective).parse(markdown) as Root;
  const slugger = new GithubSlugger();
  const entries: TocEntry[] = [];
  visit(tree, "heading", (node: Heading) => {
    const text = node.children.map(textOf).join("");
    const id = slugger.slug(text);
    if (node.depth === 2 || node.depth === 3) {
      entries.push({ id, depth: node.depth, text });
    }
  });
  return entries;
}
