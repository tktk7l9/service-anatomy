import { describe, expect, it } from "vitest";
import { BASE_URL, GITHUB_URL, SITE_NAME } from "../site";
import { buildBlogPosting, buildBreadcrumbList, buildItemList, buildWebSite } from "./jsonld";

describe("site 定数", () => {
  it("URL は https", () => {
    expect(BASE_URL).toMatch(/^https:\/\//);
    expect(GITHUB_URL).toMatch(/^https:\/\//);
    expect(SITE_NAME).toBe("Service Anatomy");
  });
});

describe("seo/jsonld", () => {
  it("buildWebSite", () => {
    const data = buildWebSite({
      name: SITE_NAME,
      description: "説明",
      url: `${BASE_URL}/ja`,
      locale: "ja",
    }) as Record<string, unknown>;
    expect(data["@type"]).toBe("WebSite");
    expect(data.inLanguage).toBe("ja");
  });

  it("buildBlogPosting", () => {
    const data = buildBlogPosting({
      url: `${BASE_URL}/ja/articles/x`,
      headline: "見出し",
      description: "説明",
      datePublished: "2026-07-01",
      dateModified: "2026-07-02",
      locale: "ja",
      siteName: SITE_NAME,
      serviceName: "X",
      serviceUrl: "https://example.com",
      tags: ["a", "b"],
    }) as Record<string, Record<string, unknown>>;
    expect(data["@type"]).toBe("BlogPosting");
    expect(data.mainEntityOfPage["@id"]).toBe(`${BASE_URL}/ja/articles/x`);
    expect(data.about.name).toBe("X");
    expect(data.keywords).toBe("a,b");
  });

  it("buildBreadcrumbList は position を 1 始まりで振る", () => {
    const data = buildBreadcrumbList([
      { name: "Home", url: `${BASE_URL}/ja` },
      { name: "記事", url: `${BASE_URL}/ja/articles/x` },
    ]) as { itemListElement: Record<string, unknown>[] };
    expect(data.itemListElement.map((item) => item.position)).toEqual([1, 2]);
    expect(data.itemListElement[1].item).toBe(`${BASE_URL}/ja/articles/x`);
  });

  it("buildItemList", () => {
    const data = buildItemList([{ name: "A", url: "https://example.com/a" }]) as {
      itemListElement: Record<string, unknown>[];
    };
    expect(data.itemListElement[0].url).toBe("https://example.com/a");
  });
});
