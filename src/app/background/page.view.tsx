import { Accordion } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

import WorkHistory from "@/components/custom/background-page/WorkHistory";
import Education from "@/components/custom/background-page/Education";
import Certifications from "@/components/custom/background-page/Certifications";
import Skills from "@/components/custom/background-page/Skills";
import LanguageLevels from "@/components/custom/background-page/LanguageLevels";
import DownloadButtons from "@/components/custom/background-page/DownloadButtons";
import Title from "@/components/custom/background-page/Title";
import { useTranslations } from "next-intl";

export default function Background() {
  const t = useTranslations("BackgroundPage");

  return (
    <div
      className={cn(
        "mx-6 md:mx-24 lg:mx-auto lg:max-w-[80%] xl:max-w-[1024px] flex flex-col gap-10 pt-16",
      )}
    >
      <Title />

      <DownloadButtons />

      <Accordion
        type="multiple"
        defaultValue={[
          "work-history",
          "education",
          "certifications",
          "skills",
          "language-levels",
        ]}
        className="w-full"
      >
        <WorkHistory />
        <Education title={t("education")} iconColor="text-blue-500" />
        <Certifications
          title={t("certificates")}
          iconColor="text-emerald-500"
        />
        <LanguageLevels />
        <Skills />
      </Accordion>
    </div>
  );
}
