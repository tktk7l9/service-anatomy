import { describe, expect, it } from "vitest";
import { expiredClaims, expiresParityIssues, parseExpires } from "./expires";

describe("parseExpires", () => {
  it("undefined when expires is not set", () => {
    expect(parseExpires({}, "ctx")).toBeUndefined();
  });

  it("parses date and claim for each entry", () => {
    const parsed = parseExpires(
      {
        expires: [
          { date: "2026-10-31", claim: "Campaign price until October 31" },
          { date: "2026-10-26", claim: "Free months until October 26" },
        ],
      },
      "ctx",
    );
    expect(parsed).toEqual([
      { date: "2026-10-31", claim: "Campaign price until October 31" },
      { date: "2026-10-26", claim: "Free months until October 26" },
    ]);
  });

  it("rejects an empty list, a non-object entry, a bad date and an empty claim", () => {
    expect(() => parseExpires({ expires: [] }, "ctx")).toThrow(/ctx: expires must be an array/);
    expect(() => parseExpires({ expires: ["2026-10-31"] }, "ctx")).toThrow(/ctx: expires\[0\]: element must be an object/);
    expect(() => parseExpires({ expires: [{ date: "2026/10/31", claim: "c" }] }, "ctx")).toThrow(
      /expires\[0\]: date must be a quoted string/,
    );
    expect(() => parseExpires({ expires: [{ date: "2026-10-31", claim: " " }] }, "ctx")).toThrow(
      /expires\[0\]: claim must be a non-empty string/,
    );
  });
});

describe("expiredClaims", () => {
  const claims = [
    { date: "2026-10-31", claim: "October rate" },
    { date: "2026-10-26", claim: "Campaign A" },
    { date: "2026-11-04", claim: "Campaign B" },
  ];

  it("lists only claims whose last valid day is before today, oldest first", () => {
    expect(expiredClaims(claims, "2026-11-01")).toEqual([
      { date: "2026-10-26", claim: "Campaign A" },
      { date: "2026-10-31", claim: "October rate" },
    ]);
  });

  it("keeps a claim on its last valid day", () => {
    expect(expiredClaims(claims, "2026-10-26")).toEqual([]);
  });

  it("empty when there are no claims", () => {
    expect(expiredClaims(undefined, "2026-11-01")).toEqual([]);
  });
});

describe("expiresParityIssues", () => {
  const ja = [{ date: "2026-10-31", claim: "10月の料率" }];

  it("empty when the dates match (claims are translated)", () => {
    expect(expiresParityIssues(ja, [{ date: "2026-10-31", claim: "October rate" }])).toEqual([]);
    expect(expiresParityIssues(undefined, undefined)).toEqual([]);
  });

  it("detects a different count", () => {
    expect(expiresParityIssues(ja, undefined)).toEqual(["expires count differs between ja/en (ja=1 / en=0)"]);
  });

  it("detects a different date", () => {
    expect(expiresParityIssues(ja, [{ date: "2026-11-01", claim: "October rate" }])).toEqual([
      "expires[0].date differs between ja/en (ja=2026-10-31 / en=2026-11-01)",
    ]);
  });
});
