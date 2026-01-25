import { changaSans } from "@/lib/fonts";
import { ProjectListProps } from "./content-item.types";
import ProjectButton from "./ProjectButton";

export default function ProjectsList({ projects }: ProjectListProps) {
  return (
    <div className="pl-9 mt-2">
      <h3
        className={`${changaSans.className} pb-2 text-lg text-gray-500 font-semibold`}
      >
        Projects
      </h3>

      <ul className="list-disc list-inside">
        {projects?.map((project, index) => {
          const isNotUniqueOrLast =
            projects.length !== 1 && index < projects.length - 1;

          return (
            <ProjectButton
              key={project.name}
              project={project}
              isNotUniqueOrLast={isNotUniqueOrLast}
            />
          );
        })}
      </ul>
    </div>
  );
}
