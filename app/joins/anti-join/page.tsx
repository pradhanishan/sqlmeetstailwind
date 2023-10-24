import Image from "next/image";
import charmeleonSprite from "@/public/images/sprites/charmeleon.png";
import eeveeSprite from "@/public/images/sprites/eevee.png";
import rioluSprite from "@/public/images/sprites/riolu.png";
import vaporeonSprite from "@/public/images/sprites/vaporeon.png";
import duskullSprite from "@/public/images/sprites/duskull.png";
import alakazamSprite from "@/public/images/sprites/alakazam.png";
import Table from "@/app/components/Table";
// fire, water, normal, riolu, ghost, psychic
export default function AntiJoin() {
  return (
    <main>
      {/* Heading and synonym */}
      <section id="header-section">
        <div className="flex flex-col justify-center items-start">
          <h3>Anti join</h3>
          <span className="text-sm text-gray-500 dark:text-sky-400">
            (left anti join, complement join, minus join)
          </span>
        </div>
      </section>
      {/* Description about the join */}
      <section id="description-section">
        <div className="flex flex-col justify-center items-start">
          <p>
            An anti join, within the realm of relational databases and SQL
            (Structured Query Language), is a query operation that combines data
            from two or more tables based on a specified condition or common
            column values. <br />
            <br />
            However, unlike an inner join that retrieves rows with matching
            values, an anti join does the opposite. It returns rows from the
            first table (usually the left table) where there are no
            corresponding values in the second table (usually the right table).
            In other words, it identifies records in the left table that have no
            related data in the right table. <br />
            <br />
            In simpler terms, an anti join produces a result set that helps you
            discover and isolate data in the left table that is missing or does
            not have corresponding values in the right table. It is a valuable
            tool when you want to identify and analyze data discrepancies or
            outliers. <br />
            <br />
            The anti join is often used to find missing or unmatched data,
            investigate data anomalies, and conduct data quality assessments. It
            plays a crucial role in data validation and integrity checks within
            relational database systems. <br />
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
            <span className="italic">t1.column1, t1.column2, ...</span>
            <br />
            <span className="font-bold text-gray-600 dark:text-sky-400">
              FROM
            </span>
            <span className="italic"> table1 t1</span>
            <span className="font-bold text-gray-700 dark:text-sky-300">
              LEFT ANTI JOIN{" "}
            </span>
            <span className="italic">table2 t2</span>
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
              In this example, we will perform a left anti join between left
              table pokemon and right table pokemonTypes to display the pokemon
              name with its type by joining pokemon.typeId column with
              pokemonType.id column.
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
                  <td>eevee</td>
                  <td>type2</td>
                  <td>
                    <Image src={eeveeSprite} alt="eevee-sprite" width={50} />
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>riolu</td>
                  <td>type3</td>
                  <td>
                    <Image src={rioluSprite} alt="riolu-sprite" width={50} />
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>alakazam</td>
                  <td>type4</td>
                  <td>
                    <Image
                      src={alakazamSprite}
                      alt="alakazam-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>duskull</td>
                  <td>type5</td>
                  <td>
                    <Image
                      src={duskullSprite}
                      alt="duskull-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>vaporeon</td>
                  <td>type6</td>
                  <td>
                    <Image
                      src={vaporeonSprite}
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
                    <span className="bg-orange-500  px-4 rounded-md py-1 text-slate-900">
                      normal
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type3</td>
                  <td>
                    <span className="bg-orange-800  px-4 rounded-md py-1 text-white">
                      fighting
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type4</td>
                  <td>
                    <span className="bg-rose-300  px-4 rounded-md py-1 text-slate-900">
                      psychic
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
              <span className="italic">p.name, p.sprite</span>
              <br />
              <span className="font-bold text-gray-600 dark:text-sky-400">
                FROM
              </span>
              <span className="italic"> pokemon as p </span>
              <span className="font-bold text-gray-700 dark:text-sky-300">
                LEFT ANTI JOIN{" "}
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
                  <th>sprite</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>duskull</td>
                  <td>
                    <Image
                      src={duskullSprite}
                      alt="duskull-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>vaporeon</td>
                  <td>
                    <Image src={vaporeonSprite} alt="eevee-sprite" width={50} />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div>
            <p>
              Here only the pokemon for which no matching type exists was
              returned. Moreover, similar to a semi join, you can only get the
              data from the left table in an anti join
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
