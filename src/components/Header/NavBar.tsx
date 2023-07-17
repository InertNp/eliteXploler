import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <header className="flex w-full  h-full">
      <Link
        to={"/"}
        className="flex items-center text-xl basis-1/5 text-white hover:text-white"
      >
        EliteExplorer
      </Link>
      <NavLinks />
    </header>
  );
};

export default NavBar;