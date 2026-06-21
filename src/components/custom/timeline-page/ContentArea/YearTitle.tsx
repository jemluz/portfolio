import { useTimelinePage } from "@/contexts/TimelinePageContext";
import { cn } from "@/lib/utils";

export default function YearTitle() {
  const { selectedYear } = useTimelinePage();

  return (
    <h1
      className={cn(
        "year-title flex items-center text-3xl  sticky top-0 z-10 bg-white ",
        "pl-2 md:pl-0 md:pb-4 md:mb-6 md:shadow-xs",
      )}
    >
      {selectedYear}
    </h1>
  );
}
