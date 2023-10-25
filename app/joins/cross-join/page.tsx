import Image from "next/image";
import dragonairSprite from "@/public/images/sprites/dragonair.png";
import sylveonSprite from "@/public/images/sprites/sylveon.png";
import caterpieSprite from "@/public/images/sprites/caterpie.png";
import Table from "@/app/components/Table";
import NavigationButtonsContainer from "@/app/components/navigation/NavigationButtonsContainer";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cross Join"
};

export default function CrossJoin() {
  return (
    <main>
      {/* Heading and synonym */}
      <section id="header-section">
        <div className="flex flex-col justify-center items-start">
          <h3>Cross join</h3>
          <span className="text-sm text-gray-500 dark:text-sky-400">
            (cartesian join)
          </span>
        </div>
      </section>
      {/* Description about the join */}
      <section id="description-section">
        <div className="flex flex-col justify-center items-start">
          <p>
            In the domain of relational databases and SQL (Structured Query
            Language), a cross join represents a query operation that merges
            data from two or more tables without the necessity of a specified
            condition or common column values.
            <br />
            <br /> Unlike other join types that rely on matching data, a cross
            join generates a result set containing all conceivable combinations
            of rows from the participating tables. It essentially forms the
            Cartesian product, where each row from the first table pairs with
            every row from the second table.
            <br />
            <br /> In simpler terms, a cross join constructs a comprehensive
            result set, encompassing every record from both tables, regardless
            of any relationships or conditions. This proves to be a valuable
            tool when the goal is to generate all possible combinations of data
            or when no specific matching criteria are required.
            <br />
            <br /> This operation is frequently employed in scenarios where one
            needs to explore all conceivable pairings of data or conduct
            calculations and comparisons across multiple datasets. It serves as
            a useful feature for a variety of data analysis and reporting tasks
            within relational database systems.
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
              CROSS JOIN{" "}
            </span>
            <span className="italic">table2</span>
          </p>
        </div>
      </section>
      {/* Example section*/}
      <section id="source-data-section">
        <div className=" space-y-8">
          <div>
            <h4>Example</h4>
            <p>
              In this example, we will perform a cross join between left table
              pokemon and right table pokemonTypes to display the pokemon name
              with its type
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
                  <td>dragonair</td>
                  <td>type1</td>
                  <td>
                    <Image
                      src={dragonairSprite}
                      alt="dragonair-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>sylveon</td>
                  <td>type2</td>
                  <td>
                    <Image
                      src={sylveonSprite}
                      alt="sylveon-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>caterpie</td>
                  <td>type3</td>
                  <td>
                    <Image
                      src={caterpieSprite}
                      alt="caterpie-sprite"
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
                    <span className="bg-indigo-600  px-4 rounded-md py-1 text-white">
                      dragon
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type2</td>
                  <td>
                    <span className="bg-pink-300  px-4 rounded-md py-1 text-slate-900">
                      fairy
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type3</td>
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
                CROSS JOIN{" "}
              </span>
              <span className="italic">pokemonType as t</span>
              <br />
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
                  <td>dragonair</td>
                  <td>
                    <span className="bg-indigo-600  px-4 rounded-md py-1 text-white">
                      dragon
                    </span>
                  </td>
                  <td>
                    <Image
                      src={dragonairSprite}
                      alt="dragonair-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>dragonair</td>
                  <td>
                    <span className="bg-pink-300  px-4 rounded-md py-1 text-slate-900">
                      fairy
                    </span>
                  </td>
                  <td>
                    <Image
                      src={dragonairSprite}
                      alt="dragonair-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>dragonair</td>
                  <td>
                    <span className="bg-emerald-700  px-4 rounded-md py-1 text-slate-900">
                      bug
                    </span>
                  </td>
                  <td>
                    <Image
                      src={dragonairSprite}
                      alt="dragonair-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>sylveon</td>
                  <td>
                    <span className="bg-indigo-600  px-4 rounded-md py-1 text-white">
                      dragon
                    </span>
                  </td>
                  <td>
                    <Image
                      src={sylveonSprite}
                      alt="dragonair-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>sylveon</td>
                  <td>
                    <span className="bg-pink-300  px-4 rounded-md py-1 text-slate-900 ">
                      fairy
                    </span>
                  </td>
                  <td>
                    <Image
                      src={sylveonSprite}
                      alt="dragonair-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>sylveon</td>
                  <td>
                    <span className="bg-emerald-700  px-4 rounded-md py-1 text-slate-900">
                      bug
                    </span>
                  </td>
                  <td>
                    <Image
                      src={sylveonSprite}
                      alt="dragonair-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>caterpie</td>
                  <td>
                    <span className="bg-indigo-600  px-4 rounded-md py-1 text-white">
                      dragon
                    </span>
                  </td>
                  <td>
                    <Image
                      src={caterpieSprite}
                      alt="dragonair-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>caterpie</td>
                  <td>
                    <span className="bg-rose-300  px-4 rounded-md py-1 text-slate-900">
                      fairy
                    </span>
                  </td>
                  <td>
                    <Image
                      src={caterpieSprite}
                      alt="dragonair-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>caterpie</td>
                  <td>
                    <span className="bg-emerald-700  px-4 rounded-md py-1 text-slate-900">
                      bug
                    </span>
                  </td>
                  <td>
                    <Image
                      src={caterpieSprite}
                      alt="dragonair-sprite"
                      width={50}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div>
            <p>
              Here the result contains a product of all possible pokemon and
              pokemon type combinations. Dragonair, Caterpie and Sylveon have a
              record for types dragon, fairy and bug each.
            </p>
          </div>
        </div>
      </section><NavigationButtonsContainer
        backLink="/joins/full-join"
        nextLink="/joins/semi-join"
      />
    </main>
  );
}
