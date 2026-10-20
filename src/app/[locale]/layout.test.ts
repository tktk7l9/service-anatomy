import { describe, expect, it } from "vitest";
import { locales } from "@/i18n/config";
import { dynamicParams, generateStaticParams } from "./layout";

describe("locale layout", () => {
  // With dynamicParams = false a one-segment path that is not a locale (bot probes like
  // /xmlrpc.php) answers 404 without rendering the page in the Worker.
  it("prerenders exactly the supported locales and 404s any other first segment", () => {
    expect(dynamicParams).toBe(false);
    expect(generateStaticParams()).toEqual(locales.map((locale) => ({ locale })));
  });
});
