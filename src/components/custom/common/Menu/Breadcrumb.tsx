import { ChevronRight } from "lucide-react";

type BreadcrumbProps = {
  segment: string;
};

export default function Breadcrumb({ segment }: BreadcrumbProps) {
  return (
    <span className="flex items-center gap-2">
      <ChevronRight className="w-3.5 h-3.5 text-gray-400" strokeWidth={2.5} />
      <span className="text-gray-900">/ {segment}</span>
    </span>
  );
}
