"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.9);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-36 scroll-mt-44 max-w-4xl text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>contact me</SectionHeading>
      <p className="text-stone-600 dark:text-white/80 ">
        Please contact mt directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent sucessfuly!");
        }}
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          className="h-14 px-4 rounded-lg borderBlack outline-stone-500 dark:outline-none dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
          placeholder="your_email@gmail.com"
        />
        <textarea
          name="message"
          id=""
          required
          maxLength={5000}
          className="h-52 my-3 rounded-lg borderBlack p-4 outline-stone-500 dark:outline-none dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
          placeholder="Enter your message here ..."
        ></textarea>
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
