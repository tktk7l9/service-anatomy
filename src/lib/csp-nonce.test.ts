import { afterEach, describe, expect, it, vi } from "vitest";
import { contentSecurityPolicy } from "./csp";
import {
  applyScriptNonce,
  createNonce,
  CSP_HEADER,
  type Rewriter,
  type ScriptElement,
  withScriptNonce,
} from "./csp-nonce";

const STATIC_CSP = contentSecurityPolicy({ extraImgSrc: ["https://cdn.example.com"] });

/** Records the handler so tests can feed it fake <script> elements. */
function fakeRewriter() {
  const calls: { selector: string; handler: (el: ScriptElement) => void }[] = [];
  const transformed: Response[] = [];
  const rewriter: Rewriter = {
    on(selector, handlers) {
      calls.push({ selector, handler: handlers.element });
      return rewriter;
    },
    transform(response) {
      transformed.push(response);
      return response;
    },
  };
  return { rewriter: () => rewriter, calls, transformed };
}

function script(attrs: Record<string, string>) {
  return {
    attrs,
    hasAttribute: (name: string) => name in attrs,
    setAttribute(name: string, value: string) {
      attrs[name] = value;
    },
  };
}

function html(headers: Record<string, string> = {}) {
  return new Response("<html><script>1</script></html>", {
    status: 200,
    statusText: "OK",
    headers: { "content-type": "text/html; charset=utf-8", [CSP_HEADER]: STATIC_CSP, ...headers },
  });
}

describe("createNonce", () => {
  it("returns 128 random bits as base64, different every call", () => {
    const a = createNonce();
    expect(a).toMatch(/^[A-Za-z0-9+/]{22}==$/);
    expect(createNonce()).not.toBe(a);
  });
});

describe("withScriptNonce", () => {
  it("replaces 'unsafe-inline' in script-src only, keeping 'self' and the beacon host", () => {
    const out = withScriptNonce(STATIC_CSP, "abc");
    expect(out).toContain("script-src 'self' 'nonce-abc' https://static.cloudflareinsights.com;");
    // style-src keeps 'unsafe-inline' (React style attributes), which Observatory accepts.
    expect(out).toContain("style-src 'self' 'unsafe-inline';");
    expect(out).not.toMatch(/script-src[^;]*unsafe-inline/);
    // Only the script-src token changes; the rest of the policy is byte-identical.
    expect(out).toBe(STATIC_CSP.replace("script-src 'self' 'unsafe-inline'", "script-src 'self' 'nonce-abc'"));
  });

  it("never adds 'strict-dynamic' (it would block a zone-injected beacon without a nonce)", () => {
    expect(withScriptNonce(STATIC_CSP, "abc")).not.toContain("strict-dynamic");
  });

  it("handles script-src as the first directive", () => {
    expect(withScriptNonce("script-src 'unsafe-inline'; img-src 'self'", "n")).toBe(
      "script-src 'nonce-n'; img-src 'self'",
    );
  });

  it("returns null when there is nothing to tighten", () => {
    expect(withScriptNonce("default-src 'self'; script-src 'self'", "n")).toBeNull();
    expect(withScriptNonce("style-src 'unsafe-inline'", "n")).toBeNull();
  });
});

describe("applyScriptNonce", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("swaps the CSP for a nonce one and stamps only inline scripts", () => {
    const fake = fakeRewriter();
    const out = applyScriptNonce(html({ etag: '"x"', "content-length": "31" }), {
      nonce: "N",
      rewriter: fake.rewriter,
    });

    expect(out.status).toBe(200);
    expect(out.statusText).toBe("OK");
    expect(out.headers.get(CSP_HEADER)).toContain("script-src 'self' 'nonce-N' https://static.cloudflareinsights.com;");
    expect(out.headers.get("etag")).toBeNull();
    expect(out.headers.get("content-length")).toBeNull();
    expect(out.headers.get("content-type")).toBe("text/html; charset=utf-8");

    expect(fake.calls).toHaveLength(1);
    expect(fake.calls[0].selector).toBe("script");
    const inline = script({});
    const ldJson = script({ type: "application/ld+json" });
    const external = script({ src: "/_next/static/chunks/a.js" });
    for (const el of [inline, ldJson, external]) fake.calls[0].handler(el);
    expect(inline.attrs.nonce).toBe("N");
    expect(ldJson.attrs.nonce).toBe("N");
    expect(external.attrs.nonce).toBeUndefined();
  });

  it("keeps exactly one CSP header", () => {
    const out = applyScriptNonce(html(), { nonce: "N", rewriter: fakeRewriter().rewriter });
    expect(out.headers.get(CSP_HEADER)?.match(/default-src/g)).toHaveLength(1);
  });

  it("generates a fresh nonce per call by default", async () => {
    const fake = fakeRewriter();
    const a = applyScriptNonce(html(), { rewriter: fake.rewriter });
    const b = applyScriptNonce(html(), { rewriter: fake.rewriter });
    expect(a.headers.get(CSP_HEADER)).not.toBe(b.headers.get(CSP_HEADER));
  });

  it.each([
    ["non-HTML", new Response("{}", { headers: { "content-type": "application/json", [CSP_HEADER]: STATIC_CSP } })],
    ["no content-type", new Response(new Uint8Array([120]), { headers: { [CSP_HEADER]: STATIC_CSP } })],
    ["no body", new Response(null, { status: 304, headers: { "content-type": "text/html" } })],
    ["no CSP", new Response("<p>", { headers: { "content-type": "text/html" } })],
    [
      "CSP without 'unsafe-inline'",
      new Response("<p>", { headers: { "content-type": "text/html", [CSP_HEADER]: "script-src 'self'" } }),
    ],
  ])("passes %s responses through untouched", (_label, response) => {
    const fake = fakeRewriter();
    expect(applyScriptNonce(response, { rewriter: fake.rewriter })).toBe(response);
    expect(fake.calls).toHaveLength(0);
  });

  it("needs no options for responses it leaves alone", () => {
    const json = new Response("{}", { headers: { "content-type": "application/json" } });
    expect(applyScriptNonce(json)).toBe(json);
  });

  it("uses the Workers HTMLRewriter by default", () => {
    const fake = fakeRewriter();
    vi.stubGlobal(
      "HTMLRewriter",
      class {
        constructor() {
          return fake.rewriter();
        }
      },
    );
    applyScriptNonce(html(), { nonce: "N" });
    expect(fake.transformed).toHaveLength(1);
  });

  it("fails loudly outside the Workers runtime instead of serving a nonce nobody stamped", () => {
    expect(() => applyScriptNonce(html(), { nonce: "N" })).toThrow(/HTMLRewriter/);
  });
});
