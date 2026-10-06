"use client";

import { useEffect } from "react";
import { BEACON_SRC, BEACON_TOKEN } from "@/lib/analytics";

/**
 * Appends the Cloudflare Web Analytics beacon after hydration instead of a <script src> in the
 * HTML, so it never competes with the page's own CSS, font and JS during the first paint
 * (Lighthouse mobile). It also keeps the markup free of an external script without
 * `integrity`: Cloudflare swaps the content behind the unversioned beacon.min.js URL, so SRI
 * cannot be pinned (Observatory subresource-integrity).
 */
export function Analytics() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (document.querySelector(`script[src="${BEACON_SRC}"]`)) return;
    const beacon = document.createElement("script");
    beacon.type = "module";
    beacon.src = BEACON_SRC;
    beacon.dataset.cfBeacon = JSON.stringify({ token: BEACON_TOKEN });
    document.body.appendChild(beacon);
  }, []);
  return null;
}
