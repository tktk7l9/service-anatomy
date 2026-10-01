import type { AffiliateLink } from "@/engine/articles/schema";
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

export function AffiliateCard({
  affiliate,
  service,
  dict,
}: {
  affiliate: AffiliateLink;
  service: string;
  dict: Dictionary;
}) {
  return (
    <aside className="affiliate-card" aria-label={dict.article.affiliateAria}>
      <span className="affiliate-card-pr">{dict.article.affiliatePr}</span>
      <a
        className="affiliate-card-cta"
        href={affiliate.url}
        target="_blank"
        rel="sponsored nofollow noopener"
        referrerPolicy="no-referrer-when-downgrade"
      >
        {dict.article.affiliateCta.replace("{service}", service)} ↗
      </a>
      {affiliate.impressionUrl ? (
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
      ) : null}
      <p className="affiliate-card-note">
        {dict.article.affiliateNote.replace("{program}", affiliate.program)}
      </p>
    </aside>
  );
}
