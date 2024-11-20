import type { Metadata } from "next";

import { PropsWithChildren } from "react";
import { Providers } from "@/components/shared/providers";

import "@mantine/core/styles.layer.css";
import "@mantine/dates/styles.layer.css";
import "@mantine/spotlight/styles.layer.css";

import "react-toastify/dist/ReactToastify.css";

import "@/styles/accent.scss";
import "@/styles/index.css";
import "@/packages/variables/index.css";

type LayoutProps = PropsWithChildren<{}>;

export const metadata: Metadata = {
  title: "MSSN Akinyele Area Council",
};

export default async function RootLayout({ children }: LayoutProps) {
  return (
    <html lang='en'>
      <body>
        <main className='scrollbar-none'>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
