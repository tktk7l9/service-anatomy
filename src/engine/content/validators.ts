// frontmatter 手書きバリデータの共通プリミティブ（記事・比較解剖など全コンテンツ種別で共用）。
// zod は使わない（全分岐を100%カバレッジでテストする方針のため、依存を増やさず
// 失敗メッセージもファイル名付きで出す）。日付は必ず引用符付き文字列で書く規約 —
// gray-matter が YAML の裸日付を Date に変換した場合は string チェックで弾かれる。

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
    fail(context, `${label} はオブジェクトである必要があります`);
  }
  return value as Record<string, unknown>;
}

export function requireString(obj: Record<string, unknown>, key: string, context: string): string {
  const value = obj[key];
  if (typeof value !== "string" || value.trim() === "") {
    fail(context, `${key} は空でない文字列である必要があります`);
  }
  return value;
}

export function requireIsoDate(obj: Record<string, unknown>, key: string, context: string): string {
  const value = requireString(obj, key, context);
  if (!ISO_DATE.test(value)) {
    fail(context, `${key} は "YYYY-MM-DD" 形式の引用符付き文字列である必要があります`);
  }
  return value;
}

export function requireHttpsUrl(obj: Record<string, unknown>, key: string, context: string): string {
  const value = requireString(obj, key, context);
  if (!value.startsWith("https://")) {
    fail(context, `${key} は https:// で始まる URL である必要があります`);
  }
  return value;
}

export function requireArray(obj: Record<string, unknown>, key: string, context: string): unknown[] {
  const value = obj[key];
  if (!Array.isArray(value) || value.length === 0) {
    fail(context, `${key} は1件以上の配列である必要があります`);
  }
  return value;
}

export function parseSources(obj: Record<string, unknown>, context: string): SourceRef[] {
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
