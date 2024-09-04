"use client";

import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const {
    activeSection,
    setActiveSection,
    timeOfLastClick,
    setTimeOfLastClick,
  } = useActiveSectionContext();

  return (
    <header className="flex justify-center w-100">
      <motion.div
        className="fixed z-[999] top-0 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg text-stone-700 shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[4rem] sm:w-[36rem] sm:rounded-md dark:bg-stone-950 dark:border-black/40 dark:bg-opacity-80"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <nav className="flex justify-center items-center h-full">
          <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[0.7rem] sm:text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap gap-2 sm:gap-10">
            {links.map((link) => (
              <motion.li
                className="flex items-center justify-center relative"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "tween",
                  duration: 0.1,
                }}
              >
                <Link
                  className={clsx(
                    "px-3 py-2 hover:bg-stone-100 hover:text-stone-950 font-semibold transition dark:text-stone-200 dark:hover:text-stone-200 dark:hover:bg-stone-500 rounded-t-md",
                    {
                      "text-stone-950": activeSection === link.name,
                    }
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}
                  {link.name === activeSection && (
                    <motion.span
                      className="border-b-2 border-sky-950 absolute inset-0 dark:border-stone-400"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
