import BackButton from "./components/navigation/BackButton";
import NavigationButtonsContainer from "./components/navigation/NavigationButtonsContainer";
import NextButton from "./components/navigation/NextButton";

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
        <NextButton href="/joins" />
      </div>
    </main>
  );
}
