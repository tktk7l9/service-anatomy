import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AffiliateNotice } from "@/components/affiliate-notice";
import { ComparisonAffiliates } from "@/components/comparison-affiliates";
import { ComparisonScorecard } from "@/components/comparison-scorecard";
import { ComparisonTechStack } from "@/components/comparison-techstack";
import { JsonLd } from "@/components/json-ld";
import { SourcesList } from "@/components/sources-list";
import { affiliateSlots } from "@/engine/articles/disclosure";
import { ALL_COMPARISONS, comparisonBySlug, resolveComparison } from "@/engine/comparisons";
import { techOverlap } from "@/engine/comparisons/diff";
import { formatDate } from "@/engine/format/date";
import { renderMarkdown } from "@/engine/markdown/render";
import { languageAlternates } from "@/engine/seo/alternates";
import { buildBreadcrumbList, buildItemList } from "@/engine/seo/jsonld";
import { BASE_URL } from "@/engine/site";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

// content/ Markdown is read only at build time. If this stays dynamic, on Cloudflare
// Workers a process.cwd()-relative readdirSync runs at request time, looks for content/,
// which is not in the bundle, and every article breaks. dynamicParams=false makes unlisted paths 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_COMPARISONS.map((comparison) => ({ slug: comparison.slug }));
}

async function resolve(params: Promise<{ locale: string; slug: string }>) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) return null;
  const comparison = comparisonBySlug(slug);
  if (!comparison) return null;
  const resolved = resolveComparison(comparison);
  if (!resolved) return null;
  return { locale: rawLocale as Locale, ...resolved };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const resolved = await resolve(params);
  if (!resolved) return {};
  const { locale, comparison } = resolved;
  const { frontmatter } = comparison[locale];
  const path = `/compare/${comparison.slug}`;
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

export default async function ComparePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const resolved = await resolve(params);
  if (!resolved) notFound();
  const { locale, comparison, articleA, articleB } = resolved;
  const { frontmatter, body } = comparison[locale];
  const dict = await getDictionary(locale);

  const html = renderMarkdown(body, {
    ...dict.article.callouts,
    table: dict.article.tableRegion,
  });
  const serviceA = articleA[locale].frontmatter.service;
  const serviceB = articleB[locale].frontmatter.service;
  const diff = techOverlap(articleA[locale].frontmatter.techStack, articleB[locale].frontmatter.techStack);
  const url = `${BASE_URL}/${locale}/compare/${comparison.slug}`;
  // Affiliate links come from the two compared articles. This one list drives both the notice
  // above the body and the PR cards after it; it is empty when neither article has a link.
  const affiliates = affiliateSlots([
    { slug: articleA.slug, frontmatter: articleA[locale].frontmatter },
    { slug: articleB.slug, frontmatter: articleB[locale].frontmatter },
  ]);

  const itemList = buildItemList([
    { name: articleA[locale].frontmatter.title, url: `${BASE_URL}/${locale}/articles/${articleA.slug}` },
    { name: articleB[locale].frontmatter.title, url: `${BASE_URL}/${locale}/articles/${articleB.slug}` },
  ]);
  const breadcrumbs = buildBreadcrumbList([
    { name: dict.nav.home, url: `${BASE_URL}/${locale}` },
    { name: dict.compare.indexTitle, url: `${BASE_URL}/${locale}/compare` },
    { name: frontmatter.title, url },
  ]);

  return (
    <article>
      <JsonLd data={itemList} />
      <JsonLd data={breadcrumbs} />

      <header className="article-header">
        <p className="kicker">
          <Link href={`/${locale}/compare`}>{dict.compare.indexTitle}</Link>
          <time dateTime={frontmatter.publishedAt}>{formatDate(frontmatter.publishedAt, locale)}</time>
        </p>
        <h1>{frontmatter.title}</h1>
        <p className="article-lead">{frontmatter.lead}</p>
        <div className="article-meta">
          <span>
            {dict.article.lastVerified}:{" "}
            <time dateTime={frontmatter.lastVerified}>{formatDate(frontmatter.lastVerified, locale)}</time>
          </span>
          <span>
            <Link href={`/${locale}/articles/${articleA.slug}`}>
              {serviceA} — {dict.compare.readArticle} ↗
            </Link>
          </span>
          <span>
            <Link href={`/${locale}/articles/${articleB.slug}`}>
              {serviceB} — {dict.compare.readArticle} ↗
            </Link>
          </span>
        </div>
        {affiliates.length > 0 && <AffiliateNotice locale={locale} dict={dict} />}
      </header>

      <ComparisonScorecard
        serviceA={serviceA}
        serviceB={serviceB}
        scoresA={articleA[locale].frontmatter.scores}
        scoresB={articleB[locale].frontmatter.scores}
        dict={dict}
      />

      <ComparisonTechStack diff={diff} serviceA={serviceA} serviceB={serviceB} locale={locale} dict={dict} />

      <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />

      <ComparisonAffiliates slots={affiliates} locale={locale} dict={dict} />

      <SourcesList sources={frontmatter.sources} locale={locale} dict={dict} />

      <p className="article-disclaimer">{dict.article.disclaimer}</p>
    </article>
  );
}
