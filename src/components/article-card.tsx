import Link from "next/link";
import type { Article } from "@/engine/articles";
import { hasAffiliate } from "@/engine/articles/disclosure";
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
  headingLevel,
}: {
  article: Article;
  locale: Locale;
  dict: Dictionary;
  featured?: boolean;
  /** Override the title level so listings without an h2 keep a valid heading order. */
  headingLevel?: 2 | 3;
}) {
  const { frontmatter, body } = article[locale];
  const readingTime = formatReadingTime(estimateReadingMinutes(body, locale), locale);
  const Title = headingLevel ? (`h${headingLevel}` as const) : featured ? "h2" : "h3";

  return (
    <Link
      href={`/${locale}/articles/${article.slug}`}
      className={featured ? "card card-featured" : "card"}
    >
      <HeroArt theme={frontmatter.heroTheme} className="card-art" />
      <div className="card-body">
        <p className="kicker">
          <span>{dict.categories[frontmatter.category]}</span>
          {/* Articles with affiliate links say so in listings too (text label, not color only). */}
          {hasAffiliate(frontmatter) && <span className="kicker-pr">{dict.article.affiliatePr}</span>}
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
