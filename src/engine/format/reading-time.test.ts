import { describe, expect, it } from "vitest";
import { estimateReadingMinutes, formatReadingTime } from "./reading-time";

describe("estimateReadingMinutes", () => {
  it("ja は文字数ベース（500字/分）", () => {
    expect(estimateReadingMinutes("あ".repeat(1000), "ja")).toBe(2);
  });

  it("en は単語数ベース（220語/分）", () => {
    expect(estimateReadingMinutes("word ".repeat(440).trim(), "en")).toBe(2);
    expect(estimateReadingMinutes("", "en")).toBe(0);
  });
});

describe("formatReadingTime", () => {
  it("四捨五入し、1分未満は1分とする", () => {
    expect(formatReadingTime(0.2, "ja")).toBe("約1分");
    expect(formatReadingTime(2.6, "ja")).toBe("約3分");
    expect(formatReadingTime(2.4, "en")).toBe("~2 min");
  });
});
