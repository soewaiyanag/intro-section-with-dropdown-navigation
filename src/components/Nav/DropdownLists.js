import React, { useRef } from "react";
import { motion } from "framer-motion";
import useOnClickOutside from "@hooks/useOnClickOutside";

const DropdownLists = ({ Lists, showDropdown, setShowDropdown }) => {
  const animate = { height: showDropdown ? "auto" : 0 };
  const ref = useRef();

  useOnClickOutside(ref, () => {
    if (showDropdown) {
      setShowDropdown(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      animate={animate}
      className="overflow-hidden md:absolute md:top-10 md:rounded"
    >
      <div className="pl-6 mt-4 md:bg-white md:p-4 md:mt-0">{Lists}</div>
    </motion.div>
  );
};

export default DropdownLists;
