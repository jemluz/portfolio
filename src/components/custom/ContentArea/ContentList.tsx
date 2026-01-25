import { useBackground } from "@/contexts/BackgroundContext";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  createWheelHandler,
  resetScroll,
  scrollToItem,
} from "./content-list.utils";
import ContentItem from "./ContentItem";
import { CONTENT_VIEW_HEIGHT } from "./content-area.constants";

const SCROLL_CONFIG = {
  THRESHOLD: 1,
  TIME_RESET: 300,
} as const;

/**
 * ## ContentList
 * Renders a list of content items for the selected year with visibility states.
 *
 * Features:
 * - Displays all content items with visibility states
 * - Custom wheel handler for carousel-like scroll navigation
 * - Auto-scrolls to selected content
 */

export function ContentList() {
  const {
    selectedContent,
    yearContents,
    itemColors,
    goToNextContent,
    goToPreviousContent,
    registerScrollReset,
  } = useBackground();

  // Ref to the content list element
  const contentListRef = useRef<HTMLUListElement>(null);

  // Refs for scroll state management
  const isScrolling = useRef({ current: false }); // Flag to indicate if a scroll is in progress
  const lastScrollTime = useRef({ current: 0 }); // Timestamp of the last scroll
  const accumulatedDelta = useRef({ current: 0 }); // Accumulates deltaY to detect direction

  // Refs for tracking individual ContentItem heights
  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});
  const [scrollHeight, setScrollHeight] = useState<number | null>(null);

  // Reset callback every time the year changes
  useEffect(() => {
    registerScrollReset(() => {
      resetScroll(contentListRef);
      isScrolling.current.current = false;
      lastScrollTime.current.current = 0;
      accumulatedDelta.current.current = 0;
    });
  }, [registerScrollReset]);

  // Calculate total scroll height based on ContentItem heights
  useEffect(() => {
    const calculateScrollHeight = () => {
      // Get all item heights
      const itemHeights = Object.values(itemRefs.current)
        .filter((ref): ref is HTMLLIElement => ref !== null)
        .map((ref) => ref.offsetHeight);

      // If only one item, no scroll needed (return null to disable)
      if (itemHeights.length <= 1) {
        setScrollHeight(null);
        return;
      }

      // Calculate total height of all items
      const totalHeight = itemHeights.reduce((sum, height) => sum + height, 0);

      // Set scroll height to double the total height
      setScrollHeight(totalHeight * 2);
    };

    // Calculate after all items are rendered
    calculateScrollHeight();

    // Observe resize changes to recalculate
    const resizeObserver = new ResizeObserver(calculateScrollHeight);
    Object.values(itemRefs.current).forEach((ref) => {
      if (ref) resizeObserver.observe(ref);
    });

    return () => resizeObserver.disconnect();
  }, [yearContents]);

  // Effect to scroll when selectedContent changes (e.g., click on the bullet)
  useEffect(() => {
    if (!selectedContent) return;
    scrollToItem(contentListRef, selectedContent, isScrolling);
  }, [selectedContent]);

  // Wheel handler to simulate carousel behavior
  const handleWheel = useCallback(
    (event: React.WheelEvent<HTMLUListElement>) => {
      return createWheelHandler(
        isScrolling,
        lastScrollTime,
        accumulatedDelta,
        goToNextContent,
        goToPreviousContent,
        SCROLL_CONFIG.THRESHOLD, // Minimum accumulated deltaY threshold to navigate
        SCROLL_CONFIG.TIME_RESET, // Maximum time between scrolls to accumulate deltaY
      )(event);
    },
    [goToNextContent, goToPreviousContent],
  );

  return (
    <ul
      ref={contentListRef}
      onWheel={handleWheel}
      className="content-list overflow-y-auto scroll-smooth hide-scrollbar"
      style={{
        scrollBehavior: "smooth",
        height: scrollHeight ? `${scrollHeight}px` : "auto",
        overflowY: scrollHeight ? "auto" : "visible",
      }}
    >
      {yearContents.map((period, index) => {
        const currentIndex = yearContents.findIndex(
          (item) => item.id === selectedContent,
        );
        const isLastItem = index === yearContents.length - 1;
        const isNotUniqueOrLast = yearContents.length > 1 && !isLastItem;

        const isNext = index > currentIndex;
        const isPrevious = index < currentIndex;
        const color = itemColors[period.id];

        return (
          <ContentItem
            key={period.id}
            ref={(el) => {
              itemRefs.current[period.id] = el;
            }}
            background={period}
            isNotUniqueOrLast={isNotUniqueOrLast}
            color={color}
            isNext={isNext}
            isPrevious={isPrevious}
            isLastItem={isLastItem}
            containerHeight={CONTENT_VIEW_HEIGHT}
          />
        );
      })}
    </ul>
  );
}
