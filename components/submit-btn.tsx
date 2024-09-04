import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-sky-900 text-white rounded-md outline-none transition-all focus:scale-105 hover:scale-105 active:scale-105 hover:bg-stone-700 disabled:opacity-65 dark:bg-white dark:text-stone-700"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          {" "}
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-80 transition-all group-hover:translate-x-[0.1rem] group-hover:-translate-y-[0.1rem] " />
        </>
      )}
    </button>
  );
}
