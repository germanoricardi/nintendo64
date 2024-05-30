export const Navbar = () => {
  return (
    <nav className="flex flex-col h-screen gap-4 bg-slate-900 border-r border-indigo-400/40 hover:border-indigo-400/80 w-72 p-2">
      <div>
        <img
          src="https://germanoricardi.com.br/wp-content/uploads/2020/04/Logomarca-Germano-Ricardi-Claro.png"
          alt="Germano Ricardi"
          className="max-w-full p-2"
        />
      </div>
      <ul className="my-4 flex-grow border-t border-indigo-400/20 hover:border-indigo-400/40">
        <li className="my-2 p-2 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer">
          Home
        </li>
        <li className="my-2 p-2 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer">
          Games
        </li>
        <li className="my-2 p-2 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer">
          Top 10
        </li>
        <li className="my-2 p-2 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer">
          Walkthroughs
        </li>
      </ul>

      <ul className="my-4 border-t border-indigo-400/20 hover:border-indigo-400/40">
        <li className="my-2 p-2 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer">
          User
        </li>
      </ul>
    </nav>
  );
};
