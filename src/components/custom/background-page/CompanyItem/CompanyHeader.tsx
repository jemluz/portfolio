import { cn } from "@/lib/utils";

import CompanyInfo from "./CompanyInfo";
import { CompanyHeaderProps } from "./company-item.types";
import CompanyLogo from "./CompanyLogo";
import CompanyLocation from "./CompanyLocation";

export default function CompanyHeader({
  company,
  companyLogo,
  period,
  location,
  className,
}: CompanyHeaderProps) {
  return (
    <div
      className={cn(
        "company-header flex justify-between items-center",
        className,
      )}
    >
      <div className="flex items-center gap-6">
        <CompanyLogo company={company} companyLogo={companyLogo} />
        <CompanyInfo company={company} period={period} />
      </div>

      <CompanyLocation location={location} />
    </div>
  );
}
