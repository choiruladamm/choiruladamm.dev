import { Heading, Projects } from "@/components/projects";
import Page from "@/components/utility/Page";

function projects() {
  return (
    <Page
      currentPage="Projects"
      meta={{ title: "Projects", desc: "..." }}
    >
      <Heading />
      <Projects />
    </Page>
  );
}

export default projects;
