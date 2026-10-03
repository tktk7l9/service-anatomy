import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ALL_ARTICLES } from "@/engine/articles";
import { ALL_COMPARISONS, comparisonHasAdvertising, comparisonsFor } from "@/engine/comparisons";
import ArticlePage from "./page";

// Renders the real article page for real content and checks the "comparisons featuring this
// service" section against the engine and the compare index's advertising condition.
async function renderArticle(locale: "ja" | "en", slug: string) {
  const element = await ArticlePage({ params: Promise.resolve({ locale, slug }) });
  return render(element).container;
}

const section = (container: HTMLElement) => container.querySelector("section.article-comparisons");
const withoutComparisons = ALL_ARTICLES.find((a) => comparisonsFor(a.slug).length === 0);
const plainComparison = ALL_COMPARISONS.find(
  (c) => !comparisonHasAdvertising(comparisonsFor(c.ja.frontmatter.slugA).find((r) => r.comparison === c)!, "ja"),
);

describe("article page comparisons section", () => {
  it("content has an article without comparisons and a comparison without advertising", () => {
    expect(withoutComparisons).toBeDefined();
    expect(plainComparison).toBeDefined();
  });

  it.each([
    ["ja", "この記事を含む比較解剖", "比較相手"],
    ["en", "Comparisons featuring this service", "Compared with"],
  ] as const)("%s: yayoi links to both comparisons that include it, labelled PR", async (locale, heading, vs) => {
    const container = await renderArticle(locale, "yayoi");
    const found = section(container);
    expect(found).not.toBeNull();
    expect(found).toHaveAttribute("aria-label", heading);
    expect(found?.querySelector(".section-label")).toHaveTextContent(heading);

    for (const [slug, otherSlug] of [
      ["moneyforward-cloud-vs-yayoi", "moneyforward-cloud"],
      ["freee-vs-yayoi", "freee"],
    ]) {
      const link = found!.querySelector(`a[href="/${locale}/compare/${slug}"]`);
      const comparison = ALL_COMPARISONS.find((c) => c.slug === slug)!;
      const other = ALL_ARTICLES.find((a) => a.slug === otherSlug)!;
      expect(link?.querySelector(".compare-list-title")).toHaveTextContent(comparison[locale].frontmatter.title);
      expect(link).toHaveTextContent(`${vs}: ${other[locale].frontmatter.service}`);
      // Yayoi has an affiliate link, so every comparison containing it carries advertising.
      expect(link?.querySelector(".kicker-pr")).toHaveTextContent("PR");
    }
    // The section only links to another page: no new disclosure or sponsored link inside it.
    expect(found!.querySelector(".affiliate-notice, a[rel~='sponsored']")).toBeNull();
  });

  it.each(["ja", "en"] as const)("%s: no PR label on a comparison without advertising", async (locale) => {
    const container = await renderArticle(locale, plainComparison!.ja.frontmatter.slugA);
    const link = section(container)!.querySelector(`a[href="/${locale}/compare/${plainComparison!.slug}"]`);
    expect(link).not.toBeNull();
    expect(link!.querySelector(".kicker-pr")).toBeNull();
  });

  it.each(["ja", "en"] as const)("%s: the section is absent for an article in no comparison", async (locale) => {
    const container = await renderArticle(locale, withoutComparisons!.slug);
    expect(section(container)).toBeNull();
    expect(container.querySelector(`a[href^="/${locale}/compare/"]`)).toBeNull();
  });
});
