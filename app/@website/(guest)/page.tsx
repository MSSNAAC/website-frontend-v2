import { About } from "@/components/website/about";
import { AlFaedah } from "@/components/website/al-faedah";
import { Donate } from "@/components/website/donate";
import { Faqs } from "@/components/website/faqs";
import { HeroSection } from "@/components/website/hero";
import { Projects } from "@/components/website/projects";
import { Statistics } from "@/components/website/statistics";

import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <Statistics />
      <About />
      <Projects />
      <Donate />
      <AlFaedah />
      <Faqs />
    </Fragment>
  );
}
