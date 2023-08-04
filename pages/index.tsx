import Page from "@/components/utility/Page";
import { CTA, Hero, Projects, Skills } from "@/components/home";

export default function Home() {
  return (
    <Page currentPage="Home" meta={{ desc: "..." }}>
      <Hero />
      <div className="mt-16 space-y-32">
        <Projects />
        <Skills />
      </div>
      <CTA />
    </Page>
  );
}
