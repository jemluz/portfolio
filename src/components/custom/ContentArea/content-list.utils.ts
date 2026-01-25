import { RefObject } from "react";

const SCROLL_ANIMATION_DURATION = 600;
const DEFAULT_SCROLL_THRESHOLD = 10;
const DEFAULT_SCROLL_TIME_RESET = 300;
const DEFAULT_TOUCH_THRESHOLD = 50; // pixels for touch swipe

/**
 * Scrolls to the selected item
 * Scrolls smoothly to a specific item within a scrollable container.
 *
 * @param {RefObject<HTMLUListElement | null>} contentListRef - Reference to the scrollable container element
 * @param {string} itemId - The ID of the element to scroll to
 * @param {RefObject<boolean>} isScrollingRef - Reference to track if a scroll animation is in progress
 */
export function scrollToItem(
  contentListRef: RefObject<HTMLUListElement | null>,
  itemId: string,
  isScrollingRef: RefObject<boolean>,
): void {
  const listElement = contentListRef.current;
  if (!listElement) return;

  const targetElement = document.getElementById(itemId);
  if (!targetElement) return;

  // Prevent multiple scrolls at the same time (locks during animation)
  isScrollingRef.current = true;

  // Calculate the offset to scroll the element to the top of the container
  const containerRect = listElement.getBoundingClientRect();
  const targetRect = targetElement.getBoundingClientRect();
  const scrollOffset = targetRect.top - containerRect.top;

  // Perform the scroll
  listElement.scrollTo({
    top: listElement.scrollTop + scrollOffset,
    behavior: "smooth",
  });

  setTimeout(() => {
    // Allow scrolling again after animation (unlock)
    isScrollingRef.current = false;
  }, SCROLL_ANIMATION_DURATION);
}

/**
 * Resets the scroll position of a container to the top.
 *
 * @param {RefObject<HTMLUListElement | null>} contentListRef - Reference to the scrollable container element
 */
export function resetScroll(
  contentListRef: RefObject<HTMLUListElement | null>,
): void {
  contentListRef.current?.scrollTo({
    top: 0,
    behavior: "auto",
  });
}

/**
 * Creates a wheel event handler that simulates carousel-like navigation behavior.
 * Accumulates scroll deltas and triggers navigation callbacks when thresholds are met.
 *
 * @param {RefObject<boolean>} isScrollingRef - Reference to track if navigation is in progress
 * @param {RefObject<number>} lastScrollTimeRef - Reference to store the timestamp of the last scroll event
 * @param {RefObject<number>} accumulatedDeltaRef - Reference to accumulate scroll deltas
 * @param {() => void} goToNext - Callback function to navigate to the next item
 * @param {() => void} goToPrevious - Callback function to navigate to the previous item
 * @param {number} [threshold=10] - Minimum accumulated delta required to trigger navigation
 * @param {number} [timeReset=300] - Maximum time (ms) between scrolls to keep accumulating deltas
 * @returns {(e: React.WheelEvent<HTMLUListElement>) => void} Wheel event handler function
 */
export function createWheelHandler(
  isScrollingRef: RefObject<boolean>,
  lastScrollTimeRef: RefObject<number>,
  accumulatedDeltaRef: RefObject<number>,
  goToNext: () => void,
  goToPrevious: () => void,
  threshold = DEFAULT_SCROLL_THRESHOLD,
  timeReset = DEFAULT_SCROLL_TIME_RESET,
): (e: React.WheelEvent<HTMLUListElement>) => void {
  return (e: React.WheelEvent<HTMLUListElement>) => {
    e.preventDefault();

    // Prevent scroll during animation (locks during animation)
    if (isScrollingRef.current) return;

    const now = Date.now();
    const lastScrollTime = lastScrollTimeRef.current;

    // Reset accumulator if too much time has passed since the last scroll
    if (now - lastScrollTime > timeReset) {
      accumulatedDeltaRef.current = 0;
    }

    // Accumulate the deltaY to detect scroll direction
    accumulatedDeltaRef.current += e.deltaY;

    // Update the last scroll time
    lastScrollTimeRef.current = now;

    const accumulatedDelta = accumulatedDeltaRef.current;

    // Navigate if the accumulated delta exceeds the threshold
    if (Math.abs(accumulatedDelta) >= threshold) {
      if (accumulatedDelta > 0) {
        goToNext();
      } else {
        goToPrevious();
      }

      // Reset the accumulated delta after navigating
      accumulatedDeltaRef.current = 0;
    }
  };
}

/**
 * Creates touch event handlers that simulate carousel-like navigation behavior on mobile.
 * Tracks touch position and triggers navigation when swipe distance exceeds threshold.
 *
 * @param {RefObject<boolean>} isScrollingRef - Reference to track if navigation is in progress
 * @param {RefObject<number>} touchStartYRef - Reference to store the initial touch Y position
 * @param {() => void} goToNext - Callback function to navigate to the next item
 * @param {() => void} goToPrevious - Callback function to navigate to the previous item
 * @param {number} [threshold=50] - Minimum swipe distance (pixels) required to trigger navigation
 * @returns Touch event handlers object with onTouchStart, onTouchMove, and onTouchEnd
 */
export function createTouchHandlers(
  isScrollingRef: RefObject<boolean>,
  touchStartYRef: RefObject<number>,
  goToNext: () => void,
  goToPrevious: () => void,
  threshold = DEFAULT_TOUCH_THRESHOLD,
) {
  const handleTouchStart = (e: React.TouchEvent<HTMLUListElement>) => {
    // Prevent scroll during animation
    if (isScrollingRef.current) {
      e.preventDefault();
      return;
    }

    // Prevent default scrolling behavior to avoid interference
    e.preventDefault();

    // Store the initial touch Y position
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLUListElement>) => {
    // Always prevent default to block native scroll
    e.preventDefault();

    // Prevent scroll during animation
    if (isScrollingRef.current) {
      return;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLUListElement>) => {
    // Prevent scroll during animation
    if (isScrollingRef.current) {
      return;
    }

    // Get the final touch Y position
    const touchEndY = e.changedTouches[0].clientY;
    const touchStartY = touchStartYRef.current;

    // Calculate the vertical distance of the swipe
    const deltaY = touchStartY - touchEndY;

    // Navigate if the swipe distance exceeds the threshold
    if (Math.abs(deltaY) >= threshold) {
      if (deltaY > 0) {
        // Swiped up (scroll down) - go to next
        goToNext();
      } else {
        // Swiped down (scroll up) - go to previous
        goToPrevious();
      }
    }

    // Reset touch start position
    touchStartYRef.current = 0;
  };

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
}

/**
 * Calculates visibility states for a content item based on its index position.
 *
 * @param {number} index - The index of the current item
 * @param {number} currentIndex - The index of the currently selected item
 * @returns Object containing isNext and isPrevious boolean flags
 */
export function calculateItemVisibility(index: number, currentIndex: number) {
  return {
    isNext: index > currentIndex,
    isPrevious: index < currentIndex,
  };
}
