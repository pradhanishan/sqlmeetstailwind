import Image from "next/image";
import duskullSprite from "@/public/images/sprites/duskull.png";
import umbreonSprite from "@/public/images/sprites/umbreon.png";
import alakazamSprite from "@/public/images/sprites/alakazam.png";
import Table from "@/app/components/Table";
export default function SemiJoin() {
  return (
    <main>
      {/* Heading and synonym */}
      <section id="header-section">
        <div className="flex flex-col justify-center items-start">
          <h3>Right join</h3>
          <span className="text-sm text-gray-500 dark:text-sky-400">
            (right outer join)
          </span>
        </div>
      </section>
      {/* Description about the join */}
      <section id="description-section">
        <div className="flex flex-col justify-center items-start">
          <p>
            A right join, within the realm of relational databases and SQL
            (Structured Query Language), is a query operation that combines data
            from two or more tables based on a specified condition or common
            column values. <br />
            <br />
            Unlike an inner join, which only retrieves rows with matching values
            in both tables, a right join includes all rows from the right (or
            second) table and the matching rows from the left (or first) table.
            If there are no matching rows in the left table, the result will
            still contain data from the right table, with null values for the
            left table's columns. <br />
            <br />
            In simpler terms, a right join returns a result set that preserves
            all records from the right table while incorporating related data
            from the left table when available, making it a useful tool for
            scenarios where you want to maintain the integrity of the right
            table's data and include associated information from the left table.{" "}
            <br />
            <br />
            This operation is commonly employed to analyze data relationships,
            track missing data, and create comprehensive reports that include
            all available information from the right table and any related data
            from the left table. It's a valuable feature for data analysis and
            reporting in relational database systems. <br />
          </p>
        </div>
      </section>
      {/* Select syntax for the join */}
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
              RIGHT JOIN{" "}
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
      {/* Example section*/}
      <section id="source-data-section">
        <div className=" space-y-8">
          <div>
            <h4>Example</h4>
            <p>
              In this example, we will perform a right join between left table
              pokemon and right table pokemonTypes to display the pokemon name
              with its type by joining pokemon.typeId column with pokemonType.id
              column.
            </p>
          </div>
          <div>
            <h5>Source data</h5>
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
                  <td>duskull</td>
                  <td>type1</td>
                  <td>
                    <Image
                      src={duskullSprite}
                      alt="duskull-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>umbreon</td>
                  <td>type2</td>
                  <td>
                    <Image
                      src={umbreonSprite}
                      alt="umbreon-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>alakazam</td>
                  <td>type3</td>
                  <td>
                    <Image
                      src={alakazamSprite}
                      alt="alakazam-sprite"
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
                    <span className="bg-zinc-700  px-4 rounded-md py-1 text-white">
                      ghost
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type2</td>
                  <td>
                    <span className="bg-black  px-4 rounded-md py-1 text-white">
                      dark
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type3</td>
                  <td>
                    <span className="bg-rose-300  px-4 rounded-md py-1 text-slate-900">
                      psychic
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type4</td>
                  <td>
                    <span className="bg-yellow-300  px-4 rounded-md py-1 text-slate-900">
                      electric
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type5</td>
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
              <span className="font-bold text-gray-600 dark:text-sky-400">
                SELECT{" "}
              </span>
              <span className="italic">p.name, t.type, p.sprite</span>
              <br />
              <span className="font-bold text-gray-600 dark:text-sky-400">
                FROM
              </span>
              <span className="italic"> pokemon as p </span>
              <span className="font-bold text-gray-700 dark:text-sky-300">
                RIGHT JOIN{" "}
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
                  <td>duskull</td>
                  <td>
                    <span className="bg-zinc-700  px-4 rounded-md py-1 text-white">
                      ghost
                    </span>
                  </td>
                  <td>
                    <Image
                      src={duskullSprite}
                      alt="duskull-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>umbreon</td>
                  <td>
                    <span className="bg-black  px-4 rounded-md py-1 text-white">
                      dark
                    </span>
                  </td>
                  <td>
                    <Image
                      src={umbreonSprite}
                      alt="duskull-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>alakazam</td>
                  <td>
                    <span className="bg-rose-300  px-4 rounded-md py-1 text-slate-900">
                      psychic
                    </span>
                  </td>
                  <td>
                    <Image
                      src={alakazamSprite}
                      alt="duskull-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="px-4 rounded-md py-1 text-orange-500 dark:text-sky-400 italic">
                      null
                    </span>
                  </td>
                  <td>
                    <span className="bg-yellow-300  px-4 rounded-md py-1 text-slate-900">
                      electric
                    </span>
                  </td>
                  <td>
                    <span className="px-4 rounded-md py-1 text-orange-500 dark:text-sky-400 italic">
                      null
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="px-4 rounded-md py-1 text-orange-500 dark:text-sky-400 italic">
                      null
                    </span>
                  </td>
                  <td>
                    <span className="bg-blue-300  px-4 rounded-md py-1 text-slate-900">
                      water
                    </span>
                  </td>
                  <td>
                    <span className="px-4 rounded-md py-1 text-orange-500 dark:text-sky-400 italic">
                      null
                    </span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div>
            <p>
              Here all types from right tables are returned in the result. But
              from the left table, only matching pokemon duskull, umbreon and
              alakazam are returned whereas for types electric and water, their
              pokemon will be null as no matching records are found
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
