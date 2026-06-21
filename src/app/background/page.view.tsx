import { Accordion } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

import WorkHistory from "@/components/custom/background-page/WorkHistory";
import Education from "@/components/custom/background-page/Education";
import Certifications from "@/components/custom/background-page/Certifications";
import Skills from "@/components/custom/background-page/Skills";
import LanguageLevels from "@/components/custom/background-page/LanguageLevels";

export default function Background() {
  return (
    <div
      className={cn(
        "mx-6 md:mx-24 lg:mx-auto lg:max-w-[60%] flex flex-col gap-16 pt-16",
      )}
    >
      {/* Intro Section */}
      <section className="flex flex-col gap-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Background
        </h1>
        <p className="text-md lg:text-lg text-gray-600">
          Frontend Engineer with 7 years of experience, entirely on B2B field,
          building scalable web and mobile applications (web mainly). Proficient
          in Typescript, specialized in React and Next.js, with a strong
          foundation in UI/UX. Also have worked with Angular and Vue, and
          Flutter.
        </p>
        <p></p>
      </section>

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
        <Education title="Education" iconColor="text-blue-500" />
        <Certifications title="Certifications" iconColor="text-emerald-500" />
        <LanguageLevels />
        <Skills />
      </Accordion>
    </div>
  );
}
