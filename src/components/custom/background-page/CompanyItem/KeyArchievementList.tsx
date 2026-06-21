import { cn } from "@/lib/utils";
import { KeyArchievementListProps } from "./company-item.types";

export default function KeyArchievementList({
  items,
  className,
}: KeyArchievementListProps) {
  return (
    <ul
      className={cn(
        "text-gray-600 leading-relaxed text-[15px] mt-2 list-disc pl-5 space-y-1",
        className,
      )}
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
