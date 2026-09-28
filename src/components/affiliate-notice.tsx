import Link from "next/link";
import { DISCLOSURE_PATH } from "@/engine/articles/disclosure";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

// Advertising notice shown near the top of an article, before the body, whenever the
// article has an affiliate link. The Consumer Affairs Agency's operational standards for
// the stealth-marketing notice treat a label shown only at the end, in small text, or in a
// lighter color as unclear (section 3-1(2) e/f/g), so this sits above the body at body-like
// size in the regular ink color, and says "PR" in words rather than relying on color.
// The caller decides visibility with hasAffiliate() so every disclosure surface agrees.

export function AffiliateNotice({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <p className="affiliate-notice">
      <span className="affiliate-card-pr">{dict.article.affiliatePr}</span>
      <span>
        {dict.article.affiliateNotice}{" "}
        <Link href={`/${locale}${DISCLOSURE_PATH}`}>{dict.article.affiliateNoticeLink}</Link>
      </span>
    </p>
  );
}
