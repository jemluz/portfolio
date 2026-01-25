import { RefObject, useEffect, useState } from "react";

/**
 * Hook that calculates and manages scroll padding based on ContentItem heights.
 * Dynamically adjusts padding to enable full scrolling through all items.
 *
 * @param contentItemRefs - Record of refs to all ContentItem elements
 * @param itemCount - Number of content items
 * @returns The calculated scroll height for bottom padding, or null if not needed
 */
export function useScrollPadding(
  contentItemRefs: RefObject<Record<string, HTMLLIElement | null>>,
  itemCount: number,
): number | null {
  const [scrollHeight, setScrollHeight] = useState<number | null>(null);

  useEffect(() => {
    const calculateScrollPadding = () => {
      if (!contentItemRefs.current) return;

      // Get all item heights
      const itemHeights = Object.values(contentItemRefs.current)
        .filter((ref): ref is HTMLLIElement => ref !== null)
        .map((ref) => ref.offsetHeight);

      // If only one item, no scroll padding needed
      if (itemHeights.length <= 1) {
        setScrollHeight(null);
        return;
      }

      // Calculate total height of all items
      const totalHeight = itemHeights.reduce((sum, height) => sum + height, 0);

      // Set padding to total height so items can scroll up fully
      // This allows each item to reach the top of the container
      setScrollHeight(totalHeight);
    };

    // Calculate after all items are rendered
    calculateScrollPadding();

    // Observe resize changes to recalculate
    const resizeObserver = new ResizeObserver(calculateScrollPadding);
    if (contentItemRefs.current) {
      Object.values(contentItemRefs.current).forEach((ref) => {
        if (ref) resizeObserver.observe(ref);
      });
    }

    return () => resizeObserver.disconnect();
  }, [contentItemRefs, itemCount]);

  return scrollHeight;
}
