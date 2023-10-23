export default function Description({
  description,
}: {
  description: {
    key: string;
    value: string;
  }[];
}) {
  const descriptionLines = description.map((line) => {
    return <span key={line.key}>{line.value}</span>;
  });

  return (
    <div>
      <p
        className="text-md bg-gray-100 dark:bg-slate-700 p-2 rounded-lg
   text-slate-900 dark:text-white w-full"
      >
        {descriptionLines}
      </p>
    </div>
  );
}
