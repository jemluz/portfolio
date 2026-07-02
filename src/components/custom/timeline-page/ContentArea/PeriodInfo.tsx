import { changaSans } from "@/lib/fonts";
import LocationInfo from "./LocationInfo";
import DurationInfo from "./DurationInfo";
import { PeriodInfoProps } from "./content-item.types";

export default function PeriodInfo({
  title,
  description,
  location,
  durationInMonths,
  isInactive = false,
}: PeriodInfoProps) {
  const transparencyClass = isInactive
    ? "border-transparent"
    : "border-zinc-900";

  return (
    <div className={`timeline-period-info ml-2 ${transparencyClass}`}>
      <h2 className={`${changaSans.className} timeline-period-title text-zinc-950`}>
        {title}
      </h2>
      <p className="timeline-period-description text-sm">{description}</p>

      {(location || durationInMonths) && (
        <div className="flex gap-2 mt-6">
          {location && <LocationInfo location={location} />}
          {durationInMonths && (
            <DurationInfo durationInMonths={durationInMonths} />
          )}
        </div>
      )}
    </div>
  );
}
