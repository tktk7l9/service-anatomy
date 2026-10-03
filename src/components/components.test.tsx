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
import { ComparisonAffiliates } from "./comparison-affiliates";
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
    const { container: a } = render(<HeroArt theme="alpha" label="Alpha" />);
    const { container: b } = render(<HeroArt theme="alpha" label="Alpha" />);
    const { container: c } = render(<HeroArt theme="beta" label="Alpha" />);
    expect(a.innerHTML).toBe(b.innerHTML);
    expect(a.innerHTML).not.toBe(c.innerHTML);
  });

  it("HeroArt draws the service name on a centred plate and stays hidden from assistive tech", () => {
    const { container } = render(<HeroArt theme="alpha" label="Shopify" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("aria-hidden", "true");
    expect(svg).toHaveAttribute("viewBox", "0 0 1200 630");
    expect(svg?.querySelector("title")).toBeNull();
    const texts = container.querySelectorAll(".hero-art-label text");
    expect(texts).toHaveLength(1);
    expect(texts[0]).toHaveTextContent("Shopify");
    expect(texts[0]).toHaveAttribute("x", "600");
    expect(texts[0]).toHaveAttribute("text-anchor", "middle");
    expect(texts[0]).not.toHaveAttribute("textLength");
    const rect = container.querySelector(".hero-art-label rect");
    expect(Number(rect?.getAttribute("x")) + Number(rect?.getAttribute("width")) / 2).toBeCloseTo(600);
    expect(Number(rect?.getAttribute("y")) + Number(rect?.getAttribute("height")) / 2).toBeCloseTo(315);
    // CSP-friendly: presentation attributes and a class, no inline style.
    expect(container.querySelector("[style]")).toBeNull();
  });

  it("HeroArt wraps a long service name onto two lines", () => {
    const { container } = render(
      <HeroArt theme="alpha" label="やよいの青色申告 オンライン（弥生）" />,
    );
    const texts = [...container.querySelectorAll(".hero-art-label text")];
    expect(texts.map((text) => text.textContent)).toEqual(["やよいの青色申告 オンライン", "（弥生）"]);
  });

  it("HeroArt squeezes a name that cannot wrap and draws no plate without a name", () => {
    const { container } = render(<HeroArt theme="alpha" label={"あ".repeat(24)} />);
    expect(container.querySelector(".hero-art-label text")).toHaveAttribute("textLength", "960");
    const { container: empty } = render(<HeroArt theme="alpha" label="" />);
    expect(empty.querySelector(".hero-art-label")).toBeNull();
  });

  it("the art behind the plate is unchanged by the label", () => {
    const strip = (html: string) => html.replace(/<g class="hero-art-label">.*<\/g>/u, "");
    const { container: a } = render(<HeroArt theme="alpha" label="Alpha" />);
    const { container: b } = render(<HeroArt theme="alpha" label="" />);
    expect(strip(a.innerHTML)).toBe(b.innerHTML);
  });

  it("ArticleCard puts the service name on its thumbnail", () => {
    const { container } = render(
      <ArticleCard article={makeArticle("alpha-service")} locale="ja" dict={ja} />,
    );
    const article = makeArticle("alpha-service");
    expect(container.querySelector(".hero-art-label text")).toHaveTextContent(
      article.ja.frontmatter.service,
    );
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
        locale="ja"
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

  it("AffiliateCard adds attributionsrc only to Moshimo click links", () => {
    const moshimo = render(
      <AffiliateCard
        affiliate={{
          url: "https://af.moshimo.com/af/c/click?a_id=1&p_id=2&pc_id=3&pl_id=4",
          program: "Example Program (Moshimo)",
        }}
        service="Example"
        locale="ja"
        dict={ja}
      />,
    );
    expect(moshimo.container.querySelector("a.affiliate-card-cta")).toHaveAttribute(
      "attributionsrc",
      "",
    );
    moshimo.unmount();
    const labelled = render(
      <AffiliateCard
        affiliate={{
          url: "https://af.moshimo.com/af/c/click?a_id=1&p_id=2&pc_id=3&pl_id=4",
          program: "Example Program (Moshimo)",
          label: "Example ad text",
        }}
        service="Example"
        locale="ja"
        dict={ja}
      />,
    );
    expect(labelled.container.querySelector("a.affiliate-card-cta")).toHaveAttribute(
      "attributionsrc",
      "",
    );
    labelled.unmount();
    const other = render(
      <AffiliateCard
        affiliate={{ url: "https://px.a8.net/svt/ejp?a8mat=X", program: "Example Program (A8)" }}
        service="Example"
        locale="ja"
        dict={ja}
      />,
    );
    expect(other.container.querySelector("a.affiliate-card-cta")).not.toHaveAttribute(
      "attributionsrc",
    );
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
        locale="ja"
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

  it("AffiliateCard without a label keeps the dictionary CTA in English", () => {
    const { container } = render(
      <AffiliateCard
        affiliate={{ url: "https://shopify.pxf.io/abc", program: "Shopify Affiliate Program" }}
        service="Shopify"
        locale="en"
        dict={en}
      />,
    );
    const anchor = container.querySelector("a.affiliate-card-cta");
    expect(anchor?.textContent).toBe("Try Shopify for free ↗");
    expect(anchor).not.toHaveAttribute("lang");
    expect(anchor).not.toHaveAttribute("aria-describedby");
    expect(container.querySelector(".affiliate-card-newtab")).toBeNull();
  });

  it("AffiliateCard uses the ASP material's text verbatim as the link text", () => {
    const label = "フリーランスの請求書を即日払い【EXAMPLE】";
    const { container } = render(
      <AffiliateCard
        affiliate={{
          url: "https://px.example.net/c?id=1",
          program: "Example Program (ASP)",
          impressionUrl: "https://www12.example.net/0.gif?id=1",
          label,
        }}
        service="Example"
        locale="ja"
        dict={ja}
      />,
    );
    const anchor = container.querySelector("a.affiliate-card-cta")!;
    // Exactly the ad text: no arrow, no template, no child elements.
    expect(anchor.textContent).toBe(label);
    expect(anchor.childElementCount).toBe(0);
    expect(anchor).toHaveAttribute("href", "https://px.example.net/c?id=1");
    expect(anchor).toHaveAttribute("rel", "sponsored nofollow noopener");
    expect(anchor).toHaveAttribute("target", "_blank");
    // Same language as the page: no lang override.
    expect(anchor).not.toHaveAttribute("lang");
    // The pixel still follows the link directly, as in the network's code.
    const pixel = container.querySelector("img.affiliate-card-pixel");
    expect(pixel?.previousElementSibling).toBe(anchor);
    // The new-tab cue lives outside the link and is tied to it for assistive tech.
    const cue = container.querySelector(".affiliate-card-newtab")!;
    expect(anchor.contains(cue)).toBe(false);
    expect(pixel?.nextElementSibling).toBe(cue);
    expect(cue).toHaveTextContent("↗");
    expect(cue).toHaveTextContent("新しいタブで開きます");
    expect(cue.querySelector("[aria-hidden='true']")).toHaveTextContent("↗");
    expect(anchor).toHaveAttribute("aria-describedby", cue.id);
    expect(anchor).toHaveAccessibleName(label);
    expect(anchor).toHaveAccessibleDescription("新しいタブで開きます");
  });

  it("AffiliateCard marks a Japanese label as lang=ja on the English page", () => {
    const label = "フリーランスの請求書を即日払い【EXAMPLE】";
    const { container } = render(
      <AffiliateCard
        affiliate={{ url: "https://px.example.net/c?id=1", program: "Example Program (ASP)", label }}
        service="Example"
        locale="en"
        dict={en}
      />,
    );
    const anchor = container.querySelector("a.affiliate-card-cta")!;
    expect(anchor.textContent).toBe(label);
    expect(anchor).toHaveAttribute("lang", "ja");
    expect(anchor).toHaveAccessibleDescription("Opens in a new tab");
    // No pixel configured: the cue follows the link.
    expect(anchor.nextElementSibling).toHaveClass("affiliate-card-newtab");
  });

  it("AffiliateCard leaves a non-Japanese label without a lang override on the English page", () => {
    const { container } = render(
      <AffiliateCard
        affiliate={{ url: "https://px.example.net/c?id=1", program: "Example Program (ASP)", label: "Get paid today [EXAMPLE]" }}
        service="Example"
        locale="en"
        dict={en}
      />,
    );
    const anchor = container.querySelector("a.affiliate-card-cta")!;
    expect(anchor.textContent).toBe("Get paid today [EXAMPLE]");
    expect(anchor).not.toHaveAttribute("lang");
  });

  it("AffiliateCard note includes the program name with the English dictionary too", () => {
    const { container } = render(
      <AffiliateCard
        affiliate={{ url: "https://shopify.pxf.io/abc", program: "Shopify Affiliate Program" }}
        service="Shopify"
        locale="en"
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

  it("ComparisonAffiliates renders one card per side under its service name, in order", () => {
    const { container } = render(
      <ComparisonAffiliates
        slots={[
          {
            slug: "alpha",
            service: "Alpha",
            affiliate: { url: "https://example.com/a", program: "Alpha Program", label: "Ad text without a name" },
          },
          { slug: "beta", service: "Beta", affiliate: { url: "https://example.com/b", program: "Beta Program" } },
        ]}
        locale="en"
        dict={en}
      />,
    );
    const groups = screen.getAllByRole("group");
    expect(groups).toHaveLength(2);
    // The service name labels the group, so the card is attributed in text, not by position.
    expect(groups[0]).toHaveAccessibleName("Alpha");
    expect(groups[1]).toHaveAccessibleName("Beta");
    expect(groups[0].querySelector("a[rel~='sponsored']")).toHaveAttribute("href", "https://example.com/a");
    expect(groups[1].querySelector("a[rel~='sponsored']")).toHaveAttribute("href", "https://example.com/b");
    expect(container.querySelectorAll(".affiliate-card")).toHaveLength(2);
    expect(groups[1].querySelector(".affiliate-card-note")).toHaveTextContent("Beta Program");
    // Two complementary landmarks on one page need distinct names (axe landmark-unique).
    const asides = screen.getAllByRole("complementary");
    expect(asides[0]).toHaveAccessibleName("Affiliate link for Alpha (PR)");
    expect(asides[1]).toHaveAccessibleName("Affiliate link for Beta (PR)");
  });

  it("ComparisonAffiliates renders nothing without a slot", () => {
    const { container } = render(<ComparisonAffiliates slots={[]} locale="ja" dict={ja} />);
    expect(container).toBeEmptyDOMElement();
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
    const html = renderMarkdown(markdown, { ...ja.article.callouts, table: ja.article.tableRegion });
    const { container } = render(
      <ArticleBody html={html} frontmatter={makeFrontmatter()} locale="ja" dict={ja} />,
    );
    expect(container.querySelectorAll(".prose")).toHaveLength(3);
    expect(container.querySelectorAll(".anatomy-block")).toHaveLength(2);
    expect(container.querySelector(".score-fill")).not.toBeNull();
  });
});
