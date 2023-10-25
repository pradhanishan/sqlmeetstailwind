import Image from "next/image";
import eeveeSprite from "@/public/images/sprites/eevee.png";
import corvisquireSprite from "@/public/images/sprites/corvisquire.png";
import arbokSprite from "@/public/images/sprites/arbok.png";
import jolteonSprite from "@/public/images/sprites/jolteon.png";
import Table from "@/app/components/Table";
import NavigationButtonsContainer from "@/app/components/navigation/NavigationButtonsContainer";
// normal, flying, fighting, poison, electric
export default function SemiJoin() {
  return (
    <main>
      {/* Heading and synonym */}
      <section id="header-section">
        <div className="flex flex-col justify-center items-start">
          <h3>Semi join</h3>
          <span className="text-sm text-gray-500 dark:text-sky-400">
            (left semi join)
          </span>
        </div>
      </section>
      {/* Description about the join */}
      <section id="description-section">
        <div className="flex flex-col justify-center items-start">
          <p>
            In the context of relational databases and SQL (Structured Query
            Language), a semi join is a query operation that combines data from
            two or more tables based on a specified condition or common column
            values. However, it distinguishes itself from other join types as it
            does not return all columns from the participating tables. Instead,
            it yields a result set containing columns from one table (typically
            the left table) while filtering rows based on matching values in the
            other table (usually the right table).
            <br />
            <br /> In simpler terms, a semi join concentrates on rows that
            possess matching values in the right table, ensuring that the result
            set only contains data from the left table while eliminating
            non-matching rows from both tables. This operation proves especially
            valuable in situations where you need to filter and reduce data from
            the left table based on conditions in the right table.
            <br />
            <br /> The semi join finds frequent application in data filtering
            and subsetting, enabling the retrieval of pertinent records from the
            left table according to the presence of related data in the right
            table. It plays a pivotal role in a multitude of data analysis and
            query optimization tasks within relational database systems.
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
            <span className="italic"> table1 t1 </span>
            <span className="font-bold text-orange-600 dark:text-sky-300">
              LEFT SEMI JOIN{" "}
            </span>
            <span className="italic"> table2 t2 </span>
            <br />
            <span className="font-bold text-orange-600 dark:text-sky-300">
              ON{" "}
            </span>
            <br />
            <span className="italic">t1.column_name = t2.column_name</span>
          </p>
        </div>
      </section>
      {/* Example section*/}
      <section id="source-data-section">
        <div className=" space-y-8">
          <div>
            <h4>Example</h4>
            <p>
              In this example, we will perform a semi between left table pokemon
              and right table pokemonTypes to display the pokemon name with its
              type by joining pokemon.typeId column with pokemonType.id column.
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
                  <td>eevee</td>
                  <td>type1</td>
                  <td>
                    <Image src={eeveeSprite} alt="eevee-sprite" width={50} />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>corvisquire</td>
                  <td>type2</td>
                  <td>
                    <Image
                      src={corvisquireSprite}
                      alt="corvisquire-sprite"
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
                  <td>jolteon</td>
                  <td>type4</td>
                  <td>
                    <Image src={jolteonSprite} alt="arbok-sprite" width={50} />
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
                    <span className="bg-orange-500  px-4 rounded-md py-1 text-slate-900">
                      normal
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type2</td>
                  <td>
                    <span className="bg-slate-200  px-4 rounded-md py-1 text-slate-900">
                      flying
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
              <span className="italic">p.name, p.sprite</span>
              <br />
              <span className="font-bold text-orange-500 dark:text-sky-400">
                FROM
              </span>
              <span className="italic"> pokemon as p </span>
              <span className="font-bold text-orange-600 dark:text-sky-300">
                LEFT SEMI JOIN{" "}
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
                  <th>sprite</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>eevee</td>

                  <td>
                    <Image src={eeveeSprite} alt="eevee-sprite" width={50} />
                  </td>
                </tr>
                <tr>
                  <td>corvisquire</td>

                  <td>
                    <Image
                      src={corvisquireSprite}
                      alt="eevee-sprite"
                      width={50}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div>
            <p>
              Here only the pokemon for which there exists a matching type is
              returned. But the catch is that in the result, you can only select
              columns available in the left table
            </p>
          </div>
        </div>
      </section><NavigationButtonsContainer
        backLink="/joins/cross-join"
        nextLink="/joins/anti-join"
      />
    </main>
  );
}
