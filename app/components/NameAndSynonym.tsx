import React from "react";

export default function NameAndSynonym({
  name,
  synonyms,
}: {
  name: string;
  synonyms?: string;
}) {
  return (
    <div
      className="flex flex-col justify-center items-center"
      id="heading-container"
    >
      <div>
        <h3>{name}</h3>
      </div>
      {synonyms !== undefined && synonyms !== null ? (
        <div className="flex flex-row space-x-1 px-2">
          <span className="text-sm text-gray-500 dark:text-gray-300">
            {synonyms}
          </span>
        </div>
      ) : null}
    </div>
  );
}
