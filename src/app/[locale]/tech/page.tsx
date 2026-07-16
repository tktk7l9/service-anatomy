import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { allTech } from "@/engine/articles";
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
    title: dict.tech.indexTitle,
    description: dict.tech.indexLead,
    alternates: {
      canonical: `/${rawLocale}/tech`,
      languages: { ja: "/ja/tech", en: "/en/tech" },
    },
  };
}

export default async function TechIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  const tech = allTech();

  const itemList = buildItemList(
    tech.map((entry) => ({
      name: entry.name,
      url: `${BASE_URL}/${locale}/tech/${entry.slug}`,
    })),
  );
  const breadcrumbs = buildBreadcrumbList([
    { name: dict.nav.home, url: `${BASE_URL}/${locale}` },
    { name: dict.tech.indexTitle, url: `${BASE_URL}/${locale}/tech` },
  ]);

  return (
    <>
      <JsonLd data={itemList} nonce={nonce} />
      <JsonLd data={breadcrumbs} nonce={nonce} />
      <header className="listing-header">
        <p className="kicker">{dict.listing.techTitle}</p>
        <h1>{dict.tech.indexTitle}</h1>
        <p className="count">{dict.tech.indexLead}</p>
      </header>
      <ul className="tag-list tech-index">
        {tech.map((entry) => (
          <li key={entry.slug}>
            <Link href={`/${locale}/tech/${entry.slug}`}>
              {entry.name}
              <span className="tech-count">{entry.count}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
