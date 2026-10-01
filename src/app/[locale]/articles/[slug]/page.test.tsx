import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ALL_ARTICLES } from "@/engine/articles";
import { hasAffiliate } from "@/engine/articles/disclosure";
import ArticlePage from "./page";

// Renders the real article page for real content, so the notice above the body and
// the PR card after it are checked against the same condition end to end.
async function renderArticle(locale: "ja" | "en", slug: string) {
  const element = await ArticlePage({ params: Promise.resolve({ locale, slug }) });
  return render(element).container;
}

const withAffiliate = ALL_ARTICLES.find((a) => hasAffiliate(a.ja.frontmatter));
const withoutAffiliate = ALL_ARTICLES.find((a) => !hasAffiliate(a.ja.frontmatter));

describe("article page advertising disclosure", () => {
  it("content has at least one article with and one without an affiliate link", () => {
    expect(withAffiliate).toBeDefined();
    expect(withoutAffiliate).toBeDefined();
  });

  it.each([
    ["ja", "この記事には広告（アフィリエイトリンク）が含まれます。"],
    ["en", "This article contains affiliate links (advertising)."],
  ] as const)("%s: shows the notice before the body when an affiliate link is set", async (locale, text) => {
    const container = await renderArticle(locale, withAffiliate!.slug);
    const notice = container.querySelector(".affiliate-notice");
    expect(notice).toHaveTextContent(text);
    expect(notice).toHaveTextContent("PR");
    expect(notice?.querySelector("a")).toHaveAttribute("href", `/${locale}/disclosure`);
    // The notice sits in the article header, i.e. before the body and before the PR card.
    expect(notice?.closest(".article-header")).not.toBeNull();
    const body = container.querySelector(".article-layout");
    expect(notice!.compareDocumentPosition(body!) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(container.querySelector(".affiliate-card a[rel~='sponsored']")).not.toBeNull();
  });

  it.each(["ja", "en"] as const)("%s: loads the network's impression pixel inside the PR card", async (locale) => {
    const article = ALL_ARTICLES.find((a) => a.ja.frontmatter.affiliate?.impressionUrl);
    const container = await renderArticle(locale, article!.slug);
    const pixels = container.querySelectorAll("img.affiliate-card-pixel");
    expect(pixels).toHaveLength(1);
    expect(pixels[0]).toHaveAttribute("src", article!.ja.frontmatter.affiliate!.impressionUrl);
    expect(pixels[0].closest(".affiliate-card")).not.toBeNull();
  });

  it.each(["ja", "en"] as const)("%s: an affiliate link without impressionUrl loads no pixel", async (locale) => {
    const article = ALL_ARTICLES.find(
      (a) => a.ja.frontmatter.affiliate && !a.ja.frontmatter.affiliate.impressionUrl,
    );
    const container = await renderArticle(locale, article!.slug);
    expect(container.querySelector(".affiliate-card")).not.toBeNull();
    expect(container.querySelector(".affiliate-card-pixel")).toBeNull();
  });

  it.each(["ja", "en"] as const)("%s: shows neither notice nor PR card without an affiliate link", async (locale) => {
    const container = await renderArticle(locale, withoutAffiliate!.slug);
    expect(container.querySelector(".affiliate-notice")).toBeNull();
    expect(container.querySelector(".affiliate-card")).toBeNull();
    expect(container.querySelector("a[rel~='sponsored']")).toBeNull();
    expect(container.querySelector(".affiliate-card-pixel")).toBeNull();
  });
});
