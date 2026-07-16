import Link from "next/link";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { JsonLd } from "@/components/json-ld";
import { ALL_ARTICLES, usedCategories } from "@/engine/articles";
import { buildItemList, buildWebSite } from "@/engine/seo/jsonld";
import { BASE_URL } from "@/engine/site";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  const [featured, ...rest] = ALL_ARTICLES;
  const categories = usedCategories();

  const webSite = buildWebSite({
    name: dict.meta.siteName,
    description: dict.meta.description,
    url: `${BASE_URL}/${locale}`,
    locale,
  });
  const itemList = buildItemList(
    ALL_ARTICLES.map((article) => ({
      name: article[locale].frontmatter.title,
      url: `${BASE_URL}/${locale}/articles/${article.slug}`,
    })),
  );

  return (
    <>
      <JsonLd data={webSite} nonce={nonce} />
      <JsonLd data={itemList} nonce={nonce} />

      <section className="home-hero">
        <h1>{dict.home.tagline}</h1>
        <p>{dict.home.lead}</p>
        {categories.length > 0 && (
          <ul className="tag-list">
            {categories.map((category) => (
              <li key={category}>
                <Link href={`/${locale}/category/${category}`}>
                  {dict.categories[category]}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      {featured ? (
        <>
          <p className="section-label">{dict.home.featured}</p>
          <ArticleCard article={featured} locale={locale} dict={dict} featured />
          {rest.length > 0 && (
            <>
              <p className="section-label">{dict.home.archive}</p>
              <div className="article-grid">
                {rest.map((article) => (
                  <ArticleCard key={article.slug} article={article} locale={locale} dict={dict} />
                ))}
              </div>
            </>
          )}
        </>
      ) : (
        <p className="empty-note">{dict.home.empty}</p>
      )}
    </>
  );
}
