import Description from "@/app/components/Description";
import NameAndSynonym from "@/app/components/NameAndSynonym";
import Query from "@/app/components/Query";
import Table from "@/app/components/Table";
import { innerJoinData } from "@/public/data/inner-join";
import { pokemon } from "@/public/data/pokemon";

export default function InnerJoin() {

 
  const pokemonToFilter = ["charmeleon", "treecko"];

  const filteredLeftTableData = pokemon.data.filter((row) => {
    const value = row.value[1].value;
    return typeof value === "string" && pokemonToFilter.includes(value);
  });
  
  console.log(filteredLeftTableData)  


  return (
    <main>
      {/* Join Type Heading Container*/}
      <NameAndSynonym
        name={innerJoinData.name}
        synonyms={innerJoinData.synonyms}
      />
      {/* Description Container */}
      <Description description={innerJoinData.description} />
      {/* Syntax Container */}
      {/* <Query query={innerJoinData.syntax} /> */}

      <div>
        {/* Left Table */}
        <Table headers={pokemon.headers} data={filteredLeftTableData}/>
      </div>
    </main>
  );
}
