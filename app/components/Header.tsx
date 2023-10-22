

import NavigationDrawer from "./NavigationDrawer";
import ToggleThemeButton from "./ToggleThemeButton";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function Header() {
  return (
    // Header container
    <div
      className="
      bg-gradient-to-br from-gray-500 to-gray-200
      dark:from-slate-800 dark:to-sky-700
      px-4 py-3 fixed top-0 w-full z-10 overflow-hidden
      flex justify-between items-center
      "
    >
      {/* NavigationDrawer */}
      <NavigationDrawer />
      {/* heading container */}
      <div className="flex flex-col justify-center items-center group">
        {/* Upper heading */}
        <h1
          className={`
        ${dancingScript.className} text-3xl  font-bold transition-all
        group-hover:text-gray-300 dark:group-hover:text-sky-400 group-hover:animate-pulse
        group-focus:text-white dark:group-focus:text-sky-400 group-focus:animate-pulse
        duration-300
        `}
        >
          SQL Joins
        </h1>
        {/* text below heading */}
        <span
          className={`${dancingScript.className} text-sm capitalize 
          group-hover:text-white dark:group-hover:text-sky-400 group-hover:animate-bounce
        group-focus:text-white dark:group-focus:text-sky-400 group-focus:animate-bounce
        duration-300`}
        >
          simplified
        </span>
      </div>
      {/* toggle theme button */}
      <ToggleThemeButton />
    </div>
  );
}
