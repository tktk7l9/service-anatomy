import { locales, type Locale } from "@/i18n/config";

// hreflang（metadata.alternates.languages / sitemap alternates）の共通生成。
// x-default はどの言語にも一致しない検索者向けのフォールバック。サイト内の
// defaultLocale は ja だが、hreflang 上の世界向け既定は英語版を指す。
export const X_DEFAULT_LOCALE: Locale = "en";

/** metadata.alternates.languages 用の hreflang マップ（相対パス・metadataBase で解決）。 */
export function languageAlternates(path = ""): Record<string, string> {
  const map: Record<string, string> = {};
  for (const locale of locales) {
    map[locale] = `/${locale}${path}`;
  }
  map["x-default"] = `/${X_DEFAULT_LOCALE}${path}`;
  return map;
}

/** sitemap の alternates.languages 用（絶対URL）。 */
export function absoluteLanguageAlternates(baseUrl: string, path = ""): Record<string, string> {
  return Object.fromEntries(
    Object.entries(languageAlternates(path)).map(([hreflang, relative]) => [
      hreflang,
      `${baseUrl}${relative}`,
    ]),
  );
}
