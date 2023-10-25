import Image from "next/image";
import aggronSprite from "@/public/images/sprites/aggron.png";
import alakazamSprite from "@/public/images/sprites/alakazam.png";
import arbokSprite from "@/public/images/sprites/arbok.png";
import caterpieSprite from "@/public/images/sprites/caterpie.png";
import corvisquireSprite from "@/public/images/sprites/corvisquire.png";
import cranidosSprite from "@/public/images/sprites/cranidos.png";
import dragonairSprite from "@/public/images/sprites/dragonair.png";
import duskullSprite from "@/public/images/sprites/duskull.png";
import eeveeSprite from "@/public/images/sprites/eevee.png";
import glaceonSprite from "@/public/images/sprites/glaceon.png";
import hippowdonSprite from "@/public/images/sprites/hippowdon.png";
import jolteonSprite from "@/public/images/sprites/jolteon.png";
import rioluSprite from "@/public/images/sprites/riolu.png";
import sylveonSprite from "@/public/images/sprites/sylveon.png";
import treeckoSprite from "@/public/images/sprites/treecko.png";
import umbreonSprite from "@/public/images/sprites/umbreon.png";
import vaporeonSprite from "@/public/images/sprites/vaporeon.png";
import charmeleonSprite from "@/public/images/sprites/charmeleon.png";
import Table from "@/app/components/Table";
import NavigationButtonsContainer from "@/app/components/navigation/NavigationButtonsContainer";
export default function NaturalJoin() {
  return (
    <main>
      {/* Heading and synonym */}
      <section id="header-section">
        <div className="flex flex-col justify-center items-start">
          <h3>Natural join</h3>
          <span className="text-sm text-gray-500 dark:text-sky-400">
            (implicit join, simple join)
          </span>
        </div>
      </section>
      {/* Description about the join */}
      <section id="description-section">
        <div className="flex flex-col justify-center items-start">
          <p>
            In the domain of relational databases and SQL (Structured Query
            Language), a natural join represents a query operation that merges
            data from two or more tables based on columns with matching names.
            <br />
            <br /> Differing from other join types that necessitate explicit
            join conditions, a natural join identifies and merges rows from the
            participating tables by automatically matching columns with
            identical names. This approach simplifies the join process by
            utilizing common column names, making it a convenient tool for
            combining related data.
            <br />
            <br /> In simpler terms, a natural join generates a result set that
            includes rows from both tables where column names align,
            effortlessly merging data without the need for explicit join
            conditions. This operation is frequently used when the goal is to
            unify data from distinct tables that share column names,
            streamlining the join process for enhanced clarity and efficiency.
            <br />
            <br /> The natural join is especially beneficial in scenarios where
            data from related tables with shared column names needs to be
            combined. It reduces the complexity of query composition while
            ensuring data consistency. It proves to be a valuable feature for
            data retrieval and analysis in relational database systems.
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
            <span className="italic">t1column1, t2column1, ...</span>
            <br />
            <span className="font-bold text-orange-500 dark:text-sky-400">
              FROM
            </span>
            <span className="italic"> table1 as t1</span>
            <span className="font-bold text-orange-600 dark:text-sky-300">
              NATURAL JOIN
            </span>
            <span className="italic">table2 as t2</span>
            <br />{" "}
          </p>
        </div>
      </section>
      {/* Example section*/}
      <section id="source-data-section">
        <div className=" space-y-8">
          <div>
            <h4>Example</h4>
            <p>
              In this example, we will perform a natural join between left table
              pokemon and right table pokemonTypes to display the pokemon name
              with its type. For this example, we will assume both tables have a
              column name typeId
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
                  <td>alakazam</td>
                  <td>type2</td>
                  <td>
                    <Image
                      src={alakazamSprite}
                      alt="alakazam-sprite"
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
                  <td>caterpie</td>
                  <td>type4</td>
                  <td>
                    <Image
                      src={caterpieSprite}
                      alt="caterpie-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>corvisquire</td>
                  <td>type5</td>
                  <td>
                    <Image
                      src={corvisquireSprite}
                      alt="corvisquire-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>cranidos</td>
                  <td>type6</td>
                  <td>
                    <Image
                      src={cranidosSprite}
                      alt="cranidos-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>dragonair</td>
                  <td>type7</td>
                  <td>
                    <Image
                      src={dragonairSprite}
                      alt="dragonair-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>duskull</td>
                  <td>type8</td>
                  <td>
                    <Image
                      src={duskullSprite}
                      alt="duskull-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>eevee</td>
                  <td>type9</td>
                  <td>
                    <Image src={eeveeSprite} alt="eevee-sprite" width={50} />
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>glaceon</td>
                  <td>type10</td>
                  <td>
                    <Image
                      src={glaceonSprite}
                      alt="glaceon-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>hippowdon</td>
                  <td>type11</td>
                  <td>
                    <Image
                      src={hippowdonSprite}
                      alt="hippowdon-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>jolteon</td>
                  <td>type12</td>
                  <td>
                    <Image
                      src={jolteonSprite}
                      alt="jolteon-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>riolu</td>
                  <td>type13</td>
                  <td>
                    <Image src={rioluSprite} alt="riolu-sprite" width={50} />
                  </td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>sylveon</td>
                  <td>type14</td>
                  <td>
                    <Image
                      src={sylveonSprite}
                      alt="sylveon-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>treecko</td>
                  <td>type15</td>
                  <td>
                    <Image
                      src={treeckoSprite}
                      alt="treecko-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>umbreon</td>
                  <td>type16</td>
                  <td>
                    <Image
                      src={umbreonSprite}
                      alt="umbreon-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>vaporeon</td>
                  <td>type17</td>
                  <td>
                    <Image
                      src={vaporeonSprite}
                      alt="vaporeon-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>charmeleon</td>
                  <td>type18</td>
                  <td>
                    <Image
                      src={charmeleonSprite}
                      alt="charmeleon-sprite"
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
                  <th>typeId</th>
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
                  <td>type2</td>
                  <td>
                    <span className="bg-rose-300  px-4 rounded-md py-1 text-slate-900">
                      psychic
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type3</td>
                  <td>
                    {" "}
                    <span className="bg-purple-300  px-4 rounded-md py-1 text-slate-900">
                      purple
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type4</td>
                  <td>
                    {" "}
                    <span className="bg-emerald-700  px-4 rounded-md py-1 text-slate-900">
                      psychic
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type5</td>
                  <td>
                    <span className="bg-slate-200  px-4 rounded-md py-1 text-slate-900">
                      flying
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type6</td>
                  <td>
                    <span className="bg-gray-600  px-4 rounded-md py-1 text-white">
                      rock
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type7</td>
                  <td>
                    <span className="bg-indigo-600  px-4 rounded-md py-1 text-white">
                      dragon
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type8</td>
                  <td>
                    <span className="bg-zinc-700  px-4 rounded-md py-1 text-white">
                      ghost
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type9</td>
                  <td>
                    <span className="bg-orange-500  px-4 rounded-md py-1 text-slate-900">
                      flying
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type10</td>
                  <td>
                    <span className="bg-white  px-4 rounded-md py-1 text-slate-900">
                      ice
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type11</td>
                  <td>
                    <span className="bg-stone-700  px-4 rounded-md py-1 text-white">
                      ground
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type12</td>
                  <td>
                    <span className="bg-yellow-300  px-4 rounded-md py-1 text-slate-900">
                      electric
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type13</td>
                  <td>
                    <span className="bg-orange-800  px-4 rounded-md py-1 text-white">
                      fighting
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type14</td>
                  <td>
                    <span className="bg-pink-300  px-4 rounded-md py-1 text-slate-900">
                      fairy
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type15</td>
                  <td>
                    <span className="bg-green-300  px-4 rounded-md py-1 text-slate-900">
                      grass
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type16</td>
                  <td>
                    <span className="bg-black  px-4 rounded-md py-1 text-white">
                      dark
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type17</td>
                  <td>
                    <span className="bg-blue-300  px-4 rounded-md py-1 text-slate-900">
                      water
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>type18</td>
                  <td>
                    <span className="bg-red-300  px-4 rounded-md py-1 text-slate-900">
                      fire
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
                RIGHT JOIN{" "}
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
                    <span className="bg-zinc-700 px-4 rounded-md py-1 text-white">
                      steel
                    </span>
                  </td>
                  <td>
                    <Image src={aggronSprite} alt="aggron-sprite" width={50} />
                  </td>
                </tr>
                <tr>
                  <td>alakazam</td>
                  <td>
                    <span className="bg-rose-300 px-4 rounded-md py-1 text-slate-900">
                      psychic
                    </span>
                  </td>
                  <td>
                    <Image
                      src={alakazamSprite}
                      alt="alakazam-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>arbok</td>
                  <td>
                    <span className="bg-purple-300 px-4 rounded-md py-1 text-slate-900">
                      purple
                    </span>
                  </td>
                  <td>
                    <Image src={arbokSprite} alt="arbok-sprite" width={50} />
                  </td>
                </tr>
                <tr>
                  <td>caterpie</td>
                  <td>
                    <span className="bg-emerald-700 px-4 rounded-md py-1 text-slate-900">
                      psychic
                    </span>
                  </td>
                  <td>
                    <Image
                      src={caterpieSprite}
                      alt="caterpie-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>corvisquire</td>
                  <td>
                    <span className="bg-slate-200 px-4 rounded-md py-1 text-slate-900">
                      flying
                    </span>
                  </td>
                  <td>
                    <Image
                      src={corvisquireSprite}
                      alt="corvisquire-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>cranidos</td>
                  <td>
                    <span className="bg-gray-600 px-4 rounded-md py-1 text-white">
                      rock
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
                  <td>dragonair</td>
                  <td>
                    <span className="bg-indigo-600 px-4 rounded-md py-1 text-white">
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
                  <td>duskull</td>
                  <td>
                    <span className="bg-zinc-700 px-4 rounded-md py-1 text-white">
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
                  <td>eevee</td>
                  <td>
                    <span className="bg-orange-500 px-4 rounded-md py-1 text-slate-900">
                      flying
                    </span>
                  </td>
                  <td>
                    <Image src={eeveeSprite} alt="eevee-sprite" width={50} />
                  </td>
                </tr>
                <tr>
                  <td>glaceon</td>
                  <td>
                    <span className="bg-white px-4 rounded-md py-1 text-slate-900">
                      ice
                    </span>
                  </td>
                  <td>
                    <Image
                      src={glaceonSprite}
                      alt="glaceon-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>hippowdon</td>
                  <td>
                    <span className="bg-stone-700 px-4 rounded-md py-1 text-white">
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
                  <td>jolteon</td>
                  <td>
                    <span className="bg-yellow-300 px-4 rounded-md py-1 text-slate-900">
                      electric
                    </span>
                  </td>
                  <td>
                    <Image
                      src={jolteonSprite}
                      alt="jolteon-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>riolu</td>
                  <td>
                    <span className="bg-orange-800 px-4 rounded-md py-1 text-white">
                      fighting
                    </span>
                  </td>
                  <td>
                    <Image src={rioluSprite} alt="riolu-sprite" width={50} />
                  </td>
                </tr>
                <tr>
                  <td>sylveon</td>
                  <td>
                    <span className="bg-pink-300 px-4 rounded-md py-1 text-slate-900">
                      fairy
                    </span>
                  </td>
                  <td>
                    <Image
                      src={sylveonSprite}
                      alt="sylveon-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>treecko</td>
                  <td>
                    <span className="bg-green-300 px-4 rounded-md py-1 text-slate-900">
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
                  <td>umbreon</td>
                  <td>
                    <span className="bg-black px-4 rounded-md py-1 text-white">
                      dark
                    </span>
                  </td>
                  <td>
                    <Image
                      src={umbreonSprite}
                      alt="umbreon-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>vaporeon</td>
                  <td>
                    <span className="bg-blue-300 px-4 rounded-md py-1 text-slate-900">
                      water
                    </span>
                  </td>
                  <td>
                    <Image
                      src={vaporeonSprite}
                      alt="vaporeon-sprite"
                      width={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>charmeleon</td>
                  <td>
                    <span className="bg-red-300 px-4 rounded-md py-1 text-slate-900">
                      fire
                    </span>
                  </td>
                  <td>
                    <Image
                      src={charmeleonSprite}
                      alt="charmeleon-sprite"
                      width={50}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div>
            <p>
              Here all matching rows were returned without any join condition
              specified between the tables because an automatic join was
              performed using column typeId. However, it is important to note
              that such joins are unpredictable and difficult to sustain and
              hence avoided in production.
            </p>
          </div>
        </div>
      </section><NavigationButtonsContainer
        backLink="/joins/anti-join"
        nextLink="/joins/self-join"
      />
    </main>
  );
}
