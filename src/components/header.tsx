import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { LocaleSwitcher } from "./locale-switcher";

/** レティクル（照準・解剖図）モチーフのブランドマーク。 */
function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 32 32" width="20" height="20" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="16" cy="16" r="11.5" />
        <line x1="16" y1="1.5" x2="16" y2="8" />
        <line x1="16" y1="24" x2="16" y2="30.5" />
        <line x1="1.5" y1="16" x2="8" y2="16" />
        <line x1="24" y1="16" x2="30.5" y2="16" />
      </g>
      <circle cx="16" cy="16" r="3" fill="currentColor" />
    </svg>
  );
}

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <header className="site-header">
      <div className="container">
        <Link href={`/${locale}`} className="brand">
          <BrandMark />
          <span>{dict.meta.siteName}</span>
        </Link>
        <nav className="site-nav" aria-label="Site">
          <Link href={`/${locale}`}>{dict.nav.home}</Link>
          <Link href={`/${locale}/tech`}>{dict.nav.tech}</Link>
          <Link href={`/${locale}/about`}>{dict.nav.about}</Link>
          <a href={`/${locale}/rss.xml`}>{dict.nav.rss}</a>
          <LocaleSwitcher locale={locale} label={dict.nav.switchLocale} />
        </nav>
      </div>
    </header>
  );
}
