import { describe, expect, it } from "vitest";
import { ALL_ARTICLES } from "@/engine/articles";
import { locales } from "@/i18n/config";
import { dynamicParams, generateStaticParams } from "./opengraph-image";

describe("article OGP image route", () => {
  // With dynamicParams = false, a path missing from this list answers 404. Listing only
  // `slug` prerendered nothing, so every article's OGP image was a 404.
  it("prerenders every article in every locale", () => {
    expect(dynamicParams).toBe(false);
    const params = generateStaticParams();
    expect(params).toHaveLength(ALL_ARTICLES.length * locales.length);
    for (const locale of locales) {
      expect(params).toContainEqual({ locale, slug: ALL_ARTICLES[0].slug });
    }
  });
});
