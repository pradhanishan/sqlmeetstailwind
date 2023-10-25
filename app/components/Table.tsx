/*

This server component renders headers and data. data can be either a string or a static image

*/

export default function Table({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="overflow-auto 
        bg-transparent rounded-md flex justify-center
        shadow-sm shadow-gray-700 
        dark:shadow-md
        hover:scale-105 transition-all hover:duration-500
        dark:shadow-sky-700 max-w-fit
        "
    >
      <table>{children}</table>
    </div>
  );
}
