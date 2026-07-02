import { cn } from "@/lib/utils";

import KeyArchievementList from "./KeyArchievementList";
import { RoleContentProps, RoleHeaderProps } from "./company-item.types";
import { useLocale } from "next-intl";

export default function RoleContent({
  title,
  period,
  description,
  className,
}: RoleContentProps) {
  const locale = useLocale();

  return (
    <div
      className={cn("right-column flex flex-col mt-2 mb-4 gap-1.5", className)}
    >
      <RoleHeader title={title} period={period} />
      <KeyArchievementList items={description[locale as keyof typeof description]} />
    </div>
  );
}

function RoleHeader({ title, period }: RoleHeaderProps) {
  return (
    <>
      <h4 className="text-lg font-semibold text-gray-800 mt-1">{title}</h4>
      <span className="text-sm font-semibold tracking-wide text-gray-500">
        {period}
      </span>
    </>
  );
}
