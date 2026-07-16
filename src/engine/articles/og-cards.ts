import fs from "node:fs";
import path from "node:path";

// scripts/fetch-og-cards.mjs が生成する content/og-cards.json を読み込む。
// 記事末尾の「公式リンクカード」用メタデータで、画像は各社サーバーから
// 直接表示する（自サーバーに複製しない）。https 以外の URL は捨てる。

export interface OgCard {
  url: string;
  title?: string;
  description?: string;
  image?: string;
  siteName?: string;
}

function sanitizeCard(value: unknown): OgCard | undefined {
  if (typeof value !== "object" || value === null) {
    return undefined;
  }
  const record = value as Record<string, unknown>;
  if (typeof record.url !== "string" || !record.url.startsWith("https://")) {
    return undefined;
  }
  const card: OgCard = { url: record.url };
  for (const key of ["title", "description", "siteName"] as const) {
    const text = record[key];
    if (typeof text === "string" && text.trim() !== "") {
      card[key] = text;
    }
  }
  if (typeof record.image === "string" && record.image.startsWith("https://")) {
    card.image = record.image;
  }
  return card;
}

/** og-cards.json を読み込み、不正なエントリを除外して返す。 */
export function loadOgCards(
  filePath: string = path.join(process.cwd(), "content", "og-cards.json"),
): Record<string, OgCard> {
  if (!fs.existsSync(filePath)) {
    return {};
  }
  const raw = JSON.parse(fs.readFileSync(filePath, "utf8")) as Record<string, unknown>;
  const cards: Record<string, OgCard> = {};
  for (const [slug, value] of Object.entries(raw)) {
    const card = sanitizeCard(value);
    if (card) {
      cards[slug] = card;
    }
  }
  return cards;
}
