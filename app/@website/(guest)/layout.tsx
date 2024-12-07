import { WebsiteFooter } from "@/components/website/footer";
import { Navbar } from "@/components/website/navbar";
import { Box } from "@mantine/core";

import { Fragment, type PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren;

export default function Layout({ children }: LayoutProps) {
  return (
    <Fragment>
      <Box className='relative min-h-screen' component='section'>
        <Box
          component='figure'
          className='absolute inset-0 bg-cover'
          style={{
            backgroundImage: "url('/images/random-mosque-banner.jpeg')",
            // backgroundAttachment: "fixed",
          }}
        />
        <Box className='absolute inset-0 bg-white/80' component='figure' />
        <Box className='relative z-10' component='section'>
          <Navbar />
          {children}
          <WebsiteFooter />
        </Box>
      </Box>
    </Fragment>
  );
}
