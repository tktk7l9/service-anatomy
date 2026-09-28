import Link from "next/link";
import { DISCLOSURE_PATH } from "@/engine/articles/disclosure";
import { GITHUB_URL } from "@/engine/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>{dict.footer.disclaimer}</p>
        <p>{dict.footer.trademark}</p>
        <p>
          <Link href={`/${locale}${DISCLOSURE_PATH}`}>{dict.footer.disclosure}</Link>
        </p>
        <p>
          © {new Date().getFullYear()} {dict.meta.siteName} ·{" "}
          <a href={GITHUB_URL} rel="noopener noreferrer" target="_blank">
            {dict.footer.github} ↗
          </a>
        </p>
      </div>
    </footer>
  );
}
