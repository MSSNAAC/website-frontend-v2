import { Statistics } from "@/components/website/about/statistics";
import { About } from "@/components/website/home/about";
import { AlFaedah } from "@/components/website/home/al-faedah";
import { Donate } from "@/components/website/home/donate";
import { Faqs } from "@/components/website/home/faqs";
import { HeroSection } from "@/components/website/home/hero";
import { Projects } from "@/components/website/home/projects";

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
