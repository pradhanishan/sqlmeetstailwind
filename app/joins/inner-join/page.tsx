import Image from "next/image";
import charmeleonSprite from "@/public/images/sprites/charmeleon.png";
import treeckoSprite from "@/public/images/sprites/treecko.png";
import vaporeonSprite from "@/public/images/sprites/vaporeon.png";
import jolteonSprite from "@/public/images/sprites/jolteon.png";
import Table from "@/app/components/Table";
export default function InnerJoin() {
  return (
    <main>
      {/* Heading and synonym */}
      <section id="header-section">
        <div className="flex flex-col justify-center items-start">
          <h3>Inner Join</h3>
          <span className="text-sm text-gray-500 dark:text-sky-400">
            (equijoin, join)
          </span>
        </div>
      </section>
      {/* Description about the join */}
      <section id="description-section">
        <div className="flex flex-col justify-center items-start">
          <p>
            In the domain of relational databases and SQL (Structured Query
            Language), an inner join serves as a query operation, merging data
            from two or more tables based on a specified condition or common
            column values. It exclusively retrieves rows where the joined
            columns in the participating tables have matching values.
            <br />
            <br />
            In simpler terms, an inner join provides a result set consisting
            solely of records that share corresponding values in both tables,
            effectively excluding non-matching rows. This operation is essential
            for extracting and consolidating data with common characteristics or
            connections across multiple tables, making it a fundamental tool for
            data retrieval and analysis within relational database systems.
          </p>
        </div>
      </section>
      {/* Select syntax for the join */}
      <section id="query syntax">
        <div className="flex flex-col justify-center items-start">
          <h4>Syntax</h4>
          <p className="font-mono">
            <span className="font-bold text-orange-500 dark:text-sky-400">
              SELECT{" "}
            </span>
            <span className="italic">column1, column2, ...</span>
            <br />
            <span className="font-bold text-orange-500 dark:text-sky-400">
              FROM
            </span>
            <span className="italic"> table1 </span>
            <span className="font-bold text-gray-700 dark:text-sky-300">
              INNER JOIN{" "}
            </span>
            <span className="italic">table2</span>
            <br />{" "}
            <span className="font-bold text-orange-500 dark:text-sky-400">
              ON{" "}
            </span>
            table1.column_name = table2.column_name;
          </p>
        </div>
      </section>
      {/* Example section*/}
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
            <h5>data</h5>
          </div>
          <div
            className="flex flex-col sm:items-stretch space-y-8 
          sm:flex-row sm:space-y-0 sm:space-x-8 justify-center"
          >
            {/* Left table */}
            <Table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>typeid</th>
                  <th>sprite</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>charmeleon</td>
                  <td>type1</td>
                  <td>
                    <Image
                      src={charmeleonSprite}
                      alt="charmeleon-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>treecko</td>
                  <td>type2</td>
                  <td>
                    <Image
                      src={treeckoSprite}
                      alt="treecko-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>vaporeon</td>
                  <td>type3</td>
                  <td>
                    <Image
                      src={vaporeonSprite}
                      alt="vaporeon-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>jolteon</td>
                  <td>type4</td>
                  <td>
                    <Image
                      src={jolteonSprite}
                      alt="vaporeon-sprite"
                      width={50}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
            {/* Right Table */}
            <Table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>type1</td>
                  <td>
                    <span className="bg-red-300  px-4 rounded-md py-1 text-slate-900">
                      fire
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type2</td>
                  <td>
                    <span className="bg-green-300  px-4 rounded-md py-1 text-slate-900">
                      grass
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type3</td>
                  <td>
                    <span className="bg-blue-300  px-4 rounded-md py-1 text-slate-900">
                      water
                    </span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div>
            <h5>Query</h5>
          </div>
          <div>
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
              <span className="font-bold text-gray-700 dark:text-sky-300">
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
          <div>
            <h5>Result</h5>
          </div>
          <div className="flex sm:justify-center">
            <Table>
              <thead>
                <tr>
                  <th>name</th>
                  <th>type</th>
                  <th>sprite</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>charmeleon</td>
                  <td>
                    <span className="bg-red-300  px-4 rounded-md py-1 text-slate-900">
                      fire
                    </span>
                  </td>
                  <td>
                    <Image
                      src={charmeleonSprite}
                      alt="treecko-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>treecko</td>
                  <td>
                    <span className="bg-green-300  px-4 rounded-md py-1 text-slate-900">
                      grass
                    </span>
                  </td>
                  <td>
                    <Image
                      src={treeckoSprite}
                      alt="treecko-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>vaporeon</td>
                  <td>
                    <span className="bg-blue-300  px-4 rounded-md py-1 text-slate-900">
                      water
                    </span>
                  </td>
                  <td>
                    <Image
                      src={vaporeonSprite}
                      alt="treecko-sprite"
                      width={50}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
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
