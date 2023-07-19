import React from "react";
import { Link } from "react-router-dom";
import { navLink } from "../../utils/NavLink";
import { useGlobalState } from "../../context/globalHook";

const Links = () => {
  const [isLoggedIn] = useGlobalState("isLoggedIn");
  return (
    <div className="flex items-center justify-center gap-4 w-1/2 ">
      <Link to={"/home"} className={navLink}>
        Home
      </Link>
      <Link to={"/about"} className={navLink}>
        About
      </Link>
      <Link to={"/contact"} className={navLink}>
        Contact
      </Link>
      {isLoggedIn ? (
        <Link to={"/booking"} className={navLink}>
          Bookings
        </Link>
      ) : null}

      <Link to={"/places"} className={navLink}>
        Places
      </Link>
    </div>
  );
};

export default Links;
