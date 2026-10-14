import { dictionaries } from "@/content/i18n";

export const LOCALES = ["pt", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "pt";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export type Dictionary = (typeof dictionaries)[Locale];

export const localeNames: Record<Locale, string> = {
  pt: "Português",
  en: "English",
};

export const localeFlags: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
};
