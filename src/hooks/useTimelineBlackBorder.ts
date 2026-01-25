import { useCallback, useEffect, useState } from "react";
import {
  calculateBlackBorderTranslation,
  isElementVisible,
} from "../components/custom/Timeline/timeline.utils";

interface UseTimelineBlackBorderProps {
  selectedYear: number | null;
  years: number[];
  scrollViewportRef: React.RefObject<HTMLDivElement | null>;
  itemRefs: React.RefObject<Record<number, HTMLDivElement | null>>;
}

/**
 * Custom hook to manage the black border/bar indicator movement in the timeline
 *
 * Handles the vertical translation and visibility of the black border that indicates
 * the currently selected year. The bar follows scroll movements and automatically
 * hides when the selected year is scrolled out of the viewport.
 *
 * @param selectedYear - Currently selected year (null if none selected)
 * @param years - Array of all available years in the timeline
 * @param scrollViewportRef - Reference to the scrollable viewport element
 * @param itemRefs - References to all year button elements indexed by year
 *
 * @returns Object containing:
 * - blackBorderYTranslation: Y-axis translation value in pixels for the border
 * - showBar: Boolean indicating whether the border should be visible
 * - handleViewportScroll: Callback function to handle scroll events
 */
export function useTimelineBlackBorder({
  selectedYear,
  years,
  scrollViewportRef,
  itemRefs,
}: UseTimelineBlackBorderProps) {
  const [blackBorderYTranslation, setBlackBorderYTranslation] = useState(0);
  const [showBar, setShowBar] = useState(true);

  // Toggle black border/bar visibility: hide when selected year is scrolled out of timeline viewport
  const updateBarVisibility = useCallback(() => {
    if (scrollViewportRef.current && selectedYear != null) {
      const scrollVpRect = scrollViewportRef.current.getBoundingClientRect();
      const yearButtonSelected = itemRefs.current?.[selectedYear];

      if (yearButtonSelected) {
        // Get item positions relative to viewport
        const yearBtnRect = yearButtonSelected.getBoundingClientRect();
        // If item bottom is below viewport top AND item top is above viewport bottom => item is visible
        const isVisible = isElementVisible(yearBtnRect, scrollVpRect);
        setShowBar(isVisible);
      } else {
        setShowBar(false);
      }
    } else {
      setShowBar(false);
    }
  }, [selectedYear, scrollViewportRef, itemRefs]);

  // Sync black border position with scroll and update visibility
  // Guarantees that the black border stays aligned with the selected year button, even when scrolling
  const syncBlackBorder = useCallback(() => {
    // Get black border base position
    const base = calculateBlackBorderTranslation(selectedYear, years);
    const scrollTop = scrollViewportRef.current?.scrollTop ?? 0;

    // When user scrolls down (scrollTop increases), bar moves up (subtract scrollTop)
    // When user scrolls up (scrollTop decreases), bar moves down (add scrollTop)
    setBlackBorderYTranslation(Math.max(0, base - scrollTop));

    // Check if selected year is still visible in viewport
    updateBarVisibility();
  }, [selectedYear, years, scrollViewportRef, updateBarVisibility]);

  // Sync on manual scroll
  const handleViewportScroll = useCallback(() => {
    syncBlackBorder();
  }, [syncBlackBorder]);

  // Sync when selected year or years change
  useEffect(() => {
    syncBlackBorder();
  }, [syncBlackBorder]);

  return {
    blackBorderYTranslation,
    showBar,
    handleViewportScroll,
  };
}
