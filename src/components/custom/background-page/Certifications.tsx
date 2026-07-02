import { CERTIFICATIONS } from "@/background-data";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollText } from "lucide-react";
import { cn } from "@/lib/utils";
import EducationItem from "./EducationItem/EducationItem";

type CertificationsProps = {
  title: string;
  iconColor?: string;
};

export default function Certifications({
  title,
  iconColor,
}: CertificationsProps) {
  return (
    <AccordionItem value="certifications">
      <AccordionTrigger
        sticky
        className="text-2xl pb-4 border-b border-gray-100"
      >
        <div className="flex items-center">
          <ScrollText size={20} className={cn("mr-3", iconColor)} />
          {title}
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-6 pb-8">
        <ul className="flex flex-col gap-4">
          {CERTIFICATIONS.map((certification) => (
            <EducationItem
              key={`${certification.name}-${certification.year}`}
              year={certification.year}
              name={certification.name}
              institution={certification.institution}
              certificateUrl={certification.certificateUrl}
              institutionUrl={certification.institutionUrl}
            />
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}
