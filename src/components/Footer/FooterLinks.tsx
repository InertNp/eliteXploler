import { Link } from "react-router-dom";
import { footLink } from "../../utils/NavLink";
import { useGlobalState } from "../../context/globalHook";

export const FooterLinks = () => {
  const [role] = useGlobalState("userRole");
  const [isLoggedIn] = useGlobalState("isLoggedIn");
  return (
    <nav className="basis-4/6  md:flex">
      {isLoggedIn ? (
        // here after login
        <>
          {role == "User" ? (
            // here after ROle
            <Links />
          ) : null}
        </>
      ) : (
        // here before login
        <Links />
      )}
    </nav>
  );
};

function Links() {
  return (
    <div className="flex items-center justify-end md:justify-center gap-4 flex-col md:flex-row ">
      <Link to={"/home"} className={footLink}>
        Home
      </Link>
      <Link to={"/about"} className={footLink}>
        About
      </Link>
      <Link to={"/contact"} className={footLink}>
        Contact
      </Link>
      <Link to={"/gallery"} className={footLink}>
        Gallery
      </Link>
      <Link to={"/places"} className={footLink}>
        Places
      </Link>
    </div>
  );
}
