import { cn } from "@/lib/utils";

import CompanyHeader from "./CompanyHeader";
import { CampanyItemProps } from "./company-item.types";
import RoleItem from "./RoleItem";
import { formatExperiencePeriod } from "../background.utils";
import { useLocale } from "next-intl";

export default function CompanyItem({
  company,
  companyLogo,
  location,
  startDate,
  endDate,
  roles,
  className,
}: CampanyItemProps) {
  const locale = useLocale(); // Get the current locale using the useLocale hook
  const period = formatExperiencePeriod(startDate, endDate, locale) ?? "";

  return (
    <li className={cn("company-card flex flex-col gap-4 group", className)}>
      <CompanyHeader
        company={company}
        companyLogo={companyLogo}
        period={period}
        location={location}
      />

      {roles.map((role) => (
        <RoleItem
          key={`${role.title}-${role.startDate}`}
          title={role.title}
          period={
            formatExperiencePeriod(role.startDate, role.endDate, locale) ?? ""
          }
          description={role.description}
        />
      ))}
    </li>
  );
}
