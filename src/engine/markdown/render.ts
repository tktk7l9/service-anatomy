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

// 記事本文（リポジトリ内で著述された信頼済み Markdown）を HTML へ変換する。
// remark-rehype は生 HTML を既定で無視するため、出力は Markdown 由来の要素のみ
// （この性質は維持すること — allowDangerousHtml を有効にしない）。
// サーバーコンポーネントで実行され、クライアントには静的 HTML だけが届く。
//
// 独自ディレクティブ:
//   :::pull            プルクオート（雑誌の抜き出し引用）
//   :::fact / :::guess 観測事実 / 推測の明示カラウト（ラベルはロケール別に注入）
//   ::scorecard        frontmatter の scores を描画する React コンポーネントの差し込み位置
//   ::techstack        frontmatter の techStack を描画する React コンポーネントの差し込み位置
// 未知のディレクティブは子ノードに展開される（黙って落とさない・素通しもしない）。

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

      // 未知のディレクティブ: 子ノードへ展開する。
      /* v8 ignore next -- visit がディレクティブへ到達する経路では parent/index は常に存在する */
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
