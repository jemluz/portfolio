import { colorMap, MonthBulletProps } from "./content-item.types";
import { numberToMonthPTBR } from "./month-bullet.utils";

export default function MonthBullet({
  color,
  month,
  isGrayScale = false,
}: MonthBulletProps) {
  // Use grayscale when isGrayScale is true (for next content), otherwise use the assigned color
  const { bg, border } = isGrayScale
    ? { bg: "bg-neutral-400", border: "border-neutral-400" }
    : colorMap[color];

  return (
    <div className="flex">
      <div className="relative flex items-center justify-center w-5 h-5 mr-2">
        <div className={`absolute w-2 h-2 rounded-full ${bg}`}></div>
        <div
          className={`absolute w-4 h-4 rounded-full border-2 ${border}`}
        ></div>
      </div>
      <span className="text-sm text-gray-500 pb-2">{` ${numberToMonthPTBR(month)}`}</span>
    </div>
  );
}
