// Shared primitives for the hand-written frontmatter validators (used by every content type: articles, comparisons, etc.).
// No zod (the policy is to test every branch at 100% coverage, so we add no dependency and
// failure messages include the file name). Dates must be written as quoted strings by convention —
// if gray-matter converts a bare YAML date into a Date, the string check rejects it.

export const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
export const KEBAB_CASE = /^[a-z0-9]+(-[a-z0-9]+)*$/;

export interface SourceRef {
  label: string;
  url: string;
  accessedAt: string;
}

export function fail(context: string, message: string): never {
  throw new Error(`${context}: ${message}`);
}

export function asRecord(value: unknown, context: string, label: string): Record<string, unknown> {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    fail(context, `${label} must be an object`);
  }
  return value as Record<string, unknown>;
}

export function requireString(obj: Record<string, unknown>, key: string, context: string): string {
  const value = obj[key];
  if (typeof value !== "string" || value.trim() === "") {
    fail(context, `${key} must be a non-empty string`);
  }
  return value;
}

export function requireIsoDate(obj: Record<string, unknown>, key: string, context: string): string {
  const value = requireString(obj, key, context);
  if (!ISO_DATE.test(value)) {
    fail(context, `${key} must be a quoted string in "YYYY-MM-DD" format`);
  }
  return value;
}

export function requireHttpsUrl(obj: Record<string, unknown>, key: string, context: string): string {
  const value = requireString(obj, key, context);
  if (!value.startsWith("https://")) {
    fail(context, `${key} must be a URL starting with https://`);
  }
  return value;
}

export function requireArray(obj: Record<string, unknown>, key: string, context: string): unknown[] {
  const value = obj[key];
  if (!Array.isArray(value) || value.length === 0) {
    fail(context, `${key} must be an array with at least one item`);
  }
  return value;
}

export function parseSources(obj: Record<string, unknown>, context: string): SourceRef[] {
  const values = requireArray(obj, "sources", context);
  return values.map((raw, i) => {
    const sourceContext = `${context}: sources[${i}]`;
    const record = asRecord(raw, sourceContext, "element");
    return {
      label: requireString(record, "label", sourceContext),
      url: requireHttpsUrl(record, "url", sourceContext),
      accessedAt: requireIsoDate(record, "accessedAt", sourceContext),
    };
  });
}
