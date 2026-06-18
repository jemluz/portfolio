"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { MENU_LINKS } from "@/components/custom/Common/Menu/menu.utils";

type UseNavigationPathState = {
  pathname: string;
  activeLink: (typeof MENU_LINKS)[number] | undefined;
  baseHref: string;
  subpathSegments: string[];
  inactiveLinks: (typeof MENU_LINKS)[number][];
};

/**
 * Derives current navigation state from the active route pathname.
 *
 * @returns Route-aware state used to render the navigation and breadcrumb UI.
 *
 * @example
 * ```tsx
 * const { activeLink, subpathSegments, inactiveLinks } = useNavigationPath();
 *
 * // Returned object example:
 * // {
 * //   pathname: "/showcase/123",
 * //   activeLink: { href: "/showcase", label: "Showcase", matchMode: "prefix" },
 * //   baseHref: "/showcase",
 * //   subpathSegments: ["123"],
 * //   inactiveLinks: [
 * //     { href: "/home", label: "Home", matchMode: "exact" },
 * //     { href: "/timeline", label: "Timeline", matchMode: "prefix" },
 * //   ],
 * // }
 * ```
 */
export function useNavigationPath(): UseNavigationPathState {
  const pathname = usePathname();

  return useMemo(() => {
    // Find the active link based on the current pathname and the defined MENU_LINKS.
    const activeLink = MENU_LINKS.find(({ href, matchMode }) =>
      matchMode === "exact" ? pathname === href : pathname.startsWith(href),
    );

    // Determine the base href for the active link and extract any subpath segments from the pathname.
    const baseHref = activeLink?.href ?? pathname;
    const subpathSegments = pathname
      .slice(baseHref.length)
      .split("/")
      .filter(Boolean);

    // Find the inactive links based on the current pathname and the defined MENU_LINKS.
    const inactiveLinks = MENU_LINKS.filter(({ href, matchMode }) =>
      matchMode === "exact" ? pathname !== href : !pathname.startsWith(href),
    );

    return {
      pathname,
      activeLink,
      baseHref,
      subpathSegments,
      inactiveLinks,
    };
  }, [pathname]);
}
