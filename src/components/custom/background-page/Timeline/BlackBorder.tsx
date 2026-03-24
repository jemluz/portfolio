interface BlackBorderProps {
  translation: number;
  isVisible: boolean;
  hasError: boolean;
}

/**
 * Visual indicator bar that shows the currently selected year in the timeline
 *
 * Displays a vertical black bar (or red when error) that aligns with the selected
 * year button. The bar follows scroll movements and can hide when the selected
 * year is out of view.
 */
export default function BlackBorder({
  translation,
  isVisible,
  hasError,
}: BlackBorderProps) {
  return (
    <div
      id="black-border"
      className={`z-2 h-[36px] w-[3px] bg-zinc-900 -translate-x-[16px] text-transparent ease-out transition-[transform,opacity] duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } ${hasError ? "!bg-red-400" : ""}`}
      style={{ transform: `translateY(${translation}px)` }}
    />
  );
}
