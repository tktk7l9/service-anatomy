import { locales, type Locale } from "@/i18n/config";

// Shared generation of hreflang (metadata.alternates.languages / sitemap alternates).
// x-default is the fallback for searchers who match no language. The site's defaultLocale
// is ja, but the worldwide default in hreflang points to the English version.
const X_DEFAULT_LOCALE: Locale = "en";

/** hreflang map for metadata.alternates.languages (relative paths, resolved by metadataBase). */
export function languageAlternates(path = ""): Record<string, string> {
  const map: Record<string, string> = {};
  for (const locale of locales) {
    map[locale] = `/${locale}${path}`;
  }
  map["x-default"] = `/${X_DEFAULT_LOCALE}${path}`;
  return map;
}

/** For sitemap alternates.languages (absolute URLs). */
export function absoluteLanguageAlternates(baseUrl: string, path = ""): Record<string, string> {
  return Object.fromEntries(
    Object.entries(languageAlternates(path)).map(([hreflang, relative]) => [
      hreflang,
      `${baseUrl}${relative}`,
    ]),
  );
}
