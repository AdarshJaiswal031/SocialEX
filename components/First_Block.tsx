"use client";
import { motion } from "framer-motion";
import Container_FB1 from "./Container_FB1";

const First_Block = () => {
  const containerVariants = {
    hidden: {
      scaleY: 0,
      transformOrigin: "top",
      transition: {
        duration: 1,
        delay: 1,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    hiddenDown: {
      scaleY: 0,
      transformOrigin: "bottom",
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };

  const ageNetExit = {
    opacity: 0,
    transition: {
      duration: 1,
    },
  };
  return (
    <div className="w-full h-full">
      <div className="w-full h-full bg-black">
        <motion.div
          initial={{ opacity: 1 }}
          animate={ageNetExit}
          className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white z-20 text-3xl"
        >
          AGE.NET
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="visible"
          animate="hidden"
          className="w-full h-1/2 bg-zinc-900 absolute top-0 z-10"
        ></motion.div>
        <motion.div
          variants={containerVariants}
          initial="visible"
          animate="hiddenDown"
          className="w-full h-1/2 bg-zinc-900 absolute top-1/2 z-10"
        ></motion.div>
        <Container_FB1 />
      </div>
    </div>
  );
};

export default First_Block;
