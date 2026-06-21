import { SKILLS } from "@/background-data";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Wrench } from "lucide-react";
import TechTag from "./TechTag";

export default function Skills() {
  return (
    <AccordionItem value="skills">
      <AccordionTrigger
        sticky
        className="text-2xl pb-4 border-b border-gray-100"
      >
        <div className="flex items-center">
          <Wrench size={20} className="mr-3 text-amber-500" />
          Skills & Technologies
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-6 pb-8">
        <ul className="flex flex-wrap gap-3">
          {SKILLS.map((skill) => (
            <TechTag key={skill} skill={skill} />
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}
