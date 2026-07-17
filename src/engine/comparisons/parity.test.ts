import { describe, expect, it } from "vitest";
import { makeComparisonFile, makeComparisonItem } from "./__fixtures__/factories";
import { localeParityIssues } from "./parity";

describe("comparisons/localeParityIssues", () => {
  it("完全に一致していれば空", () => {
    expect(localeParityIssues(makeComparisonItem("ok"))).toEqual([]);
  });

  it("言語中立フィールドの不一致を検出する", () => {
    const comparison = makeComparisonItem("x");
    comparison.en = makeComparisonFile({ publishedAt: "2026-07-19" });
    expect(localeParityIssues(comparison).join("\n")).toMatch(/publishedAt が ja\/en で一致しません/);
  });

  it("sources の件数・url 不一致を検出する", () => {
    const fewer = makeComparisonItem("x");
    fewer.en = makeComparisonFile({
      sources: [
        { label: "a", url: "https://example.com", accessedAt: "2026-07-18" },
        { label: "b", url: "https://example.org", accessedAt: "2026-07-18" },
      ],
    });
    expect(localeParityIssues(fewer).join("\n")).toMatch(/sources の件数/);

    const differentUrl = makeComparisonItem("x");
    differentUrl.en = makeComparisonFile({
      sources: [{ label: "a", url: "https://example.org", accessedAt: "2026-07-18" }],
    });
    expect(localeParityIssues(differentUrl).join("\n")).toMatch(/sources\[0\]\.url/);
  });
});
