"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useCallback, useEffect, useRef } from "react";
import { useBackground } from "../../../contexts/BackgroundContext";
import YearButton from "./YearButton";
import BlackBorder from "./BlackBorder";
import { useTimelineBlackBorder } from "../../../hooks/useTimelineBlackBorder";
import { useTimelineNavigation } from "../../../hooks/useTimelineNavigation";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import TimelineNavButtonsDesktop from "./TimelineNavButtonsDesktop";
import { cn } from "@/lib/utils";

export default function Timeline() {
  const isDesktop = useMediaQuery("(min-width: 769px)");

  // Context
  const { selectedYear, setSelectedYear, registerTimelineNavigation, years } = useBackground();

  // Timeline refs
  const scrollViewportRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Record<number, HTMLDivElement | null>>({});

  // Scroll to selected year
  const scrollToYear = useCallback((year: number) => {
    const element = itemRefs.current[year];
    if (element && scrollViewportRef.current) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  // Black border logic
  const { blackBorderYTranslation, showBar, handleViewportScroll } =
    useTimelineBlackBorder({
      selectedYear,
      years,
      scrollViewportRef,
      itemRefs,
    });

  // Initialize timeline navigation handlers
  const {
    errorButton,
    handleUpAll,
    handleDownAll,
    handleUpOne,
    handleDownOne,
  } = useTimelineNavigation({
    years,
    selectedYear,
    setSelectedYear,
    scrollToYear,
    scrollViewportRef,
  });

  // Register navigation handlers in context for mobile buttons outside Timeline
  useEffect(() => {
    registerTimelineNavigation({
      errorButton,
      handleUpAll,
      handleDownAll,
      handleUpOne,
      handleDownOne,
    });
  }, [errorButton, handleUpAll, handleDownAll, handleUpOne, handleDownOne, registerTimelineNavigation]);

  return (
    <div className="timeline-area flex flex-col">
      <div className="timeline flex ml-[5px]">
        <ScrollArea
          className={cn("scroll-area flex flex-col z-1", isDesktop && "max-h-[290px]")}
          viewportRef={scrollViewportRef}
          onViewportScroll={handleViewportScroll}
          hideScrollbar
        >
          {years.map((year) => (
            <YearButton
              key={year}
              year={year}
              isSelected={year === selectedYear}
              onClick={setSelectedYear}
              innerRef={(el) => (itemRefs.current[year] = el)}
              showError={errorButton !== null && year === selectedYear}
            />
          ))}
        </ScrollArea>
        <BlackBorder
          translation={blackBorderYTranslation}
          isVisible={showBar}
          hasError={errorButton !== null}
        />
      </div>
      { isDesktop &&
        <TimelineNavButtonsDesktop />
      }

    </div>
  );
}
