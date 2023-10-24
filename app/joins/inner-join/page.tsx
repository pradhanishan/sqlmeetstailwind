import { pokemon } from "@/public/data/pokemon";
import { filterPokemonDataByName } from "@/util/dataFilterUtilities";
import { pokemonTypes } from "@/public/data/pokemon-type";
import { filterPokemonTypesByName } from "@/util/dataFilterUtilities";
import Table from "@/app/components/Table";
export default function InnerJoin() {
  const filteredPokemonData = filterPokemonDataByName(
    ["treecko", "charmeleon", "vaporeon", "jolteon"],
    pokemon.data
  );

  const filteredPokemonTypes = filterPokemonTypesByName(
    ["grass", "fire", "water"],
    pokemonTypes.data
  );

  return (
    <main>
      <section id="header-section">
        <div className="flex flex-col justify-center items-start">
          <h3>Inner Join</h3>
          <span className="text-sm text-gray-500 dark:text-sky-400">
            (equijoin, join)
          </span>
        </div>
      </section>
      <section id="description-section">
        <div className="flex flex-col justify-center items-start">
          <p>
            An inner join, in the context of relational databases and SQL
            (Structured Query Language), is a query operation that combines data
            from two or more tables based on a specified condition or common
            column values. <br />
            <br />
            It retrieves only the rows for which there is a match between the
            columns being joined in the participating tables. <br />
            <br />
            In other words, an inner join returns a result set containing only
            the records that have corresponding values in both tables,
            effectively filtering out non-matching rows. <br />
            <br />
            This operation is used to extract and consolidate data that has
            shared characteristics or relationships between multiple tables,
            making it a fundamental tool for data retrieval and analysis in
            relational database systems. <br />
          </p>
        </div>
      </section>
      <section id="query syntax">
        <div className="flex flex-col justify-center items-start">
          <h4>Syntax</h4>
          <p className="font-mono">
            <span className="font-bold text-gray-600 dark:text-sky-400">
              SELECT{" "}
            </span>
            <span className="italic">column1, column2, ...</span>
            <br />
            <span className="font-bold text-gray-600 dark:text-sky-400">
              FROM
            </span>
            <span className="italic"> table1 </span>
            <span className="font-bold text-gray-700 dark:text-sky-300">
              INNER JOIN{" "}
            </span>
            <span className="italic">table2</span>
            <br />{" "}
            <span className="font-bold text-gray-600 dark:text-sky-400">
              ON{" "}
            </span>
            table1.column_name = table2.column_name;
          </p>
        </div>
      </section>
      <section id="source-data-section">
        <div className=" space-y-8">
          <div>
            <h4>Example</h4>
            <p>
              In this example, we will perform an inner join between left table
              pokemon and right table pokemonTypes to display the pokemon name
              with its type by joining pokemon.typeId column with pokemonType.id
              column.
            </p>
          </div>
          <div>
            <h5>Source data</h5>
          </div>
          <div
            className="flex flex-col justify-center items-start space-y-8 
          sm:flex-row sm:space-y-0 sm:space-x-8 sm:justify-start"
          >
            <Table headers={pokemon.headers} data={filteredPokemonData} />
            <Table headers={pokemonTypes.headers} data={filteredPokemonTypes} />
          </div>
          <div>
            <h5>Query</h5>
          </div>
          <div>
            <p className="font-mono">
              <span className="font-bold text-gray-600 dark:text-sky-400">
                SELECT{" "}
              </span>
              <span className="italic">p.name as pokemon, t.name as type</span>
              <br />
              <span className="font-bold text-gray-600 dark:text-sky-400">
                FROM
              </span>
              <span className="italic"> pokemon as p </span>
              <span className="font-bold text-gray-700 dark:text-sky-300">
                INNER JOIN{" "}
              </span>
              <span className="italic">pokemonType as t</span>
              <br />{" "}
              <span className="font-bold text-gray-600 dark:text-sky-400">
                ON{" "}
              </span>
              p.typeId = t.id;
            </p>
          </div>
          <div>
            <h5>Result</h5>
          </div>
          <div>
            <Table headers={pokemon.headers} data={filteredPokemonData} />
          </div>
          <div>
            <p>
              Here only the result for matching pokemon and pokemonTypes are
              returned. i.e, Jolteon, Charmeleon and Vaporen
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
