import { describe, expect, it } from "vitest";
import { buildRssFeed, escapeXml, toPubDate } from "./rss";

describe("escapeXml", () => {
  it("XML 特殊文字5種をエスケープする", () => {
    expect(escapeXml(`&<>"'`)).toBe("&amp;&lt;&gt;&quot;&apos;");
  });

  it("通常の文字列はそのまま", () => {
    expect(escapeXml("日本語 English 123")).toBe("日本語 English 123");
  });
});

describe("toPubDate", () => {
  it("RFC 1123 (UTC) にする", () => {
    expect(toPubDate("2026-07-01")).toBe("Wed, 01 Jul 2026 00:00:00 GMT");
  });
});

describe("buildRssFeed", () => {
  const base = {
    title: "Service Anatomy",
    description: "解剖 & 分析",
    siteUrl: "https://example.com/ja",
    feedUrl: "https://example.com/ja/rss.xml",
    language: "ja",
  };

  it("整形式の XML を生成する（jsdom DOMParser で検証）", () => {
    const xml = buildRssFeed({
      ...base,
      items: [
        {
          title: "記事 <1> & テスト",
          url: "https://example.com/ja/articles/x?a=1&b=2",
          description: '説明 "引用" あり',
          publishedAt: "2026-07-01",
          categories: ["game", "steam"],
        },
      ],
    });
    const doc = new DOMParser().parseFromString(xml, "text/xml");
    expect(doc.querySelector("parsererror")).toBeNull();
    expect(doc.querySelector("channel > title")?.textContent).toBe("Service Anatomy");
    const item = doc.querySelector("item");
    expect(item?.querySelector("title")?.textContent).toBe("記事 <1> & テスト");
    expect(item?.querySelector("link")?.textContent).toBe("https://example.com/ja/articles/x?a=1&b=2");
    expect(item?.querySelector("pubDate")?.textContent).toBe("Wed, 01 Jul 2026 00:00:00 GMT");
    expect(item?.querySelectorAll("category")).toHaveLength(2);
    expect(item?.querySelector("guid")?.getAttribute("isPermaLink")).toBe("true");
  });

  it("categories が空の item は category 行を出さない", () => {
    const xml = buildRssFeed({
      ...base,
      items: [
        {
          title: "t",
          url: "https://example.com/x",
          description: "d",
          publishedAt: "2026-07-01",
          categories: [],
        },
      ],
    });
    expect(xml).not.toContain("<category>");
  });

  it("items が空でもチャンネルは整形式", () => {
    const xml = buildRssFeed({ ...base, items: [] });
    const doc = new DOMParser().parseFromString(xml, "text/xml");
    expect(doc.querySelector("parsererror")).toBeNull();
    expect(doc.querySelector("item")).toBeNull();
    expect(doc.documentElement.getAttribute("version")).toBe("2.0");
  });
});
