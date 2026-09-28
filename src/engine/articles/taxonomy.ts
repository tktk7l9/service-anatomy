// Canonical list of article categories. The i18n dictionary (categories) is forced into the same
// shape as Record<CategoryId, string> for display names.
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
