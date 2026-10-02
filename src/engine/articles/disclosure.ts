import type { AffiliateLink, ArticleFrontmatter } from "./schema";

// Single source of truth for "this article contains advertising".
// Japan's stealth-marketing rule (Premiums and Representations Act, designated notice
// effective 2023-10-01) requires the reader to be able to tell an affiliate display is
// advertising. Every disclosure surface — the notice above the body, the PR card after
// the body, and the PR label on listing cards — must key off this one condition so they
// can never disagree.

/** Path (without the locale prefix) of the advertising / affiliate policy page. */
export const DISCLOSURE_PATH = "/disclosure";

export function affiliateOf(frontmatter: Pick<ArticleFrontmatter, "affiliate">): AffiliateLink | null {
  return frontmatter.affiliate ?? null;
}

export function hasAffiliate(frontmatter: Pick<ArticleFrontmatter, "affiliate">): boolean {
  return affiliateOf(frontmatter) !== null;
}

/** One side of a page that covers several articles (a comparison), with its affiliate link. */
export interface AffiliateSlot {
  slug: string;
  service: string;
  affiliate: AffiliateLink;
}

/**
 * Affiliate links of a page built from several articles, in the given order. Sides without a
 * link are dropped, so an empty result means "no advertising on this page": the comparison page
 * shows the notice and the PR cards from this one list, the same way an article uses affiliateOf.
 */
export function affiliateSlots(
  sides: readonly { slug: string; frontmatter: Pick<ArticleFrontmatter, "affiliate" | "service"> }[],
): AffiliateSlot[] {
  return sides.flatMap(({ slug, frontmatter }) => {
    const affiliate = affiliateOf(frontmatter);
    return affiliate ? [{ slug, service: frontmatter.service, affiliate }] : [];
  });
}
