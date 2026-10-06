// Worker entry (wrangler.jsonc "main"). Wraps the OpenNext worker so every HTML response gets
// a per-request script nonce instead of script-src 'unsafe-inline' (src/lib/csp-nonce.ts).
// Static assets (/_next/static/*, public/) are served by Workers Assets before this runs.
// https://opennext.js.org/cloudflare/howtos/custom-worker

// The file exists only after `opennextjs-cloudflare build`; wrangler resolves it when bundling.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore -- missing in CI typecheck (no build yet), present locally after a build
import openNextWorker from "./.open-next/worker.js";
import { applyScriptNonce } from "./src/lib/csp-nonce";

type FetchHandler = (request: Request, env: unknown, ctx: unknown) => Promise<Response>;

const worker = {
  async fetch(request: Request, env: unknown, ctx: unknown): Promise<Response> {
    const response = await (openNextWorker as { fetch: FetchHandler }).fetch(request, env, ctx);
    return applyScriptNonce(response);
  },
};

export default worker;
