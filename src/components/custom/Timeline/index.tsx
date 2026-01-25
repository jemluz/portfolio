"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { TimelineItemProps } from "./timeline.types";
import { useCallback, useRef } from "react";
import { useBackground } from "../../../contexts/BackgroundContext";
import YearButton from "./YearButton";
import TimelineNavButtons from "./TimelineNavButtons";
import BlackBorder from "./BlackBorder";
import { useTimelineBlackBorder } from "../../../hooks/useTimelineBlackBorder";
import { useTimelineNavigation } from "../../../hooks/useTimelineNavigation";

export default function Timeline({ years }: TimelineItemProps) {
  // Context
  const { selectedYear, setSelectedYear } = useBackground();

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

  // Navigation logic
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

  return (
    <div className="timeline-container flex flex-col">
      <div className="timeline flex ml-[5px]">
        <ScrollArea
          className="z-1 scroll-area flex flex-col max-h-[290px]"
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
      <TimelineNavButtons
        onUpAll={handleUpAll}
        onUpOne={handleUpOne}
        onDownAll={handleDownAll}
        onDownOne={handleDownOne}
        errorButton={errorButton}
      />
    </div>
  );
}
