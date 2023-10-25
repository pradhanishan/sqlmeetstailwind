import Image, { StaticImageData } from "next/image";
import Link from "next/link";
export default function JoinTypeCard({
  src,
  alt,
  joinType,
  href,
}: {
  src: StaticImageData;
  alt: string;
  joinType: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div
        className="flex flex-col  w-fit justify-start items-center overflow-hidden rounded-md
    bg-gray-400 shadow-md dark:bg-slate-800 dark:shadow-sky-700 dark:shadow-sm group
        hover:shadow-zinc-500 dark:hover:shadow-sky-400 h-[200px]
    "
      >
        <Image
          src={src}
          alt={alt}
          priority
          width={200}
          className="
        brightness-50 group-hover:brightness-100
         transition-all duration-300 h-3/4 hover:backdrop:grayscale"
        />
        <h6
          className="py-2 lowercase group-hover:animate-pulse
       transition-all duration-300 font-mono text-sm" 
        >
          {joinType}
        </h6>
      </div>
    </Link>
  );
}
