"use client";

import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { CertificateBtnProps } from "./education-item.types";
import { useLocale, useTranslations } from "next-intl";

export default function CertificateBtn({
  name,
  certificateUrl = "#",
}: CertificateBtnProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const t = useTranslations("BackgroundPage");
  const locale = useLocale();

  function getLocalizedName(name: { [key: string]: string }) {
    if (locale === "fr-FR" || locale === "en-US") {
      return name["en-US"];
    }

    if (!name) {
      return "";
    }

    return name["pt-BR"];
  }

  return (
    <Link href={certificateUrl} target="_blank" rel="noopener noreferrer">
      <Button
        type="button"
        variant="ghost"
        className="ml-auto cursor-pointer hover:border-black hover:bg-blue-50 hover:text-blue-600 hover:scale-103 transition-all duration-200"
        aria-label={`Open details for ${getLocalizedName(name)}`}
      >
        <ExternalLink />
        {isDesktop && t("seeCertificate")}
      </Button>
    </Link>
  );
}
