import { WebsiteFooter } from "@/components/website/footer";
import { Navbar } from "@/components/website/navbar";

import { Fragment, PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren<{}>;

export default function Layout({ children }: LayoutProps) {
  return (
    <Fragment>
      <Navbar />
      {children}
      <WebsiteFooter />
    </Fragment>
  );
}
