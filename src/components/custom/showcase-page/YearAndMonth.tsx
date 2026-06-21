import { suseMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { YearAndMonthProps } from "./showcase.types";
import LeftBullet from "./LeftBullet";

export default function YearAndMonth({ year, month }: YearAndMonthProps) {
  return (
    <div
      className={cn(
        "flex items-center -mr-8 -translate-x-[20px] transition-all duration-300",
      )}
    >
      <LeftBullet />
      <time
        className={cn(
          "border-zinc-100 border-l-[3px] cursor-pointer hover:bg-accent bg-accent pl-4 pr-3 py-1 ",
        )}
      >
        <span className={`text-[1.2rem] ${suseMono.variable}`}>{year}</span>
      </time>

      <div className="w-0.5 h-10 bg-black mr-4" />
      <time className="text-xl font-medium" dateTime={`${year}-${month}`}>
        {month}
      </time>
    </div>
  );
}
