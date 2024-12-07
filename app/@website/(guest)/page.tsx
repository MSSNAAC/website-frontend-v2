import { AlFaedah } from "@/components/website/al-faedah";
import { Faqs } from "@/components/website/faqs";
import { HeroSection } from "@/components/website/hero";
import { Newsletter } from "@/components/website/newletter";
import { Statistics } from "@/components/website/statistics";

import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <Statistics />
      <AlFaedah />
      <Faqs />
      <Newsletter />
    </Fragment>
  );
}
