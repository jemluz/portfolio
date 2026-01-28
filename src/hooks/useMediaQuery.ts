"use client";

import { useState, useEffect } from "react";

/**
 * Hook to detect if the current viewport matches a given media query.
 *
 * @param query - The media query string to test (e.g., "(min-width: 769px)")
 * @returns A boolean indicating whether the media query matches
 *
 * @example
 * ```tsx
 * const isDesktop = useMediaQuery("(min-width: 769px)");
 * const isMobile = useMediaQuery("(max-width: 768px)");
 * ```
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    // Set initial value
    setMatches(media.matches);

    // Create event listener
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add listener
    media.addEventListener("change", listener);

    // Cleanup
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
