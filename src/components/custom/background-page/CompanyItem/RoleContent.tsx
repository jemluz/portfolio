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

  function getNormalizedDescription(description: {
    "en-US": string[];
    "pt-BR": string[];
  }) {
    if (locale === "fr-FR" || locale === "en-US") {
      return description["en-US"];
    }

    return description["pt-BR"];
  }

  return (
    <div
      className={cn("right-column flex flex-col mt-2 mb-4 gap-1.5", className)}
    >
      <RoleHeader title={title} period={period} />
      <KeyArchievementList items={getNormalizedDescription(description)} />
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
