"use client";

import { HourglassIcon } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import { DurationInfoProps } from "./content-item.types";

export default function DurationInfo({ durationInMonths }: DurationInfoProps) {
  const t = useTranslations("DurationInfo");

  return (
    <div>
      <div className="flex items-center gap-2 text-sm">
        <HourglassIcon size={16} weight="duotone" />
        <span>{t("months", { count: durationInMonths })}</span>
      </div>
    </div>
  );
}
