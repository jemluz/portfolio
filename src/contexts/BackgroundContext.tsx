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
import { contentData, Background } from "@/background-data";
import { getRandomColor } from "@/components/custom/ContentArea/colors.utils";
import { ColorKey } from "@/components/custom/ContentArea/content-item.types";

type BackgroundContextType = {
  // State - primitives
  canGoNext: boolean;
  canGoPrevious: boolean;
  selectedContent: string | null;
  selectedYear: number | null;

  // State - complex objects
  initialContent: Background | null;
  itemColors: Record<string, ColorKey>;
  yearContents: Background[];

  // Actions/callbacks
  goToNextContent: () => void;
  goToPreviousContent: () => void;
  registerScrollReset: (callback: () => void) => void;
  setSelectedContent: (contentId: string | null) => void;
  setSelectedYear: (year: number | null) => void;
};

// Will be initialized in BackgroundProvider, if used outside will throw error
const BackgroundContext = createContext<BackgroundContextType | undefined>(
  undefined,
);

export function BackgroundProvider({
  children,
  initialYear = null,
}: {
  children: ReactNode;
  initialYear?: number | null;
}) {
  // ========== State ==========
  const [selectedContent, setSelectedContent] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(
    initialYear ?? null,
  );

  // ========== Refs ==========
  const colorCacheRef = useRef<Record<string, ColorKey>>({});
  const scrollResetCallbackRef = useRef<(() => void) | null>(null);

  // ========== Memoized Values ==========
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
    <BackgroundContext.Provider
      value={{
        // State - primitives
        canGoNext,
        canGoPrevious,
        selectedContent,
        selectedYear,

        // State - complex objects
        initialContent,
        itemColors,
        yearContents,

        // Actions/callbacks
        goToNextContent,
        goToPreviousContent,
        registerScrollReset,
        setSelectedContent,
        setSelectedYear,
      }}
    >
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackground() {
  const ctx = useContext(BackgroundContext);
  if (!ctx)
    throw new Error("useBackground must be used within BackgroundProvider");
  return ctx;
}

export default BackgroundContext;
