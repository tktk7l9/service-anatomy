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
// Unknown directives are unwrapped into their children (neither silently dropped nor passed through).

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
  return (tree: Root) => {
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

      // Unknown directive: unwrap into its children.
      /* v8 ignore next -- on the paths where visit reaches a directive, parent/index always exist */
      if (!parent || index === undefined) return;
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
