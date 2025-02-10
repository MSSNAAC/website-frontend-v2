"use client";

import { Activities } from "@/components/website/about/activities";
import { HeroSection } from "@/components/website/about/hero";
import { Mission } from "@/components/website/about/mission";
import { Statistics } from "@/components/website/about/statistics";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <Statistics />
      <Mission />
      <Activities />
    </Fragment>
  );
}
