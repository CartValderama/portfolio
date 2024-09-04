"use client";

import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mb-3 sm:mb-8 last:mb-0 group bg-stone-100 border border-black/5 overflow-hidden relative rounded-lg dark:bg-white/10 "
    >
      <section className="relative flex group-even:flex-row-reverse">
        <div className="py-5 px-4 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col gap-y-10">
          <div>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-stone-600 dark:text-white/80">
              {description}
            </p>
          </div>

          <ul className="flex flex-wrap mt-4 gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-sky-900 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white-70 dark:bg-white/10"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt={description}
          quality={95}
          className="absolute top-12 -right-40 hidden sm:block w-[28.25rem] rounded-t-lg shadow-2xl transition
          duration-300 group-hover:scale-[1.04] 

          group-hover:-translate-x-3 
          group-hover:translate-y-3 group-hover:-rotate-2 
          
          group-even:group-hover:translate-x-3 
          group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2
          
          group-even:right-[initial] group-even:-left-40 "
        />
      </section>
    </motion.div>
  );
}
