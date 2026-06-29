import { EXPERIENCES } from "@/background-data";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin } from "lucide-react";
import { CompanyItem } from "./CompanyItem";
import { useTranslations } from "next-intl";

export default function WorkHistory() {
  const t = useTranslations("BackgroundPage");

  return (
    <AccordionItem value="work-history">
      <AccordionTrigger
        sticky
        className="text-2xl pb-4 border-b border-gray-100"
      >
        <div className="flex items-center">
          <MapPin size={20} className="mr-3 text-purple-500" />
          {t("workHistory")}
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
            />
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}
