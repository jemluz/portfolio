import { cn } from "@/lib/utils";
import { TechTagProps } from "./background.types";

export default function TechTag({ skill, className }: TechTagProps) {
  return (
    <li
      className={cn(
        "list-none px-3 py-1 rounded-md text-[13px] font-bold font-mono tracking-wider border border-transparent bg-secondary text-secondary-foreground",
        className,
      )}
    >
      {skill}
    </li>
  );
}
