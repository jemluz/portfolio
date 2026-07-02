"use client";

import { useState, useEffect, useRef } from "react";
import { useNavigationPath } from "@/hooks/useNavigationPath";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import MenuItem from "./MenuItem";
import ActiveLink from "./ActiveLink";
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
  const menuRef = useRef<HTMLElement>(null);
  const shouldRenderShowcaseBreadcrumb =
    activeLink?.href === "/showcase" && subpathSegments.length > 0;

  const languages = [
    { code: "en-US", label: "🇺🇸 EN" },
    { code: "pt-BR", label: "🇧🇷 PT-BR" },
    { code: "es-ES", label: "🇪🇸 ES" },
    { code: "fr-FR", label: "🇫🇷 FR" },
  ];

  const [currentLocale, setCurrentLocale] = useState<string>("en-US");

  useEffect(() => {
    if (typeof document === "undefined") return;

    try {
      const cookieLocale = document.cookie
        .split("; ")
        .find((row) => row.startsWith("NEXT_LOCALE="))
        ?.split("=")[1];

      setCurrentLocale(cookieLocale || "en-US");
    } catch (error) {
      setCurrentLocale("en-US");
      console.error("Error reading NEXT_LOCALE cookie:", error);
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined" || typeof window === "undefined")
      return;

    const menuElement = menuRef.current;
    if (!menuElement) return;

    const rootElement = document.documentElement;
    const updateMenuHeight = () => {
      const height = menuElement.getBoundingClientRect().height;
      rootElement.style.setProperty("--menu-height", `${height}px`);
    };

    updateMenuHeight();

    const supportsResizeObserver = typeof ResizeObserver !== "undefined";
    const resizeObserver = supportsResizeObserver
      ? new ResizeObserver(updateMenuHeight)
      : null;

    if (resizeObserver) {
      resizeObserver.observe(menuElement);
    }

    window.addEventListener("resize", updateMenuHeight);

    return () => {
      window.removeEventListener("resize", updateMenuHeight);
      resizeObserver?.disconnect();
    };
  }, []);

  function handleChange(newLocale: string) {
    if (typeof document !== "undefined") {
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
      if (typeof window !== "undefined") window.location.reload();
    }
  }

  return (
    <header
      ref={menuRef}
      className="w-screen bg-white/80 flex  justify-between lg:px-12 transition-all z-50"
    >
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
                languages.find(({ code }) => code === currentLocale)?.label
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
