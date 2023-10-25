import Image from "next/image";
import NextButton from "./components/navigation/NextButton";
import fillerImage from "@/public/images/img4.png";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center flex-col space-y-8">
        <p className="lg:w-3/4">
          Welcome to SQL Meets Tailwind, where we are going to embark on a
          Pokémon-filled adventure through the world of SQL joins! <br />
          <br />I made this website to learn 
          <span className="text-sky-400 hover:font-bold duration-300 transition-all">
            <a href="https://tailwindcss.com/docs/installation" target="_blank">
              tailwind css
            </a>
          </span>
          , and in the spirit of sharing knowledge, I decided to sprinkle in
          some SQL join wisdom for my future zero site visitors. So cheers!{" "}
          <br />
          <br /> Are you ready to join us as we journey through the captivating
          realm of SQL joins, all while diving into the exciting world of
          Pokémon? We will explore different types of SQL joins and discover the
          art of crafting join queries using Pokémon data, making your learning
          experience as thrilling as a Pokémon battle! <br />
          <br />
        </p>
        <div className="overflow-hidden rounded-md shadow-lg w-fit">
          <Image
            src={fillerImage}
            alt="vaporeon umbreon jolteon"
            width={600}
            className="dark:brightness-75"
            priority
          />
        </div>
        <p className=" lg:w-3/4">
          Whether you are a Poké-newbie looking to grasp the basics or a
          seasoned SQL pro aiming to refine your skills, this comprehensive
          guide will be your trusty PokéDex. By the end of this adventure, you
          will have the knowledge and skills to navigate the world of SQL joins
          like a Pokémon Master! Let us catch em all—SQL joins and Pokémon
          knowledge! <br />
          <br />
        </p>

        <NextButton href="/joins" />
      </div>
    </main>
  );
}
