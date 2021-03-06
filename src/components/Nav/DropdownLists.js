import React, { useRef } from "react";
import { motion } from "framer-motion";
import useOnClickOutside from "@hooks/useOnClickOutside";

const DropdownLists = ({ Lists, showDropdown, setShowDropdown }) => {
  const animate = { height: showDropdown ? "auto" : 0 };
  const ref = useRef();

  useOnClickOutside(ref, () => {
    if (showDropdown) {
      // without seTimeout it causing bug
      // which is if one dropdown is active
      // and click to other dropdown, it doesn't open but close the one that active
      setTimeout(() => {
        setShowDropdown(false);
      }, 100);
    }
  });

  return (
    <motion.div
      ref={ref}
      animate={animate}
      className="overflow-hidden md:shadow-md md:absolute md:top-10 md:rounded"
    >
      <div className="pl-6 mt-4 md:bg-white md:p-4 md:mt-0">{Lists}</div>
    </motion.div>
  );
};

export default DropdownLists;
