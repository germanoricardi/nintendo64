import {
  AwardIcon,
  GamepadIcon,
  HomeIcon,
  RouteIcon,
  UserIcon,
} from "@/components";
import { cn } from "@/helpers/cn";

type NavbarProps = React.ComponentProps<"nav">;
type NavbarListProps = React.ComponentProps<"ul">;
type NavbarLisItemtProps = React.ComponentProps<"li">;

const NavbarList = ({ children, className, ...props }: NavbarListProps) => {
  return (
    <ul
      className={cn(
        "my-4 border-t border-indigo-400/20 hover:border-indigo-400/40",
        className
      )}
      {...props}
    >
      {children}
    </ul>
  );
};

const NavbarListItem = ({
  children,
  className,
  ...props
}: NavbarLisItemtProps) => {
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
        <NavbarListItem>
          <HomeIcon className="w-4 h-4" /> Home
        </NavbarListItem>
        <NavbarListItem>
          <GamepadIcon className="w-4 h-4" /> Games
        </NavbarListItem>
        <NavbarListItem>
          <AwardIcon className="w-4 h-4" /> Top 10
        </NavbarListItem>
        <NavbarListItem>
          <RouteIcon className="w-4 h-4" /> Walkthroughs
        </NavbarListItem>
      </NavbarList>

      <NavbarList>
        <NavbarListItem>
          <UserIcon className="w-4 h-4" /> User
        </NavbarListItem>
      </NavbarList>
    </nav>
  );
};
