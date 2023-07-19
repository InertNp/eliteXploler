import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";

import { useGlobalState } from "../../context/globalHook";
import { logout } from "../../api/Logout";
import Links from "./Links";

const NavLinks = () => {
  const navigate = useNavigate();
  const [isLoggedIn] = useGlobalState("isLoggedIn");
  const [name] = useGlobalState("fullName");
  const [role] = useGlobalState("userRole");
  // console.log(role);
  return (
    <nav className="basis-5/6   hidden sm:flex">
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

      {isLoggedIn ? (
        <div className="flex items-center justify-end gap-4 w-full">
          <Link
            to={`/setting`}
            className="text-white capitalize text-semibold text-lg"
          >
            {name}
          </Link>
          {/* Hotel_Administrator */}

          {/* logout button */}
          <Button className="bg-slate-800  " type="primary" onClick={logout}>
            Logout
          </Button>
        </div>
      ) : (
        <div className="flex items-center justify-end gap-4 w-1/2">
          <Button
            type="primary"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Button>
          <Button
            onClick={() => {
              navigate("/register");
            }}
          >
            Sign Up
          </Button>
        </div>
      )}
    </nav>
  );
};

export default NavLinks;
