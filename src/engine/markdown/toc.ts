import GithubSlugger from "github-slugger";
import type { Heading, Root, RootContent } from "mdast";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { visit } from "unist-util-visit";

// Extracts an h2/h3 table of contents from the article body. ids are computed with the same
// algorithm as rehype-slug (= github-slugger). To keep the counters in sync, headings at depths
// not included in the TOC also go through the slugger (rehype-slug assigns an id to every heading).

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
