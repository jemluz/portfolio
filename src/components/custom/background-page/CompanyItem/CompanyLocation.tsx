import { MapPin } from "lucide-react";

import { cn } from "@/lib/utils";
import { CompanyLocationProps } from "./company-item.types";

export default function CompanyLocation({
  location,
  className,
}: CompanyLocationProps) {
  return (
    <p
      className={cn(
        "flex gap-1 pb-1 text-sm font-medium text-gray-600 text-right",
        className,
      )}
    >
      {location}
      <MapPin size={18} className="ml-1 text-black" />
    </p>
  );
}
