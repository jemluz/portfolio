"use client";

import Link from "next/link";
import { useLocale } from "next-intl";

import { getMonthName } from "@/lib/utils";
import { Project } from "@/showcase-data";
import type { TimelineLocale } from "@/timeline-data";

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

  const locale = useLocale() as TimelineLocale;
  const descriptionText =
    typeof description === "string"
      ? description
      : (description?.[locale] ??
        description?.["en-US"] ??
        Object.values(description ?? {})[0] ??
        "");

  const hasLanguageStack = languageStack && languageStack.length > 0;

  const webLink = links.find((link) => link.type === "web")?.url;
  const githubLink = links.find((link) => link.type === "github")?.url;

  return (
    <article className="project-item flex flex-col">
      <header className="flex items-center mb-6 relative z-20">
        <YearAndMonth year={year} month={getMonthName(month, locale)} />
      </header>

      <section className="flex w-full flex-col items-start gap-16 lg:flex-row pl-10 py-4 border-l-2 border-gray-50">
        <Link href={"/showcase/" + slug} rel="noopener noreferrer">
          <ProjectItemImage
            images={images}
            title={title}
            className="flex justify-center self-center w-[380px]"
          />
        </Link>

        <ProjectItemInfo
          title={title}
          slug={slug}
          category={category}
          description={descriptionText}
          languageStack={hasLanguageStack ? languageStack : undefined}
          webLink={webLink}
          githubLink={githubLink}
          className="project-item-infoflex flex-col flex-1 pt-4 lg:pt-8 relative z-20 min-w-[300px] md:min-w-[340px] max-w-[380px]"
        />
      </section>
    </article>
  );
}
