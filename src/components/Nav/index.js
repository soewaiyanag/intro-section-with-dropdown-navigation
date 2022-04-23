import React from "react";
import logoIcon from "@images/logo.svg";
import menuIcon from "@images/icon-menu.svg";
import NavLists from "./NavLists";

const Nav = () => {
  return (
    <nav className="container flex items-center justify-between h-20">
      <img className="text-center" src={logoIcon} alt="Logo Icon" />
      <img
        className="cursor-pointer relative z-10 md:hidden"
        src={menuIcon}
        alt="Menu Icon"
      />
      <NavLists />
    </nav>
  );
};

export default Nav;
