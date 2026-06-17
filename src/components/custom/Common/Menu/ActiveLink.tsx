import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import Breadcrumb from "./Breadcrumb";

type ActiveLinkProps = {
  icon?: LucideIcon;
  activeHref?: string;
  subpathSegments: string[];
  shouldRenderShowcaseBreadcrumb: boolean;
  pathname: string;
};

export default function ActiveLink({
  icon: Icon,
  activeHref,
  subpathSegments,
  shouldRenderShowcaseBreadcrumb,
  pathname,
}: ActiveLinkProps) {
  const linkHref = activeHref ?? pathname;

  // Add a space after the leading slash for better readability
  const activeHrefLabel = activeHref ? activeHref.replace(/^\//, "/ ") : "";

  const rootLinkColorClass = shouldRenderShowcaseBreadcrumb
    ? "text-black hover:text-orange-800"
    : "text-black";

  const breadcrumbSegments = shouldRenderShowcaseBreadcrumb
    ? subpathSegments
    : [];

  return (
    <div className="active-link flex items-center gap-3 bg-gray-50/80 px-4 py-2 ml-2 rounded-lg border border-gray-100/50">
      {Icon ? <Icon className="w-4 h-4 text-black" strokeWidth={2} /> : null}
      <div className="text-sm font-semibold text-black tracking-wide flex items-center gap-2 min-w-0">
        {activeHref ? (
          <>
            <Link
              href={linkHref}
              className={`transition-colors inline-block shrink-0  ${rootLinkColorClass}`}
            >
              {activeHrefLabel}
            </Link>
            {breadcrumbSegments.map((segment) => (
              <Breadcrumb key={segment} segment={segment} />
            ))}
          </>
        ) : (
          <span>{pathname}</span>
        )}
      </div>
    </div>
  );
}
