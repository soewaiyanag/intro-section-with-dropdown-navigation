import React from "react";
import { motion } from "framer-motion";

const DropdownLists = ({ Lists, showDropdown }) => {
  const animate = { height: showDropdown ? "auto" : 0 };

  return (
    <motion.div
      animate={animate}
      className="overflow-hidden md:absolute md:top-10 md:rounded"
    >
      <div className="pl-6 mt-4 md:bg-white md:p-4 md:mt-0">{Lists}</div>
    </motion.div>
  );
};

export default DropdownLists;
