import Page from "@/components/utility/Page";
import { CTA, Hero, Projects, Skills } from "@/components/home";

export default function Home() {
  return (
    <Page currentPage="Home" meta={{ desc: "..." }}>
      <Hero />
      <Projects />
      <Skills />
      <CTA />
    </Page>
  );
}
