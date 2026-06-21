import { ProjectItem } from "@/components/custom/showcase-page/ProjectItem";
import { PROJECTS } from "@/showcase-data";

export default function ShowcasePage() {
  return (
    <main className="flex flex-col items-start w-fit mx-auto gap-12 px-4 pt-8">
      {PROJECTS.slice()
        .reverse()
        .map((project) => (
          <ProjectItem key={crypto.randomUUID()} project={project} />
        ))}
    </main>
  );
}
