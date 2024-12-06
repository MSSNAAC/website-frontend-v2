"use clients";

import { Anchor, type AnchorProps } from "@mantine/core";
import { usePathname } from "next/navigation";

import clsx from "clsx";
import Link from "next/link";

interface NavItemProps extends AnchorProps {
  item: {
    label: string;
    path: string;
  };
}

export default function NavItem({ item, ...props }: NavItemProps) {
  const pathname = usePathname();
  const { label, path } = item;

  const isActive =
    path === "/" ? pathname === "/" : pathname.startsWith(String(path));

  return (
    <Anchor
      component={Link}
      href={path}
      variant='hover'
      w='fit-content'
      fz={14}
      className={clsx("text-gray-10 py-2 capitalize font-jakarta", {
        "text-primary": isActive,
      })}
      {...props}
    >
      {label}
    </Anchor>
  );
}
