import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DISCLOSURE_PATH } from "@/engine/articles/disclosure";
import { formatDate } from "@/engine/format/date";
import { languageAlternates } from "@/engine/seo/alternates";
import { BASE_URL, GITHUB_URL } from "@/engine/site";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

// Advertising & affiliate policy. Linked from the footer, from the about page's disclaimer
// and from the notice above every article that has an affiliate link.
// Bump this date whenever the policy text in the dictionaries changes.
const POLICY_UPDATED_AT = "2026-10-01";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const dict = await getDictionary(rawLocale as Locale);
  return {
    title: dict.disclosure.title,
    description: dict.disclosure.lead,
    alternates: {
      canonical: `/${rawLocale}${DISCLOSURE_PATH}`,
      languages: languageAlternates(DISCLOSURE_PATH),
    },
    // Without these the page inherits the layout's og:url/og:title and twitter:title, i.e.
    // the home page's. Next replaces each object as a whole, so the layout's fields are restated.
    openGraph: {
      type: "website",
      locale: rawLocale === "ja" ? "ja_JP" : "en_US",
      url: `${BASE_URL}/${rawLocale}${DISCLOSURE_PATH}`,
      siteName: dict.meta.siteName,
      title: dict.disclosure.title,
      description: dict.disclosure.lead,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.disclosure.title,
      description: dict.disclosure.lead,
    },
  };
}

export default async function DisclosurePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);
  const d = dict.disclosure;

  return (
    <div className="static-page">
      <h1>{d.title}</h1>
      <p className="article-lead">{d.lead}</p>

      <h2>{d.whatTitle}</h2>
      {d.whatBody.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      <h2>{d.howTitle}</h2>
      <ul>
        {d.howItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>{d.independenceTitle}</h2>
      <ul>
        {d.independenceItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>{d.programsTitle}</h2>
      <p>{d.programsBody}</p>
      <ul>
        {d.programsItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>{d.programsNote}</p>

      <h2>{d.cookiesTitle}</h2>
      <p>{d.cookiesBody}</p>
      <p>{d.pixelBody}</p>

      <h2>{d.contactTitle}</h2>
      <p>{d.contactBody}</p>
      <p>
        <a href={`${GITHUB_URL}/issues`} rel="noopener noreferrer" target="_blank">
          {d.contactLink} ↗
        </a>
      </p>

      <p className="static-page-updated">
        {d.updatedLabel}:{" "}
        <time dateTime={POLICY_UPDATED_AT}>{formatDate(POLICY_UPDATED_AT, locale)}</time>
      </p>
    </div>
  );
}
