import type { Metadata } from "next";

import { Providers } from "@/components/shared/providers";
import { getUserType } from "@/packages/actions";
import { USER_TYPE } from "@/packages/libraries";
import type { PropsWithChildren, ReactNode } from "react";

import "@mantine/core/styles.layer.css";
import "@mantine/dates/styles.layer.css";
import "@mantine/spotlight/styles.layer.css";

import "leaflet/dist/leaflet.css";
import "react-toastify/dist/ReactToastify.css";

import "@/packages/variables/index.css";
import "@/styles/accent.scss";
import "@/styles/index.css";

export const metadata: Metadata = {
  title: "MSSN Akinyele Area Council",
};

type LayoutProps = PropsWithChildren<{
  website: ReactNode;
  admin: ReactNode;
}>;

export default async function RootLayout({
  children,
  website,
  admin,
}: LayoutProps) {
  const userType = await getUserType();

  const view: Record<PropertyKey, ReactNode> = {
    [USER_TYPE.ADMIN]: admin,
    [USER_TYPE.GUEST]: website,
  };

  return (
    <html lang='en'>
      <body>
        <main className='scrollbar-none'>
          <Providers>
            <div className='flex h-full flex-col'>
              {children}
              {view[userType]}
            </div>
          </Providers>
        </main>
      </body>
    </html>
  );
}
