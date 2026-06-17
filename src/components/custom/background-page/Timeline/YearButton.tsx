import { Button } from "@/components/ui/button";
import { YearButtonProps } from "./timeline.types";
import { suseMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import YearBtnLeftBullet from "./YearBtnLeftBullet";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function YearButton({
  year,
  isSelected = false,
  onClick,
  innerRef,
  showError = false,
}: YearButtonProps) {
  const isDesktop = useMediaQuery("(min-width: 769px)");
  const selectedStyle = "bg-accent";
  const errorStyle = "animate-pulse !bg-red-50 !text-red-600";

  return (
    <div
      ref={(el) => innerRef?.(el)}
      className={cn(
        "flex items-center mr-[8px] -translate-x-[10px] transition-all duration-300",
      )}
    >
      <YearBtnLeftBullet isVisible={isSelected} showError={showError} />
      <Button
        variant="ghost"
        onClick={() => onClick(year)}
        aria-pressed={isSelected}
        className={cn(
          "border-zinc-100 border-l-[3px] cursor-pointer hover:bg-accent rounded-none",
          isDesktop ? "pr-[8px]" : "pr-[16px]",
          isSelected && selectedStyle,
          showError && errorStyle,
        )}
      >
        <span className={`text-[18px] ${suseMono.variable}`}>{year}</span>
      </Button>
    </div>
  );
}
