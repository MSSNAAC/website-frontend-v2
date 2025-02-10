import { WebsiteFooter } from "@/components/website/footer";
import { Navbar } from "@/components/website/navbar";
import { Box } from "@mantine/core";

import { Fragment, type PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren;

export default function Layout({ children }: LayoutProps) {
  return (
    <Fragment>
      <Box className='relative min-h-screen' component='section'>
        <Navbar />
        {children}
        <WebsiteFooter />
      </Box>
    </Fragment>
  );
}
