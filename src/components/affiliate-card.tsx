import { useId } from "react";
import type { AffiliateLink } from "@/engine/articles/schema";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

// Affiliate link box at the end of articles. Shown only for articles with affiliate in their frontmatter.
// To comply with the stealth-marketing rules under the Act against Unjustifiable Premiums and Misleading
// Representations (景品表示法, from 2023-10), "PR" and the fact that a referral fee is paid are shown near
// the link in a way readers easily notice. rel="sponsored" is the same declaration for search engines.
// Placed directly below the official link card (LinkCard), never before the article body.
// The note embeds the program name from frontmatter (Shopify's terms = disclosing "I am a Shopify Affiliate").
//
// Affiliate networks (ASPs) hand out ad code as a link plus a 1x1 impression image, and forbid
// changing it. So the link follows their code instead of this site's usual external-link rel:
// - rel has "nofollow" (their code) and "sponsored", and keeps "noopener" for target="_blank".
//   It has no "noreferrer": their code sends the Referer, and "noreferrer" would suppress it.
// - referrerPolicy="no-referrer-when-downgrade" is what Moshimo's code sets. It overrides the
//   site-wide strict-origin-when-cross-origin header for this link and the pixel only.
// - The pixel (affiliate.impressionUrl) is rendered right after the link when the network has one.
//   alt="" keeps it out of the accessibility tree, the CSS class takes it out of the layout, and
//   its origin reaches the CSP img-src through src/lib/impression-origins.ts.
// - Moshimo's code also carries a bare attributionsrc attribute (Attribution Reporting API), so
//   links to their click host get it too. React has no typing for it, hence the spread.

//
// The text of a text ad is part of that code too (A8.net forbids rewording it or using only the
// link part). When affiliate.label is set, the <a> contains exactly that string and nothing else:
// - The "opens in a new tab" cue that other external links carry inside their text (the arrow)
//   moves out of the link: an arrow plus a visually hidden sentence, placed after the pixel and
//   tied to the link with aria-describedby, so the ad text itself stays untouched.
// - The label is Japanese ad copy shown on both locales, so the English page marks it lang="ja".
// Without a label (programs that are not ASP text ads) the site's own CTA is used, as before.

// Kana or CJK ideographs: enough to tell Japanese ad copy from an English one.
const JAPANESE_TEXT = /[\u3040-\u30ff\u3400-\u9fff]/;

const MOSHIMO_CLICK_HOST = "af.moshimo.com";

function attributionProps(url: string): { attributionsrc?: string } {
  return URL.parse(url)?.hostname === MOSHIMO_CLICK_HOST ? { attributionsrc: "" } : {};
}

export function AffiliateCard({
  affiliate,
  service,
  locale,
  dict,
}: {
  affiliate: AffiliateLink;
  service: string;
  locale: Locale;
  dict: Dictionary;
}) {
  const cueId = useId();
  const { label } = affiliate;
  const attribution = attributionProps(affiliate.url);
  const pixel = affiliate.impressionUrl ? (
    // A tracking pixel, not content: next/image would proxy it and break the count.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="affiliate-card-pixel"
      src={affiliate.impressionUrl}
      width={1}
      height={1}
      alt=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  ) : null;
  return (
    <aside className="affiliate-card" aria-label={dict.article.affiliateAria.replace("{service}", service)}
    >
      <span className="affiliate-card-pr">{dict.article.affiliatePr}</span>
      {label ? (
        <span className="affiliate-card-link">
          <a
            className="affiliate-card-cta"
            href={affiliate.url}
            target="_blank"
            rel="sponsored nofollow noopener"
            referrerPolicy="no-referrer-when-downgrade"
            {...attribution}
            lang={locale !== "ja" && JAPANESE_TEXT.test(label) ? "ja" : undefined}
            aria-describedby={cueId}
          >
            {label}
          </a>
          {pixel}
          <span className="affiliate-card-newtab" id={cueId}>
            <span aria-hidden="true">↗</span>
            <span className="visually-hidden">{dict.article.affiliateNewTab}</span>
          </span>
        </span>
      ) : (
        <>
          <a
            className="affiliate-card-cta"
            href={affiliate.url}
            target="_blank"
            rel="sponsored nofollow noopener"
            referrerPolicy="no-referrer-when-downgrade"
            {...attribution}
          >
            {dict.article.affiliateCta.replace("{service}", service)} ↗
          </a>
          {pixel}
        </>
      )}
      <p className="affiliate-card-note">
        {dict.article.affiliateNote.replace("{program}", affiliate.program)}
      </p>
    </aside>
  );
}
