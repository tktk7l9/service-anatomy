import { describe, expect, it } from "vitest";
import { contentSecurityPolicy } from "./csp";

describe("contentSecurityPolicy", () => {
  const prod = contentSecurityPolicy();

  it("nonce を含まない（middleware を廃止したので発行元が無い）", () => {
    expect(prod).not.toContain("nonce-");
  });

  it("'strict-dynamic' を含まない", () => {
    // CSP Level 3 では 'strict-dynamic' があると allowlist と 'self' / 'unsafe-inline' が
    // 無視される。nonce もハッシュも無いこの構成で足すと信頼の起点が消え、
    // ページ上の全スクリプトが止まる。足すなら nonce かハッシュを同時に用意すること。
    expect(prod).not.toContain("strict-dynamic");
    // dev 側も同じく禁止。dev だけ壊れる混入を見逃さない。
    expect(contentSecurityPolicy({ dev: true })).not.toContain("strict-dynamic");
  });

  it("インラインを許すことを script-src に明示している", () => {
    // 末尾の ; まで含めて固定する。含めないと "'unsafe-inline' https: *" のように
    // 後ろに緩い値が足されても通ってしまう。
    expect(prod).toContain("script-src 'self' 'unsafe-inline';");
  });

  it("本番では 'unsafe-eval' を出さない", () => {
    expect(prod).not.toContain("unsafe-eval");
  });

  it("dev では Next のオーバーレイ用に 'unsafe-eval' を足す", () => {
    expect(contentSecurityPolicy({ dev: true })).toContain("'unsafe-eval'");
  });

  it("既定では img-src は self と data: だけ", () => {
    expect(prod).toContain("img-src 'self' data:;");
  });

  it("extraImgSrc で公式リンクカードの OGP ホストを足せる", () => {
    const csp = contentSecurityPolicy({
      extraImgSrc: ["https://cdn.example.com", "https://img.example.org"],
    });
    expect(csp).toContain("img-src 'self' data: https://cdn.example.com https://img.example.org;");
  });

  it("extraImgSrc が空配列でも img-src の形が壊れない", () => {
    expect(contentSecurityPolicy({ extraImgSrc: [] })).toContain("img-src 'self' data:;");
  });

  it("締めるべきディレクティブが揃っている", () => {
    for (const directive of [
      "default-src 'self'",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self'",
      "connect-src 'self'",
      "manifest-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ]) {
      expect(prod).toContain(directive);
    }
  });

  it("ディレクティブは ; 区切りで、末尾に余分な ; を付けない", () => {
    expect(prod.endsWith(";")).toBe(false);
    expect(prod).not.toContain(";;");
  });
});
