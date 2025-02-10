import clsx from "clsx";
import Link from "next/link";

import { getCookie } from "cookies-next";
import { LogoutCurve, User } from "iconsax-react";
import { toString } from "lodash";

import { Avatar, Flex, Menu, Stack } from "@mantine/core";

import { ArrowDownIcon } from "@/icons/arrow-down";
import { APP, makePath, PAGES } from "@/packages/libraries";

const userDetails = {
  fullname: "Adbdulrasheed",
  userType: "Admin",
  picture: null,
  email: "admin@mssnaac.org",
};
export function UserDetails() {
  const userId = toString(getCookie(APP.USER_ID));

  return (
    <Menu
      shadow='md'
      position='bottom-end'
      styles={{
        item: {
          padding: "14px",
          borderRadius: 0,
        },
        dropdown: {
          padding: 0,
        },
      }}
    >
      <Menu.Target>
        <Flex align='center' gap={8} className='cursor-pointer'>
          <Avatar
            src={null}
            alt='User'
            className={clsx("w-9 h-9 sm:w-12 sm:h-12 rounded-full", {})}
          />

          <Flex gap={12} className={clsx("hidden sm:flex")} align='center'>
            <Stack gap={1}>
              <p className={clsx("prose-sm/medium")}>{userDetails.fullname}</p>
              <p className={clsx("text-xs")}>{userDetails.userType}</p>
            </Stack>

            <ArrowDownIcon className='cursor-pointer' />
          </Flex>
        </Flex>
      </Menu.Target>

      <Menu.Dropdown
        miw={230}
        className='shadow-lg overflow-hidden'
        variant='action'
      >
        <Menu.Item
          classNames={{
            item: "hover:bg-transparent cursor-auto",
          }}
        >
          <Flex align='center' gap={8}>
            <Avatar
              src={userDetails?.picture}
              alt={userDetails.fullname}
              size={40}
            />
            <Stack gap={1}>
              <p className='text-primary-text-body prose-sm/medium'>
                {userDetails.fullname}
              </p>
              <p className='text-xs'>{userDetails?.email}</p>
            </Stack>
          </Flex>
        </Menu.Item>
        <Menu.Divider />

        <Menu.Item
          leftSection={<User size={18} />}
          component={Link}
          href={makePath(PAGES.DASHBOARD, PAGES.PROFILE)}
        >
          My Profile
        </Menu.Item>
        <Menu.Item color='red' leftSection={<LogoutCurve size={18} />}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
