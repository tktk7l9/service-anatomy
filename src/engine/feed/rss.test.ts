import { describe, expect, it } from "vitest";
import { buildRssFeed, escapeXml, toPubDate } from "./rss";

describe("escapeXml", () => {
  it("escapes the five XML special characters", () => {
    expect(escapeXml(`&<>"'`)).toBe("&amp;&lt;&gt;&quot;&apos;");
  });

  it("leaves plain strings unchanged", () => {
    expect(escapeXml("日本語 English 123")).toBe("日本語 English 123");
  });
});

describe("toPubDate", () => {
  it("formats as RFC 1123 (UTC)", () => {
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

  it("generates well-formed XML (verified with jsdom DOMParser)", () => {
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

  it("items with empty categories emit no category line", () => {
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

  it("the channel is well-formed even with no items", () => {
    const xml = buildRssFeed({ ...base, items: [] });
    const doc = new DOMParser().parseFromString(xml, "text/xml");
    expect(doc.querySelector("parsererror")).toBeNull();
    expect(doc.querySelector("item")).toBeNull();
    expect(doc.documentElement.getAttribute("version")).toBe("2.0");
  });
});
