"use client";
import { motion } from "framer-motion";
import React from "react";
const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 3.5,
        duration: 0.5,
      }}
      className=" w-full h-20  flex items-end  justify-between"
    >
      <motion.a
        href="#"
        className="text-white ml-16 h-full flex items-center pt-6"
      >
        Contact
      </motion.a>
      <a href="#" className="text-white mr-16 text-xl">
        NET-AGE
      </a>
    </motion.div>
  );
};

export default Navbar;
