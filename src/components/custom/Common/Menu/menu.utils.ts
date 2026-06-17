import type { LucideIcon } from "lucide-react";
import {
  House,
  Building2,
  BriefcaseBusiness,
  FlagTriangleRight,
} from "lucide-react";

export type NavLinkMatchMode = "exact" | "prefix";

export type NavLinkItem = {
  href: string;
  icon: LucideIcon;
  label: string;
  matchMode: NavLinkMatchMode;
};

export const MENU_LINKS: NavLinkItem[] = [
  {
    href: "/home",
    icon: House,
    label: "Home",
    matchMode: "exact",
  },
  {
    href: "/background",
    icon: Building2,
    label: "Background",
    matchMode: "prefix",
  },
  {
    href: "/showcase",
    icon: BriefcaseBusiness,
    label: "Showcase",
    matchMode: "prefix",
  },
  {
    href: "/timeline",
    icon: FlagTriangleRight,
    label: "Timeline",
    matchMode: "prefix",
  },
];
