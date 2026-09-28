import { describe, expect, it } from "vitest";
import { CATEGORY_IDS } from "@/engine/articles/taxonomy";
import { getDictionary } from "./dictionaries";
import en from "./dictionaries/en";
import ja from "./dictionaries/ja";

// Recursively extracts the nested shape (key structure) of the values. The same shape for ja/en is
// enforced by TS too, but it is also checked at runtime (regression guard against type gaps).
function keyShape(value: unknown): unknown {
  if (Array.isArray(value)) {
    return "array";
  }
  if (typeof value === "object" && value !== null) {
    return Object.fromEntries(
      Object.entries(value)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([key, child]) => [key, keyShape(child)]),
    );
  }
  return typeof value;
}

function collectLeafStrings(value: unknown): string[] {
  if (typeof value === "string") {
    return [value];
  }
  if (Array.isArray(value)) {
    return value.flatMap(collectLeafStrings);
  }
  if (typeof value === "object" && value !== null) {
    return Object.values(value).flatMap(collectLeafStrings);
  }
  return [];
}

describe("i18n/dictionaries", () => {
  it("getDictionary は各ロケールの辞書を返す", async () => {
    await expect(getDictionary("ja")).resolves.toBe(ja);
    await expect(getDictionary("en")).resolves.toBe(en);
  });

  it("ja/en の辞書は同じキー形状を持つ", () => {
    expect(keyShape(en)).toEqual(keyShape(ja));
  });

  it.each([
    ["ja", ja],
    ["en", en],
  ] as const)("%s: 全文言が空でない", (_locale, dictionary) => {
    for (const leaf of collectLeafStrings(dictionary)) {
      expect(leaf.trim()).not.toBe("");
    }
  });

  it.each([
    ["ja", ja],
    ["en", en],
  ] as const)("%s: 全カテゴリの表示名がある", (_locale, dictionary) => {
    for (const id of CATEGORY_IDS) {
      expect(dictionary.categories[id]).toBeTruthy();
    }
  });

  // Consumer Affairs Agency operational standards, section 3-2(1)a: wording such as
  // "広告" / "PR" makes the advertiser's display clear. Keep those words in the labels.
  it.each([
    ["ja", ja, "広告"],
    ["en", en, "advertising"],
  ] as const)("%s: the ad notice names advertising explicitly and the badge says PR", (_l, dictionary, word) => {
    expect(dictionary.article.affiliateNotice).toContain(word);
    expect(dictionary.article.affiliatePr).toBe("PR");
    expect(dictionary.disclosure.howItems.join(" ")).toContain("PR");
  });
});
