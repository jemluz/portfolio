import { RefObject, useCallback } from "react";

interface ContentItem {
  id: string;
}

/**
 * Hook that handles auto-activation of content items based on scroll position.
 * Activates content when it reaches specific positions in the viewport.
 *
 * @param contentListRef - Reference to the scrollable list container
 * @param contentItemRefs - Record of refs to all ContentItem elements
 * @param isScrollingRef - Reference tracking if programmatic scroll is in progress
 * @param yearContents - Array of content items for the current year
 * @param selectedContent - ID of currently selected content
 * @param setSelectedContent - Function to update the selected content
 * @returns Scroll event handler
 */
export function useScrollActivation(
  contentListRef: RefObject<HTMLUListElement | null>,
  contentItemRefs: RefObject<Record<string, HTMLLIElement | null>>,
  isScrollingRef: RefObject<boolean>,
  yearContents: ContentItem[],
  selectedContent: string | null,
  setSelectedContent: (id: string) => void,
) {
  const handleScroll = useCallback(() => {
    // Don't interfere during programmatic scrolling
    if (isScrollingRef.current) return;

    const listElement = contentListRef.current;
    if (!listElement || !contentItemRefs.current) return;

    const listTop = listElement.getBoundingClientRect().top;
    const currentIndex = yearContents.findIndex(
      (item) => item.id === selectedContent,
    );

    // Check each content item
    yearContents.forEach((content, index) => {
      const itemElement = contentItemRefs.current?.[content.id];
      if (!itemElement) return;

      const itemRect = itemElement.getBoundingClientRect();
      const itemTop = itemRect.top;
      const itemBottom = itemRect.bottom;

      // Threshold for position matching (5px tolerance)
      const threshold = 5;

      // Rule 1: If this is a "next" item and its top matches the container top
      if (index > currentIndex && Math.abs(itemTop - listTop) <= threshold) {
        setSelectedContent(content.id);
      }

      // Rule 2: If this is a "previous" item and its bottom matches the container top
      if (index < currentIndex && Math.abs(itemBottom - listTop) <= threshold) {
        setSelectedContent(content.id);
      }
    });
  }, [
    contentListRef,
    contentItemRefs,
    isScrollingRef,
    yearContents,
    selectedContent,
    setSelectedContent,
  ]);

  return handleScroll;
}
