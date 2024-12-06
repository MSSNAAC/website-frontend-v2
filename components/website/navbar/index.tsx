"use client";

import { MSSNLogo } from "@/icons/mssn-logo";
import { PAGES } from "@/packages/libraries";
import { Burger, Button, Flex, Popover, Stack, Title } from "@mantine/core";
import { useEffect, useState } from "react";

import clsx from "clsx";
import Link from "next/link";
import NavItem from "./nav-item";

export function Navbar() {
  const [opened, toggle] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight - 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Flex
      component='header'
      className={clsx("w-full rounded-full ", {
        "translate-y-0": isVisible,
        "hidden -translate-y-full": !isVisible,
      })}
      justify={{ base: "space-evenly", lg: "space-between" }}
      align='center'
      top={35}
      pos='sticky'
      mx='auto'
      maw={900}
      mih={65}
      style={{
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        zIndex: 1000,
      }}
    >
      <Flex
        justify='center'
        align='center'
        component='ul'
        className=' font-sans hidden lg:flex'
        flex={1}
        gap={18}
      >
        <NavItem item={{ label: "About", path: PAGES.ABOUT }} />
        <NavItem item={{ label: "Branches", path: PAGES.BRANCHES }} />
        <NavItem item={{ label: "Blog", path: PAGES.BLOG }} />
      </Flex>

      <Flex gap={12} align='center' component={Link} href={PAGES.WEBSITE}>
        <MSSNLogo />
        <Title
          order={2}
          fw={500}
          className='hover:text-accent-10 text-accent-12 cursor-pointer'
        >
          MSSN AKINYELE
        </Title>
      </Flex>

      <Flex
        gap={18}
        justify='center'
        align='center'
        component='ul'
        className='hidden lg:flex'
        flex={1}
      >
        <NavItem item={{ label: "Donate", path: PAGES.DONATE }} />
        <NavItem item={{ label: "Contact", path: PAGES.CONTACT }} />
        <Button
          size='sm'
          color='gray'
          variant='outline'
          className='font-jakarta'
          fz={14}
          component={Link}
          href={PAGES.LOGIN}
        >
          Login
        </Button>
      </Flex>

      <Popover
        radius='md'
        trapFocus={false}
        transitionProps={{
          transition: "pop-top-right",
        }}
        opened={opened}
        onChange={toggle}
        classNames={{
          dropdown: "bg-white/80 mt-4",
        }}
        styles={{
          dropdown: {
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          },
        }}
        position='bottom-end'
        withArrow={false}
      >
        <Popover.Target>
          <Burger
            hiddenFrom='lg'
            opened={opened}
            onClick={() => toggle(!opened)}
            aria-label='Toggle navigation'
            transitionDuration={500}
            className='relative'
            size='md'
          />
        </Popover.Target>

        <Popover.Dropdown
          className='border rounded-lg shadow-2xl border-primary-border-subtle '
          miw={300}
        >
          <Stack gap={12} py={10}>
            <NavItem item={{ label: "About", path: PAGES.ABOUT }} />
            <NavItem item={{ label: "Branches", path: PAGES.BRANCHES }} />
            <NavItem item={{ label: "Blog", path: PAGES.BLOG }} />
            <NavItem item={{ label: "Donate", path: PAGES.DONATE }} />
            <NavItem item={{ label: "Contact", path: PAGES.CONTACT }} />
            <Button
              mt={10}
              size='sm'
              className='font-jakarta'
              fz={14}
              component={Link}
              href={PAGES.LOGIN}
            >
              Login
            </Button>
          </Stack>
        </Popover.Dropdown>
      </Popover>
    </Flex>
  );
}
