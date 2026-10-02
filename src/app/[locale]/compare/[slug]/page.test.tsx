import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ALL_ARTICLES, articleBySlug } from "@/engine/articles";
import { hasAffiliate } from "@/engine/articles/disclosure";
import { ALL_COMPARISONS, resolveComparison, type ComparisonItem } from "@/engine/comparisons";
import ComparePage from "./page";

// Renders the real comparison page. Comparisons whose articles carry affiliate links may not
// exist in content yet, so the affiliate cases use synthetic comparisons built in memory from a
// real comparison (body, sources) and real articles (the affiliate links). Nothing is written
// to content/.
const fixtures = vi.hoisted(() => new Map<string, unknown>());

vi.mock("@/engine/comparisons", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/engine/comparisons")>();
  return {
    ...actual,
    comparisonBySlug: (slug: string) => fixtures.get(slug) ?? actual.comparisonBySlug(slug),
  };
});

function addFixture(slug: string, slugA: string, slugB: string): string {
  const base = ALL_COMPARISONS[0];
  const fixture: ComparisonItem = {
    slug,
    ja: { ...base.ja, frontmatter: { ...base.ja.frontmatter, slugA, slugB } },
    en: { ...base.en, frontmatter: { ...base.en.frontmatter, slugA, slugB } },
  };
  fixtures.set(slug, fixture);
  return slug;
}

async function renderComparison(locale: "ja" | "en", slug: string) {
  const element = await ComparePage({ params: Promise.resolve({ locale, slug }) });
  return render(element).container;
}

const withLabel = ALL_ARTICLES.find((a) => a.ja.frontmatter.affiliate?.label)!;
const withoutLabel = ALL_ARTICLES.find((a) => a.ja.frontmatter.affiliate && !a.ja.frontmatter.affiliate.label)!;
const plain = ALL_ARTICLES.find((a) => !hasAffiliate(a.ja.frontmatter))!;

const both = addFixture("fixture-both", withLabel.slug, withoutLabel.slug);
const onlyB = addFixture("fixture-only-b", plain.slug, withLabel.slug);

const withoutAffiliate = ALL_COMPARISONS.find((comparison) => {
  const resolved = resolveComparison(comparison)!;
  return !hasAffiliate(resolved.articleA.ja.frontmatter) && !hasAffiliate(resolved.articleB.ja.frontmatter);
});

describe("comparison page advertising disclosure", () => {
  it("content has the articles and the comparison these tests need", () => {
    expect(withLabel).toBeDefined();
    expect(withoutLabel).toBeDefined();
    expect(plain).toBeDefined();
    expect(withoutAffiliate).toBeDefined();
  });

  it.each([
    ["ja", "この記事には広告（アフィリエイトリンク）が含まれます。"],
    ["en", "This article contains affiliate links (advertising)."],
  ] as const)("%s: shows the notice before the body and one card per side, A then B", async (locale, text) => {
    const container = await renderComparison(locale, both);
    const notice = container.querySelector(".affiliate-notice");
    expect(notice).toHaveTextContent(text);
    expect(notice).toHaveTextContent("PR");
    expect(notice?.querySelector("a")).toHaveAttribute("href", `/${locale}/disclosure`);
    expect(notice?.closest(".article-header")).not.toBeNull();
    // The notice comes before the body and before every sponsored link.
    const body = container.querySelector(".prose")!;
    expect(notice!.compareDocumentPosition(body) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    const links = [...container.querySelectorAll("a[rel~='sponsored']")];
    expect(links.map((a) => a.getAttribute("href"))).toEqual([
      withLabel.ja.frontmatter.affiliate!.url,
      withoutLabel.ja.frontmatter.affiliate!.url,
    ]);
    for (const link of links) {
      expect(link).toHaveAttribute("rel", "sponsored nofollow noopener");
      expect(body.compareDocumentPosition(link) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
      expect(notice!.compareDocumentPosition(link) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    }
    // Each card is attributed to its service in text.
    const names = [...container.querySelectorAll(".comparison-affiliate-service")].map((n) => n.textContent);
    expect(names).toEqual([
      articleBySlug(withLabel.slug)![locale].frontmatter.service,
      articleBySlug(withoutLabel.slug)![locale].frontmatter.service,
    ]);
    // The network's ad text stays verbatim.
    expect(links[0].textContent).toBe(withLabel.ja.frontmatter.affiliate!.label);
  });

  it.each(["ja", "en"] as const)("%s: one affiliated side gives the notice and a single card", async (locale) => {
    const container = await renderComparison(locale, onlyB);
    expect(container.querySelector(".affiliate-notice")).not.toBeNull();
    const cards = container.querySelectorAll(".affiliate-card");
    expect(cards).toHaveLength(1);
    expect(container.querySelector(".comparison-affiliate-service")).toHaveTextContent(
      articleBySlug(withLabel.slug)![locale].frontmatter.service,
    );
    const impressionUrl = withLabel.ja.frontmatter.affiliate!.impressionUrl;
    const pixels = container.querySelectorAll("img.affiliate-card-pixel");
    expect(pixels).toHaveLength(impressionUrl ? 1 : 0);
  });

  it.each(["ja", "en"] as const)("%s: shows nothing ad-related when neither side has a link", async (locale) => {
    const container = await renderComparison(locale, withoutAffiliate!.slug);
    expect(container.querySelector(".affiliate-notice")).toBeNull();
    expect(container.querySelector(".comparison-affiliates")).toBeNull();
    expect(container.querySelector(".affiliate-card")).toBeNull();
    expect(container.querySelector("a[rel~='sponsored']")).toBeNull();
    expect(container.querySelector(".affiliate-card-pixel")).toBeNull();
    // The body is still followed directly by the sources list, as before.
    expect(container.querySelector(".prose")!.nextElementSibling).toHaveClass("sources");
  });
});
