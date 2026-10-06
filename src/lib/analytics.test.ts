import { describe, expect, it } from "vitest";
import { BEACON_SRC, BEACON_TOKEN } from "./analytics";
import { contentSecurityPolicy } from "./csp";

describe("analytics beacon", () => {
  it("loads from an origin the CSP allows in script-src", () => {
    const origin = new URL(BEACON_SRC).origin;
    expect(contentSecurityPolicy()).toMatch(new RegExp(`script-src [^;]*${origin}`));
  });

  it("has a 32-digit hex site token", () => {
    expect(BEACON_TOKEN).toMatch(/^[0-9a-f]{32}$/);
  });
});
