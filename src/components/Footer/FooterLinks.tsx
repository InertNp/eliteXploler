import { Link } from "react-router-dom";
import { footLink } from "../../utils/NavLink";

export const FooterLinks = () => {
  return (
    <nav className="basis-4/6  md:flex">
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
        <Link to={"/booking"} className={footLink}>
          Booking
        </Link>
        <Link to={"/places"} className={footLink}>
          Places
        </Link>
      </div>
    </nav>
  );
};
