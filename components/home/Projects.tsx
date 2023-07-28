import projects from "@/data/content/projects";
import { SectionTitle } from "../global";
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
          <div className="w-full max-w-sm px-8 py-3 mx-auto mt-8 text-center transition-colors border rounded-full cursor-pointer md:max-w-2xl border-fun-pink whitespace-nowrap text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white">
            View all project
          </div>
        </Link>
      </div>
    </div>
  );
}
