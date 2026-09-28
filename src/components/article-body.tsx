import type { ArticleFrontmatter } from "@/engine/articles/schema";
import { splitArticleHtml } from "@/engine/markdown/split";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Scorecard } from "./scorecard";
import { TechStackTable } from "./tech-stack-table";

// Splits the renderMarkdown HTML at component markers and renders
// scorecard / techstack interleaved as React components.
// The HTML comes from trusted Markdown authored in this repository (see render.ts).

export function ArticleBody({
  html,
  frontmatter,
  locale,
  dict,
}: {
  html: string;
  frontmatter: ArticleFrontmatter;
  locale: Locale;
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
          <TechStackTable key={i} entries={frontmatter.techStack} locale={locale} dict={dict} />
        );
      })}
    </div>
  );
}
