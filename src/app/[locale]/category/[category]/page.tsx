import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { JsonLd } from "@/components/json-ld";
import { articlesByCategory } from "@/engine/articles";
import { isCategoryId } from "@/engine/articles/taxonomy";
import { buildBreadcrumbList, buildItemList } from "@/engine/seo/jsonld";
import { BASE_URL } from "@/engine/site";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

async function resolve(params: Promise<{ locale: string; category: string }>) {
  const { locale: rawLocale, category } = await params;
  if (!isLocale(rawLocale) || !isCategoryId(category)) return null;
  const articles = articlesByCategory(category);
  if (articles.length === 0) return null;
  return { locale: rawLocale as Locale, category, articles };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}): Promise<Metadata> {
  const resolved = await resolve(params);
  if (!resolved) return {};
  const { locale, category } = resolved;
  const dict = await getDictionary(locale);
  const path = `/category/${category}`;
  return {
    title: dict.categories[category],
    alternates: {
      canonical: `/${locale}${path}`,
      languages: { ja: `/ja${path}`, en: `/en${path}` },
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const resolved = await resolve(params);
  if (!resolved) notFound();
  const { locale, category, articles } = resolved;
  const dict = await getDictionary(locale);
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  const label = dict.categories[category];

  const itemList = buildItemList(
    articles.map((article) => ({
      name: article[locale].frontmatter.title,
      url: `${BASE_URL}/${locale}/articles/${article.slug}`,
    })),
  );
  const breadcrumbs = buildBreadcrumbList([
    { name: dict.nav.home, url: `${BASE_URL}/${locale}` },
    { name: label, url: `${BASE_URL}/${locale}/category/${category}` },
  ]);

  return (
    <>
      <JsonLd data={itemList} nonce={nonce} />
      <JsonLd data={breadcrumbs} nonce={nonce} />
      <header className="listing-header">
        <p className="kicker">{dict.listing.categoryTitle}</p>
        <h1>{label}</h1>
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
