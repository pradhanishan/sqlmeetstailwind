import Image from "next/image";
import turtwigSprite from "@/public/images/sprites/turtwig.png";
import grotleSprite from "@/public/images/sprites/grotle.png";
import torterraSprite from "@/public/images/sprites/torterra.png";

import chimcharSprite from "@/public/images/sprites/chimchar.png";
import monfernoSprite from "@/public/images/sprites/monferno.png";
import infernapeSprite from "@/public/images/sprites/infernape.png";

import piplupSprite from "@/public/images/sprites/piplup.png";
import prinplupSprite from "@/public/images/sprites/prinplup.png";
import empoleonSprite from "@/public/images/sprites/empoleon.png";

import Table from "@/app/components/Table";
export default function SelfJoin() {
  return (
    <main>
      {/* Heading and synonym */}
      <section id="header-section">
        <div className="flex flex-col justify-center items-start">
          <h3>Self join</h3>
        </div>
      </section>
      {/* Description about the join */}
      <section id="description-section">
        <div className="flex flex-col justify-center items-start">
          <p>
            In the domain of relational databases and SQL (Structured Query
            Language), a self-join is an operation that involves joining a table
            with itself based on a specified condition or common column values.
            <br />
            <br /> This technique finds significant application when working
            with hierarchical or recursive data structures, like organizational
            charts or product categories. Through a self-join, it becomes
            feasible to establish connections and extract associated data within
            the same dataset.
            <br />
            <br /> This proves particularly advantageous in situations where you
            need to navigate relationships like parent-child hierarchies or
            other forms of data associations present within a single table.
            <br />
            <br /> Self-joins serve as a potent tool for querying and
            scrutinizing hierarchical data structures in relational database
            systems.
          </p>
        </div>
      </section>
      {/* Select syntax for the join */}
      <section id="query syntax">
        <div className="flex flex-col justify-center items-start">
          <h4>Syntax</h4>
          <p>
            Self join does not have a dedicated syntax. <br />
            <br />
            Any of the previous joins can be used as a self join.
          </p>
        </div>
      </section>
      {/* Example section*/}
      <section id="source-data-section">
        <div className=" space-y-8">
          <div>
            <h4>Example</h4>
            <p>
              In this example, we will join pokemon table with itself twice to
              get an evolution line of a pokemon.
            </p>
          </div>
          <div>
            <h5>data</h5>
          </div>
          <div
            className="flex flex-col sm:items-stretch space-y-8 
          sm:flex-row sm:space-y-0 sm:space-x-8 justify-center"
          >
            {/* Right Table */}
            <Table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>type</th>
                  <th>sprite</th>
                  <th>parent_id</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Turtwig</td>
                  <td>Grass</td>
                  <td>
                    <Image
                      src={turtwigSprite}
                      alt="turtwig-sprite"
                      width={50}
                    />
                  </td>
                  <td>null</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Grotle</td>
                  <td>Grass</td>
                  <td>
                    <Image src={grotleSprite} alt="grotle-sprite" width={50} />
                  </td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Torterra</td>
                  <td>Grass/Ground</td>
                  <td>
                    <Image
                      src={torterraSprite}
                      alt="torterra-sprite"
                      width={50}
                    />
                  </td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Chimchar</td>
                  <td>Fire</td>
                  <td>
                    <Image
                      src={chimcharSprite}
                      alt="chimchar-sprite"
                      width={50}
                    />
                  </td>
                  <td>null</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Monferno</td>
                  <td>Fire/Fighting</td>
                  <td>
                    <Image
                      src={monfernoSprite}
                      alt="monferno-sprite"
                      width={50}
                    />
                  </td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Infernape</td>
                  <td>Fire/Fighting</td>
                  <td>
                    <Image
                      src={infernapeSprite}
                      alt="infernape-sprite"
                      width={50}
                    />
                  </td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Piplup</td>
                  <td>Water</td>
                  <td>
                    <Image src={piplupSprite} alt="piplup-sprite" width={50} />
                  </td>
                  <td>null</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Prinplup</td>
                  <td>Water</td>
                  <td>
                    <Image
                      src={prinplupSprite}
                      alt="prinplup-sprite"
                      width={50}
                    />
                  </td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Empoleon</td>
                  <td>Water/Steel</td>
                  <td>
                    <Image
                      src={empoleonSprite}
                      alt="empoleon-sprite"
                      width={50}
                    />
                  </td>
                  <td>8</td>
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
              <span className="italic">
                p1.name AS base, p1.sprite as base_sprite,
              </span>
              <br />
              <span className="italic">
                p2.name AS mid, p2.sprite as mid_sprite,
              </span>
              <br />
              <span className="italic">
                p3.name AS final, p3.sprite as final_sprite
              </span>
              <br />
              <span className="font-bold text-orange-500 dark:text-sky-400">
                FROM
              </span>
              <span className="italic"> pokemon p1 </span>
              <span className="font-bold text-gray-700 dark:text-sky-300">
                INNER JOIN{" "}
              </span>
              <span className="italic">pokemon p2 ON p1.id = p2.parent_id</span>
              <br />{" "}
              <span className="font-bold text-gray-700 dark:text-sky-300">
                INNER JOIN{" "}
              </span>
              <span className="italic">pokemon p3 ON p2.id = p3.parent_id</span>
              <br />{" "}
              <span className="font-bold text-orange-500 dark:text-sky-400">
                WHERE p1.parent_id IS NULL
              </span>
              ORDER BY p1.id;
            </p>
          </div>
          <div>
            <h5>Result</h5>
          </div>
          <div className="flex sm:justify-center">
            <Table>
              <thead>
                <tr>
                  <th>base</th>
                  <th>base_sprite</th>
                  <th>mid</th>
                  <th>mid_sprite</th>
                  <th>final</th>
                  <th>final_sprite</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Turtwig</td>
                  <td>
                    <Image
                      src={turtwigSprite}
                      alt="turtwig-sprite"
                      width={50}
                    />
                  </td>
                  <td>Grotle</td>
                  <td>
                    <Image src={grotleSprite} alt="grotle-sprite" width={50} />
                  </td>
                  <td>Torterra</td>
                  <td>
                    <Image
                      src={torterraSprite}
                      alt="torterra-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Chimchar</td>
                  <td>
                    <Image
                      src={chimcharSprite}
                      alt="chimchar-sprite"
                      width={50}
                    />
                  </td>
                  <td>Monferno</td>
                  <td>
                    <Image
                      src={monfernoSprite}
                      alt="monferno-sprite"
                      width={50}
                    />
                  </td>
                  <td>Infernape</td>
                  <td>
                    <Image
                      src={infernapeSprite}
                      alt="infernape-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Piplup</td>
                  <td>
                    <Image src={piplupSprite} alt="piplup-sprite" width={50} />
                  </td>
                  <td>Prinplup</td>
                  <td>
                    <Image
                      src={prinplupSprite}
                      alt="prinplup-sprite"
                      width={50}
                    />
                  </td>
                  <td>Empoleon</td>
                  <td>
                    <Image
                      src={empoleonSprite}
                      alt="empoleon-sprite"
                      width={50}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div>
            <p>
              Here, we are self joining the pokemon table twice to get all
              evolution hierarchy of Gen 4 starters, The best starters in
              pokemon series.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
