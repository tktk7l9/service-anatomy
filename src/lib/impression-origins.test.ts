import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { ALL_ARTICLES } from "@/engine/articles";
import { contentSecurityPolicy } from "./csp";
import { impressionOrigins, readImpressionOrigins } from "./impression-origins";

const REAL_ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

describe("impressionOrigins", () => {
  it("reduces URLs to sorted, de-duplicated origins (path and query dropped)", () => {
    expect(
      impressionOrigins([
        "https://www12.example.net/0.gif?a8mat=X",
        "https://i.example.com/af/i/impression?a_id=1&p_id=2",
        "https://i.example.com/af/i/impression?a_id=1&p_id=3",
      ]),
    ).toEqual(["https://i.example.com", "https://www12.example.net"]);
  });

  it("is empty when no article has a pixel", () => {
    expect(impressionOrigins([])).toEqual([]);
  });

  it.each([
    ["http", "http://i.example.com/p.gif"],
    ["data:", "data:image/gif;base64,AAAA"],
    ["a wildcard host", "https://*.example.com/p.gif"],
  ])("rejects %s so the CSP is never widened beyond a concrete https host", (_name, value) => {
    expect(() => impressionOrigins([value])).toThrow(/must be an https URL with a concrete host/);
  });

  it("rejects a protocol-relative URL copied straight from ad code", () => {
    expect(() => impressionOrigins(["//i.example.com/af/i/impression?a_id=1"])).toThrow();
  });
});

describe("readImpressionOrigins", () => {
  const tmpDirs: string[] = [];
  function makeDir(files: Record<string, string>): string {
    const root = mkdtempSync(path.join(os.tmpdir(), "impression-origins-"));
    tmpDirs.push(root);
    for (const [relative, content] of Object.entries(files)) {
      mkdirSync(path.dirname(path.join(root, relative)), { recursive: true });
      writeFileSync(path.join(root, relative), content);
    }
    return root;
  }
  afterEach(() => {
    for (const dir of tmpDirs.splice(0)) rmSync(dir, { recursive: true, force: true });
  });

  const withPixel = (url: string) =>
    `---\naffiliate:\n  url: "https://px.example.net/c"\n  program: "P"\n  impressionUrl: "${url}"\n---\nbody\n`;

  it("collects origins from both locale files and ignores articles without a pixel", () => {
    const dir = makeDir({
      "alpha/ja.md": withPixel("https://www12.example.net/0.gif?id=1"),
      "alpha/en.md": withPixel("https://www12.example.net/0.gif?id=1"),
      "beta/ja.md": withPixel("https://i.example.com/af/i/impression?a_id=1"),
      "gamma/ja.md": `---\naffiliate:\n  url: "https://x.example/c"\n  program: "P"\n---\nbody\n`,
      "delta/ja.md": "---\nservice: \"D\"\n---\nbody\n",
      "README.md": "not an article directory",
    });
    expect(readImpressionOrigins(dir)).toEqual(["https://i.example.com", "https://www12.example.net"]);
  });

  it("does not pick up a commented-out affiliate block", () => {
    const dir = makeDir({
      "alpha/ja.md": `---\n# affiliate:\n#   impressionUrl: "https://i.example.com/p"\nservice: "A"\n---\nbody\n`,
    });
    expect(readImpressionOrigins(dir)).toEqual([]);
  });

  it("fails the build on a non-string impressionUrl", () => {
    const dir = makeDir({
      "alpha/ja.md": `---\naffiliate:\n  url: "https://x.example/c"\n  program: "P"\n  impressionUrl: 42\n---\nbody\n`,
    });
    expect(() => readImpressionOrigins(dir)).toThrow(/alpha\/ja\.md: affiliate\.impressionUrl must be a string/);
  });

  it("fails the build on a non-https impressionUrl", () => {
    const dir = makeDir({ "alpha/ja.md": withPixel("http://i.example.com/p.gif") });
    expect(() => readImpressionOrigins(dir)).toThrow(/must be an https URL/);
  });
});

describe("real content: CSP img-src and impression pixels", () => {
  const fromFiles = readImpressionOrigins(REAL_ARTICLES_DIR);
  const fromArticles = [
    ...new Set(
      ALL_ARTICLES.flatMap((article) => {
        const url = article.ja.frontmatter.affiliate?.impressionUrl;
        return url ? [new URL(url).origin] : [];
      }),
    ),
  ].sort();

  it("the build-time reader agrees with the validated article loader", () => {
    // next.config.ts uses the raw reader; the pages render from the validated loader.
    // If the two disagree, a pixel is either blocked by the CSP or the CSP is wider than needed.
    expect(fromFiles).toEqual(fromArticles);
  });

  it("the networks in use are covered", () => {
    expect(fromFiles).toEqual(["https://i.moshimo.com", "https://www12.a8.net"]);
  });

  it("img-src lists exactly those origins: no wildcard, no scheme-only source", () => {
    const csp = contentSecurityPolicy({ extraImgSrc: fromFiles });
    expect(csp).toContain("img-src 'self' data: https://i.moshimo.com https://www12.a8.net;");
    const imgSrc = csp.split("; ").find((directive) => directive.startsWith("img-src"))!;
    expect(imgSrc).not.toContain("*");
    expect(imgSrc.split(" ")).not.toContain("https:");
  });

  it("the pixel hosts are not added to any other directive", () => {
    const csp = contentSecurityPolicy({ extraImgSrc: fromFiles });
    for (const directive of csp.split("; ").filter((d) => !d.startsWith("img-src"))) {
      expect(directive).not.toContain("moshimo.com");
      expect(directive).not.toContain("a8.net");
    }
  });
});
