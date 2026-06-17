"use client";

import { useNavigationPath } from "@/hooks/useNavigationPath";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

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
      <NavigationMenu viewport={false} className="mx-auto w-full max-w-none">
        <NavigationMenuList className="mx-auto flex items-center gap-4 py-4">
          <NavigationMenuItem className="inactive-links mr-2 flex items-center gap-8">
            {inactiveLinks.map(({ href, icon: Icon, label }) => {
              return <MenuItem key={href} href={href} icon={Icon} label={label} />;
            })}
          </NavigationMenuItem>

          <NavigationMenuItem aria-hidden="true">
            <div className="divider h-6 w-px bg-gray-200" />
          </NavigationMenuItem>

          <NavigationMenuItem>
            <ActiveLink
              icon={ActiveIcon}
              activeHref={activeLink?.href}
              subpathSegments={subpathSegments}
              shouldRenderShowcaseBreadcrumb={shouldRenderShowcaseBreadcrumb}
              pathname={pathname}
            />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
