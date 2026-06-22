import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { env } from "@/env";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";

import WorkHistory from "@/components/custom/background-page/WorkHistory";
import Education from "@/components/custom/background-page/Education";
import Certifications from "@/components/custom/background-page/Certifications";
import Skills from "@/components/custom/background-page/Skills";
import LanguageLevels from "@/components/custom/background-page/LanguageLevels";
import { resumePdfENUrl, resumePdfPTUrl, summary } from "@/background-data";

export default function Background() {
  const s3BucketUrl = `${env.NEXT_PUBLIC_S3_BUCKET_URL}`;

  return (
    <div
      className={cn(
        "mx-6 md:mx-24 lg:mx-auto lg:max-w-[60%] flex flex-col gap-10 pt-16",
      )}
    >
      {/* Intro Section */}
      <section className="flex flex-col gap-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Background
        </h1>
        <p className="text-md lg:text-lg text-gray-600">{summary}</p>
      </section>

      <div className="flex flex-col mb-6 gap-2">
        <h3 className="font-semibold text-gray-500">Download Resume</h3>

        <div className="flex gap-2">
          <Button asChild variant="outline" className="gap-2" size={"sm"}>
            <a
              href={`${s3BucketUrl}/${resumePdfENUrl}`}
              target="_blank"
              download="resume.pdf"
              aria-label="Download resume as PDF"
            >
              <Download size={16} />
              EN (PDF)
            </a>
          </Button>
          <Button asChild variant="outline" className="gap-2" size={"sm"}>
            <a
              href={`${s3BucketUrl}/${resumePdfPTUrl}`}
              target="_blank"
              download="resume.pdf"
              aria-label="Download resume as PDF"
            >
              <Download size={16} />
              PT (PDF)
            </a>
          </Button>
        </div>
      </div>

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
