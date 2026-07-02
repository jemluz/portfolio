import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { GithubLogoIcon } from "@phosphor-icons/react";

import { ProjectInfoButtonsProps } from "./showcase.types";

/**
 * Renders action buttons for each project card.
 *
 * - "Github" navigates to the project's GitHub repository.
 * - "Visitar site" is shown only when a live URL is available.
 */
export default function ProjectInfoButtons({
  githubLink,
  webLink,
}: ProjectInfoButtonsProps) {
  return (
    <footer className="project-info-buttons">
      {githubLink && (
        <Button
          asChild
          data-icon="inline-start"
          size="lg"
          className="mr-4 text-md cursor-pointer hover:scale-105 hover:shadow-md transition-all duration-300"
        >
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <GithubLogoIcon />
            Github
          </a>
        </Button>
      )}
      {webLink && (
        <Button
          asChild
          variant="link"
          data-icon="inline-start"
          size="lg"
          className="text-md  cursor-pointer hover:scale-105 transition-all duration-300"
        >
          <a href={webLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink />
            Visitar site
          </a>
        </Button>
      )}
    </footer>
  );
}
