import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { JsonLd } from "@/components/json-ld";
import { allTech, articlesByTech } from "@/engine/articles";
import { buildBreadcrumbList, buildItemList } from "@/engine/seo/jsonld";
import { BASE_URL } from "@/engine/site";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

async function resolve(params: Promise<{ locale: string; tech: string }>) {
  const { locale: rawLocale, tech } = await params;
  if (!isLocale(rawLocale)) return null;
  const entry = allTech().find((candidate) => candidate.slug === tech);
  if (!entry) return null;
  return { locale: rawLocale as Locale, entry, articles: articlesByTech(tech) };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; tech: string }>;
}): Promise<Metadata> {
  const resolved = await resolve(params);
  if (!resolved) return {};
  const { locale, entry } = resolved;
  const path = `/tech/${entry.slug}`;
  return {
    title: entry.name,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: { ja: `/ja${path}`, en: `/en${path}` },
    },
  };
}

export default async function TechPage({
  params,
}: {
  params: Promise<{ locale: string; tech: string }>;
}) {
  const resolved = await resolve(params);
  if (!resolved) notFound();
  const { locale, entry, articles } = resolved;
  const dict = await getDictionary(locale);
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  const itemList = buildItemList(
    articles.map((article) => ({
      name: article[locale].frontmatter.title,
      url: `${BASE_URL}/${locale}/articles/${article.slug}`,
    })),
  );
  const breadcrumbs = buildBreadcrumbList([
    { name: dict.nav.home, url: `${BASE_URL}/${locale}` },
    { name: dict.tech.indexTitle, url: `${BASE_URL}/${locale}/tech` },
    { name: entry.name, url: `${BASE_URL}/${locale}/tech/${entry.slug}` },
  ]);

  return (
    <>
      <JsonLd data={itemList} nonce={nonce} />
      <JsonLd data={breadcrumbs} nonce={nonce} />
      <header className="listing-header">
        <p className="kicker">{dict.listing.techTitle}</p>
        <h1>{entry.name}</h1>
        <p className="count">
          {articles.length} {dict.listing.countSuffix}
        </p>
      </header>
      <div className="article-grid">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} locale={locale} dict={dict} />
        ))}
      </div>
    </>
  );
}
