"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { LocaleSwitcher } from "./locale-switcher";

// 狭幅ではヘッダーの6項目（記事一覧/技術DB/比較解剖/About/RSS/言語切替）を
// ハンバーガーメニューに折りたたむ。デスクトップ用 .site-nav とは
// CSS のブレークポイントで排他表示（両方 DOM には常に存在する）。

export function MobileNav({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="mobile-nav">
      <button
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
