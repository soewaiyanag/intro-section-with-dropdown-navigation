import React, { useState } from "react";
import logoIcon from "@images/logo.svg";
import menuIcon from "@images/icon-menu.svg";
import closeMenuIcon from "@images/icon-close-menu.svg";
import NavLists from "./NavLists";

const Nav = () => {
  const [showNavLists, setShowNavLists] = useState(false);

  return (
    <nav
      className="container flex items-center justify-between h-20
                  text-medium-grey hover:text-almost-black transition-colors
                  md:gap-10 md:text-sm"
    >
      <img className="text-center" src={logoIcon} alt="Logo Icon" />
      <img
        onClick={() => {
          setShowNavLists(!showNavLists);
        }}
        className="cursor-pointer relative z-10 md:hidden"
        src={showNavLists ? closeMenuIcon : menuIcon}
        alt="Menu Icon"
      />
      <NavLists showNavLists={showNavLists} />
    </nav>
  );
};

export default Nav;
