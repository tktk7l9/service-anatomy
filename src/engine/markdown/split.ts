// Splits the HTML output of renderMarkdown, as a pure function, at the insertion points of in-article
// components (<div data-component="..."></div> — deterministic output from remark directives).
// article-body.tsx renders the result interleaved, which inserts React components into the
// dangerouslySetInnerHTML HTML.

export const ARTICLE_COMPONENTS = ["scorecard", "techstack"] as const;

export type ArticleComponent = (typeof ARTICLE_COMPONENTS)[number];

export type ArticleSegment =
  | { kind: "html"; html: string }
  | { kind: "component"; component: ArticleComponent };

const MARKER = /<div data-component="(scorecard|techstack)"><\/div>/g;

export function splitArticleHtml(html: string): ArticleSegment[] {
  const segments: ArticleSegment[] = [];
  let last = 0;
  for (const match of html.matchAll(MARKER)) {
    const before = html.slice(last, match.index);
    if (before.trim() !== "") {
      segments.push({ kind: "html", html: before });
    }
    segments.push({ kind: "component", component: match[1] as ArticleComponent });
    last = match.index + match[0].length;
  }
  const rest = html.slice(last);
  if (rest.trim() !== "") {
    segments.push({ kind: "html", html: rest });
  }
  return segments;
}
