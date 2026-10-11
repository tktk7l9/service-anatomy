import { describe, expect, it } from "vitest";
import { ALL_ARTICLES } from "@/engine/articles";
import { GET, generateStaticParams } from "./route";

// The feed must be prerendered per locale: rendered at request time inside the Worker it cannot
// read content/ and ships with no items (production served empty feeds until 2026-10-11).

function requestFeed(locale: string) {
  return GET(new Request(`https://serviceanatomy.com/${locale}/rss.xml`), {
    params: Promise.resolve({ locale }),
  });
}

describe("rss.xml route", () => {
  it("prerenders one feed per locale", () => {
    expect(generateStaticParams()).toEqual([{ locale: "ja" }, { locale: "en" }]);
  });

  it.each(["ja", "en"])("%s: lists every article as an item", async (locale) => {
    const response = await requestFeed(locale);
    expect(response.headers.get("Content-Type")).toBe("application/rss+xml; charset=utf-8");
    const xml = await response.text();
    expect(xml.match(/<item>/g)).toHaveLength(ALL_ARTICLES.length);
    expect(xml).toContain(`https://serviceanatomy.com/${locale}/articles/${ALL_ARTICLES[0].slug}`);
  });

  it("returns 404 for an unknown locale", async () => {
    const response = await requestFeed("fr");
    expect(response.status).toBe(404);
  });
});
