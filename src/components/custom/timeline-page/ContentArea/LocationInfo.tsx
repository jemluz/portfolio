import { MapPinAreaIcon } from "@phosphor-icons/react";
import { LocationInfoProps } from "./content-item.types";

export default function LocationInfo({ location }: LocationInfoProps) {
  return (
    <div className="flex items-center gap-2 mr-4 text-sm">
      <MapPinAreaIcon size={16} weight="duotone" />
      <span>{location}</span>
    </div>
  );
}
