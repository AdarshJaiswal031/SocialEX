"use client";
import { imgs } from "@/lib/ImagesLink";
import { motion, useAnimation } from "framer-motion";
import Navbar from "./Navbar";
import { Menu, MoreHorizontal, Play, PlayCircle } from "lucide-react";
import { useState } from "react";

const Container_FB1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleIconChange = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="overflow-hidden w-full h-full absolute">
      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: 1100,
        }}
        transition={{
          delay: 2,
          duration: 1,
        }}
        className="w-full absolute top-1/2 transform-translate-y-1/2 bg-transparent flex
      items-center justify-center
      "
      >
        <div className="rounded-full w-4 h-4  bg-white"></div>
        <hr className="bg-white text-white w-full " />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2.9,
          duration: 1,
        }}
        className={`bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
      w-full h-full background-container`}
      >
        <Navbar />
        <div className=" ml-12 w-full h-full  flex items-center relative -top-20 gap-x-20 ">
          <motion.div
            initial={{ rotate: 0, originX: 0.5, originY: 0.5 }}
            whileHover={{
              rotate: 180,
              originX: 0.5,
              originY: 0.5,
            }}
            transition={{
              duration: 0.5,
            }}
            onAnimationStart={handleIconChange}
            className="ml-4 flex items-center justify-center"
          >
            {isMenuOpen ? (
              <MoreHorizontal className="text-white w-11 h-11" /> // Use your X (close) icon component
            ) : (
              <Menu className="text-white w-11 h-11" /> // Use your Menu icon component
            )}
          </motion.div>
          <div className="text-white flex flex-col ">
            <div className="flex flex-col gap-y-6">
              <h1 className="text-6xl font-thin">Distinct</h1>
              <h1 className="text-6xl font-extrabold">Always.</h1>
            </div>
            <p className="font-bold text-sm tracking-tighter mt-4">
              BRANDING, WEBSITES & MARKETING FOR VIDEO GAMES
            </p>
            <div className="absolute bottom-20 flex items-center justify-center gap-x-4">
              <Play className="w-14 h-14 border-2 border-gray-400 p-3 pl-4 rounded-full" />
              <div className="flex flex-col w-full text-gray-400">
                <p className="text-xl font-extrabold">Check out our showreel</p>
                <p className="tracking-tighter">
                  Innovate Inspire. Create your story. Change the game.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Container_FB1;
