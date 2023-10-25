import React from "react";
import Image from "next/image";
import fillerImage from "@/public/images/img2.png";
import fillerImageDark from "@/public/images/img6.png";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "End"
};

export default function End() {
  return (
    <main className=" justify-center items-center">
      <p className="text-center text-xl">
        Thank you for visiting.
        <br />
      </p>
      <div className="overflow-hidden rounded-md shadow-lg w-fit">
        <Image
          src={fillerImage}
          alt="pikachu on db"
          width={600}
          className="dark:hidden"
          priority
        />
        <Image
          src={fillerImageDark}
          alt="umbreon and espeon"
          width={600}
          className="hidden dark:inline-block"
          priority
        />
      </div>
    </main>
  );
}
