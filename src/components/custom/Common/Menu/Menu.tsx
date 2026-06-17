"use client";

import { useNavigationPath } from "@/hooks/useNavigationPath";

import ActiveLink from "./ActiveLink";
import MenuItem from "./MenuItem";

export default function Menu() {
  const { pathname, activeLink, subpathSegments, inactiveLinks } =
    useNavigationPath();
  const ActiveIcon = activeLink?.icon;
  const shouldRenderShowcaseBreadcrumb =
    activeLink?.href === "/showcase" && subpathSegments.length > 0;

  return (
    <header className="w-screen bg-white/80 flex  justify-between lg:px-12 transition-all z-50">
      <div className="flex items-center gap-4 py-4 mx-auto">
        <div className="inactive-links flex items-center gap-8 mr-2">
          {inactiveLinks.map(({ href, icon: Icon, label }) => {
            return (
              <MenuItem key={href} href={href} icon={Icon} label={label} />
            );
          })}
        </div>

        <div className="divider w-px h-6 bg-gray-200" />

        <ActiveLink
          icon={ActiveIcon}
          activeHref={activeLink?.href}
          subpathSegments={subpathSegments}
          shouldRenderShowcaseBreadcrumb={shouldRenderShowcaseBreadcrumb}
          pathname={pathname}
        />
      </div>
    </header>
  );
}
