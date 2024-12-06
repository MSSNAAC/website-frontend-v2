import { Faqs } from "@/components/website/faqs";
import { HeroSection } from "@/components/website/hero";
import { Newsletter } from "@/components/website/newletter";

import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <Faqs />
      <Newsletter />
    </Fragment>
  );
}
