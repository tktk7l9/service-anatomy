import Link from "next/link";
import type { Article } from "@/engine/articles";
import { formatDate } from "@/engine/format/date";
import { estimateReadingMinutes, formatReadingTime } from "@/engine/format/reading-time";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { HeroArt } from "./hero-art";

export function ArticleCard({
  article,
  locale,
  dict,
  featured = false,
}: {
  article: Article;
  locale: Locale;
  dict: Dictionary;
  featured?: boolean;
}) {
  const { frontmatter, body } = article[locale];
  const readingTime = formatReadingTime(estimateReadingMinutes(body, locale), locale);
  const Title = featured ? "h2" : "h3";

  return (
    <Link
      href={`/${locale}/articles/${article.slug}`}
      className={featured ? "card card-featured" : "card"}
    >
      <HeroArt theme={frontmatter.heroTheme} className="card-art" />
      <div className="card-body">
        <p className="kicker">
          <span>{dict.categories[frontmatter.category]}</span>
          <time dateTime={frontmatter.publishedAt}>
            {formatDate(frontmatter.publishedAt, locale)}
          </time>
        </p>
        <Title className="card-title">{frontmatter.title}</Title>
        <p className="card-lead">{frontmatter.lead}</p>
        <p className="card-meta">
          {frontmatter.service} · {readingTime}
        </p>
      </div>
    </Link>
  );
}
