import Link from "next/link";
import { cn } from "@/helpers/cn";
import { NavbarListItem } from "@/components";
import { NavbarLisItemLinkProps } from "./types";

export const NavbarListItemLink = ({
  href,
  children,
  className,
  ...props
}: NavbarLisItemLinkProps) => {
  return (
    <NavbarListItem className={cn("p-0", className)}>
      <Link href={href} className="flex gap-2 items-center w-full p-2 rounded-lg" {...props}>{children}</Link>
    </NavbarListItem>
  );
};