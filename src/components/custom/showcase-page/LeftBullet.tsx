import { cn } from "@/lib/utils";

/**
 * Bullet indicator for showcase year and month header (ProjectItem).
 */

export default function YearBtnLeftBullet() {
  return (
    <div
      className={cn(
        "relative -right-[12px] z-[999] flex items-center justify-center w-5 h-5 transform-gpu transition-all duration-200 ease-out",
      )}
      role="status"
    >
      {/* Center dot */}
      <div className={cn("absolute w-2 h-2 rounded-full bg-neutral-400")} />
      {/* Border ring */}
      <div
        className={cn("absolute w-4 h-4 rounded-full border-2 border-primary")}
      />
    </div>
  );
}
