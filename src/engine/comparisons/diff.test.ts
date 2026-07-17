import { describe, expect, it } from "vitest";
import type { TechStackEntry } from "@/engine/articles/schema";
import { techOverlap } from "./diff";

function entry(name: string): TechStackEntry {
  return { layer: "L", name, confidence: "likely", evidence: "t" };
}

describe("techOverlap", () => {
  it("共有技術・A限定・B限定を slug 昇順で分ける", () => {
    const diff = techOverlap(
      [entry("Next.js"), entry("Vercel")],
      [entry("Next.js"), entry("Cloudflare")],
    );
    expect(diff.shared.map((r) => r.slug)).toEqual(["next-js"]);
    expect(diff.onlyA.map((r) => r.slug)).toEqual(["vercel"]);
    expect(diff.onlyB.map((r) => r.slug)).toEqual(["cloudflare"]);
  });

  it("共有技術が1つもなければ shared は空", () => {
    const diff = techOverlap([entry("React")], [entry("Vue")]);
    expect(diff.shared).toEqual([]);
    expect(diff.onlyA.map((r) => r.slug)).toEqual(["react"]);
    expect(diff.onlyB.map((r) => r.slug)).toEqual(["vue"]);
  });

  it("複合表記（A / B）も個別技術トークンに分解して比較する", () => {
    const diff = techOverlap([entry("Next.js / Vercel")], [entry("Vercel")]);
    expect(diff.shared.map((r) => r.slug)).toEqual(["vercel"]);
    expect(diff.onlyA.map((r) => r.slug)).toEqual(["next-js"]);
    expect(diff.onlyB).toEqual([]);
  });

  it("同じ技術が複数エントリに重複しても shared には1回だけ現れる", () => {
    const diff = techOverlap([entry("Next.js"), entry("Next.js (App Router)")], [entry("Next.js")]);
    expect(diff.shared.map((r) => r.slug)).toEqual(["next-js"]);
  });

  it("空配列同士は全カテゴリ空", () => {
    expect(techOverlap([], [])).toEqual({ shared: [], onlyA: [], onlyB: [] });
  });

  it("2件以上のカテゴリは slug 昇順にソートされる（sort比較関数の実行を含む）", () => {
    const diff = techOverlap(
      [entry("Vue"), entry("React"), entry("Svelte")],
      [entry("Vue"), entry("React"), entry("Angular")],
    );
    expect(diff.shared.map((r) => r.slug)).toEqual(["react", "vue"]);
    expect(diff.onlyA.map((r) => r.slug)).toEqual(["svelte"]);
    expect(diff.onlyB.map((r) => r.slug)).toEqual(["angular"]);
  });
});
