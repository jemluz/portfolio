import { useCallback, useState } from "react";
import { ERROR_BLINK_DURATION } from "../components/custom/Timeline/timeline.constants";

interface UseTimelineNavigationProps {
  years: number[];
  selectedYear: number | null;
  setSelectedYear: (year: number) => void;
  scrollToYear: (year: number) => void;
  scrollViewportRef: React.RefObject<HTMLDivElement | null>;
}

/**
 * Custom hook that manages timeline navigation logic and button interactions.
 *
 * Provides handlers for navigating through the timeline (up/down, one step or to extremes)
 * and manages error feedback when navigation boundaries are reached.
 *
 * @param props - Configuration object for the timeline navigation
 * @param props.years - Array of available years in the timeline
 * @param props.selectedYear - Currently selected year (null if none selected)
 * @param props.setSelectedYear - Function to update the selected year
 * @param props.scrollToYear - Function to scroll to a specific year
 * @param props.scrollViewportRef - Reference to the scrollable viewport element
 *
 * @returns Object containing error state and navigation handler functions
 * @returns errorButton - ID of the button showing error feedback (null if none)
 * @returns handleUpAll - Handler to navigate to the first year
 * @returns handleDownAll - Handler to navigate to the last year
 * @returns handleUpOne - Handler to navigate to the previous year
 * @returns handleDownOne - Handler to navigate to the next year
 */
export function useTimelineNavigation({
  years,
  selectedYear,
  setSelectedYear,
  scrollToYear,
  scrollViewportRef,
}: UseTimelineNavigationProps) {
  const [errorButton, setErrorButton] = useState<string | null>(null);

  // Blink error feedback on navigation buttons
  const blinkError = useCallback((buttonId: string) => {
    setErrorButton(buttonId);
    setTimeout(() => {
      setErrorButton(null);
    }, ERROR_BLINK_DURATION);
  }, []);

  // Navigate to extreme (first or last year)
  const navigateToExtreme = useCallback(
    (direction: "up" | "down") => {
      if (years.length === 0) return;

      const targetYear =
        direction === "up" ? years[0] : years[years.length - 1];

      // If already at the extreme, show error feedback
      if (selectedYear === targetYear) {
        blinkError(direction === "up" ? "up-all" : "down-all");
      } else {
        setSelectedYear(targetYear);
        scrollToYear(targetYear);
      }
    },
    [years, selectedYear, setSelectedYear, scrollToYear, blinkError],
  );

  // Navigate one step in the timeline (up or down)
  const navigateOneStep = useCallback(
    (direction: "up" | "down") => {
      if (!scrollViewportRef.current || years.length === 0) return;

      // If no year selected, select the first one
      if (selectedYear == null) {
        setSelectedYear(years[0]);
        scrollToYear(years[0]);
        return;
      }

      const currentIndex = years.indexOf(selectedYear);
      const isAtBoundary =
        direction === "up"
          ? currentIndex <= 0
          : currentIndex >= years.length - 1;

      // If at boundary, show error feedback
      if (isAtBoundary) {
        blinkError(direction === "up" ? "up-one" : "down-one");
        return;
      }

      // Navigate to next/previous year
      const targetYear =
        direction === "up" ? years[currentIndex - 1] : years[currentIndex + 1];

      setSelectedYear(targetYear);
      scrollToYear(targetYear);
    },
    [
      years,
      selectedYear,
      setSelectedYear,
      scrollToYear,
      scrollViewportRef,
      blinkError,
    ],
  );

  const handleUpAll = useCallback(
    () => navigateToExtreme("up"),
    [navigateToExtreme],
  );
  const handleDownAll = useCallback(
    () => navigateToExtreme("down"),
    [navigateToExtreme],
  );
  const handleUpOne = useCallback(
    () => navigateOneStep("up"),
    [navigateOneStep],
  );
  const handleDownOne = useCallback(
    () => navigateOneStep("down"),
    [navigateOneStep],
  );

  return {
    errorButton,
    handleUpAll,
    handleDownAll,
    handleUpOne,
    handleDownOne,
  };
}
