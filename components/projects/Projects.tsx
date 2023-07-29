import projects from "@/data/content/projects";
import { Projects } from "types/project";
import { ProjectCard } from "./ProjectCard";

type ProjectProps = {
  overwriteProjects?: Projects[];
};

export function Projects({ overwriteProjects }: ProjectProps) {
  const projectList = overwriteProjects ? overwriteProjects : projects;

  return (
    <div className="grid items-start grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projectList.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
