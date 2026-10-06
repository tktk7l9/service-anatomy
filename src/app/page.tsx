import type { Metadata } from "next";
import { defaultLocale } from "@/i18n/config";
import LocaleLayout, { generateMetadata as localeMetadata } from "./[locale]/layout";
import HomePage from "./[locale]/page";

// "/" serves the default-locale home page itself instead of redirecting to "/ja".
// A redirect costs a full extra round trip before the first byte of the page, which on
// Lighthouse mobile was ~0.8s of simulated time and kept "/" at 82–89 while "/ja" scored higher.
// The canonical URL stays "/ja" (from the locale layout's metadata), so search engines index
// one page, and every link on the page already points into "/ja/..." or "/en/...".
const params = Promise.resolve({ locale: defaultLocale });

export function generateMetadata(): Promise<Metadata> {
  return localeMetadata({ params });
}

export default function RootPage() {
  return (
    <LocaleLayout params={params}>
      <HomePage params={params} />
    </LocaleLayout>
  );
}
