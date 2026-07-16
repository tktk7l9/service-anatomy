import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/article-body";
import { ArticleCard } from "@/components/article-card";
import { HeroArt } from "@/components/hero-art";
import { JsonLd } from "@/components/json-ld";
import { LinkCard } from "@/components/link-card";
import { SourcesList } from "@/components/sources-list";
import { Toc } from "@/components/toc";
import { articleBySlug, ogCardFor, relatedTo } from "@/engine/articles";
import { formatDate } from "@/engine/format/date";
import { estimateReadingMinutes, formatReadingTime } from "@/engine/format/reading-time";
import { renderMarkdown } from "@/engine/markdown/render";
import { extractToc } from "@/engine/markdown/toc";
import { languageAlternates } from "@/engine/seo/alternates";
import { buildBlogPosting, buildBreadcrumbList } from "@/engine/seo/jsonld";
import { BASE_URL } from "@/engine/site";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

// per-request nonce（proxy.ts）を壊さないよう、ビルド時プリレンダリングを禁止する。
export const dynamic = "force-dynamic";

async function resolve(params: Promise<{ locale: string; slug: string }>) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) return null;
  const article = articleBySlug(slug);
  if (!article) return null;
  return { locale: rawLocale as Locale, article };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const resolved = await resolve(params);
  if (!resolved) return {};
  const { locale, article } = resolved;
  const { frontmatter } = article[locale];
  const path = `/articles/${article.slug}`;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "article",
      publishedTime: frontmatter.publishedAt,
      modifiedTime: frontmatter.updatedAt,
      title: frontmatter.title,
      description: frontmatter.description,
      url: `${BASE_URL}/${locale}${path}`,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const resolved = await resolve(params);
  if (!resolved) notFound();
  const { locale, article } = resolved;
  const { frontmatter, body } = article[locale];
  const dict = await getDictionary(locale);
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  const html = renderMarkdown(body, dict.article.callouts);
  const toc = extractToc(body);
  const ogCard = ogCardFor(article.slug);
  const related = relatedTo(article);
  const url = `${BASE_URL}/${locale}/articles/${article.slug}`;
  const readingTime = formatReadingTime(estimateReadingMinutes(body, locale), locale);

  const blogPosting = buildBlogPosting({
    url,
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.publishedAt,
    dateModified: frontmatter.updatedAt,
    locale,
    siteName: dict.meta.siteName,
    serviceName: frontmatter.service,
    serviceUrl: frontmatter.serviceUrl,
    tags: frontmatter.tags,
  });
  const breadcrumbs = buildBreadcrumbList([
    { name: dict.nav.home, url: `${BASE_URL}/${locale}` },
    {
      name: dict.categories[frontmatter.category],
      url: `${BASE_URL}/${locale}/category/${frontmatter.category}`,
    },
    { name: frontmatter.title, url },
  ]);

  return (
    <article>
      <JsonLd data={blogPosting} nonce={nonce} />
      <JsonLd data={breadcrumbs} nonce={nonce} />

      <header className="article-header">
        <p className="kicker">
          <Link href={`/${locale}/category/${frontmatter.category}`}>
            {dict.categories[frontmatter.category]}
          </Link>
          <time dateTime={frontmatter.publishedAt}>
            {formatDate(frontmatter.publishedAt, locale)}
          </time>
          <span className="kicker-sub">{readingTime}</span>
        </p>
        <h1>{frontmatter.title}</h1>
        <p className="article-lead">{frontmatter.lead}</p>
        <div className="article-meta">
          <span>
            {dict.article.vendor}: <strong>{frontmatter.vendor}</strong>
          </span>
          <span>
            {dict.article.origin}: <strong>{frontmatter.origin}</strong>
          </span>
          {frontmatter.updatedAt !== frontmatter.publishedAt && (
            <span>
              {dict.article.updated}:{" "}
              <time dateTime={frontmatter.updatedAt}>
                {formatDate(frontmatter.updatedAt, locale)}
              </time>
            </span>
          )}
          <span>
            {dict.article.lastVerified}:{" "}
            <time dateTime={frontmatter.lastVerified}>
              {formatDate(frontmatter.lastVerified, locale)}
            </time>
          </span>
          <span>
            <a href={frontmatter.serviceUrl} rel="noopener noreferrer" target="_blank">
              {dict.article.visitService} ↗
            </a>
          </span>
        </div>
      </header>

      <div className="article-hero">
        <HeroArt theme={frontmatter.heroTheme} className="card-art" />
      </div>

      <div className="article-layout">
        <Toc entries={toc} label={dict.article.toc} />
        <div>
          <ArticleBody html={html} frontmatter={frontmatter} locale={locale} dict={dict} />

          {ogCard && (
            <LinkCard card={ogCard} service={frontmatter.service} label={dict.article.visitService} />
          )}

          <ul className="tag-list">
            {frontmatter.tags.map((tag) => (
              <li key={tag}>
                <Link href={`/${locale}/tag/${tag}`}>#{tag}</Link>
              </li>
            ))}
          </ul>

          <SourcesList sources={frontmatter.sources} locale={locale} dict={dict} />

          <p className="article-disclaimer">{dict.article.disclaimer}</p>
        </div>
      </div>

      {related.length > 0 && (
        <section aria-label={dict.article.related}>
          <p className="section-label">{dict.article.related}</p>
          <div className="article-grid">
            {related.map((other) => (
              <ArticleCard key={other.slug} article={other} locale={locale} dict={dict} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
