import { describe, expect, it } from "vitest";
import { formatDate } from "./date";

describe("formatDate", () => {
  it("ja は 年月日 表記（ゼロ埋めなし）", () => {
    expect(formatDate("2026-07-01", "ja")).toBe("2026年7月1日");
    expect(formatDate("2026-12-31", "ja")).toBe("2026年12月31日");
  });

  it("en は Month D, YYYY 表記", () => {
    expect(formatDate("2026-07-01", "en")).toBe("July 1, 2026");
    expect(formatDate("2026-01-09", "en")).toBe("January 9, 2026");
  });
});
