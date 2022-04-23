import React from "react";
import arrow from "@images/icon-arrow-down.svg";

const Dropdown = ({ label, lists }) => {
  return (
    <>
      <li className="flex items-center gap-2.5 cursor-pointer">
        {label}
        <img src={arrow} alt="arrow icon" />
      </li>
      {lists}
    </>
  );
};

export default Dropdown;
