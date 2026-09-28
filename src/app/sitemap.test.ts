import { describe, expect, it } from "vitest";
import { DISCLOSURE_PATH } from "@/engine/articles/disclosure";
import { BASE_URL } from "@/engine/site";
import { locales } from "@/i18n/config";
import sitemap from "./sitemap";

describe("sitemap", () => {
  const entries = sitemap();
  const urls = entries.map((entry) => entry.url);

  it.each(locales)("%s: lists the static pages including the ad/affiliate policy", (locale) => {
    for (const path of ["", "/about", DISCLOSURE_PATH, "/tech", "/compare"]) {
      expect(urls).toContain(`${BASE_URL}/${locale}${path}`);
    }
  });

  it("the policy page links its ja/en alternates", () => {
    const entry = entries.find((e) => e.url === `${BASE_URL}/ja${DISCLOSURE_PATH}`);
    expect(entry?.alternates?.languages).toMatchObject({
      ja: `${BASE_URL}/ja${DISCLOSURE_PATH}`,
      en: `${BASE_URL}/en${DISCLOSURE_PATH}`,
    });
  });

  it("has no duplicate URLs", () => {
    expect(new Set(urls).size).toBe(urls.length);
  });
});
