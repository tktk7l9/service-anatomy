import type { Locale } from "@/i18n/config";

// 本文の文字数/単語数からおおよその読了時間を見積もる。実測ではなく目安で
// あることを踏まえ、表示は「約N分」に丸める（1分未満は1分とする）。

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
