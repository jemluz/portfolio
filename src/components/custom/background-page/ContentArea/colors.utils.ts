import { ColorKey, colorMap } from "./content-item.types";

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
