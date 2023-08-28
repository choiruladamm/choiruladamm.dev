import { Button } from "@/components/global";
import { Heading, Projects } from "@/components/projects";
import Page from "@/components/utility/Page";
import projects, { allKebabTags, allTags } from "@/data/content/projects";
import { kebabArray, kebabCase } from "@/utils/utils";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { More } from "@/components/projects";

export const getStaticPaths: GetStaticPaths = async () => {
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
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: { tag: string };
}) => {
  const tag = params.tag;
  const filteredProjects = projects.filter((project) =>
    [...kebabArray(project.tags)].includes(tag)
  );
  return {
    props: JSON.parse(
      JSON.stringify({
        filteredProjects,
        tag: tag,
      })
    ),
  };
};

function PostPage({ filteredProjects, tag }) {
  const capsTag = allTags[allKebabTags.indexOf(tag)];
  return (
    <Page
      currentPage="Projects"
      meta={{
        title: `${capsTag} Projects`,
        desc: `A showcase for all of my ${capsTag} projects.`,
      }}
    >
      <Heading tag={capsTag} />
      <Projects overwriteProjects={filteredProjects} />

      <Link href="/projects">
        <Button className="w-full max-w-sm md:max-w-2xl">
          View All
        </Button>
      </Link>
      <More />
    </Page>
  );
}

export default PostPage;
