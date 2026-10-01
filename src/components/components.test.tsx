import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { makeArticle, makeFrontmatter } from "@/engine/articles/__fixtures__/factories";
import { buildScoreTrend } from "@/engine/articles/revision-trend";
import { renderMarkdown } from "@/engine/markdown/render";
import { extractToc } from "@/engine/markdown/toc";
import en from "@/i18n/dictionaries/en";
import ja from "@/i18n/dictionaries/ja";
import { techOverlap } from "@/engine/comparisons/diff";
import { AffiliateCard } from "./affiliate-card";
import { AffiliateNotice } from "./affiliate-notice";
import { ArticleBody } from "./article-body";
import { ArticleCard } from "./article-card";
import { ComparisonScorecard } from "./comparison-scorecard";
import { ComparisonTechStack } from "./comparison-techstack";
import { Footer } from "./footer";
import { Header } from "./header";
import { HeroArt } from "./hero-art";
import { LinkCard } from "./link-card";
import { MobileNav } from "./mobile-nav";
import { ScoreTrend } from "./score-trend";
import { Scorecard } from "./scorecard";
import { SourcesList } from "./sources-list";
import { TechStackTable } from "./tech-stack-table";
import { Toc } from "./toc";

vi.mock("next/navigation", () => ({
  usePathname: () => "/ja/articles/x",
}));

// Smoke tests for the presentation layer (outside the coverage gate).

describe("components smoke", () => {
  it("Header / Footer", () => {
    render(<Header locale="ja" dict={ja} />);
    render(<Footer locale="ja" dict={ja} />);
    expect(screen.getAllByText("Service Anatomy").length).toBeGreaterThan(0);
    expect(screen.getByText("English")).toHaveAttribute("href", "/en/articles/x");
    expect(screen.getByText("広告・アフィリエイトについて")).toHaveAttribute("href", "/ja/disclosure");
  });

  it("Footer links the ad/affiliate policy in English too", () => {
    render(<Footer locale="en" dict={en} />);
    expect(screen.getByText("Advertising & affiliates")).toHaveAttribute("href", "/en/disclosure");
  });

  it("HeroArt generates a deterministic SVG from the same theme", () => {
    const { container: a } = render(<HeroArt theme="alpha" />);
    const { container: b } = render(<HeroArt theme="alpha" />);
    const { container: c } = render(<HeroArt theme="beta" />);
    expect(a.innerHTML).toBe(b.innerHTML);
    expect(a.innerHTML).not.toBe(c.innerHTML);
  });

  it("ArticleCard", () => {
    render(<ArticleCard article={makeArticle("alpha-service")} locale="ja" dict={ja} featured />);
    expect(screen.getByRole("link")).toHaveAttribute("href", "/ja/articles/alpha-service");
    expect(screen.getByText("Alpha の解剖")).toBeInTheDocument();
    expect(screen.queryByText("PR")).toBeNull();
  });

  it("ArticleCard shows a text PR label only for articles with an affiliate link", () => {
    const affiliate = { url: "https://shopify.pxf.io/abc", program: "Shopify Affiliate Program" };
    const { container } = render(
      <ArticleCard article={makeArticle("beta-service", { affiliate })} locale="ja" dict={ja} />,
    );
    expect(container.querySelector(".kicker-pr")).toHaveTextContent("PR");
  });

  it("AffiliateNotice states advertising in words and links the policy page", () => {
    const { container, unmount } = render(<AffiliateNotice locale="ja" dict={ja} />);
    const notice = container.querySelector(".affiliate-notice");
    expect(notice).toHaveTextContent("PR");
    expect(notice).toHaveTextContent("この記事には広告（アフィリエイトリンク）が含まれます。");
    expect(screen.getByRole("link")).toHaveAttribute("href", "/ja/disclosure");
    unmount();
    render(<AffiliateNotice locale="en" dict={en} />);
    expect(screen.getByRole("link", { name: "Advertising & affiliate policy" })).toHaveAttribute(
      "href",
      "/en/disclosure",
    );
  });

  it("Scorecard shows the overall value and each axis", () => {
    render(<Scorecard scores={{ product: 4, ux: 3.5, tech: 3, business: 4.5 }} dict={ja} />);
    expect(screen.getByText("3.8")).toBeInTheDocument();
    expect(screen.getByText("プロダクト")).toBeInTheDocument();
  });

  it("TechStackTable shows confidence badges, evidence links, and cross-tech links", () => {
    render(
      <TechStackTable
        entries={[
          {
            layer: "Frontend",
            name: "Next.js (App Router)",
            confidence: "confirmed",
            evidence: "公式ブログ",
            evidenceUrl: "https://example.com/blog",
          },
          { layer: "CDN", name: "CloudFront", confidence: "speculative", evidence: "ヘッダー観測" },
        ]}
        locale="ja"
        dict={ja}
      />,
    );
    expect(screen.getByText("確認済み")).toBeInTheDocument();
    expect(screen.getByText("公式ブログ")).toHaveAttribute("href", "https://example.com/blog");
    expect(screen.getByText("推測")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toHaveAttribute("href", "/ja/tech/next-js");
    expect(screen.getByText("CloudFront")).toHaveAttribute("href", "/ja/tech/cloudfront");
    expect(screen.getByText(/App Router/)).toBeInTheDocument();
  });

  it("SourcesList shows the host name and access date", () => {
    render(
      <SourcesList
        sources={[{ label: "公式", url: "https://example.com/x", accessedAt: "2026-07-01" }]}
        locale="ja"
        dict={ja}
      />,
    );
    expect(screen.getByText("公式")).toBeInTheDocument();
    expect(screen.getByText(/example\.com/)).toBeInTheDocument();
  });

  it("Toc lists h2/h3 and renders nothing when empty", () => {
    const entries = extractToc("## 概要\n\n### 詳細");
    const { container } = render(<Toc entries={entries} label="目次" />);
    expect(container.querySelectorAll("li")).toHaveLength(2);
    const { container: empty } = render(<Toc entries={[]} label="目次" />);
    expect(empty.innerHTML).toBe("");
  });

  it("AffiliateCard renders a sponsored link with a PR label", () => {
    const { container } = render(
      <AffiliateCard
        affiliate={{ url: "https://shopify.pxf.io/abc", program: "Shopify Affiliate Program" }}
        service="Shopify"
        dict={ja}
      />,
    );
    const anchor = container.querySelector("a.affiliate-card-cta");
    expect(anchor).toHaveAttribute("href", "https://shopify.pxf.io/abc");
    // Follows the networks' ad code: nofollow, and no "noreferrer" (it would suppress the Referer).
    expect(anchor).toHaveAttribute("rel", "sponsored nofollow noopener");
    expect(anchor).toHaveAttribute("referrerpolicy", "no-referrer-when-downgrade");
    expect(anchor).toHaveAttribute("target", "_blank");
    // No impressionUrl (e.g. Impact links) = no pixel.
    expect(container.querySelector("img")).toBeNull();
    expect(anchor).toHaveTextContent("Shopify を無料で試す");
    expect(screen.getByText("PR")).toBeInTheDocument();
    // Shopify's program terms = disclose "being a Shopify Affiliate" and possible compensation every time it is shared
    const note = container.querySelector(".affiliate-card-note");
    expect(note).toHaveTextContent("Shopify Affiliate Program に参加");
    expect(note).toHaveTextContent("紹介料");
  });

  it("AffiliateCard renders the network's impression pixel right after the link", () => {
    const { container } = render(
      <AffiliateCard
        affiliate={{
          url: "https://px.example.net/c?id=1",
          program: "Example Program (ASP)",
          impressionUrl: "https://www12.example.net/0.gif?id=1",
        }}
        service="Example"
        dict={ja}
      />,
    );
    const pixel = container.querySelector("img");
    expect(pixel).toHaveAttribute("src", "https://www12.example.net/0.gif?id=1");
    expect(pixel).toHaveAttribute("width", "1");
    expect(pixel).toHaveAttribute("height", "1");
    expect(pixel).toHaveAttribute("loading", "lazy");
    expect(pixel).toHaveAttribute("referrerpolicy", "no-referrer-when-downgrade");
    // Decorative: an empty alt removes it from the accessibility tree.
    expect(pixel).toHaveAttribute("alt", "");
    expect(screen.queryByRole("img")).toBeNull();
    // The CSP has no nonce for inline styles to lean on and the layout must not shift: class only.
    expect(pixel).not.toHaveAttribute("style");
    expect(pixel).toHaveClass("affiliate-card-pixel");
    expect(pixel?.previousElementSibling).toBe(container.querySelector("a.affiliate-card-cta"));
    expect(container.querySelectorAll("img")).toHaveLength(1);
  });

  it("AffiliateCard note includes the program name with the English dictionary too", () => {
    const { container } = render(
      <AffiliateCard
        affiliate={{ url: "https://shopify.pxf.io/abc", program: "Shopify Affiliate Program" }}
        service="Shopify"
        dict={en}
      />,
    );
    expect(container.querySelector(".affiliate-card-note")).toHaveTextContent(
      "participate in the Shopify Affiliate Program",
    );
  });

  it("LinkCard renders OGP metadata as a link preview", () => {
    const { container } = render(
      <LinkCard
        card={{
          url: "https://example.com/",
          title: "Example Service",
          description: "説明",
          image: "https://cdn.example.com/og.png",
        }}
        service="Example"
        label="公式サイト"
      />,
    );
    const anchor = container.querySelector("a.link-card");
    expect(anchor).toHaveAttribute("href", "https://example.com/");
    expect(screen.getByText("Example Service")).toBeInTheDocument();
    expect(container.querySelector("img.link-card-image")).toHaveAttribute(
      "src",
      "https://cdn.example.com/og.png",
    );
    expect(screen.getByText(/example\.com ↗/)).toBeInTheDocument();
  });

  it("LinkCard works as a text card without an image", () => {
    const { container } = render(
      <LinkCard card={{ url: "https://example.org/" }} service="Example" label="Official site" />,
    );
    expect(screen.getByText("Example")).toBeInTheDocument();
    expect(container.querySelector("img")).toBeNull();
  });

  it("MobileNav toggles with the button and closes on link click and Escape", () => {
    render(<MobileNav locale="ja" dict={ja} />);
    const button = screen.getByRole("button", { name: ja.nav.menu });
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("navigation")).toBeNull();

    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    const panel = screen.getByRole("navigation");
    expect(panel).toBeInTheDocument();
    expect(screen.getByText(ja.nav.compare)).toHaveAttribute("href", "/ja/compare");

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("navigation")).toBeNull();
    expect(button).toHaveFocus();

    fireEvent.click(button);
    fireEvent.click(screen.getByText(ja.nav.tech));
    expect(screen.queryByRole("navigation")).toBeNull();
  });

  it("ScoreTrend renders each checkpoint's scores, deltas, and note", () => {
    const trend = buildScoreTrend(
      [{ date: "2026-07-01", scores: { product: 4, ux: 3.5, tech: 3, business: 4.5 }, note: "初回のnote" }],
      { product: 4.5, ux: 3.5, tech: 3, business: 4.5 },
      "2026-07-17",
    );
    render(<ScoreTrend checkpoints={trend} locale="ja" dict={ja} />);
    expect(screen.getByText("初回のnote")).toBeInTheDocument();
    expect(screen.getByText(ja.article.revisionsCurrent)).toBeInTheDocument();
    expect(screen.getAllByText("4.5").length).toBeGreaterThan(0);
  });

  it("ComparisonScorecard shows the scores of two services side by side", () => {
    render(
      <ComparisonScorecard
        serviceA="Alpha"
        serviceB="Beta"
        scoresA={{ product: 4, ux: 3.5, tech: 3, business: 4.5 }}
        scoresB={{ product: 3, ux: 4, tech: 4.5, business: 3 }}
        dict={ja}
      />,
    );
    expect(screen.getByText("Alpha")).toBeInTheDocument();
    expect(screen.getByText("Beta")).toBeInTheDocument();
    expect(screen.getAllByText("4.5").length).toBeGreaterThan(0);
  });

  it("ComparisonTechStack shows shared / A-only / B-only separately", () => {
    const diff = techOverlap(
      [{ layer: "L", name: "Next.js", confidence: "likely", evidence: "t" }],
      [
        { layer: "L", name: "Next.js", confidence: "likely", evidence: "t" },
        { layer: "L", name: "Rails", confidence: "likely", evidence: "t" },
      ],
    );
    render(
      <ComparisonTechStack diff={diff} serviceA="Alpha" serviceB="Beta" locale="ja" dict={ja} />,
    );
    expect(screen.getByText("Next.js")).toHaveAttribute("href", "/ja/tech/next-js");
    expect(screen.getByText("Rails")).toHaveAttribute("href", "/ja/tech/rails");
  });

  it("ArticleBody interleaves html with scorecard/techstack", () => {
    const markdown = "## 序\n\n本文。\n\n::scorecard\n\n## 技術\n\n::techstack\n\n結び。";
    const html = renderMarkdown(markdown, ja.article.callouts);
    const { container } = render(
      <ArticleBody html={html} frontmatter={makeFrontmatter()} locale="ja" dict={ja} />,
    );
    expect(container.querySelectorAll(".prose")).toHaveLength(3);
    expect(container.querySelectorAll(".anatomy-block")).toHaveLength(2);
    expect(container.querySelector(".score-fill")).not.toBeNull();
  });
});
