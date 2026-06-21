import { CEFR_LABEL_BY_LEVEL, CEFR_LEVELS, LANGUAGES } from "@/background-data";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Languages } from "lucide-react";

export default function LanguageLevels() {
  return (
    <AccordionItem value="language-levels">
      <AccordionTrigger
        sticky
        className="text-2xl pb-4 border-b border-gray-100"
      >
        <div className="flex items-center">
          <Languages size={20} className="mr-3 text-rose-500" />
          Languages
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-6">
        <ul className="flex gap-12">
          {LANGUAGES.map((language) => (
            <li
              key={language.name}
              className="flex flex-col items-start gap-4 pb-4"
            >
              <span className="text-base font-semibold text-gray-900">
                {language.name}
              </span>

              <div className="flex flex-col items-start gap-2">
                <div
                  className="flex gap-1"
                  aria-label={`Language level ${language.level}`}
                >
                  {CEFR_LEVELS.map((level, index) => {
                    const currentLevelIndex = CEFR_LEVELS.indexOf(
                      language.level,
                    );
                    const isActive = index <= currentLevelIndex;

                    return (
                      <span
                        key={`${language.name}-${level}`}
                        className={cn(
                          "h-2.5 w-6 rounded",
                          isActive ? "bg-black" : "bg-gray-200",
                        )}
                      />
                    );
                  })}
                </div>

                <span className="text-sm text-gray-500">
                  {CEFR_LABEL_BY_LEVEL[language.level]} ({language.level})
                </span>
              </div>
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}
