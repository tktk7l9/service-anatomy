import type { AffiliateLink } from "@/engine/articles/schema";
import type { Dictionary } from "@/i18n/dictionaries";

// Affiliate link box at the end of articles. Shown only for articles with affiliate in their frontmatter.
// To comply with the stealth-marketing rules under the Act against Unjustifiable Premiums and Misleading
// Representations (景品表示法, from 2023-10), "PR" and the fact that a referral fee is paid are shown near
// the link in a way readers easily notice. rel="sponsored" is the same declaration for search engines.
// Placed directly below the official link card (LinkCard), never before the article body.
// The note embeds the program name from frontmatter (Shopify's terms = disclosing "I am a Shopify Affiliate").

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
        rel="sponsored noopener noreferrer"
      >
        {dict.article.affiliateCta.replace("{service}", service)} ↗
      </a>
      <p className="affiliate-card-note">
        {dict.article.affiliateNote.replace("{program}", affiliate.program)}
      </p>
    </aside>
  );
}
