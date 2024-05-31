'use client'

import { NavbarListItem } from "@/components";
import { cn } from "@/helpers/cn";
import { NavbarListItemButtonProps } from "./types";

export const NavbarListItemButton = ({
  children,
  className,
  ...props
}: NavbarListItemButtonProps) => {
  return (
    <NavbarListItem className={cn("p-0", className)}>
      <button className="flex gap-2 items-center w-full p-2 rounded-lg" {...props}>{children}</button>
    </NavbarListItem>
  );
};