import { HourglassIcon } from "@phosphor-icons/react";
import { DurationInfoProps } from "./content-item.types";

export default function DurationInfo({
  durationInMonths,
}: DurationInfoProps) {
  return (
    <div>
      <div className="flex items-center gap-2 text-sm">
        <HourglassIcon size={16} weight="duotone" />
        <span>{durationInMonths} months</span>
      </div>
    </div>
  );
}
