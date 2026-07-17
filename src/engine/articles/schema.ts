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

// 記事 frontmatter の手書きバリデータ。共通プリミティブは engine/content/validators.ts
// （比較解剖など他コンテンツ種別と共用）。scores/techStack/revisions は記事固有。

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

/** 定点観測（再解剖）の1チェックポイント。過去のスコアと発見をnoteに残す。 */
export interface RevisionEntry {
  date: string;
  scores: Scores;
  note: string;
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
  /** 定点観測（再解剖）の履歴。時系列順（古い→新しい）。scores は現行の frontmatter.scores が最新値。 */
  revisions?: RevisionEntry[];
}

function parseCategory(obj: Record<string, unknown>, context: string): CategoryId {
  const value = requireString(obj, "category", context);
  if (!isCategoryId(value)) {
    fail(context, `category "${value}" は定義されていません（taxonomy.ts を参照）`);
  }
  return value;
}

function parseTags(obj: Record<string, unknown>, context: string): string[] {
  const values = requireArray(obj, "tags", context);
  return values.map((tag, i) => {
    if (typeof tag !== "string" || !KEBAB_CASE.test(tag)) {
      fail(context, `tags[${i}] は kebab-case の文字列である必要があります`);
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
      fail(context, `scores.${axis} は 0〜5 の 0.5 刻みの数値である必要があります`);
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
    const record = asRecord(raw, entryContext, "要素");
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
    const record = asRecord(raw, entryContext, "要素");
    const confidence = requireString(record, "confidence", entryContext);
    if (!(CONFIDENCE_LEVELS as readonly string[]).includes(confidence)) {
      fail(entryContext, `confidence は ${CONFIDENCE_LEVELS.join(" | ")} のいずれかである必要があります`);
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
      fail(entryContext, `confidence が confirmed の場合は evidenceUrl（一次情報）が必須です`);
    }
    return entry;
  });
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
  };
}
