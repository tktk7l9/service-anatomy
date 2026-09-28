import { describe, expect, it } from "vitest";
import type { TechStackEntry } from "@/engine/articles/schema";
import { techOverlap } from "./diff";

function entry(name: string): TechStackEntry {
  return { layer: "L", name, confidence: "likely", evidence: "t" };
}

describe("techOverlap", () => {
  it("splits shared / A-only / B-only tech in ascending slug order", () => {
    const diff = techOverlap(
      [entry("Next.js"), entry("Vercel")],
      [entry("Next.js"), entry("Cloudflare")],
    );
    expect(diff.shared.map((r) => r.slug)).toEqual(["next-js"]);
    expect(diff.onlyA.map((r) => r.slug)).toEqual(["vercel"]);
    expect(diff.onlyB.map((r) => r.slug)).toEqual(["cloudflare"]);
  });

  it("shared is empty when no tech is shared", () => {
    const diff = techOverlap([entry("React")], [entry("Vue")]);
    expect(diff.shared).toEqual([]);
    expect(diff.onlyA.map((r) => r.slug)).toEqual(["react"]);
    expect(diff.onlyB.map((r) => r.slug)).toEqual(["vue"]);
  });

  it("splits compound names (A / B) into individual tech tokens before comparing", () => {
    const diff = techOverlap([entry("Next.js / Vercel")], [entry("Vercel")]);
    expect(diff.shared.map((r) => r.slug)).toEqual(["vercel"]);
    expect(diff.onlyA.map((r) => r.slug)).toEqual(["next-js"]);
    expect(diff.onlyB).toEqual([]);
  });

  it("the same tech appears only once in shared even if duplicated across entries", () => {
    const diff = techOverlap([entry("Next.js"), entry("Next.js (App Router)")], [entry("Next.js")]);
    expect(diff.shared.map((r) => r.slug)).toEqual(["next-js"]);
  });

  it("two empty arrays give empty categories", () => {
    expect(techOverlap([], [])).toEqual({ shared: [], onlyA: [], onlyB: [] });
  });

  it("categories with two or more items are sorted by slug (exercises the sort comparator)", () => {
    const diff = techOverlap(
      [entry("Vue"), entry("React"), entry("Svelte")],
      [entry("Vue"), entry("React"), entry("Angular")],
    );
    expect(diff.shared.map((r) => r.slug)).toEqual(["react", "vue"]);
    expect(diff.onlyA.map((r) => r.slug)).toEqual(["svelte"]);
    expect(diff.onlyB.map((r) => r.slug)).toEqual(["angular"]);
  });
});
