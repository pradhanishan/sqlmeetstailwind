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
    <div
      className="text-md
      bg-gray-100
      dark:bg-slate-700
      px-6 py-2
      rounded-lg
      text-slate-900
      dark:text-white
      w-full lg:w-3/4 shadow-sm
      shadow-gray-400 dark:shadow-sm dark:shadow-sky-400 overflow-y-scroll"
    >
      <p className=" ">{descriptionLines}</p>
    </div>
  );
}
