import Description from "@/app/components/Description";
import NameAndSynonym from "@/app/components/NameAndSynonym";
import Query from "@/app/components/Query";
import Table from "@/app/components/Table";
import { innerJoinData } from "@/public/data/inner-join";
import { pokemon } from "@/public/data/pokemon";
import { filterPokemonDataByName } from "@/util/dataFilterUtilities";
import { pokemonTypes } from "@/public/data/pokemon-type";
import { filterPokemonTypesByName } from "@/util/dataFilterUtilities";
export default function InnerJoin() {
  const filteredPokemonData = filterPokemonDataByName(
    ["treecko", "charmeleon", "vaporeon"],
    pokemon.data
  );

  const filteredPokemonTypes = filterPokemonTypesByName(
    ["grass", "fire", "water"],
    pokemonTypes.data
  );

  return (
    <main>
      <div>
        <NameAndSynonym
          name={innerJoinData.name}
          synonyms={innerJoinData.synonyms}
        />
      </div>
      <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 lg:items-stretch">
        <Description description={innerJoinData.description} />

        {/* <Query query={innerJoinData.syntax} /> */}
      </div>
      <div>
        <Table headers={pokemon.headers} data={filteredPokemonData} />
        <Table headers={pokemonTypes.headers} data={filteredPokemonTypes} />
      </div>
    </main>
  );
}
