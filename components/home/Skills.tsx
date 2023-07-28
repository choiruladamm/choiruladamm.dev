/* eslint-disable @next/next/no-img-element */

import SkillsIcons from "./SkillsIcons";
import { skills } from "@/data/content/skills";

export function Skills() {
  return (
    <div className="relative flex flex-col justify-between md:flex-row">
      <h2 className="relative w-full mb-10 mr-0 text-3xl font-bold text-center md:text-left md:max-w-lg md:mr-10 md:mb-0 md:w-max">
        I got the experience
        <br />
        Here is my toolbelt for success.
        <SkillsIcons />
      </h2>
      <div className="relative grid items-center justify-center w-full max-w-lg grid-cols-4 mx-auto md:mx-0 gap-x-8 gap-y-12 sm:gap-8 md:gap-12 sm:grid-cols-5 place-content-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            title={skill.title}
            className="flex flex-col items-center justify-center w-10 mx-auto"
          >
            <img src={skill.icon} alt={skill.title} style={skill.style} />
            <p className="mt-3 text-xs font-bold text-fun-gray opacity-80">
              {skill.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
