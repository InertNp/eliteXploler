import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { navLink } from "../../utils/NavLink";
import { useGlobalState } from "../../context/globalHook";
import { logout } from "../../api/Logout";

const NavLinks = () => {
  const navigate = useNavigate();
  const [isLoggedIn] = useGlobalState("isLoggedIn");
  const [name] = useGlobalState("fullName");
  const [role] = useGlobalState("userRole");
  return (
    <nav className="basis-5/6   hidden md:flex">
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
      {isLoggedIn ? (
        <div className="flex items-center justify-end gap-4 w-1/2">
          <Link
            to={`/setting`}
            className="text-white capitalize text-semibold text-lg"
          >
            {name}
          </Link>
          {/* Hotel_Administrator */}
          {role === "Hotel_Administrator" ? (
            <Button
              className="bg-slate-800  "
              type="primary"
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              Dashboard
            </Button>
          ) : null}
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
