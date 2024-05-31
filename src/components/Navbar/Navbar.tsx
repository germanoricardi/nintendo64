import {
  AwardIcon,
  GamepadIcon,
  HomeIcon,
  NavbarList,
  NavbarListItemLink,
  RouteIcon,
  UserIcon,
} from "@/components";
import { cn } from "@/helpers/cn";
import { NavbarProps } from "./types";

export const Navbar = ({ className, ...props }: NavbarProps) => {
  return (
    <nav
      className={cn(
        "flex flex-col h-screen bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 w-72 p-2 text-slate-300",
        className
      )}
      {...props}
    >
      <div className="mt-2 flex items-center justify-center">
        <img
          src="https://germanoricardi.com.br/wp-content/uploads/2020/04/Logomarca-Germano-Ricardi-Claro.png"
          alt="Germano Ricardi"
          className="w-auto h-10 p-2"
        />
      </div>
      <NavbarList className="flex-grow">
        <NavbarListItemLink href={'/'}>
          <HomeIcon className="w-4 h-4" /> Home
        </NavbarListItemLink>
        <NavbarListItemLink href={'/games'}>
          <GamepadIcon className="w-4 h-4" /> Games
        </NavbarListItemLink>
        <NavbarListItemLink href={'/top-10'}>
          <AwardIcon className="w-4 h-4" /> Top 10
        </NavbarListItemLink>
        <NavbarListItemLink href={'/walkthroughs'}>
          <RouteIcon className="w-4 h-4" /> Walkthroughs
        </NavbarListItemLink>
      </NavbarList>

      <NavbarList>
        <NavbarListItemLink href={'/user'}>
          <UserIcon className="w-4 h-4" /> User
        </NavbarListItemLink>
      </NavbarList>
    </nav>
  );
};
