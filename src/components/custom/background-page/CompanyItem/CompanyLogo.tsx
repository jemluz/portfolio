import { Building } from "lucide-react";

import { cn } from "@/lib/utils";
import { CompanyLogoProps } from "./company-item.types";
import { env } from "@/env";

export default function CompanyLogo({
  company,
  companyLogo,
  className,
}: CompanyLogoProps) {
  const s3BucketUrl = env.NEXT_PUBLIC_S3_BUCKET_URL;

  return (
    <figure className={cn("company-logo w-16 h-16", className)}>
      {companyLogo ? (
        <img
          src={`${s3BucketUrl}/${companyLogo}`}
          alt={`${company} logo`}
          className="w-full h-full object-cover rounded-md border-1 border-gray-200 shadow-sm"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-orange-100 rounded-md border-1 border-orange-200 shadow-sm">
          <Building className="w-6 h-6 text-orange-500" />
        </div>
      )}
    </figure>
  );
}
