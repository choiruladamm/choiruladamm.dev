import { kebabCase } from "@/utils/utils";
import { Projects } from "types/project";

const projects: Projects[] = [
  {
    id: 0,
    title: "Hoobank",
    desc: "Landing page design for next generation payment method.",
    img: "/static/projects/hoobank.jpg",
    link: "https://hoobank-axl.vercel.app/",
    github: "https://github.com/choiruladamm/hoobank",
    tags: ["React", "TailwindCSS", "Javascript"],
  },
  {
    id: 1,
    title: "Todo List",
    desc: "Simple todo-list create using typescript and react hot toast.",
    img: "/static/projects/todo-list.jpg",
    link: "https://todo-axel.vercel.app/",
    github: "https://github.com/choiruladamm/typescript-todos",
    tags: ["React", "TailwindCSS", "Typescript"],
  },
  {
    id: 2,
    title: "Game Store",
    desc: "React shopping chart using typescript & rawg game api.",
    img: "/static/projects/game-store.jpg",
    link: "https://game-shopping-cart.vercel.app/",
    tags: ["React", "Sass", "Typescript", "API"],
  },
];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
