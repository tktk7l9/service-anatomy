import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import {
  ALL_COMPARISONS,
  comparisonHasAdvertising,
  resolveComparison,
  type ComparisonItem,
} from "@/engine/comparisons";
import { languageAlternates } from "@/engine/seo/alternates";
import { buildBreadcrumbList, buildItemList } from "@/engine/seo/jsonld";
import { BASE_URL } from "@/engine/site";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const dict = await getDictionary(rawLocale as Locale);
  return {
    title: dict.compare.indexTitle,
    description: dict.compare.indexLead,
    alternates: {
      canonical: `/${rawLocale}/compare`,
      languages: languageAlternates("/compare"),
    },
  };
}

// Same condition as the comparison page itself: advertising is present when either compared
// article has an affiliate link. The listing shows "PR" before the reader opens the page.
function hasAdvertising(comparison: ComparisonItem, locale: Locale): boolean {
  const resolved = resolveComparison(comparison);
  return resolved ? comparisonHasAdvertising(resolved, locale) : false;
}

export default async function CompareIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);

  const itemList = buildItemList(
    ALL_COMPARISONS.map((comparison) => ({
      name: comparison[locale].frontmatter.title,
      url: `${BASE_URL}/${locale}/compare/${comparison.slug}`,
    })),
  );
  const breadcrumbs = buildBreadcrumbList([
    { name: dict.nav.home, url: `${BASE_URL}/${locale}` },
    { name: dict.compare.indexTitle, url: `${BASE_URL}/${locale}/compare` },
  ]);

  return (
    <>
      <JsonLd data={itemList} />
      <JsonLd data={breadcrumbs} />
      <header className="listing-header">
        <h1>{dict.compare.indexTitle}</h1>
        <p className="count">
          {ALL_COMPARISONS.length} {dict.compare.countSuffix}
        </p>
        <p>{dict.compare.indexLead}</p>
      </header>
      <ul className="compare-list">
        {ALL_COMPARISONS.map((comparison) => {
          const { frontmatter } = comparison[locale];
          return (
            <li key={comparison.slug} className="compare-list-item">
              <Link href={`/${locale}/compare/${comparison.slug}`}>
                {hasAdvertising(comparison, locale) && (
                  <p className="kicker">
                    <span className="kicker-pr">{dict.article.affiliatePr}</span>
                  </p>
                )}
                <p className="compare-list-title">{frontmatter.title}</p>
                <p className="compare-list-lead">{frontmatter.lead}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
