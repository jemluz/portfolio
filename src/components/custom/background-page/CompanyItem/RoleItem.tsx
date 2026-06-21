import { cn } from "@/lib/utils";

import RoleContent from "./RoleContent";
import { RoleItemProps } from "./company-item.types";

export default function RoleItem({
  title,
  period,
  description,
  className,
}: RoleItemProps) {
  return (
    <div className={cn("role flex md:flex-row gap-2 shrink-0", className)}>
      <div className="left-column w-8 shrink-0 mr-4 pt-1 border-r-2 border-e-gray-200"></div>

      <RoleContent title={title} period={period} description={description} />
    </div>
  );
}
