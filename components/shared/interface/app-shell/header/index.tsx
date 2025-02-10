"use client";

import { ActionIcon, AppShell, Divider, Flex, Stack } from "@mantine/core";

import { useRouter } from "next/navigation";

import { UserDetails } from "@/components/shared/user";
import { MSSNLogo } from "@/icons/mssn-logo";
import clsx from "clsx";

type AppShellHeaderProps = {
  title: string;
  backHref?: string;
  options?: JSX.Element;
  showLinks?: boolean;
};

export function AppShellHeader({
  title,
  backHref,
  ...props
}: AppShellHeaderProps) {
  const { options, showLinks = true } = props;
  const { back } = useRouter();

  const heading = (
    <h1 className='text-lg sm:text-2xl text-primary-text-body font-bold'>
      {title}
    </h1>
  );

  return (
    <AppShell.Section
      top={0}
      pos='sticky'
      bg='white'
      component='header'
      style={{
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
      className={clsx(
        "border-l border-primary-text-normal z-50",
        "bg-primary-background-white backdrop-blur-2xl"
      )}
    >
      <Stack
        maw={1500}
        mx='auto'
        component='section'
        justify='space-between'
        flex={1}
        gap={0}
      >
        <Flex
          gap={36}
          align='center'
          justify='space-between'
          className='~px-1/8 py-2'
        >
          <Flex align='center' gap={6} hiddenFrom='lg'>
            <MSSNLogo height={45} width={45} />
          </Flex>

          <Flex gap={12} align='center' className='lg:ml-auto'>
            <UserDetails />
          </Flex>
        </Flex>

        <Divider className='border-gray-2' />

        <Flex
          gap={20}
          py={16}
          align='center'
          justify='space-between'
          className={clsx("~px-1/8 hidden lg:flex", {
            "!flex": !showLinks,
          })}
        >
          <Flex gap={10} align='center'>
            {backHref && (
              <ActionIcon
                onClick={back}
                size={32}
                variant='app-shell'
                __vars={{
                  "--ai-color": "var(--primary-text-body)",
                }}
              >
                {/* <ArrowBack /> */}
              </ActionIcon>
            )}
            {heading}
          </Flex>
        </Flex>
      </Stack>
    </AppShell.Section>
  );
}
