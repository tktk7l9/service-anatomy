import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { makeArticle, makeFrontmatter } from "@/engine/articles/__fixtures__/factories";
import { buildScoreTrend } from "@/engine/articles/revision-trend";
import { renderMarkdown } from "@/engine/markdown/render";
import { extractToc } from "@/engine/markdown/toc";
import ja from "@/i18n/dictionaries/ja";
import { techOverlap } from "@/engine/comparisons/diff";
import { ArticleBody } from "./article-body";
import { ArticleCard } from "./article-card";
import { ComparisonScorecard } from "./comparison-scorecard";
import { ComparisonTechStack } from "./comparison-techstack";
import { Footer } from "./footer";
import { Header } from "./header";
import { HeroArt } from "./hero-art";
import { LinkCard } from "./link-card";
import { ScoreTrend } from "./score-trend";
import { Scorecard } from "./scorecard";
import { SourcesList } from "./sources-list";
import { TechStackTable } from "./tech-stack-table";
import { Toc } from "./toc";

vi.mock("next/navigation", () => ({
  usePathname: () => "/ja/articles/x",
}));

// presentation 層の smoke テスト（カバレッジゲート対象外）。

describe("components smoke", () => {
  it("Header / Footer", () => {
    render(<Header locale="ja" dict={ja} />);
    render(<Footer dict={ja} />);
    expect(screen.getAllByText("Service Anatomy").length).toBeGreaterThan(0);
    expect(screen.getByText("English")).toHaveAttribute("href", "/en/articles/x");
  });

  it("HeroArt は同じ theme から決定的な SVG を生成する", () => {
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
  });

  it("Scorecard は総合値と各軸を表示する", () => {
    render(<Scorecard scores={{ product: 4, ux: 3.5, tech: 3, business: 4.5 }} dict={ja} />);
    expect(screen.getByText("3.8")).toBeInTheDocument();
    expect(screen.getByText("プロダクト")).toBeInTheDocument();
  });

  it("TechStackTable は confidence バッジ・根拠リンク・技術横断リンクを表示する", () => {
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

  it("SourcesList はホスト名と閲覧日を表示する", () => {
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

  it("Toc は h2/h3 を並べ、空なら描画しない", () => {
    const entries = extractToc("## 概要\n\n### 詳細");
    const { container } = render(<Toc entries={entries} label="目次" />);
    expect(container.querySelectorAll("li")).toHaveLength(2);
    const { container: empty } = render(<Toc entries={[]} label="目次" />);
    expect(empty.innerHTML).toBe("");
  });

  it("LinkCard は OGP メタデータをリンクプレビューとして描画する", () => {
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

  it("LinkCard は画像なしでもテキストカードとして成立する", () => {
    const { container } = render(
      <LinkCard card={{ url: "https://example.org/" }} service="Example" label="Official site" />,
    );
    expect(screen.getByText("Example")).toBeInTheDocument();
    expect(container.querySelector("img")).toBeNull();
  });

  it("ScoreTrend は各チェックポイントのスコアとデルタ・note を描画する", () => {
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

  it("ComparisonScorecard は2サービスのスコアを並べて表示する", () => {
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

  it("ComparisonTechStack は共有/A限定/B限定を分けて表示する", () => {
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

  it("ArticleBody は html と scorecard/techstack を interleave する", () => {
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
