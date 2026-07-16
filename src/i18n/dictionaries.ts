import type { Locale } from "./config";

const dictionaries = {
  ja: () => import("./dictionaries/ja").then((m) => m.default),
  en: () => import("./dictionaries/en").then((m) => m.default),
} as const;

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}

export type { Dictionary } from "./dictionaries/ja";
