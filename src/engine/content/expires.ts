import { asRecord, requireArray, requireIsoDate, requireString } from "./validators";

// Time-limited statements in an article or comparison body: a campaign with an end date, a monthly
// rate, a feature announced for a given month. The frontmatter lists them under `expires` so they
// surface for review once they may no longer hold: `npm run freshness` prints them, and the content
// tests list them as todo items. Shared by every content type, like the primitives in validators.ts.

export interface ExpiringClaim {
  /** The last day the statement is known to hold (e.g. a campaign's end date), "YYYY-MM-DD". */
  date: string;
  /** What to re-check, written in the file's language. */
  claim: string;
}

export function parseExpires(obj: Record<string, unknown>, context: string): ExpiringClaim[] | undefined {
  if (obj.expires === undefined) {
    return undefined;
  }
  const values = requireArray(obj, "expires", context);
  return values.map((raw, i) => {
    const entryContext = `${context}: expires[${i}]`;
    const record = asRecord(raw, entryContext, "element");
    return {
      date: requireIsoDate(record, "date", entryContext),
      claim: requireString(record, "claim", entryContext),
    };
  });
}

/** Claims whose last valid day is before `today` ("YYYY-MM-DD"), oldest first. */
export function expiredClaims(claims: readonly ExpiringClaim[] | undefined, today: string): ExpiringClaim[] {
  return (claims ?? []).filter((claim) => claim.date < today).sort((a, b) => a.date.localeCompare(b.date));
}

/** ja/en must list the same dates in the same order (the claim text is translated, the dates are not). */
export function expiresParityIssues(
  ja: readonly ExpiringClaim[] | undefined,
  en: readonly ExpiringClaim[] | undefined,
): string[] {
  const jaClaims = ja ?? [];
  const enClaims = en ?? [];
  if (jaClaims.length !== enClaims.length) {
    return [`expires count differs between ja/en (ja=${jaClaims.length} / en=${enClaims.length})`];
  }
  return jaClaims.flatMap((claim, i) =>
    claim.date === enClaims[i].date
      ? []
      : [`expires[${i}].date differs between ja/en (ja=${claim.date} / en=${enClaims[i].date})`],
  );
}
