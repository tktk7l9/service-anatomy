import type { Root } from "mdast";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import { ARTICLE_COMPONENTS, type ArticleComponent } from "./split";

// Converts the article body (trusted Markdown authored in this repository) to HTML.
// remark-rehype ignores raw HTML by default, so the output contains only Markdown-derived elements
// (keep this property — do not enable allowDangerousHtml).
// Runs in a server component; only static HTML reaches the client.
//
// Custom directives:
//   :::pull            pull quote (magazine-style excerpt)
//   :::fact / :::guess explicit callout for observed fact / guess (labels injected per locale)
//   ::scorecard        insertion point for the React component rendering frontmatter scores
//   ::techstack        insertion point for the React component rendering frontmatter techStack
// Unknown container/leaf directives are unwrapped into their children (neither silently dropped
// nor passed through).
// Inline text directives (":name") are not part of this site's syntax, but remark-directive parses
// any colon followed by a letter or digit as one — "10:00", "23:59までに" — and the directive name
// would vanish from the output. They are restored to the exact source text instead.

export interface CalloutLabels {
  fact: string;
  guess: string;
}

const DEFAULT_LABELS: CalloutLabels = { fact: "Fact", guess: "Guess" };

const CALLOUT_NAMES = ["fact", "guess"] as const;
type CalloutName = (typeof CALLOUT_NAMES)[number];

function isCalloutName(name: string): name is CalloutName {
  return (CALLOUT_NAMES as readonly string[]).includes(name);
}

function isArticleComponent(name: string): name is ArticleComponent {
  return (ARTICLE_COMPONENTS as readonly string[]).includes(name);
}

function remarkArticleDirectives(labels: CalloutLabels) {
  return (tree: Root, file: { toString(): string }) => {
    const source = String(file);
    visit(tree, (node, index, parent) => {
      if (
        node.type !== "containerDirective" &&
        node.type !== "leafDirective" &&
        node.type !== "textDirective"
      ) {
        return;
      }

      if (node.type === "containerDirective" && node.name === "pull") {
        node.data = { hName: "aside", hProperties: { className: ["pull-quote"] } };
        return;
      }

      if (node.type === "containerDirective" && isCalloutName(node.name)) {
        const name = node.name;
        node.data = {
          hName: "aside",
          hProperties: { className: ["callout", `callout-${name}`] },
        };
        node.children.unshift({
          type: "paragraph",
          data: { hName: "span", hProperties: { className: ["callout-label"] } },
          children: [{ type: "text", value: labels[name] }],
        });
        return;
      }

      if (node.type === "leafDirective" && isArticleComponent(node.name)) {
        node.data = { hName: "div", hProperties: { dataComponent: node.name } };
        node.children = [];
        return;
      }

      /* v8 ignore next -- on the paths where visit reaches a directive, parent/index always exist */
      if (!parent || index === undefined) return;

      if (node.type === "textDirective") {
        // Not a directive the author wrote: put the literal characters back (times, ratios).
        /* v8 ignore next -- nodes produced by the parser always carry offsets */
        if (node.position?.start.offset === undefined || node.position.end.offset === undefined) return;
        const literal = source.slice(node.position.start.offset, node.position.end.offset);
        parent.children.splice(index, 1, { type: "text", value: literal });
        return index + 1;
      }

      // Unknown container/leaf directive: unwrap into its children.
      parent.children.splice(index, 1, ...(node.children as never[]));
      return index;
    });
  };
}

export function renderMarkdown(markdown: string, labels: CalloutLabels = DEFAULT_LABELS): string {
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkDirective)
    .use(remarkArticleDirectives, labels)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify);
  return String(processor.processSync(markdown));
}
