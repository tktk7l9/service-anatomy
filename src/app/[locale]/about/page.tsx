import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { languageAlternates } from "@/engine/seo/alternates";
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
    title: dict.about.title,
    alternates: {
      canonical: `/${rawLocale}/about`,
      languages: languageAlternates("/about"),
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const dict = await getDictionary(rawLocale as Locale);

  return (
    <div className="static-page">
      <h1>{dict.about.title}</h1>
      <p className="article-lead">{dict.about.lead}</p>
      {dict.about.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <h2>{dict.about.methodologyTitle}</h2>
      <ul>
        {dict.about.methodology.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2>{dict.about.dataTitle}</h2>
      <p>{dict.about.dataBody}</p>
      <p>
        <a href="/api/anatomy.json">/api/anatomy.json</a>
      </p>
      <h2>{dict.about.disclaimerTitle}</h2>
      <p>{dict.about.disclaimerBody}</p>
    </div>
  );
}
