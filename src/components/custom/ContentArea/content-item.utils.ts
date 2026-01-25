export const HEADER_HEIGHT = 80; // Height of the sticky header in pixels
export const DEFAULT_CONTAINER_HEIGHT = 290; // Default container height in pixels

/**
 * Calculate the padding needed for the last ContentItem to be displayed correctly within the container (right below the sticky header).
 *
 * @param contentItemHeight - The current height of the content item in pixels
 * @param containerHeight - The total height of the container in pixels
 * @returns The padding needed in pixels, or 0 if no padding is required
 */
export function calculatePaddingNeeded(
  contentItemHeight: number,
  containerHeight: number,
): number {
  const availableHeight = containerHeight - HEADER_HEIGHT;

  return contentItemHeight < availableHeight
    ? availableHeight - contentItemHeight
    : 0;
}
