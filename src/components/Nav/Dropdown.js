import React, { useState } from "react";
import arrow from "@images/icon-arrow-down.svg";

const Dropdown = ({ label, lists }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <li
        className="flex items-center gap-2.5 cursor-pointer"
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        {label}
        <img src={arrow} alt="arrow icon" />
      </li>
      {showDropdown && <div className="pl-6">{lists}</div>}
    </>
  );
};

export default Dropdown;
