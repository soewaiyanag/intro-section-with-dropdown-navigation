import React from "react";
import Dropdown from "./Dropdown";
import FeaturesLists from "./FeaturesLists";

const NavLists = () => {
  return (
    <ul
      className="fixed inset-0 left-auto bg-white
                w-44 pl-4 pt-20
                md:static md:p-0 md:w-full"
    >
      <Dropdown label={"Features"} lists={<FeaturesLists />} />
      <Dropdown label={"Company"} lists={<></>} />
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
