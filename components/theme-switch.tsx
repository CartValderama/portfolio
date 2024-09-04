"use client";

import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <motion.button
      className="fixed text-[0.7rem] w-[2rem] h-[2rem] sm:text-[1.5rem] sm:w-[3rem] sm:h-[3rem] text-yellow-600 bottom-5 right-5 bg-opacity-70 backdrop-blur-[0.5rem] border-2 border-yellow-600 border-opacity-40 shadow-2xl flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:border-sky-800 dark:text-sky-800 rounded-md"
      onClick={toggleTheme}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        delay: 0.1,
      }}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </motion.button>
  );
}
