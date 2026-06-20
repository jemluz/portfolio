"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
  useRef,
  useCallback,
  useEffect,
} from "react";
import { contentData, CareerMilestone } from "@/timeline-data";
import { ColorKey } from "@/lib/constants";
import { getRandomColor } from "@/lib/utils";

export type TimelineNavigationHandlers = {
  errorButton: string | null;
  handleUpAll: () => void;
  handleUpOne: () => void;
  handleDownAll: () => void;
  handleDownOne: () => void;
};

type TimelinePageContextType = {
  // State - primitives
  canGoNext: boolean;
  canGoPrevious: boolean;
  selectedContent: string | null;
  selectedYear: number | null;

  // State - complex objects
  initialContent: CareerMilestone | null;
  itemColors: Record<string, ColorKey>;
  years: number[];
  yearContents: CareerMilestone[];

  // Actions/callbacks
  goToNextContent: () => void;
  goToPreviousContent: () => void;
  registerScrollReset: (callback: () => void) => void;
  setSelectedContent: (contentId: string | null) => void;
  setSelectedYear: (year: number | null) => void;

  // Timeline navigation
  registerTimelineNavigation: (handlers: TimelineNavigationHandlers) => void;
  timelineNavigation: TimelineNavigationHandlers | null;
};

// Will be initialized in BackgroundProvider, if used outside will throw error
const TimelinePageContext = createContext<TimelinePageContextType | undefined>(
  undefined,
);

export function TimelinePageProvider({ children }: { children: ReactNode }) {
  // ========== Memoized Values ==========
  // Get all unique years from content data
  const years = useMemo(() => {
    return Array.from(new Set(contentData.map((item) => item.year)));
  }, []);

  // ========== State ==========
  const [selectedContent, setSelectedContent] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(
    years.length > 0 ? years[0] : null,
  );

  // ========== Refs ==========
  const colorCacheRef = useRef<Record<string, ColorKey>>({});
  const scrollResetCallbackRef = useRef<(() => void) | null>(null);
  const timelineNavigationRef = useRef<TimelineNavigationHandlers | null>(null);
  const [timelineNavigation, setTimelineNavigation] =
    useState<TimelineNavigationHandlers | null>(null);

  // ========== Derived State & Memoized Values ==========
  // Get content list for selected year, sorted by month (oldest first)
  const yearContents = useMemo(() => {
    if (selectedYear === null) return [];

    return contentData
      .filter((content) => content.year === selectedYear)
      .sort((a, b) => (a.month || 0) - (b.month || 0));
  }, [selectedYear]);

  // Get the initialContent (first/oldest content in sorted list)
  const initialContent = useMemo(() => {
    return yearContents.length > 0 ? yearContents[0] : null;
  }, [yearContents]);

  // Generate colors for each ContentItem (cached to persist across year changes)
  const itemColors = useMemo(() => {
    const colorMap: Record<string, ColorKey> = {};

    yearContents.forEach((item) => {
      // Use cached color if exists, otherwise generate new one
      if (colorCacheRef.current[item.id]) {
        colorMap[item.id] = colorCacheRef.current[item.id];
      } else {
        const newColor = getRandomColor();
        colorMap[item.id] = newColor;
        colorCacheRef.current[item.id] = newColor;
      }
    });
    return colorMap;
  }, [yearContents]);

  // Current index of selected content (which ContentItem is active/highlighted)
  const currentIndex = useMemo(() => {
    if (!selectedContent) return -1;
    return yearContents.findIndex((item) => item.id === selectedContent);
  }, [selectedContent, yearContents]);

  // Can navigate checks
  const canGoNext = useMemo(() => {
    return currentIndex >= 0 && currentIndex < yearContents.length - 1;
  }, [currentIndex, yearContents.length]);

  const canGoPrevious = useMemo(() => {
    return currentIndex > 0;
  }, [currentIndex]);

  // ========== Callbacks ==========
  const registerScrollReset = useCallback((callback: () => void) => {
    scrollResetCallbackRef.current = callback;
  }, []);

  const registerTimelineNavigation = useCallback(
    (handlers: TimelineNavigationHandlers) => {
      timelineNavigationRef.current = handlers;
      setTimelineNavigation(handlers);
    },
    [],
  );

  const goToNextContent = useCallback(() => {
    if (canGoNext) {
      setSelectedContent(yearContents[currentIndex + 1].id);
    }
  }, [canGoNext, currentIndex, yearContents]);

  const goToPreviousContent = useCallback(() => {
    if (canGoPrevious) {
      setSelectedContent(yearContents[currentIndex - 1].id);
    }
  }, [canGoPrevious, currentIndex, yearContents]);

  // ========== Effects ==========
  // Reset scroll and content when year changes
  useEffect(() => {
    if (selectedYear !== null && yearContents.length > 0) {
      // Reset scroll position if callback is registered
      scrollResetCallbackRef.current?.();
      // Set selectedContent to first item of the year
      setSelectedContent(yearContents[0].id);
    } else if (initialContent) {
      setSelectedContent(initialContent.id);
    } else {
      setSelectedContent(null);
    }
  }, [selectedYear, yearContents, initialContent]);

  return (
    <TimelinePageContext.Provider
      value={{
        // State - primitives
        canGoNext,
        canGoPrevious,
        selectedContent,
        selectedYear,

        // State - complex objects
        initialContent,
        itemColors,
        years,
        yearContents,

        // Actions/callbacks
        goToNextContent,
        goToPreviousContent,
        registerScrollReset,
        setSelectedContent,
        setSelectedYear,

        // Timeline navigation
        registerTimelineNavigation,
        timelineNavigation,
      }}
    >
      {children}
    </TimelinePageContext.Provider>
  );
}

export function useTimelinePage() {
  const ctx = useContext(TimelinePageContext);
  if (!ctx)
    throw new Error("useTimelinePage must be used within TimelinePageProvider");
  return ctx;
}

export default TimelinePageContext;
