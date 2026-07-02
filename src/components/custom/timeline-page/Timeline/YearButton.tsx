import { Button } from "@/components/ui/button";
import { YearButtonProps } from "./timeline.types";
import { suseMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import YearBtnLeftBullet from "./YearBtnLeftBullet";

export default function YearButton({
  year,
  isSelected = false,
  showError = false,
  onClick,
  innerRef,
}: YearButtonProps) {
  const selectedStyle = "bg-accent";
  const errorStyle = "animate-pulse !bg-red-50 !text-red-600";

  return (
    <div
      ref={(el) => innerRef?.(el)}
      className={cn(
        "timeline-year-button-row flex items-center transition-all duration-300",
      )}
    >
      <YearBtnLeftBullet isVisible={isSelected} showError={showError} />
      <Button
        variant="ghost"
        onClick={() => onClick(year)}
        aria-pressed={isSelected}
        className={cn(
          "timeline-year-button border-zinc-100 cursor-pointer hover:bg-accent rounded-none",
          isSelected && selectedStyle,
          showError && errorStyle,
        )}
      >
        <span className={`timeline-year-label ${suseMono.variable}`}>
          {year}
        </span>
      </Button>
    </div>
  );
}
