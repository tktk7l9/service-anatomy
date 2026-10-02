import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ALL_ARTICLES } from "@/engine/articles";
import { hasAffiliate } from "@/engine/articles/disclosure";
import type { ComparisonItem } from "@/engine/comparisons";
import CompareIndexPage from "./page";

// Renders the real index with two synthetic comparisons appended: one whose side B has an
// affiliate link and one whose sides have none. Nothing is written to content/.
vi.mock("@/engine/comparisons", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/engine/comparisons")>();
  const { ALL_ARTICLES: articles } = await import("@/engine/articles");
  const withLink = articles.find((a) => a.ja.frontmatter.affiliate)!;
  const plain = articles.filter((a) => !a.ja.frontmatter.affiliate);
  const base = actual.ALL_COMPARISONS[0];
  const fixture = (slug: string, slugA: string, slugB: string): ComparisonItem => ({
    slug,
    ja: { ...base.ja, frontmatter: { ...base.ja.frontmatter, slugA, slugB } },
    en: { ...base.en, frontmatter: { ...base.en.frontmatter, slugA, slugB } },
  });
  return {
    ...actual,
    ALL_COMPARISONS: [
      fixture("fixture-ad", plain[0].slug, withLink.slug),
      fixture("fixture-plain", plain[0].slug, plain[1].slug),
      fixture("fixture-missing", "no-such-article", withLink.slug),
    ],
  };
});

async function renderIndex(locale: "ja" | "en") {
  const element = await CompareIndexPage({ params: Promise.resolve({ locale }) });
  return render(element).container;
}

describe("comparison index advertising label", () => {
  it("content has an article with an affiliate link", () => {
    expect(ALL_ARTICLES.some((a) => hasAffiliate(a.ja.frontmatter))).toBe(true);
  });

  it.each(["ja", "en"] as const)("labels only comparisons that contain advertising (%s)", async (locale) => {
    const container = await renderIndex(locale);
    const label = (slug: string) =>
      container.querySelector(`a[href="/${locale}/compare/${slug}"] .kicker-pr`);
    expect(label("fixture-ad")).toHaveTextContent("PR");
    expect(label("fixture-plain")).toBeNull();
    // An unresolved comparison has no page to advertise on.
    expect(label("fixture-missing")).toBeNull();
  });
});
