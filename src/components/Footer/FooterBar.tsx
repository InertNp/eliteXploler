import { Link } from "react-router-dom";

import { FooterLinks } from "./FooterLinks";

const FooterBar = () => {
  return (
    <footer className="flex w-full  h-full flex-col md:flex-row gap-2">
      <Link
        to={"/"}
        className="flex items-center justify-center text-xl basis-1/5 text-black hover:text-slate-800"
      >
        EliteXplorer
      </Link>
      <FooterLinks />
      <p className="text-center basis-2/5 ">Made by bla bla vla</p>
    </footer>
  );
};

export default FooterBar;
