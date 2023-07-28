import Page from "@/components/utility/Page";
import { Hero, Projects, Skills } from "@/components/home";

export default function Home() {
  return (
    <Page currentPage="Home" meta={{ desc: "..." }}>
      <Hero />
      <div className="mt-20 space-y-32">
        <Projects />
        <Skills />
      </div>
    </Page>
  );
}
