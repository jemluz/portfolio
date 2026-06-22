import { EXPERIENCES } from "@/background-data";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin } from "lucide-react";
import { CompanyItem } from "./CompanyItem";
import { formatExperiencePeriod } from "./background.utils";

export default function WorkHistory() {
  return (
    <AccordionItem value="work-history">
      <AccordionTrigger
        sticky
        className="text-2xl pb-4 border-b border-gray-100"
      >
        <div className="flex items-center">
          <MapPin size={20} className="mr-3 text-purple-500" />
          Work History
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-6 pb-8">
        <ul className="flex flex-col gap-10">
          {EXPERIENCES.map((exp) => (
            <CompanyItem
              key={exp.company}
              company={exp.company}
              companyLogo={exp.companyLogo}
              location={exp.location}
              startDate={exp.startDate}
              endDate={exp.endDate}
              roles={exp.roles}
              formatPeriod={formatExperiencePeriod}
            />
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}
