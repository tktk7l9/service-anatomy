import type { Locale } from "@/i18n/config";

// Estimates approximate reading time from the character/word count of the body. Since it is a rough
// guide rather than a measurement, the display is rounded to "about N min" (under 1 minute counts as 1).

const CHARS_PER_MINUTE_JA = 500;
const WORDS_PER_MINUTE_EN = 220;

export function estimateReadingMinutes(body: string, locale: Locale): number {
  if (locale === "ja") {
    return body.length / CHARS_PER_MINUTE_JA;
  }
  return body.split(/\s+/).filter(Boolean).length / WORDS_PER_MINUTE_EN;
}

export function formatReadingTime(minutes: number, locale: Locale): string {
  const rounded = Math.max(1, Math.round(minutes));
  return locale === "ja" ? `約${rounded}分` : `~${rounded} min`;
}
