import Link from "next/link";
import { EducationDetailsProps } from "./education-item.types";

export default function EducationDetails({
  year,
  degree,
  institution,
  institutionUrl = "#",
}: EducationDetailsProps) {
  return (
    <div className="flex gap-6">
      <span className="pt-1 text-sm font-medium text-gray-400 tabular-nums tracking-wide">
        {year}
      </span>

      <div className="flex flex-col gap-1 flex-1">
        <Link href={institutionUrl} target="_blank" rel="noopener noreferrer">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 cursor-pointer transition-colors">
            {degree}
          </h3>
        </Link>
        <span className="text-[15px] font-medium text-gray-500">
          {institution}
        </span>
      </div>
    </div>
  );
}
