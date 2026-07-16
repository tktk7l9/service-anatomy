// renderMarkdown が出力した HTML を、記事内コンポーネントの差し込み位置
// （<div data-component="..."></div> — remark ディレクティブ由来の決定的な出力）で
// 純関数的に分割する。article-body.tsx がこの結果を interleave 描画することで、
// dangerouslySetInnerHTML の HTML 中に React コンポーネントを差し込む。

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
