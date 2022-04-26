import React from "react";
import CompanyLists from "./CompanyLists";
import Dropdown from "./Dropdown";
import FeaturesLists from "./FeaturesLists";
import clsx from "clsx";
import LoginRegister from "./LoginRegister";

const NavLists = ({ showNavLists }) => {
  const show = "translate-x-0";
  const hide = "translate-x-full";

  return (
    <ul
      className={clsx(
        "select-none fixed inset-0 left-auto -right-10",
        "bg-white w-64 pl-4 pt-20 space-y-4 transition-transform",
        "md:bg-transparent md:static md:p-0 md:space-y-0 md:w-full md:transition-none",
        "md:flex md:gap-8 md:items-center md:translate-x-0",
        showNavLists ? show : hide
      )}
    >
      <Dropdown label={"Features"} Lists={<FeaturesLists />} />
      <Dropdown label={"Company"} Lists={<CompanyLists />} />
      <li className="flex">
        {/* flex && w-full to take full width  */}
        <a className="w-full" href="#">
          Careers
        </a>
      </li>
      <li className="flex">
        <a className="w-full" href="#">
          About
        </a>
      </li>
      <LoginRegister />
    </ul>
  );
};

export default NavLists;
