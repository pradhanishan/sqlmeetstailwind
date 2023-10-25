"use client";

import Link from "next/link";
export default function NavigationButton({
  name,
  href,
  closeDrawer,
}: {
  name: string;
  href: string;
  closeDrawer: () => void;
}) {
  return (
    <Link href={href}>
      <div
        className="px-4 rounded-md py-4 lg:py-3 flex 
        bg-gray-200 text-slate-900 capitalize text-sm
        dark:bg-slate-900 dark:text-white
        dark:border dark:border-sky-800
        transition-all duration-400
        hover:brightness-110 
        focus:brightness-110
        dark:hover:bg-gradient-to-r dark:hover:from-sky-900 dark:hover:to-slate-700
        dark:focus:bg-gradient-to-r dark:focus:from-sky-900 dark:focus:to-slate-700
        "
        onClick={() => {
          closeDrawer();
        }}
      >
        {name}
      </div>
    </Link>
  );
}
