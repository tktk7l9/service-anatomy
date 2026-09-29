import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ArticleCard } from "@/components/article-card";
import { makeArticle } from "@/engine/articles/__fixtures__/factories";
import ja from "@/i18n/dictionaries/ja";
import CategoryPage, { generateStaticParams as categoryParams } from "./[locale]/category/[category]/page";
import LocaleLayout from "./[locale]/layout";
import TagPage, { generateStaticParams as tagParams } from "./[locale]/tag/[tag]/page";
import TechPage, { generateStaticParams as techParams } from "./[locale]/tech/[tech]/page";
import NotFound from "./not-found";

vi.mock("next/navigation", () => ({
  usePathname: () => "/ja",
  notFound: () => {
    throw new Error("notFound");
  },
}));

// Structural a11y guarantees found by the axe sweep: heading order, landmarks, skip link.

/** Heading levels in document order; a valid outline never jumps down by more than one. */
function headingLevels(container: HTMLElement) {
  return [...container.querySelectorAll("h1, h2, h3, h4, h5, h6")].map((h) => Number(h.tagName[1]));
}

function expectNoSkippedLevels(levels: number[]) {
  levels.reduce((prev, level) => {
    expect(level - prev).toBeLessThanOrEqual(1);
    return level;
  }, 0);
}

describe("ArticleCard heading level", () => {
  it.each([
    [{}, "H3"],
    [{ featured: true }, "H2"],
    [{ headingLevel: 2 as const }, "H2"],
    [{ featured: true, headingLevel: 3 as const }, "H3"],
  ])("%o renders the title as %s", (props, tag) => {
    const { container } = render(
      <ArticleCard article={makeArticle("alpha-service")} locale="ja" dict={ja} {...props} />,
    );
    expect(container.querySelector("h2, h3")?.tagName).toBe(tag);
  });
});

describe("listing pages keep a valid heading order", () => {
  const cases = [
    ["category", CategoryPage, () => ({ category: categoryParams()[0].category })],
    ["tag", TagPage, () => ({ tag: tagParams()[0].tag })],
    ["tech", TechPage, () => ({ tech: techParams()[0].tech })],
  ] as const;

  it.each(cases)("%s: card titles are h2 directly under the h1", async (_name, Page, param) => {
    // Each page only reads the param it declares; the union keeps the call site generic.
    const params = Promise.resolve({ locale: "ja", ...param() }) as never;
    const { container } = render(await Page({ params }));
    const levels = headingLevels(container);
    expect(levels[0]).toBe(1);
    expect(container.querySelectorAll(".article-grid h2").length).toBeGreaterThan(0);
    expect(container.querySelector(".article-grid h3")).toBeNull();
    expectNoSkippedLevels(levels);
  });
});

describe("landmarks", () => {
  it("the locale layout starts with a skip link that targets the focusable main", async () => {
    const { container } = render(
      await LocaleLayout({ children: <p>body</p>, params: Promise.resolve({ locale: "ja" }) }),
    );
    const firstLink = container.querySelector("a");
    expect(firstLink).toHaveTextContent(ja.nav.skipToContent);
    expect(firstLink).toHaveAttribute("href", "#main");
    const main = container.querySelector("main#main");
    expect(main).not.toBeNull();
    expect(main).toHaveAttribute("tabindex", "-1");
    expect(main).toHaveTextContent("body");
    expect(container.querySelectorAll("main")).toHaveLength(1);
  });

  it("the root 404 is wrapped in a main landmark", () => {
    const { container } = render(<NotFound />);
    expect(container.querySelector("main h1")).not.toBeNull();
  });
});
