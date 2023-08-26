import projects from "@/data/content/projects";
import { Button, SectionTitle } from "../global";
import { ProjectCard } from "../projects";
import Link from "next/link";

export function Projects() {
  return (
    <div className="relative flex flex-col justify-between pt-8 text-left">
      <div id="learnmore">
        <SectionTitle title="Here are a few of my list projects." />
      </div>
      <div className="grid items-start grid-cols-1 gap-12 md:gap-5 md:grid-cols-3">
        {projects.slice(0, 3).map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
      <div className="relative w-full mt-2">
        <Link href="/projects">
          <Button className="w-full max-w-sm md:max-w-2xl">
            View all project
          </Button>
        </Link>
      </div>
    </div>
  );
}
