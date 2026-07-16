import type { ArticleFrontmatter } from "@/engine/articles/schema";
import { splitArticleHtml } from "@/engine/markdown/split";
import type { Dictionary } from "@/i18n/dictionaries";
import { Scorecard } from "./scorecard";
import { TechStackTable } from "./tech-stack-table";

// renderMarkdown 済みの HTML をコンポーネントマーカーで分割し、
// scorecard / techstack を React コンポーネントとして interleave 描画する。
// HTML はリポジトリ内で著述された信頼済み Markdown 由来（render.ts 参照）。

export function ArticleBody({
  html,
  frontmatter,
  dict,
}: {
  html: string;
  frontmatter: ArticleFrontmatter;
  dict: Dictionary;
}) {
  const segments = splitArticleHtml(html);
  return (
    <div className="article-body">
      {segments.map((segment, i) => {
        if (segment.kind === "html") {
          return (
            <div
              key={i}
              className="prose"
              dangerouslySetInnerHTML={{ __html: segment.html }}
            />
          );
        }
        return segment.component === "scorecard" ? (
          <Scorecard key={i} scores={frontmatter.scores} dict={dict} />
        ) : (
          <TechStackTable key={i} entries={frontmatter.techStack} dict={dict} />
        );
      })}
    </div>
  );
}
