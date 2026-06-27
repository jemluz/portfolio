import { cn } from "@/lib/utils";
import LanguageStackList from "./LanguageStackList";
import ProjectInfoButtons from "./ProjectInfoButtons";
import { ProjectItemInfoProps } from "./showcase.types";
import { courstardSans } from "@/lib/fonts";

/**
 * Renders the textual details for a project item.
 *
 * Includes title/category, description, optional language tags,
 * and the primary action buttons.
 */
export default function ProjectItemInfo({
  title,
  category,
  description,
  languageStack,
  className,
  webLink,
  githubLink,
}: ProjectItemInfoProps) {
  const hasLanguageStack = languageStack && languageStack.length > 0;

  return (
    <section
      className={cn("project-item-info", className)}
      aria-label={`Detalhes do projeto ${title}`}
    >
      <h3 className="text-3xl font-bold mb-6 tracking-tight text-gray-900 flex items-center gap-3 flex-wrap">
        {title}
        <span className="text-gray-400 font-medium tracking-normal text-2xl">
          [{category}]
        </span>
      </h3>

      <p
        className={cn(
          "text-gray-500 mb-8 max-w-lg leading-[1.8] whitespace-pre-line text-[15px]",
          courstardSans.className,
        )}
      >
        {description}
      </p>

      {/* Show language tags only when the project has a stack defined. */}
      {hasLanguageStack && <LanguageStackList languageStack={languageStack} />}

      <ProjectInfoButtons githubLink={githubLink} webLink={webLink} />
    </section>
  );
}
