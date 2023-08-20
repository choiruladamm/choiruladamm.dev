/* eslint-disable @next/next/no-img-element */

import { kebabCase } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function ProjectCard({ project }) {
  return (
    <div
      key={project.id}
      className="flex flex-col max-w-sm mx-auto projects-center md:projects-start md:justify-center"
    >
      <a
        href={project.link || project.github}
        target="_blank"
        className="relative w-full p-2 transition border rounded-xl border-fun-gray hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink will-change-projectCard"
      >
        <Image
          width={400}
          height={266}
          src={project.img}
          alt={project.title}
          className="w-full rounded-md"
        />
      </a>
      <div className="w-full mt-5">
        <div className="flex justify-between projects-center">
          <a href={project.link || project.github}>
            <h3 className="text-lg font-bold">{project.title}</h3>
          </a>
          <div className="flex space-x-2">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                <Image
                  width={18}
                  height={18}
                  alt="Link Icon"
                  src="/static/icons/external-link.svg"
                />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <Image
                  width={18}
                  height={18}
                  alt="Link Icon"
                  src="/static/icons/github.svg"
                />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm text-left text-fun-gray">{project.desc}</p>
        <ul className="flex flex-wrap items-start mt-2 -ml-2 list-none">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Link href={`/projects/tag/${kebabCase(tag)}`}>
                <div className="px-2 py-1 m-1 text-sm rounded-lg cursor-pointer bg-fun-pink-dark hover:opacity-75">
                  {tag}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
