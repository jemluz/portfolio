import Link from "next/link";
import { Button } from "../../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";
import { ProjectButtonProps } from "./content-item.types";
import { cn } from "@/lib/utils";

export default function ProjectButton({
  project,
  isNotUniqueOrLast,
}: ProjectButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="secondary"
          className={cn(
            "text-orange-600 hover:text-white bg-orange-50  hover:bg-orange-500 cursor-pointer",
            isNotUniqueOrLast && "mr-4",
          )}
        >
          <Link
            href={project.url}
            className="text-bold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.name.charAt(0).toUpperCase()}
          </Link>
        </Button>
      </TooltipTrigger>

      <TooltipContent side="bottom" sideOffset={8}>
        {project.name}
      </TooltipContent>
    </Tooltip>
  );
}
