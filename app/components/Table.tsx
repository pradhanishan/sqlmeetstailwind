/*

This server component renders headers and data. data can be either a string or a static image

*/

import Image, { StaticImageData } from "next/image";

export default function Table({
  headers,
  data,
}: {
  headers: {
    key: string;
    value: string;
  }[];
  data: {
    key: string;
    value: (
      | {
          key: string;
          value: string;
        }
      | {
          key: string;
          value: string | StaticImageData;
        }
    )[];
  }[];
}) {
  // header elements to render inside the table head
  const tableHeadrs: JSX.Element[] = headers.map((header) => {
    return <th key={header.key}>{header.value}</th>;
  });

  //   a 2D array of data to render inside the table body
  const tableData = data.map((row) => {
    return (
      <tr key={row.key}>
        {row.value.map((col) => {
          return (
            <td key={col.key}>
              {typeof col.value === "string" ? (
                col.value
              ) : (
                <Image
                  src={col.value}
                  alt={col.key}
                  width={50}
                  priority={true}
                  className="hover:scale-125 duration-300"
                  quality={40}
                />
              )}
            </td>
          );
        })}
      </tr>
    );
  });
  return (
    <div
      className="overflow-auto 
        bg-transparent rounded-md flex justify-center
        shadow-sm shadow-gray-700 
        dark:shadow-md
        dark:shadow-sky-700 max-w-fit
        "
    >
      <table>
        <thead>
          <tr>{tableHeadrs}</tr>
        </thead>
        <tbody>{tableData}</tbody>
      </table>
    </div>
  );
}
