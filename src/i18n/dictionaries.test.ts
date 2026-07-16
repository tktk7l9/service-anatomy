import { describe, expect, it } from "vitest";
import { CATEGORY_IDS } from "@/engine/articles/taxonomy";
import { getDictionary } from "./dictionaries";
import en from "./dictionaries/en";
import ja from "./dictionaries/ja";

// 値のネスト構造（キー形状）を再帰的に取り出す。ja/en の同形は TS でも
// 強制されるが、実行時にも検証しておく（型抜けの回帰ガード）。
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
});
