import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center flex-col space-y-8">
        <p className="sm:pt-20">
          Welcome to SQL Joins Simplified, where we are going to embark on a
          Pokémon-filled adventure through the world of SQL joins! <br />
          <br />
          Are you ready to join us as we journey through the captivating realm
          of SQL joins, all while diving into the exciting world of Pokémon? We
          will explore different types of SQL joins and discover the art of
          crafting join queries using Pokémon data, making your learning
          experience as thrilling as a Pokémon battle! <br />
          <br />
          Whether you are a Poké-newbie looking to grasp the basics or a
          seasoned SQL pro aiming to refine your skills, this comprehensive
          guide will be your trusty PokéDex. By the end of this adventure, you
          will have the knowledge and skills to navigate the world of SQL joins
          like a Pokémon Master! Let us catch em all—SQL joins and Pokémon
          knowledge! <br />
          <br />
        </p>
        <Link href="/joins">
          <div
            className="px-8 py-6 rounded-md text-2xl
         shadow-gray-400 shadow-md dark:shadow-md dark:shadow-sky-700
         bg-gradient-to-r from-gray-200 to-gray-100 text-slate-900
         dark:bg-gradient-to-br dark:to-slate-700 dark:from-sky-800 dark:text-gray-400
         hover:scale-105 focus:scale-105 transition-all duration-300
         hover:font-bold focus:font-bold lowercase hover:animate-pulse focus:animate-pulse
         "
          >
            Start
          </div>
        </Link>
      </div>
    </main>
  );
}
