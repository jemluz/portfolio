import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { TimelineLocale } from "@/timeline-data";
import { ColorKey, colorMap, MONTHS_PTBR } from "./constants";

/**
 * Helper to combine class names safely for Tailwind projects.
 *
 * Behavior:
 * - `clsx` is used first to conditionally join values (handles arrays, objects,
 *   falsy values, etc.) into a single class string.
 * - `twMerge` then resolves Tailwind-specific class conflicts (for example
 *   `px-2 px-4` -> `px-4`, or conflicting color/utility groups) returning a
 *   compact, final className string ready to apply to `className` props.
 *
 * Why this is useful:
 * - Keeps JSX tidy by letting you pass mixed inputs (strings, objects,
 *   arrays) to `cn(...)` while avoiding duplicated or conflicting Tailwind
 *   utilities.
 * - Prevents bugs where multiple Tailwind classes accidentally override each
 *   other when components compose classes programmatically.
 *
 * Example:
 *   cn("px-2", { "px-4": true }, "text-sm") -> "px-4 text-sm"
 *
 * Types: accepts any values supported by `clsx` (see `ClassValue`).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Convert a number (1-12) to the Portuguese (pt-BR) month name.
 *
 * @param monthNumber - A number between 1 and 12 representing a month
 * @returns The month name (e.g. 1 -> "Janeiro") or null if the input is out of range
 */
export function numberToMonthPTBR(monthNumber: number): string {
  if (!Number.isInteger(monthNumber) || monthNumber < 1 || monthNumber > 12)
    return "Janeiro";

  return MONTHS_PTBR[monthNumber - 1];
}

/**
 * Convert a number (1-12) to a localized month name.
 *
 * @param monthNumber - A number between 1 and 12 representing a month
 * @param locale - Locale used to format month name
 * @returns The localized month name (e.g. 1 -> "January" for en-US)
 * @throws Error if monthNumber is not an integer between 1 and 12
 */
export function getMonthName(
  monthNumber: number,
  locale: TimelineLocale,
): string {
  if (!Number.isInteger(monthNumber) || monthNumber < 1 || monthNumber > 12) {
    throw new Error(
      `[getMonthName] Invalid month number: ${monthNumber}. Expected an integer between 1 and 12.`,
    );
  }

  const date = new Date(2000, monthNumber - 1, 1);
  const monthName = new Intl.DateTimeFormat(locale, { month: "long" }).format(
    date,
  );

  return monthName.charAt(0).toUpperCase() + monthName.slice(1);
}

let lastColor: ColorKey | null = null;

/**
 * Return a pseudo-random ColorKey selected from colorMap.
 *
 * Behavior:
 * - Chooses uniformly at random from the keys of colorMap
 * - Avoids returning the same color twice in a row by tracking lastColor
 * - If the map contains only a single key, returns that key immediately
 * - Updates lastColor with the newly chosen color for subsequent calls
 *
 * @returns A random ColorKey from the colorMap
 *
 * @remarks
 * Randomness is provided by Math.random() and is not cryptographically secure.
 * Suitable for UI color variety but not for security-sensitive use.
 */
export function getRandomColor(): ColorKey {
  const keys = Object.keys(colorMap) as ColorKey[];
  let color: ColorKey;

  do {
    color = keys[Math.floor(Math.random() * keys.length)];
  } while (color === lastColor);

  lastColor = color;
  return color;
}
