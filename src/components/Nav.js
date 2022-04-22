import React from "react";
import logoIcon from "../images/logo.svg";
import menuIcon from "../images/icon-menu.svg";
import closeMenuIcon from "../images/icon-close-menu.svg";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between container">
      <img className="text-center" src={logoIcon} alt="Logo Icon" />
      <img src={menuIcon} alt="Menu Icon" />
    </nav>
  );
};

export default Nav;
