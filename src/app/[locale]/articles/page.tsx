import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { ALL_ARTICLES } from "@/engine/articles";
import { hasAffiliate } from "@/engine/articles/disclosure";
import { formatDate } from "@/engine/format/date";
import { languageAlternates } from "@/engine/seo/alternates";
import { buildBreadcrumbList, buildItemList } from "@/engine/seo/jsonld";
import { BASE_URL } from "@/engine/site";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

// The full index of every article (the home page shows only the latest ones and links here).
// A compact text list on purpose: no HeroArt and no lead per entry, so the page stays light as the
// number of articles grows. The [locale] layout's generateStaticParams makes it /ja and /en at build time.

async function resolveLocale(params: Promise<{ locale: string }>): Promise<Locale | null> {
  const { locale } = await params;
  return isLocale(locale) ? locale : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await resolveLocale(params);
  if (!locale) return {};
  const dict = await getDictionary(locale);
  return {
    title: dict.listing.allTitle,
    description: dict.listing.allLead,
    alternates: {
      canonical: `/${locale}/articles`,
      languages: languageAlternates("/articles"),
    },
  };
}

export default async function ArticlesIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  if (!locale) notFound();
  const dict = await getDictionary(locale);

  const itemList = buildItemList(
    ALL_ARTICLES.map((article) => ({
      name: article[locale].frontmatter.title,
      url: `${BASE_URL}/${locale}/articles/${article.slug}`,
    })),
  );
  const breadcrumbs = buildBreadcrumbList([
    { name: dict.nav.home, url: `${BASE_URL}/${locale}` },
    { name: dict.listing.allTitle, url: `${BASE_URL}/${locale}/articles` },
  ]);

  return (
    <>
      <JsonLd data={itemList} />
      <JsonLd data={breadcrumbs} />
      <header className="listing-header">
        <p className="kicker">{dict.nav.home}</p>
        <h1>{dict.listing.allTitle}</h1>
        <p className="count">
          {ALL_ARTICLES.length} {dict.listing.countSuffix}
        </p>
        <p className="listing-lead">{dict.listing.allLead}</p>
      </header>
      <ol className="article-index">
        {ALL_ARTICLES.map((article) => {
          const { frontmatter } = article[locale];
          return (
            <li key={article.slug}>
              <Link href={`/${locale}/articles/${article.slug}`}>
                <p className="kicker">
                  <span>{dict.categories[frontmatter.category]}</span>
                  {/* Same disclosure rule as the cards: articles with affiliate links say so (text label). */}
                  {hasAffiliate(frontmatter) && (
                    <span className="kicker-pr">{dict.article.affiliatePr}</span>
                  )}
                  <time dateTime={frontmatter.publishedAt}>
                    {formatDate(frontmatter.publishedAt, locale)}
                  </time>
                </p>
                <h2 className="article-index-title">{frontmatter.title}</h2>
                <p className="article-index-service">{frontmatter.service}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </>
  );
}
