"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { LocaleSwitcher } from "./locale-switcher";

// On narrow widths, collapse the header's six items (articles / tech DB / comparisons / About / RSS / language)
// into a hamburger menu. Shown mutually exclusively with the desktop .site-nav via
// a CSS breakpoint (both are always in the DOM).

export function MobileNav({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      // The panel unmounts, so hand focus back to the toggle instead of dropping it to <body>.
      toggleRef.current?.focus();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="mobile-nav">
      <button
        ref={toggleRef}
        type="button"
        className="mobile-nav-toggle"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="mobile-nav-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="visually-hidden">{dict.nav.menu}</span>
      </button>
      {open && (
        <nav id="mobile-nav-panel" className="mobile-nav-panel" aria-label="Site">
          <Link href={`/${locale}`} onClick={close}>
            {dict.nav.home}
          </Link>
          <Link href={`/${locale}/tech`} onClick={close}>
            {dict.nav.tech}
          </Link>
          <Link href={`/${locale}/compare`} onClick={close}>
            {dict.nav.compare}
          </Link>
          <Link href={`/${locale}/about`} onClick={close}>
            {dict.nav.about}
          </Link>
          <a href={`/${locale}/rss.xml`}>{dict.nav.rss}</a>
          <LocaleSwitcher locale={locale} label={dict.nav.switchLocale} />
        </nav>
      )}
    </div>
  );
}
