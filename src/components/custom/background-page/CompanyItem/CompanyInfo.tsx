import { cn } from "@/lib/utils";
import { CompanyInfoProps } from "./company-item.types";

export default function CompanyInfo({
  company,
  period,
  className,
}: CompanyInfoProps) {
  return (
    <div className={cn("company-info flex flex-col", className)}>
      <h3 className="text-xl font-bold text-gray-900 transition-colors">
        {company}
      </h3>
      <span className="text-sm font-medium text-gray-400 tabular-nums tracking-wide">
        {period}
      </span>
    </div>
  );
}
