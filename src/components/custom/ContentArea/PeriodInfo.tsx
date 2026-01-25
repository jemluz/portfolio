import { Background } from "@/background-data";
import { changaSans } from "@/lib/fonts";
import LocationInfo from "./LocationInfo";
import DurationInfo from "./DurationInfo";

export default function PeriodInfo({
  title,
  description,
  location,
  durationInMonths,
  isInactive = false,
}: Omit<Background, "year" | "month" | "projects" | "id">) {
  const transparencyClass = isInactive
    ? "border-transparent"
    : "border-zinc-900";

  return (
    <div className={`ml-2 pl-[26px]  border-l-[2px] ${transparencyClass}`}>
      <h2 className={`${changaSans.className} text-zinc-950 text-2xl`}>
        {title}
      </h2>
      <p className="text-sm max-w-[300px]">{description}</p>

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
