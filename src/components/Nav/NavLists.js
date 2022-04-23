import React from "react";
import CompanyLists from "./CompanyLists";
import Dropdown from "./Dropdown";
import FeaturesLists from "./FeaturesLists";

const NavLists = () => {
  return (
    <ul
      className="select-none fixed inset-0 left-auto bg-white
                w-56 pl-4 pt-20 space-y-4 
                md:static md:p-0 md:space-y-0 md:w-full
                md:flex md:items-center"
    >
      <Dropdown label={"Features"} lists={<FeaturesLists />} />
      <Dropdown label={"Company"} lists={<CompanyLists />} />
      <li>
        <a href="#">Careers</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
    </ul>
  );
};

export default NavLists;
