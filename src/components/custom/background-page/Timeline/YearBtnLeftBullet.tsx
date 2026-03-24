import { cn } from "@/lib/utils";
import { YearBtnLeftBulletProps } from "./timeline.types";

export default function YearBtnLeftBullet({
  isVisible,
  showError = false,
}: YearBtnLeftBulletProps) {
  return (
    <div
      className={cn(
        "relative -right-[12px] z-[999] flex items-center justify-center w-5 h-5 transform-gpu transition-all duration-200 ease-out",
        isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0",
        showError && "animate-pulse",
      )}
    >
      <div
        className={cn(
          "absolute w-2 h-2 rounded-full",
          showError ? "bg-red-200" : "bg-neutral-400",
        )}
      ></div>
      <div
        className={cn(
          "absolute w-4 h-4 rounded-full border-2",
          showError ? "border-red-500" : "border-primary",
        )}
      ></div>
    </div>
  );
}
