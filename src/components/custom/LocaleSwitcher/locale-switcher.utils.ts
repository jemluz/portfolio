import { LOCALES, LOCALE_COOKIE } from "@/i18n/config";

/**
 * The list of supported locale codes for the app (e.g. `"en"`, `"pt"`).
 * Used to populate the locale switcher options.
 */
export { LOCALES };

/**
 * Persists the selected locale in a browser cookie and refreshes the page
 * so the new locale is picked up by the server.
 *
 * @param locale - The locale code to switch to (e.g. "en" or "pt").
 */
export function setLocaleCookie(locale: string): void {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000`;
  window.location.reload();
}
