import { cn } from "@/lib/utils";
import { YearBtnLeftBulletProps } from "./timeline.types";

/**
 * Animated bullet indicator for timeline year button.
 * Shows a pulsing circle that appears/disappears based on visibility state.
 * Used to indicate selected or highlighted year in the timeline navigation.
 *
 * @param {boolean} isVisible - Controls visibility and scale of the bullet
 * @param {boolean} [showError=false] - If true, styles the bullet red and adds pulse animation
 */

export default function YearBtnLeftBullet({
  isVisible,
  showError = false,
}: YearBtnLeftBulletProps) {
  return (
    <div
      className={cn(
        "timeline-year-left-bullet relative z-[999] flex items-center justify-center w-5 h-5 transform-gpu transition-all duration-200 ease-out",
        isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0",
        showError && "animate-pulse",
      )}
      role="status"
      aria-label={
        showError
          ? "Timeline navigation error: no more years above/below"
          : undefined
      }
    >
      {/* Center dot */}
      <div
        className={cn(
          "absolute w-2 h-2 rounded-full",
          showError ? "bg-red-200" : "bg-neutral-400",
        )}
      />
      {/* Border ring */}
      <div
        className={cn(
          "absolute w-4 h-4 rounded-full border-2",
          showError ? "border-red-500" : "border-primary",
        )}
      />
    </div>
  );
}
