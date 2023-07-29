import { Heading } from "@/components/projects";
import Page from "@/components/utility/Page";

function projects() {
  return (
    <Page
      currentPage="Projects"
      meta={{ title: "Projects", desc: "..." }}
    >
      <Heading />
    </Page>
  );
}

export default projects;
