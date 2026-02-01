import { useBackground } from "@/contexts/BackgroundContext";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

export default function YearTitle() {
  const { selectedYear } = useBackground();
  const isDesktop = useMediaQuery("(min-width: 769px)");

  return (
    <h1 className={cn("year-title flex items-center text-3xl  sticky top-0 z-10 bg-white ", !isDesktop ? "pl-2" : "pb-4 mb-6 shadow-xs")}>
        {selectedYear}
      </h1>
  );
}
