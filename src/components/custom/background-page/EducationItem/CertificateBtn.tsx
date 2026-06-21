"use client";

import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { CertificateBtnProps } from "./education-item.types";

export default function CertificateBtn({
  openFor,
  certificateUrl = "#",
}: CertificateBtnProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <Link href={certificateUrl} target="_blank" rel="noopener noreferrer">
      <Button
        type="button"
        variant="ghost"
        className="ml-auto cursor-pointer hover:border-black hover:bg-blue-50 hover:text-blue-600 hover:scale-103 transition-all duration-200"
        aria-label={`Open details for ${openFor}`}
      >
        <ExternalLink />
        {isDesktop && `See certificate`}
      </Button>
    </Link>
  );
}
