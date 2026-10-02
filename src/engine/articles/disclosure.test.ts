import { describe, expect, it } from "vitest";
import { makeFrontmatter } from "./__fixtures__/factories";
import { affiliateOf, affiliateSlots, DISCLOSURE_PATH, hasAffiliate } from "./disclosure";

const affiliate = { url: "https://shopify.pxf.io/abc", program: "Shopify Affiliate Program" };

describe("articles/disclosure", () => {
  it("an article with an affiliate link is disclosed", () => {
    const frontmatter = makeFrontmatter({ affiliate });
    expect(hasAffiliate(frontmatter)).toBe(true);
    expect(affiliateOf(frontmatter)).toEqual(affiliate);
  });

  it("an article without an affiliate link is not disclosed", () => {
    const frontmatter = makeFrontmatter();
    expect(frontmatter.affiliate).toBeUndefined();
    expect(hasAffiliate(frontmatter)).toBe(false);
    expect(affiliateOf(frontmatter)).toBeNull();
  });

  it("the policy path is locale-relative and has no trailing slash", () => {
    expect(DISCLOSURE_PATH).toBe("/disclosure");
  });

  it("affiliateSlots keeps only the sides with a link, in the given order", () => {
    const other = { url: "https://example.com/aff", program: "Example Program" };
    const a = { slug: "alpha", frontmatter: makeFrontmatter({ service: "Alpha", affiliate }) };
    const b = { slug: "beta", frontmatter: makeFrontmatter({ service: "Beta", affiliate: other }) };
    const none = { slug: "gamma", frontmatter: makeFrontmatter({ service: "Gamma" }) };
    expect(affiliateSlots([a, b])).toEqual([
      { slug: "alpha", service: "Alpha", affiliate },
      { slug: "beta", service: "Beta", affiliate: other },
    ]);
    expect(affiliateSlots([none, b])).toEqual([{ slug: "beta", service: "Beta", affiliate: other }]);
    expect(affiliateSlots([a, none])).toEqual([{ slug: "alpha", service: "Alpha", affiliate }]);
  });

  it("affiliateSlots is empty when no side has a link", () => {
    expect(affiliateSlots([{ slug: "gamma", frontmatter: makeFrontmatter() }])).toEqual([]);
    expect(affiliateSlots([])).toEqual([]);
  });
});
