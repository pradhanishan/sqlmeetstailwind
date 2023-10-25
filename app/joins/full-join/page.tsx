import Image from "next/image";
import aggronSprite from "@/public/images/sprites/aggron.png";
import cranidosSprite from "@/public/images/sprites/cranidos.png";
import hippowdonSprite from "@/public/images/sprites/hippowdon.png";
import rioluSprite from "@/public/images/sprites/riolu.png";

import Table from "@/app/components/Table";
import NavigationButtonsContainer from "@/app/components/navigation/NavigationButtonsContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full Join"
};

export default function FullJoin() {
  return (
    <main>
      {/* Heading and synonym */}
      <section id="header-section">
        <div className="flex flex-col justify-center items-start">
          <h3>Full join</h3>
          <span className="text-sm text-gray-500 dark:text-sky-400">
            (full outer join)
          </span>
        </div>
      </section>
      {/* Description about the join */}
      <section id="description-section">
        <div className="flex flex-col justify-center items-start">
          <p>
            Within the realm of relational databases and SQL (Structured Query
            Language), a full join represents a query operation that merges data
            from two or more tables based on specified conditions or common
            column values.
            <br />
            <br /> In contrast to an inner join, which retrieves rows with
            matching values in both tables, a full join encompasses all rows
            from both tables. It ensures that no data is omitted, forming a
            result set that incorporates records from both the left (or first)
            table and the right (or second) table. If a specific row in either
            table lacks a match, null values are employed to represent the
            missing data.
            <br />
            <br /> Put simply, a full join offers a comprehensive result set
            that includes all available information from both tables. This
            feature is highly potent when the objective is to unite data from
            various sources or tables while maintaining data integrity.
            <br />
            <br /> This operation is frequently employed to scrutinize data
            relationships, unearth missing data, and produce comprehensive
            reports that encompass all data from both tables. It plays a pivotal
            role in data analysis and reporting within relational database
            systems.
          </p>
        </div>
      </section>
      {/* Select syntax for the join */}
      <section id="query syntax">
        <div className="flex flex-col justify-center items-start">
          <h4>syntax</h4>
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
              FULL JOIN{" "}
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
            <h4>example</h4>
            <p>
              In this example, we will perform a full join between left table
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
                  <td>aggron</td>
                  <td>type1</td>
                  <td>
                    <Image src={aggronSprite} alt="aggron-sprite" width={50} />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>cranidos</td>
                  <td>type2</td>
                  <td>
                    <Image
                      src={cranidosSprite}
                      alt="cranidos-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>hippowdon</td>
                  <td>type3</td>
                  <td>
                    <Image
                      src={hippowdonSprite}
                      alt="hippowdon-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>riolu</td>
                  <td>type4</td>
                  <td>
                    <Image
                      src={rioluSprite}
                      alt="hippowdon-sprite"
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
                      steel
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type5</td>
                  <td>
                    <span className="bg-pink-300  px-4 rounded-md py-1 text-slate-900">
                      fairy
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type3</td>
                  <td>
                    <span className="bg-stone-700  px-4 rounded-md py-1 text-white">
                      ground
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type6</td>
                  <td>
                    <span className="bg-emerald-700  px-4 rounded-md py-1 text-slate-900">
                      bug
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
                FULL JOIN{" "}
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
                  <td>aggron</td>
                  <td>
                    <span className="bg-zinc-700  px-4 rounded-md py-1 text-white">
                      steel
                    </span>
                  </td>
                  <td>
                    <Image src={aggronSprite} alt="aggron-sprite" width={50} />
                  </td>
                </tr>
                <tr>
                  <td>cranidos</td>
                  <td>
                    <span className="px-4 font-bold rounded-md py-1 text-orange-500 dark:text-sky-400 italic">
                      null
                    </span>
                  </td>
                  <td>
                    <Image
                      src={cranidosSprite}
                      alt="cranidos-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>hippowdon</td>
                  <td>
                    <span className="bg-stone-700  px-4 rounded-md py-1 text-white">
                      ground
                    </span>
                  </td>
                  <td>
                    <Image
                      src={hippowdonSprite}
                      alt="hippowdon-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>riolu</td>
                  <td>
                    <span className="px-4 font-bold rounded-md py-1 text-orange-500 dark:text-sky-400 italic">
                      null
                    </span>
                  </td>
                  <td>
                    <Image
                      src={rioluSprite}
                      alt="hippowdon-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="px-4 font-bold rounded-md py-1 text-orange-500 dark:text-sky-400 italic">
                      null
                    </span>
                  </td>
                  <td>
                    <span className="bg-pink-300  px-4 rounded-md py-1 text-slate-900">
                      fairy
                    </span>
                  </td>
                  <td>
                    <span className="px-4 font-bold rounded-md py-1 text-orange-500 dark:text-sky-400 italic">
                      null
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="px-4 font-bold rounded-md py-1 text-orange-500 dark:text-sky-400 italic">
                      null
                    </span>
                  </td>
                  <td>
                    <span className="bg-emerald-700  px-4 rounded-md py-1 text-slate-900">
                      bug
                    </span>
                  </td>
                  <td>
                    <span className="px-4 font-bold rounded-md py-1 text-orange-500 dark:text-sky-400 italic">
                      null
                    </span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div>
            <p>
              Here all matching types and pokemon from left and right tables are
              returned. Also for types fairy and bug, null pokemon are returned.
              And for pokemon cranidos and riolu, null types are returned.
            </p>
          </div>
        </div>
      </section><NavigationButtonsContainer
        backLink="/joins/right-join"
        nextLink="/joins/cross-join"
      />
    </main>
  );
}
