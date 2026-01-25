"use client";

import { courstardSans } from "@/lib/fonts";
import { ContentItemProps, ColorKey } from "./content-item.types";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useMemo, forwardRef } from "react";
import ProjectsList from "./ProjectList";
import MonthBullet from "./MonthBullet";
import {
  calculatePaddingNeeded,
  DEFAULT_CONTAINER_HEIGHT,
} from "./content-item.utils";
import PeriodInfo from "./PeriodInfo";

/**
 * ## ContentItem
 * Renders a single content item within the ContentList.
 *
 * Visibility States:
 * - **Current**: Full opacity, colored MonthBullet
 * - **Next**: 30% opacity, grayscale MonthBullet, visible below current
 * - **Previous**: 30% opacity, grayscale MonthBullet
 *
 * Features:
 * - Smooth opacity transitions (300ms)
 * - Dynamic padding for last item (prevents layout shifts)
 * - ResizeObserver for responsive layout adjustments
 */

const ContentItem = forwardRef<HTMLLIElement, ContentItemProps>(
  (
    {
      background,
      isNotUniqueOrLast,
      color,
      isNext,
      isPrevious,
      isLastItem = false,
      containerHeight = DEFAULT_CONTAINER_HEIGHT,
    },
    ref,
  ) => {
    const {
      id,
      month,
      title,
      description,
      location,
      durationInMonths,
      projects,
    } = background;

    const contentItemRef = useRef<HTMLLIElement>(null);

    // Determine visual state based on position (next, previous, current)
    const visualState = useMemo(() => {
      const isInactive = isNext || isPrevious;

      return {
        opacity: isInactive ? "opacity-30" : "opacity-100",
        transition: "transition-opacity duration-300",
        isInactive,
      };
    }, [isNext, isPrevious]);

    const { opacity, transition } = visualState;

    // Calculate padding for the last item
    useEffect(() => {
      if (!isLastItem || !contentItemRef.current) return;

      const updatePadding = () => {
        if (!contentItemRef.current) return;

        // Calculate needed padding
        const paddingNeeded = calculatePaddingNeeded(
          contentItemRef.current.offsetHeight,
          containerHeight,
        );

        // If the item is smaller than the available space, add padding
        if (paddingNeeded > 0) {
          contentItemRef.current.style.paddingBottom = `${paddingNeeded}px`;
        }
      };

      // Execute after rendering
      updatePadding();

      // Observe size changes to adjust padding dynamically every time the size changes (e.g., window resize or content changes)
      const resizeObserver = new ResizeObserver(updatePadding);
      resizeObserver.observe(contentItemRef.current);

      return () => resizeObserver.disconnect();
    }, [isLastItem, containerHeight]);

    return (
      <li
        id={id}
        ref={(el) => {
          contentItemRef.current = el;
          if (typeof ref === "function") {
            ref(el);
          } else if (ref) {
            ref.current = el;
          }
        }}
        className={cn(
          "flex flex-col items-start justify-between text-gray-400 txt-xs",
          courstardSans.className,
          opacity,
          transition,
          isNotUniqueOrLast && "mb-8",
        )}
      >
        {month && (
          <MonthBullet
            color={color}
            month={month}
            isGrayScale={isNext}
          />
        )}

        <PeriodInfo
          title={title}
          description={description}
          location={location}
          durationInMonths={durationInMonths}
          isInactive={isNext || isPrevious}
        />

        {projects && <ProjectsList projects={projects} />}
      </li>
    );
  },
);

ContentItem.displayName = "ContentItem";

export default ContentItem;
