/**
 * Timeline constants
 */
export const YEAR_BUTTON_HEIGHT_PX = 36;
export const ERROR_BLINK_DURATION_MS = 300;

// Backward-compatible aliases for existing imports.
export const YEAR_BUTTON_HEIGHT = YEAR_BUTTON_HEIGHT_PX;
export const ERROR_BLINK_DURATION = ERROR_BLINK_DURATION_MS;

/**
 * Calculate the Y translation for the black border based on the selected year position
 * @param selectedYear - Currently selected year
 * @param years - Array of all years
 * @returns Translation in pixels
 */
export function calculateBlackBorderTranslation(
  selectedYear: number | null,
  years: number[],
): number {
  if (selectedYear == null) return 0;

  const index = years.indexOf(selectedYear);
  return Math.max(0, index) * YEAR_BUTTON_HEIGHT_PX;
}

/**
 * Check if an element is visible within a viewport
 * @param elementRect - Bounding rect of the element
 * @param viewportRect - Bounding rect of the viewport
 * @returns True if element is at least partially visible
 */
export function isElementVisible(
  elementRect: DOMRect,
  viewportRect: DOMRect,
): boolean {
  return (
    elementRect.bottom > viewportRect.top &&
    elementRect.top < viewportRect.bottom
  );
}
