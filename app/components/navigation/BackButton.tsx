import Link from "next/link";
import React from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";

export default function BackButton({ href }: { href: string }) {
  return (
    <Link href={href}>
      <div
        className="flex space-x-2 justify-center items-center
           shadow-md rounded-md px-4 py-2 hover:brightness-105 
           bg-gray-300 transition-all duration-500 text-slate-900
           dark:bg-gradient-to-r dark:to-slate-900 dark:from-sky-900 dark:text-white"
      >
        <MdOutlineArrowBackIos size={24} />
        <span className="text-sm">back</span>
      </div>
    </Link>
  );
}
