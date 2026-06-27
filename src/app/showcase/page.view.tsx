"use client";

import Filters from "@/components/custom/showcase-page/Filters";
import { ProjectItem } from "@/components/custom/showcase-page/ProjectItem";
import Title from "@/components/custom/showcase-page/Title";
import { PROJECTS } from "@/showcase-data";
import { ProjectTypeEnum } from "@/types/showcase.types";
import { useMemo, useState } from "react";

export default function ShowcasePage() {
  const [typeFilter, setTypeFilter] = useState<ProjectTypeEnum | "all">("all");
  const [orderFilter, setOrderFilter] = useState<"asc" | "desc">("desc");

  const processedProjects = useMemo(() => {
    const filteredProjects =
      typeFilter === "all"
        ? [...PROJECTS]
        : PROJECTS.filter((project) =>
            project.projectTypeTags.includes(typeFilter as ProjectTypeEnum),
          );

    return filteredProjects.sort((a, b) => {
      const dateA = a.year * 12 + a.month;
      const dateB = b.year * 12 + b.month;
      return orderFilter === "asc" ? dateA - dateB : dateB - dateA;
    });
  }, [typeFilter, orderFilter]);

  return (
    <main className="flex flex-col items-start w-fit mx-auto gap-8 px-4 pt-8 ">
      <Title />
      <Filters setTypeFilter={setTypeFilter} setOrderFilter={setOrderFilter} />

      <div className="flex flex-col gap-16 lg:gap-8 mx-6">
        {processedProjects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
