import type { Locale } from "@/i18n/config";

// Locale-specific display of "YYYY-MM-DD". Built directly from the string without going through
// Date, so time zones cannot affect it.

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
