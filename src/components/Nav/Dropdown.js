import React, { useState } from "react";
import arrow from "@images/icon-arrow-down.svg";
import DropdownLists from "./DropdownLists";
import clsx from "clsx";

const Dropdown = ({ label, Lists }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative">
      <li
        className="flex items-center gap-2.5 cursor-pointer"
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        {label}
        <img
          className={clsx(
            "transition-transform",
            showDropdown ? "rotate-180" : "rotate-0"
          )}
          src={arrow}
          alt="arrow icon"
        />
      </li>
      <DropdownLists
        Lists={Lists}
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
      />
    </div>
  );
};

export default Dropdown;
