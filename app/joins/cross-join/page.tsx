import Image from "next/image";
import dragonairSprite from "@/public/images/sprites/dragonair.png";
import sylveonSprite from "@/public/images/sprites/sylveon.png";
import caterpieSprite from "@/public/images/sprites/caterpie.png";
import Table from "@/app/components/Table";

// dragon, fairy, bug

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
            A cross join, in the realm of relational databases and SQL
            (Structured Query Language), is a query operation that combines data
            from two or more tables without the need for a specified condition
            or common column values. <br />
            <br />
            Unlike other join types that rely on matching data, a cross join
            produces a result set that contains all possible combinations of
            rows from the participating tables. It effectively forms the
            Cartesian product, where each row from the first table is combined
            with every row from the second table. <br />
            <br />
            In simpler terms, a cross join creates a comprehensive result set,
            encompassing every record from both tables, without regard to any
            relationships or conditions. It is a valuable tool when you need to
            generate all possible combinations of data or when no specific
            matching criteria are needed. <br />
            <br />
            This operation is often employed in scenarios where you want to
            explore all possible pairings of data or when you need to perform
            calculations or comparisons across multiple datasets. It is a useful
            feature for various data analysis and reporting tasks within
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
            <span className="italic">column1, column2, ...</span>
            <br />
            <span className="font-bold text-gray-600 dark:text-sky-400">
              FROM
            </span>
            <span className="italic"> table1 </span>
            <span className="font-bold text-gray-700 dark:text-sky-300">
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
                    <span className="bg-indigo-600  px-4 rounded-md py-1 ">
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
                    <span className="bg-emerald-700  px-4 rounded-md py-1 ">
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
                    <span className="bg-indigo-600  px-4 rounded-md py-1 ">
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
                    <span className="bg-emerald-700  px-4 rounded-md py-1 ">
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
                    <span className="bg-indigo-600  px-4 rounded-md py-1 text-slate-900">
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
              pokemon type combinations. Dragonair, Caterpie and Sylveon have a record for types dragon, fairy and bug each.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
