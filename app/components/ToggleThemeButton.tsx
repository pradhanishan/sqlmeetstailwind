/*

This client component is a button that toggles light and dark mode

*/

"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import solrockImage from "@/public/images/sprites/solrock.png";
import lunatoneImage from "@/public/images/sprites/lunatone.png";
import Image from "next/image";

export default function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
    >
      {resolvedTheme === "dark" ? (
        <Image
          src={lunatoneImage}
          alt="lunatone image"
          width={100}
          priority={true}
          className="hover:scale-125 duration-300"
        />
      ) : (
        <Image
          src={solrockImage}
          alt="solrock image"
          width={100}
          priority={true}
          className="hover:scale-125 duration-300"
        />
      )}
    </button>
  );
}
