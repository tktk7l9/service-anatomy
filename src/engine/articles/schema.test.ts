import { describe, expect, it } from "vitest";
import { makeRawFrontmatter } from "./__fixtures__/factories";
import { parseFrontmatter } from "./schema";

function mutate(fn: (raw: Record<string, unknown>) => void): Record<string, unknown> {
  const raw = makeRawFrontmatter();
  fn(raw);
  return raw;
}

describe("parseFrontmatter", () => {
  it("parses valid frontmatter", () => {
    const parsed = parseFrontmatter(makeRawFrontmatter(), "ctx");
    expect(parsed.service).toBe("Alpha");
    expect(parsed.category).toBe("game");
    expect(parsed.scores).toEqual({ product: 4, ux: 3.5, tech: 3, business: 4.5 });
    expect(parsed.techStack[0].confidence).toBe("likely");
    expect(parsed.sources).toHaveLength(1);
  });

  it("accepts confirmed with an evidenceUrl", () => {
    const raw = mutate((r) => {
      (r.techStack as Record<string, unknown>[])[0].confidence = "confirmed";
      (r.techStack as Record<string, unknown>[])[0].evidenceUrl = "https://example.com/proof";
    });
    expect(parseFrontmatter(raw, "ctx").techStack[0].evidenceUrl).toBe("https://example.com/proof");
  });

  it("undefined when affiliate is not set", () => {
    expect(parseFrontmatter(makeRawFrontmatter(), "ctx").affiliate).toBeUndefined();
  });

  it("accepts affiliate (affiliate link)", () => {
    const raw = mutate((r) => {
      r.affiliate = { url: "https://shopify.pxf.io/abc", program: "Shopify Affiliate Program（Impact）" };
    });
    expect(parseFrontmatter(raw, "ctx").affiliate).toEqual({
      url: "https://shopify.pxf.io/abc",
      program: "Shopify Affiliate Program（Impact）",
    });
  });

  it("accepts affiliate.impressionUrl (the network's impression pixel)", () => {
    const raw = mutate((r) => {
      r.affiliate = {
        url: "https://px.example.net/click?id=1",
        program: "Example (ASP)",
        impressionUrl: "https://www12.example.net/0.gif?id=1",
      };
    });
    expect(parseFrontmatter(raw, "ctx").affiliate).toEqual({
      url: "https://px.example.net/click?id=1",
      program: "Example (ASP)",
      impressionUrl: "https://www12.example.net/0.gif?id=1",
    });
  });

  it("leaves impressionUrl off the object when it is not set", () => {
    const raw = mutate((r) => {
      r.affiliate = { url: "https://shopify.pxf.io/abc", program: "Shopify" };
    });
    expect(parseFrontmatter(raw, "ctx").affiliate).not.toHaveProperty("impressionUrl");
  });

  it("undefined when revisions is not set", () => {
    expect(parseFrontmatter(makeRawFrontmatter(), "ctx").revisions).toBeUndefined();
  });

  it("accepts revisions (periodic re-anatomy)", () => {
    const raw = mutate((r) => {
      r.revisions = [
        { date: "2026-07-01", scores: { product: 4, ux: 3.5, tech: 3, business: 4.5 }, note: "初回" },
      ];
    });
    expect(parseFrontmatter(raw, "ctx").revisions).toEqual([
      { date: "2026-07-01", scores: { product: 4, ux: 3.5, tech: 3, business: 4.5 }, note: "初回" },
    ]);
  });

  it.each([
    ["frontmatter is a string", () => "not-object" as unknown, /frontmatter must be an object/],
    ["frontmatter is null", () => null as unknown, /frontmatter must be an object/],
    ["frontmatter is an array", () => [] as unknown, /frontmatter must be an object/],
  ])("fails when %s", (_name, make, pattern) => {
    expect(() => parseFrontmatter(make(), "ctx")).toThrow(pattern);
  });

  it.each([
    ["service is missing", (r: Record<string, unknown>) => delete r.service, /service must be a non-empty string/],
    ["service is not a string", (r: Record<string, unknown>) => (r.service = 1), /service must be a non-empty string/],
    ["title is whitespace only", (r: Record<string, unknown>) => (r.title = "  "), /title must be a non-empty string/],
    ["category is an undefined value", (r: Record<string, unknown>) => (r.category = "sports"), /category "sports" is not defined/],
    ["tags is not an array", (r: Record<string, unknown>) => (r.tags = "steam"), /tags must be an array with at least one item/],
    ["tags is an empty array", (r: Record<string, unknown>) => (r.tags = []), /tags must be an array with at least one item/],
    ["tags contains a non-string", (r: Record<string, unknown>) => (r.tags = [1]), /tags\[0\] must be a kebab-case/],
    ["tags contains a non-kebab-case value", (r: Record<string, unknown>) => (r.tags = ["Steam Deck"]), /tags\[0\] must be a kebab-case/],
    ["publishedAt has an invalid format", (r: Record<string, unknown>) => (r.publishedAt = "2026/07/01"), /publishedAt must be a quoted string in "YYYY-MM-DD"/],
    [
      "publishedAt is a YAML Date (bare date)",
      (r: Record<string, unknown>) => (r.publishedAt = new Date("2026-07-01")),
      /publishedAt must be a non-empty string/,
    ],
    ["serviceUrl is http", (r: Record<string, unknown>) => (r.serviceUrl = "http://example.com"), /serviceUrl must be a URL starting with https:\/\//],
    ["scores is not an object", (r: Record<string, unknown>) => (r.scores = 5), /scores must be an object/],
    [
      "scores is missing an axis",
      (r: Record<string, unknown>) => delete (r.scores as Record<string, unknown>).ux,
      /scores\.ux must be a number from 0 to 5/,
    ],
    [
      "scores is out of range (negative)",
      (r: Record<string, unknown>) => ((r.scores as Record<string, unknown>).tech = -0.5),
      /scores\.tech must be a number from 0 to 5/,
    ],
    [
      "scores is out of range (above 5)",
      (r: Record<string, unknown>) => ((r.scores as Record<string, unknown>).product = 5.5),
      /scores\.product must be a number from 0 to 5/,
    ],
    [
      "scores is not in steps of 0.5",
      (r: Record<string, unknown>) => ((r.scores as Record<string, unknown>).business = 4.2),
      /scores\.business must be a number from 0 to 5/,
    ],
    ["techStack is empty", (r: Record<string, unknown>) => (r.techStack = []), /techStack must be an array with at least one item/],
    [
      "techStack element is not an object",
      (r: Record<string, unknown>) => (r.techStack = ["React"]),
      /techStack\[0\]: element must be an object/,
    ],
    [
      "confidence is an undefined value",
      (r: Record<string, unknown>) => ((r.techStack as Record<string, unknown>[])[0].confidence = "certain"),
      /confidence must be one of confirmed \| likely \| speculative/,
    ],
    [
      "evidenceUrl is http",
      (r: Record<string, unknown>) => ((r.techStack as Record<string, unknown>[])[0].evidenceUrl = "http://x.com"),
      /evidenceUrl must be a URL starting with https:\/\//,
    ],
    [
      "confirmed without evidenceUrl",
      (r: Record<string, unknown>) => ((r.techStack as Record<string, unknown>[])[0].confidence = "confirmed"),
      /evidenceUrl \(primary source\) is required when confidence is confirmed/,
    ],
    ["sources is empty", (r: Record<string, unknown>) => (r.sources = []), /sources must be an array with at least one item/],
    [
      "sources element is not an object",
      (r: Record<string, unknown>) => (r.sources = ["https://example.com"]),
      /sources\[0\]: element must be an object/,
    ],
    [
      "sources.url is not https",
      (r: Record<string, unknown>) => ((r.sources as Record<string, unknown>[])[0].url = "ftp://x"),
      /sources\[0\]: url must be a URL starting with https:\/\//,
    ],
    [
      "sources.accessedAt has an invalid format",
      (r: Record<string, unknown>) => ((r.sources as Record<string, unknown>[])[0].accessedAt = "July 1"),
      /sources\[0\]: accessedAt must be a quoted string in "YYYY-MM-DD"/,
    ],
    ["revisions is an empty array", (r: Record<string, unknown>) => (r.revisions = []), /revisions must be an array with at least one item/],
    [
      "revisions element is not an object",
      (r: Record<string, unknown>) => (r.revisions = ["2026-07-01"]),
      /revisions\[0\]: element must be an object/,
    ],
    [
      "revisions[].date has an invalid format",
      (r: Record<string, unknown>) => (r.revisions = [{ date: "July 1", scores: (r.scores as unknown), note: "n" }]),
      /revisions\[0\]: date must be a quoted string in "YYYY-MM-DD"/,
    ],
    [
      "revisions[].scores axis is out of range",
      (r: Record<string, unknown>) => (
        r.revisions = [
          { date: "2026-07-01", scores: { product: 9, ux: 3.5, tech: 3, business: 4.5 }, note: "n" },
        ]
      ),
      /revisions\[0\]: scores\.product must be a number from 0 to 5/,
    ],
    [
      "affiliate is not an object",
      (r: Record<string, unknown>) => (r.affiliate = "https://shopify.pxf.io/abc"),
      /affiliate must be an object/,
    ],
    [
      "affiliate.url is not https",
      (r: Record<string, unknown>) => (r.affiliate = { url: "http://shopify.pxf.io/abc", program: "p" }),
      /affiliate: url must be a URL starting with https:\/\//,
    ],
    [
      "affiliate.impressionUrl is not https (protocol-relative ad code must be rewritten)",
      (r: Record<string, unknown>) =>
        (r.affiliate = { url: "https://a.example/c", program: "p", impressionUrl: "//i.example/af/i/impression" }),
      /affiliate: impressionUrl must be a URL starting with https:\/\//,
    ],
    [
      "affiliate.impressionUrl has a wildcard host",
      (r: Record<string, unknown>) =>
        (r.affiliate = { url: "https://a.example/c", program: "p", impressionUrl: "https://*.example.net/0.gif" }),
      /affiliate: impressionUrl must be a plain https URL with a concrete host/,
    ],
    [
      "affiliate.impressionUrl carries credentials",
      (r: Record<string, unknown>) =>
        (r.affiliate = { url: "https://a.example/c", program: "p", impressionUrl: "https://user:pw@i.example/0.gif" }),
      /affiliate: impressionUrl must be a plain https URL with a concrete host/,
    ],
    [
      "affiliate.impressionUrl carries a user name",
      (r: Record<string, unknown>) =>
        (r.affiliate = { url: "https://a.example/c", program: "p", impressionUrl: "https://user@i.example/0.gif" }),
      /affiliate: impressionUrl must be a plain https URL with a concrete host/,
    ],
    [
      "affiliate.impressionUrl carries only a password",
      (r: Record<string, unknown>) =>
        (r.affiliate = { url: "https://a.example/c", program: "p", impressionUrl: "https://:pw@i.example/0.gif" }),
      /affiliate: impressionUrl must be a plain https URL with a concrete host/,
    ],
    [
      "affiliate.impressionUrl contains whitespace",
      (r: Record<string, unknown>) =>
        (r.affiliate = { url: "https://a.example/c", program: "p", impressionUrl: "https://i.example/0.gif 'unsafe-inline'" }),
      /affiliate: impressionUrl must be a plain https URL with a concrete host/,
    ],
    [
      "affiliate.impressionUrl does not parse",
      (r: Record<string, unknown>) =>
        (r.affiliate = { url: "https://a.example/c", program: "p", impressionUrl: "https://" }),
      /affiliate: impressionUrl must be a plain https URL with a concrete host/,
    ],
    [
      "affiliate.impressionUrl is empty",
      (r: Record<string, unknown>) => (r.affiliate = { url: "https://a.example/c", program: "p", impressionUrl: "" }),
      /affiliate: impressionUrl must be a non-empty string/,
    ],
    [
      "affiliate.program is missing",
      (r: Record<string, unknown>) => (r.affiliate = { url: "https://shopify.pxf.io/abc" }),
      /affiliate: program must be a non-empty string/,
    ],
    [
      "revisions[].note is missing",
      (r: Record<string, unknown>) => (r.revisions = [{ date: "2026-07-01", scores: (r.scores as unknown) }]),
      /revisions\[0\]: note must be a non-empty string/,
    ],
  ])("fails when %s", (_name, mutator, pattern) => {
    expect(() => parseFrontmatter(mutate(mutator as (r: Record<string, unknown>) => void), "ctx")).toThrow(pattern);
  });

  it("error messages include the context (file name)", () => {
    const raw = mutate((r) => delete r.title);
    expect(() => parseFrontmatter(raw, "my-service/ja.md")).toThrow(/^my-service\/ja\.md: /);
  });
});

