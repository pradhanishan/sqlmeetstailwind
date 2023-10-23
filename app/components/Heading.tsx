import { Dancing_Script } from "next/font/google";
import Link from "next/link";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function Heading() {
  return (
    <Link href="/">
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
      </div></Link>
  )
}
