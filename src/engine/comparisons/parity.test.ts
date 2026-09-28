import { describe, expect, it } from "vitest";
import { makeComparisonFile, makeComparisonItem } from "./__fixtures__/factories";
import { localeParityIssues } from "./parity";

describe("comparisons/localeParityIssues", () => {
  it("empty when everything matches", () => {
    expect(localeParityIssues(makeComparisonItem("ok"))).toEqual([]);
  });

  it("detects mismatched language-neutral fields", () => {
    const comparison = makeComparisonItem("x");
    comparison.en = makeComparisonFile({ publishedAt: "2026-07-19" });
    expect(localeParityIssues(comparison).join("\n")).toMatch(/publishedAt differs between ja\/en/);
  });

  it("detects mismatched sources count and url", () => {
    const fewer = makeComparisonItem("x");
    fewer.en = makeComparisonFile({
      sources: [
        { label: "a", url: "https://example.com", accessedAt: "2026-07-18" },
        { label: "b", url: "https://example.org", accessedAt: "2026-07-18" },
      ],
    });
    expect(localeParityIssues(fewer).join("\n")).toMatch(/sources count/);

    const differentUrl = makeComparisonItem("x");
    differentUrl.en = makeComparisonFile({
      sources: [{ label: "a", url: "https://example.org", accessedAt: "2026-07-18" }],
    });
    expect(localeParityIssues(differentUrl).join("\n")).toMatch(/sources\[0\]\.url/);
  });
});
