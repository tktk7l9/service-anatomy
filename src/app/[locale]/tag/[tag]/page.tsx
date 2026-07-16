import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { JsonLd } from "@/components/json-ld";
import { articlesByTag } from "@/engine/articles";
import { languageAlternates } from "@/engine/seo/alternates";
import { buildBreadcrumbList, buildItemList } from "@/engine/seo/jsonld";
import { BASE_URL } from "@/engine/site";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

async function resolve(params: Promise<{ locale: string; tag: string }>) {
  const { locale: rawLocale, tag } = await params;
  if (!isLocale(rawLocale)) return null;
  const articles = articlesByTag(tag);
  if (articles.length === 0) return null;
  return { locale: rawLocale as Locale, tag, articles };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; tag: string }>;
}): Promise<Metadata> {
  const resolved = await resolve(params);
  if (!resolved) return {};
  const { locale, tag } = resolved;
  const path = `/tag/${tag}`;
  return {
    title: `#${tag}`,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: languageAlternates(path),
    },
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ locale: string; tag: string }>;
}) {
  const resolved = await resolve(params);
  if (!resolved) notFound();
  const { locale, tag, articles } = resolved;
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
    { name: `#${tag}`, url: `${BASE_URL}/${locale}/tag/${tag}` },
  ]);

  return (
    <>
      <JsonLd data={itemList} nonce={nonce} />
      <JsonLd data={breadcrumbs} nonce={nonce} />
      <header className="listing-header">
        <p className="kicker">{dict.listing.tagTitle}</p>
        <h1>#{tag}</h1>
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
