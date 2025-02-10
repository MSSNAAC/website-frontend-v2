"use client";

import { AppShell, Divider, Flex, ScrollArea, Stack } from "@mantine/core";
import { getCookie } from "cookies-next";

import { AppShellButton } from "@/components/shared/interface/app-shell/button";
import { APP, PAGES } from "@/packages/libraries";

import { HomeTrendDownIcon } from "@/icons/home-trend-down";
import { MSSNLogo } from "@/icons/mssn-logo";

type TemplateProps = React.PropsWithChildren<{}>;

export default function Template({ children }: TemplateProps) {
  const collapsedNav = getCookie(APP.EXPANDED_NAVBAR);
  const opened = true;

  return (
    <AppShell
      bg='accent.12'
      navbar={{
        width: opened ? 260 : 95,
        breakpoint: "lg",
        collapsed: { mobile: true },
      }}
      styles={{
        navbar: {
          zIndex: "100 !important",
        },
      }}
    >
      <AppShell.Navbar
        withBorder={false}
        py={28}
        px={opened ? 0 : 12}
        style={{
          alignItems: opened ? "unset" : "center",
        }}
      >
        <AppShell.Section>
          <Flex>
            <MSSNLogo height={45} width={45} />
          </Flex>

          <Divider mt={24} />

          <AppShell.Section
            grow
            component={ScrollArea}
            className='scrollbar-none ~pt-2\1/8'
          >
            <Stack gap={8}>
              <AppShellButton
                leftSection={<HomeTrendDownIcon />}
                href={PAGES.DASHBOARD}
                label={"Overview"}
                opened={opened}
              />
            </Stack>
          </AppShell.Section>
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main component={Flex} h='100dvh' className='overflow-auto'>
        <Stack gap={0} flex={1} className='bg-primary-text-normal'>
          {children}
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}
