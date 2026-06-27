import { FILES_LIST } from "@/showcase-data";
import FileTagLink from "./FileTagLink";
import { LanguageStackListProps } from "./showcase.types";
import { cn } from "@/lib/utils";
import { changaSans } from "@/lib/fonts";
import { CodeXml } from "lucide-react";

/**
 * Renders the project language/extension tags with a staggered pulse animation.
 *
 * The list keeps a fixed cycle duration and distributes each tag delay across
 * the total number of items so cadence remains consistent.
 */
export default function LanguageStackList({
  languageStack,
}: LanguageStackListProps) {
  const hasLanguageStack = languageStack && languageStack.length > 0;
  // Fixed loop duration for the full tag animation set.
  const tagCycleSeconds = 1.8;
  // Stagger each tag evenly inside the cycle.
  const tagStepSeconds = hasLanguageStack
    ? tagCycleSeconds / languageStack.length
    : 0;

  console.log("languageStack", languageStack);
  if (!hasLanguageStack) {
    return null;
  }

  return (
    <div className="flex flex-col w-full">
      <h4
        className={cn(
          "flex w-fit items-center text-[1rem] font-weight-[700] mb-4 text-black tracking-wide",
          changaSans.className,
        )}
      >
        <CodeXml size={16} className="mr-2" />
        Linguagens / Extensões
      </h4>
      <ul
        className="flex flex-wrap gap-2.5 mb-10"
        aria-label="Lista de linguagens utilizadas"
      >
        {/* Render each tag with delayed pulse so items do not animate in sync. */}
        {languageStack.map((tag, index) => (
          <FileTagLink
            key={crypto.randomUUID()}
            language={FILES_LIST[tag]}
            index={index}
            tagStepSeconds={tagStepSeconds}
            tagCycleSeconds={tagCycleSeconds}
          />
        ))}
      </ul>
    </div>
  );
}
