import Image from "next/image";
import Table from "./components/Table";
import ToggleThemeButton from "./components/ToggleThemeButton";

import { pokemon } from "@/public/data/pokemon";

export default function Home() {
  return (
    <div className="flex flex-col flex-grow justify-start items-center page-bg-primary pt-20 px-4">
      {/* <Table data={pokemon.data} headers={pokemon.headers} /> */}
      {/* <ToggleThemeButton /> */}
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, commodi
      ex odit modi eos error vel et quos, nam odio dolore repellat consequuntur
      quod. Ab voluptas nam molestiae ipsam magnam aut accusantium impedit illo
      natus saepe tempora officia, optio, tenetur commodi dolores neque ea
      itaque. Vero dolores repudiandae ducimus, ea, autem voluptatem magnam unde
      doloremque voluptate, qui repellat! Et inventore magni eos commodi! Ad
      debitis sequi rem itaque ab magni consectetur sunt. Dignissimos unde,
      consequatur vero vitae possimus, quam quas excepturi dicta non magni
      officia eligendi ipsam! Minima atque molestias temporibus magnam velit
      dolorum dolore ab, provident perferendis, corporis harum.
    </div>
  );
}
