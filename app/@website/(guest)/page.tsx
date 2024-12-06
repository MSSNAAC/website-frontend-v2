import { Faqs } from "@/components/website/faqs";
import { Newsletter } from "@/components/website/newletter";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Faqs />
      <Newsletter />
    </Fragment>
  );
}
