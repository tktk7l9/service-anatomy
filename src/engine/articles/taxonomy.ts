// 記事カテゴリの正規リスト。表示名は i18n 辞書（categories）が
// Record<CategoryId, string> で同形を強制される。
export const CATEGORY_IDS = [
  "game",
  "ai-tool",
  "consumer-app",
  "productivity",
  "saas",
  "dev-tool",
  "media",
] as const;

export type CategoryId = (typeof CATEGORY_IDS)[number];

export function isCategoryId(value: string): value is CategoryId {
  return (CATEGORY_IDS as readonly string[]).includes(value);
}
