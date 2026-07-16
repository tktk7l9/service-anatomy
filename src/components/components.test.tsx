import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { makeArticle, makeFrontmatter } from "@/engine/articles/__fixtures__/factories";
import { renderMarkdown } from "@/engine/markdown/render";
import { extractToc } from "@/engine/markdown/toc";
import ja from "@/i18n/dictionaries/ja";
import { ArticleBody } from "./article-body";
import { ArticleCard } from "./article-card";
import { Footer } from "./footer";
import { Header } from "./header";
import { HeroArt } from "./hero-art";
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

  it("TechStackTable は confidence バッジと根拠リンクを表示する", () => {
    render(
      <TechStackTable
        entries={[
          {
            layer: "Frontend",
            name: "React",
            confidence: "confirmed",
            evidence: "公式ブログ",
            evidenceUrl: "https://example.com/blog",
          },
          { layer: "CDN", name: "CloudFront", confidence: "speculative", evidence: "ヘッダー観測" },
        ]}
        dict={ja}
      />,
    );
    expect(screen.getByText("確認済み")).toBeInTheDocument();
    expect(screen.getByText("公式ブログ")).toHaveAttribute("href", "https://example.com/blog");
    expect(screen.getByText("推測")).toBeInTheDocument();
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

  it("ArticleBody は html と scorecard/techstack を interleave する", () => {
    const markdown = "## 序\n\n本文。\n\n::scorecard\n\n## 技術\n\n::techstack\n\n結び。";
    const html = renderMarkdown(markdown, ja.article.callouts);
    const { container } = render(
      <ArticleBody html={html} frontmatter={makeFrontmatter()} dict={ja} />,
    );
    expect(container.querySelectorAll(".prose")).toHaveLength(3);
    expect(container.querySelectorAll(".anatomy-block")).toHaveLength(2);
    expect(container.querySelector(".score-fill")).not.toBeNull();
  });
});
