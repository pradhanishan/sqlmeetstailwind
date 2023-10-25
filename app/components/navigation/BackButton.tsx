import Link from "next/link";
import React from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";

export default function BackButton({ href }: { href: string }) {
  return (
    <Link href={href}>
      <div
        className="flex space-x-2 justify-center items-center
        shadow-md rounded-md px-4 py-2 hover:brightness-110 
        shadow-gray-500 dark:shadow-sky-500
        bg-gray-300 transition-all duration-500 text-slate-900
        dark:bg-gradient-to-r
         dark:from-slate-900 dark:to-sky-900 dark:text-sky-500
         hover:scale-105
         "
      >
        <MdOutlineArrowBackIos size={24} />
        <span className="text-sm">back</span>
      </div>
    </Link>
  );
}
