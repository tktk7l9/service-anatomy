import { isCategoryId, type CategoryId } from "./taxonomy";

// frontmatter の手書きバリデータ。zod は使わない（全分岐を 100% カバレッジで
// テストする方針のため、依存を増やさず失敗メッセージも記事ファイル名付きで出す）。
// 日付は必ず引用符付き文字列で書く規約 — gray-matter が YAML の裸日付を Date に
// 変換した場合は string チェックで弾かれる。

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

export interface SourceRef {
  label: string;
  url: string;
  accessedAt: string;
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
}

export const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
export const KEBAB_CASE = /^[a-z0-9]+(-[a-z0-9]+)*$/;

function fail(context: string, message: string): never {
  throw new Error(`${context}: ${message}`);
}

function asRecord(value: unknown, context: string, label: string): Record<string, unknown> {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    fail(context, `${label} はオブジェクトである必要があります`);
  }
  return value as Record<string, unknown>;
}

function requireString(obj: Record<string, unknown>, key: string, context: string): string {
  const value = obj[key];
  if (typeof value !== "string" || value.trim() === "") {
    fail(context, `${key} は空でない文字列である必要があります`);
  }
  return value;
}

function requireIsoDate(obj: Record<string, unknown>, key: string, context: string): string {
  const value = requireString(obj, key, context);
  if (!ISO_DATE.test(value)) {
    fail(context, `${key} は "YYYY-MM-DD" 形式の引用符付き文字列である必要があります`);
  }
  return value;
}

function requireHttpsUrl(obj: Record<string, unknown>, key: string, context: string): string {
  const value = requireString(obj, key, context);
  if (!value.startsWith("https://")) {
    fail(context, `${key} は https:// で始まる URL である必要があります`);
  }
  return value;
}

function requireArray(obj: Record<string, unknown>, key: string, context: string): unknown[] {
  const value = obj[key];
  if (!Array.isArray(value) || value.length === 0) {
    fail(context, `${key} は1件以上の配列である必要があります`);
  }
  return value;
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

function parseScores(obj: Record<string, unknown>, context: string): Scores {
  const record = asRecord(obj.scores, context, "scores");
  const scores = {} as Scores;
  for (const axis of SCORE_AXES) {
    const value = record[axis];
    if (typeof value !== "number" || value < 0 || value > 5 || (value * 2) % 1 !== 0) {
      fail(context, `scores.${axis} は 0〜5 の 0.5 刻みの数値である必要があります`);
    }
    scores[axis] = value;
  }
  return scores;
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

function parseSources(obj: Record<string, unknown>, context: string): SourceRef[] {
  const values = requireArray(obj, "sources", context);
  return values.map((raw, i) => {
    const sourceContext = `${context}: sources[${i}]`;
    const record = asRecord(raw, sourceContext, "要素");
    return {
      label: requireString(record, "label", sourceContext),
      url: requireHttpsUrl(record, "url", sourceContext),
      accessedAt: requireIsoDate(record, "accessedAt", sourceContext),
    };
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
  };
}
