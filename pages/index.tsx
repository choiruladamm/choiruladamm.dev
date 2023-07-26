import Image from "next/image";
import { Inter } from "next/font/google";
import Page from "@/components/utility/Page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Page currentPage="Home" meta={{desc: "..."}}>
      <div className="text-white">Hello Bang</div>
    </Page>
  );
}
