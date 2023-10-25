import React from "react";
import JoinTypeCard from "../components/JoinTypeCard";
import innerJoinImage from "@/public/images/joins/inner-join.png";
import leftJoinImage from "@/public/images/joins/left-join.png";
import rightJoinImage from "@/public/images/joins/right-join.png";
import fullJoinImage from "@/public/images/joins/full-join.png";
import crossJoinImage from "@/public/images/joins/cross-join.png";
import semiJoinImage from "@/public/images/joins/semi-join.png";
import anitJoinImage from "@/public/images/joins/anti-join.png";
import naturalJoinImage from "@/public/images/joins/natural-join.png";
import selfJoinImage from "@/public/images/joins/self-join.png";
import NavigationButtonsContainer from "../components/navigation/NavigationButtonsContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Joins"
};

export default function Joins() {
  const joinTypes = [
    {
      src: innerJoinImage,
      alt: "inner-join-image",
      key: "ij-0",
      joinType: "Inner Join",
      link: "/joins/inner-join",
    },
    {
      src: leftJoinImage,
      alt: "left-join-image",
      key: "lj-1",
      joinType: "Left Join",
      link: "/joins/left-join",
    },
    {
      src: rightJoinImage,
      alt: "right-join-image",
      key: "rj-2",
      joinType: "Right Join",
      link: "/joins/right-join",
    },
    {
      src: fullJoinImage,
      alt: "full-join-image",
      key: "fj-3",
      joinType: "Full Join",
      link: "/joins/full-join",
    },
    {
      src: crossJoinImage,
      alt: "cross-join-image",
      key: "cj-4",
      joinType: "Cross Join",
      link: "/joins/cross-join",
    },
    {
      src: semiJoinImage,
      alt: "semi-join-image",
      key: "sj-5",
      joinType: "Semi Join",
      link: "/joins/semi-join",
    },
    {
      src: anitJoinImage,
      alt: "anti-join-image",
      key: "aj-6",
      joinType: "Anti Join",
      link: "/joins/anti-join",
    },
    {
      src: naturalJoinImage,
      alt: "natural-join-image",
      key: "nj-7",
      joinType: "Natural Join",
      link: "/joins/natural-join",
    },
    {
      src: selfJoinImage,
      alt: "self-join-image",
      key: "sj-8",
      joinType: "Self Join",
      link: "/joins/self-join",
    },
  ].map((joinType) => {
    return (
      <JoinTypeCard
        src={joinType.src}
        alt={joinType.alt}
        key={joinType.key}
        joinType={joinType.joinType}
        href={joinType.link}
      />
    );
  });

  return (
    <main>
      <section id="introduction-to-joins">
        <h3>Introduction to joins</h3>
        <p>
          In SQL, joins are used to combine data from different tables.They are
          essential for working with relational databases.
          <br />
          <br /> By specifying conditions or columns to connect tables, joins
          help reveal insights and relationships in your data. SQL provides
          various join types like inner, left, right, full, natural, and
          self-joins, each with its specific use.
          <br />
          <br /> Join operations are powerful tools for database professionals
          and data analysts, enabling efficient data retrieval and analysis.
          Whether you need to access related data, identify missing records, or
          navigate complex hierarchies, SQL joins are vital for managing and
          manipulating data.
        </p>
      </section>
      <section id="introduction-to-join-syntax">
        <h4>syntax</h4>
        <p>
          When composing a query to join two tables in SQL, you begin by
          indicating the desired type of join. This is followed by the use of
          the &ldquo;JOIN&ldquo; keyword and the &ldquo;ON&ldquo; keyword,
          specifying the columns that form the basis for the join. For example,
        </p>

        <div className="flex flex-col justify-center items-start py-8">
          <p className="font-mono">
            <span className="font-bold text-orange-500 dark:text-sky-400">
              SELECT{" "}
            </span>
            <span className="italic">p.name, t.type, p.sprite</span>
            <br />
            <span className="font-bold text-orange-500 dark:text-sky-400">
              FROM
            </span>
            <span className="italic"> pokemon as p </span>
            <span className="font-bold text-orange-600 dark:text-sky-300">
              INNER JOIN{" "}
            </span>
            <span className="italic">pokemonType as t</span>
            <br />{" "}
            <span className="font-bold text-orange-500 dark:text-sky-400">
              ON{" "}
            </span>
            p.typeId = t.id;
          </p>
        </div>
        <p>
          Here, a join is performed between tables pokemon and pokemonType using
          typeId and id columns respectively.
        </p>
      </section>
      <section id="introduction-to-join-types">
        <div className="flex flex-col space-y-8">
          <div>
            <h4>Types of joins</h4>
          </div>
          {/* Join type card container */}
          <div
            className="
          flex flex-col space-y-8 items-center
          sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0 sm:items-stretch 
          md:grid-cols-3 lg:gap-y-10 lg:grid-cols-4 mx-auto 
          "
          >
            {joinTypes}
          </div>
        </div>
      </section>
      <NavigationButtonsContainer
        backLink="/introduction"
        nextLink="/joins/inner-join"
      />
    </main>
  );
}
