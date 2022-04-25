import React, { useState, useRef, useEffect } from "react";
import arrow from "@images/icon-arrow-down.svg";
import DropdownLists from "./DropdownLists";

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
        <img src={arrow} alt="arrow icon" />
      </li>
      <DropdownLists Lists={Lists} showDropdown={showDropdown} />
    </div>
  );
};

export default Dropdown;
