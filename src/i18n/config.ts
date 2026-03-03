export const LOCALES = ["en", "pt"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "pt";
export const LOCALE_COOKIE = "locale";

/**
 * Parses the `Accept-Language` HTTP header and returns the best matching
 * supported locale. Falls back to `DEFAULT_LOCALE` when no match is found.
 *
 * @param acceptLanguage - The raw value of the `Accept-Language` header.
 * @returns The resolved locale code (e.g. `"en"` or `"pt"`).
 */
export function parseAcceptLanguage(acceptLanguage: string): Locale {
  const preferred = acceptLanguage
    .split(",")
    .map((part) => part.split(";")[0].trim().toLowerCase())
    .find((lang) => LOCALES.some((l) => lang.startsWith(l)));

  if (!preferred) return DEFAULT_LOCALE;
  return (LOCALES.find((l) => preferred.startsWith(l)) ??
    DEFAULT_LOCALE) as Locale;
}
