import { EDUCATION } from "@/background-data";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import EducationItem from "./EducationItem/EducationItem";

type EducationProps = {
  title: string;
  iconColor?: string;
};

export default function Education({ title, iconColor }: EducationProps) {
  return (
    <AccordionItem value="education">
      <AccordionTrigger
        sticky
        className="text-2xl pb-4 border-b border-gray-100"
      >
        <div className="flex items-center">
          <GraduationCap size={20} className={cn("mr-3", iconColor)} />
          {title}
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-6 pb-6">
        <div className="flex flex-col gap-8">
          {EDUCATION.map((edu, i) => (
            <EducationItem
              key={`${edu.institution}-${edu.degree}-${i}`}
              year={edu.year}
              degree={edu.degree}
              institution={edu.institution}
              certificateUrl={edu.certificateUrl}
              institutionUrl={edu.institutionUrl}
            />
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
