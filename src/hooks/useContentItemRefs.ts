import { useRef, useCallback, RefObject } from "react";

/**
 * Hook that manages a record of refs for multiple ContentItem elements.
 * Provides a callback factory to create ref setters for individual items.
 *
 * @returns Tuple containing the refs record and a function to create ref callbacks
 */
export function useContentItemRefs(): [
  RefObject<Record<string, HTMLLIElement | null>>,
  (itemId: string) => (el: HTMLLIElement | null) => void,
] {
  const contentItemRefs = useRef<Record<string, HTMLLIElement | null>>({});

  const setItemRef = useCallback(
    (itemId: string) => (el: HTMLLIElement | null) => {
      contentItemRefs.current[itemId] = el;
    },
    [],
  );

  return [contentItemRefs, setItemRef];
}
