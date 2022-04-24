import React from "react";
import { motion } from "framer-motion";

const DropdownLists = ({ lists, showDropdown }) => {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      className="overflow-hidden md:absolute md:top-10 md:rounded"
    >
      <div className="pl-6 md:bg-white md:p-4">{lists}</div>
    </motion.div>
  );
};

export default DropdownLists;
