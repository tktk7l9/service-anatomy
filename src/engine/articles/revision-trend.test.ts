import { describe, expect, it } from "vitest";
import { buildScoreTrend } from "./revision-trend";

const base = { product: 4, ux: 3.5, tech: 3, business: 4.5 };

describe("buildScoreTrend", () => {
  it("returns only the current checkpoint when revisions is empty (no deltas)", () => {
    const trend = buildScoreTrend([], base, "2026-07-17");
    expect(trend).toEqual([{ date: "2026-07-17", scores: base, note: undefined, isCurrent: true, deltas: undefined }]);
  });

  it("the first checkpoint has no deltas", () => {
    const trend = buildScoreTrend([{ date: "2026-07-01", scores: base, note: "初回" }], base, "2026-07-17");
    expect(trend[0].deltas).toBeUndefined();
    expect(trend[0].isCurrent).toBe(false);
  });

  it("classifies up / down / same per axis", () => {
    const previous = { product: 4, ux: 3.5, tech: 3, business: 4.5 };
    const current = { product: 4.5, ux: 3, tech: 3, business: 4.5 };
    const trend = buildScoreTrend([{ date: "2026-07-01", scores: previous, note: "初回" }], current, "2026-07-17");
    expect(trend[1].deltas).toEqual({ product: "up", ux: "down", tech: "same", business: "same" });
    expect(trend[1].isCurrent).toBe(true);
    expect(trend[1].note).toBeUndefined();
  });

  it("orders multiple revisions chronologically and computes deltas at each step", () => {
    const r1 = { product: 3, ux: 3, tech: 3, business: 3 };
    const r2 = { product: 3.5, ux: 3, tech: 3, business: 3 };
    const current = { product: 3.5, ux: 3.5, tech: 3, business: 2.5 };
    const trend = buildScoreTrend(
      [
        { date: "2026-01-01", scores: r1, note: "最初" },
        { date: "2026-04-01", scores: r2, note: "2回目" },
      ],
      current,
      "2026-07-17",
    );
    expect(trend.map((c) => c.date)).toEqual(["2026-01-01", "2026-04-01", "2026-07-17"]);
    expect(trend[1].deltas).toEqual({ product: "up", ux: "same", tech: "same", business: "same" });
    expect(trend[2].deltas).toEqual({ product: "same", ux: "up", tech: "same", business: "down" });
    expect(trend[2].isCurrent).toBe(true);
  });
});
