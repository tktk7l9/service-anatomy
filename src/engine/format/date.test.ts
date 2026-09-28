import { describe, expect, it } from "vitest";
import { formatDate } from "./date";

describe("formatDate", () => {
  it("ja uses year-month-day kanji format (no zero padding)", () => {
    expect(formatDate("2026-07-01", "ja")).toBe("2026年7月1日");
    expect(formatDate("2026-12-31", "ja")).toBe("2026年12月31日");
  });

  it("en uses Month D, YYYY format", () => {
    expect(formatDate("2026-07-01", "en")).toBe("July 1, 2026");
    expect(formatDate("2026-01-09", "en")).toBe("January 9, 2026");
  });
});
