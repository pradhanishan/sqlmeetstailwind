export default function Query({
  query,
}: {
  query: {
    key: string;
    value: string;
  }[];
}) {
  const queryLines = query.map((line) => {
    return (
      <div key={line.key}>
        <span>{line.value}</span>
        <br />
      </div>
    );
  });

  return (
    <div
      id="uery-container"
      className="bg-gray-100 dark:bg-slate-700 px-6 py-2  text-slate-900 dark:text-white
    shadow-sm
     shadow-gray-400 dark:shadow-sm dark:shadow-sky-400
    "
    >
      <h4 className="font-bold text-sm text-center">Query</h4>
      {queryLines}
    </div>
  );
}
