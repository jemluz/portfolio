"use client";

import { courstardSans } from "@/lib/fonts";
import { ContentItemProps } from "./content-item.types";
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
  (props, forwardedRef) => {
    const {
      background,
      isNotUniqueOrLast,
      color,
      isNext,
      isPrevious,
      isLastItem = false,
      containerHeight = DEFAULT_CONTAINER_HEIGHT,
    } = props;

    const {
      id,
      month,
      title,
      description,
      location,
      durationInMonths,
      projects,
    } = background;

    const internalRef = useRef<HTMLLIElement>(null);

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

    // Helper to combine internal ref with forwarded ref
    const setItemRef = (element: HTMLLIElement | null) => {
      internalRef.current = element; // Set internal ref

      if (typeof forwardedRef === "function") {
        forwardedRef(element); // Call the function if it's a callback ref
      } else if (forwardedRef) {
        // Assign to .current if it's a RefObject
        forwardedRef.current = element;
      }
    };

    // Calculate padding for the last item
    useEffect(() => {
      if (!isLastItem || !internalRef.current) return;

      const updatePadding = () => {
        if (!internalRef.current) return;

        // Calculate needed padding
        const paddingNeeded = calculatePaddingNeeded(
          internalRef.current.offsetHeight,
          containerHeight,
        );

        // If the item is smaller than the available space, add padding
        if (paddingNeeded > 0) {
          internalRef.current.style.paddingBottom = `${paddingNeeded}px`;
        }
      };

      // Execute after rendering
      updatePadding();

      // Observe size changes to adjust padding dynamically every time the size changes (e.g., window resize or content changes)
      const resizeObserver = new ResizeObserver(updatePadding);
      resizeObserver.observe(internalRef.current);

      return () => resizeObserver.disconnect();
    }, [isLastItem, containerHeight]);

    return (
      <li
        id={id}
        ref={setItemRef}
        className={cn(
          "flex flex-col items-start justify-between text-gray-400 txt-xs",
          courstardSans.className,
          opacity,
          transition,
          isNotUniqueOrLast && "mb-8",
        )}
      >
        {month && (
          <MonthBullet color={color} month={month} isGrayScale={isNext} />
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
