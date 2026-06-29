"use client";

import { useNavigationPath } from "@/hooks/useNavigationPath";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import MenuItem from "./Menu/MenuItem";
import ActiveLink from "./Menu/ActiveLink";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Menu() {
  const { pathname, activeLink, subpathSegments, inactiveLinks } =
    useNavigationPath();
  const ActiveIcon = activeLink?.icon;
  const shouldRenderShowcaseBreadcrumb =
    activeLink?.href === "/showcase" && subpathSegments.length > 0;

  const languages = [
    { code: "en-US", label: "🇺🇸 EN" },
    { code: "pt-BR", label: "🇧🇷 PT-BR" },
    { code: "es-ES", label: "🇪🇸 ES" },
    { code: "fr-FR", label: "🇫🇷 FR" },
  ];

  function getCurrentLanguage() {
    const currentLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("NEXT_LOCALE="))
      ?.split("=")[1];

    return currentLocale || "en-US";
  }

  function handleChange(newLocale: string) {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

    window.location.reload();
  }

  return (
    <header className="w-screen bg-white/80 flex  justify-between lg:px-12 transition-all z-50">
      <NavigationMenu
        viewport={false}
        className="flex items-center mx-auto w-full max-w-none"
      >
        <NavigationMenuList className="mr-4 flex items-center gap-4 py-4">
          <NavigationMenuItem className="inactive-links mr-2 flex items-center gap-8">
            {inactiveLinks.map(({ href, icon: Icon, label }) => {
              return (
                <MenuItem key={href} href={href} icon={Icon} label={label} />
              );
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

        <Select onValueChange={(newLocale) => handleChange(newLocale)}>
          <SelectTrigger className="w-[120px] border-0 shadow-none">
            <SelectValue
              placeholder={
                languages.find(({ code }) => code === getCurrentLanguage())
                  ?.label
              }
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {languages.map(({ code, label }) => {
                return (
                  <SelectItem key={code} value={code}>
                    {label}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </NavigationMenu>
    </header>
  );
}
