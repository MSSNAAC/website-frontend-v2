import { WebsiteFooter } from "@/components/website/footer";
import { Navbar } from "@/components/website/navbar";
import { Box } from "@mantine/core";

import { Fragment, type PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren;

export default function Layout({ children }: LayoutProps) {
  return (
    <Fragment>
      <div className='relative min-h-screen'>
        <Box
          className='absolute inset-0 bg-cover'
          style={{
            backgroundImage: "url('/images/random-mosque-banner.jpeg')",
            // backgroundAttachment: "fixed",
          }}
        />

        <Box className='absolute inset-0 bg-white/90' />

        <div className='relative z-10'>
          <Navbar />
          {children}
          <WebsiteFooter />
        </div>
      </div>
    </Fragment>
  );
}
