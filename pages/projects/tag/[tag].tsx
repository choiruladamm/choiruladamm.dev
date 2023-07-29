import projects from "@/data/content/projects";
import { kebabCase } from "@/utils/utils";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPage: GetStaticPaths = async () => {
  const allTags = [];
  projects.forEach((project) =>
    project.tags.forEach((tag) => {
      allTags.push(tag);
    })
  );

  const uniqueAllTags = [...new Set(allTags)];
  const allTagsPaths = uniqueAllTags.map((path) => ({
    params: { tag: `${kebabCase(path)}` },
  }));
  return {
    paths: allTagsPaths,
    fallback: false,
  };
};

// export const getStaticProps: GetStaticProps = async ({params}: {params: {tag: string}}) => {
  
// }

function TagPage() {
  return <div>TagPage</div>;
}

export default TagPage;
