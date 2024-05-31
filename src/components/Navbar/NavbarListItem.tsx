import { cn } from "@/helpers/cn";
import { NavbarLisItemProps } from "./types";

export const NavbarListItem = ({
  children,
  className,
  ...props
}: NavbarLisItemProps) => {
  return (
    <li
      className={cn(
        "my-2 p-2 rounded-lg bg-transparent hover:bg-indigo-400/40 hover:text-slate-100 cursor-pointer flex gap-2 items-center",
        className
      )}
      {...props}
    >
      {children}
    </li>
  );
};