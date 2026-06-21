import { cn } from "@/lib/utils";

import CompanyHeader from "./CompanyHeader";
import { CampanyItemProps } from "./company-item.types";
import RoleItem from "./RoleItem";

export default function CompanyItem({
  company,
  companyLogo,
  location,
  startDate,
  endDate,
  roles,
  formatPeriod,
  className,
}: CampanyItemProps) {
  return (
    <li className={cn("company-card flex flex-col gap-4 group", className)}>
      <CompanyHeader
        company={company}
        companyLogo={companyLogo}
        period={formatPeriod(startDate, endDate)}
        location={location}
      />

      {roles.map((role) => (
        <RoleItem
          key={`${role.title}-${role.startDate}`}
          title={role.title}
          period={formatPeriod(role.startDate, role.endDate)}
          description={role.description}
        />
      ))}
    </li>
  );
}
