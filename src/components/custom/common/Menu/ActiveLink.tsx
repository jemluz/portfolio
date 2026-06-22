import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import { NavigationMenuLink } from "@/components/ui/navigation-menu";

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
  // Determine if the active link is an exact match to the current pathname for styling purposes.
  const linkHref = activeHref ?? pathname;
  const isExactActive = pathname === linkHref;

  // Keep root route as "/" but render it visually as "/home" in the menu.
  const activeHrefLabel = activeHref
    ? activeHref === "/"
      ? "Home"
      : activeHref.replace(/^\//, "/ ")
    : "";

  const rootLinkColorClass = shouldRenderShowcaseBreadcrumb
    ? "text-black hover:text-orange-800"
    : "text-black";

  // Only render breadcrumb segments for the "Showcase" page when there are subpath segments to display.
  const breadcrumbSegments = shouldRenderShowcaseBreadcrumb
    ? subpathSegments
    : [];

  return (
    <div className="active-link flex items-center gap-3 bg-gray-50/80 px-4 py-2 ml-2 rounded-lg border border-gray-100/50">
      {Icon ? <Icon className="w-4 h-4 text-black" strokeWidth={2} /> : null}
      <div className="text-sm font-semibold text-black tracking-wide flex items-center gap-2 min-w-0">
        {activeHref ? (
          <>
            <NavigationMenuLink asChild active={isExactActive}>
              <Link
                href={linkHref}
                aria-current={isExactActive ? "page" : undefined}
                className={`transition-colors inline-block shrink-0 ${rootLinkColorClass}`}
              >
                {activeHrefLabel}
              </Link>
            </NavigationMenuLink>
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
