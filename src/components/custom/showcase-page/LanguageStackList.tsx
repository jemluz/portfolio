import { FILES_LIST } from "@/showcase-data";
import FileTagLink from "./FileTagLink";
import { LanguageStackListProps } from "./showcase.types";
import { cn } from "@/lib/utils";
import { changaSans } from "@/lib/fonts";
import { CodeXml } from "lucide-react";

export default function LanguageStackList({
  languageStack,
}: LanguageStackListProps) {
  const hasLanguageStack = languageStack && languageStack.length > 0;
  const tagCycleSeconds = 1.8;
  const tagStepSeconds = hasLanguageStack
    ? tagCycleSeconds / languageStack.length
    : 0;

  console.log("languageStack", languageStack);
  if (!hasLanguageStack) {
    return null;
  }

  return (
    <>
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
    </>
  );
}
