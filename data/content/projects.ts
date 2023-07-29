import { kebabCase } from "@/utils/utils";
import { Projects } from "types/project";

const projects: Projects[] = [
  {
    id: 0,
    title: "Hoobank UI",
    desc: "All the resources you will need to get a boost into economics.",
    img: "/static/projects/buildfaster.png",
    link: "https://hoobank-axl.vercel.app/",
    github: "https://github.com/choiruladamm/hoobank",
    tags: ["React", "NextJS", "TailwindCSS", "Javascript"],
  },
  {
    id: 1,
    title: "Hoobank UI",
    desc: "All the resources you will need to get a boost into economics.",
    img: "/static/projects/buildfaster.png",
    link: "https://hoobank-axl.vercel.app/",
    github: "https://github.com/choiruladamm/hoobank",
    tags: ["React", "NextJS", "TailwindCSS", "Javascript"],
  },
  {
    id: 2,
    title: "Hoobank UI",
    desc: "All the resources you will need to get a boost into economics.",
    img: "/static/projects/buildfaster.png",
    link: "https://hoobank-axl.vercel.app/",
    github: "https://github.com/choiruladamm/hoobank",
    tags: ["React", "NextJS", "TailwindCSS", "Javascript"],
  },
  {
    id: 3,
    title: "Hoobank UI",
    desc: "All the resources you will need to get a boost into economics.",
    img: "/static/projects/buildfaster.png",
    link: "https://hoobank-axl.vercel.app/",
    github: "https://github.com/choiruladamm/hoobank",
    tags: ["React", "NextJS", "TailwindCSS", "Javascript"],
  },
  {
    id: 4,
    title: "Hoobank UI",
    desc: "All the resources you will need to get a boost into economics.",
    img: "/static/projects/buildfaster.png",
    link: "https://hoobank-axl.vercel.app/",
    github: "https://github.com/choiruladamm/hoobank",
    tags: ["React", "NextJS", "TailwindCSS", "Javascript"],
  },
  {
    id: 5,
    title: "Hoobank UI",
    desc: "All the resources you will need to get a boost into economics.",
    img: "/static/projects/buildfaster.png",
    link: "https://hoobank-axl.vercel.app/",
    github: "https://github.com/choiruladamm/hoobank",
    tags: ["React", "NextJS", "TailwindCSS", "Javascript"],
  },
  {
    id: 6,
    title: "Hoobank UI",
    desc: "All the resources you will need to get a boost into economics.",
    img: "/static/projects/buildfaster.png",
    link: "https://hoobank-axl.vercel.app/",
    github: "https://github.com/choiruladamm/hoobank",
    tags: ["React", "NextJS", "TailwindCSS", "Javascript"],
  },
  {
    id: 7,
    title: "Hoobank UI",
    desc: "All the resources you will need to get a boost into economics.",
    img: "/static/projects/buildfaster.png",
    link: "https://hoobank-axl.vercel.app/",
    github: "https://github.com/choiruladamm/hoobank",
    tags: ["React", "NextJS", "TailwindCSS", "Javascript"],
  },
];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
