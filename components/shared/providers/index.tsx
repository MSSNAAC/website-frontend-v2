"use client";

import type { ReactNode } from "react";

import { Bounce, ToastContainer } from "react-toastify";
import { FavIcon } from "./favicon";
import { CustomMantineProvider } from "./mantine";
import { ReactQueryProvider } from "./tanstack/react-query";

import NextTopLoader from "nextjs-toploader";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ReactQueryProvider>
      <FavIcon />
      <NextTopLoader
        showSpinner={false}
        color="var(--accent-10)"
        height={4}
        crawlSpeed={500}
      />
      <CustomMantineProvider>{children}</CustomMantineProvider>
      <ToastContainer
        stacked
        draggable
        position="top-right"
        theme="colored"
        transition={Bounce}
        className="z-[999] min-w-96"
      />
    </ReactQueryProvider>
  );
}
