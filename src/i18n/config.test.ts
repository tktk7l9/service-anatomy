import { describe, expect, it } from "vitest";
import { defaultLocale, isLocale, locales } from "./config";

describe("i18n/config", () => {
  it("locales は ja/en", () => {
    expect(locales).toEqual(["ja", "en"]);
  });

  it("defaultLocale は locales に含まれる", () => {
    expect(locales).toContain(defaultLocale);
  });

  it.each(["ja", "en"])("isLocale(%s) は true", (value) => {
    expect(isLocale(value)).toBe(true);
  });

  it.each(["fr", "", "JA", "jp"])("isLocale(%s) は false", (value) => {
    expect(isLocale(value)).toBe(false);
  });
});
