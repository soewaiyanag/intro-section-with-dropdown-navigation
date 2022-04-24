import React, { useState, useRef, useEffect } from "react";
import arrow from "@images/icon-arrow-down.svg";
import DropdownLists from "./DropdownLists";

const Dropdown = ({ label, lists }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative space-y-4 md:space-y-0">
      <li
        className="flex items-center gap-2.5 cursor-pointer"
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        {label}
        <img src={arrow} alt="arrow icon" />
      </li>
      {showDropdown && <DropdownLists lists={lists} />}
    </div>
  );
};

export default Dropdown;
