import type { Locale } from "@/i18n/config";

// "YYYY-MM-DD" のロケール別表示。タイムゾーンの影響を受けないよう
// Date を経由せず文字列から直接組み立てる。

const MONTHS_EN = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export function formatDate(isoDate: string, locale: Locale): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  if (locale === "ja") {
    return `${year}年${month}月${day}日`;
  }
  return `${MONTHS_EN[month - 1]} ${day}, ${year}`;
}
