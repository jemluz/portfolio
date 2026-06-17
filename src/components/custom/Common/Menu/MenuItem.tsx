import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

type MenuItemProps = {
  href: string;
  icon: LucideIcon;
  label: string;
};

export default function MenuItem({ href, icon: Icon, label }: MenuItemProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <NavigationMenuLink asChild>
          <Link
            href={href}
            aria-label={label}
            title={label}
            className="text-gray-400 hover:text-black focus-visible:text-black transition-colors"
          >
            <Icon className="w-5 h-5" strokeWidth={1.5} />
          </Link>
        </NavigationMenuLink>
      </TooltipTrigger>
      <TooltipContent side="bottom" sideOffset={8}>
        {label}
      </TooltipContent>
    </Tooltip>
  );
}
