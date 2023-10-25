import Image from "next/image";
import jolteonSprite from "@/public/images/sprites/jolteon.png";
import glaceonSprite from "@/public/images/sprites/glaceon.png";
import arbokSprite from "@/public/images/sprites/arbok.png";
import charmeleonSprite from "@/public/images/sprites/charmeleon.png";
import eeveeSprite from "@/public/images/sprites/eevee.png";
import Table from "@/app/components/Table";
import NavigationButtonsContainer from "@/app/components/navigation/NavigationButtonsContainer";
export default function LeftJoin() {
  return (
    <main>
      {/* Heading and synonym */}
      <section id="header-section">
        <div className="flex flex-col justify-center items-start">
          <h3>Left join</h3>
          <span className="text-sm text-gray-500 dark:text-sky-400">
            (left outer join)
          </span>
        </div>
      </section>
      {/* Description about the join */}
      <section id="description-section">
        <div className="flex flex-col justify-center items-start">
          <p>
            In the context of relational databases and SQL (Structured Query
            Language), a left join is a query operation that merges data from
            two or more tables based on specified conditions or common column
            values.
            <br />
            <br /> Unlike other joins, a left join includes all rows from the
            left (or first) table and any matching rows from the right (or
            second) table.
            <br />
            <br /> If there are no matching rows in the right table, the result
            will still contain data from the left table with null values for the
            right table columns.
            <br />
            <br /> In simpler terms, a left join produces a result set that
            retains all records from the left table while integrating related
            data from the right table when available.
            <br />
            <br /> This functionality proves valuable in scenarios where data
            integrity of the left table needs to be preserved while
            incorporating associated information from the right table.
            <br />
            <br /> Typically, this operation is employed to analyze data
            relationships, track missing data, and create comprehensive reports,
            ensuring all available information from the left table and any
            related data from the right table is included.
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
            <span className="font-bold text-orange-600 dark:text-sky-300">
              LEFT JOIN{" "}
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
              In this example, we will perform a left join between left table
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
                  <td>jolteon</td>
                  <td>type1</td>
                  <td>
                    <Image
                      src={jolteonSprite}
                      alt="jolteon-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>glaceon</td>
                  <td>type2</td>
                  <td>
                    <Image
                      src={glaceonSprite}
                      alt="glaceon-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>arbok</td>
                  <td>type3</td>
                  <td>
                    <Image src={arbokSprite} alt="arbok-sprite" width={50} />
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>charmeleon</td>
                  <td>type4</td>
                  <td>
                    <Image
                      src={charmeleonSprite}
                      alt="charmeleon-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>eevee</td>
                  <td>type4</td>
                  <td>
                    <Image src={eeveeSprite} alt="eevee-sprite" width={50} />
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
                    <span className="bg-yellow-300  px-4 rounded-md py-1 text-slate-900">
                      electric
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type2</td>
                  <td>
                    <span className="bg-white  px-4 rounded-md py-1 text-slate-900">
                      ice
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type3</td>
                  <td>
                    <span className="bg-purple-300  px-4 rounded-md py-1 text-slate-900">
                      poison
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
              <span className="font-bold text-orange-600 dark:text-sky-300">
                LEFT JOIN{" "}
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
                  <td>jolteon</td>
                  <td>
                    <span className="bg-yellow-300  px-4 rounded-md py-1 text-slate-900">
                      electric
                    </span>
                  </td>
                  <td>
                    <Image
                      src={jolteonSprite}
                      alt="treecko-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>glaceon</td>
                  <td>
                    <span className="bg-white  px-4 rounded-md py-1 text-slate-900">
                      ice
                    </span>
                  </td>
                  <td>
                    <Image
                      src={glaceonSprite}
                      alt="treecko-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>arbok</td>
                  <td>
                    <span className="bg-purple-300  px-4 rounded-md py-1 text-slate-900">
                      poison
                    </span>
                  </td>
                  <td>
                    <Image src={arbokSprite} alt="treecko-sprite" width={50} />
                  </td>
                </tr>
                <tr>
                  <td>charmeleon</td>
                  <td>
                    <span className="px-4 font-bold rounded-md py-1 text-orange-500 dark:text-sky-400 italic">
                      null
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
                  <td>eevee</td>
                  <td>
                    <span className="px-4 font-bold rounded-md py-1 text-orange-500 dark:text-sky-400 italic">
                      null
                    </span>
                  </td>
                  <td>
                    <Image src={eeveeSprite} alt="treecko-sprite" width={50} />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div>
            <p>
              Here all pokemon from left tables are returned in the result. But
              from the right table, only matching types electric, ice and poison
              are returned whereas for charmeleon and eevee, their types will be
              null as no matching records are found
            </p>
          </div>
        </div>
      </section><NavigationButtonsContainer
        backLink="/joins/inner-join"
        nextLink="/joins/right-join"
      />
    </main>
  );
}
