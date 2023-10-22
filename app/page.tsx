import Image from "next/image";
import Table from "./components/Table";
import ToggleThemeButton from "./components/ToggleThemeButton";

import { pokemon } from "@/public/data/pokemon";

export default function Home() {
  return (
    <div className="flex flex-col flex-grow justify-center items-center page-bg-primary">
      {/* <Table data={pokemon.data} headers={pokemon.headers} /> */}
      <ToggleThemeButton />
    </div>
  );
}
