"use client";
import { HeroSection } from "@/components/website/about/hero";
import { Statistics } from "@/components/website/about/statistics";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <Statistics />
    </Fragment>
  );
}
