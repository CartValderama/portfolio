"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.8);

  return (
    <section className="mb-36 max-w-4xl scroll-mt-96" id="home" ref={ref}>
      <div className="flex justify-between items-center lg:items-end flex-col lg:flex-row-reverse">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            src={
              "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="Picture of the portfolio's owner"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="w-28 lg:w-56 rounded-full lg:rounded-md "
          />
        </motion.div>
        <div className="lg:w-2/3 flex flex-col gap-y-9 ">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-y-2 text-center lg:text-left"
          >
            <h1 className="text-2xl font-bold !leading-[1.5] mt-9 lg:mt-0 lg:text-4xl ">
              Hi, I am Cart—Frontend Developer and Student.
            </h1>
            <p className="leading-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              dolor quasi laudantium veritatis. A voluptatem necessitatibus,
              minus aperiam, voluptates iste molestias.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-row items-center justify-center lg:justify-start gap-4 font-medium "
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link
              href="#contact"
              className="group bg-sky-900 text-white px-7 py-3 flex items-center gap-2 rounded-md outline-none hover:scale-105 hover:bg-stone-700 active:scale-105 transition"
            >
              Contact me
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>
            <a
              href="/CV.pdf"
              download
              className="group bg-white px-7 py-3 flex items-center gap-2 rounded-md outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border border-black/10"
            >
              Download CV
              <HiDownload className="opacity-60 group-hover:translate-y-[0.1rem] transition" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
