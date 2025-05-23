import { kebabCase } from '@/utils/utils';
import { Projects } from 'types/project';

const projects: Projects[] = [
  {
    id: 4,
    title: 'Converter Files',
    desc: 'Free converter files to pdf, png, jpg, and webp using ffmpeg.',
    img: '/static/projects/converter-files.jpg',
    link: 'https://edito-six.vercel.app/',
    github: 'https://github.com/choiruladamm/converter-files',
    tags: ['NextJS', 'TailwindCSS', 'Typescript', 'FFmpeg'],
  },
  {
    id: 5,
    title: 'Notion Clone',
    desc: 'Notion App clone using convex and clerk for authentication.',
    img: '/static/projects/donotion-app.jpg',
    link: 'https://donotion-app.vercel.app/',
    github: 'https://github.com/choiruladamm/donotion-app',
    tags: ['NextJS', 'TailwindCSS', 'Typescript', 'Convex'],
  },
  {
    id: 2,
    title: 'Game Store',
    desc: 'React shopping chart using typescript & rawg game api.',
    img: '/static/projects/game-store.jpg',
    link: 'https://game-shopping-cart.vercel.app/',
    tags: ['React', 'Sass', 'Typescript', 'API'],
  },
  {
    id: 0,
    title: 'Hoobank',
    desc: 'Landing page design for next generation payment method.',
    img: '/static/projects/hoobank.jpg',
    link: 'https://hoobank-axl.vercel.app/',
    github: 'https://github.com/choiruladamm/hoobank',
    tags: ['React', 'TailwindCSS', 'Javascript'],
  },
  {
    id: 1,
    title: 'Auth JWT',
    desc: 'Login Register using NextAuth Prisma PostgreSQL (Supabase).',
    img: '/static/projects/auth.png',
    link: 'https://next-auth-chrl.vercel.app/',
    github: 'https://github.com/choiruladamm/next-auth-app',
    tags: ['NextJS', 'TailwindCSS', 'Typescript'],
  },
  {
    id: 3,
    title: 'Todo List',
    desc: 'Simple todo-list create using typescript and react hot toast.',
    img: '/static/projects/todo-list.jpg',
    link: 'https://todo-axel.vercel.app/',
    github: 'https://github.com/choiruladamm/typescript-todos',
    tags: ['React', 'TailwindCSS', 'Typescript'],
  },
];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
