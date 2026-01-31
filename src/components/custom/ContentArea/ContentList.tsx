import { useBackground } from "@/contexts/BackgroundContext";
import { useCallback, useEffect, useMemo, useRef } from "react";
import {
  createWheelHandler,
  createTouchHandlers,
  resetScroll,
  scrollToItem,
  calculateItemVisibility,
} from "./content-list.utils";
import ContentItem from "./ContentItem";
import { CONTENT_VIEW_HEIGHT } from "./content-area.constants";
import { useScrollPadding } from "@/hooks/useScrollPadding";
import { useScrollActivation } from "@/hooks/useScrollActivation";
import { useContentItemRefs } from "@/hooks/useContentItemRefs";

const SCROLL_CONFIG = {
  THRESHOLD: 1,
  TIME_RESET: 300,
  TOUCH_THRESHOLD: 50, // pixels for touch swipe
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

export default function ContentList() {
  const {
    selectedContent,
    yearContents,
    itemColors,
    goToNextContent,
    goToPreviousContent,
    registerScrollReset,
    setSelectedContent,
  } = useBackground();

  // Ref to the content list element
  const contentListRef = useRef<HTMLUListElement>(null);

  // Refs for scroll state management
  const isScrolling = useRef(false); // Flag to indicate if a scroll is in progress
  const lastScrollTime = useRef(0); // Timestamp of the last scroll
  const accumulatedDelta = useRef(0); // Accumulates deltaY to detect direction
  const touchStartY = useRef(0); // Initial Y position for touch events

  // Refs for tracking individual ContentItem heights
  const [contentItemRefs, setItemRef] = useContentItemRefs();

  // Calculate bottom padding to enable scrolling based on ContentItem heights
  const scrollHeight = useScrollPadding(contentItemRefs, yearContents.length);

  // Reset scroll state every time the year changes
  useEffect(() => {
    registerScrollReset(() => {
      resetScroll(contentListRef);
      isScrolling.current = false;
      lastScrollTime.current = 0;
      accumulatedDelta.current = 0;
      touchStartY.current = 0;
    });
  }, [registerScrollReset]);

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

  // Touch handlers to simulate carousel behavior on mobile
  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useMemo(() => {
    return createTouchHandlers(
      isScrolling,
      touchStartY,
      goToNextContent,
      goToPreviousContent,
      SCROLL_CONFIG.TOUCH_THRESHOLD, // Minimum swipe distance to navigate
    );
  }, [goToNextContent, goToPreviousContent]);

  // Scroll handler to auto-activate content based on position
  const handleScroll = useScrollActivation(
    contentListRef,
    contentItemRefs,
    isScrolling,
    yearContents,
    selectedContent,
    setSelectedContent,
  );

  return (
    <ul
      ref={contentListRef}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onScroll={handleScroll}
      className="content-list overflow-y-auto scroll-smooth hide-scrollbar"
      style={{
        scrollBehavior: "smooth",
        paddingBottom: scrollHeight ? `${scrollHeight}px` : "0",
      }}
    >
      {yearContents.map((period, index) => {
        const currentIndex = yearContents.findIndex(
          (item) => item.id === selectedContent,
        );
        const isLastItem = index === yearContents.length - 1;
        const isNotUniqueOrLast = yearContents.length > 1 && !isLastItem;

        const { isNext, isPrevious } = calculateItemVisibility(
          index,
          currentIndex,
        );

        const color = itemColors[period.id];

        return (
          <ContentItem
            key={period.id}
            ref={setItemRef(period.id)}
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
