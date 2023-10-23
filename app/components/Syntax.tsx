export default function Syntax({
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
      id="syntax-container"
      className="bg-gray-100 dark:bg-slate-700 px-6 py-2 rounded-lg text-slate-900 dark:text-white w-full lg:w-1/4
    shadow-sm
     shadow-gray-400 dark:shadow-sm dark:shadow-sky-400
    "
    >
      <h4 className="font-bold text-sm text-center">Syntax</h4>
      {queryLines}
    </div>
  );
}
