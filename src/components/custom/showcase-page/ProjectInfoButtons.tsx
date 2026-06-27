import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";
import { ProjectInfoButtonsProps } from "./showcase.types";
import { GithubLogoIcon } from "@phosphor-icons/react";

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
  const router = useRouter();

  return (
    <footer className="project-info-buttons">
      {githubLink && (
        <Button
          // Navigate to the project's GitHub repository.
          onClick={() => router.push(githubLink)}
          data-icon="inline-start"
          size="lg"
          className="mr-4 text-md cursor-pointer hover:scale-105 hover:shadow-md transition-all duration-300"
        >
          <GithubLogoIcon />
          Github
        </Button>
      )}
      {webLink && (
        <Button
          // Navigate to the project's live site when provided.
          onClick={() => router.push(webLink)}
          variant="link"
          data-icon="inline-start"
          size="lg"
          className="text-md  cursor-pointer hover:scale-105 transition-all duration-300"
        >
          <ExternalLink />
          Visitar site
        </Button>
      )}
    </footer>
  );
}
