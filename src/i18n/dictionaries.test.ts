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
  it("getDictionary returns the dictionary for each locale", async () => {
    await expect(getDictionary("ja")).resolves.toBe(ja);
    await expect(getDictionary("en")).resolves.toBe(en);
  });

  it("ja/en dictionaries have the same key shape", () => {
    expect(keyShape(en)).toEqual(keyShape(ja));
  });

  it.each([
    ["ja", ja],
    ["en", en],
  ] as const)("%s: no string is empty", (_locale, dictionary) => {
    for (const leaf of collectLeafStrings(dictionary)) {
      expect(leaf.trim()).not.toBe("");
    }
  });

  it.each([
    ["ja", ja],
    ["en", en],
  ] as const)("%s: every category has a display name", (_locale, dictionary) => {
    for (const id of CATEGORY_IDS) {
      expect(dictionary.categories[id]).toBeTruthy();
    }
  });
});
