import { Button } from "@/components/ui/button";
import { ExternalLink, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { ProjectInfoButtonsProps } from "./showcase.types";

/**
 * Renders action buttons for each project card.
 *
 * - "Mais detalhes" navigates to the project details route.
 * - "Visitar site" is shown only when a live URL is available.
 */
export default function ProjectInfoButtons({
  slug,
  webLink,
}: ProjectInfoButtonsProps) {
  const router = useRouter();

  return (
    <footer className="project-info-buttons">
      <Button
        // Internal navigation to the showcase details page.
        onClick={() => router.push(`/showcase/${slug}`)}
        data-icon="inline-start"
        size="lg"
        className="mr-4 text-md cursor-pointer hover:scale-105 hover:shadow-md transition-all duration-300"
      >
        <Plus />
        Mais detalhes
      </Button>
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
