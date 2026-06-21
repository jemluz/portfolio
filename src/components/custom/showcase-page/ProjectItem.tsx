"use client";

import { numberToMonthPTBR } from "@/lib/utils";
import { Project } from "@/showcase-data";

import YearAndMonth from "./YearAndMonth";
import ProjectItemInfo from "./ProjectItemInfo";
import ProjectItemImage from "./ProjectItemImage";

export function ProjectItem({ project }: { project: Project }) {
  const {
    year,
    month,
    images,
    title,
    category,
    description,
    languageStack,
    slug,
    links,
  } = project;

  const hasLanguageStack = languageStack && languageStack.length > 0;

  const webLink = links.find((link) => link.type === "web")?.url ?? "#";

  return (
    <article className="project-item flex flex-col">
      <header className="flex items-center mb-6 relative z-20">
        <YearAndMonth year={year} month={numberToMonthPTBR(month)} />
      </header>

      <section className="flex w-full flex-col items-start gap-8 md:gap-16 lg:flex-row pl-10 py-4 border-l-2 border-gray-50">
        <ProjectItemImage
          images={images}
          title={title}
          className="flex justify-center self-center w-[380px]"
        />

        <ProjectItemInfo
          title={title}
          slug={slug}
          category={category}
          description={description}
          languageStack={hasLanguageStack ? languageStack : undefined}
          webLink={webLink}
          className="flex flex-col flex-1 pt-4 lg:pt-8 relative z-20 min-w-[300px] md:min-w-[380px] max-w-[380px]"
        />
      </section>
    </article>
  );
}
