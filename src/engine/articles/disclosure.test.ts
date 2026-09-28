import { describe, expect, it } from "vitest";
import { makeFrontmatter } from "./__fixtures__/factories";
import { affiliateOf, DISCLOSURE_PATH, hasAffiliate } from "./disclosure";

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
});
