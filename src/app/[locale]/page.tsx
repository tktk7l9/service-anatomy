import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { JsonLd } from "@/components/json-ld";
import { ALL_ARTICLES, usedCategories } from "@/engine/articles";
import { buildItemList, buildWebSite } from "@/engine/seo/jsonld";
import { BASE_URL } from "@/engine/site";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

// Headings split by a Japanese comma (読点, "、"), such as 「人気サービスを、解剖する。」, can wrap on
// small screens in the middle of the word before the comma (e.g. between 「解」 and 「剖」 of 「解剖」)
// instead of right after it. Make everything after the comma unbreakable so wrapping always happens right after it.
function renderTagline(tagline: string) {
  const breakPoint = tagline.indexOf("、");
  if (breakPoint === -1) {
    return tagline;
  }
  return (
    <>
      {tagline.slice(0, breakPoint + 1)}
      <span className="no-break">{tagline.slice(breakPoint + 1)}</span>
    </>
  );
}

// The home page shows the latest article plus this many recent ones and links to the full index
// (/[locale]/articles). Listing every article here made the HTML grow with each batch: each card
// inlines its HeroArt SVG and the RSC payload repeats it, so "/" reached ~780 KB raw and pushed the
// LCP text (the hero lead) back on mobile. 12 fills the auto-fill grid evenly at 2, 3 and 4 columns.
const HOME_RECENT_COUNT = 12;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);

  const [featured, ...rest] = ALL_ARTICLES;
  const recent = rest.slice(0, HOME_RECENT_COUNT);
  const categories = usedCategories();

  const webSite = buildWebSite({
    name: dict.meta.siteName,
    description: dict.meta.description,
    url: `${BASE_URL}/${locale}`,
    locale,
  });
  // The ItemList describes what this page shows; the full list lives on the articles index.
  const itemList = buildItemList(
    (featured ? [featured, ...recent] : []).map((article) => ({
      name: article[locale].frontmatter.title,
      url: `${BASE_URL}/${locale}/articles/${article.slug}`,
    })),
  );

  return (
    <>
      <JsonLd data={webSite} />
      <JsonLd data={itemList} />

      <section className="home-hero">
        <h1>{renderTagline(dict.home.tagline)}</h1>
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
          {recent.length > 0 && (
            <>
              <p className="section-label">{dict.home.recent}</p>
              <div className="article-grid">
                {recent.map((article) => (
                  <ArticleCard key={article.slug} article={article} locale={locale} dict={dict} />
                ))}
              </div>
            </>
          )}
          <p className="home-more">
            <Link href={`/${locale}/articles`}>
              {dict.home.viewAll.replace("{count}", String(ALL_ARTICLES.length))}
              <span aria-hidden="true"> →</span>
            </Link>
          </p>
        </>
      ) : (
        <p className="empty-note">{dict.home.empty}</p>
      )}
    </>
  );
}
