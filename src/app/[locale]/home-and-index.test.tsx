import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Header } from "@/components/header";
import { ALL_ARTICLES } from "@/engine/articles";
import ja from "@/i18n/dictionaries/ja";
import ArticlesIndexPage, { generateMetadata } from "./articles/page";
import HomePage from "./page";

// The home page shows the latest article plus the recent ones and links to the full index, so its
// HTML no longer grows with every article; the index lists every article in a compact form.

const RECENT_COUNT = Math.min(12, ALL_ARTICLES.length - 1);

function itemListLength(container: HTMLElement): number {
  const scripts = [...container.querySelectorAll('script[type="application/ld+json"]')];
  const itemList = scripts
    .map((script) => JSON.parse(script.textContent ?? "{}"))
    .find((data) => data["@type"] === "ItemList");
  return itemList.itemListElement.length;
}

describe("home page", () => {
  it.each(["ja", "en"] as const)("%s: shows the latest article and the recent ones, not every article", async (locale) => {
    const { container } = render(await HomePage({ params: Promise.resolve({ locale }) }));
    expect(container.querySelectorAll(".card-featured")).toHaveLength(1);
    expect(container.querySelectorAll(".article-grid .card")).toHaveLength(RECENT_COUNT);
    const shown = [...container.querySelectorAll("a.card")].map((a) => a.getAttribute("href"));
    expect(shown).toEqual(
      ALL_ARTICLES.slice(0, RECENT_COUNT + 1).map((article) => `/${locale}/articles/${article.slug}`),
    );
    expect(itemListLength(container)).toBe(RECENT_COUNT + 1);
  });

  it("links to the full index with the article count", async () => {
    const { container } = render(await HomePage({ params: Promise.resolve({ locale: "ja" }) }));
    const more = container.querySelector(".home-more a");
    expect(more).toHaveAttribute("href", "/ja/articles");
    expect(more).toHaveTextContent(`すべての解剖記事を見る（${ALL_ARTICLES.length}本）`);
  });
});

describe("articles index page", () => {
  it.each(["ja", "en"] as const)("%s: lists every article as a link, newest first", async (locale) => {
    const { container } = render(await ArticlesIndexPage({ params: Promise.resolve({ locale }) }));
    const links = [...container.querySelectorAll(".article-index a")].map((a) => a.getAttribute("href"));
    expect(links).toEqual(ALL_ARTICLES.map((article) => `/${locale}/articles/${article.slug}`));
    expect(itemListLength(container)).toBe(ALL_ARTICLES.length);
  });

  it("keeps a valid heading order: one h1, then an h2 per article", async () => {
    const { container } = render(await ArticlesIndexPage({ params: Promise.resolve({ locale: "ja" }) }));
    expect(container.querySelectorAll("h1")).toHaveLength(1);
    expect(container.querySelectorAll(".article-index h2")).toHaveLength(ALL_ARTICLES.length);
    expect(container.querySelector("h3")).toBeNull();
  });

  it("is canonical at /{locale}/articles with ja/en alternates", async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ locale: "en" }) });
    expect(metadata.alternates?.canonical).toBe("/en/articles");
    expect(metadata.alternates?.languages).toMatchObject({ ja: "/ja/articles", en: "/en/articles" });
  });

  it("rejects an unknown locale", async () => {
    await expect(generateMetadata({ params: Promise.resolve({ locale: "fr" }) })).resolves.toEqual({});
    await expect(ArticlesIndexPage({ params: Promise.resolve({ locale: "fr" }) })).rejects.toThrow();
  });
});

describe("site navigation", () => {
  it("the 記事一覧 link opens the full index", () => {
    render(<Header locale="ja" dict={ja} />);
    const nav = screen.getAllByRole("navigation", { name: "Site" })[0];
    expect(within(nav).getByText("記事一覧")).toHaveAttribute("href", "/ja/articles");
  });
});
