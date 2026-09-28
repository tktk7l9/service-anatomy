import { describe, expect, it } from "vitest";
import { estimateReadingMinutes, formatReadingTime } from "./reading-time";

describe("estimateReadingMinutes", () => {
  it("ja is character based (500 chars/min)", () => {
    expect(estimateReadingMinutes("あ".repeat(1000), "ja")).toBe(2);
  });

  it("en is word based (220 words/min)", () => {
    expect(estimateReadingMinutes("word ".repeat(440).trim(), "en")).toBe(2);
    expect(estimateReadingMinutes("", "en")).toBe(0);
  });
});

describe("formatReadingTime", () => {
  it("rounds, and anything under 1 minute becomes 1 minute", () => {
    expect(formatReadingTime(0.2, "ja")).toBe("約1分");
    expect(formatReadingTime(2.6, "ja")).toBe("約3分");
    expect(formatReadingTime(2.4, "en")).toBe("~2 min");
  });
});
