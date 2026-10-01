import {
  asRecord,
  fail,
  ISO_DATE,
  KEBAB_CASE,
  parseSources,
  requireArray,
  requireHttpsUrl,
  requireIsoDate,
  requireString,
  type SourceRef,
} from "@/engine/content/validators";
import { isCategoryId, type CategoryId } from "./taxonomy";

// Hand-written validator for article frontmatter. Shared primitives live in engine/content/validators.ts
// (shared with other content types such as comparisons). scores/techStack/revisions are article-specific.

export { ISO_DATE, KEBAB_CASE, parseSources, type SourceRef };

export const CONFIDENCE_LEVELS = ["confirmed", "likely", "speculative"] as const;
export type Confidence = (typeof CONFIDENCE_LEVELS)[number];

export const SCORE_AXES = ["product", "ux", "tech", "business"] as const;
export type ScoreAxis = (typeof SCORE_AXES)[number];
export type Scores = Record<ScoreAxis, number>;

export interface TechStackEntry {
  layer: string;
  name: string;
  confidence: Confidence;
  evidence: string;
  evidenceUrl?: string;
}

/** One checkpoint of periodic re-anatomy. Keeps past scores and findings in note. */
export interface RevisionEntry {
  date: string;
  scores: Scores;
  note: string;
}

/**
 * Affiliate link. ja/en carry the same URLs (verified by parity.ts). Not included in the public JSON.
 * impressionUrl is the 1x1 impression-tracking image that an affiliate network (ASP) ships next to
 * the link in its ad code. Set it whenever the network's code has one, so the code is used as provided.
 */
export interface AffiliateLink {
  url: string;
  program: string;
  impressionUrl?: string;
}

export interface ArticleFrontmatter {
  service: string;
  title: string;
  description: string;
  lead: string;
  category: CategoryId;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  lastVerified: string;
  serviceUrl: string;
  vendor: string;
  origin: string;
  heroTheme: string;
  scores: Scores;
  techStack: TechStackEntry[];
  sources: SourceRef[];
  /** Periodic re-anatomy history. Chronological (old→new). The current frontmatter.scores holds the latest values. */
  revisions?: RevisionEntry[];
  /** Affiliate link (optional). Only articles with one get the "PR" box at the end. */
  affiliate?: AffiliateLink;
}

function parseCategory(obj: Record<string, unknown>, context: string): CategoryId {
  const value = requireString(obj, "category", context);
  if (!isCategoryId(value)) {
    fail(context, `category "${value}" is not defined (see taxonomy.ts)`);
  }
  return value;
}

function parseTags(obj: Record<string, unknown>, context: string): string[] {
  const values = requireArray(obj, "tags", context);
  return values.map((tag, i) => {
    if (typeof tag !== "string" || !KEBAB_CASE.test(tag)) {
      fail(context, `tags[${i}] must be a kebab-case string`);
    }
    return tag;
  });
}

function parseScoresValue(value: unknown, context: string, label: string): Scores {
  const record = asRecord(value, context, label);
  const scores = {} as Scores;
  for (const axis of SCORE_AXES) {
    const v = record[axis];
    if (typeof v !== "number" || v < 0 || v > 5 || (v * 2) % 1 !== 0) {
      fail(context, `scores.${axis} must be a number from 0 to 5 in steps of 0.5`);
    }
    scores[axis] = v;
  }
  return scores;
}

function parseScores(obj: Record<string, unknown>, context: string): Scores {
  return parseScoresValue(obj.scores, context, "scores");
}

function parseRevisions(obj: Record<string, unknown>, context: string): RevisionEntry[] | undefined {
  if (obj.revisions === undefined) {
    return undefined;
  }
  const values = requireArray(obj, "revisions", context);
  return values.map((raw, i) => {
    const entryContext = `${context}: revisions[${i}]`;
    const record = asRecord(raw, entryContext, "element");
    return {
      date: requireIsoDate(record, "date", entryContext),
      scores: parseScoresValue(record.scores, entryContext, "scores"),
      note: requireString(record, "note", entryContext),
    };
  });
}

function parseTechStack(obj: Record<string, unknown>, context: string): TechStackEntry[] {
  const values = requireArray(obj, "techStack", context);
  return values.map((raw, i) => {
    const entryContext = `${context}: techStack[${i}]`;
    const record = asRecord(raw, entryContext, "element");
    const confidence = requireString(record, "confidence", entryContext);
    if (!(CONFIDENCE_LEVELS as readonly string[]).includes(confidence)) {
      fail(entryContext, `confidence must be one of ${CONFIDENCE_LEVELS.join(" | ")}`);
    }
    const entry: TechStackEntry = {
      layer: requireString(record, "layer", entryContext),
      name: requireString(record, "name", entryContext),
      confidence: confidence as Confidence,
      evidence: requireString(record, "evidence", entryContext),
    };
    if (record.evidenceUrl !== undefined) {
      entry.evidenceUrl = requireHttpsUrl(record, "evidenceUrl", entryContext);
    }
    if (entry.confidence === "confirmed" && entry.evidenceUrl === undefined) {
      fail(entryContext, `evidenceUrl (primary source) is required when confidence is confirmed`);
    }
    return entry;
  });
}

function parseAffiliate(obj: Record<string, unknown>, context: string): AffiliateLink | undefined {
  if (obj.affiliate === undefined) {
    return undefined;
  }
  const record = asRecord(obj.affiliate, context, "affiliate");
  const entryContext = `${context}: affiliate`;
  const affiliate: AffiliateLink = {
    url: requireHttpsUrl(record, "url", entryContext),
    program: requireString(record, "program", entryContext),
  };
  if (record.impressionUrl !== undefined) {
    affiliate.impressionUrl = requireHttpsUrl(record, "impressionUrl", entryContext);
  }
  return affiliate;
}

export function parseFrontmatter(data: unknown, context: string): ArticleFrontmatter {
  const obj = asRecord(data, context, "frontmatter");
  return {
    service: requireString(obj, "service", context),
    title: requireString(obj, "title", context),
    description: requireString(obj, "description", context),
    lead: requireString(obj, "lead", context),
    category: parseCategory(obj, context),
    tags: parseTags(obj, context),
    publishedAt: requireIsoDate(obj, "publishedAt", context),
    updatedAt: requireIsoDate(obj, "updatedAt", context),
    lastVerified: requireIsoDate(obj, "lastVerified", context),
    serviceUrl: requireHttpsUrl(obj, "serviceUrl", context),
    vendor: requireString(obj, "vendor", context),
    origin: requireString(obj, "origin", context),
    heroTheme: requireString(obj, "heroTheme", context),
    scores: parseScores(obj, context),
    techStack: parseTechStack(obj, context),
    sources: parseSources(obj, context),
    revisions: parseRevisions(obj, context),
    affiliate: parseAffiliate(obj, context),
  };
}
