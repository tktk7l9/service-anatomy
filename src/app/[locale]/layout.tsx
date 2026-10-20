import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { languageAlternates } from "@/engine/seo/alternates";
import { BASE_URL } from "@/engine/site";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

// Only the locales listed here exist. Without dynamicParams = false, any one-segment path
// matched /[locale]: bot probes such as /xmlrpc.php, /.env.aws or /wp-login.php (a few hundred
// a day) each rendered the page in the Worker only to reach notFound(), and Next 16.4 then
// tried to store that 404 in the read-only static assets cache, logging
// "StaticAssetsIncrementalCache: Failed to set to read-only cache" every time. Now an unlisted
// locale gets the 404 page without rendering, like the nested routes below.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);

  return {
    metadataBase: new URL(BASE_URL),
    title: { default: dict.meta.title, template: `%s — ${dict.meta.siteName}` },
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: languageAlternates(),
      types: { "application/rss+xml": `/${locale}/rss.xml` },
    },
    openGraph: {
      type: "website",
      locale: locale === "ja" ? "ja_JP" : "en_US",
      url: `${BASE_URL}/${locale}`,
      siteName: dict.meta.siteName,
      title: dict.meta.title,
      description: dict.meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);

  return (
    <div lang={locale}>
      {/* Lets keyboard users jump past the header links (WCAG 2.4.1, SHIG 59). */}
      <a href="#main" className="skip-link">
        {dict.nav.skipToContent}
      </a>
      <Header locale={locale} dict={dict} />
      <main id="main" tabIndex={-1} className="container">{children}</main>
      <Footer locale={locale} dict={dict} />
    </div>
  );
}
