import { describe, expect, it } from "vitest";
import { defaultLocale, isLocale, locales } from "./config";

describe("i18n/config", () => {
  it("locales are ja/en", () => {
    expect(locales).toEqual(["ja", "en"]);
  });

  it("defaultLocale is included in locales", () => {
    expect(locales).toContain(defaultLocale);
  });

  it.each(["ja", "en"])("isLocale(%s) is true", (value) => {
    expect(isLocale(value)).toBe(true);
  });

  it.each(["fr", "", "JA", "jp"])("isLocale(%s) is false", (value) => {
    expect(isLocale(value)).toBe(false);
  });
});
